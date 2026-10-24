#!/usr/bin/env python3
"""verify-app-live-tokens.py — APP↔LIVE end-to-end palette axis (audit).

Every token axis so far reads ONE edge of the triangle:

| axis | reads |
| --- | --- |
| `verify-live-tokens.py` | spec palette vs the **live** sheet |
| `verify-app-fidelity.py` | spec palette vs the **shipped app** |
| **`verify-app-live-tokens.py`** | **shipped app palette vs the live sheet** |

The two existing edges cannot see a hole that both of them agree on: a prep
that measured only two of the design's colours (spec↔live clean) and an app
that faithfully painted exactly those two (spec↔app clean) still leaves the
design's dominant colour unpainted, and nothing flags it.  The composed read
does, because it never consults the spec's palette at all — it asks the two
artifacts directly:

  * does the app paint the colours the live design sheet actually paints?
  * does the app's own brand hue exist anywhere in the live design sheet?

This axis is OFFLINE-FIRST and READ-ONLY.  It never touches `apps/` — the prep
stream must not edit implementation code — it emits a report.  Every live fetch
goes through `verify-live-tokens.Fetcher`'s on-disk cache, so a second run with
`--no-net` reads the same bytes (byte-level reproducible).

DIRECTIONS
  LIVE-UNPAINTED  a live design-surface colour (the sheet paints it as a
                  `background` on a design selector at least MIN_BG times) has
                  no counterpart in `apps/<name>/src` — neither within TOL nor
                  in the same HUE FAMILY: the app's palette omits it
  (one flag bucket: LIVE-UNPAINTED.  A separate APP-FOREIGN bucket — "the
  app's own brand hue has no HUE-FAMILY counterpart in the live sheets" — was
  removed on 2026-10-24 after it read 0 over 1,703 apps: it was unreachable by
  construction, because a missing lead colour is reported as LIVE-UNPAINTED
  first.  The direction lives on as the REHUE / EXTRA-HUE notes.)

NOTES (never flags)
  MATCH            every live design-surface colour is painted by the app and
                   the app's brand hue is in the live sheet
  SHADE-DRIFT      the app paints the right hue at a Δ > TOL: a re-picked shade
  REHUE            the app's brand is a hue the sheet never paints AND it paints
                   no design family at all: built from another design (note)
  EXTRA-HUE        the app paints the design AND carries a hue of its own (note)
  RESKIN           the demo is a rebuilt 3.x kit (sheet drift, not app debt);
                   RESKIN-KEPT when the app's brand is still painted verbatim
  NO-THEME-SHEET   every linked sheet is a vendor/library bundle
  NO-DESIGN-COLOUR the theme sheets paint no background surface colour
  NO-APP-PALETTE   the app's src holds no chromatic hex at all
  REF-DEAD / DEMO-AMBIGUOUS / NO-SPEC / NO-SLUG / ALIAS-SKIP

Hue family = HSV hue within HUE_TOL degrees and saturation within SAT_TOL — a
design's brand and its `-700` shade are the same family; `#f66483` and
`#1a73e8` are not.  That is why a shade is a note and a foreign hue is a flag.

Exit code 0 = no flags, 1 = flags, 2 = usage/root error.  A non-zero exit over
the whole corpus is the measured state of this axis, not a CI gate: the remedy
is an app restyle (implementer stream) or a recorded spec decision.

Usage:
  python3 scripts/verify-app-live-tokens.py [--prep-root DIR] [--cache DIR]
                                            [--no-net] [--jobs N] [--slug S]
                                            [--limit N] [--show BUCKET]
                                            [--json OUT] [--md OUT]
                                            [--top N] [--stamp S] [--verbose]
"""
from __future__ import annotations

import argparse
import collections
import colorsys
import importlib.util
import json
import os
import re
import sys
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))


def _load(fname: str, alias: str):
    path = os.path.join(HERE, fname)
    spec = importlib.util.spec_from_file_location(alias, path)
    if spec is None or spec.loader is None:      # pragma: no cover
        raise RuntimeError(f"cannot load {path}")
    mod = importlib.util.module_from_spec(spec)
    sys.modules[alias] = mod
    spec.loader.exec_module(mod)
    return mod


# verify-brand-claims already loads verify-app-fidelity (claim grammar, palette
# reader) and verify-live-tokens (Fetcher, catalog resolver, sheet scanner) —
# reuse THOSE module objects so the fetcher cache and the catalog memo are one.
BC = _load("verify-brand-claims.py", "val_bc")
AF = BC.AF
VT = BC.VT

HEX_RX = AF.HEX_RX
RGB_RX = AF.RGB_RX
TOL = AF.TOL                     # max-channel distance still read as one hue
HUE_TOL = 20.0                   # degrees: a hue's own -700 shade is inside
SAT_TOL = 0.25                   # HSV saturation band (documentation only)
CORE_N = 4                       # live design-surface colours the app must paint
MIN_BG = 2                       # a design colour is painted more than once
MIN_BG_WIDE = 3                  # …and broadly enough to be a surface, not a dot
MIN_WEIGHT = 6                   # paint weight (bg 3 / fg 2 / bd 1) to be a palette colour
# Preview count that makes a hex the host's scaffold rather than a design's.
# Measured 2026-10-24 over 1,703 previews: #38a4ff (the `genric-btn` info colour)
# in 67, the next colour at 12 — a clean gap, so 20 sits inside it.  A colour
# shared by THREE demos of one family (`contact-form-*`: #ccda46) is a family
# scaffold, not a signature either, and is caught by FAMILY_MIN below.
SCAFFOLD_MIN = 20
FAMILY_MIN = 3                  # demos of ONE family that share a hex
STYLE_PROPS = ("--color-brand", "--color-accent", "--color-secondary",
               "--color-primary")
# framework defaults are the LIBRARY's colours, never a design's brand
FRAMEWORK = set(BC.FRAMEWORK) | {
    # library defaults the shared list does not name (Bootstrap 3's purple,
    # Material's indigo): an app whose brand is one of these has not chosen a
    # design hue at all (measured on `concertina`/`bellows`)
    "#563d7c", "#4285f4", "#3f51b5", "#e91e63", "#9c27b0",
}
# A library's STATE value is not a design hue.  Bootstrap 5's `--bs-primary`
# hover/focus shade `#0b5ed7` sits Δ13 from `#0d6efd` and is painted ONLY by
# `.btn-primary:hover`/`:focus`; the exact-membership test above let it through
# and manufactured three LIVE-UNPAINTED flags (`meadow`/`medair`/`terra`, all
# three apps paint their own design's lead colour correctly — measured
# 2026-10-24).  The exclusion is deliberately NARROW: a shade of a framework
# default is dropped only when every rule that paints it is a framework
# component in a state pseudo-class.  Widening it to "any shade of a framework
# default" (the obvious first draft) also dropped design brands that happen to
# sit Δ≤24 from a Bootstrap colour (Flat UI's `#e74c3c`), inflating
# NO-DESIGN-COLOUR 473 → 744 and losing the measurement on 271 apps.
FW_SHADE = True
FW_COMPONENT_RX = re.compile(
    r"(?i)(?:^|[ ,>+~])\.(?:btn|btn-[a-z]+|dropdown-item|nav-pills|nav-link|"
    r"list-group-item|badge|alert|alert-[a-z]+|progress-bar|page-link|pagination|"
    r"form-control|custom-(?:control|select|range|checkbox|radio|file)|close|card|"
    r"modal|carousel-[a-z]+|toast|input-group|table|bg-[a-z]+|text-[a-z]+|"
    r"border-[a-z]+)(?:[.:\[][^ ]*)?")
