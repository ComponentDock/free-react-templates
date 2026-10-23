#!/usr/bin/env python3
"""verify-shape-tokens.py — SHAPE / RADIUS axis (audit).

Every prep tells the implementer what a button LOOKS like in words: "pill
(border-radius: 30px)", "sharp rectangle (no border-radius)", "rounded 4px".
That sentence is the single most load-bearing visual instruction in a spec —
get it wrong and every CTA in the recreation has the wrong silhouette — and
nothing in the suite has ever read it:

| axis | reads |
| --- | --- |
| `token-census.py` / `token-coverage.py` | hex colours only (`HEX_RX` is the whole extractor) |
| `verify-live-tokens.py` | declared hex tokens vs the live sheet |
| `verify-type-axis.py` | `font-family` / `font-weight` vs the prescribed GF link |
| `verify-cardinality-media.py` | counts of elements + asset basenames |
| `verify-section-order.py` | document order |
| `verify-image-facts.py` | pixels of a live IMAGE file, `<picture>` delivery |
| **`verify-shape-tokens.py`** | **the `border-radius` a spec states for a button/card/field vs the rules the live stylesheet actually paints** |

DIRECTIONS
  SHAPE-WRONG     the claim NAMES a selector the live sheets style, and that
                  rule's radius disagrees with the claim (exact, ±1 px, or the
                  qualitative class sharp/slight/round/pill)
  SHAPE-CONFLICT  a generic claim ("buttons are pills 30px") matches NO
                  button-ish rule in ANY sheet the page loads, while the sheets
                  DO paint button radii

NOTES (never flags)
  SHAPE-ABSENT    the named selector carries no `border-radius` rule at all
                  (a rectangle is the CSS default — correct only for a SHARP claim)
  SHAPE-APPROX    the claim is framed as sampled/approximate (`~`, "sampled",
                  "approx", "from the screenshot") — docs/replication.md allows
                  it, but it is not a CSS fact
  SHAPE-HOVER     the claim is about a `:hover` state (the sheet usually
                  restates the same radius; a differing hover radius is a state
                  note, not a contradiction)
  SHAPE-MULTI     the sheets paint more than one radius class on button-ish
                  rules and the claim matched none of the named selectors
  NO-SLUG / NO-SHEET / NO-CLAIM / PCT-RADIUS / SIBLING-SCOPED

Usage:
  python3 verify-shape-tokens.py [--prep-root DIR] [--ref GITREF] [--slug S]
                                 [--all] [--no-net] [--cache DIR] [--limit N]
                                 [--sample SEED] [--verbose] [--json OUT]
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
RULE_RX = re.compile(r"([^{}@]+)\{([^{}]*)\}")
AT_RX = re.compile(r"@(media|supports|layer|container)[^{]*\{", re.I)
RAD_RX = re.compile(r"border-radius\s*:\s*([^;}!]+)")
SLUG_RX = [
    re.compile(r"Source slug:\s*`?([A-Za-z0-9._-]+)"),
    re.compile(r"colorlib\.com/wp/template/([a-z0-9._-]+)/"),
    re.compile(r"preview\.colorlib\.com/theme/(?:bootstrap/)?([A-Za-z0-9._-]+)/"),
]

BTN_CUE = re.compile(r"(?i)(?:^|[^a-z])(btn|button|buttons|cta)(?:[^a-z]|$)")
# a claim must be ABOUT the primary CTA for the generic (unnamed-selector) path:
# the corpus also says "square outlined social buttons", "nav links … Log In",
# "slider arrow buttons" — real shapes, but not the silhouette an implementer
# copies for the CTA, and the sheet keys them off other selectors.
PRIMARY_SUBJECT_RX = re.compile(
    r"(?i)\b(primary|main|cta|hero|call[- ]to[- ]action|submit|get started|"
    r"booking|order now|shop now|sign ?up)\b")
NON_CTA_SUBJECT_RX = re.compile(
    r"(?i)\b(social|nav|navbar|footer|icon|tab|tabs|badge|chip|dot|bullet|"
    r"arrow|toggle|menu|close|slider|pagination|accordion|breadcrumb|"
    r"links?)\b")
# a Tailwind/utility build paints radii on markup classes (`.rounded-full`), not
# on `.btn` — a class-rule comparison cannot decide those claims.
UTILITY_BUILD_RX = re.compile(r"\.rounded-(?:full|none|sm|md|lg|xl|2xl|3xl)\s*\{")
# a DOTTED version query or a `kit/` path = the host's REBUILT demo (3.x kit).
REBUILT_RX = re.compile(r"[?&]v=\d+(?:\.\d+)+|/kit/")
# a button-ish selector: a class token containing "btn", a bare `button`
# element, or a submit-type input. `main_btn`, `cta_btn`, `btn-round` all count
# (measured: heats `healio`'s CTA is `.button`, not `.btn`).
BTN_SEL_RX = re.compile(
    r"(?i)(?:^|[\s,>+~(])(?:button\b|\[type\s*=\s*[\"']?submit)"
    r"|\.[\w-]*btn[\w-]*|\.[\w-]*button[\w-]*"
    # nav-CTA idioms: `.nav-item.cta > a` is the theme family's primary button
    # and contains neither "btn" nor "button" (measured on palate/peregrine/
    # slugger/leadwave — every one of them was flagged for it)
    r"|\.[\w.-]*cta[\w-]*(?:\s*>|\s+a\b|$|,)"
    # `.submit` / `.submit-btn` / `.newsletter-submit` is the form's primary
    # control and carries no "btn"/"button"/"cta" token. Leaving it out of the
    # pool shrank every generic claim to the whitespace `button{border-radius:0}`
    # reset, which then voted "sharp" against a 40px pill (measured 2026-10-23:
    # adieu + footer-glow, both false positives on bft/bootstrap-footer-16).
    r"|\.[\w-]*submit[\w-]*")

SHAPE_WORD_RX = re.compile(
    r"(?i)(pill[- ]?shap\w*|\bpill\b|sharp\b|squared?\b|rectangular\b|"
    r"no\s+border-radius|without\s+border-radius|zero\s+radius)")
NUM_RX = re.compile(r"(\d+(?:\.\d+)?)\s*(px|rem|em|%|pt)?")
SELECTOR_RX = re.compile(r"`?\.([a-zA-Z][\w-]{2,})`?")

APPROX_RX = re.compile(
    r"(?i)(sampled|approx\.?|approximate|\bfrom the screenshot\b|"
    r"screenshot[- ]sampled|estimate[d]?|~\s*\d)")
HOVER_RX = re.compile(r"(?i):hover|on hover|hover (?:state|radius)")
SIBLING_RX = re.compile(
    r"(?i)(sibling|other template|another (?:template|design)|distinct from|"
    r"neighbouring design|neighboring design|brother|of Modal \d+|"
    r"the launch page uses)")
DELTA_RX = re.compile(r"(?:→|->)\s*`?[^`\s]*radius|(?:was|supersedes|superseded)")
# lines that quote OUR OWN implementation guidance rather than the source
IMPL_RX = re.compile(r"(?i)(the recreation|our (?:app|implementation)|Tailwind|"
                     r"\brc-|rounded-(?:sm|md|lg|xl|full|none)\b)")


def norm_px(tok: str):
    """'30px' / '.25rem' / '50%' / '0' -> (value, unit). None when not a length."""
    tok = tok.strip().lower()
    m = re.match(r"^(-?\d*\.?\d+)\s*(px|rem|em|%|pt)?$", tok)
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


def radius_tokens(raw: str):
    """All length tokens of a `border-radius` value, or None if unparseable."""
    out = []
    for tok in raw.replace("/", " ").split():
        p = norm_px(tok)
        if p is None:
            if tok in ("inherit", "initial", "unset", "revert", "revert-layer"):
                continue
            return None
        out.append(p)
    return out or None


def shape_class(vals):
    """sharp / slight / round / pill / pct for a parsed radius list."""
    if not vals:
        return None
    if any(u == "%" for _, u in vals):
        pcts = [v for v, u in vals if u == "%"]
        if max(pcts) >= 45:
            return "pill"
        return "pct"
    mx = max(v for v, _ in vals)
    if mx == 0:
        return "sharp"
    if mx <= 6:
        return "slight"
    if mx <= 20:
        return "round"
    return "pill"


def parse_rules(css: str):
    """(selector, body) pairs with @media/@supports wrappers flattened.

    Linear scanner, NOT repeated at-rule regex searches: the first draft
    rescanned the whole sheet once per `@media` block (a 161 kB minified
    Bootstrap-adjacent theme sheet has ~500 of them) and took minutes. A rule
    body is closed by a depth scan that stops at its own brace, so total work
    stays O(len(css)).

    `@media print` blocks are dropped: print sheets paint almost no radius and
    no claim in the corpus is about print.
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
                    out.extend(_rules_inner(body))
            else:
                out.append((sel, body))
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


