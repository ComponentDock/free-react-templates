#!/usr/bin/env python3
"""verify-evidence-cells-controls.py — control harness for the evidence-cell axis.

Mutation-based and fully offline: every case builds a synthetic prep root (one
spec) plus a fake fetcher (URL → bytes), so no network and no repo are needed.

The GATE cases disable ONE guard in the verifier and prove the payload then
fires — a control that cannot fail proves nothing.

Run: python3 verify-evidence-cells-controls.py          # expects 39/39 (11 GATE)
"""
from __future__ import annotations

import hashlib
import importlib.util
import os
import re
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VEC = os.path.join(HERE, "verify-evidence-cells.py")

DEMO = "https://preview.colorlib.com/theme/demo/"

HTML = """<!doctype html><html><head>
<link rel="stylesheet" href="css/style.css">{extra_links}
</head><body><div style="color:{inline}">x</div><!-- {pad} --></body></html>"""

CSS = """h1, h2 {{ color: {hex}; }}
.card:hover {{ background: {hex}; }}
.btn {{ border-color: {hex}; }}
{a}
"""

SPEC = """# Template: Demo (Landing)

## Purpose

A recreation of the reference at {demo}.

## Design tokens

| Token | Value | Evidence in the reference |
| --- | --- | --- |
{rows}

Palette in order of use: {census}

## Requirements

### Requirement: Hero

#### Scenario: Renders
- **WHEN** it mounts
- **THEN** it renders
"""


def load():
    spec = importlib.util.spec_from_file_location("vec", VEC)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


class Fake:
    """A Fetcher stand-in: only the URLs in `pages` resolve."""

    def __init__(self, pages):
        self.pages = pages

    def get(self, url, timeout=25):
        return self.pages.get(url, b"")


def build(rows, census="`#123456` ×3", hexv="#123456", css_extra="",
          page_css=None, links="", inline="#000000", pages=None):
    """(root, spec_path, fetcher) for one synthetic prep."""
    tmp = tempfile.mkdtemp()
    root = os.path.join(tmp, "repo")
    d = os.path.join(root, "openspec", "specs", "template-demo")
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, "spec.md")
    open(path, "w").write(SPEC.format(rows=rows, census=census, demo=DEMO))
    css = page_css if page_css is not None else CSS.format(hex=hexv, a=css_extra)
    html = HTML.format(extra_links=links, inline=inline, pad="x" * 2200)
    p = {DEMO: html.encode(), DEMO + "css/style.css": css.encode()}
    if pages:
        p.update(pages)
    return root, path, Fake(p)


def run(rows, mod=None, **kw):
    root, path, fetcher = build(rows, **kw)
    mod = mod or load()
    return mod.audit_spec(fetcher, root, path), mod, path, fetcher


def buckets(rec):
    return ([f[0] for f in rec["flags"]], [n[0] for n in rec["notes"]])


CASES = []


def case(name, fn, gate=False):
    CASES.append((name, fn, gate))


# ---- controls -------------------------------------------------------------
def c01_match():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — `.card:hover`, `h2` |")
    return buckets(rec) == ([], [])


def c02_skew():
    rec, *_ = run("| Accent | `#123456` | 9 declarations — `.card:hover` |")
    fl, nt = buckets(rec)
    return fl == [] and "COUNT-SKEW" in nt


def c03_absent():
    rec, *_ = run("| Accent | `#abcdef` | 2 declarations — `.card:hover` |")
    return buckets(rec)[0] == ["COLOUR-ABSENT"]


REBUILD_LINK = ('<link rel="stylesheet" '
                'href="vendor/swiper/14.3.0/swiper-bundle.min.css?v=3.0.0">')
REBUILD_PAGE = {DEMO + "vendor/swiper/14.3.0/swiper-bundle.min.css?v=3.0.0":
                b"/*x*/" * 100}


OLD_SHEET = ("Sheet: `https://preview.colorlib.com/theme/demo/css/old.css` "
             "(41,697 B, sha256 `5513820662db`)\n\n")


def c04_absent_stale():
    rec, *_ = run("| Accent | `#abcdef` | 2 declarations — `.card:hover` |" + OLD_SHEET,
                  links=REBUILD_LINK, pages=dict(REBUILD_PAGE, **{
                      DEMO + "css/old.css": (".x{color:#00ff00}" * 40).encode()}))
    fl, nt = buckets(rec)
    return fl == [] and "COLOUR-ABSENT-STALE" in nt and "STALE-SKIN" in nt


