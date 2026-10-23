#!/usr/bin/env python3
"""verify-live-tokens.py — LIVE-TOKEN axis (audit).

Every prep's `## Design tokens` table states a palette.  The other token axes
compare ONE dimension (padding / font-size / radius / margin) against the live
sheet; none of them reads the PALETTE itself against the live sheet for a demo
the old three-prefix ladder could not resolve.

| axis | reads |
| --- | --- |
| `verify-http-semantics.py` | status/size/content-type of a cited URL |
| `token-census.py` / `token-coverage.py` | hexes a spec states vs the sheet *it cites* |
| `verify-type-axis.py` | font-family/weight vs the `fonts.googleapis` link |
| `verify-spacing-tokens.py` / `verify-type-scale.py` / `verify-shape-tokens.py` | one CSS dimension |
| `verify-margin-tokens.py` | padding/margin rhythm |
| **`verify-live-tokens.py`** | **a spec's declared PALETTE vs the live sheet set of its own demo** |

History: the 2026-10-22 version gated on specs containing the word
"unreachable" (it existed to catch screenshot-sampled palettes once the host
came back).  The `-23y` run showed the ladder reported 158 of 486 *live* demos
as dead, so the axis was reading a small, non-representative slice.  This
version resolves every demo through the preview host's own catalog map
(`scripts/catalog_resolve.py`) and runs over the whole corpus.

DIRECTIONS
  REF-STALE     the spec says the preview was unreachable/404, but the demo URL
                answers 200 with a real page today
  TOKEN-MISSING a token the spec declares (markdown token-table row, or a
                brand/primary/accent line) does not occur in ANY stylesheet the
                live demo links, nor in the page's own inline CSS/HTML

NOTES (never flags)
  REF-STILL-DEAD  the demo is genuinely unresolved (catalog + ladder)
  TOKEN-EXTRA     the live sheet's leading chromatic colour is absent from the
                  spec's tokens (a hint: the sheet may be a different skin)
  TOKEN-NEUTRAL-DRIFT  a grey/neutral the sheet does not paint exactly
  SUPERSEDED      the spec already reconciles the old "unreachable" claim
  NO-NET / NO-SHEET / NO-SLUG

Usage:
  python3 verify-live-tokens.py [--prep-root DIR] [--ref GITREF] [--slug S]
                                [--all] [--worktree] [--jobs N]
                                [--no-net] [--cache DIR] [--json OUT]
Exit code 0 = clean, 1 = flags, 2 = usage/root error.
"""
from __future__ import annotations

import argparse
import collections
import hashlib
import json
import os
import re
import subprocess
import sys
import threading
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

try:                                     # the preview host's own slug -> demo map
    import catalog_resolve as CR
except Exception:                        # pragma: no cover - stand-alone use
    import importlib.util as _ilu
    _p = os.path.join(os.path.dirname(os.path.abspath(__file__)), "catalog_resolve.py")
    _spec = _ilu.spec_from_file_location("catalog_resolve", _p)
    CR = _ilu.module_from_spec(_spec)
    _spec.loader.exec_module(CR)

PREVIEW = "https://preview.colorlib.com/theme/{slug}/"
PREVIEW_BOOTSTRAP = "https://preview.colorlib.com/theme/bootstrap/{slug}/"
PREVIEW_ETC = "https://colorlib.com/etc/cs/{slug}/index.html"
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0.0.0 Safari/537.36")

HEX_RX = re.compile(r"#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b")
LINK_RX = re.compile(r"<link[^>]*>", re.I)
STYLE_RX = re.compile(r"<style[^>]*>(.*?)</style>", re.I | re.S)
SLUG_RX = [
    re.compile(r"Source slug:\s*`?([A-Za-z0-9._-]+)"),
    re.compile(r"colorlib\.com/wp/template/([a-z0-9._-]+)/"),
    re.compile(r"preview\.colorlib\.com/theme/(?:bootstrap/)?([A-Za-z0-9._-]+)/"),
]
UNREACH_RX = re.compile(
    r"(?i)\b(unreachable|not reachable|returns? (?:a )?404|answered 404|was 404|"
    r"404 on colorlib|preview (?:was )?(?:down|dead)|no live (?:preview|demo))")
SUPERSEDE_RX = re.compile(
    r"(?i)(supersedes|now returns HTTP 200|re-verified|reference restored|"
    r"post-ship delta|live path is the authoritative)")
