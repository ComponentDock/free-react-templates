#!/usr/bin/env python3
"""verify-brand-claims.py — BRAND-CLAIM COVERAGE axis (audit).

Every other token axis compares a value a spec *states* against the reference.
This one reads the opposite fact: whether a shipped spec states a brand-role
colour at all.  `verify-app-fidelity.py` reported **512 NO-CLAIM** specs — half
the corpus states no brand colour, so the app-side axis cannot judge them, and
an implementer reading the brief has no palette to build from.

Buckets (they partition the corpus exactly once):

  CLAIMED          a brand-role colour the app-fidelity grammar accepts
                   (chroma >= BRAND_CHROMA) — not this axis' subject
  LOW-CHROMA       a brand-role row exists, but every colour on it is below the
                   app-fidelity threshold (`#b689b0` = 0.176) — the spec is NOT
                   silent; the consumer's guard hides it. Note, never a flag.
  SPEC-SILENT      no brand-role colour at all → the backfill subject.  Then the
                   reference decides whether the spec CAN carry a measured row:
    BACKFILL       the live sheet paints a leading chromatic (chroma >=
                   BRAND_CHROMA, >= MIN_DECLS declarations, not a framework
                   default) → a measured `Brand` row is derivable (FLAG)
    THIN           its leading chromatic is declared < MIN_DECLS times (a
                   one-off pixel, not a design colour)
    FRAMEWORK-ONLY every chromatic it paints is a framework default
                   (`#007bff`, `#6c757d`, …) — naming one "the brand" would be
                   an invention, so it is out of scope
    NO-CHROMA      the sheet paints no chromatic colour (greyscale design)
  skipped:  ALIAS-SKIP · NO-SLUG · REF-DEAD · DEMO-AMBIGUOUS · NO-SHEET ·
            REBUILT (a rebuilt 3.x kit re-brands the page — values would be
            drift, same rule as verify-shape-tokens.py) · PROSE-STATE (the prep
            states a colour the sheet paints only in a `:hover`/`:focus` rule or
            once — a state, not a surface)

The VENDOR test is scoped BELOW the demo directory (2026-10-23d): `/theme/bootstrap/<slug>/`
and `/theme/bb/<slug>/` are the preview host's family prefixes, so matching the
whole URL turned 93 preps' only linked sheet (`css/style.css`, 7–27 kB, live) into
a "vendor bundle" and bucketed them NO-THEME-SHEET.  93/93 were phantom.

The axis is READ-ONLY.  `fix-brand-claims.py` writes the measured row.

Usage:
  python3 verify-brand-claims.py [--prep-root DIR] [--ref GITREF] [--slug S]
                                 [--worktree] [--jobs N] [--no-net]
                                 [--cache DIR] [--json OUT] [--md OUT]
Exit 0 = no BACKFILL gaps, 1 = gaps, 2 = usage/root error.
"""
from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import os
import re
import sys
import threading
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlsplit


def _load(fname: str):
    path = os.path.join(os.path.dirname(os.path.abspath(__file__)), fname)
    spec = importlib.util.spec_from_file_location(fname[:-3].replace("-", "_"), path)
    mod = importlib.util.module_from_spec(spec)
    sys.modules[spec.name] = mod
    spec.loader.exec_module(mod)
    return mod


AF = _load("verify-app-fidelity.py")     # the consumer's claim grammar
VT = _load("verify-live-tokens.py")      # fetcher + catalog resolver + sheets

HEX_RX = AF.HEX_RX
MIN_DECLS = 3          # a design colour is painted more than once
                 # framework defaults: naming one "the brand" is an invention
FRAMEWORK = {
    "#007bff", "#0d6efd", "#6c757d", "#28a745", "#198754", "#dc3545", "#dc3546",
    "#17a2b8", "#0dcaf0", "#ffc107", "#ffca2c", "#6610f2", "#6f42c1", "#fd7e14",
    "#20c997", "#e83e8c", "#343a40", "#adb5bd", "#6ea8fe", "#3d8bfd", "#0a58ca",
    "#0056b3", "#0069d9", "#0062cc", "#005cbf", "#1e7e34", "#c82333", "#138496",
    "#e0a800", "#d39e00", "#545b62", "#5a6268", "#117a8b", "#1c7430", "#218838",
    "#0275d8", "#5cb85c", "#5bc0de", "#f0ad4e", "#d9534f", "#292b2c", "#f7f7f7",
}


