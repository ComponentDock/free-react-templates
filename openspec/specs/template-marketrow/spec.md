# Template: Marketrow (Product cards — a shop row of four items with sale flags, star ratings and an add-to-bag toggle)

## Purpose

A **four-card product row whose whole design is one restriction: there is no brand colour**. Every structural
element — heading, card plate, button, badge, bag chip — is `#18181b` ink on `#f1f1ef` paper and `#ffffff`
cards, so the only colour on the page is *semantic*: **red** for a discount, **amber** for a rating, **green**
for "added", **brown** for low stock. ColorLib's own listing states the brief in one line:

> "Product cards for an online shop with a square photo, sale or stock flag, star rating, sale price with the
> original... Free download, no jQuery or plugins."

There is no hero, no navigation, no footer and no form. The page is a single band: a left-aligned eyebrow +
headline with a **round white "Bag 0" chip** pushed to the right edge, a live status line, and a grid of four
250–285 px product cards. Each card is the same anatomy in the same order — square photo, corner flag, category,
name, star rating, price, full-width dark button — and the four cards differ only in *which* flag they carry:
`-25%`, `New`, `-15%`, `Only 3 left`. No card carries two.

The design's personality is in five small, copyable details; lose any of them and a pixel-correct palette reads
as a generic shop grid:

1. **The square photo is the top half of the card** (`aspect-ratio: 1`, no padding, no inset) — the plate's
   18 px radius clips it, so the two top corners are rounded and the two bottom corners are not.
2. **The flag is a 8 px-radius rectangle pinned 12 / 12**, not a pill and not a chip under the photo — and it
   has three *different* treatments (`-25%` red / `New` ink / `Only 3 left` white with brown text), all at the
   same 12.5 px / 700.
3. **The rating is a masked 5-star bar, not five icons.** One 80 × 15 box, a repeating star `mask`, and a
   `linear-gradient` hard-stopped at `score / 5 × 100 %` — so 4.3 renders as four whole stars plus **30 % of the
   fifth**, not a half star.
4. **The button is ink, full-bleed inside the card's padding, and it flips to pale lime** (`#ecfccb` with
   `#3f6212` text, a tick replacing the plus) when the item is in the bag — the only pale surface anywhere.
5. **The bag chip is the only pill on the page** (`border-radius: 999px`, white, 1 px shadow) and it is **not
   a control** — a `<p>` that prints a count, with a 24 px ink counter disc inside it.

Composition at 1440 × 900 (measured with `getBoundingClientRect`, Playwright 1.62 Chromium):

| # | band                              | ground     |    top |  height |
| - | --------------------------------- | ---------- | -----: | ------: |
| 0 | page (`body`)                     | `#f1f1ef`  |      0 |   740   |
| 1 | `.cl-card02-demo` container       | —          |      0 |   740   |
| 2 | `__head` (eyebrow + `h1` + chip)  | —          |     72 |    64   |
| 3 | `__status` (live region)          | —          |    146 |     1   |
| 4 | `__grid` (4 × 285 cards)          | —          |    165 |   503   |

The design is **740 px tall at 1440** — it does not fill a 900 px viewport, and that is correct: 72 px of
container padding, a 64 px head, a 1 px status line and one 503 px row. It is a *section*, not a site. The
recreation therefore ships a single-page app whose one band is this row, plus the minimum chrome the repo
requires (title/meta, a `main` landmark, a footer carrying the Component Dock link). **Do not invent a nav, a
hero, a product-detail page, a filter bar, a "load more" or a footer column set to fill the viewport.**

Recreation of the ColorLib "Card V02" design (`card-02`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `card-02`
- **ColorLib page:** https://colorlib.com/wp/template/card-02/ — **HTTP 200, 113,718 B**, `<title>`
  `Card V02 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V02"**, `<meta name="description">`
  *"Product cards for an online shop with a square photo, sale or stock flag, star rating, sale price with the
  original... Free download, no jQuery or plugins."*, download listed as **431 KB** (the archive is
  441,796 B). Featured image `card-02.jpg` (**61,240 B**, a real **JPEG**, 1200 × 972 — see §Screenshot
  analysis).
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/card-02/ — **HTTP 200, 6,990 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` **"Card V02 | Colorlib"**, `lang="en"`,
  `meta robots noindex, nofollow`, **no JSON-LD, no `<link>` to fonts, no analytics in the document** (the
  `cf-ray` / gtag / Zaraz entries in a rendered DOM are the preview host's, not the author's).
  ⚠️ **This family lives under `theme/bootstrap/<slug>/`**: `theme/card-02/` → **404, 9 B** and
  `theme/bb/card-02/` → **404, 9 B**. One probe of the trailing-slash form returned **404** and the immediate
  retry returned **200, 6,990 B** (edge cache miss for the directory index) — retry before recording
  "unreachable", and prefer the explicit `/index.html` when you need a stable reading.
- **Stylesheet:** one file, `css/style.css?v=140f9bae` — **10,764 B**, sha256
  `242f23d8b8bcda0b10755a712b081d482083f800d3e288342b685c619ba3dfa2`. **The copy inside
  `downloads/free/card-02.zip` hashes identically** (`242f23d8…`, 10,764 B) ⇒ live preview verified, the
  archive is its un-versioned twin. The live HTML (6,990 B) differs from the zip's `index.html` (6,649 B) only
  by host injections: two `robots` metas, a `cdnjs` `dns-prefetch`, the `?v=` cache-busters with
  `fetchpriority="high"`, and the per-image `fetchpriority` / `decoding` / `loading` hints (first two photos
  eager + `sync`, last two `loading="lazy"` + `async`).
- **Archive:** `https://preview.colorlib.com/downloads/free/card-02.zip` — **HTTP 200, 441,796 B**, **19
  entries** under a `card-02/` prefix (`index.html`, `css/`, `js/`, `images/` × 4, `fonts/` × 6, `README.md`).
  Note the path: **`preview.colorlib.com/downloads/…`**, not `colorlib.com/wp-content/… /downloads/…`
  (`colorlib.com/wp-content/uploads/sites/2/downloads/free/card-02.zip` → **404**).
- **JavaScript: yes, 1,628 B** — `js/snippet.js?v=4a73ca3b`, **HTTP 200**, sha256 `161780102f824585…`,
  byte-identical to the zip's copy. Unlike the sibling `card-01` (whose README promised a script that does not
  exist), this family's page **does** ship one, and its entire behaviour is the add-to-bag toggle described in
  Requirement 6. There is **no jQuery, no framework, no build step** and no other script.
