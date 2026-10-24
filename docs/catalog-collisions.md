# Catalogue URL collisions — one demo directory, two designs

The preview host's own catalogue map (`assets/js/catalog-products-*.js`, loaded by
`scripts/catalog_resolve.py`) keys posts to demo directories. It can key **two
different ColorLib posts to one directory**. The directory can only render one of
them, so every prep citing it — and every app built from that prep — reproduces
whichever design the host currently serves, which may not be the design the
`TEMPLATES.md` row's screenshot shows.

```sh
python3 scripts/verify-catalog-collisions.py               # inventory + per-file residue
python3 scripts/verify-catalog-collisions.py --strict      # exit 1 when a group has no note at all
python3 scripts/verify-catalog-collisions.py --strict-files # exit 1 when any citing FILE has none
python3 scripts/verify-catalog-collisions.py --group theme/fashion/
python3 scripts/verify-catalog-collisions.py --self-test   # controls, 11/11
```

Measured state (re-probed 2026-10-24, `main` @ `c7c20a255` + this commit):
**8 colliding directories · NOTED 8 · UNNOTED 0 · NO-SPEC 0 · 0 citing files
without a note.**

## Why a 200 proves nothing

The slug in the URL is not the design. `theme/<a>/` can serve post *b*'s page, so
an HTTP 200 answers "this directory exists", never "this is the design you
think". Identity is settled by, in order:

1. the post's own `og:image` on `colorlib.com/wp/template/<slug>/`
   (`curl -s https://colorlib.com/wp/template/<slug>/ | grep og:image`) — compare
   it with the row's screenshot;
2. the page's section copy and `<title>` against the design the prep describes;
3. the sheet's declared tokens (`css/style.css` size + sha256, brand hex count);
4. the catalogue key's `name` — **never** trust it: `catalog-141348` is called
   "Medi+" but its `details` is the `medi` post.

