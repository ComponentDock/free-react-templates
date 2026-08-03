# Template: Hopefoundation (Astro Template)

## Purpose

Hopefoundation is a single-page church community landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Hopefoundation" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Hopefoundation" — church / faith community website
  template (source: https://colorlib.com/wp/template/hopefoundation/).
- **Demo DOM analyzed:** https://hopefoundation-colorlib.pages.dev/ (HTTP
  200; `https://preview.colorlib.com/theme/hopefoundation/` returns 404 —
  the preview portal loads demos from `<slug>-colorlib.pages.dev` per
  `preview.colorlib.com/assets/js/products.js`). The TEMPLATES.md screenshot
  (`hopefoundation-template-1770211243073.jpg`) is the visual reference; the
  design below is reconstructed from the DOM structure and Tailwind classes.
- **Section order (1:1):**
  1. Navbar: About, Watch, Connect, Give + "Plan Your Visit" button.
  2. Hero: "Everyone is welcome here." + "Watch Online" / "Join Us" buttons.
  3. Service Times: Sunday (9:00 AM & 11:00 AM) and Wednesday (7:00 PM)
     cards + Our Location card (1200 Grace Avenue, Austin, TX 78701).
  4. You're Invited ("What to Expect"): 4 cards — Welcoming Community,
     Engaging Worship, Relevant Teaching, Great Kids Programs.
  5. Recent Messages: 4 message cards — "Peace in the Storm" (Unshakeable
     series), "Faith Over Fear", "Built to Last", "The Gift of Hope"
     (Christmas at Hope City) — each with pastor, date, duration.
  6. Ways to Connect: 4 cards — Plan Your Visit, Join a Group, Serve with
     Us, Next Steps.
  7. Success Stories: "Real People. Real Hope." — 3 testimonial quotes with
     "Member since 2019/2022/2021" attributions.
  8. CTA: "Your story isn't over." + "Watch a Message" button + stats
     (10+ Years Serving Austin, Weekly Attendance).
  9. Footer: Visit / Connect / Resources / Location / Contact / Service
     Times columns, phone (555-234-5678), email hello@hopecitychurch.com,
     service times, copyright.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#f59e0b** (amber-500; scale #fbbf24, #fcd34d, #d97706,
    #b45309) — CTA accents, highlights.
  - Neutrals: white / grays (#e3e3e3, #a4a4a4, #818181, #515151, #434343,
    #383838, #1a1a1a) / black — dark, warm sections.
  - Fonts: **"Outfit"** (300–800) via Google Fonts.
  - Shapes: rounded-lg/xl cards, pill buttons.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/hopefoundation-<n>/<w>/<h>`); icons → lucide-react;
  Outfit via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.

Hopefoundation lives in `apps/hopefoundation` and uses shared components
from `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name
"Hopefoundation", anchor links to the page's sections, and a dark-mode
toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hopefoundation page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hopefoundation" and links to
  Service Times and Ways to Connect
- **AND** the navbar SHALL show a "Plan Your Visit" button and a dark-mode
  toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and call-to-action
buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Everyone is welcome here."
- **AND** it SHALL show "Watch Online" and "Join Us" buttons

### Requirement: Service Times section

The system SHALL render a service times section with Sunday and Wednesday
cards and a location card.

#### Scenario: Service times content

- **GIVEN** the page is rendered
- **WHEN** the service times section is displayed
- **THEN** it SHALL contain a heading "Service Times"
- **AND** it SHALL show Sunday and Wednesday service cards and an "Our
  Location" card

### Requirement: Welcome section

The system SHALL render a "You're Invited" section with at least four value
cards.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL contain a heading "You're Invited"
- **AND** it SHALL show cards for Welcoming Community, Engaging Worship,
  Relevant Teaching, and Great Kids Programs

### Requirement: Messages section

The system SHALL render a recent messages section with at least four message
cards.

#### Scenario: Messages content

- **GIVEN** the page is rendered
- **WHEN** the messages section is displayed
- **THEN** it SHALL contain a heading "Recent Messages"
- **AND** it SHALL show message cards including "Peace in the Storm" and
  "Faith Over Fear"

### Requirement: Connect section

The system SHALL render a ways-to-connect section with at least four cards.

#### Scenario: Connect content

- **GIVEN** the page is rendered
- **WHEN** the connect section is displayed
- **THEN** it SHALL contain a heading "Ways to Connect"
- **AND** it SHALL show cards for Plan Your Visit, Join a Group, Serve with
  Us, and Next Steps

### Requirement: Testimonials section

The system SHALL render a success stories section with at least three
testimonial quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Real People. Real Hope."
- **AND** it SHALL show at least three testimonial quotes

### Requirement: Call to action

The system SHALL render a closing CTA with a headline, a button, and stats.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Your story isn't over."
- **AND** it SHALL show a "Watch a Message" button and church stats

### Requirement: Footer

The system SHALL render a footer with link columns, contact details, and a
copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show contact details including an email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Hopefoundation app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hopefoundation — Church Template"
