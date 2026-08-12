# Template: Barbell (Health Fitness)

## Purpose

Barbell is a single-page gym/fitness website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Crossfit 2" website template
(source: https://colorlib.com/wp/template/crossfit-2/), built under a
DIFFERENT name (Barbell — a weightlifting bar, re-branded) per the monorepo
naming mandate (never reuse the ColorLib source name), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-08-10): the preview URL with the TEMPLATES.md slug
> `https://preview.colorlib.com/theme/crossfit-2/` returns HTTP 404, but the
> product map (`preview.colorlib.com/assets/js/products.js`) lists the demo
> slug as `crossfit2` (no hyphen), and
> `https://preview.colorlib.com/theme/crossfit2/` returns HTTP 200 — that is
> the live demo analyzed below (25 KB HTML + `css/style.css`, 33 KB).
> The TEMPLATES.md screenshot (`crossfit2-free-template.jpg`, 1200×946) was
> viewed in a browser and matches the live render 1:1 (layout, colors,
> section order).

The reference is an energetic dark-and-lime CrossFit gym template: a
transparent header (logo + uppercase Oswald nav Home / About us / Classes /
Blog / Contact + phone pill + lime search button) over a full-width 3-slide
hero carousel (photo backgrounds, 90px white "What is Crossfit?" headline,
lorem paragraph, lime uppercase "Read More" button, 84×84 dark square
carousel arrows); a split "Book Your First Class" booking strip (left lime
photo panel with 48px white headline, right light-grey `#F3F4FF` form panel
with Name / Phone / E-mail inputs and a lime "Submit" button); a white
"Join Our Gym Today" services section with 4 lime tiles (icon + label:
Crossfit, Fitness, Climbing, Cardio + Streching); a full-width photo quote
section ("During the hard times, it's important to focus on the things you
can change..." — Annie Thorisdottir, Crossfit athlete); a split "Lifestyle &
Diet" section (text left with Read More, photo right); a 3-column full-bleed
photo boxes row with giant bottom-centered labels (Crossfit, WOD, Kids &
Teens); a lime "Come & Train With Us" call-to-action band with a dark "Join
Now" button; a full-width Google Map (585px) with a dark translucent address
card (street + phone/email); and a `#081624` footer with a small copyright
line left and 5 social circles right (hover reveals a lime disc). Typography
is Oswald (headings, nav, buttons — uppercase) + PT Sans (body). Barbell
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets — seeded picsum photos,
Google Fonts, lucide-react icons).

## Design reference (replication findings)

- **Original:** ColorLib "Crossfit 2" — free gym/CrossFit website template
  (meta description: "Yoga Studio Template", page title "CrossFit |
  Template"; TEMPLATES.md category **Health Fitness (72)**; also listed as a
  dup row under **Bootstrap (216)**, line 370 vs 1832 — same source, one
  item). The recreation brands itself **Barbell** but keeps the same section
  structure, copy kinds and interaction patterns.
- **Live preview DOM analyzed (verified 2026-08-10):**
  `https://preview.colorlib.com/theme/crossfit2/` (HTTP 200, 25 KB).
  Bootstrap-based single page (no subpages in the demo besides nav links).
- **Visual design (TEMPLATES.md screenshot `crossfit2-free-template.jpg`,
  1200×946, viewed in browser 2026-08-10 + live render):** dark navy
  `#081624` + lime green `#82D026` palette on white/`#F3F4FF`; square
  (0-radius) buttons; hero = kettlebell lifter photo over snowy mountains
  with big white headline; booking strip half lime photo / half light-grey
  form; 4 lime service tiles; photo quote band; Lifestyle & Diet split;
  3 photo boxes with huge labels; lime CTA band; map + dark address card;
  dark footer. Sporty, high-contrast, flat Bootstrap-era aesthetic.
