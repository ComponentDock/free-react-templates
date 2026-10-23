#!/usr/bin/env python3
"""verify-type-scale-controls.py — control harness for the TYPE-SCALE axis.

The discipline every shipped axis follows (see `-22p`'s `verify-section-order-controls.py`):
a control must FIRE on the defect it names, and a GATE control must prove the check is
what fired — disable the check and the control goes quiet. Positives are written as
mutation-DELTAS against a clean baseline whenever the fix they validate could otherwise
"satisfy" them, so a control still means something after its defect is fixed.

Every control here is OFFLINE: it builds a synthetic spec + a synthetic size map, so the
harness runs while the provider's bot wall is up.

Usage: python3 verify-type-scale-controls.py      (exit 0 = all pass)
"""
from __future__ import annotations

import importlib.util
import sys

PATH = "/root/.hermes/skills/automation/componentdock-prep-stream/scripts/verify-type-scale.py"
spec = importlib.util.spec_from_file_location("vts", PATH)
v = importlib.util.module_from_spec(spec)
spec.loader.exec_module(v)

FAILS = []
PASSES = 0


def check(cid, desc, cond, extra=""):
    global PASSES
    if cond:
        PASSES += 1
        print(f"  PASS {cid:4} {desc}")
    else:
        FAILS.append(f"{cid} {desc} {extra}")
        print(f"  FAIL {cid:4} {desc} {extra}")


# ---------------------------------------------------------------- fixtures ---
# A sheet with one class per scenario + tags, as `size_map()` would build it.
MP = {
    ("cls", "hero-title"): {"px": {48.0}, "rel": set()},
    ("cls", "read-more"): {"px": {14.0}, "rel": set()},
    ("cls", "rem-only"): {"px": set(), "rel": {(1.0, "rem")}},
    ("cls", "many"): {"px": {12.0, 16.0, 20.0, 24.0, 32.0}, "rel": set()},
    ("cls", "btn"): {"px": {16.0}, "rel": set()},
    ("cls", "order-btn"): {"px": {18.0}, "rel": set()},
    ("cls", "footer-widget"): {"px": {22.0}, "rel": set()},
    ("tag", "h2"): {"px": {22.0, 24.0, 28.0, 40.0}, "rel": set()},
    ("tag", "h3"): {"px": {18.0, 20.0}, "rel": set()},
    ("tag", "h4"): {"px": {18.0}, "rel": set()},
    ("tag", "body"): {"px": {15.0}, "rel": set()},
}
CLASSES = {k[1] for k in MP}


def run(txt, rebuilt=False, root_px=16.0, mp=MP, classes=CLASSES):
    return v.audit_spec(txt, mp, root_px, classes, rebuilt)


def buckets(notes):
    out = {}
    for b, _msg in notes:
        out[b] = out.get(b, 0) + 1
    return out


def nflags(txt, **kw):
    return len(run(txt, **kw)[0])


# ------------------------------------------------------------------- C1–C9 ---
print("claim side")

base = "| Hero heading | `.hero-title` `font-size: 48px` |\n"
check("C1", "correct class claim → no flag", nflags(base) == 0)

wrong = "| Hero heading | `.hero-title` `font-size: 40px` |\n"
check("C2", "wrong class claim → 1 flag", nflags(wrong) == 1)

tol = "| Hero heading | `.hero-title` `font-size: 48.4px` |\n"
check("C3", "0.4px rounding → no flag (0.5 tolerance)", nflags(tol) == 0)

check("C4", "no size claim → nothing", run("plain prose with no numbers\n")[2] == 0)

dec = "Read-more: `.read-more { font-size: 15px; font-weight: 700 }`\n"
check("C5", "declaration form is read (wrong value → flag)", nflags(dec) == 1)

tagclaim = "- **Heading:** `h2` 34px, `#000`, centered.\n"
f, n, _d = run(tagclaim)
check("C6", "tag mismatch is a CANDIDATE, never a flag",
      len(f) == 0 and buckets(n).get("TS-CANDIDATE") == 1)

alt = "- **Heading:** `h2` 40px, `#000`, centered.\n"
check("C7", "tag claim that matches the pool → silent", nflags(alt) == 0
      and buckets(run(alt)[1]).get("TS-CANDIDATE") in (None, 0))

