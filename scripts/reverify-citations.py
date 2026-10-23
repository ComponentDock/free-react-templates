#!/usr/bin/env python3
"""reverify-citations.py — re-record a moved sheet's identity PER CITATION.

`fix-sha-basis.py` fixed the wrong HASH BASIS; this fixes the record after the
reference's build moved *without the palette moving*. Two shapes are safe:

  REGENERATED  the live file has the SAME length and a different sha256 — the
               minifier rebuilt it (the v3 `?v=3.0.x` skins). The design did
               not change size, so only the sha is wrong.
  TWIN-SIZE    the recorded sha256 still matches the live file but the recorded
               size is another file's (`listnest` 1,672 B — the min twin —
               beside the big sheet's sha). Only the size is wrong.

Both are rewrites of a number the spec already states, and both are refused
unless the palette still reproduces: EVERY declared token hex must paint in the
live sheet set, and every cited selector must exist. A sheet that lost a
selector or a colour is DRIFT (re-measure the tokens), not a record defect, and
that it is why `exposely` (a `.mfp-close` selector the rebuild dropped) is left
alone.

BINDING: the rewrite targets the citation whose PATH tail matches the URL, never
the first line that happens to carry the basename. `aisle` cites three
`styles.css` sheets — a basename-first rewrite would overwrite the wrong page's
number (see `verify-evidence-cells.py: citation_identity`).

Byte-level no-op on a second run (a fixed citation verifies `ok`).

Usage:
  python3 scripts/reverify-citations.py [--root DIR] [--cache DIR] [--dry-run]
  python3 scripts/reverify-citations.py --controls      # offline, 7/7
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


def _tail_hits(mod, txt: str, url: str):
    """[(line_index, match_end)] for the URL's most specific path tail present."""
    lines = txt.splitlines()
    for tail in mod.citation_tails(url):
        rx = mod._tail_rx(tail)
        hits = []
        for i, ln in enumerate(lines):
            m = rx.search(ln)
            if m and any(v is not None for v in mod._cell_identity(lines, i, m.end())):
                hits.append((i, m.end()))
        if hits:
            return hits
    return []


def rewrite(mod, txt: str, url: str, size, sha: str | None):
    """(text, n) — rewrite the size/sha recorded beside THIS citation."""
    lines = txt.split("\n")
    hits = _tail_hits(mod, txt, url)
    if not hits:
        return txt, 0
    i, end = hits[0]
    span = 3
    seg0 = lines[i][end:]
    win = seg0 + "\n" + "\n".join(lines[i + 1:i + span])
    mb = mod.BYTES_RX.search(win)
    ms = mod.SHA_RX.search(win)
    n = 0
    if mb is not None and size is not None:
        new = "%s B" % f"{size:,}"
        if win[mb.start():mb.end()] != new:
            win = win[:mb.start()] + new + win[mb.end():]
            n += 1
    if ms is not None and sha:
        old = ms.group(1)
        new = sha[:len(old)]
        if old != new:
            pos = win.find("sha256")
            ms2 = mod.SHA_RX.search(win)
            if ms2:
                win = win[:ms2.start(1)] + new + win[ms2.end(1):]
                n += 1
    if not n:
        return txt, 0
    parts = win.split("\n")
    lines[i] = lines[i][:end] + parts[0]
    for j, part in enumerate(parts[1:], start=1):
        lines[i + j] = part
    return "\n".join(lines), n


def paint_guard(mod, txt: str, named, html: str, live) -> bool:
    """True when every declared colour AND every cited selector still exists."""
    claims = mod.claims_of(txt)
    css = "\n".join(t for _, t in list(named) + list(live)) + "\n" + mod.inline_css(html)
    count = mod.census(css)
    sels = mod.selector_parts(css)
    for c in claims:
        if c["kind"] == "gradient":
            continue
        h = c["hex"]
        if h and not (h in count or mod.paints_value(css, h)):
            return False
        if c["sel"] and not any(mod.sel_atoms(s, sels, sels) for s in c["sel"][:2]):
            return False
    return True


