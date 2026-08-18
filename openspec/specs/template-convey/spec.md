# Template: Convey (Logistics Company — Bootstrap 5)

## Purpose

Convey is a single-page logistics / freight-company website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Logistic" free template (source:
https://colorlib.com/wp/template/logistic/), built under a DIFFERENT name
(**Convey** — "convey" = to transport/carry goods from one place to another;
single lowercase word, no collision with `apps/`, existing
`openspec/specs/` folders, or `docs/templates/` folders — verified
2026-08-18), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a static Bootstrap 5 one-pager (plus footer):
a white sticky navbar (logo, menu, social icons, red "Get Free Quote"
button) over a full-width hero SLIDER (3 slides — port/cargo photography)
whose overlay is a split box: a RED `#F02930` left panel with a big white
headline + white-outline "Our Services" button, and a WHITE right panel
with a small icon + sub-headline. Below: a white "Our Services" section
with 3 numbered photo cards (Air Shipping / Logistic Service / Ground
Shipping), a pale-blue `#F1FBFF` "About" band (left heading + red "Learn
More" button; right icon rows "Tracking Is Easy" / "Multiple Warehouses"),
a full-width photo band ("We give you complete control of your shipments."

- two "Logistic Solution" detail blocks), a full-bleed video band with a
  centered white circular play button, a grey "Get free quote" section
  (left pitch + phone, right 11-field freight-quote form with cargo-type
  checkboxes), a centred "Client Testimonial" slider, and a dark navy
  `#1D2547` footer (brand column with circular red social icons, Quick
  Links, Company, copyright bar). The brand accent is a corporate RED
  `#F02930`; the typeface is Raleway.

**Preview URL — REACHABLE at the standard path (verified 2026-08-18 by
direct fetch):**
**`https://preview.colorlib.com/theme/logistic/`** (HTTP 200, 33,302
bytes). The Bootstrap-5 family does NOT live under the
`/theme/bootstrap/` prefix (that is only for the Bootstrap Calendars /
Carousels / Multiselect demos) — the standard path works for this one.

**Source behavior (signature of the page):**

- **Static front page with a JavaScript-driven slider.** The hero uses
  the Slick carousel (`owl.carousel.min.css` + `slick.js`/`slick.min.js`
  are ALSO loaded; the active carousel markup is `div.slider-active` with
  `single-slider` slides — slick is wired in main.js). The recreation
  implements the 3-slide rotator in React (auto-advance + arrows); all
  other links (`index.html`, `services.html`, `about.html`, …) are
  in-page anchors or inert placeholders in the one-pager.
- **Split hero overlay.** Each slide's caption is a two-panel box sitting
  on the hero photo: LEFT `.hero-caption-left` is SOLID RED `#F02930`
  (437px tall) with `h1` "Give your business a flow" (white, 50px 900)
  - a white OUTLINE button (`border-btn` "Our Services", hover fills
    white → red text); RIGHT `.hero-caption-right` is WHITE with a small
    SVG icon + `h2` "Transport quality and excellence to enhance your
    business". The photo shows through around the box (slide height
    min 850px).
- **Cargo-type choose-one checkboxes.** The quote form opens with three
  custom checkboxes (Ocean Freight, Air Freight [checked by default],
  Land Transport) using the Bootstrap-ish custom checkmark pattern
  (`.containers` label + hidden input + `.checkmark` square; checked bg
  `#ff4357` red). The remaining 11 fields are plain labelled text inputs
  (CARGO TYPE, COUNTRY OF ORIGIN, DESTINATION, QTY, WEIGHT, WIDTH,
  HEIGHT, LEIGHT [sic — "length" misspelled in the source], NAME,
  E-MAIL, PHONE) with a square red "Request Quote" submit
  (`submit-btn2`). The source has NO validation — the recreation adds
  client-side validation + success state per repo conventions.
- **Video popup.** The video band's white circular play button opens a
  YouTube modal via Magnific Popup (`https://www.youtube.com/watch?v=up68UAfH0d0`)
  — in React, an inline lightbox/dialog with a YouTube embed (or a
  no-op link per repo conventions; never ship a jQuery plugin).
