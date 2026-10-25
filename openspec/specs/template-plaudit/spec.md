# Template: Plaudit (Testimonial cards — three tinted quote cards with one inverted dark card, serif italic quotes and a giant clipped quotation glyph)

## Purpose

A **three-card testimonial band on a warm off-white ground**, where the three cards are the *same component in
three paint jobs*: a mint card, a **near-black card in the middle**, and a peach card. Each card carries a
customer logo with a star rating, a serif **italic** quote, and a byline (initials disc + name + role) above a
tinted hairline — plus one oversized, 18 %-opacity **quotation glyph** parked half outside the card's bottom
right corner and clipped by it. ColorLib's own listing states the brief in one line:

> "Customer quote cards in three tints, including one dark card for contrast. Free download, no jQuery or
> plugins."

That one sentence is the whole design. This is the fifth member of the `card` snippet family and, in one
respect, its simplest: **there is no behaviour at all** — 0 `<script>`, 0 anchors, 0 forms, 0 buttons, 0 media
queries, 0 keyframes. Everything that makes it look like a template is *paint and type*, so fidelity lives
entirely in the tokens, the radii and four pieces of type geometry.

The page is a single band: a **centred head** (46 px serif `h1`, one 16 px line of sub-copy) and a
**three-column grid of `<figure>` cards**. Nothing else — no nav, no hero, no stats row, no logos strip, no
CTA, no form, no footer plate. Inventing any of those is the main fidelity risk here.

The personality is in six small, copyable details; lose any of them and a correct palette still reads as a
generic "testimonials" block:

1. **The cards are not white and not equal.** Three distinct tints — mint `#e7f5ee`, near-black `#1f1d2b`,
   peach `#fdeee4` — on a **warm paper** ground `#fffdf9` (not `#fff`, not grey). The dark card is *not*
   an accent stripe or a "featured" lift: it is the same card, in another tint, at the same size and the same
   height.
2. **The accent is per card, and it is a single inline token.** `--cl-card05-accent` is `#0f766e` (teal-700),
   `#fbbf24` (amber-400) and `#c2410c` (orange-700) respectively; it drives the avatar disc, the byline rule
   (at 25 % alpha), the big quotation glyph, and — **only on the dark card** — the star fill. There is no
   "brand colour" on this page: the brand is the *set* of tints.
3. **The quote is serif italic; everything else is the system sans.** `Newsreader` italic 400 at 21 px (23 px
   on the dark card) against `system-ui` for logo, name, role and sub-copy. This serif/sans pair is the
   design; swapping the quote to Inter makes it a different template.
4. **The quotation glyph is decoration, not text.** A `::before` with `content: "\201C"` at **200 px**, opacity
   **.18**, `right: 20px; bottom: -118px`, so only the **top 82 px** of an 86 × 200 px glyph is visible inside
   a card that also sets `overflow: hidden`. It is **not** an image, not an `<svg>`, and not a `<span>`.
5. **The byline is pinned to the bottom by `flex: 1` on the quote, not by a spacer.** All three cards are the
   same height (grid `align-items: stretch`), the quotes have different lengths, and the bylines still share
   one baseline row because the quote block absorbs the slack.
6. **The layout has no breakpoints.** `grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))` and two
   `clamp()`s are the entire responsive story: 3 columns at **≥ 946**, 2 at **634–945**, 1 at **≤ 633**, with a
   fixed 22 px gutter throughout. There is no `@media` in the sheet.

Composition at 1440 × 900 (measured with `getBoundingClientRect`, Playwright 1.62 Chromium, `document.fonts`
fully loaded, device scale 1):

| # | band                                                    | hook                   | ground    | top     | height     |
| - | ------------------------------------------------------- | ---------------------- | --------- | ------: | ---------: |
| 0 | page (`body`)                                           | `body`                 | `#fffdf9` |     0   |    650.8   |
| 1 | container (1,192 outer / 1,160 content)                  | `.cl-card05-demo`      | —         |     0   |    650.8   |
| 2 | head: `h1` / sub, 640 wide, centred, 40 below            | `-demo__head`          | —         |    80   |    132.2   |
| 3 | grid (3 × 372, gap 22, `align-items: stretch`)           | `.cl-card05-grid`      | —         |   252.2 |    318.6   |
| — | *nothing else*                                           | —                      | —         |     —   |        —   |

Per card, top to bottom: `__top` (logo + stars, **20.25**, 20 below) → `__quote` (`flex: 1`, **133.4** — the
quote text itself is 121.8 on the 21 px cards and 133.4 on the 23 px one, 26 below) → `__by` (**63** =
1 px rule + 18 pad + 44 avatar) → 26 px card padding-bottom. The card's own padding is **30 / 28 / 26**.

The band is **650.8 px tall at 1440** — shorter than a 900 px viewport, so the page does **not** scroll on a
laptop and the composition sits in the upper two thirds of the window. That empty lower third is the design
(it is what the catalogue screenshot shows too); it is **not** an invitation to add a band.

