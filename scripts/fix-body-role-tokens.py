#!/usr/bin/env python3
"""fix-body-role-tokens.py — record the ROLE-NONE adjudication inside the prep.

`verify-role-rule-tokens.py` left 23 conflicts `ROLE-NONE`: the role predicate it
uses (`body`/`html body` for the body-text role) cannot see a paragraph colour,
and a literal census cannot tell a rule that PAINTS from a rule that LOSES. The
manual read resolves each one against the live render; this script writes that
reading into the prep as an idempotent block, the same shape `-25e` used:

    <!-- body-role-tokens: <slug>/<role>/<spec> -->
    **Body-text role (measured 2026-10-25):** …
    <!-- /body-role-tokens -->

Rules (house convention from `fix-role-rule-tokens.py`, kept deliberately):
  * the token TABLE is never rewritten — a prep is a historical statement and
    another stream may already have read it; the block is the correction;
  * a prep whose claim the render SUPPORTS gets nothing (only contradictions and
    losing rules are recorded);
  * a row that already states the winning value beside the losing one (the modal
    family's "Body text" + "Modal paragraph" pair) is recorded as SCOPED, not as
    an error: the prep is right about both colours, wrong only about which one
    paints;
  * running twice is a byte-level no-op (the block is the idempotency key).

  python3 scripts/fix-body-role-tokens.py --dry-run
  python3 scripts/fix-body-role-tokens.py --apply
  python3 scripts/fix-body-role-tokens.py --apply --only lectio,tradebase
"""
from __future__ import annotations

import argparse
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SPECS = os.path.join(ROOT, "openspec", "specs")
STAMP = "measured 2026-10-25"

ROLE_WORD = {
    "body": "Body-text", "ink": "Heading-ink", "footer": "Footer",
    "brand": "Brand-fill", "typeface": "Typeface",
}

