# Rackline — design notes (section-by-section fidelity)

Recreation of ColorLib **"Server"** (source slug `server`,
https://colorlib.com/wp/template/server/) under the NEW name **rackline**
(`apps/rackline`, `@free-react-templates/rackline`).

Reference used (research date 2026-10-11):

- Live preview DOM: `https://preview.colorlib.com/theme/server/` — HTTP 200,
  36,720 B, `text/html; charset=utf-8`,
  `<title>Server &mdash; Colorlib Website Template</title>` → saved
  `/tmp/server/preview.html`.
- Stylesheet: `https://preview.colorlib.com/theme/server/css/style.css` —
  HTTP 200, 26,987 B → `/tmp/server/main-style.css`.
- Framework stylesheet:
  `https://preview.colorlib.com/theme/server/css/bootstrap.min.css` — HTTP 200,
  36,889 B, a Bootstrap **4.1.3** build whose `:root` declares
  `--primary: #7cbd1e`.
- Icon font: `https://preview.colorlib.com/theme/server/fonts/icomoon/style.css`
  — HTTP 200, 79,820 B (the reference's own glyph set — never copied).
- Screenshot:
  `https://colorlib.com/wp/wp-content/uploads/sites/2/server-free-template.jpg`
  — HTTP 200, 151,368 B, JPEG/JFIF progressive **1200×946**, reviewed visually.

The live preview was reachable, so no fallback was needed. The preview DOM +
stylesheet are authoritative, and **every token below was cross-checked against
the live render** (computed styles and `getBoundingClientRect` at a 1440×900
desktop viewport plus a 375×800 narrow pass). The screenshot covers only the
above-the-fold region (utility bar → dark nav → hero → buttons); everything
below was read from the DOM and CSS.

The source is a Bootstrap 4.1.3 page. Its other CSS/JS (Bootstrap, OwlCarousel,
jQuery + jquery-migrate + jquery-ui, popper, stellar parallax, AOS, magnific
popup, datepicker, countdown, icomoon/flaticon/fl-bigmug icon fonts, Google
Analytics) is reference only — the recreation uses Tailwind utilities,
`lucide-react` and small local hooks, and copies no file.

## Global tokens (from the source stylesheet + live render)

- **Brand lime:** `#7cbd1e` (`--primary`) — filled buttons (hero `Download`,
  nav `Login`, plan `View Details`, band `Register Now`), the 64 px plan-card
  icons (`.text-primary`), the reason-card SVG `stroke` and its hover fill, the
  active carousel dot, dropdown and off-canvas link hovers, and every
  `rgba(124,189,30,…)` tint. 13 occurrences in `style.css` — the most frequent
  colour after `#fff`.
- **Unused lime dark:** `#5f9117` — only `.unit-7.featured-pricing` folded tag
  corners and the pricing-table headers on the source's *other* pages. **Not on
  this home page** → keep it out of the palette.
- **Chrome:** nav strip `#343a40` (Bootstrap `bg-dark`), dropdown links
  `#343a40`, off-canvas links `#212529`, close-glyph hover `#25262a`.
- **Surfaces:** page/cards/top bar/dropdown/off-canvas `#ffffff`; both light
  bands `#f8f9fa` (Bootstrap `bg-light`, verified computed).
- **Footer:** band `#393e46`, copy `rgba(255,255,255,.4)`, links
  `rgba(255,255,255,.7)` → `#fff` hover, headings `#fff`.
- **Text:** body `#4d4d4d`; card headings `#4d4d4d`; reason-card copy
  `#b3b3b3`; plan sub-lines and utility labels `#adb5bd` (`.text-gray-500`);
  wordmark / utility values / plan titles / testimonial names `#000`.
- **Lines:** plan cards `1px solid #dee2e6` (Bootstrap `.border`); reason cards
  `2px solid #e6e6e6` → `transparent` on hover; dropdown sides/bottom
  `1px solid #edf0f5`; lime buttons `1px solid #7cbd1e`; white outline button
  `1px solid #fff`; inactive dot `#cccccc`; `.btn-secondary` `#e6e7e9` is unused
  on this page.
- **Veils / overlays:** both photo bands `rgba(0,0,0,.4)`; off-canvas page veil
  `rgba(0,0,0,.6)`; carousel arrows `rgba(0,0,0,.2)` → `black` on hover.
  (`rgba(0,0,0,.5)` belongs to the generic `.unit-5` block, which this page does
  not use; `rgba(136,183,213,0)` is the dropdown arrow's transparent border
  colour, not a hue.)
- **Shadows (only three):** plan cards
  `0 5px 20px -5px rgba(0,0,0,.2)`; dropdown
  `0 2px 10px -2px rgba(0,0,0,.25)`; off-canvas panel
  `-10px 0 20px -10px rgba(0,0,0,.1)`.
- **Font:** `"Nunito Sans", -apple-system, BlinkMacSystemFont, "Segoe UI",
  Roboto, "Helvetica Neue", Arial, sans-serif` (`body` also lists a
  `"Roboto Mono"` fallback that is immediately overridden — ignore it). The
  reference ships **five `@font-face` faces (200/300/400/700/900)** injected
  from Cloudflare's font CDN in the served `<head>` (no Google Fonts `<link>`);
  500-weight headings are requested and synthesized. The recreation links
  `https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@200;300;400;500;700;900&display=swap`
  so its 500-weight headings are real.
- **Shape:** **0 radius everywhere** — the markup even carries `rounded-0` on
  every button, and cards/bands/dropdowns have none. `50%` appears only on the
  90 px testimonial avatars and the 8 px carousel dots (the stylesheet's `4px`
  belongs to `.post-entry` on the source's blog page).
- **Rhythm:** `.site-section` and `.site-footer` `padding:7em 0` (**112 px**)
  ≥768 px → `3em 0` (**48 px**) below; title blocks `mb-5` (48 px); hero bands
  `min-height:600px; height:calc(40vh)`; container max-width 1140 px at
  ≥1200 px (Bootstrap).

## Section-by-section (measured at 1440×900)

Measured mesh — `.site-navbar-wrap` 0/148 · `.slide-one-item` 148/600 ·
`.site-section.bg-light` 748/713 · rating band 1460/600 · `.site-section`
(Why Choose Us) 2060/858 · `.site-section.block-4.bg-light` 2918/635 ·
`.site-footer` 3553/654 → **page ≈ 4,207 px** (6,904 px at 375 px; the narrow
pass produced no horizontal overflow).

1. **Utility bar** (`.site-navbar-wrap.bg-white` → `.site-navbar-top`, 72 px,
   `font-size:0.8rem`, container `py-2`). Left `col-6 col-md-6 col-lg-2`: an
   `<a class="d-flex align-items-center site-logo">` with an icon-font cube
   glyph in its own tinted 44 px square (`mr-3`) plus the wordmark at
   **`font-size:2rem`** (`line-height:54.4px`), `font-weight:200`, `#000`.
   Right `col-6 col-md-6 col-lg-10`: `ul.unit-4.ml-auto.text-right` (12.8 px)
   listing **three** `li.text-left` blocks, each an `<a>` around
   `d-flex align-items-center block-unit`: an `.icon` div (`line-height:0`;
   glyphs 28 px headset / 20 px envelope / 32 px chat, all `#000`) beside a
   `d-none d-lg-block` column of `span.text-gray-500.text-uppercase`
   (`#adb5bd`) over `span.h6` — **24/7 Support / 1-800-200-3911**,
   **Email / mail@domain.com**, **Live Chat / Chat With Us Now**. Measured block
   ≈178×44 each; the whole strip measured 178 px wide per item at `lg` and the
   label/value column collapses below `lg` (icons at `20px !important` at
   ≤991.98 px).
2. **Nav strip** (`.site-navbar.bg-dark`, 75 px, `#343a40`, container `py-1`).
   A `col-4 col-md-4 col-lg-8` nav holds the mobile toggle
   (`a.site-menu-toggle.js-menu-toggle.text-white` → `span.icon-menu.h3`,
   28 px glyph) and `ul.site-menu.js-clone-nav.d-none.d-lg-block`:
   `li{display:inline-block; padding:10px 5px}`, `a{padding:10px 10px;
   letter-spacing:.05em; color:rgba(255,255,255,.6)}` at **16 px/400** → white
   for `.active` (`Home`) and on hover; `li:last-child` loses its right padding.
   **Home · Domain · Hosting · Blog · Contact**, where `Hosting` is
   `.has-children` with a `::before` chevron (`padding-right:20px`) and a white
   `ul.dropdown.arrow-top` — `position:absolute; top:100%; visibility:hidden;
   opacity:0; margin-top:20px` (→ `0`, visible, `opacity:1` on
   hover/focus/active), `padding:10px 0; background:#fff;
   box-shadow:0 2px 10px -2px rgba(0,0,0,.25);
   border-left/right/bottom:1px solid #edf0f5`, a 10 px white triangle at
   `left:20%` — with rows `min-width:200px`, `a{padding:5px 20px; display:block;
   color:#343a40}` → **`#7cbd1e`** hover; four hosting kinds plus a nested
   `.has-children` `Sub Menu` whose second panel opens at `left:100%; top:0`
   with Menu One / Menu Two / Menu Three. Right `col-8 col-md-8 col-lg-4
   text-right`: `Register` =
   `btn.btn-primary.btn-outline-primary.rounded-0.text-white.py-2.px-4`
   (transparent fill, `1px solid #7cbd1e`, white, **110×42**) and `Login` =
   `btn.btn-primary.btn-primary.rounded-0.py-2.px-4` (`background:#7cbd1e`,
   white, **90×42**). Both are 16 px/400 with `padding:8px 24px` and `0` radius.
3. **Hero slider** (`.slide-one-item.home-slider.owl-carousel`, 600 px, two
   slides). Each slide is `.site-blocks-cover.overlay` with `background-size:
   cover; background-repeat:no-repeat; background-position:top`,
   `min-height:600px; height:calc(40vh)`, an inline
   `background-image:url(images/hero_bg_1.jpg | hero_bg_2.jpg)` (server-room
   rack / blue-lit circuit board), `data-aos="fade"` and
   `data-stellar-background-ratio="0.5"`, and an `.overlay:before` wash of
   **`rgba(0,0,0,.4)`**. Content: centred
   `row.align-items-center.justify-content-center.text-center` → `col-md-10`
   (measured 920 px wide) with `h1` **80 px/300 white** (`line-height:96px`) and
   `p` **24 px white** (`line-height:36px`). Slide 1: `h1.mb-2` "Affordable
   Domains" + `p.mb-5` "from $7/year"; slide 2: `h1.mb-5` "24/7 Customer
   Support" with **no** paragraph. Buttons: `Download` (lime, **173×58**,
   `padding:16px 48px`) and `Get In Touch` (transparent, `1px solid #fff`, white,
   **188×58**). Arrows are `.slide-one-item.home-slider .owl-prev/.owl-next` —
   `position:absolute; top:50%; height:50px; width:50px; border-radius:0;
   background:rgba(0,0,0,.2); color:#fff; font-size:25px;
   transform:translateY(-50%)`, previous at `left:10px !important`, `black` on
   hover, `opacity:.2` when disabled. The hero shows no dots at this width.
4. **Plan row** (`.site-section.bg-light`, 713 px, `#f8f9fa`, `padding:7em 0`).
   Title block `row.justify-content-center.text-center.mb-5` →
   `col-md-6` `h2` **32 px/500 `#4d4d4d`** (`line-height:38.4px`, measured
   540×77) with `data-aos="fade"`. Then `row.hosting` with **three**
   `col-md-6 col-lg-4` columns (`data-aos="fade"` + `data-aos-delay`
   100/200/300), each `.unit-2.text-center.border.py-5.h-100.bg-white`: white,
   `1px solid #dee2e6`, `padding:48px 0`,
   `box-shadow:0 5px 20px -5px rgba(0,0,0,.2)`, measured **350×356** — a
   `span.icon` at **64 px `#7cbd1e`** (`.text-primary`; glyph line box 88 px),
   `h3.h4` **24 px/500 `#000`** (`line-height:28.8px`, `mb-2`), `p.mb-4
   .text-gray-500` **`#adb5bd`** (`mb-4` = 24 px) and a lime
   `a.btn.btn-primary.py-2.px-4.rounded-0` **View Details** (**141×42**,
   `padding:8px 24px`). Plans: **Shared Hosting / Plans start at $3.99/month**,
   **Dedicated Hosting / $6.99/month**, **Premium Hosting / $9.99/month**
   (source glyphs `paper122`, `airplane86`, `hot67`).
5. **Rating band** (third `.site-blocks-cover.overlay`, 600 px,
   `hero_bg_3.jpg`). Same cover geometry and `rgba(0,0,0,.4)` wash, but the row
   is `align-items-center` + **`text-left`** with a `col-md-7`:
   `h1.mb-2` **"Satisfied Clients"** (80 px/300 white), `p.mb-5` **"We are rated
   4.99 / 5.00 (based on 4443 Reviews)"** (24 px white) and a lime
   `Register Now` action (**173×58**).
6. **Reason grid** (`.site-section`, white, 858 px, `padding:7em 0`). Centred
   `h2` **"Why Choose Us"** (32 px/500), then **six** `col-md-6 col-lg-4`
   `.unit-3.h-100.bg-white` cards, measured **350×246**: `padding:30px;
   border:2px solid #e6e6e6; position:relative; transition:.3s all ease` with a
   `:before` fill (`transform:scale(1.07); opacity:0; visibility:hidden;
   background:#7cbd1e`). Each card is a
   `d-flex.align-items-center.mb-3.unit-3-heading` row: a `.unit-3-icon-wrap`
   (**59×68**, `flex:0 0 59px`, `mr-4`) holding an inline **59×68 SVG**
   (`stroke:#7cbd1e; stroke-width:2px`) with a `.unit-3-icon` glyph (**32 px**)
   absolutely centred over it (measured 34×56), then `h2.h5` **20 px/500
   `#4d4d4d`** (`line-height:24px`, `mb-2`) and a `.unit-3-body` paragraph in
   **`#b3b3b3`**. Hover/focus: the fill scales to `1` and fades in, the card
   border becomes `2px solid transparent`, and `h2`, `p`, the glyph and the SVG
   `stroke` all turn **white** (heading/text `z-index:2`). Topics: **High Quality
   Hardware, Top Data Centers, Outstanding Speed, Amazing Uptime, Best Support,
   Client Reviews**.
7. **Testimonials** (`.site-section.block-4.bg-light`, `#f8f9fa`, 635 px,
   `padding:7em 0`). Centred `h2` **"Testimonials"** (32 px/500) in an `mb-5`
   block, then `.nonloop-block-4.owl-carousel` (`data-aos="fade"`, stage
   `padding-bottom:2em`) with **four** `.item.col-md-6.mx-auto` slides (measured
   **525 px**), each `.block-38.text-center`: an `img` at **90 px** with
   `border-radius:50%; margin:0 auto 20px`, `h3.block-38-heading` **18 px/300
   `#000`** (`margin:0`), `p.block-38-subheading` **uppercase `#b3b3b3`**
   (`margin:0 0 20px`) and `.block-38-body` at **1.1rem (17.6 px)** /
   `line-height:29.92px`. Source slides alternate **Elizabeth Graham / Creative
   Director, XYG Company** and **Jennifer Greive / Lead Designer, Mig Company**
   — the same two people **twice**. Chrome: `.owl-nav` at `bottom:-2px` with
   30 px arrows `left/right:50px` (`opacity:.2` → `1`, disabled hidden);
   `.owl-dots` at `bottom:-40px`, **8 px** circles `#ccc` with a **`#7cbd1e`**
   active dot, `margin-right:10px`.
8. **Footer** (`footer.site-footer`, `#393e46`, 654 px, `padding:7em 0`, copy
   `rgba(255,255,255,.4)`; links `rgba(255,255,255,.7)` → `#fff`;
   `ul li{margin-bottom:10px}`; `.footer-heading{font-size:18px; color:#fff}` —
   measured 18 px/500, 192×22). `col-lg-7` → three `col-6 col-md-4 col-lg-4`
   columns (**Company**, **Navigations**, **Quick Menu**) each with an
   `h3.footer-heading.mb-4` over six `#` links — the source repeats **the same
   six labels three times** (About · Services · Servers · Hosting · News ·
   Careers). `col-lg-5` → two `row`s: an `h3` **Europe** then a `col-md-6`
   address (`London - 2398 <br> 10 Japson Street`) beside a `col-md-6`
   `Tel. + (123) 3240-345-9348 <br> Mail. europe@youdomain.com`, and the same
   shape for **USA** (`New York - 2398 <br> 10 Hadson Carl Street`,
   `usa@youdomain.com`). Closing `row.pt-5.mt-5.text-center` → `col-md-12`
   paragraph: `Copyright © <year>` (from `document.write(new
   Date().getFullYear())`) `All Rights Reserved | This template is made with ♥ by
   Colorlib`.
9. **Off-canvas menu** (`.site-mobile-menu`, 300 px, fixed right, white,
   `padding-top:20px; transform:translateX(110%)` → `0` with `.offcanvas-menu`
   on `<body>`, `box-shadow:-10px 0 20px -10px rgba(0,0,0,.1)`,
   `.3s ease-in-out`). Header `padding:0 20px` with a floated
   `.site-mobile-menu-close` (30 px glyph, hover `#25262a`); body `padding:20px;
   overflow-y:scroll; height:calc(100vh - 52px); padding-bottom:150px` holding
   `ul.site-nav-wrap` — top level `a{padding:10px 20px; font-size:20px;
   color:#212529}` → `#7cbd1e` hover / `.active` lime; 16 px at
   `padding-left:40px` and `60px`; each parent has a 36×36 round
   `.arrow-collapse` at `right:0; top:10px` (hover `#f8f9fa`) whose glyph rotates
   180° when collapsed. Opening it shows `.site-wrap:before` — `rgba(0,0,0,.6)`,
   `position:absolute; z-index:2000`, `.3s ease-in-out`; `.offcanvas-menu
   .site-wrap` becomes `position:absolute; height:100%; width:100%; z-index:2;
   overflow:hidden`.

## Deltas that must be reproduced deliberately

- **Square corners are the identity.** Every button, card, band, input and
  dropdown is `0` radius; the only round things are the 90 px avatars and the
  8 px dots.
- **Two different greys do two different jobs:** `#b3b3b3` for in-card copy
  (reason cards, testimonial roles) and `#adb5bd` for utility labels and plan
  sub-lines — keep both tokens.
- **Two different card treatments:** plan cards are `1px #dee2e6` + a real
  `0 5px 20px -5px` shadow; reason cards are `2px #e6e6e6` with **no** shadow
  whose entire surface floods lime on hover.
- **`Register` vs `Login`:** the outlined look comes from
  `.btn-outline-primary` (transparent fill, lime border) stacked on
  `.btn-primary`; the base `.btn-primary` in this build is a **filled** lime
  button. Keep both treatments distinct — do not unify them.
- **Both `h1`s are 80 px/300**, but the base rule is `3rem`/900 until the
  ≥768 px media query overrides it — the recreation must step 80 → 48 px at
  768 px, not fall back to a heavy weight.
- **The bands are always ≥600 px** (`min-height:600px; height:calc(40vh)`), and
  the photo is `background-position:top` with stellar parallax
  (`data-stellar-background-ratio="0.5"`, seven elements) — at 1440 px the
  computed position had already drifted (`50% -74.8px`) when scrolled.
- **AOS reveals:** 20 elements carry `data-aos="fade"` (plan cards additionally
  100/200/300 ms delays) and start invisible. The recreation must keep content in
  the DOM at all times and render everything immediately under
  `prefers-reduced-motion: reduce`.
- **Content duplication is real:** three identical footer link lists and the
  same two testimonial people twice. The recreation keeps the *shape* (three
  columns, four slides) with distinct labels/people instead of copying the
  duplication.
- **Narrow pass (375×800):** utility-bar labels hidden (icons only, 20 px),
  desktop menu hidden and the hamburger (28 px) shown, hero `h1` 48 px, section
  padding 48 px, bands still 600 px, one-column grids, page 6,904 px and
  `scrollWidth == 375` (no horizontal overflow).

## Placeholders and substitutions

- Hero slide 1 → `https://picsum.photos/seed/rackline-hero-1/1920/1080`; slide 2
  → `.../rackline-hero-2/1920/1080`; rating band →
  `.../rackline-band/1920/1080` — each under its own `rgba(0,0,0,.4)` overlay,
  with a solid dark fill beneath so white type stays legible if an image fails.
- Testimonial avatars → `https://picsum.photos/seed/rackline-avatar-<n>/180/180`.
- All glyphs (cube mark, headset, envelope, chat, plan icons, reason icons,
  chevrons, close, arrows, ok/heart) → `lucide-react`; the 59×68 reason artwork is
  the app's own inline SVG stroked `#7cbd1e`.
- Copy: the app's own headlines, plan prices, office addresses and testimonial
  quotes — same *kinds* of content, never the source's strings verbatim.
- Footer attribution → `https://www.componentdock.com/` ("Component Dock")
  replacing the Colorlib credit, keeping a computed current year.

## Name check

`rackline` (single lowercase word, kebab-safe): a repo-wide `grep -ril rackline`
returned **zero** hits; no `apps/rackline` folder, no
`openspec/specs/template-rackline`, no `docs/templates/rackline` and no
TEMPLATES.md slug collides (verified 2026-10-11). It is unrelated to the source
name "Server", which is never reused in app code.