Recreation of the ColorLib "Card V05" design (`card-05`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `card-05`
- **ColorLib page:** https://colorlib.com/wp/template/card-05/ — **HTTP 200, 113,096 B**, `<title>`
  `Card V05 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V05"**, `<meta name="description">`
  *"Customer quote cards in three tints, including one dark card for contrast. Free download, no jQuery or
  plugins."* (`og:description` identical), `og:image` `…/sites/2/card-05.jpg`, plus the usual
  `-1024x829` / `-768x622` / `-408x330` / `-353x286` / `-338x274` derivatives (all **200**).
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/card-05/index.html — **HTTP 200, 5,687 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` **"Card V05 | Colorlib"**, `lang="en"`,
  two `robots` metas, one `dns-prefetch`, **one stylesheet**, **no JSON-LD, no font `<link>`** (the faces are
  self-hosted), and **no authored `<script>`** (the 10 scripts in the DOM are the host's analytics: gtag
  `G-SEKJ4E9T4H`, Cloudflare Zaraz, Cloudflare Insights beacon).
  ⚠️ **This family lives under `theme/bootstrap/<slug>/`**: `theme/card-05/` → **404, 9 B**, `theme/bb/card-05/`
  → **404**. The directory form and `/index.html` both answer **200, 5,687 B** on this probe; prefer the explicit
  `/index.html` when you need a stable reading.
- **Stylesheet:** one file, `css/style.css?v=345a7e7b` — **7,047 B**, sha256
  `9400bd236afb94ed835448c33ffa800d1c41cb4d49704e50882723a1d7741082`. **The copy inside
  `downloads/free/card-05.zip` hashes identically**, so *live preview verified; the archive is its un-versioned
  twin* (the live HTML is the archive's `index.html`, 5,495 B, plus the host's injections: two `robots` metas, a
  `cdnjs` `dns-prefetch`, the `?v=` cache-buster and `fetchpriority="high"` — nothing else).
- Single page, verified: `about.html` **404**, `contact.html` **404**, `pricing.html` **404** (all 9 B). There is
  no inner-page inventory to mine, and therefore no hidden section to recreate.
- **Recreation name:** `plaudit` — one lowercase word, a noun meaning a round of applause / an expression of
  praise, which is exactly what a testimonial band is, and not the source name. No collision with `apps/`,
  `openspec/specs/` or `docs/templates/`, and **zero substring hits repo-wide**:
  `git grep -il plaudit origin/main` → **no matches**; `ls apps | grep plaudit` → 0. `colorlib.com/wp/template/
  plaudit/` → **404**, `preview.colorlib.com/theme/plaudit/` → **404**. The recreation lives at `apps/plaudit`,
  package `@free-react-templates/plaudit`, `plaudit.free.componentdock.com`. **No ColorLib string may appear in
  the app** — provenance lives in this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5). The
  product named in the copy, **"Ledgerly"**, is the source's fictional customer product and stays.

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,887 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-05` is the **fifth member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**), one of
the **214 snippet variants in 19 families** the listing carries and `TEMPLATES.md` does not. The 42 standalone
designs in that gap are all prepped; the snippet families are the remaining queue, worked **in family order,
then variant number**. `card-01` → **Nameplate** (`1a09a0c7b`), `card-02` → **Marketrow** (`780313169`),
`card-03` → **Octavo** (`2a8371ce0`) and `card-04` → **Tierline** (`9e6e58563`) came first.

When the app ships, its row belongs in a new family section **`## Bootstrap Cards (20)`**, inserted
**after `## Bootstrap Carousels (20)` (line ~710) and before `## Bootstrap Checkboxes (20)` (line ~733)**, with
that heading's count bumped (the existing families read `## Bootstrap Accordions (20)`, `## Bootstrap Buttons
(20)`, `## Bootstrap Calendars (20)`, `## Bootstrap Carousels (20)`, `## Bootstrap Checkboxes (20)`, …). The
row is:

```markdown
- [x] **Card 05** — [colorlib](https://colorlib.com/wp/template/card-05/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-05.jpg) · [plaudit](https://plaudit.free.componentdock.com)
```

(Adding rows for the other 15 variants is a **batch** decision for the implementer stream, not a prep-run side
effect — this prep touches no shared file.)

## Reference readings (2026-10-25, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| preview HTML      | 200, **5,687 B**, `text/html; charset=utf-8`, `<title>` "Card V05 \| Colorlib", `lang="en"`                       |
| stylesheet        | `css/style.css?v=345a7e7b`, **7,047 B**, sha256 `9400bd23…`; zip twin **identical**                               |
| archive           | `preview.colorlib.com/downloads/free/card-05.zip`, **200, 206,307 B**, 9 entries (`card-05/` + 4 dirs + 4 files)   |
| `js/snippet.js`   | **does not exist** — no `js/` directory, no `<script>`; the archive README claims one (**defect**)                  |
| archive README    | 1,260 B; also claims `images/` — **no `images/` directory** (**defect**)                                          |
| fonts             | Newsreader **400 italic** + **500** normal, `latin` + `latin-ext`; **4 woff2 files = 4 distinct binaries**          |
| images            | **none** — 0 `<img>`, 0 in the archive                                                                          |
| SVG               | **18 inline**: 15 star glyphs (3 cards × 5) + 3 brand marks; all unclassed, styled by descendant selectors          |
| classes           | **18** in the markup, **19** selected by the sheet → **1 dead selector** (`.cl-icon`), 0 markup-only classes       |
| anchors           | **0** — the page has nothing to click                                                                            |
| forms / buttons   | **0 / 0**                                                                                                       |
| headings          | 1 × `h1` ("Teams who switched to Ledgerly"); **no `h2`–`h6` anywhere**                                           |
| blocks            | 3 × `<figure>` each wrapping `__top` + `<blockquote>` + `<figcaption>` (3 `blockquote`, 3 `figcaption`)            |
| media queries     | **none** — 0 `@media`; the 3 → 2 → 1 column ladder is `auto-fit` + `minmax(290px, 1fr)`                          |
| keyframes         | **none** — 0 `@keyframes`, 0 transitions, 0 hover states                                                          |
| custom properties | **4**: `--cl-card05-bg`, `--cl-card05-accent`, `--cl-card05-ink`, `--cl-card05-muted` (two of them re-set inline per card) |
| content height    | **650.8** at 1,440 · 644.4 at 1,280 · 624.2 at 1,024 · 611.4 at 946 · 835.8 at 900 · 877.9 at 768 · 952.8 at 634 · 1,001.5 at 633 · 1,110.8 at 480 · 1,238 at 390/360 · **1,388.2** at 320 |
| horizontal scroll | **none at any width probed** — `body.scrollWidth === clientWidth` and `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 480 / 633 / 634 / 768 / 900 / 946 / 1,024 / 1,137 / 1,138 / 1,280 / 1,440 |

## Design tokens (measured from `style.css`, 7,047 B, and from `getComputedStyle` at 1440 px)

### Palette — one warm paper ground, three card tints, three accents

| role                | value       | where                                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------------- |
| page ground         | `#fffdf9`   | `body` background — **warm** paper, not white                                 |
| band ink            | `#1c1917`   | `.cl-card05-demo` `color`; also `--cl-card05-ink` on the two light cards      |
| sub-copy            | `#57534e`   | `-demo__sub`                                                                 |
| mint card surface   | `#e7f5ee`   | card 1 `--cl-card05-bg` (inline `style` attribute)                            |
| mint accent         | `#0f766e`   | card 1 `--cl-card05-accent` — avatar disc, byline rule @25 %, glyph, logo tint |
| dark card surface   | `#1f1d2b`   | card 2 `--cl-card05-bg`; also `-dark` `--cl-card05-ink`'s "other half"        |
| dark accent         | `#fbbf24`   | card 2 `--cl-card05-accent` — avatar disc, **star fill**, byline rule @25 %    |
| peach card surface  | `#fdeee4`   | card 3 `--cl-card05-bg`                                                      |
| peach accent        | `#c2410c`   | card 3 `--cl-card05-accent`                                                   |
| card muted          | `#44403c`   | `--cl-card05-muted` — role line, logo label, on the two light cards            |
| dark ink            | `#f5f3ff`   | `.cl-card05--dark` `--cl-card05-ink` — quote, name                             |
| dark muted          | `#c4c1d4`   | `.cl-card05--dark` `--cl-card05-muted` — role, logo label                      |
| avatar label (dark) | `#1f1d2b`   | `.cl-card05--dark .cl-card05__avatar` `color` (dark text on amber)             |
| star fill           | `#f59e0b`   | `.cl-card05__stars svg` (light cards)                                         |
| star outline        | `#b45309`   | `.cl-card05__off`: `fill: none; stroke: #b45309; stroke-width: 1.4`            |
| byline rule         | `color-mix(in srgb, var(--accent) 25%, transparent)` | `.cl-card05__by` `border-top`, with `rgba(120,113,108,.3)` as the fallback |

