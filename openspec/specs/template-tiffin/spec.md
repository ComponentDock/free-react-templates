# Template: Tiffin (Recipe cards — three dish cards whose photograph sits in a round plate that straddles a tinted header band, with course, serif title, blurb, a three-cell dashed stat table and diet tag pills)

## Purpose

A **single-screen recipe band**: one rust eyebrow and one large serif headline over a **three-across
grid of dish cards** on warm cream (`#fbf6ee`). Each card is a **white, 28 px-radius panel with a
tinted 92 px header band** — and the design's whole identity is one move: **the dish photograph is a
176 px circle with an 8 px white ring, and it straddles the join between the band and the white body,
sitting 76 px above the card's top edge.** The plate's photo bottom edge lands **exactly** on the band's
bottom edge, so the circle looks laid on the card rather than punched into it.

Underneath, the card reads top-to-bottom as a menu entry: a **rust uppercase course line**
(*"Main · Italian"*), a **serif dish title** in two lines, a **two-line muted blurb**, a
**hairline-dashed three-cell stat table** (*Time* / *Level* / *Per serving*) whose middle cell carries a
**three-dot difficulty meter**, and a **pair of pill tags** in the card's own tint colour.

The page's **only behaviour is CSS**. The snippet ships **no JavaScript at all** (0 `<script>`, 0
`<button>`, 0 `<form>`): the plate **rotates 12°** on card hover over `0.6 s`, and the card-wide link
paints a **3 px rust ring at 4 px offset** on `:focus-visible`. There is no state, no counter, no
toggle, no form — the design is static, and the port must stay static.

- **Source slug:** `card-15`
- **ColorLib page:** https://colorlib.com/wp/template/card-15/ — **HTTP 200, 113,098 B**,
  `<title>` `Card V15 - Free Bootstrap Cards 2026 - Colorlib`, `<meta description>` *"Recipe cards
  where the dish sits in a round plate that overlaps a tinted header band. Free download, no jQuery or
  plugins."*, authoritative description *"Recipe cards where the dish sits in a round plate that
  overlaps a tinted header band. Each card has the course, a serif title, a one-line description, time,
  difficulty dots and calories in a small table, and diet tags."*, page copy *"It is plain HTML and CSS:
  no jQuery, no Bootstrap files, no plugins, and the download is 298 KB."*, `datePublished`
  **2026-09-25T15:33:21+00:00** (archive measured **304,887 B** = 297.74 KB ✓). It is the **fifteenth of
  twenty** `card` variants and links its siblings on the page.
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/card-15/ —
  **HTTP 200, 3,893 B**, `<title>` `Card V15 | Colorlib`, `lang="en"`, **one** stylesheet,
  `<meta name="robots" content="noindex, nofollow">`. The slug-only path `theme/card-15/` **404s**; this
  family lives under the `bootstrap/` prefix (the same ladder as `card-01` … `card-14`).
- **Design category:** Card (recipe / menu cards). Fifteenth member of the **`card` snippet family**
  (`card-01` … `card-20`) in the **214 snippet variants** catalogued in `docs/catalog-coverage.md`.
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/tiffin`,
  package `@free-react-templates/tiffin`, CNAME `tiffin.free.componentdock.com`.

**What this design is.** The family's **first card where the image escapes the card's rectangle**. Every
sibling — name plates, job notices, price cards, listing cards — keeps its media inside the card's own
box. This one floats a plate **76 px above the card's top edge**, and that single overhang is why the
page has **96 px of air** between the head and the grid and **96 px between grid rows**: the air exists
to hold the plates, not to space the cards.

**Four distances decide whether the recreation reads correctly.**

1. **The plate straddles the join; it is not centred on it.** Plate top is **−76 px** inside a card
   whose band is **92 px** tall, and the plate is **176 px** across. So the plate's photo bottom sits at
   **+92** from the card's top — flush with the band's bottom edge — and the 8 px white ring around it
   sticks 8 px into the white body. Centre the plate on the band, or size it to the band, and the
   composition dies.
2. **The plate must not be clipped.** The card sets **no `overflow`**, so the plate renders above the
   card's top edge. The band is a separate `::before` rounded shape, not a header block. A port that
   adds `overflow: hidden` for tidiness deletes the plate's top half.
3. **The 96 px is plate clearance.** Head `margin-bottom: 96px` and grid `row-gap: 96px` are the same
   number for the same reason: 76 px of plate + **20 px** of visible air. Compressing either to a
   "normal" 32–48 px makes the plates touch the headline and the card above.
4. **The card is a centred flex column, and the blurb eats the slack.** `display: flex; flex-direction:
   column` with `flex: 1` on the description is why three cards of unequal copy share one height in a
   row while the stat table and the tags stay pinned to the bottom.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` on main (**0** unchecked rows, **0** in-progress rows). So this design
comes from `docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never
recorded. `card-15` is one of the **214 snippet variants in 19 families**; snippet families are worked
**in family order, then variant number**, and the `card` family runs to **20**.

The family section **`## Bootstrap Cards (20)` exists on main at line 733** and at this prep's commit
carries **six** rows — `Card 01` → nameplate, `Card 02` → marketrow, `Card 03` → octavo, `Card 04` →
tierline, `Card 05` → plaudit, `Card 06` → statline — with **`## Bootstrap Checkboxes (20)` following
at line 741**. Cards **07–14** are prepped and unbuilt (`lodgerow`, `roadbook`, `lexeme`, `coffer`,
`showbill`, `coursebook`, `shortlist`, `baylist`). This design's row goes **directly after the last card
row present** when the implementer ships it:

```markdown
- [x] **Card 15** — [colorlib](https://colorlib.com/wp/template/card-15/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-15.jpg) · [tiffin](https://tiffin.free.componentdock.com)
```

The family's rows land out of order because prep runs ahead of build — the implementer stream owns that
batch edit, not this prep run.

