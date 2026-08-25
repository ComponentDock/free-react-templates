# Template: Azura (Business/Corporate Template)

## Purpose

Azura is a single-page business/corporate landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Stodeo" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Stodeo" — business/corporate template
  (source: https://colorlib.com/wp/template/stodeo/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/stodeo/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
  The TEMPLATES.md screenshot (`stodeo-free-template.jpg`) confirms the
  visual design: a blue-themed corporate template with dark blue overlays.
- **Section order (1:1):** Navbar (logo "Stodeo" + Home, Why Stodeo dropdown,
  Our Services, Gallery, About, Contact Us) → Hero ("Welcome To Our Site" +
  heading + description + "Get started" CTA) → Welcome split (image left +
  blue overlay box right with description) → Why Choose Us (counters: years,
  projects, clients + services list on the right) → Services ("Grow your
  business" + service-2 cards, dark blue overlay) → Blog Posts ("Our Blogs" /
  "Recent Blog Posts" + 3 post entries) → Footer (About + Connect socials,
  Navigation links, Services links, copyright).
- **Design tokens extracted from `css/style.css`:**
  - **Primary brand color: `#3369e7`** (blue) — used on `.btn-primary`,
    `.logo`.
  - **Secondary/dark color: `#133ea1`** (dark blue) — used on
    `.sec-welcome .box`, `.box-wrap` (services overlay).
  - **Accent/highlight: `#00aaff`** (light blue/cyan) — used on
    `.subheading`, `.counter strong`.
  - **Heading color: `#081b46`** (very dark navy).
  - **Font family: `"Noto Sans JP", sans-serif`** (Google Fonts, weights
    400 + 700).
  - **Button radius: `0.25rem`** (4px). White text on blue buttons.
  - **Service cards (`.service-2`):** icon + title + description.
  - **Post entries (`.post-entry`):** date + title + description + read-more.
  - **Footer background: `#efefef`** (light gray), text color `#888`.
  - **Counter numbers: `#00aaff`** (cyan), 50px font size.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/azura-<n>/<w>/<h>`); icons → lucide-react; Noto Sans
  via Google Fonts `<link>`; forms prevent default (no backend); blue primary
  (`#3369e7`) + dark blue secondary (`#133ea1`) + cyan accent (`#00aaff`)
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome with
  Component Dock link.

Azura lives in `apps/azura` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Azura",
dropdown-capable nav links, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Azura page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Azura" and links to Home, Why Azura, Our Services, Gallery, About, and Contact Us
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile hamburger menu

- **GIVEN** the page is rendered on a narrow viewport (≤991px)
- **WHEN** the navbar is displayed
- **THEN** a hamburger menu button SHALL be visible
- **AND** clicking it SHALL open a mobile navigation overlay

### Requirement: Hero section

The system SHALL render a hero section with a centered heading, description
paragraph, and "Get started" CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the subheading "Welcome To Our Site"
- **AND** it SHALL show a main heading
- **AND** it SHALL show a description paragraph
- **AND** it SHALL show a "Get started" CTA button

#### Scenario: Hero visual style

- **GIVEN** the hero section is displayed
- **WHEN** the user views the section
- **THEN** the subheading SHALL be cyan (`#00aaff`)
- **AND** the CTA button SHALL have a blue (`#3369e7`) background

### Requirement: Welcome split section

The system SHALL render a split section with an image on the left and a
dark blue overlay box on the right with descriptive text.

#### Scenario: Welcome split content

- **GIVEN** the page is rendered
- **WHEN** the welcome split is displayed
- **THEN** it SHALL show an image on the left
- **AND** it SHALL show a blue overlay box on the right with description text

#### Scenario: Welcome split layout

- **GIVEN** the welcome split is displayed
- **WHEN** the user views the section
- **THEN** the right box SHALL have a dark blue (`#133ea1`) background
- **AND** the text SHALL be white with reduced opacity

### Requirement: Why Choose Us section

The system SHALL render a "Why Choose Us" section with counter stats on the
left and a services/content area on the right.

#### Scenario: Why Choose Us content

- **GIVEN** the page is rendered
- **WHEN** the Why Choose Us section is displayed
- **THEN** it SHALL show counter stats (Years of experience, Projects, Clients)
- **AND** each counter SHALL display a large number with a label
- **AND** it SHALL show a services or content area

#### Scenario: Why Choose Us visual style

- **GIVEN** the Why Choose Us section is displayed
- **WHEN** the user views the section
- **THEN** the counter numbers SHALL be cyan (`#00aaff`), 50px font size
- **AND** the content area SHALL have a white background

### Requirement: Services section

The system SHALL render a services section with a heading, description, and
service cards, over a dark blue overlay background.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Grow your business"
- **AND** it SHALL show service cards with icons, titles, and descriptions
- **AND** the background SHALL be dark blue (`#133ea1`)

#### Scenario: Services visual style

- **GIVEN** the services section is displayed
- **WHEN** the user views the section
- **THEN** the heading SHALL be white
- **AND** the text SHALL be white with reduced opacity
- **AND** service cards SHALL display an icon, title, and description

### Requirement: Blog posts section

The system SHALL render a blog posts section with a heading and three
post entry cards.

#### Scenario: Blog posts content

- **GIVEN** the page is rendered
- **WHEN** the blog posts section is displayed
- **THEN** it SHALL show the subheading "Our Blogs"
- **AND** it SHALL show the heading "Recent Blog Posts"
- **AND** it SHALL show three post entries, each with a date, title, description, and read-more link

#### Scenario: Blog posts layout

- **GIVEN** the blog posts section is displayed
- **WHEN** the user views the section
- **THEN** the posts SHALL be arranged in a 3-column grid
- **AND** each post SHALL have a date, title, description, and read-more link

### Requirement: Footer

The system SHALL render a footer with an about section, social links,
navigation links, services links, and a copyright line with a Component Dock
link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about section with description
- **AND** it SHALL show social links (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble)
- **AND** it SHALL show Navigation and Services link columns
- **AND** it SHALL show a copyright line

#### Scenario: Footer Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user views the footer
- **THEN** it SHALL include a link to `https://www.componentdock.com/` (branded "Component Dock")
- **AND** the footer SHALL NOT reference ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Azura app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Azura — Business Corporate Template"

## Verification checklist

- [ ] `npm run spec:validate`
- [ ] `bash scripts/verify-app.sh azura` (typecheck + lint + 100% coverage tests + build)
- [ ] Screenshot review: blue brand, dark blue overlays, Noto Sans font, 7-section structure
