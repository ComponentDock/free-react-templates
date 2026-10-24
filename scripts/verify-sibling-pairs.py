#!/usr/bin/env python3
"""verify-sibling-pairs.py — the SIBLING-PAIR axis for catalogue near-duplicates.

`verify-catalog-collisions.py` only sees two posts when they share one `url`.
This script reads the other half of that class: pairs of catalogue keys whose
spelling differs only by an inflection — a plural (`cake`/`cakes`,
`shopper`/`shoppers`), a numeric re-post (`bakery`/`bakery2`), or the latin
`-a` / `-ics` tail (`academia`/`academics`) — and which therefore reach
DIFFERENT demo directories, so no collision ever fires.

The queue's premise (`docs/catalog-collisions.md` §Queue 5) was: "where a pair
has two live directories nothing is broken; where the second 404s the post is
dead and its row is a false `[x]`". Measured 2026-10-24z over 31 pairs / 62
directories: every side answers 200 and every pair renders a DIFFERENT document,
so the class holds no false `[x]`. The census now exists so that claim is
re-measurable instead of remembered.

Identity is decided on a **heading signature** (the sorted, normalised set of
`<h1>`–`<h4>` texts), never on the raw page digest: a preview page's bytes are
request-unstable (a repeated GET of `theme/industries/` returned two different
sha256s 2026-10-24z), so a byte comparison would report "two designs" for one
document and vice versa.

Buckets (partition, each pair exactly once):
    SHARED-URL    both keys resolve to ONE directory — the collision scanner's
                  turf (`docs/catalog-collisions.md`), reported here only so the
                  census is complete
    TWO-DESIGNS   both live, different heading signature (healthy; nothing to do)
    SAME-DESIGN   both live at DIFFERENT urls with the same heading signature —
                  one design listed twice (flag: the second key adds a row, not
                  a template)
    NO-IDENTITY   both live, but one page carries no `<h1>`–`<h4>` at all, so the
                  heading signature cannot decide identity (note, not a flag)
    ONE-DEAD      exactly one side is not a live page (flag: that row cannot be
                  re-measured and its `[x]` is unproven)
    BOTH-DEAD     neither side is live (flag)

Usage:
    python3 scripts/verify-sibling-pairs.py                # census
    python3 scripts/verify-sibling-pairs.py --strict       # exit 1 on any flag
    python3 scripts/verify-sibling-pairs.py --pair cake:cakes
    python3 scripts/verify-sibling-pairs.py --json
    python3 scripts/verify-sibling-pairs.py --self-test    # controls, offline

Read-only: it never edits specs, docs, TEMPLATES.md or apps.
"""
from __future__ import annotations

import argparse
import hashlib
import html
import json
import os
import re
import sys
import urllib.error
import urllib.request

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(REPO, "scripts"))

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")
MIN_BYTES = 500          # thin `/theme/bootstrap/*` demos are real (1,051 B)
SHARED_HEADING_SHARE = 0.8

# resolved 2026-10-24z; these two share a directory and belong to the
# collision scanner (kept out of the flag count, shown for completeness)
KNOWN_SHARED = {("listed", "listed2"), ("medical", "medical-2")}


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            return r.status, r.read(), r.geturl()
    except urllib.error.HTTPError as e:
        return e.code, b"", url
    except Exception:
        return "ERR", b"", url


# ---------------------------------------------------------------- candidates

def variants(key):
    """The inflections a near-duplicate listing uses for this key."""
    out = {key + "s", key + "es", key + "2", key + "-2"}
    if key.endswith("y"):
        out.add(key[:-1] + "ies")
    if key.endswith("a"):
        out.add(key[:-1] + "cs")           # academia -> academics
    if key.endswith("e"):
        out.add(key[:-1] + "ing")
    return out


def is_numbered_family(key):
    """`colorlib-booking-1` / `colorlib-booking-12` are a numbered series, not
    a re-post: the shorter key already ends in a digit."""
    return bool(re.search(r"\d$", key))


def pairs_from_keys(keys):
    """(shorter, longer) pairs whose spelling differs only by an inflection."""
    keys = set(keys)
    out = set()
    for k in keys:
        for w in variants(k):
            if w in keys and w != k and not is_numbered_family(k):
                out.add((k, w) if len(k) <= len(w) else (w, k))
    return sorted(out)


def norm_url(url):
    if not isinstance(url, str) or not url:
        return None
    if url.startswith("http"):
        return url.rstrip("/") + "/"
    if re.match(r"^[\w./-]+$", url):
        return "https://preview.colorlib.com/theme/" + url.strip("/") + "/"
    return None


# ------------------------------------------------------------------ identity

_TAG = re.compile(r"<[^>]+>")
_WS = re.compile(r"\s+")


def text_of(fragment):
    return _WS.sub(" ", html.unescape(_TAG.sub(" ", fragment))).strip()


def headings(body):
    """The page's `<h1>`–`<h4>` texts, lowercased and de-duplicated."""
    out = []
    for m in re.finditer(r"<(h[1-4])\b[^>]*>(.*?)</\1>", body, re.S | re.I):
        t = text_of(m.group(2)).lower()
        if t and len(t) < 160:
            out.append(t)
    return sorted(set(out))


