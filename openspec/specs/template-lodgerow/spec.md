# Template: Lodgerow (Stay-listing cards — three wide photo-left rental cards with favourite/deal badges, rating lines, amenity chips and a price-per-night block)

## Purpose

A **short-term-rental listing page**: one head line ("3 stays for 12 – 17 Oct") and a single
**column of three wide cards**, each split **5 : 7** into a photo panel and a body. The body is a
five-part stack — **location** in teal with a pin glyph, a **22 px listing title** that is the card's
only link, a **star rating line**, a row of **amenity chips**, and a **foot** separated by a hairline
that carries the **price block** (24 px nightly rate + a muted total line) on the left and a **teal
"View stay" pill** on the right. The photo panel carries an optional **badge** at its top-left:
a white **"Guest favourite"** pill or a rose **"15% off this week"** pill — and the middle card has
none. ColorLib's own listing states the brief in one line:

> "Wide cards with a photo on the left and the listing on the right: location, title, rating, amenity
> chips and a price block with the total for the stay. On phones the photo moves on top and the card
> stacks. It is plain HTML and CSS: no jQuery, no Bootstrap files, no plugins, and the download is
> 486 KB."

and lists the five features as "Image-left layout that stacks below 640px · Whole-card link with a
focus ring on the card · Amenity chips with inline SVG icons · Price per night plus total, with a
discount variant · Badges for favourites and deals". That feature list is the design: everything not
in it (filters, a map, a search bar, pagination, a booking form) is absent, and adding any of it is a
different template.

This is the **seventh member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**)
and the family's **first photographic member**: `card-01` … `card-06` were type-and-geometry cards
(profile, product, article, pricing, testimonial, KPI) and `card-02` was the only one with any imagery
at all. Lodgerow is also the family's first with

- **real photography as one half of the card** (three 700 × 560 JPEGs, absolutely positioned behind
  an `object-fit: cover` img in a panel whose height is imposed by the body),
- **a stretched-link overlay** (`.cl-card07__link::after { inset: 0; z-index: 1 }`) — one real anchor
  per card, everything else decorative,
- **a container query** (`container-type: inline-size` + `@container (max-width: 600px)`) instead of a
  viewport query for the body's padding,
- **an image transform on hover** (`scale(1.04)` over `.6s`), and
- **three different card heights on one page** below 732 px (the cards are independent rows of a
  one-column grid, not stretched peers).

The personality is in six small, copyable details; lose any of them and a correct palette still reads
as a generic "listing card":

1. **The split is `minmax(0, 5fr) minmax(0, 7fr)` of the card's own content box** — 382.5 / 535.5 of
   918 px at 920 wide — and the photo panel has **no fixed height**: `min-height: 220px` only floors
   it, so on desktop it is exactly as tall as the body's content (**263.75 px**). The photo is
   `position: absolute; inset: 0; object-fit: cover`, so it crops, never squashes.
2. **The whole card is the link.** The `<h2>` wraps one `<a class="cl-card07__link" href="#">` whose
   `::after` covers the card at `z-index: 1`; the visible **"View stay" pill is a
   `span[aria-hidden="true"]`** — decoration, not a control. The card therefore has **one focusable
   element** and its focus indicator is the **parent's** `:focus-within { box-shadow: 0 0 0 3px
   var(--accent) }` (the link itself sets `outline: none`).
3. **Badges are a two-variant pair plus absence.** White/near-black "Guest favourite", rose
   `#be123c`/white "15% off this week", and card 2 carries no badge — three states, one component:
   `badge: null | "favourite" | "deal"`.
4. **Money is two lines with different metrics, and the discount variant adds a third token.** The
   nightly rate is `strong` at **24 px / 700 / −.02em**; the total is a `span` at **13.5 px** muted;
   card 3 prepends `<del>€990</del>` **inside the total line** (line-through, same 13.5 px). The
   reference's own arithmetic is inconsistent — see §Known reference defects 6.
5. **Hover changes four things at once**: border `#e2e9e7 → #cfdcd9`, a `0 20px 40px -28px
   rgba(16,35,31,.45)` shadow, the image `scale(1.04)` over `.6s`, and the CTA's `gap 8 → 12` with
   `background #0f766e → #115e59` over `.2s`. `prefers-reduced-motion: reduce` removes the
   transitions **and** the image transform, but the colours still change.
6. **The only viewport query is the 640 stack.** Everything else is arithmetic: the head's clamp, the
   5/7 split, the chips' `flex-wrap`, the foot's `flex-wrap: wrap` + `align-items: flex-end`, and the
   body's padding, which responds to **the card's own width** at `≤ 600` content (fires at viewport
   **634**, not at 635).

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-25)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,887 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-07` is the **seventh member of the `card` snippet family** and one of the **214 snippet variants
in 19 families** the listing carries and `TEMPLATES.md` does not. The 42 standalone designs in that gap
are all prepped; the snippet families are the remaining queue, worked **in family order, then variant
number**. `card-01` → **Nameplate** (`1a09a0c7b`), `card-02` → **Marketrow** (`780313169`), `card-03` →
**Octavo** (`2a8371ce0`), `card-04` → **Tierline** (`9e6e58563`), `card-05` → **Plaudit** (`7487355a6`)
and `card-06` → **Statline** (`7113c220a`) came first.

When the app ships, its row belongs in a new family section **`## Bootstrap Cards (20)`**, inserted
**after `## Bootstrap Carousels (20)` (line ~710) and before `## Bootstrap Checkboxes (20)` (line
~733)**, with that heading's count set to 20. No such section exists on main today (0 hits for
`## Bootstrap Cards`), so the first card that ships has to create it — the six earlier card preps all
carry the same instruction. The row for this design is:

```markdown
- [x] **Card 07** — [colorlib](https://colorlib.com/wp/template/card-07/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-07.jpg) · [lodgerow](https://lodgerow.free.componentdock.com)
```

(Adding the whole section's rows is a **batch** decision for the implementer stream, not a prep-run
side effect — this prep touches no shared file.)

**The name.** `lodgerow` — one lowercase word, in no app folder, no spec folder, and `git grep -il
lodgerow origin/main` returns **0** files (the substring test, which is the stricter one this pipeline
uses); the ColorLib catalogue URLs `colorlib.com/wp/template/lodgerow/`,
`preview.colorlib.com/theme/lodgerow/` and `preview.colorlib.com/theme/bootstrap/lodgerow/` all answer
**404** (`wp/` = 63,534 B 404 page, the two preview paths 9 B). Free alternates measured the same day,
if a later stream needs one: `stayline`, `roomline`, `guestline`, `nightrow`, `bedpost`, `seastay`,
`tariffcard`, `suitekey` (each 0 substring hits, 0 `apps/` hit, 0 spec folder). Adjacent words are
**taken**: `lodgerow`-neighbours `hedgerow`, `rowline`, `rowcard`, `lodge`, `lodgely`,
`stayly`, `stayhaven`, `stayquest`, `luxstay`, `grandstay`, `namastay`, `pawstay`, `sunlodge`,
`staybook`, `staycraft`, `reglodge` all exist as apps or specs; `rowglow`, `rowdeck`, `rowspan`,
`rowtint`, `prowess`, `trowel` are apps too. Do not "reuse" any of them.

