#!/usr/bin/env python3
"""verify-brief-files.py — BRIEF-FILE-CONSENSUS axis (audit, read-only).

The defect class (measured: `stepforge` then `craftfolio`):

    a brief directory can hold SEVERAL markdown files, and every axis that reads
    a brief stops at the FIRST file that names a design (`verify-docs-source.py`
    DOC_FILES = design-notes, tasks → returns on the first hit).  A stale leftover
    written by an EARLIER prep of the same invented name is therefore never read
    — yet it is the file an implementer opens when it sorts first, and the only
    file when the good one is missing.  `docs/templates/craftfolio/todo.md` still
    described ColorLib **Beckham** (green/teal palette) while the spec, the
    TEMPLATES.md row and the shipped app are all **Steve** (red `#e45447`).

This axis reads EVERY `*.md` in a brief dir, extracts the design each file names
with the SAME extractor the docs-source axis uses, and compares the files with
each other, with the spec, and with the app's TEMPLATES.md row (the third
opinion the docs-source axis already trusts).

BUCKETS (one per brief dir — exact partition, priority order)

  NO-SPEC        no `openspec/specs/template-<name>/spec.md`
  NO-FILES       the dir holds no `*.md`
  SILENT         no file names any design (task outlines legitimately do this)
  AGREE          every naming file names the spec's design
  STALE-TIE      a file names a DIFFERENT design that the row ALSO names
                 (row-multiplicity: the brief picked a sibling the row carries
                 — rename/row work, never a doc defect; recorded as a note)
  STALE-ORPHAN   a file names a design that neither the spec nor the row names
                 — the stale leftover: the only class this axis flags
  ORPHAN-NO-THIRD-OPINION
                 the same mismatch in a dir with NO TEMPLATES.md row and NO
                 `apps/<name>` — nothing can adjudicate it, so it is a note
                 (recorded + queued), never a flag
  SPEC-SILENT    files name a design, the spec names none

SIBLING SPELLINGS: the demo family dirs are multi-page, so a file can name the
design by its FOLDER spelling (`/etc/cf/ContactFrom_v10/`, `/etc/lf/Login_v15/`).
`design_key()` folds those (`contactfrom`→`contactform`, `loginv`→`loginformv`)
so a spelling difference is never a flag (measured: 6 of the first 92).

DEMO-DIR ALIASES: a ColorLib wp slug and its live demo dir are not always the
same string — `wp/template/the-hustle-hour/` is served at `/theme/hustlehour/`.
The row's own screenshot basename carries the demo spelling
(`hustlehour-template-1771943880509.jpg`), so `load_aliases()` reads that map out
of TEMPLATES.md and folds the pair (measured 2026-10-24: `soundbite` was a
phantom flag until the fold existed).

Usage:
  python3 scripts/verify-brief-files.py [--root .] [--json OUT] [--md OUT]
                                       [--show BUCKET] [--verbose]
Exit code: 0 = no STALE-ORPHAN, 1 = STALE-ORPHAN found, 2 = bad usage.
"""
from __future__ import annotations

import argparse
import importlib.util
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ORDER = ('design-notes.md', 'tasks.md', 'todo.md', 'notes.md', 'outline.md', 'README.md')
BUCKETS = ('AGREE', 'STALE-TIE', 'STALE-ORPHAN', 'ORPHAN-NO-THIRD-OPINION',
           'SILENT', 'SPEC-SILENT', 'NO-FILES', 'NO-SPEC')


def _load(fn: str, name: str):
    spec = importlib.util.spec_from_file_location(name, os.path.join(HERE, fn))
    mod = importlib.util.module_from_spec(spec)  # type: ignore[arg-type]
    sys.modules[name] = mod
    spec.loader.exec_module(mod)  # type: ignore[union-attr]
    return mod


DS = _load('verify-docs-source.py', 'vds')

# A file's design can be written in the demo's FOLDER spelling instead of the
# ColorLib slug (families: /etc/lf/Login_vNN/, /etc/cf/ContactFrom_vNN/).
FOLD = (('contactfrom', 'contactform'), ('loginv', 'loginformv'),
        ('regformv', 'colorlibregformv'), ('searchv', 'colorlibsearchv'))
# A round-up / index page is a POST listing many designs, never a design itself
# (`/wp/template/medical-wordpress-themes/`, `/wp/template/portfolio-wordpress-themes/`).
ROUNDUP = re.compile(r'(?i)(?:^|-)wordpress-themes$|(?:^|-)themes$')


def design_key(slug: str) -> str:
    s = re.sub(r'[^a-z0-9]', '', slug.lower())
    for a, b in FOLD:
        if s.startswith(a):
            s = b + s[len(a):]
            break
    return s


# wp slug -> the demo dir the row's own screenshot basename names
# (`the-hustle-hour` -> `hustlehour`). Populated by load_aliases(root).
DEMO_ALIAS: dict[str, str] = {}
ALIAS_ON = True
ALIAS_DIGITS = True
SHOT = re.compile(r'/([a-z0-9][a-z0-9_-]*)-template-\d+\.(?:jpe?g|png|avif|webp)\b', re.I)


def load_aliases(root: str) -> dict[str, str]:
    """Read the demo-dir spelling out of every TEMPLATES.md screenshot URL.

    Guard: only a spelling that carries the SAME digit sequence is an alias —
    `the-hustle-hour`/`hustlehour` folds, but `creativex-3`/`creativex` (a
    numbered sibling demo) never does.
    """
    path = os.path.join(root, 'TEMPLATES.md')
    out: dict[str, str] = {}
    if not os.path.exists(path):
        DEMO_ALIAS.clear()
        return out
    for line in open(path, encoding='utf-8', errors='replace'):
        s = DS.ROW_SLUG.search(line)
        m = SHOT.search(line)
        if not s or not m:
            continue
        slug, shot = s.group(1), m.group(1).lower()
        if not slug or not shot or DS.same(slug, shot):
            continue
        if ALIAS_DIGITS and re.sub(r'\D', '', slug) != re.sub(r'\D', '', shot):
            continue
        out[slug] = shot
    DEMO_ALIAS.clear()
    DEMO_ALIAS.update(out)
    return out