Measured as `getComputedStyle` returns them: mint rule `color(srgb 0.0588235 0.462745 0.431373 / 0.25)` →
`rgba(15,118,110,.25)`; dark `color(srgb 0.984314 0.74902 0.141176 / 0.25)` → `rgba(251,191,36,.25)`;
peach `color(srgb 0.760784 0.254902 0.0470588 / 0.25)` → `rgba(194,65,12,.25)`.

Two of the four custom properties are **declared in the sheet and overridden inline in the markup**: every
`<figure class="cl-card05">` carries `style="--cl-card05-bg:…; --cl-card05-accent:…"`. So the tint set is
content, not stylesheet — a recreation should carry it as a **data array of three entries** (surface, accent,
ink, muted, dark flag), not as three copied components.

### Type — a serif italic quote on a system-sans frame

| element                | family                          | size / line-height      | weight / style | tracking  | colour     |
| ---------------------- | ------------------------------- | ----------------------- | -------------- | --------- | ---------- |
| `h1` (`-demo__title`)  | `Newsreader, Georgia, serif`    | `clamp(30px, 4vw, 46px)` / **1.1** | **500** | `−.02em` (`−0.92px` at 46) | `#1c1917` |
| sub (`-demo__sub`)     | `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` | 16 / normal | 400 | — | `#57534e` |
| quote (`__quote p`)    | `Newsreader, Georgia, serif`    | **21** / **1.45** (30.45) | **italic 400** | — | card ink   |
| quote big (`--big p`)  | same                            | **23** / **1.45** (33.35) | italic 400 | — | card ink   |
| card body              | system stack                    | **15** / **1.5**        | 400            | —         | card ink   |
| logo label (`__logo`)  | system stack                    | **13.5** / 1.5          | **800**        | `−.01em`  | card muted |
| name (`__name`)        | system stack                    | 15 / 1.3                | **700**        | —         | card ink   |
| role (`__role`)        | system stack                    | **14** / 1.3            | 400            | —         | card muted |
| avatar initials        | system stack                    | 14 / 1                  | **700**        | —         | white / `#1f1d2b` on the dark card |

**Face delivery.** Four `@font-face` rules, four **distinct** woff2 binaries:
`newsreader-400-italic-latin` (63,212 B), `newsreader-400-italic-latin-ext` (38,612 B),
`newsreader-500-latin` (60,820 B), `newsreader-500-latin-ext` (38,008 B). `document.fonts` after load reports
exactly `Newsreader|italic|400|loaded` and `Newsreader|normal|500|loaded` — the 500 is the **real** face (this
is where the family differs from Tierline, whose bold weights were synthesised). Prescribe one Google Fonts
`<link>` for `Newsreader:ital,wght@1,400;0,500` and bundle nothing. Every other weight on the page is the
**system** stack: the 700 name and the 800 logo label are the OS UI face, so they must stay `font-sans`, not
Newsreader.

### Radii, rules, decoration, motion

| token                  | value                                                                 |
| ---------------------- | --------------------------------------------------------------------- |
| card radius            | **24px** — the only large radius on the page                          |
| avatar radius          | **50 %** on a 44 × 44 disc                                            |
| byline rule            | `1px` `border-top`, accent at 25 % alpha                              |
| card overflow          | `hidden` — this is what clips the quotation glyph                     |
| card shadow            | **none** — no shadow, no border, no outline, no hover                 |
| motion                 | **none** — 0 `@keyframes`, 0 `transition`, 0 `:hover`, 0 scroll reveal |
| page background image  | **none**                                                              |

### Layout — one band, an intrinsic grid, and not one media query

- `body { margin: 0; background: #fffdf9 }`.
- `.cl-card05-demo`: `max-width: 1160px`, `margin: 0 auto`, `padding: clamp(36px, 6vw, 80px) 16px`,
  `color: #1c1917`. **`box-sizing` is the browser default (content-box) here** because the sheet's reset only
  reverts; so the *outer* box is **1,192 px** and the content box **1,160 px**. ⚠️ In Tailwind/preflight
  (`border-box`) `max-w-[1160px]` + `px-4` would give a **1,128 px** content box and 361.3 px cards instead of
  372. Prescribe `max-w-[1192px] px-4` (or `max-w-[1160px]` with the padding on an inner wrapper) — see
  §Trap 3 in the design notes.
- `.cl-card05-grid`: `display: grid`, `grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))`,
  `gap: 22px`, **fixed at every width**, `align-items: stretch`.
- Breakpoints fall out of the arithmetic: 3 columns while `gridWidth ≥ 914` (290 × 3 + 22 × 2), i.e.
  **≥ 946 px viewport**; 2 columns while `gridWidth ≥ 602`, i.e. **634–945**; 1 column at **≤ 633**. Bisected:
  **946 → 3**, **945 → 2**, **634 → 2**, **633 → 1**.
- Vertical padding: `clamp(36px, 6vw, 80px)` → **36** at ≤ 600, **46.08** at 768, **54** at 900, **61.44** at
  1,024, **76.8** at 1,280, **80** at ≥ 1,334.
- Head: `max-width: 640px`, `margin: 0 auto 40px`, `text-align: center`; `h1` `margin: 0`; sub
  `margin: 12px 0 0`.

### Component geometry (1440 px, then the small states)

