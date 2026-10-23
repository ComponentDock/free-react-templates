#!/usr/bin/env python3
"""verify-margin-tokens.py — the MARGIN / GUTTER axis of the prep audit.

Every prep hands the implementer the theme's margins: "cards carry 30px
gutters", "`margin-bottom: 30px` under each `h3`", "pulled **180px UP** over the
image (`margin-top: -180px`)", "`margin: 0 -15px` row gutters". Those numbers ARE
the layout: a wrong side, a lost minus sign or an invented gutter moves a band
by a whole card's height, and no shipped checker reads them:

| axis | reads |
| --- | --- |
| `token-census.py` / `token-coverage.py` | hex colours only (`HEX_RX`) |
| `verify-live-tokens.py` | declared hex tokens vs the live sheet |
| `verify-type-axis.py` | `font-family` / `font-weight` vs the GF link |
| `verify-shape-tokens.py` | `border-radius` for BUTTONS |
| **`verify-spacing-tokens.py`** | **`padding` only — its own `SPACING-GAP` bucket, `MARGIN_RX`, explicitly declares `margin`/`gap` OUT OF SCOPE** |
| `verify-section-order.py` | document order |
| `verify-cardinality-media.py` | element counts + asset basenames |
| **`verify-margin-tokens.py`** | **the `margin` a prep states for a NAMED selector vs every rule the live sheets paint** |

DIRECTIONS
  MARGIN-WRONG      the claim names a class the live sheets give a margin on
                    that side, and EVERY rule that paints the class disagrees
                    (both sides outside tolerance, sign included)
  MARGIN-ZERO       a "no margin" / "margin-free" claim bound to a class whose
                    live margin on the claimed sides is visible (>= 8px)
  MARGIN-SIGN       the claim's value is right in magnitude but the sheet's is
                    negative (or vice versa) — the single most common layout
                    bug (`-180px` overlap written as `180px`)

NOTES (never flags — the claim may still be true)
  MARGIN-ABSENT       the class exists but no rule sets a margin on that side
  MARGIN-VARIANT      only a state rule (`:hover`, `:focus`, `.active`, `::after`)
                      sets it — a state value is not the base rhythm
  MARGIN-AUTO         the claimed side is `auto` (centring: not a number)
  MARGIN-PCT          a `%` margin (percentage margins resolve against the
                      CONTAINER width — not comparable without a box)
  MARGIN-UTIL         a Bootstrap/Tailwind spacing utility (`mb-3`, `mt-5`,
                      `g-4`, `space-y-2`): the framework owns the value
  MARGIN-IMPL         the line is OUR guidance (Tailwind classes, "the recreation")
  MARGIN-APPROX       framed as sampled/approximate (`~`, "approx")
  MARGIN-RESPONSIVE   a breakpoint-scoped claim (both values may exist)
  MARGIN-DELTA        a comparison/hover transition quoting two values at once
  MARGIN-JS           a carousel/library config (`margin: 0` in a slick block)
  MARGIN-UNPARSEABLE  `calc()`/`var()`/`clamp()`
  MARGIN-DRIFT        the prep documents REFERENCE-DRIFT (rebuilt demo): record,
                      never "correct"
  MARGIN-ONLY-LESS    the class' only matching rule is a `:not(:last-child)`
                      sibling gutter (the gap BETWEEN items, not the item's own)

Usage:
  python3 verify-margin-tokens.py [--prep-root DIR] [--ref GITREF] [--slug S]
                                  [--no-net] [--cache DIR] [--limit N]
                                  [--sample SEED] [--jobs N] [--verbose]
                                  [--json OUT] [--stats]
Exit code 0 = clean, 1 = flags, 2 = usage/root error.

Read-only: writes nothing but its curl cache and the optional --json report.
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
# a margin VALUE token: `30px`, `-180px`, `.5rem`, `0`, `auto`
_LEN = r"(?:-?\d*\.?\d+\s*(?:px|rem|em|pt|%)\b|\b0\b)"
MARGIN_RX = re.compile(
    # `(?<![\w-])` keeps a class like `margin-block` / `.margin-top` from
    # reading as a declaration, and `marginal` never matches at all.
    # ⚠️ The shorthand repetition MUST live INSIDE the `val` group: written
    # outside it (the first draft), `margin: 0 5px 20px 5px` matched the whole
    # span but `val` captured only `0` — 20 confident wrong flags on 6 preps.
    r"(?i)(?<![\w-])margin(?:\s*-\s*(?P<side>top|bottom|left|right))?\b"
    r"[\s|`:=]*(?P<val>(?:" + _LEN + r"|auto)(?:\s+(?:" + _LEN + r"|auto)){0,3})"
)
# a bare "no margin" assertion, bound to a selector. ⚠️ NOT `margin:0 …`: a
# shorthand that starts at zero (`margin:0 5px 20px`) states a real margin on
# the other sides — reading it as "no margin" fired 4 confident ZERO flags
# (advent/premiere/sojourn/kicker) on claims that were true.
ZERO_RX = re.compile(
    r"(?i)\b(?:no|without|zero|none|margin-free)\s+"
    r"(?:vertical\s+|horizontal\s+|bottom\s+|top\s+|left\s+|right\s+)?margins?\b"
    r"|\bmargins?\s+(?:is|are|=)\s*(?:0|zero|none|absent)\b")
# our own evidence block quotes the live rule (`- \`slug\`: \`.x{margin:…}\``)
EVIDENCE_LINE_RX = re.compile(r"^-?\s*`[^`]+`:\s*`")
# a carousel/library config block states a runtime option, not a CSS rule
JS_RX = re.compile(r"(?i)(stagePadding|smartSpeed|\bloop\s*:|\bitems\s*:|\bnav\s*:|"
                   r"\bdots\s*:|slick|swiper|owlCarousel|Owl\s*Carousel|"
                   r"carousel\s+(?:config|options?)|\bslidesToShow\b)")
# spacing utilities: the framework (compiled bootstrap sheet, Tailwind) owns them
UTIL_RX = re.compile(
    r"(?<![\w-])(?:m[trblxyse]?|p[trblxyse]?|g|gap|space-[xy])-(?:\d|auto\b|"
    r"n\d|px\b)")
# the state/descendant rules a BASE rhythm must not be read from
VARIANT_RX = re.compile(r"(?i)(?::hover|:focus|:active|:visited|::?before|::?after|"
                        r":nth-|:first-|:last-|:not\()")
# a `:not(:last-child)` gutter is the gap BETWEEN items, not the item's margin
BETWEEN_RX = re.compile(r"(?i):not\(\s*:last-child\s*\)|:not\(\s*:first-child\s*\)|"
                        r"\*\s*\+\s*\*|>\s*\*\s*\)")
DRIFT_RX = S.DRIFT_RX

TOL_ABS = 4.0        # px — a margin is a gutter; 30 vs 34 px is not a defect
TOL_REL = 0.10
SMALL = 4.0          # two tiny values are the same rhythm
ZERO_MIN = 8.0       # a "no margin" claim only contradicts a visible gutter

SIDES = ("top", "right", "bottom", "left")


def _val(tok: str):
    """One margin token -> px float | 'auto' | ('pct', v) | None."""
    t = tok.strip("`|").rstrip(";,").strip()
    if t.lower().startswith("auto"):
        return "auto"
    p = S.norm_px(t)
    if p is None:
        return None
    return ("pct", p[0]) if p[1] == "%" else p[0]


def parse_margin(raw: str):
    """`0 -15px` / `-180px` / `20px auto` -> {side: px|'auto'} | None.

    Mirrors `S.parse_padding`'s shorthand grammar (2 values = top/bottom then
    left/right) but keeps `auto` and the SIGN, which are the two things a
    margin claim is actually about. Every length is normalised to px so a
    comparison never mixes a `(value, unit)` tuple with a number.
    """
    raw = S.IMPORTANT_RX.sub(" ", raw or "").strip()
    raw = re.split(r"[),;→/|]|\s=\s", raw)[0].strip()
    if re.search(r"(?i)calc\(|var\(|env\(|clamp\(|min\(|max\(", raw):
        return None
    toks = [t for t in re.split(r"\s+", raw) if t]
    if not 1 <= len(toks) <= 4:
        return None
    vals = []
    for t in toks:
        v = _val(t)
        if v is None:
            return None
        vals.append(v)
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


# ---------------------------------------------------------------- CSS side ---
MARGIN_DECL_RX = re.compile(
    r"(?i)(?:^|;)\s*margin(?:\s*-\s*(top|bottom|left|right))?\s*:\s*([^;}]+)")


def body_sides(body: str):
    """`margin` declarations of ONE rule body -> {side: (px|'auto')} | None."""
    cur = {}
    for m in MARGIN_DECL_RX.finditer(body):
        side, raw = m.group(1), m.group(2)
        if side:
            v = _val(S.IMPORTANT_RX.sub(" ", raw).strip(" ;"))
            if v is None:
                continue
            cur[side] = v
        else:
            val = parse_margin(raw)
            if val is not None:
                cur.update(val)
    return cur or None


def _compounds(sel: str):
    """Selector list -> [(last_compound, kind)] with kind in base|scoped|variant.

    A rule with an ANCESTOR part (`.our-offer-area .main-title{margin-bottom:0}`)
    paints the class only inside that ancestor, so it can never be the base
    rhythm of the class itself — measured on `tangre`: reading it as `.main-title`
    turned the sheet's own `margin-bottom:80px` into a confident wrong flag.
    """
    out = []
    for part in sel.split(","):
        part = part.strip()
        if not part or "{" in part:
            continue
        parts = [p for p in re.split(r"[\s>+~]+", part) if p]
        if not parts:
            continue
        last = parts[-1]
        if VARIANT_RX.search(last):
            kind = "variant"
        elif BETWEEN_RX.search(part) or ":not(" in part:
            kind = "between"
        elif len(parts) > 1:
            kind = "scoped"
        else:
            kind = "base"
        out.append((last, kind))
    return out


def margin_maps(layers):
    """class -> {kind: {side: [values in document order]}}."""
    maps = collections.defaultdict(
        lambda: {k: collections.defaultdict(list)
                for k in ("base", "scoped", "between", "variant")})
    for _url, css in layers:
        for sel, body, media in S.parse_rules(css):
            sides = body_sides(body)
            if not sides:
                continue
            for last, kind in _compounds(sel):
                # only a single-class compound is an owner; `.a .b` paints `.b`
                for m in re.finditer(r"\.([A-Za-z_][\w-]{1,})", last):
                    name = m.group(1)
                    # a breakpoint rule is a LADDER value, never the base rhythm
                    bucket = "variant" if media != (None, None) else kind
                    for side, val in sides.items():
                        maps[name][bucket][side].append(val)
    return maps


def effective(side_lists):
    """Cascade one side's variants in document order (last wins)."""
    out = {}
    for v in side_lists:
        for side, val in v.items():
            out[side] = val
    return out


