#!/usr/bin/env python3
"""verify-spacing-tokens.py — SPACING / VERTICAL-PADDING axis (audit).

Every prep hands the implementer the theme's vertical rhythm: "About
`div.about_area` (white, `padding: 200px 0 270px`)", "section padding 100px 0",
"`.ftco-section{padding:7em 0}`". Those numbers ARE the page's breathing room —
get them wrong and every band collapses or doubles in height. Nothing in the
suite has ever read them:

| axis | reads |
| --- | --- |
| `token-census.py` / `token-coverage.py` | hex colours only (`HEX_RX` is the whole extractor) |
| `verify-live-tokens.py` | declared hex tokens vs the live sheet |
| `verify-type-axis.py` | `font-family` / `font-weight` vs the prescribed GF link |
| `verify-shape-tokens.py` | the `border-radius` a spec states for a button |
| `verify-cardinality-media.py` | element counts + asset basenames |
| `verify-section-order.py` | document order |
| **`verify-spacing-tokens.py`** | **the vertical `padding` a spec states for a NAMED selector vs the rules the live stylesheets paint** |

DIRECTIONS
  SPACING-WRONG     the claim names a selector the live sheets style with a
                    vertical padding rule, and EVERY such rule disagrees (both
                    compared sides, outside tolerance)
  SPACING-CONFLICT  a generic section claim ("sections are padded 100px
                    top/bottom") on a theme whose sheet paints a different
                    section rhythm (reserved for section-ish selectors only)

NOTES (never flags)
  SPACING-ABSENT      the named selector exists but carries no padding rule
                      (spacing may come from a wrapper — cannot adjudicate)
  SPACING-ONE-SIDE    the sheet rule sets only the other side
  SPACING-APPROX      framed as sampled/approximate ("~", "approx", "from the
                      screenshot") — docs/replication.md allows it, it is not CSS
  SPACING-RESPONSIVE  the claim is about a breakpoint (`≤991px`, `max-width`,
                      `@media`, "on mobile") — both values legitimately exist
  SPACING-IMPL        the line is OUR guidance (Tailwind `py-*`, "the recreation")
  SPACING-GAP         a `gap`/`margin` claim — out of scope for this axis
  SPACING-CENSUS      a census sentence ("the only padding in the sheet is …")
  SPACING-UNPARSEABLE `calc()`/`var()`/`%` — the value cannot be compared
  SPACING-MULTI       the sheets paint >2 distinct rhythms for the selector

Usage:
  python3 verify-spacing-tokens.py [--prep-root DIR] [--ref GITREF] [--slug S]
                                   [--no-net] [--cache DIR] [--limit N]
                                   [--sample SEED] [--jobs N] [--verbose]
                                   [--json OUT]
Exit code 0 = clean, 1 = flags, 2 = usage/root error.

Read-only: it writes nothing but its curl cache and the optional --json report.
"""
from __future__ import annotations

import catalog_resolve as CR   # shared slug -> live-demo resolver

import argparse
import hashlib
import json
import os
import random
import re
import subprocess
import sys
import threading
import urllib.parse

PREVIEW = "https://preview.colorlib.com/theme/{slug}/"
PREVIEW_BOOTSTRAP = "https://preview.colorlib.com/theme/bootstrap/{slug}/"
PREVIEW_ETC = "https://colorlib.com/etc/cs/{slug}/index.html"
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0.0.0 Safari/537.36")

# ---------------------------------------------------------------- regexes ---
LINK_RX = re.compile(r"<link[^>]*>", re.I)
STYLE_RX = re.compile(r"<style[^>]*>(.*?)</style>", re.I | re.S)
COMMENT_RX = re.compile(r"/\*.*?\*/", re.S)
IMPORTANT_RX = re.compile(r"!\s*important", re.I)
SLUG_RX = [
    re.compile(r"Source slug:\s*`?([A-Za-z0-9._-]+)"),
    re.compile(r"colorlib\.com/wp/template/([a-z0-9._-]+)/"),
    re.compile(r"preview\.colorlib\.com/theme/(?:bootstrap/)?([A-Za-z0-9._-]+)/"),
]

# ---- claim side ---
# `padding`, `padding-top`, `padding: 200px 0 270px`, `section padding 100px 0`
_LEN = r"(?:-?\d*\.?\d+\s*(?:px|rem|em|%|pt)\b|0\b)"
PAD_RX = re.compile(
    # `(?<![\w-])` keeps the class `section-padding` from reading as a padding
    # declaration ("`section-padding` 100px" is a NAME, not a value)
    r"(?i)(?<![\w-])padding(?:\s*-\s*(?P<side>top|bottom|left|right))?\b"
    r"[\s|`:=]*(?P<val>" + _LEN + r"(?:\s+" + _LEN + r"){0,3})")
# a bare "no padding" / "without vertical padding" assertion, bound to a selector
ZERO_RX = re.compile(r"(?i)\b(?:no|without|zero|none)\s+(?:vertical\s+|vertical-)?padding\b")
GAP_RX = re.compile(r"(?i)\b(?:grid-)?(?:gap|row-gap|column-gap)\b[\s|`:=]*[-.\d]")
MARGIN_RX = re.compile(r"(?i)\bmargin(?:-(?:top|bottom))?\b[\s|`:=]*[-.\d]")
# `div.section.section-3` chains TWO classes, and the second is preceded by a
# letter: the first draft's `(?<![\w.])` lookbehind dropped it, so momentum's
# `padding-bottom:0` claim was adjudicated against plain `.section` (112px).
# Only a preceding DIGIT excludes a match (a decimal like `0.25rem`).
SELECTOR_RX = re.compile(r"(?<!\d)\.([A-Za-z][\w-]{2,})")
QUOTED_CLASS_RX = re.compile(r"`([a-zA-Z][\w-]{2,})`")
NUM_LEN_RX = re.compile(r"^(-?\d*\.?\d+)\s*(px|rem|em|%|pt)?$")

APPROX_RX = re.compile(
    r"(?i)(sampled|approx\.?|approximate|\babout\s+\d|\bfrom the screenshot\b|"
    r"screenshot[- ]sampled|estimate[d]?|~?\s*~|roughly)")
RESPONSIVE_RX = re.compile(
    r"(?i)(\d+\s*px\s*(?:and|or)?\s*(?:below|under|above)|≤|≥|<=|>=|max-width|"
    r"min-width|@media|on mobile|at desktop|breakpoint|\bstack\b|\bcollaps\w+|"
    r"\b(?:below|under|above|until)\s+\d+\s*(?:px|em|rem))")
# "horizontal padding", "padding 5rem sides", "left/right only" — the vertical
# rhythm is NOT what such a claim states (momentum's `.box-white` "padding
# `5rem` sides", splithaven's "Button horizontal padding" row).
HORIZ_RX = re.compile(r"(?i)(\bhorizontal\b|\bleft\s*[/|]\s*right\b|"
                      r"\b(x|h)-padding\b|\bsides\b)")
# "padding 42px top / 100px bottom" is a TWO-EDGE statement the shorthand
# grammar cannot read (serverly, stet) — parse it as top+bottom.
# "padding 7em top 0" / "padding 6rem top / 7.2rem" (bottom on the next line)
# states the TOP edge only — a shorthand reading claims a bottom it never wrote.
TOP_ONLY_RX = re.compile(
    r"(?i)(?P<top>-?\d*\.?\d+\s*(?:px|rem|em|pt|%))\s+top\b")
# a claim about a DESCENDANT of the class (`ul.site-nav-wrap` → "top-level
# links padding", `.days li a`, `.site-menu > li > a`, `.home-button a`) is not
# the class' own padding — measured on 5 preps in one sweep.
DESCENDANT_RX = re.compile(
    r"(?:^|[\s`>+~])(?:ul|ol|li|a|span|div|td|th|p|h[1-6]|img|button|input)\b"
    r"|>|\b(?:links?|items?|rows?|cells?|anchors?|tabs?|buttons?|labels?)\b")
TOP_BOTTOM_RX = re.compile(
    r"(?i)(?P<top>-?\d*\.?\d+\s*(?:px|rem|em|pt|%))\s+top\s*[/|]\s*"
    r"(?P<bottom>-?\d*\.?\d+\s*(?:px|rem|em|pt|%))\s+bottom")
IMPL_RX = re.compile(r"(?i)(the recreation|our (?:app|implementation)|\bpy-\d|\bpx-\d|"
                     r"\bm[tb]-\d|\bmy-\d|Tailwind|space-y-)")
