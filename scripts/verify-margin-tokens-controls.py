#!/usr/bin/env python3
"""verify-margin-tokens-controls.py — mutation harness for the MARGIN axis.

Every control runs OFFLINE against a synthetic stylesheet, so it proves the
verifier's adjudication and not the network:

  * POSITIVE controls mutate a TRUE claim and demand the exact verdict. They
    survive the fix they validate because they invert the mutation.
  * GATE controls must FAIL when the comparison is disabled (they prove the
    verdict comes from comparing with the sheet, not from the mutation text).
  * REGRESSION controls pin the four false-positive classes measured on the
    first full run (41 phantom flags → 0): the shorthand `val` group, the
    `margin:0 …` zero reading, the ancestor-scoped rule, and the descendant
    subject.

Usage: python3 verify-margin-tokens-controls.py [-v]
Exit 0 = all controls pass. Non-zero = the number of failing controls.
"""
from __future__ import annotations

import importlib.util
import io
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location("_margin", HERE / "verify-margin-tokens.py")
M = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(M)

SHEET_CSS = """
.card { margin-bottom: 30px; }
.hero { margin-top: 69px; }
.pull { margin-top: -100px; }
.row { margin: 0 -15px; }
.title { margin: 0 auto; }
.btn { margin: 20px 5px 0 5px; }
.single-footer-widget { color: #333; }
.wrap .inner { margin-bottom: 80px; }
.hover-target { margin-top: 10px; }
.hover-target:hover { margin-top: 0; }
.m-b-110 { margin-bottom: 110px; }
.box { padding: 20px; }
.box.small { margin-right: 20px; }
"""

LAYERS = [("fixture://sheet.css", SHEET_CSS)]


def run(spec_text: str):
    """-> (flags, notes) for a spec body against the fixture sheet."""
    body = ("# Template: Fixture (Test)\n\n## Purpose\n\nFixture.\n\n" + spec_text + "\n")
    flags, notes, _adj = M.audit_spec(body, "fixture", LAYERS)
    return flags, notes


def kinds(flags):
    return [f[0] for f in flags]


results = []


def control(name, fn, gate=False):
    try:
        ok, detail = fn()
    except Exception as exc:                      # a crash is a failing control
        ok, detail = False, f"raised {type(exc).__name__}: {exc}"
    results.append((name, ok, detail, gate))


# ------------------------------------------------------- POSITIVE controls ---
def c_true_claim_is_clean():
    flags, _n = run("- `.card` cards carry `margin-bottom: 30px`.\n")
    return (not flags), f"flags={kinds(flags)}"


def c_wrong_value():
    flags, _n = run("- `.card` cards carry `margin-bottom: 45px`.\n")
    return (kinds(flags) == ["MARGIN-WRONG"]), f"flags={kinds(flags)}"


def c_missing_minus():
    flags, _n = run("- `.pull` is pulled up with `margin-top: 100px`.\n")
    return (kinds(flags) == ["MARGIN-SIGN"]), f"flags={kinds(flags)}"


def c_gutter_sign():
    flags, _n = run("- `.row` carries `margin: 0 15px` gutters.\n")
    return (kinds(flags) == ["MARGIN-SIGN"]), f"flags={kinds(flags)}"


def c_no_margin_claim():
    flags, _n = run("- `.card` has no margin.\n")
    return (kinds(flags) == ["MARGIN-ZERO"]), f"flags={kinds(flags)}"


def c_auto_read_as_zero():
    flags, _n = run("- `.title` is `margin: 0 20px`.\n")
    return (kinds(flags) == ["MARGIN-WRONG"]), f"flags={kinds(flags)}"


# ----------------------------------------------------------- GATE controls ---
def g_disable_comparison():
    orig = M.side_match
    M.side_match = lambda c, sh: True
    try:
        flags, _n = run("- `.card` cards carry `margin-bottom: 45px`.\n")
    finally:
        M.side_match = orig
    return (not flags), f"with side_match forced True flags={kinds(flags)} (must be empty)"