- **Fonts:** **DM Sans**, self-hosted — **six** `@font-face` blocks (400 / 500 / 700 × `latin`, `latin-ext`)
  pointing at `../fonts/dm-sans-<weight>-<subset>.woff2`, `font-display: swap`. **Only two distinct files
  exist**: `…-latin.woff2` **62,556 B** (`aa530716b0d3…`) and `…-latin-ext.woff2` **31,312 B**
  (`0d0609aee778…`), each hashed identically across the three weights — one variable face copied three times
  per subset. There is **no 600 weight** in the sheet: every bold is 700. The recreation loads
  **DM Sans 400/500/700** from Google Fonts with one `<link>`.
- **Images:** **4** JPEGs, `600 × 600` natural and declared: `headphones.jpg` 39,457 B · `watch.jpg`
  45,079 B · `backpack.jpg` 37,348 B · `tote.jpg` 32,876 B. Every one carries a descriptive `alt` naming the
  subject ("Black over-ear headphones on a yellow background", …).
- **SVG:** **3 inline** icons, all `viewBox="0 0 24 24"`, `fill: none; stroke: currentColor`: the **bag** in
  the head chip (`stroke-width 1.8`), and the **plus** + **tick** inside every button (`stroke-width 2.2`).
  No icon font, no sprite.
- **Single-page?** Yes, verified: `index.html` **200** (same 6,990 B as the directory URL), `about.html`
  **404**, `contact.html` **404**. There is no inner-page inventory to mine for sections.
- **Recreation name:** `marketrow` — one lowercase word, shop-row adjacent and *not* the source name, no
  collision with `apps/` (1,747 entries; `cardwell`, `rowcard`, `keycard`, `baseplate`, `greenplate`,
  `soleplate` are other designs), `openspec/specs/` or `docs/templates/`, and **zero substring hits
  repo-wide**: `git grep -il marketrow origin/main` → **no matches**. `colorlib.com/wp/template/marketrow/`,
  `preview.colorlib.com/theme/marketrow/` and `preview.colorlib.com/theme/bootstrap/marketrow/` all →
  **404**; `marketrow.free.componentdock.com` does not resolve yet. The recreation lives at
  `apps/marketrow`, package `@free-react-templates/marketrow`, `marketrow.free.componentdock.com`.
  **No ColorLib string may appear in the app** — provenance lives in this spec, the `TEMPLATES.md` row and
  the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,886 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-02` is the **second member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**), one
of the **214 snippet variants in 19 families** the listing carries and `TEMPLATES.md` does not. The 42
standalone designs in that gap are all prepped; the snippet families are the remaining queue, worked **in
family order, then variant number**. `card-01` → **Nameplate** (`1a09a0c7b`) was the first.

When the app ships, its row belongs in the new family section **`## Bootstrap Cards (20)`**, placed
alphabetically **after `## Bootstrap Carousels` and before `## Bootstrap Checkboxes`** (the existing families
sit as `## Bootstrap Accordions`, `## Bootstrap Buttons`, `## Bootstrap Calendars`, `## Bootstrap Carousels`,
`## Bootstrap Checkboxes`, … around `TEMPLATES.md` lines 639–881), with the heading count bumped. The row is:

```markdown
- [x] **Card 02** — [colorlib](https://colorlib.com/wp/template/card-02/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-02.jpg) · [marketrow](https://marketrow.free.componentdock.com)
```

(Adding rows for the other 18 variants is a **batch** decision for the implementer stream, not a prep-run side
effect — this prep touches no shared file.)

## Reference readings (2026-10-25, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------ |
| preview HTML      | 200, **6,990 B**, `text/html; charset=utf-8`, `<title>` "Card V02 \| Colorlib", `lang="en"`                          |
| stylesheet        | `css/style.css?v=140f9bae`, **10,764 B**, sha256 `242f23d8…`; zip twin **identical**                                  |
| `js/snippet.js`   | **200, 1,628 B**, sha256 `161780102f…`; zip twin **identical** — add-to-bag toggle only                               |
| archive           | `preview.colorlib.com/downloads/free/card-02.zip`, **200, 441,796 B**, 19 entries, `card-02/` prefix                  |
| fonts             | DM Sans 400/500/700 self-hosted woff2; **2 distinct files** (`latin` 62,556 B, `latin-ext` 31,312 B) copied 6×        |
| images            | **4** JPEGs, all `600 × 600`: headphones 39,457 · watch 45,079 · backpack 37,348 · tote 32,876 B                      |
| SVG               | **3 inline**: bag glyph in the head chip, plus + tick inside each of the 4 buttons (24 × 24 viewBox)                  |
| classes           | **30** in the markup, **29** selected by the sheet → **1 dead selector** (`.cl-icon`), **2 hook-only classes** (`__label`, `__score`), 0 framework utilities |
| anchors           | **0** — there is not a single `<a>` on the reference page                                                            |
| headings          | 1 × `h1` ("Everyday carry"), 4 × `h2` (the four product names) — no `h3` anywhere                                    |
| structure         | `<main>` → `<header>` (eyebrow + `h1`, bag chip) → `__status` → `<ul class="grid">` → 4 × `<li><article>`; each article = `__media`(+`__flag`) + `__body` + `__add` |
| media queries     | **exactly one**: `@media (prefers-reduced-motion: reduce)` — *no width breakpoints at all*                            |
| document height   | **740** content at 1440 (viewport 900); 900 at 1280 / 1180 / 1036; 1,303 at 1024; 1,344 at 768; 1,156 at 600; 3,028 at 520; 2,508 at 390; 2,288 at 320 |
| horizontal scroll | **none at any width probed** — `scrollWidth === clientWidth` and `scrollTo(200,0) → scrollX 0` at 320 / 390 / 520 / 523 / 524 / 600 / 768 / 780 / 1024 / 1036 / 1180 / 1280 / 1440 |

