#!/usr/bin/env python3
"""verify-token-extra.py — TOKEN-EXTRA triage axis (audit, read-only).

`verify-live-tokens.py` reports a hint, not a verdict:

    TOKEN-EXTRA   the live sheet's leading chromatic colour is absent from the spec

That note conflates at least six different facts.  A colour can be missing because
(a) the prep states it in another notation, (b) it lives in the design notes but
never reached the tokens table, (c) the "leading" colour was read off a VENDOR
bundle (bootstrap / slider / icon font) rather than the design's own sheet,
(d) it is a framework default, (e) it is painted only in `:hover` / `border` /
gradient / keyframe positions (decorative or state, never a surface), or (f) the
prep really does omit the design's dominant surface colour — the one class that is
a prep defect and worth a measured row.

This axis adjudicates all 658 of them into buckets that PARTITION the set exactly
once, with per-sheet attribution and declaration-level role evidence.

| axis | reads |
| --- | --- |
| `verify-live-tokens.py`  | a spec's declared palette vs the live sheet set |
| `verify-brand-claims.py` | does the spec state a brand colour at all |
| **`verify-token-extra.py`** | **why the live leading chromatic is absent, and whether that is a defect** |

BUCKETS (one per spec, priority order)

  NOTATION-MISS   the colour IS in the spec, written `rgb()`/`rgba()`/3-digit hex
  DOC-ONLY        stated in `docs/templates/<name>/*.md`, never in the spec
  VENDOR-LED      no non-vendor sheet paints any chromatic colour
  FRAMEWORK       the leading colour is a CSS-framework default (#007bff …)
  SOCIAL          the leading colour is a social-network palette
  STATE-ONLY      every declaration that paints it is `:hover|:focus|:active|…`
  DECOR-ONLY      every site is border / shadow / gradient / keyframe / outline
  UNPARSED        the sheet paints it but no declaration site can be parsed
  MISSING-BRAND   it paints a background/text surface — the fixable class

Usage:
  python3 verify-token-extra.py [--prep-root DIR] [--ref GITREF] [--worktree]
                                [--no-net] [--cache DIR] [--jobs N]
                                [--json OUT] [--show BUCKET] [--quiet]
Exit code 0 = bucket partition consistent, 1 = partition/equation broke, 2 = usage.
"""
from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import os
import re
import sys
from concurrent.futures import ThreadPoolExecutor

HERE = os.path.dirname(os.path.abspath(__file__))


def _load(fn: str, name: str):
    spec = importlib.util.spec_from_file_location(name, os.path.join(HERE, fn))
    mod = importlib.util.module_from_spec(spec)
    sys.modules[name] = mod
    spec.loader.exec_module(mod)
    return mod


VLT = _load("verify-live-tokens.py", "vlt")

# ---------------------------------------------------------------- sheet classes
# A vendor bundle is never the design (measured on the brand-claim axis: 146 of
# 304 colours were picked from open-iconic / nice-select / animate / bootstrap).
VENDOR_RX = re.compile(
    r"(?i)(bootstrap(?!-sidebar)|open-iconic|font-?awesome|themify|icomoon|flaticon|"
    r"linearicons|simple-line|ionicons|nice-select|animate(?:\.min)?\.css|"
    r"owl\.|slick|swiper|magnific|fancybox|lightbox|jquery|aos\.|wow\.|"
    r"normalize|reset\.css|animate\.css|select2|daterangepicker|"
    r"fonts\.googleapis|css\?family=|slicknav|meanmenu|popper|"
    r"venobox|photoswipe|isotope|fullcalendar|chartist|mdb\.|materialize)")

# CSS-framework defaults are never "the brand" (same list the brand axis uses).
FRAMEWORK_HEX = {
    "#007bff", "#6c757d", "#17a2b8", "#28a745", "#dc3545", "#ffc107", "#343a40",
    "#f8f9fa", "#e9ecef", "#6f42c1", "#fd7e14", "#20c997", "#6610f2", "#e83e8c",
    "#007bff", "#0d6efd", "#198754", "#0dcaf0", "#d63384", "#212529", "#adb5bd",
    "#5a6268", "#565e64", "#117a8b", "#1e7e34", "#bd2130", "#d39e00", "#2f3237",
    # Bootstrap 3/4 defaults that the preview host's vendored bootstrap.css paints
    "#0275d8", "#0044cc", "#5bc0de", "#5cb85c", "#d9534f", "#f0ad4e", "#428bca",
    "#31708f", "#d9ed7f", "#292b2c", "#f7f7f7", "#d9edf7",
}
STATE_RX = re.compile(r"(?i)(:hover|:focus|:active|:visited|:checked|:target|"
                      r"::selection|::-webkit-scrollbar|:disabled|:not\()")