def side_match(c, sh) -> bool:
    if c is None or sh is None:
        return True
    if isinstance(c, str) or isinstance(sh, str):
        return c == sh
    if isinstance(c, tuple) or isinstance(sh, tuple):
        return c == sh
    if abs(c) <= SMALL and abs(sh) <= SMALL:
        return True
    if (c < 0) != (sh < 0) and abs(c) > SMALL and abs(sh) > SMALL:
        return False
    if abs(c - sh) <= TOL_ABS:
        return True
    base = max(abs(c), abs(sh), 1.0)
    return abs(c - sh) / base <= TOL_REL


# ------------------------------------------------------------- claim side ---
CSS_SEL_RX = re.compile(r"^[.#a-zA-Z*\[][\w\s.#:>+~\[\]=\-\"',()]*$")


def css_block_claims(txt: str, all_classes: set, have: set):
    """Claims inside QUOTED CSS BLOCKS — the multi-line rule, not one line.

    Preps hand over CSS as fenced/quoted blocks (`` `.card { margin: 0 0 30px }`
    `` across three lines); a line-scoped grep never binds the value to its
    selector, yet that IS the dominant form. The spec text is fed through the
    same `parse_rules()` the sheets use, so a quoted block reads exactly like
    CSS; the selector must look like a selector and every owner must be a class
    the live sheets define (so TS/JSON snippets never become claims).
    """
    out = []
    lines = txt.splitlines()
    for sel, body, _media in S.parse_rules(txt):
        sel = sel.strip()
        if not sel or not CSS_SEL_RX.match(sel) or "{" in sel:
            continue
        sides = body_sides(body)
        if not sides:
            continue
        owners = []
        for _p, n in S.classes_on(sel, all_classes):
            if n not in owners:
                owners.append(n)
        if not owners:
            continue
        lineno = 0
        for i, line in enumerate(lines, 1):
            if sel in line and "{" in line:
                lineno = i
                break
        key = (lineno, tuple(owners), tuple(sorted(str(v) for v in sides.values())))
        if key in have:
            continue
        have.add(key)
        out.append((lineno, owners, sides, "quoted block", sel[:80], None))
    return out


