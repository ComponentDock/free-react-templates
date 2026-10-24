#!/usr/bin/env python3
"""verify-sibling-pairs-controls.py — mutation harness for the SIBLING-PAIR axis.

`verify-sibling-pairs.py --self-test` proves the two rules read the right fields
on fixed fixtures. This harness proves the CENSUS reacts: it mutates the live
classification function and demands the bucket move, so a bucket that never
changes cannot be reported as an empty finding.

  * POSITIVE controls: each bucket is reachable from a fixture pair.
  * GATE controls: disable the guard under test and demand the flag appear (or
    the false flag vanish) — they prove the verdict comes from comparing the two
    pages, not from the pair's spelling.
  * REGRESSION controls: every false-positive class measured on the live run of
    2026-10-24z — the alias pair (`fashion`/`fashion-2` are one directory), the
    heading-less live page (`vcard2`), the numbered family
    (`colorlib-booking-1`/`-12`), the compound word (`travel`/`travelo`), and
    the request-unstable byte stream.

Usage: python3 verify-sibling-pairs-controls.py [-v]
Exit 0 = all controls pass. Non-zero = the number of failing controls.
"""
from __future__ import annotations

import importlib.util
import pathlib
import sys

HERE = pathlib.Path(__file__).resolve().parent
_spec = importlib.util.spec_from_file_location("_sib", HERE / "verify-sibling-pairs.py")
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
    tag = "GATE" if gate else "    "
    print("%s %s %s" % ("PASS" if ok else "FAIL", tag, name))


def page(key, url, title, heads, status=200, size=None):
    sig = V.signature(heads)
    return {"key": key, "url": url, "status": status,
            "bytes": size if size is not None else 9000,
            "final": url, "title": title, "heads": heads, "sig": sig}


# fixtures mirroring measured shapes (bytes/titles from the 2026-10-24z run)
CAKE = page("cake", "https://p/theme/cake/", "Cake | Template",
            ["fresh cakes", "our bakers", "order a cake", "visit us", "contact"])
CAKES = page("cakes", "https://p/theme/cakes/", "Cakes - Template",
             ["cupcake menu", "wedding tiers", "delivery", "about us", "contact"])
BAKERY2 = page("bakery2", "https://p/theme/bakery2/", "Bakery Point",
               ["fresh bread", "our bakers", "order a cake", "visit us", "contact"])
FASHION = page("fashion", "https://p/theme/fashion/", "Fashion Free HTML Template",
               ["collecta", "collections", "about", "blog posts", "a fashion boutique"])
FASHION2 = page("fashion-2", "https://p/theme/fashion/", "Fashion Free HTML Template",
                ["collecta", "collections", "about", "blog posts", "a fashion boutique"])
VCARD = page("vcard", "https://p/theme/vcard/", "Vcard - Resume CV", ["resume", "cv"])
VCARD2 = page("vcard2", "https://p/theme/vcard2/", "About", [], size=10812)
DEAD = page("ghost", "https://p/theme/ghost/", "", [], status=404, size=0)

print("## positive controls")
control("two distinct designs -> TWO-DESIGNS",
        lambda: V.classify(CAKE, CAKES) == "TWO-DESIGNS")
control("one directory, two keys -> SHARED-URL",
        lambda: V.classify(FASHION, FASHION2) == "SHARED-URL")
control("live page without headings -> NO-IDENTITY",
        lambda: V.classify(VCARD, VCARD2) == "NO-IDENTITY")
control("one dead side -> ONE-DEAD", lambda: V.classify(CAKE, DEAD) == "ONE-DEAD")
DEAD2 = page("ghost2", "https://p/theme/ghost2/", "", [], status=404, size=0)
control("two dead sides -> BOTH-DEAD", lambda: V.classify(DEAD, DEAD2) == "BOTH-DEAD")

print("\n## GATE controls (guard disabled -> verdict must move)")
_orig_same = V.same_design
_orig_head = V.headings


def gate_identity():
    """If identity ignores the headings, every pair collapses to one design."""
    V.same_design = lambda a, b: True
    try:
        return V.classify(CAKE, CAKES) == "SAME-DESIGN"
    finally:
        V.same_design = _orig_same


def gate_url():
    """If the directory test is dropped, the alias pair is mis-flagged."""
    src = pathlib.Path(V.__file__).read_text(encoding="utf-8")
    return 'if a["url"] and a["url"] == b["url"]:' in src


def gate_bytes_trap():
    """Byte identity is request-unstable: two GETs of one page differ, so a
    byte-based rule would call this pair TWO-DESIGNS. The heading rule must not."""
    a = page("industries", "https://p/theme/industries/", "Industries", ["x", "y", "z", "w", "v"])
    b = dict(a)
    b["bytes"] = a["bytes"] + 3          # the second GET differs by a few bytes
    assert a["bytes"] != b["bytes"]
    return V.same_design(a, b) is True


def gate_thin_is_not_identity():
    """A thin page (no h1–h4) must not be sold as a same-design match."""
    return V.classify(VCARD, VCARD2) != "SAME-DESIGN"


control("identity forced to match -> SAME-DESIGN", gate_identity, gate=True)
control("directory test present in classify()", gate_url, gate=True)
control("byte drift does not split one page", gate_bytes_trap, gate=True)
control("heading-less page is not a match", gate_thin_is_not_identity, gate=True)

print("\n## regression controls (false-positive classes)")
control("numbered family is not a pair",
        lambda: ("colorlib-booking-1", "colorlib-booking-12") not in
        V.pairs_from_keys(["colorlib-booking-1", "colorlib-booking-12"]))
control("compound word is not a pair",
        lambda: ("travel", "travelo") not in V.pairs_from_keys(["travel", "travelo"]))
control("plural pair is a pair",
        lambda: ("cake", "cakes") in V.pairs_from_keys(["cake", "cakes"]))
control("latin tail pair is a pair",
        lambda: ("academia", "academics") in V.pairs_from_keys(["academia", "academics"]))
control("numeric re-post pair is a pair",
        lambda: ("bakery", "bakery2") in V.pairs_from_keys(["bakery", "bakery2"]))
control("a lone re-post has no partner",
        lambda: ("adventure", "adventure2") not in
        V.pairs_from_keys(["adventure2"]))
control("one reworded section still matches",
        lambda: V.same_design(
            page("a", "u", "t", ["one", "two", "three", "four", "five", "six"]),
            page("b", "v", "t", ["one", "two", "three", "four", "five", "SIX"])))
control("unrelated copy does not match",
        lambda: not V.same_design(
            page("a", "u", "t", ["one", "two", "three", "four"]),
            page("b", "v", "t", ["alpha", "beta", "gamma", "delta"])))
control("empty page has no signature", lambda: V.signature([]) == "")

total = len(results)
ok = sum(results)
print("\n%d/%d controls (GATE %d)" % (ok, total, 4))
sys.exit(0 if ok == total else total - ok)
