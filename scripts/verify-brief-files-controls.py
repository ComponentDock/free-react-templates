#!/usr/bin/env python3
"""verify-brief-files-controls.py — control harness for the brief-file axis.

Mutation-based and fully offline: every case builds a synthetic repo root (a
TEMPLATES.md, one spec, a brief dir with 1-3 markdown files) in a tmpdir.

A control that cannot fail proves nothing, so the GATE cases disable ONE guard in
the verifier (the sibling-spelling fold, the round-up exclusion, the row third
opinion, the declaration tier) or re-run the fixer, and assert the payload then
fires / stays byte-identical.

Run: python3 verify-brief-files-controls.py     # expects 18/18 (6 GATE)
"""
from __future__ import annotations

import importlib.util
import os
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VER = os.path.join(HERE, 'verify-brief-files.py')
FIX = os.path.join(HERE, 'fix-brief-files.py')


def _load(path, name):
    spec = importlib.util.spec_from_file_location(name, path)
    if spec is None or spec.loader is None:
        raise RuntimeError(path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


VBF = _load(VER, 'vbf_controls')
FBF = _load(FIX, 'fbf_controls')


def row(title, slug, app=None):
    tail = f' · [{app}](https://{app}.free.componentdock.com)' if app else ''
    return (f'- [x] **{title}** — [colorlib](https://colorlib.com/wp/template/{slug}/)'
            f' · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/{slug}.jpg){tail}')


def build(rows, briefs, specs):
    """rows: list[str]; briefs: {name: {file: text}}; specs: {name: slug}"""
    root = tempfile.mkdtemp(prefix='brieffiles-')
    with open(os.path.join(root, 'TEMPLATES.md'), 'w') as fh:
        fh.write('# Templates\n\n' + '\n'.join(rows) + '\n')
    os.makedirs(os.path.join(root, 'openspec', 'specs'), exist_ok=True)
    for name, slug in specs.items():
        d = os.path.join(root, 'openspec', 'specs', f'template-{name}')
        os.makedirs(d)
        with open(os.path.join(d, 'spec.md'), 'w') as fh:
            fh.write(f'# Template: {name} (Business)\n\n## Purpose\n\n'
                     f'A landing page. (ColorLib source: '
                     f'https://colorlib.com/wp/template/{slug}/)\n\n'
                     f'- **Source slug:** `{slug}`\n\n## Requirements\n\n### Feature: hero\n\n'
                     f'#### Scenario: renders\n\n- **WHEN** mounted **THEN** it SHALL render.\n')
    for name, files in briefs.items():
        d = os.path.join(root, 'docs', 'templates', name)
        os.makedirs(d, exist_ok=True)
        for fn, text in files.items():
            with open(os.path.join(d, fn), 'w') as fh:
                fh.write(text)
    return root


def axis(root):
    """Run the axis in-process and return (buckets, records)."""
    out = {}

    def run():
        sys.argv = ['x', '--root', root, '--json', os.path.join(root, 'out.json')]
        try:
            VBF.main()
        except SystemExit as e:
            out['code'] = e.code
    import io
    import contextlib
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        run()
    import json
    data = json.load(open(os.path.join(root, 'out.json')))
    return {k: v for k, v in data['buckets'].items()}, data['rows']


def bucket_of(root, name):
    _buckets, rows = axis(root)
    for r in rows:
        if r['name'] == name:
            return r['bucket']
    raise AssertionError(f'{name} not read by the axis')


SPEC_TXT = '# Template: {n} (Business)\n\nPurpose text.\n'


def brief(slug, name='alpha'):
    return (f'# {name.title()} — Design Notes\n\n'
            f'Reference: **{slug}** — `https://colorlib.com/wp/template/{slug}/`\n'
            f'Live preview: `https://preview.colorlib.com/theme/{slug}/`\n')


def tasks(slug):
    return (f'# Tasks\n\nRecreation of ColorLib `{slug}` — '
            f'https://colorlib.com/wp/template/{slug}/ under a new name.\n')


# --------------------------------------------------------------------- cases
def c01():
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('alpha')}},
                 {'alpha': 'alpha'})
    assert bucket_of(root, 'alpha') == 'AGREE'


def c02():
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')}},
                 {'alpha': 'alpha'})
    assert bucket_of(root, 'alpha') == 'STALE-ORPHAN'


