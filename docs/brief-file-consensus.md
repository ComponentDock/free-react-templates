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
| `ORPHAN-NO-THIRD-OPINION` | the same mismatch in a dir with **no row and no `apps/<name>`** — nothing can adjudicate it, so it is a note (recorded + queued), never a flag |
| `SILENT` | no file names any design (a task outline legitimately does this) |
| `SPEC-SILENT` | files name a design, the spec names none |
| `NO-FILES` | the dir holds no markdown |
| `NO-SPEC` | no `openspec/specs/template-<name>/spec.md` |

## Measured state (main `4a9ca3cc9`, before the first fix)

```
brief dirs read: 3236
  AGREE         3072
  STALE-TIE       16
  STALE-ORPHAN    69     <- flags
  SILENT          69
  NO-SPEC         10
flags: 69
```

The first run repaired **45 files in 44 dirs** (table below) and left **24 dirs**
queued because the palette test could not adjudicate them. The second run
(2026-10-24p) closed that queue: **18 dirs / 19 files bannered**, 1 dir turned
out to be an alias (not a defect), 5 dirs have no third opinion at all. Current
state on `main`:

```
brief dirs read: 3236
  AGREE                  3116
  STALE-TIE                16   (notes)
  STALE-ORPHAN              0   <- flags: CLOSED
  ORPHAN-NO-THIRD-OPINION   5   (notes)
  SILENT                   89
  NO-SPEC                  10
flags: 0
```

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

## The residual queue — 24 dirs, closed 2026-10-24p

The first run held 24 dirs because the **palette** test could not adjudicate them
(neutral-only hits, no intersection, no reference at all, or no row). The second
run used a different third opinion — the **app's own component shape and copy**,
which is the strongest evidence available and needs no colour:

| channel | what it settles | measured example |
| --- | --- | --- |
| demo title in the app's H1/H2 | a component demo names its own number | `tickbox` renders `Checkbox #10` → `checkbox-10` (the file said `checkbox-01`) |
| nav-item list | sidebar/nav demos differ only in their menu | `sidelane` = Home·About·Works·Blog·Gallery·Services·Contacts → `bootstrap-sidebar-05` (…`-02` is Home 1-3/Pages/Portfolio) |
| input `type` + `placeholder` | login/contact demos differ in their fields | `loginbreeze` posts `Username`+`Password` → `login-form-v3` (`-v18` has an `email` field) |
| verbatim hero/section copy | multi-page themes keep their marketing copy | `cabinet` 26 app phrases appear in `furn`, 0 in `listio`; `ironclad` 24 in `wilcon`, 1 in `celt` |
| section set / control gallery | refutes a stray of another *kind* | `palette` is a 12-section portfolio, the stray `bootstrap-buttons-01` is a button gallery |

### Bannered — 18 dirs / 19 files

`fix-brief-files.py --only …` (additive: banner + house-spelling `Source slug:`).
"app" = the app's copy/controls confirm the SPEC's design; "spec+row" = the stray
is refuted by the app's shape but the spec's design could not be confirmed from
copy, so the banner names only the spec and the row (`--spec-only`).

