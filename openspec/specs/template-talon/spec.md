# Template: Talon (Modern Business Landing Page)

## Purpose

Talon is a single-page modern business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Zeta" website template design (see TEMPLATES.md), built
under a DIFFERENT name ("Talon") with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Zeta" — modern business / agency landing page
  (source: https://colorlib.com/wp/template/zeta/).
- **Demo DOM analyzed:** The TEMPLATES.md screenshot (`zeta-free-template.jpg`)
  is the visual reference; the design below is reconstructed from the
  preview image and ColorLib description.
- **Section order (1:1, from preview):**
  1. Navbar (`header`): "Talon." logo (dark text, orange dot) + Home (orange
     active state), Services, Elements, Blog, Contact links.
  2. Social bar: Orange bar with social icons (Pinterest, Facebook, Twitter,
     Dribbble, Behance, LinkedIn).
  3. Hero (`section.banner`): Full-width parallax background image, h1
     "Do you need a modern website?" ("modern" bold), blurb, **Discover →**
     orange CTA button.
  4. Services (`section.services`): h2 "Our Services" + blurb + 4 service
     cards (Web Design, Development, SEO, Marketing) with icons.
  5. Features (`section.features`): h2 "Why Choose Us" + feature grid with
     progress bars / feature highlights.
  6. About split (`section.about`): h2 "About Us" + blurb + about image
     (right) + stats (projects, clients, awards).
  7. Milestones (`section.milestones`): Counter-style stats — projects
     completed, happy clients, awards, coffee cups.
  8. Testimonials (`section.testimonials`): h2 "What People Say" + blurb +
     2 testimonial cards with avatar, name, role, quote.
  9. Blog (`section.blog`): h2 "Latest Blog" + 3 blog post cards (image,
     category, title, excerpt, read more link).
  10. Footer: Multi-column — About Talon blurb + social icons; Quick Links;
      Support links; Contact info (address, phone, email); copyright line
      - "Made with Component Dock" link.
- **Design tokens:**
  - Primary **orange `#ff5a00`** (accents, active states, buttons).
  - Light section backgrounds `#f9f9f9` (services), `#ffffff` (features);
    dark text `#1a1a1a`; muted text `#666666`.
  - Fonts: **"Poppins"** (headings) + **"Roboto"** (body) via Google Fonts.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/talon-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied.

Talon lives in `apps/talon` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Talon.",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Talon page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Talon." and links to Home, Services, Elements, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Social icons bar

The system SHALL render a horizontal bar of social media icon links.

#### Scenario: Social icons content

- **GIVEN** the page is rendered
- **WHEN** the social bar is displayed
- **THEN** it SHALL contain links to Facebook, Twitter, Pinterest, Dribbble, Behance, and LinkedIn
- **AND** each link SHALL open in a new tab

### Requirement: Hero section

The system SHALL render a full-width hero with a headline, blurb, and a
call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "Do you need a modern website?"
- **AND** it SHALL show "Discover" button linking to services section

#### Scenario: Hero background image

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display a background image

### Requirement: Services section

The system SHALL render a services grid with 4 service cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the heading "Our Services"
- **AND** it SHALL render 4 service cards: Web Design, Development, SEO, Marketing
- **AND** each card SHALL have an icon, title, and description

### Requirement: Features section

The system SHALL render a features grid with key benefits.

#### Scenario: Features content

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the heading "Why Choose Us"
- **AND** it SHALL render at least 3 feature items

### Requirement: About section

The system SHALL render an about split with text and image.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "About Us"
- **AND** it SHALL display a description and an image
- **AND** it SHALL show stats (projects, clients, awards)

### Requirement: Milestones section

The system SHALL render counter-style milestone stats.

#### Scenario: Milestones content

- **GIVEN** the page is rendered
- **WHEN** the milestones section is displayed
- **THEN** it SHALL show 4 milestone items with numeric values
- **AND** each milestone SHALL have a label (e.g. "Projects", "Happy Clients")

### Requirement: Testimonials section

The system SHALL render customer testimonials.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "What People Say"
- **AND** it SHALL render at least 2 testimonial cards
- **AND** each card SHALL have a quote, author name, and role

### Requirement: Blog section

The system SHALL render blog post previews.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Latest Blog"
- **AND** it SHALL render 3 blog post cards
- **AND** each card SHALL have a category, title, excerpt, and read-more link

### Requirement: Footer

The system SHALL render a multi-column footer with brand info, links, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the site name "Talon." and an about blurb
- **AND** it SHALL show Quick Links and Support columns
- **AND** it SHALL show Contact Info (address, phone, email)
- **AND** it SHALL show the copyright year and a Component Dock link

#### Scenario: Footer year

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the copyright line SHALL show the current year

### Requirement: App composition

The system SHALL compose all sections into a complete single-page layout.

#### Scenario: Full page render

- **GIVEN** the Talon app is rendered
- **WHEN** the page loads
- **THEN** it SHALL set the document title to "Talon — Modern Business Template"
- **AND** it SHALL include the navbar, social bar, hero, services, features, about, milestones, testimonials, blog, and footer
- **AND** it SHALL have a `<main>` landmark containing all content sections