def _rules_inner(css: str):
    return parse_rules(css)


def sheet_layers(html: str, base: str, fetch):
    """[(url, css_text)] in document order: linked sheets, then inline <style>."""
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
        if code == "200" and body:
            layers.append((u, body.decode("utf-8", "replace")))
    inline = STYLE_RX.findall(html)
    if inline:
        layers.append((base + " <inline>", "\n".join(inline)))
    return layers


def radii_map(layers):
    """selector -> (raw_value, class, value_list, layer_index) — LAST rule wins."""
    m = {}
    for idx, (_url, css) in enumerate(layers):
        for sel, body in parse_rules(css):
            hit = RAD_RX.search(body)
            if not hit:
                continue
            vals = radius_tokens(hit.group(1))
            if vals is None:
                continue
            m[sel] = (hit.group(1).strip(), shape_class(vals), vals, idx)
    return m


def css_selectors(layers):
    sels = set()
    for _url, css in layers:
        for sel, _body in parse_rules(css):
            sels.add(sel)
    return sels


def css_classes(layers):
    """Class names the sheets mention anywhere in a selector (`btn-round`)."""
    out = set()
    for _url, css in layers:
        for sel, _body in parse_rules(css):
            for m in re.finditer(r"\.([A-Za-z_][\w-]{1,})", sel):
                out.add(m.group(1))
    return out