- **Testimonial slider.** `h1-testimonial-active` is a second slick
  carousel (2+ slides): centered quote card on `#F1FBFF` (radius 4px),
  round avatar, name "Jacson Miller", role "Designer @Colorlib"
  (recreate with paraphrased content — no ColorLib strings in app code).

**WHAT MAKES CONVEY DISTINCT (signature behaviors):**

1. **The red/white split hero slider.** Three full-bleed port/cargo
   photos, each carrying the same two-panel caption: solid red box
   (headline + outline button) side by side with a white box (icon +
   sub-headline). This red/white panel pair + square buttons is the
   visual signature of the whole template.
2. **Square corners everywhere.** Buttons, inputs, and the hero panels
   are all radius 0 — the design language is hard-edged corporate.
3. **Corporate palette of exactly four voices:** red `#F02930` (CTAs,
   panels, hovers, socials), navy `#1D2547`/`#232F55` (footer + text),
   pale ice-blue `#F1FBFF` (band backgrounds + testimonial card), and
   white. The only pastel is the section-title caret `#7EA0FF`.
4. **The 11-field freight quote form** with choose-one cargo-type
   checkboxes — the largest, densest form of any template in the
   bootstrap-5 tranche so far.
5. **Video band with a huge 110px white circular play button**, centered
   on a fixed-attachment photograph.

## Naming

- NEW name: **Convey** (single lowercase word; verb "convey" = to carry,
  transport, transmit — fits freight/logistics without reusing the
  source name); package `@free-react-templates/convey`, app folder
  `apps/convey`, deploy target `https://convey.free.componentdock.com`
  (`public/CNAME`), homepage `https://convey.free.componentdock.com`.
- Source keeps its name "Logistic" — the mapping lives ONLY in this
  spec, TEMPLATES.md, and the PR (no ColorLib strings in app files).
- Name check: `convey` collides with nothing — not in `ls apps/` (497
  folders), not in `openspec/specs/` (880+ folders), not in
  `docs/templates/`, no occurrence in TEMPLATES.md, no `feat:` commit on
  origin/main referencing it (verified 2026-08-18).

## Design reference (replication findings)

- **Original:** ColorLib "Logistic" — TEMPLATES.md section
  "## Bootstrap 5 (89)", first unprepped row at line 601. **The slug
  `wp/template/logistic/` appears in THREE `- [ ]` rows (lines 601,
  1082, 2964) — all three must be marked `[x]` with
  `https://convey.free.componentdock.com` when the template ships**
  (verified `grep -c 'wp/template/logistic/' TEMPLATES.md` = 3 on
  2026-08-18). Do NOT confuse with "Logistics"
  (`wp/template/logistics/`, already shipped as shiply) or
  "Thelogistico" (`wp/template/thelogistico/`) — different templates.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/logistic/
  (HTTP 200, 33,302 bytes). Stylesheets: `assets/css/bootstrap.min.css`,
  `owl.carousel.min.css`, `slicknav.css`, `animate.min.css`,
  `magnific-popup.css`, `fontawesome-all.min.css`, `themify-icons.css`,
  `slick.css`, `nice-select.css`, `assets/css/style.css` (73,574 B —
  ALL custom template CSS, including the full blog/elements page
  styles; only the index-page rules matter for this recreation). Fonts:
  Raleway 200–900 via Google Fonts (`@import` at the top of style.css).
- **Screenshot note:** `logistic-free-template.jpg` (1200×946, AVIF on
  the CDN, viewed in the browser): white navbar with red square logo
  block + "Logistic." wordmark, centered menu (Home, Services, About,
  Blog, Contact), social icons and a red "Get Free Quote" button on the
  right; hero = full-width photo of a cargo ship at a container port
  with cranes (GRIMALDI LINE livery), the split caption box (red left
  panel with "Give your business a flow" + white-outline button, white
  right panel with sub-headline) and slider arrows; below "Our Services"
  centered heading + 3 card photos (airplane at sunset / port cranes /
  red semi-truck); footer edge visible. Corporate, professional,
  red-white-navy palette. The live rendered page + parsed stylesheets
  are the authoritative reference.

