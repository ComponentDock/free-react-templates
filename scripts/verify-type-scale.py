#!/usr/bin/env python3
"""verify-type-scale.py — TYPE-SCALE / FONT-SIZE axis (audit).

Every prep hands the implementer the theme's type scale: "`h2 { font-size: 20px }`",
"`.section-heading` **34px**", "`.single-menu h3 { font-size: 21px }`". Those numbers
decide whether a recreation reads like the reference or like a different design.
Nothing in the suite has ever read them:

| axis | reads |
| --- | --- |
| `token-census.py` / `token-coverage.py` | hex colours only |
| `verify-live-tokens.py` | declared hex tokens vs the live sheet |
| `verify-type-axis.py` | `font-family` / `font-weight` vs the prescribed GF link |
| `verify-shape-tokens.py` | `border-radius` |
| `verify-spacing-tokens.py` | `padding` (vertical rhythm, then the responsive ladder) |
| `verify-doc-token-roles.py` | docs-brief hexes vs the sheet |
| **`verify-type-scale.py`** | **the `font-size` a spec states for a NAMED selector vs every rule the live sheets paint for it** |

DIRECTIONS
  TYPE-SCALE-WRONG   the claim names a CLASS the live sheets style with `font-size`,
                     and the claimed px value appears in NO rule for that class —
                     neither a literal px declaration nor the rem/em twin of one.
                     (Class owners only: a tag's size set is too wide to adjudicate.)
  TYPE-SCALE-CONFLICT reserved: a generic "headings run 40px" census on a sheet whose
                     heading scale has no 40px (reserved, currently unused)

NOTES (printed, never flagged)
  TS-CANDIDATE   a TAG-owned mismatch (`.hero h2` reads 48px, the claim says 40px) —
                 tag pools are legitimately wide, so these are hand-review candidates
  TS-ABSENT      the named selector carries no `font-size` rule at all (inherited from
                 a parent — the sheet may still render it; cannot adjudicate)
  TS-REL-ONLY    the sheet styles the selector only in rem/em/%/vw and no px rule
  TS-CONVERTED   the px claim matches a rem/em declaration × the sheet's root size
  TS-MULTI       >4 distinct px sizes for that class (a utility-ish name)
  TS-DRIFT       the landing sheet is a REBUILT kit (`?v=3.0.0`, `kit/*.css`) — the live
                 design is not the one the prep read, so a mismatch is reference drift
                 and is recorded, never "corrected" (same rule as `-22e`'s `industrial`)
  TS-RESPONSIVE  the claim is framed as a breakpoint (`≤991px`, `@media`, "on mobile")
  TS-IMPL        the line is OUR guidance (Tailwind `text-*`, "the recreation")
  TS-APPROX      framed as sampled/approximate (docs/replication.md allows it)
  TS-DELTA       a comparison statement quotes two values on purpose (`48px vs 40px`)
  TS-PAGESCOPE   scoped to another page of the theme (inner sheets are not read here)
  TS-NOOWNER     a `font-size:` declaration whose selector is nowhere on the line OR
                 on its wrapped predecessor line
  TS-INLINE      the size is an inline `style="font-size:…"` on the element (which beats
                 the sheet — `flexly`'s counter `h2` is 34px inline over `.heading-section
                 h2{40px}`); those values are added to the owner's accepted set
  TS-LIST        a positional ladder ("All h1–h4, 50px/36px/20px/18px") — the number
                 belongs to an ordinal, not to the tag nearest it
  TS-REFOWNER    the class immediately before the value is a STYLE REFERENCE ("Same
                 `.btn` gradient style, `font-size: 18px`") — the subject was named earlier
  TS-UNKNOWN-SELECTOR the claim names a class no landing sheet defines (an inner-page
                 sheet, an icon-font class, or a misread) — never a flag
  TS-UNPARSEABLE `clamp()`/`calc()`/`var()`/`100%` — cannot compare

Usage:
  python3 verify-type-scale.py [--prep-root DIR] [--ref GITREF] [--slug S]
                               [--no-net] [--cache DIR] [--limit N]
                               [--sample SEED] [--jobs N] [--verbose] [--json OUT]
Exit code 0 = clean, 1 = flags, 2 = usage/root error.

Read-only: it writes nothing but its curl cache and the optional --json report.
Reuse `--cache /tmp/spacing-cache` — the same sha1(url) store the spacing/shape axes
fill, so a warm sweep costs no network at all.
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
import difflib
import sys
import threading
import urllib.parse

PREVIEW = "https://preview.colorlib.com/theme/{slug}/"
PREVIEW_BOOTSTRAP = "https://preview.colorlib.com/theme/bootstrap/{slug}/"
PREVIEW_ETC = "https://colorlib.com/etc/cs/{slug}/index.html"
# A REBUILT kit is a DOTTED version query (`?v=3.0.0`, `?v=4.0.1`) or a `kit/` path. The
# substring test `"?v=3" in url` also matched CONTENT-HASH cache-busters (`?v=31e6b061`,
# measured on 14 live sheets of the bootstrap snippet family), downgrading a real mismatch
# to a "drift, never correct" note — i.e. hiding defects.
REBUILT_RX = re.compile(r"[?&]v=\d+(?:\.\d+)+|/kit/")
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0.0.0 Safari/537.36")

LINK_RX = re.compile(r"<link[^>]*>", re.I)
STYLE_RX = re.compile(r"<style[^>]*>(.*?)</style>", re.I | re.S)
COMMENT_RX = re.compile(r"/\*.*?\*/", re.S)
IMPORTANT_RX = re.compile(r"!\s*important", re.I)
SLUG_RX = [
    re.compile(r"Source slug:\s*`?([A-Za-z0-9._-]+)"),
    re.compile(r"colorlib\.com/wp/template/([a-z0-9._-]+)/"),
    re.compile(r"preview\.colorlib\.com/theme/(?:bootstrap/)?([A-Za-z0-9._-]+)/"),
]

HTML_TAGS = {
    "h1", "h2", "h3", "h4", "h5", "h6", "p", "a", "span", "button", "li", "input",
    "textarea", "body", "html", "label", "blockquote", "small", "strong", "em", "div",
    "ul", "ol", "td", "th", "i", "b", "u", "s", "figcaption", "address", "sup", "sub",
    "nav", "section", "article", "header", "footer", "form", "select", "option",
    "table", "tr", "dt", "dd", "pre", "code", "figure", "time", "hr", "mark",
}

# ---------------------------------------------------------------- CSS side ---
MEDIA_WIDTH_RX = re.compile(r"(?i)(min|max)-width\s*:\s*(-?[\d.]+)\s*(px|em|rem)")
FS_DECL_RX = re.compile(r"(?i)(?<![\w-])font-size\s*:\s*([^;}]+)")


def _media_merge(media, prelude: str):
    if not prelude.lower().startswith("@media"):
        return media
    lo, hi = media
    for m in MEDIA_WIDTH_RX.finditer(prelude):
        v = float(m.group(2))
        if m.group(3).lower() != "px":
            v *= 16.0
        if m.group(1).lower() == "min":
            lo = v if lo is None else max(lo, v)
        else:
            hi = v if hi is None else min(hi, v)
    return (lo, hi)


def parse_rules(css: str, media=(None, None)):
    """[(selector, body, (min_px, max_px))] — linear brace scanner, print dropped."""
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


def split_selector(sel: str):
    """`.a, .b > h2` → ['.a', '.b > h2'] (commas inside :not()/() are respected)."""
    parts, depth, cur = [], 0, []
    for ch in sel:
        if ch in "([":
            depth += 1
        elif ch in ")]":
            depth = max(0, depth - 1)
        if ch == "," and depth == 0:
            parts.append("".join(cur))
            cur = []
        else:
            cur.append(ch)
    if "".join(cur).strip():
        parts.append("".join(cur))
    return [p.strip() for p in parts if p.strip()]


def parse_size(raw: str):
    """'20px' → (20.0, 'px'); '.9rem' → (0.9, 'rem'); 'clamp(…)' → None."""
    raw = IMPORTANT_RX.sub(" ", raw).strip().lower()
    m = re.match(r"(-?\d*\.?\d+)\s*(px|rem|em|%|pt|vw|vh|ch)?", raw)
    if not m:
        return None
    num = float(m.group(1))
    unit = (m.group(2) or "").strip()
    if not unit:
        return (0.0, "px") if num == 0 else None   # a bare non-zero number: unit inherited
    return (num, unit)


def decl_sizes(body: str):
    out = []
    for m in FS_DECL_RX.finditer(body):
        v = parse_size(m.group(1))
        if v is not None:
            out.append(v)
    return out


def owners_of(part: str):
    """Every class in the part + its rightmost tag simple selector."""
    keys = []
    clean = re.sub(r"::?[a-z-]+(\([^)]*\))?", " ", part, flags=re.I)
    for m in re.finditer(r"\.([A-Za-z_][\w-]{0,})", clean):
        keys.append(("cls", m.group(1)))
    toks = re.findall(r"(?<![\w-])([a-z][a-z0-9]{0,9})(?![\w-])", clean)
    for t in reversed(toks):
        if t in HTML_TAGS:
            keys.append(("tag", t))
            break
    return keys


INLINE_STYLE_RX = re.compile(
    r"<([a-zA-Z][\w-]*)\b([^>]*?)\bstyle\s*=\s*[\"']([^\"']*)[\"']", re.S)


def inline_sizes(html: str):
    """[(('cls'|'tag', name), px_value)] for every element with an inline font-size."""
    out = []
    for m in INLINE_STYLE_RX.finditer(html):
        tag, attrs, style = m.group(1).lower(), m.group(2), m.group(3)
        v = None
        for d in FS_DECL_RX.finditer(style):
            v = parse_size(d.group(1))
            if v:
                break
        if not v or v[1] != "px":
            continue
        cls = re.search(r"class\s*=\s*[\"']([^\"']*)", attrs)
        for c in (cls.group(1).split() if cls else []):
            out.append((("cls", c), round(v[0], 1)))
        if tag in HTML_TAGS:
            out.append((("tag", tag), round(v[0], 1)))
    return out


def size_map(layers, html: str = ""):
    """{('cls'|'tag', name): {'px': {…}, 'rel': {(v, unit)}}} + the sheet's root size."""
    mp: dict = {}
    root_px = None
    for _url, css in layers:
        for sel, body, _media in parse_rules(css):
            sizes = decl_sizes(body)
            if not sizes:
                continue
            parts = split_selector(sel)
            if root_px is None:
                for part in parts:
                    p = part.strip().lower()
                    if p in ("html", ":root", "*", "html,body", "body,html"):
                        for (v, u) in sizes:
                            if u == "px" and v > 0:
                                root_px = v
                                break
                        else:
                            continue
                        break
            for part in parts:
                for key in owners_of(part):
                    d = mp.setdefault(key, {"px": set(), "rel": set()})
                    for (v, u) in sizes:
                        if u == "px":
                            d["px"].add(round(v, 1))
                        else:
                            d["rel"].add((round(v, 3), u))
    for key, v in inline_sizes(html):
        mp.setdefault(key, {"px": set(), "rel": set()})["px"].add(v)
    return mp, (root_px or 16.0)


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
# A) declaration form: `font-size: 20px` (the quoted-rule shape the preps use most)
# B) adjacency form: "`h2` **34px**", "h2 20px/700", "h3 (30px, weight 400)"
ADJ_RX = re.compile(
    r"(?<![\w.])`?(h[1-6])`?\s*(?:\*\*)?\s*(?:[/,(|:=\s])\s*(?:\*\*)?\s*"
    r"(\d{1,3}(?:\.\d+)?)\s*px\b")