# ------------------------------------------------------------ claim side ---
CLAIM_SCAN = re.compile(
    r"border-radius\s*[:=]?[\s|]*(?P<val>[^|;\n]{1,40})"
    r"|(?P<qual>pill[- ]?shap\w*|\bpill\b|sharp\b|squared?\b|rectangular\b|"
    r"no\s+border-radius|without\s+border-radius|zero\s+radius)")


BARE_RADIUS_RX = re.compile(
    # "radi(?:us|i)" — the first draft wrote "radii?" which matches "radi" and
    # "radii" but NEVER "radius", so every bare "radius 5px" claim was invisible
    # `[\s|`:=]*` lets a markdown table's pipe and a quoted value through:
    # "| Button radius | `0` (square) |" is a claim, and the first draft missed it
    r"(?<![a-z-])radi(?:us|i)\b[\s|`:=]*(?P<val>0|(?:\d+(?:\.\d+)?)\s*(?:px|rem|em|%))", re.I)
NEG_BEFORE_RX = re.compile(r"(?i)(\bno|\bnot|without|[- ]less|free of)\s*[- ]?$")
MODIFIER_CLASS_RX = re.compile(
    r"(?i)^(?:btn-(?:sm|lg|block|link|outline)|px-\d|py-\d|p-\d|text-|bg-|"
    r"d-|mt-\d|mb-\d|m[slrtbxy]?-|rounded|pill|w-\d|h-\d)")
# a line that IS the sheet census ("0 everywhere … the only border-radius in
# the sheet is …") documents the stylesheet; it is not a build instruction
# our own evidence block quotes the live rule (`- \`slug\`: \`.btn{border-radius:.25rem}\``);
# re-reading it as a claim is the classic fix-trips-its-own-axis defect
EVIDENCE_LINE_RX = re.compile(r"^-\s*`[^`]+`:\s*`")
HEDGED_RX = re.compile(r"(?i)(rounded\s*[/|]\s*pill|pill\s*[/|]\s*rounded|"
                       r"rounded\s+or\s+pill|pill\s+or\s+rounded)")
