#!/usr/bin/env python3
"""verify-marker-drift.py — the ALIAS-MARKER layer of `docs/templates/` preps.

A prep whose design shipped under ANOTHER app name carries a marker comment:

    <!-- prep-status: shipped-as=<app> -->

1,417 prep dirs carry one, spread over 12 file names (`tasks.md` 780, `todo.md`
280, `design-notes.md` 235, `notes.md` 126, `README.md` 54, `TODO.md` 13, …).
The marker is the only machine-readable link from a prep to the app it
produced, so a wrong marker sends every later reader (implementer, rename
stream, marketplace curator) to an app that recreates a DIFFERENT design.

Nothing compared the two sides of that link before this axis:

* `verify-brief-spec.py` (CLOSED axis) checks only that the target app EXISTS.
  It caught `oraxol` after a rename and declared the corpus clean; it cannot
  see a target that exists while recreating the wrong design.
* `verify-spec-row-mismatch.py` walks APPS vs rows,
  `verify-catalog-collisions.py` / `verify-sibling-pairs.py` walk catalogue keys.

## Identity is the DEMO, not the slug

ColorLib lists one design under several slugs and one slug under a family
directory. `scripts/data/colorlib-demos.json` is the preview host's own
`catalog-products-*.js` map (1,889 slug -> demo path, vendored with the source
sha256); `colorlib-preview-aliases.json` is its 72-entry alias map. Identity is
the LAST directory of the resolved demo path, so

    login-form-v3        -> /etc/lf/Login_v3/index.html      -> login_v3
    Login_v3  (app side) -> (no product entry, family norm)  -> login_v3
    bootstrap-footer-04  -> /theme/bft/bootstrap-footer-04   -> bootstrap-footer-04
    bft       (app side) -> family norm                      -> bft   [unresolved]
    carrentals           -> /theme/carrentals                -> carrentals
    car-rental           -> family norm                      -> carrental   ≠

Digits are identity, hyphens are spelling (`carrental` vs `carrentals`,
`slim` vs `slim2` are DIFFERENT designs — measured live `<title>`s differ).

## Buckets (partition every marker dir exactly once)

  AGREE               both sides resolve to the same demo .............. ok
  TARGET-NO-APP       marker names an app that does not exist ......... FLAG
                      (+ FIX when exactly one app recreates the brief)
  TARGET-DRIFT        target app exists, recreates another design ..... FLAG
                      (+ FIX when exactly one app recreates the brief)
  CONF-MARKER         two different targets inside one prep dir ....... FLAG
  NO-BRIEF-SLUG       the prep's spec names no source ................. note
  NO-APP-SLUG         the target app's spec names no source ........... note
  UNRESOLVED          one side has no demo/path (e.g. `bft`) .......... note
  DOCS-CITE-DRIFT     spec and the prep's own docs assert 2 designs ... note
  ROW-MULTI           >1 prep dir legitimately claims one app ......... note

`DOCS-CITE-DRIFT` is a NOTE on purpose: on 2026-10-24 a "correction" pass read
ONE screenshot basename in a prep's docs and flipped two correct markers
(`cruiseo`, `tidecrest`) to the sibling design. A citation is evidence, not a
verdict; the spec's own section list is what the notes were written from.

Usage
  python3 scripts/verify-marker-drift.py                    # census + flags
  python3 scripts/verify-marker-drift.py --show TARGET-DRIFT --verbose
  python3 scripts/verify-marker-drift.py --md /tmp/drift.md --json /tmp/drift.json
  python3 scripts/verify-marker-drift.py --census           # tasks.md census
  python3 scripts/verify-marker-drift.py --no-catalog --no-aliases   # guard A/B
  python3 scripts/verify-marker-drift.py --prep-root DIR    # a git worktree

Read-only: writes nothing but the optional `--json` / `--md` report.
Exit code: 0 = clean, 1 = flags, 2 = bad usage.
"""
from __future__ import annotations

import argparse
import collections
import json
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
DEFAULT_ALIASES = os.path.join(HERE, "data", "colorlib-preview-aliases.json")
DEFAULT_CATALOG = os.path.join(HERE, "data", "colorlib-demos.json")

MARKER_RX = re.compile(r"<!--\s*prep-status:\s*shipped-as=([A-Za-z0-9._-]+)\s*-->")

