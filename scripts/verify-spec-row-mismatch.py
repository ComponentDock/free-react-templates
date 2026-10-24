#!/usr/bin/env python3
"""verify-spec-row-mismatch.py — does the spec name the design its ROW says it ships?

Rule 5 and the marketplace both stand on one claim: `apps/<name>` recreates the
ColorLib design on the `TEMPLATES.md` row that links it. Two records assert it —
the spec's provenance (`openspec/specs/template-<name>/spec.md`) and the row's
`[colorlib](https://colorlib.com/wp/template/<slug>/)` link — and nothing
compares them. `verify-provenance-grammar.py` reports the disagreement as one
counted note (`SPEC-ROW-MISMATCH: 17`) and moves on.

This axis reads that note as its subject: for every app, the spec's source slug
vs every slug on the rows that link the app.

Offline buckets (every app with a spec lands in exactly one):

  AGREE   — the spec's source slug is on at least one row that links the app
  DRIFT   — it is not (flag `SPEC-ROW-MISMATCH`)

Notes (independent of the bucket):

  ROW-MULTI    — rows for ≥2 different designs link this app, so at least one of
                 them credits the app with a design it cannot both recreate
  SLUG-OWNER   — the spec's slug has rows, and those rows link a DIFFERENT app:
                 two apps claim one design (the `foldkit`/`bellows` shape)
  NO-ROW-SLUG  — the spec's source slug appears on no row at all (round-up
                 article, renamed design, or a typo)
  NO-SLUG      — the spec's provenance cannot be resolved to a slug
  NO-APP       — prep-only spec (informational)

`--network` adjudicates each DRIFT case against the live previews: the app's own
copy (string literals + JSX text under `apps/<name>/src`) is searched in the
rendered body of every candidate, and the winner decides WHICH record is stale:

  SPEC-STALE   — the app matches a row slug, not the spec's slug  (fix: the spec)
  ROW-POINTER  — the app matches the spec's slug, not the row's   (fix: the row)
  BOTH-STALE   — the app matches a third design in the same family (fix: both)
  UNRESOLVED   — no candidate carries the copy (rebuilt demo / re-skin)

Usage:
  python3 scripts/verify-spec-row-mismatch.py [--root DIR] [--json FILE]
  python3 scripts/verify-spec-row-mismatch.py --network [--only NAME[,NAME]]
Exit 0 = no flags, 1 = flags present, 3 = bad usage.
Read-only. Offline by default; `--network` fetches previews, never writes.
"""
from __future__ import annotations

import argparse
import glob
import html
import json
import os
import re
import sys
import urllib.request

# --- module guards (controls flip these to prove a case can FAIL) -----------
GUARDS = {'row_app': True, 'slug_norm': True, 'row_multi': True}

UA = {'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 '
                    '(KHTML, like Gecko) Chrome/120 Safari/537.36'}
FAMILIES = ('theme/', 'theme/bootstrap/', 'theme/bac/', 'theme/bb/',
            'theme/bft/', 'theme/sidebar/')

# Verdict floor: strings that ONLY one candidate carries. One is a coincidence,
# two is provenance (measured 2026-10-24f: 1 unique hit gave `cirrus` a wrong
# ROW-POINTER on the phrase "Website Hosting").
MIN_EVIDENCE = 2

ROW = re.compile(r'^- \[[ xX~]\] \*\*(.+?)\*\*', re.M)
ROW_SLUG = re.compile(r'\[colorlib\]\(https://colorlib\.com/wp/template/([\w.~%+-]+)/\)')
# The label is not the app: rows carry `[Atelier]`, `[Villa]`, `[Landing]`,
# `[Job Board]`. The subdomain is the folder — match that, ignore the text.
ROW_APP = re.compile(r'\]\(https://([\w.-]+)\.free\.componentdock\.com\)', re.I)
WP_URL = re.compile(r'colorlib\.com/wp/template/([\w.~%+-]+)/')
PRE_URL = re.compile(r'preview\.colorlib\.com/theme/([\w.~%+-]+(?:/[\w.~%+-]+)*)')
ZIP_URL = re.compile(r'downloads/free/([\w.~%+-]+)\.zip')
LABELED = re.compile(r'[Ss]ource\s+slug\**\s*[:=]?\s*\**\s*`([\w.~%-]+)`')


def norm(s: str) -> str:
    return re.sub(r'[^a-z0-9]', '', (s or '').lower())


