#!/usr/bin/env python3
"""verify-live-tokens-controls.py — control harness for the LIVE-PALETTE axis.

Mutation-based: every case builds a synthetic prep root + a synthetic fetch
cache, so it needs no network and no repo.  The GATE cases re-run the verifier
with ONE guard disabled and prove the payload then fires — a control that cannot
fail proves nothing.

Run: python3 verify-live-tokens-controls.py        # expects 18/18
"""
from __future__ import annotations

import json
import hashlib
import os
import re
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VT = os.path.join(HERE, "verify-live-tokens.py")

SPEC = """# Template: Planner (Widget)

## Purpose

A calendar widget.

## Design reference (replication findings)

- **Preview:** `https://preview.colorlib.com/theme/calendar-01/` — **unreachable at
  prep time** (404), so the screenshot is the reference.

{status}

## Design tokens

| role | value |
| --- | --- |
| accent blue | `{accent}` |
| page bg | `{neutral}` |

{extra}

## Requirements

### Requirement: Widget

#### Scenario: Renders
- **WHEN** it mounts
- **THEN** it shows a calendar
"""

PRIMARY_CSS = ".calendar_weekdays {{ background: {accent}; }} a {{ color: {accent}; }}"
PAGE = ('<html><head><link rel="stylesheet" href="css/style.css">'
        '<title>Calendar 01</title></head><body>'
        '<div class="calendar_weekdays">Sun</div>{inline}'
        + '<p>' + 'lorem ipsum ' * 120 + '</p></body></html>')

BASE = "https://preview.colorlib.com/theme/calendar-01/"
SHEET = "https://preview.colorlib.com/theme/calendar-01/css/style.css"


def seed(cache: str, url: str, body: str, code: str = "200") -> None:
    key = hashlib.sha1(url.encode()).hexdigest()
    open(os.path.join(cache, key), "w").write(body)
    open(os.path.join(cache, key + ".json"), "w").write(
        json.dumps({"code": code, "url": url}))


def fixture(tmp: str, *, accent="#1089ff", css_accent=None, neutral="#f8f9fa",
            extra="", status="", page=200, sheet=200, inline="", css=None,
            app_hex=None, alias=False) -> str:
    root = os.path.join(tmp, "repo")
    spec_dir = os.path.join(root, "openspec", "specs", "template-planner")
    os.makedirs(spec_dir, exist_ok=True)
    body = SPEC.format(accent=accent, neutral=neutral, extra=extra, status=status)
    if alias:
        body = body.replace("# Template: Planner (Widget)",
                            "# Template: Planner (Widget)\n"
                            "<!-- prep-status: shipped-as=other-app -->")
    open(os.path.join(spec_dir, "spec.md"), "w").write(body)
    if app_hex:
        app = os.path.join(root, "apps", "planner", "src")
        os.makedirs(app, exist_ok=True)
        open(os.path.join(app, "index.css"), "w").write(f":root{{--c:{app_hex}}}")
    cache = os.path.join(tmp, "cache")
    os.makedirs(cache, exist_ok=True)
    if page == 200:
        seed(cache, BASE, PAGE.format(inline=inline))
        seed(cache, SHEET, css or PRIMARY_CSS.format(accent=css_accent or accent),
             str(sheet))
    return root


def run(root: str, script: str = VT):
    cache = os.path.join(os.path.dirname(root), "cache")
    out = os.path.join(os.path.dirname(root), "out.json")
    subprocess.run([sys.executable, script, "--prep-root", root, "--no-net",
                    "--cache", cache, "--worktree", "--json", out],
                   capture_output=True, text=True)
    data = json.load(open(out))
    kinds = {k for _n, k, *_ in data["flags"]}
    nkinds = {n[1] for n in data["notes"]}
    return kinds, nkinds, data


def mutate(tmp: str, old: str, new: str) -> str:
    """A verifier copy with ONE guard disabled (the GATE mutation)."""
    src = open(VT, encoding="utf-8").read()
    assert old in src, f"mutation anchor missing: {old[:60]}"
    dst = os.path.join(tmp, "verify-mutated.py")
    open(dst, "w").write(src.replace(old, new, 1))
    shutil.copy(os.path.join(HERE, "catalog_resolve.py"), tmp)
    return dst