## Design tokens (measured from `style.css`, 10,764 B, and from `getComputedStyle` at 1440 px)

### Palette — monochrome chrome, five semantic colours

| role                  | hex / value                 | where                                                                                       |
| --------------------- | --------------------------- | ------------------------------------------------------------------------------------------- |
| page ground           | `#f1f1ef`                   | `body` background — a neutral off-white, not the sibling cards' warm sand                    |
| card surface          | `#ffffff`                   | every card plate and the bag chip                                                            |
| **ink**               | `#18181b`                   | `--cl-card02-accent` **and** the text colour: `h1`, names, scores, button ground, count disc, `New` flag, `--plain` price |
| **muted**             | `#52525b`                   | `--cl-card02-muted`: eyebrow, category, review count, struck-through old price               |
| **sale red**          | `#b91c1c`                   | `--cl-card02-sale`: the `-25%` / `-15%` flag ground **and** the sale price                  |
| **added green**       | `#3f6212`                   | `--cl-card02-ok`: added-state text + border, and the status line                            |
| added surface         | `#ecfccb`                   | added-state button ground — the only pale fill on the page                                   |
| added hover           | `#d9f99d`                   | added-state button hover ground                                                              |
| **star amber**        | `#f59e0b`                   | `--cl-card02-star`, the filled part of the rating mask                                       |
| empty star track      | `#d4d4d8`                   | the unfilled part of the same gradient                                                       |
| media ground          | `#e4e4e7`                   | `__media` behind the photo (shows while a lazy image has not loaded)                         |
| low-stock brown       | `#92400e`                   | `Only 3 left` **text**, on a white flag                                                      |
| button hover          | `#3f3f46`                   | ink button hover / active border                                                             |
| focus ring            | `#a1a1aa`                   | `:focus-visible` outline, 3 px, offset 2                                                     |

**There is no brand colour and no gradient background.** `#18181b` does the work a brand hue normally does, and
the four hue tokens are each used for exactly one meaning (discount, rating, added, low stock). A recreation
that introduces a "brand blue", tints the cards, or unifies `#b91c1c` with `#92400e` ships a different
template: the whole point is that the page is grey until a product says something with colour.

### Type — DM Sans 400 / 500 / 700 only, one tight display cut against tiny uppercase labels

| element             | size / line-height                | weight | tracking            | colour    | case      |
| ------------------- | --------------------------------- | ------ | ------------------- | --------- | --------- |
| eyebrow             | `14px` / 1.45                     | 500    | normal              | `#52525b` | sentence  |
| `h1`                | `clamp(28px, 3.6vw, 40px)` / 1.1  | 700    | **−0.03em** (`−1.2px` at 40) | `#18181b` | sentence |
| bag chip label      | `15px` / 1.45                     | 500    | normal              | `#18181b` | sentence  |
| bag counter         | `13px`                            | 700    | normal              | `#ffffff` on `#18181b` | — |
| status line         | `14px` / 1.45                     | 500    | normal              | `#3f6212` | sentence  |
| category            | `12.5px` / 1.45                   | 500    | **+0.06em** (`0.75px`) | `#52525b` | UPPERCASE |
| card name (`h2`)    | `17px` / 1.3                      | 700    | **−0.01em** (`−0.17px`) | `#18181b` | sentence |
| rating score        | `13.5px`                          | 700    | normal              | `#18181b` | —         |
| review count        | `13.5px`                          | 400    | normal              | `#52525b` | —         |
| price (now)         | `21px`                            | 700    | **−0.02em** (`−0.42px`) | `#b91c1c` / `#18181b` | — |
| price (was, `<del>`) | `15px`                           | 400    | normal, struck       | `#52525b` | —         |
| button label        | `15px`                            | 700    | normal              | `#ffffff` (added: `#3f6212`) | sentence |
| flag                | `12.5px`                          | 700    | normal              | per flag  | sentence  |

Family stack, verbatim: `"DM Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`. The card
declares `font-size: 15px; line-height: 1.45`; the `<del>` price, the review count and the flag override it.
Measured `h1` steps: **28 px** at ≤ 768, **36.864 px** at 1024, **40 px** from ~1,112 px up.

### Radii, shadows, motion

| token              | value                                                                         |
| ------------------ | ----------------------------------------------------------------------------- |
| card radius        | **18px** (photo clipped by it; the card also sets `overflow: hidden`)          |
| media              | **square, no radius of its own** — the card's 18 px clip rounds only the top corners |
| flag radius        | **8px**                                                                        |
| button radius      | **12px**                                                                       |
| chip / counter     | **999px** (both)                                                               |
| card shadow        | `0 1px 2px rgba(0,0,0,.05)`                                                    |
| card hover shadow  | `0 18px 40px -24px rgba(0,0,0,.35)`                                            |
| chip shadow        | `0 1px 2px rgba(0,0,0,.06)`                                                    |
| card transition    | `box-shadow .3s ease` (no transform — the card does **not** lift)              |
| photo transition   | `transform .5s ease`; card hover → `scale(1.04)`                               |
| button transition  | `background-color .2s, color .2s, border-color .2s, transform .15s`; hover `#3f3f46`, active `scale(.98)` |
| counter bump       | `transform .25s ease`; class `.is-bumped` → `scale(1.25)` for **250 ms** (JS timer) |
| tick pop           | `@keyframes cl-card02-pop` `scale(.3)/opacity 0 → 1/1` over **.35s ease**, on `.is-added` |
| focus ring         | `outline: 3px solid #a1a1aa; outline-offset: 2px` (buttons only)               |
| reduced motion     | card / photo / button / counter transitions `none`, hover zoom `none`, tick animation `none` |

### Layout — one `auto-fill` grid, **no width media queries at all**

`.cl-card02-demo { max-width: 1200px; margin: 0 auto; padding: clamp(32px, 6vw, 72px) 16px; }` and
`.cl-card02-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(236px, 1fr)); gap: 20px; }`.
Everything responsive follows from `minmax(236px, 1fr)` plus the `clamp()` padding — the sheet's only `@media`
block is `(prefers-reduced-motion: reduce)`. `max-width` is a **content box** here (the `:where(html){all:revert}`
guard leaves `box-sizing: content-box` on the container), so above **1,232 px** the container stops growing:
outer 1,232 / content 1,200, starting at x 104 with the grid at x 120.

