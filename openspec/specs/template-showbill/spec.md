# Template: Showbill (Event cards — three city-listings cards with an overlapping date leaf, attendee faces and a perforated ticket stub)

## Purpose

A **single-screen events desk**: one line of head copy over a **three-across row of event
cards**, each card a white 20 px-radius panel on a warm paper ground (`#f5f3ef`) holding a
**photograph, a white date leaf hanging off the photo's bottom edge, a colour-coded category
eyebrow, the event title, two icon-led fact rows, an overlapping attendee cluster, and a
perforated ticket stub** printing the price beside an **Add to calendar** button that builds a
real `.ics` file in the browser and downloads it.

- **Source slug:** `card-11`
- **ColorLib page:** https://colorlib.com/wp/template/card-11/ — **HTTP 200, 113,531 B**,
  `<title>` `Card V11 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V11"**, authoritative
  description *"Event cards with a photo, an overlapping date badge, category, time, venue and
  attendee count, above a ticket-style…"*, "Author: Colorlib", "Released: September 2026",
  "License: CC BY 3.0", `datePublished` **2026-09-25T15:33:13+00:00**, claims *"the download is
  408 KB"* (measured **417,861 B** ✓), and links **"previous post: Card V10" / "next post: Card
  V12"** (the family runs to `card-20`).
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-11/ —
  **HTTP 200, 6,522 B**, `<title>` `Card V11 | Colorlib`, `lang="en"`, **one** stylesheet, **one**
  script. The slug-only path `theme/card-11/` is **404 (9 B)**; `theme/bb/card-11/` is **404 (9 B)**.
  This is the `bootstrap/` prefix ladder this family always uses, not a dead preview.
- **Design category:** Card (events / city listings). Eleventh of the **`card` snippet family**
  (`card-01` … `card-20`, 20 variants) in the **214 snippet variants** of `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/showbill`,
  package `@free-react-templates/showbill`, CNAME `showbill.free.componentdock.com`.

**What this design is.** A *listings* card, not a product card: the photograph is evidence, the
**date leaf is the product**, and the stub at the bottom is the transaction. Everything above the
dashed rule answers "what is it, when, where, who is going"; everything below it answers "how much,
and put it in my calendar". That split is drawn with a **2 px dashed rule plus two punched
semicircles** in the page colour, so the stub reads as a tear-off ticket.

**The one real behaviour.** The page has **one script, 2,269 B, and it is an `.ics` generator**: on
click it assembles `BEGIN:VCALENDAR … END:VCALENDAR` from the card's `data-*` attributes, wraps it in
a `Blob`, clicks a temporary `<a download="<slug>.ics">`, then flips the button to a green
**"Saved to calendar"** state and writes a sentence into a `role="status"` line under the grid.
Verified live: the download arrives as **311 bytes, 11 CRLF breaks, 0 bare LF**, and a comma inside
`LOCATION` is escaped to `\,`.

**The parts a careless port flattens** (each measured here, each expanded below):

- **The media band is *not* 16:9** although `aspect-ratio: 16/9` is written on it. The `<img>` carries
  `width="700" height="440"` and `height: 100%`, so the band renders at **1.5909:1** — **232.97 px**
  at a 370.66 px track, not the 208.49 px the declared ratio predicts. Following the sheet gives a
  media band **24.5 px short** at 1440 and every downstream `y` moves.
- **The stub wraps at a different width on every card**, because the price label shares the row with
  a **173 px fixed button**: at the 1,024 px / three-column width card 3 overflows the row and card 1
  misses it by **0.34 px** (`173 + 86 + 12 = 271` against `370.66… → 270.66` of content), so two of
  the three stubs wrap and the grid row height is set by them.
- **The visible venue is not the calendar's venue.** The fact row prints the *neighbourhood*
  ("Centro de Congressos, Belém") while `data-location` — the value written into the `.ics` — prints
  the *city* ("Centro de Congressos, Lisbon"). They are deliberately different strings. Syncing them
  is the easiest way to lose the design's only piece of information architecture.
- **Two price shapes and two count shapes** in three cards: `From €180` / `From €28` (label, then
  figure) against `€45 incl. coffee` (figure, then label), and `412 going` / `1,280 going` against
  `9 of 12 places taken`. One card carries the yellow **Few tickets left** flag; two do not.
- **The type hierarchy has no `font-bold`.** Archivo arrives as **two binaries carrying four
  instances (400 / 500 / 600 / 800)**; requesting 700 returns the 800 instance, so a Tailwind
  `font-bold` collapses 600 and 800 into one weight and the hierarchy inverts.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,890** rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-11` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that gap
are all prepped. Snippet families are worked **in family order, then variant number**.

The family section **`## Bootstrap Cards (20)` already exists on main at line 733** and at this prep's
commit carried **four** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo,
`Card 04` → tierline (lines 735–738). This design's row goes **directly after the last card row
present** when the implementer ships it:

```markdown
- [x] **Card 11** — [colorlib](https://colorlib.com/wp/template/card-11/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-11.jpg) · [showbill](https://showbill.free.componentdock.com)
```

(`Card 05` … `Card 10` are prepped-and-unbuilt as this run lands, so the section gains rows out of
order until those ship — the implementer stream owns that batch edit, not this prep run. Another
stream shipped `Card 04` → tierline while this prep was being written, which is why the count moved
from three to four mid-run.)

