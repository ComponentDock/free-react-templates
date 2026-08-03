# Template: Serenite (Astro Template)

## Purpose

Serenite is a single-page luxury spa landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Serenite" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Serenite" — luxury spa / wellness center template
  (source: https://colorlib.com/wp/template/serenite/).
- **Demo DOM analyzed:** https://serenite-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/serenite/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`serenite-template-1771943746919.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: About, Services, Specialists, Gallery, Packages, Blog, Contact
     - "Book Now" button.
  2. Hero: "Indulge in Pure Luxury & Serenity" + "View Services" / "Watch
     Demo" buttons + stats (15+ Years of Excellence, 50+ Luxury Treatments,
     5-Star Client Rated).
  3. Services: "Treatments & Services" — 6 cards (Facial Treatments from
     $85, Massage Therapy from $95, Body Treatments from $120, Hair Salon
     from $65, Nail Care from $45, Wellness from $150).
  4. Our Expert Team: 4 cards — Isabella Laurent (Senior Aesthetician),
     Marcus Chen (Lead Massage Therapist), Sofia Ramirez (Hair Stylist &
     Colorist), Amara Johnson (Wellness Director) — with experience years.
  5. Gallery: "A Glimpse of Serenite" — 6 images (Spa Treatment Room,
     Relaxation Lounge, Luxury Skincare Products, Massage Therapy Suite,
     Spa Interior Ambiance, Facial Treatment Session).
  6. Results: "Visible Results" — before/after transformations.
  7. Signature Packages: 3 tiers — Refresher, Indulgence, Ultimate Retreat.
  8. Testimonials: "What Our Clients Say" — quotes.
  9. FAQ: 5 questions (booking advance, pre-appointment prep, health
     conditions, gift cards, group bookings).
  10. CTA: "Give the Gift of Relaxation" + "Book a Visit".
  11. Footer: Services / Visit Us / Connect / Stay Updated (newsletter
      Subscribe) + copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#e11d48** (rose-600; scale #f43f5e, #fb7185) — CTA
    accents, highlights.
  - Neutrals: white / gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827) / black; dark footer.
  - Fonts: **"Playfair Display"** (display) + **"Lora"** (body) via Google
    Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/serenite-<n>/<w>/<h>`); icons → lucide-react;
  Playfair Display + Lora via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.

Serenite lives in `apps/serenite` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Serenite",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Serenite page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Serenite" and links to
  Services and Packages
- **AND** the navbar SHALL show a "Book Now" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, call-to-action
buttons, and spa stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Indulge in Pure Luxury &
  Serenity"
- **AND** it SHALL show "View Services" and "Watch Demo" buttons and spa
  stats

### Requirement: Services section

The system SHALL render a services section with at least six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Treatments & Services"
- **AND** it SHALL show cards for Facial Treatments, Massage Therapy, Body
  Treatments, and Nail Care

### Requirement: Specialists section

The system SHALL render a specialists section with at least four specialist
cards.

#### Scenario: Specialists content

- **GIVEN** the page is rendered
- **WHEN** the specialists section is displayed
- **THEN** it SHALL contain a heading "Our Expert Team"
- **AND** it SHALL show cards for Isabella Laurent and Marcus Chen

### Requirement: Gallery section

The system SHALL render a gallery section with at least four images.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "A Glimpse of Serenite"
- **AND** it SHALL show images with descriptive labels

### Requirement: Packages section

The system SHALL render a packages section with at least three tiers.

#### Scenario: Packages content

- **GIVEN** the page is rendered
- **WHEN** the packages section is displayed
- **THEN** it SHALL contain a heading "Signature Packages"
- **AND** it SHALL show Refresher, Indulgence, and Ultimate Retreat packages

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least one testimonial quote

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Gift card CTA

The system SHALL render a gift-card CTA section with a headline and a
booking button.

#### Scenario: Gift card CTA content

- **GIVEN** the page is rendered
- **WHEN** the gift card section is displayed
- **THEN** it SHALL contain a heading "Give the Gift of Relaxation"
- **AND** it SHALL show a "Book a Visit" button

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show a newsletter signup with a Subscribe button

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Serenite app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Serenite — Spa Template"
