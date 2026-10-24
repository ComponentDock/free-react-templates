# Slug-token agreement — two preps for one design, compared

`TEMPLATES.md` lists **1,646 designs**; the repo carries **3,237 prep specs**. 853
ColorLib slugs therefore have **more than one prep** (1,597 extra prep dirs: a
rename stream, a re-do, or two streams that picked the same design). Every design
axis shipped before this one compares a prep against its **reference**
(`verify-live-tokens`, `verify-shape-tokens`, `verify-spacing-tokens`,
`verify-type-scale`, `verify-typeface-prescription`, `verify-unreachable-claims`)
or a prep against **its own `## Purpose`** (`verify-token-conflicts`, `-23p`).
None of them compared **two preps of the same design with each other**.

That mattered: when prep A says the brand is `#2563eb` and prep B says `#2c3e6b`
for the same ColorLib slug, at most one can be right — and the app built from the
other one ships the wrong skin. This axis reads that edge. Identity is the source
slug, so the census needs no network; the adjudication asks the live design.

```sh
python3 scripts/verify-slug-token-agreement.py                    # offline census
python3 scripts/verify-slug-token-agreement.py --census           # per-slug table
python3 scripts/verify-slug-token-agreement.py --adjudicate --json /tmp/sta.json
python3 scripts/verify-slug-token-agreement.py --no-strict        # guard A/B
python3 scripts/verify-slug-token-agreement-controls.py           # 38 controls, 6 GATE
python3 scripts/fix-slug-token-agreement.py --report /tmp/sta.json [--apply]
```

## What is compared

| claim | label vocabulary | value |
| --- | --- | --- |
| `brand` `accent` `ink` `body` `footer` | the strict role labels the token fixers write (`Brand color`, `Accent (most-used chromatic)`, `Ink / dark surface`, `Body text`, `Footer bg`, …) | the row's first hex, normalised (`#FFF` = `#ffffff` = `#FFFFFFAA`) |
| `typeface` | `Font family`, `Typeface`, `Body font`, `Font — body`, `--font-body`, … | the family set, weight-stripped (`Poppins-Regular` = `Poppins`) |

## Measured state (`main` at the fix)

```
specs 3,237 · slugs 1,632 · multi-prep slugs 853 (+1,597 extra preps) · comparisons 619
  AGREE        480   one value for the role across every prep that defines it
  CONFLICT     139   two or more incommensurable values              ← the flags
  ADJUDICATED   18   a conflict whose loser already carries a measured block
  notes: NO-TABLE 1,372 · THIN 1,079 · QUALIFIED 15 · SIBLING-MENTION 135 · NO-SLUG 8
```

139 conflicts by role: `body` 39 · `typeface` 39 · `ink` 25 · `brand` 16 ·
`footer` 11 · `accent` 9. **After the fixes below: CONFLICT 121, ADJUDICATED 18.**

## `--adjudicate` — asking the design which value it paints

For every conflicted slug the resolver (`scripts/catalog_resolve.py`: the preview
host's own catalogue map, collision-aware `slug-own` probe) finds the live demo,
then the axis fetches the page, **every stylesheet it links**, the inline
`<style>` blocks and the `style="…"` attributes and counts the candidates there —
in hex **and** `rgb()`/`rgba()` notation. Verdicts over the 139 conflicts:

| verdict | n | meaning |
| --- | --- | --- |
| `UNSUPPORTED` | **18** | exactly one candidate is painted (≥ 3 declarations), every other candidate **0 times** → a real defect, fixed |
| `BOTH-PAINTED` | 52 | two or more candidates occur; deciding needs the rule's ROLE (`body{color}` vs `h2{color}`) — note |
| `DRIFT` | 25 | the demo is a **rebuilt 3.x skin** (`?v=3.x`, `/kit/`, BS 5.3): both preps measured the old design — note, never "correct" |
| `THIN-WINNER` | 17 | one candidate painted ≥ 3 times but another is painted 1–2 times — note |
| `NONE-PAINTED` | 14 | no candidate occurs at all: neither prep measured this skin — note |
| `PARTIAL-COVERAGE` | 12 | a linked stylesheet did not arrive, so a "0 times" verdict is not provable — note |
| `DEAD-THIN` | 1 | demo unreachable — note |

## The 20 preps corrected (18 conflicts)

`fix-slug-token-agreement.py` appends an idempotent block
(`<!-- slug-token-agreement: <slug>/<role> -->` … `<!-- /slug-token-agreement -->`)
to the losing prep's `## Design Tokens` section. It **never rewrites the table**:
the table is the prep as written, and "this value is not painted" does not prove
the sibling's value is the right *role* (on `colorlib-wizard-5` the surviving
candidate, `#f3d4b7`, is a 3-hit surface tint — the block says exactly that).

