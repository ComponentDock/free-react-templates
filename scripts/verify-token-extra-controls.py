#!/usr/bin/env python3
"""verify-token-extra-controls.py — controls for the TOKEN-EXTRA triage axis.

Every control is either

  CHECK  a plain assertion about the axis' behaviour on a fixture, or
  GATE   a MUTATION control: the guard is neutralised, and the control only
         passes if the payload FIRES without it (proving the guard, not the
         fixture, is what protects the axis)

Run: python3 verify-token-extra-controls.py [--rows /tmp/token-extra.json]
Exit 0 = all controls pass.
"""
from __future__ import annotations

import argparse
import importlib.util
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
PASS, FAIL = [], []


def _load(fn: str, name: str):
    spec = importlib.util.spec_from_file_location(name, os.path.join(HERE, fn))
    mod = importlib.util.module_from_spec(spec)
    sys.modules[name] = mod
    spec.loader.exec_module(mod)
    return mod


VTE = _load("verify-token-extra.py", "vte")
FX = _load("fix-token-extra.py", "fx")

KIT = """.genric-btn.primary{color:#fff;background:#f8b600;border:1px solid transparent}
.genric-btn.primary:hover{color:#f8b600;background:#fff}"""
SOCIAL = """footer ul li:nth-child(3) a{color:#d8545d;border-color:#d8545d}
footer ul li:nth-child(4) a{color:#007ab9;border-color:#007ab9}
footer ul li:nth-child(5) a{color:#3b5998;border-color:#3b5998}"""
PROGRESS = ".skillst5 .count-bar.color-1 .count{background-color:#239191}"
ACCORDION = ".custom-accordion .cl-item.active .cl-btn-link{background:#f16947}"
PSEUDO = ".unordered-list li:before{background:#f16947}"
ROOTVAR = ":root{--brand:#04d2c8}"


def check(name, fn):
    try:
        fn()
        PASS.append(name)
        print(f"PASS  CHECK  {name}")
    except AssertionError as exc:
        FAIL.append(name)
        print(f"FAIL  CHECK  {name}: {exc}")


