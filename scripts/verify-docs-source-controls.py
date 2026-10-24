#!/usr/bin/env python3
"""verify-docs-source-controls.py — control harness for the docs-source axis.

Mutation-based, offline.  Each case builds a synthetic repo root (TEMPLATES.md
+ one app + one spec + one brief) in a tmpdir, or feeds `decide()` fixtures, and
asserts the bucket the axis must return.

A GATE case disables one guard (or removes the evidence) and proves the payload
then fires — a control that cannot fail proves nothing.

Run: python3 scripts/verify-docs-source-controls.py   # expects 15/15 (4 GATE)
"""
from __future__ import annotations

import importlib.util
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, 'verify-docs-source.py')


def _load(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


V = _load(VER, 'verify_docs_source')


def row(name, slug, app):
    return ('- [x] **%s** — [colorlib](https://colorlib.com/wp/template/%s/)'
            ' · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/%s.jpg)'
            ' · [%s](https://%s.free.componentdock.com)' % (name, slug, slug, app, app))


SPEC = """# Template: {app} (Personal)

## Purpose

Recreation of ColorLib "Satner" (`https://colorlib.com/wp/template/{spec}/`).

## Requirements

### Requirement: Hero

#### Scenario: Renders
- **WHEN** it mounts
- **THEN** it renders
"""

BRIEF = """# {app} — Design Notes

- **Source Reference**: ColorLib Schmidt (`https://colorlib.com/wp/template/{brief}/`)
- **Preview**: https://preview.colorlib.com/theme/{brief}/

## Section order
1. Hero
"""

PREVIEW_BRIEF = """# {app} — Design Notes

- **Preview URL**: https://preview.colorlib.com/theme/{brief}/

## Section order
1. Hero
"""


def build(spec='satner', brief='schmidt', rows=None, docs=True, app='smithy',
          preview_only=False):
    root = tempfile.mkdtemp()
    os.makedirs(os.path.join(root, 'apps', app))
    sp = os.path.join(root, 'openspec', 'specs', f'template-{app}')
    os.makedirs(sp)
    open(os.path.join(sp, 'spec.md'), 'w').write(SPEC.format(app=app, spec=spec))
    if docs:
        dd = os.path.join(root, 'docs', 'templates', app)
        os.makedirs(dd)
        tpl = PREVIEW_BRIEF if preview_only else BRIEF
        open(os.path.join(dd, 'design-notes.md'), 'w').write(tpl.format(app=app, brief=brief))
        open(os.path.join(dd, 'tasks.md'), 'w').write('# tasks\n')
    open(os.path.join(root, 'TEMPLATES.md'), 'w').write(
        rows if rows is not None else row('Satner', 'satner', app) + '\n')
    return root


def rec(root, app='smithy'):
    res = V.audit(root, {app})
    return res['records'][0] if res['records'] else {'bucket': 'MISSING'}


# --- cases -----------------------------------------------------------------
def c01():
    r = rec(build())
    assert r['bucket'] == 'DOCS-STALE', r
    assert 'DOCS-NAME' in r['flags'][0], r


def c01g():
    """GATE: with the third opinion disabled the same repo cannot prove staleness."""
    old = V.GUARDS['row_third_opinion']
    V.GUARDS['row_third_opinion'] = False
    try:
        r = rec(build())
        assert r['bucket'] == 'UNLINKED', r
        assert r['flags'] == ['DOCS-SPEC-MISMATCH'], r
    finally:
        V.GUARDS['row_third_opinion'] = old


def c02():
    """brief and spec agree -> AGREE, no flag."""
    r = rec(build(brief='satner'))
    assert r['bucket'] == 'AGREE', r
    assert r['flags'] == [], r


def c03():
    """spec names a design the row does not -> SPEC-STALE (btnspark's shape)."""
    rows = row('Bootstrap Buttons 02', 'bootstrap-buttons-02', 'smithy') + '\n'
    r = rec(build(spec='bootstrap-buttons-14', brief='bootstrap-buttons-02', rows=rows))
    assert r['bucket'] == 'SPEC-STALE', r


def c04():
    """slug normalisation: `harborlights` == `harbor-lights` -> AGREE (portlight's shape)."""
    rows = row('Harbor Lights', 'harbor-lights', 'smithy') + '\n'
    r = rec(build(spec='harbor-lights', brief='harborlights', rows=rows))
    assert r['bucket'] == 'AGREE', r


def c04g():
    """GATE: without normalisation the same pair is DOCS-STALE."""
    old = V.GUARDS['slug_norm']
    V.GUARDS['slug_norm'] = False
    try:
        rows = row('Harbor Lights', 'harbor-lights', 'smithy') + '\n'
        r = rec(build(spec='harbor-lights', brief='harborlights', rows=rows))
        assert r['bucket'] == 'DOCS-STALE', r
    finally:
        V.GUARDS['slug_norm'] = old


def c05():
    """numbered siblings are NOT normalised away: -14 != -02."""
    rows = row('Bootstrap Buttons 14', 'bootstrap-buttons-14', 'smithy') + '\n'
    r = rec(build(spec='bootstrap-buttons-14', brief='bootstrap-buttons-02', rows=rows))
    assert r['bucket'] == 'DOCS-STALE', r


def c06():
    """family prefix is transparent: /theme/bft/bootstrap-footer-15/ -> bootstrap-footer-15."""
    r = rec(build(spec='bootstrap-footer-15',
                  brief='bft/bootstrap-footer-15', preview_only=True))
    assert r['bucket'] == 'AGREE', r
    assert r['brief'] == 'bootstrap-footer-15', r


def c07():
    """a row carrying BOTH designs is ROW-MULTI, not drift (counsel/reachout/roost)."""
    rows = (row('Whisper', 'whisper', 'smithy') + '\n'
            + row('Eric Law', 'ariclaw', 'smithy') + '\n')
    r = rec(build(spec='whisper', brief='ariclaw', rows=rows))
    assert r['bucket'] == 'ROW-MULTI', r
    assert r['flags'] == [], r


def c07g():
    """GATE: the same pair WITHOUT the second row is a real flag."""
    rows = row('Whisper', 'whisper', 'smithy') + '\n'
    r = rec(build(spec='whisper', brief='ariclaw', rows=rows))
    assert r['bucket'] == 'DOCS-STALE', r


def c08():
    """no docs dir -> NO-DOCS, never a flag."""
    res = V.audit(build(docs=False), {'smithy'})
    assert res['counts'].get('NO-DOCS') == 1, res['counts']


def c09():
    """a brief citing no ColorLib design -> DOC-SILENT note, not a flag."""
    root = build()
    open(os.path.join(root, 'docs', 'templates', 'smithy', 'design-notes.md'),
         'w').write('# brief\n\nNo provenance line.\n')
    r = rec(root)
    assert r['bucket'] == 'DOC-SILENT', r
    assert r['flags'] == [], r


def c10():
    """the labelled `Source slug:` tier wins over a stray URL later in the doc."""
    root = build(brief='schmidt')
    p = os.path.join(root, 'docs', 'templates', 'smithy', 'design-notes.md')
    open(p, 'w').write('# brief\n\n- Source slug: `satner`\n\nLater: see '
                       'https://colorlib.com/wp/template/other-design/ for a sibling.\n')
    r = rec(root)
    assert r['brief'] == 'satner', r
    assert r['bucket'] == 'AGREE', r


def c10g():
    """GATE: disabling the label tier makes the same doc read `other-design`."""
    old = V.GUARDS['label_tier']
    V.GUARDS['label_tier'] = False
    try:
        root = build()
        p = os.path.join(root, 'docs', 'templates', 'smithy', 'design-notes.md')
        open(p, 'w').write('# brief\n\n- Source slug: `satner`\n\nLater: see '
                           'https://colorlib.com/wp/template/other-design/ for a sibling.\n')
        r = rec(root)
        assert r['brief'] == 'other-design', r
        assert r['bucket'] == 'DOCS-STALE', r
    finally:
        V.GUARDS['label_tier'] = old


def c11():
    """corpus: 1,703 apps, buckets partition once, 9 flags left after batch 5 (2026-10-24)."""
    root = os.path.dirname(HERE)
    res = V.audit(root)
    assert res['total'] == 1703, res['total']
    buckets = set(res['counts'])
    assert buckets <= {'AGREE', 'DOCS-STALE', 'SPEC-STALE', 'BOTH-STALE',
                       'ROW-MULTI', 'UNLINKED', 'DOC-SILENT', 'NO-DOCS',
                       'NO-SPEC', 'NO-SPEC-SLUG'}, buckets
    # one bucket per app: no double counting
    assert sum(res['counts'].values()) == res['total'], (res['counts'], res['total'])
    by_app = {r['app']: r['bucket'] for r in res['records']}
    assert by_app.get('smithy') == 'AGREE', by_app.get('smithy')      # fixed 2026-10-24 (-24h)
    assert by_app.get('buildwell') == 'AGREE', by_app.get('buildwell')  # fixed 2026-10-24 (design drift)
    for app in ('formbreeze', 'guideway', 'medical', 'soundbite'):        # citation defects, same run
        assert by_app.get(app) == 'AGREE', (app, by_app.get(app))
    for app in ('lenscape', 'craftwork', 'vignette'):                      # briefs re-measured 2026-10-24 (batch 3)
        assert by_app.get(app) == 'AGREE', (app, by_app.get(app))
    assert by_app.get('btnspark') == 'AGREE', by_app.get('btnspark')       # spec re-read from -02 2026-10-24
    for app in ('captura', 'crux', 'derrick'):                            # briefs re-measured 2026-10-24 (batch 4)
        assert by_app.get(app) == 'AGREE', (app, by_app.get(app))
    for app in ('querybar', 'searchgate', 'jobpulse', 'reachform', 'dropform'):  # briefs re-measured 2026-10-24 (batch 5)
        assert by_app.get(app) == 'AGREE', (app, by_app.get(app))
    assert len(res['flags']) == 9, len(res['flags'])


CASES = [
    (c01, 'brief names another design -> DOCS-STALE', False),
    (c01g, 'GATE  without the row opinion the same repo is only UNLINKED', True),
    (c02, 'brief and spec agree -> AGREE', False),
    (c03, 'spec off-row, brief on-row -> SPEC-STALE', False),
    (c04, 'slug normalisation: harborlights == harbor-lights', False),
    (c04g, 'GATE  without normalisation the same pair flags', True),
    (c05, 'numbered siblings are not normalised away (-14 != -02)', False),
    (c06, 'family prefix is transparent (/theme/bft/<slug>/)', False),
    (c07, 'a row carrying both designs is ROW-MULTI, not drift', False),
    (c07g, 'GATE  the same pair with one row is DOCS-STALE', True),
    (c08, 'missing docs dir -> NO-DOCS, never a flag', False),
    (c09, 'brief without provenance -> DOC-SILENT note', False),
    (c10, 'the labelled `Source slug:` tier wins over a later URL', False),
    (c10g, 'GATE  disabling the label tier reads the later URL', True),
    (c11, 'corpus: 1,703 apps, 9 flags, the 18 brief/spec fixes through batch 5 all AGREE', False),
]


def main() -> int:
    ok = gate_ok = 0
    for fn, name, gate in CASES:
        try:
            fn()
            ok += 1
            gate_ok += 1 if gate else 0
            print(f'PASS  {name}')
        except AssertionError as e:
            print(f'FAIL  {name}  <- {e}')
        except Exception as e:  # noqa: BLE001
            print(f'ERROR {name}  <- {type(e).__name__}: {e}')
    print(f'\n{ok}/{len(CASES)} controls pass ({gate_ok} GATE)')
    return 0 if ok == len(CASES) else 1


if __name__ == '__main__':
    sys.exit(main())