### Design tokens (extracted from `assets/css/style.css`)

- **Brand (red):** `#F02930` — `.btn` background, `.submit-btn2`
  background, hero left panel background, nav hover color, checkbox
  hover/active touches, blog/social accents, `#back-top` button. Hover
  sweep `#db2228` (`.btn::before` scaleY wipe). Checked checkbox
  indicator `#ff4357`. Button text white.
- **Dark navy:** `#1D2547` — footer background + nav link color;
  `#232F55` — all headings + body text + input text color.
- **Ice blue / band bg:** `#F1FBFF` — `.gray-bg` (about + quote bands),
  `.single-testimonial` card background, `.more-btn` text color.
- **Pastel caret:** `#7EA0FF` — `.section-tittle > span` eyebrow color
  (small text above some headings).
- **Neutrals:** `#fff` (hero right panel, cards, inputs), `#DBE2E9`
  (input borders), `#C2C5DB` (footer body text), `#666666` (checkbox
  labels), `#7F85A8` (hero-left panel `span` eyebrow, uppercase 26px
  600 — note: present in CSS but the index page uses no span there).
- **Type:** Raleway everywhere (Google Fonts `@import` weights
  200–900). Body 16px; `h1` 50px 900 white (hero left, line-height
  1.2); `h2` 44px 700 `#232F55` (section titles, line-height 1.4);
  hero-right `h2` 34px 700; footer titles 17px 500.
- **Buttons:** ALL square (`border-radius: 0`). `.btn` solid red,
  padding 22px 32px, 16px 600, white text, hover = red-to-darker wipe
  (`#db2228` scaleY sweep). `.border-btn` 1px white outline on photos,
  padding 17px 39px, hover fills white → red text. `.submit-btn2` 50px
  tall, padding 10px 36px, 14px 400, square, capitalize. `.more-btn`
  light `#F1FBFF` 16px with a 45°-rotated arrow glyph. `.about-btn` =
  `.btn` + padding 30px 40px.
- **Inputs (`.contact-form input`):** height 50px, width 100%, font 18px
  400 `#232F55`, padding 9px 17px, `border-radius: 0`, 1px solid
  `#DBE2E9`, bg `#fff`, margin-bottom 20px. Labels uppercase small text
  above each field. Focus: default browser outline (recreation adds an
  accessible focus ring per repo a11y rules).
- **Checkboxes (`.containers` / `.checkmark`):** custom square indicator
  ~20×20, idle transparent, `background-color: #ff4357` when checked
  (source ships Air Freight checked), grey `#666666` 16px label text,
  ~35px left padding. Native input visually hidden.
- **Layout:** hero slide min-height 850px (500–750 responsive), caption
  panels 437px tall; section padding 120px top / 100px bottom
  (`section-padding`); quote form = 11 fields in a responsive grid (3
  wide / 4 wide / 2 wide rows) + 3-col checkbox row + submit; section
  titles centered for Services & Testimonial, left-aligned otherwise.
- **Section backgrounds:** hero = photo slides (`slider-bg1..3`); about
  band + quote band `#F1FBFF`; control band `visit_bg.jpg` photo; video
  band `video-bg.jpg` photo with `background-attachment: fixed`; footer
  `#1D2547`.

### Section structure (from the live DOM — top to bottom)

1. `header.header-area` → `div.main-header.header-sticky` (sticky on
   scroll, white with shadow): logo left (red square + wordmark), center
   menu (Home, Services, About, Blog, Blog Details, Elements, Contact);
   right: header social icons + red "Get Free Quote" button
   (`header-btn2` = `.btn`). Mobile: hamburger → slide-down menu
   (slicknav).