STATE_RX = re.compile(r":(?:hover|focus|active|visited|focus-within|focus-visible)")
# libraries the demo ships beside the theme sheet: `css/gijgo.css` is a datepicker
# bundle (measured on `edumark`/`thebarber`: its `#2e6da4` slider handle and
# `#4a3600` picker header were read as the design's palette until this test was
# scoped to the demo-relative FILE NAME, not just `plugins/` paths)
EXTRA_VENDOR_RX = re.compile(
    r"(?i)(gijgo|gj-picker|flatpickr|pickadate|datepicker|timepicker|"
    r"datetimepicker|daterangepicker|sweetalert|toastr|dropzone|quill|"
    r"summernote|ckeditor|chartist|amcharts|highcharts|plotly|jvectormap|"
    r"gmaps|mapbox|leaflet|photoswipe|lightgallery|fresco|"
    r"perfect-scrollbar|nicescroll|jquery-ui|semantic|bulma|uikit|"
    r"bootstrap-?[34]|bs4|bs5)")
# a selector that paints a LIBRARY WIDGET (a picker handle, a carousel dot):
# the colour belongs to the widget's own theme, not to the page's design
WIDGET_RX = re.compile(
    r"(?i)(gj-|\[role=[\"']?(handle|header|dialog|spinbutton)|datepicker|"
    r"timepicker|select2|nice-select|chosen-container|slick-|owl-|swiper-|"
    r"magnific|mfp-|fancybox|colorbox|lightbox|nouislider|range-slider|"
    r"flatpickr|jquery-ui|\.ui-|carousel-indicators)")
# a modern compiled bundle (`Base.DSJ9xNgp.css`, `assets/index-a1b2c3.css`) or a
# Tailwind-compiled sheet (`--tw-`, `.dark\:`) is not the theme's original CSS:
# the demo was REBUILT (the `-24q` REF-RESKIN shape — `classic` ships as "Classic
# Studio" today, and `alex-rivera` ships as a portfolio with a hashed bundle
# while its prep measured the old theme).  A mismatch there is drift, not debt.
MODERN_BUILD_RX = re.compile(
    r"([A-Za-z0-9_-]{3,}\.[A-Za-z0-9_-]{8}\.css\b|/assets/[^/]+-[A-Za-z0-9_]{6,}\.css)")
TAILWIND_CSS_RX = re.compile(r"(--tw-|\.dark\\\\:|:is\(\.dark \*\))")
# a share button keeps its NETWORK's colour (`.blog__details__share a.instagram`
# is `#af00e1`, not the design's purple) — measured on `batterly`
NETWORK_SEL_RX = re.compile(
    r"(?i)\b(instagram|twitter|facebook|linkedin|youtube|whatsapp|pinterest|"
    r"tiktok|snapchat|reddit|github|dribbble|behance|telegram|vk)\b")
# a share-row paints its icons by POSITION (`.share-icon li:nth-child(4) a`), so
# the network's colour arrives without its name (measured on `bizpro`:
# `#007ab9` LinkedIn-blue + `#677fb5` Facebook-blue as the leading "design" hue)
POSITIONAL_RX = re.compile(r"nth-child|nth-of-type")
SHARE_ROW_RX = re.compile(r"(?i)(share|social|socicon|icon-list|follow|footer|icon)")
SOCIAL_EXTRA = {"#007ab9", "#677fb5", "#4267b2", "#55acee", "#007bb5", "#c4302b"}
# a TEXT-SELECTION colour is a state, not a surface (measured on `multiselect-03`:
# its only `#cce2ff` is `::selection`)
SELECTION_RX = re.compile(r"(?i)::(-moz-|-webkit-)?selection")
# a colour-variant KIT paints one hue per button flavour; then no single colour is
# "the design's brand" and the app painting any of them is faithful
CONTROL_SEL_RX = re.compile(
    r"(?i)(\bcl?-?btn|\bbtn[-_.]|\bbutton\b|\bradio|\bcheckbox|\binput|"
    r"\blabel\b|\bselect\b|\bswitch\b|\btoggle\b)")
PAGE_SEL_RX = re.compile(
    r"(?i)(section|hero|banner|nav|header|footer|\bbody\b|wrapper|container|"
    r"card|block|\brow\b|\barea\b)")
KIT_MIN = 4

# A prep's own design CATEGORY decides whether a palette comparison means
# anything: `# Template: Concertina (Accordion UI Component)` is a widget demo —
# its sheet paints ONE accent, and an app built from it is a page, so "the app
# omits the demo's accent" is not a defect (`-24q`'s ROUNDUP lesson: a subject
# that has no page design cannot be a fidelity measure).  Adjudicated on the
# spec's own words, never on the slug.
CATEGORY_KIT_RX = re.compile(
    r"(?i)\b(component|widget|ui[- /]kit|accordion|modal|carousel|sidebar|"
    r"showcase|buttons?|button|contact form|login|sign[- ]?up|search|"
    r"wizard|table|calendar|multiselect|footer|menu|loader|progress|alert|"
    r"tooltip|\btabs?\b|dropdown|off[- ]canvas)\b")

BUCKETS = ("MATCH", "SHADE-DRIFT", "LIVE-UNPAINTED",
           "LIVE-ACCENT-MISSING", "RESKIN", "RESKIN-KEPT",
           "KIT-DEMO", "NO-THEME-SHEET", "NO-DESIGN-COLOUR", "NO-APP-PALETTE",
           "REF-DEAD", "DEMO-AMBIGUOUS", "NO-SPEC", "NO-SLUG", "ALIAS-SKIP")
FLAG_BUCKETS = ("LIVE-UNPAINTED",)


# ------------------------------------------------------------------ colour math
def hsv(h: str):
    r, g, b = (c / 255.0 for c in AF.rgb(h))
    return colorsys.rgb_to_hsv(r, g, b)