def main() -> int:
    cases = []

    def case(name, fn):
        tmp = tempfile.mkdtemp(prefix="ltc-")
        try:
            ok, detail = fn(tmp)
        finally:
            shutil.rmtree(tmp, ignore_errors=True)
        cases.append((ok, name, detail))

    # 1 — the payload: a token the sheet does not paint
    def c1(tmp):
        k, n, _d = run(fixture(tmp, accent="#3d88f7", css_accent="#1089ff"))
        return ("TOKEN-MISSING" in k, f"flags={sorted(k)}")
    case("payload: an unpainted chromatic token flags", c1)

    # 2 — reachability belongs to another axis
    def c2(tmp):
        k, n, _d = run(fixture(tmp, accent="#1089ff"))
        return ("REF-STALE" not in k and "REF-OWNED" in n,
                f"flags={sorted(k)} notes={sorted(n)}")
    case("REF-STALE is never a flag here (owned by the unreachable axis)", c2)

    # 3 — matched tokens are silent
    def c3(tmp):
        k, _n, _d = run(fixture(tmp, accent="#1089ff"))
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("a token the sheet paints is silent", c3)

    # 4 — GATE: TOKEN-UNVERIFIED adjudicates the sample
    def c4(tmp):
        extra = ("**TOKEN-UNVERIFIED** — screenshot samples with no live counterpart: "
                 "`#3d88f7`.")
        k, _n, _d = run(fixture(tmp, accent="#3d88f7", css_accent="#1089ff", extra=extra))
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("GATE: TOKEN-UNVERIFIED list silences the sample", c4)

    # 5 — a sibling's colour is not this spec's token
    def c5(tmp):
        extra = "| note | the accent moves from the sibling's coral `#ff6768` |"
        k, _n, _d = run(fixture(tmp, accent="#1089ff", extra=extra))
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("SIBLING sentence is not a claim", c5)

    # 6 — dead preview → note, never a flag
    def c6(tmp):
        k, n, _d = run(fixture(tmp, page=404))
        return (not k and "REF-STILL-DEAD" in n, f"notes={sorted(n)}")
    case("dead preview → REF-STILL-DEAD note, no flag", c6)

    # 7 — 3-digit hex normalizes
    def c7(tmp):
        k, _n, _d = run(fixture(tmp, accent="#189", css=".x { background: #118899; }"))
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("#189 normalizes to #118899 in the sheet", c7)

    # 8 — inline <style> counts
    def c8(tmp):
        k, _n, _d = run(fixture(tmp, accent="#abcdef",
                                inline="<style>.y{color:#abcdef}</style>"))
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("inline <style> counts as live CSS", c8)

    # 9 — a 404 stylesheet never becomes a sheet
    def c9(tmp):
        k, n, _d = run(fixture(tmp, accent="#3d88f7", sheet=404))
        return ("NO-SHEET" in n, f"flags={sorted(k)} notes={sorted(n)}")
    case("dead stylesheet → NO-SHEET, no silent match", c9)

    # 10 — a delta-mapping line names the SUPERSEDED value
    def c10(tmp):
        extra = "- `#3d88f7` → **`#1089ff`** — the sheet paints `a{color}` with it"
        k, _n, _d = run(fixture(tmp, accent="#1089ff", extra=extra))
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("delta-mapping line is not a claim", c10)

    # 11 — neutral drift is a note
    def c11(tmp):
        k, n, _d = run(fixture(tmp, accent="#1089ff", neutral="#f5f5f5"))
        return ("TOKEN-MISSING" not in k and "TOKEN-NEUTRAL-DRIFT" in n,
                f"flags={sorted(k)} notes={sorted(n)}")
    case("neutral ramp drift → note only", c11)

    # 12 — GATE: no role vocabulary → no claim
    def c12(tmp):
        root = fixture(tmp, accent="#3d88f7")
        p = os.path.join(root, "openspec/specs/template-planner/spec.md")
        txt = open(p).read().replace("| role | value |", "| x | y |").replace(
            "| accent blue |", "| z |")
        open(p, "w").write(txt)
        k, _n, _d = run(root)
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("GATE: no role word → no token claim", c12)

    # 13 — GATE: a prep's own evidence fence is not a design claim
    def c13(tmp):
        extra = ("<!-- reference-revalue:start -->\n"
                 "- brand sample `#3d88f7` was wrong, the sheet paints `#1089ff`\n"
                 "<!-- reference-revalue:end -->")
        k, _n, _d = run(fixture(tmp, accent="#1089ff", css_accent="#1089ff", extra=extra))
        mut = mutate(tmp, 'def comment_lines(txt: str) -> set:',
                     'def comment_lines(txt: str) -> set:\n    return set()')
        km, _nm, _dm = run(fixture(tmp, accent="#1089ff", extra=extra), mut)
        return ("TOKEN-MISSING" not in k and "TOKEN-MISSING" in km,
                f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: evidence fence skipped (mutation fires)", c13)

    # 14 — GATE: a rebuilt 3.x demo re-skins, so a mismatch is DRIFT
    def c14(tmp):
        root = fixture(tmp, accent="#3d88f7",
                       css=".a{background:#1089ff}")
        p = os.path.join(root, "openspec/specs/template-planner/spec.md")
        open(p, "a").write("")
        # the page must LINK a 3.x sheet for the rebuilt detection to fire
        cache = os.path.join(os.path.dirname(root), "cache")
        seed(cache, BASE, PAGE.format(inline="").replace(
            "css/style.css", "css/style.min.css?v=3.0.1"))
        seed(cache, "https://preview.colorlib.com/theme/calendar-01/css/style.min.css?v=3.0.1",
             ".a{background:#1089ff}")
        k, n, _d = run(root)
        mut = mutate(tmp, "REBUILT_RX = re.compile(", "REBUILT_RX = None or re.compile(r'(?!)') and re.compile(")
        km, _nm, _dm = run(fixture(tmp, accent="#3d88f7", css=".a{background:#1089ff}"), mut)
        return ("SHEET-DRIFT" in n and "TOKEN-MISSING" not in k and "TOKEN-MISSING" in km,
                f"clean={sorted(k)}/{sorted(n)} mutated={sorted(km)}")
    case("GATE: rebuilt demo → SHEET-DRIFT, not a flag", c14)

    # 15 — GATE: rgba() notation is the same colour
    def c15(tmp):
        css = ".a{background:rgba(61,136,247,.9)}"
        k, _n, _d = run(fixture(tmp, accent="#3d88f7", css=css))
        mut = mutate(tmp, "def painted(css: str, h: str) -> bool:\n    if h in css:",
                     "def painted(css: str, h: str) -> bool:\n    return h in css\n    if h in css:")
        km, _nm, _dm = run(fixture(tmp, accent="#3d88f7", css=css), mut)
        return ("TOKEN-MISSING" not in k and "TOKEN-MISSING" in km,
                f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: rgba(61,136,247,.9) paints #3d88f7", c15)

    # 16 — GATE: a shipped app's own palette is an APP-DELTA, not a flag
    def c16(tmp):
        k, n, _d = run(fixture(tmp, accent="#3d88f7", css_accent="#1089ff",
                               app_hex="#3d88f7"))
        mut = mutate(tmp, "    apphex = load_app_palette(root, name)",
                     "    apphex = set()")
        km, _nm, _dm = run(fixture(tmp, accent="#3d88f7", css_accent="#1089ff",
                                   app_hex="#3d88f7"), mut)
        return ("APP-DELTA" in n and "TOKEN-MISSING" not in k and "TOKEN-MISSING" in km,
                f"clean={sorted(k)}/{sorted(n)} mutated={sorted(km)}")
    case("GATE: app palette → APP-DELTA note (mutation flags)", c16)

    # 17 — a hex the page carries in markup (SVG stroke) is present
    def c17(tmp):
        root = fixture(tmp, accent="#3d88f7", css=".a{background:#fff}",
                       inline='<svg stroke="#3d88f7"><circle/></svg>')
        k, _n, _d = run(root)
        return ("TOKEN-MISSING" not in k, f"flags={sorted(k)}")
    case("markup-level hex (SVG stroke) counts as painted", c17)

    # 18 — an alias prep is out of scope
    def c18(tmp):
        k, n, _d = run(fixture(tmp, accent="#3d88f7", css_accent="#1089ff", alias=True))
        return ("ALIAS-SKIP" in n and "TOKEN-MISSING" not in k,
                f"flags={sorted(k)} notes={sorted(n)}")
    case("alias prep (shipped-as) is skipped, never flagged", c18)

    okN = sum(1 for ok, _n, _d in cases if ok)
    for ok, name, detail in cases:
        print(f"{'PASS' if ok else 'FAIL'}  {name}  ({detail})")
    print(f"\n=== {okN}/{len(cases)} controls")
    return 0 if okN == len(cases) else 1


if __name__ == "__main__":
    sys.exit(main())
