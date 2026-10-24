#!/usr/bin/env python3
"""fix-shipped-banners.py — mark an already-shipped prep's task list as history.

Convention (prep workflow step 6): `tasks.md` boxes are ticked only after the
implementation ships. Two house forms satisfy that today — tick everything
(660 dirs) or banner the list as prep history (1,417 alias preps). 608 preps
were in NEITHER form: their app exists on disk (shipped) while the task list
still shows checked-out boxes, so the file reads as outstanding work for a
template that already deployed. This inserts the banner — it does NOT claim any
individual box was done, which a blanket tick would.

Inserted directly after the H1, in the wording the alias preps already use:

    > **SHIPPED** — this prep's design shipped as `apps/<app>`
    > (<https://<app>.free.componentdock.com>). The unchecked items below are
    > prep history, not outstanding work.

Touches a dir only when: the app exists in `apps/`, a task file with at least
one open box exists, and neither `prep history` nor `SHIPPED-UNDER` nor a
`prep-status:` marker is present. A second run is a byte-level no-op.

Usage
  python3 scripts/fix-shipped-banners.py --dry-run        # plan (default)
  python3 scripts/fix-shipped-banners.py --apply
  python3 scripts/fix-shipped-banners.py --apply --only affiance,aegis
Exit: 0 = planned/applied, 1 = nothing to do, 2 = bad usage.
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

BANNER = ("\n> **SHIPPED** — this prep's design shipped as `apps/{app}`\n"
          "> (<https://{app}.free.componentdock.com>). The unchecked items below are\n"
          "> prep history, not outstanding work.\n")


def candidates(root: str):
    apps = V.shipped_apps(root)
    out = []
    for d in V.prep_dirs(root):
        dirpath = os.path.join(root, "docs", "templates", d)
        if V.read_markers(dirpath):
            continue                                  # alias prep: already explained
        tf = next((f for f in ("tasks.md", "todo.md", "TODO.md")
                   if os.path.exists(os.path.join(dirpath, f))), None)
        if tf is None or d not in apps:
            continue
        path = os.path.join(dirpath, tf)
        txt = open(path, encoding="utf-8", errors="replace").read()
        if "prep history" in txt or "SHIPPED-UNDER" in txt:
            continue
        open_boxes = len(re.findall(r"^\s*- \[ \]", txt, re.M))
        if not open_boxes:
            continue
        out.append((d, tf, path, open_boxes))
    return out


def insert(text: str, app: str):
    """Insert the banner after the first H1, one blank line either side.

    Idempotent by construction: an already-bannered file is returned unchanged,
    so a re-run cannot stack two banners.
    """
    if "**SHIPPED**" in text or "prep history" in text or "SHIPPED-UNDER" in text:
        return text
    lines = text.splitlines()
    idx = 0
    for i, line in enumerate(lines[:20]):
        if line.startswith("# "):
            idx = i + 1
            break
    while idx < len(lines) and not lines[idx].strip():      # collapse blank run
        idx += 1
    head = lines[:idx]
    while head and not head[-1].strip():          # no blank run before the banner
        head.pop()
    tail = lines[idx:]
    banner = BANNER.format(app=app).strip("\n").splitlines()
    return "\n".join(head + [""] + banner + [""] + tail) + "\n"


def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Banner shipped preps' task lists.")
    ap.add_argument("--prep-root", default=os.path.dirname(HERE))
    ap.add_argument("--only", default="")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    a = ap.parse_args(argv)
    root = os.path.abspath(a.prep_root)
    if not os.path.isdir(os.path.join(root, "docs", "templates")):
        print(f"not a prep tree: {root}", file=sys.stderr)
        return 2
    apply = a.apply and not a.dry_run
    only = {s.strip() for s in a.only.split(",") if s.strip()}

    cands = [c for c in candidates(root) if not only or c[0] in only]
    if not cands:
        print("nothing to do (no shipped prep with an unbannered task list)")
        return 1
    for d, tf, path, boxes in cands:
        txt = open(path, encoding="utf-8", errors="replace").read()
        new = insert(txt, d)
        if apply:
            open(path, "w", encoding="utf-8").write(new)
        print(f"{'FIX ' if apply else 'PLAN'} {d:22} {tf:12} open={boxes:3}")
    print(f"{len(cands)} prep(s) {'bannered' if apply else 'planned'}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
