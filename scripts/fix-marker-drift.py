#!/usr/bin/env python3
"""fix-marker-drift.py — re-point `prep-status: shipped-as=` markers at the app
that actually recreates the prep's design.

Measured set only: it takes the flags `verify-marker-drift.py` reaches and only
acts on those that carry a UNIQUE suggested app (never guesses when two apps
recreate one design). Every rewrite is confined to the marker line and to the
banner block above the first blank line, where the app name appears in exactly
four house forms:

    <!-- prep-status: shipped-as=<old> -->      -> <new>
    `apps/<old>`                                -> `apps/<new>`
    https://<old>.free.componentdock.com        -> https://<new>...
    openspec/specs/template-<old>/spec.md       -> template-<new>

It also appends one RE-POINTED note naming the verifier so a reader can see why
the target moved. A second run is a byte-level no-op (asserted by the controls).

Usage
  python3 scripts/fix-marker-drift.py --dry-run          # plan only (default)
  python3 scripts/fix-marker-drift.py --apply
  python3 scripts/fix-marker-drift.py --apply --only cruiseo,tidecrest
Exit: 0 = applied/planned, 1 = nothing to do, 2 = bad usage.
"""
from __future__ import annotations

import argparse
import importlib.util
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
_spec = importlib.util.spec_from_file_location("vmd", os.path.join(HERE, "verify-marker-drift.py"))
V = importlib.util.module_from_spec(_spec)
_spec.loader.exec_module(V)


def rewrite(txt: str, old: str, new: str):
    """(new_text, changed) — marker + banner forms only."""
    before = txt
    txt = txt.replace(f"shipped-as={old}", f"shipped-as={new}")
    txt = txt.replace(f"apps/{old}`", f"apps/{new}`")
    txt = txt.replace(f"apps/{old})", f"apps/{new})")
    txt = txt.replace(f"apps/{old} ", f"apps/{new} ")
    txt = txt.replace(f"https://{old}.free.componentdock.com",
                      f"https://{new}.free.componentdock.com")
    txt = txt.replace(f"template-{old}/", f"template-{new}/")
    return txt, txt != before


def note_for(old: str, new: str) -> str:
    return (f"> **Re-pointed (verify-marker-drift.py, 2026-10-25).** The marker named\n"
            f"> `{old}`; the prep's own design ships as `apps/{new}`, so the target\n"
            f"> and banner were corrected.\n")


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Re-point drifted alias markers.")
    ap.add_argument("--prep-root", default=os.path.dirname(HERE))
    ap.add_argument("--aliases", default=V.DEFAULT_ALIASES)
    ap.add_argument("--catalog", default=V.DEFAULT_CATALOG)
    ap.add_argument("--only", default="")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args(argv)
    root = os.path.abspath(a.prep_root)
    apply = a.apply and not a.dry_run
    only = {s.strip() for s in a.only.split(",") if s.strip()}

    cat = V.load_json(a.catalog)
    al = V.load_json(a.aliases)
    ident = V.Ident(cat.get("demos", {}), al.get("aliases", {}))
    _rows, _buckets, flags, _notes, _claims = V.classify(root, ident)

    todo = [f for f in flags if f.get("suggestion") and (not only or f["dir"] in only)]
    if not todo:
        print("nothing to fix (no flag carries a unique target)")
        return 1

    for f in todo:
        old, new = f["target"], f["suggestion"]
        print(f"{'FIX' if apply else 'PLAN'} {f['dir']:12} {old} -> {new}  "
              f"({f['bucket']}, design {f['brief']})")
        for fn in sum(f["files"].values(), []) if isinstance(f["files"], dict) else f["files"]:
            path = os.path.join(root, "docs", "templates", f["dir"], fn)
            txt = open(path, encoding="utf-8", errors="replace").read()
            new_txt, changed = rewrite(txt, old, new)
            if not changed:
                print(f"     - {fn}: no house form to rewrite")
                continue
            if apply:
                if "Re-pointed (verify-marker-drift.py" not in new_txt:
                    lines = new_txt.splitlines(keepends=True)
                    last_banner = 0
                    for i, line in enumerate(lines):
                        if line.startswith(">"):
                            last_banner = i
                        elif line.strip() and not line.startswith("<!--"):
                            break
                    lines.insert(last_banner + 1, note_for(old, new))
                    new_txt = "".join(lines)
                open(path, "w", encoding="utf-8").write(new_txt)
            print(f"     {'wrote' if apply else 'would write'} {fn}")
    print(f"{len(todo)} prep(s) {'fixed' if apply else 'planned'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
