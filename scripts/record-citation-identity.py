#!/usr/bin/env python3
"""record-citation-identity.py — IDENTITY-RECORD axis (fixer, docs-only).

`verify-evidence-cells.py` turns "is this cell still describing the sheet I
read?" into a byte comparison — but only when the prep records the sheet's
size/sha256 BESIDE the citation. 73 preps cite a design sheet with no identity
at all (`IDENTITY-UNRECORDED`), so the question can never be asked of them.

This fixer fetches each unrecorded sheet's live bytes and writes ONE
path-qualified identity line into the spec's `## Design tokens` section:

    Sheet identity (measured 2026-10-24): `theme/archs/css/style.css` — 49,321 B, sha256 `eb293b4f29c9…`; …

Design rules (learned on the way):

* The binder is IMPORTED from the verifier, never copied: a fixer with its own
  binding rules re-introduces the basename/window defects `-24c` removed.
* Every written citation is PATH-qualified (`theme/<slug>/css/style.css`), so a
  spec that names two different `style.css` sheets becomes readable per
  citation instead of `CITATION-AMBIGUOUS`.
* If the cited URL 404s or serves a stub, the sheet is cited by the path that
  actually served the bytes (`theme/<slug>/css/<name>`), because that is the
  file `fetch_sheet()` measured.
* Google Fonts URLs are NOT design sheets — their bytes are UA-dependent, so an
  identity there would read as drift. Skipped and reported.
* After writing, the file is re-read and every citation must bind to the numbers
  just written; otherwise the whole spec is refused and left untouched
  (the `-24c` pin: a rewrite must re-read the citation it just wrote).
* A second run is a byte-level no-op.

Usage:
  python3 scripts/record-citation-identity.py --from-json ev-cells.json [--write]
                                               [--only NAME ...] [--limit N]
Exit 0 = nothing to do / all written, 1 = refusals or fetch failures.
"""
from __future__ import annotations

import argparse
import hashlib
import importlib.util
import json
import os
import re
import subprocess
import sys
import tempfile
import urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_ROOT = os.path.dirname(HERE)
UA = ("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) "
      "Chrome/124.0.0.0 Safari/537.36")
# colorlib.com bans this host's IPv6 (curl -4 is the working path)
CURL = ["curl", "-4", "-sSL", "--max-time", "45", "-A", UA]

SKIP_HOSTS = ("fonts.googleapis.com", "fonts.gstatic.com")

ANCHOR = re.compile(r"^##\s+Requirements\s*$", re.M)


def load_verifier(root: str):
    path = os.path.join(root, "scripts", "verify-evidence-cells.py")
    spec = importlib.util.spec_from_file_location("vec", path)
    assert spec and spec.loader, path
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def curl(url: str) -> tuple[str, bytes]:
    """(http_code, raw bytes) — raw bytes, because raw is the sha basis."""
    fd, tmp = tempfile.mkstemp()
    os.close(fd)
    try:
        proc = subprocess.run(CURL + ["-o", tmp, "-w", "%{http_code}", url],
                              capture_output=True, timeout=120)
        code = proc.stdout.decode("utf-8", "replace").strip()
        with open(tmp, "rb") as fh:
            return code, fh.read()
    finally:
        try:
            os.unlink(tmp)
        except OSError:
            pass


def zip_member_cache(url: str) -> dict:
    """{basename: raw bytes} for a free source bundle (archive-only slugs).

    The 10 archive preps cite their sheet as a bare name (`style.css`) because
    the verifier reads it out of `downloads/free/<slug>.zip`; there is no live
    demo serving that skin, so the archive member IS the reference and its raw
    bytes are the identity basis.
    """
    if url in _ZIPS:
        return _ZIPS[url]
    out: dict = {}
    code, body = curl(url)
    if code.startswith("200") and len(body) > 2000:
        try:
            import io
            import zipfile
            z = zipfile.ZipFile(io.BytesIO(body))
            for n in z.namelist():
                if n.lower().endswith(".css"):
                    data = z.read(n)
                    if len(data) > 200:
                        base = n.rsplit("/", 1)[-1]
                        if base not in out or len(data) > len(out[base]):
                            out[base] = data
        except Exception:
            pass
    _ZIPS[url] = out
    return out


_ZIPS: dict = {}
ZIP_LINK = re.compile(r"downloads/free/([A-Za-z0-9._-]+)\.zip")