FIELD_STATE_RX = re.compile(
    r"(?i)(\bfocus\b|form-control|input|placeholder|textarea|select\b)")
DOCUMENTED_SHEET_RX = re.compile(
    r"(?i)(0 everywhere|the only `?border-radius|only border-radius|"
    r"the only radii|only radii in|the only `?radius|"
    r"normalize `?button|no circular controls|no pills)")
RESPONSIVE_RX = re.compile(
    r"(?i)(\d+\s*px\s*(?:and|or)?\s*(?:below|under|above)|≤|≥|<=|>=|max-width|"
    r"min-width|@media|on mobile|at desktop|breakpoint)")


def sentences(line: str):
    """[(text, offset)] — sentence scoping for 300-char table rows.

    A whole-line window makes "CTA" in a nav inventory adjudicate a "pill"
    eight words later (measured on palate/pagedraft/loomwell).
    """
    out, start = [], 0
    for m in re.finditer(r"(?<=[.;!?])\s+|\s+[—–]\s+|\|", line):
        out.append((line[start:m.start()], start))
        start = m.end()
    out.append((line[start:], start))
    return [(t, s) for t, s in out if t.strip()]


def claim_shapes(line: str):
    """[(class, vals, raw, span_start, span_end)] for every shape token."""
    out = []
    for rx in (CLAIM_SCAN, BARE_RADIUS_RX):
        for m in rx.finditer(line):
            if "val" in (m.groupdict() or {}) and m.group("val") is not None:
                raw = m.group("val").strip().lstrip("| `").strip().strip("`")
                raw = raw.split("(")[0].strip()
                if not raw or raw.startswith("|"):
                    continue
                vals = radius_tokens(raw) if raw else None
                if vals is None:
                    mm = NUM_RX.search(raw or "")
                    if mm:
                        pn = norm_px(mm.group(0))
                        vals = [pn] if pn else None
                if vals:
                    out.append((shape_class(vals), vals, raw[:40], m.start(), m.end()))
                continue
            q = m.group("qual").lower()
            before = line[:m.start()][-14:]
            tail = line[m.end():m.end() + 14].lower()
            if re.match(r"\s*(bg|background|colou?r|fill|tint)\b", tail):
                # "Button pill BG #fff" is a COLOUR row that happens to say "pill"
                continue
            negated = bool(NEG_BEFORE_RX.search(before)) or tail.startswith("-less")
            if q.startswith("pill"):
                if negated:
                    # "pill-less", "no pill", "not a pill" == SHARP, not pill
                    out.append(("sharp", None, "no-pill", m.start(), m.end()))
                else:
                    out.append(("pill", None, q, m.start(), m.end()))
            elif q.startswith(("sharp", "squar", "rectangular", "no border",
                               "without border", "zero radius")):
                if negated:
                    # "no rectangular CTAs" asserts the opposite; it is not a claim
                    continue
                out.append(("sharp", None, q, m.start(), m.end()))
    out.sort(key=lambda t: t[3])
    return out


def cue_near(line: str, start: int, end: int, window: int = 40) -> bool:
    """A BUTTON cue within `window` chars of the shape token.

    Guard for QUALITATIVE claims only: the corpus uses "pill" for non-button
    states too ("the BMI `Metric` active PILL" on `kinesis`, whose line also
    says "CTA" 30 chars away). A stated radius value needs no such help; a bare
    word does.
    """
    lo, hi = max(0, start - window), min(len(line), end + window)
    return bool(BTN_CUE.search(line[lo:hi]))


NON_BUTTON_STATE_RX = re.compile(
    r"(?i)\b(tab|tabs|badge|tag|chip|avatar|dot|bullet|toggle|indicator|"
    r"swatch|marker|pill-shaped label)\b")


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


