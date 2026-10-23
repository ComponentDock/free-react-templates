#!/usr/bin/env python3
"""Fetch a ColorLib reference preview and print a design-token census.

PREP-stream helper for docs/replication.md step 1-3 (live DOM -> stylesheet ->
tokens). It exists because the hand-rolled version of this fetch produced four
known bugs, each of which silently changed the measured palette:

1. **basename collisions** — `css/style.css` and `vendors/linericon/style.css`
   both save as `style.css`, so the icon sheet overwrote the theme sheet and the
   census reported "0 colours" for a theme full of hex literals. Files here are
   saved as `<NN>-<flattened-path>`, so two same-named sheets never collide.
2. **relative hrefs resolved against `index.html`** — `colorlib.com/etc/bwiz/…/
   index.html` + `css/style.css` is a directory base, not a file base
   (`…/index.html/css/style.css` -> a 548-byte 404 stub). `urljoin` on the page
   URL fixes it; a 404 body is detected and reported, never counted.
3. **vendor palettes counted as design tokens** — Bootstrap ships `#0d6efd` ×29.
   Every sheet is censused separately *and* in aggregate, so you can cite the
   theme sheet only.
4. **rebuilt demos read as prep errors** — `?v=3.0.0`, `/kit/`, a `X 3.0.0`
   banner and Bootstrap 5.3.8 mean the demo was redesigned; mismatch with a
   shipped app is DRIFT, not a wrong prep. `REBUILT` is printed when detected.

Usage:
  python3 scripts/measure-reference-tokens.py --slug hardenero
  python3 scripts/measure-reference-tokens.py --url https://preview.colorlib.com/theme/sona/
  python3 scripts/measure-reference-tokens.py --spec haven      # URL from the spec
  python3 scripts/measure-reference-tokens.py --slug roofing --json

Exit 0 = preview fetched and censused; 2 = no live preview; 3 = bad usage.
Read-only: writes downloads only under --cache (default /tmp/prep-tokens/<label>).
"""

from __future__ import annotations

import argparse
import collections
import json
import os
import re
import subprocess
import sys
from urllib.parse import urljoin

UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124 Safari/537.36")
# several ColorLib hosts answer 403/404 over IPv6 for this workstation
BASE_CURL = ["curl", "-4", "-sSL", "--max-time", "45", "-A", UA]

FAMILIES = ("theme/", "theme/bootstrap/", "theme/bft/", "theme/bb/", "theme/bac/",
            "theme/sidebar/")


def curl(url: str, dest: str | None = None) -> str:
    args = list(BASE_CURL)
    if dest:
        args += ["-o", dest, "-w", "%{http_code}"]
    args.append(url)
    proc = subprocess.run(args, capture_output=True, timeout=120)
    return proc.stdout.decode("utf-8", "replace").strip() if dest else proc.stdout.decode("utf-8", "replace")


def spec_candidates(name: str, root: str) -> list[str]:
    """Every URL worth probing for a spec: its own preview links, then its
    ColorLib slug expanded over the known preview families."""
    path = os.path.join(root, "openspec", "specs", f"template-{name}", "spec.md")
    if not os.path.isfile(path):
        return []
    text = open(path, encoding="utf-8").read()
    cands: list[str] = []
    for m in re.finditer(r"https://(?:preview\.colorlib\.com|colorlib\.com/etc)/[^\s)\]|\"'`]+", text):
        url = m.group(0).rstrip(".,;")
        if url.rstrip("/") in ("https://preview.colorlib.com", "https://colorlib.com/etc"):
            continue
        cands.append(url if url.endswith("/") else url + "/")
    for slug in re.findall(r"colorlib\.com/wp/template/([a-z0-9._-]+)/", text):
        for fam in FAMILIES:
            cands.append(f"https://preview.colorlib.com/{fam}{slug}/")
        for sub in ("cs", "bwiz", "regform", "bforms", "searchf", "bootstrap-sidebar"):
            cands.append(f"https://colorlib.com/etc/{sub}/{slug}/")
            cands.append(f"https://colorlib.com/etc/{sub}/{slug}.html")
    return cands


def fetch(url: str) -> tuple[str, str] | None:
    """Return (final_url, html) for a page, or None if it 404s."""
    tmp = "/tmp/.measure-probe.html"
    code = curl(url, tmp)
    if not code.startswith("200"):
        return None
    html = open(tmp, encoding="utf-8", errors="replace").read()
    return url, html


def resolve(label: str, args, root: str) -> str | None:
    if args.url:
        return args.url
    cands: list[str] = []
    if args.spec:
        cands += spec_candidates(args.spec, root)
    for fam in FAMILIES:
        cands.append(f"https://preview.colorlib.com/{fam}{label}/")
    for sub in ("cs", "bwiz", "regform", "bforms", "searchf"):
        cands.append(f"https://colorlib.com/etc/{sub}/{label}/")
    seen: set[str] = set()
    for url in cands:
        if url in seen:
            continue
        seen.add(url)
        got = fetch(url)
        if got:
            return got[0]
    return None


