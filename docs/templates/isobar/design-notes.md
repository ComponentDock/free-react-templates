# Isobar — design notes (`card-17` → `apps/isobar`)

Everything below was measured on **2026-10-26** against the live preview
`https://preview.colorlib.com/theme/bootstrap/card-17/` (HTTP 200, 7,710 B) with `curl -4` +
Playwright 1.62 Chromium, and cross-checked against the source archive
`preview.colorlib.com/downloads/free/card-17.zip` (284,839 B). Tokens come from the stylesheet
(`css/style.css?v=8542f0ab`, 12,267 B, sha256 `3a7381cc…`) and from `getComputedStyle` at 1,440;
geometry comes from sweeping the viewport one pixel across each threshold. Where the sheet and the
render disagree, the render wins, and the disagreements are listed in §5.

## 1 — What this design actually is

The family's **first weather console** and its **first three-card row**. Sixteen siblings before it were
one to three *equal* cards (a profile plate, a product card, a price tier, a listing row, a photo grid);
the two pairs before it were deliberately unequal but only **two**. This one is a **triple with three
different content models** — a hero-ish conditions panel, a data table with a chart column, and a
compact status card — and the inequality between them is the composition.

```
 ┌─────────────────────────────────────────────────────────────────────────────────┐
 │ Weather                                                       ← page label, 28/700 │
 │ ┌──────────────────────────┐ ┌───────────────────┐ ┌──────────────┐              │
 │ │ Porto            ☀☁ (108)│ │ 🗓 5-DAY FORECAST │ │ Reykjavík  ❄ │              │
 │ │ Friday, 25 Sept · 14:20  │ │ Today ☁ 16 ▬▬▬ 25│ │ 13:20 local  │              │
 │ │                          │ │ Sat   🌧 15 ▬▬  21│ │   −2°        │              │
 │ │ 23°            ← 96/300  │ │ Sun   ⚡ 14 ▬▬  19│ │ Light snow…  │              │
 │ │ Partly cloudy · H25 L16  │ │ Mon   ☁ 15 ▬▬▬ 22│ │ ⚠ Icy roads… │              │
 │ │ ┌────┬────┬────┬────┐    │ │ Tue   ☀ 17 ▬▬▬▬ 27│ └──────────────┘              │
 │ │ │Feel│Wind│Humi│ UV │    │ └───────────────────┘   ↑ 300.31                   │
 │ │ └────┴────┴────┴────┘    │     ↑ 368.84                                        │
 │ │ ───────────────────────  │                                                     │
 │ │ 15:00 16:00 17:00 18:00 …│                                                     │
 │ └──────────────────────────┘                                                     │
 │      ↑ 497.67                                                                    │
 └─────────────────────────────────────────────────────────────────────────────────┘
   442.61 wide (1.25fr)         354.11 (1fr)          283.28 (0.8fr)   gap 20, items-start
```

Everything is one 26 px-radius, 24 px-padded card three times over: same radius, same padding, same
15 px body — a blue `160deg` gradient with a `#e0f2fe` muted, a white card with `#4a5d74`, and an indigo
`170deg` gradient with a `#c7d2fe` muted. The muted token is **re-declared per modifier**, which is why
the same 16 px condition line reads correctly on all three surfaces.

The information order is a forecast, not a marketing card: *where and when → how warm now → what it feels
like and what the next hours do*, then *what the week does*, then *what is dangerous tonight*. The middle
card's bar column is the only place the two other cards meet: it plots a **fixed 12–28 °C window**, so
the five days compare against each other rather than each filling its own track.

## 2 — Section order (exact, no invented sections)

| # | block                                                                          | reference element              |
| - | ------------------------------------------------------------------------------ | ------------------------------ |
| 1 | page ground + label + 1,120 px grid                                            | `main.cl-card17-demo`, `.cl-card17-grid` |
| 2 | **conditions card** — head (city / when / 108 px icon) → temperature → condition → 4 detail tiles → 5-hour strip | `section.cl-card17--now` |
| 3 | **forecast card** — heading → 5 rows of day / icon / low / bar / high           | `section.cl-card17--week`      |
| 4 | **night card** — head → temperature → condition → warning note                  | `section.cl-card17--mini`      |
| 5 | *(nothing)*                                                                     | the reference ends at the grid; the port adds one Component Dock line |

