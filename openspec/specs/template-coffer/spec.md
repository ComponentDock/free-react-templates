# Template: Coffer (Finance dashboard cards — three frosted-glass account cards on a violet-to-magenta gradient with three blurred colour blobs)

## Purpose

A **single-screen finance dashboard**: one greeting head over a **three-across row of
translucent cards** floating on a **135° violet → magenta gradient** (`#1e1b4b` → `#4c1d95` →
`#9d174d`) with **three heavily blurred colour blobs** (pink, cyan, orange) painted behind them.
The cards are **liquid-glass surfaces**: a white `160°` gradient at 20 % → 6 % opacity, a
`1px rgba(255,255,255,.28)` edge, a 24 px radius, `backdrop-filter: blur(22px) saturate(160%)`, and
a two-layer shadow (`0 24px 60px -24px rgba(10,0,30,.6)` outside, `inset 0 1px 0
rgba(255,255,255,.25)` on the top edge). Every card is a **different instrument**:

1. **Everyday account** — a physical bank card: a two-disc issuer mark, `AVAILABLE BALANCE`, the
   balance at **36 px** with the cents dropped to 20 px, a gold **chip** SVG, the number in bulleted
   groups at 17 px with `.12em` tracking, and a bottom-anchored *Card holder / Expires* strip.
2. **Savings goal** — a **116 px donut** (`pathLength="100"`, `stroke-dasharray="68 100"`, 10 px
   stroke, gold `#fde68a` fill on a `rgba(255,255,255,.2)` track) beside the goal name, the sums and
   a monthly line, with a **full-width white CTA** bottom-anchored.
3. **Recent activity** — a four-row ledger: 38 px icon tiles on `rgba(255,255,255,.16)`, a merchant
   name over a `category · date` line, a right-aligned **tabular** amount, and
   `1px rgba(255,255,255,.14)` hairlines with none under the last row.

ColorLib's own listing states the brief in one line:

> "Three frosted-glass cards for a personal finance app on a vivid purple and pink gradient with
> blurred colour blobs:..."

It is **plain HTML and one stylesheet** — no framework, no build step, **no JavaScript at all** and
**no images**: seven inline `<svg>` (issuer mark, chip, donut, four line icons) are the entire
graphic vocabulary. The three blobs are the only decoration, and they are the reason the design
exists: they *shine through* the glass, so the card colour is never a flat token but a
position-dependent blend of gradient, blob and scrim.

This is the **tenth member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**)
and the family's **first dark-ground, glass-morphic member** — the previous nine all sat on a light
or tinted paper ground, and the only one that used a dark scrim (`Roadbook`) did it on photographs.
New here, and the parts that will be flattened by a careless port:

- **A gradient ground with `min-height: 100vh`** — the stage *is* the viewport; at 1440 the page
  holds 900 px of gradient and the card row ends at 525, so **more than 40 % of the screen is empty
  gradient**. That emptiness is the design, not a bug.
- **`backdrop-filter` with a real fallback** — a `@supports` block swaps the white glass for a flat
  `#3b1a6e`; without it the cards are unreadable on a browser that cannot blur.
- **Card height is content-driven, never fixed** — 281 → 372 px depending on width; at three columns
  the row stretches all three to the tallest, at two columns the third card sits **alone at half
  width** leaving a 423 px hole at 900 px.
- **The grid is arithmetic, not breakpoints** — `repeat(auto-fit, minmax(290px, 1fr))` with a 22 px
  gap gives **3 / 2 / 1 columns at 946 / 634 / 633** — thresholds that appear nowhere in the sheet.
- **The blobs are a legibility liability**, measured: six text runs at 1440 fall below AA, the worst
  at **2.05:1**, because a blob's bright core sits under the copy (see *Contrast* and defect 1).

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,889 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `card-10` is one of the **214 snippet variants in 19 families** the listing carries and
`TEMPLATES.md` does not. The 42 standalone designs in that gap are all prepped; the snippet families
are the remaining queue, worked **in family order, then variant number**. In this family
**Nameplate** (`1a09a0c7b`), **Marketrow** (`780313169`), **Octavo** (`2a8371ce0`), **Tierline**
(`9e6e58563`), **Plaudit** (`7487355a6`), **Statline** (`7113c220a`), **Lodgerow** (`be9c73c5c`),
**Roadbook** (`ad739732c`) and **Lexeme** (`6c7feb62d`) came first.

The family section **`## Bootstrap Cards (20)` already exists on main** (line 733) and currently
carries **two** rows, `Card 01` and `Card 02`. This design's row goes **directly after the last card
row present** when the implementer ships it:

```markdown
- [x] **Card 10** — [colorlib](https://colorlib.com/wp/template/card-10/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-10.jpg) · [coffer](https://coffer.free.componentdock.com)
```

(`Card 03` … `Card 09` are still prepped-and-unbuilt, so the section gains rows out of order until
those ship — the implementer stream owns that batch edit, not this prep run.)

**The name.** `coffer` — one lowercase word, in no app folder, no spec folder, and
`git grep -il coffer origin/main` returns **0** files (the substring test this pipeline uses); the
ColorLib catalogue URLs `colorlib.com/wp/template/coffer/` (404), `preview.colorlib.com/theme/coffer/`
(404, 9 B) and `preview.colorlib.com/theme/bootstrap/coffer/` (404, 9 B) are all unused. A coffer is
the strongbox a household's money was kept in — the word behind "a full coffer", which is exactly
what the three cards show. Free alternates measured the same day (0 substring hits, no `apps/` hit,
no spec folder), if a later finance slug needs one: `cashbook`, `ledgerline`, `vaultwork`,
`spendly`, `tillage`. Do **not** reuse the family's taken names `nameplate`, `marketrow`, `octavo`,
`tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`, `lexeme`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 4,963 B** live (`4,771 B` inside the archive), `<title>` "Card V10 \| Colorlib", `lang="en"`, **one** stylesheet, **0 authored `<script>`** |
| preview path      | **`theme/bootstrap/card-10/index.html`**; the directory form `…/bootstrap/card-10/` is the same page. `theme/card-10/` is **404** (9 B) |
| ColorLib page     | `https://colorlib.com/wp/template/card-10/` **200, 113,464 B**; "Author: Colorlib", "Released: September 2026", "License: CC BY 3.0", published **2026-09-25T15:33:11Z**; states **"the download is 153 KB"** and links **"previous post: Card V09" / "next post: Card V11"** (the family continues) |
| stylesheet        | `css/style.css?v=918baee9`, **11,527 B**, sha256 `ecba3f6580f6c1c100dc956b19d4fb585dd0a497ccd67a6918fba2d2b916c3c8`; the zip twin is **byte-identical** |
| archive           | `preview.colorlib.com/downloads/free/card-10.zip`, **200, 157,079 B** (= 153.4 KiB ✓ the claim), **14 entries**: 4 dirs + `index.html` 4,771 B + `css/style.css` 11,527 B + `README.md` 1,260 B + **8 `woff2`** — **no `js/`, no `images/`** (the README lists both; neither exists) |
| live ↔ archive    | CSS **identical sha256**, all **8 fonts identical**, `index.html` differs **only** in host lines (`robots` ×2, a `cdnjs` `dns-prefetch`, `?v=` cache-busters, `fetchpriority="high"`) — **the body markup is byte-identical** → **live preview verified; the archive is its un-versioned twin** |
| fonts             | **8** `@font-face` rules — Sora **400 / 500 / 600 / 700**, `latin` + `latin-ext` — but only **2 distinct binaries**: `latin` 25,240 B (`3902474d…`) ×4, `latin-ext` 12,116 B (`8d9b4a41…`) ×4. **Not** faux type: the file is a **variable cut** re-served under four names — canvas at 40 px measures **389 px at 400** against **397 px at 700** for "Good evening, Lina", so the four weights are really instanced |
| images            | **0** `<img>`. The archive has no `images/` directory. The only graphics are **7 inline `<svg>`**: the two-disc issuer mark, the gold chip, the donut, and four 24-box line icons |
| CSS size          | 519 lines, **11,527 B**: **65 style rules / 147 selectors**, of which **57** are `.cl-*`; **1** media query (`prefers-reduced-motion`), **1** `@supports`, **0** `@keyframes`, **0** container queries, **0** breakpoints |
| classes           | **37** in the markup, **all styled**; **1 dead template selector**, `.cl-icon` (**third** card in a row) |
| controls          | **2 anchors** (`Add money`, `See all` — both `href="#"`), **0 `<button>`, 0 forms, 0 inputs**, **2 focusable elements** |
| headings          | **1 × `h1`** ("Good evening, Lina") and **3 × `h2`** (one per card, each referenced by its `<section aria-labelledby>`) |
| blocks            | `<main class="cl-card10-demo">` → 3 `aria-hidden` blob `<div>`s → `<header>` (h1 + sub) → `<div class="cl-card10-grid">` of **3 `<section>`** → `article`-less cards built from `div`/`p`/`ul` |
| custom properties | **1**: `--cl-card10-edge: rgba(255,255,255,.28)`, declared on `.cl-card10` and used once (its own `border-color`) — a token with one consumer |
| content height    | **900** at 1,440 (exactly the viewport: `min-height: 100vh`) · 900 at 1,280 / 1,180 / 1,024 / 946 · **1,146** at 480 and 390 · **1,206** at 340 · **1,272** at 320 |
| horizontal scroll | **none at any width probed** — `body.scrollWidth === clientWidth` **and** `scrollTo(300,0) → scrollX 0` at 320 / 340 / 360 / 390 / 480 / 600 / 634 / 640 / 700 / 768 / 900 / 946 / 1,024 / 1,180 / 1,280 / 1,440 |