2. `section.slider-area` → `div.slider-active` (slick): 3×
   `div.single-slider.hero-overly1.slider-height.slider-bg1|2|3` — each:
   - `div.hero-caption-left` (RED 437px): `h1` "Give your business a
     flow" + `div.hero__btn` → `a.border-btn.hero-btn` "Our Services".
   - `div.hero-caption-right` (WHITE 437px): `img.icon`
     (Subtraction.svg decorative) + `h2` "Transport quality and
     excellence to enhance your business".
   - Slick prev/next arrows at hero edges.
3. `section.sercices-area.section-padding` (white):
   - Centered `div.section-tittle.text-center.mb-50`: `h2` "Our
     Services" + `p` "We have a wide range of solutions for your
     business".
   - Row of 3 `properties-card`: photo (services1.jpg airplane /
     services2.jpg cranes+containers / services3.jpg red truck), red
     `h3` "01. Air Shipping" / "02. Logistic Service" / "03. Ground
     Shipping", paragraph, "Learn More" link.
4. `div.about-area.section-padding.gray-bg` (`#F1FBFF`):
   - Left col (`about-caption`): `section-tittle.section-tittle3` `h2`
     "We have a wide range of solutions for your business" + paragraph
     - `a.btn.about-btn` "Learn More".
   - Right col (`about-blog`): 2× `single-offers` rows — icon in a
     bordered circle (`notification1.svg` → lucide) + `h3` link
     "Tracking Is Easy" / "Multiple Warehouses" + paragraph.
   - Decorative truck image (`about-shape` / truck.png).
5. `div.visit-tailor-area.fix` (photo band `visit_bg.jpg`):
   - Left `tailor-offers`: truck photo.
   - Right `tailor-details`: `h2` "We give you complete control of your
     shipments." + 2× `single-details` (one with `left-line` red rule):
     `h3` "Logistic Solution" + paragraph + `a.more-btn` "Learn More"
     with 45° arrow.
6. `div.video-area.section-img-bg` (photo `video-bg.jpg`,
   `background-attachment: fixed`): centered `video-icon` →
   `a.popup-video.btn-icon` white 110px circle, red play glyph (YouTube
   modal).
7. `section.contact-form-area.gray-bg.fix` (`#F1FBFF`):
   - Left col (`contact-caption`): `section-tittle.section-tittle3`
     `h2` "Get free quote" + paragraph + phone link "+10(78) 267 3565".
   - Right col: `form.contact-form[action="#"]`:
     - 3 custom cargo-type checkboxes: "Ocean Freight", "Air Freight"
       (checked), "Land Transport".
     - 11 labelled text inputs in a responsive grid: CARGO TYPE,
       COUNTRY OF ORIGIN, DESTINATION (3-up) / QTY, WEIGHT, WIDTH,
       HEIGHT, LEIGHT (5-up) / NAME, E-MAIL, PHONE (3-up).
     - `button.submit-btn2` "Request Quote".
8. `section.testimonial-area.section-bg1`:
   - Centered `section-tittle`: `h2` "Client Testimonial".
   - `h1-testimonial-active` (slick): 2× `single-testimonial`
     (card `#F1FBFF`, radius 4px, padding 45/100): centered quote
     paragraph; founder row: round avatar, `span` name "Jacson Miller",
     `p` role "Designer @Colorlib" (paraphrase — no ColorLib strings).
9. `footer.footer-area.footer-padding` (`#1D2547`):
   - Brand col: footer logo, paragraph, 4 circular social icons
     (`footer-social a`: 40px circle, red text on `rgba(240,41,48,0.05)`
     bg, hover fills red + rotateY flip).
   - "Quick links" col: Listing, Submit your Business, About, Blog,
     Cities.
   - "Company" col: Our Team, Privacy Policy, Testimonial, User Stories.
   - Bottom bar: copyright © + "Made with ♥ by ColorLib" → replaced by
     the repo-standard "Made with Component Dock / More templates at
     Component Dock" line linking https://www.componentdock.com/.

## Requirements

### Requirement: Sticky navbar

The system SHALL render a white sticky header with logo, menu, social
icons, and a red CTA button.

#### Scenario: Header content

