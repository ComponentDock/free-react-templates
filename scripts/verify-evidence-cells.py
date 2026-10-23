#!/usr/bin/env python3
"""verify-evidence-cells.py — EVIDENCE-CELL axis (audit, read-only).

Every measured token row in a prep ends with an evidence cell that is itself a
set of hard assertions:

    | Accent (most-used chromatic) | `#6a99cb` | 5 declarations — `header .navbar …`, … |
    Palette in order of use: `#ffffff` ×28, `#000000` ×11, …
    | Other chromatic values | `#90b3d8` (2), `#21f8f8` (1) | … |

Three numbers *and* a selector list, written by three different fixers
(`token-backfill-fetch.py`, `fix-token-extra.py`, `measure-reference-tokens.py`)
over three different sheet scopes.  No shipped axis re-reads them: the token
axes read the COLOUR, never the count or the selector it is attributed to.

| axis | reads |
| --- | --- |
| `verify-live-tokens.py` | the declared colour vs the live sheet set |
| `verify-token-extra.py` | the sheet's leading colour vs the declared colours |
| `verify-brand-claims.py` | brand-role colours vs what the shipped app paints |
| `verify-doc-token-roles.py` | the role label vs the property |
| **`verify-evidence-cells.py`** | **the row's own count + selector list vs the live sheet** |

DIRECTIONS
  COLOUR-ABSENT   the row states N declarations for a colour that occurs NOWHERE
                  in the demo's CSS (linked sheets, inline `<style>`, `style=`
                  attributes, `rgb()/rgba()` forms) — the cell is unusable
  SELECTOR-ABSENT every selector the cell names is absent from those sheets
                  (`-STALE` / `-REBUILT` variants: the sheet moved or the demo is
                  a v3 rebuild, so absence proves nothing — notes, not flags)
  COUNT-SKEW      the count does not reproduce (the scope is not stated in the
                  row: design-sheet set vs all linked sheets, hex vs declaration
                  count).  A NOTE, never a flag — the delta is printed so the
                  drift is visible
  GRADIENT-SKEW   the gradient row's count vs `gradient` declarations
  NO-SOURCE       the demo does not resolve (catalog + slug ladder + archive)

The count is scope-dependent by construction, so this axis deliberately does
NOT grade it: a wrong scope is not a wrong fact.  What IS scope-independent is
"this colour is painted somewhere in this demo" and "this selector exists".

Usage:
  python3 verify-evidence-cells.py [--root DIR] [--limit N] [--cache DIR]
                                   [--json OUT] [--md OUT]
Exit 0 = clean, 1 = flags, 2 = usage.
"""
from __future__ import annotations

import argparse
import collections
import glob
import hashlib
import importlib.util
import json
import os
import re
import sys
import io
import urllib.parse
import zipfile

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_ROOT = os.path.dirname(HERE)

# --------------------------------------------------------------------------
# The count convention lives in the skill's backfill script: re-using it keeps
# this axis honest about WHAT it is reproducing (same rule `sheet_stats` in
# `verify-brand-claims.py` applies: any declaration that paints the hex).
# --------------------------------------------------------------------------
def _load(name: str, path: str):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def load_backfill():
    cands = [
        os.path.join(HERE, "token-backfill-fetch.py"),
        os.path.expanduser("~/.hermes/skills/automation/componentdock-prep-stream/"
                           "scripts/token-backfill-fetch.py"),
    ]
    for p in cands:
        if os.path.exists(p):
            return _load("tbf", p)
    return None


TBF = load_backfill()
if TBF is not None:
    HEX = TBF.HEX
    norm = TBF.norm
else:                                              # stand-alone fallback
    HEX = re.compile(r"#([0-9a-fA-F]{3,8})\b")

    def norm(h):
        h = h.lower().lstrip("#")
        if len(h) == 3:
            return "#" + "".join(c * 2 for c in h)
        if len(h) == 4:
            return "#" + "".join(c * 2 for c in h[:3])
        if len(h) == 8:
            return "#" + h[:6]
        return "#" + h if len(h) == 6 else None

HEX_CLAIM = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")
DECL = re.compile(r"(\d+)\s+declarations?\b")
PAIR = re.compile(r"`#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})`\s*\((\d+)\)")
TIMES = re.compile(r"`#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})`\s*[×x](\d+)(?![.\d%])")
SEL_TOK = re.compile(r"`([^`]{2,300})`")
RAMP_WEIGHTS = {100, 200, 300, 400, 500, 600, 700, 800, 900}
REBUILT_RX = re.compile(r"/vendor/|/css/kit/|[?&]v=3\.")
VENDOR_RX = re.compile(r"(bootstrap|magnific|fancybox|animate|owl|slick|meanmenu|themify|"
                       r"font-?awesome|flaticon|ionicons|jquery|nice-select|datepicker|"
                       r"select2|swiper|aos|lightbox|linearicons|elegant|mediaelement)", re.I)
ZIP_RX = re.compile(r"downloads/free/([A-Za-z0-9._-]+)\.zip")
DEMO_RX = re.compile(
    r"https?://(?:preview\.colorlib\.com/theme/(?:bootstrap/|bb/)?[A-Za-z0-9._-]+/|"
    r"colorlib\.com/etc/[a-z]+/[A-Za-z0-9._/-]+)")
SLUG_RX = [re.compile(r"Source slug:\s*`?([A-Za-z0-9._-]+)"),
           re.compile(r"colorlib\.com/wp/template/([a-z0-9._-]+)/")]
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0.0.0 Safari/537.36")