def c04b_gate_identity():
    """GATE: with the identity comparison disabled, the same cell flags."""
    mod = load()
    mod.identity_changed = lambda txt, url, body: False
    rec, *_ = run("| Accent | `#abcdef` | 2 declarations — `.card:hover` |" + OLD_SHEET,
                  mod=mod, links=REBUILD_LINK, pages=dict(REBUILD_PAGE, **{
                      DEMO + "css/old.css": (".x{color:#00ff00}" * 40).encode()}))
    return buckets(rec)[0] == ["COLOUR-ABSENT"]


def c05_selector_absent():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — `.nope` |")
    return buckets(rec)[0] == ["SELECTOR-ABSENT"]


def c06_grouped():
    rec, *_ = run("| Ink | `#123456` | 3 declarations — `h1` |")
    return buckets(rec)[0] == []


def c06b_gate_grouped():
    mod = load()
    mod.sel_atoms = lambda cell, a, b: cell.strip().lower() in (a | b)
    mod.selector_parts = lambda css: {" ".join(s.split()).lower()
                                      for s, p, v in mod.css_units(css)}
    rec, *_ = run("| Ink | `#123456` | 3 declarations — `h1` |", mod=mod)
    return buckets(rec)[0] == ["SELECTOR-ABSENT"]


def c07_prop_note():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — `.card:hover{background}` |")
    return buckets(rec)[0] == []


def c08_truncated():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — `.card:hov...` |")
    return buckets(rec)[0] == []


def c09_prose_cell():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — (bg + border) |")
    return buckets(rec)[0] == []


def c10_ramp():
    rec, *_ = run("| Scale | teal `#4ecdc4` (300) over `#3dbcb3` (400) | ramp |",
                  census="")
    return rec["claims"] == 0


def c10b_gate_ramp():
    mod = load()
    mod.RAMP_WEIGHTS = set()
    rec, *_ = run("| Scale | teal `#4ecdc4` (300) over `#3dbcb3` (400) | ramp |",
                  mod=mod, census="")
    return rec["claims"] >= 2


def c11_scale_keyword():
    _, _, path, _ = run("| Brand | cyan scale — primary `#06b6d4` (500), `#0891b2` (600) | x |",
                        census="")
    mod = load()
    claims = mod.claims_of(open(path).read())
    return not any(c["kind"] == "census" for c in claims)


def c12_census():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                  census="`#123456` ×9")
    nt = buckets(rec)[1]
    return nt.count("COUNT-SKEW") == 1


def c13_no_source():
    tmp = tempfile.mkdtemp()
    root, path, _ = build("| Accent | `#123456` | 3 declarations |")
    mod = load()
    rec = mod.audit_spec(Fake({}), root, path)
    return buckets(rec) == ([], ["NO-SOURCE"])


def c14_unlinked_sheet():
    """A cited sheet the demo does not link is not `stale` without a rebuild."""
    mod = load()
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |")
    txt = open(path).read().replace(
        "## Requirements",
        "Sheet: `https://preview.colorlib.com/theme/demo/css/other.css`\n\n## Requirements")
    open(path, "w").write(txt)
    fetcher.pages[DEMO + "css/other.css"] = (".x{color:#123456}" * 60).encode()
    rec = mod.audit_spec(fetcher, root, path)
    fl, nt = buckets(rec)
    return fl == [] and "STALE-SKIN" not in nt


def c14b_identity_unrecorded():
    """No recorded size/sha beside the citation → IDENTITY-UNRECORDED note."""
    mod = load()
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |")
    txt = open(path).read().replace(
        "## Requirements",
        "Sheet: `https://preview.colorlib.com/theme/demo/css/other.css`\n\n## Requirements")
    open(path, "w").write(txt)
    fetcher.pages[DEMO + "css/other.css"] = (".x{color:#123456}" * 60).encode()
    rec = mod.audit_spec(fetcher, root, path)
    fl, nt = buckets(rec)
    return fl == [] and "IDENTITY-UNRECORDED" in nt


def c15_sheet_without_css_dir():
    mod = load()
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |")
    txt = open(path).read().replace(
        "## Requirements",
        "Sheet: `https://preview.colorlib.com/theme/demo/style.css`\n\n## Requirements")
    open(path, "w").write(txt)
    rec = mod.audit_spec(fetcher, root, path)
    return buckets(rec)[0] == []


