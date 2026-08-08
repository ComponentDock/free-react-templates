# Template: Terracotta (Architecture & Design Template)

## Purpose

Terracotta is a single-page architecture & design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Heaven" website template design (source:
https://colorlib.com/wp/template/heaven/), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Heaven" — architecture + interior design template
  (https://colorlib.com/wp/template/heaven/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/heaven/
  (HTTP 200, full rendered DOM + `css/style.css` extracted). Screenshot
  (`heaven-free-template.jpg`) viewed in the browser for the visual pass.
- **Section order (1:1):**
  1. Navbar: "Heaven x" logo, links Home / About / Service / Project / Blog /
     Single Blog / Elements / Contact.
  2. Hero (banner_part): full-bleed building photo with dark gradient overlay;
     slide content "ARCHITECTURE + DESIGN" tag + "HEAVEN X LEATEST PROJECT"
     headline + "learn more" button; carousel with prev/next arrows.
  3. Innovative strip: three cards (icon + "Inovative" + blurb).
  4. About Us: heading + blurb + "learn more" button.
  5. Our Service: huge faint "our service" watermark; 12 "Home Decor" service
     cards in a carousel (prev/next arrows).
  6. Our Project: heading; 12 project cards (image + "jhon doe" + "learn
     more") in a carousel with arrows.
  7. Blog Post: heading; 6 blog cards (image, "john deo", "May 02 2019",
     excerpt) + "NEXT" pagination button.
  8. Contact: orange block — "Melbourne" heading, email + phone, "Call
     Directly" + number, "Brand Office", "Working Hours".
  9. Footer: dark — About Us blurb + social links, Projects links, Contact us,
     Newsletter form, copyright line.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#ff7e00`** (buttons, accents, contact block); `#415094`
    secondary.
  - Light backgrounds `#f9f9ff`, `#f0e9ff`.
  - Font: **"Poppins"** (Google Fonts).
  - Orange "learn more" buttons with white text; dark charcoal footer.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/terracotta-<n>/<w>/<h>`); icons → lucide-react;
  carousels implemented as static grids (no vendor slider lib); no assets
  copied.

Terracotta lives in `apps/terracotta` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Terracotta",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Terracotta page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Terracotta" and links to Home, About, Service, Project, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a headline and a "learn more"
button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a "learn more" button

### Requirement: Innovative strip

The system SHALL render three feature cards below the hero.

#### Scenario: Innovative cards

- **GIVEN** the page is rendered
- **WHEN** the innovative strip is displayed
- **THEN** it SHALL show three cards with titles and blurbs

### Requirement: About section

The system SHALL render an about section with a heading and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "About Us"
- **AND** it SHALL show a blurb and a "learn more" button

### Requirement: Services section

The system SHALL render a services section with a heading and service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "our service"
- **AND** it SHALL show at least three service cards with titles and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and project cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL show at least three project cards with images and captions

### Requirement: Blog section

The system SHALL render a blog section with a heading and blog post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show at least three blog cards with titles and dates

### Requirement: Contact section

The system SHALL render a contact section with contact details.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show an email address and a phone number

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

- **GIVEN** the Terracotta app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Terracotta — Architecture & Design Template"