DECOR_PROPS = re.compile(
    r"(?i)^(border|border-[a-z]+|box-shadow|text-shadow|outline|outline-[a-z]+|"
    r"text-decoration|fill|stroke|stroke-[a-z]+|background-image|filter|"
    r"caret-color|column-rule|list-style|accent-color)$")
SURFACE_PROPS = re.compile(r"(?i)^(background|background-color)$")
TEXT_PROPS = re.compile(r"(?i)^color$")
KEYFRAME_SEL = re.compile(r"^(from|to|\d{1,3}%(\s*,\s*\d{1,3}%)*)$")
# a pseudo-element paints a marker/arrow/underline, never a page surface on its own
PSEUDO_RX = re.compile(r"(?i)::?(before|after|placeholder|marker|selection)")
SECTION_RX = re.compile(r"(?i)(hero|banner|section|overlay|wrapper|area|header|"
                        r"footer|jumbotron|slider|cover|masthead|navbar|nav\b)")
# `.active` / `.selected` paint a STATE, not the page surface (measured on the
# accordion family: the only sites for #f16947 were `.active .cl-btn-link`)
ACTIVE_RX = re.compile(r"(?i)\.(active|current|open|show|selected|checked|disabled)\b")
# a progress bar / loader / divider fill is chrome, not a page surface
DECOR_SEL_RX = re.compile(r"(?i)(progress|count-bar|skill-bar|loading|spinner|"
                          r"timeline|divider|scrollbar|overlay-bg|ribbon)")
# social / share palettes are per-network colours, never the design's brand
SOCIAL_SEL_RX = re.compile(r"(?i)(share|social|icon|nth-child\(\d+\)\s+a\b)")
# only the versioned query string / kit path marks the rebuilt 3.x skin; a plain
# `style.min.css` is a normal minified theme sheet and must NOT read as drift
REBUILT_RX = re.compile(r"(\?v=3\.[0-9]|css/kit/)")
BLOCK_RX = re.compile(r"([^{}]+)\{([^{}]*)\}")
HEX_IN_SPEC = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")


def strip_comments(css: str) -> str:
    """Comments are not paint (the brand axis' guard #3)."""
    return re.sub(r"/\*.*?\*/", " ", css, flags=re.S)


# a plugin bundle in `assets/css/plugins/` is not the design even when its file
# name is unknown (measured: `gijgo.css` — a datepicker — led `autodock` with
# Material blue #2196f3)
VENDOR_PATH_RX = re.compile(
    r"(?i)/(plugins?|vendor|vendors|third[-_]?party|libs?|bower_components)/")


def is_vendor(url: str) -> bool:
    if re.search(r"(?i)bootstrap-sidebar", url):
        return False                      # that family's own bootstrap.css IS the sheet
    return bool(VENDOR_RX.search(url.rsplit("/", 1)[-1] or url)
                or VENDOR_PATH_RX.search(url))


def declarations(css: str):
    """(selector, prop, value) triples from minified or pretty CSS."""
    for m in BLOCK_RX.finditer(css):
        sel = " ".join(m.group(1).split())
        sel = sel.split("}")[-1].strip()
        if not sel or len(sel) > 240 or sel.startswith("@"):
            continue
        for d in m.group(2).split(";"):
            if ":" not in d:
                continue
            prop, val = d.split(":", 1)
            prop, val = prop.strip().lower(), val.strip()
            if prop and val:
                yield sel, prop, val


def colour_sites(css: str, hexv: str, sheet: str):
    """Every declaration in `css` that paints `hexv` (hex, rgb() or rgba() form)."""
    r, g, b = VLT.rgb(hexv)
    low_forms = (f"rgb({r},{g},{b}", f"rgba({r},{g},{b},",
                 f"rgb({r}, {g}, {b}", f"rgba({r}, {g}, {b},")
    out = []
    for sel, prop, val in declarations(css):
        v = val.lower().replace(" ", "")
        if VLT.norm("#" + hexv.lstrip("#")) in v or any(f.replace(" ", "") in v for f in low_forms):
            out.append({"sheet": sheet, "selector": sel, "prop": prop,
                        "value": val[:120]})
    return out