No nav, no logo, no hero, no CTA, no testimonial, no newsletter, no footer in the reference. **Do not add
a "search city" field or a °C/°F toggle** — the page is static by design (§5, defect 4), and a control
would also break the "zero focus stops" property that makes it a card and not an app.

## 3 — Section-by-section fidelity notes

### 3.1 The grid (1,120 px, three unequal tracks, top-aligned)

`max-width: 1120px`, `margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`, ground `#e8eef6`.
The grid is `1.25fr 1fr .8fr` with `gap: 20px` and `align-items: start`.

| viewport | grid width | tracks                    | now      | week     | mini     |
| -------: | ---------: | ------------------------- | -------: | -------: | -------: |
|    1,440 |      1,120 | 442.61 / 354.11 / 283.28  |   497.67 |   368.84 |   300.31 |
|    1,120 |      1,088 | 429.50 / 343.61 / 274.89  |   497.67 |   368.84 |   300.31 |
|      981 |        949 | 372.53 / 298.03 / 238.44  |   519.42 |   368.84 |   300.31 |
|      980 |        948 | 302.66 / 302.67 / 302.66  |   519.42 |   368.84 |   280.75 |
|      971 |        939 | 459.50 / 459.50           |   497.67 |   368.84 |        — |
|      760 |        728 | 354.00 / 354.00           |   519.42 |   368.84 |   280.75 |
|      651 |        619 | 619.00                    |   475.92 |   368.84 |        — |
|      480 |        448 | 448.00                    |   529.06 |   368.84 |   296.75 |
|      390 |        358 | 358.00                    |   529.06 |   368.84 |   296.75 |

The `fr` split holds until **980 inclusive**; below that the row becomes
`repeat(auto-fit, minmax(min(100%, 300px), 1fr))`, whose column count is pure arithmetic:
**3 columns need 940** of grid width (viewport **972**), **2 need 620** (**652**), **1 below**. Measured
one pixel either side: 300.33 at 973 / 300.00 at 972 / 459.50 at 971; 300.50 at 653 / 300.00 at 652 /
619.00 at 651.

### 3.2 The conditions card

- **Head 394.61 × 98 at y 150.** City `h2` 22 / 700 (185 × 31.89); timestamp 14 / 400 `#e0f2fe` at
  `margin-top: 2`; icon **108 × 108 at y 140** with `margin: -10px -6px 0 0`, so the flex row is 98 tall
  while the glyph overhangs by 10 px — which is exactly why this card alone sets `overflow: hidden`.
- **Temperature 96 / 300 / −5.76 px / line-height 96, box 394.61 × 96 at y 252**, `margin-top: 4`.
  The `°` is `aria-hidden`; a `sr-only` *" degrees Celsius "* follows it, so a screen reader says the
  number and the unit once. At ≤ 480 the same element is **80 px**.
- **Condition 16 / 500 `#e0f2fe`**, 23.19 tall, `margin-top: 6`.
- **Four tiles** in `repeat(4, minmax(0,1fr))` with `gap: 8`, `margin: 22px 0 18px`; each **92.64 ×
  82.89**, radius **14**, `padding: 10px 12px`, `background: rgba(255,255,255,.14)`; `dt` 12 / 400 muted,
  `dd` 15 / 600 at `margin-top: 2`. At ≤ 480 they become **two columns** of 196.
- **Hourly strip 394.61 × 99.59** — five tracks of 74.11, `gap: 6`, `padding-top: 16`, and a
  **1 px `rgba(255,255,255,.25)`** top border that is the only rule in the card. Each cell is 82.59 tall:
  time 13 muted · icon 34 · value 15 / 600 · `gap: 4`.

### 3.3 The forecast card

`368.84` tall at **every** width — the only card in the trio whose height is constant, because its five
rows never reflow: `48 + heading 18.84 + 8 + list 294`.
Row grid is `56px 40px 34px 1fr 34px`, `gap: 10`, `padding: 11px 0`, `border-bottom: 1px solid #eaf0f6`,
last row unbordered (59 / 59 / 59 / 59 / 58). Icon 36. Low 15 / 400 `#4a5d74` right-aligned in its 34
column, high 15 / 600 in its own, bar taking the remaining 102.11 at 1,440.

### 3.4 The bars are a fixed window, not per-day normalisation

`left = (lo − 12) / 16`, `right = 100 % − (hi − 12) / 16`, with `--cl-card17-min: 12` and
`--cl-card17-span: 16` declared on each row:

| day   | lo / hi | fill start | fill width | why it reads that way            |
| ----- | ------- | ---------: | ---------: | -------------------------------- |
| Today | 16 / 25 |   **24.99 %** | **56.27 %** | mid-window, widest span after Tue |
| Sat   | 15 / 21 |    18.75 % |    37.51 % | narrow and low                   |
| Sun   | 14 / 19 |    12.49 % |    31.28 % | lowest and narrowest             |
| Mon   | 15 / 22 |    18.75 % |    43.76 % | low start, medium span           |
| Tue   | 17 / 27 |    31.25 % |    62.51 % | highest and widest — starts right |

At 390 the same percentages hold (25.00 / 56.25 for Today) because they are shares of the track, not
pixels. The track is 6 px with radius 999 on both sides, `#edf2f7`; the fill is
`linear-gradient(90deg, #38bdf8, #fbbf24 60%, #f97316)`. The wrapper is `aria-hidden` and the two
temperatures beside it are the text alternative.

### 3.5 The night card

`283.28 × 300.31`. Head is **235.28 × 64** with a 64 px icon and **no** negative margin; temperature
**64 / 300** at `margin-top: 18` with **U+2212** (`−2°`); condition 16 / 500 muted. The warning strip is
**235.28 × 59.13** — `padding: 10px 12px`, radius **12**, `rgba(253,224,71,.16)` ground, `#fef08a` text,
13.5 / 600, 18 px triangle — and its wrapping is what moves this card's height (§5).

### 3.6 Height arithmetic (the part that is easy to get wrong)

Every card is content + **48 px** padding.

- **Forecast:** `48 + 18.84 + 8 + 294 = 368.84` at every width.
- **Conditions:** `48 + 98 + (4 + temp) + (6 + 23.19) + (22 + tile rows + 18) + 99.59`.
  Tile height is `20 + 2 + 17.4 × dt-lines + 21.75 × dd-lines` → **61.14 / 82.89 / 104.64**.
  At 1,440: `48 + 98 + 100 + 29.19 + 122.89 + 99.59 = 497.67`. At 980 the wind value wraps to three
  lines in a 57 px tile (**104.64**) and the card is **519.42**. At ≤ 480 the tiles go two-column
  (**61.14**, two rows) while the temperature drops 16 px, and the card is **529.06**.
- **Night:** `48 + 64 + (18 + temp) + (6 + 23.19) + (18 + note)`. Note **59.13** (two lines) below a
  ~293 px card → **300.31**; note **39.56** → **280.75**.

So the conditions card takes **four** distinct heights across the width range (475.92 / 497.67 / 519.42 /
529.06) and the night card **three**. This is the design, not instability: nothing in the reference sets
a height, a `min-height` or an `aspect-ratio`.

### 3.7 Type — one family, eleven roles

| role       | size / weight / tracking        | measured at 1,440      |
| ---------- | ------------------------------- | ---------------------- |
| page label | 28 / 700 / −.02em               | 1,120 × 34             |
| city       | 22 / 700                        | 185 × 31.89            |
| when       | 14 / 400                        | 20.3                   |
| temp       | 96 / 300 / −.06em / 1 (night 64)| 96 tall                |
| condition  | 16 / 500                        | 23.19                  |
| tile label | 12 / 400                        | 17.4                   |
| tile value | 15 / 600                        | 21.75                  |
| hour time  | 13 / 400                        | 18.85                  |
| hour temp  | 15 / 600                        | 21.75                  |
| week head  | 13 / 600 / .08em uppercase      | 18.84                  |
| row        | 15 (low 400 muted, high 600)    | 21.75 in a 59 row      |
| note       | 13.5 / 600                      | 2 lines = 39.56        |

Contrast is measured, not assumed: `#e0f2fe` on the gradient's **mid** stop `#2563eb` is **4.50** — the
tightest pair in the page and exactly at AA. Lightening either side drops the condition line below the
line. Everything else: `#4a5d74` on white **6.75**, white on `#1d4ed8` **6.70**, on `#0e7490` **5.36**,
`#c7d2fe` on `#312e81` **7.66**, `#fef08a` on the note ground **6.92–9.23**.

## 4 — Copy inventory (what the tests pin)

