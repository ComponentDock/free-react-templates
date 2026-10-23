# Template: Skyport (Web Hosting)

## Purpose

Skyport is a full multi-section **cloud-hosting marketing site** in the
free-react-templates monorepo. It is an original React recreation of the ColorLib
free **"Hosting"** template (source slug `hosting` — the hosting family's
**azure-on-blue-photo** page: a dark `#222222` utility top bar (phone + e-mail
left, a flat azure `#3898f8` "Purchase Hosting" button right) above a white
fixed header, then a full-viewport cover-photo hero in which a left-aligned
white uppercase headline ("We Make Cloud Computing More Easier") sits beside a
blue cloud/shield illustration, a five-mark grey logo strip, a single bordered
testimonial row, a three-card square-cornered pricing triple whose cards turn
solid `#3898f8` with an offset shadow on hover, a 6/6 image/text split, a
six-card feature grid, a dark photo band with a 50% black overlay, a
counter + Q/A band, a solid `#3898f8` call-to-action band, a two-column contact
form and a dark `#222222` three-widget footer).

It is built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The recreation matches section structure, order,
copy kind and design tokens 1:1 but copies no asset (no images, no fonts, no CSS
files, no icon paths, no brand marks) and never reuses the source name or copy
verbatim.

- **Source:** https://colorlib.com/wp/template/hosting/
  (live preview `<title>Hosting</title>`; verified 2026-10-11)
- **Preview:** `https://preview.colorlib.com/theme/hosting/` returns
  **HTTP 200**, `text/html; charset=utf-8`, **29,143 B** (verified 2026-10-11).
  Its DOM was fetched and parsed and its main stylesheet
  `https://preview.colorlib.com/theme/hosting/css/main.css`
  (HTTP 200, **37,279 B**) plus its script `js/main.js`
  (HTTP 200, **10,629 B**) were tokenized. Live preview is the primary
  reference; no fallback was needed.
- **Screenshot:**
  https://colorlib.com/wp/wp-content/uploads/sites/2/hosting-free-hosting-website-template.jpg
  (HTTP 200, 47,744 B, served as **AVIF** → decoded to PNG with `ffmpeg`,
  1200×935, reviewed visually 2026-10-11; it carries the usual browser-chrome
  mock at the top and covers only the above-the-fold region).
- **New name:** `skyport` (apps/skyport, `@free-react-templates/skyport`) — the
  source demo name "Hosting", its logo artwork, its hero/illustration/logo/photo
  assets and its copy are never reused. `skyport` collides with no `apps/`
  folder, no `openspec/specs/` folder, no `docs/templates/` folder and no other
  TEMPLATES.md slug.
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design reference (replication findings)

