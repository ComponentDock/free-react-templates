#!/usr/bin/env python3
"""verify-brief-spec-controls.py — control harness for the BRIEF-PENDING axis.

Mutation-based, offline.  Each case builds a synthetic repo root (apps/ + one
spec + one brief) in a tmpdir and asserts the bucket the axis must return.  A
GATE case disables one guard (or removes the evidence) and proves the payload
then fires — a control that cannot fail proves nothing.

Run: python3 scripts/verify-brief-spec-controls.py   # expects 15/15 (4 GATE)
"""
from __future__ import annotations

import importlib.util
import os
import shutil
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, 'verify-brief-spec.py')


def _load(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


V = _load(VER, 'verify_brief_spec')

_TMPDIRS: list[str] = []          # synthetic roots, removed after the run


def root(apps=(), specs=(), briefs=()):
    """tmpdir with apps/, openspec/specs/template-*/spec.md, docs/templates/*/*.md."""
    d = tempfile.mkdtemp(prefix='briefspec-')
    _TMPDIRS.append(d)
    os.makedirs(os.path.join(d, 'openspec'), exist_ok=True)
    for app in apps:
        os.makedirs(os.path.join(d, 'apps', app), exist_ok=True)
    for name, slug in specs:
        p = os.path.join(d, 'openspec', 'specs', f'template-{name}')
        os.makedirs(p, exist_ok=True)
        open(os.path.join(p, 'spec.md'), 'w', encoding='utf-8').write(
            f'# Template: {name}\n\n## Purpose\n\nRecreation of ColorLib '
            f'(`https://colorlib.com/wp/template/{slug}/`).\n')
    for name, fname, body in briefs:
        p = os.path.join(d, 'docs', 'templates', name)
        os.makedirs(p, exist_ok=True)
        open(os.path.join(p, fname), 'w', encoding='utf-8').write(body)
    return d


def brief(slug, marker=None, title=None):
    head = f'# {title or "Brief"} — Design Notes\n'
    if marker:
        head += f'<!-- prep-status: shipped-as={marker} -->\n'
    return head + f'\n- **Source slug:** `{slug}`\n\n## Sections\n1. Hero\n'


def run(d, only):
    res = V.audit(d, {only})
    assert res['total'] == 1, (res['total'], res['counts'])
    return res['records'][0], res['flags']


def expect(d, only, bucket, want_flag):
    rec, flags = run(d, only)
    assert rec['bucket'] == bucket, (rec['bucket'], bucket, rec)
    assert bool(flags) == want_flag, (rec['bucket'], flags)
    return rec


def c01():
    """brief names another design than the shipped-as target's spec -> UNDER-DRIFT."""
    d = root(apps=['beta'], specs=[('beta', 'design-b')],
             briefs=[('alpha', 'tasks.md', brief('design-a', marker='beta'))])
    expect(d, 'alpha', 'UNDER-DRIFT', True)


def c01g():
    """GATE: drop the marker and the same dir is not checked against a target at all."""
    d = root(apps=['beta'], specs=[('beta', 'design-b')],
             briefs=[('alpha', 'tasks.md', brief('design-a'))])
    rec = expect(d, 'alpha', 'ORPHAN', True)
    assert rec['targets'] == [], rec['targets']


def c02():
    """brief and target spec name the same design -> UNDER-AGREE, no flag."""
    d = root(apps=['beta'], specs=[('beta', 'design-b')],
             briefs=[('alpha', 'tasks.md', brief('design-b', marker='beta'))])
    expect(d, 'alpha', 'UNDER-AGREE', False)


def c02g():
    """GATE: disabling the prep-status guard makes a marked dir an ORPHAN."""
    d = root(apps=['beta'], specs=[('beta', 'design-b')],
             briefs=[('alpha', 'tasks.md', brief('design-b', marker='beta'))])
    V.GUARDS['prep_status'] = False
    try:
        expect(d, 'alpha', 'ORPHAN', True)
    finally:
        V.GUARDS['prep_status'] = True


def c03():
    """multi-target `shipped-as=a,b`: naming the second target is AGREE (row-multiplicity)."""
    d = root(apps=['beta', 'gamma'], specs=[('beta', 'design-b'), ('gamma', 'design-c')],
             briefs=[('alpha', 'tasks.md', brief('design-c', marker='beta,gamma'))])
    rec = expect(d, 'alpha', 'UNDER-AGREE', False)
    assert any(n.startswith('ROW-MULTI') for n in rec['notes']), rec['notes']


def c03g():
    """GATE: naming NEITHER target still flags."""
    d = root(apps=['beta', 'gamma'], specs=[('beta', 'design-b'), ('gamma', 'design-c')],
             briefs=[('alpha', 'tasks.md', brief('design-z', marker='beta,gamma'))])
    expect(d, 'alpha', 'UNDER-DRIFT', True)


def c04():
    """`shipped-as=` names an app that does not exist -> UNDER-TARGET-MISSING."""
    d = root(apps=[], specs=[], briefs=[('alpha', 'tasks.md', brief('design-a', marker='ghost'))])
    rec = expect(d, 'alpha', 'UNDER-TARGET-MISSING', True)
    assert 'TARGET-NO-APP:ghost' in rec['flags'][0], rec['flags']


def c05():
    """no marker, spec present, brief names another design -> PENDING-DRIFT."""
    d = root(specs=[('alpha', 'design-a')],
             briefs=[('alpha', 'design-notes.md', brief('design-b'))])
    expect(d, 'alpha', 'PENDING-DRIFT', True)


def c06():
    """spec names no design while the brief does -> PENDING-SPEC-SILENT (the `coral` class)."""
    d = root(specs=[('alpha', 'design-a')],
             briefs=[('alpha', 'tasks.md', brief('design-a'))])
    sp = os.path.join(d, 'openspec', 'specs', 'template-alpha', 'spec.md')
    open(sp, 'w', encoding='utf-8').write('# Template: Alpha\n\n## Purpose\n\nAn error page.\n')
    expect(d, 'alpha', 'PENDING-SPEC-SILENT', True)


def c07():
    """brief names no design at all -> note bucket, never a flag."""
    d = root(specs=[('alpha', 'design-a')],
             briefs=[('alpha', 'todo.md', '# Alpha — Tasks\n\n## Sections\n1. Hero\n')])
    expect(d, 'alpha', 'PENDING-BRIEF-SILENT', False)


def c08():
    """brief with no spec and no marker -> ORPHAN (prep artifact without a claim)."""
    d = root(briefs=[('alpha', 'notes.md', brief('design-a'))])
    expect(d, 'alpha', 'ORPHAN', True)


def c09():
    """family spelling: `login-form-v16` brief vs `Login_v16` spec is the same design."""
    d = root(specs=[('alpha', 'Login_v16')],
             briefs=[('alpha', 'tasks.md', brief('login-form-v16'))])
    expect(d, 'alpha', 'PENDING-AGREE', False)


def c09g():
    """GATE: without family normalisation the same pair flags."""
    d = root(specs=[('alpha', 'Login_v16')],
             briefs=[('alpha', 'tasks.md', brief('login-form-v16'))])
    V.GUARDS['family_norm'] = False
    try:
        expect(d, 'alpha', 'PENDING-DRIFT', True)
    finally:
        V.GUARDS['family_norm'] = True


def c10():
    """a page FILE is not a design: /theme/tattooz/tattoo/index.html reads `tattooz`."""
    d = root(specs=[('alpha', 'tattooz')],
             briefs=[('alpha', 'notes.md',
                      '# Alpha — Notes\n\nPreview: https://preview.colorlib.com/theme/'
                      'tattooz/tattoo/index.html\n')])
    rec = expect(d, 'alpha', 'PENDING-AGREE', False)
    assert rec['brief'] == 'tattooz', rec['brief']


def c11():
    """corpus: 1,533 non-app brief dirs, 0 flags, the batch-1 fixes hold."""
    base = os.path.dirname(HERE)
    res = V.audit(base)
    assert res['total'] == 1533, res['total']
    assert sum(res['counts'].values()) == res['total'], (res['counts'], res['total'])
    ok = {'UNDER-AGREE', 'UNDER-DRIFT', 'UNDER-BRIEF-SILENT', 'UNDER-TARGET-MISSING',
          'UNDER-TARGET-SILENT', 'PENDING-AGREE', 'PENDING-DRIFT',
          'PENDING-BRIEF-SILENT', 'PENDING-SPEC-SILENT', 'ORPHAN', 'NO-MARKDOWN'}
    assert set(res['counts']) <= ok, set(res['counts']) - ok
    by = {r['name']: r['bucket'] for r in res['records']}
    # the five header/citation fixes of this batch
    for name in ('cruiseo', 'tidecrest', 'vesture', 'btnvault', 'calflow'):
        assert by.get(name) == 'UNDER-AGREE', (name, by.get(name))
    # the nine specs given a provenance block
    for name in ('coral', 'jewel', 'mist', 'onyx', 'umbra', 'wisp', 'zephyr',
                 'nuzzle', 'whelp'):
        assert by.get(name) == 'PENDING-AGREE', (name, by.get(name))
    # the ten spec-less dirs, now marked instead of claiming a spec
    for name in ('archi', 'elena-voss', 'eventor', 'financeflow', 'hvac',
                 'lamellar', 'major', 'neuralflow', 'photon', 'sweeply'):
        assert by.get(name) == 'UNDER-AGREE', (name, by.get(name))
    assert len(res['flags']) == 0, (len(res['flags']), res['flags'][:3])


CASES = [
    (c01, 'brief contradicts its shipped-as target -> UNDER-DRIFT', False),
    (c01g, 'GATE  without the marker the same dir is ORPHAN', True),
    (c02, 'brief and target spec agree -> UNDER-AGREE', False),
    (c02g, 'GATE  disabling the prep-status guard makes a marked dir ORPHAN', True),
    (c03, 'multi-target marker: second target is enough', False),
    (c03g, 'GATE  multi-target: naming neither target still flags', True),
    (c04, 'shipped-as names a missing app -> UNDER-TARGET-MISSING', True),
    (c05, 'pending prep, brief contradicts spec -> PENDING-DRIFT', True),
    (c06, 'spec names no design -> PENDING-SPEC-SILENT', True),
    (c07, 'brief names no design -> note, never a flag', False),
    (c08, 'brief without spec and without marker -> ORPHAN', True),
    (c09, 'family spelling login-form-v16 == Login_v16', False),
    (c09g, 'GATE  without family normalisation the same pair flags', True),
    (c10, 'a page file is not a design (tattooz/tattoo/index.html)', False),
    (c11, 'corpus: 1,533 briefs, partitions once, batch-1 fixes hold', False),
]


def main() -> int:
    bad = 0
    gates = 0
    for fn, label, is_gate in CASES:
        d = None
        try:
            r = fn()
            if isinstance(r, str):
                d = r
            print(f'PASS  {label}')
            gates += 1 if is_gate else 0
        except AssertionError as exc:
            bad += 1
            print(f'FAIL  {label}\n      {exc}')
    for path in _TMPDIRS:
        shutil.rmtree(path, ignore_errors=True)
    total = len(CASES)
    print(f'\n{total - bad}/{total} controls pass '
          f'({sum(1 for c in CASES if "GATE" in c[1])} GATE)')
    return 0 if bad == 0 else 1


if __name__ == '__main__':
    sys.exit(main())
