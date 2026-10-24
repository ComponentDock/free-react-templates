#!/usr/bin/env python3
"""fix-provenance-grammar.py — make every spec's source readable by the naming audit.

`scripts/audit-naming.mjs` (rule 5) reads the FIRST `ColorLib "X"` mention in a
spec and compares it with the app folder. 1,089 specs name their source in
prose instead, so the audit reports those apps as `unknown` and its violation
list is an understatement (measured: 5 reported, 11 real).

This fixer writes the audited grammar from evidence the spec ALREADY carries,
in the smallest possible edit:

  QUOTE-IN-PLACE  the prose already names the source —
                  `ColorLib **Classic**` / `ColorLib Halo` -> `ColorLib "Classic"`
                  (the name must normalise to the slug-derived design name)
  INSERT-LINE     nothing in the prose names it -> one bullet at the end of
                  `## Purpose`: `- **Source design:** ColorLib "X" — <url>`

It never invents a name: the name comes from the spec's own source/preview/
archive URL resolved through TEMPLATES.md's slug -> design-name map, or from
that same map keyed by the spec's `Source slug:` label. A spec with no
resolution is left alone (`no-name`), and so is one that already parses.

Byte-level no-op on a second run (every fixed spec now parses, so it is skipped).

Usage:
  python3 scripts/fix-provenance-grammar.py [--root DIR] [--dry-run] [--verbose]
Exit 0 = nothing left to fix, 1 = fixable rows remain.
"""
from __future__ import annotations

import argparse
import glob
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
_V = os.path.join(HERE, 'verify-provenance-grammar.py')


def _load():
    spec = importlib.util.spec_from_file_location('vpg', _V)
    if spec is None or spec.loader is None:
        raise RuntimeError(f'cannot load {_V}')
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


VPG = _load()

PURPOSE = re.compile(r'^##\s+Purpose\s*$', re.M)
H2 = re.compile(r'^##\s', re.M)
BOLD = re.compile(r'ColorLib\s+(?:free\s+)?\*\*([^*\n]+?)\*\*')
BARE = re.compile(r'ColorLib\s+(?:free\s+)?([A-Z][\w&.\'-]*(?:\s+[A-Z][\w&.\'-]*){0,3})')
WP_URL = re.compile(r'colorlib\.com/wp/template/([\w.~%+-]+)/')


def purpose_span(text: str) -> tuple[int, int] | None:
    m = PURPOSE.search(text)
    if not m:
        return None
    nxt = H2.search(text, m.end())
    return (m.end(), nxt.start() if nxt else len(text))


def _in_heading(text: str, pos: int) -> bool:
    """Never rewrite a heading: `## Sections & Structure (1:1 with ColorLib X)`
    is spec grammar other tools match on (`-24h`/`-23i` read those headings)."""
    start = text.rfind('\n', 0, pos) + 1
    return text[start:pos].lstrip().startswith('#')


def _same(a: str, b: str) -> bool:
    return VPG.normv(a) == VPG.normv(b)


def fix_text(text: str, name: str, slug: str) -> tuple[str, str]:
    """(new_text, shape) — 'quote-bold' | 'quote-bare' | 'insert' | 'skip'."""
    if VPG.QUOTED.search(text):
        return text, 'skip'
    if not name:
        return text, 'skip'
    for m in BOLD.finditer(text):
        if _in_heading(text, m.start()):
            continue
        if _same(m.group(1), name):
            inner = m.group(1).strip().strip('"\u201c\u201d').strip()
            return text[:m.start()] + f'ColorLib "{inner}"' + text[m.end():], 'quote-bold'
    for m in BARE.finditer(text):
        if _in_heading(text, m.start()):
            continue
        if _same(m.group(1), name):
            inner = m.group(1).strip().strip('"\u201c\u201d').strip()
            return text[:m.start()] + f'ColorLib "{inner}"' + text[m.end():], 'quote-bare'
    span = purpose_span(text)
    if span is None:
        return text, 'no-purpose'
    url = f' \u2014 https://colorlib.com/wp/template/{slug}/' if slug else ''
    line = f'- **Source design:** ColorLib "{name}"{url}'
    start, end = span
    head = text[start:end].rstrip('\n')
    rest = text[end:].lstrip('\n')
    if head.strip():
        body = head + '\n\n' + line + '\n'
    else:
        body = '\n\n' + line + '\n'
    if rest:
        body += '\n' + rest
    return text[:start] + body, 'insert'


