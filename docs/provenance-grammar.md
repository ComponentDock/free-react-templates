# Provenance grammar — the rule-5 audit can only read one sentence

Rule 5 (AGENTS.md) says every recreation ships under a **new, original name** and
`scripts/audit-naming.mjs` measures it: for each `apps/<name>` it reads the FIRST
`ColorLib "X"` mention in `openspec/specs/template-<name>/spec.md` and compares
`X` with the folder name.

That makes the whole rule depend on one sentence's punctuation. A spec that
names its source the other obvious way —

```
Recreation of the ColorLib **Classic** business template
Recreate the ColorLib Halo photography portfolio template
A recreation of https://preview.colorlib.com/theme/classic/
```

— never matches the regex. The app is reported as `unknown` and the audit's
violation list is an **understatement**, not a count: it cannot tell a compliant
rename from an unchanged source name for one app in four.

This axis reads the provenance SENTENCE, offline, from the prep side.

```
python3 scripts/verify-provenance-grammar.py [--json FILE] [--limit N]
python3 scripts/fix-provenance-grammar.py  [--dry-run] [--verbose]
python3 scripts/verify-provenance-grammar-controls.py     # 25/25, 8 GATE
```

## What it measures

Every one of the 3,228 specs lands in exactly one bucket:

| bucket       | meaning                                                                     |
| ------------ | --------------------------------------------------------------------------- |
| `PARSED`     | the audited `ColorLib "X"` grammar is present                               |
| `RESOLVABLE` | absent, but the source is named in the spec — URL / `Source slug:` label / prose |
| `NO-EVIDENCE`| absent, and nothing in the spec names the source                            |

Resolution order (first hit wins): `colorlib.com/wp/template/<slug>/` →
`Source slug:` label → every preview path segment (`theme/<slug>/`,
`theme/bootstrap/<slug>/`, `theme/bb/<slug>/`, `theme/bac/<slug>/`) → the
archive name `downloads/free/<slug>.zip` → prose `ColorLib **X**` →
prose `ColorLib X`. A slug resolves to its design name through `TEMPLATES.md`,
which is the repo's own source-slug → design-name record; no network is used.

Flags:

| flag           | meaning                                                                                      |
| -------------- | -------------------------------------------------------------------------------------------- |
| `UNSEEN`       | `PARSED` absent — the naming audit cannot read this spec                                     |
| `RULE5`        | the folder normalises to its own source; the audit already reports it                        |
| `RULE5-HIDDEN` | the same violation, invisible to the audit (spec unseen, or the quoted name is a marketing title while the folder is the slug) |
| `AMBIG-SLUG`   | one slug resolves to two different design names — refuse rather than guess                    |

Notes: `PREP-ONLY` (no `apps/<folder>`), `NO-SOURCE-URL`, `SPEC-ROW-MISMATCH`.

## Census (measured 2026-10-24e, main `b05992cf1`)

|                              | before | after |
| ---------------------------- | -----: | ----: |
| specs `PARSED`               |  2,139 | 3,228 |
| specs `RESOLVABLE`           |  1,089 |     0 |
| specs `NO-EVIDENCE`          |      0 |     0 |
| `UNSEEN` flags               |  1,089 |     0 |
| `audit-naming.mjs` `unknown` |    445 |     0 |
| `audit-naming.mjs` violations|      5 |     9 |
| true violations (this axis)  |     10 |    10 |

1,089 specs named their source in prose; 445 of them own an app, i.e. a quarter of
the fleet. The fix is 1,089 spec edits, no app touched:

* `quote-bold` 617 — `ColorLib **Classic**` → `ColorLib "Classic"`
* `quote-bare` 98 — `ColorLib Halo` → `ColorLib "Halo"`
* `insert` 374 — one bullet at the end of `## Purpose`:
  `- **Source design:** ColorLib "Classic" — https://colorlib.com/wp/template/classic/`

## The 10 violations

The rename batches had recorded five (`medico` → `sanara`, #1839 landed just
before this axis, `mosh`, `pawpal`, `petsitting`, `petvet`). The other six were
invisible:

| app         | source design  | why the audit missed it                                  |
| ----------- | -------------- | -------------------------------------------------------- |
| `apps/expo` | Expo           | spec never used the quoted grammar (now reported)         |
| `apps/justlaw` | Justlaw     | same                                                      |
| `apps/nurture` | Nurture     | same                                                      |
| `apps/oraxol` | Oraxol      | same                                                      |
| `apps/unioncorp` | Unioncorp | same                                                      |
| `apps/itkol` | Itkol (slug `itkol`) | the spec quotes the marketing title `"IT-Solution"`; the folder equals the **slug**, not the quoted name — hidden after the fix (**closed**: renamed `vantix` in #1854, provenance line now `ColorLib "Itkol"`) |

So the naming audit now reports 9; the 10th needs the slug handle below. The
rename stream (`docs/naming-audit.md`) is the owner of the fixes — this axis
only finds them.

## The slug is a second handle (why `itkol` is still hidden)

`audit-naming.mjs` compares the folder with the quoted DISPLAY name. The spec
that survives every rename is the one whose quoted name is the ColorLib
marketing title (`"IT-Solution"`, `"CarRental"`, `"Reg Form V36"`) while the
folder is the slug (`itkol`, `carrentals`, `colorlib-regform-36`). This axis
therefore also tests the folder against the slug and the slug's row name, which
is what turns `apps/itkol` into `RULE5-HIDDEN`. Adding that comparison to
`audit-naming.mjs` would close it; that is a code change to the audit, not to a
prep, so it is left to the rename stream.

## Pins (each one cost a control run)

* **Graft the grammar exactly.** `audit-naming.mjs`'s regex spans newlines, and
  two specs quote a name across a line break (`"Colorlib\nError 404 V7"`). A
  `[^"\n]+` class here reported 17 apps as unseen that the audit does read.
* **A standalone `v` before digits is not a name difference.** `Modal V19` /
  `contact-form-12`, `Colorlib Error 404 V7` / `colorlib-error-404-7`: without
  `normv()` (strip `v` before a digit) 205 compliant specs flagged.
* **72 quoted names still differ textually from the row's design name** and
  **0 are a different design**: `Reg Form V36` ≡ `Regform 36`, `CarRental` ≡
  `Carrentals`, `CA App Landing` ≡ `Ca App`. A cross-design check was written,
  fired 6 times, and all 6 were benign (`studio` and `thrust` document their own
  title/slug mismatch in the spec). Do not re-add it as a flag.
* **Never rewrite a heading.** `## Sections & Structure (1:1 with ColorLib
  Restauco)` matches the prose regex; editing it changes a heading other axes
  parse (`-23i`, `-24h`). Two specs hit this before `_in_heading()`.
* **A design can own two rows.** `Classic` is row 936 (`acumen`) and row 1369
  (`linnet`); slug → name is still single-valued, app → row is not. Only use the
  slug → name direction.
* **Slug families and hyphen collapsing.** `theme/bb/bootstrap-buttons-02/`,
  `theme/bac/accordion-04/`, `theme/faith2/` (row `faith-2`), `theme/bookkeeping/`
  (row `book-keeping`). The ladder must try every path segment and a normalised
  match, or four preps stay unresolved for the wrong reason.
* **Insert one blank line.** The first insert pass put two blank lines before
  the next `##` in 374 files; `tidy_inserted()` collapses it and is a no-op
  afterwards. Run the fixer twice and `cmp` the md5 list — a second run must be
  byte-identical.
* **The fixer's own guard**: heading count unchanged AND the result must parse,
  else it refuses and counts the file as left-to-fix.

## Residual

* `apps/itkol` — **closed** (#1854): renamed `apps/vantix`, and the spec's
  provenance line now names the design — `ColorLib "Itkol" (marketing title
  "IT-Solution")` — instead of the marketing title, so the grammar reads it. The
  slug comparison in `audit-naming.mjs` is still worth adding as a guard.
* 9 `RULE5` violations for the rename stream: `expo`, `justlaw`, `nurture`,
  `oraxol`, `unioncorp` are new to it; `mosh`, `pawpal`, `petsitting`, `petvet`
  were already listed (`medico` became `sanara` in #1839).
* 20 `SPEC-ROW-MISMATCH` notes: the spec's source slug differs from the slug on
  the `TEMPLATES.md` row that links the app (`bellows` accordion-15 vs row
  accordion-03, `givehope` bcharity vs row givehope, `landing`/`medical`
  round-up rows). Each needs a live read to say which design the app recreates —
  not resolvable offline, so it stays a note.
* 2 `NO-SOURCE-URL` (`searchhub`, `whiteroom`): the name came from prose and the
  spec cites no source URL at all; quoted in place, no URL invented.

## Next axes

1. The 20 `SPEC-ROW-MISMATCH` preps: resolve each against the live preview and
   the app's own copy (the `-23d` RE-SKIN method).
2. `audit-naming.mjs` slug comparison (code, rename stream): turns `itkol` red.
3. `verify-evidence-cells` residual STALE-SKIN 5 (re-measure queue, unchanged).
4. Record grammar: `takeoff` states a correct digest without the `sha256`
   keyword (`629f91aa24b0…`); census unlabelled digests beside sheet citations.