| slug | role | losing prep (value, painted ×0) | sibling prep (painted) |
| --- | --- | --- | --- |
| `bootstrap-buttons-17` | typeface | `btnflow` poppins | `pill` roboto ×7 |
| `bootstrap-footer-07` | typeface | `footerbreeze` poppins | `postlude` roboto ×7 |
| `bootstrap-sidebar-08` | ink | `panelview` `#222222` | `paneline` `#000000` ×13 |
| `classy-ads` | typeface | `adgate` poppins | `adnest` arial/inter/open sans/roboto ×13 |
| `cleaning-company` | typeface | `maidwise` poppins | `scrubly` roboto ×77 |
| `colorlib-regform-36` | typeface | `regvale` poppins | `badgeform` montserrat ×5 |
| `colorlib-regform-5` | typeface | `formly` poppins | `reglift` open sans ×6 |
| `colorlib-search-9` | typeface | `searchbreeze` poppins, `seekgate` roboto | `searchquest` lato ×12 |
| `colorlib-wizard-25` | typeface | `wizardform` poppins | `sigil` nunito ×5 |
| `colorlib-wizard-5` | brand | `crucible` `#f2994a`, `stepcart` `#3b82f6` | `billflow` `#f3d4b7` ×3 |
| `colorlib-wizard-6` | body | `wizdeck` `#4b4b4b` | `potion` `#808080` ×5 |
| `contact-form-v19` | ink | `dropnote` `#1f2937` | `cartofield` `#333333` ×3 |
| `job-board-2` | typeface | `jobspring` poppins | `jobnest` roboto ×35 |
| `life-coaching` | typeface | `coachcraft` open sans | `elevate` arial/poppins ×54 |
| `login-form-05` | typeface | `passguard` poppins | `gatepass` roboto ×8 |
| `modal-04` | brand | `couponpop` `#e74c3c` | `couponmodal` `#12d3cf` ×7 |
| `multiselect-03` | ink | `combobox` `#1a1a1a` | `pickbox` `#000000` ×84 |
| `thelawyer` | typeface | `justice` poppins | `lexcounsel` roboto ×13 |

**6 of the 20 losing preps already have a shipped app** (`btnflow`,
`footerbreeze`, `regvale`, `formly`, `seekgate`, `combobox`) — those apps carry a
value the design never paints. That is app-side work for the implementer stream
(never edited from here); the block is the evidence.

**The pattern is worth naming:** 11 of the 20 losers prescribe **Poppins** while
the design declares something else. Poppins is the corpus' most-used family
(219 declarations across the specs), which makes it the default answer when a
prep guesses instead of reading the sheet — exactly the failure
`verify-typeface-prescription` was built for, one design at a time.

## Verification

```
verify-slug-token-agreement-controls.py   38 controls / 6 GATE   pass
openspec validate (20 edited specs)       20/20 valid
verify-provenance-grammar.py              0 flags  (3,237 PARSED)
verify-spec-tokens.py                     0 shipped specs without measured tokens
verify-spec-conformance (skill copy)      0 flagged / 3,237 scanned
verify-token-conflicts.py                 4 flags — 5 on origin/main (A/B: pre-existing)
fix-slug-token-agreement.py --apply       2nd run: 20 no-ops, 0 writes
```

