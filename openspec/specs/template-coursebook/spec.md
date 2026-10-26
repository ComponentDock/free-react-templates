# Template: Coursebook (Course-progress cards — three learning-dashboard cards with a level chip, a striped progress bar and a tinted footer strip)

## Purpose

A **single-screen learning dashboard**: one head line over a **three-across row of course cards**,
each a white 22 px-radius panel on a cool grey ground (`#f6f7fb`) holding a **16:9 photograph with
a level chip on its bottom-left corner, a colour-coded track eyebrow, the course title, an
initials avatar with the instructor's name, a two-item meta row (lesson count + running time), a
progress line with a **striped bar**, and — flush to the card's inner edge — a **tinted footer strip**
that prints the next lesson beside a solid colour CTA chip ("Resume →", or "View →" on the finished
card).** The page carries **no other band**: no nav, no hero, no footer, no form, **no JavaScript**.

- **Source slug:** `card-12`
- **ColorLib page:** https://colorlib.com/wp/template/card-12/ — **HTTP 200, 113,334 B**,
  `<title>` `Card V12 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V12"**, authoritative
  description *"Course cards for a learning dashboard with a thumbnail, level tag, track, title,
  instructor, lesson count and length. Free download, no jQuery or plugins."*, "Author: Colorlib",
  "Released: September 2026", "License: CC BY 3.0", `datePublished` **2026-09-25T15:33:15+00:00**,
  claims *"438 KB"* (measured **448,645 B** ✓), and links its siblings `Card 11`, `13`, `15`…`20`
  (the family runs to twenty variants).
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-12/ —
  **HTTP 200, 6,048 B**, `<title>` `Card V12 | Colorlib`, `lang="en"`, **one** stylesheet, **zero**
  authored scripts. The slug-only path `theme/card-12/` is **404 (9 B)**; `theme/bb/card-12/` is
  **404 (9 B)**. This is the `bootstrap/` prefix ladder the family always uses, not a dead preview.
- **Design category:** Card (education / course progress). Twelfth of the **`card` snippet family**
  (**20** variants, `01`–`20`) in the **214 snippet variants** of `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/coursebook`,
  package `@free-react-templates/coursebook`, CNAME `coursebook.free.componentdock.com`.

**What this design is.** A *progress* card, not a product card: the photograph is a thumbnail, the
**bar is the product**, and the tinted strip at the bottom is the resumption point. Everything above
the strip answers "which course, by whom, how long, how far in"; the strip answers "what is the next
lesson, and take me there". The three cards are deliberately **three different states of the same
card** — 58 % in progress, 17 % just started, 100 % finished — and the finished one swaps the footer's
sentence for a **certificate medal** and the chip's verb for **View**.

**The one real behaviour is the absence of one.** `curl` returns **1 stylesheet and 0 `<script>`**
(the ten `<script>` tags a browser reports are Cloudflare's zaraz/gtag/beacon injection, not the
snippet). The reference's only interaction is CSS: a `translateY(-3px)` card lift with a soft
shadow, and a **4 px → 8 px** gap growth inside the CTA chip. Nothing is clickable except the three
title links.

**The parts a careless port flattens** (each measured here, each expanded below):

- **This card's `aspect-ratio: 16/9` is honest** — the opposite of the family's usual trap. The
  band measures **350 × 196.88** at a 372 track, i.e. **1.7778 exactly**, because the `<img>` is
  `height: 100%` inside the ratio box rather than `height: auto`. Keep the ratio; do **not** "fix"
  it, and do not copy the 700:440 rule from the sibling that renders short.
- **The footer strip is pinned, not flowed.** `.cl-card12__body { flex: 1 }` pushes the strip to the
  card's bottom edge, so all three strips start at the **same y** even though the middle card's
  title is one line and the other two are two lines. The visual consequence is a **20 px** gap
  between bar and strip on cards 1 and 3 against **43.39 px** on card 2 — the *hole* is the design,
  not a bug.
- **The strip wraps per card, not per row.** It is a `justify-between` flex row with a fixed-width
  chip, so it costs **297 / 305 / 227 px** of content on the three cards; at the 1,024 three-column
  width (content 266) the first two wrap to **63 px** while the third stays at **57.5 px**, and the
  grid row height then stretches all three cards to the same 478.41.
- **The visible CTA is not a control.** "Resume →" / "View →" is a `<span aria-hidden="true">`
  styling only; the whole card is made clickable by the **title link's `::after { inset: 0 }`**
  overlay. Shipping the chip as a `<button>` duplicates the target; shipping it as text loses the
  card-wide hit area.
- **Two insets in one card.** Body text sits **12 px** inside the card's inner edge, the strip's text
  sits **14 px** inside the same edge — a **2 px** misalignment that is visible on a 350 px card and
  is reproduced in the reference on every card at every width.
- **One variable face, two binaries, eight declarations.** Lexend is declared **eight** times
  (400 / 500 / 600 / 700 × `latin` / `latin-ext`) but there are only **two files**; the weights are
  the *same* variable binary, and the axis tops out at **700** (800 and 900 render identically).

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, **2,890** rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-12` is one of the **214 snippet variants in 19 families**; the 42 standalone designs in that gap
are all prepped. Snippet families are worked **in family order, then variant number**.

The family section **`## Bootstrap Cards (20)` already exists on main at line 733** and at the moment
this prep was pushed it carried **five** rows — `Card 01` → nameplate, `Card 02` → marketrow,
`Card 03` → octavo, `Card 04` → tierline, `Card 05` → plaudit (lines 735–739). This design's row goes
**directly after the last card row present** when the implementer ships it:

```markdown
- [x] **Card 12** — [colorlib](https://colorlib.com/wp/template/card-12/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-12.jpg) · [coursebook](https://coursebook.free.componentdock.com)
```

(`Card 06` … `Card 11` are prepped-and-unbuilt as this run lands, so the section gains rows out of
order until those ship — the implementer stream owns that batch edit, not this prep run. `Card 05` →
plaudit shipped **during** this run, which is why the count moved from four to five between the
research pass and the push; always re-read this section immediately before pushing, never at the
start of the run.)

