# Template: Timepiece (Tech Product Landing)

## Purpose

Timepiece is a single-page tech product landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Watch" free template (source:
https://colorlib.com/wp/template/watch/), built under a DIFFERENT name
(**Timepiece**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a Bootstrap-based single-page landing for a smartwatch
product (Apple Watch). It features a full-screen hero banner with
gradient overlay, a video/about section, a features grid with a central
product image, a full-width about section with split layout, a 6-card
service grid, a dark-background product showcase with 4 product cards,
a 6-card review grid with star ratings, a Bootstrap accordion FAQ
section, and a 3-column footer with newsletter signup and social links.

**WHAT MAKES TIMEPIECE DISTINCT (signature behaviors):**

1. **Full-screen hero with background image + gradient overlay.**
   The banner uses a background image (`header-bg.png`) with
   `background-size: cover` and centered, overlaying content on a
   dark semi-transparent layer. The hero text is white, uppercase
   subtitle + large heading + white "Buy Now" CTA button.

2. **Blue-to-cyan gradient primary button.** The `.primary-btn`
   uses a `linear-gradient(0deg, #235ee7 0%, #4ae7fa 100%)` — a
   blue-to-cyan diagonal gradient. Border-radius is 25px (pill).
   In the hero, the button is white bg with transparent hover. In
   the video section, it's dark `#222`. In the product showcase,
   it uses the gradient.

3. **Product showcase on dark background.** The "Unique Feature"
   section has a `#191919` dark background with white text, showing
   4 product cards (watch images) each with title, price (£399.00),
   and "Pre Order" gradient button. On hover, the product image
   scales and a gradient overlay appears.

4. **Split about section with full-bleed image.** The "Home About"
   section uses `container-fluid` with a left column (full-bleed
   image) and right column (text + "Get Details" CTA). No gap
   between the columns.

5. **6-card review grid with star ratings.** Reviews use Font Awesome
   star icons (filled vs empty), each card showing a name, review
   text, and 1-5 star rating. The star colors match the brand blue
   `#235ee7`.

## Naming

The ColorLib source name "Watch" is FORBIDDEN as the app name. **Timepiece**
is the new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md name
(verified: no existing `timepiece` app or spec). Source slug + preview URL
are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Watch" (page title: "Watch"). Listed in
  TEMPLATES.md under the main template list. Source slug: `watch`.
- **Live preview — REACHABLE (verified 2026-09-15 by direct fetch):**
  `https://preview.colorlib.com/theme/watch/` returns 29,352 bytes of
  HTML. Stylesheets: `css/linearicons.css`, `css/font-awesome.min.css`,
  `css/bootstrap.css`, `css/magnific-popup.css`, `css/nice-select.css`,
  `css/animate.min.css`, `css/owl.carousel.css`, `css/main.css` (36,534
  bytes — ALL custom styling on top of Bootstrap).
- **Font:** Poppins (Google Fonts, weights 100-700 via Cloudflare CDN
  `@font-face` declarations). Body base: 14px, font-weight 300, color
  `#777777`. Headings: 600 weight, color `#222222`.
- **Live DOM structure (from the fetched HTML + CSS):**
  - `header#header` — sticky navbar: logo image + `nav#nav-menu-container`
    with `ul.nav-menu` items: Home (`#home`), About (`#about`),
    Service (`#service`), Unique Feature (`#unique`), Review (`#review`),
    Faq (`#faq`), Pages (dropdown: Generic, Elements).
  - `section.banner-area#home` — full-screen hero with background image
    (`header-bg.png`, `background-size: cover`). Content: subtitle
    "Now you can feel the Heat" (white, uppercase), heading "Smart New
    Future", white "Buy Now" `.primary-btn` (white bg, transparent hover
    with border).
  - `section.video-sec-area.section-gap#about` — two-column layout.
    Left: subtitle "Brand new app to blow your mind", heading "We've
    made a life that will change you", two paragraphs, dark "Get Started
    now" `.primary-btn` (`#222` bg). Right: YouTube video thumbnail with
    play button overlay (magnific-popup).
  - `section.top-course-area.section-gap` — centered heading "Top
    Courses That are open for Students" with subtitle, then a 3-column
    layout: left column has 2 feature items (rocket, cog icons),
    center column has a product image (`c1.png`), right column has 2
    feature items (apartment, phone icons). Each feature has a Linearicons
    icon, heading "High Performance", and paragraph text. Background
    `#f9f9ff`.
  - `section.home-about-area` — full-bleed split: left column
    (`no-padding`) has `about-img.jpg`, right column (`no-padding`)
    has heading "Globally Connected by Large Network", subtitle,
    two paragraphs, "get details" `.primary-btn`.
  - `section.service-area.section-gap#service` — heading "Some Features
    that Made us Unique" + subtitle, then 3×2 grid of service cards:
    Expert Technicians, Professional Service, Great Support, Technical
    Skills, Highly Recommended, Positive Reviews. Each has a Linearicons
    icon + heading + paragraph.
  - `section.unique-feature-area.section-gap#unique` — dark bg `#191919`,
    white text heading "Some Features that Made us Unique" + subtitle,
    then 4 product cards: each has an image (`u1.jpg`-`u4.jpg`),
    title "Apple Watch White", price "£399.00", "Pre Order" gradient
    button. On hover: image scales, gradient overlay appears.
  - `section.review-area.section-gap#review` — heading "Some Features
    that Made us Unique" + subtitle, then 3×2 grid of review cards.
    Each card has: name (h4), review paragraph, 5 Font Awesome stars
    (filled/empty). Reviews: Cody Hines (3 stars), Chad Herrera (2),
    Andre Gonzalez (2), Jon Banks (3), Landon Houston (4), Nelle Wade (4).
  - `section.faq-area.section-gap#faq` — heading "Frequently Asked
    Questions" + subtitle, Bootstrap accordion with 4 cards: "Are your
    Templates responsive?", "Does it have all the plugin as mentioned?",
    "Can i use the these theme for my client?", "Are your Templates
    responsive?" (duplicate). First card expanded by default.
  - `footer.footer-area.section-gap` — 3 columns: About Us (text +
    copyright with Colorlib attribution → replace with Component Dock),
    Newsletter (email input + arrow button), Follow Us (social icons:
    Facebook, Twitter, Dribbble, Behance).
  - Scripts: jQuery 2.2.4, Popper.js, Bootstrap JS, easing, hoverIntent,
    superfish, ajaxchimp, magnific-popup, owl.carousel, sticky,
    nice-select, parallax, mail-script, main.js.
