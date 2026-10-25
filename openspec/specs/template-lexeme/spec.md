# Template: Lexeme (Language-learning flashcards — four flip cards whose back face carries the meaning, an example sentence and a card counter)

## Purpose

A **flashcard band**: one head (a violet eyebrow, a clamped display title and one line of
instructions) over a **four-across grid of flip cards** on a lavender ground. Each card is a
**two-faced, 24 px-radius tile**: the front is a **saturated colour** with a **position pill**, the
**word at 32–40 px**, its **pronunciation** and a **"Flip" hint** with a circular-arrow glyph; the back
is **white with a 2 px border in the same colour**, carrying an uppercase **MEANING** label, the
definition, an **example sentence in a tinted block**, its translation, and a **"Card N of 40"**
counter pinned to the bottom. The card turns over `rotateY(180deg)` over `.7 s` — **on hover with a
mouse, on click / tap / Enter / Space everywhere**, and **Escape turns it back**. Colour is per card:
two custom properties (`--cl-card09-face`, `--cl-card09-ink`) are set **inline on each `<li>`**.

ColorLib's own listing states the brief in one line:

> "Language flashcards that turn over to show the meaning and an example sentence. Cards flip on
> hover with a mouse, and on click, tap, Enter or Space everywhere; Escape turns a card back. With
> reduced motion the faces crossfade instead of rotating."

> "It is plain HTML and CSS plus a few lines of vanilla JavaScript: no jQuery, no Bootstrap files, no
> plugins, and the download is 322 KB. Use it on its own, or drop it into a Bootstrap 4, 5 or 6
> project and it looks the same."

and lists five features: "Hover flip plus a real toggle button with aria-pressed · Hidden face removed
from the accessibility tree · Escape flips a card back · Crossfade fallback for
prefers-reduced-motion · Per-card colours through custom properties". That list **is** the design.
Everything not in it — a deck selector, a progress bar, a search field, a "next card" button, a
rating, an audio player, a second band, a footer — is absent, and adding any of it is a different
template.

This is the **ninth member of the `card` snippet family** (`card-01` … `card-20`, **20 variants**) and
the family's **first stateful card**. `card-01` … `card-08` were static surfaces whose only state was
hover; Lexeme is the first whose **primary content lives on a second face that a user has to ask
for**, and therefore the first with

- **a real `<button>` per card** (`aria-pressed`, `sr-only` label) — the family's first control that
  is not a link, and its first `aria-hidden` toggling,
- **a 3D transform** (`perspective: 1200px` on the `<li>`, `transform-style: preserve-3d` on the
  wrapper, `backface-visibility: hidden` on both faces) instead of the family's usual
  height/opacity/grid-row transitions,
- **two independent state paths that must not fight**: pointer hover (pure CSS, `@media (hover: hover)`
  on `:not(.is-manual)`) and an explicit toggle (JS adds `.is-manual` **once** and from then on the
  hover rule is inert),
- **a reduced-motion mode that is a different mechanism**, not a shortened animation — rotation is
  removed and the two faces **crossfade** at `.2 s linear`,
- **per-card theming through custom properties re-set inline on four sibling elements**, and
- **a fixed 320 px card height that never changes** at any width, while the card's *width* swings from
  **240 px** to **285 px** and the same word flips between one and two lines.

The personality is in seven small, copyable details; lose any of them and a correct palette still
reads as a generic "coloured card":

1. **The flip is the only motion on the page.** `transition: transform .7s cubic-bezier(.3,.8,.3,1)`
   on `.cl-card09__inner`; everything else is static. There are **0 `@keyframes`** and **0 container
   queries**.
2. **Both faces are the same box.** `.cl-card09__face` is `position: absolute; inset: 0`, so the card
   is exactly as tall as its `min-height` (320 px) and the back's content is laid out inside that
   budget — with `overflow: hidden` waiting to clip it (defect 3).
3. **The front's colour is a variable, the back only borrows its border.** `--cl-card09-face` fills the
   front *and* draws the back's `2px solid` frame; `--cl-card09-ink` only ever colours front text.
4. **One decorative circle, deliberately clipped.** `.cl-card09__front::after` is a 160 × 160 white
   `.18` disc parked at `right: -40px; bottom: -40px` — so the front's `scrollHeight` is **always 40 px
   more than its `clientHeight`** and the hint is lifted with `z-index: 1` to sit above it.
5. **The whole card is the button.** `.cl-card09__toggle` is `position: absolute; inset: 0; z-index: 3`
   with a transparent background and the card's 24 px radius, so `elementFromPoint` anywhere on the
   card returns the button and the entire tile is one hit area.
6. **The palette is four saturated faces, each with its own ink** — coral, indigo, amber, teal — and
   **no neutral brand colour at all**; the page's only constant hues are the lavender ground and the
   violet used for the eyebrow and the two back-face labels.
7. **The grid is arithmetic, not breakpoints.** `repeat(auto-fit, minmax(240px, 1fr))` with a 20 px gap
   yields **4 columns at ≥ 1052, 3 at 792 – 1051, 2 at 532 – 791, 1 at ≤ 531** — three thresholds that
   appear nowhere in the stylesheet.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` (`- [ ]` count **0**, 2,889 rows), so this design comes from
`docs/catalog-coverage.md` — designs on colorlib.com's own listing that the checklist never recorded.
`card-09` is the **ninth member of the `card` snippet family** and one of the **214 snippet variants in
19 families** the listing carries and `TEMPLATES.md` does not. The 42 standalone designs in that gap
are all prepped; the snippet families are the remaining queue, worked **in family order, then variant
number**. `card-01` → **Nameplate** (`1a09a0c7b`), `card-02` → **Marketrow** (`780313169`), `card-03` →
**Octavo** (`2a8371ce0`), `card-04` → **Tierline** (`9e6e58563`), `card-05` → **Plaudit** (`7487355a6`),
`card-06` → **Statline** (`7113c220a`), `card-07` → **Lodgerow** (`be9c73c5c`) and `card-08` →
**Roadbook** (`ad739732c`) came first.

The family section **`## Bootstrap Cards (20)` already exists on main** (line 733) and currently
carries **two** rows, `Card 01` and `Card 02`. This design's row goes **directly after the last card
row present** when the implementer ships it:

```markdown
- [x] **Card 09** — [colorlib](https://colorlib.com/wp/template/card-09/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/card-09.jpg) · [lexeme](https://lexeme.free.componentdock.com)
```

(`Card 03` … `Card 08` are still prepped-and-unbuilt, so the section will gain rows out of order until
those ship — the implementer stream owns that batch edit, not this prep run.)

