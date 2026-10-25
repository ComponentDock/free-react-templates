# Template: Roadbook (Travel field-guide cards — four full-bleed photo cards that lift a description and two fact chips out of the dark scrim on hover or focus)

## Purpose

A **travel field-guide band**: one head (a lime eyebrow and a two-line display title) over a
**four-across grid of tall photo cards** on a near-black ground. Each card is a single **full-bleed
photograph** covered by a **four-stop gradient scrim**, with a **pill tag** at its top-left and a
bottom-anchored stack: the **destination in uppercase lime**, a **28 px title** that is the card's only
link, and — hidden at rest — a **blurb plus two lime fact chips** that expand out of the card on hover
or keyboard focus. On the way in, the photo zooms `1.07` over `.8 s` and the scrim gains a flat 25 %
black wash. ColorLib's own listing states the brief in one line:

> "Tall photo cards with a dark gradient and the destination and title on top. On hover or keyboard
> focus the image zooms and a short description and two facts slide up. On touch screens the extra
> text is always shown."

> "It is plain HTML and CSS: no jQuery, no Bootstrap files, no plugins, and the download is 479 KB.
> Use it on its own, or drop it into a Bootstrap 4, 5 or 6 project and it looks the same."

and lists three features: "Hover and focus-within reveal using a grid-rows transition · Whole-card link
with a visible focus outline · Gradient scrim keeps text readable on any photo". That list is the
design. Everything not in it — a filter row, a search field, a map, a "load more", a rating, a price, a
booking control, a second band, a footer — is absent, and adding any of it is a different template.

This is the **eighth member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**) and
the family's **first grid of equals**: `card-01` … `card-06` were one to three type-and-geometry cards
per page, `card-07` a single column of three wide split cards. Roadbook is also the family's first with

- **an image as the entire card surface** (four 560 × 720 JPEGs, `position: absolute; inset: 0;
  object-fit: cover` behind every layer, at `z-index: -2`),
- **a multi-stop gradient scrim as a separate element** (`z-index: -1`, four stops, hover-animated
  `background-color` on top of it),
- **a `grid-template-rows: 0fr → 1fr` collapse** — the only "height animation" in the family that does
  not need a `max-height` guess or JavaScript,
- **a hover-driven zoom whose direction changes on a media query** (`@media (hover: none)` keeps the
  panel permanently open, so touch users never lose the copy), and
- **four cards that stay exactly 440 px tall at every width from 320 to 1440** (the opposite of
  `card-07`, where each card sized itself).

The personality is in six small, copyable details; lose any of them and a correct palette still reads
as a generic "image card":

1. **The card never changes height.** It is `min-height: 440px`, `display: flex; align-items:
   flex-end`, and the reveal grows **inside** it: the content block goes from **100.3 px** at rest to
   **216.55 px** when open, so the kicker and title *rise* 116.25 px up the photo instead of the card
   growing. Measured 440 at 320 / 390 / 480 / 547 / 640 / 768 / 1024 / 1280 / 1440.
2. **The collapse is `grid-template-rows`, not `max-height`.** `.cl-card08__more` is a one-column grid
   whose single row is `0fr`; the child `.cl-card08__inner` carries `min-height: 0; overflow: hidden`.
   Hover/focus set the row to `1fr` and opacity `0 → 1`. Both halves are load-bearing: without
   `min-height: 0` the row refuses to shrink, without `overflow: hidden` the copy spills.
3. **Everything sits on a four-stop scrim** — `rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 30%,
   rgba(0,0,0,.35) 55%, rgba(0,0,0,.9) 100%` — and hover **adds** `background-color: rgba(0,0,0,.25)`
   underneath it rather than swapping the gradient. That is why the hover darkening is uniform and the
   gradient's shape survives it.
4. **One card, one anchor, stretched.** The `<h2>` wraps a single `<a class="cl-card08__link">` whose
   `::after` is `inset: 0; z-index: 1; border-radius: 22px` — so the pill, the kicker and the chips are
   all **decoration inside the link's hit area** (`elementFromPoint` over the tag returns the link).
   Focus is drawn on that `::after`, **inside** the card (`outline-offset: -5px`).
5. **The accent is used three ways only**: the eyebrow, the kicker and the fact chips (plus the focus
   ring). The page has no buttons, so lime never fills a control — it is a caption colour.
6. **The grid is arithmetic, not breakpoints.** `repeat(auto-fit, minmax(250px, 1fr))` with a 16 px gap
   yields **4 columns at ≥ 1080, 3 at 814 – 1079, 2 at 548 – 813, 1 at ≤ 547** — three thresholds that
   appear nowhere in the stylesheet.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,888 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-08` is the **eighth member of the `card` snippet family** and one of the **214 snippet variants in
19 families** the listing carries and `TEMPLATES.md` does not. The 42 standalone designs in that gap are
all prepped; the snippet families are the remaining queue, worked **in family order, then variant
number**. `card-01` → **Nameplate** (`1a09a0c7b`), `card-02` → **Marketrow** (`780313169`), `card-03` →
**Octavo** (`2a8371ce0`), `card-04` → **Tierline** (`9e6e58563`), `card-05` → **Plaudit** (`7487355a6`),
`card-06` → **Statline** (`7113c220a`) and `card-07` → **Lodgerow** (`be9c73c5c`) came first.

The family section **`## Bootstrap Cards (20)` already exists on main** (line ~733, created by the
`nameplate` shipment) and currently carries **one** row, `Card 01`. This design's row goes **directly
after it**:

```markdown
- [x] **Card 08** — [colorlib](https://colorlib.com/wp/template/card-08/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-08.jpg) · [roadbook](https://roadbook.free.componentdock.com)
```

(`Card 02` … `Card 07` are still prepped-and-unbuilt, so the section will gain rows out of order until
those ship — the implementer stream owns that batch edit, not this prep run.)

