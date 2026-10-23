#!/usr/bin/env python3
"""verify-unreachable-claims-controls.py — mutation harness for the
UNREACHABLE-CLAIM axis.

Everything runs OFFLINE against a synthetic page + stylesheet, so a control
proves the ADJUDICATION and not the network.

  * POSITIVE controls mutate a spec/verdict and demand the exact bucket.
  * GATE controls disable the guard under test and demand the flag appear —
    they prove the verdict comes from comparing with the page, not from the
    claim's wording.
  * REGRESSION controls pin every false-positive class measured on the first
    full run (204 flags → 196 → 0): the rebuilt 3.x demo, the family spelling
    the catalog resolves (faith-2 → faith2), the placeholder page the host
    serves at a slug's own path, the weight-named face (poppins-regular), the
    role-qualified label (Primary text), and the multi-line parenthesised
    verdict that made the first fixer skip 18 specs.
  * FIXER controls prove the block is written once, is a byte-level no-op on a
    second run, never lands inside a fence, and closes the flag it records.

Usage: python3 verify-unreachable-claims-controls.py [-v]
Exit 0 = all controls pass. Non-zero = the number of failing controls.
"""
from __future__ import annotations

import importlib.util
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent
_s = importlib.util.spec_from_file_location("_unreach", HERE / "verify-unreachable-claims.py")
V = importlib.util.module_from_spec(_s)
_s.loader.exec_module(V)
_f = importlib.util.spec_from_file_location("_unreachfix", HERE / "fix-unreachable-claims.py")
F = importlib.util.module_from_spec(_f)
_f.loader.exec_module(F)

FILLER = "\n".join(f".pad-{i} {{ padding: {i}px 0; color: #333; }}" for i in range(120))
# the fixture sheet paints `#abcdef` 14 times (a real brand) and never `#123456`
# (the spec's recorded brand) — so the token control is a measurement, not a guess
ACCENT = "\n".join(f".accent-{i} {{ background: #abcdef; }}" for i in range(14))
CSS = """
:root { --x: 1; }
body { font-family: "Roboto", sans-serif; color: #222222; }
.btn:hover { background: #abcdef; }
.card { background: #abcdef; }
""" + ACCENT + FILLER
# a THIN page: one browser-default blue, one off-brand green x3, no painted brand
THIN = ("\nbody { font-family: 'Roboto', sans-serif; }\n"
        ".btn { color: #007bff; }\n.x { color: #00ad5f; }\n.y { color: #00ad5f; }\n"
        ".z { color: #00ad5f; }\n" + "/* pad */\n" * 200)
LAYERS = [("fixture://style.css", CSS)]

PAGE = """<html><head><title>Book Keeping — Accounting Firm</title>
<link rel="stylesheet" href="style.css?v=1"></head>
<body><h1>Book Keeping</h1><p>Accounting</p></body></html>"""
PAGE_REBUILT = PAGE.replace("style.css?v=1", "style.css?v=3.0.1").replace(
    "<h1>Book Keeping</h1>", '<h1>Finley</h1><div class="kit">/kit/</div>')
PAGE_MISSERVED = """<html><head><title>Au Form Wizard</title>
<link rel="stylesheet" href="style.css?v=1"></head>
<body><h1>Au Form Wizard</h1></body></html>"""

SLUG = "book-keeping"
URL = "https://preview.colorlib.com/theme/bookkeeping/"


def spec(body: str, slug: str = SLUG) -> str:
    return ("# Template: Fixture (Test)\n\n## Purpose\n\n- Source slug: `" + slug + "`\n"
            + body + "\n\n## Design tokens\n\n| Token | Value |\n|---|---|\n"
            "| Brand color | `#123456` |\n| Font family | `Poppins`, sans-serif |\n\n"
            "## Requirements\n\nNothing.\n")


STALE = "- Preview URL: https://preview.colorlib.com/theme/book-keeping/ (404 — unreachable; design derived from screenshot)\n"

results = []


def control(name, fn, gate=False):
    try:
        ok, detail = fn()
    except Exception as exc:                       # a crash is a failing control
        ok, detail = False, f"raised {type(exc).__name__}: {exc}"
    results.append((name, ok, detail, gate))


def run(txt, url=URL, html=PAGE, layers=LAYERS, ok=True, **over):
    flags, notes, primary = V.audit(txt, over.get("slug", SLUG), url, html, layers, ok)
    return flags, notes, primary


def kinds(flags):
    return [f[0] for f in flags]


def notes_of(notes):
    return [n[0] for n in notes]


# ------------------------------------------------------- POSITIVE controls ---
def c_void():
    f, _n, b = run(spec("- Stack: React 19\n"))
    return b == "VOID" and not f, f"bucket={b} flags={kinds(f)}"


def c_stale_is_flagged():
    f, _n, b = run(spec(STALE))
    return (b == "STALE" and "STALE-CLAIM" in kinds(f) and "PALETTE-WRONG" in kinds(f)
            and "TYPE-WRONG" in kinds(f)), f"bucket={b} flags={kinds(f)}"