# slug, role, spec, claim, measured, renders, owner, sibling, kind
VERDICTS = [
    ("academica", "body", "lectio", "#333333", "#838383",
     "paragraphs render #ffffff x6 on dark bands and #838383 x6 on light ones",
     "p{color:#838383} (style.css)", "brainery", "contradicted"),
    ("bizcon", "body", "tradebase", "#666666", "#646464",
     "paragraphs render #646464 x8",
     "the `p` block declares #666666 then #646464 — the later declaration wins",
     "bizcraft", "contradicted"),
    ("bizcon", "footer", "tradebase", "#2f373d", "#303030",
     "the footer band paints #f7f7f7 and the copyright strip #303030",
     ".copyright_part{background-color:#303030}; #2f373d is the heading ink",
     "bizmark", "contradicted"),
    ("boxus", "brand", "boxcraft", "#23214c", "#e54b76",
     "the CTA paints #e54b76 on its text and border; #23214c is the page ink",
     "a.button{border:2px solid #e54b76; color:#e54b76} (common.css)",
     "artbox", "contradicted"),
    ("burger", "body", "flamepatty", "#1f1f1f", "#6e6e6e",
     "paragraphs render #6e6e6e x8 (one still reads #4d4d4d)",
     ".best_burgers_area .single_delicious .info p{color:#6E6E6E}; #1F1F1F is the heading/anchor ink",
     "griddle", "contradicted"),
    ("buri", "body", "savorly", "#828bb2", "#555555",
     "paragraphs render #555555 x10",
     "p{color:#555555}; #828bb2 belongs to the .typography demo headings",
     "craver", "contradicted"),
    ("civic", "body", "civichub", "#505259", "#808181",
     "paragraphs render #808181 x12",
     "p{color:#808181}; #505259 paints .single-review .qut only",
     "resumeta", "contradicted"),
    ("colorlib-wizard-21", "ink", "runemark", "#333", "#000000",
     "step titles render #000000 and the form heading #ffffff",
     "h2.title; no `.wizard-header` rule exists in the sheet and `.inner h3` is #fff",
     "steppr", "contradicted"),
    ("colorlib-wizard-21", "typeface", "formpilot", "Open Sans", "Raleway",
     "the sheet declares no Open Sans rule",
     ".wizard-v1-content{font-family:'Raleway', sans-serif} — Raleway is the only face declared",
     "runemark", "contradicted"),
    ("colorlib-wizard-30", "typeface", "fluxgate", "Poppins", "Montserrat",
     "the sheet declares no Poppins rule",
     ".wizard-v10-content{font-family:'Montserrat', sans-serif}",
     "formwalk", "contradicted"),
    ("coloshop", "body", "hapishop", "#989898", "#51545f",
     "all five rendered paragraphs are #51545f",
     "p{color:#989898} never paints: .benefit_content p and .newsletter_text p out-rank it",
     "shoplane", "scoped"),
    ("contact-form-v19", "typeface", "jotdown", "DM Sans", "Open Sans",
     "every text node resolves to OpenSans-Regular",
     "body{font-family:'OpenSans-Regular', sans-serif} — no DM Sans rule exists",
     "cartofield", "contradicted"),
    ("dropdown-07", "ink", "dropwell", "#212529", "#ffffff",
     "the visible section heading is #ffffff and the base h3 is #000000",
     ".heading-section{color:#fff}; h2,h3{color:#000}. #212529 is the body colour, not a heading",
     "onboard", "scope-note"),
    ("hiroto", "body", "aurumstay", "#111111", "#777c81",
     "paragraphs render #777c81 x12",
     "p{color:#777C81}; #111111 is the h1–h6 ink",
     "kasumi", "contradicted"),
    ("luto", "footer", "gustoso", "#302939", "#303030",
     "the footer ground paints rgb(48,48,48) = #303030",
     "an unclassed footer wrapper div; #302939 paints .colorlib-intro, the strip above the hero",
     "mealmuse", "contradicted"),
    ("modal-08", "brand", "mailpuff", "#007bff", "#fb8691",
     "the launch button paints #fb8691",
     ".cl-btn.cl-btn-primary{background:#fb8691 !important} out-ranks .cl-btn-primary{background-color:#007bff}",
     "dimbox", "contradicted"),
    ("modal-10", "brand", "popuplayer", "#007bff", "#3e64ff",
     "both buttons paint #3e64ff",
     ".cl-btn.cl-btn-primary{background:#3e64ff !important} out-ranks .cl-btn-primary{background-color:#007bff}",
     "poppy", "contradicted"),
    ("modal-13", "body", "modalrosa", "#b3b3b3", "#777777",
     "both rendered paragraphs are #777777",
     ".cl-modal .cl-modal-content .cl-modal-body p{color:#777} out-ranks p{color:#b3b3b3}",
     "subbox", "scoped"),
    ("modal-14", "body", "modalnova", "#b3b3b3", "#777777",
     "all three rendered paragraphs are #777777",
     ".cl-modal .cl-modal-content .cl-modal-body p{color:#777} out-ranks p{color:#b3b3b3}",
     "dealbounce", "scoped"),
    ("modal-18", "body", "modaloffer", "#666666", "#777777",
     "the rendered paragraph is #777777",
     ".cl-modal .cl-modal-content .cl-modal-body p{color:#777}; no #666666 rule exists",
     "modalbreeze", "contradicted"),
    ("modal-19", "body", "critique", "#b3b3b3", "#777777",
     "both rendered paragraphs are #777777",
     ".cl-modal .cl-modal-content .cl-modal-body p{color:#777} out-ranks p{color:#b3b3b3}",
     "reviewcard", "scoped"),
    ("modal-19", "body", "piazza", "#b3b3b3", "#777777",
     "both rendered paragraphs are #777777",
     ".cl-modal .cl-modal-content .cl-modal-body p{color:#777} out-ranks p{color:#b3b3b3}",
     "reviewcard", "scoped"),
    ("modal-19", "body", "splitmodal", "#b3b3b3", "#777777",
     "both rendered paragraphs are #777777",
     ".cl-modal .cl-modal-content .cl-modal-body p{color:#777} out-ranks p{color:#b3b3b3}",
     "reviewcard", "scoped"),
    ("sportify", "brand", "sportsclub", "#7800ff", "#ff0e3b",
     "the outline CTA and the active carousel dot paint #ff0e3b",
     ".button{border:2px solid #ff0e3b}; #7800ff is the hero slider overlay",
     "prowess", "contradicted"),
    ("travelers", "body", "jetpath", "#1e293b", "#4d4d4d",
     "body resolves to #4d4d4d and no p rule exists",
     "body{color:#4d4d4d}; #1e293b is declared by no rule in the ten linked sheets",
     "", "fabricated"),
    ("travelers", "body", "passport", "#333333", "#4d4d4d",
     "body resolves to #4d4d4d",
     "body{color:#4d4d4d}; #333333 paints .site-footer, a background, not text",
     "", "contradicted"),
    ("travelers", "body", "wanderer", "#25262a", "#4d4d4d",
     "body resolves to #4d4d4d",
     "body{color:#4d4d4d}; #25262a paints a dropdown hover state only",
     "", "contradicted"),
]