**The name.** `roadbook` — one lowercase word, in no app folder, no spec folder, and `git grep -il
roadbook origin/main` returns **0** files (the substring test this pipeline uses); the ColorLib
catalogue URLs `colorlib.com/wp/template/roadbook/` (404, 63,534 B),
`preview.colorlib.com/theme/roadbook/` (404, 9 B) and
`preview.colorlib.com/theme/bootstrap/roadbook/` (404, 9 B) are all unused. A roadbook is the rally
navigator's book of route cards with distance and time per leg — the facts-chips device in one word.
Free alternates measured the same day, if a later stream needs one: `guidepost`, `landfall`, `milemark`,
`itinerant`, `panograph`, `latitudes` (each 0 substring hits, 0 `apps/` hit, 0 spec folder). Do **not**
reuse `waymark` (3 hits, 1 spec), `signpost` (12 hits, 1 spec), `trailhead` (15 hits, 1 app, 1 spec) or
`wayfare` (27 hits, 1 app, 1 spec), and avoid the taken neighbours `postcard` (64 hits),
`fieldnotes-student`, `threadline`, `traceline`, `stayline`, `rowline`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 4,465 B** live (`4,136 B` inside the archive), `<title>` "Card V08 \| Colorlib", `lang="en"`, **one** stylesheet, **0 `<script>`** |
| preview path      | **`theme/bootstrap/card-08/index.html`**; the directory form `…/bootstrap/card-08/` is the same 4,465 B. `theme/card-08/` and `theme/bb/card-08/` are **404** (9 B) |
| ColorLib page     | `https://colorlib.com/wp/template/card-08/` **200, 113,079 B**; "Author: Colorlib", "Released: September 2026", "License: CC BY 3.0"; states **"the download is 479 KB"** |
| stylesheet        | `css/style.css?v=a8865e03`, **8,303 B**, sha256 `eb0396f0dd322a8c18ded1dd874bf95cf2a55b780b81684c4474bf477b1c5285`; the zip twin is **byte-identical** |
| archive           | `preview.colorlib.com/downloads/free/card-08.zip`, **200, 490,403 B** (= 478.9 KiB ✓ the claim), sha256 `4c8cfd2e…`, **17 entries**: 5 dirs + `index.html` 4,136 B + `css/style.css` 8,303 B + `README.md` 1,260 B + **4 JPEGs** + **6 `woff2`** |
| live ↔ archive    | CSS **identical sha256** and all four images **identical sha256** (`lake` `a0e6840f…`, `tokyo` `ea3383df…`, `peru` `c01aa731…`, `aurora` `300c0183…`) → **live preview verified; the archive is its un-versioned twin** |
| `js/snippet.js`   | **404** — no `js/` directory in the archive and **0 `<script>` in the file**; the archive README claims one (**defect 1**) |
| fonts             | **6** `@font-face` rules — Space Grotesk **400 / 500 / 700**, `latin` + `latin-ext` — but only **2 distinct binaries**: `latin` = 22,320 B (`a0d054c4…`) ×3 and `latin-ext` = 18,924 B (`054c266f…`) ×3 → **500 *and* 700 are synthesised from the Regular cut** (**defect 2**) |
| images            | **4**, all **560 × 720** progressive JPEG: `lake.jpg` 86,542 B, `tokyo.jpg` **140,724 B**, `peru.jpg` 84,096 B, `aurora.jpg` 50,861 B. Live adds `fetchpriority="high" decoding="sync"` to cards 1–2 and `loading="lazy" decoding="async"` to cards 3–4 |
| CSS size          | 333 lines, **46 rules** in one sheet; the host page loads **no** second sheet and no CDN |
| classes           | **17** in the markup, **18** selected by the sheet → **1 dead selector**, `.cl-icon` (**seventh** sibling in a row) and **0 unstyled markup classes** |
| anchors           | **4**, all `href="#"` (one per card); **0 forms, 0 buttons**, **4 focusable elements** on the page |
| headings          | 1 × `h1` ("Where to go when the season turns") + **4 × `h2`**, one per card title                |
| blocks            | `<main class="cl-card08-demo">` → `<header>` (eyebrow + `h1`) → `<ul class="cl-card08-grid">` of **4 `<li>`/`<article>`** |
| media queries     | **2** — `@media (hover: none)` (1 rule: panel permanently open) and `@media (prefers-reduced-motion: reduce)` (2 rules: three transitions + the hover zoom). **0 container queries** |
| keyframes         | **none** — 0 `@keyframes`; all motion is transition-driven                                       |
| custom properties | **1**: `--cl-card08-accent: #d9f99d`, declared on `.cl-card08` and **never re-set** (same pattern as `card-07`) |
| authored scripts  | **0**. The **10** `<script>` elements a browser sees are host injections (gtag `G-SEKJ4E9T4H`, Cloudflare Zaraz, `/s9cc/`, `dataLayer`, beacon) — `curl` gets the file with none |
| content height    | **748.06** at 1,440 · 748.06 at 1,280 (still < 900) · **1,180** at 1,079 · 1,169 at 1,024 · 1,143 at 900 · 1,088 at 814 · 1,081 at 768 · 1,061 at 640 · 1,057 at 600 · **1,969** at 547 · **1,999** at 480 / 390 / 360 / 320 |
| horizontal scroll | **none at any width probed** — `body.scrollWidth === clientWidth` **and** `scrollTo(300,0) → scrollX 0` at 320 / 360 / 390 / 547 / 640 / 768 / 1,024 / 1,440 |

## Design tokens (measured from `style.css`, 8,303 B, and from `getComputedStyle` at 1440 px)

### Palette — a near-black ground, a bone-white ink, and one lime

| role              | value                  | where                                                                    |
| ----------------- | ---------------------- | ------------------------------------------------------------------------ |
| page ground       | `#111210`              | `body` background — a **warm** near-black (1 digit off neutral `#111111`; not `#0f172a`, not `#000`) |
| band ink          | `#f4f1ea`              | `.cl-card08-demo` `color` — a **bone** off-white, 16.65:1 on the ground   |
| headline          | `#fff`                 | `h1` inherits `#f4f1ea`; card titles are `#fff`                          |
| accent            | `#d9f99d`              | eyebrow, kicker, fact-chip fill, focus ring — **Tailwind `lime-200`**, exact; 16.09:1 on the ground |
| accent ink        | `#1a2e05`              | text inside the lime chips — **Tailwind `lime-950`**; 12.52:1 on `#d9f99d` |
| card fallback     | `#2a2c28`              | `.cl-card08` background — what shows while the photo loads (a warm dark grey-green) |
| card ink          | `#fff`                 | `.cl-card08` `color`                                                     |
| body copy in card | `#f1efe8`              | `.cl-card08__text` — one step warmer than the page ink, **not** `#fff`   |
| tag fill          | `rgba(0,0,0,.45)`      | `.cl-card08__tag` background, over `backdrop-filter: blur(6px)`          |
| tag border        | `rgba(255,255,255,.45)`| `.cl-card08__tag`, 1 px                                                  |
| scrim             | `rgba(0,0,0,…)` ×4     | see §The scrim, stop by stop                                             |

