#!/usr/bin/env python3
"""Read-only check: is a spec's HEADING-INK colour the one the page actually paints?

PREP-stream axis (2026-10-25g), the exact analogue of `verify-body-role-tokens.py`.
`verify-role-rule-tokens.py` (`-25e`) asked *which rule owns* the ink role and
scoped it to `h1..h6` element rules; `-25f` then showed that the same blindness
on the body role hid five genuinely different cases. The ink role has the same
blind spot, and `-25e` already caught two of its shapes (ROLE-NONE ink 2):

  * dropdown-07 — base `h2,h3{color:#000}` loses to `.heading-section{color:#fff}`
    on the very band the row screenshots, and the losing prep named the BODY
    colour (`#212529`) in the heading role;
  * colorlib-wizard-21 (runemark) — `.wizard-header h3` exists in NO sheet; step
    titles render `#000000`; the claim `#333` had survived two audits because no
    verifier read the selector;
  * hiroto — `#111111` is the `h1–h6` ink, `#777c81` is the paragraph colour: a
    prep can name the true ink of the page while the role beside it is wrong.

So this axis parses every linked stylesheet into rules that can PAINT an
element heading, splits them three ways — element (`h2`), scoped (`.hero h1`,
`#about h2`) and class-heading (`.heading-section`, `.section-title`) — resolves
the cascade, and then cross-checks the answer against the MEASURED computed
colours of the live page's headings (`scripts/measure-heading-colours.mjs`).

Buckets (one per claim):
  MATCH-WINNER   claim is the colour the rendered headings paint
  MATCH-CLASS    claim paints, but only through a class-heading rule
                 (`.heading-section`), while the element rule says something else
  MATCH-RENDER   painted, but no heading-targeting rule declares it (inheritance)
  EARLIER-DECL   a later `color` in the SAME block supersedes the claim
  LOSES-RULE     the only rule declaring the claim is out-ranked everywhere the
                 headings render, so it paints nothing .................... FLAG
  NO-RULE        no heading-targeting rule in any linked sheet declares it .. FLAG
  BODY-INK       claim is the page's paragraph/body colour, not the ink ... FLAG
  DECL-ELEMENT / DECL-SCOPED   no measured render: the claim IS declared, by an
                 element rule / only by scoped rules (attribution only, a note)
  NO-MEASURE     flags cannot be decided without the render; listed as a note

Guards (each a control): later declaration wins; `@media` is not the desktop
state; specificity then load order; a comment is not a rule; `#000` ≡ `#000000`
≡ `rgb(0,0,0)`; `h1 a{color}` does not claim the heading ink; `@font-face` /
`@keyframes` bodies are not rules.

Usage:
  python3 scripts/verify-heading-role-tokens.py                    # offline census
  python3 scripts/verify-heading-role-tokens.py --measured /tmp/m.json
  python3 scripts/verify-heading-role-tokens.py --slugs a,b,c      # sweep guard
  python3 scripts/verify-heading-role-tokens.py --only academica --json
Exit code: 0 = no findings, 1 = findings, 2 = bad usage. Read-only.
"""

from __future__ import annotations

import argparse
import glob
import importlib.util
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
os.environ.setdefault("BODY_ROLE_CACHE", "/tmp/heading-role-tokens")


