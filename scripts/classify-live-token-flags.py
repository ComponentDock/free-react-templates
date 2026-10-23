#!/usr/bin/env python3
"""classify-live-token-flags.py — bucket the LIVE-PALETTE flags by distance.

Read-only analysis over the fetch cache: for every TOKEN-MISSING flag, find the
nearest chromatic colour the demo's own sheets paint, and report the distance +
how many declarations paint it.  A tiny distance means the prep sampled the
screenshot (a near-miss re-value); a large one means the palette was invented.

Usage: python3 classify-live-token-flags.py [--flags JSON] [--cache DIR] [--json OUT]
"""
from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import math
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location(
    "vlt", os.path.join(HERE, "verify-live-tokens.py"))
VLT = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(VLT)


def dist(a: str, b: str) -> float:
    ra, ga, ba = VLT.rgb(a)
    rb, gb, bb = VLT.rgb(b)
    return math.sqrt((ra - rb) ** 2 + (ga - gb) ** 2 + (bb - bb) ** 2)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default="/root/free-react-templates-p2")
    ap.add_argument("--flags", default="/tmp/lt-out/all_tm.json")
    ap.add_argument("--cache", default="/tmp/lt-cache")
    ap.add_argument("--json", default="/tmp/lt-out/classified.json")
    args = ap.parse_args()

    f = VLT.Fetcher(args.cache, False)
    CR = VLT.CR
    CR.configure(f.get, args.cache)
    rows = json.load(open(args.flags))
    by_spec = collections.defaultdict(list)
    for name, _kind, hexv, detail in rows:
        by_spec[name].append((hexv, detail))

    out = []
    for name, items in sorted(by_spec.items()):
        spec = os.path.join(args.prep_root, "openspec", "specs",
                            f"template-{name}", "spec.md")
        if not os.path.exists(spec):
            continue
        txt = open(spec, encoding="utf-8").read()
        slug = VLT.spec_slug(txt)
        url, html, via = CR.demo_via(f.get, slug, name)
        if not url:
            continue
        css = ""
        for su in VLT.sheet_urls(html, url)[:20]:
            code, body = f.get(su)
            if str(code) == "200":
                css += body.decode("utf-8", "replace")
        painted = collections.Counter(VLT.norm("#" + h)
                                      for h in VLT.HEX_RX.findall(css))
        chrom = [(h, n) for h, n in painted.items() if VLT.is_chromatic(h)]
        chrom.sort(key=lambda x: -x[1])
        for hexv, detail in items:
            best, bd = None, 1e9
            for h, n in chrom:
                d = math.dist(VLT.rgb(hexv), VLT.rgb(h))
                if d < bd:
                    best, bd = h, d
            out.append({"name": name, "slug": slug, "demo": url, "claim": hexv,
                        "nearest": best, "dist": round(bd, 1),
                        "nearest_n": painted.get(best, 0) if best else 0,
                        "detail": detail[:120]})
    json.dump(out, open(args.json, "w"), indent=1)
    buckets = collections.Counter(
        "near(<20)" if r["dist"] < 20 else "close(20-45)" if r["dist"] < 45
        else "far(45-100)" if r["dist"] < 100 else "invented(>=100)"
        for r in out)
    print(f"rows {len(out)} specs {len(set(r['name'] for r in out))} {dict(buckets)}")
    for r in out[:15]:
        print(f"  {r['name']:16s} {r['claim']} -> {r['nearest']} d={r['dist']:5.1f}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