def signature(heads):
    if not heads:
        return ""
    return hashlib.sha1("\n".join(heads).encode("utf-8", "replace")).hexdigest()[:12]


def same_design(a, b):
    """Two pages are one design when their headings substantially agree."""
    if not a["heads"] or not b["heads"]:
        return False
    if a["sig"] == b["sig"]:
        return True
    sa, sb = set(a["heads"]), set(b["heads"])
    inter = len(sa & sb)
    if inter < 4:
        return False
    return inter / max(len(sa), len(sb)) >= SHARED_HEADING_SHARE


def measure(key, url):
    code, body, final = fetch(url)
    page = {"key": key, "url": url, "status": code, "bytes": len(body),
            "final": final, "title": "", "heads": [], "sig": ""}
    if str(code) == "200" and len(body) > MIN_BYTES:
        m = re.search(rb"<title[^>]*>(.*?)</title>", body, re.S | re.I)
        page["title"] = text_of(m.group(1).decode("utf-8", "replace"))[:80] if m else ""
        page["heads"] = headings(body.decode("utf-8", "replace"))
        page["sig"] = signature(page["heads"])
    else:
        page["status"] = code if code != 200 else "THIN"
    return page


def classify(a, b):
    live_a = str(a["status"]) == "200" and a["bytes"] >= MIN_BYTES
    live_b = str(b["status"]) == "200" and b["bytes"] >= MIN_BYTES
    # same DIRECTORY: the collision scanner's bucket, whatever the keys are
    if a["url"] and a["url"] == b["url"]:
        return "SHARED-URL"
    if live_a and live_b:
        if not a["sig"] or not b["sig"]:
            return "NO-IDENTITY"
        return "SAME-DESIGN" if same_design(a, b) else "TWO-DESIGNS"
    if live_a or live_b:
        return "ONE-DEAD"
    return "BOTH-DEAD"


# --------------------------------------------------------------------- report

def census(urls, only=None):
    pairs = ([tuple(only.split(":"))] if only else pairs_from_keys(urls))
    seen, out = {}, []
    for a, b in pairs:
        row = {"pair": (a, b), "sides": []}
        for k in (a, b):
            if k not in seen:
                seen[k] = measure(k, urls[k]) if k in urls else {
                    "key": k, "url": "", "status": "NO-CATALOG", "bytes": 0,
                    "final": "", "title": "", "heads": [], "sig": ""}
            row["sides"].append(seen[k])
        row["bucket"] = classify(*row["sides"])
        out.append(row)
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--strict", action="store_true", help="exit 1 on any flag")
    ap.add_argument("--pair", help="only this pair, e.g. cake:cakes")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--self-test", action="store_true")
    args = ap.parse_args()
    if args.self_test:
        return self_test()

    import catalog_resolve as CR
    cache = os.path.join(os.environ.get("TMPDIR", "/tmp"), "catalog-map.json")
    urls = CR.urls(fetch, cache)
    if not urls:
        print("catalog map unavailable (host down or Cloudflare wall) — retry later")
        return 2
    rows = census(urls, only=args.pair)
    if args.json:
        print(json.dumps(rows, indent=1))
        return 0
    buckets = {}
    for r in rows:
        buckets.setdefault(r["bucket"], []).append(r)
    for name in ("ONE-DEAD", "BOTH-DEAD", "SAME-DESIGN", "NO-IDENTITY",
                 "TWO-DESIGNS", "SHARED-URL"):
        group = buckets.get(name, [])
        print("\n## %s (%d)" % (name, len(group)))
        for r in group:
            a, b = r["sides"]
            print("  %-22s %-40s %s %6s  %r" % (a["key"], a["url"], a["status"], a["bytes"], a["title"][:44]))
            print("  %-22s %-40s %s %6s  %r" % (b["key"], b["url"], b["status"], b["bytes"], b["title"][:44]))
            if name == "SAME-DESIGN":
                print("     shared headings: %s" % "; ".join(sorted(set(a["heads"]) & set(b["heads"]))[:4]))
    flags = sum(len(buckets.get(k, [])) for k in ("ONE-DEAD", "BOTH-DEAD", "SAME-DESIGN"))
    print("\npairs: %d · directories probed: %d · TWO-DESIGNS %d · SAME-DESIGN %d "
          "· NO-IDENTITY %d · ONE-DEAD %d · BOTH-DEAD %d · SHARED-URL %d"
          % (len(rows), len({s["key"] for r in rows for s in r["sides"]}),
             len(buckets.get("TWO-DESIGNS", [])), len(buckets.get("SAME-DESIGN", [])),
             len(buckets.get("NO-IDENTITY", [])),
             len(buckets.get("ONE-DEAD", [])), len(buckets.get("BOTH-DEAD", [])),
             len(buckets.get("SHARED-URL", []))))
    print("flags: %d" % flags)
    return 1 if (args.strict and flags) else 0


# -------------------------------------------------------------------- controls