CENSUS_RX = re.compile(
    r"(?i)(0 everywhere|the only padding|only padding in|no padding anywhere|"
    r"padding[- ]free|zero[- ]padding by default|normalize)")
HEDGE_RX = re.compile(r"(?i)(padding\s*[/|]\s*margin|margin\s*[/|]\s*padding|"
                      r"\bvaries\b|\boptional\b)")
# a COMPARISON statement quotes two values on purpose ("`.section .heading
# { padding-bottom: 30px }` vs `40px`") — measured on aisle, twice.
DELTA_RX = re.compile(r"(?i)(\bvs\.?\b|\bversus\b|rather than|compared (?:with|to)|"
                      r"\bdiffers? from\b|\binstead of\b|→ *\d)")
# a claim scoped to ANOTHER PAGE of the same theme (the ladder axis): the
# landing sheets this axis reads are not its reference
PAGESCOPE_RX = re.compile(
    r"(?i)\b(?:per[-\s]page|inner[-\s]pages?|sub[-\s]?page|other pages?|"
    r"each page|every page|landing (?:sheet|page)|page ladders?)\b")
# our own evidence block quotes the live rule (`- \`slug\`: \`.x{padding:…}\``)
EVIDENCE_LINE_RX = re.compile(r"^-?\s*`[^`]+`:\s*`")
# section-ish selector names: the generic path is restricted to these
SECTION_SEL_RX = re.compile(
    r"(?i)(?:^|[.\s_-])(?:section|sec|band|area|banner|hero|jumbotron|page[-_]?wrap|"
    r"wrapper|wrap|block|panel|row|footer|header|nav(?:bar)?|main)(?:$|[.\s_-])")
# a claim must be about the band, not a control: controls inherit their own rhythm
CONTROL_SUBJECT_RX = re.compile(
    r"(?i)\b(input|textarea|select|checkbox|radio|label|td|th|li|badge|tag|chip|"
    r"tooltip|dropdown-menu|progress|td)\b")

TOL_ABS = 6.0        # px — padding is band-scale; 40 vs 34 px is not a defect
                     # (measured: patisserie's `padding 40px 0` vs a
                     # `.footer-border{40px 0 1px}` sheet, betrothal's 14 vs
                     # 14/10 button, giveback's neighbouring-band claim)
TOL_REL = 0.10       # 10 %
SMALL = 6.0          # two tiny values are the same rhythm
ZERO_MIN = 20.0      # a "no padding" claim only contradicts a visible band


def norm_px(tok: str):
    """'30px' / '.25rem' / '0' -> (px_value, unit) | None."""
    tok = (tok or "").strip().lower()
    m = NUM_LEN_RX.match(tok)
    if not m:
        return None
    val = float(m.group(1))
    unit = m.group(2) or "px"
    if unit in ("rem", "em"):
        val *= 16.0
        unit = "px"
    elif unit == "pt":
        val *= 4.0 / 3.0
        unit = "px"
    return (val, unit)


def parse_padding(raw: str):
    """`0 15px 0 55px` -> {'top':(0,'px'),'right':...,'bottom':...,'left':...}."""
    raw = IMPORTANT_RX.sub(" ", raw or "").strip()
    # a prose value runs into its own punctuation: "(padding 7em 0) →",
    # "padding 0 88px, container-fluid", "padding 4em/8em" — cut at the first
    # delimiter that cannot be part of a padding shorthand
    raw = re.split(r"[),;→/|]|\s=\s", raw)[0].strip()
    if re.search(r"(?i)calc\(|var\(|env\(|clamp\(|min\(|max\(", raw):
        return None
    toks = [t for t in re.split(r"\s+", raw) if t]
    if not 1 <= len(toks) <= 4:
        return None
    vals = []
    for t in toks:
        p = norm_px(t.rstrip(";,"))
        if p is None:
            return None
        vals.append(p)
    if len(vals) == 1:
        top = right = bottom = left = vals[0]
    elif len(vals) == 2:
        top = bottom = vals[0]
        right = left = vals[1]
    elif len(vals) == 3:
        top, right, bottom = vals
        left = right
    else:
        top, right, bottom, left = vals
    return {"top": top, "right": right, "bottom": bottom, "left": left}


def px(side_dict, key):
    v = side_dict.get(key)
    return v[0] if v and v[1] != "%" else None


# ---------------------------------------------------------------- CSS side ---
MEDIA_WIDTH_RX = re.compile(
    r"(?i)(min|max)-width\s*:\s*(-?[\d.]+)\s*(px|em|rem)")


def _media_merge(media, prelude: str):
    """Intersect the enclosing media condition with a nested `@media` prelude.

    `@media (min-width:768px)` → (768, None); `max-width:991px` → (None, 991);
    both in one prelude keep both bounds. A non-@media at-rule (@supports,
    @layer, a keyframes block) inherits the enclosing condition unchanged.
    """
    if not prelude.lower().startswith("@media"):
        return media
    lo, hi = media
    for m in MEDIA_WIDTH_RX.finditer(prelude):
        p = norm_px(m.group(2) + m.group(3))
        if p is None:
            continue
        v = p[0]
        if m.group(1).lower() == "min":
            lo = v if lo is None else max(lo, v)
        else:
            hi = v if hi is None else min(hi, v)
    return (lo, hi)


def parse_rules(css: str, media=(None, None)):
    """[(selector, body, (min_px, max_px))] with @media flattened, `print` dropped.

    Linear brace scanner (same shape as verify-shape-tokens.py): a per-@media
    regex rescan is quadratic on a minified 160 kB Bootstrap sheet. The media
    condition is CARRIED on every rule so the responsive-ladder axis can tell a
    base rhythm from a breakpoint override (2026-10-22f); rules outside any
    @media keep `(None, None)`.
    """
    css = COMMENT_RX.sub(" ", css)
    out = []
    i, n, prelude = 0, len(css), []
    while i < n:
        c = css[i]
        if c == "{":
            sel = "".join(prelude).strip()
            prelude = []
            depth, j = 1, i + 1
            while j < n and depth:
                if css[j] == "{":
                    depth += 1
                elif css[j] == "}":
                    depth -= 1
                j += 1
            body = css[i + 1:j - 1]
            if sel.startswith("@"):
                low = sel.lower()
                if re.match(r"@(-[a-z]+-)?keyframes\b", low) or low.startswith("@font-face"):
                    pass                     # keyframe stops / font descriptors: not selectors
                elif not (low.startswith("@media") and re.search(r"\bprint\b", low)):
                    out.extend(parse_rules(body, _media_merge(media, sel)))
            else:
                out.append((sel, body, media))
            i = j
        elif c == "}":
            i += 1
        elif c == ";" and "".join(prelude).lstrip().startswith("@"):
            # An at-rule STATEMENT (`@import url(...);`, `@charset "UTF-8";`) ends at the
            # semicolon and has no block. Without this the prelude ran on into the NEXT
            # selector and that rule was swallowed whole — measured 2026-10-22m on
            # `fitnessclub/style.css`: the base `.boxed-btn{…letter-spacing:3px…}` and the
            # `body{…}` rule behind a leading `@import` never entered the token pool
            # (47 rules across 551 live sheets; 8 held `padding`, 3 `font-size`).
            prelude = []
            i += 1
        else:
            prelude.append(c)
            i += 1
    return out


PAD_DECL_RX = re.compile(
    r"(?i)(?:^|;)\s*padding(?:\s*-\s*(top|bottom|left|right))?\s*:\s*([^;}]+)")


def _body_sides(body: str):
    """`padding` declarations of ONE rule body → {side: (px, unit)} | None."""
    cur = {}
    for m in PAD_DECL_RX.finditer(body):
        side, raw = m.group(1), m.group(2)
        if side:
            p = norm_px(IMPORTANT_RX.sub(" ", raw).strip(" ;"))
            if p is None:
                continue
            # an explicit `padding-top: X` overrides only that side
            cur[side] = p
        else:
            val = parse_padding(raw)
            if val is not None:
                cur.update(val)
    return cur or None


def pad_rules(layers):
    """selector -> list of side dicts, in document order (each rule a variant)."""
    out = {}
    for _url, css in layers:
        for sel, body, _media in parse_rules(css):
            cur = _body_sides(body)
            if cur:
                out.setdefault(sel, []).append(cur)
    return out


