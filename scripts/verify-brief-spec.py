#!/usr/bin/env python3
"""verify-brief-spec.py — BRIEF-PENDING axis (audit).

The docs-source axis (`verify-docs-source.py`) judges brief ↔ spec ↔ TEMPLATES.md
row for the **shipped** apps only: it iterates `apps/`.  On 2026-10-24 that axis
was driven to 0 flags, which left an unjudged layer of 1,533
`docs/templates/<name>/` directories whose `<name>` is NOT an app:

  * 1,408 carry `<!-- prep-status: shipped-as=<app> -->` — prep history for a
    design that shipped under another name (renames, row-multiplicity, duplicate
    preps).  The header is the only pointer an implementer gets, and nothing
    checked it: `cruiseo` pointed at `drivego` while its brief measured
    `car-rental` (which shipped as `fleetly`), `tidecrest` pointed at `pavilion`
    (Marian) while its brief measured Ocheandeview (shipped as `havenshore`);
  * 115 have a spec and no app — the surplus preps an implementer would pick up
    next; `docs/templates/coral/tasks.md` names the design while
    `openspec/specs/template-coral/spec.md` names none;
  * 10 have a brief and no spec at all — a prep artifact with no claim marker
    (AGENTS.md rule 2: no implementation without a spec).

This axis reads those three populations.  Buckets partition them exactly once:

  UNDER-AGREE           brief and the target's spec name the same design
  UNDER-DRIFT           brief names another design than the target's spec  → FLAG
  UNDER-BRIEF-SILENT    brief names no design at all                      (note)
  UNDER-TARGET-MISSING  `shipped-as=` app that does not exist             → FLAG
  PENDING-AGREE         no app, spec exists, brief and spec agree
  PENDING-DRIFT         no app, brief names another design than the spec  → FLAG
  PENDING-BRIEF-SILENT  no app, spec exists, brief names no design        (note)
  PENDING-SPEC-SILENT   no app, brief names a design, spec names none     → FLAG
  ORPHAN                brief, no spec, no `shipped-as` marker            → FLAG

A `shipped-as=a,b` list is legal: several ColorLib designs were recreated twice
(row-multiplicity), so the brief is right if it names ANY listed target.

Usage:
  python3 scripts/verify-brief-spec.py [--root DIR] [--only a,b]
                                      [--json OUT] [--md OUT] [--verbose]
Exit 0 = no flags, 1 = flags present, 3 = bad usage.  Read-only, offline.
"""
from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, 'verify-docs-source.py')


def _load(path: str, name: str):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


V = _load(VER, 'verify_docs_source')

# --- module guards (controls flip these to prove a case can FAIL) -----------
GUARDS = {'family_norm': True, 'prep_status': True}

# `<!-- prep-status: shipped-as=fleetly -->` — the marker a rename sweep writes.
PREP_STATUS = re.compile(r'prep-status:\s*([^\s>]+)')
SHIPPED_AS = re.compile(r'shipped-as\s*=\s*([\w,-]+)')
# Brief files in reading order; a directory can carry any subset (795 dirs have
# `tasks.md` alone, 258 `todo.md` alone, 132 `notes.md`).
ORDER = ('design-notes.md', 'tasks.md', 'todo.md', 'notes.md', 'outline.md')
HEAD = 2000


def md_files(d: str) -> list[str]:
    fs = [f for f in os.listdir(d) if f.endswith('.md')]
    return [f for f in ORDER if f in fs] + sorted(f for f in fs if f not in ORDER)


def fam(slug: str) -> str:
    """Form/design families whose ColorLib slug and demo folder are spelled apart.

    `login-form-v16` ships as `Login_v16`, `contact-form-v10` as `ContactFrom_v10`
    (ColorLib's own typo).  Without this the axis flags five correct briefs — the
    phantom-flag class every earlier axis had to encode.
    """
    s = (slug or '').strip().lower()
    m = re.match(r'login[-_ ]?form[-_ ]?v?(\d+)$', s) or re.match(r'login[_-]?v(\d+)$', s)
    if m:
        return f'loginform{m.group(1)}'
    m = (re.match(r'contact[-_ ]?form[-_ ]?v?(\d+)$', s)
         or re.match(r'contact[_-]?from[_-]?v?(\d+)$', s)
         or re.match(r'contact[_-]?from[-_ ]?v?(\d+)$', s))
    if m:
        return f'contactform{m.group(1)}'
    # `calendar-12` / `carousel-04`: numbered siblings are DISTINCT designs and
    # must never normalise into one another (docs-source control c05).
    return V.norm(slug)


