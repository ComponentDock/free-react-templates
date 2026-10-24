#!/usr/bin/env python3
"""fix-brief-files.py — banner the STALE-ORPHAN brief files (docs-only, additive).

For every brief file that `verify-brief-files.py` reports as STALE-ORPHAN, insert a
house-spelling `**Source slug:**` declaration plus a SUPERSEDED banner under the
file's H1 (or at the very top when it has none).  The banner keeps the history
(the file was written for another ColorLib design in an earlier prep of the same
invented name) while making the truth — the spec's design — the first thing an
implementer reads, and the first thing the extractors parse (the labelled
`Source slug:` tier outranks any incidental URL).

Guards
  * never rewrites or deletes a body line; the edit is purely additive;
  * skips a dir whose TEMPLATES.md row names NO app (no third opinion) and whose
    stray may therefore be the true design — those are reported, not edited;
  * skips a file whose design is a round-up post (never a design);
  * idempotent: a file already carrying the banner is left byte-identical;
  * front matter (`---`) and a fenced opening block are never split.

Usage:
  python3 scripts/fix-brief-files.py --dry-run        # list what would change
  python3 scripts/fix-brief-files.py                  # apply
  python3 scripts/fix-brief-files.py --only craftfolio,paprika
"""
from __future__ import annotations

import argparse
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))


def _load(fn: str, name: str):
    spec = importlib.util.spec_from_file_location(name, os.path.join(HERE, fn))
    mod = importlib.util.module_from_spec(spec)  # type: ignore[arg-type]
    sys.modules[name] = mod
    spec.loader.exec_module(mod)  # type: ignore[union-attr]
    return mod


VBF = _load('verify-brief-files.py', 'vbf')
MARK = '<!-- brief-file-consensus: superseded design -->'


def banner(name: str, spec: str, stray: str, spec_only: bool = False) -> str:
    app_line = ("The spec and the TEMPLATES.md row are" if spec_only
                else "The spec, the TEMPLATES.md row and the app are")
    return (
        f"{MARK}\n"
        f"> **SUPERSEDED DESIGN** — this file was written for ColorLib `{stray}` in an\n"
        f"> earlier prep of `{name}`. {app_line}\n"
        f"> ColorLib `{spec}`: treat the section list below as history where the two\n"
        f"> disagree (`openspec/specs/template-{name}/spec.md` is authoritative).\n"
        f"> **Source slug:** `{spec}`\n"
    )


def insert_at(text: str) -> int:
    """Offset just after the H1 (and after YAML front matter), else 0."""
    off = 0
    if text.startswith('---\n'):
        end = text.find('\n---', 4)
        if end != -1:
            off = text.find('\n', end + 4) + 1
    m = re.search(r'(?m)^#\s+.*\n', text[off:])
    if m:
        return off + m.end()
    return off


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='.')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--only', default='')
    ap.add_argument('--spec-only', default='',
                    help='comma list: the app cannot confirm the spec design, so the '
                         'banner names only the spec + row (measured, not assumed)')
    a = ap.parse_args()
    root = os.path.abspath(a.root)
    only = {x.strip() for x in a.only.split(',') if x.strip()}
    spec_only = {x.strip() for x in a.spec_only.split(',') if x.strip()}
    VBF.load_aliases(root)

    rows = VBF.DS.row_map(VBF.DS.load_rows(root))
    specs = os.path.join(root, 'openspec', 'specs')
    briefs = os.path.join(root, 'docs', 'templates')
    changed, skipped = [], []
    for name in sorted(os.listdir(briefs)):
        d = os.path.join(briefs, name)
        if not os.path.isdir(d) or (only and name not in only):
            continue
        spec_path = os.path.join(specs, 'template-' + name, 'spec.md')
        if not os.path.exists(spec_path):
            continue
        spec = VBF.DS.spec_source(open(spec_path, encoding='utf-8', errors='replace').read())[0]
        if not spec:
            continue
        strays = []
        for p in VBF.brief_files(d):
            text = open(p, encoding='utf-8', errors='replace').read()
            if MARK in text:
                continue
            design = VBF.name_of(text)
            if not design or VBF.same_design(design, spec):
                continue
            if any(VBF.same_design(design, r) for r in (rows.get(name) or [])):
                continue  # ROW-TIE: the row carries both designs, not a defect
            strays.append((p, design))
        if not strays:
            continue
        if not (rows.get(name) or []):
            skipped.append((name, 'no-row-third-opinion (note bucket)',
                            ','.join(x[1] for x in strays)))
            continue
        for p, design in strays:
            text = open(p, encoding='utf-8', errors='replace').read()
            off = insert_at(text)
            new = text[:off] + ('\n' if off and not text[:off].endswith('\n\n') else '') \
                + banner(name, spec, design, spec_only=name in spec_only) \
                + ('\n' if off else '\n') + text[off:]
            changed.append((name, os.path.relpath(p, root), design, spec))
            if not a.dry_run:
                open(p, 'w', encoding='utf-8').write(new)

    for name, rel, design, spec in changed:
        print(f"{'WOULD BANNER' if a.dry_run else 'BANNERED'} {name:18s} {rel:40s} {design} -> {spec}")
    for name, why, strays in skipped:
        print(f"SKIP     {name:18s} {why} (strays: {strays})")
    print(f"\nfiles {'to change' if a.dry_run else 'changed'}: {len(changed)}   skipped dirs: {len(skipped)}")
    return 0


if __name__ == '__main__':
    sys.exit(main())
