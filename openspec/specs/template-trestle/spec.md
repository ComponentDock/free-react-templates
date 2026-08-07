# Template: Trestle (Architecture Template)

## Purpose

Trestle is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Arcade" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Arcade" — architecture template
  (source: https://colorlib.com/wp/template/arcade/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arcade/
  (HTTP 200, full rendered DOM + `css/style.css` (36KB) extracted).
  The TEMPLATES.md screenshot (`arcade-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1, verified against live DOM):**
  1. Header: top bar (phone **+675 334 567 223**) + navbar (Home, About us,
     Services, Portfolio, Contact).
  2. Hero: **"Minimalistic Architecture and more"** + **See Project**
     (light `#ededed` background).
  3. Studio: **"We are a creative Architecture Studio"** + blurb + **See
     Project**.
  4. Services: **"Services"** + 6 cards — Plans and Projects, Conceptual
     Architecture, Apartment Buildings, Skyscrapers Buildings,
     Documentation, Restauration Projects — each with **READ MORE**.
  5. CTA: **"Dare to dream of a modern home"** + blurb (dark section).
  6. Milestones: **14** Years of Experience · **237** Projects Taken ·
     **11k** Twitter Followers · **12** Awards Won.
  7. Projects: **"Projects"** + filter nav (All, Restaurations, Buildings,
     Apartments) + project cards ("Biggest Restaurations", "Office
     Building", ...) each with **See Project**.
  8. Clients: brand logo strip (5 logos, non-interactive placeholders).
  9. Footer: social links (Pinterest, LinkedIn, Instagram, Facebook,
     Twitter) + link columns (Company, Support, Site Map) + Newsletter
     - copyright line.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#baff00`** (buttons, accents, section-title block).
  - Dark sections `#222222`, `#121212`; light `#f0f0f0`, `#ededed`.
  - Muted text `#727272`.
  - Font: **"Roboto"** (Google Fonts).
  - Buttons: `.site-btn` — bold, 4px solid border, min-width 200px,
    padding 19px 0; dark variant for light backgrounds, light variant for
    dark backgrounds, solid lime fill for the hero CTA.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/trestle-<n>/<w>/<h>`); icons → lucide-react;
  brand logos → inline SVG initials; no assets copied.

Trestle lives in `apps/trestle` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top bar with a phone number and a navigation bar
with the site name "Trestle", anchor links to the page's sections, and a
dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Trestle page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Trestle" and links to Home, About, Services, Projects, and Contact
- **AND** the top bar SHALL show the phone number "+675 334 567 223"

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "See
Project" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Minimalistic Architecture and more"
- **AND** it SHALL show a "See Project" button

### Requirement: Studio section

The system SHALL render a studio section with a heading "We are a creative
Architecture Studio", a blurb, and a "See Project" button.

#### Scenario: Studio content

- **GIVEN** the page is rendered
- **WHEN** the studio section is displayed
- **THEN** it SHALL contain the heading "We are a creative Architecture Studio"
- **AND** it SHALL show a blurb and a "See Project" button

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards, each with a "Read More" link.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show cards titled "Plans and Projects", "Conceptual Architecture", "Apartment Buildings", "Skyscrapers Buildings", "Documentation", and "Restauration Projects" with "Read More" links

### Requirement: CTA banner

The system SHALL render a dark call-to-action banner with a heading and a
blurb.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain the heading "Dare to dream of a modern home"
- **AND** it SHALL show a blurb paragraph

### Requirement: Milestones

The system SHALL render four milestone statistics with numbers and labels.

#### Scenario: Milestone stats

- **GIVEN** the page is rendered
- **WHEN** the milestones section is displayed
- **THEN** it SHALL show "14" Years of Experience, "237" Projects Taken, "11k" Twitter Followers, and "12" Awards Won

### Requirement: Projects section

The system SHALL render a projects section with a heading, a category
filter, and project cards each with a "See Project" link.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain the heading "Projects" and filter buttons "All", "Restaurations", "Buildings", and "Apartments"
- **AND** it SHALL show project cards with titles and "See Project" links

### Requirement: Clients strip

The system SHALL render a client logo strip with five brand placeholders.

#### Scenario: Clients content

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL show five client brand placeholders

### Requirement: Footer

The system SHALL render a footer with social links, link columns, a
newsletter form, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show social links (Pinterest, LinkedIn, Instagram, Facebook, Twitter)
- **AND** it SHALL show link columns and a newsletter input with a subscribe button
- **AND** it SHALL show a copyright line

#### Scenario: Newsletter submit

- **GIVEN** the footer newsletter form is displayed
- **WHEN** the user types an email and presses the subscribe button
- **THEN** the form SHALL submit without errors and the input SHALL clear

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Trestle app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Trestle — Architecture Template"
