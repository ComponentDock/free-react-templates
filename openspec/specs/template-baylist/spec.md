# Template: Baylist (Property cards — three for-sale listing cards with a 3:2 photo, a status badge, a photo count, a save heart, price / address / area and a hairline beds-baths-sqft row)

## Purpose

A **single-screen property band**: one gold eyebrow and one heavy address-line headline over a
**three-across grid of listing cards** on a warm off-white ground (`#f7f5f1`). Each card is a **white,
20 px-radius panel with a two-layer shadow** that reads top-to-bottom as an estate-agent listing —
a **3:2 photograph** filling the card's top, a **status badge at the top-left** (dark, gold or white
depending on the listing state), a **44 × 44 white circular heart button at the top-right**, a
**translucent photo-count pill at the bottom-right**, then a body of **four stacked facts**: the
**asking price at 26 px / 800**, the **address as the card's only link at 17 px / 700**, a **muted
area line** that sells the location in six words, and a **hairline-topped spec row** of three cells
(**beds**, **baths**, **floor area**) separated by 1 px rules, each opening with a **gold line icon**
— the first two stroked, the third **filled**.

The page's **only behaviour is a save heart per card.** Clicking it flips `aria-pressed`, fills the
heart with `#e11d48`, and plays a **0.4 s pop** (`scale(1) → 1.35 → 1`) that is re-triggered on every
press. There is **no counter, no status line, no form** — unlike its job-board sibling, this design
does not announce anything; the pressed heart *is* the whole feedback. The second card **ships
pressed** (`aria-pressed="true"`, heart already filled), so the three cards demonstrate the three
status colours *and* both heart states on first paint.

- **Source slug:** `card-14`
- **ColorLib page:** https://colorlib.com/wp/template/card-14/ — **HTTP 200, 113,347 B**,
  `<title>` `Card V14 - Free Bootstrap Cards 2026 - Colorlib`, `<meta description>` *"Property cards
  with a photo, status badge, photo count and a heart button to save the home. Free download, no
  jQuery or plugins."*, authoritative description *"Property cards with a photo, status badge, photo
  count and a heart button to save the home. Below are the price, address, area and a row of beds,
  baths and floor-area icons. The favourite button uses `aria-pressed` and a short pop animation."*,
  "Released: September 2026", `datePublished` **2026-09-25T15:33:19+00:00**, and the page claims the
  download is **502 KB** (archive measured **514,165 B** = 502.11 KB ✓). It is the **fourteenth of
  twenty** `card` variants and links its siblings on the page.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-14/ —
  **HTTP 200, 6,311 B**, `<title>` `Card V14 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  script. The slug-only path `theme/card-14/` **404s**; this family lives under the `bootstrap/`
  prefix (the same ladder as `card-01` … `card-13`).
- **Design category:** Card (property / real-estate listings). Fourteenth member of the **`card`
  snippet family** (`card-01` … `card-20`) in the **214 snippet variants** catalogued in
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/baylist`,
  package `@free-react-templates/baylist`, CNAME `baylist.free.componentdock.com`.

**What this design is.** A **listing card**, and the family's **first photographic member**: all three
cards carry a real 800 × 540 photograph, which makes the **3:2 media block the single largest element**
(251.55 px of a 423.11 px card at 1,440 — 59 % of the card's height). Everything under the photo is
text, and the text is ordered exactly as a buyer reads a listing: *how much, where, how far from the
water, and how big*. The card carries **no avatar, no chip, no pill and no button label** — its only
control is the 44 px icon-only heart and its only link is the address.

**Three facts decide whether the recreation reads correctly.**

1. **The heart is a fill, not an outline.** Pressed state is `color: #e11d48` **plus**
   `svg { fill: currentColor }`, so the heart becomes a solid red shape inside the white circle. A
   port that only changes the stroke colour loses the state at a glance — and this card has no
   counter to fall back on.
2. **The spec row is arithmetic, not a fixed grid.** `repeat(3, auto)` + `justify-content:
   space-between` needs **272 px** of body content (71 + 89 + 112) and **wraps all three cells to two
   lines the moment the card is narrower than 312 px**. That is not a media query — it happens across
   the three-column range *and* at the bottom of the single-column range.
3. **The whole card is clickable and the copy is not selectable.** The address anchor paints an
   `::after` overlay at `inset: 0`, `border-radius: 20px`, `z-index: 1`; the heart sits at `z-index: 2`.
   The overlay is what makes hovering anywhere on the card a link target — and it is also why the
   photo-count pill cannot be selected or clicked.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **0** in-progress rows, 2,893 checklist
lines). So this design comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing
that the checklist never recorded. `card-14` is one of the **214 snippet variants in 19 families**;
snippet families are worked **in family order, then variant number**, and the `card` family runs to
**20**.

The family section **`## Bootstrap Cards (20)` already exists on main at line 733** and at this prep's
commit carries **six** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo,
`Card 04` → tierline, `Card 05` → plaudit, `Card 06` → statline (lines 735–740). Cards **07–13** are
prepped and unbuilt (`lodgerow`, `roadbook`, `lexeme`, `coffer`, `showbill`, `coursebook`,
`shortlist`). This design's row goes **directly after the last card row present** when the
implementer ships it:

```markdown
- [x] **Card 14** — [colorlib](https://colorlib.com/wp/template/card-14/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-14.jpg) · [baylist](https://baylist.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns that
batch edit, not this prep run.

**The name.** `baylist` — one lowercase word (a compound of the design's own setting, Coral Bay, and
what it is, a listing). It is in **no** `apps/` folder, **no** spec folder, and `git grep -il baylist
origin/main` returns **nothing at all** (0 hits, checked 2026-10-26). The ColorLib catalogue paths
`colorlib.com/wp/template/baylist/`, `preview.colorlib.com/theme/baylist/` and
`preview.colorlib.com/theme/bootstrap/baylist/` are all **404**. Do **not** reuse the family's taken
names `nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`,
`lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`. Other candidates measured free the same day
(0 repo hits, no `apps/` folder, no spec folder): `homedeck`, `saleboard`, `dwellist`, `kerbline`,
`porchtag` — reserved for later variants.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 6,311 B**, `<title>` "Card V14 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script, `<meta name="robots" content="noindex, nofollow">` |
| preview path      | **`theme/bootstrap/card-14/`** — the directory URL is the page. `theme/card-14/` and `theme/bb/card-14/` are **404**                                   |
| stylesheet        | `css/style.css?v=ecaae6ea`, **10,207 B**, 435 lines, sha256 `c2c1a59c4ba055c498c1c0d46ea47287ed6802be9f10f978707a7cc034983104`                          |
| script            | `js/snippet.js?v=d402d23d`, **924 B**, 34 lines, sha256 `92435a53ae82f49d00e732fc96a4cc09d83ba0d3c140775aad44775e2251e56f`                            |
| archive           | `preview.colorlib.com/downloads/free/card-14.zip`, **200, 514,165 B** (502.11 KB ✓ the page's "502 KB"), **19 entries**: 6 dirs + `index.html` **6,002 B** + `css/style.css` **10,207 B** + `js/snippet.js` **924 B** + `README.md` **1,260 B** + **3 `jpg`** (81,819 / 90,014 / 114,090 B) + **10 `woff2`** |
| live ↔ archive    | CSS **identical sha256** (`c2c1a59c…`), JS **identical sha256** (`92435a53…`); the live HTML is **6,311 B** against the archive's **6,002 B** — the 309-byte delta is the two `?v=` cache-busters, the extra `noindex`/`dns-prefetch` head tags and the `fetchpriority` / `decoding` / `loading` hints on the images → **the preview is the archive's versioned twin** |
| CSS shape         | **65** `{` blocks = **49** style rules + **8** `@font-face` + **1** `@keyframes` (`cl-card14-pop`, 3 steps) + **1** `@media` (`prefers-reduced-motion`, 3 nested rules); **20** distinct `.cl-*` selectors; **0** `@supports`, **0** container queries, **0** column breakpoints |
| classes           | **19** classes in the markup, **all styled**; **1 dead selector** — `.cl-icon` (the family declares it, the markup hits **0** — 6th consecutive card with this leftover) |
| custom properties | **4**, all declared on `.cl-card14`: `--cl-card14-ink` `#0f1c2e`, `--cl-card14-muted` `#4d5869`, `--cl-card14-gold` `#b7791f`, `--cl-card14-heart` `#e11d48` |
| cascade reset     | the sheet opens with `:where(html) :is(…) { all: revert }` — a host-page reset so a Bootstrap parent cannot restyle the snippet; **do not port it**, Tailwind preflight already owns this |
| controls          | **3** `<button>` (one per card), **3** `<a href="#">` (the addresses), **0** forms, **0** inputs, **3** `<img>` → **6** focusable elements, in DOM order *button then link* per card |
| headings          | **1 × `h1`** ("Homes for sale in Coral Bay") and **3 × `h2`** (the addresses); cards are `<article>`                                |
| blocks            | `<main class="cl-card14-demo">` → `<header>` (`p` eyebrow + `h1`) → `<div class="cl-card14-grid">` of 3 `<article>` → *(nothing after the grid)* |
| content height    | **664.3** at 1,440 (the document reports **900** = viewport) · **1,126** at 900 · **1,424** at 390 · **1,380** at 320 · **1,927** at 635 |
| horizontal scroll | **none at ≥306 px** — `scrollWidth === clientWidth` and `scrollTo(400,0) → scrollX 0` at 306 / 310 / 320 / 360 / 390 / 412 / 430 / 480 / 520 / 560 / 635 / 636 / 640 / 768 / 800 / 900 / 950 / 1,024 / 1,200 / 1,440. **Real overflow below that**: `scrollX 1` at 305, `scrollX 6` at 300 (see defect 2) |
| screenshot        | `card-14.jpg` — **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 48,528 B); convert before viewing   |
| fonts             | **Urbanist 400 / 600 / 700 / 800**, `latin` + `latin-ext` → **8** `@font-face` rules, but the archive ships **10** `woff2` (the **500 pair is unreferenced**); only **2 distinct binaries** within each subset (latin 27,812 B × 5, latin-ext 16,464 B × 5, same sha256); no italic, no 900 |

### The two grid thresholds are arithmetic, not breakpoints (measured one pixel apart)

`.cl-card14-grid` is `grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 24px`, with
**no media query**. Inside the 16 px page padding each track needs 290 px and each gap 24 px, so
three tracks need **918** and two need **604** of grid width:

| viewport | grid width | columns                   | card width |
| -------: | ---------: | ------------------------- | ---------: |
| **1,440** |     1,180 | 3 (`377.33 / 377.33 / 377.34`) | **377.33** |
| **1,024** |       992 | 3 (`314.66 …`)            | **314.66** |
|  **1,015** |       983 | 3                         |     311.67 |
|  **1,014** |       982 | 3                         | **311.33** |
|  **950** |       918 | **3** (`290.00` exactly)  | **290.00** |
|  **949** |       917 | **2** (`446.50`)          | **446.50** |
|    **636** |       604 | **2** (`290.00` exactly)  | **290.00** |
|    **635** |       603 | **1** (`603`)             | **603** |

The floor is a **bare `minmax(290px, 1fr)`** — *not* `min(100%, 290px)` as the sibling job-board card
uses. That single difference is load-bearing: below a **306 px** viewport the track can no longer
shrink, so the card keeps its 290 px width plus its 16 px inset and the document starts to scroll
(6 px at 300). The port SHALL wrap the floor in `min(100%, …)` so the page never scrolls; the card
still measures **290** px at 320 in the reference, so keep `290` as the max floor.

### The spec row wraps on card width, not viewport width

`.cl-card14__specs` is `display: grid; grid-template-columns: repeat(3, auto); justify-content:
space-between` with a 1 px left border + 14 px padding on cells 2 and 3. Its three cells measure
**71 / 89 / 112** px (the third is *"2,450 sq ft"*), so the row needs **272 px** of body content
(`card − 40`) and wraps into **two lines (20.3 → 40.6 px per cell, all three, because the grid row
stretches)** as soon as the card is narrower than **312 px**:

| card width | viewport(s) where it occurs          | spec cells | spec block | body   | card height |
| ---------: | ------------------------------------ | ---------- | ---------: | -----: | ----------: |
|   **312** | 344 (1 col), 1,016+ (3 col)          | 20.3 tall  |   **35.3** | 171.55 |      379.55 |
|   **311** | 343 (1 col), 1,015 (3 col)           | 40.6 tall  |   **55.6** | 191.84 |      399.17 |
|   **290** | 320 (1 col), **950–1,014** (3 col)   | 40.6 tall  |   **55.6** | 191.84 |      385.17 |
|   **603** | 635 (1 col)                          | 20.3 tall  |   **35.3** | 171.55 |      573.55 |

Consequence worth designing around: at **950–1,014** the three-column layout produces 290–311 px
cards, so the spec row is *already* wrapped there and the card is **19.6 px taller** than a naive
`media + 171.55` would predict.

### Type — one face, four weights, five sizes

| role     | size / weight / tracking / leading              | colour    | measured at 1,440                              |
| -------- | ----------------------------------------------- | --------- | ---------------------------------------------- |
| eyebrow  | **14 / 700 / .1em / normal**, uppercase         | `#8a5a00` | 1,180 × **17** at x 130, y 72                  |
| `h1`     | **clamp(28px, 3.8vw, 42px) / 800 / −.02em / 1.1** | `#0f1c2e` | **42 / 46.2**, box **1,180 × 46.19** at y 95  |
| price    | **26 / 800 / −.02em / 1.1**                     | ink       | **337.33 × 28.59** at y 438.73                 |
| address  | **17 / 700 / normal / normal**                  | ink       | **156 × 20** inline box inside a 24.64 line   |
| area     | **14.5 / 400**                                  | `#4d5869` | 337.33 × **21.02** at y 499.97                 |
| specs    | **14 / 400**, `<strong>` **700** ink            | muted     | cells 20.3 tall, 6 px icon gap                 |
| status   | **13 / 700**                                    | per variant | **73 × 30.84** (base), 93 (`--new`), 127 (`--open`) |
| photos   | **12.5 / 600**                                  | white     | **100 × 26.13** at x 393.33, y 380.61          |

`body` base is **15 px / 1.45**; the card inherits it and every role above overrides size only.

### Component geometry (1,440 px; card 1 at x 130, y 169.19, 377.33 × 423.11)

| part        | geometry                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `main`      | content box **1,180** at x **130** (outer **1,212** at x **114**), `padding: 72px 16px`, **664.3** tall |
| head        | **1,180 × 69.19** at y **72**; `margin-bottom: 28px`                                             |
| grid        | **1,180 × 423.11** at y **169.19**; `gap: 24px`                                                  |
| card        | **377.33 × 423.11**, radius **20**, `background: #fff`, shadow `0 1px 2px rgba(15,28,46,.06), 0 20px 40px -30px rgba(15,28,46,.45)` |
| media       | **377.33 × 251.55** (`aspect-ratio: 3 / 2`), `background: #e7e2d9`                               |
| status      | top **14**, left **14** → **73 × 30.84** at x **144**, y **183.19**; `padding: 6px 12px`, radius **8** |
| fav         | top **10**, right **10** → **44 × 44** at x **453.33**, y **179.19**; radius **50 %**            |
| photos      | right **14**, bottom **14** → **100 × 26.13** at x **393.33**, y **380.61**; icon **15 × 15**     |
| body        | `padding: 18px 20px 20px` → **377.33 × 171.55**                                                   |
| specs       | `margin-top: 16px`, `padding-top: 14px`, `border-top: 1px solid #ece8e1` → **337.33 × 35.3** at y **536.98** |

The card's `overflow: hidden` is what clips the photograph to the 20 px radius; the media block
itself has **no** radius, so a port that rounds the media instead of the card shows four white
corners.

### Responsive matrix (measured; card heights are content-driven)

| viewport | grid | cols | card w  | card h  | document |
| -------: | ---: | ---: | ------: | ------: | -------: |
|    1,440 | 1,180 | 3 |  377.33 |  423.11 |      900 |
|    1,200 | 1,168 | 3 |  373.33 |  420.44 |      900 |
|    1,024 |   992 | 3 |  314.66 |  381.33 |      900 |
|    1,014 |   982 | 3 |  311.33 |  399.39 |      900 |
|      950 |   918 | 3 |  290.00 |  385.17 |      900 |
|      949 |   917 | 2 |  446.50 |  469.20 |    1,167 |
|      900 |   868 | 2 |  422.00 |  452.88 |    1,126 |
|      768 |   736 | 2 |  356.00 |  408.88 |    1,017 |
|      636 |   604 | 2 |  290.00 |  385.17 |      952 |
|      635 |   603 | 1 |  603.00 |  573.55 |    1,927 |
|      560 |   528 | 1 |  528.00 |  523.55 |    1,768 |
|      480 |   448 | 1 |  448.00 |  470.20 |    1,604 |
|      390 |   358 | 1 |  358.00 |  410.20 |    1,424 |
|      344 |   312 | 1 |  312.00 |  379.55 |    1,363 |
|      343 |   311 | 1 |  311.00 |  399.17 |    1,382 |
|      360 |   328 | 1 |  328.00 |  390.20 |    1,395 |
|      320 |   288 | 1 |  **290.00** | 385.17 | 1,380 |
|      300 |   268 | 1 |  290.00 |  385.17 | 1,380 *(overflow 6)* |

Two rows are deliberately out of order — 344/343 sit above 360 — to keep the wrap pair together.

### The `h1` has a one-pixel wrap threshold

`clamp(28px, 3.8vw, 42px)`: the clamp floor is reached at `28 / 0.038 = 736.8` px, so every width at
or below 736 renders the title at **28 px / 30.8**. The title is **one line down to 376** and **two
lines from 375** (measured one pixel apart; the block is `31` tall at 376 and `62` at 375).

### Contrast (WCAG 2.1, computed from the measured hex values)

| pair                                        | ratio       | verdict |
| ------------------------------------------- | ----------- | ------- |
| ink `#0f1c2e` on card white                 | **17.13:1** | AAA |
| muted `#4d5869` on card white               | **7.20:1**  | AAA |
| ink on ground `#f7f5f1`                     | **15.73:1** | AAA |
| eyebrow `#8a5a00` on ground                 | **5.44:1**  | AA (small text) |
| white on the dark status pill               | **17.13:1** | AAA |
| `#3b2600` on the gold status pill `#fbbf24` | **8.60:1**  | AAA |
| heart `#e11d48` on the white button         | **4.70:1**  | AA (graphical object passes 3:1) |
| gold `#b7791f` icons on card white          | **3.64:1**  | passes the 3:1 graphical-object floor, **not** text — keep the icons decorative (`aria-hidden`) and let the words carry the meaning |
| spec rule `#ece8e1` on white                | **1.22:1**  | decorative only |