def margin_claims(txt: str, all_classes: set):
    """[(lineno, owner, claim_sides, raw, ctx, guard_or_None)]."""
    claims = []
    lines = txt.splitlines()
    for i, line in enumerate(lines, 1):
        s = line.strip()
        if not s or s.startswith(">") or len(s) > 600:
            continue
        if not (MARGIN_RX.search(s) or ZERO_RX.search(s)):
            continue
        if EVIDENCE_LINE_RX.match(s):
            continue
        binds = S.classes_on(s, all_classes)
        if not binds:
            continue
        # guard the whole line first: these apply to every claim on it
        line_guard = None
        if JS_RX.search(s):
            line_guard = "MARGIN-JS"
        elif S.IMPL_RX.search(s):
            line_guard = "MARGIN-IMPL"
        elif DRIFT_RX.search(s):
            line_guard = "MARGIN-DRIFT"
        elif S.DELTA_RX.search(s) or "→" in s or "->" in s:
            line_guard = "MARGIN-DELTA"
        elif S.APPROX_RX.search(s):
            line_guard = "MARGIN-APPROX"
        elif S.RESPONSIVE_RX.search(s):
            line_guard = "MARGIN-RESPONSIVE"
        elif all(UTIL_RX.match(n) for _p, n in binds[:1]) and UTIL_RX.match(binds[0][1]):
            line_guard = "MARGIN-UTIL"

        found = []
        for m in MARGIN_RX.finditer(s):
            raw = m.group("val").strip().strip("`|").strip()
            raw = raw.split("(")[0].strip().rstrip(".,;")
            if re.search(r"(?i)calc\(|var\(", raw):
                found.append((m.start(), None, raw, "MARGIN-UNPARSEABLE"))
                continue
            val = parse_margin(raw)
            if val is None:
                found.append((m.start(), None, raw, "MARGIN-UNPARSEABLE"))
                continue
            side = (m.group("side") or "").lower()
            if side:
                sides = {side: val[side]}
            else:
                sides = dict(val)
            found.append((m.start(), sides, raw, None))
        for m in ZERO_RX.finditer(s):
            found.append((m.start(), {"_zero": True}, "no margin", None))
        if not found:
            continue

        for pos, sides, raw, bad in found:
            clause = next(((t, off) for t, off in S.clauses(s)
                           if off <= pos <= off + len(t) + 2), (s, 0))
            local = [(p - clause[1], n) for p, n in
                     S.classes_on(clause[0], all_classes)]
            head = clause[0][:pos - clause[1]]
            owners = []
            if "{" in head:
                # a quoted rule: the selector is the compound before `{`
                scope = head.rsplit("}", 1)[-1]
                if "{" in scope:
                    sel_text = scope.rsplit("{", 1)[0]
                    compound = re.split(r"[\s>+~]+", sel_text.strip())[-1]
                    owners = [n for _p, n in S.classes_on(compound, all_classes)]
                    if not owners:
                        continue
            if not owners and local:
                before = [(p, n) for p, n in local
                          if p + clause[1] <= pos and pos - (p + clause[1]) <= 40]
                if not before and not s.lstrip().startswith("|"):
                    continue
                near = before or [(p, n) for p, n in local if p + clause[1] > pos]
                if near and near[0][1] == s and near[0][0] > 30:
                    continue
                for _p, n in near:
                    if n not in owners:
                        owners.append(n)
            elif not owners and s.lstrip().startswith("|"):
                after = [(p, n) for p, n in binds if p > pos]
                # the NEXT CELL names the subject only when it is a bare single
                # compound close to the value: `.hero-area .hero-content h2`
                # (idcraft) is a chain whose LAST part owns the declaration.
                if not after or after[0][0] - pos > 12:
                    continue
                nxt = s[after[0][0]:after[0][0] + 30]
                if not re.match(r"^\.?[A-Za-z][\w-]*\s*(?:\||$)", nxt.strip()):
                    continue
                owners = [after[0][1]]
            if not owners:
                continue
            # a claim about a DESCENDANT (`.site-menu > li > a`,
            # `.single-footer-widget` … `h4` … `margin-bottom:35px`) is not the
            # class' own margin — measured on `lede`/`savora`/`trek`, where the
            # nearest class is the container and the subject is its child.
            # Brackets/commas are turned into spaces so `(h4 white, …` reads as
            # the descendant it is.
            win = clause[0][max(0, pos - clause[1] - 45):max(0, pos - clause[1])]
            win = re.sub(r"[(),;]", " ", win)
            # the OWNER's own name must not read as a descendant hint: `.row`
            # / `.item` / `.link` matched DESCENDANT_RX's `rows?`/`items?`/
            # `links?` and silently killed every claim about them.
            for n in owners:
                win = re.sub(r"\.?" + re.escape(n) + r"\b", " ", win)
            if S.window_blocks(win):
                continue
            guard = bad or line_guard
            claims.append((i, owners, sides, raw, s[:150], guard))
    return claims


