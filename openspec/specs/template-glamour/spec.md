# Template: Glamour (Model Agency Landing)

## Purpose

Glamour is a single-page model-agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Look" design (see TEMPLATES.md, Bootstrap (216) category),
built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a high-fashion editorial landing page: a fullscreen
off-canvas navigation (black overlay with a background photo, numbered
links 01–05), a full-viewport hero slider of model portraits (position
label, huge model name, stats row Height/Bust/Waist/Hips/Shoe/Eyes/Hair,
"Read more" + "View Gallery" buttons), an "Look A Model Agency" split
block with a checklist and a pulsing "Watch our video promo" play button,
a "Our Tops Model's" card grid whose cards slide up a hot-pink stats
panel on hover, a photo-background "Clients Says" testimonial carousel
with round avatars, an "Our services" split block with four round pink
icon rows, a "Wanna be a Model?" quote strip that overlaps the footer, a
"Recent Blog" band, and a dark four-widget footer. Glamour recreates
that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Look" is FORBIDDEN as the app
> name. **Glamour** (allure/beauty — the fashion-model theme) is the new,
> original name — single lowercase word, no collision with `apps/`,
> `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-08-11). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Look" — free Bootstrap 4 model agency website
  template (source: https://colorlib.com/wp/template/look/; page title
  "Look - Free Bootstrap 4 Template by Colorlib"). TEMPLATES.md lists it
  under **Bootstrap (216)** (line 443, first of THREE identical dup rows
  at lines 443 / 1085 / 1716 — all `- [ ]`, nothing shipped; mark ALL
  three `[x]` when shipped). The recreation brands itself **Glamour**.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/look/` — HTTP 200, 48.8 KB HTML +
  `css/style.css` 73.6 KB (Bootstrap 4 + owl.carousel + magnific-popup +
  scrollax/AOS + flaticon/icomoon/ionicons icon fonts + Google Fonts
  Josefin Sans + Rubik). Screenshot `look-free-template.jpg`
  (1200×946, browser-verified 2026-08-11) matches the live render:
  dark moody full-bleed hero portrait with pink "Super Model" tag, huge
  condensed white model name, uppercase stats row, solid pink "Read
  more" + outline pink "View Gallery"; below the fold a white split
  section with photo left, "LOOK A MODEL AGENCY" heading + pink
  checkmarks right.