def census(css: str) -> dict:
    hexes = collections.Counter(h.lower() for h in re.findall(r"#[0-9a-fA-F]{3,8}\b", css))
    fonts = collections.Counter()
    for fam in re.findall(r"font-family\s*:\s*([^;{}]+)", css):
        for part in fam.split(","):
            p = part.strip().strip("\"'").lower()
            if p and len(p) > 2 and not p.startswith(("var(", "$", "inherit")):
                fonts[p] += 1
    radii = collections.Counter(re.sub(r"\s+", " ", r).strip().lower()
                                for r in re.findall(r"border-radius\s*:\s*([^;{}]+)", css))
    return {"hex": hexes, "fonts": fonts, "radii": radii}


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description="Measure a ColorLib reference preview's design tokens.")
    ap.add_argument("--slug", help="ColorLib slug or demo directory name")
    ap.add_argument("--url", help="explicit preview URL (wins over --slug)")
    ap.add_argument("--spec", help="read the preview URL from template-<name>/spec.md")
    ap.add_argument("--cache", default=None, help="download dir (default /tmp/prep-tokens/<label>)")
    ap.add_argument("--json", action="store_true", dest="as_json")
    args = ap.parse_args(argv)
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    label = args.slug or args.spec or "reference"
    if not (args.slug or args.url or args.spec):
        ap.print_usage(sys.stderr)
        return 3

    url = resolve(label, args, root)
    if not url:
        print(f"no live preview for label={label!r} (tried --url, spec, and "
              f"{', '.join('theme/<fam>' for fam in FAMILIES)})", file=sys.stderr)
        return 2

    got = fetch(url)
    if not got:
        print(f"preview disappeared while re-fetching: {url}", file=sys.stderr)
        return 2
    page, html = got
    cache = args.cache or os.path.join("/tmp/prep-tokens", label)
    os.makedirs(cache, exist_ok=True)
    open(os.path.join(cache, "index.html"), "w", encoding="utf-8").write(html)

    title_m = re.search(r"<title>(.*?)</title>", html, re.S | re.I)
    title = re.sub(r"\s+", " ", title_m.group(1)).strip() if title_m else ""
    # REBUILT = the *demo* was redesigned (v3 asset chain, kit build, BS5.3).
    # Key on asset/version markers only: a bare 3.0.x search over the whole page
    # false-positives on vendored lib versions (yogabest loads
    # js/jquery-migrate-3.0.1.min.js, which is not a rebuild marker — measured
    # 2026-10-23, batch 4).
    rebuilt = (
        bool(re.search(r"\?v=3\.", html))
        or "/kit/" in html
        or "Bootstrap v5.3" in html
        or bool(re.search(
            r'<meta[^>]+name=["\']generator["\'][^>]+content=["\'][^"\']*\b3\.0\.\d',
            html, re.I))
    )

    sheets = []
    for i, tag in enumerate(re.findall(r"<link[^>]+rel=[\"']stylesheet[\"'][^>]*>", html, re.I)):
        href = re.search(r"href=[\"']([^\"']+)", tag)
        if not href:
            continue
        full = urljoin(page, href.group(1))
        flat = re.sub(r"[^a-z0-9._-]+", "-", full.split("://", 1)[-1].split("?")[0]).strip("-")
        dest = os.path.join(cache, f"{i:02d}-{flat}")
        code = curl(full, dest)
        size = os.path.getsize(dest) if os.path.exists(dest) else 0
        body = open(dest, encoding="utf-8", errors="replace").read() if size else ""
        stub = size < 800 and "\x00" not in body and re.search(r"404 Not Found|Cannot GET", body)
        sheets.append({"url": full, "file": dest, "bytes": size, "http": code,
                       "stub": bool(stub), "census": census(body)})

    real = [s for s in sheets if not s["stub"]]
    total = collections.Counter()
    for s in real:
        total.update(s["census"]["hex"])

    payload = {
        "label": label, "url": page, "title": title, "rebuilt": rebuilt,
        "sheets": [{"url": s["url"], "bytes": s["bytes"], "http": s["http"], "stub": s["stub"],
                    "hex": s["census"]["hex"].most_common(12),
                    "fonts": s["census"]["fonts"].most_common(6),
                    "radii": s["census"]["radii"].most_common(6)} for s in sheets],
        "aggregate": {"hex": total.most_common(20),
                      "radii": collections.Counter(
                          r for s in real for r, n in s["census"]["radii"].items() for _ in range(n)).most_common(8)},
    }

    if args.as_json:
        print(json.dumps(payload, indent=1))
        return 0

    print(f"preview : {page}")
    print(f"title   : {title!r}")
    print(f"rebuilt : {rebuilt}  (True => mismatch with a shipped app is DRIFT, not a prep error)")
    for s in sheets:
        flag = " STUB(404-body)" if s["stub"] else ""
        print(f"sheet   : {s['bytes']:>8} B  {s['url']}{flag}")
        if not s["stub"]:
            print("          hex  ", ", ".join(f"{h}:{n}" for h, n in s["census"]["hex"].most_common(8)))
            print("          fonts", ", ".join(f"{f}:{n}" for f, n in s["census"]["fonts"].most_common(4)))
            print("          radii", ", ".join(f"{r}:{n}" for r, n in s["census"]["radii"].most_common(4)))
    print(f"aggregate hex: {', '.join(f'{h}:{n}' for h, n in total.most_common(14))}")
    print(f"files   : {cache}")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
