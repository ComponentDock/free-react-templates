#!/usr/bin/env python3
"""fix-live-tokens-palette.py — apply the LIVE-PALETTE axis fixes (docs only).

Input is the verifier's flag list (aggregated) plus the shared fetch cache.  For
each flagged claimed hex the demo's own sheets paint, the fixer decides ONE of
two outcomes — never a silent rewrite:

  * **re-value** — the sheet paints a colour within `--near` RGB units (a
    screenshot sample of the same hue).  Every occurrence of the old literal is
    replaced and a fenced `live-palette-revalue` evidence block records the demo
    URL, status, byte size, the sheet + its sha256, the exact rule and the old
    value.
  * **TOKEN-UNVERIFIED** — no counterpart that close.  The prep keeps its
    sample; a `live-palette-unverified` block lists `claim (nearest d=…)` so the
    implementer knows those hexes are not measured.  The verifier skips a hex
    listed there.

Idempotent: a spec that already carries the marker is skipped, and a second run
is a byte-level no-op.  Nothing is invented: every value written comes from the
cache.

Usage:
  python3 fix-live-tokens-palette.py [--flags JSON] [--cache DIR] [--prep-root DIR]
                                     [--near 20] [--only name,name] [--dry-run]
"""
from __future__ import annotations

import argparse
import collections
import hashlib
import importlib.util
import json
import math
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location(
    "vlt", os.path.join(HERE, "verify-live-tokens.py"))
VLT = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(VLT)

TODAY = "2026-10-23"
RV_START = "<!-- live-palette-revalue:start -->"
RV_END = "<!-- live-palette-revalue:end -->"
UV_START = "<!-- live-palette-unverified:start -->"
UV_END = "<!-- live-palette-unverified:end -->"


def dist(a: str, b: str) -> float:
    return math.dist(VLT.rgb(a), VLT.rgb(b))


def locate(sheets, hexv: str):
    """(sheet url, sha12, the declaration line) that paints `hexv`.

    The evidence must name the FILE the value was read from: a spec's palette is
    usually painted by the theme sheet, not by the vendor sheet that happens to
    be largest (measured 2026-10-23: `appson`'s orange sits in `style.css`, but a
    size-based pick wrote `bootstrap.min.css`).
    """
    for url, body in sheets:
        text = body.decode("utf-8", "replace")
        for ln in text.splitlines():
            if hexv in ln.lower():
                rule = ln.strip()
                return (url, hashlib.sha256(body).hexdigest()[:12],
                        rule if len(rule) <= 150 else rule[:147] + "…")
    return ("", "", "")


