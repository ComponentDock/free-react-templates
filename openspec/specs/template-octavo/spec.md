# Template: Octavo (Article cards — a three-card journal row with cover-photo category chips, serif headlines and an author meta strip)

## Purpose

A **three-card editorial row, and the only snippet in the `card` family with no card plate at all**. There is
no white surface, no border, no shadow and no radius on the card itself: the card is a transparent `<article>`
holding a **14 px-rounded 16 : 10 photograph**, a white pill chip pinned inside it, a serif headline, an
excerpt, and a hairline meta strip carrying an initials avatar, an author, a date and a read-time pill. The
colour in the design comes only from the **chip hue**, which is set per card as an inline custom property
(blue / green / magenta) and reused by that card's avatar disc and its focus ring. ColorLib's own listing
states the brief in one line:

> "Article cards for a blog or journal with a cover image, a category chip, a serif headline, an excerpt and an
> author... Free download, no jQuery or plugins."

The page is a single band: a **flex head** — the `h1` "From the journal" on the left, an "All articles →" link
on the right, sharing one baseline over a **2 px ink rule that runs the full 1,180 px container** — then the
three-card grid. Nothing else: no nav, no hero, no pagination, no newsletter, no footer plate.

The design's personality is in six small, copyable details; lose any of them and a pixel-correct palette reads
as a generic blog grid:

1. **The card is bare.** The visible "card" is the photograph's own 14 px radius. Text sits directly on the
   paper ground (`#fbfaf7`), not on a surface — so there is no plate edge to align to, and the meta rule is the
   only horizontal line in each card.
2. **The body is inset 2 px, the meta strip is not.** `__body` is `padding: 18px 2px 0`, so the headline and
   excerpt start **2 px right of the photograph's left edge** while the meta strip's 1 px rule and its avatar
   are flush at 0. That 2 px mismatch is deliberate and visible on the left edge of a column of three cards.
3. **The chip is white with coloured text, not coloured with white text** — 12.5 px / 600, radius 999,
   `5px 11px`, pinned `14 / 14`, with a `0 2px 8px rgba(0,0,0,.15)` shadow so it reads on a dark photograph.
   The three hues are `#1d4ed8`, `#047857`, `#a21caf`; each card's avatar disc reuses the *same* hue.
4. **One 1.5 px underline is the only link affordance**, and it is a `linear-gradient` background whose size
   goes `0 1.5px → 100% 1.5px` on **card** hover (`.cl-card03:hover .cl-card03__link`), not on link hover.
   The link itself is invisible because its `::after` covers the whole card (`inset: 0`, radius 14) — the
   entire card is the target, and the headline is only where the underline appears.
5. **The meta strip is three fixed parts** — a 38 px initials disc, a two-line author/date block that takes
   `flex: 1`, and a `#f1efe9` read-time pill with a 15 px clock glyph. The pill's right edge is flush with the
   card's right edge because the middle block absorbs the gap.
6. **Fraunces carries two elements only** (the `h1` and the card headline); every other glyph — chip, excerpt,
   author, date, read-time — is the **system UI stack**. The serif/sans split is the design; it is not a
   "serif template".

Composition at 1440 × 900 (measured with `getBoundingClientRect`, Playwright 1.62 Chromium, device scale 1):

| # | band                                        | ground    |    top | height |
| - | ------------------------------------------- | --------- | -----: | -----: |
| 0 | page (`body`)                               | `#fbfaf7` |      0 |  699.2 |
| 1 | container (1,212 outer / 1,180 content)     | `.cl-card03-demo` | 0 | 699.2 |
| 2 | head (`h1` + "All articles →", 2 px rule)   | `__head`  |     72 |   68.4 |
| 3 | grid (3 × 369.3 cards, gap 36)              | `.cl-card03-grid` | 168.4 | 458.8 |

Per card, top to bottom: `__cover` (369.3 × 230.8, radius 14, chip pinned inside) → `__body` (155: headline
55, 10 px gap, excerpt 72) → `__meta` (18 px above, 1 px rule, 16 px below, 55 tall).

The design is **699 px tall at 1440** — it does not fill a 900 px viewport, and that is correct: 72 px of
container padding, a 68.4 px head, a 28 px gap and one 458.8 px row. It is a *section*, not a site. The
recreation therefore ships a single-page app whose one band is this row, plus the minimum chrome the repo
requires (title/meta, a `main` landmark, a footer carrying the Component Dock link). **Do not invent a nav, a
hero, an article-detail route, a category filter, pagination or a footer column set to fill the viewport.**