**The name.** `tiffin` — one lowercase word: the tiered tin a hot midday meal is carried in, and by
extension the meal itself. It names the design's subject (a plated dish) without touching its source,
and it is short enough to read as a product. It is in **no** `apps/` folder, **no** spec folder, and
`git grep -il tiffin origin/main` returns **nothing at all** (0 hits, checked 2026-10-26). The ColorLib
catalogue paths `colorlib.com/wp/template/tiffin/`, `preview.colorlib.com/theme/tiffin/` and
`preview.colorlib.com/theme/bootstrap/tiffin/` are all **404**. Do **not** reuse the family's taken
names `nameplate`, `marketrow`, `octavo`, `tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`,
`lexeme`, `coffer`, `showbill`, `coursebook`, `shortlist`, `baylist`. Other candidates measured free the
same day (0 repo hits, no `apps/` folder, no spec folder): `cookbook`, `menuboard`, `mezze`,
`dishwise`, `ladle` — reserved for later variants.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                                                                |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 3,893 B**, `<title>` "Card V15 \| Colorlib", `lang="en"`, **one** stylesheet, `<meta name="robots" content="noindex, nofollow">`                 |
| preview path      | **`theme/bootstrap/card-15/`** — the directory URL is the page. `theme/card-15/` is **404**                                                          |
| stylesheet        | `css/style.css?v=72d49e6a`, **7,178 B**, 316 lines, sha256 `3efaf82afcb0a71c566e1d2e24bcafcd136e6d102f277c56f059417d80b7b9cb`                          |
| script            | **none** — the snippet ships **no JS**: 0 `<script>` in the served HTML. The 10 scripts a browser sees (googletagmanager, Cloudflare Zaraz `cdn-cgi/zaraz/s.js`, `s9cc/`, Cloudflare Insights beacon) are the **preview host's analytics wrapper**, none in the archive      |
| archive           | `preview.colorlib.com/downloads/free/card-15.zip`, **200, 304,887 B** (297.74 KB ✓ the page's "298 KB"), **12 entries**: 5 dirs + `index.html` **3,595 B** + `css/style.css` **7,178 B** + `README.md` **1,260 B** + **3 `jpg`** (75,160 / 120,093 / 80,740 B) + **2 `woff2`** (17,844 / 6,800 B) |
| live ↔ archive    | CSS **identical sha256** (`3efaf82a…`); live HTML **3,893 B** vs archive **3,595 B** — the **298-byte** delta is the two `?v=` cache-busters, the extra `noindex`/`dns-prefetch`/`fetchpriority` head tags and the `decoding`/`loading` hints on the images → **the preview is the archive's versioned twin** |
| CSS shape         | **46** `{` blocks = **41** top-level style rules + **2** `@font-face` + **1** `@media` (`prefers-reduced-motion`, 2 nested rules); **0** `@keyframes`, **0** `@supports`, **0** container queries, **0** column media queries; **16** distinct `.cl-*` selectors; of the 41 rules **11 are `:where(html) …` host resets** |
| classes           | **14** classes in the markup, **all** styled; **1 dead selector** — `.cl-icon` (the family declares it, the markup hits **0** — 7th consecutive card with this leftover) |
| custom properties | **4**, all declared on `.cl-card15`: `--cl-card15-tint` (`#fde7d9` default, overridden **inline per card**), `--cl-card15-ink` `#2a1d12`, `--cl-card15-muted` `#5c4a3a`, `--cl-card15-accent` `#c2410c` |
| cascade reset     | the sheet opens with `:where(html) :is(…) { all: revert }` (11 rules) — a host-page reset so a Bootstrap parent cannot restyle the snippet; **do not port it**, Tailwind preflight already owns this |
| controls          | **0** `<button>`, **0** forms, **0** inputs, **3** `<a href="#">` (the dish titles), **3** `<img>` → **3** focusable elements, one per card |
| headings          | **1 × `h1`** ("Weeknight dinners, sorted") and **3 × `h2`** (the dish titles); cards are `<article>`                                    |
| blocks            | `<main class="cl-card15-demo">` → `<header>` (`p` eyebrow + `h1`) → `<div class="cl-card15-grid">` of 3 `<article>` → *(nothing after the grid)* |
| content height    | **751** at 1,920 / 1,440 / 1,280 / 1,200 · **761.78** at 1,140 · **742.69** at 1,024 · **781.63** at 950 · **1,189.56** at 900 · **1,304.66** at 636 · **1,567.34** at 600 · **1,645.59** at 480–412 · **1,701.69** at 390 · **1,903.19** at 320 |
| horizontal scroll | **none at ≥296 px** — `scrollWidth === clientWidth` and `scrollTo(600,0) → scrollX 0` at 296 / 300 / 320 / 360 / 390 / 430 / 480 / 618 / 635 / 636 / 768 / 900 / 924 / 949 / 950 / 1,024 / 1,140 / 1,440. **Real overflow below that**: `scrollX 1` at 295, **6** at 290, **16** at 280 (see defect 1) |
| screenshot        | `card-15.jpg` — **1200 × 972**, an **AVIF container behind a `.jpg`** extension (`file` → `ISO Media, AVIF Image`, 46,495 B); convert before viewing   |
| fonts             | **DM Serif Display 400 only**, `latin` **17,844 B** + `latin-ext` **6,800 B** = **24,644 B**, 2 `@font-face` rules, no italic, no other weight. The body face is **not a webfont** — `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif` |

### The plate straddles the band — three numbers, one composition

Everything about the card's identity is this arithmetic (card-relative, at any card width):

| quantity                  | value          | where it comes from                                   |
| ------------------------- | -------------: | ----------------------------------------------------- |
| band height               | **92 px**      | `.cl-card15::before { height: 92px }`                 |
| plate top                 | **−76 px**     | `.cl-card15__plate { top: -76px }`                    |
| plate diameter            | **176 px**     | `width/height: 176px` (border-box, **8 px** white ring) |
| plate photo (inner)       | **160 px**     | `176 − 2 × 8`                                          |
| plate bottom              | **+100 px**    | `−76 + 176`                                            |
| plate photo bottom        | **+92 px**     | `−76 + 8 + 160` → **exactly the band's bottom edge**   |
| card padding-top          | **116 px**     | `padding: 116px 26px 24px` → first text **24 px** under the plate |

So the plate is **80 % of its height above the card's top edge** (76 / 176 = 43 % above, but 100 px of
its 176 overlaps the card, of which 92 is band and 8 is white). Two independent numbers encode the same
join: `top: -76px` and `height: 92px`. Changing either alone breaks the flush edge — the pair is the
design.

Measured at 1,440 (card 1 at x **150**, y **244.5**, **362.66 × 434.5**):

| part        | geometry                                                                 |
| ----------- | ------------------------------------------------------------------------ |
| band        | `0 → 92` from the card top (y **244.5 → 336.5**), radius **28 28 0 0**    |
| plate       | **176 × 176** at x **243.33**, y **168.5** (centred: `(362.66 − 176) / 2 = 93.33`) |
| plate photo | **160 × 160** at x **251.33**, y **176.5**, bottom **336.5** = band bottom |
| course      | y **360.5**, **310.66 × 19.5** (card top + 116)                           |

### The 96 px air is plate clearance, not rhythm

`head { margin-bottom: 96px }` and `grid { gap: 96px 26px }`. At 1,440 the `h1` bottom is **148.5** and
the plate top is **168.5** — **20 px** of air. Between two grid rows the previous card's bottom is
`row bottom` and the next plate's top is **76 px above** the next card's top, i.e. **20 px** of air
again. The 96 is not a spacing scale value; it is **76 + 20**.

### The grid thresholds are arithmetic, not breakpoints

`.cl-card15-grid` is `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 96px 26px`, with
**no media query**. Inside the 16 px page padding each track needs 280 px and each gap 26 px, so three
tracks need **892** and two need **586** of grid width — and the grid width is `min(1140, vw − 32)`:

| viewport | grid width | columns | tracks                    | card height |
| -------: | ---------: | ------- | ------------------------- | ----------: |
|    1,440 |      1,140 | 3       | 362.66 / 362.67 / 362.66  |   **434.5** |
|    1,200 |      1,140 | 3       | 362.66 / 362.67 / 362.66  |   **434.5** |
|    1,140 |      1,108 | 3       | 352 / 352 / 352           |   **452.5** |
|    1,024 |        992 | 3       | 313.33 / 313.33 / 313.34  |   **452.5** |
|      992 |        960 | 3       | 302.66 / 302.67 / 302.66  |  **481.25** |
|      950 |        918 | 3       | 288.66 / 288.67 / 288.66  |  **503.75** |
|  **924** |    **892** | **3**   | **280.00** each           |  **503.75** |
|  **923** |    **891** | **2**   | **432.50** each           |  content    |
|      900 |        868 | 2       | 421 / 421                 |   **412**   |
|      800 |        768 | 2       | 371 / 371                 | 412 / 412 / **434.5** |
|      640 |        608 | 2       | 291 / 291                 | 503.75 / 503.75 / **475** |
|  **618** |    **586** | **2**   | **280.00** each           |  content    |
|  **617** |    **585** | **1**   | **585**                   |  content    |
|      600 |        568 | 1       | 568                       |   **383.25** |
|      520 |        488 | 1       | 488                       | 412 / 412 / **383.25** |
|      390 |        358 | 1       | 358                       | 412 / 412 / **434.5** |
|      320 |        288 | 1       | 288                       | 503.75 / 481.25 / **475** |

The floor is a **bare `minmax(280px, 1fr)`** — *not* `min(100%, 280px)`. Below a **296 px** viewport
(280 + 16 px inset) the track can no longer shrink and the document starts to scroll: **1 px** at 295,
**6 px** at 290, **16 px** at 280. The port SHALL wrap the floor in `min(100%, …)` so the page never
scrolls; the card still measures **280** px at 320 in the reference, so keep `280` as the max floor.

### Card height is content-driven, so it is not monotonic

There is **no `min-height`** anywhere: a card's height is `116 + content + 24`, and the content wraps
more as the card narrows. In a multi-column row all cards share the tallest card's height (grid stretch
+ `flex: 1` on the description); in the second row they share their own row's height. Consequence: at
**800** the cards measure **412 / 412 / 434.5** — the third card is taller than its row-mates because it
is alone in row 2.

### The `h1` has a one-pixel wrap threshold

`clamp(32px, 4.4vw, 50px)` reaches its floor at `32 / 0.044 = 727.27` px, so every viewport at or below
**727** renders the title at **32 px / 33.6**. It is **one line down to 398** (grid 366, box **33.59**
tall) and **two lines from 397** (grid 365, box **67.19**). At 1,440 it is **50 px in a 52.5 px line
box**, `letter-spacing: -0.01em` (**−0.5 px**).

### Type — two faces, eight roles

| role       | size / weight / tracking / leading                | colour    | measured at 1,440                    |
| ---------- | ------------------------------------------------- | --------- | ------------------------------------ |
| eyebrow    | **14 / 700 / .12em / normal**, uppercase          | `#9a3412` | **1,140 × 16** at y 72               |
| `h1`       | **clamp(32px, 4.4vw, 50px) / 400 / −.01em / 1.05** | ink      | **50 / 52.5**, box **1,140 × 52.5** at y 96 |
| course     | **13 / 700 / .08em / normal**, uppercase          | `#c2410c` | **310.66 × 19.5** at y 360.5         |
| card title | **25 / 400 / normal / 1.15**, DM Serif Display    | ink       | **310.66 × 57.5** (2 lines) at y 386 |
| blurb      | **15 / 400 / normal / 1.5**                       | `#5c4a3a` | box **67.5** (card 1: 2 line rects)  |
| stat label | **12 / 600 / .06em / normal**, uppercase          | muted     | **103.55 × 18** at y 552             |
| stat value | **15 / 700**                                      | ink       | **103.55 × 22.5** at y 574           |
| tag        | **13 / 600**                                      | `#3d2a18` | **27.5** tall, `padding: 4px 11px`   |

`body` base is **15 px / 1.5**; the card inherits it and every role above overrides size only. The
**only** face loaded is **DM Serif Display 400** (headline + card titles). Body copy, course lines,
labels and tags are the **system UI stack** — that pairing is the design's typographic signature, and
adding a sans webfont would silently change every one of those six roles.

### Component geometry (1,440 px; card 1 at x 150, y 244.5, 362.66 × 434.5)

| part        | geometry                                                                                        |
| ----------- | ----------------------------------------------------------------------------------------------- |
| `main`      | content box **1,140** at x **150** (outer **1,172** at x **134**), `padding: 72px 16px`, **751** tall |
| `header`    | **1,140 × 76.5** at y **72**, centred, `margin-bottom: 96px`                                    |
| grid        | **1,140 × 434.5** at y **244.5**                                                               |
| card        | `padding: 116px 26px 24px`, `border-radius: 28px`, content **310.66** wide                      |
| card shadow | `0 30px 50px -40px rgba(80, 40, 10, .5)`                                                        |
| plate       | **176 × 176**, `border: 8px solid #fff`, shadow `0 18px 30px -12px rgba(80, 40, 10, .45)`       |
| title block | y **386 → 443.5**; link box **307 × 62.75** at x **177.83** (inline, wraps two lines)           |
| blurb       | y **451.5 → 519** (box 67.5; 2 line rects on cards 1–2, **3** on card 3)                        |
| stats       | y **537 → 611.5** (**74.5** = 1 + 14 + 44.5 + 14 + 1)                                          |
| stat cells  | **103.55 × 44.5** at y **552**; `dt` 18 + `margin-top: 4` + `dd` 22.5                          |
| level meter | dots **27 × 7** at x **281.67** (3 × 7 px + 2 × 3 px gap), `gap: 6px` to the word               |
| tags        | y **627.5 → 655**; items **102.17** ("Vegetarian") and **85.2** ("Serves 4")                    |
| card bottom | **679** = tags bottom 655 + **24** padding                                                      |

### Contrast (WCAG 2.1, computed from the measured hex values)

| pair                                          | ratio       | verdict |
| --------------------------------------------- | ----------- | ------- |
| ink `#2a1d12` on card white                   | **16.37:1** | AAA |
| ink on ground `#fbf6ee`                       | **15.21:1** | AAA |
| muted `#5c4a3a` on card white                 | **8.41:1**  | AAA |
| accent `#c2410c` (course line) on white       | **5.18:1**  | AA |
| eyebrow `#9a3412` on ground                   | **6.79:1**  | AA |
| tag ink `#3d2a18` on peach `#fde7d9`          | **11.41:1** | AAA |
| tag ink `#3d2a18` on sage `#e3f1dc`           | **11.59:1** | AAA |
| tag ink `#3d2a18` on butter `#fbeec2`         | **11.74:1** | AAA |
| accent on peach tint `#fde7d9`                | **4.34:1**  | **fails** normal text — and it never has to hold: the course line sits **24 px below the band** |
| dashed rule `#e5d8c8` on white                | **1.40:1**  | decorative only |

The one number to respect: **accent on a tint is 4.34:1**. The reference never puts accent text on the
band, and a port that shortens the top padding or grows the band until the course line rides the tint
would ship sub-AA text.

## Behaviour — this snippet has no script

