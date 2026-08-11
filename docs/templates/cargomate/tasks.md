# Cargomate (ColorLib Lagoon) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cargomate`.

## Source mapping

- **ColorLib item:** "Lagoon" (TEMPLATES.md — appears 3×: lines 432, 1071,
  2960; all three rows point to the same source, one prep covers all; verified
  with `grep -c 'wp/template/lagoon/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/lagoon/
- **Preview URL:** https://preview.colorlib.com/theme/lagoon/ — **HTTP 200,
  live** (confirmed 2026-08-11, ~37.5 KB HTML). Do not redo this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/lagoon/css/style.css
  (~135 KB) + css/responsive.css (~7.7 KB). Imports bootstrap.css,
  font-awesome.min.css, linericon, owl.carousel, nice-select, animate,
  jquery-ui. Fonts: `@import` Google Fonts **Roboto Condensed 400/700** at the
  top of style.css. Site is jQuery + bootstrap + owl.carousel +
  counterup + waypoints — NOT Tailwind.

## Reference research (done — do not redo)

### Screenshot (`lagoon-free-template.jpg`, 1200×946; verified via browser vision)

Thin dark grey top strip (social icons left, search box center, phone +
"EMERGENCY@LOGISTICS.COM" right); white header with red square "L" logo mark +
"Lagoon Logistics" wordmark, uppercase nav (HOME, ABOUT, SERVICES, PAGES,
BLOG, CONTACT); full-width hero photo of a shipping port (cranes + shipping
containers) under a heavy red tint; floating split box center-left — left dark
navy panel "SOLID SUPER SERVICE", right white panel with placeholder text +
dark "EXPLORE MORE" button with right-pointing arrow; below, white section
with truck/container icon + "Shipment Tracking", phone icon + "Have a
Question?", and "ABOUT OUR COMPANY" block with big headline "WE'RE CAREFULLY
DELIVERING YOUR…" (cut off); dark footer band at bottom. Red/navy/white
logistics palette. NOTE: the top strip in the screenshot shows a search box,
but the DOM has only social icons left + phone/email right — the DOM is the
reference (no search box).

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Top strip** `div.top_menu.d-lg-block.d-none` — `background: #262533;
height: 40px`; hidden <992px (`d-none`). Left `ul.left_side`: 4 × `a`
   white 12px uppercase social icons (fa-facebook-f, fa-twitter, fa-dribbble,
   fa-behance; margin-right 20px; hover red #e72727). Right `ul.right_side`:
   2 × `a` white 12px uppercase (margin-right 30px), each with a red `i`
   icon (margin-right 15px): phone `012-6532-568-9746`, email
   `emergency@colorlib.com`.
2. **Main navbar** `div.main_menu` — `background: #f8f8f8`. `nav.navbar.
navbar-expand-lg.w-100` with `border-top: 1px solid rgba(221,221,221,
0.38)`. Brand `a.navbar-brand.logo_h` = logo image → recreate as text
   "CARGOMATE" (Roboto Condensed 700 uppercase ~24px, #262533; optional red
   accent). `ul.nav.navbar-nav.ml-auto.justify-content-end` — nav-link =
   Roboto Condensed 700 13px/80px uppercase #262533, margin-right 45px,
   hover/active red: Home (`.active`), About, Services, Pages
   (`li.submenu.dropdown` → `ul.dropdown-menu`: Elements), Blog (dropdown:
   Blog, Blog Details), Contact. `button.navbar-toggler` with 3 ×
   `span.icon-bar` (mobile hamburger). (`.navbar .icons` 18px #222222,
   min-width 70px, hover red on #e4e4e4 — used on inner pages, optional.)
3. **Hero** `section.home_banner_area` — `background: url(../img/banner/
home.jpg) no-repeat center top; background-size: cover` (busy port photo).
   `div.banner_inner.d-flex.align-items-center` → `div.banner_content.d-flex.
flex-md-row.flex-column` (padding 194px 0; 100px ≤991px):
   - `div.banner-left.text-md-right` (`col-lg-7`) — `background: #262533;
padding: 60px 53px`; `h1.text-uppercase` 48px white (35px ≤767px):
     "Solid Super Service".
   - `div.banner-right.position-relative` — white bg, padding 60px 40px;
     `p` (max-width 498px); `a.main_btn.mt-md-0.mt-4` "Explore More" —
     `position: absolute; right: 0; bottom: 0; background: #262533`;
     hover: bg red + white corner arrow.
4. **Feature area** `section.feature-area.section_gap_top` (padding-bottom
   80px): `div.row.align-items-center.justify-content-center` →
   - `div.col-lg-7`: 4 × `div.single-feature` (col-lg-6 col-md-6, mb 60px):
     icon img (f1.png..f4.png) + `h4` 21px 400 + `p` + `a` 13px 700
     uppercase #262533 ls 0.5px (hover: red 40×3px `:before` bar + padding-
     left 60px). Cards: Shipment Tracking / Find your cargo; Have a
     Question? / Contact Us; Get a Quote / Start a quote; Shipping
     Calculator / Get Estimate.
   - `div.col-lg-5.section-title-wrap.mt-4.mt-lg-0` (text-left): `h5` red
     12px "About Our Company", `h2` 42px 700 "We're Carefully / Delivering
     your / happiness.", `h4` + `p` copy, `a.main_btn` "Learn More About Us".