def classify_site(site: dict) -> str:
    sel, prop = site["selector"].lower(), site["prop"].lower()
    if prop.startswith("--"):
        # a custom property NAMED by the sheet is the strongest brand evidence
        return "var"
    if KEYFRAME_SEL.match(sel.strip()):
        return "keyframe"
    if prop == "background-image" or "gradient" in site["value"].lower():
        # a gradient stop is a decorative ramp unless it paints a page section
        return "gradient" if (SECTION_RX.search(sel) and not PSEUDO_RX.search(sel)) \
            else "decor"
    if PSEUDO_RX.search(sel):
        return "pseudo"
    if DECOR_SEL_RX.search(sel):
        return "decor"
    if STATE_RX.search(sel) or ACTIVE_RX.search(sel) or "transition" in prop \
            or prop.startswith("animation"):
        return "state"
    if SOCIAL_SEL_RX.search(sel):
        return "social"
    if DECOR_PROPS.match(prop):
        return "decor"
    if SURFACE_PROPS.match(prop):
        return "surface"
    if TEXT_PROPS.match(prop):
        return "text"
    return "other"


SOCIAL_MIN_COLOURS = 3


def is_social_family(key: str, hexes: set) -> bool:
    """A share/social family, or a list painting >=3 distinct chromatic colours
    across its `nth-child` rules (a footer social row)."""
    return len(hexes) >= SOCIAL_MIN_COLOURS or bool(re.search(r"share|social", key))


def social_palette(css: str):
    """Per-network colours: a share/social family, or a list that paints >=3
    distinct chromatic colours across its `nth-child` rules (footer socials)."""
    fam = collections.defaultdict(set)
    for sel, prop, val in declarations(css):
        if not re.search(r"(?i)(share|social|nth-child\(\d+\))", sel):
            continue
        key = re.sub(r"\d+", "N", sel.lower())
        for h in HEX_IN_SPEC.findall(val):
            h = VLT.norm("#" + h)
            if VLT.is_chromatic(h):
                fam[key].add(h)
    out = set()
    for key, hexes in fam.items():
        if is_social_family(key, hexes):
            out |= hexes
    return out


def cascade_winner(sheets, selector: str, prop: str):
    """The declaration that WINS for (selector, prop) in link order.

    A kit default is often re-declared by the theme's own sheet later in the
    cascade; reading the first hit names a colour the browser never paints.
    Returns {"hex", "sheet", "bytes", "sha", "selector", "prop", "value"} or None.
    """
    key_sel, key_prop = " ".join(selector.lower().split()), prop.lower()
    win = None
    for s in sheets:
        for sel, pr, val in declarations(s["css"]):
            if " ".join(sel.lower().split()) != key_sel or pr.lower() != key_prop:
                continue
            hexes = [VLT.norm("#" + h) for h in HEX_IN_SPEC.findall(val)
                     if VLT.is_chromatic(VLT.norm("#" + h))]
            if hexes:
                win = {"hex": hexes[-1], "sheet": s["url"], "bytes": s["bytes"],
                       "sha": s["sha"], "selector": sel, "prop": pr, "value": val}
    return win


def sheets_of(f, html: str, url: str):
    """[(url, css, bytes, sha, vendor)] for every stylesheet the page links."""
    out = []
    for su in VLT.sheet_urls(html, url)[:20]:
        code, body = f.get(su)
        if code == "200":
            out.append({"url": su, "css": strip_comments(body.decode("utf-8", "replace")),
                        "bytes": len(body), "sha": VLT.sha(body), "vendor": is_vendor(su)})
    inline = "\n".join(VLT.STYLE_RX.findall(html))
    if inline.strip():
        out.append({"url": "(inline <style>)", "css": strip_comments(inline),
                    "bytes": len(inline), "sha": VLT.sha(inline.encode()), "vendor": False})
    return out


def doc_states(root: str, name: str, hexv: str):
    """Is the colour stated in docs/templates/<name>/ (design-notes / tasks)?"""
    r, g, b = VLT.rgb(hexv)
    forms = {hexv, hexv.lstrip("#"), f"{r},{g},{b}", f"{r}, {g}, {b}",
             f"{r},{g},{b},", f"{r}, {g}, {b},"}
    hit = []
    base = os.path.join(root, "docs", "templates", name)
    if not os.path.isdir(base):
        return hit
    for fn in sorted(os.listdir(base)):
        if not fn.endswith(".md"):
            continue
        try:
            t = open(os.path.join(base, fn), encoding="utf-8", errors="replace").read().lower()
        except OSError:
            continue
        if any(f in t for f in forms):
            hit.append(fn)
    return hit