## Reference readings (2026-10-25, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 6,427 B**, `<title>` "Card V07 \| Colorlib", `lang="en"`, one stylesheet, **0 `<script>`**                 |
| preview path      | **`theme/bootstrap/card-07/index.html`** — the directory form `…/bootstrap/card-07/` is the same 6,427 B; `theme/card-07/`, `theme/card-07/index.html` and `theme/bb/card-07/` are **404** (9 B) |
| ColorLib page     | `https://colorlib.com/wp/template/card-07/` **200, 113,377 B**; "Released: September 2026", "License: CC BY 3.0", author Aigars Silkalns; **states "the download is 486 KB"** |
| stylesheet        | `css/style.css?v=ab980b1a`, **10,026 B**, sha256 `cf06042c8c8ca8d99fa8bd7b736a90549b371818fb86a6e1dc9abaf91fc8f2ab`; the zip twin is **byte-identical** |
| archive           | `preview.colorlib.com/downloads/free/card-07.zip`, **200, 497,801 B** (= 486 KiB ✓), **18 entries**: 4 dirs + `index.html` 6,129 B + `css/style.css` 10,026 B + `README.md` 1,260 B + **3 JPEGs** + **8 `woff2`** |
| live ↔ archive    | CSS **identical sha256** and all three images **identical sha256** (lodge `94055fb5…`, resort `53adcb01…`, santorini `3d81c0a4…`) → **live preview verified; the archive is its un-versioned twin** |
| `js/snippet.js`   | **404** — no `js/` directory in the archive and **no `<script>` in the file**; the archive README claims one (**defect 1**) |
| fonts             | 8 `@font-face` rules (Outfit **400 / 500 / 600 / 700**, `latin` + `latin-ext`) but only **2 distinct binaries**: the four `latin` files are byte-identical (sha256 `92684e4a…`, 32,228 B each) and the four `latin-ext` files likewise (`9e38b3f1…`, 14,760 B each) → **500/600/700 are faux-bold over the Regular binary** (**defect 2**) |
| images            | **3**, all `700 × 560` progressive JPEG RGB: `lodge.jpg` 104,686 B, `resort.jpg` 125,181 B, `santorini.jpg` 74,455 B. Live adds `fetchpriority="high" decoding="sync"` to cards 1–2 and `loading="lazy" decoding="async"` to card 3 |
| SVG               | **6 per card**: 1 pin (16 × 16, stroke 2), 1 star (16 × 16, **filled** `#10231f`), 3 amenity glyphs (16 × 16, stroke 1.8, round caps/joins), 1 CTA arrow (18 × 18, stroke 2) → **18** on the page |
| classes           | **19** in the markup, **19** selected by the sheet → **1 dead selector**, `.cl-icon` (sixth sibling in a row) and **0 unstyled markup classes** |
| anchors           | **3**, all dead `href="#"` (the three title links); **0 forms, 0 buttons**, **3 focusable elements** on the page |
| headings          | 1 × `h1` ("3 stays for 12 – 17 Oct") + **3 × `h2`**, one per listing title                                |
| blocks            | `<main>` → `<header>` (`h1` + sub `<p>`) → `<div class="cl-card07-list">` of **3 `<article>`**             |
| media queries     | **2** — `@media (max-width: 640px)` (2 rules: single column + `aspect-ratio: 16 / 10` media) and `@media (prefers-reduced-motion: reduce)` (2 rules). Plus **1 `@container (max-width: 600px)`** (1 rule) |
| keyframes         | **none** — 0 `@keyframes`; motion is the card's hover transitions only                                    |
| custom properties | **4**: `--cl-card07-accent: #0f766e`, `--cl-card07-ink: #10231f`, `--cl-card07-muted: #4a5c58`, `--cl-card07-line: #e2e9e7` — all declared on `.cl-card07` and **never re-set** (unlike `card-06`'s per-card accent) |
| authored scripts  | **0**. The **10** `<script>` elements a browser sees are host injections (gtag `G-SEKJ4E9T4H`, Cloudflare Zaraz `/cdn-cgi/zaraz/s.js`, `/s9cc/`, `dataLayer`, `beacon.min.js`) — `curl` gets the file with none |
| content height    | **1,054.34** at 1,440 and 1,280 · 1,049.2 at 1,024 · 1,030.4 at 900 · 1,009.4 at 768 · **1,164.1** at 700 · 1,258.1 at 660 · **2,130.2** at 640 · 2,128.2 at 639 · 2,072.3 at 620 · 2,032.4 at 600 · 1,892.4 at 390 · 1,836.1 at 360 · **1,898.1** at 320 |
| horizontal scroll | **none at any width probed** — `body.scrollWidth === clientWidth` **and** `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 640 / 768 |

## Design tokens (measured from `style.css`, 10,026 B, and from `getComputedStyle` at 1440 px)

### Palette — a cool mint-tinted ground, a deep green-black ink, and one teal

| role                | value       | where                                                                       |
| ------------------- | ----------- | --------------------------------------------------------------------------- |
| page ground         | `#f3f6f5`   | `body` background — a **cool mint-grey**, not white, not `#f8fafc`; not a Tailwind step (nearest `slate-50` `#f8fafc`, `gray-50` `#f9fafb`) |
| band ink            | `#10231f`   | `.cl-card07-demo` `color` and `--cl-card07-ink` — a green-black, 16.38:1 on white |
| sub-copy            | `#4a5c58`   | `-demo__sub`; also `--cl-card07-muted` (total line, `del`, "night")         |
| card surface        | `#ffffff`   | `.cl-card07` background                                                     |
| card border         | `#e2e9e7`   | `border: 1px solid` = `--cl-card07-line`; **hover** `#cfdcd9`               |
| media ground        | `#dbe5e2`   | `__media` background — the placeholder seen while a photo loads            |
| accent (teal)       | `#0f766e`   | `--cl-card07-accent`: location line, CTA fill, **focus ring** — teal-700     |
| accent hover        | `#115e59`   | CTA background on card hover — teal-800                                     |
| chip ground         | `#f0f5f4`   | `__amenities li` background                                                 |
| chip ink            | `#26403a`   | `__amenities li` color (icon inherited from it, `stroke: currentColor`)     |
| badge (favourite)   | `#ffffff` on `#10231f` | `__badge` — white pill, ink text, `0 4px 14px rgba(0,0,0,.15)`     |
| badge (deal)        | `#be123c` + white      | `__badge--deal` — rose-700, no shadow difference                    |
| star                | `#10231f`   | `__rating svg { fill: #10231f }` — the one filled glyph on the card        |
| hover shadow        | `rgba(16,35,31,.45)` | `0 20px 40px -28px` — tinted with the ink, **not** black            |
| focus ring          | `#0f766e`   | `:focus-within { box-shadow: 0 0 0 3px var(--accent) }`                     |

**Two of these are off-ramp and matter.** The ground `#f3f6f5` and the line `#e2e9e7` are neither
Tailwind greys nor Tailwind `teal` steps; the accent pair `#0f766e` / `#115e59` **is** stock
`teal-700` / `teal-800`, and the deal badge is stock `rose-700`. So this is a *nearly* stock-Tailwind
palette with two hand-mixed neutrals: do not "tidy" the ground to `slate-50` or the border to
`gray-200`, or the page turns from mint-cool to neutral-grey.

Measured contrast (WCAG 2.1, computed from the tokens above):

| pair                                  | ratio  | verdict |
| ------------------------------------- | -----: | ------- |
| accent `#0f766e` on card white        | 5.47:1 | AA for 14 px 600 text (location line) |
| accent on page ground `#f3f6f5`       | 5.03:1 | AA |
| muted `#4a5c58` on white              | 7.09:1 | AAA |
| muted on page ground                  | 6.52:1 | AAA |
| chip ink `#26403a` on chip `#f0f5f4`  | 10.16:1 | AAA |
| teal icon on chip ground              | 4.97:1 | AA (non-text: AA at 3:1) |
| white on CTA `#0f766e`                | 5.47:1 | AA for the 15 px 600 label |
| white on CTA hover `#115e59`          | 7.58:1 | AAA |
| white on deal badge `#be123c`         | 6.29:1 | AA |
| ink `#10231f` on white / on ground    | 16.38 / 15.06 | AAA |
| ink on media ground `#dbe5e2`         | 12.73:1 | AAA |

### Type — one face, four declared weights, two real

| element                | family                        | size / line-height       | weight | tracking      | colour     |
| ---------------------- | ----------------------------- | ------------------------ | ------ | ------------- | ---------- |
| `h1` (`-demo__title`)  | `Outfit, system-ui, …`        | `clamp(26px,3.4vw,34px)` / **1.15** | **700** | `−.02em` | `#10231f` |
| sub (`-demo__sub`)     | `Outfit, system-ui, …`        | **16** / normal (20 box) | 400    | —             | `#4a5c58`  |
| location (`__place`)   | `Outfit, system-ui, …`        | **14** / 1.5 (21)        | **600** | —            | `#0f766e`  |
| title (`__title`)      | `Outfit, system-ui, …`        | **22** / **1.25** (27.5) | **600** | `−.01em`      | `#10231f`  |
| rating (`__rating`)    | `Outfit, system-ui, …`        | **14.5** / 1.5 (21.75)   | 400    | —             | ink + `#4a5c58` for the count |
| chip label             | `Outfit, system-ui, …`        | **13.5** / 1.5 (20.25)   | **500** | —            | `#26403a`  |
| price `strong`         | `Outfit, system-ui, …`        | **24** / 1.5 (36)        | **700** | `−.02em`      | `#10231f`  |
| price `span` (total)   | `Outfit, system-ui, …`        | **13.5** / 1.5 (20.25)   | 400    | —             | `#4a5c58`  |
| CTA (`__cta`)          | `Outfit, system-ui, …`        | **15** / 1.5 (22.5)      | **600** | —             | `#ffffff`  |
| badge                  | `Outfit, system-ui, …`        | **13** / 1.5 (19.5)      | **600** | —             | ink or white |
| card base              | `Outfit, system-ui, …`        | **15** / 1.5             | 400    | —             | ink        |

`h1` resolves to **34 px** at ≥ 1,000 (3.4vw × 1,000 = 34), **30.6** at 900, **26.11** at 768 and
**26** at ≤ 764.6.

**Face delivery — the same trap as `card-06`, a different binary.** Eight `@font-face` rules point at
eight file names but **two binaries**: the four `*-latin.woff2` files are byte-identical (sha256
`92684e4a…`, 32,228 B) and the four `*-latin-ext.woff2` files likewise (`9e38b3f1…`, 14,760 B).
Chromium loads and reports all four weights `loaded`, but the glyphs are the Regular cut with the
browser's **synthetic emboldening**. Canvas measure of `"€214 night Hvar"` at 30 px:

| weight | reference | Google Outfit (real) | delta |
| -----: | --------: | -------------------: | ----: |
|    400 |    210.00 |               210.00 |  0 %  |
|    500 |    216.00 |               214.00 | +0.9 % |
|    600 |    220.00 |               219.00 | +0.5 % |
|    700 |    224.00 |               220.00 | **+1.8 %** |

400 is identical to Google's Outfit Regular — proof that the binary is Regular — and everything above
it is synthesised. Consequence: **bundle nothing and prescribe one Google Fonts `<link>` for real
Outfit `400;500;600;700`.** The layout barely moves (the reference's faux 700 is 1.8 % *wider* than
real, i.e. our real-bold headings will be marginally narrower and lighter), and that is a **delta to
state in the PR**, never a reason to set `font-synthesis: none` (which would flatten the reference's
700 to 400).

### Radii, rules, decoration, motion

| token                  | value                                                                 |
| ---------------------- | --------------------------------------------------------------------- |
| card radius            | **20 px** — the page's large radius, `overflow: hidden` so the hover-zoomed photo is clipped |
| badge radius           | **999 px** (pill) on 126 × 29.5 (favourite) / 131 × 29.5 (deal)        |
| amenity chip radius    | **10 px** on 32.25 tall                                               |
| CTA radius             | **12 px** on 131 × 44.5                                               |
| card border            | `1 px solid #e2e9e7` → `#cfdcd9` on hover                             |
| foot rule              | `1 px solid #e2e9e7`, `padding-top: 16px`                             |
| card shadow            | **none at rest** → `0 20px 40px -28px rgba(16,35,31,.45)` on hover    |
| badge shadow           | `0 4px 14px rgba(0,0,0,.15)` — the only shadow at rest                |
| focus ring             | `0 0 0 3px #0f766e` via `:focus-within`; the link itself is `outline: none` |
| motion                 | card `box-shadow .3s, border-color .3s` · image `transform .6s` · CTA `background-color .2s, gap .2s` |
| reduced motion         | the three `transition`s become `none` **and** the hover zoom is removed; hover colours still change |
| keyframes              | **none**                                                              |
| page background image  | **none**                                                              |
| `box-sizing`           | `border-box` **only inside `.cl-card07 *`** — the container stays `content-box` (see below) |

### Layout — one centred column, a 5/7 split, and a container query

- `body { margin: 0; background: #f3f6f5; font-family: "Outfit", system-ui, … }`.
- `.cl-card07-demo`: `max-width: 920px`, `margin: 0 auto`, `padding: clamp(32px, 6vw, 64px) 16px`,
  `color: #10231f`. **`box-sizing` is the browser default (content-box)** — the sheet's `all: revert`
  guard resets it and the container is *not* inside `.cl-card07 *` — so the **outer box is 952 px**
  and the content box 920. ⚠️ In Tailwind/preflight (`border-box`) `max-w-[920px] px-4` gives an
  888 px card, not 920. Prescribe **`max-w-[952px] px-4`** (content 920) or `max-w-[920px]` with the
  horizontal padding on an inner wrapper.
- `.cl-card07-demo__head`: `margin-bottom: 24px`; `__title` `margin: 0`; `__sub` `margin: 6px 0 0`.
- `.cl-card07-list`: `display: grid`, `gap: 20px` — **one column at every width**; there is no
  multi-column grid on this page and no `auto-fit`. Stacking is *inside* each card, not the list.
- `.cl-card07`: `display: grid`, `grid-template-columns: minmax(0,5fr) minmax(0,7fr)`,
  `border: 1px solid`, `border-radius: 20px`, `background: #fff`, `font-size: 15px`, `line-height:
  1.5`, `overflow: hidden`, `position: relative`, **`container-type: inline-size`**,
  `transition: box-shadow .3s ease, border-color .3s ease`.
- `.cl-card07__body`: `display: flex; flex-direction: column; padding: 22px 26px 22px`; the **foot has
  `margin-top: auto`**, which is what pins the price row to the bottom when the media is the taller
  box… except on desktop the media is *shorter*, so the body is the height source (see geometry).
- `@container (max-width: 600px)` → `__body { padding: 18px 18px 20px }`. The container is the card,
  so the measured value is its **content box** (card width − 2 borders): the query **fires at
  viewport 634** (card 602, content 600) and **does not fire at 635** (content 601).
- `@media (max-width: 640px)` → single column (`grid-template-columns: 1fr`) and
  `__media { min-height: 0; aspect-ratio: 16 / 10 }`. **640 stacks, 641 does not** (bisected).
- Vertical padding: `clamp(32px, 6vw, 64px)` → **64** at ≥ 1,066.7, **61.44** at 1,024, **54** at 900,
  **46.08** at 768, **42** at 700, **38.4** at 640, **36** at 600, **32** at ≤ 533.3.
- Band height = `2·padY + head + 24 + Σ cardH + 2·20`; every row of the matrix below satisfies it.

### Component geometry (1440 px, card 1, coordinates relative to the card's border box)

| element            | geometry                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------- |
| card               | **920 × 265.75** at x 260, y **153.09** (head bottom + 24); radius 20; border 1 → content 918 |
| `__media`          | **382.5 × 263.75** at (1, 1) = **5/12 of 918**; `position: relative`; ground `#dbe5e2`        |
| `__img`            | 382.5 × 263.75 at (1, 1) — `position: absolute; inset: 0; object-fit: cover`; `transform: scale(1.04)` on card hover |
| `__badge`          | **126 × 29.5** at (**15, 15**) = 14 px inset + 1 px border; `padding: 5px 12px`, radius 999, shadow `0 4px 14px rgba(0,0,0,.15)`; deal variant **131** wide |
| `__body`           | **535.5 × 263.75** at x **383.5** = 7/12 of 918; `padding: 22px 26px` → content **483.5** at x 409.5 |
| `__place`          | 483.5 × **21** at y **23**; `inline-flex; gap: 6`; 14 px/600 teal; 16 × 16 pin, `stroke-width: 2`, `fill: none` |
| `__title`          | 483.5 × **27.5** at y **48** (`margin: 4px 0 6px`); 22/600/1.25/−.01em; **one line at ≥ 733**, two at ≤ 732 |
| `__rating`         | 483.5 × **21.75** at y **81.5**; `gap: 5`; 14.5 px; 16 × 16 **filled** star; `strong` 4.92 + `span` "(128 reviews)" in `#4a5c58` |
| `__amenities`      | 483.5 × **32.25** at y **119.25** (`margin: 16px 0 18px`, `gap: 8`); chips **121 / 96 / 122** × 32.25 |
| chip               | `inline-flex; gap: 6; padding: 6px 11px`; radius 10; 13.5/500; 16 × 16 glyph `stroke-width: 1.8` |
| `__foot`           | 483.5 × **73.25** at y **169.5** = 1 px rule + 16 pad + **56.25** content; `flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 14; margin-top: auto` |
| `__price`          | **144 × 56.25** at y 186.5: `strong` 24/700 on a 36 px line + `span` 13.5 on 20.25 (so 36 + 20.25) |
| `__cta`            | **131 × 44.5** at x **762** (right edge 893 = body content right), y 198.25 — bottom-aligned with the price block; `padding: 11px 18px`, radius 12, `gap: 8`, 18 × 18 arrow |
| SVG on the card    | 6: pin 16, star 16, 3 × amenity 16, arrow 18 (18 total on the page)                          |

### Responsive matrix (measured; `cardH` is per card because the cards do **not** share a height)

| viewport | layout        | card W | cardH (1 / 2 / 3)              | media        | body pad        | head   | `h1` | band    |
| -------: | ------------- | -----: | ------------------------------ | ------------ | --------------- | -----: | ---: | ------: |
|      320 | stacked       |    288 | 564.75 / 564.75 / 564.75       | 286 × 178.75 | `18 18 20`      |  75.89 |   26 | 1,898.1 |
|      360 | stacked       |    328 | 531.25 / 531.25 / **589.75**   | 326 × 203.75 | `18 18 20`      |  55.89 |   26 | 1,836.1 |
|      390 | stacked       |    358 | 550 / 550 / **608.5**          | 356 × 222.5  | `18 18 20`      |  55.89 |   26 | 1,892.4 |
|      634 | stacked       |    602 | — (container query fires)      | 600 × 375    | `18 18 20`      |  55.89 |   26 |     —   |
|      635 | stacked       |    603 | — (does not fire)              | 601 × 375.6  | `22 26`         |  55.89 |   26 |     —   |
|      640 | stacked       |    608 | 644.5 / 644.5 / 644.5          | 606 × 378.75 | `22 26`         |  55.89 |   26 | 2,130.2 |
|      641 | split         |    609 | 333.5 / 333.5 / **392**        | 252.9 × 331.5 | `22 26`        |  55.89 |   26 |     —   |
|      660 | split         |    628 | 333.5 / 333.5 / **392**        | 260.8 × 331.5 | `22 26`        |  55.89 |   26 | 1,258.1 |
|      700 | split         |    668 | 333.5 / 333.5 / **293.25**     | 277.5 × 331.5 | `22 26`        |  55.89 |   26 | 1,164.1 |
|      732 | split         |    700 | **293.25** (title wraps)       | 290.3 × 331.5 | `22 26`        |  55.89 |   26 |     —   |
|      733 | split         |    701 | 265.75 / 265.75 / 265.75       | 290.8 × 263.75 | `22 26`       |  55.89 |   26 |     —   |
|      768 | split         |    736 | 265.75 / 265.75 / 265.75       | 305.8 × 263.75 | `22 26`       |  56.02 |   26.11 | 1,009.4 |
|      900 | split         |    868 | 265.75 / 265.75 / 265.75       | 360.8 × 263.75 | `22 26`       |  61.17 |   30.6 | 1,030.4 |
|    1,024 | split         |    920 | 265.75 / 265.75 / 265.75       | 382.5 × 263.75 | `22 26`       |  65.09 |   34 | 1,049.2 |
|    1,280 | split         |    920 | 265.75 / 265.75 / 265.75       | 382.5 × 263.75 | `22 26`       |  65.09 |   34 | 1,054.3 |
|    1,440 | split         |    920 | 265.75 / 265.75 / 265.75       | 382.5 × 263.75 | `22 26`       |  65.09 |   34 | 1,054.3 |

Four shapes in that table are worth memorising:

- **The cards are equal-height only above 732.** From 733 up, all three are 265.75 because every title
  is one line and every chip row is one row. Below that each `<article>` sizes itself, so card 3
  (longest title, and the `del` total) is the tallest at 641–660 (392) and at 390 (608.5), while card 3
  is the *shortest* at 700 (293.25 — its chips fit one row while cards 1–2 wrap). A "they are all the
  same height" assumption dies at the first narrow width.
- **The head has three heights, not a ramp**: 65.09 (≥ 1,000), 55.89–56.02 (768–999), and 75.89 at 320
  where the sub-copy wraps to two lines. Between 330 and 764 it is a flat 55.89.
- **The stack is a cliff**: 640 → 2,130.2 tall, 641 → 1,258.1. Four of the nine bands' worth of height
  arrives in one pixel.
- **The container query is invisible in the band height** (it changes 8 px of horizontal padding), so
  it can only be caught by reading `padding`, never by a screenshot diff.

## Requirements

### Requirement 1: Page shell and the single listing band

The app SHALL render one band on the cool mint ground `#f3f6f5` — a head over a one-column list of
three stay cards — with **no navigation, no hero photograph, no filter bar, no map, no booking form**
and no page background image.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport with the webfonts loaded
- **WHEN** the page is measured
- **THEN** `<body>` background is **`#f3f6f5`** (`rgb(243,246,245)`) and the band is **1,054.34 px**
  tall (64 px above and below the content)
- **AND** the container is **952 px outer / 920 px content** at x **244**, `padding: 64px 16px`,
  `color: #10231f`
- **AND** the container is centred, so below 952 it is edge-to-edge with 16 px padding
- **AND** the container's `box-sizing` is **`content-box`** — the 952 px figure is the content-box
  artefact of the sheet's `all: revert` guard, not a second `max-width`

#### Scenario: No invented sections or controls

- **GIVEN** the rendered app
- **THEN** it contains exactly one listing band: one `h1`, one sub-paragraph, three articles
- **AND** it contains **no** search bar, date picker, sort control, filter chips, "load more" button,
  pagination, price-range slider, map, gallery, review list, booking form or multi-column footer
- **AND** the only element below the list is the single Component Dock attribution line
  (Requirement 11)

#### Scenario: The document title and language

- **GIVEN** the built `index.html`
- **THEN** `lang="en"` and the title names the recreation (e.g. "Lodgerow — stays"), **not** the
  catalogue item "Card V07 | Colorlib"
- **AND** no `*.colorlib.com` string appears in any app file

### Requirement 2: The head — one title line and one sub-line, no control

The app SHALL render the head as a plain block (`margin-bottom: 24px`) holding an `h1` and a single
sub-paragraph — **left-aligned, with nothing pushed to the right** (the `card-06` sibling's date chip
has no counterpart here).

#### Scenario: Head geometry at 1440

- **THEN** the head is **920 × 65.09** at y **64**
- **AND** the `h1` "3 stays for 12 – 17 Oct" is **34 px / 700 / −.02em / 1.15** (39.1 px box), one
  line, `#10231f`
- **AND** the sub-copy "2 guests · prices include taxes and cleaning fees" is **16 px / 400** in
  `#4a5c58`, 20 px tall, `margin-top: 6px`
- **AND** the en dash is **U+2013** and the separator is **U+00B7** (middle dot), not hyphens

#### Scenario: The title clamp and the sub-copy wrap

- **GIVEN** the `h1` uses `clamp(26px, 3.4vw, 34px)`
- **THEN** it measures **34** at ≥ 1,000, **30.6** at 900, **26.11** at 768 and **26** at ≤ 764.6
- **AND** the sub-copy is one line (20 px) down to **360** and two lines at **320**, where the head
  grows to **75.89**
- **AND** the head is otherwise a flat **55.89** from 330 to 764

### Requirement 3: The list — one column, three cards, no peer stretching

The list SHALL be `display: grid; gap: 20px` with a **single implicit column** at every width.

#### Scenario: Column count never changes

- **THEN** `grid-template-columns` resolves to one track at 320, 640, 768, 1,024 and 1,440
- **AND** there is no `repeat(auto-fit, …)` and no `sm:`/`md:`/`lg:` column class
- **AND** the three cards start at y **153.09**, **438.84** and **724.59** at 1440 (card height +
  20 gap)

#### Scenario: The cards are independent heights

- **GIVEN** the list is one column, so each `article` sizes itself
- **THEN** at 1,440 all three are **265.75** (every title one line, every chip row one row)
- **AND** at 700 they are **333.5 / 333.5 / 293.25** and at 660 **333.5 / 333.5 / 392**
- **AND** at 390 they are **550 / 550 / 608.5** — card 3 is tallest because its title is the longest
  and its total line carries the `del`
- **AND** no `align-items: stretch` artefact, `min-height` or `flex: 1` is used to equalise them

### Requirement 4: Card anatomy — a 5/7 split, a 20 px radius, one hairline border

Each card SHALL be a white plate, `1 px solid #e2e9e7`, radius **20**, `overflow: hidden`,
`position: relative`, `font-size: 15px; line-height: 1.5`, split
`grid-template-columns: minmax(0,5fr) minmax(0,7fr)` and declared as a **size container**
(`container-type: inline-size`).

#### Scenario: Split geometry at 1440

- **THEN** the card is **920 × 265.75** with a 918 px content box
- **AND** `__media` is **382.5** wide (= 5/12 of 918) and `__body` is **535.5** (= 7/12), separated by
  the 1 px border and no gap
- **AND** the body's `22px 26px` padding leaves a **483.5** content column at x 409.5
- **AND** the media's height **263.75** equals the body's — the photo panel takes its height from the
  body, and `min-height: 220px` never binds on desktop

#### Scenario: The card is the container, not the viewport

- **THEN** `getComputedStyle(card).containerType === 'inline-size'`
- **AND** the sheet holds exactly **one** `@container` rule, `(max-width: 600px)`, with **1**
  declaration (`__body` padding)
- **AND** it is evaluated against the card's **content box**: it fires at viewport **634** (card 602,
  content 600) and not at **635** (content 601)