def pad_rules_media(layers):
    """(base_map, media_map) — the SAME rules, split by their media condition.

    base_map:  selector -> [sides]                       (no @media)
    media_map: selector -> [(min_px, max_px, sides)]     (inside @media)

    The responsive-ladder axis needs the split: a claim like "`.site-section`
    padding 3em 0 (7em ≥768px)" states two values that live in two different
    buckets of the sheet, and flattening them (the old `pad_rules`) is exactly
    why every such claim was guarded out as `SPACING-RESPONSIVE`.
    """
    base, media = {}, {}
    for _url, css in layers:
        for sel, body, (lo, hi) in parse_rules(css):
            cur = _body_sides(body)
            if not cur:
                continue
            if lo is None and hi is None:
                base.setdefault(sel, []).append(cur)
            else:
                media.setdefault(sel, []).append((lo, hi, cur))
    return base, media


def css_classes(layers):
    out = set()
    for _url, css in layers:
        for sel, _body, _media in parse_rules(css):
            for m in re.finditer(r"\.([A-Za-z_][\w-]{1,})", sel):
                out.add(m.group(1))
    return out


SHEET_SECTION_RX = re.compile(
    r"(?i)(?:^|[.\s_-])(?:section|sec|band|area|banner|hero|jumbotron|page[-_]?wrap|"
    r"wrapper|wrap|block|panel|row|footer|header|nav(?:bar)?|main|ftco-section|"
    r"py-\d)(?:$|[.\s_-])")


def section_rhythms(pmap):
    """[(selector, side_dict)] for section-ish selectors — the generic pool."""
    out = []
    for sel, variants in pmap.items():
        if not SHEET_SECTION_RX.search(sel):
            continue
        for v in variants:
            rh = {k: px(v, k) for k in ("top", "bottom") if px(v, k) is not None}
            if rh:
                out.append((sel, rh))
    return out


def sheet_layers(html: str, base: str, fetch):
    layers = []
    for tag in LINK_RX.findall(html):
        if "stylesheet" not in tag.lower():
            continue
        m = re.search(r'href=["\']([^"\']+)', tag)
        if not m:
            continue
        u = urllib.parse.urljoin(base, m.group(1))
        if u.startswith("//"):
            u = "https:" + u
        code, body = fetch(u)
        if str(code) == "200" and body:
            layers.append((u, body.decode("utf-8", "replace")))
    inline = STYLE_RX.findall(html)
    if inline:
        layers.append((base + " <inline>", "\n".join(inline)))
    return layers


# ------------------------------------------------------------- claim side ---
def classes_on(line: str, all_classes: set):
    """[(pos, class)] for selector-looking tokens that the sheet defines."""
    hits = []
    for m in SELECTOR_RX.finditer(line):
        if m.group(1) in all_classes:
            hits.append((m.start(), m.group(1)))
    for m in QUOTED_CLASS_RX.finditer(line):
        name = m.group(1)
        if name in all_classes and not name.startswith("-"):
            hits.append((m.start(), name))
    hits.sort()
    seen, out = set(), []
    for pos, name in hits:
        if (pos, name) in seen:
            continue
        seen.add((pos, name))
        out.append((pos, name))
    return out


def sentences(line: str):
    out, start = [], 0
    for m in re.finditer(r"(?<=[.;!?])\s+|\s+[—–]\s+|\s\|\s", line):
        out.append((line[start:m.start()], start))
        start = m.end()
    out.append((line[start:], start))
    return [(t, s) for t, s in out if t.strip()]


def clauses(line: str):
    """[(text, offset)] split at clause separators that cannot be prose commas.

    `;`, `→`/`->` and `|` separate INDEPENDENT statements in the corpus
    (measured: giveback's "Section rhythm: `section-padding` 100px; strip
    padding 60px" bound the strip's 60px to `.section-padding`). A comma stays
    inside the clause because descriptions are comma-joined ("white,
    `padding: 200px 0 270px`").
    """
    # a period+space starts a NEW sentence (". Footer `.click-btn`:"), while a
    # decimal ("0.5rem") and an abbreviation ("e.g. ") must not split
    out, start = [], 0
    for m in re.finditer(r";|→|->|\||\.\s+(?=[A-Z(`*_])", line):
        out.append((line[start:m.start()], start))
        start = m.end()
    out.append((line[start:], start))
    return [(t, s) for t, s in out if t.strip()]


def window_blocks(win: str) -> bool:
    """Does the selector→value window show a DIFFERENT subject?

    Two measured cases: (1) a descendant chain or a "links"/"items" hint
    (`.days li a` — "Day tabs"); (2) a closed parenthetical followed by a comma
    and a new band, with no further declaration in between (garagely:
    "…(`.spad`), hero 170px top/bottom, counter 200px top…"). A comma between
    two DECLARATIONS ("`padding: 35px`, `padding-top: 0`") keeps the subject.
    """
    if DESCENDANT_RX.search(win):
        return True
    if ")" in win:
        tail = win.split(")", 1)[1]
        if "," in tail and not PAD_RX.search(tail):
            return True
    return False


VALUE_CONT_RX = re.compile(r"^(?:-?\d*\.?\d+)\s*(?:px|rem|em|%|pt)?$")


def join_value_continuation(lines, idx, s, all_classes):
    """A shorthand VALUE split across a line break belongs to one claim.

    Measured (2026-10-22e, `tripquest`): the spec wraps a quoted rule as
    ``... padding: 25px 30px`` / ``12px 30px }` `` and the sheet's own rule is
    `padding: 25px 30px 12px 30px`. Reading the first line alone truncates the
    shorthand to two values, which CSS expands to top/bottom=25 — so the
    correct claim was flagged `SPACING-WRONG` against the sheet's real bottom
    of 12px. Only the leading NUMERIC TOKENS of the next line are taken, up to
    the 4-value shorthand limit, and only when the value runs to the end of
    its own line: a following section number ("12. Footer ...") is not a value
    token and a line that names another selector is never swallowed.
    """
    if idx + 1 >= len(lines):
        return s
    pads = list(PAD_RX.finditer(s))
    if not pads:
        return s
    tail_ok = len(s) - pads[-1].end()
    # allow the punctuation a quoted declaration ends with: }`;,)
    if tail_ok > 2 or s[pads[-1].end():].strip("}`;,) "):
        return s
    have = len(re.split(r"\s+", pads[-1].group("val").strip()))
    nxt = lines[idx + 1].strip()
    if not nxt or len(nxt) > 200:
        return s
    lead = []
    rest = re.split(r"\s+", nxt)
    stop = None
    for k, tok in enumerate(rest):
        core = tok.strip("`;,)")
        if not VALUE_CONT_RX.match(core):
            stop = k
            break
        lead.append(core)
        if have + len(lead) >= 4:
            stop = k + 1
            break
    if not lead:
        return s
    # the continuation must CLOSE the declaration on this line ("12px 30px }`"),
    # otherwise the numbers are a new sentence ("padding: 100px 0" / "0 15px 0
    # 55px` — the next band's shorthand"), not this value's tail
    closer = rest[stop] if stop is not None and stop < len(rest) else ""
    if "}" not in closer and "`" not in closer:
        return s
    if classes_on(nxt, all_classes) and have + len(lead) < 4:
        # the next line names another subject AND does not complete the
        # shorthand — that is a different claim, not this value's continuation
        return s
    return s + " " + " ".join(lead)


def comment_lines(txt: str) -> set:
    """1-based line numbers inside an evidence block or an HTML comment.

    Two shapes exist in this corpus and both are the prep's own audit trail, not
    a design claim:
      * a fenced evidence block — `<!-- reference-revalue:start -->` … `:end -->`
      * a plain multi-line comment — `<!--` … `-->`
    Reading a quoted `.btn{border-radius:.25rem}` out of one and comparing it to
    the sheet self-flags the fix (measured 2026-10-23: umami's re-value block).
    """
    out, inside = set(), False
    for i, line in enumerate(txt.splitlines(), 1):
        low = line.lower()
        if re.search(r"<!--[^>]*:start\s*-->", low):
            inside = True
            continue
        if re.search(r"<!--[^>]*:end\s*-->", low):
            inside = False
            continue
        if inside:
            out.add(i)
            continue
        if "<!--" in low and "-->" not in low.split("<!--", 1)[1]:
            inside = True
    return out


