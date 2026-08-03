# Template: Hairsal (Hair Salon Landing)

## Purpose

Hairsal is a single-page hair-salon landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "HairSal" design (see TEMPLATES.md), built under the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a clean salon page with green accents: a hero slider
("Welcome to Hairsal" / "Hair Salon Expert" / "Beautiful Hair, Healthy
You!"), an about split with opening hours, a featured-services row (Barber
Razor, Location Pin, Barber Shave), a second about block, and a dark footer
with quick links and a newsletter form. Hairsal recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "HairSal" — free hair salon website template
  (source: https://colorlib.com/wp/template/hairsal/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hairsal/`
  (HTTP 200, 15.6KB) + stylesheet `css/style.css` (18.2KB). The rendered DOM
  is the reference below; the TEMPLATES.md screenshot
  (`hairsal-free-template.jpg`) confirms the visual design (light sections,
  green accents, dark footer).
- **Section order (1:1):**
  1. Header: "Hairsal" logo + nav (Home, About, Services, Book Online,
     Contact).
  2. Hero slider (`site-section`): "Welcome to Hairsal" / "Hair Salon
     Expert" / "Beautiful Hair, Healthy You!" headlines + CTA.
  3. About (`site-section bg-light`): "Welcome to Hair Salon" + copy +
     "Opening Hours" panel.
  4. Featured services (`site-section`): "Experience Our Outstanding
     Services" + 4 icon cards (Barber Razor, Location Pin, Barber Shave,
     New hairstyle!).
  5. About Hairsal (`site-section`): "About Hairsal" + copy + stats.
  6. Footer: "Quick Menu" links + "Subscribe Newsletter" form + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#8bc34a** (light green — accents, buttons).
  - Dark text: **#25262a**; light section backgrounds `#edf0f5`/`#f4f5f9`;
    footer dark `#25262a`.
  - Font: **"Display Playfair"** for display headings (recreated with Google
    Font **Playfair Display**) + sans body.
  - Buttons: green filled, uppercase.
- **Recreation decisions:** repo-standard Navbar (site name, Home link,
  dark-mode toggle) + Footer chrome; hero = seeded picsum photo slider with
  the headline; about split with opening hours; featured services with
  lucide icons; second about block with stats; footer with newsletter form;
  all images picsum-seeded (`picsum.photos/seed/hairsal-N/w/h`); Google
  Fonts via `<link>`.

Hairsal lives in `apps/hairsal` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Hairsal", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Hairsal page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Hairsal" and a "Home" link pointing to the page root
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero

The system SHALL render a full-width hero with a background image, a level-1
headline, and a call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 headline (e.g. "Beautiful Hair, Healthy You!")
- **AND** it SHALL show a call-to-action button

### Requirement: About section with opening hours

The system SHALL render an about section with a heading, supporting copy, and
opening hours.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a heading (e.g. "Welcome to Hair Salon")
- **AND** it SHALL show opening hours

### Requirement: Featured services

The system SHALL render a featured-services section with at least three icon
cards.

#### Scenario: Service cards

- **GIVEN** the page is rendered
- **WHEN** the featured services section is displayed
- **THEN** it SHALL show the heading "Experience Our Outstanding Services"
- **AND** it SHALL render three service cards (Barber Razor, Location Pin, Barber Shave)

### Requirement: About Hairsal

The system SHALL render an "About Hairsal" section with a heading and
supporting copy.

#### Scenario: About Hairsal content

- **GIVEN** the page is rendered
- **WHEN** the About Hairsal section is displayed
- **THEN** it SHALL show the heading "About Hairsal"
- **AND** it SHALL show at least one lead paragraph

### Requirement: Footer

The system SHALL render a footer with the site name, quick links, a
newsletter form, and social links.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Hairsal" and quick links
- **AND** it SHALL show a newsletter form (e.g. "Subscribe Newsletter")
- **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark and
a document title.

#### Scenario: Full page render

- **GIVEN** the Hairsal app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Hairsal — Hair Salon Template"
