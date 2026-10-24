#!/usr/bin/env python3
"""fix-card-image.py — repair the CARD-IMAGE flags `verify-card-image.py` reports.

Two mechanical repairs, both bounded to the row line they fix:

  NO-IMAGE     the row carries no `![preview](…)` at all.  The ColorLib post for
               the row's own slug publishes exactly one authoritative card image
               — its `og:image` — so the row gets ` · ![preview](<og:image>)`
               appended.  The candidate is only accepted when it is an
               `colorlib.com/wp/wp-content/uploads/` URL that answers 200 with an
               `image/*` content-type; anything else leaves the row alone and is
               reported.
  NONSTANDARD  the row cites the uploads URL as a plain `[preview](…)` LINK.  It
               is rewritten to the house `![preview](…)` image form; the URL is
               untouched.

Nothing else is edited: no checkbox marker, no app link, no ordering.  A second
run is a byte-level no-op (measured), so it is safe to leave in a loop.

Usage
  python3 scripts/fix-card-image.py --dry-run          # show the diffs only
  python3 scripts/fix-card-image.py                    # apply
  python3 scripts/fix-card-image.py --file X.md --limit 5
Exit 0 = nothing left / applied cleanly, 1 = a row could not be repaired, 2 = usage.
"""
from __future__ import annotations

import argparse
import importlib.util
import os
import re
import sys
import urllib.error
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("_cardimage", os.path.join(HERE, "verify-card-image.py"))
assert _spec and _spec.loader
V = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(V)

OG_RX = re.compile(r'property=["\']og:image["\']\s+content=["\']([^"\']+)["\']'
                   r'|content=["\']([^"\']+)["\']\s+property=["\']og:image["\']')
PLAIN_PREVIEW_RX = re.compile(r'(?<!!)\[preview\]\((https?://colorlib\.com/wp/wp-content/uploads/[^)\s]+)\)')
UPLOAD_PREFIX = "https://colorlib.com/wp/wp-content/uploads/"


def fetch(url: str, timeout: float = 30.0):
    req = urllib.request.Request(url, headers={"User-Agent": V.UA})
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, (r.headers.get("content-type") or "").split(";")[0].strip(), r.read()
    except urllib.error.HTTPError as exc:
        return exc.code, "", b""
    except Exception as exc:                                  # noqa: BLE001
        return "ERR %s" % type(exc).__name__, "", b""


def og_image(slug: str):
    """The post's own card image, only when it passes the acceptance test."""
    status, _ctype, body = fetch("https://colorlib.com/wp/template/%s/" % slug)
    if status != 200:
        return None, "post HTTP %s" % status
    m = OG_RX.search(body.decode("utf-8", "replace"))
    url = (m.group(1) or m.group(2)) if m else None
    if not url:
        return None, "no og:image"
    if not url.startswith(UPLOAD_PREFIX):
        return None, "og:image is not an uploads URL (%s)" % url
    st, ct, _b = fetch(url)
    if st != 200 or not ct.startswith("image/"):
        return None, "candidate %s -> %s %s" % (url, st, ct or "-")
    return url, "ok"


def repair_line(line: str, row, note):
    if row["bucket"] == "NONSTANDARD":
        new = PLAIN_PREVIEW_RX.sub(lambda m: "![preview](%s)" % m.group(1), line, count=1)
        return new, "NONSTANDARD -> image form"
    if row["bucket"] == "NO-IMAGE":
        url, why = og_image(row["slug"])
        if not url:
            return None, "NO-IMAGE left alone: %s" % why
        return line.rstrip() + " · ![preview](%s)" % url, "NO-IMAGE -> %s" % url
    return None, note


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="repair CARD-IMAGE flags in TEMPLATES.md")
    ap.add_argument("root", nargs="?", default=".")
    ap.add_argument("--file")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--limit", type=int, default=0)
    args = ap.parse_args(argv)

    path = args.file or os.path.join(args.root, "TEMPLATES.md")
    try:
        text = open(path, encoding="utf-8").read()
    except OSError as exc:
        print("cannot read %s: %s" % (path, exc), file=sys.stderr)
        return 2

    lines = text.split("\n")
    rows, counts = V.classify(V.rows_of(text))
    todo = [r for r in rows if r["bucket"] in ("NO-IMAGE", "NONSTANDARD")]
    if args.limit:
        todo = todo[:args.limit]

    changed = 0
    failed = 0
    for row in todo:
        idx = row["line"] - 1
        new, note = repair_line(lines[idx], row, "")
        print("%-9s %-28s %s" % (row["bucket"], row["slug"] or row["name"], note))
        if new is None:
            failed += 1
            continue
        if new != lines[idx]:
            lines[idx] = new
            changed += 1

    out = "\n".join(lines)
    if args.dry_run:
        print("\n(dry run) %d row(s) would change, %d unrepairable" % (changed, failed))
        return 1 if failed else 0
    if changed:
        with open(path, "w", encoding="utf-8") as fh:
            fh.write(out)
    print("\n%d row(s) rewritten, %d unrepairable" % (changed, failed))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
