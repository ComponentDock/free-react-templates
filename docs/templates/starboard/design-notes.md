# Starboard — design notes (section-by-section fidelity)

Source: ColorLib **"Website Menu V05"** — slug `website-menu-05`,
https://colorlib.com/wp/template/website-menu-05/. New name: **starboard**
(apps/starboard, `@free-react-templates/starboard`).

Research date **2026-10-11**. Reference artifacts:
`/tmp/wm05b.html` (the **live preview** HTML, 2,822 B), `/tmp/wm05-style.css`
(15,648 B, sha256 `ce2dfcce…`), `/tmp/wm05-snippet.js` (2,525 B,
sha256 `8704ac98…`), `/tmp/wm05.zip` (the **705,301 B** snippet archive),
extracted to `/tmp/wm05x/website-menu-05/` → `index.html`, `css/style.css`
(byte-identical to the live copy), `js/snippet.js` (byte-identical),
`images/hero_1.jpg`, `README.md`, `fonts/` (Open Sans 300/400/700 latin +
latin-ext = 6 woff2, plus `icomoon-subset.woff2`), `/tmp/cl-wm05.html` (the
ColorLib template page, 108,818 B — source of the description / date /
download-size facts) and `/tmp/wm05.png` (the screenshot, 1200×972, converted
from the AVIF original).

## Preview status — where the live preview actually lives (read this first)

`https://preview.colorlib.com/theme/website-menu-05/` returns **HTTP 404**
(`Not Found`, 9 B) — but that is **not** the preview: the *Website Menus* family
does not sit under the slug-only theme path. The **working live preview** is

```
https://preview.colorlib.com/theme/bootstrap/website-menu-05/
```

→ **HTTP 200**, `text/html`, **2,822 B**, title `Website Menu #5`, verified
2026-10-11. It was found through the catalog index the preview host loads for its
own home page (`https://preview.colorlib.com/assets/js/catalog-products-*.js`),
which maps the `website-menu-05` key to the `theme/bootstrap/` URL. The live page
loads exactly two assets — `css/style.css?v=22dd860e` (**15,648 B**, `text/css`)
and `js/snippet.js?v=7d62fffa` (**2,525 B**) — and both are **byte-identical**
(sha256 `ce2dfccefdf42d529197a13de6118b3f7bc99bd58c66d9b1e8c5a9462d2bc954` and
`8704ac9816c7551e12d9e33ffae4b81551562617930af850c024b96a983993be`) to the files
in the snippet's own archive
`https://preview.colorlib.com/downloads/free/website-menu-05.zip` (HTTP 200,
`application/zip`, 705,301 B). So the live preview is the primary reference and
the archive is its un-versioned twin; every value below is read from those files
and confirmed against the live render (next section). No screenshot-only fallback
was needed.

Archive contents: `index.html`, `css/style.css`, `js/snippet.js`, `README.md`,
`images/hero_1.jpg` and the Open Sans woff2 subsets (300/400/700 × latin /
latin-ext) plus `icomoon-subset.woff2`. The README calls the snippet
dependency-free: "No jQuery, no Bootstrap, no build step, no CDN call."

## Live render cross-check (2026-10-11, 765×437 viewport)

The live preview was opened in a browser and its computed styles read back.
Everything in this document is confirmed on real elements:

- `body` → height **874 px** (= `200vh`), computed family **Open Sans**, 16 px,
  `color:rgb(33,37,41)`, `background:#fff`.
- `.hero` → `getBoundingClientRect()` **765 × 437 = the entire viewport**,
  `background-image:url(…/images/hero_1.jpg)`, `background-size:cover`,
  `background-position:50% 50%`.
- `.site-navbar` → `position:absolute; top:0; width:765px; z-index:1999`;
  `padding:24px 0`; `background-color:rgba(0,0,0,0)` (transparent); rect
  **765 × 90**. At `max-width:991.98px` the sheet raises the padding to `3rem`
  top/bottom.
- `.site-logo a` → **`rgb(255,255,255)`**, **Open Sans, 16 px, weight 700,
  `text-transform:uppercase`** (white over the photo thanks to the
  `cl-text-white` utility).
- `.site-menu-toggle span` → **`rgb(255,255,255)` at 28 px** (the `.cl-h3` size).
- `.site-navigation` → **`display:none`** and `.site-menu-toggle` →
  **`display:inline`** — the source's desktop nav row is **dead code** and the
  hamburger is the only control at **every** width.
- `.site-mobile-menu` → `width:300px; position:fixed; right:0; z-index:2000;
  padding-top:20px; background:#fff; height:437px`,
  `transform:matrix(1,0,0,1,330,0)` (= `translateX(330px)` = 110 % of 300),
  `transition:0.3s ease-in-out`,
  `box-shadow:rgba(0,0,0,.1) -10px 0px 20px -10px`.