| block       | content                                                                                         |
| ----------- | ----------------------------------------------------------------------------------------------- |
| page label  | *Weather* (the reference's own `h1`)                                                             |
| city        | *Porto* · *Friday, 25 September · 14:20*                                                         |
| temp        | *23°* (96 px)                                                                                    |
| condition   | *Partly cloudy · H 25° L 16°*                                                                    |
| tiles       | *Feels like* 24° · *Wind* 14 km/h NW · *Humidity* 58% · *UV index* 6 High                        |
| hours       | 15:00 24° (sunny) · 16:00 25° (sunny) · 17:00 23° (partly) · 18:00 21° (cloudy) · 19:00 19° (light rain) |
| week head   | *5-day forecast*                                                                                 |
| days        | *Today* 16°/25° partly · *Sat* 15°/21° rain · *Sun* 14°/19° thunder · *Mon* 15°/22° cloud · *Tue* 17°/27° sun |
| night       | *Reykjavík* · *13:20 local* · *−2°* · *Light snow · H 1° L −4°* · *Icy roads warning until 18:00* |

Icon labels in the reference (keep them): *Sunny*, *Partly cloudy*, *Cloudy*, *Light rain*,
*Thunderstorms*, *Light snow*, *Rain, 80 percent chance*.

## 5 — Where the sheet and the render disagree

1. **The compact temperature grows on mobile.** `.cl-card17__temp--sm { font-size: 64px }` sits above
   `@media (max-width: 480px) { .cl-card17__temp { font-size: 80px } }` and both are single-class
   selectors, so at ≤ 480 the *night* value renders at **80 px**, the same as the hero's. Measured box
   heights: **64** at 760 / 980 / 1,440, **80** at 390 / 420 / 480. The port holds **64**; the night card
   is then **280.75** at ≤ 480 instead of 296.75.
2. **`cl-card17--week` has no rule.** A modifier with no selector — a bare marker. Keep the distinction
   in the component tree, not as a dead class.
3. **`.cl-icon` is declared and never used** (0 hits in the markup) — the ninth card in a row with this
   leftover.
4. **The archive README documents `js/snippet.js` and `images/`** — neither is in the zip, and the page
   has 0 scripts, 0 images, 0 buttons, 0 links. The README is drift from a template of its own.
5. **Five weights, two font files.** Every `*-latin.woff2` is byte-identical (32,008 B) and every
   `*-latin-ext.woff2` too (23,312 B); the same 40 px string measures **232 / 236 / 240 / 241 / 240** px
   at 300 / 400 / 500 / 600 / 700, i.e. one outline wearing five weight labels. Load real Albert Sans.
6. **The `h1` is the demo's label**, not card content — the port needs a page-level `h1` and must not
   promote a city name to it.
7. **The `<dl>` has no accessible name**, and the range track is `aria-hidden` with the numbers outside
   it. Both are fixable without touching the visual: label the list, keep the numbers as text.

## 6 — Screenshot

`https://colorlib.com/wp/wp-content/uploads/sites/2/card-17-1024x829.jpg` — **1024 × 829**, but the file
is an **AVIF container with a `.jpg` extension** (`file` → `ISO Media, AVIF Image`, 18,681 B). Convert
before viewing (`convert card-17-shot.jpg card-17-shot.png`). It is ColorLib's marketing frame — browser
chrome and padding around the same page — and it matches the live render exactly: three cards, same
order, blue / white / indigo, the *Weather* label top-left, the warning strip in the night card. Use it
to sanity-check colour and silhouette, never for measurements.

## 7 — What a reviewer should check first

1. **Tracks.** 442.61 / 354.11 / 283.28 at 1,440 — not 373 each. Then the two `auto-fit` thresholds:
   exactly **300.00** at 972, **459.50** at 971; **300.00** at 652, **619** at 651.
2. **Tops aligned, bottoms not.** 497.67 / 368.84 / 300.31, step 197.36. If all three bottoms line up,
   someone set a height or dropped `items-start`.
3. **The bar window.** 25.00 / 18.75 / 12.50 / 18.75 / 31.25 % starts. If Today's bar starts at 0 %, the
   per-day normalisation bug is back.
4. **The temperature.** 96 px light with **−.06em** tracking in a **96** px line box; the night card 64
   (not 80) at every width; `−2°` with U+2212.
5. **No new interaction.** Zero buttons, zero forms, one focus stop (the Component Dock link). A "refresh
   weather" button means someone read the archive README instead of the page.
6. **No photography, 14 SVGs**, authored from the measured palette — and the hero's sun is the only thing
   that moves.