5. **About area** `section.about-area` — `background: url(../img/about/
about-bg.png) no-repeat top center` (map pattern), padding-bottom 80px:
   - `div.col-lg-7`: title row (`h5` "About Our Company" + `h2` "Some
     statistics that we want / to show our viewers") + 6 ×
     `div.single_brand` (col-lg-4 col-md-4 col-6) — `border: 1px solid
#e4e7e9` (3×2 grid; outer borders stripped via nth-child), img
     grayscale(100%) opacity 0.3; hover: white bg + `box-shadow: 0px 10px
40px -14px #e72727` + full-color img.
   - `div.offset-lg-1.col-lg-4` → `div.about_box` → 4 × `div.activity_box`
     (col-lg-6 col-md-3 col-6; mb 70px; `border-bottom: 3px solid #e4e7e9`;
     hover red): icon + `h3` 42px 700 "$2500+ Packages Delivered" / "$500+
     Satisfied Clients" / "$70+ Contries reach" (source typo — keep) /
     "5000 Tons of goods" + `p` label. Counters animate via counterup →
     state-based count-up on scroll.
6. **Service area** `section.service-area.section_gap_top` (margin-bottom
   120px) — dark backdrop: `.service-area:after` `background: #262533;
height: 1316px; z-index: -1`. Title row: `h5` "Our Offered Services" red +
   `h2.text-white` "We offer Various Services / to get you covered". 3 ×
   `div.single-service.col-lg-4.col-md-6`: `div.thumb` img (full width) +
   `div.service-box` (`background: #262533; border: 1px solid rgba(255,255,
255,0.3); padding: 50px 50px 45px`) — `h3` white 21px 400 uppercase "Did
   not find / your Package", `p` (margin 20px 0), `a` white 13px 700
   uppercase "Learn More" (red-bar hover). Hover: box white, h3 red, img
   scale(1.05), link #262533 + padding-left 60px.
7. **Quote area** `section.quote-area` (z-index 5 — white card floats OVER
   the dark block): title `h5` "Get a quote now!" red + `h2.text-white`
   "Check the estimated cost for / your requesting goods". `div.estimated-
cost` (`box-shadow: 0px 10px 30px -10px rgba(231,39,39,0.2)`):
   - `div.nav.nav-tabs` (border 0): `a.nav-link` padding 8px 38px, 16px,
     white bg, radius 0, #262533; active/hover: red + `border-bottom: 3px
solid #e72727`. Tabs: "Get an estimation" (`.active`), "Track
     Shipment".
   - `div.tab-content` (white bg, padding 30px 40px 50px) — BOTH panes hold
     the SAME 10-field form (source duplicates markup): labels 12px
     uppercase #262533; `input.form-control` radius 0, 13px 300, mb 10px,
     border 1px #ced4da, focus box-shadow none; placeholders "Enter first
     name / last name / email address / cargo type / country of origin /
     destination / quantity / weight / width / height" in a col-lg-4 ×9 +
     col-lg-3 ×1 grid; `div.col-lg-12.mt-4` → `div.text-center.
confirm_btn_box` → `button.main_btn.text-uppercase` "Request a Quote".
8. **Testimonial area** `section.testimonial-area.section_gap_top`: title
   `h5` "User Feedback" red + `h2` "What our customers feedback / for
   amazing service." `div.col-lg-8` → `div.owl-carousel.active_testimonial`:
   2 × `div.single_testi` (`background: #e72727; color: #fff; text-align:
center; padding: 70px 15px; margin-bottom: 150px; box-shadow: 0px 40px
91px -37px rgba(231,39,39,0.5)`) — `div.testi_content` (max-width 458px,
   margin auto) italic `p` quote; `div.testi_author.d-flex.justify-content-
center.align-items-center` (margin-top 40px): `div.thumb.mr-4` avatar img
   - `div.a-desc.text-left` — `h6` 18px 400 uppercase white "Marvel Maison",
     `p` 14px "Chief Executive, Amazon".
9. **Blog area** `section.home-blog-area` (margin-bottom 120px): title `h5`
   "Latest Blog Posts" red + `h2` "Check the latest posts / from our blog".
   3 × `div.single-home-blog` (col-lg-4 col-md-6; mb 30px): `div.thumb` img +
   `div.home-blog-box` (`border: 1px solid #e4e7e9; padding: 50px 50px 45px`;
   40px 15px 35px ≤1199px) — `a > h4` 21px 400 uppercase #222 "Some
   statistics that we want to show", `p` excerpt (margin 16px 0 18px),
   `div.bottom.d-flex` (`border-top: 1px solid #e4e7e9; padding-top: 12px`)
   — 2 × `a` 14px rgba(143,143,143,0.7) "13th Mar, 2019" | "02 Comments"
   (pipe via `:after` content '|', hover red). THIRD card variant
   (`d-sm-block d-none`): `div.large-img` absolute img + `div.overlay`
   (`background: rgba(38,37,51,0.85)`) + `div.home-blog-box.border-0` with
   `h4.text-white` (white title on dark photo).
10. **CTA area** `section.cta_area` → `div.cta_inner.d-flex.flex-md-row.
flex-column.justify-content-between.align-items-center` (`background:
#e72727; padding: 58px 68px`; 54px 15px ≤991px; `box-shadow: 0px 40px
91px -37px rgba(231,39,39,0.5)`): left `p` white 12px uppercase ls 1px
    "Get a quick response from our team" + `h1` white 42px 400 uppercase
    (30px ≤991px) "Please feel free to reach us"; right `a.main_btn`
    "Explore More" (white bg, #262533 text; hover red bg).
11. **Footer** `footer.footer-area.section_gap` — dark block
    `.footer-area:before` `background: #262533; height: 582px` (100% ≤991px).
    3 × `div.single-footer-widget` (h6 white 18px 400 uppercase, mb 25px):
    - "About Us" (col-lg-5) + paragraph.
    - "Newsletter" (col-lg-5) — "Stay update with our latest" + `form.form-
inline`: `input.form-control` (height 50px, width 80%, transparent bg,
      `border: 1px solid #444444`, padding 10px 18px, radius 0, placeholder
      #8f8f8f 300) + `button.click-btn` (red #e72727, white, radius 0,
      padding 13px 19px) arrow icon (fa-arrow-right). Success state
      `div.info` (green .valid / red .error) in source.
    - "Follow Us" (col-lg-2 social-widget) — "Let us be social" +
      `div.footer-social.d-flex.align-items-center`: 4 × `a` icons
      (facebook-f, twitter, dribbble, behance; `color: #cccccc`, padding-
      right 25px; hover red).
    - `p.footer-text` (padding-top 20px): "Copyright © <year> All rights
      reserved | This template is made with <heart> by Colorlib" (`a`, `i`
      red #e72727) → original attribution.

## Design tokens (from style.css — computed)

| Token          | Value                                     | Usage                                                                                                                                                                                                                                                          |
| -------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| brand-red      | `#e72727`                                 | `.main_btn` bg, section eyebrows, nav hover/active, top-strip icons, link hover bars (40×3px), active tab + 3px underline, `.single_testi` bg, `.cta_inner` bg, footer credit heart/link, newsletter `.click-btn` bg, brand hover shadow, counter hover border |
| brand-navy     | `#262533`                                 | `.top_menu` bg, h1–h6 color, `.banner-left` bg, nav link color, `.service-area:after` + `.footer-area:before` blocks, `.service-box` bg, feature link color, hero button bg                                                                                    |
| text-gray      | `#8f8f8f`                                 | body copy, `.top_menu .float-left p`, footer input placeholder (300)                                                                                                                                                                                           |
| menu-bg        | `#f8f8f8`                                 | `.main_menu` background                                                                                                                                                                                                                                        |
| ink            | `#222222` / `#222`                        | navbar `.icons` color, `.single-home-blog a`                                                                                                                                                                                                                   |
| icon-hover-bg  | `#e4e4e4`                                 | `.navbar .icons:hover` background                                                                                                                                                                                                                              |
| border-gray    | `#e4e7e9`                                 | `.single_brand` border, `.home-blog-box` border, `.activity_box` border-bottom (3px)                                                                                                                                                                           |
| form-border    | `#ced4da`                                 | `.form-control` / nice-select border                                                                                                                                                                                                                           |
| footer-border  | `#444444`                                 | `.single-footer-widget input` border                                                                                                                                                                                                                           |
| social-gray    | `#cccccc`                                 | `.footer-social i`                                                                                                                                                                                                                                             |
| blog-meta      | `rgba(143,143,143,0.7)`                   | `.home-blog-box .bottom a`                                                                                                                                                                                                                                     |
| overlay-dark   | `rgba(38,37,51,0.85)`                     | `.single-home-blog .overlay` (third blog card)                                                                                                                                                                                                                 |
| navbar-border  | `rgba(221,221,221,0.38)`                  | `.navbar` border-top                                                                                                                                                                                                                                           |
| service-border | `rgba(255,255,255,0.3)`                   | `.service-box` border                                                                                                                                                                                                                                          |
| shadow-red     | `0px 40px 91px -37px rgba(231,39,39,0.5)` | `.single_testi` + `.cta_inner`                                                                                                                                                                                                                                 |
| shadow-card    | `0px 10px 30px -10px rgba(231,39,39,0.2)` | `.estimated-cost` (quote card)                                                                                                                                                                                                                                 |
| font           | "Roboto Condensed"                        | everything: body 15px 400, nav 700 13px, h1–h6 700, `.main_btn` 700 13px ls 0.5px, eyebrows 12px 400 ls 1px, h2 42px 700                                                                                                                                       |

Radii: **0px everywhere** (buttons, inputs, cards, tabs, dropdowns) — sharp
corners are the signature. `.main_btn` detail: `:before` inset white 1px
border (5px) + `:after` bottom-right corner cut (10px white border-triangle;
hover flips to red), line-height 60px (50px ≤767px), padding 0 40px.
Spacing: `section_gap` 150px 0 (100px ≤991px); `section_gap_top` 150px top
(100px ≤991px); `.section-title-wrap` mb 80px (50px ≤991px); top strip 40px;
nav line-height 80px; hero content 194px (100px ≤991px); banner panels 60px
padding; boxes 50px 50px 45px; tab content 30px 40px 50px; testi 70px 15px;
cta 58px 68px.

## Implementation task outline

1. Scaffold `apps/cargomate` (copy the simplest existing app, rename package
   to `@free-react-templates/cargomate`), `npm install` at root (lockfile!),
   `injectUiSource()` in vite.config.ts, Roboto Condensed (400/700) Google
   Fonts `<link>` in index.html.
2. `src/index.css` — `@theme` tokens: `--color-brand: #e72727`,
   `--color-navy: #262533`, `--color-text-muted: #8f8f8f`, `--color-menu:
#f8f8f8`, `--color-ink: #222`, `--color-icon-hover: #e4e4e4`,
   `--color-border: #e4e7e9`, `--color-form-border: #ced4da`,
   `--color-footer-border: #444444`, `--color-social: #cccccc`,
   `--color-paper: #fff`, `--font-sans: "Roboto Condensed", sans-serif`.
   Page bg white, sharp corners (radius 0).
3. Components: `TopStrip` (social icons + phone/email, hidden <992px),
   `Navbar` (logo text, 6 links + 2 dropdowns, hamburger, active state),
   `Hero` (bg image + split navy/white panels + CTA),
   `FeatureGrid` (4 cards + about title block + CTA),
   `AboutStats` (6 brand placeholders + 4 animated counters),
   `ServiceCards` (3 dark cards on #262533 backdrop),
   `QuoteForm` (2 tabs sharing one 10-field form, zod validation),
   `TestimonialSlider` (state carousel, 2 slides),
   `BlogCards` (3 cards; third on dark overlay),
   `CtaBand`, `Footer` (About / Newsletter with success state / social /
   credit).
4. Counters: state-based count-up triggered on scroll into view (Intersection
   Observer or scroll handler); fake timers in tests.
5. Quote form: zod schema, per-field errors, block submit until valid; email
   newsletter: validation + success state (input unmounts → test with
   queryByLabelText absence).
6. Tests per section (scenario-style `it` blocks mirroring the spec Gherkin),
   100% coverage; `npm run verify:app -- cargomate`.
7. PR: `feat: implement Cargomate (ColorLib Lagoon)`, description must list
   source template, preview URL, tokens, and renames/placeholder decisions.

## Fidelity notes

- Red #e72727 + navy #262533 + white is the whole palette; sharp radius-0
  corners everywhere (no rounded buttons/cards) — do NOT introduce rounded
  corners.
- `.main_btn` has a distinctive construction: inset 1px white border (5px
  offset) + bottom-right 10px corner cut. Recreate with pseudo-elements or a
  wrapper; variants: navy (hero), red (default), white (CTA band).
- Eyebrows: 12px 400 uppercase red, letter-spacing 1px, margin-bottom 25px —
  above every 42px 700 uppercase dark section title (white on dark sections).
- The top strip is hidden below 992px; the header becomes absolute ≤991px.
- The quote card floats OVER the dark service block (z-index 5) — the
  service-area dark backdrop must extend behind it. Implement as one dark
  section container with the white card overlapping, or an absolutely-
  positioned dark block + white card (z-index above).
- Both quote tabs share the SAME form (source duplicates markup — do not
  invent different fields for "Track Shipment").
- "Contries reach" is a source typo for "Countries reach" — keep for fidelity
  (or fix; note the choice in the PR). "Stay update with our latest" is also
  source copy — keep.
- Third blog card is a dark image-overlay variant (white title, borderless
  box) — the other two are light boxes.
- The screenshot shows a search box in the top strip and a red-tinted hero;
  the DOM has neither (4 social icons + phone/email; plain photo hero) — the
  DOM is the reference. A subtle red tint on the hero bg image is optional
  cosmetic.
- Brand logos: 6 text wordmarks (or picsum 120×60) in grayscale 30% opacity;
  hover → full color + red shadow. Icons: lucide-react (Package, HelpCircle,
  FileText, Calculator, Phone, Mail, ArrowRight, Heart) + inline SVG brand
  icons (facebook, twitter, dribbble, behance) for top strip and footer
  socials.
- All images: `https://picsum.photos/seed/cargomate-<n>/<w>/<h>` — suggested
  seed map: hero cargomate-1 (1600×800), service thumbs cargomate-2..4
  (560×400), blog thumbs cargomate-5..7 (400×300), blog overlay bg
  cargomate-8 (800×600), avatars cargomate-9..10 (70×70).
- "Lagoon" brand → "Cargomate" everywhere (logo, footer credit keeps the
  Colorlib attribution line).
