# Isobar — task outline

Recreation of the ColorLib **Card V17** design (`card-17`) at `apps/isobar`. Spec is the authority:
`openspec/specs/template-isobar/spec.md`. Design notes: `docs/templates/isobar/design-notes.md`.
Live reference: `https://preview.colorlib.com/theme/bootstrap/card-17/` (the slug-only
`theme/card-17/` 404s — this family lives under `bootstrap/`). Check boxes only as work ships.

> This is a **weather console, not a site**: three unequal cards in one **1,120 px** top-aligned row on
> pale blue `#e8eef6` — a blue current-conditions panel at 1.25fr, a white 5-day forecast at 1fr, an
> indigo night card at 0.8fr. No nav, no hero, no footer in the reference.
>
> It is **completely static**: **0** buttons, **0** links, **0** forms, **0** images, **no script** in the
> archive. The only motion is the hero's sun disc on a 30 s linear loop. The archive's README advertises a
> `js/snippet.js` and an `images/` folder that **are not in the zip** — do not build interaction to match
> a README that describes a different file set.
>
> The risk is not the layout, it is flattening the four things that make it read as this design:
> **`1.25fr 1fr .8fr`, not equal thirds** (442.61 / 354.11 / 283.28 — equal thirds is a dashboard),
> **`items-start`** so the three cards stop at **497.67 / 368.84 / 300.31** instead of stretching,
> **the range bar's fixed 12–28 °C window** (the five fills are 25.00/18.75/12.50/18.75/31.25 % starts),
> and **heights driven by text wrapping** (tile 61.14 → 82.89 → 104.64, note 39.56 → 59.13).
>
> Six numbers decide fidelity: row **1,120** at x 160; tracks **442.61 / 354.11 / 283.28**;
> **3 columns at 972** (tracks exactly 300.00) and **2 at 971**; temperature **96 / 300 / −.06em** in a
> **96** px box; tiles **92.64 × 82.89** at radius 14; step **197.36** from the tallest card to the
> shortest.
>
> **Nothing is photographed and no icon font is used:** all **14** glyphs are authored inline SVG with
> `role="img"` labels. No picsum placeholder belongs anywhere in this template.

## 0 — Scaffold

- [ ] `cp -r apps/<simplest-existing-app> apps/isobar`; rename the package to
      `@free-react-templates/isobar`
- [ ] `public/CNAME` = `isobar.free.componentdock.com`; `"homepage"` =
      `https://isobar.free.componentdock.com`; `react`/`react-dom` stay `"latest"`
