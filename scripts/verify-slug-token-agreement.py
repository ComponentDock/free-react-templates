#!/usr/bin/env python3
"""verify-slug-token-agreement.py — SLUG-TOKEN-AGREEMENT axis (read-only).

TEMPLATES.md lists 1,646 ColorLib designs but 3,237 prep specs: **829 designs
carry more than one prep** (1,523 "extra" prep dirs — a rename stream, a
re-do, or two implementer streams that picked the same design twice). Every
design axis shipped so far reads ONE prep against its reference
(`verify-live-tokens`, `verify-shape-tokens`, `verify-spacing-tokens`,
`verify-type-scale`, `verify-typeface-prescription`, `verify-unreachable-claims`)
or ONE prep against its own `## Purpose` (`verify-token-conflicts`, `-23p`).

None of them ever compared **two preps that describe the same design with each
other**. That is the layer this axis reads: when prep A says the brand is
`#2563eb` and prep B says `#2c3e6b` for the SAME ColorLib slug, at most one of
them can be right — and whichever app was built from the other one ships the
wrong skin. The prep's own token table is the claim; the slug is the identity,
so the comparison needs no network at all.

## Claims compared (per slug, across every spec that names it)

  colour roles   brand · accent · ink · body · footer
                 (the strict label vocabulary the token fixers write: `Brand
                 color`, `Accent (most-used chromatic)`, `Ink / dark surface`,
                 `Body text`, `Footer bg`, … — a VARIANT label such as
                 `Brand hover`, `Brand secondary`, `Brand gradient start`,
                 `Primary text`, `Footer links` is never the role definition)
  typeface       the BODY family (`Font family`, `Typeface`, `Body font`,
                 `Font — body`, `--font-body`, …), normalised to a family set

## Buckets (partition every (slug, role) comparison)

  AGREE              every prep that defines the role states ONE value ...... ok
  CONFLICT           two or more incommensurable values .................... FLAG
                     (`--adjudicate` then asks the live design which value it
                      actually paints — see below)
  QUALIFIED          the role is defined by 2+ qualified rows inside one prep
                     (`Accent rose` / `Accent gold`), so it is not a definition
  THIN               only one prep of the slug defines the role ............. note

## `--adjudicate` (network, per conflicted slug)

Resolves the design's live demo (`catalog_resolve`, the preview host's own
catalogue map + the collision-aware `slug-own` probe), fetches the page, every
stylesheet it links, its inline `<style>` blocks and `style="…"` attributes,
and counts the candidates there. Then:

  UNSUPPORTED        exactly ONE candidate is painted (>= 3 declarations) and
                     every other candidate is painted ZERO times ......... FLAG
                     (`fix-slug-token-agreement.py` records the measured winner)
  BOTH-PAINTED       two or more candidates occur in the assets; deciding needs
                     the rule's ROLE (`body{color}` vs `h2{color}`) ......... note
  NONE-PAINTED       no candidate occurs at all: the demo's skin is not what any
                     of these preps measured (rebuilt demo / wrong source) .. note
  DEAD-THIN          demo unreachable, or the page carries no stylesheet (the
                     thin `/theme/bootstrap/*` demos) ..................... note

## Usage

  python3 scripts/verify-slug-token-agreement.py                  # offline census
  python3 scripts/verify-slug-token-agreement.py --json /tmp/x.json
  python3 scripts/verify-slug-token-agreement.py --md             # markdown report
  python3 scripts/verify-slug-token-agreement.py --adjudicate     # + network
  python3 scripts/verify-slug-token-agreement.py --adjudicate --only book-keeping,watch
  python3 scripts/verify-slug-token-agreement.py --census         # per-slug table
  python3 scripts/verify-slug-token-agreement.py --no-strict      # guard A/B

Exit 0 always (it is a report; callers read `flags`). Read-only: no spec is
written, `apps/` is never touched, `TEMPLATES.md` is never touched.
"""
from __future__ import annotations

import argparse
import collections
import glob
import json
import os
import re
import subprocess
import sys