# --------------------------------------------------------------------------
# fetch (cached, never caches a failure)
# --------------------------------------------------------------------------
class Fetcher:
    def __init__(self, cache: str, net: bool = True):
        self.cache = cache
        self.net = net
        os.makedirs(cache, exist_ok=True)

    def _path(self, url):
        return os.path.join(self.cache, hashlib.sha1(url.encode()).hexdigest() + ".bin")

    def get(self, url, timeout=25):
        p = self._path(url)
        if os.path.exists(p):
            return open(p, "rb").read()
        if not self.net:
            return b""
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=timeout) as r:
                body = r.read()
        except Exception:
            return b""
        open(p, "wb").write(body)
        return body


def rgb_forms(hexx):
    r, g, b = int(hexx[1:3], 16), int(hexx[3:5], 16), int(hexx[5:7], 16)
    return ["rgb(%d,%d,%d" % (r, g, b), "rgb(%d, %d, %d" % (r, g, b),
            "rgba(%d,%d,%d" % (r, g, b), "rgba(%d, %d, %d" % (r, g, b)]


# --------------------------------------------------------------------------
# CSS reading
# --------------------------------------------------------------------------
COMMENT_RX = re.compile(r"/\*.*?\*/", re.S)
RULE_RX = re.compile(r"([^{}]+)\{([^{}]*)\}")


def css_units(css: str):
    """(selector, prop, value) — FULL selectors, comments stripped.

    Deliberately NOT `token-backfill-fetch.parse_rules`: that shared parser
    caps a selector at 90 chars and a value at 120, so a long descendant chain
    (viral's `.header-area … .ticker ul li a:hover`, 103 chars) arrives cut at
    `a:` and can never match — the axis then reports a selector that is right
    there in the sheet as absent.  Comments are stripped first: a hex that only
    lives in `/* … */` paints nothing.
    """
    out = []
    for m in RULE_RX.finditer(COMMENT_RX.sub(" ", css)):
        sel = " ".join(m.group(1).split())
        if not sel or sel.startswith("@"):
            continue
        for d in m.group(2).split(";"):
            if ":" in d:
                p, _, v = d.partition(":")
                if p.strip():
                    out.append((sel, p.strip().lower(), v.strip()))
    return out


def census(css: str):
    """hex -> number of declarations that paint it (one per declaration)."""
    c = collections.Counter()
    for sel, prop, val in css_units(css):
        seen = set()
        for h in HEX.findall(val):
            v = norm(h)
            if v and v not in seen:
                seen.add(v)
                c[v] += 1
    return c


def selector_parts(css: str):
    """Every comma-separated selector atom, normalised (grouped rules split)."""
    parts = set()
    for sel, prop, val in css_units(css):
        for atom in sel.split(","):
            a = " ".join(atom.split()).strip().lower()
            if a:
                parts.add(a)
    return parts


def paints_value(css: str, hexx):
    """True when any declaration value contains the colour (hex or rgb form)."""
    forms = [hexx] + rgb_forms(hexx)
    for sel, prop, val in css_units(css):
        low = val.lower().replace(" ", "")
        if any(f.replace(" ", "") in low for f in forms):
            return True
    return False


def html_paints(html: str, hexx):
    low = html.lower()
    if hexx in low:
        return True
    return any(f in low for f in rgb_forms(hexx))


NOTE_RX = re.compile(r"\{[^{}]*\}$")


def sel_atoms(cell: str, dsel, asel) -> bool:
    """A cell may hold a whole selector LIST (`, `-separated) and a trailing
    `{prop}` note.  Any atom that exists in the sheets makes the cell honest."""
    cell = NOTE_RX.sub("", cell.strip())
    for atom in cell.split(","):
        a = " ".join(atom.split()).strip().lower().strip("`")
        if not a or not re.search(r"[a-zA-Z]", a):
            continue
        if a in dsel or a in asel:
            return True
        if a.endswith(("...", "…")):
            stem = a.rstrip(".… ").strip()
            if len(stem) >= 6 and any(x.startswith(stem) for x in asel):
                return True
    return False


# --------------------------------------------------------------------------
# spec reading
# --------------------------------------------------------------------------
def looks_like_selector(x: str) -> bool:
    """Drop prose a cell may hold instead of a selector: ` (bg + border)`,
    `4567f225…`, a stylesheet name, a URL."""
    if not x or x.startswith(("#", "(", " ", "…")):
        return False
    if ".css" in x or "://" in x or " + " in x:
        return False
    return bool(re.search(r"[a-z]", x)) and bool(re.match(r"^[a-zA-Z.*#:&\[]", x))


def spec_slug(txt):
    for rx in SLUG_RX:
        m = rx.search(txt)
        if m:
            return m.group(1)
    return None


def claims_of(txt: str):
    """Numeric evidence claims: dict(kind, hex, n, sel, line, text)."""
    out = []
    for ln, line in enumerate(txt.splitlines(), 1):
        s = line.strip()
        if not s or s.startswith(">") or s.startswith("<!--"):
            continue
        for m in DECL.finditer(s):
            hexes = HEX_CLAIM.findall(s)
            tail = s[m.end():]
            sels = [x for x in SEL_TOK.findall(tail) if looks_like_selector(x)]
            if hexes:
                out.append(dict(line=ln, kind="decl", hex=norm(hexes[0]),
                                n=int(m.group(1)), sel=sels, text=s[:220]))
            elif re.search(r"gradient", s, re.I):
                out.append(dict(line=ln, kind="gradient", hex=None,
                                n=int(m.group(1)), sel=sels, text=s[:220]))
        for m in PAIR.finditer(s):
            n = int(m.group(2))
            if n in RAMP_WEIGHTS and len(PAIR.findall(s)) > 1:
                continue          # a weight/step ramp: `#4ecdc4` (300) over `#3dbcb3` (400)
            out.append(dict(line=ln, kind="census", hex=norm(m.group(1)),
                            n=n, sel=[], text=s[:220]))
        for m in TIMES.finditer(s):
            out.append(dict(line=ln, kind="census", hex=norm(m.group(1)),
                            n=int(m.group(2)), sel=[], text=s[:220]))
    seen, uniq = set(), []
    for c in out:                     # a row's decl count repeats in its census line
        k = (c["line"], c["kind"], c["hex"], c["n"])
        if k not in seen:
            seen.add(k)
            uniq.append(c)
    return uniq


