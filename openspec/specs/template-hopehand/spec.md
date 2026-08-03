# Template: Hopehand (Astro Template)

## Purpose

Hopehand is a single-page nonprofit fundraising landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hopehand" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hopehand" — nonprofit / charity organization
  template (source: https://colorlib.com/wp/template/hopehand/).
- **Demo DOM analyzed:** https://hopehand-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/hopehand/` returns 404 — the preview
  portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`hopehand-template-1771943776003.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: About, Mission, Programs, Impact, Stories, Get Involved,
     Donate, Blog, Contact + "Donate Now" button.
  2. Hero: "Change Lives, One Community at a Time" + "Donate Now" / "See
     Our Impact" buttons + stats (50,000+ Lives Changed, 120+ Communities,
     15 Countries, $10M+ Raised).
  3. Building a Better World Together: 3 cards — Education, Healthcare,
     Sustainability.
  4. How We Help: 4 program cards — Education for All, Health & Wellness,
     Economic Empowerment, Environmental Action.
  5. Numbers That Matter (impact): stats strip (Active Campaigns etc.).
  6. Lives Transformed (stories): testimonial quotes.
  7. Join Our Mission: 3 cards — Volunteer, Fundraise, Partner.
  8. Frequently Asked Questions: 5 questions (tax-deductible, fund
     allocation, volunteering, recurring donations, international work).
  9. Donate: "Every Dollar Makes a Difference" — amount chips ($25, $50,
     $100, $250, Custom) + "100% Tax Deductible" / "Charity Navigator
     4-Star" badges.
  10. Footer: Programs / Organization / Support / Stay Updated (newsletter
      Subscribe) + copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#059669** (emerald-600; scale #10b981, #34d399,
    #047857) — primary CTAs, highlights.
  - Secondary accent: **#f97316** (orange-500) — secondary buttons/accents.
  - Neutrals: white / gray (#e5e7eb, #d1d5db, #6b7280, #374151, #1f2937,
    #111827) / black; dark footer.
  - Fonts: **"Manrope"** (300–800) via Google Fonts.
  - Shapes: rounded-lg/xl cards, pill buttons and amount chips.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/hopehand-<n>/<w>/<h>`); icons → lucide-react;
  Manrope via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

Hopehand lives in `apps/hopehand` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Hopehand",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hopehand page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hopehand" and links to
  Mission, Programs, and Impact
- **AND** the navbar SHALL show a "Donate Now" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, call-to-action
buttons, and impact stats.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Change Lives, One Community
  at a Time"
- **AND** it SHALL show "Donate Now" and "See Our Impact" buttons and impact
  stats

### Requirement: Mission section

The system SHALL render a mission section with at least three cause cards.

#### Scenario: Mission content

- **GIVEN** the page is rendered
- **WHEN** the mission section is displayed
- **THEN** it SHALL contain a heading "Building a Better World Together"
- **AND** it SHALL show cards for Education, Healthcare, and Sustainability

### Requirement: Programs section

The system SHALL render a programs section with at least four program cards.

#### Scenario: Programs content

- **GIVEN** the page is rendered
- **WHEN** the programs section is displayed
- **THEN** it SHALL contain a heading "How We Help"
- **AND** it SHALL show cards for Education for All, Health & Wellness,
  Economic Empowerment, and Environmental Action

### Requirement: Impact section

The system SHALL render an impact section with a stats display.

#### Scenario: Impact content

- **GIVEN** the page is rendered
- **WHEN** the impact section is displayed
- **THEN** it SHALL contain a heading "Numbers That Matter"
- **AND** it SHALL show at least one impact statistic

### Requirement: Stories section

The system SHALL render a stories section with at least one testimonial
quote.

#### Scenario: Stories content

- **GIVEN** the page is rendered
- **WHEN** the stories section is displayed
- **THEN** it SHALL contain a heading "Lives Transformed"
- **AND** it SHALL show at least one testimonial quote

### Requirement: Get involved section

The system SHALL render a "Join Our Mission" section with at least three
involvement cards.

#### Scenario: Get involved content

- **GIVEN** the page is rendered
- **WHEN** the get-involved section is displayed
- **THEN** it SHALL contain a heading "Join Our Mission"
- **AND** it SHALL show cards for Volunteer, Fundraise, and Partner

### Requirement: FAQ section

The system SHALL render an FAQ section with at least three questions.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least three question buttons

### Requirement: Donate section

The system SHALL render a donate section with donation amount options.

#### Scenario: Donate content

- **GIVEN** the page is rendered
- **WHEN** the donate section is displayed
- **THEN** it SHALL contain a heading "Every Dollar Makes a Difference"
- **AND** it SHALL show donation amount options including $25, $50, and $100

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

- **GIVEN** the Hopehand app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hopehand — Nonprofit Template"