- **Screenshot (`watch-free-template.jpg`, viewed from TEMPLATES.md
  embed):** Dark navy/blue-tinted hero banner with a smartwatch product
  image, white text overlay ("Smart New Future"), white "Buy Now" pill
  button. Clean, modern tech-product aesthetic with blue as the dominant
  accent color. The overall vibe is a premium electronics/smartwatch
  landing page.

## Design tokens

| Token                | Value                                      | Notes                                                                       |
| -------------------- | ------------------------------------------ | --------------------------------------------------------------------------- |
| `--color-brand`      | `#235ee7`                                  | Primary blue — used in gradient, buttons, FAQ active state, star colors     |
| `--color-brand-light`| `#4ae7fa`                                  | Cyan end of gradient — primary-btn gradient end                             |
| `--color-teal`       | `#4cd3e3`                                  | Secondary accent — service icons, unique-feature hover overlays             |
| `--color-sky`        | `#38a4ff`                                  | Tertiary blue — review section accent                                       |
| `--color-dark`       | `#191919`                                  | Unique-feature section background                                           |
| `--color-ink`        | `#222222`                                  | Heading text color (h1-h6)                                                  |
| `--color-body`       | `#777777`                                  | Body/paragraph text color                                                   |
| `--color-bg-alt`     | `#f9f9ff`                                  | Top-course section background (light lavender)                              |
| `--color-bg`         | `#fff`                                     | Default section backgrounds                                                 |
| `--color-white`      | `#fff`                                     | Hero text, button text, dark-section text                                   |
| `--color-star`       | `#235ee7`                                  | Filled star color (matches brand)                                           |
| `--color-star-empty` | default (grey)                             | Empty star color                                                            |
| `--font-body`        | 'Poppins', sans-serif                      | Google Fonts 300/400/500/600/700; body base 14px/1.6 weight 300             |
| `--btn-radius`       | `25px`                                     | Primary button border-radius (pill shape)                                   |
| `--btn-gradient`     | `linear-gradient(0deg, #235ee7, #4ae7fa)` | Primary button background — blue-to-cyan diagonal gradient                  |
| `--section-gap`      | `100px 0 70px 0`                           | Standard section padding (`.section-gap`)                                   |
| `--hero-height`      | `100vh` (fullscreen)                       | Banner area uses `.fullscreen` class with `min-height: 100vh`               |