# Provenance forms, ordered by how strongly the line ASSERTS "this is my source".
# A bare "first wp/template token" scan is not safe: `tonic`'s Purpose states its
# design is `slim` and then adds "…\"Slim2\" … is a DIFFERENT ColorLib template,
# `wp/template/slim2/`, not this one" BEFORE the spec names its own source — the
# naive scan read `slim2` and invented a drift flag (2026-10-25, 18 such FPs).
# The generic scan runs last and skips negatively-framed lines.
NEG_FRAME_ON = True          # GATE: the controls switch this off to prove it bites
NEG_FRAME = re.compile(r"\b(DIFFERENT|not this one|sibling|unrelated|instead of|"
                       r"NOT this|other design)\b")
SLUG_RXS = (
    re.compile(r"\*\*Source slug:\*\*\s*`?([A-Za-z0-9._-]+)`?"),
    re.compile(r"\*\*Source URL:\*\*\s*(?:<)?(?:https?://)?[^\s>]*?wp/template/([^/`)\s]+)/"),
    re.compile(r"\*\*Source:\*\*[^\n]*?wp/template/([^/`)\s]+)/"),
    re.compile(r"\*\*ColorLib page:\*\*\s*(?:<)?(?:https?://)?[^\s>]*?wp/template/([^/`)\s]+)/"),
    re.compile(r"\*\*Original:\*\*[^\n]*?wp/template/([^/`)\s]+)/"),
    re.compile(r"\*\*Preview URL:\*\*[^\n]*?(?:https?://)?[^\s>]*?colorlib\.com/"
               r"(?:theme|etc)/[^\s>`)]+"),
    re.compile(r"Recreation of ColorLib[^\n]*?wp/template/([^/`)\s]+)/"),
    re.compile(r"/etc/(?:cs|bwiz|lf|bforms|regform|searchf|bootstrap-sidebar)/"
               r"([^/`)\s]+)/"),
)
GENERIC_WP = re.compile(r"wp/template/([^/`)\s]+)/")
GENERIC_DEMO = re.compile(r"colorlib\.com/(?:theme|etc)/([^\s`)>'\"]+)")
FAMILY_KEY = {"bootstrap", "bb", "bac", "sidebar", "bft", "etc", "cs", "bwiz", "lf"}
SKIP_DIRS = {"node_modules", ".git"}


# --------------------------------------------------------------- identity ---
def norm_letters(slug) -> str:
    """Spelling-insensitive form (hyphens/underscores/case/dots are spelling)."""
    return re.sub(r"[^a-z0-9]", "", (slug or "").lower())


def from_demo_path(path: str) -> str:
    """Last DIRECTORY of a demo path: `/etc/lf/Login_v3/index.html` -> `Login_v3`."""
    p = path.split("?")[0].rstrip("/")
    segs = [s for s in p.split("/") if s]
    while segs and re.search(r"\.[A-Za-z0-9]{1,5}$", segs[-1]):   # drop index.html
        segs.pop()
    return segs[-1] if segs else ""


def family_norm(slug) -> str:
    """Fold the form-family slug spellings (`login-form-v3` vs `Login_v3`)."""
    s = norm_letters(slug)
    s = re.sub(r"^colorlib", "", s)
    for a, b in (("loginform", "login"), ("signupform", "signup"),
                 ("regform", "reg"), ("searchform", "search")):
        s = s.replace(a, b)
    return s


class Ident:
    """Resolve a ColorLib slug (or an app-side label) to a demo identity."""

    def __init__(self, catalog: dict, aliases: dict, use_catalog=True, use_aliases=True):
        self.catalog = catalog if use_catalog else {}
        self.aliases = aliases if use_aliases else {}
        self.how = {}                                   # slug -> resolution channel

    def key(self, slug, _depth=0):
        if not slug:
            return ""
        s = slug.strip().strip("`<>").lower()
        if _depth > 3:
            return family_norm(s)
        if s in self.catalog:
            seg = from_demo_path(self.catalog[s])
            if seg and seg.lower() not in FAMILY_KEY:
                self.how[slug] = "catalog"
                return family_norm(seg)
        if s in self.aliases:
            self.how[slug] = "alias"
            return self.key(self.aliases[s], _depth + 1)
        self.how[slug] = "slug"
        return family_norm(s)

    def resolved(self, slug) -> bool:
        """True when the slug is a real catalogue product (or an alias of one)."""
        if not slug:
            return False
        s = slug.strip().strip("`<>").lower()
        return s in self.catalog or s in self.aliases


def load_json(path: str) -> dict:
    if not path or not os.path.exists(path):
        return {}
    try:
        return json.load(open(path, encoding="utf-8"))
    except Exception:
        return {}