**The name.** `coursebook` — one lowercase (closed-compound) word, matching the family's
`nameplate` / `marketrow` / `showbill` pattern: a coursebook is the bound set of lessons a learner
works through, which is exactly what three course cards are. It is in no app folder, no spec folder,
and `git grep -il coursebook origin/main` returns **0** files (the substring test this pipeline
uses); the ColorLib catalogue URLs `colorlib.com/wp/template/coursebook/`,
`preview.colorlib.com/theme/coursebook/`, `preview.colorlib.com/theme/bootstrap/coursebook/` and
`preview.colorlib.com/theme/bb/coursebook/` all return **404**. Rejected on measurement: `syllabus`
(**18** substring hits), `chapters` (**34**), `primer` (**3**). Still free the same day if a later
variant needs one: `studyhall`, `lessonloop` (0 hits each). Do **not** reuse the family's taken names
`nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`,
`lexeme`, `coffer`, `showbill`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 6,048 B** live (`5,750 B` inside the archive), `<title>` "Card V12 \| Colorlib", `lang="en"`, **one** stylesheet, **zero** authored scripts |
| preview path      | **`theme/bootstrap/card-12/`**; the directory URL is the page. `theme/card-12/` **404** (9 B), `theme/bb/card-12/` **404** (9 B) |
| stylesheet        | `css/style.css?v=b1aa0a8b`, **10,466 B**, 446 lines, sha256 `fce391115ce8974eb33e87d34ddff1fab3a2e0e210539b29b37f5a381d5b34b5` |
| script            | **none** — the archive ships no `js/` directory at all, although its `README.md` still lists `js/snippet.js` (defect 5) |
| archive           | `preview.colorlib.com/downloads/free/card-12.zip`, **200, 448,645 B** (= 438 KB ✓ the page's claim), **18 entries**: 4 dirs + `index.html` 5,750 B + `css/style.css` 10,466 B + `README.md` + **8 `woff2`** + 3 jpg |
| live ↔ archive    | CSS **identical sha256**, fonts identical; the body markup does not differ at all — the two files differ only in the `<head>` (`robots` metas ×2, a `dns-prefetch`, the `?v=` cache-buster) and three `<img>` attributes (`fetchpriority="high" decoding="sync"` ×2, `loading="lazy" decoding="async"` ×1) → **live preview verified; the archive is its un-versioned twin** |
| fonts             | **8** `@font-face` rules — Lexend **400 / 500 / 600 / 700**, `latin` + `latin-ext` — but only **2 distinct binaries**: `lexend-*-latin.woff2` 4 × 39,692 B sha256 `1ec8f6ee…`, `lexend-*-latin-ext.woff2` 4 × 34,548 B sha256 `368c86e9…`. At 1440 only the **4 latin faces load**, the 4 `latin-ext` faces stay `unloaded` |
| images            | **3** `<img>`, all `width="700" height="440"` (intrinsic **700 × 440**), `object-fit: cover`, descriptive `alt`, no `<picture>`, no `srcset` |
| CSS size          | **49** rules / **23** class selectors, 1 media query (`prefers-reduced-motion`), **0** `@keyframes`, **0** `@supports`, **0** container queries, **0** column breakpoints |
| classes           | **23** in the markup, **22** styled; **1 unstyled wrapper** (`.cl-card12__progress`, layout comes entirely from its children) and **1 dead selector**, `.cl-icon` (**fifth** card in a row: the family declares it and never uses it — `document.querySelectorAll('.cl-icon').length === 0`) |
| custom properties | **3**: `--cl-card12-accent` (default `#4f46e5`), `--cl-card12-soft` (default `#eef0ff`), `--cl-card12-muted` `#4b5168` — **the per-card accent and soft values exist only in inline `style` attributes, never in the sheet** |
| controls          | **3** anchors (one per card, all `href="#"`), **0 `<button>`, 0 forms, 0 inputs** → **3 focusable elements**, tab order = card 1 → 2 → 3 |
| headings          | **1 × `h1`** ("Continue learning") and **3 × `h2`** (the course titles); cards are `<article>`, not `<section>` |
| blocks            | `<main class="cl-card12-demo">` → `<header>` (h1 + streak pill) → `<div class="cl-card12-grid">` of 3 `<article class="cl-card12">` → nothing else |
| content height    | **715.41** at 1,440 (document reads **900** = the viewport, not the content — **no** `min-height`) · 1,140 at 768 · 1,675 at 390 · 1,642 at 320 |
| horizontal scroll | **none at any width probed** — `documentElement.scrollWidth === clientWidth` and `scrollTo(200,0)` → `scrollX 0` at 320 / 360 / 390 / 430 / 520 / 633 / 634 / 636 / 700 / 768 / 900 / 913 / 914 / 945 / 946 / 950 / 960 / 1,024 / 1,200 / 1,280 / 1,440 |
| screenshot        | `card-12.jpg` **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`); `PIL` opens it, convert before viewing |

### The ratio that IS honest here — 16:9 holds because the `<img>` is `height: 100%`

`.cl-card12__thumb` declares `aspect-ratio: 16 / 9` and the band **measures** 16:9 at every width,
in exact agreement with the sheet:

| width | track px | thumb px (measured) | 16:9 predicts | 700:440 would predict |
| ----: | -------: | ------------------: | ------------: | --------------------: |
| 1,440 |   372.00 |      **350.00 × 196.88** | 196.88 | 220.00 |
| 1,024 |   316.00 |      **294.00 × 165.38** | 165.38 | 184.80 |
|   914 |   430.00 |      **408.00 × 229.50** | 229.50 | 256.46 |
|   390 |   358.00 |      **336.00 × 189.00** | 189.00 | 211.20 |
|   320 |   290.00 |      **268.00 × 150.75** | 150.75 | 168.46 |

The photo is an in-flow child at `height: 100%`, so the ratio box wins and the intrinsic 700:440
never participates. **Reproduce 196.88 px at a 350 px thumb** (`aspect-[16/9]` + `h-full w-full
object-cover` is correct *here*). A 700:440 implementation adds **23 px** of photo on every card and
pushes every downstream y.

### Palette — cool grey ground, three per-card accent pairs, one warm streak pill

| role                | value                     | where                                                         |
| ------------------- | ------------------------- | ------------------------------------------------------------- |
| page ground         | `#f6f7fb`                 | `body` — a **blue-leaning** grey, not warm paper                |
| card surface        | `#ffffff`                 | `.cl-card12`                                                    |
| ink                 | `#161a2e`                 | h1, card text, course title, the `strong` figures, level chip   |
| muted               | `#4b5168` (`--cl-card12-muted`) | meta row, progress label, strip text, teacher               |
| hairline            | `#e6e8f0`                 | the card's 1 px border — **35 % lighter than the muted text**   |
| accent (card 1)     | `#4f46e5`                 | inline `--cl-card12-accent`; also the **sheet's default**       |
| accent (card 2)     | `#0f766e`                 | inline only — **not** in the stylesheet                         |
| accent (card 3)     | `#b45309`                 | inline only                                                     |
| soft (card 1)       | `#eef0ff`                 | inline `--cl-card12-soft`; also the sheet's default             |
| soft (card 2)       | `#e6f6f3`                 | inline only                                                     |
| soft (card 3)       | `#fdf3e4`                 | inline only                                                     |
| streak pill ground  | `#fff1e6`                 | the head's `6-day streak` chip                                  |
| streak pill ink     | `#9a3412`                 | pill text (14/600)                                              |
| streak flame        | `#f97316`                 | the inline SVG's `fill` — **decorative**, 2.53:1 on the pill     |
| level chip          | `rgba(255,255,255,.94)`   | chip over the photo, ink text                                   |
| bar stripes         | `rgba(255,255,255,.25)`   | 16 px tile on the accent fill → **8 px period** (4 white / 4 clear) |
| hover shadow        | `rgba(22,26,46,.45)`      | `0 20px 40px -26px` — the **ink**, not black                    |

The **soft** tint is the workhorse: it is the thumb's background (visible under a slow image), the
avatar disc, the bar's track, and the whole footer strip. Loosening it to Tailwind's `indigo-50`
(`#eef2ff`) is a visible drift on cards 2 and 3, whose softs are tinted **green** and **amber** to
match their accents.

### Type — one variable face, four instances, two binaries, ceiling 700

```
font-family: "Lexend", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif
```

Canvas width of `"Continue learning"` at 40 px, per requested weight:

| weight | 100–400 | 500 | 600 | 700 | 800 | 900 |
| ------ | ------: | --: | --: | --: | --: | --: |
| width  |     349 | 357 | 360 | 367 | 367 | 367 |

Four discrete instances (**400 / 500 / 600 / 700**), then a hard ceiling: 700, 800 and 900 all
render the 700 master. The four `@font-face` blocks per subset point at the **same file**
(`sha256 1ec8f6ee…` ×4), i.e. this is a **variable** cut with `wght 400–700`, not faux type and not
four static files. Google Fonts serves the same axis
(`fonts.googleapis.com/css2?family=Lexend:wght@400..700` → **HTTP 200**, `font-weight: 400 700`).

| element        | size                          | weight | tracking | line-height |
| -------------- | ----------------------------- | -----: | -------: | ----------: |
| `h1`           | `clamp(26px, 3.4vw, 34px)`    |    700 | `-.02em` | normal      |
| card base      | `14.5px`                      |    400 |        — | `1.5`       |
| track eyebrow  | `13px`                        |    600 |        — | inherited   |
| course title   | `18px`                        |    600 | `-.01em` | `1.3` (23.4) |
| teacher name   | `14.5px`                      |    500 |        — | inherited   |
| avatar initials| `11px`                        |    700 |        — | —           |
| level chip     | `12px`                        |    600 |        — | —           |
| meta row       | `13.5px`                      |    400 |        — | inherited   |
| progress label | `13px`                        |    400 |        — | inherited   |
| progress figure| `13px`                        |    600 |        — | ink, not muted |
| strip text     | `13px`                        |    400 |        — | inherited   |
| strip `strong` | `13px`                        |    600 |        — | ink          |
| CTA chip       | `13px`                        |    600 |        — | —           |
| streak pill    | `14px`                        |    600 |        — | —           |

`h1` is **fluid between 765 and 999 px** (26 px floor, 34 px ceiling) and never wraps: its measured
box is 295.45 px at 1440 and 233.17 px from 764 down to 320 against a 288 px content width.
**Do not ship `font-extrabold` / `font-black`** — 800 and 900 collapse onto 700, so a three-level
hierarchy written as 600 / 700 / 800 silently renders 600 / 700 / 700.

### Radii, decoration, motion

| element          | radius | note                                                                 |
| ---------------- | -----: | -------------------------------------------------------------------- |
| card             |   22px | plus a **1 px** `#e6e8f0` border — the radius is on the border box    |
| thumb            |   16px | card radius 22 − padding 10 would be **12** for a concentric corner; the reference uses **16**, i.e. deliberately rounder |
| level chip       |    8px | `bottom: 10px; left: 10px` inside the thumb                           |
| avatar           |    50% | 28 × 28, `--soft` ground, accent initials                            |
| bar + track      |  999px | 8 px tall, `overflow: hidden`, fill inherits the radius              |
| footer strip     |   14px | full inner width (350), `padding: 12px 14px`                          |
| CTA chip         |   10px | `padding: 7px 12px`, accent ground, white label                       |

There is **one** decoration the markup does not name: the bar's fill carries a
`linear-gradient(90deg, rgba(255,255,255,.25) 25%, transparent 25% 50%, …)` tile at
`background-size: 16px 16px`, which paints **8 px vertical stripes** (4 px white @25 %, 4 px clear)
over the accent. Without it the bar is a flat block and the card loses its only texture.

Motion is CSS-only and appears three times: `transform .25s ease` + `box-shadow .25s ease` on the
card, `gap .2s ease` on the chip, and a `prefers-reduced-motion: reduce` block that sets
`transition: none` on both **and** `transform: none` on hover.

### Layout — one 1160 container, arithmetic columns, no breakpoints

`main` is `max-width: 1160px; margin: 0 auto; padding: clamp(32px, 6vw, 72px) 16px` → the container's
border box is **1192** wide at 1440 with the grid at **1160** starting at x **140**. The grid is

```css
grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
gap: 22px;
```

so the column count is pure arithmetic — **n columns while `grid ≥ n·290 + (n−1)·22`**:

| boundary | condition                     | measured proof                                  |
| -------- | ----------------------------- | ----------------------------------------------- |
| 3 → 2    | grid `< 914` (vw `< 946`)     | **946** → 3 × 290.00; **945** → 2 × 445.50       |
| 2 → 1    | grid `< 602` (vw `< 634`)     | **634** → 2 × 290.00; **633** → 1 × 601.00       |
| grid caps| vw `≥ 1192` (1160 + 32)       | **1192** → 1160; **1191** → 1,159                |

The head is a `flex` row with `flex-wrap: wrap`, `justify-content: space-between`, `gap: 12px`, and
`margin-bottom: 24px`. It needs `h1 (233.17) + gap (12) + pill (145) = 390.17`; the content box is
`vw − 32`, so the pill **drops to its own line at ≤ 422** and the header grows **43 → 77 px**
(measured: 423 → 33 px, 422 → 77 px at the small `h1` size; 43 → 77 above 765).

### Component geometry (1440 px; page-space, card 1 at x 140, y 139, 372 × 504.41)

| part            | box                                        | notes                                                        |
| --------------- | ------------------------------------------ | ------------------------------------------------------------ |
| card            | **372 × 504.41**, padding **10**, border 1 | content 350; grid 3 × 372 + 2 × 22 = 1,160                    |
| thumb           | **350 × 196.88**, radius 16                | 16:9 of 350; `overflow: hidden`                               |
| level chip      | **109 × 26** (Intermediate) / 78 (Beginner, All levels) | `bottom 10 / left 10`, 12/600, `rgba(255,255,255,.94)` |
| body            | 350 × **212.03**, `padding: 16px 12px 4px` | content **326**; `flex: 1` → absorbs every difference         |
| track           | 326 × 19.5 at y 362.88                     | 13/600 in the card's accent                                   |
| title           | 326 × **46.78** (2 lines) at y 386.38      | `margin: 4px 0 12px`; card 3 is **23.39** (1 line)            |
| teacher         | 326 × 28 at y 445.16                       | 28 px avatar + `gap: 8`, `margin-bottom: 12`                  |
| meta row        | 326 × 20.25 at y 485.16, `gap: 16`         | two `<li>`, 17 × 17 stroked icons                             |
| progress label  | 326 × 19.5 at y 521.41, `margin-bottom: 6` | left text muted, right `strong` ink                           |
| bar             | 326 × **8** at y 546.91                    | fill 189.08 (= 58 % of 326)                                   |
| footer strip    | **350 × 57.5** at y 574.91                 | `margin-top: 16`, radius 14, `padding: 12px 14px`             |
| CTA chip        | **96 × 33.5** (Resume) / **76** (View)     | 16 × 16 arrow, `gap: 4` → 8 on hover                          |

Two arithmetic facts carry the card's look: the strip is **full inner width (350)** while the body
text is inset 12 → **body text starts at x 163 and strip text at x 165**, a 2 px step the reference
keeps on all three cards; and because `body` is `flex: 1`, **all three strips share y 574.91** while
the gap from bar to strip is **20 px** on cards 1 and 3 and **43.39 px** on card 2.

### Responsive matrix (measured; card heights are content-driven, never fixed)

| vw   | cols | track px | thumb px        | card h | strip h (1 / 2 / 3)  | title h (1 / 2 / 3)  | content h |
| ---: | ---: | -------: | --------------: | -----: | -------------------: | -------------------: | --------: |
| 1440 |    3 |   372.00 | 350.00 × 196.88 | 504.41 | 57.50 / 57.50 / 57.50 | 46.78 / 46.78 / 23.39 |      715.41 |
| 1024 |    3 |   316.00 | 294.00 × 165.38 | 478.41 | **63.00 / 63.00** / 57.50 | 46.78 / 46.78 / 46.78 | 900 |
|  960 |    3 |   294.66 | 272.66 × 153.36 | 489.80 | 63.00 / 63.00 / 57.50 | 46.78 / **70.17** / 46.78 | 900 |
|  950 |    3 |   291.33 | 269.33 × 151.48 | 487.91 | 63.00 / 63.00 / 57.50 | **70.17 / 70.17** / 46.78 | 900 |
|  914 |    2 |   430.00 | 408.00 × 229.50 | 537.03 | 57.50 / 57.50 / 57.50 | 46.78 / 46.78 / 23.39 | 1,245 |
|  768 |    2 |   357.00 | 335.00 × 188.44 | 495.97 | 57.50 / 57.50 / 57.50 | 46.78 / 46.78 / 23.39 | 1,140 |
|  700 |    2 |   323.00 | 301.00 × 169.31 | 482.34 | 63.00 / 63.00 / 57.50 | 46.78 / 46.78 / 46.78 | 1,122 |
|  636 |    2 |   291.00 | 269.00 × 151.31 | 487.73 | 63.00 / 63.00 / 57.50 | 70.17 / 70.17 / 46.78 | 1,102 |
|  520 |    1 |   488.00 | 466.00 × 262.13 | 569.66 | 57.50 / 57.50 / 57.50 | 46.78 / 46.78 / 23.39 | 1,851 |
|  390 |    1 |   358.00 | 336.00 × 189.00 | 496.53 | 57.50 / 57.50 / 57.50 | 46.78 / 46.78 / 23.39 | 1,675 |
|  320 |    1 |   290.00 | 268.00 × 150.75 | 487.17 | 63.00 / 63.00 / 57.50 | **70.17 / 70.17** / 46.78 | 1,642 |

Three consequences an implementer must not "fix":

1. **At two columns the third card is shorter** (513.64 against 537.03 at 914) because it is alone in
   row 2 and nothing stretches it. Do not add a span or a min-height.
2. **At 320 the track is pinned at 290 in a 288 grid** — the card starts at x 16 and ends at 306, i.e.
   **2 px into the gutter**, 14 px of margin still visible, `scrollX 0`. This is the family's
   recurring *clipped-not-overflowing* case; a 320 probe that reports `scrollWidth > clientWidth` on
   `documentElement` alone is wrong.
3. **Strip and title heights are per card.** A grid row's `stretch` hides which card wrapped; read
   each `.cl-card12__next` and each `h2` separately.

### Contrast — every text run passes AA; the only sub-3:1 value is a decorative flame

| pair                                        | ratio  | verdict                    |
| ------------------------------------------- | -----: | -------------------------- |
| ink `#161a2e` on card white                  | 17.19  | pass                       |
| ink on page `#f6f7fb`                        | 16.06  | pass                       |
| muted `#4b5168` on white                     |  7.85  | pass                       |
| muted on soft indigo `#eef0ff`               |  6.93  | pass                       |
| muted on soft teal `#e6f6f3`                 |  7.04  | pass                       |
| muted on soft amber `#fdf3e4`                |  7.14  | pass                       |
| accent indigo `#4f46e5` on white             |  6.29  | pass (track eyebrow)       |
| accent teal `#0f766e` on white               |  5.47  | pass                       |
| accent amber `#b45309` on white              |  5.02  | pass                       |
| accent amber on soft amber                   |  **4.57** | pass — the page's worst text run |
| white on accent (CTA chip, all three)        | 6.29 / 5.47 / 5.02 | pass              |
| streak `#9a3412` on `#fff1e6`                 |  6.60  | pass                       |
| flame `#f97316` on `#fff1e6`                  |  **2.53** | **non-text**, `aria-hidden` decoration — fails the 3:1 non-text floor, so either accept it as decoration or darken to `#c2410c` (4.05:1) |
| focus ring = the card's accent on white       | 6.29 / 5.47 / 5.02 | **pass** — this family's usual 1.8:1 ring defect does **not** apply |

The reference's focus ring is `outline: 3px solid var(--cl-card12-accent)` at `outline-offset: 3px`
on the link's `::after` overlay — i.e. **the ring colour is data-driven and all three values clear
3:1**. Keep it; this is the first card in the batch where the ring needs no repair.

## Behaviour — there is none, and that is the specification

`curl` returns **0 scripts**; the archive has no `js/` at all. Everything a visitor can do is:

1. **Hover the card** → `transform: translateY(-3px)` and
   `box-shadow: 0 20px 40px -26px rgba(22,26,46,.45)` over `.25s`, plus the chip's `gap` 4 → 8
   (measured: chip width 96 → 100). `prefers-reduced-motion: reduce` cancels all of it.
2. **Tab to a card** → the title link receives focus and the overlay `::after` paints a 3 px ring in
   the card's accent at 3 px offset.
3. **Click anywhere on a card** → the overlay `::after { inset: 0 }` makes the card one hit target;
   the anchor is `href="#"`, so the browser **jumps to the top of the document** (defect 1).

The React recreation therefore needs **no state, no effect, no handler** — only two hover utilities,
one focus-visible ring, and a reduced-motion guard. Any `useState` in this app is a signal that the
reference was embellished.

## Requirements

### Requirement: Page shell and ground

The app SHALL render a single `main` landmark on the `#f6f7fb` ground with no navigation, hero,
footer band, form or script, and SHALL NOT impose a minimum viewport height.

#### Scenario: The shell is one container

- **GIVEN** the app rendered at 1440 px
- **WHEN** the visitor measures the page
- **THEN** there SHALL be exactly one `<main>`, containing one `<header>` and one grid
- **AND** the container SHALL be `max-width: 1160px; margin: 0 auto; padding: clamp(32px, 6vw, 72px) 16px`
  so that the grid's border box starts at x **140** and is **1160** wide
- **AND** `body` SHALL be `#f6f7fb` with `margin: 0`

#### Scenario: No minimum height, no footer band

- **GIVEN** the rendered page at 1440 × 900
- **WHEN** the content height is read
- **THEN** the content SHALL measure **715.41** px (`body.scrollHeight`) and the document **900**
  (the viewport), i.e. **no** `min-height: 100vh` and **no** extra band below the grid
- **AND** the only element after the grid SHALL be the Component Dock attribution line required by
  the repo

### Requirement: The head

The header SHALL pair the `h1` with a right-aligned streak pill and SHALL wrap the pill onto its own
line only when the arithmetic demands it.

#### Scenario: Heading and pill

- **GIVEN** the header at 1440 px
- **WHEN** the two children are measured
- **THEN** the `h1` SHALL read "Continue learning" at **34 px / 700 / −.02em**, box **295.45 × 43** at
  y **72**
- **AND** the pill SHALL read "6-day streak" at **14 px / 600** in `#9a3412` on `#fff1e6`, radius
  **999**, padding **7px 14px 7px 10px**, `gap: 6`, box **145 × 32**
- **AND** the pill's flame SVG SHALL be **18 × 18**, `fill: #f97316`, `aria-hidden="true"`

#### Scenario: The pill wraps at 422, not at a Tailwind breakpoint

- **GIVEN** viewports of 423 and 422 px
- **WHEN** the header height is read
- **THEN** at **423** it SHALL be **33 px** (one row: `233.17 + 12 + 145 = 390.17` against a 391 px
  content box) and at **422** it SHALL be **77 px** (two rows)
- **AND** the `h1` SHALL stay one line at every width down to 320 (233.17 against 288)

### Requirement: The grid is arithmetic, not breakpoints

The card row SHALL use `repeat(auto-fit, minmax(290px, 1fr))` with a **22 px** gap and SHALL produce
3, 2 and 1 columns at the measured boundaries without a single media query.

#### Scenario: Column boundaries

- **GIVEN** the grid
- **WHEN** the viewport is 946, 945, 634 and 633 px
- **THEN** the column counts SHALL be **3, 2, 2, 1**
- **AND** the tracks SHALL be **290.00** at 946 and at 634 (the exact floors) and **445.50 / 601.00**
  at 945 / 633
- **AND** the grid SHALL cap at **1160** from 1192 px upward

#### Scenario: No horizontal scrolling anywhere

- **GIVEN** any probed width (320, 360, 390, 430, 520, 636, 768, 900, 914, 950, 1024, 1280, 1440)
- **WHEN** `scrollTo(200, 0)` is issued
- **THEN** `scrollX` SHALL remain **0**
- **AND** at **320** the track SHALL be **290** inside a **288** grid box, clipped by the gutter by
  **2 px** with **14 px** of page margin still visible — reported as *clipped*, never as *overflowing*

### Requirement: Card shell and its two insets

Each card SHALL be a white 22 px-radius panel with a 1 px `#e6e8f0` border and **10 px** padding,
with a `flex` column whose body absorbs the slack so that all footers align.

#### Scenario: Card box at 1440

- **GIVEN** the first card
- **WHEN** its border box is measured
- **THEN** it SHALL be **372 × 504.41** at x **140**, y **139**
- **AND** the inner content width SHALL be **350** (`372 − 2 × 10 − 2 × 1`)

#### Scenario: The footer is pinned, not flowed

- **GIVEN** the three cards at 1440, whose titles measure 46.78 / 46.78 / 23.39
- **WHEN** the footer strips' y positions and the bar-to-strip gaps are read
- **THEN** all three strips SHALL start at **y 574.91**
- **AND** the gap from the bottom of the bar SHALL be **20 px** on cards 1 and 3 and **43.39 px** on
  card 2
- **AND** the body heights SHALL be **212.03 / 212.03 / 212.03** at 1440 but **212.03 / 212.03 /
  217.53** at 1024, where card 3's strip is the short one

#### Scenario: The 2 px inset step

- **GIVEN** the body's `padding: 16px 12px 4px` and the strip's `padding: 12px 14px` sharing the same
  350 px inner edge
- **WHEN** the left edges of the track text and the strip text are measured
- **THEN** the body text SHALL start at x **163** and the strip text at x **165**

### Requirement: Media band and level chip

The thumb SHALL be a 16:9 ratio box with a 16 px radius, its photo covering it, and SHALL carry the
level chip at `bottom: 10px; left: 10px`.

#### Scenario: 16:9 is exact

- **GIVEN** the thumb at 1440, 1024, 914, 390 and 320
- **WHEN** width is divided by height
- **THEN** every result SHALL be **1.7778**
- **AND** the measured boxes SHALL be **350 × 196.88**, **294 × 165.38**, **408 × 229.50**,
  **336 × 189.00**, **268 × 150.75**
- **AND** the implementation SHALL use `aspect-ratio: 16 / 9` with `h-full w-full object-cover`
  (never 700:440, which would add 23 px at 1440)

#### Scenario: Level chip

- **GIVEN** the three cards
- **WHEN** the chips are read
- **THEN** they SHALL read "Intermediate", "Beginner" and "All levels"
- **AND** each SHALL be **26 px** tall, radius **8**, `padding: 4px 10px`, 12 px / 600 ink on
  `rgba(255,255,255,.94)`, at `bottom: 10px; left: 10px` inside the thumb
- **AND** the chips SHALL measure **109 / 78 / 78** px wide

### Requirement: Body copy — track, title, teacher

The body SHALL print the track eyebrow in the card's accent, the course title as the card's only
`h2` wrapping the card-wide link, and the instructor's initials avatar plus name.

#### Scenario: Copy and hierarchy

- **GIVEN** the three cards
- **WHEN** the body rows are read
- **THEN** the tracks SHALL be "Front-end development", "Data", "Writing" at **13 px / 600** in
  `#4f46e5`, `#0f766e`, `#b45309` respectively
- **AND** the titles SHALL be "Modern CSS Layout with Grid and Container Queries", "Spreadsheet to
  Dashboard: Data Analysis Basics", "Clear Writing for Product Teams" at **18 px / 600 / 23.4 px**
  line-height, `margin: 4px 0 12px`
- **AND** the titles SHALL measure **46.78 / 46.78 / 23.39** px (two, two and one line) at 1440

#### Scenario: Instructor row

- **GIVEN** the instructor row of each card
- **WHEN** it is measured
- **THEN** it SHALL be **28 px** tall: a **28 × 28** `50%` disc on the card's soft tint with
  **11 px / 700** accent initials ("IM", "OB", "HW"), `gap: 8`, then the name at **14.5 px / 500**
- **AND** the names SHALL be "Ines Moreau", "Omar Benali", "Hannah Weiss"
- **AND** the avatar SHALL be `aria-hidden="true"` (the initials are not a second name)

### Requirement: Meta row

The card SHALL print two meta facts — lesson count and running time — as an icon-led `ul`.

#### Scenario: Two facts, two icons

- **GIVEN** each card's meta row
- **WHEN** it is read
- **THEN** it SHALL be a `ul` of two `li`, each an **inline-flex** pair with `gap: 6` and a
  **17 × 17** stroked SVG (`fill: none; stroke: currentColor; stroke-width: 1.8`)
- **AND** the texts SHALL be "24 lessons" + "6 h 40 min", "18 lessons" + "4 h 15 min",
  "12 lessons" + "2 h 50 min"
- **AND** the row SHALL sit at 13.5 px in the muted ink with `gap: 16`, `margin: 0 0 16`, wrapping
  only below its own content width

### Requirement: Progress block

Each card SHALL print a labelled progress line over an 8 px bar whose fill is striped and whose
width equals the printed percentage.

#### Scenario: Label, figure and bar

- **GIVEN** cards 1 and 2
- **WHEN** the progress block is measured
- **THEN** the line SHALL read "14 of 24 lessons" / "58%" and "3 of 18 lessons" / "17%", left text
  muted at 13 px, the figure ink at **13 px / 600**
- **AND** the bar SHALL be **8 px** tall, radius **999**, track `#eef0ff` / `#e6f6f3`, fill the card's
  accent, `overflow: hidden`
- **AND** the fill SHALL measure **189.08** px in a **326** px track (58 %) and **55.42** px (17 %)

#### Scenario: The stripes are part of the design

- **GIVEN** the fill element
- **WHEN** its `background-image` is read
- **THEN** it SHALL carry a 90° white-25 % gradient tiled at `16px 16px`, producing an **8 px**
  stripe period (4 px white, 4 px transparent)
- **AND** removing it SHALL be treated as a fidelity regression

#### Scenario: The finished card

- **GIVEN** card 3
- **WHEN** its progress line is read
- **THEN** it SHALL read "12 of 12 lessons" / **"Completed"** (not "100 %") with `aria-valuenow="100"`
- **AND** the fill SHALL span the full **326** px

### Requirement: Footer strip and its CTA chip

The footer SHALL be a full-inner-width tinted strip with `justify-between`, printing the next lesson
beside a solid accent chip, and SHALL wrap per card rather than per row.

#### Scenario: Strip geometry

- **GIVEN** the strip at 1440
- **WHEN** it is measured
- **THEN** it SHALL be **350 × 57.5** at y **574.91**, radius **14**, `padding: 12px 14px`,
  `margin-top: 16`
- **AND** its ground SHALL be the card's soft tint and its text 13 px in the muted ink

#### Scenario: The strip's wrap is arithmetic

- **GIVEN** the strip's content width (`track − 20 − 28`) and its needs of **297 / 305 / 227** px
  (`text 191/199/141 + gap 10 + chip 96/96/76`)
- **WHEN** the viewport is 1024 (track 316, content 266)
- **THEN** cards 1 and 2 SHALL wrap to **63 px** and card 3 SHALL stay at **57.5 px**
- **AND** the grid row SHALL then stretch all three cards to **478.41**, hiding the difference
- **AND** no `whitespace-nowrap`, smaller gap or shorter copy SHALL be used to "fix" the wrap

#### Scenario: Chip content per card

- **GIVEN** cards 1 and 2
- **WHEN** the chip is read
- **THEN** it SHALL read "Resume →" at **96 × 33.5**, radius 10, `padding: 7px 12px`, `gap: 4`,
  white 13 px / 600 on the card's accent, arrow **16 × 16** at `stroke-width: 2.2`
- **AND** on hover the gap SHALL grow to **8** and the chip to **100** px wide

### Requirement: The finished variant

Card 3 SHALL carry a `--done` modifier that swaps the strip's sentence for a certificate line and
the chip's verb for "View", without changing the strip's geometry at wide widths.

#### Scenario: Certificate state

- **GIVEN** card 3 at 1440
- **WHEN** its strip is read
- **THEN** it SHALL print an **18 × 18** stroked medal icon in the card's accent followed by
  "Certificate ready" at **600** in the full ink colour
- **AND** the chip SHALL read "View →" and measure **76** px wide
- **AND** the strip SHALL still be **57.5** px tall and start at y **574.91**

### Requirement: Semantics, focus and motion

The page SHALL expose one `h1`, three `h2`, three focusable elements, accessible progress bars, and
SHALL not ship a dead anchor or unreduced motion.

#### Scenario: Landmarks and order

- **GIVEN** the rendered page
- **WHEN** the accessibility tree is walked
- **THEN** there SHALL be **1 `h1`**, **3 `h2`** (one per card, wrapping the link), 3 `<article>`
  and no `<section>`
- **AND** there SHALL be exactly **3** focusable elements in DOM order (card 1 → 2 → 3)
- **AND** each card's link SHALL have a **real destination** (`href="#course-1"` with the matching
  `id` on the article, or a real route) — **never** `href="#"` (defect 1)