# vendor / library / font bundles: their palettes are the LIBRARY's colours
# (Bootstrap's `#007bff`, a datepicker's `#ffb5b5` set), never the design's.
VENDOR_RX = re.compile(
    r"(?i)("
    r"bootstrap|open-iconic|linearicons?|font-?awesome|ionicons|icomoon|themify|"
    r"simple-line|flaticon|material-icons|animate|owl\.|slick|swiper|tns|tiny-slider|"
    r"glide|colorbox|magnific|fancybox|lightbox|select2|nice-select|chosen|dropzone|"
    r"datepicker|datetimepicker|daterangepicker|timepicker|nouislider|flexslider|"
    r"mediaelement|plyr|videojs|fullcalendar|chart|morris|apexcharts|isotope|"
    r"imagesloaded|counterup|waypoints|wow|aos\.css|jarallax|normalize|jquery|"
    r"popper|leaflet|mapbox|quill|summernote|ckeditor|rtl\.css|"
    r"fonts\.googleapis|fonts\.gstatic|css\?family="
    r")")


# a plugin bundle in `assets/css/plugins/` is not the design even when its file
# name is unknown (measured on `autodock`: `plugins/gijgo.css`, a datepicker,
# led with Material blue `#2196f3`).  Same rule as `verify-token-extra.py`.
VENDOR_PATH_RX = re.compile(
    r"(?i)/(plugins?|vendor|vendors|third[-_]?party|libs?|bower_components)/")


def demo_relative(url: str, demo: str = "") -> str:
    """The sheet's path RELATIVE to its own demo directory, plus its query.

    The vendor test must never read the demo FAMILY's directory.  `/theme/bootstrap/<slug>/`
    and `/theme/bb/<slug>/` are the preview host's family prefixes, not a library,
    so testing the whole URL made the `bootstrap` token match the PATH: 93 preps
    were bucketed NO-THEME-SHEET ("every linked sheet is a vendor bundle") while
    their one linked sheet was a live 7–27 kB `css/style.css` — the design sheet
    itself (measured 2026-10-23d, 93/93 phantom).  Scope the match to what the
    demo actually ships.
    """
    a, b = urlsplit(url), urlsplit(demo or "")
    path = a.path
    if b.netloc and a.netloc == b.netloc:
        d = b.path if b.path.endswith("/") else b.path + "/"
        if path.startswith(d):
            path = path[len(d):]
    return path + ("?" + a.query if a.query else "")


def is_vendor(url: str, demo: str = "") -> bool:
    rel = demo_relative(url, demo)
    return bool(VENDOR_RX.search(rel.rsplit("/", 1)[-1] + " " + rel)
                or VENDOR_PATH_RX.search(rel))


BLOCK_RX = re.compile(r"([^{}]{1,400})\{([^{}]*)\}", re.S)
CSS_COMMENT_RX = re.compile(r"/\*.*?\*/", re.S)


def strip_comments(css: str) -> str:
    """Comments are not paint.

    A licence header that mentions `#fff` or a Sass section banner
    (`/* Buttons */`) otherwise becomes a fake selector, and a colour that only
    appears inside a comment is not painted at all (measured on `generous`,
    whose "brand" was Bootstrap's MIT-header text).
    """
    return CSS_COMMENT_RX.sub(" ", css)
# selectors that paint a DESIGN surface (a button, a nav, a hero band) rather
# than a text state: the same hex used as `.btn{background}` is the design's
# colour; used only as `a:hover{color}` it is a link state
HINT_RX = re.compile(r"(?i)(btn|button|nav|hero|banner|header|cta|primary|accent|"
                     r"logo|badge|footer|jumbotron|slider|call-to-action)")