def c15b_gate_sheet_dir():
    mod = load()
    mod.fetch_sheet = lambda f, u: f.get(u).decode("utf-8", "replace")
    root, path, fetcher = build("| Accent | `#abcdef` | 3 declarations — `.card:hover` |")
    txt = open(path).read().replace(
        "## Requirements",
        "Sheet: `https://preview.colorlib.com/theme/demo/style.css`\n\n## Requirements")
    open(path, "w").write(txt)
    rec = mod.audit_spec(fetcher, root, path)
    return buckets(rec)[0] == ["COLOUR-ABSENT"]


def c16_gradient():
    rec, *_ = run("| Gradients | 2 declarations | `.card:hover` |",
                  css_extra="\n.g1{background:linear-gradient(#123456,#ffffff)}"
                            "\n.g2{background:linear-gradient(#000,#fff)}")
    return any(n.startswith("GRADIENT") for n in buckets(rec)[1])


def c17_rgb():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                  css_extra="h1{color:rgb(18, 52, 86)}")
    return buckets(rec)[0] == []


def c18_inline_attr():
    rec, *_ = run("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                  page_css=CSS.format(hex="#123456", a=""), inline="#123456")
    return buckets(rec)[0] == []


def c19_short_hex():
    rec, *_ = run("| Surface | `#ffffff` | 3 declarations — `h1` |", census="",
                  page_css="h1{color:#fff;border-color:#fff;background:#fff}"
                           ".card:hover{background:#fff}")
    return buckets(rec)[0] == []


def c20_no_claims():
    rec, *_ = run("| Accent | `#123456` | buttons and links |", census="")
    return rec["claims"] == 0 and buckets(rec)[0] == []


def c21_count_is_a_note():
    rec, *_ = run("| Accent | `#123456` | 400 declarations — `.card:hover` |")
    return buckets(rec)[0] == [] and "COUNT-SKEW" in buckets(rec)[1]


PAD = "/* " + "y" * 260 + " */"


def c22_duplicate_sheet_once():
    """The same bytes served under two URLs is ONE sheet: 3 declarations stay 3."""
    mod = load()
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                                css_extra=PAD)
    txt = open(path).read()
    txt = txt.replace("## Requirements",
                      "Sheets: `https://preview.colorlib.com/theme/demo/style.css`, "
                      "`https://preview.colorlib.com/theme/demo/css/style.css`\n\n"
                      "## Requirements")
    open(path, "w").write(txt)               # both spellings serve the SAME file
    fetcher.pages[DEMO + "style.css"] = fetcher.pages[DEMO + "css/style.css"]
    rec = mod.audit_spec(fetcher, root, path)
    fl, nt = buckets(rec)
    return fl == [] and "COUNT-SKEW" not in nt   # only IDENTITY-UNRECORDED may remain


def c22b_gate_dedupe():
    """GATE: without content dedupe the same cell reads 6 declarations."""
    mod = load()
    mod.dedupe_sheets = lambda pairs, demo=None: list(pairs)
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                                css_extra=PAD)
    txt = open(path).read().replace(
        "## Requirements",
        "Sheets: `https://preview.colorlib.com/theme/demo/style.css`, "
        "`https://preview.colorlib.com/theme/demo/css/style.css`\n\n## Requirements")
    open(path, "w").write(txt)
    fetcher.pages[DEMO + "style.css"] = fetcher.pages[DEMO + "css/style.css"]
    rec = mod.audit_spec(fetcher, root, path)
    return buckets(rec)[0] == [] and "COUNT-SKEW" in buckets(rec)[1]


def c23_minified_twin():
    """A prep citing the minified twin of the sheet the demo links is ONE sheet."""
    mod = load()
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                                css_extra=PAD)
    txt = open(path).read().replace(
        "## Requirements",
        "Sheets: `https://preview.colorlib.com/theme/demo/css/style.css`, "
        "`https://preview.colorlib.com/theme/demo/style.min.css`\n\n"
        "## Requirements")
    open(path, "w").write(txt)
    fetcher.pages[DEMO + "style.min.css"] = (fetcher.pages[DEMO + "css/style.css"]
                                             + b"\n/*min*/")
    rec = mod.audit_spec(fetcher, root, path)
    fl, nt = buckets(rec)
    return fl == [] and "COUNT-SKEW" not in nt


