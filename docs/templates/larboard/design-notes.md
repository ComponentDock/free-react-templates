# Larboard — design notes (section-by-section fidelity)

Source: ColorLib **"Website Menu V06"** — slug `website-menu-06`,
https://colorlib.com/wp/template/website-menu-06/. New name: **larboard**
(apps/larboard, `@free-react-templates/larboard`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/wm06.html` (the **live preview** HTML, 2,878 B), `/tmp/wm06.css`
(15,914 B, sha256 `db7091c8…`), `/tmp/wm06.js` (2,525 B, sha256 `52e12ae2…`),
`/tmp/wm06.zip` (the **705,375 B** snippet archive), extracted to
`/tmp/wm06z/website-menu-06/` → `index.html`, `css/style.css` (byte-identical to
the live copy), `js/snippet.js` (byte-identical), `images/hero_1.jpg` (1900×1267),
`README.md`, `fonts/` (Open Sans 300/400/700 latin + latin-ext = 6 woff2, plus
`icomoon-subset.woff2`), `/tmp/cl-wm06.html` (the ColorLib template page,
108,931 B — source of the description / dates / download-size facts) and
`/tmp/wm06.png` (the screenshot, 1200×972, converted from the AVIF original).

## Preview status — where the live preview actually lives (read this first)

`https://preview.colorlib.com/theme/website-menu-06/` returns **HTTP 404**
(`Not Found`, 9 B) — but that is **not** the preview: the *Website Menus* family
does not sit under the slug-only theme path. The **working live preview** is

```
https://preview.colorlib.com/theme/bootstrap/website-menu-06/
```

→ **HTTP 200**, `text/html`, **2,878 B**, title `🐴 Website Menu #6`, verified
2026-10-11. It was found through the catalog index the preview host loads for its
own home page (`https://preview.colorlib.com/assets/js/catalog-products-*.js`),
which maps the `website-menu-06` key to the `theme/bootstrap/` URL. The live page
loads exactly two assets — `css/style.css?v=bdd8b5c0` (**15,914 B**, `text/css`)
and `js/snippet.js?v=0fd41ac8` (**2,525 B**) — and both are **byte-identical**
(sha256 `db7091c84b127cb79a77552e4466b3987c43ab651429e2c418f88621a59f9305` and
`52e12ae27ecd855e8512e228f1f797cdcdcdabb18067ae3188b08ed66d537b97`) to the files
in the snippet's own archive
`https://preview.colorlib.com/downloads/free/website-menu-06.zip` (HTTP 200,
`application/zip`, 705,375 B). So the live preview is the primary reference and
the archive is its un-versioned twin; every value below is read from those files
and confirmed against the live render (next section). No screenshot-only fallback
was needed. The archive's own `index.html` differs from the live one only by the
preview host's cache-busting query strings and its `noindex` meta tags (verified
with `diff`).

Archive contents: `index.html`, `css/style.css`, `js/snippet.js`, `README.md`,
`images/hero_1.jpg` and the Open Sans woff2 subsets (300/400/700 × latin /
latin-ext) plus `icomoon-subset.woff2`. The README calls the snippet
dependency-free: "No jQuery, no Bootstrap, no build step, no CDN call."

## Live render cross-check (2026-10-11, 780×437 viewport)

The live preview was opened in a browser and its computed styles read back.
Everything in this document is confirmed on real elements:

- `body` → height **874 px** (= `200vh`), computed family **Open Sans**, 16 px,
  `color:rgb(33,37,41)`, `background:#fff`.
- `.hero` → `getBoundingClientRect()` **765 × 437 = the entire viewport**,
  `background-image:url(…/images/hero_1.jpg)`, `background-size:cover`,
  `background-position:50% 50%`.
