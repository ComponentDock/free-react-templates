#!/usr/bin/env python3
"""Read-only check: is a spec's BODY-TEXT colour the one the page actually paints?

PREP-stream axis (2026-10-25f). `verify-role-rule-tokens.py` asks which RULE owns a
token and deliberately scoped `body` to `body`/`html body` element rules. That
left 23 conflicts `ROLE-NONE`, because the thing a spec calls "body text" is the
colour a PARAGRAPH paints, not the colour `body` declares:

  * `p{color:#838383}` owns the paragraph colour on a page whose `body` rule sets
    only family/size — the claim is TRUE and the `body` role could not see it;
  * `p{color:#b3b3b3}` can be out-ranked by `.cl-modal .cl-modal-body p{color:#777}`
    — the claim is a rule that LOSES on every paragraph that renders;
  * the same block can carry two declarations (`p{color:#666666; color:#646464}`)
    — the later one is the value, the earlier one is a literal a census will find;
  * a claim can match no `p` rule at all (a borrowed or invented hex).

So this axis resolves the claim through the cascade over P-TARGETING rules and
cross-checks the answer against the measured paragraph colours of the live render
(`--measured`, produced by `scripts/measure-paragraph-colours.mjs`).

Buckets (one per claim):
  MATCH-WINNER   the claim is the colour of the highest-priority p rule
  MATCH-ELEMENT  claim is the element-only `p{…}` value and no scoped rule overrides
  LOSES-RULE     claim is declared on a p rule that a more specific rule out-ranks
  EARLIER-DECL   claim is superseded by a later `color` in the SAME declaration block
  NO-RULE        no p-targeting rule in any linked sheet declares this literal
  RENDER-ONLY    rule says X, paragraphs render Y (recorded, not a spec defect)

Usage:
  python3 scripts/verify-body-role-tokens.py                 # summary + findings
  python3 scripts/verify-body-role-tokens.py --json
  python3 scripts/verify-body-role-tokens.py --measured /tmp/m.json --only modal-13
  python3 scripts/verify-body-role-tokens.py --offline        # cached sheets only
Exit code: 0 = no findings, 1 = findings, 2 = bad usage.
"""

from __future__ import annotations

import argparse
import glob
import hashlib
import json
import os
import re
import sys
import urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, "openspec", "specs")
CACHE = os.environ.get("BODY_ROLE_CACHE", "/tmp/body-role-tokens")
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/128.0.0.0 Safari/537.36")

BODY_LABEL = re.compile(r"body[ _-]?(text|copy)|paragraph text|body colour|body color", re.I)
HEX = re.compile(r"#[0-9a-fA-F]{3,8}\b")


# ---------------------------------------------------------------- css plumbing
def strip_comments(css: str) -> str:
    return re.sub(r"/\*.*?\*/", "", css, flags=re.S)


def iter_rules(css: str):
    """(heads, declarations, in_media) with @font-face/@keyframes skipped."""
    text = strip_comments(css)
    stack: list[str] = []
    i = 0
    while True:
        j = text.find("{", i)
        k = text.find("}", i)
        if j == -1 and k == -1:
            break
        if j != -1 and (k == -1 or j < k):
            stack.append(text[i:j].strip())
            i = j + 1
        else:
            head = stack.pop() if stack else ""
            decls = text[i:k]
            if head and not head.startswith("@"):
                in_media = any(h.lower().startswith(("@media", "@supports")) for h in stack)
                yield head, decls, in_media
            i = k + 1


def split_selectors(head: str) -> list[str]:
    out, depth, buf = [], 0, ""
    for ch in head:
        if ch == "(":
            depth += 1
        elif ch == ")":
            depth -= 1
        if ch == "," and depth == 0:
            out.append(buf.strip())
            buf = ""
        else:
            buf += ch
    if buf.strip():
        out.append(buf.strip())
    return out


def last_compound(sel: str) -> str:
    """`a .b > p:hover` -> `p:hover` (combinators outside brackets)."""
    depth, cut = 0, -1
    for idx, ch in enumerate(sel):
        if ch in "[(":
            depth += 1
        elif ch in "])":
            depth -= 1
        elif depth == 0 and ch in " >+~":
            cut = idx
    return sel[cut + 1:].strip()


def targets_p(sel: str) -> bool:
    comp = last_compound(sel)
    if not comp:
        return False
    head = re.split(r"[:\[.#]", comp, 1)[0]
    return head.lower() == "p"


