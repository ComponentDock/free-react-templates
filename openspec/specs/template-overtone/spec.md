# Template: Overtone (Hero — a product hero for an over-ear headphone: one photograph, three colour swatches, a buy row)

## Purpose

**One landing screen for a product page** — the sixth variant of the `hero` snippet family, and the family's first
entry that is a **shop** hero: a cream page under a dark 70 px wordmark bar, then a two-column product block — a
**5:4 rounded photograph** of over-ear headphones with a white colour pill in its top-left corner and a
**three-badge spec strip floating over its bottom edge**, facing a shop column that runs eyebrow → headline →
star rating → price row (`$249` / struck `$299` / a peach `Save $50` chip) → three-line description → a
**`fieldset` of three 44 px colour swatches** → a green stock line → an ink **Add to cart** bar beside a square
wishlist toggle → a hairline that opens into three icon perks.

It is also the family's first variant with **photography**: `images/midnight.jpg`, `stone.jpg` and `blush.jpg`
are the design, and the three radios swap the `<img>`'s `src`, its `alt`, the caption pill, the caption dot's
colour and the stock line. There is **one** `<img>` in the document, **no** form, **no** `<h2>`, and one script
(`js/snippet.js`, 3,375 B) whose three initialisers are the menu, the swatches and the wishlist.

At 1440 × 900 the document is **exactly 900 px** — the hero is 749.64 px tall and `main { flex:1 }` centres it
with 80.36 px of slack split top and bottom. That fit is a **band, not a rule**: at 901 px it is still 900, and
at **900 px the grid collapses to one column and the document becomes 1421** (see trap 1). Every width from 901
up fits in 900; nothing below 901 does.

- **Source slug:** `hero-06`
- **ColorLib page:** https://colorlib.com/wp/template/hero-06/ — **HTTP 200, 113,693 B**, `<title>`
  `Hero V06 - Free Bootstrap Hero Sections 2026 - Colorlib`, `h1` **"Hero V06"**, `datePublished`
  **2026-09-25T15:09:03+00:00**, meta description _"A product hero for an online audio shop, pairing a large
  product photo with the headline, rating, sale price,… Free download, no jQuery or plugins."_, and the claim
  _"the download is 342 KB"_ (measured **350,577 B = 342.4 KiB** ✓).
  **The design name the naming audit reads is ColorLib "Hero V06".**