def shape_claims(txt: str, all_selectors: set):
    """[(line_no, [selectors], [(class, vals, raw)], ctx, guard)]"""
    claims = []
    comments = comment_lines(txt)
    for i, line in enumerate(txt.splitlines(), 1):
        if i in comments:
            continue
        s = line.strip()
        if not s or s.startswith(">"):
            continue
        if not (CLAIM_SCAN.search(s) or SHAPE_WORD_RX.search(s) or BARE_RADIUS_RX.search(s)):
            continue
        if not BTN_CUE.search(s):
            continue
        if SIBLING_RX.search(s) or DELTA_RX.search(s):
            continue
        if EVIDENCE_LINE_RX.match(s) or HEDGED_RX.search(s):
            continue
        if FIELD_STATE_RX.search(s):
            # "bottom border, radius 0, focus #ba9dea" is a FIELD state, and the
            # `btn-black` mention later in the line belongs to another subject
            # (`jolt`). Scope the test to the SENTENCE that carries the claim: a
            # sentence with a field keyword and no button cue is not a button
            # shape ("- Subscribe form input: no border-radius, sharp
            # rectangular button" keeps its cue and stays a claim).
            frag = next((t for t, off in sentences(s)
                         if any(off <= sh[3] <= off + len(t) + 2
                                for sh in claim_shapes(s))), s)
            if not BTN_CUE.search(frag):
                continue

        def scoped_selectors(fragment: str):
            names = [x for x in SELECTOR_RX.findall(fragment) if x in all_selectors]
            names += [x for x in re.findall(r"`([A-Za-z][\w-]{2,})`", fragment)
                      if x in all_selectors and x not in names]
            # a size/variant utility is not the radius owner
            return [n for n in names if not MODIFIER_CLASS_RX.match(n)]

        shapes = [sh for sh in claim_shapes(s)
                  if sh[1] is not None or cue_near(s, sh[3], sh[4])]
        if not shapes:
            continue
        if all(sh[1] is None for sh in shapes) and NON_BUTTON_STATE_RX.search(s):
            continue
        # SENTENCE SCOPING for long table rows / inventories
        scoped = s
        if len(s) > 240:
            frag = None
            for text, off in sentences(s):
                if any(off <= sh[3] <= off + len(text) + 2 for sh in shapes):
                    frag = text
                    break
            if frag and BTN_CUE.search(frag):
                scoped = frag
        shapes = [sh for sh in claim_shapes(scoped)
                  if sh[1] is not None or cue_near(scoped, sh[3], sh[4])]
        if not shapes:
            continue
        # SUBJECT BINDING: the selector nearest BEFORE the first radius token
        # owns it (`.btn` = .25rem; `.btn-outline-black` = 0 on `forge`)
        first = shapes[0][3]
        before_sel = scoped_selectors(scoped[:first])
        if before_sel:
            sels = [before_sel[-1]]
        else:
            # a QUOTED value in a table row belongs to the selector named after
            # it ("| 50px (pill) | `.gradient-btn` |"); a bare WORD does not.
            after = scoped_selectors(scoped[first:])
            sels = [after[0]] if (after and shapes[0][1]) else []
        guard = None
        if APPROX_RX.search(scoped):
            guard = "SHAPE-APPROX"
        elif HOVER_RX.search(scoped):
            guard = "SHAPE-HOVER"
        elif RESPONSIVE_RX.search(scoped):
            guard = "SHAPE-RESPONSIVE"
        elif DOCUMENTED_SHEET_RX.search(scoped):
            guard = "DOCUMENTED-SHEET"
        elif IMPL_RX.search(scoped):
            guard = "SHAPE-IMPL"
        claims.append((i, sels, [(c, v, r) for c, v, r, _a, _b in shapes], scoped[:170], guard))
    # NUMERIC-AUTHORITATIVE: a spec quoting a radius beside a bare word has
    # already been precise — the quote is the claim, the word is prose
    numeric_lines = {ln for ln, _s, shapes, _c, _g in claims if any(sh[1] for sh in shapes)}
    kept = []
    for ln, sels, shapes, ctx, guard in claims:
        if all(sh[1] is None for sh in shapes) and any(abs(ln - nl) <= 1 for nl in numeric_lines):
            continue
        kept.append((ln, sels, shapes, ctx, guard))
    return kept


# ------------------------------------------------------------- verdicts ---
TOL = 1.0          # px tolerance