## Design tokens (measured from `style.css`, 11,527 B, and from `getComputedStyle` at 1440 px)

### Palette — a three-stop gradient ground, one white glass, two accents

| role                | value                                  | where                                                                 |
| ------------------- | -------------------------------------- | --------------------------------------------------------------------- |
| stage gradient      | `linear-gradient(135deg, #1e1b4b 0%, #4c1d95 45%, #9d174d 100%)` | `.cl-card10-demo` — **Tailwind `indigo-950` → `violet-900` → `pink-900`, exact** |
| body fallback       | `#2e1065`                              | `body` background — **Tailwind `violet-950`**; unreachable in practice (see defect 7) |
| blob A (pink)       | `radial-gradient(circle at 30% 30%, #f472b6, #db2777 70%)` | 320 × 320 at `top: 8%; left: 6%` — `pink-400 → pink-600` |
| blob B (orange)     | `radial-gradient(circle at 30% 30%, #fb923c, #c2410c 70%)` | 380 × 380 at `right: 4%; bottom: 6%` — `orange-400 → orange-700` |
| blob C (cyan)       | `radial-gradient(circle at 30% 30%, #67e8f9, #0e7490 70%)` | 220 × 220 at `top: 36%; left: 44%` — `cyan-300 → cyan-700` |
| blob blur           | `filter: blur(8px)` on all three, `border-radius: 50%` | — |
| card glass          | `linear-gradient(160deg, rgba(255,255,255,.2), rgba(255,255,255,.06))` + `backdrop-filter: blur(22px) saturate(160%)` | `.cl-card10`, inside `@supports` only |
| card fallback       | `#3b1a6e`                              | `.cl-card10` background **outside** the `@supports` — **not** a Tailwind step |
| card edge           | `rgba(255,255,255,.28)`                | `--cl-card10-edge`, the 1 px border                                    |
| ink                 | `#ffffff`                              | card and stage text                                                    |
| secondary ink       | `#ede9fe`                              | labels, sub-line, list meta, goal sub-line — **Tailwind `violet-100`**, exact |
| gold accent         | `#fde68a`                              | donut fill, focus ring — **`amber-200`**; the chip is the same gold at `.85` |
| mint accent         | `#bbf7d0` / `#14532d`                  | "On track" pill background / its text — **`green-200` / `green-900`**; `#bbf7d0` also paints positive amounts |
| CTA                 | `#ffffff` background, `#4c1d95` text    | `.cl-card10__btn` — **`violet-900`** on white, **10.95:1** |
| hairline            | `rgba(255,255,255,.14)`                | list row borders (`1px`), none on `:last-child`                        |
| icon tile           | `rgba(255,255,255,.16)`                | 38 × 38, radius 12                                                     |
| donut track         | `rgba(255,255,255,.2)`                 | 10 px stroke                                                           |
| shadows             | `0 24px 60px -24px rgba(10,0,30,.6), inset 0 1px 0 rgba(255,255,255,.25)` | one declaration, two layers — the inset is what makes the top edge read as glass |

Every chromatic value except `#3b1a6e` is **stock Tailwind 4 palette**. The palette therefore needs
no invention at all — and no `@theme` entry beyond the glass fallback and the gradient stops.

### Type — one variable face, four declared weights, two binaries

- **Sora** only, `font-family: "Sora", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` on
  `body`. No serif, no mono, no second family anywhere on the page.
- Eight `@font-face` rules (400/500/600/700 × `latin`/`latin-ext`) resolving to **two binaries** — a
  variable cut re-served under four names, so **no weight is synthesised**. Canvas A/B at 40 px:
  **389 px at 400**, **397 px at 700**, 397 at 800 (clamped) — the axis is real and tops out at 800.
