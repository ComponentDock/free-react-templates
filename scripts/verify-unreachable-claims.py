#!/usr/bin/env python3
"""verify-unreachable-claims.py — the UNREACHABLE-CLAIM axis of the prep audit.

Every prep that could not read its reference says so, in its own words:

    - **Preview URL:** https://preview.colorlib.com/theme/faith-2/ (404 — unreachable;
      design derived from screenshot)
    ## Design tokens
    Extracted from the ColorLib screenshot (preview unreachable on 2026-09-10).

That verdict is a *claim about the host*, and until now nothing read it. Every
other axis either trusts it (the token axes skip specs that declare their
reference dead) or reads the sheet it names. So a spec can say "unreachable,
tokens from the screenshot" while the demo has served all along — and the
palette an implementer builds from is then a JPEG sample.

Measured 2026-10-23 (`-23w` handed the queue over): 247 specs carry an
unreachable-ish verdict, and the preview host's own catalog map
(`assets/js/catalog-products-*.js`, 1,961 entries, keyed by SOURCE slug with
`details` = `colorlib.com/wp/template/<slug>/` and `img` = the same screenshot
TEMPLATES.md shows) resolves **199** of the 219 that name a slug — the
three-prefix ladder the other axes share (`/theme/`, `/theme/bootstrap/`,
`/etc/`) resolves none of the family spellings it never tried
(`faith-2` → `/theme/faith2/`, `book-keeping` → `/theme/bookkeeping/`,
`medical-2` → `/theme/medical/`).

WHAT IT READS (no other axis reads either half)
  * the spec's own sentence that its reference could not be read
  * the demo that the host's catalog says belongs to the spec's SOURCE slug
  * when that demo serves: whether the spec's declared brand hex and font face
    occur anywhere in the live sheet

BUCKETS (every spec with a claim lands in exactly ONE)
  STALE          FLAG  demo serves, same design, and the spec never records it
  RECORDED       note  demo serves and the spec already records it with a 2xx
  DRIFT          note  demo serves but is a REBUILT 3.x demo (`?v=3.`, `/kit/`,
                       `--font-`) — a mismatch there is drift to record, never a
                       prep error to correct
  UNRELATED      note  the catalog entry does not prove it is this template
  DEAD-CONFIRMED note  no demo resolves at all — the verdict stands
  NOSLUG         note  the spec names no source slug (nothing to probe)
  CLAIM-OTHER    note  the phrase is about a UI element, not the preview
                       ("the header burger underneath is unreachable")

TOKEN FLAGS (only for a same-design, non-rebuilt demo, so the value is a
measurement of the ORIGINAL design)
  PALETTE-WRONG  every hex the spec gives for a brand/primary/accent role is
                 absent from the live sheet (>= 1,500 themed bytes required —
                 a thin `/theme/bootstrap/*` snippet page has no palette to
                 compare with)
  TYPE-WRONG     the face the spec prescribes occurs in no `font-family` rule

Usage:
  python3 scripts/verify-unreachable-claims.py            # summary + flags
  python3 scripts/verify-unreachable-claims.py --json out.json
  python3 scripts/verify-unreachable-claims.py --slug faith-2 --verbose
Exit code: 0 = no flags, 1 = flags, 2 = bad usage / not a prep tree.
"""

from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import os
import pathlib
import random
import re
import sys
import threading

_SIB = pathlib.Path(__file__).with_name("verify-spacing-tokens.py")
if not _SIB.exists():                     # the shipped copy lives in `scripts/`
    _SIB = (pathlib.Path.home() / ".hermes/skills/automation/componentdock-prep-stream"
            / "scripts/verify-spacing-tokens.py")
_spec = importlib.util.spec_from_file_location("_spacing_tokens", _SIB)
if _spec is None or _spec.loader is None:            # pragma: no cover
    sys.exit("verify-spacing-tokens.py not found beside this script nor in\n"
             "~/.hermes/skills/automation/componentdock-prep-stream/scripts/ "
             "(the shared CSS parser/fetcher it reuses)")
S = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(S)

# ---------------------------------------------------------------- regexes ---
# The verdict itself. Kept to phrasings that say "I could not read the page" —
# NOT "the menu link target is unreachable" (a UI statement, see CLAIM-OTHER).
UNREACH_RX = re.compile(
    r"(?i)(?:"
    r"unreachable|not\s+reachable|"
    r"preview\s+(?:url\s+)?(?:is\s+)?(?:down|dead|gone)|"
    r"404\s+(?:at|on|when|—|-|,)?\s*(?:time|prep|research)|"
    r"(?:was|were|is|are)\s+404|"
    r"derived\s+from\s+(?:the\s+)?screenshot|"
    r"from\s+(?:the\s+)?screenshot\s+analysis|"
    r"screenshot[- ](?:sampled|derived|only)|"
    r"screenshot\s+used\s+as\s+(?:the\s+)?sole|"
    r"sole\s+reference|"
    r"falling\s+back\s+to\s+(?:the\s+)?screenshot|"
    r"tokens\s+(?:are\s+|were\s+)?inferred\s+from"
    r")")
# the window that proves the sentence is about the REFERENCE, not an element
REF_WINDOW_RX = re.compile(r"(?i)(preview|colorlib\.com|/theme/|/etc/|\bdemo\b)")
# the fixer's own record — a re-probed claim is history, not a live claim
REPROBE_RX = re.compile(r"re-probed")
REPROBE_BLOCK_RX = re.compile(
    r"<!--\s*unreachable-reprobe:start.*?unreachable-reprobe:end\s*-->", re.S)
# a REBUILT demo: the 3.x delivery family (-22n/-23v), where a mismatch is drift
REBUILT_RX = re.compile(r"\?v=3\.|/kit/|--font-|>\s*3\.\d+\.\d+\s*<")
# a demo the spec already records with a 2xx
TWO_XX_RX = re.compile(r"\b2\d\d\b")
# token-table rows
ROW_RX = re.compile(r"^\s*\|\s*(?P<label>[^|]+?)\s*\|\s*(?P<value>[^|]+?)\s*\|", re.M)
# A BRAND role is the label ITSELF, not a label that starts with a role word:
# "Primary text" / "Primary button bg" name a TEXT or a CONTROL, and treating
# them as the brand compared `#333333` (body ink) with a sheet that writes
# `#333` — a confident wrong PALETTE-WRONG on touchback. Only an exact role
# (optionally qualified by color/colour/brand/accent/hue/cta) is compared.
# …and a HUE name qualifies it: "Brand green", "Primary blue", "Accent gold"
# are the brand (`#76b900` for medlink, whose sheet paints `#69be00` ×67). The
# first draft only accepted "Brand color", so 60+ preps went unadjudicated.
HUE_WORDS = ("green|blue|red|orange|purple|pink|teal|cyan|navy|gold|golden|yellow|brown|"
             "black|dark|maroon|crimson|indigo|violet|magenta|lime|olive|aqua|sky|azure|"
             "amber|emerald|rose|coral|turquoise|mint|plum|sand")
BRAND_LABEL_RX = re.compile(
    r"(?i)^\s*`?(?:brand|primary|accent|main|cta|highlight)s?"
    r"(?:\s*(?:colou?rs?|brand|accent|hue|background|bg|cta|" + HUE_WORDS + r"))?\s*`?\s*$")
BRAND_NEAR_MISS_RX = re.compile(r"(?i)^\s*`?(?:brand|primary|accent|main|cta|highlight)")
FONT_LABEL_RX = re.compile(r"(?i)^\s*`?font(?:\s*(?:family|face|stack|pair))?\s*`?\s*$")
HEX_RX = re.compile(r"#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b")
GENERIC_FACES = {"sans-serif", "serif", "monospace", "cursive", "fantasy", "system-ui",
                 "inherit", "initial", "unset", "var", "ui-sans-serif", "ui-serif",
                 "ui-monospace", "-apple-system", "blinkmacsystemfont"}