ROLE_RX = re.compile(r"(?i)(brand|accent|primary|cta|button|link|heading|background|"
                     r"surface|border|text)")
DELTA_RX = re.compile(r"`#[0-9a-fA-F]{3,6}`\s*(?:→|->)\s*\*\*`#[0-9a-fA-F]{3,6}`\*\*")
SIBLING_RX = re.compile(r"(?i)(sibling|other template|another (?:template|design)|"
                        r"distinct from|neighbouring design|neighboring design)")
# the host now serves many slugs as a rebuilt 3.x kit (`?v=3.0.1`, `css/kit/`,
# `css/main.min.css`) that re-skins the page: a mismatch there is DRIFT, not a
# prep defect (same rule as verify-shape-tokens.py's REBUILT_RX).
REBUILT_RX = re.compile(r'(\?v=3\.[0-9]|css/kit/|css/main\.min\.css|css/style\.min\.css)')
ALIAS_RX = re.compile(r"prep-status:\s*shipped-as=")
# brand palettes a spec may legitimately quote for social buttons / logos
SOCIAL_BRAND = {
    "#3b5998", "#1da1f2", "#dd4b39", "#0077b5", "#e4405f", "#bd081c", "#25d366",
    "#ea4335", "#4285f4", "#34a853", "#fbbc05", "#1877f2", "#0a66c2", "#ff0000",
}
NEUTRAL = {"#ffffff", "#000000", "#fff", "#000"}


def norm(h: str) -> str:
    h = h.lower()
    if len(h) == 4:
        h = "#" + "".join(c * 2 for c in h[1:])
    return h


def rgb(h: str):
    h = h.lstrip("#")
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def chroma(h: str) -> float:
    r, g, b = rgb(h)
    return (max(r, g, b) - min(r, g, b)) / 255.0


def is_chromatic(h: str) -> bool:
    if h in NEUTRAL:
        return False
    r, g, b = rgb(h)
    lo, hi = min(r, g, b), max(r, g, b)
    if hi < 40 or lo > 235:          # near-black / near-white
        return False
    return chroma(h) >= 0.12


class Fetcher:
    """curl with an on-disk cache so repeated sweeps and --no-net are cheap.

    Thread-safe: one process-wide memo behind a lock, files keyed by URL hash.
    `-4` is set because the preview host has black-holed this host's IPv6 in
    past runs (the probe would then read a timeout as "dead").
    """

    def __init__(self, cache: str, net: bool):
        self.cache = cache
        self.net = net
        self.lock = threading.RLock()
        self.memo = {}
        os.makedirs(cache, exist_ok=True)

    def _path(self, url: str) -> str:
        return os.path.join(self.cache, hashlib.sha1(url.encode()).hexdigest())

    def get(self, url: str):
        with self.lock:
            if url in self.memo:
                return self.memo[url]
        p = self._path(url)
        meta = p + ".json"
        if os.path.exists(meta):
            try:
                m = json.load(open(meta))
                body = open(p, "rb").read() if os.path.exists(p) else b""
                with self.lock:
                    self.memo[url] = (m["code"], body)
                return m["code"], body
            except Exception:
                pass
        if not self.net:
            return None, b""
        code, body = "ERR", b""
        try:
            q = subprocess.run(
                ["curl", "-sSL", "-4", "-A", UA, "-m", "40", "-o", p,
                 "-w", "%{http_code}", url], capture_output=True, text=True)
            code = q.stdout.strip() or "ERR"
            body = open(p, "rb").read() if os.path.exists(p) else b""
        except Exception:
            code = "ERR"
        with self.lock:
            json.dump({"code": code, "url": url, "bytes": len(body)}, open(meta, "w"))
            self.memo[url] = (code, body)
        return code, body