ROOT_DEFAULT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Identity is the ColorLib SOURCE SLUG, and a prep may name it in either form:
# `colorlib.com/wp/template/<slug>/` (3,133 specs) or, preview-only, 
# `preview.colorlib.com/theme/<slug>/` (96 specs — they were invisible to the
# first draft, which read only the wp form).
SLUG_RX = re.compile(r"colorlib\.com/wp/template/([A-Za-z0-9._-]+)/")
PREVIEW_RX = re.compile(r"preview\.colorlib\.com/theme/([A-Za-z0-9._/-]+)")
HEX_RX = re.compile(r"#([0-9a-fA-F]{3,8})\b")
# `theme/<family>/<slug>/` — the first segment is a DEMO FAMILY, not a design
PREVIEW_FAMILIES = {"bootstrap", "bft", "bb", "bac", "sidebar", "marco2"}
NON_SLUG_SEGMENTS = {"css", "js", "images", "img", "assets", "fonts", "font",
                     "vendor", "vendors", "downloads", "etc", "plugins"}


def slugs_of(text: str) -> set:
    """Every ColorLib source slug a spec names, in either URL spelling."""
    out = set(SLUG_RX.findall(text))
    for m in PREVIEW_RX.finditer(text):
        parts = [p for p in m.group(1).split("/") if p]
        if not parts:
            continue
        first = parts[0].lower()
        if first in NON_SLUG_SEGMENTS:
            continue
        if first in PREVIEW_FAMILIES and len(parts) > 1:
            out.add(parts[1])
        else:
            out.add(parts[0])
    return out


def subject_slug(text: str):
    """The design a spec is ABOUT: the first slug its `## Purpose` names.

    Grouping by every slug a spec mentions is wrong — preps name a SIBLING's
    preview on purpose ("unlike its sibling …"), and that would enrol the spec
    in another design's group and manufacture a conflict against itself. The
    Purpose section is the provenance statement (docs/replication.md), so its
    first slug is the subject; only when there is no Purpose do we fall back
    to the first slug in the file.
    """
    pur = section(text, "Purpose")
    for candidate in (pur or "", text):
        hits = []
        for rx in (SLUG_RX, PREVIEW_RX):
            for m in rx.finditer(candidate):
                hits.append((m.start(), m))
        if not hits:
            continue
        _pos, m = sorted(hits, key=lambda x: x[0])[0]
        if m.re is SLUG_RX:
            return m.group(1)
        parts = [p for p in m.group(1).split("/") if p]
        if not parts or parts[0].lower() in NON_SLUG_SEGMENTS:
            continue
        if parts[0].lower() in PREVIEW_FAMILIES and len(parts) > 1:
            return parts[1]
        return parts[0]
    return None

# --- colour roles -----------------------------------------------------------
# The label must BE the role, not a variant of it. Every label below was
# measured in the corpus (3,051 role-bearing rows over the 829 multi-prep
# slugs); the variant labels that produced the first draft's false positives
# (`Brand hover`, `Brand secondary`, `Brand gradient start`, `Primary text`,
# `Footer links`, `Footer border`, `Brand light`) are deliberately absent.
ROLE_LABELS = {
    "brand": {
        "brand", "brand primary", "brand color", "brand colour", "primary brand",
        "primary brand color", "primary color", "primary colour", "primary",
        "brand (stated in this prep)", "brand (measured)", "brand (detected)",
    },
    "accent": {
        "accent", "accent color", "accent colour", "accent (measured)",
        "accent (most-used chromatic)",
    },
    "ink": {"ink", "heading color", "heading colour", "ink / dark surface", "ink/ dark surface"},
    "body": {"body text", "body copy", "body", "paragraph text", "body text color",
             "body text colour"},
    "footer": {"footer bg", "footer background", "footer"},
}
LABEL2ROLE: dict[str, str] = {}
for _role, _labels in ROLE_LABELS.items():
    for _l in _labels:
        LABEL2ROLE[_l] = _role

