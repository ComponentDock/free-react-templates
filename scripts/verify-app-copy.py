#!/usr/bin/env python3
"""verify-app-copy.py — HEADING-COPY axis (audit, read-only, NO FLAG).

Built for the item `audit-run-2026-10-24p` queued first: **873 of 1,703 shipped
apps had never been compared with their reference's COPY**.  The brief-file axes
compare documents with documents; this one compares the SHIPPED APP's section
vocabulary with the reference page's own `<h1>`–`<h4>` text.

WHY THERE IS NO FLAG BUCKET (measured 2026-10-24, the reason this axis exists in
this shape)

The obvious product is `WRONG-SOURCE`: an app built from the wrong design speaks
a different vocabulary than the page it claims.  Measured over 1,703 apps it
does not survive contact with the corpus:

* unweighted token coverage put 111 apps in WRONG-SOURCE; every one inspected
  was matched to a big theme on generic headings ("Our Services", "About Us",
  "Contact Us") — rarity weighting (`build_idf`) cut it to 76, and the tail is
  still structural, not design:
    - `steeple` (church theme, claims `reborn`) matched the HOTEL demo `suites`
      at 0.91 on "About" / "Quick Menu";
    - `byline` (blog, claims `nikki`) matched `wordify` at 1.00 on "Latest
      Posts" / "Categories" — both are blog sidebars, but nikki's headings are
      POST TITLES and byline's are UI CHROME: heading KIND, not design;
    - `metalwork` (claims `industrial`) matched `hexa` at 0.77 on
      "Projects" / "Testimonial";
    - `mint` (claims `interior-design`) hits its own reference verbatim
      ("Experience Interior Design") and still scored 0.13 — one distinctive
      heading among five generic ones.
* the independent body-copy channel confirms almost none of them: of the 76,
  7 showed ≥3 body phrases in the alternate and 0 in the claimed reference,
  while 5 showed the reverse (`batter` 7/0, `crafty` 5/0) — the channels
  disagree and neither is decisive.
* two genuine `REF-RESKIN` cases surfaced instead: `acumen`/`linnet` claim
  `classic`, whose live demo is now **"Classic Studio"** (rebuilt, `style.css`
  404) — the apps are faithful to the OLD Classic, so a low score is the
  reference's fault, not the app's.

A "0 affinity" flag would therefore have been a 76-strong false-positive
machine.  Per the house rule that a bucket nothing can adjudicate is a NOTE,
this axis ships as a measured BASELINE with no flag: it records, app by app,
how much of the reference's heading vocabulary the app kept, and it documents
what the channel can NOT do so the next run does not spend a run rediscovering
it.

CHANNEL: literal JSX heading text (`<h1..h4>literal</h1..h4>`), falling back to
`title|heading|subtitle|tagline` string values when the copy lives in data
(27% of the corpus).  Body copy was rejected as the primary channel: rank-1 on
74/78 apps but literally 0 hits on 31/78 (apps rewrite body prose, keep
headings).

METRIC: `affinity` = mean over the app's headings of the best single-heading
token coverage against the reference's headings, weighted by token rarity
(`log((N+1)/(df+1))`, df = references in the corpus whose headings hold the
token), and a token held by more than MIN_RARITY_RATIO of the corpus's
references is dropped as generic (a heading made only of such words is skipped
rather than scored 0).

BUCKETS (one per app — exact partition, priority order)

  NO-SPEC       no `openspec/specs/template-<a>/spec.md`
  ROUNDUP       the row is a ColorLib roundup post (`…-wordpress-themes`), which
                has no demo by construction — 13 of the 20 dead references
  REF-DEAD      no demo through catalogue map, alias, de-hyphenated spelling,
                prefix ladder, the spec's own cited URLs, or the archive zip
  REF-THIN      the reference carries < 4 headings or < 1,200 B of visible text
                — a rebuilt kit shell names only its own demo (`#02 — Bootstrap
                4 Buttons`), so its score says nothing about the app
  NO-APP-COPY   fewer than 5 usable app headings (component demos, and apps
                whose copy is interpolated into props)
  AGREE         affinity ≥ 0.50 — the app kept the reference's headings
  ADAPTED       0.33 ≤ affinity < 0.50 — brand/tone adaptation, still the design
  LOW-OVERLAP   affinity < 0.33 — NOTE: the app reworded its headings, or its
                headings are a different KIND (sidebar labels vs post titles).
                The `alt`/`alt_slug` columns carry the best-matching OTHER design
                as a diagnostic only: it is NOT a wrong-source claim.

Usage:
  python3 scripts/verify-app-copy.py [--root .] [--cache DIR] [--limit N]
                                     [--threads N] [--no-net] [--json OUT]
                                     [--md OUT] [--show BUCKET] [--verbose]
Exit code: 0 = clean (this axis has no flag bucket), 2 = bad usage.
"""
from __future__ import annotations

