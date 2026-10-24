#!/usr/bin/env python3
"""verify-role-rule-tokens.py — ROLE-RULE axis (read-only).

`verify-slug-token-agreement.py` (`-25d`) compares two preps of ONE design and
then asks the live demo *how often* each candidate value is painted. 52 of its
139 conflicts came back `BOTH-PAINTED`: both values occur in the sheets, so
counting cannot decide — the question is which RULE owns the role.

This axis reads the sheets as RULES instead of as a bag of literals:

    body    color                 body / html body                (body text)
    ink     color                 h1..h6 (+ their `a`)             (heading ink)
    footer  background[-color]    footer / .*footer*               (footer band)
    brand   background[-color]    button / .btn* / .theme-btn …    (CTA fill)
    typeface font-family          body / html body                 (body face)

For each conflicted (slug, role) it resolves the live demo (`catalog_resolve`),
parses every linked stylesheet into rules, and asks whether a candidate value is
declared BY A RULE THAT OWNS THE ROLE — not merely present somewhere.

## Buckets (one per conflicted (slug, role))

  ROLE-WINNER      exactly ONE candidate is declared by an owning rule, every
                   other candidate is declared by NONE .................. FLAG
                   (`fix-role-rule-tokens.py` records the measured winner)
  CASCADE-WINNER   two candidates both own, but one rule out-ranks the other
                   (higher specificity, then later in load order for a tie) .. note
  ROLE-BOTH        two candidates own rules of equal rank: the design really
                   does paint the role twice (e.g. a light + a dark band) .... note
  MEDIA-ONLY       the only owning declaration sits inside a `@media` block, so
                   it is not the desktop resting state ..................... note
  SCOPED-ONLY      `ink` is painted only by decorated selectors (`.hero h1`,
                   `.date h6 span`): a local heading, not the design's ink ... note
  ROLE-NONE        no candidate is declared by any owning rule: the demo's
                   skin is not what these preps measured .................... note
  DRIFT            the demo is a rebuilt 3.x skin: both preps measured the old
                   design, so a mismatch is drift, never a prep error ....... note
  PARTIAL-COVERAGE a linked stylesheet did not arrive, so "declared 0 times"
                   is not provable ......................................... note
  DEAD-THIN        demo unreachable, or the page links no stylesheet ........ note
  NO-RULE          the role has no owning rule at all (`accent` is defined by
                   "most-used chromatic", a COUNT, not a rule) .............. note

Guards that decide the verdict (each has a control):
  * a `:hover`/`:focus`/`:active`/`::before`/`::after` selector is not the
    resting state (`C05`);
  * a rule inside `@media` is not the desktop state (`C06`);
  * cascade order is specificity first, then load order (`C07`/`C08`);
  * `@font-face` / `@keyframes` blocks are not elements (`C15`/`C16`);
  * a transparent `.btn-outline` never owns the CTA fill (`C17`);
  * `rgb()`/`rgba()` is a colour (`C13`), a `url()` in a shorthand does not
    hide the fill (`C14`), a hex inside a CSS comment is not a declaration
    (`C19`), and a selector list is split per selector (`C18`).

## Usage

  python3 scripts/verify-role-rule-tokens.py                    # offline census
  python3 scripts/verify-role-rule-tokens.py --adjudicate       # network (cached)
  python3 scripts/verify-role-rule-tokens.py --adjudicate --only academica,author
  python3 scripts/verify-role-rule-tokens.py --json /tmp/rrt.json
  python3 scripts/verify-role-rule-tokens.py --census           # per-conflict table
  python3 scripts/verify-role-rule-tokens.py --no-cascade       # guard A/B

Exit 0 always (it is a report; callers read `flags`). Read-only: no spec is
written, `apps/` is never touched, `TEMPLATES.md` is never touched.
"""
from __future__ import annotations

import argparse
import collections
import importlib.util
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT_DEFAULT = os.path.dirname(HERE)


