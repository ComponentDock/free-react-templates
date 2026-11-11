# Prorata — implementation tasks (ColorLib Pricing Table V05, `pricing-table-05`)

Spec: `openspec/specs/template-prorata/spec.md` (58 KB, valid). Read it first; this file is the build order, not a
second spec. Every number below is the **reference** number, measured 2026-11-11 at 1440 × 900 on the live preview
(`theme/bootstrap/pricing-table-05/`, 3,631 B) and reproduced to the hundredth by the archive twin.

This one **has state** — the only variant of the family that computes its headline number. The risk is split: **spatial**
(the two-column centring, the slider's pseudo-elements, the 0.52 px footnote fit) and **arithmetic** (graduated tiers,
two formatters, a 51-seat reflow). Build the pure functions first, then the layout, then the wiring.

## 0. Scaffold

- [x] `apps/prorata` from the simplest existing app; rename the package to `@free-react-templates/prorata`;
      `public/CNAME` = `prorata.free.componentdock.com`; `"homepage"` = `https://prorata.free.componentdock.com`
- [x] `<title>Prorata — per-seat pricing</title>`, `theme-color: #fafaf9`, description without the source name
- [x] Manrope **400 / 500 / 600 / 700 / 800** via the Google `css2` link (800 is used by the `h1`, the amount and the
      chip rates — a 400/500/700 import silently synthesises); confirm with `CSS.getPlatformFontsForNode` that the `h1`
      reports `Manrope` / `custom=true` and no DejaVu
- [x] `npm run verify:app prorata` green on the empty shell before any component work

## 1. Tokens (`@theme`)

- [x] `--color-accent: #c2410c`, `--color-accent-hover: #9a3412`, `--color-ink: #0c0a09`,
      `--color-muted: #57534e`, `--color-line: #e7e5e4`, `--color-ground: #fafaf9`
- [x] `--color-chip-used: #f5f5f4`, `--color-chip-used-line: #d6d3d1`, `--color-scale: #78716c`,
      `--color-scale-strong: #6b6560`
- [x] the **fixed** token `--color-control-line: #8f877f` for the number field's border and the resting track
      (shipped `#d6d3d1` / `#e7e5e4` = **1.49** and **1.26** : 1 — both under the 3 : 1 control minimum)
- [x] radii **24** (card) / **14** (CTA) / **12** (chip) / **10** (field) / **999** (track) / **50 %** (thumb);
      section `max-width: 1100px`; grid `minmax(0,1.05fr) minmax(0,1fr)`, gap `clamp(32px, 6vw, 88px)`;
      wrapper padding `clamp(40px, 8vw, 110px) 16px`; card padding `clamp(24px, 4vw, 40px)`

## 2. Pure functions first (RED before any markup)

- [x] `clampSeats(raw: string): number` — `Math.min(200, Math.max(1, Math.round(Number(raw)) || 1))`; table-test
      `'12' → 12`, `'' → 1`, `'abc' → 1`, `'0' → 1`, `'-5' → 1`, `'250' → 200`, `'7.6' → 8`, `'999' → 200`
- [x] `tierCounts(seats)` → `[10, 2, 0]` at 12; `[10, 40, 1]` at 51; `[10, 40, 150]` at 200
- [x] `total(seats)` → 1 **$12** · 10 **$120** · 11 **$130** · 12 **$140** · 50 **$520** · 51 **$528** · 100 **$920** ·
      150 **$1,320** · 200 **$1,720**
- [x] two module-scope formatters: `Intl.NumberFormat('en-US', {style:'currency', currency:'USD', maximumFractionDigits:0})`
      for the total (⇒ `$1,720`, grouped) and `{…, minimumFractionDigits:2, maximumFractionDigits:2}` for the average
      (⇒ `$11.67`, `$10.00`, `$8.60`) — never `toFixed` for the total
- [x] `fill(seats)` → `((seats - 1) / 199) * 100` % · `ariaValueText(seats)` → `"1 seat, $12 per month"` /
      `"12 seats, $140 per month"` (singular at 1)
- [x] `detailParts(seats)` → only tiers with `count > 0`, joined `' + '`, each `"<count> × $<rate>"`

## 3. Shell + copy column (RED first)

- [x] `main` `#fafaf9`, wrapper `clamp(40px, 8vw, 110px) 16px` → assert **1440 × 836.34** at 1440 × 900 and the section
      **1100 × 616.34** at (170, 110), `align-items: center`
- [x] the copy column must land at y **200.2**, not 110 — it is **centred against the taller card**
      (`110 + (616.34 − 435.92)/2`); `align-items: start` is the classic port bug here
- [x] eyebrow 14 / 700 `#c2410c`, `margin: 0` → **22.39** at y 200.2
- [x] `h1` `clamp(34px, 5vw, 56px)` / 800 / `-.045em` / `1.02`, `margin: 10px 0 16px` → **114.22** (2 lines of 57.12) at
      y 232.59; assert **both** line-count flips (1 line at 860, back to 2 at 418)
