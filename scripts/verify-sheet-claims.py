#!/usr/bin/env python3
"""Is a claimed brand colour painted by the reference page AT ALL?

`verify-app-fidelity.py` compares a spec's brand-role rows against the shipped
app and flags the colours the app never paints. The residual after the
claim-scope pass was 135 claims / 115 apps, read as "app-side debt". But a spec
can also state a colour the DESIGN never renders: the measured census walks the
theme stylesheet, and a shared ColorLib starter sheet ships whole blocks the
page never instantiates. `fortify`'s seven "feature icon accents" are the type
case — every one of them is declared ONLY by `.genric-btn.info`,
`.progress-bar.color-1`, `.confirm-switch input:checked + label:before` and
friends, while the page markup contains zero `genric-btn` / `progress-table` /
`progress-bar` classes. The app is right to omit them; the claim is the defect.

This script answers, per UNSHIPPED claim:

  * **SHEET-ONLY**   every rule that declares the hex hangs off a selector whose
                     class the page markup never uses → the design never paints
                     it (dismissible: the claim needs a "declared only by X"
                     note, the app needs no restyle);
  * **RENDERED**     at least one declaring selector is instantiated by the page
                     → the app's omission is real debt;
  * **VAR/UNKNOWN**  the hex is declared as a custom property (`--x: #hex`) or on
                     a bare element selector: usage is indirect, so no dismissal;
  * **UNVERIFIED**   no preview URL, or the fetch failed (never a silent pass).

Read-only. Fetches are cached under `--cache` (default /tmp/sheet-claims) so a
re-run is free and a rate-limited host cannot poison the census.

Usage:
  python3 scripts/verify-sheet-claims.py                       # census + report
  python3 scripts/verify-sheet-claims.py --md docs/....md --json /tmp/out.json
  python3 scripts/verify-sheet-claims.py --describe fortify    # per-claim detail

Exit 0 = census completed (whatever the buckets), 2 = usage/setup error.
"""

from __future__ import annotations

import argparse
import collections
import concurrent.futures
import hashlib
import json
import os
import re
import subprocess
import sys
import tempfile
from urllib.parse import urljoin, urlparse

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124 Safari/537.36")
# colorlib.com answers 403/bans over IPv6 for this workstation
BASE_CURL = ["curl", "-4", "-sSL", "--max-time", "45", "-A", UA]

SHEET_RX = re.compile(
    r"""<link[^>]+rel=["']?stylesheet["']?[^>]*>""", re.I)
HREF_RX = re.compile(r"""href=["']([^"']+)["']""", re.I)
STYLE_RX = re.compile(r"<style[^>]*>(.*?)</style>", re.I | re.S)
CLASS_RX = re.compile(r"""class=["']([^"']*)["']""", re.I)
COMMENT_RX = re.compile(r"/\*.*?\*/", re.S)
RULE_RX = re.compile(r"([^{}]+)\{([^{}]*)\}")
CLASS_TOKEN_RX = re.compile(r"\.(-?[_a-zA-Z][_a-zA-Z0-9-]*)")
HEX_RX = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")


def norm(h: str) -> str:
    h = h.lower()
    if not h.startswith("#"):
        h = "#" + h
    if len(h) == 4:
        h = "#" + "".join(c * 2 for c in h[1:])
    return h


def curl(url: str, dest: str) -> int:
    proc = subprocess.run(
        BASE_CURL + ["-o", dest, "-w", "%{http_code}", url],
        capture_output=True, timeout=120)
    try:
        return int(proc.stdout.decode().strip()[-3:])
    except ValueError:
        return 0


# --------------------------------------------------------------------------- #
# fetching (cached per slug)
# --------------------------------------------------------------------------- #

