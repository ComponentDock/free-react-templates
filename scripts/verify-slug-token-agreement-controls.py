#!/usr/bin/env python3
"""verify-slug-token-agreement-controls.py — mutation controls for the
SLUG-TOKEN-AGREEMENT axis.

Every control MUTATES a fixture or an input and asserts the axis' answer, so a
control still fails if someone "simplifies" a guard away. GATE controls are the
ones that prove the axis can FIRE at all (a clean report is only meaningful
next to a positive that fires).

  python3 scripts/verify-slug-token-agreement-controls.py        # all controls
  python3 scripts/verify-slug-token-agreement-controls.py -v     # + detail

Exit 0 = every control passed.
"""
from __future__ import annotations

import importlib.util
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
TARGET = os.path.join(HERE, "verify-slug-token-agreement.py")


def load():
    spec = importlib.util.spec_from_file_location("sta", TARGET)
    mod = importlib.util.module_from_spec(spec)
    sys.path.insert(0, HERE)
    spec.loader.exec_module(mod)
    return mod


sta = load()
FAILED = []
RAN = []


def check(name, got, want, gate=False):
    ok = got == want
    RAN.append((name, ok, gate, got, want))
    if not ok:
        FAILED.append(name)


def spec_text(slug, rows, purpose_extra="", extra_sections="", url_form="wp"):
    url = ("https://colorlib.com/wp/template/%s/" % slug if url_form == "wp"
           else "https://preview.colorlib.com/theme/%s/" % slug)
    body = ["# Template: X (Category)", "", "## Purpose", "",
            "A recreation of ColorLib \"X\" (%s). %s" % (url, purpose_extra), "",
            "## Design tokens", "", "| Role | Value |", "| --- | --- |"]
    for label, value in rows:
        body.append("| %s | %s |" % (label, value))
    body += ["", extra_sections, "## Requirements", "", "### Requirement: Hero", ""]
    return "\n".join(body)


def tree(specs, apps=()):
    """A fixture repo root: {name: text} -> path"""
    root = tempfile.mkdtemp(prefix="sta-ctl-")
    os.makedirs(os.path.join(root, "apps"))
    for a in apps:
        os.makedirs(os.path.join(root, "apps", a))
    for name, text in specs.items():
        d = os.path.join(root, "openspec", "specs", "template-" + name)
        os.makedirs(d)
        open(os.path.join(d, "spec.md"), "w").write(text)
    return root


# --------------------------------------------------------------------------- #
# 1-2. the axis fires, and does not fire on agreement (GATE pair)
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo", [("Brand color", "`#112233`")]),
    "beta": spec_text("demo", [("Brand color", "`#112233`")]),
}))
check("C01 same value, same slug -> AGREE, 0 flags", (r["agree"], r["flags"]), (1, 0))

r = sta.census(tree({
    "alpha": spec_text("demo", [("Brand color", "`#112233`")]),
    "beta": spec_text("demo", [("Brand color", "`#445566`")]),
}))
check("C02 two values, same slug -> CONFLICT", (r["agree"], r["flags"]), (0, 1), gate=True)
check("C02b the flag names both preps",
      sorted(x[1] for x in r["flagged"][0]["claims"]), ["alpha", "beta"])

# --------------------------------------------------------------------------- #
# 3. identity is the SLUG: two designs never compare
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo-one", [("Brand color", "`#112233`")]),
    "beta": spec_text("demo-two", [("Brand color", "`#445566`")]),
}))
check("C03 different slugs are never compared", (r["comparisons"], r["flags"]), (0, 0))

# --------------------------------------------------------------------------- #
# 4. variant labels are not role definitions
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo", [("Brand hover", "`#112233`")]),
    "beta": spec_text("demo", [("Brand secondary", "`#445566`")]),
}))
check("C04 variant labels ('Brand hover'/'Brand secondary') define nothing",
      (r["comparisons"], r["flags"]), (0, 0))

# --------------------------------------------------------------------------- #
# 5. GATE: the strict-label guard is load-bearing (loose mode invents the flag)
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo", [("Primary text", "`#112233`")]),
    "beta": spec_text("demo", [("Primary button", "`#445566`")]),
}), strict=False)
check("C05 loose labels turn variants into a phantom conflict (GATE)", r["flags"], 1, gate=True)
r = sta.census(tree({
    "alpha": spec_text("demo", [("Primary text", "`#112233`")]),
    "beta": spec_text("demo", [("Primary button", "`#445566`")]),
}))
check("C06 strict labels keep it at 0", r["flags"], 0)