- **Section order (1:1, verified from live DOM):**
  1. `header.header-section` — transparent over hero; container-fluid;
     `.inner-header .logo` (image, floats left, padding 27px 40px); right
     `.main-menu` (uppercase Oswald 15px 500 links `#081624`, padding
     36px 20px, active link = lime bg + white text): Home (active), About
     us, Classes, Blog, Contact; then `.phone-num` pill (bg `#F3F4FF`,
     padding 31px 54px, lime 34px circle phone icon + number
     "+546 990221 123"); then `.search-btn` (lime bg `#82D026`, 22px white
     search icon, padding 30px 35px).
  2. `.hero-slider` — `.hero-items.owl-carousel` with 3 identical-structure
     `.single-hero-item.set-bg` slides (photo `img/slide-N.jpg`, height
     703px, padding-top 220px): `.hero-text` h1 "What is Crossfit?" (90px,
     white, weight 700) + lorem paragraph (white) + `a.primary-btn`
     "Read More". Owl nav arrows: 84×84 `#081624` squares, white 30px
     glyphs, hover `#82D026`; slides animate in from below.
  3. `.booking-classes` (container-fluid, `.booking-text`): 2 columns —
     left (col-lg-6): `.booking-heading.set-bg` (photo `img/booking.jpg` +
     lime `#82D026` base, height 280px, padding 75px 0 59px 220px):
     `.booking-inner-text` h2 "Book Your First Class" (48px white) + p
     (white, lorem); right (col-lg-6): `.booking-form` (bg `#F3F4FF`,
     height 265px, padding 71px 30px 20px, 48px-tall borderless Oswald 16px
     inputs with `#858585` placeholders, 30px apart): row of 2 — left col:
     "Your Name", "Your Phone"; right col: "E-mail Address",
     `input.submit-btn` "Submit" (lime `#82D026`, white).
  4. `section.services-section.spad` — centered `.section-title` (h2 "Join
     Our Gym Today", 48px/50px weight 500 `#081624` with a centered 52×7
     lime underline bar 30px above) + lorem p; then 4 `.single-services`
     tiles (col-lg-3 col-md-6): lime `#82D026` bg, centered, padding
     22px/30px, white flaticon icon + white h4 — "Crossfit", "Fitness",
     "Climbing", "Cardio + Streching".
  5. `section.client-says.set-bg` (photo `img/client-bg.jpg`, padding
     200px/195px): `.client-text` h2 (48px/60px white) quote "“During the
     hard times, it's important to focus on the things you can change in
     that moment instead of what you should have or could have done
     differently.”" + h4 "Annie Thorisdottir," + span "Crossfit athlete".
  6. `section.lifestyle-section.spad` (padding 150px/10px): 2 columns —
     left (col-lg-6) `.lifestyle-text` (margin-top 88px): `.section-title`
     h2 "Lifestyle & Diet" + 2 lorem paragraphs + `a.primary-btn`
     "Read More"; right (col-lg-6) `.lifestyle-img` (photo `img/lifestyle.jpg`).
  7. `.boxes-section` (container-fluid): 3 equal `.boxes-item` columns
     (col-lg-4), each `.boxes-pic` (relative, 100% height) full-bleed photo
     (`img/box-N.jpg`) + `.boxes-text` absolute bottom-center with giant h1
     (110px, white, line-height 90%) — labels "Crossfit", "WOD",
     "Kids & Teens".
  8. `section.callto-section` (lime `#82D026` bg, padding 65px/52px,
     centered): `.callto-text` h2 "Come & Train With Us" (48px/50px white)
     - p (white) + `a.primary-btn.callto-btn` "Join Now" (dark `#081624`
       bg, padding 18px 45px).
  9. `.map` (height 585px): full-width Google Maps iframe (NYC embed,
     loading lazy) + `.map-address` overlay `.map-address-text` card
     (`#081624`, 364×385, opacity 0.75, padding 135px 20px 20px 83px, with a
     30px left-arrow notch `:after`): 2 `li` rows — "Main Str, no 23,
     NY, New York PK 23589" and "+546 990221 123
     contact@industryalinc.com".
  10. `footer.footer-section` (`#081624`, padding 35px/30px 40px):
      `.reserved` copyright line left (Oswald 14px 500 white, opacity
      0.37) and `.social-links` right — 5 icon links (pinterest, facebook,
      twitter, dribbble, behance) with a 48px lime circle revealed on
      hover (opacity transition).
  11. `.search-model` — hidden overlay (fade in) with a 45°-rotated "+"
      close switch and a single "Search here....." input (search is
      triggered by the header search button).
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-10):**
  - Brand color: **lime green `#82D026`** — primary buttons, active nav
    link bg, search button bg, phone icon circle, `.section-title h2:after`
    underline bar, `.single-services` tile bg, `.booking-heading` bg,
    `.callto-section` bg, owl-nav hover, social circle hover.
  - Dark navy: **`#081624`** — nav link text, section-title h2 text, hero
    owl-nav arrows, `.callto-btn` bg, `.map-address-text` bg, footer bg.
  - Light background: **`#F3F4FF`** — `.phone-num` pill bg,
    `.booking-form` bg.
  - Muted/placeholder grey: **`#858585`** (placeholders, secondary text).
  - Fonts: **Oswald** (`font-family: "Oswald", sans-serif` — nav, buttons,
    headings, inputs, footer copyright; weights 400/500/700, uppercase)
    - **PT Sans** (`"PT Sans", sans-serif` — body copy; weights 400/700).
      Google Fonts load both via cf-fonts.
  - Buttons (`.primary-btn`): inline-block, 14px weight 500, padding
    22px 55px, white text, bg `#82D026`, letter-spacing 0.5px, Oswald,
    text-transform uppercase, **0 border-radius** (square).
    `.callto-btn` variant: bg `#081624`, padding 18px 45px.
  - Hero: `.single-hero-item` height 703px, padding-top 220px; h1 90px
    white weight 700; p white (margin-bottom 30px); content enters from
    below (opacity 0, top 50px → animate).
  - Section titles: h2 48px/50px weight 500 `#081624`, centered, with a
    centered 52×7px lime bar 30px above (`:after`).
  - Client quote h2: 48px/60px white; callto h2: 48px/50px white;
    booking h2: 48px white; boxes h1: 110px white (line-height 90%).
  - `.single-services`: bg `#82D026`, text-align center, white icon + h4,
    padding-top 22px / bottom 30px, margin-bottom 30px.
  - `.booking-form`: bg `#F3F4FF`, height 265px; inputs 48px tall,
    borderless, Oswald 400 16px, margin-bottom 30px, padding-left 25px;
    placeholders `#858585`.
  - `.map-address-text`: `#081624`, 364×385, opacity 0.75, padding-left
    83px, with a 30px-wide left arrow notch.
  - Footer: `#081624`, padding-top 35px / bottom 30px / sides 40px;
    `.reserved` Oswald 14px 500 white opacity 0.37; social links white
    with a 48px lime circle (`:after`) revealed on hover.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-era
  grid (NO Bootstrap dependency); hero carousel = a small stateful slider
  (useState index, prev/next 84×84 square dark buttons, auto-advance
  optional — no owl.carousel dependency); flaticon fitness icons → lucide
  equivalents (Dumbbell / Flame / Mountain / HeartPulse); photos → seeded
  picsum placeholders (source images must not be copied); Google Fonts
  Oswald + PT Sans via `<link>` in `index.html`; Google Maps iframe kept as
  a lazy-loading embed (same NYC embed pattern) with the dark address card
  overlaid; search overlay = click-to-toggle hidden search input; brand text
  "CrossFit"/"Crossfit" → "Barbell" (logo becomes a styled text logo with a
  lucide Dumbbell icon — the source logo.png is an asset that must not be
  copied); document title "Barbell — Gym & CrossFit Template"; nav links
  About us / Classes / Blog / Contact may point to `#` anchors or the single
  page (demo has subpages but only index is in the preview — render the
  one-page layout only).