| viewport | columns | card width | container pad (v / h) | `h1` | document height |
| -------: | ------: | ---------: | --------------------: | ---: | --------------: |
|      320 |       1 |        288 |               32 / 16 | 28 px |           2,288 |
|      390 |       1 |        358 |               32 / 16 | 28 px |           2,508 |
|      520 |       1 |        488 |               32 / 16 | 28 px |           3,028 |
|      523 |       1 |        491 |               32 / 16 | 28 px |           3,040 |
|      524 |       2 |        236 |               32 / 16 | 28 px |           1,135 |
|      600 |       2 |        274 |               36 / 16 | 28 px |           1,156 |
|      768 |       2 |        358 |               46 / 16 | 28 px |           1,344 |
|      780 |       3 |        236 |               47 / 16 | 28 px |           1,143 |
|    1,024 |       3 |      317.3 |               61 / 16 | 36.864 px |       1,303 |
|    1,036 |       4 |        236 |               62 / 16 | 37.3 px |             900 |
|    1,180 |       4 |        272 |               71 / 16 | 40 px |             900 |
|    1,440 |       4 |        285 |               72 / 16 | 40 px |             900 |
|    1,920 |       4 |        285 |               72 / 16 | 40 px |             900 |

The exact column thresholds were bisected one pixel at a time, because `auto-fill` flips on arithmetic, not on
a breakpoint: **1 column ≤ 523**, **2 columns 524–779**, **3 columns 780–1,035**, **4 columns ≥ 1,036**
(`4 × 236 + 3 × 20 = 1,004` must fit in `vw − 32`).

Two consequences an implementer will otherwise get wrong:

- **The page is taller at 520 than at 390** (3,028 vs 2,508). Between 524 and 523 the grid drops from two
  236 px columns to one 488 px column, and the square photo grows with it — four 706 px cards instead of four
  576 px ones. The `minmax()` minimum makes the layout *non-monotonic*; do not "fix" it with a breakpoint.
- **Cards are not always equal height.** Card height = photo width + 218 px **only while the names fit on one
  line**: the longest name ("Arc Wireless Headphones") measures **211 px** at 17 px/700, and the name track is
  `card − 36`, so wrapping starts below a **247 px** card — i.e. the 4-column state wraps between **1,036 and
  ~1,079 px** (measured at 1,060: cards 501.6 with two names on two lines) and the 2-column state wraps at
  **524–539 px** (measured at 524: bodies 160.3 / 179.9, cards 476.1 / 495.6, and the `4.3 (1,042 reviews)` row
  itself wraps to two lines because 80 + 8 + 128 px > the 200 px track). Above 1,100 px everything is one line
  and all four cards share one height.

### Component geometry (1440 px, then 390 px and 320 px)

| element            | 1440                                                       | 390                                  | 320                                  |
| ------------------ | ---------------------------------------------------------- | ------------------------------------ | ------------------------------------ |
| container          | x 104, **1,232** outer / 1,200 content, padding 72 / 16    | 0 → **390**, padding 32 / 16         | 0 → **320**, padding 32 / 16         |
| head               | y 72, **64** tall, `margin-bottom 28`, `space-between`, `align-items: flex-end` | y 32, **50.8** tall, same row | y 32, **110.8** tall — the chip wraps to its own row |
| eyebrow → `h1`     | y 72 → y 92 (`margin: 2px 0 0`)                            | same                                 | same                                 |
| bag chip           | **128 × 44** at x 1192 (right edge = container right)      | x 246, y 38.8                        | x 16, y 98.8 (second row)            |
| status             | y 146, **1 px** tall (`min-height: 1px`), `margin: -18px 0 18px` | y 92.8 → 1 px                 | y 161.8                              |
| grid               | y 165, 1,200 × **503**, 4 × **285**, gap **20**            | y 111.8, 358 × 2,363.9, 1 column     | y 171.8, 288 × 2,083.9               |
| card               | **285 × 503**, radius 18, shadow `.05`                     | **358 × 576**                        | **288 × 506**                        |
| media              | **285 × 285** (1 : 1)                                      | **358 × 358**                        | **288 × 288**                        |
| flag               | **54 × 26.1** at inset **top 12 / left 12**, padding 4 / 10 | same insets                          | same insets                          |
| body               | y 450, **138.2** tall, padding `16px 18px 8px`             | same height (one-line names)         | same height                          |
| button             | **249 × 47.8** at x 138, y 602.2, `margin: 14px 18px 18px` | **322 × 47.8** at x 34               | **252 × 47.8** at x 34               |

Card height decomposes exactly as `media (card width) + body 138.2 + 14 + 47.8 + 18`; the button's declared
`1.5px` border snaps to **1 px** at device scale 1, which is why the button measures **47.8** and not 48.75 —
do not "correct" it to 48.

## Requirements

### Requirement 1: Page shell and the single row band

The app SHALL render one full-width band on `#f1f1ef` holding a left-aligned eyebrow + `h1` with a right-aligned
bag chip, a live status line, and a four-card product grid inside a 1,200 px container, with **no other content
bands**.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the page is measured
- **THEN** `<body>` background is `#f1f1ef`, the band is **740 px** tall (document 900, no scrolling), and the
  container is **1,232 px** outer / 1,200 px content at x 104 with padding **72 px** vertical and **16 px**
  horizontal
- **AND** the band carries no background image, no gradient, no border and no shadow

#### Scenario: Head line

- **GIVEN** the header block
- **THEN** it is `display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between`,
  `gap: 16px`, `margin-bottom: 28px`, and **64 px** tall at 1440
- **AND** the left column holds the eyebrow `<p>` **"Autumn edit"** (`14px` / 500 / `#52525b`) and, `2px` below
  it, the `h1` **"Everyday carry"** (`40px` / 44 / 700 / `−1.2px` / `#18181b`)