- `.site-navbar` → `position:absolute; top:0; width:765px; z-index:1999`;
  `padding:24px 0`; `background-color:rgba(0,0,0,0)` (transparent); rect
  **765 × 90**. The `24 px` is the `cl-py-4` utility (`1.5rem !important`), which
  outranks the sheet's own `@media (max-width:991.98px){.site-navbar{padding-top:
  3rem; padding-bottom:3rem}}`.
- `.site-logo a` → **`rgb(255,255,255)`**, **Open Sans, 16 px, weight 700,
  `text-transform:uppercase`**, positioned at x ≈ **578 px** — the **right** side
  of the bar (white over the photo thanks to the `cl-text-white` utility).
- `.site-menu-toggle span` → **`rgb(255,255,255)` at 28 px** (the `.cl-h3` size,
  a three-bar inline SVG), at x ≈ **38 px** — the **left** side of the bar.
  `.site-menu-toggle` itself measures **28 × 118 px** (`display:inline`; the
  `cl-py-5` anchor padding supplies the tall click target).
- `.site-navigation` → **`display:none`** — the source's desktop nav row is **dead
  code** and the hamburger is the only control at **every** width.
- `.site-mobile-menu` → `width:300px; position:fixed; left:0; z-index:2000;
  padding-top:20px; background:#fff; height:437px`,
  `transform:matrix(1,0,0,1,-300,0)` (= `translateX(-300px)`, i.e. `-100 %`),
  `transition:0.3s ease-in-out`,
  `box-shadow:rgba(0,0,0,.1) -10px 0px 20px -10px`. **Left** edge, not right.
- `.site-mobile-menu-body` → **385 px** = `calc(100vh - 52px)`,
  `padding-bottom:150px`, `overflow-y:scroll`.
- `.site-mobile-menu-close span` → **`rgb(33,37,41)`, 30 px** (measured 40 × 32),
  floated to the panel's **right**.
- Panel rows → first row (Home, current) **`rgb(0,123,255)`**, **20 px**,
  `padding:10px 20px`, x ≈ −280 (inside the off-screen panel); `.site-nav-wrap >
  li` count = **5**.
- `.site-menu .has-children` count = **0** — **no dropdowns at all** in this
  variant, so the sheet's `.has-children` rules and the JS arrow-toggle branch
  never execute.
- `body::before` (the veil) → `rgba(0, 0, 0, 0.5)`, `opacity=0`, `z-index=1` at
  rest; the sheet reveals it at `opacity:1; visibility:visible; z-index:1002`
  under `body.offcanvas-menu`.

**Harness caveat (cost a false alarm in the sibling `-01`/`-05` runs:)** the
browser tab reports `document.hidden === true`, so some class-toggled style
recalcs stall — `getComputedStyle` on the panel/veil can still return the
pre-opened value after `body` gained `offcanvas-menu`. The rules exist in the
sheet (`.offcanvas-menu .site-mobile-menu{transform:translateX(0%)}`). Re-read or
dispatch the event before concluding the page is broken.

## Source facts worth keeping

- First published **2021-01-28**; the ColorLib page reports an update on
  **2026-09-25** — the plain HTML + CSS + vanilla JS rewrite ("no jQuery, no
  framework") shared with its `-01`…`-05` siblings.
- ColorLib's own description: *"The best free left sidebar menu template that
  works in complete harmony with both mobile and desktop devices."*
- ColorLib's download figure for this snippet: **689 KB** (the actual zip is
  705,375 B).
- The sheet is a **hand-rolled Bootstrap-4 grid look-alike** with a `cl-`
  namespace (`cl-container`, `cl-row`, `cl-col-3/9`, `cl-order-1/2`,
  `cl-d-inline-block`, `cl-d-lg-block`, `cl-d-none`, `cl-d-lg-none`,
  `cl-text-left/right/black/white`, `cl-font-weight-bold`, `cl-py-4/5`,
  `cl-align-items-center`, `cl-position-relative`, `cl-ml-auto`, `cl-mr-auto`,
  `cl-mt-3`, `cl-nav-link`, `cl-collapse`, `cl-icon`, `cl-h3`) — **not** a
  Bootstrap build. The recreation uses Tailwind utilities and must not reuse the
  `cl-` names.