- **AND** this must be implemented as a container query (Tailwind `@container` + `@max-[600px]:`), not
  as a viewport media query — a viewport query cannot express "the card is narrow"

#### Scenario: Border and radius hold the photo

- **THEN** the card clips its children (`overflow: hidden`), so the hover-zoomed image is cut at the
  20 px radius and the badge's shadow is not clipped away from the panel's top-left

### Requirement 5: The media panel — absolute photo, badge overlay, hover zoom

The app SHALL render the media as a relatively-positioned box on `#dbe5e2` containing an
**absolutely positioned** `img` (`inset: 0; object-fit: cover`) and an optional badge.

#### Scenario: The photo covers, never squashes

- **THEN** `__img` measures exactly the panel box (382.5 × 263.75 at 1440, 606 × 378.75 at 640,
  286 × 178.75 at 320) with `object-fit: cover`
- **AND** the panel's aspect ratio is **free on desktop** and **16 / 10 only once stacked**
  (`@media (max-width: 640px)`), where `min-height` is reset to `0`
- **AND** every placeholder image is `700 × 560` in the reference; the recreation uses
  `https://picsum.photos/seed/lodgerow-<n>/700/560`

#### Scenario: Hover zoom, and its reduced-motion counterpart

- **THEN** hovering the card sets `transform: scale(1.04)` on the image over `.6s`
- **AND** under `prefers-reduced-motion: reduce` the transition is `none` **and** the hover transform
  is removed (`transform: none`) while the border/shadow/CTA colours still change