def resolve(f: Fetcher, txt: str):
    """(demo_url, html) for the spec's own reference.

    EVERY preview URL the spec names is tried, not just the first: a prep often
    opens with a family/category link (`theme/landing-page-wordpress-themes/`,
    which is not a demo) and only later names the real demo.
    """
    urls = []
    for m in DEMO_RX.finditer(txt):
        u = m.group(0)
        if not u.endswith("/") and not u.endswith(".html"):
            u += "/"
        if u not in urls:
            urls.append(u)
    slug = spec_slug(txt)
    if slug:
        urls += [f"https://preview.colorlib.com/theme/{slug}/",
                 f"https://preview.colorlib.com/theme/bootstrap/{slug}/",
                 f"https://preview.colorlib.com/theme/bb/{slug}/"]
    for u in urls:
        b = f.get(u)
        if len(b) > 1500:
            return u, b.decode("utf-8", "replace")
    return None, ""


def sheet_urls(html: str, base: str):
    out = []
    for tag in re.findall(r"<link[^>]*>", html, re.I):
        if "stylesheet" not in tag.lower():
            continue
        m = re.search(r"href=[\"']([^\"']+)[\"']", tag)
        if not m:
            continue
        out.append(urllib.parse.urljoin(base, m.group(1)))
    return out


def inline_css(html: str):
    return "\n".join(re.findall(r"<style[^>]*>(.*?)</style>", html, re.I | re.S))


CSS_ABS = re.compile(r"https?://[^\s`)'\"]+?\.css(?:\?[^\s`)'\"]*)?")
CSS_TICK = re.compile(r"`([^`\s]+?\.css)(?:\?[^`]*)?`")


def named_refs(txt: str, demo: str):
    """The stylesheet URLs the spec ITSELF names as its measurement source.

    A prep's evidence cell cites the sheet it was measured from, and that sheet
    is not always the one the demo URL serves today (`briefly` names
    `theme/lawyer/css/style.min.css` while its preview link says `theme/lawful/`).
    Reading the citation first is what makes the cell checkable against the
    thing it claims.
    """
    out = []

    def add(u):
        u = u.split("?")[0]
        if u and u not in out:
            out.append(u)

    for m in CSS_ABS.finditer(txt):
        add(m.group(0))
    for m in CSS_TICK.finditer(txt):
        p = m.group(1)
        if p.startswith("http"):
            add(p)
        elif p.startswith("theme/"):
            add("https://preview.colorlib.com/" + p)
        elif p.startswith("etc/"):
            add("https://colorlib.com/" + p)
        elif p.startswith("/"):
            host = re.match(r"https?://[^/]+", demo or "https://preview.colorlib.com")
            add((host.group(0) if host else "https://preview.colorlib.com") + p)
        elif demo:
            add(urllib.parse.urljoin(demo, p))
            if "/" not in p:                    # a bare `style.css` lives under css/
                add(urllib.parse.urljoin(demo, "css/" + p))
    return out


def fetch_sheet(f, url: str) -> str:
    """A cited sheet may be written without its `css/` directory
    (`theme/sonar/style.css`, which 404s, for `…/css/style.css`)."""
    body = f.get(url).decode("utf-8", "replace")
    if len(body) > 200:
        return body
    head, _, base = url.rpartition("/")
    if "/css/" not in url and base.endswith(".css"):
        body = f.get(head + "/css/" + base).decode("utf-8", "replace")
    return body


BYTES_RX = re.compile(r"([0-9][0-9,]{1,})\s*B\b")
SHA_RX = re.compile(r"sha256\s*`?([0-9a-f]{10,64})")
NEWLINE_RX = re.compile(r"\r\n?")


def basename_rx(base: str):
    """A basename bound to a path/quote boundary, not a bare substring.

    `styles.css` occurs INSIDE `main_styles.css`, so a prep that cites an
    icon-font plugin's `styles.css` and keeps the theme sheet's identity on the
    line above (`styles/main_styles.css — HTTP 200, 26,362 B, sha256 `0264…``)
    borrowed that identity and read as stale forever (blitz: its 8,232 B plugin
    compared against 26,362 B, one STALE-SKIN in every census since -24a).
    """
    return re.compile(r"(?<![A-Za-z0-9_.-])" + re.escape(base) + r"(?![A-Za-z0-9_.-])")