**The name.** `lexeme` — one lowercase word, in no app folder, no spec folder, and `git grep -il
lexeme origin/main` returns **0** files (the substring test this pipeline uses); the ColorLib
catalogue URLs `colorlib.com/wp/template/lexeme/` (404, 63,534 B),
`preview.colorlib.com/theme/lexeme/` (404, 9 B) and
`preview.colorlib.com/theme/bootstrap/lexeme/` (404, 9 B) are all unused. A lexeme is the dictionary
unit behind a set of inflected forms — the word the card shows in one word. Free alternates measured
the same day, if a later stream needs one: `flipdeck`, `wordbook`, `flashlet`, `memorand` (each 0
substring hits, 0 `apps/` hit, 0 spec folder). Do **not** reuse `lexicon` (**28** files, **1 app**,
**1 spec**), `vocable` (1 file) or the family's taken names `nameplate`, `marketrow`, `octavo`,
`tierline`, `plaudit`, `statline`, `lodgerow`, `roadbook`.

## Reference readings (2026-10-26, `curl -4` + Playwright 1.62 Chromium)

| what              | value                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| preview HTML      | **200, 5,865 B** live (`5,662 B` inside the archive), `<title>` "Card V09 \| Colorlib", `lang="en"`, **one** stylesheet, **0 authored `<script>`** |
| preview path      | **`theme/bootstrap/card-09/index.html`**; the directory form `…/bootstrap/card-09/` is the same 5,865 B. `theme/card-09/` and `theme/bb/card-09/` are **404** (9 B) |
| ColorLib page     | `https://colorlib.com/wp/template/card-09/` **200, 113,168 B**; "Author: Colorlib", "Released: September 2026", "License: CC BY 3.0", posted **September 25, 2026** by Aigars Silkalns; states **"the download is 322 KB"** and links **"previous post: Card V08" / "next post: Card V10"** (the family continues) |
| stylesheet        | `css/style.css?v=b58fcf24`, **9,451 B**, sha256 `609096867397de25bca36bca4c577da90b54086dae1019e6930310e399bffcbc`; the zip twin is **byte-identical** |
| archive           | `preview.colorlib.com/downloads/free/card-09.zip`, **200, 330,191 B** (= 322.5 KiB ✓ the claim), **14 entries**: 4 dirs + `index.html` 5,662 B + `css/style.css` 9,451 B + `js/snippet.js` 1,358 B + `README.md` 1,260 B + **6 `woff2`** (no `images/` dir) |
| live ↔ archive    | CSS **identical sha256**, `js/snippet.js` **identical sha256** (`658de6e8…`), all **6 fonts identical** (`latin` `85f55a58…` ×3, `latin-ext` `1d04719f…` ×3); `index.html` differs **only** in host lines (`robots` ×2, a `cdnjs` `dns-prefetch`, `?v=` cache-busters, `fetchpriority="high"`) — **the body markup is byte-identical** → **live preview verified; the archive is its un-versioned twin** |
| fonts             | **6** `@font-face` rules — Bricolage Grotesque **400 / 600 / 800**, `latin` + `latin-ext` — but only **2 distinct binaries**: `latin` 76,868 B (`85f55a58…`) ×3, `latin-ext` 30,636 B (`1d04719f…`) ×3. **Not** faux type (unlike `card-08`): the file is a **variable cut** redeployed under three filenames — canvas at 46 px measures **452 / 475 / 483 px** for 400 / 600 / 800, so the three weights are really instanced |
| images            | **0** — the archive has no `images/` directory and the page has no `<img>`. The only graphic is the **inline flip SVG** (repeated 4×, 4 `<svg>`) |
| CSS size          | 398 lines, **49 rules** in one sheet; the host page loads **no** second sheet and no CDN |
| classes           | **22** in the markup, **49** selectors in the sheet → **1 dead selector**, `.cl-icon` (**eighth** sibling in a row); **0 unstyled markup classes** |
| controls          | **4 `<button>`** (one per card), **0 anchors, 0 forms, 0 inputs**, **4 focusable elements** on the page |
| headings          | **1 × `h1`** ("Words worth knowing") and **0 × `h2`** — the four card words are `<p>`, not headings |
| blocks            | `<main class="cl-card09-demo">` → `<header>` (eyebrow + `h1` + sub) → `<ul class="cl-card09-grid">` of **4 `<li>`**, each = `<button>` + `.cl-card09__inner` → **two `.cl-card09__face`** |
| media queries     | **3**: `@media (hover: hover)` (1 rule: hover flip on `:not(.is-manual)`), `@media (prefers-reduced-motion: reduce)` (4 rules: kill the rotation, crossfade the faces), `@media (prefers-reduced-motion: reduce) and (hover: hover)` (2 rules: the hover crossfade). **0 container queries** |
| keyframes         | **none** — 0 `@keyframes`; all motion is transition-driven                                       |
| custom properties | **3**: `--cl-card09-face: #ff6b4a` and `--cl-card09-ink: #2b0b03` (declared on `.cl-card09` **and re-set inline on all four `<li>`**), `--cl-card09-speed: .7s` (**never re-set** — the same hook-with-no-data pattern as `card-07`/`card-08`) |
| authored scripts  | **0**. The **11** `<script>` elements a browser sees are host injections (gtag, Cloudflare Zaraz, `/s9cc/`, `dataLayer`, beacon); `curl` gets the file with none |
| content height    | **599.3** at 1,440 · 599.3 at 1,280 / 1,200 · 581.95 at 1,080 · **912.88 at 1,024** (the only mid-range width taller than the viewport) · 892.8 at 900 · 878.84 at 814 · 871.41 at 768 · 850.5 at 600 · **1,554.5** at 531 / 480 / 390 / 360 · **1,610** at 320 |
| horizontal scroll | **none at any width probed** — `body.scrollWidth === clientWidth` **and** `scrollTo(300,0) → scrollX 0` at 320 / 360 / 390 / 480 / 531 / 532 / 547 / 768 / 1,024 / 1,440 |

## Design tokens (measured from `style.css`, 9,451 B, and from `getComputedStyle` at 1440 px)

### Palette — a lavender ground, a violet accent, and four per-card faces