- **AND** the right column holds the bag chip: **128 × 44**, radius **999**, ground `#ffffff`, shadow
  `0 1px 2px rgba(0,0,0,.06)`, padding `10px 14px 10px 16px`, `gap: 8px`, an **18 × 18** bag glyph
  (`stroke-width 1.8`), the word **"Bag"** (`15px` / 500) and a **24 px** ink counter disc reading **"0"**
  (`13px` / 700, `min-width: 24`, `padding: 0 7px`, radius 999)

#### Scenario: No invented bands

- **GIVEN** the rendered app
- **THEN** it contains exactly one section: the product row
- **AND** it contains no navigation bar, hero, filter bar, category strip, pagination, testimonial, newsletter,
  FAQ or product-detail route — the reference has none, and adding them is not a fidelity improvement
- **AND** the page footer is a single line of small print (Requirement 10), not a multi-column plate

### Requirement 2: The product grid — four cards, `auto-fill`, no breakpoints

The app SHALL render the four products in a CSS grid of `repeat(auto-fill, minmax(236px, 1fr))` with a **20 px**
gap inside the 1,200 px container, producing 1 / 2 / 3 / 4 columns at the measured widths **without any width
media query**.

#### Scenario: Column counts and thresholds

- **GIVEN** the viewports 320, 390, 520, 523, 524, 600, 768, 780, 1024, 1036, 1180 and 1440
- **THEN** the grid resolves to **1 / 1 / 1 / 1 / 2 / 2 / 2 / 3 / 3 / 4 / 4 / 4** columns respectively
- **AND** the card widths are **288 / 358 / 488 / 491 / 236 / 274 / 358 / 236 / 317.3 / 236 / 272 / 285** px
- **AND** the one-column state persists to **523 px** and the four-column state begins at exactly **1,036 px**
  (`4 × 236 + 3 × 20 = 1,004 ≤ 1,036 − 32`)

#### Scenario: The four products, in order

- **GIVEN** a 1440 px viewport
- **THEN** the grid holds exactly **4** `<li><article>` items in this order:
  **Arc Wireless Headphones** (Audio, 4.6, 218 reviews, `$149` was `$199`, flag `-25%`),
  **Meridian Leather Watch** (Accessories, 4.9, 64 reviews, `$129`, flag `New`),
  **Commuter Backpack 22L** (Bags, 4.3, 1,042 reviews, `$84` was `$99`, flag `-15%`),
  **Canvas Market Tote** (Bags, 4.7, 389 reviews, `$38`, flag `Only 3 left`)
- **AND** all four cards are **503 px** tall and their buttons share one baseline (y 602.2)
- **AND** the list is a real `<ul>` with `list-style: none; margin: 0; padding: 0`, each `<li>` is
  `display: flex`, and each card is `width: 100%` with a `flex: 1` body so the buttons stay pinned to the bottom

### Requirement 3: Card anatomy — photo, flag, body, button

Each card SHALL render as a white, radius-18 plate with `overflow: hidden` holding (1) a **square** photo that
touches all three other edges, (2) one flag pinned **top 12 / left 12**, (3) a body with category, name, rating
and price, and (4) a full-width ink button inset by the card's own padding.

#### Scenario: Plate at 1440

- **GIVEN** a card
- **THEN** it is **285 × 503** px, ground `#ffffff`, **no border**, radius **18**, shadow
  `0 1px 2px rgba(0,0,0,.05)`, `overflow: hidden`, text colour `#18181b`
- **AND** its body is `flex: 1`, padding `16px 18px 8px`, and its button sits `14px` below the body with
  `18px` side and bottom margins
- **AND** every child uses `box-sizing: border-box` (the card sets it for `*`, `*::before`, `*::after`)

#### Scenario: Square photo

- **GIVEN** a card's media box
- **THEN** it is **285 × 285** (`aspect-ratio: 1`, `overflow: hidden`), ground `#e4e4e7`, with **no radius of
  its own** — the card's 18 px clip rounds the two top corners only
- **AND** the `<img>` fills it (`width/height: 100%`, `object-fit: cover`), carries a descriptive `alt`, and
  scales to **1.04** over `.5s` on card hover

#### Scenario: One flag per card, three treatments

- **GIVEN** a card's flag
- **THEN** it is an absolutely positioned `<span>` **12 px from the top and 12 px from the left** of the media
  box, padding `4px 10px`, radius **8px**, `12.5px` / 700, measuring **54 × 26.1** for `-25%`
- **AND** the default ground is `#b91c1c` with white text (`-25%`, `-15%`), the `New` variant is `#18181b` with
  white text, and the low-stock variant is `#ffffff` with `#92400e` text (`Only 3 left`)
- **AND** exactly **one** flag renders per card and no card carries two

#### Scenario: Body copy order

- **GIVEN** a card's body
- **THEN** the order is: category (`12.5px` / 500 / `+0.75px` / uppercase / `#52525b`), name (`17px` / 700 /
  `−0.17px`, `margin: 4px 0 8px`), rating row (`margin: 0 0 12px`), price row
- **AND** the name is **not** a link and the photo is **not** wrapped in one (the reference has zero anchors)

### Requirement 4: The star rating — one masked bar, fractional fill

The app SHALL render each rating as a single **80 × 15** star bar built from a repeating star `mask` over a
hard-stopped two-colour gradient, filled to `score / 5 × 100 %`, followed by the numeric score and the review
count.

#### Scenario: Geometry and fill

- **GIVEN** a rating row
- **THEN** the bar is **80 × 15** px, `mask: url(<star svg>) 0 0 / 16px 15px repeat-x` (exactly five stars across
  80 px) over `linear-gradient(90deg, #f59e0b <fill>, #d4d4d8 <fill>)` where `fill = score / 5 * 100 %`
- **AND** the fills are **4.6 → 92 %**, **4.9 → 98 %**, **4.3 → 86 %**, **4.7 → 94 %** — a fraction of the fifth
  star, never a half star and never five discrete icons
- **AND** the score text is `13.5px` / 700 (`4.6`) followed by `#52525b` at weight 400 in parentheses
  (`(218 reviews)`), `gap: 8px` from the bar

#### Scenario: Neither bar nor score is read out twice

- **GIVEN** a rating row
- **THEN** the star bar is `aria-hidden="true"`
- **AND** a visually hidden text node states the same fact in words — **"Rated 4.6 out of 5"** — so a screen
  reader hears the rating once, at its position in the card