- `body` sets **no `line-height`**, and neither does the `h1`: both compute `normal` (Sora's ≈ 1.275),
  so the 40 px title occupies a **51 px** box and 16 px copy sits on **21 px**. Do not impose
  Tailwind's `leading-none` on the title.

| run                       | size      | weight | line-height      | tracking             | other                                                    |
| ------------------------- | --------- | ------ | ---------------- | -------------------- | -------------------------------------------------------- |
| `.cl-card10-demo__title`  | **clamp(28px, 3.6vw, 40px)** | 700 | `normal` (**51** at 40) | **`-.03em`** (`−1.2 px`) | `margin: 0`                                 |
| `.cl-card10-demo__sub`    | 16 px     | 400    | `normal` (21)    | normal               | `#ede9fe`, `margin: 6px 0 0`                              |
| `.cl-card10__title`       | 16 px     | 600    | 24 (1.5)         | normal               | `margin: 0`; it is the `<h2>` inside each card            |
| `.cl-card10__label`       | **12.5 px** | 400 (400 as `Available balance`) / **600** (in the meta strip) | 18.8 | **`.04em`** (0.5 px) | `#ede9fe`, `display: block`, `margin: 0`  |
| `.cl-card10__big`         | **36 px** | 700    | **1** (36)       | **`-.03em`** (`−1.08 px`) | `margin: 22px 0 0`, overridden to **4 px** by `.label +` |
| `.cl-card10__big span`    | 20 px     | 700    | inherits         | inherits             | the cents, `#ede9fe`                                      |
| `.cl-card10__number`      | 17 px     | 500    | 25.5 (1.5)       | **`.12em`** (`2.04 px`), `word-spacing: .2em` (`3.4 px`) | `margin: 10px 0 14px`               |
| `.cl-card10__pill`        | 12.5 px   | 600    | 18.8             | normal               | `4px 10px`, radius `999px`                                |
| `.cl-card10__goal-name`   | 18 px     | 600    | 27               | normal               | `margin: 0`                                               |
| `.cl-card10__goal-sum`    | 15 px     | 400    | 22.5             | normal               | `#ede9fe`, `margin: 4px 0 0`; `strong` is `20 px / 700` `#fff` |
| `.cl-card10__muted`       | **13.5 px** | 400  | 20.25            | normal               | `#ede9fe`, `margin: 4px 0 0` — wraps to **2 lines** below ~330 px card width |
| `.cl-card10__btn`         | 15 px     | 600    | 22.5             | normal               | `12px 16px`, radius 14, centred                            |
| `.cl-card10__link`        | 13.5 px   | 600    | 20.25            | normal               | `text-underline-offset: 3px`, UA underline (`#fff`)         |
| `.cl-card10__what`        | 15 px     | 600    | **1.3** (19.5)   | normal               | merchant name                                             |
| `.cl-card10__what span`   | 12.5 px   | 400    | 16.3             | normal               | `#ede9fe` — `category · date`                              |
| `.cl-card10__amt`         | 15 px     | 600    | 22.5             | normal               | **`font-variant-numeric: tabular-nums`**, `nowrap`          |
| `.cl-card10__ring-num`    | 24 px     | 700    | —                | —                    | `<text>` inside the donut                                  |
| `.cl-card10__ring-cap`    | 12 px     | 400    | —                | —                    | `<text>` "saved"                                           |

The card root sets `font-size: 15px; line-height: 1.5`, so `12.5 px` runs sit on an 18.8 px line and
`13.5 px` on 20.25 — **do not "round" 12.5 to 13 or 13.5 to 14**: the label box and the wrap point of
the goal's sub-line are both decided by the half pixel.

### Radii, decoration, motion

| element         | value                                                                 |
| --------------- | --------------------------------------------------------------------- |
| card radius     | **24 px** (not a Tailwind step: `rounded-3xl` is 24 but verify)         |
| CTA radius      | **14 px** — deliberately not 12 or 16                                   |
| icon tile       | `12px`, 38 × 38                                                         |
| pill            | `999px`, `4px 10px`, no border                                          |
| chip            | SVG `rect rx="7"` inside a 44 × 34 viewBox, drawn at 40 × 30            |
| donut           | 120 viewBox at 116 px, `stroke-width: 10`, `stroke-linecap: round`, `pathLength="100"`, `stroke-dasharray="68 100"`, svg `rotate(-90deg)` + `<text>` counter-rotated `rotate(90deg)` with `transform-origin: 60px 60px` |
| blob blur       | `filter: blur(8px)` — **8 px, not 40**; the gradients are already soft   |
| stage padding   | `clamp(40px, 7vw, 88px) 16px`                                           |
| motion          | **one** transition: `.cl-card10__btn { transition: transform .2s ease, box-shadow .2s ease }`, `:hover` → `translateY(-1px)` + `0 10px 24px -10px rgba(0,0,0,.5)`; **0 `@keyframes`** |
| reduced motion  | `@media (prefers-reduced-motion: reduce)` → `transition: none` and `transform: none` on `:hover` |
| focus ring      | `outline: 3px solid #fde68a; outline-offset: 3px` on `.cl-card10__btn` **and** `.cl-card10__link` — gold, not white, because the card behind it is violet |

### Layout — one 1140 container, arithmetic columns, a 100 vh stage

- Stage: `.cl-card10-demo` is `min-height: 100vh`, `padding: clamp(40px, 7vw, 88px) 16px`,
  `overflow: hidden`, `position: relative`. It is the gradient, and at 1440 it is **exactly 900 px**
  tall because `100vh` wins over content (content ends at 525).
- Container: `.cl-card10-demo__head` and `.cl-card10-grid` are both `max-width: 1140px; margin: 0
  auto` — **1140 content**, i.e. outer **1140** at x **150** in a 1440 viewport (no extra padding on
  the container; the 16 px lives on the stage). The sheet's `:where(html) … { all: revert }` guard
  restores `content-box`, so `max-width` applies to the content box as written.
- Grid: `repeat(auto-fit, minmax(290px, 1fr))`, `gap: 22px` (not 20, not 24).
- Column thresholds are pure arithmetic on the grid width `G = min(1140, vw − 32)`:
  `3` columns need `3·290 + 2·22 = 914` → **viewport 946**; `2` need `2·290 + 22 = 602` →
  **viewport 634**. Measured on a ±1 px sweep: **633 → 1, 634 → 2, 945 → 2, 946 → 3**, and at 634
  the two tracks are exactly **290.0 px**, at 946 the three are exactly **290.0 px** — the floor binds
  precisely at the boundary.
- Head: `margin-bottom: 32px`; h1 then 6 px to the sub-line. The head is **1140 × 99** at (150, 88) and
  the grid starts at **y 198**.
- Card padding **24 px**, `display: flex; flex-direction: column` — this is what lets the meta strip
  (card 1) and the CTA (card 2) be bottom-anchored with `margin-top: auto`.

### Component geometry (1440 px; coordinates are page-space, card 1 at x 150, y 198, 365.33 × 327)

| part        | box                                                                 |
| ----------- | ------------------------------------------------------------------- |
| card row    | y **223**, h **26** — `<h2>` 24 px + the issuer mark 44 × 26        |
| bank label  | y **271**, h **18.8** (`margin-top: 22` from the card top, `>.label`) |
| balance     | y **293.8**, h **36** — `€6,482` at 36/700 + `.30` at 20 px          |
| chip        | y **351.8**, **40 × 30** (`margin-top: 22` after the 36 px balance) |
| number      | y **391.8**, h **25.5** (`margin-top: 10`)                          |
| meta strip  | y **460.3**, h **39.8**, `gap: 36`, `margin-top: auto` → **29 px of flex slack** above it |
| goal ring   | **116 × 116** at (562.3, 269.8) — 18 px gap to the copy block        |
| goal CTA    | y **453.5**, **315.33 × 46.5**, `margin-top: auto`, 24 px above the card's bottom edge |
| activity list | y **261** (`margin-top: 14` under the row); rows h **57, 57, 57, 56** at y 261 / 322 / 383 / 444 |
| icon tile   | 38 × 38, radius 12, 12 px gap to the name, 12 px gap to the amount   |

Card-1 arithmetic (content box 315.33, top pad 24): `24 + 26 + 22 + 18.8 + 4 + 36 + 22 + 30 + 10 +
25.5 + 14 = 232.3` from the card's top edge to the end of the number; the meta strip (39.8) is then
pushed down by `margin-top: auto`, and the card's 327 px height comes from card 3 — i.e. **card 1 is
stretched, not sized**: at 2-column widths it is 320 and the slack shrinks to 22 px.

### Responsive matrix (measured; card heights are content-driven and never fixed)

| viewport | columns | grid width | track width | card heights (row by row) | h1 | document |
| -------: | ------: | ---------: | ----------: | ------------------------- | -: | -------: |
|     1440 |       3 |       1140 |      365.33 | 327 / 327 / 327            | 40 px |      900 |
|     1280 |       3 |       1140 |      365.33 | 327 / 327 / 327            | 40 px |      900 |
|     1180 |       3 |       1140 |      365.33 | 327 / 327 / 327            | 40 px |      900 |
|     1024 |       3 |        992 |      316.00 | 327 / 327 / 327            | 36.86 px |    900 |
|      947 |       3 |        915 |      290.33 | **372 / 372 / 372**        | 34.09 px |    900 |
|      946 |       3 |        914 |      290.00 | 372 / 372 / 372 **(the 3-col floor)** | 34.06 px | 900 |
|      945 |       2 |        913 |      445.50 | 320 / 320 ‖ 327            | 34.02 px |    903 |
|      900 |       2 |        868 |      423.00 | 320 / 320 ‖ 327            | 32.40 px |    900 |
|      768 |       2 |        736 |      357.00 | 320 / 320 ‖ 327            | 28 px |      900 |
|      700 |       2 |        668 |      323.00 | 320 / 320 ‖ 327            | 28 px |      900 |
|      640 |       2 |        608 |      293.00 | **341 / 341 ‖ 341**        | 28 px |      900 |
|      635 |       2 |        603 |      290.50 | 341 / 341 ‖ 372 **(the 2-col floor)** | 28 px | 918 |
|      634 |       2 |        602 |      290.00 | 341 / 341 ‖ 372            | 28 px |      918 |
|      633 |       1 |        601 |      601.00 | 320 ‖ 281 ‖ 327 **(the 1-col ceiling)** | 28 px | 1,155 |
|      600 |       1 |        568 |      568.00 | 320 ‖ 281 ‖ 327            | 28 px |  1,150 |
|      480 |       1 |        448 |      448.00 | 320 ‖ 281 ‖ 327            | 28 px |  1,146 |
|      390 |       1 |        358 |      358.00 | 320 ‖ 281 ‖ 327            | 28 px |  1,146 |
|      360 |       1 |        328 |      328.00 | 320 ‖ 293 ‖ 327            | 28 px |  1,179 |
|      340 |       1 |        308 |      308.00 | 320 ‖ 320 ‖ 327            | 28 px |  1,206 |
|      320 |       1 |        288 |      **290.00** | **320 ‖ 341 ‖ 372**    | 28 px |  1,272 |

Three facts the matrix carries that no single screenshot shows:

1. **At three columns the row stretches**: all three cards take the tallest (327 at 1440, 372 just
   above the 3-column floor) because `align-items` defaults to `stretch`. At two columns the first
   row is bank+goal (`341` at 640) and **the activity card sits alone in row 2 at half width** — a
   423 px hole to its right at 900. That asymmetry is the reference's behaviour (defect 4).
2. **The goal card is the shortest at 1,024–1,441 (327) and the tallest below 340 (341)**, because its
   sub-line wraps from one to two lines at a 290–308 px track. Card heights are a function of copy
   wrapping, not of a breakpoint.
3. **At 320 the track (290) is 2 px wider than the grid box (288)**, so the single card's right gutter
   reads **14 px** against the left's 16. It is clipped by the stage's `overflow: hidden`, adds no
   scrollbar (verified `scrollX 0`), and must **not** be "fixed" by adding a breakpoint (defect 5).

### Contrast — measured under the blobs, and the one thing that must change

Method: at 1440, screenshot the page, then screenshot again with every `color` forced transparent, and
for each text run take the **median background colour actually behind its glyph pixels** (glyph mask =
pixels that changed) and compute the WCAG ratio against that run's CSS colour. This is the only honest
number here, because the card's background is not a token — it is gradient + blob + glass at that spot.

| run                                        | size/wt | measured | needs | verdict |
| ------------------------------------------ | ------- | -------: | ----: | ------- |
| head sub-line over **blob A**              | 16 / 400 | **3.39** | 4.5 | **FAIL** |
| `Available balance` over **blob A**        | 12.5 / 400 | **2.48** | 4.5 | **FAIL** |
| goal sub-line `€320 a month · target March 2027` over **blob C** | 13.5 / 400 | **2.05** | 4.5 | **FAIL** |
| `€2,720 of €4,000` over **blob C**         | 15 / 400 | **4.29** | 4.5 | **FAIL** |
| `Everyday account` (h2) over **blob A**    | 16 / 600 | **2.79** | 4.5 | **FAIL** |
| `−€8.40` over **blob B**                   | 15 / 600 | **4.48** | 4.5 | **FAIL** (by 0.02) |
| balance `€6,482.30` over **blob A**        | 36 / 700 | 3.15 | 3.0 | pass, **5 % margin** |
| h1 `Good evening, Lina` over **blob A**    | 40 / 700 | 5.10 | 3.0 | pass |
| `Card holder` / `Expires` labels           | 12.5 / 600 | 7.11 / 6.93 | 4.5 | pass |
| four `category · date` lines               | 12.5 / 400 | 5.23 – 5.47 | 4.5 | pass |
| four amounts                               | 15 / 600 | 5.21 – 6.44 | 4.5 | pass |
| `Card ending in … 4821`                    | 17 / 500 | 7.61 | 4.5 | pass |
| `See all`                                  | 13.5 / 600 | 6.04 | 4.5 | pass |
| `On track` pill (own mint ground)          | 12.5 / 600 | 7.52 | 4.5 | pass |
| `Add money` (own white ground)             | 15 / 600 | 10.95 | 4.5 | pass |

**6 of 24 runs fail at 1440; worst 2.05:1.** The cause is measurable, not aesthetic: blob A's box is
(86, 72)–(406, 392) and card 1 is (150, 198)–(515, 525), so A's **bright core sits under the first
card's top-left quarter and under the whole head**; C is (634, 324)–(854, 544) and card 2 is (537,
198)–(903, 525), so C sits under the goal card's lower half; B is (1002, 466)–(1382, 846) and card 3 is
(925, 198)–(1290, 525), so B washes the fourth ledger row.

