#!/usr/bin/env python3
"""verify-provenance-grammar-controls.py — control harness for the provenance axis.

Mutation-based and fully offline: every case builds a synthetic repo root (a
TEMPLATES.md, one spec, optionally one app folder) in a tmpdir. No network.

The GATE cases disable ONE guard in the verifier (or re-run the fixer) and prove
the payload then fires or that the fixer is a byte-level no-op — a control that
cannot fail proves nothing.

Run: python3 verify-provenance-grammar-controls.py      # expects 25/25 (8 GATE)
"""
from __future__ import annotations

import hashlib
import importlib.util
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, 'verify-provenance-grammar.py')
FIX = os.path.join(HERE, 'fix-provenance-grammar.py')


def _load(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def row(name, slug, app=None):
    tail = f' · [{app}](https://{app}.free.componentdock.com)' if app else ''
    return ('- [x] **%s** — [colorlib](https://colorlib.com/wp/template/%s/)'
            ' · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/%s.jpg)%s'
            % (name, slug, slug, tail))


ROWS = '\n'.join([
    row('Classic', 'classic', 'acumen'),
    row('Faith 2', 'faith-2', 'homily'),
    row('Accordion 04', 'accordion-04', 'foldout'),
    row('Bootstrap Buttons 02', 'bootstrap-buttons-02', 'btnsmith'),
    row('Itkol', 'itkol', 'itkol'),
    row('Modal 19', 'modal-19', 'reviewpop'),
])

SPEC = """# Template: {folder} ({cat})

## Purpose

{purpose}

## Design tokens

- **Brand:** `#123456`

## Requirements

### Requirement: Hero

#### Scenario: Renders
- **WHEN** it mounts
- **THEN** it renders
"""


def build(purpose, folder='acumen', cat='Business', app=False, rows=ROWS):
    root = tempfile.mkdtemp()
    open(os.path.join(root, 'TEMPLATES.md'), 'w').write(rows + '\n')
    d = os.path.join(root, 'openspec', 'specs', f'template-{folder}')
    os.makedirs(d)
    path = os.path.join(d, 'spec.md')
    open(path, 'w').write(SPEC.format(folder=folder, cat=cat, purpose=purpose))
    if app:
        os.makedirs(os.path.join(root, 'apps', folder))
        open(os.path.join(root, 'apps', folder, 'package.json'), 'w').write('{}')
    return root, path


def md5(path):
    return hashlib.md5(open(path, 'rb').read()).hexdigest()


def audit(root, guard=None, value=True, also=None):
    """Run one audit; `guard` (plus `also`) flips GUARDS keys for the call."""
    mod = _load(VER, 'vpg_ctl')
    flips = dict(also or {})
    if guard:
        flips[guard] = value
    old = {k: mod.GUARDS[k] for k in flips}
    for k, v in flips.items():
        mod.GUARDS[k] = v
    try:
        return mod.audit(root)
    finally:
        mod.GUARDS.update(old)


def only(rep):
    assert rep['specs'] == 1, rep['specs']
    return rep['rows'][0]


def kinds(rep):
    rec = only(rep)
    return rec['kind'], [f[0] for f in rec['flags']], rec['name']


CASES = []


def case(fn, name, gate=False):
    CASES.append((name, fn, gate))


# --- grammar parity ---------------------------------------------------------
def c01():
    root, _ = build('Recreation of the ColorLib "Classic" business template.')
    k, f, n = kinds(audit(root))
    assert k == 'PARSED' and n == 'Classic' and 'UNSEEN' not in f


def c02():
    root, _ = build('Recreation of the ColorLib free "Classic" hero template.')
    assert kinds(audit(root))[0] == 'PARSED'


def c03():
    root, _ = build('Recreation of the ColorLib \u201cClassic\u201d hero template.')
    assert kinds(audit(root))[0] == 'PARSED'


def c19():
    """audit-naming.mjs spans newlines; the axis must agree or it over-reports."""
    root, _ = build('Recreation of the ColorLib "Colorlib\nError 404 V7" page.')
    k, f, n = kinds(audit(root))
    assert k == 'PARSED' and n == 'Colorlib Error 404 V7', (k, n)


# --- resolution ------------------------------------------------------------
def c04():
    root, _ = build('A recreation of https://preview.colorlib.com/theme/classic/ '
                    'as a React app.')
    k, f, n = kinds(audit(root))
    assert k == 'RESOLVABLE' and n == 'Classic' and 'UNSEEN' in f, (k, n)


def c04g():
    """GATE: with the slug index gone the same spec is NO-EVIDENCE."""
    root, _ = build('A recreation of https://preview.colorlib.com/theme/classic/ '
                    'as a React app.')
    rep = audit(root, 'slug_index', False, also={'normalize': False})
    rec = only(rep)
    assert rec['kind'] == 'NO-EVIDENCE', rec['kind']
    assert 'NO-EVIDENCE' in [n[0] for n in rec['notes']]


def c05():
    root, _ = build('Recreation of https://preview.colorlib.com/theme/bootstrap/'
                    'modal-19/ — a modal demo.')
    assert kinds(audit(root))[2] == 'Modal 19'


def c06():
    root, _ = build('Recreation of https://preview.colorlib.com/theme/bb/'
                    'bootstrap-buttons-02/ — a button demo.')
    assert kinds(audit(root))[2] == 'Bootstrap Buttons 02'


def c07():
    root, _ = build('Recreation of https://preview.colorlib.com/theme/faith2/ '
                    'for churches.')
    k, f, n = kinds(audit(root))
    assert k == 'RESOLVABLE' and n == 'Faith 2', (k, n)


def c07g():
    """GATE: without slug normalisation `faith2` does not resolve to `faith-2`."""
    root, _ = build('Recreation of https://preview.colorlib.com/theme/faith2/ '
                    'for churches.')
    k, _, n = kinds(audit(root, 'normalize', False))
    assert k == 'NO-EVIDENCE', (k, n)


def c08():
    root, _ = build('Recreation of the ColorLib **Classic** business template.')
    k, f, n = kinds(audit(root))
    rec = only(audit(root))
    assert k == 'RESOLVABLE' and n == 'Classic' and rec['shape'] == 'bold'


def c18():
    """A `Source slug:` label alone resolves (ledgerpeak: slug `book-keeping`
    whose preview path is `bookkeeping`)."""
    rows = ROWS + '\n' + row('Book Keeping', 'book-keeping', 'ledgerpeak')
    root, _ = build('Recreation of the bookkeeping design.\n\n'
                    '- Source slug: `book-keeping`', folder='ledgerpeak', rows=rows)
    assert kinds(audit(root))[2] == 'Book Keeping'


def c09():
    root, _ = build('A landing page with hero, features and footer.')
    rec = only(audit(root))
    assert rec['kind'] == 'NO-EVIDENCE'
    assert [n[0] for n in rec['notes']].count('NO-EVIDENCE') == 1


# --- rule 5 ----------------------------------------------------------------
def c10():
    root, _ = build('Recreation of the ColorLib "Acumen" template.', folder='acumen', app=True)
    assert 'RULE5' in [f[0] for f in only(audit(root))['flags']]


def c11():
    """`apps/itkol` quotes the marketing title but the folder IS the slug."""
    root, _ = build('ColorLib "IT-Solution" — '
                    'https://colorlib.com/wp/template/itkol/ — an IT services site.',
                    folder='itkol', app=True)
    f = [x[0] for x in only(audit(root))['flags']]
    assert 'RULE5-HIDDEN' in f and 'RULE5' not in f, f


def c12():
    root, _ = build('Recreation of the ColorLib "Classic" template.', folder='acumen', app=True)
    f = [x[0] for x in only(audit(root))['flags']]
    assert 'RULE5' not in f and 'RULE5-HIDDEN' not in f, f


def c12g():
    """GATE: the rule-5 test off means the violation cannot fire."""
    root, _ = build('Recreation of the ColorLib "Acumen" template.', folder='acumen', app=True)
    f = [x[0] for x in only(audit(root, 'rule5', False))['flags']]
    assert 'RULE5' not in f


# --- fixer -----------------------------------------------------------------
def run_fix(root, dry=False, guards=None):
    mod = _load(FIX, 'fpg_ctl')
    for k, v in (guards or {}).items():
        mod.VPG.GUARDS[k] = v
    argv = sys.argv
    sys.argv = ['fix', '--root', root] + (['--dry-run'] if dry else [])
    try:
        return mod.main()
    finally:
        sys.argv = argv


def c13():
    """quote-in-place, then a byte-identical second run (GATE)."""
    root, path = build('Recreation of the ColorLib **Classic** business template.')
    assert run_fix(root) == 0
    text = open(path).read()
    assert 'ColorLib "Classic"' in text and '**Classic**' not in text, text[:200]
    h = md5(path)
    run_fix(root)
    assert md5(path) == h
    assert only(audit(root))['kind'] == 'PARSED'


def c14():
    """insert into Purpose, keep the URL, keep the heading count (GATE)."""
    root, path = build('A recreation of https://preview.colorlib.com/theme/classic/ '
                       'as a React app.')
    before = open(path).read().count('## ')
    assert run_fix(root) == 0
    text = open(path).read()
    assert '- **Source design:** ColorLib "Classic" — https://colorlib.com/wp/template/classic/' in text, text
    assert text.count('## ') == before
    assert text.index('ColorLib') < text.index('## Design tokens'), 'inserted outside Purpose'
    assert only(audit(root))['kind'] == 'PARSED'


def c15():
    """a parsed spec is never touched."""
    root, path = build('Recreation of the ColorLib "Classic" template.')
    h = md5(path)
    run_fix(root)
    assert md5(path) == h


def c16():
    """no evidence -> refuse, byte-identical."""
    root, path = build('A landing page with hero, features and footer.')
    h = md5(path)
    assert run_fix(root) == 1
    assert md5(path) == h


def c17():
    """a bare `ColorLib Halo` is quoted in place, not duplicated by an insert."""
    rows = ROWS + '\n' + row('Halo', 'halo', 'beacon')
    root, path = build('Recreate the ColorLib Halo photography template as an app.',
                       folder='beacon', rows=rows)
    assert run_fix(root) == 0
    text = open(path).read()
    assert 'ColorLib "Halo"' in text and 'Source design' not in text, text


def c17g():
    """GATE: with the prose guards off, nothing resolves and the fixer writes nothing."""
    root, path = build('Recreate the ColorLib Halo photography template as an app.',
                       folder='beacon', rows=ROWS + '\n' + row('Halo', 'halo', 'beacon'))
    h = md5(path)
    off = {'prose': False, 'slug_index': False, 'normalize': False}
    assert run_fix(root, guards=off) == 1 and md5(path) == h


def c20():
    """A `ColorLib X` inside a heading is grammar, not prose: insert, never edit it."""
    rows = ROWS + '\n' + row('Restauco', 'restauco', 'dinecraft')
    root, path = build('A restaurant landing page.\n\n'
                       '## Sections and Structure (1:1 with ColorLib Restauco)\n\n'
                       '1. Header\n', folder='dinecraft', rows=rows)
    assert run_fix(root) == 0
    text = open(path).read()
    assert '## Sections and Structure (1:1 with ColorLib Restauco)' in text, 'heading rewritten'
    assert '- **Source design:** ColorLib "Restauco"' in text


def c21():
    """A previous insert's stray blank line is tidied, and the tidy is a no-op after."""
    root, path = build('A recreation of https://preview.colorlib.com/theme/classic/ app.')
    assert run_fix(root) == 0
    text = open(path).read()
    text = text.replace('template/classic/\n\n', 'template/classic/\n\n\n')
    open(path, 'w').write(text)
    assert run_fix(root) == 0
    once = open(path).read()
    assert '\n\n\n' not in once, 'stray blank line survived'
    assert run_fix(root) == 0
    assert open(path).read() == once


case(c01, 'quoted grammar -> PARSED')
case(c02, '`ColorLib free "X"` -> PARSED')
case(c03, 'curly quotes -> PARSED')
case(c19, 'newline-spanning quote -> PARSED (audit parity)', gate=True)
case(c04, 'preview URL + row -> RESOLVABLE')
case(c04g, 'GATE: no slug index -> NO-EVIDENCE', gate=True)
case(c05, '`theme/bootstrap/<slug>/` ladder')
case(c06, '`theme/bb/<slug>/` ladder')
case(c07, 'normalised slug faith2 -> Faith 2')
case(c07g, 'GATE: no normalisation -> NO-EVIDENCE', gate=True)
case(c08, 'prose bold alone -> RESOLVABLE')
case(c18, '`Source slug:` label -> RESOLVABLE')
case(c09, 'nothing -> NO-EVIDENCE, one note')
case(c10, 'folder == quoted name -> RULE5')
case(c11, 'folder == slug, marketing title quoted -> RULE5-HIDDEN')
case(c12, 'compliant folder -> no rule-5 flag')
case(c12g, 'GATE: rule-5 test off -> no flag', gate=True)
case(c13, 'fixer quotes in place, second run byte-identical (GATE)', gate=True)
case(c14, 'fixer inserts in Purpose with URL, headings intact (GATE)', gate=True)
case(c15, 'fixer skips a parsed spec')
case(c16, 'fixer refuses NO-EVIDENCE')
case(c17, 'fixer quotes a bare `ColorLib Halo` in place')
case(c17g, 'GATE: guards off -> fixer writes nothing', gate=True)
case(c20, 'GATE: a heading match is never rewritten, insert instead', gate=True)
case(c21, 'stray blank line from an old insert is tidied once')


def main() -> int:
    ok = 0
    fails = []
    for name, fn, gate in CASES:
        try:
            fn()
            ok += 1
            print(f'  PASS{"  GATE" if gate else "      "}  {name}')
        except Exception as exc:  # noqa: BLE001 — a control reports, never raises
            fails.append((name, exc))
            print(f'  FAIL{"  GATE" if gate else "      "}  {name}: {exc}')
    gates = sum(1 for _, _, g in CASES if g)
    print(f'\n{ok}/{len(CASES)} controls pass ({gates} GATE)')
    if fails:
        return 1
    return 0


if __name__ == '__main__':
    sys.exit(main())