## Requirements

### Requirement: Navbar

The system SHALL render a sticky top navigation bar with logo and menu
links.

#### Scenario: Desktop navbar

- **GIVEN** the Timepiece app is rendered on a desktop viewport
- **THEN** a sticky header SHALL render with a logo image on the left
  and a horizontal nav menu on the right
- **AND** the nav items SHALL be: Home, About, Service, Unique Feature,
  Review, Faq (no "Pages" dropdown — omit Generic/Elements as they are
  separate templates)
- **AND** clicking a nav item SHALL smooth-scroll to the corresponding
  section

#### Scenario: Sticky behavior

- **GIVEN** the user scrolls past the hero
- **THEN** the header SHALL remain fixed at the top of the viewport
  with a background color/shadow for contrast

### Requirement: Hero banner

The system SHALL render a full-screen hero section with background image,
overlay, subtitle, heading, and CTA button.

#### Scenario: Hero content

- **GIVEN** the Timepiece app is rendered
- **THEN** the hero SHALL display a background image covering the full
  section with a dark semi-transparent overlay
- **AND** a white uppercase subtitle "Now you can feel the Heat" SHALL
  render above the heading
- **AND** a large white heading "Smart New Future" SHALL render
- **AND** a white "Buy Now" pill button (25px radius, white bg, transparent
  hover with white border) SHALL render below the heading
- **AND** the hero SHALL be full viewport height (100vh)

#### Scenario: Hero responsive

- **GIVEN** a viewport at or below 1199px
- **THEN** the hero height SHALL cap at 800px

### Requirement: Video/About section

The system SHALL render a two-column section with text content on the
left and a video thumbnail with play button on the right.

#### Scenario: Video section content

- **GIVEN** the Timepiece app is rendered
- **THEN** the section SHALL display a subtitle "Brand new app to blow
  your mind"
- **AND** a heading "We've made a life that will change you"
- **AND** a paragraph with the tagline and lorem ipsum body text
- **AND** a dark "Get Started now" button (`#222` bg, white text,
  25px radius)
- **AND** the right column SHALL show a video thumbnail with a play
  button overlay (opens a lightbox/magnific-popup style modal)

### Requirement: Features grid (Top Courses)

The system SHALL render a centered heading with a 3-column layout
flanking a central product image.

#### Scenario: Features grid content

- **GIVEN** the Timepiece app is rendered
- **THEN** a centered heading "Top Courses That are open for Students"
  with subtitle SHALL render
- **AND** the layout SHALL show: left column with 2 feature items,
  center column with a product image, right column with 2 feature items
- **AND** each feature item SHALL have an icon (Linearicons → lucide),
  heading "High Performance", and description paragraph
- **AND** the section background SHALL be `#f9f9ff` (light lavender)

### Requirement: Split about section

The system SHALL render a full-bleed two-column section with an image
on the left and text content on the right.

#### Scenario: About section content

- **GIVEN** the Timepiece app is rendered
- **THEN** the left column SHALL display a full-bleed image
- **AND** the right column SHALL display heading "Globally Connected
  by Large Network", a tagline paragraph, a body paragraph, and a
  "get details" CTA button (25px radius)
- **AND** there SHALL be no gap between the columns (full-bleed layout)

### Requirement: Service grid

The system SHALL render a 6-card grid of service features.