def next_line_value_join(lines, i: int, s: str) -> str:
    """Join a shorthand VALUE that wrapped onto the next line.

    `padding: 95px 100px` / `60px; margin: 0 -15px` is one declaration. Without
    the join the claim read as top 95 / bottom 100 while the rule is
    `95px 100px 60px` (measured 2026-10-23: riviera, a false positive).
    `i` is the 1-based line number of `s`, so the continuation is `lines[i]`.
    """
    if i >= len(lines):
        return s
    nxt = lines[i].strip()
    if (nxt and re.match(r"^-?\d", nxt)
            and re.search(r"\d(?:px|rem|em|pt|%)\s*[`|)]*$", s.rstrip())):
        return s.rstrip() + " " + nxt[:60]
    return s


def spacing_claims(txt: str, all_classes: set):
    """[(lineno, selector, sides{'top','bottom'}, raw, ctx, guard)]"""
    claims = []
    lines = txt.splitlines()
    comments = comment_lines(txt)
    for i, line in enumerate(lines, 1):
        if i in comments:
            continue
        s = line.strip()
        if not s or s.startswith(">") or len(s) > 600:
            continue
        s = join_value_continuation(lines, i - 1, s, all_classes)
        s = next_line_value_join(lines, i, s)
        # a claim's sentence can WRAP: the page-scope marker may sit on the
        # previous line ("- **And** the per-page ladder deviations are either
        # honoured (`h1 5.5em`," / "`h2 3em`, `.section .heading {…}`"). Take
        # the previous line's tail only when it is an unfinished sentence that
        # states no padding claim of its own.
        scope_text = s
        if i >= 2:
            prev = lines[i - 2].strip()
            if (prev and len(prev) < 400
                    and not re.search(r"[.;:!?]\s*$", prev)
                    and not PAD_RX.search(prev)
                    and not ZERO_RX.search(prev)):
                scope_text = prev[-200:] + " " + s
        has_pad = (bool(PAD_RX.search(s)) or bool(ZERO_RX.search(s))
                   or bool(GAP_RX.search(s)) or bool(MARGIN_RX.search(s)))
        if not has_pad:
            continue
        if EVIDENCE_LINE_RX.match(s):
            continue
        binds = classes_on(s, all_classes)
        if not binds:
            continue
        if GAP_RX.search(s) and not PAD_RX.search(s):
            claims.append((i, binds[0][1], None, "gap", s[:150], "SPACING-GAP"))
            continue
        if MARGIN_RX.search(s) and not PAD_RX.search(s):
            claims.append((i, binds[0][1], None, "margin", s[:150], "SPACING-GAP"))
            continue

        found = []
        spans = []
        # the two-edge form wins over the one-edge form inside its span
        for m in TOP_BOTTOM_RX.finditer(s):
            top = norm_px(m.group("top"))
            bot = norm_px(m.group("bottom"))
            if top and bot:
                found.append((m.start(), {"top": top, "bottom": bot},
                              f"{m.group('top')} top / {m.group('bottom')} bottom", None))
                spans.append((m.start(), m.end()))
        for m in TOP_ONLY_RX.finditer(s):
            if any(a <= m.start() < b for a, b in spans):
                continue
            top = norm_px(m.group("top"))
            if top:
                found.append((m.start(), {"top": top}, f"{m.group('top')} top", None))
                spans.append((m.start(), m.end()))
        for m in PAD_RX.finditer(s):
            if any(m.start() <= a <= m.end() + 2 for a, b in spans):
                continue
            # "<noun> padding" ("text padding 30px", "strip padding 60px",
            # "card padding 20px") names no selector: the compound noun IS the
            # subject, and binding it to the nearest class is how borough's
            # `.list-team` overlay took the blog card's text padding.
            pass
            raw = m.group("val").strip().strip("`|").strip()
            raw = raw.split("(")[0].strip().rstrip(".,;")
            side = (m.group("side") or "").lower()
            if side in ("left", "right"):
                continue                      # horizontal: not vertical rhythm
            # `padding 150px/10px` is this corpus' TOP/BOTTOM pair idiom (the
            # prep reads it off `padding-top:150px;padding-bottom:10px`).
            # parse_padding() cuts a value at "/" (the shorthand separator), so
            # the pair was read as a single 150px on BOTH edges and every such
            # claim was flagged against its own correct answer (measured
            # 2026-10-23: barbell ×2, both false positives).
            if not side:
                # the pair can also sit OUTSIDE the match: `padding 65px/52px`
                # — PAD_RX stops at the solidus, so the bottom half is the text
                # immediately after it (barbell's `.callto-section` was flagged
                # against its own 65/52 rule).
                tail_pair = re.match(r"\s*[/|]\s*(-?\d*\.?\d+)\s*(px|rem|em|pt|%)",
                                     s[m.end():m.end() + 14])
                if tail_pair and re.fullmatch(r"-?\d*\.?\d+\s*(px|rem|em|pt|%)",
                                              raw.strip()):
                    top = norm_px(raw.strip())
                    bot = norm_px(tail_pair.group(1) + tail_pair.group(2))
                    if top and bot:
                        found.append((m.start(), {"top": top, "bottom": bot},
                                      f"{raw}/{tail_pair.group(1)}{tail_pair.group(2)}",
                                      None))
                        spans.append((m.start(), m.end() + tail_pair.end()))
                        continue
                pair = re.match(r"^(-?\d*\.?\d+)\s*(px|rem|em|pt|%)\s*[/|]\s*"
                                r"(-?\d*\.?\d+)\s*(px|rem|em|pt|%)\s*$", raw)
                if pair:
                    top = norm_px(pair.group(1) + pair.group(2))
                    bot = norm_px(pair.group(3) + pair.group(4))
                    if top and bot:
                        found.append((m.start(), {"top": top, "bottom": bot},
                                      raw, None))
                        spans.append((m.start(), m.end()))
                        continue
            val = parse_padding(raw)
            if val is None:
                found.append((m.start(), None, raw, "SPACING-UNPARSEABLE"))
                continue
            sides = {}
            if side == "top":
                sides["top"] = val["top"]
            elif side == "bottom":
                sides["bottom"] = val["bottom"]
            else:
                toks = re.split(r"[),;→/|]", raw)[0].split()
                sides["top"] = val["top"]
                sides["bottom"] = val["bottom"]
                # `padding: 40px 0` is the corpus' vertical-rhythm idiom: the
                # horizontal zero says nothing about the bottom edge, and the
                # source often collapses one side (`cakeshop`'s
                # `.footer-border{padding-top:39px;padding-bottom:1px}`).
                # Compare the dominant (top) side only, and note the delta.
                if len(toks) == 2 and norm_px(toks[1]) == (0.0, "px"):
                    sides["_collapse"] = True
            found.append((m.start(), sides, raw, None))
        for m in ZERO_RX.finditer(s):
            found.append((m.start(), {"top": (0.0, "px"), "bottom": (0.0, "px")},
                          "no padding", None))
        if not found:
            continue
        for pos, sides, raw, bad in found:
            clause = next(((t, off) for t, off in clauses(s)
                           if off <= pos <= off + len(t) + 2), (s, 0))
            local = [(p - clause[1], n) for p, n in
                     classes_on(clause[0], all_classes)]
            base = clause[1]
            # inside a quoted rule (`\`.brand-area{padding-top:40px}\``) the
            # selector is the compound between "{" and the declaration: if that
            # class is not in the sheet, the quote is of a rule that does not
            # exist and the NEXT class on the line is a different subject
            # (skyport's invented `.brand-area{…}` borrowed `.logo-wrap`'s row).
            head = clause[0][:pos - clause[1]]
            scoped_rule = False
            if "{" in head:
                scope = head.rsplit("}", 1)[-1]      # after the last CLOSED rule
                if "{" in scope:                    # this declaration is in a body
                    sel_text = scope.rsplit("{", 1)[0]
                    compound = re.split(r"[\s>+~]+", sel_text.strip())[-1]
                    local = classes_on(compound, all_classes)
                    if not local:
                        continue                    # the quoted rule is unknown
                    scoped_rule = True
            if scoped_rule:
                owners = [n for _p, n in local]
            elif local:
                # A candidate owner is a class NEAR the value: within 40 chars
                # before it, or anywhere after it in the clause. A selector
                # further back belongs to a different subject in the same long
                # cell (borough: the `.list-team` overlay, then "text padding
                # 30px" 120 chars later).
                before = [(p, n) for p, n in local
                        if p + base <= pos and pos - (p + base) <= 40]
                # a value with NO selector in front of it has no owner in prose
                # (atlas: "padding 12px 0 12px 30px) + `.widget-content` (…)" —
                # that value belongs to the node named in the PREVIOUS clause);
                # only a table row may name its subject in the next cell.
                if not before and not s.lstrip().startswith("|"):
                    continue
                near = before or [(p, n) for p, n in local if p + base > pos]
                # EVERY nearby class is a candidate owner, not just the nearest
                # one: `div.section.section-3` (momentum) and
                # `section.site-section.pt-5` (gazette) are compound subjects and
                # the rule that paints the padding may be keyed off either
                # token. A claim is only wrong when NO interpretation matches.
                owners = []
                for _p, n in near:
                    if n not in owners:
                        owners.append(n)
                # `.section.categories-section.spad` is ONE subject: the class
                # that paints the rhythm can be any component, and the nearest
                # one may be a generic utility (hoodly's `.spad` 100/100 stood in
                # for `.categories-section`'s real `padding-bottom: 88px`).
                for mm in re.finditer(r"\.([A-Za-z][\w-]{1,}(?:\.[A-Za-z][\w-]{1,})+)",
                                      s[:pos]):
                    if pos - mm.end() > 45:
                        continue
                    for c in mm.group(1).split("."):
                        if c in all_classes and c not in owners:
                            owners.append(c)
            elif s.lstrip().startswith("|"):
                after = [(p, n) for p, n in binds if p > pos]
                # a selector AFTER the value owns it only in a table row whose
                # next cell names the subject (`| 4em 0 | .site-footer |`), and
                # only when close — a far chain in the next cell is a DIFFERENT
                # subject (borough's "text padding 30px" + `.list-team` overlay).
                if not after or after[0][0] - pos > 30:
                    continue
                # `.home-button a` names the ANCHOR, not the button (zenflow)
                tail = s[after[0][0] + 1 + len(after[0][1]):][:12]
                if re.match(r"[>+~]|\s+[a-zA-Z]", tail):
                    continue
                # A bare NOUN directly in front of the value is the subject
                # ("form padding `0 110px 0 85px`; `.main` padding 185px 0" —
                # the next cell's class is a different rule: incant was flagged
                # 0/110/0/85 against `.main`'s 185px, its own correct answer).
                if re.search(r"(?i)\b(form|card|panel|text|strip|band|wrapper|"
                             r"input|button|field|box)\s*$", s[:pos]):
                    continue
                owners = [after[0][1]]
            else:
                continue                      # a bare value with no named owner
            # The window between the owner's selector and the value decides
            # whether the value still belongs to THAT subject: `.days li a` /
            # "`.site-menu > li > a`" / "`ul.site-nav-wrap` — top-level links"
            # describe a DESCENDANT's padding, and a closed parenthetical
            # followed by another band's numbers belongs to that other band
            # (garagely: "…(`.spad`), hero 170px top/bottom, counter 200px top…").
            prev = None
            for mm in re.finditer(r"\.([A-Za-z][\w-]{2,})", s[:pos]):
                if mm.group(1) in all_classes:
                    prev = mm
            win = s[prev.end():pos] if prev else ""
            if window_blocks(win):
                continue
            owner = owners
            guard = bad
            if guard is None:
                if APPROX_RX.search(s):
                    guard = "SPACING-APPROX"
                elif RESPONSIVE_RX.search(s):
                    guard = "SPACING-RESPONSIVE"
                elif IMPL_RX.search(s):
                    guard = "SPACING-IMPL"
                elif CENSUS_RX.search(s):
                    guard = "SPACING-CENSUS"
                elif HEDGE_RX.search(s):
                    guard = "SPACING-HEDGE"
                elif HORIZ_RX.search(s):
                    guard = "SPACING-HORIZONTAL"
                elif DELTA_RX.search(s):
                    guard = "SPACING-DELTA"
                elif PAGESCOPE_RX.search(scope_text):
                    # the claim quotes a DIFFERENT page of the same theme's
                    # ladder (aisle: "the per-page ladder deviations … `.section
                    # .heading{padding-bottom:30px}`" is 02-rsvp/css/styles.css,
                    # while the landing sheet paints 40px). The axis reads the
                    # landing sheets only, so a page-scoped claim is not
                    # adjudicable here — a note, never a flag.
                    guard = "SPACING-PAGE-SCOPE"
            frag = s
            if len(s) > 240:
                lo = max(0, pos - 120)
                frag = s[lo:pos + 120]
            claims.append((i, owner, sides, raw, frag[:170], guard))
    return merge_partials(claims)