MARK = re.compile(r'^- \*\*Source design:\*\* ColorLib ".*?"'
                  r'(?: \u2014 https://colorlib\.com/wp/template/[\w.~%+-]+/)?$', re.M)


def tidy_inserted(text: str) -> tuple[str, bool]:
    """Collapse extra blank lines a previous insert left after its own bullet."""
    m = MARK.search(text)
    if not m:
        return text, False
    tail = text[m.end():]
    stripped = tail.lstrip('\n')
    if stripped == tail or not stripped:
        return text, False
    out = text[:m.end()] + '\n\n' + stripped
    return (out, True) if out != text else (text, False)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='.')
    ap.add_argument('--dry-run', action='store_true')
    ap.add_argument('--verbose', action='store_true')
    a = ap.parse_args()
    root = a.root
    rows = VPG.load_rows(os.path.join(root, 'TEMPLATES.md'))
    exact, nidx, ambig = VPG.slug_index(rows)
    apps = set()
    if os.path.isdir(os.path.join(root, 'apps')):
        apps = {d for d in os.listdir(os.path.join(root, 'apps'))
                if os.path.isdir(os.path.join(root, 'apps', d))}

    shapes: dict[str, int] = {}
    todo = 0
    for p in sorted(glob.glob(os.path.join(root, 'openspec', 'specs', 'template-*', 'spec.md'))):
        folder = os.path.basename(os.path.dirname(p))[len('template-'):]
        text = open(p, encoding='utf-8', errors='replace').read()
        rec = VPG.parse_spec(text, exact, nidx, folder, folder in apps, rows)
        if rec['kind'] == 'PARSED':
            tidied, changed = tidy_inserted(text)
            if changed:
                shapes['tidy'] = shapes.get('tidy', 0) + 1
                if not a.dry_run:
                    with open(p, 'w', encoding='utf-8') as fh:
                        fh.write(tidied)
            continue
        name = rec['name']
        slug = rec['slug'] or ''
        if not name:
            shapes['no-name'] = shapes.get('no-name', 0) + 1
            todo += 1
            continue
        if name and ambig and VPG.normv(slug) in ambig:
            shapes['ambiguous'] = shapes.get('ambiguous', 0) + 1
            todo += 1
            continue
        new, shape = fix_text(text, name, slug)
        if shape in ('skip', 'no-purpose'):
            shapes[shape] = shapes.get(shape, 0) + 1
            todo += 1
            continue
        # the edit must not change anything but the provenance sentence
        if new.count('## ') != text.count('## '):
            shapes['refused-headings'] = shapes.get('refused-headings', 0) + 1
            todo += 1
            continue
        if not VPG.QUOTED.search(new):
            shapes['refused-no-grammar'] = shapes.get('refused-no-grammar', 0) + 1
            todo += 1
            continue
        shapes[shape] = shapes.get(shape, 0) + 1
        if a.verbose:
            print(f'  {shape:11s} template-{folder}  <- ColorLib "{name}"')
        if not a.dry_run:
            with open(p, 'w', encoding='utf-8') as fh:
                fh.write(new)
    print('shapes: ' + ', '.join(f'{k}={v}' for k, v in sorted(shapes.items())))
    left = todo
    print(f'left to fix: {left}')
    return 0 if not left else 1


if __name__ == '__main__':
    sys.exit(main())