# ------------------------------------------------------------- verdicts ---
def adjudicate(owner_maps, sides):
    """-> (verdict, detail, compared_sides).

    Lenient on purpose: a side is only WRONG when every rule the sheets paint
    for that owner (base, ancestor-scoped, sibling-gutter, state) disagrees.
    """
    def numeric(v):
        return isinstance(v, (int, float)) and not isinstance(v, bool)

    def candidates(owner_maps, side):
        out = []
        for bucket in ("base", "scoped", "between", "variant"):
            for v in owner_maps.get(bucket, {}).get(side, []):
                out.append((bucket, v))
        return out

    if sides.get("_zero"):
        compared, worst = [], None
        for side in SIDES:
            for bucket, v in candidates(owner_maps, side):
                if bucket == "variant" or not numeric(v):
                    continue
                compared.append(side)
                if abs(v) >= ZERO_MIN and (worst is None or abs(v) > abs(worst[1])):
                    worst = (side, v, bucket)
        if worst:
            return "MARGIN-ZERO", f"{worst[0]} = {fmt(worst[1])} ({worst[2]})", compared
        return "MARGIN-ABSENT", "no visible margin on the claimed sides", compared

    compared, bad = [], []
    for side, val in sides.items():
        if val == "auto":
            continue
        cands = candidates(owner_maps, side)
        if not cands:
            continue
        compared.append(side)
        if any(side_match(val, v) for _b, v in cands):
            continue
        bad.append((side, val, cands))
    if not compared:
        if any(v == "auto" for v in sides.values()):
            return "MARGIN-AUTO", "only the `auto` side is claimed", compared
        return "MARGIN-ABSENT", "the sheet sets no margin on the claimed side", compared
    if not bad:
        return "OK", "", compared
    detail = "; ".join(
        f"{s} {fmt(v)} vs " + "/".join(f"{fmt(cv)}({b})" for b, cv in cands)
        for s, v, cands in bad)
    if all(numeric(v) and all(numeric(cv) and (v < 0) != (cv < 0) for _b, cv in cands)
           for _s, v, cands in bad):
        return "MARGIN-SIGN", detail, compared
    return "MARGIN-WRONG", detail, compared