def merge_partials(claims):
    """Fold same-line single-side overrides into the shorthand they refine.

    `- **Text block (`.work .text`):** `padding: 35px`, `padding-top: 0``
    (fjord) is ONE computed state — top 0, bottom 35 — and the sheet paints
    exactly that. Reading the two declarations as two independent claims flags
    the shorthand against the corrected edge.
    """
    def key(c):
        owners = c[1] if isinstance(c[1], list) else [c[1]]
        return (c[0], tuple(owners))

    groups = {}
    for c in claims:
        groups.setdefault(key(c), []).append(c)
    out = []
    for _k, items in groups.items():
        sh = [c for c in items if c[2] and "top" in c[2] and "bottom" in c[2]]
        part = [c for c in items if c[2] and (("top" in c[2]) != ("bottom" in c[2]))]
        if sh and part:
            base = {k: v for k, v in sh[0][2].items() if k != "_collapse"}
            for p in part:
                base.update({k: v for k, v in p[2].items()})
            out.append((sh[0][0], sh[0][1], base, sh[0][3], sh[0][4], sh[0][5]))
            out.extend(c for c in items if c not in sh and c not in part)
        else:
            out.extend(items)
    out.sort(key=lambda c: (c[0],))
    return out


# ------------------------------------------------ responsive-ladder claims ---
# "`.site-section` padding 3em 0 (7em 0 ≥768px)" — a BASE value plus a value
# attached to a breakpoint. 510 `≥NNNpx`/`≤NNNpx` tokens live across 186 specs
# and every one of them was dropped by the `SPACING-RESPONSIVE` guard, so the
# DIRECTION of the ladder (does the band grow or shrink at desktop?) was never
# read by any axis. Measured 2026-10-22f: `steeple` claimed "3em 0 (7em ≥768px)"
# while the live sheet runs 112px → 85px → 55px DOWNWARD.
LADDER_BP_RX = re.compile(
    r"(?P<dir>≥|>=|≤|<=|\bat\s+least\b|\bat\s+most\b)\s*"
    r"(?P<n>\d{1,4}(?:\.\d+)?)\s*(?P<u>px|em|rem)\b")
# the numeric run immediately BEFORE a breakpoint token, in source order;
# a bridge word ("… 35px` at ≤576px") is part of the same claim, not a gap
VALUE_TAIL_RX = re.compile(
    r"(?P<v>(?:-?\d*\.?\d+\s*(?:px|rem|em|pt|%)|0)"
    r"(?:[\s,/]*(?:-?\d*\.?\d+\s*(?:px|rem|em|pt|%)|0)){0,3})"
    r"\s*[`)\]]?\s*(?:at|on|below|above|from|via|starting|only)?\s*$")
# the ladder pair must stay inside ONE claim window: a table cell, or a
# sentence, never the neighbouring band's numbers
CELL_RX = re.compile(r"\.\s+(?=[A-Z(`*_])")
SENT_PAD_RX = re.compile(r"(?i)(?<![\w-])padding(?:\s*-\s*(?:top|bottom))?\b")
FREE_RX = re.compile(r"/")
# "<noun> padding" ("services cards padding 40px 25px") names no selector: the
# compound noun IS a new subject and binding it to the last class is how
# `succor`'s services-card rhythm was read as `.ftco-section`'s (2026-10-22f).
NOUN_BEFORE_RX = re.compile(r"(?:[`|(]\s*|\)\s*)?([a-z][a-z-]{2,})\s+$")


def _trim_head(head: str) -> str:
    """Cut a claim window back to its own table cell / sentence."""
    bar = head.rfind("|")
    if bar != -1:
        head = head[bar + 1:]
    cut = 0
    for m in CELL_RX.finditer(head):
        cut = m.end()
    return head[cut:]


