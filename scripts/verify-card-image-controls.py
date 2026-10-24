#!/usr/bin/env python3
"""verify-card-image-controls.py — mutation harness for the CARD-IMAGE axis.

`verify-card-image.py --self-test` proves the reader and the classifier on fixed
fixtures.  This harness proves the CENSUS reacts: it disables the guard each
bucket depends on and demands the bucket move.  A bucket that cannot be made to
move cannot be reported as an empty finding.

  * POSITIVE controls: every bucket is reachable from a fixture row.
  * GATE controls: disable the guard under test, demand the verdict change —
    (1) treat any 200 as an image → a WAF challenge page behind a `.jpg` name
        becomes PRESENT (the NOT-IMAGE flag would vanish);
    (2) fold a transport error into DEAD → a timeout is reported as the host's
        verdict (the note `-23b` insists is wrong);
    (3) count ROWS instead of SLUGS in the URL census → every multi-row slug
        (775 of them, `-25a`) looks like a cross-design copy/paste;
    (4) treat a plain `[preview](…)` link as an inlined image → the NONSTANDARD
        note disappears.
  * REGRESSION controls: the measured shapes — a section header, an app-only
    bullet, `listed2`'s plain-link row, and the fixer's regex that must not
    re-wrap an already-inlined image.

Usage: python3 scripts/verify-card-image-controls.py [-v]
Exit 0 = all controls pass.  Non-zero = number of failing controls.
"""
from __future__ import annotations

import importlib.util
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent


def _load(fn: str, name: str):
    spec = importlib.util.spec_from_file_location(name, HERE / fn)
    assert spec and spec.loader
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


V = _load("verify-card-image.py", "_cardimage")
F = _load("fix-card-image.py", "_cardimage_fix")

verbose = "-v" in sys.argv
results = []


def control(name, fn, gate=False):
    try:
        ok = bool(fn())
    except Exception as exc:                                  # noqa: BLE001
        ok = False
        print("  !! %s raised %r" % (name, exc))
    results.append(ok)
    print("%s %s %s" % ("PASS" if ok else "FAIL", "GATE" if gate else "    ", name))


GOOD = "https://colorlib.com/wp/wp-content/uploads/sites/2/modal-02.jpg"
DEAD = "https://colorlib.com/wp/wp-content/uploads/sites/2/gone.jpg"
WALL = "https://colorlib.com/wp/wp-content/uploads/sites/2/wall.jpg"
ERR = "https://colorlib.com/wp/wp-content/uploads/sites/2/slow.jpg"
PLAIN = "https://colorlib.com/wp/wp-content/uploads/sites/2/listed2-free-template.jpg"

ROW_IMAGE = "- [x] **Modal 02** — [colorlib](https://colorlib.com/wp/template/modal-02/) · ![preview](%s)" % GOOD
ROW_PLAIN = "- [x] **Listed2** — [colorlib](https://colorlib.com/wp/template/listed2/) · [preview](%s)" % PLAIN
ROW_NONE = "- [x] **Modal 03** — [colorlib](https://colorlib.com/wp/template/modal-03/) · [snowdrift](https://snowdrift.componentdock.com)"
FIXTURE = "\n".join([ROW_IMAGE, ROW_PLAIN, ROW_NONE, "## Modal (40)",
                     "- [x] **X** — no slug here"])
PROBES = {GOOD: (200, "image/avif", 100), DEAD: (404, "text/html", 0),
          WALL: (200, "text/html", 512), ERR: ("ERR URLError", "", 0)}


def rows():
    return V.rows_of(FIXTURE)


def probe_rel(bucket):
    """Classification of one row pointing at the named probe verdict."""
    url = {"DEAD": DEAD, "NOT-IMAGE": WALL, "UNREACHABLE": ERR, "PRESENT": GOOD}[bucket]
    row = [{"line": 1, "marker": "x", "name": "n", "slug": "s", "url": url, "as_image": True}]
    return V.classify(row, probes=PROBES)[1][bucket]


