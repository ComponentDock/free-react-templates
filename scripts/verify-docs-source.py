#!/usr/bin/env python3
"""verify-docs-source.py — DOCS-SOURCE axis (audit).

Every shipped app has two provenance layers: the OpenSpec spec
(`openspec/specs/template-<app>/spec.md`) and the implementer brief
(`docs/templates/<app>/design-notes.md` + `tasks.md`).  `verify-spec-row-mismatch.py`
judges spec ↔ TEMPLATES.md row.  Nothing judged the brief, and on 2026-10-24
`docs/templates/jobboard/design-notes.md` defined `--color-brand: #1644ba`
(Careers blue) while the corrected spec measured Jobboard's lime `#89ba16` —
a brief that would repaint the app.  `ledger` had the same shape (Daren app,
"Accounting" brief).  One corrected layer over a stale one is not a corrected
prep.

This axis reads the design each brief *names* and compares it with the design
the spec names and the design the row points at.

Buckets (they partition the shipped corpus exactly once):

  AGREE        brief and spec name the same design (after slug normalisation)
  DOCS-STALE   spec == row, brief names another design         → FLAG
               (the `jobboard` / `ledger` class: the brief is the layer the
                implementer reads, so it would repaint a correct app)
  SPEC-STALE   brief == row, spec names another design         → FLAG
  BOTH-STALE   brief, spec and row disagree pairwise           → FLAG
  UNLINKED     no TEMPLATES.md row links the app (no third opinion; note only)
  DOC-SILENT   the brief cites no ColorLib design at all        (note only)
  NO-DOCS      no `docs/templates/<app>/` directory             (note only)
  NO-SPEC      app ships without a spec                         (note only)

Slug normalisation (`contact-form-v1` vs `contactfrom_v1`, `harbor-lights` vs
`harborlights`, `adventure-2` vs `adventure2`) is applied before comparing: the
same design spelled two ways is not drift.  The preview host's family prefixes
(`/theme/bootstrap/<slug>/`, `/theme/bft/<slug>/`, `/theme/bb/<slug>/`) are
transparent — the LAST path segment is the slug.

Usage:
  python3 scripts/verify-docs-source.py [--root DIR] [--only a,b]
                                       [--json OUT] [--md OUT] [--verbose]
Exit 0 = no flags, 1 = flags present, 3 = bad usage.
Read-only, offline.
"""
from __future__ import annotations

import argparse
import collections
import glob
import json
import os
import re
import sys

# --- module guards (controls flip these to prove a case can FAIL) -----------
GUARDS = {'slug_norm': True, 'label_tier': True, 'row_third_opinion': True}