BACKTICK_RX = re.compile(r"`([a-zA-Z][\w-]{0,30})`")
DOTCLASS_RX = re.compile(r"(?<!\d)\.([A-Za-z][\w-]{2,})")
BARETAG_RX = re.compile(
    r"(?<![\w.#-])(h[1-6]|p|a|span|button|li|body|label|blockquote|input|textarea|"
    r"small|strong|em)(?![\w-])")

APPROX_RX = re.compile(
    r"(?i)(sampled|approx\.?|approximate|\babout\s+\d|\bfrom the screenshot\b|"
    r"screenshot[- ]sampled|estimate[d]?|roughly)")
RESPONSIVE_RX = re.compile(
    r"(?i)(\d+\s*px\s*(?:and|or)?\s*(?:below|under|above)|≤|≥|<=|>=|max-width|"
    r"min-width|@media|on mobile|at desktop|breakpoint)")
IMPL_RX = re.compile(
    r"(?i)(the recreation|our (?:app|implementation)|\btext-(?:xs|sm|base|lg|xl|\dxl)\b|"
    r"Tailwind|font-semibold class|rem-based utility)")
CENSUS_RX = re.compile(
    r"(?i)(the only font-size|only font-size in|no font-size|font-size[- ]free|"
    r"zero font-size)")