import argparse
import glob
import html
import importlib.util
import json
import math
import os
import re
import statistics
import sys
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))
BUCKETS = ('AGREE', 'ADAPTED', 'LOW-OVERLAP', 'REF-THIN', 'REF-DEAD',
           'NO-APP-COPY', 'ROUNDUP', 'NO-SPEC')
# A ColorLib ROUNDUP post lists many designs and has no demo of its own
# (`/wp/template/wordpress-restaurant-themes/`).  13 of the 20 dead references
# measured on 2026-10-24 were this shape — a row with a screenshot but no page.
ROUNDUP = re.compile(r'(?i)(?:^|-)(?:wordpress|html)-?(?:themes)$|themes$')
AGREE, LOW, DECISIVE = 0.50, 0.33, 0.25
MIN_HEADINGS, MIN_REF_HEADINGS, MIN_REF_TEXT = 5, 4, 1200
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/124.0 Safari/537.36")
STOP = set("the a an and or of to in for with our your we you us is are be by "
           "on at from as it this that all new more most get".split())
NOLADDER = bool(os.environ.get('NOLADDER'))      # A/B control: catalog only


def _load(fn: str, name: str):
    spec = importlib.util.spec_from_file_location(name, os.path.join(HERE, fn))
    mod = importlib.util.module_from_spec(spec)  # type: ignore[arg-type]
    sys.modules[name] = mod
    spec.loader.exec_module(mod)  # type: ignore[union-attr]
    return mod


DS = _load('verify-docs-source.py', 'vds_copy')

# --- copy extraction -------------------------------------------------------
HD = re.compile(r'(?is)<h([1-4])[^>]*>(.*?)</h\1>')


def norm(s: str) -> str:
    return re.sub(r'\s+', ' ', html.unescape(s)).strip()


def toks(s: str, drop=frozenset()) -> set[str]:
    return {w for w in re.findall(r'[a-z0-9]+', norm(s).lower())
            if w not in STOP and not w.isdigit() and len(w) >= 3 and w not in drop}


KEYSTR = re.compile(r"""\b(?:title|heading|subtitle|tagline)\s*:\s*"""
                     r"""["'`]([^"'`\\]{6,80})["'`]""")


def app_headings(app_dir: str) -> tuple[list[str], str]:
    """(headings, channel) — literal JSX heading text, else title-key strings.

    Channel A is `<h1..h4>literal</h1..h4>`; interpolations (`{slide.title}`) are
    skipped rather than guessed.  When a page keeps its copy in data (27% of the
    corpus measure), channel B reads the `title|heading|subtitle|tagline`
    string values from `src/**/*.ts{,x}` — the same words the component renders.
    """
    jsx: list[str] = []
    keys: list[str] = []
    files = sorted(glob.glob(os.path.join(app_dir, 'src', '**', '*.tsx'),
                             recursive=True))
    for p in files:
        try:
            t = open(p, encoding='utf-8', errors='replace').read()
        except OSError:
            continue
        for m in HD.finditer(t):
            s = norm(re.sub(r'(?s)<[^>]+>', ' ', m.group(2)))
            if 2 < len(s) < 90 and not s.startswith('{') and '{' not in s:
                if s not in jsx:
                    jsx.append(s)
    if len(jsx) >= MIN_HEADINGS:
        return jsx, 'jsx'
    for p in files + sorted(glob.glob(os.path.join(app_dir, 'src', '**', '*.ts'),
                                      recursive=True)):
        try:
            t = open(p, encoding='utf-8', errors='replace').read()
        except OSError:
            continue
        for m in KEYSTR.finditer(t):
            s = norm(m.group(1))
            if (6 < len(s) < 90 and 'http' not in s.lower() and '@' not in s
                    and s not in keys and s not in jsx):
                keys.append(s)
    if len(keys) >= MIN_HEADINGS:
        return keys, 'keys'
    return jsx, 'jsx'