# a `:hover`/`:focus` background is a STATE, not a surface: a theme can accent
# every hover without the colour being its brand (measured on `zine`/`stash`)
STATE_RX = re.compile(r"(?i):(hover|focus|active|visited|checked|disabled|target)")
# INTERACTION states only: a colour painted exclusively here is a focus ring or a
# hover (measured on `multiform`: `#80bdff` is a `.cl-form-control:focus` border
# and `subdivide`: `#4200ff` is `.nav-links li a:hover`).  A SELECTION state
# (`:checked`) is NOT interaction — on a checkbox/toggle demo it is the design's
# own paint (`ballot`'s `#7e0cf5` fills the checked indicator).
INTER_RX = re.compile(r"(?i):(hover|focus|active|visited|target)")


def sheet_stats(txt: str) -> dict:
    """hex -> {n, bg, fg, bd, sel, prop, hint} for one stylesheet, in one pass.

    Attribution is what makes a "brand" claim checkable: the row's evidence must
    name the declaration (`background` on `.btn`), not just a count.  One pass
    per sheet keeps a 1,700-spec sweep cheap.
    """
    stats = {}
    for m in BLOCK_RX.finditer(txt):
        sel = " ".join(m.group(1).split())[-80:]
        hint = bool(HINT_RX.search(sel) and not STATE_RX.search(sel))
        state = bool(STATE_RX.search(sel))
        inter = bool(INTER_RX.search(sel))
        for d in m.group(2).split(";"):
            if ":" not in d:
                continue
            prop, val = d.split(":", 1)
            hs = [AF.norm("#" + h) for h in HEX_RX.findall(val)]
            if not hs:
                continue
            p = prop.strip().lower()
            kind = ("state" if state and p.startswith("background")
                    else "bg" if p.startswith("background")
                    else "fg" if p.startswith("color") or "text-fill" in p
                    else "bd" if ("border" in p or p.startswith(("outline", "box-shadow")))
                    else None)
            for h in hs:
                st = stats.setdefault(h, dict(n=0, bg=0, fg=0, bd=0, state=0,
                                              inter=0, sel="", prop="", hint=0))
                st["n"] += 1
                if kind:
                    st[kind] += 1
                if hint:
                    st["hint"] += 1
                if inter:
                    # a declaration under `:hover`/`:focus`/`:active`/`:visited`
                    st["inter"] += 1
                if kind == "bg" and not st["bg"]:
                    pass
                # remember the first SURFACE declaration for the evidence line
                if not st["sel"] or (kind == "bg" and st["prop"].lower().startswith("color")):
                    st["sel"], st["prop"] = sel, p
    return stats


def brand_score(st) -> int:
    """A design colour paints surfaces; a text-state colour does not."""
    return 3 * min(st["bg"], 6) + 2 * min(st["hint"], 5) + min(st["n"], 20)


def paints_surface(st) -> bool:
    """Is this colour painted anywhere OUTSIDE an interaction state?

    A `PROSE-ROW` re-states the prep's own value, so it must clear one bar: the
    sheet must paint the colour somewhere a reader could see without hovering.
    A colour painted ONLY under `:hover`/`:focus`/`:active`/`:visited` is a focus
    ring or a hover (measured on `multiform`, whose only `#80bdff` is a
    `.cl-form-control:focus` border, and `subdivide`, whose `#4200ff` is
    `.nav-links li a:hover`); freezing that into a "brand" row gives the
    live-token axis a claim to undo.  Counts are NOT part of the bar — a
    selection state (`:checked`) is the design's own paint on a demo whose whole
    point is the checked indicator (`ballot` `#7e0cf5`), and the prep's stated
    value is already the prep's claim.
    """
    return not (st.get("n") and st.get("inter", 0) >= st.get("n"))


