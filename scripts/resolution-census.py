#!/usr/bin/env python3
"""resolution-census.py — how each spec's demo resolves, offline, from the cache.

Counts: catalog map (and which key), ladder, unresolvable.  This is the A/B
evidence for the LIVE-PALETTE axis: with `NO_CATALOG=1` every "catalog" row
would fall to the ladder and, where the ladder misses, be un-audited.

Usage: python3 resolution-census.py [--cache DIR] [--prep-root DIR] [--json OUT]
"""
from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location(
    "vlt", os.path.join(HERE, "verify-live-tokens.py"))
VLT = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(VLT)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default="/root/free-react-templates-p2")
    ap.add_argument("--cache", default="/tmp/lt-cache")
    ap.add_argument("--json", default="/tmp/lt-out/resolution-census.json")
    args = ap.parse_args()

    f = VLT.Fetcher(args.cache, False)
    VLT.CR.configure(f.get, args.cache)
    base = os.path.join(args.prep_root, "openspec", "specs")
    rows, census = [], collections.Counter()
    for d in sorted(os.listdir(base)):
        p = os.path.join(base, d, "spec.md")
        if not os.path.exists(p):
            continue
        name = d.replace("template-", "")
        txt = open(p, encoding="utf-8").read()
        slug = VLT.spec_slug(txt)
        if not slug:
            census["no-slug"] += 1
            continue
        url, _html, _tried, via = VLT.resolve_preview(f, slug, name)
        key = via if url else "unresolved"
        census[key] += 1
        rows.append({"name": name, "slug": slug, "via": key, "demo": url})
    json.dump(rows, open(args.json, "w"), indent=1)
    print(dict(census))
    print(f"total {sum(census.values())}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