def resolve(url: str, spec_txt: str = ""):
    """(served_url, raw bytes) for a cited sheet, mirroring the verifier.

    * live sheet: `fetch_sheet` retries `<dir>/css/<name>` when the citation
      omits the `css/` directory and the body is a stub, so the identity must
      describe THAT file;
    * archive-only slug: the citation is a bare member name — read the member
      out of the bundle the spec links.
    """
    if not url.startswith(("http://", "https://")):
        m = ZIP_LINK.search(spec_txt)
        if not m:
            return "", b""
        members = zip_member_cache("https://preview.colorlib.com/downloads/free/%s.zip"
                                   % m.group(1))
        return url, members.get(url, b"")
    code, body = curl(url)
    if code.startswith("200") and len(body) > 200:
        return url, body
    parts = urllib.parse.urlsplit(url)
    head, _, base = parts.path.rpartition("/")
    if "/css/" not in parts.path and base.endswith(".css"):
        alt = urllib.parse.urlunsplit((parts.scheme, parts.netloc,
                                       head + "/css/" + base, parts.query, ""))
        code2, body2 = curl(alt)
        if code2.startswith("200") and len(body2) > 200:
            return alt, body2
    return url, body


def citation_path(url: str) -> str:
    parts = urllib.parse.urlsplit(url)
    path = parts.path.lstrip("/")
    return path + (("?" + parts.query) if parts.query else "")


def identity_line(pairs, day: str, spec_txt: str = "") -> str:
    """One sentence per spec, each sheet's size/sha immediately after its name.

    The numbers must sit in the sheet's OWN clause (the verifier cuts a clause at
    the next `.css` it names), so the citation and its identity cannot be split.
    """
    cells, archive = [], ""
    m = ZIP_LINK.search(spec_txt)
    for cit, size, sha, _src in pairs:
        tail = ""
        if "/" not in cit:                       # bare archive member
            tail = " (member of `downloads/free/%s.zip`)" % m.group(1) if m else ""
            archive = " These sheets are archive members: no live demo serves this skin."
        cells.append("`%s` — %s B, sha256 `%s…`%s" % (cit, format(size, ","), sha, tail))
    return "Sheet identity (measured %s): %s.%s" % (day, "; ".join(cells), archive)


IDENT_LINE = re.compile(r"^Sheet identity \(measured [0-9]{4}-[0-9]{2}-[0-9]{2}\): .*$", re.M)
IDENT_CELL = re.compile(r"`([^`]+\.css[^`]*)` — ([0-9][0-9,]*) B, sha256 `([0-9a-f]{10,64})…`")


def existing_pairs(txt: str):
    """(day, [(citation, size, sha12)]) already recorded, or (None, [])."""
    m = IDENT_LINE.search(txt)
    if not m:
        return None, []
    day = re.search(r"measured ([0-9-]{10})", m.group(0)).group(1)
    return day, [(c, int(n.replace(",", "")), h)
                 for c, n, h in IDENT_CELL.findall(m.group(0))]


def write_line(txt: str, line: str) -> str:
    """Replace the identity paragraph in place, or append it after the tokens.

    Re-running the fixer must MERGE (a spec that gains a citation later gets it
    added to the same sentence), never stack a second identity paragraph.
    """
    m = IDENT_LINE.search(txt)
    if m:
        return txt[:m.start()] + line + txt[m.end():]
    m = ANCHOR.search(txt)
    if not m:
        return txt
    head = txt[:m.start()].rstrip("\n")
    return head + "\n\n" + line + "\n\n" + txt[m.start():]


def binds(vec, txt: str, url: str, size: int, sha12: str) -> bool:
    ident, status = vec.citation_identity(txt, url)
    # `basename` is legitimate for an archive member (the bundle has one sheet);
    # `path` is the normal case for a live sheet.
    return status in ("path", "basename") and ident == (size, sha12)