- **AND** the image never changes the panel's size (it is absolutely positioned)

#### Scenario: Badge placement is inset arithmetic

- **THEN** the badge sits at **15, 15** = `top: 14px; left: 14px` **plus** the card's 1 px border
- **AND** it is **126 × 29.5** (favourite) or **131 × 29.5** (deal), `padding: 5px 12px`, radius 999
- **AND** it overlays the photo, not the body

### Requirement 6: Two badge variants plus absence

The data SHALL model the badge as **three states** — `null`, favourite, deal — not as a boolean.

#### Scenario: The three states as rendered

- **THEN** card 1 carries "Guest favourite": background **`#fff`**, ink `#10231f`, 13 px / 600,
  shadow `0 4px 14px rgba(0,0,0,.15)`
- **AND** card 3 carries "15% off this week": background **`#be123c`**, colour **`#fff`**, same
  metrics and the same shadow
- **AND** card 2 carries **no badge element at all** (not an empty or hidden one)
- **AND** the deal variant is a modifier of the same component, not a second component

### Requirement 7: The body stack — place, title, rating, chips, foot

The body SHALL be a `flex` column whose children are, in order, `__place`, `__title`, `__rating`,
`__amenities`, `__foot`, with the foot pinned by `margin-top: auto`.

#### Scenario: Stack geometry at 1440