def numeric_match(claim_vals, sheet_vals):
    if not claim_vals or not sheet_vals:
        return False
    if any(u == "%" for _, u in claim_vals) or any(u == "%" for _, u in sheet_vals):
        return shape_class(claim_vals) == shape_class(sheet_vals)
    c = max(v for v, _ in claim_vals)
    s = max(v for v, _ in sheet_vals)
    if c <= 8 and s <= 8:
        # 2px vs 4px is sub-perceptual on a 40px button; the class (slight) is
        # the same and 26 preps quote one or the other from different sheets
        return True
    return abs(c - s) <= TOL


# Qualitatives are visual verdicts, numerics are quoted CSS facts. A 20 px
# (or 15 px, or 14 px) radius on a 48 px CTA reads as a pill, so a "pill" claim is only wrong when
# the sheet is SHARP/SLIGHT (< 16 px); a "sharp" claim is only wrong when the
# sheet is visibly ROUNDED (>= 8 px). Measured: the strict class equality
# flagged 20 px-vs-pill on alpinora/biznode/boardroom — three false positives.
PILL_MIN = 10.0
SHARP_MAX = 7.0


def _max_px(vals):
    return max(v for v, _u in vals) if vals else 0.0


def verdict(claim, sheet_vals):
    """'ok' | 'wrong' for one (claim, sheet rule) pair."""
    cclass, cvals, _raw = claim
    if cvals and numeric_match(cvals, sheet_vals):
        return "ok"
    if any(u == "%" for _v, u in sheet_vals):
        pct = max(v for v, u in sheet_vals if u == "%")
        if cclass == "pill" and pct >= 45:
            return "ok"
        if cclass == "sharp" and pct == 0:
            return "ok"
    mx = _max_px(sheet_vals)
    if cclass == "pill" and mx >= PILL_MIN:
        return "ok"
    if cclass == "sharp" and mx <= SHARP_MAX:
        return "ok"
    sclass = shape_class(sheet_vals)
    if cclass and sclass and cclass == sclass:
        return "ok"
    return "wrong"


def button_rules(rmap):
    return {sel: v for sel, v in rmap.items() if BTN_SEL_RX.search(sel)}


def first_selector_rule(sel, rmap):
    """Rules whose selector mentions `.sel` exactly (a class token)."""
    rx = re.compile(r"\." + re.escape(sel) + r"(?![\w-])")
    return {s: v for s, v in rmap.items() if rx.search(s)}


NEGATED_CUE_RX = re.compile(r"(?i)(?:\bno|\bnot|without|zero|free of|\bnone of)\s+"
                            r"(?:\w+\s+){0,2}(?:cta|button|btn)\b")


