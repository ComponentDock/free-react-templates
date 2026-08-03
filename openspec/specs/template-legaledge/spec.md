# Template: Legaledge (Astro Template)

## Purpose

Legaledge is a single-page law firm landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Legaledge 2" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Legaledge 2" — law firm / attorneys website
  template (source: https://colorlib.com/wp/template/legaledge-2/).
- **Demo DOM analyzed:** https://legaledge-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/legaledge-2/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`legaledge-template-1770211287987.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Home, About, Practice Areas, Attorneys, Contact + "Free
     Consultation" button.
  2. Hero: "Trusted Legal Excellence" + "Free Case Evaluation" badge +
     contact strip ((555) 234-5678, contact@morrisonlaw.com, Mon–Fri 8–6).
  3. Practice Areas: 6 cards — Corporate Law, Litigation, Real Estate,
     Family Law, Estate Planning, Criminal Defense — each with sub-services
     and "Learn More".
  4. A Legacy of Legal Excellence: 4 value cards — Proven Track Record,
     Client-Focused Approach, Industry Recognition, Transparent
     Communication + stats (Years of Excellence, Client Satisfaction, Expert
     Attorneys).
  5. Meet Our Attorneys: 4 cards — James Morrison (Founding Partner), Sarah
     Chen (Managing Partner), Michael Thompson (Senior Partner), Elena
     Rodriguez (Partner).
  6. Client Testimonials: "What Our Clients Say" — 4 quotes (Robert
     Williams — CEO TechVenture, Jennifer Martinez — Martinez Properties,
     Private Client, Patricia Thompson — Retired Executive).
  7. Recognition: "Recognized By Leading Legal Publications" — Super
     Lawyers, Martindale-Hubbell, AV Preeminent.
  8. CTA: "Ready to Discuss Your Legal Matter?" — "Request Free
     Consultation" ("Free initial consultation, no obligation, completely
     confidential, in-person or virtual").
  9. Footer: Practice Areas / Quick Links / Contact Us columns + legal
     disclaimer + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **#c9a227** (gold) + **#102a43** (navy; scale #243b53,
    #8a6914, #a78419) — classic law-firm pairing; gold accents on navy
    surfaces.
  - Neutrals: white / off-white (#f0f4f8, #d9e2ec) / black.
  - Fonts: **"Playfair Display"** (display) + **"Inter"** (body) via Google
    Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/legaledge-<n>/<w>/<h>`); icons → lucide-react;
  Playfair Display + Inter via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

Legaledge lives in `apps/legaledge` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Legaledge", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Legaledge page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Legaledge" and links to
  Practice Areas and Attorneys
- **AND** the navbar SHALL show a "Free Consultation" button and a
  dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a
call-to-action.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Trusted Legal Excellence"
- **AND** it SHALL show a "Free Case Evaluation" badge

### Requirement: Practice areas section

The system SHALL render a practice areas section with at least six cards.

#### Scenario: Practice areas content

- **GIVEN** the page is rendered
- **WHEN** the practice areas section is displayed
- **THEN** it SHALL contain a heading "Practice Areas"
- **AND** it SHALL show cards for Corporate Law, Litigation, Real Estate,
  and Family Law

### Requirement: Legacy section

The system SHALL render a value-proposition section with at least four
cards.

#### Scenario: Legacy content

- **GIVEN** the page is rendered
- **WHEN** the legacy section is displayed
- **THEN** it SHALL contain a heading "A Legacy of Legal Excellence"
- **AND** it SHALL show cards for Proven Track Record and Client-Focused
  Approach

### Requirement: Attorneys section

The system SHALL render an attorneys section with at least four attorney
cards.

#### Scenario: Attorneys content

- **GIVEN** the page is rendered
- **WHEN** the attorneys section is displayed
- **THEN** it SHALL contain a heading "Meet Our Attorneys"
- **AND** it SHALL show cards for James Morrison and Sarah Chen

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a consultation
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Discuss Your Legal Matter?"
- **AND** it SHALL show a "Request Free Consultation" button

### Requirement: Footer

The system SHALL render a footer with link columns and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Legaledge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Legaledge — Law Firm Template"