The palette needs **no fixing** — the ground, ink, accent and chip ink all clear AA by a wide margin.
Every contrast risk on this page is **photography-dependent** (§The scrim, and defects 4–6).

### Type — one face, three declared weights, two real files

- **Space Grotesk** only, `font-family: "Space Grotesk", system-ui, -apple-system, "Segoe UI", Roboto,
  sans-serif` on `body`. No serif, no mono, no second family anywhere on the page.
- Six `@font-face` rules (400/500/700 × `latin`/`latin-ext`) but **two binaries**: the three `latin`
  files are byte-identical (22,320 B, `a0d054c4…`) and the three `latin-ext` files likewise (18,924 B,
  `054c266f…`). So the page's **500 and 700 are browser-synthesised**. Canvas A/B on
  "Lakes and larches" at 28 px: reference **240 / 237 / 242** (400/500/700) vs Google-Fonts Space
  Grotesk **241 / 239 / 239** → the faux 700 is **+1.25 % wider** (3 px), the faux 500 **−0.84 %**
  narrower. Load the real weights and accept a ±1 px drift on the titles.

| run                      | size       | weight | line-height | tracking      | other                                                        |
| ------------------------ | ---------- | ------ | ----------- | ------------- | ------------------------------------------------------------ |
| `.cl-card08-demo__eyebrow` | 14 px    | 500    | normal (18 px box) | —      | `#d9f99d`, block, `margin: 0`                                |
| `.cl-card08-demo__title` | **clamp(30px, 4.4vw, 52px)** | 700 | **1.02** (`53.04` at 52) | `-.035em` (`−1.82 px` at 52) | `max-width: 640px`, `margin: 8px 0 0` |
| `.cl-card08__tag`        | 13 px      | 500    | 19.5 (1.5)  | normal        | `#fff` on the blurred pill                                    |
| `.cl-card08__kicker`     | 13 px      | 500    | 19.5        | **`.08em`** (`1.04 px`) | UPPERCASE, `#d9f99d`, `text-shadow: 0 1px 2px rgba(0,0,0,.6)` |
| `.cl-card08__title` (card)| **28 px** | 700    | **1.1** (`30.8`) | `-.03em` (`−.84 px`) | `#fff`, `text-shadow: 0 1px 3px rgba(0,0,0,.5)`      |
| `.cl-card08__text`       | 15 px      | 400    | **1.5** (`22.5`) | normal   | `#f1efe8`, `margin: 10px 0 0`                                 |
| `.cl-card08__facts span` | **12.5 px**| **700**| 18.75       | normal        | `#1a2e05` on `#d9f99d`, `padding: 4px 10px`                   |

Card root sets `font-size: 15px; line-height: 1.5`, so `13 px` runs sit on a 19.5 px line and the
`12.5 px` chips on 18.75 — **do not "round" 12.5 to 13**: the chip is 26.75 px tall because of it.

### Radii, decoration, motion

| element            | value                                                      |
| ------------------ | ---------------------------------------------------------- |
| card radius        | **22 px** (`border-radius: 22px`) — not a Tailwind step; the stretched link's `::after` repeats it |
| tag chip radius    | `999px` (full pill), `6px 12px` padding, 1 px `rgba(255,255,255,.45)` border |
| fact chip radius   | `999px`, `4px 10px` padding, no border                     |
| photo transition   | `transform .8s cubic-bezier(.2,.7,.2,1)`; hover/focus `scale(1.07)` |
| scrim transition   | `background-color .4s ease`; hover/focus `rgba(0,0,0,.25)` |
| panel transition   | `grid-template-rows .45s ease, opacity .35s ease`          |
| shadow             | **none** — no card shadow, no chip shadow, no ring except focus |
| reduced motion     | `transition: none` on img / scrim / panel **and** `transform: none` on the hovered image |

### Layout — one clamped container, four-column arithmetic, a constant 440

- Container: `.cl-card08-demo` is `max-width: 1280px; margin: 0 auto; padding: clamp(36px, 6vw, 72px)
  16px` and — because the sheet's `:where(html) … { all: revert }` guard resets `box-sizing` — it is
  **`content-box`**: outer **1312 px** at x **64** in a 1440 viewport, grid **1280 px** at x **80**.
  At 1080 the padding has fallen to **64.8 px**; at 640 it is **38.4**; at 600 and below it floors at
  **36 px** (`6vw` of 600 = 36).
- Grid: `repeat(auto-fit, minmax(250px, 1fr))`, `gap: 16px`, `margin/padding: 0`, `list-style: none`.
  Four columns of **308 px** at 1280 (1280 − 3 × 16 = 1232 ÷ 4).
- Column thresholds are pure arithmetic on the grid width `G`: `4` needs `4·250 + 3·16 = 1048` →
  **viewport 1080**; `3` needs `782` → **viewport 814**; `2` needs `516` → **viewport 548**.
  Measured: **4 at 1080 / 3 at 1079 · 3 at 814 / 2 at 813 · 2 at 548 / 1 at 547.**
- Head: `margin-bottom: 32px`, `h1` `max-width: 640px` → at 1440 the head is **1280 × 132.06** and the
  grid starts at **y 236.06**.
- Card: `min-height: 440px` — and it is the **actual** height at every width probed (320 → 1440),
  because the content stack peaks at 239.05 px (at 320, panel open) against 440 − 46 px of padding.

### Component geometry (1440 px, card 1, coordinates relative to the card's border box, 308 × 440)