# --- typeface ---------------------------------------------------------------
FONT_LABELS = {
    "font family", "typeface", "font", "fonts", "font primary", "body font",
    "font body", "font — body", "font family (body)", "body type", "font-family",
    "font-body", "body-font", "font family (body text)", "typeface (body)",
    "font family (body copy)", "primary font", "font (body)",
}
# words that are never a family name: shorthand, stacks, tool nouns and the
# reading artefacts of the fixers ("Family", "weights", "rules", "Google").
FONT_STOP = {
    "sans", "serif", "sans-serif", "system", "system-ui", "inherit", "initial",
    "cursive", "monospace", "var", "family", "families", "google", "fonts",
    "font", "stack", "body", "heading", "weights", "weight", "rules",
    "declarations", "rule", "the", "and", "or", "not", "with", "from", "inferred",
    "default", "base", "text", "primary", "secondary", "fallback", "ui",
    "apple", "blinkmacsystemfont", "segoe", "ui-sans-serif", "ui-serif",
    "emoji", "colour", "color", "typeface", "type", "size", "px", "rem", "em",
}
# icon faces are a font in the CSS sense but never the design's typeface
ICON_FAMILIES = {
    "fontawesome", "font-awesome", "icomoon", "themify", "linearicons",
    "ionicons", "elegant", "eleganticons", "glyphicons", "simple-line-icons",
    "flaticon", "material", "material icons", "bootstrap-icons", "feather",
    "lucide", "boxicons", "remixicon", "line", "lineawesome",
}
WEIGHT_SUFFIX = re.compile(r"[-_ ]?(regular|bold|medium|light|semibold|semi-bold|"
                           r"italic|black|thin|extrabold|extra-bold|book|heavy|"
                           r"hairline|oblique|variable)$")
WEIGHT_PREFIX = re.compile(r"^(?:the\s+)?(?:font|typeface|family)(?:[\s:]|[-_]\s*)+")
# a family name is a name: a quoted CSS declaration ("object-fit: cover", the
# `dwellix` malformation `-23p` found) must never enter the vocabulary
FAMILY_OK = re.compile(r"^[a-z][a-z0-9 +._-]{1,40}$")


def norm_hex(h: str) -> str:
    h = h.lstrip("#").lower()
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    if len(h) == 8:                      # #rrggbbaa -> rgb
        h = h[:6]
    return "#" + h


def section(text: str, pattern: str):
    m = re.search(r"^##\s+[^\n]*%s[^\n]*$(.*?)(?=^##\s)" % pattern, text, re.M | re.S)
    return m.group(1) if m else None


def token_section(text: str):
    return section(text, "[Tt]okens") or section(text, "Design reference")


def table_rows(tok: str):
    """[(label, value-cell-text)] for every real markdown table row."""
    out = []
    for line in (tok or "").splitlines():
        if not line.strip().startswith("|"):
            continue
        cells = [c.strip() for c in line.strip().strip("|").split("|")]
        if len(cells) < 2 or set("".join(cells)) <= set("-: "):
            continue
        out.append((cells[0], " | ".join(cells[1:])))
    return out


def clean_label(s: str) -> str:
    return re.sub(r"\s+", " ", re.sub(r"[*`]", "", s)).strip().rstrip(":").lower()


def canon_family(tok: str) -> str:
    """`Poppins-Regular` / `"Playfair Display"` -> `poppins` / `playfair display`"""
    t = re.sub(r"[\"'`]", "", tok).strip().lower()
    t = WEIGHT_PREFIX.sub("", t)
    t = re.sub(r"\s+", " ", t)
    t = WEIGHT_SUFFIX.sub("", t).strip(" -_,")
    return t


def build_family_vocab(texts) -> set:
    """The corpus' own family vocabulary.

    A capitalised word inside prose ("Poppins for headings, PT Serif for
    content") is not a family CLAIM, and the first draft read `content`,
    `headings`, `nav`, `all`, `clean` as families — which turned 62 slugs into
    typeface "conflicts". The guard: a token counts as a family only if some
    spec in the corpus writes it as a `font-family:` declaration or inside a
    `fonts.googleapis.com` URL. Self-updating (no data file to rot) and it
    drops prose for free.
    """
    vocab = set()
    for text in texts:
        for decl in re.findall(r"font-family\s*:\s*([^;}]+)", text, re.I):
            f = canon_family(decl.split(",")[0])
            if f:
                vocab.add(f)
        for q in re.findall(r"fonts\.googleapis\.com/css2?\?([^\"'&)\s]+)", text, re.I):
            for part in re.findall(r"family=([^&:|]+)", q):
                for f in part.split("|"):
                    f = canon_family(f.replace("+", " "))
                    if f:
                        vocab.add(f)
    return set(f for f in vocab if f not in FONT_STOP and f not in ICON_FAMILIES
               and len(f) > 2 and FAMILY_OK.match(f))