def fmt(v):
    if isinstance(v, str):
        return v
    if isinstance(v, tuple):
        return f"{v[1]:g}%"
    return f"{v:g}px" if float(v).is_integer() else f"{v:.1f}px"


def pct_claim(sides) -> bool:
    return any(isinstance(v, tuple) and v[0] == "pct" for v in sides.values())


def audit_spec(txt, slug, layers):
    classes = S.css_classes(layers)
    maps = margin_maps(layers)
    flags, notes = [], []
    adjudicated = 0
    if DRIFT_RX.search(txt):
        return flags, [("MARGIN-DRIFT", 0, "prep documents reference drift")], 0
    have = set()
    claims = margin_claims(txt, classes)
    for _i, owners, sides, _raw, _ctx, _g in claims:
        have.add((0, tuple(owners), tuple(sorted(str(v) for v in sides.values()))))
    claims = claims + css_block_claims(txt, classes, have)
    for lineno, owners, sides, raw, ctx, guard in claims:
        if guard:
            notes.append((guard, lineno, ctx))
            continue
        if pct_claim(sides):
            notes.append(("MARGIN-PCT", lineno, ctx))
            continue
        if sides.get("_zero") is None and all(v == "auto" for v in sides.values()):
            notes.append(("MARGIN-AUTO", lineno, ctx))
            continue
        best = None
        for owner in owners:
            verdict, detail, compared = adjudicate(maps.get(owner, {}), sides)
            if verdict == "OK":
                best = ("OK", "", compared)
                break
            cand = (verdict, detail, compared)
            if best is None:
                best = cand
            elif compared and not best[2]:
                best = cand          # a flag with a real comparison beats a note
            elif compared and verdict in ("MARGIN-WRONG", "MARGIN-SIGN", "MARGIN-ZERO") \
                    and best[0] not in ("MARGIN-WRONG", "MARGIN-SIGN", "MARGIN-ZERO"):
                best = cand
        if best is None:
            continue
        if best[0] == "OK":
            adjudicated += 1
            continue
        if best[0] in ("MARGIN-ABSENT", "MARGIN-AUTO"):
            notes.append((best[0], lineno, ctx))
            continue
        adjudicated += 1
        flags.append((best[0], lineno, f"{raw} | {best[1]} || {ctx}"))
    return flags, notes, adjudicated


