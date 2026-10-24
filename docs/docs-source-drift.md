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

## Measured state (2026-10-24, `origin/main` @ `78f852265`, re-run after the second fix batch)

`shipped apps read: 1703 · TEMPLATES.md rows: 2857`

| bucket | count |
| --- | --- |
| `AGREE` | 1,681 |
| `DOCS-STALE` | 17 |
| `SPEC-STALE` | 1 |
| `ROW-MULTI` | 3 (`counsel`, `reachout`, `roost` — the known row-multiplicity pairs) |
| `DOC-SILENT` | 1 (`splitmodal`) |

**18 flags**, down from 27 when the axis shipped: 27 → 26 (`smithy`), → 25 (`buildwell`),
→ **21** (the four citation defects), → **18** (`lenscape`, `craftwork`, `vignette` —
three briefs that described Bato / “Design” over a Schmidt or Karl spec, re-measured
from the live sheets 2026-10-24). Controls `15/15` at this figure.

⚠️ **Scope: the axis reads SHIPPED apps only.** `docs/templates/` holds **3,236** briefs while
`apps/` holds 1,703 — so **1,533 prepped-but-unshipped briefs are unjudged**, and a stale brief
there becomes the implementer's source the moment that template ships. That comparison is the
next axis (spec ↔ brief over `openspec/specs/`, not `apps/`). Adjudicated with the app-side axis (`verify-app-fidelity.py --slug <app>`):
**26 of the 27 apps paint the brand colour their SPEC states** (`COVERED` /
`APPROX`), so the brief is the stale layer. `btnspark` inverts: its spec claims
`#7c3aed` while the app paints `#0d6efd` (Δ111) — the app followed the brief, so
`btnspark` is a SPEC-STALE case, not a DOCS-STALE one.

## The 27 cases

| app | bucket | spec | brief | row | class |
| --- | --- | --- | --- | --- | --- |
| `btnspark` | SPEC-STALE | bootstrap-buttons-14 | bootstrap-buttons-02 | bootstrap-buttons-02 | spec-side |
| `buildwell` | ~~DOCS-STALE~~ **FIXED** | celt | ~~balay~~ celt | celt | design drift — brief rewritten from the live Celt sheet 2026-10-24 |
| `captura` | DOCS-STALE | halen | bato | halen | design drift |
| `craftwork` | ~~DOCS-STALE~~ **FIXED** | schmidt | ~~design~~ schmidt | schmidt | design drift — brief re-measured from the live Schmidt sheet 2026-10-24 |
| `crux` | DOCS-STALE | bbs | olla | bbs | design drift |
| `derrick` | DOCS-STALE | vertex | engineers | vertex | design drift |
| `dropform` | DOCS-STALE | contact-form-v8 | dropdown-07 | contact-form-v8 | design drift |
| `elixir` | DOCS-STALE | pharma | colorlib-wizard-29 | pharma | design drift |
| `feastly` | DOCS-STALE | foodfun | buri | foodfun | design drift |
| `formbreeze` | ~~DOCS-STALE~~ **FIXED** | contact-form-v1 | ContactFrom_v1 | contact-form-v1 | citation — `/etc/cf/` demo folder, now labelled |
| `guideway` | ~~DOCS-STALE~~ **FIXED** | consulotion | ~~consolotion~~ consulotion | consulotion | citation — typo fixed |
| `jobpulse` | DOCS-STALE | search-form-bar-08 | jobsco | search-form-bar-08 | design drift |
| `lenscape` | ~~DOCS-STALE~~ **FIXED** | schmidt | ~~bato~~ schmidt | schmidt | design drift — brief + task outline re-measured 2026-10-24 |
| `medical` | ~~DOCS-STALE~~ **FIXED** | medical | ~~medical-wordpress-themes~~ medical | medical | citation — category URL 301, now `medical` |
| `praxis` | DOCS-STALE | drpro | university | drpro | design drift |
| `querybar` | DOCS-STALE | colorlib-search-19 | colorlib-search-18 | colorlib-search-19 | design drift |
| `reachform` | DOCS-STALE | contact-form-v2 | contact-form-17 | contact-form-v2 | design drift |
| `searchgate` | DOCS-STALE | search-form-bar-06 | colorlib-search-5 | search-form-bar-06 | design drift |
| `smithy` | DOCS-STALE | satner | schmidt | satner | design drift |
| `soundbite` | ~~DOCS-STALE~~ **FIXED** | the-hustle-hour | ~~hustlehour~~ the-hustle-hour | the-hustle-hour | citation — demo folder, now `the-hustle-hour` |
| `spinwheel` | DOCS-STALE | carousel-17 | carousel-04 | carousel-17 | design drift |
| `stallion` | DOCS-STALE | fitness | durg | fitness | design drift |
| `stepforge` | DOCS-STALE | colorlib-wizard-26 | colorlib-wizard-25 | colorlib-wizard-26 | design drift |
| `vignette` | ~~DOCS-STALE~~ **FIXED** | karl | ~~bato~~ karl | karl | design drift — brief + token list re-measured 2026-10-24 |
| `visage` | DOCS-STALE | vcard2 | thelook | vcard2 | design drift |
| `zenbloom` | DOCS-STALE | yogabest | yogafun | yogabest | design drift |
| `zing` | DOCS-STALE | tasteit | zeta | tasteit | design drift |