| role              | value                  | where                                                                     |
| ----------------- | ---------------------- | ------------------------------------------------------------------------- |
| page ground       | `#f1eefb`              | `body` background — a **lavender** off-white (not `#f8fafc`, not `#faf5ff`) |
| band ink          | `#1e1b2e`              | `.cl-card09-demo` `color`; 14.67:1 on the ground                          |
| eyebrow label     | `#5b21b6`              | `.cl-card09-demo__eyebrow` **and** both back-face `.cl-card09__label`s — one violet for two roles; **Tailwind `violet-800`**, exact; 7.85:1 on the ground, 8.98:1 on white |
| muted copy        | `#4a4560`              | the head's sub-line, the back's translation and the counter; 7.94:1 on the ground, 9.09:1 on white |
| back-face paper   | `#ffffff`              | `.cl-card09__back` background                                            |
| back-face ink     | `#1e1b2e`              | `.cl-card09__back` `color` — same as the band ink; 16.78:1 on white      |
| example block     | `#f4f2fb`              | `.cl-card09__example` background — the ground, lightened; 15.14:1 with `#1e1b2e` |
| focus ring        | `#1e1b2e`              | `.cl-card09__toggle:focus-visible` `outline: 3px solid`, `offset: 4px`; 14.67:1 on the ground |
| card 1 face / ink | `#ff6b4a` / `#2b0b03`  | coral; **6.47:1**                                                        |
| card 2 face / ink | `#5b5bf0` / `#ffffff`  | indigo; **5.00:1**                                                       |
| card 3 face / ink | `#ffc53d` / `#2e2000`  | amber; **10.06:1**                                                       |
| card 4 face / ink | `#14b8a6` / `#022c28`  | teal (Tailwind `teal-500`); **6.05:1**                                   |

Every face/ink pair clears **AA at 15 px** — the palette needs **exactly one** fix, and it is not a
colour: the indigo card's pronunciation run is drawn at `opacity: .85`, which takes white down to
`#e6e6fd` and **4.07:1** (defect 2). The back's `2px` coral border on white is `2.82:1`, which is fine
for a decoration but would not pass as a control boundary (it is not one — the button is transparent).

### Type — one variable face, three declared weights, two files

- **Bricolage Grotesque** only, `font-family: "Bricolage Grotesque", system-ui, -apple-system, "Segoe UI",
  Roboto, sans-serif` on `body`. No serif, no mono, no second family anywhere on the page.
- Six `@font-face` rules (400/600/800 × `latin`/`latin-ext`) resolving to **two binaries** — a variable
  cut re-served under three names, so **no weight is synthesised** (the opposite of `card-08`).
- The hosted face is **wider than the archive's**: the h1 string at 46 px measures **452 / 475 / 483**
  from the archive's binaries against **474 / 488 / 507** from Google Fonts' current release —
  **+4.9 % / +2.7 % / +4.6 %**. The `h1` still fits `max-width: 620px` on one line, so the only
  visible consequence is tracking; do not compensate with a smaller size.

| run                      | size       | weight | line-height | tracking      | other                                                        |
| ------------------------ | ---------- | ------ | ----------- | ------------- | ------------------------------------------------------------ |
| `.cl-card09-demo__eyebrow` | 14 px    | 600    | normal (17 px box) | —      | `#5b21b6`, `margin: 0`                                       |
| `.cl-card09-demo__title` | **clamp(30px, 4vw, 46px)** | 800 | **1.05** (`48.3` at 46) | `-.035em` (`−1.61 px` at 46) | `margin: 6px 0 8px`, inside the 620 px head |
| `.cl-card09-demo__sub`   | 16 px      | 400    | **1.5** (`24`) | normal     | `#4a4560`, `margin: 0`                                       |
| `.cl-card09__pos`        | 13 px      | 600    | 18.85 (1.45) | normal       | `1.5px solid currentColor`, `4px 10px`, pill radius          |
| `.cl-card09__word`       | **clamp(32px, 3vw, 40px)** | 800 | **1** (`40` at 40) | `-.03em` (`−1.2 px`) | `margin: auto 0 4px` — the flex spacer above it |
| `.cl-card09__say`        | 15 px      | 600    | 21.75 (1.45) | normal      | `opacity: .85`, `margin: 0 0 auto`                            |
| `.cl-card09__hint`       | 14 px      | 600    | 20.3        | normal        | inline-flex, `gap: 6px`, 18 × 18 stroked SVG                  |
| `.cl-card09__label`      | **12.5 px**| 600    | 18.13       | **`.1em`** (`1.25 px`) | UPPERCASE `#5b21b6`                                 |
| `.cl-card09__meaning`    | 19 px      | 600    | **1.3** (`24.7`) | normal   | `margin: 8px 0 14px`                                          |
| `.cl-card09__example`    | 15 px      | 600    | 21.75       | normal        | on `#f4f2fb`, `10px 12px`, radius 12                          |
| `.cl-card09__trans`      | 14 px      | 400    | 20.3        | normal        | `#4a4560`, `margin: 6px 0 0`                                  |
| `.cl-card09__count`      | 13 px      | 600    | 18.85       | normal        | `#4a4560`, `margin-top: auto`, `padding-top: 12px`             |

The card root sets `font-size: 15px; line-height: 1.45`, so `13 px` runs sit on an 18.85 px line and
the `12.5 px` label on 18.13 — **do not "round" 12.5 to 13**: the label box is 18.13 px tall because
of it.

### Radii, decoration, motion

| element            | value                                                      |
| ------------------ | ---------------------------------------------------------- |
| card / face radius | **24 px** (`border-radius: 24px` on the faces **and** the transparent button — not a Tailwind step) |
| pill radius        | `999px` (position pill), `1.5px solid currentColor` border, `4px 10px` padding |
| example block      | `12px` radius, `10px 12px` padding, no border              |
| front shadow       | `0 18px 36px -20px rgba(30,27,46,.5)`                       |
| back shadow        | `0 18px 36px -20px rgba(30,27,46,.35)`                      |
| decorative disc    | `160 × 160`, `rgba(255,255,255,.18)`, `right: -40px; bottom: -40px` — **always clipped** by the face's `overflow: hidden` |
| flip               | `transform .7s cubic-bezier(.3,.8,.3,1)` on `.cl-card09__inner`, `transform-style: preserve-3d`, `backface-visibility: hidden` on both faces, `perspective: 1200px` on the `<li>` |
| focus ring         | `outline: 3px solid #1e1b2e; outline-offset: 4px` — drawn **outside** the tile |
| reduced motion     | rotation `none`, `transition: none`, and `.cl-card09__face { transition: opacity .2s linear }` with `.back { opacity: 0 }` → the **crossfade** |

### Layout — one clamped container, four-column arithmetic, a constant 320

- Container: `.cl-card09-demo` is `max-width: 1200px; margin: 0 auto; padding: clamp(36px, 6vw, 72px)
  16px` and — because the sheet's `:where(html) … { all: revert }` guard resets `box-sizing` — it is
  **`content-box`**: outer **1232 px** at x **104** in a 1440 viewport, grid **1200 px** at x **120**.
  Padding is 72 px at ≥ 1,200, 64.8 at 1,080, 38.4 at 640, and floors at **36 px** at ≤ 600.
- Grid: `repeat(auto-fit, minmax(240px, 1fr))`, `gap: 20px`, `margin/padding: 0`, `list-style: none`.
  Four columns of **285 px** at 1200 (1200 − 3 × 20 = 1140 ÷ 4).
