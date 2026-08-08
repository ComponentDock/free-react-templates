# Template: Fade (Astro Template)

## Purpose

Fade is a single-page barbershop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Barberkraft" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Barberkraft" — barbershop template
  (source: https://colorlib.com/wp/template/barberkraft/).
- **Demo DOM analyzed:** https://barberkraft-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/barberkraft/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`barberkraft-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  Tailwind classes.
- **Section order (1:1):** Navbar (About, Services, Barbers, Pricing, Blog,
  Contact, Book Now) → Hero ("Crafting Style, Building Confidence" + Book
  Appointment / Call CTAs) → Services ("Our Service Menu" — filterable
  categories: Haircuts, Beard, Coloring, Kids) → Team ("Meet Your Barbers" —
  Marcus Johnson, Jake Rivera, Tony Chen) → Why Us ("The BarberKraft
  Difference" — 4 feature cards) → Results ("See the Difference" — before/
  after gallery) → Testimonials ("What Our Clients Say" — quote cards) →
  CTA ("Ready for Your Best Cut Yet?") → FAQ ("Frequently Asked Questions" —
  accordion) → Contact ("Get In Touch" — form + Visit/Call/Email/Shop Hours)
  → Footer (link columns + socials + copyright).
- **Design tokens extracted from the DOM + stylesheet**
  (`_astro/Base.*.css`):
  - Accent = Tailwind **amber** scale (`accent-400` #fbbf24, `accent-500`
    #f59e0b, `accent-600` #d97706, `accent-700` #b45309, `accent-100`
    #fef3c7, `accent-300` #fcd34d).
  - Dark surfaces: gray-950 (#030712) footer, gray-900 (#111827) hero/CTA,
    gray-800 (#1f2937) cards, gray-700 (#374151) borders.
  - Light surfaces: white + gray-50 section backgrounds.
  - Font: **"Space Grotesk"** (Google Fonts `<link>`, weights 300–700).
  - Buttons: `rounded-lg` (rounded-full on filter pills), amber solid
    primary with dark text (`text-gray-900` on `bg-accent-500`), outline
    secondary (`border-gray-600`).
  - Service rows: name + duration + blurb + price (`text-accent-400`).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/fade-<n>/<w>/<h>`); icons → lucide-react + inline SVG
  brand icons (BrandIcon); no assets copied.

Fade lives in `apps/fade` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Fade",
anchor links to the page's sections, a "Book Now" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Fade page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Fade" and links to About,
  Services, Barbers, Pricing, Blog, and Contact
- **AND** the navbar SHALL show a "Book Now" button
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width dark hero with a headline, a blurb, and
two call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading with the text "Crafting Style,
  Building Confidence"
- **AND** it SHALL show a blurb about the barbershop
- **AND** it SHALL show a "Book Appointment" button and a "Call (555)
  741-2580" link

### Requirement: Services section

The system SHALL render a services section with a heading, category filter
buttons, and service cards grouped by category.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Service Menu"
- **AND** it SHALL show filter buttons for All, Haircuts, Beard, Coloring,
  and Kids
- **AND** it SHALL show service cards with names, durations, blurbs, and
  prices (e.g. Classic Haircut $35, Skin Fade $40, Buzz Cut $25, Long Hair
  Cut $45, Beard Trim $25, Hot Towel Shave $45, Beard Design $35, Grey
  Blending $50, Full Color $75, Kids Haircut $25, Teen Cut $30)

#### Scenario: Service category filtering

- **GIVEN** the services section is displayed
- **WHEN** the user activates the "Beard" filter
- **THEN** the section SHALL show only services in the Beard category

### Requirement: Team section

The system SHALL render a team section with a heading and at least three
barber profile cards.

#### Scenario: Team content

- **GIVEN** the page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL contain a heading "Meet Your Barbers"
- **AND** it SHALL show at least three barber cards with names (Marcus
  Johnson, Jake Rivera, Tony Chen) and roles

### Requirement: Why Us section

The system SHALL render a "why choose us" section with a heading and four
feature cards.

#### Scenario: Why Us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain a heading "The BarberKraft Difference"
- **AND** it SHALL show feature cards titled Master Craftsmanship, Premium
  Products, Easy Online Booking, and The Right Atmosphere

### Requirement: Results section

The system SHALL render a results section with a heading and at least two
transformation cards.

#### Scenario: Results content

- **GIVEN** the page is rendered
- **WHEN** the results section is displayed
- **THEN** it SHALL contain a heading "See the Difference"
- **AND** it SHALL show at least two transformation cards with captions

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least
three quote cards.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least three client quotes with names

### Requirement: CTA band

The system SHALL render a dark call-to-action band with a headline and two
buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL contain a heading "Ready for Your Best Cut Yet?"
- **AND** it SHALL show a "Book Now" button and a "Call (555) 741-2580"
  link

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and at least four
expandable questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least four question buttons

#### Scenario: FAQ expand/collapse

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question button
- **THEN** the answer SHALL be revealed
- **AND** activating it again SHALL hide the answer

### Requirement: Contact section

The system SHALL render a contact section with a validated form and contact
detail cards.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Get In Touch"
- **AND** it SHALL show a form with Full Name, Email Address, Phone Number,
  Service Needed, and Message fields
- **AND** it SHALL show contact cards (Visit Us, Call Us, Email Us, Shop
  Hours)

#### Scenario: Contact form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form with an empty name, an invalid email,
  and no service selected
- **THEN** inline error messages SHALL be shown for the invalid fields

#### Scenario: Contact form success

- **GIVEN** the contact form is displayed
- **WHEN** the user fills every required field with valid values and
  submits
- **THEN** a success message SHALL be shown in place of the form

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Services, Info, Shop, Contact Us)
- **AND** it SHALL show social links (GitHub, X, LinkedIn)
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Fade app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Fade — Astro Template"

## Verification checklist

- [ ] `bash scripts/verify-app.sh fade` passes (typecheck, lint, 100%
      coverage, build)
- [ ] `npm run spec:validate` passes
- [ ] All services, team, testimonials, FAQ, contact copy matches the demo
      content types 1:1
- [ ] Amber accent + Space Grotesk + dark theme match the reference tokens