There is **nothing to port**. `js/` does not exist in the archive, the live HTML loads no script of its
own, and the README's claim of a `js/snippet.js` (defect 4) is stale. The complete interaction surface
is **CSS**:

```css
.cl-card15__plate { transition: transform .6s cubic-bezier(.2, .7, .2, 1); }
.cl-card15:hover .cl-card15__plate { transform: translateX(-50%) rotate(12deg); }
.cl-card15__link:focus-visible::after { outline: 3px solid var(--cl-card15-accent); outline-offset: 4px; }
```

Three things to carry over exactly:

1. **The rotation is on the card, not the link.** `.cl-card15:hover` means the plate spins when the
   pointer enters **any** part of the card — including the band, which is not the link. Porting the
   rule as `a:hover .plate` loses the effect over most of the card's area.
2. **The transition is 0.6 s on `transform` only**, `cubic-bezier(.2, .7, .2, 1)` — slow and eased-out,
   so the plate *turns*, it does not snap. There is no colour, shadow or size change on hover.
3. **The plate's box grows while it rotates.** A 176 px square rotated 12° has a **208.7 px** bounding
   box (`176 × (cos 12° + sin 12°)`), i.e. **16.35 px** further out on each side. With a **26 px**
   column gap that clears by **9.65 px** — it fits, but only because the gap is 26. Never reduce the
   column gap below ~33 px without also shrinking the plate.

**Focus.** `.cl-card15__link:focus-visible { outline: none }` then a ring on the `::after` overlay, so
the ring traces the **whole card** (radius 28) at **4 px** outside it, in accent. Contrast of accent on
the cream ground clears the 3:1 graphical floor comfortably (5.18:1 on white).

## Requirements

### Requirement 1: Page shell and warm ground

The app SHALL render a single `<main>` on the ground `#fbf6ee` with a **1,140 px** content box,
`margin: 0 auto`, `padding: clamp(32px, 6vw, 72px) 16px`, ink `#2a1d12`, containing a `<header>` and the
card grid — and SHALL NOT force a viewport height.

#### Scenario: The stage is content-height, not viewport-height

- **GIVEN** a 1,440 × 900 viewport
- **WHEN** the app has rendered
- **THEN** the content SHALL measure **751 px** tall (the document reports **900** only because the
  viewport is taller than the content) — there is **no** `min-height: 100vh` in the reference
