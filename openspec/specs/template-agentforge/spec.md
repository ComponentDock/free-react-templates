# Template: Agentforge (Astro Template)

## Purpose

Agentforge is a single-page AI platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Agentforge" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Agentforge" — AI agent platform template
  (source: https://colorlib.com/wp/template/agentforge/).
- **Demo DOM analyzed:** https://agentforge-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/agentforge/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`agentforge-template-1771944000058.jpg`) is
  the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (Platform, Pricing, Integrations, About,
  Blog, Contact, Start Building) → Hero ("Build Autonomous AI Agents" +
  CTA) → Features ("Everything You Need to Build AI Agents" + Agent
  Builder, Workflow Orchestration, Knowledge Base, Multi-Agent Teams, API
  Gateway, Monitoring & Observability) → Social proof ("Trusted by AI
  Teams Everywhere") → CTA ("Talk to Our Team") → Footer.
- **Design tokens extracted from the DOM:**
  - Dark theme: `gray-800/900/950` surfaces, light text; Manrope font.
  - Font: **"Manrope"** (Google Fonts).
  - Rounded cards with subtle borders.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/agentforge-<n>/<w>/<h>`); icons → lucide-react; no
  assets copied.

Agentforge lives in `apps/agentforge` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Agentforge", anchor links to the page's sections, and a dark-mode toggle
button.

#### Scenario: Navbar content

- **GIVEN** the Agentforge page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Agentforge" and links to Platform, Pricing, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, a blurb, and a
CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a blurb and a CTA button

### Requirement: Features section

The system SHALL render a features section with a heading and at least six
feature cards.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL contain a heading "Everything You Need to Build AI Agents"
- **AND** it SHALL show at least six feature cards with titles (Agent Builder, Workflow Orchestration, Knowledge Base, Multi-Agent Teams, API Gateway, Monitoring & Observability) and blurbs

### Requirement: Social proof band

The system SHALL render a social-proof band with a heading.

#### Scenario: Social proof content

- **GIVEN** the page is rendered
- **WHEN** the social-proof band is displayed
- **THEN** it SHALL show a heading "Trusted by AI Teams Everywhere"

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Agentforge app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Agentforge — Astro Template"