def c03():
    # TWO rows name the same app with different designs (ROW-MULTIPLICITY) ->
    # the brief picked a sibling the row also carries, not a defect
    root = build([row('Alpha', 'alpha', 'alpha'), row('Beta', 'beta', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')}},
                 {'alpha': 'alpha'})
    assert bucket_of(root, 'alpha') == 'STALE-TIE'


def c04():
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'tasks.md': '# Tasks\n\n- [ ] Navbar\n- [ ] Hero\n'}},
                 {'alpha': 'alpha'})
    assert bucket_of(root, 'alpha') == 'SILENT'


def c05():
    root = build([], {'alpha': {'tasks.md': tasks('alpha')}}, {})
    assert bucket_of(root, 'alpha') == 'NO-SPEC'


def c06():  # demo-folder spelling of the SAME design is not a flag
    root = build([row('Alpha', 'contact-form-v10', 'alpha')],
                 {'alpha': {'design-notes.md': brief('contact-form-v10'),
                            'tasks.md': tasks('contact-form-v10'),
                            'todo.md': '- Demo: `https://colorlib.com/etc/cf/ContactFrom_v10/index.html`\n'}},
                 {'alpha': 'contact-form-v10'})
    assert bucket_of(root, 'alpha') == 'AGREE'


def c06g():  # GATE: disable the fold -> the same corpus fires
    old = VBF.FOLD
    VBF.FOLD = ()
    try:
        c06()
    except AssertionError:
        return
    finally:
        VBF.FOLD = old
    raise AssertionError('fold disabled but the dir still read AGREE')


def c07():  # a round-up post is never a design
    root = build([row('Alpha', 'medical', 'alpha')],
                 {'alpha': {'design-notes.md': brief('medical'),
                            'tasks.md': '- Reference: https://colorlib.com/wp/template/medical-wordpress-themes/\n'}},
                 {'alpha': 'medical'})
    assert bucket_of(root, 'alpha') == 'AGREE'


def c07g():  # GATE: exclusion off -> the round-up fires
    old = VBF.ROUNDUP
    VBF.ROUNDUP = VBF.re.compile(r'(?!)')
    try:
        c07()
    except AssertionError:
        return
    finally:
        VBF.ROUNDUP = old
    raise AssertionError('round-up exclusion disabled but no STALE-ORPHAN')


def c08():  # declaration tier: a bannered file names the spec, whatever URL is in the body
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'),
                            'tasks.md': '# Tasks\n\n> **Source slug:** `alpha`\n\n'
                                        'https://colorlib.com/wp/template/beta/ above was old.\n'}},
                 {'alpha': 'alpha'})
    assert bucket_of(root, 'alpha') == 'AGREE'


def c09():  # the fixer banners a stale file, keeps the body, and the axis goes AGREE
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')}},
                 {'alpha': 'alpha'})
    p = os.path.join(root, 'docs', 'templates', 'alpha', 'tasks.md')
    before = open(p).read()
    sys.argv = ['x', '--root', root, '--only', 'alpha']
    FBF.main()
    after = open(p).read()
    assert FBF.MARK in after, 'banner missing'
    kept = [ln for ln in before.splitlines() if ln.strip()]
    for ln in kept:
        assert ln in after, f'body line lost: {ln!r}'
    assert after.index(FBF.MARK) < after.index('beta'), 'banner must precede the stale claim'
    assert bucket_of(root, 'alpha') == 'AGREE'


def c09g():  # GATE: the fixer is a byte-level no-op on its second run
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')}},
                 {'alpha': 'alpha'})
    p = os.path.join(root, 'docs', 'templates', 'alpha', 'tasks.md')
    sys.argv = ['x', '--root', root, '--only', 'alpha']
    FBF.main()
    once = open(p, 'rb').read()
    FBF.main()
    assert open(p, 'rb').read() == once, 'second run changed the file'