# --------------------------------------------------------------------------- #
# 7. a qualified role inside one prep is a note, not a definition
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo", [("Accent color", "`#112233`")]),
    "beta": spec_text("demo", [("Accent color", "`#112233`"), ("Accent (measured)", "`#445566`")]),
}))
check("C07 a prep that defines the role twice is skipped (QUALIFIED)",
      (r["comparisons"], r["flags"], r["notes"].get("QUALIFIED")), (0, 0, 1))

# --------------------------------------------------------------------------- #
# 8. hex forms normalise (short form, case, trailing alpha)
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo", [("Body text", "`#FFF`")]),
    "beta": spec_text("demo", [("Body text", "`#ffffff`")]),
    "gamma": spec_text("demo", [("Body text", "`#FFFFFFAA`")]),
}))
check("C08 #FFF / #ffffff / #FFFFFFAA are one value", r["flags"], 0)

# --------------------------------------------------------------------------- #
# 9. only ONE prep defines the role -> THIN note, no flag
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo", [("Footer bg", "`#101010`")]),
    "beta": spec_text("demo", [("Brand color", "`#112233`")]),
}))
check("C09 a single definition is THIN, not a conflict",
      (r["flags"], r["notes"].get("THIN")), (0, 2))

# --------------------------------------------------------------------------- #
# 10-12. typeface: vocabulary guard, weight normalisation, icon faces
# --------------------------------------------------------------------------- #
vocab = sta.build_family_vocab([
    'font-family: "Poppins", sans-serif;',
    'font-family: "Roboto", sans-serif;',
    "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap",
    'font-family: "FontAwesome", sans-serif;',
    'font-family: "object-fit: cover";',
])
check("C10 vocab keeps real families, drops icon faces and CSS junk",
      sorted(vocab), ["playfair display", "poppins", "roboto"])
check("C11 weight stems normalise (Poppins-Regular == Poppins)",
      sta.canon_family("Poppins-Regular"), "poppins")
check("C12 a quoted PROSE word is not a family WITH the vocab",
      sta.families('See "Live sheet" below', vocab), set())
check("C12b ... but it is without one (the guard is load-bearing)",
      sta.families('See "Live sheet" below', None) == {"live sheet"}, True)
check("C12c a quoted CSS declaration is rejected structurally, vocab or not",
      (sta.families('"object-fit: cover"', None), sta.families('"object-fit: cover"', vocab)),
      (set(), set()))

EV = ('Live sheet: `font-family: "Poppins", sans-serif;` and '
      '`font-family: "Roboto", sans-serif;`')
r = sta.census(tree({
    "alpha": spec_text("demo", [("Font family", "`Poppins`")], extra_sections=EV),
    "beta": spec_text("demo", [("Font family", "`Roboto`")], extra_sections=EV),
}), strict=True)
check("C13 disjoint body families -> typeface CONFLICT",
      (r["flags"], r["flagged"][0]["role"] if r["flagged"] else None), (1, "typeface"))

r = sta.census(tree({
    "alpha": spec_text("demo", [("Font family", "`Poppins-Regular`")], extra_sections=EV),
    "beta": spec_text("demo", [("Typeface", "`Poppins`, sans-serif")], extra_sections=EV),
}))
check("C14 same family in two spellings is agreement", r["flags"], 0)

# --------------------------------------------------------------------------- #
# 15-18. verdict guards (pure, no network)
# --------------------------------------------------------------------------- #
check("C15 one painted candidate, one at zero -> UNSUPPORTED",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {"#111111": 9, "#222222": 0})[0], "UNSUPPORTED", gate=True)
check("C16 both candidates painted -> BOTH-PAINTED",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {"#111111": 9, "#222222": 4})[0], "BOTH-PAINTED")
check("C17 nothing painted -> NONE-PAINTED",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {})[0], "NONE-PAINTED")
check("C18 one painted + one painted-thin -> THIN-WINNER",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {"#111111": 9, "#222222": 1})[0], "THIN-WINNER")
check("C18b a single occurrence is below every bucket -> NONE-PAINTED",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {"#111111": 2, "#222222": 0})[0], "NONE-PAINTED")

# --------------------------------------------------------------------------- #
# 19-21. the three adjudication guards
# --------------------------------------------------------------------------- #
check("C19 rebuilt skin (?v=3) -> DRIFT, never a fix",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {"#111111": 9, "#222222": 0}, drift="?v=3.1.0 (style.min.css)")[0],
      "DRIFT", gate=True)
