# Template: Cogwork (Industrial Company Landing)

## Purpose

Cogwork is a single-page industrial company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Industries" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark-navbar industrial page with orange accents: a hero
slider ("We Are Industrial Company", "Create, Enhance and Sustain"), a
features row (Automotive Parts, Maintenance Services, Green Energy), an
engineering section with image + 4 feature items, an about section with
image + text, a projects gallery (6 cards), a testimonials carousel
("Happy Clients"), blog posts (4 items), a CTA banner (orange), and a
footer with About Us, Contact Info, Quick Links, and copyright. Cogwork
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Industries" — free industrial company website template
  (source: https://colorlib.com/wp/template/industries/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/industries/`
  (HTTP 200, 504 lines) + stylesheet `css/style.css` (2305 lines). The
  TEMPLATES.md screenshot (`industries-free-template.jpg`) confirms the
  visual design (dark navbar, orange accents, light sections).
- **Section order (1:1):**
  1. Navbar: dark bg (#343a40), brand "Industries", nav links (Home, About,
     Projects, Services dropdown, Blog, Contact).
  2. Hero Slider: two slides with background images, play button, heading,
     subtitle.
  3. Features (bg-light): 3-column grid — icon + heading + description
     (Automotive Parts, Maintenance Services, Green Energy).
  4. Engineering: heading "We Are Reliable Engineering In House", image
     left, 4 feature items with icons (Green Energy, Precision Mechanics,
     Construction Machines, Reliable and Stable).
  5. About: image left, text right — "Create, Enhance and Sustain" +
     "Read More" link.
  6. Projects Gallery: "Our Latest Projects" heading, 3x2 grid of project
     cards with hover overlay.
  7. Testimonials (bg-light): "Happy Clients" — 3 testimonial cards with
     avatar, name, role, quote.
  8. Blog Posts: "Blog Posts" heading, 2-column layout, 4 posts with image
     - date + title + "Read More".
  9. CTA Banner (bg-primary #fd5f00): heading + "Contact Us" button.
  10. Footer: 3 columns (About Us + social icons, Contact Info, Quick Links)
      - copyright with Component Dock link.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#fd5f00** (orange), hover **#d75100**.
  - Body text: **#212529**, muted: **#6c757d**.
  - Light section bg: **#f8f9fa**.
  - Dark navbar: **#343a40**.
  - Footer bg: **#fff**, border-top: **#eee**.
  - Font: **"Oxygen"** (Google Fonts, weights 400/700).
  - Buttons: orange primary, white outline on dark bg.
- **Recreation decisions:** dark navbar with "Cogwork" brand + nav links +
  hamburger toggle; hero slider with auto-rotation (5s interval); features
  section with lucide icons; engineering section with image + feature grid;
  about section with image + text; projects gallery with hover overlays;
  testimonials with avatar cards; blog posts with image thumbnails; CTA
  banner with orange bg; footer with Component Dock link; all images
  picsum-seeded (`picsum.photos/seed/cogwork-N/w/h`); Google Fonts via
  `<link>`.

Cogwork lives in `apps/cogwork` and uses shared components from
`packages/ui` (cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Cogwork", a
"Home" link, an "About" link, a "Projects" link, a "Services" dropdown, a
"Blog" link, a "Contact" link, and a mobile hamburger toggle.

#### Scenario: Navbar content

- **GIVEN** the Cogwork page is rendered
- **WHEN** the user views the navbar
- **THEN** the brand text "Cogwork" is visible
- **AND** the links "Home", "About", "Projects", "Blog", "Contact" are visible

#### Scenario: Mobile hamburger toggle

- **GIVEN** the Cogwork page is rendered on a mobile viewport
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the navigation menu expands
- **AND** the toggle button's aria-expanded attribute is "true"

#### Scenario: Services dropdown

- **GIVEN** the Cogwork page is rendered
- **WHEN** the user clicks the "Services" dropdown button
- **THEN** the dropdown items "Architectural Design", "Interior", "Building" are visible

### Requirement: Hero slider

The system SHALL render a hero section with two auto-rotating slides, each
containing a background image, a play button, a heading, and a subtitle.

#### Scenario: Slide content

- **GIVEN** the Cogwork page is rendered
- **WHEN** the user views the hero section
- **THEN** the heading "We Are Industrial Company" is visible
- **AND** the heading "Create, Enhance and Sustain" is visible
- **AND** two play buttons are present

#### Scenario: Auto-rotation

- **GIVEN** the Cogwork page is rendered
- **WHEN** 5 seconds pass
- **THEN** the visible slide transitions to the next one

### Requirement: Features section

The system SHALL render a features section with three feature cards on a
light background, each containing an icon, heading, and description.

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** the user views the section
- **THEN** three feature cards are visible: "Automotive Parts", "Maintenance Services", "Green Energy"

### Requirement: Engineering section

The system SHALL render an engineering section with a heading, an image, and
four feature items with icons.

#### Scenario: Engineering content

- **GIVEN** the engineering section is rendered
- **WHEN** the user views the section
- **THEN** the heading "We Are Reliable Engineering In House" is visible
- **AND** four items are visible: "Green Energy", "Precision Mechanics", "Construction Machines", "Reliable and Stable"

### Requirement: About section

The system SHALL render an about section with an image, a heading, a
paragraph, and a "Read More" link.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the user views the section
- **THEN** the heading "Create, Enhance and Sustain" is visible
- **AND** the "Read More" link is visible

### Requirement: Projects gallery

The system SHALL render a projects gallery with a heading, subtitle, and six
project cards in a 3-column grid with hover overlay.

#### Scenario: Project cards

- **GIVEN** the projects section is rendered
- **WHEN** the user views the section
- **THEN** the heading "Our Latest Projects" is visible
- **AND** six project cards are visible

### Requirement: Testimonials

The system SHALL render a testimonials section on a light background with
a heading and three testimonial cards.

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is rendered
- **WHEN** the user views the section
- **THEN** the heading "Happy Clients" is visible
- **AND** three testimonials are visible with names and quotes

### Requirement: Blog posts

The system SHALL render a blog section with a heading and four blog post
items in a 2-column layout.

#### Scenario: Blog post items

- **GIVEN** the blog section is rendered
- **WHEN** the user views the section
- **THEN** the heading "Blog Posts" is visible
- **AND** four blog posts are visible with dates and "Read More" links

### Requirement: CTA banner

The system SHALL render a full-width CTA banner with an orange background,
a heading, description text, and a "Contact Us" button.

#### Scenario: CTA content

- **GIVEN** the CTA banner is rendered
- **WHEN** the user views the section
- **THEN** the heading "Create, Enhance and Sustain" is visible
- **AND** the "Contact Us" button is visible

### Requirement: Footer

The system SHALL render a footer with About Us, Contact Info, Quick Links
columns, social media links, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user views the footer
- **THEN** the "About Us", "Contact Info", "Quick Links" sections are visible
- **AND** social media links (Twitter, Facebook, LinkedIn, Instagram) are present
- **AND** a link to "Component Dock" (https://www.componentdock.com/) is present

#### Scenario: Footer accessibility

- **GIVEN** the footer is rendered
- **WHEN** a screen reader accesses the page
- **THEN** the footer has role="contentinfo"