**Verified fix (measured, not proposed)** — dim the blobs and put a violet scrim under the white glass:

```css
.cl-card10-demo__blob { opacity: .35; }          /* the glows still read on the gradient */
.cl-card10 { background-color: rgba(20, 8, 40, .5); }  /* scrim under the white glass layer */
```

Re-measured with the same method: **0 of 22 runs fail, worst 6.95:1** (`Available balance`, the run
that was 2.48), and the screenshot still reads as frosted glass with three visible blobs — the card
keeps its light left edge, its inset highlight and its transparency. Applying **only** the scrim
(`rgba(20,8,40,.38)`, blobs untouched) leaves **4** failures; applying **only** `opacity: .5` to the
blobs leaves **4**; moving the blobs clear of the band instead (A to `top:-4%;left:-6%`, C to
`top:78%;left:30%`) leaves **4** because the head's pink wash disappears but B keeps washing the
ledger. The scrim **plus** the dim is the only combination that clears everything.

## Requirements

### Requirement 1: Page shell and the full-viewport gradient stage

The app SHALL render exactly one stage element — `<main>` on `min-height: 100vh`, `position:
relative`, `overflow: hidden`, background `linear-gradient(135deg, #1e1b4b 0%, #4c1d95 45%, #9d174d
100%)`, padding `clamp(40px, 7vw, 88px) 16px` — containing, in order, three `aria-hidden` blob
`<div>`s, a `<header>`, and the card grid.

#### Scenario: The stage is the viewport at desktop and taller than it on mobile

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the app has rendered
- **THEN** the stage's height SHALL be **900 px** — exactly `100vh`, not the 525 px its content needs
- **AND** at 390 px wide the document SHALL be **1,146 px** tall, i.e. the stage grows past the viewport
- **AND** `body.scrollWidth` SHALL equal `clientWidth` and `window.scrollTo(300, 0)` SHALL leave
  `scrollX === 0` at 320 / 390 / 480 / 634 / 768 / 946 / 1,024 / 1,440

#### Scenario: The blobs are decoration only