def recorded_identity(txt: str, url: str):
    """(bytes, sha-prefix) the spec records for the sheet it cites, if it does.

    Preps state the size and sha256 beside the citation, which turns "is this
    cell still describing the sheet I read?" into a byte comparison instead of
    a guess about `?v=` cache-busters (measured 2026-10-23: `astra` cites
    `style.min.css` with no query and the file is byte-identical, so a query
    mismatch alone does NOT mean the skin moved).

    Only the text AFTER the basename counts: the house Purpose line states the
    PAGE identity before naming the design sheet ("… (HTTP 200, 49,321 B,
    sha256 `eb29…`, fetched …) and its design stylesheet(s) `style.css`"), and
    reading those numbers as the sheet's made 266 preps look rebuilt.

    BINDING is per CITATION, not per basename (`citation_identity`): a prep can
    cite three sheets that all end in `styles.css` (`01-homepage`, `02-rsvp`,
    `03-regular-page`), each with its own size. Bounding on the basename alone
    read every one of them against the FIRST `styles.css` line and reported
    design drift for a correct prep (aisle), and `fonts/icomoon/style.css`
    (79,820 B) shadowed the theme sheet `css/style.css` for draftwell/elixir.
    """
    ident, _ = citation_identity(txt, url)
    return ident


def citation_tails(url: str):
    """The cited sheet's own path tails, most specific first.

    `/theme/wedding2/02-rsvp/css/styles.css` -> `theme/wedding2/02-rsvp/css/
    styles.css`, `wedding2/02-rsvp/css/styles.css`, `02-rsvp/css/styles.css`,
    `css/styles.css`. Binding the longest tail that the spec actually writes is
    what keeps each sibling page's citation paired with its own numbers.
    """
    p = urllib.parse.urlparse(url.split("?")[0]).path
    segs = [s for s in p.split("/") if s]
    if len(segs) < 2:
        return []
    return ["/".join(segs[i:]) for i in range(0, len(segs) - 1)]


def _tail_rx(tail: str):
    return re.compile(r"(?<![A-Za-z0-9_.-])" + re.escape(tail) + r"(?![A-Za-z0-9_.-])")


NEXT_CITE = re.compile(r"`?[^`\s]*\.css")


def _cell_identity(lines, i: int, end: int, span: int = 2):
    """(size, sha) written in THIS citation's clause, or (None, None).

    The clause ends at the next sheet the line names: listnest records the
    theme sheet and its icon subset on one line
    (`css/style.min.css?v=3.0.0` … sha256 `6b49…`; plus `vendor/…/fontawesome
    .subset.css` (1,672 B)), and reading past the next citation took the
    SUBSET's 1,672 B as the theme sheet's size — the "twin-size" defect this
    axis reported was half an artefact of its own window.
    """
    tail = lines[i][end:] + "\n" + "\n".join(lines[i + 1:i + 1 + span])
    tail = re.split(r"\n\s*\n", tail)[0]
    nxt = NEXT_CITE.search(tail)
    if nxt:
        tail = tail[:nxt.start()]
    mb = BYTES_RX.search(tail)
    ms = SHA_RX.search(tail)
    if not (mb or ms):
        return None, None
    return (int(mb.group(1).replace(",", "")) if mb else None,
            ms.group(1) if ms else None)


def _merge_hits(hits, status="path"):
    """((size, sha), status) — one identity from every citation of the sheet.

    The same sheet is often cited twice: once in the research line with a bare
    size (`> Sheet: `…?v=61a959d8` (10,652 B)`) and once in the identity table
    with a size AND sha256. Both name the same file, so the size is the fact
    and the sha is a refinement: agree on the size and keep the sha. Only
    DISAGREEING sizes are a conflict — two numbers for one path is a cell that
    cannot be read, and that is the one case worth a note.
    """
    sizes = {h[0] for h in hits if h[0] is not None}
    if len(sizes) > 1:
        return (None, None), "ambiguous"
    size = next(iter(sizes)) if sizes else None
    sha = next((h[1] for h in hits if h[1]), None)
    return (size, sha), status


def citation_identity(txt: str, url: str):
    """((size, sha), status) — the identity recorded beside THIS citation.

    `status` is `"path"` (bound on a path tail, the normal case), `"basename"`
    (the spec names the sheet without a directory and only one citation carries
    an identity) or `"ambiguous"` — several citations share the basename, none
    is path-qualified, and they disagree: the cell cannot be bound, so neither
    drift nor a missing record can be proved. Ambiguity is a NOTE, never
    STALE-SKIN: believing the wrong line is what made aisle, loomings, pending,
    grimoire, draftwell and elixir read as drift for ten censuses.
    """
    lines = txt.splitlines()
    for tail in citation_tails(url):
        rx = _tail_rx(tail)
        hits = []
        for i, ln in enumerate(lines):
            m = rx.search(ln)
            if not m:
                continue
            size, sha = _cell_identity(lines, i, m.end())
            if size is not None or sha is not None:
                hits.append((size, sha))
        if not hits:
            continue
        return _merge_hits(hits) if hits else ((None, None), "none")
    # No path tail in the text: fall back to a bare basename, but only when it
    # is unambiguous AND genuinely bare. A `styles.css` that three pages cite
    # cannot be bound, and `fonts/icomoon/style.css` is NOT a citation of the
    # theme's `style.css` — the directory in front of it says which sheet it is
    # (elixir and draftwell recorded the icon font's 79,820 B that way).
    base = os.path.basename(url.split("?")[0])
    rx = re.compile(r"(?<![\w./-])" + re.escape(base) + r"(?![A-Za-z0-9_.-])")
    hits = []
    for i, ln in enumerate(lines):
        m = rx.search(ln)
        if not m:
            continue
        size, sha = _cell_identity(lines, i, m.end())
        if size is not None or sha is not None:
            hits.append((size, sha))
    if not hits:
        return (None, None), "none"
    return _merge_hits(hits, "basename")