#### Scenario: Progress bars are announced

- **GIVEN** the three bars
- **WHEN** their ARIA is read
- **THEN** each SHALL carry `role="progressbar"`, `aria-valuemin="0"`, `aria-valuemax="100"` and
  `aria-valuenow` equal to the printed percentage (**58 / 17 / 100**)
- **AND** each SHALL be labelled by the visible lesson-count span whose `id` it references
  (`cl-card12-p1` … `p3`), and those ids SHALL be unique on the page

#### Scenario: The ring and the lift

- **GIVEN** a focused card
- **WHEN** the link's `::after` is inspected
- **THEN** it SHALL paint `outline: 3px solid <card accent>` at `outline-offset: 3px`, radius 22,
  and **no** outline on the link itself
- **AND** hovering the card SHALL apply `translateY(-3px)` with `0 20px 40px -26px rgba(22,26,46,.45)`
- **AND** under `prefers-reduced-motion: reduce` both transitions SHALL be `none` and the hover
  `transform` SHALL be `none`

### Requirement: Attribution, naming and repo integration

The app SHALL be a new template named `coursebook`, free of any reference to the source design in its
own files, with the repo's deployment and attribution wiring.

#### Scenario: Repo wiring

- **GIVEN** the shipped app
- **WHEN** the repo is inspected
- **THEN** `apps/coursebook` SHALL exist with package `@free-react-templates/coursebook`,
  `public/CNAME` = `coursebook.free.componentdock.com` and `"homepage"` =
  `https://coursebook.free.componentdock.com`