| element              | geometry                                                                              |
| -------------------- | ------------------------------------------------------------------------------------- |
| card                 | **372 × 318.63** at x 140 / 534 / 928, y 252.2; radius 24; padding `30px 28px 26px`; content **316** |
| `__top`              | 316 × **20.25**, `flex; justify-content: space-between; align-items: center; gap: 10; flex-wrap: wrap`, `margin-bottom: 20` |
| `__logo`             | `inline-flex; gap: 6; white-space: nowrap`; svg **20 × 20**, `stroke-width: 2`, `stroke-linejoin: round`, `fill: none`; measured widths 134.5 / 98.1 / 147.3 |
| `__stars`            | `flex; gap: 3`; five svg **18 × 18**, `fill: #f59e0b`; block width **102**                |
| `__quote`            | `flex: 1; margin: 0 0 26px`; box **133.4** tall (stretched), text 121.8 (cards 1, 3) / 133.4 (card 2) |
| `__by`               | `flex; gap: 12; padding-top: 18; border-top: 1px`; **63** tall; avatar 44                     |
| `__avatar`           | 44 × 44, radius 50 %, `display: grid; place-items: center`, accent fill, 14/700                |
| `__who`              | `flex: 1; flex-direction: column; min-width: 120; line-height: 1.3`                     |
| glyph (`::before`)   | **86 × 200**, Newsreader 500, opacity **.18**, `right: 20px; bottom: −118px`; only **82 px** visible, top edge **236.6** from the card's top |

### Responsive matrix (measured)

| viewport | columns | card width | card heights (1 / 2 / 3)     | `__top` heights   | band height | `h1` lines | sub lines |
| -------: | ------: | ---------: | ---------------------------- | ----------------- | ----------: | ---------: | --------: |
|      320 |       1 |        290 | 365.4 / 385.3 / 365.4        | 48.25 / 20.25 / 48.25 |     1,388.2 |          2 |         2 |
|      360 |       1 |        328 | 307.0 / 352.0 / 307.0        | 20.25 / 20.25 / 20.25 |     1,238.0 |          2 |         2 |
|      390 |       1 |        358 | 307.0 / 352.0 / 307.0        | 20.25 / 20.25 / 20.25 |     1,238.0 |          2 |         2 |
|      480 |       1 |        448 | 276.6 / 318.6 / 276.6        | 20.25 / 20.25 / 20.25 |     1,110.8 |          1 |         2 |
|      633 |       1 |        601 | 246.1 / 285.3 / 246.1        | 20.25 / 20.25 / 20.25 |     1,001.5 |          1 |         1 |
|      634 |       2 |        290 | 385.3 / 385.3 / 365.4        | 48.25 / 20.25 / 48.25 |       952.8 |          1 |         1 |
|      768 |       2 |        357 | 352.0 / 352.0 / 307.0        | 20.25 / 20.25 / 20.25 |       877.9 |          1 |         1 |
|      900 |       2 |        423 | 318.6 / 318.6 / 276.6        | 20.25 / 20.25 / 20.25 |       835.8 |          1 |         1 |
|      946 |       3 |        290 | 385.3 / 385.3 / 385.3        | 48.25 / 20.25 / 48.25 |       611.4 |          1 |         1 |
|    1,024 |       3 |        316 | 385.3 / 385.3 / 385.3        | 20.25 / 20.25 / 20.25 |       624.2 |          1 |         1 |
|    1,280 |       3 |        372 | 318.6 / 318.6 / 318.6        | 20.25 / 20.25 / 20.25 |       644.4 |          2 |         1 |
|    1,440 |       3 |        372 | 318.6 / 318.6 / 318.6        | 20.25 / 20.25 / 20.25 |       650.8 |          2 |         1 |

Two shapes in that table are worth memorising because they look like bugs and are not: at **320** the single
track floors at **290** inside a **288** wide grid (the card eats 2 px of the container's right padding, no page
scroll), and at **633 → 634** the card heights **invert** (a wider 601 px card is *shorter* than a 290 px one,
because its quotes need fewer lines).

## Requirements

### Requirement 1: Page shell and the single testimonial band

The app SHALL render one full-width band on the warm paper ground `#fffdf9` — a centred head (`h1` + sub-copy)
over a three-column grid of testimonial cards — with **no other content bands**, and no page background image.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport with the webfonts loaded
- **WHEN** the page is measured
- **THEN** `<body>` background is `#fffdf9` and the content is **650.8 px** tall (the page does not scroll)
- **AND** the band container is **1,192 px outer / 1,160 px content** at x **124**, padding **80 px** vertical
  and **16 px** horizontal, `color: #1c1917`
- **AND** the container is centred (`margin: 0 auto`) so at 1,280 it sits at x **44** and below **1,192** it is
  edge-to-edge at x **0** with 16 px padding

#### Scenario: No invented bands or controls

- **GIVEN** the rendered app
- **THEN** it contains exactly one section: this testimonial band
- **AND** it contains **no** navigation bar, hero, headline stats row, logo strip, CTA button, newsletter form,
  carousel arrows/dots, pagination, "read more" link or multi-column footer — the reference has none of them
  (0 anchors, 0 forms, 0 buttons)
- **AND** the only print-level element below the band is the single Component Dock attribution line
  (Requirement 10)

#### Scenario: Nothing moves

- **GIVEN** the reference sheet
- **THEN** it declares **0 `@keyframes`**, **0 `transition`** and **0 `:hover`** rules
- **AND** the recreation therefore ships no animation, no reveal-on-scroll and no hover state on the cards,
  avatars or stars, and needs no `prefers-reduced-motion` branch

### Requirement 2: The head block and its two wrap behaviours

The app SHALL render a centred head capped at **640 px** containing one `h1` at `clamp(30px, 4vw, 46px)` in
Newsreader 500 and one 16 px sub-copy line, 12 px below it, and the block SHALL reproduce the reference's
non-monotonic wrapping exactly.

#### Scenario: Head geometry at 1440

- **GIVEN** the head at 1440
- **THEN** it is **640 × 132.19** at x **400** / y **80**, `text-align: center`, `margin: 0 auto 40px`
- **AND** the `h1` reads **"Teams who switched to Ledgerly"** at **46 px** / 50.6 / **500** / `−0.92px`, ink
  `#1c1917`, in **exactly two lines**: line 1 **"Teams who switched to"** (458.7 wide at x 490.7), line 2
  **"Ledgerly"** (175.6 wide at x 632.2)
- **AND** the sub reads **"4.8 average from 1,900+ reviews by finance and operations teams."** at 16 px,
  `#57534e`, **one line**, its box top **12 px** below the `h1`'s bottom
- **AND** the grid starts **40 px** below the head (y 252.2)

#### Scenario: The headline is two lines at both ends of the range

- **GIVEN** a `white-space: nowrap` clone of the `h1` to read its advance
- **THEN** at **≥ 1,138 px** the advance (**640.7** at 1,138) exceeds the 640 px head and the headline is
  **two lines**; at **1,136–1,137** it is 638.75 and it is **one line**