def gate(name, neutralise, restore, fn):
    """Disable the guard, require the payload to fire, then restore."""
    neutralise()
    try:
        fn()                                  # payload must be visible now
    except AssertionError as exc:
        FAIL.append(name)
        print(f"FAIL  GATE   {name}: payload did not fire without the guard — {exc}")
        return
    finally:
        restore()
    try:
        VTE.social_palette(KIT)               # guard back in place, must be inert
        PASS.append(name)
        print(f"PASS  GATE   {name}")
    except AssertionError as exc:
        FAIL.append(name)
        print(f"FAIL  GATE   {name}: guard not restored — {exc}")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--rows", default="/tmp/token-extra.json")
    args = ap.parse_args()

    # ---------------------------------------------------------------- socials
    check("social_palette drops a 3-network footer family",
          lambda: (_ for _ in ()).throw(AssertionError("no exclude"))
          if "#007ab9" not in VTE.social_palette(SOCIAL) else None)

    def neutralise_social():
        # both paths of the guard: the selector regex AND the >=3-colour family rule
        VTE._saved_sel = VTE.SOCIAL_SEL_RX
        VTE._saved_min = VTE.SOCIAL_MIN_COLOURS
        VTE.SOCIAL_SEL_RX = re.compile(r"(?!)")
        VTE.SOCIAL_MIN_COLOURS = 99

    def restore_social():
        VTE.SOCIAL_SEL_RX = VTE._saved_sel
        VTE.SOCIAL_MIN_COLOURS = VTE._saved_min

    def payload_social():
        got = VTE.social_palette(SOCIAL)
        assert got == set(), f"still excluded even without the guard: {got}"

    gate("social selector guard is what excludes the network palette",
         neutralise_social, restore_social, payload_social)

    # ---------------------------------------------------------------- vendors
    check("a plugin bundle under assets/css/plugins/ is vendor",
          lambda: (_ for _ in ()).throw(AssertionError("gijgo not vendor"))
          if not VTE.is_vendor(
              "https://preview.colorlib.com/theme/cardoor/assets/css/plugins/gijgo.css")
          else None)
    check("the bootstrap-sidebar family keeps its own bootstrap.css as the sheet",
          lambda: (_ for _ in ()).throw(AssertionError("over-filtered"))
          if VTE.is_vendor(
              "https://preview.colorlib.com/etc/bootstrap-sidebar/css/bootstrap.css")
          else None)

    def neutralise_path():
        VTE._saved_path = VTE.VENDOR_PATH_RX
        VTE.VENDOR_PATH_RX = re.compile(r"(?!)")

    def restore_path():
        VTE.VENDOR_PATH_RX = VTE._saved_path

    gate("the plugin-path guard is what filters gijgo.css",
         neutralise_path, restore_path,
         lambda: (_ for _ in ()).throw(AssertionError("path guard inert"))
         if VTE.is_vendor(
             "https://preview.colorlib.com/theme/cardoor/assets/css/plugins/gijgo.css")
         else None)

    # ---------------------------------------------------------------- roles
    def role(css_sel, prop, val):
        return VTE.classify_site({"selector": css_sel, "prop": prop, "value": val})

    check("a kit CTA background is a surface",
          lambda: (_ for _ in ()).throw(AssertionError(role(".genric-btn.primary",
                                                           "background", "#f8b600")))
          if role(".genric-btn.primary", "background", "#f8b600") != "surface" else None)
    check("a custom property is a named token",
          lambda: (_ for _ in ()).throw(AssertionError("not var"))
          if role(":root", "--brand", "#04d2c8") != "var" else None)
    check("a progress-bar fill is chrome, not a surface",
          lambda: (_ for _ in ()).throw(AssertionError("progress bar read as surface"))
          if role(".count-bar .count", "background-color", "#239191") != "decor" else None)

    def neutralise_active():
        VTE._saved_active = VTE.ACTIVE_RX
        VTE.ACTIVE_RX = re.compile(r"(?!)")

    def restore_active():
        VTE.ACTIVE_RX = VTE._saved_active

    gate("the `.active` guard is what keeps an accordion state out of the surface bucket",
         neutralise_active, restore_active,
         lambda: (_ for _ in ()).throw(AssertionError("still state"))
         if role(".custom-accordion .cl-item.active .cl-btn-link", "background",
                 "#f16947") == "state" else None)

    def neutralise_pseudo():
        VTE._saved_pseudo = VTE.PSEUDO_RX
        VTE.PSEUDO_RX = re.compile(r"(?!)")

    def restore_pseudo():
        VTE.PSEUDO_RX = VTE._saved_pseudo

    gate("the pseudo-element guard is what keeps a marker colour out of the surface bucket",
         neutralise_pseudo, restore_pseudo,
         lambda: (_ for _ in ()).throw(AssertionError("still pseudo"))
         if role(".unordered-list li:before", "background", "#f16947") == "pseudo" else None)

    def neutralise_decor():
        VTE._saved_decor = VTE.DECOR_SEL_RX
        VTE.DECOR_SEL_RX = re.compile(r"(?!)")

    def restore_decor():
        VTE.DECOR_SEL_RX = VTE._saved_decor

    gate("the chrome guard is what keeps a progress bar out of the surface bucket",
         neutralise_decor, restore_decor,
         lambda: (_ for _ in ()).throw(AssertionError("still decor"))
         if role(".count-bar .count", "background-color", "#239191") == "decor" else None)

    # ---------------------------------------------------------------- cascade
    sheets = [
        {"url": "https://x/kit.css", "css": KIT, "bytes": 10, "sha": "a" * 12,
         "vendor": False},
        {"url": "https://x/theme.css",
         "css": ".genric-btn.primary{background:#b01afe}", "bytes": 10,
         "sha": "b" * 12, "vendor": False},
    ]
    check("cascade_winner reads the LAST sheet, not the kit default",
          lambda: (_ for _ in ()).throw(AssertionError("wrong winner"))
          if (VTE.cascade_winner(sheets, ".genric-btn.primary", "background") or
              {}).get("hex") != "#b01afe" else None)
    check("cascade_winner keeps the same colour when nothing overrides",
          lambda: (_ for _ in ()).throw(AssertionError("fabricated winner"))
          if VTE.cascade_winner(sheets[:1], ".genric-btn.primary", "background")["hex"]
          != "#f8b600" else None)

    # ---------------------------------------------------------------- data guards
    check("a framework default is never fixable",
          lambda: (_ for _ in ()).throw(AssertionError("#007bff not framework"))
          if "#007bff" not in VTE.FRAMEWORK_HEX else None)
    check("a design accent is not mistaken for a framework default",
          lambda: (_ for _ in ()).throw(AssertionError("#f8b600 wrongly framework"))
          if "#f8b600" in VTE.FRAMEWORK_HEX else None)

    # ---------------------------------------------------------------- fixer
    ROW = {"name": "fixture", "hex": "#f8b600", "count": 19, "url": "https://x/",
           "sheet": "https://x/style.css", "sheet_bytes": 80764, "sheet_sha": "c" * 12,
           "site": {"selector": ".genric-btn.primary", "prop": "background"}}
    SPEC = ("# Template: Fixture\n\n## Purpose\n\nRecreates something.\n\n"
            "## Design tokens\n\n| Token | Value | Evidence |\n| --- | --- | --- |\n"
            "| Brand | `#f42f2c` | hero |\n\n## Requirements\n")

    def fixer_writes_a_surface_row_once():
        once, how = FX.apply_edit(SPEC, ROW)
        assert once and "Surface (measured)" in once, how
        twice, how2 = FX.apply_edit(once, ROW)
        assert twice is None and how2 in ("already-stated", "already-row"), how2

    def fixer_never_writes_a_brand_row():
        once, _ = FX.apply_edit(SPEC, ROW)
        new_row = [ln for ln in once.splitlines() if "f8b600" in ln][0]
        assert "Brand" not in new_row, new_row
        assert new_row.count("|") == 4, new_row          # same 3-column shape
        for d in (ROW, {**ROW, "site": {"selector": ".x", "prop": "color"}},
                  {**ROW, "site": {"selector": ":root", "prop": "--brand"}}):
            assert not FX.label_for(d).lower().startswith("brand")

    check("the fixer writes the row once and is a no-op on the second run",
          fixer_writes_a_surface_row_once)
    check("the fixer never writes a brand-role row", fixer_never_writes_a_brand_row)

    # ---------------------------------------------------------------- invariants
    def partition():
        d = json.load(open(args.rows))
        b, rows = d["buckets"], d["rows"]
        assert sum(b.values()) == len(rows), f"{sum(b.values())} != {len(rows)}"
        assert set(b) <= {"NOTATION-MISS", "SHEET-DRIFT", "FRAMEWORK", "SOCIAL",
                          "VENDOR-LED", "DOC-ONLY", "STATE-ONLY", "DECOR-ONLY",
                          "UNPARSED", "WEAK", "SKELETON", "EFFECTIVE-STATED",
                          "MISSING-BRAND"}, sorted(b)
        names = [r["name"] for r in rows]
        assert len(names) == len(set(names)), "a spec appears twice"

    check("buckets partition the subject set exactly once", partition)

    print(f"\n=== controls: {len(PASS)}/{len(PASS) + len(FAIL)} pass "
          f"({len([p for p in PASS]) } total, {len(FAIL)} failed)")
    return 0 if not FAIL else 1


if __name__ == "__main__":
    sys.exit(main())