def specificity(sel: str) -> tuple[int, int, int]:
    s = re.sub(r"\[[^\]]*\]", " .x ", sel)
    s = re.sub(r"::?[\w-]+(\([^)]*\))?", " ", s)
    ids = len(re.findall(r"#[\w-]+", sel))
    classes = len(re.findall(r"\.[\w-]+", s))
    types = len(re.findall(r"(?<![\w.#-])[a-zA-Z][\w-]*", s)) - classes
    return (ids, classes, max(types, 0))


def norm_hex(v: str) -> str:
    v = v.strip().lower()
    m = re.fullmatch(r"#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})", v)
    if not m:
        return v
    h = m.group(1)
    if len(h) in (3, 4):
        h = "".join(c * 2 for c in h)
    return "#" + h


def colour_of(decls: str) -> list[tuple[int, str]]:
    """(declaration index, normalised colour) for every `color:` declaration."""
    out = []
    for idx, decl in enumerate(decls.split(";")):
        d = decl.strip()
        if not d or ":" not in d:
            continue
        prop, val = d.split(":", 1)
        if prop.strip().lower() != "color":
            continue
        val = val.replace("!important", "").strip()
        m = HEX.search(val) or re.search(r"\b(black|white)\b", val, re.I)
        if m:
            tok = m.group(0)
            out.append((idx, norm_hex(tok) if tok.startswith("#") else
                        ("#000000" if tok.lower() == "black" else "#ffffff")))
    return out


# ------------------------------------------------------------------- fetching
def fetch(url: str, offline: bool) -> str:
    os.makedirs(CACHE, exist_ok=True)
    key = os.path.join(CACHE, hashlib.sha256(url.encode()).hexdigest()[:20] + ".bin")
    if os.path.exists(key):
        return open(key, "rb").read().decode("utf-8", "replace")
    if offline:
        return ""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        data = urllib.request.urlopen(req, timeout=45).read()
    except Exception:
        return ""
    open(key, "wb").write(data)
    return data.decode("utf-8", "replace")


def resolve(base: str, href: str) -> str:
    if href.startswith("//"):
        return "https:" + href
    if href.startswith("http"):
        return href
    if href.startswith("/"):
        host = re.match(r"(https?://[^/]+)", base)
        return (host.group(1) if host else "") + href
    return base.rsplit("/", 1)[0] + "/" + href


def sheets_of(page_url: str, offline: bool) -> list[str]:
    html = fetch(page_url, offline)
    out = []
    for tag in re.findall(r"<link[^>]+rel=[\"']?stylesheet[^>]*>", html, re.I):
        m = re.search(r"href=[\"']([^\"']+)", tag)
        if m:
            out.append(resolve(page_url, m.group(1)))
    return out


# ---------------------------------------------------------------------- corpus
def body_claims():
    """-> {slug: [{spec, value, line}]} from specs with a body-text token row."""
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
            if len(cells) < 2 or not BODY_LABEL.search(cells[0]):
                continue
            for hexv in HEX.findall(line):
                claims.setdefault(slug, []).append(
                    {"spec": name, "value": norm_hex(hexv), "line": i})
    return claims


def p_rules(page_url: str, offline: bool):
    """All p-targeting colour rules in link order: dicts with the cascade key."""
    rules = []
    order = 0
    for sheet in sheets_of(page_url, offline):
        css = fetch(sheet, offline)
        if not css:
            continue
        for head, decls, media in iter_rules(css):
            if "color" not in decls:
                continue
            cols = colour_of(decls)
            if not cols:
                continue
            sel_list = split_selectors(head)
            hits = [s for s in sel_list if targets_p(s)]
            if not hits:
                continue
            best = max(hits, key=specificity)
            element_only = all(s.strip().lower() == "p" for s in hits)
            last_idx, value = cols[-1]
            rules.append({
                "order": order,
                "sheet": sheet.rsplit("/", 1)[-1],
                "selector": best if not element_only else "p",
                "spec": specificity(best),
                "media": media,
                "values": [v for _, v in cols],
                "value": value,
                "element_only": element_only,
            })
            order += 1
    return rules


def rgb_to_hex(v: str) -> str:
    m = re.match(r"rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)", v)
    if not m:
        return norm_hex(v)
    r, g, b = (int(float(x)) for x in m.groups())
    return f"#{r:02x}{g:02x}{b:02x}"


def rendered(measured: dict | None) -> list[tuple[str, int]]:
    """Measured paragraph colours, most frequent first."""
    if not measured:
        return []
    counts: dict[str, int] = {}
    for raw, n in (measured.get("paraColours") or {}).items():
        counts[rgb_to_hex(raw)] = counts.get(rgb_to_hex(raw), 0) + int(n)
    return sorted(counts.items(), key=lambda kv: -kv[1])