def brand_rows(txt: str):
    """Every brand-role row/bullet with its hexes — BEFORE the chroma filter.

    Same grammar and same guards as `verify-app-fidelity.spec_brand_claims`
    (evidence fences, sibling sentences, re-valuation arrows, rebuilt-sheet
    drift notes, `scale` lines contributing one anchor).  The only difference is
    that the chroma threshold is applied by the caller, so LOW-CHROMA can be
    told apart from SPEC-SILENT.
    """
    out = []
    comments = AF.comment_lines(txt)
    for i, line in enumerate(txt.splitlines(), 1):
        if i in comments:
            continue
        s = line.strip()
        if not s or not HEX_RX.search(s):
            continue
        role = AF.role_of(s)
        if not role or not AF.ROLE_RX.search(role) or AF.ROLE_EXCL_RX.search(role):
            continue
        if AF.SIBLING_RX.search(s) or AF.DELTA_RX.search(s) or AF.REBUILT_RX.search(s):
            continue
        hexes = HEX_RX.findall(s)
        if re.search(r"(?i)\bscale\b", s):
            hexes = hexes[:1]
        for h in hexes:
            h = AF.norm("#" + h)
            if h in AF.SOCIAL_BRAND or not AF.is_chromatic(h):
                continue
            out.append((i, h, role, s[:150]))
    return out


def measure_live(f, slug: str, name: str):
    """Resolve the demo and return its chromatic census, or a skip reason.

    Census = the THEME-owned sheets only (vendor/library/font bundles carry the
    library's palette), and each colour keeps the sheet that paints it most so
    the evidence line names the real stylesheet — a shared skeleton sheet is
    identical across a template family and is not assumed to hold the brand.
    """
    url, html, _tried, via = VT.resolve_preview(f, slug, name)
    if not url:
        return dict(skip="REF-DEAD")
    if via == "name":
        return dict(skip="DEMO-AMBIGUOUS", url=url)
    sheets, theme, vendor = [], [], []
    for su in VT.sheet_urls(html, url)[:20]:
        code, body = f.get(su)
        if code != "200":
            continue
        rec = (su, len(body), VT.sha(body))
        sheets.append(rec)
        if is_vendor(su, url):
            vendor.append(rec)
            continue
        txt = strip_comments(body.decode("utf-8", "replace"))
        theme.append((rec, collections.Counter(AF.norm("#" + h) for h in HEX_RX.findall(txt)), txt))
    if not sheets:
        return dict(skip="NO-SHEET", url=url)
    inline = strip_comments("\n".join(VT.STYLE_RX.findall(html)))
    if inline.strip():
        theme.append((("inline <style>", len(inline), VT.sha(inline.encode())),
                      collections.Counter(AF.norm("#" + h) for h in HEX_RX.findall(inline)),
                      inline))
    if not theme:
        # every linked sheet is a vendor/library bundle and the page has no
        # inline CSS: a colour read from Bootstrap's or an icon font's palette
        # would be the LIBRARY's colour, not the design's
        return dict(skip="NO-THEME-SHEET", url=url,
                    vendor=[n.rsplit("/", 1)[-1] for n, _b, _h in vendor][:4])
    rebuilt = bool(VT.REBUILT_RX.search(" ".join(n for n, _b, _h in sheets))
                   or VT.REBUILT_RX.search(html[:4000]))
    live, stats, where = collections.Counter(), {}, {}
    for rec, counter, txt in theme:
        live.update(counter)
        for h, st in sheet_stats(txt).items():
            agg = stats.setdefault(h, dict(n=0, bg=0, fg=0, bd=0, state=0,
                                           inter=0, sel="", prop="", hint=0))
            for k in ("n", "bg", "fg", "bd", "state", "inter", "hint"):
                agg[k] += st[k]
            if not agg["sel"] and st["sel"]:
                agg["sel"], agg["prop"] = st["sel"], st["prop"]
            if counter.get(h, 0) > where.get(h, (0,))[0]:
                where[h] = (counter.get(h, 0), rec)
    chrom = [(h, live[h]) for h, _st in stats.items() if AF.is_chromatic(h)]
    chrom.sort(key=lambda t: (-brand_score(stats[t[0]]), -t[1], t[0]))
    return dict(skip=None, url=url, sheets=sheets, theme=theme, vendor=vendor,
                live=live, chrom=chrom, stats=stats, where=where, rebuilt=rebuilt)


ROLE_WORD_RX = re.compile(r"(?i)\b(brand|primary|accent|cta|secondary)\b")