def _sides_from_raw(raw: str, single_top=False):
    """A prose shorthand → {top,bottom} (+`_collapse`), like the base path.

    `single_top` reads a ONE-token value as the TOP edge: the corpus' ladder
    idiom is "padding: 180px 0 25px (70px ≤991px)" — the bottom 25px stays put
    while the top falls to 70, so expanding "70px" to all four sides contradicts
    a sheet that is right (measured 2026-10-22f: journee, ivory).
    """
    raw = raw.strip().strip("`|").strip().rstrip(".,;")
    val = parse_padding(raw)
    if val is None:
        return None
    toks = re.split(r"[),;→/|]", raw)[0].split()
    if single_top and len(toks) == 1:
        return {"top": val["top"]}
    sides = {"top": val["top"], "bottom": val["bottom"]}
    if len(toks) == 2 and norm_px(toks[1]) == (0.0, "px"):
        sides["_collapse"] = True
    return sides


def ladder_claims(txt, classes, padded=None):
    """[(lineno, owners, base_sides|None, bp_px, dir, ladder_sides, ctx)].

    Only the PAIRED form is extracted (`<base> … (<ladder value> ≥Npx)`); a lone
    value at a breakpoint ("`padding-top:35px` at ≤576px") states no direction
    and stays unread rather than being guessed at.
    """
    out = []
    lines = txt.splitlines()
    for i, line in enumerate(lines, 1):
        if not LADDER_BP_RX.search(line) or not SENT_PAD_RX.search(line):
            continue
        for m in LADDER_BP_RX.finditer(line):
            bp = norm_px(m.group("n") + m.group("u"))
            if bp is None or not 200 <= bp[0] <= 2000:
                continue
            direction = "up" if m.group("dir") in ("≥", ">=") or \
                re.search(r"least", m.group("dir"), re.I) else "down"
            head_full = line[:m.start()]
            tail = VALUE_TAIL_RX.search(head_full)
            if not tail:
                continue
            raw_ladder = tail.group("v").strip()
            val_start = tail.start("v")
            base_override = None
            if FREE_RX.search(raw_ladder):
                # the "base / ladder" idiom ("padding 4em 0 / 8em ≥768px") is a
                # PAIR split by the slash; three or more segments are prose
                # sides ("`20px / 14px / 50px`") and stay unread.
                segs = [s.strip() for s in raw_ladder.split("/") if s.strip()]
                if len(segs) != 2:
                    continue
                base_override = _sides_from_raw(segs[0], single_top=True)
                raw_ladder = segs[1]
            ladder_sides = _sides_from_raw(raw_ladder, single_top=True)
            if ladder_sides is None:
                continue
            window = _trim_head(line[:val_start])
            if not window.strip():
                continue
            base_off = val_start - len(window)   # window is a SUFFIX of line[:val_start]
            prepended = False
            # a wrapped class CHAIN ("`div.banner_content.d-flex" / "flex-md-row.
            # flex-column` (padding 194px 0") puts the subject on the line above:
            # a short window with NO class the sheet actually pads means the claim
            # starts mid-sentence, so the previous line's tail joins the subject
            # search (cargomate/lagoon, 2026-10-22f). A window that already names a
            # padded class is left alone — the previous line is another band.
            if len(window) < 45 and i > 1 and lines[i - 2].count("`") % 2 \
                    and not any(n in (padded or ()) for _p, n in classes_on(window, classes)):
                # only a SPAN left OPEN on the line above (odd backtick count)
                # continues this claim's subject — an even line is a finished
                # sentence whose classes belong to another band (canvas: the
                # `.footer` rhythm follows a complete `.site-section` line)
                window = lines[i - 2][-120:] + window
                prepended = True
            local = classes_on(window, classes)
            if not local:
                continue
            # the owner is the class NEAR the ladder value (within 80 chars), or
            # the next cell's subject in a table row. With a prepended line every
            # class in the (deliberately narrowed) window is a candidate.
            owners = []
            if prepended:
                owners = [n for _p, n in local][:4]
            else:
                for pos, name in local:
                    if 0 <= val_start - (base_off + pos) <= 80:
                        if name not in owners:
                            owners.append(name)
            if not owners:
                # a table row may name its subject in the NEXT cell — and only a
                # cell boundary proves it ("| `4em 0` | `.site-footer` |"); the
                # next selector in the SAME cell is another band (aisle's
                # `.heading` follows `.section`'s rhythm inside one cell)
                tail = line[val_start:]
                bar = tail.find("|")
                if 0 <= bar <= 30:
                    after = [(p, n) for p, n in classes_on(tail[:bar], classes)]
                    if after:
                        owners = [after[0][1]]
            if not owners:
                continue
            # the BASE value: the last padding declaration before the ladder value
            pm = None
            for cand in PAD_RX.finditer(window):
                pm = cand
            base_sides = base_override
            if base_sides is None and pm is not None and len(window) - pm.end() <= 60:
                # a compound NOUN before "padding" opens a new subject that the
                # prose never names as a class ("services cards padding 40px 25px")
                noun = NOUN_BEFORE_RX.search(window[:pm.start()])
                if noun and noun.group(1) not in classes:
                    continue
                after = window[pm.end():pm.end() + 6].strip().lower()
                base_sides = _sides_from_raw(pm.group("val"),
                                             single_top=after.startswith("top"))
            ctx = line[max(0, val_start - 90):m.end()][:170]
            out.append((i, owners, base_sides, bp[0], direction,
                        ladder_sides, ctx))
    return out


def ladder_postfix(txt) -> int:
    """Count breakpoint-then-value lines the axis deliberately leaves unread.

    "(`≤576px 50px`)" states a number AFTER the breakpoint, and in a table cell
    that number may belong to any property (font-size, width, radius) — binding
    it to padding would invent a claim. Counted so the audit record is honest
    about the residual, never adjudicated.
    """
    n = 0
    for line in txt.splitlines():
        if not SENT_PAD_RX.search(line):
            continue
        for m in LADDER_BP_RX.finditer(line):
            if re.match(r"\s*[`(]?\s*-?\d", line[m.end():]):
                n += 1
    return n


def _sheet_sides(sd, keys=("top", "bottom")):
    return {k: px(sd, k) for k in keys if px(sd, k) is not None}


def ladder_variants(owner: str, base_map, media_map):
    """Variants whose SUBJECT compound is the owner (not a descendant's rule).

    `.single-page .blockquote-text{padding-left:114px}` is the blockquote's
    padding, not `.single-page`'s, and it carries no vertical side at all — the
    same subject rule `variants_for()` applies on the base axis.
    """
    rx = re.compile(r"\." + re.escape(owner) + r"(?![\w-])")

    def keep(sel: str) -> bool:
        if not rx.search(sel):
            return False
        last = re.split(r"[\s>+~]+", sel.strip())[-1]
        return bool(rx.search(last))

    base = [v for s, vs in base_map.items() if keep(s) for v in vs]
    media = [t for s, vs in media_map.items() if keep(s) for t in vs]
    return base, media


def _bp_compatible(lo, hi, bp, direction):
    if direction == "up":
        return lo is not None and abs(lo - bp) <= 2
    return hi is not None and abs(hi - bp) <= 2


def adjudicate_ladder(claim, base_map, media_map):
    """(flag|None, note|None) for one paired ladder claim.

    Every candidate owner is tried independently and the best verdict wins (a
    flag beats a clean pass beats a note): a prep's prose often names a
    Bootstrap utility (`.flex-column`, `.p-lr-15-sm`) next to the value, and the
    class that actually paints the rhythm can be the one before it. Measured
    2026-10-22f: cargomate/impending bound the ladder to the utility and lost the
    real subject.
    """
    lineno, owners, base_sides, bp, direction, ladder_sides, ctx = claim
    best_flag, best_note, clean = None, None, False
    for owner in owners:
        flag, note = _adjudicate_one(owner, lineno, base_sides, bp, direction,
                                     ladder_sides, ctx, base_map, media_map)
        if flag:
            if best_flag is None:
                best_flag = flag
        elif note is None:
            clean = True
        elif best_note is None:
            best_note = note
    # "a claim is only wrong when NO interpretation matches" (the base axis'
    # rule): one owner matching the sheet answers the claim, and a wrong owner
    # guessed from a wrapped class chain must not outvote it.
    if clean:
        return None, None
    if best_flag:
        return best_flag, None
    return None, best_note