- **THEN** `__place` is 21 px tall at y **23**, 14 px / 600 in `#0f766e`, `inline-flex`, `gap: 6`, with
  a **16 × 16** pin glyph (`fill: none`, `stroke: currentColor`, `stroke-width: 2`)
- **AND** `__title` is 27.5 px at y **48** (`margin: 4px 0 6px`), 22 px / 600 / 1.25 / −.01em
- **AND** `__rating` is 21.75 px at y **81.5**, `gap: 5`, 14.5 px, with a **16 × 16 filled** star
  (`fill: #10231f`) and the review count in `#4a5c58`
- **AND** `__amenities` is 32.25 px at y **119.25** (`margin: 16px 0 18px`, `gap: 8`)
- **AND** `__foot` is 73.25 px at y **169.5** — 1 px rule + `padding-top: 16px` + 56.25 content

#### Scenario: Chips are pills with 16 px glyphs

- **THEN** a chip is `inline-flex`, `gap: 6`, `padding: 6px 11px`, radius **10**, background
  **`#f0f5f4`**, ink **`#26403a`**, 13.5 px / 500, and measures **32.25** tall
- **AND** the three chips of card 1 measure **121 / 96 / 122** wide at 1440
- **AND** the amenity list wraps (`flex-wrap: wrap`, `gap: 8`) and the whole chip row is a single
  `<ul aria-label="Amenities">` of `<li>`s