### Requirement 5: Price block — sale price, optional struck price

The app SHALL show the current price at 21 px / 700 in the sale red when the card is discounted and in ink when
it is not, and SHALL show the original price struck through with a screen-reader-only "Was" prefix only on the
two discounted cards.

#### Scenario: Discounted vs full price

- **GIVEN** the headphones and backpack cards
- **THEN** the current price renders **`$149`** and **`$84`** in **`#b91c1c`** (`21px` / 700 / `−0.42px`) and the
  original renders **`$199`** and **`$99`** inside a `<del>` at `15px` / 400 / `#52525b`, `gap: 8px`,
  `align-items: baseline`
- **AND** the watch and tote cards render **`$129`** and **`$38`** in `#18181b` with **no** `<del>` at all
- **AND** the `<del>` is preceded by a visually hidden **"Was "** so the struck number is not announced as the
  price

### Requirement 6: The add-to-bag toggle — count, label, state, announcement

The app SHALL implement the reference's single behaviour: each card's button toggles that item in and out of a
bag, and the page SHALL keep a running count of *distinct added items*, announce every change in the live
region, and reflect each card's own state on the button.

#### Scenario: Click to add

- **GIVEN** a card whose item is not in the bag, and a bag count of **0**
- **WHEN** its button is clicked
- **THEN** the button gains the added state: ground `#ecfccb`, border and text `#3f6212`, the label becomes
  **"Added to bag"**, the plus glyph is hidden and the **tick** glyph is shown with a **.35s** pop
- **AND** the counter disc reads **"1"** and receives a `scale(1.25)` bump for **250 ms**
- **AND** the live region reads **"Arc Wireless Headphones added to your bag. 1 item in bag."** — singular for
  1, plural for 0 and 2+

#### Scenario: Click again to remove

- **GIVEN** an added card and a count of 1
- **WHEN** the same button is clicked
- **THEN** the added state is removed (ground back to `#18181b`, white text, plus glyph restored, tick hidden),
  the label returns to **"Add to bag"**, the count returns to **"0"**, and the live region reads
  **"Arc Wireless Headphones removed from your bag. 0 items in bag."**
- **AND** the count is a count of *cards in the bag*, not of clicks: four added cards read **"4"** and toggling
  any one off reads **"3"**

#### Scenario: Each card toggles independently

- **GIVEN** all four cards
- **THEN** each card's product name is carried on the card element itself (the reference's
  `data-cl-card02-product` attribute) and drives its own message
- **AND** the messages name the product exactly as the card's `h2` does, and the four messages are
  **"… added to your bag. N items in bag."** / **"… removed from your bag. N items in bag."**

#### Scenario: Keyboard operation

- **GIVEN** the page loaded with no pointer input
- **WHEN** the user presses `Tab`
- **THEN** focus lands on the first card's button with a visible ring `outline: 3px solid #a1a1aa;
  outline-offset: 2px`
- **AND** `Tab` walks the four buttons in DOM order (they are the only focusable controls besides the footer
  link), and `Enter` or `Space` performs the same toggle as a click
- **AND** the button is a real `<button type="button">`, so no `role` or key handler is needed

#### Scenario: The live region does not reflow the page on first use

- **GIVEN** the reference's status line, which is `min-height: 1px` and grows to one line (18 px) on the first
  announcement — pushing the whole grid **17 px** down (measured: grid y 165 → 182)
- **THEN** the recreation SHALL reserve the line's height up front (a 20 px min-height on the status element) so
  the first add does not shift the grid
- **AND** this is the one deliberate layout deviation from the reference, recorded in §Known reference defects

### Requirement 7: Motion, hover and reduced motion

The app SHALL reproduce the reference's three motion cues (photo zoom + deeper card shadow on hover, button
fill/hover/active, tick pop + counter bump on add) with the reference's durations, and SHALL disable all of them
under `prefers-reduced-motion: reduce`.

#### Scenario: Hover at 1440

- **GIVEN** the pointer over a card
- **THEN** the photo renders `matrix(1.04, 0, 0, 1.04, 0, 0)` and the card shadow becomes
  `0 18px 40px -24px rgba(0,0,0,.35)`, the photo transitioning over **.5s** and the shadow over **.3s**
- **AND** the card itself does **not** translate — there is no `translateY` anywhere in this design, unlike the
  sibling team-card template
- **AND** the button's own hover is `#3f3f46` (ground and border) and its `:active` is `scale(.98)`

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** the card, photo, button and counter all compute `transition: none`
- **AND** hovering produces no photo transform and adding an item produces no tick animation
  (`animation: none`)

### Requirement 8: Responsive integrity

The app SHALL hold its layout at every width from 320 to 1920 without horizontal scrolling, and SHALL accept
the reference's non-monotonic height profile rather than adding breakpoints to flatten it.

#### Scenario: No horizontal scroll

- **GIVEN** the widths 320, 360, 390, 520, 523, 524, 600, 700, 768, 780, 1024, 1036, 1180, 1280, 1440 and 1920
- **THEN** `document.documentElement.scrollWidth === clientWidth` and `window.scrollTo(200,0) → scrollX === 0`
  at every one (the reference passes at all probed widths)
- **AND** the column counts match Requirement 2 at each width

#### Scenario: Document heights are not monotonic

- **GIVEN** the measured heights **2,288** (320), **2,508** (390), **3,028** (520), **3,040** (523), **1,135**
  (524), **1,156** (600), **1,344** (768), **1,143** (780), **1,303** (1,024), **900** (≥ 1,036)
- **THEN** the app reproduces the same profile, including the **jump down** at 524 px to two columns and the
  **taller** one-column state at 520 than at 390
- **AND** no width media query is added to "smooth" it

#### Scenario: Text fits or wraps like the reference

- **GIVEN** a 320 px viewport
- **THEN** the four names each render on one line in a **252 px** track, the rating rows stay on one line, and
  the head wraps so the bag chip takes its own row (head **110.8 px** tall, chip at y 98.8)
- **AND** at **524 px** the names wrap (two cards to two lines, 200 px track) and the `4.3 (1,042 reviews)` row
  wraps, giving bodies of **160.3 / 179.9** px and cards of **476.1 / 495.6** px by row — reproduce that, do not
  add `truncate` or `nowrap` to force one line