def show(rend: list[tuple[str, int]]) -> str:
    return ", ".join(f"{c}\u00d7{n}" for c, n in rend[:3]) or "no <p>"


def classify(claim: str, rules: list[dict], measured: dict | None):
    """-> (bucket, detail). The RENDER decides; the sheet attributes.

    A claim is right when a paragraph actually paints it. A rule that exists but
    never paints (a scoped rule always out-ranks it, or the block redeclares
    `color` after it) is the defect this axis exists to catch.
    """
    rend = rendered(measured)
    body_c = rgb_to_hex((measured or {}).get("body", {}).get("color", "")) \
        if (measured or {}).get("body") else None
    painted = {c for c, _ in rend} | ({body_c} if body_c else set())
    pool = [r for r in rules if not r["media"]] or rules
    declared = [r for r in pool if claim in r["values"]]
    elem = [r for r in declared if r["element_only"]]
    scoped = [r for r in declared if not r["element_only"]]

    for r in declared:
        if r["value"] != claim and claim in r["values"][:-1]:
            return "EARLIER-DECL", (f"`{r['selector']}` declares {claim} then "
                                    f"{r['value']} in the same block; renders {show(rend)}")
    if not declared:
        if body_c == claim:
            return "MATCH-BODY", f"no p rule; paragraphs inherit body {claim}"
        if claim in {c for c, _ in rend}:
            return "MATCH-RENDER", f"painted but no p rule declares it; renders {show(rend)}"
        return "NO-RULE", f"no p rule declares {claim}; renders {show(rend)}"
    if claim in {c for c, _ in rend}:
        elem_other = [r for r in pool if r["element_only"] and r["value"] != claim]
        if scoped and elem_other:
            return "MATCH-SCOPED", (f"only `{scoped[0]['selector']}` paints it "
                                    f"({scoped[0]['sheet']}); element `p` says "
                                    f"{elem_other[0]['value']}")
        return "MATCH-WINNER", f"`{declared[0]['selector']}` ({declared[0]['sheet']})"
    return "LOSES-RULE", (f"declared on `{declared[0]['selector']}` but every rendered "
                          f"paragraph is {show(rend)}")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--only")
    ap.add_argument("--slugs", help="comma-separated slugs to inspect (sweep guard)")
    ap.add_argument("--measured")
    ap.add_argument("--offline", action="store_true")
    ap.add_argument("root", nargs="?", default=ROOT)
    args = ap.parse_args()
    root = os.path.abspath(args.root)
    if not os.path.isdir(os.path.join(root, "openspec", "specs")):
        print("not a repo root", root)
        return 2

    measured_all = json.load(open(args.measured)) if args.measured else {}
    claims = body_claims()
    if args.only:
        claims = {k: v for k, v in claims.items() if k == args.only}
    if args.slugs:
        want = {x.strip() for x in args.slugs.split(",") if x.strip()}
        claims = {k: v for k, v in claims.items() if k in want}

    buckets: dict[str, list[dict]] = {}
    for slug, items in sorted(claims.items()):
        page = None
        for row in items:
            spec_text = open(os.path.join(SPECS, row["spec"], "spec.md"),
                             errors="replace").read()
            m = re.search(r"https://[^\s`)<>]*?(?:theme/(?:bootstrap/|bb/)?[^/\s`)]+/|etc/\w+/[^/\s`)]+/)",
                          spec_text)
            if m:
                page = m.group(0)
                break
        if not page:
            continue
        rules = p_rules(page, args.offline)
        for row in items:
            bucket, detail = classify(row["value"], rules, measured_all.get(slug))
            row = dict(row, slug=slug, page=page, bucket=bucket, detail=detail)
            buckets.setdefault(bucket, []).append(row)

    findings = [r for b, rows in buckets.items()
                if not b.startswith("MATCH") for r in rows]
    if args.json:
        print(json.dumps({"buckets": {b: len(v) for b, v in buckets.items()},
                          "findings": findings}, indent=1))
    else:
        print(f"body-text claims: {sum(len(v) for v in buckets.values())} "
              f"across {len(claims)} slugs")
        for b in ("MATCH-WINNER", "MATCH-SCOPED", "MATCH-BODY", "MATCH-RENDER",
                  "NO-RULE", "LOSES-RULE", "EARLIER-DECL"):
            print(f"  {b:14} {len(buckets.get(b, []))}")
        for r in findings:
            print(f"  {r['bucket']:13} {r['slug']:22} {r['spec']:24} "
                  f"{r['value']:9} {r['detail'][:70]}")
    return 1 if findings else 0


if __name__ == "__main__":
    sys.exit(main())
