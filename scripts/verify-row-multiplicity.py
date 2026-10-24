#!/usr/bin/env python3
"""verify-row-multiplicity.py — the ROW-MULTIPLICITY axis for TEMPLATES.md.

`TEMPLATES.md` carries 2,857 rows over 1,646 ColorLib slugs: a design that
ColorLib reposts under several categories gets one row per category. That is
bookkeeping, not a defect — *provided every row for one slug credits the same
app*. Nothing in the repo read that. `verify-spec-row-mismatch.py` walks
APPS (does the app's spec name a slug some row credits to it, and does more
than one design point at it); this script walks SLUGS (do all rows for one
design credit one app, and does that app's spec actually recreate it?).

The gap matters because two implementer streams work two rows of one design
independently: both build, and the marketplace ends up selling the same
ColorLib design twice under two names — the row-multiplicity axis was never
measured (it was queued in `docs/catalog-collisions.md` §Queue 6).

Provenance is read the house way (`verify-spec-row-mismatch.spec_slug`): a
`colorlib.com/wp/template/<slug>/` link, a `**Source slug:** \`x\`` label, a
`preview.colorlib.com/theme/<slug>/` URL, or a `/downloads/free/<slug>.zip`
archive. A spec CLAIMS a slug when any of those forms names it — a spec may
legitimately mention a sibling, so the claim set is every form found, not just
the first one.

Buckets (partition: every slug with ≥2 rows lands in exactly one):

  CONSISTENT     one app, and its spec claims this slug — the healthy case
  SPEC-STALE     one app, but the spec does not claim this slug (flag): the
                 rows send the marketplace to an app that recreates something else
  DUPLICATE      ≥2 apps and ≥2 of them claim this slug (flag): ONE design,
                 ≥2 shipped apps — two products for one source design
  ROW-POINTER    ≥2 apps, exactly one claims this slug (flag): the other rows
                 point at an app building a different design
  SLUG-ORPHAN    ≥2 apps, none claims this slug (flag): no app owns the design

Notes (independent of the bucket): `APP-SPEC-MISSING` (no spec on disk),
`STEM-SHARED` (apps whose specs also claim a sibling slug of the same stem —
the `cake`/`cakes` shape that makes a provenance line ambiguous).

`--network` re-measures the claim: one fetch per slug, then each credited app's
own UI copy is scored against that preview body (and, for a SPEC-STALE slug,
against the design its spec names as well):

  DUPLICATE    CONFIRMED (≥2 apps hit one body) · ONE-SIDED (one app hits, the
               other's provenance is doubtful) · UNRESOLVED (preview dead or
               copy paraphrased)
  ROW-POINTER  CONFIRMED (the claimer hits, the stale app does not) ·
               POINTER-WRONG (the stale app hits too) · UNRESOLVED
  SPEC-STALE   SPEC-PROVENANCE-STALE (the app matches the ROW's design better) ·
               APP-WRONG-DESIGN (the app matches the design its spec names, so
               the row credits a design that app does not recreate) · UNRESOLVED

A dead preview never wins a comparison by scoring 0 — it only leaves that side
unmeasured, which is why SPEC-STALE falls back to the live side's copy.

Usage:
  python3 scripts/verify-row-multiplicity.py [--root DIR] [--json FILE]
  python3 scripts/verify-row-multiplicity.py --network [--only SLUG[,SLUG]]
  python3 scripts/verify-row-multiplicity.py --self-test
  python3 scripts/verify-row-multiplicity.py --no-guards     # controls use this
Exit 0 = no flags, 1 = flags present, 3 = bad usage.
Read-only. `--network` fetches previews and app copy; it writes nothing.
"""
from __future__ import annotations

import argparse
import glob
import html
import json
import os
import re
import sys
import time
import urllib.error
import urllib.request

# --- module guards (the controls flip these to prove a bucket can MOVE) -----
GUARDS = {
    "row_multi": True,      # only slugs with >1 row are classified
    "claim_set": True,      # a spec claims every provenance slug it names
    "spec_scope": True,     # an app is judged by its OWN spec only
}

UA = {"User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 "
                    "(KHTML, like Gecko) Chrome/124.0 Safari/537.36"}
FAMILIES = ("theme/", "theme/bootstrap/", "theme/bac/", "theme/bb/",
            "theme/bft/", "theme/sidebar/")