# --- TEMPLATES.md ----------------------------------------------------------
def load_rows(path: str) -> list[dict]:
    """[(line, name, slug, apps)] — one entry per row that carries a slug."""
    rows, line_no = [], 0
    if not os.path.exists(path):
        return rows
    for line in open(path, encoding='utf-8', errors='replace'):
        line_no += 1
        m = ROW.match(line)
        if not m:
            continue
        s = ROW_SLUG.search(line)
        rows.append({
            'line': line_no,
            'name': m.group(1).strip(),
            'slug': s.group(1) if s else None,
            'apps': [a.lower() for a in ROW_APP.findall(line)],
        })
    return rows


def row_map(rows: list[dict]) -> dict:
    """app -> ordered list of (slug, row line) for every row that links it."""
    out: dict[str, list] = {}
    for r in rows:
        if not r['slug']:
            continue
        for app in r['apps']:
            out.setdefault(app, [])
            if (r['slug'], r['line']) not in out[app]:
                out[app].append((r['slug'], r['line']))
    return out


# --- the spec's own source ------------------------------------------------
def spec_slug(text: str, known: set[str]) -> tuple[str, str]:
    """(slug, shape) — the design the spec says it recreates. '' when silent."""
    cands: list[tuple[str, str]] = []
    if (m := WP_URL.search(text)):
        cands.append((m.group(1), 'wp-url'))
    if (m := LABELED.search(text)):
        cands.append((m.group(1), 'source-slug-label'))
    for m in PRE_URL.finditer(text):
        segs = [s for s in m.group(1).split('/') if s]
        for take in range(len(segs), 0, -1):
            cands.append(('/'.join(segs[-take:]), 'preview-url'))
    if (m := ZIP_URL.search(text)):
        cands.append((m.group(1), 'archive'))
    for slug, shape in cands:
        if GUARDS['slug_norm'] and slug in known:
            return slug, shape
        if GUARDS['slug_norm']:
            for k in known:
                if norm(k) == norm(slug):
                    return k, shape + '+normalised'
    return (cands[0][0] if cands else ''), (cands[0][1] if cands else '')


def parse_app(text: str, app: str, links: list, known: set[str],
              has_app: bool) -> dict:
    rec = {'app': app, 'slug': '', 'shape': '', 'row_slugs': [], 'row_lines': [],
           'bucket': '', 'flags': [], 'notes': []}
    for slug, line in links:
        if slug not in rec['row_slugs']:
            rec['row_slugs'].append(slug)
            rec['row_lines'].append(line)
    rec['slug'], rec['shape'] = spec_slug(text, known)

    if not has_app:
        # prep-only spec: nothing ships yet, so there is no row claim to compare
        rec['bucket'] = 'PREP'
        rec['notes'].append(('NO-APP', ''))
    elif not rec['slug']:
        rec['bucket'] = 'NO-SLUG'
        rec['flags'].append(('SPEC-SLUG-UNRESOLVED', ''))
    elif not rec['row_slugs']:
        rec['bucket'] = 'UNLINKED'
        rec['notes'].append(('NO-ROW', ''))
    elif any(rec['slug'] == s or (GUARDS['slug_norm'] and norm(rec['slug']) == norm(s))
             for s in rec['row_slugs']):
        rec['bucket'] = 'AGREE'
    else:
        rec['bucket'] = 'DRIFT'
        rec['flags'].append(('SPEC-ROW-MISMATCH', ','.join(rec['row_slugs'])))

    if GUARDS['row_multi'] and len(rec['row_slugs']) > 1:
        rec['notes'].append(('ROW-MULTI', ','.join(rec['row_slugs'])))
    if rec['slug'] and rec['slug'] not in known:
        rec['notes'].append(('NO-ROW-SLUG', rec['slug']))
    return rec


