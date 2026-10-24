#!/usr/bin/env python3
"""verify-provenance-grammar.py — can the rule-5 naming audit SEE this spec's source?

`docs/naming-audit.md` measures rule 5 by reading the FIRST `ColorLib "X"`
mention in each spec (`scripts/audit-naming.mjs`), then comparing it with the
app folder name. A spec that names its source in prose instead —

    Recreation of the ColorLib **Classic** business template
    Recreate the ColorLib Halo photography portfolio template

— is invisible to that regex. `audit-naming.mjs` reports the app as `unknown`
and the violation count is an UNDERSTATEMENT of the truth: the audit cannot
tell a compliant rename from an unchanged source name for 1 in 4 apps.

This axis reads the provenance SENTENCE from the prep side. Read-only, offline
(no network: the mapping comes from `TEMPLATES.md`, which is the repo's own
record of source design -> slug -> app).

Buckets (every spec lands in exactly one):
  PARSED       — the audited `ColorLib "X"` grammar is present
  RESOLVABLE   — absent, but the source name is derivable: the spec's own
                 source/preview/archive URL or a `Source slug:` label resolves
                 through TEMPLATES.md's slug -> design-name map, or the prose
                 carries `ColorLib <Name>` itself
  NO-EVIDENCE  — absent, and nothing in the spec names the source

Flags (independent of the buckets):
  UNSEEN       — the audit cannot read this spec's source (PARSED absent)
  RULE5        — the app folder normalises to its own source (quoted name,
                 slug-derived design name, or slug); `audit-naming.mjs` already
                 reports this one
  RULE5-HIDDEN — same violation, but the audit cannot see it: the spec is
                 UNSEEN, or it quotes a marketing title while the folder is the
                 slug (`apps/itkol` quotes "IT-Solution")
  AMBIG-SLUG   — one slug resolves to two different design names (refuse)

Notes:
  PREP-ONLY         — no apps/<folder> (prep history, informational)
  NO-SOURCE-URL     — name came from prose; the spec cites no source URL
  SPEC-ROW-MISMATCH — the spec's source slug differs from its TEMPLATES.md row

Usage:
  python3 scripts/verify-provenance-grammar.py [--root DIR] [--limit N]
                                               [--json FILE] [--no-guards]
Exit 0 = no flags, 1 = flags present.
"""
from __future__ import annotations

import argparse
import glob
import json
import os
import re
import sys

# --- module guards (controls flip these to prove a case can FAIL) -----------
GUARDS = {"slug_index": True, "normalize": True, "prose": True, "rule5": True}

# The grammar MUST match `audit-naming.mjs` exactly (it spans newlines: two
# specs quote a name across a line break), or this axis reports an app as
# unseen when the audit does read it.
QUOTED = re.compile(r'ColorLib\s+(?:free\s+)?["\u201c]([^"\u201d]+)["\u201d]')
WP_URL = re.compile(r'colorlib\.com/wp/template/([\w.~%+-]+)/')
PRE_URL = re.compile(r'preview\.colorlib\.com/theme/([\w.~%+-]+(?:/[\w.~%+-]+)*)')
ZIP_URL = re.compile(r'downloads/free/([\w.~%+-]+)\.zip')
LABELED = re.compile(r'[Ss]ource\s+slug\**\s*[:=]?\s*\**\s*`([\w.~%-]+)`')
BOLD = re.compile(r'ColorLib\s+(?:free\s+)?\*\*([^*\n]+?)\*\*')
BARE = re.compile(r'ColorLib\s+(?:free\s+)?([A-Z][\w&.\'-]*(?:\s+[A-Z][\w&.\'-]*){0,3})')
ROW = re.compile(r'^- \[[ xX~]\] \*\*(.+?)\*\*')
ROW_SLUG = re.compile(r'\[colorlib\]\(https://colorlib\.com/wp/template/([\w.~%+-]+)/\)')
# The link TEXT is not the app name. Rows carry `[Atelier]`, `[Villa]`, `[Landing]`
# and `[Job Board]` (title case / spaced) — matching `\1` against the text missed 3
# of the 20 SPEC-ROW-MISMATCH subjects (measured 2026-10-24f: atelier, landing,
# villa read as "no row links this app" and were reported as drift they were not).
# The subdomain IS the app folder, so match that and ignore the label.
ROW_APP = re.compile(r'\]\(https://([\w.-]+)\.free\.componentdock\.com\)', re.I)
PURPOSE = re.compile(r'^##\s+Purpose\s*$', re.M)
H2 = re.compile(r'^##\s', re.M)