# Two shared phrases are boilerplate on every demo of a family; two phrases that
# only this preview carries are provenance (measured on -24f, reused here).
MIN_EVIDENCE = 2
# Sibling designs in one family share copy blocks, so the LARGER score wins only
# when it is also a clear margin. Measured floor on the 2026-10-25a corpus: every
# APP-WRONG-DESIGN case ran >= 2.5x its row slug; a 2x gate keeps the label honest.
MARGIN = 2

ROW = re.compile(r"^- \[[ xX~]\] \*\*(.+?)\*\*", re.M)
ROW_STATUS = re.compile(r"^- \[([ xX~])\]")
ROW_SLUG = re.compile(r"\[colorlib\]\(https://colorlib\.com/wp/template/([\w.~%+-]+)/\)")
ROW_APP = re.compile(r"\]\(https://([\w.-]+)\.free\.componentdock\.com\)", re.I)
ROW_CAT = re.compile(r"^## (.+)$")
WP_URL = re.compile(r"colorlib\.com/wp/template/([\w.~%+-]+)/")
LABELED = re.compile(r"[Ss]ource\s+slug\**\s*[:=]?\s*\**\s*`([\w.~%-]+)`")
PRE_URL = re.compile(r"preview\.colorlib\.com/theme/([\w.~%+-]+(?:/[\w.~%+-]+)*)")
ZIP_URL = re.compile(r"downloads/free/([\w.~%+-]+)\.zip")


def norm(s: str) -> str:
    return re.sub(r"[^a-z0-9]", "", (s or "").lower())


def stem(slug: str) -> str:
    return re.sub(r"[-_]?v?\d+$", "", slug or "")


# ------------------------------------------------------------------ the rows
def load_rows(path: str) -> list[dict]:
    """One entry per TEMPLATES.md row that carries a ColorLib slug."""
    rows, cat = [], ""
    if not os.path.exists(path):
        return rows
    for n, line in enumerate(open(path, encoding="utf-8", errors="replace"), 1):
        if m := ROW_CAT.match(line):
            cat = m.group(1).strip()
            continue
        m = ROW.match(line)
        if not m:
            continue
        s = ROW_SLUG.search(line)
        if not s:
            continue
        a = ROW_APP.search(line)
        st = ROW_STATUS.match(line)
        rows.append({"line": n, "name": m.group(1).strip(), "slug": s.group(1),
                     "app": a.group(1).lower() if a else "", "cat": cat,
                     "status": st.group(1) if st else " "})
    return rows


def slug_index(rows: list[dict]) -> dict:
    """slug -> [row, ...] in TEMPLATES.md order."""
    out: dict[str, list] = {}
    for r in rows:
        out.setdefault(r["slug"], []).append(r)
    return out


# ------------------------------------------------------------- spec claims
def spec_claims(text: str) -> tuple[set, str]:
    """(every provenance slug the spec names, the FIRST one — its primary)."""
    claims: list[str] = []
    for rx in (WP_URL, LABELED):
        for m in rx.finditer(text):
            claims.append(m.group(1))
    for m in PRE_URL.finditer(text):
        segs = [s for s in m.group(1).split("/") if s]
        for take in range(len(segs), 0, -1):
            claims.append("/".join(segs[-take:]))
    for m in ZIP_URL.finditer(text):
        claims.append(m.group(1))
    if not GUARDS["claim_set"]:
        claims = claims[:1]
    return set(claims), (claims[0] if claims else "")


def load_specs(root: str) -> dict:
    """app -> {'claims': set, 'primary': slug, 'path': rel}."""
    out = {}
    for p in sorted(glob.glob(os.path.join(root, "openspec", "specs",
                                           "template-*", "spec.md"))):
        app = os.path.basename(os.path.dirname(p))[len("template-"):]
        try:
            text = open(p, encoding="utf-8", errors="replace").read()
        except OSError:
            continue
        claims, primary = spec_claims(text)
        out[app] = {"claims": claims, "primary": primary,
                    "path": os.path.relpath(p, root)}
    return out