def hue_gap(a: str, b: str) -> float:
    """Circular distance between two HSV hues, in degrees (0..180)."""
    ha, _sa, _va = hsv(a)
    hb, _sb, _vb = hsv(b)
    d = abs(ha - hb) * 360.0
    return 360.0 - d if d > 180.0 else d


def same_family(a: str, b: str) -> bool:
    """Same hue family: within HUE_TOL degrees on the HSV colour wheel.

    A design's brand and its darker `-700` member sit in one family; a coral
    `#f66483` and a corporate blue `#1a73e8` do not.  Hue ONLY: `#1464cc` and
    `#4582bf` are the same blue at two saturations (measured on `arcane`, where
    a saturation band called the app's blue a foreign hue).  This is the guard
    that keeps "the app picked a shade" (a note) apart from "the app picked
    another colour" (a flag).
    """
    if not (AF.is_chromatic(a) and AF.is_chromatic(b)):
        return False
    return hue_gap(a, b) <= HUE_TOL


def nearest(h: str, pool):
    """Closest colour in `pool` (max-channel), ties on the hex string.

    Sorted iteration: a set walk makes the answer depend on PYTHONHASHSEED and
    the report stops being reproducible (measured on `verify-app-fidelity`).
    """
    best, bd = None, 999
    for c in sorted(pool):
        d = AF.dist(h, c)
        if d < bd:
            best, bd = c, d
    return best, bd


def family_hit(h: str, pool, exclude_tol: bool = False):
    """A colour of the same hue family in `pool`, or None.  Prefers the closest."""
    cands = [c for c in sorted(pool) if same_family(h, c)]
    if not cands:
        return None
    return min(cands, key=lambda c: (AF.dist(h, c), c))


def framework_shade(h: str) -> bool:
    """Is `h` a library default, or (with `FW_SHADE`) its state-ramp shade?"""
    if h in FRAMEWORK:
        return True
    return FW_SHADE and nearest(h, FRAMEWORK)[1] <= TOL


def state_ramp(sels) -> bool:
    """Every rule painting this colour is a LIBRARY component in a state.

    `.btn-primary:hover{background:#0b5ed7}` is Bootstrap's own ramp; a design
    that uses a `.btn-primary:hover` override of its own paints a colour the
    app must match, and that colour is not a framework default's shade, so it
    fails the first half of the test.
    """
    sels = [s for s in sels or [] if s.strip()]
    if not sels:
        return False
    return all(FW_COMPONENT_RX.search(s) and STATE_RX.search(s) for s in sels)


# ------------------------------------------------------------------ app side
def app_scan(root: str, name: str):
    """(hex counter, declared token map) for `apps/<name>/src`.

    Occurrence counts matter here (not just the set `verify-app-fidelity` uses):
    the app's *brand* is the colour it actually paints most, and a token map
    lets an `@theme` palette (aurora's `--color-blush-500`) name its base hue
    rather than falling back to whatever hex happens to repeat.
    """
    hexes: collections.Counter = collections.Counter()
    tokens: dict[str, str] = {}
    for fp in AF.app_files(root, name):
        try:
            txt = open(fp, encoding="utf-8", errors="replace").read()
        except OSError:                              # pragma: no cover
            continue
        hexes.update(AF.norm("#" + h) for h in HEX_RX.findall(txt))
        for r, g, b in RGB_RX.findall(txt):
            if all(int(c) <= 255 for c in (r, g, b)):
                hexes["#%02x%02x%02x" % (int(r), int(g), int(b))] += 1
        for m in re.finditer(r"(--[A-Za-z0-9_-]+)\s*:\s*([^;{}]+);", txt):
            prop = m.group(1)
            if prop in tokens:
                continue
            for h in HEX_RX.findall(m.group(2)):
                tokens[prop] = AF.norm("#" + h)
                break
    return hexes, tokens


def app_brand(hexes: collections.Counter, tokens: dict):
    """(hex, why) — the app's own brand colour and the rule that found it.

    Order: a semantic anchor the app declares (`--color-brand`/`-accent`/
    `-secondary`), else the most-PAINTED member of the app's declared colour
    palette, else the most-painted chromatic hex in the app at all.  Neutrals
    and near-black/near-white are skipped: they are chrome, not a brand hue.
    """
    for prop in STYLE_PROPS:
        h = tokens.get(prop)
        if h and AF.is_chromatic(h) and AF.chroma(h) >= AF.BRAND_CHROMA:
            return h, prop
    pal = [(c, h) for h, c in hexes.items()
           if h in tokens.values() and AF.is_chromatic(h)
           and AF.chroma(h) >= AF.BRAND_CHROMA]
    if pal:
        pal.sort(key=lambda t: (-t[0], t[1]))
        prop = next((p for p, v in sorted(tokens.items()) if v == pal[0][1]), "token")
        return pal[0][1], prop
    plain = [(c, h) for h, c in hexes.items()
             if AF.is_chromatic(h) and AF.chroma(h) >= AF.BRAND_CHROMA]
    if plain:
        plain.sort(key=lambda t: (-t[0], t[1]))
        return plain[0][1], "most-painted"
    return None, ""


# ------------------------------------------------------------------ live side
def live_sheets(f, url: str, html: str):
    """[(sheet url, css text)] for the demo's THEME-owned sheets only.

    Vendor/library bundles carry the library's palette (Bootstrap's `#007bff`,
    a datepicker's swatch set); the vendor test is scoped BELOW the demo
    directory (`BC.demo_relative`), because `/theme/bootstrap/<slug>/` is a demo
    FAMILY prefix, not a library path (`-23zd`: 93/93 phantom).  A second test
    reads the demo-relative FILE NAME for libraries the host ships beside the
    theme sheet (`css/gijgo.css`), which `BC.is_vendor`'s list does not name.
    """
    out = []
    for su in VT.sheet_urls(html, url)[:20]:
        if BC.is_vendor(su, url):
            continue
        if EXTRA_VENDOR_RX.search(BC.demo_relative(su, url)):
            continue
        code, body = f.get(su)
        if str(code) != "200" or not body:
            continue
        out.append((su, body.decode("utf-8", "replace")))
    return out


CLASS_RX = re.compile(r"\.(-?[_a-zA-Z][_a-zA-Z0-9-]{2,})")
VAR_RX = re.compile(r"var\(\s*(--[A-Za-z0-9_-]+)")
# how much each declaration kind says about a design's palette.  A background
# is paint; a text colour is an accent; a border is a hint.
KIND_WEIGHT = {"bg": 3, "fg": 2, "bd": 1}
SELECTORS_MAX = 6               # selectors remembered per colour for the markup test


