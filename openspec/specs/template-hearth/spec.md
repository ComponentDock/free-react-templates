# Template: Hearth (Restaurant Website Template)

## Purpose

Hearth is a single-page restaurant website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Kusina" template design (see TEMPLATES.md), built under a
DIFFERENT name (Hearth — the kitchen fireplace, per the monorepo naming
mandate) with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Kusina" — restaurant website template (Bootstrap 4;
  source: https://colorlib.com/wp/template/kusina/). "Kusina" is Tagalog for
  "kitchen".
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/kusina/
  (HTTP 200, ~49 KB HTML fetched; `css/style.css` ~79.8 KB parsed for tokens;
  plus bootstrap/animate/owl.carousel/magnific-popup/aos/ionicons/datepicker/
  timepicker/flaticon/icomoon sheets). Title: "Kusina - Free Bootstrap 4
  Template by Colorlib". jQuery + owl.carousel (hero slider, menu slider,
  testimony carousel), counterUp-style animated counters, scrollax parallax.
  NOT Tailwind.
- **Screenshot analyzed:** `kusina-free-template.jpeg` (1200×946, TEMPLATES.md
  line 431 — the row appears 3× in TEMPLATES.md at lines 431/1785/2682, one
  prep covers all rows) — split-screen hero: left half white with a large
  black headline ("We Love Delicious Foods"), a paragraph of Duden-river
  placeholder copy, a row of three circular photo thumbs each labelled
  "Australian Organic Beef", and a solid red rounded "Book A Table" button;
  right half a large food photo with prev/next carousel arrows at its bottom
  edge. Nav bar above: "Kusina" logo in bold black sans-serif top-left, links
  (Home active in red, About, Specialties, Reservation, Store, Contact)
  top-right on white. Below the fold: about section in reverse zig-zag —
  interior photo left, right column headed by a red cursive script "About"
  label over a bold black "Welcome to Kusina Restaurant" subheading and
  placeholder copy. Overall: clean white restaurant template with a single
  red (#f34949) accent + red-pink (#f67979) script labels. Matches the live
  DOM 1:1 (the screenshot's "Store" nav label is "Stories" in the live DOM —
  the DOM wins).
- **Section order (1:1, from live preview DOM):**
  1. Navbar (`nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.
ftco-navbar-light`) — transparent, absolute at top:20px, z-index 3; turns
     fixed white with shadow on scroll (`.scrolled`). Brand logo left (img →
     recreate as text "Hearth", bold). `ul.navbar-nav.ml-auto`: Home (active,
     red #f34949), About, Specialties, Reservation, Stories, Contact. Mobile:
     toggler labelled "Menu" opens the collapse panel (dark bg).
  2. Home slider (`section.home-slider.js-fullheight.owl-carousel.bg-white`,
     height 750px) — 2 slides `div.slider-item.js-fullheight`: split layout
     `div.row.d-md-flex.no-gutters.slider-text.align-items-center.
justify-content-end` → `div.one-third.order-md-last.img.js-fullheight`
     (right half, bg image, `.overlay` black) + `div.one-forth.d-flex.
js-fullheight.align-items-center` → `div.text.mt-md-5`: h1 headline
     (slide 1 "Eat Healthy and Natural Foods", slide 2 "We Love Delicious
     Foods"), paragraph ("A small river named Duden flows by their place and
     supplies it with the necessary regelialia. It is a paradisematic
     country."), `div.thumb.mt-4.mb-3.d-flex` (3 `a.thumb-menu` — 80px circle
     bg image + h4 label "Australian Organic Beef"), `p` > `a.btn.btn-primary.
px-4.py-3.mt-3` "Book A Table". Owl prev/next arrows at the image's
     bottom edge (36px circles, hover red).
  3. About (`section.ftco-section.ftco-wrap-about.ftco-no-pb.ftco-no-pt`) —
     `div.row.no-gutters`: left `div.col-sm-5.img.img-2.d-flex.align-items-
center.justify-content-center.justify-content-md-end` (700px interior
     photo, centered play icon), right `div.col-sm-7.wrap-about.py-5`:
     `.heading-section.mt-5.mb-4` (subheading "About" + h2 "Welcome to Kusina
     Restaurant" + 2 Duden/Blind-Text paragraphs) + `div.thumb.my-4.d-flex`
     (3 circular 80px images).
  4. Counter (`section.ftco-section.ftco-counter.img#section-counter`, bg
     image, stellar parallax) — row of 4 `div.col-md.d-flex.justify-content-
center.counter-wrap` > `div.block-18`: `.text`: `strong.number` 40px 500
     white (counts up from 0: 30 / 100 / 50 / 100 — targets from `js/main.js`)
     - `span` 16px rgba(255,255,255,.8) labels: "Years of Experienced",
       "Happy Customers", "Finished Projects", "Working Days".
  5. Menu (`section.ftco-section`) — centered `div.heading-section` (subheading
     "Specialties" + h2 "Our Menu"); grid row of 6 `div.col-md-6.col-lg-4.
menu-wrap` — each: `div.heading-menu.text-center` h3 22px 600 (Breakfast,
     Lunch, Dinner, Desserts, Wine Card, Drinks) + 3 `div.menus.d-flex`
     rows: `div.menu-img.img` 80px circle + `div.text` → `div.d-flex`:
     `div.one-half` (item name, e.g. "Grilled Beef with potatoes",
     "Grilled Crab with Onion") + `div.one-forth` (price, "$29"); rows
     separated by a 1px dashed #e6e6e6 bottom border. After the grid:
     centered `p` > `a.btn.btn-black.py-3.px-5` "View All Menu".
  6. Testimony (`section.ftco-section.testimony-section`, bg image) —
     `div.heading-section.heading-section-white` (subheading "Testimony" in
     rgba(255,255,255,.7) + h2 "Happy Customer"); `div.carousel-testimony.
owl-carousel`: 5 `div.item` > `div.testimony-wrap.text-center.py-4.pb-5`
     — `div.user-img.mb-4` (130px circle photo + `div.quote` white circle
     bottom-right with red quote icon) + `div.text.p-3`: quote paragraph
     ("Far far away, behind the word mountains…") + name "Arthur Browner" +
     span "Customer". Owl dots, active = #f34949.
  7. Staff (`section.ftco-section`) — centered heading (subheading "Chef" +
     h2 "Our Mater Chef" — source typo; implement as "Our Master Chef"); row
     of 4 `div.col-md-6.col-lg-3.ftco-animate` > `div.staff`: `div.img`
     (320px chef photo) + `div.text.px-4.pt-4`: h3 name (John Smooth, Rebeca
     Welson, Kharl Branyt, Luke Simon) + span role (CEO, Co Founder / Head
     Chef / Chef / Chef) + `div.faded` paragraph ("I am an ambitious
     workaholic, but apart from that, pretty simple person.").
  8. Reservation (`section.ftco-section.ftco-no-pt.ftco-no-pb`) —
     `div.row.d-flex`: left `div.col-md-5.ftco-animate.img.img-2` (photo);
     right `div.col-md-7.ftco-animate.makereservation.p-4.p-md-5`:
     `div.heading-section` (subheading "Book a Table" + h2 "Make
     Reservation"); `form`: 6 fields in col-md-6 pairs — text inputs "Your
     Name", "Your Email", "Phone", date input (placeholder "Date",
     datepicker), time input (placeholder "Time", timepicker), `div.select-
wrap` Person select (1 / 2 / 3 / 4+); `div.col-md-12.mt-3` > submit
     `input[type=submit].btn.btn-primary` value "Make a Reservation". Labels
     ("Name", "Email", "Phone", "Time", "Person") 600-weight black above
     inputs; inputs bottom-border style with calendar/clock icons.
  9. Footer (`footer.ftco-footer.ftco-bg-dark.ftco-section`, bg #141313,
     padding 6em 0) — 4 `div.col-md-6.col-lg-3` > `div.ftco-footer-widget.
mb-4`, each h2 18px 700 white:
     - "Hearth" (brand): paragraph ("Far far away, behind the word
       mountains…") + `ul.ftco-footer-social` icon circles (facebook, twitter,
       google, instagram).
     - "Open Hours": 7 rows (Monday 9:00 - 24:00, Tuesday 9:00 - 24:00,
       Wednesday 9:00 - 24:00, Thursday 9:00 - 24:00, Friday 9:00 - 02:00,
       Saturday 9:00 - 02:00, Sunday Closed).
     - "Newsletter": `form.subscribe-form` — email input (placeholder "Enter
       email address", rgba(255,255,255,.1) bg, radius 2px) + red submit
       button.
     - "Instagram": grid of square photo thumbnails.
     - Bottom bar (col-md-12 text-center): "Copyright © All rights reserved
       | This template is made with <heart> by Colorlib" → original
       attribution.
- **Design tokens extracted from the preview CSS (computed values verified in
  the stylesheet):**
  - Brand red: **#f34949** — global `a` color, `a:hover`, active nav link
    (`.ftco-navbar-light .nav-item.active > a` + `.scrolled` variant),
    `.btn.btn-primary` bg/border (hover: transparent bg + red text), home-
    slider owl-nav hover color, `.block-27` pagination circles, testimony
    `.owl-dots .owl-dot.active`, `.testimony-wrap .quote i`, subscribe
    `.submit` bg.
  - Script red: **#f67979** — `.heading-section .subheading` color
    (Lovers Quarrel script labels; white variant = rgba(255,255,255,.7)).
  - Ink: **#000000** — headings (h1/h2/h3), `.makereservation label`, navbar
    link color (light-2 variant), slider overlay (opacity 0), `.staff .text`
    bg is #fff.
  - Paper: **#ffffff** — body/page bg (`.home-slider.bg-white`, content
    sections), `.staff .text` bg, quote badge bg, nav (scrolled) bg.
  - Footer dark: **#141313** — `.ftco-footer` bg.
  - Brown dark: **#3c312e** — `.ftco-bg-dark` (footer class).
  - Dashed divider: **#e6e6e6** — `.menus` border-bottom (1px dashed).
  - Gray text: **#959595** — footer open-hours/secondary text (bootstrap
    gray-600 #6c757d for general muted text).
  - Overlays: counter + testimony sections = full-bleed bg images with dark
    treatment; counter numbers white, testimony text
    rgba(255,255,255,.7); slider right-half image has a black `.overlay`
    (CSS opacity 0 — the image reads full-strength).
  - Fonts: body/UI **"Poppins"** (Arial fallback; body 400, nav 400 14px,
    section h2 700 28px, menu h3 600 22px, counter strong 500 40px, footer
    14px); decorative script **"Lovers Quarrel"** cursive — `.heading-
section .subheading` 50px lh 1, mb -20px, z-index -1 (sits behind the h2
    and overlaps it).
  - Radii: **50%** (80px circular menu images + about/slider thumbs,
    130px testimony user-img, 40px quote badge, social circles, counter
    dots); **2px** (subscribe input + submit, buttons border-radius base
    .25rem from Bootstrap).
  - Shadows: staff card hover shadow, `.thumb-menu` img shadow
    `0 24px 48px -12px rgba(0,0,0,.1)`.
- **Recreation decisions:** all photos → seeded picsum
  (`https://picsum.photos/seed/hearth-<n>/<w>/<h>`): hero slide images
  hearth-1..2 (right-half), hero thumbs hearth-3..5, about photo hearth-6,
  about thumbs hearth-7..9, counter bg hearth-10, menu item images
  hearth-11..28 (one per item), testimony bg hearth-29, user avatars
  hearth-30..34, chef photos hearth-35..38, reservation photo hearth-39,
  footer instagram thumbs hearth-40..45; icons → lucide-react (Play, Quote,
  Calendar, Clock, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram,
  Mail, MapPin, Phone) with brand icons as inline SVG where lucide lacks
  them (google+); fonts Poppins (400/500/600/700) + Lovers Quarrel via
  Google Fonts `<link>` in `index.html`; hero slider + testimony carousel are
  state-based carousels (no new deps); counters count up on view (small
  useIsInView hook + rAF, fake timers in tests). Tokens #f34949 / #f67979 /
  #141313 / #3c312e / #000 / #fff / #e6e6e6 + rgba(255,255,255,.7/.8/.1) in
  `@theme`. Brand "Kusina" → "Hearth" everywhere (footer headings, logo).
  Source typo "Our Mater Chef" → "Our Master Chef". "Stories" nav label
  kept (live DOM). Footer Colorlib credit → original attribution.

Hearth lives in `apps/hearth` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the brand
left and a right-aligned nav, which turns fixed and white after scrolling.

#### Scenario: Navbar content

- **GIVEN** the Hearth page is rendered at the top of the page
- **WHEN** the page loads
- **THEN** the navbar SHALL be transparent, positioned absolutely at the top
  with the brand "Hearth" in bold black on the left
- **AND** the nav SHALL list Home (current, red #f34949), About, Specialties,
  Reservation, Stories, and Contact in Poppins 400 14px
- **AND** a "Menu" toggle SHALL be available on narrow viewports to expand the
  nav links

#### Scenario: Scrolled state

- **GIVEN** the navbar is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become fixed at the top with a white background,
  a subtle shadow, and the active link SHALL stay red

### Requirement: Home slider

The system SHALL render a 750px-tall split hero slider with a text half and a
photo half, plus three circular dish thumbs and a booking CTA.

#### Scenario: Slide content

- **GIVEN** the home slider is rendered
- **WHEN** the page loads
- **THEN** the slider SHALL show one slide at a time, each split into a right
  photo half (full-bleed cover image) and a left text half on white
- **AND** slide 1 SHALL headline "Eat Healthy and Natural Foods" and slide 2
  "We Love Delicious Foods", each with the Duden-river placeholder paragraph
- **AND** each slide SHALL show three 80px circular dish thumbs labelled
  "Australian Organic Beef"
- **AND** each slide SHALL show a solid red "Book A Table" button
  (#f34949 background, white text, rounded)

#### Scenario: Slider navigation

- **GIVEN** the home slider is displayed
- **WHEN** the user clicks a prev/next arrow
- **THEN** the visible slide SHALL change accordingly
- **AND** the arrows SHALL be circular, parked at the bottom edge of the
  photo half, and turn red on hover

### Requirement: About section

The system SHALL render an about section in reverse zig-zag with a photo
column, a heading pair, copy, and three circular thumbs.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a tall interior photo on the left with a
  centered play icon
- **AND** the right column SHALL show the script label "About" (#f67979
  Lovers Quarrel) overlapping the bold black heading "Welcome to Hearth
  Restaurant"
- **AND** two paragraphs of Blind-Text-style copy SHALL follow
- **AND** a row of three 80px circular photos SHALL sit below the copy

### Requirement: Counter strip

The system SHALL render a photo-background strip with four animated
statistics.

#### Scenario: Counter content

- **GIVEN** the counter strip is rendered
- **WHEN** it scrolls into view
- **THEN** four counters SHALL count up from 0 to 30 ("Years of
  Experienced"), 100 ("Happy Customers"), 50 ("Finished Projects"), and 100
  ("Working Days")
- **AND** the numbers SHALL be 40px white Poppins and the labels 16px
  rgba(255,255,255,.8)

### Requirement: Menu section

The system SHALL render a "Specialties / Our Menu" section with six menu
columns of three priced dishes each and a View All Menu button.

#### Scenario: Menu content

- **GIVEN** the menu section is rendered
- **WHEN** the page loads
- **THEN** the centered heading SHALL show the script label "Specialties"
  over the bold heading "Our Menu"
- **AND** six menu columns SHALL render (Breakfast, Lunch, Dinner, Desserts,
  Wine Card, Drinks), each with three dish rows
- **AND** each dish row SHALL show an 80px circular photo, the dish name
  (e.g. "Grilled Beef with potatoes", "Grilled Crab with Onion"), and a
  price ("$29")
- **AND** dish rows SHALL be separated by a 1px dashed #e6e6e6 divider
- **AND** a centered black "View All Menu" button SHALL close the section

### Requirement: Testimony carousel

The system SHALL render a photo-background "Testimony / Happy Customer"
section with a carousel of customer quotes.

#### Scenario: Testimony content

- **GIVEN** the testimony section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL show the white script label "Testimony" over the
  white bold heading "Happy Customer"
- **AND** a carousel SHALL cycle five testimonies, each with a 130px circular
  customer photo, a white quote badge with a red quote icon, a quote
  paragraph, the name "Arthur Browner", and the role "Customer"
- **AND** the carousel dots SHALL highlight the active slide in #f34949

### Requirement: Staff section

The system SHALL render a "Chef / Our Master Chef" section with four chef
cards.

#### Scenario: Staff cards

- **GIVEN** the staff section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL show the script label "Chef" over the bold
  heading "Our Master Chef"
- **AND** four cards SHALL render (John Smooth "CEO, Co Founder", Rebeca
  Welson "Head Chef", Kharl Branyt "Chef", Luke Simon "Chef"), each with a
  320px photo, a white text block with the name, the role, and the
  "ambitious workaholic" placeholder paragraph

### Requirement: Reservation form

The system SHALL render a "Book a Table / Make Reservation" split section
with a photo column and a six-field booking form.

#### Scenario: Reservation form

- **GIVEN** the reservation section is rendered
- **WHEN** the page loads
- **THEN** the left column SHALL show a photo and the right column the script
  label "Book a Table" over the bold heading "Make Reservation"
- **AND** the form SHALL contain labeled inputs for Name ("Your Name"),
  Email ("Your Email"), Phone, Date, Time, and a Person select (1 / 2 / 3 /
  4+)
- **AND** a red "Make a Reservation" submit button SHALL be present and
  blocked until all fields are filled

### Requirement: Footer

The system SHALL render a dark footer with brand/social, open hours,
newsletter, and Instagram widgets plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a #141313 background and four white 18px
  bold widget headings: "Hearth", "Open Hours", "Newsletter", "Instagram"
- **AND** the brand widget SHALL show the about paragraph and circular social
  icon links (Facebook, Twitter, Google, Instagram)
- **AND** the Open Hours widget SHALL list Monday–Saturday 9:00–24:00
  (Friday/Saturday until 02:00) and Sunday "Closed"
- **AND** the Newsletter widget SHALL have an email input
  (rgba(255,255,255,.1) background, radius 2px) and a red submit
- **AND** the Instagram widget SHALL render a grid of square photo
  thumbnails
- **AND** the bottom bar SHALL show the copyright with an original
  attribution

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Hearth app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar and hero in the banner landmark,
  the about, counter, menu, testimony, staff, and reservation sections in
  the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Hearth — Restaurant Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/hearth` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- hearth` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#f34949, #f67979, #141313, #3c312e, #000, #fff, #e6e6e6, rgba(255,255,255,.7/.8/.1), Poppins + Lovers Quarrel) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `hearth-<n>`, Google Fonts link, lucide icons + inline SVG brand icons only)
- [ ] Script subheadings rendered in Lovers Quarrel 50px with the -20px overlap behind the h2 (z-index -1)
- [ ] Counters count up on scroll into view (30/100/50/100) with fake timers in tests
- [ ] Carousels (hero slider, testimony) implemented with client-side state, no new deps
- [ ] Reservation form validates (zod) and blocks submit until complete