NOT_A_FACE_RX = re.compile(r"(?i)\b(google|adobe|typekit|screen|print|fallback|web ?font|"
                           r"variable|variable font|self.hosted|local)\b")
# weight/style suffixes: a legacy theme fonts the WEIGHT as its own family
# (`poppins-regular`, `muli-bold`, `montserrat-semibold`, `lato-regular`).
# Comparing the raw family name flags every one of them (44 confident
# TYPE-WRONG on the first full run, e.g. `poppins` vs the sheet's `poppins-regular`).
WEIGHT_SUFFIX = (r"(?:thin|hairline|extralight|ultralight|semilight|light|regular|book|"
                 r"normal|medium|semibold|demibold|bold|extrabold|ultrabold|black|heavy|"
                 r"italic|oblique|condensed|expanded)")
# hexes a framework paints, never a theme's brand (Bootstrap 4/5 + greys)
FRAMEWORK_HEXES = {
    "#007bff", "#6c757d", "#28a745", "#dc3545", "#ffc107", "#17a2b8", "#343a40",
    "#f8f9fa", "#212529", "#495057", "#dee2e6", "#ced4da", "#adb5bd", "#e9ecef",
    "#0d6efd", "#198754", "#ffc107", "#0dcaf0", "#6610f2", "#fd7e14", "#20c997",
    "#ffffff", "#000000", "#333333", "#666666", "#999999", "#cccccc", "#eeeeee",
    "#dddddd", "#e6e6e6", "#adadad", "#000", "#fff",
}
MIN_BRAND_HITS = 12              # a colour painted fewer times is a sample, not a brand
FACE_RX = re.compile(r"font-family\s*:\s*([^;}]+)")
TITLE_RX = re.compile(r"<title[^>]*>(.*?)</title>", re.S | re.I)
CATALOG_KEY_RX = re.compile(r"assets/js/catalog-products-[A-Za-z0-9._-]+\.js")
DETAILS_RX = re.compile(r"/wp/template/([A-Za-z0-9._-]+)/")

MIN_THEMED_BYTES = 1500          # a thin snippet demo has no palette to compare


def norm_hex(h: str) -> str:
    h = h.lower().lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return "#" + h


# ------------------------------------------------------------ claim side ---
def claims(txt: str):
    """[(lineno, phrase, window, exempt)] for every unreachable-ish verdict.

    `exempt` marks a verdict the fixer has already re-probed (the phrase is
    history), so the A/B run after a fix is clean without deleting the record.
    """
    stripped = REPROBE_BLOCK_RX.sub(lambda m: "\n" * m.group(0).count("\n"), txt)
    out = []
    for m in UNREACH_RX.finditer(stripped):
        lo = max(0, m.start() - 260)
        window = stripped[lo:m.end() + 180]
        start = stripped.rfind("\n", 0, m.start()) + 1
        end = stripped.find("\n", m.start())
        end = len(stripped) if end < 0 else end
        line = stripped[start:end].strip()
        lineno = stripped.count("\n", 0, m.start()) + 1
        if not REF_WINDOW_RX.search(window):
            out.append((lineno, m.group(0), line.strip(), "other"))
            continue
        tail = stripped[m.start():m.start() + 200]
        exempt = bool(REPROBE_RX.search(line) or REPROBE_RX.search(tail))
        out.append((lineno, m.group(0), line.strip(), "exempt" if exempt else ""))
    return out


def source_slug(txt: str):
    """The ColorLib SOURCE slug the spec is a recreation of (never the app name)."""
    for rx in (re.compile(r"Source slug:\s*`?([A-Za-z0-9._-]+)"),
               re.compile(r"colorlib\.com/wp/template/([a-z0-9._-]+)/"),
               re.compile(r"preview\.colorlib\.com/(?:theme|etc)/(?:bootstrap/)?"
                          r"([A-Za-z0-9._-]+)/"),
               re.compile(r"colorlib\.com/etc/[a-z]+/(?:[A-Za-z0-9._-]+/)?"
                          r"([A-Za-z0-9._-]+)/")):
        m = rx.search(txt)
        if m:
            return m.group(1).strip("/")
    return None