- **AND** the glyph is 16 × 16 with `stroke-width: 1.8`, `linecap: round`, `linejoin: round`

#### Scenario: The foot is a wrapping flex row, bottom-aligned

- **THEN** `__foot` is `flex-wrap: wrap; align-items: flex-end; justify-content: space-between;
  gap: 14`
- **AND** the CTA's bottom edge is flush with the price block's (`ctaSameRow` delta **0.0** at every
  width from 320 to 1,440)
- **AND** at **320** the CTA wraps below the price and the foot grows to **131.75**
  (1 + 16 + 56.25 + 14 + 44.5)

### Requirement 8: The price block — two lines, three tokens, and no arithmetic

The price block SHALL render a nightly rate and a total line, with the original total as an optional
third token in the **discount** state.

#### Scenario: Metrics

- **THEN** `strong` (the rate, e.g. "€214") is **24 px / 700 / −.02em** on a 36 px line in `#10231f`
- **AND** the word "night" follows it inline at 15 px in `#4a5c58`
- **AND** the total (`€1,180 total for 5 nights`) is a `block` `<span>` at **13.5 px** in `#4a5c58`
- **AND** the block is **144 × 56.25** (36 + 20.25) at 1440

#### Scenario: The discount variant adds a struck original

- **THEN** card 3 renders `<del>€990</del> €840 total for 5 nights` where the `del` is
  **line-through** in `#4a5c58` at the same 13.5 px
- **AND** the `del` sits **inside** the total line (one line of copy), not as a separate block
- **AND** the model exposes `totalWas?: string` alongside `total`

#### Scenario: The totals are copy, not computed

- **THEN** the rendered totals are the reference strings **verbatim** — `€1,180`, `€520`, `€840`
- **AND** no code multiplies the nightly rate by the night count, because the reference's own numbers
  are inconsistent (§Known reference defects 6): only card 3 satisfies `rate × 5 = total`

### Requirement 9: One anchor per card — the stretched link, the decorative CTA, the ring

The app SHALL render exactly **one** anchor per card (the title) and **no** button, and the whole card
SHALL be clickable via a stretched pseudo-element.

#### Scenario: The link and its overlay

- **THEN** each `<h2>` wraps a single `<a class="cl-card07__link" href="#">` whose `::after` is
  `content: ""; position: absolute; inset: 0; z-index: 1`
- **AND** the anchor paints the title in `inherit` with `text-decoration: none`
- **AND** the page therefore has **3** anchors, **3** focusable elements, **0** buttons and **0**
  forms — the same census as the reference (3 dead `#` anchors)

#### Scenario: The CTA is decoration

- **THEN** "View stay" is a `span` with `aria-hidden="true"`, radius 12, `padding: 11px 18px`,
  background `#0f766e`, 15 px / 600, `gap: 8`, and an 18 × 18 arrow
- **AND** it is **not** a `button`/`a` and it is not in the tab order
- **AND** on card hover it moves `gap` 8 → 12 and its background to `#115e59` over `.2s`
- **AND** the link's accessible name is the title alone — do **not** append the CTA text, which would
  make all three links read "… View stay"

#### Scenario: The focus ring is the card's