Before writing "unreachable", walk the prefix ladder — `theme/<slug>/`,
`theme/<slug>-2/`, `theme/<slug>2/`, `theme/bootstrap/<slug>/`,
`theme/<family>/<slug>/` — and the archive guesses
`downloads/free/<slug>.zip`, `<slug>-2.zip`, `<slug>2.zip`. Two collisions in
this corpus are **data bugs, not dead designs**: the design is live under its own
directory and only the catalogue `url` field is wrong (`theme/listed2/`,
`theme/lawfirm-2/`'s rebuild).

## The eight directories (2026-10-24)

| directory | keys → posts | what the directory serves | the other design's demo | preps touched |
| --- | --- | --- | --- | --- |
| `theme/fashion/` | `catalog-141306` → `/template/fashion/` (bold green→yellow) · `fashion` → `/template/fashion-2/` (coral "Fashion.") | **`fashion-2`** — 26,584 B page, sheet 29,430 B sha `75499322b02a2b2d…`, coral `#ff6363` ×30, hover `#ff7777` ×2 | none: `fashion-2/`, `fashion2/`, `ashion/`, `bootstrap/fashion-2/` 404; `fashion.zip`, `fashion-2.zip`, `asion.zip` 404 | `drapery`, `bespoke`, `silhouette` (7 files) |
| `theme/lawfirm/` | `catalog-141453` → `/template/lawfirm/` (2021 serif gold/navy full-screen) · `lawfirm` → `/template/lawfirm-2/` | **`lawfirm-2` v3.0.2 rebuild** — 46,599 B page, `<title>` "Lawfirm — Law Firm &amp; Attorneys", fingerprint `?v=3.0.2` / bootstrap 5.3.8 / swiper 14.3.0 / jarallax 3.1.0 / self-hosted Roboto | the serif design: no demo on 13 prefixes, no archive | `chambers`, `statutory`, `docket`, `juresc`, `counselhub`, `amicus`, `precedent` (17 files) |
| `theme/lawyer/` | `catalog-199854` → `/template/lawful/` · `lawyer` → `/template/lawyer/` | **`lawyer` v3.0.0 rebuild** — 23,712 B, `<title>` "Thoughtful conversations, clear next steps \| Lawyer", `css/modern.min.css` over the classic sheet | `lawful` is live at `theme/lawful/` (Raleway/Playfair, `#f13d80 → #f48464`, `#f8b600`) | `esquire`, `briefly` (4 files) |
| `theme/listed/` | `listed` → `/template/listed/` · `listed2` → `/template/listed2/` | **`listed`** (23,918 B, `<title>` "Colorlib Listed Directory Template") | **data bug**: `theme/listed2/` answers 200 with its own design (Quicksand, `#7971ea`) — nothing is missing, only the map's `url` is wrong | `directory`, `placeboard`, `spotlight` (6 files) |
| `theme/medical/` | `medical` → `/template/medical/` · `medical-2` → `/template/medical-2/` | **`medical-2`** (34,704 B; green `#69be00`, "We Care for Your Health Every Moment") | `medical`'s "TEAM OF EXCELLENCE" design: 10 prefixes 404, both archives 404 — that row can never be re-measured | `medlink`, `verdia` (4 files) |
| `theme/mediplus/` | `catalog-141348` → `/template/medi/` · `mediplus` → `/template/mediplus/` | **`mediplus` v3.0.1 rebuild** (66,301 B, `<title>` "Mediplus — Medical Clinic and Family Doctors in Mountain View") | `medi` lives at `theme/medi/` + alias `theme/medi-plus/`; `/wp/template/medi-plus/` 404s — an alias directory is not a post | `medvista` (3 files) |
| `theme/music/` | `catalog-141301` → `/template/music/` (fullscreen musician) · `music` → `/template/music-2/` | **`music-2` rebuild** (24,529 B, `<title>` "Music") | the fullscreen design: no demo on any prefix, no archive | `ampstat`, `encore`, `melodica`, `melody`, … (12 files) |
| `theme/yummy/` | `catalog-134132` → `/template/yummy/` ("Creative Food **Blog**") · `yummy` → `/template/yummy-2/` ("Food **Magazine**") | **`yummy-2` magazine** — 21,709 B page, sheet 42,720 B sha `d08c771dd457…`, `#fc0254` brand | the blog design: `yummy-2/`, `yummy2/`, `bootstrap/yummy/` 404, no archive | `simmer`, `umami`, `zesty` (8 files) |

Two shapes are **not** prep errors and must not be "fixed" by repainting a spec:
a directory serving a *rebuild* (`lawfirm`, `lawyer`, `mediplus`, `music`,
`fashion`'s 2026 coral re-skin) leaves the prepped design unreachable, so the
prep records the retired variant and the app becomes a row/fidelity subject; and
the `listed` case where the map, not the host, is wrong. `verify-shape-tokens.py`
and `verify-live-tokens.py` resolve demos **catalogue-first**, so a colliding key
makes them measure a spec against its *sibling's* page — run them with
`NO_CATALOG=1` as the A/B control when a verdict looks impossible.

## The resolver is collision-aware (`catalog_resolve.demo_via`, 2026-10-24y)

`verify-shape-tokens.py`, `verify-live-tokens.py` and
`classify-live-token-flags.py` resolve a spec's demo **catalogue-first**
through `scripts/catalog_resolve.py`. That made a colliding key measure a spec
against its *sibling's* page — the false verdicts this axis documented — and the
only workaround was to re-run with `NO_CATALOG=1`.

`demo_via()` now closes that hole. When the catalogue sends a slug to a
directory claimed by **more than one product entry**, it probes the slug's own
`/theme/<slug>/` and prefers it **only if it answers 200 with a different body
digest** (`via="slug-own"`). The digest is the deciding fact because a 200
never adjudicates identity (see above); the slug that owns the directory gets
its own page back unchanged. `colorlibPreviewAliases` entries are plain strings
in the map, so an alias spelling is not counted as a second claim.

Measured blast radius (live, 2026-10-24): **8 colliding directories · 20
catalogue keys resolve through one · exactly 1 changes**:

| slug | map → | before | after |
| --- | --- | --- | --- |
| `listed2` | `theme/listed/` | sibling's page | **`theme/listed2/`** — `via=slug-own`, 28,876 B, `<title>` "Listed — Colorlib Website Template" |

The other 19 keys (`listed`, `medical`, `medical-2`, `mediplus`,
`catalog-141348`, `lawyer`, `lawfirm`, `lawfirm-2`, `music`, `music-2`, `yummy`,
`yummy-2`, `fashion`, `fashion-2`, `catalog-141301/134132/141306/199854/141453`)
are unchanged: their own directory *is* the resolved one, the bodies match, and
no probe fires for a non-colliding entry. The extra fetch is bounded by the
`claims > 1` test, so the corpus-wide behaviour is identical everywhere else.

```sh
python3 scripts/catalog_resolve.py --self-test   # 7/7 controls
```

Effect on the record: the two `SHAPE-WRONG` flags on `placecraft` and
`spotlight` (`.form-search-wrap .btn { border-radius: 30px }` measured against
`theme/listed/`'s sharp `.btn`) now read **0 flags in catalogue-first mode** —
`--slug placecraft` goes 1 → 0 without `NO_CATALOG=1`, which stays as the A/B
control. `verify-live-tokens.py --all --worktree` is **0 flags** again.

## The gap this axis hid: group-level vs file-level

`NOTED` was a **group** fact — one citing spec with a note cleared the directory.
Measured 2026-10-24: NOTED 8/8, yet **three citing files carried no note at all**:

| file | directory | what was wrong |
| --- | --- | --- |
| `docs/templates/silhouette/design-notes.md` | `theme/fashion/` | §Purpose still summarised the design as "green (#6DAB3C) brand, dark charcoal (#1a1a2e) sections" — the **invented** palette — while the same file's appendix measured coral `#ff6363`. The reference-identity material existed but was headed "REFERENCE RESOLVED", so nothing matched it and an implementer reading the top got the wrong palette. Now: coral summary, the app `@theme` table banner-labelled as the app's record and debt, and a §Reference identity carrying the two-entries-one-demo chain. |
| `docs/templates/silhouette/tasks.md` | `theme/fashion/` | the requirement bullet still prescribed `#6DAB3C`/`#B97EBB`/`#1a1a2e` as the design. Now the measured coral set, with the app palette named as debt. |
| `docs/templates/umami/design-notes.md` | `theme/yummy/` | only a cross-reference ("see the identity note in the spec") — a reader of the brief alone could not tell which of the two designs the directory renders. Now an inline table (`yummy` → magazine = this row, `catalog-134132` → blog = dead) with the re-probed bytes/sha. |

`verify-catalog-collisions.py` now prints every silent citing file and counts them
(`citing files without a note: 0`), and `--strict-files` fails on any residue. The
`NOTED` bucket is unchanged, so the census stays comparable.

Lesson, the same one `docs/docs-source-drift.md` records for briefs: **the note
belongs in every file that cites the directory, not in one canonical place.** A
cross-reference is not a note — a brief is read alone.

## Sibling pairs — the other half of the class (adjudicated 2026-10-24z)

`verify-catalog-collisions.py` only sees a collision when two keys share one
`url`. The other half is a pair of keys that differ only by an inflection — a
plural (`cake`/`cakes`, `shopper`/`shoppers`), a numeric re-post
(`bakery`/`bakery2`), or the latin `-a`/`-ics` tail (`academia`/`academics`) —
and therefore reach **different** directories, where no collision ever fires. The
queue's premise was that a dead second directory hides in that gap and makes a
row a false `[x]`.

```sh
python3 scripts/verify-sibling-pairs.py                # census
python3 scripts/verify-sibling-pairs.py --strict        # exit 1 on any flag
python3 scripts/verify-sibling-pairs.py --pair cake:cakes
python3 scripts/verify-sibling-pairs.py --self-test     # controls, 17/17
python3 scripts/verify-sibling-pairs-controls.py        # mutation harness, 18/18 (4 GATE)
```

Measured 2026-10-24z: **53 pairs · 74 directories · TWO-DESIGNS 44 ·
SHARED-URL 8 · NO-IDENTITY 1 · ONE-DEAD 0 · BOTH-DEAD 0.** The premise does not
hold for this corpus: every side of every pair answers 200 and renders its own
document, so the class contributes no false `[x]`.

The two scanners read different halves of the same data, and diffing them is the
cross-check. The census's 8 `SHARED-URL` pairs are **alias spellings** —
`fashion`/`fashion-2`, `lawfirm`/`lawfirm-2`, `legaledge`/`legaledge-2`,
`listed`/`listed2`, `medi`/`medi-2`, `medical`/`medical-2`, `music`/`music-2`,
`yummy`/`yummy-2`. The collision scanner's 8 directories are pairs of **distinct
posts** behind one directory — `fashion`, `lawfirm`, `lawyer`, `listed`,
`medical`, `mediplus`, `music`, `yummy`. Six appear in both lists; the census
adds `legaledge` + `medi` (one post, two keys — nothing to adjudicate), the
scanner adds `lawyer` + `mediplus` (two posts whose keys are not inflections of
each other, so this rule cannot reach them by construction). The symmetric
difference is fully explained, which is what closes the class.

The queue's three named pairs, re-measured:

| pair | left | right | verdict |
| --- | --- | --- | --- |
| `cake` / `cakes` | 59,957 B, `<title>` "Cake \| Template", 6 headings | 28,721 B, "Cakes - Template", 12 headings | **TWO-DESIGNS** — 0 shared headings |
| `academia` / `academics` | 78,609 B, "Academia - Online Courses & Learning", 44 headings | 32,115 B, "Academics — Website by Colorlib", 24 headings | **TWO-DESIGNS** — 0 shared headings |
| `fashion` / `fashion-2` | 26,945 B, shared directory | 26,945 B, shared directory | **SHARED-URL** — already adjudicated above |

One pair cannot be decided by the census and is recorded as a note, not a flag:
`vcard` (8,377 B, `<title>` "Vcard - Resume CV & Vcard Template") vs `vcard2`
(10,812 B, `<title>` "About") — both live, different sizes and titles, but
`vcard2` carries no `<h1>`–`<h4>` at all, so the heading signature is empty and
identity has to be settled by screenshot, not by the scanner.

**Identity is a heading signature, never a byte digest.** A preview page's bytes
are request-unstable: two GETs of `theme/industries/` in the same run returned
27,976 B with two different sha256s. A byte rule would report "two designs" for
one document, and — worse — "one design" for two pages whose only difference is
copy. The signature is the sorted, lowercased set of `<h1>`–`<h4>` texts; two
pages match at an identical signature or at ≥4 shared headings with ≥0.8 Jaccard.
The 8 GATE/mutation controls in `verify-sibling-pairs-controls.py` fail if the
rule is changed to bytes.

## Queue

1. ~~Inventory: 8 colliding directories~~ — done; all 8 adjudicated and noted.
2. ~~Per-file residue (3 files)~~ — done 2026-10-24.
3. ~~Make `catalog_resolve.demo_via` collision-aware~~ — done 2026-10-24y
   (`via="slug-own"`, body-digest test, 7/7 self-test; 20 keys → 1 moved). The
   two `SHAPE-WRONG` false verdicts it was blocking are gone.
4. **Row-pointer left to the implementer/rename stream** (not prep work): the
   *other* design in a collision is unshipped where it has no demo, so its row is
   a false `[x]`. `medical` (row 2245, "TEAM OF EXCELLENCE" — no demo exists),
   `music` (`catalog-141301` fullscreen design), `fashion` (row 1709, bold
   green→yellow design) and `lawfirm` (row 1387/1760/2123, 2021 serif design) all
   credit an app that recreates the sibling. Those rows need re-pointing or the
   designs building, which is `docs/spec-row-mismatch.md` §Queue work.
5. ~~Sibling pairs worth one census pass~~ — done 2026-10-24z
   (`scripts/verify-sibling-pairs.py`, controls 18/18): **53 pairs · 74
   directories · TWO-DESIGNS 44 · SHARED-URL 8 · NO-IDENTITY 1 · ONE-DEAD 0 ·
   BOTH-DEAD 0**. The premise ("where the second 404s the post is dead and its
   row is a false `[x]`") does **not** hold for this corpus — every side of every
   pair is live and renders its own document, so this class contributes no false
   `[x]`. Re-run only as a control, not as a queue item.