STOP = re.compile(
    r'\b(template|templates|free|html|html5|react|vite|tailwind|css|typescript|'
    r'bootstrap|wordpress|theme|themes|design|designs|page|website|site|demo|'
    r'preview|business|landing|the|a|an|and|for|of|is|was|this|that)\b',
    re.I,
)


def norm(s: str) -> str:
    """Naming-audit normalisation: lowercase, alphanumerics only."""
    return re.sub(r'[^a-z0-9]', '', (s or '').lower())


def normv(s: str) -> str:
    """`norm` plus the display-name version marker a slug drops.

    The ColorLib demo families are titled `Modal V19`, `Contact Form V12`,
    `Colorlib Error 404 V7` while their slugs are `modal-19`, `contact-form-12`,
    `colorlib-error-404-7`: a standalone `v` before digits is not a name
    difference. Without this, 205 compliant specs flagged QUOTED-MISMATCH.
    """
    return re.sub(r'v(?=\d)', '', norm(s))


# --- TEMPLATES.md ----------------------------------------------------------
def load_rows(path: str = 'TEMPLATES.md') -> list[dict]:
    if not os.path.exists(path):
        return []
    rows = []
    with open(path, encoding='utf-8', errors='replace') as fh:
        for i, line in enumerate(fh, 1):
            m = ROW.match(line)
            if not m:
                continue
            s = ROW_SLUG.search(line)
            rows.append({
                'line': i,
                'name': m.group(1).strip(),
                'slug': s.group(1) if s else None,
                'apps': [a.lower() for a in ROW_APP.findall(line)],
            })
    return rows


def slug_index(rows: list[dict]) -> tuple[dict, dict, set]:
    """(exact slug -> name, normalized slug -> name, ambiguous normalized set)."""
    exact: dict[str, str] = {}
    nidx: dict[str, str] = {}
    ambig: set[str] = set()
    for r in rows:
        slug, name = r.get('slug'), r.get('name')
        if not slug or not name:
            continue
        if slug in exact and norm(exact[slug]) != norm(name):
            ambig.add(norm(slug))
        exact.setdefault(slug, name)
        k = norm(slug)
        if k in nidx and norm(nidx[k]) != norm(name):
            ambig.add(k)
        nidx.setdefault(k, name)
    return exact, nidx, ambig


# --- one spec --------------------------------------------------------------
def _walk_preview(text: str) -> list[str]:
    """Candidate slugs from every preview URL, family segments included."""
    out = []
    for m in PRE_URL.finditer(text):
        segs = [s for s in m.group(1).split('/') if s]
        # longest candidate first (theme/bb/bootstrap-buttons-02/)
        for take in range(len(segs), 0, -1):
            out.append('/'.join(segs[-take:]))
        out.extend(segs)
    return out


def resolve_slug(text: str, exact: dict, nidx: dict) -> tuple[str, str]:
    """(slug, name) for the spec's own source, '' when nothing resolves."""
    cands: list[str] = []
    m = WP_URL.search(text)
    if m:
        cands.append(m.group(1))
    m = LABELED.search(text)
    if m:
        cands.append(m.group(1))
    cands.extend(_walk_preview(text))
    if m := ZIP_URL.search(text):
        cands.append(m.group(1))
    for c in cands:
        if GUARDS['slug_index'] and c in exact:
            return c, exact[c]
        if GUARDS['normalize'] and norm(c) in nidx:
            return c, nidx[norm(c)]
    return (cands[0] if cands else ''), ''


def prose_name(text: str) -> tuple[str, str]:
    """(name, shape) from the spec's own prose — `bold` or `bare`."""
    m = BOLD.search(text)
    if m:
        return m.group(1).strip(), 'bold'
    m = BARE.search(text)
    if m:
        raw = m.group(1).strip()
        cleaned = STOP.sub(' ', raw).strip(' -')
        if cleaned and norm(cleaned):
            return cleaned, 'bare'
    return '', ''