- Desktop rows (hidden) → **Home `rgb(0,0,0)`** (current) and About/Services/
  Blog/Contact **`rgba(0,0,0,.7)`**, all **16 px, `text-transform:none`** — this
  variant does **not** uppercase its links (unlike `-01`). `li.cl-active`
  computes `color:#007bff` while its `a` computes `#000`.
- After clicking the toggle, `document.body` gained **`offcanvas-menu`** and the
  cloned `.site-nav-wrap` in the panel read **Home `rgb(0,123,255)`** (current)
  and About/Services/Blog/Contact **`rgb(33,37,41)`**, all **20 px,
  `padding-left:20px`, `padding:10px 0`** — the mobile clone confirms the blue
  current row.

**Harness caveat (cost a false alarm in the sibling `-01` run:)** the browser tab
reports `document.hidden === true`, so some class-toggled style recalcs stall —
`getComputedStyle` on the panel/veil can still return the pre-open value after
`body` gained `offcanvas-menu`. The rules exist in the sheet
(`.offcanvas-menu .site-mobile-menu{transform:translateX(0%)}`,
`body.offcanvas-menu:before{opacity:1; visibility:visible; z-index:1002}`).
Re-read or dispatch the event before concluding the page is broken.

## Source facts worth keeping

- First published **2021-01-27**; rewritten in the **October 2026** build to
  plain HTML + CSS + vanilla JS ("no jQuery, no framework"), exactly like its
  `-01` sibling.
- ColorLib's own description: *"A modern, responsive and quick to integrate free
  sidebar vertical menu that keeps your website clean and minimal."*
- The sheet is a **hand-rolled Bootstrap-4 grid look-alike** with a `cl-`
  namespace (`cl-container`, `cl-row`, `cl-col-3/9`, `cl-d-*`, `cl-text-right`,
  `cl-text-white`, `cl-text-black`, `cl-font-weight-bold`, `cl-py-4/5`,
  `cl-align-items-center`, `cl-position-relative`, `cl-ml-auto`, `cl-mt-3`,
  `cl-nav-link`, `cl-collapse`) — **not** a Bootstrap build. The recreation uses
  Tailwind utilities and must not reuse the `cl-` names.

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
  (link hover), `#212529` (body + rows), `#fff` (body/panel/toggle/wordmark),
  `#ced4da` (close-glyph hover), `#000` / `rgba(0,0,0,.7)` (hidden desktop row),
  `rgba(0,0,0,.5)` (veil), `rgba(0,0,0,.1)` (panel shadow), plus two colours the
  sheet declares but that never render here: `#f8f9fa` (`.arrow-collapse:hover`)
  and `#6c757d` (`.cl-nav-link.disabled`). That is the entire
  colour vocabulary — a blue accent on a white panel over a photo.
- **Radii:** the sheet holds exactly two roundings — a normalize
  `button{border-radius:0}` and the `50%` of the `36 px`
  `.site-mobile-menu .site-nav-wrap .arrow-collapse` toggle (whose `#f8f9fa` hover
  also ships). That toggle is injected only beside a `.has-children` row, and this
  variant's markup carries **none**, so **no circular control renders**.
  **Everything visible is square** — do not introduce
  pills or rounded cards.
- **Shadows used:** `-10px 0 20px -10px rgba(0,0,0,.1)` (off-canvas panel) is the
  only box-shadow. Veil `rgba(0,0,0,.5)`.
- **Motion:** site-wide `a{transition:.3s all ease}`; panel `.3s all ease-in-out`;
  veil `.3s all ease`.

## Section 0 (chrome) — `div.site-mobile-menu`

Sits **before** the header because it is `position:fixed`. `width:300px;
position:fixed; right:0; z-index:2000; padding-top:20px; background:#fff;
height:calc(100vh); transform:translateX(110%);
box-shadow:-10px 0 20px -10px rgba(0,0,0,.1); transition:.3s all ease-in-out`,
sliding to `translateX(0)` under `body.offcanvas-menu`.

- **Header strip:** `.site-mobile-menu-header` (20 px side padding) with a
  right-floated `.site-mobile-menu-close` (`margin-top:8px`) whose `span` is a
  **30 px** close glyph (hover `#ced4da`) — a `lucide-react` `X` in the
  recreation.
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
- **Close paths:** the close glyph, a `document`-level `mouseup` outside the panel
  (ignoring clicks on the toggle), `Escape` (`keydown`), and a resize wider than
  **768 px**. The recreation keeps the first three and **drops the 768 px
  resize-close** — the panel is the only nav at every width, so auto-closing it on
  a desktop resize would fight the design (documented delta).