- **GIVEN** the Convey app is rendered
- **WHEN** the user looks at the top of the page
- **THEN** a white header SHALL show the brand logo on the left
- **AND** a menu SHALL list Home, Services, About, Blog, and Contact
- **AND** social icons SHALL appear on the right
- **AND** a solid red button SHALL read "Get Free Quote"

#### Scenario: Sticky behavior

- **GIVEN** the user scrolls the page
- **WHEN** the header passes the top of the viewport
- **THEN** the header SHALL stay fixed at the top with a subtle shadow

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (≤767px)
- **WHEN** the user taps the hamburger control
- **THEN** a slide-down menu SHALL reveal the same links plus the
  "Get Free Quote" button
- **AND** the menu SHALL close when a link is chosen

### Requirement: Hero slider with split caption

The system SHALL render a full-width hero slider with three slides; each
slide SHALL carry the red/white split caption box.

#### Scenario: First slide renders

- **GIVEN** the page loads
- **WHEN** the hero area is visible
- **THEN** a full-bleed hero photograph SHALL fill the slide
  (min-height ~850px on desktop)
- **AND** a solid red `#F02930` panel on the left SHALL show the
  headline "Give your business a flow" in white
- **AND** a white button with a 1px white outline SHALL read
  "Our Services"
- **AND** a white panel beside it SHALL show a small icon and the
  sub-headline "Transport quality and excellence to enhance your
  business"

#### Scenario: Slider rotation

- **GIVEN** the hero is rendering
- **WHEN** the user clicks the next arrow (or waits for auto-advance)
- **THEN** the slide SHALL advance to the next background photo
- **AND** the split caption box SHALL persist on every slide with the
  same copy

#### Scenario: Slide navigation

- **GIVEN** the hero is rendering
- **WHEN** the user clicks an arrow
- **THEN** only the active slide SHALL be visible
- **AND** the arrows SHALL be reachable by keyboard (aria-labels) and
  wrap around at the ends

### Requirement: Services section

The system SHALL render a centered "Our Services" heading with three
numbered photo cards.

#### Scenario: Services heading

- **GIVEN** the user scrolls past the hero
- **WHEN** the services section is visible
- **THEN** a centered heading SHALL read "Our Services"
- **AND** a paragraph beneath it SHALL read "We have a wide range of
  solutions for your business"

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the user reads the cards
- **THEN** SHALL be three cards in a row, each with a photograph on top
- **AND** card one SHALL be titled "01. Air Shipping"
- **AND** card two SHALL be titled "02. Logistic Service"
- **AND** card three SHALL be titled "03. Ground Shipping"
- **AND** each card SHALL show a service paragraph and a "Learn More"
  link
- **AND** the titles SHALL be red `#F02930` on hover

### Requirement: About band

The system SHALL render the pale-blue about band with a heading, red
button, and two icon feature rows.

#### Scenario: About content

- **GIVEN** the user scrolls to the about band
- **WHEN** the section is visible
- **THEN** the background SHALL be ice blue `#F1FBFF`
- **AND** a heading SHALL read "We have a wide range of solutions for
  your business"
- **AND** a solid red square button SHALL read "Learn More"
- **AND** the right column SHALL show two feature rows, each with an
  icon in a bordered circle and a heading: "Tracking Is Easy" and
  "Multiple Warehouses", each with a short paragraph

### Requirement: Control band

The system SHALL render the photograph band with the "complete control"
headline and two solution blocks.

#### Scenario: Control content

- **GIVEN** the user scrolls past the about band
- **WHEN** the control band is visible
- **THEN** a full-width photograph SHALL form the band background
- **AND** a heading SHALL read "We give you complete control of your
  shipments."
- **AND** SHALL be two solution blocks each headed "Logistic Solution"
  with a paragraph and a light "Learn More" link with an arrow glyph
- **AND** one block SHALL show a red left rule (`left-line`)

### Requirement: Video band

The system SHALL render a photo band with a large centered white play
button.

#### Scenario: Video button

- **GIVEN** the user scrolls to the video band
- **WHEN** the section is visible
- **THEN** a full-width photograph with fixed attachment SHALL form the
  background