def families(value: str, vocab=None) -> set:
    """Family names a typeface cell claims.

    Accepted forms: quoted/backticked names, and the `X, sans-serif` stack
    head. With a `vocab`, anything the corpus never declares as a font-family
    is prose and is dropped (the guard that keeps `headings`/`content` out).
    """
    out = set()
    for m in re.finditer(r"[\"'`]([A-Za-z0-9][A-Za-z0-9 _-]{1,30})[\"'`]", value):
        out.add(canon_family(m.group(1)))
    m = re.match(r"^\s*([A-Za-z][A-Za-z0-9 +_-]{2,30}?)\s*[,(]", value)
    if m:
        out.add(canon_family(m.group(1)))
    for m in re.finditer(r"([A-Z][A-Za-z]+(?:[ -][A-Z][A-Za-z]+)?)\s*[,)]?\s*\(|"
                         r"\b([A-Z][A-Za-z]+(?:[ -][A-Z][A-Za-z]+)?)\s*[,;]", value):
        out.add(canon_family(m.group(1) or m.group(2)))
    out = set(f for f in out if f and f not in FONT_STOP and f not in ICON_FAMILIES
              and len(f) > 2 and not re.match(r"^\d", f) and FAMILY_OK.match(f))
    if vocab is not None:
        out = set(f for f in out if f in vocab)
    return out


ADJ_RX = re.compile(r"<!--\s*slug-token-agreement:\s*([^/\s]+)/([A-Za-z]+)\s*-->")


def claims(text: str, strict: bool = True, vocab=None):
    """-> (role->[(value,label)], font families or None, notes)"""
    notes = []
    tok = token_section(text)
    if tok is None:
        return {}, None, [("NO-TABLE", "no token/design-reference section")]
    roles: dict[str, list] = collections.defaultdict(list)
    fams = None
    for label, value in table_rows(tok):
        lab = clean_label(label)
        role = LABEL2ROLE.get(lab) if strict else None
        if role is None and not strict and re.match(r"^\s*(?:the\s+)?\b(?:brand|primary)", lab):
            role = "brand"
        if role is not None:
            hm = HEX_RX.search(value)
            if hm:
                roles[role].append((norm_hex(hm.group(1)), label.strip()))
        if lab in FONT_LABELS and fams is None:
            f = families(value, vocab)
            if f:
                fams = f
    if not roles and fams is None:
        notes.append(("NO-TABLE", "no colour or body-typeface row"))
    return dict(roles), fams, notes


def load_specs(root: str, ref: str | None = None):
    """-> yield (name, spec text)"""
    if ref:
        names = subprocess.run(["git", "-C", root, "ls-tree", "-r", "--name-only", ref,
                                "openspec/specs/"], capture_output=True, text=True).stdout.split()
        for path in names:
            if not path.endswith("/spec.md"):
                continue
            body = subprocess.run(["git", "-C", root, "show", "%s:%s" % (ref, path)],
                                  capture_output=True, text=True).stdout
            yield path.split("/")[-2].replace("template-", ""), body
        return
    for p in sorted(glob.glob(os.path.join(root, "openspec/specs/template-*/spec.md"))):
        yield p.split("/")[-2].replace("template-", ""), open(p, encoding="utf-8",
                                                              errors="replace").read()


