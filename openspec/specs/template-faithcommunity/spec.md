# Template: Faithcommunity (Astro Template)

## Purpose

Faithcommunity is a single-page church landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Faithcommunity" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Faithcommunity" — church template
  (source: https://colorlib.com/wp/template/faithcommunity/).
- **Demo DOM analyzed:** https://faithcommunity-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/faithcommunity/` returns
  404 — demo hosted on Cloudflare Pages per the ColorLib preview portal).
  The TEMPLATES.md screenshot (`faithcommunity-template-1770211119687.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and Tailwind classes.
- **Section order (1:1):** Navbar (About, Services, Events, Ministries,
  Sermons, Contact, Give, Plan Your Visit) → Hero ("A Place to Belong" +
  Join Us This Week) → Service Times ("Service Times" + Sunday Worship,
  Wednesday Bible Study, Youth Group) → Who We Are → Events → Ministries →
  Footer.
- **Design tokens extracted from the DOM:**
  - Light theme with warm neutrals.
  - Fonts: **"Inter"** (body) + **"Lora"** (display) via Google Fonts.
  - Rounded cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/faithcommunity-<n>/<w>/<h>`); icons → lucide-react;
  no assets copied.

Faithcommunity lives in `apps/faithcommunity` and uses shared components
from `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Faithcommunity", anchor links to the page's sections, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Faithcommunity page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Faithcommunity" and links to About, Services, and Events
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "Join Us
This Week" CTA.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "Join Us This Week" button

### Requirement: Service times section

The system SHALL render a service times section with a heading and at least
three service cards.

#### Scenario: Service times content

- **GIVEN** the page is rendered
- **WHEN** the service times section is displayed
- **THEN** it SHALL contain a heading "Service Times"
- **AND** it SHALL show at least three service cards (Sunday Worship, Wednesday Bible Study, Youth Group) with times

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

- **GIVEN** the Faithcommunity app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Faithcommunity — Astro Template"