def c_recorded_is_clean():
    body = STALE + "- See the live page: https://preview.colorlib.com/theme/bookkeeping/ — HTTP 200, 34,558 B\n"
    f, n, b = run(spec(body))
    return (b == "RECORDED" and not f and "RECORDED" in notes_of(n)), \
        f"bucket={b} flags={kinds(f)} notes={notes_of(n)}"


def c_dead_confirmed():
    f, n, b = run(spec(STALE), url="", html="", layers=[], ok=None)
    return (b == "DEAD-CONFIRMED" and not f), f"bucket={b} flags={kinds(f)}"


def c_claim_other():
    body = "- The header burger underneath is unreachable while the overlay is open.\n"
    f, n, b = run(spec(body))
    return (b == "CLAIM-OTHER" and not f and "CLAIM-OTHER" in notes_of(n)), \
        f"bucket={b} flags={kinds(f)}"


def c_drift_is_not_a_flag():
    f, n, b = run(spec(STALE), html=PAGE_REBUILT)
    return (b == "DRIFT" and not f and "DRIFT" in notes_of(n)), f"bucket={b} flags={kinds(f)}"


def c_misserved_is_not_a_flag():
    """`colorlib-search-15` now serves an unrelated wizard at its own path."""
    txt = spec(STALE.replace("book-keeping", "colorlib-search-15"), slug="colorlib-search-15")
    f, n, b = run(txt, slug="colorlib-search-15",
                  url="https://colorlib.com/etc/searchf/colorlib-search-15/",
                  html=PAGE_MISSERVED)
    return (b == "UNRELATED" and "HOST-MISSERVED" in notes_of(n) and not f), \
        f"bucket={b} notes={notes_of(n)}"


def c_unrelated_when_path_and_title_disagree():
    f, n, b = run(spec(STALE), url="https://colorlib.com/etc/searchf/other/",
                  html=PAGE_MISSERVED, ok=None)
    return (b == "UNRELATED" and not f), f"bucket={b} notes={notes_of(n)}"


def c_palette_thin_is_a_note():
    f, n, b = run(spec(STALE), layers=[("fixture://thin.css", THIN)])
    return ("PALETTE-WRONG" not in kinds(f) and "PALETTE-THIN" in notes_of(n)), \
        f"flags={kinds(f)} notes={notes_of(n)}"


# ------------------------------------------------- REGRESSION (FP) controls ---
def c_weight_named_face_is_the_same_face():
    css = LAYERS[0][1].replace('"Roboto"', '"Poppins-Regular"')
    txt = spec(STALE).replace("`Poppins`, sans-serif", "`Poppins`, sans-serif")
    f, _n, _b = run(txt, layers=[("fixture://w.css", css)])
    return "TYPE-WRONG" not in kinds(f), f"flags={kinds(f)}"


def c_role_label_is_not_the_brand():
    txt = spec(STALE).replace("| Brand color | `#123456` |", "| Primary text | `#777777` |")
    f, n, _b = run(txt)
    return ("PALETTE-WRONG" not in kinds(f) and "BRAND-ROLE-LOOSE" in notes_of(n)), \
        f"flags={kinds(f)} notes={notes_of(n)}"


def c_slug_family_spelling_resolves():
    """`faith-2` → `/theme/faith2/`: the path need not equal the slug."""
    f, _n, b = run(spec(STALE.replace("book-keeping", "faith-2")), slug="faith-2",
                   url="https://preview.colorlib.com/theme/faith2/",
                   html=PAGE.replace("Book Keeping", "Faith"))
    return (b == "STALE" and "STALE-CLAIM" in kinds(f)), f"bucket={b} flags={kinds(f)}"


def c_multiline_parenthetical():
    txt = ("- **Preview URL:** https://preview.colorlib.com/theme/book-keeping/ (404 at\n"
           "  time of research — design tokens derived from screenshot)\n"
           "- **Stack:** React 19\n")
    new, n = F.fix_spec(spec(txt), URL, PAGE, LAYERS)
    ok = n >= 2 and "time of research — design tokens derived from screenshot) — **re-probed" in new
    return ok, f"edits={n}"


# ------------------------------------------------------------- GATE controls ---
def g_identity_disabled_flags_misserved():
    orig = V.identity
    try:
        V.identity = lambda url, html, slug: "ok"
        f, _n, b = run(spec(STALE), html=PAGE_MISSERVED)
    finally:
        V.identity = orig
    return (b == "STALE" and "STALE-CLAIM" in kinds(f)), \
        f"bucket={b} flags={kinds(f)} (identity guard removed ⇒ must flag)"


def g_brand_threshold_disabled_flags_thin():
    orig = V.MIN_BRAND_HITS
    try:
        V.MIN_BRAND_HITS = 0
        f, _n, _b = run(spec(STALE), layers=[("fixture://thin.css", THIN)])
    finally:
        V.MIN_BRAND_HITS = orig
    return ("PALETTE-WRONG" in kinds(f)), \
        f"flags={kinds(f)} (threshold removed ⇒ must flag)"