| dir | file | file said | spec / row | evidence |
| --- | --- | --- | --- | --- |
| `asana` | `tasks.md` | `yogalax` | `doyoga` | app: "A Yoga Studio", "Featured Classes", "Schedule" = doyoga's headings |
| `cabinet` | `todo.md` | `listio` | `furn` | app: 26 phrases in `furn`, 0 in `listio` |
| `formpost` | `tasks.md` | `contact-form-06` | `contact-form-09` | app H2 `Contact Form #09` + "Get in touch with us" |
| `grimoire` | `tasks.md` | `colorlib-wizard-21` | `colorlib-wizard-16` | app H2 "Sign up to great new account" + Personal Information/Payment Details |
| `ironclad` | `tasks.md` | `celt` | `wilcon` | app: 24 phrases in `wilcon`, 1 in `celt` |
| `lenscraft` | `tasks.md` | `alime` | `proshoot` | app: 18 phrases in `proshoot`, 0 in `alime` |
| `loginbreeze` | `outline.md` | `login-form-v18` | `login-form-v3` | app fields = `Username`+`Password` (v18's are `email`+`pass`) |
| `lumiere` | `tasks.md` | `rea` | `mostudio` | app: "Black & Gold Paint Face", "View Portfolio" = mostudio |
| `seekform` | `tasks.md` | `colorlib-search-12` | `colorlib-search-6` | app H2 "What are you looking for?" = search-6's body copy |
| `sidelane` | `notes.md` | `bootstrap-sidebar-02` | `bootstrap-sidebar-05` | app nav list = Sidebar #05's menu (Portfolic) |
| `tally` | `tasks.md` | `bootstrap-buttons-16` | `accounting` | app: 11 phrases in `accounting`, 0 in the button demo |
| `threadline` | `tasks.md` | `fashion-2` | `malefashion` | app: 14 phrases in `malefashion` |
| `tickbox` | `tasks.md` | `checkbox-01` | `checkbox-10` | app H1 `Checkbox #10` |
| `findspot` | `tasks.md`, `todo.md` | `colorlib-search-23`, `colorlib-search-15` | `search-form-bar-02` | spec+row: app is a bar-only component (2 controls), both strays are full search pages |
| `gather` | `tasks.md` | `evento` | `accordion-10` | spec+row: app is one FAQ accordion, `evento` is an event landing page (hero/countdown/speakers) |
| `inquire` | `tasks.md` | `dropdown-10` | `colorlib-contact-form` | spec+row: app is a 5-field contact form, `dropdown-10` is a dropdown demo ("Request A Quote / Consultation") |
| `palette` | `tasks.md` | `bootstrap-buttons-01` | `clyde` | spec+row: app is a 12-section portfolio, the stray is a button gallery |
| `prose` | `tasks.md` | `wordify` | `blogger` | spec+row: app is a book-author site (Hero/AboutBook/Chapters), 0 of `wordify`'s 206 phrases |

### Not a defect — 1 dir (an alias, not a leftover)

`soundbite`: the file named `hustlehour`, the spec names `the-hustle-hour`. They
are **the same design** — `wp/template/the-hustle-hour/` is served at
`/theme/hustlehour/` (HTTP 200, and 30 of the app's phrases appear there), and
the row's own screenshot is `hustlehour-template-1771943880509.jpg`. The axis now
folds the pair (`load_aliases()`), so the dir reads `AGREE` — bannering it would
have written a false "superseded" note into a correct file.

### Note bucket — 5 dirs with no third opinion

No TEMPLATES.md row **and** no `apps/<name>`: an unshipped prep whose brief names
a different design than its spec. Nothing can adjudicate it, so the axis records
it as `ORPHAN-NO-THIRD-OPINION` (note, not flag) and the fixer refuses to touch
it. Each needs a human decision — confirm the spec, or re-point the brief:

| dir | file said | spec | why held |
| --- | --- | --- | --- |
| `bizcraft` | `bizpro` (`README.md`) | `bizcon` | no row, no app |
| `buildcraft` | `buildcraft` (`tasks.md`) | `celt` | no row, no app — and the stray is the app's own name (source-name reuse) |
| `cruiseo` | `car-rental` (`tasks.md`) | `carrentals` | no row, no app; `colorlib.com/wp/template/car-rental/` does not exist, `carrentals` does |
| `tidecrest` | `ocheandeview` (`design-notes.md`) | `marian` | no row, no app; both designs have live previews |
| `turntable` | `carousel-08` (`README.md`) | `dj` | no row, no app; both designs have live previews |

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
6. **A rebuilt component-demo shell carries no copy at all.** `checkbox-10`
   (1,068 B), `search-form-bar-02` (1,898 B), `dropdown-10` (2,143 B) and
   `accordion-10` are React/kit shells whose text is a single `<h2>`
   (`Checkbox #10`); a copy-overlap score of 0 there proves nothing about the
   app. Use the **structure** channel instead — the demo title, the nav list, the
   input `type`/`placeholder`, the control count (checkbox-01 has 7 coloured
   variants, checkbox-10 has one unstyled toggle).
7. **Fold aliases BEFORE bannering.** `soundbite`'s file named `hustlehour`; the
   spec names `the-hustle-hour`; they are the same design (`/theme/hustlehour/`
   is live, 30 app phrases match, the row's screenshot basename is `hustlehour`).
   A banner would have written "superseded" into a correct file — worse than the
   flag it removed. The fold is read offline from the row's own screenshot
   basename and refuses any pair whose **digit sequences differ** (`creativex-3`
   vs `creativex` are numbered sibling demos, never aliases).
8. **Never claim the app confirms the spec when only the stray was refuted.**
   5 of the 18 dirs (`findspot`, `gather`, `inquire`, `palette`, `prose`) have an
   app whose copy matches *neither* candidate. The banner has a second wording
   (`--spec-only`) that names the spec and the row only; over-claiming is exactly
   the class of defect this axis exists to catch.
9. **No third opinion is a note, not a flag.** A dir with no row and no
   `apps/<name>` can never be adjudicated — it is `ORPHAN-NO-THIRD-OPINION` and
   is queued for a human. Leaving it flagged made the axis permanently red with
   nothing to fix (5 dirs).

## Adjacent fix — a rule-5 rename left a stale `shipped-as` marker

`verify-brief-spec.py` read `UNDER-TARGET-MISSING noir  target=oraxol  spec=oraxol`
plus `TARGET-NO-APP:oraxol`: the brief's `<!-- prep-status: shipped-as=oraxol -->`
marker outlived the app, which was renamed `oraxol` → `obsidian` (a ColorLib
source name) on 2026-10-24. The axis verifies the target app EXISTS, so the
rename turned a green axis red. Fixed in the same pass (`shipped-as=obsidian` +
the rename noted in the banner); it was the only marker in the corpus pointing at
a non-existent app (checked: 1 stale of 1,533 non-app briefs).

## How to run

```bash
python3 scripts/verify-brief-files.py                 # measured state + flags
python3 scripts/verify-brief-files.py --md out.md     # the STALE-ORPHAN table
python3 scripts/verify-brief-files.py --show STALE-TIE --verbose
python3 scripts/verify-brief-files.py --show ORPHAN-NO-THIRD-OPINION --verbose
python3 scripts/verify-brief-files.py --json out.json
python3 scripts/fix-brief-files.py --dry-run          # banner plan (measured set only)
python3 scripts/fix-brief-files.py --only a,b,c       # apply, app-confirmed wording
python3 scripts/fix-brief-files.py --only d,e --spec-only d,e   # stray refuted only
python3 scripts/verify-brief-files-controls.py        # 27/27 (10 GATE)
```

Exit code: `0` = no `STALE-ORPHAN`, `1` = flags, `2` = bad usage. The controls are
mutation-based and offline; the GATE cases disable the sibling-spelling fold, the
round-up exclusion, the demo-dir alias fold, the alias digit guard, the row/app
third opinion, or the `--spec-only` wording, prove the payload then fires, and
prove the fixer is a byte-level no-op on a second run.