- [x] lede 17 / 27.2 `#57534e`, `max-width: 470` → **81.56** (3 lines) at y 362.81
- [x] list: `border-top: 1px #e7e5e4`, `margin: 32px 0 0`, `padding: 28px 0 0`, `grid` 2 × **247.58**, `gap: 4px 24px`
      → **159.75** at y 476.38; `li` `padding: 5px 0 5px 22px`, 14.5 / 23.2 / 500, heights **56.38 56.38 33.19 ×4**
      (item 1 wraps); dash `::before` **10 × 2** at `top: 14; left: 0` in `#c2410c`

## 4. Card shell + seats row

- [x] card `#fff`, `border: 1px #e7e5e4`, radius 24, `padding: 40`, `box-shadow: 0 30px 60px -40px rgba(12,10,9,.35)`
      → **494.45 × 616.34** at (775.55, 110), content width **412.45**
- [x] `h2` "Estimate your price" 15 / 700, `uppercase`, `.04em`, `#57534e`, `margin: 0 0 24px` → **24** at y 151
- [x] seats row `flex`, `space-between`, `align-items: center`, `gap: 16`, `margin-bottom: 14` → **46.8** at y 199
- [x] label "Team seats" 17 / 700 → **96 × 27.19**, `htmlFor` the **slider** (the reference's choice); field **92 × 46.8**
      at x 1137, `type="number"` `min=1 max=200 step=1 inputMode="numeric"`, 18 / 700 centred, `tabular-nums`,
      `padding: 8px 10px`, radius 10, border `--color-control-line`, fill `#fafaf9`
- [x] the field's only visible affordance is the number itself — give it a visually-hidden `<label>` ("Number of seats")
      built with the `1px + clip-path: inset(50%)` pattern, and `aria-describedby` the total

## 5. Slider

- [x] `<input type="range" min=1 max=200 step=1>` `appearance: none`, `background: transparent`, height **28** → at y
      259.8, `width: 100%`
- [x] `::-webkit-slider-runnable-track` **8 px**, radius 999,
      `linear-gradient(90deg, #0c0a09 var(--fill), #8f877f var(--fill))` — a **hard stop**, and the rest colour is the
      fixed token, not `#e7e5e4`
- [x] `::-webkit-slider-thumb` **26 × 26**, `margin-top: -9px`, `border: 3px solid #0c0a09`, `#fff`,
      `box-shadow: 0 2px 8px rgba(0,0,0,.2)`, `transition: transform .15s`; `:active` → `scale(1.12)`
- [x] `-moz-range-track` + `-moz-range-progress` + `-moz-range-thumb` (**20 × 20** — a real Firefox delta, record it)
- [x] `--fill` is set as an **inline custom property on the card root** (the gradient lives in a pseudo-element, so it
      cannot be a React prop); value `((seats-1)/199)*100 + '%'`
- [x] focus ring on the **thumb** (`box-shadow: 0 0 0 4px #fff, 0 0 0 7px #c2410c`) and `outline: none` on the range
- [x] assert the thumb's centre = `13 + (W − 26) × fill`: **34.36** px at 12 seats (the gradient's stop is at 22.8, so
      the edge hides under the thumb — that is correct, not a bug)
- [x] scale row `flex`, `space-between`, 12 / 19.2, `tabular-nums`, `#78716c`, spans `#6b6560`, `margin-top: 4` →
      **19.19** at y 291.8, `aria-hidden="true"` (decorative ticks, not real positions)

## 6. Tier chips

- [x] `ol` `grid` 3 × `minmax(0,1fr)`, `gap: 8`, `margin: 22px 0 0` → **69.19** at y 332.98; chip `padding: 10px 12px`,
      radius 12, `border: 1px` → **132.15 × 69.19**
- [x] range line 12.5 / 20, rate 17 / 800, suffix `::after` `" / seat"` 12.5 / 500 `#57534e` ⇒ at **≤ 480** the suffix
      becomes `"per seat"` on its own line (chip **85.19**)
- [x] state classes from `tierCounts`: `is-used` when `count > 0`, `is-current` when the seat count is inside the tier —
      `is-current` must be declared **after** `is-used` so the ink fill wins on the shared chip
- [x] ink fill `#0c0a09` + border ink + rate `#fff` + range/suffix `#d6d3d1`; used fill `#f5f5f4` + border `#d6d3d1`
- [x] **add the a11y the reference omits**: `aria-current` and/or a visually-hidden state word on each chip (the state is
      colour-only in the source)
- [x] ⚠️ fill and border transition in **.2 s** — any test that reads the colours immediately after changing seats sees
      the **previous** state; wait ≥ 250 ms

## 7. Price block + CTA + footnote

- [x] `.total` `border-top: 1px`, `margin: 28px 0 24px`, `padding-top: 24` → **140.78** at y 430.17; "Your price" 14 / 600
      → 22.39 at y 455.17
