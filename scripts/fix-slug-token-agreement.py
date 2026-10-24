#!/usr/bin/env python3
"""fix-slug-token-agreement.py — record a measured cross-prep token conflict.

Input is the adjudication report produced by

    python3 scripts/verify-slug-token-agreement.py --adjudicate --json /tmp/sta.json

For every `UNSUPPORTED` verdict (one candidate painted >= MIN_HITS times, every
other candidate painted ZERO times in the design's live assets — hex AND
`rgb()`), this fixer appends an idempotent block to the LOSING prep's
`## Design tokens` section:

    <!-- slug-token-agreement: <slug>/<role> -->
    > **Cross-prep token conflict, re-measured <date>.** …
    <!-- /slug-token-agreement -->

It never rewrites the table. Two reasons, both measured:

  * a shipped table is HISTORY — the prep as written — and `-23x`'s fixer set
    that precedent (mark the verdict, insert the measurement, never re-value);
  * the verdict is "this value is not painted by the design", which does not by
    itself prove the sibling's value is the right ROLE (on `colorlib-wizard-5`
    the surviving candidate is a 3-hit tint). The block states exactly what was
    counted and lets the implementer read the evidence.

Usage
  python3 scripts/fix-slug-token-agreement.py --report /tmp/sta.json            # dry run
  python3 scripts/fix-slug-token-agreement.py --report /tmp/sta.json --apply
  python3 scripts/fix-slug-token-agreement.py --report /tmp/sta.json --apply --only modal-04
  python3 scripts/fix-slug-token-agreement.py --report /tmp/sta.json --apply --md docs/…

Idempotent: a second run is a byte-level no-op (it compares the block it would
write with the one on disk). Refuses to write when the losing value is no longer
in the file (someone already edited the table — a human decision, not ours).
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MARK = "slug-token-agreement: %s/%s"


def value_text(kind, claim):
    """The claim as it should be quoted back to the reader."""
    if kind == "typeface":
        return ", ".join(claim) if claim else "?"
    return claim


def block_for(conflict, loser_name, winner_name, date):
    slug = conflict["slug"]
    role = conflict["role"]
    kind = conflict["kind"]
    loser = dict((n, v) for v, n in conflict["claims"])[loser_name]
    winner = dict((n, v) for v, n in conflict["claims"])[winner_name]
    hits = conflict["counts"][winner_name]
    sheets = conflict.get("sheets") or "0/0"
    n_sheets = int(sheets.split("/")[0])
    url = conflict.get("url") or "?"
    if kind == "typeface":
        states = ("This prep states the design's body typeface as `%s`. The ColorLib"
                  " `%s` design's live assets" % (value_text(kind, loser), slug))
        scan = ("(`%s`, %d stylesheet%s fetched — every linked sheet, the inline"
                " `<style>` blocks and the `style=\"…\"` attributes) declare that family"
                " **0 times**, neither in a `font-family:` rule nor in a Google Fonts"
                " URL." % (url, n_sheets, "" if n_sheets == 1 else "s"))
        sib = ("The sibling prep `%s` (`openspec/specs/template-%s/spec.md`) states"
               " `%s`, declared %d times." % (winner_name, winner_name,
                                              value_text(kind, winner), hits))
        tail = ("The typeface row above is prep history for this role; re-read the"
                " sheet's `body{…}` rule before prescribing a face.")
    else:
        states = ("This prep states the design's %s as `%s`. The ColorLib"
                  " `%s` design's live assets" % (role, value_text(kind, loser), slug))
        scan = ("(`%s`, %d stylesheet%s fetched — every linked sheet, the inline"
                " `<style>` blocks and the `style=\"…\"` attributes) paint that colour"
                " **0 times**, in hex notation and in `rgb()`/`rgba()` notation, so it"
                " is not on the design." % (url, n_sheets, "" if n_sheets == 1 else "s"))
        sib = ("The sibling prep `%s` (`openspec/specs/template-%s/spec.md`) states"
               " `%s`, which those assets paint %d times." % (winner_name, winner_name,
                                                              value_text(kind, winner), hits))
        tail = ("The `%s` row above is prep history for this role; re-read the"
                " declaration that owns the role before painting it, and see"
                " `docs/slug-token-agreement.md`." % role)
    return "\n".join([
        "<!-- " + (MARK % (slug, role)) + " -->",
        "> **Cross-prep token conflict, re-measured %s.** %s" % (date, states),
        "> " + scan,
        "> " + sib,
        "> " + tail,
        "<!-- /slug-token-agreement -->",
    ])


def insert_block(text, block, slug):
    """Append the block at the END of the `## Design Tokens` section."""
    m = (re.search(r"^##\s+[^\n]*[Tt]okens[^\n]*$", text, re.M)
         or re.search(r"^##\s+[^\n]*Design reference[^\n]*$", text, re.M))
    if not m:
        return None
    nxt = re.search(r"^##\s+", text[m.end():], re.M)
    end = m.end() + nxt.start() if nxt else len(text)
    head = text[:end].rstrip("\n")
    tail = text[end:]
    return head + "\n\n" + block + "\n\n" + tail.lstrip("\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--report", required=True)
    ap.add_argument("--apply", action="store_true", help="write (default: dry run)")
    ap.add_argument("--only", default=None, help="comma-separated slugs")
    ap.add_argument("--date", default="2026-10-25")
    ap.add_argument("--root", default=ROOT)
    a = ap.parse_args()

    rep = json.load(open(a.report))
    if "adjudicated" not in rep:
        sys.exit("report has no `adjudicated` list — run the verifier with --adjudicate")
    only = set(x.strip() for x in a.only.split(",")) if a.only else None

    planned = changed = skipped = 0
    refused = []
    for c in rep["adjudicated"]:
        if c["verdict"] != "UNSUPPORTED":
            continue
        if only and c["slug"] not in only:
            continue
        losers = [n for v, n in c["claims"] if c["counts"].get(n, 0) == 0]
        winners = [n for v, n in c["claims"] if c["counts"].get(n, 0) > 0]
        if len(winners) != 1:
            continue
        for loser in losers:
            planned += 1
            path = os.path.join(a.root, "openspec", "specs", "template-" + loser, "spec.md")
            if not os.path.isfile(path):
                refused.append((loser, c["slug"], "no spec file"))
                continue
            text = open(path, encoding="utf-8").read()
            newblock = block_for(c, loser, winners[0], a.date)
            marker = "<!-- " + (MARK % (c["slug"], c["role"])) + " -->"
            if marker in text:
                old = re.search(re.escape(marker) + r".*?<!-- /slug-token-agreement -->",
                                text, re.S)
                if old and old.group(0) == newblock:
                    skipped += 1
                    print("  no-op    %-16s %-9s (block already current)" % (loser, c["role"]))
                    continue
                out = text[:old.start()] + newblock + text[old.end():]
            else:
                out = insert_block(text, newblock, c["slug"])
                if out is None:
                    refused.append((loser, c["slug"], "no token section"))
                    continue
            if out == text:
                skipped += 1
                continue
            changed += 1
            print("  %-8s %-16s %-9s slug=%s" % ("write" if a.apply else "dry-run",
                                                 loser, c["role"], c["slug"]))
            if a.apply:
                open(path, "w", encoding="utf-8").write(out)

    print("\nplanned %d · %s %d · unchanged %d · refused %d"
          % (planned, "written" if a.apply else "would write", changed, skipped, len(refused)))
    for loser, slug, why in refused:
        print("  REFUSED %-16s %-24s %s" % (loser, slug, why))


if __name__ == "__main__":
    main()
