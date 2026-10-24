# Brief-file consensus — the identity layer a first-file reader misses

`docs/templates/<name>/` is what an implementer actually reads. Every axis that
has judged it so far (`verify-docs-source.py` for shipped apps,
`verify-brief-spec.py` for the preps with no app) reads the brief **until the
first file names a design**. A brief directory can hold up to six markdown files
(`design-notes.md`, `tasks.md`, `todo.md`, `notes.md`, `outline.md`,
`README.md`), and each re-prep of the same invented name can leave one behind.

So a stale file is invisible to every reader — while being the file that sorts
first, or the only file left when the good one was never written.

Measured twice, both times a real defect:

| app | the unread file said | the spec, the row and the app said |
| --- | --- | --- |
| `stepforge` (fixed 2026-10-24) | `colorlib-wizard-7` (a third `todo.md`) | `colorlib-wizard-26` |
| `craftfolio` (this axis) | ColorLib **Beckham**, green `#79efb4` (in `todo.md`) | ColorLib **Steve**, red `#e45447` |

## What the axis reads

`scripts/verify-brief-files.py` — read-only, offline, ~4 s over the whole corpus:

* every `*.md` in every brief dir (not a fixed filename list);
* each file's design, extracted with the SAME extractor the docs-source axis
  uses (labelled `**Source slug:**` tier → slug URL → whole-doc fallback, with
  the demo family dirs `bb`/`bft`/`cf`/`lf`/`cs` transparent);
* the SPEC's design and the app's TEMPLATES.md row (the third opinion the
  docs-source axis already trusts).

| bucket | meaning |
| --- | --- |
| `AGREE` | every naming file names the spec's design |
| `STALE-TIE` | a file names a different design **that the row also names** — row multiplicity: the brief picked a sibling the row carries; a note, never a flag |
| `STALE-ORPHAN` | a file names a design **neither the spec nor the row names** — the stale leftover; the only flagged class |
| `SILENT` | no file names any design (a task outline legitimately does this) |
| `SPEC-SILENT` | files name a design, the spec names none |
| `NO-FILES` | the dir holds no markdown |
| `NO-SPEC` | no `openspec/specs/template-<name>/spec.md` |

## Measured state (main `4a9ca3cc9`, before this run's fix)

```
brief dirs read: 3236
  AGREE         3072
  STALE-TIE       16
  STALE-ORPHAN    69     <- flags
  SILENT          69
  NO-SPEC         10
flags: 69
```

This run repaired **45 files in 44 dirs** (table below) and left **24 dirs**
queued (table below) because the truth could not be measured. The axis reads
`STALE-ORPHAN 24` afterwards, `AGREE 3097`.

## Adjudication — the app's own palette is the third opinion

A stale leftover and a spec that drifted the other way look identical from the
documents alone (`tidecrest` is exactly that: its notes measure `ocheandeview`
while its spec says `marian`). So each target was adjudicated against the
**shipped app**:

1. read the app's own palette out of `apps/<app>/src/index.css` (`@theme`
   declarations + hex literals);
2. fetch the reference the SPEC names — preview page via the prefix ladder
   (`theme/<slug>/` → `theme/bootstrap/<slug>/` → `theme/bb/<slug>/`), then its
   non-vendor stylesheets; when the page is gone, the archive
   `downloads/free/<slug>.zip` sheet;
3. the app is that design **only if a CHROMATIC hex of its palette appears in
   that reference**. Neutral hits (`#fff`, `#212529`, `#6c757d`, `#007bff`, …)
   are not evidence — any stylesheet matches them.

Sweep result (64 candidates): **45 APP-IN-SPEC-SHEET** (bannered), 5 weak
(neutral-only hits), 7 no-intersection, 7 no-reference (no page AND no usable
archive). The 24 residual dirs are exactly the last three groups plus the 5
dirs whose app has no TEMPLATES.md row at all.

## Repaired — 45 files in 44 dirs (banner + house-spelling `Source slug:`)

The fix is additive: a `SUPERSEDED DESIGN` banner plus
`> **Source slug:** `<spec>`` is inserted under the H1. Nothing in the body is
rewritten or deleted — the history stays, the truth comes first, and the labelled
declaration tier makes every extractor read the spec's design from then on.