- [ ] keep `injectUiSource()` in `vite.config.ts` (absolute `@source` for `packages/ui`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
      (`grep -c "free-react-templates/isobar" package-lock.json` → 1)
- [ ] `index.html`: title, description, one **Albert Sans** Google Fonts `<link>`
      (`family=Albert+Sans:wght@300;400;500;600;700&display=swap` — **real** weights; the reference
      declares five weights that are two files, so its 600/700 are synthesis, do **not** reproduce that)

## 1 — Tokens

- [ ] `@theme`: `--color-ground: #e8eef6`, `--color-ink: #0f2239`, `--color-muted: #4a5d74`,
      `--color-card: #fff`, `--color-sky-1: #1d4ed8`, `--color-sky-2: #2563eb`, `--color-sky-3: #0e7490`,
      `--color-sky-muted: #e0f2fe`, `--color-night-1: #1e1b4b`, `--color-night-2: #312e81`,
      `--color-night-muted: #c7d2fe`, `--color-night-cloud: #e0e7ff`,
      `--color-night-cloud-edge: #a5b4fc`, `--color-sun: #fcd34d`, `--color-sun-edge: #f59e0b`,
      `--color-cloud-edge: #c9d6e6`, `--color-rain: #38bdf8`, `--color-bolt: #facc15`,
      `--color-bolt-edge: #ca8a04`, `--color-snow: #bae6fd`, `--color-note: #fef08a`,
      `--color-note-bg: rgb(253 224 71 / .16)`, `--color-tile: rgb(255 255 255 / .14)`,
      `--color-rule: #eaf0f6`, `--color-track: #edf2f7`, `--color-heat-1: #38bdf8`,
      `--color-heat-2: #fbbf24`, `--color-heat-3: #f97316`,
      `--radius-card: 26px`, `--radius-tile: 14px`, `--radius-note: 12px`,
      `--shadow-card: 0 24px 50px -34px rgb(15 34 57 / .5)`
- [ ] `--font-sans: "Albert Sans", system-ui, …`; **one** family, no display face — hierarchy is size,
      weight and tracking (`temp 300 / −.06em`, `city 700`, `week head 600 / .08em uppercase`)
- [ ] base **15 px / 1.45** inside the cards; no `cl-` class names anywhere

## 2 — Shell and grid

- [ ] `main`: `bg-ground text-ink mx-auto max-w-[1120px] px-4 py-[clamp(32px,6vw,72px)]`, **no**
      `min-h-screen` (content is **695.67** tall at 1,440, not the 900 viewport)
- [ ] grid: `grid grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)_minmax(0,.8fr)] items-start gap-5`
- [ ] below 980: `grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))]`
- [ ] verify **1,120 / x 160** at 1,440 with tracks **442.61 / 354.11 / 283.28**; **3 columns at 972**
      (exactly 300.00), **2 at 971** (**459.50**); **2 at 652**, **1 at 651** (**619**); no `md:`/`lg:`
      column override, no JS measurement
- [ ] **`items-start`** — no card may stretch to 497.67 (step **197.36** to the shortest)

## 3 — Card shell

- [ ] shared: `rounded-[26px] p-6 shadow-card text-[15px] leading-[1.45]`
- [ ] conditions: `bg-[linear-gradient(160deg,#1d4ed8_0%,#2563eb_45%,#0e7490_100%)] text-white
      overflow-hidden` (the clip exists for the overhanging icon — keep it on this card only)
- [ ] forecast: `bg-card text-ink`; night: `bg-[linear-gradient(170deg,#1e1b4b,#312e81)] text-white`
- [ ] each card is a `<section aria-labelledby>` pointing at its own `h2`

## 4 — Conditions head

- [ ] head: `flex items-start justify-between gap-3` (**394.61 × 98** at y 150)
- [ ] city `h2` **22 / 700**; when **14 / 400 `#e0f2fe`** at `mt-0.5`
- [ ] icon **108 × 108** at y **140** with `-mt-2.5 -mr-1.5` (`-10px -6px 0 0`) — it overhangs the 24 px
      padding by 10 px and the row still measures 98
- [ ] hero sun: `motion-safe:animate-[spin_30s_linear_infinite]` with `origin-[24px_24px]`; the four other
      suns must **not** animate

## 5 — Temperature and condition

- [ ] temp `text-[96px] font-light leading-none tracking-[-.06em] mt-1`; **80 px** at ≤ 480
      (`text-[80px] sm:text-[96px]`)
- [ ] degree glyph `aria-hidden="true"` + a `sr-only` *" degrees Celsius"* rendered **once**
- [ ] condition **16 / 500 `#e0f2fe`**, `mt-1.5` (*Partly cloudy · H 25° L 16°*)
- [ ] night card: **64 / 300** with **U+2212** (`−2°`), `mt-[18px]` — do **not** let it grow at ≤ 480
      (the reference's cascade bug, spec defect 1)

## 6 — Detail tiles

- [ ] `<dl aria-label="Current conditions">` of four `<div><dt><dd></div>` groups
- [ ] grid `grid-cols-4 gap-2 my-[22px] mb-[18px]`, each tile `rounded-[14px] px-3 py-2.5
      bg-[rgb(255_255_255/.14)]`
- [ ] `dt` **12 / 400 `#e0f2fe`**, `dd` **15 / 600** `mt-0.5`
- [ ] values exactly: *Feels like 24°* · *Wind 14 km/h NW* · *Humidity 58%* · *UV index 6 High*
- [ ] `max-[480px]:grid-cols-2`; do **not** pin a height — the tile is 61.14 / 82.89 / 104.64 by wrapping
      and the card follows (475.92 / 497.67 / 519.42 / 529.06)

## 7 — Hourly strip

- [ ] `<ol aria-label="Next hours">` `grid grid-cols-5 gap-1.5 pt-4 border-t border-white/25 text-center`
      (**394.61 × 99.59**)
- [ ] cell `flex flex-col items-center gap-1`: time **13 `#e0f2fe`**, icon **34**, temp **15 / 600**
- [ ] five cells exactly: 15:00 24° (sun) · 16:00 25° (sun) · 17:00 23° (partly) · 18:00 21° (cloud) ·
      19:00 19° (rain)

## 8 — Forecast card

- [ ] `h2` in a `flex items-center gap-2 mb-2 text-[13px] font-semibold uppercase tracking-[.08em]
      text-muted` with a **16 px** calendar glyph; text *"5-day forecast"*
- [ ] `<ul>` of **5** rows, each `grid grid-cols-[56px_40px_34px_1fr_34px] items-center gap-2.5 py-[11px]
      border-b border-rule last:border-0`, icon **36**
- [ ] rows exactly: Today 16/25 partly · Sat 15/21 rain · Sun 14/19 thunder · Mon 15/22 cloud ·
      Tue 17/27 sun
- [ ] card height must come out **368.84** at 1,440 / 980 / 760 / 390 — no fixed height, no `min-h`

## 9 — Range bar (`lib/range.ts`)

- [ ] pure `rangeFill(lo, hi)` → `{ left, width }` percentages against `RANGE = { min: 12, span: 16 }`:
      `left = (lo − 12) / 16`, `width = (hi − lo) / 16`
- [ ] track `relative h-1.5 rounded-full bg-track`; fill `absolute inset-y-0 rounded-full
      bg-[linear-gradient(90deg,#38bdf8,#fbbf24_60%,#f97316)]` with inline `left`/`width`
- [ ] wrapper `aria-hidden="true"`; the low and high stay **real text** in the row
- [ ] pin all five pairs in tests: 16/25 → **25.00 / 56.25**, 15/21 → **18.75 / 37.50**, 14/19 →
      **12.50 / 31.25**, 15/22 → **18.75 / 43.75**, 17/27 → **31.25 / 62.50**

## 10 — Night card

- [ ] head `flex items-start justify-between gap-3` (**235.28 × 64**), city **22 / 700**,
      `13:20 local` **14 `#c7d2fe`**, icon **64** (no negative margin)
- [ ] temp **64 / 300** `mt-[18px]`, condition **16 / 500 `#c7d2fe`**
- [ ] note `flex items-center gap-2 mt-[18px] rounded-xl px-3 py-2.5 bg-[rgb(253_224_71/.16)]
      text-[#fef08a] text-[13.5px] font-semibold` with an **18 px** triangle; text *"Icy roads warning
      until 18:00"*
- [ ] cloud in this card only: fill `#e0e7ff`, stroke `#a5b4fc`

## 11 — Icons (`components/WeatherIcon.tsx`)

- [ ] six variants on one `64 64` viewBox: `sun` (disc `r 11` at 32/32 + 8 rays) · `partly` (`r 10` at
      24/24 + cloud) · `cloud` · `rain` (3 strokes) · `thunder` (bolt) · `snow` (3 flakes)
- [ ] palette: sun `#fcd34d` on `#f59e0b` (`stroke-width 2` disc, `3` rays) · cloud `#fff` on `#c9d6e6`
      at `2` · rain `#38bdf8` at `3` · bolt `#facc15` on `#ca8a04` at `1.5` · snow `#bae6fd` at `2.5`
- [ ] on the blue card the cloud stroke is `rgba(255,255,255,.5)`; **`role="img"` + condition label** on
      standalone icons, `aria-hidden` on the calendar and triangle
- [ ] **0** `<img>`, **0** background images, **14** `<svg>` on the page

## 12 — Tests, docs and ship (TDD, 100 % coverage)

- [ ] tests first (red): `rangeFill` five pairs + edge cases; tile count and `dt`/`dd` text; strip is an
      `<ol>` named *"Next hours"* with 5 `<li>`; 5 day rows with the last unbordered; temp unit hidden
      once; night `−2°` uses **U+2212**; icon labels map per variant; one `h1` + three `h2` with
      `aria-labelledby`; the ≤ 480 class contract (`text-[80px]` hero, `64` night)
- [ ] `npm run verify:app isobar` → typecheck + lint + knip + fallow + **100 %** coverage + build
- [ ] `openspec validate template-isobar --type spec`
- [ ] add the row to `TEMPLATES.md` **after the last `Card` row present** (line 742 at prep time), copy
      straight from the spec's `Why this design has no row` block
- [ ] `npm run readme:status`; footer links `https://www.componentdock.com/` as "Component Dock";
      `grep -ri 'colorlib\|card-17\|cl-card17' apps/isobar` → no matches
- [ ] ship on `feat/template-isobar`, PR, squash-merge, then `[x]` + surge URL in `TEMPLATES.md`
