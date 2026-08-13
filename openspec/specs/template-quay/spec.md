# Template: Quay (Interior Design / Portfolio)

## Purpose

Quay is a single-page interior-design studio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Harbor" website template design
(source: https://colorlib.com/wp/template/harbor/), built under a DIFFERENT
name (Quay — a stone landing place on a harbor, keeping the nautical
spirit of "Harbor" while being a new, original name) per the monorepo
naming mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Harbor" — interior design website template
  (source: https://colorlib.com/wp/template/harbor/, category
  "Interior Design / Portfolio"). Template name: "Harbor".
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/harbor/`) is REACHABLE (HTTP 200,
  ~23 KB HTML + `css/style.css` ~21.5 KB + `css/bootstrap.min.css` ~28 KB
  parsed for tokens). Structure below comes from the live preview DOM,
  which is authoritative.
- **Screenshot note:** the TEMPLATES.md screenshot
  (`harbor-free-template.jpg`) shows the same design: white nav with
  lowercase "harbor" logo, full-width hero photo of a bright modern living
  space (kitchen island, red rug/stool accents) with a white content box
  over it, "OUR WORK" section with flat photo grid, blue CTA buttons. One
  discrepancy: the screenshot shows the hero content box on the LEFT side
  of the hero image, while the live preview CSS centers it
  (`left: 50%; transform: translate(-50%, -50%)`) — follow the live
  preview (centered) and note the difference.
- **Hero image screening (2026-08-13):** picsum seeds render arbitrary
  photos (`quay-hero-1` showed a forest — off-theme for an interior
  studio). Subject-screened with the pixel-metric + browser-verify
  pipeline and pinned three verified design-studio/architectural shots:
  `picsum.photos/id/180` (designer workspace flat-lay, warm wood),
  `picsum.photos/id/20` (design desk with books + pencils),
  `picsum.photos/id/1067` (golden-hour city skyline). Portfolio card
  images keep the `picsum.photos/seed/quay-work-<n>` pattern.
- **Section order (1:1, from live preview DOM):**
  1. Navbar (`site-navbar bg-white`, sticky-ish, padding 1rem): three
     columns — left nav (About, Gallery, Contact), center `site-logo`
     (site name "Harbor", 1.7rem), right nav (Home, Work, What We Do).
     Mobile hamburger toggle (`site-menu-toggle`) opens a slide-in
     `site-mobile-menu` panel.
  2. Hero slider (`owl-carousel-wrapper`, height 100vh, min-height 600px):
     an Owl carousel of 3 background slides (`ftco-cover-1`, each with an
     inline `background-image` — hero_1.jpg / hero_2.jpg / hero_3.jpg,
     cover/center) with a single white overlay card (`box-92819`: bg #fff,
     padding 4rem, max-width 500px, box-shadow, absolute centered,
     z-index 2) containing: h1 "Interior Design" (`mb-3 text-black`),
     a short paragraph (lorem), and a `btn btn-primary` "Get In Touch"
     button.
  3. Work section (`site-section`): header row — left `heading-39291` h2
     "Our Work" (uppercase, 20px, bold, #000), right `more-39291` link
     "View All Works" (uppercase 12px bold with arrow spacing); then a
     2×2 grid (col-lg-6) of four `media-02819` portfolio cards, each with
     an image link (img_1..4.jpg), an h3 title "Creative Modern House",
     a location line "New York City, USA", and a read-more link.
  4. Services section (`site-section bg-primary`, brand blue #3e64ff):
     `heading-39291 text-white` h2 "What We Do" + intro paragraph; then a
     3-column grid (col-md-6 col-lg-4) of six `service-29193` cards
     (bg #fff, padding 50px 30px, text-center): flaticon SVG icon
     (002-kitchen, 003-lamp, 001-stairs, 004-blueprint, 006-pantone,
     005-dinning-table), uppercase bold h3 (e.g. "Reiciendis Velit",
     "Incidunt Distinctio", "Modern Elit"), and a lorem blurb.
  5. Testimonials (`site-section section-4`): centered `slide-one-item`
     carousel with 3 slides, each: quote paragraph (lorem) + attribution
     "Name — Role" ("Mike Dorney — CEO and Co-Founder", "James Smith —
     CEO and Co-Founder").
  6. Footer (`site-footer bg-light`; custom CSS overrides bg to #c9ccd4,
     padding 4em 0 / 8em 0 on desktop): column 1 (col-md-6) —
     `footer-heading` "About Us" + about paragraph; column 2 (col-md-4
     ml-auto) — `footer-heading` "Features" + link list (About Us,
     Features, Testimonials, Terms of Service, Privacy); column 3
     (col-md-4 ml-auto) — `footer-heading` "Subscribe" +
     `footer-suscribe-form`: input-group with a `form-control rounded-0
border-secondary bg-transparent` email input + `btn btn-primary
text-white` "Subscribe" button. Bottom row: 4-5 social icon links
     (icomoon font), footer nav links (Home + 4), and the copyright line
     "Copyright © All rights reserved | This template is made with ♥ by
     Colorlib".
- **Design tokens extracted from `css/style.css` + `css/bootstrap.min.css`
  - DOM:**
  * Brand color: **#3E64FF** (vivid blue) — `.btn-primary` bg/border,
    services section bg (`bg-primary`), footer link hover. Hover darkens
    to #1845FF (bg) / #0B3BFF (border).
  * Headings: **#000** (`heading-39291` #000, `.site-footer h2/h3` #000);
    h1 base rule is #fff 3rem (hero slides) but the hero card h1 carries
    `text-black`. Body text dark gray (#212529 / #364d59), footer
    paragraph text `gray`, footer links rgba(0,0,0,0.5).
  * Fonts: **"Playfair Display", serif** (display/serif accent — headings
    per the template's editorial look) + **"Roboto", sans-serif** (body;
    the CSS body rule is `"Roboto", -apple-system, BlinkMacSystemFont,
"Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`). Load both
    via Google Fonts `<link>` in `index.html`.
  * Buttons: Bootstrap `.btn` shape — padding 0.575rem 0.85rem, font
    1rem/1.5, weight 400, border 1px, **border-radius 0.25rem**;
    `.btn-primary` bg #3E64FF, border #3E64FF, white text; hover bg
    #1845FF. Footer subscribe button: `btn btn-primary text-white`
    (rounded-0 input next to it keeps the button's default radius).
  * Section title (`heading-39291`): text-transform uppercase, 20px,
    bold, #000, margin-bottom 30px. In the blue services section it is
    `text-white`.
  * "View All Works" link (`more-39291`): uppercase, 12px, bold, #000,
    padding-right 20px (arrow space), text-decoration none.
  * Hero overlay card (`box-92819`): bg #fff, padding 4rem, max-width
    500px, centered absolutely, z-index 2, Bootstrap `shadow-lg`.
  * Section backgrounds: white (work, testimonials), #3E64FF (services),
    #C9CCD4 (footer; overrides Bootstrap `bg-light` #F8F9FA),
    #F6F5F5 / #F8F9FA light grays used elsewhere.
  * Service card (`service-29193`): bg #fff, padding 50px 30px,
    text-center; h3 uppercase 16px bold.
  * Work card (`media-02819`): margin-bottom 60px, image + h3 + meta line
    - read link; flat, no borders/shadows on images.
  * Footer (`site-footer`): bg #C9CCD4, padding 4em 0 (8em 0 on larger
    screens), links rgba(0,0,0,0.5) → #3E64FF on hover, `footer-heading`
    16px #000, list items margin-bottom 10px.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed/sticky white navbar with a centered logo
and navigation links on both sides, plus a mobile menu toggle.

#### Scenario: Navbar content

- **GIVEN** the Quay page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Quay" as the centered logo
- **AND** the navbar SHALL show nav links About, Gallery, and Contact on
  the left of the logo
- **AND** the navbar SHALL show nav links Home, Work, and What We Do on
  the right of the logo
- **AND** the navbar SHALL have a white background

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user activates the menu toggle
- **THEN** a mobile menu panel SHALL open listing all nav links
- **AND** the toggle SHALL be labeled accessibly (aria-label) and reflect
  open/closed state (aria-expanded)

### Requirement: Hero slider

The system SHALL render a full-viewport hero with a rotating background
slideshow and a white overlay card with the headline, blurb, and CTA.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL fill the viewport height (min 600px)
- **AND** it SHALL show a white card over a full-bleed background image
- **AND** the card SHALL contain the headline "Interior Design"
- **AND** the card SHALL contain a short supporting paragraph
- **AND** the card SHALL contain a primary button labeled "Get In Touch"

#### Scenario: Hero slideshow

- **GIVEN** the hero is displayed
- **WHEN** time passes or the user advances the slider
- **THEN** the background image SHALL change to the next slide
- **AND** the slideshow SHALL have at least three distinct slides
- **AND** slide navigation controls SHALL be accessible (buttons with
  aria-labels) or auto-rotate with pause support

### Requirement: Work section

The system SHALL render an "Our Work" section with a header row and a 2×2
grid of portfolio cards.

#### Scenario: Work section content

- **GIVEN** the page is rendered
- **WHEN** the work section is displayed
- **THEN** it SHALL show the heading "Our Work"
- **AND** it SHALL show a "View All Works" link aligned to the right
- **AND** it SHALL show exactly four portfolio cards in a 2-column grid

#### Scenario: Portfolio card

- **GIVEN** a portfolio card is displayed
- **WHEN** the user views it
- **THEN** it SHALL show an image, a title, a location line, and a
  read-more link
- **AND** the card image SHALL be a placeholder image
  (picsum.photos/seed/quay-<n>/<w>/<h>) with alt text

### Requirement: Services section

The system SHALL render a brand-blue "What We Do" section with a heading,
intro text, and six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL have the brand-blue background (#3E64FF)
- **AND** it SHALL show the heading "What We Do" in white
- **AND** it SHALL show an intro paragraph
- **AND** it SHALL show six service cards in a 3-column grid

#### Scenario: Service card

- **GIVEN** a service card is displayed
- **WHEN** the user views it
- **THEN** it SHALL have a white background with centered content
- **AND** it SHALL show an icon (lucide-react), an uppercase bold title,
  and a short description

### Requirement: Testimonials section

The system SHALL render a centered testimonials carousel.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show one testimonial at a time: a quote paragraph and
  an attribution in "Name — Role" format
- **AND** the user SHALL be able to advance to the next testimonial
- **AND** at least three testimonials SHALL exist in the rotation

### Requirement: Footer

The system SHALL render a light-gray footer with about text, feature
links, a subscribe form, social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an "About Us" heading with an about paragraph
- **AND** it SHALL show a "Features" column with links (About Us,
  Features, Testimonials, Terms of Service, Privacy)
- **AND** it SHALL show a "Subscribe to Newsletter" heading with an email
  input and a "Subscribe" primary button
- **AND** it SHALL show social icon links and the copyright line
  "Copyright © All rights reserved | This template is made with ♥ by
  Component Dock" (the mandatory Component Dock attribution replaces the
  source template's Colorlib line; live preview shows "Subscribe to
  Newsletter" as the form heading)

#### Scenario: Subscribe form

- **GIVEN** the footer subscribe form is displayed
- **WHEN** the user submits an email address
- **THEN** the form SHALL validate the email (zod schema, per repo
  conventions)
- **AND** on success SHALL show a confirmation state (no backend)
- **AND** on invalid input SHALL show a per-field error and block submit

### Requirement: Page composition

The system SHALL compose all sections in the reference order on one page.

#### Scenario: Section order

- **GIVEN** the Quay page is rendered
- **WHEN** the user scrolls from top to bottom
- **THEN** the sections SHALL appear in this order: Navbar, Hero slider,
  Work, Services, Testimonials, Footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] Section order matches the reference 1:1 (Navbar → Hero → Work →
      Services → Testimonials → Footer)
- [ ] Design tokens reproduced in Tailwind `@theme`: `--color-brand`
      #3E64FF, `--color-ink` #000, `--color-fog` #C9CCD4 (footer),
      `--color-mist` #F6F5F5 / #F8F9FA; fonts Playfair Display (headings) + Roboto (body) via Google Fonts `<link>`
- [ ] Buttons match Bootstrap `.btn-primary` shape: padding ~0.575rem
      0.85rem, radius 0.25rem, bg #3E64FF, hover #1845FF
- [ ] Hero: full-viewport slideshow (≥3 slides) with centered white
      overlay card (max-width 500px, padding 4rem)
- [ ] All images are picsum placeholders with alt text; no ColorLib assets
- [ ] Icons from lucide-react (no icon fonts copied)
- [ ] Mobile menu toggle + accessible slideshow controls
- [ ] Footer subscribe form: zod validation, error + success states
- [ ] Tests: one `describe` per component, scenarios mirroring this spec;
      100% coverage (lines/functions/branches/statements)
- [ ] `scripts/verify-app.sh quay` green (typecheck + lint + coverage +
      build)