def prose_brand(txt: str):
    """(line_no, hex, context) for a brand colour stated WITHOUT a role label.

    `verify-app-fidelity.py` reads two grammars — a table row and a
    `- **Role:** #hex` bullet.  A prep that writes "teal **`#04D2C8`** primary"
    or "brand `#b10707`" states the design's colour but is invisible to that
    grammar, which is most of the 512 NO-CLAIM specs.  Same guards as the
    consumer (evidence fences, sibling sentences, re-valuation arrows, drift
    notes); the nearest hex to the role word wins, and framework defaults are
    never promoted to a design claim.
    """
    comments = AF.comment_lines(txt)
    unver = set()
    lines = txt.splitlines()
    for i, ln in enumerate(lines):
        if "TOKEN-UNVERIFIED" in ln:
            j = i
            while j < len(lines) and (j == i or (lines[j].strip()
                                                 and not lines[j].startswith("#"))):
                unver.update(AF.norm("#" + h) for h in HEX_RX.findall(lines[j]))
                j += 1
    for i, line in enumerate(lines, 1):
        if i in comments:
            continue
        s = line.strip()
        if not s or not HEX_RX.search(s):
            continue
        rm = ROLE_WORD_RX.search(s)
        if not rm:
            continue
        if AF.SIBLING_RX.search(s) or AF.DELTA_RX.search(s) or AF.REBUILT_RX.search(s):
            continue
        best = None
        for m in HEX_RX.finditer(s):
            h = AF.norm(m.group(0))
            if h in AF.SOCIAL_BRAND or h in unver or h in FRAMEWORK:
                continue
            if not AF.is_chromatic(h) or AF.chroma(h) < AF.BRAND_CHROMA:
                continue
            gap = abs(m.start() - rm.start())
            if best is None or gap < best[0]:
                best = (gap, h, rm.group(1).lower())
        if best:
            return (i, best[1], best[2], s[:150])
    return None


def theme_paint(m, h):
    """(sheet, bytes, sha, declarations, selector, property) if a theme sheet paints `h`."""
    for rec, counter, txt in m["theme"]:
        n = counter.get(h, 0)
        if n:
            st = sheet_stats(txt).get(h, {})
            return (rec, n, st.get("sel", ""), st.get("prop", ""))
    return None