def sheet_weights(css: str) -> dict:
    """hex -> paint weight, resolved through the sheet's own CSS variables.

    The 2026-10-24 first draft read declarations only, so a theme that defines
    `--accent: #f00` in `:root` and paints `background: var(--accent)` twice
    scored ZERO backgrounds — 103 of the first 200 apps came back
    `NO-DESIGN-COLOUR`, i.e. the axis was blind to preprocessor/CSS-variable
    themes (`uza`, `world`, `hvac`).  Split the two roles: a `--x: #hex` line is
    a DEFINITION (weight 0, remembered); a `background/color/border: var(--x)`
    line is a USAGE of that hex (weight 3/2/1).
    """
    css = BC.strip_comments(css)
    blocks = [(m.group(1), m.group(2)) for m in BC.BLOCK_RX.finditer(css)]
    varmap: dict[str, str] = {}
    for _sel, body in blocks:
        for d in body.split(";"):
            if ":" not in d:
                continue
            prop, val = d.split(":", 1)
            prop = prop.strip().lower()
            if not prop.startswith("--") or prop in varmap:
                continue
            hs = HEX_RX.findall(val)
            if hs:
                varmap[prop] = AF.norm("#" + hs[0])
    out: dict = {}
    for sel, body in blocks:
        sel_s = " ".join(sel.split())[-100:]
        inter = bool(BC.INTER_RX.search(sel_s))
        hint = bool(BC.HINT_RX.search(sel_s) and not BC.STATE_RX.search(sel_s))
        for d in body.split(";"):
            if ":" not in d:
                continue
            prop, val = d.split(":", 1)
            prop = prop.strip().lower()
            if prop.startswith("--"):
                continue
            hexes = [AF.norm("#" + h) for h in HEX_RX.findall(val)]
            hexes += [varmap[v] for v in VAR_RX.findall(val) if v in varmap]
            if not hexes:
                continue
            kind = ("bg" if prop.startswith("background")
                    else "fg" if (prop.startswith("color") or "text-fill" in prop)
                    else "bd" if ("border" in prop
                                  or prop.startswith(("outline", "box-shadow")))
                    else None)
            for h in dict.fromkeys(hexes):
                st = out.setdefault(h, dict(w=0, n=0, bg=0, fg=0, bd=0, inter=0,
                                            hint=0, wid=0, sels={}))
                st["n"] += 1
                w = KIND_WEIGHT.get(kind, 0) if kind else 0
                st["w"] += w
                if kind:
                    st[kind] += 1
                if inter:
                    st["inter"] += 1
                if hint:
                    st["hint"] += 1
                if WIDGET_RX.search(sel_s):
                    # a declaration is the WIDGET's only when its own selector
                    # is the widget's; the brand colour appearing once inside a
                    # `.nice-select` rule is still the brand (`belara`: #d6a04c)
                    st["wid"] += 1
                st["sels"][sel_s] = max(st["sels"].get(sel_s, 0), w)
    return out


def selector_in_markup(sel: str, html: str) -> bool:
    """Is the design selector this colour was read from actually ON the page?

    A theme sheet ships whole KIT blocks the demo never instantiates —
    `edumark`'s `.genric-btn.primary` (`#ff5e13`) and `.progress-table`
    (`#6382e6`, `#73fbaf`) appear nowhere in the page's markup — so a colour
    read from an unrendered block is the sheet's spare part, not the design's
    paint (same rule `verify-sheet-claims.py` proved for brand rows; the app is
    right to omit it).  No class token (`[role="handle"]`, `body`) is not
    evidence either way, so it stays.
    """
    classes = CLASS_RX.findall(sel or "")
    if not classes:
        return True
    for cls in classes:
        if re.search(r'class=["\'][^"\']*(?<![\w-])' + re.escape(cls) + r'(?![\w-])',
                     html):
            return True
    return False


def any_in_markup(sels, html: str) -> bool:
    """Is at least ONE of the colour's design selectors on the page?

    Selectors are tried strongest first (a `background` selector before a
    `border` one).  Any, not all: the sheet paints its brand in a dozen blocks,
    and a single unrendered one (`.alert-box--error`) must not hide a colour the
    page does use.
    """
    if not sels:
        return True
    order = sorted(sels, key=lambda s: (-sels[s], s))[:SELECTORS_MAX]
    return any(selector_in_markup(s, html) for s in order)


def live_palette(f, slug: str, name: str):
    """Resolve a slug's live demo and read its THEME sheets.

    Returns a dict: bucket (when the reference is unreadable), url, via, sheets,
    stats (hex -> paint weight), rebuilt.
    """
    url, html, _tried, via = VT.resolve_preview(f, slug, name)
    out = {"url": url, "via": via, "sheets": [], "stats": {}, "rebuilt": False,
           "html": html, "widgets": set()}
    if not url:
        out["bucket"] = "REF-DEAD"
        return out
    if via == "name":
        # demo matched on the INVENTED app name: not proof this slug resolves
        # there, so no palette claim can be compared (`catalog_resolve.demo_via`)
        out["bucket"] = "DEMO-AMBIGUOUS"
        return out
    sheets = live_sheets(f, url, html)
    if not sheets:
        out["bucket"] = "NO-THEME-SHEET"
        return out
    out["sheets"] = [(u, len(c)) for u, c in sheets]
    out["rebuilt"] = bool(
        VT.REBUILT_RX.search(" ".join(u for u, _c in sheets))
        or VT.REBUILT_RX.search(html[:4000])
        or MODERN_BUILD_RX.search(" ".join(u for u, _c in sheets)))
    stats: dict = {}
    tailwind = False
    for _u, css in sheets:
        css = BC.strip_comments(css)
        tailwind = tailwind or bool(TAILWIND_CSS_RX.search(css))
        for h, st in sheet_weights(css).items():
            cur = stats.setdefault(h, dict(w=0, n=0, bg=0, fg=0, bd=0, inter=0,
                                           hint=0, wid=0, sels={}))
            for k in ("w", "n", "bg", "fg", "bd", "inter", "hint", "wid"):
                cur[k] += st[k]
            for s, w in st["sels"].items():
                cur["sels"][s] = max(cur["sels"].get(s, 0), w)
    out["stats"] = stats
    out["rebuilt"] = out["rebuilt"] or tailwind
    return out


