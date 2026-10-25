#!/usr/bin/env python3
"""Mutation controls for `verify-heading-role-tokens.py` (HEADING-INK role axis).

Every control builds a small synthetic sheet + measured-render dict and asserts
the bucket the verifier must return. A control marked GATE is one where a wrong
answer would ship a false correction into a prep.

  python3 scripts/verify-heading-role-tokens-controls.py      # 16 controls
Exit code 0 = all pass, 1 = a control failed.
"""
from __future__ import annotations

import importlib.util
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location(
    "vhr", os.path.join(HERE, "verify-heading-role-tokens.py"))
vhr = importlib.util.module_from_spec(spec)
spec.loader.exec_module(vhr)

RESULTS: list[tuple[str, bool, str]] = []


def rgb(hexv: str) -> str:
    return "rgb({}, {}, {})".format(int(hexv[1:3], 16), int(hexv[3:5], 16),
                                   int(hexv[5:7], 16))


def measured(heads: dict | None = None, body: str | None = None) -> dict:
    out = {"headingColours": {rgb(h): n for h, n in (heads or {}).items()}}
    if body:
        out["body"] = {"color": rgb(body)}
    return out


def ctl(name, gate, css, claim, meas, want):
    got, detail = vhr.classify(claim, vhr.rules_from_css(css), meas)
    ok = got == want
    RESULTS.append((name + (" [GATE]" if gate else ""), ok,
                    f"{got} != {want} ({detail[:70]})" if not ok else detail[:70]))


# --- the shapes that made the axis ----------------------------------------
ctl("C01 element h2 rule paints the claim", True,
    "h2{color:#000000}", "#000000", measured({"#000000": 6}), "MATCH-WINNER")

ctl("C02 an invented ink (no heading rule declares it)", True,
    "h2{color:#111111}", "#333333", measured({"#111111": 4}), "NO-RULE")

ctl("C03 the body colour named in the heading role", True,
    "body{color:#212529}h2{color:#ffffff}", "#212529",
    measured({"#ffffff": 5}, body="#212529"), "BODY-INK")

ctl("C04 a class-heading rule out-ranks `h2,h3`", True,
    "h2,h3{color:#000000}.heading-section{color:#ffffff}", "#000000",
    measured({"#ffffff": 3}), "LOSES-RULE")

ctl("C05 the winning class value is not a loser", True,
    "h2,h3{color:#000000}.heading-section{color:#ffffff}", "#ffffff",
    measured({"#ffffff": 3}), "MATCH-CLASS")

ctl("C06 scoped heading rule (`.hero h1`) is its own kind", True,
    "h1{color:#222222}.hero h1{color:#eeeeee}", "#eeeeee",
    measured({"#eeeeee": 1}), "MATCH-CLASS")

# --- guards ---------------------------------------------------------------
ctl("C07 later colour in the same block wins", True,
    "h2{color:#000000;color:#333333}", "#000000",
    measured({"#333333": 4}), "EARLIER-DECL")

ctl("C08 an @media-only ink is not the desktop value", True,
    "h2{color:#111111}@media(max-width:575px){h2{color:#ffffff}}", "#ffffff",
    measured({"#111111": 5}), "NO-RULE")

ctl("C09 a hex inside a comment is not a rule", True,
    "/* h2{color:#333333} */h2{color:#000000}", "#333333",
    measured({"#000000": 6}), "NO-RULE")

ctl("C10 a 3-digit hex normalises to the measured 6-digit", True,
    "h3{color:#333}", "#333333", measured({"#333333": 2}), "MATCH-WINNER")

ctl("C11 `h1 a{color}` does not claim the heading ink", True,
    "h1 a{color:#ff0000}h1{color:#222222}", "#ff0000",
    measured({"#222222": 3}), "NO-RULE")

ctl("C12 `@font-face`/`@keyframes` bodies are not rules", True,
    "@font-face{font-family:x;color:#777777}@keyframes k{0%{color:#777777}}"
    "h2{color:#000000}", "#777777", measured({"#000000": 2}), "NO-RULE")

ctl("C13 `h2,p` still declares the heading ink", False,
    "h2,p{color:#000000}", "#000000", measured({"#000000": 3}), "MATCH-WINNER")

ctl("C14 a heading with no rule inherits the body colour", True,
    "body{color:#4d4d4d}.x{color:#111111}", "#4d4d4d",
    measured({"#4d4d4d": 8}, body="#4d4d4d"), "MATCH-RENDER")

ctl("C15 element rule that also paints some headings is not a loser", True,
    "h2{color:#111111}.card h2{color:#222222}", "#111111",
    measured({"#111111": 5, "#222222": 2}), "MATCH-WINNER")

ctl("C16 no render yet: attribution only, never a verdict", True,
    "h2{color:#000000}", "#000000", {}, "DECL-ELEMENT")

ctl("C17 a rule written in rgb() is not invisible", True,
    "h2{color:rgb(23,36,62)}", "#17243e", measured({"#17243e": 21}), "MATCH-WINNER")

ctl("C18 an 8-digit alpha hex is the same ink as its 6-digit form", True,
    "h1{color:#000000cc}", "#000000",
    measured({"#000000": 18}), "MATCH-WINNER")


def main() -> int:
    bad = [r for r in RESULTS if not r[1]]
    for name, ok, detail in RESULTS:
        print(f"{'PASS' if ok else 'FAIL'}  {name:58} {detail}")
    print(f"\ncontrols {len(RESULTS) - len(bad)}/{len(RESULTS)} "
          f"({sum(1 for n, _, _ in RESULTS if '[GATE]' in n)} GATE)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
