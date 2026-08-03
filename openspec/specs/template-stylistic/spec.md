# Template: Stylistic (Model Agency Landing)

## Purpose

Stylistic is a single-page model-agency template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Stylistic"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a pink-accented model-agency page: a video hero ("Stylistic
Model Agency"), a featured model intro ("A Professional Model Agency" with
Andrea/AndreaSmith, Nicole/NicoleWall, Cindy/CindySmith, Jannah/JannahDoe),
a services band (Fashion Shows, Corporate Events, Commercial Photo Shots,
Exhibitions/Trade Shows), an "Our Tops Model's" grid (Andrea, Cassy,
Angela, May, Nicole, Jannah, Mariel, Maria, Ozawa, Maine), a "Recent Blog"
row ("Asia's Next Top Model"), a testimony band, an appointment band
("Contact Us" / "Become A Model?" / "Model Courses"), a quote band
("Request a Quote"), and a footer with Recent Blog / Site Links / "Have a
Questions?". Stylistic recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Stylistic" — free model agency website template
  (source: https://colorlib.com/wp/template/stylistic/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/stylistic/`
  (HTTP 200, 51.7KB) + stylesheet `css/style.css` (71.5KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`stylistic-free-template.jpg`) confirms the visual design (light
  sections, pink accents).
- **Section order (1:1):**
  1. Navbar (`ftco_navbar`): logo "Stylistic" + nav links.
  2. Hero (`video-hero js-fullheight`): "Stylistic Model Agency".
  3. Featured model (`ftco-featured-model`): "A Professional Model Agency"
     - model cards (Andrea/AndreaSmith, Nicole/NicoleWall, Cindy/CindySmith,
       Jannah/JannahDoe).
  4. Services (`ftco-section bg-dark`): 4 cards (Fashion Shows, Corporate
     Events, Commercial Photo Shots, Exhibitions/Trade Shows).
  5. Top models (`ftco-section`): "Our Tops Model's" + grid (Andrea,
     Cassy, Angela, May, Nicole, Jannah, Mariel, Maria, Ozawa, Maine).
  6. Blog (`ftco-section`): "Recent Blog" + post cards ("Asia's Next Top
     Model").
  7. Testimony (`testimony-section img`): client feedback band.
  8. Appointment (`ftco-appointment`): "Contact Us" / "Become A Model?" /
     "Model Courses".
  9. Quote (`ftco-quote`): "Request a Quote" band.
  10. Footer (`ftco-footer img`): brand + Recent Blog / Site Links /
      "Have a Questions?".
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#f34573** (pink — accents, buttons, headings) + dark
    **#212529** / **#343a40** text; `bg-dark` service band.
  - Font: **"Vidaloka"** (serif — headings) via Google Fonts + system sans
    body.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo + headline;
  featured model cards; services with lucide icons; top-models grid with
  initials avatars; blog cards with seeded photos; testimony band;
  appointment band; quote band; footer with link columns; all images
  picsum-seeded (`picsum.photos/seed/stylistic-N/w/h`); Google Fonts via
  `<link>`.

Stylistic lives in `apps/stylistic` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Stylistic",
a "Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Stylistic page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Stylistic" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width hero section with a headline.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Stylistic Model Agency")

### Requirement: Featured model

The system SHALL render a featured model section with the heading "A
Professional Model Agency" and at least four model cards.

#### Scenario: Featured cards

- **GIVEN** the page is rendered
- **WHEN** the featured model section is displayed
- **THEN** it SHALL show the heading "A Professional Model Agency"
- **AND** it SHALL render at least four model cards (Andrea, Nicole, Cindy, Jannah)

### Requirement: Services

The system SHALL render a services band with at least four cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services band is displayed
- **THEN** it SHALL render four cards (Fashion Shows, Corporate Events, Commercial Photo Shots, Exhibitions/Trade Shows)

### Requirement: Top models

The system SHALL render an "Our Tops Model's" section with at least eight
model tiles.

#### Scenario: Top models grid

- **GIVEN** the page is rendered
- **WHEN** the top models section is displayed
- **THEN** it SHALL show the heading "Our Tops Model's"
- **AND** it SHALL render at least eight model tiles

### Requirement: Recent Blog

The system SHALL render a "Recent Blog" section with at least three post
cards.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL render at least three post cards

### Requirement: Contact / Appointment

The system SHALL render an appointment section with "Become A Model?" and
"Model Courses" content.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** it SHALL show the heading "Become A Model?"
- **AND** it SHALL show the heading "Model Courses"

### Requirement: Footer

The system SHALL render a footer with the site name and link columns.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Stylistic"
- **AND** it SHALL show link columns (Site Links, "Have a Questions?")