- Column thresholds are pure arithmetic on the grid width `G`: `4` needs `4·240 + 3·20 = 1020` →
  **viewport 1052**; `3` needs `760` → **792**; `2` needs `500` → **532**.
  Measured on a +2 px viewport sweep: **531 → 1, 532 → 2, 790 → 2, 792 → 3, 1050 → 3, 1052 → 4**
  columns, i.e. the three arithmetic thresholds exactly.
- Head: `max-width: 620px`, `margin-bottom: 32px`, `h1` on its own line → head **620 × 103.3** at
  (120, 72) and the grid starts at **y 207.3**.
- Card: `min-height: 320px`, and **320 is the actual height at every width probed** (320 → 1440),
  because both faces are absolutely positioned inside it.

### Component geometry (1440 px, card 1, coordinates relative to the card's border box, 285 × 320)

| part        | box                                                            |
| ----------- | -------------------------------------------------------------- |
| front face  | **285 × 320** at (0,0), `padding: 24px`, radius 24, coral       |
| pill        | at **(24, 24)**, **122 × 28.84** for "noun · feminine" (card 2 "verb" is 56 wide) |
| word        | at y **111.4**, **237 wide**, **80 tall** — **two lines** at 40 px (`la sobremesa`) |
| say         | at y **195.4**, 21.75 tall                                     |
| hint        | at **(212, 275.7)**, **49 × 20.3** — right-aligned by `align-self: flex-end` |
| back face   | **285 × 320**, `border: 2px`, `padding: 24px`, radius 24, white |
| label       | at **(26, 26)**, **233 × 18.13** (`2 border + 24 padding`)      |
| meaning     | at y **52.1**, **74.06** (3 lines at 24.7)                      |
| example     | at y **140.2**, **233 × 63.5** (2 lines + 20 px padding)        |
| translation | at y **209.7**, **40.59** (2 lines at 20.3)                     |
| counter     | at y **263.2**, **30.84** — `margin-top: auto`, `padding-top: 12` |

Back-face arithmetic that must reproduce exactly (card 1, 316 px content box):
`2 (border) + 24 (pad) + 18.13 (label) + 8 (margin) + 74.06 (meaning) + 14 (margin) + 63.5 (example)
+ 6 (margin) + 40.59 (translation) + 30.84 (counter) + 24 (pad) + 2 (border) = 307.12`, with the
**`margin-top: auto` on the counter absorbing the remaining 12.88 px** (measured 12.875) — so the counter is bottom-anchored
and every other run is top-anchored.

### Responsive matrix (measured; the card height never moves)

| viewport | columns | grid width | card width | card height | head title | band height | document |
| -------: | ------: | ---------: | ---------: | ----------: | ---------: | ----------: | -------: |
|     1440 |       4 |       1200 |        285 |         320 |  46 px, 1 line |      599.3 | 900 (viewport) |
|     1280 |       4 |       1200 |        285 |         320 |  46 px, 1 line |      599.3 | 900 |
|     1200 |       4 |       1168 |        277 |         320 |  46 px |      599.3 | 900 |
|     1100 |       4 |       1068 |        252 |         320 |  44 px |      585.19 | 900 |
|     1080 |       4 |       1048 |        247 |         320 |  43.2 px |      581.95 | 900 |
|     1079 |       4 |       1047 |      246.8 |         320 |  43.16 px |      581.78 | 900 |
|     1024 |       3 |        992 |      317.3 |         320 |  40.96 px |      912.88 | **913** |
|      900 |       3 |        868 |        276 |         320 |  36 px |      892.8 | 900 |
|      830 |       3 |        798 |      252.7 |         320 |  33.2 px |      881.45 | 900 |
|      814 |       3 |        782 |      247.3 |         320 |  32.56 px |      878.84 | 900 |
|      792 |       3 |        760 |        240 |         320 |  31.68 px |      875.3 | 900 |
|      768 |       2 |        736 |        358 |         320 |  30.72 px |      871.41 | 900 |
|      640 |       2 |        608 |        294 |         320 |  30 px |      855.28 | 900 |
|      600 |       2 |        568 |        274 |         320 |  30 px |      850.5 | 900 |
|      560 |       2 |        528 |        254 |         320 |  30 px |      874.5 | 900 |
|      532 |       2 |        500 |        240 |         320 |  30 px |      874.5 | 900 |
|      531 |       1 |        499 |        499 |         320 |  30 px |     1554.5 | 1555 |
|      390 |       1 |        358 |        358 |         320 |  30 px |     1554.5 | 1555 |
|      320 |       1 |        288 |        288 |         320 |  30 px **2 lines** | 1610 | 1610 |

The **band is shorter than the viewport** at 1440 (599.3 against 900), so `documentElement.scrollHeight`
reads **900** there — the same trap as `card-08`. Read `body.getBoundingClientRect().height` for the
band. The only **desktop** width whose document exceeds the 900 px viewport by a hair is **1,024 (913)**.

## Requirements

### Requirement 1: Page shell and the single flashcard band

The app SHALL render one band on the lavender ground `#f1eefb` — a head over a four-card grid — with
**no navigation, no deck selector, no progress bar, no search field, no "next card" control, no rating,
no audio button** and no page background image.

#### Scenario: Ground and container at 1440

- **GIVEN** a 1440 × 900 viewport with the webfont loaded
- **WHEN** the page is measured
- **THEN** `<body>` background is **`#f1eefb`** (`rgb(241,238,251)`) and the band is **599.3 px** tall
- **AND** the container is **1232 px outer / 1200 px content** at x **104**, `padding: 72px 16px`,
  `color: #1e1b2e`
- **AND** the container's `box-sizing` is **`content-box`** — the 1232 px figure is the artefact of the
  sheet's `all: revert` guard, not a second `max-width`
- **AND** the document is **900 px** tall (the band is shorter than the viewport), so no scrollbar
  appears at 1440

#### Scenario: No invented sections or controls

- **GIVEN** the rendered app
- **THEN** it contains exactly one band: one `h1`, one eyebrow, one sub-line, four cards
- **AND** it contains **no** search field, filter chip, sort control, deck progress, "load more",
  pagination, rating, price, audio player, second band or multi-column footer
- **AND** the only element below the grid is the single Component Dock attribution line
  (Requirement 11)

#### Scenario: The document title and language

- **GIVEN** the built `index.html`
- **THEN** `lang="en"` and the title names the recreation (e.g. "Lexeme — language flashcards"), **not**
  the catalogue item "Card V09 | Colorlib"
- **AND** no `*.colorlib.com` string appears in any app file

### Requirement 2: The head — a violet eyebrow, a clamped title and one line of instructions

The app SHALL render a header block (`max-width: 620px`, `margin-bottom: 32px`) holding a 14 px violet
eyebrow, a `clamp(30px, 4vw, 46px)` display title and a 16 px sub-line, left-aligned, with **nothing on
the right**.

