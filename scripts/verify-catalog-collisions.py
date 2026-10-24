#!/usr/bin/env python3
"""verify-catalog-collisions.py — one demo directory, two different designs.

The preview host's catalogue map (`assets/js/catalog-products-*.js`) can key two
DIFFERENT ColorLib posts to ONE demo directory. When that happens the directory
can only serve one of them, so every prep citing it (and every app built from
that prep) reproduces whichever design the host currently renders — which may not
be the design the row's screenshot shows.

Measured 2026-10-24: 8 directories carry two entries with different
`details`/`img` pairs, e.g.

    theme/fashion/  <- key `fashion`     details /wp/template/fashion-2/  (coral)
                    <- key `catalog-141306` details /wp/template/fashion/ (bold)

The live directory serves the coral (2026 rebuild); the bold page has no demo on
any prefix and no archive zip. `template-drapery` now records that chain.

A 200 on a shared directory therefore proves nothing about identity — the
adjudication is: catalogue `details` + the live page's own section copy vs each
entry's thumbnail. This scanner cannot render, so it reports the *inventory* and
whether each citing spec already carries a reference-identity note.

VARIANT (measured 2026-10-24, `theme/listed/`): the shared `url` can be a plain
catalogue DATA bug — `listed2`'s own directory `theme/listed2/` answers 200 with
the design its thumbnail shows (Quicksand, `#7971ea`), so nothing is missing and
only the `url` field is wrong. Probing `theme/<slug>-2/` and `theme/<slug>2/`
before writing "unreachable" is mandatory. Note also that `verify-live-tokens.py`
and `verify-shape-tokens.py` resolve demos catalogue-FIRST, so a colliding key
makes them measure a spec against its SIBLING's page — a source of false
TOKEN-UNVERIFIED / SHAPE-WRONG verdicts (`NO_CATALOG=1` is the A/B control).

VARIANT 2 (measured 2026-10-24, `theme/lawyer/`, `theme/medical/`,
`theme/mediplus/`): the three shapes the first corpus did not cover.
  * `lawyer` + `catalog-199854` — the directory serves the FIRST key, and its
    page has been REBUILT (v3.0.0, `css/modern.min.css` over the classic sheet).
    The second key (`lawful`) has its own classic demo at `theme/lawful/`. The
    retired classic layout is DRIFT, not a prep error (`rebuilt: True`).
  * `medical` + `medical-2` — the directory serves the SECOND key's design
    (`medical-2`: green `#69be00`, "We Care for Your Health Every Moment"). The
    FIRST key's clean "TEAM OF EXCELLENCE" design has no demo at any prefix and
    no archive, so that row can never be re-measured; its app is a row mismatch.
  * `mediplus` + `catalog-141348` — the directory serves the FIRST key (rebuilt
    v3.0.1); the second key's post (`medi`) lives at `theme/medi/` and its alias
    `theme/medi-plus/` (both v3.0.0 rebuilds). `/wp/template/medi-plus/` 404s:
    an alias directory is not a post.
Adjudicate by each post's `og:image` on `colorlib.com/wp/template/<slug>/`,
not by the catalogue key's `name` — `catalog-141348` is called "Medi+" but its
`details` is the `medi` post.

Buckets (partition, each group exactly once):
    NOTED        at least one citing spec carries a collision note
    UNNOTED      specs cite the directory and none records the collision (flag)
    NO-SPEC      no spec cites the directory at all

Usage:
    python3 scripts/verify-catalog-collisions.py            # report
    python3 scripts/verify-catalog-collisions.py --strict    # exit 1 if UNNOTED
    python3 scripts/verify-catalog-collisions.py --group theme/fashion/
    python3 scripts/verify-catalog-collisions.py --self-test # controls only

Read-only: it never edits specs, docs or apps.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import urllib.request

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(REPO, "scripts"))

# phrases that count as a recorded reference-identity note
NOTE_RX = re.compile(
    r"(?i)(reference identity|catalog(?:ue)? url collision|catalog(?:ue)? data bug"
    r"|resolves? to this same dir|serves the (?:2026 )?rebuild"
    r"|retired (?:variant|design)|two (?:colou?rlib )?entries, one demo)")


def _fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": (
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
        "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")})
    try:
        with urllib.request.urlopen(req, timeout=40) as r:
            return r.status, r.read()
    except Exception as e:  # noqa: BLE001 - network probe, any failure is "dead"
        return getattr(e, "code", "ERR"), b""


def norm(url):
    if not isinstance(url, str):
        return None
    if url.startswith("http"):
        return url.rstrip("/") + "/"
    if re.match(r"^[\w./-]+$", url):
        return "https://preview.colorlib.com/theme/" + url.strip("/") + "/"
    return None


def groups(catalog):
    """url -> [(key, entry)] for directories claimed by >1 distinct post/thumb."""
    by_url = {}
    for key, entry in catalog.items():
        if not isinstance(entry, dict):
            continue
        url = norm(entry.get("url"))
        if url:
            by_url.setdefault(url, []).append((key, entry))
    out = {}
    for url, entries in by_url.items():
        identity = {(e.get("details"), e.get("img")) for _, e in entries}
        if len(identity) > 1:
            out[url] = sorted(entries, key=lambda kv: kv[0])
    return out


def slug_of(entry):
    m = re.search(r"/template/([^/]+)/", entry.get("details") or "")
    return m.group(1) if m else ""


def rows_of():
    """slug -> [(line, row text)] from TEMPLATES.md."""
    path = os.path.join(REPO, "TEMPLATES.md")
    out = {}
    with open(path, encoding="utf-8") as fh:
        for i, line in enumerate(fh, 1):
            m = re.search(r"wp/template/([^/]+)/", line)
            if m:
                out.setdefault(m.group(1), []).append((i, line.strip()[:120]))
    return out


def spec_index():
    """{relpath: text} for every spec/doc markdown file — one walk per process."""
    out = {}
    for root in ("openspec/specs", "docs/templates"):
        base = os.path.join(REPO, root)
        for dirpath, _dirs, files in os.walk(base):
            for name in files:
                if not name.endswith(".md"):
                    continue
                p = os.path.join(dirpath, name)
                try:
                    with open(p, encoding="utf-8", errors="replace") as fh:
                        out[os.path.relpath(p, REPO)] = fh.read()
                except OSError:
                    continue
    return out


def specs_citing(url, index=None):
    index = index if index is not None else spec_index()
    hits = [(p, bool(NOTE_RX.search(text)))
            for p, text in index.items() if url in text]
    return sorted(hits)


def report(catalog, rows=None, only=None):
    rows = rows if rows is not None else rows_of()
    index = spec_index()
    buckets = {"NOTED": [], "UNNOTED": [], "NO-SPEC": []}
    for url, entries in sorted(groups(catalog).items()):
        if only and only.rstrip("/") not in url:
            continue
        cites = specs_citing(url, index)
        noted = [p for p, n in cites if n]
        bucket = "NOTED" if noted else ("UNNOTED" if cites else "NO-SPEC")
        buckets[bucket].append({
            "url": url,
            "entries": [(k, e.get("name"), slug_of(e), (e.get("img") or "").split("/")[-1])
                        for k, e in entries],
            "rows": {s: rows.get(s, []) for s in (slug_of(e) for _, e in entries)},
            "citing": says(cites),
            "noted": says([(p, True) for p in noted]),
        })
    return buckets


def says(pairs):
    return [p for p, _ok in pairs]


def self_test():
    """Controls: the grouping predicate must fire on the real shape and only it."""
    cases = [
        ("two posts, one dir", {
            "a": {"url": "https://preview.colorlib.com/theme/x/", "details": "d/1", "img": "1.jpg"},
            "catalog-1": {"url": "https://preview.colorlib.com/theme/x/", "details": "d/2", "img": "2.jpg"},
        }, 1),
        ("same post twice (alias)", {
            "a": {"url": "https://preview.colorlib.com/theme/x/", "details": "d/1", "img": "1.jpg"},
            "b": {"url": "https://preview.colorlib.com/theme/x/", "details": "d/1", "img": "1.jpg"},
        }, 0),
        ("relative dir vs absolute same target", {
            "a": {"url": "x/", "details": "d/1", "img": "1.jpg"},
            "b": {"url": "https://preview.colorlib.com/theme/x/", "details": "d/2", "img": "2.jpg"},
        }, 1),
        ("two dirs", {
            "a": {"url": "x/", "details": "d/1", "img": "1.jpg"},
            "b": {"url": "y/", "details": "d/2", "img": "2.jpg"},
        }, 0),
        ("string alias entry is not a dict", {
            "a": {"url": "x/", "details": "d/1", "img": "1.jpg"},
            "b": "x",
        }, 0),
    ]
    ok = 0
    for name, cat, expect in cases:
        got = len(groups(cat))
        status = "PASS" if got == expect else "FAIL"
        ok += got == expect
        print(f"  [{status}] {name}: groups={got} expected={expect}")
    notes = [
        ("note phrase accepted", "the catalogue URL collision is documented", True),
        ("bare hex is not a note", "the sheet paints #ff6363 thirty times", False),
        ("identity phrase accepted", "Reference identity (measured 2026-10-24)", True),
        ("retired variant accepted", "the bold variant is a retired design", True),
    ]
    for name, text, expect in notes:
        got = bool(NOTE_RX.search(text))
        status = "PASS" if got == expect else "FAIL"
        ok += got == expect
        print(f"  [{status}] {name}: matched={got}")
    total = len(cases) + len(notes)
    print(f"controls: {ok}/{total}")
    return 0 if ok == total else 1


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--strict", action="store_true", help="exit 1 when UNNOTED > 0")
    ap.add_argument("--group", help="only this directory (substring match)")
    ap.add_argument("--self-test", action="store_true", help="run controls only")
    ap.add_argument("--json", action="store_true", help="machine-readable output")
    args = ap.parse_args()
    if args.self_test:
        return self_test()

    import catalog_resolve as CR
    cache = os.path.join(os.environ.get("TMPDIR", "/tmp"), "catalog-map.json")
    catalog = CR.load_catalog(_fetch, cache)
    if not catalog:
        print("catalog map unavailable (host down or Cloudflare wall) — retry later")
        return 2
    buckets = report(catalog, only=args.group)
    if args.json:
        print(json.dumps(buckets, indent=1))
        return 0
    total = sum(len(v) for v in buckets.values())
    for bucket in ("UNNOTED", "NOTED", "NO-SPEC"):
        print(f"\n## {bucket} ({len(buckets[bucket])})")
        for g in buckets[bucket]:
            print(f"  {g['url']}")
            for key, name, slug, img in g["entries"]:
                print(f"     key={key:16s} name={name!r:16s} slug={slug:22s} img={img}")
            for slug, rows in g["rows"].items():
                for line, text in rows:
                    print(f"     row {line}: {text[:100]}")
            print(f"     citing specs: {len(g['citing'])} → {', '.join(os.path.basename(os.path.dirname(p)) if 'specs' in p else p for p in g['citing'][:6])}")
    print(f"\ncolliding directories: {total} "
          f"(NOTED {len(buckets['NOTED'])} · UNNOTED {len(buckets['UNNOTED'])} "
          f"· NO-SPEC {len(buckets['NO-SPEC'])})")
    if args.strict and buckets["UNNOTED"]:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