- **AND** `TEMPLATES.md` SHALL gain the `Card 12` row under `## Bootstrap Cards (20)`
- **AND** the footer SHALL link `https://www.componentdock.com/` as "Component Dock"

#### Scenario: Provenance stays out of the app

- **GIVEN** every file under `apps/coursebook`
- **WHEN** they are grepped (case-insensitive) for the source site's name and for the source slug
- **THEN** there SHALL be **no** hit in code, comments, `index.html` or tests
- **AND** the provenance SHALL live only in this spec, `TEMPLATES.md` and the PR body

## Screenshot analysis (catalogue image, `card-12.jpg`, AVIF 1200 × 972)

The listing image is a **browser-window mockup**: a light chrome bar with three traffic-light dots
and a rounded address pill reading `preview.colorlib.com`, floating on a grey canvas with a soft
drop shadow. Inside the frame the page shows exactly the live composition — the head line top-left,
the orange pill top-right, and three cards on a cool grey ground, with a large empty area below them
because the frame is a fixed ~900 px viewport.

Visible content, left to right: **Continue learning**; **🔥 6-day streak**; then three cards —
1. a photo of a laptop showing a code editor with the **Intermediate** chip bottom-left, the indigo
   eyebrow **Front-end development**, the title *Modern CSS Layout with Grid and Container Queries*
   over two lines, **IM Ines Moreau**, **24 lessons · 6 h 40 min**, **14 of 24 lessons / 58 %** with
   a two-thirds indigo striped bar, and the strip **Next: Subgrid for card rows** + **Resume →**;