# ----------------------------------------------------------- sheet side ---
def face_key(name: str) -> str:
    """`poppins-regular` / `Poppins` / `Josefin Sans` -> one comparable key."""
    s = re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-")
    for _ in range(2):                       # `poppins-bold-italic`
        s = re.sub(r"-" + WEIGHT_SUFFIX + r"$", "", s)
    return s.replace("-", "")


def sheet_facts(layers):
    css = "\n".join(c for _u, c in layers)
    hexes = collections.Counter(norm_hex(m.group(0)) for m in HEX_RX.finditer(css))
    faces = set()
    for m in FACE_RX.finditer(css):
        for part in m.group(1).split(","):
            f = part.strip().strip("'\"")
            if f and f.lower() not in GENERIC_FACES and not NOT_A_FACE_RX.search(f):
                faces.add(face_key(f))
    return css, hexes, faces


def page_facts(html: str):
    m = TITLE_RX.search(html)
    return (m.group(1).strip() if m else ""), len(html)


STOP_TOKENS = {"colorlib", "theme", "template", "free", "html", "website", "web", "page",
               "home", "site", "design", "bootstrap", "demo", "preview", "index"}
HEAD_RX = re.compile(r"<h[12][^>]*>(.*?)</h[12]>", re.S | re.I)
TAGS_RX = re.compile(r"<[^>]+>")
# the words a template family is named from: used to tell "the host serves a
# placeholder for this slug" (title = another family) from "wrong slug"
FAMILY_WORDS = ("wizard", "form", "signup", "sign", "login", "search", "regform", "register",
                "registration", "checkbox", "radio", "accordion", "table", "button", "carousel",
                "slider", "menu", "modal", "footer", "header", "sidebar", "coming", "soon",
                "portfolio", "gallery", "error", "404", "shop", "blog", "news", "event")


