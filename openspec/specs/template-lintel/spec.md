# Template: Lintel (Architecture Template)

## Purpose

Lintel is a single-page architecture/interior-design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Marga" website template design (see TEMPLATES.md), built under
a **different name** with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Marga" — architecture template
  (source: https://colorlib.com/wp/template/marga/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/marga/
  (HTTP 200, full rendered DOM + `css/style.css` extracted). The TEMPLATES.md
  screenshot (`marga-free-template.jpg`, viewed in browser) is the visual
  reference; the design below is reconstructed from the DOM structure, CSS
  tokens, and screenshot.
- **Section order (1:1):**
  1. Navbar — white bar, centered logo; links split left (Home, Projects,
     Services) and right (About, Blog, Contact); mobile menu.
  2. Hero — 3-slide carousel over full-width cover photos; each slide shows a
     white centered card with an uppercase h1 ("We Are Specialist In The Field
     of Architect", "Design That Makes You Feel At Home", "Ready To Start Your
     Home"), a short subtext, and a teal "Contact Us" button; carousel dots.
  3. About — light gray band, split layout: white text box ("Welcome To Our
     Company", two paragraphs, founder signature block "Bruce Smith — Founder,
     CEO") + 3-image carousel.
  4. Services — "What We Do" + 6 icon cards (Creative Stairs, Kitchen Design,
     Lamp Decoration, Interior Blueprint, Dinning Table, Modern Design) each
     with an icon, title link, and blurb.
  5. Projects — "Our Projects" + "View All Projects" link + 4 media cards
     (image, "Downside Up House", "Melbourne, Australia") in a 2x2 grid.
  6. Testimonials — centered carousel of quote blockquotes (quote icon, text,
     "Mike Dorney — CEO and Co-Founder").
  7. Blog — "Blog and Updates" + subtext + 4 post cards (date meta, title,
     "Read More" link).
  8. Footer — About Us blurb, Features link list, "Subscribe to Newsletter"
     email form with Subscribe button, "Follow Us" social icons, copyright
     line.
- **Design tokens extracted from `css/style.css`:**
  - Primary **teal `#43ab92`** (buttons, nav accents, logo).
  - Section light background `#f8f9fa`; footer background `#c9ccd4`.
  - Dark slate `#364d59`; headings near-black `#000` (uppercase, bold).
  - Font: **"DM Sans"** (Google Fonts).
  - Buttons: teal with white text, **square corners** (`rounded-0`);
    uppercase 12px bold "more" links.
  - Hero text sits in a white card centered over the cover photo.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/lintel-<n>/<w>/<h>`); icons → lucide-react (stairs,
  chef hat, lamp, blueprint, table, ruler); brand socials → inline SVG
  (`BrandIcon`); no assets copied.

Lintel lives in `apps/lintel` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Lintel",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Lintel page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Lintel" and links to Home,
  Projects, Services, About, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile menu

- **GIVEN** the page is rendered with a mobile viewport
- **WHEN** the user opens the menu and selects a link
- **THEN** the mobile menu SHALL close after the link is selected

### Requirement: Hero carousel

The system SHALL render a full-width hero carousel with three slides, each
with a headline, subtext, and a "Contact Us" button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show a level-1 heading and a "Contact Us" button
- **AND** it SHALL show carousel controls (previous/next) and slide dots

#### Scenario: Slide navigation

- **GIVEN** the hero carousel is displayed
- **WHEN** the user activates the next control
- **THEN** the carousel SHALL advance to the following slide headline

### Requirement: About section

The system SHALL render an about section with a heading and a blurb.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "Welcome To Our Company"
- **AND** it SHALL show a blurb and a founder signature block

### Requirement: Services section

The system SHALL render a services section with a heading and six service
cards.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL contain a heading "What We Do"
- **AND** it SHALL show six service cards with titles (Creative Stairs,
  Kitchen Design, Lamp Decoration, Interior Blueprint, Dinning Table, Modern
  Design) and blurbs

### Requirement: Projects section

The system SHALL render a projects section with a heading and a project
gallery.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is displayed
- **THEN** it SHALL contain a heading "Our Projects"
- **AND** it SHALL show at least four project cards with a title and location

### Requirement: Testimonials section

The system SHALL render a testimonials section with a quote carousel.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show a quotation and an attribution (name and role)

### Requirement: Blog section

The system SHALL render a blog section with a heading and post cards.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL contain a heading "Blog and Updates"
- **AND** it SHALL show at least three post cards with a date and a title

### Requirement: Footer

The system SHALL render a footer with link columns, a newsletter form,
social links, and a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about blurb, a features link list, and a copyright
  line
- **AND** it SHALL show social links (Facebook, X, LinkedIn, Instagram)

#### Scenario: Newsletter form

- **GIVEN** the footer is displayed
- **WHEN** the user submits the newsletter form
- **THEN** the form SHALL be submitted without a page reload

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Lintel app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Lintel — Architecture Template"