def g_disable_shorthand_val():
    import re
    orig = M.MARGIN_RX
    # the first-draft regex: the repetition outside the `val` group
    pat = orig.pattern.replace(
        r"(?P<val>(?:" + M._LEN + r"|auto)(?:\s+(?:" + M._LEN + r"|auto)){0,3})",
        r"(?P<val>" + M._LEN + r"|auto)(?:\s+(?:" + M._LEN + r"|auto)){0,3}")
    M.MARGIN_RX = re.compile(pat, orig.flags)
    try:
        flags, _n = run("- `.btn` is `margin: 20px 5px 0 5px`.\n")
    finally:
        M.MARGIN_RX = orig
    return (kinds(flags) == ["MARGIN-WRONG"]), \
        f"first-draft regex flags={kinds(flags)} (must be WRONG: it reads only `20px`)"


# ------------------------------------------------------- REGRESSION controls ---
def r_scoped_rule_not_base():
    flags, _n = run("- `.inner` is `margin-bottom: 80px` inside `.wrap`.\n")
    return (not flags), f"flags={kinds(flags)}"


def r_descendant_subject_skipped():
    flags, _n = run("- `.single-footer-widget` (h4 white, `margin-bottom: 35px`; links).\n")
    return (not flags), f"flags={kinds(flags)}"


def r_shorthand_four_values():
    v = M.parse_margin("20px 5px 0 5px")
    return (v == {"top": 20.0, "right": 5.0, "bottom": 0.0, "left": 5.0}), f"parsed={v}"


def r_zero_regex_ignores_shorthand():
    hit = M.ZERO_RX.search("`.where1{margin:0 10px 20px 10px}`")
    return (hit is None), f"ZERO_RX on a 4-value shorthand={bool(hit)} (must be None)"


def r_auto_side_not_compared():
    flags, notes = run("- `.title` is centred with `margin: 0 auto`.\n")
    return (not flags), f"flags={kinds(flags)} notes={[n[0] for n in notes]}"


def r_utility_is_a_note():
    flags, notes = run("- the wrapper uses `.m-b-110` (`margin-bottom: 110px`).\n")
    return (not flags), f"flags={kinds(flags)} notes={[n[0] for n in notes]}"


def r_table_chain_next_cell():
    line = "| Hero name | 92 px, `margin-left: -5px` | `.hero-area .hero-content h2` |\n"
    flags, _n = run(line)
    return (not flags), f"flags={kinds(flags)}"


def r_compound_class_owner():
    flags, _n = run("- `.box.small` carries `margin-right: 20px`.\n")
    return (not flags), f"flags={kinds(flags)}"


def r_tolerance_absorbs_small_delta():
    flags, _n = run("- `.card` cards carry `margin-bottom: 32px`.\n")
    return (not flags), f"4px tolerance violated: flags={kinds(flags)}"


# ------------------------------------------------------------------- report ---
control("TRUE claim is clean", c_true_claim_is_clean)
control("wrong value -> MARGIN-WRONG", c_wrong_value)
control("dropped minus -> MARGIN-SIGN", c_missing_minus)
control("gutter sign -> MARGIN-SIGN", c_gutter_sign)
control("'no margin' -> MARGIN-ZERO", c_no_margin_claim)
control("`auto` claimed as a number -> WRONG", c_auto_read_as_zero)
control("GATE: comparison disabled -> no flag", g_disable_comparison, gate=True)
control("GATE: first-draft regex -> WRONG", g_disable_shorthand_val, gate=True)
control("ancestor-scoped rule is not base", r_scoped_rule_not_base)
control("descendant subject skipped", r_descendant_subject_skipped)
control("4-value shorthand parses", r_shorthand_four_values)
control("ZERO_RX ignores `margin:0 a b c`", r_zero_regex_ignores_shorthand)
control("auto side not compared", r_auto_side_not_compared)
control("utility claim is a note", r_utility_is_a_note)
control("table row: chain cell not bound", r_table_chain_next_cell)
control("compound class owner", r_compound_class_owner)
control("4px tolerance absorbed", r_tolerance_absorbs_small_delta)

verbose = "-v" in sys.argv or "--verbose" in sys.argv
fails = 0
for name, ok, detail, gate in results:
    tag = "GATE " if gate else "     "
    if not ok:
        fails += 1
    if verbose or not ok:
        print(f"{tag}{'PASS' if ok else 'FAIL'}  {name}: {detail}")
print(f"\ncontrols: {len(results)} | passed: {len(results) - fails} | failed: {fails} "
      f"| GATE: {sum(1 for r in results if r[3])}")
sys.exit(fails)