- **GIVEN** the three blob divs
- **WHEN** the accessibility tree is inspected
- **THEN** all three SHALL carry `aria-hidden="true"`
- **AND** each SHALL be `border-radius: 50%` with `filter: blur(8px)` and a two-stop radial gradient,
  sized 320 / 380 / 220 px, positioned 8 %/6 %, right 4 %/bottom 6 %, and 36 %/44 %
- **AND** none SHALL be focusable, clickable or measurable in the tab order

### Requirement 2: The head — a greeting and one line of context

The app SHALL render a `<header>` holding an `h1` at `clamp(28px, 3.6vw, 40px)`, weight 700,
`letter-spacing: -.03em`, `line-height: normal`, and a 16 px `#ede9fe` sub-line 6 px below it, with the
grid starting 32 px under the head.

#### Scenario: The title scales on a clamp and never wraps at desktop

- **GIVEN** a 1440 px viewport
- **WHEN** the h1 is measured
- **THEN** it SHALL be **40 px** with a **51 px** line box (the font's `normal` leading, not 1.0 or 1.1)
- **AND** at 1,024 it SHALL be **36.86 px**, at 768 and below **28 px**
- **AND** it SHALL stay on **one line** at every width down to 320

#### Scenario: The head carries the reference copy

- **GIVEN** the greeting
- **WHEN** its text is read
- **THEN** the `h1` SHALL read "Good evening, Lina" and the sub-line "Here is where your money stands
  this week."
- **AND** the sub-line SHALL keep the period and the double space after "week." only as the
  reference's single space — no invented marketing line

### Requirement 3: The grid is arithmetic, not breakpoints

The card grid SHALL be a CSS grid of `repeat(auto-fit, minmax(290px, 1fr))` with a **22 px** gap,
inside a container with `max-width: 1140px; margin: 0 auto`, and SHALL carry **no** column
breakpoint class, media query or JS measurement.

#### Scenario: Three, two and one column at the arithmetic thresholds

- **GIVEN** the grid
- **WHEN** the viewport is swept one pixel at a time across each boundary
- **THEN** it SHALL render **3 columns at 946**, **2 at 945 and 634**, **1 at 633**
- **AND** the tracks SHALL be exactly **290.00 px** at 634 (two) and at 946 (three) — the floor binding
  at the boundary
- **AND** at 1440 the tracks SHALL be **365.33 / 365.33 / 365.34** and the grid **1,140 px** at x 150

#### Scenario: The wrapped third card stays at half width

- **GIVEN** a 900 px viewport where the grid has two columns
- **WHEN** the third card is measured
- **THEN** it SHALL sit at **y 504** in row 2 at **423 px** wide — half the row, with a **423 px hole**
  to its right
- **AND** it SHALL **not** be made to span two columns, and no card SHALL be reordered

### Requirement 4: The glass card shell

Every card SHALL be a 24 px-radius flex column with 24 px padding, a `1px rgba(255,255,255,.28)`
border, the two-layer shadow, and a background that is the white glass gradient **inside**
`@supports (backdrop-filter: blur(1px))` and the flat `#3b1a6e` **outside** it.

#### Scenario: Glass where blur exists, flat violet where it does not

- **GIVEN** a browser with `backdrop-filter` support
- **WHEN** a card's computed style is read
- **THEN** `background-image` SHALL be `linear-gradient(160deg, rgba(255,255,255,.2),
  rgba(255,255,255,.06))` and `backdrop-filter` SHALL be `blur(22px) saturate(160%)`
- **AND** `box-shadow` SHALL be `rgba(10,0,30,.6) 0 24px 60px -24px, rgba(255,255,255,.25) 0 1px 0 0
  inset`
- **AND** with `@supports` defeated the card SHALL fall back to `#3b1a6e` and stay legible

#### Scenario: Cards stretch, they are never given a height

- **GIVEN** three columns at 1440
- **WHEN** the three cards are measured
- **THEN** all three SHALL be **327 px** tall (the tallest, card 3) and **365.33 px** wide
- **AND** at 946 all three SHALL be **372 px**; at 634 row 1 SHALL be **341 px** and the lone third
  card **372 px**; at 320 the three SHALL be **320 / 341 / 372**
- **AND** no card SHALL carry `height`, `min-height` or `aspect-ratio` beyond the flex stretch

### Requirement 5: The account card

Card 1 SHALL be a `<section aria-labelledby>` whose `<h2>` is "Everyday account", laid out as: a
title row with a two-disc `<svg>` mark (44 × 26, the left disc at `rgba(255,255,255,.85)`, the right at
`.45`), a 12.5 px `#ede9fe` `AVAILABLE BALANCE`-style label, the balance at 36/700 with its cents in a
20 px `#ede9fe` span, a 40 × 30 gold chip SVG, the card number at 17/500 with `.12em` tracking and
`.2em` word spacing, and a bottom-anchored *Card holder / Expires* strip.

#### Scenario: The balance sets its cents one size down

- **GIVEN** the balance run
- **WHEN** its markup and computed style are read
- **THEN** it SHALL render "€6,482" at **36 px / 700 / `-.03em`** with a nested `span` holding ".30" at
  **20 px** in `#ede9fe`
- **AND** the gap above it SHALL be **4 px** from the label (the `.label + .big` override), not the
  22 px the base rule declares

#### Scenario: The card number is grouped and the strip is bottom-anchored

- **GIVEN** the number and meta strip
- **WHEN** they are measured at 1440
- **THEN** the number SHALL read "•••• •••• •••• 4821" using **U+2022** bullets with `word-spacing:
  .2em`, and SHALL be preceded in the accessibility tree by a visually hidden "Card ending in "
- **AND** the meta strip SHALL sit at **y 460.3** with `gap: 36`, the labels at 12.5/600 and the values
  at 14/600, pulled down by `margin-top: auto` (29 px of slack at 327 px tall)
- **AND** the strip's two pairs SHALL be "Card holder / Lina Moretti" and "Expires / 08/29"

### Requirement 6: The savings-goal card

Card 2 SHALL pair a **116 px donut** with a copy block: `h2` "Savings goal" plus a mint pill "On
track", then the ring (`pathLength="100"`, `stroke-dasharray="68 100"`, 10 px round-capped stroke), the
goal name "Kyoto in spring" at 18/600, "**€2,720** of €4,000", and the sub-line "€320 a month · target
March 2027", with a full-width white CTA "Add money" bottom-anchored.

#### Scenario: The donut reads upright and its arc starts at twelve o'clock

- **GIVEN** the donut `<svg>`
- **WHEN** it is measured
- **THEN** the svg SHALL be **116 × 116** with `transform: rotate(-90deg)` and each `<text>` SHALL be
  counter-rotated `rotate(90deg)` about `60px 60px`, so "68%" and "saved" read horizontally
- **AND** the fill circle SHALL be `#fde68a` with `stroke-linecap: round` over a
  `rgba(255,255,255,.2)` track, filling **68 %** of the circle
- **AND** the svg SHALL be `role="img"` with an `aria-label` of "68 percent saved"

#### Scenario: The percentage, the arc and the sums agree

- **GIVEN** the goal's data
- **WHEN** the ring's 68 %, "€2,720 of €4,000" and the monthly line are compared
- **THEN** **2,720 / 4,000 = 68.0 %** SHALL hold, so the arc is derived from the same pair of numbers
  rather than hand-tuned
- **AND** the CTA SHALL be **315.33 × 46.5** at 24 px above the card's bottom edge, `#fff` on
  `#4c1d95` at 15/600 with a 14 px radius

### Requirement 7: The activity ledger

Card 3 SHALL render `h2` "Recent activity", a `See all` link, and a four-item `<ul>` in which each row
is a 38 px icon tile, a merchant name over a `category · date` line, and a right-aligned amount, with
`1px rgba(255,255,255,.14)` separators and none under the last row.

#### Scenario: The four rows and their signs

- **GIVEN** the ledger at 1440
- **WHEN** its rows are enumerated
- **THEN** there SHALL be exactly **4 `<li>`**, at y **261 / 322 / 383 / 444**, heights **57 / 57 / 57
  / 56**
- **AND** the rows SHALL read "Corner Market — Groceries · Today — −€42.18", "Salary — Income · 23 Sep
  — +€3,150.00", "Rail pass — Transport · 22 Sep — −€64.00", "Bluebird Café — Eating out · 21 Sep —
  −€8.40"
- **AND** the negatives SHALL use **U+2212 minus**, not a hyphen, and the credits SHALL be `#bbf7d0`
  while the debits stay white

#### Scenario: Amounts are tabular and never wrap

- **GIVEN** any amount cell
- **WHEN** its computed style is read
- **THEN** it SHALL carry `font-variant-numeric: tabular-nums` and `white-space: nowrap`
- **AND** the last row SHALL have no bottom border while the first three do
- **AND** the icons SHALL be 18 × 18 stroke SVGs (`stroke-width: 1.8`, `#fff`) inside
  `rgba(255,255,255,.16)` tiles

### Requirement 8: The blobs SHALL NOT cost legibility

The recreation SHALL keep the three blobs as page decoration **and** guarantee that every text run
clears its WCAG AA threshold against the background actually behind it — the reference does not
(**6 of 24 runs fail, worst 2.05:1**), so this is the one place the recreation deliberately departs
from the source.

#### Scenario: No text run falls below AA at 1440

- **GIVEN** the app at 1440 with the blobs rendered
- **WHEN** each text run's glyph pixels are masked and the median background behind them is measured
- **THEN** every run **below 24 px** SHALL reach **4.5:1** and every run at **24 px or larger** SHALL
  reach **3:1**
- **AND** the worst run SHALL be no lower than the reference's best fixed value — the measured
  reference fails are 2.05 / 2.48 / 2.79 / 3.39 / 4.29 / 4.48, and the shipped recipe reaches
  **0 failures with a worst of 6.95:1**

#### Scenario: The verified recipe keeps the glass look

- **GIVEN** the blobs at `opacity: .35` and a card `background-color: rgba(20, 8, 40, .5)` under the
  white glass gradient
- **WHEN** the page is rendered at 1440
- **THEN** the three blobs SHALL still be visible as glows and the cards SHALL still read as
  translucent glass with their light left edge and inset highlight
- **AND** the scrim SHALL sit **below** the white gradient layer so the glass's own gradient is
  unchanged; dimming only the blobs, or only scrimming the cards, or moving the blobs clear of the
  band, each still leaves **4** failures — all three are recorded as insufficient

### Requirement 9: Semantics, focus and reduced motion

The app SHALL expose three labelled `<section>`s, one `h1` and three `h2`s, two focusable elements, a
gold focus ring on both, and no motion under `prefers-reduced-motion: reduce`.

#### Scenario: The sections are named by their headings

- **GIVEN** the rendered page
- **WHEN** the accessibility tree is walked
- **THEN** the document SHALL hold **1 `<h1>`** and **3 `<h2>`**, each `h2` being the accessible name
  of its `<section aria-labelledby>`
- **AND** the page SHALL hold **2 focusable elements** — "Add money" and "See all" — and **0**
  `<button>`, `<form>`, `<input>`
- **AND** no heading level SHALL be skipped

#### Scenario: Focus is visible on violet, and the one transition respects motion preference

- **GIVEN** keyboard focus on either control
- **WHEN** the focus style is read
- **THEN** it SHALL be `3px solid #fde68a` at `outline-offset: 3px` — gold, not white, because the
  surface behind it is violet
- **AND** the CTA's `position: relative; display: block` note SHALL be dropped in favour of a real
  `<button>` so Enter and Space both activate it
- **AND** with `prefers-reduced-motion: reduce` the CTA's hover lift SHALL be `transform: none` and
  `transition: none`, and the page SHALL add **no** scroll-triggered animation of its own

### Requirement 10: Copy, currency and numeral fidelity

The recreation SHALL keep every figure, sign and separator of the reference copy, using the reference's
characters: **U+2212** for negatives, **U+00B7** between category and date, **U+2022** in the card
number, `€` with a thousands comma and a two-decimal cents part.

#### Scenario: The six figures and their glyphs

- **GIVEN** the rendered page
- **WHEN** its text is extracted
- **THEN** it SHALL contain `€6,482.30`, `€2,720 of €4,000`, `€320 a month · target March 2027`,
  `−€42.18`, `+€3,150.00`, `−€64.00`, `−€8.40`, `68%`, `08/29` and `4821`
- **AND** `grep` for a hyphen-minus before a euro amount SHALL return nothing, and `grep` for `&#183;`
  or a bare `·` SHALL match only where the reference has one

#### Scenario: The data is one dataset, and the ring derives from it

- **GIVEN** a single typed dataset (balance, goal saved/target, monthly amount, four transactions)
- **WHEN** an amount changes
- **THEN** the formatted figure, the credit/debit colour and the donut percentage SHALL all follow
  from it — the ring SHALL be computed as `saved / target`, never hard-coded at 68
- **AND** the "On track" pill SHALL be driven by a boolean, and the monthly line's target month SHALL
  be derived so it cannot contradict the arithmetic (the reference's own figures over-shoot: €1,280
  outstanding at €320/month is 4 months, not the 6 that "March 2027" implies)

### Requirement 11: Attribution, naming and repo integration

The app SHALL live at `apps/coffer` with package `@free-react-templates/coffer`, `public/CNAME` =
`coffer.free.componentdock.com`, `"homepage"` = `https://coffer.free.componentdock.com`, a footer
linking `https://www.componentdock.com/` as "Component Dock", and **no** ColorLib reference anywhere
in app code.

#### Scenario: No provenance leaks into the app

- **GIVEN** the finished app
- **WHEN** `grep -ri colorlib apps/coffer` and `grep -ri 'card-10\|Card V10' apps/coffer` are run
- **THEN** both SHALL return no matches — the mapping lives only in this spec, the `TEMPLATES.md` row
  and the PR body
- **AND** the footer SHALL link Component Dock on every viewport, and the attribution SHALL not be
  positioned over a blob

#### Scenario: The template is deployable and verifiable

- **GIVEN** the merge candidate
- **WHEN** verification runs
- **THEN** `npm run verify:app coffer` SHALL pass (typecheck + lint + knip + fallow + 100 % coverage +
  build) and `openspec validate template-coffer --type spec` SHALL report the spec valid
- **AND** the app SHALL expose one route, render without console errors, and ship **no** photography —
  all seven glyphs SHALL be inline SVG or `lucide-react` equivalents
- **AND** the `TEMPLATES.md` row quoted above SHALL be added under `## Bootstrap Cards (20)`

## Screenshot analysis (catalogue image, `card-10.jpg`)

- **`card-10.jpg` is 33,128 B of AVIF behind a `.jpg` extension** (`PIL` opens it; `file` says *ISO
  Media, AVIF*) — convert before viewing. It is the only listing image at that path:
  **1,200 × 972**, a white frame with the preview host's **macOS browser chrome** baked in (traffic
  lights + a `preview.colorlib.com` URL bar) — the same framing as the rest of the family.