def load_base():
    """The `-25d` axis as a library: the census, the fetcher, the assets reader."""
    path = os.path.join(HERE, "verify-slug-token-agreement.py")
    spec = importlib.util.spec_from_file_location("sta_axis", path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


BASE = load_base()

# --------------------------------------------------------------------------- #
# CSS: rules, not literals
# --------------------------------------------------------------------------- #
COMMENT_RX = re.compile(r"/\*.*?\*/", re.S)
DECL_RX = re.compile(r"([-A-Za-z]+)\s*:\s*([^;]+)")
HEX_RX = re.compile(r"#([0-9a-fA-F]{3,8})\b")
RGB_RX = re.compile(r"rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})", re.I)
PSEUDO_RX = re.compile(r"::?[a-zA-Z-]+(\([^)]*\))?")
STATE_RX = re.compile(r":(hover|focus|active|visited|focus-within|target)\b", re.I)
PSEUDO_EL_RX = re.compile(r"::(before|after|placeholder|selection|first-line|first-letter)\b", re.I)


def strip_comments(css: str) -> str:
    return COMMENT_RX.sub("", css)


def iter_rules(css: str):
    """-> yield (selector_head, declaration_block, in_media) for real CSS rules.

    Brace-walk with `str.find`, so an `@media` wrapper is entered and left
    correctly; `@font-face`, `@keyframes` and other at-rule blocks are skipped
    (their bodies are not element rules — controls C15/C16).
    """
    text = strip_comments(css)
    stack: list[str] = []
    i = 0
    n = len(text)
    while True:
        j = text.find("{", i)
        k = text.find("}", i)
        if j == -1 and k == -1:
            break
        if j != -1 and (k == -1 or j < k):
            stack.append(text[i:j].strip())
            i = j + 1
        else:
            head = stack.pop() if stack else ""
            decls = text[i:k]
            if head and not head.startswith("@"):
                in_media = any(h.lower().startswith(("@media", "@supports")) for h in stack)
                yield head, decls, in_media
            i = k + 1
    _ = n


def split_selectors(head: str) -> list[str]:
    return [s.strip() for s in head.split(",") if s.strip()]


def sel_shape(sel: str):
    """-> (normalised selector, elements, classes, ids) with pseudo state removed."""
    s = PSEUDO_RX.sub("", sel).strip().lower()
    s = re.sub(r"\s+", " ", s)
    ids = set(re.findall(r"#([\w-]+)", s))
    classes = set(re.findall(r"\.([\w-]+)", s))
    els = re.findall(r"(?:^|[\s>+~])([a-z][a-z0-9]*)", s)
    return s, els, classes, ids


def specificity(sel: str) -> tuple:
    _s, els, classes, ids = sel_shape(sel)
    return (len(ids), len(classes), len(els))


# --------------------------------------------------------------------------- #
# which rule owns which role
# --------------------------------------------------------------------------- #
HEADINGS = {"h1", "h2", "h3", "h4", "h5", "h6"}
CTA_CLASSES = {
    "btn", "button", "buttons", "theme-btn", "site-btn", "main-btn", "primary-btn",
    "btn-primary", "btn-main", "btn-theme", "button-1", "cta", "cta-btn", "get-started",
    "primary-button", "btn-default", "btn-brand",
}


def owns_body(els, classes, ids) -> bool:
    return "body" in els and set(els) <= {"html", "body"}


def owns_heading(els, classes, ids) -> bool:
    return bool(HEADINGS & set(els)) or bool(HEADINGS & classes)


def owns_footer(els, classes, ids) -> bool:
    return "footer" in els or any("footer" in c for c in classes)


def owns_cta(els, classes, ids) -> bool:
    if "button" in els or "input" in els and any(c in CTA_CLASSES for c in classes):
        return True
    if classes & CTA_CLASSES:
        return True
    return any(c.startswith("btn-") for c in classes)


# role -> (predicate, properties that carry the value)
ROLE_RULES = {
    "body": (owns_body, {"color"}),
    "ink": (owns_heading, {"color"}),
    "footer": (owns_footer, {"background", "background-color"}),
    "brand": (owns_cta, {"background", "background-color"}),
    "typeface": (owns_body, {"font-family"}),
}
# `accent` is "most-used chromatic": a count, not a rule (NO-RULE note).
NO_RULE_ROLES = {"accent"}


def norm_hex(h: str) -> str:
    return BASE.norm_hex(h)


def colours_in(value: str) -> set:
    out = {norm_hex(m.group(1)) for m in HEX_RX.finditer(value)}
    for m in RGB_RX.finditer(value):
        try:
            r, g, b = (int(m.group(i)) for i in (1, 2, 3))
        except ValueError:
            continue
        if max(r, g, b) <= 255:
            out.add("#%02x%02x%02x" % (r, g, b))
    return out


def _families(value: str) -> set:
    return families_in(value)


def families_in(value: str) -> set:
    out = set()
    for part in value.split(","):
        f = BASE.canon_family(part)
        if f and f not in BASE.FONT_STOP and f not in BASE.ICON_FAMILIES and len(f) > 2:
            out.add(f)
    return out


def ordered_labels(blobs) -> list:
    """Stylesheet labels in DOCUMENT order — the cascade is order-dependent.

    `assets_of` fetches the theme sheet first (so the cap can never drop it),
    which is the wrong order to read cascade from: a later `body{color}` must
    beat an earlier one. Rebuild the order from the page's own `<link>` tags
    and put inline `<style>` last (it really is last in every demo seen).
    """
    page = blobs.get("page", b"").decode("utf-8", "replace")
    bases = []
    for tag in re.findall(r"<link[^>]*>", page, re.I):
        if not re.search(r"stylesheet", tag, re.I):
            continue
        m = re.search(r"href=[\"']([^\"']+)[\"']", tag)
        if not m:
            continue
        base = m.group(1).split("?")[0].rsplit("/", 1)[-1].lower()
        if base:
            bases.append(base)
    keys = [k for k in blobs if k.startswith("http")]
    ordered, used = [], set()
    for base in bases:
        for k in keys:
            if k in used:
                continue
            if k.split("?")[0].rsplit("/", 1)[-1].lower() == base:
                ordered.append(k)
                used.add(k)
                break
    ordered += [k for k in keys if k not in used]
    if "inline" in blobs:
        ordered.append("inline")
    return ordered


def declaration_evidence(blobs, role):
    """-> (candidate->[evidence], notes) over every rule that owns `role`.

    `evidence` is a list of dicts (selector, prop, raw value, specificity,
    order, media) per *declared value* the caller asks about — this function
    returns the full map keyed by the *normalised* value so the caller can look
    up its two candidates and also count the rest.
    """
    if role in NO_RULE_ROLES:
        return {}, collections.Counter()
    pred, props = ROLE_RULES[role]
    evidence: dict[str, list] = collections.defaultdict(list)
    order = 0
    notes = collections.Counter()
    for label in ordered_labels(blobs):
        blob = blobs[label]
        text = blob.decode("utf-8", "replace")
        for head, decls, in_media in iter_rules(text):
            for sel in split_selectors(head):
                if STATE_RX.search(sel):
                    notes["STATE-SKIPPED"] += 1
                    continue
                if PSEUDO_EL_RX.search(sel):
                    notes["PSEUDO-ELEMENT-SKIPPED"] += 1
                    continue
                _s, els, classes, ids = sel_shape(sel)
                if not pred(els, classes, ids):
                    continue
                for prop, raw in DECL_RX.findall(decls):
                    prop = prop.strip().lower()
                    if prop not in props:
                        continue
                    order += 1
                    for val in (colours_in(raw) if role != "typeface" else families_in(raw)):
                        evidence[val].append({
                            "sel": sel.strip()[:80], "prop": prop, "raw": raw.strip()[:60],
                            "spec": specificity(sel), "order": order, "media": in_media,
                            "sheet": label.rsplit("/", 1)[-1][:40],
                        })
    return dict(evidence), notes


# --------------------------------------------------------------------------- #
# the verdict (pure — controls exercise this without a network)
# --------------------------------------------------------------------------- #
def strength(ev) -> tuple:
    return (ev["spec"], ev["order"])


def targets_same_element(a: dict, b: dict) -> bool:
    """Do two owning rules compete for the SAME element?

    Cascade only decides between rules that can style one element: `body{color}`
    vs `html body{color}`, or `.btn` vs `.btn-primary`. `h1{color}` vs
    `h2{color}` both own the ink role but paint DIFFERENT headings — the design
    really does have two heading colours, so the later rule is not "winning"
    anything (control C09). Element sets equal or nested => same target; two
    disjoint element sets => different targets.
    """
    ea = set(sel_shape(a["sel"])[1])
    eb = set(sel_shape(b["sel"])[1])
    if ea == eb:
        return True
    if not ea or not eb:
        return True                     # class/id-only selector: no element to pin
    return ea <= eb or eb <= ea


def cand_label(c) -> str:
    return "/".join(c) if isinstance(c, (list, tuple)) else str(c)


def _owned(evidence, cand) -> list:
    """Evidence rows declared by an owning rule for ONE candidate.

    A colour candidate is a single value; a TYPEFACE candidate is the family set
    the prep states (`Arial, Poppins`), so it owns the role when ANY family of
    the set is declared by an owning rule (control C28).
    """
    if isinstance(cand, (list, tuple)):
        return [e for f in cand for e in evidence.get(f, [])]
    return evidence.get(cand, [])


def base_scope(role, ev: dict) -> bool:
    """Is this owning rule the DESIGN's base rule for the role, or a local one?

    `ink` is the one role where a decorated selector lies: `.sermons-date h6 span`
    paints one date label, `.hero h1` paints the hero heading — neither is the
    design's heading colour. A base heading rule is element-only (`h1,h2{color}`)
    or Bootstrap's heading classes (`.h4{color}`). A scoped-only verdict is
    reported, never fixed (control C32).
    """
    if role != "ink":
        return True
    ids, classes, _els = ev["spec"]
    if ids:
        return False
    if classes == 0:
        return True
    return set(re.findall(r"\.([\w-]+)", ev["sel"])) <= HEADINGS


def rule_verdict(role, cands, evidence, drift="", cov=None, cascade=True) -> tuple:
    """-> (verdict, winners{label: best evidence}, detail).

    `cands`    the values the two preps claim (a str for a colour, the family
               tuple for a typeface), in claim order
    `evidence` every value an owning rule declares (from declaration_evidence)
    """
    if role in NO_RULE_ROLES:
        return "NO-RULE", {}, "role is defined by a count, not by a rule"
    if drift:
        return "DRIFT", {}, drift
    if cov is not None:
        fetched, linked = (int(x) for x in cov.split("/"))
        if fetched < linked:
            return "PARTIAL-COVERAGE", {}, "%d of %d linked sheets arrived" % (fetched, linked)
    rows = {cand_label(c): _owned(evidence, c) for c in cands}
    desktop = {k: [e for e in v if not e["media"]] for k, v in rows.items()}
    media = {k: [e for e in v if e["media"]] for k, v in rows.items()}
    base = {k: [e for e in v if base_scope(role, e)] for k, v in desktop.items()}
    owners = [k for k in rows if base[k]]
    if not owners and any(desktop.values()) and role == "ink":
        return "SCOPED-ONLY", {}, "ink is painted only by element-scoped selectors"
    if len(owners) == 1:
        win = owners[0]
        best = max(base[win], key=strength)
        return "ROLE-WINNER", {win: best}, (
            "%d rule(s) own %s; strongest `%s{%s:%s}`" % (
                len(base[win]), role, best["sel"], best["prop"], best["raw"][:22]))
    if len(owners) >= 2:
        best = {k: max(base[k], key=strength) for k in owners}
        if not cascade:
            return "ROLE-BOTH", best, "cascade disabled (guard A/B)"
        ranked = sorted(best.items(), key=lambda kv: strength(kv[1]), reverse=True)
        if (strength(ranked[0][1]) > strength(ranked[1][1])
                and targets_same_element(ranked[0][1], ranked[1][1])):
            win_label, win_ev = ranked[0]
            lose_ev = ranked[1][1]
            if win_ev["spec"] != lose_ev["spec"]:
                why = "out-ranks by specificity %s > %s" % (
                    "/".join(map(str, win_ev["spec"])), "/".join(map(str, lose_ev["spec"])))
            elif win_ev["sheet"] != lose_ev["sheet"]:
                why = "wins later in load order (%s after %s)" % (
                    win_ev["sheet"], lose_ev["sheet"])
            else:
                why = "wins later in the same sheet (rule %d after %d)" % (
                    win_ev["order"], lose_ev["order"])
            return "CASCADE-WINNER", {win_label: win_ev}, (
                "`%s{%s:%s}` %s" % (win_ev["sel"], win_ev["prop"],
                                    win_ev["raw"][:22], why))
        why_both = ("two owning rules paint the role on DIFFERENT elements"
                    if not targets_same_element(ranked[0][1], ranked[1][1])
                    else "two owning rules of equal rank")
        return "ROLE-BOTH", best, why_both
    if any(media.values()):
        hit = next(k for k in rows if media[k])
        return "MEDIA-ONLY", {}, "%s is declared only inside @media" % hit
    return "ROLE-NONE", {}, "neither candidate is declared by an owning rule"


# --------------------------------------------------------------------------- #
# census (offline) + adjudication (network)
# --------------------------------------------------------------------------- #
VERDICT_BUCKETS = (
    "ROLE-WINNER", "CASCADE-WINNER", "ROLE-BOTH", "MEDIA-ONLY", "ROLE-NONE",
    "DRIFT", "PARTIAL-COVERAGE", "DEAD-THIN", "NO-RULE", "SCOPED-ONLY",
)


def census(root: str, ref: str | None = None, strict: bool = True) -> dict:
    rep = BASE.census(root, ref, strict=strict)
    by = collections.Counter(f["role"] for f in rep["flagged"])
    rep["conflicts_by_role"] = dict(by)
    rep["candidates"] = {f["slug"] + "|" + f["role"]: [c[0] for c in f["claims"]]
                         for f in rep["flagged"]}
    return rep


def adjudicate(root: str, report: dict, only=None,
               cache="/tmp/slug-token-agreement", cascade=True) -> list:
    sys.path.insert(0, os.path.join(root, "scripts"))
    import catalog_resolve as CR                      # noqa: E402

    fetch = BASE.make_fetcher(cache)
    CR.configure(fetch, os.path.join(cache, "catalog"))
    blobs_cache: dict[str, tuple] = {}
    out = []
    for f in report["flagged"]:
        if only and f["slug"] not in only:
            continue
        url = None
        try:
            url, _html = CR.demo(fetch, f["slug"], None)
        except Exception:
            url = None
        cands = [c[0] if isinstance(c[0], str) else tuple(c[0]) for c in f["claims"]]
        if not url:
            out.append(dict(f, verdict="DEAD-THIN", url=None, cands=cands, winners={},
                            detail="no demo resolved"))
            continue
        if url not in blobs_cache:
            blobs_cache[url] = BASE.assets_of(fetch, url)
        code, blobs = blobs_cache[url]
        if code != 200 or not blobs:
            out.append(dict(f, verdict="DEAD-THIN", url=url, cands=cands, winners={},
                            detail="HTTP %s" % code))
            continue
        evidence, _notes = declaration_evidence(blobs, f["role"])
        drift = BASE.rebuilt_reason(url, blobs)
        cov = BASE.sheet_coverage(blobs)
        verdict, winners, detail = rule_verdict(
            f["role"], cands, evidence, drift=drift, cov=cov, cascade=cascade)
        matched = []
        if winners:
            win_label = list(winners)[0]
            win_cand = cands[[cand_label(c) for c in cands].index(win_label)]
            parts = win_cand if isinstance(win_cand, (list, tuple)) else [win_cand]
            matched = [str(x) for x in parts
                       if any(not e["media"] for e in evidence.get(str(x), []))]
        out.append(dict(f, verdict=verdict, url=url, cands=cands, matched=matched,
                        winners={k: v for k, v in winners.items()}, detail=detail,
                        sheets=cov, drift=drift,
                        other_hits={k: len(v) for k, v in evidence.items()
                                    if k not in cands and len(v) >= 3}))
    return out


PRIOR_BLOCK_RX = re.compile(
    r"<!--\s*slug-token-agreement:\s*([^/\s]+)/([A-Za-z]+)\s*-->(.*?)"
    r"<!--\s*/slug-token-agreement", re.S)
SIBLING_RX = re.compile(r"sibling prep `([^`]+)`.*?states `([^`]+)`", re.S)


def cross_check(root: str, cache="/tmp/slug-token-agreement", cascade=True) -> dict:
    """Re-decide the 18 `-25d` UNSUPPORTED corrections with the ROLE-RULE reader.

    That axis proved the loser value is painted *nowhere*; this one proves which
    rule owns the role. Agreement is the control (a sibling axis must not
    contradict a shipped correction); a disagreement is printed with its class.
    """
    sys.path.insert(0, os.path.join(root, "scripts"))
    import catalog_resolve as CR                      # noqa: E402
    import glob as _glob

    pairs = []
    for path in sorted(_glob.glob(os.path.join(root, "openspec/specs/template-*/spec.md"))):
        text = open(path, encoding="utf-8", errors="replace").read()
        name = path.split("/")[-2].replace("template-", "")
        for slug, role, body in PRIOR_BLOCK_RX.findall(text):
            m = SIBLING_RX.search(body)
            if not m:
                continue
            loser = re.search(r"states the design's [a-z ]+ as `([^`]+)`", body)
            pairs.append({"slug": slug, "role": role, "name": name,
                          "sibling": m.group(1), "sibling_value": m.group(2).strip(),
                          "loser_value": loser.group(1).strip() if loser else None})
    fetch = BASE.make_fetcher(cache)
    CR.configure(fetch, os.path.join(cache, "catalog"))
    blob_cache: dict[str, tuple] = {}
    rows = []
    for q in pairs:
        url = None
        try:
            url, _h = CR.demo(fetch, q["slug"], None)
        except Exception:
            url = None
        if not url:
            rows.append(dict(q, verdict="DEAD-THIN", agree=None, url=None, detail="no demo"))
            continue
        if url not in blob_cache:
            blob_cache[url] = BASE.assets_of(fetch, url)
        code, blobs = blob_cache[url]
        if code != 200 or not blobs:
            rows.append(dict(q, verdict="DEAD-THIN", agree=None, url=url, detail="HTTP %s" % code))
            continue
        evidence, _n = declaration_evidence(blobs, q["role"])
        drift = BASE.rebuilt_reason(url, blobs)
        cov = BASE.sheet_coverage(blobs)
        cands = [q["loser_value"], q["sibling_value"]]
        if q["role"] == "typeface":
            cands = [tuple(_families(x)) for x in cands]
        verdict, winners, detail = rule_verdict(q["role"], cands, evidence,
                                               drift=drift, cov=cov, cascade=cascade)
        agree = None
        if winners:
            agree = cand_label(list(winners)[0]) == cand_label(cands[1])
        rows.append(dict(q, verdict=verdict, agree=agree, url=url, detail=detail,
                         sheets=cov, drift=drift))
    return {"pairs": len(rows), "rows": rows,
            "agree": sum(1 for r in rows if r["agree"] is True),
            "disagree": sum(1 for r in rows if r["agree"] is False),
            "undecided": sum(1 for r in rows if r["agree"] is None)}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("root", nargs="?", default=ROOT_DEFAULT)
    ap.add_argument("--ref", default=None)
    ap.add_argument("--json", default=None)
    ap.add_argument("--census", action="store_true")
    ap.add_argument("--adjudicate", action="store_true")
    ap.add_argument("--only", default=None)
    ap.add_argument("--no-cascade", action="store_true", help="guard A/B")
    ap.add_argument("--no-strict", action="store_true", help="guard A/B (base labels)")
    ap.add_argument("--cross-check", action="store_true",
                    help="re-decide the -25d UNSUPPORTED corrections (sibling control)")
    a = ap.parse_args()

    root = os.path.abspath(a.root)
    rep = census(root, a.ref, strict=not a.no_strict)
    only = set(x.strip() for x in a.only.split(",")) if a.only else None
    if a.adjudicate:
        rep["adjudicated"] = adjudicate(root, rep, only, cascade=not a.no_cascade)
    if a.json:
        json.dump(rep, open(a.json, "w"), indent=1)

    print("conflicts %d · by role %s" % (rep["flags"], rep["conflicts_by_role"]))
    if a.census:
        for f in rep["flagged"]:
            print("  %-30s %-9s %s" % (f["slug"], f["role"],
                                       " ".join(sorted(set(c[0] for c in f["claims"])))[:40]))
    if a.adjudicate:
        v = collections.Counter(x["verdict"] for x in rep["adjudicated"])
        print("verdicts:", dict(v))
        rep["flags"] = v.get("ROLE-WINNER", 0)
        if a.cross_check:
            cc = cross_check(root, cascade=not a.no_cascade)
            print("cross-check (-25d blocks): %d pairs · agree %d · disagree %d · undecided %d"
                  % (cc["pairs"], cc["agree"], cc["disagree"], cc["undecided"]))
            for r in cc["rows"]:
                if r["agree"] is not True:
                    print("  %-9s %-24s %-9s %s :: %s" % (
                        "AGREE" if r["agree"] else "DIFF", r["slug"], r["role"],
                        r["verdict"], r["detail"][:60]))
        for x in rep["adjudicated"]:
            if x["verdict"] in ("ROLE-WINNER", "CASCADE-WINNER"):
                win = next(iter(x["winners"]))
                print("  %-14s %-28s %-9s %s -> %s   %s"
                      % (x["verdict"], x["slug"], x["role"],
                         " vs ".join(cand_label(c) for c in x["cands"]),
                         cand_label(win), x["detail"][:70]))


if __name__ == "__main__":
    main()
