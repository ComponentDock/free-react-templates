#!/usr/bin/env python3
"""fix-role-rule-tokens.py — record the ROLE-RULE verdict inside the losing prep.

Reads the JSON report written by `verify-role-rule-tokens.py --adjudicate` and,
for every `ROLE-WINNER`, appends an idempotent block to the LOSING prep's
`## Design Tokens` section:

    <!-- role-rule-tokens: <slug>/<role> -->
    **Role rule (measured 2026-10-25):** …
    <!-- /role-rule-tokens -->

Rules:
  * the token TABLE is never rewritten — the prep is a historical statement, and
    "this value is not declared by a rule that owns the role" does not license
    editing a table another stream may already have read (`-23x` / `-25d` rule);
  * a note verdict (`CASCADE-WINNER`, `ROLE-BOTH`, `ROLE-NONE`, `DRIFT`,
    `PARTIAL-COVERAGE`, `MEDIA-ONLY`, `NO-RULE`, `DEAD-THIN`) writes NOTHING —
    only the single-owner class is a defect;
  * a spec that already carries `slug-token-agreement: <slug>/<role>` (the
    `-25d` axis) is skipped: the conflict is already documented there;
  * running twice is a no-op (the block is the idempotency key).

  python3 scripts/fix-role-rule-tokens.py --report /tmp/rrt.json --dry-run
  python3 scripts/fix-role-rule-tokens.py --report /tmp/rrt.json --apply
  python3 scripts/fix-role-rule-tokens.py --report /tmp/rrt.json --apply --only author,autoroad
"""
from __future__ import annotations

import argparse
import collections
import glob
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT_DEFAULT = os.path.dirname(HERE)
MARK = "role-rule-tokens"
BLOCK_RX = re.compile(r"<!--\s*role-rule-tokens:\s*([^/\s]+)/([A-Za-z]+)\s*-->")
PRIOR_RX = re.compile(r"<!--\s*slug-token-agreement:\s*([^/\s]+)/([A-Za-z]+)\s*-->")
ROLE_WORDS = {
    "body": "body text colour",
    "ink": "heading ink",
    "footer": "footer band",
    "brand": "primary CTA fill",
    "typeface": "body typeface",
}


def norm_value(v, role="colour"):
    """A colour is one string; a TYPEFACE claim is a family SET (order-free).

    The census hands a typeface candidate as `['poppins']` while the verdict
    label is the joined string `poppins`, so both sides are canonicalised to a
    lowercased family tuple — otherwise every agreeing prep looks like a loser
    (`Poppins -> poppins`, the first draft's 25 false writes).
    """
    if role == "typeface":
        if isinstance(v, (list, tuple, set)):
            return tuple(sorted(str(x).strip().lower() for x in v))
        return tuple(sorted(x.strip().lower() for x in str(v).split("/") if x.strip()))
    return str(v).strip().lower()


def fmt_value(v) -> str:
    if isinstance(v, (list, tuple, set)):
        return ", ".join(x.title() for x in v if x)
    return str(v)


def spec_index(root: str) -> dict:
    """-> {(slug, role): [spec paths that claim the role]} from the census claim map."""
    sys.path.insert(0, os.path.join(HERE))
    import importlib.util
    spec = importlib.util.spec_from_file_location(
        "sta_axis", os.path.join(HERE, "verify-slug-token-agreement.py"))
    base = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(base)
    out: dict[tuple, list] = collections.defaultdict(list)
    for path in sorted(glob.glob(os.path.join(root, "openspec/specs/template-*/spec.md"))):
        text = open(path, encoding="utf-8", errors="replace").read()
        slug = base.subject_slug(text)
        name = path.split("/")[-2].replace("template-", "")
        roles, fams, _notes = base.claims(text, True, None)
        for role, rows in roles.items():
            if len(rows) == 1:
                out[(slug, role)].append((name, rows[0][0], path))
        if fams:
            out[(slug, "typeface")].append((name, "/".join(sorted(fams)), path))
    return out


def insert_block(path: str, slug: str, role: str, loser: str, winner: str,
                 detail: str, sibling: str, matched=None) -> str:
    """Append the measured block at the end of `## Design Tokens`. -> new text."""
    text = open(path, encoding="utf-8", errors="replace").read()
    stated = ", ".join(matched) if matched else winner
    block = "\n".join([
        "<!-- %s: %s/%s -->" % (MARK, slug, role),
        "**Role rule (measured 2026-10-25):** %s — the design declares `%s`; this "
        "prep states `%s`, which no rule that owns the %s declares. The sibling "
        "prep `%s` states the measured value."
        % (detail.rstrip("."), stated, loser, ROLE_WORDS.get(role, role), sibling),
        "<!-- /%s -->" % MARK,
        "",
    ])
    m = re.search(r"^##\s+[^\n]*[Tt]okens[^\n]*$", text, re.M)
    if not m:
        return text.rstrip("\n") + "\n\n" + block
    nxt = re.search(r"^##\s", text[m.end():], re.M)
    cut = m.end() + nxt.start() if nxt else len(text)
    head, tail = text[:cut].rstrip("\n"), text[cut:]
    return head + "\n\n" + block + ("\n" + tail if tail else "")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("root", nargs="?", default=ROOT_DEFAULT)
    ap.add_argument("--report", required=True)
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only", default=None)
    a = ap.parse_args()
    root = os.path.abspath(a.root)
    rep = json.load(open(a.report))
    rows = rep.get("adjudicated") or []
    only = set(x.strip() for x in a.only.split(",")) if a.only else None

    index = spec_index(root)
    writes = skips = nops = 0
    for row in rows:
        if row["verdict"] != "ROLE-WINNER":
            continue
        if only and row["slug"] not in only:
            continue
        slug, role = row["slug"], row["role"]
        winners = list(row.get("winners") or {})
        if not winners:
            continue
        winner = winners[0]
        claims = {c[1]: c[0] for c in row["claims"]}       # prep name -> value
        win_norm = norm_value(winner, role)
        losers = [(n, v) for n, v in claims.items() if norm_value(v, role) != win_norm]
        if not losers:
            continue
        siblings = [n for n, v in claims.items() if norm_value(v, role) == win_norm]
        sib = siblings[0] if siblings else "—"
        for name, value in losers:
            hit = index.get((slug, role), [])
            paths = [p for n, _v, p in hit if n == name]
            if not paths:
                continue
            path = paths[0]
            text = open(path, encoding="utf-8", errors="replace").read()
            if (slug, role) in BLOCK_RX.findall(text):
                nops += 1
                continue
            if (slug, role) in PRIOR_RX.findall(text):
                skips += 1
                print("  SKIP %-22s %-9s (slug-token-agreement block present)" % (name, role))
                continue
            new = insert_block(path, slug, role, fmt_value(value), fmt_value(winner),
                               row.get("detail", ""), sib,
                               matched=[m.title() if role == "typeface" else m
                                        for m in row.get("matched") or []])
            if new == text:
                nops += 1
                continue
            writes += 1
            print("  %s %-22s %-9s %s -> %s  (%s)"
                  % ("WRITE" if a.apply else "DRY  ", name, role,
                     fmt_value(value), fmt_value(winner), row.get("url", "")[:48]))
            if a.apply:
                open(path, "w", encoding="utf-8").write(new)
    print("writes %d · already-recorded %d · already-documented-by-sibling-axis %d%s"
          % (writes, nops, skips, "" if a.apply else "  (dry run)"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
