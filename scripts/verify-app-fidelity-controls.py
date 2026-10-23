#!/usr/bin/env python3
"""verify-app-fidelity-controls.py — control harness for the app-fidelity axis.

Mutation-based, offline, no repo needed: every case builds a synthetic prep root
(a spec + an app `src`) in a temp dir.  The GATE cases re-run the verifier with
ONE guard disabled and prove the payload then fires — a control that cannot fail
proves nothing.

Run: python3 verify-app-fidelity-controls.py        # expects 19/19
"""
from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VF = os.path.join(HERE, "verify-app-fidelity.py")

SPEC = """# Template: Planner (Widget)

## Purpose

A calendar widget recreated from a reference design.

## Design tokens

| Token | Value | Evidence |
| --- | --- | --- |
| Brand colour | `{brand}` | primary buttons, links |
{extra}

## Requirements

### Requirement: Widget

#### Scenario: Renders
- **WHEN** it mounts
- **THEN** it shows a calendar
"""

APP_CSS = """@import 'tailwindcss';

@theme {{
  --color-brand: {brand};
  --color-accent: {accent};
  --font-sans: 'Inter', sans-serif;
}}
{extra}
"""


def fixture(tmp, *, brand="#1089ff", app_brand="#1089ff", accent="#c94e28",
            extra="", app_css_extra="", app=True, css=None, slug=None) -> str:
    root = os.path.join(tmp, "repo")
    spec_dir = os.path.join(root, "openspec", "specs", "template-planner")
    os.makedirs(spec_dir, exist_ok=True)
    body = SPEC.format(brand=brand, extra=extra)
    if slug:
        body = body.replace("## Purpose", f"Source slug: `{slug}`\n\n## Purpose")
    open(os.path.join(spec_dir, "spec.md"), "w").write(body)
    os.makedirs(os.path.join(root, "apps"), exist_ok=True)
    if app:
        src = os.path.join(root, "apps", "planner", "src")
        os.makedirs(src, exist_ok=True)
        open(os.path.join(src, "index.css"), "w").write(
            css if css is not None else APP_CSS.format(brand=app_brand, accent=accent,
                                                       extra=app_css_extra))
    return root


def run(root: str, script: str = VF):
    out = os.path.join(os.path.dirname(root), "out.json")
    subprocess.run([sys.executable, script, "--prep-root", root, "--worktree",
                    "--json", out], capture_output=True, text=True)
    data = json.load(open(out))
    kinds = {f[1] for f in data["flags"]}
    nkinds = {n[1] for n in data["notes"]}
    return kinds, nkinds, data


def mutate(tmp: str, old: str, new: str) -> str:
    src = open(VF, encoding="utf-8").read()
    assert old in src, f"mutation anchor missing: {old[:60]}"
    dst = os.path.join(tmp, "vf-mutated.py")
    open(dst, "w").write(src.replace(old, new, 1))
    return dst