# ----------------------------------------------------------------- corpus ---
def prep_dirs(root: str) -> list:
    base = os.path.join(root, "docs", "templates")
    if not os.path.isdir(base):
        return []
    return sorted(d for d in os.listdir(base)
                  if os.path.isdir(os.path.join(base, d)) and d not in SKIP_DIRS)


def read_markers(dirpath: str):
    """target -> sorted file names carrying the marker (all *.md, 12 names)."""
    found = collections.defaultdict(set)
    for fn in sorted(os.listdir(dirpath)):
        if not fn.endswith(".md"):
            continue
        try:
            txt = open(os.path.join(dirpath, fn), encoding="utf-8", errors="replace").read()
        except OSError:
            continue
        for m in MARKER_RX.finditer(txt):
            found[m.group(1).lower()].add(fn)
    return {k: sorted(v) for k, v in found.items()}


def _demo_from_line(line: str):
    """Last path segment of the first colorlib demo URL on this line."""
    m = GENERIC_DEMO.search(line)
    if not m:
        return None
    seg = from_demo_path(m.group(1))
    if seg.lower() in FAMILY_KEY:                  # `theme/bootstrap/` family root
        tail = m.group(1)[m.group(1).find(seg) + len(seg):].rstrip("/")
        seg = from_demo_path(tail) if tail else seg
    return seg or None


def spec_slug(root: str, name: str):
    """The prep's own source slug, from its spec's provenance lines."""
    p = os.path.join(root, "openspec", "specs", f"template-{name}", "spec.md")
    if not os.path.exists(p):
        return None
    txt = open(p, encoding="utf-8", errors="replace").read()
    for rx in SLUG_RXS:
        for m in rx.finditer(txt):
            if rx is SLUG_RXS[5]:                  # the Preview-URL form: read the path
                seg = _demo_from_line(m.group(0))
                if seg:
                    return seg
                continue
            return m.group(1)
    for line in txt.splitlines():
        if NEG_FRAME_ON and NEG_FRAME.search(line):
            continue
        m = GENERIC_WP.search(line)
        if m:
            return m.group(1)
    return None


def docs_citations(dirpath: str):
    """(asserted source slug, most-cited slug) from a prep's own docs.

    Kept apart on purpose: an explicit `**Source URL:** …/wp/template/<x>/` line
    ASSERTS a source, while a screenshot basename or a prose mention is only
    evidence — one such basename flipped two correct markers on 2026-10-24.
    """
    assert_url, others = None, collections.Counter()
    for fn in sorted(os.listdir(dirpath)):
        if not fn.endswith(".md"):
            continue
        txt = open(os.path.join(dirpath, fn), encoding="utf-8", errors="replace").read()
        if assert_url is None:
            m = SLUG_RXS[1].search(txt)
            if m:
                assert_url = m.group(1)
        for m in GENERIC_WP.finditer(txt):
            line = txt[max(0, txt.rfind("\n", 0, m.start()) + 1):txt.find("\n", m.end())]
            if not (NEG_FRAME_ON and NEG_FRAME.search(line)):
                others[m.group(1)] += 1
    return assert_url, (others.most_common(1)[0][0] if others else None)


def shipped_apps(root: str) -> dict:
    """lower-cased name -> real `apps/` dir name (markers are read lower-cased)."""
    base = os.path.join(root, "apps")
    if not os.path.isdir(base):
        return {}
    return {d.lower(): d for d in os.listdir(base)
            if os.path.isdir(os.path.join(base, d))}


