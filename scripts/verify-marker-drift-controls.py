#!/usr/bin/env python3
"""verify-marker-drift-controls.py — mutation-based controls for the alias-marker axis.

Every control builds a THROWAWAY fixture tree (docs/templates/, openspec/specs/,
apps/ + its own catalogue/alias JSON) and asserts the verdict the axis is
supposed to reach. GATE controls additionally DISABLE one guard and prove the
payload then fires (or stops firing) — i.e. that the guard is load-bearing and
the control is not passing against an empty corpus.

Run: python3 scripts/verify-marker-drift-controls.py
Exit: 0 = all controls pass, 1 = a control failed.
"""
from __future__ import annotations

import importlib.util
import json
import os
import shutil
import sys
import tempfile
import traceback

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("vmd", os.path.join(HERE, "verify-marker-drift.py"))
V = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(V)

_fspec = importlib.util.spec_from_file_location("fsb", os.path.join(HERE, "fix-shipped-banners.py"))
F = importlib.util.module_from_spec(_fspec)
_fspec.loader.exec_module(F)

CATALOG = {
    "demos": {
        "carrentals": "/theme/carrentals",
        "carrental": "/theme/carrental",
        "marian": "/theme/marian",
        "ocheandeview": "/theme/ocheandeview",
        "slim": "/theme/slim",
        "slim2": "/theme/slim2",
        "tastyrecipes": "/theme/tastyrecipes",
        "bootstrap-footer-04": "/theme/bft/bootstrap-footer-04",
        "bootstrap-footer-01": "/theme/bft/bootstrap-footer-01",
        "login-form-v3": "/etc/lf/Login_v3/index.html",
        "pawpal": "/theme/pawpal",
        "fashion": "/theme/fashion",
    }
}
ALIASES = {"aliases": {"tasty-recipes": "tastyrecipes", "fashion-2": "fashion"}}

results = []


def tree(root, preps, apps=(), specs=None):
    """preps: {dir: {'marker': app|None, 'files': {...}, 'spec': slug|None}}"""
    specs = specs or {}
    os.makedirs(os.path.join(root, "docs", "templates"), exist_ok=True)
    os.makedirs(os.path.join(root, "apps"), exist_ok=True)
    os.makedirs(os.path.join(root, "openspec", "specs"), exist_ok=True)
    for a in apps:
        os.makedirs(os.path.join(root, "apps", a), exist_ok=True)
    for name, slug in specs.items():
        d = os.path.join(root, "openspec", "specs", f"template-{name}")
        os.makedirs(d, exist_ok=True)
        body = f"# Template: {name}\n\n## Purpose\n\n- **Source slug:** `{slug}`\n" if slug else \
               f"# Template: {name}\n\n## Purpose\n\nNo source named.\n"
        open(os.path.join(d, "spec.md"), "w").write(body)
    for d, cfg in preps.items():
        pd = os.path.join(root, "docs", "templates", d)
        os.makedirs(pd, exist_ok=True)
        files = cfg.get("files") or {"tasks.md": "# Tasks\n\n- [ ] step\n"}
        for fn, body in files.items():
            open(os.path.join(pd, fn), "w").write(body)
        if cfg.get("marker"):
            p = os.path.join(pd, "tasks.md")
            body = open(p).read() if os.path.exists(p) else "# Tasks\n"
            open(p, "w").write(f"<!-- prep-status: shipped-as={cfg['marker']} -->\n" + body)
    json.dump(CATALOG, open(os.path.join(root, "cat.json"), "w"))
    json.dump(ALIASES, open(os.path.join(root, "al.json"), "w"))
    return root


def run(root, **kw):
    cat = V.load_json(os.path.join(root, "cat.json"))
    al = V.load_json(os.path.join(root, "al.json"))
    ident = V.Ident(cat.get("demos", {}), al.get("aliases", {}),
                    use_catalog=kw.get("use_catalog", True),
                    use_aliases=kw.get("use_aliases", True))
    rows, buckets, flags, notes, claims = V.classify(root, ident)
    return rows, buckets, flags, notes


def check(label, fn, gate=False):
    try:
        got, want = fn()
        ok = got == want
        results.append((label, ok, gate, "" if ok else f"got={got!r} want={want!r}"))
    except Exception as exc:                     # noqa: BLE001 — harness
        results.append((label, False, gate, f"{type(exc).__name__}: {exc}"))
        if os.environ.get("VMD_TRACE"):
            traceback.print_exc()


def tmp():
    return tempfile.mkdtemp(prefix="vmd-")