mult = "`.many` `font-size: 13px`\n"
check("C8", ">4 live sizes for a class → TS-MULTI note, no flag",
      nflags(mult) == 0 and buckets(run(mult)[1]).get("TS-MULTI") == 1)

rel = "`.rem-only` `font-size: 13px`\n"
check("C9", "rem-only sheet → TS-REL-ONLY note, no flag",
      nflags(rel) == 0 and buckets(run(rel)[1]).get("TS-REL-ONLY") == 1)

conv = "`.rem-only` `font-size: 16px`\n"
check("C10", "px claim == rem rule × root → TS-CONVERTED note, no flag",
      nflags(conv) == 0 and buckets(run(conv)[1]).get("TS-CONVERTED") == 1)

# a rem twin is worth root_px, so the SAME claim flips verdict with the sheet's root —
# this is why the axis reads `html{font-size}` instead of assuming 16px.
MIXED = {("cls", "mixed"): {"px": {14.0}, "rel": {(1.5, "rem")}}}
_mx = "`.mixed` `font-size: 15px`\n"
check("C11", "root 10px → 1.5rem is 15px, so the 15px claim is a CONVERTED note",
      nflags(_mx, root_px=10.0, mp=MIXED, classes={"mixed"}) == 0
      and buckets(run(_mx, root_px=10.0, mp=MIXED, classes={"mixed"})[1])
      .get("TS-CONVERTED") == 1)
check("C12", "root 10px and a 16px claim → nothing explains 16 → flag",
      nflags("`.mixed` `font-size: 16px`\n", root_px=10.0, mp=MIXED,
             classes={"mixed"}) == 1)

# ----------------------------------------------------------------- guards ---
print("guards (each MUST silence the flag it names)")

guarded = [
    ("C12", "responsive framing", "`.hero-title` at ≤991px `font-size: 40px`"),
    ("C13", "approximate framing", "`.hero-title` approx `font-size: 40px` (sampled)"),
    ("C14", "implementation guidance", "`.hero-title` `font-size: 40px` — use Tailwind text-sm"),
    ("C15", "comparison statement", "`.hero-title` `font-size: 40px` vs 48px in the sheet"),
    ("C16", "inner-page scope", "inner pages: `.hero-title` `font-size: 40px`"),
    ("C17", "census sentence", "the only font-size in the sheet: `.hero-title` `font-size: 40px`"),
]
for cid, desc, txt in guarded:
    check(cid, f"{desc} → no flag", nflags(txt + "\n") == 0)

ref = "**Card order button `.order-btn`**: Same `.btn` gradient style, `font-size: 18px`.\n"
f, n, _d = run(ref)
check("C18", "REFOWNER: `.btn` after 'Same … style' is a reference, not the subject",
      len(f) == 0 and buckets(n).get("TS-REFOWNER") == 1)

# ------------------------------------------------------- owner attribution ---
print("owner attribution")

unknown = "`.ghost-x` `font-size: 40px`\n"
check("C19", "class in no sheet → TS-UNKNOWN-SELECTOR note, no flag",
      nflags(unknown) == 0 and buckets(run(unknown)[1]).get("TS-UNKNOWN-SELECTOR") == 1)

drift_unknown = "`.mb-5` `font-size: 40px`\n"
f, n, _d = run(drift_unknown, rebuilt=True)
check("C20", "utility class on a rebuilt kit → drift/unknown note, no flag", len(f) == 0)

wrapped = ("- **Footer widget heading** `.footer-widget` \"Address\"\n"
           "  `font-size: 18px`, weight 600\n")
f, n, _d = run(wrapped)
check("C21", "wrapped declaration joins the previous line's selector → flag fires",
      len(f) == 1)

wrapped_ok = ("- **Footer widget heading** `.footer-widget` \"Address\"\n"
              "  `font-size: 22px`, weight 600\n")
check("C22", "same join, correct value → no flag", nflags(wrapped_ok) == 0)