def same_design(a: str, b: str) -> bool:
    if not a or not b:
        return False
    if DS.same(a, b) or design_key(a) == design_key(b):
        return True
    if ALIAS_ON:
        return DEMO_ALIAS.get(a) == b or DEMO_ALIAS.get(b) == a
    return False


def brief_files(d: str) -> list[str]:
    fs = [fn for fn in ORDER if os.path.exists(os.path.join(d, fn))]
    fs += [fn for fn in sorted(os.listdir(d)) if fn.endswith('.md') and fn not in fs]
    return [os.path.join(d, fn) for fn in fs]


def name_of(text: str) -> str:
    for slug, _shape in DS._candidates(text, True):
        if slug and not ROUNDUP.search(slug):
            return slug
    return ''


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='.')
    ap.add_argument('--json', default='')
    ap.add_argument('--md', default='')
    ap.add_argument('--show', default='')
    ap.add_argument('--verbose', action='store_true')
    a = ap.parse_args()
    root = os.path.abspath(a.root)
    specs = os.path.join(root, 'openspec', 'specs')
    briefs = os.path.join(root, 'docs', 'templates')
    if not (os.path.isdir(briefs) and os.path.isdir(specs)):
        print('missing docs/templates or openspec/specs', file=sys.stderr)
        return 2

    rows = DS.row_map(DS.load_rows(root))
    load_aliases(root)
    by_bucket: dict[str, list[dict]] = {b: [] for b in BUCKETS}
    for name in sorted(os.listdir(briefs)):
        d = os.path.join(briefs, name)
        if not os.path.isdir(d):
            continue
        files = brief_files(d)
        stray: list[dict] = []
        named = [{'file': os.path.basename(p), 'slot': None, 'design': name_of(
            open(p, encoding='utf-8', errors='replace').read())} for p in files]
        spec_path = os.path.join(specs, 'template-' + name, 'spec.md')
        spec_design = ''
        if os.path.exists(spec_path):
            spec_design = DS.spec_source(open(spec_path, encoding='utf-8', errors='replace').read())[0]
        row_designs = list(rows.get(name) or [])
        naming = [x for x in named if x['design']]
        if not os.path.exists(spec_path):
            bucket = 'NO-SPEC'
        elif not files:
            bucket = 'NO-FILES'
        elif not naming:
            bucket = 'SILENT'
        elif not spec_design:
            bucket = 'SPEC-SILENT'
        else:
            stray = []
            for x in naming:
                if not same_design(x['design'], spec_design):
                    tie = any(same_design(x['design'], r) for r in row_designs)
                    stray.append({'file': x['file'], 'design': x['design'], 'row_tie': tie})
            if not stray:
                bucket = 'AGREE'
            elif all(s['row_tie'] for s in stray):
                bucket = 'STALE-TIE'
            elif not row_designs and not os.path.isdir(os.path.join(root, 'apps', name)):
                # no row AND no app: nothing can adjudicate the mismatch, so the
                # stray may be the true design -> note + queue, never a flag
                bucket = 'ORPHAN-NO-THIRD-OPINION'
            else:
                bucket = 'STALE-ORPHAN'
        rec = {'name': name, 'bucket': bucket, 'spec': spec_design,
               'row': row_designs, 'files': named,
               'stray': [] if bucket not in ('STALE-TIE', 'STALE-ORPHAN',
                                             'ORPHAN-NO-THIRD-OPINION') else stray}
        by_bucket[bucket].append(rec)
        if a.verbose or (a.show and bucket == a.show):
            print(f"{bucket:13s} {name:20s} spec={spec_design or '-':18s} " +
                  ' · '.join(f"{x['file']}={x['design'] or '-'}" for x in named))

    total = sum(len(v) for v in by_bucket.values())
    print(f"\nbrief dirs read: {total}")
    for b in BUCKETS:
        print(f"  {b:13s} {len(by_bucket[b])}")
    flags = len(by_bucket['STALE-ORPHAN'])
    print(f"flags: {flags}   (notes: STALE-TIE {len(by_bucket['STALE-TIE'])}, "
          f"ORPHAN-NO-THIRD-OPINION {len(by_bucket['ORPHAN-NO-THIRD-OPINION'])})")
    if a.json:
        json.dump({'total': total, 'buckets': {k: len(v) for k, v in by_bucket.items()},
                   'rows': [r for b in BUCKETS for r in by_bucket[b]]}, open(a.json, 'w'), indent=1)
    if a.md:
        with open(a.md, 'w') as fh:
            fh.write('# Brief-file consensus — measured state\n\n| bucket | brief dirs |\n| --- | --- |\n')
            for b in BUCKETS:
                fh.write(f'| {b} | {len(by_bucket[b])} |\n')
            fh.write('\n## STALE-ORPHAN files\n\n| app | file | names | spec | row |\n| --- | --- | --- | --- | --- |\n')
            for rec in by_bucket['STALE-ORPHAN']:
                for s in rec['stray']:
                    if not s['row_tie']:
                        fh.write(f"| `{rec['name']}` | `{s['file']}` | `{s['design']}` | "
                                 f"`{rec['spec']}` | {', '.join(rec['row']) or '-'} |\n")
    return 1 if flags else 0


if __name__ == '__main__':
    sys.exit(main())
