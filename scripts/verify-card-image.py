#!/usr/bin/env python3
"""verify-card-image.py — the CARD-IMAGE axis (TEMPLATES.md screenshot links).

Every row in `TEMPLATES.md` ends in the same citation shape:

    - [x] **Modal 02** · [splitform](https://…) — [colorlib](https://colorlib.com/wp/template/modal-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/modal-02.jpg)

That image is two things at once, and no other axis reads either: (a) the
**visual reference** `docs/replication.md` names as reference source #2 — the
only design evidence a prep has when the live preview is down or re-skinned —
and (b) the row's own **card image** as rendered by the marketplace.  Sixty-five
axes read the row's grammar, its markers, its deploy target, its spec's tokens
and its app; not one ever fetched the picture.

This script reads that layer, offline by default.

BUCKETS (each row exactly once, priority order)

  NO-IMAGE     the row carries no uploads URL at all — no reference, no picture
               (FLAG: the prep for that slug had no visual source)
  UNREACHABLE  `--network`: the URL raised / timed out — unmeasured, NOT dead
               (NOTE: a transport failure is not the host's verdict)
  DEAD         `--network`: HTTP status != 200 (FLAG)
  NOT-IMAGE    `--network`: 200 but the content-type is not `image/*` (FLAG:
               a WAF challenge or an error page behind a `.jpg` name)
  NONSTANDARD  the uploads URL is cited as a plain `[preview](…)` LINK, not as
               an `![preview](…)` image — the URL is right, the row does not
               inline it like the other 2,851 rows do (NOTE)
  PRESENT      cited in the house `![…](…)` form (and, with `--network`, 200
               with an image content-type)

URL-LEVEL CENSUS (printed after the row table, not a bucket)

  * distinct URLs, and the transfer formats the host actually serves — a `.jpg`
    name is not the format: measured 2026-10-25, 1,335 of 1,642 were served
    `image/avif`, so a prep that curls the file and hands it straight to a
    vision tool fails ("not a recognized image"); convert first.
  * URLs shared by rows of DIFFERENT slugs (a copy/paste that would show one
    design on another design's card).  Measured: 0 — every multi-row slug
    repeats its OWN image, which is the listing habit `-25a` already sized.

Usage
  python3 scripts/verify-card-image.py                  # offline row census
  python3 scripts/verify-card-image.py --network        # + probe every URL
  python3 scripts/verify-card-image.py --network --jobs 12 --json out.json
  python3 scripts/verify-card-image.py --self-test
  python3 scripts/verify-card-image.py --strict         # exit 1 when flags > 0

Exit 0 = report written (or, with `--strict`, no flags), 1 = flags under
`--strict`, 2 = usage / file error.
"""
from __future__ import annotations

import argparse
import collections
import json
import os
import re
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor

ROW_RX = re.compile(r"^- \[([ x~])\] \*\*(.+?)\*\*(.*)$")
SLUG_RX = re.compile(r"colorlib\.com/wp/template/([^/)\s]+)/")
IMG_RX = re.compile(r"!\[[^\]]*\]\((https?://[^)\s]+)\)")
UPLOAD_RX = re.compile(r"https?://colorlib\.com/wp/wp-content/uploads/[^\s)\]]+")
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0 Safari/537.36")
BUCKETS = ("NO-IMAGE", "UNREACHABLE", "DEAD", "NOT-IMAGE", "NONSTANDARD", "PRESENT")
FLAG_BUCKETS = ("NO-IMAGE", "DEAD", "NOT-IMAGE")