- **AND** a white 110px circular button with a red play glyph SHALL be
  centered on it

#### Scenario: Video interaction

- **GIVEN** the user clicks the play button
- **WHEN** the click is registered
- **THEN** a lightbox/dialog SHALL open with the embedded video (or the
  link SHALL be inert with `preventDefault` if no embed is available,
  per repo conventions)
- **AND** the dialog SHALL close via its close control or the Escape key

### Requirement: Quote form

The system SHALL render the "Get free quote" section with the pitch
column and the 11-field freight form with cargo-type checkboxes.

#### Scenario: Pitch column

- **GIVEN** the user scrolls to the quote section
- **WHEN** the section is visible
- **THEN** the background SHALL be ice blue `#F1FBFF`
- **AND** a heading SHALL read "Get free quote"
- **AND** a paragraph SHALL pitch the freight service
- **AND** a phone number SHALL be shown as a link
  ("+10(78) 267 3565"-style placeholder, displayed as spaced text)

#### Scenario: Cargo-type checkboxes

- **GIVEN** the form is rendered
- **WHEN** the user reads the first row
- **THEN** three custom checkboxes SHALL read "Ocean Freight", "Air
  Freight", and "Land Transport"
- **AND** "Air Freight" SHALL be checked by default with a red
  `#ff4357` indicator
- **AND** clicking a label SHALL toggle that checkbox

#### Scenario: Quote fields

- **GIVEN** the form is rendered
- **WHEN** the user reads the fields
- **THEN** SHALL be labelled text inputs for CARGO TYPE, COUNTRY OF
  ORIGIN, DESTINATION, QTY, WEIGHT, WIDTH, HEIGHT, LENGTH, NAME,
  E-MAIL, and PHONE
- **AND** each input SHALL be white with a 1px `#DBE2E9` border, square
  corners, 50px height, and navy `#232F55` text

#### Scenario: Request submit

- **GIVEN** the form is rendered
- **WHEN** the user looks below the fields
- **THEN** a square red button SHALL read "Request Quote"

#### Scenario: Validation (recreation addition — source has none)

- **GIVEN** the user submits the form
- **WHEN** required fields are missing or the email is malformed
- **THEN** per-field error messages SHALL appear
- **AND** the request SHALL NOT submit until the form is valid

#### Scenario: Success state (recreation addition)

- **GIVEN** the user submits a valid form
- **WHEN** validation passes
- **THEN** the form SHALL be replaced by an inline success panel with a
  confirmation message
- **AND** the page SHALL NOT reload or navigate

### Requirement: Testimonial slider

The system SHALL render a centered "Client Testimonial" heading with a
sliding quote card.

#### Scenario: Testimonial card

- **GIVEN** the user scrolls to the testimonial section
- **WHEN** the section is visible
- **THEN** a centered heading SHALL read "Client Testimonial"
- **AND** a card on `#F1FBFF` (4px radius) SHALL show a centered quote,
  a round avatar, the client name, and a role line

#### Scenario: Testimonial rotation

- **GIVEN** the testimonial slider is rendering
- **WHEN** the user clicks the slider controls (or waits)
- **THEN** the card SHALL advance to the next testimonial
- **AND** only one testimonial SHALL be visible at a time

### Requirement: Footer

The system SHALL render the dark navy footer with brand, two link
columns, and the repo-standard Component Dock credit.

#### Scenario: Footer columns

- **GIVEN** the user scrolls to the bottom
- **WHEN** the footer is visible
- **THEN** the background SHALL be navy `#1D2547`
- **AND** a brand column SHALL show the logo, a paragraph, and four
  circular social icons (red glyphs on a faint red tint, hover fills
  red)
- **AND** a "Quick links" column SHALL list Listing, Submit your
  Business, About, Blog, and Cities
- **AND** a "Company" column SHALL list Our Team, Privacy Policy,
  Testimonial, and User Stories

#### Scenario: Component Dock credit