Classes:

- **design drift (22, 5 fixed → 17)** — the brief names a *different design*:
  `smithy`, `buildwell` (Balay brief over a Celt app), `lenscape`, `craftwork`
  and `vignette` are fixed (the last three on 2026-10-24 in one batch, each
  re-measured from its spec's live sheet). Remaining:
  `visage`, `praxis`, `feastly`, `derrick`, `captura`,
  `crux`, `dropform`, `elixir`, `jobpulse`, `querybar`, `reachform`,
  `searchgate`, `spinwheel`, `stallion`, `stepforge`, `zenbloom`, `zing`. Each
  needs spec **and** brief re-read against the live reference before either is
  "fixed" (the `-24f`/`-24g` rule: adjudicate with the app's own copy, never by
  preference).
- **citation defect (4, all fixed 2026-10-24)** — same design, wrong slug in the brief:
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

1. ~~`smithy`~~ — brief + tasks rewritten 2026-10-24; buckets `AGREE`.
2. ~~`buildwell`~~ — brief + tasks + spec rewritten from the live Celt sheet 2026-10-24
   (`celt`: preview 200/31,820 B, `css/style.css` 28,799 B sha `2f934fdf…`, 75 anchors
   (65 dead), two pages only, archive 404). The brief had described Balay (sidebar +
   hero slider + Quicksand); it now carries Celt's navy `#001232` / yellow `#FFD626`
   palette, Poppins, and the real band order — including the three factual corrections
   the old spec had wrong: the hero is a **white 0.9 wash** with a navy headline and
   **one** CTA, there is **no newsletter band** (the form lives in the footer's
   "Keep in touch" widget, the yellow pre-footer strip is a Contact-Us CTA), and the
   stats use a 60px glyph **left** of each number, not a centred badge. Those three
   are recorded as `## App deltas (as shipped)` in the spec — the app is not touched.
3. ~~4 citation defects~~ — fixed 2026-10-24 in one batch, each re-probed: `formbreeze`
   (`contact-form-v1` wp 200; `/etc/cf/ContactFrom_v1/` 200 is the demo folder,
   `theme/contact-form-v1/` 404), `guideway` (`consulotion` wp 200 vs `consolotion` 404,
   `theme/consulotion/` 404), `medical` (`medical` wp 200 **and** `theme/medical/` 200;
   `medical-wordpress-themes` **301** → category page), `soundbite`
   (`the-hustle-hour` wp 200 as the design, `theme/hustlehour/` 200 as the demo folder,
   `wp/template/hustlehour/` 404). All four needed the labelled `Source slug:` tier —
   the axes read `ColorLib slug:` as no label at all.
4. 20 remaining design-drift briefs, one per run, each with a live re-read of the
   spec's slug (the `-24f` rewrite queue overlaps: `bistro`, `concertina`,
   `formwell`, `prose`, `vellum`, `zenith` are spec-side there).
5. `btnspark` — spec slug correction (`bootstrap-buttons-02`), then re-run this
   axis to confirm 21 → 20.
6. **Next axis:** spec ↔ brief over `openspec/specs/` (the 1,533 unshipped briefs).
