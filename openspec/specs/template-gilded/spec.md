# Template: Gilded (Hair Salon Landing)

## Purpose

Gilded is a single-page hair-salon landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Akame"
design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a light salon page with gold accents: a welcome hero ("We
Care About Your Hair" / "Beautiful Hair Comes From A Legendary."), an
about split, an "Our Services" row (Coloring, Haircut, Hairstyle), a
"Why Choose Us" band, an "Our Work" portfolio grid, an "Our Experts" team
(Mila Hartley, Teigan Duran, Tanya Ramsay, Donna Carr), a certificate band,
a "Latest News" blog row, a CTA band, and a footer with opening times and
contact details. Gilded recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Akame" — free hair salon website template
  (source: https://colorlib.com/wp/template/akame/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/akame/`
  (HTTP 200, 36.3KB) + stylesheet `style.css` (51.1KB). The rendered DOM is
  the reference below; the TEMPLATES.md screenshot
  (`akame-free-template.jpg`) confirms the visual design (light sections,
  gold accents).
- **Section order (1:1):**
  1. Header (`top-header-area` + `main-header-area`): logo + nav (Home,
     About Us, Services, Portfolio, Blog, Blog Details, Contact).
  2. Welcome (`welcome-area`): "We Care About Your Hair" / "Hair Salon" /
     "Beautiful Hair Comes From A Legendary." + CTA.
  3. About (`akame-about-area section-padding-80-0`): about split with
     copy.
  4. Services (`akame-service-area`): "Our Services" + 3 icon cards
     (Coloring, Haircut, Hairstyle).
  5. Why choose us (`why-choose-us-area bg-gray`): "Why Choose Us" band.
  6. Work (`our-work`): "Our Work" + portfolio grid (Hairstyle tiles).
  7. Experts (`akame-our-expert-area`): "Our Experts" + 4 member cards
     (Mila Hartley, Teigan Duran, Tanya Ramsay, Donna Carr).
  8. Certificate (`our-certificate-area`): certificate band.
  9. Blog (`akame-blog-area`): "Latest News" + post cards ("Make Stilo Your
     Number One Choice").
  10. CTA (`akame-cta-area bg-gray`): call-to-action band.
  11. Footer: "Opening times" + "Contact Us" + social links.
- **Design tokens extracted from `style.css`:**
  - Brand color: **#bca858** (gold — accents, buttons, headings) + dark
    **#252525**; accent red **#cb242e** / blue **#4b62b3** in highlights.
  - Font: **"Playfair Display"** (serif headings) + **"Open Sans"** (sans
    body) via Google Fonts.
  - Sections: light white / `bg-gray` bands.
  - Buttons: gold filled, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; welcome = seeded picsum photo with the
  headline; about split; services with lucide icons; why-choose-us band;
  portfolio grid with seeded photo tiles; expert cards with initials
  avatars; blog cards with seeded photos; CTA band; footer with opening
  times and social links; all images picsum-seeded
  (`picsum.photos/seed/gilded-N/w/h`); Google Fonts via `<link>`.

Gilded lives in `apps/gilded` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Gilded", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Gilded page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Gilded" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Welcome hero

The system SHALL render a full-width welcome section with a background image,
a level-1 headline, and a call-to-action button.

#### Scenario: Welcome content

- **GIVEN** the page is rendered
- **WHEN** the welcome section is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Beautiful Hair Comes From A Legendary.")
- **AND** it SHALL show a call-to-action button

### Requirement: About

The system SHALL render an about split section with a heading and
introductory copy.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "The House of Hair Salon & Spa"
- **AND** it SHALL show a paragraph of introductory copy

### Requirement: Services

The system SHALL render an "Our Services" section with at least three service
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render three service cards (Coloring, Haircut, Hairstyle)

### Requirement: Why Choose Us

The system SHALL render a "Why Choose Us" band with at least four feature
items.

#### Scenario: Why-choose-us content

- **GIVEN** the page is rendered
- **WHEN** the why-choose-us band is displayed
- **THEN** it SHALL show the heading "Why Choose Us"
- **AND** it SHALL render at least four feature items

### Requirement: Our Work portfolio

The system SHALL render an "Our Work" section with at least four portfolio
tiles.

#### Scenario: Work content

- **GIVEN** the page is rendered
- **WHEN** the work section is displayed
- **THEN** it SHALL show the heading "Our Work"
- **AND** it SHALL render at least four portfolio tiles

### Requirement: Experts team

The system SHALL render an "Our Experts" section with at least four member
cards.

#### Scenario: Expert cards

- **GIVEN** the page is rendered
- **WHEN** the experts section is displayed
- **THEN** it SHALL show the heading "Our Experts"
- **AND** it SHALL render at least four member cards (Mila Hartley, Teigan Duran, Tanya Ramsay, Donna Carr)

### Requirement: Blog

The system SHALL render a "Latest News" section with at least three post
cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest News"
- **AND** it SHALL render at least three post cards with a title and a date

### Requirement: CTA band

The system SHALL render a call-to-action band with a headline and a button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the headline "Make Gilded Your Number One Choice"
- **AND** it SHALL show a call-to-action button

### Requirement: Footer

The system SHALL render a footer with the site name, opening times, and social
links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Gilded" and opening times
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Gilded app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Gilded — Hair Salon Template"