def claims_slug(spec: dict | None, slug: str, known: set[str]) -> bool:
    """Does this app's spec claim `slug` (exact, else normalised)?"""
    if not spec:
        return False
    if slug in spec["claims"]:
        return True
    for c in spec["claims"]:
        if norm(c) == norm(slug) and (not GUARDS["spec_scope"] or c in known):
            return True
        # a family-relative preview path (`theme/bootstrap/<slug>/`) yields the
        # bare slug as its last segment already; a `bac/<slug>` style path does
        # too. Guard against a normalised false positive on a short slug.
        if norm(c) == norm(slug) and not GUARDS["spec_scope"]:
            return True
    return False


# ------------------------------------------------------------- classification
def classify(slug: str, rows: list[dict], specs: dict, known: set[str]) -> dict:
    """(bucket, note) for one slug — the whole judgement, no I/O."""
    apps: list[str] = []
    for r in rows:
        if r["app"] and r["app"] not in apps:
            apps.append(r["app"])
    rec = {"slug": slug, "rows": len(rows), "lines": [r["line"] for r in rows],
           "names": sorted({r["name"] for r in rows}),
           "cats": len({r["cat"] for r in rows}), "apps": apps,
           "claimers": [], "stale": [], "notes": [], "bucket": "", "flags": []}

    if not apps:
        rec["bucket"] = "NO-APP"
        rec["notes"].append(("APP-LINK-MISSING", ""))
        return rec
    # the axis' subject is the SECOND row: one row carries no multiplicity claim
    if not GUARDS["row_multi"] or len(rows) < 2:
        rec["bucket"] = "SINGLE-ROW"
        return rec

    rec["claimers"] = [a for a in apps if claims_slug(specs.get(a), slug, known)]
    rec["stale"] = [a for a in apps if a not in rec["claimers"]]
    missing = [a for a in apps if a not in specs]
    for a in missing:
        rec["notes"].append(("APP-SPEC-MISSING", a))

    if len(apps) == 1:
        if rec["claimers"]:
            rec["bucket"] = "CONSISTENT"
        else:
            rec["bucket"] = "SPEC-STALE"
            rec["flags"].append(("SPEC-STALE", apps[0]))
    elif len(rec["claimers"]) >= 2:
        rec["bucket"] = "DUPLICATE"
        rec["flags"].append(("DUPLICATE-DESIGN", ",".join(rec["claimers"])))
    elif len(rec["claimers"]) == 1:
        rec["bucket"] = "ROW-POINTER"
        rec["flags"].append(("ROW-POINTER", "%s->%s" % (",".join(rec["stale"]),
                                                       rec["claimers"][0])))
    else:
        rec["bucket"] = "SLUG-ORPHAN"
        rec["flags"].append(("SLUG-ORPHAN", ",".join(apps)))

    # provenance ambiguity: a spec that also claims a sibling of the same stem
    for a in rec["claimers"]:
        sibs = [c for c in specs[a]["claims"]
                if c != slug and stem(c) == stem(slug)]
        if sibs:
            rec["notes"].append(("STEM-SHARED", "%s:%s" % (a, ",".join(sorted(sibs)))))
    return rec


def audit(root: str = ".") -> dict:
    rows = load_rows(os.path.join(root, "TEMPLATES.md"))
    idx = slug_index(rows)
    known = set(idx)
    specs = load_specs(root)
    adir = os.path.join(root, "apps")
    apps = {d for d in os.listdir(adir)
            if os.path.isdir(os.path.join(adir, d))} if os.path.isdir(adir) else set()

    out, counts, flags, notes = [], {}, [], {}
    for slug in sorted(idx, key=lambda s: idx[s][0]["line"]):
        rec = classify(slug, idx[slug], specs, known)
        if rec["bucket"] != "SINGLE-ROW":
            for a in rec["apps"]:
                if a not in apps:
                    rec["notes"].append(("APP-MISSING", a))
        else:
            rec["bucket"] = "SINGLE-ROW"
        counts[rec["bucket"]] = counts.get(rec["bucket"], 0) + 1
        flags += [(f[0], slug, f[1]) for f in rec["flags"]]
        for n in rec["notes"]:
            notes[n[0]] = notes.get(n[0], 0) + 1
        out.append(rec)
    multi = [r for r in out if r["bucket"] != "SINGLE-ROW"]
    return {"slugs": len(idx), "rows": len(rows), "multi_slugs": len(multi),
            "extra_rows": sum(r["rows"] - 1 for r in multi),
            "counts": counts, "flags": flags, "notes": notes, "slugs_detail": out}