def page_text_len(h: str) -> int:
    """Visible text mass — a rebuilt kit shell carries ~300 B, a theme 3-30 KB."""
    t = re.sub(r'(?is)<(script|style|noscript)[^>]*>.*?</\1>', ' ', h)
    t = re.sub(r'(?s)<!--.*?-->', ' ', t)
    t = re.sub(r'(?s)<[^>]+>', ' ', t)
    return len(re.sub(r'\s+', ' ', html.unescape(t)).strip())


def page_headings(h: str) -> list[str]:
    out: list[str] = []
    for m in HD.finditer(h):
        s = norm(re.sub(r'(?s)<[^>]+>', ' ', m.group(2)))
        if s and len(s) < 120:
            out.append(s)
    return out


DF: dict[str, int] = {}             # token -> references whose headings hold it
NCORP = 0                           # corpus size (for the generic-token ratio)
MIN_RARITY_RATIO = 0.5              # a token in >50% of references is no evidence


def build_idf(corpus_toks: dict[str, list[set[str]]]) -> None:
    """Fill DF/NCORP, then weight each token `log((N+1)/(df+1))`.

    Without rarity every generic heading ("Our Services", "About Us", "Contact
    Us") counts as proof: an unweighted pass over 1,602 references put 111 apps
    in what would have been a WRONG-SOURCE bucket, matched to big themes purely
    on such headings.  Rarity makes the channel say what it means — a word
    nobody else uses is evidence, a word everybody uses is not.
    """
    global NCORP
    NCORP = len(corpus_toks)
    df: dict[str, int] = {}
    for sets in corpus_toks.values():
        for t in (set().union(*sets) if sets else set()):
            df[t] = df.get(t, 0) + 1
    DF.clear()
    DF.update(df)
    IDF.clear()
    IDF.update({t: math.log((NCORP + 1) / (c + 1)) for t, c in df.items()})


IDF: dict[str, float] = {}


def is_generic(t: str) -> bool:
    """In more than MIN_RARITY_RATIO of the corpus's references? Then no signal.

    A ratio, not a bit count: on a 2-reference synthetic corpus every log-odds
    weight is tiny, and an absolute floor would call a distinctive heading
    "no evidence" merely because the corpus was small (measured: it emptied the
    bucket in the control harness).
    """
    if MIN_RARITY_RATIO >= 1.0 or NCORP < 4:
        # a 1-3 reference corpus cannot define "generic": every token is in most
        # of it, so the ratio would call all of them generic and skip every app
        return False
    return DF.get(t, 0) / NCORP > MIN_RARITY_RATIO


def evid(ht: set[str]) -> set[str]:
    """The evidence-bearing tokens of a heading (generic ones dropped)."""
    return {t for t in ht if not is_generic(t)}


def w(t: str) -> float:
    """Base 1.0 plus rarity: a 1-2 reference corpus still scores, and a token
    held by EVERY reference falls to the base — present, but worth nothing."""
    return 1.0 + IDF.get(t, 0.0)


def cov(ht: set[str], rt: set[str]) -> float:
    """Rarity-weighted coverage of `ht`'s evidence by `rt`'s evidence."""
    a, b = evid(ht), evid(rt)
    if not a or not b:
        return 0.0
    inter = a & b
    if not inter:
        return 0.0
    return sum(w(t) for t in inter) / sum(w(t) for t in a)


def affinity(heads: list[str], ref_heads: list[str],
             drop=frozenset()) -> tuple[float, int]:
    """(mean weighted coverage of each app heading, headings that counted).

    Per heading the best single reference heading wins; a heading made only of
    generic words is skipped instead of scoring 0.
    """
    rt = [toks(r, drop) for r in ref_heads]
    rt = [x for x in rt if x]
    scores = []
    for h in heads:
        ht = toks(h, drop)
        if not ht or not evid(ht):
            continue
        best = 0.0
        for t in rt:
            v = cov(ht, t)
            if v > best:
                best = v
        scores.append(best)
    return (round(statistics.mean(scores), 3) if scores else 0.0), len(scores)


# --- reference fetch -------------------------------------------------------
LADDER = ('https://preview.colorlib.com/theme/%s/',
          'https://preview.colorlib.com/theme/bootstrap/%s/',
          'https://preview.colorlib.com/theme/bb/%s/',
          'https://colorlib.com/etc/cs/%s/index.html')