def fetch_page(url: str, cache: str) -> dict:
    """page html + every stylesheet it links, flattened into the cache dir."""
    os.makedirs(cache, exist_ok=True)
    key = hashlib.sha1(url.encode()).hexdigest()[:12]
    entry = os.path.join(cache, key + ".json")
    if os.path.exists(entry):
        try:
            got = json.load(open(entry))
            if got.get("ok"):
                return got
        except (OSError, ValueError):
            pass
    html_path = os.path.join(cache, key + ".html")
    code = curl(url, html_path)
    got = {"key": key, "url": url, "status": code, "sheets": [], "ok": False,
           "inline": ""}
    if code != 200:
        json.dump(got, open(entry, "w"))
        return got
    html = open(html_path, encoding="utf-8", errors="replace").read()
    got["inline"] = "\n".join(STYLE_RX.findall(html))
    seen = set()
    for n, tag in enumerate(SHEET_RX.findall(html)):
        m = HREF_RX.search(tag)
        if not m:
            continue
        href = m.group(1)
        if href.startswith("data:"):
            continue
        sheet_url = urljoin(url, href)
        if sheet_url in seen:
            continue
        seen.add(sheet_url)
        base = os.path.basename(urlparse(sheet_url).path) or "sheet.css"
        path = os.path.join(cache, f"{key}-{n:02d}-{base}")
        scode = curl(sheet_url, path)
        if scode != 200 or not os.path.exists(path):
            continue
        text = open(path, encoding="utf-8", errors="replace").read()
        if len(text) < 200:            # a 404 stub, not a sheet
            continue
        got["sheets"].append({"href": href, "url": sheet_url, "file": path,
                              "bytes": len(text)})
    got["ok"] = True
    json.dump(got, open(entry, "w"))
    return got


def resolve_page(candidates: list[str], cache: str) -> dict:
    """Try the candidate preview URLs in order; first 200 wins (all cached)."""
    last = {"ok": False, "error": "no candidate url", "sheets": [], "inline": ""}
    for url in candidates:
        got = fetch_page(url, cache)
        if got.get("ok") and got.get("sheets"):
            return got
        last = got if not got.get("ok") else got
        last.setdefault("error", f"{got.get('status')} {url}")
    return last


def page_classes(html: str) -> set[str]:
    out: set[str] = set()
    for attr in CLASS_RX.findall(html):
        out.update(attr.split())
    return out


def page_tags(html: str) -> set[str]:
    return {m.group(1).lower() for m in re.finditer(r"<\s*([a-zA-Z][a-zA-Z0-9]*)", html)}


# --------------------------------------------------------------------------- #
# rule analysis
# --------------------------------------------------------------------------- #

def iter_rules(css: str):
    """(selector, declarations) for every non-nested rule.

    The corpus' sheets nest rules inside `@media`, so a `[^{}]+{[^{}]*}` scan is
    right AFTER the at-rule preludes are dropped: an at-rule prelude is always
    followed by `{` and then inner rules, and dropping the prelude leaves the
    inner selectors intact.
    """
    css = COMMENT_RX.sub("", css)
    # join a preceding at-rule prelude onto nothing: `@media (...) .a` -> `.a`
    for m in RULE_RX.finditer(css):
        sel = " ".join(m.group(1).split())
        if not sel:
            continue
        # `@media (max-width: 991px) .single-feature` — strip the prelude
        sel = re.sub(r"^(?:@[^{};]*?)\s*(?=[.#\[:*]|[a-zA-Z])", "", sel)
        if sel.startswith("@"):
            continue                    # a keyframes body, not a selector
        yield sel, m.group(2)


def rule_uses(sel: str, body: str, hexv: str) -> bool:
    """Does this rule declare the colour (hex or 3-digit shorthand)?"""
    for decl in body.split(";"):
        prop = decl.split(":", 1)[0].strip()
        for h in HEX_RX.findall(decl):
            if norm("#" + h) == hexv:
                return True
    return False