- **AND** at **433–1,137** it is **one line** (the `4vw` scale keeps the advance under the head)
- **AND** at **≤ 432 px** the 30 px clamp minimum meets a narrower head (400 px available at 432) and it is
  **two lines** again
- **AND** the sub-copy is **two lines at ≤ 480**, **one line at ≥ 633**

#### Scenario: The face is the real Newsreader

- **GIVEN** the required Google Fonts link
- **THEN** it requests **`Newsreader:ital,wght@1,400;0,500`** (italic 400 for the quotes, normal 500 for the
  `h1`) and `display=swap`
- **AND** `document.fonts` reports `Newsreader|italic|400|loaded` **and** `Newsreader|normal|500|loaded`
- **AND** no bundled `woff2` ships in the app and no other Newsreader weight is requested

### Requirement 3: The grid — three intrinsic columns, no media query

The app SHALL lay the three cards out with
`grid-template-columns: repeat(auto-fit, minmax(290px, 1fr))`, a **fixed 22 px** gap and
`align-items: stretch`, with **no `@media` rule anywhere**, so that the column count changes at **946** and
**634** as a consequence of the track arithmetic.

#### Scenario: Column counts and thresholds

- **GIVEN** the viewports 320, 360, 390, 480, 633, 634, 768, 900, 946, 1,024, 1,280 and 1,440
- **THEN** the grid resolves to **1 / 1 / 1 / 1 / 1 / 2 / 2 / 2 / 3 / 3 / 3 / 3** columns
- **AND** the card widths are **290 / 328 / 358 / 448 / 601 / 290 / 357 / 423 / 290 / 316 / 372 / 372** px
- **AND** the gap is a fixed **22 px** at every width and never clamps
- **AND** `getComputedStyle(grid).gridTemplateColumns` at 320 reads **"290px"** while the grid box is **288**,
  i.e. the track floor wins by 2 px (documented in Requirement 8)

#### Scenario: No width query exists

- **GIVEN** `grep -c '@media' css/style.css` on the reference
- **THEN** the answer is **0**
- **AND** the recreation contains no Tailwind responsive prefix (`sm:` / `md:` / `lg:`) on the grid, the head
  or the cards

### Requirement 4: Card anatomy — plate, top row, quote, byline

The app SHALL render each testimonial as a `<figure>` with a **24 px** radius and `padding: 30px 28px 26px`
on a per-card tint, containing, in order, a top row (brand logo + star rating), a `<blockquote>` quote and a
`<figcaption>` byline (initials disc + name + role) separated from the quote by a 1 px tinted rule.

#### Scenario: Card geometry at 1440

- **GIVEN** the first (mint) card
- **THEN** it is **372 × 318.63** at x 140 / y 252.2, `background: #e7f5ee`, `border-radius: 24px`,
  `padding: 30px 28px 26px`, `font-size: 15px; line-height: 1.5`, `overflow: hidden`
- **AND** it has **no** border, shadow, outline or hover state
- **AND** its children measure `__top` **20.25** (y 282.2), `__quote` **133.4** (y 322.4), `__by` **63**
  (y 481.8), and the byline's bottom sits exactly 26 px above the card's bottom edge
- **AND** the content width is **316** (= 372 − 28 − 28)

#### Scenario: The byline is pinned by the flexible quote

- **GIVEN** the three cards in one row
- **THEN** all three cards are the same height (**318.63**) because the grid stretches them
- **AND** `__quote` carries `flex: 1`, so all three `__by` blocks start at the same y (**481.8**) even though
  the quote text differs (121.8 on the 21 px cards, 133.4 on the 23 px one)
- **AND** adding a spacer, a fixed `min-height` or `margin-top: auto` instead of `flex: 1` changes the byline
  position and is a fidelity defect

#### Scenario: Byline and logo details

- **THEN** `__by` is `display: flex; align-items: center; gap: 12px; padding-top: 18px` with a `1px`
  `border-top` in `color-mix(in srgb, var(--accent) 25%, transparent)`
- **AND** the avatar is a **44 × 44** disc, `border-radius: 50%`, `display: grid; place-items: center`, filled
  with the card's accent, initials at **14/700**
- **AND** the name is **15/700** in card ink and the role **14** in card muted, in one `__who` column with
  `min-width: 120` and `line-height: 1.3`
- **AND** the logo label is **13.5/800** with `−.01em` tracking in card muted, `white-space: nowrap`, preceded
  by a **20 × 20** `stroke-width: 2` brand glyph inside an `inline-flex; gap: 6px` row

### Requirement 5: The middle card is inverted, not highlighted

The app SHALL paint the middle card with the dark skin — surface `#1f1d2b`, ink `#f5f3ff`, muted `#c4c1d4`,
accent `#fbbf24` — at the **same size, radius, padding and height** as its neighbours, with **no lift, scale,
ring or shadow**.

#### Scenario: The dark skin

- **GIVEN** the second card at 1440
- **THEN** its background is `#1f1d2b` and it is **372 × 318.63** at x 534 / y 252.2 — identical geometry to
  the mint card
- **AND** the quote renders in `#f5f3ff` at **23 px** (`.cl-card05__quote--big`), the name in `#f5f3ff`, the
  role and logo label in `#c4c1d4`
- **AND** the avatar disc is **amber `#fbbf24`** with **dark `#1f1d2b`** initials (the only inverted avatar)
- **AND** its five stars are filled with the **card accent** `#fbbf24`, not `#f59e0b`
- **AND** it carries no float, no `transform`, no extra border and no shadow, and it is *not* taller than its
  neighbours

#### Scenario: The three tints are data

- **THEN** the card component takes `surface`, `accent`, `ink`, `muted` and a `dark` flag as props/entries in
  one array of three
- **AND** no colour is hard-coded per card in three separate components
- **AND** the accent drives the avatar fill, the byline rule alpha and the quotation-glyph colour — nothing else

### Requirement 6: Stars, the rating label and the logo row

The app SHALL render each rating as five inline star SVGs (**18 × 18**, `gap: 3px`) inside a
`role="img"` element whose `aria-label` states the rating, with the glyphs themselves `aria-hidden`, and SHALL
reproduce the one **outline** star on the third card.

#### Scenario: Filled and outline stars

- **GIVEN** the three ratings
- **THEN** cards 1 and 2 announce **"5 out of 5 stars"** and render five filled stars in `#f59e0b`
- **AND** card 3 announces **"4 out of 5 stars"** and its fifth star has `fill: none`, `stroke: #b45309`,
  `stroke-width: 1.4`