- **GIVEN** the footer is rendered
- **WHEN** the user reads the bottom bar
- **THEN** a copyright line SHALL appear
- **AND** a "Made with Component Dock" / "More templates at Component
  Dock" line SHALL link https://www.componentdock.com/
- **AND** SHALL NOT reference ColorLib anywhere in the app code

## Verification checklist

- [ ] Spec validates: `npm run spec:validate`
- [ ] TDD: tests written before implementation; `npm run test:coverage`
      at 100% lines/functions/branches/statements (per-app gate via
      `scripts/verify-app.sh convey`)
- [ ] Design tokens from this spec applied in `@theme` (brand
      `#F02930`, brand-hover `#db2228`, navy `#1D2547`, ink `#232F55`,
      ice `#F1FBFF`, caret `#7EA0FF`, input-border `#DBE2E9`, footer
      text `#C2C5DB`, checkbox-checked `#ff4357`, panel-eyebrow
      `#7F85A8`)
- [ ] Raleway (200–900) loaded via Google Fonts `<link>` in index.html
- [ ] Section structure + order matches the live DOM 1:1 (sticky navbar
      → 3-slide hero with red/white split caption → services cards →
      about band → control band → video band → quote form → testimonials
      → footer) then the repo-standard footer credit
- [ ] Hero: 3 slides, min-height ~850px desktop, split caption persists
      per slide (red left panel: white h1 + outline "Our Services"
      button; white right panel: icon + sub-headline); auto-advance +
      accessible arrows; placeholder photos via picsum seeds
      (subject-verified per seed-screening method — port/container/ship
      scenes preferred, e.g. `https://picsum.photos/seed/convey-hero1/1920/1080`
      etc.)
- [ ] Services: 3 numbered cards ("01. Air Shipping", "02. Logistic
      Service", "03. Ground Shipping"), photo tops, red titles, Learn
      More links; subject-verified picsum seeds (airplane, cranes,
      truck)
- [ ] About band `#F1FBFF`: heading + red square "Learn More" +
      2 icon rows (Tracking Is Easy / Multiple Warehouses) with
      bordered-circle icons from lucide-react
- [ ] Control band: photo background + "We give you complete control of
      your shipments." + 2 "Logistic Solution" blocks, one with a red
      left rule, light "Learn More" links with arrow glyph
- [ ] Video band: fixed-attachment photo + centered 110px white circle
      with red play glyph; lightbox opens/closes (Escape works)
- [ ] Quote form: cargo-type checkboxes (Air Freight checked default,
      red `#ff4357` indicator), 11 labelled inputs in the source's grid
      rhythm (3-up / 5-up / 3-up), square navy-text inputs, red square
      "Request Quote"; zod validation + inline success state; phone as
      spaced display text (no `tel:` literals — compute href at runtime
      if a link is needed)
- [ ] Testimonials: `#F1FBFF` card 4px radius, centered quote, round
      avatar, name + role; slider shows one at a time
- [ ] Footer `#1D2547`: brand col + 4 circular social icons (red on
      `rgba(240,41,48,0.05)`, hover fills red), Quick links + Company
      columns, copyright bar
- [ ] Icons from lucide-react or inline SVG (arrow-up-right, play,
      navigation/pin, phone, Facebook, Instagram, Twitter/X, Pinterest,
      Check); verify every lucide export with the typeof probe; NO
      fontawesome / themify / icomoon icon fonts
- [ ] NO assets copied from ColorLib: placeholder images via
      `https://picsum.photos/seed/<convey>-<n>/<w>/<h>`; hero/video/
      control-band photos subject-verified before the PR
- [ ] Footer links Component Dock (https://www.componentdock.com/) —
      replaces the original "Colorlib" credit; no colorlib.com /
      preview.colorlib.com strings in any app file
- [ ] TEMPLATES.md: mark ALL THREE "Logistic" rows (lines 601, 1082, 2964) `[x]` + `https://convey.free.componentdock.com` +
      readme:status when shipped
- [ ] Deploy check: merged PR → Deploy to Surge workflow green + surge
      URL (convey.free.componentdock.com) returns 200