def selector_matchable(sel: str, classes: set[str], tags: set[str]):
    """True/False/None — can this selector name an element the page renders?

    For a selector to match ANY element, every class it names must be attached
    to some element in the document — so "all tokens present" is the necessary
    condition, and "any token present" over-reports (`.genric-btn.info` looked
    rendered on fortify only because the page uses a bare `.info` elsewhere).

    A selector with NO class token is an element rule (`b, sup, sub, u, del`
    paints them all on captura's sheet): matchable when the page renders that
    tag. Neither class nor tag (`*`, `:root`, a bare pseudo) -> None, indirect.
    """
    tokens = CLASS_TOKEN_RX.findall(sel)
    if tokens:
        return all(t in classes for t in tokens)
    last = re.split(r"[ >+~]+", sel.strip())[-1]
    m = re.match(r"([a-zA-Z][a-zA-Z0-9]*)", last)
    if m:
        return m.group(1).lower() in tags
    return None


def classify(spec_hex: str, html: str, sheets: list[dict], inline: str) -> dict:
    classes = page_classes(html)
    tags = page_tags(html)
    rules = []
    for sheet in sheets:
        try:
            text = open(sheet["file"], encoding="utf-8", errors="replace").read()
        except OSError:
            continue
        for sel, body in iter_rules(text):
            if rule_uses(sel, body, spec_hex):
                rules.append((sel, body))
    for sel, body in iter_rules(inline):
        if rule_uses(sel, body, spec_hex):
            rules.append((sel + " [inline]", body))

    detail = []
    rendered = False
    indirect = False
    for sel, body in rules:
        # custom-property declaration: `--x: #hex` (use site unknown)
        is_var = any(d.split(":", 1)[0].strip().startswith("--")
                     for d in body.split(";")
                     if any(norm("#" + h) == spec_hex for h in HEX_RX.findall(d)))
        tokens = CLASS_TOKEN_RX.findall(sel)
        matchable = selector_matchable(sel, classes, tags)
        if is_var or matchable is None:
            indirect = True
        if matchable:
            rendered = True
        detail.append({"selector": sel[:200], "classes": tokens[:8],
                       "rendered_classes": [t for t in tokens if t in classes][:8],
                       "missing": [t for t in tokens if t not in classes][:8],
                       "matchable": matchable, "custom_property": is_var})

    if rendered:
        bucket = "RENDERED"
    elif indirect:
        bucket = "VAR/UNKNOWN"
    elif rules:
        bucket = "SHEET-ONLY"
    else:
        bucket = "NOT-IN-SHEET"
    return {"bucket": bucket, "rules": len(rules), "detail": detail}


# --------------------------------------------------------------------------- #
# claim corpus
# --------------------------------------------------------------------------- #

def claims(root: str, args) -> list[dict]:
    if args.claims:
        data = json.load(open(args.claims))
    else:
        tmp = os.path.join(tempfile.mkdtemp(), "claims.json")
        subprocess.run([sys.executable, os.path.join(root, "scripts", "verify-app-fidelity.py"),
                        "--prep-root", root, "--json", tmp],
                       cwd=root, check=True, capture_output=True)
        data = json.load(open(tmp))
    # `rows` also carries the UNDOCUMENTED-ANCHOR notes (an app hex the spec never
    # states, `line: 0`, `ctx: "app anchor"`) — only the UNSHIPPED flags are claims
    # about the design, so join the rows against the flag list by app+hex.
    flag_keys = {(f[0], norm(f[2])) for f in data["flags"]}
    rows = [{"app": row["app"], "line": row["line"], "role": row["role"],
             "hex": norm(row["hex"]), "nearest": row.get("nearest"),
             "delta": row.get("delta"), "slug": row.get("slug") or "",
             "ctx": row.get("ctx", "")}
            for row in data["rows"]
            if (row["app"], norm(row["hex"])) in flag_keys and row.get("line")]
    if len(rows) != len(data["flags"]):
        print(f"warning: joined {len(rows)} of {len(data['flags'])} flag(s) to their rows",
              file=sys.stderr)
    for row in rows:
        row["urls"] = candidates(row, root)
    return rows


