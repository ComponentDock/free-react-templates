#!/usr/bin/env python3
"""Control harness for scripts/verify-spec-tokens.py (mutation-based).

Each control builds a throw-away mini-repo in a temp dir, copies the verifier
next to it, and asserts BOTH the exit code and the reported finding class. A
control that passes for the wrong reason (e.g. the script crashing and exiting
non-zero) is caught by asserting the exact finding list, not just the status.

Run: python3 scripts/verify-spec-tokens-controls.py
Exit 0 = every control behaved as specified.
"""

from __future__ import annotations

import json
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
VERIFIER = os.path.join(HERE, "verify-spec-tokens.py")

CLEAN_SPEC = """# Template: Alpha (Demo)

## Purpose

Recreation of a demo design.

## Design tokens

| Token | Value |
| --- | --- |
| Brand | `#112233` |

## Requirements

### Requirement: Hero
"""

NO_HEADING_SPEC = """# Template: Alpha (Demo)

## Purpose

Uses a dark palette and a bold sans face.

## Requirements

### Requirement: Hero
"""

NO_HEX_SPEC = """# Template: Alpha (Demo)

## Purpose

Recreation of a demo design.

## Design tokens

- Dark mode palette (`bg-slate-950`), Inter.

## Requirements

### Requirement: Hero
"""


def build_tree(root: str, spec_text: str) -> None:
    os.makedirs(os.path.join(root, "scripts"), exist_ok=True)
    os.makedirs(os.path.join(root, "apps", "alpha"), exist_ok=True)
    spec_dir = os.path.join(root, "openspec", "specs", "template-alpha")
    os.makedirs(spec_dir, exist_ok=True)
    with open(os.path.join(spec_dir, "spec.md"), "w", encoding="utf-8") as fh:
        fh.write(spec_text)
    with open(os.path.join(root, "TEMPLATES.md"), "w", encoding="utf-8") as fh:
        fh.write(
            "- [x] **Demo** — [colorlib](https://colorlib.com/wp/template/demo/) · "
            "[alpha](https://alpha.free.componentdock.com)\n"
        )
    shutil.copy2(VERIFIER, os.path.join(root, "scripts", "verify-spec-tokens.py"))


def run(root: str, *args: str) -> tuple[int, str]:
    proc = subprocess.run(
        [sys.executable, os.path.join(root, "scripts", "verify-spec-tokens.py"), *args],
        capture_output=True,
        text=True,
        cwd=root,
    )
    return proc.returncode, proc.stdout


def control(label: str, spec_text: str, want_exit: int, want_missing: list[str] | None) -> bool:
    with tempfile.TemporaryDirectory() as root:
        build_tree(root, spec_text)
        code, out = run(root, "--json")
        try:
            payload = json.loads(out)
        except json.JSONDecodeError:
            print(f"FAIL {label}: output is not JSON -> {out[:120]!r}")
            return False
        got = payload["items"][0]["missing"] if payload["items"] else None
        ok = code == want_exit and got == want_missing
        print(f"{'PASS' if ok else 'FAIL'} {label}: exit={code} (want {want_exit}) missing={got} (want {want_missing})")
        return ok


def main() -> int:
    if not os.path.exists(VERIFIER):
        print(f"error: {VERIFIER} not found", file=sys.stderr)
        return 2
    results = [
        control("clean spec passes", CLEAN_SPEC, 0, None),
        # prose-only spec: flagged for BOTH halves (no heading, and no hex anywhere)
        control("no token heading is flagged", NO_HEADING_SPEC, 1, ["token_heading", "hex_values"]),
        control("heading without hex is flagged", NO_HEX_SPEC, 1, ["hex_values"]),
    ]
    ok = all(results)
    print("GATE:", "pass" if ok else "fail")
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
