# Template: Forno (Restaurant Template)

## Purpose

Forno is a single-page restaurant website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Feliciano"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Feliciano" — restaurant / fine-dining template
  (source: https://colorlib.com/wp/template/feliciano/).
- **Preview URL:** https://preview.colorlib.com/theme/feliciano/ — HTTP 200,
  full rendered DOM analyzed (title: "Feliciano - Free Bootstrap 4 Template by
  Colorlib"); stylesheet `css/style.css` (79 KB) extracted and parsed. No
  Google Fonts import in the CSS — fonts are self-hosted in the demo
  (Poppins + Great Vibes, both from Google Fonts); the recreation loads them
  from Google Fonts instead. Cross-checked against the TEMPLATES.md screenshot
  (`feliciano-free-template.jpg`, viewed) — designs match. The demo brands
  itself "Feliciano"; our recreation uses the NEW name **Forno**.
- **Section order (1:1):**
  1. Top info bar (`py-1 bg-black top`): black slim strip with phone icon +
     "+ 1235 2355 98", paper-plane icon + "youremail@email.com", and
     "Open hours: Monday - Sunday 8:00AM - 9:00PM" right-aligned.
  2. Navbar (`ftco-navbar-light`, transparent over the hero; becomes fixed
     white `.scrolled` on scroll): "Feliciano" brand (script), links HOME /
     ABOUT / MENU / STORIES / CONTACT, and a gold CTA "Book a table" button
     (radius 5px). Mobile: hamburger toggler + collapsed menu.
  3. Hero slider (`home-slider owl-carousel js-fullheight`, 3 slides
     `slider-item` with bg photos bg_1/2/3.jpg + `.overlay` opacity 0.5):
     full-height centered content — Great Vibes script subheading
     "Feliciano" (80px, gold `#c8a97e`) + h1 "Best Restaurant" /
     "Nutritious & Tasty" / "Delicious Specialties". Carousel dots are
     circular dish thumbnails (distinctive touch, optional in recreation).
  4. Welcome / About (`ftco-wrap-about`): two-column — left: restaurant photo
     (+ optional experience/opening badge); right: script "About"
     subheading + h2 "Feliciano Restaurant" + two welcome paragraphs
     (Duden-river copy) + signature-style closing. Below: a small
     "Delicious Specialties" intro heading above the services row.
  5. Services (`ftco-section`): subheading "Services" + h2 "Catering
     Services"; 4 icon cards — Catering Services (h2 doubles as first card),
     Birthday Party, Business Meetings, Wedding Party (icon + title + short
     text, `d-flex` cards).
  6. Menu (`ftco-section bg-light`? — light background): subheading
     "Specialties" + h2 "Our Menu"; 6 menu entries (2-col grid of
     `.menus` rows): square food photo (bg image) + dish name h3 + price
     `$29`-style span + ingredient tags ("Meat, Potatoes, Rice, Tomatoe")
     - "Order now" gold `.btn.btn-primary` link. Demo repeats the same dish
       name — recreation should use 6 distinct plausible dishes.
  7. Counter strip (`ftco-counter img`, bg photo + dark overlay): 4 animated
     counters (number counts up on scroll; labels e.g. Happy Customer /
     Projects / Years of Experience / Awards — demo labels generic).
  8. Chefs (`ftco-section`): subheading "Chef" + h2 "Our Master Chef";
     4 chef cards with photo, name, role (e.g. John Smooth — Restaurant
     Owner, Rebeca Welson, Kharl Branyt, Luke Simon).
  9. Reservation (`ftco-section img`, bg image bg_3.jpg): subheading
     "Book a table" + h2 "Make Reservation"; left: form with "Your Name",
     "Your Email", "Phone", "Date", "Time" inputs (datepicker/timepicker in
     demo → plain text/date inputs in recreation), a select, and a gold
     submit "btn btn-primary py-3 px-5"; right: "Open Hours" card with the
     weekly hours list.
  10. Testimonials (`testimony-section img`, bg photo + overlay): subheading
      "Testimony" + h2 "Happy Customer"; carousel of 3 quotes with 5-star
      rating + author name/role.
  11. Blog (`ftco-section`): subheading "Blog" + h2 "Recent Posts"; 3 post
      cards (photo, date/meta, title, excerpt, "Read more"-style link).
  12. Footer (`ftco-footer ftco-bg-dark` — bg `#3c312e`): 4 columns —
      "Feliciano" brand + blurb + social icons; "Open Hours" list; Instagram
      thumbnail grid; Newsletter email input + subscribe button; bottom
      copyright bar ("Copyright ©<year> All rights reserved | This template
      is made with ♥ by Colorlib" → paraphrased).
- **Design tokens extracted from the live preview CSS (`style.css`):**
  - Brand **gold/tan `#c8a97e`** (28 uses) — links, active nav link, hero
    script subheading, nav CTA bg, `.btn.btn-primary` bg/border, "Order now"
    buttons, form submit, counters, hover states.
  - Body text **`#666666`** (17px, line-height 2); headings near-black
    `#000000` / bootstrap ink `#212529`; muted grays `#6c757d`, `#495057`,
    `#343a40`; light surfaces `#f8f9fa` (bg-light sections), `#fafafa`,
    `#e6e6e6`; footer dark **`#3c312e`** (warm dark brown).
  - Fonts: body/nav **"Poppins", sans-serif** (300–600); decorative
    script **"Great Vibes", cursive** (hero + section subheadings, 80px hero /
    smaller in headings).
  - Buttons: `.btn.btn-primary` — gold `#c8a97e` bg, 1px gold border, white
    text; hover → transparent bg + gold text; nav CTA radius **5px**;
    submit uses `py-3 px-5` padding. Inputs: bootstrap `.form-control`
    (1px `#ced4da`-style border, light bg).
  - Overlays: hero `.overlay` opacity 0.5 over photo; dark overlay on
    counter/testimonial bg-image sections.
  - Spacing: `.ftco-section` padding `7em 0`; hero full-height
    (`js-fullheight`); heading sections centered with script subheading
    above h2.
- **Visual design (from screenshot + live view):** moody fine-dining
  aesthetic — dark charcoal/black hero with heavy photo overlay and centered
  gold script wordmark above bold white uppercase sans h1; thin black top
  info bar; transparent nav turning white on scroll; warm gold `#c8a97e`
  accents throughout; light sections with white cards; dark brown footer.
  Photographic imagery with warm tones; circular dish thumbnails as carousel
  dots.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/forno-<n>/<w>/<h>`); icons → lucide-react (social
  brand icons as inline SVG per repo rule); Poppins + Great Vibes via Google
  Fonts `<link>`; no assets copied. Copy paraphrased but same content kinds
  (contact details, section headings, dish names/prices, chef names, hours).

Forno lives in `apps/forno` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Top info bar

The system SHALL render a slim black top bar above the navigation.

#### Scenario: Top bar content

- **GIVEN** the Forno page is rendered
- **WHEN** the page loads
- **THEN** the top bar SHALL show a phone icon with the number "+ 1235 2355 98"
- **AND** the top bar SHALL show an email icon with "youremail@email.com"
- **AND** the top bar SHALL show "Open hours: Monday - Sunday 8:00AM -
  9:00PM" aligned right
- **AND** the top bar SHALL sit on a black background as a slim strip

### Requirement: Navigation

The system SHALL render a transparent navbar over the hero that turns white
and fixed on scroll.

#### Scenario: Navbar content

- **GIVEN** the Forno page is rendered
- **WHEN** the navbar is displayed at the top of the page
- **THEN** the brand "Forno" SHALL appear on the left
- **AND** the nav SHALL show links Home, About, Menu, Stories, and Contact
- **AND** the nav SHALL show a gold "Book a table" button (radius 5px)
- **AND** the navbar SHALL be transparent while over the hero

#### Scenario: Scroll behavior

- **GIVEN** the Forno page is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become fixed with a white background and shadow

#### Scenario: Mobile navigation

- **GIVEN** the Forno page is rendered on a narrow viewport
- **WHEN** the viewport is below the breakpoint
- **THEN** the nav links SHALL collapse behind a hamburger toggle that opens
  the menu

### Requirement: Hero slider

The system SHALL render a full-height hero carousel with three slides.

#### Scenario: Hero slide content

- **GIVEN** the Forno page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL fill the viewport height with a background photo
  and a dark overlay
- **AND** each slide SHALL show a gold script subheading (the brand name)
  above a large white uppercase heading
- **AND** the slides SHALL show the headings "Best Restaurant",
  "Nutritious & Tasty", and "Delicious Specialties" in order
- **AND** the hero SHALL cycle between slides with prev/next controls (dots
  optional)

### Requirement: Welcome section

The system SHALL render a two-column welcome/about section.

#### Scenario: Welcome content

- **GIVEN** the Forno page is rendered
- **WHEN** the welcome section is displayed
- **THEN** the section SHALL show a restaurant photo on one side and, on the
  other, a script subheading, the heading "Forno Restaurant", and two welcome
  paragraphs
- **AND** the section SHALL show a "Delicious Specialties" intro heading
  above the services row

### Requirement: Services

The system SHALL render four service cards.

#### Scenario: Service cards

- **GIVEN** the Forno page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL show a script "Services" subheading and the
  heading "Catering Services"
- **AND** the section SHALL show four cards: Catering Services, Birthday
  Party, Business Meetings, and Wedding Party
- **AND** each card SHALL show an icon, a title, and a short description

### Requirement: Menu

The system SHALL render a menu section with six dish entries.

#### Scenario: Menu entries

- **GIVEN** the Forno page is rendered
- **WHEN** the menu section is displayed
- **THEN** the section SHALL show a script "Specialties" subheading and the
  heading "Our Menu"
- **AND** the section SHALL list six dishes in a two-column grid
- **AND** each dish SHALL show a photo, a name, a price, ingredient tags,
  and an "Order now" gold button
- **AND** the dishes SHALL have distinct names and prices

### Requirement: Counter strip

The system SHALL render a statistics counter band with a photo background.

#### Scenario: Counters

- **GIVEN** the Forno page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show a background photo with a dark overlay
- **AND** the section SHALL show four statistics with numeric values and
  labels (e.g. Happy Customer, Projects, Years of Experience, Awards)

### Requirement: Chef team

The system SHALL render a team section with four chefs.

#### Scenario: Chef cards

- **GIVEN** the Forno page is rendered
- **WHEN** the chef section is displayed
- **THEN** the section SHALL show a script "Chef" subheading and the heading
  "Our Master Chef"
- **AND** the section SHALL show four chef cards, each with a photo, name,
  and role

### Requirement: Reservation

The system SHALL render a reservation form with an open-hours panel.

#### Scenario: Reservation form

- **GIVEN** the Forno page is rendered
- **WHEN** the reservation section is displayed
- **THEN** the section SHALL show a script "Book a table" subheading and the
  heading "Make Reservation"
- **AND** the form SHALL have fields for name, email, phone, date, time, and
  a select (persons), each with a visible label or placeholder
- **AND** the form SHALL have a gold submit button
- **AND** submitting an empty form SHALL show validation errors and SHALL NOT
  submit

#### Scenario: Open hours panel

- **GIVEN** the Forno page is rendered
- **WHEN** the reservation section is displayed
- **THEN** the section SHALL show an "Open Hours" panel listing the weekly
  hours (Monday – Sunday 8:00AM – 9:00PM)

### Requirement: Testimonials

The system SHALL render a customer testimonial carousel.

#### Scenario: Testimonial carousel

- **GIVEN** the Forno page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the section SHALL show a script "Testimony" subheading and the
  heading "Happy Customer"
- **AND** the section SHALL show at least three quotes, each with a 5-star
  rating and an author name/role
- **AND** the quotes SHALL cycle with carousel controls

### Requirement: Recent posts

The system SHALL render a blog section with three post cards.

#### Scenario: Post cards

- **GIVEN** the Forno page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL show a script "Blog" subheading and the heading
  "Recent Posts"
- **AND** the section SHALL show three post cards, each with a photo, date,
  title, excerpt, and a read-more link

### Requirement: Footer

The system SHALL render a dark footer with four columns and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Forno page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a dark brown background (`#3c312e`)
- **AND** the footer SHALL show a brand column with blurb and social icons
- **AND** the footer SHALL show an "Open Hours" column
- **AND** the footer SHALL show an Instagram thumbnail grid
- **AND** the footer SHALL show a newsletter email input with a subscribe
  button

#### Scenario: Copyright bar

- **GIVEN** the Forno page is rendered
- **WHEN** the footer bottom is displayed
- **THEN** a copyright bar SHALL show the year and the phrase "All rights
  reserved" with a credit line (paraphrased, not claiming ColorLib)

## Verification checklist

- [ ] Spec validated: `npm run spec:validate` passes.
- [ ] App folder `apps/forno`, package `@free-react-templates/forno`; no
      collision with existing apps/specs.
- [ ] Section order matches the reference 1:1 (top bar → nav → hero → welcome
      → services → menu → counter → chefs → reservation → testimonials →
      blog → footer).
- [ ] Brand gold `#c8a97e` in `@theme`; Poppins + Great Vibes via Google
      Fonts `<link>`.
- [ ] Placeholder images: `picsum.photos/seed/forno-<n>/<w>/<h>`; icons from
      lucide-react; no assets copied from the demo.
- [ ] 100% coverage (lines/functions/branches/statements) via
      `npm run test:coverage` for the app.
- [ ] PR description includes: source template (Feliciano), preview URL,
      design tokens used, and what differs (rename, placeholders, distinct
      dish names).