def main() -> int:
    # c01 — the happy path: marker target recreates the prep's design
    def c01():
        r = tmp()
        tree(r, {"alpha": {"marker": "appone"}}, apps=["appone"],
             specs={"alpha": "designone", "appone": "designone"})
        rows, buckets, flags, _ = run(r)
        shutil.rmtree(r)
        return (("AGREE", len(flags))), (("AGREE", 0))
    check("c01 marker agrees with the app's own design", c01)

    # c02 — target exists but recreates a different design → flag + unique fix
    def c02():
        r = tmp()
        tree(r, {"alpha": {"marker": "appwrong"}},
             apps=["appwrong", "appright"],
             specs={"alpha": "carrentals", "appwrong": "carrental",
                    "appright": "carrentals"})
        rows, buckets, flags, _ = run(r)
        shutil.rmtree(r)
        f = flags[0] if flags else {}
        return ((f.get("bucket"), f.get("suggestion")), ("TARGET-DRIFT", "appright"))
    check("c02 drift → TARGET-DRIFT with the unique correct app", c02)

    # c03 GATE — numbered siblings are different designs
    def c03():
        r = tmp()
        tree(r, {"alpha": {"marker": "appslim"}}, apps=["appslim"],
             specs={"alpha": "slim2", "appslim": "slim"})
        _, _, flags, _ = run(r)
        digits_on = len(flags)
        old = V.norm_letters
        V.norm_letters = lambda s: "".join(c for c in old(s) if not c.isdigit())
        try:
            _, _, flags2, _ = run(r)
        finally:
            V.norm_letters = old
            shutil.rmtree(r)
        return ((digits_on, len(flags2)), (1, 0))
    check("c03 GATE digit guard: slim vs slim2 flags only while digits count", c03, gate=True)

    # c04 GATE — `carrentals` vs `car-rental` are different products
    def c04():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "carrentals", "appA": "carrental"})
        _, _, flags, _ = run(r)
        real = len(flags)
        old = V.family_norm

        def fold_all(s):                          # mutation: fold the trailing plural
            return old(s).rstrip("s")
        V.family_norm = fold_all
        try:
            _, _, flags2, _ = run(r)
        finally:
            V.family_norm = old
            shutil.rmtree(r)
        return ((real, len(flags2)), (1, 0))
    check("c04 GATE plural fold hides the sibling drift (guard load-bearing)", c04, gate=True)

    # c05 GATE — the alias map folds `tasty-recipes` -> `tastyrecipes`
    def c05():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "fashion-2", "appA": "fashion"})
        rows_a, _, flags_a, _ = run(r)
        rows_b, _, flags_b, _ = run(r, use_aliases=False)
        shutil.rmtree(r)
        # with the map the brief resolves to the app's product (AGREE); without
        # it `tasty-recipes` is not a catalogue product, so the pair is UNRESOLVED.
        return ((rows_a[0]["bucket"], len(flags_a), rows_b[0]["bucket"], len(flags_b)),
                ("AGREE", 0, "UNRESOLVED", 0))
    check("c05 GATE alias map: hyphenated spelling folds to the same design", c05, gate=True)

    # c06 GATE — the catalogue is what makes a drift claim measurable
    def c06():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "carrentals", "appA": "carrental"})
        _, _, with_cat, _ = run(r)
        rows2, b2, without, _ = run(r, use_catalog=False)
        shutil.rmtree(r)
        return ((len(with_cat), len(without), rows2[0]["bucket"]), (1, 0, "UNRESOLVED"))
    check("c06 GATE catalogue off → real drift becomes UNRESOLVED (not a phantom pass)", c06,
          gate=True)

    # c07 — a renamed app: marker target is gone, one app recreates the design
    def c07():
        r = tmp()
        tree(r, {"alpha": {"marker": "oldname"}}, apps=["newname"],
             specs={"alpha": "carrentals", "newname": "carrentals"})
        _, buckets, flags, _ = run(r)
        shutil.rmtree(r)
        f = flags[0] if flags else {}
        return ((f.get("bucket"), f.get("suggestion")), ("TARGET-NO-APP", "newname"))
    check("c07 deleted app (rename) → TARGET-NO-APP + rename fix", c07)

    # c08 GATE — two apps recreate the design → never guess
    def c08():
        r = tmp()
        tree(r, {"alpha": {"marker": "gone"}}, apps=["appone", "apptwo"],
             specs={"alpha": "carrentals", "appone": "carrentals",
                    "apptwo": "carrentals"})
        _, _, flags, _ = run(r)
        shutil.rmtree(r)
        return ((flags[0].get("suggestion"), len(flags[0].get("candidates"))), ("", 2))
    check("c08 GATE ambiguous target → no FIX suggestion", c08, gate=True)

    # c09 — no marker = not this axis' business (1,823 dirs)
    def c09():
        r = tmp()
        tree(r, {"alpha": {}}, apps=["alpha"], specs={"alpha": "designone"})
        rows, _, flags, _ = run(r)
        shutil.rmtree(r)
        return ((len(rows), len(flags)), (0, 0))
    check("c09 marker-less dirs are not counted", c09)

    # c10 — markers live in 12 file names, not just tasks.md
    def c10():
        r = tmp()
        tree(r, {"alpha": {"files": {"notes.md": "# Notes\n"}}}, apps=["appA"],
             specs={"alpha": "designone", "appA": "designone"})
        p = os.path.join(r, "docs", "templates", "alpha", "notes.md")
        open(p, "w").write("<!-- prep-status: shipped-as=appA -->\n# Notes\n")
        rows, _, flags, _ = run(r)
        shutil.rmtree(r)
        return ((len(rows), rows[0]["target"] if rows else None), (1, "appa"))
    check("c10 marker read from notes.md (12 house file names)", c10)

    # c11 — two different targets in ONE dir is a flag, not a silent pick
    def c11():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA", "appB"],
             specs={"alpha": "designone", "appA": "designone", "appB": "designtwo"})
        open(os.path.join(r, "docs", "templates", "alpha", "design-notes.md"), "w").write(
            "<!-- prep-status: shipped-as=appB -->\n# notes\n")
        _, buckets, flags, _ = run(r)
        shutil.rmtree(r)
        return ((flags[0]["bucket"] if flags else None), "CONF-MARKER")
    check("c11 conflicting markers in one dir → CONF-MARKER", c11)

    # c12 GATE — a sibling mention framed as DIFFERENT is not the prep's source
    def c12():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"], specs={"appA": "slim"})
        d = os.path.join(r, "openspec", "specs", "template-alpha")
        os.makedirs(d)
        open(os.path.join(d, "spec.md"), "w").write(
            "# Template: alpha\n\n## Purpose\n\n"
            "Note that \"Slim2\" is a DIFFERENT ColorLib template, `wp/template/slim2/`, not this one.\n"
            "The design this prep measures is `wp/template/slim/`.\n")
        rows, _, flags, _ = run(r)
        slug = rows[0]["brief"]
        V.NEG_FRAME_ON = False                    # mutation: framing ignored
        try:
            rows2, _, _, _ = run(r)
        finally:
            V.NEG_FRAME_ON = True
            shutil.rmtree(r)
        return ((slug, len(flags), rows2[0]["brief"]), ("slim", 0, "slim2"))
    check("c12 GATE negative framing keeps a sibling mention from becoming the source", c12,
          gate=True)

    # c13 — the explicit `**Source slug:**` label outranks prose mentions
    def c13():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "designone", "appA": "designone"})
        d = os.path.join(r, "openspec", "specs", "template-alpha")
        open(os.path.join(d, "spec.md"), "w").write(
            "# Template: alpha\n\nSee also `wp/template/otherdesign/`.\n\n- **Source slug:** `designone`\n")
        rows, _, _, _ = run(r)
        shutil.rmtree(r)
        return (rows[0]["brief"], "designone")
    check("c13 Source-slug label outranks an earlier wp/template mention", c13)

    # c14 — family demo root is skipped: /theme/bft/bootstrap-footer-04
    def c14():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "bootstrap-footer-04", "appA": "bootstrap-footer-04"})
        rows, _, flags, _ = run(r)
        shutil.rmtree(r)
        return ((rows[0]["bucket"], len(flags)), ("AGREE", 0))
    check("c14 family demo root /theme/bft/<slug>/ resolves to <slug>", c14)

    # c15 — form-family spelling: login-form-v3 vs the app's Login_v3
    def c15():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "login-form-v3", "appA": "Login_v3"})
        rows, _, flags, _ = run(r)
        shutil.rmtree(r)
        return ((rows[0]["bucket"], len(flags)), ("AGREE", 0))
    check("c15 login-form-v3 ≡ Login_v3 (form-family fold)", c15)

    # c16 — a docs citation of the sibling is a NOTE, never a flag flip
    def c16():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA", "files": {
            "tasks.md": "# T\n\n- **Source URL:** https://colorlib.com/wp/template/designtwo/\n"}}},
             apps=["appA"], specs={"alpha": "designone", "appA": "designone"})
        rows, buckets, flags, notes = run(r)
        shutil.rmtree(r)
        return ((rows[0]["bucket"], len(flags),
                 [n["bucket"] for n in notes if n["dir"] == "alpha"]),
                ("AGREE", 0, ["DOCS-CITE-DRIFT"]))
    check("c16 docs citing the sibling stays a note (2026-10-24 lesson)", c16)

    # c17 — buckets partition the corpus exactly once
    def c17():
        r = tmp()
        tree(r, {"a1": {"marker": "appA"}, "a2": {"marker": "appA"}, "a3": {}},
             apps=["appA"], specs={"a1": "designone", "a2": "designone",
                                   "a3": "designone", "appA": "designone"})
        rows, buckets, flags, notes = run(r)
        shutil.rmtree(r)
        return sum(buckets.values()), len(rows)
    check("c17 buckets partition every marker dir once", c17)

    # c18 — non-catalogue label on one side is UNRESOLVED, not a drift claim
    def c18():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "bootstrap-footer-04", "appA": "bft"})
        rows, _, flags, _ = run(r)
        shutil.rmtree(r)
        return ((rows[0]["bucket"], len(flags)), ("UNRESOLVED", 0))
    check("c18 family label `bft` on the app side → UNRESOLVED note", c18)

    # c19 — exit codes
    def c19():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "designone", "appA": "designone"})
        clean = V.main(["--prep-root", r, "--catalog", os.path.join(r, "cat.json"),
                        "--aliases", os.path.join(r, "al.json")])
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA", "appB"],
             specs={"alpha": "carrentals", "appA": "carrental"})
        dirty = V.main(["--prep-root", r, "--catalog", os.path.join(r, "cat.json"),
                        "--aliases", os.path.join(r, "al.json")])
        bad = V.main(["--prep-root", os.path.join(r, "nope")])
        shutil.rmtree(r)
        return ((clean, dirty, bad), (0, 1, 2))
    check("c19 exit codes 0/1/2", c19)

    # c20 — self-test of the identity primitives
    def c20():
        ident = V.Ident(CATALOG["demos"], ALIASES["aliases"])
        return ((ident.key("login-form-v3"), ident.key("Login_v3"),
                 ident.key("bootstrap-footer-04"), ident.key("tasty-recipes"),
                 ident.key("car-rental"), ident.key("carrentals")),
                ("loginv3", "loginv3", "bootstrapfooter04", "tastyrecipes",
                 "carrental", "carrentals"))
    check("c20 identity primitives (family, catalogue, alias, plural)", c20)

    # c21 — the shipped-banner fixer inserts once and leaves the body intact
    def c21():
        r = tmp()
        tree(r, {"alpha": {}}, apps=["alpha"], specs={"alpha": "designone"})
        p = os.path.join(r, "docs", "templates", "alpha", "tasks.md")
        body = "# Alpha — tasks\n\nIntro line.\n\n- [ ] step one\n- [ ] step two\n"
        open(p, "w").write(body)
        n1 = len(F.candidates(r))
        txt1 = F.insert(body, "alpha")
        txt2 = F.insert(txt1, "alpha")
        open(p, "w").write(txt1)
        n2 = len(F.candidates(r))                 # already bannered → not a candidate
        whole = open(p).read()
        shutil.rmtree(r)
        return ((n1, n2, whole.count("**SHIPPED**"),
                 "- [ ] step one" in whole, txt2 == txt1),
                (1, 0, 1, True, True))
    check("c21 banner fixer: inserts once, body untouched, idempotent", c21)

    # c22 GATE — never banner a prep whose app has not shipped
    def c22():
        r = tmp()
        tree(r, {"alpha": {}}, apps=[], specs={"alpha": "designone"})
        open(os.path.join(r, "docs", "templates", "alpha", "tasks.md"), "w").write(
            "# Alpha\n\n- [ ] step\n")
        pend = len(F.candidates(r))
        os.makedirs(os.path.join(r, "apps", "alpha"), exist_ok=True)
        shipped = len(F.candidates(r))
        shutil.rmtree(r)
        return ((pend, shipped), (0, 1))
    check("c22 GATE banner only for shipped apps (pending prep untouched)", c22, gate=True)

    # c23 — an alias prep is already explained by its marker: not a candidate
    def c23():
        r = tmp()
        tree(r, {"alpha": {"marker": "appA"}}, apps=["appA"],
             specs={"alpha": "designone", "appA": "designone"})
        n = len(F.candidates(r))
        shutil.rmtree(r)
        return n, 0
    check("c23 alias prep (marker present) is not bannered again", c23)

    width = max(len(r[0]) for r in results)
    for label, ok, gate, why in results:
        print(f"  {'PASS' if ok else 'FAIL'} {'GATE ' if gate else '     '}"
              f"{label:<{width}} {why}")
    passed = sum(1 for r in results if r[1])
    gates = sum(1 for r in results if r[2])
    print(f"{passed}/{len(results)} controls pass · {gates} GATE")
    return 0 if passed == len(results) else 1


if __name__ == "__main__":
    sys.exit(main())