def identity_state(txt: str, url: str, body: str):
    """(state, basis) — is the cited sheet still the file the cell was measured from?

    `state` is `"ok"`, `"changed"`, `"basis"` or `None` (nothing recorded).
    `basis` names the hash basis that reproduced: `"raw"` (the bytes as served)
    or `"lf"` — the recorded sha only reproduces after universal-newline
    normalisation, i.e. the recording tool read curl's stdout in TEXT mode
    (`\r\n` -> `\n`) while it took the byte count from the wire. Byline's
    `theme/nikki/style.css` is 50,037 B both ways; its recorded
    `sha256 7ac982cfad07` is the sha of the 48,420-byte LF-normalised text, and
    the raw sha is `4ce08b1b780c`. That mix makes 23 correct preps read as
    STALE-SKIN in every census — a hash-BASIS defect, not design drift, and the
    fix is to state the raw sha (see scripts/fix-sha-basis.py).
    """
    size, sha = recorded_identity(txt, url)
    if size is None and sha is None:
        return None, None
    raw = body.encode("utf-8", "replace")
    if sha:
        if hashlib.sha256(raw).hexdigest().startswith(sha[:10]):
            return ("ok" if size is None or size == len(raw) else "changed"), "raw"
        lf = NEWLINE_RX.sub("\n", body).encode("utf-8", "replace")
        if hashlib.sha256(lf).hexdigest().startswith(sha[:10]):
            return "basis", "lf"
        return "changed", None
    if size != len(raw):
        return "changed", None
    return "ok", None


def identity_changed(txt: str, url: str, body: str):
    """True / False / None — does the cited sheet still match its recorded hash?

    `None` means the prep recorded no size or sha256 beside the citation, so the
    question cannot be asked (IDENTITY-UNRECORDED, a note). A hash that only
    reproduces on a different basis is NOT drift (`identity_state` -> "basis");
    it is reported separately so the basis can be fixed rather than the design
    re-measured. The controls' GATE cases patch THIS function to disable the
    guard, so `audit_spec` must keep calling it.
    """
    state, _ = identity_state(txt, url, body)
    if state is None:
        return None
    return state == "changed"


def sheet_key(url, demo=None):
    """The design-sheet identity of a `<link>`/citation: same file, same key.

    `/theme/x/css/style.css` and `/theme/x/style.min.css` are ONE design sheet
    in two forms (blankslate cites both), and a demo serving the same bytes at
    two paths is still one file.  Path key: drop the demo prefix, drop a
    leading `css/`, drop `.min` — but keep every other directory, so
    `fonts/icomoon/style.css` and `css/rtl/style.css` stay separate.
    """
    p = urllib.parse.urlparse(url).path
    if demo:
        d = urllib.parse.urlparse(demo).path
        if d and p.startswith(d):
            p = p[len(d):]
    p = p.lstrip("/")
    if p.startswith("css/"):
        p = p[4:]
    return re.sub(r"\.min(\.css)$", r"\1", p)


def dedupe_sheets(pairs, demo=None):
    """The document's stylesheet SET, each design sheet counted once.

    Identity is content (a demo can serve one file at two URLs) *and* the
    normalised path key above (a prep can cite the minified twin of the sheet
    the demo links).  Counting per URL doubles every colour in the census.
    """
    seen_hash, seen_key, out = set(), set(), []
    for u, b in pairs:
        h = hashlib.sha1(b.encode("utf-8", "replace")).hexdigest()
        k = sheet_key(u, demo)
        if h in seen_hash or k in seen_key:
            continue
        seen_hash.add(h)
        seen_key.add(k)
        out.append((u, b))
    return out


def archive_parts(f, txt: str):
    """The free source bundle: the reference for an archive-only slug."""
    m = ZIP_RX.search(txt)
    if not m:
        return [], None
    url = "https://preview.colorlib.com/downloads/free/%s.zip" % m.group(1)
    body = f.get(url, 40)
    if len(body) < 2000:
        return [], url
    try:
        z = zipfile.ZipFile(io.BytesIO(body))
    except Exception:
        return [], url
    parts, html = [], ""
    for n in z.namelist():
        low = n.lower()
        if low.endswith(".css"):
            data = z.read(n)
            if len(data) > 200:
                parts.append((n.rsplit("/", 1)[-1], data.decode("utf-8", "replace")))
        elif low.endswith("index.html") and not html:
            html = z.read(n).decode("utf-8", "replace")
    return parts, url


def design_set(parts):
    if TBF is not None:
        return TBF.pick_design_css(parts)
    usable = [(n, t) for n, t in parts if len(t) >= 1000]
    usable.sort(key=lambda kv: -len(kv[1]))
    return "\n".join(t for _, t in usable[:4]), [n for n, _ in usable[:4]]