- **Original:** ColorLib "Hosting" (source:
  https://colorlib.com/wp/template/hosting/). Listed in TEMPLATES.md
  `## Web Hosting (20)` at line 3060 (`- [ ] **Hosting**`); the slug `hosting`
  appears exactly once (no duplicate `- [ ]` line) and in no spec on main before
  this one.
- **Preview URL:** `https://preview.colorlib.com/theme/hosting/` → **HTTP 200**
  (29,143 B, `text/html; charset=utf-8`). Main stylesheet `css/main.css` →
  HTTP 200, 37,279 B; page script `js/main.js` → HTTP 200, 10,629 B. Reference
  artifacts (research date 2026-10-11): `/tmp/hosting/preview.html`,
  `/tmp/hosting/main.css`, `/tmp/hosting/snippet.js` (the downloaded
  `js/main.js`). The preview HTML/CSS are authoritative for section structure,
  copy kind and tokens; every token below was cross-checked against the **live
  render** in a browser (computed styles + geometry at 780 px and 1440 px
  viewports).
- **Screenshot (1200×935, AVIF decoded):** a browser-chrome mock of the top of
  the page. A thin **dark `#222222` utility bar** runs edge to edge: a phone
  number and an e-mail address in white at the left, a flat **azure `#3898f8`
  rectangular "PURCHASE HOSTING" button** (uppercase, 12 px) at the right.
  Below it a **white header** holds a bold black monogram logo at the left and
  an uppercase grey-black menu (HOME · PLAN · ABOUT · SERVICE · FAQ · CONTACT ·
  PAGES ▾) at the right. The hero is a **saturated azure-blue photographic band**
  with a **white uppercase headline in three lines** at the left, a short white
  paragraph underneath and a **white pill button "EXPLORE OUR FEATURES"**
  (26 px radius, dark text); at the right of the hero sits a line-art
  illustration — a blue-outlined cloud with stacked white rack units, red/yellow
  status dots and a **yellow shield** — and the band closes at the bottom with a
  **white cloud-scallop edge**. Under it the page turns white: a row of **five
  monochrome grey partner marks** (CREATIVE, PREMIUM LABELS, premium labels,
  PREMIUM LABELS, PREMIUM), then a **single testimonial block** — "MARK WIENS /
  Windows Inc." at the left, a grey paragraph at the right, separated by a thin
  hairline. The screenshot ends there; everything below was read from the
  preview DOM.
- **Section order (measured from the live DOM, top to bottom):**
  1. `header#header` — `position:fixed; z-index:997; background:#fff;
     padding:0 0 20px` containing (a) `.header-top` — the `#222222` utility bar
     (`font-size:12px; padding:8px`) with a phone `tel:` link and a `mailto:`
     link at the left and a flat azure `.top-head-btn` (`#3898f8`,
     `padding:9px 26px`, uppercase, 12 px, **no** border-radius) at the right,
     and (b) `.container.main-menu` (`padding-top:20px`) — the logo beside
     `.nav-menu` (Home · Plan · About · Service · Faq · Contact · **Pages ▾**,
     with a `Pages` submenu of Generic / Elements). `scrollTop > 100` adds
     `.header-scrolled`: `background:rgba(255,255,255,.9)` plus
     `box-shadow:-21.213px 21.213px 30px rgba(158,158,158,.3)`.
  2. `section.banner-area.relative#home` — the hero: a `cover` / `center`
     background-image band whose row `.fullscreen` is **sized to the viewport**,
     holding a **left-aligned** `.banner-content` (uppercase `h1`, white `p`,
     white pill `a.primary-btn.header-btn`). Collapses to a 700 px band at
     ≤767.98 px.
  3. `section.brand-area.pt-40` — a `.logo-wrap` (`padding:60px 65px`) row of
     **five** monochrome partner marks.
  4. `section.details-area.pt-50` — one `.details-section` (`border-bottom:1px
     solid #eee; padding-bottom:100px`) testimonial row: `col-lg-2` with an
     uppercase `h5` name + role line, `col-lg-9` with the quote paragraph
     (`.detials-right{border-left:1px solid #eee; padding-left:30px}`).
  5. `section.price-area.section-gap#plan` — centred title block
     (`h1.mb-10` + `p`), then **three** `.single-price` cards
     (`background:#f9f9ff`, square corners): `.top-sec` (plan name + one-line
     audience at the left, price `h1` at the right) over `.bottom-sec` (blurb)
     and `.end-sec` (5-item list + `button.primary-btn.price-btn`), all sections
     `padding:40px 40px 22px` with `1px solid #eeeeee` hairlines; hover turns
     `.bottom-sec`/`.end-sec` solid `#3898f8` with
     `box-shadow:0 20px 20px 0 rgba(157,157,157,.5)` and inverts the button to
     white-on-`#222`.
  6. `section.about-area#about` — `container-fluid` 6/6 split: `.about-left`
     (heading, paragraph, azure pill `a.primary-btn.header-btn` "See Details")
     beside `.about-right` full-bleed image.
  7. `section.service-area.section-gap#service` — centred title block, then
     **six** `.single-service` cards (`background:#f9f9ff; padding:30px`) in a
     3-column grid (`col-lg-4 col-md-6`), each an inline icon + `h4` over a `p`;
     hover turns the card `#3898f8` with
     `box-shadow:-14.142px 14.142px 20px 0 rgba(157,157,157,.5)` and whitens the
     text and icon.
  8. `section.info-area.relative.section-gap` — a cover-image band
     (`background:url(...) right`) carrying a `.overlay.overlay-bg`
     (`rgba(0,0,0,.5)`) and white copy in a left `col-lg-5`: heading,
     paragraph, white pill button "Get Customer Support".
  9. `section.faq-area.section-gap#faq` — white band: centred title block, then
     `counter-left col-lg-3` with **four** animated facts (number `h2` 48 px /
     700 / `#3898f8` over a `#222` label) beside `faq-content col-lg-9` with
     **three** `.single-faq` Q/A pairs (`h2` 18 px/600 over a 16 px/300 `p`).
  10. `section.call-action-area.section-gap` — a solid `#3898f8` centred band:
      white `h1` "Looking for a Custom Solution?", white `p`, white pill button
      "Request Free Consultation".
  11. `section.contact-area.section-gap#contact` — centred title block, then
      `form.form-area.mt-60` in two `col-lg-6` columns: three square-cornered
      `common-input` fields (name / e-mail / subject) at the left, a
      `common-textarea` (180 px) plus a `button.primary-btn` "Send Message"
      with a trailing arrow glyph at the right.
  12. `footer.footer-area.section-gap` — `background:#222222;
      padding-top:100px` with three `.single-footer-widget` columns —
      **Top Products** (4 links), **Newsletter** (line + e-mail input in a
      white 20 px-radius pill + `button.nw-btn.primary-btn` "Subscribe") and
      **Instragram Feed** (a `.instafeed` of **eight** thumbnails, 4 per row) —
      then `.footer-bottom` (`padding-top:80px`) with a copyright line
      (`.footer-text a`/`i` in `#3898f8`) and `.footer-social` icon chips
      (`background:#111111; width:45px; padding:12px` → hover `#3898f8`, glyph
      `#cccccc`).
- **Live-render deltas found (must be reproduced deliberately, not by accident):**
  - `.banner-area .overlay{background:#222; opacity:.9}` **exists in `main.css`
    but the home-page markup contains no `.overlay` element** — verified live
    (`document.querySelector('.banner-area .overlay') === null`) and visually:
    the hero shows the raw saturated-blue cover image, not a 90 %-dark field.
    The recreation renders the hero as a bright azure band and must NOT add a
    dark overlay.
  - The hero row height is written **inline by the page's script**
    (`<div class="row fullscreen …" style="height: 1000px;">` at a 1000 px
    viewport — i.e. `window` height); CSS only pins
    `.banner-area .fullscreen{height:700px !important}` inside
    `@media (max-width: 767.98px)`. The recreation expresses the same intent with
    viewport-height utilities (full viewport tall, 700 px at ≤767.98 px) rather
    than a measured pixel height.
  - **Three distinct button appearances** come from class stacking:
    `.primary-btn` (azure `#3898f8`, 25 px radius, 42 px line-height, uppercase,
    500) is overridden by `.header-btn` (white background, `#222` text) on the
    hero / info / call-action buttons, and that in turn overridden by
    `.about-left .header-btn` (azure background, white text) on "See Details";
    `.single-price .price-btn` overrides to `#222` with `border-radius:0`. The
    contact form's "Send Message" is a plain azure `.primary-btn`.
  - `#header` declares `background:#fff !important` while `.header-scrolled`
    declares `rgba(255,255,255,.9)`; the `!important` wins, so the scrolled
    header stays opaque white and only gains the offset shadow.
  - The counter figures (5962 / 2394 / 1439 / 933) are animated by
    `js/main.js` (`$('.counter').counterUp({delay:10, time:1000})`), not by CSS.
- **Interactive behaviour to reproduce (from `js/main.js`):** fixed-header
  scroll state at 100 px; smooth in-page anchor scrolling with a ~108 px header
  offset that also moves a `menu-active` state onto the clicked item; a
  `superfish`-style hover dropdown for `Pages`; a JS-built mobile nav
  (`#mobile-nav` + `#mobile-nav-toggle`) toggled through
  `body.mobile-nav-active`; `nice-select` styling for the theme's `<select>`
  fields (none on the home page); `magnific-popup`/`owl.carousel` initialisation
  for the theme's lightbox and carousels (none of those elements exist on the
  home page — do not invent carousels).
