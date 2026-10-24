#!/usr/bin/env python3
"""verify-app-copy-controls.py — control harness for the HEADING-COPY axis.

Mutation-based and fully offline: every case builds a synthetic repo root
(one app with a `src/` of TSX headings, its spec, and a PRE-SEEDED reference
cache so no request is made) in a tmpdir, runs the axis in-process and asserts
the bucket.

A control that cannot fail proves nothing, so the GATE cases disable ONE guard
in the verifier — the rarity weighting (`IDF`), the information-mass floor
(`MIN_MASS`), the reference text-mass floor (`MIN_REF_TEXT`), the channel-B
fallback (`app_headings([], ...)`), the roundup exclusion (`ROUNDUP`), the
spec-citation rung (`spec_cites`) — and assert the payload then fires.

Run: python3 verify-app-copy-controls.py     # expects 16/16 (8 GATE)
"""
from __future__ import annotations

import contextlib
import importlib.util
import io
import json
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, 'verify-app-copy.py')


def _load(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    sys.modules[name] = mod
    spec.loader.exec_module(mod)
    return mod


V = _load(VER, 'vac_controls')

RICH = 'x' * 2000          # visible-text mass that passes MIN_REF_TEXT


def refs(slug, heads, textlen=2000, url='https://preview.colorlib.com/theme/'):
    return {'url': (url or '') + slug + '/', 'heads': heads, 'via': 'live',
            'textlen': textlen}


def build(app_heads, slug, corpus, spec=True, alt_slug='beta'):
    """app_heads: JSX heading strings; corpus: {slug: ref-record}"""
    root = tempfile.mkdtemp(prefix='appcopy-')
    os.makedirs(os.path.join(root, 'apps', 'alpha', 'src'))
    body = '\n'.join(f'        <h2>{h}</h2>' for h in app_heads)
    with open(os.path.join(root, 'apps', 'alpha', 'src', 'Page.tsx'), 'w') as fh:
        fh.write(f'export default function Page() {{\n  return (\n    <main>\n'
                 f'{body}\n    </main>\n  );\n}}\n')
    os.makedirs(os.path.join(root, 'openspec', 'specs'), exist_ok=True)
    if spec:
        d = os.path.join(root, 'openspec', 'specs', 'template-alpha')
        os.makedirs(d)
        with open(os.path.join(d, 'spec.md'), 'w') as fh:
            fh.write(f'# Template: Alpha (Business)\n\n## Purpose\n\nRecreation. '
                     f'(ColorLib source: https://colorlib.com/wp/template/{slug}/)\n\n'
                     f'- **Source slug:** `{slug}`\n\n## Requirements\n')
    cache = os.path.join(root, 'cache')
    os.makedirs(os.path.join(cache, 'ref'))
    for s, rec in corpus.items():
        with open(os.path.join(cache, 'ref', s + '.json'), 'w') as fh:
            json.dump(rec, fh)
    return root, cache


def run(root, cache, *extra):
    out = os.path.join(root, 'out.json')
    sys.argv = ['x', '--root', root, '--cache', cache, '--no-net',
                '--json', out] + list(extra)
    code = 0
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        try:
            code = V.main()
        except SystemExit as e:
            code = e.code
    data = json.load(open(out))
    return {k: v for k, v in data['buckets'].items()}, data['rows'], code


def bucket(root, cache, name='alpha'):
    _b, rows, _c = run(root, cache)
    for r in rows:
        if r['app'] == name:
            return r['bucket'], r
    raise AssertionError(f'{name} not read: {rows}')


# --------------------------------------------------------------------- corpus
OWN = ['Steel Fabrication Services', 'Tanks and Vessels', 'Ducting Extraction',
       'Structural Assemblies', 'Thoughtful Coordination']
REF = OWN + ['Fabrication Project Notes', 'Handover Discipline']
ALT = ['Latest Posts', 'About Us', 'Our Services', 'Categories', 'Newsletter']


def base(slug='industrial', own_heads=None, alt_heads=None, textlen=2000,
         app_heads=None):
    corpus = {'industrial': refs('industrial', REF, textlen),
              'beta': refs('beta', alt_heads or ALT, textlen)}
    return build(app_heads if app_heads is not None else (own_heads or OWN),
                 slug, corpus)


# --------------------------------------------------------------------- cases
def c01():  # the app kept its reference's distinctive headings
    root, cache = base()
    assert bucket(root, cache)[0] == 'AGREE'


def c02():  # headings reworded: the note bucket, never a flag
    root, cache = base(app_heads=['Metal Works', 'Our Craft', 'Project Gallery',
                                  'Get in Touch', 'Why Choose Us'])
    b, r = bucket(root, cache)
    assert b == 'LOW-OVERLAP', b
    assert r['alt_slug'] in ('beta', ''), r     # diagnostic only


def c03():  # a thin rebuilt kit shell cannot judge the app
    root, cache = base(textlen=600)
    assert bucket(root, cache)[0] == 'REF-THIN'


def c04():  # no reference at all
    root, cache = build(OWN, 'ghost', {'beta': refs('beta', ALT)})
    assert bucket(root, cache)[0] == 'REF-DEAD'


def c05():  # component demo: no literal headings and no title keys
    root, cache = base(app_heads=['One'])
    assert bucket(root, cache)[0] == 'NO-APP-COPY'


def c06():  # a roundup row has no demo by construction
    root, cache = build(OWN, 'wordpress-restaurant-themes', {'beta': refs('beta', ALT)})
    assert bucket(root, cache)[0] == 'ROUNDUP'


def c07():  # no spec at all
    root, cache = build(OWN, 'industrial', {'industrial': refs('industrial', REF)},
                        spec=False)
    assert bucket(root, cache)[0] == 'NO-SPEC'


def c08():  # the partition is exact: every app lands in exactly one bucket
    root, cache = base()
    rows = run(root, cache)[1]
    assert len(rows) == len({r['app'] for r in rows}), 'duplicate app'
    assert all(r['bucket'] in V.BUCKETS for r in rows)


# ------------------------------------------------------------------- GATE
def _corpus(generic_n=10):
    """One industrial reference plus N siblings that all share generic headings."""
    corp = {'industrial': REF}
    for i in range(generic_n):
        corp[f'sib{i}'] = ['Our Services', 'Latest Posts', 'About Us',
                           'Contact Us', 'Newsletter']
    V.build_idf({s: [V.toks(h) for h in hs] for s, hs in corp.items()})
    return corp


def c09g():  # the generic-token gate: without it UI chrome is "evidence"
    _corpus()
    heads = ['Our Services', 'Latest Posts', 'About Us', 'Contact Us', 'Newsletter']
    with_gate = V.affinity(heads, REF)
    kept = V.MIN_RARITY_RATIO
    V.MIN_RARITY_RATIO = 1.0            # GATE: nothing is generic
    try:
        without = V.affinity(heads, REF)
    finally:
        V.MIN_RARITY_RATIO = kept
    # the gate's whole effect is that these headings are SKIPPED, not scored:
    # every token in them is held by every sibling, so it carries no information
    assert with_gate == (0.0, 0), with_gate
    assert without[1] == 5, without


def c10g():  # rarity weighting: a rare word must outweigh a common one
    corp = {'industrial': REF}
    for i in range(10):
        corp[f'sib{i}'] = ['Welding Rods', 'Welding Helmets', 'Welding Supplies',
                           'Welding Courses', 'Thanks Contact Newsletter']
    V.build_idf({s: [V.toks(h) for h in hs] for s, hs in corp.items()})
    heads = ['Steel Welding']          # steel is rare here, welding is not
    ratio = V.MIN_RARITY_RATIO
    V.MIN_RARITY_RATIO = 1.0           # measure weighting alone, not the strip
    weighted, _n = V.affinity(heads, REF)
    kept = dict(V.IDF)
    V.IDF.clear()                      # GATE: rarity off — both words equal
    try:
        unweighted, _n2 = V.affinity(heads, REF)
    finally:
        V.IDF.clear()
        V.IDF.update(kept)
        V.MIN_RARITY_RATIO = ratio
    assert weighted > unweighted + 0.1, (weighted, unweighted)
    assert abs(unweighted - 0.5) < 0.01, unweighted


def c11g():  # reference text floor: 600 B passes only when the gate is off
    root, cache = base(textlen=600)
    kept = V.MIN_REF_TEXT
    V.MIN_REF_TEXT = 0                  # GATE: text-mass off
    try:
        b, _r = bucket(root, cache)
    finally:
        V.MIN_REF_TEXT = kept
    assert b != 'REF-THIN', b


def c12g():  # channel B: without it a data-driven page is NO-APP-COPY
    root = tempfile.mkdtemp(prefix='appcopy-keys-')
    os.makedirs(os.path.join(root, 'apps', 'alpha', 'src'))
    with open(os.path.join(root, 'apps', 'alpha', 'src', 'content.ts'), 'w') as fh:
        fh.write('export const s = [\n  { title: "Tanks and Vessels" },\n'
                 '  { title: "Ducting Extraction" },\n'
                 '  { title: "Steel Fabrication Services" },\n'
                 '  { heading: "Structural Assemblies" },\n'
                 '  { subtitle: "Thoughtful Coordination" },\n];\n')
    os.makedirs(os.path.join(root, 'openspec', 'specs', 'template-alpha'))
    with open(os.path.join(root, 'openspec', 'specs', 'template-alpha', 'spec.md'),
              'w') as fh:
        fh.write('# Template: Alpha\n\n- **Source slug:** `industrial`\n')
    cache = os.path.join(root, 'cache')
    os.makedirs(os.path.join(cache, 'ref'))
    json.dump(refs('industrial', REF), open(os.path.join(cache, 'ref', 'industrial.json'), 'w'))
    b = bucket(root, cache)[0]
    assert b != 'NO-APP-COPY', b

    kept = V.app_headings
    V.app_headings = lambda d: ([], 'jsx')     # GATE: channel B off
    try:
        b2 = bucket(root, cache)[0]
    finally:
        V.app_headings = kept
    assert b2 == 'NO-APP-COPY', b2


def c13g():  # roundup exclusion: without it the row reads as REF-DEAD
    root, cache = build(OWN, 'wordpress-restaurant-themes', {'beta': refs('beta', ALT)})
    kept = V.ROUNDUP
    V.ROUNDUP = __import__('re').compile(r'(?!)')   # GATE: exclude nothing
    try:
        b = bucket(root, cache)[0]
    finally:
        V.ROUNDUP = kept
    assert b == 'REF-DEAD', b


def c14g():  # spec-citation rung: the spec's own URL resolves a dead slug
    root = tempfile.mkdtemp(prefix='appcopy-cite-')
    os.makedirs(os.path.join(root, 'apps', 'alpha', 'src'))
    with open(os.path.join(root, 'apps', 'alpha', 'src', 'Page.tsx'), 'w') as fh:
        fh.write('<h2>Steel Fabrication Services</h2>\n<h2>Tanks and Vessels</h2>\n'
                 '<h2>Ducting Extraction</h2>\n<h2>Structural Assemblies</h2>\n'
                 '<h2>Thoughtful Coordination</h2>\n')
    os.makedirs(os.path.join(root, 'openspec', 'specs', 'template-alpha'))
    with open(os.path.join(root, 'openspec', 'specs', 'template-alpha', 'spec.md'),
              'w') as fh:
        fh.write('# Template: Alpha\n\n- **Source slug:** `newsflex`\n\n'
                 '- **Demo DOM analysed:** https://preview.colorlib.com/theme/newsbox/\n')
    text = open(os.path.join(root, 'openspec', 'specs', 'template-alpha', 'spec.md')).read()
    cites = V.spec_cites(text)
    assert 'https://preview.colorlib.com/theme/newsbox/' in cites, cites
    # a wp POST url is never a demo
    assert 'https://colorlib.com/wp/template/newsflex/' not in V.spec_cites(
        'see https://colorlib.com/wp/template/newsflex/'), 'wp post leaked into cites'


def c15g():  # the removed WRONG-SOURCE flag: a decisive alternate stays a NOTE
    hotel = ['Hotel Suites Booking', 'Rooms and Rates', 'Wedding Venue Hire',
             'Spa Treatments', 'Restaurant Menus']
    root, cache = base(app_heads=hotel, alt_heads=hotel)
    b, r = bucket(root, cache)
    assert b == 'LOW-OVERLAP', b            # never WRONG-SOURCE, whatever `alt` says
    assert 'WRONG-SOURCE' not in V.BUCKETS
    assert r['alt'] >= r['affinity']


def c16g():  # exit code: no flag bucket means the axis is always green
    root, cache = base()
    _b, _r, code = run(root, cache)
    assert code == 0, code


CASES = [c01, c02, c03, c04, c05, c06, c07, c08,
         c09g, c10g, c11g, c12g, c13g, c14g, c15g, c16g]


def main() -> int:
    bad = 0
    for i, fn in enumerate(CASES, 1):
        name = fn.__name__
        try:
            fn()
            print(f'  ok   {i:02d} {name}')
        except AssertionError as e:
            bad += 1
            print(f'  FAIL {i:02d} {name}: {e}')
        except Exception as e:                      # noqa: BLE001
            bad += 1
            print(f'  ERR  {i:02d} {name}: {type(e).__name__}: {e}')
    gates = sum(1 for fn in CASES if fn.__name__.endswith('g'))
    print(f'\ncontrols: {len(CASES) - bad}/{len(CASES)} passed ({gates} GATE)')
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