## Section 1 — `header.site-navbar` (transparent, over the band)

- `position:absolute; top:0; width:100%; margin-bottom:0; z-index:1999`, so it
  floats **on top of** the band and the photo shows through; `padding:1rem`
  raised to **24 px** top/bottom by `cl-py-4` (measured).
- Grid: `.cl-container > .cl-row.cl-align-items-center.cl-position-relative` with
  a **left `cl-col-3`** (logo) and a **right `cl-col-9 cl-text-right`**.
- **Wordmark:** `.site-logo > a.cl-font-weight-bold.cl-text-white` reading
  **"Brand"** — rendered **white, uppercase, Open Sans 700, 16 px**. The source
  wordmark is never reproduced verbatim; the recreation uses its own wordmark.
- **Right column** holds a toggle wrapper
  `span.cl-d-inline-block.cl-d-lg-block > a.site-menu-toggle.js-menu-toggle.cl-text-black.cl-py-5`
  whose inner `span.icon-menu.cl-h3.cl-text-white` is a three-bar SVG (`.cl-h3` =
  `1.75rem`, so ≈**28 px**, white) **and** the permanently-hidden desktop nav
  `nav.site-navigation.cl-text-right.cl-ml-auto.cl-d-none.cl-d-lg-none` (both
  `cl-d-none` and `cl-d-lg-none` — never visible; confirmed `display:none` live).
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
no heading, no overlay, no `<img>` element. The photo (`hero_1.jpg` — three people
against a grey cinderblock wall) is the band's whole content; the header floats
over it, so the first paint is **image + wordmark + hamburger**. `body{height:200vh}`
forces the demo to scroll.

**Delta (deliberate):** the source's five menu links point at `index.html`,
`about.html`, `services.html`, `blog.html`, `contact.html` — **none of which exist
in the snippet** (it ships a single `index.html`). The recreation materialises each
as a labelled own-copy panel **inside this same band** (band count and order stay
1:1), gives every one a `scroll-margin-top` ≥ header height, and ships **zero**
dead `href="#"` links. Panels sit over the photo in white/near-white with a
`#007bff` accent; imagery, if used, comes from
`https://picsum.photos/seed/starboard-<n>/<w>/<h>`. The hero photo itself is the
placeholder `https://picsum.photos/seed/starboard-hero/1920/1080`.

## Screenshot read-through (1200×972, AVIF→PNG)

A browser-chrome mock of the live preview with the **off-canvas panel open**. A
single **full-bleed photo** fills the frame — three people smiling against a grey
cinderblock wall, low-key daylight. Over the photo, top-left, the wordmark
**`BRAND`** in **white uppercase bold**; top-right a **white hamburger glyph**.
Down the right edge a **white vertical panel** occupies about a quarter of the
width, separated from the photo by a soft left-edge shadow, carrying a small
**dark `×`** at its top-right and a stacked list: **`Home`** in brand **blue
`#007bff`** (current), then **`About`**, **`Services`**, **`Blog`**, **`Contact`**
in near-black. That frame — image hero + transparent header + open right sidebar —
is the design being replicated.

## Fidelity gotchas

1. **The desktop nav row is dead on purpose.** The source ships it `display:none`
   forever; the deliverable is the off-canvas sidebar, available at every width.
   Do **not** build a visible desktop row.
2. **The hamburger is the only control, at every width.** It is white over the
   photo. Do not hide it at desktop widths.
3. **The panel is the source's "mobile" menu but is really a global sidebar** —
   hence the 768 px resize-close is dropped (documented). The other three close
   paths stay.
4. **Square corners, no circular controls.** This variant has no `.has-children`,
   so the `-01` round arrow toggle never renders — do not add one.
5. **No sticky header here.** Unlike `-01`, `snippet.js` has no scroll/sticky
   logic; the header simply floats over the 100vh image band.
6. **`text-transform:none` on menu links** (measured 16 px) — this variant does
   **not** uppercase its links, unlike `-01`.
7. **One nav source of truth** — render the same nav in the panel rather than
   cloning DOM (`nav.cloneNode(true)` in the source).
8. **The five `.html` links have no targets** — materialise them as labelled
   in-band panels; never ship dead links.
9. **No assets to copy**: the hero photo (`hero_1.jpg`), the three-bar SVG and the
   close glyph must be replaced with a picsum placeholder and `lucide-react`
   icons; the six Open Sans woff2 files load from Google Fonts instead.
10. **Veil z-index** is `1` at rest and `1002` when open (above the page, below
    the `z-index:2000` panel) — keep that ordering.