## Behaviour — the save heart (the only script on the page, 924 B)

```js
btn.addEventListener('click', () => {
  const on = btn.getAttribute('aria-pressed') !== 'true';
  btn.setAttribute('aria-pressed', on ? 'true' : 'false');
  btn.classList.remove('is-popping');
  if (on) { void btn.offsetWidth; btn.classList.add('is-popping'); }   // reflow, then replay
});
btn.addEventListener('animationend', () => btn.classList.remove('is-popping'));
```

Three things to carry over exactly:

1. **The press is idempotent in state and *not* idempotent in motion.** Setting `aria-pressed` is the
   whole state change; the `is-popping` class is removed, the element's `offsetWidth` is read to force
   a reflow, and the class is re-added so the 0.4 s keyframe replays on **every** press — including a
   press that un-saves. React cannot rely on `classList` for that: use a state counter as the
   animation `key` (or toggle two alternating classes), and drop `is-popping` on `onAnimationEnd`.
2. **There is nothing else.** No counter, no `role="status"`, no `aria-live`, no storage, no network.
   The pressed fill is the complete feedback, which is why the port must not invent a save counter to
   "make it behave like" a sibling card.
3. **The upward press is silent.** Un-saving fills nothing and shows no pop; the animation runs
   because the script adds the class regardless of direction.

**Pre-saved card.** Card 2 ships `aria-pressed="true"` in the markup, so its heart is **solid
`#e11d48` on first paint with no JS having run** — the initial saved set is data, not an effect.

**The colour transition is a measuring trap.** `.cl-card14__fav` transitions `color` over **0.2 s**;
sampling `getComputedStyle(btn).color` ~120 ms after a click returns an interpolated
**`rgb(217, 29, 71)`**, not the token **`#e11d48` = `rgb(225, 29, 72)`**. Wait out the transition (or
read the custom property) before recording a hex.

## Requirements

### Requirement 1: Page shell and warm ground

The app SHALL render a single `<main>` on the ground `#f7f5f1` with a **1,180 px** content box,
`margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`, ink `#0f1c2e`, containing a `<header>` and
the card grid — and SHALL NOT force a viewport height.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1,440 × 900 viewport
- **WHEN** the app has rendered
- **THEN** the content SHALL measure **664.3 px** tall (the document reports **900** only because the
  viewport is taller than the content) — there is **no** `min-height: 100vh` in the reference
- **AND** the `main` box SHALL be **1,212** wide at **x 114** with its **1,180 px** content at
  **x 130**, because `max-width` applies to the content box (`box-sizing: content-box` on `main`)
- **AND** the document SHALL be **1,424** at 390, **1,395** at 360 and **1,380** at 320

#### Scenario: No horizontal scroll at any usable width

- **GIVEN** the page at 306 / 310 / 320 / 360 / 390 / 412 / 430 / 480 / 520 / 560 / 635 / 636 / 640 /
  768 / 800 / 900 / 950 / 1,014 / 1,024 / 1,200 / 1,440
- **WHEN** `window.scrollTo(400, 0)` runs
- **THEN** `scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** the port SHALL hold that even at 300, where the reference **overflows by 6 px** (defect 1)

### Requirement 2: The head

The app SHALL render a `<header>` containing a **14 px / 700 / .1em / uppercase `#8a5a00`** eyebrow and,
**6 px** below it, an `h1` at `clamp(28px, 3.8vw, 42px)` / **800** / `letter-spacing: -.02em` /
`line-height: 1.1` in ink, with `margin-bottom: 28px`.

#### Scenario: The title scales on the clamp and wraps exactly once

- **GIVEN** a 1,440 px viewport
- **WHEN** the `h1` is measured
- **THEN** it SHALL be **42 px in a 46.2 px line box**, one line, **46.19** tall at y **95**
- **AND** at 1,024 it SHALL be **38.912 / 42.8032** and at 390 **28 / 30.8** on the clamp floor
- **AND** it SHALL be **one line down to 376** (`31` tall) and **two lines from 375** (`62` tall)

#### Scenario: The eyebrow is a label, not a heading

- **GIVEN** the rendered header
- **WHEN** the heading outline is read
- **THEN** the eyebrow SHALL be a `<p>`, **not** an `h2`, so the page exposes exactly **1 `h1`** and
  **3 `h2`** (the addresses)
- **AND** its measured box SHALL be **1,180 × 17** at x **130**, y **72**, letter-spacing **1.4 px**

### Requirement 3: The grid is arithmetic, not breakpoints

The card grid SHALL be `display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%,
290px), 1fr)); gap: 24px`, with **no** column breakpoint, media query or JS measurement. The `min()`
wrapper is a deliberate fix (defect 1) and the only allowed difference from the reference's
`minmax(290px, 1fr)`.

#### Scenario: Column counts at the exact threshold

- **GIVEN** the grid inside its 16 px page padding
- **WHEN** the viewport is swept one pixel across each threshold
- **THEN** there SHALL be **3 columns at 950** with tracks exactly **290.00**, and **2 at 949** with
  **446.50**
- **AND** there SHALL be **2 columns at 636** with tracks exactly **290.00**, and **1 at 635** with
  **603.00**
- **AND** at 1,440 the tracks SHALL measure **377.33 / 377.33 / 377.34** and the grid **1,180** at
  x **130**, y **169.19**

#### Scenario: Rows stretch, cards do not

- **GIVEN** three cards whose address and area copy differ in length
- **WHEN** the grid row is measured
- **THEN** all three cards SHALL share one height (**423.11** at 1,440) because the grid stretches them
- **AND** no card SHALL have a `min-height` or a fixed height of its own

### Requirement 4: The card shell

The card SHALL be a `<article>` with `background: #fff`, `border-radius: 20px`, `overflow: hidden`,
base **15 px / 1.45**, `box-shadow: 0 1px 2px rgba(15,28,46,.06), 0 20px 40px -30px
rgba(15,28,46,.45)` and `transition: transform .3s ease, box-shadow .3s ease`.

