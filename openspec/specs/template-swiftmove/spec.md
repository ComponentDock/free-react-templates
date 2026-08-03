# Template: Swiftmove (Astro Template)

## Purpose

Swiftmove is a single-page moving company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Swiftmove" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Swiftmove" — moving / relocation services landing
  template (source: https://colorlib.com/wp/template/swiftmove/).
- **Demo DOM analyzed:** https://swiftmove-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.Ce97irTr.css` (65KB) extracted;
  `https://preview.colorlib.com/theme/swiftmove/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`swiftmove-template-...jpg`) is the visual reference; the design below is
  reconstructed from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. Sticky navbar (white/80 blur): logo + links About, Services, How It
     Works, Areas, Pricing, Testimonials, Quote, Blog, Contact + "Free
     Quote" button; mobile nav.
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`): h1 "Moving Made
     Simple & Stress-Free", blurb, buttons "Get Free Quote" + "Call (555)
     890-1234".
  3. Services: "Moving Solutions for Every Need" — 6 cards (Local Moving,
     Long Distance, Commercial Moving, Packing Services, Storage
     Solutions, Specialty Items).
  4. Process: "Your Move in 4 Easy Steps" — 4 steps (Request a Quote,
     Schedule Your Move, We Handle Everything, Welcome Home).
  5. Coverage: "We Move You Anywhere" — Local Moves / Long Distance.
  6. Pricing: "Transparent, Honest Pricing" — 3 packages (Studio / 1BR,
     2-3 Bedrooms, 4+ Bedrooms).
  7. Testimonials: "Trusted by Thousands of Families" — quotes.
  8. Quote form: "Get Your Free Moving Quote" — form + "Get Free Quote";
     side info (Why Choose SwiftMove?, phone, Business Hours).
  9. FAQ: "Frequently Asked Questions" — 5 accordion items (insurance,
     booking lead time, packing services, specialty items, storage).
  10. CTA (`bg-gradient-to-br from-primary-600 to-primary-800`): "Ready to
      Make Your Move?" + "Get Free Quote" / "Call Now".
  11. Footer (`bg-gray-900`): brand blurb + Services / Company / Support
      columns + phone/email + copyright + cookie banner (Accept All /
      Decline).
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **blue scale** — #2563eb (blue-600 primary; darker
    #1d4ed8, #1e40af; lighter #3b82f6, #60a5fa, #93c5fd, #bfdbfe, #dbeafe,
    #eff6ff). Hero gradient from-primary-50 to white; CTA gradient
    from-primary-600 to-primary-800.
  - Neutrals: gray scale — #f3f4f6, #e5e7eb, #d1d5db, #9ca3af, #6b7280,
    #4b5563, #374151, #1f2937, #111827 (footer bg).
  - Font: **"Outfit"** (Outfit, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; sections alternate `bg-gray-50` /
    white with `py-20 lg:py-28`; dark mode via dark:bg-gray-900 /
    dark:bg-gray-950.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/swiftmove-<n>/<w>/<h>`); icons → lucide-react (Truck,
  Package, Building2, Boxes, Warehouse, Piano, ClipboardCheck, CalendarDays,
  Phone, Mail, Clock, Star, ChevronDown, MapPin, Home); Outfit via Google
  Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Swiftmove lives in `apps/swiftmove` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "SwiftMove",
anchor links to the page's sections, a "Free Quote" button, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Swiftmove page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "SwiftMove" and links to
  Services and Pricing
- **AND** the navbar SHALL show a "Free Quote" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and two
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Moving Made Simple &
  Stress-Free"
- **AND** it SHALL show a "Get Free Quote" button and a "Call (555)
  890-1234" link

### Requirement: Services section

The system SHALL render a services section with six service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Moving Solutions for Every Need"
- **AND** it SHALL show cards for Local Moving, Long Distance, and Packing
  Services

### Requirement: Process section

The system SHALL render a process section with four steps.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "Your Move in 4 Easy Steps"
- **AND** it SHALL show the steps Request a Quote, Schedule Your Move, and
  Welcome Home

### Requirement: Pricing section

The system SHALL render a pricing section with three packages.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Transparent, Honest Pricing"
- **AND** it SHALL show packages for Studio / 1BR, 2-3 Bedrooms, and 4+
  Bedrooms

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Thousands of Families"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Quote form

The system SHALL render a quote request form with a submit button.

#### Scenario: Form content

- **GIVEN** the page is rendered
- **WHEN** the quote form section is displayed
- **THEN** it SHALL contain a heading "Get Your Free Moving Quote"
- **AND** it SHALL show a form with a "Get Free Quote" button

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a quote button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Make Your Move?"
- **AND** it SHALL show a "Get Free Quote" button

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (Services, Company, Support) and a
  copyright line
- **AND** it SHALL show the phone number and email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Swiftmove app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "SwiftMove — Moving Services
  Template"
