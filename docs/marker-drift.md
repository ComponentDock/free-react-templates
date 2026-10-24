# Alias markers — 1,417 preps, and the app each one actually points at

A prep whose design shipped under **another** app name carries a marker comment:

```html
<!-- prep-status: shipped-as=<app> -->
```

**1,417 prep dirs carry one** (of 3,240 under `docs/templates/`), spread over 12
file names — `tasks.md` 780, `todo.md` 280, `design-notes.md` 235, `notes.md`
126, `README.md` 54, `TODO.md` 13, `implementation-notes.md` 5, `design.md` 4,
`outline.md` 4, `research.md` 1, `replication-research.md` 1, `prep.md` 1 — with
no dir carrying two different targets.

The marker is the only machine-readable link from a prep to the app it produced:
the implementer reads it to skip the item, the rename stream reads it to know
what a rename breaks, and the marketplace reads it to know which app a prep
describes. Until this axis, **nothing compared the two sides of that link**.

* `verify-brief-spec.py` (CLOSED axis) checks only that the target app EXISTS.
  It caught `oraxol` after a rename and declared the corpus clean — it cannot
  see a target that exists while recreating the *wrong* design. On this run it
  was red again for a *second* rename (`biscuit` → `pawpal`, which no longer
  exists), so "closed" has to mean "re-runnable", not "done".
* `verify-spec-row-mismatch.py` walks APPS vs rows; `verify-catalog-collisions.py`
  and `verify-sibling-pairs.py` walk catalogue keys. The prep→app edge was unread.

Read-only census + fixer:

```sh
python3 scripts/verify-marker-drift.py                # census + flags
python3 scripts/verify-marker-drift.py --verbose      # + notes (ROW-MULTI, docs splits)
python3 scripts/verify-marker-drift.py --md /tmp/md.md --json /tmp/md.json
python3 scripts/verify-marker-drift.py --census       # tasks.md checkbox census
python3 scripts/verify-marker-drift.py --no-catalog --no-aliases   # guard A/B
python3 scripts/verify-marker-drift-controls.py       # 23/23 (7 GATE)
python3 scripts/fix-marker-drift.py --dry-run         # then --apply
python3 scripts/fix-shipped-banners.py --dry-run      # then --apply
```

Measured state (`main` @ `7565ba192`, prep queue exhausted — `find-next-unprepped.py`
→ `open items: 0`), **after** this run's three marker fixes (before: `TARGET-NO-APP`
1 · `TARGET-DRIFT` 2 · `AGREE` 1,297):

```
prep dirs 3,240 · marker dirs 1,417 · flags 3 (before fixes)
  AGREE           1300   both sides resolve to one demo
  NO-BRIEF-SLUG     82   the prep's spec names no source            note
  NO-APP-SLUG       34   the target app's spec names no source      note
  UNRESOLVED         1   one side has no catalogue product          note
  ROW-MULTI        325   >1 prep dir claims one app, correctly      note
  TARGET-NO-APP      1   marker names an app that is gone           FLAG
  TARGET-DRIFT       2   target app recreates another design        FLAG
```

## Identity is the demo, not the slug

Slugs are not identities: ColorLib lists one design under several slugs and one
slug under a family directory. Two vendored maps from the preview host's own
`assets/js/catalog-products-20261009-trace-developer.js` (sha256 `0379ba65…`)
settle it:

* `scripts/data/colorlib-demos.json` — 1,889 slug → demo path (70 KB);
* `scripts/data/colorlib-preview-aliases.json` — the 72-entry
  `window.colorlibPreviewAliases` map.

Identity = the **last directory** of the resolved demo path, then a family fold
(hyphens/underscores/case are spelling; `login-form-vN` ≡ `Login_vN`):

| slug | demo path | identity |
| --- | --- | --- |
| `carrentals` | `/theme/carrentals` | `carrentals` |
| `car-rental` | — (no product entry) | `carrental` — **different design** |
| `slim` / `slim2` | `/theme/slim`, `/theme/slim2` | `slim` / `slim2` — **different designs** |
| `login-form-v3` | `/etc/lf/Login_v3/index.html` | `loginv3` |
| `Login_v3` (app side) | — | `loginv3` — same |
| `bootstrap-footer-04` | `/theme/bft/bootstrap-footer-04` | `bootstrapfooter04` |

**Digits are identity.** Measured live on 2026-10-25, `theme/slim/` and
`theme/slim2/` serve different `<title>`s and headings; so do `carrental` /
`carrentals` and `marian` / `ocheandeview`. Folding those apart is how a real
drift hides (control c03/c04 mutate the fold and prove it).

A drift is only *claimed* when **both** sides are catalogue products. A family
label like `bft` (the app-side shorthand for `/theme/bft/`) has no product
entry, so the pair is `UNRESOLVED` — a note, not a flag (control c18).

## The three defects

| prep | marker said | marker now | evidence |
| --- | --- | --- | --- |
| `biscuit` | `pawpal` | `groomly` | rule-5 rename `eef65bb17` moved `apps/pawpal` → `apps/groomly`; `groomly`'s spec recreates `wp/template/pawpal/` |
| `cruiseo` | `fleetly` | `drivego` | prep's Source Mapping + section list are `carrentals` (row 929, hero "Rent a car is within your fingertips", 6 car listings); `drivego`'s spec recreates `carrentals`; `fleetly` recreates `car-rental` |
| `tidecrest` | `havenshore` | `pavilion` | prep's spec is `marian` (`#dca73a`, Noto Serif/Lato, `<h1>` "top hotel in the city"); `pavilion`'s spec recreates `marian`; `havenshore` recreates `ocheandeview` |