# ------------------------------------------------------------- classifier ---
def classify(root: str, ident: Ident):
    apps = shipped_apps(root)
    app_slug_cache: dict = {}

    def app_slug(a):
        if a not in app_slug_cache:
            app_slug_cache[a] = spec_slug(root, a)
        return app_slug_cache[a]

    by_key = collections.defaultdict(set)          # demo key -> apps recreating it
    for a in sorted(apps.values()):
        k = ident.key(app_slug(a))
        if k and ident.resolved(app_slug(a)):
            by_key[k].add(a)

    rows, buckets = [], collections.Counter()
    flags, notes = [], []
    claims = collections.Counter()

    for d in prep_dirs(root):
        dirpath = os.path.join(root, "docs", "templates", d)
        markers = read_markers(dirpath)
        if not markers:
            continue
        brief = spec_slug(root, d)
        bkey = ident.key(brief)
        docs_url, _docs_top = docs_citations(dirpath)
        dkey = ident.key(docs_url)
        split = docs_url if (docs_url and bkey and dkey and dkey != bkey) else ""

        if len(markers) > 1:
            flags.append(dict(dir=d, bucket="CONF-MARKER", target=",".join(sorted(markers)),
                              brief=brief, app_design="", suggestion="", candidates=[],
                              docs=docs_url, split=split, files=markers))
            buckets["CONF-MARKER"] += 1
            rows.append(dict(dir=d, bucket="CONF-MARKER", target=",".join(sorted(markers)),
                             brief=brief, app_design="", docs=docs_url or "", split=split,
                             files=markers))
            continue

        target = next(iter(markers))
        claims[target] += 1
        tslug = app_slug(apps[target]) if target in apps else None
        suggestion, cand = "", sorted(by_key.get(bkey, set())) if bkey else []

        if target not in apps:
            bucket = "TARGET-NO-APP"
            suggestion = cand[0] if len(cand) == 1 and ident.resolved(brief) else ""
            flags.append(dict(dir=d, bucket=bucket, target=target, brief=brief,
                              app_design="", suggestion=suggestion, candidates=cand,
                              docs=docs_url, split=split, files=markers))
        elif not brief:
            bucket = "NO-BRIEF-SLUG"
            notes.append(dict(dir=d, bucket=bucket, target=target, brief=None))
        elif not tslug:
            bucket = "NO-APP-SLUG"
            notes.append(dict(dir=d, bucket=bucket, target=target, brief=brief))
        elif ident.key(tslug) == bkey:
            bucket = "AGREE"
            if split:
                notes.append(dict(dir=d, bucket="DOCS-CITE-DRIFT", target=target,
                                  brief=brief, docs=split))
        elif not (ident.resolved(tslug) and ident.resolved(brief)):
            # one side has no catalogue product (a family label like `bft`): the
            # comparison is unmeasured, not a defect.
            bucket = "UNRESOLVED"
            notes.append(dict(dir=d, bucket=bucket, target=target, brief=brief,
                              app_design=tslug))
        else:
            bucket = "TARGET-DRIFT"
            suggestion = cand[0] if len(cand) == 1 else ""
            flags.append(dict(dir=d, bucket=bucket, target=target, brief=brief,
                              app_design=tslug, suggestion=suggestion, candidates=cand,
                              docs=docs_url, split=split, files=markers))
        buckets[bucket] += 1
        rows.append(dict(dir=d, bucket=bucket, target=target, brief=brief,
                         app_design=tslug or "", docs=docs_url or "", split=split,
                         files=markers))

    for app, n in claims.items():
        if n > 1:
            notes.append(dict(dir="*", bucket="ROW-MULTI", target=app, count=n))
    assert sum(buckets.values()) == len(rows), "buckets must partition the corpus"
    return rows, buckets, flags, notes, claims


# ------------------------------------------------------------ tasks census --
def tasks_census(root: str) -> dict:
    """Checkbox state of every prep's task list vs whether its app shipped.

    Convention (workflow step 6): boxes are ticked only after the implementation
    ships. 1,417 alias preps already carry a banner saying the unchecked boxes
    are prep history; this sizes the rest.
    """
    apps = shipped_apps(root)
    out = collections.Counter()
    rows = []
    for d in prep_dirs(root):
        dirpath = os.path.join(root, "docs", "templates", d)
        markers = read_markers(dirpath)
        app = next(iter(markers)) if len(markers) == 1 else (d if not markers else "")
        tf = next((f for f in ("tasks.md", "todo.md", "TODO.md")
                   if os.path.exists(os.path.join(dirpath, f))), None)
        if tf is None:
            out["NO-TASK-FILE"] += 1
            continue
        txt = open(os.path.join(dirpath, tf), encoding="utf-8", errors="replace").read()
        open_boxes = len(re.findall(r"^\s*- \[ \]", txt, re.M))
        done_boxes = len(re.findall(r"^\s*- \[[xX]\]", txt, re.M))
        banner = ("prep history" in txt) or ("SHIPPED-UNDER" in txt)
        shipped = bool(app) and app in apps
        if not open_boxes and not done_boxes:
            out["NO-CHECKBOX-GRAMMAR"] += 1
        elif not shipped:
            out["PENDING"] += 1
        elif not open_boxes:
            out["SHIPPED-TICKED"] += 1
        elif banner:
            out["SHIPPED-BANNERED"] += 1
        else:
            out["SHIPPED-STALE"] += 1
            rows.append(dict(dir=d, app=app, file=tf, open=open_boxes, done=done_boxes))
    out["DIRS"] = len(prep_dirs(root))
    return dict(buckets=dict(out), stale=sorted(rows, key=lambda r: -r["open"]))