2. a dashboard photo, **Beginner**, teal **Data**, *Spreadsheet to Dashboard: Data Analysis Basics*,
   **OB Omar Benali**, **18 lessons · 4 h 15 min**, **3 of 18 lessons / 17 %** with a short teal bar,
   **Next: Pivot tables in practice** + **Resume →**;
3. a typing photo, **All levels**, amber **Writing**, *Clear Writing for Product Teams* on one line,
   **HW Hannah Weiss**, **12 lessons · 2 h 50 min**, **12 of 12 lessons / Completed** with a full
   amber bar, and the strip **🏅 Certificate ready** + **View →**.

The mockup agrees with the live render in every measurable respect except its **frame** — the chrome
bar, the dots, the address pill and the outer canvas are the listing site's presentation, not the
template. **Do not reproduce the frame**, and do not square the corner radius or drop the empty
region below the cards into a background band: the live page genuinely ends after the grid.

## Known reference defects (do not copy)

1. **Three dead anchors.** All three title links are `href="#"`, so every card click jumps to the top
   of the document. Point the links at real in-page targets (`#course-1` … with ids on the articles)
   or a real route; the whole-card overlay stays.
2. **The visible CTA is `aria-hidden` decoration.** "Resume →" / "View →" is a `<span
   aria-hidden="true">`; only the title link is real, and the chip duplicates its affordance without
   being one. Keep the overlay pattern (one target per card), keep the chip decorative, and make sure
   the link's accessible name is the course title — do **not** ship the chip as a second `<button>`
   that goes nowhere, and do not hide the only real target behind `aria-hidden`.