def audit_spec(f, root: str, ref: str, path: str, args):
    txt = VT.read(root, ref, path, args.worktree)
    name = path.split("/")[2].replace("template-", "")
    slug = VT.spec_slug(txt)
    if args.slug and slug != args.slug and name != args.slug:
        return None
    if not slug:
        return (name, "NO-SLUG", None, "", {})
    if AF.ALIAS_RX.search(txt):
        return (name, "ALIAS-SKIP", None, "", {})
    if AF.spec_brand_claims(txt):
        return (name, "CLAIMED", None, "", {})
    if "<!-- brand-claim:" in txt:
        # this axis already wrote a row; a consumer that still cannot read it is
        # that consumer's grammar, not an open gap here
        return (name, "CLAIMED-FORM", None, "", {})
    rows = brand_rows(txt)
    if rows:
        best = max(rows, key=lambda r: AF.chroma(r[1]))
        return (name, "LOW-CHROMA", None,
                f"line {best[0]}: {best[1]} chroma {AF.chroma(best[1]):.3f} "
                f"({best[2]}) — consumer threshold {AF.BRAND_CHROMA}", {})
    m = measure_live(f, slug, name)
    if m["skip"]:
        extra = m.get("vendor")
        return (name, m["skip"], None,
                f"{slug}: {m.get('url', '')}" + (f" | vendor-only sheets {extra}" if extra else ""), {})
    if m["rebuilt"]:
        return (name, "REBUILT", None, f"{slug}: rebuilt demo {m['url']}", {})

    # 1) the prep already states the colour in prose -> make it machine-readable
    pb = prose_brand(txt)
    if pb:
        line_no, h, role, ctx = pb
        painted_here = theme_paint(m, h)
        if painted_here and not paints_surface(m["stats"].get(h, {})):
            rec, n, sel, prop = painted_here
            return (name, "PROSE-STATE", h,
                    f"{slug}: prose line {line_no} states {h}; the sheet paints it "
                    f"x{n} ({prop} on `{sel}`) but every declaration sits under an "
                    f"interaction state (:hover/:focus/:active) — a focus ring, not a "
                    f"design surface, so no row is written | {m['url']}", {})
        if painted_here:
            rec, n, sel, prop = painted_here
            where_txt = (f"{rec[0].rsplit('/', 1)[-1]} ({rec[1]:,} B, sha256 {rec[2][:12]})"
                         if rec[0].startswith("http") else "inline <style>")
            what = f"{prop} on `{sel}`" if sel else f"{n} declarations"
            data = dict(name=name, bucket="PROSE-ROW", hex=h, slug=slug,
                        url=m["url"], sheet=rec[0], sheet_bytes=rec[1],
                        sheet_sha=rec[2], count=n, selector=sel, prop=prop,
                        source="prose", role=role, line=line_no)
            return (name, "PROSE-ROW", h,
                    f"{slug}: prose line {line_no} states {h}; live sheet paints it "
                    f"x{n} — {what} in {where_txt} | {m['url']}", data)
        return (name, "PROSE-UNPAINTED", h,
                f"{slug}: prose line {line_no} states {h}, the live theme sheet does "
                f"not paint it (live-token axis' subject) | {m['url']}", {})

    # 2) nothing stated anywhere -> a measured row, if the sheet has a design colour
    if not m["chrom"]:
        return (name, "NO-CHROMA", None,
                f"{slug}: no chromatic colour in the theme sheet", {})
    brandish_all = [(c, n) for c, n in m["chrom"]
                    if c not in FRAMEWORK and c not in AF.SOCIAL_BRAND]
    # eligibility first, ranking second: a high-scoring colour painted twice is
    # not a design token, and must not mask a thrice-painted one selected later
    brandish = [(c, n) for c, n in brandish_all if m["stats"][c]["n"] >= MIN_DECLS]
    if not brandish_all:
        c, n = m["chrom"][0]
        return (name, "FRAMEWORK-ONLY", None,
                f"{slug}: only framework chromatic ({c} x{n})", {})
    if not brandish:
        c, _n = (brandish_all or m["chrom"])[0]
        return (name, "THIN", c,
                f"{slug}: best chromatic {c} x{m['stats'][c]['n']} < {MIN_DECLS}", {})
    lead, _count = brandish[0]
    st = m["stats"][lead]
    if AF.chroma(lead) < AF.BRAND_CHROMA:
        return (name, "LOW-SATURATION", lead,
                f"{slug}: {lead} x{st['n']} chroma {AF.chroma(lead):.3f}", {})
    if st["bg"] < 2 and not st["hint"]:
        # painted only in decorative states (a carousel dot, a hover): naming it
        # "the brand" would be an interpretation, not a measurement
        return (name, "WEAK", lead,
                f"{slug}: {lead} x{st['n']} bg {st['bg']} hint 0 — decorative", {})
    _n, rec = m["where"][lead]
    where_txt = (f"{rec[0].rsplit('/', 1)[-1]} ({rec[1]:,} B, sha256 {rec[2][:12]})"
                 if rec[0].startswith("http") else "inline <style>")
    alts = ", ".join(f"{c} x{m['stats'][c]['n']}" for c, _n in brandish[1:4])
    ctx = (f"{st['prop']} on `{st['sel']}`" if st["sel"] else f"{st['n']} declarations")
    data = dict(name=name, bucket="MEASURED-ROW", hex=lead, slug=slug, url=m["url"],
                sheet=rec[0], sheet_bytes=rec[1], sheet_sha=rec[2],
                count=st["n"], bg=st["bg"], hint=st["hint"],
                selector=st["sel"], prop=st["prop"], alts=alts, source="measured")
    return (name, "MEASURED-ROW", lead,
            f"{slug}: {lead} x{st['n']} (bg {st['bg']}, hint {st['hint']}) — {ctx} "
            f"in {where_txt} | {m['url']} | alts {alts or 'none'}", data)