DELTA_RX = re.compile(
    r"(?i)(\bvs\.?\b|\bversus\b|rather than|compared (?:with|to)|\bdiffers? from\b|"
    r"\binstead of\b|→ *\d)")
HEDGE_RX = re.compile(r"(?i)(\bvaries\b|\boptional\b|font-size\s*[/|]\s*line-height)")
PAGESCOPE_RX = re.compile(
    r"(?i)\b(?:per[-\s]page|inner[-\s]pages?|sub[-\s]?page|other pages?|"
    r"each page|every page|inner sheets?)\b")
# "heading margin 20px" is a spacing claim, not a size claim
RANGE_RX = re.compile(r"(?i)\bh[1-6]\s*[-–—~]\s*h[1-6]\b")
SLASHLIST_RX = re.compile(r"\d{1,3}(?:\.\d+)?\s*px\s*/\s*\d{1,3}(?:\.\d+)?\s*px")
NOTSIZE_RX = re.compile(r"(?i)\b(margin|padding|gap|letter-spacing|line-height)\b")


def owner_before(line: str, pos: int, classes: set, bare_tags: bool = True):
    """Nearest selector-looking token to the LEFT of `pos`.

    Nearest WINS by position — the first draft overwrote `best` in loop order, so a bare
    `span`/`a` later in the sentence beat the real `.wrap-icon` (sitemap's "the
    stylesheet retains `.custom-dropdown .wrap-icon { font-size: 30px }`" was adjudicated
    against `.custom-dropdown`, live 12px — a confident FALSE flag).

    And a class the sheet does NOT define never falls back to a FARTHER class: sifted's
    "**Card order button `.order-btn`**: Same `.btn` gradient style, `font-size: 18px`"
    is a claim about `.order-btn` (absent from the landing sheets), and the old back-scan
    landed on `.btn` (16px) — a flag about a rule the sentence calls a style reference,
    not the subject. Such a claim is returned as ('unknown', name) and only ever a note.
    """
    head = line[:pos]
    cl, tg = [], []
    for m in BACKTICK_RX.finditer(head):
        tok = m.group(1)
        if tok.islower() and tok in HTML_TAGS:
            tg.append((m.start(), ("tag", tok)))
        elif looks_like_class(tok):
            cl.append((m.start(), ("cls", tok)))
    for m in DOTCLASS_RX.finditer(head):
        if looks_like_class(m.group(1)):
            cl.append((m.start(), ("cls", m.group(1))))
    if bare_tags:
        for m in BARETAG_RX.finditer(head):
            tg.append((m.start(), ("tag", m.group(1))))
    cpos, cname = (max(cl) if cl else (None, None))
    tpos, tname = (max(tg) if tg else (None, None))
    if cname is not None and (tpos is None or cpos >= tpos):
        if cname[1] in classes:
            return cname
        return ("unknown", cname[1])
    return tname


