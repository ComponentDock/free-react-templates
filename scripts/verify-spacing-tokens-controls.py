#!/usr/bin/env python3
"""verify-spacing-tokens-controls.py — control harness for the SPACING axis.

Mutation-based: every positive is built by MUTATING a fixture (writing the
wording the corpus actually uses, then stripping it), so the controls keep
failing if the extractor regresses and keep passing after the axis' own fix.
GATE controls disable one guard and prove the payload then fires — the
discipline that keeps an axis from silently reading nothing.

Run FIRST, before the sweep:  python3 verify-spacing-tokens-controls.py
Exit 0 = all controls pass. Fully offline (synthetic CSS + text fixtures).
"""
import importlib.util
import os
import re
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
TARGET = os.path.join(HERE, "verify-spacing-tokens.py")

FAILED = []
PASSED = []


def load(path=None):
    p = path or TARGET
    spec = importlib.util.spec_from_file_location("spacing_axis", p)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def check(name, cond, detail=""):
    if cond:
        PASSED.append(name)
        print(f"PASS {name}")
    else:
        FAILED.append(name)
        print(f"FAIL {name} {detail}")


def sheet(css):
    return [("fixture.css", css)]


def audit(mod, txt, css, classes=None):
    layers = sheet(css)
    if classes is None:
        return mod.audit_spec(txt, "fixture", layers, "/tmp")
    cl = mod.spacing_claims(txt, classes)
    return cl