def census(root: str, ref: str | None = None, strict: bool = True):
    apps = set(os.listdir(os.path.join(root, "apps"))) if os.path.isdir(os.path.join(root, "apps")) else set()
    loaded = list(load_specs(root, ref))
    vocab = build_family_vocab(t for _n, t in loaded)
    by_slug: dict[str, list] = collections.defaultdict(list)
    claim_map: dict[str, dict] = {}
    notes = collections.Counter()
    specs = 0
    for name, text in loaded:
        specs += 1
        slug = subject_slug(text)
        if not slug:
            notes["NO-SLUG"] += 1
            continue
        roles, fams, ns = claims(text, strict, vocab)
        claim_map[name] = {"roles": roles, "fonts": fams, "app": name in apps,
                           "slug": slug, "adjudicated": set(ADJ_RX.findall(text))}
        for k, _ in ns:
            notes[k] += 1
        if len(slugs_of(text)) > 1:
            notes["SIBLING-MENTION"] += 1
        by_slug[slug].append(name)

    multi = dict((k, v) for k, v in by_slug.items() if len(v) > 1)
    comparisons = []
    for slug, names in sorted(multi.items()):
        got: dict[str, list] = collections.defaultdict(list)
        for n in names:
            for role, lst in claim_map[n]["roles"].items():
                if len(lst) > 1:
                    notes["QUALIFIED"] += 1
                    continue
                got[role].append((lst[0][0], n))
        for role, lst in got.items():
            if len(lst) < 2:
                notes["THIN"] += 1
                continue
            vals = set(v for v, _ in lst)
            bucket = "AGREE" if len(vals) == 1 else "CONFLICT"
            if bucket == "CONFLICT":
                # a prep that has already been re-measured against the live
                # design carries a `slug-token-agreement` block; the conflict is
                # DOCUMENTED, not pending (`-23x`'s `re-probed` rule).
                marked = [n for v, n in lst if (slug, role) in claim_map[n]["adjudicated"]]
                if len(marked) >= len(lst) - 1:
                    bucket = "ADJUDICATED"
                    notes["ADJUDICATED"] += 1
            comparisons.append({
                "kind": "colour", "slug": slug, "role": role,
                "specs": len(names), "claims": [list(x) for x in lst],
                "bucket": bucket,
            })
        fonts = [(n, claim_map[n]["fonts"]) for n in names if claim_map[n]["fonts"]]
        if len(fonts) >= 2:
            sets = [set(f) for _n, f in fonts]
            common = set.intersection(*sets)
            bucket = "AGREE" if common else "CONFLICT"
            if bucket == "CONFLICT":
                marked = [n for n, _f in fonts
                          if (slug, "typeface") in claim_map[n]["adjudicated"]]
                if len(marked) >= len(fonts) - 1:
                    bucket = "ADJUDICATED"
                    notes["ADJUDICATED"] += 1
            comparisons.append({
                "kind": "typeface", "slug": slug, "role": "typeface", "specs": len(names),
                "claims": [[sorted(f), n] for n, f in fonts],
                "bucket": bucket,
            })

    flags = [c for c in comparisons if c["bucket"] == "CONFLICT"]
    buckets = collections.Counter(c["bucket"] for c in comparisons)
    return {
        "specs": specs, "slugs": len(by_slug), "multi_slug": len(multi),
        "extra_preps": sum(len(v) - 1 for v in multi.values()),
        "comparisons": len(comparisons), "buckets": dict(buckets),
        "agree": buckets.get("AGREE", 0), "flags": len(flags),
        "notes": dict(notes), "flagged": flags, "multi": multi,
    }


# --------------------------------------------------------------------------- #
# adjudication (network)
# --------------------------------------------------------------------------- #
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0 Safari/537.36")
MIN_HITS = 3            # a winner must be painted at least this often
MAX_SHEETS = 12         # linked stylesheets fetched per demo
# A demo that still answers 200 can be a REBUILT skin (the 3.x kit): the preps
# measured the old design, so a mismatch is drift to record, never a wrong prep
# to "correct" (`-22e` industrial, `-22k` 10 preps, `-24a` STALE-SKIN).
REBUILT_RX = re.compile(r"\?v=3\.|/kit/|bootstrap(?:\.min)?\.css\?v=5|Bootstrap 5\.3", re.I)


def rebuilt_reason(url: str, blobs) -> str:
    """-> '' when the assets look like the original skin, else the evidence."""
    for label in blobs:
        m = REBUILT_RX.search(label)
        if m:
            return "%s (%s)" % (m.group(0), label.rsplit("/", 1)[-1][:60])
    page = blobs.get("page", b"").decode("utf-8", "replace")
    m = REBUILT_RX.search(page)
    if m:
        return "page markup carries %s" % m.group(0)
    return ""


def make_fetcher(cache_dir: str, timeout: int = 40):
    os.makedirs(cache_dir, exist_ok=True)
    memo: dict[str, tuple] = {}

    def fetch(url: str):
        if url in memo:
            return memo[url]
        key = re.sub(r"[^A-Za-z0-9]+", "_", url)[:180]
        path = os.path.join(cache_dir, key)
        if os.path.exists(path):
            body = open(path, "rb").read()
            code = 200
        else:
            r = subprocess.run(["curl", "-4", "-sSL", "--max-time", str(timeout),
                                "-A", UA, "-o", path, "-w", "%{http_code}", url],
                               capture_output=True)
            code = r.stdout.decode("utf-8", "replace").strip() or "000"
            code = int(code) if code.isdigit() else 0
            body = open(path, "rb").read() if os.path.exists(path) else b""
        memo[url] = (code, body)
        return memo[url]

    return fetch