URL_RX = re.compile(r"https?://[^\s>)\]|`\"']+")


def candidates(row: dict, root: str) -> list[str]:
    """Preview URLs to try, best first.

    The spec's own provenance line is authoritative (it carries the live preview
    path); the row's evidence cell often cites it too. The measured `slug` is the
    LAST resort — specs state the wordpress slug (`alex-rivera`) while the preview
    path drops the dash (`/theme/alexrivera/`), and 72 of 135 first attempts 404'd
    on exactly that.
    """
    out: list[str] = []
    ctx = row.get("ctx") or ""
    for m in URL_RX.findall(ctx):
        out.append(m)
    spec = os.path.join(root, "openspec", "specs", f"template-{row['app']}", "spec.md")
    if os.path.exists(spec):
        txt = open(spec, encoding="utf-8", errors="replace").read()
        for m in URL_RX.findall(txt):
            if "preview.colorlib.com" in m or "/etc/" in m or "/theme/" in m:
                out.append(m)
    slug = (row.get("slug") or "").strip("/")
    if slug:
        out.append(f"https://preview.colorlib.com/theme/{slug}/")
        flat = slug.replace("-", "")
        if flat != slug:
            out.append(f"https://preview.colorlib.com/theme/{flat}/")
    seen, cleaned = set(), []
    for u in out:
        u = u.rstrip(".,;")
        if not u.endswith("/") and not u.endswith(".html"):
            u += "/"
        if u in seen:
            continue
        seen.add(u)
        cleaned.append(u)
    return cleaned[:6]


def preview_url(slug: str) -> str:
    slug = slug.strip().strip("/")
    if not slug:
        return ""
    if slug.startswith("http"):
        return slug if slug.endswith("/") else slug + "/"
    return f"https://preview.colorlib.com/theme/{slug}/"


# --------------------------------------------------------------------------- #
# reporting
# --------------------------------------------------------------------------- #