- **Section order (1:1, verified from live DOM):**
  1. **Off-canvas nav + header** — `nav#colorlib-main-nav` (fixed
     fullscreen black overlay, z-index 1002, text-align center,
     hidden by default: `visibility: hidden; opacity: 0`; shown via
     `body.menu-show` with an 0.8s cubic-bezier(0.175,0.885,0.32,1.275)
     transition): close/hamburger toggle (44×44, top 40 right 40) +
     `.img` background photo on the left half (`images/bg_2.jpg`) +
     centered `h1.logo.mb-4` "Look<br><span>Model Agency</span>" +
     `ul` of numbered links `01 Home` (`.active`), `02 About`,
     `03 Models`, `04 Blog`, `05 Contact` — big uppercase links, active
     item pink text with pink underline (`span:before` bg `#f62a66`).
     `<header>` (fixed, z-index above hero): `.colorlib-logo` 30px
     Josefin Sans uppercase ls 2px white "Look" + `span` 11px w300
     `rgba(255,255,255,0.8)` "Model Agency", plus hamburger toggle
     (3-line icon, `js-colorlib-nav-toggle`).
  2. **Hero slider** (`section.home-slider.owl-carousel`) — 4
     `.slider-item` slides, each `height: calc(100vh)`, `min-height:
750px`, cover bg photo (`images/bg_1..4.jpg`); `.container` >
     `.row.slider-text.justify-content-start.align-items-center` >
     `.col-md-8.col-lg-7`: `<span class="position">` label — "Top
     Model's" / "Super Model's" / "Photo Model's" (20px uppercase pink
     w300) + `<h1 class="mb-3">` model name — "Kate Henderson" /
     "Samantha Lewis" / "Jessica Alba" / "Michael Buff" (50px white
     uppercase ls 1px lh 1.2) + `.d-md-flex.models-info.mt-5.mb-5` of 7
     stat cells (`width: 14%`, `border-left: 1px solid
rgba(255,255,255,0.2)`, label p + value span; mobile 20% inline):
     Height 185 · Bust 79 · Waist 40 · Hips 87 · Shoe 40 · Eyes Blue ·
     Hair Brunet + `p` with `a.btn.btn-primary.px-4.py-3` "Read more"
     (solid pink) and `a.btn.btn-primary.btn-outline-primary.px-4.py-3`
     "View Gallery" (1px pink outline, pink text). Owl dots active
     pink.
  3. **Split block 1 — "Look A Model Agency"** (`section.ftco-section-2`
     > `.container-fluid` > `.section-2-blocks-wrapper.d-flex.row.no-
gutters`): `.img.col-md-6` bg photo (`images/bg_5.jpg`) + `.text
.col-md-6` (padding 7%, bg `rgba(0,0,0,0.02)`) > `.text-inner`:
     > `h3.heading` "Look A Model Agency" (Josefin Sans uppercase ls 1px)
     - lorem paragraph with `<strong>` emphasis + `ul.my-4` of 3 pink
       checkmark rows (`ion-ios-checkmark-circle`, `#f62a66`): "Even the
       all-powerful Pointing" · "Behind the word mountains" · "Separated
       they live in Bookmarksgrove" + video row: `.col-md-7` `.img-2`
       (bg photo `images/bg_1.jpg`, centered) with pulsing round play
       button `.button.popup-vimeo` (pink 30px play icon, `animation:
pulse 2s infinite`) + `.col-md-4` `.watchvideo-heading` 16px w300
       link "Watch our video promo" (play icon, black text; links to
       Vimeo 45830194 via magnific-popup).
  4. **Split block 2 — "Our Tops Model's"** (same wrapper): `.col-md-6
.bg-light` heading column (inner `.col-md-9` `.p-5`): `h2.mb-4`
     "Our Tops Model's" + lorem; then 9 `.col-md-3.model-entry` cards
     (3/4/2 per responsive row): `.model-img` (430px tall cover photo
     `images/image_1..9.jpg`) with `.name` (bottom-left, model name
     `h3 > a` → `model-single.html`) and `.text` hover panel (absolute
     bottom -30%, bg `#f62a66`, white, opacity 0 → 1 on hover): name +
     5 stat cells (Height 185 · Bust 79 · Waist 40 · Hips 87 · Shoe 40).
     All 9 cards reuse the same name "Coleen Husaff" + same stats in
     the source.
  5. **Testimonials** (`section.testimony-section.img`, bg photo
     `images/bg_7.jpg` + `.overlay` white opacity .92): centered
     `h2` "Clients Says" + `.carousel-testimony.owl-carousel` of
     `.testimony-wrap` items: 100px round `.user-img` (bg photo
     `images/person_1.jpg`) with 40px round pink `.quote` badge
     (quote icon, bottom-right), quote paragraph (lorem), `.name`
     pink "Mike Lewis" / "Dennis Green" + `.position` "Architect".
  6. **Split block 3 — "Our services"** (same wrapper, image left
     `images/bg_6.jpg` / text right): `h3.heading` "Our services" +
     4 `.services.d-flex` rows: `.icon` (70×70 round, bg `#f62a66`,
     white 40px icon) + `.info.ml-4` `h3` + lorem. Services: **Fashion
     Shows** (`flaticon-quality`) · **Corporate Events**
     (`flaticon-megaphone`) · **Commercial Photo Shots**
     (`flaticon-shopping-bag`) · **Exhibitions/Trade Shows Shows**
     (`flaticon-photo-camera`).
  7. **Quote strip** (`section.ftco-quote` > `.req-quote`, margin-bottom
     -60px so it overlaps the footer; `box-shadow: 0px 18px 37px -28px
rgba(0,0,0,0.75)`; mobile text-center): `h3` white uppercase 24px
     ls 3px "Wanna be a Model?" + `p` + `span > a` pink pill link (bg
     `#f62a66`, white, padding 5px 10px) "Call us now to know how!".
  8. **Recent Blog** (`section.ftco-section`, 7em padding): `.row` of 4
     `.col-md-3` — a) heading column: `h2.mb-4` "Recent Blog" + lorem +
     `.btn-view` link "View more" (2px pink border, pink text, padding
     14px 20px 10px); b–d) 3 `.blog-entry` cards: `.block-20` cover
     image link (`images/image_1..3.jpg`, ~240px tall) + `.text.pt-4`:
     `.meta.mb-3` (date "August 12, 2018" · "Admin" · chat icon "3")
     - `h3.heading.mt-3` link "Asia's Next Top Model" (hover pink).
  9. **Footer** (`footer.ftco-footer.ftco-section`, bg `#252525`,
     padding 7em 0): `.row.mb-5` of 4 `.col-md` widgets — a) brand
     "Look" (24px w900 white) + blurb + social icon links; b)
     "Recent Blog" `.block-21` entries (80px thumb + `.text`: 18px
     heading link "Even the all-powerful Pointing has no control
     about" `rgba(255,255,255,0.8)` (hover pink) + `.meta` 12px
     "July 12, 2018 · Admin · 19"); c) "Site Links": Home · About ·
     Model · Services · Blog; d) "Have a Questions?" `.block-23`
     contact rows: map-marker "203 Fake St. Mountain View, San
     Francisco, California, USA" · phone `+2 392 3929 210` · envelope
     `info@yourdomain.com` (text `rgba(255,255,255,0.4)`, icons/labels
     white). Widget headings 18px white uppercase ls 1px with a 70px
     white 1px underline (`h2:after`). Bottom `.col-md-12.text-center`
     © bar: "Copyright © All rights reserved | This template is made
     with ♥ by Colorlib" → reword the credit (Component Dock), keep ©
     line.
