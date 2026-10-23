# Citation binding — whose size and sha is the evidence cell citing?

```sh
python3 scripts/verify-evidence-cells.py --md docs/evidence-cells.md
python3 scripts/verify-evidence-cells-controls.py    # 50/50 (16 GATE)
python3 scripts/reverify-citations.py --dry-run      # per-citation re-record
python3 scripts/reverify-citations.py --controls     # 7/7
```

`verify-evidence-cells.py` compares the size/sha256 a prep records beside a
stylesheet with the bytes that sheet serves today. Between 2026-10-23 and
2026-10-24 that axis reported **25 STALE-SKIN** — "the design moved after the
measurement". Most of them had not moved. The axis was reading the wrong line.

## What was wrong

A prep cites several sheets, and their citations collide in two ways:

| shape | example | what the axis used to read |
| --- | --- | --- |
| sibling pages | `aisle` cites `01-homepage/css/styles.css` (12,286 B), `02-rsvp/css/styles.css` (10,030 B), `03-regular-page/css/styles.css` (10,036 B) | the FIRST `styles.css` line in the file for all three, so two of three read as drift |
| icon font vs theme sheet | `draftwell`, `elixir` cite `fonts/icomoon/style.css` (79,820 B) *and* `css/style.css` | the icon font's identity as the theme sheet's |
| archive vs live copy | `looming`, `pending`, `grimoire` record the source zip's `css/style.css` (703 lines) and the live sheet separately | the zip's size as the live sheet's |
| one line, two sheets | `listnest` records `css/style.min.css?v=3.0.0` … sha256 `6b49…` **and** its icon subset `… fontawesome.subset.css` (1,672 B) | the subset's 1,672 B as the theme sheet's size |

None of the four was a design change. All four are the same defect: the
identity was bound to a **basename** found anywhere on the line, and the read
window ran across the next citation.

## What the axis reads now

* **Per-citation binding** — the sheet is bound on its own path tail, most
  specific first: `theme/wedding2/02-rsvp/css/styles.css` →
  `02-rsvp/css/styles.css` → `css/styles.css`. The first tail the prep actually
  writes wins, so each sibling page keeps its own numbers.
* **Bare means bare** — the basename fallback only accepts a citation with no
  directory in front of it (`(?<![\w./-])`). `fonts/icomoon/style.css` is a
  citation of the icon font, never of the theme's `style.css`.
* **Clause window** — the numbers must sit in the same clause: the window stops
  at the next `.css` the line names, so a size recorded for the icon subset is
  not read as the theme sheet's.
* **Size is the fact, sha the refinement** — the same sheet is often cited
  twice (a research line with a bare size, an identity table with size + sha).
  Agreeing sizes merge and keep the sha. **Disagreeing** sizes are
  `CITATION-AMBIGUOUS`: the cell cannot be bound, so neither drift nor a
  missing record is provable — a note, never `STALE-SKIN`.

## Census (main `ed44e2ef1` → this run, 377 preps / 3,253 claims)

| measure | before | after |
| --- | --- | --- |
| flags | 0 | 0 |
| STALE-SKIN | 25 | **5** |
| CITATION-AMBIGUOUS | — (did not exist) | 3 |
| IDENTITY-UNRECORDED | 69 | 73 |
| notes | 1,134 | 1,122 |

Cleared by the binder alone (no spec edit): `aisle`, `draftwell`, `elixir`,
`grimoire`→binding, `looming`, `pending`, `rackline`, `listnest`.

## The re-record: 12 sheets rebuilt at the SAME length

The host's v3 skins regenerate their minified bundle without changing its
length — only the sha256 moves, which is why a size comparison says "same file"
and a hash comparison says "moved". `scripts/reverify-citations.py` rewrites the
sha256 **per citation**, and only after confirming that every declared token
hex still paints and every cited selector still exists in the live sheet set.

