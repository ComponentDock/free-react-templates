#!/usr/bin/env python3
"""verify-shape-tokens-controls.py — control harness for the SHAPE/RADIUS axis.

Mutation-based: every positive is built by MUTATING a fixture (writing the
wording the corpus actually uses, then stripping it), so the controls keep
failing if the extractor regresses, and keep passing after the axis' own fix.
GATE controls disable one guard and prove the payload then fires — that is the
discipline that keeps an axis from silently reading nothing.

Run FIRST, before the sweep:  python3 verify-shape-tokens-controls.py
Exit 0 = all controls pass. Fully offline (synthetic CSS + text fixtures).
"""
import importlib.util
import os
import re
import sys
import time

HERE = os.path.dirname(os.path.abspath(__file__))
TARGET = os.path.join(HERE, "verify-shape-tokens.py")

FAILED = []
PASSED = []


def load(path=None):
    p = path or TARGET
    spec = importlib.util.spec_from_file_location("shape_axis", p)
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


def claims_for(mod, text, sels=None):
    return mod.shape_claims(text, sels if sels is not None else set())


def sheet(map_or_layers):
    if isinstance(map_or_layers, str):
        return [("fixture.css", map_or_layers)]
    return map_or_layers


def audit(mod, spec_txt, css):
    layers = sheet(css)
    return mod.audit_spec(spec_txt, "fixture", layers, "/tmp")