- **AND** every star uses `viewBox="0 0 20 20"` and the path
  `M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.8L10 14.9l-5.25 2.7 1-5.8L1.5 7.7l5.9-.9z`
- **AND** the star row is a `<p role="img" aria-label="…">` whose five `<svg>` children are `aria-hidden`

#### Scenario: The top row wraps instead of shrinking

- **GIVEN** a 290 px card (the `minmax` floor — at 320, 634 and 946 viewports)
- **THEN** `__top` is **48.25** tall on cards 1 and 3 and **20.25** on card 2
- **AND** the difference is `flex-wrap: wrap` + `justify-content: space-between`: at 234 px of available width
  (290 − 56) the 134.5 px logo plus a 10 px gap plus the 102 px star row no longer fit, so the stars drop to a
  second line; card 2's 98.1 px logo still fits
- **AND** the logo keeps `white-space: nowrap` and never shrinks — the row wraps rather than truncates

### Requirement 7: The clipped quotation glyph

The app SHALL reproduce the oversized quotation mark as a **CSS pseudo-element**, not as text, not as an
`<svg>` and not as an image: `::before` with `content: "\201C"` at **200 px** Newsreader, the card's accent
colour, `opacity: .18`, `right: 20px`, `bottom: −118px`, `line-height: 1`, `pointer-events: none`, inside the
card's `overflow: hidden`.

#### Scenario: Glyph geometry at 1440

- **GIVEN** the mint card (**318.63** tall, **372** wide)
- **THEN** the glyph box measures **86 × 200** and its right edge sits **20 px** from the card's right edge
  (x 406–492)
- **AND** `bottom: −118px` puts 118 px of the glyph below the card's bottom edge, so only the **top 82 px** is
  visible, starting at **236.6 px** from the card's top
- **AND** the visible portion is the mark's two upper hooks, not a full “ character
- **AND** it is the **card accent** at 18 % — `rgba(15,118,110,.18)` on mint, `rgba(251,191,36,.18)` on the dark
  card, `rgba(194,65,12,.18)` on peach (it reads as a tint of the surface, never as a shape you can point at)
- **AND** the glyph adds **0 px** to the card's height and does not create a scrollbar (the card clips it)

#### Scenario: The glyph is decoration

- **THEN** it is generated by CSS `content` and is absent from the accessibility tree (no text node, no `title`)
- **AND** it is not selectable content and does not duplicate the quote's own punctuation

### Requirement 8: Responsive integrity

The app SHALL never produce a horizontal scrollbar, SHALL keep each grid row's cards equal in height, and SHALL
reproduce the reference's 320 px track overflow as a **documented 2 px** into the container padding rather than
"fixing" it silently.

#### Scenario: No horizontal scroll anywhere

- **GIVEN** the widths 320, 360, 390, 480, 633, 634, 768, 900, 946, 1,024, 1,280 and 1,440
- **THEN** `body.scrollWidth === body.clientWidth` at every one of them
- **AND** `window.scrollTo(200, 0)` leaves `window.scrollX === 0` at every one of them
- **AND** the page does not scroll vertically at 900 or above (**650.8** at 1,440 / **644.4** at 1,280 /
  **624.2** at 1,024 / **611.4** at 946) but does below it (**835.8** at 900, **877.9** at 768, **952.8** at
  634, **1,001.5** at 633, **1,110.8** at 480, **1,238** at 390 and 360, **1,388.2** at 320)

#### Scenario: The 320 px track floor

- **GIVEN** a 320 px viewport
- **THEN** the container content box is **288** wide but `grid-template-columns` resolves to **290px**, so each
  card is **290** at x 16 and its right edge lands at **306** — 2 px inside the 16 px right padding, still 14 px
  clear of the viewport edge
- **AND** there is **no** page scroll (this is a track floor, not an overflow)
- **AND** the recreation SHALL reproduce this and record it: if it prefers a clean fit, use
  `minmax(min(290px, 100%), 1fr)`, which yields **288** at 320 and changes nothing at any other width — and say
  so in the PR as a 2 px delta

#### Scenario: Heights in a row are equal, across rows they are not

- **GIVEN** the 2-column state at 768
- **THEN** cards 1 and 2 are **352.0** each (one row, stretched) and card 3 is **307.0** (alone in row 2)
- **AND** at 634 the same row is **385.3 / 385.3 / 365.4** — the row heights come from the tallest card
- **AND** the card heights are **not** monotonic in viewport width: **276.6** at 480 but **246.1** at 633 for
  the same card

### Requirement 9: Semantics, accessibility and contrast

The app SHALL use `<figure>` / `<blockquote>` / `<figcaption>` for each testimonial, keep exactly **one**
`h1` and **no other heading level**, and SHALL keep every text/ground pair at WCAG AA or better.

#### Scenario: Document structure

- **GIVEN** the rendered app
- **THEN** the structure is `<main>` → `<header>` (`h1` + sub) → `<div>` grid → 3 × `<figure>`
- **AND** each figure contains a top row, one `<blockquote><p>…</p></blockquote>` and one `<figcaption>`, and
  the logo label, name and role are `<span>`s — **not** headings (the reference has no `h2`–`h6`)
- **AND** exactly one `h1` exists and `lang="en"` is set on `<html>`
- **AND** the decorative avatar initials and all 15 star SVGs are `aria-hidden`, and the star rows carry
  `role="img"` with an `aria-label` of **"N out of 5 stars"**

#### Scenario: Measured contrast

- **THEN** the ratios are at least: ink on paper **17.21:1**, sub on paper **7.51:1**, ink on mint **15.57:1**,
  ink on peach **15.43:1**, muted on mint **9.14:1**, muted on peach **9.06:1**, dark ink on dark **15.09:1**,
  dark muted on dark **9.40:1**, white on teal avatar **5.47:1**, dark ink on amber avatar **9.91:1**, white on
  orange avatar **5.18:1**
- **AND** the star fill (`#f59e0b` at **1.91:1** on mint) is decorative-only, the rating being conveyed by the
  `aria-label`, and the outline star (`#b45309` at **4.43:1** on peach) stays distinguishable without relying
  on hue alone (filled vs outline is a shape difference)

#### Scenario: Nothing focusable is invented

- **THEN** the app has no interactive element of its own besides the single Component Dock attribution link
- **AND** that link is keyboard reachable with a visible focus ring (the reference has no focus styles at all,
  because it has no focusable elements)

