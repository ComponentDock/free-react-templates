# Docs-source drift — does the brief name the design its spec ships?

Two layers claim which ColorLib design an app recreates:

- the **spec** — `openspec/specs/template-<name>/spec.md`, judged against the
  `TEMPLATES.md` row by `scripts/verify-spec-row-mismatch.py` and `docs/spec-row-mismatch.md`;
- the **brief** — `docs/templates/<name>/design-notes.md` + `tasks.md`, the layer
  an implementer actually reads while building.

Nothing compared the brief with the spec. On 2026-10-24 `docs/templates/jobboard/design-notes.md`
defined `--color-brand: #1644ba` (Careers blue) over a spec that measured
Jobboard's lime `#89ba16`, and `ledger`'s whole brief described "Accounting"
over Daren. A corrected spec with a stale brief is not a corrected prep: the
brief would repaint the app.

```
python3 scripts/verify-docs-source.py           # offline census, 0 flags = clean
python3 scripts/verify-docs-source-controls.py  # 15/15 controls (4 GATE)
```

## What it measures

Every shipped app lands in exactly one bucket:

| bucket | meaning |
| --- | --- |
| `AGREE` | brief and spec name the same design (after slug normalisation) |
| `DOCS-STALE` | spec == row, brief names another design → **flag** |
| `SPEC-STALE` | brief == row, spec names another design → **flag** |
| `ROW-MULTI` | the row carries both designs, so the brief picked a named sibling — rename/row work, not a prep flag |
| `DOC-SILENT` | the brief cites no ColorLib design at all (note) |
| `NO-DOCS` / `NO-SPEC` | missing layer (note) |

Notes: `NEAR-SLUG` (one normalised slug is a prefix of the other — spelling
variant, not drift), `ROW-MULTI`, `BRIEF-PICKS-OTHER-SIBLING`.

## Measured state (2026-10-24, `origin/main` @ `0f6a11820`)

`shipped apps read: 1703 · TEMPLATES.md rows: 2857`

| bucket | count |
| --- | --- |
| `AGREE` | 1,672 |
| `DOCS-STALE` | 26 |
| `SPEC-STALE` | 1 |
| `ROW-MULTI` | 3 (`counsel`, `reachout`, `roost` — the known row-multiplicity pairs) |
| `DOC-SILENT` | 1 (`splitmodal`) |

27 flags — **26 after this run's `smithy` fix** (`AGREE` 1,673, `DOCS-STALE` 25,
`SPEC-STALE` 1, `ROW-MULTI` 3, `DOC-SILENT` 1). Adjudicated with the app-side axis (`verify-app-fidelity.py --slug <app>`):
**26 of the 27 apps paint the brand colour their SPEC states** (`COVERED` /
`APPROX`), so the brief is the stale layer. `btnspark` inverts: its spec claims
`#7c3aed` while the app paints `#0d6efd` (Δ111) — the app followed the brief, so
`btnspark` is a SPEC-STALE case, not a DOCS-STALE one.

## The 27 cases

| app | bucket | spec | brief | row | class |
| --- | --- | --- | --- | --- | --- |
| `btnspark` | SPEC-STALE | bootstrap-buttons-14 | bootstrap-buttons-02 | bootstrap-buttons-02 | spec-side |
| `buildwell` | DOCS-STALE | celt | balay | celt | design drift |
| `captura` | DOCS-STALE | halen | bato | halen | design drift |
| `craftwork` | DOCS-STALE | schmidt | design | schmidt | design drift |
| `crux` | DOCS-STALE | bbs | olla | bbs | design drift |
| `derrick` | DOCS-STALE | vertex | engineers | vertex | design drift |
| `dropform` | DOCS-STALE | contact-form-v8 | dropdown-07 | contact-form-v8 | design drift |
| `elixir` | DOCS-STALE | pharma | colorlib-wizard-29 | pharma | design drift |
| `feastly` | DOCS-STALE | foodfun | buri | foodfun | design drift |
| `formbreeze` | DOCS-STALE | contact-form-v1 | ContactFrom_v1 | contact-form-v1 | citation |
| `guideway` | DOCS-STALE | consulotion | consolotion | consulotion | citation |
| `jobpulse` | DOCS-STALE | search-form-bar-08 | jobsco | search-form-bar-08 | design drift |
| `lenscape` | DOCS-STALE | schmidt | bato | schmidt | design drift |
| `medical` | DOCS-STALE | medical | medical-wordpress-themes | medical | citation |
| `praxis` | DOCS-STALE | drpro | university | drpro | design drift |
| `querybar` | DOCS-STALE | colorlib-search-19 | colorlib-search-18 | colorlib-search-19 | design drift |
| `reachform` | DOCS-STALE | contact-form-v2 | contact-form-17 | contact-form-v2 | design drift |
| `searchgate` | DOCS-STALE | search-form-bar-06 | colorlib-search-5 | search-form-bar-06 | design drift |
| `smithy` | DOCS-STALE | satner | schmidt | satner | design drift |
| `soundbite` | DOCS-STALE | the-hustle-hour | hustlehour | the-hustle-hour | citation |
| `spinwheel` | DOCS-STALE | carousel-17 | carousel-04 | carousel-17 | design drift |
| `stallion` | DOCS-STALE | fitness | durg | fitness | design drift |
| `stepforge` | DOCS-STALE | colorlib-wizard-26 | colorlib-wizard-25 | colorlib-wizard-26 | design drift |
| `vignette` | DOCS-STALE | karl | bato | karl | design drift |
| `visage` | DOCS-STALE | vcard2 | thelook | vcard2 | design drift |
| `zenbloom` | DOCS-STALE | yogabest | yogafun | yogabest | design drift |
| `zing` | DOCS-STALE | tasteit | zeta | tasteit | design drift |

