# Template: Tonearm (Audio player cards — a dark podcast player beside a light album card whose five-row track list swaps its play state in place)

## Purpose

A **single-screen pair of player cards**: no nav, no hero, no footer in the reference — one centred
**820 px** row on a warm greige ground (`#ebe5da`) holding a **dark podcast player** and a **light album
card**, both **aligned to the top** so their unequal heights (645.77 vs 448.02 at 1,440) leave a
**197.75 px** step between them. That step is the composition: the two cards are the same width and the
same radius, and the shorter one simply stops early.

**Card 1 — podcast.** Near-black panel (`#17151f`) with a **square cover that is the card's full content
width** (354 × 354 at 1,440) painted with a **160° violet gradient** (`#3a0ca3 → #7209b7 60 % →
#b5179e`), a **hand-drawn SVG scene** (a yellow sun disc and two translucent wave bands) and the show's
name set **over the art in 44 px synthetic bold**, top-left. Under it: an amber eyebrow
(*"Episode 84 · 42 min"*), a two-line white title, a muted byline, a **6 px progress bar** with an
**amber→rose gradient fill** already at **44.208 %** on load, `18:42` / `-23:36` in tabular figures, and
a **five-button transport row** — `1×` speed, `«15`, a **68 px white play disc**, `30»`, add-to-queue.

**Card 2 — album.** Cream panel (`#fffdf8`) in the same family palette turned teal: a **120 px rounded
cover** at the head (180° `#14b8a6 → #5eead4 55 % → #fde68a` gradient, sun-and-hills SVG), a teal
eyebrow (*"Album · 2026"*), **"Night Swim"** at 24 px, a muted byline, a **44 px teal play disc**, then a
**five-row track list** whose rows are **41.75 px** each, and a teal progress bar reading `0:00` /
`-3:34`.

**This is the first card in the family with behaviour.** The snippet ships **11 buttons, 0 links,
0 images, 0 forms** and a **3,909 B script** that simulates playback: a shared 250 ms clock, a
play/pause toggle that paints through `aria-pressed` and `.is-playing`, ±15 s / +30 s skips, a
**1× → 1.5× → 2× → 1×** speed cycle, row selection that moves `aria-current`, an **equaliser** that
replaces the playing row's number, and **auto-advance** to the next track when one ends. There is no
audio element anywhere — the state machine is the design.

- **Source slug:** `card-16`
- **ColorLib page:** https://colorlib.com/wp/template/card-16/ — **HTTP 200, 113,551 B**,
  `<title>` `Card V16 - Free Bootstrap Cards 2026 - Colorlib`, `<meta description>` *"Two player cards:
  a dark podcast player with SVG cover art, episode progress, skip back and forward, playback speed…
  Free download, no jQuery or plugins."*, authoritative description *"Two player cards: a dark podcast
  player with SVG cover art, episode progress, skip back and forward, playback speed and a play/pause
  toggle, and a light album card with a track list. Playback is simulated so the controls work without
  audio files."*, feature list *"Play/pause toggle with `aria-pressed` · Progressbar with value text
  that advances while playing · Track list with `aria-current` and an equaliser on the playing song ·
  Skip and 1x/1.5x/2x speed controls · Cover art drawn in SVG, no images"*, page copy *"It is plain HTML
  and CSS plus a few lines of vanilla JavaScript: no jQuery, no Bootstrap files, no plugins, and the
  download is **223 KB**."*, `datePublished` **2026-09-25T15:33:23+00:00** (archive measured
  **227,899 B = 222.56 KB ✓**). It is the **sixteenth of twenty** `card` variants.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-16/ —
  **HTTP 200, 6,621 B**, `<title>` `Card V16 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  script, `<meta name="robots" content="noindex, nofollow">`. The slug-only path `theme/card-16/`
  **404s**; this family lives under the `bootstrap/` prefix (same ladder as `card-01` … `card-15`).
- **Design category:** Card (audio player — podcast + album). Sixteenth member of the **`card` snippet
  family** (`card-01` … `card-20`) in the **214 snippet variants** catalogued in
  `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/tonearm`, package
  `@free-react-templates/tonearm`, CNAME `tonearm.free.componentdock.com`.

**What this design is.** The family's **first interactive card**, and its first **pair**. Every earlier
card is a static object: a name plate, a job notice, a price card, a listing row, a recipe plate. This
one is a **two-card console**: a hero-ish left panel carrying cover art and a transport, and a right
panel carrying a list whose rows are themselves controls. The visual identity is the **dark/light
diptych** — same 28 px radius, same 22 px padding, same 15 px body, one near-black, one cream, each with
its own accent (`#ff8a3d` amber declared on the podcast, `#0f766e` teal on the album) — and the
behavioural identity is that **the two cards are independent players** with independent clocks, driven
by the same script.

**Six numbers decide whether the recreation reads correctly.**

1. **820 px, not 1,140.** The row is capped at `820`, so at 1,440 the page has **310 px** of ground on
   each side. Widen it to the family's usual 1,140 and the two 398 px cards become 558 px cards — a
   different design.
2. **The cover is the card's width, not a fixed size.** `aspect-ratio: 1` inside 22 px padding gives
   **354 × 354** at 1,440 and **314 × 314** at 390. Its text overlay is
   `clamp(30px, 6vw, 44px)`; at 1,440 that is **44 px in a 41.8 px line box**.
3. **Two columns down to 736, one below.** `minmax(min(100%, 340px), 1fr)` × 2 + a 24 px gap = **704**
   of grid width = **736** of viewport. Measured: **2 columns and tracks of exactly 340.00 at 736**,
   **1 column of 702 at 735**.
4. **Top-aligned, unequal.** `align-items: start` — the album does **not** stretch to 645.77. The step
   is **197.75 px** and it is the design's silhouette.
5. **The transport is 5 × 46 px plus one 68 px disc, 8 px apart.** At 398 px the row is exactly
   `46 + 8 + 46 + 8 + 68 + 8 + 46 + 8 + 46 = 284`, so the play disc is centred by **space-between**, not
   by absolute positioning.
6. **The clock is 250 ms × 0.25 s × rate.** Real time at 1×, half speed at 2× on the wall clock. The
   progress fill is set **inline by script** (`width: 44.208%`), never by CSS.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **0** in-progress rows). So this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `card-16` is one of the **214 snippet variants in 19 families**; snippet families are worked
**in family order, then variant number**, and the `card` family runs to **20**.

The family section **`## Bootstrap Cards (20)` exists on main at line 733** and at this prep's commit
carries **seven** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo, `Card 04` →
tierline, `Card 05` → plaudit, `Card 06` → statline, `Card 07` → lodgerow — with **`## Bootstrap
Checkboxes (20)` following at line 743**. Cards **08–15** are prepped and unbuilt (`roadbook`, `lexeme`,
`coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`). This design's row goes **directly
after the last card row present** when the implementer ships it:

```markdown
- [x] **Card 16** — [colorlib](https://colorlib.com/wp/template/card-16/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-16.jpg) · [tonearm](https://tonearm.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns that
batch edit, not this prep run.

**The name.** `tonearm` — one lowercase word: the pivoting arm that carries a turntable's stylus, i.e.
the part that reads recorded sound. It names the design's subject (playback equipment) without touching
its source, and it reads as a product. It is in **no** `apps/` folder, **no** spec folder, **no**
`docs/templates/` folder, and `git grep -il tonearm origin/main` returns **nothing at all** (0 hits,
checked 2026-10-26). The ColorLib catalogue paths `colorlib.com/wp/template/tonearm/`,
`preview.colorlib.com/theme/tonearm/` are both **404**. Do **not** reuse the family's taken names
`nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`, `lexeme`,
`coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`, `tiffin`. Other candidates measured free the
same day (0 repo hits, no `apps/` folder, no spec folder, 404 on ColorLib): `spindle`, `backspin`,
`tracklist` — reserved for later variants. `platter` is **taken** (an existing app).

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 6,621 B**, `<title>` "Card V16 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script                                                   |
| preview path      | **`theme/bootstrap/card-16/`** — the directory URL is the page. `theme/card-16/` is **404**                                                          |
| stylesheet        | `css/style.css?v=58545a9e`, **11,887 B**, 538 lines, sha256 `ec1a0a9e2188afab6cc551a7e354e40986ce4a6aca72d20d70673fad54c6a2dd`                          |
| script            | `js/snippet.js?v=c021e3c2`, **3,909 B**, 116 lines, sha256 `3be26e999b3a5756019fce65bbd5cc0d361f3c54d055bd051d1ef40d76dc6ec6`, plain IIFE, no jQuery     |
| archive           | `preview.colorlib.com/downloads/free/card-16.zip`, **200, 227,899 B** (222.56 KB ✓ the page's "223 KB"), **18 entries**: 4 dirs + `index.html` **6,418 B** + `css/style.css` **11,887 B** + `js/snippet.js` **3,909 B** + `README.md` **1,260 B** + **8 `woff2`** (241,922 B uncompressed in total) |
| live ↔ archive    | CSS **identical sha256**, JS **identical sha256**; live HTML **6,621 B** vs archive **6,418 B** — the **203-byte** delta is the two `?v=` cache-busters, the extra `noindex`/`dns-prefetch` head tags and `fetchpriority` on the stylesheet → **the preview is the archive's versioned twin** |
| CSS shape         | **82** `{` blocks = **76** top-level + **6** nested; of the 76: **11** `:where(html) …` host resets, **6** `@font-face`, **2** `@keyframes`, **1** `@media` (`prefers-reduced-motion`), **56** style rules (54 `.cl-card16*` + `.cl-icon` + `body`); nested: 2 keyframe frames + 1 more frame + 3 media rules; **0** `@supports`, **0** container queries, **0** column media queries |
| classes           | **33** classes in the markup, **all** styled; **1 dead selector** — `.cl-icon` (declared, 0 hits in the markup; **8th consecutive card** with this leftover); **1 class with no rule at all** — `.cl-card16__progress` (a bare wrapper) |
| custom properties | **5**, all declared on `.cl-card16` and re-declared by `.cl-card16--album`: `--cl-card16-accent`, `--cl-card16-surface`, `--cl-card16-ink`, `--cl-card16-muted`, `--cl-card16-track` |
| cascade reset     | the sheet opens with `:where(html) :is(…) { all: revert }` (11 rules) + a `[hidden]` repair — a host-page reset so a Bootstrap parent cannot restyle the snippet; **do not port it**, Tailwind preflight already owns this |
| controls          | **11** `<button>` (5 podcast transport + 1 album play + 5 track rows), **0** `<form>`, **0** `<input>`, **0** `<a>`, **`<img>` **0** — the cover art is **inline SVG** (3 `<svg>` icons per card + 1 cover scene + 3 `<i>` equaliser bars per row = 9 `<svg>`, 15 `<i>`) |
| headings          | **0 × `h1`**, **2 × `h2`** (the episode title and the album title); each card is a `<section aria-labelledby>`                                    |
| blocks            | `<main class="cl-card16-demo">` → `<div class="cl-card16-row">` → 2 × `<section class="cl-card16">` → *(nothing after the row)*                       |
| content height    | **805.77** at 1,440 / 1,200 / 1,024 / 992 / 900 · **765.77** at 820 · **739.77** at 768 · **1,445.52** at 700 · **1,373.52** at 636 · **1,161.77** at 390 · **1,121.77** at 320 · **1,187.45** at 300 |
| horizontal scroll | **none from 260 up** — `scrollWidth === clientWidth` and `scrollTo(600,0) → scrollX 0` at 260 / 280 / 300 / 320 / 340 / 360 / 390 / 412 / 430 / 480 / 520 / 600 / 620 / 636 / 700 / 767 / 768 / 820 / 900 / 992 / 1,024 / 1,200 / 1,440. **Real overflow below that**: `scrollX 2` and `scrollWidth 242` at 240 (see defect 8) |
| screenshot        | `card-16.jpg` — **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 21,816 B); convert before viewing. It is ColorLib's **marketing frame** (browser chrome + padding around the same page), not extra design |
| fonts             | **Rubik**, and the archive ships **eight `woff2` files that are two distinct files repeated four times** — every `*-latin.woff2` is byte-identical (sha256 `99ec7ccb40cf…`, 35,324 B) and every `*-latin-ext.woff2` identical too (sha256 `b11446f4d0b8…`, 19,288 B). The sheet declares **6** `@font-face` rules (400, 600, 700 × latin, latin-ext); the 500 pair is **shipped and never referenced**. Because the outlines are the 400 design in every face, Chromium **synthesises bold**: the same string measures **379 px at 400/500 but 398 px at 600/700** (+5.0 %). **Do not reproduce the trick** — load real Rubik 400/600/700 (see the deltas table) |

### Card 1 — the podcast player (1,440 px; card at x 310, y 80, 398 × 645.77)

| part        | geometry                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------- |
| card        | `padding: 22px`, `border-radius: 28px`, bg `#17151f`, ink `#f6f3ff`, base **15 / 1.45**, shadow `0 30px 60px -30px rgba(23,21,31,.6)` |
| cover       | **354 × 354** at x 332, y 102 (`aspect-ratio: 1`), radius **20**, `overflow: hidden`          |
| cover text  | **203.69 × 83.59** at x 354, y 122 → `top: 20px; left: 22px`, **44 / 700 / −.04em / .95** white |
| info        | **354 × 99.64** at y 476 — `margin: 20px 0 16px`                                               |
| eyebrow     | **354 × 18.84** at y 476; **13 / 600 / .04em** `#ffb27a` (the card's own accent override)      |
| title       | **354 × 52.5** at y 498.84 = **two lines** of 26.25; **21 / 700 / −.01em / 1.25**, `margin: 4px 0` |
| byline      | **354 × 20.3** at y 555.34; **14 / 400** `#b9b4c9`                                             |
| progress    | bar **354 × 6** at y 591.64, radius **999**, track `rgba(255,255,255,.16)`; fill **156.48** (44.208 %) in a **90° `#ffb27a → #ff5f8f`** gradient |
| times       | **354 × 18.13** at y 603.64 (`margin-top: 6`); **12.5 / 400** `#b9b4c9`, `font-variant-numeric: tabular-nums` |
| controls    | **354 × 68** at y 635.77 (`margin-top: 14`), `justify-content: space-between`, `gap: 8`        |
| buttons     | **46 / 46 / 68 / 46 / 46** wide at x **332 / 403.5 / 475 / 546.5 / 618**; all circles           |
| play disc   | **68 × 68**, bg **#fff**, icon `#17151f`, shadow `0 10px 24px -8px rgba(255,138,61,.6)`        |
| card bottom | **725.77** = controls bottom 703.77 + **22**                                                   |

### Card 2 — the album (1,440 px; card at x 732, y 80, 398 × 448.02)

| part        | geometry                                                                                     |
| ----------- | -------------------------------------------------------------------------------------------- |
| card        | same shell as card 1 except bg `#fffdf8`, ink `#1d2422`, muted `#56625e`, accent `#0f766e`     |
| head        | **354 × 133.14** at x 754, y 102 — `display: flex; gap: 18px; align-items: center; margin-bottom: 16` |
| cover       | **120 × 120** at x 754, y 108.56 (`flex: none`), radius **16**                                 |
| text column | x **892** (754 + 120 + 18), width **200**: eyebrow 18.85 + 4 + title **30** + 4 + byline 20.3 + 12 + play **44** = **133.15** |
| eyebrow     | **13 / 600 / .04em** `#0f766e`                                                                |
| title       | **24 / 700** (the `--album` head override), `margin: 4px 0`                                   |
| play        | **44 × 44** at x 892, y 191.14 — `margin-top: 12`, bg `var(--accent)`, icon `#fff`, shadow `0 8px 18px -8px rgba(15,118,110,.8)` |
| tracks      | `<ol>` **354 × 208.75** at y 251.14 = **5 × 41.75**, `margin-bottom: 16`                        |
| row         | **354 × 41.75**, radius **12**, `padding: 10px 12px`, `grid-template-columns: 22px 1fr auto`, `gap: 12` |
| number      | **22 × 18.84** at x 766, y 262.59; **13 / 600** muted, tabular                                |
| name        | **257 × 21.75** at x 800; 15 / 400, `text-overflow: ellipsis`                                  |
| length      | **27 × 18.84** at x 1069; **13 / 400** muted, tabular                                          |
| current row | bg **#e6f4f1**, text **#0b5a54**, `font-weight: 600`; hover `#f1f5f3`                          |
| progress    | bar **354 × 6** at y 475.89 — track `#e4ebe8`, fill **0** wide (0 %), teal                   |
| times       | y 487.89 → `0:00` / `-3:34`; card bottom **528.02**                                           |

### The grid threshold is arithmetic, not a breakpoint

`.cl-card16-row` is `grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
align-items: start; gap: 24px; width: 100%; max-width: 820px` — **no media query**.

| viewport | grid width | columns | tracks          | podcast  | album    |
| -------: | ---------: | ------- | --------------- | -------: | -------: |
|    1,440 |        820 | 2       | 398 / 398       | **645.77** | **448.02** |
|      900 |        820 | 2       | 398 / 398       |   645.77 |   448.02 |
|      820 |        788 | 2       | 382 / 382       |   629.77 |   448.02 |
|      768 |        736 | 2       | 356 / 356       |   603.77 |   468.31 |
|  **736** |    **704** | **2**   | **340.00** each |   575.77 |   468.31 |
|  **735** |    **703** | **1**   | **703.00**      |   575.77 |   468.31 |
|      700 |        668 | 1       | 668             |   889.52 |   448.02 |
|      636 |        604 | 1       | 604             |   825.52 |   448.02 |
|      480 |        448 | 1       | 448             |   695.77 |   448.02 |
|      390 |        358 | 1       | 358             |   605.77 |   468.31 |
|      340 |        308 | 1       | 308             |   555.77 |   498.31 |
|      320 |        288 | 1       | 288             |   535.77 |   498.31 |
|      300 |        268 | 1       | 268             |   562.31 |   537.45 |

The album's height is **content-driven and therefore not monotonic**: at 1,442 it is **448.02** (byline
on one line), at **412** it is **468.31** (`"Juniper Coast · 5 songs, 19 min"` wraps to two lines), at
**340** it is **498.31**, at **300** **537.45**. The podcast's height follows its cover, so it shrinks
monotonically with width until the controls start to compress (see defect 8).

### The transport compresses below 340

The five buttons are fixed sizes inside a flex row with default `flex-shrink: 1`, so under a ~340 px card
they narrow:

| viewport | card  | controls | speed / skip | play disc |
| -------: | ----: | -------: | -----------: | --------: |
|    ≥ 412 | ≥ 380 |   ≥ 336  |       **46** |    **68** |
|      340 |   308 |      264 |       42.4   |      62.6 |
|      320 |   288 |      244 |       38.7   |      57.2 |
|      300 |   268 |      224 |       35.0   |      51.8 |
|      280 |   248 |      204 |       31.4   |      46.4 |
|      260 |   228 |      184 |       27.8   |      41.0 |
|      240 |   208 |      164 |    23 / 26   |      34.0 |

There is no media query and no `flex: none`; this is the reference's own behaviour, and it is the reason
the page has **no** overflow down to 260. Reproduce the compression (do **not** add `shrink-0`), and fix
only the 2 px at 240 (defect 8).

### Type — one family, nine roles

| role        | size / weight / tracking / leading                       | colour      | measured at 1,440                     |
| ----------- | -------------------------------------------------------- | ----------- | ------------------------------------- |
| cover title | **clamp(30px, 6vw, 44px) / 700 / −.04em / .95**          | `#fff`      | **44 / 41.8**, box 203.69 × 83.59     |
| eyebrow     | **13 / 600 / .04em**                                     | per card    | **18.84** tall                        |
| card title  | **21 / 700 / −.01em / 1.25** (album: **24**)             | ink         | podcast **52.5** (2 lines), album **30** (1 line) |
| byline      | **14 / 400 / normal**                                    | muted       | **20.3** tall                         |
| times       | **12.5 / 400**, tabular-nums                             | muted       | **18.13** tall                        |
| track name  | **15 / 400** (current: **600**)                          | ink / `#0b5a54` | **21.75** tall                   |
| track meta  | **13 / 400** (number: **13 / 600**), tabular-nums        | muted       | **18.84** tall                        |
| speed label | **14 / 600**                                             | ink         | `1×` in the 46 px circle              |
| skip glyph  | **9 / 700**, absolutely centred over a 26 px icon        | ink         | inside the 46 px circle               |

`body` is **Rubik 16 px**; each card sets **15 px / 1.45**, and every role above is a size/weight
override on that. There is **one** family — no display face. Hierarchy is carried by **size, colour,
tracking and the accent switch**, which is why the reference can get away with a single face.

### Contrast (WCAG 2.1, computed from the measured hex values)

| pair                                          | ratio       | verdict |
| --------------------------------------------- | ----------- | ------- |
| podcast ink `#f6f3ff` on `#17151f`            | **16.49:1** | AAA |
| podcast muted `#b9b4c9` on `#17151f`          | **8.97:1**  | AAA |
| podcast eyebrow `#ffb27a` on `#17151f`        | **10.23:1** | AAA |
| album ink `#1d2422` on `#fffdf8`              | **15.56:1** | AAA |
| album muted `#56625e` on `#fffdf8`            | **6.25:1**  | AA  |
| album accent `#0f766e` on `#fffdf8`           | **5.38:1**  | AA  |
| current track `#0b5a54` on `#e6f4f1`          | **7.13:1**  | AAA |
| white icon on the teal disc `#0f766e`         | **5.47:1**  | AA  |
| cover title white on `#3a0ca3` (top of art)   | **11.92:1** | AAA |
| cover title white on `#b5179e` (bottom)       | **5.86:1**  | AA  |
| focus ring `#ffb27a` on `#17151f`             | **10.23:1** | AAA |
| focus ring `#0f766e` on `#fffdf8`             | **5.38:1**  | AA  |

Two numbers to respect. **The cover title only clears AA near the top of its gradient** (11.92:1 at
`#3a0ca3`, 5.86:1 at the `#b5179e` end) — it sits in the top ~24 % of a 354 px cover, so it never
reaches the pale end; a port that centres it vertically would put white on `#b5179e`-and-lighter and
drop below 4.5:1. **`#e4ebe8` on `#fffdf8` is 1.19:1** — the album's unfilled bar is decorative only,
which is why the reference also prints the times.

## Behaviour — the only script in the family so far

`js/snippet.js` is a 116-line IIFE with one exported side effect: it queries
`[data-cl-card16-player]` and runs `initPlayer` per match. Everything below is measured by driving the
live page.

**State per card:** `{ playing: false, elapsed, duration, rate: 1 }` plus a `setInterval(tick, 250)`.
`duration` and `elapsed` come from `data-duration` / `data-elapsed` on the section (podcast:
**2538 / 1122**) or, for the album, from the `aria-current` row's `data-duration` (**214**) with
`elapsed` **0**.

**Render** (one function, called on every change): computes
`pct = elapsed / duration × 100` and sets `fill.style.width = pct%`; sets `aria-valuemax`,
`aria-valuenow` (**rounded seconds**) and `aria-valuetext` = `"18:42 of 42:18"` on the bar; writes
elapsed and `"-" + remaining` into the two time spans; sets `aria-pressed`; toggles `.is-playing` on the
card. `fmt` floors minutes and pads seconds (`m:ss`), clamping negatives to 0.

**Tick:** `elapsed += 0.25 × rate` every 250 ms; when `elapsed >= duration`, advance to the next
`aria-current` row if there is one, else clamp `elapsed = duration` and pause.

**Controls**

| control                | handler                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| play/pause (`__play`)  | if paused and finished → `elapsed = 0`; then `setPlaying(!playing)`                        |
| skip back/forward      | `elapsed = clamp(elapsed + data-cl-card16-skip, 0, duration)`, no pause, no reset           |
| speed                  | cycles `RATES = [1, 1.5, 2]` modulo 3 and writes the label `1× / 1.5× / 2×` (U+00D7)       |
| track row              | clicking the **currently playing** row pauses; clicking another row selects it (moves `aria-current`, resets `elapsed = 0`, adopts its `data-duration`) and plays |
| add to queue           | **nothing** — the button has no handler (defect 2)                                         |
| progress bar           | **nothing** — no click handler, `cursor: auto`, not focusable (defect 3)                   |

**Measured live (1,440 px).** Load: `aria-pressed=false`, fill **44.208 %**, `aria-valuenow=1122`,
`"18:42 of 42:18"`, `18:42` / `-23:36`. One click on play, +1.1 s: `pressed=true`, `is-playing`,
`1123`, `"18:43 of 42:18"`, play icon `display:none`, pause icon `display:block`. Three speed clicks
return the label to `1×`. `+30` then reads **1154** (`19:14 of 42:18`). Album, click row 3: `max=198`,
`"0:01 of 3:18"`, `aria-current` on row 3 only, equaliser `display:flex`, row 3's number
`visibility:hidden`, `-3:18` remaining.

**Animation is CSS, driven by one class.** `.is-playing` starts two keyframes: `cl-card16-eq`
(`scaleY(.25) → scaleY(1)`, 0.9 s alternate, −0.3 s and −0.6 s delays on bars 2 and 3) and
`cl-card16-pulse` (`scale(1.12)` at 50 %, 2.4 s ease-in-out, on the **cover's `circle`** only, with
`transform-origin: 150px 104px` — the sun). `.is-playing` is therefore the single switch a React port
must reproduce faithfully; the pauses are part of the look, not decoration.

## Defects found in the reference (the port's deltas list)

1. **The play button's accessible name never changes.** `aria-label="Play"` is static, so while
   `aria-pressed="true"` (i.e. "pause me") the control still announces *"Play"*. The port SHALL swap the
   label to **"Pause"** while playing. Same for the album's 44 px disc.
2. **The "Add to queue" button is dead.** It is a real `<button>` with an icon, a hover state and a focus
   ring, and no handler — the script never queries it. The port SHALL give it a local toggle
   (`aria-pressed`, label swapping to **"Added to queue"**, icon unchanged) rather than ship a control
   that cannot do anything; the visual is identical.
3. **The progress bar looks seekable and is not.** No click handler, `cursor: auto`, not in the tab
   order. **Keep it that way** — the ColorLib feature list calls it a *progressbar with value text*, its
   role is `progressbar`, and there is no audio to seek; making it interactive would change the role to
   `slider` and invent behaviour. Document it, do not "fix" it.
4. **`.cl-card16__progress` is a class with no rule.** It is only a wrapper for the bar and the times.
   Port the two children; no wrapper styles exist to copy.
5. **`data-cl-card16-list` is declared and never read.** It sits on the album `<section>` and no script
   queries it. Drop it.
6. **`.cl-icon` is dead** (declared `height: 1em; width: auto; fill: currentColor`, 0 markup hits) — the
   **8th consecutive card** in this family with the leftover. Do not port it.
7. **The podcast card's `--accent: #ff8a3d` never paints.** The eyebrow overrides it to `#ffb27a`, the
   fill overrides it to a gradient, the equaliser is album-only, and the focus ring is hard-coded
   `#ffb27a`. It is a live custom property on the card and a dead value. Keep the token only if the port
   gives it a job; otherwise do not declare it.
8. **2 px of horizontal scroll at 240 px.** `scrollWidth 242` vs `clientWidth 240` — the controls have
   compressed as far as they go. The port SHALL hold `scrollWidth === clientWidth` down to **240**
   (e.g. `min-width: 0` on the shrinkable controls). Nothing above 260 overflows in the reference.
9. **The bold weights are synthetic.** All eight `woff2` files are two files repeated across 400/500/600/700,
   so 600 and 700 are the 400 outlines with browser-synthesised emboldening (**379 → 398 px** on the same
   string). The port SHALL load **real** Rubik 400/600/700 and accept that its bold is ~5 % narrower.
10. **`.cl-card16__num` and `.cl-card16__eq` occupy the same grid cell** (`grid-column: 1; grid-row: 1`)
    and swap via `visibility` / `display`. That is the mechanism that lets the number become an
    equaliser without moving the name — port the overlap, not a flex row.
11. **The album's `<h2 id>` is referenced by `aria-labelledby`** and the podcast's too, but the page has
    **no `h1` at all**. A page with 0 `h1` is an a11y fail in this repo; the port adds one visually
    hidden `h1` ("Audio players"), which changes no pixel.
12. **The sheet styles the host `body`.** `body { margin: 0; background: #ebe5da; font-family: Rubik… }`
    belongs to the demo page, not to a card. In the port the ground and the font stack live in the app
    shell.

## Requirements

### Requirement 1: Page shell and warm ground

The app SHALL render a single `<main>` on the ground `#ebe5da` with `display: flex;
justify-content: center; padding: clamp(32px, 6vw, 80px) 16px`, containing one row and one attribution
line, and SHALL NOT force a viewport height.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1,440 × 900 viewport
- **WHEN** the app has rendered
- **THEN** the content SHALL measure **805.77** px tall (`80 + 645.77 + 80`) and the document **900**
  only because the viewport is taller — there is **no** `min-height: 100vh` in the reference
- **AND** at 700 the document SHALL be **1,446**, at 390 **1,162**, at 320 **1,122** and at 300 **1,188**
- **AND** `main` padding SHALL be **80 / 16** at 1,440, **38.16 / 16** at 636, **32 / 16** at 390 and
  below (the `clamp(32px, 6vw, 80px)` floor is reached at **533.33** px)

#### Scenario: No horizontal scroll at any usable width

- **GIVEN** the page at 240 / 260 / 280 / 300 / 320 / 340 / 360 / 390 / 412 / 430 / 480 / 520 / 600 /
  620 / 636 / 700 / 735 / 736 / 768 / 820 / 900 / 992 / 1,024 / 1,200 / 1,440
- **WHEN** `window.scrollTo(600, 0)` runs
- **THEN** `scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** the port SHALL hold that at 240, where the reference overflows by **2 px** (defect 8)

### Requirement 2: One row, two cards, top-aligned

The row SHALL be `display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
align-items: start; gap: 24px; width: 100%; max-width: 820px` with **no** media query, column breakpoint
or JS measurement.

#### Scenario: 820 is the cap, not 1,140

- **GIVEN** a 1,440 px viewport
- **WHEN** the row is measured
- **THEN** it SHALL be **820** wide at **x 310**, with **310 px** of ground each side
- **AND** the tracks SHALL measure **398 / 398** and the cards **398** wide at x **310** and **732**

#### Scenario: Two columns down to 736, one below

- **GIVEN** the row inside its 16 px page padding
- **WHEN** the viewport is swept one pixel across the threshold
- **THEN** there SHALL be **2 columns at 736** with tracks exactly **340.00**, and **1 column at 735**
  (a single **703** track)
- **AND** the threshold SHALL fall out of the arithmetic (`2 × 340 + 24 = 704` grid width) — not a
  `md:`/`lg:` utility

#### Scenario: The album does not stretch

- **GIVEN** two cards of unequal content height
- **WHEN** the row is measured at 1,440
- **THEN** the podcast SHALL be **645.77** tall and the album **448.02**, both starting at y **80**
- **AND** the step between their bottoms SHALL be **197.75** px, because `align-items: start` prevents
  the grid's default stretch
- **AND** the album's height SHALL be content-driven — **468.31** at 412, **498.31** at 340,
  **537.45** at 300 — never a fixed value

### Requirement 3: The shared card shell

Each card SHALL be a `<section aria-labelledby>` with `padding: 22px`, `border-radius: 28px`,
`box-shadow: 0 30px 60px -30px rgba(23,21,31,.6)`, base **15 px / 1.45**, and its own surface/ink/muted/
accent values: podcast `#17151f` / `#f6f3ff` / `#b9b4c9` / `#ff8a3d`; album `#fffdf8` / `#1d2422` /
`#56625e` / `#0f766e`.

#### Scenario: Radius, padding and shadow match on both cards

- **GIVEN** the two cards at 1,440
- **WHEN** their computed styles are read
- **THEN** both SHALL have `border-radius: 28px`, `padding: 22px` and the same shadow
- **AND** their heights SHALL differ only because their content does (645.77 / 448.02)

### Requirement 4: The podcast cover

The cover SHALL be a `position: relative; overflow: hidden; border-radius: 20px; aspect-ratio: 1` block
filling the card's content width, painted with `linear-gradient(160deg, #3a0ca3, #7209b7 60%, #b5179e)`
and containing (a) an authored inline SVG scene on a `0 0 200 200` viewBox — a **`#ffd166` circle at
cx 150, cy 104, r 28** and two wave paths in `#ef476f` at `opacity=".85"` and `#7b2cbf` — and (b) the
show's name in a `position: absolute; top: 20px; left: 22px` span.

#### Scenario: The cover is square and the art is authored, not copied

- **GIVEN** the podcast card at 1,440
- **WHEN** the cover is measured
- **THEN** it SHALL be **354 × 354** at x **332**, y **102** — equal to the card's content width
- **AND** at 390 it SHALL be **314 × 314**, and at 320 **244 × 244**
- **AND** the cover SHALL contain **no `<img>`** (the page has **0** images): the art SHALL be re-authored
  SVG with the measured circle and two wave paths, and the sun circle SHALL be a real `<circle>` element
  because the playing animation targets it
- **AND** the cover SHALL be `aria-hidden="true"` — its text duplicates the byline

#### Scenario: The title overlay is clamped and top-left

- **GIVEN** the cover at 1,440
- **WHEN** the overlay is measured
- **THEN** it SHALL be **203.69 × 83.59** at x **354**, y **122** with **44 px / 41.8 line-height**
  (two lines from `The Long<br>Commute`), `letter-spacing: −1.76px` (**−.04em**), weight **700**, white
- **AND** at 390 it SHALL be **30 px** on the clamp floor (`6vw = 23.4`, so every viewport below
  **500** renders 30 px — `30 / 0.06 = 500`)
- **AND** it SHALL stay in the top **~24 %** of the cover so the white text never sits on the pale end of
  the gradient (contrast: 11.92:1 at the top, 5.86:1 at the bottom)

### Requirement 5: The podcast head copy

Below the cover the card SHALL render, inside a block with `margin: 20px 0 16px`: an amber `<p>`
eyebrow, an `<h2>` title, and a muted `<p>` byline.

#### Scenario: The three lines carry the episode's identity

- **GIVEN** the rendered podcast card
- **WHEN** the copy is read
- **THEN** the eyebrow SHALL read **"Episode 84 · 42 min"** (middle dot **U+00B7**) at **13 / 600 /
  .04em** in **`#ffb27a`** — a different amber from the card's declared `#ff8a3d`
- **AND** the `h2` SHALL read **"Why cities are planting forests on rooftops"** at **21 / 700 /
  −.01em / 1.25** in `#f6f3ff`, measuring **354 × 52.5** — **two** rendered lines of 26.25
- **AND** the byline SHALL read **"The Long Commute · with Priya Nair"** at **14 / 400** in `#b9b4c9`,
  **20.3** tall
- **AND** the block SHALL measure **354 × 99.64** at y **476** (**20** below the cover's 456 bottom)

### Requirement 6: Progress, times and the fill

Each card SHALL render a **6 px** bar (`border-radius: 999px`, `overflow: hidden`) inside an unstyled
wrapper, followed by a two-span row at `margin-top: 6px` with `justify-content: space-between` and
`font-variant-numeric: tabular-nums`.

#### Scenario: The podcast loads mid-episode, not at zero

- **GIVEN** the podcast with `duration = 2538` and `elapsed = 1122`
- **WHEN** the page has rendered
- **THEN** the fill SHALL be **156.48 px** wide inside the 354 px bar, i.e. **44.208 %**
- **AND** `role="progressbar"` SHALL carry `aria-label="Episode progress"`, `aria-valuemin="0"`,
  `aria-valuemax="2538"`, `aria-valuenow="1122"` and `aria-valuetext="18:42 of 42:18"`
- **AND** the labels SHALL read **`18:42`** and **`-23:36`** — remaining is the duration minus elapsed,
  printed with a leading hyphen and **unpadded minutes**
- **AND** the fill SHALL be the **90° `#ffb27a → #ff5f8f`** gradient, not the card accent

#### Scenario: The album starts at zero on track one

- **GIVEN** the album with track 1 current (`data-duration="214"`)
- **WHEN** the page has rendered
- **THEN** the fill SHALL be **0** wide, `aria-valuemax="214"`, `aria-valuenow="0"`,
  `aria-valuetext="0:00 of 3:34"`, and the labels **`0:00`** / **`-3:34`**
- **AND** the bar's track colour SHALL be **`#e4ebe8`** (1.19:1 on the cream surface — decorative, hence
  the printed times)
- **AND** the fill SHALL be **teal `#0f766e`** — the podcast's gradient override SHALL NOT apply

#### Scenario: The bar is read-only

- **GIVEN** a rendered card
- **WHEN** the bar is clicked at 80 % of its width and the keyboard tab order is read
- **THEN** `aria-valuenow` SHALL be unchanged by the click and the bar's computed `cursor` SHALL be
  `auto`
- **AND** the bar SHALL NOT appear in the tab order (defect 3: progressbar, not slider)

### Requirement 7: The transport row

The podcast SHALL render exactly five buttons in a `display: flex; align-items: center;
justify-content: space-between; gap: 8px; margin-top: 14px` row: speed (`1×`), back 15, play/pause,
forward 30, add to queue.

#### Scenario: Fixed sizes, circles, space-between

- **GIVEN** the transport at 1,440
- **WHEN** the row and its children are measured
- **THEN** the row SHALL be **354 × 68** at y **635.77** and the buttons **46 / 46 / 68 / 46 / 46**
  wide at x **332 / 403.5 / 475 / 546.5 / 618** — all `border-radius: 50%`, `border: 0`,
  `background: transparent` except the play disc
- **AND** the play disc SHALL be **68 × 68**, background **`#fff`**, icon **`#17151f`**, shadow
  `0 10px 24px -8px rgba(255,138,61,.6)`, and SHALL scale to **1.05** on hover and **0.95** on
  `:active` over `0.15 s`
- **AND** the icon buttons SHALL show `rgba(255,255,255,.1)` on hover over `0.2 s`
- **AND** the skip glyphs SHALL be **9 / 700** numerals absolutely centred over a **26 × 26**
  `stroke-width: 1.8` icon; the queue icon SHALL be **22 × 22**

#### Scenario: Every control is labelled

- **GIVEN** the transport
- **WHEN** the accessibility names are read
- **THEN** the speed button SHALL expose **"Playback speed 1×"** (visible-sr text plus the label), the
  skips **"Back 15 seconds"** / **"Forward 30 seconds"**, the queue button **"Add to queue"**, and the
  play disc **"Play"** / **"Pause"** matching `aria-pressed`
- **AND** each SHALL have a **3 px** focus ring at **2 px** offset in **`#ffb27a`** on the podcast and
  **`#0f766e`** on the album

### Requirement 8: The album head

The album SHALL render a `display: flex; gap: 18px; align-items: center; margin-bottom: 16px` head
containing a **120 × 120** `flex: none` cover (radius 16, `linear-gradient(180deg, #14b8a6, #5eead4 55%,
#fde68a)`, authored SVG: a `#fef3c7` circle at `cx 100 cy 92 r 46` at `opacity=".95"` and two hill paths
in `#0f766e` / `#134e4a`) and a text column.

#### Scenario: The head is 133 px tall by arithmetic

- **GIVEN** the album at 1,440
- **WHEN** the head is measured
- **THEN** it SHALL be **354 × 133.14** at x **754**, y **102**, the cover **120 × 120** at x **754**,
  y **108.56**, and the text column SHALL start at x **892** (120 + 18) and be **200** wide
- **AND** the column SHALL stack eyebrow **18.85** + 4 + title **30** + 4 + byline **20.3** + 12 + play
  **44** = **133.15**
- **AND** the copy SHALL read **"Album · 2026"**, **"Night Swim"** (**24 / 700**) and
  **"Juniper Coast · 5 songs, 19 min"** — the byline wraps to two lines at **412** and drives the card's
  height from 448.02 to 468.31

#### Scenario: The album play disc is accent, not white

- **GIVEN** the album head
- **WHEN** the play button is measured
- **THEN** it SHALL be **44 × 44** at x **892**, y **191.14** (`margin-top: 12`), background
  **`#0f766e`**, icon **white** at **20 × 20**, shadow `0 8px 18px -8px rgba(15,118,110,.8)`
- **AND** it SHALL toggle the same state machine as the podcast disc, with its own clock

### Requirement 9: The track list

The album SHALL render an `<ol>` of **five** `<li>` rows, each containing one `<button>` at
`display: grid; grid-template-columns: 22px 1fr auto; gap: 12px; padding: 10px 12px;
border-radius: 12px; text-align: left; width: 100%`.

#### Scenario: Five rows, four cells, one current

- **GIVEN** the album at 1,440
- **WHEN** the list is measured
- **THEN** the `<ol>` SHALL be **354 × 208.75** at y **251.14** (`margin-bottom: 16`) and each row
  **354 × 41.75**
- **AND** the number cell SHALL be **22** wide (**13 / 600** muted, tabular), the name column **257**
  (`15 / 400`, ellipsis when it overflows) and the length **27** (**13 / 400** muted, tabular)
- **AND** exactly **one** row SHALL carry `aria-current="true"` on load: **row 1**
- **AND** the rows SHALL read, in order: **Low Tide Lights 3:34** (`214`), **Salt in the Radio 4:11**
  (`251`), **Harbour Cats 3:18** (`198`), **Swimming After Midnight 4:36** (`276`),
  **Postcards (Reprise) 3:23** (`203`) — **1,142 s = 19:02**, which is the byline's "19 min"

#### Scenario: Current and hover are different colours

- **GIVEN** a rendered row
- **WHEN** it is hovered
- **THEN** a non-current row SHALL paint **`#f1f5f3`**, and the current row SHALL keep
  **`#e6f4f1`** with text **`#0b5a54`** and weight **600**
- **AND** the current row's background SHALL NOT change on hover
- **AND** transitions SHALL be `background-color .2s ease`

#### Scenario: The number becomes an equaliser in place

- **GIVEN** the number span and the equaliser block
- **WHEN** their grid placement is read
- **THEN** both SHALL occupy **column 1 / row 1** — the equaliser is not a new column
- **AND** the equaliser SHALL be `display: none` until `.is-playing`, then `display: flex` with three
  **3 px** bars in `--accent`, `gap: 2px`, **14 px** tall, `transform-origin: bottom`
- **AND** while playing, the current row's number SHALL be `visibility: hidden` and the equaliser visible

### Requirement 10: Play and pause

Playback SHALL be simulated: a `setInterval` of **250 ms** that adds **`0.25 × rate`** seconds, with
`aria-pressed` and a single `.is-playing` class as the only outward signals.

#### Scenario: The toggle flips state, icon and label

- **GIVEN** the podcast paused at 1122 s
- **WHEN** the play disc is activated
- **THEN** `aria-pressed` SHALL become `"true"`, the card SHALL gain `.is-playing`, the pause icon
  SHALL replace the play icon (**the swap is CSS: `[aria-pressed="true"] .i-play { display: none }`**),
  and the accessible name SHALL become **"Pause"** (defect 1)
- **AND** after **1 s** the elapsed label SHALL have advanced by **1 s** and `aria-valuenow` by **1**
- **AND** a second activation SHALL pause the clock and leave `elapsed` where it stopped

#### Scenario: Finishing resets rather than sticks

- **GIVEN** a card whose `elapsed` has reached `duration`
- **WHEN** the play disc is activated
- **THEN** `elapsed` SHALL restart from **0** and play from there
- **AND** the last track of the album, on reaching its duration, SHALL clamp to the end and pause
  (`aria-pressed="false"`), while any earlier track SHALL advance to the next row and keep playing

#### Scenario: Playback is not real audio

- **GIVEN** the rendered app
- **WHEN** the document is scanned
- **THEN** there SHALL be **no** `<audio>`, `<video>` or media element, and **no** network request for
  media — the clock is the whole feature
- **AND** the interval SHALL be cleared on unmount (no leaked timer across re-renders)

### Requirement 11: Skip and speed

The skip buttons SHALL add **−15** and **+30** seconds clamped to `[0, duration]` without pausing or
resetting, and the speed button SHALL cycle **1 → 1.5 → 2 → 1**.

#### Scenario: Skips clamp and never pause

- **GIVEN** the podcast at 1122 / 2538
- **WHEN** `+30` is activated
- **THEN** `aria-valuenow` SHALL be **1154** and the value text **"19:14 of 42:18"**, with playback
  state unchanged
- **AND** skipping back from **0:03** by **15** SHALL land on **0**, and skipping forward by **30** at
  **2520** SHALL land on **2538**, not beyond it

#### Scenario: The rate cycles through three states and wraps

- **GIVEN** a fresh card showing `1×`
- **WHEN** the speed button is activated three times
- **THEN** the label SHALL read **`1.5×`**, then **`2×`**, then **`1×`** (multiplication sign
  **U+00D7**, not the letter x)
- **AND** at **2×** the elapsed clock SHALL advance **0.5 s** per 250 ms tick, i.e. twice real time —
  the rate multiplies the simulated clock, not the interval

### Requirement 12: Track selection and auto-advance

Selecting a row SHALL move `aria-current`, adopt that row's duration, reset `elapsed` to **0** and start
playing; selecting the row that is already playing SHALL pause it.

#### Scenario: Row 3 becomes the current track

- **GIVEN** the album playing track 1
- **WHEN** row 3 ("Harbour Cats", `198`) is activated
- **THEN** `aria-current="true"` SHALL be on row 3 **only**, the bar's `aria-valuemax` SHALL become
  **198**, and after ~600 ms the value text SHALL read **"0:01 of 3:18"** with **`-3:18`** remaining
- **AND** the equaliser SHALL be visible on row 3 and hidden on every other row
- **AND** the album's own play disc SHALL show `aria-pressed="true"` and the pause icon

#### Scenario: Clicking the playing row pauses it

- **GIVEN** the album playing row 1
- **WHEN** row 1 is activated
- **THEN** playback SHALL pause, `aria-current` SHALL stay on row 1, and `elapsed` SHALL be preserved

#### Scenario: A finished track rolls on

- **GIVEN** track 4 playing near its end
- **WHEN** the clock passes its duration
- **THEN** track 5 SHALL become current, `elapsed` SHALL reset to 0 and playback SHALL continue
- **AND** the same rule SHALL apply to the podcast: with no track list it clamps and pauses at the end

### Requirement 13: Reduced motion

`prefers-reduced-motion: reduce` SHALL stop the two keyframe animations and all four transitions, and
SHALL leave every other computed value identical.

#### Scenario: Nothing moves, everything still reads

- **GIVEN** the album playing a track with reduced motion emulated
- **WHEN** the equaliser and the fill are inspected
- **THEN** `animation-name` on the equaliser bars SHALL be **none** and the second bar SHALL take
  `transform: scaleY(.6)` so the three bars still read as a static meter
- **AND** the cover sun's `animation-name` SHALL be **none**
- **AND** `transition-duration` on `.fill`, `.play`, `.track`, `.skip` and `.speed` SHALL be **0s**

### Requirement 14: Accessibility and page furniture

The page SHALL expose one heading level-1, two level-2, and a fully labelled control set; the app SHALL
also carry the repo's Component Dock attribution line.

#### Scenario: The heading outline starts at h1

- **GIVEN** the rendered page
- **WHEN** the heading outline is read
- **THEN** there SHALL be exactly **1 `h1`** — visually hidden, naming the page ("Audio players"), since
  the reference has **0 `h1`** (defect 11) — and exactly **2 `h2`** (the episode and album titles)
- **AND** each card SHALL be a `<section>` labelled by its `h2` via `aria-labelledby`

#### Scenario: The tab order matches the visual order

- **GIVEN** the page at 1,440
- **WHEN** Tab is pressed from the document start
- **THEN** focus SHALL pass through **11** stops: speed, back 15, play, forward 30, queue, then the
  album play disc, then the five track rows — the same order the reference produces
- **AND** every stop SHALL be a native `<button>` with a visible `:focus-visible` ring
- **AND** the page SHALL contain **0** `<a>`, **0** `a[href="#"]` and **0** `<img>`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

## Adapting to the repo (deltas the implementer owns)

| reference                                            | in `apps/tonearm`                                                                 |
| ---------------------------------------------------- | --------------------------------------------------------------------------------- |
| `.cl-card16*` class names                             | Tailwind utilities; **no** `cl-` class names anywhere                              |
| 6 `@font-face` + 8 `woff2` (2 unique files)           | one Google Fonts `<link>`: `family=Rubik:wght@400;600;700&display=swap` — **real** weights, not the reference's synthetic bold (defect 9) |
| `body { background:#ebe5da; font-family:Rubik… }`     | app shell: ground token + `font-sans` on the wrapper; no `body` styles from a card |
| `.cl-icon` (dead)                                     | drop (defect 6)                                                                   |
| `data-duration` / `data-elapsed` attributes            | typed fields in `data.ts`, passed to a `usePlayer` hook                            |
| `data-cl-card16-player` opt-in                        | two hook instances, one per card — independent clocks, no shared context           |
| `.is-playing` class toggling                          | the same single class (or a `data-playing` attribute) — the CSS keyframes key off it |
| inline SVG cover art (200 × 200 viewBox)              | re-authored SVG components (`PodcastCover`, `AlbumCover`) with the measured shapes and palette; **no `<img>`**, no picsum (this design has no photography) |
| `.cl-card16__num` / `__eq` sharing a grid cell        | keep the overlap: both children `col-start-1 row-start-1`, swapping by visibility/display |
| `style.width = pct%` written by script                | `style={{ width: pct + '%' }}` from state — the port renders, it does not mutate DOM |
| no footer                                             | one Component Dock attribution line under the row, centred                         |
| 0 `h1`                                               | one visually hidden `h1` (defect 11)                                              |
| dead "add to queue"                                   | real toggle with `aria-pressed` and an "Added to queue" label (defect 2)           |

`src/index.css` `@theme` tokens to declare (exact measured values):

```css
--color-ground:        #ebe5da;
--color-night:         #17151f;
--color-night-ink:     #f6f3ff;
--color-night-muted:   #b9b4c9;
--color-night-track:   rgb(255 255 255 / 0.16);
--color-amber:         #ffb27a;
--color-amber-deep:    #ff8a3d;
--color-rose:          #ff5f8f;
--color-cream:         #fffdf8;
--color-cream-ink:     #1d2422;
--color-cream-muted:   #56625e;
--color-cream-track:   #e4ebe8;
--color-teal:          #0f766e;
--color-teal-ink:      #0b5a54;
--color-teal-row:      #e6f4f1;
--color-row-hover:     #f1f5f3;
--font-sans:           "Rubik", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
--radius-card:         28px;
--radius-cover:        20px;
--radius-cover-sm:     16px;
--radius-row:          12px;
--shadow-card:         0 30px 60px -30px rgb(23 21 31 / 0.6);
--shadow-play:         0 10px 24px -8px rgb(255 138 61 / 0.6);
--shadow-play-sm:      0 8px 18px -8px rgb(15 118 110 / 0.8);
```

Data shape the tests should pin:

```ts
type Podcast = {
  eyebrow: string; title: string; byline: string;
  duration: number; elapsed: number;          // 2538, 1122
  cover: { lines: [string, string]; art: 'podcast' };
};
type Album = {
  eyebrow: string; title: string; byline: string;
  cover: { art: 'album' };
  tracks: { n: number; name: string; length: string; duration: number }[]; // 5 rows
};
```

**Suggested component split:** `App.tsx` (ground + row + footer), `components/PodcastCard.tsx`,
`components/AlbumCard.tsx`, `components/Transport.tsx`, `components/ProgressRow.tsx`,
`components/TrackList.tsx`, `components/covers/PodcastCover.tsx` + `AlbumCover.tsx`,
`components/icons.tsx` (play, pause, back-15, forward-30, queue — from `lucide-react` where the shape
matches, else authored SVG), `hooks/usePlayer.ts`, `data.ts`, `components/PageFooter.tsx`.

**Coverage notes.** This is the family's first **stateful** template, so the tests are the design:
`vi.useFakeTimers()` + `advanceTimersByTime(1000)` for the clock; assert the exact
`aria-valuenow`/`aria-valuetext` strings after play, ±skip, speed cycle and track selection; assert
auto-advance by driving track 4 past `duration`; assert the last track clamps and pauses; assert
`aria-pressed` and the label swap together; assert the interval is cleared on unmount. Keep the equaliser
and the icon swap as **class/attribute** assertions (jsdom has no layout, no keyframes). Every branch of
`usePlayer` (clamp low, clamp high, wrap, advance, stop, reset-at-end) needs a scenario or an `istanbul
ignore`-free path to keep 100 % lines/branches.

## Verification checklist

- [ ] `apps/tonearm` exists, package `@free-react-templates/tonearm`, `public/CNAME` =
      `tonearm.free.componentdock.com`, `"homepage"` = `https://tonearm.free.componentdock.com`
- [ ] `grep -ri 'colorlib\|card-16\|Card V16\|cl-card16' apps/tonearm` → **no matches**
- [ ] page: `#ebe5da` ground, `main` padding **80 / 16** at 1,440 and **32 / 16** at 390, content height
      **805.77**; **no** `min-height: 100vh`
- [ ] row: `repeat(auto-fit, minmax(min(100%, 340px), 1fr))`, `gap: 24`, `align-items: start`,
      `max-width: 820`; **820 / x 310** at 1,440 with tracks **398 / 398**
- [ ] threshold: **2 columns at 736** (tracks exactly **340.00**), **1 column at 735** (**703**)
- [ ] cards: radius **28**, padding **22**, base **15 / 1.45**, shadow `0 30px 60px -30px
      rgba(23,21,31,.6)`; podcast `#17151f` **645.77** tall, album `#fffdf8` **448.02** tall, both at
      y **80** with a **197.75** step
- [ ] podcast cover: **354 × 354** at x 332, y 102, radius **20**, `160deg` violet gradient, authored
      SVG with the **r 28 sun at cx 150 / cy 104** and two waves; title overlay **44 / 41.8 / −.04em**
      at `top: 20; left: 22`, **30 px** floor below 500; `aria-hidden`
- [ ] podcast head: eyebrow **13 / 600 / .04em `#ffb27a`**; `h2` **21 / 700 / −.01em / 1.25**,
      **52.5** tall (2 lines); byline **14 / 400 `#b9b4c9`**; block margins **20 / 16**
- [ ] podcast bar: **6 px**, radius **999**, track `rgba(255,255,255,.16)`, fill **44.208 %** in a
      `90deg #ffb27a → #ff5f8f` gradient; `role="progressbar"` with
      `aria-label="Episode progress"`, `max 2538`, `now 1122`, `valuetext "18:42 of 42:18"`; labels
      **`18:42` / `-23:36`**, **12.5** tabular
- [ ] transport: **354 × 68** at y **635.77**, five buttons **46 / 46 / 68 / 46 / 46** at x
      **332 / 403.5 / 475 / 546.5 / 618**, `gap: 8`; play disc white **68**, icon `#17151f`, hover
      **1.05**, active **0.95**, skip glyph **9 / 700** over **26 px** icons, queue icon **22**
- [ ] album head: **354 × 133.14**, cover **120 × 120** radius **16**, teal gradient + authored SVG,
      text column at x **892 / 200** wide, eyebrow `#0f766e`, title **24 / 700**, play **44** at
      y **191.14**
- [ ] tracks: `<ol>` **354 × 208.75**, five rows **354 × 41.75**, radius **12**, `10px 12px`,
      grid **22 / 1fr / auto** with `gap: 12`; names **21.75** tall, meta **13**;
      copy + durations exactly as the reference (1,142 s total); row 1 `aria-current="true"`
- [ ] row states: hover `#f1f5f3`, current `#e6f4f1` / `#0b5a54` / **600**; equaliser three **3 px**
      bars in the accent, **14** tall, `gap: 2`, number hidden while playing
- [ ] behaviour: play → `aria-pressed="true"`, `.is-playing`, icon swap, **+1 s / 1 s**; pause holds;
      `+30` → **1154** / `"19:14 of 42:18"`; skips clamp at **0** and at **2538**; speed
      **1.5× → 2× → 1×** with **U+00D7**; row 3 → `max 198`, **`0:01 of 3:18`**, **`-3:18`**;
      clicking the playing row pauses; track 4 → track 5 auto-advance; last track clamps and pauses
- [ ] a11y: **1** hidden `h1`, **2** `h2`, **11** focusable buttons in the reference's tab order, labels
      **"Play" / "Pause"** switching with `aria-pressed` (defect 1), queue toggling to
      **"Added to queue"** (defect 2), bar read-only and out of the tab order (defect 3), **0** `<a>`,
      **0** `<img>`, **0** media elements
- [ ] motion: `.is-playing` starts `cl-card16-eq` (0.9 s alternate, −0.3 / −0.6 s delays) and
      `cl-card16-pulse` (2.4 s, `scale(1.12)` at 50 %) on the **cover's circle**; reduced motion →
      `animation: none`, second bar `scaleY(.6)`, all transitions **0s**
- [ ] no horizontal scroll: `scrollTo(600,0) → scrollX 0` at 240 / 260 / 300 / 320 / 340 / 390 / 430 /
      480 / 520 / 620 / 636 / 700 / 735 / 736 / 768 / 820 / 900 / 1,024 / 1,440 (the reference's 2 px at
      240 fixed)
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app tonearm` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-tonearm --type spec` is valid