def audit_spec(f, root, path):
    name = os.path.basename(os.path.dirname(path))[len("template-"):]
    txt = open(path, encoding="utf-8", errors="replace").read()
    claims = claims_of(txt)
    rec: dict = dict(name=name, slug=spec_slug(txt), claims=len(claims), flags=[], notes=[],
               demo=None, sheets=0, design_sheets=[], url=None, archive=None)
    if not claims:
        return rec

    demo, html = resolve(f, txt)
    rec["url"] = demo

    live = []                                   # sheets the demo serves TODAY
    for u in sheet_urls(html, demo or ""):
        body = f.get(u).decode("utf-8", "replace")
        if body:
            live.append((u, body))
    named = []                                  # sheets the CELL cites
    for u in named_refs(txt, demo):
        body = fetch_sheet(f, u)
        if len(body) > 200:
            named.append((u, body))
    live = dedupe_sheets(live, demo)            # one design sheet once
    named = dedupe_sheets(named, demo)
    if not named and not live:                  # archive-only slug
        aparts, zurl = archive_parts(f, txt)
        if aparts:
            rec["archive"] = zurl
            named = dedupe_sheets([(n, t) for n, t in aparts if len(t) > 200], demo)
    if not named and not live:
        rec["notes"].append(("NO-SOURCE", name, 0, "-", "-",
                             f"{len(claims)} numeric evidence claims, no readable demo "
                             f"and no readable archive"))
        rec["no_source"] = len(claims)
        return rec
    if rec["archive"]:
        rec["notes"].append(("ARCHIVE-SOURCE", name, 0, "-",
                             f"measured from {os.path.basename(rec['archive'])}",
                             str(rec["archive"])[:100]))

    live_urls = {u.split("?")[0] for u, _ in live}
    named_urls = {u for u, _ in named}
    # A REBUILT demo (the host's v3 skins: `vendor/…` bundles, `css/kit/`,
    # `?v=3.x`) no longer serves the sheet the cell cites, so the cell cannot be
    # checked against it — that is DRIFT (a note + work item), not a wrong fact.
    live_ver = {os.path.basename(u.split("?")[0]): ("?" + u.split("?", 1)[1]
                                                    if "?" in u else "")
                for u, _ in live}
    # Is the cited sheet still the file the cell was measured from?  The spec
    # records its size + sha256, so this is a byte comparison, not a guess.
    changed, unrecorded, confirmed, basis, ambiguous = [], [], False, [], []
    for u, body in named:
        b = os.path.basename(u.split("?")[0])
        if VENDOR_RX.search(b):
            continue
        st = identity_changed(txt, u, body)
        if st is None:
            # Several citations share this basename and none is path-qualified:
            # the cell cannot be bound, so a missing record cannot be claimed
            # either (CITATION-AMBIGUOUS is its own note).
            if citation_identity(txt, u)[1] == "ambiguous":
                ambiguous.append(b)
            else:
                unrecorded.append(b)
        elif st:
            changed.append(b)
        else:
            confirmed = True                     # the file the cell was measured from
            if identity_state(txt, u, body)[1] == "lf":
                basis.append(b)
    stale = bool(changed)
    # The host's v3 skins (vendor bundles, `?v=3.x`) are a REBUILT design, not
    # the sheet the cell was measured from.  Without a matching recorded
    # identity the cell cannot be re-read, so absence proves nothing: note,
    # never flag.  vegefoods (greenplate) is the type case — its `#82ae46`
    # green is declared 0× in both the legacy and the rebuilt sheet.
    rebuilt = any(REBUILT_RX.search(u) for u, _ in live) and not confirmed
    rec["sheets"] = len(live)
    rec["named"] = len(named)

    css_named = "\n".join(t for _, t in named) or "\n".join(t for _, t in live)
    css_live = "\n".join(t for _, t in live) + "\n" + inline_css(html)
    dcss, dnames = design_set(live) if live else ("", [])
    rec["design_sheets"] = dnames or [n for n, _ in named[:4]]

    ncount = census(css_named)
    lcount = census(css_live)
    nsel = selector_parts(css_named)
    lsel = selector_parts(css_live)
    grad = sum(1 for s, p, v in css_units(css_named) if "gradient" in v.lower())
    if rebuilt and not stale:
        rec["notes"].append(("REBUILT-SKIN", name, 0, "-",
                             "live skin is a v3 rebuild; the cited sheet is not "
                             "what the demo serves today",
                             ", ".join("%s%s" % (os.path.basename(u.split("?")[0]),
                                                 ("?" + u.split("?", 1)[1]) if "?" in u else "")
                                       for u, _ in live)[:90]))
    if stale:
        rec["notes"].append(("STALE-SKIN", name, 0, "-",
                             "recorded %s does not match the live file" % (
                                 ", ".join(sorted(set(changed)))[:70]),
                             "%s — live %s" % (
                                 str(rec["demo"])[:60],
                                 ", ".join("%s%s" % (b, live_ver.get(b, ""))
                                           for b in sorted(set(changed)))[:60])))
    elif basis:
        rec["notes"].append(("SHA-BASIS-LF", name, 0, "-",
                             ", ".join(sorted(set(basis)))[:70],
                             "recorded sha256 reproduces only after newline "
                             "normalisation: the bytes were read in text mode, the "
                             "size from the wire — fix the basis, not the design"))
    if ambiguous and not stale:
        rec["notes"].append(("CITATION-AMBIGUOUS", name, 0, "-",
                             ", ".join(sorted(set(ambiguous)))[:70],
                             "several citations share this basename and none is "
                             "path-qualified: the recorded identity cannot be bound "
                             "to one sheet, so neither drift nor a missing record "
                             "is provable"))
    if unrecorded and not stale:
        rec["notes"].append(("IDENTITY-UNRECORDED", name, 0, "-",
                             ", ".join(sorted(set(unrecorded)))[:70],
                             "no size/sha256 recorded beside the citation"))

    for c in claims:
        n, h = c["n"], c["hex"]
        if c["kind"] == "gradient":
            rec["notes"].append(("GRADIENT-MATCH" if grad == n else "GRADIENT-SKEW",
                                 name, c["line"], "gradient", "%d vs %d" % (n, grad),
                                 c["text"]))
            continue
        painted = (h in ncount or h in lcount or paints_value(css_named, h)
                   or paints_value(css_live, h) or html_paints(html, h))
        if not painted:
            bucket = ("COLOUR-ABSENT-STALE" if stale else
                      "COLOUR-ABSENT-REBUILT" if rebuilt else "COLOUR-ABSENT")
            (rec["flags"] if bucket == "COLOUR-ABSENT" else rec["notes"]).append(
                (bucket, name, c["line"], h, str(n), c["text"]))
            continue
        if c["sel"] and not any(sel_atoms(s, nsel | lsel, nsel | lsel)
                                for s in c["sel"][:2]):
            bucket = ("SELECTOR-ABSENT-STALE" if stale else
                      "SELECTOR-ABSENT-REBUILT" if rebuilt else "SELECTOR-ABSENT")
            (rec["flags"] if bucket == "SELECTOR-ABSENT" else rec["notes"]).append(
                (bucket, name, c["line"], h, str(n), "none of %s" % c["sel"][:2]))
            continue
        got = ncount.get(h, 0) or lcount.get(h, 0)
        if n != got:
            rec["notes"].append(("COUNT-SKEW", name, c["line"], h,
                                 "%d vs %d" % (n, got), c["text"]))
    return rec