- **JS behaviors (original):** jQuery owl.carousel (hero slider +
  testimonials), magnific-popup Vimeo modal ("Watch our video promo"),
  scrollax parallax (slider text translateY), fullscreen nav toggle
  (`body.menu-show` class), model-card hover slide-up panel. Recreate
  as React: index-based slider/carousel with dots, nav toggle with
  `aria-expanded`, Vimeo link as modal or plain external link, hover
  panels via Tailwind `group-hover` transitions.

## Design tokens (from `css/style.css`, verified 2026-08-11)

- **Fonts:**
  - Headings: "Josefin Sans" (Google Fonts; h1–h5 `color: #000`,
    `font-weight: 400`, line-height 1.5; hero h1 50px white uppercase
    ls 1px; section `h2` 28px uppercase ls 1px; section-2 `h3.heading`
    uppercase ls 1px; logo 30px uppercase ls 2px).
  - Body: "Rubik" (Google Fonts; 300, 16px, line-height 1.8,
    `color: #666666`).
- **Brand colors:**
  - `#f62a66` — hot pink (THE brand accent): links + hover, active nav
    underline, hero `.position` label, `.btn.btn-primary` bg (white
    text; hover: transparent bg + pink text), `.btn-outline-primary`
    (1px pink border + pink text; hover: solid pink + white text),
    checklist icons, pulsing play button icon, model-card hover panel
    bg, testimonial names + quote badge, `.btn-view` border/text,
    quote-strip link bg, blog heading hover, footer link hover,
    pagination active.
  - `#79efb4` — mint green: Bootstrap-level override of `.btn-primary`
    in the base bootstrap block only; the template's own
    `.btn.btn-primary` overrides it with `#f62a66`. Visible mint is
    limited to stock bootstrap active states (dropdowns/list-groups).
    Do NOT use as the main brand; keep as optional secondary.
  - `#000000` — black: fullscreen nav overlay bg, hero text,
    "Watch our video promo" heading link.
  - `#252525` — footer bg.
  - `#f8f9fa` — light gray (`bg-light`) heading column of the models
    grid.
  - `rgba(0,0,0,0.02)` — section-2 text column bg; `rgba(255,255,255,0.8)`
    — logo subtitle, slider paragraph text, blog heading links in
    footer; `rgba(255,255,255,0.4)` — footer link text;
    `rgba(255,255,255,0.2)` — hero stats cell dividers.
- **Radii:** 50% (70px service icons, 100px testimonial avatars, 40px
  quote badge, pulsing play button), 0.25rem (all buttons).
- **Spacing:** hero height `calc(100vh)` / min 750px; section-2 text
  col padding 7% (15px mobile); `.ftco-section` padding 7em 0; footer
  padding 7em 0; `.model-img` height 430px; models-info cells 14%
  width (20% mobile); quote strip `margin-bottom: -60px` (overlap onto
  footer); slider dots centered bottom.