def fetch(url: str) -> tuple[int, bytes]:
    req = urllib.request.Request(url, headers={'User-Agent': UA})
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return int(r.status), r.read()
    except urllib.error.HTTPError as e:
        return int(e.code), b''
    except Exception:
        return 0, b''


def spec_cites(text: str) -> list[str]:
    """Every preview URL a spec itself names — the spec's own claim, probed.

    A spec often records a working path the ladder does not know
    (`bulletin`/`newsflex` states `theme/newsbox/`).  Trying the spec's citations
    turns `REF-DEAD` into a claim check instead of a resolver miss.
    """
    out: list[str] = []
    for m in re.finditer(r'https?://(?:preview\.colorlib\.com|colorlib\.com)'
                         r'(/[\w./-]*)', text):
        u = m.group(0).rstrip('.,;)' + '`')
        # `/wp/template/…` is a WordPress POST (the roundup pages live there),
        # never a demo: reading it would score an app against a listing article.
        if re.search(r'colorlib\.com/wp/', u):
            continue
        if u.endswith('/') or u.endswith('.html'):
            if u not in out:
                out.append(u)
    return out


def reference(slug: str, cache: str, cat: dict, net: bool, alias: str = '',
              cites: list[str] | None = None):
    """(url, headings, via) for the slug's demo — catalogue map, the documented
    prefix ladder, the demo-dir alias from the row's screenshot basename, then
    the official archive zip.  Cached per slug."""
    if not slug:
        return None, [], None, 0
    path = os.path.join(cache, 'ref', slug + '.json')
    if os.path.exists(path):
        try:
            rec = json.load(open(path))
            return (rec.get('url'), rec.get('heads') or [], rec.get('via'),
                    int(rec.get('textlen') or 0))
        except Exception:
            pass
    if not net:
        return None, [], None, 0
    cands = []
    if slug in cat:
        cands.append(cat[slug])
    if alias:
        cands.append('https://preview.colorlib.com/theme/%s/' % alias)
    if '-' in slug:
        cands.append('https://preview.colorlib.com/theme/'
                     + slug.replace('-', '') + '/')
    if not NOLADDER:
        cands += [p % slug for p in LADDER]
        if alias:
            cands.append('https://preview.colorlib.com/theme/%s/' % alias)
        # LAST: the URLs the spec itself cites.  They resolve families the ladder
        # does not know (`newsflex` -> `theme/newsbox/`), but docs also cite
        # SIBLINGS ("see theme/karl/" for the cart drawer), so they must never
        # outrank the slug-derived candidates.
        for u in (cites or []):
            if u not in cands:
                cands.append(u)
    out: tuple = (None, [], None, 0)
    for url in cands:
        code, body = fetch(url)
        if code == 200 and len(body) > 500:
            h = body.decode('utf-8', 'replace')
            out = (url, page_headings(h), 'live', page_text_len(h))
            break
    if not out[0] and not NOLADDER:
        # archive-only families (`colorlib-wizard-*`) and stale demo paths: the
        # official zip is the same DOM the prep read
        out = archive(slug)
    try:
        os.makedirs(os.path.dirname(path), exist_ok=True)
        json.dump({'url': out[0], 'heads': out[1], 'via': out[2],
                   'textlen': out[3]}, open(path, 'w'))
    except OSError:
        pass
    return out