## False-positive taxonomy (the axis' own first drafts)

1. **Variant labels are not role definitions.** 534 distinct labels match a naive
   `^brand|primary` prefix — `Brand hover`, `Brand secondary`, `Brand gradient start`,
   `Primary text`, `Footer links`, `Footer border`, `Brand light`. The strict
   vocabulary (61 labels, measured) is load-bearing: control **C05** proves that
   loosening it manufactures a conflict on `Primary text` vs `Primary button`.
2. **A capitalised word in prose is not a family.** `font-family: "Poppins", sans-serif`
   count 103 distinct families corpus-wide; `content`, `headings`, `nav`, `clean`,
   `all` were read as families by the first draft and turned 62 slugs into typeface
   "conflicts". Guard: a token counts only if some spec writes it as a `font-family:`
   declaration or inside a `fonts.googleapis.com` URL (`build_family_vocab`, controls
   C10/C12) — self-updating, no data file to rot.
3. **A quoted CSS declaration is not a family.** `"object-fit: cover"` (the
   `dwellix` malformation `-23p` found) is rejected structurally (`FAMILY_OK`), with
   or without a vocabulary (C12c).
4. **A rebuilt skin is DRIFT.** 25 of the 139 conflicts are `?v=3.x` / `/kit/` demos;
   "correcting" the older prep against the new skin is the `-22e`/`-22k` mistake.
5. **A partial fetch cannot prove absence.** 12 conflicts had a stylesheet that did
   not arrive; they are `PARTIAL-COVERAGE`, not flags (C20).
6. **`rgb()` is a colour.** `thelawyer`'s sheet carries 33 non-hex declarations;
   counting hex only would have called 20 correct values "unpainted" (C24–C26).
7. **A sibling mention is not the subject.** 135 preps name another design's
   preview on purpose ("unlike its sibling …"); grouping by every slug would enrol
   them in the sibling's group and manufacture conflicts. Identity = the **first
   slug in `## Purpose`** (C31/C32). Reading both URL spellings (`wp/template/<slug>/`
   and preview-only `theme/<slug>/`) brought 96 specs and 8 no-slug specs into scope.
8. **The theme sheet is not always the first sheet.** `thelawyer` links 11 sheets
   with `style.css` **last**; the fetch order now puts `style|theme|main|custom|app`
   first so the cap can never drop it.

## Residual queues (measured, not yet resolved)

1. **`BOTH-PAINTED` 52** — both candidates are painted, so the verdict needs the
   *rule* that owns the role: `body{color}` for `body`, `h1–h6{color}` for `ink`,
   `footer{background}` for `footer`, the CTA fill for `brand`. That is a
   rule-level adjudicator (the `verify-live-tokens` reader already exists) — the
   next axis, and the reason this one stops at "not painted at all".
2. **`DRIFT` 25** — the demo was redesigned after the preps were written; the two
   preps describe the old design consistently. Not a prep defect, and not fixable
   from here (`-24a` STALE-SKIN has the same residual).
3. **`NONE-PAINTED` 14 / `THIN-WINNER` 17 / `PARTIAL-COVERAGE` 12** — 43 conflicts
   that need one manual read each; the report carries the URL, the counts and the
   sheet coverage so the read is cheap.
4. **`THIN` 1,079** — role defined by only one prep of the slug. Not a conflict;
   it is the shape of the duplicate-prep problem (a design's second prep often
   restates nothing).
5. **No spec named a source: 8** — still invisible to the slug-based axes.

## Once-only checks (do not re-run)

* The `--adjudicate` network pass over the 139 conflicts (~700 requests, cached
  under `/tmp/slug-token-agreement/`). Re-running it is the control, not a queue
  item; a new conflict only appears when another prep lands for an existing slug.
* The 20 blocks are `--apply`ed; the fixer is a byte-level no-op on a second run.