#### Scenario: Head geometry at 1440

- **THEN** the head is **620 × 103.3** at (120, 72) and the grid starts at **y 207.3**
- **AND** the eyebrow "Everyday Spanish · Deck 3" is **14 px / 600** in `#5b21b6`, one line, 17 px box
- **AND** the `h1` "Words worth knowing" is **46 px / 800 / 1.05 / −.035em** in `#1e1b2e`, **one line**
  (48.3), `margin: 6px 0 8px`
- **AND** the sub-line "Hover a card, or tap it (Enter or Space on a keyboard), to see the meaning." is
  **16 px / 400 / 1.5** in `#4a4560`, one line (24 px)
- **AND** the separator is **U+00B7** (middle dot), not a hyphen and not U+2022

#### Scenario: The title clamps in three steps

- **THEN** `font-size` is **46 px at ≥ 1,150**, **4 vw between 751 and 1,149**, and **30 px at ≤ 750**
- **AND** at 1440 the title is **one line** inside 620 px; the hosted face is ~4.9 % wider than the
  archive's, which still fits (452 → 474 px of text)
- **AND** the title wraps to **two lines at ≤ 340 px and one line at ≥ 341** (measured per-pixel) —
  the only width where the head takes two lines is the narrowest phone

### Requirement 3: The grid is arithmetic, not breakpoints

The app SHALL lay the four cards out with `repeat(auto-fit, minmax(240px, 1fr))` and a **20 px** gap,
producing 4 / 3 / 2 / 1 columns at the measured thresholds.

#### Scenario: Column counts

- **THEN** **4 columns at ≥ 1052**, **3 at 792 – 1051**, **2 at 532 – 791**, **1 at ≤ 531**
- **AND** there is **no column media query** in the source — the thresholds are the `minmax` arithmetic
- **AND** the card width therefore swings **240 → 285 px** while the card height stays **320**

#### Scenario: No horizontal scroll

- **THEN** `body.scrollWidth === documentElement.clientWidth` and `window.scrollTo(300, 0) → scrollX 0`
  at 320, 360, 390, 480, 531, 532, 547, 768, 1,024 and 1,440
- **AND** the document height matches the matrix — **900** at 1440 (viewport-bound), **913** at 1,024,
  **1,555** at 531 / 480 / 390 / 360, **1,610** at 320

### Requirement 4: The card shell — 320 px, 24 px radius, one 3D context

The app SHALL give every card `min-height: 320px`, `perspective: 1200px`, `border-radius: 24px` on both
faces, `font-size: 15px` and `line-height: 1.45`, with **both faces absolutely positioned at `inset: 0`**
so the card never resizes.

#### Scenario: Constant geometry

- **THEN** every card measures **320 px** tall at 320 / 390 / 480 / 531 / 532 / 547 / 768 / 814 / 1,024 /
  1,080 / 1,200 / 1,440
- **AND** each card is **285 px** wide at 1,440 (1200 − 3 × 20 = 1140 ÷ 4) and **240 px** at the 792 /
  532 thresholds
