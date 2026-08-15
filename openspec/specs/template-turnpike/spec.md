# Template: Turnpike (Car Rental)

## Purpose

Turnpike is a single-page car-rental landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Car Rental"
template design
(source: https://colorlib.com/wp/template/car-rental/, TEMPLATES.md line 922
under **Business (365)** — AND a duplicate row on line 2952 under
**Transportation (22)**; BOTH rows must be marked `[x]` with the same surge URL
when done), built under a DIFFERENT name ("Turnpike" — a high-speed road,
matching the rental/road-trip theme) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. The page is a
full landing page: dark hero with a car-booking widget, services cards, about,
car-model showcase, stats counters, testimonials, CTA, blog cards, and a dark
multi-column footer.

## Design reference (replication findings)

- **Original:** ColorLib "Car Rental". NOTE the source slug is `car-rental`
  but the demo's theme folder is **`carrental`** (no hyphen). Distinct from
  "Carrent" (already shipped as `drively`) and "Carrentals" (separate
  `- [ ]` item) — do NOT confuse the three.
- **Preview URL caveat:** the naive pattern
  `https://preview.colorlib.com/theme/car-rental/` returns **HTTP 404**. The
  real live preview is `https://preview.colorlib.com/theme/carrental/`
  (HTTP 200, ~32 KB HTML; verified 2026-08-15). The ColorLib template page's
  "Live Preview" button points at the portal hash
  `https://preview.colorlib.com/#car-rental`; `products.js` has NO entry for
  it. Master stylesheet `css/main.css` (~46 KB) is relative to the
  `carrental/` path. libs: bootstrap 3, jquery, jquery-ui (date/time inputs),
  owl.carousel (model + testimonial carousels), linearicons (service icons),
  font-awesome 4.7, magnific-popup, nice-select. Google Font **Poppins**
  (sans-serif; the font-family used by the template's own rules). Cross-checked
  against the TEMPLATES.md screenshot (`carrental-free-template.jpg`, 1200×946,
  browser-viewed) — consistent: dark hero with a white luxury sedan and lens
  flare, gold tagline + gold CTAs, white booking widget on the hero right, slim
  dark navbar, white services section.
- **Visual design (from DOM + CSS tokens + screenshot):** clean, corporate
  landing page. Slim dark navbar; full-width hero photo (white sedan,
  headlights on) under a heavy `rgba(0,0,0,0.8)` overlay; split hero — left
  column: small gold uppercase tagline, big white uppercase h1, paragraph,
  gold "RENT CAR NOW" button; right column: white booking widget
  ("Book Your Car Today!") with selects + date/time inputs + contact fields
  and a full-width gold submit. Below: white services grid (6 icon cards),
  about band, car-model cards ($149/day, gold price), a SOLID GOLD
  (#fab700) stats band with 5 counters, testimonial carousel, photo CTA band
  with a dark blue-black overlay, light-grey (#f9f9ff) blog grid, and a
  near-black (#04091e) footer.
- **Section order (1:1, from live preview DOM):**
  1. **Header/navbar** — dark bar, logo image left; links: Home, About,
     Cars, Service, Team, Blog, Contact + "Pages" dropdown (Blog Single,
     Elements). Sticky top.
  2. **Banner area (hero)** — full-width `header-bg.jpg` photo +
     `rgba(0,0,0,0.8)` overlay; left: `<h6 class="text-white">` tagline
     "the Royal Essence of Journey" (gold), `<h1 class="text-white
text-uppercase">` "Relaxed Journey Ever", lorem paragraph, gold
     `.primary-btn` "Rent Car Now". Right: white booking widget:
     `<h4>` "Book Your Car Today!" + `<form class="form">` with — Select
     Your Car (options BMW / Farrari / Toyota), Pickup select (Pickup
     One..Four), Drop off select (Drop off One..Four), two "Date & time"
     inputs, "Your name" / "Email address" / "Phone number" text inputs,
     gold submit "Confirm Car Booking".
  3. **Feature area (services)** — white, `.section-gap` (120px 0);
     centered h1 "What Services we offer to our clients" + subtitle "Who
     are in extremely love with eco friendly system."; grid of 6 cards
     (linearicon + title + blurb): Expert Technicians, Professional
     Service, Great Support, Technical Skills, Highly Recomended,
     Positive Reviews.
  4. **Home-about area** — h1 "Globally Connected <br> by Large Network",
     gold span "We are here to listen from you deliver exellence", lorem
     paragraph, primary-btn "get details"; image side (photo/video play).
  5. **Model area (fleet)** — h1 "Choose your Desired Car Model" +
     subtitle; owl carousel of 3 cards, each: car photo (model-right),
     name "Audi 3000 msi" (h4), gold price `$149<span>/day</span>` (h2,
     #fab700, 36px), spec list "Capacity : 04 Person / Doors : 04 / Air
     Condition : Dual Zone / Transmission : Automatic", lorem, gold
     primary-btn "Book This Car Now".
  6. **Facts area** — SOLID `#fab700` gold background; 5 counters (h1,
     white): 2536 Projects Completed, 6784 Really Happy Clients, 1059
     Total Tasks Completed, 2239 Cups of Coffee Taken, 435 In House
     Professionals.
  7. **Reviews area** — h1 "Some Features that Made us Unique" +
     testimonial carousel (6 slides): reviewer name (h4) + quote
     paragraph (e.g. "Accessories Here you can find the best computer
     accessory for your laptop, monitor, printer, scanner, speaker.");
     names: Cody Hines, Chad Herrera, Andre Gonzalez, Jon Banks, Landon
     Houston, Nelle Wade. No star icons.
  8. **Callaction area** — `callaction-bg.jpg` photo + `rgba(4,9,30,0.75)`
     overlay, centered white text: h1 "Experience Great Support", lorem
     paragraph, gold `.callaction-btn` "Reach Our Support Team".
  9. **Blog area** — `#f9f9ff` background; h1 "Latest From Our Blog" + 3
     cards: photo, black date chip "10 Jan 2018" (white text, 115px wide),
     title "Addiction When Gambling Becomes A Problem", excerpt
     "inappropriate behavior ipsum dolor sit amet, consectetur.", meta row
     "15 Likes" + "02 Comments".
  10. **Footer area** — `#04091e` near-black; h6 column headings (white,
      18px/600): About (brand + blurb), Quick links, Features, Resources,
      Follow Us (social icons), Newsletter ("Stay update with our latest"
      - email input + arrow button). Bottom copyright bar — source credits
        Colorlib; recreation replaces it with the mandated Component Dock
        link (https://www.componentdock.com/).

- **Design tokens extracted from `css/main.css` + DOM:**
  - Font: **"Poppins", sans-serif** (template's own rules; load 300–700 via
    Google Fonts `<link>` in index.html).
  - Brand gold **#fab700** — `.primary-btn` bg, `.callaction-btn` bg,
    `.facts-area` bg (solid), model price text, tagline/link accents, hover
    states.
  - Cyan accent **#4cd3e3** (secondary/success accents in the palette —
    mostly unused on this page; keep as a token only if needed).
  - Text: headings **#222222**, body copy **#777777**.
  - Section backgrounds: white (services/about/models/reviews),
    **#f9f9ff** (blog), solid **#fab700** (facts), **#04091e** (footer).
  - Overlays: banner **rgba(0,0,0,0.8)**; callaction
    **rgba(4,9,30,0.75)**.
  - Buttons `.primary-btn`: `#fab700` bg, `#fff` text, line-height 42px,
    padding 0 40–50px, uppercase, border 1px transparent; hover →
    transparent bg + `#fab700` text/border. `.callaction-btn`: gold bg,
    white 600-weight 14px text, padding 10px 40px.
  - Section rhythm `.section-gap`: **120px 0** vertical padding.
  - Blog date chip: `#000` bg, `#fff` 100-weight text, width 115px,
    centered, margin-top 20px.
  - Footer `h6`: `#fff`, 18px, weight 600, margin-bottom 25px.
- **Recreation decisions:** no copied assets — background photos
  (`header-bg.jpg`, `callaction-bg.jpg`, car photos, `b1.jpg`) become
  `https://picsum.photos/seed/turnpike-<n>/<w>/<h>` placeholders (seed a
  road/car-appropriate subject, verify before pinning); linearicons →
  lucide-react icons (User, BadgeCheck/FileBadge, Headphones, Rocket,
  Gem, MessageSquare — verify exports with the typeof probe, lucide
  renamed some glyphs); Poppins via Google Fonts; carousel behaviour
  (models/testimonials) can be static grids in the React recreation
  (keep 3 model cards / 6 testimonial slides visible) unless an
  implementer chooses a light carousel; keep the native form fields with
  labels + per-field validation (zod) per repo error-handling
  conventions; every footer MUST link https://www.componentdock.com/
  ("Component Dock") — this replaces the source's Colorlib credit link.

Turnpike lives in `apps/turnpike` and uses shared components from
`packages/ui` (Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Navbar

The system SHALL render a slim dark sticky navbar with the brand logo on the
left and the primary navigation links on the right.

#### Scenario: Navbar with links

- **GIVEN** the Turnpike page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand/logo on the left
- **AND** the navbar SHALL show the links Home, About, Cars, Service, Team,
  Blog, Contact (desktop; hamburger menu on mobile with the same links)
- **AND** the navbar SHALL stay visible at the top of the page (sticky)

### Requirement: Hero with booking widget

The system SHALL render a full-width photo hero with a dark overlay, a left
content column (tagline, headline, paragraph, CTA), and a right-side booking
widget with a car-booking form.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the user views the hero
- **THEN** the hero SHALL cover the full viewport width with a background
  photo under a dark overlay (rgba(0,0,0,0.8))
- **AND** the left column SHALL show the gold tagline "the Royal Essence of
  Journey" (uppercase), the white uppercase heading "Relaxed Journey Ever",
  a short paragraph, and a gold button "Rent Car Now"
- **AND** the right column SHALL show a white widget titled "Book Your Car
  Today!"

#### Scenario: Booking form fields

- **GIVEN** the booking widget is displayed
- **WHEN** the user inspects the form
- **THEN** the form SHALL contain: a "Select Your Car" select (BMW, Farrari,
  Toyota), a Pickup select, a Drop off select, two date/time inputs, and
  name / email / phone inputs
- **AND** the form SHALL show a full-width gold submit button "Confirm Car
  Booking"
- **AND** the form SHALL validate required fields (showing per-field errors
  and blocking submit until valid)

#### Scenario: Booking submission

- **GIVEN** the booking form is filled with valid values
- **WHEN** the user clicks "Confirm Car Booking"
- **THEN** the system SHALL show a success message confirming the booking
  request (no backend; simulated submission)

### Requirement: Services grid

The system SHALL render a white services section with a centered heading,
subtitle, and six icon cards.

#### Scenario: Services section

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the services section
- **THEN** the section SHALL show the heading "What Services we offer to our
  clients" with the subtitle "Who are in extremely love with eco friendly
  system."
- **AND** the section SHALL show six cards in order: Expert Technicians,
  Professional Service, Great Support, Technical Skills, Highly Recomended,
  Positive Reviews
- **AND** each card SHALL show an icon, a title, and a short blurb

### Requirement: About band

The system SHALL render an about section with a heading, highlighted line,
paragraph, CTA button, and an image (with a play/video affordance).

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the about section
- **THEN** the section SHALL show the heading "Globally Connected by Large
  Network"
- **AND** the section SHALL show the highlighted line "We are here to listen
  from you deliver exellence" (brand color)
- **AND** the section SHALL show a "get details" button (primary style)

### Requirement: Car models showcase

The system SHALL render a fleet section with a heading, subtitle, and three
car-model cards showing name, gold price, spec list, and a booking button.

#### Scenario: Model cards

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the models section
- **THEN** the section SHALL show the heading "Choose your Desired Car Model"
  with a subtitle
- **AND** the section SHALL show exactly three model cards (e.g. "Audi 3000
  msi")
- **AND** each card SHALL show a car photo, the model name, a gold price
  "$149/day", a spec list (Capacity: 04 Person, Doors: 04, Air Condition:
  Dual Zone, Transmission: Automatic), and a gold "Book This Car Now" button

### Requirement: Stats counters

The system SHALL render a solid-gold stats band with five counters and labels.

#### Scenario: Counter band

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the stats band
- **THEN** the band SHALL have a solid `#fab700` background
- **AND** the band SHALL show five counters with labels: 2536 Projects
  Completed, 6784 Really Happy Clients, 1059 Total Tasks Completed, 2239
  Cups of Coffee Taken, 435 In House Professionals

### Requirement: Testimonials

The system SHALL render a reviews section with a heading and a testimonial
list of six reviewers.

#### Scenario: Reviews content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the reviews section
- **THEN** the section SHALL show the heading "Some Features that Made us
  Unique"
- **AND** the section SHALL show six testimonials, each with a reviewer name
  and a quote paragraph (Cody Hines, Chad Herrera, Andre Gonzalez, Jon
  Banks, Landon Houston, Nelle Wade)

### Requirement: Call-to-action band

The system SHALL render a full-width photo band with a dark overlay, centered
white heading, paragraph, and a gold support button.

#### Scenario: CTA band

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the CTA band
- **THEN** the band SHALL show a background photo under a dark overlay
  (rgba(4,9,30,0.75))
- **AND** the band SHALL show the white heading "Experience Great Support"
  and a short paragraph
- **AND** the band SHALL show a gold button "Reach Our Support Team"

### Requirement: Blog grid

The system SHALL render a light-grey blog section with a heading and three
article cards (photo, date chip, title, excerpt, likes/comments meta).

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the blog section
- **THEN** the section SHALL have a `#f9f9ff` background and the heading
  "Latest From Our Blog"
- **AND** the section SHALL show three article cards, each with a photo, a
  black date chip (e.g. "10 Jan 2018"), a title, an excerpt, and a meta row
  with Likes and Comments counts

### Requirement: Footer

The system SHALL render a near-black multi-column footer with link columns,
a newsletter signup, social icons, and a copyright bar linking to Component
Dock.

#### Scenario: Footer columns and newsletter

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** the footer SHALL have a `#04091e` background with column headings
  (About, Quick links, Features, Resources, Follow Us, Newsletter)
- **AND** the newsletter column SHALL show "Stay update with our latest"
  with an email input and a submit button
- **AND** the Follow Us column SHALL show social icons (lucide inline SVGs —
  NOT lucide brand icons, which were removed)

#### Scenario: Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the user views the copyright bar
- **THEN** the bar SHALL contain a link to https://www.componentdock.com/
  ("Component Dock") — the repo mandate for every template's footer

### Requirement: Page composition

The system SHALL compose all sections in the source order in a single page
with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Turnpike app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the sections in this order: navbar, hero
  (with booking widget), services, about, models, stats, testimonials, CTA,
  blog, footer
- **AND** the page SHALL expose the content in a main landmark
- **AND** the document title SHALL be "Turnpike — Car Rental Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh turnpike` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the preview 1:1 (navbar → hero+booking →
      services → about → models → stats → testimonials → CTA → blog →
      footer)
- [ ] Design tokens in `@theme`: brand `#fab700`, text `#222222`/`#777777`,
      light bg `#f9f9ff`, footer `#04091e`, overlays rgba(0,0,0,0.8) /
      rgba(4,9,30,0.75)
- [ ] Font: Poppins via Google Fonts
- [ ] Hero split layout: left tagline/h1/paragraph/"Rent Car Now"; right
      "Book Your Car Today!" widget with car select, pickup/dropoff selects,
      two date/time inputs, name/email/phone, gold "Confirm Car Booking"
- [ ] Booking form validates required fields, blocks invalid submit, shows a
      success message on valid submit
- [ ] Six services cards with icons in the exact source order (Expert
      Technicians … Positive Reviews)
- [ ] Three model cards: name, gold $149/day price, 4-line spec list,
      "Book This Car Now"
- [ ] Solid gold stats band with 5 counters + labels
- [ ] Six testimonials (names + quotes)
- [ ] CTA band with photo + dark overlay, "Experience Great Support",
      "Reach Our Support Team"
- [ ] Blog: `#f9f9ff` bg, 3 cards with date chip, title, excerpt,
      likes/comments meta
- [ ] Footer `#04091e`: link columns + newsletter + social icons +
      copyright bar linking https://www.componentdock.com/
- [ ] Icons: lucide-react only (verify every import with the typeof probe;
      brand/social icons as inline SVG paths — lucide removed brand glyphs)
- [ ] No ColorLib references in any app file (provenance only here,
      TEMPLATES.md, and the PR); no copied assets (picsum placeholders)
- [ ] `TEMPLATES.md` lines 922 AND 2952 (duplicate rows) marked `[x]` with
      the same surge URL by the implementer — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