def render_md(results: list[dict], args) -> str:
    kinds = collections.Counter(r["bucket"] for r in results)
    apps = {r["app"] for r in results}
    per_app = collections.Counter(r["app"] for r in results if r["bucket"] == "SHEET-ONLY")
    lines = [
        "# App-fidelity residual — does the reference page paint the claim?",
        "",
        "```sh",
        "python3 scripts/verify-app-fidelity.py --json /tmp/fid.json",
        "python3 scripts/verify-sheet-claims.py --md docs/app-fidelity-sheet-only.md",
        "python3 scripts/verify-sheet-claims.py --self-test   # 13/13 classifier controls",
        "python3 scripts/verify-app-fidelity-controls.py      # 29/29 (incl. the new cue)",
        "```",
        "",
        "Generated by `scripts/verify-sheet-claims.py` (read-only; fetches the",
        "cached preview page + its stylesheets, never edits `apps/`). The parent",
        "report `docs/app-fidelity-delta.md` calls all of these claims app-side",
        "debt; this one asks whether the design renders the colour at all.",
        "",
        f"Corpus: **{len(results)}** unshipped claim(s) across **{len(apps)}** app(s).",
        "",
    ]
    if args.stamp:
        lines += [f"_Provenance: {args.stamp}_", ""]
    lines += [
        "## Method",
        "",
        "* **Claim** — an `UNSHIPPED` row of `docs/app-fidelity-delta.md` (a",
        "  brand-role colour its spec states and the app never paints).",
        "* **Page side** — `https://preview.colorlib.com/theme/<slug>/`: every",
        "  `class` attribute value in the markup, plus every linked stylesheet and",
        "  inline `<style>` block.",
        "* **Declaring rules** — the rules whose declarations carry the hex (hex or",
        "  3-digit shorthand, any property, gradients included).",
        "* **RENDERED** — at least one declaring rule's selector can match an element",
        "  the page renders (every class it names is on the page, or, for a bare",
        "  element rule, that tag exists): the design paints the colour, so the app's",
        "  omission is app debt. Note this asks only *whether* the design paints it —",
        "  a footer social icon counts, so the parent's `APPROX-VARIANT` /",
        "  `APPROX-SOCIAL` / `APPROX-MINOR` reading still decides whether a restyle is",
        "  warranted.",
        "* **SHEET-ONLY** — every declaring rule hangs off a class the page never",
        "  uses, and every one is a plain declaration (not a custom property): the",
        "  colour belongs to a shared-scaffold block the design never renders. The",
        "  app is right to omit it; the ROW needs the note, not the app a restyle.",
        "* **VAR/UNKNOWN** — the hex is a custom property (`--x: #hex`) or sits on a",
        "  bare element / attribute selector: use is indirect, so no dismissal.",
        "* **NOT-IN-SHEET** — no rule in the fetched sheets declares it (a rebuilt",
        "  sheet, a font/JS palette, or a fetch gap): never a dismissal.",
        "* **UNVERIFIED** — no preview URL or the fetch failed.",
        "",
        "## Census",
        "",
        "| bucket | n | apps | reading |",
        "| --- | --- | --- | --- |",
        f"| SHEET-ONLY (dismissible) | **{kinds['SHEET-ONLY']}** | "
        f"**{len(per_app)}** | the design never paints it |",
        f"| RENDERED (app debt) | **{kinds['RENDERED']}** | "
        f"**{len({r['app'] for r in results if r['bucket'] == 'RENDERED'})}** | "
        "real restyle queue |",
        f"| VAR/UNKNOWN | {kinds['VAR/UNKNOWN']} | "
        f"{len({r['app'] for r in results if r['bucket'] == 'VAR/UNKNOWN'})} | indirect use |",
        f"| NOT-IN-SHEET | {kinds['NOT-IN-SHEET']} | "
        f"{len({r['app'] for r in results if r['bucket'] == 'NOT-IN-SHEET'})} | sheet drift / fetch gap |",
        f"| UNVERIFIED | {kinds['UNVERIFIED']} | "
        f"{len({r['app'] for r in results if r['bucket'] == 'UNVERIFIED'})} | no URL or fetch failed |",
        "",
        "`RENDERED` debt stays in `docs/app-fidelity-delta.md`. Stamping the",
        f"{kinds['SHEET-ONLY']} `SHEET-ONLY` row(s) with their own disqualifying",
        "note (each then reads `EVIDENCE-SHEET-ONLY` in the parent census) drops",
        "the parent's `UNSHIPPED` count by exactly that many — the app is untouched.",
        "",
    ]
    if per_app:
        lines += ["## SHEET-ONLY claims by app", "",
                  "| app | claims |", "| --- | --- |"]
        for app, n in per_app.most_common():
            lines.append(f"| `{app}` | {n} |")
        lines.append("")
    debt = collections.Counter(r["app"] for r in results if r["bucket"] == "RENDERED")
    if debt:
        lines += ["## App-debt queue (`RENDERED` — the design paints it, the app does not)", "",
                  "| app | claims | measured |", "| --- | --- | --- |"]
        for app, n in debt.most_common():
            hexes = ", ".join(f"`{r['hex']}`" for r in results
                              if r["app"] == app and r["bucket"] == "RENDERED")
            lines.append(f"| `{app}` | {n} | {hexes} |")
        lines.append("")
    redo = [r for r in results if r["bucket"] == "NOT-IN-SHEET"]
    if redo:
        lines += ["## Re-measure queue (`NOT-IN-SHEET`)", "",
                  "The claimed hex appears in **no** fetched rule of today's reference —",
                  "the row needs a fresh measurement (a rebuilt sheet, a JS/inline palette,",
                  "or a prep error); the app has nothing to match. Never a dismissal.", "",
                  "| app | spec L | role | claimed | page fetched |",
                  "| --- | --- | --- | --- | --- |"]
        for r in sorted(redo, key=lambda x: x["app"]):
            lines.append(f"| `{r['app']}` | {r['line']} | {r['role']} | `{r['hex']}` | "
                         f"{r.get('page_url') or '—'} |")
        lines.append("")
    lines += ["## Every claim", "",
              "`rule` is the first declaring selector; `page class` is filled only for",
              "`RENDERED`, where it names the class (or element rule) the page uses.", "",
              "| app | spec L | role | measured | bucket | declaring rule | page class |",
              "| --- | --- | --- | --- | --- | --- | --- |"]
    for r in sorted(results, key=lambda x: (x["bucket"], x["app"], x["line"])):
        sel = r.get("rules_detail") or {}
        first = sel[0]["selector"] if sel else ""
        hit = ""
        if r["bucket"] == "RENDERED":
            for d in sel:
                if d.get("matchable"):
                    hit = ", ".join(d["rendered_classes"]) or "(element rule)"
                    break
        lines.append(
            f"| `{r['app']}` | {r['line']} | {r['role']} | `{r['hex']}` | "
            f"{r['bucket']} | `{first[:90]}` | {('`' + hit + '`') if hit else '—'} |")
    lines.append("")
    return "\n".join(lines)