- **Responsive:** ≤767px — models-info cells 20% inline-block, section-2
  blocks stack (image 100%, text padding 15px), quote strip centered;
  hero slider height 100vh still; footer widgets stack 1-col; stats
  cells wrap.
- **Placeholder images (never copy ColorLib assets):** hero slides 1–4 →
  `https://picsum.photos/seed/glamour-slide-<n>/1600/1000`, split blocks
  → `glamour-about` / `glamour-models-bg` / `glamour-services-bg` /
  `glamour-video` / `glamour-nav-bg`, model cards 1–9 →
  `https://picsum.photos/seed/glamour-model-<n>/600/860` (portrait 430px
  tall), testimonial avatar → `glamour-person/240/240` (circle 100px),
  blog images 1–3 → `glamour-blog-<n>/800/600`, footer block-21 thumbs →
  `glamour-thumb-<n>/160/160`.

## Requirements

### Requirement: Fullscreen off-canvas navigation

The system SHALL render a fixed fullscreen black navigation overlay
(100% × 100%, centered content, hidden by default) with a close
toggle, a background photo on the left half, the brand "Glamour / Model
Agency", and numbered links 01 Home · 02 About · 03 Models · 04 Blog ·
05 Contact, plus a fixed header with the 30px brand and a hamburger
toggle that opens the overlay.

#### Scenario: Header

- **GIVEN** the Glamour page is rendered
- **WHEN** the header is displayed
- **THEN** the brand SHALL read "Glamour" with the subtitle "Model
  Agency" underneath (uppercase, letter-spaced)
- **AND** a hamburger toggle SHALL be shown with `aria-expanded` state

#### Scenario: Opening and closing the overlay

- **GIVEN** the Glamour page is rendered
- **WHEN** the hamburger toggle is activated
- **THEN** a fullscreen black overlay SHALL open with a smooth
  transition
- **AND** the overlay SHALL show the brand "Glamour Model Agency" and
  the numbered links 01 Home · 02 About · 03 Models · 04 Blog · 05
  Contact
- **AND** activating the close toggle SHALL hide the overlay again
- **AND** the "Home" link SHALL be marked active with a pink underline

### Requirement: Full-viewport hero slider

The system SHALL render a full-viewport (min 750px) hero slider of four
model slides, each with a cover portrait background, a pink position
label, a huge white uppercase model name, a stats row
(Height/Bust/Waist/Hips/Shoe/Eyes/Hair), and "Read more" (solid pink)

- "View Gallery" (pink outline) buttons, with pink slider dots to
  switch slides.

#### Scenario: Slide content