- **AND** the `main` box SHALL be **1,172** wide at **x 134** with its **1,140 px** content at
  **x 150**, because `max-width` applies to the content box (`box-sizing: content-box` on `main`; the
  sheet's `box-sizing` rule targets `.cl-card15 *`, not `main`)
- **AND** the document SHALL be **1,304.66** at 636, **1,645.59** at 430 and **1,903.19** at 320

#### Scenario: No horizontal scroll at any usable width

- **GIVEN** the page at 296 / 300 / 320 / 360 / 390 / 412 / 430 / 480 / 520 / 600 / 617 / 618 / 635 /
  636 / 768 / 800 / 900 / 923 / 924 / 949 / 950 / 1,024 / 1,140 / 1,440
- **WHEN** `window.scrollTo(600, 0)` runs
- **THEN** `scrollX` SHALL be **0** and `documentElement.scrollWidth` SHALL equal `clientWidth`
- **AND** the port SHALL hold that even at 295, 290 and 280, where the reference **overflows by 1 / 6 /
  16 px** (defect 1)

### Requirement 2: The head

The app SHALL render a centred `<header>` containing a **14 px / 700 / .12em / uppercase `#9a3412`**
eyebrow and, **8 px** below it, an `h1` at `clamp(32px, 4.4vw, 50px)` / **400** /
`letter-spacing: -.01em` / `line-height: 1.05` in ink, with `margin-bottom: 96px` on the header.

#### Scenario: The title scales on the clamp and wraps exactly once

- **GIVEN** a 1,440 px viewport
- **WHEN** the `h1` is measured
- **THEN** it SHALL be **50 px in a 52.5 px line box**, one line, **52.5** tall at y **96**
- **AND** at 1,024 it SHALL be **45.056 / 47.31** and at 390 **32 / 33.6** on the clamp floor
  (`32 / 0.044 = 727.27`, so every width at or below 727 renders 32 px)
- **AND** it SHALL be **one line down to 398** (**33.59** tall) and **two lines from 397**
  (**67.19** tall)

#### Scenario: The eyebrow is a label, not a heading

- **GIVEN** the rendered header
- **WHEN** the heading outline is read
- **THEN** the eyebrow SHALL be a `<p>`, **not** an `h2`, so the page exposes exactly **1 `h1`** and
  **3 `h2`** (the dish titles)
- **AND** its measured box SHALL be **1,140 × 16** at x **150**, y **72**, letter-spacing **1.68 px**
- **AND** its colour SHALL be `#9a3412` — a **darker** rust than the card's `#c2410c` accent; the two
  are not interchangeable

### Requirement 3: The grid is arithmetic, not breakpoints

The card grid SHALL be `display: grid; grid-template-columns:
repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 96px 26px`, with **no** column breakpoint, media
query or JS measurement. The `min()` wrapper is a deliberate fix (defect 1) and the only allowed
difference from the reference's `minmax(280px, 1fr)`.

#### Scenario: Column counts at the exact threshold

- **GIVEN** the grid inside its 16 px page padding
- **WHEN** the viewport is swept one pixel across each threshold
- **THEN** there SHALL be **3 columns at 924** with tracks exactly **280.00**, and **2 at 923** with
  **432.50**
- **AND** there SHALL be **2 columns at 618** with tracks exactly **280.00**, and **1 at 617** with
  **585.00**
- **AND** at 1,440 the tracks SHALL measure **362.66 / 362.67 / 362.66** and the grid **1,140** at
  x **150**, y **244.5**

#### Scenario: Rows stretch, cards do not

- **GIVEN** three cards whose blurb copy differs in length
- **WHEN** the grid row is measured at 1,440
- **THEN** all three cards SHALL share one height (**434.5**) because the grid stretches them
- **AND** at **800** card 3 SHALL measure **434.5** while cards 1–2 measure **412**, because card 3 is
  alone in row 2 and each row is sized independently
- **AND** no card SHALL have a `min-height` or a fixed height of its own

### Requirement 4: The card shell

The card SHALL be an `<article>` with `position: relative`, `display: flex; flex-direction: column`,
`padding: 116px 26px 24px`, `border-radius: 28px`, `background: #fff`, base **15 px / 1.5**,
`text-align: center`, `color: #2a1d12` and `box-shadow: 0 30px 50px -40px rgba(80, 40, 10, .5)` — and
`overflow` SHALL stay **visible**.

#### Scenario: The card is not a clipping box

- **GIVEN** a rendered card
- **WHEN** its computed `overflow` is read
- **THEN** it SHALL be `visible` — because the plate renders **76 px above** the card's top edge and any
  `overflow: hidden` deletes it (defect 5)
- **AND** the card's rounded top corners SHALL come from the band's own `border-radius: 28px 28px 0 0`,
  not from clipping a header block

#### Scenario: Hover changes nothing except the plate

- **GIVEN** a card at 1,440
- **WHEN** it is hovered
- **THEN** the card's `transform`, `box-shadow`, `background` and text colours SHALL be **unchanged**
- **AND** the **only** computed change on the card subtree SHALL be the plate's `transform`
  (`matrix(1,0,0,1,-88,0)` → `matrix(0.978148,0.207912,-0.207912,0.978148,-88,0)`, i.e. `rotate(12°)`
  about the plate's centre with the `-88 px` centring translate preserved)

### Requirement 5: The tinted band

The card SHALL paint a tinted band as a `::before` pseudo-element with `inset: 0 0 auto`,
`height: 92px`, `border-radius: 28px 28px 0 0` and `background: var(--tint)` — **not** as a header
element, and **not** as the card's own background.

#### Scenario: Three cards, three tints, one custom property

- **GIVEN** the three cards in reference order
- **WHEN** the band's background is read
- **THEN** card 1 SHALL be **peach `#fde7d9`**, card 2 **sage `#e3f1dc`**, card 3 **butter `#fbeec2`**
- **AND** the tint SHALL come from a per-card custom property (`--cl-card15-tint` in the reference's
  inline `style`), used by **both** the band and the tag pills
- **AND** the band SHALL measure **92** px tall at every card width — it does not scale with the card

### Requirement 6: The plate

The plate SHALL be an absolutely positioned circle at `top: -76px; left: 50%`,
`transform: translateX(-50%)`, **176 × 176**, `border: 8px solid #fff`, `border-radius: 50%`,
`overflow: hidden`, `box-shadow: 0 18px 30px -12px rgba(80, 40, 10, .45)`, containing a
`display: block; width: 100%; height: 100%; object-fit: cover` image.

#### Scenario: The plate's photo bottom lands on the band's bottom edge

- **GIVEN** card 1 at 1,440 (card top y **244.5**, x **150**, width **362.66**)
- **WHEN** the plate and its image are measured
- **THEN** the plate SHALL be **176 × 176** at x **243.33** (centred: `(362.66 − 176) / 2 = 93.33`),
  y **168.5**
- **AND** the image SHALL be **160 × 160** at x **251.33**, y **176.5**, with `bottom: 336.5`
- **AND** the band's bottom edge SHALL be **336.5** — the photo's bottom edge and the band's bottom edge
  SHALL be the **same pixel**, and the 8 px ring SHALL protrude 8 px into the white body
- **AND** at card width **280** the plate SHALL still be **176** across, i.e. **63 %** of the card's
  width, and the band SHALL still be **92** tall

#### Scenario: The plate is a hard square crop of a landscape photo

- **GIVEN** the reference's `700 × 520` source images rendered into a **160 × 160** circle
- **WHEN** the crop is measured
- **THEN** `object-fit: cover` SHALL retain only **520 / 700 = 74.3 %** of each photo's width
  (**12.85 %** cropped from each side) — the plate is not a "fit" thumbnail
- **AND** the port SHALL use `https://picsum.photos/seed/tiffin-1/700/520` … `-3` with
  `width={700} height={520}` and `object-cover`, reproducing the same square crop
- **AND** each image SHALL keep the reference's descriptive alt shape — a short sentence naming the
  dish (`"Thin-crust pizza with tomato, basil and melted cheese on a wooden board"` is the first)

#### Scenario: Placeholder photography, deterministic per card

- **GIVEN** the port (repo rule: never copy source assets)
- **WHEN** the three images render
- **THEN** the first two SHALL load eagerly (`fetchPriority="high"`, `decoding="sync"` in the reference)
  and the third `loading="lazy"` `decoding="async"`
- **AND** every `<img>` SHALL carry a non-empty `alt`

### Requirement 7: The course line

Below the plate the card SHALL start with a `<p>` course line at **13 / 700 / .08em / uppercase** in
accent `#c2410c`, `margin: 0`, positioned in normal flow (it is `position: relative` in the reference so
it paints above the band).

#### Scenario: Three courses, two parts each

- **GIVEN** the three cards
- **WHEN** the course lines are read
- **THEN** they SHALL read **"Main · Italian"**, **"Lunch · Mediterranean"**, **"Dinner · Bowls"**
- **AND** the separator SHALL be a **middle dot (U+00B7)** with a normal space each side, not a hyphen or
  a pipe
- **AND** the line SHALL measure **310.66 × 19.5** at y **360.5** — **116 px** below the card's top edge,
  i.e. **24 px** below the plate's bottom

### Requirement 8: The serif title and the card-wide link

The card title SHALL be an `<h2>` at **25 px / 400 / DM Serif Display / line-height 1.15** with
`margin: 6px 0 8px`, whose only child is the card's single `<a>`, `color: inherit;
text-decoration: none`, with an `::after` overlay at `inset: 0; border-radius: 28px; z-index: 1`.

#### Scenario: Every title is two lines

- **GIVEN** the three cards at 1,440
- **WHEN** the titles are measured
- **THEN** all three SHALL be **57.5** tall in a **28.75** line box, i.e. **two lines**
- **AND** the link's own inline box SHALL be **307 × 62.75** at x **177.83**, y **383** — the link is an
  inline element inside a centred `<h2>`, so its box is the text, not the column

#### Scenario: One anchor, one hit area, no nested controls

- **GIVEN** a card
- **WHEN** the pointer targets the plate, the band, the blurb or the stat table
- **THEN** the click SHALL land on the title anchor, whose `::after` overlay is
  `inset: 0; border-radius: 28px; z-index: 1`
- **AND** the overlay SHALL cover the plate as well, so hovering the plate is hovering the card
- **AND** `document.querySelectorAll('a[href="#"]')` SHALL be **0** in the port (defect 2) — ship a real
  route or a non-anchor

### Requirement 9: The blurb absorbs the slack

The blurb SHALL be a `<p>` at **15 / 1.5** in muted `#5c4a3a` with `margin: 0 0 18px` and **`flex: 1`**.

#### Scenario: Unequal copy, equal cards

- **GIVEN** a row of three cards whose blurbs are 2, 2 and 3 rendered lines
- **WHEN** the row is measured at 1,440
- **THEN** all three cards SHALL be **434.5** tall and all three blurbs SHALL have a **67.5** px box
- **AND** card 3's blurb SHALL show **3** line rects inside that same 67.5 px box — the box is stretched
  by `flex: 1`, so blurb height is **not** its content height
- **AND** the stat table and the tags SHALL therefore sit at the **same y** on all three cards
  (**537** and **627.5**)

### Requirement 10: The stat table

The stats SHALL be a `<dl>` of three `<div>` wrappers, `display: grid;
grid-template-columns: repeat(3, 1fr)`, `margin: 0`, `padding: 14px 0`, with
`border-top` **and** `border-bottom` `1px dashed #e5d8c8`, and `border-left: 1px dashed #e5d8c8` on
every wrapper after the first.

#### Scenario: Three cells, two dashed dividers, one dashed box

- **GIVEN** card 1 at 1,440
- **WHEN** the table is measured
- **THEN** it SHALL be **310.66 × 74.5** at y **537** with cells **103.55 × 44.5** at y **552**
- **AND** cell 1 SHALL have `border-left: 0` and cells 2 and 3 SHALL each have a **1 px dashed**
  `#e5d8c8` left border — measured, not assumed
- **AND** each label SHALL be a `<dt>` at **12 / 600 / .06em / uppercase** in muted (**18** px tall) and
  each value a `<dd>` at **15 / 700** in ink (`margin-top: 4`, **22.5** px tall)
- **AND** the copy SHALL be **"Time / 45 min"**, **"Level / Medium"**, **"Per serving / 610 kcal"**
  (card 1), **"20 min / Easy / 480 kcal"** (card 2), **"35 min / Involved / 540 kcal"** (card 3)

#### Scenario: The level cell is keyed by field, not by position

- **GIVEN** the reference rule `.cl-card15__stats div:nth-child(2) dd { flex-direction: row }`
- **WHEN** the port renders a card whose fields are ordered differently, or omits one
- **THEN** the port SHALL key the row layout off the **field** (a `kind: 'level'` in the data) rather
  than the cell index (defect 3)
- **AND** the level cell's `<dd>` SHALL lay out `row` with `gap: 6px`, while the other two stay `column`
  with `gap: 4px`

### Requirement 11: The difficulty meter

The level value SHALL be a **three-dot meter**: an inline-flex `<span>` with `gap: 3px` holding three
`<i>` at **7 × 7**, `border: 1.5px solid #c2410c`, `border-radius: 50%`, filled with `#c2410c` for the
first *n* dots where *n* is the level, followed by the level's **word**.

#### Scenario: Three cards, three levels, one filled count each

- **GIVEN** the three cards
- **WHEN** the meters are read
- **THEN** card 1 SHALL be `data-level="2"` with **2** filled dots and the word **"Medium"**
- **AND** card 2 SHALL be `data-level="1"` with **1** filled dot and **"Easy"**
- **AND** card 3 SHALL be `data-level="3"` with **3** filled dots and **"Involved"**
- **AND** the meter SHALL measure **27 × 7** (3 × 7 + 2 × 3) and sit **6 px** before the word, vertically
  centred with it

#### Scenario: The dots are decorative, the word is the value

- **GIVEN** the rendered meter
- **WHEN** the accessibility tree is read
- **THEN** the dot span SHALL be `aria-hidden="true"` — the reference does this
- **AND** the dots SHALL **not** be the only carrier of the rating: the port SHALL expose the ordinal
  too (defect 6), because "Easy" / "Medium" / "Involved" alone do not tell a screen-reader user that the
  scale has three steps

### Requirement 12: The tag pills

The tags SHALL be a `<ul aria-label="Tags">` with `display: flex; flex-wrap: wrap;
justify-content: center; gap: 6px; margin: 16px 0 0; padding: 0; list-style: none`, whose `<li>` are
`padding: 4px 11px`, `border-radius: 999px`, `background: var(--tint)`, `color: #3d2a18`,
**13 / 600**.

#### Scenario: Two pills per card, in the card's own tint

- **GIVEN** card 1 at 1,440
- **WHEN** the pills are measured
- **THEN** they SHALL be **102.17** ("Vegetarian") and **85.2** ("Serves 4") wide, **27.5** tall, in a
  **310.66 × 27.5** row at y **627.5**
- **AND** their background SHALL equal the card's band tint — peach / sage / butter respectively
- **AND** the copy SHALL be **"Vegetarian" + "Serves 4"**, **"Vegan option" + "Meal prep"**,
  **"High protein" + "Gluten free"**

#### Scenario: The pills wrap instead of overflowing

- **GIVEN** a card narrower than the two pills plus the gap
- **WHEN** the row is measured
- **THEN** `flex-wrap: wrap` SHALL move the second pill to a second line, centred
- **AND** no pill SHALL be clipped, shrunk or ellipsised

### Requirement 13: The hover rotation

The plate SHALL rotate **12°** clockwise about its own centre when the **card** is hovered, over
**0.6 s** with `cubic-bezier(.2, .7, .2, 1)`, keeping the `translateX(-50%)` centring.

#### Scenario: The plate turns, nothing else moves

- **GIVEN** a card at 1,440 with the pointer outside it
- **WHEN** the pointer enters any part of the card
- **THEN** the plate's `transform` SHALL go from `matrix(1,0,0,1,-88,0)` to
  `matrix(0.978148,0.207912,-0.207912,0.978148,-88,0)` and reach it in **600 ms**
- **AND** the card's own `transform`, shadow, background and type colours SHALL NOT change
- **AND** the rotated plate's bounding box SHALL grow from **176** to **208.7** px
  (`176 × (cos 12° + sin 12°)`) — **16.35** px further out each side, clearing the **26** px column gap
  by **9.65** px

#### Scenario: The trigger is the card, not the link

- **GIVEN** a card whose band and plate are outside the title link's inline box
- **WHEN** the pointer is over the band's top-left corner
- **THEN** the plate SHALL still rotate — the rule is `.card:hover .plate`, not `.link:hover .plate`

### Requirement 14: Focus visibility

The title link SHALL paint its focus ring on the `::after` overlay: `outline: 3px solid #c2410c;
outline-offset: 4px`, so the ring traces the **whole card** at its 28 px radius, **4 px** outside it.

#### Scenario: The ring is the card, not the text

- **GIVEN** keyboard focus on a card's title link
- **WHEN** the ring is inspected
- **THEN** `outline` SHALL be **3 px solid `#c2410c`** at `outline-offset: 4px` on the overlay at
  `inset: 0`, `border-radius: 28px`, `z-index: 1`
- **AND** the link's own `outline` SHALL be `none` — there is no separate text-level ring
- **AND** the ring SHALL clear **3:1** against the cream ground (accent on white measures **5.18:1**)

### Requirement 15: Motion preference

The app SHALL honour `prefers-reduced-motion: reduce` by removing the plate's transition and its hover
rotation, while keeping every static part of the composition.

#### Scenario: Reduced motion freezes the plate upright

- **GIVEN** `prefers-reduced-motion: reduce`
- **WHEN** a card is hovered
- **THEN** the plate's `transition` SHALL be `none` and its `transform` SHALL stay
  `matrix(1,0,0,1,-88,0)` — upright and centred
- **AND** the band, plate ring, shadows and every colour SHALL be identical to the default state

### Requirement 16: Static by design

The app SHALL ship **no** React state, **no** buttons, **no** forms and **no** invented controls: the
reference has **0** `<script>`, **0** `<button>`, **0** `<form>`, **3** links and **3** images.

#### Scenario: Nothing to toggle

- **GIVEN** the shipped app
- **WHEN** `document.querySelectorAll('button, input, select, textarea')` runs
- **THEN** the count SHALL be **0**
- **AND** there SHALL be no `role="status"`, no `aria-live` region, no save/favourite control and no
  filter — adding one is inventing a behaviour the design does not have
- **AND** the only interactive elements SHALL be the **3** title links

### Requirement 17: Porting constraints

The app SHALL contain **no** `colorlib`, `card-15`, `Card V15` or `cl-card15` string anywhere in
`apps/tiffin/`, SHALL ship `public/CNAME` = `tiffin.free.componentdock.com` and `"homepage"` =
`https://tiffin.free.componentdock.com`, SHALL link `https://www.componentdock.com/` as
"Component Dock" once, and SHALL express the tokens in `@theme` rather than inline hex.

#### Scenario: Provenance lives outside the app

- **GIVEN** the shipped app
- **WHEN** `grep -ri 'colorlib\|card-15\|cl-card15' apps/tiffin` runs
- **THEN** it SHALL return **no matches**, and no `cl-` class name SHALL survive into the JSX
- **AND** the footer line SHALL read as a Component Dock attribution, not as a recipe-blog credit

## Screenshot analysis (catalogue image, `card-15.jpg`, AVIF 1200 × 972)

The screenshot is **a browser-window mockup of the live page** — macOS traffic lights, a
`preview.colorlib.com` address field — and shows the whole band in one frame:

- **Ground** warm cream, no band break and no divider: the page *is* three cards on paper.
- **Head** one rust uppercase label above one very large serif line, both centred; the serif is the
  only display type on the page and it is unmistakably high-contrast (thin/thick stress, small serifs).
- **Grid** three cards in one row with tight column gutters (**26 px** — noticeably tighter than the
  head's air) and a lot of air above them, because the plates eat the top of that gap.
- **Plates** three circular dishes, each ringed in white, each **straddling** the card's tinted header
  band so the band is only visible as two coloured shoulders left and right of the plate. This is the
  single most recognisable thing in the mockup.
- **Bands** three colours top-to-bottom of the row: peach, sage, butter — soft, desaturated, and each
  repeated by that card's tag pills. No other saturated colour exists except the rust accents.
- **Titles** two lines each, centred, in the same serif as the page headline at roughly half the size;
  the line breaks fall mid-phrase (*"Sheet-Pan Margherita with / Crispy Basil"*).
- **Stat rows** the quietest element on the card: tiny uppercase labels over bold values, separated by
  **dashed** hairlines — visible as dotted, not solid, at mockup scale.
- **Difficulty dots** read as small filled circles, and the three cards visibly differ (2 / 1 / 3) —
  which is what makes the meter legible without a legend.
- **Tag pills** sit last, centred, in the card's own tint, at the bottom edge with **24 px** of padding
  beneath them.
- The layout is **one screen**: below the cards there is nothing but ground for ~240 px.

At 1,440 in Playwright the live page matches the mockup: three cards, content 751 tall, the rest ground
to 900. At 390 the same composition stacks to one column and every element survives — the plate still
overhangs, the stat table still fits three cells, the pills stay on one line.

## Known reference defects (do not copy)

1. **The grid floor is a bare `280px`.** `minmax(280px, 1fr)` cannot shrink below 280, so below a
   **296 px** viewport the card (280 + 16 px inset) forces the document wider than the viewport —
   `scrollX 1` at 295, **6 px** at 290, **16 px** at 280. Ship `minmax(min(100%, 280px), 1fr)`.
2. **Every title is `href="#"`** (3 anchors), so each click jumps to the top of the document and the app
   has no destination at all. Ship a real route (a recipe page or an in-app detail view) or a non-anchor;
   assert `a[href="#"]` count is **0**.
3. **The `Level` cell is styled by position.** `.cl-card15__stats div:nth-child(2) dd { flex-direction:
   row }` hard-codes "the second field is Level". Reordering the data silently restacks the wrong cell.
   Key the layout off the field in the data, not the index.
4. **The README promises a script that does not exist.** `README.md` lists `js/snippet.js` and calls it
   "the behaviour", but the archive has **no `js/` directory** (12 entries: html, css, README, 3 jpg,
   2 woff2, 5 dirs) and the page loads no script of its own. Do not go looking for behaviour — there
   is none, and the port must not invent one.
5. **A clipping port would delete the plate.** Nothing in the sheet sets `overflow` on `.cl-card15`; the
   plate's whole point is that it renders **76 px above** the card. If `overflow: hidden` is added to the
   card (a very common "tidy the rounded corners" reflex), the plate is cut in half. The band's rounded
   top comes from its own `border-radius`, not from clipping.
6. **The difficulty meter has no ordinal in the accessibility tree.** The dots are `aria-hidden` and only
   the word ("Easy" / "Medium" / "Involved") reaches assistive tech — a scale with no stated size. Keep
   the dots decorative and add the ordinal (e.g. `Level 2 of 3 · Medium` as the `<dd>`'s text or an
   `aria-label` on the `<dd>`).
7. **The snippet styles the host `body`.** `body { margin: 0; background: #fbf6ee; font-family: … }` is
   inside the snippet's own stylesheet — fine for a demo page, wrong for a component. In the port the
   ground and the font stack belong to the app shell, not to a card-level stylesheet.
8. **`.cl-icon` is dead.** Declared (`height: 1em; width: auto; fill: currentColor`) and never used in
   the markup — the 7th consecutive card in this family with the leftover. Do not port it.
9. **The `1.5 px` dot border renders as `1 px`.** `.cl-card15__dots i` declares `border: 1.5px`, and
   Chromium's computed style reports **1 px** at DPR 1. Reproduce the declared 1.5 px; do not "fix" it to
   1 px on the strength of a computed-style reading.
10. **The hover rotation is triggered by the card, not by the link.** Harmless, but it means the plate
    spins when the pointer crosses the band corner on the way somewhere else, and it does not exist on
    touch. Do not move the trigger to the link "for accuracy" — it would reduce the effect's area.

## Adapting to the repo (deltas the implementer owns)

| reference                                     | in `apps/tiffin`                                                               |
| --------------------------------------------- | ------------------------------------------------------------------------------ |
| `.cl-card15*` class names                      | Tailwind utilities; **no** `cl-` class names anywhere                          |
| 2 `@font-face` + 2 `woff2` (DM Serif Display)  | one Google Fonts `<link>`: `family=DM+Serif+Display&display=swap` (weight 400 only); body stays the **system UI stack**, no second webfont |
| inline `style="--cl-card15-tint: …"` per card  | `tint` field in `data.ts`, applied via `style` on the article or a per-card utility class — the band and the pills must read the **same** value |
| `::before` band                                | a `before:` pseudo-element (`before:absolute before:inset-x-0 before:top-0 before:h-[92px] before:rounded-t-[28px] before:bg-[var(--tint)]`) — **not** a `<div>` header and **not** `overflow-hidden` |
| `images/*.jpg` (700 × 520)                     | `https://picsum.photos/seed/tiffin-1/700/520` … `-3`; keep `width={700} height={520}` and `object-cover` |
| `href="#"`                                     | a real `href` per recipe (`/recipes/sheet-pan-margherita`) or a `<button>`; **never** `#` |
| `data-level="1|2|3"` attribute                 | `level: 1 | 2 | 3` in the data + `dots` rendered from `Array.from({length: 3})`; keep the attribute shape only if it reads well |
| `box-sizing` reset + `:where(html) … { all: revert }` | drop entirely — Tailwind preflight owns both |
| no footer                                      | one Component Dock attribution line, under the grid in the same content column |

`src/index.css` `@theme` tokens to declare (exact measured values):

```css
--color-ground:    #fbf6ee;
--color-ink:       #2a1d12;
--color-muted:     #5c4a3a;
--color-accent:    #c2410c;
--color-eyebrow:   #9a3412;
--color-tag-ink:   #3d2a18;
--color-rule:      #e5d8c8;
--color-tint-peach:  #fde7d9;
--color-tint-sage:   #e3f1dc;
--color-tint-butter: #fbeec2;
--font-display:    "DM Serif Display", Georgia, serif;
--radius-card:     28px;
--shadow-card:     0 30px 50px -40px rgb(80 40 10 / 0.5);
--shadow-plate:    0 18px 30px -12px rgb(80 40 10 / 0.45);
```

Data shape the tests should pin (one object per recipe): `id`, `course`, `title`, `href`, `blurb`,
`time`, `level: 1 | 2 | 3` + `levelLabel`, `kcal`, `tags: string[]`, `tint`, `image: { src, alt }`.

**Suggested component split** (mirrors other card apps): `App.tsx` (ground + head + grid + footer,
no state), `components/RecipeHead.tsx`, `components/RecipeGrid.tsx`, `components/RecipeCard.tsx`,
`components/DifficultyMeter.tsx`, `components/TagPills.tsx`, `data.ts`.

**Coverage notes.** There is **no state, no timer, no observer and no async** in this design — the whole
surface is a pure render, so 100 % coverage comes from rendering and measuring the DOM. Assert: three
cards with their exact copy; the three tints applied to both band and pills; the three levels produce
3/2/1 filled dots; `a[href="#"]` is 0 and `button`/`input`/`textarea` counts are 0; every `<img>` has a
non-empty alt; `aria-hidden` on the dot span. Do **not** try to assert the rotation in jsdom (no
layout, no `:hover`) — assert the classes/props that carry it, and leave the 12° to the browser check.

## Verification checklist

- [ ] `apps/tiffin` exists, package `@free-react-templates/tiffin`, `public/CNAME` =
      `tiffin.free.componentdock.com`, `"homepage"` = `https://tiffin.free.componentdock.com`
- [ ] `grep -ri 'colorlib\|card-15\|Card V15\|cl-card15' apps/tiffin` → **no matches**
- [ ] page: `#fbf6ee` ground, **1,140 px** content box (outer **1,172** at x **134**, content at
      x **150**), padding **72 / 16** at 1,440 and **32 / 16** at 390; content height **751**;
      **no** `min-height: 100vh`
- [ ] head: centred; eyebrow 14/700/.12em uppercase `#9a3412` (**1,140 × 16** at y 72); `h1`
      `clamp(32px,4.4vw,50px)`/400/−.01em/1.05 → **50 / 52.5** at 1,440, **45.056 / 47.31** at 1,024,
      **32 / 33.6** at 390; **one line down to 398**, **two from 397**; header `margin-bottom: 96px`
- [ ] grid: `repeat(auto-fit, minmax(min(100%, 280px), 1fr))`, `gap: 96px 26px`; **3 columns at 924**
      (tracks exactly **280.00**), **2 at 923** (**432.50**); **2 at 618** (**280.00**), **1 at 617**
      (**585**); **362.66 / 362.67 / 362.66** at 1,440
- [ ] cards: white, radius **28**, `padding: 116px 26px 24px`, `overflow: visible`, base **15 / 1.5**,
      centred, shadow `0 30px 50px -40px rgba(80,40,10,.5)`; **434.5** tall at 1,440
- [ ] band: `::before` at `inset: 0 0 auto`, **92 px**, `border-radius: 28px 28px 0 0`, per-card tint
      (peach / sage / butter) — not a header element, not the card background
- [ ] plate: **176 × 176** at `top: -76px`, centred, `border: 8px solid #fff`, radius **50 %**,
      `overflow: hidden`, shadow `0 18px 30px -12px rgba(80,40,10,.45)`; image **160 × 160**
      `object-fit: cover`; photo bottom **=** band bottom (336.5 at 1,440)
- [ ] plate crop: `700 × 520` source into **160 × 160** keeps **74.3 %** of the width; picsum
      `tiffin-1` … `-3`; first two eager, third `loading="lazy"`; every alt non-empty
- [ ] course: **13 / 700 / .08em** uppercase `#c2410c`, **310.66 × 19.5** at y 360.5 (**116** below the
      card top, **24** below the plate); middle dot **U+00B7** separator
- [ ] title: **25 / 400 / DM Serif / 1.15**, `margin: 6px 0 8px`, **57.5** tall (two lines) on all three;
      link box **307 × 62.75**; `::after` overlay `inset: 0`, radius **28**, `z-index: 1`; **0**
      `a[href="#"]`
- [ ] blurb: **15 / 1.5**, `#5c4a3a`, `margin-bottom: 18`, **`flex: 1`**; box **67.5** on all three at
      1,440 (card 3 shows **3** line rects inside it)
- [ ] stats: `repeat(3, 1fr)`, `padding: 14px 0`, **dashed** `#e5d8c8` top + bottom + a left border on
      cells 2–3 only; row **74.5** at y **537**; cells **103.55 × 44.5**; `dt` 12/600/.06em muted
      (**18**), `dd` 15/700 ink (**22.5**)
- [ ] level: three **7 × 7** dots, `border: 1.5px solid #c2410c`, `gap: 3px`, filled per level
      (**2 / 1 / 3**), meter **27 × 7**, **6 px** to the word; dot span `aria-hidden`; ordinal exposed
- [ ] tags: `<ul>` flex-wrap centred, `gap: 6px`, `margin-top: 16`; `<li>` `padding: 4px 11px`,
      radius **999**, bg **= band tint**, text `#3d2a18` 13/600; items **102.17 / 85.2**, row **27.5**
      at y 627.5; **24 px** to the card bottom
- [ ] hover: card `:hover` → plate `rotate(12deg)` over **0.6 s** `cubic-bezier(.2,.7,.2,1)` with the
      `-88 px` translate kept; **no** other computed change on the card subtree
- [ ] a11y: **1 `h1`**, **3 `h2`**, **3 `<article>`**, **3 links**, **0** buttons, **0** forms,
      **3** images with alts, **3** focusables; focus ring **3 px `#c2410c` / 4 px offset** on the card
      overlay at radius 28
- [ ] `prefers-reduced-motion: reduce` → transition `none`, plate stays upright, everything else identical
- [ ] static by design: **0** `button, input, select, textarea`; no `role="status"`, no `aria-live`, no
      save/favourite/filter control
- [ ] no horizontal scroll: `scrollTo(600,0) → scrollX 0` at 296 / 320 / 360 / 390 / 430 / 480 / 520 /
      617 / 618 / 635 / 636 / 768 / 800 / 900 / 923 / 924 / 950 / 1,024 / 1,140 / 1,440
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app tiffin` (typecheck + lint + knip + fallow + 100 % coverage + build) passes;
      `openspec validate template-tiffin --type spec` is valid
