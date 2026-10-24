#!/usr/bin/env python3
"""verify-row-multiplicity-controls.py — mutation harness for the ROW-MULTIPLICITY axis.

`verify-row-multiplicity.py --self-test` proves the classifiers read the right
fields on fixed fixtures. This harness proves the CENSUS reacts: it flips the
module guards and swaps the I/O layer for fixtures, then demands the bucket (or
the network verdict) MOVE. A bucket that never changes cannot be reported as an
empty finding.

  * POSITIVE  — every offline bucket is reachable from a fixture.
  * GATE      — turn the rule under test off and the verdict must move: the
                multiplicity trigger, the all-forms claim set, the normalisation
                guard, the subdomain (not label) app pointer, and the exclusive
                copy evidence that decides which record is stale.
  * REGRESSION— the false-positive shapes measured on the 2026-10-25a run: the
                boilerplate-only match (`halo`), the paraphrase-only app
                (`satner`), the 1-phrase touch on the stale side (`glint`), and
                the dead preview that must not win by scoring 0 (`juli`).

Usage: python3 scripts/verify-row-multiplicity-controls.py [-v]
Exit 0 = all controls pass. Non-zero = the number of failing controls.
"""
from __future__ import annotations

import importlib.util
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location("_rm", HERE / "verify-row-multiplicity.py")
V = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(V)

verbose = "-v" in sys.argv
results = []


def control(name, fn, gate=False):
    try:
        ok = bool(fn())
    except Exception as exc:                      # noqa: BLE001 - a control crashed
        ok = False
        print("  !! %s raised %r" % (name, exc))
    results.append(ok)
    print("%s %s %s" % ("PASS" if ok else "FAIL", "GATE" if gate else "    ", name))


def row(line, slug, app, cat="A", name="N"):
    return {"line": line, "name": name, "slug": slug, "app": app, "cat": cat,
            "status": "x"}


def spec_txt(*urls):
    return "\n".join("see %s" % u for u in urls)


# --- fixtures: rows + specs ------------------------------------------------
ROWS = {
    "dup": [row(1, "dup", "one", "A"), row(2, "dup", "two", "B")],
    "solo": [row(3, "solo", "one", "A"), row(4, "solo", "one", "B")],
    "old": [row(5, "old", "one", "A"), row(6, "old", "two", "B")],
    "gone": [row(7, "gone", "one", "A"), row(8, "gone", "two", "B")],
    "one-row": [row(9, "one-row", "one")],
}
SPECS = {
    "one": {"claims": {"dup", "solo", "old"}, "primary": "dup", "path": ""},
    "two": {"claims": {"dup"}, "primary": "dup", "path": ""},
}
KNOWN = {"dup", "solo", "old", "gone", "one-row"}

print("## positive controls")
control("two claimers -> DUPLICATE",
        lambda: V.classify("dup", ROWS["dup"], SPECS, KNOWN)["bucket"] == "DUPLICATE")
control("one app + claim -> CONSISTENT",
        lambda: V.classify("solo", ROWS["solo"], SPECS, KNOWN)["bucket"] == "CONSISTENT")
control("one claimer of two -> ROW-POINTER",
        lambda: V.classify("old", ROWS["old"], SPECS, KNOWN)["bucket"] == "ROW-POINTER")
control("no claimer -> SLUG-ORPHAN",
        lambda: V.classify("gone", ROWS["gone"], SPECS, KNOWN)["bucket"] == "SLUG-ORPHAN")
control("app that does not claim its only slug -> SPEC-STALE",
        lambda: V.classify("solo", ROWS["solo"],
                           {"one": {"claims": {"gone"}, "primary": "gone", "path": ""}},
                           KNOWN)["bucket"] == "SPEC-STALE")

print("\n## GATE controls (flip the rule, the bucket must move)")
control("multiplicity trigger off -> a 2-row slug reads SINGLE-ROW",
        lambda: (V.GUARDS.__setitem__("row_multi", False),
                 V.classify("solo", ROWS["solo"], SPECS, KNOWN)["bucket"] == "SINGLE-ROW",
                 V.GUARDS.__setitem__("row_multi", True))[1], gate=True)


def _first_form_only():
    """A spec whose slug appears only in its SECOND provenance form."""
    text = spec_txt("https://colorlib.com/wp/template/other/",
                    "https://preview.colorlib.com/theme/solo/")
    claims, _ = V.spec_claims(text)
    all_forms = "solo" in claims
    V.GUARDS["claim_set"] = False
    try:
        first_only = "solo" in V.spec_claims(text)[0]
    finally:
        V.GUARDS["claim_set"] = True
    return all_forms and not first_only


control("all-forms claim set is what finds the slug", _first_form_only, gate=True)


def _normalised_near_miss():
    """`villas` must not claim `villa`; an exact form must."""
    near = {"claims": {"villas"}, "primary": "villas", "path": ""}
    exact = {"claims": {"villa"}, "primary": "villa", "path": ""}
    return (not V.claims_slug(near, "villa", {"villa", "villas"})
            and V.claims_slug(exact, "villa", {"villa"}))