def g_exempt_guard_disabled_reflags_fixed_spec():
    """The fixed spec is clean ONLY because of its record: remove BOTH guards
    (the `re-probed` exemption and the measured `2xx` line) and it must re-flag."""
    fixed, _n = F.fix_spec(spec(STALE), URL, PAGE, LAYERS)
    clean, _n2, _b = run(fixed)
    orig_block, orig_rx, orig_2xx = V.REPROBE_BLOCK_RX, V.REPROBE_RX, V.TWO_XX_RX
    try:
        V.REPROBE_BLOCK_RX = V.re.compile("$^")
        V.REPROBE_RX = V.re.compile("__never__")
        V.TWO_XX_RX = V.re.compile("__never__")
        f, _n3, _b2 = run(fixed)
    finally:
        V.REPROBE_BLOCK_RX, V.REPROBE_RX, V.TWO_XX_RX = orig_block, orig_rx, orig_2xx
    return (not clean and bool(f)), \
        f"clean_flags={kinds(clean)} reflagged={kinds(f)} (exempt guard removed ⇒ must flag)"


# ------------------------------------------------------------ FIXER controls ---
def f_block_written_once():
    fixed, n1 = F.fix_spec(spec(STALE), URL, PAGE, LAYERS)
    again, n2 = F.fix_spec(fixed, URL, PAGE, LAYERS)
    return (n1 > 0 and n2 == 0 and again == fixed and fixed.count(F.BLOCK_START) == 1), \
        f"edits={n1}/{n2} blocks={fixed.count(F.BLOCK_START)}"


def f_records_measured_facts():
    fixed, _n = F.fix_spec(spec(STALE), URL, PAGE, LAYERS)
    wants = (URL, "HTTP 200", "Roboto", "#abcdef", "re-probed", "fixture://style.css")
    missing = [w for w in wants if w not in fixed]
    return (not missing), f"missing={missing}"


def f_never_edits_inside_a_fence():
    txt = spec("- Stack: React 19\n")
    fenced = txt + "\n```\n# unreachable preview note\n404 at prep time — unreachable\n```\n"
    fixed, n = F.fix_spec(fenced, URL, PAGE, LAYERS)
    return (n == 0 and fixed == fenced), f"edits={n}"


def f_closes_the_flag_it_records():
    fixed, _n = F.fix_spec(spec(STALE), URL, PAGE, LAYERS)
    flags, _n2, b = run(fixed)
    return (b == "RECORDED" and not flags), f"bucket={b} flags={kinds(flags)}"


for name, fn, gate in [
    ("VOID: no verdict → nothing read", c_void, False),
    ("STALE: verdict false + tokens wrong → 3 flags", c_stale_is_flagged, False),
    ("RECORDED: spec already holds the 2xx → clean", c_recorded_is_clean, False),
    ("DEAD-CONFIRMED: no demo → the verdict stands", c_dead_confirmed, False),
    ("CLAIM-OTHER: a UI element is not the preview", c_claim_other, False),
    ("DRIFT: a rebuilt 3.x demo is not a prep error", c_drift_is_not_a_flag, False),
    ("HOST-MISSERVED: placeholder at the slug's own path", c_misserved_is_not_a_flag, False),
    ("UNRELATED: wrong path, wrong title", c_unrelated_when_path_and_title_disagree, False),
    ("PALETTE-THIN: no painted brand → note", c_palette_thin_is_a_note, False),
    ("REGRESSION: poppins-regular is Poppins", c_weight_named_face_is_the_same_face, False),
    ("REGRESSION: 'Primary text' is not the brand", c_role_label_is_not_the_brand, False),
    ("REGRESSION: faith-2 resolves via faith2", c_slug_family_spelling_resolves, False),
    ("REGRESSION: multi-line parenthesised verdict", c_multiline_parenthetical, False),
    ("GATE: identity guard removed ⇒ must flag", g_identity_disabled_flags_misserved, True),
    ("GATE: brand threshold removed ⇒ must flag", g_brand_threshold_disabled_flags_thin, True),
    ("GATE: exempt guard removed ⇒ must re-flag", g_exempt_guard_disabled_reflags_fixed_spec, True),
    ("FIXER: block written once, idempotent", f_block_written_once, False),
    ("FIXER: block records the measured facts", f_records_measured_facts, False),
    ("FIXER: never edits inside a fence", f_never_edits_inside_a_fence, False),
    ("FIXER: closes the flag it records", f_closes_the_flag_it_records, False),
]:
    control(name, fn, gate)

fails = 0
for name, ok, detail, gate in results:
    tag = "GATE " if gate else "     "
    print(f"{'PASS' if ok else 'FAIL'} {tag} {name:52s} {detail}")
    fails += 0 if ok else 1
print(f"\n{len(results) - fails}/{len(results)} controls pass "
      f"({sum(1 for r in results if r[3])} GATE)")
sys.exit(fails)