- **Brand colour census (from `main.css`, by frequency):** `#fff` (62),
  `#3898f8` (38), `#f9f9ff` (29), `#222222` (13), `#777777` (12), `#4cd3e3` (7),
  `#f4e700` (6), `#f44a40` (6), `#f1f1f1` (6), `#38a4ff` (6), `#eee` (4),
  `#f09359`, `#e66686`, `#73fbaf`, `#6382e6`, `#a367e7` (2 each), `#f09359` …
  The teal/yellow/red/orange/pink/green/indigo/violet values are the theme's
  generic icon/utility palette (used on other template pages and sub-pages);
  the **home page itself uses only azure `#3898f8`, the `#222222`/`#111111`
  darks, the `#f9f9ff`/`#fff` surfaces and the `#777777`/`#222222` text tones** —
  the recreation keeps those secondary hues out of the palette.
- **Sibling comparison (why this slug is its own design):** the Web Hosting
  family already recreated in this repo uses these brand palettes —
  serverly (Bhost) navy `#416ecc`/`#487fee` on `#21263a`, hostcraft (Cohost)
  violet `#6927ff`, nexnode (Hosthub) indigo `#6247ea` with orange accents,
  stratus (Cloud83) `#25ae88`/`#7fabda`, stratos (Cloudnest) indigo `#6366f1`,
  cumulus (Cloudtemplate) `#21bf73`/`#3f52e3`, upnode (Hami) `#1c66de`,
  hostera (Lorahost) `#1e1859`, sitewise (Hostza) `#2e004b`, skyward (Ignite)
  `#207dff`, upsurge (Ithost) magenta `#eb2b63` on `#200545`, soar (Raptor)
  `#2ebdc4`, netrise (Webhost) `#fb83b5`/`#9a51ff`, presto (Fastes)
  coral `#FA8F77` on violet `#73469F`/`#3B2774`. **None uses azure `#3898f8`**,
  and none combines a `#222222` utility top bar with a flat azure top-bar button,
  a left-aligned caption inside a viewport-tall cover-photo hero whose defined
  overlay is unused, square-cornered `#f9f9ff` pricing/service cards that flip
  to solid brand blue with an offset drop shadow, and a `#222222` footer with an
  8-thumbnail Instagram strip. Do not borrow a sibling's palette or geometry.

## Design tokens