#### Scenario: Hover is a lift and a deeper shadow, nothing else

- **GIVEN** a card at 1,440
- **WHEN** it is hovered
- **THEN** `transform` SHALL become `matrix(1, 0, 0, 1, 0, -4)` (**4 px** up) and the shadow
  **`0 1px 2px rgba(15,28,46,.06), 0 30px 50px -30px rgba(15,28,46,.55)`**
- **AND** the border SHALL stay `0` (there is no border in this design) and no colour SHALL change

#### Scenario: The photograph is clipped by the card, not by the media block

- **GIVEN** the rendered card
- **WHEN** the top corners are inspected
- **THEN** the photograph SHALL be clipped to the card's **20 px** radius by the card's
  `overflow: hidden`
- **AND** `.cl-card14__media` itself SHALL have **`border-radius: 0`**

### Requirement 5: The media block

The media block SHALL be `position: relative; aspect-ratio: 3 / 2; background: #e7e2d9` containing a
`display: block; width: 100%; height: 100%; object-fit: cover` image with `width="800" height="540"`.

#### Scenario: The media block is exactly three by two

- **GIVEN** a card of width **377.33** at 1,440
- **WHEN** the media block is measured
- **THEN** it SHALL be **377.33 × 251.55**
- **AND** at card width **290** it SHALL be **290 × 193.33**, and at **603** it SHALL be
  **603 × 402**, in every case **59 %** of the card's height

#### Scenario: Placeholder photography, deterministic per card

- **GIVEN** the port (repo rule: never copy source assets)
- **WHEN** the three images render
- **THEN** they SHALL be `https://picsum.photos/seed/baylist-1/800/540`, `…-2…`, `…-3…`
- **AND** each SHALL keep the reference's descriptive `alt` shape — a short sentence naming the house
  (`"White two-storey villa with large windows and a pool"` is the reference's first)
- **AND** the first two SHALL load eagerly (`fetchPriority="high"`, `decoding="sync"` in the
  reference) and the third `loading="lazy"` `decoding="async"`

### Requirement 6: The status badge

The status badge SHALL be absolutely positioned at `top: 14px; left: 14px`, `padding: 6px 12px`,
`border-radius: 8px`, **13 px / 700**, in three variants: base (ink ground, white text), **`--new`**
(`#fbbf24` ground, `#3b2600` text) and **`--open`** (white ground, ink text).

#### Scenario: Three cards, three badge treatments

- **GIVEN** the three cards in reference order
- **WHEN** each badge is measured
- **THEN** card 1 SHALL read **"For sale"** on `#0f1c2e` / `#fff`, **73 × 30.84** at x **144**, y **183.19**
- **AND** card 2 SHALL read **"New listing"** on `#fbbf24` / `#3b2600`, **93** wide
- **AND** card 3 SHALL read **"Open house Sat"** on `#fff` / `#0f1c2e`, **127** wide
- **AND** all three SHALL sit **14 px** from the media block's top-left corner

### Requirement 7: The photo-count pill

The photo count SHALL be an absolutely positioned inline-flex pill at `right: 14px; bottom: 14px`,
`gap: 5px`, `padding: 4px 9px`, `border-radius: 8px`, `background: rgba(15,28,46,.72)`, white
**12.5 px / 600** text, with a **15 × 15** stroked camera glyph before the number.

#### Scenario: The pill counts photos, in the plural

- **GIVEN** the three cards
- **WHEN** the pills are read
- **THEN** they SHALL read **"24 photos"**, **"18 photos"**, **"31 photos"**
- **AND** each pill SHALL measure **100 × 26.13** at 1,440, sitting **14 px** from the media block's
  bottom-right corner
- **AND** the glyph SHALL be `aria-hidden` so the accessible name is the number and the word

### Requirement 8: The save button

The save button SHALL be a `<button type="button">` at `top: 10px; right: 10px`, **44 × 44**,
`border-radius: 50%`, `background: rgba(255,255,255,.94)`, `box-shadow: 0 4px 14px rgba(0,0,0,.18)`,
`display: grid; place-items: center`, containing a **22 × 22** heart glyph
(`fill: none; stroke: currentColor; stroke-width: 2; stroke-linejoin: round`), carrying
`aria-pressed` and a per-card `aria-label`.

#### Scenario: The control is icon-only and named per card

- **GIVEN** the three cards
- **WHEN** the buttons are queried
- **THEN** their accessible names SHALL be **"Save 14 Seaview Terrace to favourites"**,
  **"Save 7 Banyan Lane to favourites"**, **"Save 22 Lagoon Drive to favourites"**
- **AND** each SHALL start with `aria-pressed` **false / true / false** respectively
- **AND** the button SHALL sit at x **453.33**, y **179.19** on card 1 — **10 px** inside the card's
  top-right corner, above the badge in paint order (`z-index: 2`)

#### Scenario: Hover scales the circle, press fills the heart

- **GIVEN** an un-pressed button
- **WHEN** it is hovered
- **THEN** `transform` SHALL become `scale(1.08)` and the glyph colour SHALL move to `#e11d48`
- **AND** **WHEN** it is clicked
- **THEN** `aria-pressed` SHALL be `"true"`, `color` **`#e11d48`**, and the glyph
  **`fill: #e11d48`** — a solid heart, not a red outline
- **AND** the label SHALL flip to a removal phrasing (defect 3), because `aria-pressed` alone leaves
  a screen reader hearing "Save …" for the un-save action (defect 3)

### Requirement 9: The body copy and the card-wide link

The body SHALL be `padding: 18px 20px 20px` containing the price (`<p>`, 26 / 800 / −.02em / 1.1), the
address as an `<h2>` whose only child is the card's single `<a>`, the area line (`<p>`, 14.5 /
`#4d5869`) and the spec row (requirement 10), in that order with `margin: 0`, `margin: 6px 0 2px` and
`margin: 0` respectively.

#### Scenario: Four facts, four type roles, no invented fifth