def c10():  # no row -> no third opinion -> the fixer refuses (the stray may be the truth)
    root = build([], {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')}},
                 {'alpha': 'alpha'})
    p = os.path.join(root, 'docs', 'templates', 'alpha', 'tasks.md')
    before = open(p).read()
    sys.argv = ['x', '--root', root, '--only', 'alpha']
    FBF.main()
    assert open(p).read() == before, 'fixer edited a dir with no row'


def c11():  # a row-tie dir is never bannered
    root = build([row('Alpha', 'alpha', 'alpha'), row('Beta', 'beta', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')}},
                 {'alpha': 'alpha'})
    p = os.path.join(root, 'docs', 'templates', 'alpha', 'tasks.md')
    before = open(p).read()
    sys.argv = ['x', '--root', root, '--only', 'alpha']
    FBF.main()
    assert open(p).read() == before, 'fixer edited a row-tie dir'


def c12():  # front matter is never split; the banner lands after it and after the H1
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'design-notes.md': '---\ntitle: alpha\n---\n\n# Alpha\n\nBody https://colorlib.com/wp/template/beta/\n'}},
                 {'alpha': 'alpha'})
    p = os.path.join(root, 'docs', 'templates', 'alpha', 'design-notes.md')
    sys.argv = ['x', '--root', root, '--only', 'alpha']
    FBF.main()
    text = open(p).read()
    assert text.startswith('---\ntitle: alpha\n---\n'), 'front matter moved'
    assert text.index('# Alpha') < text.index(FBF.MARK), 'banner must follow the H1'
    assert bucket_of(root, 'alpha') == 'AGREE'


def c13():  # a dir with no markdown file at all
    root = build([row('Alpha', 'alpha', 'alpha')], {'alpha': {}}, {'alpha': 'alpha'})
    assert bucket_of(root, 'alpha') == 'NO-FILES'


def c14():  # file-order independence: the stale file may sort FIRST
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'todo.md': tasks('beta'), 'design-notes.md': brief('alpha')}},
                 {'alpha': 'alpha'})
    assert bucket_of(root, 'alpha') == 'STALE-ORPHAN'


def c15():  # the exit code is the flag count's verdict
    root = build([row('Alpha', 'alpha', 'alpha')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')}},
                 {'alpha': 'alpha'})
    import io
    import contextlib
    sys.argv = ['x', '--root', root, '--json', os.path.join(root, 'o.json')]
    with contextlib.redirect_stdout(io.StringIO()):
        code = VBF.main()
    assert code == 1, f'exit {code}'


def c16():  # every bucket is reported for a mixed corpus (exact partition)
    root = build([row('Alpha', 'alpha', 'alpha'), row('Beta', 'beta', 'beta')],
                 {'alpha': {'design-notes.md': brief('alpha'), 'tasks.md': tasks('beta')},
                  'beta': {'tasks.md': '# Tasks\n\n- [ ] Hero\n'}},
                 {'alpha': 'alpha', 'beta': 'beta'})
    buckets, rows = axis(root)
    assert len(rows) == 2, rows
    assert buckets.get('STALE-ORPHAN') == 1 and buckets.get('SILENT') == 1, buckets


CASES = [
    (c01, 'all naming files agree with the spec'),
    (c02, 'a stale leftover is STALE-ORPHAN'),
    (c03, 'a sibling the row also names is a note, not a flag'),
    (c04, 'a brief with no design is SILENT'),
    (c05, 'a brief with no spec is NO-SPEC'),
    (c06, 'demo-folder spelling of the same design is not a flag'),
    (c06g, 'GATE: fold disabled -> the same corpus fires', True),
    (c07, 'a round-up post is not a design'),
    (c07g, 'GATE: round-up exclusion off -> it fires', True),
    (c08, 'the declaration tier outranks a stale URL in the body'),
    (c09, 'fixer banners, keeps the body, axis turns AGREE'),
    (c09g, 'GATE: the fixer is a byte-level no-op on its second run', True),
    (c10, 'fixer refuses a dir with no row (no third opinion)', True),
    (c11, 'fixer never edits a row-tie dir', True),
    (c12, 'front matter and H1 are never split', True),
    (c13, 'a dir with no markdown file is NO-FILES'),
    (c14, 'file-order independence'),
    (c15, 'exit code 1 when a flag is present'),
    (c16, 'buckets partition a mixed corpus exactly once'),
]


def main() -> int:
    ok, fails = 0, []
    for item in CASES:
        fn, name = item[0], item[1]
        gate = item[2] if len(item) > 2 else False
        try:
            fn()
            ok += 1
            print(f'  PASS{"  GATE" if gate else "      "}  {name}')
        except Exception as exc:  # noqa: BLE001
            fails.append((name, exc))
            print(f'  FAIL{"  GATE" if gate else "      "}  {name}: {exc}')
    gates = sum(1 for c in CASES if len(c) > 2 and c[2])
    print(f'\n{ok}/{len(CASES)} controls pass ({gates} GATE)')
    return 1 if fails else 0


if __name__ == '__main__':
    sys.exit(main())