# ------------------------------------------------------------------ I/O ---
ALIAS = {}                   # template name -> {"slug","url"} (skill reference)
CATALOG_PATH = None          # set by main(): cached catalog-products map


def load_catalog(fetch):
    """slug -> demo URL from the preview host's OWN catalog map.

    `verify-spacing-tokens.resolve()` only walks the prefix ladder, so every
    family whose demo lives elsewhere (`/etc/bwiz/`, `/etc/bforms/`, `/etc/cf/`,
    `/etc/404/`, `/etc/tb/`, `/etc/bootstrap-sidebar/`, `theme/bootstrap/`) came
    back "dead" — 158 of 486 specs on the first full run. The preview host
    publishes the authoritative map in `assets/js/catalog-products-*.js`
    (`Object.assign($products, {…})` + `colorlibPreviewAliases`), which resolves
    almost all of them (measured 2026-10-23: 1,961 entries).
    """
    if CATALOG_PATH and os.path.exists(CATALOG_PATH):
        try:
            return json.load(open(CATALOG_PATH))
        except Exception:
            pass
    out = {}
    code, body = fetch("https://preview.colorlib.com/")
    if str(code) != "200" or not body:
        return out
    root = body.decode("utf-8", "replace")
    for name in sorted(set(re.findall(
            r"assets/js/catalog-products-[A-Za-z0-9._-]+\.js", root))):
        code, js = fetch("https://preview.colorlib.com/" + name)
        if str(code) != "200" or not js:
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
    if CATALOG_PATH and out:
        try:
            json.dump(out, open(CATALOG_PATH, "w"))
        except Exception:
            pass
    return out


def catalog_urls(cat):
    """slug -> absolute demo URL (a relative entry is a demo DIRECTORY)."""
    out = {}
    for k, v in cat.items():
        url = v.get("url") if isinstance(v, dict) else v
        if not isinstance(url, str):
            continue
        if url.startswith("http"):
            out.setdefault(k, url)
        elif re.match(r"^[\w./-]+$", url):
            out.setdefault(k, f"https://preview.colorlib.com/theme/{url.strip('/')}/")
    return out