JOIN_TAIL_RX = re.compile(r"[.:;!?]\s*$")


# "Same `.btn` gradient style, `font-size: 18px`" — the class right before the value is
# a comparison, the subject was named earlier in the sentence (sifted's order button).
# Prose tokens that read as classes to `DOTCLASS_RX` but are not selectors: a CSS
# PROPERTY name in backticks (`padding-right`, `line-height`), a TLD (`.com`), a UI
# label/component (`.LogOut`, `.Bell`), a placeholder (`cat-N`), a media feature
# (`prefers-reduced-motion`). Measured: 12 of 45 TS-UNKNOWN-SELECTOR notes were these.
NOT_A_CLASS_RX = re.compile(
    r"(?i)^(padding|margin|font|text|line|letter|border|background|box|display|color|"
    r"list|overflow|position|top|left|right|bottom|width|height|white|word|vertical|"
    r"cursor|opacity|transform|transition|content|z|flex|grid|object|outline|float|"
    r"clear|align|justify|min|max|inset|gap|row|column|order|fill|stroke|writing|"
    r"direction|unicode|quotes|tab|empty|pointer|scroll|visibility)(-|$)")
NOT_A_CLASS_WORDS = {"com", "org", "net", "io", "html", "css", "js", "png", "jpg",
                     "svg", "json", "prefers-reduced-motion", "hover", "focus"}