def read_specs(root: str, ref: str, worktree: bool):
    if worktree:
        base = os.path.join(root, "openspec", "specs")
        out = []
        for dirpath, _d, files in os.walk(base):
            for fn in files:
                if fn == "spec.md":
                    out.append(os.path.relpath(os.path.join(dirpath, fn), root))
        return sorted(out)
    ls = VT.subprocess.run(["git", "ls-tree", "-r", "--name-only", ref,
                            "openspec/specs"], cwd=root,
                           capture_output=True, text=True).stdout.split()
    return sorted(p for p in ls if p.endswith("/spec.md"))


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default=".")
    ap.add_argument("--ref", default="origin/main")
    ap.add_argument("--slug")
    ap.add_argument("--worktree", action="store_true")
    ap.add_argument("--jobs", type=int, default=8)
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--cache", default="/tmp/brand-claims-cache")
    ap.add_argument("--json")
    ap.add_argument("--md")
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args()

    root = os.path.abspath(args.prep_root)
    if not os.path.isdir(os.path.join(root, "openspec")):
        print(f"error: {root} has no openspec/ — pass --prep-root", file=sys.stderr)
        return 2
    f = VT.Fetcher(args.cache, not args.no_net)
    VT.CR.configure(f.get, args.cache)
    specs = read_specs(root, args.ref, args.worktree)
    # shipped specs only: a design with no app is outside the app-side axis too
    specs = [p for p in specs
             if os.path.isdir(os.path.join(root, "apps", p.split("/")[2][9:]))]
    if args.limit:
        specs = specs[:args.limit]
    rows = []
    if args.jobs > 1:
        with ThreadPoolExecutor(max_workers=args.jobs) as ex:
            futs = [ex.submit(audit_spec, f, root, args.ref, p, args) for p in specs]
            for fu in futs:
                try:
                    r = fu.result()
                except Exception as exc:          # a broken spec must not kill the sweep
                    r = ("?", "WORKER-ERROR", None, str(exc)[:120], {})
                if r:
                    rows.append(r)
    else:
        for p in specs:
            r = audit_spec(f, root, args.ref, p, args)
            if r:
                rows.append(r)
    rows.sort(key=lambda r: (r[1], r[0]))
    bucket = collections.Counter(r[1] for r in rows)
    for name, kind, hexv, detail, _d in rows:
        if kind in ("PROSE-ROW", "MEASURED-ROW"):
            print(f"FLAG {kind:12s} {name:18s} {hexv:8s} {detail}")
    if os.environ.get("BRAND_CLAIMS_VERBOSE"):
        for name, kind, hexv, detail, _d in rows:
            if kind not in ("PROSE-ROW", "MEASURED-ROW"):
                print(f"  -- {kind:16s} {name:18s} {detail}")
    print(f"\n=== specs: {len(rows)} buckets: {dict(sorted(bucket.items()))}")
    if args.json:
        out = []
        for n, k, h, d, x in rows:
            rec = dict(x or {})
            rec.update(name=n, bucket=k, hex=h, detail=d)
            out.append(rec)
        json.dump(out, open(args.json, "w"), indent=1)
    if args.md:
        write_md(args.md, rows, bucket)
    return 1 if (bucket.get("PROSE-ROW") or bucket.get("MEASURED-ROW")) else 0