- [x] sum `flex`, `align-items: baseline`, `gap: 8` → **63** at y 479.56; `<output>` `clamp(44px, 6vw, 60px)` / 800 /
      `-.045em` / `lh 1.05` / `tabular-nums` → **138.2** for `$140`, **189.81** for `$1,720`
- [x] `/ month` 15.5 / 600 `#57534e` → **60 × 24.8** at (962.75, 515.56) — **baseline**-aligned, i.e. 36 px below the row's
      top; a `items-center` sum row puts it in the wrong place
- [x] detail 14 / 22.4 `#57534e` with the average in a `#0c0a09` / 700 span → **22.39** at y 548.56 (1 line, 37.45 slack)
- [x] CTA `block`, `padding: 15px 20px`, radius 14, `#c2410c`, `#fff` 700, hover `#9a3412` `.2s`,
      focus `3px #0c0a09` at +3 → **412.45 × 54.8** at y 594.95 — a **real** `href`, not `#`
- [x] footnote 13.5 / 21.6 `#57534e`, `margin: 14px 0 0`, centred; link ink / 600 / `underline-offset: 3px`,
      focus `2px #c2410c` at +2 → **21.59** at y 663.75 — a **real** `href`
- [x] `aria-live="polite"` on the `<output>`, but announce the **settled** value only (the source fires on every drag step)

## 8. The wiring (the 51-seat reflow is a test, not a surprise)

- [x] one `useState` for seats (initial **12**); everything else derived in render — no effect writes state
- [x] `range` `onInput` → set · field `onInput` → set only when non-empty · field `onBlur` → rewrite with the clamped
      value · empty field → **1** immediately (the source leaves a stale total until blur)
- [x] decide the `<form>`: either drop it for a `<fieldset role="group" aria-labelledby>` or give it a real submit — the
      reference keeps a `preventDefault` handler with **no** submit button, so `Enter` does nothing (verified)
- [x] assert the reflow: 12 seats → card **616.34**, info y **200.2**; 51 seats → detail **44.78**, card **638.73**,
      CTA y **617.34**, info y **211.41**, document still **900**

## 9. Responsive

- [x] `@media (max-width: 860px)`: `grid-template-columns: minmax(0,1fr)` → document **900 → 1128**, `h1` 2 → 1 line
- [x] `@media (max-width: 480px)`: bullets 1 column, chip suffix stacks
- [x] check the three non-monotonic steps: 900 **768.42** vs 861 **778.2**; 1080 **789.12** vs 1024 **802.55**;
      600 **1033.33** vs 520 **1039.7**
- [x] `scrollX = 0` and `scrollWidth === clientWidth` at 320 … 1440 (29 widths in the spec's sweep) — this design has no
      overflow anywhere, so any overflow is a port bug

## 10. Contrast, a11y, copy

- [x] test the two **fixed** pairs: control border `#8f877f` **3.54** on white / **3.39** on `#fafaf9`
      (shipped `#d6d3d1` 1.49 and `#e7e5e4` 1.26 both fail)
- [x] test the pairs that pass: eyebrow **4.96**, muted on white **7.63** / on ground **7.30**, ink **18.92–19.76**,
      CTA **5.18** (hover **7.31**), current-chip range **13.26**, scale **4.80** / **5.74**
- [x] the footnote is **315.00** px in a **315.60** box at vw 880 — the tightest fit on the page (**0.52 px**); Google's
      face measures **305** so it stays on one line through the 861–878 band. Keep the copy, accept the delta, assert
      **heights**
- [x] tier state announced (not colour-only); scale row `aria-hidden`; `aria-valuetext` singular/plural; the field's
      hidden label; **two** resolving anchors
- [x] **no** `:where(html){all:revert}` firewall, **no** `.cl-icon` rule, **no** `--cl-pricing05-*` strings, **no**
      colourlib/pricing-table-05/inkpost strings anywhere in `apps/prorata`

## 11. Footer + verify

- [x] Component Dock footer strip as the last element, one link to `https://www.componentdock.com/` (this adds its
      height to every number in the ladder — measure it once and add it, do not "fix" the spec)
- [x] `npm run verify:app prorata`; `openspec validate template-prorata --type spec`
- [x] `grep -riE 'colorlib|pricing-table-05|inkpost' apps/prorata` → **0**
- [x] bookkeeping: `npm run readme:status`; **append** the `TEMPLATES.md` row **Pricing Table 05** under
      `## Bootstrap Pricing Tables (12)` (line **891**, after the Pricing Table 02 / `tallyboard` row at **894**;
      `## Bootstrap Wizards (30)` is at **896** as of `20a394769`); `gh workflow run deploy-surge.yml -f app="prorata"`

## Shipped

All boxes above are ticked by the run that shipped `apps/prorata` (2026-11-12). The measured deltas,
the four decisions the spec left open and the two contrast repairs are recorded in
`docs/templates/prorata/build-record.md`. Deployment is automatic on merge (`deploy-surge.yml`), so
no manual `gh workflow run` was issued.