| part        | box                                                            |
| ----------- | -------------------------------------------------------------- |
| tag chip    | at **(16, 16)**, **63 × 33.5** (card 2 "City break" 92, card 3 80, card 4 69) |
| content     | **264 wide**, `padding: 22px 22px 24px`, **100.3 tall** at rest → bottom edge flush with the card's 24 px padding |
| kicker      | at y **361.7**, **19.5** tall (82.2 – 86.6 % of the card height) |
| title       | at y **385.2**, **30.8** tall — **one line** at 308 wide for all four titles |
| panel       | at y **416**, height **0** at rest, **116.25** open (94.5 % → 50.8 % of the card) |
| panel text  | **67.5** (3 × 22.5) at 264 wide, `margin-top: 10px`              |
| facts row   | **26.75** tall, `gap: 8px`, `margin-top: 12px`                   |
| photo       | **308 × 440** box for a **560 × 720** source → `cover` **crops 10 %** of the width, no vertical crop |

Open-state arithmetic that must reproduce exactly: `22 (pad) + 19.5 (kicker) + 4 (margin) + 30.8
(title) + 10 + 67.5 (text) + 12 + 26.75 (chips) + 24 (pad) = 216.55`.

### Responsive matrix (measured; the card height never moves)

| viewport | columns | grid width | card height | panel open | content height | document height |
| -------: | ------: | ---------: | ----------: | ---------: | -------------: | --------------: |
|     1440 |       4 |       1280 |         440 |     116.25 |         216.55 | 748.06 (page)   |
|     1280 |       4 |       1248 |         440 |     116.25 |         216.55 | 748.06          |
|     1100 |       4 |       1068 |         440 |     116.25 |         216.55 | 748.06          |
|     1080 |       4 |       1048 |         440 |     116.25 |         216.55 | 748.06          |
|     1079 |       3 |       1047 |         440 |           — |              — | 1180            |
|     1024 |       3 |        992 |         440 |           — |              — | 1169            |
|      900 |       3 |        868 |         440 |           — |              — | 1143            |
|      814 |       3 |        782 |         440 |           — |              — | 1088            |
|      813 |       2 |        781 |         440 |           — |              — | 1088            |
|      768 |       2 |        736 |         440 |           — |              — | 1081            |
|      640 |       2 |        608 |         440 |           — |              — | 1061            |
|      548 |       2 |        516 |         440 |           — |              — | 1057            |
|      547 |       1 |        515 |         440 |      93.75 |         194.05 | 1969            |
|      480 |       1 |        448 |         440 |      93.75 |         194.05 | 1999            |
|      390 |       1 |        358 |         440 |     116.25 |         216.55 | 1999            |
|      320 |       1 |        288 |         440 |     138.75 |         239.05 | 1999            |

The panel height is **copy-driven**, not fixed: 116.25 at 1440 (3-line blurb, one chip row), **93.75**
at 547 and 480 (2-line blurb), 116.25 at 390 (3 lines), **138.75** at 320 (4 lines). The card absorbs
all of it inside 440. Head line counts: `h1` is **2 lines at ≥ 897 and at ≤ 516**, **1 line between 517
and 896**; `font-size` is 52 px at ≥ 1,182, `4.4vw` between 682 and 1,181, and 30 px at ≤ 681.

### The scrim, stop by stop

`linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,.35) 55%, rgba(0,0,0,.9) 100%)`
on a layer that covers the whole card. At rest, the text runs sit in the **strongest** part; open, the
stack moves up into the gradient's **weak middle**.