def _adjudicate_one(owner, lineno, base_sides, bp, direction, ladder_sides, ctx,
                    base_map, media_map):
    sel = owner
    base_all, media_all = ladder_variants(owner, base_map, media_map)
    if not media_all:
        return None, ("LADDER-NO-MEDIA",
                      f"line {lineno}: `.{sel}` sets no breakpoint rule; ctx: {ctx}")
    ladder_cmp = 0
    at_bp = False
    anywhere = False
    for lo, hi, sd in media_all:
        ss = _sheet_sides(sd)
        good, cmp_ = rule_matches(ladder_sides, ss)
        ladder_cmp += cmp_
        if good and _bp_compatible(lo, hi, bp, direction):
            at_bp = True
        if good:
            anywhere = True
    if ladder_cmp == 0:
        return None, ("LADDER-ONE-SIDE",
                      f"line {lineno}: the breakpoint rule of `.{sel}` sets no "
                      f"comparable side; ctx: {ctx}")
    base_cmp, base_ok = 0, base_sides is None
    if base_sides is not None and not base_all:
        # the claim states a base value the owner's own rule never paints (the
        # value may live in a sheet this axis did not load, or the subject may be
        # a compound the prep named loosely) — unverifiable, never a flag
        return None, ("LADDER-NO-BASE",
                      f"line {lineno}: `.{sel}` states a base value that the sheet's "
                      f"own rule for that subject does not paint; ctx: {ctx}")
    if base_sides is not None:
        for v in base_all:
            ss = _sheet_sides(v)
            good, cmp_ = rule_matches(base_sides, ss)
            base_cmp += cmp_
            if good:
                base_ok = True
    if base_ok and at_bp:
        return None, None
    if anywhere and not at_bp:
        brs = sorted({f"{'≥' if lo else '≤'}{int(lo or hi)}" for lo, hi, _sd in media_all})
        return None, ("LADDER-BREAKPOINT",
                      f"line {lineno}: `.{sel}` ladder value {ladder_sides['top'][0]:.0f}px "
                      f"stated at {'≥' if direction == 'up' else '≤'}{bp:.0f}px; the sheet "
                      f"runs it at {', '.join(brs[:4])}; ctx: {ctx}")
    shown = []
    for lo, hi, sd in media_all:
        ss = _sheet_sides(sd)
        tag = f"{'≥' if lo else '≤'}{int(lo or hi)}"
        shown.append(f"{tag}:{int(ss['top'])}" if "top" in ss else f"{tag}:-")
    tops = sorted({int(_sheet_sides(v)["top"]) for v in base_all
                   if "top" in _sheet_sides(v)})
    base_shown = ", ".join(str(t) for t in tops[:3]) if tops else "-"
    # the ladder value IS the sheet's base rule → the two numbers were swapped
    if base_sides is not None and any(
            rule_matches(ladder_sides, _sheet_sides(v))[0] for v in base_all):
        return ("LADDER-INVERTED",
                f"line {lineno}: `.{sel}` claims base "
                f"{base_sides['top'][0]:.0f}px / ≥{bp:.0f}px "
                f"{ladder_sides['top'][0]:.0f}px, but the sheet's BASE is "
                f"{ladder_sides['top'][0]:.0f}px and its breakpoints paint "
                f"{', '.join(shown[:4])}"), None
    detail = (f"line {lineno}: `.{sel}` claims base "
              f"{base_sides['top'][0]:.0f}px" if base_sides is not None
              else f"line {lineno}: `.{sel}` claims")
    return ("LADDER-WRONG",
            f"{detail} / {'≥' if direction == 'up' else '≤'}{bp:.0f}px "
            f"{ladder_sides['top'][0]:.0f}px; sheet base {base_shown[0]}px, "
            f"breakpoints {', '.join(shown[:4])}"), None


# ------------------------------------------------------------- verdicts ---
def side_match(c: float, sh: float) -> bool:
    if c <= SMALL and sh <= SMALL:
        return True
    if abs(c - sh) <= TOL_ABS:
        return True
    base = max(abs(c), abs(sh), 1.0)
    return abs(c - sh) / base <= TOL_REL


def rule_matches(sides, sheet_sides):
    """Compare only the sides the SHEET rule explicitly sets."""
    compared = 0
    keys = ("top",) if sides.get("_collapse") else ("top", "bottom")
    for key in keys:
        if key not in sides or key not in sheet_sides:
            continue
        compared += 1
        if not side_match(sides[key][0], sheet_sides[key]):
            return False, compared
    return compared > 0, compared


def variants_for(sel: str, pmap):
    """Every padding variant whose selector mentions `.sel` as a class token.

    Lenient on purpose: `.about_area` and `.about_area.alt` both paint the
    band, and a claim that matches ANY of them is not a defect.
    """
    rx = re.compile(r"\." + re.escape(sel) + r"(?![\w-])")
    out, loose = [], []
    for s, variants in pmap.items():
        if not rx.search(s):
            continue
        # the SUBJECT of a selector is its last compound: `.room_part
        # .container-fluid .room_1 .room_text_1` paints the ROOM TEXT's
        # padding, not the container's (rentora's "container-fluid padding 0"),
        # and `.site-section.pt-5` is still the site-section itself.
        last = re.split(r"[\s>+~]+", s.strip())[-1]
        (out if rx.search(last) else loose).extend(variants)
    return out


DRIFT_RX = re.compile(
    r"(?i)(reference[-\s]drift|the live preview was redesigned|"
    r"the demo at this url (?:was|has been) redesigned)")


def audit_spec(txt, slug, layers, cache=None):
    pmap = pad_rules(layers)
    base_map, media_map = pad_rules_media(layers)
    classes = css_classes(layers)
    claims = spacing_claims(txt, classes)
    rhythms = section_rhythms(pmap)
    flags, notes = [], []
    adjudicated = 0
    if DRIFT_RX.search(txt):
        # the prep carries a documented REFERENCE-DRIFT note: the live preview
        # now serves a different release of the design than the one the prep
        # (and the shipped app) follows, so no claim is adjudicable here
        # (measured 2026-10-22e: `industrial`'s Bootstrap-4 poster design vs the
        # v3.0.0 kit rebuild at the same URL)
        return [], [("SPACING-DRIFT",
                     f"{len(claims)} claims not adjudicated: the prep records a "
                     f"reference drift for this slug")], 0
    # the RESPONSIVE-LADDER layer: a base value + a breakpoint value, read
    # against the sheet's own @media split (2026-10-22f)
    padded = set()
    for sel in list(base_map) + list(media_map):
        for m in re.finditer(r"\.([A-Za-z_][\w-]{1,})", sel):
            padded.add(m.group(1))
    postfix = ladder_postfix(txt)
    if postfix:
        notes.append(("LADDER-POSTFIX",
                      f"{postfix} breakpoint-then-value statement(s) left unread "
                      f"(the number may belong to any property)"))
    for lc in ladder_claims(txt, classes, padded):
        guard = None
        if APPROX_RX.search(lc[6]):
            guard = "LADDER-APPROX"
        elif PAGESCOPE_RX.search(lc[6]):
            guard = "LADDER-PAGE-SCOPE"
        elif IMPL_RX.search(lc[6]):
            guard = "LADDER-IMPL"
        if guard:
            notes.append((guard, f"line {lc[0]}: {lc[6]}"))
            continue
        flag, note = adjudicate_ladder(lc, base_map, media_map)
        if flag:
            flags.append(flag)
        elif note:
            notes.append(note)
        adjudicated += 1
    for lineno, owners, sides, raw, ctx, guard in claims:
        sel = "/".join(owners) if isinstance(owners, list) else owners
        if guard:
            notes.append((guard, f"line {lineno}: {ctx}"))
            continue
        variants = []
        for o in (owners if isinstance(owners, list) else [owners]):
            variants.extend(v for v in variants_for(o, pmap) if v not in variants)
        if not variants:
            notes.append(("SPACING-ABSENT",
                          f"line {lineno}: `.{sel}` carries no padding rule; ctx: {ctx}"))
            continue
        ok, compared = False, 0
        live = []
        # `4em / 5em` is a TWO-reading idiom: top/bottom of one rule, or the base
        # value and its breakpoint value (miniblog's `.site-footer` is
        # `padding:4em 0` at base and `5em 0` under a media query). Only a claim
        # whose BOTH readings disagree is wrong.
        readings = [sides]
        if "/" in str(raw) and sides.get("top") and sides.get("bottom"):
            readings.append({"top": sides["top"], "bottom": sides["top"]})
        for v in variants:
            sheet_sides = {k: px(v, k) for k in ("top", "bottom") if px(v, k) is not None}
            if not sheet_sides:
                continue
            live.append(sheet_sides)
            for rd in readings:
                good, cmp_ = rule_matches(rd, sheet_sides)
                compared = max(compared, cmp_)
                if good:
                    ok = True
                    break
            if ok:
                break
        if not live:
            notes.append(("SPACING-ABSENT", f"line {lineno}: `.{sel}` padding is %-based"))
            continue
        if compared == 0:
            notes.append(("SPACING-ONE-SIDE",
                          f"line {lineno}: `.{sel}` sets no comparable side; ctx: {ctx}"))
            continue
        if sides.get("_collapse") and sides.get("bottom"):
            deltas = [abs(sides["bottom"][0] - d["bottom"]) for d in live if "bottom" in d]
            if deltas and min(deltas) > TOL_ABS:
                notes.append(("SPACING-COLLAPSED",
                              f"line {lineno}: `.{sel}` claimed {raw!r} but the sheet "
                              f"collapses the opposite edge; ctx: {ctx}"))
        adjudicated += 1
        if ok:
            continue
        shown = sorted({f"{k}:{int(v)}" for d in live for k, v in d.items()})
        if len({tuple(sorted(d.items())) for d in live}) > 2:
            notes.append(("SPACING-MULTI",
                          f"line {lineno}: `.{sel}` has {len(live)} rhythms {shown[:6]}"))
            continue
        flags.append(("SPACING-WRONG",
                      f"line {lineno}: `.{sel}` claimed {raw!r} || live: {', '.join(shown[:6])}"))
    return flags, notes, adjudicated