## What makes this variant different from its `-05` sibling (starboard)

| | `website-menu-05` (starboard) | `website-menu-06` (**larboard**) |
| --- | --- | --- |
| panel edge | **right** (`right:0`, `translateX(110%)`) | **left** (`left:0`, `translateX(-100%)`) |
| hamburger column | right (`cl-col-9 cl-order-2 cl-text-right`) | **left** (`cl-col-9 cl-order-1 cl-text-left`) |
| wordmark column | left (`cl-col-3`) | **right** (`cl-col-3 cl-order-2 cl-text-right`) |
| menu glyph | icon-font `icon-menu` span | **inline SVG** three-bar path |
| sub-levels | none | none (`has-children` = 0) |
| panel close glyph | 30 px, hover `#ced4da` | 30 px **`#212529`**, hover `#ced4da` |

Everything else — tokens, paddings, timings, the veil, the dead desktop row, the
`200vh` body, the `100vh` hero — is shared between the two variants.

## Global tokens

- **Type:** effective family is **`"Open Sans", -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`**. The
  sheet contains **two** `body` rules: an early `Roboto`-first one and a later
  Open Sans one that **overrides** it — Open Sans renders. Weights shipped:
  **300, 400, 700** (six woff2 subsets).
- **Scale:** `h3,.cl-h3{font-size:1.75rem; font-weight:500; line-height:1.2;
  margin-bottom:.5rem}`; the wordmark is `.site-logo{font-size:1rem}` +
  `uppercase` (measured 16 px / 700); desktop menu links **16 px**
  (`.cl-nav-link{padding:.5rem 1rem}`, `text-transform:none`); off-canvas rows
  **20 px**; body copy `1rem / 1.5`.
- **Palette (whole sheet):** `#007bff` (links, current row, hover), `#0056b3`
  (link hover), `#212529` (body + rows + the close glyph), `#fff` (body/panel/
  toggle/wordmark), `#ced4da` (close-glyph hover), `#f8f9fa` (arrow-toggle hover —
  unreachable here), `#000` / `rgba(0,0,0,.7)` (hidden desktop row),
  `rgba(0,0,0,.5)` (veil), `rgba(0,0,0,.1)` (panel shadow). That is the entire
  colour vocabulary — a blue accent on a white panel over a photo.
- **Radii:** the only rounding in the sheet is a normalize `button{border-radius:0}`
  and the `border-radius:50%` on `.arrow-collapse` (which only exists inside
  `.has-children` — **not present in this variant**). **Everything is square**;
  do not introduce pills or rounded cards.
- **Shadows used:** `-10px 0 20px -10px rgba(0,0,0,.1)` (off-canvas panel) is the
  only box-shadow. Veil `rgba(0,0,0,.5)`.
- **Motion:** site-wide `a{transition:.3s all ease}`; panel `.3s all ease-in-out`;
  veil `.3s all ease`; close glyph `.3s all ease`.

## Section 0 (chrome) — `div.site-mobile-menu` (rendered FIRST in the DOM)

Sits **before** the header because it is `position:fixed`. `width:300px;
position:fixed; **left:0**; z-index:2000; padding-top:20px; background:#fff;
height:calc(100vh); transform:translateX(-100%);
box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s all ease-in-out`,
sliding to `translateX(0)` under `body.offcanvas-menu`.

- **Header strip:** `.site-mobile-menu-header` (20 px side padding) with a
  right-floated `.site-mobile-menu-close` (`margin-top:8px`) whose `span` is a
  **30 px** close glyph (`#212529`, hover `#ced4da`) holding an **inline SVG**
  cross (`M810 665 572 427 810 189 750 129 512 367 274 129 214 189 452 427 214
  665 274 725 512 487 750 725Z`) — a `lucide-react` `X` in the recreation.