def load_body_axis():
    """`verify-body-role-tokens.py` as a library: CSS walker, fetch cache, colour
    normalisation. Reusing it keeps the two axes' parsers identical."""
    path = os.path.join(HERE, "verify-body-role-tokens.py")
    spec = importlib.util.spec_from_file_location("body_axis", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


B = load_body_axis()
ROOT = B.ROOT
SPECS = B.SPECS

HEADINGS = ("h1", "h2", "h3", "h4", "h5", "h6")
# labels that unambiguously name heading TEXT (not a font, size, weight or a
# dark surface). `heading font`, `heading size`, `--font-heading` are excluded on
# purpose: they are not colours and burned the `-25d` census.
INK_LABELS = {
    "ink", "heading ink", "heading color", "heading colour", "heading text",
    "headings", "heading", "section heading", "section title", "h1", "h2",
    "hero heading", "hero h1", "text-heading", "heading-color", "ink text",
    "primary ink", "--color-ink", "--color-heading",
}
NOT_COLOUR = re.compile(r"font|size|weight|letter|line|height|spacing|transform|"
                        r"opacity|shadow|radius|family|tracking|scale", re.I)
HEX = re.compile(r"#[0-9a-fA-F]{3,8}\b")
CLASS_HEADING = re.compile(r"heading|title|headline", re.I)
RGB = re.compile(r"rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})", re.I)
NAMED = {"black": "#000000", "white": "#ffffff"}


def norm_colour(tok: str) -> str:
    """`#000000cc`, `#000`, `rgb(23,36,62)` and `rgba(0,0,0,.8)` -> one 6-digit hex.

    The alpha channel is not a different colour: `#000000cc` paints the same ink
    as `#000000`, and a rule written in `rgb()` must not be invisible to the
    checker (measured on `careers`: its ink rule is `color: rgb(23,36,62)`, which
    a hex-only parser cannot see).
    """
    t = tok.strip().lower()
    if t in NAMED:
        return NAMED[t]
    if t.startswith("#"):
        h = t[1:]
        if len(h) in (3, 4):
            h = "".join(c * 2 for c in h[:3])
        return "#" + h[:6]
    m = RGB.match(t)
    if m:
        return "#%02x%02x%02x" % tuple(int(x) for x in m.groups())
    return t


def colours_of(decls: str) -> list[tuple[int, str]]:
    """(declaration index, normalised colour) for every `color:` declaration,
    hex, rgb()/rgba() and the two named colours included."""
    out = []
    for idx, decl in enumerate(decls.split(";")):
        d = decl.strip()
        if not d or ":" not in d:
            continue
        prop, val = d.split(":", 1)
        if prop.strip().lower() != "color":
            continue
        val = val.replace("!important", "").strip()
        tok = None
        m = HEX.search(val)
        rm = RGB.match(val.strip())
        if m:
            tok = m.group(0)
        elif rm:
            tok = val.strip()[:rm.end()]
        else:
            m2 = re.search(r"\b(black|white)\b", val, re.I)
            if m2:
                tok = m2.group(0)
        if tok:
            out.append((idx, norm_colour(tok)))
    return out


# ------------------------------------------------------------------ corpus
def ink_claims() -> dict[str, list[dict]]:
    """-> {slug: [{spec, value, label, line}]} for every heading-ink token row."""
    claims: dict[str, list[dict]] = {}
    for path in sorted(glob.glob(os.path.join(SPECS, "template-*", "spec.md"))):
        name = os.path.basename(os.path.dirname(path))
        text = open(path, errors="replace").read()
        slug = None
        for pat in (r"Source slug:\*{0,2}\s*`([^`]+)`", r"wp/template/([^/`\s]+)/",
                    r"theme/(?:bootstrap/|bb/)?([\w.-]+)/"):
            m = re.search(pat, text)
            if m:
                slug = m.group(1)
                break
        if not slug:
            continue
        for i, line in enumerate(text.splitlines(), 1):
            if not line.strip().startswith("|"):
                continue
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            if len(cells) < 2:
                continue
            label = re.sub(r"\s+", " ", cells[0].strip("*` ")).strip().lower()
            if label not in INK_LABELS or NOT_COLOUR.search(label):
                continue
            for hexv in HEX.findall(line):
                claims.setdefault(slug, []).append(
                    {"spec": name, "value": B.norm_hex(hexv), "label": label, "line": i})
    return claims


def page_of(name: str, slug: str | None = None) -> str | None:
    """The spec's demo URL, preferring one whose PATH carries the slug.

    A spec legitimately cites sibling URLs (`theme/bac/` in a comparison note),
    so "the first theme URL in the file" can point at another design — measured
    on `accordion-12`, whose first match was `theme/bac/`. And a cited URL can be
    a parent directory (`theme/bb/`), which is a gallery, not this design. So:
    an exact last-segment match wins; then a path that contains the slug; then
    the preview host's own prefix ladder; only then the first cited URL.
    """
    text = open(os.path.join(SPECS, name, "spec.md"), errors="replace").read()
    urls = re.findall(r"https://[^\s`)<>\"']*(?:theme/[^/\s`)]+/|etc/[\w-]+/[^/\s`)]+/)",
                      text)
    if slug is None:
        return urls[0] if urls else None

    def last_seg(u: str) -> str:
        return u.rstrip("/").rsplit("/", 1)[-1]

    exact = [u for u in urls if last_seg(u) == slug]
    if exact:
        return exact[0]
    inside = [u for u in urls if slug in u]
    if inside:
        return inside[0]
    if re.search(r"(?<![a-z0-9-])%s(?![a-z0-9-])" % re.escape(slug), text):
        # the spec names the slug but records no demo path: use the ladder.
        return f"https://preview.colorlib.com/theme/{slug}/"
    return urls[0] if urls else None


# ------------------------------------------------------------- heading rules
def var_map(css: str) -> dict[str, str]:
    """`--ed-ink:#17243e` declarations from `:root`-ish blocks.

    Modern ColorLib builds declare the design's ink as a custom property and
    paint it with `color:var(--ed-ink)`; a hex-only reader cannot see that rule,
    which is how `careers` looked like a page whose ink rule declares nothing.
    """
    out: dict[str, str] = {}
    for head, decls, _media in B.iter_rules(css):
        if ":root" not in head and "html" not in head.lower():
            continue
        for decl in decls.split(";"):
            if ":" not in decl:
                continue
            prop, val = decl.split(":", 1)
            prop = prop.strip()
            if prop.startswith("--"):
                out[prop] = val.strip()
    return out


def substitute_vars(decls: str, vars_: dict[str, str]) -> str:
    def repl(m):
        name = m.group(1)
        return vars_.get(name, m.group(0))
    return re.sub(r"var\(\s*(--[\w-]+)\s*(?:,[^)]*)?\)", repl, decls)


def rules_from_css(css: str, sheet: str = "style.css") -> list[dict]:
    """Colour rules that can paint an element heading, with their rule class."""
    rules: list[dict] = []
    order = 0
    vars_ = var_map(css)
    for head, decls, media in B.iter_rules(css):
        if "color" not in decls:
            continue
        cols = colours_of(substitute_vars(decls, vars_))
        if not cols:
            continue
        best = None
        for sel in B.split_selectors(head):
            comp = B.last_compound(sel)
            if not comp:
                continue
            low = comp.lower()
            head_el = re.split(r"[:\[]", low, 1)[0]
            whole = re.sub(r"::?[\w-]+(\([^)]*\))?", "", sel).strip().lower()
            if re.match(r"^h[1-6]$", whole):
                kind = "element"
            elif re.match(r"^h[1-6]$", head_el):
                # `.hero h1`, `#about h2`, `.card > h3:hover` — a heading inside
                # a scope, so it only paints the headings in that scope.
                kind = "scoped"
            elif CLASS_HEADING.search(low) and not re.search(
                    r"\.(nav|menu)-?(heading|title)", low):
                kind = "class"
            else:
                continue
            cand = {"selector": sel.strip(), "kind": kind,
                    "spec": B.specificity(sel)}
            if best is None or cand["spec"] > best["spec"]:
                best = cand
        if best is None:
            continue
        rules.append({
            "order": order,
            "sheet": sheet,
            "selector": best["selector"],
            "kind": best["kind"],
            "spec": best["spec"],
            "media": media,
            "values": [v for _, v in cols],
            "value": cols[-1][1],
        })
        order += 1
    return rules


def heading_rules(page_url: str, offline: bool) -> tuple[list[dict], int]:
    """All heading-painting colour rules of a live page, in link order, plus the
    number of stylesheets that actually arrived (0 => the page is not there)."""
    rules: list[dict] = []
    sheets = 0
    for sheet in B.sheets_of(page_url, offline):
        css = B.fetch(sheet, offline)
        if not css:
            continue
        sheets += 1
        for r in rules_from_css(css, sheet.rsplit("/", 1)[-1]):
            rules.append(dict(r, order=len(rules)))
    return rules, sheets


def rendered(measured: dict | None) -> list[tuple[str, int]]:
    if not measured:
        return []
    counts: dict[str, int] = {}
    for raw, n in (measured.get("headingColours") or {}).items():
        h = B.rgb_to_hex(raw)
        counts[h] = counts.get(h, 0) + int(n)
    return sorted(counts.items(), key=lambda kv: -kv[1])


def show(rend: list[tuple[str, int]]) -> str:
    return ", ".join(f"{c}\u00d7{n}" for c, n in rend[:3]) or "no heading"


def classify(claim: str, rules: list[dict], measured: dict | None):
    """-> (bucket, detail). The RENDER decides; the sheet attributes."""
    rend = rendered(measured)
    painted = {c for c, _ in rend}
    pool = [r for r in rules if not r["media"]] or rules
    declared = [r for r in pool if claim in r["values"]]
    elem = [r for r in declared if r["kind"] == "element"]
    other = [r for r in declared if r["kind"] != "element"]

    for r in declared:
        if claim in r["values"][:-1] and r["value"] != claim:
            return "EARLIER-DECL", (f"`{r['selector']}` declares {claim} then "
                                    f"{r['value']} in the same block; renders {show(rend)}")

    if measured:
        if claim in painted:
            elem_other = [r for r in pool if r["kind"] == "element" and r["value"] != claim]
            if other and elem_other:
                return "MATCH-CLASS", (f"`{other[0]['selector']}` paints it "
                                       f"({other[0]['sheet']}); element "
                                       f"`{elem_other[0]['selector']}` says "
                                       f"{elem_other[0]['value']}")
            if not declared:
                return "MATCH-RENDER", (f"painted {claim}, but no heading rule "
                                        f"declares it (inherited); {show(rend)}")
            return "MATCH-WINNER", (f"`{declared[0]['selector']}`"
                                    if declared else "painted, rule not attributed")
        if not declared:
            para = measured.get("body", {}).get("color", "")
            if para and B.rgb_to_hex(para) == claim:
                return "BODY-INK", (f"{claim} is the body/paragraph colour "
                                    f"({para}); headings render {show(rend)}")
            return "NO-RULE", f"no heading rule declares {claim}; renders {show(rend)}"
        return "LOSES-RULE", (f"declared on `{declared[0]['selector']}` but every "
                              f"rendered heading is {show(rend)}")

    # offline: attribution only, never a verdict
    if declared:
        top = max(declared, key=lambda r: r["spec"])
        shadow = [r for r in pool if r["value"] != claim and r["spec"] > top["spec"]
                  and r["kind"] in ("class", "scoped")]
        if shadow:
            return "DECL-SHADOWED", (f"`{top['selector']}` declares it, but "
                                     f"`{shadow[0]['selector']}` "
                                     f"({shadow[0]['kind']}, {shadow[0]['value']}) "
                                     f"out-ranks it — render needed")
        return ("DECL-ELEMENT" if elem and not other else "DECL-SCOPED"), \
               f"`{declared[0]['selector']}` ({declared[0]['sheet']})"
    return "NO-MEASURE", "not declared by a heading rule; render needed"


FLAGS = ("NO-RULE", "LOSES-RULE", "BODY-INK", "EARLIER-DECL")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--only")
    ap.add_argument("--slugs", help="comma-separated slugs (sweep guard)")
    ap.add_argument("--measured")
    ap.add_argument("--offline", action="store_true")
    ap.add_argument("root", nargs="?", default=ROOT)
    args = ap.parse_args()
    root = os.path.abspath(args.root)
    if not os.path.isdir(os.path.join(root, "openspec", "specs")):
        print("not a repo root", root)
        return 2
    global SPECS
    SPECS = os.path.join(root, "openspec", "specs")

    measured_all = json.load(open(args.measured)) if args.measured else {}
    claims = ink_claims()
    if args.only:
        claims = {k: v for k, v in claims.items() if k == args.only}
    if args.slugs:
        want = {x.strip() for x in args.slugs.split(",") if x.strip()}
        claims = {k: v for k, v in claims.items() if k in want}

    buckets: dict[str, list[dict]] = {}
    pages: dict[str, str | None] = {}
    for slug, items in sorted(claims.items()):
        page = None
        for row in items:
            page = page_of(row["spec"], slug)
            if page:
                break
        pages[slug] = page
        if not page:
            for row in items:
                buckets.setdefault("NO-PAGE", []).append(
                    dict(row, slug=slug, bucket="NO-PAGE", detail="no preview URL in spec"))
            continue
        rules, nsheets = heading_rules(page, args.offline)
        dead = (measured_all.get(slug, {}).get("headingTotal") == 0
                and "error" not in measured_all.get(slug, {}))
        if dead and not nsheets:
            for row in items:
                buckets.setdefault("DEAD-PAGE", []).append(
                    dict(row, slug=slug, page=page, bucket="DEAD-PAGE",
                         detail="no stylesheet and no heading arrived: the URL is not a "
                                "live page (URL semantics are another axis)"))
            continue
        if dead:
            for row in items:
                buckets.setdefault("NO-HEADING", []).append(
                    dict(row, slug=slug, page=page, bucket="NO-HEADING",
                         detail=f"the page has no h1–h6 at all ({nsheets} sheet(s)); the "
                                f"row names a heading-ish surface colour"))
            continue
        for row in items:
            bucket, detail = classify(row["value"], rules, measured_all.get(slug))
            buckets.setdefault(bucket, []).append(
                dict(row, slug=slug, page=page, bucket=bucket, detail=detail))

    findings = [r for b, rows in buckets.items() if b in FLAGS for r in rows]
    rows_all = [r for rows in buckets.values() for r in rows]
    if args.json:
        print(json.dumps({"slugs": len(claims), "pages": pages,
                          "buckets": {b: len(v) for b, v in buckets.items()},
                          "rows": rows_all, "findings": findings}, indent=1))
    else:
        print(f"heading-ink claims: {sum(len(v) for v in buckets.values())} "
              f"across {len(claims)} slugs")
        for b in ("MATCH-WINNER", "MATCH-CLASS", "MATCH-RENDER", "DECL-ELEMENT",
                  "DECL-SCOPED", "NO-MEASURE", "EARLIER-DECL", "LOSES-RULE",
                  "NO-RULE", "BODY-INK", "NO-PAGE"):
            if b in buckets:
                print(f"  {b:14} {len(buckets[b])}")
        for r in findings:
            print(f"  {r['bucket']:13} {r['slug']:22} {r['spec']:26} "
                  f"{r['label']:14} {r['value']:9} {r['detail'][:64]}")
    return 1 if findings else 0


if __name__ == "__main__":
    sys.exit(main())
