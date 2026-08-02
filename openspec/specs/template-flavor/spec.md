# Template: Flavor (Astro Template)

## Purpose

Flavor is a single-page restaurant landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Flavor 6"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Flavor 6" — restaurant template
  (source: https://colorlib.com/wp/template/flavor-6/).
- **Demo DOM analyzed:** https://flavor-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/flavor-6/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `assets/js/products.js`). The TEMPLATES.md screenshot
  (`flavor-template-1770211372273.jpg`) is the visual reference; the design
  below is reconstructed from the DOM structure and Tailwind classes.
  The demo's brand is "La Tavola — Authentic Italian Cuisine"; the recreation
  renames the restaurant to "Flavor".
- **Section order (1:1):**
  1. Navbar: Home, Menu, About, Gallery, Contact (+ brand name).
  2. Hero: "Authentic Italian Cuisine" + blurb ("…Italian traditions, crafted
     with love and served with passion since 1985.") + Reserve a Table /
     View Our Menu / Our Story buttons.
  3. Story: "A Family Tradition of Excellence" — "For nearly four decades,
     La Tavola has been bringing the authentic flavors of Italy to our
     community…" (two-column with image).
  4. Chef's Selections: heading + dish cards — Burrata ($18), Spaghetti alla
     Carbonara ($24), Branzino al Forno ($38), Tiramisu ($12) with
     descriptions and a "Chef's Pick" badge / "View Full Menu" link.
  5. Reviews & Testimonials: "What Our Guests Say" + quote cards with
     reviewer name, source (Yelp), and date.
  6. Make a Reservation: dark section with a form (name, email, date, time,
     guests, dietary-notes textarea) + "Request Reservation" submit + "We'll
     confirm your reservation via email within 2 hours" note.
  7. Gallery: "A Glimpse of La Tavola" — image grid (dining room, pasta
     dish, wine selection, restaurant interior).
  8. Footer: brand + tagline, phone, Quick Links / Hours / Newsletter
     columns, Subscribe button, copyright.
- **Design tokens extracted from the DOM:**
  - Brand color: **#dc2626** (red-600; hover red-700 #b91c1c) — primary
    buttons, prices, accents; the site uses a `primary` palette.
  - Neutrals: white / gray-50 / gray-100 / gray-300 / gray-500 / gray-700 /
    gray-800 / gray-900; dark mode via `dark:` classes (gray-950/900).
  - Fonts: **"Inter"** (body) + **"Playfair Display"** (display) via Google
    Fonts.
  - Shapes: rounded-lg buttons/inputs, rounded-xl/2xl cards, pill badges.
  - Alternate section backgrounds: white ↔ gray-50; reservation section on
    dark gray-900.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/flavor-<n>/<w>/<h>`); icons → lucide-react; Inter +
  Playfair Display via Google Fonts; repo-standard Navbar (dark-mode toggle)
  - Footer chrome.

Flavor lives in `apps/flavor` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Flavor",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Flavor page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Flavor" and links to Menu, About, and Gallery
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Authentic Italian Cuisine"
- **AND** it SHALL show a blurb mentioning the restaurant's traditions
- **AND** it SHALL show a "Reserve a Table" button and a "View Our Menu" button

### Requirement: Story section

The system SHALL render a story section with a heading and descriptive copy.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the story section is displayed
- **THEN** it SHALL contain a heading "A Family Tradition of Excellence"
- **AND** it SHALL show descriptive copy about authentic Italian flavors

### Requirement: Menu section

The system SHALL render a "Chef's Selections" section with at least four dish
cards, each with a title and a price.

#### Scenario: Menu content

- **GIVEN** the page is rendered
- **WHEN** the menu section is displayed
- **THEN** it SHALL contain a heading "Chef's Selections"
- **AND** it SHALL show dish cards for Burrata, Spaghetti alla Carbonara, Branzino al Forno, and Tiramisu
- **AND** each dish card SHALL show a price

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least two review cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Guests Say"
- **AND** it SHALL show at least two review cards with quotes and reviewer names

### Requirement: Reservation section

The system SHALL render a reservation section with a form including name,
email, date, time, guests, and dietary-notes fields, and a submit button.

#### Scenario: Reservation form

- **GIVEN** the page is rendered
- **WHEN** the reservation section is displayed
- **THEN** it SHALL contain a heading "Make a Reservation"
- **AND** it SHALL show a form with name, email, date, time, guests, and dietary-notes fields
- **AND** it SHALL show a "Request Reservation" submit button

### Requirement: Gallery section

The system SHALL render a gallery section with a heading and at least four
images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "A Glimpse of Flavor"
- **AND** it SHALL show at least four gallery images

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show a newsletter signup with a Subscribe button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Flavor app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Flavor — Restaurant Template"