def live_core(live: dict, scaffold=(), limit: int = CORE_N):
    """(ranked candidates, is_strong) — the live design's palette, most-painted first.

    A design colour: chromatic, chroma ≥ AF.BRAND_CHROMA, painted enough to be
    the design's (`w` ≥ MIN_WEIGHT — backgrounds weigh 3, so two backgrounds
    already qualify), not a framework default, not a social network's brand, not
    a library widget's chrome, not a SHARED SCAFFOLD colour (`scaffold`), and not
    painted ONLY by a kit block the page never instantiates (`any_in_markup`).

    `strong` marks a colour painted at SECTION scale — three or more backgrounds,
    or at least two design selectors (`btn`/`nav`/`hero`/`banner`/…) that are not
    hover states.  A single `li a:before` dot is a decoration, and on a component
    demo it is the only paint there is: the flag subject must be strong.
    """
    stats, html = live["stats"], live.get("html", "")
    cands = []
    for h, st in stats.items():
        if not AF.is_chromatic(h) or AF.chroma(h) < AF.BRAND_CHROMA:
            continue
        if h in FRAMEWORK or h in AF.SOCIAL_BRAND or h in SOCIAL_EXTRA:
            continue
        sels = st["sels"]
        if FW_SHADE and state_ramp(sels) and framework_shade(h):
            continue                # the library's own state ramp (`#0b5ed7`)
        if sels and all(SELECTION_RX.search(s) for s in sels):
            continue                # a text-selection colour, not a surface
        if (sels and all(POSITIONAL_RX.search(s) for s in sels)
                and any(SHARE_ROW_RX.search(s) for s in sels)):
            continue                # a share row's icon colour, painted by position
        if st["wid"] and st["wid"] >= st["n"]:
            continue                # painted ONLY by a library widget's chrome
        if h in scaffold:
            continue
        if st["w"] < MIN_WEIGHT:
            continue
        if st["sels"] and all(NETWORK_SEL_RX.search(s) for s in st["sels"]):
            continue
        if not any_in_markup(st["sels"], html):
            continue
        strong = st["bg"] >= MIN_BG_WIDE or st["hint"] >= 2
        cands.append((-st["w"], -st["bg"], h, strong))
    cands.sort()
    return [(h, strong) for _w, _b, h, strong in cands[:limit]]


# ------------------------------------------------------------------ the read
def families(hexes):
    """Group ranked colours into hue families (strongest member first).

    A design paints its brand three times as `#f66483`, `#e02e56` and
    `#bd1f45`; those are ONE fidelity target, not three.  Grouping before the
    comparison is what keeps a re-picked shade from reading as a missing
    colour (`-23za`'s lesson in the other direction).
    """
    out: list[list[str]] = []
    for h in hexes:
        for fam in out:
            if same_family(h, fam[0]):
                fam.append(h)
                break
        else:
            out.append([h])
    return out


def covered(fam, app_chrom) -> bool:
    """Does the app paint this hue family — exactly (Δ ≤ TOL) or as a shade?"""
    for h in fam:
        if nearest(h, app_chrom)[1] <= TOL:
            return True
        if family_hit(h, app_chrom):
            return True
    return False


def kit_variants(live: dict, scaffold=()) -> set:
    """Chromatic colours the sheet paints ONLY through button selectors.

    A `bootstrap-buttons-*` demo is a colour-variant kit: one hue per button
    flavour, none of them "the design's brand" — the app paints one and is
    faithful (measured on `btnkit`, `btnridge`, `btnvortex`).  The set is only
    consulted when the LEADING colour is a member, so a real page that also has
    four button flavours (`abode`) keeps its brand.
    """
    out = set()
    for h, st in live["stats"].items():
        if not AF.is_chromatic(h) or AF.chroma(h) < AF.BRAND_CHROMA:
            continue
        if h in FRAMEWORK or h in AF.SOCIAL_BRAND or h in SOCIAL_EXTRA or h in scaffold:
            continue
        if st["w"] < MIN_WEIGHT or not st["sels"]:
            continue
        classy = [s for s in st["sels"] if "." in s or "[" in s]
        if (classy and all(CONTROL_SEL_RX.search(s) for s in classy)
                and not any(PAGE_SEL_RX.search(s) for s in classy)):
            out.add(h)
    return out