def audit_spec(txt, slug, layers, cache, rebuilt=False):
    rmap = radii_map(layers)
    classes = css_classes(layers)
    all_css = "\n".join(c for _u, c in layers)
    utility = len(UTILITY_BUILD_RX.findall(all_css)) >= 2
    btn = button_rules(rmap)
    claims = shape_claims(txt, classes)
    flags, notes = [], []
    for lineno, named, shapes, ctx, guard in claims:
        if guard:
            notes.append((guard, f"line {lineno}: {ctx}"))
            continue
        scoped = {}
        for s in named:
            scoped.update(first_selector_rule(s, rmap))
        if named and not scoped:
            # the named selector carries no radius rule; a rectangle is the
            # CSS default, so only a SHARP claim survives unscathed
            notes.append(("SHAPE-ABSENT",
                          f"line {lineno}: `.{'`, `.'.join(named)}` has no border-radius rule; "
                          f"ctx: {ctx}"))
            continue
        if not scoped:
            # GENERIC path — deliberately narrow. Only a sentence about the
            # PRIMARY CTA is a shadow of the button an implementer copies; and a
            # utility build paints the radius on markup classes, so no class
            # rule can adjudicate it.
            if NEGATED_CUE_RX.search(ctx):
                # "FULL-width card (radius 6px, NO CTA column)" names the card,
                # not a button — wingly was flagged for its own 6px card radius
                notes.append(("GENERIC-NEGATED", f"line {lineno}: {ctx}"))
                continue
            if NON_CTA_SUBJECT_RX.search(ctx) or not PRIMARY_SUBJECT_RX.search(ctx):
                notes.append(("GENERIC-UNSCOPED", f"line {lineno}: {ctx}"))
                continue
            if utility:
                notes.append(("UTILITY-BUILD", f"line {lineno}: {ctx}"))
                continue
        pool = scoped or btn
        if not pool:
            notes.append(("NO-CLAIM", f"line {lineno}: the live sheets paint no button radius"))
            continue
        verdicts = [verdict(cl, vals) for cl in shapes for _s, (_r, _c, vals, _i) in pool.items()]
        if "ok" in verdicts:
            continue
        live = sorted({f"{v[0]} ({v[1]})" for v in pool.values()})
        if rebuilt:
            # a `?v=3.x.y` / `kit/` rebuild re-skins the demo: a mismatch there is
            # the host's drift, not the prep's error (see verify-type-scale)
            notes.append(("SHAPE-DRIFT",
                          f"line {lineno}: {ctx} || rebuilt kit: {', '.join(live[:6])}"))
            continue
        kind = "SHAPE-WRONG" if scoped else "SHAPE-CONFLICT"
        if not scoped and len({v[1] for v in pool.values()}) > 2:
            notes.append(("SHAPE-MULTI",
                          f"line {lineno}: {len(pool)} button rules, classes "
                          f"{sorted({v[1] for v in pool.values()})} | ctx: {ctx}"))
            continue
        flags.append((kind, f"line {lineno}: {ctx} || live: {', '.join(live[:6])}"))
    return flags, notes, len(claims)


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
    """Skip a spec with no button-shape sentence BEFORE any network call."""
    for line in txt.splitlines():
        if len(line) > 400:
            continue
        if (CLAIM_SCAN.search(line) or SHAPE_WORD_RX.search(line)) and BTN_CUE.search(line):
            return True
    return False


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
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--cache", default="/tmp/shape-cache")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--sample", type=int, default=0, help="random N specs (seeded)")
    ap.add_argument("--jobs", type=int, default=1,
                    help="parallel spec workers (default 1; 6 is safe, 20 trips the wall)")
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

    total_flags, total_claims, report = 0, 0, []
    scanned, skipped_cheap, dead = 0, 0, 0
    by_slug, lock = {}, threading.Lock()
    blocked = []

    def work(path):
        """Resolve the preview, parse the sheets, audit ONE spec."""
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
                return ("dead", name, slug, [], 0)
            layers = sheet_layers(html, url, fetch)
            if not layers:
                return ("nosheet", name, slug, [], 0)
            with lock:
                by_slug[slug] = (url, layers)
        url, layers = by_slug[slug]
        rebuilt = any(REBUILT_RX.search(u) for u, _c in layers)
        flags, notes, nclaims = audit_spec(txt, slug, layers, a.cache, rebuilt)
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
                # a 403 anywhere means the provider's bot wall is up: every
                # further "flag" would be phantom, so stop and say so
                if res[0] in ("dead",) and fetch.last_codes.get("403"):
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
            print(f"FLAG {fkind:<15} {name:<18} [{slug}] {msg}")
        if a.verbose:
            for nkind, msg in notes:
                print(f"  note {nkind:<14} {name:<18} {msg}")
        if flags:
            report.append({"name": name, "slug": slug, "url": url,
                           "flags": [{"kind": k, "detail": d} for k, d in flags],
                           "claims": nclaims})

    print(f"\n{scanned} specs scanned ({skipped_cheap} skipped: no button-shape line, "
          f"{dead} with no reachable preview) | {total_claims} button-shape claims | "
          f"{total_flags} flags | {len(report)} preps flagged")
    if blocked:
        print(f"!! BOT WALL: a 403 arrived while probing — stopped after {len(blocked)} "
              f"items; results are partial, do NOT fix from them.")
    if a.json:
        json.dump(report, open(a.json, "w"), indent=1)
    return 2 if blocked else (1 if total_flags else 0)


if __name__ == "__main__":
    sys.exit(main())