def apply(text: str, old: str, new: str, skip: set) -> tuple[str, int]:
    """Replace `old` on every line that is not an evidence/comment line."""
    out, n = [], 0
    rx = re.compile(re.escape(old), re.I)
    for i, line in enumerate(text.splitlines(keepends=True), 1):
        if i in skip:
            out.append(line)
            continue
        new_line, k = rx.subn(new, line)
        out.append(new_line)
        n += k
    return "".join(out), n


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default="/root/free-react-templates-p2")
    ap.add_argument("--flags", default="/tmp/lt-out/all_tm.json")
    ap.add_argument("--cache", default="/tmp/lt-cache")
    ap.add_argument("--near", type=float, default=20.0)
    ap.add_argument("--only", default="")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--report", default="/tmp/lt-out/fixer-report.json")
    args = ap.parse_args()

    f = VLT.Fetcher(args.cache, False)          # cache only: no network, no invention
    VLT.CR.configure(f.get, args.cache)
    rows = json.load(open(args.flags))
    by_spec = collections.defaultdict(list)
    for name, _kind, hexv, _detail in rows:
        by_spec[name].append(hexv)
    only = {s for s in args.only.split(",") if s}

    report, touched, noop = {}, 0, 0
    for name, claims in sorted(by_spec.items()):
        if only and name not in only:
            continue
        spec = os.path.join(args.prep_root, "openspec", "specs",
                            f"template-{name}", "spec.md")
        if not os.path.exists(spec):
            continue
        txt = open(spec, encoding="utf-8").read()
        if RV_START in txt or UV_START in txt:
            noop += 1
            continue
        slug = VLT.spec_slug(txt)
        # catalog map FIRST, then the ladder — resolving through only one of them
        # skipped every slug whose demo lives on a prefix the catalog does not key
        url, html, _tried, _via = VLT.resolve_preview(f, slug, name)
        if not url:
            continue
        css, sheets = "", []
        for su in VLT.sheet_urls(html, url)[:20]:
            code, body = f.get(su)
            if str(code) == "200":
                css += body.decode("utf-8", "replace")
                sheets.append((su, body))
        if not sheets:
            continue
        painted = collections.Counter(VLT.norm("#" + h) for h in VLT.HEX_RX.findall(css))
        chrom = [(h, n) for h, n in painted.items() if VLT.is_chromatic(h)]
        if not chrom:
            continue

        skip = VLT.comment_lines(txt)
        reval, unver = [], []
        for claim in dict.fromkeys(claims):
            hexv = VLT.norm(claim)
            nearest, nd = None, 1e9
            for h, _n in chrom:
                d = dist(hexv, h)
                if d < nd:
                    nearest, nd = h, d
            if nearest is None:
                continue
            if nd <= args.near:
                reval.append((hexv, nearest, nd, painted[nearest]))
            else:
                unver.append((hexv, nearest, nd))
        if not reval and not unver:
            continue

        new_txt, edits = txt, 0
        for hexv, nearest, nd, n in reval:
            new_txt, k = apply(new_txt, hexv, nearest, skip)
            edits += k
        if reval:
            block = [RV_START,
                     f"**Live palette re-value ({TODAY})** — the demo "
                     f"`{url}` answers **HTTP 200** ({len(html):,} B); the "
                     f"declarations below are quoted from its own stylesheets.", "",
                     "| claimed | painted | d | sheet (bytes, sha256) | declaration |",
                     "| --- | --- | --- | --- | --- |"]
            for hexv, nearest, nd, n in reval:
                sheet_url, sha, rule = locate(sheets, nearest)
                size = next((len(b) for u, b in sheets if u == sheet_url), 0)
                name = sheet_url.rsplit("/", 1)[-1] if sheet_url else "inline"
                rule = rule.replace("|", "\\|")
                block.append(f"| `{hexv}` | `{nearest}` ×{n} | {nd:.0f} | "
                             f"`{name}` ({size:,} B, `{sha}…`) | `{rule}` |")
            block += ["", "The claimed hex was a screenshot sample of the same "
                      "hue; the sheet value is canonical (`docs/replication.md`).",
                      RV_END]
            new_txt = new_txt.rstrip("\n") + "\n\n" + "\n".join(block) + "\n"
        if unver:
            block = [UV_START,
                     f"**TOKEN-UNVERIFIED ({TODAY})** — the demo `{url}` paints no "
                     f"counterpart within {args.near:.0f} RGB units of these claims "
                     "(the re-value threshold). Each line names the nearest painted "
                     "colour and its RGB distance: the claim is a screenshot sample, "
                     "**not** a measured value — build from the sheet, not this list:"]
            block += [f"- `{hexv}` — nearest `{nearest}` (d={nd:.0f})"
                      for hexv, nearest, nd in unver]
            block += [UV_END]
            new_txt = new_txt.rstrip("\n") + "\n\n" + "\n".join(block) + "\n"
        report[name] = {"demo": url, "revalued": [[a, b] for a, b, _c, _d in reval],
                        "unverified": [[a, b] for a, b, _c in unver],
                        "edits": edits}
        if not args.dry_run and new_txt != txt:
            open(spec, "w", encoding="utf-8").write(new_txt)
            touched += 1

    json.dump(report, open(args.report, "w"), indent=1)
    print(f"specs touched {touched}  skipped(already marked) {noop}  "
          f"revalued {sum(len(v['revalued']) for v in report.values())} hexes  "
          f"unverified {sum(len(v['unverified']) for v in report.values())} hexes")
    return 0


if __name__ == "__main__":
    sys.exit(main())