def classify(mod, txt: str, url: str, body: str):
    """'regenerated' | 'twin-size' | None — is this a safe record defect?"""
    ident, status = mod.citation_identity(txt, url)
    if status != "path":
        return None                     # unbound or unrecorded: not a rewrite
    size, sha = ident
    raw = body.encode("utf-8", "replace")
    if not raw:
        return None
    if sha and size is not None and size == len(raw) and \
            not hashlib.sha256(raw).hexdigest().startswith(sha[:10]):
        return "regenerated"
    if sha and size is not None and size != len(raw) and \
            hashlib.sha256(raw).hexdigest().startswith(sha[:10]):
        return "twin-size"
    return None


def run(root: str, cache: str, dry: bool, net: bool = True, only=()) -> int:
    mod = load()
    f = mod.Fetcher(cache, net)
    fixed = rows = left = 0
    paths = sorted(glob.glob(os.path.join(root, "openspec/specs/template-*/spec.md")))
    if only:
        want = {("template-" + n) for n in only}
        paths = [p for p in paths if os.path.basename(os.path.dirname(p)) in want]
    for p in paths:
        txt = open(p, encoding="utf-8", errors="replace").read()
        demo, html = mod.resolve(f, txt)
        named = []
        for u in mod.named_refs(txt, demo):
            body = mod.fetch_sheet(f, u)
            if len(body) > 200:
                named.append((u, body))
        named = mod.dedupe_sheets(named, demo)
        live = []
        for u in mod.sheet_urls(html, demo or ""):
            b = f.get(u).decode("utf-8", "replace")
            if len(b) > 200:
                live.append((u, b))
        live = mod.dedupe_sheets(live, demo)
        todo = []
        for u, body in named:
            b = os.path.basename(u.split("?")[0])
            if mod.VENDOR_RX.search(b):
                continue
            kind = classify(mod, txt, u, body)
            if kind:
                todo.append((u, kind, body))
        if not todo:
            continue
        if not paint_guard(mod, txt, named, html, live):
            print("left %s: palette/selector does not reproduce (drift) — %s"
                  % (os.path.basename(os.path.dirname(p)),
                     ", ".join(os.path.basename(u) for u, _, _ in todo)))
            left += 1
            continue
        new = txt
        for u, kind, body in todo:
            raw = body.encode("utf-8", "replace")
            new, n = rewrite(mod, new, u, len(raw), hashlib.sha256(raw).hexdigest())
            rows += n
        # Self-check: every rewritten citation must now verify `ok`. A rewrite
        # that lands in the wrong clause (listnest's icon subset sits on the
        # same line) leaves the citation unverifiable, so revert the whole spec.
        bad = [u for u, _, body in todo
               if mod.identity_state(new, u, body)[0] not in ("ok", None)]
        if bad:
            print("REFUSED %s: rewrite did not verify (%s)"
                  % (os.path.basename(os.path.dirname(p)),
                     ", ".join(os.path.basename(u.split("?")[0]) for u in bad)))
            continue
        if new != txt:
            fixed += 1
            if not dry:
                open(p, "w", encoding="utf-8").write(new)
            print(("would fix " if dry else "fixed ") + os.path.basename(os.path.dirname(p))
                  + ": " + ", ".join("%s (%s)" % (os.path.basename(u.split("?")[0]), k)
                                     for u, k, _ in todo))
    print(f"specs touched={fixed} numbers rewritten={rows} left-for-remeasure={left}")
    return 0


# ---------------------------------------------------------------- controls --
SPEC = """# Template: Demo

## Purpose

| Accent | `#123456` | 3 declarations — `.card:hover` |

{cite}
"""


def _fixture(cite, sheet=".card:hover{color:#123456}\\n" * 40, extra=""):
    tmp = tempfile.mkdtemp()
    root = os.path.join(tmp, "repo")
    d = os.path.join(root, "openspec", "specs", "template-demo")
    os.makedirs(d, exist_ok=True)
    path = os.path.join(d, "spec.md")
    open(path, "w").write(SPEC.format(cite=cite) + extra)
    return root, path, sheet