# Bootstrap spacing/layout utilities (`mb-5`, `pt-3`, `col-md-6`) carry no font-size;
# in prose they are cited as rhythm, not as the claim's subject.
UTILITY_RX = re.compile(r"^(?:[mp][xytblrse]?-\d+|col(-[\w-]+)?|row|g|gap-\d+|"
                        r"order(-[\w-]+)?|offset(-[\w-]+)?|container(-fluid)?)$")


def looks_like_class(name: str) -> bool:
    if name.lower() in NOT_A_CLASS_WORDS or NOT_A_CLASS_RX.match(name):
        return False
    if UTILITY_RX.match(name):
        return False
    if name[0].isupper():          # `.LogOut`, `.Bell` — UI labels, not selectors
        return False
    if re.search(r"-(N|n)$", name):  # `cat-N` — a placeholder, not a class
        return False
    return True


REF_AFTER_RX = re.compile(
    r"(?i)\b(same|like|matching|mirrors?|borrows?|style|styling|treatment|motif|"
    r"pattern|look|otherwise identical)\b")


def _owner_end(line: str, owner, pos: int) -> int:
    """Index just past the LAST textual occurrence of the owner token before `pos`."""
    pat = (r"\." + re.escape(owner[1])) if owner[0] == "cls" else (
        r"(?<![\w.#-])" + re.escape(owner[1]) + r"(?![\w-])")
    last = pos
    for m in re.finditer(pat, line[:pos], re.I):
        last = m.end()
    return last


def claims_in_line(line: str, classes: set, lineno: int, prev: str = ""):
    """Claims on one line; `prev` is the preceding non-empty line (see Wrapped-JOIN)."""
    out = []
    # a wrapped declaration ("font-size: 14px; font-weight: 700;" on its own line, the
    # selector one line above) is the norm in these specs — 419 of 1,458 claims landed in
    # TS-NOOWNER without this join. Only used for OWNER attribution, and never across a
    # markdown table row (`|`) or a sentence that already ended.
    joinable = bool(prev) and not JOIN_TAIL_RX.search(prev) and not prev.rstrip().endswith("|")
    for m in FS_DECL_RX.finditer(line):
        v = parse_size(m.group(1))
        if v is None:
            out.append(("TS-UNPARSEABLE", None, None, lineno, line))
            continue
        owner = owner_before(line, m.start(), classes)
        if owner is not None and owner[0] == "cls":
            seg = line[_owner_end(line, owner, m.start()):m.start()]
            if len(seg) <= 45 and REF_AFTER_RX.search(seg):
                out.append(("TS-REFOWNER", None, None, lineno, line))
                continue
        if owner is None and joinable:
            # backticked / dotted selectors only: `poppy`'s "H4: `font-size: 18px`"
            # joined the previous bullet's PROSE "(over gradient header)" → the bare word
            # "body" became a `body` claim (live 15px) and flagged a correct prep.
            ctx = prev + " " + line[:m.start()]
            owner = owner_before(ctx, len(ctx), classes, bare_tags=False)
        out.append(("claim", owner, v, lineno, line))
    if "font-size" in line.lower():
        return out
    if RANGE_RX.search(line) or SLASHLIST_RX.search(line):
        # a positional ladder ("h1–h4, 50px/36px/20px/18px") cannot be mapped by position
        out.append(("TS-LIST", None, None, lineno, line))
        return out
    for m in ADJ_RX.finditer(line):
        out.append(("claim", ("tag", m.group(1)), (float(m.group(2)), "px"), lineno, line))
    return out


def line_guard(line: str):
    """A bucket name when the LINE cannot be adjudicated, else None."""
    if PAGESCOPE_RX.search(line):
        return "TS-PAGESCOPE"
    if RESPONSIVE_RX.search(line):
        return "TS-RESPONSIVE"
    if DELTA_RX.search(line):
        return "TS-DELTA"
    if IMPL_RX.search(line):
        return "TS-IMPL"
    if APPROX_RX.search(line):
        return "TS-APPROX"
    if CENSUS_RX.search(line):
        return "TS-CENSUS"
    if HEDGE_RX.search(line):
        return "TS-HEDGE"
    return None


def classes_in_layers(layers):
    out = set()
    for _url, css in layers:
        for sel, _body, _media in parse_rules(css):
            for m in re.finditer(r"\.([A-Za-z_][\w-]{1,})", sel):
                out.add(m.group(1))
    return out