def c23b_gate_min_stem():
    """GATE: without the path-key rule the two forms double the count."""
    mod = load()
    mod.sheet_key = lambda u, demo=None: u          # identity by URL only
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                                css_extra=PAD)
    txt = open(path).read().replace(
        "## Requirements",
        "Sheets: `https://preview.colorlib.com/theme/demo/css/style.css`, "
        "`https://preview.colorlib.com/theme/demo/style.min.css`\n\n"
        "## Requirements")
    open(path, "w").write(txt)
    fetcher.pages[DEMO + "style.min.css"] = (fetcher.pages[DEMO + "css/style.css"]
                                             + b"\n/*min*/")
    rec = mod.audit_spec(fetcher, root, path)
    return "COUNT-SKEW" in buckets(rec)[1]


PAGE_ID = ("Evidence: https://preview.colorlib.com/theme/demo/ (HTTP 200, 49,321 B, "
           "sha256 `eb293b4f29c9`, fetched 2026-10-23) and its design stylesheet "
           "`css/style.css`.\n\n")


def c24_page_identity_is_not_the_sheet():
    """The page's 49,321 B / sha before the basename is NOT the sheet's identity."""
    mod = load()
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                                css_extra=PAD)
    txt = open(path).read().replace("## Requirements", PAGE_ID + "## Requirements")
    open(path, "w").write(txt)
    rec = mod.audit_spec(fetcher, root, path)
    fl, nt = buckets(rec)
    return fl == [] and "IDENTITY-UNRECORDED" in nt and "STALE-SKIN" not in nt


def c24b_gate_pre_basename_identity():
    """GATE: matching the whole line reads the page's numbers as the sheet's."""
    mod = load()

    def old(txt, url):
        base = os.path.basename(url.split("?")[0])
        lines = txt.splitlines()
        for i, ln in enumerate(lines):
            if base not in ln:
                continue
            blob = ln + " " + (lines[i + 1] if i + 1 < len(lines) else "")
            mb = mod.BYTES_RX.search(blob)
            ms = mod.SHA_RX.search(blob)
            return (int(mb.group(1).replace(",", "")) if mb else None,
                    ms.group(1) if ms else None)
        return None, None

    mod.recorded_identity = old
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `.card:hover` |",
                                css_extra=PAD)
    txt = open(path).read().replace("## Requirements", PAGE_ID + "## Requirements")
    open(path, "w").write(txt)
    rec = mod.audit_spec(fetcher, root, path)
    return "STALE-SKIN" in buckets(rec)[1]


LONG_SEL = (".header-area .top-header-area .top-header-content "
            ".top-breaking-news-area .ticker ul li a:hover")


def c25_long_selector():
    """A 100-char descendant chain in the sheet is NOT absent."""
    mod = load()
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `" + LONG_SEL + "` |",
                                css_extra=PAD + "\n" + LONG_SEL + "{color:#123456}\n")
    rec = mod.audit_spec(fetcher, root, path)
    return buckets(rec)[0] == []


def c25b_gate_selector_cap():
    """GATE: the shared parser's 90-char cap cuts the atom and flags it."""
    mod = load()
    if mod.TBF is None:
        return False
    mod.css_units = mod.TBF.parse_rules
    root, path, fetcher = build("| Accent | `#123456` | 3 declarations — `" + LONG_SEL + "` |",
                                css_extra=PAD + "\n" + LONG_SEL + "{color:#123456}\n")
    rec = mod.audit_spec(fetcher, root, path)
    return buckets(rec)[0] == ["SELECTOR-ABSENT"]


def c26_commented_out():
    """A hex that only lives in a CSS comment paints nothing."""
    mod = load()
    root, path, fetcher = build("| Accent | `#abcdef` | 3 declarations — `.card:hover` |",
                                css_extra="\n.legacy{/* accent: #abcdef */}")
    rec = mod.audit_spec(fetcher, root, path)
    return buckets(rec)[0] == ["COLOUR-ABSENT"]


def c26b_gate_comments():
    """GATE: without comment stripping the comment counts as paint."""
    mod = load()
    orig = mod.css_units
    mod.COMMENT_RX = re.compile(r"\0")          # never strip

    def units(css):
        return orig(css)

    mod.css_units = units
    root, path, fetcher = build("| Accent | `#abcdef` | 3 declarations — `.card:hover` |",
                                css_extra="\n.legacy{/* accent: #abcdef */}")
    rec = mod.audit_spec(fetcher, root, path)
    return buckets(rec)[0] == []


