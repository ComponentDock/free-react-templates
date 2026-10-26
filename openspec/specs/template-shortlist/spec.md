# Template: Shortlist (Job cards — four hiring cards with a company initials tile, a posting age, a save toggle, skill chips and a salary footer)

## Purpose

A **single-screen job board band**: one head line over a **two-across grid of four job cards** on a
sage-grey ground (`#f4f6f3`). Each card is a **white, 18 px-radius panel with a 1 px `#e3e8e4` hairline**
that reads top-to-bottom as a hiring notice — a **44 × 44 initials tile in a per-company colour**, the
**company name with its posting age under it**, a **40 × 40 bookmark toggle** at the right edge, the
**role title as the card's only link**, a **pin + city with a work-mode pill beside it**, **three or four
outlined skill chips**, and a **hairline-topped footer** carrying the **salary range in ink under a muted
"/ year"** and the **contract type** at the right. The head itself is three pieces of information: an
`h1` (**"Design & product roles"**), a sub-line (**"128 open positions · updated today"**) and a
**right-aligned "Saved jobs: 1"** line whose number is live and whose bookmark glyph is the same shape as
the card toggles.

The page's **only behaviour is a save toggle per card.** Clicking a bookmark sets that card's button to
`aria-pressed="true"`, **recounts** the head's `Saved jobs:` figure, **announces** a sentence in a
`role="status"` line under the grid, and — via CSS `:has()` — **tints that card** to
`#fbfdf6` with a `#a3c76a` border while the button inverts to dark-on-lime. One card ships **pre-saved**
so the demo opens with a counter of **1** and one card already in its saved presentation.

- **Source slug:** `card-13`
- **ColorLib page:** https://colorlib.com/wp/template/card-13/ — **HTTP 200, 113,285 B**,
  `<title>` `Card V13 - Free Bootstrap Cards 2026 - Colorlib`, authoritative description *"Job cards for
  hiring pages with a company initials logo, posting age, role title, location, a remote or hybrid badge,
  skill tags, salary and contract type. A bookmark button saves each job using `aria-pressed`, updates a
  saved counter and announces the change."*, "Author: Colorlib", "Released: September 2026",
  "License: CC BY 3.0", `datePublished` **2026-09-25T15:33:17+00:00**, and the page claims the download is
  **157 KB** (archive measured **160,418 B** = 156.66 KB ✓). It is the **thirteenth of twenty** `card`
  variants and links its siblings on the page.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-13/ —
  **HTTP 200, 6,443 B**, `<title>` `Card V13 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  script. The slug-only path `theme/card-13/` **404s**; this family lives under the `bootstrap/`
  prefix (same ladder as `card-01` … `card-12`).
- **Design category:** Card (jobs / hiring board). Thirteenth member of the **`card` snippet family**
  (`card-01` … `card-20`) in the **214 snippet variants** catalogued in `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/shortlist`,
  package `@free-react-templates/shortlist`, CNAME `shortlist.free.componentdock.com`.

**What this design is.** A **listing card**, not a content card: everything above the footer answers
*who is hiring, how long ago, what the role is, where and how it is worked, and what they want you to
know*; the footer answers *what it pays and what kind of contract it is*. The card carries **no
photography at all** — it is the family's first image-free member, and its only "media" is the
initials tile, which is a coloured square with two capitals in it.

**Two facts decide whether the recreation reads correctly.**

1. **The saved state is a whole-card presentation, not a button state.** A pressed toggle changes the
   card's ground to `#fbfdf6` and its border to `#a3c76a`, and inverts the button to `#13201a` with a
   `#d9f99d` glyph. A port that only flips the icon loses the design's clearest signal.
2. **The head's counter is derived state.** `Saved jobs: 1` is not decoration — it is
   `document.querySelectorAll('.cl-card13__save[aria-pressed="true"]').length`, recomputed on every
   toggle, and the `role="status"` line underneath is the same click's announcement. Both must be
   React state, never DOM queries.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **2,834** item lines; the count is larger
than the 1,647 the header states because the checklist carries repeated catalogue entries). So this
design comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist
never recorded. `card-13` is one of the **214 snippet variants in 19 families**; snippet families are
worked **in family order, then variant number**, and the `card` family runs to **20**.

The family section **`## Bootstrap Cards (20)` already exists on main at line 733** and at this prep's
commit carries **five** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo,
`Card 04` → tierline, `Card 05` → plaudit (lines 735–739). Cards **06–12** are prepped and unbuilt
(`statline`, `lodgerow`, `roadbook`, `lexeme`, `coffer`, `showbill`, `coursebook`). This design's row
goes **directly after the last card row present** when the implementer ships it:

```markdown
- [x] **Card 13** — [colorlib](https://colorlib.com/wp/template/card-13/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-13.jpg) · [shortlist](https://shortlist.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns that
batch edit, not this prep run.

**The name.** `shortlist` — one lowercase word, and the design's own subject: the counter in the head is
literally a shortlist, and the bookmark is how you add to it. It is in **no** `apps/` folder and **no**
spec folder, and `git grep -il shortlist origin/main` returns only three unrelated prose hits
(`apps/rentora/src/data.ts`, `apps/domily/src/data.ts`, `skills/mlops/inference/llama-cpp/references/hub-discovery.md`),
never as a template name. The ColorLib catalogue paths `colorlib.com/wp/template/shortlist/`,
`preview.colorlib.com/theme/shortlist/` and `preview.colorlib.com/theme/bootstrap/shortlist/` are all
**404**. Do **not** reuse the family's taken names `nameplate`, `marketrow`, `octavo`, `tierline`,
`plaudit`, `statline`, `lodgerow`, `roadbook`, `lexeme`, `coffer`, `showbill`, `coursebook`. Other
candidates measured free the same day (no `apps/` folder, no spec folder): `jobdeck`, `roledeck`,
`postline`, `hiringdeck`, `talentboard`, `applydeck` — reserved for later variants.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 6,443 B**, `<title>` "Card V13 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script, `<meta name="robots" content="noindex, nofollow">` |
| preview path      | **`theme/bootstrap/card-13/`** — the directory URL is the page. `theme/card-13/` and `theme/bb/card-13/` are **404**                                   |
| stylesheet        | `css/style.css?v=10040d5d`, **11,323 B**, 478 lines, sha256 `6d2c8b25092b046e879d9cb57e828e5943461612ca636bec048c4003942f610f`                          |
| script            | `js/snippet.js?v=af728b62`, **1,291 B**, 39 lines, sha256 `72a94a7a5cd2c5469d578f5e968ef58746720d60aea786f9e6d82459648bf763`                            |
| archive           | `preview.colorlib.com/downloads/free/card-13.zip`, **200, 160,418 B** (156.66 KB ✓ the page's "157 KB"), **18 entries**: 6 dirs + `index.html` **6,240 B** + `css/style.css` **11,323 B** + `js/snippet.js` **1,291 B** + `README.md` **1,260 B** + **10 `woff2`** |
| live ↔ archive    | CSS **identical sha256** (`6d2c8b25…`), JS **identical sha256** (`72a94a7a…`), fonts identical; the live HTML is **6,443 B** against the archive's **6,240 B** — the 203-byte delta is the three `?v=` cache-busters → **the preview is the archive's versioned twin** |
| CSS shape         | **68** `{` blocks = **57** style rules + **10** `@font-face` + **1** `@media`; **25** distinct `.cl-*` selectors; **0** `@keyframes`, **0** `@supports`, **0** container queries, **0** column breakpoints |
| classes           | **24** classes in the markup, **all styled**; **1 dead selector** — `.cl-icon` (the family declares it and never uses it; markup hits **0**)            |
| custom properties | **4**: `--cl-card13-lime` `#d9f99d`, `--cl-card13-line` `#e3e8e4`, `--cl-card13-muted` `#4b5a52` (declared on `.cl-card13`), `--cl-card13-logo` (**set inline per card**) |
| cascade reset     | the sheet opens with `:where(html) :is(…) { all: revert }` — a host-page reset so a Bootstrap parent cannot restyle the snippet; **do not port it**, Tailwind preflight already owns this |
| controls          | **4** `<button>` (one per card), **4** `<a href="#">` (the role titles), **0** forms, **0** inputs, **0** `<img>` → **8** focusable elements         |
| headings          | **1 × `h1`** ("Design & product roles") and **4 × `h2`** (the role titles); cards are `<article>`, not `<section>`                                     |
| blocks            | `<main class="cl-card13-demo">` → `<header>` (h1 + sub + saved line) → `<div class="cl-card13-grid">` of 4 `<article class="cl-card13">` → `<p role="status">` |
| content height    | **792.28** at 1,440 (the document reports **900** = viewport) · **1,273** at 390 · **1,343** at 360 · **1,462** at 320                                 |
| horizontal scroll | **none at any width probed** — `scrollWidth === clientWidth` at 320 / 360 / 390 / 423 / 424 / 425 / 520 / 700 / 768 / 800 / 806 / 807 / 808 / 810 / 820 / 850 / 900 / 1,024 / 1,100 / 1,200 / 1,440 |
| screenshot        | `card-13.jpg` — **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 27,138 B); convert before viewing   |
| fonts             | **Figtree 400 / 500 / 600 / 700 / 800**, `latin` + `latin-ext` → **10** `@font-face` rules and **10** `woff2` files that are only **2 distinct binaries** (`latin` 20,184 B × 5, `latin-ext` 10,228 B × 5, same sha256 within each subset); no italic, no 900 |

### The two thresholds are arithmetic, not breakpoints (measured one pixel apart)

**Columns.** `.cl-card13-grid` is
`grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr)); gap: 16px`, with **no media
query**. The `min(100%, 380px)` floor is what stops a 288 px phone overflowing its own 288 px track.
Inside the 16 px page padding the grid needs **776 px** for two tracks, so the switch is **808**:

| viewport | grid width | columns                  |
| -------: | ---------: | ------------------------ |
|  **808** |    **776** | **2** (`380px 380px`)    |
|      807 |        775 | 1 (`775px`)              |
|      809 |        777 | 2 (`380.5px 380.5px`)    |
|    1,440 |      1,040 | 2 (`512px 512px`)        |

**Head rows.** The head is `display: flex; flex-wrap: wrap; align-items: flex-end;
justify-content: space-between; gap: 14px`. The left group needs **264.56 px** at its smallest
(the `h1` is shrink-wrapped text, not `flex: 1`), the saved line is **114 px** wide and the gap is
**14 px**, so the saved line stays on the head's single row from **425** up and drops under the left
group at **424**:

| viewport | head height      | saved line position                       |
| -------: | ---------------: | ----------------------------------------- |
|      425 |  **52.59** (1 row) | right-aligned, x **295**, y 66.59       |
|      424 | **84.59** (2 rows) | left-aligned, x **16**, y 98.59         |
|      390 |        84.59       | x 16, y 98.59                             |
|    1,440 |        63.59       | x **1126**, y 117.59 (bottom-aligned to the sub-line) |

## Design tokens (measured from `style.css`, 11,323 B, and from `getComputedStyle` at 1440 px)

### Palette — sage ground, deep green ink, one lime signal

| role                        | value     | where                                                              |
| --------------------------- | --------- | ------------------------------------------------------------------ |
| page ground                 | `#f4f6f3` | `body` background — a **sage grey**, not white, not warm paper      |
| ink                         | `#13201a` | `main` colour, titles, salary figures, the saved-state button fill  |
| muted                       | `#4b5a52` | sub-line, posting age, location row, "/ year", contract type        |
| hairline                    | `#e3e8e4` | card border, save-button border, chip border, footer rule           |
| lime signal                 | `#d9f99d` | the default work-mode pill, and the saved button's glyph            |
| lime ink                    | `#1a2e05` | text on the lime pill                                              |
| saved card ground           | `#fbfdf6` | `:has([aria-pressed="true"])` tint                                 |
| saved card border           | `#a3c76a` | the same rule                                                      |
| chip text                   | `#2c3a33` | the skill chips                                                    |
| hybrid pill                 | `#e0f2fe` bg / `#0c4a6e` ink | ".cl-card13__remote--hybrid"                              |
| office pill                 | `#f1f1ee` bg / `#3f3f3a` ink | ".cl-card13__remote--office"                              |
| status text                 | `#3f6212` | the `role="status"` line on the ground                             |
| hover border                | `#b8c6bd` | card hover                                                         |
| hover shadow                | `0 14px 30px -22px rgba(19,32,26,.5)` | card hover                              |
| focus ring (reference)      | `#65a30d` | 3 px outline, 2 px offset — **see defects 1**                       |
| save-hover ground           | `#f4f6f3` | the toggle's hover background — **the page colour on a white card** |

**Logo colours are per card, set inline as `--cl-card13-logo`**, not from a palette loop:
`#0e7490` (Tideline), `#7c3aed` (Northvale Health), `#c2410c` (Fieldstone Labs), `#15803d`
(Greenpath Energy). Four different hue families on purpose — teal, violet, orange, green — so the row
reads as four employers.

### Type — one face, five weights, three sizes that carry everything

`font-family: "Figtree", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` on `body`. The
snippet ships **10** `@font-face` rules (400/500/600/700/800 × `latin` / `latin-ext`) but only **two
distinct binaries** — the five `latin` rules all point at the same 20,184 B file and the five `latin-ext`
rules at the same 10,228 B one. Google Fonts serves the same family as **one variable face,
`wght@400..800`**, in **two** files — prefer the `<link>`.