- **THEN** `.cl-card07__link:focus-visible { outline: none }` and
  `.cl-card07:focus-within { box-shadow: 0 0 0 3px #0f766e }`
- **AND** measured: focusing the first link (mouse parked away, transition settled) gives the card
  `box-shadow: rgb(15,118,110) 0px 0px 0px 3px` and the link `outline-style: none`
- **AND** the ring survives `Tab` order as the **first** stop and each card's link is the only stop
- **AND** the recreation **adds** a `focus-visible` outline on the link itself (`2px` accent,
  `outline-offset: 2px`) as a documented delta, because a `box-shadow` ring disappears in forced-colors
  / Windows High Contrast mode (defect 4)

### Requirement 10: Responsive integrity

The app SHALL stack below the reference's exact threshold, hold its arithmetic everywhere, and never
scroll horizontally.

#### Scenario: The 640 cliff

- **THEN** at **641** the card is split (`grid-template-columns: 252.9px 354.08px`) and at **640** it is
  a single column with `aspect-ratio: 16 / 10` on the media
- **AND** the media at 640 is **606 × 378.75** and the body becomes **606 × 263.75** beneath it
- **AND** the implementation uses `max-[640px]:` (inclusive), **not** `max-sm:` — Tailwind's `max-sm`
  is `width < 40rem`, which would leave 640 unstacked

#### Scenario: No horizontal scroll anywhere

- **THEN** `body.scrollWidth === documentElement.clientWidth` **and** `scrollTo(200,0) → scrollX 0` at
  320 / 360 / 390 / 640 / 768
- **AND** no element needs `min-width` below 286 px; the narrowest chip row is 250 px wide at 320

#### Scenario: Band heights match the formula

- **THEN** `band = 2·padY + head + 24 + ΣcardH + 40` reproduces every measured value: 1,054.34 at 1,440,
  1,164.1 at 700 (333.5 + 333.5 + 293.25), 1,258.1 at 660 (333.5 + 333.5 + 392), 2,130.2 at 640
  (644.5 × 3), 1,898.1 at 320 (564.75 × 3)
- **AND** the vertical padding is viewport-derived (`clamp(32px, 6vw, 64px)`): 64 at ≥ 1,066.7, 61.44 at
  1,024, 46.08 at 768, 32 at ≤ 533.3

#### Scenario: Reduced motion

- **THEN** `@media (prefers-reduced-motion: reduce)` sets `transition: none` on the card, the image and
  the CTA, and `transform: none` on the hover-zoomed image
- **AND** the palette still responds to hover (this is not a "no motion, no feedback" design)

### Requirement 11: Semantics, accessibility and attribution

The app SHALL use the reference's semantics and add only the repo's mandatory attribution.

#### Scenario: Document structure

- **THEN** one `<main>`, one `<header>` holding the `h1` and sub-paragraph, and three `<article>`s
- **AND** each article carries an `<h2>` (the listing title, wrapped in the link) — heading level two,
  never a `div`
- **AND** the amenity `<ul>` keeps its `aria-label="Amenities"` and each chip is an `<li>`
- **AND** all six decorative SVGs per card carry `aria-hidden="true"`

#### Scenario: Image alternatives