- **Preview URL (live, verified):** https://preview.colorlib.com/theme/bootstrap/hero-06/ — **HTTP 200,
  7,604 B**, `<title>` `Hero V06 | Colorlib`, `lang="en"`, **one** stylesheet (`css/style.css?v=652edf3d`,
  `fetchpriority="high"`) and **one** `<script src="js/snippet.js?v=00dc53e6">`. The slug-only path
  `theme/hero-06/` is **404 (9 B)** and `theme/bb/hero-06/` is **404 (9 B)**: the `bootstrap/` prefix is the
  only live path, as for every card, alert and hero variant before it.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/hero-06.jpg — **HTTP 200, 35,124 B**,
  **1200 × 972**, served as **AVIF behind a `.jpg`** name (fifth of the family's six). It is a **macOS browser
  mock-up** on a white ground with a drop shadow and a `preview.colorlib.com` URL pill; the page inside the frame
  is **~1120 px** wide and shows the hero **with Midnight selected**. Do not adopt the frame.
- **Design category:** Hero (**product / e-commerce hero — dark bar, 5:4 product photo with a floating badge
  strip, colour-swapping photograph, price + rating + buy row**; variant 6 of the **12**-variant `hero` family).
- **Stack to build:** Vite · React 19 · Tailwind CSS 4 · TypeScript strict, in `apps/overtone`, package
  `@free-react-templates/overtone`, CNAME `overtone.free.componentdock.com`.

## Why this design has no row in `TEMPLATES.md` (catalogue gap, measured 2026-10-26)

`TEMPLATES.md` is fully `[x]` — **0** `- [ ]` and **0** `[~]` rows (the only `[~]` is the status legend on line 12) — so this design comes from `docs/catalog-coverage.md`, which lists **214 snippet variants in 19 families**
that ColorLib's own listing carries and the checklist never recorded. `hero-06` is **variant 6 of 12** in the
`hero` family. The family is worked in variant order: variant 1 → proscenium (shipped), variant 2 → afterglow
(shipped), variant 3 → presswork (shipped), variant 4 → tendril (prepped, not yet built), variant 5 → epistle
(prepped, not yet built), and this prep is **variant 6**.

## Bootstrap Heroes (12)

`## Bootstrap Heroes (12)` opens at **line 830** of `TEMPLATES.md`, between `## Bootstrap Footers (20)` and
`## Bootstrap Modals (20)`. Answered on main `d8dea3492` the section holds **three** rows — Hero 01 → proscenium,
Hero 02 → afterglow, Hero 03 → presswork. The row grammar in this section is `[colorlib] · ![preview] · [app]` —
**preview in the middle**:

```markdown
- [x] **Hero 06** — [colorlib](https://colorlib.com/wp/template/hero-06/) · ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/hero-06.jpg) · [overtone](https://overtone.free.componentdock.com)
```

Insert it **after** whichever hero rows exist at that moment, keep that grammar, and **re-read the surrounding
lines immediately before pushing** — the implementer streams rewrite this file, and the section has grown rows
mid-run before.

**The name.** `overtone` — one lowercase word for a component tone that sits above the fundamental; it is an
audio word, which is the design's subject, and it keeps the snippet families' closed-single-word pattern
(`nameplate`, `octavo`, `wafer`, `proscenium`, `tendril`, `epistle`). Verified free on main:
`git grep -il overtone` → **0 files**; no `apps/overtone`; no `openspec/specs/template-overtone`; no
`docs/templates/overtone`; no `**Overtone**` row in `TEMPLATES.md`; and all three ColorLib URLs miss —
`colorlib.com/wp/template/overtone/` **404**, `preview.colorlib.com/theme/overtone/` **404**,
`preview.colorlib.com/theme/bootstrap/overtone/` **404**.

Checked and **free** for later variants of this family: **`soundstage`**, **`earcup`** (each 0 files, 0 folders,
all three ColorLib URLs 404). Rejected on measurement: `timbre` (1 file — a spectrogram note in
`skills/creative/ascii-video/references/inputs.md`), `decibel` / `airwave` (26 and 33 files, and each already an
app), `waveform` (15 files), `loudness` (2).

## Reference readings (2026-10-26, `curl -4` + Playwright Chromium)

| what              | value                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| preview HTML      | **200, 7,604 B** live (**7,364 B** inside the archive), `<title>` "Hero V06 \| Colorlib", `lang="en"`, **one** stylesheet, **one** `<script>`                                                                                                                                                                                                                                                                                                                     |
| preview path      | **`theme/bootstrap/hero-06/`**; `theme/hero-06/` **404** (9 B), `theme/bb/hero-06/` **404** (9 B)                                                                                                                                                                                                                                                                                                                                                                 |
| stylesheet        | `css/style.css?v=652edf3d`, **16,413 B**, **774** lines, sha256 `9e101b166b3dc6f2…` (**identical** in the archive)                                                                                                                                                                                                                                                                                                                                                |
| script            | `js/snippet.js?v=00dc53e6`, **3,375 B**, **90** lines, one IIFE, sha256 `83eb651e659715fe…` (**identical** in the archive); menu + swatches + wishlist                                                                                                                                                                                                                                                                                                            |
| archive           | `preview.colorlib.com/downloads/free/hero-06.zip`, **200, 350,577 B** (= 342.4 KiB ✓ the page's "342 KB"), **22 entries** = 6 dirs + **16 files**                                                                                                                                                                                                                                                                                                                 |
| archive contents  | `index.html` 7,364 B, `css/style.css` 16,413 B, `js/snippet.js` 3,375 B, `README.md` 1,260 B, `fonts/` **10 files**, `images/` **3 files** (26,715 / 33,894 / 35,713 B)                                                                                                                                                                                                                                                                                           |
| live ↔ archive    | CSS **and** JS **identical sha256**; the two HTML files differ **only in the `<head>`** (robots pair, cdnjs `dns-prefetch`, `fetchpriority`, `?v=`) and one `decoding="sync"` → **live preview verified; the archive is its un-versioned twin**                                                                                                                                                                                                                   |
| README            | advertises `index.html`, `css/style.css`, `js/snippet.js`, `fonts/`, `images/` — **and this time all five exist** (the previous five variants' READMEs each claimed an `images/` folder that was missing)                                                                                                                                                                                                                                                         |
| inner pages       | **none** — `index.html` is **200, 7,604 B**, **byte-identical** to the directory URL (`sha256 cfb19e62…` both ways); `shop.html`, `product.html`, `cart.html`, `headphones.html`, `about.html`, `support.html` → **404 (9 B)**; one HTML file in the archive                                                                                                                                                                                                      |
| images            | three JPEGs: **midnight 900 × 600** (35,713 B), **stone 900 × 604** (33,894 B), **blush 900 × 600** (26,715 B). The markup declares `width="900" height="600"` on the one `<img>`, so **stone is 4 px off its own attributes** — `object-fit: cover` hides it                                                                                                                                                                                                     |
| fonts (declared)  | **10** `@font-face`, all **Sora**, weights **300 / 400 / 500 / 600 / 700**, each × subsets `latin` / `latin-ext`; no Google Fonts `<link>`, no `@import`                                                                                                                                                                                                                                                                                                          |
| fonts (binaries)  | only **2 distinct** files — `latin` **33,672 B** and `latin-ext` **15,556 B**, five names each. Verify the cut before calling the duplicates a broken download                                                                                                                                                                                                                                                                                                    |
| Google Fonts      | `css2?family=Sora` → **200**; `css2?family=Sora:wght@300..800` → **200**; `css2?family=Sora:wght@300;400;500;600;700` → **200**; legacy `css?family=Sora:300,400,500,600,700&display=swap` → **200**                                                                                                                                                                                                                                                              |
| classes           | **46** distinct markup classes; **42** `cl-hero06*` carry rules; **4** are pure containers (`__info`, `__caption-text`, `__colour-name`, `__stock-text`); **1** dead rule (`.cl-icon`, unused here — the seventeenth consecutive snippet to carry it); state classes `is-enhanced` / `is-open` / `is-swapping` / `is-low` exist only in CSS + script                                                                                                              |
| custom properties | **6** on `.cl-hero06` — `--cl-hero06-bg` `#f3f2ee`, `--ink` `#17171a`, `--muted` `#5a5a60`, `--line` `#dfddd6`, `--accent` `#e4572e`, `--gutter` `clamp(16px,4vw,40px)`; **26** `var()` reads; two more are set at runtime (`--cl-hero06-current` on the frame, `--sw` inline on each swatch label)                                                                                                                                                               |
| CSS anatomy       | **116** `{` blocks (10 `@font-face` + **4** media + style rules); queries **900 / 860 / 520** + reduced motion; **23** `revert` declarations in the `:where(html)` guard; **4** `!important` (2 in the reduced-motion kill switch, 2 on the perks strip); **0** `@keyframes`, **1** `animation` declaration (the kill switch), **8** `transition`s; **3** `box-shadow`s; **0** gradients; **32** hex literals / **18** distinct + **6** `rgba()` = **24** colours |
| controls          | **0** `<form>`, **3** `<input type="radio">` (all `opacity:0`), **3** `<button>` (menu toggle, add-to-cart, wishlist), **8** inline `<svg>`, **1** `<img>`, **8** `<a>` — **all eight `href="#"`**                                                                                                                                                                                                                                                                |
| headings          | **1** `<h1>` ("Contour ANC Headphones"), **0** `<h2>`, **0** `<h3>`                                                                                                                                                                                                                                                                                                                                                                                               |
| landmarks         | `<header class="cl-hero06__bar">` → `<nav aria-label="Main">`; `<main>` → **one** `<section aria-labelledby>`; the `fieldset`/`legend` pair is the swatch group; **no `<footer>`**, no `<aside>`, no `<article>`                                                                                                                                                                                                                                                  |
| ids               | **2** — `cl-hero06-nav` (the button's `aria-controls`) and `cl-hero06-title` (`aria-labelledby`)                                                                                                                                                                                                                                                                                                                                                                  |
| behaviour         | one IIFE, three initialisers: `initMenu` (is-enhanced, toggle + Escape + outside click + `matchMedia('(min-width: 861px)')`), `initSwatches` (preload → change → `is-swapping` → 180 ms → `src`/`alt`/caption/dot/stock), `initWish` (`aria-pressed` only)                                                                                                                                                                                                        |
| reduced motion    | `@media (prefers-reduced-motion: reduce)` sets `animation:none !important; transition:none !important` on every descendant and pseudo-element, and `initSwatches` then swaps **synchronously** (`if (reduce.matches) { swap(); return; }`)                                                                                                                                                                                                                        |

## Design tokens

Extracted from `css/style.css` (canonical over the screenshot) and re-read off the live render. **24 colours**,
not the six custom properties: the star amber, the save chip, the stock green, the wishlist pressed orange and the
six `rgba()` scrims each carry their own.

| role               | value                                                                     | where it is measured                                                                                                       |
| ------------------ | ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| ground (page)      | `#f3f2ee`                                                                 | `body` and `--bg`; the shell re-declares it                                                                                |
| ink (bar, buttons) | `#17171a`                                                                 | bar background, headline, `Add to cart`, eyebrow pill, focus ring, checked swatch ring                                     |
| bar text           | `#f3f2ee`                                                                 | wordmark, icon buttons; `.bar` sets `color: #f3f2ee`                                                                       |
| muted              | `#5a5a60`                                                                 | eyebrow, description, rating, perks, badge captions                                                                        |
| line               | `#dfddd6`                                                                 | wishlist border, perks rule                                                                                                |
| accent             | `#e4572e`                                                                 | the swatch focus ring and the low-stock dot only — **not** a button colour                                                 |
| bar accent         | `#ff8a65`                                                                 | the logo's light "audio" span and the cart badge                                                                           |
| nav (inactive)     | `#c9c8c2`                                                                 | the four links; hover `#fff` on `rgba(255,255,255,.08)`                                                                    |
| stars              | `#b45309`                                                                 | the five ★ glyphs (letter-spacing 1px)                                                                                     |
| struck price       | `#6b6b72`                                                                 | the `<s>$299</s>`                                                                                                          |
| save chip          | `#9a3412` on `#fde2d8`                                                    | `Save $50`, radius 999                                                                                                     |
| stock              | `#166534`, dot `#16a34a`                                                  | the in-stock line and its 8 px dot                                                                                         |
| stock low          | `#9a3412`, dot `#e4572e`                                                  | `.is-low` — set by the script when the copy matches `/only/i`                                                              |
| add hover          | `#33333a`                                                                 | `.cl-hero06__add:hover`                                                                                                    |
| wishlist pressed   | `#c2410c`                                                                 | `[aria-pressed="true"]` colour **and** border, and the heart's `fill`                                                      |
| frame ground       | `#1c1d21`                                                                 | the `figure` behind the photo, and the caption dot's fallback                                                              |
| swatches           | `#1c1d21` `#8b8e94` `#f2b8c6`                                             | Midnight / Stone / Blush, set inline as `--sw` on each label                                                               |
| chips              | `rgba(255,255,255,.92)`                                                   | caption pill and the three badge cards, `backdrop-filter: blur(8px)`                                                       |
| hover washes       | `rgba(255,255,255,.08)` / `.1`                                            | nav link hover / icon-button hover                                                                                         |
| frame shadow       | `0 30px 60px -30px rgba(23,23,26,.45)`                                    | the one real shadow on the page                                                                                            |
| inset rings        | `rgba(0,0,0,.15)` / `.12`                                                 | caption dot ring / swatch disc ring, both `box-shadow: … inset`                                                            |
| font family        | `"Sora"`                                                                  | everything, one family, no serif anywhere; body **15.5 px / 1.6**                                                          |
| radii              | 28 / 22 / 16 / 999 / 9 / 8 / 6                                            | frame / frame at ≤520 / badge cards + add + wish / caption + save + swatches / cart badge / nav links / eyebrow pill       |
| display type       | `clamp(2rem, 1.2rem + 2.6vw, 3.3rem)`                                     | **52.8 px** at 1440 (cap reached at ~1292), **49.88** at 1180, **42.6** at 900, **32** (floor, reached at ≤492) at 480/320 |
| price type         | 34 px / 700 / `-.03em`                                                    | `$249`; the struck `$299` is 18 px / 400 in `#6b6b72`                                                                      |
| gutter             | `clamp(16px, 4vw, 40px)`                                                  | 40 at ≥1000, **36** at 900, **20.8** at 520, 16 at ≤400                                                                    |
| hero padding       | `clamp(24px,4vw,56px)` top · gutter sides · `clamp(40px,5vw,64px)` bottom | 56 / 40 / 64 at 1440; 36 / 36 / 45 at 900; 40 at ≤800 bottom                                                               |
| hero gap           | `clamp(28px, 5vw, 72px)`                                                  | **72** at 1440 (5vw = 72 exactly at 1440), 59 at 1180, 45 at 900, 28 at ≤560                                               |

**Radius note for the port:** Tailwind covers `rounded-full` (999), `rounded-3xl` (24 — not used), `rounded-2xl`
(16), `rounded-lg` (8), `rounded-md` (6); the frame's **28** and its ≤520 **22** need arbitrary values
(`rounded-[28px]`, `rounded-[22px]`), and the cart badge's **9** is `rounded-[9px]`. The one shadow is arbitrary:
`shadow-[0_30px_60px_-30px_rgba(23,23,26,0.45)]`.

## Page arithmetic at 1440 × 900 (measured, motion disabled)

| element      | box                                                                                                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.cl-hero06` | **1440 × 900** (document); `min-height:100vh`, flex column, `overflow` visible; `#f3f2ee`; `15.5px / 1.6`                                                                                                                                                                       |
| `header` bar | **1440 × 70** at (0, 0), `#17171a`; inner **1280 × 70** at (80, 0), `padding: 14px 40px`, `gap: 32`, `max-width:1280`                                                                                                                                                           |
| wordmark     | **143.83 × 32** at (120, 19) — "fieldnote" at **20 px / 700 / -.04em**, "audio" **51.02** wide at **20 px / 300** in `#ff8a65`, `margin-left: 2px`                                                                                                                              |
| nav          | **422 × 39.19** at (**535.92**, 15.41) — `margin: 0 auto`, links `gap: 6`; "Headphones" is **126 × 39.19** at `padding: 8px 14px`, radius **8**, **14.5 px**; the current one is `#fff / 600`, the rest `#c9c8c2 / 400`                                                         |
| tools        | **90 × 42** at (**1230**, 14) — `gap: 6`, two **42 × 42** circular buttons (search, cart)                                                                                                                                                                                       |
| cart badge   | **18 × 18** at (1300, 17) — radius **9**, `#ff8a65`, ink **11 px / 700**, `top:3; right:2` inside the cart button                                                                                                                                                               |
| menu button  | `display:none` at ≥861 (zero rect); **42 × 42** at ≤860                                                                                                                                                                                                                         |
| `main`       | **1440 × 830** at (0, 70); `flex:1; display:flex; align-items:center`                                                                                                                                                                                                           |
| hero section | **1280 × 749.64** at (80, **110.17**) = 70 + (830 − 749.64)/2; `padding: 56px 40px 64px`, `grid-template-columns: minmax(0,1.15fr) minmax(0,.85fr)`, `gap: 72`, `align-items:center`                                                                                            |
| media column | **648.59 × 518.88** at (120, 221.55)                                                                                                                                                                                                                                            |
| frame        | **648.59 × 518.88** at (120, 221.55) — radius **28**, `#1c1d21`, `aspect-ratio: 5 / 4`, `overflow:hidden`                                                                                                                                                                       |
| photo        | **648.59 × 518.88**, `object-fit: cover`; `transition: opacity .3s, transform .6s cubic-bezier(.2,.8,.2,1)`                                                                                                                                                                     |
| caption pill | **110 × 32.8** at (138, 239.55) — `left:18; top:18`, `padding: 6px 14px 6px 8px`, radius **999**, `rgba(255,255,255,.92)`, **13 px / 600**, `gap: 8`                                                                                                                            |
| caption dot  | **16 × 16** at (146, 247.94) — radius 50 %, `background: var(--cl-hero06-current, #1c1d21)` + `0 0 0 1px rgba(0,0,0,.15) inset`                                                                                                                                                 |
| badge strip  | **612.59 × 63.64** at (138, 658.78) — `left/right/bottom: 18`, `grid-template-columns: repeat(3,1fr)`, `gap: 10`                                                                                                                                                                |
| badge card   | **197.53 × 63.64** each — `padding: 12px 14px`, radius **16**, `rgba(255,255,255,.92)`, `backdrop-filter: blur(8px)`; `<strong>` **18 px / 700** (`23.39` tall), `<span>` **12.5 px** muted                                                                                     |
| info column  | **479.41 × 629.64** at (840.59, 166.17)                                                                                                                                                                                                                                         |
| eyebrow      | **479.41 × 23.19** at (840.59, 166.17) — **13.5 px** muted, `gap: 10`; the "New" pill is **49 × 23.19** (`padding: 2px 10px`, radius **6**, ink bg, white **12 px / 600**)                                                                                                      |
| `h1`         | **479.41 × 111.91** at (840.59, **203.36**) — **52.8 px / 55.968 line box / 2 lines**, `600`, `line-height:1.06`, `letter-spacing:-.04em` (**-2.112 px**), `margin: 14px 0 10px`                                                                                                |
| rating row   | **479.41 × 22.39** at (840.59, 325.27) — **14 px** muted, `gap: 8`; the five ★ are **67.77** wide in `#b45309`; the review link is ink, underlined, `text-underline-offset: 3px`                                                                                                |
| price row    | **479.41 × 54.39** at (840.59, **369.66**) — `margin-top: 22`, `gap: 12`, `align-items: baseline`; `$249` **85.92 × 54.39** at **34 px / 700**, `$299` **47 × 28.8** at 18 px, `Save $50` **85 × 26** at **12.5 px / 700** radius 999 `padding: 3px 10px` (`align-self:center`) |
| description  | **479.41 × 74.39** at (840.59, 438.05) — **15.5 / 24.8 / 3 lines**, muted, `max-width: 32em` (**496**, i.e. wider than the column: it never clamps here)                                                                                                                        |
| `fieldset`   | **479.41 × 78.39** at (840.59, 536.44) — `margin-top: 24`, `border: 0`, `padding: 0`                                                                                                                                                                                            |
| legend       | **123 × 22.39** — **14 px**, "Colour: **Midnight**" with the name in `<strong>`                                                                                                                                                                                                 |
| swatch row   | **479.41 × 44** at y **570.83**, `gap: 12` → discs at x **840.59 / 896.59 / 952.59** (56 apart)                                                                                                                                                                                 |
| swatch       | **44 × 44**, radius 50 %; `::before` is the disc at `inset: 5px` (**6** when checked) with `--sw`; `::after` is a **2 px** ring, transparent → ink when checked; the radio is `opacity:0` over the whole 44 px                                                                  |
| stock line   | **479.41 × 22.39** at (840.59, **628.83**) — **14 px / 500** `#166534`, `gap: 8`, `margin-top: 14`; dot **8 × 8** at (840.59, 636.02)                                                                                                                                           |
| buy row      | **479.41 × 56** at (840.59, **673.22**) — `gap: 10`, `margin-top: 22`                                                                                                                                                                                                           |
| add to cart  | **340 × 56** at (840.59, 673.22) — `flex:1; max-width: 340`, radius **16**, ink, white **16 px / 600**, `padding: 1px 6px`                                                                                                                                                      |
| wishlist     | **56 × 56** at (1190.59, 673.22) — radius **16**, `#fff`, `border: 1.5px` `#dfddd6` (**computes 1 px**), heart **22 × 22**                                                                                                                                                      |
| perks strip  | **479.41 × 42.59** at (840.59, 753.22) — `margin-top: 24 !important`, `padding-top: 20 !important`, `border-top: 1px #dfddd6`, **13.5 px** muted, `gap: 8px 22px`, three `inline-flex` items on **one** row (`20 + 1 + 21.59`)                                                  |

**Where 900 comes from.** The hero is 749.64 tall (its tallest column is the info column at 629.64 + 56 + 64 of
padding = 749.64); `main` is 830, so `align-items:center` parks the section at 70 + 40.18 = **110.17** and the
document closes at exactly **900**. There is no `overflow:hidden` anywhere, so nothing is clipped — the fit is
pure arithmetic.

## The six devices

**1. One `<img>`, three radios.** The photo is not a gallery: there is a single `<img class="cl-hero06__img">`
and three `<input type="radio">` inside 44 px labels. `initSwatches` preloads every `data-src`, and on `change`
sets `--cl-hero06-current` on the frame, rewrites the caption text, the legend's name, the `stock-text` and the
`img.src`/`img.alt`. The cross-fade is the `is-swapping` class (`opacity: 0; transform: scale(1.03)`) applied for
**180 ms** before the `src` swaps, then removed so the 300 ms opacity transition plays back in.

**2. The badge strip floats over the photo and unfloats below 520.** `position:absolute; left/right/bottom: 18`
with a 3-column grid and `backdrop-filter: blur(8px)`; at ≤520 it becomes `position: static; margin-top: 10` with
`background: #fff` and smaller type — the strip leaves the photo and becomes part of the column.

**3. The swatch is a ring, not a colour block.** The label is a 44 px circle; `::before` paints `--sw` inset 5 px
(6 px when checked, a 0.2 s `inset` transition), `::after` is a 2 px ring that is transparent until
`:has(:checked)` makes it ink, and the real radio sits on top at `opacity: 0` covering the whole 44 px. Keyboard
focus is caught by `.swatch:has(:focus-visible) { outline: 2px solid accent; offset: 3px }`.

**4. The buy row is an ink bar and a square toggle.** `Add to cart · $249` is `flex:1; max-width:340` and does
nothing (trap 9); the wishlist is the only stateful control (`aria-pressed` → `#c2410c` colour, border and heart
fill). They are 10 px apart and share the 56 px height and the 16 px radius.

**5. The header is `logo · nav · tools` with the nav centred by auto margins.** `margin: 0 auto` on the nav makes
it centre in the _free space_, not the container, so the nav's centre sits at **746.92** while the inner box's
centre is **720** — a 26.9 px rightward bias caused by the wordmark (143.83) being wider than the tools (90).

**6. The page is a vertical centring, not a stack.** `main { flex:1; display:flex; align-items:center }` is what
puts the hero at y 110.17; the hero's own padding shapes the box but does not place it. Change the header height
and every y on the page moves with it — but the _document_ height stays 900 until the content exceeds `main`.

## Width ladder (measured, `getBoundingClientRect`, motion disabled, after `document.fonts.ready`)

| vw      | docH     | `h1` px | `h1` lines | media (w × h)       | info w | frame radius / ratio | badges     | add w  | perks               |
| ------- | -------- | ------- | ---------- | ------------------- | ------ | -------------------- | ---------- | ------ | ------------------- |
| 1440    | **900**  | 52.8    | 2          | 648.59 × 518.88     | 479.41 | 28 / 5:4             | absolute   | 340    | 1 row               |
| 1360    | 900      | 52.8    | 2          | 650.89 × 520.7      | 481.09 | 28 / 5:4             | absolute   | 340    | 1 row               |
| 1280    | 900      | 52.48   | 2          | 653.19 × 522.55     | 482.81 | 28 / 5:4             | absolute   | 340    | 1 row               |
| 1240    | 900      | 51.44   | 2          | —                   | 466.66 | 28 / 5:4             | absolute   | 340    | 1 row               |
| 1231    | 900      | 51.2    | 2          | —                   | 463.03 | 28 / 5:4             | absolute   | 340    | **1 row** (463.03)  |
| 1230    | 900      | 51.18   | 2          | —                   | 462.63 | 28 / 5:4             | absolute   | 340    | **2 rows** (462.63) |
| 1180    | 900      | 49.88   | 2          | 598.56 × 478.84     | 442.44 | 28 / 5:4             | absolute   | 340    | 2 rows              |
| 1100    | 900      | 47.8    | 2          | 554.88 × 443.89     | 410.13 | 28 / 5:4             | absolute   | 340    | 2 rows              |
| 1024    | 900      | 45.82   | 2          | 513.36 × 410.69     | 379.45 | 28 / 5:4             | absolute   | 313.45 | 2 rows              |
| 960     | 900      | 44.16   | 2          | 480.25 × 384.19     | 354.97 | 28 / 5:4             | absolute   | 288.97 | 2 rows              |
| 901     | **900**  | 42.63   | 2          | 450.73 × 360.58     | 333.16 | 28 / 5:4             | absolute   | 267.16 | 2 rows              |
| **900** | **1421** | 42.6    | **1**      | 828 × 662.39        | 828    | 28 / 5:4             | absolute   | 340    | 1 row               |
| 860     | 1385     | 41.56   | 1          | 791.22 × 632.97     | 791.22 | 28 / 5:4             | absolute   | 340    | 1 row               |
| 768     | 1304     | 39.17   | 1          | 706.56 × 565.25     | 706.56 | 28 / 5:4             | absolute   | 340    | 1 row               |
| 640     | 1194     | 35.84   | 1          | 588.81 × 471.05     | 588.81 | 28 / 5:4             | absolute   | 340    | 1 row               |
| 521     | 1098     | 32.75   | 1          | 479.34 × 383.47     | 479.34 | 28 / 5:4             | absolute   | 340    | 1 row               |
| **520** | **1233** | 32.72   | 1          | 478.41 × **478.41** | 478.41 | 22 / **1:1**         | **static** | 412.41 | 1 row               |
| 506     | —        | 32      | 1          | —                   | 465.53 | 22 / 1:1             | static     | —      | 1 row               |
| 503     | —        | 32      | 1          | —                   | 462.78 | 22 / 1:1             | static     | —      | **2 rows**          |
| 480     | 1249     | 32      | 1          | 441.63 × 441.63     | 441.63 | 22 / 1:1             | static     | 375.63 | 2 rows              |
| 448     | —        | 32      | **1**      | —                   | 412.19 | 22 / 1:1             | static     | —      | 2 rows              |
| 446     | —        | 32      | **2**      | —                   | 410.34 | 22 / 1:1             | static     | —      | 2 rows              |
| 430     | 1237     | 32      | 2          | 395.63 × 395.63     | 395.63 | 22 / 1:1             | static     | 329.63 | 2 rows              |
| 390     | 1224     | 32      | 2          | 358 × 358           | 358    | 22 / 1:1             | static     | 292    | 2 rows              |
| 360     | 1209     | 32      | 2          | 328 × 328           | 328    | 22 / 1:1             | static     | 262    | 2 rows              |
| 320     | 1194     | 32      | 2          | 288 × 288           | 288    | 22 / 1:1             | static     | 222    | 2 rows              |

Five things this table says that a hand-written one would get wrong:

1. **The document is exactly 900 at 901 and up, and 1421 at 900.** The `max-width:900px` column collapse costs
   **+521 px** on a 1 px viewport change. There is no gradual approach to it.
2. **`h1` lines are not monotonic.** 2 lines in the two-column band (≥901), **1 line** once the column is the
   full width (900 → 448), then **2** from 446 down. Narrowing from 901 to 900 _halves_ the line count and
   tripling the column width is what makes it a single line.
3. **`@media (max-width:520px)` is the only breakpoint that changes the document by reshaping the photo**: the
   frame goes 5:4 → **1:1** (383.47 → **478.41**, +95) and the badges leave the frame (`absolute` → `static`,
   +~63), so 521 → 520 costs **+135 px** while the viewport loses 1.
4. **The perks strip wraps on a content threshold, not a media query**: one row at content ≥ **463.03** (vw 1231
   in the two-column band, vw 506 in the single-column band), two rows at ≤ **462.78** (vw 1230 / 503). It is a
   `flex-wrap` fact.
5. **The header row needs 329.83 px** (16 + 143.83 wordmark + 32 gap + 138 tools) and never shrinks: at 320 the
   document is **330** wide and `scrollX` reads **10**; at 330 it fits exactly; from 330 to 345 the tools sit
   flush against the viewport edge with no right gutter.

## The traps (all cost real measurement time)

1. **The 100vh fit is a band, not a rule.** Document **900** at 1440, 1280, 1100, 1024, 960, 901 — and **1421**
   at 900, because `@media (max-width:900px)` turns the hero into one column (828 × 662.39 media + the info
   column below it). Do not test "fits in the viewport" at a single width.
2. **`h1` lines invert twice.** 2 (≥901) → 1 (900…448) → 2 (≤446). The 1-line stretch exists because the column
   is 828 px wide with the type pinned at 32–42 px. A port that hard-codes a 2-line headline at 390 will be
   wrong at 900.
3. **The header is 329.83 px wide and there is no shrink path.** `logo` (143.83) + `gap: 32` + `tools` (138) with
   `padding: 14px 16px` overflows a 320 px viewport by **10 px** (`documentElement.scrollWidth` 330,
   `window.scrollTo(200,0)` → `scrollX` 10). Fix it in the port (`gap: 16` at ≤360 or a `min-width: 0` wordmark).
   The proof that it is the header: `badges`, `perks`, `buy` and `add` all measure inside 288 at 320.
4. **A running transition makes a fresh `getComputedStyle` read the OLD value.** Right after
   `.wishlist.click()`, `aria-pressed` is `"true"` but `color` still reads `rgb(23,23,26)` and `border` still
   reads `#dfddd6` — because `transition: color .2s, border-color .2s` is at t=0. The heart's `fill` (not
   transitioned) reads `#c2410c` in the same tick. Read pressed/hover state **≥ 300 ms** after the event, or you
   will conclude the rule does not exist. The same trap hit the nav-link hover (`rgba(0,0,0,0)` at t=0,
   `rgba(255,255,255,.08)` at 320 ms) and the add button's hover (`#17171a` → `#33333a`).
5. **`border: 1.5px` computes to 1 px** on the wishlist button at DPR 1; the checked swatch's **2 px** ring is
   real. Quote computed values, not declared ones.
6. **`stone.jpg` is 900 × 604, not 900 × 600.** The markup's `width`/`height` attributes say 600 for all three
   photos and `object-fit: cover` hides the difference. Any port that swaps in differently-shaped images (or a
   `picsum` seed) must keep the frame's `aspect-ratio` or the badge strip's bottom offset moves.
7. **The perks strip carries the page's only `!important` pair** (`margin-top: 24 !important; padding-top:
20 !important`) because it is a `ul` and the reset gives lists a margin. Ported without that (or without
   `padding-top`), the hairline sits flush on the buy row and the strip loses 20 px.
8. **`Add to cart` is inert.** `js/snippet.js` binds three things — menu, swatches, wishlist — and nothing else:
   clicking it leaves the cart badge at **2**, adds no class, and does not change the URL. Do not reproduce a dead
   primary CTA: the port SHALL give it a real state (increment the badge, or switch to "Added").
9. **The badge cards are translucent white over the photo.** `rgba(255,255,255,.92)` + `blur(8px)` means the
   contrast of the muted `12.5 px` caption depends on the pixels behind each chip: **5.85** over the dark
   Midnight frame, **6.34** over Stone, **6.57** over Blush — all over 4.5 only because the white scrim is 92 %.
   Lower the alpha and the small captions fail.
10. **The stars are `#b45309` on `#f3f2ee` = 4.48** — 0.02 under the 4.5 threshold for normal text. They are
    `aria-hidden` decoration beside a real "4.7 out of 5" sentence, so it is not a failure, but the port SHALL
    darken the amber to `#8a3f07`-ish if it ever renders the stars as text.
11. **The caption dot is not the swatch.** Its colour comes from `--cl-hero06-current`, set by the script on the
    **frame** (`frame.style.setProperty`) from the checked label's `--sw`; the swatch's own `::before` uses the
    label's `--sw` directly. A port that reads the dot off the swatch works by accident today and breaks the
    moment a colour is renamed.
12. **The stock line is the only live region** (`aria-live="polite"` on `.cl-hero06__stock`, which wraps both the
    dot and the text). Changing the colour must rewrite `stock-text`'s content only — replacing the whole `<p>`
    would drop the live region and its announcement.
13. **Four markup classes carry no rule** (`__info`, `__caption-text`, `__colour-name`, `__stock-text`): they are
    JS/containment hooks, not phantom styles. `.cl-icon` is the seventeenth consecutive dead rule. Do not port
    either.
14. **`is-enhanced` gates the entire mobile menu.** Without the class the `max-width:860` block styles nothing and
    the bar instead `flex-wrap`s its links (`:not(.is-enhanced)`). React renders the enhanced state, so the port
    must keep the links in the DOM and the panel reachable.
15. **The nav's centring is biased.** `margin: 0 auto` centres it in the leftover space, so its centre is 26.9 px
    right of the inner box's centre. Porting it as `justify-center` on the row will _change the nav's position_
    and can move the tools (they are `margin-left: 0` at ≥861).

## Contrast (computed from the token pairs)

| text                                                    | pair               | ratio                                                |
| ------------------------------------------------------- | ------------------ | ---------------------------------------------------- |
| headline `#17171a` on `#f3f2ee`                         | ink / ground       | **15.97**                                            |
| description, eyebrow, rating, perks `#5a5a60` on ground | muted / ground     | **6.11**                                             |
| bar wordmark `#f3f2ee` on ink                           | bar text / ink     | **15.97**                                            |
| inactive nav `#c9c8c2` on ink                           | nav / ink          | **10.67**                                            |
| logo "audio" `#ff8a65` on ink                           | accent-light / ink | **7.73**                                             |
| cart badge ink on `#ff8a65`                             | ink / badge        | **7.73**                                             |
| `Add to cart` `#fff` on ink                             | white / ink        | **17.89**                                            |
| `Add to cart` hover `#fff` on `#33333a`                 | white / hover      | **12.53**                                            |
| `Save $50` `#9a3412` on `#fde2d8`                       | save / chip        | **5.93**                                             |
| stock `#166534` on ground                               | stock / ground     | **6.37**                                             |
| struck `$299` `#6b6b72` on ground                       | muted-2 / ground   | **4.72**                                             |
| stars `#b45309` on ground                               | amber / ground     | **4.48** — 0.02 under 4.5                            |
| badge caption `#5a5a60` on the 92 % white chip          | muted / chip       | **5.85 / 6.34 / 6.57** over Midnight / Stone / Blush |
| badge value `#17171a` on the 92 % white chip            | ink / chip         | **15.28 / 16.55 / 17.16**                            |
| wishlist pressed icon `#c2410c` on `#fff`               | orange / white     | **5.18**                                             |
| swatch focus ring `#e4572e` on ground                   | accent / ground    | **3.29** (≥ 3 for UI)                                |
| bar focus ring `#fff` on ink                            | white / ink        | **17.89**                                            |

Two deltas worth a fix, neither changing the look: the star amber at **4.48** (darken to `#8a3f07` if it ever
becomes text) and the wishlist's pressed border at **1 px** on `#dfddd6`-adjacent ground, where the state is
carried by colour alone — give it a 2 px ring so the toggle is not colour-only.

## Requirements

### Requirement: One product hero screen

The template SHALL render one cream landing screen whose entire content is a header bar and a single product
section, with no form and exactly one photograph.

#### Scenario: Landmarks, counts and the one headline at 1440 × 900

- **GIVEN** the page at 1440 × 900
- **WHEN** it renders
- **THEN** there SHALL be exactly one `<header>` (the bar), one `<nav aria-label="Main">`, one `<main>` and
  **one** `<section aria-labelledby>` inside it
- **AND** there SHALL be exactly **one** `<h1>` ("Contour ANC Headphones"), **zero** `<h2>` and **zero** `<h3>`
- **AND** there SHALL be exactly **one** `<img>`, **three** `<input type="radio">`, **three** `<button>`
  (menu, add-to-cart, wishlist), **0** `<form>` and **8** `<a>`
- **AND** the document SHALL be **900 px** tall with `scrollX === 0` and `scrollWidth === clientWidth`

#### Scenario: The hero is centred by the flex parent

- **GIVEN** the root is `min-height:100vh; display:flex; flex-direction:column` and `main` is `flex:1` with
  `align-items:center`
- **WHEN** the hero is measured at 1440
- **THEN** it SHALL be **1280 × 749.64** at (80, **110.17**) — 70 (bar) + (830 − 749.64)/2
- **AND** at 1100 it SHALL be **772.44** tall at y **98.78** (70 + (830 − 772.44)/2) and the document SHALL still
  be exactly **900**

### Requirement: A dark bar with a centred nav, a light wordmark span and three tools

The header SHALL be an ink bar holding a two-tone wordmark, four links centred by auto margins, and a search /
cart / menu cluster.

#### Scenario: The bar, the wordmark and the nav at 1440

- **GIVEN** the header at 1440
- **WHEN** measured
- **THEN** the bar SHALL be **1440 × 70** on `#17171a` with an inner **1280 × 70** at (80, 0),
  `padding: 14px 40px`, `gap: 32`, `max-width: 1280`
- **AND** the wordmark SHALL be **143.83 × 32** at (120, 19): the name at **20 px / 700 / -.04em** and the second
  word **51.02** wide at **20 px / 300** in `#ff8a65`
- **AND** the nav SHALL be **422 × 39.19** at (**535.92**, 15.41) with `margin: 0 auto` and links `gap: 6`; each
  link SHALL be `padding: 8px 14px`, radius **8**, **14.5 px**, `#c9c8c2` at weight 400, and the current one
  `#fff` at weight **600**
- **AND** the tools cluster SHALL be **90 × 42** at (1230, 14) of two **42 × 42** radius-50 % buttons, the cart's
  **18 × 18** radius-**9** `#ff8a65` badge at (1300, 17) with ink **11 px / 700** text

#### Scenario: Hover and focus inside the bar

- **GIVEN** the pointer over a nav link
- **WHEN** 320 ms have elapsed
- **THEN** the link SHALL read `#fff` on `rgba(255,255,255,.08)`, and an icon button SHALL read
  `rgba(255,255,255,.1)`
- **AND** `:focus-visible` inside the bar SHALL draw a **2 px `#fff`** outline at **3 px** offset (the shell's
  default is ink)

### Requirement: A 5:4 photo frame with a colour pill and a floating badge strip

The media column SHALL be one rounded frame carrying the photograph, a colour pill in its top-left corner and a
three-card spec strip along its bottom edge.

#### Scenario: Frame, pill and strip at 1440

- **GIVEN** the media column at 1440
- **WHEN** measured
- **THEN** the frame SHALL be **648.59 × 518.88** at (120, 221.55) — radius **28**, `#1c1d21`,
  `aspect-ratio: 5 / 4`, `overflow: hidden`, `box-shadow: 0 30px 60px -30px rgba(23,23,26,.45)`
- **AND** the photo SHALL fill it (`object-fit: cover`) and the caption pill SHALL be **110 × 32.8** at
  (138, 239.55) — `left/top: 18`, `padding: 6px 14px 6px 8px`, radius **999**, `rgba(255,255,255,.92)`,
  **13 px / 600**, with a **16 × 16** dot at (146, 247.94)
- **AND** the strip SHALL be **612.59 × 63.64** at (138, 658.78) — `left/right/bottom: 18`, three
  **197.53 × 63.64** cards at `gap: 10`, `padding: 12px 14px`, radius **16**, `rgba(255,255,255,.92)` with
  `backdrop-filter: blur(8px)`, a **18 px / 700** value over a **12.5 px** muted label

#### Scenario: The strip leaves the photo at 520

- **GIVEN** the `max-width:520px` block
- **WHEN** the viewport goes 521 → 520
- **THEN** the frame SHALL become `aspect-ratio: 1 / 1` and radius **22**, growing **383.47 → 478.41** tall
- **AND** the strip SHALL become `position: static` with `margin-top: 10`, `background: #fff` on each card and
  **16 / 11.5 px** type
- **AND** the document SHALL grow **1098 → 1233** across that one pixel

### Requirement: The product information column

The second column SHALL run eyebrow → headline → rating → price → description → swatches → stock → buy row →
perks, in that order, at the measured sizes.

#### Scenario: Eyebrow, headline and rating

- **GIVEN** the info column at 1440
- **WHEN** measured after `document.fonts.ready`
- **AND** the column SHALL be **479.41 × 629.64** at (840.59, 166.17)
- **THEN** the eyebrow SHALL be **23.19** tall at **13.5 px** muted with a **49 × 23.19** ink "New" pill
  (`padding: 2px 10px`, radius **6**, white **12 px / 600**)
- **AND** the `h1` SHALL be **479.41 × 111.91** at (840.59, **203.36**) — **52.8 px / 55.968 line box / 2 lines**,
  weight **600**, `line-height: 1.06`, `letter-spacing: -.04em`, `margin: 14px 0 10px`
- **AND** the rating SHALL be **479.41 × 22.39** at (840.59, 325.27) — **14 px** muted, `gap: 8`, five ★
  **67.77** wide in `#b45309` with `letter-spacing: 1px`, and an underlined ink link

#### Scenario: Price, description and the two clamp endpoints

- **GIVEN** the price row and the description at 1440
- **WHEN** measured
- **THEN** the price row SHALL be **54.39** tall at (840.59, **369.66**) with `margin-top: 22`, `gap: 12`,
  `align-items: baseline` — `$249` **85.92** wide at **34 px / 700 / -.03em**, `$299` **47** wide at **18 px** in
  `#6b6b72` inside `<s>` with an `sr-only` "Was ", and `Save $50` **85 × 26** at **12.5 px / 700** in `#9a3412`
  on `#fde2d8`, radius 999
- **AND** the description SHALL be **479.41 × 74.39** at (840.59, 438.05) — **15.5 / 24.8 / 3 lines**, muted,
  `max-width: 32em` = **496** (wider than the column, so it never clamps in this family)
- **AND** the headline size SHALL follow `clamp(2rem, 1.2rem + 2.6vw, 3.3rem)`: **52.8** at 1440 and 1280,
  **49.88** at 1180, **42.6** at 900, and **32** (the floor, reached at ≤492) at 480, 390 and 320

### Requirement: Colour swatches that swap the photograph and the stock line

The `fieldset` SHALL hold three invisible radios behind 44 px swatch rings, and choosing one SHALL swap the
photo, its alt text, the caption, the legend and the stock line.

#### Scenario: The field and its three rings

- **GIVEN** the `fieldset` at 1440
- **WHEN** measured
- **THEN** it SHALL be **479.41 × 78.39** at (840.59, 536.44) with `margin-top: 24`, `border: 0`, `padding: 0`
- **AND** the legend SHALL be **123 × 22.39** at **14 px** reading "Colour: **Midnight**"
- **AND** the row SHALL be **44** tall at y **570.83** with discs at x **840.59 / 896.59 / 952.59** — each
  **44 × 44**, radius 50 %, `::before` inset **5 px** painting `--sw` (**6 px** when checked) and `::after` a
  **2 px** ring that is transparent until `:has(:checked)` makes it `#17171a`
- **AND** the radio SHALL be `opacity: 0` but cover the full 44 px (measured hit area **44 × 44**)

#### Scenario: Choosing Blush

- **GIVEN** Midnight is checked and the stock line reads "Midnight: In stock, ships tomorrow" in `#166534`
- **WHEN** the Blush radio is checked and `change` fires
- **THEN** the frame SHALL gain `is-swapping` and the photo SHALL fade to `opacity 0` at `scale(1.03)`
- **AND** after **180 ms** the `src` SHALL be the Blush photo, its `alt` SHALL become the Blush sentence and
  `is-swapping` SHALL be removed so the image fades back in over **300 ms**
- **AND** the caption, the legend's name and the stock text SHALL read "Blush", and the stock line SHALL take
  `is-low` (`#9a3412` text, `#e4572e` dot) because its copy contains "Only 4 left"
- **AND** the caption dot SHALL become `#f2b8c6`, the colour the script copied from the label's `--sw`
- **AND** under `prefers-reduced-motion: reduce` the swap SHALL be synchronous (no `is-swapping` frame)

### Requirement: A stock line, a buy row and a wishlist toggle

The column SHALL close with a live-region stock line, an ink add-to-cart bar and a square wishlist toggle.

#### Scenario: Stock, add and wishlist at 1440

- **GIVEN** the lower half of the info column
- **WHEN** measured
- **THEN** the stock line SHALL be **479.41 × 22.39** at (840.59, **628.83**) — **14 px / 500** `#166534`,
  `gap: 8`, `margin-top: 14`, an **8 × 8** `#16a34a` dot, and `aria-live="polite"`
- **AND** the buy row SHALL be **479.41 × 56** at (840.59, **673.22**) — `gap: 10`, `margin-top: 22`
- **AND** add-to-cart SHALL be **340 × 56** (`flex: 1; max-width: 340`), radius **16**, ink, white
  **16 px / 600**, hover `#33333a`, and `:active` `scale(.98)`
- **AND** the wishlist SHALL be **56 × 56** at (1190.59, 673.22) — radius **16**, `#fff`, a **1.5 px** `#dfddd6`
  border that computes to **1 px**, and a **22 × 22** heart

#### Scenario: The wishlist toggles

- **GIVEN** the wishlist with `aria-pressed="false"`
- **WHEN** it is clicked and **300 ms** elapse
- **THEN** `aria-pressed` SHALL be `"true"`, the icon SHALL be `#c2410c`, the border `#c2410c` and the heart
  `fill: currentColor`
- **AND** clicking again SHALL return it to `"false"` and the ink icon

### Requirement: Three service perks on a hairline

A single `ul` SHALL close the column with three icon-and-text items above a 1 px rule.

#### Scenario: One row at 1440, two rows when the column narrows

- **GIVEN** the perks strip at 1440
- **WHEN** measured
- **THEN** it SHALL be **479.41 × 42.59** at (840.59, **753.22**) — `margin-top: 24`, `padding-top: 20`,
  `border-top: 1px #dfddd6`, **13.5 px** muted, `gap: 8px 22px`, `display: flex; flex-wrap: wrap`
- **AND** the three items SHALL sit on **one** row at content ≥ **463.03** (vw 1231 / 506) and **two** rows at
  ≤ **462.78** (vw 1230 / 503), making the strip **72.19** tall
- **AND** its `margin-top` and `padding-top` SHALL both be `!important` so the list reset cannot strip the rule

### Requirement: A disclosure menu below 861

Below 861 px the four links SHALL collapse into a button-driven panel inside the bar.

#### Scenario: Open, close and the two icons

- **GIVEN** the script has added `is-enhanced` and the viewport is 860
- **WHEN** the page loads
- **THEN** the nav SHALL be `display: none; position: absolute; top: 100%`, the button **42 × 42** visible, the
  bar still **70** tall, and the document **1385**
- **AND** clicking SHALL set `is-open`, `aria-expanded="true"`, `aria-label="Close menu"` and `display: block` on
  the panel, and swap the open icon for the close icon
- **AND** **Escape**, an outside click, a link click and `matchMedia('(min-width: 861px)')` SHALL each close it,
  and Escape SHALL return focus to the button
- **AND** the panel's links SHALL be `padding: 14px 4px`, **17 px**, with
  `border-bottom: 1px solid rgba(255,255,255,.1)` and **no** current-page treatment

### Requirement: The Component Dock footer

The page SHALL end with a footer that links the marketplace, because the reference has none.

#### Scenario: The added footer

- **GIVEN** the reference ends at the hero (`<main>` is the last landmark; no `<footer>`)
- **WHEN** the port renders
- **THEN** a `<footer>` SHALL follow the hero, outside the 100vh shell, linking
  `https://www.componentdock.com/` as "Component Dock"
- **AND** it SHALL use the same `#f3f2ee` ground, the `#dfddd6` hairline and muted **13.5 px** text so it reads as
  part of the page rather than an appendage

## Adapting to the repo (deltas — read before writing code)

**Copy and brand.** The reference's invented shop SHALL NOT appear. Use these replacements:

| source                                                       | port                                                                                                                                                                                                                          |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| "fieldnote" + "audio" wordmark                               | **"Overtone"** with a lighter second syllable, or a two-word lockup of the same width — the wordmark is **143.83** wide and the nav is centred in the _free space_, so a wider logo moves the nav left by half the difference |
| `Contour ANC Headphones`                                     | **keep** — it is a product name, brand-free, and the 1/2-line ladder is keyed to the string                                                                                                                                   |
| `New` eyebrow + `Over-ear · Wireless`                        | keep                                                                                                                                                                                                                          |
| `4.7 out of 5 · 2,318 reviews`                               | keep the shape and the number                                                                                                                                                                                                 |
| `$249` / `$299` / `Save $50`                                 | keep — the arithmetic ($50 off) SHALL stay consistent                                                                                                                                                                         |
| the three-sentence description                               | keep — it is the 3-line measure at 1440 and 4 lines from 1240 down                                                                                                                                                            |
| `Midnight / Stone / Blush` + `--sw` values                   | keep the names and the hexes; they are the design                                                                                                                                                                             |
| `In stock, ships tomorrow` / `Only 4 left, ships in 3 days`  | keep both, because `/only/i` is what sets `is-low`                                                                                                                                                                            |
| `40 h battery`, `−35 dB noise cancelling`, `268 g weight`    | keep the **U+2212** minus in −35 dB, not a hyphen                                                                                                                                                                             |
| `Free 2-day shipping` / `30-day returns` / `2-year warranty` | keep — the three strings are what makes the strip wrap at 463 px                                                                                                                                                              |
| `Add to cart · $249`                                         | keep the middot and the price, but **wire it** (fix 1)                                                                                                                                                                        |

If the port changes the headline or the wordmark it MUST re-measure two seams: the `h1`'s wrap at content
**412.19 / 410.34** (1 vs 2 lines) and the header row's **329.83** px minimum.

**Structure → React.** `App` → `<SiteHeader>` (wordmark, `<NavLinks>`, `<BarTools>` with `<SearchButton>`,
`<CartButton>` + badge, `<MenuButton>`) → `<Main>` → `<ProductHero>` → `<ProductMedia>` (`<Frame>` with
`<ColourPill>` + `<img>` + `<BadgeStrip>`) → `<ProductInfo>` (`<Eyebrow>`, `<Title>`, `<Rating>`, `<Price>`,
`<Description>`, `<ColourFieldset>` with `<Swatches>`, `<StockLine>`, `<BuyRow>` with `<AddToCart>` +
`<WishlistToggle>`, `<Perks>`) → `<SiteFooter>`. State lives in three places: `SiteHeader.isOpen`,
`ProductHero.colour` (drives the image, alt, caption, dot, legend, stock and `is-low`) and
`WishlistToggle.pressed`. The menu's Escape / outside-click / `matchMedia` listeners SHALL be cleaned up on
unmount.

Keep the data as constants: `COLOURS` (3 × `{name, sw, src, alt, stock}`), `BADGES` (3 × `{value, label}`),
`PERKS` (3 × `{icon, label}`), `NAV_LINKS` (4 with `current`), so the counts are testable and the copy lives in
one place.

**Tokens.** Put the palette in `@theme`: `--color-ground:#f3f2ee`, `--color-ink:#17171a`, `--color-bar-text:#f3f2ee`,
`--color-muted:#5a5a60`, `--color-muted-2:#6b6b72`, `--color-line:#dfddd6`, `--color-accent:#e4572e`,
`--color-bar-accent:#ff8a65`, `--color-nav:#c9c8c2`, `--color-stars:#b45309`,
`--color-save-bg:#fde2d8`, `--color-save-ink:#9a3412`, `--color-stock:#166534`, `--color-stock-dot:#16a34a`,
`--color-add-hover:#33333a`, `--color-wish:#c2410c`, `--color-frame:#1c1d21`,
`--color-swatch-1:#1c1d21`, `--color-swatch-2:#8b8e94`, `--color-swatch-3:#f2b8c6`;
`--font-sans: "Sora", system-ui, …`; `--gutter: clamp(16px, 4vw, 40px)`;
`--text-display: clamp(2rem, 1.2rem + 2.6vw, 3.3rem)`; `--hero-gap: clamp(28px, 5vw, 72px)`;
`--hero-pad: clamp(24px,4vw,56px) … clamp(40px,5vw,64px)`. Tailwind's type scale cannot express the clamp, the
28/22 radii need arbitrary values, and the frame's shadow is arbitrary.

**Sora.** Load it once: `https://fonts.googleapis.com/css2?family=Sora:wght@300..800&display=swap` (verified
**200**); the static form `wght@300;400;500;600;700` is also **200**, and the reference ships two variable
binaries under five names. Weights used: **300** (the wordmark's second word), **400** (body, description,
rating, perks, struck price), **500** (stock line), **600** (headline, nav current, `Add to cart`, eyebrow pill,
caption, add button), **700** (price, wordmark, badge values, save chip, cart badge).

**Images.** Do not copy the three photographs. Use deterministic placeholders
`https://picsum.photos/seed/overtone-midnight/900/600`, `-stone` and `-blush`, with the same three `alt`
sentences rewritten to the placeholder's subject. Keep the frame's `aspect-ratio` — the `stone` file is 900 × 604,
so a port that trusts the attributes and drops `object-fit: cover` shows a 4 px gap.

**Prescribed fixes (behavioural, not cosmetic).**

1. **Wire the add-to-cart.** The reference's primary CTA is inert (trap 8): increment the cart badge and switch
   the label to "Added · see cart" for a beat, keeping `aria-live` on the badge.
2. **Do not overflow at 320.** Give the bar `gap: 16px` (or a `min-w-0` wordmark) at ≤360 so the 329.83 px row
   fits; `scrollX` SHALL be 0 at 320 (trap 3).
3. **Test state after transitions settle.** Any assertion on hover or `aria-pressed` styling SHALL read the
   computed style ≥ 300 ms after the event (trap 4).
4. **Ring the wishlist by more than colour.** Add a 2 px ring (or a weight change) on the pressed state so the
   toggle is not colour-only (contrast table).
5. **Keep the live region.** Update the stock line's text node, never replace the `aria-live` element (trap 12).
6. **Keep the dot's source of truth.** Drive `--cl-hero06-current` from the selected colour object, not from a
   swatch lookup (trap 11).
7. **Darken the star amber** to `#8a3f07` if the stars ever become real text (4.48 today).
8. **Anchors.** Give the eight `href="#"` links real destinations; keep `aria-current="page"` on one.
9. **Footer.** Add the Component Dock footer the reference lacks.

**Do not port:** the `:where(html) … { …: revert }` guard block (**23** `revert` declarations — Tailwind's
preflight covers it), the `[hidden]` re-declaration that only exists to undo it, the dead `.cl-icon` rule, the
`is-enhanced` no-JS path as _separate_ CSS (React renders the enhanced state), the source's `#` anchors, or the
macOS screenshot frame.

## Verification checklist

- [ ] `apps/overtone` exists, package `@free-react-templates/overtone`, `public/CNAME` =
      `overtone.free.componentdock.com`, `"homepage"` = `https://overtone.free.componentdock.com`
- [ ] `npm run verify:app overtone` passes (typecheck + lint + 100 % coverage + build)
- [ ] `openspec validate template-overtone --type spec` is valid
- [ ] measured at 1440 × 900 (motion disabled): bar **1440 × 70**; inner **1280 × 70** at (80, 0); wordmark
      **143.83 × 32** at (120, 19); nav **422 × 39.19** at (535.92, 15.41); tools **90 × 42** at (1230, 14);
      cart badge **18 × 18** at (1300, 17); main **1440 × 830**; hero **1280 × 749.64** at (80, 110.17);
      media/frame **648.59 × 518.88** at (120, 221.55); caption **110 × 32.8** at (138, 239.55); strip
      **612.59 × 63.64** at (138, 658.78); info **479.41 × 629.64** at (840.59, 166.17); `h1` **479.41 × 111.91**
      at (840.59, 203.36) at **52.8 / 55.968** in **2 lines**; price **54.39** at (840.59, 369.66); description
      **479.41 × 74.39**; fieldset **78.39** at 536.44; discs **44 × 44** at x 840.59 / 896.59 / 952.59; stock
      **22.39** at 628.83; buy **56** at 673.22; add **340 × 56**; wishlist **56 × 56** at (1190.59, 673.22);
      perks **479.41 × 42.59** at 753.22
- [ ] document height **900** at 1440, 1360, 1280, 1180, 1100, 1024, 960 and **901**; **1421** at 900;
      **1385** at 860; **1304** at 768; **1194** at 640; **1098** at 521; **1233** at 520; **1249** at 480;
      **1237** at 430; **1224** at 390; **1194** at 320
- [ ] `scrollX === 0` at **1440, 1360, 1280, 1240, 1231, 1230, 1180, 1100, 1024, 960, 901, 900, 861, 860, 768,
      700, 640, 521, 520, 506, 503, 480, 448, 446, 430, 390, 360, 340, 330** — and the port SHALL also read
      **0** at **320**, where the reference reads **10** (`scrollWidth` 330)
- [ ] `h1` lines: **2** at ≥901, **1** from 900 to **448**, **2** at ≤**446**; size **52.8** at 1440/1280,
      **49.88** at 1180, **42.6** at 900, **32** from 481 down
- [ ] perks: **one** row at content ≥ **463.03** (vw 1231 / 506), **two** rows (**72.19**) at ≤ **462.78**
      (vw 1230 / 503)
- [ ] colour swap: Midnight → Blush gives `src` = the Blush asset, the Blush `alt`, caption "Blush", legend
      "Blush", stock "Blush: Only 4 left, ships in 3 days" with `is-low` (`#9a3412` / dot `#e4572e`), and the
      caption dot `#f2b8c6`; under reduced motion the swap is synchronous
- [ ] wishlist: `aria-pressed` flips on every click and, **after 300 ms**, the icon and border read `#c2410c`
      with the heart filled (before 300 ms they still read the t=0 values — do not assert there)
- [ ] menu: button appears at **860** (42 × 42, bar **70**, nav `display:none`), disappears at **861**;
      `aria-expanded` / `aria-label` toggle, icons swap, panel is `top:100%` with a 2 px-equivalent ink border,
      and Escape / outside click / link click / crossing 861 each close it
- [ ] add-to-cart is **not** inert in the port: clicking it changes the cart badge (the reference leaves it at 2)
- [ ] exactly **one** `<h1>`, **zero** `<h2>`/`<h3>`, **zero** `<form>`, **3** radios, **3** buttons, **1**
      `<img>`, **8** anchors and **2** ids in the reference shape; footer links `https://www.componentdock.com/`
- [ ] no ColorLib asset is copied: the three photos are `picsum.photos/seed/overtone-*`, Sora comes from Google
      Fonts, icons are inline SVG or `lucide-react`
- [ ] contrast: ink/ground **15.97**, muted/ground **6.11**, white/ink **17.89**, save **5.93**, stock **6.37**,
      badge captions **5.85–6.57**; the star amber is deepened if it ever becomes text
- [ ] `git grep -il 'colorlib\|hero-06\|fieldnote' apps/overtone` → **no hits** (the wordmark is **Overtone**;
      provenance lives only in this spec, `TEMPLATES.md` and the PR)

## Implementation record (2026-10-26)

`apps/overtone` shipped as `@free-react-templates/overtone` from `feat/template-overtone`: **37 tests**, 100 %
statements / branches / functions / lines (122 / 38 / 36 / 104). The numbers below were re-read off the built
bundle with Playwright at 1440 × 900 (`reducedMotion: 'reduce'`, after `document.fonts.ready`).

| what               | reference                                                   | port                                                    |
| ------------------ | ----------------------------------------------------------- | ------------------------------------------------------- |
| bar / inner        | 1440 × 70 / 1280 × 70 @ (80, 0)                             | identical                                               |
| wordmark           | 143.83 × 32 @ (120, 19)                                     | 144.63 × 32                                             |
| nav                | 422 × 39.19 @ (535.92, 15.41)                               | 414 × 39.19 @ (540.31, 15.41) — centre 747.31 vs 746.92 |
| tools / cart badge | 90 × 42 @ (1230, 14) / 18 × 18 @ (1300, 17)                 | identical                                               |
| hero section       | 1280 × 749.64 @ (80, 110.17)                                | identical                                               |
| frame              | 648.59 × 518.88, radius 28, 5:4                             | identical                                               |
| caption pill / dot | 110 × 32.8 @ (138, 239.55) / 16 × 16 @ (146, 247.94)        | 106 × 32.8 / 16 × 16 @ the same rects                   |
| badge strip / chip | 612.59 × 63.64 / 197.53 × 63.64 @ (138, 658.78)             | identical                                               |
| info column        | 479.41 × 629.64 @ (840.59, 166.17)                          | identical                                               |
| eyebrow            | 23.19                                                       | 23.19                                                   |
| `h1`               | 479.41 × 111.91 @ (840.59, 203.36), 52.8 / 55.968 / 2 lines | identical                                               |
| rating             | 22.39 @ (840.59, 325.27)                                    | identical                                               |
| price row          | 54.39 @ (840.59, 369.66)                                    | identical                                               |
| description        | 74.39 (3 lines) @ 438.05                                    | identical                                               |
| fieldset / legend  | 78.39 @ 536.44 / 123 × 22.39                                | 78.39 / 122 × 22.39                                     |
| swatch             | 44 × 44 @ (840.59, 570.83)                                  | identical                                               |
| stock / buy        | 22.39 @ 628.83 / 56 @ 673.22                                | identical                                               |
| add / wishlist     | 340 × 56 / 56 × 56 @ (1190.59, 673.22)                      | identical                                               |
| perks              | 479.41 × 42.59 @ 753.22, one row                            | identical                                               |

**Document height (port, including the 63 px footer the reference does not have):** 963 at 1440, 1280, 1180 and
901; **1484** at 900; 1473 at 860; 1391 at 768; 1282 at 640; 1161 at 521; 1305 at 520; 1322 at 480; 1312 at 390;
1267 at 320. Minus the footer the shell reproduces the reference's 900 / 1421 / 1098 / 1233 ladder; the residual
0–25 px at ≤900 is one description line (the port's copy is 142 characters where the source's sentence is longer)
and 9 px of chip padding in the static badge strip at ≤520.

`scrollX === 0` and `scrollWidth === clientWidth` at every width in the ladder, **including 320** where the
reference reads 10.

**Deltas against the reference, all prescribed above and all shipped:** the buy bar is wired (badge 2 → 3, the
label confirms `Added · see cart` for 1.2 s); the bar takes `gap: 8px / padding 14px 12px` and an 18 px wordmark
below 360 so 320 does not scroll; the wishlist's pressed state adds a 2 px ring on top of the colour change; the
stock line keeps its single `aria-live` element and only its text node changes; the caption dot reads the
selected colour object; the eight `#` anchors point at the section's own id; and the three photographs are
`picsum.photos/seed/overtone-{midnight,stone,blush}/900/600`.
