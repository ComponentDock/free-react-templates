# Template: Launchpad (Astro Template)

## Purpose

Launchpad is a single-page dev-tools/SaaS startup landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Launchpad" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Launchpad" — developer platform / CI-CD startup
  template (source: https://colorlib.com/wp/template/launchpad/).
- **Demo DOM analyzed:** https://launchpad-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/launchpad/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`launchpad-template-1771943657968.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: About, Features, How It Works, Pricing, Testimonials, FAQ,
     Integrations, Blog, Changelog, Contact + "Get Early Access" button.
  2. Hero: "Ship products 10x faster" + "See it in action" / "Watch Demo"
     buttons + stats (2,000+ Beta Users, 99.9% Uptime, $2.5M Raised, 4.9
     Rating).
  3. Features: "Everything you need to ship" — 6 cards (CI/CD Pipeline,
     Real-time Analytics, Team Collaboration, Auto-scaling, Security First,
     Developer API).
  4. How It Works: "From idea to production in minutes" — 3 steps (Connect,
     Build, Deploy).
  5. Integrations: "Works with your favorite tools" — 8 tool chips (GitHub,
     GitLab, Slack, AWS, Vercel, Docker, Jira, Figma) marked "Connected".
  6. Pricing: "Simple, transparent pricing" — 3 tiers (Hobby free, Startup,
     Scale) with monthly/annual billing.
  7. Testimonials: "Trusted by fast-moving startups" — quotes.
  8. FAQ: 6 questions (difference vs other CI/CD, migration, cloud
     providers, free tier, auto-scaling, support).
  9. Waitlist CTA: "Ready to launch faster?" — "Get Early Access" ("Join
     2,000+ developers already on the waitlist. No credit card required.").
  10. Footer: Product / Resources / Company / Stay Updated (newsletter
      Subscribe) + copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#4f46e5** (indigo-600; scale #818cf8, #c7d2fe) —
    primary buttons, links, accents.
  - Neutrals: white / gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827) / black; dark hero/footer.
  - Fonts: **"Manrope"** (300–800) via Google Fonts.
  - Shapes: rounded-lg cards, pill buttons and chips.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/launchpad-<n>/<w>/<h>`); icons → lucide-react;
  Manrope via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

Launchpad lives in `apps/launchpad` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Launchpad", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Launchpad page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Launchpad" and links to
  Features, Pricing, and FAQ
- **AND** the navbar SHALL show a "Get Early Access" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, call-to-action
buttons, and startup stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Ship products 10x faster"
- **AND** it SHALL show "See it in action" and "Watch Demo" buttons and
  startup stats

### Requirement: Features section

The system SHALL render a features section with at least six feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything you need to ship"
- **AND** it SHALL show cards for CI/CD Pipeline, Real-time Analytics, and
  Auto-scaling

### Requirement: How It Works section

The system SHALL render a three-step how-it-works section.

#### Scenario: How It Works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "From idea to production in minutes"
- **AND** it SHALL show steps for Connect, Build, and Deploy

### Requirement: Integrations section

The system SHALL render an integrations section with at least four tool
chips.

#### Scenario: Integrations content

- **GIVEN** the page is rendered
- **WHEN** the integrations section is displayed
- **THEN** it SHALL contain a heading "Works with your favorite tools"
- **AND** it SHALL show GitHub, GitLab, and Slack integrations

### Requirement: Pricing section

The system SHALL render a pricing section with at least three tiers.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Simple, transparent pricing"
- **AND** it SHALL show Hobby, Startup, and Scale tiers

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least one quote.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by fast-moving startups"
- **AND** it SHALL show at least one testimonial quote

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Waitlist call to action

The system SHALL render a waitlist CTA with a headline and an early-access
button.

#### Scenario: Waitlist CTA content

- **GIVEN** the page is rendered
- **WHEN** the waitlist section is displayed
- **THEN** it SHALL contain a heading "Ready to launch faster?"
- **AND** it SHALL show a "Get Early Access" button

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

- **GIVEN** the Launchpad app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Launchpad — Startup Template"
