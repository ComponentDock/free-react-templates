# Template: Skyline (Architecture Template)

## Purpose

Skyline is a single-page real-estate / architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dreamrs" website template design (source:
https://colorlib.com/wp/template/dreamrs/), built under a DIFFERENT name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dreamrs" — real estate / architecture template
  (https://colorlib.com/wp/template/dreamrs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dreamrs/
  (HTTP 200; `css/style.css` extracted). The TEMPLATES.md screenshot
  (`dreamrs-free-template.jpg`) shows the hero: white "DREAMRS" logo, red
  gradient overlay over an aerial residential photo, big white headline
  "Proparties Now In City" on Poppins-like geometry.
- **Section order (1:1):** Navbar → Hero (banner) → About (image + blurb +
  counters) → Projects ("our project", 8 property cards) → Services
  ("our services", 4 cards) → Gallery ("Luxuries Apartment", 4 listings with
  beds/baths/sqft meta) → Blog ("our blog", 3 cards) → Footer (About Us /
  Contact Info / Important Link / Newsletter).
- **Design tokens extracted from `style.css`:**
  - Primary **red `#ff3334`** (buttons, accents, hover); secondary
    `#415094`.
  - Light backgrounds `#f9f9ff` (paper) and `#f0e9ff` (lavender).
  - Font: **"Poppins"** (Google Fonts).
  - Buttons: red pill (`border-radius: 50px`), white text.
  - Hero: full-height background image with a red gradient overlay fading
    right.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/skyline-<n>/<w>/<h>`); icons → lucide-react (brand
  icons as inline SVG); newsletter form prevents default (no backend); no
  assets copied. Original copy typos ("Proparties", "Doee lights without
  darkness that said good deep years very.") are paraphrased to the same
  kind of content (headline, card titles).

Skyline lives in `apps/skyline` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Skyline",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Skyline page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Skyline" and links to Home, About, Services, Projects, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user opens the mobile menu
- **THEN** a mobile navigation SHALL appear with the same links
- **AND** selecting a link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with an eyebrow, a headline, a
blurb, and a "Learn More" button over a background image with a red overlay.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show an eyebrow label, a blurb, and a "Learn More" button
- **AND** it SHALL show a background image with descriptive alt text

### Requirement: About section

The system SHALL render an about section with an image, a heading, a blurb,
and three stat counters.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading and a blurb
- **AND** it SHALL show counters for projects, clients, and team members

### Requirement: Projects section

The system SHALL render a projects section with a heading and property
cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Projects"
- **AND** it SHALL show at least six property cards with images, category
  labels, and titles

### Requirement: Services section

The system SHALL render a services section with a heading and four service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "Our Services"
- **AND** it SHALL show four service cards with icons, titles, and blurbs

### Requirement: Gallery section

The system SHALL render a gallery section with a heading and listing cards
with beds/baths/sqft meta.

#### Scenario: Gallery content

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL contain a heading "Luxuries Apartment"
- **AND** it SHALL show at least three listing cards with titles and meta
  (beds, baths, square footage)

### Requirement: Blog section

The system SHALL render a blog section with a heading and three article
cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Our Blog"
- **AND** it SHALL show three article cards with images and titles

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form, social
links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns and a copyright line
- **AND** it SHALL show a newsletter form and social links (Facebook, X,
  LinkedIn, Instagram)
- **AND** submitting the newsletter form SHALL clear the email field

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Skyline app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Skyline — Architecture Template"