PAGE_A = """<html><title>Bakery</title><body>
<h1>Fresh bread every morning</h1><h2>Our menu</h2><h3>Opening hours</h3>
<h3>Our story</h3><h4>Visit us</h4><h4>Find us</h4>
</body></html>"""
# same design, a re-post: one section is reworded, the structure is identical
PAGE_A_REPOST = PAGE_A.replace("Our menu", "Today's menu")
PAGE_B = """<html><title>Bakery Point</title><body>
<h1>Cakes for every party</h1><h2>Order online</h2><h3>Delivery</h3><h4>Contact</h4>
</body></html>"""


def self_test():
    """Controls for the candidate rule and the identity rule (offline)."""
    got = []

    def check(label, want, have):
        ok = want == have
        got.append(ok)
        print("%s %-52s have=%r want=%r" % ("PASS" if ok else "FAIL", label, have, want))

    keys = ["cake", "cakes", "bakery", "bakery2", "adventure2",
            "colorlib-booking-1", "colorlib-booking-12", "academia", "academics",
            "travel", "travelo"]
    found = pairs_from_keys(keys)
    check("plural pair", ("cake", "cakes") in found, True)
    check("numeric re-post pair", ("bakery", "bakery2") in found, True)
    check("latin tail pair", ("academia", "academics") in found, True)
    check("lone re-post has no partner", ("adventure", "adventure2") in found, False)
    check("numbered family excluded",
          ("colorlib-booking-1", "colorlib-booking-12") in found, False)
    check("compound word is not a pair", ("travel", "travelo") in found, False)

    def page(body):
        h = headings(body)
        return {"heads": h, "sig": signature(h), "status": 200}

    check("identical document -> one design", True,
          same_design(page(PAGE_A), page(PAGE_A)))
    check("re-post with one section reworded -> one design", True,
          same_design(page(PAGE_A), page(PAGE_A_REPOST)))
    check("different design -> two designs", False,
          same_design(page(PAGE_A), page(PAGE_B)))

    # GATE: identity must come from the headings, not from the bytes — the
    # re-post page has different bytes and must still read as one design
    bytes_differ = hashlib.sha256(PAGE_A.encode()).hexdigest() != \
        hashlib.sha256(PAGE_A_REPOST.encode()).hexdigest()
    check("GATE bytes differ but design matches", True,
          bytes_differ and same_design(page(PAGE_A), page(PAGE_A_REPOST)))

    # the measured false-positive class: the same URL twice returns two byte
    # streams; heading identity is stable, so both sides still read as one page
    check("heading identity is request-stable", signature(headings(PAGE_A)),
          signature(headings(PAGE_A + "\n<!-- nonce 12345 -->")))
    check("thin page has no signature", "", signature(headings("<html><body></body></html>")))

    # the alias shape measured on 2026-10-24z: `fashion` and `fashion-2` are two
    # KEYS for one directory — the collision scanner's bucket, never a flag here
    check("same directory -> SHARED-URL", "SHARED-URL",
          classify({"key": "fashion", "url": "https://x/fashion/", "status": 200,
                    "bytes": 26945, "heads": ["a", "b"], "sig": "1"},
                   {"key": "fashion-2", "url": "https://x/fashion/", "status": 200,
                    "bytes": 26945, "heads": ["a", "b"], "sig": "1"}))
    check("two dirs + same headings -> SAME-DESIGN", "SAME-DESIGN",
          classify({"key": "a", "url": "https://x/a/", "status": 200, "bytes": 9000,
                    "heads": ["p", "q", "r", "s"], "sig": "1"},
                   {"key": "b", "url": "https://x/b/", "status": 200, "bytes": 9000,
                    "heads": ["p", "q", "r", "s"], "sig": "1"}))
    # vcard2 (10,812 B, `<title>About</title>`) carries no h1–h4: live, but the
    # signature cannot decide identity — a note, not a false "dead"
    check("live page with no headings -> NO-IDENTITY", "NO-IDENTITY",
          classify({"key": "vcard", "url": "https://x/vcard/", "status": 200,
                    "bytes": 8377, "heads": ["a"], "sig": "1"},
                   {"key": "vcard2", "url": "https://x/vcard2/", "status": 200,
                    "bytes": 10812, "heads": [], "sig": ""}))
    dead = classify({"key": "a", "url": "u", "status": 404, "bytes": 0,
                     "heads": [], "sig": ""},
                    {"key": "b", "url": "v", "status": 200, "bytes": 900,
                     "heads": ["x"], "sig": "s"})
    check("one dead side -> ONE-DEAD", "ONE-DEAD", dead)
    check("both dead -> BOTH-DEAD", "BOTH-DEAD",
          classify({"key": "a", "url": "u", "status": 404, "bytes": 0, "heads": [], "sig": ""},
                   {"key": "b", "url": "v", "status": 404, "bytes": 0, "heads": [], "sig": ""}))
    print("\n%d/%d controls" % (sum(got), len(got)))
    return 0 if all(got) else 1


if __name__ == "__main__":
    sys.exit(main())