def audit_app(root: str, name: str, f, args, scaffold=frozenset()):
    """Audit ONE app.  Returns (bucket, row, notes)."""
    notes = []
    spec_path = os.path.join(root, "openspec", "specs", "template-" + name, "spec.md")
    if not os.path.isfile(spec_path):
        return "NO-SPEC", None, notes
    txt = open(spec_path, encoding="utf-8", errors="replace").read()
    if re.search(r"prep-status:\s*shipped-as=", txt):
        return "ALIAS-SKIP", None, notes
    slug = AF.spec_slug(txt)
    if not slug:
        return "NO-SLUG", None, notes
    m = re.search(r"^#\s*Template:\s*[^()\n]+\(([^)]*)\)", txt, re.M)
    category = m.group(1).strip() if m else ""
    hexes, tokens = app_scan(root, name)
    brand, why = app_brand(hexes, tokens)
    row = {"app": name, "slug": slug, "category": category,
           "brand": brand, "brand_why": why,
           "url": "", "live_core": [], "unpainted": [], "delta": None,
           "nearest": None, "family": None}

    live = live_palette(f, slug, name)
    row["url"] = live["url"] or ""
    if live.get("bucket"):
        return live["bucket"], row, notes

    stats = live["stats"]
    chrom_live = sorted(h for h in stats if AF.is_chromatic(h))
    cands = live_core(live, scaffold)
    row["live_core"] = [h for h, _s in cands]

    if not chrom_live or not cands:
        return "NO-DESIGN-COLOUR", row, notes

    app_chrom = {h for h in hexes if AF.is_chromatic(h)}
    if not app_chrom:
        return "NO-APP-PALETTE", row, notes

    fams = families([h for h, _s in cands])
    if not any(strong for _h, strong in cands):
        # only decorative accents (`li a:before` dots, an icon tint) — a
        # component demo's palette, not a page design's
        return "NO-DESIGN-COLOUR", row, notes
    lead_hex = next(h for h, strong in cands if strong)
    if CATEGORY_KIT_RX.search(category):
        return "KIT-DEMO", row, notes
    kit = kit_variants(live, scaffold)
    if lead_hex in kit and len(kit) >= KIT_MIN:
        notes.append(("KIT-SHEET", f"{len(kit)} button-only chromatic variants "
                                    f"({', '.join(sorted(kit)[:6])})"))
        return "NO-DESIGN-COLOUR", row, notes

    # ---- direction 1: does every live design hue family reach the app?
    missing = []
    for fam in fams:
        if covered(fam, app_chrom):
            continue
        h = fam[0]
        near, d = nearest(h, app_chrom)
        missing.append({"hex": h, "family": fam, "decls": stats[h]["n"],
                        "bg": stats[h]["bg"], "near": near, "delta": d})
    row["unpainted"] = missing

    # ---- direction 2: does the app's brand hue exist in the live sheet?
    foreign = False
    if brand and brand in FRAMEWORK:
        # a library default is not a design hue: this says nothing about fidelity
        notes.append(("FRAMEWORK-BRAND", brand,
                      "app brand is a framework default, not a design choice"))
    elif brand:
        near, d = nearest(brand, chrom_live)
        fam = family_hit(brand, chrom_live)
        row["delta"], row["nearest"] = d, near
        row["family"] = fam
        if d > TOL and not fam:
            foreign = True

    if live["rebuilt"]:
        # a rebuilt demo re-skins the page (`?v=3.x` kit, a hashed modern bundle,
        # a compiled Tailwind build); `-23zd` measured 59/64 kept the palette
        # verbatim, so a mismatch is drift to adjudicate, never app debt
        kept = bool(brand and nearest(brand, chrom_live)[1] <= TOL)
        return ("RESKIN-KEPT" if kept else "RESKIN"), row, notes
    lead_covered = covered(fams[0], app_chrom)
    lead_missing = any(u["hex"] == lead_hex for u in row["unpainted"])
    # a re-skin is the stronger statement and must be read FIRST: an app whose
    # brand hue the sheet never paints AND which paints NOT ONE of the design's
    # hue families has been built from another design, not from this one.  The
    # first draft tested this AFTER `lead_missing`, where it was unreachable by
    # construction (a missing lead implies `not lead_covered`) — the bucket read
    # 0 over 1,703 apps for a structural reason, not a measured one.
    painted_any = any(covered(fam, app_chrom) for fam in fams)
    if foreign and not painted_any:
        # the app's brand is a hue the sheet never paints AND it paints not one
        # of the design's hue families: built from a different design.  This is
        # a NOTE, never a flag bucket of its own — a missing lead is already
        # `LIVE-UNPAINTED` below, and the first draft's separate APP-FOREIGN
        # bucket was unreachable by construction (a missing lead implies
        # `not lead_covered`), so it read 0 over 1,703 apps for a structural
        # reason rather than a measured one (`-24r`).
        notes.append(("REHUE", brand,
                      f"app brand {brand} is not a live hue and no design family "
                      f"is painted (lead {lead_hex})"))
    elif foreign:
        # the app paints the design's palette AND carries an extra brand hue
        # (`cantrip`: design orange #f65300 painted, app brand green #6dab3c):
        # an addition, not an omission — a note, never a flag
        notes.append(("EXTRA-HUE", brand,
                      f"app brand {brand} is not a live hue, but the design's "
                      f"{lead_hex} is painted"))
    if lead_missing:
        return "LIVE-UNPAINTED", row, notes
    if missing:
        return "LIVE-ACCENT-MISSING", row, notes
    lead_exact = any(nearest(h, app_chrom)[1] <= TOL for h in fams[0])
    # a framework default is not a design claim (`FRAMEWORK-BRAND` above), so it
    # cannot make the palette a "drift" either
    brand_exact = (brand in FRAMEWORK) or (row["delta"] is not None and row["delta"] <= TOL)
    if lead_exact and brand_exact:
        return "MATCH", row, notes
    # right hue, re-picked shade: the app's value sits Δ > TOL from the sheet's
    notes.append(("SHADE-DRIFT",
                  f"lead {lead_hex} exact={lead_exact}; "
                  f"app brand {brand} Δ{row['delta']} from live {row['nearest']}"))
    return "SHADE-DRIFT", row, notes


def scaffold_colours(root: str, f, args, names):
    """Hexes that lead MANY unrelated designs — a shared scaffold, not a signature.

    Measured on 2026-10-24 over 594 previews: `#38a4ff` — the `genric-btn` kit's
    info colour — is a palette candidate in 67 of them, the next colour at 12.
    A colour that 20 unrelated demos paint is the host's scaffold (or Bootstrap's
    state ramp), so it cannot be any one design's brand; treating it as one
    manufactured 30+ `LIVE-UNPAINTED` flags on the first 300 apps.
    """
    seen: dict[str, set] = collections.defaultdict(set)

    def one(n):
        spec_path = os.path.join(root, "openspec", "specs", "template-" + n, "spec.md")
        if not os.path.isfile(spec_path):
            return
        slug = AF.spec_slug(open(spec_path, encoding="utf-8", errors="replace").read())
        if not slug:
            return
        live = live_palette(f, slug, n)
        if live.get("bucket"):
            return
        for h, _s in live_core(live, (), limit=12):
            seen[h].add(slug)

    fam: dict[str, collections.Counter] = collections.defaultdict(collections.Counter)
    for h, slugs in seen.items():
        for s in slugs:
            # `contact-form-19` and `contact-form-04` are ONE demo family: its
            # shared accent (#ccda46) is the family's kit colour, not a design's
            fam[h][re.sub(r"[-_]?[vV]?\d+$", "", s)] += 1
    if args.jobs > 1:
        with ThreadPoolExecutor(max_workers=args.jobs) as ex:
            list(ex.map(one, names))
    else:
        for n in names:
            one(n)
    out = set()
    for h, slugs in seen.items():
        if len(slugs) >= SCAFFOLD_MIN:
            out.add(h)
            continue
        # per-family test uses the slugs that PAINTED the colour, not the corpus
        fam2: collections.Counter = collections.Counter()
        slugs_by_family = collections.defaultdict(set)
        for s in slugs:
            slugs_by_family[re.sub(r"[-_]?[vV]?\d+$", "", s)].add(s)
        for f, members in slugs_by_family.items():
            if len(members) >= FAMILY_MIN:
                fam2[f] = len(members)
        if fam2:
            out.add(h)
    return frozenset(out)


def census(root: str, f, args):
    base = os.path.join(root, "apps")
    names = sorted(d for d in os.listdir(base)
                   if os.path.isdir(os.path.join(base, d, "src")))
    if args.slug:
        names = [n for n in names if n == args.slug]
    if args.limit:
        names = names[:args.limit]
    rows: dict[str, list] = {b: [] for b in BUCKETS}
    notes: dict[str, list] = collections.defaultdict(list)
    if args.jobs > 1:
        VT.CR.configure(f.get, args.cache)           # warm the catalog map once

    scaffold = frozenset() if args.no_scaffold else scaffold_colours(root, f, args, names)

    def one(n):
        try:
            return n, audit_app(root, n, f, args, scaffold)
        except Exception as exc:                     # a bad app must not kill the sweep
            return n, ("NO-SPEC", {"app": n, "error": str(exc)[:120]}, [])

    if args.jobs > 1:
        with ThreadPoolExecutor(max_workers=args.jobs) as ex:
            results = list(ex.map(one, names))
    else:
        results = [one(n) for n in names]
    for n, (bucket, row, nts) in results:
        rows[bucket].append(row or {"app": n})
        for kind, *rest in nts:
            notes[kind].append((n,) + tuple(rest))
    return rows, notes, len(names), scaffold