def build(root, limit=None, cache=None, net=True):
    f = Fetcher(cache or os.path.join("/tmp", "evidence-cells"), net)
    paths = sorted(glob.glob(os.path.join(root, "openspec/specs/template-*/spec.md")))
    recs = []
    for p in paths:
        txt = open(p, encoding="utf-8", errors="replace").read()
        if not (DECL.search(txt) or TIMES.search(txt) or PAIR.search(txt)):
            continue
        recs.append(audit_spec(f, root, p))
    if limit:
        recs = [r for r in recs if r["claims"]][:limit]
    flags = [fl for r in recs for fl in r["flags"]]
    notes = [n for r in recs for n in r["notes"]]
    counts = dict(
        specs=len([r for r in recs if r["claims"]]),
        claims=sum(r["claims"] for r in recs),
        no_source=sum(r.get("no_source", 0) for r in recs),
        flags=len(flags), notes=len(notes),
    )
    return recs, flags, notes, counts


BUCKET_DOC = {
    "COUNT-SKEW": "the count does not reproduce under the axis' scope — a NOTE by "
                  "design: the row never states its scope (design-sheet set vs every "
                  "linked sheet, hex literals vs normalised hex, occurrences vs "
                  "declarations), so a different count is not a different truth",
    "STALE-SKIN": "the sheet the cell cites no longer matches the size/sha256 the prep "
                  "recorded beside it: the design moved after the measurement",
    "SHA-BASIS-LF": "the recorded sha256 reproduces only after universal-newline "
                    "normalisation (the bytes were hashed from a TEXT-mode read while the "
                    "size came from the wire): the file is unchanged and the record is on "
                    "the wrong basis — `fix-sha-basis.py`, not a re-measure",
    "REBUILT-SKIN": "the demo now serves a v3 rebuild (vendor bundles, `?v=3.x`) and the "
                    "cell records no identity for its sheet, so the claim cannot be "
                    "re-read at all — a re-measure queue, never a dismissal",
    "IDENTITY-UNRECORDED": "the cell cites a sheet with no size/sha256 beside it: drift "
                           "cannot be ruled out, so no flag is raised",
    "COLOUR-ABSENT-REBUILT": "the colour is not in the rebuilt skin, and the cell "
                             "records no identity for its sheet — unreadable, not wrong",
    "SELECTOR-ABSENT-REBUILT": "same, for a cited selector",
    "SELECTOR-ABSENT-STALE": "the cited selector is gone from a sheet that changed after "
                            "the measurement — a re-measure queue",
    "GRADIENT-SKEW": "the gradient declaration count does not reproduce",
    "ARCHIVE-SOURCE": "measured from the downloadable archive (no live demo serves the skin)",
    "CITATION-AMBIGUOUS": "several citations of this basename exist and none is path-qualified, "
                          "so the recorded identity cannot be bound to one sheet: neither drift "
                          "nor a missing record is provable — fix the prep to cite each sheet by "
                          "path",
}