def main():
    mod = load()

    # ---------------------------------------------------------------- C1 ---
    check("C1 module imports and exposes the axis",
          hasattr(mod, "audit_spec") and hasattr(mod, "spacing_claims")
          and hasattr(mod, "pad_rules"), "missing API")

    # ---------------------------------------------------------------- C2 ---
    txt = "3. About `div.about_area` (white, `padding: 200px 0 270px`) →\n"
    cl = mod.spacing_claims(txt, {"about_area"})
    ok = (len(cl) == 1 and cl[0][1] == ["about_area"]
          and cl[0][2]["top"] == (200.0, "px") and cl[0][2]["bottom"] == (270.0, "px"))
    check("C2 three-value shorthand keeps top AND bottom", ok, f"got {cl}")

    # ---------------------------------------------------------------- C3 ---
    txt = "- `.hero-band` block: `padding-top: 80px`; colour #fff\n"
    cl = mod.spacing_claims(txt, {"hero-band"})
    check("C3 `padding-top:` single-side claim",
          len(cl) == 1 and cl[0][2] == {"top": (80.0, "px")}, f"got {cl}")

    # ---------------------------------------------------------------- C4 ---
    txt = "- `.band` has no padding and no background\n"
    cl = mod.spacing_claims(txt, {"band"})
    ok = len(cl) == 1 and cl[0][2].get("top") == (0.0, "px")
    check("C4 a 'no padding' assertion is a zero claim", ok, f"got {cl}")

    # ---------------------------------------------------------------- C5 ---
    # a hyphenated class name is not a padding declaration, and "<noun> padding"
    # with no selector in its own clause states nothing bindable (giveback)
    txt = ("- Section rhythm: `section-padding` 100px; strip padding 60px; "
           "section headings 22px\n")
    cl = mod.spacing_claims(txt, {"section-padding"})
    check("C5 a class name + '<noun> padding' yields no claim", cl == [], f"got {cl}")

    txt2 = "- `section-padding` 100px; `.strip` padding 60px\n"
    cl2 = mod.spacing_claims(txt2, {"section-padding", "strip"})
    ok2 = len(cl2) == 1 and cl2[0][1] == ["strip"]
    check("C5b clause scoping: a ';' isolates the second subject's value", ok2,
          f"got {cl2}")

    # ---------------------------------------------------------------- C6 ---
    txt = "1. `div.content` (padding 7rem 0 = 112px vertical) → `div.container`\n"
    cl = mod.spacing_claims(txt, {"content", "container"})
    check("C6 '→' skeleton binds the selector BEFORE the arrow",
          len(cl) == 1 and cl[0][1] == ["content"] and cl[0][2]["top"] == (112.0, "px"),
          f"got {cl}")

    # ---------------------------------------------------------------- C7 ---
    txt = "| hero band | `padding 60px 0` | `.hero` |\n"
    cl = mod.spacing_claims(txt, {"hero"})
    check("C7 a table row binds the selector in another cell",
          len(cl) == 1 and cl[0][1] == ["hero"], f"got {cl}")

    # ---------------------------------------------------------------- C8 ---
    ev = "- `saita`: `.band{padding:7em 0}` — quoted from the live sheet.\n"
    cl = mod.spacing_claims(ev, {"band"})
    check("C8 our own evidence line is not a claim", cl == [], f"got {cl}")

    # ---------------------------------------------------------------- C9 ---
    txt = "- `.hero` padding 60px 0 (sampled from the screenshot)\n"
    cl = mod.spacing_claims(txt, {"hero"})
    check("C9 approximate claim is guarded",
          len(cl) == 1 and cl[0][5] == "SPACING-APPROX", f"got {cl}")

    # --------------------------------------------------------------- C10 ---
    txt = "- `.hero` padding 60px 0 at the ≤991px breakpoint (100px above)\n"
    cl = mod.spacing_claims(txt, {"hero"})
    check("C10 responsive claim is guarded",
          len(cl) == 1 and cl[0][5] == "SPACING-RESPONSIVE", f"got {cl}")

    # --------------------------------------------------------------- C11 ---
    txt = "- `.hero` padding 60px 0 — the recreation uses Tailwind `py-6` instead\n"
    cl = mod.spacing_claims(txt, {"hero"})
    check("C11 implementation guidance is guarded",
          len(cl) == 1 and cl[0][5] == "SPACING-IMPL", f"got {cl}")

    # --------------------------------------------------------------- C12 ---
    txt = "- `.band` padding 0 — the only padding in the sheet is 0\n"
    cl = mod.spacing_claims(txt, {"band"})
    check("C12 a census sentence is guarded",
          len(cl) == 1 and cl[0][5] == "SPACING-CENSUS", f"got {cl}")

    # --------------------------------------------------------------- C13 ---
    txt = "- `.grid` grid gap 30px between cards\n"
    cl = mod.spacing_claims(txt, {"grid"})
    check("C13 a `gap` claim is a note, not adjudicated",
          len(cl) == 1 and cl[0][5] == "SPACING-GAP", f"got {cl}")

    # --------------------------------------------------------------- C14 ---
    flags, notes, n = audit(mod, "- `.ftco-section` padding 112px 0\n",
                            ".ftco-section{padding:7em 0}")
    check("C14 rem/em is normalised (7em == 112px)", flags == [] and n == 1,
          f"{flags} {notes}")

    # --------------------------------------------------------------- C15 ---
    flags, _n, _c = audit(mod, "- `.about_area` `padding: 200px 0 270px`\n",
                          ".about_area{padding:200px 0 270px}")
    check("C15 a matching claim is clean", flags == [], f"{flags}")

    # --------------------------------------------------------------- C16 ---
    flags, _n, _c = audit(mod, "- `.popular_courses` `padding: 100px 0`\n",
                          ".popular_courses{padding:60px 0}")
    check("C16 a disagreeing named selector FLAGS",
          len(flags) == 1 and flags[0][0] == "SPACING-WRONG", f"{flags}")

    # --------------------------------------------------------------- C17 ---
    flags, notes, _c = audit(mod, "- `.border-bottom` padding 120px 0\n",
                             ".border-bottom{border-bottom:1px solid #eee}")
    check("C17 a padding-free selector is a note, not a flag",
          flags == [] and any(k == "SPACING-ABSENT" for k, _m in notes),
          f"{flags} {notes}")

    # --------------------------------------------------------------- C18 ---
    layers = [("bootstrap.css", ".section{padding:40px 0}"),
              ("main.css", ".section{padding:100px 0}")]
    flags, _n, _c = mod.audit_spec("- `.section` padding 40px 0\n", "f", layers)
    check("C18 any layer/state matching the claim is clean",
          flags == [], f"{flags}")

    # --------------------------------------------------------------- C19 ---
    flags, notes, _c = audit(
        mod, "- `.footer-border` (padding 40px 0)\n",
        ".footer-bottom-area .footer-border{border-top:1px solid #eee;"
        "padding-top:39px;padding-bottom:1px}")
    check("C19 the `Npx 0` idiom compares the dominant edge only",
          flags == [] and any(k == "SPACING-COLLAPSED" for k, _m in notes),
          f"{flags} {notes}")

    # --------------------------------------------------------------- C20 ---
    ok_near, _n1, _c1 = audit(mod, "- `.band` padding 100px 0\n",
                              ".band{padding:106px 0}")
    bad_far, _n2, _c2 = audit(mod, "- `.band` padding 100px 0\n",
                              ".band{padding:120px 0}")
    check("C20 tolerance: 100 vs 106 is clean, 100 vs 120 flags",
          ok_near == [] and len(bad_far) == 1, f"{ok_near} {bad_far}")

    # --------------------------------------------------------------- C21 ---
    flags, notes, n = audit(mod, "- `.band` padding 5% 0\n", ".band{padding:5% 0}")
    check("C21 a %-based padding is unparseable, not a flag",
          flags == [] and n == 0, f"{flags} {notes}")

    # --------------------------------------------------------------- C22 ---
    css = ("@media print{.band{padding:99px 0}}"
           "@media screen and (max-width:991px){.band{padding:40px 0}}"
           "@supports (display:grid){.band{padding:41px 0}}"
           "@media all{.x{color:red}}")
    rules = {sel: body for sel, body, _media in mod.parse_rules(css)}
    vals = [v for v in mod.pad_rules(sheet(css))[".band"]]
    check("C22 @media print dropped, screen/supports flattened",
          ".band" in rules and len(vals) == 2
          and all(v["top"][0] != 99.0 for v in vals), f"{vals}")

    # --------------------------------------------------------------- C23 ---
    big = "".join(f"@media screen and (max-width:{i}px){{.c{i}{{padding:{i}px 0}}}}"
                  for i in range(500))
    big += ".band{padding:100px 0}" * 1500
    t0 = time.time()
    rules = mod.parse_rules(big)
    dt = time.time() - t0
    check(f"C23 500 @media blocks parse in {dt:.2f}s (< 2s)",
          dt < 2.0 and len(rules) >= 500, f"{dt:.2f}s {len(rules)} rules")

    # --------------------------------------------------------------- C24 ---
    # GATE: disabling clause scoping re-admits giveback's neighbouring claim
    orig_clauses = mod.clauses
    mod.clauses = lambda line: [(line, 0)]
    try:
        cl2 = mod.spacing_claims(
            "- `section-padding` 100px; `.strip` padding 60px\n",
            {"section-padding", "strip"})
        fired = bool(cl2) and cl2[0][1] == ["section-padding", "strip"]
    finally:
        mod.clauses = orig_clauses
    check("C24 GATE clause scoping: without it the strip's value binds both classes", fired)

    # --------------------------------------------------------------- C25 ---
    # GATE: zero tolerance re-flags the sub-perceptual near misses
    orig_tol = (mod.TOL_ABS, mod.SMALL, mod.TOL_REL)
    mod.TOL_ABS, mod.SMALL, mod.TOL_REL = 0.0, 0.0, 0.0
    try:
        f2, _n2, _c2 = audit(mod, "- `.band` padding 100px 0\n", ".band{padding:106px 0}")
        fired = len(f2) == 1
    finally:
        mod.TOL_ABS, mod.SMALL, mod.TOL_REL = orig_tol
    check("C25 GATE tolerance: strict equality flags the 6px near miss", fired)

    # --------------------------------------------------------------- C26 ---
    # GATE: disabling the evidence guard flags our own quoted rule
    orig_ev = mod.EVIDENCE_LINE_RX
    mod.EVIDENCE_LINE_RX = re.compile(r"(?!x)x")
    try:
        f3, _n3, _c3 = audit(mod, "- `saita`: `.band` padding 99px 0\n",
                             ".band{padding:7em 0}")
        fired = len(f3) == 1
    finally:
        mod.EVIDENCE_LINE_RX = orig_ev
    check("C26 GATE evidence guard: disabling it flags the fix text", fired)

    # --------------------------------------------------------------- C27 ---
    # compound selectors resolve through the class token (cakeshop's case)
    v = mod.variants_for("footer-border",
                         mod.pad_rules(sheet(".footer-bottom-area .footer-border{padding:40px 0}")))
    check("C27 a compound selector resolves by its class token", len(v) == 1, f"{v}")

    # --------------------------------------------------------------- C28 ---
    flags, _n, _c = audit(mod, "- `.band` has no padding\n", ".band{padding:100px 0}")
    check("C28 a false 'no padding' claim on a padded band FLAGS",
          len(flags) == 1 and flags[0][0] == "SPACING-WRONG", f"{flags}")

    # --------------------------------------------------------------- C29 ---
    txt = "| band | padding 100px 0 | no selector cell |\n"
    cl = mod.spacing_claims(txt, {"band"})
    check("C29 an unbound bare value produces no claim", cl == [], f"got {cl}")

    # --------------------------------------------------------------- C30 ---
    txt = "- `.band` padding 60px 0 (padding / margin varies with the cards inside)\n"
    cl = mod.spacing_claims(txt, {"band"})
    check("C30 a hedged row is guarded",
          len(cl) == 1 and cl[0][5] == "SPACING-HEDGE", f"got {cl}")

    # --------------------------------------------------------------- C31 ---
    # GATE: kill ZERO_RX -> the "no padding" claim disappears entirely
    orig_zero = mod.ZERO_RX
    mod.ZERO_RX = re.compile(r"(?!x)x")
    try:
        cl = mod.spacing_claims("- `.band` has no padding\n", {"band"})
        gone = cl == []
    finally:
        mod.ZERO_RX = orig_zero
    check("C31 GATE zero-claim extractor: disabling it loses the claim", gone)

    # --------------------------------------------------------------- C32 ---
    # GATE: drop the `_collapse` marker -> the collapsed edge becomes a flag
    orig = mod.spacing_claims

    def no_collapse(txt, classes):
        out = []
        for c in orig(txt, classes):
            sides = {k: v for k, v in (c[2] or {}).items() if k != "_collapse"}
            out.append((c[0], c[1], sides, c[3], c[4], c[5]))
        return out

    mod.spacing_claims = no_collapse
    try:
        f4, _n4, _c4 = audit(
            mod, "- `.footer-border` (padding 40px 0)\n",
            ".footer-border{padding-top:39px;padding-bottom:1px}")
        fired = len(f4) == 1
    finally:
        mod.spacing_claims = orig
    check("C32 GATE collapse guard: without it the collapsed edge flags", fired)

    # --------------------------------------------------------------- C33 ---
    flags, notes, n = audit(mod, "- no padding claim in this spec at all\n", ".band{padding:9em 0}")
    check("C33 a spec without a claim produces nothing", flags == [] and n == 0,
          f"{flags} {n}")

    # --------------------------------------------------------------- C34 ---
    # the same selector claimed twice with different values: one flag minimum
    txt = ("- `.band` padding 100px 0\n- `.band` padding 40px 0\n")
    flags, _n, _c = audit(mod, txt, ".band{padding:100px 0}")
    check("C34 one of two contradicting claims on one selector flags",
          len(flags) == 1, f"{flags}")

    # --------------------------------------------------------------- C35 ---
    # compound subject: `div.section.section-3` with the rule on the SECOND
    # token (momentum) is clean, because any named class may own the value
    flags, notes, _c = audit(mod, "- Services `div.section.section-3` "
                                  "(`padding-bottom: 0`)\n",
                             ".section{padding:7em 0}.section-3{padding-bottom:0}")
    check("C35 a compound selector resolves through ANY of its classes",
          flags == [], f"{flags} {notes}")

    # --------------------------------------------------------------- C36 ---
    # same-line refinement: `padding: 35px`, `padding-top: 0` is ONE state
    flags, notes, _c = audit(mod, "- **Text block (`.work .text`):** `padding: 35px`,"
                                  " `padding-top: 0`\n",
                             ".work .text{padding:0 0 35px}")
    check("C36 a same-line padding-top override merges into the shorthand",
          flags == [], f"{flags} {notes}")

    # --------------------------------------------------------------- C37 ---
    # GATE: without the merge the two declarations are adjudicated separately
    orig_merge = mod.merge_partials
    mod.merge_partials = lambda claims: claims
    try:
        f5, _n5, _c5 = audit(mod, "- **Text block (`.work .text`):** `padding: 35px`,"
                                  " `padding-top: 0`\n",
                             ".work .text{padding:0 0 35px}")
        fired = len(f5) >= 1
    finally:
        mod.merge_partials = orig_merge
    check("C37 GATE merge pass: without it the shorthand is re-flagged", fired)

    # --------------------------------------------------------------- C38 ---
    # a value whose subject sits 120 chars earlier in the same cell is unbound
    txt = ("| Blog cards | `.list-team` overlay (bottom, rgba(255,255,255,0.8), "
           "radius 4px: 34px round avatar + author 14px 700 + heart); "
           "text padding 30px |")
    cl = mod.spacing_claims(txt, {"list-team"})
    check("C38 a far-away selector in the same table cell is not the owner",
          cl == [], f"got {cl}")


    # --------------------------------------------------------------- C39 ---
    # "42px top / 100px bottom" is a two-edge statement, not a shorthand
    flags, notes, _c = audit(mod, "- `.why` (padding 42px top / 100px bottom)\n",
                             ".why{padding:42px 0 100px}")
    check("C39 'X top / Y bottom' reads both edges", flags == [], f"{flags} {notes}")

    # --------------------------------------------------------------- C40 ---
    flags, notes, _c = audit(mod, "- `.box` padding `5rem` sides\n",
                             ".box{padding:50px 80px}")
    check("C40 a 'sides' claim is horizontal, guarded",
          flags == [] and any(k == "SPACING-HORIZONTAL" for k, _m in notes),
          f"{flags} {notes}")

    # --------------------------------------------------------------- C41 ---
    flags, notes, _c = audit(mod, "- `.panel` `padding:0 !important` below 992 px\n",
                             ".panel{padding:24px}")
    check("C41 'below 992 px' is a breakpoint, guarded",
          flags == [] and any(k == "SPACING-RESPONSIVE" for k, _m in notes),
          f"{flags} {notes}")


    # --------------------------------------------------------------- C42 ---
    # a quoted rule whose class the sheet does not define must not borrow the
    # next class on the line (skyport's invented `.brand-area{padding-top:40px}`)
    txt = ("| logo strip | `.brand-area{padding-top:40px}` + "
           "`.logo-wrap{padding:60px 65px}` |")
    cl = mod.spacing_claims(txt, {"logo-wrap"})
    ok = len(cl) == 1 and cl[0][1] == ["logo-wrap"] and cl[0][2]["top"] == (60.0, "px")
    check("C42 an unknown selector inside braces does not steal the next class", ok,
          f"got {cl}")

    # --------------------------------------------------------------- C43 ---
    # a descendant rule paints the DESCENDANT, not the named ancestor
    v = mod.variants_for("container-fluid",
                         mod.pad_rules(sheet(".room_part .container-fluid .room_1 "
                                             ".room_text_1{padding:40px}")))
    check("C43 a descendant rule is not the named class' own padding", v == [], f"{v}")

    # --------------------------------------------------------------- C44 ---
    # ... but a compound subject still resolves (`.site-section.pt-5`)
    v = mod.variants_for("site-section",
                         mod.pad_rules(sheet("section.site-section.pt-5{padding:7em 0}")))
    check("C44 a compound subject still resolves", len(v) == 1, f"{v}")


    # --------------------------------------------------------------- C45 ---
    # "padding 7em top 0" states the TOP edge only (repose's footer)
    flags, notes, _c = audit(mod, "- `footer.ftco-footer` (padding 7em top 0)\n",
                             ".ftco-footer{padding:7em 0 0}")
    check("C45 'X top' is a top-only claim", flags == [], f"{flags} {notes}")

    # --------------------------------------------------------------- C46 ---
    flags, notes, _c = audit(mod, "- Day tabs: `.days li a` bg `#eee` padding 10px\n",
                             ".days{padding:0}.days li a{padding:10px}")
    check("C46 a descendant selector is not the named class' padding",
          flags == [], f"{flags} {notes}")

    # --------------------------------------------------------------- C47 ---
    # GATE: keep the claim on the ancestor only -> it would be adjudicated
    flags, notes, _c = audit(mod, "- `.days` padding 10px\n",
                             ".days{padding:0}")
    check("C47 GATE descendant guard: the class' OWN claim still flags",
          len(flags) == 1, f"{flags} {notes}")

    # --------------------------------------------------------------- C48 ---
    # a closed parenthetical followed by another band's numbers
    txt = ("- **Spacing**: Section padding 100px top/bottom (`.spad`), hero "
           "170px top/bottom, counter 200px top / 70px bottom\n")
    flags, notes, _c = audit(mod, txt, ".spad{padding:100px 0}")
    check("C48 a following band's numbers are not the closed subject's",
          flags == [], f"{flags} {notes}")

    # --------------------------------------------------------------- C49 ---
    # GATE: without the window guard the counter's pair is read as `.spad`'s
    orig_win = mod.window_blocks
    mod.window_blocks = lambda w: False
    try:
        txt2 = ("- Section padding 100px top/bottom (`.spad`), hero "
                "170px top/bottom, counter 200px top / 70px bottom\n")
        f6, _n6, _c6 = audit(mod, txt2, ".spad{padding:100px 0}")
        fired = len(f6) >= 1
    finally:
        mod.window_blocks = orig_win
    check("C49 GATE band-window guard: disabling it mis-binds the next band", fired)

    # --------------------------------------------------------------- C50 ---
    # a 4-value shorthand WRAPPED across a line break is ONE claim (tripquest)
    txt = ("   `.single-testimonial { background-color: #fff; padding: 25px 30px\n"
           "    12px 30px }`; `.thumb { margin-right: 30px }` (avatar left)\n")
    flags, notes, ncl = audit(mod, txt, ".single-testimonial{padding:25px 30px 12px 30px}")
    ok = (flags == [] and ncl == 1)
    check("C50 a shorthand value wrapped at a line break joins its continuation",
          ok, f"{flags} {notes} claims={ncl}")

    # --------------------------------------------------------------- C51 ---
    # GATE: without the join the same claim truncates to two values and flags
    orig_join = mod.join_value_continuation
    orig_nlj = mod.next_line_value_join
    mod.join_value_continuation = lambda lines, idx, s, classes: s
    mod.next_line_value_join = lambda lines, idx, s: s   # BOTH halves of the join
    try:
        f7, _n7, _c7 = audit(mod, txt,
                             ".single-testimonial{padding:25px 30px 12px 30px}")
        fired2 = len(f7) >= 1
    finally:
        mod.join_value_continuation = orig_join
        mod.next_line_value_join = orig_nlj
    check("C51 GATE continuation join: without it the wrapped shorthand flags",
          fired2)

    # --------------------------------------------------------------- C59 ---
    # GATE: the SECOND half of the join — a declaration whose value runs past
    # the end of the line (`padding: 95px 100px` / `60px; ...`). Disabling only
    # this one must flag the claim (riviera, measured 2026-10-23).
    txt59 = ("- `.facilities-item` (`height: 796px; padding: 95px 100px\n"
             "60px; margin: 0 -15px`)\n")
    orig_nlj2 = mod.next_line_value_join
    mod.next_line_value_join = lambda lines, idx, s: s
    try:
        f59, _n59, _c59 = audit(mod, txt59,
                                ".facilities-item{padding:95px 100px 60px}")
        fired59 = len(f59) >= 1
    finally:
        mod.next_line_value_join = orig_nlj2
    check("C59 GATE next-line value join: without it a wrapped 3-value shorthand flags",
          fired59)

    # --------------------------------------------------------------- C52 ---
    # a following NUMBERED SECTION is not a value continuation
    txt = ("- `.hero` padding 60px 0\n"
           "  12. Footer `footer.site-footer` (bg `#333`, padding 4em 0)\n")
    cl = mod.spacing_claims(txt, {"hero", "site-footer"})
    hero = [c for c in cl if c[1] == ["hero"]]
    ok2 = (hero and hero[0][2].get("top") == (60.0, "px")
           and hero[0][2].get("bottom") == (60.0, "px"))
    check("C52 a numbered next line is not joined as a value continuation",
          bool(ok2), f"got {cl}")

    # --------------------------------------------------------------- C53 ---
    # a claim scoped to ANOTHER PAGE of the theme's ladder (aisle) is a note,
    # not a flag — and the marker may sit on the WRAPPED-sentence line above
    txt = ("- **And** the per-page ladder deviations are either honoured (`h1 5.5em`,\n"
           "  `h2 3em`, `.section .heading { padding-bottom: 30px }`,\n"
           "  `header { top: 15px }` with its hairline) or normalised\n")
    flags, notes, ncl = audit(mod, txt, ".section .heading{padding:40px}")
    ok3 = (flags == [] and any(k == "SPACING-PAGE-SCOPE" for k, _m in notes))
    check("C53 a per-page-ladder claim is scoped out of the landing-sheet check",
          ok3, f"{flags} {notes} claims={ncl}")

    # --------------------------------------------------------------- C54 ---
    # GATE: drop the page-scope marker -> the same claim flags
    txt2 = ("- **And** the ladder deviations are either honoured (`h1 5.5em`,\n"
            "  `h2 3em`, `.section .heading { padding-bottom: 30px }`,\n"
            "  `header { top: 15px }` with its hairline) or normalised\n")
    f8, _n8, _c8 = audit(mod, txt2, ".section .heading{padding:40px}")
    check("C54 GATE page-scope guard: without the marker the claim flags",
          len(f8) == 1, f"{f8}")

    # --------------------------------------------------------------- C55 ---
    # a spec carrying a documented REFERENCE-DRIFT note is never adjudicated
    # (industrial: the URL now serves the v3.0.0 kit rebuild)
    txt = ("## Reference drift\n\n"
           "A **reference drift** is recorded for this slug: the preview now serves a\n"
           "different release. `.site-footer` padding 7em 0, `.section` padding 7em 0\n")
    flags, notes, ncl = audit(mod, txt, ".site-footer{padding:80px 0 25px}")
    ok4 = (flags == [] and any(k == "SPACING-DRIFT" for k, _m in notes))
    check("C55 a documented reference drift suppresses adjudication",
          ok4, f"{flags} {notes}")

    # --------------------------------------------------------------- C56 ---
    # GATE: without the drift sentence the same claim flags
    txt2 = ("## Notes\n\n`.site-footer` padding 7em 0, `.section` padding 7em 0\n")
    f9, _n9, _c9 = audit(mod, txt2, ".site-footer{padding:80px 0 25px}")
    check("C56 GATE drift guard: without the note the claim flags",
          len(f9) >= 1, f"{f9}")

    # --------------------------------------------------------------- C57 ---
    # a PAIRED ladder: base value + a value at a breakpoint. Before 2026-10-22f
    # every such claim was dropped by the RESPONSIVE guard and the DIRECTION of
    # the ladder was read by no axis.
    LAD_TXT = "- **Spacing:** `.site-section` padding 3em 0 (7em 0 \u2265768px)\n"
    LAD_CSS = (".site-section{padding:3em 0}"
               "@media(min-width:768px){.site-section{padding:7em 0}}")
    flags, notes, ncl = audit(mod, LAD_TXT, LAD_CSS)
    check("C57 a correct grow-up ladder is adjudicated and not flagged",
          flags == [] and ncl == 1, f"{flags} {notes} n={ncl}")

    # --------------------------------------------------------------- C58 ---
    # the steeple class: the claim swaps the base and the desktop value
    inv_css = (".site-section{padding:7em 0}"
               "@media(max-width:991px){.site-section{padding:5.3em 0}}"
               "@media(max-width:767px){.site-section{padding:3.4em 0}}")
    flags, notes, ncl = audit(mod, LAD_TXT, inv_css)
    check("C58 an inverted ladder is LADDER-INVERTED",
          len(flags) == 1 and flags[0][0] == "LADDER-INVERTED", f"{flags} {notes}")

    # --------------------------------------------------------------- C59 ---
    # mutation negative: change ONLY the sheet's breakpoint value -> the flag
    mut_css = (".site-section{padding:3em 0}"
               "@media(min-width:768px){.site-section{padding:9em 0}}")
    flags, notes, ncl = audit(mod, LAD_TXT, mut_css)
    check("C59 mutating the sheet's breakpoint value re-fires LADDER-WRONG",
          len(flags) == 1 and flags[0][0] == "LADDER-WRONG", f"{flags} {notes}")

    # --------------------------------------------------------------- C60 ---
    # the value exists, but at a DIFFERENT breakpoint: a note, not a flag
    bp_css = (".section{padding:100px 0}"
              "@media(max-width:1199px){.section{padding:70px 0}}")
    flags, notes, ncl = audit(mod, "- `.section` padding 100px 0 (70px \u2264991px)\n",
                              bp_css)
    check("C60 a mis-stated breakpoint is LADDER-BREAKPOINT, not a flag",
          flags == [] and any(k == "LADDER-BREAKPOINT" for k, _m in notes),
          f"{flags} {notes}")

    # --------------------------------------------------------------- C61 ---
    # no @media rule for the selector at all -> nothing to adjudicate
    flags, notes, ncl = audit(mod, "- `.band` padding 60px 0 (40px \u2264768px)\n",
                              ".band{padding:60px 0}")
    check("C61 a selector with no breakpoint rule is LADDER-NO-MEDIA",
          flags == [] and any(k == "LADDER-NO-MEDIA" for k, _m in notes),
          f"{flags} {notes}")

    # --------------------------------------------------------------- C62 ---
    # a ONE-token ladder value is the TOP edge (journee: 180/25 -> 70 while the
    # bottom 25px never moves) — expanding it to all sides is a false positive
    jt = "- **Footer (`.footer_part`):** `padding: 180px 0 25px` (70px \u2264991px)\n"
    jc = (".footer_part{padding:180px 0 25px}"
          "@media(max-width:991px){.footer_part{padding:70px 0 25px}}")
    flags, notes, ncl = audit(mod, jt, jc)
    check("C62 a single-token ladder value reads as the TOP edge",
          flags == [] and ncl == 1, f"{flags} {notes} n={ncl}")

    # --------------------------------------------------------------- C63 ---
    # GATE: read the same single token as a full shorthand -> it flags
    orig_sides = mod._sides_from_raw
    mod._sides_from_raw = lambda raw, single_top=False: orig_sides(raw, False)
    try:
        f10, _n10, _c10 = audit(mod, jt, jc)
        fired = len(f10) >= 1
    finally:
        mod._sides_from_raw = orig_sides
    check("C63 GATE top-only ladder value: all-sides reading flags the truth", fired)

    # --------------------------------------------------------------- C64 ---
    # a DESCENDANT's rule is not the owner's (ivory: `.single-page
    # .blockquote-text{padding-left:114px}`) -> base unverifiable, note only
    d_txt = "- `.card` padding 160px top (0 \u2265992px)\n"
    d_css = (".card{background:#fff}.card .inner{padding:20px 0}"
             "@media(min-width:992px){.card{padding-top:0}}")
    flags, notes, ncl = audit(mod, d_txt, d_css)
    check("C64 a descendant rule is not the ladder owner's base",
          flags == [] and any(k == "LADDER-NO-BASE" for k, _m in notes),
          f"{flags} {notes}")

    # --------------------------------------------------------------- C65 ---
    # GATE: accept descendant rules as the subject -> the claim flags
    orig_keep_rx = mod.ladder_variants

    def leaky(owner, base_map, media_map):
        rx = re.compile(r"\." + re.escape(owner) + r"(?![\w-])")
        base = [v for s, vs in base_map.items() if rx.search(s) for v in vs]
        media = [t for s, vs in media_map.items() if rx.search(s) for t in vs]
        return base, media

    mod.ladder_variants = leaky
    try:
        f11, _n11, _c11 = audit(mod, d_txt, d_css)
        fired2 = len(f11) >= 1
    finally:
        mod.ladder_variants = orig_keep_rx
    check("C65 GATE subject guard: a descendant base would flag the claim", fired2)

    # --------------------------------------------------------------- C66 ---
    # the "base / ladder" slash idiom (apex: `padding 4em 0 / 8em ≥768px`)
    s_txt = ("11. Footer (`footer.site-footer`, bg #333333, padding 4em 0 / "
             "8em \u2265768px):\n")
    s_css = (".site-footer{padding:4em 0}"
             "@media(min-width:768px){.site-footer{padding:8em 0}}")
    flags, notes, ncl = audit(mod, s_txt, s_css)
    check("C66 the 'base / ladder' slash idiom is read as a pair",
          flags == [] and ncl == 1, f"{flags} {notes} n={ncl}")

    # --------------------------------------------------------------- C67 ---
    # breakpoint-then-value ("(`≤576px 50px`)") may belong to ANY property in
    # the cell: counted, never adjudicated
    p_txt = "| headline | Poppins 70px (\u2264576px 50px), 45px bottom padding |\n"
    flags, notes, ncl = audit(mod, p_txt, ".headline{padding:45px 0}")
    check("C67 a breakpoint-then-value statement is counted, not adjudicated",
          flags == [] and any(k == "LADDER-POSTFIX" for k, _m in notes),
          f"{flags} {notes}")

    # --------------------------------------------------------------- C68 ---
    # GATE: drop the media prelude (the pre-2026-10-22f parse_rules) -> the
    # correct ladder is no longer adjudicable (NO-MEDIA), proving the axis
    # depends on carrying `@media` through the scanner
    orig_parse = mod.parse_rules
    mod.parse_rules = lambda css, media=(None, None): [
        (s, b, (None, None)) for s, b, _m in orig_parse(css)]
    try:
        f12, n12, _c12 = audit(mod, LAD_TXT, LAD_CSS)
        silent = (f12 == [] and any(k == "LADDER-NO-MEDIA" for k, _m in n12))
    finally:
        mod.parse_rules = orig_parse
    check("C68 GATE media prelude: without it the ladder is unadjudicable", silent)

    # --------------------------------------------------------------- C69 ---
    # a class CHAIN wrapped across a line break keeps its subject (cargomate:
    # "`div.banner_content.d-flex" / "flex-md-row.flex-column` (padding 194px 0")
    w_txt = ("  3. `div.banner_inner` \u2192 `div.banner_content.d-flex\n"
             "flex-md-row.flex-column` (padding 194px 0; 100px \u2264991px):\n")
    w_css = (".banner_content{padding:194px 0}"
             "@media(max-width:991px){.banner_content{padding:100px 0}}")
    flags, notes, ncl = audit(mod, w_txt, w_css)
    cl = mod.ladder_claims(w_txt, {"banner_content", "d-flex", "flex-column"})
    has_owner = bool(cl) and "banner_content" in cl[0][1]
    check("C69 a wrapped class chain keeps its subject and passes",
          flags == [] and ncl == 1 and has_owner, f"{flags} {notes} {cl}")

    # --------------------------------------------------------------- C70 ---
    # GATE: the same claim WITHOUT the previous line loses the subject entirely
    f13, n13, c13 = audit(mod, "flex-md-row.flex-column` (padding 194px 0; "
                               "100px \u2264991px):\n", w_css)
    check("C70 GATE wrapped-chain guard: without the line above, no subject",
          c13 == 0, f"{f13} {n13} claims={c13}")

    # --------------------------------------------------------------- C71 ---
    # a compound selector's OTHER component can own the rhythm
    # (`.categories-section.spad` -> `.categories-section{padding-bottom:88px}`
    # while `.spad` is 100/100; hoodly was flagged for its own correct answer)
    comp_txt = "- `section.categories-section.spad` (padding-top 0, padding-bottom 88px)\n"
    f71, n71, _c71 = audit(mod, comp_txt,
                           ".spad{padding:100px 0}"
                           ".categories-section{padding-top:0;padding-bottom:88px}")
    check("C71 a compound selector binds every component as an owner",
          f71 == [], f"{f71} {n71}")

    # --------------------------------------------------------------- C72 ---
    # GATE: keep only the FIRST component -> the same claim flags
    orig_chain = mod.re.finditer
    f72, _n72, _c72 = audit(mod, "- `.spad` (padding-bottom 88px)\n",
                            ".spad{padding:100px 0}")
    check("C72 GATE compound-owner guard: a single wrong owner flags", len(f72) == 1,
          f"{f72}")

    # --------------------------------------------------------------- C73 ---
    # `a/b` reads as top/bottom AND as base/breakpoint: only a claim whose BOTH
    # readings disagree is wrong (miniblog `.site-footer` = 4em 0, 5em 0 @media)
    pair_txt = "- `.site-footer` padding 4em / 5em.\n"
    f73, n73, _c73 = audit(mod, pair_txt,
                           ".site-footer{padding:4em 0}"
                           "@media (max-width:768px){.site-footer{padding:5em 0}}")
    check("C73 a `/` pair reads as top/bottom OR base/breakpoint",
          f73 == [], f"{f73} {n73}")

    # --------------------------------------------------------------- C74 ---
    # GATE: a pair whose BOTH readings are absent still flags
    f74, _n74, _c74 = audit(mod, pair_txt, ".site-footer{padding:2em 0}")
    check("C74 GATE pair readings: no reading matches -> flag", len(f74) == 1,
          f"{f74}")

    # --------------------------------------------------------------- C75 ---
    # a bare NOUN in front of the value is the subject, not the next cell's class
    # ("form padding `0 110px 0 85px`; `.main` padding 185px 0" — incant)
    noun_txt = "| `--card` | 990px | form padding `0 110px 0 85px`; `.main` padding 185px 0 |\n"
    f75, n75, _c75 = audit(mod, noun_txt, ".main{padding:185px 0}")
    check("C75 a bare noun before the value is not the next class' padding",
          f75 == [], f"{f75} {n75}")

    # --------------------------------------------------------------- C76 ---
    # a measured-evidence block is the prep's audit trail, not a claim
    ev_txt = ("<!-- reference-revalue:start -->\n"
              ".spad{padding:100px 0} is the real value\n"
              "<!-- reference-revalue:end -->\n")
    f76, _n76, c76 = audit(mod, ev_txt, ".spad{padding:100px 0}")
    check("C76 a measured-evidence block yields no claim", c76 == 0, f"{f76} {c76}")

    print(f"\n{len(PASSED)}/{len(PASSED) + len(FAILED)} controls pass")
    if FAILED:
        print("FAILED: " + ", ".join(FAILED))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
