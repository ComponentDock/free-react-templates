# Prorata — build record (measured deltas the spec asked for)

Shipped 2026-11-12 in `apps/prorata`. This file records the decisions the spec left open and every
number the port does **not** reproduce to the hundredth, so nobody "fixes" a documented delta later.

## 1. Decisions the spec asked the port to make

| Spec item | Decision | Why |
| --------- | -------- | --- |
| 6. dead `<form>` | **dropped** for `<div role="group" aria-labelledby>`, as the spec's first option | the reference keeps a `submit` handler with no submit affordance, so `Enter` did nothing. Nothing to preserve, and a `preventDefault`-only form is a lie to assistive tech |
| 1. dead anchors | CTA **and** footnote link both resolve to `https://www.componentdock.com/` | the repo has no signup route; the footer's own target is the only real destination in the project |
| 2. colour-only state | `aria-current="true"` on the current chip **plus** the detail line's arithmetic | third channel, no extra visible copy to shift the 12.5 px line |
| 8. live-region flood | `<output>` gets `aria-live="off"`; a visually hidden `aria-live="polite"` span announces the **settled** value 300 ms after the last move | the output's text changes on every drag step |
| 3/4. contrast | `--color-control-line: #8f877f` on the field border **and** the resting track | **3.54 : 1** on white, **3.39** on the field's own `#fafaf9` — the reference ships 1.49 and 1.26 |
| 9. the 51-seat jump | **kept** (detail line reserves nothing) | it is the design's honesty about the third tier, and the whole ladder below depends on it |

## 2. At 1440 × 900 every rect is the reference's own (measured in Chromium, `document.fonts.ready`)

`main 1440 × 836.34` (`padding: 110 16`) · `section 1100 × 616.34 @ (170, 110)` ·
`info 519.16 × 435.92 @ (170, 200.2)` · eyebrow `22.39 @ y 200.2` · `h1 114.22 @ y 232.59` (2 lines) ·
lede `470 × 81.56 @ y 362.81` (3 lines) · list `159.75 @ y 476.38` (items **247.58**) ·
card `494.45 × 616.34 @ (775.55, 110)` · content **412.45** · heading `24 @ y 151` ·
seats row `46.8 @ y 199` (label `27.19`, field `92 × 46.8 @ x 1137`) · range `28 @ y 259.8` ·
scale `19.19 @ y 291.8` · chips `69.19 @ y 332.98` (tracks **132.14 / 132.16 / 132.16**) ·
total `140.78 @ y 430.17` · sum `63 @ y 479.56` · `/ month 24.8 @ (963.81, 515.56)` ·
detail `22.39 @ y 548.56` · CTA `54.8 @ y 594.95` · footnote `21.59 @ y 663.75` ·
`--pr-fill` **5.527638190954774 %**. Arithmetic, chip states and the 51-seat reflow
(detail **44.78**, card **638.73**, CTA y **617.34**, info y **211.41**) are the reference's own too.

The one structural delta is the **`.pr-range` being `display: block`**: as an inline-block the slider
added a 6.79 px line-box descent under itself and pushed every card row below it down by that much
(card 623.14 instead of 616.34). Nothing else was changed.

## 3. Deltas that are the Google face, not the port

The repo loads Manrope from Google; the reference ships the variable binary from its own `fonts/`.
Measured consequences, all recorded rather than "fixed":

| Where | Reference | Port | Cause |
| ----- | --------- | ---- | ----- |
| detail line wraps (2-col band) | ≤ 1034 | **≤ 1000** | Google's 14 px string is 358 px, not 375 |
| footnote wraps (1-col band) | ≤ 396 | **≤ 365** | Google's 13.5 px pair is 305 px, not 315 |
| footnote in the 861–878 band | wraps (card 640.44) | **stays one line** (card 618.84) | same 10 px of slack |
| `h1` second flip (1 → 2 lines going down) | 418 | **360** | Google is 0.6 % wider at 56 px but the 34 px floor wraps later |
| chip range label wraps | ≤ 348 / ≤ 320 | **≤ 349 / ≤ 331** | `Seats 11–50` is 62 px on Google, not 59 |
| stacked chip at ≤ 480 | 85.19 | **89.19** | the stacked suffix is a 20 px block line, not a 16 px `::after` line |
| `Team seats` label | 96 | 93.13 | −3 % at 17 px |

## 4. The footer is the only addition

`SiteFooter` sits **outside** `main` and is **44.8 px** (13 px × 1.6 + 24 px bottom padding). So the
document at 1440 is **900** (content 836.34 + 44.8 = 881.14, under the viewport — no scrollbar), and
at 51 seats it becomes **904** (858.74 + 44.8) — the only width in the ladder where the port scrolls
and the reference does not.

## 5. Verification

- `bash scripts/verify-app.sh prorata` → typecheck, oxlint, **93 tests**, 100 % statements / branches /
  functions / lines (80 / 18 / 35 / 75), production build.
- `npm run spec:validate` → valid.
- `grep -riE 'colorlib|pricing-table-05|inkpost' apps/prorata` → **0**.
- `scrollWidth === clientWidth` at 320 … 1440 (29 widths) — no horizontal overflow anywhere.
