# Skyvault — design notes (section-by-section fidelity)

Recreation of ColorLib **"Hostspace"** (source slug `hostspace`,
https://colorlib.com/wp/template/hostspace/) under the NEW name **skyvault**
(`apps/skyvault`, `@free-react-templates/skyvault`).

Reference used (research date 2026-10-11):

- Live preview DOM: `https://preview.colorlib.com/theme/hostspace/` — HTTP 200,
  24,890 B, `text/html; charset=utf-8`, `<title>HostSpace</title>` → saved
  `/tmp/hostspace/preview.html`.
- Stylesheet: `https://preview.colorlib.com/theme/hostspace/styles/main_styles.css`
  — HTTP 200, 22,550 B → `/tmp/hostspace/main_styles.css`.
- Responsive stylesheet:
  `https://preview.colorlib.com/theme/hostspace/styles/responsive.css` —
  HTTP 200, 5,731 B → `/tmp/hostspace/responsive.css`.
- Page script: `https://preview.colorlib.com/theme/hostspace/js/custom.js` —
  HTTP 200, 3,269 B → `/tmp/hostspace/custom.js`.
- Screenshot:
  `https://colorlib.com/wp/wp-content/uploads/sites/2/hostspace-free-template.jpg`
  — HTTP 200, 45,375 B, served as **AVIF** → decoded to PNG with
  `ffmpeg -i shot.avif shot.png` (1200×946) and reviewed visually.

The live preview was reachable, so no fallback was needed. The preview DOM +
stylesheet are authoritative; **every token below was cross-checked against the
live render** (computed styles and `getBoundingClientRect` at a 1440 px desktop
viewport, plus a 780 px narrow pass). The screenshot covers only the
above-the-fold region (transparent header → gradient hero → search bar);
everything below was read from the DOM and CSS.

The source is a Bootstrap 4.1.2 page. Its other CSS/JS (Bootstrap, OwlCarousel,
FontAwesome, Greensock TweenMax/TimelineMax, ScrollMagic, pixelcog parallax,
progressbar, easing) is reference only — the recreation uses Tailwind utilities,
`lucide-react` and small local hooks, and copies no file.

## Global tokens (from the source stylesheet)

- **Brand mint:** `#1befc5` — search action, middle intro badge + its halo,
  service-icon hover fill, pricing action, CTA action, CTA price, footer column
  titles, all link hovers, `::selection` (`rgba(27,239,197,.75)`).
- **Violet ramp:** `#200e35` (scrolled header bar, hero gradient top, off-canvas
  panel) → `#4d1d85` (hero gradient bottom, pricing header bars) → `#715691`
  (intro pill, CTA band, contact fields, package price, copyright) → `#7836c6`
  (TLD chip, pricing-action hover) → `#26064c` (footer band, CTA-action hover)
  → `#35214d` (label colour on mint actions).
- **Neutral surfaces:** `#ffffff` (page, cards, search field), `#f6f8fb`
  (why-choose band), `#f4f7f8` (floating service chip), `#d5dfe3` (intro badge,
  pricing rules + container border).
- **Text:** `#1f1d22` headings/dark labels, `#656566` `p` copy, `#a5a5a5` body
  colour, `#778990` service-icon SVG fill; `#ffffff` on the dark/violet bands and
  `rgba(255,255,255,.75)` for the off-canvas links.
- **Font:** `Raleway, sans-serif` everywhere (source `@import`s
  `Raleway:300,400,500,600,700,800,900`; this page only uses 400/500/600/700).
  Body 14 px/400 `#a5a5a5`; `p` 15 px/400 `line-height:1.8666` `#656566`;
  headings `#1f1d22`/700/`line-height:1.2`, h1 48 · h2 36 · h3 24 · h4 18 px.
- **Shape language:** `12px` radius on every control, card, chip and the pricing
  container; `50%` circles for the intro badges (143 px, halo 188 px);
  `7px` on the hamburger hover outline; **no box-shadows anywhere** — depth comes
  from the violet ramp and 2 px rules.
- **Transitions:** 200 ms (controls/links/pricing title) and 400 ms (header +
  header content + off-canvas panel/overlay).
- **Unused on this page (leave out):** `#ffa07f` (inline paragraph-link
  underline), `#ff6347` (pressed link), `#db5246` (`.form-control` colour) —
  those belong to the source's other pages.

## Live-render deltas (must be reproduced deliberately)

1. **Scroll-reveal animation.** `js/custom.js` wraps every `.magic_fade_in`
   element in a ScrollMagic scene (`triggerHook:'onEnter'`, `offset:130`,
   `reverse:false`) with `TweenMax.from(ele, 0.5, {autoAlpha:0,
   ease:Power1.easeIn})`. Verified live before scrolling: computed
   `opacity:0; visibility:hidden` on the intro row, service cards, pricing items,
   choice list and footer. Reproduce as a ~0.5 s fade-in that does not reverse,
   with the content always in the DOM and everything visible immediately under
   `prefers-reduced-motion`.
2. **The service band's photo is a runtime parallax.** The band's
   `.parallax_background.parallax-window` element carries
   `data-parallax="scroll" data-image-src="images/services.jpg"
   data-speed="0.8"`; pixelcog's plugin auto-initialises on document ready
   (`$('[data-parallax="scroll"]').parallax()`). Note that
   `getComputedStyle(...).backgroundImage` still read `none` while the live page
   clearly rendered the violet photo — trust the screenshot for this band.
3. **The photo's violet tint is baked into the asset,** not applied by CSS
   (`services.jpg` mean colour `#5e3a8c`; the CSS has no overlay rule for that
   section). Because assets are never copied, the recreation paints its own
   band: a neutral picsum photo under a violet overlay/gradient from the ramp.
4. **The band's white heading depends on the band.** `.services .section_title
   h2{color:#FFFFFF}` sits on a white page body — if the band fill is dropped the
   heading disappears. Keep a solid ramp-coloured fill under the heading so it
   survives an image failure.
5. **The hero is a fixed 821 px band** (`75vh` at ≤575 px) with its content
   absolutely placed at `top:31.9%` — not a viewport-height flex hero.
6. **The clouds never restart.** `cloud_anim 60s linear infinite` with negative
   delays (`-39s/-6s/-45s/-15s`), so they are mid-flight at load; `cloud_4`
   (353 px) is layered *behind* the skyline (`z-index:2`).
7. **The TLD dropdown is script-driven** (`.active` toggle + label copy) and the
   form's `action="#"` posts nowhere. Keep it local, keyboard operable and
   a11y-exposed (listbox/options or a labelled `<select>`), with validation and a
   polite success region.
8. **`.pricing_item:nth-child(odd)`** only matters in the ≤991 px 2×2 layout
   (the odd column keeps the 2 px right rule); the ≤575 px single-column layout
   has no rules.

## Section-by-section fidelity notes

### 1. Header (fixed, transparent)

- `position:fixed; top:0; left:0; width:100vw; background:transparent;
  z-index:100`; `.header_content` 124 px tall, flex row, vertically centred.
- Left: wordmark 24 px/600 white with a mint `span` half (own name — never
  "HostSpace"); centre: `nav.main_nav` centred by auto margins, five links
  16 px/600 white, `li:not(:last-child){margin-right:48px}` (40 px ≤1199 px),
  active + hover mint; right: `Login` / `Register` (16 px/600 white) split by a
  `/` pseudo-element with 4 px margins.
- Hamburger: `display:none` above 991 px, 20 px bars glyph with 5 px padding,
  `border-radius:7px`, hover `1px solid rgba(255,255,255,.15)`.
- Scroll state (JS threshold `scrollTop > 91`): `.header.scrolled` →
  `background:#200e35; padding-top:6px` and `.header_content{height:80px}`,
  over 400 ms.
- `.section_title h2{line-height:0.75}` is a theme-wide override (measured 27 px
  line box on a 36 px heading) — keep the tight heading box in every section.

### 2. Off-canvas menu (≤991 px)

- `.menu_overlay`: fixed full-viewport `rgba(255,255,255,.55)`, `z-index:101`,
  hidden → visible.
- `.menu`: fixed `right:-350px; width:350px; height:100vh;
  background:#200e35; z-index:102; padding:50px 30px 0` → `right:0` when active.
- Close control: 18×18, `transform:rotate(45deg)`, `top:41px; left:28px`, two
  2 px white bars (the second rotated 90° with `translateX(-2px)`), hover mint.
- Panel contents: right-aligned auth pair, then `.menu_nav` (`margin-top:50px`)
  with the same five links at 24 px/500 `rgba(255,255,255,.75)`, hover mint,
  3 px gaps.
- All three triggers (hamburger, overlay, close) flip the `active` class in the
  source; the recreation should add `Escape`, focus containment and focus return.

### 3. Hero (`.home`)

- Band height **821 px** (`75vh` at ≤575 px).
- Layers, bottom-up: `.home_background` gradient `to bottom, #200e35, #4d1d85`
  (z-1) → `.background_image.background_city` (`images/city.png`, 1920×821,
  cover/centre, z-3; a violet `#4d1d85`-filled skyline with light-violet outlines
  and mint/white window-dot grids, buildings bottom-aligned) → four `.cloud`
  sprites (138×57; `cloud.png` ×3 + `cloud_full.png` ×1) at `top:147/204/332/
  353px`, z-4 except `cloud_4` (z-2) → `.home_container` (z-5).
- Clouds: `left:-138px` → `calc(100vw + 138px)` over 60 s linear infinite with
  negative delays `-39s/-6s/-45s/-15s`.
- Content: `.home_container{position:absolute; left:0; top:31.9%; width:100%}` →
  centred `.home_title` 60 px/600 white (`line-height:1.2`; 48 px ≤767 px,
  36 px ≤575 px) and `.home_text` (`max-width:750px; font-size:14px;
  line-height:2.14; margin-top:9px`), both white.
- Search bar: `row > col-lg-10 offset-lg-1 >
  .domain_search_form_container{margin-top:69px}` → flex form; field wrapper
  `width:calc(100% - 196px); margin-right:30px`; `input.domain_search_input`
  60 px white, `border-radius:12px 0 0 12px`, `padding-left:30px`, 24 px/500
  `#1f1d22`, placeholder "yourdomain"; `.domain_search_dropdown` absolute right,
  141×60 `#7836c6`, `border-radius:0 12px 12px 0`, `padding-left:19px`, white
  chevron + selected label (24 px/500 white, `margin-left:28px`) + a white `ul`
  of `.io`/`.com`/`.net` (24 px/500 `#1f1d22`, hover mint); `button` 166×60
  mint `#1befc5`, `border-radius:12px`, 24 px/600 `#1f1d22`, magnifier + label,
  hover white.
- Responsive: controls 50 px at ≤991 px, 40 px at ≤575 px; the button drops to
  `margin-top:18px` at ≤767 px with the field wrapper full width. The source's
  `images/search.png` magnifier becomes a `lucide-react` icon.

### 4. How-to row (`.intro`)

- White, `padding:96px 0 97px`; centred `h2` (36 px/700, `line-height:0.75`);
  `.intro_row{margin-top:98px}`; `.intro_dots` ornament `top:-137px`,
  `background-size:contain`, hidden ≤991 px (own SVG/CSS dotted arc).
- Three `col-lg-4` items: 143 px circle badge `#d5dfe3` with an 188 px
  `::before` halo at `rgba(213,223,227,.25)`; **`:nth-child(3)` is mint
  `#1befc5` with a `rgba(27,239,197,.25)` halo**; 56 px icon; content
  `padding-top:66px`; title 24 px/700 `#1f1d22`; text `margin-top:27px`.
- Steps: "Buy your Domain", "Get your Hosting", "Set your Website" (paraphrase).
- CTA: `.intro_button` 257×63 `border-radius:12px` `background:#715691`
  `margin-top:86px`, hover mint, label 16 px/700 white, `line-height:63px`
  (source text "Start from $9.90/month").
- ≤991 px: dots hidden, items get `margin-bottom:80px`. ≤575 px: badges 100 px
  (halo 133 px), icons 40 px, content 58 px, text gap 22 px, button 227×53 with a
  14 px label.

### 5. Service band (`.services`)

- `padding:96px 0 127px` over a violet photo; white centred `h2`; keep a ramp
  fill under the heading (delta 4).
- `.services_row{margin-top:95px}`; three `col-lg-4` cards: white,
  `border-radius:12px`, `padding:58px 30px 66px`, `border:2px solid transparent`
  → hover `#1befc5`; 75 px icon (SVG fill `#778990` → mint on hover);
  `.service_title{margin-top:39px}`; `.service_text{margin-top:19px}`.
- Floating chip: `position:absolute; bottom:-32px; left:50%;
  transform:translateX(-50%); width:157px; height:63px; background:#f4f7f8;
  border-radius:12px`, label 16 px/600 `#656566` `line-height:63px`; hover mint
  with a `#1f1d22` label. Cards need enough bottom margin/space so the
  protruding chip never collides with the next row (`.service_col:not(:last-child)
  {margin-bottom:95px}` at ≤991 px).
- Topics: "Cloud Backup", "Data Migration", "VPS Hosting" (paraphrase).

### 6. Pricing table (`.pricing`)

- White, `padding:94px 0 98px`, **no section title**;
  `.pricing_container{border-radius:12px; border:2px solid #d5dfe3;
  overflow:hidden}` with four flex items `width:25%` and
  `border-right:2px solid #d5dfe3` (none on the last).
- `.pricing_title`: 129 px tall, `background:#4d1d85`, 30 px/700 white,
  `line-height:129px`, hover mint.
- `.pricing_content{padding:50px 0 37px}`; `.package_price` 36 px/700 `#715691`
  with `.package_price span` 14 px/500 `#1f1d22`
  `transform:translate(-5px,12px)`; `.pricing_list{margin-top:89px}` with a
  5-row `ul` (26 px gaps) — `.pack_ok` rows use an ok glyph + `#1f1d22` 600 label,
  the rest a cross glyph + 16 px/500 `#656566` label (`margin-left:10px`).
- `.pricing_button` 132×53 `#1befc5` `border-radius:12px` `margin-top:75px`,
  hover `#7836c6`; label 16 px/700 `#35214d` `line-height:53px`, white on hover.
- Packs (source): Starter `$9.90` (3 ok/2 x), Basic `$19.90` (3/2), Premium
  `$39.90` (4/1), Pro `$59.90` (5/0) — recreate with the app's own tier names,
  prices and rows of the same kinds.
- ≤991 px: `width:50%`, all right rules removed except `nth-child(odd)`
  (2×2, right rule down the middle). ≤575 px: `width:100%` and no rules.

### 7. Why-choose split (`.choice`)

- Band `#f6f8fb`, `row-lg-eq-height` 6/6. Left column: `.choice_image`
  `position:absolute; bottom:0; left:25px` (no width — the image overflows at its
  natural size, 397×556 in the source; a cut-out of a smiling presenter),
  `display:none` at ≤991 px.
- Right column: `.choice_content{padding:94px 0 91px}` → left-aligned `h2`
  ("Why Choose us?"), `.choice_text{margin-top:51px}` with
  `p{font-weight:500}`, `.choice_list{margin-top:52px}` → flex `ul` with
  `justify-content:space-between` (measured 540 px wide) holding four centred
  items: 64 px icon + `.choice_title` 18 px/500 `#1f1d22` `margin-top:20px`.
- Titles (source): "Marketing", "Stats", "Servers", "Quality" — paraphrase.
  ≤575 px: icons 48 px, titles 15 px.

### 8. CTA strip (`.cta`)

- Band `#715691`; `.cta_content{height:135px; padding-left:5px}` spreading three
  parts (`justify-content-between` at ≥lg).
- `.cta_title` 36 px/700 white (30 px ≤1199 px, 24 px ≤575 px);
  `.cta_price` 48 px/700 mint `transform:translateY(-8px)` with two 16 px spans
  ("from" / "/month", 5 px gap; 36 px ≤1199 px, 24 px with 14 px spans ≤575 px);
  `.cta_button` 148×63 `#1befc5` `border-radius:12px` `translateY(4px)`, hover
  `#26064c`, label 16 px/700 `#35214d` white on hover.
- ≤991 px: stacked 300 px column (price and button `margin-top:11px`); 258 px at
  ≤575 px with 53 px buttons and 14 px labels.

### 9. Footer (`.footer`)

- `background:#26064c; padding:95px 0`; 6/6 split.
- Left: `.footer_logo` 47 px/600 white with a mint `span` (36 px ≤575 px);
  `.copyright` 11 px/400 `#715691` `margin-top:17px` (replace the Colorlib credit
  with the Component Dock line); `.footer_text{margin-top:33px}` with white `p`;
  `.contact_container{margin-top:38px}` → form with two `col-md-6` fields + a
  textarea; `.contact_input{height:49px; background:#715691; border:none;
  border-radius:12px; padding-left:29px; color:#fff}`, 12 px/400 white
  placeholders, rows 21 px apart, `.contact_textarea{height:142px;
  padding-top:15px}`; `.contact_button` 108×52 mint `border-radius:12px`
  16 px/700 `#35214d` `margin-top:23px`.
- Right: `.footer_links{padding-top:13px}` → four `col-sm-6` columns with
  `.footer_list_title` 20 px/700 mint and `ul.footer_list{margin-top:36px}`
  (14 px gaps, links 15 px/400 white → mint). Source sets: Hosting Options (6),
  Domains (5), Resellers (4), Support (3). First two columns
  `margin-bottom:45px` at ≥lg.
- ≤991 px: halves stack with `margin-bottom:95px`; ≤575 px: every column but the
  last gets `margin-bottom:60px`.

## Asset replacement map (never copy the source files)

| Source asset                | Recreation                                                                 |
| --------------------------- | -------------------------------------------------------------------------- |
| `images/city.png` (skyline) | own inline SVG line-art skyline (violet fills, light outlines, window dots) |
| `images/cloud.png`, `cloud_full.png` | own SVG cloud shapes (four, two variants)                         |
| `images/services.jpg`       | `https://picsum.photos/seed/skyvault-band/1920/1080` + violet overlay       |
| `images/choice.png`         | `https://picsum.photos/seed/skyvault-choice/800/1100`                       |
| `images/dots.png`           | own SVG dotted-arc ornament                                                 |
| `images/search.png`         | `lucide-react` search icon                                                  |
| `images/ok.png`, `x.png`    | `lucide-react` check / x icons                                              |
| `images/icon_1–10.svg`      | `lucide-react` icons                                                        |
| `font-awesome-4.7.0` CSS    | `lucide-react` (menu/chevron/heart glyphs)                                  |
| source wordmark/"HostSpace" | own name `Skyvault` with a mint second half                                 |

## Responsive breakpoints to implement (from `responsive.css`)

- **≤1199 px** — nav gap 48 → 40 px; CTA title 36 → 30 px, price 48 → 36 px.
- **≤991 px** — nav + auth links hidden, hamburger shown; search controls 60 →
  50 px with 20 px type; dots ornament hidden; intro items +80 px; service
  columns +95 px; pricing 2×2 (`nth-child(odd)` keeps the right rule); choice
  photo hidden; CTA content 300 px column; footer halves 95 px apart.
- **≤767 px** — hero title 60 → 48 px; search field full width with the action
  stacked 18 px below.
- **≤575 px** — `h2` 36 → 30 px, `p` 15 → 13 px, hero band `75vh`, hero title
  36 px, search controls 40 px / 16 px type, intro badges 100 px (halo 133 px) /
  icons 40 px / button 227×53, pricing single column with no rules, price 30 px,
  choice icons 48 px / titles 15 px, CTA title 24 px / 258 px content / 24 px
  price / 53 px buttons, footer logo 36 px with 60 px column gaps.

## Open questions for the implementer

- Keep the hero at the measured **821 px** band (with `75vh` ≤575 px) rather than
  a viewport-height hero — that is what the reference does and the screenshot
  shows.
- The four drifting clouds are pure decoration; the cheapest faithful build is
  one small `<Cloud>` SVG component with a `style`-driven `top`/`animation-delay`
  and a CSS `@keyframes` that translates from `-138px` to the viewport width.
  Honour `prefers-reduced-motion` by freezing them.
- The floating "Read More" chip must hang out of the card (`bottom:-32px`):
  give the grid enough vertical rhythm (the source relies on 95 px stacking gaps)
  and avoid `overflow:hidden` on the card or its wrapper.
- Decide the reveal implementation (IntersectionObserver + Tailwind classes is
  enough) so tests can assert a visible end state and the reduced-motion path.