def c27_rebuilt_skin():
    """A v3 rebuild with no recorded identity cannot un-paint a colour."""
    rec, *_ = run("| Accent | `#abcdef` | 2 declarations — `.card:hover` |",
                  links=REBUILD_LINK, pages=dict(REBUILD_PAGE))
    fl, nt = buckets(rec)
    return fl == [] and "REBUILT-SKIN" in nt and "COLOUR-ABSENT-REBUILT" in nt


def c27b_gate_rebuilt():
    """GATE: without the rebuild guard the same cell flags."""
    mod = load()
    mod.REBUILT_RX = re.compile(r"\0")
    rec, *_ = run("| Accent | `#abcdef` | 2 declarations — `.card:hover` |",
                  mod=mod, links=REBUILD_LINK, pages=dict(REBUILD_PAGE))
    return buckets(rec)[0] == ["COLOUR-ABSENT"]


def c28_confirmed_identity_still_flags():
    """GATE-adjacent: a byte-confirmed sheet keeps the flag even when rebuilt."""
    sheet = ".x{color:#00ff00}" * 40
    rec, *_ = run("| Accent | `#abcdef` | 2 declarations — `.card:hover` |\n"
                  "Sheets: `https://preview.colorlib.com/theme/demo/css/old.css` "
                  "(%d B)" % len(sheet),
                  links=REBUILD_LINK,
                  pages=dict(REBUILD_PAGE, **{DEMO + "css/old.css": sheet.encode()}))
    return buckets(rec)[0] == ["COLOUR-ABSENT"]


MAIN_BODY = (".x{color:#123456}" * 1500)
MAIN_SHA = hashlib.sha256(MAIN_BODY.encode()).hexdigest()[:12]


def _substring_case(mod=None):
    """(rec) for a prep that cites `styles/styles.css` under a `main_styles.css` line."""
    plugin = ".icon{color:#00ff00}" * 60            # 1,440 B icon font
    txt = ("| Accent | `#123456` | 3 declarations — `.card:hover` |\n\n"
           "Sheet `styles/main_styles.css` — HTTP 200, %s B, "
           "sha256 `%s…`.\n"
           "Plugin `styles/styles.css` is an icon font.\n" % (f"{len(MAIN_BODY):,}", MAIN_SHA))
    pages = {DEMO + "styles/main_styles.css": MAIN_BODY.encode(),
             DEMO + "styles/styles.css": plugin.encode()}
    rec, *_ = run(txt, mod=mod, pages=pages)
    return rec


def c29_substring_basename() -> bool:
    """A cited `styles.css` must not borrow `main_styles.css`'s identity.

    `styles.css` is a SUBSTRING of `main_styles.css`; a bare `find()` read the
    theme sheet's numbers as the icon plugin's and reported the plugin stale
    (blitz, in every census from -24a).  Correct reading: nothing is recorded
    beside the cited plugin, so the question cannot be asked.
    """
    fl, nt = buckets(_substring_case())
    return fl == [] and "STALE-SKIN" not in nt and "IDENTITY-UNRECORDED" in nt


def c29b_gate_substring_basename() -> bool:
    """GATE: with the unbounded substring match back, the same prep reads stale."""
    mod = load()

    def bare(txt, url):
        base = os.path.basename(url.split("?")[0])
        lines = txt.splitlines()
        for i, ln in enumerate(lines):
            pos = ln.find(base)
            if pos < 0:
                continue
            tail = ln[pos + len(base):] + " " + (lines[i + 1] if i + 1 < len(lines) else "")
            mb = mod.BYTES_RX.search(tail)
            ms = mod.SHA_RX.search(tail)
            if mb or ms:
                return (int(mb.group(1).replace(",", "")) if mb else None,
                        ms.group(1) if ms else None)
        return None, None

    mod.recorded_identity = bare
    return "STALE-SKIN" in buckets(_substring_case(mod))[1]


def c30_lf_basis_is_not_drift() -> bool:
    """A sha recorded from a TEXT-mode read is a basis defect, not design drift.

    Size and content agree (the bytes are the same file); only the newline
    normalisation differs.  Reported as SHA-BASIS-LF so the record can be fixed
    instead of the design re-measured.
    """
    body = b"/* c */\r\n" + b".card:hover{color:#123456}\r\n" * 60
    lf = hashlib.sha256(body.replace(b"\r\n", b"\n")).hexdigest()
    txt = ("| Accent | `#123456` | 3 declarations — `.card:hover` |\n\n"
           "Sheet `css/plain.css` (%d B, sha256 `%s…`).\n" % (len(body), lf[:12]))
    rec, *_ = run(txt, pages={DEMO + "css/plain.css": body})
    fl, nt = buckets(rec)
    return fl == [] and "SHA-BASIS-LF" in nt and "STALE-SKIN" not in nt