### Requirement 10: Attribution, naming and provenance

The app SHALL ship as `apps/plaudit` (package `@free-react-templates/plaudit`) with `public/CNAME`
`plaudit.free.componentdock.com`, `homepage` `https://plaudit.free.componentdock.com`, and a footer line
linking **https://www.componentdock.com/**.

#### Scenario: Identity

- **THEN** `apps/plaudit/package.json` name is `@free-react-templates/plaudit` and `homepage` is the surge URL
- **AND** `public/CNAME` contains `plaudit.free.componentdock.com`
- **AND** the page has its own `<title>` and a `meta description` written for the fictional product, not the
  source's

#### Scenario: Footer attribution

- **THEN** one line of small print below the band links **https://www.componentdock.com/** with the visible
  text **"Component Dock"**
- **AND** it does not introduce a footer plate, columns, newsletter or social row

#### Scenario: Clean provenance

- **THEN** `grep -ri colorlib apps/plaudit` → no matches, and `grep -ri 'card-05' apps/plaudit` → no matches
- **AND** no ColorLib asset, stylesheet, font file or screenshot is copied into the app
- **AND** the source mapping (`apps/plaudit` recreates `https://colorlib.com/wp/template/card-05/`) lives only
  in this spec and the PR description

### Requirement 11: Copy fidelity

The app SHALL render the reference's copy — head, three quotes, three brands, three people and three roles —
with the reference's own punctuation, and SHALL NOT invent extra columns, "verified purchase" chips or dates.

#### Scenario: Head and sub-copy

- **THEN** the `h1` reads **"Teams who switched to Ledgerly"**
- **AND** the sub reads **"4.8 average from 1,900+ reviews by finance and operations teams."** — with the comma
  in **"1,900+"** and the trailing period

#### Scenario: The three testimonials

- **THEN** card 1 is brand **"Lumen Freight"**, rating **5/5**, quote *"Month-end close went from six working
  days to two. The approval trail alone saved our auditors a week of back-and-forth."*, byline **RM · Rosa
  Martell · Head of Finance**
- **AND** card 2 is brand **"Paperkite"**, rating **5/5**, quote *"We run payroll for 340 people across four
  countries. Ledgerly is the first tool our accountants and our engineers both actually like opening."*,
  byline **KA · Kwame Asante · COO**
- **AND** card 3 is brand **"Oakridge Clinics"**, rating **4/5**, quote *"Setup took an afternoon. I would like
  more report templates, but the support team answered every question within the hour."*, byline **TB · Tessa
  Brandt · Practice Manager**

#### Scenario: Typographic details survive

- **THEN** the quotes keep their **sentence case**, their **first-person** voice and their periods, and the
  em-dash-free phrasing of the source
- **AND** **"back-and-forth"** keeps both hyphens, **"Month-end"** keeps its hyphen, **"Setup"** has no
  hyphen, and **"within the hour"** stays lowercase
- **AND** the byline roles keep their exact casing (**"Head of Finance"**, **"COO"**, **"Practice Manager"**)
- **AND** the brand names are set at **13.5 px / 800** exactly as listed — **"Lumen Freight"** and **"Oakridge
  Clinics"** keep their internal space

## Screenshot analysis (catalogue image, `card-05.jpg`)

The listing image is **a framed capture, not a bare screenshot**: a **1200 × 972** **progressive JPEG**
(`file` → `JPEG image data, progressive, precision 8, 1200x972, components 3`; **55,114 B**, sha256
`82fd4ee0…`) showing a macOS window — three traffic-light dots and a URL pill reading `preview.colorlib.com` —
on a **white sheet with a soft drop shadow over a `#eeeeee` page**. Inside the window the design renders in its
**three-column** state on `#fffdf9`: the two-line serif headline, the one-line sub-copy, and three cards —
mint, near-black, peach — with the quotation glyphs peeking out at their bottom-right corners.

Sampled pixels from the image (JPEG drift accounts for the 1–2 level differences from the tokens): mint card
**`rgb(232,245,238)`**, dark card **`rgb(32,30,44)`**, peach card **`rgb(255,242,233)`**, page ground
**`rgb(254,253,249)`** — i.e. the catalogue image was rendered from the same sheet, and the tints match
`#e7f5ee` / `#1f1d2b` / `#fdeee4` / `#fffdf9` within JPEG noise.

⚠️ **The screenshot's headline is ONE line and the live page's is TWO.** The image predates the woff2 swap: in
the fallback serif the advance of "Teams who switched to Ledgerly" fits the 640 px head, while the delivered
Newsreader 500 needs **643.41 px** at 46 px and wraps. Measured both ways on the live page: with
`document.fonts` unresolved the `h1` box is **81.6** tall (one line, 50.6); with the face loaded it is
**101.2** (two lines). **Build the loaded state** (Requirement 2) — the screenshot is not the reference for
type metrics, the live DOM is. If a single-line headline is preferred for its own sake, the honest lever is the
head's `max-width` (656 px restores one line at 46 px), and that choice belongs in the PR as a stated delta,
not as a silent font-size change.

Two more consequences for the recreation: the **window frame, traffic lights, URL pill, white sheet and drop
shadow are catalogue furniture** — none of it belongs in the app (the app's ground is the page's own
`#fffdf9`, full-bleed); and the empty lower third of the frame is real, not a crop — at 1,440 the band is
**650.8 px** in a 900 px window.

## Known reference defects (do not copy)

1. **The archive README documents two directories that do not exist.** It lists `js/snippet.js — the behaviour,
   in plain JavaScript` and `images/ — its images`; the ZIP holds **7 files** (`card-05/index.html`,
   `card-05/css/style.css`, `card-05/README.md` and four `card-05/fonts/*.woff2`) across 4 directories, with
   **no `js/` directory, no `images/` directory, no `<script>` element and not one `<img>`**. Identical to
   `card-01`, `card-03` and `card-04`; `card-02` is the only sibling that really ships JS. Do not port a script
   and do not add photography.
2. **`.cl-icon` is a dead selector** — fourth sibling in a row. The sheet styles it (`height: 1em; width: auto;
   fill: currentColor; display: inline-block`) and the markup never uses it: the 18 SVGs are unclassed and
   styled through `.cl-card05__stars svg` and `.cl-card05__logo svg`. Omit it.