- **Body:** `.site-mobile-menu-body{overflow-y:scroll;
  -webkit-overflow-scrolling:touch; position:relative; padding:0 20px 20px;
  height:calc(100vh - 52px); padding-bottom:150px}` — the extra bottom padding
  matters on iOS.
- **The tree is cloned**, not authored: `nav.cloneNode(true)` with the class
  swapped to `.site-nav-wrap`, appended to the body. In React, render the same
  nav tree component twice (a header trigger owns the panel; the panel mounts the
  same `<Nav>` instance) instead of cloning DOM.
- **Rows:** `.site-nav-wrap a{padding:10px 20px; display:block; color:#212529}`
  (hover `#007bff`), `> li > a{font-size:20px; padding-left:20px}`,
  `li.cl-active > a{color:#007bff}`. No second/third levels exist here.
- **Veil:** `body:before` — `content:""; position:absolute; inset:0;
  background:rgba(0,0,0,.5); opacity:0; visibility:hidden; z-index:1;
  transition:.3s all ease`, shown by `body.offcanvas-menu:before{opacity:1;
  visibility:visible; z-index:1002}`.
- **Close paths in `snippet.js`:** the close glyph (a `.js-menu-toggle`), a
  `document`-level `mouseup` outside the panel (ignoring clicks on a
  `.js-menu-toggle`), `Escape` (`keydown`), and a `window` `resize` wider than
  **768 px**. The recreation keeps all four — unlike the `-05` sibling, where the
  resize-close was dropped; state the choice in the PR.

## Section 1 — `header.site-navbar` (transparent, over the band, MIRRORED)

- `position:absolute; top:0; width:100%; margin-bottom:0; z-index:1999`, so it
  floats **on top of** the band and the photo shows through; `padding:1rem`
  raised to **24 px** top/bottom by `cl-py-4` (measured).
- Grid: `.cl-container > .cl-row.cl-align-items-center.cl-position-relative` with
  a **left `cl-col-9 cl-order-1 cl-text-left`** column and a **right
  `cl-col-3 cl-ml-auto cl-text-right cl-order-2`** column. Note this is the exact
  mirror of the `-05` sibling: here the **hamburger is left** and the **wordmark
  is right**.
- **Left column** holds
  `span.cl-d-inline-block.cl-d-lg-block > a.cl-text-black.site-menu-toggle.js-menu-toggle.cl-py-5`
  whose inner `span.icon-menu.cl-h3.cl-text-white` is a three-bar **inline SVG**
  (`.cl-h3` = `1.75rem`, so ≈**28 px**, white; measured 28 px at x ≈ 38 px) **and**
  the permanently-hidden desktop nav
  `nav.site-navigation.cl-text-right.cl-ml-auto.cl-d-none.cl-d-lg-none` (both
  `cl-d-none` **and** `cl-d-lg-none` — never visible; confirmed `display:none`
  live).
- **Right column** holds the wordmark:
  `.site-logo > a.cl-font-weight-bold.cl-text-white` reading **"Brand"** —
  rendered **white, uppercase, Open Sans 700, 16 px** (measured 57 × 22 at
  x ≈ 578). The source wordmark is never reproduced verbatim; the recreation uses
  its own wordmark.
- The hidden row is a flat `ul.site-menu.main-menu.js-clone-nav.cl-ml-auto` of
  five `li` — Home (`.cl-active`), About, Services, Blog, Contact — each `<a>`
  `padding:20px 0; margin:0 15px; color:rgba(0,0,0,.7)!important`, hover
  `#000!important`, `.cl-active > a` `#000!important`, `.cl-active` itself
  `color:#007bff!important`. **No dropdowns, no socials, no sub-levels.** The
  recreation does **not** ship this dead row; it renders one nav used by the
  panel instead (documented delta).

## Section 2 — `div.hero` (the image band)

