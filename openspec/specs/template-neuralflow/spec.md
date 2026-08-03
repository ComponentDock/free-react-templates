# Template: Neuralflow (Astro Template)

## Purpose

Neuralflow is a single-page AI platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Neuralflow" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Neuralflow" — AI / machine-learning platform
  template (source: https://colorlib.com/wp/template/neuralflow/).
- **Demo DOM analyzed:** https://neuralflow-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/neuralflow/` returns 404 — the
  preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`neuralflow-template-1771943830583.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: About, Capabilities, How It Works, Use Cases, Pricing,
     Developers, Integrations, Blog, Changelog, Solutions, Contact + "Try
     Free" button.
  2. Hero: "Build Intelligent Apps with Zero Complexity" + "View
     Documentation" / "Watch Demo" buttons + stats (1M+ API Calls/Day,
     99.99% Uptime, 50ms Avg Latency, 10,000+ Developers).
  3. Capabilities: "AI That Actually Works" — 6 cards (Natural Language
     Processing, Computer Vision, Predictive Analytics, Voice AI, Code
     Generation, Custom Models).
  4. How It Works: "From Data to Intelligence in Minutes" — 3 steps
     (Connect Your Data, Train & Fine-tune, Deploy & Scale).
  5. Use Cases: "AI for Every Industry" — 4 cards (Healthcare, Finance,
     E-commerce, Manufacturing) with feature bullets.
  6. Pricing: "Usage-based pricing that scales" — 3 tiers (Free, Pro,
     Enterprise) with monthly/annual billing.
  7. Developers: "Built by Developers, for Developers" — 4 cards (SDKs in 8
     Languages, OpenAPI Spec, Webhooks & Streaming, 99.99% Uptime SLA).
  8. Testimonials: "Trusted by AI-first teams" — quotes.
  9. FAQ: 5 questions (free trial, data security, rate limits, custom
     models, enterprise solutions).
  10. CTA: "The Future of AI is Here" — "Talk to Sales" ("Join 10,000+
      developers...").
  11. Footer: Product / Resources / Company / Stay Updated (newsletter
      Subscribe) + copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#7c3aed** (violet-600; scale #8b5cf6, #a78bfa) —
    primary CTAs, accents, gradient hero.
  - Neutrals: white / gray (#d1d5db, #374151, #1f2937, #111827, #030712) /
    black; dark developer-style surfaces.
  - Fonts: **"Space Grotesk"** (display) + **"Inter"** (body) +
    **"JetBrains Mono"** (mono) via Google Fonts.
  - Shapes: rounded-lg/xl cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/neuralflow-<n>/<w>/<h>`); icons → lucide-react;
  Space Grotesk + Inter + JetBrains Mono via Google Fonts; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.

Neuralflow lives in `apps/neuralflow` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Neuralflow", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Neuralflow page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Neuralflow" and links to
  Capabilities and Pricing
- **AND** the navbar SHALL show a "Try Free" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, call-to-action
buttons, and platform stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Build Intelligent Apps with
  Zero Complexity"
- **AND** it SHALL show "View Documentation" and "Watch Demo" buttons and
  platform stats

### Requirement: Capabilities section

The system SHALL render a capabilities section with at least six feature
cards.

#### Scenario: Capabilities content

- **GIVEN** the page is rendered
- **WHEN** the capabilities section is displayed
- **THEN** it SHALL contain a heading "AI That Actually Works"
- **AND** it SHALL show cards for Natural Language Processing, Computer
  Vision, and Predictive Analytics

### Requirement: How It Works section

The system SHALL render a three-step how-it-works section.

#### Scenario: How It Works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "From Data to Intelligence in
  Minutes"
- **AND** it SHALL show steps for Connect Your Data, Train & Fine-tune, and
  Deploy & Scale

### Requirement: Use cases section

The system SHALL render a use cases section with at least four industry
cards.

#### Scenario: Use cases content

- **GIVEN** the page is rendered
- **WHEN** the use cases section is displayed
- **THEN** it SHALL contain a heading "AI for Every Industry"
- **AND** it SHALL show cards for Healthcare, Finance, and E-commerce

### Requirement: Pricing section

The system SHALL render a pricing section with at least three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Usage-based pricing that scales"
- **AND** it SHALL show Free, Pro, and Enterprise tiers

### Requirement: Developers section

The system SHALL render a developers section with at least four cards.

#### Scenario: Developers content

- **GIVEN** the page is rendered
- **WHEN** the developers section is displayed
- **THEN** it SHALL contain a heading "Built by Developers, for Developers"
- **AND** it SHALL show cards for SDKs in 8 Languages and OpenAPI Spec

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by AI-first teams"
- **AND** it SHALL show at least one testimonial quote

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a sales button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "The Future of AI is Here"
- **AND** it SHALL show a "Talk to Sales" button

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

- **GIVEN** the Neuralflow app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Neuralflow — AI Template"
