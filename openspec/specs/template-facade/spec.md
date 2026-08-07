# Template: Facade (Architecture Template)

## Purpose

Facade is a single-page architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Arclabs" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Arclabs" — architecture template
  (source: https://colorlib.com/wp/template/arclabs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arclabs/
  (HTTP 200, full rendered DOM + `css/main.css` (51KB) extracted).
  The TEMPLATES.md screenshot (`arclabs-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar (Home, About, Services, Pages, Projects,
  Blog, Contact) → Hero ("Building for society — Future Architechure" +
  "View project" ghost button, city-skyline photo with navy overlay,
  social icons) → Feature tiles (Creative Design, Experienced Style,
  Product Research, Affordable Price) → About ("About Us — We are world
  number one Company" + "Read More") → Recent Work ("Recent Work — View
  Our Project" + filters All, Popular, Latest, Following, Upcoming + four
  project cards: Dell Villa New York, Eedn Park Singapore, Sky Build
  Paris) → Call-to-action ("View Our Project" + video play button +
  duration "05:35") → Testimonials ("Testimonials — Happy Clients" +
  Danyel Yarde, Manel djuice, Mark Alviro Wiens) → Brand logos →
  Footer (link columns + newsletter + social + copyright).
- **Design tokens extracted from `main.css`:**
  - Primary **tan/bronze `#cea06c`** with **navy `#263a4e`**.
  - Light section backgrounds `#f9f9ff`, `#f7f7f7`; footer `#0e1424`.
  - Hero overlay `rgba(5,10,52,0.6)`.
  - Fonts: **"Roboto Condensed"** (headings) + **"Roboto"** (body),
    Google Fonts.
  - Buttons: `primary-btn` — transparent with 1px tan border, navy text;
    hover fills tan with white text. In the hero the button is a white
    ghost (white border/text, tan border on hover).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/arclabs-<n>/<w>/<h>`); icons → lucide-react +
  inline SVG brand icons; no assets copied.

Facade lives in `apps/facade` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Facade",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Facade page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Facade" and links to Home, About, Services, Projects, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a tagline, a headline, a
"View project" button, and social links.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the tagline "Building for Society"
- **AND** it SHALL contain a level-1 heading "Future Architechure"
- **AND** it SHALL show a "View project" button
- **AND** it SHALL show social links (Facebook, X, Instagram)

### Requirement: Feature tiles

The system SHALL render four feature tiles: "Creative Design", "Experienced
Style", "Product Research", and "Affordable Price".

#### Scenario: Feature tiles content

- **GIVEN** the page is rendered
- **WHEN** the feature tiles are displayed
- **THEN** it SHALL show tiles titled "Creative Design", "Experienced Style", "Product Research", and "Affordable Price"

### Requirement: About section

The system SHALL render an about section with a heading "We are world
number one Company" and a "Read More" link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain the heading "We are world number one Company"
- **AND** it SHALL show a blurb and a "Read More" link

### Requirement: Recent work section

The system SHALL render a recent work section with a heading, a filter bar,
and at least two project cards.

#### Scenario: Recent work content

- **GIVEN** the page is rendered
- **WHEN** the recent work section is displayed
- **THEN** it SHALL contain a heading "Recent Work" and a subheading "View Our Project"
- **AND** it SHALL show filter buttons "All", "Popular", "Latest", "Following", and "Upcoming"
- **AND** it SHALL show at least two project cards (e.g. "Dell Villa, New York" and "Eedn Park, Singapore")

#### Scenario: Project filtering

- **GIVEN** the recent work section is displayed
- **WHEN** the user presses a filter button (e.g. "Popular")
- **THEN** only the projects tagged with that filter SHALL remain visible

### Requirement: Call-to-action section

The system SHALL render a call-to-action section with a heading, a video
play button, and a duration label.

#### Scenario: Call-to-action content

- **GIVEN** the page is rendered
- **WHEN** the call-to-action section is displayed
- **THEN** it SHALL contain the heading "View Our Project"
- **AND** it SHALL show a play button and a duration label "05:35"

### Requirement: Testimonials section

The system SHALL render a testimonials section with a heading and at least
three client quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain the heading "Happy Clients"
- **AND** it SHALL show quotes from "Danyel Yarde", "Manel djuice", and "Mark Alviro Wiens"

### Requirement: Brand logos section

The system SHALL render a brand logos strip.

#### Scenario: Brand logos content

- **GIVEN** the page is rendered
- **WHEN** the brand logos section is displayed
- **THEN** it SHALL show at least three brand logo placeholders

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter signup, a
social links row, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show link columns (e.g. "Top Products", "Quick Links", "Features", "Resources")
- **AND** it SHALL show a newsletter email input with a "Subscribe" button
- **AND** it SHALL show social links (Facebook, X, LinkedIn)
- **AND** it SHALL show a copyright line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Facade app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Facade — Architecture Template"
