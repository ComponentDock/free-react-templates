# Template: Keynote (Astro Template)

## Purpose

Keynote is a single-page AI conference landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ai Summit" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Ai Summit" — AI conference template
  (source: https://colorlib.com/wp/template/ai-summit/).
- **Demo DOM analyzed:** https://aisummit-colorlib.pages.dev/
  (HTTP 200; `https://preview.colorlib.com/theme/ai-summit/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal). The
  TEMPLATES.md screenshot (`aisummit-template-1770211095695.jpg`) is the
  visual reference; the section-by-section structure below is taken from the
  live DOM + bundled CSS.
- **Section order (1:1, from the DOM):**
  1. Navbar: Speakers, Tracks, Schedule, Tickets, Venue + "Get Your Ticket"
     CTA.
  2. Hero: H1 "The Future of AI is Here", blurb ("Join 5,000+ researchers,
     engineers, and builders for three days of cutting-edge talks,
     hands-on workshops, and the largest gathering of LLM practitioners"),
     "Get Your Ticket" + "View Schedule" CTAs, event countdown
     (Days/Hours/Mins/Secs), stats (5,000+ Attendees, 80+ Speakers, 3 Days,
     30+ Workshops).
  3. Speakers: "Learn from the Best" + 80+ speaker blurb + eight speaker
     cards (Dr. Maya Patel, Andrej Kovalenko, Dr. Sophia Chen, Marcus
     Thompson, Dr. Yuki Tanaka, James Okonkwo, Dr. Elena Rossi, Kevin Park).
  4. Tracks: "Three Distinct Paths" — Research, Industry, Hands-on Labs.
  5. Schedule: "Three Days of Innovation" — per-day session lists.
  6. Tickets: "Secure Your Spot" — Early Access (sold out), Builder
     (popular), Researcher, Enterprise tiers.
  7. Sponsors: "Backed by Leaders" — Diamond / Platinum / Gold / Silver
     partner logos + "Become a Sponsor" CTA.
  8. Venue: "The Armory" — description, address, "Get Directions", venue
     features, nearby hotels.
  9. FAQ: "Got Questions?" — six accordion Q&As.
  10. Footer: "Join Us at Keynote" — dates/venue, stats, CTAs, attendee
      logos, Event / Resources / Connect columns, copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Dark hero/sections (`gray-950`/`gray-900`) with **green** accents
    (`green-300/400/500`; CSS primary `oklch(60% .2 195)` ≈ emerald green).
  - Light sections for speakers/tracks/tickets; dark for hero, schedule,
    sponsors, footer.
  - Fonts: **"Space Grotesk"** (display) + **"Outfit"** (body) via Google
    Fonts; JetBrains Mono in the original's code snippets.
  - Buttons: pill-shaped, solid green primary / bordered outline; rounded
    cards with subtle borders.
- **Recreation decisions:** speaker photos → seeded picsum placeholders
  (`picsum.photos/seed/keynote-<n>/<w>/<h>`); icons → lucide-react;
  sponsor/attendee names rendered as styled text logos (no assets copied);
  countdown implemented as a live ticking timer; copy paraphrased but
  same-kind; fonts via Google Fonts `<link>`; light-default + class-based
  dark mode matching the original's `dark:` classes.

Keynote lives in `apps/keynote` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Keynote",
anchor links to the page's sections, a "Get Your Ticket" call-to-action,
and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Keynote page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Keynote" and links to Speakers, Schedule, and Tickets
- **AND** the navbar SHALL show a "Get Your Ticket" CTA link
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a hero with a level-1 headline, a blurb, two CTA
buttons, a countdown timer, and a statistics row.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "The Future of AI is Here"
- **AND** it SHALL show "Get Your Ticket" and "View Schedule" buttons
- **AND** it SHALL show countdown units for Days, Hours, Mins, and Secs
- **AND** it SHALL show statistics for attendees, speakers, days, and workshops

### Requirement: Speakers section

The system SHALL render a speakers section with a heading and at least eight
speaker cards.

#### Scenario: Speakers content

- **GIVEN** the page is rendered
- **WHEN** the speakers section is displayed
- **THEN** it SHALL contain a heading "Learn from the Best"
- **AND** it SHALL show at least eight speaker cards with names and roles

### Requirement: Tracks section

The system SHALL render a tracks section with a heading and three track
cards.

#### Scenario: Tracks content

- **GIVEN** the page is rendered
- **WHEN** the tracks section is displayed
- **THEN** it SHALL contain a heading "Three Distinct Paths"
- **AND** it SHALL show Research, Industry, and Hands-on Labs tracks

### Requirement: Schedule section

The system SHALL render a schedule section with a heading and sessions.

#### Scenario: Schedule content

- **GIVEN** the page is rendered
- **WHEN** the schedule section is displayed
- **THEN** it SHALL contain a heading "Three Days of Innovation"
- **AND** it SHALL show sessions for at least two of the three days

### Requirement: Tickets section

The system SHALL render a tickets section with a heading and four pricing
tiers.

#### Scenario: Tickets content

- **GIVEN** the page is rendered
- **WHEN** the tickets section is displayed
- **THEN** it SHALL contain a heading "Secure Your Spot"
- **AND** it SHALL show Early Access, Builder, Researcher, and Enterprise tiers with prices and features

### Requirement: Sponsors section

The system SHALL render a sponsors section with a heading and partner tiers.

#### Scenario: Sponsors content

- **GIVEN** the page is rendered
- **WHEN** the sponsors section is displayed
- **THEN** it SHALL contain a heading "Backed by Leaders"
- **AND** it SHALL show at least four partner names and a "Become a Sponsor" link

### Requirement: Venue section

The system SHALL render a venue section with a heading, description, and
address.

#### Scenario: Venue content

- **GIVEN** the page is rendered
- **WHEN** the venue section is displayed
- **THEN** it SHALL contain a heading "The Armory"
- **AND** it SHALL show a description, an address, and a "Get Directions" link

### Requirement: FAQ section

The system SHALL render an FAQ section with a heading and an accordion of
questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL show a heading "Got Questions?"
- **AND** it SHALL show at least four questions

#### Scenario: Expand and collapse

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question
- **THEN** the answer SHALL be revealed
- **AND** activating it again SHALL hide the answer

### Requirement: Footer

The system SHALL render a footer with link columns, social links, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Event and Resources link columns and a copyright line
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Keynote app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Keynote — AI Conference Template"