def sha(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()[:12]


def spec_slug(txt: str):
    for rx in SLUG_RX:
        m = rx.search(txt)
        if m:
            return m.group(1)
    return None


def comment_lines(txt: str) -> set:
    """1-based line numbers inside an evidence block or an HTML comment.

    A prep's own audit trail (`<!-- reference-revalue:start -->` … `:end -->`,
    or a plain multi-line comment) quotes the OLD value or the sheet rule it was
    adjudicated against.  Reading those as design claims self-flags the fix
    (measured 2026-10-23y on `umami`, again here on the token corpus).
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


def rgb_forms(h: str):
    """The CSS colour notations that paint `h`: `#hex`, `rgb()`, `rgba()`.

    A spec may state the hex of a colour the sheet writes as
    `rgba(205,165,88,.95)` — same colour, different notation, not a defect
    (measured 2026-10-23 on `benevol`).
    """
    r, g, b = rgb(h)
    return (h, h.lstrip("#"),
            f"{r},{g},{b}", f"{r}, {g}, {b}", f"{r},{g},{b},",
            f"{r}, {g}, {b},")


def painted(css: str, h: str) -> bool:
    if h in css:
        return True
    low = css.lower().replace(" ", "")
    r, g, b = rgb(h)
    return f"rgb({r},{g},{b}" in low or f"rgba({r},{g},{b}," in low


def app_palette(root: str, name: str):
    """Every hex literal the shipped app for this spec uses (docs-side read only)."""
    return _APP_HEX.get((root, name), set())


_APP_HEX: dict = {}
_APP_LOCK = threading.Lock()


def load_app_palette(root: str, name: str):
    key = (root, name)
    with _APP_LOCK:
        if key in _APP_HEX:
            return _APP_HEX[key]
    out = set()
    base = os.path.join(root, "apps", name, "src")
    if os.path.isdir(base):
        for dirpath, _d, files in os.walk(base):
            for fn in files:
                if not fn.endswith((".tsx", ".ts", ".css", ".jsx", ".js", ".html")):
                    continue
                try:
                    out.update(norm("#" + h) for h in HEX_RX.findall(
                        open(os.path.join(dirpath, fn), encoding="utf-8",
                             errors="replace").read()))
                except Exception:
                    pass
    with _APP_LOCK:
        _APP_HEX[key] = out
    return out


def token_claims(txt: str):
    """Declared tokens: markdown token-table rows + brand/primary/accent lines.

    Guards (each closes a measured false-positive class):
      * SIBLING — a line that attributes the colour to another design
        ("the accent moves from the sibling's coral `#ff6768` to …") is a
        statement about a *sibling*, not this spec's token.
      * TOKEN-UNVERIFIED — a hex the spec itself parks in its
        `**TOKEN-UNVERIFIED**` list has been adjudicated: it is a screenshot
        sample with no live counterpart, not a build instruction.
    """
    unver = set()
    lines = txt.splitlines()
    for i, ln in enumerate(lines):
        if "TOKEN-UNVERIFIED" in ln:
            j = i
            while j < len(lines) and (j == i or (lines[j].strip() and not lines[j].startswith("#"))):
                for h in HEX_RX.findall(lines[j]):
                    unver.add(norm("#" + h))
                j += 1
    claims = []
    comments = comment_lines(txt)
    for i, line in enumerate(lines, 1):
        if i in comments:
            continue
        s = line.strip()
        if not HEX_RX.search(s):
            continue
        table_row = s.startswith("|") and s.count("|") >= 3
        role_line = bool(ROLE_RX.search(s)) and not s.startswith(">")
        if not (table_row or role_line):
            continue
        if SIBLING_RX.search(s) or DELTA_RX.search(s):
            continue
        for h in HEX_RX.findall(s):
            h = norm("#" + h)
            if h in SOCIAL_BRAND or h in unver:
                continue
            claims.append((i, h, s[:160]))
    return claims


def sheet_urls(html: str, base: str):
    urls = []
    for tag in LINK_RX.findall(html):
        if "stylesheet" not in tag.lower():
            continue
        m = re.search(r'href=["\']([^"\']+)', tag)
        if not m:
            continue
        u = urllib.parse.urljoin(base, m.group(1))
        if u.startswith("//"):
            u = "https:" + u
        urls.append(u)
    return urls


def resolve_preview(f: Fetcher, slug: str, name: str = ""):
    """Catalog map first, then the slug-only / bootstrap / /etc/cs ladder.

    The ladder alone reported 158 of 486 live demos as dead (measured
    2026-10-23 on margins); `catalog_resolve` reads the preview host's own
    `catalog-products-*.js` map, which covers the families whose demo lives
    elsewhere (`/etc/bwiz/…`, `/etc/regform/…`, `/theme/<dir>/`).
    """
    url, html, via = CR.demo_via(f.get, slug, name)
    if url:
        return url, html, [(url, "200", len(html))], via
    tried = []
    for url in (PREVIEW.format(slug=slug), PREVIEW_BOOTSTRAP.format(slug=slug),
                PREVIEW_ETC.format(slug=slug)):
        code, body = f.get(url)
        tried.append((url, code, len(body)))
        if code == "200" and len(body) > 1200:
            return url, body.decode("utf-8", "replace"), tried, "ladder"
    return None, "", tried, None


def read_specs(root: str, ref: str, all_specs: bool, worktree: bool = False):
    if worktree:
        base = os.path.join(root, "openspec", "specs")
        out = []
        for dirpath, _dirs, files in os.walk(base):
            for fn in files:
                if fn == "spec.md":
                    out.append(os.path.relpath(os.path.join(dirpath, fn), root))
        out.sort()
        return [p for p in out
                if all_specs or "unreachable" in open(os.path.join(root, p),
                                                      encoding="utf-8").read().lower()]
    pat = "openspec/specs/**/spec.md"
    cmd = ["git", "grep", "-l", "-i", "unreachable", ref, "--", pat]
    if all_specs:
        cmd = ["git", "ls-tree", "-r", "--name-only", ref, "openspec/specs"]
    out = subprocess.run(cmd, cwd=root, capture_output=True, text=True).stdout.split()
    files = []
    for line in out:
        path = line.split(":", 1)[1] if ":" in line and not line.startswith("openspec") else line
        if path.endswith("spec.md"):
            files.append(path)
    return sorted(set(files))


def read(root: str, ref: str, path: str, worktree: bool = False) -> str:
    if worktree:
        return open(os.path.join(root, path), encoding="utf-8", errors="replace").read()
    return subprocess.run(["git", "show", f"{ref}:{path}"], cwd=root,
                          capture_output=True, text=True).stdout


def audit_spec(f: Fetcher, root: str, ref: str, path: str, args):
    """Audit ONE spec. Returns (flags, notes)."""
    flags, notes = [], []
    txt = read(root, ref, path, args.worktree)
    name = path.split("/")[2].replace("template-", "")
    slug = spec_slug(txt)
    if not slug:
        notes.append((name, "NO-SLUG", "no source slug in the spec"))
        return flags, notes
    if args.slug and slug != args.slug and name != args.slug:
        return flags, notes

    url, html, tried, via = resolve_preview(f, slug, name)
    unreach_lines = [(i, ln.strip()[:160]) for i, ln in enumerate(txt.splitlines(), 1)
                     if UNREACH_RX.search(ln) and re.search(r"(?i)preview|demo|theme/", ln)]

    if url is None:
        if unreach_lines:
            notes.append((name, "REF-STILL-DEAD",
                          f"{slug}: {tried[0][1]} / {tried[1][1]} (slug + bootstrap)"))
        return flags, notes

    if ALIAS_RX.search(txt):
        # an alias prep for a design that already ships under another name: its
        # palette is never built from, so it is out of this axis' subject
        notes.append((name, "ALIAS-SKIP", f"{slug}: prep-status shipped-as=<other app>"))
        return flags, notes

    if unreach_lines:
        # reachability is `verify-unreachable-claims.py`'s subject (it adjudicates
        # STALE / RECORDED / DRIFT / DEAD-CONFIRMED / CLAIM-OTHER); flagging it
        # here would double-count an axis that already shipped. Note only.
        notes.append((name, "REF-OWNED",
                      f"{slug}: reachability claim is the unreachable axis' subject"))

    css = ""
    sheets = []
    for su in sheet_urls(html, url)[:20]:
        code, body = f.get(su)
        if code == "200":
            css += body.decode("utf-8", "replace")
            sheets.append((su, len(body), sha(body)))
    css += "\n".join(STYLE_RX.findall(html))
    rebuilt = bool(REBUILT_RX.search(" ".join(u for u, _n, _h in sheets))
                   or REBUILT_RX.search(html[:4000]))
    if not sheets and not STYLE_RX.search(html):
        notes.append((name, "NO-SHEET", f"{slug}: live page links no stylesheet"))
        return flags, notes

    live = collections.Counter(norm("#" + h) for h in HEX_RX.findall(css))
    markup = html.lower()                    # SVG strokes / inline style= live here
    if via == "name":
        notes.append((name, "DEMO-AMBIGUOUS",
                      f"{slug}: demo resolved on the invented name ({url}); "
                      f"no palette claim is compared"))
        return flags, notes
    apphex = load_app_palette(root, name)
    shipped = os.path.isdir(os.path.join(root, "apps", name))
    for line_no, h, ctx in token_claims(txt):
        if h in live:
            continue
        if painted(css, h):
            continue
        if h not in css and h not in markup:
            if shipped and h in apphex:
                # -23q model: the row is a true statement about the shipped app
                # and a false one about the reference -> APP-DELTA, never re-value
                notes.append((name, "APP-DELTA",
                              f"spec line {line_no}: {h} ships in apps/{name} but not in {url}"))
                continue
            if rebuilt:
                notes.append((name, "SHEET-DRIFT",
                              f"spec line {line_no}: {h} | rebuilt demo {url}"))
                continue
            if not is_chromatic(h):
                # a neutral ramp is an approximation of a grey ramp; the live
                # palette in the spec's own re-verification block carries the
                # sheet's real greys, so this is a note, never a flag
                notes.append((name, "TOKEN-NEUTRAL-DRIFT",
                              f"spec line {line_no}: {h} is not painted by the sheet"))
                continue
            flags.append((name, "TOKEN-MISSING", h,
                          f"spec line {line_no}: {ctx} | live={url} "
                          f"sheet={sheets[0][0].rsplit('/', 1)[-1] if sheets else 'inline'}"))
    top_chrom = [c for c, n in live.most_common(8) if is_chromatic(c)]
    if top_chrom:
        spec_hexes = {norm("#" + h) for h in HEX_RX.findall(txt)}
        if top_chrom[0] not in spec_hexes:
            notes.append((name, "TOKEN-EXTRA",
                          f"{slug}: live leading chromatic {top_chrom[0]} "
                          f"({live[top_chrom[0]]}x) is not in the spec"))
    return flags, notes


def audit(root: str, ref: str, args):
    f = Fetcher(args.cache, not args.no_net)
    specs = read_specs(root, ref, args.all, args.worktree)
    if args.offset:
        specs = specs[args.offset:]
    if args.limit:
        specs = specs[:args.limit]
    if args.jobs > 1:
        CR.configure(f.get, args.cache)      # warm the map once before fanning out
    results = []
    if args.jobs > 1:
        with ThreadPoolExecutor(max_workers=args.jobs) as ex:
            futs = [ex.submit(audit_spec, f, root, ref, p, args) for p in specs]
            for fu in futs:
                try:
                    results.append(fu.result())
                except Exception as exc:     # a broken spec must not kill the sweep
                    results.append(([], [("?", "WORKER-ERROR", str(exc)[:120])]))
    else:
        results = [audit_spec(f, root, ref, p, args) for p in specs]
    flags, notes = [], []
    for fl, nt in results:
        flags.extend(fl)
        notes.extend(nt)
    return flags, notes


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default=".")
    ap.add_argument("--ref", default="origin/main")
    ap.add_argument("--slug")
    ap.add_argument("--all", action="store_true", help="scan every spec, not just the unreachable set")
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--offset", type=int, default=0)
    ap.add_argument("--jobs", type=int, default=1)
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--worktree", action="store_true",
                    help="read the specs from the working tree (A/B before committing)")
    ap.add_argument("--cache", default="/tmp/live-tokens-cache")
    ap.add_argument("--json")
    args = ap.parse_args()

    root = os.path.abspath(args.prep_root)
    if not os.path.isdir(os.path.join(root, "openspec")):
        print(f"error: {root} has no openspec/ — pass --prep-root", file=sys.stderr)
        return 2

    flags, notes = audit(root, args.ref, args)
    for name, kind, arg, detail in flags:
        print(f"FLAG {kind:14s} {name:16s} {arg:10s} {detail}")
    if os.environ.get("LIVE_TOKENS_VERBOSE"):
        for name, kind, detail in notes:
            print(f"  -- {kind:18s} {name:16s} {detail}")
    bucket = collections.Counter(k for _, k, _, _ in flags)
    nbucket = collections.Counter(k for _, k, _ in notes)
    print(f"\n=== specs: {len(read_specs(root, args.ref, args.all, args.worktree))} "
          f"flags: {len(flags)} {dict(bucket)}  notes: {len(notes)} {dict(nbucket)}")
    if args.json:
        json.dump({"flags": flags, "notes": notes}, open(args.json, "w"), indent=1)
    return 1 if flags else 0


if __name__ == "__main__":
    sys.exit(main())