def _one_case(cite, sheet, mutate=None):
    """(text after a run, ...) for a synthetic prep."""
    mod = load()
    root, path, body = _fixture(cite, sheet)
    html = ("<!doctype html><html><head><link rel=\"stylesheet\" href=\"css/style.css\">"
            "</head><body></body></html>" + "<!-- %s -->" % ("x" * 2200))
    pages = {"https://preview.colorlib.com/theme/demo/": html.encode(),
             "https://preview.colorlib.com/theme/demo/css/style.css": body.encode()}
    f = type("F", (), {"get": lambda self, u, timeout=25: pages.get(u, b"")})()
    named = [(u, mod.fetch_sheet(f, u))
             for u in mod.named_refs(open(path).read(),
                                     "https://preview.colorlib.com/theme/demo/")]
    named = [(u, b) for u, b in named if len(b) > 200]
    todo = [(u, classify(mod, open(path).read(), u, b), b) for u, b in
            mod.dedupe_sheets(named, "https://preview.colorlib.com/theme/demo/")]
    todo = [(u, k, b) for u, k, b in todo if k]
    txt = open(path).read()
    if not todo:
        return txt, txt
    new = txt
    for u, k, b in todo:
        raw = b.encode("utf-8", "replace")
        new, _ = rewrite(mod, new, u, len(raw), hashlib.sha256(raw).hexdigest())
    return new, txt


def controls() -> int:
    cases = []
    body = ".card:hover{color:#123456}\n" * 40
    same_size = body.replace("#123456", "#123457", 1).replace("x", "y")[:len(body)]
    while len(same_size) < len(body):
        same_size += "\n"
    sha_live = hashlib.sha256(body.encode()).hexdigest()

    cite = ("Sheet `https://preview.colorlib.com/theme/demo/css/style.css` "
            "(%d B, sha256 `%s…`)." % (len(body), sha_live[:12]))
    out, before = _one_case(cite, body)
    cases.append(("a verified citation is left byte-identical", out == before))

    dead = "0" * 12
    cite = ("Sheet `https://preview.colorlib.com/theme/demo/css/style.css` "
            "(%d B, sha256 `%s…`)." % (len(body) - 10, sha_live[:12]))
    out, before = _one_case(cite, body)
    cases.append(("twin-size: a matching sha with the wrong size gets the size fixed",
                  out is not None and ("%s B" % f"{len(body):,}") in out
                  and sha_live[:12] in out and f"{len(body) - 10:,} B" not in out))

    regen = body.replace("#123456", "#654321")
    cite = ("Sheet `https://preview.colorlib.com/theme/demo/css/style.css` "
            "(%d B, sha256 `%s…`)." % (len(regen), dead))
    out, before = _one_case(cite, regen)
    cases.append(("regenerated at the same size gets the live sha",
                  out is not None and hashlib.sha256(regen.encode()).hexdigest()[:12] in out))

    cite = ("Sheet `https://preview.colorlib.com/theme/demo/css/style.css` "
            "(1,672 B, sha256 `%s…`)." % dead)
    out, before = _one_case(cite, regen)
    cases.append(("a size-only difference is not a record defect", out == before))

    sib = ("Sibling `pages/a/styles.css` (1,000 B).\n"
           "Sheet `https://preview.colorlib.com/theme/demo/css/style.css` "
           "(%d B, sha256 `%s…`)." % (len(regen), dead))
    out, before = _one_case(sib, regen)
    cases.append(("sibling citation keeps its own numbers",
                  "(1,000 B)" in out
                  and hashlib.sha256(regen.encode()).hexdigest()[:12] in out))

    cite_bare = "Tokens from `style.css` (1,672 B, sha256 `%s…`)." % dead
    out, before = _one_case(cite_bare, regen)
    cases.append(("a bare, unbound citation is not rewritten", out == before))

    # the palette guard
    other = ".card:hover{color:#00ff00}\n" * 40
    cite = ("Sheet `https://preview.colorlib.com/theme/demo/css/style.css` "
            "(%d B, sha256 `%s…`)." % (len(other), dead))
    mod = load()
    root, path, body2 = _fixture(cite, other)
    txt = open(path).read()
    html = "<!-- %s -->" % ("x" * 2200)
    named = [("https://preview.colorlib.com/theme/demo/css/style.css", other)]
    cases.append(("a sheet that lost the declared colour is not re-recorded",
                  not paint_guard(mod, txt, named, html, [])))

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
    ap.add_argument("--only", default="", help="comma-separated template names")
    a = ap.parse_args()
    if a.controls:
        return controls()
    only = [x.strip() for x in a.only.split(",") if x.strip()]
    return run(a.root, a.cache, a.dry_run, only=only)


if __name__ == "__main__":
    sys.exit(main())