def same(a: str, b: str) -> bool:
    if not a or not b:
        return False
    if a == b or V.norm(a) == V.norm(b):
        return True
    return bool(GUARDS['family_norm']) and fam(a) == fam(b)


def brief_for(root: str, name: str) -> tuple[str, str, str]:
    """(slug, shape, file) — the design the brief names, or ('', 'silent', '')."""
    d = os.path.join(root, 'docs', 'templates', name)
    for fn in md_files(d):
        text = open(os.path.join(d, fn), encoding='utf-8', errors='replace').read()
        cands = V._candidates(text, True)
        if cands:
            return cands[0][0], cands[0][1], fn
    return '', 'silent', ''


def prep_status(root: str, name: str) -> str:
    d = os.path.join(root, 'docs', 'templates', name)
    if not GUARDS['prep_status']:
        return ''
    for fn in md_files(d):
        head = open(os.path.join(d, fn), encoding='utf-8', errors='replace').read(HEAD)
        m = PREP_STATUS.search(head)
        if m:
            return m.group(1)
    return ''


def spec_slug(root: str, name: str) -> tuple[str, bool]:
    p = os.path.join(root, 'openspec', 'specs', f'template-{name}', 'spec.md')
    if not os.path.exists(p):
        return '', False
    return V.spec_source(open(p, encoding='utf-8', errors='replace').read())[0], True


# --- verdict ---------------------------------------------------------------
def decide(name: str, brief: str, targets: list[str],
           target_slugs: dict[str, str], apps: set[str], spec: str,
           has_spec: bool) -> tuple[str, list[str], list[str]]:
    """(bucket, flags, notes) — partitions the non-app brief corpus once."""
    flags: list[str] = []
    notes: list[str] = []
    if targets:
        # An app that does not exist is `missing`; an app whose spec names no
        # design is a different defect — keying on `target_slugs` conflated them
        # (caught by control c04, 2026-10-24).
        missing = [t for t in targets if t not in apps]
        if missing:
            return 'UNDER-TARGET-MISSING', [f'TARGET-NO-APP:{",".join(missing)}'], notes
        if not brief:
            return 'UNDER-BRIEF-SILENT', flags, notes + ['BRIEF-NAMES-NO-DESIGN']
        if any(same(brief, target_slugs[t]) for t in targets if target_slugs[t]):
            if len(targets) > 1:
                notes.append('ROW-MULTI:' + ','.join(targets))
            return 'UNDER-AGREE', flags, notes
        if any(not target_slugs[t] for t in targets):
            return 'UNDER-TARGET-SILENT', [f'TARGET-SPEC-NAMES-NO-DESIGN:{",".join(targets)}'], notes
        return 'UNDER-DRIFT', [
            f'UNDER-NAME|target={"|".join(targets)}|target_spec='
            f'{"|".join(target_slugs[t] for t in targets)}|brief={brief}'], notes
    if not has_spec:
        return 'ORPHAN', [f'NO-SPEC|brief={brief or "silent"}'], notes
    if not brief:
        return 'PENDING-BRIEF-SILENT', flags, notes + ['BRIEF-NAMES-NO-DESIGN']
    if not spec:
        return 'PENDING-SPEC-SILENT', [f'SPEC-NAMES-NO-DESIGN|brief={brief}'], notes
    if same(spec, brief):
        return 'PENDING-AGREE', flags, notes
    return 'PENDING-DRIFT', [f'PENDING-NAME|spec={spec}|brief={brief}'], notes