| run (state)              | position on the card | scrim alpha there | computed on a white photo | measured on the four real photos |
| ------------------------ | -------------------- | ----------------- | ------------------------- | -------------------------------- |
| tag text (rest)          | 3.6 – 11.3 %         | .25 → 0 (plus the chip's own .45) | 3.36 (chip over white) | 3.73 – 16.75, **3.73 / 3.90 on cards 3 / 1** |
| kicker (rest)            | 82.2 – 86.6 %        | **.68 – .74**     | 6.80 – 8.47               | **9.77 – 15.19**                 |
| title (rest)             | 87.5 – 94.5 %        | .75 – .83         | 10.37 – 14.16             | 9.10 – 18.53                     |
| kicker (open)            | 55.8 – 60.2 %        | **.36 – .41**     | **2.16 – 2.53**           | 7.25 – 8.46 (card 1)             |
| title (open)             | 61.1 – 64.8 %        | .42 – .47         | 3.07 – 3.59               | 6.66 – 9.43 (card 1)             |
| blurb (open)             | 70.4 – 85.7 %        | .54 – .73         | 3.95 – 8.20               | 4.57 (brightest decile) – 10.41  |
| fact chips (open)        | 88.5 – 94.5 %        | .76 – .83         | 12.52 (opaque chip)       | 12.52                            |
| focus ring               | card inset 5 px      | —                 | **1.17 on white**         | depends on the photo             |

Read this table as: **the idle state is safe on these four photos, the open state is only safe while
the photo under the panel happens to be dark.** The reference's Dolomites and Peru photos are bright at
mid-height (light sky, snow, cloud), which is why defect 4 asks for a deeper middle stop rather than a
palette change.

## Requirements

### Requirement 1: Page shell and the single field-guide band

The app SHALL render one band on the near-black ground `#111210` — a head over a four-card grid — with
**no navigation, no hero photograph, no filter row, no search field, no map, no pagination** and no
page background image.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport with the webfonts loaded
- **WHEN** the page is measured
- **THEN** `<body>` background is **`#111210`** (`rgb(17,18,16)`) and the band is **748.06 px** tall
- **AND** the container is **1312 px outer / 1280 px content** at x **64**, `padding: 72px 16px`,
  `color: #f4f1ea`
- **AND** the container's `box-sizing` is **`content-box`** — the 1312 px figure is the artefact of the
  sheet's `all: revert` guard, not a second `max-width`
- **AND** the document is **900 px** tall (the band is shorter than the viewport), so no scrollbar
  appears at 1440

#### Scenario: No invented sections or controls

- **GIVEN** the rendered app
- **THEN** it contains exactly one band: one `h1`, one eyebrow, four articles
- **AND** it contains **no** search bar, filter chips, sort control, "load more", pagination, map,
  gallery, price, rating, booking form or multi-column footer
- **AND** the only element below the grid is the single Component Dock attribution line
  (Requirement 12)

#### Scenario: The document title and language

- **GIVEN** the built `index.html`
- **THEN** `lang="en"` and the title names the recreation (e.g. "Roadbook — field guides"), **not** the
  catalogue item "Card V08 | Colorlib"
- **AND** no `*.colorlib.com` string appears in any app file

### Requirement 2: The head — a lime eyebrow and a clamped display title

The app SHALL render a plain header block (`margin-bottom: 32px`) holding a 14 px lime eyebrow and a
`clamp(30px, 4.4vw, 52px)` title capped at **640 px**, left-aligned, with **nothing on the right**.

#### Scenario: Head geometry at 1440

- **THEN** the head is **1280 × 132.06** at y **72**, and the grid starts at **y 236.06**
- **AND** the eyebrow "Field guides · 2026 edition" is **14 px / 500** in `#d9f99d`, one line, 18 px box
- **AND** the `h1` "Where to go when the season turns" is **52 px / 700 / 1.02 / −.035em** in
  `#f4f1ea`, **two lines** (`106.06`), `margin-top: 8px`
- **AND** the separator is **U+00B7** (middle dot), not a hyphen and not U+2022

#### Scenario: The title clamp and its two wrap boundaries

- **GIVEN** the `h1` uses `clamp(30px, 4.4vw, 52px)` with `max-width: 640px`
- **THEN** it measures **52** at ≥ 1,182, **39.6** at 900, **35.86** at 815, **30** at ≤ 681
- **AND** it is **2 lines at 897 and above** (39.47 px → `534.7 + 98.09` two rects) and **1 line at 896**
  (39.42 px, one rect of 638.47 ≤ 640)
- **AND** it is **1 line at 517** (30 px, 484.36 ≤ 485 grid) and **2 lines at 516** — the second
  boundary is the *container*, not the `max-width`

### Requirement 3: The grid — `auto-fit` arithmetic, no breakpoint classes

The grid SHALL be `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 16px` inside a `ul` with `list-style: none; margin: 0; padding: 0`.

#### Scenario: Column counts and their exact thresholds

- **THEN** `grid-template-columns` resolves to **4 tracks (308 px each) at 1440 and 1080**, **3 at 1079
  and 814**, **2 at 813 and 548**, **1 at 547 and below**
- **AND** there is **no** `sm:`/`md:`/`lg:` column class and no `@media` rule about columns — the three
  thresholds are arithmetic (`4` needs a 1048 px grid, `3` needs 782, `2` needs 516)
- **AND** at 813 the grid is 781 px and holds two 382.5 px cards

#### Scenario: Four cards, four list items

- **THEN** the grid holds exactly **4** `<li>` children each wrapping one `<article>`
- **AND** `4` is content, not a magic number: the data array drives the count

### Requirement 4: Card anatomy — a photo plate with a constant 440 px height

Each card SHALL be `position: relative; display: flex; align-items: flex-end; min-height: 440px;
overflow: hidden; border-radius: 22px; background: #2a2c28; color: #fff; font-size: 15px;
line-height: 1.5; isolation: isolate`.

#### Scenario: The height never changes

- **THEN** every card is **440 px** tall at 320, 390, 480, 547, 640, 768, 1024, 1280 and 1440
- **AND** it is **still 440** with the panel fully open at 1440 (content 216.55) and at 320 (content
  239.05) — the reveal grows **inside** the card, it does not grow the card
- **AND** no `aspect-ratio`, no fixed `height`, and no `align-items: stretch` is used to get there
- **AND** the 22 px radius clips the photo, the scrim and the zoom (`overflow: hidden`)

#### Scenario: The isolation stack

- **THEN** the card is its own stacking context (`isolation: isolate`), the photo sits at `z-index: -2`
  and the scrim at `z-index: -1`, so both stay **behind** the text but **inside** the card
- **AND** removing `isolation` would drop them behind the page — it is not decorative

### Requirement 5: The photo layer — absolute cover, 0.8 s zoom

The app SHALL render each photo as an `<img>` at `position: absolute; inset: 0; z-index: -2;
width: 100%; height: 100%; object-fit: cover`, with `alt` naming the scene.

#### Scenario: Geometry and crop

- **THEN** the photo box is exactly the card's **308 × 440** at 1440 for a **560 × 720** source, i.e.
  `object-fit: cover` **crops 10 % of the width** and nothing vertically
- **AND** the fallback `#2a2c28` is visible only before the image paints — it is not a border

#### Scenario: Hover and focus zoom

- **GIVEN** the card is hovered (or holds focus)
- **THEN** the image transform is `scale(1.07)` — measured matrix `1.07` — reached over **.8 s
  cubic-bezier(.2,.7,.2,1)**
- **AND** at 50 ms into the transition the transform reads `1.0158`, so a probe that samples
  immediately will under-report the zoom
- **AND** with `prefers-reduced-motion: reduce` the transform stays `none` and the transition is `0s`

### Requirement 6: The scrim — four stops, then a flat wash

The app SHALL render a scrim layer at `position: absolute; inset: 0; z-index: -1` with the gradient
`linear-gradient(180deg, rgba(0,0,0,.25) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,.35) 55%,
rgba(0,0,0,.9) 100%)` and `transition: background-color .4s ease`.

#### Scenario: The gradient is preserved under the hover wash

- **GIVEN** the card is hovered
- **THEN** `background-color` goes `rgba(0,0,0,0) → rgba(0,0,0,.25)` **under** an unchanged
  `background-image`
- **AND** at 50 ms it reads `rgba(0,0,0,.035)` — interpolating, not switched
- **AND** the hover state therefore darkens the photo uniformly instead of replacing the gradient

#### Scenario: The scrim must be deepened when the panel opens

- **GIVEN** the measured table in §The scrim, stop by stop
- **THEN** the app **SHALL** raise the 55 % stop to at least `.55` and the 100 % stop to at least `.92`
  (or add an opaque bottom plate behind the content) so the open-state kicker clears **4.5:1** on a
  white photo
- **AND** the idle state's look **SHALL NOT** change: the kicker already sits at `.68 – .74` and
  measures **9.77 – 15.19:1** on the four reference photos
- **AND** the recreation's own placeholder photos must be checked the same way — `picsum` seeds vary

### Requirement 7: The tag chip — a blurred pill at the top-left

The app SHALL render a pill tag at `top: 16px; left: 16px` — `padding: 6px 12px`, `border-radius: 999px`,
`background: rgba(0,0,0,.45)`, `border: 1px solid rgba(255,255,255,.45)`,
`backdrop-filter: blur(6px)`, `font-size: 13px; font-weight: 500; color: #fff`.

#### Scenario: Tag geometry and copy

- **THEN** the chip is **33.5 px** tall and its width is text-driven: **63** ("Hiking"), **92**
  ("City break"), **80** ("Trekking"), **69** ("Winter")
- **AND** the four tags are `Hiking`, `City break`, `Trekking`, `Winter` — one per card, in that order

#### Scenario: The chip must not stay at 45 %

- **THEN** the chip's own text **SHALL** be brought to ≥ 4.5:1 on a light sky — measured **3.73:1**
  (card 3) and **3.90:1** (card 1) against the brightest decile of the blurred chip surface
- **AND** raising the fill to ~`.6`, or adding a 1 px `text-shadow`, is the documented fix
- **AND** the blur is part of the design: keep `backdrop-filter: blur(6px)` (with `-webkit-` prefix
  only if a target needs it)

### Requirement 8: The content stack — kicker, title, then the collapsible panel

The app SHALL render, inside a `width: 100%; padding: 22px 22px 24px` block, in this order: the
destination kicker, the 28 px title wrapping the card's single anchor, then the reveal panel.

#### Scenario: Kicker and title at rest

- **THEN** the kicker is **13 px / 500**, `text-transform: uppercase`, `letter-spacing: .08em`,
  `#d9f99d`, `margin: 0 0 4px`, with `text-shadow: 0 1px 2px rgba(0,0,0,.6)`
- **AND** the four kickers are `Dolomites, Italy`, `Tokyo, Japan`, `Cusco region, Peru`,
  `Tromsø, Norway` — the **`ø` is U+00F8**, not `o`
- **AND** the title is **28 px / 700 / 1.1 / −.03em** in `#fff`, **one line** at 308 px wide for all
  four titles (`Lakes and larches`, `Neon after dark`, `Above the clouds`, `Chasing the lights`)
- **AND** the content block is **100.3 px** tall at rest and its bottom edge sits on the card's 24 px
  padding

#### Scenario: The panel's own geometry

- **THEN** the blurb is **15 px / 400 / 1.5** in `#f1efe8`, `margin-top: 10px`, and measures **67.5 px**
  (3 lines) at 264 px wide, **45 px** (2 lines) at 547 and 480, **90 px** (4 lines) at 320
- **AND** the facts row is `display: flex; gap: 8px; margin-top: 12px`; each chip is `padding: 4px 10px;
  border-radius: 999px; background: #d9f99d; color: #1a2e05; font-size: 12.5px; font-weight: 700`
- **AND** the chips are `5 routes` / `6 min read`, `18 places` / `9 min read`, `4 days` / `11 min read`,
  `3 nights` / `7 min read`
- **AND** the chips are **26.75 px** tall and the panel **116.25 px** at 1440

### Requirement 9: The reveal — `grid-template-rows: 0fr → 1fr`

The panel SHALL be `display: grid; grid-template-rows: 0fr; opacity: 0; transition: grid-template-rows
.45s ease, opacity .35s ease`, with an inner wrapper at `min-height: 0; overflow: hidden`; hover **and**
`:focus-within` set the row to `1fr` and opacity to `1`.

#### Scenario: The collapse actually animates

- **THEN** at rest the panel measures **0 px** (`grid-template-rows: 0px`), open **116.25**
  (`116.25px`)
- **AND** at 50 ms it reads **1.47 px / opacity .171** — a real interpolation, so a probe must wait
  ≥ 500 ms for a settled read
- **AND** both `min-height: 0` on the inner wrapper and `overflow: hidden` are present — removing
  either breaks the collapse

#### Scenario: Touch and reduced motion

- **GIVEN** `matchMedia('(hover: none)')` is true (a touch device)
- **THEN** `@media (hover: none)` forces `grid-template-rows: 1fr; opacity: 1`, so the panel is
  **permanently open** — measured 116.25 px at 390 signed in as a touch device
- **AND** with `prefers-reduced-motion: reduce` all three transitions are `0s` and the image keeps
  `transform: none` — the panel still opens, instantly
- **AND** no JavaScript is involved in either case

### Requirement 10: One anchor per card, focus drawn inside it

Each card SHALL contain exactly **one** focusable element — the anchor inside its `<h2>` — whose
`::after` is `position: absolute; inset: 0; z-index: 1; border-radius: 22px`; the link sets
`outline: none` and `:focus-visible::after` draws `outline: 3px solid #d9f99d; outline-offset: -5px`.

#### Scenario: The hit area is the card

- **THEN** `document.elementFromPoint()` at the centre of the tag chip returns the **link** — every
  visible element inside the card is decoration under the stretched overlay
- **AND** the card has **4 focusable elements per page**, one per card, and **0** buttons and **0**
  forms
- **AND** keyboard `Tab` focuses card 1's link first, then 2, 3, 4, and focusing one card opens **only
  that card's** panel

#### Scenario: The ring must survive a bright photo

- **THEN** the settled ring is `rgb(217,249,157) solid 3px` at `offset −5px`, radius **22**, on a layer
  at `z-index: 1`
- **AND** because lime on a white photo measures **1.17:1**, the app **SHALL** add a dark twin — a
  `box-shadow: 0 0 0 1px rgba(0,0,0,.6)` on the same `::after`, or a 1 px dark `outline` outside the
  lime one — so the indicator is visible on any photograph
- **AND** the ring is drawn **inside** the card (negative offset), so it is never clipped by
  `overflow: hidden`

### Requirement 11: Responsive integrity

The app SHALL hold the layout at every width from 320 to 1440 with **no horizontal scroll**.

#### Scenario: No overflow at any probed width

- **THEN** `body.scrollWidth === documentElement.clientWidth` and `window.scrollTo(300, 0) → scrollX 0`
  at 320, 360, 390, 547, 640, 768, 1024 and 1440
- **AND** the document height matches the matrix: **900** at 1440 / 1280, **1180** at 1079, **1169** at
  1024, **1088** at 814, **1057** at 600, **1969** at 547, **1999** at 480 / 390 / 360 / 320
- **AND** the padding's `clamp(36px, 6vw, 72px)` gives 72 at ≥ 1,200, 64.8 at 1,080, 38.4 at 640 and a
  36 floor at ≤ 600

#### Scenario: Nothing is clipped when the panel opens

- **THEN** at 320 the open content is **239.05** inside 440 — 201 px of headroom — so no blurb line is
  ever cut by `overflow: hidden`
- **AND** the card's own `overflow: hidden` is what clips the zoomed photo, not the text

### Requirement 12: Semantics, copy fidelity and attribution

The app SHALL use one `h1` and one `h2` per card, real `<li>`/`<article>` structure, scene `alt` text on
every image, and the reference's copy.

#### Scenario: Copy

- **THEN** the eyebrow is `Field guides · 2026 edition` and the `h1` is `Where to go when the season
  turns`
- **AND** the four cards carry exactly the tag / kicker / title / blurb / chips quoted in Requirements
  7 and 8, and `Tromsø` keeps its **ø**
- **AND** blurbs may be paraphrased but keep the same *kind* of content and the same three-line length
  at 264 px wide

#### Scenario: Attribution and provenance

- **THEN** a single footer line links `https://www.componentdock.com/` as "Component Dock" — the only
  deliberate addition to the reference
- **AND** no app file mentions ColorLib, `card-08` or `Card V08`; provenance lives here, in
  `TEMPLATES.md` and in the PR

## Screenshot analysis (catalogue image, `card-08.jpg`)

- **1,200 × 972 progressive JPEG, 86,878 B**, white frame, with the preview host's **macOS browser
  chrome** baked in (traffic lights + a `preview.colorlib.com` URL bar) — the same framing as
  `card-06.jpg` / `card-07.jpg`.
- **It is a scaled render, not a 1,200 px layout.** The card row spans ≈ **991 px** in the image
  against a real **1280 px** grid, and one card measures **241 px** against a real **308**: scale
  ≈ **0.775 – 0.782**. Measure nothing from it — and do not conclude "the design is 1,200 wide".
- It shows the **whole page, uncropped**: eyebrow, two-line title, one row of four cards, and the 72 px
  band padding. Below the cards the ground continues to the frame's bottom edge because the page is
  shorter than the capture window.
- **The reveal is invisible in it.** All four panels are collapsed, so the catalogue image is **not**
  evidence for the blurb, the chips, the zoom or the hover wash — those come from the live DOM only.
  Anyone recreating this from the screenshot alone would ship three-quarters of the design.
- **The card bottoms are indistinguishable from the page ground**: the scrim reaches 90 % black, so at
  screenshot brightness the last 20 px of every card reads as `#111`. Sample the ground there, not at
  the card's foot, or you will "measure" a card that ends early.
- Visual read: a **warm near-black** ground (sampled `#11110f` — 1 digit off the real `#111210`, JPEG
  noise); **one lime note repeated four times** (eyebrow, then each destination); a **tight, heavy
  two-line title** that is the only large type on the page; four photographs of very different colour
  temperature — turquoise lake, saturated neon, cloud over green terraces, violet aurora — doing all the
  work the palette does not; **white hairline pills** at the card tops reading as labels rather than
  controls; and a **22 px radius** soft enough to read as a photo tile rather than a card.
- Hierarchy is carried by **size and weight, not colour**: 52/700 title, 28/700 card titles, 13–15 px
  everything else. The only second colour is lime, and it never fills anything larger than a chip.

## Known reference defects (do not copy)

1. **The archive README invents `js/snippet.js`.** It lists "js/snippet.js — the behaviour, in plain
   JavaScript"; there is no `js/` directory, `…/js/snippet.js` answers **404**, and the page has
   **0 `<script>`**. The README's `images/` claim **is** true this time (four JPEGs) — verify both per
   slug, as `card-06` lied twice and `card-07` once.
2. **Faux type, both weights.** Six `@font-face` rules resolve to **two binaries**; 500 *and* 700 are
   synthesised from the Regular cut. Canvas at 28 px: ref **240 / 237 / 242** vs real **241 / 239 /
   239** → the faux 700 is **+1.25 % wider**. Load real Space Grotesk `400;500;700`.
3. **`.cl-icon` is dead for the seventh sibling in a row** — 17 markup classes, 18 selectors, the 18th
   never used.
4. **The scrim's middle stops are under-built for the open state.** With the panel open the kicker
   rides `.36 – .41` alpha, which is **2.16:1** on a white photo; only the reference's dark-ish photos
   keep it at 7.25–8.46. Deepen 55 % → `.55` and 100 % → `.92` (or add a bottom plate). Do **not**
   lighten the idle state.
5. **The tag chip fails on a light sky.** `rgba(0,0,0,.45)` + `blur(6px)` gives white text **3.73:1**
   on the Peru card and **3.90:1** on the Dolomites card at the chip's brightest decile — below AA for
   13 px. Raise the fill, or add a 1 px text shadow.
6. **The focus ring disappears on a bright photo.** Lime `#d9f99d` on white is **1.17:1**. The ring is
   correct in shape (inset 5 px, radius 22) but has no dark twin; add one.
7. **`fetchpriority="high" decoding="sync"` on two photographs**, one of them **140,724 B** — the
   largest asset on the page, decoded synchronously above the fold. Use
   `loading="lazy" decoding="async"` for all four (the reference already does for cards 3–4).
8. **Four dead `href="#"` anchors.** Clicking any card jumps to the top of the document and does
   nothing else. Acceptable in a static recreation; do not invent routes to "fix" it.
9. **`--cl-card08-accent` is declared once and never overridden** — a theming hook with no data behind
   it (same pattern as `card-07`). Keep the token; do not invent per-card accents.
10. **The hover reveal has no idle affordance** — no chevron, no "more" label, no underline. A mouse
    user has to discover it. Leave it (the ColorLib feature list *is* the hover reveal), but do not
    "help" by adding a fake button: it would be the first control on a page that has none.

## Adapting to the repo (deltas the implementer owns)

| reference                                              | recreation                                                                    |
| ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `max-width: 1280px` on a `content-box` element          | `max-w-[1312px] px-4` (content 1280) — **`max-w-[1280px]` would give a 1248 grid and 300 px cards** |
| `padding: clamp(36px, 6vw, 72px) 16px`                  | `py-[clamp(36px,6vw,72px)] px-4`                                              |
| `repeat(auto-fit, minmax(250px, 1fr))`, `gap: 16px`      | `grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4`                    |
| `min-height: 440px` + `flex items-end`                   | `min-h-[440px] flex items-end`                                                |
| `grid-template-rows: 0fr → 1fr`                          | `grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-[450ms] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-within:…` |
| `@media (hover: none)`                                   | no Tailwind variant exists — write a plain CSS block in `index.css` (e.g. `@media (hover: none) { .card-panel { grid-template-rows: 1fr; opacity: 1 } }`) or the arbitrary variant `[@media(hover:none)]:grid-rows-[1fr]` |
| Space Grotesk woff2 ×6 (2 binaries)                      | one Google Fonts `<link>`: `css2?family=Space+Grotesk:wght@400;500;700&display=swap` |
| 4 × `images/*.jpg` (560 × 720, 50–140 KB)                | `picsum.photos/seed/roadbook-1..4/560/720`, `loading="lazy" decoding="async"`  |
| `rgba(0,0,0,.25)` hover wash                             | `group-hover:bg-black/25` on the scrim + `transition-colors duration-[400ms]`   |
| `scale(1.07)` over `.8s cubic-bezier(.2,.7,.2,1)`        | `transition-transform duration-[800ms] ease-[cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.07]` |
| 0 scripts                                                | 0 scripts — hover/focus are pure CSS                                           |
| no footer                                                | one Component Dock attribution line (repo rule)                                |
| `#d9f99d` / `#1a2e05` / `#111210` / `#f4f1ea` / `#2a2c28` | `@theme` tokens `--color-accent`, `--color-accent-ink`, `--color-ground`, `--color-ink`, `--color-card-fallback` |

## Verification checklist

- [ ] `apps/roadbook` exists, package `@free-react-templates/roadbook`, `public/CNAME` =
      `roadbook.free.componentdock.com`, `"homepage"` = `https://roadbook.free.componentdock.com`
- [ ] `grep -ri colorlib apps/roadbook` and `grep -ri 'card-08' apps/roadbook` → **no matches**
- [ ] `body` background is `#111210`; container is 1312 outer / 1280 content, `padding: 72px 16px` at
      1440; band **748.06** tall; document 900 (no scrollbar at 1440)
- [ ] eyebrow 14/500 `#d9f99d` with a **U+00B7**; `h1` 52/700/1.02/`−.035em`, 640 max-width, 2 lines
      (106.06) at 1440, 30 px and 2 lines at 390
- [ ] `h1` is 2 lines at 897 and 1 line at 896; 1 line at 517 and 2 at 516
- [ ] grid columns: 4 at 1080, 3 at 1079, 3 at 814, 2 at 813, 2 at 548, 1 at 547 — with **no** column
      breakpoint class in the source
- [ ] exactly 4 `<article>`s, 4 `<h2>`s, 4 anchors, 0 buttons, 0 forms, 4 focusable elements
- [ ] every card is **440 px** at 320 / 390 / 480 / 547 / 640 / 768 / 1024 / 1280 / 1440, and still 440
      with the panel open
- [ ] card radius 22; photo `absolute inset-0 object-fit: cover`, 308 × 440 for a 560 × 720 source
      (10 % horizontal crop); fallback `#2a2c28`
- [ ] scrim is the exact four-stop gradient, and hover adds `rgba(0,0,0,.25)` **without replacing** it
- [ ] scrim deepened for the open state (55 % ≥ .55, 100 % ≥ .92 **or** a bottom plate); kicker clears
      4.5:1 on a white photo when the panel is open; idle look unchanged
- [ ] tag chips 33.5 tall at (16,16), `blur(6px)`, and brought to ≥ 4.5:1 on a light sky
- [ ] kicker 13/500 uppercase `.08em` lime with the text shadow; four kickers including `Tromsø`
      (**U+00F8**) and `Cusco region, Peru`
- [ ] card title 28/700/1.1/`−.03em` `#fff`, one line at 308 px for all four
- [ ] panel: `grid-template-rows: 0fr → 1fr` + opacity `.35s`, inner `min-height:0; overflow:hidden`;
      open height 116.25 at 1440, 93.75 at 547/480, 138.75 at 320; content block 216.55 at 1440
- [ ] blurb 15/400/1.5 `#f1efe8`; chips 12.5/700 on `#d9f99d` with `#1a2e05`, 26.75 tall, gap 8
- [ ] `@media (hover: none)` keeps the panel open; no JS involved
- [ ] `prefers-reduced-motion: reduce` → all transitions `0s` and no hover zoom
- [ ] focus: `Tab` opens only the focused card; ring `3px #d9f99d` inset 5 px on a `22px` radius, **plus
      a dark twin** so it survives a white photo
- [ ] `elementFromPoint` over the tag returns the link (stretched hit area)
- [ ] no horizontal scroll: `scrollTo(300,0) → scrollX 0` at 320 / 360 / 390 / 547 / 640 / 768 / 1024 /
      1440; document heights match the matrix
- [ ] every image has a scene `alt`, `loading="lazy"`, `decoding="async"`; no `fetchpriority="high"`
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app roadbook` (typecheck + lint + knip + fallow + 100 % coverage tests + build)
      passes; `openspec validate template-roadbook --type spec` is valid
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`, **directly after the `Card 01` row**,
      and `npm run readme:status` regenerated