3. **The `:where(html) … { all: revert; }` guard is 55 lines of anti-framework reset** (plus six
   `::-webkit-datetime-edit` selectors and a `[hidden]` re-hide) that exists so the snippet renders identically
   inside a Bootstrap host page. Tailwind's preflight is the equivalent; port **none** of it. Note the side
   effect it leaves behind: `box-sizing` stays `content-box`, which is why the container's `max-width: 1160px`
   measures **1,192** outer (see the design notes' Trap 3).
4. **The 320 px track floor overflows the container by 2 px.** `minmax(290px, 1fr)` inside a 288 px grid puts
   each card's right edge 2 px into the 16 px padding. Harmless (no scrollbar) but wrong-looking in a strict
   layout test; record it, or use `minmax(min(290px, 100%), 1fr)` and disclose the 2 px delta.
5. **The outline star is styled for the light cards only.** `.cl-card05__off` sets `stroke: #b45309`, which is
   `rgb(180,83,9)` on `#1f1d2b` — only **3.3:1**. The reference only puts the 4-star rating on the peach card,
   so the bug is latent. If a dark card ever carries a partial rating, override the stroke to the card accent
   (`#fbbf24`, 9.91:1) — do not reproduce a dim outline.
6. **The star row has no `title`, no `aria-valuenow` and no visible rating number.** Its accessible name comes
   from `aria-label` on a `<p role="img">`, which is valid but fragile: a screen reader announces "5 out of 5
   stars, image". Keep the pattern (it is the reference's), do not "improve" it into five labelled images.
7. **`border-top` is declared twice** — `rgba(120,113,108,.3)` first, then the `color-mix()` — a progressive
   fallback that no current browser needs. Ship the `color-mix()` value (or the equivalent `rgba(accent,.25)`)
   once, per card.
8. **The `color-mix()` returns a `color(srgb …)` serialisation**, not `rgba()`. Layout tests should assert the
   computed `border-top-color` against the `color(srgb …)` form (or compare channels) rather than a hex string.

## Verification checklist

- [ ] `apps/plaudit` exists, `@free-react-templates/plaudit` in `package.json`, `public/CNAME` =
      `plaudit.free.componentdock.com`, `homepage` the same
- [ ] footer line links `https://www.componentdock.com/` ("Component Dock"); **no** ColorLib string and no
      `card-05` in any app file (comments included)
- [ ] one band only: centred head + a 3-card grid; no nav, hero, stats, logo strip, CTA, form, carousel or
      footer plate invented
- [ ] ground `#fffdf9`; container **1,192 outer / 1,160 content** at x 124, `padding: clamp(36px,6vw,80px) 16px`
      (→ 80 / 16 at 1440), `color: #1c1917`
- [ ] head **640** wide, centred, `margin: 0 auto 40px`, **132.19** tall at 1440; `h1` **46/50.6/500/−0.92px**
      Newsreader, **two lines** ("Teams who switched to" / "Ledgerly"); sub 16 `#57534e`, **12 px** below
- [ ] `h1` wraps **2 lines ≥ 1,138**, **1 line 433–1,137**, **2 lines ≤ 432**; sub **2 lines ≤ 480**,
      **1 ≥ 633**
- [ ] grid `repeat(auto-fit, minmax(290px,1fr))`, **gap 22**, `align-items: stretch`, **no `@media` and no
      Tailwind breakpoint prefix**; columns **1/1/1/1/1/2/2/2/3/3/3/3** and card widths
      **290/328/358/448/601/290/357/423/290/316/372/372** at 320/360/390/480/633/634/768/900/946/1,024/1,280/1,440
- [ ] card **372 × 318.63**: radius **24**, padding `30px 28px 26px`, `15/1.5`, `overflow: hidden`, **no**
      border/shadow/hover; children `__top` **20.25**, `__quote` **133.4** (`flex: 1`), `__by` **63**;
      content width **316**
- [ ] tints: mint `#e7f5ee` / `#0f766e`, dark `#1f1d2b` / `#fbbf24` (`ink #f5f3ff`, `muted #c4c1d4`), peach
      `#fdeee4` / `#c2410c`; **colour set comes from a three-entry array**, not three components
- [ ] dark card: **same** 372 × 318.63 at x 534, no lift/scale/ring/shadow, quote **23 px**, avatar **amber with
      `#1f1d2b` initials**, stars **`#fbbf24`**
- [ ] quote **21/1.45 italic** Newsreader (`23/1.45` on the dark card); logo **13.5/800** `−.01em` + 20 × 20
      stroke-2 glyph; name **15/700**; role **14** muted; avatar **44** radius 50 % **14/700**; `__by` rule
      `1px` accent at **25 %**
- [ ] stars: five **18 × 18** `viewBox="0 0 20 20"` glyphs, `gap: 3`, fill `#f59e0b` (accent on dark), the 4th
      card-3 star **outline** `fill:none; stroke:#b45309; stroke-width:1.4`; `<p role="img" aria-label="N out of
      5 stars">` with `aria-hidden` SVGs
- [ ] glyph: `::before` `content:"\201C"` **200 px** Newsreader, accent, `opacity: .18`, `right: 20`, `bottom:
      −118`, `line-height: 1`, `pointer-events: none`; box **86 × 200**, **82 px** visible from y **236.6**;
      adds 0 px of height; no image, no `<svg>`, no text node
- [ ] top row wraps at 290 px cards → `__top` **48.25** on cards 1 and 3, **20.25** on card 2
- [ ] `body.scrollWidth === clientWidth` **and** `scrollX === 0` after `scrollTo(200,0)` at **320 / 360 / 390 /
      480 / 633 / 634 / 768 / 900 / 946 / 1,024 / 1,280 / 1,440**; band heights **1,388.2 / 1,238 / 1,238 /
      1,110.8 / 1,001.5 / 952.8 / 877.9 / 835.8 / 611.4 / 624.2 / 644.4 / 650.8**
- [ ] at 320 the track is **290** in a **288** grid (2 px into the right padding, no scroll) — reproduced, or
      the `min(290px,100%)` delta disclosed
- [ ] one `h1`, **no other heading**, 3 × `<figure>` with `<blockquote>` + `<figcaption>`, `lang="en"`, all
      decorative SVG `aria-hidden`, exactly one focusable element (the attribution link)
- [ ] Newsreader **italic 400 + normal 500** via one Google Fonts `<link>` and no bundled woff2; every other
      weight is the system stack
- [ ] no script, no `<img>`, no `.cl-icon`, no reset guard, no keyframes, no transitions
- [ ] 100 % coverage on the new app, `scripts/verify-app.sh plaudit` green
- [ ] after shipping (implementer stream, not prep): add the `## Bootstrap Cards (20)` row from §Why this
      design has no row to `TEMPLATES.md` and mark it `[x]`