#### Scenario: Service grid content

- **GIVEN** the Timepiece app is rendered
- **THEN** a heading "Some Features that Made us Unique" with subtitle
  SHALL render
- **AND** a 3×2 responsive grid SHALL display 6 service cards:
  Expert Technicians, Professional Service, Great Support, Technical
  Skills, Highly Recommended, Positive Reviews
- **AND** each card SHALL have a Linearicons icon (→ lucide), heading,
  and description paragraph

### Requirement: Product showcase (Unique Feature)

The system SHALL render a dark-background section with 4 product cards.

#### Scenario: Product showcase content

- **GIVEN** the Timepiece app is rendered
- **THEN** the section SHALL have a dark `#191919` background with
  white text
- **AND** a heading "Some Features that Made us Unique" with subtitle
  SHALL render in white
- **AND** 4 product cards SHALL display in a row: each with a product
  image, title "Apple Watch White", price "£399.00", and a "Pre Order"
  gradient button (blue-to-cyan, 25px radius)
- **AND** hovering a product card SHALL show a gradient overlay and
  scale the image

#### Scenario: Product showcase responsive

- **GIVEN** a viewport at or below 991px
- **THEN** the product cards SHALL stack into a 2-column grid

### Requirement: Reviews grid

The system SHALL render a 6-card review grid with star ratings.

#### Scenario: Review card content

- **GIVEN** the Timepiece app is rendered
- **THEN** a heading "Some Features that Made us Unique" with subtitle
  SHALL render
- **AND** a 3×2 responsive grid SHALL display 6 review cards
- **AND** each card SHALL show: reviewer name (h4), review paragraph,
  and a row of 5 star icons (filled stars in brand blue `#235ee7`,
  empty stars in grey)
- **AND** the star ratings SHALL match: Cody Hines (3), Chad Herrera
  (2), Andre Gonzalez (2), Jon Banks (3), Landon Houston (4),
  Nelle Wade (4)

### Requirement: FAQ accordion

The system SHALL render a FAQ section with expandable/collapsible items.

#### Scenario: FAQ content

- **GIVEN** the Timepiece app is rendered
- **THEN** a centered heading "Frequently Asked Questions" with
  subtitle SHALL render
- **AND** an accordion with 4 FAQ items SHALL display
- **AND** the first item SHALL be expanded by default
- **AND** clicking a collapsed item SHALL expand it and collapse
  the previously open item
- **AND** the active accordion header SHALL use the brand gradient
  background (`#235ee7` → `#4ae7fa`)

### Requirement: Footer

The system SHALL render a 3-column footer with About, Newsletter,
and Social links.

#### Scenario: Footer content

- **GIVEN** the Timepiece app is rendered
- **THEN** the footer SHALL display three columns:
  1. About Us: heading + description + Component Dock attribution
     (replacing the original Colorlib credit)
  2. Newsletter: heading "Newsletter" + subtitle + email input +
     submit arrow button
  3. Follow Us: heading + subtitle + social icons (Facebook, Twitter,
     Dribbble, Behance → lucide equivalents or Font Awesome)
- **AND** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics.

#### Scenario: Semantics

- **GIVEN** the Timepiece app is rendered
- **THEN** all sections SHALL use semantic HTML (`<header>`, `<nav>`,
  `<main>`, `<section>`, `<footer>`)
- **AND** all images SHALL have meaningful `alt` text
- **AND** the FAQ accordion SHALL use `aria-expanded` and `aria-controls`
- **AND** the newsletter form SHALL have a labeled email input
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements

### Requirement: Component Dock footer credit

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Timepiece app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- timepiece` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/watch/: full-screen hero with
      background image, blue gradient buttons, dark product showcase,
      split about section, 6-card service grid, 6-card review grid with
      stars, accordion FAQ, 3-column footer.
- [ ] Behavior check: smooth-scroll navigation, sticky header, FAQ
      accordion expand/collapse, product card hover effects, newsletter
      form (no real submit).
- [ ] Responsive check at 768px and 991px: product cards stack to 2-col,
      service/review grids stack appropriately, hero caps at 800px.
