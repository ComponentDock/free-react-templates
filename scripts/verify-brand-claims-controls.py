#!/usr/bin/env python3
"""verify-brand-claims-controls.py — control harness for the BRAND-CLAIM axis.

Mutation-based: every case builds a synthetic prep root + a synthetic fetch
cache, so it needs no network and no repo.  A GATE case re-runs the verifier with
ONE guard disabled and proves the payload then fires — a control that cannot fail
proves nothing.

Run: python3 verify-brand-claims-controls.py        # expects 15/15
"""
from __future__ import annotations

import hashlib
import json
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VBC = os.path.join(HERE, "verify-brand-claims.py")
FBC = os.path.join(HERE, "fix-brand-claims.py")

BASE = "https://preview.colorlib.com/theme/calculator-01/"
SHEET = "https://preview.colorlib.com/theme/calculator-01/css/style.css"

SPEC = """# Template: Planner (Widget)

## Purpose

A calendar widget; the reference is
<https://preview.colorlib.com/theme/calculator-01/>.

## Design reference (replication findings)

- **Source slug:** `calculator-01`
{notes}
{tokens}

## Requirements

### Requirement: Widget

#### Scenario: Renders
- **WHEN** it mounts
- **THEN** it shows a calendar

## Verification checklist

- [ ] tests
"""

PAGE = ('<html><head><link rel="stylesheet" href="css/style.css">'
        '<title>Calculator 01</title></head><body><p>' + "lorem ipsum " * 160
        + '</p></body></html>')


def seed(cache: str, url: str, body: str, code: str = "200") -> None:
    key = hashlib.sha1(url.encode()).hexdigest()
    open(os.path.join(cache, key), "w").write(body)
    open(os.path.join(cache, key + ".json"), "w").write(
        json.dumps({"code": code, "url": url}))


DEFAULT_CSS = (".btn { background: #1089ff; } .btn:hover { background: #1089ff; }"
               " .cta { background: #1089ff; }")


def fixture(tmp: str, *, notes: str = "", tokens: str = "", css: str = "",
            sheets=None, page: str = PAGE, app: bool = True,
            alias: bool = False) -> str:
    root = os.path.join(tmp, "repo")
    sd = os.path.join(root, "openspec", "specs", "template-planner")
    os.makedirs(sd, exist_ok=True)
    body = SPEC.format(notes=notes, tokens=tokens)
    if alias:
        body = body.replace("# Template: Planner (Widget)",
                            "# Template: Planner (Widget)\n"
                            "<!-- prep-status: shipped-as=other-app -->")
    open(os.path.join(sd, "spec.md"), "w").write(body)
    if app:
        src = os.path.join(root, "apps", "planner", "src")
        os.makedirs(src, exist_ok=True)
        open(os.path.join(src, "index.css"), "w").write(":root{--color-brand:#1089ff}")
    cache = os.path.join(tmp, "cache")
    os.makedirs(cache, exist_ok=True)
    seed(cache, BASE, page)
    for url, body_ in (sheets if sheets is not None
                       else [(SHEET, css or DEFAULT_CSS)]):
        seed(cache, url, body_)
    return root


def run(root: str, script: str = VBC) -> list:
    cache = os.path.join(os.path.dirname(root), "cache")
    out = os.path.join(os.path.dirname(root), "out.json")
    subprocess.run([sys.executable, script, "--prep-root", root, "--no-net",
                    "--cache", cache, "--worktree", "--jobs", "1", "--json", out],
                   capture_output=True, text=True)
    return json.load(open(out))


def buckets(rows):
    return {r["bucket"] for r in rows}


def mutate(tmp: str, old: str, new: str, script: str = VBC, name: str = "mut") -> str:
    src = open(script, encoding="utf-8").read()
    assert old in src, f"mutation anchor missing: {old[:70]}"
    dst = os.path.join(tmp, name + ".py")
    open(dst, "w").write(src.replace(old, new, 1))
    for dep in ("catalog_resolve.py", "verify-live-tokens.py",
                "verify-app-fidelity.py"):
        shutil.copy(os.path.join(HERE, dep), tmp)
    # the mutated copy imports its siblings from ITS OWN directory
    if script == FBC:
        shutil.copy(VBC, tmp)
    return dst