| Token                  | Value                                                                                                                  | Where                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| brand (azure)          | `#3898f8`                                                                                                               | filled buttons, top-bar button, call-action band, counters, link hover, social hover |
| dark surface           | `#222222` (utility bar, footer, price button) · `#111111` (footer social chips)                                          | dark chrome + footer                                     |
| soft surface           | `#f9f9ff` (cards, `nice-select`) · `#f1f1f1` (element tints) · `#edf3fd` (tint)                                            | card + element backgrounds                               |
| page surface           | `#fff` (page, header, FAQ band, newsletter input)                                                                        | surfaces                                                 |
| text                   | `#222222` (headings, nav links, price button) · `#777777` (body copy, placeholders) · `#333` / `#797979` (alternate darks) · `#cccccc` (footer social glyph) | typography |
| text on dark/brand     | `#fff` (hero copy, call-action copy, footer text, footer links) · `rgba(0,0,0,.5)` (info-band overlay, the only overlay used) | dark and brand bands                                 |
| borders / rules        | `#eee` / `#eeeeee` (section + card hairlines, testimonial divider) · `#cccccc` (light border)                            | dividers                                                 |
| font family            | `Poppins, sans-serif` (body, all headings, buttons, nav)                                                                 | whole page                                               |
| font weights           | `300` (body copy, footer input, muted) · `400` (nav links, `banner-content h4`) · `500` (buttons) · `600` (headings default) · `700` (`banner-content h1`, counters, logo) | typography |
| base type              | `body` 14 px / weight 300 / `line-height:1.625em` (`22.75px`) / `#777777`; `h1`–`h6` `#222222`, weight 600, `line-height:1.2em !important` (`1.5em` in the overrides block); `h1` 36 px, `h4` 18 px; `.banner-content h1` 48 px/700/uppercase/`line-height:1em` → 45 px ≤1199.98 → 36 px ≤991.98 (line breaks hidden) → 40 px ≤414; `.about-left h1` 36 px (25 px ≤991.98); `.single-faq h2` 18 px/600 + `p` 16 px/300/`line-height:24px`; counters `h2` 48 px/700 `#3898f8` + `p` 14 px/300 `#222` | typography |
| primary button         | `.primary-btn` — `background:#3898f8; color:#fff; line-height:42px; padding-left:30px; padding-right:60px; border-radius:25px; border:none; font-weight:500; text-transform:uppercase`; trailing glyph `span` absolutely at `right:30px` (→`20px` on hover)                                 | contact "Send Message", footer "Subscribe" |
| white pill button      | `.header-btn` — `background:#fff; color:#222; padding:0 30px; border:1px solid transparent; border-radius:25px`; hover `background:transparent; border-color:#fff; color:#fff`                                                             | hero "Explore Our Features", info band "Get Customer Support", call-action "Request Free Consultation" |
| azure pill button      | `.about-left .header-btn` — `background:#3898f8; color:#fff; padding:0 50px`; hover `background:transparent; border:1px solid #3898f8; color:#3898f8`                                                                                       | about split "See Details"                                |
| square price button    | `.single-price .price-btn` — `background:#222; color:#fff; border-radius:0; box-shadow:none`; on card hover `background:#fff; color:#222` (glyph `#222`)                                                                                    | each pricing card                                        |
| top-bar button         | `.top-head-btn` — `background:#3898f8; color:#fff; padding:9px 26px; font-size:12px; text-transform:uppercase; border-radius:0`                                                                                                             | utility bar                                              |
| header                 | `#header{position:fixed; left:0; top:0; right:0; z-index:997; background:#fff; padding:0 0 20px; transition:all .5s}`; `.header-scrolled{background:rgba(255,255,255,.9); box-shadow:-21.213px 21.213px 30px rgba(158,158,158,.3)}` (the `!important` white wins, so only the shadow is visible) | fixed header |
| nav                    | `.nav-menu a{color:#222; font-size:12px; font-weight:400; text-transform:uppercase; padding:0 8px}`; `li` `margin-left:10px`; dropdown `ul{background:#fff; padding:10px; margin-top:22px; box-shadow:0 0 30px rgba(127,137,161,.25)}`, `li a{font-size:12px; text-transform:none; color:#333; padding:10px}`, hover `#3898f8` | navigation |
| hero                   | `.banner-area{background:url(…) center; background-size:cover}`; row sized to the viewport (source sets it inline via script), `700px !important` at ≤767.98 px; `.banner-content{text-align:left}`, `h1` white uppercase, `p` white; the `.overlay` rule exists but is unused | hero                                                     |
| logo strip             | `.brand-area{padding-top:40px}` + `.logo-wrap{padding:60px 65px}`; five grayscale marks                                                                                     | logo strip                                               |
| testimonial row        | `.details-area{padding-top:50px}`; `.details-section{border-bottom:1px solid #eee; padding-bottom:100px}`; left `h5` uppercase + role `p`; `.detials-right{border-left:1px solid #eee; padding-left:30px}`                                  | testimonial row                                          |
| price card             | `.single-price{background:#f9f9ff; margin-bottom:30px}`; `.top-sec`/`.bottom-sec{border-bottom:1px solid #eeeeee; padding:40px 40px 22px}`; `.end-sec{padding:40px 40px 22px}`, `li{margin-bottom:20px}`; hover `.bottom-sec`/`.end-sec{background:#3898f8; color:#fff; box-shadow:0 20px 20px 0 rgba(157,157,157,.5)}` | pricing triple |
| service card           | `.single-service{background:#f9f9ff; padding:30px; margin-bottom:30px; transition:.3s}`; `h4{margin:20px 0}` with icon `span.lnr{margin-right:15px}`; hover `background:#3898f8; box-shadow:-14.142px 14.142px 20px 0 rgba(157,157,157,.5)` and white `h4`/`p`/icon | feature grid |
| about split            | `.about-area` `container-fluid` 6/6; `.about-left{padding-left:20%; padding-right:5%}` (5 %/5 % at ≤1199.98, `padding-top:50px; padding-bottom:50px` at ≤991.98); `h1{color:#222}` 36 px (25 px ≤991.98); `p{padding:20px 0}`; `.about-right img{width:100%}` | about split |
| info band              | `.info-area{background:url(…) right; background-size:cover; color:#fff}` + `.overlay-bg{background:rgba(0,0,0,.5)}`; copy in a left `col-lg-5`                                                            | dark photo band                                          |
| FAQ / counters         | `.faq-area{background:#fff}`; `.counter-left{text-align:right; }` (centred ≤991.98) with `.single-facts{margin-bottom:26px}`, `h2{font-size:48px; font-weight:700; color:#3898f8}`, `p{font-size:14px; font-weight:300; color:#222}`; `.single-faq{margin-bottom:30px}`, `h2{font-size:18px; font-weight:600; margin:15px 0 25px}`, `p{font-size:16px; font-weight:300; line-height:24px}` | counter + Q/A band |
| call-action band       | `.call-action-area{background-color:#3898f8; text-align:center}` over `col-lg-9` white copy                                                                            | brand CTA band                                           |
| contact form           | `form.form-area.mt-60`; `.form-area input{padding:15px}`, `input, textarea{border-radius:0; font-size:12px}`, `textarea{height:180px}`; submit `button.primary-btn` + trailing arrow glyph                    | contact section                                          |
| footer                 | `.footer-area{padding-top:100px; background-color:#222222}`; `.single-footer-widget{color:#fff; margin-bottom:30px}` with `h6` headings; `.footer-nav li{margin-top:8px}`, `a{color:#fff}` hover `#3898f8`; newsletter `input{line-height:38px; border:none; background:#fff; border-radius:20px; color:#777; padding-left:20px; width:100%}` (placeholder `#777`, weight 300) + `.nw-btn{margin-top:20px}`; `.instafeed{margin:-5px}`, `li{width:25%; overflow:hidden}`, `li img{margin:5px}`; `.footer-bottom{padding-top:80px}`; `.footer-social a{background:#111111; color:#fff; padding:12px; width:45px; margin:5px; text-align:center}` hover `#3898f8`, `i{color:#cccccc}`; `.footer-text a, .footer-text i{color:#3898f8}` | footer |
| spacing rhythm         | `.section-gap{padding:120px 0}` (every section) · `.pt-40` · `.pt-50` · `.pb-60` · `.pb-40` · `.pb-30` · `.pt-20`/`.pb-20` · `.mt-60` · `.mt-20` · `.mb-10`/`.mb-20`                                    | section spacing                                          |
| transitions            | `all .3s ease 0s` (cards, links, price sections) · `all .5s` (header)                                                                                                   | interaction                                              |
| Google Fonts map       | `Poppins:wght@300;400;500;600;700` via `<link>` in `index.html` (`https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap` → HTTP 200, verified 2026-10-11); icons from `lucide-react` (never the source's Linearicons/FontAwesome CSS) | `index.html`                                             |
| attribution            | footer line links `https://www.componentdock.com/` ("Component Dock") replacing the source's Colorlib credit                                                                       | ADDED vs the reference                                   |

## Requirements

### Feature: Header (dark utility bar + white fixed nav)

A fixed white header made of a dark `#222222` utility strip over the logo/menu
row, with an azure flat button for the purchase action and a scroll shadow.

#### Scenario: Fixed header renders the utility bar above the nav row

- **Given** the page loads
- **When** the header renders
- **Then** it is `position:fixed; left:0; top:0; right:0; z-index:997` with a
  white background and `padding:0 0 20px`, so page content starts below the
  hero-managed offset (the hero band is not pushed down by an in-flow header)
- **And** the top strip is `#222222`, `font-size:12px; padding:8px`, holding a
  phone `tel:` link and a mailto link in white at the left (`li` inline with
  `margin-right:30px`) and a **flat** azure `#3898f8` uppercase button
  (`padding:9px 26px`, `font-size:12px`, no radius) for the purchase action at
  the right
- **And** the phone number, the e-mail address and the button label are the
  app's own (never the source's `+880 1234 654 953` / `support@colorlib.com` /
  "Purchase Hosting"), and the strip's links are real, focusable controls

