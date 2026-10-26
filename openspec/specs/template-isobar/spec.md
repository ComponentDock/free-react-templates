# Template: Isobar (Weather cards — a blue conditions card beside a white five-day forecast and an indigo night card, three unequal tops-aligned panels whose heights are set by wrapping text)

## Purpose

A **single-screen trio of weather panels**: no nav, no hero, no footer in the reference — one **1,120 px**
page on a pale blue ground (`#e8eef6`) under the label *Weather*, holding **three cards of different
widths and heights, all aligned to the top**. The row is a **1.25fr : 1fr : 0.8fr** split (**442.61 :
354.11 : 283.28** at 1,440), the cards are **497.67 / 368.84 / 300.31** tall, and the silhouette that
results — a tall dark-edged blue panel, a medium white panel, a short indigo panel, each stopping at a
different height — **is the design**. Give them equal height and it becomes a dashboard; that is a
different template.

**Card 1 — current conditions.** A **160° blue gradient** (`#1d4ed8 → #2563eb 45 % → #0e7490`) panel
carrying the city in **22 px / 700**, a 14 px muted timestamp, and a **108 px partly-cloudy SVG** whose
sun disc **rotates once every 30 s**. Then the temperature at **96 px / 300 / −.06em** with the degree
glyph hidden from assistive tech behind a visually hidden *"degrees Celsius"*, a 16 px condition line,
**four translucent detail tiles** (feels-like, wind, humidity, UV) and a **five-column hourly strip**
separated from the tiles by a 1 px `rgba(255,255,255,.25)` rule.

**Card 2 — 5-day forecast.** A white panel with a **13 px uppercase letterspaced heading** (*5-day
forecast*, with a 16 px calendar glyph) over **five 59 px rows**. Each row is a five-column grid —
**56 px day / 40 px icon / 34 px low / 1fr bar / 34 px high** — and the bar is the design's one piece of
data visualisation: a **6 px rounded track** whose **gradient fill** (cyan → amber 60 % → orange) is
positioned by two CSS custom properties (`--lo`, `--hi`) against a fixed **12–28 °C** window, so the five
bars are directly comparable. There are no buttons, no links, no hover states.

**Card 3 — night.** A **170° indigo gradient** (`#1e1b4b → #312e81`) compact panel: city *Reykjavík*,
`13:20 local`, a 64 px snow icon, **`−2°`** at 64 px (U+2212, not a hyphen), a muted condition line and —
the card's only chrome — an **amber warning strip** (`rgba(253,224,71,.16)` ground, `#fef08a` text, 12 px
radius) reading *"Icy roads warning until 18:00"*.

**Three numbers decide whether the recreation reads correctly.**

1. **The row is 1,120 px and the tracks are fr, not equal.** `1.25fr 1fr .8fr` with a 20 px gap →
   **442.61 / 354.11 / 283.28**. Equal thirds is the most common way to get this wrong.
2. **`align-items: start`.** The three heights (**497.67 / 368.84 / 300.31**) are content, not a fixed
   row height; the step from the tallest to the shortest is **197.36 px** and it is the composition.
3. **Heights follow text wrapping, in three places.** The detail tiles' `dd` wraps at narrow tile
   widths (**61.14 → 82.89 → 104.64** tall), the night card's warning wraps below a **~293 px** card
   (**39.56 → 59.13**), and the temperature steps **96 → 80** at 480. So the now card is
   **475.92 / 497.67 / 519.42 / 529.06** depending on width — never a single number. Any
   `min-height` on a card freezes the layout into something the reference never renders.

- **Source slug:** `card-17`
- **ColorLib page:** https://colorlib.com/wp/template/card-17/ — **HTTP 200, 113,401 B**,
  `<title>` `Card V17 - Free Bootstrap Cards 2026 - Colorlib`, `<meta description>` *"A current-conditions
  card with temperature, details and an hourly strip, a 5-day forecast with temperature range… Free
  download, no jQuery or plugins."*, authoritative description *"A current-conditions card with
  temperature, details and an hourly strip, a 5-day forecast with temperature range bars, and a compact
  night card with a warning. All weather icons are inline SVG with text alternatives."*, feature list
  *"Inline SVG weather icons with role=img labels · Temperature range bars positioned with CSS custom
  properties · Hourly strip and detail tiles · Night variant with a warning notice · Slow sun rotation
  that stops for reduced motion"*, page copy *"It is plain HTML and CSS: no jQuery, no Bootstrap files,
  no plugins, and the download is **278 KB**."*, `datePublished` **2026-09-25T15:33:25+00:00** (archive
  measured **284,839 B = 278.16 KB ✓**). It is the **seventeenth of twenty** `card` variants.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-17/ —
  **HTTP 200, 7,710 B**, `<title>` `Card V17 | Colorlib`, `lang="en"`, **one** stylesheet, **no script of
  its own**, `<meta name="robots" content="noindex, nofollow">`. The slug-only path `theme/card-17/`
  **404s**; this family lives under the `bootstrap/` prefix (same ladder as `card-01` … `card-16`).
- **Design category:** Card (weather — conditions + forecast + night). Seventeenth member of the **`card`
  snippet family** (`card-01` … `card-20`) in the **214 snippet variants** catalogued in
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/isobar`, package
  `@free-react-templates/isobar`, CNAME `isobar.free.componentdock.com`.

**What this design is.** The family's **first weather console** and its **first three-card row** —
siblings were one to three *equal* cards (a profile plate, a listing row, a photo grid), and the two
pairs before it were deliberately unequal but *two*. This one is a **triple with three different
content models**: a hero-ish conditions panel, a data table with a chart column, and a compact status
card. The identity is carried by **two gradients and one pale ground** — `#e8eef6` behind, a blue
`160deg` panel at 1.25fr, white in the middle, indigo `170deg` at 0.8fr — and by a single **26 px
radius** repeated on all three so the unequal shapes still read as one family.

**What it is not.** It is **static**: **0** `<button>`, **0** `<a>`, **0** `<form>`, **0** `<img>`,
**0** media elements, and **no script** in the archive. The only motion is the hero's sun disc, which
rotates on a 30 s linear loop and stops under `prefers-reduced-motion`. Every glyph in the page —
fourteen `<svg>` elements — is authored inline SVG. Do not invent a city search box, a toggle between
°C/°F, or a "refresh" button to make it feel interactive.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **0** in-progress rows). So this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `card-17` is one of the **214 snippet variants in 19 families**; snippet families are worked
**in family order, then variant number**, and the `card` family runs to **20**.

The family section **`## Bootstrap Cards (20)` exists on main at line 733** and at this prep's commit
carries **eight** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo, `Card 04` →
tierline, `Card 05` → plaudit, `Card 06` → statline, `Card 07` → lodgerow, `Card 08` → roadbook — with
**`## Bootstrap Checkboxes (20)` following at line 744**. Cards **09–16** are prepped and unbuilt
(`lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`, `tonearm`). This
design's row goes **directly after the last card row present** when the implementer ships it:

```markdown
- [x] **Card 17** — [colorlib](https://colorlib.com/wp/template/card-17/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-17.jpg) · [isobar](https://isobar.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns that
batch edit, not this prep run.

**The name.** `isobar` — one lowercase word: the line drawn on a weather chart through points of equal
pressure, i.e. what a forecast is read from. It names the design's subject (meteorology, charts) without
touching its source, and it reads as a product. It is in **no** `apps/` folder, **no** spec folder, **no**
`docs/templates/` folder, and `git grep -il isobar origin/main` returns **nothing at all** (0 hits,
checked 2026-10-26). The ColorLib catalogue paths `colorlib.com/wp/template/isobar/` and
`preview.colorlib.com/theme/isobar/` are both **404**. Do **not** reuse the family's taken names
`nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`, `lexeme`,
`coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`, `tonearm`. Other candidates
measured free the same day (0 repo hits, no `apps/` folder, no spec folder): `climeset`, `overcast`,
`barometer`, `skyframe` — reserved for later variants. `skycast` and `cumulus` have **spec folders**
(taken), and `nimbus` is an **app**.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 7,710 B**, `<title>` "Card V17 \| Colorlib", `lang="en"`, **one** stylesheet, **no** snippet script                                            |
| preview path      | **`theme/bootstrap/card-17/`** — the directory URL is the page. `theme/card-17/` is **404**                                                          |
| stylesheet        | `css/style.css?v=8542f0ab`, **12,267 B**, 525 lines, sha256 `3a7381cc62fddb69abd487a8ab86ebca82e8d1c1ab71a3e1bdb8136671c90508`                        |
| archive           | `preview.colorlib.com/downloads/free/card-17.zip`, **200, 284,839 B** (278.16 KB ✓ the page's "278 KB"), **16 entries**: 3 dirs + `index.html` **7,518 B** + `css/style.css` **12,267 B** + `README.md` **1,260 B** + **10 `woff2`** — but only **2 distinct files** repeated five times (`*-latin` 32,008 B, `*-latin-ext` 23,312 B) |
| live ↔ archive    | CSS **identical size and content**; live HTML **7,710 B** vs archive **7,518 B** — the **192-byte** delta is the `?v=8542f0ab` cache-buster, the extra `noindex`/`dns-prefetch` head tags and `fetchpriority` on the stylesheet → **the preview is the archive's versioned twin** |
| CSS shape         | **80** `{` blocks: **16** `:where(html) …` host resets, **10** `@font-face`, **1** `@keyframes` (`cl-card17-spin`), **3** `@media` (980 / 480 / `prefers-reduced-motion`), **50** style rules; **0** `@supports`, **0** container queries |
| classes           | **30** distinct `cl-` classes in the stylesheet, **30** in the markup; **1 dead selector** — `.cl-icon` (declared, 0 hits in the markup; the **9th consecutive** card with this leftover); **1 modifier with no rule at all** — `cl-card17--week` (a bare marker on the white card) |
| custom properties | **9** declarations: `.cl-card17` sets `--cl-card17-sun` `#fcd34d`, `--cl-card17-sun-edge` `#f59e0b`, `--cl-card17-cloud` `#fff`, `--cl-card17-muted` `#4a5d74`; `--now` re-declares `--muted` `#e0f2fe`, `--mini` `#c7d2fe`; each day row sets `--cl-card17-lo` / `--cl-card17-hi`, and the row default `--cl-card17-min: 12`, `--cl-card17-span: 16` |
| cascade reset     | the sheet opens with 16 `:where(html) …` rules (`all: revert` on ~50 elements, a `[hidden]` repair, `img, svg` and table reversions) — a host-page reset so a Bootstrap parent cannot restyle the snippet; **do not port it**, Tailwind preflight already owns this |
| controls          | **0** `<button>`, **0** `<a>`, **0** `<form>`, **0** `<input>`, **0** `<img>`, **0** `<audio>`/`<video>` — the page is **entirely static**; **14** `<svg>` (hero icon 1 + hourly 5 + daily 5 + heading calendar 1 + night icon 1 + warning triangle 1) |
| headings          | **1 × `h1`** (*Weather* — the demo page's own label, not card content), **3 × `h2`** (Porto, *5-day forecast*, Reykjavík); each card is a `<section aria-labelledby>` pointing at its `h2` |
| semantics         | `<dl class="cl-card17__details">` with **4 × `<div><dt>…<dd>…</div>`**; `<ol class="cl-card17__hours" aria-label="Next hours">`; a plain `<ul>` for the days; the temperature carries `aria-hidden` on the `°` plus a visually hidden *" degrees Celsius"* span; every icon `<svg>` has `role="img"` + `aria-label` (or `aria-hidden` when decorative) |
| blocks            | `<main class="cl-card17-demo">` → `<h1>` + `<div class="cl-card17-grid">` → 3 × `<section class="cl-card17">` → *(nothing after the grid)* |
| content height    | **695.67** at 1,440 · **686.05** at 1,120 · **691.14** at 981 · **691.02** at 980 · **965.36** at 760 · **1,352.66** at 390 — no `min-height: 100vh` anywhere |
| horizontal scroll | **none** from 390 to 1,440 (`scrollWidth === clientWidth` at 390 / 420 / 480 / 481 / 490 / 651 / 652 / 653 / 760 / 971 / 972 / 973 / 980 / 981 / 1,120 / 1,440) |
| screenshot        | `card-17-1024x829.jpg` — **1024 × 829**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 18,681 B); convert before viewing. It is ColorLib's **marketing frame** (browser chrome + padding around the same page) and matches the live render 1:1 — three cards, same order, same gradients, same copy |
| fonts             | **Albert Sans**, declared in **10 `@font-face` rules = 5 weights (300/400/500/600/700) × 2 subsets**, but the archive ships **two distinct files** — every `*-latin.woff2` is byte-identical (sha256 `acf304385d06…`, 32,008 B) and every `*-latin-ext.woff2` too (sha256 `2260ced3c4d5…`, 23,312 B). Because each weight is declared explicitly, Chromium uses the one outline at every weight: the string *"Partly cloudy"* measures **232 / 236 / 240 / 241 / 240 px** at 40 px in 300 / 400 / 500 / 600 / 700 (**+2.2 %** across the whole range). **Do not reproduce the trick** — load real Albert Sans 300/400/500/600/700 (see the deltas table) |

### Card 1 — current conditions (1,440 px; card at x 160, y 126, 442.61 × 497.67)

| part      | geometry                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------- |
| card      | `padding: 24px`, `border-radius: 26px`, `linear-gradient(160deg, #1d4ed8 0%, #2563eb 45%, #0e7490 100%)`, ink `#fff`, muted `#e0f2fe`, base **15 / 1.45**, shadow `0 24px 50px -34px rgba(15,34,57,.5)`, `overflow: hidden` |
| top row   | **394.61 × 98** at x 184, y 150 — `display: flex; justify-content: space-between; align-items: flex-start; gap: 12` |
| city      | **185 × 31.89** at x 184, y 150 — `h2`, **22 / 700**                                           |
| when      | `margin-top: 2`; **14 / 400** `#e0f2fe`; **20.3** tall (*Friday, 25 September · 14:20*)        |
| icon      | **108 × 108** at x 476.61, y **140** — `margin: -10px -6px 0 0`, so the row is **98** tall while the glyph overhangs the card's padding by 10 px |
| temp      | **394.61 × 96** at x 184, y 252 (`margin-top: 4`), **96 / 300 / −5.76 px (−.06em) / lh 96**      |
| cond      | **394.61 × 23.19** at y 354.19 (`margin-top: 6`), **16 / 500** `#e0f2fe` (*Partly cloudy · H 25° L 16°*) |
| details   | **394.61 × 82.89** at x 184, y 399.19 — `grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8; margin: 22px 0 18px` |
| tile      | **92.64 × 82.89**, radius **14**, `padding: 10px 12px`, bg `rgba(255,255,255,.14)`; `dt` **12 / 400** muted, `dd` **15 / 600** `margin-top: 2` |
| hours     | **394.61 × 99.59** at x 184, y 500.08 — 5 tracks of **74.11**, `gap: 6`, `padding-top: 16`, `border-top: 1px solid rgba(255,255,255,.25)`, `text-align: center` |
| hour cell | **74.11 × 82.59** — `flex column; align-items: center; gap: 4`; time **13** muted, icon **34**, temp **15 / 600** |
| bottom    | **623.67** = hours bottom 599.67 + **24**                                                  |

### Card 2 — 5-day forecast (1,440 px; card at x 622.61, y 126, 354.11 × 368.84)

| part      | geometry                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------- |
| card      | same shell, bg **#fff**, ink `#0f2239`, muted `#4a5d74`                                          |
| heading   | **306.11 × 18.84** at x 646.61, y 150 — `h2` in flex with an **16 px** calendar icon, `gap: 8`, **13 / 600 / 1.04 px (.08em) / uppercase**, `margin-bottom: 8` |
| list      | **306.11 × 294** at y 176.84 = **4 × 59 + 58**                                                   |
| row       | **306.11 × 59**, `grid-template-columns: 56px 40px 34px 1fr 34px; gap: 10; padding: 11px 0; border-bottom: 1px solid #eaf0f6`; last row **58** and **no border** |
| row parts | day **15 / 600** · icon **36 × 36** at x 712.61 · low **15 / 400** muted, right-aligned, **34** · track **102.11 × 6** at x 806.61, y 202.84 · high **15 / 600**, **34** |
| bottom    | **494.84**                                                                                      |

| day   | lo    | hi    | `--lo` / `--hi` | fill starts | fill width |
| ----- | ----- | ----- | --------------- | ----------: | ---------: |
| Today | 16 °C | 25 °C | 16 / 25         |  **24.99 %** | **56.27 %** |
| Sat   | 15 °C | 21 °C | 15 / 21         |  **18.75 %** | **37.51 %** |
| Sun   | 14 °C | 19 °C | 14 / 19         |  **12.49 %** | **31.28 %** |
| Mon   | 15 °C | 22 °C | 15 / 22         |  **18.75 %** | **43.76 %** |
| Tue   | 17 °C | 27 °C | 17 / 27         |  **31.25 %** | **62.51 %** |

The arithmetic is exactly `left = (lo − 12) / 16`, `right = 100 % − (hi − 12) / 16`, i.e. a fixed
**12–28 °C** window that includes neither endpoint of any day. It is why Tue (17–27) reads **wider and
further right** than Sun (14–19) — the visual comparison is the point.

### Card 3 — night (1,440 px; card at x 996.72, y 126, 283.28 × 300.31)

| part      | geometry                                                                                       |
| --------- | ---------------------------------------------------------------------------------------------- |
| card      | same shell, `linear-gradient(170deg, #1e1b4b, #312e81)`, ink `#fff`, muted `#c7d2fe`; cloud fill `#e0e7ff`, edge `#a5b4fc` |
| top row   | **235.28 × 64** — city **22 / 700**, `13:20 local` **14** muted, icon **64 × 64** (no negative margin) |
| temp      | `margin-top: 18`, **64 / 300 / −.06em** (*−2°*, U+2212)                                          |
| cond      | **23.19** tall, **16 / 500** muted (*Light snow · H 1° L −4°*)                                   |
| note      | **235.28 × 59.13** at x 1020.72, y 343.19 — `margin-top: 18`, `padding: 10px 12px`, radius **12**, bg `rgba(253,224,71,.16)`, text `#fef08a`, **13.5 / 600**, `gap: 8`, warning triangle **18** |
| bottom    | **426.31**                                                                                      |

### The grid is fr arithmetic until 980, then `auto-fit`

`.cl-card17-grid` is `display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr)
minmax(0, .8fr); align-items: start; gap: 20px` — **no** column media query until `max-width: 980px`,
where it becomes `repeat(auto-fit, minmax(min(100%, 300px), 1fr))`.

| viewport | grid width | columns | tracks                  | now          | week     | mini     |
| -------: | ---------: | ------- | ----------------------- | -----------: | -------: | -------: |
|    1,440 |      1,120 | 3 (fr)  | 442.61 / 354.11 / 283.28 | **497.67** | **368.84** | **300.31** |
|    1,120 |      1,088 | 3 (fr)  | 429.50 / 343.61 / 274.89 |   497.67 |   368.84 |   300.31 |
|      981 |        949 | 3 (fr)  | 372.53 / 298.03 / 238.44 |   519.42 |   368.84 |   300.31 |
|  **980** |    **948** | **3**   | 302.66 / 302.67 / 302.66 |   519.42 |   368.84 |   280.75 |
|  **973** |    **941** | **3**   | 300.33 each              |   519.42 |   368.84 |        — |
|  **972** |    **940** | **3**   | **300.00** each          |   519.42 |   368.84 |   280.75 |
|  **971** |    **939** | **2**   | 459.50 / 459.50         |   497.67 |   368.84 |        — |
|      760 |        728 | 2       | 354.00 / 354.00         |   519.42 |   368.84 |   280.75 |
|  **653** |    **621** | **2**   | 300.50 / 300.50         |   519.42 |   368.84 |        — |
|  **652** |    **620** | **2**   | **300.00** each          |   519.42 |   368.84 |        — |
|  **651** |    **619** | **1**   | **619.00**              |   475.92 |   368.84 |        — |
|      490 |        458 | 1       | 458.00                  |   497.67 |   368.84 |   280.75 |
|  **481** |    **449** | **1**   | 449.00                  |   497.67 |   368.84 |   280.75 |
|  **480** |    **448** | **1**   | 448.00                  |   529.06 |   368.84 |   296.75 |
|      390 |        358 | 1       | 358.00                  |   529.06 |   368.84 |   296.75 |

Three columns need `3 × 300 + 2 × 20 = 940` of grid width (**viewport 972**), two need
`2 × 300 + 20 = 620` (**viewport 652**). Those are arithmetic, not breakpoints — do not write `md:`/`lg:`
utilities for them.

### Heights are text-driven, not fixed — and the arithmetic is exact

Every card is its content plus **48 px** of padding. The forecast card never changes: **368.84** =
`48 + heading 18.84 + 8 + list 294`. The other two change with wrapping.

**Detail tiles.** `tile = 20 (padding) + 2 (dd margin) + 17.4 (dt line) + 21.75 × dd-lines`:
**61.14** (1 line) / **82.89** (2) / **104.64** (3). The `dd` *"14 km/h NW"* is the one that wraps.

**Now card.** `48 + top 98 + (4 + temp) + (6 + 23.19) + (22 + tiles + 18) + 99.59`:

| viewport | temp | tiles   | tile w | rows × tile        | card height |
| -------: | ---: | ------: | -----: | ------------------ | ----------: |
|    1,440 |   96 | 4 in 1 row |  92.64 | 82.89              | **497.67**  |
|      980 |   96 | 4 in 1 row |  57.00 | 104.64             | **519.42**  |
|      760 |   96 | 4 in 1 row |  70.50 | 82.89              | **519.42**  |
|      651 |   96 | 4 in 1 row | 136.75 | 61.14              | **475.92**  |
|      480 |   80 | 2 × 2 rows | 196.00 | 2 × 61.14 + 8 gap  | **529.06**  |

**Night card.** `48 + top 64 + (18 + temp) + (6 + 23.19) + (18 + note)`:
**300.31** with a 2-line note (card < ~293 wide), **280.75** with a 1-line note and a 64 px temp,
**296.75** at ≤ 480 where the reference's own cascade pushes the *small* temperature to **80** (defect 1).

### Type — one family, eleven roles

| role       | size / weight / tracking / leading            | colour     | measured at 1,440            |
| ---------- | --------------------------------------------- | ---------- | ---------------------------- |
| page label | **28 / 700 / −.02em**                         | `#0f2239`  | 1,120 × 34 (`h1` *Weather*)  |
| city       | **22 / 700**                                  | per card   | 185 × 31.89                  |
| when       | **14 / 400**                                  | muted      | 20.3                         |
| temp       | **96 / 300 / −.06em / lh 1** (night **64**)   | `#fff`     | **96** tall, box 394.61 wide |
| condition  | **16 / 500**                                  | muted      | 23.19                        |
| tile label | **12 / 400**                                  | muted      | 17.4                         |
| tile value | **15 / 600**                                  | `#fff`     | 21.75                        |
| hour time  | **13 / 400**                                  | muted      | 18.85                        |
| hour temp  | **15 / 600**                                  | `#fff`     | 21.75                        |
| week head  | **13 / 600 / .08em / uppercase**              | muted      | 18.84                        |
| day row    | **15 / 600** (low muted / 400), high **600**   | ink/muted  | 21.75 inside a 59 row        |
| note       | **13.5 / 600**                                | `#fef08a`  | 2 lines = 39.56 wrap         |

### Contrast (WCAG 2.1, computed from the measured hex values)

| pair                                     | ratio    | verdict                     |
| ---------------------------------------- | -------: | --------------------------- |
| `#0f2239` on `#fff` (week text)          | **16.05** | AAA                        |
| `#4a5d74` on `#fff` (week muted)         |  **6.75** | AA                         |
| `#0f2239` on `#e8eef6` (page label)      | **13.75** | AAA                        |
| `#fff` on `#1d4ed8` (now, gradient start) |  **6.70** | AA                         |
| `#fff` on `#2563eb` (now, mid)           |  **5.17** | AA                         |
| `#fff` on `#0e7490` (now, gradient end)  |  **5.36** | AA                         |
| `#e0f2fe` on `#1d4ed8` (now muted)       |  **5.84** | AA                         |
| `#e0f2fe` on `#0e7490` (now muted, end)  |  **4.67** | AA — the tightest pair here |
| `#e0f2fe` on `#2563eb` (now muted, mid)  |  **4.50** | AA — **exactly at the line**, do not lighten it |
| `#fff` on `#1e1b4b` / `#312e81` (night)  | 15.99 / **11.42** | AAA                 |
| `#c7d2fe` on `#1e1b4b` / `#312e81`       | 10.72 / **7.66** | AAA                       |
| `#fef08a` on the note ground (`#423b4a` → `#524a78` blended) | **9.23 → 6.92** | AAA / AA |
| `#fcd34d` sun disc edge `#f59e0b`         | graphic only | —                          |

Hold the muted-on-gradient values exactly: `#e0f2fe` on `#2563eb` is **4.50**, so any lightening of
either the gradient's mid stop or the muted token drops the condition line below AA.

## Defects found in the reference (the port's deltas list)

1. **The compact card's temperature grows on mobile.** `.cl-card17__temp--sm { font-size: 64px }` is
   declared before `@media (max-width: 480px) { .cl-card17__temp { font-size: 80px } }`, and both are
   single-class selectors — so **below 480 the "small" temperature becomes 80 px, the same size as the
   hero's**. Measured: night temp box **64** tall at 760/980/1,440, **80** tall at 390/420/480. Fix: hold
   **64** below 480 too. Consequence: the night card is **280.75** at ≤ 480 in the port, not 296.75.
2. **`cl-card17--week` has no rule.** The white card carries a modifier that no selector matches. Keep the
   semantic name in the port (`WeekCard`), but do not create a dead class for it.
3. **`.cl-icon` is declared and never used** — the 9th card in a row with this leftover. Drop it.
4. **The archive README describes files that do not exist.** It lists `js/snippet.js` and `images/`; the
   zip holds neither, and the page has **0** scripts, **0** images, **0** buttons and **0** links. The
   snippet is static. Do not add interaction to "match" the README.
5. **Ten `@font-face` rules, two unique font files.** All five weights point at one outline (measured
   **232 / 236 / 240 / 241 / 240** px for the same string at 40 px), so the reference's "bold" is
   synthesis. Do not copy the trick — load real Albert Sans 300/400/500/600/700.
6. **The `h1` belongs to the demo page, not to a card.** *Weather* is the snippet's own label above the
   grid. The port needs exactly one real `h1` for the page, and it must not be a card's city name.
7. **The detail list has no accessible name.** `<dl class="cl-card17__details">` is four `<div><dt><dd>`
   groups with no label; give it `aria-label="Current conditions"`.
8. **The range bar is `aria-hidden` with no text alternative of its own.** That is correct *here* because
   the low and high are adjacent text, but the port must keep those two numbers real text — a bar with no
   numbers is an unreadable graphic.
9. **The page has zero focusable elements.** Tab from the document start produces **no** stops. That is
   correct for a static card; do not invent a control to create one.
10. **`overflow: hidden` on the blue card only.** It exists to clip the 108 px icon that overhangs the
    24 px padding by 10 px; the other two cards do not need it, and removing it from card 1 makes the
    sun bleed into the card's corner radius.

## Requirements

### Requirement 1: Page shell and pale blue ground

The app SHALL render one `<main>` on the ground `#e8eef6`, `max-width: 1120px`, `margin: 0 auto`,
`padding: clamp(32px, 6vw, 72px) 16px`, ink `#0f2239`, containing a page heading and one three-card grid
plus a single Component Dock attribution line, and SHALL NOT force a viewport height.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1,440 × 900 viewport
- **WHEN** the app has rendered
- **THEN** the content SHALL measure **695.67** px tall (`72 + 34 + 20 + 497.67 + 72`) and the document
  **900** only because the viewport is taller — there is **no** `min-height: 100vh` in the reference
- **AND** at 980 the content SHALL be **691.02**, at 760 **965.36**, at 390 **1,352.66**
- **AND** `main` padding SHALL be **72 / 16** at 1,440, **58.86 / 16** at 981, **58.80 / 16** at 980 and
  **32 / 16** at 390 and below (the `clamp(32px, 6vw, 72px)` floor is reached at **533.33** px)

#### Scenario: No horizontal scroll at any usable width

- **GIVEN** the page at 390 / 420 / 480 / 481 / 490 / 651 / 652 / 653 / 760 / 971 / 972 / 973 / 980 /
  981 / 1,120 / 1,440
- **WHEN** `window.scrollTo(600, 0)` runs
- **THEN** `scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth` at every
  one of them

### Requirement 2: One row, three unequal cards, top-aligned

The row SHALL be `display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr) minmax(0, .8fr);
gap: 20px; align-items: start; max-width: 1120px` with **no** column media query above 980 and
`repeat(auto-fit, minmax(min(100%, 300px), 1fr))` below it.

#### Scenario: The tracks are 1.25 : 1 : 0.8, not thirds

- **GIVEN** a 1,440 px viewport
- **WHEN** the grid is measured
- **THEN** it SHALL be **1,120** wide at **x 160** with tracks **442.61 / 354.11 / 283.28** and cards at
  x **160 / 622.61 / 996.72**
- **AND** the tracks SHALL stay in that ratio down to 981 (**372.53 / 298.03 / 238.44** inside 949)

#### Scenario: Three columns down to 972, two down to 652, one below

- **GIVEN** the `auto-fit` row below 980
- **WHEN** the viewport is swept one pixel across each threshold
- **THEN** there SHALL be **3 columns at 972** with tracks exactly **300.00** and **2 at 971**
  (**459.50** each)
- **AND** there SHALL be **2 columns at 652** (**300.00** each) and **1 at 651** (a single **619** track)
- **AND** the thresholds SHALL fall out of the arithmetic (`940` and `620` of grid width) — not
  `md:`/`lg:` utilities

#### Scenario: The cards do not stretch to a common height

- **GIVEN** three cards of unequal content height at 1,440
- **WHEN** the row is measured
- **THEN** the heights SHALL be **497.67 / 368.84 / 300.31**, all starting at y **126**
- **AND** the step from the tallest to the shortest bottom SHALL be **197.36** px, because
  `align-items: start` prevents the grid's default stretch

### Requirement 3: The shared card shell

Each card SHALL be a `<section aria-labelledby>` with `padding: 24px`, `border-radius: 26px`,
`box-shadow: 0 24px 50px -34px rgba(15,34,57,.5)`, base **15 px / 1.45**, and its own surface/ink/muted
triplet: conditions `linear-gradient(160deg, #1d4ed8, #2563eb 45%, #0e7490)` / `#fff` / `#e0f2fe`;
forecast `#fff` / `#0f2239` / `#4a5d74`; night `linear-gradient(170deg, #1e1b4b, #312e81)` / `#fff` /
`#c7d2fe`.

#### Scenario: One radius, one padding, one shadow, three surfaces

- **GIVEN** the three cards at 1,440
- **WHEN** their computed styles are read
- **THEN** all three SHALL have `border-radius: 26px`, `padding: 24px` and the identical shadow
- **AND** their `font-size` / `line-height` SHALL be **15 / 21.75** and their heights SHALL differ only
  because their content does

#### Scenario: Only the blue card clips

- **GIVEN** the conditions card at 1,440
- **WHEN** the icon is measured
- **THEN** the icon SHALL be **108 × 108** at y **140** — 10 px above the card's content top, inside the
  card only because of `overflow: hidden`
- **AND** the other two cards SHALL NOT set `overflow`

### Requirement 4: The conditions head

The card's first row SHALL be a flex row with `justify-content: space-between`, `align-items:
flex-start`, `gap: 12px` holding a text column (`h2` city at **22 / 700** and a **14 px** muted
`Friday, 25 September · 14:20`) and a **108 px** partly-cloudy icon whose sun disc rotates once every
30 s.

#### Scenario: The head is 98 px because the icon overhangs

- **GIVEN** the conditions card at 1,440
- **WHEN** the head is measured
- **THEN** the row SHALL be **394.61 × 98** at y **150** while the icon is **108** tall at y **140**
- **AND** the icon's margin SHALL be `-10px -6px 0 0` so its right edge sits **6 px** into the card's
  24 px padding and the row reports 98, not 108

#### Scenario: The sun turns

- **GIVEN** the default motion preference
- **WHEN** the icon's sun group is inspected
- **THEN** it SHALL carry `animation: cl-card17-spin 30s linear infinite` with `transform-origin: 24px 24px`
- **AND** its computed transform SHALL be a non-identity matrix (measured `0.9976 / 0.0698` at load)
- **AND** the **five** other sun groups in the page (two hourly sunny cells, one hourly partly-cloudy,
  two daily rows) SHALL NOT animate — only `.cl-card17--now .cl-card17__sun` carries the animation

### Requirement 5: The temperature

The temperature SHALL render at **96 / 300 / letter-spacing −.06em / line-height 1** with the degree
glyph `aria-hidden` and a visually hidden *" degrees Celsius "* immediately after it, and SHALL step to
**80 px** at `max-width: 480px`.

#### Scenario: The number is 96 px in a 96 px line box

- **GIVEN** the conditions card at 1,440
- **WHEN** the temperature is measured
- **THEN** it SHALL be **394.61 × 96** at y **252**, `font-size: 96px`, `letter-spacing: −5.76px`
- **AND** at 480 and 390 it SHALL be **80 px** in an **80** px box

#### Scenario: The unit is spoken, not spelled

- **GIVEN** a screen reader reading the temperature
- **WHEN** it reaches the glyph
- **THEN** the `°` SHALL be `aria-hidden="true"` and the accessible name SHALL include the hidden
  *" degrees Celsius "* text once
- **AND** the night card's value SHALL use **U+2212** (`−2°`), not a hyphen-minus

### Requirement 6: The detail tiles

The card SHALL render a `<dl aria-label="Current conditions">` of four `<div><dt><dd></div>` groups —
*Feels like 24°*, *Wind 14 km/h NW*, *Humidity 58%*, *UV index 6 High* — as a four-column grid with
`gap: 8px` and `margin: 22px 0 18px`, stepping to **two columns** at `max-width: 480px`.

#### Scenario: Four tiles, 14 px radius, translucent ground

- **GIVEN** the card at 1,440
- **WHEN** the tiles are measured
- **THEN** there SHALL be four tiles of **92.64 × 82.89**, `border-radius: 14px`, `padding: 10px 12px`
  and `background: rgba(255,255,255,.14)`
- **AND** `dt` SHALL be **12 / 400** muted and `dd` **15 / 600** at `margin-top: 2px`

#### Scenario: Wrapping drives the card's height

- **GIVEN** the same four tiles at 980 and at 480
- **WHEN** they are measured
- **THEN** a tile SHALL be **104.64** tall at 980 (the wind value on **3** lines in a **57** px tile)
  and **61.14** tall at 480 (two columns of **196**)
- **AND** the conditions card SHALL follow: **519.42** at 980, **529.06** at 480 — a port that pins a
  height on this card is wrong at both

### Requirement 7: The hourly strip

The card SHALL end with `<ol aria-label="Next hours">` — five cells at **15:00 / 16:00 / 17:00 / 18:00 /
19:00** reading **24° / 25° / 23° / 21° / 19°** with icons *sunny ×2, partly cloudy, cloudy, light rain* —
as a five-column grid with `gap: 6px`, `padding-top: 16px` and a `1px rgba(255,255,255,.25)` top border.

#### Scenario: Five equal cells and a hairline

- **GIVEN** the card at 1,440
- **WHEN** the strip is measured
- **THEN** it SHALL be **394.61 × 99.59** at y **500.08** with five **74.11** wide tracks
- **AND** each cell SHALL be **82.59** tall (time **13** · icon **34** · value **15 / 600**, `gap: 4`)

#### Scenario: The strip is a list, not a table

- **GIVEN** the rendered markup
- **WHEN** the accessibility tree is read
- **THEN** the strip SHALL be an `<ol>` named *"Next hours"* with five `<li>` children
- **AND** each icon `<svg>` SHALL carry `role="img"` and a condition `aria-label`, and no cell SHALL
  repeat the hour in an `aria-label` (the time is already text)

### Requirement 8: The five-day forecast

The white card SHALL hold an `h2` *"5-day forecast"* at **13 / 600 / .08em / uppercase** with a **16 px**
calendar glyph, over a `<ul>` of five rows — *Today 16°–25°*, *Sat 15°–21°*, *Sun 14°–19°*,
*Mon 15°–22°*, *Tue 17°–27°* — each a grid of **56 / 40 / 34 / 1fr / 34** with `gap: 10px`,
`padding: 11px 0` and a `1px #eaf0f6` bottom border that the last row omits.

#### Scenario: Rows are 59 px and the list is 294

- **GIVEN** the forecast card at 1,440
- **WHEN** the rows are measured
- **THEN** the list SHALL be **306.11 × 294** (four rows of **59** plus a last of **58**)
- **AND** every icon SHALL be **36 × 36**, the low right-aligned in a **34** column and the high in a
  **34** column, with the bar taking the remaining **102.11**

#### Scenario: The card never changes height

- **GIVEN** viewports 1,440 / 980 / 760 / 390
- **WHEN** the card is measured
- **THEN** it SHALL be **368.84** tall at every one of them (`48 + 18.84 + 8 + 294`)
- **AND** its width SHALL follow the grid (**354.11 / 302.66 / 354.00 / 358.00**), never a fixed value

### Requirement 9: The temperature-range bars

Each row SHALL paint a **6 px** rounded track (`#edf2f7`) with a fill positioned by two per-row custom
properties against a fixed **12–28 °C** window, in a `90deg #38bdf8 → #fbbf24 60% → #f97316` gradient.

#### Scenario: The five fills are the measured geometry

- **GIVEN** the five rows at 1,440
- **WHEN** the fills are measured
- **THEN** Today SHALL start at **24.99 %** and be **56.27 %** wide; Sat **18.75 / 37.51**;
  Sun **12.49 / 31.28**; Mon **18.75 / 43.76**; Tue **31.25 / 62.51**
- **AND** the same six numbers SHALL hold at 390 (**25.00 / 56.25** for Today) because they are
  percentages of a track, not pixels

#### Scenario: The bar is decoration, the numbers are text

- **GIVEN** the rendered row
- **WHEN** the accessibility tree is read
- **THEN** the bar wrapper SHALL be `aria-hidden="true"`
- **AND** the low and high SHALL both be real text (`16°`, `25°`) in the row, and the rounded corners
  SHALL be **999px** on both track and fill

### Requirement 10: The night card

The third card SHALL be a compact indigo panel — city *Reykjavík*, `13:20 local`, a **64 px** light-snow
icon, **`−2°`** at **64 px**, *Light snow · H 1° L −4°* and a warning strip reading *"Icy roads warning
until 18:00"* — with `align-items: start` and no footer of its own.

#### Scenario: The compact card is a short card

- **GIVEN** the night card at 1,440
- **WHEN** it is measured
- **THEN** it SHALL be **283.28 × 300.31** — **197.36** px shorter than the conditions card
- **AND** its head SHALL be **235.28 × 64** with a **64** px icon and **no** negative margin

#### Scenario: The warning is the only chrome

- **GIVEN** the warning strip at 1,440
- **WHEN** it is measured
- **THEN** it SHALL be **235.28 × 59.13** with `padding: 10px 12px`, `border-radius: 12px`,
  `background: rgba(253,224,71,.16)`, colour `#fef08a`, **13.5 / 600** and an **18 px** triangle glyph
- **AND** its text SHALL wrap to two lines at 1,440 and one line at 980 (**39.56**), which is why the card
  is **300.31** there-then-**280.75**, and the **64 px** temperature (not 80) keeps ≤ 480 at **280.75**

### Requirement 11: Every glyph is authored SVG

The page SHALL contain **0** `<img>`, **0** background images and **0** icon-font references; all
**14** glyphs SHALL be inline SVG with the measured palette: sun disc `#fcd34d` on `#f59e0b` with
`stroke-width 2` and rays at `3`, cloud `#fff` on `#c9d6e6` at `2` (night: `#e0e7ff` on `#a5b4fc`),
rain `#38bdf8` at `3`, bolt `#facc15` on `#ca8a04` at `1.5`, snow `#bae6fd` at `2.5`, and the blue card's
cloud stroke overridden to `rgba(255,255,255,.5)`.

#### Scenario: No photography, no icon library required

- **GIVEN** the rendered page
- **WHEN** assets are counted
- **THEN** `<img>` SHALL be **0** and `<svg>` SHALL be **14** — six distinct weather glyphs drawn once
  each in a shared component and reused at **34 / 36 / 64 / 108** px
- **AND** no picsum placeholder SHALL appear anywhere; a weather card with photography is a different
  design

#### Scenario: Each glyph is labelled by its meaning

- **GIVEN** the accessibility tree
- **WHEN** icons are read
- **THEN** a standalone icon (`role="img"`) SHALL be named *"Sunny"*, *"Partly cloudy"*, *"Cloudy"*,
  *"Light rain"*, *"Thunderstorms"*, *"Light snow"* or *"Rain, 80 percent chance"*
- **AND** the decorative ones (calendar in the heading, triangle in the note) SHALL be `aria-hidden`

### Requirement 12: Motion is one slow rotation

The only animation SHALL be the conditions card's sun (`cl-card17-spin`, 30 s linear infinite); under
`prefers-reduced-motion: reduce` it SHALL be `none`.

#### Scenario: Nothing else moves

- **GIVEN** the page at rest
- **WHEN** computed animations are enumerated
- **THEN** exactly **one** element SHALL have a non-`none` `animation-name`
- **AND** with reduced motion the animation SHALL be `none` and every card SHALL still read identically

### Requirement 13: Accessibility and page furniture

The page SHALL keep one `h1`, three `h2`s (one per card, referenced by its `aria-labelledby`), keep the
`<dl>`/`<ol>`/`<ul>` semantics, and add one attribution line linking
`https://www.componentdock.com/`.

#### Scenario: The heading outline starts at h1

- **GIVEN** the rendered page
- **WHEN** the headings are enumerated
- **THEN** there SHALL be one `h1` (the page label) and three `h2` — *Porto*, *5-day forecast*,
  *Reykjavík* — and no `h3`
- **AND** each card's `aria-labelledby` SHALL resolve to its own `h2`

#### Scenario: Static means nothing to focus

- **GIVEN** the port at 1,440
- **WHEN** Tab is pressed from the document start
- **THEN** the reference has **no** focus stops; the port SHALL add **exactly one** — the Component Dock
  link in the attribution line — and nothing else
- **AND** the port SHALL add **0** `<button>`, **0** `<form>`, **0** `<input>` and **0** `<img>` that the
  reference does not have

## Adapting to the repo (deltas the implementer owns)

| reference                                              | in `apps/isobar`                                                                    |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| `.cl-card17*` class names                               | Tailwind utilities + the measured arbitrary values; **no** `cl-` class names anywhere |
| 10 `@font-face` + 10 `woff2` (2 unique files)          | one Google Fonts `<link>`: `family=Albert+Sans:wght@300;400;500;600;700&display=swap` — **real** weights (defect 5) |
| `body { background:#e8eef6; font-family:"Albert Sans"… }` | app shell: ground token + `font-display` on the wrapper; no `body` styles from a card |
| 16 `:where(html) …` host resets                         | drop — Tailwind preflight already owns this                                          |
| `.cl-icon` (dead)                                       | drop (defect 3)                                                                      |
| `cl-card17--week` (bare modifier)                       | `WeekCard` component, no dead class (defect 2)                                       |
| `--cl-card17-lo` / `--hi` + `--min: 12` / `--span: 16`  | a pure `rangeFill(lo, hi)` returning `{ left: '%', width: '%' }`, unit-tested at the five measured pairs, applied as inline `style` |
| `@media (max-width: 480px) .cl-card17__temp { 80px }`   | hero temp `text-[80px] sm:text-[96px]`; the night card stays **64** (defect 1)        |
| `linear-gradient(160deg, …)` on the blue card           | one `bg-[linear-gradient(160deg,#1d4ed8_0%,#2563eb_45%,#0e7490_100%)]` utility or a `--gradient-now` token |
| 14 inline `<svg>` with `role="img"`                     | one `WeatherIcon` component (`sun` · `partly` · `cloud` · `rain` · `thunder` · `snow`) + `lucide-react` for the calendar and triangle |
| `animation: cl-card17-spin 30s linear infinite`         | `motion-safe:animate-[spin_30s_linear_infinite]` on the hero sun only                |
| `<dl>` of `div > dt + dd`                               | keep the same markup shape in JSX (`<div>` wrappers are required by the content model) |
| `h1` = the demo's *"Weather"*                           | one real `h1` for the page (defect 6); it may reuse the label *Weather*               |
| no footer                                               | one Component Dock attribution line under the grid, centred, `#0f2239` on `#e8eef6`  |
| `overflow: hidden` on the blue card                     | keep it — it clips the overhanging 108 px icon                                       |

`src/index.css` `@theme` tokens to declare (exact measured values):

```css
--color-ground:        #e8eef6;
--color-ink:           #0f2239;
--color-muted:         #4a5d74;
--color-card:          #ffffff;
--color-sky-1:         #1d4ed8;
--color-sky-2:         #2563eb;
--color-sky-3:         #0e7490;
--color-sky-muted:     #e0f2fe;
--color-night-1:       #1e1b4b;
--color-night-2:       #312e81;
--color-night-muted:   #c7d2fe;
--color-night-cloud:   #e0e7ff;
--color-night-cloud-edge: #a5b4fc;
--color-sun:           #fcd34d;
--color-sun-edge:      #f59e0b;
--color-cloud-edge:    #c9d6e6;
--color-rain:          #38bdf8;
--color-bolt:          #facc15;
--color-bolt-edge:     #ca8a04;
--color-snow:          #bae6fd;
--color-note:          #fef08a;
--color-note-bg:       rgb(253 224 71 / 0.16);
--color-tile:          rgb(255 255 255 / 0.14);
--color-rule:          #eaf0f6;
--color-track:         #edf2f7;
--color-heat-1:        #38bdf8;
--color-heat-2:        #fbbf24;
--color-heat-3:        #f97316;
--font-sans:           "Albert Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--radius-card:         26px;
--radius-tile:         14px;
--radius-note:         12px;
--shadow-card:         0 24px 50px -34px rgb(15 34 57 / 0.5);
```

Data shape the tests should pin:

```ts
type Icon = 'sun' | 'partly' | 'cloud' | 'rain' | 'thunder' | 'snow';

type Now = {
  city: string; when: string; icon: Icon;
  temp: number;                                   // 23
  condition: string;                              // 'Partly cloudy · H 25° L 16°'
  details: { label: string; value: string }[];    // 4 tiles
  hours: { time: string; icon: Icon; temp: number }[]; // 5 cells
};
type Day = { label: string; icon: Icon; lo: number; hi: number }; // 5 rows, 16/25 … 17/27
type Night = {
  city: string; when: string; icon: Icon; temp: number;           // −2
  condition: string; note: string;                                // 'Icy roads warning until 18:00'
};
const RANGE = { min: 12, span: 16 } as const;      // every bar is a share of this window
```

**Suggested component split:** `App.tsx` (ground + label + grid + footer), `components/NowCard.tsx`,
`components/WeekCard.tsx`, `components/NightCard.tsx`, `components/DetailTiles.tsx`,
`components/HourStrip.tsx`, `components/DayRow.tsx`, `components/RangeBar.tsx`,
`components/WeatherIcon.tsx` (six glyphs, one `size` prop), `components/PageFooter.tsx`, `data.ts`,
`lib/range.ts` (`rangeFill`), `lib/labels.ts` (accessible names per condition).

**Coverage notes.** jsdom has no layout, so the geometry is tested as **data and attributes**, not
pixels: `rangeFill(16, 25)` → `{ left: '25%', width: '56.25%' }` (plus the other four measured pairs);
the tile count is **4** with the exact `dt`/`dd` strings; the strip is an `<ol>` of **5** with
`aria-label="Next hours"`; the day rows are **5** with the last one carrying no border class; the
temperature's degree glyph is `aria-hidden` while the hidden unit text renders once; the night value is
`−2°` with **U+2212**; each `WeatherIcon` variant maps to its `role="img"` name and decorative uses are
`aria-hidden`. Assert the ≤ 480 behaviour through the class contract (`text-[80px]` on the hero, `64`
on the night card) since jsdom cannot resolve media queries. Every branch of `rangeFill` (lo at the
window's floor, hi at its top, a single-degree day) needs a case to hold 100 % lines/branches.

## Verification checklist

- [ ] `apps/isobar` exists, package `@free-react-templates/isobar`, `public/CNAME` =
      `isobar.free.componentdock.com`, `"homepage"` = `https://isobar.free.componentdock.com`
- [ ] `grep -ri 'colorlib\|card-17\|Card V17\|cl-card17' apps/isobar` → **no matches**
- [ ] page: `#e8eef6` ground, `main` `max-width 1120`, padding **72 / 16** at 1,440 and **32 / 16** at
      390, content height **695.67**; **no** `min-height: 100vh`
- [ ] grid: `minmax(0,1.25fr) minmax(0,1fr) minmax(0,.8fr)`, `gap: 20`, `align-items: start`; at 1,440
      tracks **442.61 / 354.11 / 283.28** at x **160 / 622.61 / 996.72**; `auto-fit minmax(min(100%,
      300px),1fr)` below 980
- [ ] thresholds: **3 columns at 972** (tracks exactly **300.00**), **2 at 971**; **2 at 652**,
      **1 at 651** (**619**)
- [ ] cards: radius **26**, padding **24**, base **15 / 1.45**, shadow `0 24px 50px -34px
      rgba(15,34,57,.5)`; heights **497.67 / 368.84 / 300.31** at 1,440 with a **197.36** step;
      `overflow: hidden` on the blue card only
- [ ] conditions head: **394.61 × 98** at y **150**, icon **108** at y **140** with margin
      `-10px -6px 0 0`; city **22 / 700**; when **14 / 400 `#e0f2fe`**
- [ ] temperature: **96 / 300 / −.06em / lh 1** in a **96** px box; **80** at ≤ 480; degree `aria-hidden`
      + hidden *"degrees Celsius"*; night value uses **U+2212** at **64** px
- [ ] details: `<dl aria-label>` of **4** tiles **92.64 × 82.89**, radius **14**, `10px 12px`,
      `rgba(255,255,255,.14)`; **2 columns** at ≤ 480; tile height **61.14 / 82.89 / 104.64** by wrapping
- [ ] hours: `<ol aria-label="Next hours">` **394.61 × 99.59**, five **74.11** tracks, `gap: 6`,
      `padding-top: 16`, `1px rgba(255,255,255,.25)` border; cells **82.59** tall
- [ ] forecast: heading **13 / 600 / 1.04 px / uppercase** + **16 px** calendar glyph; list
      **306.11 × 294** of rows **59** (last **58**), grid **56 / 40 / 34 / 1fr / 34**, `gap: 10`,
      `padding: 11px 0`, `#eaf0f6` rules, icons **36**; card **368.84** at every width
- [ ] bars: track **6** px radius **999** `#edf2f7`, fill `90deg #38bdf8 → #fbbf24 60% → #f97316`;
      Today **25.00 → 81.25**, Sat **18.75 → 56.25**, Sun **12.50 → 43.75**, Mon **18.75 → 62.50**,
      Tue **31.25 → 93.75**; `aria-hidden` with real lo/hi text
- [ ] night card: **283.28 × 300.31** at 1,440; head **235.28 × 64**; note **235.28 × 59.13**, radius
      **12**, `rgba(253,224,71,.16)`, `#fef08a`, **13.5 / 600**, triangle **18**; **280.75** at 980 and
      at ≤ 480 after defect 1 is fixed
- [ ] icons: **14** `<svg>`, **0** `<img>`, **0** background images; palette `#fcd34d`/`#f59e0b`,
      `#fff`/`#c9d6e6`, `#38bdf8`, `#facc15`/`#ca8a04`, `#bae6fd`; night cloud `#e0e7ff`/`#a5b4fc`;
      blue-card cloud stroke `rgba(255,255,255,.5)`
- [ ] motion: exactly **one** animated element (`30s linear infinite` on the hero sun); reduced motion →
      `none`
- [ ] a11y: one `h1`, three `h2` bound by `aria-labelledby`, `<dl>`/`<ol>`/`<ul>` kept, exactly **one**
      focus stop in the port (the Component Dock link), **0** `<button>`/`<form>`/`<img>` added
- [ ] contrast holds: `#e0f2fe` on `#2563eb` **4.50**, on `#0e7490` **4.67**; `#4a5d74` on `#fff`
      **6.75**; `#fef08a` on the note ground **6.92–9.23**
- [ ] no horizontal scroll at 390 / 420 / 480 / 481 / 490 / 651 / 652 / 760 / 971 / 972 / 980 / 981 /
      1,120 / 1,440
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app isobar` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-isobar --type spec` is valid