- **GIVEN** the Glamour page is rendered
- **WHEN** the hero slider is displayed
- **THEN** each slide SHALL show a pink uppercase position label ("Top
  Model's" / "Super Model's" / "Photo Model's")
- **AND** the slide SHALL show a model name as a large white uppercase
  heading ("Kate Henderson", "Samantha Lewis", "Jessica Alba",
  "Michael Buff")
- **AND** a stats row SHALL list Height 185 · Bust 79 · Waist 40 ·
  Hips 87 · Shoe 40 · Eyes Blue · Hair Brunet in uppercase cells
  separated by light dividers
- **AND** a solid pink "Read more" button and a pink-outline "View
  Gallery" button SHALL be shown

#### Scenario: Slide navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a slider dot or a next/previous control
- **THEN** the slider SHALL advance to the corresponding slide
- **AND** the active dot SHALL be highlighted pink

### Requirement: "Glamour — A Model Agency" split block with video promo

The system SHALL render a two-column split block (photo left, text
right) headed "Glamour A Model Agency" with a paragraph, a pink
checkmark list ("Even the all-powerful Pointing" · "Behind the word
mountains" · "Separated they live in Bookmarksgrove"), and a video
promo row: a pulsing round play button over a photo and a "Watch our
video promo" link.

#### Scenario: Split block layout

- **GIVEN** the Glamour page is rendered
- **WHEN** the first split block is displayed
- **THEN** a full-bleed photo SHALL be shown on the left (text on the
  right on desktop, stacked on mobile)
- **AND** the heading SHALL read "Glamour A Model Agency" (uppercase
  Josefin Sans)
- **AND** three rows with pink checkmark icons SHALL list the bullet
  items
- **AND** a photo with a pulsing pink play button SHALL be shown next
  to a "Watch our video promo" link (16px weight-300)
- **AND** activating the play button/link SHALL open the video (modal
  or external Vimeo link — no copied media)

### Requirement: "Our Top Models" card grid

The system SHALL render a split block with a light-gray heading column
("Our Top Models" + blurb) and nine model cards, each a 430px-tall
portrait with the model name at the bottom, that slides up a hot-pink
panel with name + stats (Height/Bust/Waist/Hips/Shoe) on hover.

#### Scenario: Model cards

- **GIVEN** the Glamour page is rendered
- **WHEN** the model grid is displayed
- **THEN** a light-gray column SHALL show the heading "Our Top Models"
  and a short blurb
- **AND** nine portrait cards SHALL be shown in a responsive grid
  (2–4 per row)
- **AND** each card SHALL show the model name overlaid at the bottom of
  the photo
- **AND** hovering a card SHALL slide up a `#f62a66` panel showing the
  name and the stats Height 185 · Bust 79 · Waist 40 · Hips 87 · Shoe
  40

### Requirement: "Clients Says" testimonials

The system SHALL render a photo-background section with a white overlay
(92% opacity), the heading "Clients Says", and a carousel of centered
testimonials: quote, 100px round avatar with a pink quote badge, pink
name, and position.

#### Scenario: Testimonial cards

- **GIVEN** the Glamour page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the section SHALL have a cover background photo with a white
  overlay at 92% opacity
- **AND** the heading SHALL read "Clients Says"
- **AND** each testimonial SHALL show a quote, a round avatar with a
  pink quote badge, a pink name ("Mike Lewis", "Dennis Green"), and the
  position "Architect"
- **AND** the carousel SHALL support navigating between items

### Requirement: "Our Services" split block

The system SHALL render a two-column split block (photo left, text
right) headed "Our services" with four service rows, each a 70px round
`#f62a66` icon with a white icon glyph and a title + blurb: Fashion
Shows · Corporate Events · Commercial Photo Shots · Exhibitions/Trade
Shows.

#### Scenario: Service rows

- **GIVEN** the Glamour page is rendered
- **WHEN** the services block is displayed
- **THEN** the heading SHALL read "Our services"
- **AND** four rows SHALL be shown, each with a 70px round pink icon
  (lucide equivalents: `Sparkles`/`Gem`, `Megaphone`, `ShoppingBag`,
  `Camera`) and the titles Fashion Shows · Corporate Events ·
  Commercial Photo Shots · Exhibitions/Trade Shows with short blurbs

### Requirement: Quote strip overlapping the footer

The system SHALL render a white quote strip that overlaps the footer by
60px (negative margin + shadow), with the uppercase heading "Wanna be a
Model?" and a pink "Call us now to know how!" link.

#### Scenario: Quote strip

- **GIVEN** the Glamour page is rendered
- **WHEN** the quote strip is displayed
- **THEN** the strip SHALL show "Wanna be a Model?" in white uppercase
  24px letter-spaced text and a short paragraph
- **AND** a pink link pill reading "Call us now to know how!" SHALL be
  shown
- **AND** the strip SHALL overlap the top of the footer by 60px on
  desktop (centered on mobile)

### Requirement: Recent Blog band

The system SHALL render a blog band with a heading column ("Recent
Blog" + blurb + outlined "View more" link) and three blog cards, each a
cover image, meta row (date · Admin · comment count), and a linked
title (hover pink).

#### Scenario: Blog cards

- **GIVEN** the Glamour page is rendered
- **WHEN** the blog band is displayed
- **THEN** a heading column SHALL show "Recent Blog", a blurb, and a
  pink-outlined "View more" link
- **AND** three cards SHALL be shown, each with a cover image, a meta
  row ("August 12, 2018 · Admin · 3"), and the title "Asia's Next Top
  Model"
- **AND** hovering a title SHALL turn it `#f62a66`

### Requirement: Dark footer with four widgets

The system SHALL render a `#252525` footer with four widgets — brand +
blurb + social icons, "Recent Blog" entries (thumb + title + meta),
"Site Links" (Home · About · Model · Services · Blog), and "Have a
Questions?" contact rows (address, phone, email) — plus a centered
bottom bar with the © line and a reworded credit (no Colorlib link-back
requirement).

#### Scenario: Footer layout

- **GIVEN** the Glamour page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a `#252525` background with four
  widgets in a row on desktop (stacking on mobile)
- **AND** the first widget SHALL show the brand "Glamour", a blurb,
  and social icon links (inline SVG brand icons, NOT lucide brand
  icons)
- **AND** the "Recent Blog" widget SHALL show entries with a thumbnail,
  an 18px title link (hover pink), and a 12px meta row
- **AND** the "Site Links" widget SHALL list Home · About · Model ·
  Services · Blog
- **AND** the "Have a Questions?" widget SHALL show address, phone, and
  email rows with icons
- **AND** a centered bottom bar SHALL show "Copyright © [current year]
  All rights reserved | This template is made with ♥ by Component Dock"
  (reworded credit, keeping the © line and heart)

### Requirement: Responsive behavior

The system SHALL stack all multi-column sections to single columns on
mobile: split blocks stack (photo above text), model cards 2 per row,
stats cells inline-block at 20% width, quote strip centered, footer
widgets stacked.

#### Scenario: Mobile layout (≤767px)

- **GIVEN** the Glamour page is rendered on a viewport ≤767px
- **WHEN** the page is displayed
- **THEN** the hero slider SHALL remain full-viewport with the stats
  cells wrapping inline-block
- **AND** the split blocks (about, models, services) SHALL stack
  vertically with text padding reduced to 15px
- **AND** the model cards SHALL show 2 per row
- **AND** the quote strip SHALL be centered
- **AND** the footer widgets SHALL stack vertically

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-glamour`
- [ ] `scripts/verify-app.sh glamour` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with source): fullscreen off-canvas nav
      (black overlay, numbered links 01–05, Home active pink) + fixed
      header (brand "Glamour/Model Agency" + hamburger toggle) →
      full-viewport hero slider (4 slides: pink position label, 50px
      name, stats row, solid + outline pink buttons, pink dots) →
      split "Glamour A Model Agency" (photo + checklist + pulsing
      play + "Watch our video promo") → "Our Top Models" grid
      (bg-light heading col + 9 cards, hover pink stats panel) →
      "Clients Says" testimonials (photo bg + white overlay .92, round
      avatar + pink quote badge, pink names) → "Our services" (4 rows
      with 70px round pink icons) → "Wanna be a Model?" quote strip
      (-60px overlap) → Recent Blog (heading col + "View more" + 3
      cards) → footer `#252525` (4 widgets + © bar)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#f62a66`
      (brand pink), `#000000`, `#252525` (footer), `#f8f9fa`
      (models heading col); radii 0.25rem buttons / 50% circles
- [ ] Fonts: Josefin Sans (headings) + Rubik (body) via Google Fonts
      `<link>` in `index.html`, title "Glamour — Model Agency
      Template"
- [ ] All imagery via picsum seeds (glamour-slide-1..4 / -about /
      -video / -nav-bg / -model-1..9 / -person / -blog-1..3 /
      -thumb-1..2) — NEVER copy ColorLib images; icons from
      `lucide-react` (social brand icons as inline SVG)
- [ ] Interactions: nav overlay toggle (`aria-expanded`), hero slider +
      testimonial carousels (index-based with dots), model card hover
      panels, "Watch our video promo" opens modal/external link;
      `aria-label`s on icon-only controls
- [ ] Mobile (≤767px): split blocks stack, stats cells inline-block
      20%, quote strip centered, footer widgets stack
- [ ] Copy kinds kept: "Look A Model Agency", "Watch our video promo",
      "Our Tops Model's", "Clients Says", "Our services", Fashion
      Shows · Corporate Events · Commercial Photo Shots ·
      Exhibitions/Trade Shows, "Wanna be a Model? Call us now to know
      how!", "Recent Blog" / "View more" / "Asia's Next Top Model",
      footer widgets (Recent Blog / Site Links / Have a Questions?) +
      reworded credit
- [ ] TEMPLATES.md bookkeeping when shipped: mark ALL THREE "Look" dup
      rows (lines 443 / 1085 / 1716) `[x]` with the glamour surge URL