ROW = re.compile(r'^- \[[ xX~]\] \*\*(.+?)\*\*', re.M)
ROW_SLUG = re.compile(r'\[colorlib\]\(https://colorlib\.com/wp/template/([\w.~%+-]+)/\)')
ROW_APP = re.compile(r'\]\(https://([\w.-]+)\.free\.componentdock\.com\)', re.I)
# The wp URL can nest a family directory (`/wp/template/bb/bootstrap-buttons-02/`);
# capturing only the first segment read the family (`bb`) as the design and made
# `btnsmith` flag PENDING-DRIFT on 2026-10-24.  Take the whole tail, then last_seg().
WP_URL = re.compile(r'colorlib\.com/wp/template/([\w.~%+-]+(?:/[\w.~%+-]+)*)')
PRE_URL = re.compile(r'preview\.colorlib\.com/theme/([\w.~%+-]+(?:/[\w.~%+-]+)*)')
ZIP_URL = re.compile(r'downloads/free/([\w.~%+-]+)\.zip')
# `/etc/cf/ContactFrom_v1/index.html` — the comingsoon/contact-form families serve the
# demo from colorlib.com/etc/<family>/<folder>/; the folder IS the design.
ETC_URL = re.compile(r'colorlib\.com/etc/[a-z0-9]+/([\w.~%+-]+)', re.I)
# A *declaration* line, not prose: `- **Source slug:** `x`` / `Source slug: `x``.
# Line-anchored on purpose — the prose form ("… not the ColorLib source slug
# `sakura`") named the app, not its design, and produced 65 phantom flags when
# the tier was unanchored (measured 2026-10-24).
# The tier was also DEAD for the house spelling until 2026-10-24: every spec
# writes `**Source slug:** `x`` (colon inside the bold, space before the
# backtick) and the old pattern demanded backtick right after the asterisks, so
# the declaration never outranked an incidental URL.  `\s*\**\s*[:=]\s*\**\s*`
# accepts bold-colon, colon-then-bold and bare forms.
LABELED = re.compile(r'(?m)^[\s>*+-]{0,8}(?:\*\*)?[Ss]ource\s+slug\s*\**\s*[:=]\s*\**\s*`([\w.~%+-]+)`')
DOC_FILES = ('design-notes.md', 'tasks.md')
HEAD_LINES = 30          # the source declaration lives in the header block
# A page FILE name, not a design (`…/tattoo/index.html`), and a bare family
# directory (`/theme/bb/`, `/etc/cf/`) which names a snippet family, not a design.
PAGE_SEG = re.compile(r'^(?:index|home|default|main|page)(?:\.(?:html?|php))?$', re.I)
FAMILY_SEG = {'bb', 'bft', 'bac', 'bootstrap', 'sidebar', 'cs', 'lf', 'cf',
              'theme', 'etc', 'downloads', 'free', 'wp', 'template'}


def norm(s: str) -> str:
    return re.sub(r'[^a-z0-9]', '', (s or '').lower())


def last_seg(path: str) -> str:
    """The design named by a ColorLib path.

    The design is the FIRST segment after the family root, unless that segment is
    itself a family directory:

      `wp/template/car-rental/`                 -> car-rental
      `wp/template/bb/bootstrap-buttons-02/`    -> bootstrap-buttons-02   (family `bb`)
      `theme/bootstrap/modal-09/`               -> modal-09               (family)
      `theme/tattooz/tattoo/index.html`         -> tattooz  (the PAGE sub-dir is
                                                   `tattoo`; reading it made
                                                   `inkcraft` look like drift)
      `theme/fashe/assets/css/style.css`        -> fashe    (a sheet URL is common
                                                   in specs; `style.css` is not a
                                                   design)
      `etc/cf/ContactFrom_v1/index.html`         -> handled by the caller's capture
    A page FILE name (`index.html`) and a page extension on a directory name
    (`03-comming-soon.html`) are stripped, and a bare family prefix names no design.
    """
    segs = [s for s in path.split('/') if s.strip('.')]
    segs = [re.sub(r'\.(?:html?|php)$', '', s, flags=re.I) for s in segs]
    segs = [s.strip('.,;:') for s in segs]
    segs = [s for s in segs if s and not PAGE_SEG.match(s)]
    if not segs:
        return ''
    head = segs[0].lower()
    if head in FAMILY_SEG and len(segs) > 1:
        return segs[1]
    return '' if head in FAMILY_SEG else segs[0]


# --- TEMPLATES.md ----------------------------------------------------------
def load_rows(root: str) -> list[dict]:
    path = os.path.join(root, 'TEMPLATES.md')
    rows, line_no = [], 0
    if not os.path.exists(path):
        return rows
    for line in open(path, encoding='utf-8', errors='replace'):
        line_no += 1
        m = ROW.match(line)
        if not m:
            continue
        s = ROW_SLUG.search(line)
        rows.append({'line': line_no, 'name': m.group(1).strip(),
                     'slug': s.group(1) if s else None,
                     'apps': [a.lower() for a in ROW_APP.findall(line)]})
    return rows


def row_map(rows: list[dict]) -> dict[str, list[str]]:
    out: dict[str, list[str]] = {}
    for r in rows:
        if not r['slug']:
            continue
        for app in r['apps']:
            out.setdefault(app, [])
            if r['slug'] not in out[app]:
                out[app].append(r['slug'])
    return out