3. **The footer strip is a `<p>`.** Semantically the card ends with a paragraph containing a CTA-
   shaped span. Render the strip as a `<div>`/`<footer>` inside the article, with the sentence in a
   `<span>` and the chip as a styled non-interactive `<span aria-hidden>`.
4. **The progress bars label themselves with their own value.** `aria-labelledby` points at the span
   that prints "14 of 24 lessons", so AT hears the value twice (as name and as value). Give each bar
   a stable `aria-label` ("Progress on <course title>") and keep `aria-valuenow` as the figure.
5. **The archive's README lies about a script.** It lists `js/snippet.js`, and the folder ships no
   `js/` at all — this snippet has no behaviour. Do not invent one to match the README.
6. **The sheet declares a selector it never uses.** `.cl-icon` (height/width/fill helper) has no
   matching class in the markup — `document.querySelectorAll('.cl-icon').length === 0`. Fifth card
   in a row with this leftover; do not port it.
7. **One unstyled markup class.** `.cl-card12__progress` has no rule; it is a wrapper whose layout
   comes entirely from `__progress-top` and `__bar`. Harmless, but a port that hangs `display: flex`
   on it will change the block's spacing.
8. **All three accents are inline styles.** The stylesheet only knows the **indigo** pair; teal
   (`#0f766e` / `#e6f6f3`) and amber (`#b45309` / `#fdf3e4`) exist solely in `style="…"` attributes.
   A port that keeps the sheet's defaults ships three indigo cards.