#### Scenario: Nav row renders logo, menu and Pages dropdown

- **Given** the header renders
- **When** the nav row is inspected
- **Then** the app's own wordmark sits in `#logo` at the left (a text/own-SVG
  mark, never the source's `img/logo.png`) and `.nav-menu` sits at the right
  (`.main-menu{padding-top:20px}`), with the source's link set: Home, Plan,
  About, Service, Faq, Contact and **Pages** — each lowercase label rendered
  `12px/400/uppercase` in `#222` with `padding:0 8px` and `li{margin-left:10px}`
- **And** `Pages` opens a white dropdown (`padding:10px; margin-top:22px;
  box-shadow:0 0 30px rgba(127,137,161,.25)`; items `12px`, `#333`,
  `padding:10px`, `text-transform:none`) with **two** entries, and item hover
  turns the label `#3898f8`
- **And** the dropdown is keyboard operable (`aria-expanded`, `Escape` closes,
  focus returns to the trigger) and the current section's link is visually
  distinguishable (`menu-active`)

#### Scenario: Header gains a shadow after scrolling

- **Given** the page is at the top
- **When** the user scrolls past roughly 100 px
- **Then** the header keeps its opaque white background (the source's
  `background:#fff !important` beats the semi-transparent scrolled rule) and
  gains `box-shadow:-21.213px 21.213px 30px rgba(158,158,158,.3)` over a
  `0.5s` transition
- **And** the shadow is removed again at the top of the page

### Feature: Hero (viewport-tall azure photo band with a left-aligned caption)

#### Scenario: Hero band fills the viewport and shows the caption at the left

- **Given** the page loads
- **When** the hero renders
- **Then** it is a full-width band whose background is the app's own azure
  cloud image or gradient (`background-size:cover; background-position:center` —
  never the source's `img/header-bg.jpg`) and whose inner row is **viewport
  tall** through viewport-height utilities, dropping to a **700 px** band at
  ≤767.98 px (mirroring `.banner-area .fullscreen{height:700px !important}`)
- **And** **no dark overlay** is applied even though the source stylesheet
  defines `.banner-area .overlay{background:#222; opacity:.9}` — the source
  markup never uses it and the live render shows the raw bright-blue image
- **And** the caption is **left-aligned** inside the container
  (`.banner-content`, `col-lg-8`): an uppercase `h1` (48 px/700/white/`line-height:1em`,
  ~3 lines) over a short white `p`, both the app's own paraphrased copy
- **And** at ≤1199.98 px the `h1` steps to 45 px, at ≤991.98 px to 36 px with
  its line breaks dropped, and at ≤414 px to 40 px, without horizontal overflow

#### Scenario: Hero CTA is a white pill button

- **Given** the hero renders
- **When** its call to action is inspected
- **Then** it is a **white pill**: `background:#fff; color:#222;
  border-radius:25px; border:1px solid transparent; padding:0 30px;
  line-height:42px; font-weight:500; text-transform:uppercase`
- **And** hover swaps it to a transparent pill with a `1px solid #fff` border
  and white text (matching `.header-btn`), over a `0.3s` transition
- **And** the button is a real link/button with a visible `focus-visible` ring

#### Scenario: The hero artwork is the app's own

- **Given** the hero renders
- **When** its illustration area is inspected
- **Then** the app supplies its own cloud/rack/shield-style artwork (SVG or a
  decorative image of its own) at the right of the caption — never the source's
  blue cloud line-art with the yellow shield
- **And** the artwork is decorative (`aria-hidden`) so it does not pollute the
  accessibility tree

### Feature: Logo strip (five partner marks)

#### Scenario: A grey logo row renders under the hero

- **Given** the page renders
- **When** `section.brand-area` is inspected
- **Then** it carries `padding-top:40px` and its `.logo-wrap` row carries
  `padding:60px 65px`, holding exactly **five** monochrome grey partner marks,
  evenly distributed and vertically centred
- **And** the marks are the app's own text/SVG placeholders in a muted grey —
  never the source's `img/l1.png`…`l5.png`

### Feature: Testimonial row (single bordered block)

#### Scenario: One quote row renders with a hairline divider

- **Given** the page renders
- **When** `section.details-area` is inspected
- **Then** it carries `padding-top:50px` and its `.details-section` has
  `border-bottom:1px solid #eee; padding-bottom:100px`
- **And** the row is a `col-lg-2` attribution block (uppercase `h5` name +
  role `p`) beside a `col-lg-9` quote paragraph separated by
  `border-left:1px solid #eee; padding-left:30px`
- **And** exactly **one** row renders (the source has a single testimonial and
  no carousel here), with the app's own paraphrased name/company/quote
- **And** at ≤1199.98 px the right column keeps `padding:0 15px` and the
  divider still separates the two columns without horizontal overflow

### Feature: Pricing triple (square cards that flip to brand blue)

#### Scenario: Three plan cards render with price, list and dark CTA

- **Given** the page renders
- **When** `section.price-area#plan` is inspected
- **Then** a centred title block (`h1` 36 px/600 `#222` with a `mb-10` gap over
  a `#777` `p`) sits above a row of exactly **three** cards, three per row at
  `lg` and stacking below, each `.single-price` with `background:#f9f9ff`,
  `margin-bottom:30px` and **square corners**
- **And** each card's `.top-sec` (`padding:40px 40px 22px`,
  `border-bottom:1px solid #eeeeee`) puts an `h4` plan name over a one-line
  audience `p` at the left with the price `h1` at the right
  (`d-flex justify-content-between`), followed by a `.bottom-sec` blurb
  (`padding:40px 40px 22px`, same hairline) and an `.end-sec`
  (`padding:40px 40px 22px`) holding a **five**-item feature list
  (`li{margin-bottom:20px}`) and a `button.price-btn` "Purchase Plan" with a
  trailing arrow glyph