# --- citation extraction ---------------------------------------------------
def _candidates(text: str, head_only: bool) -> list[tuple[str, str]]:
    """[(slug, shape)] in precedence order — declared slug, wp URL, preview, zip."""
    body = '\n'.join(text.splitlines()[:HEAD_LINES]) if head_only else text
    cands: list[tuple[str, str]] = []
    # A declared `Source slug: `x`` outranks any incidental URL: docs legitimately
    # cite siblings ("see theme/karl/ for the cart drawer") further down.
    if GUARDS['label_tier'] and (m := LABELED.search(body)):
        cands.append((m.group(1), 'source-label'))
    if (m := WP_URL.search(body)):
        cands.append((last_seg(m.group(1)), 'wp-url'))
    for m in PRE_URL.finditer(body):
        cands.append((last_seg(m.group(1)), 'preview-url'))
        break
    if (m := ETC_URL.search(body)):
        cands.append((last_seg(m.group(1)), 'etc-url'))
    if (m := ZIP_URL.search(body)):
        cands.append((m.group(1), 'archive'))
    if head_only and not cands:
        return _candidates(text, False)      # declaration missing -> whole doc
    # A slug is at least 3 alphanumerics; anything shorter is punctuation the
    # extractor dragged in, not a design.
    # Two-letter ColorLib slugs are real (`br` -> buzz, `dj` -> vynl, `me` -> vitae).
    return [(s, sh) for s, sh in cands if len(norm(s)) >= 2]


def spec_source(text: str) -> tuple[str, str]:
    cands = _candidates(text, False)
    return (cands[0] if cands else ('', ''))


def doc_source(root: str, app: str) -> tuple[str, str, str]:
    """(slug, shape, file) — the design the implementer brief names."""
    d = os.path.join(root, 'docs', 'templates', app)
    if not os.path.isdir(d):
        return ('', 'no-docs', '')
    for fn in DOC_FILES:
        p = os.path.join(d, fn)
        if not os.path.exists(p):
            continue
        text = open(p, encoding='utf-8', errors='replace').read()
        cands = _candidates(text, True)
        slug, shape = cands[0] if cands else ('', '')
        if slug:
            return (slug, shape, fn)
    return ('', 'silent', '')


# --- verdict ---------------------------------------------------------------
def same(a: str, b: str) -> bool:
    if not a or not b:
        return False
    return a == b or (GUARDS['slug_norm'] and norm(a) == norm(b))


def decide(app: str, spec_slug: str, doc_slug: str,
           row_slugs: list[str]) -> tuple[str, list[str], list[str]]:
    """(bucket, flags, notes) — the buckets partition the corpus exactly once."""
    flags: list[str] = []
    notes: list[str] = []
    if not doc_slug:
        return 'DOC-SILENT', flags, notes
    if not spec_slug:
        return 'NO-SPEC-SLUG', [f'SPEC-SILENT but brief names {doc_slug}'], notes
    ns, nd = norm(spec_slug), norm(doc_slug)
    if ns != nd and (nd.startswith(ns) or ns.startswith(nd)):
        notes.append(f'NEAR-SLUG:{spec_slug}|{doc_slug}')
    if not row_slugs or not GUARDS['row_third_opinion']:
        return ('AGREE' if same(spec_slug, doc_slug) else 'UNLINKED',
                ['DOCS-SPEC-MISMATCH'] if not same(spec_slug, doc_slug) else [], notes)
    spec_ok = any(same(spec_slug, s) for s in row_slugs)
    doc_ok = any(same(doc_slug, s) for s in row_slugs)
    if same(spec_slug, doc_slug):
        bucket = 'AGREE'
    elif spec_ok and doc_ok and len(row_slugs) > 1:
        # ROW-MULTI: the row carries BOTH designs, so the brief is not wrong —
        # it picked the sibling the row also names.  Rename/row work, not a prep flag.
        bucket = 'ROW-MULTI'
        notes.append('BRIEF-PICKS-OTHER-SIBLING:' + doc_slug)
    elif spec_ok and not doc_ok:
        bucket = 'DOCS-STALE'
        flags.append(f'DOCS-NAME|spec={spec_slug}|row={",".join(row_slugs)}|brief={doc_slug}')
    elif doc_ok and not spec_ok:
        bucket = 'SPEC-STALE'
        flags.append(f'SPEC-NAME|brief={doc_slug}|row={",".join(row_slugs)}|spec={spec_slug}')
    else:
        bucket = 'BOTH-STALE'
        flags.append(f'BOTH-NAME|spec={spec_slug}|brief={doc_slug}|row={",".join(row_slugs)}')
    if len(row_slugs) > 1:
        notes.append('ROW-MULTI:' + ','.join(row_slugs))
    return bucket, flags, notes