### Requirement 9: Semantics and accessibility

The app SHALL use the reference's landmark and list semantics, SHALL expose each button's state in words and
machine-readably, and SHALL make every announcement live.

#### Scenario: Document structure

- **GIVEN** the rendered app
- **THEN** there is exactly one `<h1>` ("Everyday carry"), one `<h2>` per product, and a `<main>` landmark
  holding a `<header>`, the status element and a `<ul>` of `<li><article>`
- **AND** the bag chip is a `<p>` (a counter, not a control) and there is no `<nav>`
- **AND** the page footer holds the single Component Dock link (Requirement 10)

#### Scenario: Button state is announced, not just coloured

- **GIVEN** any add button
- **THEN** its accessible name changes with its state — **"Add to bag"** → **"Added to bag"** — so the state is
  readable even with colour ignored
- **AND** it carries `aria-pressed="false" / "true"` mirroring that state (the reference conveys the state only
  by label + fill)
- **AND** its plus and tick glyphs are `aria-hidden="true"` so the icon never doubles the label

#### Scenario: The status region

- **GIVEN** the live region above the grid
- **THEN** it is a `<p role="status">` (implicit `aria-live="polite"`), empty on load, and its text is replaced
  on every toggle
- **AND** its message is cleared and re-set on a short timer (the reference's 50 ms `setTimeout`) so that
  repeating the **same** message still re-announces

#### Scenario: Images and ratings are named

- **GIVEN** any photo
- **THEN** it carries a descriptive `alt` naming the product and its setting, never "image" or the file name
- **AND** every rating exposes **"Rated X out of 5"** once, with the star bar `aria-hidden`

### Requirement 10: Attribution, naming and provenance

The app SHALL ship as `apps/marketrow` / `@free-react-templates/marketrow` /
`marketrow.free.componentdock.com`, SHALL link Component Dock in its footer, and SHALL contain no ColorLib
reference anywhere.

#### Scenario: Identity

- **GIVEN** the built app
- **THEN** `package.json` name is `@free-react-templates/marketrow`, `homepage` is
  `https://marketrow.free.componentdock.com`, and `public/CNAME` contains exactly that host
- **AND** `document.title` and the meta description are written for the recreation, never the source title

#### Scenario: Footer attribution

- **GIVEN** the shipped footer
- **THEN** it contains a link to **https://www.componentdock.com/** labelled "Component Dock"
- **AND** it is the only chrome added to the band: one line of small print on the `#f1f1ef` ground, not a
  multi-column footer plate
- **AND** it is the **only anchor on the page** — the reference ships zero anchors and the recreation introduces
  exactly one

#### Scenario: Clean provenance

- **GIVEN** every non-test file under `apps/marketrow/`
- **THEN** none contains "ColorLib"/"Colorlib", a `colorlib.com` URL, `card-02` or a credit line naming the source
- **AND** the four product names, prices and review counts stay as sample data with no source branding

### Requirement 11: Copy fidelity

The app SHALL carry the reference's copy: the eyebrow, headline, chip label, four product names, four
categories, four score/count pairs, four prices and the two button labels and status sentences.

#### Scenario: The four products

- **GIVEN** the grid
- **THEN** the copy is, in order: **"Arc Wireless Headphones"** / Audio / 4.6 (218 reviews) / `$149` `$199` /
  `-25%`; **"Meridian Leather Watch"** / Accessories / 4.9 (64 reviews) / `$129` / `New`;
  **"Commuter Backpack 22L"** / Bags / 4.3 (1,042 reviews) / `$84` `$99` / `-15%`;
  **"Canvas Market Tote"** / Bags / 4.7 (389 reviews) / `$38` / `Only 3 left`
- **AND** the eyebrow is **"Autumn edit"**, the `h1` is **"Everyday carry"**, the chip label is **"Bag"**, the
  chip count starts at **"0"**, and the button labels are **"Add to bag"** / **"Added to bag"**
- **AND** the review counts keep their thousands separator (`1,042`), the flags keep their exact glyphs
  (`-25%`, `-15%`, `New`, `Only 3 left`) and the prices keep the `$` prefix with no decimals

## Screenshot analysis (catalogue image, `card-02.jpg`)

The listing image is **a framed capture, not a bare screenshot**: a **1200 × 972** JPEG (a real JPEG this time
— `file` says `JPEG image data, progressive`, unlike the AVIF-behind-`.jpg` siblings) showing a macOS window —
three traffic-light dots and a URL bar reading `preview.colorlib.com` — on a **white sheet with a soft drop
shadow over a very light grey page**. Inside the window the real page renders at roughly **1,120 px** wide, in
its four-column state, with the same four flags, the same ratings and the same `$149 / $199` pairs.

Two consequences for the recreation: the image confirms the **four-column 1,036–1,232 px state** is the
intended composition (the catalogue did not capture the 1,440 px one, where the container has already stopped
growing), and **the window frame, traffic lights, URL bar, white sheet and drop shadow are catalogue furniture
— none of it belongs in the app**. The app's own ground is `#f1f1ef`, full-bleed.

The screenshot also shows the one thing a static reading of the CSS hides: at this width the four flags read as
*one row of four different badges* — red / ink / red / white — which is the card family's whole idea and must
survive into the app.

## Known reference defects (do not copy)

1. **The status line's `min-height: 1px` shifts the grid 17 px on the first announcement** (grid y 165 → 182 at
   1440). The recreation reserves a 20 px line (Requirement 6) — this is the **only** intentional layout
   deviation, and it is invisible until the first click.
2. **`aria-pressed` is missing.** The reference conveys "in the bag" only by fill colour and label text. The
   recreation keeps the label swap *and* adds `aria-pressed` (Requirement 9) so the state survives a
   screen reader and a monochrome render.
3. **Zero anchors.** The photo and the name are not links, so in the reference there is no way to reach a
   product page at all. That is the *design* (a snippet, not a shop), so the recreation must **not** invent a
   `/product/:id` route or wrap the card in a link — the single anchor it adds is the mandated Component Dock
   footer link.