- **And** the plan names, price figures and list items are the app's own
  paraphrases of the source's kinds (a first-tier plan for individuals, a
  small-company plan, a large-company plan; storage/transfer/styles/support/
  backup items) and the currency is stated once, consistently

#### Scenario: Card hover flips the lower half to solid brand blue

- **Given** a pricing card is rendered
- **When** the card is hovered or its button is focused
- **Then** `.bottom-sec` and `.end-sec` become `background:#3898f8` with white
  text and `box-shadow:0 20px 20px 0 rgba(157,157,157,.5)` over a `0.3s`
  transition, and the card's `.price-btn` inverts to `background:#fff;
  color:#222` (its glyph too)
- **And** the `#222` base button state has `border-radius:0` and no shadow, and
  `focus-visible` exposes the same promotion for keyboard users

### Feature: About split (6/6 image and caption)

#### Scenario: Caption and full-bleed image render side by side

- **Given** the page renders
- **When** `section.about-area#about` is inspected
- **Then** the section uses a **fluid** container and a 6/6 split with the copy
  column right of the container's left edge: `.about-left` carries
  `padding-left:20%; padding-right:5%` (both `5%` at ≤1199.98 px, plus
  `padding-top/bottom:50px` at ≤991.98 px) and `.about-right` holds a
  full-width image with no gutters
- **And** the caption holds an `h1` (36 px/600 `#222`; 25 px at ≤991.98 px), a
  `p` (`padding:20px 0`) and an **azure pill** `a.primary-btn.header-btn`
  "See Details" (`background:#3898f8; color:#fff; padding:0 50px;
  border-radius:25px`) whose hover turns it transparent with a `1px solid
  #3898f8` border and `#3898f8` text
- **And** the image is the app's own placeholder
  (`https://picsum.photos/seed/skyport-about/1000/700`) and at ≤991.98 px the
  split stacks with the image below the caption and no horizontal overflow

### Feature: Feature grid (six service cards)

#### Scenario: Section title and six cards render in a three-column grid

- **Given** the page renders
- **When** `section.service-area#service` is inspected
- **Then** a centred header block (`h1` + `#777` `p`, `padding-bottom:40px`)
  sits above exactly **six** `.single-service` cards laid out
  `col-lg-4 col-md-6` (3 per row at `lg`, 2 at `md`)
- **And** each card is `background:#f9f9ff; padding:30px; margin-bottom:30px`
  with an inline icon glyph (`lucide-react`, standing in for the source's
  Linearicons) `margin-right:15px` beside its `h4` title (`margin:20px 0`), over
  a `#777` `p`
- **And** the six topics paraphrase the source's kinds (expert staff,
  professional service, strong support, technical skill, recommendations,
  positive reviews) without reusing source strings

#### Scenario: Card hover turns the surface brand blue with an offset shadow

- **Given** a service card is rendered
- **When** it is hovered or focused
- **Then** the card becomes `background:#3898f8` with white `h4`, `p` and icon
  and `box-shadow:-14.142px 14.142px 20px 0 rgba(157,157,157,.5)` over a `0.3s`
  transition
- **And** `focus-within` exposes the same state, and the icon is `aria-hidden`
  so the card's accessible name comes from its heading

### Feature: Dark photo band (50 % overlay with a white CTA)

#### Scenario: Copy renders over a dark overlay band

- **Given** the page renders
- **When** `section.info-area` is inspected
- **Then** it is a cover-image band (`background-position:right`) using the
  app's own placeholder (`https://picsum.photos/seed/skyport-band/1920/900`),
  carrying a full-bleed overlay at `rgba(0,0,0,.5)`
- **And** white copy sits in a left `col-lg-5`: an `h1` (2–3 lines via line
  breaks), a `p` (`padding:20px 0`) and a **white pill** button
  (`primary-btn` + `header-btn`) "Get Customer Support"
- **And** it carries the standard `120px` section rhythm and the same `700 px`
  / stacked behaviour as the hero at mobile widths

### Feature: Counter + FAQ band

#### Scenario: Four counters animate beside three Q/A items

- **Given** the page renders
- **When** `section.faq-area#faq` is inspected
- **Then** the band is white (`#fff`) with a centred title block, and a
  `counter-left col-lg-3` column holds exactly **four** facts — each
  `.single-facts` (`margin-bottom:26px`) with a number `h2`
  (48 px/700/`#3898f8`) over a `p` (14 px/300/`#222`) — aligned right at `lg`
  and centred at ≤991.98 px
- **And** the numbers count up on first view over ~1 s (the source's
  `counterUp({delay:10, time:1000})`), respect `prefers-reduced-motion` by
  rendering the final value immediately, and expose the final value as text at
  all times (no layout shift, real text in the DOM)
- **And** beside them a `faq-content col-lg-9` column holds exactly **three**
  `.single-faq` items (`margin-bottom:30px`) of an `h2` question
  (18 px/600, `margin:15px 0 25px`) over a `p` answer
  (16 px/300, `line-height:24px`), paraphrasing the source's three questions
- **And** the counter figures are the app's own (never the source's exact
  5962 / 2394 / 1439 / 933 set copied verbatim as marketing claims — pick the
  app's own plausible set)

### Feature: Call-to-action band (solid brand blue)

#### Scenario: A centred brand band pairs a heading with a white pill CTA

- **Given** the page renders
- **When** `section.call-action-area` is inspected
- **Then** the band is solid `#3898f8`, centred, with `120px` vertical rhythm,
  holding a white `h1`, a white `p` (`padding:20px 0`) and a white pill
  button (`primary-btn` + `header-btn`) labelled with the app's own
  consultation-style CTA
- **And** the button's hover behaves like the hero's white pill (transparent
  fill with a white border), and it is keyboard reachable with a focus ring

### Feature: Contact form (two-column, square fields)

#### Scenario: Labelled square fields render in two columns