def assets_of(fetch, url: str):
    """-> (page status, {label: bytes}) over page + stylesheets + inline styles"""
    from urllib.parse import urljoin
    code, body = fetch(url)
    if code != 200 or not body:
        return code, {}
    html = body.decode("utf-8", "replace")
    blobs = {"page": body}
    hrefs = []
    for tag in re.findall(r"<link[^>]*>", html, re.I):
        if not re.search(r"stylesheet", tag, re.I):
            continue
        m = re.search(r"href=[\"']([^\"']+)[\"']", tag)
        if m:
            hrefs.append(m.group(1))
    # the theme sheet must never be dropped by the cap: vendor sheets come
    # first in most <head>s (thelawyer links 11 sheets, style.css LAST).
    hrefs.sort(key=lambda h: 0 if re.search(r"(style|theme|main|custom|app)", h, re.I) else 1)
    for h in hrefs[:MAX_SHEETS]:
        u = urljoin(url, h)
        c, b = fetch(u)
        if c == 200 and b:
            blobs[u] = b
    inline = "\n".join(re.findall(r"<style[^>]*>(.*?)</style>", html, re.S | re.I))
    if inline.strip():
        blobs["inline"] = inline.encode()
    attrs = "\n".join(re.findall(r"style=[\"']([^\"']+)[\"']", html, re.I))
    if attrs.strip():
        blobs["style-attr"] = attrs.encode()
    return code, blobs


def sheet_coverage(blobs) -> str:
    """`<fetched>/<linked>` stylesheets, so every verdict is auditable."""
    linked = len(re.findall(r"<link[^>]*stylesheet", blobs.get("page", b"").decode("utf-8", "replace"), re.I))
    fetched = len([k for k in blobs if k.startswith("http")])
    return "%d/%d" % (fetched, linked)


RGB_RX = re.compile(r"rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})", re.I)


def count_hexes(blobs) -> collections.Counter:
    """Every colour an asset PAINTS — hex literals AND `rgb()/rgba()` notation.

    The rgb() half is not optional: `-23za` measured 108 brand colours in apps
    written in rgb() notation, and `thelawyer`'s live sheet carries 33 of them.
    A verdict of "painted 0 times" must survive both notations.
    """
    c = collections.Counter()
    for b in blobs.values():
        t = b.decode("utf-8", "replace")
        for m in HEX_RX.finditer(t):
            c[norm_hex(m.group(1))] += 1
        for m in RGB_RX.finditer(t):
            try:
                r, g, bl = (int(m.group(i)) for i in (1, 2, 3))
            except ValueError:
                continue
            if max(r, g, bl) <= 255:
                c["#%02x%02x%02x" % (r, g, bl)] += 1
    return c


def count_families(blobs) -> collections.Counter:
    """every family an asset DECLARES (font-family rules + Google Fonts URLs)"""
    c = collections.Counter()
    for b in blobs.values():
        t = b.decode("utf-8", "replace")
        for decl in re.findall(r"font-family\s*:\s*([^;}]+)", t, re.I):
            for f in re.split(r",", decl):
                f = f.strip().strip("\"'`").strip().lower()
                if f and f not in FONT_STOP and len(f) > 2:
                    c[f] += 1
        for u in re.findall(r"fonts\.googleapis\.com/css2?\?([^\"'&)\s]+)", t, re.I):
            for part in re.findall(r"family=([^&:|]+)", u):
                for f in re.split(r"[|]", part.replace("+", " ")):
                    f = f.strip().strip("\"'`").lower()
                    if f and f not in FONT_STOP:
                        c[f] += 1
    return c