def main() -> int:
    cases = []

    def case(name, fn):
        tmp = tempfile.mkdtemp(prefix="afc-")
        try:
            ok, detail = fn(tmp)
        except Exception as exc:                      # a broken fixture is a failure
            ok, detail = False, f"EXC {exc!r}"
        finally:
            shutil.rmtree(tmp, ignore_errors=True)
        cases.append((ok, name, detail))

    # 1 — the payload: a measured brand colour the app never paints
    def c1(tmp):
        k, n, d = run(fixture(tmp, brand="#1089ff", app_brand="#c94e28"))
        return ("UNSHIPPED" in k, f"flags={sorted(k)} rows={len(d['rows'])}")
    case("payload: unpainted measured brand flags", c1)

    # 2 — the app paints the measured hex
    def c2(tmp):
        k, n, _d = run(fixture(tmp, brand="#1089ff", app_brand="#1089ff"))
        return (not k and "COVERED" in n, f"flags={sorted(k)} notes={sorted(n)}")
    case("a painted brand colour is COVERED, never a flag", c2)

    # 3 — a near neighbour is a delta in numbers, not a defect
    def c3(tmp):
        k, n, _d = run(fixture(tmp, brand="#1089ff", app_brand="#1b8ff2"))
        return (not k and "APPROX" in n, f"flags={sorted(k)} notes={sorted(n)}")
    case("Δ ≤ 24 neighbour → APPROX note", c3)

    # 4 — GATE: the APPROX tolerance is what silences it
    def c4(tmp):
        k, _n, _d = run(fixture(tmp, brand="#1089ff", app_brand="#1b8ff2"))
        mut = mutate(tmp, "        if d <= TOL:", "        if False and d <= TOL:")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", app_brand="#1b8ff2"), mut)
        return (not k and "UNSHIPPED" in km, f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: without the tolerance the neighbour flags", c4)

    # 5 — GATE: an evidence fence is not a design claim
    def c5(tmp):
        extra = ("<!-- reference-revalue:start -->\n"
                 "| Brand colour | `#3d88f7` | the old sample |\n"
                 "<!-- reference-revalue:end -->")
        k, _n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "def comment_lines(txt: str) -> set:",
                     "def comment_lines(txt: str) -> set:\n    return set()")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "UNSHIPPED" in km, f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: evidence fence skipped (mutation flags)", c5)

    # 6 — GATE: a sibling's coral is not this design's token
    def c6(tmp):
        extra = "| Brand note | the sibling's coral `#ff6768` is unrelated |"
        k, _n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "        if SIBLING_RX.search(s) or DELTA_RX.search(s) "
                          "or REBUILT_RX.search(s):", "        if False:")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "UNSHIPPED" in km, f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: sibling sentence is not a claim", c6)

    # 7 — GATE: a re-valuation line names the superseded value
    def c7(tmp):
        extra = "| Brand colour | `#3d88f7` → **`#1089ff`** | re-valued from the sheet |"
        k, _n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "        if SIBLING_RX.search(s) or DELTA_RX.search(s) "
                          "or REBUILT_RX.search(s):", "        if False:")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "UNSHIPPED" in km, f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: `#old → #new` line is not a claim", c7)

    # 8 — GATE: a drift role describes what the app cannot match
    def c8(tmp):
        extra = "| Brand drift | `#3d88f7` | the sheet moved on |"
        k, _n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "        if not role or not ROLE_RX.search(role) "
                          "or ROLE_EXCL_RX.search(role):",
                     "        if not role or not ROLE_RX.search(role):")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "UNSHIPPED" in km, f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: variant/drift role labels are not claims", c8)

    # 9 — GATE: a generated scale is a device, not N claims
    def c9(tmp):
        extra = "- **Brand colour**: `#1089ff`, scale `#f1f5ff`, `#dfe9ff`, `#032b52`"
        k, _n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "            hexes = hexes[:1]", "            pass")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "UNSHIPPED" in km, f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: only the anchor hex of a `scale` line is a claim", c9)

    # 10 — GATE: a slate is not a brand hue
    def c10(tmp):
        extra = "| Primary text | `#64748b` | body copy |"
        k, _n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "chroma(h) < BRAND_CHROMA", "chroma(h) < 0.0")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "UNSHIPPED" in km, f"clean={sorted(k)} mutated={sorted(km)}")
    case("GATE: low-chroma slate excluded from brand claims", c10)

    # 11 — an alias prep is out of scope
    def c11(tmp):
        root = fixture(tmp, brand="#1089ff", app_brand="#c94e28")
        p = os.path.join(root, "openspec/specs/template-planner/spec.md")
        txt = open(p).read().replace("## Design tokens",
                                     "<!-- prep-status: shipped-as=other-app -->\n\n"
                                     "## Design tokens")
        open(p, "w").write(txt)
        k, n, _d = run(root)
        return (not k and "ALIAS-SKIP" in n, f"flags={sorted(k)} notes={sorted(n)}")
    case("alias prep (shipped-as) is skipped", c11)

    # 12 — a named-palette app is not comparable from source
    def c12(tmp):
        css = ("@import 'tailwindcss';\n@theme {\n"
               "  --font-sans: 'Inter', sans-serif;\n}\n")
        root = fixture(tmp, brand="#1089ff", css=css)
        open(os.path.join(root, "apps/planner/src/App.tsx"), "w").write(
            "export default function App(){return <div className=\"bg-blue-600\"/>}\n")
        k, n, _d = run(root)
        return (not k and "NO-TOKEN" in n, f"flags={sorted(k)} notes={sorted(n)}")
    case("app with no chromatic hex → NO-TOKEN, never a flag", c12)

    # 13 — GATE: an app that paints in rgb()/rgba() notation still matches
    def c13(tmp):
        css = "@theme {\n  --color-brand: rgba(16, 137, 255, 1);\n  --color-accent: #c94e28;\n}\n"
        k, n, _d = run(fixture(tmp, brand="#1089ff", css=css))
        mut = mutate(tmp, "        for r, g, b in RGB_RX.findall(txt):",
                     "        for r, g, b in []:")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", css=css), mut)
        return (not k and "COVERED" in n and "UNSHIPPED" in km,
                f"clean={sorted(k)}/{sorted(n)} mutated={sorted(km)}")
    case("GATE: rgba() app paint matches a hex claim", c13)

    # 14 — GATE: a hover-only colour is a variant, not the brand
    def c14(tmp):
        extra = "| CTA red | `#ff6347` | Link/button hover accent |"
        k, n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "        if VARIANT_RX.search(usage):", "        if False:")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "APPROX-VARIANT" in n and "UNSHIPPED" in km,
                f"clean={sorted(k)}/{sorted(n)} mutated={sorted(km)}")
    case("GATE: hover-only usage → APPROX-VARIANT", c14)

    # 15 — GATE: a colour the reference paints once is not a brand
    def c15(tmp):
        extra = "| Accent | `#0056b3` | 1 declarations — a |"
        k, n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "        if decls is not None and decls < 2:", "        if False:")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "APPROX-MINOR" in n and "UNSHIPPED" in km,
                f"clean={sorted(k)}/{sorted(n)} mutated={sorted(km)}")
    case("GATE: single-declaration colour → APPROX-MINOR", c15)

    # 16 — GATE: a social network's blue is not the design's accent
    def c16(tmp):
        extra = "| Accent blue | `#39a1f2` | Twitter/social blue |"
        k, n, _d = run(fixture(tmp, brand="#1089ff", extra=extra))
        mut = mutate(tmp, "        if SOCIAL_USAGE_RX.search(usage):", "        if False:")
        km, _nm, _dm = run(fixture(tmp, brand="#1089ff", extra=extra), mut)
        return (not k and "APPROX-SOCIAL" in n and "UNSHIPPED" in km,
                f"clean={sorted(k)}/{sorted(n)} mutated={sorted(km)}")
    case("GATE: social-brand usage → APPROX-SOCIAL", c16)

    # 17 — direction 2: an anchor the prep never measured
    def c17(tmp):
        k, n, d = run(fixture(tmp, brand="#1089ff", app_brand="#5a2360"))
        has = "UNDOCUMENTED-ANCHOR" in n
        k2, n2, _d2 = run(fixture(tmp, brand="#1089ff", app_brand="#1089ff",
                                  accent="#1089ff"))
        return (has and "UNDOCUMENTED-ANCHOR" not in n2,
                f"invented={sorted(n)} documented={sorted(n2)}")
    case("app anchor not in the spec → UNDOCUMENTED-ANCHOR", c17)

    # 18 — a spec with no brand-role colour is a spec-side gap
    def c18(tmp):
        root = fixture(tmp, brand="#1089ff")
        p = os.path.join(root, "openspec/specs/template-planner/spec.md")
        txt = open(p).read().replace("| Brand colour |", "| Surface |")
        open(p, "w").write(txt)
        k, n, _d = run(root)
        return (not k and "NO-CLAIM" in n, f"flags={sorted(k)} notes={sorted(n)}")
    case("no brand-role claim → NO-CLAIM note", c18)

    # 19 — a spec whose app is not built yet is out of scope
    def c19(tmp):
        k, n, _d = run(fixture(tmp, brand="#1089ff", app=False))
        return (not k and not n, f"flags={sorted(k)} notes={sorted(n)}")
    case("spec without apps/<name> → nothing to compare", c19)

    okN = sum(1 for ok, _n, _d in cases if ok)
    for ok, name, detail in cases:
        print(f"{'PASS' if ok else 'FAIL'}  {name}  ({detail})")
    print(f"\n=== {okN}/{len(cases)} controls")
    return 0 if okN == len(cases) else 1


if __name__ == "__main__":
    sys.exit(main())
