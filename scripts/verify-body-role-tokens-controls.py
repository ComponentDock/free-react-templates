#!/usr/bin/env python3
"""Mutation controls for `verify-body-role-tokens.py` (BODY-TEXT role axis).

Every control builds a small synthetic sheet + measured-render dict and asserts
the bucket the verifier must return. A control marked GATE is one where a wrong
answer would ship a false correction into a prep — those are the ones that
decided the 2026-10-25f fixes.

  python3 scripts/verify-body-role-tokens-controls.py       # 14 controls
Exit code 0 = all pass, 1 = a control failed.
"""
from __future__ import annotations

import importlib.util
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
spec = importlib.util.spec_from_file_location(
    "vbr", os.path.join(HERE, "verify-body-role-tokens.py"))
vbr = importlib.util.module_from_spec(spec)
spec.loader.exec_module(vbr)

RESULTS: list[tuple[str, bool, str]] = []


def rules(css: str) -> list[dict]:
    out, order = [], 0
    for head, decls, media in vbr.iter_rules(css):
        cols = vbr.colour_of(decls) if "color" in decls else []
        if not cols:
            continue
        hits = [s for s in vbr.split_selectors(head) if vbr.targets_p(s)]
        if not hits:
            continue
        best = max(hits, key=vbr.specificity)
        out.append({
            "order": order, "sheet": "style.css", "selector": best,
            "spec": vbr.specificity(best), "media": media,
            "values": [v for _, v in cols], "value": cols[-1][1],
            "element_only": all(s.strip().lower() == "p" for s in hits),
        })
        order += 1
    return out


def measured(**kw):
    """measured = paraColours {rgb(...): n}, body {color: rgb(...)}"""
    para = {}
    for hexv, n in kw.get("paras", {}).items():
        rgb = "rgb({}, {}, {})".format(int(hexv[1:3], 16), int(hexv[3:5], 16),
                                       int(hexv[5:7], 16))
        para[rgb] = para.get(rgb, 0) + n
    body = kw.get("body")
    out = {"paraColours": para}
    if body:
        out["body"] = {"color": "rgb({}, {}, {})".format(
            int(body[1:3], 16), int(body[3:5], 16), int(body[5:7], 16))}
    return out


def ctl(name, gate, css, claim, meas, want, only=False):
    got, detail = vbr.classify(claim, rules(css), meas)
    ok = got == want
    RESULTS.append((name + (" [GATE]" if gate else ""), ok,
                    f"{got} != {want} ({detail[:80]})" if not ok else detail[:80]))


# --- the four shapes that decided the axis --------------------------------
ctl("C01 element p rule paints the claim", True,
    "p{color:#838383}", "#838383", measured(paras={"#838383": 6}), "MATCH-WINNER")

ctl("C02 claim declared by no rule (a borrowed hex)", True,
    "p{color:#838383}", "#333333", measured(paras={"#838383": 6}), "NO-RULE")

ctl("C03 later colour in the same block wins", True,
    "p{color:#666666;color:#646464}", "#666666",
    measured(paras={"#646464": 8}), "EARLIER-DECL")

ctl("C04 scoped rule out-ranks the element rule", True,
    "p{color:#b3b3b3}.cl-modal .cl-modal-body p{color:#777}", "#b3b3b3",
    measured(paras={"#777777": 2}), "LOSES-RULE")

ctl("C05 the winning scoped value is the claim", True,
    "p{color:#b3b3b3}.cl-modal .cl-modal-body p{color:#777}", "#777777",
    measured(paras={"#777777": 2}), "MATCH-SCOPED")

# --- guards that keep a losing rule from being read as a winner -----------
ctl("C06 an @media-only rule is not the desktop value", True,
    "p{color:#989898}@media(max-width:575px){p{color:#51545f}}", "#51545f",
    measured(paras={"#989898": 5}), "NO-RULE")

ctl("C07 a 3-digit hex normalises to the measured 6-digit", True,
    ".cl-modal p{color:#777}", "#777777", measured(paras={"#777777": 1}),
    "MATCH-WINNER")

ctl("C07b a scoped winner is flagged when an element rule says otherwise", True,
    "p{color:#b3b3b3}.cl-modal .cl-modal-body p{color:#777}", "#777777",
    measured(paras={"#777777": 2}), "MATCH-SCOPED")

ctl("C08 `h2,p` also targets p", False,
    "h2,p{color:#000}", "#000000", measured(paras={"#000000": 3}), "MATCH-WINNER")

ctl("C09 a colour that only sits in a comment is not a rule", True,
    "/* p{color:#333333} */p{color:#838383}", "#333333",
    measured(paras={"#838383": 6}), "NO-RULE")

ctl("C10 inherited body colour with no p rule", True,
    ".x{color:#4d4d4d}", "#4d4d4d",
    measured(paras={"#ffffff": 12}, body="#4d4d4d"), "MATCH-BODY")

ctl("C11 a rule that paints nothing is a loser, not a winner", True,
    "p{color:#989898}.benefit_content p{color:#51545f}", "#989898",
    measured(paras={"#51545f": 5}), "LOSES-RULE")

ctl("C12 element-only p that DOES paint is not a loser", True,
    "p{color:#4d4d4d}.card p{color:#6e6e6e}", "#4d4d4d",
    measured(paras={"#6e6e6e": 8, "#4d4d4d": 1}), "MATCH-WINNER")

ctl("C13 `p a` does not claim the p colour", True,
    "p a{color:#ff0000}p{color:#838383}", "#ff0000",
    measured(paras={"#838383": 6}), "NO-RULE")

ctl("C14 rgb() measured key round-trips to hex", False,
    "p{color:#51545f}", "#51545f",
    measured(paras={"#51545F": 5}), "MATCH-WINNER")


def main() -> int:
    bad = [r for r in RESULTS if not r[1]]
    for name, ok, detail in RESULTS:
        print(f"{'PASS' if ok else 'FAIL'}  {name:52} {detail}")
    print(f"\ncontrols {len(RESULTS) - len(bad)}/{len(RESULTS)} "
          f"({sum(1 for n, _, _ in RESULTS if '[GATE]' in n)} GATE)")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