9. **Two card insets (12 px body / 14 px strip).** A 2 px step in the text's left edge. Reproduce it —
   normalising both to 12 moves every strip's text 2 px left of the body.
10. **The flame is 2.53:1.** Decorative (it is `aria-hidden` and carries no meaning the text lacks),
    but if a later accessibility pass wants it legible, `#c2410c` reaches 4.05:1 against `#fff1e6`.
11. **The `:where(html) :is(…){ all: revert }` reset block survives into the file.** It exists to
    shield the snippet from a host page's Bootstrap reboot (49 of the sheet's 129 selectors are that
    guard, plus a `[hidden]` re-declaration). In the React app this is **not** to be ported: Tailwind
    4's preflight is the reset, and `all: revert` on every element would undo it.

## Adapting to the repo (deltas the implementer owns)

| reference                                   | in `apps/coursebook`                                                        |
| ------------------------------------------- | ---------------------------------------------------------------------------- |
| inline `--cl-card12-accent` / `-soft` per card | a typed `courses` array carrying `accent` + `soft` hexes, applied via inline `style` or three static class pairs in `@theme` |
| 3 × `images/*.jpg` (700 × 440, 41–53 KB)    | `https://picsum.photos/seed/coursebook-1..3/700/440`, `loading="lazy" decoding="async"` on the below-the-fold two |
| Lexend 8 × `@font-face`, 2 binaries         | one Google Fonts `<link>`: `family=Lexend:wght@400..700` (verified **HTTP 200**) |
| `:where(html) :is(…){ all: revert }` reset  | dropped — Tailwind preflight                                               |
| `.cl-icon` helper                           | dropped                                                                     |
| `.cl-card12__progress` unstyled wrapper     | keep the wrapper but give it no properties beyond the children's margins     |
| hover lift + `gap` growth                   | `hover:-translate-y-[3px] hover:shadow-[0_20px_40px_-26px_rgba(22,26,46,.45)]` + `group-hover:gap-2`, `motion-reduce:` cancels both |
| 3 dead `href="#"` links                     | `href="#course-N"` with `id="course-N"` on each `<article>`                 |
| no footer                                    | one Component Dock attribution line (repo rule)                            |
| 0 scripts                                    | 0 hooks, 0 handlers — static markup only                                    |