control("no normalised false positive (villas != villa)", _normalised_near_miss, gate=True)


def _subdomain_not_label():
    """Rows carry `[Atelier]`, `[Villa]`; the app is the SUBDOMAIN."""
    line = ("- [x] **Atelier Studio** — [colorlib](https://colorlib.com/wp/template/solo/) "
            "· [Villa](https://villa.free.componentdock.com) · ![preview](x.jpg)")
    got = V.ROW_APP.search(line)
    return got is not None and got.group(1).lower() == "villa"


control("row app = subdomain, not the link text", _subdomain_not_label)

print("\n## network verdict controls (I/O swapped for fixtures)")
BODIES = {
    "https://p/theme/dup/": "Power Your Home With Clean Energy Our Services Get A Quote",
    "https://p/theme/old/": "Family Law We are here to help Free Consultation",
    "https://p/theme/other/": "Studio Grunt Design code and words About us",
}
COPY = {
    "one": ["Power Your Home With Clean Energy", "Our Services"],
    "two": ["Power Your Home With Clean Energy", "Our Services"],
    "halfA": ["Power Your Home With Clean Energy", "Read more"],
    "halfB": ["Read more", "Get Started"],
    "solo": ["Family Law", "We are here to help"],
    "wrong": ["Studio Grunt", "Design code and words"],
    "nothing": ["Unrelated headline nobody wrote"],
    "intruder": ["Family Law", "We are here to help"],
    "tourist": ["Family Law", "Read more"],
}
_real_fetch, _real_copy, _real_preview = V.fetch, V.app_copy, V.preview_url


def _fake_fetch(url):
    body = BODIES.get(url)
    return (200, body) if body else (404, "")


def _fake_copy(path):
    app = pathlib.Path(path).name
    return COPY.get(app, [])


V.fetch = _fake_fetch
V.app_copy = _fake_copy
V.preview_url = lambda slug: "https://p/theme/%s/" % slug


def rec(slug, apps, claimers, stale=(), bucket="DUPLICATE"):
    return {"slug": slug, "apps": list(apps), "claimers": list(claimers),
            "stale": list(stale), "bucket": bucket, "rows": 2, "lines": [1, 2],
            "names": [], "cats": 2, "notes": [], "flags": []}


SPECS_N = {"one": {"claims": {"dup"}, "primary": "dup", "path": ""},
           "two": {"claims": {"dup"}, "primary": "dup", "path": ""}}

control("two apps on one body -> CONFIRMED",
        lambda: V.adjudicate(".", rec("dup", ["one", "two"], ["one", "two"]),
                             SPECS_N)["verdict"] == "CONFIRMED")

V.app_copy = lambda p: COPY.get("halfA" if pathlib.Path(p).name == "one" else "halfB", [])
control("one shared phrase only (halo shape) is NOT a duplicate",
        lambda: V.adjudicate(".", rec("dup", ["one", "two"], ["one", "two"]),
                             SPECS_N)["verdict"] != "CONFIRMED", gate=True)
V.app_copy = _fake_copy

control("stale app that matches the slug -> POINTER-WRONG",
        lambda: V.adjudicate(".", rec("old", ["intruder", "solo"], ["solo"],
                                      ["intruder"], "ROW-POINTER"),
                             SPECS_N)["verdict"] == "POINTER-WRONG", gate=True)

control("1-phrase touch on the stale side (glint shape) stays CONFIRMED",
        lambda: V.adjudicate(".", rec("old", ["tourist", "solo"], ["solo"],
                                      ["tourist"], "ROW-POINTER"),
                             SPECS_N)["verdict"] == "CONFIRMED")

SPECS_W = {"wrong": {"claims": {"other"}, "primary": "other", "path": ""}}


def _wrong_design():
    r = V.adjudicate(".", rec("old", ["wrong"], [], (), "SPEC-STALE"), SPECS_W)
    return r["verdict"] == "APP-WRONG-DESIGN" and r["compare"]["spec_slug"] == "other"


control("app matches its spec's design -> APP-WRONG-DESIGN", _wrong_design)


def _dead_side_cannot_win():
    """`juli`: the row's preview is dead, the spec's design is live and matches."""
    def fetch(url):
        if url.endswith("/old/"):
            return 404, ""
        return 200, BODIES["https://p/theme/other/"]
    V.fetch = fetch
    V.app_copy = lambda p: COPY["wrong"]
    try:
        r = V.adjudicate(".", rec("old", ["wrong"], [], (), "SPEC-STALE"), SPECS_W)
    finally:
        V.fetch, V.app_copy = _fake_fetch, _fake_copy
    return r["verdict"] == "APP-WRONG-DESIGN" and r["compare"]["row_excl"] == 0


control("a dead preview never wins by scoring 0", _dead_side_cannot_win, gate=True)

V.fetch, V.app_copy, V.preview_url = _real_fetch, _real_copy, _real_preview

print("\n%d/%d controls passed" % (sum(results), len(results)))
sys.exit(0 if all(results) else len(results) - sum(results))