def resolve(fetch, slug, name=None, cat=None):
    """slug/name -> (url, html): catalog map first, then the prefix ladder."""
    cands = []
    if name and name in ALIAS:
        cands.append(ALIAS[name]["url"])
    if cat and slug in cat:
        cands.append(cat[slug])
    cands.append(f"https://preview.colorlib.com/theme/{slug}/")
    if cat and name and name in cat:
        cands.append(cat[name])
    for url in cands:
        code, body = fetch(url)
        # 500 B, not 1,200: the `/theme/bootstrap/*` snippet demos are REAL
        # thin pages (multiselect-04 = 1,120 B, calendar-12 = 1,051 B) with
        # their own `css/style.css`; the 1,200 B floor rejected 8 of them.
        if str(code) == "200" and len(body) > 500 and b"stylesheet" in body.lower():
            return url, body.decode("utf-8", "replace")
    return S.resolve(fetch, slug)


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default="/root/free-react-templates-p2")
    ap.add_argument("--ref", default=None)
    ap.add_argument("--worktree", action="store_true", default=True)
    ap.add_argument("--slug", default=None)
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--cache", default="/tmp/margin-cache")
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
    fetch = S.Fetcher(a.cache, not a.no_net)
    globals()["CATALOG_PATH"] = os.path.join(a.cache, "catalog-map.json")
    try:
        ref_dir = pathlib.Path(__file__).resolve().parent.parent / "references"
        if not (ref_dir / "preview-urls-2026-10-23.json").exists():
            ref_dir = (pathlib.Path.home() / ".hermes/skills/automation"
                       / "componentdock-prep-stream/references")
        globals()["ALIAS"] = json.load(open(ref_dir / "preview-urls-2026-10-23.json"))
    except Exception:
        globals()["ALIAS"] = {}
    cat = catalog_urls(load_catalog(fetch))

    specs = S.read_specs(root, ref, worktree)
    if a.sample:
        random.seed(a.sample)
        specs = sorted(random.sample(specs, min(a.sample, len(specs))))
    if a.limit:
        specs = specs[:a.limit]

    report, by_slug, lock = [], {}, threading.Lock()
    bucket = collections.Counter()
    scanned = 0

    def work(path):
        name = path.split("/")[2].replace("template-", "")
        txt = S.read_text(root, ref, path, worktree)
        if not (MARGIN_RX.search(txt) or ZERO_RX.search(txt)):
            return ("skip", name, None, None, None)
        slug = None
        for rx in S.SLUG_RX:
            m = rx.search(txt)
            if m:
                slug = m.group(1)
                break
        if not slug:
            return ("noslug", name, None, None, None)
        if a.slug and a.slug not in (slug, name):
            return ("filtered", name, None, None, None)
        with lock:
            cached = by_slug.get(slug)
        if cached is None:
            url, html = resolve(fetch, slug, name, cat)
            if url is None:
                return ("dead", name, slug, None, None)
            layers = S.sheet_layers(html, url, fetch)
            if not layers:
                return ("nosheet", name, slug, None, None)
            with lock:
                by_slug[slug] = (url, layers)
        else:
            url, layers = cached
        flags, notes, adj = audit_spec(txt, slug, layers)
        return ("ok", name, slug, (url, flags, notes, adj), None)

    results = []
    if a.jobs > 1:
        from concurrent.futures import ThreadPoolExecutor
        with ThreadPoolExecutor(max_workers=a.jobs) as ex:
            for r in ex.map(work, specs):
                results.append(r)
    else:
        results = [work(p) for p in specs]

    for status, name, slug, payload, _x in results:
        bucket[status] += 1
        if status != "ok":
            continue
        url, flags, notes, adj = payload
        scanned += 1
        for kind, lineno, ctx in notes:
            bucket["note:" + kind] += 1
            if a.verbose:
                print(f"  note  {kind:18s} {name}:{lineno}  {ctx[:110]}")
        for kind, lineno, detail in flags:
            bucket["flag:" + kind] += 1
            report.append({"template": name, "slug": slug, "kind": kind,
                           "line": lineno, "detail": detail, "preview": url})
            print(f"FLAG  {kind:14s} {name} ({slug}) line {lineno}  {detail[:160]}")

    print(f"\nscanned: {scanned} specs | flags: {len(report)} | "
          f"buckets: {dict(sorted(bucket.items()))}")
    if a.stats:
        print("bucket detail:", json.dumps(dict(sorted(bucket.items())), indent=2))
    if a.json:
        json.dump({"flags": report, "buckets": dict(bucket)}, open(a.json, "w"), indent=2)
        print(f"wrote {a.json}")
    return 1 if report else 0


if __name__ == "__main__":
    sys.exit(main())