Literally `<div class="hero" style="background-image:url('images/hero_1.jpg');">`:
`.hero{height:100vh; width:100%; background-size:cover;
background-position:center center; background-repeat:no-repeat}`. Nothing else —
no heading, no overlay, no `<img>` element. The photo (`hero_1.jpg`, 1900×1267 —
three people against a grey cinderblock wall) is the band's whole content; the
header floats over it, so the first paint is **image + wordmark + hamburger**.
`body{height:200vh}` forces the demo to scroll.

**Delta (deliberate):** the source's five menu links point at `index.html`,
`about.html`, `services.html`, `blog.html`, `contact.html` — **none of which exist
in the snippet** (it ships a single `index.html`). The recreation materialises each
as a labelled own-copy section **inside this same band** (band count and order stay
1:1), gives every one a `scroll-margin-top` ≥ header height, and ships **zero**
dead `href="#"` links. Sections sit over the photo in white/near-white with a
`#007bff` accent; imagery, if used, comes from
`https://picsum.photos/seed/larboard-<n>/<w>/<h>`. The hero photo itself is the
placeholder `https://picsum.photos/seed/larboard-hero/1920/1080`.

## Screenshot read-through (1200×972, AVIF→PNG)

A browser-chrome mock of the live preview with the **off-canvas panel open on the
LEFT**. A single **full-bleed photo** fills the frame — three people smiling
against a grey cinderblock wall, low-key daylight. Over the photo, top-**right**,
the wordmark **`BRAND`** in **white uppercase bold**. Down the **left** edge a
**white vertical panel** occupies about a quarter of the width, separated from
the photo by a soft right-edge shadow, carrying a small **dark `×`** at its
top-right and a stacked list: **`Home`** in brand **blue `#007bff`** (current),
then **`About`**, **`Services`**, **`Blog`**, **`Contact`** in near-black. The
photo behind is dimmed by the `rgba(0,0,0,.5)` veil. That frame — image band +
transparent header + open **left** sidebar — is the design being replicated.

## Fidelity gotchas

1. **The panel is on the LEFT.** `left:0`, `translateX(-100%)`. Do not copy the
   `-05` sibling's right-edge geometry.
2. **The header is mirrored too.** Hamburger **left**, wordmark **right**
   (`cl-col-9 cl-order-1 cl-text-left` vs `cl-col-3 cl-order-2 cl-text-right`).
   Do not normalise it to the sibling's logo-left layout.
3. **The desktop nav row is dead on purpose.** The source ships it `display:none`
   forever; the deliverable is the off-canvas sidebar, available at every width.
   Do **not** build a visible desktop row.
4. **The hamburger is the only control, at every width.** It is white over the
   photo. Do not hide it at desktop widths.
5. **No dropdowns, no round arrow toggle.** `has-children` count is 0; the sheet's
   `.arrow-collapse` (36 px circle) never renders — do not add one.
6. **Square corners.** The only rounding is the unreachable arrow circle and a
   normalize `button{border-radius:0}`.
7. **No sticky header here.** `snippet.js` has no scroll/sticky logic; the header
   simply floats over the `100vh` image band.
8. **Panel-first DOM order.** The `position:fixed` panel is the first element in
   the body; matching that order keeps stacking behaviour identical.
9. **One nav source of truth** — render the same nav in the panel rather than
   cloning DOM (`nav.cloneNode(true)` in the source).
10. **The five `.html` links have no targets** — materialise them as labelled
    in-band sections; never ship dead links.
11. **No assets to copy**: the hero photo (`hero_1.jpg`), the three-bar SVG and
    the close-cross SVG must be replaced with a picsum placeholder and
    `lucide-react` icons; the six Open Sans woff2 files load from Google Fonts
    instead.
12. **Veil z-index** is `1` at rest and `1002` when open (above the page, below
    the `z-index:2000` panel) — keep that ordering.
13. **The resize-close (>768 px) is kept here** (the `-05` sibling dropped it).
    With the source's `mouseup`-outside, `Escape` and the close glyph, that is
    four tested close paths.