def c30b_gate_lf_basis() -> bool:
    """GATE: without the basis probe the same prep reads STALE-SKIN."""
    mod = load()
    mod.NEWLINE_RX = re.compile(r"\0")
    body = b"/* c */\r\n" + b".card:hover{color:#123456}\r\n" * 60
    lf = hashlib.sha256(body.replace(b"\r\n", b"\n")).hexdigest()
    txt = ("| Accent | `#123456` | 3 declarations — `.card:hover` |\n\n"
           "Sheet `css/plain.css` (%d B, sha256 `%s…`).\n" % (len(body), lf[:12]))
    rec, *_ = run(txt, mod=mod, pages={DEMO + "css/plain.css": body})
    return "STALE-SKIN" in buckets(rec)[1] and "SHA-BASIS-LF" not in buckets(rec)[1]


def c31_lf_basis_does_not_hide_real_drift() -> bool:
    """A sheet that really changed keeps STALE-SKIN (the basis probe is not a blanket pass)."""
    body = b".card:hover{color:#123456}\r\n" * 60
    lf = hashlib.sha256(body.replace(b"\r\n", b"\n")).hexdigest()
    txt = ("| Accent | `#123456` | 3 declarations — `.card:hover` |\n\n"
           "Sheet `css/plain.css` (%d B, sha256 `%s…`).\n" % (len(body), lf[:12]))
    moved = body + b".appended{color:#123456}\r\n"
    rec, *_ = run(txt, pages={DEMO + "css/plain.css": moved})
    fl, nt = buckets(rec)
    return fl == [] and "STALE-SKIN" in nt and "SHA-BASIS-LF" not in nt


# ---- citation BINDING (per path, not per basename) -------------------------
SIBLING_SPEC = """# Template: Demo (Landing)

## Purpose

A recreation of the reference at {demo}.

| Accent | `#123456` | 3 declarations — `.demo` |

Sibling page one `pages/a/styles.css` (1,000 B, sha256 `aaaaaaaaaaaa…`).
Sibling page two `pages/b/styles.css` (2,000 B, sha256 `bbbbbbbbbbbb…`).
Theme sheet `https://preview.colorlib.com/theme/demo/css/styles.css` ({size:,} B,
sha256 `{sha}…`).
""".strip()

SIBLING_CSS = (".demo{color:#123456}\n" * 40)
FILLER = ".pad{padding:1px}\n" * 40


def _sibling(mod=None):
    """(rec) for a prep whose demo sheet shares its basename with two siblings."""
    body = SIBLING_CSS.encode()
    sha = hashlib.sha256(body).hexdigest()[:12]
    tmp = tempfile.mkdtemp()
    root = os.path.join(tmp, "repo")
    d = os.path.join(root, "openspec", "specs", "template-demo")
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, "spec.md")
    open(path, "w").write(SIBLING_SPEC.format(demo=DEMO, size=len(body), sha=sha))
    html = HTML.format(extra_links="", inline="#000000", pad="x" * 2200).replace(
        'href="css/style.css"', 'href="css/styles.css"')
    fetcher = Fake({DEMO: html.encode(), DEMO + "css/styles.css": body})
    mod = mod or load()
    return mod.audit_spec(fetcher, root, path), path, fetcher


def c32_sibling_citations_bind_per_path() -> bool:
    """Three `styles.css` citations: each must read ITS OWN numbers.

    aisle cites `01-homepage`, `02-rsvp` and `03-regular-page` sheets that all
    end in `styles.css`, each with its own size. Binding the basename read them
    all against the first line and called a correct prep stale-for-drift.
    """
    rec, *_ = _sibling()
    fl, nt = buckets(rec)
    return fl == [] and "STALE-SKIN" not in nt


def c32b_gate_basename_first_citation() -> bool:
    """GATE: a basename-first binder reads the sibling's size as the sheet's."""
    mod = load()

    def basename_first(txt, url):
        base = os.path.basename(url.split("?")[0])
        lines = txt.splitlines()
        rx = mod.basename_rx(base)
        for i, ln in enumerate(lines):
            m = rx.search(ln)
            if not m:
                continue
            tail = "\n".join(lines[i:i + 3])
            mb = mod.BYTES_RX.search(tail[m.end():])
            ms = mod.SHA_RX.search(tail[m.end():])
            if mb or ms:
                return (int(mb.group(1).replace(",", "")) if mb else None,
                        ms.group(1) if ms else None)
        return None, None

    mod.recorded_identity = basename_first
    rec, *_ = _sibling(mod)
    return "STALE-SKIN" in buckets(rec)[1]