- **GIVEN** card 1 at 1,440
- **WHEN** the body is measured
- **THEN** the price SHALL be **"$1,290,000"** at **337.33 × 28.59** (y 438.73)
- **AND** the address SHALL be **"14 Seaview Terrace"** at **17 / 700**, `margin: 6px 0 2px`
- **AND** the area SHALL be **"Coral Bay North · 5 min to the beach"** at **337.33 × 21.02** in
  `#4d5869` — a middle dot (U+00B7) between the two clauses, not a hyphen or a pipe
- **AND** the body SHALL measure **171.55** when the spec row is one line and **191.84** when it
  wraps

#### Scenario: One anchor, one hit area, no nested controls

- **GIVEN** a card
- **WHEN** the pointer targets the photograph, the price or the spec row
- **THEN** the click SHALL land on the address anchor, whose `::after` overlay is
  `inset: 0; border-radius: 20px; z-index: 1`
- **AND** the heart SHALL stay clickable because it is at `z-index: 2`
- **AND** `document.querySelectorAll('a[href="#"]')` SHALL be **0** in the port (defect 2) — ship a
  real route or a non-anchor

### Requirement 10: The spec row

The spec row SHALL be a `<ul>` of exactly three `<li>` in `display: grid;
grid-template-columns: repeat(3, auto); justify-content: space-between`, with
`margin: 16px 0 0; padding: 14px 0 0; border-top: 1px solid #ece8e1`, **14 px** muted text, a **6 px**
gap between glyph and words, `padding-left: 14px; border-left: 1px solid #ece8e1` on every cell after
the first, `<strong>` numbers in **700 ink**, and **19 × 19** glyphs stroked `#b7791f` at
`stroke-width: 1.7` — **the third glyph filled** (`fill: #b7791f; stroke: none`).

#### Scenario: Three cells, two dividers, one filled glyph

- **GIVEN** card 1 at 1,440
- **WHEN** the row is measured
- **THEN** the cells SHALL measure **71 / 89 / 112** px in a **337.33 × 35.3** row at y **536.98**
- **AND** each cell SHALL be `inline-flex; align-items: center; gap: 6px` with **19 × 19** glyphs
- **AND** the first two glyphs SHALL be **stroked** gold and the third **filled** gold — the
  bed / bath / floor-area distinction the reference draws with fill, not colour
- **AND** the copy SHALL be **"4 beds" / "3 baths" / "2,450 sq ft"** (card 1),
  **"3 / 2 / 1,720"** (card 2), **"5 / 4 / 3,380"** (card 3), numbers in `<strong>`, thousands
  separated by a comma

#### Scenario: The row wraps on card width at 312 / 311

- **GIVEN** the port at card width **312** then **311**
- **WHEN** the row is measured
- **THEN** it SHALL be **35.3** tall with **20.3**-tall cells at 312
- **AND** it SHALL be **55.6** tall with **40.6**-tall cells at 311 — **all three** cells grow,
  because the grid row stretches even though only the third cell's text wrapped
- **AND** the port SHALL therefore produce wrapped cells at **950–1,014** (three columns, 290–311 px
  cards) and at **≤343** in the single-column range, without any media query

### Requirement 11: The save behaviour

The app SHALL hold the saved set as React state seeded from data (card 2 saved) and SHALL toggle it on
click, replaying a **0.4 s** pop on every press.

#### Scenario: Press, pop, un-press, pop again

- **GIVEN** card 1 with `aria-pressed="false"`
- **WHEN** its heart is clicked
- **THEN** it SHALL become `aria-pressed="true"` with the glyph filled `#e11d48`
- **AND** the pop animation SHALL run to `scale(1.35)` and settle back to `scale(1)` within
  **400 ms**, and the class/state that carries it SHALL be cleared on `animationend`
- **AND** **WHEN** it is clicked a second time
- **THEN** it SHALL return to `aria-pressed="false"`, an unfilled glyph, and the pop SHALL **replay**
  (the reference re-adds the animation class on both directions)

#### Scenario: Nothing else changes on press

- **GIVEN** any card
- **WHEN** the heart is toggled
- **THEN** no counter, `role="status"`, `aria-live` region or toast SHALL appear or change — this
  design has none, and adding one is a fidelity break, not an improvement
- **AND** no other card's state SHALL change

#### Scenario: Card 2 is saved before any script runs

- **GIVEN** the first render
- **WHEN** the hearts are read
- **THEN** card 2 SHALL already be `aria-pressed="true"` with a solid `#e11d48` heart at **4.70:1**
  against the white circle
- **AND** cards 1 and 3 SHALL be un-pressed with ink outlines

### Requirement 12: Semantics, focus order and focus rings

The app SHALL expose **1 `h1`**, **3 `h2`**, **3 `<article>`**, **3 buttons**, **3 links**, **0**
forms, **3 `<img>`** with alts, **15 `<svg>`** glyphs (all `aria-hidden`), `lang="en"`, and exactly
**6** focusable elements in DOM order **button → link** per card.

#### Scenario: The tab order follows reading order

- **GIVEN** the page at 1,440
- **WHEN** <kbd>Tab</kbd> is pressed from the document start
- **THEN** focus SHALL land on card 1's **heart button**, then card 1's **address link**, then card
  2's heart, and so on — the media block precedes the body in the DOM
- **AND** every glyph SHALL be `aria-hidden="true"` so no button announces "graphic"

#### Scenario: Two rings, both gold, different geometry

- **GIVEN** keyboard focus on a heart button
- **WHEN** its ring is measured
- **THEN** it SHALL be **3 px solid `#fbbf24`** at **2 px** offset, drawn **outside** the 44 px circle
- **AND** **GIVEN** keyboard focus on an address link
- **THEN** the ring SHALL be **3 px solid `#b7791f`** at **−3 px** offset on the `::after` overlay, so
  it traces the **whole card's** inset edge at radius 20 (verified in a 1,440 screenshot)
- **AND** both rings SHALL clear **3:1** against the surface they sit on

### Requirement 13: Motion preference

The app SHALL honour `prefers-reduced-motion: reduce` by removing the card lift, the button hover
scale and the pop animation, while keeping the pressed colour and fill change.

#### Scenario: Reduced motion keeps state, drops motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** a card is hovered and a heart is pressed
- **THEN** `transform` SHALL stay `none` and the pop SHALL not run
- **AND** the heart SHALL still fill `#e11d48` and `aria-pressed` SHALL still flip — the state is
  never sacrificed to the animation