# --- corpus ----------------------------------------------------------------
def audit(root: str = '.', only: set[str] | None = None) -> dict:
    adir = os.path.join(root, 'apps')
    apps = {d for d in os.listdir(adir) if os.path.isdir(os.path.join(adir, d))} \
        if os.path.isdir(adir) else set()
    bdir = os.path.join(root, 'docs', 'templates')
    names = sorted(d for d in os.listdir(bdir)
                   if os.path.isdir(os.path.join(bdir, d)) and d not in apps)
    if only:
        names = [n for n in names if n in only]

    counts: collections.Counter = collections.Counter()
    recs, flag_rows = [], []
    for name in names:
        d = os.path.join(bdir, name)
        if not md_files(d):
            counts['NO-MARKDOWN'] += 1
            continue
        brief, bshape, bfile = brief_for(root, name)
        status = prep_status(root, name)
        m = SHIPPED_AS.search(status)
        targets = [t.strip() for t in m.group(1).split(',') if t.strip()] if m else []
        tslugs = {t: spec_slug(root, t)[0] for t in targets}
        spec, has_spec = spec_slug(root, name)
        bucket, flags, notes = decide(name, brief, targets, tslugs, apps, spec, has_spec)
        counts[bucket] += 1
        rec = {'name': name, 'bucket': bucket, 'brief': brief, 'brief_shape': bshape,
               'brief_file': bfile, 'spec': spec, 'has_spec': has_spec,
               'targets': targets, 'target_specs': tslugs, 'status': status,
               'flags': flags, 'notes': notes}
        recs.append(rec)
        if flags:
            flag_rows.append(rec)
    return {'counts': dict(counts), 'total': sum(counts.values()),
            'flags': flag_rows, 'records': recs}


BUCKETS = ('UNDER-AGREE', 'UNDER-DRIFT', 'UNDER-BRIEF-SILENT', 'UNDER-TARGET-MISSING',
           'UNDER-TARGET-SILENT', 'PENDING-AGREE', 'PENDING-DRIFT',
           'PENDING-BRIEF-SILENT', 'PENDING-SPEC-SILENT', 'ORPHAN', 'NO-MARKDOWN')


def main() -> int:
    ap = argparse.ArgumentParser(description=(__doc__ or '').splitlines()[0])
    ap.add_argument('--root', default='.')
    ap.add_argument('--only', default='')
    ap.add_argument('--json', default='')
    ap.add_argument('--md', default='')
    ap.add_argument('--verbose', action='store_true')
    a = ap.parse_args()

    root = os.path.abspath(a.root)
    if not os.path.isdir(os.path.join(root, 'openspec')):
        print(f'error: {root} has no openspec/ — not a prep root', file=sys.stderr)
        return 3
    only = {s.strip() for s in a.only.split(',') if s.strip()}
    res = audit(root, only or None)
    c = res['counts']
    print(f'non-app brief dirs read: {res["total"]}')
    for k in BUCKETS:
        if c.get(k):
            print(f'  {k:<22} {c[k]}')
    print(f'flags: {len(res["flags"])}')
    for r in res['flags']:
        tgt = ','.join(r['targets']) or '—'
        print(f'\n{r["bucket"]:<20} {r["name"]:<22} target={tgt:<18} '
              f'spec={r["spec"] or "—":<22} brief={r["brief"] or "—"}')
        for f in r['flags']:
            print(f'    {f}')
    if a.verbose:
        for r in res['records']:
            print(f'{r["bucket"]:<22} {r["name"]:<24} spec={r["spec"]:<22} brief={r["brief"]}')
    if a.json:
        with open(a.json, 'w', encoding='utf-8') as fh:
            json.dump(res, fh, indent=2)
        print(f'\njson -> {a.json}')
    if a.md:
        with open(a.md, 'w', encoding='utf-8') as fh:
            fh.write('| prep dir | bucket | target | spec | brief |\n| --- | --- | --- | --- | --- |\n')
            for r in res['flags']:
                fh.write(f'| `{r["name"]}` | {r["bucket"]} | {",".join(r["targets"]) or "—"} | '
                         f'{r["spec"] or "—"} | {r["brief"] or "—"} |\n')
        print(f'md -> {a.md}')
    return 0 if not res['flags'] else 1


if __name__ == '__main__':
    sys.exit(main())