def compact(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", s.lower())


def families(s: str):
    c = compact(s)
    return {w for w in FAMILY_WORDS if w in c}


def identity(url: str, html: str, slug: str):
    """-> "ok" | "misserved" | "unrelated" for a demo the catalog named.

    Three tests, in order of strength:
      * PATH   the demo's own path contains the slug (`/theme/bookkeeping/` for
               `book-keeping`, `/etc/regform/colorlib-regform-13/`)
      * VISIBLE the page's title/h1/h2 names a chunk of the slug ("Art Museum")
      * FAMILY the page names the same family word (`Sign Up Form` for `regform`)
    A path match plus visible text that names a DIFFERENT family is the host
    serving a placeholder at that URL (`/etc/searchf/colorlib-search-15/` now
    titles itself "Au Form Wizard") — that is not a prep error, so it is a
    note, never a flag.
    """
    title, _n = page_facts(html)
    heads = " ".join(TAGS_RX.sub(" ", h) for h in HEAD_RX.findall(html))
    visible = compact(f"{title} {heads}")
    path = compact(re.sub(r"^https?://[^/]+", "", url))
    chunks = [c for c in re.split(r"[-_.]", slug.lower())
              if len(c) >= 4 and c.isalpha() and c not in STOP_TOKENS]
    path_ok = compact(slug) in path
    visible_ok = any(c in visible for c in chunks) or \
        bool(families(slug) & set(w for w in FAMILY_WORDS if w in visible))
    if visible_ok or (path_ok and not families(slug)):
        return "ok"
    if path_ok:
        return "ok" if not families(visible) or families(slug) & families(visible) else "misserved"
    return "unrelated"


def rebuilt(html: str, layers) -> bool:
    blob = html + "\n" + "\n".join(c for _u, c in layers)
    return bool(REBUILT_RX.search(blob))


# --------------------------------------------------------------- auditor ---
def token_claims(txt: str):
    """(brand_hexes, font_faces, loose_labels) the spec's own token table sets."""
    brands, faces, loose = [], [], []
    in_tokens = False
    for line in txt.splitlines():
        if re.match(r"^#{2,4}\s+.*(design token|design reference|visual design)", line, re.I):
            in_tokens = True
            continue
        if in_tokens and re.match(r"^#{2,4}\s+\S", line):
            in_tokens = False
        m = ROW_RX.match(line)
        if not m:
            continue
        label, value = m.group("label").strip(), m.group("value").strip()
        if BRAND_LABEL_RX.match(label):
            brands += [norm_hex(h) for h in HEX_RX.findall(value)]
        elif BRAND_NEAR_MISS_RX.match(label):
            loose.append(label)                 # a ROLE-qualified label, not the brand
        elif FONT_LABEL_RX.match(label):
            faces += claimed_faces(value)
    return brands, faces, loose


def claimed_faces(value: str):
    """The FACE(S) a token row actually prescribes.

    Four false-positive classes measured on the first full run (34 flags):
      * `Bootstrap base 1rem` / `Poppins 400` — a size is not a face, and a
        weight inside the name is not a different face
      * `likely lato` / `probably Roboto` — a hedged guess the sheet CONFIRMS
      * `clean geometric sans` — a description the value cell carries around it
      * `Poppins, Google Fonts` — the delivery channel, not a family
    So: take the quoted names when the cell quotes any (that is the
    prescription), else the first comma-separated token; strip markdown,
    hedging and trailing weights; reject digits and prose adjectives.
    """
    quoted = re.findall(r"[`'\"]([A-Za-z][A-Za-z0-9 ._-]{1,30})[`'\"]", value)
    cands = quoted if quoted else [re.split(r"[,/|]|\bor\b|\band\b", value)[0]]
    out = []
    for raw in cands:
        f = re.sub(r"[`'\"*]", " ", raw)
        f = re.sub(r"(?i)\b(?:likely|probably|possibly|appears?|seems?|maybe|perhaps|"
                   r"roughly|about|similar to|either)\b", " ", f)
        f = re.sub(r"\s+\d{2,4}\b", " ", f)          # `Poppins 400`
        f = re.sub(r"\s+", " ", f).strip(" -/,")
        if not re.match(r"^[A-Za-z][A-Za-z .'-]{2,30}$", f) or re.search(r"\d", f):
            continue
        if f.lower() in GENERIC_FACES or NOT_A_FACE_RX.search(f):
            continue
        if re.search(r"(?i)\b(system|fallback|approx|serif|sans|scale|size|weight|base|"
                     r"clean|modern|geometric|elegant|minimal|bold|rounded|default|"
                     r"body|heading|display|text|ui|font)\b", f):
            continue
        out.append(f.lower())
    return out


def audit(txt: str, slug: str, url: str, html: str, layers, catalog_ok: bool | None):
    """-> (flags, notes, primary_bucket) for ONE spec against ONE live demo.

    `catalog_ok` is None when the demo came from the prefix ladder (its path IS
    the slug, so identity is implied) and a bool when a catalog entry named it.
    """
    cl = claims(txt)
    if not cl:
        return [], [], "VOID"
    if all(c[3] == "other" for c in cl):
        return [], [("CLAIM-OTHER", c[0], c[2]) for c in cl], "CLAIM-OTHER"
    if any(c[3] == "exempt" for c in cl):
        return [], [("SELF-RECORDED", c[0], c[2]) for c in cl if c[3] == "exempt"], "RECORDED"
    live = [c for c in cl if c[3] != "other"]
    if not url:
        return [], [("DEAD-CONFIRMED", c[0], c[2]) for c in live], "DEAD-CONFIRMED"
    # REBUILT demos are checked BEFORE identity: a 3.x rebuild re-brands the page
    # (solestyle now titles itself "Stride"), so the slug can never corroborate
    # the title and every one of them would land in UNRELATED.
    if rebuilt(html, layers):
        return [], [("DRIFT", live[0][0],
                     f"rebuilt demo {url} ({page_facts(html)[1]} B) — mismatch is drift, "
                     f"not prep error")], "DRIFT"
    css, hexes, faces = sheet_facts(layers)
    title, nbytes = page_facts(html)
    path = re.sub(r"^https?://[^/]+", "", url).rstrip("/") + "/"
    recorded = any(path in line and TWO_XX_RX.search(line) for line in txt.splitlines())
    flags, notes = [], []
    if recorded:
        notes.append(("RECORDED", live[0][0], f"spec already records {url} with a 2xx"))
        return flags, notes, "RECORDED"
    # identity AFTER `recorded`: a spec that already holds this URL with a 2xx is
    # self-consistent whatever the page titles itself.
    if catalog_ok is False:
        return [], [("UNRELATED", live[0][0],
                     f"{url} is not proven to be `{slug}` (catalog entry mismatch)")], "UNRELATED"
    ident = identity(url, html, slug)
    if ident != "ok":
        notes.append(("HOST-MISSERVED" if ident == "misserved" else "UNRELATED", live[0][0],
                      f"{url} serves `{title[:50]}` — not corroborated for `{slug}`; "
                      f"record, do not re-attribute"))
        return flags, notes, "UNRELATED"
    flags.append(("STALE-CLAIM", live[0][0],
                  f"says unreachable but {url} serves (HTTP 200, {nbytes} B, "
                  f"title `{title[:60]}`)"))
    bucket = "STALE"
    if len(css) < MIN_THEMED_BYTES:
        notes.append(("LIVE-THIN", live[0][0], f"only {len(css)} B of themed CSS"))
        return flags, notes, bucket
    brands, fontfaces, loose = token_claims(txt)
    if loose:
        notes.append(("BRAND-ROLE-LOOSE", live[0][0],
                      "labels " + ", ".join(loose[:3]) + " name a role, not the brand — not compared"))
    if brands:
        present = [h for h in brands if h in hexes]
        custom = [(h, n) for h, n in hexes.most_common()
                  if h not in FRAMEWORK_HEXES and n >= MIN_BRAND_HITS]
        if present:
            if len(present) < len(brands):
                notes.append(("PALETTE-PARTIAL", live[0][0],
                              f"{len(present)}/{len(brands)} brand hexes occur in the sheet"))
        elif not custom:
            notes.append(("PALETTE-THIN", live[0][0],
                          f"{', '.join(brands[:3])} absent but the sheet paints no "
                          f"colour {MIN_BRAND_HITS}+ times ({len(hexes)} distinct hexes)"))
        else:
            top = ", ".join(f"{h} x{n}" for h, n in custom[:4])
            flags.append(("PALETTE-WRONG", live[0][0],
                          f"brand {', '.join(brands[:4])} absent from the sheet || sheet paints: {top}"))
    if fontfaces:
        keys = {face_key(f) for f in fontfaces}
        if keys & faces:
            pass
        elif faces:
            flags.append(("TYPE-WRONG", live[0][0],
                          f"face {', '.join(fontfaces[:3])} in no sheet rule || sheet faces: "
                          f"{', '.join(sorted(faces)[:6])}"))
        else:
            notes.append(("TYPE-UNKNOWN", live[0][0], "sheet declares no font-family"))
    return flags, notes, bucket


# ------------------------------------------------------------------- I/O ---
def read_specs(root, ref, worktree):
    return S.read_specs(root, ref, worktree)


def read_text(root, ref, path, worktree):
    return S.read_text(root, ref, path, worktree)


def load_catalog(fetch, cache_dir):
    """source slug -> catalog entry, from the preview host's own product map.

    Bookkeeping/aliases are two shapes: `{"book-keeping": "bookkeeping"}` (an
    alias string) and `{"bookkeeping": {...entry...}}`. The entry carries the
    proof of identity we need — see `catalog_demo()`.
    """
    cp = os.path.join(cache_dir, "catalog-map.json")
    if os.path.exists(cp):
        try:
            return json.load(open(cp))
        except Exception:
            pass
    out = {}
    code, body = fetch("https://preview.colorlib.com/")
    if str(code) != "200" or not body:
        return out
    root_html = body.decode("utf-8", "replace")
    for name in sorted(set(CATALOG_KEY_RX.findall(root_html))):
        c, js = fetch("https://preview.colorlib.com/" + name)
        if str(c) != "200" or not js:
            continue
        blob = js.decode("utf-8", "replace")
        for rx in (r"Object\.assign\(\s*\$products\s*,\s*(\{.*?\})\s*\)",
                   r"colorlibPreviewAliases\s*=\s*(\{.*?\})\s*;"):
            m = re.search(rx, blob, re.S)
            if not m:
                continue
            try:
                out.update(json.loads(m.group(1)))
            except Exception:
                pass
    if out:
        try:
            json.dump(out, open(cp, "w"))
        except Exception:
            pass
    return out


def catalog_demo(cat, slug):
    """-> (demo_url, identity_ok) for a SOURCE slug, or (None, None).

    identity_ok is True only when the entry PROVES it is this template:
    its `details` page is `/wp/template/<slug>/` or its `img` is the very
    screenshot TEMPLATES.md shows for the slug. An alias is followed one hop.
    Anything else is a same-named neighbour, never a reference.
    """
    entry = cat.get(slug)
    for _ in range(2):                                  # follow one alias hop
        if isinstance(entry, str):
            entry = cat.get(entry)
        else:
            break
    if not isinstance(entry, dict):
        return None, None
    url = entry.get("url")
    if not isinstance(url, str):
        return None, None
    if url.startswith("http"):
        # a `.html` demo must NOT get a trailing slash: `<dir>/index.html/` 404s
        # (the whole `/etc/bwiz/` + `/etc/cs/` family, 2026-10-23 first run).
        tail = url.rstrip("/").rsplit("/", 1)[-1]
        demo = url if (url.endswith("/") or "." in tail) else url + "/"
    elif re.match(r"^[\w./-]+$", url):
        demo = f"https://preview.colorlib.com/theme/{url.strip('/')}/"
    else:
        return None, None
    det = entry.get("details") or ""
    img = entry.get("img") or ""
    ok = bool(re.search(r"/wp/template/" + re.escape(slug) + r"/", det)) or \
        bool(re.search(re.escape(slug) + r"[-_]?free", img)) or \
        bool(re.search(r"/" + re.escape(slug) + r"[-.][\w.-]*\.(?:jpg|png|webp)", img))
    return demo, ok


def probe(fetch, url):
    code, body = fetch(url)
    if str(code) != "200" or len(body) < 400:
        return None, ""
    html = body.decode("utf-8", "replace")
    if "stylesheet" not in html.lower() and not re.search(r"font-family\s*:", html):
        return None, ""
    return url, html


def resolve(fetch, slug, cat):
    """-> (url, html, catalog_ok). The catalog map first (identity-proven),
    then the three-prefix ladder — the family spellings only the map knows
    (`faith-2`→`faith2`) are the whole point of this axis."""
    if cat:
        demo, ok = catalog_demo(cat, slug)
        if demo:
            url, html = probe(fetch, demo)
            if url:
                return url, html, ok
    for tmpl in ("https://preview.colorlib.com/theme/{s}/",
                 "https://preview.colorlib.com/theme/bootstrap/{s}/",
                 "https://preview.colorlib.com/etc/{s}/"):
        url, html = probe(fetch, tmpl.format(s=slug))
        if url:
            return url, html, None
    return None, "", None


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default="/root/free-react-templates-p2")
    ap.add_argument("--ref", default=None)
    ap.add_argument("--worktree", action="store_true", default=True)
    ap.add_argument("--slug", default=None)
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--cache", default="/tmp/unreachable-cache")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--sample", type=int, default=0)
    ap.add_argument("--jobs", type=int, default=1,
                    help="parallel spec workers (6 is safe; 20 trips the wall)")
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--json", default=None)
    ap.add_argument("--stats", action="store_true")
    a = ap.parse_args(argv)

    root = a.prep_root
    worktree = a.worktree
    ref = a.ref
    if not os.path.isdir(os.path.join(root, "openspec", "specs")):
        print(f"not a prep tree: {root}", file=sys.stderr)
        return 2
    if ref is not None:
        worktree = False
    os.makedirs(a.cache, exist_ok=True)
    fetch = S.Fetcher(a.cache, not a.no_net)
    cat = load_catalog(fetch, a.cache)

    specs = read_specs(root, ref, worktree)
    if a.sample:
        random.seed(a.sample)
        specs = sorted(random.sample(specs, min(a.sample, len(specs))))
    if a.limit:
        specs = specs[:a.limit]

    report, by_slug, bucket = [], {}, collections.Counter()
    lock = threading.Lock()

    def work(path):
        name = path.split("/")[2].replace("template-", "")
        txt = read_text(root, ref, path, worktree)
        cl = claims(txt)
        if not cl:
            return ("void", name, None, None)
        slug = source_slug(txt)
        if not slug:
            return ("noslug", name, None, ("NOSLUG", cl[0][0], cl[0][2]))
        if a.slug and a.slug not in (slug, name):
            return ("filtered", name, None, None)
        with lock:
            cached = by_slug.get(slug)
        if cached is None:
            url, html, ok = resolve(fetch, slug, cat)
            layers = S.sheet_layers(html, url, fetch) if url else []
            with lock:
                by_slug[slug] = (url, html, layers, ok)
        else:
            url, html, layers, ok = cached
        flags, notes, primary = audit(txt, slug, url, html, layers, ok)
        return ("ok", name, slug, (url, flags, notes, primary))

    if a.jobs > 1:
        from concurrent.futures import ThreadPoolExecutor
        with ThreadPoolExecutor(max_workers=a.jobs) as ex:
            results = list(ex.map(work, specs))
    else:
        results = [work(p) for p in specs]

    claimed = 0
    for status, name, slug, payload in results:
        if status == "void":
            bucket["VOID"] += 1
            continue
        if status == "filtered":
            bucket["FILTERED"] += 1
            continue
        if status == "noslug":
            bucket["NOSLUG"] += 1
            print(f"  note  NOSLUG         {name}  (no source slug in the spec)")
            continue
        claimed += 1
        url, flags, notes, primary = payload
        bucket[primary] += 1
        for kind, lineno, ctx in notes:
            bucket["note:" + kind] += 1
            if a.verbose or kind in ("CLAIM-OTHER", "DRIFT", "UNRELATED", "LIVE-THIN"):
                print(f"  note  {kind:14s} {name} ({slug}) L{lineno}  {ctx[:130]}")
        for kind, lineno, detail in flags:
            bucket["flag:" + kind] += 1
            report.append({"template": name, "slug": slug, "kind": kind,
                           "line": lineno, "detail": detail, "preview": url})
            print(f"FLAG  {kind:14s} {name} ({slug}) L{lineno}  {detail[:170]}")

    print(f"\ncorpus: {len(specs)} specs | with an unreachable claim: {claimed} | "
          f"flags: {len(report)}")
    print(f"buckets: {dict(sorted(bucket.items()))}")
    if a.stats:
        print("bucket detail:", json.dumps(dict(sorted(bucket.items())), indent=2))
    if a.json:
        json.dump({"flags": report, "buckets": dict(bucket), "cache": a.cache},
                  open(a.json, "w"), indent=2)
        print(f"wrote {a.json}")
    return 1 if report else 0


if __name__ == "__main__":
    sys.exit(main())
