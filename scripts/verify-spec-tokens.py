#!/usr/bin/env python3
"""Read-only check: does every SHIPPED template spec carry measured design tokens?

PREP-stream axis (2026-10-23). docs/replication.md mandates that a spec records
the reference's design tokens (brand colours, font family, button/section
treatments). A spec can pass `scripts/verify-spec-claims.py` (its URLs are live)
and still carry no tokens at all — that is the gap this script reads.

Definition used here — a spec "carries tokens" when it has a level-2/3 heading
matching  design token | design reference | visual design  (case-insensitive)
AND at least one hex literal somewhere in the file. Both halves matter: the
heading alone can hold prose ("dark mode palette"), the hex alone can sit in a
scenario. Hex literals are accepted in CSS shorthand AND long form (3-8 digits):
`#fff` is a measurement, so a footer spec whose whole palette is `#000`/`#777`/
`#fff` is NOT a finding (2026-10-23: groundwork was flagged by the old 6-digit-only
rule).

Scope:
  shipped (default)  specs whose app folder exists in apps/  -> what implementers
                     re-read during fidelity passes
  all                every openspec/specs/template-*/spec.md (includes the frozen
                     orphan preps, whose gaps are recorded in docs/orphans.md)

Usage:
  python3 scripts/verify-spec-tokens.py            # human summary + list
  python3 scripts/verify-spec-tokens.py --json      # machine output
  python3 scripts/verify-spec-tokens.py --scope all
Exit code: 0 = no findings, 1 = findings, 2 = bad usage/missing tree.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, "openspec", "specs")
APPS = os.path.join(ROOT, "apps")
TEMPLATES = os.path.join(ROOT, "TEMPLATES.md")

HEADING_RE = re.compile(r"^#{2,3} .*(design token|design reference|visual design)", re.M | re.I)
HEX_RE = re.compile(r"#[0-9a-fA-F]{3,8}\b")
SPEC_DIR_RE = re.compile(r"^template-(.+)$")


def app_order() -> list[str]:
    """App names in TEMPLATES.md order (deduped, both row layouts).

    Rows look like `- [x] **Title** — [colorlib](...) · [app](https://app.free...`
    or `- [x] **Title** · [app](https://app.free...) — [colorlib](...)`.
    """
    order: list[str] = []
    if not os.path.exists(TEMPLATES):
        return order
    with open(TEMPLATES, encoding="utf-8") as fh:
        for line in fh:
            if not re.match(r"^\s*- \[", line):
                continue
            hit = re.search(r"\(https://([a-z0-9-]+)\.free\.componentdock\.com", line)
            if hit and hit.group(1) not in order:
                order.append(hit.group(1))
    return order


def collect(scope: str) -> tuple[list[dict], int]:
    shipped = set(os.listdir(APPS)) if os.path.isdir(APPS) else set()
    order = app_order()
    order_index = {name: i for i, name in enumerate(order)}

    paths: list[tuple[str, str]] = []
    for entry in sorted(os.listdir(SPECS)):
        hit = SPEC_DIR_RE.match(entry)
        if not hit:
            continue
        name = hit.group(1)
        spec = os.path.join(SPECS, entry, "spec.md")
        if not os.path.isfile(spec):
            continue
        if scope == "shipped" and name not in shipped:
            continue
        paths.append((name, spec))

    # shipped scope: TEMPLATES.md order first (that is the pipeline's own order),
    # stable for anything unlisted after it.
    paths.sort(key=lambda pair: (order_index.get(pair[0], len(order)), pair[0]))

    findings: list[dict] = []
    for name, spec in paths:
        with open(spec, encoding="utf-8") as fh:
            text = fh.read()
        has_heading = bool(HEADING_RE.search(text))
        hexes = HEX_RE.findall(text)
        if has_heading and hexes:
            continue
        missing = []
        if not has_heading:
            missing.append("token_heading")
        if not hexes:
            missing.append("hex_values")
        findings.append(
            {
                "name": name,
                "app": name in shipped,
                "spec": os.path.relpath(spec, ROOT),
                "missing": missing,
                "hex_count": len(hexes),
            }
        )
    return findings, len(paths)


def main(argv: list[str]) -> int:
    ap = argparse.ArgumentParser(description="Verify specs carry measured design tokens.")
    ap.add_argument("--scope", choices=("shipped", "all"), default="shipped")
    ap.add_argument("--json", action="store_true", dest="as_json")
    args = ap.parse_args(argv)

    if not os.path.isdir(SPECS):
        print(f"error: {SPECS} not found (run from the repo root)", file=sys.stderr)
        return 2

    findings, total = collect(args.scope)
    shipped_missing = sum(1 for f in findings if f["app"])

    payload = {
        "scope": args.scope,
        "specs_checked": total,
        "findings": len(findings),
        "findings_in_shipped_apps": shipped_missing,
        "items": findings,
    }
    if args.as_json:
        print(json.dumps(payload, indent=2))
    else:
        print(f"scope: {args.scope}")
        print(f"specs checked: {total}")
        print(f"specs without measured tokens: {len(findings)} ({shipped_missing} shipped apps)")
        for f in findings[:40]:
            print(f"  {f['name']:24} missing={','.join(f['missing'])}")
        if len(findings) > 40:
            print(f"  … {len(findings) - 40} more (use --json for the full list)")
    return 1 if findings else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