### Requirement 14: Porting constraints

The app SHALL contain **no** `colorlib`, `card-14`, `Card V14` or `cl-card14` string anywhere in
`apps/baylist/`, SHALL ship `public/CNAME` = `baylist.free.componentdock.com` and `"homepage"` =
`https://baylist.free.componentdock.com`, SHALL link `https://www.componentdock.com/` as
"Component Dock" once, and SHALL express the tokens in `@theme` rather than inline hex.

#### Scenario: Provenance lives outside the app

- **GIVEN** the shipped app
- **WHEN** `grep -ri 'colorlib\|card-14\|cl-card14' apps/baylist` runs
- **THEN** it SHALL return **no matches**, and no `cl-` class name SHALL survive into the JSX
- **AND** the footer line SHALL read as a Component Dock attribution, not as an estate-agent
  disclaimer

## Screenshot analysis (catalogue image, `card-14.jpg`, AVIF 1200 × 972)

The screenshot is **a browser-window mockup of the live page** — macOS traffic lights, a
`preview.colorlib.com` address field — and shows the whole band in one frame:

- **Ground** warm off-white, no band break, no border, no divider: the page *is* the card grid.
- **Head** one gold uppercase label above one very heavy navy line; the label is smaller than a
  caption and the title is the only large type on the page.
- **Grid** three cards in one row with visibly generous gutters (24 px), each card taller than it is
  wide, all three the same height.
- **Photography** is what makes the row read: villa + pool, a dusk-lit timber house under a tree, a
  white balcony house over a pool — bright, blue-green, high-key, and clipped flush to the card's top
  corners.
- **Badges** three different colours across three cards (dark, gold, white) — the gold one is the only
  warm colour anywhere on the page and it is what the eye lands on second, after the price.
- **Hearts** the middle card's heart is **solid red**; the outer two are outline glyphs in ink circles
  — the design's only saturated red, and proof that the saved state is meant to be seen from across
  the row.
- **Prices** the largest, heaviest numerals on the page; addresses directly under them in the same ink
  at roughly two-thirds the size; the area line is the only muted text.
- **Spec rows** three evenly spaced cells under a hairline, separated by two short vertical rules, each
  led by a small gold glyph — the third one visibly **solid** where the first two are outlines.
- The layout is **one screen**: below the cards there is nothing but ground for ~235 px.

At 1,440 in Playwright the live page matches the mockup: three cards, content 664.3 tall, the rest
ground to 900.

## Known reference defects (do not copy)

1. **The grid floor is a bare `290px`.** `minmax(290px, 1fr)` cannot shrink below 290, so below a
   **306 px** viewport the card (290 + 16 px inset) forces the document wider than the viewport —
   `scrollX 1` at 305 and **6 px** at 300. Ship `minmax(min(100%, 290px), 1fr)`.
2. **Every address is `href="#"`** (3 anchors), so each click jumps to the top of the document and
   the app has no destination at all. Ship a real route (a listing page or an in-app detail view) or a
   non-anchor; assert `a[href="#"]` count is **0**.
3. **The button's accessible name never changes.** It reads "Save 14 Seaview Terrace to favourites"
   while pressed — a screen-reader user hears "Save …" for the action that *un-saves*. Keep
   `aria-pressed`, and flip the label to "Remove … from favourites".
4. **The link overlay swallows the copy.** `.cl-card14__link::after` sits at `z-index: 1` over the
   entire card, so the photo count and the status text cannot be selected and read as part of the
   link's hit area. Keep the overlay (it is the design's hit area) but do not stack any *new*
   interactive element below `z-index: 2`.
5. **`.cl-icon` is dead.** Declared (`height: 1em; width: auto; fill: currentColor`) and never used in
   the markup — the 6th consecutive card in this family with the leftover. Do not port it.
6. **The archive ships a weight the stylesheet never declares.** 10 `woff2` files, 8 `@font-face`
   rules: the **500** pair (latin 27,812 B + latin-ext 16,464 B = 44,276 B, 8.6 % of the download) is
   unreferenced. Load one Urbanist `<link>` with `400;600;700;800` and carry no file.
7. **The selection of icons is inconsistent in weight.** The bed and bath glyphs are stroked at
   `1.7`, the area glyph is filled solid at the same size. Reproduce it — but pair it with words in
   every cell (the reference already does), because gold at **3.64:1** is below the text threshold.
8. **The `h1` has no sub-line.** Unlike every sibling card, this head is eyebrow + title only; nothing
   states how many listings there are or when they were updated. Do not invent a sub-line to "balance"
   the head — the reference's asymmetry is the design.

## Adapting to the repo (deltas the implementer owns)

| reference                                   | in `apps/baylist`                                                              |
| ------------------------------------------- | ------------------------------------------------------------------------------ |
| `.cl-card14-demo` / `.cl-card14` class names | Tailwind utilities; **no** `cl-` class names anywhere                          |
| 8 `@font-face` + 10 `woff2`                  | one Google Fonts `<link>`: `family=Urbanist:wght@400;600;700;800&display=swap` (verified **200**; the legacy `css?family=Urbanist:400,600,700,800` form is also 200) |
| inline SVG glyphs                            | `Heart`, `Images`, `BedDouble`, `Bath`, `Maximize` (or `Scan`) from `lucide-react`; keep **22 / 15 / 19 / 19 / 19** px and `strokeWidth={2}` / `{1.7}`; the bed, bath and area glyphs need `fill="none"` except the area one, which is filled |
| `images/*.jpg` (81,819 / 90,014 / 114,090 B)  | `https://picsum.photos/seed/baylist-1/800/540` … `-3`; keep `width={800} height={540}` and `object-cover` |
| `is-popping` class + `offsetWidth` reflow    | React state counter as the animation `key` (or two alternating classes) + `onAnimationEnd`; never read `offsetWidth` in a render path |
| markup `aria-pressed="true"` on card 2       | `initiallySaved: true` in `data.ts`, not an attribute in JSX                    |
| `a[href="#"]`                                | a real `href` per listing (`/listings/14-seaview-terrace`) or a `<button>`; **never** `#` |
| no footer                                    | one Component Dock attribution line, under the grid in the same content column   |

`src/index.css` `@theme` tokens to declare (exact measured values):