Recreation of the ColorLib "Card V03" design (`card-03`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `card-03`
- **ColorLib page:** https://colorlib.com/wp/template/card-03/ — **HTTP 200, 113,460 B**, `<title>`
  `Card V03 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V03"**, `<meta name="description">`
  *"Article cards for a blog or journal with a cover image, a category chip, a serif headline, an excerpt and an
  author... Free download, no jQuery or plugins."*. Featured image `card-03.jpg` (**79,410 B**, a real
  progressive **JPEG**, 1200 × 972 — see §Screenshot analysis), plus the usual 1024 × 829 / 768 × 622 /
  408 × 330 / 353 × 286 / 338 × 274 derivatives.
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/card-03/ — **HTTP 200, 4,469 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` **"Card V03 | Colorlib"**, `lang="en"`,
  two `robots` metas (`noindex, nofollow` and `noindex, follow`), **no JSON-LD, no `<link>` to fonts, no
  analytics, and not a single `<script>` element**.
  ⚠️ **This family lives under `theme/bootstrap/<slug>/`**: `theme/card-03/` → **404, 9 B** (both the directory
  and `/index.html`) and `theme/bb/card-03/` → **404, 9 B**. The `/index.html` form answered **200 on the first
  probe** — the directory index is what flakes in this family, so prefer the explicit `/index.html` when you
  need a stable reading.
- **Stylesheet:** one file, `css/style.css?v=a2d8adb8` — **7,618 B**, sha256
  `67b2694540d927e96071c78b54c6d3ae0e7c032e069be3bd4ef372d8ae6c8246`. **The copy inside
  `downloads/free/card-03.zip` hashes identically** (`67b26945…`, 7,618 B) ⇒ live preview verified, the archive
  is its un-versioned twin. The live HTML (4,469 B) differs from the zip's `index.html` (4,171 B) only by host
  injections: the two `robots` metas, a `cdnjs` `dns-prefetch`, the `?v=` cache-buster with
  `fetchpriority="high"`, and the per-image `fetchpriority` / `decoding` / `loading` hints (first two photos
  eager + `sync`, the third `loading="lazy"` + `async`).
- **Archive:** `https://preview.colorlib.com/downloads/free/card-03.zip` — **HTTP 200, 466,099 B**, **13
  entries** under a `card-03/` prefix (3 directories + 10 files: `index.html`, `css/style.css`, three images,
  four woff2 faces, `README.md` at 1,260 B). Path is `preview.colorlib.com/downloads/…`, the same host the page
  itself links from its own download button.
- **JavaScript: none.** There is **no `<script>` in the document** and `js/snippet.js` → **404, 9 B**; the zip
  has **no `js/` directory at all**. The `README.md` inside the archive nevertheless lists
  *"js/snippet.js — the behaviour, in plain JavaScript"* — **the same lie `card-01` tells** and a different
  story from `card-02`, which really does ship 1,628 B. There is no behaviour on this page to reproduce.
- **Fonts:** **Fraunces** (a Google font), self-hosted — **four** `@font-face` blocks (500 and 600 × `latin`,
  `latin-ext`) pointing at `../fonts/fraunces-<weight>-<subset>.woff2`, `font-display: swap`. **Only two
  distinct files exist**: `…-latin.woff2` **67,388 B** (`48282a415ec2…`) and `…-latin-ext.woff2` **59,540 B**
  (`f120089b9440…`), each hashed identically across the two weights — one variable face copied twice per subset.
  **Weight 500 is declared and never selected**: the `h1` and every card headline are 600, and everything else
  is the system stack. The recreation loads **Fraunces 600** from Google Fonts with one `<link>` (500 too, only
  if a weight-500 element is added).
- **Images:** **3** JPEGs, `800 × 500` natural and declared: `desk.jpg` 56,900 B · `code.jpg` 49,416 B ·
  `garden.jpg` 101,441 B. Every one carries a descriptive `alt` naming the subject ("Laptop, notebook and
  coffee cup on a wooden desk", …).
- **SVG:** **3 inline** icons, all the *same* clock glyph — `viewBox="0 0 24 24"`, `<circle cx="12" cy="12"
  r="9"/>` + `<path d="M12 7v5l3 2"/>`, `fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap:
  round`, rendered **15 × 15**. No icon font, no sprite, no other icon anywhere.
- **Single-page?** Yes, verified: `index.html` **200** (byte-identical 4,469 B to the directory URL — a no-op
  link, never a 404), `about.html` **404**, `contact.html` **404**, `blog.html` **404**, `article.html`
  **404**. There is no inner-page inventory to mine for sections.
- **Recreation name:** `octavo` — one lowercase word, a print/typography term (the book size) that suits a
  serif-headed journal row, and not the source name. No collision with `apps/` (1,747 entries), `openspec/specs/`
  or `docs/templates/`, and **zero substring hits repo-wide**: `git grep -il octavo origin/main` → **no
  matches**. `colorlib.com/wp/template/octavo/` → **404**, `preview.colorlib.com/theme/octavo/` → **404**,
  `preview.colorlib.com/theme/bootstrap/octavo/` → **404**. (`octavo.free.componentdock.com` resolves, but so
  does `zzzz-nonexistent-12345.free.componentdock.com` — the `*.free.componentdock.com` wildcard answers for
  every name, so DNS is **not** evidence of a collision.) The recreation lives at `apps/octavo`, package
  `@free-react-templates/octavo`, `octavo.free.componentdock.com`. **No ColorLib string may appear in the app**
  — provenance lives in this spec, the `TEMPLATES.md` row and the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,886 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-03` is the **third member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**), one of
the **214 snippet variants in 19 families** the listing carries and `TEMPLATES.md` does not. The 42 standalone
designs in that gap are all prepped; the snippet families are the remaining queue, worked **in family order,
then variant number**. `card-01` → **Nameplate** (`1a09a0c7b`) and `card-02` → **Marketrow** (`780313169`) came
first.

When the app ships, its row belongs in a new family section **`## Bootstrap Cards (20)`**, inserted
**after `## Bootstrap Carousels (20)` (line 710) and before `## Bootstrap Checkboxes (20)` (line 733)**, with
that heading's count bumped (the existing families read `## Bootstrap Accordions (20)`, `## Bootstrap Buttons
(20)`, `## Bootstrap Calendars (20)`, `## Bootstrap Carousels (20)`, `## Bootstrap Checkboxes (20)`, …). The
row is:

```markdown
- [x] **Card 03** — [colorlib](https://colorlib.com/wp/template/card-03/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-03.jpg) · [octavo](https://octavo.free.componentdock.com)
```

(Adding rows for the other 17 variants is a **batch** decision for the implementer stream, not a prep-run side
effect — this prep touches no shared file.)

## Reference readings (2026-10-25, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                       |
| ----------------- | ----------------------------------------------------------------------------------------------------------- |
| preview HTML      | 200, **4,469 B**, `text/html; charset=utf-8`, `<title>` "Card V03 \| Colorlib", `lang="en"`                   |
| stylesheet        | `css/style.css?v=a2d8adb8`, **7,618 B**, sha256 `67b26945…`; zip twin **identical**                            |
| `js/snippet.js`   | **404, 9 B** — no `js/` in the archive either; the README claims one (**defect**)                             |
| archive           | `preview.colorlib.com/downloads/free/card-03.zip`, **200, 466,099 B**, 13 entries (3 dirs + 10 files)          |
| fonts             | Fraunces 500/600 self-hosted; **2 distinct files** (`latin` 67,388 B, `latin-ext` 59,540 B) copied 4×; 500 unused |
| images            | **3** JPEGs, all `800 × 500`: desk 56,900 · code 49,416 · garden 101,441 B                                     |
| SVG               | **3 inline**, the same 15 × 15 clock (three uses), 24 × 24 viewBox, stroke-width 2                            |
| classes           | **19** in the markup, **20** selected by the sheet → **1 dead selector** (`.cl-icon`), 0 hook-only, 0 framework utilities |
| anchors           | **4**, *all* bare `href="#"` (the "All articles →" link and the three headlines) — see §Known reference defects |
| headings          | 1 × `h1` ("From the journal"), 3 × `h2` (the three headlines) — no `h3` anywhere                              |
| structure         | `<main>` → `<header>` (`h1` + link) → `<div class="grid">` → 3 × `<article>`; each article = `__cover`(+`__img`,`__chip`) + `__body`(`h2`›`a`, `__excerpt`) + `footer.__meta`(`__avatar`, `__who`(`__author`,`__date`›`time`), `__read`(svg)) |
| media queries     | **exactly one**: `@media (prefers-reduced-motion: reduce)` — *no width breakpoints at all*                     |
| document height   | **699.2** content at 1,440 (viewport 900); 690.4 at 1,180; 689.3 at 1,024; 1,098.6 at 768; 1,226 at 927; **654.8** at 928; **1,083** at 612; 1,892 at 611; 1,712 at 520; 1,540.3 at 390; 1,593.5 at 320 |
| horizontal scroll | **none at any width probed** — `scrollWidth === clientWidth` and `scrollTo(200,0) → scrollX 0` at 300 / 312 / 320 / 360 / 390 / 520 / 600 / 611 / 612 / 700 / 768 / 900 / 927 / 928 / 1,024 / 1,180 / 1,200 / 1,212 / 1,440 / 1,920 |

## Design tokens (measured from `style.css`, 7,618 B, and from `getComputedStyle` at 1440 px)

### Palette — warm paper, ink text, and one hue per card

| role                 | hex / value                  | where                                                                        |
| -------------------- | ---------------------------- | ---------------------------------------------------------------------------- |
| page ground          | `#fbfaf7`                    | `body` background — a **warm** off-white, lighter and yellower than the sibling cards' `#f1f1ef` |
| **ink**              | `#111827`                    | `--cl-card03-ink`: `h1`, every card headline, the author, the "All articles" link **and the 2 px head rule** |
| **muted**            | `#4b5563`                    | `--cl-card03-muted`: the excerpt and the date                                 |
| **chip blue**        | `#1d4ed8`                    | `--cl-card03-chip` on card 1 (`Productivity`), its avatar disc, its focus ring |
| **chip green**       | `#047857`                    | card 2 (`Development`) — same three uses                                      |
| **chip magenta**     | `#a21caf`                    | card 3 (`Life outside work`) — same three uses                                |
| chip ground          | `#ffffff`                    | the chip is white **with coloured text** (never the reverse)                  |
| avatar text          | `#ffffff`                    | 13 px / 600 initials on the hue disc, `aria-hidden`                           |
| read pill ground     | `#f1efe9`                    | `__read` — the only grey-beige surface on the page                            |
| read pill text       | `#374151`                    | `__read`, including the clock glyph (`currentColor`)                          |
| meta rule            | `#e7e5e0`                    | `__meta` `border-top: 1px` — a hairline, warmer than the chip's `#e5e7eb`      |
| cover ground         | `#e5e7eb`                    | `__cover` behind the photograph, visible before it paints                      |
| focus blue           | `#1d4ed8`                    | `__all:focus-visible` ring — the one **fixed-hue** focus state                 |

Contrast, checked (WCAG AA, all pass): chip blue on white **6.70 : 1**, green **5.48 : 1**, magenta
**6.32 : 1**; ink on paper **17.0 : 1**; muted on paper **7.24 : 1**; read-pill text on `#f1efe9`
**8.96 : 1**; white initials on each hue **6.70 / 5.48 / 6.32 : 1**; focus blue on paper **6.42 : 1**. The
12.5 px chip is the smallest text on the page and its **lowest** ratio is still 5.48 — do not darken or lighten
the hues "for contrast".

**There is no gradient, no dark band and no brand colour on the chrome.** The three hues are *content*
categories, not the brand; the design is ink-on-paper until a category chip says otherwise. A recreation that
introduces a "brand blue" for links or tints the cards ships a different template.

### Type — Fraunces 600 on two elements, the system stack everywhere else

| element            | size / line-height                   | weight | tracking                 | colour    | family |
| ------------------ | ------------------------------------ | ------ | ------------------------ | --------- | ------ |
| `h1`               | `clamp(30px, 4vw, 44px)` / 1.1 (48.4 at 44) | 600 | **−0.02em** (`−0.88px` at 44) | `#111827` | **Fraunces**, Georgia, serif |
| "All articles →"   | `15px` / inherited                   | 600    | normal                   | `#111827` | system |
| chip label         | `12.5px` / inherited (→ 20)          | 600    | normal                   | chip hue  | system |
| card headline `h2` | `22px` / 1.25 (27.5)                 | 600    | **−0.01em** (`−0.22px`)  | `#111827` | **Fraunces**, Georgia, serif |
| excerpt            | `15px` / 1.6 (24)                    | 400    | normal                   | `#4b5563` | system |
| author             | `13.5px` / 1.35                      | 600    | normal                   | `#111827` | system |
| date               | `13.5px` / 1.35                      | 400    | normal                   | `#4b5563` | system |
| read time          | `13.5px` / 1.6 (29.6 pill)           | 500    | normal                   | `#374151` | system |
| avatar initials    | `13px`                               | 600    | normal                   | `#ffffff` | system |

System stack, verbatim: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` — on the `body`, inherited
by every non-heading element. Serif stack, verbatim: `"Fraunces", Georgia, serif`. Measured `h1` steps:
**30 px** from 320 to 750, `4vw` from 750 to 1,100 (**30.72** at 768, **36** at 900, **40.96** at 1,024),
**44 px** from 1,100 up. The card headline is a **fixed 22 px** at every width — it never clamps.

The card declares `font-size: 15px; line-height: 1.6`, which is why the chip's 12.5 px text measures a **30 px**
pill (5 + 5 + 20) and the read pill's 13.5 px text measures **29.6** (4 + 4 + 21.6).

### Radii, rules, shadow, motion

| token               | value                                                                              |
| ------------------- | ---------------------------------------------------------------------------------- |
| cover radius        | **14px on all four corners** (`overflow: hidden` on `__cover`; the `<img>` has no radius)  |
| card radius         | **none** — the card has no plate, no background, no border, no shadow               |
| chip radius         | **999px**                                                                           |
| read pill radius    | **999px**                                                                           |
| avatar              | `border-radius: 50%` (38 × 38)                                                      |
| link overlay radius | **14px** (`__link::after`, matching the cover, for the focus ring)                  |
| head rule           | `border-bottom: 2px solid #111827`, `padding-bottom: 18px`, `margin-bottom: 28px`    |
| meta rule           | `border-top: 1px solid #e7e5e0`, `margin-top: 18px`, `padding-top: 16px`             |
| chip shadow         | `0 2px 8px rgba(0,0,0,.15)`                                                         |
| photo transition    | `transform .6s cubic-bezier(.2, .7, .2, 1)`; card hover → `scale(1.06)`              |
| underline reveal    | `background: linear-gradient(currentColor, currentColor) 0 100% / 0 1.5px no-repeat`, `transition: background-size .35s ease`; card hover → `100% 1.5px` |
| card link focus     | `outline: 3px solid var(--cl-card03-chip); outline-offset: 6px` on `::after` (per-card hue) |
| "All articles" focus| `outline: 2px solid #1d4ed8; outline-offset: 4px; border-radius: 4px`                |
| "All articles" hover| `text-decoration: underline; text-underline-offset: 4px`                            |
| reduced motion      | `__img` and `__link` transitions `none`, hover transform `none` — **and nothing else** |

### Layout — one `auto-fit` grid, **no width media queries at all**

`.cl-card03-demo { max-width: 1180px; margin: 0 auto; padding: clamp(32px, 6vw, 72px) 16px; color: #111827; }`
and `.cl-card03-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
gap: clamp(20px, 3vw, 36px); }`. Everything responsive follows from `minmax(280px, 1fr)` plus two `clamp()`s —
the sheet's only `@media` block is `(prefers-reduced-motion: reduce)`. `max-width` is a **content box** here
(the `:where(html){all:revert}` guard leaves `box-sizing: content-box` on the container), so above **1,212 px**
of viewport the container stops growing: outer **1,212** / content **1,180**, starting at x **114** at 1440 with
the head and grid at x **130**.

| viewport | columns | card width | gap   | container pad (v / h) | `h1`   | card height | content height |
| -------: | ------: | ---------: | ----: | --------------------: | -----: | ----------: | -------------: |
|      320 |       1 |        288 | 20    |               32 / 16 |  30 px |       459.5 |        1,593.5 |
|      390 |       1 |        358 | 20    |               32 / 16 |  30 px |       451.8 |        1,540.3 |
|      520 |       1 |        488 | 20    |               32 / 16 |  30 px |       509   |        1,712   |
|      611 |       1 |      579   | 20    |            36.66 / 16 |  30 px |       565.9 |        1,892   |
|      612 |       2 |        280 | 20    |            36.72 / 16 |  30 px |       454.5 |        1,083   |
|      768 |       2 |      356.5 | 23.04 |            46.08 / 16 |  30.72 |       450.8 |        1,098.6 |
|      900 |       2 |      420.5 | 27    |               54 / 16 |  36 px |       490.8 |        1,204   |
|      927 |       2 |      433.6 | 27.81 |            55.62 / 16 |  37.08 |       499   |        1,226   |
|      928 |       3 |      280.1 | 27.84 |            55.68 / 16 |  37.12 |       454.6 |          654.8 |
|    1,024 |       3 |      310.2 | 30.72 |            61.44 / 16 |  40.96 |       473.4 |          689.3 |
|    1,180 |       3 |      359.1 | 35.4  |             70.8 / 16 |  44 px |       452.4 |          690.4 |
|    1,212 |       3 |      369.3 | 36    |               72 / 16 |  44 px |       458.8 |          699.2 |
|    1,440 |       3 |      369.3 | 36    |               72 / 16 |  44 px |       458.8 |          699.2 |
|    1,920 |       3 |      369.3 | 36    |               72 / 16 |  44 px |       458.8 |          699.2 |

Column thresholds, bisected one pixel at a time — **1 column ≤ 611, 2 columns 612–927, 3 columns ≥ 928, and
never 4**: `4 × 280 + 3 × 36 = 1,228` cannot fit the 1,180 px content box, so the maximum state is three
columns at every viewport including 1,920. The one-column drop is at **612** (`2 × 280 + 20 = 580 ≤ 612 − 32`)
and the second at **928** (`3 × 280 + 2 × 27.84 = 895.7 ≤ 896`).

Three consequences an implementer will otherwise get wrong:

- **The page is taller at 520 than at 390** (1,712 vs 1,540.3) and **tallest at 611** (1,892). Between 611 and
  612 the grid drops from one 579 px column to two 280 px ones and the page **shrinks by 809 px**. The
  `minmax()` minimum makes the layout *non-monotonic*; do not "fix" it with a breakpoint.
- **Heights also step *down* inside a column state** as the copy stops wrapping: one-column card height reads
  484.5 at 360 (headline 3 lines, excerpt 4), 451.8 at 390 (2 / 3), 509 at 520 (2 / 2) — the photograph grows
  faster than the text unwraps, so the trend reverses. Card height decomposes exactly as
  `cover (= card width × 0.625) + 18 + headline + 10 + excerpt + 18 + 55`.
- **The three cards wrap at different widths and still share one height.** In the three-column state card 3's
  headline drops to 2 lines at **1,056**, its excerpt to 3 lines at **1,080**, card 2's excerpt to 3 lines at
  **1,088** and card 1's headline to 2 lines at **1,152**. The grid stretches the row and `__body { flex: 1 }`
  absorbs the slack **below the excerpt**, so all three meta strips still sit on one line (measured at 1,100:
  cards 488.3 each, metas all at y 595.6, while card 3's excerpt starts 27.5 px higher).

### Component geometry (1440 px, then 390 px and 320 px)

| element          | 1440                                                          | 390                                    | 320                                     |
| ---------------- | ------------------------------------------------------------- | -------------------------------------- | --------------------------------------- |
| container        | x 114, **1,212** outer / 1,180 content, padding 72 / 16        | 0 → **390**, padding 32 / 16           | 0 → **320**, padding 32 / 16            |
| head             | y 72, **68.4** tall, rule 2 px `#111827`, `space-between`, `align-items: baseline` | y 32, **53** tall, one row | y 32, **83** tall — the link wraps to its own row |
| `h1`             | **340.9 × 48.4** at (130, 72), 44 px on one line               | 235.4 × 33 at (16, 32)                 | 235.4 × 33 at (16, 32)                  |
| "All articles →" | **107.9 × 18** at (1,202.1, 98) — right edge 1,310 = container right | 107.9 × 18 at (266.1, 45)      | 107.9 × 18 at (**16**, **77**)          |
| grid             | y 168.4, 1,180 × **458.8**, gap **36**, 3 × 369.3              | y 113, 358 × 1,395.3, gap 20, 1 column | y 143, 288 × 1,418.5, gap 20            |
| card             | **369.3 × 458.8**, no plate, transparent                       | **358 × 451.8**                        | **288 × 459.5**                         |
| cover            | **369.3 × 230.8** (16 : 10), radius **14**, ground `#e5e7eb`    | 358 × 223.8                            | 288 × 180                               |
| chip             | **108 / 115.7 / 144.1 × 30** at cover + 14 / 14, padding 5 / 11 | +14 / +14 from the cover               | same insets                             |
| body             | y 399.2, **155** tall, padding `18px 2px 0`                    | 155 (2-line headline, 3-line excerpt)  | 206.5 (3-line headline, 4-line excerpt) |
| headline         | y 417.2, **55** tall (2 × 27.5), 365.3 wide                    | y 354.8, 55                            | y 341, 82.5 (3 lines)                   |
| excerpt          | y 482.2, **72** tall (3 × 24)                                  | y 419.8, 72                            | y 433.5, 96                             |
| meta             | y 572.2, **55** tall (`margin-top 18` + rule + `padding-top 16`) | y 509.8                              | y 547.5                                 |
| avatar           | **38 × 38** at (130, 589.2)                                    | (16, 526.8)                            | (16, 564.5)                             |
| read pill        | **114 × 29.6** at (385.3, 593.4) — right edge flush at 499.3    | (260, 531)                             | (190, 568.7)                            |
| clock glyph      | **15 × 15** at (395.3, 600.7) — 10 px from the pill's left      | same offsets                           | same offsets                            |

Card height decomposes exactly as `cover + 18 + headline + 10 + excerpt + 18 + 55`; at 1440 that is
`230.8 + 18 + 55 + 10 + 72 + 18 + 55 = 458.8`. There is **no stretch slack at 1440** — the card *is* its
natural height — and slack appears only where one card's copy is shorter than the row's tallest.

## Requirements

### Requirement 1: Page shell and the single row band

The app SHALL render one full-width band on `#fbfaf7` holding a flex head (`h1` left, "All articles →" right,
over a 2 px ink rule) and a three-card grid inside a 1,180 px container, with **no other content bands**.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the page is measured
- **THEN** `<body>` background is `#fbfaf7`, the band is **699.2 px** tall (document 900, no scrolling), and
  the container is **1,212 px** outer / **1,180 px** content at x **114** with padding **72 px** vertical and
  **16 px** horizontal
- **AND** the band carries no background image, no gradient, no border and no shadow

#### Scenario: Head line

- **GIVEN** the header block
- **THEN** it is `display: flex; flex-wrap: wrap; align-items: baseline; justify-content: space-between;
  gap: 12px`, `padding-bottom: 18px`, `margin-bottom: 28px`, `border-bottom: 2px solid #111827`, and **68.4 px**
  tall at 1440
- **AND** the `h1` reads **"From the journal"** at **44 px** / 48.4 / 600 / `−0.88px` / Fraunces, measuring
  **340.9 × 48.4** at x 130
- **AND** the right-hand link reads **"All articles →"** (`→` = `&rarr;` inside an `aria-hidden` span) at
  **15 px** / 600 / `#111827`, 107.9 px wide, with its **right edge flush with the container's right edge
  (1,310)** and its baseline shared with the `h1` (so its box sits at y **98** while the `h1` starts at y 72)

#### Scenario: The head collapses to two rows

- **GIVEN** a viewport narrower than 388 px
- **THEN** the link wraps onto its own row at x **16** and y **77**, and the head measures **83 px** tall
- **AND** at **388 px and wider** the head is a single 53–68.4 px row — the threshold is bisected, **387 wraps,
  388 does not** (235.4 + 12 + 107.9 = 355.3 must fit in `vw − 32`)

#### Scenario: No invented bands

- **GIVEN** the rendered app
- **THEN** it contains exactly one section: the journal row
- **AND** it contains no navigation bar, hero, category filter, pagination, newsletter, FAQ, article-detail
  route or multi-column footer — the reference has none, and adding them is not a fidelity improvement
- **AND** the page footer is a single line of small print (Requirement 10), not a plate

### Requirement 2: The journal grid — three cards, `auto-fit`, three columns maximum

The app SHALL render the three articles in a CSS grid of `repeat(auto-fit, minmax(280px, 1fr))` with a
`clamp(20px, 3vw, 36px)` gap inside the 1,180 px container, producing 1 / 2 / 3 columns at the measured widths
**without any width media query**.

#### Scenario: Column counts and thresholds

- **GIVEN** the viewports 320, 390, 520, 611, 612, 768, 900, 927, 928, 1,024, 1,180 and 1,440
- **THEN** the grid resolves to **1 / 1 / 1 / 1 / 2 / 2 / 2 / 2 / 3 / 3 / 3 / 3** columns respectively
- **AND** the card widths are **288 / 358 / 488 / 579 / 280 / 356.5 / 420.5 / 433.6 / 280.1 / 310.2 / 359.1 /
  369.3** px
- **AND** the one-column state persists to **611 px**, two columns begin at exactly **612**, three at exactly
  **928**, and **four columns never occur** at any viewport (`4 × 280 + 3 × 36 = 1,228 > 1,180`)

#### Scenario: Gap follows the viewport

- **GIVEN** the grid's `gap: clamp(20px, 3vw, 36px)`
- **THEN** the measured column gap is **20** at 611, **23.04** at 768, **27.84** at 928, **30.72** at 1,024,
  **35.4** at 1,180 and **36** at 1,212 and above
- **AND** `auto-fit` is what the sheet says; with exactly three items in at most three columns there is no empty
  track to collapse, so `auto-fit` and `auto-fill` behave identically here

#### Scenario: The three articles, in order

- **GIVEN** a 1440 px viewport
- **THEN** the grid holds exactly **3** `<article>` elements in this order: **Productivity** / "The two-hour
  morning: how we plan deep work around meetings" / Hana Novak / 18 Sep 2026 / 6 min read; **Development** /
  "Container queries in production: what changed after six months" / Jonas Pereira / 11 Sep 2026 / 9 min read;
  **Life outside work** / "What a balcony garden taught me about shipping small" / Elif Kaya / 2 Sep 2026 /
  4 min read
- **AND** all three cards are **458.8** px tall, their meta rules share y **572.2** and their read pills share
  x-offset **385.3** within their own card

### Requirement 3: Card anatomy — cover, chip, body, meta, and no plate

Each card SHALL render as a **transparent** `<article>` — no background, no border, no radius, no shadow, no
padding — holding (1) a 16 : 10 cover with a 14 px radius and a chip pinned inside, (2) a body inset **2 px**
horizontally with the headline and excerpt, and (3) a footer meta strip with a 1 px top rule, flush at 0.

#### Scenario: No plate

- **GIVEN** any card
- **THEN** its computed `background-color` is `transparent`, `border-width` 0, `border-radius` 0 and
  `box-shadow: none`
- **AND** it is `display: flex; flex-direction: column`, `position: relative`, `color: #111827`,
  `font-size: 15px`, `line-height: 1.6`
- **AND** every descendant uses `box-sizing: border-box` (the card sets it for `*`, `*::before`, `*::after`)

#### Scenario: Cover and photograph

- **GIVEN** a card's cover
- **THEN** it is **369.3 × 230.8** at 1440 (`aspect-ratio: 16 / 10`), radius **14 px on all four corners**,
  `overflow: hidden`, ground `#e5e7eb`
- **AND** the `<img>` fills it (`width/height: 100%`, `object-fit: cover`), carries a descriptive `alt`, and
  scales to **1.06** over `.6s cubic-bezier(.2,.7,.2,1)` when the **card** is hovered
- **AND** the photograph has **no radius of its own** — the cover's clip is the only rounding

#### Scenario: Body inset of 2 px

- **GIVEN** a card's body
- **THEN** it is `flex: 1`, `padding: 18px 2px 0`, so the headline and excerpt start at **x 132** while the
  cover, the chip's origin and the meta strip start at **x 130**
- **AND** the meta strip is **not** inside the body: its 1 px rule spans the full **369.3** px card width

#### Scenario: Meta strip geometry

- **GIVEN** a card's footer
- **THEN** it is `display: flex; align-items: center; gap: 12px`, `margin-top: 18px`, `padding-top: 16px`,
  `border-top: 1px solid #e7e5e0`, font-size **13.5 px**, **55 px** tall at 1440
- **AND** its three parts are the **38 × 38** initials disc, the `flex: 1` author/date block, and the
  **114 × 29.6** read pill whose right edge is flush with the card's right edge

### Requirement 4: The whole-card link and the underline reveal

The app SHALL make **each entire card** the click target of its headline link (an `::after` overlay at
`inset: 0`, radius 14), SHALL draw the only link affordance as a 1.5 px `currentColor` gradient underline that
expands on **card** hover, and SHALL paint the focus ring in **that card's** hue.

#### Scenario: Overlay makes the card clickable

- **GIVEN** a card
- **THEN** `elementFromPoint` at the card's top-left corner resolves to the headline `<a>`, not the cover
- **AND** the overlay is `position: absolute; inset: 0; z-index: 1; border-radius: 14px` and the card is
  `position: relative`
- **AND** the headline lives inside an `<h2>` and is the card's **only** anchor

#### Scenario: Underline reveal

- **GIVEN** the pointer is **not** over the card
- **THEN** the headline's `background-size` is **`0px 1.5px`** (the underline is invisible)
- **WHEN** the pointer enters anywhere on the card
- **THEN** `background-size` becomes **`100% 1.5px`** over `.35s ease`, drawn with
  `linear-gradient(currentColor, currentColor) 0 100% / … no-repeat`, i.e. `#111827` under ink text
- **AND** the trigger is `.card:hover`, never `.link:hover` — hovering the photograph reveals the headline's
  underline

#### Scenario: Focus

- **GIVEN** keyboard navigation with no pointer input
- **WHEN** `Tab` reaches a card's link
- **THEN** the ring is drawn on the `::after` overlay: `outline: 3px solid <that card's chip hue>`,
  `outline-offset: 6px`, radius 14 — **blue** on card 1, **green** on card 2, **magenta** on card 3
- **AND** the `::after` carries `outline: none`-suppressing rules only when unfocused, so no second ring appears
  on the text

#### Scenario: No dead anchors

- **GIVEN** every `<a href>` in the rendered app
- **THEN** **none** is exactly `#` — the reference's four dead anchors are a defect, not a design
- **AND** each headline resolves to a real in-page fragment on its own card (`#post-<n>`) and "All articles →"
  resolves to the row's own section anchor (`#journal`); no article route, no external destination and no
  invented URL is added
- **AND** a test walks every anchor and asserts the `href` is non-empty and not `#`

### Requirement 5: The chip hue system

The app SHALL render each card's category chip as a **white pill with coloured text**, and SHALL reuse that same
hue for the card's avatar disc and its focus ring, driven by one per-card value.

#### Scenario: Chip geometry and skin

- **GIVEN** any chip
- **THEN** it is absolutely positioned **top 14 / left 14** inside the cover, `padding: 5px 11px`, radius
  **999**, ground `#ffffff`, `font-size: 12.5px`, `font-weight: 600`, `box-shadow: 0 2px 8px rgba(0,0,0,.15)`,
  measuring **30 px tall** and **108 / 115.7 / 144.1** wide for `Productivity` / `Development` / `Life outside
  work`
- **AND** its text colour is the card's hue: **`#1d4ed8`** for `Productivity`, **`#047857`** for `Development`,
  **`#a21caf`** for `Life outside work`
- **AND** the chip never truncates and never wraps — the longest label ("Life outside work") measures 144.1 px
  inside a 280 px minimum card

#### Scenario: One hue drives three surfaces

- **GIVEN** a card carrying `--chip: <hue>`
- **THEN** the chip's text, the 38 px avatar's background and the link's `:focus-visible` ring all use that
  hue, while the avatar's initials stay `#ffffff`
- **AND** no fourth hue exists anywhere on the page, and the palette is not read from a global brand token

### Requirement 6: The meta strip — avatar, byline, read time

The app SHALL render, in order, a 38 px initials disc (`aria-hidden`), a two-line author/date block, and a
read-time pill with a 15 px clock glyph, with the middle block taking `flex: 1`.

#### Scenario: Avatar and byline

- **GIVEN** any meta strip
- **THEN** the avatar is **38 × 38**, `border-radius: 50%`, ground = the card's hue, `display: grid;
  place-items: center`, initials `13px` / 600 / `#ffffff` (**HN**, **JP**, **EK**), `flex: none`, and
  `aria-hidden="true"`
- **AND** the author renders at **13.5 px / 600 / `#111827`** ("Hana Novak", "Jonas Pereira", "Elif Kaya") and
  the date directly beneath it at **13.5 px / 400 / `#4b5563`** ("18 Sep 2026", "11 Sep 2026", "2 Sep 2026"),
  inside a `flex: 1` column with `line-height: 1.35` (36.4 px tall)

#### Scenario: Read-time pill

- **GIVEN** any meta strip
- **THEN** the read pill is **114 × 29.6**, `inline-flex`, `gap: 6px`, `padding: 4px 10px`, radius **999**,
  ground `#f1efe9`, text `#374151` at **13.5 px / 500**, `white-space: nowrap`
- **AND** it holds a **15 × 15** clock glyph (`fill: none; stroke: currentColor; stroke-width: 2;
  stroke-linecap: round`, `viewBox="0 0 24 24"`, `aria-hidden`) followed by "6 min read" / "9 min read" /
  "4 min read"
- **AND** its right edge is flush with the card's right edge, achieved by the byline's `flex: 1` — not by a
  margin

#### Scenario: Dates are machine-readable

- **GIVEN** any date
- **THEN** it is wrapped in `<time datetime="2026-09-18">` (and `2026-09-11`, `2026-09-02`) with the visible
  text "18 Sep 2026" / "11 Sep 2026" / "2 Sep 2026"
- **AND** the day is never zero-padded in the visible text and the month is the three-letter English
  abbreviation

### Requirement 7: Motion, hover and reduced motion

The app SHALL reproduce the reference's two motion cues (photograph zoom and underline reveal, both triggered by
card hover) with the reference's durations and curves, and SHALL disable both under
`prefers-reduced-motion: reduce`.

#### Scenario: Hover at 1440

- **GIVEN** the pointer over a card
- **THEN** the photograph renders `matrix(1.06, 0, 0, 1.06, 0, 0)` with
  `transition: transform .6s cubic-bezier(.2,.7,.2,1)`
- **AND** the headline's underline expands from `0px 1.5px` to `100% 1.5px` with `transition: background-size
  .35s`
- **AND** **nothing else moves**: the card does not translate, the cover does not change radius or shadow, the
  chip does not scale, and no element fades — there is no `translateY`, no `opacity` transition and no
  `@keyframes` in this sheet

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** the photograph and link both compute `transition: none` and hovering produces **no** photo transform
  (`transform: none`)
- **AND** the sheet's single `@media` block covers exactly those two selectors — reproduce that scope, do not
  add a broader animation kill switch

### Requirement 8: Responsive integrity

The app SHALL hold its layout at every width from 320 to 1,920 without horizontal scrolling, and SHALL accept
the reference's non-monotonic height and wrapping profile rather than adding breakpoints to flatten it.

#### Scenario: No horizontal scroll

- **GIVEN** the widths 320, 360, 390, 520, 600, 611, 612, 700, 768, 900, 927, 928, 1,024, 1,180, 1,200, 1,212,
  1,440 and 1,920
- **THEN** `document.documentElement.scrollWidth === clientWidth` and `window.scrollTo(200,0) → scrollX === 0`
  at every one (the reference passes at all probed widths, including 300 and 312)
- **AND** the column counts match Requirement 2 at each width

#### Scenario: Document heights are not monotonic

- **GIVEN** the measured content heights **1,593.5** (320), **1,540.3** (390), **1,712** (520), **1,892** (611),
  **1,083** (612), **1,098.6** (768), **1,204** (900), **1,226** (927), **654.8** (928), **689.3** (1,024),
  **699.2** (1,212+)
- **THEN** the app reproduces the same profile, including the **809 px drop** at 612 and the **taller one-column
  state at 520 than at 390**
- **AND** no width media query is added to "smooth" it

#### Scenario: Text wraps like the reference, and cards stay level

- **GIVEN** a 320 px viewport
- **THEN** all three headlines render on **three** lines (82.5 px) and all three excerpts on **four** (96 px),
  and the head has already wrapped to **83 px**
- **AND** at **1,100 px** card 3's headline is on two lines while cards 1 and 2 are on three, all three cards are
  **488.3** tall, and every meta strip is at y **595.6** — the slack from the shorter headline sits **between
  card 3's excerpt and its rule**
- **AND** no `truncate`, `line-clamp` or `nowrap` is added to force equal line counts, and the height does not
  change when only one card's copy re-wraps

### Requirement 9: Semantics and accessibility

The app SHALL use the reference's landmark, article and heading semantics, SHALL name every photograph, and
SHALL keep decorative glyphs out of the accessibility tree.

#### Scenario: Document structure

- **GIVEN** the rendered app
- **THEN** there is exactly one `<h1>` ("From the journal"), one `<h2>` per card headline, one `<main>`
  landmark holding a `<header>` and the grid, and three `<article>` elements
- **AND** each card's meta strip is a `<footer>` **inside** its `<article>`, and there is no `<nav>`
- **AND** the page footer holds the single Component Dock link (Requirement 10)

#### Scenario: Images and glyphs are named or hidden

- **GIVEN** any photograph
- **THEN** it carries a descriptive `alt` naming the scene — "Laptop, notebook and coffee cup on a wooden desk",
  "Laptop showing code next to a small plant", "Garden trowel and fresh soil on a dark surface" — never "image",
  the file name, or the article title
- **AND** the three clock glyphs, the avatar discs and the `→` in "All articles →" are `aria-hidden="true"`, so
  the avatar's initials are never read out as a name

#### Scenario: Heading order and link names

- **GIVEN** the rendered app
- **THEN** the heading outline is `h1` → `h2` → `h2` → `h2` with no skipped level and no `h3`
- **AND** each card link's accessible name is its headline text, and the head link's is "All articles"

#### Scenario: Focus is visible on every interactive element

- **GIVEN** keyboard-only navigation
- **THEN** `Tab` walks **all four** links in DOM order ("All articles →", then the three headlines) plus the
  Component Dock footer link, and every one shows a visible ring
- **AND** the card rings are per-card coloured, the head link's is `2px solid #1d4ed8` at offset 4, and no
  element loses its outline without a replacement

### Requirement 10: Attribution, naming and provenance

The app SHALL ship as `apps/octavo` / `@free-react-templates/octavo` /
`octavo.free.componentdock.com`, SHALL link Component Dock in its footer, and SHALL contain no ColorLib
reference anywhere.

#### Scenario: Identity

- **GIVEN** the built app
- **THEN** `package.json` name is `@free-react-templates/octavo`, `homepage` is
  `https://octavo.free.componentdock.com`, and `public/CNAME` contains exactly that host
- **AND** `document.title` and the meta description are written for the recreation, never the source title

#### Scenario: Footer attribution

- **GIVEN** the shipped footer
- **THEN** it contains a link to **https://www.componentdock.com/** labelled "Component Dock"
- **AND** it is the only chrome added to the band: one line of small print on the `#fbfaf7` ground, not a
  multi-column footer plate

#### Scenario: Clean provenance

- **GIVEN** every non-test file under `apps/octavo/`
- **THEN** none contains "ColorLib"/"Colorlib", a `colorlib.com` URL, `card-03` or a credit line naming the source
- **AND** the article titles, names, dates and read times stay as sample data with no source branding

### Requirement 11: Copy fidelity

The app SHALL carry the reference's copy: the `h1`, the head link, and for each card the category, headline,
excerpt, initials, author, date and read time — word for word.

#### Scenario: The head and the three articles

- **GIVEN** the grid at 1440
- **THEN** the `h1` is **"From the journal"** and the link is **"All articles →"**
- **AND** card 1 is chip **"Productivity"**, headline **"The two-hour morning: how we plan deep work around
  meetings"**, excerpt **"A simple calendar rule gave our team back ten focused hours a week. Here is the
  template we use and what we had to give up."**, avatar **"HN"**, author **"Hana Novak"**, date
  **"18 Sep 2026"**, read time **"6 min read"**
- **AND** card 2 is **"Development"** / **"Container queries in production: what changed after six months"** /
  **"We rebuilt our card components to respond to their slot instead of the viewport. Fewer breakpoints, fewer
  bugs, one surprise."** / **"JP"** / **"Jonas Pereira"** / **"11 Sep 2026"** / **"9 min read"**
- **AND** card 3 is **"Life outside work"** / **"What a balcony garden taught me about shipping small"** /
  **"Tomatoes do not care about your roadmap. Notes from a season of planting, failing and trying again every
  weekend."** / **"EK"** / **"Elif Kaya"** / **"2 Sep 2026"** / **"4 min read"**

#### Scenario: Typographic details survive

- **GIVEN** the rendered copy
- **THEN** headline 1 keeps its colon and its lower-case "how", the chip keeps sentence case ("Life outside
  work", not "Life Outside Work"), and the read times keep the space before "min" and no period
- **AND** the dates keep the un-padded day ("2 Sep 2026", never "02 Sep 2026") and the three-letter month
- **AND** the arrow in the head link is a real `→` character (U+2192), not `->` and not an icon font glyph

## Screenshot analysis (catalogue image, `card-03.jpg`)

The listing image is **a framed capture, not a bare screenshot**: a **1200 × 972** JPEG (a real progressive
JPEG this time — `file` says `JPEG image data, progressive, precision 8, 1200x972`, unlike the AVIF-behind-`.jpg`
siblings) showing a macOS window — three traffic-light dots and a URL bar reading `preview.colorlib.com` — on a
**white sheet with a soft drop shadow over a very light grey page**. Inside the window the real page renders at
roughly **1,120 px** wide in its **three-column** state, with the same head rule, the same three chips in blue /
green / magenta, the same serif headlines and the same grey read-time pills.

Two consequences for the recreation: the image confirms the **three-column 928–1,212 px state** is the intended
composition (as at 1,440, where the container has already stopped growing), and **the window frame, traffic
lights, URL bar, white sheet and drop shadow are catalogue furniture — none of it belongs in the app**. The
app's own ground is `#fbfaf7`, full-bleed.

The screenshot also shows the one thing a static reading of the CSS hides: **at this width the three covers read
as one row of rounded rectangles with three differently coloured chips**, and the meta strips line up perfectly
across the row even though the headlines differ in length — which is exactly the `flex: 1` body behaviour
described in Requirement 8. Keep that alignment.

## Known reference defects (do not copy)

1. **All four anchors are `href="#"`.** "All articles →" and all three headlines go nowhere, so the whole-card
   overlay is a large dead click target. The recreation keeps the anchors (the design's focus ring and underline
   depend on them) but points them at real in-page fragments (Requirement 4) and tests that none is `#`.
2. **The `README.md` inside the archive documents a script that does not exist.** It lists
   `js/snippet.js — the behaviour, in plain JavaScript`; there is **no `js/` directory**, no `<script>` element
   and no behaviour at all. Do not port a script, do not add a toggle, and do not "restore" the missing JS.
   (`card-01` ships the same lie; `card-02` really does have 1,628 B — do not generalise from either.)
3. **Weight 500 of Fraunces is declared and never used.** Four `@font-face` blocks ship, but every serif rule is
   `font-weight: 600` and the body is the system stack. Load 600 only (add 500 only if a new element needs it) —
   do not reproduce four blocks over two files.
4. **The four `@font-face` blocks are two files.** `fraunces-500-latin.woff2` and `fraunces-600-latin.woff2`
   hash **identically** (`48282a415ec2…`, 67,388 B), as do the two `latin-ext` files (`f120089b9440…`,
   59,540 B) — one variable face copied twice per subset. A Google Fonts `<link>` replaces all of it.
5. **One dead selector.** `.cl-icon` (`height: 1em; width: auto; fill: currentColor`) is defined in the sheet and
   used by **nothing** in the markup — a family leftover, like `card-02`'s. Do not port it; the three clock
   glyphs are inline SVG with no class.
6. **The third photograph is `loading="lazy"`.** A full-page capture without scrolling can show it as an empty
   `#e5e7eb` panel — a capture artefact, **not** a design state. Keep `#e5e7eb` behind every cover so a slow
   image is never a white hole, but never reproduce the blank panel.
7. **The bookkeeping is copy-pasted between cards.** `--cl-card03-chip` and `--cl-card03-hue` carry the *same*
   hex on every card, once on the `<article>` and once again on the avatar `<span>`. Collapse them into one
   per-card value in React; a second source of truth for the hue will drift.
8. **The reset guard is 60 lines of `all: revert`.** `:where(html) :is(html, body, div, …) { all: revert; }` plus
   per-element repairs exists so the snippet renders inside Bootstrap unchanged. Tailwind's preflight does the
   same job in the recreation — do **not** port the guard, the `[hidden]` repair or the `table`/`hr`/`caption`
   revivals.
9. **The 2 px body inset versus the flush meta strip** looks like a bug and is not. At the left edge of a column
   the headline is 2 px right of the photograph while the meta rule and avatar are flush. Do not "align" them.

## Verification checklist

- [ ] `apps/octavo` exists, `@free-react-templates/octavo` in `package.json`, `public/CNAME` =
      `octavo.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string, no `card-03`, in any app file
      (comments included)
- [ ] one band only: `h1` + "All articles →" over a 2 px rule, then a 3-card grid; no nav, hero, filter,
      pagination or article route invented
- [ ] ground `#fbfaf7`; container max **1180 px** content + **16 px** padding, vertical padding
      `clamp(32px, 6vw, 72px)` (→ 72 at 1440, outer 1,212 at x 114); content height **699.2** at 1440
- [ ] head `space-between` / `baseline` / `gap 12`, `padding-bottom 18`, `margin-bottom 28`, rule
      `2px solid #111827`, **68.4** tall; `h1` **44 px**/48.4/600/`−0.88px` Fraunces; link 15/600 `#111827`
      with its right edge flush at 1,310 and its box at y 98
- [ ] head wraps to two rows **below 388 px** (83 px tall, link at x 16 / y 77) and is one row at 388+
- [ ] grid `repeat(auto-fit, minmax(280px, 1fr))`, gap `clamp(20px, 3vw, 36px)`; columns **1 ≤ 611 ·
      2 = 612–927 · 3 ≥ 928 · never 4**; widths **288 / 358 / 488 / 579 / 280 / 356.5 / 420.5 / 433.6 / 280.1 /
      310.2 / 359.1 / 369.3** at 320 / 390 / 520 / 611 / 612 / 768 / 900 / 927 / 928 / 1,024 / 1,180 / 1,440
- [ ] card **369.3 × 458.8** at 1440: **no** background, border, radius or shadow; `flex` column;
      15 px / 1.6; `box-sizing: border-box` on all descendants
- [ ] cover **369.3 × 230.8** (`aspect-ratio: 16 / 10`), radius **14 on all four corners**, ground `#e5e7eb`,
      `object-fit: cover`, card-hover `scale(1.06)` over `.6s cubic-bezier(.2,.7,.2,1)`, real `alt` per photo
- [ ] chip **30 tall**, **108 / 115.7 / 144.1** wide by label, pinned **top 14 / left 14**, padding
      `5px 11px`, radius **999**, white ground, coloured
      text, shadow `0 2px 8px rgba(0,0,0,.15)`, 12.5/600 — blue `#1d4ed8` / green `#047857` / magenta `#a21caf`
- [ ] one hue per card drives the chip text, the **38 × 38** avatar ground and the link focus ring; avatar
      initials 13/600 white and `aria-hidden`
- [ ] body `flex: 1`, `padding: 18px 2px 0` → headline and excerpt at card x **+2**, meta strip and cover at
      **+0**
- [ ] headline Fraunces **22 px**/27.5/600/`−0.22px`, `margin: 0 0 10px`; excerpt 15/1.6 `#4b5563` unclamped;
      2 lines / 72 px at 1440, 3 lines / 82.5 px headline at 320 and 1,024
- [ ] meta `margin-top 18`, `padding-top 16`, `border-top 1px #e7e5e0`, gap 12, font 13.5, **55** tall; author
      13.5/600 `#111827`; date 13.5/400 `#4b5563` inside `<time datetime>`; read pill **114 × 29.6**, radius
      999, `#f1efe9` / `#374151` 13.5/500, `gap 6`, `padding 4px 10px`, **15 × 15** clock at 10 px from its
      left edge, right edge flush with the card
- [ ] whole-card link: `::after` `inset: 0`, radius **14**, `z-index: 1`; underline `0 1.5px → 100% 1.5px`
      over `.35s` on **card** hover (verified: `0px 1.5px` → `100% 1.5px`); `elementFromPoint` at the card's
      top-left resolves to the link
- [ ] focus rings: card links `3px` in their **own** hue at `offset 6`; head link `2px solid #1d4ed8` at
      `offset 4`, radius 4, hover `underline` / `underline-offset 4px`
- [ ] **zero bare `#` anchors**; headlines resolve to `#post-<n>` and the head link to `#journal`; a test walks
      every `a[href]`
- [ ] `prefers-reduced-motion: reduce` → photo and link `transition: none`, hover `transform: none`, and
      nothing else is disabled
- [ ] no hover lift, no opacity fade, no `@keyframes`, no shadow on the card — the sheet has none
- [ ] `scrollWidth === clientWidth` and `scrollX === 0` after `scrollTo(200,0)` at **320 / 360 / 390 / 520 /
      600 / 611 / 612 / 700 / 768 / 900 / 927 / 928 / 1,024 / 1,180 / 1,200 / 1,212 / 1,440 / 1,920**; content
      heights **1,593.5 / 1,540.3 / 1,712 / 1,892 / 1,083 / 1,098.6 / 1,204 / 1,226 / 654.8 / 689.3 / 699.2**
- [ ] one `h1`, three `h2`, three `<article>`, `<main>` + `<header>` + card `<footer>` landmarks, no `h3`
- [ ] Fraunces **600** (only) via one Google Fonts `<link>` (`display=swap`); body uses the verbatim system
      stack; **no** four-block `@font-face` duplication, **no** `.cl-icon`, **no** reset guard, **no** script
- [ ] 100% coverage on the new app, `scripts/verify-app.sh octavo` green
