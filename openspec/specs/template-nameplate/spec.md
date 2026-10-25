# Template: Nameplate (Team profile cards — a studio roster in four portrait cards)

## Purpose

A **four-card team roster whose whole design is one gesture: a portrait photograph with a corner tag, a
name over a rust-red role line, and a footer of three round icon discs opposite a "Since YYYY" stamp**.
ColorLib's own listing states the brief in one line:

> "Profile cards for an about or team page. Free download, no jQuery or plugins."

There is no hero, no navigation, no form and **no JavaScript**: the page is a single 1,200 px band on a warm
sand ground (`#f6f3ee`), a centred eyebrow + headline ("The studio" / "People behind Northfield Design"),
and a grid of four 282 px cards. Every card is the same anatomy in the same order — media, tag, body,
footer — and the only chromatic decision in the whole design is **which element carries the burnt orange**:
the role line, the icon hover fill, and the focus ring. Everything else is a warm neutral: `#1c1917` ink,
`#57534e` muted body, `#ece7df` hairlines.

The personality lives in four small, copyable details, and a recreation that loses any of them stops being
this template:

1. **The media is a 5 : 5.4 portrait window** (`aspect-ratio: 5 / 5.4`, radius **16** inside a **22** card),
   with `object-position: center 25%` — the crop favours faces, not the frame's centre.
2. **The tag floats inside the photo**, bottom-left, 12 px from both edges, on `rgba(255,255,255,.92)` at full
   pill radius, with its own shadow — it reads as a label *on* the photograph, never as a chip under it.
3. **A dashed hairline separates the footer** (`border-top: 1px dashed #ece7df`) — solid would read as a table
   rule; dashed reads as a tear-line, and it is the only dashed stroke on the page.
4. **The type tracking pair**: every heading is *tight* (`−0.02em` on the `h1`, `−0.01em` on a card name) while
   the eyebrow and the tag are *loose* (`+0.12em` uppercase, `+0.02em`). Losing that pair makes a pixel-correct
   palette look like a different template.

Composition at 1440 × 900 (measured with `getBoundingClientRect`, Playwright 1.62):

| # | band                        | ground     |   top | height |
| - | --------------------------- | ---------- | ----: | -----: |
| 0 | page (`body`)               | `#f6f3ee`  |     0 | 786.1  |
| 1 | `.cl-card01-demo` container | —          |     0 | 786.1  |
| 2 | `__head` (eyebrow + `h1`)   | —          |    72 |  67.2  |
| 3 | `__grid` (4 × 282 cards)    | —          | 171.2 | 542.9  |

The whole design fits **one 900 px viewport** at 1440 (document height 786 px) and stacks to **2,624 px at
390** and **2,387 px at 320**. It is a *section*, not a site — the recreation therefore ships a single-page
app whose one band is this roster, plus the minimum chrome the repo requires (title/meta, a `main`
landmark, a footer carrying the Component Dock link). Do not invent a nav, a hero, a testimonial band or a
pricing table to "fill the page": the reference has four cards and a headline, and that is the template.