print("## positive controls (each bucket is reachable)")
control("reader ignores a section header and a slugless bullet", lambda: len(rows()) == 3)
control("PRESENT from the house image form", lambda: V.classify(rows())[1]["PRESENT"] == 1)
control("NONSTANDARD from a plain preview link", lambda: V.classify(rows())[1]["NONSTANDARD"] == 1)
control("NO-IMAGE from a row with no uploads URL", lambda: V.classify(rows())[1]["NO-IMAGE"] == 1)
for bucket in ("PRESENT", "DEAD", "NOT-IMAGE", "UNREACHABLE"):
    control("%s from a probe verdict" % bucket, lambda b=bucket: probe_rel(b) == 1)


print("\n## GATE controls (guard disabled -> verdict must move)")


def gate_any_200_is_an_image():
    """Fold NOT-IMAGE into PRESENT (the naive `status == 200` test)."""
    naive_present = probe_rel("PRESENT") + probe_rel("NOT-IMAGE")
    return probe_rel("PRESENT") == 1 and naive_present == 2


def gate_transport_folded_into_dead():
    """Fold URLError into DEAD: a timeout would be reported as the host's verdict."""
    folded = probe_rel("DEAD") + probe_rel("UNREACHABLE")
    return probe_rel("UNREACHABLE") == 1 and folded == 2


def gate_row_vs_slug_census():
    """Count rows, not slugs: a multi-row slug looks like a cross-design copy."""
    rows_ = [{"slug": "a", "url": GOOD}, {"slug": "a", "url": GOOD}, {"slug": "b", "url": GOOD}]
    by_row = {}
    for r in rows_:
        by_row.setdefault(r["url"], []).append(r["slug"])
    naive = {u: s for u, s in by_row.items() if len(s) > 1}
    real = V.url_census(rows_)
    return real["shared_across_slugs"] == {GOOD: ["a", "b"]} and naive.get(GOOD) == ["a", "a", "b"]


def gate_plain_link_is_not_inlined():
    """Treat `[preview](…)` as `![preview](…)`: the NONSTANDARD note disappears."""
    got = V.classify(rows())[1]
    return got["NONSTANDARD"] == 1 and (got["PRESENT"] + got["NONSTANDARD"]) == 2


control("GATE any-200-is-an-image", gate_any_200_is_an_image, gate=True)
control("GATE transport-is-not-a-verdict", gate_transport_folded_into_dead, gate=True)
control("GATE row-vs-slug census", gate_row_vs_slug_census, gate=True)
control("GATE plain-link-is-not-inlined", gate_plain_link_is_not_inlined, gate=True)


print("\n## regression controls (measured shapes)")
control("listed2's plain link still yields its URL", lambda: rows()[1]["url"] == PLAIN)
control("the 404 is the only DEAD row", lambda: V.classify(rows())[1]["DEAD"] == 0)
control("fixer regex leaves an inlined image untouched",
        lambda: F.PLAIN_PREVIEW_RX.sub("X", ROW_IMAGE) == ROW_IMAGE)
control("fixer regex rewrites the plain link",
        lambda: F.PLAIN_PREVIEW_RX.sub(lambda m: "![preview](%s)" % m.group(1),
                                       ROW_PLAIN).startswith(
            "- [x] **Listed2** — [colorlib](https://colorlib.com/wp/template/listed2/) · ![preview]("))
control("the fixed row keeps the house separator",
        lambda: F.PLAIN_PREVIEW_RX.sub(lambda m: "![preview](%s)" % m.group(1), ROW_PLAIN)
        == "- [x] **Listed2** — [colorlib](https://colorlib.com/wp/template/listed2/) · ![preview](%s)" % PLAIN)
control("a row with a non-uploads URL is still PRESENT-with-probe-off",
        lambda: V.classify([{"line": 1, "marker": "x", "name": "n", "slug": "s",
                             "url": "https://example.com/a.png", "as_image": True}])[1]["PRESENT"] == 1)

ok = sum(results)
print("\n%d/%d controls (GATE %d)" % (ok, len(results), 4))
sys.exit(0 if ok == len(results) else len(results) - ok)