def c33_bare_basename_is_not_a_path_citation() -> bool:
    """`fonts/icomoon/style.css` is a different sheet from `css/style.css`.

    elixir and draftwell carried the icon font's 79,820 B as the theme sheet's
    identity because a basename bound to any path delimiter matched it.
    """
    css = (".demo{color:#123456}\n" * 40)
    txt = ("| Accent | `#123456` | 3 declarations — `.card:hover` |\n\n"
           "| stylesheet | `https://preview.colorlib.com/theme/demo/"
           "fonts/icomoon/style.css` | HTTP 200 · 1,200 B |\n"
           "Tokens extracted from `css/style.css` (846 lines).\n")
    rec, *_ = run(txt, css_extra=FILLER, pages={DEMO + "fonts/icomoon/style.css":
                                               (".icon{color:#00ff00}" * 60).encode()})
    fl, nt = buckets(rec)
    return fl == [] and "STALE-SKIN" not in nt


def c33b_gate_dirname_bound_basename() -> bool:
    """GATE: allowing `/` before the basename borrows the icon font's identity."""
    mod = load()
    orig = mod.citation_identity

    def loose(txt, url):
        ident, status = orig(txt, url)
        if status == "none":
            base = os.path.basename(url.split("?")[0])
            for i, ln in enumerate(txt.splitlines()):
                m = mod.basename_rx(base).search(ln)
                if m:
                    size, sha = mod._cell_identity(txt.splitlines(), i, m.end())
                    if size or sha:
                        return (size, sha), "basename"
        return ident, status

    mod.citation_identity = loose
    css = (".demo{color:#123456}\n" * 40)
    txt = ("| Accent | `#123456` | 3 declarations — `.card:hover` |\n\n"
           "| stylesheet | `https://preview.colorlib.com/theme/demo/"
           "fonts/icomoon/style.css` | HTTP 200 · 1,200 B |\n"
           "Tokens extracted from `css/style.css` (846 lines).\n")
    rec, *_ = run(txt, mod=mod, css_extra=FILLER,
                  pages={DEMO + "fonts/icomoon/style.css":
                         (".icon{color:#00ff00}" * 60).encode()})
    return "STALE-SKIN" in buckets(rec)[1]


def c34_size_only_and_sha_citation_merge() -> bool:
    """The research line (size only) and the identity table (size + sha) agree."""
    body = (".demo{color:#123456}\n" * 40).encode()
    sha = hashlib.sha256(body).hexdigest()[:12]
    txt = ("| Accent | `#123456` | 3 declarations — `.demo` |\n\n"
           "> Sheet: `https://preview.colorlib.com/theme/demo/css/special.css` "
           "(%d B).\n\n"
           "| stylesheet | `https://preview.colorlib.com/theme/demo/css/special.css` "
           "| HTTP 200 · %d B · sha256 `%s` |\n" % (len(body), len(body), sha))
    rec, *_ = run(txt, pages={DEMO + "css/special.css": body})
    fl, nt = buckets(rec)
    return fl == [] and "STALE-SKIN" not in nt and "CITATION-AMBIGUOUS" not in nt


def c34b_gate_size_sha_conflict() -> bool:
    """GATE: two DIFFERENT sizes for one path is a conflict, not a merge."""
    body = (".demo{color:#123456}\n" * 40).encode()
    sha = hashlib.sha256(body).hexdigest()[:12]
    txt = ("| Accent | `#123456` | 3 declarations — `.demo` |\n\n"
           "> Sheet: `https://preview.colorlib.com/theme/demo/css/special.css` "
           "(1,234 B).\n\n"
           "| stylesheet | `https://preview.colorlib.com/theme/demo/css/special.css` "
           "| HTTP 200 · %d B · sha256 `%s` |\n" % (len(body), sha))
    rec, *_ = run(txt, pages={DEMO + "css/special.css": body})
    return "CITATION-AMBIGUOUS" in buckets(rec)[1]