Two of the three were **introduced by a previous audit pass**, which is the
lesson worth carrying forward.

### The 2026-10-24 "correction" pass inverted two correct markers

Both `cruiseo` and `tidecrest` carried a `**Correction (measured 2026-10-24)**`
paragraph that flipped the marker to the *sibling* design's app. The cited
evidence in both cases was **one** screenshot basename in the prep's own docs
(`carrental-free-template.jpg`, row 924) — while the prep's spec named
`carrentals` (row 929) and quoted carrentals' own headings and section list.

That is the `-24f`/`-25a` rule again: *a single phrase is noise, exclusivity is
the rule*. A row's screenshot basename is a citation, not a verdict — the same
class of error as crowning `bellows` on lorem ipsum. The whole prep's structure
(section order, `<h1>`, token table) is the stronger side of the same dir, and
it agreed with the marker as originally written.

Both markers are restored, the correction paragraphs are replaced with the
measurement that reverses them, and `verify-marker-drift.py` reports a
spec-vs-docs split as a **note** (`DOCS-CITE-DRIFT`), never as a flip (c16).

### The false-positive classes this axis had to kill

The first draft compared raw slugs and produced **23 flags**, of which 20 were
noise. Each class now has a control:

| class | example | why it is not a defect |
| --- | --- | --- |
| sibling mention in the Purpose | `tonic` → `slim2` | the spec says `slim` and adds "`Slim2` … is a DIFFERENT template, `wp/template/slim2/`, not this one" — the ordered provenance forms + negative framing skip it (c12, c13) |
| form-family spelling | `login-form-v3` vs `Login_v3` | one product, `/etc/lf/Login_v3/` (c15) |
| family demo root | `bft` vs `bootstrap-footer-04` | the app side names the family dir, not a product → `UNRESOLVED` (c14, c18) |
| hyphen spelling | `tasty-recipes` vs `tastyrecipes` | the alias map says one demo (c05) |
| numbered sibling | `fashion` vs `fashion-2` | one demo (`fashion`) per the alias map — genuinely the same design, so `drapery` → `bespoke` is correct (c05) |
| ambiguous duplicate build | `drapery` has 2 candidate apps | a duplicate-build is a product decision, so no `FIX` is ever guessed (c08) |

## Tasks-checkbox census (the axis `-25a` queued)

`docs/templates/*/tasks.md` state was never read against whether the app
shipped. Convention: boxes are ticked only after the implementation ships.
1,417 alias preps already carried a "prep history" banner; **608 shipped preps
did neither** — their app exists on disk while the list still showed 8,598
unchecked boxes, i.e. a shipped template's file read as outstanding work.

```
docs/templates dirs 3,240
  SHIPPED-STALE         608  → 0      fixed this run (banner inserted)
  SHIPPED-BANNERED     1037          "prep history, not outstanding work"
  SHIPPED-TICKED        660          fully ticked
  PENDING                26          unshipped, boxes open — correct state
  NO-CHECKBOX-GRAMMAR  1139          prose outlines, no boxes at all
  NO-TASK-FILE          378          design-notes-only preps
```

The fix is a **banner, not a tick**: it says the app shipped and the boxes are
history, and it claims nothing about individual tasks (a blanket tick would).
Pure insertions — `git diff --numstat` shows 0 deleted lines across the 607
files, and `insert()` is idempotent by construction (c21).

Remaining, deliberately untouched: 1,139 preps with no checkbox grammar and 378
with no task file are a *shape* question (a prep that never planned tasks is not
lying), and 26 pending preps are correctly open.

## Guards worth remembering

1. **A closed axis can be reopened by a rename.** `verify-brief-spec.py`'s
   "1 stale of 1,533" became 2 stale with no change to its own code.
2. **A marker's absence of a target app is louder than a wrong one** — but only
   the catalogue can tell them apart from a family label (`UNRESOLVED`).
3. **Never let a docs citation overrule the spec.** The 2026-10-24 pass did,
   and wrote "superseded" into two correct preps (the `-24p` warning verbatim).
4. **Buckets must partition**: every marker dir lands in exactly one bucket, and
   the verifier asserts it (`sum(buckets) == len(rows)`), because a "note" that
   also increments a bucket double-counts (the `-23k` lesson).
5. **A fix's own note must not become the next flag** — the re-point note names
   the rename commit and the design, never a bare app name in a `apps/` form.

## Next axes

1. **`NO-CHECKBOX-GRAMMAR` 1,139 + `NO-TASK-FILE` 378** — decide the house shape
   (does a prep owe a task list at all?) before writing 1,500 files.
2. **`NO-BRIEF-SLUG` 82 / `NO-APP-SLUG` 34** — preps and apps whose spec names
   no ColorLib source; these are the residue of the `--ref`-era specs.
3. Still open from `-25a`: the 8 stale row re-points and the 64 duplicate builds
   (product decisions, not docs fixes).