| element                          | size                              | weight | line-height | tracking   |
| -------------------------------- | --------------------------------- | -----: | ----------: | ---------- |
| `h1` (head title)                | `clamp(26px, 3.4vw, 36px)`         |    800 |        `1.1` | `−.02em`   |
| sub-line                         | `15px`                            |    400 |      normal | —          |
| saved line                       | `15px` (`strong` bolds the count)  |    500 |      normal | —          |
| company name                     | base `14.5px`                     |    700 |        `1.3` | —          |
| posting age                      | `13px`                            |    400 |        `1.3` | —          |
| initials (inside the tile)       | `16px`                            |    800 |      normal | `−.02em`   |
| card title (`h2`)                | `19px`                            |    700 |        `1.3` | `−.01em`   |
| work-mode pill                   | `12.5px`                          |    700 |      normal | —          |
| skill chip                       | `13px`                            |    500 |      normal | —          |
| salary figure (`strong`)         | `16px`                            |    700 |        base | —          |
| salary suffix / contract type    | `14.5px` / `13px`                 | 400 / 600 |     base | —          |
| status line                      | `14px`                            |    600 |      normal | —          |

Card base type is **`14.5px` / `1.45`** (`.cl-card13 { font-size: 14.5px; line-height: 1.45 }`), which
is why the location row and the "/ year" suffix sit at 14.5 rather than at a round 14 or 15.

### Radii, decoration and motion

