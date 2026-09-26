# Template: Cosmos (Portfolio Template)

## Purpose

Cosmos is a minimal, clean portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Space"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a light-background portfolio page with a dark navbar, hero
heading "Hey! I'm Space.", a 3-column portfolio grid, services section with
6 cards, about section with bio and work experience, contact form, and a
dark footer. Cosmos recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Space" — free portfolio website template
  (source: https://colorlib.com/wp/template/space/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/space/`
  (HTTP 200, 42KB). The rendered DOM is the reference below; the
  TEMPLATES.md screenshot (`space-free-template.jpg`) confirms the
  visual design (light sections, pink/red accents, dark navbar).
- **Section order (1:1):** Navbar → Hero → Portfolio → Services → About →
  Contact → Footer.
- **Design tokens (from css/style.css):**
  - Primary accent: `#ff2e63` (hot pink/red — logo dot, links, accents)
  - Dark background: `#1a1a2e` (navbar, footer)
  - Body text: `#000000`
  - Muted text: `#888888`
  - Light background: `#ffffff`
  - Heading font: Mulish (sans-serif)
  - Body font: Roboto Mono (monospace)
- **Colors mapped to Tailwind theme tokens in `src/index.css`.**

## Requirements

### Requirement: Navbar with navigation and mobile menu

Cosmos SHALL display a fixed dark navbar with the "Cosmos." logo (dot in
primary color), navigation links (Home, Portfolio, Services, About, Contact),
and a responsive mobile hamburger menu.

#### Scenario: Navbar renders all navigation links

- **WHEN** I visit the Cosmos page
- **THEN** I see links for "Home", "Portfolio", "Services", "About", "Contact"
- **AND** I see the "Cosmos" logo

#### Scenario: Mobile menu opens and closes

- **WHEN** I click the "Open menu" button
- **THEN** a mobile navigation panel appears
- **AND** I see a "Close menu" button

#### Scenario: Clicking a nav link closes mobile menu

- **WHEN** I open the mobile menu
- **AND** I click a navigation link
- **THEN** the mobile menu closes

### Requirement: Hero section with headline and CTA

Cosmos SHALL display a hero section with the heading "Hey! I'm Cosmos.",
a subtitle about the portfolio template, and a CTA button linking to
Component Dock.

#### Scenario: Hero displays headline and CTA

- **WHEN** I visit the Cosmos page
- **THEN** I see the text "Hey! I'm"
- **AND** I see the CTA "More free templates here"

### Requirement: Portfolio grid with 9 items

Cosmos SHALL display a 3-column grid of 9 portfolio items, each with an
image, hover overlay showing title and tags, and a link icon.

#### Scenario: Portfolio grid shows 9 items

- **WHEN** I visit the Cosmos page
- **THEN** I see 9 portfolio project images
- **AND** I see project titles like "Project Alpha"

### Requirement: Services section with 6 cards

Cosmos SHALL display a services section with a heading, wavy underline SVG,
and 6 service cards (Web Design, Photography, Marketing, App Development,
Branding, Search Ranking) in a 3x2 grid.

#### Scenario: Six service cards render

- **WHEN** I visit the Cosmos page
- **THEN** I see "Web Design", "Photography", "Marketing", "App Development",
  "Branding", "Search Ranking"

### Requirement: About section with bio and work experience

Cosmos SHALL display an about section with an experience badge ("12 Years
of experience"), a portfolio/CV links, an image, bio text, and work
experience cards in a 2x2 grid.

#### Scenario: About section displays bio and experience

- **WHEN** I visit the Cosmos page
- **THEN** I see "Bio" and "Work Experience" headings
- **AND** I see "12 Years of experience"
- **AND** I see work experience cards with company names

### Requirement: Contact form with validation

Cosmos SHALL display a contact form with Name, Email, Subject, and Message
fields, a "Send Message" button, and client-side validation that requires
Name, Email, and Message.

#### Scenario: Contact form renders all fields

- **WHEN** I visit the Cosmos page
- **THEN** I see inputs for Name, Email, Subject, Message
- **AND** I see a "Send Message" button

#### Scenario: Contact form submits successfully

- **WHEN** I fill in Name, Email, and Message
- **AND** I click "Send Message"
- **THEN** I see "Thank you!"

#### Scenario: Contact form validates required fields

- **WHEN** I submit the contact form without filling required fields
- **THEN** the form remains visible

### Requirement: Footer with Component Dock link

Cosmos SHALL display a dark footer with copyright text and a "Component Dock"
link to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** I visit the Cosmos page
- **THEN** the footer contains a link to "https://www.componentdock.com/"