**The name.** `showbill` — one lowercase word: a showbill is the poster that bills a venue's upcoming
shows, which is exactly what three event cards are. It is in no app folder, no spec folder, and
`git grep -il showbill origin/main` returns **0** files (the substring test this pipeline uses); the
ColorLib catalogue URLs `colorlib.com/wp/template/showbill/`, `preview.colorlib.com/theme/showbill/`,
`preview.colorlib.com/theme/bootstrap/showbill/` and `preview.colorlib.com/theme/bb/showbill/` all
return **404**. `playbill` was measured free too and passed over on purpose: it is a well-known
theatre-magazine brand. Other alternates measured free the same day (0 substring hits, no `apps/` or
spec folder), if a later variant needs one: `whatson`, `eventslate`, `datemark`, `nightbill`. Do
**not** reuse the family's taken names `nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`,
`statline`, `lodgerow`, `roadbook`, `lexeme`, `coffer`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 6,522 B** live (`6,213 B` inside the archive), `<title>` "Card V11 \| Colorlib", `lang="en"`, **one** stylesheet, **one** script |
| preview path      | **`theme/bootstrap/card-11/`**; the directory URL is the page. `theme/card-11/` **404** (9 B), `theme/bb/card-11/` **404** (9 B) |
| stylesheet        | `css/style.css?v=0d07e8f4`, **10,537 B**, 453 lines, sha256 `e0993d6bb0b6f5f036a897f43ec6b8d76d8248604573fd11bea265fac4f4d07b` |
| script            | `js/snippet.js?v=a7e5e3bc`, **2,269 B**, 70 lines, sha256 `fd888548c8b5231978d7e7576d84c4338fba755ab33e159f0fc00e935ca4b209` |
| archive           | `preview.colorlib.com/downloads/free/card-11.zip`, **200, 417,861 B** (= 408 KB ✓ the page's claim), **19 entries**: 5 dirs + `index.html` 6,213 B + `css/style.css` 10,537 B + `js/snippet.js` 2,269 B + `README.md` + **8 `woff2`** + 3 jpg |
| live ↔ archive    | CSS **identical sha256**, JS **identical sha256**, fonts identical; the body markup differs **only** in three `<img>` attributes (`fetchpriority="high" decoding="sync"` ×2, `loading="lazy" decoding="async"` ×1) and three `?v=` cache-busters → **live preview verified; the archive is its un-versioned twin** |
| fonts             | **8** `@font-face` rules — Archivo **400 / 500 / 600 / 800**, `latin` + `latin-ext` — but only **2 distinct binaries**: `archivo-*-latin.woff2` 4× sha256 `7150c0ec…`, `archivo-*-latin-ext.woff2` 4× sha256 `a999e009…` |
| images            | **3** `<img>`, all `width="700" height="440"` (intrinsic **700 × 440** = 1.5909), `alt` text written as a photograph description, `object-fit: cover`. No `<picture>`, no `srcset` |
| CSS size          | **58** rules / **24** distinct `.cl-*` selectors, 1 media query (`prefers-reduced-motion`), **0** `@keyframes`, **0** `@supports`, **0** container queries, **0** column breakpoints |
| classes           | **23** in the markup, **all styled**; **1 dead selector**, `.cl-icon` (**fourth** card in a row: the family declares it and never uses it — measured `document.querySelectorAll('.cl-icon').length === 0`) |
| custom properties | **5**: `--cl-card11-accent` `#1d4ed8`, `--cl-card11-muted` `#525252`, `--cl-card11-paper` `#fff`, `--cl-card11-page` `#f5f3ef` (one consumer: the two notches), `--cl-card11-c` (set inline per attendee face) |
| controls          | **3** `<button>` (one per card), **0 anchors, 0 forms, 0 inputs** → **3 focusable elements**, tab order = card 1 → 2 → 3; first Tab lands on the card-1 button |
| headings          | **1 × `h1`** ("Upcoming in Lisbon") and **3 × `h2`** (the event titles); cards are `<article>`, not `section` |
| blocks            | `<main class="cl-card11-demo">` → `<header>` (h1 + sub) → `<div class="cl-card11-grid">` of 3 `<article class="cl-card11">` → `<p role="status">` (§*status*) |
| content height    | **819.22** at 1,440 (document reads **900** = the viewport, not the content) · 825.89 at 1,024 · **1,292.53** at 768 · **1,815.69** at 390 · **1,903.05** at 320 · **1,929** after a click at 320 |
| horizontal scroll | **none at any width probed** — `documentElement.scrollWidth === clientWidth` at 320 / 360 / 390 / 430 / 520 / 635 / 636 / 640 / 650 / 700 / 768 / 900 / 949 / 950 / 960 / 1,024 / 1,280 / 1,440 |
| screenshot        | `card-11.jpg` **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens it, convert before viewing |

### The cascade fact worth more than the sheet: the media band is 700:440, not 16:9

`.cl-card11__media` declares `aspect-ratio: 16 / 9` and `getComputedStyle` **reports `16 / 9`**, yet
the band measures **1.5909:1 at every width**:

| width | track px | media px (measured) | 16:9 predicts | 700:440 predicts |
| ----: | -------: | ------------------: | ------------: | ---------------: |
| 1,440 |   370.66 |          **232.97** |        208.49 |           232.98 |
| 1,024 |   314.66 |          **197.78** |        176.99 |           197.78 |
|   768 |   356.00 |          **223.77** |        200.25 |           223.77 |
|   390 |   358.00 |          **225.02** |        201.38 |           225.03 |
|   320 |   290.00 |          **182.28** |        163.13 |           182.29 |

The `<img>` is an in-flow child at `width/height: 100%`, so its own intrinsic ratio sets the box's
height and the declared `aspect-ratio` never wins. **Reproduce 232.97 px at a 370.66 px track**
(either keep `width="700" height="440"` semantics with `img { height: auto }` and no ratio, or write
`aspect-ratio: 700 / 440`). A `aspect-[16/9]` utility is a visible fidelity regression.

## Design tokens (measured from `style.css`, 10,537 B, and from `getComputedStyle` at 1440 px)

### Palette — warm paper, one blue accent, three signal colours

| role                | value                        | where                                                                 |
| ------------------- | ---------------------------- | --------------------------------------------------------------------- |
| page ground         | `#f5f3ef`                    | `body` background and `--cl-card11-page`; also the notch fill — **not** a Tailwind step |
| card surface        | `#ffffff`                    | `--cl-card11-paper`                                                   |
| ink                 | `#171717`                    | card text, `h2`, day number, price figure, demo title — **Tailwind `neutral-900`**, exact |
| muted ink           | `#525252`                    | sub-line, weekday, attendee count, price label, demo sub — **Tailwind `neutral-600`**, exact |
| fact ink            | `#404040`                    | `.cl-card11__facts` — **Tailwind `neutral-700`**, exact               |
| accent blue         | `#1d4ed8`                    | `--cl-card11-accent`: category eyebrow, date-leaf month strip, button border + label, hover fill — **Tailwind `blue-700`**, exact |
| status blue         | `#1e40af`                    | the `role="status"` line — **Tailwind `blue-800`**; a *different* blue from the accent, 15 px/600 |
| flag amber          | `#facc15` / `#422006`        | "Few tickets left" pill background / its text — **`amber-400` / `amber-950`** |
| ticket rule         | `#e5e1d8`                    | the 2 px **dashed** `border-top` on the stub — a warm hairline, not a neutral grey |
| done green          | `#15803d` / `#f0fdf4`        | `.is-done` label + border / background — **`green-700` / `green-50`** |
| focus ring (defect) | `#93c5fd`                    | `3px` outline at `2px` offset — **`blue-300`**; **1.80:1 on white, 1.63:1 on the page** (see defect 1) |
| attendee faces      | 8 inline hex per face        | `#2563eb #be185d #047857` · `#7c3aed #c2410c #0e7490` · `#b45309 #4f46e5` — Tailwind `blue-600 pink-700 emerald-700 violet-600 orange-700 cyan-700 amber-700 indigo-600`; white initials on each, 10.5 px/800 |
| card shadow         | `0 1px 2px rgba(0,0,0,.05), 0 16px 36px -24px rgba(0,0,0,.35)` | one declaration, two layers: a 1 px contact shadow plus a wide, heavily negative-spread drop — the reason the card reads as **resting on** paper, not floating |
| leaf shadow         | `0 10px 24px -8px rgba(0,0,0,.35)` | the date leaf only; it is heavier than the card's contact layer so the leaf reads *above* the photo |

Every chromatic value except the two paper tones and `#e5e1d8` is a **stock Tailwind 4 palette step**,
so the theme block needs **no invented ramp**: put `#f5f3ef`, `#e5e1d8` and `#93c5fd`→`#2563eb` in
`@theme` and use `blue-700` / `neutral-*` / `green-*` directly.

### Type — one face, four instances, two binaries, and a weight trap

`font-family: "Archivo", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` on `body`; every
element inherits it. No second face, no mono, no serif, no italic anywhere.

- **8 `@font-face` rules → 2 binaries.** `archivo-400/500/600/800-latin.woff2` are the **same file**
  (sha256 `7150c0ec…`) re-declared at four weights, and the four `-latin-ext` files are one other
  (`a999e009…`). The single binary therefore carries **four discrete instances**, which the canvas
  proves — text at 40 px measures **352 px at ≤ 400, 367 px across 425–500, 374 px across 525–600,
  392 px at ≥ 625**: four buckets, not a continuous ramp.
- **Consequence for the app:** `font-weight: 700` (Tailwind `font-bold`) resolves to the **800
  instance** — identical to `font-extrabold`. The reference uses **800** for the page title, the day
  number, the category eyebrow, the `h2`, the price figure, the flag, the face initials and the month
  strip, and **600** for the button label and the weekday. There is **no 700 anywhere**. Load
  `https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;800` (verified **HTTP 200**) —
  the discrete request reproduces the four buckets — and never reach for `font-bold`.
- **`latin-ext` is dead weight here:** the copy's diacritics (`Marés`, `Armazém`, `Fábrica`) are
  U+00E9 / U+00E1 / U+00E1, all inside the `latin` range `U+0000-00FF`, so half the declared faces
  never contribute a glyph. Do not add a `unicode-range` of your own.

| element            | size / weight / tracking / leading                              | measured at 1440 |
| ------------------ | --------------------------------------------------------------- | ---------------- |
| `h1` (page title)  | `clamp(30px, 4vw, 44px)` / 800 / `-.03em` / `1.05`              | 44 px, 46.2 px box, **1 line** |
| page sub-line      | 16 / 400 / `normal` / `normal`, `margin-top: 8px`, `#525252`     | 16 px |
| month strip        | 12 / 800 / `.12em` / 1, uppercase, white on `#1d4ed8`           | 21 px tall |
| day number         | 28 / 800 / `-.03em` / 1                                         | box **34.33 × 28** |
| weekday            | 12 / 600 / `normal`, `#525252`, `margin-top: 3px`               | — |
| flag pill          | 12.5 / 800 / `normal`, `#422006`                                | **128 × 28.13** |
| category eyebrow   | 13 / 800 / `.08em` / 1.45, uppercase, `#1d4ed8`                 | 1.04 px effective tracking |
| `h2` (event title) | 21 / 800 / `-.02em` / `1.2`, `margin: 4px 0 12px`               | **25.19 px** box, 1 line at 370.66 track |
| fact row           | 15 / 400 / `normal` / 1.45, `#404040`                           | 21.75 px line |
| attendee count     | 14 / 500, `#525252`                                             | 30 px row |
| face initials      | 10.5 / 800 / `-.02em`, white on the face colour                 | 30 × 30 |
| price label        | 14 / 400, `#525252`                                             | 86 / 72 / 112 px per card |
| price figure       | 20 / 800, `#171717`                                             | — |
| button label       | 14.5 / 600, accent on white                                     | button **173 × 43.02** |
| status line        | 15 / 600, `#1e40af`, centred                                    | **22.5 px** reserved (1 line) |

### Radii, decoration, motion

| thing            | value                                                        |
| ---------------- | ------------------------------------------------------------ |
| card             | `20px` (and the `<img>` repeats `20px 20px 0 0` so the photo's own corners are clipped) |
| date leaf        | `14px`; its month strip `14px 14px 0 0`                       |
| button           | `12px`                                                        |
| flag             | `999px`                                                       |
| faces            | `50%`, `2px solid #fff`                                       |
| notches          | `50%`, **20 × 20 px**, `top: -11px`, `left/right: -10px` → exactly half the disc sits outside the card, painting page colour over the dashed rule |
| animation        | **none** — no `@keyframes`, no `[data-animate]`, no observer, no scroll effect, no count-up |
| transition       | **one**: `.cl-card11__cal` `background-color .2s ease, color .2s ease`; `prefers-reduced-motion: reduce` sets it to `none` |
| hover            | **button only** (`background: #1d4ed8`, `color: #fff`). The **card has no hover state** — do not add a lift, a border or a shadow change |

### Layout — one 1160 container, arithmetic columns, no breakpoints

- `main` = `max-width: 1160px; margin: 0 auto; padding: clamp(32px, 6vw, 72px) 16px; color: #171717`.
  Default `box-sizing`, so the **outer** box is 1192 px at 1440 (content box 1160, padding 32).
  Measured: `main` at **x 124, 1192 wide**; the head and grid sit at **x 140, 1160 wide**.
- Head margin-bottom **28px** → the grid starts at **y 171.19** at 1440.
- Grid: `repeat(auto-fit, minmax(290px, 1fr))`, **gap 24px**, no media query, no JS.
  With 16 px side padding the content box is `viewport − 32`, so the column counts are arithmetic:
  **3 columns when content ≥ 918** (`3·290 + 2·24`) → viewport **≥ 950**;
  **2 columns when content ≥ 604** (`2·290 + 24`) → viewport **≥ 636**;
  **1 column below 636**. Measured exactly: **3 at 950, 2 at 949, 2 at 636, 1 at 635**.
  At each floor the tracks measure exactly **290.00 px**; at 1440 they are **370.656 / 370.672 / 370.656**.
- Page vertical padding is a `clamp`, so it must not be hard-coded: **72 px** at 1440 (6vw = 86.4,
  clamped), **61.44** at 1,024, **46.08** at 768, **32** at 390 and 320.

### Component geometry (1440 px; page-space, card 1 at x 140, y 171.19, 370.66 × 533.53)

| box                          | measured                                                                 |
| ---------------------------- | ------------------------------------------------------------------------ |
| card                         | **370.66 × 533.53**, radius 20, white, two-layer shadow                   |
| media                        | **370.66 × 232.97** (700:440 — see the cascade fact)                     |
| date leaf                    | **68 × 79** at `left: 18px`, `bottom: -30px` → it **hangs 30 px below the photo**, into the body's 44 px top padding, leaving a **14 px** clearance above the eyebrow |
| month strip                  | 68 × 21, full-bleed across the leaf (it overhangs the leaf's own `8px` top padding by `-8px`) |
| category eyebrow             | at y 452 (body top 404.16 + 44 padding + …), 13 px                       |
| `h2`                         | y 471, **326.66 wide** (body padding 22 each side), 25.19 tall            |
| facts `ul`                   | `display: grid; gap: 6px`, rows at 21.75 px each; icon **17 × 17**, `gap: 8px`, stroke 2, round caps |
| attendee row                 | `margin-top: 16px`, `gap: 10px`, 30 px tall; faces overlap by **−6 px** (`:first-child` reset to 0) |
| stub (`.cl-card11__actions`)  | y 621.70, **370.66 × 83.02**, `border-top: 2px dashed #e5e1d8`, `padding: 18px 22px 20px`, `display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px` |
| notches                      | two 20 px discs, `top: -11px`, half outside the card at `left/right: -10px` — the card must **not** have `overflow: hidden` or they vanish |
| button                       | **173 × 43.02** at `padding: 10px 16px`, `gap: 8px`, icon 18 px, `border: 1.5px solid #1d4ed8` |
| status line                  | `margin: 20px 0 0`, `min-height: 1.5em` (**22.5 px reserved**), centred   |

**The stub's wrap arithmetic** — the row is `button (173)` + `gap (12)` + `price label (86 / 72 /
112)` inside `track − 44` of content, so each card wraps at its own width and they do not agree:

| card | needs (px) | wraps when content < | measured wrap / no-wrap |
| ---: | ---------: | -------------------: | ----------------------- |
|    1 |    **271** |                  271 | wrapped at track **303** (335 px viewport), open at **313** (350) |
|    2 |    **257** |                  257 | wrapped at track **298** (330 px), open at **303** (335) |
|    3 |    **297** |                  297 | wrapped at track **343** (375 px), open at **348** (380) |

At the **1,024 px three-column width (track 314.66, content 270.66)** this bites: **card 1 misses by
0.34 px** and wraps, card 2 stays open, **card 3 wraps by 26 px** — stub heights **124.02 / 83.02 /
124.02**. At 960 and 950 (track 293.33 / 290, content 249.33 / 246) all three wrap. At 700 (two
columns, track 322, content 278) only card 3 wraps. Same rule at the phone end: at 320 (content 246)
all three wrap to **124.02** and the page grows from 1,903.05 to **1,929** once the status line takes
two lines.

### Responsive matrix (measured; card heights are content-driven, never fixed)

| viewport | cols | track px | card heights px | document px |
| -------: | ---: | -------: | --------------: | ----------: |
|    1,440 |    3 |   370.66 |         533.53 ×3 |      819.22 content (900 = viewport) |
|    1,280 |    3 |   370.66 |         533.53 ×3 |      900 (viewport) |
|    1,024 |    3 |   314.66 |         564.52 ×3 |      825.89 |
|      960 |    3 |   293.33 |         551.11 ×3 |      900 (viewport) |
|      950 |    3 |   290.00 |         549.02 ×3 |      900 (viewport) |
|      949 |    2 |   446.50 |         581.20 ×3 |    1,436 |
|      768 |    2 |   356.00 |         524.31 ×3 |    1,292.53 |
|      700 |    2 |   322.00 |  528.13, 528.13, **569.13** | 1,332 |
|      650 |    2 |   297.00 |         553.41 ×3 |    1,336 |
|      636 |    2 |   290.00 |         549.02 ×3 |    1,325 |
|      635 |    1 |   603.00 |         679.56 ×3 |    2,290 |
|      520 |    1 |   488.00 |         607.28 ×3 |    2,061 |
|      430 |    1 |   398.00 |         550.70 ×3 |    1,891 |
|      390 |    1 |   358.00 |         525.56 ×3 |    1,815.69 |
|      360 |    1 |   328.00 | 506.70, 506.70, **572.89** | 1,842 |
|      320 |    1 |   290.00 |         549.02 ×3 |    1,903.05 |

Three facts to carry: **(a)** in a multi-column grid the row stretches every card to the tallest, so
equal heights at 1440 prove nothing; **(b)** at 1 column the heights are dominated by the **media
band**, which scales with the track (`603 × 440/700 = 379` at 635, versus 225 at 390), which is why
the widest single-column layout is the *tallest* page; **(c)** at 320 the grid box is **288** px while
the track is pinned at the **290** floor, so the card's right edge sits 2 px into the 16 px right
padding — 14 px of gutter, **no** horizontal scroll (`scrollTo(300,0) → scrollX 0`), and no extra
padding may be added to "fix" it.

### Contrast — the text is clean; the focus ring is not

Computed against the flat surfaces behind each run (WCAG 2.x relative luminance):

| run                                   | pair                  | ratio    |
| ------------------------------------- | --------------------- | -------: |
| `h2`, day number, price figure        | `#171717` on `#fff`   | **17.93** |
| fact rows                             | `#404040` on `#fff`   | **10.37** |
| sub-line, weekday, count, price label | `#525252` on `#fff`   |  **7.81** |
| category eyebrow, button label        | `#1d4ed8` on `#fff`   |  **6.70** |
| month strip / button hover            | `#fff` on `#1d4ed8`   |  **6.70** |
| flag                                  | `#422006` on `#facc15` |  **9.52** |
| done state                            | `#15803d` on `#f0fdf4` |  **4.79** |
| status line                           | `#1e40af` on `#f5f3ef` |  **7.87** |
| page sub-line                         | `#525252` on `#f5f3ef` |  **7.05** |
| page title                            | `#171717` on `#f5f3ef` | **16.18** |
| face initials (8 faces, `aria-hidden`) | white on `#2563eb … #4f46e5` | **5.02 – 6.29** |
| **focus ring**                        | `#93c5fd` on `#fff` / on `#f5f3ef` | **1.80 / 1.63** ✗ |

So **every text run passes AA and no text colour needs to change** — unusual for this family. The one
failure is non-text: the 3 px focus ring is **1.80:1**, well under the 3:1 that SC 1.4.11 asks of a
focus indicator. Measured fix: **`#2563eb` (Tailwind `blue-600`) at the same `3px`/`2px`** gives
**5.17:1 on white and 4.66:1 on the page** — rendered and re-read with `getComputedStyle`
(`rgb(37, 99, 235) solid 3px`, offset `2px`) to confirm the override lands. `#1d4ed8` (6.70) also
clears it but matches the button's own border, so the ring reads as a thicker border.

## Behaviour — the calendar file (the only state on the page)

Reference script: `js/snippet.js`, 70 lines, IIFE, no dependencies. Reproduce it exactly, in a typed
module.

**On click of a card's button:**

1. Read `data-start` / `data-end` / `data-title` / `data-location` from **that** card (not from the
   visible text — see the venue split).
2. Build the calendar text:
   `BEGIN:VCALENDAR` · `VERSION:2.0` · `PRODID:-//Colorlib//Card V11//EN` · `BEGIN:VEVENT` ·
   `UID:<slug(title)>-<data-start>@example.com` · `DTSTAMP:<now, UTC, YYYYMMDDTHHMMSSZ>` ·
   `DTSTART:<data-start>` · `DTEND:<data-end>` · `SUMMARY:<escaped title>` ·
   `LOCATION:<escaped location>` · `END:VEVENT` · `END:VCALENDAR`, joined with **CRLF**.
   Escaping = `,` `;` `\` each prefixed with `\` (regex `([,;\\])`). Slug = lowercase, every run of
   non-alphanumerics → `-`, trim leading/trailing `-`.
3. `new Blob([text], { type: 'text/calendar;charset=utf-8' })` → `URL.createObjectURL` →
   `a.href`, `a.download = '<slug(title)>.ics'` → append to `<body>` → `a.click()` → remove →
   `setTimeout(() => URL.revokeObjectURL(url), 1000)`.
4. Add `is-done` to the button, **replace its label** with "Saved to calendar" (keeping the inline
   SVG — the reference wipes `textContent` and re-prepends the icon), and set the status line to
   **`"<title> downloaded as a calendar file. Open it to add the event."`**

**Verified capture** (Playwright download event, card 1): filename **`product-craft-summit-2026.ics`**,
**311 bytes**, **11 CRLF**, **0 bare LF**:

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Colorlib//Card V11//EN
BEGIN:VEVENT
UID:product-craft-summit-2026-20261014T090000@example.com
DTSTAMP:20261026T002100Z
DTSTART:20261014T090000
DTEND:20261014T173000
SUMMARY:Product Craft Summit 2026
LOCATION:Centro de Congressos\, Lisbon
END:VEVENT
END:VCALENDAR
```

Facts that follow from it:

- **`data-start` has no `Z` and no `TZID`** — these are *floating* local times (`20261014T090000`), so
  the event lands at 09:00 in the reader's own zone. Do not "improve" this into UTC.
- **`DTSTAMP` is `new Date()` at click time.** It is the only non-deterministic byte in the file, so a
  test must never assert its value (freeze or match `/^DTSTAMP:\d{8}T\d{6}Z$/`).
- **`PRODID` and the `UID`'s `@example.com` are the only places the source's identity leaks into
  behaviour.** The PRODID must become a neutral product string in the app (repo rule: no ColorLib
  strings in `apps/`), e.g. `-//Component Dock//Showbill//EN`; keep the UID shape
  (`<slug>-<start>@<domain>`) so a repeat click produces the same UID.
- **The state is per-button and permanent**: `is-done` never clears, a second click re-downloads and
  the label stays "Saved to calendar"; clicking card 2 **overwrites** the single status line and
  leaves card 1's label as it was (measured).
- **The status line is `role="status"`** (implicit `aria-live="polite"`) and sits **outside** the
  grid, under it, centred — it is not a per-card message.
- `is-done` also repaints the button: `border-color #15803d`, `background #f0fdf4`, `color #15803d`
  (**4.79:1** ✓).

**Implementation shape for the app** (this is what keeps the repo's 100 % coverage rule reachable):
a pure `buildIcs(event): string` plus a thin `downloadIcs(filename, text)` wrapper. Test `buildIcs`
on escaping, CRLF, ordering and UID; cover the wrapper by stubbing `URL.createObjectURL` /
`revokeObjectURL` (jsdom has neither) and asserting the anchor's `download` + `href`, plus that the
object URL is revoked (fake timers for the 1 s timeout). Do not rely on an actual navigation in jsdom.

## Requirements

### Requirement 1: Page shell and paper stage

The app SHALL render a single `<main>` on the warm paper ground `#f5f3ef`, `max-width: 1160px`
(content box), `margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`, ink `#171717`, containing a
`<header>`, the card grid, and the status line — and SHALL NOT force a viewport height.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the app has rendered
- **THEN** the content SHALL be **819.22 px** tall (document reports **900** only because the viewport
  is taller than the content) — there is **no** `min-height: 100vh` in the reference
- **AND** at 390 the document SHALL be **1,815.69 px** and at 320 **1,903.05 px**
- **AND** the vertical padding SHALL measure **72 px** at 1440, **61.44** at 1,024, **46.08** at 768,
  **32** at 390 and 320

#### Scenario: No horizontal scroll at any width

- **GIVEN** the page at 320 / 360 / 430 / 520 / 635 / 636 / 768 / 949 / 950 / 1,024 / 1,440
- **WHEN** `window.scrollTo(300, 0)` runs
- **THEN** `scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** at 320, where the grid box is **288** px and the track is the **290** px floor, the card's
  right edge MAY sit 2 px into the 16 px gutter — no compensating padding may be added

### Requirement 2: The head

The app SHALL render a `<header>` with an `h1` at `clamp(30px, 4vw, 44px)`, weight **800**,
`letter-spacing: -.03em`, `line-height: 1.05`, and a 16 px `#525252` sub-line **8 px** below it, the
grid starting **28 px** under the head.

#### Scenario: The title scales on a clamp and stays on one line

- **GIVEN** a 1440 px viewport
- **WHEN** the `h1` is measured
- **THEN** it SHALL be **44 px** in a **46.2 px** line box
- **AND** at 1,024 it SHALL be **40.96 px / 43.008 px**, at 768 **30.72 / 32.256**, and at 390 and 320
  it SHALL hit the clamp floor at **30 px / 31.5 px**
- **AND** it SHALL remain **one line at every width down to 320** (31.5 px box at 390 and 320)
- **AND** the sub-line SHALL wrap to **two lines (34 px)** at 360 and 320 while staying one line
  (17 px) from 430 up

#### Scenario: The head carries the reference copy

- **GIVEN** the head
- **WHEN** its text is read
- **THEN** the `h1` SHALL read **"Upcoming in Lisbon"** and the sub-line **"Three picks for October
  from the city events desk."**
- **AND** the sub-line SHALL keep its full stop and SHALL NOT gain a marketing sentence

### Requirement 3: The grid is arithmetic, not breakpoints

The card grid SHALL be `display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
gap: 24px`, with **no** column breakpoint, media query or JS measurement, giving **3 / 2 / 1**
columns at the arithmetic thresholds **950 / 949 / 635**.

#### Scenario: Column counts at the exact thresholds

- **GIVEN** the grid inside its 16 px page padding
- **WHEN** the viewport is swept one pixel across each boundary
- **THEN** there SHALL be **3 columns at 950**, **2 at 949**, **2 at 636**, **1 at 635**
- **AND** at each floor the tracks SHALL measure exactly **290.00 px**, and at 1440
  **370.656 / 370.672 / 370.656**

#### Scenario: Card heights stretch per row and are never fixed

- **GIVEN** the three cards
- **WHEN** they are measured at 1440
- **THEN** all three SHALL be **533.53 px** because the row stretches to the tallest — not because
  the cards agree
- **AND** at 700 the third card SHALL be **569.13** against **528.13** for the other two (its title
  wraps), and at 360 the third SHALL be **572.89** against **506.70**
- **AND** no card SHALL carry a height utility

### Requirement 4: The event card shell

Each card SHALL be an `<article>` with a white surface, `border-radius: 20px`, the two-layer shadow
`0 1px 2px rgba(0,0,0,.05), 0 16px 36px -24px rgba(0,0,0,.35)`, base type 15 px / `1.45`, ink
`#171717`, and `display: flex; flex-direction: column` — with **no** hover state and no
`overflow: hidden`.

#### Scenario: The card has no interaction language of its own

- **GIVEN** the card
- **WHEN** a pointer hovers it
- **THEN** nothing SHALL change — no lift, no border, no shadow, no cursor change
- **AND** the only transitioning element on the page SHALL be the Add-to-calendar button
  (`background-color .2s ease, color .2s ease`)

#### Scenario: The notches need an unclipped card

- **GIVEN** the stub's two punched semicircles, `20 × 20` px at `top: -11px`, `left/right: -10px`
- **WHEN** the card is inspected
- **THEN** the card SHALL NOT clip them (no `overflow: hidden` on the card or the stub)
- **AND** the discs SHALL be filled with the page colour `#f5f3ef` and SHALL sit exactly half outside
  the card, painting over the ends of the dashed rule

### Requirement 5: The media band and the overlapping date leaf

The card SHALL open with a photo band whose height is the image's **700:440** ratio (**232.97 px** at
a 370.66 px track), `object-fit: cover`, `border-radius: 20px 20px 0 0`, and SHALL carry a white
**68 × 79** date leaf at `left: 18px`, `bottom: -30px`, radius 14, shadow
`0 10px 24px -8px rgba(0,0,0,.35)`.

#### Scenario: The band is 700:440, and the declared 16:9 does not apply

- **GIVEN** a 370.66 px track at 1440
- **WHEN** the media box is measured
- **THEN** its height SHALL be **232.97 px** (±0.1), i.e. **1.5909:1** — **not** the 208.49 px a
  `16 / 9` ratio predicts
- **AND** at 1,024 it SHALL be **197.78**, at 768 **223.77**, at 390 **225.02**, at 320 **182.28**

#### Scenario: The leaf hangs 30 px into the body

- **GIVEN** the date leaf
- **WHEN** it is measured against the photo's bottom edge
- **THEN** it SHALL extend **30 px** below that edge at **every** width probed (320 → 1,440)
- **AND** the body's top padding SHALL be **44 px**, leaving **14 px** between the leaf's bottom and
  the category eyebrow
- **AND** the month strip SHALL be white text on `#1d4ed8` at 12 px / 800 / `.12em` uppercase, filling
  the leaf's full width and overhanging its `8px` top padding, with radius `14px 14px 0 0`
- **AND** the day SHALL be 28 px / 800 / `-.03em` in ink, and the weekday 12 px / 600 in `#525252`
  **3 px** under it

### Requirement 6: The body — category, title and facts

The card body SHALL hold, in order, a category eyebrow (13 px / 800 / `.08em` uppercase, accent), the
`h2` event title (21 px / 800 / `-.02em` / `1.2`, `margin: 4px 0 12px`) and a `ul` of exactly two
fact rows (grid, `gap: 6px`, ink `#404040`, 15 px) each led by a **17 × 17** stroke icon at
`gap: 8px`.

#### Scenario: The two facts are a clock row and a pin row

- **GIVEN** any card
- **WHEN** its facts are read
- **THEN** the first row SHALL be a clock icon followed by two `<time>` elements separated by an
  **en dash with no spaces** (`09:00–17:30`), each `<time>` carrying its `datetime`
- **AND** the second row SHALL be a pin icon followed by the venue as **plain text**
- **AND** the icons SHALL be `fill: none`, `stroke: currentColor`, `stroke-width: 2`,
  `stroke-linecap: round`, `flex: none`

#### Scenario: The visible venue is the neighbourhood, not the city

- **GIVEN** card 1
- **WHEN** its fact row and its `data-location` are compared
- **THEN** the row SHALL print **"Centro de Congressos, Belém"** and the calendar SHALL print
  **"Centro de Congressos, Lisbon"** — two different strings, by design
- **AND** the same split SHALL hold for card 2 ("Armazém 16, Marvila" vs "Armazém 16, Lisbon") and
  card 3 ("Fábrica Coffee Lab, Chiado" vs "Fábrica Coffee Lab, Lisbon")
- **AND** neither value SHALL be "corrected" into the other

### Requirement 7: The attendee row

The card SHALL print a 30 px attendee row 16 px under the facts: an `aria-hidden` cluster of
overlapping initial discs (**30 × 30**, `2px solid #fff`, `50%`, **−6 px** left overlap with the first
reset to 0, 10.5 px / 800 white initials, one inline colour each) followed by the count text at 14 px
/ 500 in `#525252`, `gap: 10px`.

#### Scenario: The cluster is decoration and the count carries the meaning

- **GIVEN** the faces cluster
- **WHEN** the accessibility tree is inspected
- **THEN** the cluster SHALL be `aria-hidden="true"` and no initial SHALL be announced
- **AND** the count text SHALL be the only readable statement of attendance
- **AND** card 1 SHALL show **3** faces and **"412 going"**, card 2 **3** faces and **"1,280 going"**,
  card 3 **2** faces and **"9 of 12 places taken"**

#### Scenario: The face colours are per-instance, not a palette loop

- **GIVEN** the eight faces across the three cards
- **WHEN** their backgrounds are read
- **THEN** they SHALL be `#2563eb / #be185d / #047857` (card 1), `#7c3aed / #c2410c / #0e7490`
  (card 2) and `#b45309 / #4f46e5` (card 3), each white-on-colour at **5.02 – 6.29:1**
- **AND** the overlap SHALL come from the `−6 px` margin, not from absolute positioning

### Requirement 8: The perforated ticket stub

The card SHALL close with a stub carrying `border-top: 2px dashed #e5e1d8`,
`padding: 18px 22px 20px`, and a `flex; flex-wrap: wrap; align-items: center;
justify-content: space-between; gap: 12px` row of price block and button.

#### Scenario: The stub wraps per card, and at 1,024 the cards disagree

- **GIVEN** the row's fixed parts: button **173 px**, gap **12 px**, price label **86 / 72 / 112 px**
- **WHEN** the content width (`track − 44`) is compared with each card's need (**271 / 257 / 297**)
- **THEN** card 2 SHALL unwrap first (at track **303**), card 1 next (at **313**), card 3 last (at
  **348**)
- **AND** at the 1,024 px three-column width (track **314.66**, content **270.66**) cards 1 and 3
  SHALL wrap to **124.02 px** while card 2 stays at **83.02** — card 1 by **0.34 px**
- **AND** at 320 (content 246) all three SHALL wrap to **124.02 px**

#### Scenario: Two price shapes, both faithful

- **GIVEN** the stub's price block
- **WHEN** copy is checked
- **THEN** cards 1 and 2 SHALL read **"From €180"** and **"From €28"** — the 14 px label before the
  20 px / 800 figure
- **AND** card 3 SHALL read **"€45 incl. coffee"** — the figure **first**, then the label
- **AND** the euro sign SHALL be U+20AC in every case, with no hyphen-minus

#### Scenario: The button

- **GIVEN** the Add-to-calendar button
- **WHEN** it is measured at 1440
- **THEN** it SHALL be **173 × 43.02** px with `padding: 10px 16px`, `gap: 8px`, an 18 px calendar
  icon, `border: 1.5px solid #1d4ed8`, radius **12**, label 14.5 px / 600 in accent on white
- **AND** on hover its background SHALL become `#1d4ed8` with white text (**6.70:1**)
- **AND** it SHALL be a real `<button type="button">` with an accessible name in every state

### Requirement 9: The calendar file behaviour

The app SHALL implement the reference's `.ics` generation: on click, build a VCALENDAR from that
card's data, download it as `<slug>.ics`, flip the button to the done state, and announce the result
in a single `role="status"` line under the grid.

#### Scenario: The file is a well-formed single-event calendar

- **GIVEN** card 1 at 1440
- **WHEN** its button is clicked
- **THEN** a download SHALL be offered as **`product-craft-summit-2026.ics`**, **311 bytes**
- **AND** the body SHALL be the 11 lines above, joined with **CRLF** — **11 CRLF, 0 bare LF**
- **AND** it SHALL contain `DTSTART:20261014T090000`, `DTEND:20261014T173000`,
  `SUMMARY:Product Craft Summit 2026`, `LOCATION:Centro de Congressos\, Lisbon` and a
  `UID:<slug>-20261014T090000@<domain>` line
- **AND** `DTSTAMP` SHALL match `^\d{8}T\d{6}Z$` and SHALL be the click time in UTC

#### Scenario: Commas, semicolons and backslashes are escaped

- **GIVEN** a title or venue containing `,`, `;` or `\`
- **WHEN** the calendar text is built
- **THEN** each of those characters SHALL be prefixed with a backslash
- **AND** the reference's own `LOCATION` SHALL show it: `Centro de Congressos\, Lisbon`

#### Scenario: The done state and the status line

- **GIVEN** a clicked button
- **WHEN** the click resolves
- **THEN** the button SHALL gain the done state — `border-color #15803d`, `background #f0fdf4`,
  `color #15803d` (**4.79:1**) — keep its icon, and read **"Saved to calendar"**
- **AND** the status line SHALL read
  **"Product Craft Summit 2026 downloaded as a calendar file. Open it to add the event."**
- **AND** the status line SHALL be `role="status"`, sit below the grid (`margin-top: 20px`), reserve
  `min-height: 1.5em` (**22.5 px**) before any click, and be a **single** element: clicking card 2
  SHALL overwrite it and SHALL NOT reset card 1's label
- **AND** a second click on the same button SHALL re-download and leave the label unchanged

### Requirement 10: Copy, numerals and glyphs

The app SHALL carry the reference's three events verbatim, including its accents and its two numeral
conventions, and SHALL derive every calendar value from the card's data rather than from the DOM text.

#### Scenario: The three events

- **GIVEN** the rendered grid
- **WHEN** each card is read
- **THEN** card 1 SHALL be **Conference / "Product Craft Summit 2026" / Oct 14 Wed /
  09:00–17:30 / Centro de Congressos, Belém / 412 going / From €180**, with `data-start`
  `20261014T090000` and `data-end` `20261014T173000`
- **AND** card 2 SHALL be **Live music / "Marés: Live at the Riverside" / Oct 17 Sat /
  21:30–00:00 / Armazém 16, Marvila / 1,280 going / From €28**, flagged **"Few tickets left"**,
  `data-start` `20261017T213000`, `data-end` **`20261018T000000`** (the event crosses midnight)
- **AND** card 3 SHALL be **Workshop / "Latte Art Morning Workshop" / Oct 24 Sat / 10:00–12:30 /
  Fábrica Coffee Lab, Chiado / 9 of 12 places taken / €45 incl. coffee**, with `data-start`
  `20261024T100000` and `data-end` `20261024T123000`

#### Scenario: Numerals keep their two conventions

- **GIVEN** the count texts
- **WHEN** they are read
- **THEN** card 2 SHALL use a **thousands separator** ("1,280 going") while card 1 does not
  ("412 going") — because 412 needs none
- **AND** card 3 SHALL use the capacity form **"9 of 12 places taken"**, not a count
- **AND** the flag SHALL exist on card 2 only, at `top: 14px; right: 14px`, `5px 11px` padding,
  radius 999, `#422006` on `#facc15`, 12.5 px / 800

### Requirement 11: Semantics, focus and motion preference

The app SHALL expose one `h1` and one `h2` per card, three focusable controls, and a focus indicator
that meets **3:1** against the surface behind it.

#### Scenario: Heading and control census

- **GIVEN** the rendered page
- **WHEN** the DOM is inspected
- **THEN** there SHALL be exactly **1 `h1`** and **3 `h2`** (the event titles)
- **AND** there SHALL be exactly **3** focusable elements — the three buttons — in card order
- **AND** there SHALL be **no** `href="#"`, **no** `<form>` and **no** `<input>`
- **AND** every `<img>` SHALL keep a descriptive `alt` in the reference's spirit (a description of
  the photograph, not the event name)

#### Scenario: The focus ring is fixed, not copied

- **GIVEN** a keyboard user tabbing to a card's button
- **WHEN** the ring is measured
- **THEN** it SHALL be **3 px** at **2 px** offset and SHALL reach **≥ 3:1** against the surface
  behind it — use **`#2563eb`** (**5.17:1** on white, **4.66:1** on the paper), not the reference's
  `#93c5fd` (**1.80:1**)
- **AND** `prefers-reduced-motion: reduce` SHALL set the button's `transition: none` and SHALL add no
  scroll, reveal or hover animation

### Requirement 12: Attribution, naming and repo integration

The app SHALL ship as `apps/showbill` with package `@free-react-templates/showbill`, a `public/CNAME`
of `showbill.free.componentdock.com`, a `"homepage"` of `https://showbill.free.componentdock.com`,
and a footer line linking **https://www.componentdock.com/** — with **no** ColorLib provenance
anywhere in `apps/`.

#### Scenario: No provenance leaks

- **GIVEN** the app source
- **WHEN** `grep -ri colorlib apps/showbill` and `grep -ri 'card-11\|Card V11' apps/showbill` run
- **THEN** both SHALL return **no matches** — including in the calendar `PRODID`, where the reference
  writes `-//Colorlib//Card V11//EN`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

#### Scenario: The row is added once, on ship

- **GIVEN** `TEMPLATES.md` line 733, `## Bootstrap Cards (20)`, currently holding Card 01–04
- **WHEN** the implementer ships
- **THEN** the row quoted in §*Why this design has no row* SHALL be appended directly after the last
  card row present
- **AND** `npm run readme:status` SHALL be re-run so the app count moves

## Screenshot analysis (catalogue image, `card-11.jpg`, AVIF 1200 × 972)

The screenshot is **a browser-window mockup**: a macOS chrome bar with traffic lights and a
`preview.colorlib.com` address pill, the page rendered inside a 1200 × 972 canvas on a very slightly
darker grey page (the window's own background), so the real page's `#f5f3ef` fills only the framed
area. **Do not adopt the frame, the grey surround or the traffic lights** — they are the catalogue's
presentation, not the design.

Inside the frame the composition is: a large ink `h1` top-left with a small grey sub-line under it and
a wide empty right half (the head is left-aligned and deliberately does not fill its row); the three
cards in a single row, each the full height of the row, with the photographs' dark interiors reading
as three distinct blocks against the white bodies; and roughly the bottom **40 % of the frame empty
paper** — the page is content-height and short.

Visual reading, section by section:

- **Ground** is warm, not white — a putty/eggshell `#f5f3ef` that makes the pure-white cards read as
  cut-outs. This is the single most-lost token in a port that defaults to `bg-white`.
- **The date leaf is the eye-catcher**: the only saturated blue in an otherwise ink-and-grey card,
  and the only element that crosses a boundary (photo → white). Blue cap over white body, big ink day
  number, small grey weekday.
- **The eyebrow is a small blue all-caps word** — never a pill, never a tag with a background.
- **The facts are two grey lines with hairline icons**, visually quieter than the title.
- **The attendee cluster** is three overlapping coloured discs, the only multi-colour element on the
  page, and it anchors the left of the row while the count text floats 10 px to its right.
- **The stub** is separated by a dashed warm line whose ends are punched out with page-coloured
  semicircles; below it the price sits left and a bordered white button right, with the button's blue
  outline being the second-strongest element in the card.
- **Vertical rhythm inside the card is generous at the top** (44 px of padding to clear the leaf) and
  tight at the bottom (18/20 px), which is what makes the photo/leaf/body stack read as one object
  rather than a photo pasted onto a card.

## Known reference defects (do not copy)

1. **The focus ring fails non-text contrast.** `#93c5fd` on white is **1.80:1** and on the paper
   **1.63:1** — below the 3:1 SC 1.4.11 asks of a focus indicator. **Fix:** `#2563eb` at the same
   `3px`/`2px` (**5.17 / 4.66:1**), verified by rendering with a style override and re-reading
   `getComputedStyle` (`rgb(37, 99, 235) solid 3px`, offset `2px`). Keep the ring outside the control.
2. **The `.ics` escaper does not handle newlines.** `esc()` maps only `,` `;` `\`. Measured: setting
   `data-title` to a two-line string emits `SUMMARY:Two<LF>Line Title\; with punctuation\, and commas`
   — a bare LF inside the value, which truncates the summary in most parsers and breaks the
   CRLF-only line structure. **Fix:** also map CR/LF to `\n`, or strip them.
3. **The `.ics` writer never folds long lines.** RFC 5545 caps a content line at 75 octets. Measured
   with a 120-character title: `SUMMARY` line **152 octets**, `UID` line **128 octets**. The demo's
   own copy stays under the limit, so this only shows on user data. **Fix:** fold at 75 octets with a
   leading space on continuation lines.
4. **`PRODID:-//Colorlib//Card V11//EN` and `@example.com` in the UID** — the source's identity and a
   placeholder domain inside generated output. Replace with a neutral product string and a real
   domain; the repo forbids ColorLib strings in `apps/`.
5. **`.cl-icon` is declared and never used** (`height: 1em; width: auto; fill: currentColor`) —
   `document.querySelectorAll('.cl-icon').length === 0`. **Fourth** card in a row with the same dead
   rule. Do not port it.
6. **The date is hard-coded in three places per card** — the leaf spans ("Oct" / "14" / "Wed"), the
   two `<time>` elements and `data-start`/`data-end` — with no derivation between them. They agree in
   the demo; in the app derive the leaf and the `<time>` values from one typed start/end so they
   cannot drift.
7. **The status line reflows on a phone.** It reserves `min-height: 1.5em` (22.5 px), but the message
   is two lines at 320 px wide (**48 px**), so the page grows **25.5 px** on first click. Either
   reserve two lines or accept and document the shift; do not remove the reservation.
8. **The done state is not reversible and the status is global.** There is no "added" persistence (a
   reload forgets everything) and no way back from "Saved to calendar"; a second click downloads
   again. Reproduce the behaviour, but do not invent persistence the reference does not have.

## Adapting to the repo (deltas the implementer owns)

| reference                                              | app                                                                 |
| ------------------------------------------------------ | ------------------------------------------------------------------- |
| `:where(html) … { all: revert }` guard (60 lines)      | **do not port** — Tailwind's preflight is the equivalent             |
| `.cl-icon` dead rule                                   | drop it                                                             |
| 8 `@font-face`, self-hosted woff2                      | one Google Fonts `<link>`: `Archivo:wght@400;500;600;800` (`css2`, 200) |
| `#f5f3ef`, `#e5e1d8`, notch fill                       | `@theme` tokens; the notches must reference the **page** token, not a literal |
| inline `--cl-card11-c` per face                        | typed `faces` array (`initials`, `color`) per event                  |
| `data-*` attributes as the only data source            | one typed `events` module; both the DOM and the `.ics` derive from it |
| 3 jpg photographs                                      | `https://picsum.photos/seed/showbill-<n>/700/440` (keep `700 × 440` so the ratio survives) |
| inline `<svg>` clock, pin, calendar                    | `lucide-react` `Clock` / `MapPin` / `CalendarPlus`, `strokeWidth={2}`, 17 px facts / 18 px button |
| `PRODID` + `@example.com`                              | neutral product id + a real domain                                   |
| no footer                                              | one Component Dock attribution line (repo rule)                      |
| `role="status"` line under the grid                    | same, as a React-rendered `role="status"` element                    |

Data shape the tests should pin (one object per event): `id`, `type`, `title`, `start`, `end`
(floating locale strings), `timeLabel` (`09:00–17:30`), `venueLabel` (neighbourhood),
`calendarLocation` (city), `countLabel`, `price: { label, amount, labelAfter }`, `faces[]`,
`flag?`, `imageSeed`.

## Verification checklist

- [ ] `apps/showbill` exists, package `@free-react-templates/showbill`, `public/CNAME` =
      `showbill.free.componentdock.com`, `"homepage"` = `https://showbill.free.componentdock.com`
- [ ] `grep -ri colorlib apps/showbill` and `grep -ri 'card-11\|Card V11' apps/showbill` → **no
      matches**, including the calendar `PRODID`
- [ ] page: `#f5f3ef` ground, `max-width: 1160px` content box, padding **72 px / 16 px** at 1440 and
      **32 / 16** at 390; `h1` **44 px / 46.2 px box / 1 line** at 1440, **40.96 / 43.008** at 1,024,
      **30 / 31.5** at 390; sub-line 16 px `#525252` 8 px below; grid starts **28 px** under the head
- [ ] grid: `repeat(auto-fit, minmax(290px, 1fr))`, `gap: 24px`, container **1160** at x 140, grid y
      **171.19**; **3 / 2 / 1** at **950 / 949 / 635**, tracks exactly **290.00** at both floors,
      **370.656 / 370.672 / 370.656** at 1440
- [ ] cards: radius **20**, white, shadow `0 1px 2px rgba(0,0,0,.05), 0 16px 36px -24px rgba(0,0,0,.35)`,
      **533.53** tall at 1440 and **564.52** at 1,024; **no** height utility, **no** hover state, **no**
      `overflow: hidden`
- [ ] media: **232.97 px** at a 370.66 track (**700:440**, *not* 16:9), `object-fit: cover`,
      top corners 20; **197.78 / 223.77 / 225.02 / 182.28** at 1,024 / 768 / 390 / 320
- [ ] date leaf: **68 × 79**, `left: 18`, `bottom: −30` (**30 px** below the photo at every width),
      radius 14, shadow `0 10px 24px -8px rgba(0,0,0,.35)`; month strip 21 px white-on-`#1d4ed8`
      12/800/`.12em` uppercase with radius `14px 14px 0 0`; day 28/800/`−.03em`; weekday 12/600
      `#525252` +3 px
- [ ] body: padding **44 / 22 / 18**; eyebrow 13/800/`.08em` uppercase `#1d4ed8`; `h2` 21/800/`−.02em`/
      `1.2` with `4px 0 12px`; facts grid `gap: 6px`, ink `#404040`, icons **17 × 17** stroke 2 round,
      `gap: 8px`; en dash, no spaces, between the two `<time>`s
- [ ] attendee row: `margin-top: 16px`, `gap: 10px`, faces **30 × 30** with `2px #fff`, **−6 px**
      overlap (first reset), 10.5/800, `aria-hidden`; counts **"412 going" / "1,280 going" / "9 of 12
      places taken"**; face colours `#2563eb #be185d #047857` · `#7c3aed #c2410c #0e7490` ·
      `#b45309 #4f46e5`
- [ ] stub: `2px dashed #e5e1d8`, `18px 22px 20px`, `flex-wrap`, `space-between`, `gap: 12px`;
      notches **20 px** at `top: −11px`, `left/right: −10px`, filled `#f5f3ef`
- [ ] stub wrap matches the arithmetic: needs **271 / 257 / 297**; open at track **313 / 303 / 348**;
      at the 1,024 width **124.02 / 83.02 / 124.02** (card 1 wraps by **0.34 px**); at 320 all
      **124.02**
- [ ] prices: **"From €180"**, **"From €28"** (label first) and **"€45 incl. coffee"** (figure first,
      U+20AC, no hyphen-minus); label 14 px `#525252`, figure 20/800 ink
- [ ] button: **173 × 43.02**, `10px 16px` padding, `gap: 8px`, 18 px icon, `1.5px solid #1d4ed8`,
      radius **12**, 14.5/600 accent on white, hover white-on-`#1d4ed8` (**6.70:1**)
- [ ] flag: card 2 only, `top/right: 14px`, `5px 11px`, radius 999, `#422006` on `#facc15`,
      12.5/800, **9.52:1**
- [ ] calendar: download named `product-craft-summit-2026.ics`, **311 bytes / 11 CRLF / 0 bare LF**,
      `DTSTART:20261014T090000`, `DTEND:20261014T173000`, `SUMMARY` and `LOCATION` escaped
      (`Centro de Congressos\, Lisbon`), `UID` `<slug>-<start>@<domain>`, `DTSTAMP` matching
      `^\d{8}T\d{6}Z$`; **floating** local times (no `Z`, no `TZID`)
- [ ] calendar hardening (fix defects 2–3): a title with CR/LF is escaped to `\n`; a 120-character
      title folds at 75 octets per line
- [ ] done state: `#15803d` on `#f0fdf4` (**4.79:1**), icon kept, label **"Saved to calendar"**,
      label survives a second click; clicking card 2 overwrites the **single** `role="status"` line
      and leaves card 1 alone
- [ ] status line: `role="status"`, `margin-top: 20px`, `min-height: 1.5em` (**22.5 px**) before any
      click, centred, 15/600 `#1e40af` (**7.87:1**)
- [ ] focus ring **3 px at 2 px offset in `#2563eb`** (**5.17:1** on white / **4.66:1** on paper) —
      **not** `#93c5fd`
- [ ] `prefers-reduced-motion: reduce` → button `transition: none`; no reveal/scroll animation added
- [ ] semantics: **1 `h1`**, **3 `h2`**, **3** focusable elements, **0** `href="#"`, **0** forms,
      **3** `<img>` with `700 × 440` and descriptive `alt`
- [ ] copy: "Upcoming in Lisbon" · "Three picks for October from the city events desk." · the three
      events verbatim, accents intact (`Marés`, `Armazém`, `Fábrica`)
- [ ] no horizontal scroll: `scrollTo(300,0) → scrollX 0` at 320 / 360 / 390 / 635 / 636 / 768 / 949 /
      950 / 1,024 / 1,440; at 320 the track is **290** in a **288** grid with a **14 px** right gutter
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app showbill` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-showbill --type spec` is valid
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`, directly after the last card row
      present; `npm run readme:status` re-run