def collect():
    case("c01 count matches -> no note", c01_match)
    case("c02 count differs -> COUNT-SKEW note", c02_skew)
    case("c03 colour absent -> flag", c03_absent)
    case("c04 rebuilt demo -> STALE-SKIN, no flag", c04_absent_stale)
    case("c04b GATE identity comparison", c04b_gate_identity, gate=True)
    case("c05 every cited selector absent -> flag", c05_selector_absent)
    case("c06 grouped rule satisfies the cell", c06_grouped)
    case("c06b GATE comma-split", c06b_gate_grouped, gate=True)
    case("c07 {prop} note in the cell", c07_prop_note)
    case("c08 truncated selector", c08_truncated)
    case("c09 prose cell is not a selector", c09_prose_cell)
    case("c10 weight ramp is not a count", c10_ramp)
    case("c10b GATE ramp guard", c10b_gate_ramp, gate=True)
    case("c11 scale keyword line", c11_scale_keyword)
    case("c12 xN census claim", c12_census)
    case("c13 no demo -> NO-SOURCE note", c13_no_source)
    case("c14 cited-but-unlinked sheet", c14_unlinked_sheet)
    case("c14b identity unrecorded is a note", c14b_identity_unrecorded)
    case("c15 cited sheet missing its css/", c15_sheet_without_css_dir)
    case("c15b GATE css/ retry", c15b_gate_sheet_dir, gate=True)
    case("c16 gradient row", c16_gradient)
    case("c17 rgb() form paints the colour", c17_rgb)
    case("c18 inline style= paints the colour", c18_inline_attr)
    case("c19 #fff normalises to #ffffff", c19_short_hex)
    case("c20 no numeric claims -> out of scope", c20_no_claims)
    case("c21 GATE count is a note, not a flag", c21_count_is_a_note, gate=True)
    case("c22 same bytes under two URLs counted once", c22_duplicate_sheet_once)
    case("c22b GATE content dedupe", c22b_gate_dedupe, gate=True)
    case("c23 minified twin is one sheet", c23_minified_twin)
    case("c23b GATE min/plain path key", c23b_gate_min_stem, gate=True)
    case("c24 page identity is not the sheet's", c24_page_identity_is_not_the_sheet)
    case("c24b GATE identity attribution", c24b_gate_pre_basename_identity, gate=True)
    case("c25 long selector is not absent", c25_long_selector)
    case("c25b GATE 90-char selector cap", c25b_gate_selector_cap, gate=True)
    case("c26 commented-out hex paints nothing", c26_commented_out)
    case("c26b GATE comment stripping", c26b_gate_comments, gate=True)
    case("c27 rebuilt skin is a note", c27_rebuilt_skin)
    case("c27b GATE rebuild guard", c27b_gate_rebuilt, gate=True)
    case("c28 confirmed sheet still flags", c28_confirmed_identity_still_flags)
    case("c29 substring basename borrows no identity", c29_substring_basename)
    case("c29b GATE basename boundary", c29b_gate_substring_basename, gate=True)
    case("c30 LF hash basis is a note, not drift", c30_lf_basis_is_not_drift)
    case("c30b GATE LF basis probe", c30b_gate_lf_basis, gate=True)
    case("c31 LF basis does not hide real drift", c31_lf_basis_does_not_hide_real_drift)
    case("c32 sibling citations bind per path", c32_sibling_citations_bind_per_path)
    case("c32b GATE basename-first binder", c32b_gate_basename_first_citation, gate=True)
    case("c33 bare basename is not a path citation", c33_bare_basename_is_not_a_path_citation)
    case("c33b GATE dirname-bound basename", c33b_gate_dirname_bound_basename, gate=True)
    case("c34 size-only and sha citation merge", c34_size_only_and_sha_citation_merge)
    case("c34b GATE size/sha conflict", c34b_gate_size_sha_conflict, gate=True)


def main():
    ok = gates = 0
    bad = []
    for name, fn, gate in CASES:
        try:
            res = fn()
        except Exception as e:
            res = False
            print(f"  ERROR {name}: {type(e).__name__}: {e}")
        if gate:
            gates += 1
        if res:
            ok += 1
            print(f"  ok   {name}{'  (GATE)' if gate else ''}")
        else:
            bad.append(name)
            print(f"  FAIL {name}{'  (GATE)' if gate else ''}")
    print(f"{ok}/{len(CASES)} controls pass ({gates} GATE)")
    return 0 if not bad else 1


if __name__ == "__main__":
    collect()
    sys.exit(main())