def verdict_for(kind, claims, counts, drift="", cov=None):
    """-> (verdict, {spec: hits}) for one conflicted (slug, role) pair.

    Pure: every guard is decided here, so the control harness can exercise each
    one without a network.
    """
    if kind == "typeface":
        hits = dict((n, sum(counts.get(x, 0) for x in fams)) for fams, n in claims)
    else:
        hits = dict((n, counts.get(v, 0)) for v, n in claims)
    painted = [n for n, h in hits.items() if h >= MIN_HITS]
    zero = [n for n, h in hits.items() if h == 0]
    if drift:
        return "DRIFT", hits
    if cov is not None:
        fetched, linked = (int(x) for x in cov.split("/"))
        if fetched < linked:
            # an unfetched stylesheet could be exactly where the loser lives;
            # a "painted 0 times" verdict needs every linked sheet on disk
            return "PARTIAL-COVERAGE", hits
    if len(painted) == 1 and len(painted) + len(zero) == len(hits) and len(hits) > 1:
        return "UNSUPPORTED", hits
    if len(painted) >= 2:
        return "BOTH-PAINTED", hits
    if not painted:
        return "NONE-PAINTED", hits
    return "THIN-WINNER", hits


def adjudicate(root: str, report: dict, only=None, cache="/tmp/slug-token-agreement",
               jobs=6):
    sys.path.insert(0, os.path.join(root, "scripts"))
    import catalog_resolve as CR            # noqa: E402  (repo helper, read-only)

    fetch = make_fetcher(cache)
    CR.configure(fetch, os.path.join(cache, "catalog"))
    cache_blobs: dict[str, tuple] = {}
    out = []
    for f in report["flagged"]:
        if only and f["slug"] not in only:
            continue
        url = None
        try:
            url, _html = CR.demo(fetch, f["slug"], None)
        except Exception:
            url = None
        if not url:
            out.append(dict(f, verdict="DEAD-THIN", url=None, counts={}))
            continue
        if url not in cache_blobs:
            cache_blobs[url] = assets_of(fetch, url)
        code, blobs = cache_blobs[url]
        if code != 200 or not blobs:
            out.append(dict(f, verdict="DEAD-THIN", url=url, counts={}))
            continue
        counts = count_hexes(blobs) if f["kind"] == "colour" else count_families(blobs)
        drift = rebuilt_reason(url, blobs)
        cov = sheet_coverage(blobs)
        verdict, hits = verdict_for(f["kind"], f["claims"], counts, drift, cov)
        out.append(dict(f, verdict=verdict, url=url, counts=hits, drift=drift,
                        sheets=cov))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("root", nargs="?", default=ROOT_DEFAULT)
    ap.add_argument("--ref", default=None, help="git rev to read specs from")
    ap.add_argument("--json", default=None, help="write the report here (path)")
    ap.add_argument("--md", action="store_true", help="print a markdown report")
    ap.add_argument("--census", action="store_true", help="per-slug conflict table")
    ap.add_argument("--adjudicate", action="store_true", help="ask the live design")
    ap.add_argument("--only", default=None, help="comma-separated slugs")
    ap.add_argument("--jobs", type=int, default=6)
    ap.add_argument("--no-strict", action="store_true", help="guard A/B: loose labels")
    a = ap.parse_args()

    root = os.path.abspath(a.root)
    rep = census(root, a.ref, strict=not a.no_strict)
    only = set(x.strip() for x in a.only.split(",")) if a.only else None
    if a.adjudicate:
        rep["adjudicated"] = adjudicate(root, rep, only)

    if a.json:
        json.dump(rep, open(a.json, "w"), indent=1)

    print("specs %d · slugs %d · multi-prep slugs %d (+%d extra preps) · comparisons %d"
          % (rep["specs"], rep["slugs"], rep["multi_slug"], rep["extra_preps"],
             rep["comparisons"]))
    print("buckets %s · CONFLICT %d · notes %s"
          % (rep["buckets"], rep["flags"], rep["notes"]))
    by_role = collections.Counter(f["role"] for f in rep["flagged"])
    print("conflicts by role:", dict(by_role))
    if a.census:
        for f in sorted(rep["flagged"], key=lambda x: (-x["specs"], x["slug"])):
            vals = sorted(set(str(c[0]) for c in f["claims"]))
            print("  CONFLICT %-28s %-9s %d preps  %s" % (f["slug"], f["role"], f["specs"],
                                                         " ".join(vals)[:90]))
    if a.adjudicate:
        verdicts = collections.Counter(x["verdict"] for x in rep["adjudicated"])
        print("adjudication:", dict(verdicts))
        for x in rep["adjudicated"]:
            if x["verdict"] == "UNSUPPORTED":
                print("  UNSUPPORTED %-26s %-9s live %s  %s"
                      % (x["slug"], x["role"], (x.get("url") or "")[:58], x["counts"]))


if __name__ == "__main__":
    main()