- **AND** the radius is **24 px** — not 20, not 22 — on the front face, the back face **and** the
  transparent button (so the focus outline's rounded rect matches the tile)

#### Scenario: The decorative disc is clipped on purpose

- **THEN** `.cl-card09__front` carries a `160 × 160` `rgba(255,255,255,.18)` circle at
  `right: -40px; bottom: -40px`
- **AND** because of it the front face's `scrollHeight` is **always exactly 40 px more than its
  `clientHeight`** (360 vs 320 at every width probed) — this is the clipped disc, **not** overflowing
  copy, and it must not be "fixed"
- **AND** the "Flip" hint sits at `z-index: 1` so it paints **above** the disc

### Requirement 5: The front face — pill, word, pronunciation, hint

The app SHALL render, in order, a **position pill** (`align-self: flex-start`), the **word** at
`clamp(32px, 3vw, 40px)`, the **pronunciation** at 15/600 `opacity: .85`, and the **"Flip" hint**
(`align-self: flex-end`, `gap: 6px`, 18 × 18 stroked icon), with the front filled by
`--cl-card09-face` and inked by `--cl-card09-ink`.

#### Scenario: Front geometry and type

- **THEN** the pill is **122 × 28.84** at (24, 24) for "noun · feminine", `13 px / 600`, `1.5px` border
  in `currentColor`, radius `999`, padding `4px 10px`
- **AND** the word is **two lines** (`la sobremesa`, 80 px) at 40 px on card 1 at 1,440, `800` weight,
  `line-height: 1`, `−.03em`, with `margin: auto 0 4px` so the flex spacer sits **above** it
- **AND** the pronunciation `/so·bre·ME·sa/` is 15/600 at `opacity: .85`, `margin: 0 0 auto`
- **AND** the hint reads "Flip" with a circular-arrow SVG at `fill: none; stroke: currentColor;
  stroke-width: 2; stroke-linecap/linejoin: round`

#### Scenario: Per-card colour comes from inline custom properties

- **THEN** each `<li>` sets `--cl-card09-face` and `--cl-card09-ink` inline; the four pairs are
  `#ff6b4a`/`#2b0b03`, `#5b5bf0`/`#ffffff`, `#ffc53d`/`#2e2000`, `#14b8a6`/`#022c28`
- **AND** the front's `background` is `var(--cl-card09-face)` and its `color` is `var(--cl-card09-ink)`,
  while the **back never uses `--cl-card09-ink`** — it is `#1e1b2e` on white for all four cards
- **AND** the third property, `--cl-card09-speed: .7s`, is declared once and **never re-set** — keep the
  token as a theming hook, do not invent per-card speeds

### Requirement 6: The back face — label, meaning, example, translation, counter

The app SHALL render the back as **white paper with a `2px solid var(--cl-card09-face)` border**, holding
a 12.5 px UPPERCASE violet **MEANING** label, the definition at 19/600, the **example sentence in a
`#f4f2fb` block** (radius 12), the **translation** at 14/400 in `#4a4560`, and a **"Card N of 40"**
counter pinned by `margin-top: auto`.

#### Scenario: Back geometry and type

- **THEN** the label sits at (26, 26) — `2px` border + `24px` padding — at `12.5 px / 600`, `.1em`
  tracking, UPPERCASE, `#5b21b6`
- **AND** the meaning is **19 px / 600 / 1.3** (74.06 px for card 1's three lines), `margin: 8px 0 14px`
- **AND** the example is `15 px / 600` on `#f4f2fb`, `10px 12px`, radius **12**, and the translation
  `14 px / 400` in `#4a4560` with `margin-top: 6px`
- **AND** the counter is `13 px / 600` in `#4a4560` with `padding-top: 12px` and `margin-top: auto`, so
  it is flush with the bottom padding while every other run is top-anchored

#### Scenario: A `dl`-free, heading-free back

- **THEN** the back contains **no `<h2>`/`<h3>`** — the label is a `<p>`, exactly as the reference has
  **0 headings below the `h1`**
- **AND** the example and the word carry `lang="es"` while the translation and the meaning stay `en`

### Requirement 7: The flip — hover, click, and the `is-manual` latch

The app SHALL flip a card by rotating its inner wrapper `180deg` over `.7 s cubic-bezier(.3,.8,.3,1)`,
on **hover** for `(hover: hover)` pointers **and** on activation of the card's button — and the button's
first activation SHALL latch the card into manual mode so the hover rule can no longer fight it.

#### Scenario: Hover flips, and stops flipping once the user has tapped

- **GIVEN** a `(hover: hover)` pointer
- **WHEN** the pointer enters a card for the first time
- **THEN** the inner wrapper reads `matrix3d(-1,0,0,0, 0,1,0,0, 0,0,-1,0, 0,0,0,1)` (a 180° Y rotation)
  after ~1.1 s
- **AND** the page has **0 occurrences of `.is-manual`** and the card's classes are unchanged — the
  hover flip is **pure CSS** and touches no state
- **AND** after the button is activated once, the card carries **both `is-manual` and `is-flipped`** and
  the `:hover` rule is inert for the rest of the page's life (that latch is the design: it stops the
  card from flipping back while the pointer is still on it)

#### Scenario: Activation is idempotent per card

- **THEN** clicking, tapping, pressing **Enter** or pressing **Space** toggles only **that** card
- **AND** hovering card 1 does not flip cards 2–4 (`:hover`, not `:focus-within`, not a group rule)
- **AND** there is **no JavaScript animation**: the transition is CSS and the script only toggles
  classes and ARIA

### Requirement 8: Accessibility — a real button, a synced hidden face, and Escape

The app SHALL wrap each card in a `<button type="button">` that fills it (`position: absolute; inset: 0;
z-index: 3`, transparent, radius 24), carrying `aria-pressed` and an `sr-only` name, and SHALL keep
`aria-hidden` in step with which face is visible — including on hover.

#### Scenario: The control itself

- **THEN** there are **4 focusable elements** on the page and **0 anchors, 0 forms, 0 inputs**
- **AND** each button's accessible name is "Flip card: <word>" via an `sr-only` `<span>` (`clip:
  rect(0 0 0 0); clip-path: inset(50%)`), and its `aria-pressed` is `"false"` at rest / `"true"` flipped
- **AND** `elementFromPoint` at the centre of the pill, the word and the hint all return the button —
  the whole tile is one hit area, and the card's copy is **not selectable**
- **AND** the focus ring is `3px solid #1e1b2e` at `outline-offset: 4px`, drawn **outside** the tile on
  the ground (`14.67:1`) — it does not depend on the card's colour

#### Scenario: `aria-hidden` follows the flip — and the reference only does this for manual flips

- **THEN** on load the script sets the **front** to `aria-hidden="false"`; the back keeps the markup's
  `aria-hidden="true"`
- **AND** on activation the faces swap (`front: true`, `back: false`) and `aria-pressed` mirrors it
- **AND** the app **SHALL also do this on hover**: the reference flips the card visually on hover while
  leaving `aria-pressed="false"` and `back aria-hidden="true"` (measured at 1440) — a screen reader then
  reads a face the user cannot see. Mirror the state on `pointerenter`/`pointerleave`, or drop the
  hover flip in favour of focus/activation only

#### Scenario: Escape

- **THEN** pressing **Escape** while a flipped card's button has focus clears `is-flipped`, sets
  `aria-pressed="false"` and leaves `is-manual` in place (the card stays hover-immune)
- **AND** Escape on a card that is **not** flipped is a no-op — no error, no console output

### Requirement 9: Reduced motion is a crossfade, not a fast spin

Under `prefers-reduced-motion: reduce` the app SHALL remove the rotation entirely and crossfade the two
faces at `.2 s linear`.

#### Scenario: Measured under `reducedMotion: 'reduce'`

- **THEN** `.cl-card09__inner` reads `transform: none` **and** `transition-duration: 0s`
- **AND** the back face reads `transform: none; opacity: 0`, and the front `opacity: 1` with
  `transition: opacity .2s linear`
- **AND** after activation the front is `opacity: 0` and the back `opacity: 1` while the inner wrapper
  **still** reads `transform: none` — no rotation ever happens
- **AND** `aria-pressed` / `aria-hidden` behave exactly as in the normal path

### Requirement 10: Touch is a first-class path

The app SHALL work with no hover, using only taps.

#### Scenario: A real touch context

- **GIVEN** a context created with `hasTouch: true, isMobile: true`
- **THEN** `matchMedia('(hover: none)')` is true and `(hover: hover)` is false, and every card is
  **unrotated** before interaction
- **AND** one tap gives the card `is-manual is-flipped`, `aria-pressed="true"` and the `matrix3d` flip —
  the same state a click produces in a desktop context
- **AND** a second tap returns it to `is-manual` only, `aria-pressed="false"`, `transform: none`

### Requirement 11: Semantics, copy fidelity and attribution

The app SHALL use one `h1`, a `<ul>`/`<li>` grid, a `<button>` per card, `lang="es"` on the Spanish
runs, and the reference's copy.

#### Scenario: Copy

- **THEN** the eyebrow is `Everyday Spanish · Deck 3`, the `h1` is `Words worth knowing`, and the sub-line
  is `Hover a card, or tap it (Enter or Space on a keyboard), to see the meaning.`
- **AND** the four cards carry exactly the pill / word / pronunciation / meaning / example / translation /
  counter quoted in Requirements 5 and 6 — `la sobremesa`, `madrugar`, `estrenar`, `el antojo` — with
  the middle dots of the pronunciation written as **U+00B7** and the example quotes as **U+201C/U+201D**
- **AND** copy may be paraphrased but must keep the same *kind* (a word, a phonetic spelling, a one-
  sentence definition, an example, its translation, a position counter) and the **same line counts at
  237 px wide** — card 1's definition is **three lines**, its example **two**, its translation **two**

#### Scenario: Attribution and provenance

- **THEN** a single footer line links `https://www.componentdock.com/` as "Component Dock" — the only
  deliberate addition to the reference
- **AND** no app file mentions ColorLib, `card-09` or `Card V09`; provenance lives here, in
  `TEMPLATES.md` and in the PR

## Screenshot analysis (catalogue image, `card-09.jpg`)

- **`card-09.jpg` is 20,831 B of AVIF behind a `.jpg` extension** (`PIL` opens it; `file` says *ISO
  Media, AVIF*) — convert before viewing. `card-09-featured.jpg` and `card-09-free-template.jpg` are
  **404** (146 B HTML), so the listing image is the only one: **1,200 × 972**, white frame with the
  preview host's **macOS browser chrome** baked in (traffic lights + a `preview.colorlib.com` URL bar) —
  the same framing as `card-06.jpg` / `card-07.jpg` / `card-08.jpg`.
- **It is a scaled render, not a 1,200 px layout.** The page inside the frame spans ≈ **1,120 px** against
  a real **1,440**, and one card measures **219 px** against a real **285**: scale ≈ **0.775 – 0.782**.
  Measure nothing from it — and do not conclude "the design is 1,200 wide".
- It shows the **whole page, uncropped**: violet eyebrow, one-line title, the instruction line, one row
  of four cards, and the 72 px band padding. Below the cards the lavender continues to the frame's bottom
  edge because the page is shorter than the capture window.
- **Every card is collapsed.** The catalogue image is **not** evidence for the back face, the flip, the
  crossfade or the `is-manual` latch — those come from the live DOM only. Anyone recreating this from the
  screenshot alone would ship a coloured card grid with no meaning, no example and no counter, i.e. half
  the design.
- **It does record the one wrap that matters:** the first card's word is **two lines** in the image
  (`la` / `sobremesa`) at 40 px, while cards 2–4 are one line — and the same card is **one line** at
  1,280 px, where the card is *the same 285 px wide* but the word renders at 38.4 px (defect 4).
- Visual read: a **cool lavender** ground (sampled `#f0eefb` — 1–2 digits off the real `#f1eefb`, JPEG
  noise); **four saturated faces in one row** — coral, indigo, amber, teal — doing all the colour work
  while the type stays ink-on-face; a **heavy 46/800 title with tight negative tracking** as the only
  large type; **white hairline pills** at the card tops reading as grammar labels rather than controls;
  a soft **`rgba(255,255,255,.18)` quarter-disc** at each card's bottom-right corner that reads as a
  highlight, not a shape; and a **24 px radius** that makes the tiles read as paper cards.
- Hierarchy is carried by **size and weight, not colour**: 46/800 title, 40/800 words, 19/600 meaning,
  13–16 px everything else. The only shared hues are the lavender ground and the violet label.

## Known reference defects (do not copy)

1. **The hover flip leaves the accessibility tree on the wrong face.** Measured at 1440: hovering card 1
   rotates it to the back while `aria-pressed` stays `"false"`, the back keeps `aria-hidden="true"` and
   the front keeps `aria-hidden="false"` — so a screen reader reads the *hidden* face while a sighted
   user sees the visible one. The page's own feature list ("Hidden face removed from the accessibility
   tree") is true **only for manual flips**. Sync both on `pointerenter`/`pointerleave`, or drop the
   hover flip.
2. **The indigo card's pronunciation fails AA.** `.cl-card09__say` is `opacity: .85`, which turns white
   into `#e6e6fd` on `#5b5bf0` → **4.07:1** at 15 px/600 (AA needs 4.5). The other three cards clear it
   (5.16 on coral, **6.99** on amber, **4.62** on teal). Fix on the indigo card only: drop the opacity, or lift
   the face to ~`#6a6af5`. Do **not** lighten the other three — their front ink is deliberately dark.
3. **The back face overruns its own padding on narrow cards.** When the card is **< 253 px** wide —
   which happens in three bands, at viewports **532 – 556, 792 – 830 and 1052 – 1102** — card 1's back
   reads `scrollHeight 328` against `clientHeight 316`: the "Card 1 of 40" line sits **11.8 px below the
   content box**, inside the 24 px bottom padding, and `overflow: hidden` is one longer definition away
   from cutting it. Measured visually at 814: the counter is fully visible but crowds the border. Give
   the back `min-height: 0` + a slightly tighter meaning clamp, or let the card grow to `min-height:
   max(320px, content)` — **never** reproduce a fixed 320 that clips copy.
4. **The word's line count depends on the viewport, not the card.** `.cl-card09__word` is
   `clamp(32px, 3vw, 40px)`, so `la sobremesa` is **two lines at 1,440 (40 px)** and **one line at 1,280
   (38.4 px) on a card of exactly the same 285 px width**. A recreation that fixes the word at 40 px
   will wrap at 1,280 where the reference does not; one that fixes it at 36 px will not wrap at 1,440.
   Keep the clamp, and verify both widths.
5. **The hosted face is wider than the archive's.** Google Fonts' current Bricolage Grotesque measures
   **474 / 488 / 507 px** for the h1 string at 46 px against the archive's **452 / 475 / 483** —
   **+4.9 % / +2.7 % / +4.6 %**. It still fits 620 px, so accept the tracking drift; do not shrink the
   type to compensate, and do not self-host the archive's file to chase 2 %.
6. **`.cl-icon` is dead for the eighth sibling in a row** — 22 markup classes, 49 selectors, the `.cl-icon`
   rule (`height: 1em; width: auto; fill: currentColor`) never selected by any element. The flip glyph
   inside `.cl-card09__hint` carries its own `svg` sizing instead.
7. **`--cl-card09-speed` is declared once and never overridden** — three custom properties, two of them
   per-card inline, the third a theming hook with no data behind it (same shape as `card-07`/`card-08`).
8. **The counter claims a deck that does not exist.** Every card says "Card N of 40" while the page
   renders **4** cards and has no deck, no progress and no navigation. Keep the string (it is the
   design's only data affordance) but derive it from a `deckSize` constant so an implementer can change
   it in one place — do **not** add pagination to "fix" it.
9. **The `sr-only` label duplicates what the card already says.** The button's name is "Flip card: la
   sobremesa" and the front's word is visible text inside the same card, so a screen reader hears the
   word twice. Prefer naming the control "Flip card" and letting the visible runs carry the content, or
   `aria-labelledby` the word.
10. **The whole card is a button, so the copy cannot be selected.** `position: absolute; inset: 0;
    z-index: 3` puts the button above every run. That is the correct trade for a flashcard — but do not
    "improve" it by adding a second "reveal" link, which would give the card two tab stops and make
    `aria-pressed` ambiguous.

## Adapting to the repo (deltas the implementer owns)

| reference                                              | recreation                                                                    |
| ------------------------------------------------------ | ----------------------------------------------------------------------------- |
| `max-width: 1200px` on a `content-box` element          | `max-w-[1232px] px-4` (content 1200) — **`max-w-[1200px] px-4` would give a 1168 grid and 277 px cards** |
| `padding: clamp(36px, 6vw, 72px) 16px`                  | `py-[clamp(36px,6vw,72px)] px-4`                                              |
| `repeat(auto-fit, minmax(240px, 1fr))`, `gap: 20px`      | `grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5`                    |
| `min-height: 320px` + two `absolute inset-0` faces       | `min-h-80 relative` + `absolute inset-0` on both faces (no `flex`, no height on the inner wrapper beyond `h-full min-h-[inherit]`) |
| `perspective: 1200px` / `preserve-3d` / `backface-hidden` | `[perspective:1200px]`, `[transform-style:preserve-3d]`, `[backface-visibility:hidden]` — Tailwind 4 has no core utility for these |
| `transform .7s cubic-bezier(.3,.8,.3,1)`                 | `transition-transform duration-700 ease-[cubic-bezier(.3,.8,.3,1)]`            |
| `@media (hover: hover) .not(.is-manual):hover`           | `[@media(hover:hover)]:hover:[transform:rotateY(180deg)]` on the inner wrapper, gated by a `data-manual` attribute (`data-[manual]:![transform:none]`) — or a plain CSS block in `index.css` |
| `@media (prefers-reduced-motion: reduce)` crossfade      | Tailwind `motion-reduce:` variants: `motion-reduce:transition-none motion-reduce:[transform:none]` + opacity crossfade on the faces |
| `--cl-card09-face` / `--cl-card09-ink` inline per `<li>`  | a typed `DeckCard` record (`face`, `ink`) rendered as `style={{ '--face': card.face }}`; put `--color-face`/`--color-face-ink` in `@theme` for the fallbacks |
| Bricolage Grotesque woff2 ×6 (2 binaries)                | one Google Fonts `<link>`: `css2?family=Bricolage+Grotesque:wght@400;600;800&display=swap` |
| the `:where(html) … { all: revert }` guard (60 lines)    | **do not port it** — Tailwind's preflight is the equivalent                          |
| 0 scripts for the hover flip; ~35 lines for the toggle    | one small handler per card (or one delegated handler): toggle `aria-pressed` + the flip flag + `aria-hidden`, `Escape` on the button |
| no footer                                                | one Component Dock attribution line (repo rule)                                 |
| `#f1eefb` / `#1e1b2e` / `#5b21b6` / `#4a4560` / `#f4f2fb` | `@theme` tokens `--color-ground`, `--color-ink`, `--color-accent`, `--color-muted`, `--color-well` |
| 4 SVG flip glyphs                                         | one `lucide-react` `RotateCw` / `RefreshCw` icon at `18px`, or inline the reference's 24-box path |

## Verification checklist

- [ ] `apps/lexeme` exists, package `@free-react-templates/lexeme`, `public/CNAME` =
      `lexeme.free.componentdock.com`, `"homepage"` = `https://lexeme.free.componentdock.com`
- [ ] `grep -ri colorlib apps/lexeme` and `grep -ri 'card-09\|Card V09' apps/lexeme` → **no matches**
- [ ] `body` background is `#f1eefb`; container is 1232 outer / 1200 content, `padding: 72px 16px` at
      1440; band **599.3** tall; document 900 (no scrollbar at 1440)
- [ ] eyebrow 14/600 `#5b21b6` with a **U+00B7**; `h1` 46/800/1.05/`−.035em`, 620 max-width, **1 line**
      (48.3) at 1440, 30 px and 1 line at 390, **2 lines at 320**
- [ ] grid columns: **4 at 1052, 3 at 1050, 3 at 792, 2 at 790, 2 at 532, 1 at 531** — with **no**
      column breakpoint class in the source
- [ ] exactly 4 `<li>`, 4 `<button>`, **0** anchors, **0** forms, **0** images, 4 focusable elements
- [ ] every card is **320 px** tall at 320 / 390 / 480 / 532 / 547 / 768 / 814 / 1,024 / 1,080 / 1,200 /
      1,440 and **285 px** wide at 1440
- [ ] radius **24 px** on both faces **and** the button; `perspective: 1200px`; `preserve-3d` on the
      inner wrapper; `backface-visibility: hidden` on both faces
- [ ] front: pill 122 × 28.84 at (24,24) `13/600` radius 999 border `1.5px currentColor`; word
      `clamp(32px,3vw,40px)`/800/1/`−.03em` **2 lines at 1440 and 1 line at 1280**; say 15/600
      `opacity .85`; hint 14/600 with an 18 px stroked icon
- [ ] the decorative disc: `160 × 160` `rgba(255,255,255,.18)` at `right/bottom: -40px`, clipped, and the
      hint above it (`z-index: 1`); front `scrollHeight − clientHeight === 40` at every width
- [ ] back: white, `2px solid var(--face)`, label `12.5/600` UPPERCASE `.1em` `#5b21b6`; meaning
      `19/600/1.3`; example `15/600` on `#f4f2fb` radius 12; translation `14/400 #4a4560`; counter
      `13/600` `margin-top:auto` + `padding-top:12`
- [ ] no back-face content overruns its padding at any width: `scrollHeight − clientHeight ≤ 0` for
      every card at 320 / 390 / 532 / 548 / 792 / 814 / 1,052 / 1,080 / 1,440 (**fix defect 3**)
- [ ] hover flips via CSS only (no class change), is gated on `(hover: hover)`, and a first
      activation latches `is-manual` so hover stops fighting it
- [ ] click / tap / Enter / Space toggle only that card; `aria-pressed` mirrors it
- [ ] **`aria-hidden` follows the visible face on hover too**, not only on manual flips (**fix defect 1**)
- [ ] Escape clears the flip and `aria-pressed` while leaving the hover latch in place; Escape on an
      unflipped card is a no-op
- [ ] indigo card's pronunciation clears **4.5:1** (**fix defect 2**); the other three faces/inks keep
      6.47 / 10.06 / 6.05
- [ ] `prefers-reduced-motion: reduce` → inner `transform: none` + `transition-duration: 0s`, faces
      crossfade at `.2 s linear`, no rotation after activation
- [ ] touch context (`hasTouch`, `isMobile`): `(hover: none)` true, one tap flips, second tap returns
- [ ] focus ring `3px solid #1e1b2e` at offset 4, drawn outside the tile, on the lavender ground
- [ ] `elementFromPoint` over the pill / word / hint returns the button (whole-tile hit area)
- [ ] no horizontal scroll: `scrollTo(300,0) → scrollX 0` at 320 / 360 / 390 / 531 / 532 / 768 / 1,024 /
      1,440; document heights match the matrix (900 at 1440, 913 at 1024, 1555 at 531 and below 480,
      1610 at 320)
- [ ] `lang="es"` on the four words and four example sentences; `lang="en"` on the page; U+00B7 in the
      eyebrow and the pronunciations, U+201C/U+201D around the examples
- [ ] footer links `https://www.componentdock.com/` as "Component Dock"
- [ ] `npm run verify:app lexeme` (typecheck + lint + knip + fallow + 100 % coverage tests + build)
      passes; `openspec validate template-lexeme --type spec` is valid
- [ ] `TEMPLATES.md` row added under `## Bootstrap Cards (20)`, **directly after the last shipped card
      row**, with the line quoted in §Why this design has no row