def render_md(rows, notes, total: int, args) -> str:
    L = []
    L.append("# App ↔ live palette — does each shipped app paint its "
             "reference's colours?\n")
    L.append("```sh\npython3 scripts/verify-app-live-tokens.py \\\n"
             "  --cache /tmp/live-tokens-cache --jobs 8 \\\n"
             "  --md docs/app-live-tokens.md --json /tmp/app-live.json\n"
             "python3 scripts/verify-app-live-tokens-controls.py   # controls\n```\n")
    L.append("Generated by `scripts/verify-app-live-tokens.py` (read-only; it never\n"
             "edits `apps/`). It is the third edge of the token triangle: the two\n"
             "shipped axes compare a **spec** with its live sheet\n"
             "(`verify-live-tokens`) and with its app (`verify-app-fidelity`).\n"
             "Neither can see a hole both agree on, and neither asks whether the\n"
             "app's brand hue exists in the reference at all.\n")
    if args.stamp:
        L.append(f"_Provenance: {args.stamp}_\n")
    L.append(f"Corpus: **{total}** shipped apps (`apps/<name>/src`).\n")
    L.append("## Method\n")
    L.append("* **Live side** — `catalog_resolve` → the demo's THEME-owned\n"
             "  stylesheets only (vendor/library bundles excluded; the vendor test\n"
             "  is scoped below the demo directory, so `/theme/bootstrap/<slug>/`\n"
             "  counts as a demo family, and a `css/gijgo.css`-style bundle is\n"
             "  excluded by name). Every declaration is weighted — background 3,\n"
             "  text colour 2, border 1 — and **CSS variables are resolved**, so a\n"
             "  theme that defines `--accent` and paints `var(--accent)` is read\n"
             "  (the first draft, which counted literals, called 103 of 300 apps\n"
             "  `NO-DESIGN-COLOUR`).\n"
             "* **App side** — every hex (and `rgb()` form) in\n"
             "  `apps/<name>/src/**`; the app's brand is its `--color-brand`\n"
             "  anchor, else the most-painted member of its `@theme` palette, else\n"
             "  its most-painted chromatic colour.\n"
             f"* **Same hue family** — HSV hue within {HUE_TOL:.0f}°: `#d6a04c` and\n"
             "  `#b98a3c` are one family (a re-picked shade), a coral and a\n"
             "  corporate blue are not. A shade is a note (`SHADE-DRIFT`).\n"
             f"* **LIVE-UNPAINTED** — the design's LEADING colour (most-painted,\n"
             "  painted at section scale) has no app colour within\n"
             f"  Δ{TOL} and no member of its hue family in the app.\n"
             "* **REHUE / EXTRA-HUE** — the app's brand is a hue the live sheets\n"
             "  never paint: `REHUE` (note) when it also paints none of the\n"
             "  design's families — a different design — and `EXTRA-HUE` (note)\n"
             "  when the design's palette is painted and a hue was added. Neither\n"
             "  is a bucket: a missing lead is `LIVE-UNPAINTED`.\n"
             "* **Shared scaffold** — a colour that is a palette candidate in ≥\n"
             f"  {SCAFFOLD_MIN} unrelated previews is the host's scaffold, not any\n"
             "  design's signature (`#38a4ff` in 67 of 594 sampled, the\n"
             "  `contact-form-*` family's `#ccda46` in 6). Excluded from being a\n"
             "  leading colour; `--no-scaffold` is the A/B control.\n"
             "* **Library state ramp** — a shade of a framework default (Δ ≤ 24\n"
             "  from a Bootstrap/Bulma/Material colour) that is painted ONLY by a\n"
             "  framework component in a state pseudo-class is the library's own\n"
             "  ramp, not a design surface: Bootstrap 5's `.btn-primary:hover`\n"
             "  `#0b5ed7` is Δ13 from its `#0d6efd`. Reading it as design\n"
             "  manufactured three LIVE-ACCENT-MISSING notes against apps that\n"
             "  paint their design correctly; `--no-fw-shade` is the A/B control.\n"
             "* **Dismissed as not-a-palette** — a colour painted only under\n"
             "  `:hover`/`:focus`, only by `::selection`, only by a library widget's\n"
             "  chrome (`.nice-select`, `[role=\"handle\"]`), only by a share row's\n"
             "  positional `li:nth-child(k)` icon, or only by a kit block the page\n"
             "  never instantiates (`.genric-btn.primary`); a text-selection colour\n"
             "  and an unrendered kit button are not design decisions.\n"
             "* A rebuilt demo (`?v=3.x` kit, a hashed `Base.DSJ9xNgp.css` bundle, a\n"
             "  compiled Tailwind sheet) is drift, not debt: `RESKIN` /\n"
             "  `RESKIN-KEPT`, never a flag.\n"
             "* A colour-variant BUTTON kit (`bootstrap-buttons-*`: one hue per\n"
             "  flavour, painted only through control selectors) has no single\n"
             "  brand: `NO-DESIGN-COLOUR` with a `KIT-SHEET` note.\n")
    L.append("## Census\n")
    L.append("| bucket | apps | meaning |\n| --- | --- | --- |")
    meaning = {
        "MATCH": "the design's lead colour is painted exactly and the app's brand is a live hue",
        "SHADE-DRIFT": "right hue, Δ > TOL — a re-picked shade",
        "LIVE-UNPAINTED": "**flag** — the design's leading colour the app never paints",
        "LIVE-ACCENT-MISSING": "note — a secondary design colour the app omits",
        "RESKIN": "rebuilt demo, app brand not found in it",
        "RESKIN-KEPT": "rebuilt demo, palette kept and painted by the app",
        "NO-THEME-SHEET": "every linked sheet is a vendor bundle",
        "KIT-DEMO": "note — the prep's own category says the reference is a widget/kit demo",
        "NO-DESIGN-COLOUR": "the theme sheets paint no design-scale colour",
        "NO-APP-PALETTE": "app src holds no chromatic hex",
        "REF-DEAD": "no demo resolved",
        "DEMO-AMBIGUOUS": "demo resolved on the invented name only",
        "NO-SPEC": "no prep spec for this app",
        "NO-SLUG": "spec states no source slug",
        "ALIAS-SKIP": "alias prep, never built from",
    }
    for b in BUCKETS:
        L.append(f"| {b} | {len(rows[b])} | {meaning.get(b, '')} |")
    L.append("")
    for b in FLAG_BUCKETS:
        if not rows[b]:
            continue
        L.append(f"## {b} — {len(rows[b])} app(s)\n")
        if b == "LIVE-UNPAINTED":
            L.append("| app | slug | prep category | live colour | decls | nearest app colour | Δ |\n"
                     "| --- | --- | --- | --- | --- | --- | --- |")
            for r in sorted(rows[b], key=lambda r: r["app"]):
                for u in r["unpainted"]:
                    L.append(f"| `{r['app']}` | `{r['slug']}` | {r.get('category', '')} | "
                             f"`{u['hex']}` | {u['decls']} | `{u['near']}` | {u['delta']} |")
        else:
            L.append("| app | slug | prep category | app brand | how found | nearest live | Δ |\n"
                     "| --- | --- | --- | --- | --- | --- | --- |")
            for r in sorted(rows[b], key=lambda r: r["app"]):
                L.append(f"| `{r['app']}` | `{r['slug']}` | {r.get('category', '')} | "
                         f"`{r['brand']}` | `{r['brand_why']}` | `{r['nearest']}` | "
                         f"{r['delta']} |")
        L.append("")
    if notes:
        L.append("## Notes\n")
        L.append("| note | apps | meaning |\n| --- | --- | --- |")
        note_meaning = {
            "SHADE-DRIFT": "right hue at Δ > TOL — a re-picked shade, not a defect",
            "EXTRA-HUE": "the app paints the design AND adds a brand hue of its own",
            "REHUE": "the app's brand is a hue the sheet never paints and it paints no design family — a different design",
            "FRAMEWORK-BRAND": "the app's brand anchor is a library default, not a design hue",
            "KIT-SHEET": "a colour-variant button kit: no single flavour is the brand",
        }
        for k in sorted(notes):
            L.append(f"| {k} | {len(notes[k])} | {note_meaning.get(k, '')} |")
        L.append("")
    L.append("## Reading a hit\n")
    L.append("* **The residual is two shapes, both visible in the table's `prep\n"
             "  category` column.** A page design the app re-skinned\n"
             "  (`alignwell`: the reference paints `#01d28e` on `.btn-primary`,\n"
             "  `.bg-primary` and the nav; the app ships Bootstrap blue only) is app\n"
             "  debt: an implementer restyle, never an edit from this clone.\n"
             "* A widget/kit subject (`(Accordion UI Component)`, `(Contact Form)`,\n"
             "  `(UI Component Showcase & Buttons Gallery)`) is `KIT-DEMO`: its sheet\n"
             "  paints one control accent, the app is a page, and \"the page does not\n"
             "  paint the widget's accent\" is not a fidelity statement.\n"
             "* The reference is not the design any more (`RESKIN*`: a `?v=3.x` kit,\n"
             "  a hashed `Base.xxxxxxxx.css` bundle) — drift to adjudicate in the\n"
             "  spec, never app debt.\n"
             "* The colour is not the design's at all — a framework default, a\n"
             "  social row's icon, a `::selection`, an unrendered kit block: those\n"
             "  are dismissed before the comparison and never reach this table.\n"
             "* **Why this read is additive (measured 2026-10-24).** 13 of the 30\n"
             "  flagged apps are already `UNSHIPPED` rows of\n"
             "  `docs/app-fidelity-delta.md`; the other 17 are invisible to that\n"
             "  axis — 7 are demoted to `APPROX-VARIANT` because the spec's usage\n"
             "  cell mentions a `:hover` rule (a Δ>100 miss becomes a note), 8 are\n"
             "  `COVERED` because the app paints the colours the spec claimed and\n"
             "  the claim set never held the design's lead, and 2 carry no\n"
             "  brand-role claim at all. 41 colour rows underlie the 30 apps: 31\n"
             "  the prep recorded (app debt) and 10 it never recorded (prep debt).\n"
             "* `--no-scaffold`, `--scaffold-min N` and `--no-fw-shade` are the\n"
             "  A/B controls for the corpus-level scaffold and library-state guards;\n"
             "  `--show BUCKET` prints any bucket.\n")
    return "\n".join(L) + "\n"