# ------------------------------------------------------------------- main ---
def main(argv=None) -> int:
    ap = argparse.ArgumentParser(description="Audit `prep-status: shipped-as=` markers.")
    ap.add_argument("--prep-root", default=os.path.dirname(HERE))
    ap.add_argument("--aliases", default=DEFAULT_ALIASES)
    ap.add_argument("--catalog", default=DEFAULT_CATALOG)
    ap.add_argument("--no-aliases", action="store_true",
                    help="ignore the 72-entry alias map (guard A/B)")
    ap.add_argument("--no-catalog", action="store_true",
                    help="ignore the 1,889-entry demo catalogue (guard A/B)")
    ap.add_argument("--show", default="")
    ap.add_argument("--verbose", action="store_true")
    ap.add_argument("--json", default="")
    ap.add_argument("--md", default="")
    ap.add_argument("--census", action="store_true", help="tasks.md checkbox census")
    ap.add_argument("--limit", type=int, default=0)
    a = ap.parse_args(argv)
    root = os.path.abspath(a.prep_root)
    if not os.path.isdir(os.path.join(root, "docs", "templates")):
        print(f"not a prep tree: {root}", file=sys.stderr)
        return 2

    if a.census:
        cen = tasks_census(root)
        print("docs/templates dirs:", cen["buckets"].get("DIRS", 0))
        for k, v in sorted(cen["buckets"].items()):
            if k != "DIRS":
                print(f"  {k:22} {v}")
        for r in cen["stale"][: (a.limit or 10)]:
            print(f"  STALE {r['dir']:22} app={str(r['app']):20} "
                  f"open={r['open']:3} done={r['done']:3}")
        if a.json:
            json.dump(cen, open(a.json, "w"), indent=1)
        return 0

    cat = load_json(a.catalog)
    aliases = load_json(a.aliases)
    ident = Ident(cat.get("demos", {}), aliases.get("aliases", {}),
                  use_catalog=not a.no_catalog, use_aliases=not a.no_aliases)
    print(f"prep dirs: {len(prep_dirs(root))} | catalogue: "
          f"{len(cat.get('demos', {}))} | aliases: {len(aliases.get('aliases', {}))}")

    rows, buckets, flags, notes, claims = classify(root, ident)
    print(f"marker dirs: {len(rows)}")
    for k, v in sorted(buckets.items()):
        print(f"  {k:16} {v}")
    print(f"flags: {len(flags)}")

    shown = [f for f in flags if not a.show or f["bucket"] == a.show]
    for f in shown[: (a.limit or 50)]:
        extra = ""
        if f.get("app_design"):
            extra += f" app_design={f['app_design']}"
        if f.get("suggestion"):
            extra += f"  FIX -> {f['suggestion']}"
        elif f.get("candidates"):
            extra += f"  candidates={','.join(f['candidates'])}"
        if f.get("split"):
            extra += f"  DOCS-ASSERT={f['split']}"
        print(f"{f['bucket']:15} {f['dir']:22} target={f['target']:20} "
              f"brief={f['brief']}{extra}")
        if a.verbose:
            print(f"                files={','.join(sum(f['files'].values(), []))}")

    if a.verbose:
        notes_ct = collections.Counter(n["bucket"] for n in notes)
        print("notes: " + ", ".join(f"{k}={v}" for k, v in sorted(notes_ct.items())))
        multi = sorted([n for n in notes if n["bucket"] == "ROW-MULTI"],
                       key=lambda n: -n["count"])[:6]
        if multi:
            print("ROW-MULTI top: " + ", ".join(f"{n['target']}×{n['count']}" for n in multi))
        for n in [x for x in notes if x["bucket"] in ("UNRESOLVED", "DOCS-CITE-DRIFT")][:10]:
            print(f"  note {n['bucket']:15} {n['dir']:22} brief={n['brief']}")

    if a.json:
        json.dump(dict(buckets=dict(buckets), rows=rows, flags=flags, notes=notes),
                  open(a.json, "w"), indent=1)
    if a.md:
        with open(a.md, "w", encoding="utf-8") as fh:
            fh.write("| bucket | prep dir | marker target | prep's design | app's design | fix |\n")
            fh.write("| --- | --- | --- | --- | --- | --- |\n")
            for f in flags:
                fh.write(f"| {f['bucket']} | `{f['dir']}` | `{f['target']}` | "
                         f"`{f['brief']}` | `{f.get('app_design') or '—'}` | "
                         f"`{f.get('suggestion') or '—'}` |\n")
    return 1 if flags else 0


if __name__ == "__main__":
    sys.exit(main())