def rows_of(text: str):
    """(line_no, marker, name, slug, image_url, cited_as_image) per row."""
    out = []
    for i, line in enumerate(text.split("\n"), 1):
        m = ROW_RX.match(line)
        if not m:
            continue
        slug_m = SLUG_RX.search(line)
        if not slug_m:
            # A checkbox bullet with no ColorLib slug is not a design row; the
            # ROW-GRAMMAR axis owns it.  Every one of the 2,857 live rows has a
            # slug (measured 2026-10-25), so nothing is hidden by this guard.
            continue
        marker, name, tail = m.group(1), m.group(2).strip(), m.group(3)
        img_m = IMG_RX.search(line)
        up_m = UPLOAD_RX.search(line)
        url = (img_m.group(1) if img_m else up_m.group(0) if up_m else None)
        out.append({
            "line": i,
            "marker": marker,
            "name": name,
            "slug": slug_m.group(1) if slug_m else None,
            "url": url,
            "as_image": bool(img_m),
        })
    return out


def probe(url: str, timeout: float = 30.0):
    """(status, content_type, bytes) — status is an int or 'ERR <ExcName>'."""
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            body = r.read()
            return r.status, (r.headers.get("content-type") or "").split(";")[0].strip(), len(body)
    except urllib.error.HTTPError as exc:
        return exc.code, (exc.headers.get("content-type") or "").split(";")[0].strip(), 0
    except Exception as exc:                                  # noqa: BLE001
        return "ERR %s" % type(exc).__name__, "", 0


def classify(rows, probes=None):
    """Partition every row into exactly one bucket; returns (rows, counts)."""
    counts = collections.Counter()
    for r in rows:
        b = None
        if not r["url"]:
            b = "NO-IMAGE"
        elif probes is not None:
            status, ctype, _size = probes[r["url"]]
            if isinstance(status, str):
                b = "UNREACHABLE"
            elif status != 200:
                b = "DEAD"
            elif not ctype.startswith("image/"):
                b = "NOT-IMAGE"
        if b is None:
            b = "PRESENT" if r["as_image"] else "NONSTANDARD"
        r["bucket"] = b
        counts[b] += 1
    return rows, counts


def url_census(rows, probes=None):
    by_url = collections.defaultdict(set)
    for r in rows:
        if r["url"]:
            by_url[r["url"]].add(r["slug"])
    shared = {u: sorted(s for s in slugs if s) for u, slugs in by_url.items()
              if len({s for s in slugs if s}) > 1}
    out = {"distinct": len(by_url), "shared_across_slugs": shared,
           "formats": {}, "bytes": {}}
    if probes is not None:
        fmt = collections.Counter()
        for u in by_url:
            status, ctype, size = probes[u]
            fmt[ctype or ("status %s" % status)] += 1
            out["bytes"][u] = size
        out["formats"] = dict(fmt)
    return out