- **Verified placeholder seeds (screened 2026-08-12, pixel metric +
  browser vision):** hero slides `picsum.photos/seed/barbell-training/`
  (dark snowy peaks — mirrors the source's mountain hero), `/barbell-lift/`
  (dramatic ocean wave), `/barbell-summit/` (moody mountain lake);
  booking panel `/barbell-box2/` (waterfall, dark base); quote band
  `/barbell-training/` (reused, dark peaks suit white quote text); lifestyle
  photo `/barbell-food/` (cyclist — active-lifestyle scene); boxes
  `/barbell-lift/`, `/barbell-summit/`, `/barbell-box2/` (dark-bottom
  dramatic scenes suit giant white labels). Dark hero/quote photos get a
  subtle ink overlay so white text stays readable (documented deviation —
  the source's own hero photo is a bright snow scene).

Barbell lives in `apps/barbell` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a transparent header over the hero with a logo, the
main navigation, a phone pill, and a search button.

#### Scenario: Header layout

- **GIVEN** the Barbell page is rendered
- **WHEN** the page loads
- **THEN** a header SHALL be shown at the top with the logo on the left
- **AND** the nav SHALL show uppercase links Home (active), About us,
  Classes, Blog, Contact
- **AND** the active Home link SHALL have a lime `#82D026` background with
  white text while the other links are dark `#081624`
- **AND** a phone pill (`#F3F4FF` background) SHALL show a lime circular
  phone icon and the number "+546 990221 123"
- **AND** a lime square search button SHALL be shown at the far right

#### Scenario: Search overlay toggle

- **GIVEN** the header is rendered
- **WHEN** the user clicks the search button
- **THEN** a full-screen search overlay SHALL appear with a "Search
  here....." input and a close switch
- **AND** clicking the close switch SHALL hide the overlay again

### Requirement: Hero carousel

The system SHALL render a full-width hero carousel with three slides, each
with a photo background, headline, paragraph, and CTA button.

#### Scenario: Hero slide content

- **GIVEN** the hero carousel is rendered
- **WHEN** a slide is displayed
- **THEN** it SHALL show a full-bleed photo background (height ~703px)
- **AND** a 90px white headline "What is Crossfit?" SHALL be shown
- **AND** a paragraph of body copy SHALL be shown below the headline
- **AND** a lime uppercase "Read More" button SHALL be shown

#### Scenario: Slide navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the user clicks the left or right dark square arrow
- **THEN** the carousel SHALL move to the previous or next slide
- **AND** all three slides SHALL have the same structure (headline, copy,
  button) with distinct photo backgrounds

### Requirement: Class booking strip

The system SHALL render a two-column booking strip: a lime photo panel with
a booking headline on the left and a light-grey booking form on the right.

#### Scenario: Booking panel and form

- **GIVEN** the page is scrolled to the booking section
- **THEN** the left column SHALL show a photo panel on a lime `#82D026`
  background with the headline "Book Your First Class" (48px white) and a
  short paragraph
- **AND** the right column SHALL show a `#F3F4FF` form panel with the
  inputs "Your Name" and "Your Phone" in the first column and
  "E-mail Address" plus a lime "Submit" button in the second column
- **AND** all inputs SHALL be 48px tall, borderless, with `#858585`
  placeholders

#### Scenario: Booking form submit

- **GIVEN** the booking form is displayed
- **WHEN** the user fills all fields and clicks Submit
- **THEN** the form SHALL validate the inputs (name, phone, valid email
  required)
- **AND** on valid input the form SHALL show a confirmation message
- **AND** on missing/invalid input the form SHALL show inline errors and
  not submit

### Requirement: Services section

The system SHALL render a "Join Our Gym Today" section with four lime
service tiles.

#### Scenario: Service tiles

- **GIVEN** the services section is rendered
- **THEN** a centered section title "Join Our Gym Today" (48px `#081624`)
  SHALL be shown with a short paragraph below
- **AND** the title SHALL have a centered 52×7px lime underline bar above it
- **AND** four lime `#82D026` tiles SHALL be shown in a row (stacking on
  mobile), each with a white icon and white label: "Crossfit", "Fitness",
  "Climbing", "Cardio + Streching"

### Requirement: Client quote band

The system SHALL render a full-width photo section with an athlete quote.

#### Scenario: Quote content

- **GIVEN** the client quote section is rendered
- **THEN** a full-bleed photo background SHALL be shown
- **AND** a 48px white quote SHALL be shown:
  "During the hard times, it's important to focus on the things you can
  change in that moment instead of what you should have or could have done
  differently."
- **AND** the attribution "Annie Thorisdottir," with "Crossfit athlete" in
  a distinct span SHALL be shown below the quote

### Requirement: Lifestyle & Diet section

The system SHALL render a two-column lifestyle section with text on the
left and a photo on the right.

#### Scenario: Lifestyle split

- **GIVEN** the lifestyle section is rendered
- **THEN** the left column SHALL show the section title "Lifestyle & Diet"
  with its lime underline bar, two body paragraphs, and a lime "Read More"
  button
- **AND** the right column SHALL show a full photo

### Requirement: Photo boxes row

The system SHALL render three full-bleed photo columns with giant centered
labels.

#### Scenario: Boxes

- **GIVEN** the boxes section is rendered
- **THEN** three equal-width photo columns SHALL be shown edge to edge
- **AND** each photo SHALL have a giant (110px) white label centered at its
  bottom: "Crossfit", "WOD", "Kids & Teens"

### Requirement: Call-to-action band

The system SHALL render a lime call-to-action band with a dark Join Now
button.

#### Scenario: CTA band

- **GIVEN** the page is scrolled to the call-to-action section
- **THEN** a lime `#82D026` band SHALL be shown with the 48px white
  headline "Come & Train With Us"
- **AND** a white paragraph SHALL be shown
- **AND** a dark `#081624` "Join Now" button SHALL be shown

### Requirement: Map with address card

The system SHALL render a full-width map with an overlaid dark address card.

#### Scenario: Map and address

- **GIVEN** the map section is rendered
- **THEN** a full-width map embed (~585px tall) SHALL be shown
- **AND** a dark translucent `#081624` address card SHALL be overlaid on
  the map showing the street address "Main Str, no 23, NY, New York PK
  23589" and the contact line "+546 990221 123 contact@industryalinc.com"

### Requirement: Footer

The system SHALL render a dark footer with a copyright line and social
links.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **THEN** a `#081624` footer SHALL be shown with the copyright line on the
  left (e.g. "© 2026 All rights reserved | This template is made with by
  Barbell")
- **AND** five social icon links SHALL be shown on the right (Pinterest,
  Facebook, Twitter, Dribbble, Behance)
- **AND** hovering a social icon SHALL reveal a lime circular background
  behind it

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-barbell`
- [ ] `scripts/verify-app.sh barbell` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: header → hero carousel (3 slides) → booking strip
      → services (4 tiles) → client quote → lifestyle split → photo boxes
      (3) → CTA band → map + address card → footer
- [ ] Brand color `#82D026` and dark `#081624` in `@theme`, used via
      Tailwind classes; light `#F3F4FF`, grey `#858585` for the matching
      surfaces
- [ ] Oswald + PT Sans via Google Fonts `<link>` in `index.html`
- [ ] Square buttons (radius 0): primary lime 14px uppercase Oswald,
      padding 22px 55px; Join Now dark `#081624` padding 18px 45px
- [ ] Header transparent over hero; active nav link lime; phone pill
      `#F3F4FF` with lime circle icon; lime search square toggling the
      search overlay ("Search here....." + close switch)
- [ ] Hero: 3-slide carousel, 703px tall, 90px white h1, per-slide photo,
      prev/next 84×84 `#081624` square arrows (hover lime)
- [ ] Booking strip: left lime photo panel 280px with 48px white h2; right
      `#F3F4FF` form panel with 48px borderless Oswald inputs +
      `#858585` placeholders + lime Submit; validation + confirmation
- [ ] Services: centered 48px title with 52×7 lime bar; 4 lime tiles
      (icon + white label), 2×2 on tablet, stacked on mobile
- [ ] Client quote: photo band, 48px white quote, athlete attribution
- [ ] Lifestyle: text left (title + 2 paragraphs + Read More) / photo right
- [ ] Boxes: 3 full-bleed photos, 110px white bottom-centered labels
- [ ] CTA band: lime bg, 48px white h2, dark Join Now button
- [ ] Map: lazy Google Maps embed + dark 364×385 address card (opacity
      0.75) with street + contact rows
- [ ] Footer `#081624`: copyright left (Oswald 14px, white/37%), 5 social
      icons right with lime hover disc
- [ ] Placeholder images via `picsum.photos/seed/barbell-<n>/<w>/<h>`,
      icons from lucide-react, no copied assets; brand "Barbell"
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time