def adjudicate(claims, mp, root_px, classes, rebuilt=False):
    """→ (flags, notes, adjudicated_count)

    `rebuilt` = the landing sheets are a `?v=3.0.0` / `kit/` rebuild: a mismatch there is
    DRIFT (the prep read the previous design), never a claim defect. Measured on
    `endgam`: `.read-more` is a whole different rule today (14px/700/uppercase vs the
    prep's 15px/italic/#fff), and correcting that prep would rewrite a SHIPPED app's
    spec against a design it cannot implement.
    """
    flags, notes = [], []
    done = 0
    for kind, owner, val, lineno, line in claims:
        if kind != "claim":
            notes.append((kind, f"line {lineno}: {line.strip()[:150]}"))
            continue
        if owner is None:
            notes.append(("TS-NOOWNER", f"line {lineno}: {line.strip()[:150]}"))
            continue
        g = line_guard(line)
        if g:
            notes.append((g, f"line {lineno}: {line.strip()[:150]}"))
            continue
        v, unit = val
        if unit != "px":
            notes.append(("TS-UNPARSEABLE",
                          f"line {lineno}: non-px value {v}{unit} — {line.strip()[:120]}"))
            continue
        if owner[0] == "unknown" and rebuilt:
            notes.append(("TS-DRIFT",
                          f"line {lineno}: `.{owner[1]}` — the rebuilt kit renamed the "
                          f"class (live: `cl-*`) — {line.strip()[:80]}"))
            continue
        if owner[0] == "unknown":
            near = difflib.get_close_matches(owner[1], classes, n=1, cutoff=0.86)
            hint = f" ≈ `.{near[0]}`" if near else ""
            notes.append(("TS-UNKNOWN-SELECTOR",
                          f"line {lineno}: `.{owner[1]}` is in no landing sheet{hint} "
                          f"(inner sheet / misread) — {line.strip()[:90]}"))
            continue
        d = mp.get(owner)
        label = ("." if owner[0] == "cls" else "") + owner[1]
        if not d:
            notes.append(("TS-ABSENT", f"line {lineno}: `{label}` has no font-size rule"))
            continue
        done += 1
        if any(abs(v - p) <= 0.5 for p in d["px"]):
            continue
        twins = [r * root_px for (r, u) in d["rel"] if u in ("rem", "em")]
        if any(abs(v - t) <= 0.6 for t in twins):
            notes.append(("TS-CONVERTED",
                          f"line {lineno}: `{label}` {v:g}px = a rem rule ×{root_px:g}"))
            continue
        if not d["px"]:
            notes.append(("TS-REL-ONLY",
                          f"line {lineno}: `{label}` styled only in "
                          f"{sorted({u for (_r, u) in d['rel']})}"))
            continue
        if len(d["px"]) > 4:
            notes.append(("TS-MULTI",
                          f"line {lineno}: `{label}` paints {len(d['px'])} sizes"))
            continue
        shown = ", ".join(f"{p:g}" for p in sorted(d["px"]))
        if rebuilt:
            notes.append(("TS-DRIFT",
                          f"line {lineno}: `{label}` claimed {v:g}px || live: {shown} "
                          f"(rebuilt kit sheet)"))
            continue
        if owner[0] == "tag":
            notes.append(("TS-CANDIDATE",
                          f"line {lineno}: `{label}` claimed {v:g}px || live: {shown}"))
            continue
        flags.append(("TYPE-SCALE-WRONG",
                      f"line {lineno}: `{label}` claimed {v:g}px || live: {shown}"))
    return flags, notes, done


def audit_spec(txt, mp, root_px, classes, rebuilt=False):
    claims = []
    prev = ""
    for lineno, line in enumerate(txt.splitlines(), 1):
        low = line.lower()
        if "font-size" not in low and not re.search(r"h[1-6]", low):
            if line.strip():
                prev = line
            continue
        if NOTSIZE_RX.search(line) and "font-size" not in low:
            if line.strip():
                prev = line
            continue
        claims.extend(claims_in_line(line, classes, lineno, prev))
        if line.strip():
            prev = line
    return adjudicate(claims, mp, root_px, classes, rebuilt)


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