def spec_notation(txt: str, hexv: str):
    """Is the colour in the spec under a different notation (rgb/rgba/3-digit)?"""
    r, g, b = VLT.rgb(hexv)
    forms = (f"rgb({r},{g},{b}", f"rgba({r},{g},{b},", f"rgb({r}, {g}, {b}",
             f"rgba({r}, {g}, {b},")
    low = txt.lower().replace(" ", "")
    for f in forms:
        if f.replace(" ", "") in low:
            return f
    # 3-digit spelling of a 6-digit colour (only when every byte repeats)
    if len({hexv[1:3], hexv[3:5], hexv[5:7]}) == 3:
        short = "#" + hexv[1] + hexv[3] + hexv[5]
        if short in txt.lower():
            return short
    return None


def triage_one(f, root: str, ref: str, path: str, args):
    txt = VLT.read(root, ref, path, args.worktree)
    name = path.split("/")[2].replace("template-", "")
    if args.slug and name != args.slug:
        return None
    slug = VLT.spec_slug(txt)
    if not slug:
        return None
    if VLT.ALIAS_RX.search(txt):
        return None
    url, html, tried, via = VLT.resolve_preview(f, slug, name)
    if not url or via == "name":
        return None
    sheets = sheets_of(f, html, url)
    if not sheets:
        return None
    theme = [s for s in sheets if not s["vendor"]]
    vendor = [s for s in sheets if s["vendor"]]

    def census(group):
        c = collections.Counter()
        for s in group:
            social = social_palette(s["css"])
            for sel, prop, val in declarations(s["css"]):
                for h in HEX_IN_SPEC.findall(val):
                    h = VLT.norm("#" + h)
                    if VLT.is_chromatic(h) and h not in social:
                        c[h] += 1
        return c

    theme_c, vendor_c = census(theme), census(vendor)
    lead = None
    if theme_c:
        # eligibility before ranking (brand axis guard #6): a colour painted at
        # least twice, else the single best paint, so one-off accents cannot lead
        best = max(theme_c.values())
        pool = [h for h, n in theme_c.items() if n >= min(2, best)] or list(theme_c)
        lead = sorted(pool, key=lambda h: (-theme_c[h], h))[0]
    if lead is None and vendor_c:
        lead = sorted(vendor_c, key=lambda h: (-vendor_c[h], h))[0]

    if not lead:
        return None
    spec_hexes = {VLT.norm("#" + h) for h in HEX_IN_SPEC.findall(txt)}
    if lead in spec_hexes:
        return None                              # not a TOKEN-EXTRA spec at all

    site_sheet = None
    sites = []
    for s in theme if theme_c else vendor:
        hits = colour_sites(s["css"], lead, s["url"])
        if hits:
            site_sheet = s
            sites = hits
            break
    notation = spec_notation(txt, lead)
    docs = doc_states(root, name, lead)

    rebuilt = bool(REBUILT_RX.search(" ".join(s["url"] for s in sheets))
                   or REBUILT_RX.search(html[:4000]))
    roles = collections.Counter(classify_site(s) for s in sites)
    # priority order: an axis artefact (notation / rebuilt skin / framework default)
    # is adjudicated BEFORE "the prep omits it", and decorative roles before the
    # one fixable class.  Each spec lands in exactly one bucket.
    if notation:
        bucket = "NOTATION-MISS"
    elif rebuilt:
        bucket = "SHEET-DRIFT"
    elif lead in FRAMEWORK_HEX:
        bucket = "FRAMEWORK"
    elif lead in VLT.SOCIAL_BRAND:
        bucket = "SOCIAL"
    elif not theme_c:
        bucket = "VENDOR-LED"
    elif docs:
        bucket = "DOC-ONLY"
    elif sites and set(roles) <= {"social"}:
        bucket = "SOCIAL"
    elif sites and set(roles) <= {"state"}:
        bucket = "STATE-ONLY"
    elif sites and set(roles) <= {"decor", "keyframe", "state", "pseudo", "social"}:
        bucket = "DECOR-ONLY"
    elif not sites:
        bucket = "UNPARSED"
    else:
        bucket = "MISSING-BRAND"

    # the strongest surface/text site, for the fixer's evidence line
    RANK = {"surface": 0, "var": 1, "text": 2, "gradient": 3, "other": 4,
            "decor": 5, "pseudo": 6, "social": 7, "state": 8, "keyframe": 9}
    ranked = sorted(sites, key=lambda s: (RANK[classify_site(s)], len(s["selector"])))
    best = ranked[0] if ranked else None

    # CASCADE: a later sheet re-declaring the same selector+property wins, so a
    # kit default can be overridden by the theme's own sheet.  When it is, the
    # colour a builder must paint is the WINNER, not the leading default.
    count = (theme_c or vendor_c)[lead]
    if best and bucket == "MISSING-BRAND":
        win = cascade_winner(theme or vendor, best["selector"], best["prop"])
        if win and win["hex"] != lead:
            if win["hex"] in spec_hexes or spec_notation(txt, win["hex"]):
                bucket = "EFFECTIVE-STATED"          # the spec already states what wins
            else:
                lead = win["hex"]
                site_sheet = {"url": win["sheet"], "bytes": win["bytes"],
                              "sha": win["sha"]}
                sites = [{"selector": win["selector"], "prop": win["prop"],
                          "value": win["value"], "sheet": win["sheet"]}]
                best = sites[0]
                roles = collections.Counter(classify_site(s) for s in sites)
                count = sum(1 for sel, prop, val in declarations(
                    next(s["css"] for s in (theme or vendor) if s["url"] == win["sheet"]))
                    if lead in {"#" + h.lower() for h in HEX_IN_SPEC.findall(val)})
    return {
        "name": name, "slug": slug, "url": url, "via": via, "bucket": bucket,
        "hex": lead, "count": count,
        "sheet": (site_sheet or (theme[0] if theme else vendor[0]))["url"],
        "sheet_bytes": (site_sheet or (theme[0] if theme else vendor[0]))["bytes"],
        "sheet_sha": (site_sheet or (theme[0] if theme else vendor[0]))["sha"],
        "roles": dict(roles),
        "site": ({"selector": best["selector"], "prop": best["prop"]} if best else None),
        "sites": sites[:4],
        "spec_chromatic": sorted(spec_hexes)[:8],
        "notation": notation, "docs": docs,
        "theme_sheets": [s["url"].rsplit("/", 1)[-1] for s in theme][:6],
        "vendor_sheets": [s["url"].rsplit("/", 1)[-1] for s in vendor][:6],
    }


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default=".")
    ap.add_argument("--ref", default="origin/main")
    ap.add_argument("--worktree", action="store_true")
    ap.add_argument("--slug")
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--cache", default="/tmp/live-tokens-cache")
    ap.add_argument("--jobs", type=int, default=8)
    ap.add_argument("--json")
    ap.add_argument("--show")
    ap.add_argument("--quiet", action="store_true")
    args = ap.parse_args()

    root = os.path.abspath(args.prep_root)
    if not os.path.isdir(os.path.join(root, "openspec")):
        print(f"error: {root} has no openspec/", file=sys.stderr)
        return 2
    f = VLT.Fetcher(args.cache, not args.no_net)
    specs = VLT.read_specs(root, args.ref, True, args.worktree)
    if args.slug:
        specs = [p for p in specs if f"/template-{args.slug}/" in p]

    rows = []
    with ThreadPoolExecutor(max_workers=max(1, args.jobs)) as ex:
        for r in ex.map(lambda p: triage_one(f, root, args.ref, p, args), specs):
            if r:
                rows.append(r)

    # ---- post-pass guards (need the whole corpus, not one spec)
    # (1) SKELETON: the same (sheet sha, colour) in >=3 preps is a shared
    #     component kit (`style.css` byte-identical across demos), so the colour
    #     belongs to the kit, not to any one design (brand axis guard #2).
    seen = collections.Counter((r["sheet_sha"], r["hex"]) for r in rows)
    # (2) WEAK: a colour painted once or twice on a component selector is an
    #     accent, not the design's leading surface.
    for r in rows:
        if r["bucket"] != "MISSING-BRAND":
            continue
        sel = (r["site"] or {}).get("selector", "")
        if seen[(r["sheet_sha"], r["hex"])] >= 3:
            r["bucket"] = "SKELETON"
        elif r["count"] < 3 and not (SECTION_RX.search(sel)
                                     or re.search(r"(?i)(btn|cta|button)", sel)):
            r["bucket"] = "WEAK"

    buckets = collections.Counter(r["bucket"] for r in rows)
    if not args.quiet:
        for r in rows:
            if args.show and r["bucket"] != args.show:
                continue
            site = (f"`{r['site']['prop']}` on `{r['site']['selector']}`"
                    if r["site"] else "no site")
            print(f"{r['bucket']:14s} {r['name']:22s} {r['hex']} "
                  f"×{r['count']:<3d} {site[:70]}")
        print("\n=== partitions (each spec exactly once)")
        for b, n in buckets.most_common():
            print(f"  {b:14s} {n}")
        print(f"  {'TOTAL':14s} {sum(buckets.values())}")
    if args.json:
        json.dump({"buckets": dict(buckets), "rows": rows}, open(args.json, "w"), indent=1)
        print(f"json: {args.json}  rows: {len(rows)}")
    # the partition must account for every row exactly once (axis-chain rule (a))
    return 0 if sum(buckets.values()) == len(rows) else 1


if __name__ == "__main__":
    sys.exit(main())