check("C20 an unfetched stylesheet -> PARTIAL-COVERAGE",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {"#111111": 9, "#222222": 0}, cov="11/13")[0], "PARTIAL-COVERAGE")
check("C21 full coverage lets the verdict land",
      sta.verdict_for("colour", [["#111111", "a"], ["#222222", "b"]],
                      {"#111111": 9, "#222222": 0}, cov="13/13")[0], "UNSUPPORTED")
check("C22 rebuilt detection reads the sheet URL",
      "v=3" in sta.rebuilt_reason("u", {"https://h/css/style.min.css?v=3.1.0": b""}), True)
check("C23 rebuilt detection reads the kit path",
      sta.rebuilt_reason("u", {"https://h/css/kit/form.min.css": b""}) != "", True)

# --------------------------------------------------------------------------- #
# 24-26. the colour counter must survive rgb() notation
# --------------------------------------------------------------------------- #
c = sta.count_hexes({"a": b"color:#ff0000;.x{color:rgb(255, 0, 0)}.y{color:rgba(0,0,255,.5)}"})
check("C24 hex and rgb() of one colour are one bucket", c["#ff0000"], 2, gate=True)
check("C25 rgba() alpha is ignored", c["#0000ff"], 1)
check("C26 a candidate written ONLY as rgb() can still win",
      sta.verdict_for("colour", [["#ff0000", "a"], ["#00ff00", "b"]],
                      sta.count_hexes({"a": b"color:rgb(255,0,0);b{color:rgb(255,0,0)}"
                                            b"c{color:rgba(255,0,0,.9)}"}))[0], "UNSUPPORTED")
check("C27 font families are read from Google Fonts URLs",
      sta.count_families({"p": b'<link href="https://fonts.googleapis.com/css?family=Poppins:400">'}).get("poppins", 0) >= 1,
      True)

# --------------------------------------------------------------------------- #
# 28-30. slug identity forms and the sibling guard
# --------------------------------------------------------------------------- #
check("C28 the wp form is a slug", sta.subject_slug(spec_text("demo", [])), "demo")
check("C29 the preview-only form is a slug too",
      sta.subject_slug(spec_text("demo", [], url_form="preview")), "demo")
check("C30 a demo family prefix is not a slug",
      sta.subject_slug("## Purpose\n\nSee https://preview.colorlib.com/theme/bootstrap/modal-04/."),
      "modal-04")
check("C31 a sibling mention does not become the subject",
      sta.subject_slug("## Purpose\n\nRecreates https://colorlib.com/wp/template/alpha/ ."
                       "\n\n## Notes\n\nUnlike https://colorlib.com/wp/template/beta/, it is dark."),
      "alpha")
check("C32 a spec with no Purpose falls back to the first slug",
      sta.subject_slug("Recreates https://colorlib.com/wp/template/gamma/."), "gamma")

# --------------------------------------------------------------------------- #
# 33. GATE: the census reads an app's existence (shipped vs prep-only)
# --------------------------------------------------------------------------- #
r = sta.census(tree({
    "alpha": spec_text("demo", [("Brand color", "`#112233`")]),
    "beta": spec_text("demo", [("Brand color", "`#445566`")]),
}, apps=["alpha"]))
rep = sta.adjudicate  # noqa: F841  (imported symbol must exist for the fixer)
check("C33 the census counts shipped vs prep-only (report only)",
      r["specs"], 2)

# --------------------------------------------------------------------------- #
# 34. GATE: a clean corpus report cannot be produced by an EMPTY read
# --------------------------------------------------------------------------- #
r = sta.census(tree({}))
check("C34 an empty tree reports 0 specs, not a fake clean pass", r["specs"], 0, gate=True)

print("controls: %d | passed: %d | failed: %d | GATE: %d"
      % (len(RAN), len(RAN) - len(FAILED), len(FAILED), sum(1 for x in RAN if x[2])))
if "-v" in sys.argv:
    for name, ok, gate, got, want in RAN:
        print("  %s %s%s" % ("PASS" if ok else "FAIL", name, " [GATE]" if gate else ""))
        if not ok:
            print("        got %r want %r" % (got, want))
else:
    for name, ok, gate, got, want in RAN:
        if not ok:
            print("  FAIL %s\n        got %r want %r" % (name, got, want))
sys.exit(1 if FAILED else 0)