Classes:

- **design drift (22)** — the brief names a *different design*: `smithy` (Satner
  app, "Schmidt" brief, gold `#d5c455` over the app's `#4458dc`), `lenscape`,
  `visage`, `praxis`, `feastly`, `derrick`, `vignette`, `buildwell`, `captura`,
  `craftwork`, `crux`, `dropform`, `elixir`, `jobpulse`, `querybar`, `reachform`,
  `searchgate`, `spinwheel`, `stallion`, `stepforge`, `zenbloom`, `zing`. Each
  needs spec **and** brief re-read against the live reference before either is
  "fixed" (the `-24f`/`-24g` rule: adjudicate with the app's own copy, never by
  preference).
- **citation defect (4)** — same design, wrong slug in the brief:
  `formbreeze` cites the `/etc/cf/ContactFrom_v1/` demo folder for `contact-form-v1`;
  `guideway` cites `consolotion` (wp 404) for `consulotion` (wp 200);
  `medical` cites the category slug `medical-wordpress-themes` (wp 301) for `medical`;
  `soundbite` cites the demo folder `hustlehour` (theme 200) for the article slug
  `the-hustle-hour` (wp 200). These are one-line fixes, no rewrite.
- **spec-side (1)** — `btnspark`: spec says `bootstrap-buttons-14`, row + brief say
  `bootstrap-buttons-02`, and the app paints Bootstrap's default `#0d6efd` set
  (the `-02` brief's palette). Fix the spec.

## Guards, and the four extraction traps this axis hit

1. **Declared slug vs prose.** The labelled tier is line-anchored
   (`^\s*-?\s*Source slug: \`x\``); the unanchored form matched prose
   ("… not the ColorLib source slug \`sakura\`") and invented 65 flags on the
   first run.
2. **Sentence punctuation.** `…/theme/busicol/.` yielded slug `.` until
   `last_seg()` stripped trailing dots — `finpilot` read as a phantom SPEC-STALE.
3. **Two-letter slugs are real.** `br` (buzz), `kd` (gable), `me` (vitae), `dj`
   (vynl) — a `len >= 3` floor silently bucketed four correct briefs `DOC-SILENT`.
4. **Family prefixes are transparent.** `/theme/bootstrap/<slug>/`,
   `/theme/bft/<slug>/`, `/theme/bb/<slug>/` — the last path segment is the slug,
   and `/etc/<family>/<folder>/` (comingsoon/contact-form/search families) is the
   demo folder of the same design.
5. **Numbered siblings are never normalised away.** `bootstrap-buttons-14` vs
   `-02` differ by exactly the digits that identify them; only non-alphanumeric
   spelling differences are normalised.

## Fix queue

1. ~~`smithy`~~ — brief + tasks rewritten 2026-10-24 (this record's companion
   commit); the axis now buckets it `AGREE` and the corpus reads 26 flags.
2. 21 remaining design-drift briefs, one per run, each with a live re-read of the
   spec's slug (the `-24f` rewrite queue overlaps: `bistro`, `concertina`,
   `formwell`, `prose`, `vellum`, `zenith` are spec-side there).
3. 4 citation defects — mechanical, safe to batch.
4. `btnspark` — spec slug correction (`bootstrap-buttons-02`), then re-run this
   axis to confirm 24 → 23.