# --- corpus ----------------------------------------------------------------
def audit(root: str = '.') -> dict:
    rows = load_rows(os.path.join(root, 'TEMPLATES.md'))
    links = row_map(rows) if GUARDS['row_app'] else {}
    known = {r['slug'] for r in rows if r['slug']}
    adir = os.path.join(root, 'apps')
    apps = {d for d in os.listdir(adir) if os.path.isdir(os.path.join(adir, d))} if os.path.isdir(adir) else set()
    specs = sorted(glob.glob(os.path.join(root, 'openspec', 'specs', 'template-*', 'spec.md')))

    out, counts, flags, notes = [], {'AGREE': 0, 'DRIFT': 0, 'NO-SLUG': 0}, [], {}
    for p in specs:
        app = os.path.basename(os.path.dirname(p))[len('template-'):]
        try:
            text = open(p, encoding='utf-8', errors='replace').read()
        except OSError:
            continue
        rec = parse_app(text, app, links.get(app, []), known, app in apps)
        # who else claims the design this spec names (row table, not serialised)
        if rec['slug'] and rec['bucket'] == 'DRIFT':
            owners = sorted({a for r in rows for a in r['apps']
                             if r['slug'] == rec['slug'] and a != app})
            if owners:
                rec['notes'].append(('SLUG-OWNER', ','.join(owners)))
                notes['SLUG-OWNER'] = notes.get('SLUG-OWNER', 0) + 1
        rec['path'] = os.path.relpath(p, root)
        counts[rec['bucket']] = counts.get(rec['bucket'], 0) + 1
        flags += [(f[0], app, f[1]) for f in rec['flags']]
        for n in rec['notes']:
            notes[n[0]] = notes.get(n[0], 0) + 1
        out.append(rec)
    return {'apps': len(apps), 'specs': len(out), 'counts': counts,
            'flags': flags, 'notes': notes, 'rows': out}


# --- network adjudication --------------------------------------------------
def _fetch(url: str) -> tuple[int, str]:
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=25) as r:
            return r.status, r.read().decode('utf-8', 'replace')
    except Exception as e:  # noqa: BLE001 — a dead preview is data, not a crash
        return getattr(e, 'code', 0), ''


def _preview_url(slug: str) -> str:
    for fam in FAMILIES:
        url = f'https://preview.colorlib.com/{fam}{slug}/'
        if _fetch(url)[0] == 200:
            return url
    return f'https://preview.colorlib.com/theme/{slug}/'


def _plain(doc: str) -> str:
    doc = re.sub(r'<script.*?</script>|<style.*?</style>', ' ', doc, flags=re.S | re.I)
    return re.sub(r'\s+', ' ', html.unescape(re.sub(r'<[^>]+>', ' ', doc))).strip()


def app_copy(app_dir: str) -> list[str]:
    chunks = []
    for dp, _, fs in os.walk(app_dir):
        for f in fs:
            if f.endswith(('.tsx', '.ts')):
                chunks.append(open(os.path.join(dp, f), encoding='utf-8',
                                   errors='replace').read())
    text = '\n'.join(chunks)
    out, seen = [], set()
    for m in re.finditer(r'"([^"\n]{8,160})"|\'([^\'\n]{8,160})\'|>\s*([^<>{}\n]{8,160}?)\s*<', text):
        s = next((g for g in m.groups() if g), '').strip()
        if len(s.split()) < 2 or re.match(r'^(https?:|--|M\d)', s):
            continue
        if re.search(r'[{}<>]|\b(px|rem|flex|grid|rounded|hover|text-\w|bg-\w)\b', s):
            continue
        k = norm(s)
        if k and k not in seen:
            seen.add(k)
            out.append(s)
    return out


def hits_for(copy: list[str], body: str) -> list[str]:
    low = body.lower()
    return [s for s in copy if re.sub(r'\s+', ' ', s.lower()) in low]


def _stem(slug: str) -> str:
    return re.sub(r'[-_]?v?\d+$', '', slug)


def _family(slug: str, known: set[str]) -> list[str]:
    """Every slug in the same demo family (`accordion-*`, `bootstrap-buttons-*`)."""
    stem = _stem(slug)
    if not stem:
        return []
    pat = re.compile(re.escape(stem) + r'([-_]|$)')
    return sorted(s for s in known if pat.match(s))


def exclusive_hits(bodies: dict[str, list[str] | None]) -> dict[str, list[str]]:
    """Keep only the copy that matches ONE candidate.

    The demo families share their lorem ipsum ("behind the word mountains" is
    in every accordion demo), so a raw count crowns an arbitrary sibling —
    measured 2026-10-24f: `bellows` scored accordion-03 1-0 on boilerplate
    while its own panel titles are accordion-01's.
    """
    out: dict[str, list[str]] = {}
    for slug, hs in bodies.items():
        if not hs:
            out[slug] = []
            continue
        out[slug] = [s for s in hs if sum(1 for o in bodies.values() if o and s in o) == 1]
    return out