def archive(slug: str):
    """(url, headings, 'archive') from `/downloads/free/<slug>.zip`, else dead."""
    url = 'https://preview.colorlib.com/downloads/free/%s.zip' % slug
    code, body = fetch(url)
    if code != 200 or len(body) < 1000:
        return None, [], None, 0
    import io
    import zipfile
    try:
        zf = zipfile.ZipFile(io.BytesIO(body))
    except Exception:
        return None, [], None, 0
    names = [n for n in zf.namelist() if n.lower().endswith(('.html', '.htm'))]
    names.sort(key=lambda n: (0 if n.lower().endswith('index.html') else 1,
                              n.count('/'), n))
    heads: list[str] = []
    mass = 0
    for n in names:
        if len(heads) >= MIN_REF_HEADINGS * 3:
            break
        try:
            txt = zf.read(n).decode('utf-8', 'replace')
        except Exception:
            continue
        for h in page_headings(txt):
            if h not in heads:
                heads.append(h)
        mass += page_text_len(txt)
    return (url if heads else None), heads, ('archive' if heads else None), mass


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument('--root', default='.')
    ap.add_argument('--cache', default='/tmp/app-copy-cache')
    ap.add_argument('--limit', type=int, default=0)
    ap.add_argument('--threads', type=int, default=12)
    ap.add_argument('--no-net', action='store_true')
    ap.add_argument('--json', default='')
    ap.add_argument('--md', default='')
    ap.add_argument('--show', default='')
    ap.add_argument('--verbose', action='store_true')
    a = ap.parse_args()
    root = os.path.abspath(a.root)
    apps_dir, specs = os.path.join(root, 'apps'), os.path.join(root, 'openspec', 'specs')
    if not (os.path.isdir(apps_dir) and os.path.isdir(specs)):
        print('missing apps/ or openspec/specs', file=sys.stderr)
        return 2
    os.makedirs(a.cache, exist_ok=True)

    if HERE not in [os.path.abspath(p) for p in sys.path]:
        sys.path.insert(0, HERE)
    import catalog_resolve as CR

    try:
        VB = _load('verify-brief-files.py', 'vbf_copy')
    except Exception:
        VB = None  # type: ignore[assignment]

    cat = {} if a.no_net else CR.urls(fetch, os.path.join(a.cache, 'catalog-map.json'))

    names = sorted(d for d in os.listdir(apps_dir)
                   if os.path.isdir(os.path.join(apps_dir, d)))
    if a.limit:
        names = names[:a.limit]
    jobs, heads, slugs, channel, cites = [], {}, {}, {}, {}
    for name in names:
        spec_path = os.path.join(specs, 'template-' + name, 'spec.md')
        if not os.path.exists(spec_path):
            slugs[name] = ''
            heads[name], channel[name], cites[name] = [], 'none', []
            continue
        text = open(spec_path, encoding='utf-8', errors='replace').read()
        slugs[name] = DS.spec_source(text)[0]
        cites[name] = spec_cites(text)
        heads[name], channel[name] = app_headings(os.path.join(apps_dir, name))

    uniq = sorted({s for s in slugs.values() if s})
    alias = {}
    try:
        alias = VB.load_aliases(root)
    except Exception:
        alias = {}

    # a slug can be claimed by several apps whose specs cite different paths
    slug_cites = {s: sorted({u for n, sl in slugs.items() if sl == s
                             for u in cites.get(n, [])}) for s in uniq}

    def get(slug: str, net: bool):
        return reference(slug, a.cache, cat, net, alias.get(slug, ''),
                         slug_cites.get(slug, []))
    todo = [s for s in uniq
            if not os.path.exists(os.path.join(a.cache, 'ref', s + '.json'))]
    with ThreadPoolExecutor(max_workers=max(1, a.threads)) as ex:
        list(ex.map(lambda s: get(s, not a.no_net), todo))
    refs = {s: get(s, False) for s in uniq}

    # corpus-wide heading table, for the third opinion (built once, tokens only —
    # an app's brand tokens are dropped from its OWN headings, so they can never
    # reach the intersection and need no drop on this side)
    corpus = {s: v[1] for s, v in refs.items()
              if len(v[1]) >= MIN_REF_HEADINGS and v[3] >= MIN_REF_TEXT}
    corpus_tok = {s: [t for t in (toks(h) for h in hs) if t] for s, hs in corpus.items()}
    build_idf(corpus_tok)
    post: dict[str, set[str]] = {}
    for s, sets in corpus_tok.items():
        for t in set().union(*sets) if sets else set():
            post.setdefault(t, set()).add(s)
    by_bucket: dict[str, list[dict]] = {b: [] for b in BUCKETS}

    def alt_best(heads_n: list[str], drop, skip: str) -> tuple[str, float]:
        """(slug, affinity) of the best-matching OTHER design in the corpus.

        Exact, not sampled: the candidate pool for a heading is the UNION of the
        posting lists of its tokens, which is precisely every reference that
        shares a token with it — every slug that could score above zero.
        """
        scored = [ht for ht in (toks(h, drop) for h in heads_n)
                  if ht and evid(ht)]
        if not scored:
            return '', 0.0
        tot: dict[str, float] = {}
        for ht in scored:
            cand: set[str] = set()
            for t in ht:
                cand |= post.get(t, set())
            cand.discard(skip)
            for s in sorted(cand):      # sorted: float sums must not depend on
                #                             set iteration order (hash seed)
                best = 0.0
                for t in corpus_tok[s]:
                    v = cov(ht, t)
                    if v > best:
                        best = v
                if best:
                    tot[s] = tot.get(s, 0.0) + best
        if not tot:
            return '', 0.0
        # deterministic tie-break: equal scores resolve on the slug, never on
        # dict insertion order (a second run must be a byte-level no-op)
        slug = max(sorted(tot), key=lambda s: (tot[s], s))
        return slug, round(tot[slug] / len(scored), 3)

    for name in names:
        spec_path = os.path.join(specs, 'template-' + name, 'spec.md')
        slug = slugs[name]
        heads_n = heads[name]
        url, rh, _via, tlen = refs.get(slug, (None, [], None, 0))
        drop = toks(name) | toks((slug or '').replace('-', ' '))
        own, scored_n = affinity(heads_n, rh, drop) if rh else (0.0, 0)
        alt_design, alt = '', 0.0
        if (rh and len(rh) >= MIN_REF_HEADINGS and len(heads_n) >= MIN_HEADINGS
                and own < LOW and scored_n):
            # third opinion, only where it can change the verdict
            alt_design, alt = alt_best(heads_n, drop, slug or '')
        if not os.path.exists(spec_path):
            bucket = 'NO-SPEC'
        elif ROUNDUP.search(slug or '') and not url:
            bucket = 'ROUNDUP'
        elif not url:
            bucket = 'REF-DEAD'
        elif len(rh) < MIN_REF_HEADINGS or tlen < MIN_REF_TEXT:
            bucket = 'REF-THIN'
        elif len(heads_n) < MIN_HEADINGS or not scored_n:
            bucket = 'NO-APP-COPY'
        elif own >= AGREE:
            bucket = 'AGREE'
        elif own >= LOW:
            bucket = 'ADAPTED'
        else:
            bucket = 'LOW-OVERLAP'
        rec = {'app': name, 'bucket': bucket, 'slug': slug, 'url': url,
               'channel': channel[name], 'headings': len(heads_n),
               'scored': scored_n, 'ref_heads': len(rh), 'ref_text': tlen,
               'affinity': own, 'alt': round(alt, 3), 'alt_slug': alt_design}
        by_bucket[bucket].append(rec)
        if a.verbose or (a.show and bucket == a.show):
            print(f"{bucket:13s} {name:16s} {slug:22s} aff={own:5.3f} "
                  f"n={scored_n:3d}/{len(heads_n):3d} ch={channel[name]:4s} "
                  f"alt={alt_design or '-'}@{alt:.3f}")

    total = sum(len(v) for v in by_bucket.values())
    print(f"\napps read: {total}")
    for b in BUCKETS:
        print(f"  {b:13s} {len(by_bucket[b])}")
    flags = 0                      # no flag bucket: see the module docstring
    print(f"flags: {flags}   (notes: LOW-OVERLAP {len(by_bucket['LOW-OVERLAP'])}, "
          f"REF-THIN {len(by_bucket['REF-THIN'])}, REF-DEAD {len(by_bucket['REF-DEAD'])}, "
          f"NO-APP-COPY {len(by_bucket['NO-APP-COPY'])}, "
          f"ROUNDUP {len(by_bucket['ROUNDUP'])})")
    if a.json:
        json.dump({'total': total, 'buckets': {k: len(v) for k, v in by_bucket.items()},
                   'rows': [r for b in BUCKETS for r in by_bucket[b]]},
                  open(a.json, 'w'), indent=1)
    if a.md:
        with open(a.md, 'w') as fh:
            fh.write('# App heading copy — measured state\n\n| bucket | apps |\n'
                     '| --- | --- |\n')
            for b in BUCKETS:
                fh.write(f'| {b} | {len(by_bucket[b])} |\n')
            fh.write('\n## LOW-OVERLAP (note — NOT a wrong-source claim)\n\n'
                     '| app | claims | affinity | best other design | alt |\n'
                     '| --- | --- | --- | --- | --- |\n')
            for r in by_bucket['LOW-OVERLAP']:
                fh.write(f"| `{r['app']}` | `{r['slug']}` | {r['affinity']} | "
                         f"`{r['alt_slug'] or '-'}` | {r['alt']} |\n")
    return 1 if flags else 0


if __name__ == '__main__':
    sys.exit(main())
