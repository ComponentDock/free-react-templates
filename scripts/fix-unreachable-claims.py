#!/usr/bin/env python3
"""fix-unreachable-claims.py — record the measured re-probe in the specs the
UNREACHABLE-CLAIM axis (`verify-unreachable-claims.py`) flagged.

What it writes, per flagged spec, and nothing else:

  1. the verdict itself — `unreachable` → `unreachable at prep time — **re-probed
     <date>: the demo serves**`, so the sentence stops asserting something false
     while keeping the history readable;
  2. a fenced record block right after the bullet/table block that carried the
     verdict (never inside it), holding the MEASURED facts: the demo URL, status,
     bytes and title, the sheet URL(s) and size, the colours the sheet actually
     paints, the faces it actually declares, and — when the spec's own brand hex
     occurs nowhere in that sheet — that it does not.

It does NOT rewrite the token table. A spec whose app shipped from a
screenshot-derived palette has a REAL reference-truth delta, and the -22n/-23v
convention is to record drift rather than silently re-value a shipped
prescription (`fix-live-tokens.py` is the axis allowed to re-value, and only
from a resolved sheet). The block is the record; the app delta is a follow-up
for the implementer stream.

Idempotent: a spec already carrying `unreachable-reprobe:start` is skipped, and
the block never cites line numbers (the insert shifts them).

Usage:
  python3 scripts/fix-unreachable-claims.py --dry-run
  python3 scripts/fix-unreachable-claims.py            # rewrite in place
"""
from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import os
import pathlib
import re
import sys

TODAY = "2026-10-23"
HERE = pathlib.Path(__file__).resolve().parent
_V = HERE / "verify-unreachable-claims.py"
if not _V.exists():
    _V = (pathlib.Path.home() / ".hermes/skills/automation/componentdock-prep-stream"
          / "scripts/verify-unreachable-claims.py")
_spec = importlib.util.spec_from_file_location("_unreachable", _V)
if _spec is None or _spec.loader is None:                 # pragma: no cover
    sys.exit("verify-unreachable-claims.py not found beside this script nor in "
             "~/.hermes/skills/automation/componentdock-prep-stream/scripts/")
V = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(V)

BLOCK_START = "<!-- unreachable-reprobe:start -->"
BLOCK_END = "<!-- unreachable-reprobe:end -->"
BLOCK_RX = re.compile(re.escape(BLOCK_START) + r".*?" + re.escape(BLOCK_END), re.S)
CONTINUATION = ("- ", "* ", "  ", "\t", "|", ">")


def nfmt(n: int) -> str:
    return f"{n:,}"


# a sheet's face list is dominated by icon fonts and OS defaults; the block names
# the faces a designer would actually see (Poppins, Montserrat, Roboto, Muli …)
NOT_A_DESIGN_FACE_RX = re.compile(
    r"(?i)(awesome|icomoon|linearicon|themify|eleganticons|iconic|iconfont|montserrat-?\d|"
    r"emoji|arial|helveticaneue|segoeui|inherit|initial|sans-serif|serif|monospace|"
    r"materialdesign|glyphicon|custom-icon|fonticon|apple-?system|blinkmacsystem|"
    r"system-ui|ui-|notocoloremoji|applecoloremoji)")


def design_faces(layers, k: int = 4):
    """The faces the sheet declares most often, minus icons and OS defaults.

    Grouped by `face_key`, so a legacy sheet that fonts each WEIGHT shows
    `Montserrat` once instead of `Montserrat-Bold`, `-Regular`, `-ExtraBold`,
    `-Medium` as four "faces".
    """
    total, label = collections.Counter(), {}
    for _u, css in layers:
        for m in re.finditer(r"font-family\s*:\s*([^;}]+)", css):
            for part in m.group(1).split(","):
                f = part.strip().strip("'\"")
                if not f or NOT_A_DESIGN_FACE_RX.search(f):
                    continue
                key = V.face_key(f)
                total[key] += 1
                if key not in label or len(f) < len(label[key]):
                    label[key] = f
    return [label[k_] for k_, _n in total.most_common(k)]