# ------------------------------------------------------------------ I/O ---
def read_specs(root, ref, worktree):
    if worktree:
        base = os.path.join(root, "openspec", "specs")
        out = []
        for dirpath, _d, files in os.walk(base):
            if "spec.md" in files:
                out.append(os.path.relpath(os.path.join(dirpath, "spec.md"), root))
        return sorted(out)
    out = subprocess.run(["git", "ls-tree", "-r", "--name-only", ref, "openspec/specs"],
                         cwd=root, capture_output=True, text=True).stdout.split()
    return sorted(p for p in out if p.endswith("/spec.md"))


def read_text(root, ref, path, worktree):
    if worktree:
        return open(os.path.join(root, path), encoding="utf-8", errors="replace").read()
    return subprocess.run(["git", "show", f"{ref}:{path}"], cwd=root,
                          capture_output=True, text=True).stdout


def cheap_prefilter(txt: str) -> bool:
    return bool(PAD_RX.search(txt) or ZERO_RX.search(txt))


class Fetcher:
    def __init__(self, cache, net):
        self.cache, self.net = cache, net
        self.last_codes = {}
        os.makedirs(cache, exist_ok=True)

    def __call__(self, url):
        p = os.path.join(self.cache, hashlib.sha1(url.encode()).hexdigest())
        meta = p + ".json"
        if os.path.exists(meta):
            try:
                m = json.load(open(meta))
                return m["code"], (open(p, "rb").read() if os.path.exists(p) else b"")
            except Exception:
                pass
        if not self.net:
            return None, b""
        code, body = "ERR", b""
        try:
            q = subprocess.run(["curl", "-sSL", "-A", UA, "-m", "40", "-o", p,
                                "-w", "%{http_code}", url], capture_output=True, text=True)
            code = q.stdout.strip() or "ERR"
            body = open(p, "rb").read() if os.path.exists(p) else b""
        except Exception:
            pass
        json.dump({"code": code, "url": url}, open(meta, "w"))
        if code != "200":
            self.last_codes[code] = self.last_codes.get(code, 0) + 1
        return code, body


def resolve(fetch, slug, name=None):
    # catalog map first: families whose demo is not at `/theme/<slug>/`
    # (`/etc/bwiz/…`, `/etc/404/…`, `/theme/<de-hyphenated>/`) used to come
    # back "dead" and their claims were never compared with anything.
    url, html = CR.demo(fetch, slug, name)
    if url:
        return url, html
    for url in (PREVIEW.format(slug=slug), PREVIEW_BOOTSTRAP.format(slug=slug),
                PREVIEW_ETC.format(slug=slug)):
        code, body = fetch(url)
        if str(code) == "200" and len(body) > 1200:
            return url, body.decode("utf-8", "replace")
    return None, ""


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default="/root/free-react-templates-p2")
    ap.add_argument("--ref", default=None)
    ap.add_argument("--worktree", action="store_true", default=True)
    ap.add_argument("--slug", default=None)
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--cache", default="/tmp/spacing-cache")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--sample", type=int, default=0)
    ap.add_argument("--jobs", type=int, default=1,
                    help="parallel spec workers (6 is safe; 20 trips the wall)")
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--json", default=None)
    a = ap.parse_args(argv)

    root = a.prep_root
    worktree = a.worktree
    ref = a.ref
    if not os.path.isdir(os.path.join(root, "openspec", "specs")):
        print(f"not a prep tree: {root}", file=sys.stderr)
        return 2
    if ref is not None:
        worktree = False
    fetch = Fetcher(a.cache, not a.no_net)
    CR.configure(fetch, a.cache)

    specs = read_specs(root, ref, worktree)
    if a.sample:
        random.seed(a.sample)
        specs = sorted(random.sample(specs, min(a.sample, len(specs))))
    if a.limit:
        specs = specs[:a.limit]

    total_flags = total_claims = 0
    report, scanned, skipped_cheap, dead = [], 0, 0, 0
    by_slug, lock = {}, threading.Lock()
    blocked = []

    def work(path):
        name = path.split("/")[2].replace("template-", "")
        txt = read_text(root, ref, path, worktree)
        if not cheap_prefilter(txt):
            return ("skip", name, None, None, 0)
        slug = None
        for rx in SLUG_RX:
            m = rx.search(txt)
            if m:
                slug = m.group(1)
                break
        if not slug:
            return ("noslug", name, None, None, 0)
        if a.slug and a.slug not in (slug, name):
            return ("filtered", name, None, None, 0)
        with lock:
            hit = slug in by_slug
        if not hit:
            url, html = resolve(fetch, slug, name)
            if url is None:
                return ("dead", name, slug, None, 0)
            layers = sheet_layers(html, url, fetch)
            if not layers:
                return ("nosheet", name, slug, None, 0)
            with lock:
                by_slug[slug] = (url, layers)
        url, layers = by_slug[slug]
        flags, notes, nclaims = audit_spec(txt, slug, layers, a.cache)
        return ("ok", name, slug, (url, flags, notes, nclaims), nclaims)

    jobs = max(1, a.jobs)
    if jobs == 1:
        results = [work(p) for p in specs]
    else:
        from concurrent.futures import ThreadPoolExecutor
        results = []
        with ThreadPoolExecutor(max_workers=jobs) as ex:
            for res in ex.map(work, specs):
                results.append(res)
                if res[0] == "dead" and fetch.last_codes.get("403"):
                    blocked.append(res[1])
                    break

    for kind, name, slug, payload, nclaims in results:
        if kind in ("skip", "filtered", "noslug"):
            skipped_cheap += kind == "skip"
            continue
        if kind == "dead":
            if a.verbose:
                print(f"-- {name}: preview unreachable ({slug})")
            dead += 1
            continue
        if kind == "nosheet":
            print(f"-- {name}: no stylesheet ({slug})")
            continue
        scanned += 1
        url, flags, notes, nclaims = payload
        total_flags += len(flags)
        total_claims += nclaims
        for fkind, msg in flags:
            print(f"FLAG {fkind:<16} {name:<18} [{slug}] {msg}")
        if a.verbose:
            for nkind, msg in notes:
                print(f"  note {nkind:<18} {name:<16} {msg}")
        if flags:
            report.append({"name": name, "slug": slug, "url": url,
                           "flags": [{"kind": k, "detail": d} for k, d in flags],
                           "claims": nclaims})

    print(f"\n{scanned} specs scanned ({skipped_cheap} skipped: no padding claim, "
          f"{dead} with no reachable preview) | {total_claims} adjudicated "
          f"padding claims | {total_flags} flags | {len(report)} preps flagged")
    if blocked:
        print(f"!! BOT WALL: a 403 arrived while probing — stopped after {len(blocked)} "
              f"items; results are partial, do NOT fix from them.")
    if a.json:
        json.dump(report, open(a.json, "w"), indent=1)
    return 2 if blocked else (1 if total_flags else 0)


if __name__ == "__main__":
    sys.exit(main())