def block(v) -> str:
    slug, role, spec, claim, measured, renders, owner, sibling, kind = v
    key = f"{slug}/{role}/{spec}"
    word = ROLE_WORD[role]
    if kind == "fabricated":
        head = (f"**{word} role ({STAMP}):** this prep states `{claim}`, which is "
                f"declared by no rule in the linked sheets and painted by no element — "
                f"{renders}. `{owner}`.")
    elif kind == "scoped":
        head = (f"**{word} role ({STAMP}):** this prep states `{claim}`, which is a real "
                f"rule that LOSES: {renders}, because {owner}. The prep's second row "
                f"naming `{measured}` is the value that paints.")
    elif kind == "scope-note":
        head = (f"**{word} role ({STAMP}):** this prep states `{claim}` — {renders} "
                f"({owner}), so the value is the BODY colour, not a heading colour.")
    else:
        head = (f"**{word} role ({STAMP}):** this prep states `{claim}`, which the "
                f"render contradicts: {renders} ({owner}).")
    if sibling:
        tail = f" The sibling prep `{sibling}` states the value the render supports."
    else:
        tail = f" The measured value is `{measured}`."
    return (f"<!-- body-role-tokens: {key} -->\n{head}{tail}\n"
            f"<!-- /body-role-tokens -->")


def insert(text: str, blk: str) -> str:
    """Insert after the Design Tokens table (the block belongs with the tokens)."""
    lines = text.splitlines()
    idx = None
    for i, line in enumerate(lines):
        if re.match(r"^#{2,4}\s+.*(design\s*tokens?|tokens?\s*\(|^tokens)",
                    line, re.I):
            idx = i
            break
    if idx is None:
        return text.rstrip() + "\n\n" + blk + "\n"
    end = idx
    started = False
    for i in range(idx + 1, len(lines)):
        s = lines[i].strip()
        if s.startswith("|"):
            started = True
            end = i
        elif started and s == "":
            end = i
        elif started and not s.startswith("|"):
            break
        elif not started and s.startswith("#") and i > idx + 1:
            break
    tail = lines[end + 1:]
    while tail and tail[0].strip() == "":
        tail = tail[1:]
    out = lines[: end + 1] + ["", blk, ""] + tail
    return "\n".join(out).rstrip() + "\n"


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--only")
    args = ap.parse_args()
    only = {x.strip() for x in args.only.split(",")} if args.only else None

    writes = 0
    for v in VERDICTS:
        slug, role, spec = v[0], v[1], v[2]
        if only and spec not in only and slug not in only:
            continue
        path = os.path.join(SPECS, f"template-{spec}", "spec.md")
        if not os.path.exists(path):
            print("MISSING", path)
            continue
        text = open(path).read()
        if f"body-role-tokens: {slug}/{role}/{spec}" in text:
            print(f"already-recorded {spec} ({slug}/{role})")
            continue
        new = insert(text, block(v))
        print(f"write {spec:24} {slug}/{role:8} claim {v[3]:9} -> renders {v[4]}")
        writes += 1
        if args.apply:
            open(path, "w").write(new)
    print(f"writes {writes}" + ("" if args.apply else " (dry run)"))
    return 0


if __name__ == "__main__":
    sys.exit(main())