def write_md(path: str, rows, bucket) -> None:
    """The run record: the census, the derivable rows, and the non-flags."""
    bf = [r for r in rows if r[1] in ("PROSE-ROW", "MEASURED-ROW")]
    L = ["# Brand-claim coverage — the specs that state no brand colour", "",
         "Generated by `scripts/verify-brand-claims.py` (read-only). Reproduce with:",
         "", "```sh",
         "python3 scripts/verify-brand-claims.py --ref origin/main --jobs 8 \\",
         "    --cache /tmp/brand-claims-cache --json /tmp/pre.json --md /tmp/pre.md",
         "```", "",
         "`verify-app-fidelity.py` reports `NO-CLAIM` for a shipped spec that states",
         "no brand-role colour: the app-side axis cannot judge it, and an implementer",
         "reading the brief has no palette. This axis splits that set by *why*, and",
         "distinguishes three different facts that `NO-CLAIM` conflates:", "",
         "1. the colour is stated in **prose** but not in a grammar the tooling reads;",
         "2. the spec is genuinely silent and the **live sheet** has a measurable colour;",
         "3. the value is not derivable at all (no theme sheet, rebuilt kit, greyscale).",
         "", "## Buckets", "", "| bucket | n | meaning |", "| --- | --- | --- |",
         f"| PROSE-ROW (flag) | {bucket.get('PROSE-ROW', 0)} | the prep states the colour; the live sheet paints it → re-format as a row |",
         f"| MEASURED-ROW (flag) | {bucket.get('MEASURED-ROW', 0)} | silent spec; the sheet's leading surface colour → measured row |",
         f"| PROSE-UNPAINTED | {bucket.get('PROSE-UNPAINTED', 0)} | stated, but the live theme sheet never paints it (the live-token axis' subject) |",
         f"| LOW-CHROMA | {bucket.get('LOW-CHROMA', 0)} | a brand-role row exists below the app-axis chroma threshold |",
         f"| THIN | {bucket.get('THIN', 0)} | best chromatic declared < {MIN_DECLS}× |",
         f"| WEAK | {bucket.get('WEAK', 0)} | painted only in hover/state selectors |",
         f"| FRAMEWORK-ONLY | {bucket.get('FRAMEWORK-ONLY', 0)} | every chromatic is a framework default |",
         f"| LOW-SATURATION | {bucket.get('LOW-SATURATION', 0)} | chromatic but below BRAND_CHROMA |",
         f"| NO-CHROMA | {bucket.get('NO-CHROMA', 0)} | greyscale sheet |",
         f"| NO-THEME-SHEET | {bucket.get('NO-THEME-SHEET', 0)} | "
         f"no sheet below the demo directory is a theme sheet (vendor/library/font bundles only) |",
         f"| PROSE-STATE | {bucket.get('PROSE-STATE', 0)} | "
         f"stated in prose, but painted only under `:hover`/`:focus` or once — a state, not a surface; no row |",
         f"| REBUILT | {bucket.get('REBUILT', 0)} | the live demo is a rebuilt 3.x kit (drift, not a gap) |",
         f"| REF-DEAD / DEMO-AMBIGUOUS | {bucket.get('REF-DEAD', 0)} / {bucket.get('DEMO-AMBIGUOUS', 0)} | unmeasurable |",
         f"| ALIAS-SKIP / NO-SLUG | {bucket.get('ALIAS-SKIP', 0)} / {bucket.get('NO-SLUG', 0)} | out of scope |",
         f"| CLAIMED / CLAIMED-FORM | {bucket.get('CLAIMED', 0)} / {bucket.get('CLAIMED-FORM', 0)} | already carries a machine-readable claim |",
         "", f"## Rows derivable ({len(bf)})", "",
         "| spec | source | colour | evidence (live sheet) |",
         "| --- | --- | --- | --- |",
         ]
    for name, kind, hexv, detail, d in bf:
        L.append(f"| `{name}` | {'stated' if kind == 'PROSE-ROW' else 'measured'} | `{hexv}` | {detail} |")
    L += ["", "`fix-brand-claims.py` writes each row with this evidence (sheet name, byte",
          "count, sha256, declaration count and the rule that paints it). A PROSE-ROW",
          "re-states the prep's own value — it adds no claim; a MEASURED-ROW is the",
          "live sheet's leading surface colour (background declarations first, then a",
          "button/nav/hero selector, framework and social palettes excluded), never a",
          "screenshot sample.", ""]
    up = [r for r in rows if r[1] == "PROSE-UNPAINTED"]
    if up:
        L += [f"## Stated but not painted ({len(up)})", "",
              "The prep names the colour; the live theme sheet does not paint it. Not",
              "re-formatted here — a row would create a claim the live sheet contradicts,",
              "which is the live-token axis' subject.", "",
              "| spec | colour |", "| --- | --- |"]
        L += [f"| `{n}` | `{h}` |" for n, _k, h, _d, _x in up]
        L.append("")
    open(path, "w").write("\n".join(L) + "\n")


if __name__ == "__main__":
    sys.exit(main())