| prep | sheet | size (unchanged) | recorded sha256 | live sha256 |
| --- | --- | --- | --- | --- |
| `cassini` | `cassi/css/style.min.css` | 89,402 | `d2422bb6c791` | `621ca40d6621` |
| `digiview` | `digilab/css/style.min.css` | 197,589 | `bf3dfdc5e304` | `98bcc4c896bb` |
| `forgehub` | `create/css/style.min.css` | 184,297 | `4042a1533c9f` | `bcb59af6e9c3` |
| `forgeit` | `create/css/style.min.css` | 184,297 | `4042a1533c9f` | `bcb59af6e9c3` |
| `kinectwell` | `physicaltherapy/css/style.min.css` | 194,735 | `c50f87452b3a` | `53e893325e06` |
| `learnhub` | `etrain/css/style.min.css` | 98,896 | `4b2d68f0590c` | `248497908046` |
| `localfinder` | `directing/css/style.min.css` | 118,350 | `0c4dbe57a255` | `3fcacf7444d3` |
| `palatable` | `delicious/style.min.css` | 201,681 | `eea7516f9746` | `1ead9826ca67` |
| `skylens` | `dronephotography/assets/css/style.min.css` | 206,874 | `45708808b9cd` | `2e2a4a2e4cee` |
| `sonance` | `megapod/css/style.min.css` | 94,276 | `c57f4ef3e5e4` | `23ad8d729915` |
| `tadpole` | `kindergarten/assets/css/style.min.css` | 201,297 | `d41228872160` | `69d1f3cccbe2` |
| `threadcraft` | `fashi/css/style.min.css` | 133,779 | `3ed88c29dc3b` | `732aa28eff86` |

The fixer refuses a spec whose rewrite does not verify, and it refuses any sheet
where a declared colour or a cited selector is gone — that sheet is DRIFT, and
it belongs to `measure-reference-tokens.py`.

## Residual — the re-measure queue (5)

| prep | recorded | live | why it is drift, not a record defect |
| --- | --- | --- | --- |
| `clydson` | 199,347 B | 215,600 B | size moved: the rebuild added rules |
| `repertoire` | 25,163 B | 129,479 B | size moved: the record was a fragment |
| `sanctum` | 196,805 B | 213,194 B | size moved |
| `exposely` | 41,697 B | 251,087 B | size moved **and** `.mfp-image-holder .mfp-close` is gone from the current sheet |
| `grimoire` | 19,129 B (source zip) | 19,448 B (live `?v=20934ca5`) | the prep cites the archive copy; the live copy is a different file |

In all five the declared palette still paints (0 `COLOUR-ABSENT-STALE`), so the
tokens are probably right — but the sheet they were measured from is not the
sheet served today, and only a re-measure can say what moved.

## More citations than the binder can separate (3)

`binnacle`, `davit`, `windlass` cite `style.css` several times with **no**
directory — different sizes, one basename. The binder reports
`CITATION-AMBIGUOUS` rather than guessing; the fix is in the prep: cite each
sheet by its path (`css/style.css`, `assets/css/style.css`, …). Until then the
cell is unreadable, which is the honest reading.

## Controls

`verify-evidence-cells-controls.py` is **50/50 (16 GATE)**. New cases:

* `c32` three sibling `styles.css` citations each read their own numbers;
  `c32b GATE` restores the basename-first binder and proves the same prep then
  reads STALE-SKIN (the `aisle` shape).
* `c33` `fonts/icomoon/style.css` does not lend its identity to `css/style.css`;
  `c33b GATE` lets `/` bind a bare basename and proves the borrow returns.
* `c34` a size-only research line and a size+sha identity table merge;
  `c34b GATE` proves two *different* sizes for one path stay
  `CITATION-AMBIGUOUS`.

`reverify-citations.py --controls` is **7/7**: the rewrite is per citation, a
byte-level no-op on the second run, refuses a bare/unbound citation, refuses a
size-only difference, and refuses a sheet whose declared colour is gone.