# ------------------------------------------------------------------ network
def fetch(url: str) -> tuple[int, str]:
    try:
        with urllib.request.urlopen(urllib.request.Request(url, headers=UA),
                                    timeout=35) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception:                      # noqa: BLE001 — a dead demo is data
        return 0, ""


# The 404 family's demo lives outside the preview portal (one prep already
# records the probe: `theme/colorlib-error-404-10/` is 404, `/etc/404/` is 200).
SPECIAL = {"colorlib-error-404-": "https://colorlib.com/etc/404/%s/"}


def preview_url(slug: str) -> str:
    for prefix, tpl in SPECIAL.items():
        if slug.startswith(prefix):
            url = tpl % slug
            if fetch(url)[0] == 200:
                return url
    for fam in FAMILIES:
        url = "https://preview.colorlib.com/%s%s/" % (fam, slug)
        if fetch(url)[0] == 200:
            return url
    return "https://preview.colorlib.com/theme/%s/" % slug


def plain(doc: str) -> str:
    doc = re.sub(r"<script.*?</script>|<style.*?</style>", " ", doc,
                 flags=re.S | re.I)
    return re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", doc))).strip()


def app_copy(app_dir: str) -> list[str]:
    chunks = []
    for dp, _, fs in os.walk(app_dir):
        for f in fs:
            if f.endswith((".tsx", ".ts")):
                chunks.append(open(os.path.join(dp, f), encoding="utf-8",
                                   errors="replace").read())
    text = "\n".join(chunks)
    out, seen = [], set()
    for m in re.finditer(r'"([^"\n]{8,160})"|\'([^\'\n]{8,160})\'|>\s*([^<>{}\n]{8,160}?)\s*<',
                         text):
        s = next((g for g in m.groups() if g), "").strip()
        if len(s.split()) < 2 or re.match(r"^(https?:|--|M\d)", s):
            continue
        if re.search(r"[{}<>]|\b(px|rem|flex|grid|rounded|hover|text-\w|bg-\w)\b", s):
            continue
        k = norm(s)
        if k and k not in seen:
            seen.add(k)
            out.append(s)
    return out


def hits(copy: list[str], body: str) -> list[str]:
    low = body.lower()
    return [s for s in copy if re.sub(r"\s+", " ", s.lower()) in low]