4. **The bag chip is decorative.** It looks like a control (pill, shadow, counter) but is a `<p>` with no
   handler; clicking it does nothing. Keep it inert — do not wire a cart drawer.
5. **One dead selector and two hook-only classes.** `.cl-icon` is defined and never used (a leftover in the
   family sheet), and `.cl-card02__label` / `.cl-card02__score` carry no rules at all (they exist for the
   script and for structure). Do not port `.cl-icon`; the two hooks have no styling job in React.
6. **Six `@font-face` blocks, two files.** The three weights are the *same* woff2 per subset, so weight
   selection is a variable axis, not a file choice. Load one family with three weights from Google Fonts.
7. **The last two photos are `loading="lazy"`.** A full-page capture without scrolling shows them as empty
   `#e4e4e7` panels — a capture artefact, **not** a design state. Keep `#e4e4e7` behind every photo so a slow
   image is never a white hole, but never reproduce the blank panel.
8. **The `-15%` and `-25%` flags do not match the arithmetic exactly** (−15.2 % and −25.1 %). Keep the
   reference's round numbers; do not recompute the badges from the prices.
9. **At 236 px the third card's rating row wraps** (`4.3 (1,042 reviews)` needs 216 px in a 200 px track), so
   cards differ in height by row at 524–539 and 1,036–~1,079 px. That is the reference's behaviour, produced by
   a flex row with no `nowrap`; do not "fix" it with `truncate`.

## Verification checklist

- [ ] `apps/marketrow` exists, `@free-react-templates/marketrow` in `package.json`, `public/CNAME` =
      `marketrow.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string, no `card-02`, in any app file
      (comments included); the footer link is the page's **only** anchor
- [ ] one band only: eyebrow + `h1` + bag chip, status line, 4-card grid; no nav, hero, filter, pagination or
      product route invented
- [ ] ground `#f1f1ef`; container max **1200 px** content + **16 px** padding, vertical padding
      `clamp(32px, 6vw, 72px)` (→ 72 at 1440, outer 1,232); head `space-between` / `flex-end`, `margin-bottom 28`
- [ ] eyebrow 14/500 `#52525b`; `h1` `clamp(28px,3.6vw,40px)`/1.1 700 `−0.03em` `#18181b` (28 / 36.864 / 40 px
      at 768 / 1,024 / 1,440)
- [ ] bag chip **128 × 44**, radius 999, white, shadow `.06`, padding `10/14/10/16`, **18 px** bag glyph,
      **24 px** ink counter disc `13/700`, count starts at **0**
- [ ] grid `repeat(auto-fill, minmax(236px, 1fr))` **gap 20**; columns **1 ≤ 523 · 2 = 524–779 · 3 = 780–1,035 ·
      4 ≥ 1,036**; widths **288 / 358 / 488 / 236 / 274 / 317.3 / 236 / 272 / 285** at 320 / 390 / 520 / 524 /
      600 / 1,024 / 1,036 / 1,180 / 1,440
- [ ] card **285 × 503** at 1440: white, **no border**, radius **18**, `overflow: hidden`, shadow
      `0 1px 2px rgba(0,0,0,.05)`, hover `0 18px 40px -24px rgba(0,0,0,.35)`, body `flex: 1` so all four buttons
      share y 602.2
- [ ] media **1 : 1** (285 × 285 at 1440), ground `#e4e4e7`, no own radius, `object-fit: cover`, hover
      `scale(1.04)` over `.5s`, real `alt` per photo
- [ ] one flag per card, **top 12 / left 12**, padding 4/10, radius **8**, 12.5/700 — red `-25%` / `-15%`, ink
      `New`, white-on-brown `Only 3 left`
- [ ] category 12.5/500 `+0.75px` uppercase `#52525b`; name 17/700 `−0.17px` `margin: 4px 0 8px`; rating row
      `margin: 0 0 12px`
- [ ] star bar **80 × 15**, five stars via a **16 px repeat-x mask**, gradient hard-stopped at
      **92 / 98 / 86 / 94 %** for 4.6 / 4.9 / 4.3 / 4.7, bar `aria-hidden`, hidden text "Rated X out of 5"
- [ ] price 21/700 `−0.42px`: `#b91c1c` when discounted, `#18181b` when not; `<del>` 15/400 `#52525b` with a
      visually hidden "Was " only on `$199` and `$99`
- [ ] button **249 × 47.8** at 1440 (`margin: 14px 18px 18px`, padding 12/16, border `1.5px` snapping to 1 px,
      radius **12**, ink ground, white 15/700, 18 px plus at `stroke-width 2.2`); hover `#3f3f46`, active
      `scale(.98)`, `:focus-visible` **3 px `#a1a1aa`** offset 2
- [ ] added state: ground `#ecfccb`, border/text `#3f6212`, label "Added to bag", plus hidden, tick popped
      `.35s`, hover `#d9f99d`; removing restores ink
- [ ] count disc tracks **distinct added cards** (0→4), `is-bumped` `scale(1.25)` for 250 ms; messages read
      "X added to your bag. N item/items in bag." and "X removed from your bag. …"; status is `role="status"`
      and its line height is reserved so the grid never shifts
- [ ] `prefers-reduced-motion: reduce` → every transition `none`, hover zoom `none`, tick animation `none`
- [ ] `scrollWidth === clientWidth` and `scrollX === 0` after `scrollTo(200,0)` at **320 / 360 / 390 / 520 /
      523 / 524 / 600 / 700 / 768 / 780 / 1,024 / 1,036 / 1,180 / 1,280 / 1,440 / 1,920**; document **740** at
      1440, 900 at ≥ 1,036, 1,303 at 1,024, 1,344 at 768, 3,028 at 520, 2,508 at 390, 2,288 at 320
- [ ] one `h1`, four `h2`, `<ul>`/`<li>`/`<article>` semantics, `<button type="button">` with `aria-pressed` and
      a swapping label, glyphs `aria-hidden`, `<main>` + `<header>` landmarks
- [ ] DM Sans 400/500/700 via one Google Fonts `<link>` (`display=swap`); no six-block `@font-face` duplication;
      no `.cl-icon`, no phantom script
- [ ] 100% coverage on the new app, `scripts/verify-app.sh marketrow` green