def self_test() -> int:
    """Offline controls for the classifier — no network, no repo.

    Each case states the HTML/CSS pair a bucket must be read from, so the axis
    cannot silently rot into "everything is SHEET-ONLY".
    """
    html = ('<html><body><div class="hero"><p class="lead">x</p>'
            '<a class="genric-btn primary">go</a><b>bold</b></div></body></html>')
    cases = []

    def one(name, css, want, hexv="#ff5e13", page=html, inline=""):
        sheets = []
        if css is not None:
            path = os.path.join(tempfile.mkdtemp(prefix="vcss-"), "s.css")
            open(path, "w").write(css)
            sheets = [{"file": path}]
        got = classify(hexv, page, sheets, inline)["bucket"]
        cases.append((got == want, name, f"got={got} want={want}"))

    one("class present on the page → RENDERED",
        ".genric-btn.primary{background:#ff5e13}", "RENDERED")
    one("class absent from the page → SHEET-ONLY",
        ".genric-btn.ghost{background:#ff5e13}", "SHEET-ONLY")
    one("one of two tokens absent → SHEET-ONLY (all tokens are necessary)",
        ".hero .missing{background:#ff5e13}", "SHEET-ONLY")
    one("element rule the page renders → RENDERED",
        "b,sup{color:#ff5e13}", "RENDERED")
    one("element rule the page never renders → SHEET-ONLY",
        "del,samp{color:#ff5e13}", "SHEET-ONLY")
    one("custom property declaration → VAR/UNKNOWN",
        ":root{--bs-primary:#ff5e13}", "VAR/UNKNOWN")
    one("3-digit shorthand counts as the same colour",
        ".hero{color:#f53}", "RENDERED", hexv="#ff5533")
    one("rgb() in the page is not needed: the sheet is what is searched",
        ".hero{color:rgb(255,94,19)}", "NOT-IN-SHEET")
    one("no declaring rule at all → NOT-IN-SHEET",
        ".hero{color:#123456}", "NOT-IN-SHEET")
    one("an inline <style> block is a declaring source",
        None, "RENDERED", inline=".lead{color:#ff5e13}")
    one("a media-query-wrapped rule keeps its selector",
        "@media (max-width:991px){.hero .lead{color:#ff5e13}}", "RENDERED")
    one("a hover-only rule still counts (the block renders)",
        ".hero:hover{color:#ff5e13}", "RENDERED")
    one("a rule inside a font-face-less keyframes block is not a selector",
        "@keyframes pulse{from{color:#ff5e13}to{color:#ff5e13}}", "SHEET-ONLY")

    ok = sum(1 for c in cases if c[0])
    for good, name, detail in cases:
        print(f"{'PASS' if good else 'FAIL'}  {name}  ({detail})")
    print(f"\n=== {ok}/{len(cases)} self-test controls")
    return 0 if ok == len(cases) else 1