prose = "- The body copy runs (over the gradient header), `font-size: 18px`.\n"
f, n, _d = run(prose)
check("C23", "bare tag words in PROSE never become an owner via the join",
      len(f) == 0)

prop = "- `.padding-right` is zeroed; `font-size: 16px`, uppercase\n"
check("C24", "a CSS property name in backticks is not a class",
      buckets(run(prop)[1]).get("TS-UNKNOWN-SELECTOR") in (None, 0))

# --------------------------------------------------------------- GATEs ---
print("GATE controls (prove WHICH check fired)")

_orig_looks = v.looks_like_class
v.looks_like_class = lambda name: True
check("G1", "GATE: disable the prose-token filter → `.padding-right` becomes a claim",
      buckets(run(prop)[1]).get("TS-UNKNOWN-SELECTOR", 0) == 1)
v.looks_like_class = _orig_looks

_orig_guard = v.line_guard
v.line_guard = lambda line: None
check("G2", "GATE: disable the line guards → the responsive claim flags",
      nflags("`.hero-title` at ≤991px `font-size: 40px`\n") == 1)
v.line_guard = _orig_guard

_orig_adj = v.ADJ_RX
v.ADJ_RX = v.re.compile(r"(?!x)x")
check("G3", "GATE: disable the adjacency form → the tag candidate disappears",
      buckets(run(tagclaim)[1]).get("TS-CANDIDATE") in (None, 0))
v.ADJ_RX = _orig_adj

_orig_join = v.JOIN_TAIL_RX
v.JOIN_TAIL_RX = v.re.compile(r".*")   # every predecessor "already ended" → no join
check("G4", "GATE: forbid every join → the wrapped claim stops flagging",
      nflags(wrapped) == 0)
v.JOIN_TAIL_RX = _orig_join

html = '<h2 class="counter-title" style="font-size: 34px; text-transform: capitalize">x</h2>'
mp_inline, _r = v.size_map([], html)
check("G5", "inline font-size joins the owner's accepted set",
      ("cls", "counter-title") in mp_inline
      and 34.0 in mp_inline[("cls", "counter-title")]["px"])

# GATE: strip the inline layer → the same claim has no owner at all, which is exactly the
# false candidate `flexly`'s counter heading produced before this fix.
_orig_inline = v.inline_sizes
v.inline_sizes = lambda h: []
mp_noinline, root = v.size_map([], "")
f, n, _d = v.audit_spec("`.counter-title` `font-size: 34px`\n", mp_noinline, root,
                        {"counter-title"}, False)
check("G6", "GATE: without inline styles the claim has no owner/live value at all",
      len(f) == 0 and (buckets(n).get("TS-UNKNOWN-SELECTOR", 0)
                       + buckets(n).get("TS-ABSENT", 0)) >= 1)
v.inline_sizes = _orig_inline

# ------------------------------------------------------------- parse layer ---
print("sheet parser")

css = """
.hero-title{font-size:48px;line-height:1.1}
@media (max-width:991px){.hero-title{font-size:32px}}
h2, .h2{font-size:2rem}
.a > h3{font-size:20px!important}
.b{font-size:clamp(1rem,2vw,3rem)}
"""
mp, root_px = v.size_map([("x.css", css)], "")
check("C25", "px rule lands on the class", 48.0 in mp[("cls", "hero-title")]["px"])
check("C26", "@media rule is carried, not dropped", 32.0 in mp[("cls", "hero-title")]["px"])
check("C27", "rem rule kept as a relative twin", (2.0, "rem") in mp[("cls", "h2")]["rel"]
      or (2.0, "rem") in mp[("tag", "h2")]["rel"])
check("C28", "descendant rule attributes to its rightmost tag",
      20.0 in mp[("tag", "h3")]["px"])
check("C29", "clamp() yields no readable size (class absent or empty)",
      not mp.get(("cls", "b")) or (not mp[("cls", "b")]["px"]
                                   and not mp[("cls", "b")]["rel"]))
check("C30", "print media is skipped", v.parse_rules('@media print{.z{font-size:9px}}') == [])

print(f"\n{PASSES} passed, {len(FAILS)} failed")
if FAILS:
    for f_ in FAILS:
        print("  !!", f_)
    sys.exit(1)