- **It is a scaled render, not a 1,200 px layout.** The gradient stage inside the frame spans ≈ 1,120 px
  against a real 1,440, and one card measures ≈ 283 px against a real 365: scale ≈ **0.775**. Measure
  nothing from it — and do not conclude "the design is 1,200 wide".
- It shows the **whole page, uncropped and with the page's own emptiness**: head at the top, one row
  of three cards, and then ~380 px of untouched gradient to the frame's bottom edge. The framing is
  the closest of the family to a real browser window, because the page is exactly viewport-height.
- Visual read, confirmed against the 1440 render:
  - **The blobs are visible through the cards** — card 1's left half is washed pink, card 2's lower
    half cyan, card 3's bottom-right orange. That wash is the design's signature and also its defect:
    the pink core lands exactly on "Everyday account" and "Available balance".
  - **The cards read as glass, not as flat panels**, because of three details that must all survive:
    the `1px` white edge at `.28`, the `inset 0 1px 0 rgba(255,255,255,.25)` top highlight, and the
    `blur(22px) saturate(160%)` so the gradient *behind* is smeared into a colour field.
  - **The gold is the only warm accent**: the donut's 68 % arc, the chip, and the focus ring. The mint
    pill and the credit amount are the only green. Everything else is white/violet.
  - **Hierarchy is size and weight, not colour**: 40/700 greeting → 36/700 balance → 24/700 donut
    number → 18/600 goal name → 16/600 card titles → 12.5–15 px everything else. There is not a single
    coloured heading.
  - **The ledger is the only dense block**, and it is dense by ruling, not by boxes: three 1 px
    hairlines at `.14` and no fill, so the card's glass is unbroken from the title to the last amount.
  - **The card-number row is the only tracked type** (`.12em` + `.2em` word spacing), which is what
    makes it read as an embossed credit card rather than as a number.