def adjudicate(root: str, rec: dict, specs: dict, pause: float = 0.4) -> dict:
    """Score each credited app's own copy against the design's preview(s).

    Two numbers per (candidate, app), and they are not interchangeable:
      hits — phrases of the app that appear in that body
      excl — phrases that appear in THAT body and in no other body fetched here
    `hits` alone is not provenance: every ColorLib theme carries the same
    boilerplate ("Read more", "Get Started", "Email Address"), which is how a
    raw count crowned the wrong sibling on -24f. Identity is `excl`.
    """
    cands = [rec["slug"]]
    # A SPEC-STALE / ROW-POINTER slug has a second suspect: the design the app's
    # spec names. Fetching it is what makes `excl` a comparison and not a count.
    for a in rec["apps"]:
        pr = (specs.get(a) or {}).get("primary")
        if pr and pr not in cands:
            cands.append(pr)
    bodies: dict = {}
    scores: dict = {}
    for cand in cands:
        url = preview_url(cand)
        st, doc = fetch(url)
        time.sleep(pause)
        scores[cand] = {"url": url, "status": st, "apps": {}}
        if st == 200:
            bodies[cand] = plain(doc)
    # a missing app folder yields no files, so no guard is needed here — and a
    # guard would let a fixture (or a renamed app) silently score 0 hits.
    copies = {a: app_copy(os.path.join(root, "apps", a)) for a in rec["apps"]}

    for cand, body in bodies.items():
        others = [b for c, b in bodies.items() if c != cand]
        for a, copy in copies.items():
            hs = hits(copy, body)
            ex = [p for p in hs if not any(p.lower() in o.lower() for o in others)]
            scores[cand]["apps"][a] = {"copy": len(copy), "hits": len(hs),
                                       "excl": len(ex), "examples": ex[:3] or hs[:3]}
    rec["scores"] = scores

    def excl(cand: str, app: str) -> int:
        return scores.get(cand, {}).get("apps", {}).get(app, {}).get("excl", 0)

    def shared_phrases(app_a: str, app_b: str, cand: str) -> int:
        body = bodies.get(cand, "")
        if not body:
            return 0
        low = body.lower()
        sa = {norm(p) for p in copies.get(app_a, []) if p.lower() in low}
        sb = {norm(p) for p in copies.get(app_b, []) if p.lower() in low}
        return len(sa & sb)

    if rec["bucket"] == "DUPLICATE":
        pairs = [(a, b) for i, a in enumerate(rec["apps"]) for b in rec["apps"][i + 1:]]
        ok = [p for p in pairs if excl(rec["slug"], p[0]) >= MIN_EVIDENCE
              and excl(rec["slug"], p[1]) >= MIN_EVIDENCE
              and shared_phrases(p[0], p[1], rec["slug"]) >= MIN_EVIDENCE]
        rec["pairs"] = {"%s+%s" % p: shared_phrases(p[0], p[1], rec["slug"])
                        for p in pairs}
        rec["verdict"] = ("CONFIRMED" if ok else
                          "ONE-SIDED" if any(excl(rec["slug"], a) >= MIN_EVIDENCE
                                             for a in rec["apps"]) else "UNRESOLVED")
        if not bodies:
            rec["verdict"] = "UNRESOLVED"
            rec["reason"] = "preview-not-live"
    elif rec["bucket"] == "ROW-POINTER":
        claimer = rec["claimers"][0]
        # A single exclusive phrase is noise (every body shares one odd string);
        # the stale side must MATCH the design, not merely touch it.
        stale_hits = [a for a in rec["stale"]
                      if excl(rec["slug"], a) >= MIN_EVIDENCE]
        rec["verdict"] = ("CONFIRMED" if excl(rec["slug"], claimer) >= MIN_EVIDENCE
                          and not stale_hits else
                          "POINTER-WRONG" if stale_hits else "UNRESOLVED")
        if not bodies:
            rec["verdict"] = "UNRESOLVED"
            rec["reason"] = "preview-not-live"
    elif rec["bucket"] == "SPEC-STALE":
        # WHICH record is stale: the design the app's copy matches EXCLUSIVELY.
        # A dead preview cannot win by scoring 0 — it just leaves that side
        # unmeasured, so the live side's exclusive count decides alone.
        app = rec["apps"][0]
        spec_slug = (specs.get(app) or {}).get("primary") or ""
        x_row, x_spec = excl(rec["slug"], app), excl(spec_slug, app)
        rec["compare"] = {"row_slug": rec["slug"], "row_excl": x_row,
                          "spec_slug": spec_slug, "spec_excl": x_spec}
        if x_row >= MIN_EVIDENCE and x_row >= x_spec:
            rec["verdict"] = "SPEC-PROVENANCE-STALE"
        elif x_spec >= MIN_EVIDENCE and x_spec >= MARGIN * max(x_row, 1):
            rec["verdict"] = "APP-WRONG-DESIGN"
        else:
            rec["verdict"] = "UNRESOLVED"
            rec["reason"] = ("row-preview-not-live"
                             if rec["slug"] not in bodies else "copy-too-generic")
    else:
        rec["verdict"] = "UNRESOLVED"
    return rec


# ------------------------------------------------------------------ self-test
def truthy(cond, msg) -> None:
    if not cond:
        raise AssertionError(msg)