```css
--color-ground:     #f7f5f1;
--color-ink:        #0f1c2e;
--color-muted:      #4d5869;
--color-gold:        #b7791f;
--color-gold-soft:   #fbbf24;
--color-gold-ink:    #3b2600;
--color-heart:       #e11d48;
--color-rule:        #ece8e1;
--color-media-ground: #e7e2d9;
--radius-card:       20px;
--radius-pill:       8px;
```

Data shape the tests should pin (one object per listing): `id`, `price`, `address`, `href`, `area`,
`status: { label, variant: 'sale' | 'new' | 'open' }`, `photos: number`, `specs: { beds: string,
baths: string, floor: string }`, `image: { src, alt }`, `initiallySaved: boolean`.

**Suggested component split** (mirrors other card apps): `App.tsx` (saved-set state + composition),
`components/ListingHead.tsx`, `components/ListingGrid.tsx`, `components/ListingCard.tsx`,
`components/SaveButton.tsx`, `components/SpecRow.tsx`, `components/PhotoCount.tsx`, `data.ts`.

**Coverage notes.** No `IntersectionObserver`, no timers, no async: the full surface is reachable in
jsdom. A test clicks each heart and asserts `aria-pressed`, the glyph's `fill` class, the flipped
label, and that the pop key/prop changes on **both** directions; a second test asserts card 2 renders
saved on first paint and that presses are independent. Assert `a[href="#"]` count is 0, assert every
`<img>` has a non-empty `alt`, and assert the three status variants render their three class sets.
The animation itself is CSS — do not try to assert keyframe intermediates, assert the class/key.

## Verification checklist

- [ ] `apps/baylist` exists, package `@free-react-templates/baylist`, `public/CNAME` =
      `baylist.free.componentdock.com`, `"homepage"` = `https://baylist.free.componentdock.com`
- [ ] `grep -ri 'colorlib\|card-14\|Card V14\|cl-card14' apps/baylist` → **no matches**
- [ ] page: `#f7f5f1` ground, **1,180 px** content box (outer **1,212** at x **114**, content at
      x **130**), padding **72 / 16** at 1,440 and **32 / 16** at 390; content height **664.3**;
      **no** `min-height: 100vh`
- [ ] head: eyebrow 14/700/.1em uppercase `#8a5a00` (**1,180 × 17** at y 72); `h1`
      `clamp(28px,3.8vw,42px)`/800/−.02em/1.1 → **42 / 46.2** at 1,440, **38.912 / 42.8032** at
      1,024, **28 / 30.8** at 390; **one line down to 376**, **two from 375**; `margin-bottom: 28px`
- [ ] grid: `repeat(auto-fit, minmax(min(100%, 290px), 1fr))`, `gap: 24px`; **3 columns at 950**
      (tracks exactly **290.00**), **2 at 949** (**446.50**); **2 at 636** (**290.00**), **1 at 635**
      (**603**); **377.33 / 377.33 / 377.34** at 1,440
- [ ] cards: white, radius **20**, `overflow: hidden`, base **15 / 1.45**, shadow
      `0 1px 2px rgba(15,28,46,.06), 0 20px 40px -30px rgba(15,28,46,.45)`; hover lift
      **−4 px** + `0 30px 50px -30px rgba(15,28,46,.55)`; **423.11** tall at 1,440
- [ ] media: `aspect-ratio: 3 / 2`, **377.33 × 251.55**, `object-fit: cover`, ground `#e7e2d9`,
      `width="800" height="540"`, first two eager, third `loading="lazy"`; **no** radius on the media
- [ ] badges: **73 / 93 / 127** wide, **30.84** tall, radius **8**, `padding: 6px 12px`, 13/700, at
      **top 14 / left 14**; ink `#0f1c2e`+white, `#fbbf24`+`#3b2600`, white+ink
- [ ] photo pill: inline-flex, `gap: 5px`, `padding: 4px 9px`, radius **8**,
      `rgba(15,28,46,.72)`, 12.5/600 white, **15 × 15** glyph, **100 × 26.13** at bottom-right 14/14
- [ ] heart: **44 × 44** circle at **top 10 / right 10**, `rgba(255,255,255,.94)`,
      `0 4px 14px rgba(0,0,0,.18)`, **22 × 22** glyph, `aria-pressed` + per-card `aria-label`;
      pressed → `color` **and** `fill` `#e11d48`; hover → `scale(1.08)`
- [ ] body: `padding: 18px 20px 20px` (**171.55** / **191.84** when the spec row wraps); price
      **26/800/−.02em**; address **17/700** `margin: 6px 0 2px`; area **14.5** `#4d5869`; **0**
      `a[href="#"]`
- [ ] hit area: one anchor per card, `::after` inset 0, radius **20**, `z-index: 1`; heart at
      `z-index: 2`; no other interactive element inside the card
- [ ] specs: 3 cells, `repeat(3, auto)` + `space-between`, `border-top: 1px solid #ece8e1`,
      `margin-top: 16 / padding-top: 14`, dividers `padding-left: 14` + `1px` on cells 2–3, **19 × 19**
      glyphs stroke `#b7791f` 1.7, **third filled**; cells **71 / 89 / 112**; row **35.3** at card 312,
      **55.6** at card 311
- [ ] behaviour: card 2 saved on first render; click → `aria-pressed`, `#e11d48` fill, **0.4 s** pop
      replaying on both directions, cleared on `animationend`; **no** counter, **no** `role="status"`,
      **no** `aria-live`
- [ ] a11y: **1 `h1`**, **3 `h2`**, **3 `<article>`**, **3 buttons**, **3 links**, **0** forms,
      **3** images with alts, **15** `aria-hidden` glyphs, **6** focusables in *button → link* order;
      fav ring **3 px `#fbbf24` / 2 px** outside, link ring **3 px `#b7791f` / −3 px** tracing the card
- [ ] `prefers-reduced-motion: reduce` → no lift, no hover scale, no pop; pressed state preserved
- [ ] no horizontal scroll: `scrollTo(400,0) → scrollX 0` at 306 / 320 / 360 / 390 / 430 / 480 / 520 /
      560 / 635 / 636 / 768 / 800 / 900 / 950 / 1,014 / 1,024 / 1,200 / 1,440
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app baylist` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-baylist --type spec` is valid