- **THEN** each image has a descriptive `alt` of the scene (e.g. "Timber lodge with a pool and sun
  loungers at dusk"), not the listing title and not an empty string
- **AND** the images use `loading="lazy"` and `decoding="async"` — the reference's
  `fetchpriority="high" decoding="sync"` on two above-the-fold JPEGs is a decode-blocking choice not
  worth reproducing (defect 5)

#### Scenario: Attribution and provenance

- **THEN** the page ends with a **Component Dock** attribution line linking
  `https://www.componentdock.com/` — the reference has no footer at all, so this is the one deliberate
  addition
- **AND** `grep -ri colorlib apps/lodgerow` and `grep -ri 'card-07' apps/lodgerow` both return **no
  matches**; provenance lives only in this spec, `TEMPLATES.md` and the PR

### Requirement 12: Copy fidelity

The app SHALL keep the reference's copy verbatim (paraphrase only where a string names the source).

#### Scenario: Head

- **THEN** the `h1` reads `3 stays for 12 – 17 Oct` with **U+2013**
- **AND** the sub reads `2 guests · prices include taxes and cleaning fees` with **U+00B7**

#### Scenario: The three listings

- **THEN** card 1: **Hvar, Croatia** · `Cedar House with Pool and Sea View` · `4.92` `(128 reviews)` ·
  `Private pool` / `Fast wifi` / `3 bedrooms` · `€214` `night` / `€1,180 total for 5 nights` ·
  badge `Guest favourite`
- **AND** card 2: **Ubud, Bali** · `Garden Villa near the Rice Terraces` · `4.81` `(342 reviews)` ·
  `Breakfast` / `Shared pool` / `1 bedroom` · `€96` `night` / `€520 total for 5 nights` · **no badge**
- **AND** card 3: **Oia, Santorini** · `Cliffside Studio with Caldera Terrace` · `4.88`
  `(76 reviews)` · `Sunset terrace` / `Fast wifi` / `Studio` · `€168` `night` /
  `€990` struck + `€840 total for 5 nights` · badge `15% off this week`
- **AND** the currency symbol is **U+20AC** immediately before the digits with no space, and thousands
  are comma-separated (`€1,180`)

#### Scenario: Glyph inventory

- **THEN** each card carries the same six glyph *roles* as the reference — pin, star, three amenity
  icons chosen per listing, arrow — as inline SVG built from `lucide-react` or hand-written paths
  (pin/star/arrow are shared; the amenity glyphs differ per card: waves for pools, wifi arcs for
  wifi, house for bedrooms, cup for breakfast, sun for the terrace)
- **AND** no icon font, sprite sheet or downloaded SVG is introduced

## Screenshot analysis (catalogue image, `card-07.jpg`)

- **1,200 × 972 progressive JPEG, 90,992 B**, white frame, with the preview host's **macOS browser
  chrome** baked in (traffic-light buttons + a `preview.colorlib.com` URL bar) — the same framing as
  `card-06.jpg`.
- **It is a scaled render, not a 1,200 px layout.** The card measures ≈ **710 px** across in the
  image against a real **920 px**: scale ≈ **0.772** (card height ≈ 205 px vs 265.75). Measure nothing
  from it — and do not conclude "the design is 1,200 wide".
- It shows the **whole page**, uncropped: head, then all three cards stacked with 20 px gaps and the
  64 px band padding visible top and bottom.
- Visual read: a **cool off-white / very light mint** ground that reads almost neutral at screenshot
  brightness (sampled `#f4f6f5`, one digit off the real `#f3f6f5` — JPEG noise); **white cards with a
  barely-there hairline and a 20 px radius**; **teal** used only three ways (location line, the
  "View stay" pill, the focus ring) so the page reads green-accented rather than coloured; the photos
  supply all the warmth and all the saturation (timber + pool blue, tropical green, Santorini white and
  Aegean blue); the **rose deal badge** on card 3 is the only second accent above the fold; type is a
  geometric sans (Outfit) with a **tight, confident h1** and small, quiet chips; the **star is solid
  black**, not gold — the one place a recreation may be tempted to "improve" the design.
- Hierarchy is carried by **weight and size, not colour**: title 22/600, price 24/700, everything else
  13–16 px. The muted total line under the price is the only second-weight copy in the body.

## Known reference defects (do not copy)

1. **The archive README invents `js/snippet.js`.** It lists "js/snippet.js — the behaviour, in plain
   JavaScript"; there is no `js/` directory in the zip, `…/js/snippet.js` answers **404**, and the page
   has **0 `<script>`**. (The README's `images/` claim, by contrast, **is** true this time — three
   JPEGs. Do not apply `card-06`'s "both claims are lies" note here.)
2. **Faux-bold type.** Eight `@font-face` names, two binaries: weights 500–700 are the Regular cut
   synthesised by the browser (+0.9 / +0.5 / **+1.8 %** wider than real Outfit at 30 px). Load real
   weights; document the delta.
3. **`.cl-icon` is dead for the sixth sibling in a row** — 19 markup classes, 19 selectors, the 19th
   never used.
4. **The focus ring is a `box-shadow` on the parent, with `outline: none` on the link.** It is
   invisible in forced-colors mode and in Windows High Contrast, and it is drawn at the *card's* radius
   rather than the focused element's. Reproduce it **and** add a real `outline` on the link.
5. **`fetchpriority="high" decoding="sync"` on two ~100 KB JPEGs above the fold** — a synchronously
   decoded hero pair. Use `loading="lazy" decoding="async"` in the recreation.
6. **The reference's own totals don't multiply.** €214 × 5 = 1,070 ≠ **€1,180**; €96 × 5 = 480 ≠
   **€520**; only card 3 (€168 × 5 = **€840**, from a struck €990 = €198 × 5 — a **15.15 %** cut against a
   badge that says "15 % off") is
   consistent. Treat the totals as **copy**. Do not compute them, and do not "fix" them in either
   direction — computing would silently change two cards' prices.
7. **`min-height: 220px` on the media is dead on desktop** (always ≥ 263.75) and is reset to `0` in the
   only range where it could matter (≤ 640). Harmless, but do not carry it as a requirement.
8. **A `del` with no accessible label.** "€990 €840 total for 5 nights" — some readers announce
   `<del>`, some don't. Add an `sr-only` "was" before the struck figure.
9. **`--cl-card07-accent` is declared and never overridden** — the four custom properties are a theming
   hook with no data behind them, unlike `card-06`'s per-card inline accents. Keep the token, but do
   not invent per-card colours.

## Adapting to the repo (deltas the implementer owns)

| reference                                | recreation                                                                 |
| ---------------------------------------- | -------------------------------------------------------------------------- |
| `max-width: 920px` on a `content-box` element | `max-w-[952px] px-4` (content 920) — `max-w-[920px] px-4` would give 888 |
| `container-type: inline-size` + `@container (max-width: 600px)` | Tailwind 4: `@container` on the card + `@max-[600px]:px-[18px] @max-[600px]:pt-[18px] @max-[600px]:pb-[20px]`, or a plain CSS block in `index.css` |
| `@media (max-width: 640px)`              | `max-[640px]:grid-cols-1` (**not** `max-sm:`)                              |
| Outfit woff2 ×8 (2 binaries)             | one Google Fonts `<link>` for Outfit `400;500;600;700`                      |
| 3 × `images/*.jpg` (700 × 560, ~100 KB)  | `picsum.photos/seed/lodgerow-1..3/700/560`, `loading="lazy" decoding="async"` |
| inline pinned SVGs + `aria-hidden`       | same, via `lucide-react` (`MapPin`, `Star`, `Waves`, `Wifi`, `House`, `Coffee`, `Sun`, `ArrowRight`) or hand-written paths |
| no footer                                | one Component Dock attribution line (repo rule)                             |
| `href="#"` on every link                 | `href="#"` is acceptable for a static recreation; if a real target exists, use it |
| 0 scripts                                | 0 scripts — the cards are static; hover/focus are pure CSS                  |

## Verification checklist

- [ ] `apps/lodgerow` exists, package `@free-react-templates/lodgerow`, `public/CNAME` =
      `lodgerow.free.componentdock.com`, `"homepage"` = `https://lodgerow.free.componentdock.com`
- [ ] `grep -ri colorlib apps/lodgerow` and `grep -ri 'card-07' apps/lodgerow` → **no matches**
- [ ] `body` background is `#f3f6f5`; band container is 952 outer / 920 content, `padding: 64px 16px`
      at 1440
- [ ] `h1` is 34 px / 700 / `−.02em` / 1.15 at 1440, 26 px at 320; sub-copy 16 px `#4a5c58`
- [ ] exactly 3 `<article>`s, 3 `<h2>`s, 3 anchors, 0 buttons, 0 forms, 3 focusable elements
- [ ] card is a 5fr/7fr split of a 918 px content box (382.5 + 535.5), radius 20, border `#e2e9e7`
- [ ] body padding `22px 26px` at ≥ 600 content and `18px 18px 20px` at ≤ 600 content, driven by a
      **container query** that fires at viewport 634 and not at 635
- [ ] media panel is the same height as the body (263.75 at 1440), image `object-fit: cover`
- [ ] hover sets border `#cfdcd9`, shadow `0 20px 40px -28px rgba(16,35,31,.45)`, image `scale(1.04)`,
      CTA `gap: 12px` + `#115e59`
- [ ] `prefers-reduced-motion: reduce` removes the three transitions and the hover zoom
- [ ] badges: white "Guest favourite" (card 1), none (card 2), rose `#be123c` "15% off this week"
      (card 3)
- [ ] chips are `#f0f5f4` / `#26403a`, radius 10, 32.25 tall, 16 px glyphs at `stroke-width: 1.8`
- [ ] price block: `strong` 24/700 on a 36 px line, total 13.5 px `#4a5c58`, card 3's `del` struck and
      inline; totals are the literal strings (1,180 / 520 / 840)
- [ ] card heights: all 265.75 at ≥ 733; 333.5 / 333.5 / 293.25 at 700; 550 / 550 / 608.5 at 390
- [ ] stacked single-column at 640 and split at 641 (inclusive `max-[640px]:`)
- [ ] no horizontal scroll: `scrollTo(200,0) → scrollX 0` at 320 / 360 / 390 / 640 / 768
- [ ] band height matches `2·padY + head + 24 + ΣcardH + 40` at 320 / 640 / 700 / 1440
- [ ] focus: each card's ring is `0 0 0 3px #0f766e`, and the link also shows a real `outline`
      (documented delta for forced-colors)
- [ ] every image has a scene `alt`, `loading="lazy"`, `decoding="async"`
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app lodgerow` (typecheck + lint + knip + fallow + 100 % coverage tests + build)
      passes; `openspec validate template-lodgerow --type spec` is valid
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)` (created after `## Bootstrap Carousels
      (20)`) and `npm run readme:status` regenerated