- **Given** the page renders
- **When** `section.contact-area#contact` is inspected
- **Then** a centred title block (`h1` + `#777` `p`, `padding-bottom:30px`)
  sits above a form with `margin-top:60px` split into two `col-lg-6` columns:
  three text inputs (name / e-mail / subject) at the left and a `textarea`
  (`height:180px`) at the right
- **And** every field is a square-cornered control (`border-radius:0`,
  `padding:15px`, `font-size:12px`) with its own visible label and a
  `#777`-tone placeholder, and the e-mail field is `type="email"`
- **And** the submit control is a plain azure `.primary-btn` "Send Message"
  (25 px pill, uppercase, 500 weight) with a trailing arrow glyph (`lucide-react`)
- **And** submitting validates locally: empty/invalid fields show per-field
  messages, a valid submit shows a success confirmation in a polite live region,
  the form never navigates away, and the source's `mail.php` action and
  Mailchimp endpoints are not reused

### Feature: Footer (dark three-widget column set)

#### Scenario: Link column, newsletter and Instagram strip render on #222222

- **Given** the page renders
- **When** `footer.footer-area` is inspected
- **Then** the footer is `background:#222222; padding-top:100px` with three
  columns: **Top Products** (a `h6` heading over four `.footer-nav` links —
  `color:#fff`, `margin-top:8px`, hover `#3898f8`), **Newsletter** (a heading, a
  "no spam" style line, a white pill e-mail input — `line-height:38px;
  border:none; background:#fff; border-radius:20px; color:#777;
  padding-left:20px; width:100%`, placeholder weight 300 — and an azure
  `button.nw-btn.primary-btn` "Subscribe" with `margin-top:20px`), and an
  Instagram-style feed of **eight** square thumbnails in a `.instafeed`
  (`margin:-5px`, each `li` `width:25%` with `img{margin:5px}`, i.e. 4 per row)
- **And** the thumbnails are the app's own picsum placeholders
  (`https://picsum.photos/seed/skyport-gram-<n>/300/300`), each link has an
  accessible name, and the source's `img/i1.jpg`…`i8.jpg` are never used
- **And** the newsletter form is labelled, validates the e-mail locally, shows
  an inline error for invalid input and confirms success in a live region
  without navigating away

#### Scenario: Bottom line holds social chips and the Component Dock credit

- **Given** the footer renders
- **When** `.footer-bottom` (`padding-top:80px`) is inspected
- **Then** it carries a copyright line whose links are `#3898f8`
  (`.footer-text a`) and a row of square-ish social chips
  (`background:#111111; color:#fff; padding:12px; width:45px; margin:5px;
  text-align:center`, glyphs `#cccccc`) that turn `#3898f8` on hover, each with
  an explicit accessible label
- **And** exactly one link points to `https://www.componentdock.com/` branded
  "Component Dock", and no `colorlib` / "Hosting" source-brand / Colorlib credit
  string appears anywhere in `apps/skyport`

### Feature: Responsive behaviour

#### Scenario: Grids, split and hero reflow on smaller screens

- **Given** the page renders at `lg` (≤1199.98 px), `md` (≤991.98 px) and
  `sm` (≤767.98 px)
- **When** the layout is measured
- **Then** the hero `h1` steps 48 → 45 → 36 (line breaks dropped) → 40 px, the
  about split's copy column padding becomes `5%/5%` and the split stacks, the
  service grid goes 3 → 2 → 1, the pricing triple stacks, the counter column
  centres, the contact form's columns stack, the footer's three widgets stack
  and the nav collapses into an accessible toggle
- **And** the hero band drops to 700 px at ≤767.98 px and the page has no
  horizontal scroll at 320 px

### Feature: Page chrome

#### Scenario: Fixed header offset keeps anchor targets visible

- **Given** the page renders with a fixed header
- **When** any in-page anchor is followed (from the nav or the footer)
- **Then** the target section lands below the header (the source offsets by
  ~108 px) instead of being hidden behind it
- **And** `scroll-margin-top` (or an equivalent offset) is applied to every
  anchor target

### Feature: Component Dock attribution

#### Scenario: Footer links Component Dock exactly once

- **Given** the page renders
- **When** the footer is inspected
- **Then** exactly one clear link points to `https://www.componentdock.com/`
  branded "Component Dock"
- **And** no `colorlib` / "Hosting" source name / source slug appears anywhere
  in `apps/skyport` (comments included — record the palette as design notes,
  not provenance)

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-skyport`
- [ ] `scripts/verify-app.sh skyport` passes: typecheck + lint + knip + fallow +
      vitest at 100 % coverage + build (~2–3 min)
- [ ] Every scenario above has at least one matching test (scenario-style `it`
      blocks), with 100 % lines/functions/branches/statements on the app
- [ ] Screenshot match against `hosting-free-hosting-website-template.jpg`
      (1200×935, AVIF): `#222222` utility bar with white phone/e-mail and a flat
      azure `#3898f8` purchase button; white header with a black monogram mark
      and an uppercase menu; full-viewport saturated-azure cover-photo hero with
      a **left-aligned** white uppercase headline, a white paragraph and a
      **white pill** button, decorative cloud/stacked-rack/shield artwork at
      its right and a white cloud-scallop bottom edge; a five-mark grey logo
      strip; a hairline-separated single testimonial row
- [ ] Section order at desktop matches the reference: header (utility bar +
      nav) → hero → logo strip (5 marks `padding:60px 65px`) → testimonial row
      → pricing triple (square `#f9f9ff` cards) → about split (6/6, fluid
      container) → service grid (6 cards) → dark info band (50 % overlay) →
      counter + FAQ band (4 facts, 3 Q/A) → `#3898f8` call-action band →
      contact form (2 columns) → dark `#222222` footer