def main() -> int:
    ap = argparse.ArgumentParser(description="app <-> live palette axis (read-only)")
    ap.add_argument("--prep-root", default=os.getcwd())
    ap.add_argument("--cache", default="/tmp/live-tokens-cache")
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--jobs", type=int, default=8)
    ap.add_argument("--slug")
    ap.add_argument("--limit", type=int)
    ap.add_argument("--show")
    ap.add_argument("--json")
    ap.add_argument("--md")
    ap.add_argument("--top", type=int, default=25)
    ap.add_argument("--stamp", default="")
    ap.add_argument("--scaffold-min", type=int, default=None,
                    help="A/B control: previews a hex must appear in to be scaffold")
    ap.add_argument("--no-scaffold", action="store_true",
                    help="A/B control: never exclude the host's shared scaffold colours")
    ap.add_argument("--no-fw-shade", action="store_true",
                    help="A/B control: keep a library default's own SHADE (e.g. the "
                         "Bootstrap `#0b5ed7` hover) as a design surface")
    ap.add_argument("--verbose", action="store_true")
    args = ap.parse_args()
    root = os.path.abspath(args.prep_root)
    if not os.path.isdir(os.path.join(root, "openspec", "specs")):
        print(f"error: {root} is not a prep root (no openspec/specs)", file=sys.stderr)
        return 2
    args.cache = os.path.abspath(args.cache)
    if args.scaffold_min is not None:
        globals()["SCAFFOLD_MIN"] = args.scaffold_min
    if args.no_fw_shade:
        globals()["FW_SHADE"] = False
    f = VT.Fetcher(args.cache, not args.no_net)
    rows, notes, total, scaffold = census(root, f, args)
    if args.json:
        json.dump({"total": total, "scaffold": sorted(scaffold),
                   "buckets": {b: len(rows[b]) for b in BUCKETS},
                   "rows": [r for b in BUCKETS for r in rows[b]],
                   "notes": {k: v for k, v in notes.items()}},
                  open(args.json, "w"), indent=1)
    if args.md:
        open(args.md, "w").write(render_md(rows, notes, total, args))
    print(f"apps read: {total}")
    for b in BUCKETS:
        if rows[b] or b in FLAG_BUCKETS:
            print(f"  {b:16s} {len(rows[b])}")
    flags = sum(len(rows[b]) for b in FLAG_BUCKETS)
    print(f"flags: {flags}")
    if args.verbose or args.show:
        want = set(FLAG_BUCKETS) | ({args.show} if args.show else set())
        for b in BUCKETS:
            if b not in want:
                continue
            for r in rows[b]:
                if b == "LIVE-UNPAINTED":
                    print(f"  {b} {r['app']:18s} {r['slug']:24s} "
                          f"unpainted={[u['hex'] for u in r['unpainted']]}")
                else:
                    print(f"  {b} {r['app']:18s} {r['slug']}")
    return 1 if flags else 0


if __name__ == "__main__":
    sys.exit(main())