def measured_lines(url, html, layers, brands, faces_claimed):
    css, hexes, faces = V.sheet_facts(layers)
    title, nbytes = V.page_facts(html)
    custom = [(h, n) for h, n in hexes.most_common()
              if h not in V.FRAMEWORK_HEXES and n >= V.MIN_BRAND_HITS][:3]
    out = [BLOCK_START,
           f"> **Re-probe {TODAY}** (`scripts/verify-unreachable-claims.py`): the reference DOES "
           f"serve at `{url}` — HTTP 200, {nfmt(nbytes)} B, title `{title[:70]}`.",
           ">"]
    if layers:
        sheets = ", ".join(f"`{u}` ({nfmt(len(c))} B)" for u, c in layers[:4])
        more = f" (+{len(layers) - 4} more)" if len(layers) > 4 else ""
        out.append(f"> Sheet{'s' if len(layers) > 1 else ''}: {sheets}{more}.")
    if custom:
        out.append("> Colours that sheet actually paints: " +
                   ", ".join(f"`{h}` ×{n}" for h, n in custom) + ".")
    named = design_faces(layers)
    if named:
        out.append("> Faces it actually declares: " + ", ".join(f"`{f}`" for f in named) + ".")
    missing = [h for h in brands if h not in hexes] if brands else []
    if missing:
        what = "brands" if len(missing) > 1 else "brand"
        verb = "occur" if len(missing) > 1 else "occurs"
        out.append(f"> The recorded {what} "
                   f"{', '.join(f'`{h}`' for h in missing)} {verb} nowhere in it: the values "
                   f"below are screenshot samples, not measurements — `docs/replication.md` "
                   f"makes the sheet canonical.")
    if faces_claimed and faces:
        absent = [f for f in faces_claimed if V.face_key(f) not in faces]
        if absent:
            verb = "occur" if len(absent) > 1 else "occurs"
            out.append(f"> The prescribed face{'s' if len(absent) > 1 else ''} "
                       f"{', '.join(f'`{f}`' for f in absent)} {verb} in no rule of it.")
    out.append(">")
    out.append("> Recorded by the PREP audit; the app delta (if any) is a separate "
               "fidelity follow-up — this block is evidence, not a re-value.")
    out.append(BLOCK_END)
    return out


def block_end_index(lines, idx: int) -> int:
    """The last line of the bullet/table block that starts at `idx`."""
    j = idx
    while j + 1 < len(lines):
        nxt = lines[j + 1]
        if nxt.strip() == "" or nxt.startswith(CONTINUATION):
            if nxt.strip() == "" and j + 2 < len(lines) and \
                    not lines[j + 2].startswith(CONTINUATION):
                break
            j += 1
            continue
        break
    return j


def fenced_ranges(lines):
    rng, start = [], None
    for i, line in enumerate(lines):
        if line.lstrip().startswith("```"):
            if start is None:
                start = i
            else:
                rng.append((start, i))
                start = None
    if start is not None:
        rng.append((start, len(lines)))
    return rng


def clause_end(txt: str, pos: int, end: int) -> int:
    """Where the verdict clause ends — the closing paren when one is open.

    The verdicts wrap: `(404 at\n  time of research — design tokens derived from
    the screenshot)`. Appending at the end of the MATCH line would cut the
    parenthesis in half, so when a `(` opened before the match is still open at
    its end, the clause ends at its matching `)`.
    """
    opener = txt.rfind("(", 0, pos)
    if opener >= 0 and ")" not in txt[opener:end]:
        depth = 0
        for i in range(opener, min(len(txt), end + 400)):
            if txt[i] == "(":
                depth += 1
            elif txt[i] == ")":
                depth -= 1
                if depth == 0:
                    return i + 1
        return end
    eol = txt.find("\n", end)
    return len(txt) if eol < 0 else eol