- [ ] Tokens present in `@theme` / components: brand `#3898f8`, darks
      `#222222` (bar, footer, price button) and `#111111` (social chips),
      surfaces `#fff` / `#f9f9ff` / `#f1f1f1`, text `#222222` / `#777777` /
      `#333` / `#cccccc`, hairlines `#eee`/`#eeeeee`, overlay
      `rgba(0,0,0,.5)`, Poppins 300/400/500/600/700, button shapes `25px` pill
      (azure / white / azure-pill variants) + `0` radius price button + flat
      top-bar button, card geometry `padding:30px` (services) and
      `padding:40px 40px 22px` (price sections), hovers
      `0 20px 20px 0 rgba(157,157,157,.5)` and
      `-14.142px 14.142px 20px 0 rgba(157,157,157,.5)`, header shadow
      `-21.213px 21.213px 30px rgba(158,158,158,.3)`, rhythm `120px 0`
- [ ] Hero: own azure artwork, **no dark overlay** (documented source delta —
      the `.overlay` rule is unused on the home page), viewport-tall row with a
      700 px fallback at ≤767.98 px, left-aligned caption, `h1` step sequence
      48/45/36/40 px with breaks dropped at ≤991.98 px, white pill CTA with the
      transparent+white-border hover
- [ ] Header: fixed white header, `#222222` utility strip with working `tel:`
      and `mailto:` links and a flat azure purchase button, uppercase 12 px nav
      with the 7-item set and a keyboard-operable two-item `Pages` dropdown,
      scroll state that keeps the opaque white background and only adds
      `-21.213px 21.213px 30px rgba(158,158,158,.3)`
- [ ] Logo strip: exactly five own muted-grey marks with `padding:60px 65px`,
      no source logo images
- [ ] Testimonial row: single block, `border-bottom:1px solid #eee` with
      `padding-bottom:100px`, left attribution column + right quote separated by
      `border-left:1px solid #eee; padding-left:30px`
- [ ] Pricing: three square-cornered `#f9f9ff` cards, `top-sec`/`bottom-sec`
      hairlines, five-item lists, `#222` square `Purchase Plan` button, hover
      flipping the lower half to `#3898f8` with
      `0 20px 20px 0 rgba(157,157,157,.5)` and inverting the button
- [ ] About split: fluid 6/6 with `padding-left:20%/padding-right:5%`, azure
      `See Details` pill (`padding:0 50px`) with the transparent/azure-border
      hover, own picsum image, stacking below `md`
- [ ] Service grid: six `#f9f9ff` `padding:30px` cards, inline lucide icon +
      `h4` (`margin:20px 0`), hover `#3898f8` with
      `-14.142px 14.142px 20px 0 rgba(157,157,157,.5)` and white text/icons
- [ ] Info band: own cover image at `background-position:right`, full-bleed
      `rgba(0,0,0,.5)` overlay, white `col-lg-5` copy, white pill
      "Get Customer Support" button
- [ ] Counter + FAQ band: white background, four counting facts (48 px/700
      `#3898f8`) with reduced-motion fallback and final values always in the
      DOM, three Q/A items (18 px/600 question, 16 px/300 answer)
- [ ] Call-action band: solid `#3898f8`, centred white copy and a white pill
      consultation CTA with the transparent hover
- [ ] Contact form: two `col-lg-6` columns, square-cornered `padding:15px`
      12 px fields with visible labels, 180 px textarea, azure pill
      "Send Message" + arrow glyph, local validation with inline errors and a
      success live region, no external form endpoint
- [ ] Footer: `#222222` with `padding-top:100px`, `Top Products` (4 white links,
      hover `#3898f8`), newsletter (white `20px`-radius pill input + azure
      `Subscribe`), an 8-thumbnail 4-per-row Instagram strip (own picsum
      placeholders, labelled links), `.footer-bottom` with the `#3898f8`-linked
      copyright line and `#111111` social chips (hover `#3898f8`, `#cccccc`
      glyphs)
- [ ] Accessibility: semantic landmarks, real labels on every field, `aria-label`
      on icon-only controls and social/Instagram links, `aria-expanded` on the
      nav dropdown and mobile toggle, focus-visible rings on all interactive
      elements, decorative artwork hidden from the tree
- [ ] Anchors: every in-page target uses a header offset (`scroll-margin-top`),
      verified by following a nav link and confirming the heading clears the
      fixed header
- [x] `public/CNAME` = `skyport.free.componentdock.com`; `"homepage"` matches;
      `npm install` run at the repo root so the lockfile registers
      `@free-react-templates/skyport`
- [x] Zero `colorlib` / "Hosting" / `hosting` provenance references anywhere in
      `apps/skyport` (comments included — record the palette as design notes)
- [ ] No copied assets: no `img/logo.png`, `header-bg.jpg`, `c1.jpg`,
      `info-bg.jpg`, `l1–l5.png`, `i1–i8.png`, no Linearicons/FontAwesome CSS,
      no source CSS files; photos come from picsum and icons from `lucide-react`
- [ ] PR description includes: source template (ColorLib Hosting), preview URL
      (`https://preview.colorlib.com/theme/hosting/` → HTTP 200, stylesheet
      `css/main.css` 37,279 B, script `js/main.js` 10,629 B), the design tokens
      used (brand `#3898f8`, darks `#222222`/`#111111`, surfaces
      `#fff`/`#f9f9ff`, text `#222222`/`#777777`, hairlines `#eee`, overlay
      `rgba(0,0,0,.5)`, Poppins, `25px` pills + square price button), the
      measured section order and geometry (viewport-tall hero with a 700 px
      mobile fallback, `padding:60px 65px` logo strip, `padding:40px 40px 22px`
      price sections, `120px 0` rhythm, 100 px scroll threshold) and what differs
      (new name, own logo/artwork/images/icons/copy, no dark hero overlay as in
      the source, lucide icons instead of Linearicons, added keyboard/aria
      states and the Component Dock attribution)

<!-- live-palette-unverified:start -->
**TOKEN-UNVERIFIED (2026-10-23)** — the demo `https://preview.colorlib.com/theme/hosting/` paints no counterpart within 12 RGB units of these claims (the re-value threshold). Each line names the nearest painted colour and its RGB distance: the claim is a screenshot sample, **not** a measured value — build from the sheet, not this list:
- `#6927ff` — nearest `#a367e7` (d=90)
- `#6247ea` — nearest `#6382e6` (d=59)
<!-- live-palette-unverified:end -->