def candidates(vec, fetcher, txt: str, sp) -> list[str]:
    """The sheet URLs this spec CITES, in verifier order.

    `design_sheets` is the design-set shortlist (the 4 biggest sheets), but a
    prep's cells also cite the icon/font/animation sheets beside it — and those
    are exactly the citations that stay unrecorded (`pixelist`'s
    `css/carouFredSel.css`, `vignette`'s `theme/karl/style.css`). So walk the
    verifier's own `named_refs`, and keep only the URLs it can actually bind
    (`written_ref`) so a fixer can never manufacture a citation the spec never
    wrote.
    """
    demo, html = vec.resolve(fetcher, txt)
    live_paths = {urllib.parse.urlsplit(u).path
                  for u in vec.sheet_urls(html, demo or "")}
    out = []
    for url in vec.named_refs(txt, demo):
        if not url.startswith(("http://", "https://")):
            out.append(url)
            continue
        if urllib.parse.urlsplit(url).netloc in SKIP_HOSTS:
            continue
        if vec.VENDOR_RX.search(os.path.basename(url.split("?")[0])):
            continue
        if not vec.written_ref(txt, url, live_paths):
            continue
        out.append(url)
    for url in sp["design_sheets"]:              # archive members / named-only
        if url not in out:
            out.append(url)
    return out


def main(argv=None) -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=DEFAULT_ROOT)
    ap.add_argument("--from-json", required=True,
                    help="output of verify-evidence-cells.py --json")
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--only", nargs="*", default=None)
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--day", default=None)
    args = ap.parse_args(argv)

    day = args.day or subprocess.run(["date", "+%F"], capture_output=True,
                                     text=True).stdout.strip()
    vec = load_verifier(args.root)
    data = json.load(open(args.from_json, encoding="utf-8"))

    notes = {}
    for n in data["notes"]:
        notes.setdefault(n[1], set()).add(n[0])
    targets = [sp for sp in data["specs"]
               if "IDENTITY-UNRECORDED" in notes.get(sp["name"], ())
               and "CITATION-AMBIGUOUS" not in notes.get(sp["name"], ())]
    if args.only:
        targets = [sp for sp in targets if sp["name"] in set(args.only)]
    if args.limit:
        targets = targets[:args.limit]

    fetcher = vec.Fetcher("/tmp/evidence-cells", net=True)
    written = refused = 0
    skips: list[str] = []
    for sp in targets:
        name = sp["name"]
        path = os.path.join(args.root, "openspec", "specs",
                            "template-%s" % name, "spec.md")
        if not os.path.isfile(path):
            skips.append("%s: no spec.md" % name)
            continue
        txt = open(path, encoding="utf-8").read()
        pairs = []
        for url in candidates(vec, fetcher, txt, sp):
            host = urllib.parse.urlsplit(url).netloc
            if host in SKIP_HOSTS:
                skips.append("%s: %s (font CSS, UA-dependent — not a design "
                             "sheet; identity would read as drift)" % (name, host))
                continue
            ident, status = vec.citation_identity(txt, url)
            if status == "ambiguous":
                skips.append("%s: %s is CITATION-AMBIGUOUS" % (name, url))
                continue
            if ident != (None, None):
                continue                       # already recorded for this citation
            served, body = resolve(url, txt)
            if not body or not served:
                skips.append("%s: %s unreachable (left unrecorded)" % (name, url))
                continue
            size = len(body)
            sha12 = hashlib.sha256(body).hexdigest()[:12]
            if size < 300:
                skips.append("%s: %s served %d B (stub? left unrecorded)"
                             % (name, served, size))
                continue
            cit = citation_path(served)
            if cit not in [c for c, *_ in pairs]:
                pairs.append((cit, size, sha12, url))
        if not pairs:
            continue

        prev_day, prev = existing_pairs(txt)
        seen = {c for c, *_ in pairs}
        merged = ([(c, n, h, None) for c, n, h in prev if c not in seen] + pairs)
        new = write_line(txt, identity_line(merged, prev_day or day, txt))
        if new == txt:
            skips.append("%s: no `## Requirements` anchor" % name)
            refused += 1
            continue
        ok = True
        for cit, size, sha12, _src in merged:
            # the citation as WRITTEN must bind to the numbers written beside it
            if not binds(vec, new, "https://preview.colorlib.com/" + cit, size, sha12):
                skips.append("%s: re-read FAILED for %s" % (name, cit))
                ok = False
        if not ok:
            refused += 1
            continue
        if args.write:
            open(path, "w", encoding="utf-8").write(new)
        written += 1
        print("recorded %-14s %s" % (name, ", ".join("%s (%s B)" % (c, format(s, ","))
                                                    for c, s, *_ in pairs)))

    print("\nrecorded=%d refused=%d skipped=%d" % (written, refused, len(skips)))
    for s in skips:
        print("  skip:", s)
    return 0 if not refused else 1


if __name__ == "__main__":
    sys.exit(main())