def decide(scores: dict[str, list[str]], spec_slug: str,
           row_slugs: list[str]) -> tuple[str, str, list[str]]:
    """(verdict, winner, tied leaders) — the whole judgement, no I/O."""
    best_n = max((len(v) for v in scores.values()), default=0)
    leaders = sorted(s for s, v in scores.items() if len(v) == best_n)
    # One shared phrase is a coincidence ("Website Hosting" exists on every
    # hosting demo); two strings that ONLY this candidate carries is provenance.
    if best_n < MIN_EVIDENCE:
        return 'UNRESOLVED', (leaders[0] if leaders else ''), leaders
    if len(leaders) > 1:
        return 'UNRESOLVED', leaders[0], leaders      # a tie is not evidence
    best = leaders[0]
    if best == spec_slug:
        return 'ROW-POINTER', best, leaders
    if best in row_slugs:
        return 'SPEC-STALE', best, leaders
    return 'BOTH-STALE', best, leaders


def adjudicate(root: str, rec: dict, known: set[str]) -> dict:
    cands = [rec['slug']] + [s for s in rec['row_slugs'] if s != rec['slug']]
    copy = app_copy(os.path.join(root, 'apps', rec['app']))
    bodies: dict[str, list[str] | None] = {}

    def measure(slug: str) -> None:
        if slug in bodies:
            return
        st, doc = _fetch(_preview_url(slug))
        bodies[slug] = None if st != 200 else hits_for(copy, _plain(doc))

    for slug in cands:
        measure(slug)
    scores = exclusive_hits(bodies)
    # Below 3 exclusive hits, sweep the family: a third design may be the real one.
    if max((len(v) for v in scores.values()), default=0) < 3:
        for slug in _family(rec['slug'], known) + _family(rec['row_slugs'][0], known):
            measure(slug)
        scores = exclusive_hits(bodies)

    verdict, best, leaders = decide(scores, rec['slug'], rec['row_slugs'])
    rec['verdict'] = verdict
    rec['candidates'] = {k: len(v) for k, v in sorted(scores.items(), key=lambda kv: -len(kv[1]))}
    rec['evidence'] = (scores.get(best) or [])[:4]
    rec['tie'] = leaders if len(leaders) > 1 else []
    return rec


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='.')
    ap.add_argument('--json')
    ap.add_argument('--network', action='store_true',
                    help='adjudicate DRIFT cases against the live previews')
    ap.add_argument('--only', help='comma-separated app names (network mode)')
    ap.add_argument('--no-guards', action='store_true')
    a = ap.parse_args()
    if a.no_guards:
        for k in GUARDS:
            GUARDS[k] = False
    rep = audit(a.root)
    c = rep['counts']
    print(f"apps={rep['apps']} specs={rep['specs']} AGREE={c.get('AGREE', 0)} "
          f"DRIFT={c.get('DRIFT', 0)} NO-SLUG={c.get('NO-SLUG', 0)} flags={len(rep['flags'])}")
    for k, v in sorted(rep['notes'].items()):
        print(f'  note {k}: {v}')
    if rep['flags']:
        print('\nflags:')
        for f in rep['flags']:
            print(f"  {f[1]:22} spec={_spec_of(rep, f[1]):32} rows={f[2]}")
    if a.network:
        only = {x.strip() for x in a.only.split(',')} if a.only else None
        known = {r['slug'] for r in load_rows(os.path.join(a.root, 'TEMPLATES.md')) if r['slug']}
        todo = [r for r in rep['rows']
                if r['bucket'] == 'DRIFT' and (not only or r['app'] in only)]
        print(f'\nadjudicating {len(todo)} DRIFT case(s) against the live previews:')
        for rec in todo:
            rec = adjudicate(a.root, rec, known)
            print(f"  {rec['app']:14} {rec['verdict']:12} spec={rec['slug']:30} "
                  f"rows={','.join(rec['row_slugs']):28} scores={rec['candidates']}")
            for e in rec['evidence']:
                print(f'       ~ {e[:80]!r}')
    if a.json:
        with open(a.json, 'w', encoding='utf-8') as fh:
            json.dump(rep, fh, indent=1)
        print(f'\njson -> {a.json}')
    return 0 if not rep['flags'] else 1


def _spec_of(rep: dict, app: str) -> str:
    for r in rep['rows']:
        if r['app'] == app:
            return r['slug']
    return ''


if __name__ == '__main__':
    sys.exit(main())