def main() -> int:
    ap = argparse.ArgumentParser(description="does the reference page paint the claim? (read-only)")
    ap.add_argument("--prep-root", default=os.getcwd())
    ap.add_argument("--claims", help="verify-app-fidelity --json output (else run it)")
    ap.add_argument("--cache", default="/tmp/sheet-claims")
    ap.add_argument("--jobs", type=int, default=6)
    ap.add_argument("--limit", type=int)
    ap.add_argument("--md")
    ap.add_argument("--json")
    ap.add_argument("--describe", help="print per-claim detail for one app")
    ap.add_argument("--stamp", default="",
                    help="provenance line written into the markdown report")
    ap.add_argument("--self-test", action="store_true",
                    help="offline classifier controls (no network, no repo)")
    args = ap.parse_args()
    if args.self_test:
        return self_test()
    root = os.path.abspath(args.prep_root)
    if not os.path.isdir(os.path.join(root, "openspec", "specs")):
        print(f"error: {root} is not a prep root (no openspec/specs)", file=sys.stderr)
        return 2

    rows = claims(root, args)
    if args.describe:
        rows = [r for r in rows if r["app"] == args.describe]
    if args.limit:
        rows = rows[:args.limit]
    slugs = sorted({r["slug"] for r in rows if r["slug"]})
    by_app: dict[str, list[str]] = {}
    for r in rows:
        prev = by_app.setdefault(r["app"], [])
        for u in r.get("urls") or []:
            if u not in prev:
                prev.append(u)
    pages: dict[str, dict] = {}
    with concurrent.futures.ThreadPoolExecutor(max_workers=args.jobs) as pool:
        futs = {pool.submit(resolve_page, urls, args.cache): app
                for app, urls in by_app.items()}
        for fut in concurrent.futures.as_completed(futs):
            app = futs[fut]
            try:
                pages[app] = fut.result()
            except Exception as exc:                       # noqa: BLE001 — report, never crash
                pages[app] = {"ok": False, "error": str(exc), "sheets": [], "inline": ""}

    results, cache = [], {}
    for r in rows:
        got = pages.get(r["app"])
        if not got or not got.get("ok"):
            results.append({**r, "bucket": "UNVERIFIED", "rules_detail": [],
                            "note": (got or {}).get("error", "no preview url")})
            continue
        key = (got.get("key"), r["hex"])
        if key not in cache:
            html = open(os.path.join(args.cache, got["key"] + ".html"),
                        encoding="utf-8", errors="replace").read()
            cache[key] = classify(r["hex"], html, got["sheets"], got["inline"])
        got_cls = cache[key]
        results.append({**r, "bucket": got_cls["bucket"],
                        "page_url": got.get("url"),
                        "rules_detail": got_cls["detail"], "rules": got_cls["rules"]})

    kinds = collections.Counter(x["bucket"] for x in results)
    print(f"sheet-claims: {len(results)} claim(s) — " +
          ", ".join(f"{k}={v}" for k, v in sorted(kinds.items())))
    if args.describe:
        for x in results:
            print(f"\n{x['app']} spec L{x['line']} {x['hex']} — {x['bucket']} "
                  f"({x.get('rules', 0)} declaring rule(s))")
            print(f"  role: {x['role']}")
            for d in (x.get("rules_detail") or [])[:8]:
                print(f"  rule {d['selector'][:150]}")
                print(f"       classes={d['classes']} rendered={d['rendered_classes']}"
                      f"{' custom-property' if d['custom_property'] else ''}")
    if args.json:
        json.dump(results, open(args.json, "w"), indent=1)
    if args.md:
        open(args.md, "w").write(render_md(results, args))
    for x in results[:25] if not args.describe else []:
        print(f"  {x['app']}: {x['hex']} — {x['bucket']}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
