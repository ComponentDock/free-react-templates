# Template: Kindle (Creative Agency)

## Purpose

Kindle is a creative agency template in the free-react-templates monorepo.
It is an original React recreation of the ColorLib free "Inspire" website
template design (see TEMPLATES.md), built under a different name with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Inspire" — creative agency
  (source: https://colorlib.com/wp/template/inspire/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/inspire/
  (HTTP 200, full rendered DOM + `css/style.css` (1020 lines) extracted).
  The TEMPLATES.md screenshot (`inspire-free-template.jpg`) was also reviewed
  for visual confirmation.
- **Section order (1:1):**
  Navbar ("Kindle ." logo, Home, Dropdown, Services, FAQ, About, Contact us)
  → Hero (full-width background image, headline "We Inspire You To Create
  Great Things", play button, social sidebar icons)
  → Services (bg-light, 4 cards: Inspire, Create, Innovate, Publish +
  "See All Services" link)
  → "Why Are We Awesome?" (text excerpt with highlighted spans + 2x2 grid
  of service-v2 items: Inspire Photography, Find it here, Inspire
  Photography, Fly Your Dreams)
  → "Our Concept" (hero-style split with image + heading + text + "Get
  started" button)
  → Testimonials (8-card owl carousel with person avatars + quotes)
  → Feature/About (bg-light, "Help Us by Sharing Our Works" + person info
  + image)
  → Footer ("Help Us Spread Our Works" CTA + 3-column widget layout
  [Contact, Sources, Links] + social icons + copyright)
- **Design tokens extracted from `css/style.css`:**
  - Primary **sky blue `#1daff3`** — buttons, text-primary, links, accents;
    hover `#30b6f4`.
  - Text: headings **`#000000`**, body **`#777`/`#888`/`#999`**.
  - Backgrounds: **`#ffffff`** (body), **light gray** (`.bg-light` for
    services and feature sections), background-image for hero.
  - Font: **"Rubik"** (Google Fonts, weights 300/400/700), sans-serif.
  - Buttons: blue bg (`#1daff3`), white text, border-radius **4px**,
    padding 12px vertical. Primary button `.btn-primary`.
  - Circular elements: border-radius **50%** (icon-wrap, play button).
  - Social icons sidebar on left edge of hero section.
  - Testimonials use owl-carousel with person image + blockquote + name.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/kindle-<n>/<w>/<h>`); icons → lucide-react;
  testimonials → static cards (no carousel dependency); footer links →
  Component Dock attribution; forms prevent default (no backend); no
  assets copied.

Kindle lives in `apps/kindle` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Kindle",
anchor links to the page's sections, and a mobile hamburger menu.

#### Scenario: Navbar content

- **GIVEN** the Kindle page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Kindle" with a dot accent
- **AND** the navbar SHALL show links to Home, Services, About, and Contact

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

The system SHALL render a full-width hero with a background image, a
headline, a short description, and a play button (video placeholder).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading "We Inspire You To Create
  Great Things"
- **AND** it SHALL show a supporting paragraph with description text
- **AND** it SHALL show a play button (circle icon link)

#### Scenario: Social sidebar

- **GIVEN** the page is rendered
- **WHEN** the hero is visible
- **THEN** it SHALL display social media icons (Instagram, Twitter,
  Facebook) positioned along the left edge of the hero

### Requirement: Services section

The system SHALL render a services grid on a light background with four
service cards, each containing an icon, title, and description.

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL display four service cards: Inspire, Create, Innovate,
  Publish
- **AND** each card SHALL have an icon, a title, and a short description

#### Scenario: See All Services link

- **GIVEN** the services section is displayed
- **WHEN** the user looks at the bottom of the services section
- **THEN** a "See All Services" link SHALL be present

### Requirement: Why Are We Awesome section

The system SHALL render a two-column section with explanatory text on the
left and a 2x2 grid of featured service items on the right.

#### Scenario: Section content

- **GIVEN** the page is rendered
- **WHEN** the "Why Are We Awesome?" section is displayed
- **THEN** the heading "Why Are We Awesome?" SHALL be visible
- **AND** a text excerpt with highlighted spans SHALL be present
- **AND** four service-v2 items SHALL be displayed in a 2-column grid:
  Inspire Photography, Find it here, Inspire Photography, Fly Your Dreams

#### Scenario: Service items are clickable

- **GIVEN** the "Why Are We Awesome?" section is displayed
- **WHEN** the user clicks on a service-v2 item
- **THEN** the item SHALL be an anchor link (href="#")

### Requirement: Our Concept section

The system SHALL render a hero-style split section with a background image
and overlay text, featuring a heading, description, and a primary button.

#### Scenario: Concept content

- **GIVEN** the page is rendered
- **WHEN** the "Our Concept" section is displayed
- **THEN** the heading "Our Concept" SHALL be visible
- **AND** a descriptive paragraph with highlighted text spans SHALL be shown
- **AND** a "Get started" button with primary styling SHALL be present

#### Scenario: Concept layout

- **GIVEN** the page is rendered
- **WHEN** the "Our Concept" section is visible
- **THEN** it SHALL use a split layout with a background image on one side
  and text content on the other

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with multiple testimonial
cards, each showing a person avatar, a blockquote, and a name.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** the heading "Testimonials" SHALL be visible
- **AND** at least 4 testimonial cards SHALL be rendered
- **AND** each card SHALL contain a person image, a quote mark, a
  blockquote, and a name

#### Scenario: Testimonials carousel

- **GIVEN** the testimonials section is displayed
- **WHEN** the user views the testimonials
- **THEN** the cards SHALL be arranged in a scrollable/carousel layout

### Requirement: Feature/About section

The system SHALL render a feature section on a light background with a
heading, description text, person attribution, and an image.

#### Scenario: Feature content

- **GIVEN** the page is rendered
- **WHEN** the feature section is displayed
- **THEN** the heading "Help Us by Sharing Our Works" SHALL be visible
- **AND** a descriptive paragraph SHALL be present
- **AND** person attribution (name "Carl Anderson", title "Co-Founder & CEO")
  SHALL be shown
- **AND** an accompanying image SHALL be displayed alongside the text

### Requirement: Footer

The system SHALL render a footer with a CTA banner, three widget columns,
social links, and copyright.

#### Scenario: Footer CTA

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** a "Help Us Spread Our Works" heading SHALL be visible
- **AND** a primary-styled CTA button SHALL be present

#### Scenario: Footer columns

- **GIVEN** the page is rendered
- **WHEN** the footer widgets are displayed
- **THEN** three columns SHALL be present: Contact (address, phone, email),
  Sources (About us, Services, Vision, Mission, Terms, Privacy, Partners,
  Business, Careers, Blog, FAQ, Creative), and Links (Our Vision, About us,
  Contact us)
- **AND** social media icons (Instagram, Twitter, Facebook) SHALL be in the
  Links column

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

## Verification checklist

- [ ] All sections render in correct order (1:1 with original)
- [ ] Primary color #1daff3 used for buttons, links, accents
- [ ] Font "Rubik" loaded and applied via Tailwind theme
- [ ] Buttons have border-radius 4px, white text, blue bg
- [ ] Circular elements use border-radius 50%
- [ ] Testimonials display person images + quotes + names
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (only in spec)
- [ ] Placeholder images use seeded picsum URLs
- [ ] Dark mode toggle works correctly
- [ ] Mobile menu expands/collapses correctly
- [ ] All interactive elements have proper accessibility
- [ ] 100% test coverage on all new components
- [ ] Spec committed and pushed to main
