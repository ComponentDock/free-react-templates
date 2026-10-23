#!/usr/bin/env python3
"""fix-brand-claims.py — backfill a machine-readable brand row (BRAND-CLAIM axis).

`verify-brand-claims.py` decides WHICH specs can carry a row and from where the
value comes; this fixer writes it.  Two sources, never invented:

  PROSE-ROW     the prep already states the colour in prose (its own claim);
                the row re-states it in the grammar the tooling reads
  MEASURED-ROW  the prep states no colour at all; the value is the live theme
                sheet's leading surface chromatic (background declarations
                first, then a button/nav/hero selector)

Every row carries the live evidence (sheet, bytes, sha256, declaration count and
the rule that paints it) so an implementer can check it.  Idempotent: the
`<!-- brand-claim:2026-10-23 -->` marker, `Brand (stated in this prep)` and
`Brand (measured)` are all skip conditions — a second run is a byte-level no-op.

Usage:
  python3 fix-brand-claims.py [--prep-root DIR] [--cache DIR] [--limit N]
                              [--dry-run] [--only NAME[,NAME]]
Exit 0 = applied (or nothing to do), 2 = usage error.
"""
from __future__ import annotations

import argparse
import importlib.util
import os
import re
import sys
from concurrent.futures import ThreadPoolExecutor

MARK = "<!-- brand-claim:2026-10-23 -->"
SECTION_RX = re.compile(r"(?im)^##\s+Design tokens\s*$")
REQ_RX = re.compile(r"(?m)^##\s+Requirements\s*$")


def _load(fname: str):
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), fname)
    spec = importlib.util.spec_from_file_location(fname[:-3].replace("-", "_"), path)
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod
    spec.loader.exec_module(mod)
    return mod


BC = _load("verify-brand-claims.py")


def evidence(d: dict) -> str:
    """One-line, checkable evidence string for the row."""
    sheet = d["sheet"]
    where = (f"{sheet.rsplit('/', 1)[-1]} ({d['sheet_bytes']:,} B, "
             f"sha256 {d['sheet_sha'][:12]})" if sheet.startswith("http")
             else "inline `<style>`")
    rule = (f"`{d['prop']}` on `{d['selector']}`" if d.get("selector")
            else f"{d['count']} declarations")
    return f"live sheet paints it ×{d['count']} — {rule}; {where} · <{d['url']}>"


def table_row(d: dict, cols: int) -> str:
    label = ("Brand (stated in this prep)" if d["source"] == "prose"
             else "Brand (measured)")
    if cols >= 3:
        return f"| {label} | `{d['hex']}` | {evidence(d)} |"
    return f"| {label} | `{d['hex']}` — {evidence(d)} |"


def build_block(d: dict) -> str:
    """The row + its provenance sentence, as a `## Design tokens` body."""
    lead = ("Recorded so the palette is machine-readable: the prep already states "
            "this colour in its design notes, and this row carries the same value "
            "with the live-sheet evidence." if d["source"] == "prose" else
            "Measured from the live theme stylesheet: the most-painted colour that "
            "paints a surface (background declarations first, then a "
            "button/nav/hero selector), never sampled from a screenshot.")
    out = [MARK,
           "| Token | Value | Evidence in the reference |",
           "| --- | --- | --- |",
           table_row(d, 3), "",
           lead]
    if d.get("alts"):
        out[-1] = out[-1] + f" Alternates in the same sheet: {d['alts']}."
    return "\n".join(out)


def apply_edit(txt: str, d: dict):
    """Insert the row into the existing section, or add the section. (text, how)"""
    if MARK in txt or "Brand (stated in this prep)" in txt or "Brand (measured)" in txt \
            or re.search(r"(?m)^- \*\*Brand (?:stated|measured):\*\*", txt):
        return None, "already"
    m = SECTION_RX.search(txt)
    if m:
        nxt = SECTION_RX.search(txt, m.end())
        nxt = re.search(r"(?m)^##\s+", txt[m.end():])
        end = m.end() + nxt.start() if nxt else len(txt)
        sec = txt[m.end():end]
        rows = [ln for ln in sec.splitlines() if ln.strip().startswith("|")]
        if rows:
            cols = rows[0].count("|") - 1
            # insert after the LAST table row of the section
            idx, pos = None, m.end()
            for ln in txt[m.end():end].splitlines(keepends=True):
                pos += len(ln)
                if ln.strip().startswith("|"):
                    idx = pos
            if idx is None:
                return None, "no-row"
            return txt[:idx] + table_row(d, cols) + "\n" + txt[idx:], "table-row"
        bullet = (f"- **Brand {'stated' if d['source'] == 'prose' else 'measured'}:** "
                  f"`{d['hex']}` — {evidence(d)}")
        return txt[:end].rstrip("\n") + "\n" + bullet + "\n\n" + txt[end:], "bullet"
    rq = REQ_RX.search(txt)
    block = "## Design tokens\n\n" + build_block(d) + "\n\n"
    if rq:
        return txt[:rq.start()] + block + txt[rq.start():], "new-section"
    # no Requirements heading (should not happen — openspec requires it)
    return txt.rstrip("\n") + "\n\n" + block, "append"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default=".")
    ap.add_argument("--cache", default="/tmp/brand-claims-cache")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only")
    args = ap.parse_args()
    root = os.path.abspath(args.prep_root)
    if not os.path.isdir(os.path.join(root, "openspec")):
        print("error: no openspec/ — pass --prep-root", file=sys.stderr)
        return 2
    f = BC.VT.Fetcher(args.cache, True)
    BC.VT.CR.configure(f.get, args.cache)
    specs = [p for p in BC.read_specs(root, "HEAD", True)
             if os.path.isdir(os.path.join(root, "apps", p.split("/")[2][9:]))]
    if args.only:
        want = set(args.only.split(","))
        specs = [p for p in specs if p.split("/")[2][9:] in want]
    if args.limit:
        specs = specs[:args.limit]
    ud = argparse.Namespace(worktree=True, slug=None)

    def work(path):
        try:
            r = BC.audit_spec(f, root, "HEAD", path, ud)
        except Exception as exc:                  # a broken spec must not kill the run
            return (path, "ERROR", str(exc)[:100])
        if not r or r[1] not in ("PROSE-ROW", "MEASURED-ROW"):
            return None
        name, _kind, _h, _detail, d = r
        fp = os.path.join(root, path)
        txt = open(fp, encoding="utf-8").read()
        new, how = apply_edit(txt, d)
        if new is None:
            return (name, how, "")
        if not args.dry_run:
            open(fp, "w", encoding="utf-8").write(new)
        return (name, how, d["hex"])

    with ThreadPoolExecutor(max_workers=6) as ex:
        res = [x for x in ex.map(work, specs) if x]
    res.sort()
    for name, how, hexv in res:
        print(f"{'DRY ' if args.dry_run else ''}{how:12s} {name:18s} {hexv}")
    done = [r for r in res if r[1] not in ("already", "no-row", "ERROR")]
    print(f"\n=== rows written: {len(done)}  skipped: "
          f"{len([r for r in res if r[1] == 'already'])}  "
          f"shape-misses: {len([r for r in res if r[1] in ('no-row', 'ERROR')])}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