def run(text: str, network: bool = False, jobs: int = 12):
    rows = rows_of(text)
    probes = None
    if network:
        urls = sorted({r["url"] for r in rows if r["url"]})
        probes = {}
        with ThreadPoolExecutor(max_workers=jobs) as pool:
            for url, got in zip(urls, pool.map(probe, urls)):
                probes[url] = got
    rows, counts = classify(rows, probes)
    return rows, counts, url_census(rows, probes)


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="CARD-IMAGE axis over TEMPLATES.md")
    ap.add_argument("root", nargs="?", default=".", help="repo root (default: cwd)")
    ap.add_argument("--file", help="TEMPLATES.md path (default: <root>/TEMPLATES.md)")
    ap.add_argument("--network", action="store_true", help="probe every distinct URL")
    ap.add_argument("--jobs", type=int, default=12)
    ap.add_argument("--json", dest="json_out")
    ap.add_argument("--strict", action="store_true", help="exit 1 when flags > 0")
    ap.add_argument("--quiet", action="store_true")
    ap.add_argument("--self-test", action="store_true")
    args = ap.parse_args(argv)

    if args.self_test:
        return self_test()

    path = args.file or os.path.join(args.root, "TEMPLATES.md")
    try:
        text = open(path, encoding="utf-8").read()
    except OSError as exc:
        print("cannot read %s: %s" % (path, exc), file=sys.stderr)
        return 2

    rows, counts, census = run(text, network=args.network, jobs=args.jobs)
    flags = sum(counts[b] for b in FLAG_BUCKETS)
    notes = counts["UNREACHABLE"] + counts["NONSTANDARD"]

    if not args.quiet:
        print("# CARD-IMAGE census — %s%s" % (path, "" if args.network else " (offline)"))
        print("\nrows %d · slugs %d · distinct images %d"
              % (len(rows), len({r["slug"] for r in rows if r["slug"]}), census["distinct"]))
        print("\n| bucket | rows |")
        print("| --- | ---: |")
        for b in BUCKETS:
            print("| %s | %d |" % (b, counts[b]))
        print("| **flags** | **%d** | notes | %d |" % (flags, notes))
        for b in FLAG_BUCKETS:
            for r in rows:
                if r["bucket"] == b:
                    print("  %-9s line %-5d %-28s %s"
                          % (b, r["line"], r["slug"] or r["name"], r["url"] or "(no uploads URL)"))
        if census["formats"]:
            print("\nserved formats: %s"
                  % ", ".join("%s %d" % kv for kv in sorted(census["formats"].items())))
        if census["shared_across_slugs"]:
            print("\nshared across DIFFERENT slugs (%d):" % len(census["shared_across_slugs"]))
            for u, slugs in census["shared_across_slugs"].items():
                print("  %s -> %s" % (", ".join(slugs), u))

    if args.json_out:
        with open(args.json_out, "w", encoding="utf-8") as fh:
            json.dump({"rows": rows, "counts": dict(counts), "flags": flags,
                       "census": census}, fh, indent=1)

    return 1 if (args.strict and flags) else 0


def self_test() -> int:
    fixture = "\n".join([
        "- [x] **Modal 02** — [colorlib](https://colorlib.com/wp/template/modal-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/modal-02.jpg)",
        "- [x] **Modal 03** — [colorlib](https://colorlib.com/wp/template/modal-03/) · [snowdrift](https://snowdrift.free.componentdock.com)",
        "- [x] **Listed2** — [colorlib](https://colorlib.com/wp/template/listed2/) · [preview](https://colorlib.com/wp/wp-content/uploads/sites/2/listed2-free-template.jpg)",
        "## Section header, not a row",
    ])
    rows = rows_of(fixture)
    assert len(rows) == 3, rows
    assert rows[0]["as_image"] and rows[0]["slug"] == "modal-02"
    assert rows[1]["url"] is None, rows[1]
    assert rows[2]["url"] and not rows[2]["as_image"], rows[2]

    _rows, counts = classify(rows)
    assert counts["PRESENT"] == 1 and counts["NO-IMAGE"] == 1 and counts["NONSTANDARD"] == 1, counts

    good = "https://x/a.jpg"
    fake = {good: (200, "image/avif", 100),
            "https://x/dead.jpg": (404, "text/html", 0),
            "https://x/wall.jpg": (200, "text/html", 200),
            "https://x/err.jpg": ("ERR URLError", "", 0)}
    probe_rows = [
        {"line": 1, "marker": "x", "name": "a", "slug": "a", "url": good, "as_image": True},
        {"line": 2, "marker": "x", "name": "b", "slug": "b", "url": "https://x/dead.jpg", "as_image": True},
        {"line": 3, "marker": "x", "name": "c", "slug": "c", "url": "https://x/wall.jpg", "as_image": True},
        {"line": 4, "marker": "x", "name": "d", "slug": "d", "url": "https://x/err.jpg", "as_image": True},
    ]
    _rows, c2 = classify(probe_rows, probes=fake)
    assert (c2["PRESENT"], c2["DEAD"], c2["NOT-IMAGE"], c2["UNREACHABLE"]) == (1, 1, 1, 1), c2
    assert sum(c2.values()) == 4

    shared = url_census([
        {"slug": "a", "url": good}, {"slug": "a", "url": good}, {"slug": "b", "url": good},
    ])
    assert shared["shared_across_slugs"] == {good: ["a", "b"]}, shared
    print("self-test: 12 assertions OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
