# Template: Villa (Interior Design Template)

## Purpose

Villa is a single-page interior design / architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Layal" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Layal" — interior design / architecture template
  (source: https://colorlib.com/wp/template/layal/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/layal/
  (HTTP 200, full rendered DOM + `css/main.css` extracted).
  The TEMPLATES.md screenshot (`layal-free-interior-design-wwebsite-template.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Projects,
  Contact) → Feature ("Becoming A Dvd Repair Expert Online" numbered
  steps 01/02/03 on a black band) → Services ("Our Offred Services" +
  "Reasons To Choose Notebook" cards) → Projects ("Our latest Projects"
  gallery on a dark photo band) → Newsletter ("Subscribe Us" email band)
  → Footer.
- **Design tokens extracted from `css/main.css`:**
  - Primary **sky blue `#77d5f7`** (accents) + **indigo `#3c50ca`**
    (buttons/gradient partner).
  - Button hover uses the **indigo→sky gradient**
    (`linear-gradient(0deg, #3c50ca, #77d5f7)`); pill radius `20px`,
    uppercase white label.
  - Feature band: **black background** (`#000`), white headings, grey
    body text.
  - Project band: photo background with **rgba(0,0,0,0.8) overlay**,
    white headings.
  - Light backgrounds `#f9f9ff`; body text `#777777`; headings `#222222`.
  - Font: **"Poppins"** (Google Fonts).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/villa-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Villa lives in `apps/villa` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Villa",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Villa page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Villa" and links to Home, About, Services, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Feature section

The system SHALL render a features section on a dark band with numbered
feature steps.

#### Scenario: Feature content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show at least three numbered feature steps with titles and blurbs

### Requirement: Services section

The system SHALL render a services section with a heading and service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Offred Services"
- **AND** it SHALL show at least three service cards with titles and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery on a dark photo band.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our latest Projects"
- **AND** it SHALL show at least three project images with captions

### Requirement: Newsletter section

The system SHALL render a newsletter band with an email input.

#### Scenario: Newsletter content

- **GIVEN** the page is rendered
- **WHEN** the newsletter section is displayed
- **THEN** it SHALL show an email input and a subscribe button

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

- **GIVEN** the Villa app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Villa — Interior Design Template"
