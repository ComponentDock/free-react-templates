# Template: Soar (Domain & Hosting Landing Page)

## Purpose

Soar is a single-page domain/hosting landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Raptor" website template design (see TEMPLATES.md), built
under a **different name** with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Raptor" — Free Bootstrap 4 domain & hosting
  template (source: https://colorlib.com/wp/template/raptor/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/raptor/
  (HTTP 200, full rendered DOM + `css/style.css` (71KB) extracted).
  The TEMPLATES.md screenshot (`raptor-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1, from the live preview):**
  1. Navbar: logo "Raptor." + Home, About, Domain, Hosting, Blog, Contact
     - "Get started".
  2. Hero: h1 "Design. Development. Hosting." + blurb + **Get started /
     Get domain** buttons on a teal→green diagonal gradient.
  3. Domain search: "Get A Domain Name — With FREE Email, DNS, Theft
     Protection, and other features" + search form + TLD prices — **.com
     9.75, .net 9.90, .biz $8.95, .me $7.95**.
  4. Services: "Why choose us" + **100% Uptime Guarantee, Safe and
     Secured, Our Dedicated Support** (icon + blurb).
  5. Pricing: "Pricing Plans — Our Best Pricing" + **Free $0** (100% free.
     Forever; 150 GB Bandwidth, 100 GB Storage, $1.00/GB Overages,
     All features), **Startup $19**, **Premium $49**, **Pro $99** — each
     with a **Get Started** button.
  6. Fun facts: "Some fun facts" + "More than 100,000 websites hosted" +
     counters (CMS Installation, Awards Won, Registered Domains,
     Satisfied Customers).
  7. Testimonials: "Our satisfied customer says" + quote + "Dennis Green,
     Marketing Manager".
  8. How it works: "How it works" + tabs (Next gen VPS / Performance /
     Effectiveness) + "Next gen VPS hosting" + copy.
  9. Newsletter: "Subscribe to our Newsletter" + email form.
  10. Recent Blog: 3 blog cards ("August 12, 2018 · Admin · 3 comments" +
      title "Even the all-powerful Pointing has no control about the
      blind texts").
  11. Footer: brand + blurb + link columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **teal `#2ebdc4`** with **green `#68e5b2`** accent; hero uses
    `linear-gradient(135deg, #2ebdc4 0%, #68e5b2 100%)`.
  - Light-blue `#78d5ef` buttons; green `#22d47b` accents; dark text
    `#3a4348`; muted `#6c757d`.
  - Fonts: **"Poppins"** + **"Work Sans"** (Google Fonts).
- **Recreation name:** Soar (NEW name — ColorLib source is "Raptor";
  evokes the domain/hosting "your site soars" theme). App folder
  `apps/soar`, package `@free-react-templates/soar`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/soar-<n>/<w>/<h>`); icons → lucide-react; domain
  search + newsletter forms prevent default (no backend); no assets copied.

Soar lives in `apps/soar` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Soar",
anchor links to the page's sections, a "Get started" button, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Soar page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Soar" and links to Home, Domain, Pricing, and Contact
- **AND** the navbar SHALL show a "Get started" button and a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and two buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Design. Development. Hosting."
- **AND** it SHALL show "Get started" and "Get domain" buttons

### Requirement: Domain search section

The system SHALL render a domain search section with a heading, a search
form, and a list of domain extensions with prices.

#### Scenario: Domain search content

- **GIVEN** the page is rendered
- **WHEN** the domain search section is displayed
- **THEN** it SHALL contain a heading "Get A Domain Name"
- **AND** it SHALL show a search form and prices for .com, .net, .biz, and .me extensions

#### Scenario: Domain search submit

- **GIVEN** the domain search form is displayed
- **WHEN** the user submits a domain query
- **THEN** the form SHALL prevent the default submission (no backend)

### Requirement: Services section

The system SHALL render a services section with a heading and three service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Why choose us"
- **AND** it SHALL show cards titled "100% Uptime Guarantee", "Safe and Secured", and "Our Dedicated Support"

### Requirement: Pricing section

The system SHALL render a pricing section with a heading and four plans,
each with a price and a "Get Started" button.

#### Scenario: Pricing content

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL contain a heading "Our Best Pricing"
- **AND** it SHALL show plans "Free" ($0), "Startup" ($19), "Premium" ($49), and "Pro" ($99)
- **AND** each plan SHALL have a "Get Started" button

### Requirement: Fun facts section

The system SHALL render a fun facts section with a heading and four counter
stats.

#### Scenario: Fun facts content

- **GIVEN** the page is rendered
- **WHEN** the fun facts section is displayed
- **THEN** it SHALL contain a heading "Some fun facts"
- **AND** it SHALL show stats for "CMS Installation", "Awards Won", "Registered Domains", and "Satisfied Customers"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading, a quote, and
an author.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Our satisfied customer says"
- **AND** it SHALL show a quote and the author "Dennis Green" with role "Marketing Manager"

### Requirement: How it works section

The system SHALL render a "How it works" section with a tab list and a
feature description.

#### Scenario: How it works content

- **GIVEN** the page is rendered
- **WHEN** the how-it-works section is displayed
- **THEN** it SHALL contain a heading "How it works"
- **AND** it SHALL show tabs "Next gen VPS", "Performance", and "Effectiveness"

#### Scenario: Tab switching

- **GIVEN** the how-it-works tabs are displayed
- **WHEN** the user activates the "Performance" tab
- **THEN** the active tab SHALL change and the description SHALL update

### Requirement: Newsletter section

The system SHALL render a newsletter section with a heading, a blurb, and an
email form.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL contain a heading "Subscribe to our Newsletter"
- **AND** it SHALL show an email input and a subscribe button

#### Scenario: Newsletter submit

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an email address
- **THEN** the form SHALL prevent the default submission and clear the input

### Requirement: Blog section

The system SHALL render a blog section with a heading and three blog cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Recent Blog"
- **AND** it SHALL show three cards, each with a date, author, comments count, and a title

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

- **GIVEN** the Soar app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Soar — Domain & Hosting Template"