def fix_spec(txt: str, url: str, html: str, layers, refresh: bool = False):
    """-> (new_text, n_edits). Byte-identical when there is nothing to do.

    `refresh` re-derives an EXISTING block (a later parser/guard improvement can
    add a line the first pass could not know about) without touching the
    verdict clause or adding a second block — still a byte-level no-op when the
    recomputed block equals the one on disk.
    """
    if BLOCK_START in txt:
        if not refresh:
            return txt, 0
        brands, faces, _loose = V.token_claims(txt)
        block = "\n".join(measured_lines(url, html, layers, brands, faces))
        new = BLOCK_RX.sub(lambda m: block, txt, count=1)
        return new, (0 if new == txt else 1)
    brands, fontfaces, _loose = V.token_claims(txt)
    lines = txt.split("\n")
    fences = fenced_ranges(lines)
    in_fence = lambda i: any(a < i < b for a, b in fences)
    # collect insertion points FIRST (offsets), then splice from the end back
    points, first_line = [], None
    line_offsets, acc = [], 0
    for line in lines:
        line_offsets.append(acc)
        acc += len(line) + 1
    for lineno, phrase, _ctx, state in V.claims(txt):
        if state:
            continue
        i = lineno - 1
        if i >= len(lines) or in_fence(i):
            continue
        pos = txt.find(phrase, line_offsets[i])
        if pos < 0:
            continue
        points.append(clause_end(txt, pos, pos + len(phrase)))
        if first_line is None:
            first_line = i
    edits = 0
    for at in sorted(set(points), reverse=True):
        # a verdict that ends a sentence (`…unavailable).`) reads better with the
        # clause BEFORE its full stop
        if at and txt[at - 1] == "." and (at == len(txt) or txt[at] == "\n"):
            at -= 1
        txt = txt[:at] + " — **re-probed " + TODAY + ": the demo serves**" + \
            " (measured record below)" + txt[at:]
        edits += 1
    if first_line is not None:
        lines = txt.split("\n")
        block = measured_lines(url, html, layers, brands, fontfaces)
        at = block_end_index(lines, first_line)
        lines[at + 1:at + 1] = [""] + block
        txt = "\n".join(lines)
        edits += 1
    return txt, edits


def main(argv=None):
    ap = argparse.ArgumentParser()
    ap.add_argument("--prep-root", default="/root/free-react-templates-p2")
    ap.add_argument("--cache", default="/tmp/unreachable-cache")
    ap.add_argument("--no-net", action="store_true")
    ap.add_argument("--slug", default=None)
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--refresh", action="store_true",
                    help="re-derive a block that is already on disk")
    ap.add_argument("--jobs", type=int, default=1)
    a = ap.parse_args(argv)

    root = a.prep_root
    specs_dir = os.path.join(root, "openspec", "specs")
    if not os.path.isdir(specs_dir):
        print(f"not a prep tree: {root}", file=sys.stderr)
        return 2
    os.makedirs(a.cache, exist_ok=True)
    fetch = V.S.Fetcher(a.cache, not a.no_net)
    cat = V.load_catalog(fetch, a.cache)

    specs = V.read_specs(root, None, True)
    stats = collections.Counter()
    changed = []

    def work(path):
        name = path.split("/")[2].replace("template-", "")
        txt = open(os.path.join(root, path), encoding="utf-8").read()
        if not V.claims(txt):
            return None
        slug = V.source_slug(txt)
        if not slug or (a.slug and a.slug not in (slug, name)):
            return None
        url, html, ok = V.resolve(fetch, slug, cat)
        if not url:
            return None
        layers = V.S.sheet_layers(html, url, fetch)
        if a.refresh:
            # a refresh reads every spec that already carries a block, whether
            # or not it still flags — the block is what closes the flag
            if BLOCK_START not in txt:
                return None
            kinds = {"REFRESH"}
        else:
            flags, _notes, _primary = V.audit(txt, slug, url, html, layers, ok)
            kinds = {f[0] for f in flags}
            if not kinds & {"STALE-CLAIM", "PALETTE-WRONG", "TYPE-WRONG"}:
                return None
        new, n = fix_spec(txt, url, html, layers, refresh=a.refresh)
        if n == 0:
            return ("skip", name, kinds, 0)
        if not a.dry_run:
            open(os.path.join(root, path), "w", encoding="utf-8").write(new)
        return ("fixed", name, kinds, n)

    if a.jobs > 1:
        from concurrent.futures import ThreadPoolExecutor
        with ThreadPoolExecutor(max_workers=a.jobs) as ex:
            results = list(ex.map(work, specs))
    else:
        results = [work(p) for p in specs]

    for r in results:
        if not r:
            stats["skipped-no-flag"] += 1
            continue
        status, name, kinds, n = r
        stats[status] += 1
        stats["edits"] += n
        if status == "fixed":
            changed.append({"template": name, "kinds": sorted(kinds), "edits": n})
            print(f"  {'would fix' if a.dry_run else 'fixed'} {name:24s} {','.join(sorted(kinds))}")
    print(f"\n{stats['fixed']} specs rewritten, {stats['edits']} edits, "
          f"{stats['skip']} already carrying a block"
          f"{' (DRY RUN)' if a.dry_run else ''}")
    if a.dry_run:
        json.dump(changed, open("/tmp/unreachable-fix-dryrun.json", "w"), indent=1)
        print("wrote /tmp/unreachable-fix-dryrun.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
