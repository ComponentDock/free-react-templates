#!/usr/bin/env python3
"""verify-spec-row-mismatch-controls.py — control harness for the spec↔row axis.

Mutation-based. The corpus cases build a synthetic repo root (a TEMPLATES.md,
one spec, optionally one app folder) in a tmpdir; the adjudication cases feed
`exclusive_hits()` / `decide()` fixtures, so nothing here needs the network.

A GATE case disables one guard (or removes the evidence) and proves the
payload then fires — a control that cannot fail proves nothing.

Run: python3 scripts/verify-spec-row-mismatch-controls.py   # expects 16/16 (6 GATE)
"""
from __future__ import annotations

import importlib.util
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, 'verify-spec-row-mismatch.py')
REPO = os.path.dirname(HERE)


def _load(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def row(name, slug, app=None, label=None):
    tail = f' · [{label or app}](https://{app}.free.componentdock.com)' if app else ''
    return ('- [x] **%s** — [colorlib](https://colorlib.com/wp/template/%s/)'
            ' · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/%s.jpg)%s'
            % (name, slug, slug, tail))


ROWS = '\n'.join([
    row('Classic', 'classic', 'acumen'),
    row('Accordion 16', 'accordion-16', 'concertina'),
    row('Ashion', 'ashion', 'atelier', label='Atelier'),      # label ≠ subdomain
    row('Design', 'design', 'sketch'),
    row('Readit', 'readit', 'vellum'),
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
    open(os.path.join(d, 'spec.md'), 'w').write(
        SPEC.format(folder=folder, cat=cat, purpose=purpose))
    if app:
        os.makedirs(os.path.join(root, 'apps', folder, 'src'))
        open(os.path.join(root, 'apps', folder, 'src', 'App.tsx'), 'w').write(
            'export const a = "The Easiest Way To Get Your Dream Job"\n')
    return root


def audit(root, guard=None, value=True):
    mod = _load(VER, 'vsrm_ctl')
    old = mod.GUARDS.get(guard)
    if guard:
        mod.GUARDS[guard] = value
    try:
        return mod.audit(root)
    finally:
        if guard:
            mod.GUARDS[guard] = old


def one(rep):
    assert rep['specs'] == 1, rep['specs']
    return rep['rows'][0]


CASES = []


def case(fn, name, gate=False):
    CASES.append((name, fn, gate))


# --- buckets --------------------------------------------------------------
def c01():
    root = build('Recreation of the ColorLib "Classic" business template '
                 '(https://colorlib.com/wp/template/classic/).', app=True)
    rec = one(audit(root))
    assert rec['bucket'] == 'AGREE' and not rec['flags'], rec


def c02():
    """The row that links the app names a different design -> DRIFT."""
    root = build('Recreation of the ColorLib "Readit" blog template '
                 '(https://colorlib.com/wp/template/readit/).',
                 folder='acumen', app=True)
    rec = one(audit(root))
    assert rec['bucket'] == 'DRIFT', rec['bucket']
    assert rec['flags'][0][0] == 'SPEC-ROW-MISMATCH'


def c02g():
    """GATE: with the row map disabled nothing is compared -> no flag."""
    root = build('Recreation of the ColorLib "Readit" blog template '
                 '(https://colorlib.com/wp/template/readit/).', app=True)
    rep = audit(root, 'row_app', False)
    rec = one(rep)
    assert rec['bucket'] == 'UNLINKED' and not rep['flags'], rec


def c03():
    """A prep-only spec (no apps/<folder>) is informational, never a flag."""
    root = build('Recreation of the ColorLib "Readit" blog template '
                 '(https://colorlib.com/wp/template/readit/).')
    rep = audit(root)
    rec = one(rep)
    assert rec['bucket'] == 'PREP' and not rep['flags'], rec
    assert 'NO-APP' in [n[0] for n in rec['notes']]


def c04():
    """No source URL at all -> NO-SLUG + flag (cannot be adjudicated)."""
    root = build('A page with no provenance at all.', app=True)
    rec = one(audit(root))
    assert rec['bucket'] == 'NO-SLUG', rec['bucket']
    assert rec['flags'][0][0] == 'SPEC-SLUG-UNRESOLVED'


def c05():
    """The row's LINK TEXT is not the app name (`[Atelier]` -> `atelier`)."""
    root = build('Recreation of the ColorLib "Ashion" store '
                 '(https://colorlib.com/wp/template/ashion/).',
                 folder='atelier', app=True)
    rec = one(audit(root))
    assert rec['row_slugs'] == ['ashion'], rec['row_slugs']
    assert rec['bucket'] == 'AGREE'


def c05g():
    """GATE: the pre-2026-10-24 regex (text must equal subdomain) misses it."""
    import re
    row_app_old = re.compile(r'\[([\w.-]+)\]\(https://\1\.free\.componentdock\.com\)')
    line = row('Ashion', 'ashion', 'atelier', label='Atelier')
    assert row_app_old.findall(line) == [], 'old regex should miss [Atelier]'
    assert [a.lower() for a in re.findall(
        r'\]\(https://([\w.-]+)\.free\.componentdock\.com\)', line, re.I)] == ['atelier']


def c06():
    """Two designs' rows link one app -> ROW-MULTI note."""
    rows = ROWS + '\n' + row('Design 2', 'design-2', 'atelier')
    root = build('Recreation of the ColorLib "Ashion" store '
                 '(https://colorlib.com/wp/template/ashion/).',
                 folder='atelier', app=True, rows=rows)
    rec = one(audit(root))
    assert [n[0] for n in rec['notes']].count('ROW-MULTI') == 1, rec['notes']
    assert rec['bucket'] == 'AGREE'          # the spec names one of its two rows


def c06g():
    """GATE: with the guard off the multi-row note disappears."""
    rows = ROWS + '\n' + row('Design 2', 'design-2', 'atelier')
    root = build('Recreation of the ColorLib "Ashion" store '
                 '(https://colorlib.com/wp/template/ashion/).',
                 folder='atelier', app=True, rows=rows)
    rec = one(audit(root, 'row_multi', False))
    assert 'ROW-MULTI' not in [n[0] for n in rec['notes']]


def c07():
    """A preview path segment resolves (`theme/bac/accordion-16/`)."""
    root = build('Recreation of https://preview.colorlib.com/theme/bac/'
                 'accordion-16/ accordion demo.', folder='accordion-sixteen', app=False)
    rec = one(audit(root))
    assert rec['slug'] == 'accordion-16', rec['slug']


def c08():
    """Slug normalisation: `faith2` in the spec, `faith-2` in the row."""
    rows = ROWS + '\n' + row('Faith 2', 'faith-2', 'homily')
    root = build('Recreation of https://preview.colorlib.com/theme/faith2/',
                 folder='homily', app=True, rows=rows)
    assert one(audit(root))['bucket'] == 'AGREE'


def c08g():
    """GATE: without normalisation the same spec reads as DRIFT."""
    rows = ROWS + '\n' + row('Faith 2', 'faith-2', 'homily')
    root = build('Recreation of https://preview.colorlib.com/theme/faith2/',
                 folder='homily', app=True, rows=rows)
    assert one(audit(root, 'slug_norm', False))['bucket'] == 'DRIFT'


def c09():
    """A slug no row carries is noted, not confused with drift."""
    root = build('Recreation of https://colorlib.com/wp/template/nowhere/',
                 folder='acumen', app=True)
    rec = one(audit(root))
    assert 'NO-ROW-SLUG' in [n[0] for n in rec['notes']], rec['notes']


# --- adjudication (pure functions, no network) ----------------------------
def c10():
    """Family boilerplate present in BOTH candidates must not score."""
    bodies = {
        'accordion-03': ['behind the word mountains'],
        'accordion-01': ['behind the word mountains', 'Spa Therapies', 'Face Treatments'],
    }
    scores = _load(VER, 'vsrm_ctl2').exclusive_hits(bodies)
    assert scores['accordion-03'] == [], scores
    assert 'Spa Therapies' in scores['accordion-01']


def c11():
    """Verdict mapping: the winner decides WHICH record is stale."""
    mod = _load(VER, 'vsrm_ctl3')
    two = ['a two', 'b two']
    assert mod.decide({'readit': two, 'accordion-16': []}, 'readit', ['accordion-16'])[0] == 'ROW-POINTER'
    assert mod.decide({'readit': two, 'accordion-16': []}, 'accordion-16', ['readit'])[0] == 'SPEC-STALE'
    assert mod.decide({'readit': two, 'accordion-16': [], 'footer-9': two + ['c nine']},
                      'accordion-16', ['readit'])[0] == 'BOTH-STALE'   # third design wins outright
    assert mod.decide({'readit': two, 'accordion-16': [], 'carousel-3': two},
                      'accordion-16', ['readit'])[0] == 'UNRESOLVED'   # tie refuses


def c11g():
    """GATE: below MIN_EVIDENCE a single shared phrase is not a verdict."""
    mod = _load(VER, 'vsrm_ctl4')
    v, _, _ = mod.decide({'readit': ['one hit'], 'accordion-16': []}, 'accordion-16', ['readit'])
    assert v == 'UNRESOLVED', v
    assert mod.MIN_EVIDENCE == 2


def c12():
    """The corpus itself: 10 DRIFT apps after the 2026-10-24h `formwell` rewrite.

    19 were measured, 17 after the row-map fix (atelier/landing/villa were
    false positives from matching the row's LINK TEXT), 15 after the `jobboard`
    and `medical` provenance corrections landed, 12 after `ledger` + `bistro`,
    11 after `concertina`, 10 after `formwell` (each rewrite moves its app to
    AGREE because the spec then names the design its row already carries).
    """
    mod = _load(VER, 'vsrm_ctl5')
    rep = mod.audit(REPO)
    drift = {r['app'] for r in rep['rows'] if r['bucket'] == 'DRIFT'}
    for gone in ('atelier', 'landing', 'villa', 'jobboard', 'medical',
                 'ledger', 'bistro', 'concertina', 'formwell', 'btnspark'):
        assert gone not in drift, gone
    for known in ('bellows', 'zenith', 'spark'):
        assert known in drift, known
    assert len(drift) == 10, sorted(drift)


def c12g():
    """GATE: the same corpus, row map off -> zero comparisons, zero flags."""
    mod = _load(VER, 'vsrm_ctl6')
    rep = _audit_no_rows(mod)
    assert not rep['flags'], len(rep['flags'])


def _audit_no_rows(mod):
    old = mod.GUARDS['row_app']
    mod.GUARDS['row_app'] = False
    try:
        return mod.audit(REPO)
    finally:
        mod.GUARDS['row_app'] = old


for fn, name, gate in [
    (c01, 'AGREE when the spec slug is on a row that links the app', False),
    (c02, 'DRIFT when the row names another design', False),
    (c02g, 'GATE  no row map -> nothing compared', True),
    (c03, 'PREP-ONLY spec is informational, never a flag', False),
    (c04, 'unresolvable provenance is flagged, not guessed', False),
    (c05, 'row link text is not the app name ([Atelier])', False),
    (c05g, 'GATE  the text-must-equal-subdomain regex missed it', True),
    (c06, 'ROW-MULTI when two designs link one app', False),
    (c06g, 'GATE  ROW-MULTI disappears with the guard off', True),
    (c07, 'a preview path segment resolves (bac/accordion-16)', False),
    (c08, 'slug normalisation faith2 == faith-2', False),
    (c08g, 'GATE  without normalisation the same spec is DRIFT', True),
    (c09, 'a slug no row carries is NO-ROW-SLUG, not drift', False),
    (c10, 'family boilerplate never scores', False),
    (c11, 'winner decides ROW-POINTER / SPEC-STALE / tie refuses', False),
    (c11g, 'GATE  one shared phrase is below MIN_EVIDENCE', True),
    (c12, 'corpus: 10 DRIFT, the nine fixed names gone', False),
    (c12g, 'GATE  corpus with no row map -> no flags', True),
]:
    case(fn, name, gate)


def main() -> int:
    ok = gate_ok = 0
    for name, fn, gate in CASES:
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
