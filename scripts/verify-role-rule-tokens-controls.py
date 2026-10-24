#!/usr/bin/env python3
"""verify-role-rule-tokens-controls.py — the CONTROL HARNESS for the ROLE-RULE axis.

Every control is a hand-built CSS fixture that decides one verdict bucket or one
guard. A **GATE** control does more than assert an answer: it MUTATES the
mechanism it names (removes the state/property/at-rule/order guard) and asserts
the verdict CHANGES. Without that second half a control can pass while proving
nothing — `-25d`'s lesson, and `-22o` shipped three such gates before it was
caught.

  python3 scripts/verify-role-rule-tokens-controls.py          # -> "N/N · K GATE"
"""
from __future__ import annotations

import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def load(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


R = load("rrt", os.path.join(HERE, "verify-role-rule-tokens.py"))
BASE = R.BASE

RESULTS: list[tuple[str, bool, str]] = []
GATES = 0


def ctrl(name: str, fn, gate: bool = False):
    global GATES
    if gate:
        GATES += 1
    try:
        fn()
        RESULTS.append((name, True, ""))
    except AssertionError as exc:
        RESULTS.append((name, False, str(exc) or "assertion failed"))
    except Exception as exc:                                   # noqa: BLE001
        RESULTS.append((name, False, "%s: %s" % (type(exc).__name__, exc)))


# --------------------------------------------------------------------------- #
# fixtures
# --------------------------------------------------------------------------- #
THEME = "https://preview.colorlib.com/theme/mock/css/"


def page(sheets, inline=None) -> dict:
    """-> blobs in DOCUMENT order, the way `assets_of` would hand them over."""
    html = ["<!doctype html><html><head>"]
    for name in sheets:
        html.append('<link rel="stylesheet" href="%s%s">' % (THEME, name))
    if inline:
        html.append("<style>%s</style>" % inline)
    html.append("</head><body></body></html>")
    blobs = {"page": "".join(html).encode()}
    for name, css in sheets.items() if isinstance(sheets, dict) else sheets:
        blobs[THEME + name] = css.encode()
    if inline:
        blobs["inline"] = inline.encode()
    return blobs


def sheet(css) -> dict:
    return page([("style.css", css)])


def verdict(blobs, role, cands, **kw):
    ev, _notes = R.declaration_evidence(blobs, role)
    return R.rule_verdict(role, cands, ev, **kw)


def expect(got, want, why=""):
    assert got == want, "expected %r, got %r %s" % (want, got, why)


# --------------------------------------------------------------------------- #
# one control per bucket
# --------------------------------------------------------------------------- #
def c01_body_colour():
    expect(verdict(sheet("body{color:#333333}"), "body", ["#333333", "#838383"])[0],
           "ROLE-WINNER")


def c02_heading_ink():
    b = sheet("h1,h2,h3{color:#263b5e}.muted{color:#000000}")
    expect(verdict(b, "ink", ["#000000", "#263b5e"])[0], "ROLE-WINNER")


def c03_footer_band():
    b = sheet(".ftco-footer{background:#000000}.footer-links{color:#3c312e}")
    v, winners, _d = verdict(b, "footer", ["#3c312e", "#000000"])
    expect(v, "ROLE-WINNER")
    expect(list(winners), ["#000000"])


def c04_cta_fill():
    b = sheet(".btn{background-color:#f37121}.hero{background:#f58e9a}")
    expect(verdict(b, "brand", ["#fbe44c", "#f37121"])[0], "ROLE-WINNER")


def c05_state_is_not_resting():
    """`:hover` on the CTA is not the resting fill — and removing the guard flips it."""
    b = sheet(".btn{background:#12d3cf}.btn:hover{background:#e74c3c}")
    expect(verdict(b, "brand", ["#e74c3c", "#12d3cf"])[0], "ROLE-WINNER")
    saved = R.STATE_RX

    def mutated():
        R.STATE_RX = re.compile(r"(?!x)x")          # the guard is what decides
        try:
            ev, _n = R.declaration_evidence(b, "brand")
            return R.rule_verdict("brand", ["#e74c3c", "#12d3cf"], ev)[0]
        finally:
            R.STATE_RX = saved

    got = mutated()
    assert got != "ROLE-WINNER", "GATE: dropping STATE_RX left the verdict %r" % got
    # the guard is not a hardcoded regex but the *regex object* the axis reads
    assert getattr(R, "STATE_RX") is saved


def c06_media_is_not_desktop():
    b = sheet("@media(max-width:600px){body{color:#666666}}body{color:#212529}")
    expect(verdict(b, "body", ["#212529", "#666666"])[0], "ROLE-WINNER")

    saved = R.iter_rules
    R.iter_rules = lambda css: ((h, d, False) for h, d, _m in saved(css))
    try:
        ev, _n = R.declaration_evidence(b, "body")
        got = R.rule_verdict("body", ["#212529", "#666666"], ev)[0]
    finally:
        R.iter_rules = saved
    assert got != "ROLE-WINNER", "GATE: flattening @media left the verdict %r" % got


def c07_cascade_load_order():
    """Two sheets, one `body{color}` each: the LATER sheet wins (GATE: reversed)."""
    b = page([("a.css", "body{color:#666666}"), ("b.css", "body{color:#212529}")])
    expect(verdict(b, "body", ["#666666", "#212529"])[0], "CASCADE-WINNER")
    rev = page([("b.css", "body{color:#212529}"), ("a.css", "body{color:#666666}")])
    # document order comes from the page's <link> tags, not from insertion order
    expect(verdict(rev, "body", ["#666666", "#212529"])[0], "CASCADE-WINNER")
    v, winners, _d = verdict(rev, "body", ["#666666", "#212529"])
    expect(list(winners), ["#666666"], "(reversed <link> order)")

    saved = R.rule_verdict

    def no_cascade():
        return verdict(b, "body", ["#666666", "#212529"], cascade=False)[0]

    assert no_cascade() != "CASCADE-WINNER", "GATE: cascade=False still cascaded"
    assert saved is R.rule_verdict


def c08_specificity_beats_order():
    b = sheet("html body{color:#333333}body{color:#212529}")
    v, winners, _d = verdict(b, "body", ["#212529", "#333333"])
    expect(v, "CASCADE-WINNER")
    expect(list(winners), ["#333333"])


def c09_role_both():
    """Two owning rules of EQUAL rank: the band really is painted twice."""
    b = sheet("h1{color:#000000}h2{color:#f37121}")
    expect(verdict(b, "ink", ["#000000", "#f37121"])[0], "ROLE-BOTH")


def c10_role_none():
    b = sheet("body{color:#212529}.muted{color:#838383}.soft{color:#333333}")
    expect(verdict(b, "body", ["#838383", "#333333"])[0], "ROLE-NONE")


def c11_drift_guard():
    b = sheet("body{color:#333333}")
    expect(verdict(b, "body", ["#333333", "#838383"], drift="?v=3.0.0")[0], "DRIFT")


def c12_partial_coverage():
    b = sheet("body{color:#333333}")
    expect(verdict(b, "body", ["#333333", "#838383"], cov="1/2")[0], "PARTIAL-COVERAGE")
    expect(verdict(b, "body", ["#333333", "#838383"], cov="2/2")[0], "ROLE-WINNER")


def c13_rgb_is_a_colour():
    b = sheet("body{color:rgb(51, 51, 51)}")
    expect(verdict(b, "body", ["#333333", "#838383"])[0], "ROLE-WINNER")


def c14_shorthand_url_does_not_hide_fill():
    b = sheet(".btn{background:url(bg.png) no-repeat #f37121}")
    expect(verdict(b, "brand", ["#fbe44c", "#f37121"])[0], "ROLE-WINNER")


def c15_font_face_is_not_the_body_face():
    """An `@font-face` DECLARES a family but never styles an element.

    Not a GATE: the head (`@font-face`) can never satisfy an element predicate,
    so there is no second mechanism to flip — the load-bearing at-rule guard is
    `@media`, and C06 mutates it.
    """
    b = sheet("@font-face{font-family:'Poppins';src:url(p.woff2)}body{font-family:'Roboto',sans-serif}")
    v, winners, _d = verdict(b, "typeface", ["poppins", "roboto"])
    expect(v, "ROLE-WINNER")
    expect(list(winners), ["roboto"])


def c16_keyframes_are_not_rules():
    b = sheet("@keyframes pulse{0%{color:#f37121}100%{color:#f37121}}h1{color:#263b5e}")
    v, winners, _d = verdict(b, "ink", ["#f37121", "#263b5e"])
    expect(v, "ROLE-WINNER")
    expect(list(winners), ["#263b5e"])


def c17_outline_button_never_owns_the_fill():
    b = sheet(".btn{background:#12d3cf}.btn-outline{background:transparent;border-color:#e74c3c}")
    expect(verdict(b, "brand", ["#e74c3c", "#12d3cf"])[0], "ROLE-WINNER")

    saved = dict(R.ROLE_RULES)
    R.ROLE_RULES["brand"] = (R.owns_cta, {"background", "background-color", "border-color"})
    try:
        ev = R.declaration_evidence(b, "brand")[0]
        got = R.rule_verdict("brand", ["#e74c3c", "#12d3cf"], ev)[0]
    finally:
        R.ROLE_RULES.clear()
        R.ROLE_RULES.update(saved)
    assert got != "ROLE-WINNER", "GATE: border-color as a brand property changed nothing (%r)" % got


def c18_selector_list_is_split():
    b = sheet("h1, .h2, .hero h3{color:#263b5e}")
    ev, _n = R.declaration_evidence(b, "ink")
    sels = [e["sel"] for e in ev.get("#263b5e", [])]
    expect(len(sels), 3, "(one evidence row per element selector, got %r)" % sels)


def c19_comment_is_not_a_declaration():
    b = sheet("/* body{color:#838383} */ body{color:#333333}")
    v, winners, _d = verdict(b, "body", ["#838383", "#333333"])
    expect(v, "ROLE-WINNER")
    expect(list(winners), ["#333333"])


def c20_pseudo_element_is_skipped():
    b = sheet("h1::before{color:#000000}h1{color:#263b5e}")
    expect(verdict(b, "ink", ["#000000", "#263b5e"])[0], "ROLE-WINNER")


def c21_id_specificity():
    b = sheet("#hero .btn{background:#000000}.btn{background:#263b5e}")
    v, winners, _d = verdict(b, "brand", ["#000000", "#263b5e"])
    expect(v, "CASCADE-WINNER")
    expect(list(winners), ["#000000"])


def c22_document_order_from_link_tags():
    """`assets_of` fetches the theme sheet FIRST; the cascade must not believe it."""
    html = ('<head><link rel="stylesheet" href="/css/b.css">'
            '<link rel="stylesheet" href="/css/a.css"></head>').encode()
    blobs = {"page": html,
             THEME + "a.css": b"body{color:#666666}",
             THEME + "b.css": b"body{color:#212529}"}
    order = [x.rsplit("/", 1)[-1] for x in R.ordered_labels(blobs)]
    expect(order, ["b.css", "a.css"], "(insertion order a,b but document order b,a)")
    v, winners, _d = verdict(blobs, "body", ["#666666", "#212529"])
    expect(v, "CASCADE-WINNER")
    expect(list(winners), ["#666666"], "(a.css is the later sheet)")


def c23_accent_has_no_rule():
    b = sheet("body{color:#333333}.tag{background:#fbe44c}")
    expect(verdict(b, "accent", ["#fbe44c", "#f58e9a"])[0], "NO-RULE")


def c24_media_only():
    b = sheet("@media(max-width:768px){body{color:#666666}}.muted{color:#212529}")
    expect(verdict(b, "body", ["#212529", "#666666"])[0], "MEDIA-ONLY")


def c25_page_blob_is_not_double_counted():
    """The HTML blob carries the inline `<style>` too: counting both doubles every hit."""
    b = page([("style.css", "body{color:#333333}")], inline="body{color:#333333}")
    ev, _n = R.declaration_evidence(b, "body")
    expect(len(ev["#333333"]), 2, "(1 sheet + 1 inline, not 3)")
    saved = R.ordered_labels
    R.ordered_labels = lambda blobs: list(blobs)           # GATE: page included
    try:
        ev2, _n2 = R.declaration_evidence(b, "body")
    finally:
        R.ordered_labels = saved
    assert len(ev2["#333333"]) > 2, "GATE: including 'page' did not double-count"


def c26_btn_variant_classes_own_the_fill():
    b = sheet(".theme-btn{background:#f37121}.other{background:#fbe44c}")
    expect(verdict(b, "brand", ["#fbe44c", "#f37121"])[0], "ROLE-WINNER")


def c27_button_element_owns_the_fill():
    b = sheet("button{background:#f37121}.other{background:#fbe44c}")
    expect(verdict(b, "brand", ["#fbe44c", "#f37121"])[0], "ROLE-WINNER")


def c28_quoted_family_is_normalised():
    b = sheet('body{font-family:"Open Sans",sans-serif}')
    expect(verdict(b, "typeface", ["open sans", "poppins"])[0], "ROLE-WINNER")


def c29_last_rule_in_one_sheet_wins():
    b = sheet("body{color:#666666}body{color:#212529}")
    v, winners, _d = verdict(b, "body", ["#666666", "#212529"])
    expect(v, "CASCADE-WINNER")
    expect(list(winners), ["#212529"])


def c31_typeface_candidate_is_a_family_set():
    """The census hands typeface candidates as the prep's family SET, not a string."""
    b = sheet("body{font-family:'Roboto',sans-serif}.note{font-family:'Poppins'}")
    expect(verdict(b, "typeface", [("arial", "poppins"), ("roboto",)])[0], "ROLE-WINNER")
    v, winners, _d = verdict(b, "typeface", [("arial", "poppins"), ("roboto",)])
    expect(list(winners), ["roboto"])


def c32_scoped_heading_is_not_the_ink():
    """`.hero h1{color}` paints the hero heading, not the design's heading ink."""
    b = sheet(".hero h1{color:#ffffff}h2{color:#000000}")
    expect(verdict(b, "ink", ["#ffffff", "#031b69"])[0], "SCOPED-ONLY")
    expect(verdict(b, "ink", ["#ffffff", "#000000"])[0], "ROLE-WINNER")

    saved = R.base_scope
    R.base_scope = lambda role, ev: True
    try:
        ev = R.declaration_evidence(b, "ink")[0]
        got = R.rule_verdict("ink", ["#ffffff", "#031b69"], ev)[0]
    finally:
        R.base_scope = saved
    assert got == "ROLE-WINNER", "GATE: dropping the scope guard left %r" % got


def c30_no_evidence_at_all():
    expect(verdict(sheet(".x{color:#000000}"), "ink", ["#000000", "#f37121"])[0],
           "ROLE-NONE")


# --------------------------------------------------------------------------- #
# run
# --------------------------------------------------------------------------- #
CONTROLS = [
    ("C01", "body colour winner", c01_body_colour, False),
    ("C02", "heading ink winner", c02_heading_ink, False),
    ("C03", "footer band winner", c03_footer_band, False),
    ("C04", "CTA fill winner", c04_cta_fill, False),
    ("C05", ":hover is not the resting state", c05_state_is_not_resting, True),
    ("C06", "@media is not the desktop state", c06_media_is_not_desktop, True),
    ("C07", "cascade = load order", c07_cascade_load_order, True),
    ("C08", "specificity beats order", c08_specificity_beats_order, False),
    ("C09", "two equal-rank owners -> ROLE-BOTH", c09_role_both, False),
    ("C10", "painted elsewhere, owned nowhere", c10_role_none, False),
    ("C11", "rebuilt skin -> DRIFT", c11_drift_guard, False),
    ("C12", "partial sheet -> PARTIAL-COVERAGE", c12_partial_coverage, False),
    ("C13", "rgb() is a colour", c13_rgb_is_a_colour, False),
    ("C14", "url() in a shorthand", c14_shorthand_url_does_not_hide_fill, False),
    ("C15", "@font-face is not the body face", c15_font_face_is_not_the_body_face, False),
    ("C16", "@keyframes are not rules", c16_keyframes_are_not_rules, False),
    ("C17", ".btn-outline never owns the fill", c17_outline_button_never_owns_the_fill, True),
    ("C18", "selector list split per selector", c18_selector_list_is_split, False),
    ("C19", "CSS comment is not a declaration", c19_comment_is_not_a_declaration, False),
    ("C20", "::before skipped", c20_pseudo_element_is_skipped, False),
    ("C21", "id specificity", c21_id_specificity, False),
    ("C22", "document order from <link> tags", c22_document_order_from_link_tags, False),
    ("C23", "accent has no owning rule", c23_accent_has_no_rule, False),
    ("C24", "media-only declaration", c24_media_only, False),
    ("C25", "the HTML blob is not double-counted", c25_page_blob_is_not_double_counted, True),
    ("C26", ".theme-btn owns the fill", c26_btn_variant_classes_own_the_fill, False),
    ("C27", "button element owns the fill", c27_button_element_owns_the_fill, False),
    ("C28", "quoted family normalised", c28_quoted_family_is_normalised, False),
    ("C29", "last rule in one sheet wins", c29_last_rule_in_one_sheet_wins, False),
    ("C30", "no owning evidence at all", c30_no_evidence_at_all, False),
    ("C31", "typeface candidate is a family set", c31_typeface_candidate_is_a_family_set, False),
    ("C32", "scoped heading is not the ink", c32_scoped_heading_is_not_the_ink, True),
]


def main() -> int:
    for cid, desc, fn, gate in CONTROLS:
        ctrl("%s %s%s" % (cid, desc, "  [GATE]" if gate else ""), fn, gate)
    bad = [r for r in RESULTS if not r[1]]
    for name, ok, why in RESULTS:
        if not ok:
            print("FAIL %s — %s" % (name, why))
    print("%d/%d controls pass · %d GATE" % (len(RESULTS) - len(bad), len(RESULTS), GATES))
    return 0 if not bad else 1


if __name__ == "__main__":
    sys.exit(main())
