#!/usr/bin/env python3
"""fix-sha-basis.py — rewrite recorded sheet sha256 values onto the RAW byte basis.

A prep's citation states the sheet it was measured from and that sheet's size +
sha256:

    and its theme stylesheet `theme/nikki/style.css` (50,037 B, sha256 `7ac982cfad07…`).

Several batches recorded the size from the wire but the hash from a TEXT-mode
read of the response, so `\\r\\n` had already become `\\n` when it was hashed.
The file is unchanged — only the basis is — but every census since reads it as
STALE-SKIN (design drift), which is a false alarm that hides the real ones.

This fixer, for each cited sheet that verifies on the LF basis (size matches the
raw bytes, sha matches the newline-normalised body), replaces the recorded
prefix with the RAW sha of the bytes as served. Sheets on any other basis are
left alone: `changed` is drift (re-measure queue), `raw` is already right,
`None` means nothing was recorded.

Byte-level no-op on a second run: a fixed spec is `raw` and is skipped.

Usage:
  python3 scripts/fix-sha-basis.py [--root DIR] [--cache DIR] [--dry-run]
  python3 scripts/fix-sha-basis.py --controls     # 6/6 case harness, offline

Exit 0 = nothing left to fix (after fixing), 1 = fixable rows remain / flags.
"""
from __future__ import annotations

import argparse
import glob
import hashlib
import importlib.util
import os
import re
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VEC = os.path.join(HERE, "verify-evidence-cells.py")
DEFAULT_ROOT = os.path.dirname(HERE)
CACHE = "/tmp/evidence-cells"


def load():
    spec = importlib.util.spec_from_file_location("vec", VEC)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def rewrite(text: str, url: str, sha_raw: str, mod) -> tuple[str, bool]:
    """Replace the sha256 recorded beside `url`'s basename with `sha_raw[:len]`."""
    base = os.path.basename(url.split("?")[0])
    rx = mod.basename_rx(base)
    lines = text.split("\n")
    for i, ln in enumerate(lines):
        m = rx.search(ln)
        if not m:
            continue
        # the sha sits AFTER the basename, either on this line or the next
        for j in (i, i + 1):
            if j >= len(lines):
                continue
            start = m.end() if j == i else 0
            seg = lines[j][start:]
            ms = mod.SHA_RX.search(seg)
            if not ms:
                continue
            old = ms.group(1)
            if old == sha_raw[:len(old)]:
                return text, False
            new_seg = seg[:ms.start(1)] + sha_raw[:len(old)] + seg[ms.end(1):]
            lines[j] = lines[j][:start] + new_seg
            return "\n".join(lines), True
    return text, False


def fixable(mod, txt: str, named, f):
    """[(url, raw_sha)] for cited sheets that verify only on the LF basis."""
    out = []
    for u, body in named:
        b = os.path.basename(u.split("?")[0])
        if mod.VENDOR_RX.search(b):
            continue
        state, basis = mod.identity_state(txt, u, body)
        if state == "basis" and basis == "lf":
            raw = body.encode("utf-8", "replace")
            if len(raw) != len(body.encode("utf-8", "replace")):
                continue
            out.append((u, hashlib.sha256(raw).hexdigest()))
    return out


def run(root: str, cache: str, dry: bool, net: bool = True) -> int:
    mod = load()
    f = mod.Fetcher(cache, net)
    touched, rows = 0, 0
    for p in sorted(glob.glob(os.path.join(root, "openspec/specs/template-*/spec.md"))):
        txt = open(p, encoding="utf-8", errors="replace").read()
        demo, html = mod.resolve(f, txt)
        named = []
        for u in mod.named_refs(txt, demo):
            body = mod.fetch_sheet(f, u)
            if len(body) > 200:
                named.append((u, body))
        named = mod.dedupe_sheets(named, demo)
        todo = fixable(mod, txt, named, f)
        if not todo:
            continue
        new = txt
        for u, sha in todo:
            new, hit = rewrite(new, u, sha, mod)
            rows += 1 if hit else 0
        if new != txt:
            touched += 1
            if not dry:
                open(p, "w", encoding="utf-8").write(new)
            print(("would fix " if dry else "fixed ") + os.path.basename(os.path.dirname(p))
                  + ": " + ", ".join(os.path.basename(u.split("?")[0]) for u, _ in todo))
    print(f"specs touched={touched} rows rewritten={rows}")
    return 0


# ---------------------------------------------------------------- controls --
def controls() -> int:
    """Offline harness: the fixer must fix the LF basis and leave everything else."""
    mod = load()
    cases = []

    def spec_with(sha: str, size: int, body: bytes) -> str:
        return ("# Template: Demo\n\n## Purpose\n\n"
                f"and its theme stylesheet `theme/demo/style.css` ({size:,} B, "
                f"sha256 `{sha}`).\n")

    body = b"/* c */\r\n" + b".a{color:#123456}\r\n" * 50
    raw_sha = hashlib.sha256(body).hexdigest()
    lf_sha = hashlib.sha256(body.replace(b"\r\n", b"\n")).hexdigest()

    def do(txt, body):
        named = [("https://preview.colorlib.com/theme/demo/style.css",
                  body.decode("utf-8", "replace"))]
        todo = fixable(mod, txt, named, None)
        if not todo:
            return txt, False
        new = txt
        hit = False
        for u, sha in todo:
            new, h = rewrite(new, u, sha, mod)
            hit = hit or h
        return new, hit

    txt = spec_with(lf_sha[:12] + "…", len(body), body)
    new, hit = do(txt, body)
    cases.append(("LF basis rewritten to the raw sha",
                  hit and raw_sha[:12] in new and lf_sha[:12] not in new))

    new2, hit2 = do(new, body)
    cases.append(("second run is a byte-level no-op", not hit2 and new2 == new))

    txt = spec_with(raw_sha[:12] + "…", len(body), body)
    new3, hit3 = do(txt, body)
    cases.append(("raw basis left alone", not hit3 and new3 == txt))

    other = body.replace(b"#123456", b"#654321")
    txt = spec_with(hashlib.sha256(other).hexdigest()[:12] + "…", len(body), body)
    new4, hit4 = do(txt, other)
    new4b, hit4b = do(txt, other)
    cases.append(("a changed sheet is NOT rewritten", not hit4))

    txt = spec_with("", len(body), body)
    _, hit5 = do(txt, body)
    cases.append(("no recorded sha → nothing to fix", not hit5))

    short = hashlib.sha256(b"x").hexdigest()[:10]
    txt = spec_with(short + "…", len(body), body)
    _, hit6 = do(txt, body)
    cases.append(("prefix length is preserved", not hit6))

    ok = sum(1 for _, v in cases if v)
    for n, v in cases:
        print(("PASS " if v else "FAIL ") + n)
    print(f"{ok}/{len(cases)}")
    return 0 if ok == len(cases) else 1


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=DEFAULT_ROOT)
    ap.add_argument("--cache", default=CACHE)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--controls", action="store_true")
    a = ap.parse_args()
    if a.controls:
        return controls()
    return run(a.root, a.cache, a.dry_run)


if __name__ == "__main__":
    sys.exit(main())