def main() -> int:
    cases = []

    def case(name, fn):
        tmp = tempfile.mkdtemp(prefix="bcc-")
        try:
            ok, detail = fn(tmp)
        except Exception as exc:                 # a crashed case is a failed case
            ok, detail = False, f"{type(exc).__name__}: {exc}"
        finally:
            shutil.rmtree(tmp, ignore_errors=True)
        cases.append((ok, name, detail))

    # 1 — the payload
    def c1(tmp):
        b = buckets(run(fixture(tmp)))
        return ("MEASURED-ROW" in b, f"buckets={sorted(b)}")
    case("payload: a silent spec + a painted surface colour → MEASURED-ROW", c1)

    # 2 — the prep's own prose wins and is only re-formatted
    def c2(tmp):
        notes = "- Teal **`#04d2c8`** primary, white body."
        css = ".btn { background: #04d2c8; } a { color: #04d2c8; } .x{background:#04d2c8}"
        rows = run(fixture(tmp, notes=notes, css=css))
        got = [(r["bucket"], r["hex"]) for r in rows]
        return (got == [("PROSE-ROW", "#04d2c8")], f"rows={got}")
    case("prose: a stated colour becomes a PROSE-ROW with that value", c2)

    # 3 — low chroma prose is not a brand
    def c3(tmp):
        notes = "- Muted lilac `#b689b0` accent."
        rows = run(fixture(tmp, notes=notes))
        got = sorted({r["bucket"] for r in rows})
        return (got == ["MEASURED-ROW"], f"buckets={got}")
    case("low-chroma prose is not promoted (falls through to the measurement)", c3)

    # 4 — a stated colour the sheet never paints is not a row
    def c4(tmp):
        notes = "- Orange **`#ff5e13`** primary."
        rows = run(fixture(tmp, notes=notes, css=".btn{background:#1089ff}"))
        got = [(r["bucket"], r["hex"]) for r in rows]
        return (got == [("PROSE-UNPAINTED", "#ff5e13")], f"rows={got}")
    case("unpainted prose → PROSE-UNPAINTED note (live-token axis' subject)", c4)

    # 5 — GATE: vendor sheets are not the design
    def c5(tmp):
        vendor = [(SHEET, ".btn{background:#1089ff}"),
                  ("https://preview.colorlib.com/theme/calculator-01/css/bootstrap.min.css",
                   ".b{background:#c55303}.nav{background:#c55303}"
                   ".cta{background:#c55303}")]
        link = PAGE.replace("<link", '<link rel="stylesheet" href="css/bootstrap.min.css"><link')
        ok = "MEASURED-ROW" not in buckets(run(fixture(tmp, sheets=vendor, page=link)))
        mut = mutate(tmp, "        if is_vendor(su):\n            vendor.append(rec)\n            continue\n",
                     "        if is_vendor(su):\n            vendor.append(rec)\n")
        bad = buckets(run(fixture(tmp + "2", sheets=vendor, page=link), mut))
        return (ok and "MEASURED-ROW" in bad, f"clean={ok} mutated={sorted(bad)}")
    case("GATE: a vendor bundle's palette is never the brand", c5)

    # 6 — GATE: comments are not paint
    def c6(tmp):
        css = (".btn{background:#1089ff; /* color:#c55303; color:#c55303;"
               " color:#c55303 */}.cta{background:#1089ff}")
        ok = "MEASURED-ROW" not in buckets(run(fixture(tmp, css=css)))
        mut = mutate(tmp, 'txt = strip_comments(body.decode("utf-8", "replace"))',
                     'txt = body.decode("utf-8", "replace")')
        bad = buckets(run(fixture(tmp + "2", css=css), mut))
        return (ok and "MEASURED-ROW" in bad, f"clean={ok} mutated={sorted(bad)}")
    case("GATE: a colour only named in a comment is not painted", c6)

    # 7 — GATE: framework defaults are not promoted
    def c7(tmp):
        css = (".a{background:#007bff}.b{background:#007bff}"
               ".c{background:#007bff}")
        ok = "MEASURED-ROW" not in buckets(run(fixture(tmp, css=css)))
        mut = mutate(tmp, 'if c not in FRAMEWORK and c not in AF.SOCIAL_BRAND]',
                     ']', name="mut2")
        bad = buckets(run(fixture(tmp + "2", css=css), mut))
        return (ok and "MEASURED-ROW" in bad, f"clean={ok} mutated={sorted(bad)}")
    case("GATE: a framework default is never named 'the brand'", c7)

    # 8 — GATE: one-off pixels are THIN
    def c8(tmp):
        css = ".dot{background:#1089ff}.x{background:#1089ff}"
        ok = "THIN" in buckets(run(fixture(tmp, css=css)))
        mut = mutate(tmp, "MIN_DECLS = 3", "MIN_DECLS = 1")
        bad = buckets(run(fixture(tmp + "2", css=css), mut))
        return (ok and "MEASURED-ROW" in bad, f"clean={ok} mutated={sorted(bad)}")
    case("GATE: fewer than MIN_DECLS declarations → THIN, no row", c8)

    # 9 — GATE: decorative-only colours are WEAK
    def c9(tmp):
        css = (".dot:hover{background:#1089ff}.dot:focus{background:#1089ff}"
               ".dot:active{background:#1089ff}")
        ok = "WEAK" in buckets(run(fixture(tmp, css=css)))
        mut = mutate(tmp, 'if st["bg"] < 2 and not st["hint"]:', 'if False:')
        bad = buckets(run(fixture(tmp + "2", css=css), mut))
        return (ok and "MEASURED-ROW" in bad, f"clean={ok} mutated={sorted(bad)}")
    case("GATE: hover/dot colours are WEAK, never 'the brand'", c9)

    # 10 — an existing claim short-circuits the axis
    def c10(tmp):
        notes = "| Brand | `#1089ff` | buttons |\n| --- | --- | --- |"
        b = buckets(run(fixture(tmp, notes=notes)))
        return (b == {"CLAIMED"}, f"buckets={sorted(b)}")
    case("a spec that already carries a brand row is CLAIMED", c10)

    # 11 — the consumer's bullet grammar cannot read parentheses
    def c11(tmp):
        notes = "- **Brand (vivid red):** `#f02930` — `.btn` background"
        css = ".btn{background:#f02930}.h{background:#f02930}.f{background:#f02930}"
        got = [(r["bucket"], r["hex"]) for r in run(fixture(tmp, notes=notes, css=css))]
        return (got == [("PROSE-ROW", "#f02930")], f"rows={got}")
    case("a parenthesised bullet label is prose, not a claim (grammar gap)", c11)

    # 12 — alias preps are out of scope
    def c12(tmp):
        b = buckets(run(fixture(tmp, alias=True)))
        return (b == {"ALIAS-SKIP"}, f"buckets={sorted(b)}")
    case("alias prep → ALIAS-SKIP", c12)

    # 13 — GATE: a network's own colour is not the design's
    def c13(tmp):
        css = ".yt{background:#ff0000}.yt2{background:#ff0000}.yt3{background:#ff0000}"
        ok = "MEASURED-ROW" not in buckets(run(fixture(tmp, css=css)))
        mut = mutate(tmp, 'if c not in FRAMEWORK and c not in AF.SOCIAL_BRAND]',
                     'if c not in FRAMEWORK]', name="mut3")
        bad = buckets(run(fixture(tmp + "2", css=css), mut))
        return (ok and "MEASURED-ROW" in bad, f"clean={ok} mutated={sorted(bad)}")
    case("GATE: a social-network palette colour is never the brand", c13)

    # 14 — the fixer's shapes: row into an existing table vs a new section
    def c14(tmp):
        root = fixture(tmp)
        subprocess.run([sys.executable, FBC, "--prep-root", root, "--cache",
                        os.path.join(tmp, "cache")], capture_output=True, text=True)
        txt = open(os.path.join(root, "openspec", "specs", "template-planner",
                                "spec.md")).read()
        ok = ("## Design tokens" in txt and "| Brand (measured) | `#1089ff` |" in txt
              and txt.index("## Design tokens") < txt.index("## Requirements")
              and "sha256 " in txt)
        # and the table shape: an existing 2-column table keeps two columns
        root2 = fixture(tmp + "2", tokens=("## Design tokens\n\n| Role | Value |\n"
                                           "| --- | --- |\n| Ink | `#111111` |\n"))
        subprocess.run([sys.executable, FBC, "--prep-root", root2, "--cache",
                        os.path.join(tmp + "2", "cache")], capture_output=True, text=True)
        t2 = open(os.path.join(root2, "openspec", "specs", "template-planner",
                               "spec.md")).read()
        row = [ln for ln in t2.splitlines() if "Brand (measured)" in ln]
        ok2 = (bool(row) and row[0].count("|") == 3
               and t2.count("## Design tokens") == 1
               and t2.index("## Design tokens") < t2.index(row[0]))
        return (ok and ok2, f"new-section={ok} table-row={ok2} row={row[:1]}")
    case("fixer: writes a new section, or a row matching the existing table", c14)

    # 15 — GATE: idempotency
    def c15(tmp):
        root = fixture(tmp)
        cmd = [sys.executable, FBC, "--prep-root", root, "--cache",
               os.path.join(tmp, "cache")]
        subprocess.run(cmd, capture_output=True, text=True)
        p = os.path.join(root, "openspec", "specs", "template-planner", "spec.md")
        first = open(p).read()
        out = subprocess.run(cmd, capture_output=True, text=True).stdout
        second = open(p).read()
        return (first == second and "rows written: 0" in out,
                f"identical={first == second} summary={out.strip().splitlines()[-1:]}")
    case("GATE: the fixer is a byte-level no-op on its second run", c15)

    passed = sum(1 for ok, _n, _d in cases if ok)
    gates = sum(1 for ok, n, _d in cases if n.startswith("GATE") and ok)
    for ok, name, detail in cases:
        print(f"{'PASS' if ok else 'FAIL'}  {name}")
        if not ok:
            print(f"      {detail}")
    print(f"\n{passed}/{len(cases)} controls pass ({gates} GATE)")
    return 0 if passed == len(cases) else 1


if __name__ == "__main__":
    sys.exit(main())