def main():
    mod = load()

    # ---------------------------------------------------------------- C1 ---
    check("C1 module imports and exposes the axis", hasattr(mod, "audit_spec")
          and hasattr(mod, "parse_rules"), "audit_spec/parse_rules missing")

    # ---------------------------------------------------------------- C2 ---
    txt = "- Primary `.cta-btn`: pill-shaped (border-radius 30px), `#f3c623` background\n"
    cl = claims_for(mod, txt, {"cta-btn"})
    check("C2 numeric pill claim extracted", len(cl) == 1
          and any(sh[0] == "pill" and sh[1] == [(30.0, "px")] for sh in cl[0][2])
          and cl[0][1] == ["cta-btn"],
          f"got {cl}")

    # ---------------------------------------------------------------- C3 ---
    txt = "- Subscribe form input: no border-radius, sharp rectangular button\n"
    cl = claims_for(mod, txt)
    check("C3 sharp/'no border-radius' claim extracted", len(cl) == 1
          and cl[0][2][0][0] == "sharp", f"got {cl}")

    # ---------------------------------------------------------------- C4 ---
    # the measured FP: "pill" describing a tab, with "CTA" 30+ chars away
    txt = 'social/price/CTA skewed tabs, BMI "Metric" active pill. Deep navy\n'
    cl = claims_for(mod, txt)
    check("C4 bare 'pill' on a non-button state is not a claim", cl == [], f"got {cl}")

    # ---------------------------------------------------------------- C5 ---
    txt = "- the sibling's buttons are pill-shaped `border-radius: 30px`\n"
    check("C5 SIBLING sentence is skipped", claims_for(mod, txt) == [])

    # ---------------------------------------------------------------- C6 ---
    txt = "- border-radius 30px → 0 on the button (supersedes the earlier note)\n"
    check("C6 DELTA mapping is skipped", claims_for(mod, txt) == [])

    # ---------------------------------------------------------------- C7 ---
    txt = "- `.main-btn`: border-radius 30px on hover the background darkens\n"
    cl = claims_for(mod, txt)
    check("C7 hover claim is guarded, not flagged",
          len(cl) == 1 and cl[0][4] == "SHAPE-HOVER", f"got {cl}")

    # ---------------------------------------------------------------- C8 ---
    txt = "- buttons sampled from the screenshot: border-radius 30px\n"
    cl = claims_for(mod, txt)
    check("C8 approximate/sampled claim is guarded",
          len(cl) == 1 and cl[0][4] == "SHAPE-APPROX", f"got {cl}")

    # ---------------------------------------------------------------- C9 ---
    css = ".btn{border-radius:30px}"
    flags, notes, n = audit(mod, "- CTA buttons are pill-shaped (border-radius 30px)\n", css)
    check("C9 matching numeric claim is clean", flags == [] and n == 1, f"{flags} {notes}")

    # --------------------------------------------------------------- C10 ---
    flags, _n, _c = audit(mod, "- CTA buttons: border-radius 4px\n", ".btn{border-radius:.25rem}")
    check("C10 rem is normalised to px (4px == .25rem)", flags == [], f"{flags}")

    # --------------------------------------------------------------- C11 ---
    flags, _n, _c = audit(mod, "- CTA buttons are pill-shaped\n", ".btn{border-radius:100px}")
    check("C11 qualitative pill matches a 100px rule", flags == [], f"{flags}")

    # --------------------------------------------------------------- C12 ---
    flags, _n, _c = audit(mod, "- CTA buttons (`btn-round`): pill-shaped, border-radius 30px\n",
                          ".btn-round{border-radius:2px}")
    check("C12 named selector disagreeing with the claim FLAGS",
          len(flags) == 1 and flags[0][0] == "SHAPE-WRONG", f"{flags}")

    # --------------------------------------------------------------- C13 ---
    flags, notes, _c = audit(mod, "- CTA `.hero-button` is a pill (border-radius 30px)\n",
                             ".hero-button{background:#000}")
    kinds = [n for n, _m in notes]
    check("C13 styled-but-no-radius selector is a note, not a flag",
          flags == [] and "SHAPE-ABSENT" in kinds, f"{flags} {notes}")

    # --------------------------------------------------------------- C14 ---
    css = ("@media print{.btn{border-radius:99px}}"
           "@media screen and (max-width:991px){.btn{border-radius:30px}}"
           "@supports (display:grid){.btn{border-radius:31px}}"
           "@media screen{.wrap{color:red}}")
    rules = dict(mod.parse_rules(css))
    check("C14 @media print dropped, screen/supports flattened",
          ".btn" in rules and "99px" not in mod.radii_map(sheet(css))[".btn"][0]
          and mod.radii_map(sheet(css))[".btn"][2] == [(31.0, "px")],
          f"rules={list(rules)}")

    # --------------------------------------------------------------- C15 ---
    # the quadratic-scanner regression: 500 @media blocks over a ~200 kB sheet
    big = "".join(f"@media screen and (max-width:{i}px){{.c{i}{{border-radius:{i}px}}}}"
                  for i in range(500))
    big += ".btn{border-radius:30px}" * 2000
    t0 = time.time()
    rules = mod.parse_rules(big)
    dt = time.time() - t0
    check(f"C15 500 @media blocks parse in {dt:.2f}s (< 2s)",
          dt < 2.0 and len(rules) >= 500, f"{dt:.2f}s, {len(rules)} rules")

    # --------------------------------------------------------------- C16 ---
    check("C16 50% radius reads as pill",
          mod.shape_class([(50.0, "%")]) == "pill"
          and mod.shape_class([(0.0, "px")]) == "sharp"
          and mod.shape_class([(4.0, "px")]) == "slight"
          and mod.shape_class([(12.0, "px")]) == "round")

    # --------------------------------------------------------------- C17 ---
    # GATE: widen the proximity window to the whole line -> the "active pill"
    # sentence becomes a claim again, proving C4 is the guard doing the work
    orig_nb = mod.NON_BUTTON_STATE_RX
    orig_cue = mod.cue_near
    mod.NON_BUTTON_STATE_RX = mod.re.compile(r"(?!x)x")   # disable the state filter
    mod.cue_near = lambda line, s, e, window=40: True
    try:
        cl = claims_for(mod, 'social/price/CTA skewed tabs, BMI "Metric" active pill. Deep navy\n')
        fired = len(cl) >= 1
    finally:
        mod.NON_BUTTON_STATE_RX = orig_nb
        mod.cue_near = orig_cue
    check("C17 GATE state/proximity guards: disabling them re-admits the FP", fired)

    # --------------------------------------------------------------- C18 ---
    # GATE: make parse_rules keep print blocks -> the print radius reappears
    orig_parse = mod.parse_rules
    def keep_print(css):
        return [(s, b) for s, b in orig_parse(re.sub(
            r"@media print\{([^{}]*\{[^{}]*\})\}", r"\1", css))] if s else []
    try:
        mod.parse_rules = lambda css: [(s, b) for s, b in
                                       re.findall(r"([^{}]+)\{([^{}]*)\}", css)] or []
        leaked = mod.radii_map(sheet("@media print{.btn{border-radius:99px}}"))
        fired = ".btn" in leaked and "99px" in leaked[".btn"][0]
    finally:
        mod.parse_rules = orig_parse
    check("C18 GATE print filter: a naive parser leaks the print radius", fired)

    # --------------------------------------------------------------- C19 ---
    # last rule wins across sheets (theme sheet overrides the framework one)
    css_a = ".btn{border-radius:.25rem}"
    css_b = ".btn{border-radius:0}"
    rm = mod.radii_map([("bootstrap.css", css_a), ("main_styles.css", css_b)])
    check("C19 later stylesheet wins the cascade", rm[".btn"][2] == [(0.0, "px")],
          f"{rm.get('.btn')}")

    # --------------------------------------------------------------- C20 ---
    # generic claim that matches NO button rule is a conflict
    flags, _n, _c = audit(mod, "- CTA buttons are pill-shaped (border-radius 30px)\n",
                          ".btn{border-radius:0}button{border-radius:2px}")
    check("C20 generic claim with no matching rule FLAGS",
          len(flags) == 1 and flags[0][0] in ("SHAPE-CONFLICT", "SHAPE-WRONG"), f"{flags}")

    # --------------------------------------------------------------- C21 ---
    # non-button selector with a radius must not become the button basis
    rm = mod.radii_map(sheet(".card{border-radius:30px}.something{color:red}"))
    check("C21 non-button selectors are excluded from the button pool",
          mod.button_rules(rm) == {}, f"{list(mod.button_rules(rm))}")

    # --------------------------------------------------------------- C22 ---
    # `main_btn` / `.button` style names count as buttons (healio's case)
    rm = mod.radii_map(sheet(".main_btn{border-radius:0}.info_form_button{border-radius:0}"))
    check("C22 btn-suffixed and button-named classes are button rules",
          len(mod.button_rules(rm)) == 2, f"{list(mod.button_rules(rm))}")

    # --------------------------------------------------------------- C23 ---
    flags, notes, n = audit(mod, "- no button-shape sentence here\n", ".btn{border-radius:4px}")
    check("C23 a spec without a claim produces nothing", flags == [] and n == 0)

    # --------------------------------------------------------------- C24 ---
    flags, notes, n = audit(mod, "- three square outlined social buttons top-right\n",
                             "button{border-radius:0}.btn{border-radius:25px}")
    check("C24 social-button shape is a note, not a flag",
          flags == [] and any(k == "GENERIC-UNSCOPED" for k, _m in notes), f"{flags} {notes}")

    # --------------------------------------------------------------- C25 ---
    tut = ("- Primary CTA is a pill (border-radius 30px)\n")
    css_tw = (".rounded-full{border-radius:2147483647px}.rounded-lg{border-radius:.5rem}"
              ".btn{border-radius:4px}.x{color:red}")
    flags, notes, _n = audit(mod, tut, css_tw)
    check("C25 utility build downgrades a generic claim",
          flags == [] and any(k == "UTILITY-BUILD" for k, _m in notes), f"{flags} {notes}")

    # --------------------------------------------------------------- C26 ---
    flags, notes, _n = audit(mod, "- buttons are pill-shaped (border-radius 30px)\n",
                             ".btn{border-radius:4px}")
    check("C26 generic claim without a PRIMARY subject is a note",
          flags == [] and any(k == "GENERIC-UNSCOPED" for k, _m in notes), f"{flags} {notes}")

    # --------------------------------------------------------------- C27 ---
    # GATE: drop the PRIMARY-subject requirement -> the same line now flags
    orig_primary = mod.PRIMARY_SUBJECT_RX
    mod.PRIMARY_SUBJECT_RX = mod.re.compile(r"(?i).")
    try:
        f2, _n2, _c2 = audit(mod, "- buttons are pill-shaped (border-radius 30px)\n",
                             ".btn{border-radius:4px}")
        fired = len(f2) == 1
    finally:
        mod.PRIMARY_SUBJECT_RX = orig_primary
    check("C27 GATE primary-subject guard: disabling it flags the generic line", fired)

    # --------------------------------------------------------------- C28 ---
    flags, notes, _n = audit(mod, "- Primary CTA: pill-shaped\n", ".btn{border-radius:20px}")
    check("C28 20px reads as a pill (visual tolerance)", flags == [], f"{flags} {notes}")

    # --------------------------------------------------------------- C29 ---
    txt = "| border-radius | 20px | `.primary-btn` — pill-shaped |\n"
    cl = claims_for(mod, txt, {"primary-btn"})
    ok = bool(cl) and any(sh[1] == [(20.0, "px")] for sh in cl[0][2])
    check("C29 a markdown table cell yields the numeric radius", ok, f"got {cl}")

    # --------------------------------------------------------------- C30 ---
    # GATE: restore strict class equality -> the 20px pill case flags again
    orig_pill = mod.PILL_MIN
    mod.PILL_MIN = 1e9
    try:
        f3, _n3, _c3 = audit(mod, "- Primary CTA: pill-shaped\n", ".btn{border-radius:20px}")
        fired = len(f3) == 1
    finally:
        mod.PILL_MIN = orig_pill
    check("C30 GATE visual tolerance: strict equality re-flags the 20px pill", fired)

    # --------------------------------------------------------------- C31 ---
    ev = "- `saita`: `.btn{border-radius:4px}` — the hero CTA is a 4 px rounding.\n"
    flags, notes, n = audit(mod, ev, ".btn{border-radius:4px}")
    check("C31 the fix's own evidence line is not a claim", flags == [] and n == 0,
          f"{flags} {n}")

    # --------------------------------------------------------------- C32 ---
    hedged = "| button-radius   | Rounded / pill shape   | `.submit` class, green bg |\n"
    flags, notes, n = audit(mod, hedged, ".btn{border-radius:.25rem}")
    check("C32 a hedged 'rounded / pill' row is not adjudicated", flags == [], f"{flags}")

    # --------------------------------------------------------------- C33 ---
    field = 'bottom border, radius 0, focus `#ba9dea`); "Subscribe" `btn-black`\n'
    flags, notes, n = audit(mod, field, ".btn{border-radius:30px}.btn-black{border-radius:30px}")
    check("C33 a FIELD state is not bound to a later button class", flags == [], f"{flags}")

    # --------------------------------------------------------------- C34 ---
    # GATE: disable the evidence guard -> our own fix text becomes a flag
    ev_bad = "- `saita`: `.btn{border-radius:4px}` — quoted from the live sheet.\n"
    orig_ev = mod.EVIDENCE_LINE_RX
    mod.EVIDENCE_LINE_RX = mod.re.compile(r"(?!x)x")
    try:
        f4, _n4, _c4 = audit(mod, ev_bad, ".btn{border-radius:30px}")
        fired = len(f4) >= 1
    finally:
        mod.EVIDENCE_LINE_RX = orig_ev
    check("C34 GATE evidence guard: disabling it flags the fix text", fired)

    # --------------------------------------------------------------- C35 ---
    # a `.submit` control is a BUTTON for the generic pool (adieu/footer-glow,
    # bft/bootstrap-footer-16: a 40px pill submit next to Bootstrap's
    # `button{border-radius:0}` reset — the reset used to decide the claim)
    sub_txt = "- right has a white pill form with a dark pill submit button\n"
    sub_css = (".subscribe-form{border-radius:40px}"
               ".subscribe-form .submit{border-radius:40px}"
               "button{border-radius:0}")
    f35, n35, _c35 = audit(mod, sub_txt, sub_css)
    check("C35 a `.submit` control joins the generic button pool",
          f35 == [], f"{f35} {n35}")

    # --------------------------------------------------------------- C36 ---
    # GATE: drop `.submit` from the pool -> the same claim flags on `button{0}`
    orig_btn_rx = mod.BTN_SEL_RX
    mod.BTN_SEL_RX = mod.re.compile(r"(?i)(?:^|[\s,>+~(])(?:button\b)"
                                    r"|\.[\w-]*btn[\w-]*")
    try:
        f36, _n36, _c36 = audit(mod, sub_txt, sub_css)
        fired36 = len(f36) >= 1
    finally:
        mod.BTN_SEL_RX = orig_btn_rx
    check("C36 GATE `.submit` pool: without it the pill claim flags sharp", fired36)

    # --------------------------------------------------------------- C37 ---
    # a NEGATED cue names something else ("card, radius 6px, NO CTA column":
    # wingly was flagged for its own 6px card radius)
    neg_txt = "- card (`rgba(0,0,0,0.7)`, radius 6px, NO CTA column)\n"
    f37, n37, _c37 = audit(mod, neg_txt, ".booking-form{border-radius:6px}")
    check("C37 a negated CTA cue is not a button claim",
          f37 == [], f"{f37} {n37}")

    # --------------------------------------------------------------- C38 ---
    # a REBUILT kit demo is DRIFT, not a prep error (cozastore 3.0.3 pill ->
    # sharp under `?v=3.0.3`)
    drift_css = [("https://preview.colorlib.com/theme/x/css/style.min.css?v=3.0.3",
                  ".btn-shop{border-radius:4px}")]
    f38, n38, _c38 = mod.audit_spec("- hero periwinkle `SHOP NOW` pill button.\n",
                                    "fixture", drift_css, "/tmp", True)
    check("C38 a rebuilt kit demo is SHAPE-DRIFT, never a flag",
          f38 == [] and any(k == "SHAPE-DRIFT" for k, _m in n38), f"{f38} {n38}")

    # --------------------------------------------------------------- C39 ---
    # an evidence block / a census sentence is not a design claim
    ev_block = ("<!-- reference-revalue:start -->\n"
                ".btn{border-radius:.25rem} are the only radii in the set\n"
                "<!-- reference-revalue:end -->\n")
    f39, _n39, c39 = audit(mod, ev_block, ".btn{border-radius:0}")
    check("C39 a measured-evidence block yields no claim", c39 == 0, f"{f39} {c39}")

    print(f"\n{len(PASSED)}/{len(PASSED) + len(FAILED)} controls pass")
    if FAILED:
        print("FAILED: " + ", ".join(FAILED))
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