| app | file | file said | spec / row / app |
| --- | --- | --- | --- |
| `archway` | `tasks.md` | `archs` | `klift` |
| `beacon` | `tasks.md` | `colorlib-error-404-5` | `halo` |
| `bedrock` | `tasks.md` | `bootstrap-footer-05` | `bootstrap-footer-11` |
| `bezel` | `tasks.md` | `bootstrap-buttons-10` | `watch` |
| `bookcraft` | `tasks.md` | `colorlib-wizard-26` | `booke` |
| `brightpath` | `todo.md` | `clever` | `edusmart` |
| `byline` | `tasks.md` | `andrea` | `nikki` |
| `checkly` | `tasks.md` | `checkbox-04` | `checkbox-02` |
| `counsel` | `tasks.md` | `solicitor` | `whisper` |
| `craftfolio` | `tasks.md` | `portfolio` | `steve` |
| `craftfolio` | `todo.md` | `beckham` | `steve` |
| `craftline` | `tasks.md` | `breed2` | `jackson` |
| `docket` | `tasks.md` | `dropdown-13` | `lawfirm` |
| `dune` | `tasks.md` | `colorlib-error-404-2` | `safario` |
| `dwelling` | `tasks.md` | `oakberry` | `aler` |
| `echo` | `tasks.md` | `repeat` | `beckham` |
| `ember` | `tasks.md` | `colorlib-error-404-4` | `dingo` |
| `fitnest` | `tasks.md` | `fitnezz` | `zogin` |
| `focal` | `tasks.md` | `revive` | `bato` |
| `folio` | `tasks.md` | `article` | `mellisa` |
| `forkful` | `tasks.md` | `accordion-02` | `foodfun` |
| `hardhat` | `tasks.md` | `consto` | `constructioncompany` |
| `haven` | `tasks.md` | `animal-shelter` | `sona` |
| `huddle` | `tasks.md` | `knights` | `confe` |
| `keynest` | `tasks.md` | `youragent` | `rolast` |
| `lumen` | `tasks.md` | `colorlib-error-404-20` | `glint` |
| `lumina` | `tasks.md` | `sunzine` | `ilene-berg` |
| `nimbus` | `tasks.md` | `cloudnest` | `saas` |
| `onair` | `todo.md` | `eighty8` | `razo` |
| `paprika` | `tasks.md` | `marco` | `redcayenne` |
| `pixelcraft` | `tasks.md` | `datarc` | `boxus` |
| `pressbox` | `tasks.md` | `force` | `magnews` |
| `pressly` | `tasks.md` | `newsflex` | `magaznpro` |
| `reveal` | `tasks.md` | `04-comming-soon` | `unfold` |
| `sartorial` | `tasks.md` | `malefashion` | `menztailor` |
| `searchpad` | `tasks.md` | `colorlib-search-10` | `colorlib-search-21` |
| `shuttercraft` | `tasks.md` | `cassi` | `photography` |
| `snaplens` | `tasks.md` | `fotograp` | `halo` |
| `statute` | `tasks.md` | `lawful` | `primelaw` |
| `syllabus` | `tasks.md` | `ednews` | `course` |
| `threshold` | `tasks.md` | `modal-04` | `login-form-02` |
| `toggle` | `tasks.md` | `bootstrap-buttons-02` | `checkbox-08` |
| `vivid` | `tasks.md` | `creativex-3` | `creative-agency` |
| `voyager` | `tasks.md` | `passport` | `tour` |
| `waypoint` | `tasks.md` | `coaching` | `colorlib-search-12` |

## Residual queue — 24 dirs (measured, deliberately not edited)

`scripts/fix-brief-files.py` refuses a dir with no row (no third opinion) and the
banner was applied with `--only <measured set>`, so these are untouched:

| app | stale claim | spec | row | why held |
| --- | --- | --- | --- | --- |
| `asana` | `yogalax` (tasks.md) | `doyoga` | doyoga | app palette hits only neutral shades |
| `bizcraft` | `bizpro` (README.md) | `bizcon` | — | no TEMPLATES.md row (no third opinion) |
| `buildcraft` | `buildcraft` (tasks.md) | `celt` | — | no TEMPLATES.md row (no third opinion) |
| `cabinet` | `listio` (todo.md) | `furn` | furn | app palette absent from the sheet |
| `cruiseo` | `car-rental` (tasks.md) | `carrentals` | — | no TEMPLATES.md row (no third opinion) |
| `findspot` | `colorlib-search-23` (tasks.md), `colorlib-search-15` (todo.md) | `search-form-bar-02` | search-form-bar-02 | app palette absent from the sheet |
| `formpost` | `contact-form-06` (tasks.md) | `contact-form-09` | contact-form-09 | app palette absent from the sheet |
| `gather` | `evento` (tasks.md) | `accordion-10` | accordion-10 | no live page and no archive |
| `grimoire` | `colorlib-wizard-21` (tasks.md) | `colorlib-wizard-16` | colorlib-wizard-16 | no live page and no archive |
| `inquire` | `dropdown-10` (tasks.md) | `colorlib-contact-form` | colorlib-contact-form | no live page and no archive |
| `ironclad` | `celt` (tasks.md) | `wilcon` | wilcon | app palette absent from the sheet |
| `lenscraft` | `alime` (tasks.md) | `proshoot` | proshoot | app palette absent from the sheet |
| `loginbreeze` | `login-form-v18` (outline.md) | `login-form-v3` | login-form-v3 | no live page and no archive |
| `lumiere` | `rea` (tasks.md) | `mostudio` | mostudio | app palette hits only neutral shades |
| `palette` | `bootstrap-buttons-01` (tasks.md) | `clyde` | clyde | app palette hits only neutral shades |
| `prose` | `wordify` (tasks.md) | `blogger` | author | app palette absent from the sheet |
| `seekform` | `colorlib-search-12` (tasks.md) | `colorlib-search-6` | colorlib-search-6 | no live page and no archive |
| `sidelane` | `bootstrap-sidebar-02` (notes.md) | `bootstrap-sidebar-05` | bootstrap-sidebar-05 | no live page and no archive |
| `soundbite` | `hustlehour` (tasks.md) | `the-hustle-hour` | the-hustle-hour | no live page and no archive |
| `tally` | `bootstrap-buttons-16` (tasks.md) | `accounting` | accounting | app palette hits only neutral shades |
| `threadline` | `fashion-2` (tasks.md) | `malefashion` | malefashion | app palette hits only neutral shades |
| `tickbox` | `checkbox-01` (tasks.md) | `checkbox-10` | checkbox-10 | app palette absent from the sheet |
| `tidecrest` | `ocheandeview` (design-notes.md) | `marian` | — | no TEMPLATES.md row (no third opinion) |
| `turntable` | `carousel-08` (README.md) | `dj` | — | no TEMPLATES.md row (no third opinion) |

## Row ties — 16 dirs, notes not flags

`bazaar` (shopmax→store) · `counsel` (ariclaw→whisper — its own `design-notes.md`
is the tie, while `tasks.md`'s `solicitor` **was** a leftover and is bannered) ·
`domicile` · `dossier` · `feast` · `groove` · `inkwell` · `learnly` · `lodgely` ·
`mortar` · `petal` (juli→florist) · `pleat` · `reachout` · `roost` · `skyline` ·
`vigor`. Each picks a design the app's own row carries, so the fix is a
row/naming decision, not a docs edit.

## Pitfalls measured this run

1. **A brief's token row is SECTION-scoped, so a name-only token census
   manufactures conflicts.** Prototyped first (a brief↔spec hex comparison keyed
   on the token name): 14 raw conflicts, and every one of the four that looked
   decisive was context-correct — `purplesign`'s `Background: #f6f078` is the
   **submit button's** fill (the section heading above says so), `bitclasp`'s
   `Dark bg: #04091e` is the **footer** (`.footer-area` paints exactly that in the
   sheet), `duo`'s `#e6e6e6` is the **unchecked** indicator (checked is
   `#007bff`), `touchpoint`'s `#1089ff` is the **button** (`.cl-btn-primary`). The
   token axis needs the enclosing heading before it can ship.
2. **Never run the fixer unbounded after a triage.** The first pass was applied
   with `--only`; a second unbounded run bannered the 19 dirs held above
   (20 extra files). Recovery: `git checkout -- docs/templates/`, then re-run
   with `--only`.
3. **A row tie needs TWO rows naming the same app.** `ROW_SLUG` keeps only the
   first `[colorlib](…)` link in a row, so one row carrying two app links is NOT
   a tie — control `c03` builds two rows instead.
4. **Neutral-shade hits prove nothing.** Without a chromatic filter the app∩sheet
   test "confirms" any app against any design; 5 dirs are held for exactly that.
5. **`norm()` must strip `#`.** The first palette read kept the leading `#`, so
   the cross-check reported `NO-INTERSECTION` for all 64 candidates — including
   `craftfolio`, whose `#e45447` is painted 42 times in the Steve sheet.

## How to run

```bash
python3 scripts/verify-brief-files.py                 # measured state + flags
python3 scripts/verify-brief-files.py --md out.md     # the STALE-ORPHAN table
python3 scripts/verify-brief-files.py --show STALE-TIE --verbose
python3 scripts/verify-brief-files.py --json out.json
python3 scripts/fix-brief-files.py --dry-run          # banner plan (measured set only)
python3 scripts/fix-brief-files.py --only a,b,c       # apply
python3 scripts/verify-brief-files-controls.py        # 19/19 (6 GATE)
```

Exit code: `0` = no `STALE-ORPHAN`, `1` = flags, `2` = bad usage. The controls are
mutation-based and offline; the GATE cases disable the sibling-spelling fold, the
round-up exclusion, the row third opinion or the declaration tier, prove the
payload then fires, and prove the fixer is a byte-level no-op on a second run.