Recreation of the ColorLib "Card V01" design (`card-01`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application.

- **Source slug:** `card-01`
- **ColorLib page:** https://colorlib.com/wp/template/card-01/ — **HTTP 200, 112,659 B**, `<title>`
  `Card V01 - Free Bootstrap Cards 2026 - Colorlib`, `h1` **"Card V01"**, `<meta name="description">`
  *"Profile cards for an about or team page. Free download, no jQuery or plugins."*, download size listed as
  **409 KB** (the archive is 418,462 B). Featured image `card-01.jpg` (**45,608 B**, served `image/avif`
  despite the `.jpg` name, **1200 × 972** — see §Screenshot analysis).
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/card-01/ — **HTTP 200, 7,149 B**,
  `text/html; charset=utf-8`, read 2026-10-25 with `curl -4`. `<title>` **"Card V01 | Colorlib"**, `lang="en"`,
  `meta robots noindex, nofollow`, **no JSON-LD, no `<link>` to fonts, no analytics in the document** (the gtag
  and Cloudflare Zaraz scripts in the rendered DOM are injected by the preview host, not authored).
  ⚠️ **The slug-only path 404s** (`theme/card-01/` → **404, 9 B**) and so does `theme/bb/card-01/`; this
  family lives under **`theme/bootstrap/<slug>/`**. Do not record "unreachable" off the slug path.
- **Stylesheet:** one file, `css/style.css?v=9ac0ac78` — **9,249 B**, sha256
  `9b58f1397a874412606301630759acb635e18317cf0e621459c155c6c3a0f0cb`. **The copy inside
  `downloads/free/card-01.zip` hashes identically** (`9b58f139…`, 9,249 B), so the live preview is verified
  and **the archive is its un-versioned twin**; the live HTML differs from the zip's copy only by the host's
  injections (two `robots` metas, a `cdnjs` `dns-prefetch`, the `?v=` cache-buster with `fetchpriority="high"`,
  and the per-image `fetchpriority`/`decoding`/`loading` hints — the first two photos eager + `sync`, the last
  two `loading="lazy"` + `async`). Body markup is otherwise line-for-line the same.
- **JavaScript: none.** `js/snippet.js` → **404**, and the archive contains **no `js/` directory at all** —
  the README inside the zip still lists `js/snippet.js` ("the behaviour, in plain JavaScript"), which is a
  documentation defect in the archive, not a missing request. Every behaviour on this page is CSS:
  `:hover` transforms, `:focus-visible` outline, and a `prefers-reduced-motion` block. **The recreation must
  not add a carousel, a filter or a "load more" to justify a script.**
- **Fonts:** **Plus Jakarta Sans**, self-hosted — eight `@font-face` blocks (400 / 500 / 600 / 700 × `latin`,
  `latin-ext`) pointing at `../fonts/plus-jakarta-sans-<weight>-<subset>.woff2`, `font-display: swap`. **Only
  two distinct files exist**: `…-latin.woff2` is **27,272 B** and `…-latin-ext.woff2` is **21,688 B**, and all
  four weights hash **identically** per subset (`cd8db90c…` latin, `0303e02b…` latin-ext) — i.e. one variable
  face copied four times under four names. The response headers carry `link: rel=preconnect` to
  `fonts.googleapis.com` that the document never uses (host chrome). The recreation loads Plus Jakarta Sans
  400/500/600/700 from Google Fonts explicitly.
- **Single-page?** Yes — and yes *verified*: `index.html` **200** (byte-identical to the directory URL, a
  no-op link), `about.html` **404**, `contact.html` **404**. There is no inner-page inventory to mine for
  sections; this design is complete at one screen.
- **Recreation name:** `nameplate` — one lowercase word, card-and-identity adjacent and *not* the source name,
  no collision with `apps/` (`byline`, `lineup`, `roster`, `colophon`, `masthead` are all taken by other
  designs), `openspec/specs/` or `docs/templates/`, and **zero substring hits repo-wide**:
  `git grep -il nameplate origin/main` → **no matches** (so the `navpane`/`navpanel` trap does not apply).
  `colorlib.com/wp/template/nameplate/`, `preview.colorlib.com/theme/nameplate/` and
  `preview.colorlib.com/theme/bootstrap/nameplate/` all → **404**. The recreation lives at `apps/nameplate`,
  package `@free-react-templates/nameplate`, `nameplate.free.componentdock.com`.
  **No ColorLib string may appear in the app** — provenance lives in this spec, the `TEMPLATES.md` row and
  the PR only (AGENTS.md rule 5).

### Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**), so this design comes from `docs/catalog-coverage.md` —
the designs on colorlib.com's own listing that the checklist never recorded. `card-01` is the **first member
of the `card` snippet family** (`card-01` … `card-20`, **20 variants**), one of the **214 snippet variants in
19 families** that the listing carries and `TEMPLATES.md` does not
(`alert`, `hero`, `pricing-table`, `progress-bar`, `shopping-cart`, `tabs`, `toast`, `appointment-form`,
`breadcrumb`, `coming-soon-page`, `error-page`, `job-application-form`, `login-page`, `newsletter-form`,
`offcanvas`, `pagination`, `registration-page`, `survey-form`). The standalone 42 designs in that gap are all
prepped; the snippet families are the remaining queue, worked **in family order, then variant number**.

When the app ships, add a **new family section** `## Bootstrap Cards (20)` — the existing snippet families sit
as `## Bootstrap Accordions`, `## Bootstrap Buttons`, `## Bootstrap Calendars`, `## Bootstrap Carousels`,
`## Bootstrap Checkboxes`, … in `TEMPLATES.md` (lines 639–881, `## Bootstrap` 216 / `## Bootstrap 5` 89 around
them) — placed **alphabetically after `## Bootstrap Carousels` and before `## Bootstrap Checkboxes`**, and
bump the count. The first row is:

```markdown
- [x] **Card 01** — [colorlib](https://colorlib.com/wp/template/card-01/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-01.jpg) · [nameplate](https://nameplate.free.componentdock.com)
```

(Adding rows for the other 19 variants is a **batch** decision for the implementer stream, not a prep-run side
effect — this prep touches no shared file.)

## Reference readings (2026-10-25, `curl -4` + Playwright 1.62 Chromium)

| what                     | value                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| preview HTML             | 200, **7,149 B**, `text/html; charset=utf-8`, `<title>` "Card V01 \| Colorlib", `lang="en"`                                   |
| stylesheet               | `css/style.css?v=9ac0ac78`, **9,249 B**, sha256 `9b58f139…`; zip twin **identical**                                          |
| `js/snippet.js`          | **404** — and **no `js/` directory in the zip**: the page is CSS-only                                                          |
| archive                  | `https://preview.colorlib.com/downloads/free/card-01.zip`, **200, 418,462 B**, 19 entries, `index.html` + `css/` + `images/` + `fonts/` + README |
| fonts                    | Plus Jakarta Sans 400/500/600/700 self-hosted woff2; **2 distinct files** (`latin` 27,272 B, `latin-ext` 21,688 B) copied 8×   |
| images                   | **4** JPEGs, all `600 × 720` natural and declared: `ava.jpg` 50,778 B · `daniel.jpg` 75,095 B · `sofia.jpg` 43,904 B · `marcus.jpg` 48,373 B |
| SVG                      | **12 inline** icon `<svg>` (3 per card), `viewBox 0 0 24 24`, `fill:none; stroke:currentColor; stroke-width:1.8; round/round`, no icon font, no sprite |
| classes                  | **17** custom classes, every one `cl-card01`-prefixed, **0 phantom**, **0 dead selectors**, 0 framework utilities              |
| anchors                  | **12**, *all* bare `href="#"` (3 per card: LinkedIn, a second profile link, Email) — see §Known reference defects              |
| headings                 | 1 × `h1` ("People behind Northfield Design"), 4 × `h2` (the four names) — no `h3` anywhere                                   |
| structure                | `<main>` → `<header>` (eyebrow + `h1`) → `<ul>` → 4 × `<li><article>`; each article = `__media` + `__body` + `__foot`          |
| document height          | **786 px** content at 1440 × 900 (viewport 900); 900 at 1280/1180/1920; 1,358 at 1024; 1,384 at 768; 2,624 at 390; 2,387 at 320 |
| horizontal scroll        | **none at any width probed** — `scrollWidth === clientWidth` at 320 / 360 / 390 / 520 / 600 / 700 / 768 / 1024 / 1180 / 1280 / 1440 / 1920 |

## Design tokens (measured from `style.css`, 9,249 B, and from `getComputedStyle` at 1440 px)

### Palette — one sand ground, one rust accent, five warm neutrals

| role                    | hex / value                     | where                                                                                       |
| ----------------------- | ------------------------------- | ------------------------------------------------------------------------------------------- |
| page ground             | `#f6f3ee`                       | `body` background — a warm sand, 3 % less pink than `stone-50`                              |
| card surface            | `#ffffff`                       | `--cl-card01-surface`, every card                                                            |
| ink                     | `#1c1917`                       | `--cl-card01-ink`: `h1`, card name, tag label, icon glyph                                    |
| muted                   | `#57534e`                       | `--cl-card01-muted`: bio, "Since YYYY"                                                       |
| **accent**              | `#c2410c`                       | `--cl-card01-accent`: **the role line**, icon hover ground, `:focus-visible` outline         |
| **eyebrow rust**        | `#9a3412`                       | the eyebrow only — one step darker than the accent, deliberately *not* the same colour       |
| hairline                | `#ece7df`                       | `--cl-card01-line`: 1 px card border **and** the dashed footer rule                          |
| media placeholder       | `#e7e1d8`                       | `__media` background behind the photo (what shows while a lazy image has not loaded)         |
| icon chip               | `#f5f1ea`                       | 36 px icon disc ground                                                                       |
| tag ground              | `rgba(255,255,255,.92)`         | the pill on the photo                                                                        |
| white                   | `#ffffff`                       | icon glyph + label on hover                                                                  |

There is **no gradient anywhere**, no dark mode and no second accent. `#c2410c` is used for exactly three
jobs and `#9a3412` for exactly one — do not "unify" them into one brand token: the eyebrow is a different rust
on purpose, and a spec that collapses them ships a page that looks subtly flat.

### Type — Plus Jakarta Sans only, tight headings against loose micro-labels

| element          | size / line-height | weight | tracking   | colour    | case          |
| ---------------- | ------------------ | ------ | ---------- | --------- | ------------- |
| eyebrow          | `13px` / normal    | 700    | **+0.12em** (`1.56px`) | `#9a3412` | uppercase |
| `h1`             | `clamp(26px, 3.4vw, 36px)` / `1.2` | 700 | **−0.02em** (`−0.72px` at 36) | `#1c1917` | sentence |
| card name (`h2`) | `19px` / `1.3`     | 700    | **−0.01em** (`−0.19px`) | `#1c1917` | sentence |
| role             | `14px` / `1.55`    | 600    | normal     | `#c2410c` | sentence      |
| bio              | `14px` / `1.55`    | 400    | normal     | `#57534e` | sentence      |
| tag              | `12px` / `1.55`    | 700    | **+0.02em** (`0.24px`) | `#1c1917` | sentence |
| "Since YYYY"     | `12.5px` / `1.55`  | 500    | normal     | `#57534e` | sentence      |

Family stack, verbatim: `"Plus Jakarta Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.
The card element itself declares `font-size: 15px; line-height: 1.55`, which only reaches the `<li>`/text
nodes that do not set their own size — every visible text node overrides it. Measured `h1` steps:
`26px` at 768, `34.816px` at 1024, `36px` from ~1,059 px up.

### Radii, shadows, motion

| token            | value                                                                       |
| ---------------- | --------------------------------------------------------------------------- |
| card radius      | **22px**                                                                     |
| media radius     | **16px** (6 px inside the card's 10 px padding, so the two curves stay concentric) |
| tag radius       | **999px** (full pill)                                                        |
| icon radius      | **50 %** (36 px disc)                                                        |
| card shadow      | `0 1px 2px rgba(28,25,23,.04), 0 12px 32px -20px rgba(28,25,23,.25)`          |
| card hover shadow| `0 1px 2px rgba(28,25,23,.04), 0 24px 44px -22px rgba(28,25,23,.35)`          |
| tag shadow       | `0 4px 12px rgba(0,0,0,.12)`                                                 |
| card transition  | `transform .3s ease, box-shadow .3s ease`; hover `translateY(-4px)` (measured `matrix(1,0,0,1,0,-4)`) |
| photo transition | `transform .6s ease`; card hover → `scale(1.05)`                             |
| icon transition  | `background-color .2s ease, color .2s ease, transform .2s ease`; hover `translateY(-2px)` |
| focus ring       | `outline: 2px solid #c2410c; outline-offset: 2px` (icons only)               |
| reduced motion   | every transition `none`, every hover transform `none` (one `@media` block)   |

### Layout — one `auto-fit` grid, **no width media queries at all**

`.cl-card01-demo { max-width: 1200px; margin: 0 auto; padding: clamp(32px, 6vw, 72px) 16px; }` and
`.cl-card01-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px; }`.
The sheet contains **exactly one `@media` query** — `(prefers-reduced-motion: reduce)`. Every responsive
change below is a consequence of `minmax(240px, 1fr)` plus the `clamp()` padding, so the recreation can keep
the same two rules rather than a breakpoint ladder:

| viewport | columns | card width | container padding (v / h) | `h1` lines | document height |
| -------: | ------: | ---------: | ------------------------: | ---------: | --------------: |
|      320 |       1 |        288 |                32 / 16 px |          2 |           2,387 |
|      360 |       1 |        328 |                32 / 16 px |          2 |           2,538 |
|      390 |       1 |        358 |                32 / 16 px |          2 |           2,624 |
|      520 |       1 |        488 |                32 / 16 px |          1 |           3,111 |
|      600 |       2 |        272 |                36 / 16 px |          1 |           1,226 |
|      700 |       2 |        322 |                42 / 16 px |          1 |           1,324 |
|      768 |       2 |        356 |                46 / 16 px |          1 |           1,384 |
|    1,024 |       3 |      314.7 |                61 / 16 px |          1 |           1,358 |
|    1,180 |       4 |        269 |                71 / 16 px |          1 |             900 |
|    1,280 |       4 |        282 |                72 / 16 px |          1 |             900 |
|    1,440 |       4 |        282 |                72 / 16 px |          1 |             900 |
|    1,920 |       4 |        282 |                72 / 16 px |          1 |             900 |

The 4-column state arrives at **1,180 px** (1,180 − 32 − 3 × 24 = 1,076 / 4 = 269), and above 1,232 px the
container stops growing (`max-width: 1200px` **content box** + 16 px padding ⇒ outer 1,232, cards 282). The
one-column state holds all the way to **520 px** because `2 × 240 + 24 = 504` must fit inside
`520 − 32 = 488` — it does not, so the grid stays single-column until **≥ 504 + 32 = 536 px** of viewport.

### Component geometry (1440 px, then 390 px)

| element                    | 1440                                                                 | 390                                            |
| -------------------------- | -------------------------------------------------------------------- | ---------------------------------------------- |
| container                  | x 104, **1,232** wide, padding 72 / 16                               | 0 → **390** wide, padding 32 / 16               |
| head                       | y 72, 67.2 tall, **margin-bottom 32**                                | y 32, 86.4 tall (`h1` wraps to 2 lines)         |
| grid                       | y 171.2, 1,200 × 542.9, 4 × 282, gap **24**                          | y 150.4, 358 × 2,441.9, 1 column                |
| card                       | **282 × 542.9**, padding **10**, radius 22, 1 px `#ece7df`           | **358 × 603.3**                                 |
| media                      | **260 × 280.8** (5 : 5.4), radius 16, `object-position: center 25%`  | **336 × 362.9**                                 |
| tag                        | **79.7 × 28.6** at inset **left 12 / bottom 12**, padding 5 / 12     | same insets; 4 of 4 tags present                |
| body                       | y 481 (name), padding `18px 10px 6px`                                | name y 542.3                                    |
| name → role → bio          | 24.7 / 21.7 / 86.8 tall; role `margin: 2px 0 10px`                   | 24.7 / 21.7 / 65.1                              |
| foot                       | y 646.1, **51** tall (`padding-top 14`), `margin: 14px 10px 6px`     | y 685.7, 51 tall                                |
| icon disc                  | **36 × 36**, gap **6**, glyph **17 × 17**                            | 36 × 36                                         |
| "Since"                    | 66 × 19.4, right-aligned by `justify-content: space-between`          | 66 × 19.4                                       |

Card heights are **content-driven, not fixed**: the four cards in a row are equal because the grid stretches
the `<li>` (`display: flex` on `li`, `width: 100%` + `flex: 1` on `.cl-card01__body`), and the *footer* is
pinned to the bottom by that `flex: 1` body. A recreation that gives the cards `h-full` but no growing body
will float the footers at four different heights — the reference's footers share one baseline
(all four at y 646.1 at 1440).

## Requirements

### Requirement 1: Page shell and the single roster band

The app SHALL render one full-viewport band on `#f6f3ee` holding a centred header (eyebrow + `h1`) and a
four-card roster grid inside a 1,200 px container, with **no other content bands**.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport
- **WHEN** the page is measured
- **THEN** `<body>` background is `#f6f3ee`, the document is **786 px** tall (no scrolling at 900), and the
  container is **1,232 px** outer / 1,200 px content, centred (x 104 / 120), padding **72 px** vertical and
  **16 px** horizontal
- **AND** the band carries no background image, gradient, border or shadow

#### Scenario: Header copy and type

- **GIVEN** the header block
- **THEN** the eyebrow is a `<p>` reading **"The studio"**, `13px` / 700 / uppercase / `+0.12em` (`1.56px`),
  `#9a3412`
- **AND** the `h1` reads **"People behind Northfield Design"**, `36px` / `43.2px` 700, tracking `−0.72px`,
  `#1c1917`, and sits **8 px** below the eyebrow (eyebrow y 72 → `h1` y 96, with the eyebrow's own 16 px box)
- **AND** the block is `text-align: center` with **32 px** of margin below it before the grid starts

#### Scenario: No invented bands

- **GIVEN** the rendered app
- **THEN** it contains exactly one section: the roster band
- **AND** it contains no navigation bar, hero, carousel, testimonial, pricing, FAQ, newsletter or contact form
  — the reference has none, and adding them is not a fidelity improvement

### Requirement 2: The roster grid — four cards, `auto-fit`, one breakpoint rule

The app SHALL render the four profiles in a CSS grid of `repeat(auto-fit, minmax(240px, 1fr))` with a **24 px**
gap inside the 1,200 px container, producing 1 / 2 / 3 / 4 columns at the measured widths without any width
media query.

#### Scenario: Column counts from measurements

- **GIVEN** the viewport widths 320, 390, 520, 600, 768, 1024, 1180 and 1440
- **THEN** the grid resolves to **1 / 1 / 1 / 2 / 2 / 3 / 4 / 4** columns respectively
- **AND** the card widths are **288 / 358 / 488 / 272 / 356 / 314.7 / 269 / 282** px at those widths
- **AND** the one-column state persists to **520 px** (two 240 px tracks + 24 px gap = 504 px do not fit in the
  488 px content box) and the four-column state begins at **1,180 px**

#### Scenario: The four cards are the four reference profiles, in order

- **GIVEN** a 1440 px viewport
- **THEN** the grid holds exactly **4** `<li><article>` items in this order: **Ava Lindqvist** (Founder,
  Creative Director, Since 2014), **Daniel Okoro** (Engineering, Lead Front-end Developer, Since 2017),
  **Sofia Marin** (Research, UX Researcher, Since 2019), **Marcus Reyes** (Client team, Account Manager,
  Since 2021)
- **AND** all four cards share one height (**542.9 px**) and one footer baseline (**y 646.1**) even though
  their bios differ in length (3, 3, 2 and 2 lines)
- **AND** the list is a real `<ul>` with `list-style: none`, and each item is a `<li>` containing one
  `<article>`

### Requirement 3: Card anatomy — media, tag, body, footer, in that order

Each card SHALL render as a white, radius-22, 1 px `#ece7df` plate with **10 px** padding holding (1) a
radius-16 portrait media box, (2) a floating pill tag inside that media, (3) a body with name, role and bio,
and (4) a footer divided by a **dashed** hairline.

#### Scenario: Plate at 1440

- **GIVEN** a card
- **THEN** it is **282 × 542.9** px, ground `#ffffff`, border **1 px `#ece7df`**, radius **22**, padding **10**,
  with the two-layer shadow `0 1px 2px rgba(28,25,23,.04), 0 12px 32px -20px rgba(28,25,23,.25)`
- **AND** its text colour is `#1c1917` and its children use `box-sizing: border-box`

#### Scenario: Media window

- **GIVEN** a card's media box
- **THEN** it is **260 × 280.8** px (`aspect-ratio: 5 / 5.4`), radius **16**, `overflow: hidden`, ground
  `#e7e1d8`
- **AND** the `<img>` fills it (`width/height: 100%`, `object-fit: cover`) with
  `object-position: center 25%` — a face-forward crop, not the frame's centre
- **AND** every photo carries a real `alt` naming the person ("Portrait of Ava Lindqvist", …)

#### Scenario: The floating tag

- **GIVEN** a card's tag
- **THEN** it is a `<span>` absolutely positioned **12 px from the left and 12 px from the bottom** of the
  media box, **79.7 × 28.6** px for "Founder", padding **5 / 12**, radius **999px**, ground
  `rgba(255,255,255,.92)`, colour `#1c1917`, `12px` / 700 / `+0.02em`, shadow `0 4px 12px rgba(0,0,0,.12)`
- **AND** the four labels are **Founder**, **Engineering**, **Research**, **Client team** (they are team
  names, not job titles — the job title is the role line)

#### Scenario: Body and footer

- **GIVEN** a card's body
- **THEN** it is `flex: 1`, padding `18px 10px 6px`, holding `<h2>` name `19px` / 700 / `−0.19px`, a role
  line `14px` / 600 / `#c2410c` with `margin: 2px 0 10px`, and a bio `14px` / 400 / `#57534e`
- **AND** the footer is `display: flex; align-items: center; justify-content: space-between`, `gap: 12px`,
  `margin: 14px 10px 6px`, `padding-top: 14px`, and a **`1px dashed #ece7df`** top border
- **AND** the dashed rule is the only dashed stroke on the page (the card border is solid)

### Requirement 4: The social discs — three per card, 36 px, rust on hover

The app SHALL render, in each card footer, a `<ul>` of **three** 36 px round icon links followed by the
"Since YYYY" stamp, and each link SHALL carry an accessible name and a real destination.

#### Scenario: Disc geometry and state

- **GIVEN** a 1440 px viewport
- **THEN** each disc is **36 × 36**, `border-radius: 50%`, ground `#f5f1ea`, glyph `#1c1917`, `gap: 6px`
  between discs
- **AND** the glyph is a **17 × 17** inline `<svg>` with `fill: none`, `stroke: currentColor`,
  `stroke-width: 1.8`, `stroke-linecap/linejoin: round`
- **AND** on hover the ground becomes `#c2410c`, the glyph `#ffffff`, and the disc translates **−2 px**
  (`transform .2s ease`)
- **AND** on `:focus-visible` the disc shows `outline: 2px solid #c2410c; outline-offset: 2px`

#### Scenario: Per-card icon sets and names

- **GIVEN** the four cards
- **THEN** every card's first disc is **LinkedIn** (`aria-label="LinkedIn"`)
- **AND** the second disc is: Ava → a **globe** ("Portfolio website"), Daniel → a **code chevron pair**
  ("Code repositories"), Sofia → a **pen** ("Writing and articles"), Marcus → a **calendar** ("Book a call")
- **AND** every third disc is a **mail envelope** (`aria-label="Email <First name>"`)
- **AND** each `<ul>` carries `aria-label="<Full name> online"`

#### Scenario: Destinations are not dead

- **GIVEN** the rendered app
- **THEN** **no** anchor has `href="#"` — the reference's twelve dead anchors are a defect, not a design
  (see §Known reference defects)
- **AND** the LinkedIn/portfolio/code/writing discs resolve to a real profile URL or an in-page anchor, the
  calendar disc resolves to the contact/booking anchor, and every mail disc is a well-formed
  `mailto:` naming the person
- **AND** a test walks every `a[href]` on the page and asserts none is `#` or empty

### Requirement 5: The "Since YYYY" stamp

The app SHALL render each card's founding-year stamp at the right end of the footer, on the muted token, and
SHALL NOT wrap it onto a second line.

#### Scenario: Stamp

- **GIVEN** a card footer
- **THEN** the stamp is `12.5px` / 500 / `#57534e`, `white-space: nowrap`, **66 px** wide ("Since 2014")
- **AND** the years are **2014 / 2017 / 2019 / 2021** for Ava / Daniel / Sofia / Marcus
- **AND** the stamp and the disc row are pushed apart by `justify-content: space-between`, never by a spacer
  element

### Requirement 6: Motion, hover and reduced motion

The app SHALL reproduce the three hover behaviours exactly (card lift, photo zoom, disc fill) with the
reference's durations, and SHALL disable all of them under `prefers-reduced-motion: reduce`.

#### Scenario: Hover at 1440

- **GIVEN** the pointer over a card
- **THEN** the card renders `translateY(-4px)` and the deeper shadow
  `0 1px 2px rgba(28,25,23,.04), 0 24px 44px -22px rgba(28,25,23,.35)`, transitioning `.3s ease`
- **AND** the photo inside it scales to **1.05** over `.6s ease`, clipped by the media box's `overflow: hidden`
- **AND** the card's own hover does not move its neighbours (transform only, no layout change)

#### Scenario: Reduced motion

- **GIVEN** `prefers-reduced-motion: reduce`
- **THEN** the card, photo and disc all compute `transition: none`
- **AND** hovering produces **no** transform on any of the three (measured: `transform: none`)

### Requirement 7: Responsive integrity

The app SHALL hold its layout at every width from 320 to 1920 without horizontal scrolling and without
clipping a tag, a name or the stamp.

#### Scenario: No horizontal scroll

- **GIVEN** widths 320, 360, 390, 520, 600, 700, 768, 1024, 1180, 1280, 1440 and 1920
- **THEN** `document.documentElement.scrollWidth === clientWidth` at every one (the reference passes at all
  twelve)
- **AND** the grid column counts match Requirement 2 at each width
- **AND** at 390 the page is **2,624 px** tall and at 320 **2,387 px**, both single-column

#### Scenario: Text does not collide at 320

- **GIVEN** a 320 px viewport
- **THEN** the card is 288 px wide, the media **266 px** (288 − 2 × 10 padding − 2 × 1 border), the tag keeps
  its 12 px inset, and the footer — **246 px** of track after its own 10 px side margins — still holds the
  disc row (3 × 36 + 2 × 6 = 120 px), the 12 px gap and the 66 px stamp (198 px total)

### Requirement 8: Semantics and accessibility

The app SHALL use landmark and list semantics that match the reference's structure and SHALL expose every
icon-only control by name.

#### Scenario: Document structure

- **GIVEN** the rendered app
- **THEN** there is exactly one `<h1>` (the roster headline) and one `<h2>` per person, in DOM order
- **AND** the roster is a `<ul>` of `<li>` items, each holding an `<article>`, inside a `<main>` landmark
- **AND** the header precedes the list, and the footer follows it

#### Scenario: Icon links are named

- **GIVEN** any icon-only anchor
- **THEN** it has an `aria-label` (LinkedIn / Portfolio website / Code repositories / Writing and articles /
  Book a call / Email \<first name\>)
- **AND** its `<svg>` is `aria-hidden="true"` so the name is announced once, not twice
- **AND** every focusable element shows a visible focus ring (2 px `#c2410c`, offset 2, on the discs)

### Requirement 9: Attribution, naming and provenance

The app SHALL ship as `apps/nameplate` / `@free-react-templates/nameplate` /
`nameplate.free.componentdock.com`, SHALL link Component Dock in its footer, and SHALL contain no ColorLib
reference anywhere.

#### Scenario: Identity

- **GIVEN** the built app
- **THEN** `package.json` name is `@free-react-templates/nameplate`, `homepage` is
  `https://nameplate.free.componentdock.com`, and `public/CNAME` contains exactly that host
- **AND** `document.title` and the meta description are written for the recreation, never the source title

#### Scenario: Footer attribution

- **GIVEN** the shipped footer
- **THEN** it contains a link to **https://www.componentdock.com/** labelled "Component Dock"
- **AND** the footer is the only chrome added to the band — a single line of small print, `#57534e`, on the
  sand ground, not a multi-column footer plate

#### Scenario: Clean provenance

- **GIVEN** every non-test file under `apps/nameplate/`
- **THEN** none contains "ColorLib"/"Colorlib", a `colorlib.com` URL, `card-01`, or a credit line naming the
  source
- **AND** the four sample profiles stay as sample data; the fictional studio "Northfield Design" carries no
  source branding and may stay in the `h1`

### Requirement 10: Copy fidelity

The app SHALL carry the reference's copy, not paraphrases of a different design: eyebrow, headline, four
names, four roles, four team tags, four bios and four years.

#### Scenario: The four profiles

- **GIVEN** the roster
- **THEN** the copy is, in order: **Ava Lindqvist / Creative Director / Founder / Since 2014** —
  "Leads brand strategy and art direction. Spent eight years shaping identities for museums and public
  spaces."; **Daniel Okoro / Lead Front-end Developer / Engineering / Since 2017** — "Turns design systems
  into fast, accessible interfaces. Runs our monthly code review sessions."; **Sofia Marin / UX Researcher /
  Research / Since 2019** — "Plans interviews and usability tests, then turns what people say into clear
  product decisions."; **Marcus Reyes / Account Manager / Client team / Since 2021** — "Your first call for
  timelines, budgets and briefs. Keeps every project on schedule and on scope."
- **AND** the eyebrow stays "The studio" and the `h1` stays "People behind Northfield Design"
- **AND** each bio is a single `<p>` (no bullets, no "read more" link, no truncation)

## Screenshot analysis (catalogue image, `card-01.jpg`)

The listing image is **a framed capture, not a bare screenshot**: a **1200 × 972** AVIF (served as
`image/avif` despite the `.jpg` name) showing a macOS window — three traffic-light dots and a URL bar reading
`preview.colorlib.com` — on a **white sheet with a soft drop shadow over a very light grey page**. Inside the
window it is the real page at roughly **1,120 px** wide (four cards ≈ 269 px each, i.e. the 1,180–1,280 px
state), with the same copy, the same four tags and the same footer rows.

Two consequences for the recreation: the image confirms the **1,180–1,280 px four-column state** is the
intended "hero" composition (not the 1,440 px one, where the container has already stopped growing), and **the
window frame, traffic lights, URL bar, white sheet and drop shadow are catalogue furniture — none of it belongs
in the app**. The app's own ground is `#f6f3ee`, full-bleed.

## Known reference defects (do not copy)

1. **All twelve anchors are `href="#"`.** Three per card, every one dead. The recreation SHALL use real
   destinations (Requirement 4) — this is the one accessibility/interaction defect the reference ships.
2. **The archive's README lists `js/snippet.js`, which does not exist** (404 live, absent from the zip). Do not
   create one: there is no behaviour to port, and a fabricated script would add a state the reference never had.
3. **Eight `@font-face` blocks, two files.** The four weights are the *same* woff2, so weight selection is
   variable-axis, not per-file. Load one family with four weights instead of eight files.
4. **The last two photos are `loading="lazy"`** — a full-page capture at 390 shows them as empty `#e7e1d8`
   panels, because a full-page screenshot does not scroll. That is a capture artefact, **not** a style: keep
   lazy loading if you like, but never reproduce the blank media box as a design state (ship a placeholder
   ground of `#e7e1d8` behind every photo so a slow image is never a white hole).
5. **The `h1` uses `clamp(26px, 3.4vw, 36px)` and wraps to two lines at ≤ 520 px.** At 320 the headline reads
   "People behind / Northfield Design"; do not shrink it further to force one line.

## Verification checklist

- [ ] `apps/nameplate` exists, `@free-react-templates/nameplate` in `package.json`, `public/CNAME` =
      `nameplate.free.componentdock.com`, `homepage` the same
- [ ] footer links `https://www.componentdock.com/`; **no** ColorLib string, no `card-01`, in any app file
      (comments included)
- [ ] one band only: centred header (eyebrow + `h1`) then a 4-card roster; no nav, hero, carousel, form or
      extra section invented
- [ ] ground `#f6f3ee`; container max **1200 px** content + **16 px** padding, vertical padding
      `clamp(32px, 6vw, 72px)`; header → grid gap **32 px**
- [ ] eyebrow 13/700 uppercase `+0.12em` `#9a3412`; `h1` `clamp(26px, 3.4vw, 36px)`/1.2 700 `−0.02em`
      `#1c1917`, two lines at 390, one line from ~520 up
- [ ] grid `repeat(auto-fit, minmax(240px, 1fr))` **gap 24**, columns **1 / 1 / 1 / 2 / 2 / 3 / 4 / 4** at
      320 / 390 / 520 / 600 / 768 / 1024 / 1180 / 1440; card widths **288 / 358 / 272 / 356 / 314.7 / 269 / 282**
- [ ] card **282 × 542.9** at 1440: white, radius **22**, border 1 px `#ece7df`, padding **10**, two-layer
      shadow; all four cards one height with footers on **one baseline**
- [ ] media **5 : 5.4** (260 × 280.8 at 1440), radius **16**, ground `#e7e1d8` behind the photo,
      `object-fit: cover`, `object-position: center 25%`, real `alt` per person
- [ ] tag absolutely placed **left 12 / bottom 12**, pill radius, `rgba(255,255,255,.92)`, 12/700 `+0.02em`,
      padding 5/12, own shadow; labels Founder / Engineering / Research / Client team
- [ ] name 19/700 `−0.19px`; role 14/600 `#c2410c` with `margin: 2px 0 10px`; bio 14/400 `#57534e`
- [ ] footer `space-between`, `gap 12`, `padding-top 14`, **`1px dashed #ece7df`** top border — the only
      dashed stroke on the page
- [ ] three 36 px discs per card (`#f5f1ea`, glyph 17 px `stroke-width 1.8`), `gap 6`, hover `#c2410c` fill +
      `−2px`, `:focus-visible` 2 px `#c2410c` outline offset 2; per-card second glyph globe / code / pen /
      calendar; third always mail
- [ ] "Since 2014 / 2017 / 2019 / 2021" 12.5/500 `#57534e`, `nowrap`, right-aligned by `space-between`
- [ ] hover: card `translateY(-4px)` + deeper shadow (.3s), photo `scale(1.05)` (.6s), disc fills rust (.2s)
- [ ] `prefers-reduced-motion: reduce` → every transition `none` and every hover transform `none`
- [ ] `scrollWidth === clientWidth` at **320 / 360 / 390 / 520 / 600 / 700 / 768 / 1024 / 1180 / 1280 /
      1440 / 1920**; document 786 px at 1440, 2,624 at 390, 2,387 at 320
- [ ] one `h1`, four `h2`, `<ul>`/`<li>`/`<article>` semantics, every icon link named, every glyph
      `aria-hidden`
- [ ] **zero bare `#` anchors**; mail discs are well-formed `mailto:`; a test walks every `a[href]`
- [ ] Plus Jakarta Sans 400/500/600/700 via one Google Fonts `<link>` (`display=swap`), no eight-file @font-face
      duplication, no phantom `snippet.js`
- [ ] 100% coverage on the new app, `scripts/verify-app.sh nameplate` green
