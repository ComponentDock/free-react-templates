# Template: Netforge (IT Company / Digital Agency)

## Purpose

Netforge is an IT company website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "IT
Solution" website template design (see TEMPLATES.md), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "IT Solution" — IT company / digital agency
  (source: https://colorlib.com/wp/template/it-solution/).
- **Demo DOM:** UNAVAILABLE — `https://preview.colorlib.com/theme/it-solution/`
  returns HTTP 404 (not listed in ColorLib's products.js registry). The
  `#itsolution` hash on the ColorLib page also yields a blank iframe.
- **Screenshot reference:** The TEMPLATES.md screenshot
  (`itsolution-free-template.jpg`) was analyzed. It shows a professional
  IT company template with a dark hero section, service cards, and a
  modern blue-accent design.
- **Fallback sources used for design reconstruction:**
  - ThemeWagon description: "IT solution is a free Bootstrap 4 HTML5
    digital agency website template. It features sticky navigation bar,
    hero header, custom illustration, fun fact counters, service card,
    accordion, parallax effects, load on scroll animation."
  - ColorLib page description: "IT Solution is a modern, professional,
    and sophisticated IT company website template... parallax effect,
    sticky navigation, animated statistics, accordions and different
    inner pages. You can create in-depth case presentations, start a
    compelling blog and let everyone get in touch with you via the
    functional contact form."
  - ColorLib page CSS variables: accent `#1a73e8` (blue), body color
    `#26282b`, body font size 16px.
- **Section order (reconstructed from descriptions + screenshot):**
  Navbar (sticky, logo + nav links) → Hero (full-width, headline,
  subtitle, CTA buttons, custom illustration/graphic) → Services
  (service cards with icons) → About / Why Choose Us (text + image
  split) → Fun Fact Counters (animated statistics row) → Projects /
  Case Studies (portfolio grid or cards) → Testimonials (client quotes
  carousel) → Accordion / FAQ (expandable Q&A) → Blog (latest posts
  grid) → Contact (contact form + info) → Footer (links, social,
  copyright).
- **Design tokens (from ColorLib page CSS + screenshot analysis):**
  - Primary **blue `#1a73e8`** — buttons, links, accents, top bar.
  - Text: headings **`#26282b`** (dark), body **`#26282b`** with
    line-height 1.8.
  - Backgrounds: **`#ffffff`** (body), light gray sections for contrast,
    dark hero section.
  - Font: system/Google Fonts (recreate with Inter or similar clean
    sans-serif).
  - Buttons: rounded, blue primary with white text, hover state darker
    blue `#1464cc`.
  - Top bar: blue `#1a73e8` background with white text.
  - Parallax sections with background images.
  - Animated counters with large numbers.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/netforge-<n>/<w>/<h>`); icons → lucide-react;
  accordion → accessible disclosure; counters → animated on scroll;
  contact form → prevent default (no backend); no assets copied.

Netforge lives in `apps/netforge` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the site name
"Netforge", anchor links to sections, and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Netforge page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Netforge"
- **AND** the navbar SHALL show links to Home, Services, About, Projects,
  Blog, and Contact

#### Scenario: Sticky behavior

- **GIVEN** the page is rendered
- **WHEN** the user scrolls down past the hero
- **THEN** the navbar SHALL remain fixed at the top of the viewport

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the user taps the hamburger menu icon
- **THEN** the mobile navigation menu SHALL expand to show the nav links
- **AND** the user SHALL be able to close the menu

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero section with a dark background,
headline, subtitle, and call-to-action buttons.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading (e.g. "IT Solution for
  Your Business")
- **AND** it SHALL show a supporting subtitle/description
- **AND** it SHALL show primary and secondary CTA buttons

#### Scenario: Hero illustration

- **GIVEN** the page is rendered
- **WHEN** the hero is visible
- **THEN** a custom illustration or graphic SHALL be displayed alongside
  the text content

### Requirement: Services section

The system SHALL render a services section with a heading and multiple
service cards, each containing an icon, title, and description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** the heading "Our Services" or similar SHALL be displayed
- **AND** at least 4 service cards SHALL be rendered
- **AND** each card SHALL have an icon, a title, and a short description

#### Scenario: Service card layout

- **GIVEN** the services section is displayed
- **WHEN** the user views the cards
- **THEN** they SHALL be arranged in a responsive grid (4-column on
  desktop, stacking on mobile)

### Requirement: About / Why Choose Us section

The system SHALL render a two-column section with text content on one side
and an image on the other.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** a heading like "Why Choose Us" SHALL be visible
- **AND** descriptive text explaining the company's value proposition
  SHALL be present
- **AND** an accompanying image SHALL be displayed alongside the text

### Requirement: Fun Fact Counters

The system SHALL render an animated statistics/counters section showing
key metrics with numbers that animate on scroll.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counters section is visible
- **THEN** at least 4 counter items SHALL be displayed
- **AND** each counter SHALL show a number, a label (e.g. "Projects
  Completed", "Happy Clients"), and optionally an icon

#### Scenario: Counter animation

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the counters section
- **THEN** the numbers SHALL animate from 0 to their final value

### Requirement: Projects / Case Studies section

The system SHALL render a projects/portfolio section with a heading and
a grid of project cards.

#### Scenario: Projects content

- **GIVEN** the page is rendered
- **WHEN** the projects section is visible
- **THEN** the heading "Our Projects" or "Case Studies" SHALL be displayed
- **AND** at least 4 project cards SHALL be rendered
- **AND** each card SHALL show a project image, title, and category

### Requirement: Testimonials section

The system SHALL render a testimonials section with client quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the heading "What Clients Say" or similar SHALL be visible
- **AND** at least 3 testimonial items SHALL be rendered
- **AND** each item SHALL contain a quote, client name, and optionally
  an avatar image

### Requirement: FAQ / Accordion section

The system SHALL render an FAQ section with expandable accordion items.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** the heading "Frequently Asked Questions" SHALL be visible
- **AND** at least 4 accordion items SHALL be rendered
- **AND** each item SHALL have a question title and expandable answer

#### Scenario: Accordion interaction

- **GIVEN** the FAQ section is displayed
- **WHEN** the user clicks on an accordion question
- **THEN** the answer SHALL expand/collapse
- **AND** only one answer SHALL be open at a time (or multiple, depending
  on design)

### Requirement: Blog section

The system SHALL render a blog section showing recent posts.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** the heading "Latest News" or "Blog" SHALL be displayed
- **AND** at least 3 blog post cards SHALL be rendered
- **AND** each card SHALL show a post image, title, date, and excerpt

### Requirement: Contact section

The system SHALL render a contact section with a form and contact
information.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** a contact form with name, email, subject, and message fields
  SHALL be present
- **AND** a submit button SHALL be present

#### Scenario: Contact info

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** contact information (address, phone, email) SHALL be visible
  alongside the form

### Requirement: Footer

The system SHALL render a footer with company info, links, and social
media icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** company information and navigation links SHALL be present
- **AND** social media icons SHALL be displayed

#### Scenario: Footer attribution

- **GIVEN** the page is rendered
- **WHEN** the footer copyright is displayed
- **THEN** it SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock"

### Requirement: Dark mode

The system SHALL support dark mode toggled by a button in the navbar.

#### Scenario: Dark mode classes

- **GIVEN** the page is in dark mode
- **WHEN** the user toggles dark mode on
- **THEN** the `.dark` class SHALL be added to `document.documentElement`
- **AND** section backgrounds, text colors, and accents SHALL adapt to the
  dark palette

### Requirement: Scroll animations

The system SHALL support scroll-triggered animations for sections and
elements.

#### Scenario: Scroll animation

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to an animated section
- **THEN** elements SHALL fade in or slide up into view

## Verification checklist

- [ ] All sections render in correct order (1:1 with original description)
- [ ] Primary color #1a73e8 used for buttons, links, accents
- [ ] Font applied via Tailwind theme (Inter or similar clean sans-serif)
- [ ] Sticky navbar works correctly
- [ ] Hero has dark background with illustration
- [ ] Service cards display in responsive grid
- [ ] Fun fact counters animate on scroll
- [ ] Accordion FAQ works correctly (expand/collapse)
- [ ] Contact form fields are present and accessible
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (only in spec)
- [ ] Placeholder images use seeded picsum URLs
- [ ] Dark mode toggle works correctly
- [ ] Mobile menu expands/collapses correctly
- [ ] All interactive elements have proper accessibility
- [ ] 100% test coverage on all new components
- [ ] Spec committed and pushed to main
