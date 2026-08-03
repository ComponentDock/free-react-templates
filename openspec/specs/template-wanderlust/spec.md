# Template: Wanderlust (Astro Template)

## Purpose

Wanderlust is a single-page travel agency / tours landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Wanderlust" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Wanderlust" — travel agency / tours landing
  template (source: https://colorlib.com/wp/template/wanderlust/).
- **Demo DOM analyzed:** https://wanderlust-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.*.css` (45KB) extracted;
  `https://preview.colorlib.com/theme/wanderlust/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`wanderlust-template-1770211435145.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/80 blur): "Wanderlust" logo + links Destinations,
     Tours, About, Resources, Travel Blog, Travel Guides, FAQ, Contact +
     "Book Now" button; mobile nav.
  2. Hero (`min-h-screen` image): h1 "Discover Your Next Adventure", blurb,
     buttons "Explore Tours" + "Watch Our Story"; "Search Tours" bar.
  3. Destinations: "Explore the World" — 6 destination cards (Bali
     Indonesia, Santorini Greece, Machu Picchu Peru, Tokyo Japan, Maldives,
     Swiss Alps) with rating, tour count, blurb, "Explore destination" +
     "View all destinations".
  4. Tours: "Unforgettable Experiences" — 4 tour cards (Bali Cultural
     Journey, Greek Island Hopping, Peru Discovery, Japan Explorer) + "View
     Tour" + "View all tour packages".
  5. Confidence: "Travel with Confidence" — 6 cards (Safe & Secure Travel,
     Expert Local Guides, Curated Experiences, Best Price Guarantee,
     Flexible Booking, 24/7 Support).
  6. Testimonials: "What Our Travelers Say" — traveler quotes.
  7. CTA (image bg): "Ready for Your Next Adventure?" + "Start Planning" /
     "Contact Us" + subscribe form ("Subscribe to get exclusive travel
     deals").
  8. Footer (`bg-gray-900`): "Wanderlust" blurb + Destinations / Company /
     Support columns + "Travel Inspiration" + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **teal scale** — #0d9488 (teal-600 primary; darker
    #0f766e, #115e59; lighter #14b8a6, #2dd4bf, #5eead4, #99f6e4, #ccfbf1,
    #f0fdfa).
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (footer bg).
  - Font: **"Inter"** (Inter, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode via dark:bg-gray-900 /
    dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/wanderlust-<n>/<w>/<h>`); icons → lucide-react
  (MapPin, Plane, Compass, Star, ShieldCheck, Users, Sparkles, BadgePercent,
  CalendarClock, Headphones, Play, Search, ChevronRight, Mail, Globe);
  Inter via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

Wanderlust lives in `apps/wanderlust` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Wanderlust",
anchor links to the page's sections, a "Book Now" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Wanderlust page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Wanderlust" and links to
  Destinations and Tours
- **AND** the navbar SHALL show a "Book Now" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-screen hero with a headline and two
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Discover Your Next Adventure"
- **AND** it SHALL show "Explore Tours" and "Watch Our Story" buttons

### Requirement: Destinations section

The system SHALL render a destinations section with at least six destination
cards.

#### Scenario: Destinations content

- **GIVEN** the page is rendered
- **WHEN** the destinations section is displayed
- **THEN** it SHALL contain a heading "Explore the World"
- **AND** it SHALL show cards for Bali, Santorini, Machu Picchu, and Tokyo

### Requirement: Tours section

The system SHALL render a tours section with at least four tour cards.

#### Scenario: Tours content

- **GIVEN** the page is rendered
- **WHEN** the tours section is displayed
- **THEN** it SHALL contain a heading "Unforgettable Experiences"
- **AND** it SHALL show tour cards including "Bali Cultural Journey" and
  "Japan Explorer"

### Requirement: Confidence section

The system SHALL render a confidence section with six value cards.

#### Scenario: Confidence content

- **GIVEN** the page is rendered
- **WHEN** the confidence section is displayed
- **THEN** it SHALL contain a heading "Travel with Confidence"
- **AND** it SHALL show cards for Safe & Secure Travel, Expert Local Guides,
  and Best Price Guarantee

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Travelers Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Call to action

The system SHALL render a closing CTA with a headline, planning buttons, and
a subscribe form.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready for Your Next Adventure?"
- **AND** it SHALL show "Start Planning" and "Contact Us" buttons
- **AND** it SHALL show a subscribe form with a "Subscribe" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Destinations, Company, Support) and
  a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Wanderlust app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Wanderlust — Travel Template"