| thing                | value                                                                |
| -------------------- | -------------------------------------------------------------------- |
| card                 | **18 px** (also the title link's `::after` hit-area radius)           |
| initials tile        | **12 px**, 44 × 44                                                    |
| save button          | **12 px**, 40 × 40, `1px solid #e3e8e4`                              |
| skill chip           | **8 px**, `1px solid #e3e8e4`, padding `4px 10px`                    |
| work-mode pill       | **999 px**, padding `2px 9px`                                         |
| card border          | `1px solid #e3e8e4`                                                   |
| footer rule          | `1px solid #e3e8e4`, `padding-top: 14px`, `margin-top: auto`          |
| transitions          | card `border-color .2s, box-shadow .2s`; save `background-color .2s, border-color .2s, transform .15s`; glyph `fill .2s` |
| press                | `.cl-card13__save:active { transform: scale(.92) }`                   |
| reduced motion       | one media query kills all three transitions and the press scale       |
| shadows              | **one**, hover only: `0 14px 30px -22px rgba(19,32,26,.5)` — the resting card has **no** shadow |

### Layout — one 1040 px content box, `clamp` padding, a two-track grid

`.cl-card13-demo`: `max-width: 1040px; margin: 0 auto; padding: clamp(32px, 6vw, 72px) 16px; color:
#13201a`. The browser's `main` default is `box-sizing: content-box` here, so the **box** measures
**1072 px** at 1440 (1040 + 2 × 16) and sits at **x 184**; the **grid** is the 1040 px content and sits
at **x 200**. `padding-block` is `6vw` clamped: **72** at 1440, **61.44** at 1,024, **46.08** at 768,
**32** at ≤533.

Head → grid spacing is the head's own `margin-bottom: 24px`.

### Component geometry (1440 px; card 1 at x 200, y 159.59, 512 × 253.84)

| part                     | measurement                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| `main` box               | 1072 × 792.28 at x **184**, content **1040** at x **200**                     |
| head                     | 1040 × **63.59** at y **72**; `h1` 36 / 39.6 / 800, **370.17 × 39.59**; sub 15 px at y **117.59** (6 px under the `h1`), 18 px line box; saved line **114 × 18** at x **1126** |
| grid                     | 1040 wide at y **159.59**; tracks **512 / 512**, `gap: 16px`, rows **253.844 × 2** |
| card                     | **512 × 253.84**, `padding: 20px 20px 18px`, radius 18, `1px solid #e3e8e4`   |
| initials tile            | **44 × 44** at x **221** (card x + 21), y **180.59**; 16/800 white on the per-card colour |
| company block            | name at 14.5/700, posting age 13 px muted 1.3 line-height, `gap: 12px` from the tile, `flex: 1` |
| save button              | **40 × 40** at x **651** (card right edge − 21 − 40), y **182.59**; glyph **19 × 19**, `stroke-width: 2`, `fill: none` |
| card title               | **470 × 24.69** at (221, 240.59); `margin: 16px 0 8px`                        |
| location row             | 14.5 px muted, `gap: 10px`, pin glyph **16 × 16** stroke 2, 4 px between glyph and city |
| work-mode pill           | **100 × 22.13** for "Remote in EU" at x **357**; `2px 9px`, radius 999, 12.5/700 |
| chips                    | **120 / 58 / 79** wide (Design systems · Figma · B2B SaaS), `28.84` tall, `gap: 6px`, `margin: 14px 0 18px` |
| footer                   | **470 × 38.19** at y **356.25**; rule on top, 14 px padding, `margin-top: auto` |
| status line              | 1040 × **21** (`min-height: 1.5em`) at y **699.28** — `margin: 16px 0 0`, 14/600 `#3f6212` |

The card's bottom edge is arithmetic, and the sum includes the head row and the padding:

```
1 (border-top) + 20 (padding-top) + 44 (initials tile, the row's tallest child)
+ 16 + 24.69 (title, 19 × 1.3) + 8
+ 22.13 (location row — the pill is taller than its text)
+ 14 + 28.84 (chip row) + 18
+ 38.19 (footer: 14 padding-top + 24.19 content, the 16 px strong sets the line box)
+ 18 (padding-bottom) + 1 (border-bottom)
= 253.84
```

### Responsive matrix (measured; card heights are content-driven)

| viewport | cols | track |  card heights (row by row)      | `h1` px  | pad-block | head height | content height |
| -------: | ---: | ----: | ------------------------------- | -------: | --------: | ----------: | ---------: |
|    1,440 |    2 |   512 | 253.84 ×2 rows                  |       36 |        72 |       63.59 |     792.28 |
|    1,200 |    2 |   512 | 253.84 ×2                       |       36 |        72 |       63.59 |     792.28 |
|    1,100 |    2 |   512 | 253.84 ×2                       |       36 |        66 |       63.59 |     792.28 |
|    1,024 |    2 |   488 | 253.84 ×2                       |   34.816 |     61.44 |       62.28 |     792.28 |
|      900 |    2 |   426 | 253.84 ×2                       |     30.6 |        54 |       57.64 |     792.28 |
|      850 |    2 |   401 | 253.84 ×2                       |     28.9 |        51 |        55.8 |     792.28 |
|      820 |    2 |   386 | 253.84 ×2                       |    27.88 |      49.2 |       54.66 |     792.28 |
|      810 |    2 |   381 | 253.84 ×2                       |    27.54 |      48.6 |       54.30 |     792.28 |
|      808 |    2 |   380 | 253.84 ×2 (**the floor**)       |   27.472 |     48.48 |       54.20 |     792.28 |
|      807 |    1 |   775 | 253.84 ×4                       |   27.438 |     48.42 |       54.17 |   1,275.00 |
|      800 |    1 |   768 | 253.84 ×4                       |     27.2 |        48 |       53.92 |   1,274.00 |
|      768 |    1 |   736 | 253.84 ×4                       |   26.112 |     46.08 |       52.72 |   1,269.00 |
|      700 |    1 |   668 | 253.84 ×4                       |       26 |        42 |       52.59 |   1,261.00 |
|      520 |    1 |   488 | 253.84 ×4                       |       26 |        32 |       52.59 |   1,241.00 |
|      430 |    1 |   398 | 253.84 ×4                       |       26 |        32 |       52.59 |   1,241.00 |
|      425 |    1 |   393 | 253.84 ×4                       |       26 |        32 |       52.59 |   1,241.00 |
|      424 |    1 |   392 | 253.84 ×4                       |       26 |        32 |   **84.59** |   1,273.00 |
|      390 |    1 |   358 | 253.84 ×4                       |       26 |        32 |       84.59 |   1,273.00 |
|      360 |    1 |   328 | 253.84 / **288.69** / 253.84 / **288.69** | 26 |  32 |       84.59 |   1,343.00 |
|      320 |    1 |   288 | **288.69 / 313.38 / 313.38 / 288.69** |  26 |   32 |       84.59 |   1,462.00 |

Content height equals the document height once it exceeds the viewport; above **808** the document reports
the 900 px viewport instead, which is why the readings table records **792.28** of content at 1,440.

Two content facts fall out of the matrix and must survive the port:

- **At 360 the 4-chip cards grow.** Cards 2 and 4 carry four chips; at a 328 px track the row wraps to
  two lines and those cards become **288.69** against **253.84** — a 34.84 px difference that shows as
  uneven heights *within one row* only when the grid puts them there (at 360 they are alone in their
  rows, so the difference is visible as staggered cards).
- **At 320 two titles wrap.** "Product Manager, Patient App" and "UX Writer (Contract, 6 months)" go to
  two lines (`49.38` px), which with the wrapped chips gives **313.38** against **288.69**.

### Contrast (WCAG 2.1, computed from the measured hex values)

| pair                             | ratio     | verdict                                   |
| -------------------------------- | --------: | ----------------------------------------- |
| ink `#13201a` on white           | **16.81** | AA/AAA                                    |
| ink on ground `#f4f6f3`          | **15.47** | AA/AAA                                    |
| muted `#4b5a52` on white         |  **7.28** | AA/AAA                                    |
| muted on ground                 |  **6.70** | AA/AAA                                    |
| chip text `#2c3a33` on white     | **11.93** | AA/AAA                                    |
| lime pill `#1a2e05` on `#d9f99d` | **12.52** | AA/AAA                                    |
| hybrid pill `#0c4a6e` on `#e0f2fe` | **8.24** | AA/AAA                                   |
| office pill `#3f3f3a` on `#f1f1ee` | **9.36** | AA/AAA                                   |
| status `#3f6212` on ground       |  **6.51** | AA/AAA                                    |
| saved glyph `#d9f99d` on `#13201a` | **14.40** | AA/AAA                                  |
| **focus ring `#65a30d` on white** |  **3.09** | passes 3:1 by 0.09 — **fragile**          |
| **focus ring `#65a30d` on ground** | **2.84** | **fails 3:1** — the card-edge ring sits on the ground |
| saved border `#a3c76a` on ground |      1.77 | decoration only (the ground tint carries the state) |
| hover border `#b8c6bd` on ground |      1.63 | decoration only                           |

Every text pair is comfortably AA. The **focus ring is the one failure** and it is inherited: the
title's ring is drawn on the link's `::after`, which is inset to the card's edge and therefore paints on
the **ground**, where `#65a30d` measures **2.84:1**. Fix it (see defect 1) instead of copying it.

## Behaviour — the save toggle (the only script on the page)

`snippet.js` is **39 lines** with one job. On `DOMContentLoaded` (or immediately if the document is
already parsed) it looks up every `.cl-card13__save`, resolves the counter node
(`[data-cl-card13-count]`) and the status node (`[data-cl-card13-status]`), recounts, and wires a click
listener per button.

| step              | what happens                                                                                        |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| initial render    | the reference's card 2 ships `aria-pressed="true"` and the counter ships **`1`** — the demo opens with one job already shortlisted |
| click a toggle    | `pressed = current !== 'true'` → `aria-pressed` set to `'true'` / `'false'`                          |
| recount           | `count.textContent = document.querySelectorAll('.cl-card13__save[aria-pressed="true"]').length`      |
| announce          | `status.textContent = "${title} saved to your list."` / `"${title} removed from your list."`, where `title` is the card's `h2` text |
| card presentation | CSS only: `.cl-card13:has(.cl-card13__save[aria-pressed="true"])` → `border-color: #a3c76a; background: #fbfdf6`; the button itself → `background: #13201a; color: #d9f99d; border-color: #13201a`, glyph `fill: currentColor` |

Measured with Playwright: starting state `counter "1"`, pressed `[false, true, false, false]`, status
`""`; click card 3 → `counter "2"`, status `"UX Writer (Contract, 6 months) saved to your list."`,
pressed `[false, true, true, false]`. Card 2's saved presentation measures border `rgb(163,199,106)`,
ground `rgb(251,253,246)`, button `rgb(19,32,26)` with glyph `rgb(217,249,157)`.

**Focus order** is card 1 title → card 1 save → card 2 title → card 2 save → … → card 4 save, then the
status line is not focusable. The save button's ring is `3px solid #65a30d` at `2px` offset; the title
link moves its ring to the `::after` (radius 18) so the ring traces the card's outline, not the text.

## Requirements

### Requirement 1: Page shell and sage stage

The app SHALL render a single `<main>` on the sage ground `#f4f6f3`, `max-width: 1040px` (content box),
`margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`, ink `#13201a`, containing a `<header>`, the
card grid and the status line — and SHALL NOT force a viewport height.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the app has rendered
- **THEN** the content SHALL measure **792.28 px** tall (the document reports **900** only because the
  viewport is taller than the content) — there is **no** `min-height: 100vh` in the reference
- **AND** the `main` box SHALL be **1072 px** wide at **x 184** with its **1040 px** content at **x 200**
- **AND** the document SHALL be **1,273** at 390, **1,343** at 360 and **1,462** at 320

#### Scenario: No horizontal scroll at any width

- **GIVEN** the page at 320 / 360 / 390 / 424 / 425 / 520 / 700 / 768 / 800 / 807 / 808 / 810 / 900 /
  1,024 / 1,440
- **WHEN** `window.scrollTo(300, 0)` runs
- **THEN** `scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** at 320, where the grid box is **288** px, the track SHALL be exactly **288** px because the
  floor is `min(100%, 380px)` — a bare `minmax(380px, 1fr)` overflows by **92 px** here

### Requirement 2: The head

The app SHALL render a `<header>` of three parts — an `h1` at `clamp(26px, 3.4vw, 36px)` / **800** /
`letter-spacing: -.02em` / `line-height: 1.1`, a **15 px** `#4b5a52` sub-line **6 px** below it, and a
**15 px / 500** right-aligned "Saved jobs:" line whose count is a `<strong>` — inside
`display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 14px`,
with `margin-bottom: 24px`.

#### Scenario: The title scales on the clamp and never wraps

- **GIVEN** a 1440 px viewport
- **WHEN** the `h1` is measured
- **THEN** it SHALL be **36 px in a 39.6 px line box**, **370.17 px** wide, on **one line**
- **AND** at 1,024 it SHALL be **34.816 / 38.2976**, at 768 **26.112 / 28.7232**, and at 390 and 320 it
  SHALL sit on the clamp floor at **26 / 28.6**
- **AND** it SHALL remain **one line at every width down to 320**

#### Scenario: The saved line is bottom-aligned with the sub-line, until it wraps

- **GIVEN** a 425 px viewport
- **WHEN** the head is measured
- **THEN** the head SHALL be **52.59 px** tall and the saved line SHALL sit at **x 295, y 66.59**
  (right edge flush with the grid's right edge, bottoms aligned with the sub-line)
- **AND** at **424** the head SHALL be **84.59 px** tall and the saved line SHALL drop to **x 16,
  y 98.59** — left-aligned, one `gap` below the left group
- **AND** at 1,440 the saved line SHALL be **114 × 18** at **x 1126, y 117.59**
- **AND** the line SHALL read **"Saved jobs: 1"** on first render, with the **`1`** bolded and the glyph
  (18 × 18, `fill: #13201a`) before the words

### Requirement 3: The grid is arithmetic, not breakpoints

The card grid SHALL be `display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px),
1fr)); gap: 16px`, with **no** column breakpoint, media query or JS measurement, giving **2 / 1**
columns at the arithmetic threshold **808**.

#### Scenario: Column counts at the exact threshold

- **GIVEN** the grid inside its 16 px page padding
- **WHEN** the viewport is swept one pixel across 808
- **THEN** there SHALL be **2 columns at 808** measuring exactly **380.00 / 380.00**, and **1 column at
  807** measuring **775.00**
- **AND** at 1,440 the tracks SHALL measure **512 / 512** and the grid **1040** at x **200**

#### Scenario: Rows stretch, cards do not

- **GIVEN** the four cards at 1,440
- **WHEN** they are measured
- **THEN** all four SHALL be **253.84 px** and the grid SHALL report two rows of **253.844**
- **AND** no card SHALL carry a height utility — the equality comes from grid stretch, and at 360 the
  heights SHALL diverge to **253.84 / 288.69 / 253.84 / 288.69**

### Requirement 4: The job card shell

Each card SHALL be an `<article>` with a white surface, `border: 1px solid #e3e8e4`,
`border-radius: 18px`, `padding: 20px 20px 18px`, base type **14.5 px / 1.45**, ink `#13201a`, and
`display: flex; flex-direction: column` — with **no resting shadow** and **no clipping**.

#### Scenario: Hover is a border and a shadow, nothing else

- **GIVEN** the card at rest
- **WHEN** a pointer enters it
- **THEN** the border SHALL become `#b8c6bd` and the shadow
  `0 14px 30px -22px rgba(19,32,26,.5)` over `.2s ease`
- **AND** nothing SHALL move, scale or change colour — no lift on the card

#### Scenario: The saved state repaints the whole card

- **GIVEN** a card whose toggle is `aria-pressed="true"`
- **WHEN** the card is inspected
- **THEN** its border SHALL be `#a3c76a` and its ground `#fbfdf6`
- **AND** the tint SHALL be applied by React state (a conditional class), **not** by CSS `:has()` — the
  repo's jsdom test environment does not evaluate `:has()` for matching, so a `:has()`-only port would
  pass a browser check and fail its own test suite
- **AND** the resting white and the saved tint SHALL both keep the `1px` border box, so no card changes
  size when toggled

### Requirement 5: The company head row

The card SHALL open with a row of `gap: 12px`, `align-items: center`, holding a **44 × 44** initials
tile (radius **12**, `font-size: 16px`, weight **800**, `letter-spacing: -.02em`, white on
`var(--cl-card13-logo)`), a flexible company block (`flex: 1; min-width: 0`, name at 14.5/700 and
posting age at 13 px `#4b5a52` in a `1.3` line-height), and a **40 × 40** save button (radius 12,
`1px solid #e3e8e4`) at the card's inner right edge.

#### Scenario: The tile is two capitals and nothing more

- **GIVEN** the four cards at 1,440
- **WHEN** the tiles are measured
- **THEN** each SHALL be **44 × 44** at **x 221** (card x + 20 padding + 1 border), radius **12**
- **AND** each SHALL show exactly **two characters** — `Td`, `Nv`, `Fs`, `Gp` — in **16/800 white**,
  with `aria-hidden="true"` because the company name is in the adjacent text
- **AND** the backgrounds SHALL be **`#0e7490`, `#7c3aed`, `#c2410c`, `#15803d`** — per card, inline, not
  a palette loop

#### Scenario: The save button is square and icon-only

- **GIVEN** the save button
- **WHEN** it is measured
- **THEN** it SHALL be **40 × 40** at **x 651** (card right − 1 border − 20 padding − 40), radius **12**,
  with a **19 × 19** bookmark glyph (`stroke-width: 2`, `fill: none`, `stroke-linejoin: round`)
- **AND** it SHALL carry `aria-label="Save <title> at <company>"` and `aria-pressed`
- **AND** its `aria-label` SHALL change when pressed (see defect 2) — the reference leaves "Save …"
  in place while the card shows the job as saved

### Requirement 6: The role title and the card-wide hit area

The card SHALL render the role as an `h2` at **19 px / 700 / `−.01em` / `1.3`**, `margin: 16px 0 8px`,
containing an `<a>` whose text is the role, coloured `inherit` with no underline — and the anchor's
`::after` SHALL be `position: absolute; inset: 0; border-radius: 18px` so the **whole card** is the link
target without nesting the save button inside the anchor.

#### Scenario: One anchor, one hit area, no nested controls

- **GIVEN** a card
- **WHEN** its markup is inspected
- **THEN** there SHALL be **exactly one** `<a>` per card, wrapping only the title text
- **AND** the link SHALL paint its hit area on a `::after` overlay at `z-index: 1`
- **AND** the save button SHALL sit at `z-index: 2` so it stays clickable above that overlay
- **AND** hovering the title SHALL underline it (`2px` thick, `3px` offset) while the card itself stays
  put

#### Scenario: No placeholder hrefs in the port

- **GIVEN** the reference's four `href="#"`
- **WHEN** the app is built
- **THEN** the title SHALL NOT ship `href="#"` — use the job's own path (e.g. `/jobs/senior-product-designer`)
  or a `<button>`-styled link, and register no navigation
- **AND** `document.querySelectorAll('a[href="#"]').length` SHALL be **0** in the tests

### Requirement 7: The location row and the three work-mode pills

Under the title the card SHALL render one flex row (`gap: 10px`, `flex-wrap: wrap`, 14.5 px,
`#4b5a52`) whose first item is a pin glyph (**16 × 16**, stroke 2) with **4 px** to the city, and whose
second item is the work-mode pill: `2px 9px`, radius **999**, **12.5 px / 700**.

#### Scenario: Three pill variants, three colour pairs

- **GIVEN** the four cards
- **WHEN** the pills are read
- **THEN** "Remote in EU" and "Fully remote" SHALL be `#1a2e05` on `#d9f99d`
- **AND** "Hybrid · 2 days" SHALL be `#0c4a6e` on `#e0f2fe`
- **AND** "On-site" SHALL be `#3f3f3a` on `#f1f1ee`
- **AND** the first pill SHALL measure **100 × 22.13** at x **357** (city ends, `gap: 10px`)

#### Scenario: The row never wraps at a usable width

- **GIVEN** the location row at 320
- **WHEN** it is measured
- **THEN** it SHALL stay on **one line** on all four cards — the city is short by design, so the pill
  sits beside it even at a 288 px track
- **AND** the pin glyph SHALL remain `16 × 16` at every width (it is an em-free fixed size)

### Requirement 8: The skill chips

Each card SHALL render its skills as a `<ul>` with `aria-label="Skills"`, `list-style: none`,
`display: flex; flex-wrap: wrap; gap: 6px`, `margin: 14px 0 18px`, whose `<li>`s are
`4px 10px`, radius **8**, `1px solid #e3e8e4`, `13px / 500`, `#2c3a33`.

#### Scenario: Chip counts are per card, and they wrap at 360

- **GIVEN** the four cards
- **WHEN** the chips are measured at 1,440
- **THEN** cards SHALL carry **3 / 4 / 3 / 3** chips, each **28.84** px tall, and card 1's widths SHALL be
  **120 / 58 / 79** on **one** row
- **AND** at 360 the 4-chip cards SHALL wrap to **two** rows (height **288.69**) while the 3-chip cards
  stay on one (**253.84**)
- **AND** at 320 **all four** rows SHALL wrap to two lines

#### Scenario: The chips are not buttons

- **GIVEN** a chip
- **WHEN** it is inspected
- **THEN** it SHALL be plain text in an `<li>` — no border-colour hover, no cursor change, no tab stop,
  **0** interactive semantics
- **AND** the count of focusable elements on the page SHALL be **8** (4 title links + 4 save buttons)

### Requirement 9: The footer

The card's last row SHALL be `margin-top: auto; padding-top: 14px; border-top: 1px solid #e3e8e4`,
`display: flex; justify-content: space-between; align-items: center; gap: 10px`, holding a
`<p>` whose `<strong>` is the range at **16/700 ink** followed by a muted period suffix, and the
contract type at **13/600 `#4b5a52`** at the right.

#### Scenario: The footer pins to the card's bottom edge

- **GIVEN** the four cards at 1,440
- **WHEN** the footers are measured
- **THEN** every footer SHALL sit at y **356.25** (row 1) and **626.09** (row 2) with the card's
    18 px bottom padding below it
- **AND** the `margin-top: auto` SHALL be what absorbs the spare height, so the footer rule lines up
  across a row even when a title wraps (at 320 the wrapped cards' footers move down **24.69** and the
  rule still traces the longest card)

#### Scenario: The three money shapes

- **GIVEN** the four footers
- **WHEN** their text is read
- **THEN** card 1 SHALL read **"€78k – €95k / year"**, card 2 **"£70k – £85k / year"**, card 4
  **"€48k – €56k / year"** — figure first, period after, with an **en dash** (U+2013) and spaces
- **AND** card 3 SHALL read **"$65 – $80 / hour"** on a **Contract** card — the suffix changes with the
  contract type, so it is data, not a hard-coded "/ year"
- **AND** the currency symbols SHALL be the real characters (`€`, `£`, `$`), not `&euro;`-style entities
  rendered into the DOM as text

### Requirement 10: The save toggle behaviour

The app SHALL hold the saved set in React state, toggle one job per click, and derive both the head
counter and the status sentence from that state — with **no** DOM queries, no `document.querySelector`
for state, and no duplicated source of truth.

#### Scenario: Toggle on, recount, announce

- **GIVEN** the app has rendered with card 2 saved
- **WHEN** the user clicks card 3's bookmark
- **THEN** the head SHALL read **"Saved jobs: 2"**
- **AND** the status line SHALL read **"UX Writer (Contract, 6 months) saved to your list."**
- **AND** card 3's button SHALL have `aria-pressed="true"`, its card SHALL switch to the
  `#fbfdf6` / `#a3c76a` presentation, and card 1 and card 4 SHALL be untouched

#### Scenario: Toggle off restores the resting card

- **GIVEN** card 2 is saved
- **WHEN** the user clicks its bookmark again
- **THEN** the head SHALL read **"Saved jobs: 0"**
- **AND** the status SHALL read **"Product Manager, Patient App removed from your list."**
- **AND** card 2 SHALL be white with a `#e3e8e4` border and `aria-pressed="false"`

#### Scenario: The status line exists before the first click

- **GIVEN** a fresh render
- **WHEN** the status element is measured
- **THEN** it SHALL exist as a `role="status"` element with `min-height: 1.5em` (**21** px), empty text,
  `margin-top: 16px`, 14/600 `#3f6212`, spanning the grid's full width
- **AND** it SHALL be **one** element for the whole grid (not one per card) — a second click replaces the
  sentence rather than stacking a new one

### Requirement 11: Semantics, focus and motion preference

The page SHALL expose **one** `h1`, **four** `h2`, **four** `<article>`s, **four** links and **four**
buttons, with the initials tile and every glyph `aria-hidden="true"`, and SHALL honour
`prefers-reduced-motion`.

#### Scenario: Heading and control census

- **GIVEN** the rendered page
- **WHEN** the DOM is counted
- **THEN** it SHALL contain **1 `h1`**, **4 `h2`**, **0 `h3`**, **4 `<button>`**, **4 `<a>`**, **0**
  `<form>`, **0** `<input>`, **0** `<img>`, **13 `<li>`** and **9 `<svg>`** (1 head glyph, 4 bookmarks,
  4 pins)
- **AND** `document.documentElement.lang` SHALL be **`en`**

#### Scenario: The focus ring is fixed, not copied

- **GIVEN** a keyboard user tabbing from the top
- **WHEN** the first control receives focus
- **THEN** the ring SHALL be a **3 px** outline at **2 px** offset in a colour measuring **≥ 3:1 against
  both `#ffffff` and `#f4f6f3`** — the reference's `#65a30d` measures **3.09:1** on white but **2.84:1**
  on the ground, so use a darker lime such as **`#3f6212`** (**7.08:1** on white, **6.51:1** on ground)
- **AND** the title link's ring SHALL trace the card's outline via its `::after` (radius **18**), not the
  text baseline
- **AND** the save button's pressed state SHALL NOT rely on colour alone — `aria-pressed` plus the filled
  glyph carry it

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** a card is hovered or a bookmark pressed
- **THEN** all three transitions SHALL be `none` and the press SHALL NOT scale
- **AND** no reveal, parallax, count-up or scroll animation SHALL be added by the port

## Screenshot analysis (catalogue image, `card-13.jpg`, AVIF 1200 × 972)

The screenshot is **a browser-window mockup**: macOS traffic lights and a `preview.colorlib.com` address
pill over a light grey surround, with the page rendered inside the framed area on a near-white canvas.
**Do not adopt the frame, the surround or the traffic lights** — they are the catalogue's presentation,
not the design.

Inside the frame: the head sits top-left — a heavy ink `h1` at roughly twice the body size, a small grey
sub-line under it, and the **"Saved jobs: 1"** cluster pushed to the far right, level with the sub-line.
Four cards then fill two rows of two, and **the second card is visibly different**: its ground is a pale
lime-cream instead of white, its border a soft olive, and its bookmark is a **solid dark square with a
lime glyph** while the other three are **white squares with an outlined dark glyph**. That contrast is
the design's whole demonstrative payload — it shows the saved state without a caption.

Colour reading top to bottom: the ground reads as a **grey-green paper**, never white; the cards read as
**flat white with a hairline**, no drop shadows at rest; the four initials tiles are the only saturated
colour on the page (teal, violet, burnt orange, forest green) and they are **small** — 44 px against a
512 px card, about 8.6 % of its width; the salary figures are the only **bold ink** inside the card body,
which is what makes them findable at a glance; and the contract type at the right edge is the quietest
text in the composition, deliberately.

Three details the screenshot shows that the CSS confirms and a naive port loses:

1. **The chips are outlined, not filled.** They read as thin capsules with a 1 px border — filling them
   with a tint would read as tags on a marketplace card, not as skills.
2. **The footer rule is full-bleed inside the padding**, running the card's inner width, so it reads as a
   receipt tear rather than a divider between two blocks of text.
3. **The saved card's dark bookmark is bigger-looking than the outlined ones**, even though both are
   40 × 40: a filled shape at 19 px reads heavier than a stroked one at the same size. Do not compensate
   by resizing the button.

## Known reference defects (do not copy)

1. **The focus ring fails 3:1 on the ground.** `#65a30d` is **3.09:1** on white and **2.84:1** on
   `#f4f6f3`; the title link's ring is painted on the card's outline, which sits on the ground. Ship
   **`#3f6212`** (or any lime that clears 3:1 on both surfaces) and keep the 3 px / 2 px geometry.
2. **The button's accessible name never changes.** It is `aria-label="Save Senior Product Designer at
   Tideline"` while pressed — a screen-reader user hears "Save …" for an action that would *remove*. Flip
   the label with the state (`Remove <title> from saved jobs`) in addition to `aria-pressed`.
3. **The reference hard-codes `href="#"`** on all four titles, so every click jumps to the top of the
   document. Ship a real path or a non-anchor, and assert `a[href="#"]` count is 0.
4. **`--cl-card13-lime` is declared but the pill variants are three literal hex pairs**, so the "signal"
   colour is not actually governed by the custom property. In the port, the three pill variants SHALL be
   named tokens (`remote`, `hybrid`, `office`), not inline values.
5. **The saved state depends on CSS `:has()`.** Faithful in a browser, invisible to jsdom — a port that
   keeps `:has()` passes a screenshot review and fails its own tests. Drive the tint from React state.
6. **The landing card is pre-saved in the markup** (`aria-pressed="true"` on card 2) while the counter is
   also hand-written as `1`. Two sources of truth that happen to agree; in the port the initial saved set
   is data and the counter is derived.
7. **`.cl-icon` is dead.** The stylesheet declares `.cl-icon { height: 1em; width: auto; fill: currentColor }`
   and the markup never uses it (5th consecutive card in the family with this leftover). Do not port it.
8. **Posting age has no machine-readable form** — "Posted 2 days ago" is a `<span>`. Keep the copy, but
   wrap it in `<time dateTime>` if the implementer wants the semantics; the visible text must not change.
9. **The head's saved line is 15 px / 500 while the sub-line is 15 px / 400** on the same baseline. That
   weight difference is intentional (it is a counter, not a caption) and must not be flattened to match.

## Adapting to the repo (deltas the implementer owns)

| reference                                | in `apps/shortlist`                                                        |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| `.cl-card13-demo` / `.cl-card13` classes | Tailwind utilities; no `cl-` class names anywhere                           |
| inline `--cl-card13-logo`                | `logoClass` per job (`bg-teal-700`, `bg-violet-600`, `bg-orange-700`, `bg-green-700` are the measured `#0e7490` / `#7c3aed` / `#c2410c` / `#15803d` neighbourhood — prefer exact hex tokens) |
| inline SVG glyphs                        | `Bookmark` and `MapPin` from `lucide-react`; keep 18 / 19 / 16 px sizes and `strokeWidth={2}` |
| `:has()` saved tint                      | conditional `cn()` classes from React state (see defect 5)                  |
| `Figtree` via 10 `@font-face`            | one Google Fonts `<link>`: `family=Figtree:wght@400..800&display=swap` (verified 200, variable face) |
| no images at all                         | **no placeholder photography** — this card carries text and glyphs only      |
| no footer                                | one Component Dock attribution line (repo rule); it may sit under the status line in the same content column |
| `role="status"` paragraph                | same, as a React-rendered `role="status"` element                           |

`src/index.css` `@theme` tokens to declare (exact measured values):

```css
--color-ground:   #f4f6f3;
--color-ink:      #13201a;
--color-muted:    #4b5a52;
--color-line:     #e3e8e4;
--color-lime:     #d9f99d;
--color-lime-ink: #1a2e05;
--color-saved:    #fbfdf6;
--color-saved-line: #a3c76a;
--color-hybrid:   #e0f2fe;
--color-hybrid-ink: #0c4a6e;
--color-office:   #f1f1ee;
--color-office-ink: #3f3f3a;
--color-focus:    #3f6212;  /* fixed ring, see defect 1 */
```

Data shape the tests should pin (one object per job): `id`, `company`, `initials`, `logoColor`,
`postedLabel`, `title`, `href`, `location`, `mode: { label, variant: 'remote' | 'hybrid' | 'office' }`,
`skills: string[]`, `pay: { amount: string, suffix: string }`, `contract`, `initiallySaved: boolean`.

**Suggested component split** (mirrors other card apps): `App.tsx` (state + composition),
`components/JobHead.tsx`, `components/JobGrid.tsx`, `components/JobCard.tsx`,
`components/SaveButton.tsx`, `components/StatusLine.tsx`, `data.ts`.

**Coverage notes.** jsdom has no `IntersectionObserver` need here and no animation — the full surface is
reachable: a test clicks each toggle, asserts the counter text, the status sentence, `aria-pressed`, the
card's conditional classes, and the pressed label change (defect 2). Test the `id` uniqueness of any
`aria-describedby` you add, and assert the page renders no `a[href="#"]`.

## Verification checklist

- [ ] `apps/shortlist` exists, package `@free-react-templates/shortlist`, `public/CNAME` =
      `shortlist.free.componentdock.com`, `"homepage"` = `https://shortlist.free.componentdock.com`
- [ ] `grep -ri colorlib apps/shortlist` and `grep -ri 'card-13\|Card V13' apps/shortlist` → **no
      matches**; no `cl-card13` class names anywhere
- [ ] page: `#f4f6f3` ground, `max-width: 1040px` content box (outer **1072** at x **184**), padding
      **72 / 16** at 1,440 and **32 / 16** at 390; content height **792.28**; **no** `min-height: 100vh`
- [ ] head: `h1` `clamp(26px,3.4vw,36px)` / 800 / `−.02em` / 1.1 → **36 / 39.6** at 1,440,
      **34.816 / 38.2976** at 1,024, **26 / 28.6** at 390 and 320, **one line** everywhere; sub-line
      15 px `#4b5a52` **6 px** under the `h1`; saved line 15/500, **114 × 18**, x **1126** at 1,440,
      x **295** at 425, wrapping to x **16** at **424**; head `margin-bottom: 24px`
- [ ] grid: `repeat(auto-fit, minmax(min(100%, 380px), 1fr))`, `gap: 16px`; **2 columns at 808** with
      tracks exactly **380.00**, **1 at 807** with **775.00**; **512 / 512** at 1,440; rows **253.844**
- [ ] cards: white, `1px solid #e3e8e4`, radius **18**, `padding: 20px 20px 18px`, base **14.5 / 1.45**,
      **no** resting shadow; hover → border `#b8c6bd` + `0 14px 30px -22px rgba(19,32,26,.5)`; saved →
      `#fbfdf6` / `#a3c76a` via state, not `:has()`
- [ ] head row: tile **44 × 44** radius 12, 16/800, per-card `#0e7490` / `#7c3aed` / `#c2410c` /
      `#15803d`, initials `Td` / `Nv` / `Fs` / `Gp`, `aria-hidden`; name 14.5/700 + age 13 px muted;
      save button **40 × 40** radius 12 at x **651** with a **19** px bookmark, `aria-label` +
      `aria-pressed`, label flips on press
- [ ] title: `h2` **19 / 700 / −.01em / 1.3**, `margin: 16px 0 8px`; one `<a>` per card, hit area on
      `::after` (inset 0, radius 18, z 1), button at z 2; **0** `href="#"`
- [ ] location row: 14.5 px muted, `gap: 10px`, pin **16 × 16** stroke 2 with 4 px to the city, never
      wraps at 320; pills `2px 9px` radius 999 at 12.5/700 — lime `#1a2e05`/`#d9f99d` (100 × 22.13 at
      x 357), hybrid `#0c4a6e`/`#e0f2fe`, office `#3f3f3a`/`#f1f1ee`
- [ ] chips: `<ul aria-label="Skills">`, `gap: 6px`, `margin: 14px 0 18px`; `<li>` `4px 10px`, radius 8,
      `1px solid #e3e8e4`, 13/500 `#2c3a33`, **28.84** tall; counts 3 / 4 / 3 / 3; **3-row wraps** at
      360 for the 4-chip cards and **all four** at 320; **0** tab stops on chips
- [ ] footer: `margin-top: auto`, `padding-top: 14px`, `border-top: 1px solid #e3e8e4`,
      `justify-content: space-between`; footer y **356.25** / **626.09** at 1,440; `<strong>` **16/700
      ink**, suffix 14.5 muted, contract 13/600 muted; copy **"€78k – €95k / year"**, **"£70k – £85k /
      year"**, **"$65 – $80 / hour"**, **"€48k – €56k / year"** with U+2013 and real currency symbols
- [ ] toggle: card 2 saved on first render, counter **1**; click card 3 → counter **2**, status
      `"UX Writer (Contract, 6 months) saved to your list."`; click again → counter **0** and
      `"… removed from your list."`; saves are independent per card
- [ ] status: **one** `role="status"` element under the grid, `min-height: 1.5em` (**21** px),
      `margin-top: 16px`, 14/600 `#3f6212` (**6.51:1**)
- [ ] focus: **3 px** ring at **2 px** offset in **`#3f6212`** (≥ 3:1 on white *and* on `#f4f6f3`); title
      ring traces the card outline; **8** focusable elements in card-then-button order
- [ ] `prefers-reduced-motion: reduce` → no transitions, no press scale; no animation added
- [ ] census: **1 `h1`**, **4 `h2`**, **4 `<article>`**, **4 buttons**, **4 links**, **0** forms,
      **0** images, **13 `<li>`**, **9 `<svg>` glyphs**, `lang="en"`
- [ ] no horizontal scroll: `scrollTo(300,0) → scrollX 0` at 320 / 360 / 390 / 424 / 425 / 520 / 700 /
      768 / 800 / 807 / 808 / 810 / 900 / 1,024 / 1,440
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app shortlist` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-shortlist --type spec` is valid