Tailwind 4 notes: `clamp(26px,3.4vw,34px)` → `text-[clamp(26px,3.4vw,34px)]`; the 8 px striped fill
needs an arbitrary `bg-[linear-gradient(90deg,rgba(255,255,255,.25)_25%,transparent_25%_50%,rgba(255,255,255,.25)_50%_75%,transparent_75%_100%)]`
at `bg-[length:16px_16px]`; the 350/12/14 insets are arbitrary values, and the grid needs no
breakpoint classes at all (`grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[22px]`).

## Verification checklist

- [ ] `apps/coursebook` exists, package `@free-react-templates/coursebook`, `public/CNAME` =
      `coursebook.free.componentdock.com`, `"homepage"` = `https://coursebook.free.componentdock.com`
- [ ] `npm run verify:app coursebook` passes (typecheck + lint + knip + fallow + 100 % coverage + build)
- [ ] `openspec validate template-coursebook --type spec` is valid
- [ ] measured at 1440: grid **1160** at x 140 / y 139, cards **372 × 504.41**, thumb
      **350 × 196.88** (1.7778), strip y **574.91**, content **715.41**
- [ ] measured at 946 / 945 / 634 / 633: **3 / 2 / 2 / 1** columns, tracks **290.00** at both floors
- [ ] measured at 1,024: cards **478.41**, strips **63 / 63 / 57.5**
- [ ] measured at 423 / 422: header **33 / 77**
- [ ] measured at 320: track **290** in a **288** grid, `scrollX 0` after `scrollTo(200,0)`, content
      **1,642**
- [ ] bar fills **189.08** (58 %) and **55.42** (17 %) in a 326 track, with the 8 px stripe period
- [ ] the bar, the track eyebrow and the CTA chip all take their colour from the card's accent
- [ ] focus ring **3 px / 3 px offset** in the card's accent (6.29 / 5.47 / 5.02 on white)
- [ ] text contrast: no run below AA — worst is amber-on-soft **4.57:1**
- [ ] `prefers-reduced-motion: reduce` kills the lift, the shadow and the chip's gap growth
- [ ] no `href="#"`, no `<form>`, no `<button>`, 3 focusable elements, 1 `h1`, 3 `h2`
- [ ] no occurrence of the source slug or the source site's name in any app file
- [ ] `curl -I https://coursebook.free.componentdock.com` → 200, `ssl_verify_result=0`
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`; `npm run readme:status` re-run
