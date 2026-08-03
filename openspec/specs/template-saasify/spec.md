# Template: Saasify (Astro Template)

## Purpose

Saasify is a single-page SaaS product landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Saasify" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Saasify" — SaaS / software product template
  (source: https://colorlib.com/wp/template/saasify/).
- **Demo DOM analyzed:** https://saasify-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/saasify/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`saasify-template-1770211006733.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Features, Pricing, Testimonials, Documentation, Blog, Help
     Center, Contact + "Get Started" button.
  2. Hero: "Build better products, faster than ever" + "Watch demo" button
     - stats (10k+ Active users, 99.9% Uptime SLA, 50+ Integrations, 4.9★
       User rating).
  3. Features: "Everything you need to ship faster" — 6 cards (Workflow
     Automation, Real-time Collaboration, Advanced Analytics, Enterprise
     Security, API & Integrations, 24/7 Support).
  4. Pricing: "Simple, transparent pricing" — 3 tiers (Starter, Pro,
     Enterprise; 14-day free trial, monthly/annual billing).
  5. Testimonials: "Loved by teams worldwide" — quotes.
  6. CTA: "Ready to transform your workflow?" — "Contact sales".
  7. Footer: Product / Company / Legal / Stay Updated (newsletter
     Subscribe) + copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#7c3aed** (violet-600; scale #8b5cf6, #a78bfa,
    #6d28d9) — primary CTAs, accents.
  - Neutrals: white / gray (#e5e7eb, #d1d5db, #374151, #1f2937, #111827) /
    black; dark hero/footer.
  - Fonts: **"Inter"** (300–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/saasify-<n>/<w>/<h>`); icons → lucide-react; Inter
  via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome.

Saasify lives in `apps/saasify` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Saasify",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Saasify page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Saasify" and links to
  Features and Pricing
- **AND** the navbar SHALL show a "Get Started" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a
call-to-action, and product stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Build better products,
  faster than ever"
- **AND** it SHALL show a "Watch demo" button and product stats

### Requirement: Features section

The system SHALL render a features section with at least six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything you need to ship faster"
- **AND** it SHALL show cards for Workflow Automation, Real-time
  Collaboration, and Advanced Analytics

### Requirement: Pricing section

The system SHALL render a pricing section with at least three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, transparent pricing"
- **AND** it SHALL show Starter, Pro, and Enterprise tiers

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Loved by teams worldwide"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a sales button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to transform your workflow?"
- **AND** it SHALL show a "Contact sales" button

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

- **GIVEN** the Saasify app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Saasify — SaaS Template"