class Fetcher:
    def __init__(self, cache, net):
        self.cache, self.net = cache, net
        os.makedirs(cache, exist_ok=True)
        self.bad = {}

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
            q = subprocess.run(["curl", "-4", "-sSL", "-A", UA, "-m", "40", "-o", p,
                                "-w", "%{http_code}", url],
                               capture_output=True, text=True)
            code = q.stdout.strip() or "ERR"
            body = open(p, "rb").read() if os.path.exists(p) else b""
        except Exception:
            pass
        json.dump({"code": code, "url": url}, open(meta, "w"))
        if code != "200":
            self.bad[code] = self.bad.get(code, 0) + 1
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
    ap.add_argument("--sample", type=int, default=0, help="scan a random N-spec sample")
    ap.add_argument("--seed", type=int, default=7, help="seed for --sample")
    ap.add_argument("--jobs", type=int, default=1,
                    help="parallel spec workers (6 is safe; 20 trips the wall)")
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--notes", default="TS-CANDIDATE,TS-CONVERTED,TS-DRIFT",
                    help="comma list of note buckets --verbose prints")
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
        random.seed(a.seed)
        specs = sorted(random.sample(specs, min(a.sample, len(specs))))
    if a.limit:
        specs = specs[:a.limit]

    # phase 1 — resolve each unique slug's landing sheets once
    todo = []
    for path in specs:
        name = path.split("/")[2].replace("template-", "")
        txt = read_text(root, ref, path, worktree)
        low = txt.lower()
        if "font-size" not in low and not re.search(r"h[1-6]\s", low):
            continue
        slug = None
        for rx in SLUG_RX:
            m = rx.search(txt)
            if m:
                slug = m.group(1)
                break
        if not slug:
            continue
        if a.slug and a.slug not in (slug, name):
            continue
        todo.append((name, slug, txt))

    by_slug, lock, wall = {}, threading.Lock(), []

    def load(item):
        _name, slug, _txt = item
        with lock:
            if slug in by_slug:
                return
        if wall:
            return
        url, html = resolve(fetch, slug, name)
        if url is None:
            with lock:
                by_slug[slug] = None
                if fetch.bad.get("403", 0) + fetch.bad.get("429", 0) >= 8:
                    wall.append(True)
            return
        layers = sheet_layers(html, url, fetch)
        with lock:
            rebuilt = any(REBUILT_RX.search(u) for u, _c in layers)
            by_slug[slug] = (layers, classes_in_layers(layers),
                             size_map(layers, html), rebuilt)

    def run_batch(items):
        if a.jobs <= 1:
            for it in items:
                load(it)
            return
        from concurrent.futures import ThreadPoolExecutor
        with ThreadPoolExecutor(max_workers=a.jobs) as ex:
            list(ex.map(load, items))

    run_batch(todo)

    if wall:
        print("!! provider answered 403/429 repeatedly — stopping probes "
              "(do not trust this sweep as a source reading)", file=sys.stderr)

    SHOW_NOTES = {x.strip() for x in a.notes.split(",") if x.strip()}
    total_flags = total_claims = 0
    report, buckets = [], {}
    dead = {}
    for name, slug, txt in todo:
        entry = by_slug.get(slug)
        if entry is None:
            dead[slug] = dead.get(slug, 0) + 1
            continue
        layers, classes, (mp, root_px), rebuilt = entry
        if not layers:
            continue
        flags, notes, done = audit_spec(txt, mp, root_px, classes, rebuilt)
        total_claims += done
        for b, msg in notes:
            buckets[b] = buckets.get(b, 0) + 1
            if a.verbose and b in SHOW_NOTES:
                print(f"  note {b:14} {name:16} {msg}")
        for b, msg in flags:
            total_flags += 1
            report.append({"prep": name, "slug": slug, "bucket": b, "detail": msg})
        if a.verbose and flags:
            for b, msg in flags:
                print(f"  FLAG {b:18} {name:16} {msg}")

    for r in report:
        print(f"{r['bucket']:18} {r['prep']:18} {r['detail']}")
    print(f"\nspecs considered: {len(todo)} | live slugs: {len(by_slug) - len(dead)}"
          f" | dead/failed: {len(dead)}")
    print(f"adjudicated size claims: {total_claims} | flags: {total_flags}")
    if buckets:
        print("notes: " + ", ".join(f"{k}={v}" for k, v in sorted(buckets.items())))
    if a.json:
        json.dump({"flags": report, "notes": buckets,
                   "claims": total_claims, "specs": len(todo)},
                  open(a.json, "w"), indent=1)
    return 1 if total_flags else 0


if __name__ == "__main__":
    sys.exit(main())