def parse_spec(text: str, exact: dict, nidx: dict, folder: str = '',
               has_app: bool = True, rows: list[dict] | None = None) -> dict:
    rec = {'folder': folder, 'kind': '', 'name': '', 'slug': '', 'shape': '',
           'flags': [], 'notes': []}
    name = ''
    q = QUOTED.search(text)
    slug, sname = resolve_slug(text, exact, nidx) if GUARDS['slug_index'] or GUARDS['normalize'] else ('', '')
    pname, shape = prose_name(text) if GUARDS['prose'] else ('', '')

    if q:
        rec['kind'] = 'PARSED'
        rec['name'] = re.sub(r'\s+', ' ', q.group(1)).strip()
        rec['slug'] = slug
    else:
        name = sname or pname
        rec['kind'] = 'RESOLVABLE' if name else 'NO-EVIDENCE'
        rec['name'] = name
        rec['slug'] = slug
        rec['shape'] = 'url' if sname else shape
        if name and not sname:
            rec['notes'].append(('NO-SOURCE-URL', ''))
        if not name:
            rec['notes'].append(('NO-EVIDENCE', ''))
        rec['flags'].append(('UNSEEN', rec['kind']))

    # Rule 5 is "the folder is not the source". The audit tests the QUOTED
    # display name only, so `apps/itkol` (quoted "IT-Solution", slug `itkol`)
    # passes it. Test the own source on all three handles: quoted name,
    # slug-derived design name, and the slug itself.
    own = {normv(rec['name']), normv(sname), normv(slug)}
    own.discard('')
    if has_app and GUARDS['rule5'] and normv(folder) in own:
        seen = rec['kind'] == 'PARSED' and normv(rec['name']) == normv(folder)
        rec['flags'].append(('RULE5' if seen else 'RULE5-HIDDEN',
                             rec['name'] or sname or slug))
    if not has_app:
        rec['notes'].append(('PREP-ONLY', ''))

    if rows is not None and slug:
        mine = {r['slug'] for r in rows if folder in r['apps'] and r['slug']}
        if mine and slug not in mine and not any(norm(slug) == norm(x) for x in mine):
            rec['notes'].append(('SPEC-ROW-MISMATCH', ','.join(sorted(mine))))
    return rec


# --- corpus ----------------------------------------------------------------
def audit(root: str = '.', limit: int | None = None) -> dict:
    tpath = os.path.join(root, 'TEMPLATES.md')
    rows = load_rows(tpath)
    exact, nidx, ambig = slug_index(rows)
    apps = set()
    adir = os.path.join(root, 'apps')
    if os.path.isdir(adir):
        apps = {d for d in os.listdir(adir) if os.path.isdir(os.path.join(adir, d))}

    specs = sorted(glob.glob(os.path.join(root, 'openspec', 'specs', 'template-*', 'spec.md')))
    if limit:
        specs = specs[:limit]
    out, counts, flags, notes = [], {'PARSED': 0, 'RESOLVABLE': 0, 'NO-EVIDENCE': 0}, [], {}
    for p in specs:
        folder = os.path.basename(os.path.dirname(p))[len('template-'):]
        try:
            text = open(p, encoding='utf-8', errors='replace').read()
        except OSError:
            continue
        rec = parse_spec(text, exact, nidx, folder, folder in apps, rows)
        rec['path'] = os.path.relpath(p, root)
        counts[rec['kind']] += 1
        for f in rec['flags']:
            flags.append((f[0], folder, f[1]))
        for n in rec['notes']:
            notes[n[0]] = notes.get(n[0], 0) + 1
        if norm(rec['slug']) in ambig and rec['slug']:
            flags.append(('AMBIG-SLUG', folder, rec['slug']))
        out.append(rec)
    return {'specs': len(out), 'counts': counts, 'flags': flags,
            'notes': notes, 'rows': out, 'apps': len(apps)}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='.')
    ap.add_argument('--limit', type=int)
    ap.add_argument('--json')
    ap.add_argument('--no-guards', action='store_true', help='disable every guard (must fire)')
    a = ap.parse_args()
    if a.no_guards:
        for k in GUARDS:
            GUARDS[k] = False
    rep = audit(a.root, a.limit)
    c = rep['counts']
    by = {}
    for f in rep['flags']:
        by[f[0]] = by.get(f[0], 0) + 1
    print(f"specs={rep['specs']} PARSED={c['PARSED']} RESOLVABLE={c['RESOLVABLE']} "
          f"NO-EVIDENCE={c['NO-EVIDENCE']} flags={len(rep['flags'])}")
    for k, v in sorted(by.items()):
        print(f"  flag {k}: {v}")
    for k, v in sorted(rep['notes'].items()):
        print(f"  note {k}: {v}")
    if by.get('RULE5') or by.get('RULE5-HIDDEN'):
        print("\nrule-5 violations the naming audit cannot see:")
        for f in rep['flags']:
            if f[0] in ('RULE5', 'RULE5-HIDDEN'):
                print(f"  apps/{f[1]}  <- ColorLib \"{f[2]}\"  ({f[0]})")
    if a.json:
        with open(a.json, 'w', encoding='utf-8') as fh:
            json.dump(rep, fh, indent=1)
        print(f"\njson -> {a.json}")
    return 0 if not rep['flags'] else 1


if __name__ == '__main__':
    sys.exit(main())
