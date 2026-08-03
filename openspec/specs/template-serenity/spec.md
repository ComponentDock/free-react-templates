# Template: Serenity (Astro Template)

## Purpose

Serenity is a single-page spiritual retreat center landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Serenity" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Serenity" — retreat center / spiritual sanctuary
  template (source: https://colorlib.com/wp/template/serenity/).
- **Demo DOM analyzed:** https://serenity-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/serenity/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`serenity-template-1770211390595.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: Retreats, Spiritual Direction, Sacred Spaces, Resources,
     Connect + "Book a Retreat" button.
  2. Hero: "Find Rest for Your Soul" + "Begin Spiritual Direction" /
     "Enter the Stillness" buttons.
  3. Daily Office: "A Rhythm of Prayer" — 4 cards (Lauds 6:30 AM, Midday
     Prayer 12:00 PM, Vespers 5:30 PM, Compline 8:30 PM).
  4. About: "A Place Set Apart" + stats (35+ Years of Ministry, 12,000+
     Retreat Guests, 80 Acres of Silence, 4 Daily Prayer Offices).
  5. Practices: "Ancient Paths to the Present" — 6 cards (Centering Prayer,
     Lectio Divina, Walking Meditation, Labyrinth Walk, Examen, Silent
     Sitting).
  6. Retreats: "Step Away. Go Deeper." — 3 cards (Spring Silence Retreat,
     Introduction to Contemplative Prayer, Day of Rest).
  7. Sacred Spaces: "80 Acres of Sanctuary" — 4 cards (The Chapel, The
     Labyrinth, Prayer Garden, Forest Trails).
  8. Spiritual Directors: "Companions for the Journey" — 4 cards (Sr.
     Margaret Anne OSB, Fr. David Brennan, Dr. Sarah Chen, Brother Thomas).
  9. Testimonials: "Transformed by Stillness" — 3 quotes.
  10. CTA: "Begin Your Journey Inward" — "Contact Us".
  11. Footer: "Join Us in Prayer" (office times) + Experience / Explore /
      Connect columns + contact + copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **#4d5b4a** (forest green; scale #7d8f79, #62735e,
    #3f4a3d, #2d332c) + warm neutrals (#e6e1d8, #847160, #6c5d51,
    #594d44) — earthy, contemplative palette.
  - Neutrals: off-white (#e6e1d8) / black.
  - Fonts: **"Cormorant Garamond"** (display) + **"Inter"** (body) via
    Google Fonts.
  - Shapes: rounded-lg cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/serenity-<n>/<w>/<h>`); icons → lucide-react;
  Cormorant Garamond + Inter via Google Fonts; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

Serenity lives in `apps/serenity` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Serenity",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Serenity page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Serenity" and links to
  Retreats and Sacred Spaces
- **AND** the navbar SHALL show a "Book a Retreat" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and
call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Find Rest for Your Soul"
- **AND** it SHALL show "Begin Spiritual Direction" and "Enter the
  Stillness" buttons

### Requirement: Daily office section

The system SHALL render a daily prayer schedule section with at least four
cards.

#### Scenario: Daily office content

- **GIVEN** the page is rendered
- **WHEN** the daily office section is displayed
- **THEN** it SHALL contain a heading "A Rhythm of Prayer"
- **AND** it SHALL show cards for Lauds, Midday Prayer, Vespers, and
  Compline

### Requirement: Practices section

The system SHALL render a contemplative practices section with at least six
cards.

#### Scenario: Practices content

- **GIVEN** the page is rendered
- **WHEN** the practices section is displayed
- **THEN** it SHALL contain a heading "Ancient Paths to the Present"
- **AND** it SHALL show cards for Centering Prayer, Lectio Divina, and
  Walking Meditation

### Requirement: Retreats section

The system SHALL render a retreats section with at least three cards.

#### Scenario: Retreats content

- **GIVEN** the page is rendered
- **WHEN** the retreats section is displayed
- **THEN** it SHALL contain a heading "Step Away. Go Deeper."
- **AND** it SHALL show cards for Spring Silence Retreat and Day of Rest

### Requirement: Sacred spaces section

The system SHALL render a sacred spaces section with at least four cards.

#### Scenario: Sacred spaces content

- **GIVEN** the page is rendered
- **WHEN** the sacred spaces section is displayed
- **THEN** it SHALL contain a heading "80 Acres of Sanctuary"
- **AND** it SHALL show cards for The Chapel, The Labyrinth, and Prayer
  Garden

### Requirement: Directors section

The system SHALL render a spiritual directors section with at least four
cards.

#### Scenario: Directors content

- **GIVEN** the page is rendered
- **WHEN** the directors section is displayed
- **THEN** it SHALL contain a heading "Companions for the Journey"
- **AND** it SHALL show cards for Sr. Margaret Anne and Fr. David Brennan

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Transformed by Stillness"
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Call to action

The system SHALL render a closing CTA with a headline and a contact button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Begin Your Journey Inward"
- **AND** it SHALL show a "Contact Us" button

### Requirement: Footer

The system SHALL render a footer with link columns, prayer times, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show the daily prayer times

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Serenity app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Serenity — Retreat Template"