## Known reference defects (do not copy)

1. **The blobs sit under the copy and break AA.** Measured at 1440: **6 of 24 runs fail**, worst
   **2.05:1** (`€320 a month · target March 2027` over the cyan blob's core), then 2.48 (`Available
   balance`), 2.79 (`Everyday account`), 3.39 (head sub-line), 4.29 (`€2,720 of €4,000`) and 4.48
   (`−€8.40`). The balance itself clears only by 5 % (3.15 against the 3.0 large-text floor). Ship the
   verified fix in Requirement 8 (`blob opacity .35` + card scrim `rgba(20,8,40,.5)`) — the look
   survives, the numbers do not.
2. **Both controls are dead.** `Add money` and `See all` are `href="#"` — 2 of 2 anchors — and the
   page has **no JavaScript at all**, so both do nothing. Render them as real controls: the CTA as a
   `<button>` that opens the (single) money-movement affordance or at least announces unsupported, and
   `See all` as a link to wherever the ledger lives. Never ship a dead `#`.
3. **Every figure is hand-written and the copy contradicts itself.** The ring's 68 % is honest
   (2,720 / 4,000 = 68.0 %), but €1,280 outstanding at €320/month is **4 months**, while the sub-line
   promises **March 2027** — about six months from the ledger's 23 Sep. Derive the ring, the sums and
   the colour from one dataset and let the monthly/target pair fall out of it (Requirement 10).
4. **Card heights are content-driven and the third card is orphaned at two columns.** 281 → 372 px
   depending on width; at 900 the activity card sits alone at **423 px** in row 2 with a 423 px hole
   beside it, and at 946 all three jump to **372** because the row stretches to the tallest. Reproduce
   the stretch and the orphan — do **not** add `col-span-2` to "balance" the row, and do **not** give
   the cards a fixed height so the copy clips.
5. **The 3-column floor overhangs its container by 2 px at 320.** `minmax(290px, 1fr)` yields a 290 px
   track in a 288 px grid box, so the single card's right gutter is **14 px** against the left's 16.
   `overflow: hidden` on the stage absorbs it and there is no scrollbar (`scrollX 0`). Leave it — do
   not add a breakpoint, and do not "fix" the asymmetry with a nested padding.
6. **`.cl-icon` is dead for the third card in a row.** 57 template selectors, and this one
   (`height: 1em; width: auto; fill: currentColor`) is never selected — the seven SVGs size
   themselves. Do not port it, and do not add a `.cl-*` utility layer.
7. **`body { background: #2e1065 }` is unreachable.** `main` paints `min-height: 100vh` with the
   gradient, so the body colour is only ever seen on overscroll. Put the gradient on the stage and let
   the body match the *top* stop (`#1e1b4b`), or the edges flash violet-950 on rubber-band scroll.
8. **`tabular-nums` is applied to the amounts only.** The balance, the goal sums and the donut's
   `68%` are proportional, so the same figure changes width when a digit changes. Apply
   `font-variant-numeric: tabular-nums` to **every** figure — this is a dashboard.
9. **The `sr-only` prefix has no positioned ancestor.** `.cl-card10__sr` is `position: absolute` inside
   a `<p>` that is not `position: relative`, so it resolves against the initial containing block. It
   is invisible only because of the `clip-path`. Use a real sr-only utility.
10. **The donut's numerals depend on a double rotation.** The svg rotates `-90deg` (so the arc starts
    at twelve o'clock) and each `<text>` rotates `+90deg` about `60px 60px`. Drop either half and "68%"
    / "saved" read sideways. Keep both, and keep `pathLength="100"` — without it `stroke-dasharray="68
    100"` is 68 *user units* of a 314 px circumference, i.e. 21 %.
11. **The archive's README describes files that do not exist.** It lists `js/snippet.js` and `images/`;
    the zip holds **14 entries** and neither is among them. There is no behaviour to port and nothing
    to caption — do not invent an "interactive" story in the docs.
12. **`--cl-card10-edge` is a one-consumer token.** Declared on `.cl-card10` and read once, by that
    same element's `border-color`. Harmless, but do not promote it to a `@theme` entry as if it were a
    system.

## Adapting to the repo (deltas the implementer owns)

| reference                                                      | recreation                                                                        |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `min-height: 100vh` + `overflow: hidden` on the stage           | `min-h-screen overflow-hidden relative` on `<main>` — **`min-h-dvh` only if you also test iOS chrome**, otherwise the gradient band shrinks |
| `padding: clamp(40px, 7vw, 88px) 16px`                          | `py-[clamp(40px,7vw,88px)] px-4`                                                   |
| `max-width: 1140px; margin: 0 auto` on head **and** grid        | `max-w-[1140px] mx-auto` on both — the 16 px lives on the stage, not here          |
| `repeat(auto-fit, minmax(290px, 1fr))`, `gap: 22px`             | `grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[22px]`                   |
| three blob divs with `filter: blur(8px)`                        | three `aria-hidden` divs with `[filter:blur(8px)]` and a radial-gradient arbitrary value; **add `opacity-[.35]`** (Requirement 8) |
| `@supports (backdrop-filter…) { … }` on the card                | Tailwind's `supports-[backdrop-filter]:` variant, **or** a plain CSS block in `index.css` with the `#3b1a6e` base — Tailwind 4 has no core `backdrop-filter` fallback wrapper |
| white glass gradient + `backdrop-filter: blur(22px) saturate(160%)` | `bg-[linear-gradient(160deg,rgba(255,255,255,.2),rgba(255,255,255,.06))] backdrop-blur-[22px] backdrop-saturate-[1.6]` **plus** `bg-[rgba(20,8,40,.5)]` as the scrim layer (stack two backgrounds or a `::before`) |
| `1px solid rgba(255,255,255,.28)` + two-layer shadow            | `border border-white/28 shadow-[0_24px_60px_-24px_rgba(10,0,30,.6),inset_0_1px_0_rgba(255,255,255,.25)]` |
| `border-radius: 24px` / `14px` / `12px`                          | `rounded-[24px]` / `rounded-[14px]` / `rounded-xl` (12)                            |
| `font-size: 12.5px`, `13.5px`                                    | `text-[12.5px]`, `text-[13.5px]` — **do not round**; the goal sub-line's wrap and every label box depend on the half pixel |
| `line-height: normal` (inherited, ≈1.275) on h1 and body         | `leading-[normal]` explicitly — Tailwind's preflight sets `inherit` and a `text-4xl` utility would impose 1.0 |
| `letter-spacing: -.03em` on title and balance                    | `tracking-[-.03em]`                                                                |
| `.12em` + `word-spacing: .2em` on the card number                | `tracking-[.12em] [word-spacing:.2em]`                                             |
| inline donut `<svg>` with `pathLength` and double rotation        | inline SVG (Tailwind cannot express `pathLength`); compute `strokeDasharray={`${pct} 100`}` and `transform="rotate(90 60 60)"` on the texts |
| inline chip / issuer mark / four line icons                      | inline SVG for the chip and the mark (they are brand-neutral shapes), `lucide-react` for `ShoppingBag`, `DollarSign`, `Briefcase`, `Coffee` at 18 px / 1.8 stroke |
| `#1e1b4b` / `#4c1d95` / `#9d174d` / `#ede9fe` / `#fde68a` / `#bbf7d0` / `#14532d` | stock Tailwind steps — `indigo-950`, `violet-900`, `pink-900`, `violet-100`, `amber-200`, `green-200`, `green-900`; only `#3b1a6e` and the scrim need `@theme` entries |
| 8 × `@font-face` (2 binaries, variable)                          | one Google Fonts `<link>`: `css2?family=Sora:wght@400..700&display=swap` (verified 200) |
| the `:where(html) … { all: revert }` guard (60 lines)            | **do not port it** — Tailwind's preflight is the equivalent                            |
| 0 scripts, 2 dead anchors                                        | one typed dataset module + a real `<button>` for the CTA and a real link for `See all` (defect 2) |
| no footer                                                        | one Component Dock attribution line (repo rule)                                    |

## Verification checklist

- [ ] `apps/coffer` exists, package `@free-react-templates/coffer`, `public/CNAME` =
      `coffer.free.componentdock.com`, `"homepage"` = `https://coffer.free.componentdock.com`
- [ ] `grep -ri colorlib apps/coffer` and `grep -ri 'card-10\|Card V10' apps/coffer` → **no matches**
- [ ] stage: `min-height: 100vh`, padding `88px 16px` at 1440, `135deg` gradient `#1e1b4b 0%` /
      `#4c1d95 45%` / `#9d174d 100%`, height **900** at 1440 and document **1,146** at 390
- [ ] three `aria-hidden` blobs: 320 / 380 / 220 px, `blur(8px)`, radial gradients, at 8 %-6 %,
      right 4 %-bottom 6 %, 36 %-44 %, and **`opacity .35`** (the fix)
- [ ] head: h1 `clamp(28px,3.6vw,40px)`/700/`−.03em`/`leading:normal` → **40 px, 51 px box, 1 line** at
      1440, **36.86** at 1024, **28** at 768 and 390; sub 16 px `#ede9fe` 6 px below
- [ ] grid: `repeat(auto-fit,minmax(290px,1fr))`, `gap: 22px`, container `1140` at x 150, grid y **198**
- [ ] columns: **3 at 946, 2 at 945, 2 at 634, 1 at 633**, tracks exactly **290.00 px** at both floors,
      **365.33 / 365.33 / 365.34** at 1440 — with **no** column breakpoint in the source
- [ ] cards: 24 px radius, 24 px padding, `1px rgba(255,255,255,.28)`, two-layer shadow, glass
      gradient + `blur(22px) saturate(1.6)` inside `@supports`, `#3b1a6e` outside
- [ ] card heights match the matrix — **327** at 1440 and 1024, **372** at 946, **320 ‖ 281 ‖ 327** at
      390, **320 ‖ 341 ‖ 372** at 320 — and **no** card carries a height utility
- [ ] at 900 the third card is at **y 504, 423 px wide**, alone in row 2 (orphan reproduced, not fixed)
- [ ] card 1: mark 44 × 26 (discs at `.85` / `.45`), label 12.5/400, balance 36/700 + 20 px cents with
      a **4 px** gap above, chip 40 × 30 gold `.85`, number 17/500 `.12em` + `.2em` word spacing with
      the sr-only "Card ending in", meta strip bottom-anchored (`gap: 36`, 12.5/600 over 14/600)
- [ ] card 2: mint pill `#bbf7d0`/`#14532d` radius 999; donut **116 × 116**, `pathLength="100"`,
      `stroke-dasharray="68 100"`, 10 px round-capped `#fde68a` fill on `.2` white track, svg
      `rotate(-90deg)` + texts `rotate(90deg)` so they read upright; `role="img"` + "68 percent saved"
- [ ] card 2 figures derive from one dataset: `saved / target` = **68 %**, CTA `315.33 × 46.5` at 24 px
      above the card's bottom, white on `#4c1d95`, radius 14
- [ ] card 3: exactly **4 `<li>`** at y **261 / 322 / 383 / 444** (57/57/57/56), 38 px icon tiles at
      `.16` white, name 15/600 over `category · date` 12.5/400 `#ede9fe`, amounts 15/600
      **tabular-nums** `nowrap`, credits `#bbf7d0`, **U+2212** on debits, hairline `.14` with **none**
      on the last row
- [ ] **contrast (fix defect 1):** every run < 24 px reaches **4.5:1** and every run ≥ 24 px reaches
      **3:1** against the pixel behind its glyphs; worst run **≥ 6.9:1** at 1440; the four blobs-on-text
      failures of the reference (2.05 / 2.48 / 2.79 / 3.39) are gone
- [ ] **both controls live (fix defect 2):** `Add money` is a `<button>` that does something, `See all`
      links somewhere — **0** `href="#"` on the page
- [ ] focus ring `3px solid #fde68a` at offset 3 on **both** controls, drawn outside the control
- [ ] `prefers-reduced-motion: reduce` → CTA `transform: none`, `transition: none`; no scroll animation
      added
- [ ] semantics: **1 `h1`**, **3 `h2`**, each section named by its `h2` via `aria-labelledby`, **2
      focusable elements**, **0** `<img>`, 7 inline/stroke SVGs
- [ ] copy: `€6,482.30`, `€2,720 of €4,000`, `€320 a month · target March 2027`, `−€42.18`,
      `+€3,150.00`, `−€64.00`, `−€8.40`, `68%`, `08/29`, `4821`; **no hyphen-minus before €**; U+00B7
      between category and date; U+2022 in the number
- [ ] `tabular-nums` on **every** figure (balance, goal sums, donut number, amounts) — fix defect 8
- [ ] no horizontal scroll: `scrollTo(300,0) → scrollX 0` at 320 / 390 / 480 / 633 / 634 / 768 / 945 /
      946 / 1,024 / 1,440; at 320 the card's right gutter is 14 px and **no** extra padding was added
- [ ] footer links `https://www.componentdock.com/` as "Component Dock", never over a blob
- [ ] `npm run verify:app coffer` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-coffer --type spec` is valid
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`, directly after the last shipped card
      row, with the line quoted in §Why this design has no row
