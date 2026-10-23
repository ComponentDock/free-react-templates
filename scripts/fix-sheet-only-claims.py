#!/usr/bin/env python3
"""Stamp "declared only by <selector>" onto the rows PROVEN sheet-only.

`verify-sheet-claims.py` classifies the residual of
`docs/app-fidelity-delta.md`: a `SHEET-ONLY` claim is one whose every declaring
CSS rule hangs off a class the reference page never renders, so the design never
paints the colour and the app is right to omit it. The row is the defect.

This script turns that measurement into the row's own words, which is how every
other claim-scope bucket works: `verify-app-fidelity.py` reads the cue
(`declared only by`) off the row and records the claim as
`EVIDENCE-SHEET-ONLY` instead of `UNSHIPPED` — auditable, never silent, and the
app needs no restyle.

Usage:
  python3 scripts/verify-sheet-claims.py --json /tmp/sheet-claims.json
  python3 scripts/fix-sheet-only-claims.py --claims /tmp/sheet-claims.json [--dry-run]

Idempotent: a row that already says `declared only by` is left alone. Only the
rows the census proved are touched; `RENDERED`, `VAR/UNKNOWN`, `NOT-IN-SHEET` and
`UNVERIFIED` claims are never edited (they stay app debt / a re-measure queue).
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys

CUE = "declared only by"
TAIL = "block absent from the page markup"


def note_for(claim: dict) -> str:
    """The citation the row gets: the smallest declaring selector + the proof."""
    rules = claim.get("rules_detail") or []
    if not rules:
        return f"{CUE} a shared-scaffold block ({TAIL})"
    # the selector with the fewest class tokens is the most representative one
    best = min(rules, key=lambda d: (len(d.get("classes") or []) or 99, len(d["selector"])))
    sel = best["selector"].split(" ")[0] if False else best["selector"]
    sel = re.sub(r"\s+", " ", sel).strip()
    if len(sel) > 78:
        sel = sel[:75].rstrip(" ,>+~") + "…"
    n = claim.get("rules") or len(rules)
    return (f"{CUE} `{sel}` in the shared sheet — {n} declaring rule(s), every one "
            f"hanging off a class the page markup never uses ({TAIL})")


def stamp(path: str, line_no: int, text: str, dry: bool) -> tuple[bool, str]:
    lines = open(path, encoding="utf-8").read().splitlines(keepends=True)
    if line_no < 1 or line_no > len(lines):
        return False, "line out of range"
    row = lines[line_no - 1]
    if CUE in row:
        return False, "already stamped"
    stripped = row.rstrip("\n")
    if stripped.startswith("|") and stripped.endswith("|"):
        # a markdown token table: extend the row's LAST cell, keep the pipe count
        new = stripped[:-1].rstrip() + " — " + text + " |"
    elif stripped.lstrip().startswith(("-", "*", "+")):
        # a bullet: append the note as its own clause
        new = stripped.rstrip(" .;") + " — " + text
    else:
        return False, "not a table row or bullet — skipped"
    if dry:
        return True, new
    lines[line_no - 1] = new + ("\n" if row.endswith("\n") else "")
    open(path, "w", encoding="utf-8").writelines(lines)
    return True, new


def main() -> int:
    ap = argparse.ArgumentParser(description="stamp sheet-only rows (idempotent)")
    ap.add_argument("--claims", required=True, help="verify-sheet-claims --json output")
    ap.add_argument("--prep-root", default=os.getcwd())
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()
    root = os.path.abspath(args.prep_root)
    data = json.load(open(args.claims))
    targets = [c for c in data if c["bucket"] == "SHEET-ONLY"]
    done = skipped = 0
    for c in sorted(targets, key=lambda x: (x["app"], x["line"])):
        spec = os.path.join(root, "openspec", "specs", f"template-{c['app']}", "spec.md")
        if not os.path.exists(spec):
            print(f"SKIP {c['app']}: no spec at {spec}", file=sys.stderr)
            skipped += 1
            continue
        ok, msg = stamp(spec, c["line"], note_for(c), args.dry_run)
        if ok:
            done += 1
            print(f"{'WOULD' if args.dry_run else 'stamped'} {c['app']} L{c['line']} "
                  f"{c['hex']}: {msg[:120]}")
        else:
            skipped += 1
            print(f"skip {c['app']} L{c['line']} {c['hex']}: {msg}", file=sys.stderr)
    print(f"\n{len(targets)} sheet-only claim(s): {done} row(s) "
          f"{'to stamp' if args.dry_run else 'stamped'}, {skipped} skipped")
    return 0 if done or not targets else 1


if __name__ == "__main__":
    sys.exit(main())