# --- corpus ----------------------------------------------------------------
def audit(root: str = '.', only: set[str] | None = None) -> dict:
    rows = load_rows(root)
    links = row_map(rows)
    adir = os.path.join(root, 'apps')
    apps = sorted(d for d in os.listdir(adir)
                  if os.path.isdir(os.path.join(adir, d))) if os.path.isdir(adir) else []
    if only:
        apps = [a for a in apps if a in only]

    counts: collections.Counter = collections.Counter()
    flag_rows, recs = [], []
    for app in apps:
        sp = os.path.join(root, 'openspec', 'specs', f'template-{app}', 'spec.md')
        if not os.path.exists(sp):
            counts['NO-SPEC'] += 1
            continue
        spec_slug, spec_shape = spec_source(open(sp, encoding='utf-8', errors='replace').read())
        doc_slug, doc_shape, doc_file = doc_source(root, app)
        if doc_shape == 'no-docs':
            counts['NO-DOCS'] += 1
            continue
        bucket, flags, notes = decide(app, spec_slug, doc_slug, links.get(app, []))
        counts[bucket] += 1
        rec = {'app': app, 'bucket': bucket, 'spec': spec_slug, 'spec_shape': spec_shape,
               'brief': doc_slug, 'brief_shape': doc_shape, 'brief_file': doc_file,
               'row': links.get(app, []), 'flags': flags, 'notes': notes}
        recs.append(rec)
        if flags:
            flag_rows.append(rec)

    return {'counts': dict(counts), 'total': sum(counts.values()),
            'flags': flag_rows, 'records': recs, 'rows_seen': len(rows)}


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
    c, total = res['counts'], res['total']
    print(f'shipped apps read: {total}   TEMPLATES.md rows: {res["rows_seen"]}')
    for k in ('AGREE', 'DOCS-STALE', 'SPEC-STALE', 'BOTH-STALE', 'ROW-MULTI',
              'UNLINKED', 'DOC-SILENT', 'NO-DOCS', 'NO-SPEC', 'NO-SPEC-SLUG'):
        if c.get(k):
            print(f'  {k:<12} {c[k]}')
    print(f'flags: {len(res["flags"])}')

    for r in res['flags']:
        print(f'\n{r["bucket"]:<11} {r["app"]:<22} spec={r["spec"] or "—":<26} '
              f'brief={r["brief"] or "—":<26} row={",".join(r["row"]) or "—"}')
        for f in r['flags']:
            print(f'    {f}')
    if a.verbose:
        for r in res['records']:
            print(f'{r["bucket"]:<12} {r["app"]:<24} spec={r["spec"]:<24} brief={r["brief"]}')

    if a.json:
        with open(a.json, 'w', encoding='utf-8') as fh:
            json.dump(res, fh, indent=2)
        print(f'\njson -> {a.json}')
    if a.md:
        with open(a.md, 'w', encoding='utf-8') as fh:
            fh.write('| app | bucket | spec | brief | row |\n| --- | --- | --- | --- | --- |\n')
            for r in res['flags']:
                fh.write(f'| `{r["app"]}` | {r["bucket"]} | {r["spec"] or "—"} | '
                         f'{r["brief"] or "—"} | {",".join(r["row"]) or "—"} |\n')
        print(f'md -> {a.md}')
    return 0 if not res['flags'] else 1


if __name__ == '__main__':
    sys.exit(main())
