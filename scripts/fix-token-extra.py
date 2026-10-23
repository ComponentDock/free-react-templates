#!/usr/bin/env python3
"""fix-token-extra.py — write the measured surface row for MISSING-BRAND preps.

`verify-token-extra.py` adjudicates every TOKEN-EXTRA hint.  Two of its buckets
are fixable by a docs-only edit:

  MISSING-BRAND   the live theme sheet paints the design's leading surface colour
                  (background / colour / custom property) and the prep never
                  states it
  DOC-ONLY        the colour is in `docs/templates/<name>/` but never reached the
                  spec's `## Design tokens`, where the machine-readable consumers
                  look

The row is labelled **Surface (measured)**, never `Brand`: a brand row would
manufacture a claim for the brand-coverage axis (which compares the claim with
what the shipped app paints) and flip its numbers without any app changing.

Idempotent: a spec that already states the hex, or already carries a
`Surface (measured)` row for it, is skipped — a second run is a no-op.

Usage:
  python3 fix-token-extra.py [--prep-root DIR] [--rows JSON] [--apply]
                             [--buckets MISSING-BRAND,DOC-ONLY] [--limit N]
Without --apply it only prints what it would do.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys

MARK = "<!-- token-extra:2026-10-23 -->"
SECTION_RX = re.compile(r"(?im)^#{2,3}\s+Design tokens[^\n]*$")
REQ_RX = re.compile(r"(?im)^##\s+(Requirements|Verification checklist)\s*$")
HEX_RX = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")
SURFACE_LABEL = "Surface (measured)"


def label_for(d: dict) -> str:
    """Name the token by the property that paints it, so the row never overclaims."""
    prop = ((d.get("site") or {}).get("prop") or "").lower()
    if prop.startswith("--"):
        return "Token (measured)"
    if prop.startswith("background"):
        return "Surface (measured)"
    if prop == "color":
        return "Accent (measured)"
    return "Colour (measured)"


def norm(h: str) -> str:
    h = h.lower()
    return "#" + "".join(c * 2 for c in h[1:]) if len(h) == 4 else h


def evidence(d: dict) -> str:
    sheet = d["sheet"]
    where = (f"{sheet.rsplit('/', 1)[-1]} ({d['sheet_bytes']:,} B, "
             f"sha256 {d['sheet_sha'][:12]})" if sheet.startswith("http")
             else "inline `<style>`")
    site = d.get("site") or {}
    rule = (f"`{site.get('prop')}` on `{site.get('selector')}`" if site
            else "the sheet's most-painted chromatic declaration")
    return f"paints it ×{d['count']} — {rule}; {where} · <{d['url']}>"


def row_for(d: dict, cols: int) -> str:
    lab = label_for(d)
    if cols >= 3:
        return f"| {lab} | `{d['hex']}` | {evidence(d)} |"
    return f"| {lab} | `{d['hex']}` — {evidence(d)} |"


LEAD_TEXT = ("Measured from the live theme stylesheet (not sampled from the "
             "screenshot): the leading chromatic colour that paints a surface, "
             "kept as a surface token so the palette record is complete.  It is "
             "not a brand claim — the prep's own brand row above still governs the "
             "brand axis.")


def apply_edit(txt: str, d: dict):
    """(new_text, how) — insert the measured row, or report why not."""
    hexv = norm(d["hex"])
    if hexv in {norm("#" + h) for h in HEX_RX.findall(txt)}:
        return None, "already-stated"
    if label_for(d) in txt and hexv in txt.lower():
        return None, "already-row"
    if MARK in txt and label_for(d) in txt:
        return None, "already-row"
    m = SECTION_RX.search(txt)
    if m:
        nxt = re.search(r"(?m)^##\s+", txt[m.end():])
        end = m.end() + nxt.start() if nxt else len(txt)
        sec = txt[m.end():end]
        rows = [ln for ln in sec.splitlines() if ln.strip().startswith("|")]
        if rows:
            cols = rows[0].count("|") - 1
            pos, idx = m.end(), None
            for ln in sec.splitlines(keepends=True):
                pos += len(ln)
                if ln.strip().startswith("|"):
                    idx = pos
            if idx is None:
                return None, "no-anchor"
            return (txt[:idx] + row_for(d, cols) + "\n" + txt[idx:], "table-row")
        bullet = f"- **{label_for(d)}:** `{d['hex']}` — {evidence(d)}"
        return (txt[:end].rstrip("\n") + "\n" + bullet + "\n\n" + txt[end:], "bullet")
    rq = REQ_RX.search(txt)
    block = ("## Design tokens\n\n" + MARK + "\n\n"
             "| Token | Value | Evidence in the reference |\n| --- | --- | --- |\n"
             + row_for(d, 3) + "\n\n" + LEAD_TEXT + "\n\n")
    if rq:
        return txt[:rq.start()] + block + txt[rq.start():], "new-section"
    return txt.rstrip("\n") + "\n\n" + block, "append"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default=".")
    ap.add_argument("--rows", default="/tmp/token-extra.json")
    ap.add_argument("--buckets", default="MISSING-BRAND,DOC-ONLY")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args()

    root = os.path.abspath(args.prep_root)
    data = json.load(open(args.rows))
    keep = {b.strip() for b in args.buckets.split(",") if b.strip()}
    todo = [r for r in data["rows"] if r["bucket"] in keep]
    todo.sort(key=lambda r: r["name"])
    if args.limit:
        todo = todo[:args.limit]

    stats = {"table-row": 0, "bullet": 0, "new-section": 0, "append": 0,
             "already-stated": 0, "already-row": 0, "no-file": 0, "no-anchor": 0}
    for r in todo:
        p = os.path.join(root, "openspec", "specs", f"template-{r['name']}", "spec.md")
        if not os.path.exists(p):
            stats["no-file"] += 1
            continue
        txt = open(p, encoding="utf-8").read()
        new, how = apply_edit(txt, r)
        stats[how] = stats.get(how, 0) + 1
        if new is None:
            continue
        if args.apply:
            open(p, "w", encoding="utf-8").write(new)
        if not args.quiet:
            print(f"{how:12s} {r['name']:24s} {r['hex']} {r['bucket']}")
    print("\n=== " + "  ".join(f"{k}: {v}" for k, v in stats.items() if v))
    print(f"rows considered: {len(todo)}  applied: {args.apply}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