def self_test() -> int:
    rows = [
        {"line": 1, "name": "Dup", "slug": "dup", "app": "one", "cat": "A"},
        {"line": 2, "name": "Dup", "slug": "dup", "app": "two", "cat": "B"},
        {"line": 3, "name": "Solo", "slug": "solo", "app": "one", "cat": "A"},
        {"line": 4, "name": "Solo", "slug": "solo", "app": "one", "cat": "B"},
        {"line": 5, "name": "Old", "slug": "old", "app": "one", "cat": "A"},
        {"line": 6, "name": "Old", "slug": "old", "app": "two", "cat": "B"},
        {"line": 7, "name": "Gone", "slug": "gone", "app": "one", "cat": "A"},
        {"line": 8, "name": "Gone", "slug": "gone", "app": "two", "cat": "B"},
    ]
    specs = {
        "one": {"claims": {"dup", "solo", "old", "other"}, "primary": "dup", "path": ""},
        "two": {"claims": {"dup"}, "primary": "dup", "path": ""},
    }
    known = {"dup", "solo", "old", "gone", "other"}
    idx = slug_index(rows)
    truthy(classify("dup", idx["dup"], specs, known)["bucket"] == "DUPLICATE",
           "two claimers -> DUPLICATE")
    truthy(classify("solo", idx["solo"], specs, known)["bucket"] == "CONSISTENT",
           "one app, claiming -> CONSISTENT")
    r = classify("old", idx["old"], specs, known)
    truthy(r["bucket"] == "ROW-POINTER", "one claimer -> ROW-POINTER")
    truthy(r["stale"] == ["two"], "the non-claiming app is the stale pointer")
    r = classify("gone", idx["gone"], specs, known)
    truthy(r["bucket"] == "SLUG-ORPHAN", "no claimer -> SLUG-ORPHAN")
    # a spec that does NOT claim its only app's slug
    specs2 = {"one": {"claims": {"other"}, "primary": "other", "path": ""}}
    truthy(classify("solo", idx["solo"], specs2, known)["bucket"] == "SPEC-STALE",
           "one app that does not claim -> SPEC-STALE")
    # claim extraction reads every provenance form
    claims, first = spec_claims(
        "- **Source slug:** `alpha`\nsee https://colorlib.com/wp/template/beta/\n"
        "`https://preview.colorlib.com/theme/bootstrap/gamma/`\n"
        "archive: downloads/free/delta.zip")
    truthy(claims >= {"alpha", "beta", "gamma", "delta"}, "all four forms read")
    truthy(first == "beta", "primary is the first wp/preview form")
    print("self-test: 8/8")
    return 0


# ---------------------------------------------------------------------- main
def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".")
    ap.add_argument("--json")
    ap.add_argument("--network", action="store_true")
    ap.add_argument("--only", help="comma-separated slugs (network mode)")
    ap.add_argument("--self-test", action="store_true")
    ap.add_argument("--no-guards", action="store_true")
    a = ap.parse_args()
    if a.self_test:
        return self_test()
    if a.no_guards:
        for k in GUARDS:
            GUARDS[k] = False
    rep = audit(a.root)
    c = rep["counts"]
    print("rows=%d slugs=%d multi-slug=%d extra-rows=%d"
          % (rep["rows"], rep["slugs"], rep["multi_slugs"], rep["extra_rows"]))
    for k in ("CONSISTENT", "SPEC-STALE", "DUPLICATE", "ROW-POINTER",
              "SLUG-ORPHAN", "NO-APP", "SINGLE-ROW"):
        if c.get(k):
            print("  %-12s %d" % (k, c[k]))
    print("flags=%d" % len(rep["flags"]))
    for k, v in sorted(rep["notes"].items()):
        print("  note %s: %d" % (k, v))
    if a.network:
        only = {x.strip() for x in a.only.split(",")} if a.only else None
        todo = [r for r in rep["slugs_detail"]
                if r["bucket"] in ("DUPLICATE", "ROW-POINTER", "SPEC-STALE")
                and (not only or r["slug"] in only)]
        specs = load_specs(a.root)
        print("\nadjudicating %d slug(s) against the live previews:" % len(todo))
        for rec in todo:
            rec = adjudicate(a.root, rec, specs)
            flat = {c: {x: "%d/%d" % (y["hits"], y["excl"])
                        for x, y in d["apps"].items()}
                    for c, d in rec["scores"].items()}
            print("  %-18s %-11s %-22s %s" % (rec["slug"], rec["bucket"],
                                              rec.get("verdict", "?"), flat))
            for cand, d in rec["scores"].items():
                for x, y in d["apps"].items():
                    for e in y["examples"][:1]:
                        print("       %-9s %-13s ~ %r" % (x, cand[:13], e[:64]))
    if a.json:
        with open(a.json, "w", encoding="utf-8") as fh:
            json.dump(rep, fh, indent=1)
        print("\njson -> %s" % a.json)
    return 0 if not rep["flags"] else 1


if __name__ == "__main__":
    sys.exit(main())