def render_md(recs, flags, notes, counts) -> str:
    nb = collections.Counter(n[0] for n in notes)
    fb = collections.Counter(fl[0] for fl in flags)
    L = ["# Evidence cells — the numeric claims in prep token tables", "",
         "```sh",
         "python3 scripts/verify-evidence-cells.py --md docs/evidence-cells.md",
         "python3 scripts/reverify-citations.py --dry-run       # per-citation re-record",
         "python3 scripts/verify-evidence-cells-controls.py    # 50/50 (16 GATE)",
         "```", "",
         "Generated by `scripts/verify-evidence-cells.py` (read-only; fetches the",
         "cited stylesheets once and caches them under `/tmp/evidence-cells`).", "",
         "Every measured token row ends with an evidence cell that is itself a set of",
         "hard assertions — a declaration COUNT and the SELECTORS it attributes the",
         "colour to. Three different fixers wrote those cells over three different",
         "sheet scopes, and no shipped axis ever re-read them: the token axes read the",
         "COLOUR (`verify-live-tokens.py`, `verify-token-extra.py`), the role label",
         "(`verify-doc-token-roles.py`), the app (`verify-brand-claims.py`), the",
         "declaring block (`verify-sheet-claims.py`) — never the number beside it.", "",
         "## Census", "",
         "| measure | n |", "| --- | --- |",
         f"| preps with numeric evidence claims | {counts['specs']} |",
         f"| numeric claims re-read | {counts['claims']} |",
         f"| claims with no readable demo | {counts['no_source']} |",
         f"| **flags** | **{counts['flags']}** |",
         f"| notes | {counts['notes']} |", "",
         "## Method", "",
         "* **Colour** — a claim is painted when the hex appears in a declaration of",
         "  the cited sheet set (hex, 3-digit shorthand, `rgb()`/`rgba()` form), in the",
         "  demo page's own stylesheets and inline `<style>`, or in an inline",
         "  `style=` attribute. A hex that only lives in a CSS comment paints nothing.",
         "* **Re-record** — a sheet that was rebuilt at the SAME length (the v3 "
         "`?v=3.0.x` skins regenerate their minified bundle without changing size) is a"
         " record defect, not design drift: `scripts/reverify-citations.py` rewrites the"
         " cited file's sha256 per citation, and only when every declared colour and"
         " every cited selector still exists in the live sheet set.",
         "* **Selector** — a claim's cited selectors are comma-split, `{prop}` notes",
         "  stripped, and matched against the sheet's selector atoms at FULL length.",
         "* **Sheet set** — identity is content (a demo may serve one file at two",
         "  URLs) *and* the normalised path key (`css/style.css` and `style.min.css`",
         "  are one design sheet in two forms). Counting per URL doubled every colour",
         "  of 324 rows in 71 preps.",
         "* **Identity binding** — a recorded size/sha belongs to the CITATION it sits",
         "  beside, bound on the sheet's own path tail (`02-rsvp/css/styles.css`), not on",
         "  the basename: `aisle` cites three `styles.css` sheets, one per page, and a",
         "  basename-first binder read all three against the first line. A basename with",
         "  no directory in front of it is a bare citation only when nothing longer",
         "  precedes it — `fonts/icomoon/style.css` is NOT the theme's `style.css`.",
         "  Disagreeing sizes for one path are `CITATION-AMBIGUOUS`, never drift.",
         "* **Clause window** — the numbers must sit in the same clause as the citation:",
         "  the window stops at the next sheet the line names, so listnest's icon subset",
         "  (`… fontawesome.subset.css` (1,672 B)) is not read as its theme sheet's size.",
         "* **Hash basis** — the recorded sha256 is compared on the bytes as served. A",
         "  record that reproduces only after universal-newline normalisation was hashed",
         "  from a TEXT-mode read (`\r\n` -> `\n`) while its size came from the wire: the",
         "  file is unchanged, so it is `SHA-BASIS-LF` (fix the record, see",
         "  `scripts/fix-sha-basis.py`) and never design drift.",
         "* **Unreadable skin** — a rebuilt `?v=3.x` demo, or a sheet whose recorded",
         "  size/sha no longer matches, cannot answer *what the design paints*: those",
         "  claims are notes, not flags. The page identity on the Purpose line",
         "  (`… (HTTP 200, 49,321 B, sha256 …) and its stylesheet `style.css``) is the",
         "  PAGE's, never the sheet's — reading it as the sheet's made 266 preps look",
         "  rebuilt.", "",
         "`COUNT-SKEW` is a note on purpose: the row states no scope, and a count that",
         "reproduces under *any* reproducing scope is not a wrong fact. The delta is",
         "printed so the drift stays visible.", ""]
    if nb:
        L += ["## Notes (never flags)", "", "| bucket | n | reading |", "| --- | --- | --- |"]
        for b, n in sorted(nb.items()):
            L.append(f"| {b} | {n} | {BUCKET_DOC.get(b, '—')} |")
        L.append("")
    if flags:
        L += ["## Flags", "",
              "| bucket | prep | line | colour | count | evidence |",
              "| --- | --- | --- | --- | --- | --- |"]
        for b, name, ln, h, n, ev in flags:
            ev = str(ev).replace("|", "\\|")[:150]
            L.append(f"| {b} | `{name}` | {ln} | `{h}` | {n} | {ev} |")
        L.append("")
    else:
        L += ["## Flags", "",
              "None — every numeric evidence cell that can be re-read holds: "
              f"{counts['claims']:,} claims across {counts['specs']} preps, 0 colour "
              "absent from the sheet that declares it, 0 cited selector missing from "
              "that sheet.", ""]
    return "\n".join(L) + "\n"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=DEFAULT_ROOT)
    ap.add_argument("--limit", type=int)
    ap.add_argument("--cache")
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--json")
    ap.add_argument("--md")
    a = ap.parse_args()
    if not os.path.isdir(os.path.join(a.root, "openspec/specs")):
        print("error: not a prep root: " + a.root, file=sys.stderr)
        return 2
    recs, flags, notes, counts = build(a.root, a.limit, a.cache, not a.no_net)
    print(f"preps={counts['specs']} claims={counts['claims']} "
          f"no-source={counts['no_source']} flags={counts['flags']} notes={counts['notes']}")
    for b, n in sorted(collections.Counter(x[0] for x in flags).items()):
        print(f"  FLAG {b}: {n}")
    for b, n in sorted(collections.Counter(x[0] for x in notes).items()):
        print(f"  note {b}: {n}")
    for b, name, ln, h, n, ev in flags[:40]:
        print(f"  {b} {name}:{ln} {h} {n} {ev[:90]}")
    if a.json:
        json.dump(dict(counts=counts, flags=flags, notes=notes,
                       specs=[{k: v for k, v in r.items() if k != "claims"} for r in recs]),
                  open(a.json, "w"), indent=1)
    if a.md:
        open(a.md, "w").write(render_md(recs, flags, notes, counts))
    return 1 if flags else 0


if __name__ == "__main__":
    sys.exit(main())
