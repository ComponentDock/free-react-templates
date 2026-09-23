# Template: Archway (Interior Design / Architecture Template)

## Purpose

Archway is a single-page interior-design / architecture landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Archs" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

- **Original:** ColorLib "Archs" — free HTML interior design template
  (source: https://colorlib.com/wp/template/archs/).

## Design reference (replication findings)

- **Preview analyzed (HTTP 200):** https://preview.colorlib.com/theme/archs/
  (live rendered DOM + `css/style.css` (24,541 bytes) fetched and parsed; the
  TEMPLATES.md screenshot `archs-free-template.jpg` used as visual
  cross-check).
- **Section order (1:1):** Navbar (logo + Home, About Us, Team, Pricing, FAQ,
  Projects, News, Services, Contact links) → Hero (full-width parallax bg
  image, dark overlay, centered h1 "Interior Design" + subtext) → About Us
  (three-column icon+text feature cards with flaticon icons: Innovative
  Structure, Arhictectural, Interior Design) → Our Team (3×2 grid of 6 team
  members with circular photos, name, role, bio) → Choose Your Plan (3-column
  pricing: Starter, Professional, Enterprise with "Buy Now" buttons) →
  Frequently Ask Questions (accordion with 5 questions) → Our Projects
  (gallery carousel of 5 project cards with images and titles) → Our Blog
  Posts (3-column blog cards with images and "View All Posts" button) → Our
  Services (6 icon+title+description cards in 2×3 grid) → Contact Us (contact
  info + form) → Footer (About Us text, Navigation links, Recent News links,
  Subscribe Newsletter form, Follow Us social icons, copyright).
- **Design tokens extracted from `style.css`:**
  - Brand accent **`#ff5733`** (orange-red, used sparingly — button hover
    states, accent highlights).
  - Primary button **`#fff`** text on `#ff5733` bg; hover switches to
    transparent bg + `#ff5733` border + `#ff5733` text (outlined style).
  - Buttons: `border-width: 2px`, `border-radius: 4px`, `padding: 10px 20px`
    for `.btn-lg`.
  - Near-black `#000` (headings h1–h6 all `color: #000`); h1 on cover is
    white (`#fff`) with `font-weight: 900`, `font-size: 3rem`.
  - Body text `gray` (`color: gray`), `font-weight: 300`, `font-size: 1rem`,
    `line-height: 1.7`.
  - Text greys: `#212529`, `#333333`, `#343a40`, `#737373`, `#999999`,
    `#b3b3b3`, `#cccccc`.
  - Backgrounds: `#fff` (main sections), `#f8f9fa` (`.bg-light`), `#ebeef0`
    (alternate section bg).
  - Footer `#191919` (dark) with white headings and white links.
  - Overlay: `rgba(0, 0, 0, 0.4)` on hero cover image.
  - Section padding: `.site-section` `padding: 2.5em 0` (desktop `5em 0`).
  - Font: **System font stack** (`-apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`) — no Google
    Fonts loaded.
  - Icons: Flaticon + Icomoon (replace with lucide-react).
  - `.bg-light form { border-radius: 10px; box-shadow: 0 5px 20px -5px rgba(0,0,0,0.05); }`
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/archway-<n>/<w>/<h>`); icons → lucide-react (Flaticon
  icons replaced with closest lucide equivalents); hero bg image → seeded
  picsum; copy paraphrased to interior-design content, same section kinds;
  the "Buy Now" CTAs retained as "Get a quote" or "View plans"; footer
  attribution → Component Dock link. No assets copied.

Archway lives in `apps/archway` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar
The system SHALL render a sticky top navigation bar with the site name
"Archway", anchor links to the page's sections, and a dark-mode toggle.

#### Scenario: Navbar content
- **GIVEN** the Archway page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Archway" and links for Home, About
  Us, Team, Pricing, FAQ, Projects, News, Services, and Contact
- **AND** it SHALL show a dark-mode toggle button

#### Scenario: Navbar sticky behavior
- **GIVEN** the navbar is displayed
- **WHEN** the user scrolls down the page
- **THEN** the navbar SHALL remain fixed at the top of the viewport

#### Scenario: Mobile menu
- **GIVEN** the viewport width is less than 992px
- **WHEN** the navbar is displayed
- **THEN** a hamburger menu icon SHALL be visible
- **AND** activating the hamburger SHALL toggle a mobile menu drawer with all
  nav links

### Requirement: Hero section
The system SHALL render a full-width hero section with a parallax background
image, dark overlay, centered heading, and subtext.

#### Scenario: Hero content
- **GIVEN** the hero section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display a background image with a dark overlay
  (`rgba(0, 0, 0, 0.4)`)
- **AND** it SHALL show a centered white h1 "Interior Design"
- **AND** it SHALL show centered subtext below the heading

#### Scenario: Hero parallax effect
- **GIVEN** the hero section is rendered
- **WHEN** the user scrolls the page
- **THEN** the background image SHALL have a parallax scroll effect

### Requirement: About Us section
The system SHALL render an About Us section with three feature cards in a
row, each with an icon, heading, and description.

#### Scenario: About Us content
- **GIVEN** the About Us section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a heading "About Us"
- **AND** it SHALL display three feature cards side by side
- **AND** each card SHALL have a flaticon-style icon (lucide-react
  equivalent), a heading ("Innovative Structure", "Arhictectural",
  "Interior Design"), and a description paragraph
- **AND** the section SHALL have a bottom border

#### Scenario: About Us responsive layout
- **GIVEN** the About Us section is rendered on a mobile viewport
- **WHEN** the viewport width is less than 768px
- **THEN** the three feature cards SHALL stack vertically

### Requirement: Team section
The system SHALL render a Team section with a heading and a 3×2 grid of
team member cards.

#### Scenario: Team section content
- **GIVEN** the Team section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a centered heading "Our Team"
- **AND** it SHALL display 6 team member cards in a 3-column grid
- **AND** each card SHALL have a circular photo (picsum placeholder), a
  name, a role, and a short bio

#### Scenario: Team member count
- **GIVEN** the Team section is rendered
- **WHEN** the user counts the team members
- **THEN** there SHALL be exactly 6 team members

### Requirement: Pricing section
The system SHALL render a Pricing section with a heading and three pricing
tier cards.

#### Scenario: Pricing section content
- **GIVEN** the Pricing section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a centered heading "Choose Your Plan"
- **AND** it SHALL display three pricing cards: Starter, Professional,
  Enterprise
- **AND** each card SHALL have a tier name, a price, a list of features,
  and a "Buy Now" button
- **AND** the Professional card SHALL be visually highlighted as the
  recommended tier

#### Scenario: Pricing responsive layout
- **GIVEN** the Pricing section is rendered on a mobile viewport
- **WHEN** the viewport width is less than 768px
- **THEN** the three pricing cards SHALL stack vertically

### Requirement: FAQ section
The system SHALL render a FAQ section with a heading and an accordion of
5 questions.

#### Scenario: FAQ content
- **GIVEN** the FAQ section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a centered heading "Frequently Ask Questions"
- **AND** it SHALL display 5 collapsible question items
- **AND** each item SHALL have a question heading and an answer paragraph

#### Scenario: FAQ accordion behavior
- **GIVEN** the FAQ section is displayed
- **WHEN** the user clicks a question heading
- **THEN** the corresponding answer SHALL expand/collapse
- **AND** only one answer SHALL be expanded at a time (accordion behavior)

### Requirement: Projects gallery
The system SHALL render a Projects section with a heading and a gallery
of project cards.

#### Scenario: Projects content
- **GIVEN** the Projects section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a centered heading "Our Projects"
- **AND** it SHALL display at least 5 project cards
- **AND** each card SHALL have an image (picsum placeholder), a title,
  and a brief description

#### Scenario: Projects carousel
- **GIVEN** the Projects section is rendered
- **WHEN** the user views the gallery on a desktop viewport
- **THEN** the projects SHALL be displayed in a horizontal carousel or
  grid with navigation controls

### Requirement: Blog posts section
The system SHALL render a Blog section with a heading and three blog
cards.

#### Scenario: Blog section content
- **GIVEN** the Blog section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a centered heading "Our Blog Posts"
- **AND** it SHALL display 3 blog cards in a row
- **AND** each card SHALL have an image, a title, and a brief excerpt
- **AND** it SHALL show a "View All Posts" button below the cards

### Requirement: Services section
The system SHALL render a Services section with a heading and a 2×3 grid
of service cards.

#### Scenario: Services section content
- **GIVEN** the Services section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a centered heading "Our Services"
- **AND** it SHALL display 6 service cards in a 2-row × 3-column grid
- **AND** each card SHALL have an icon (lucide-react), a title, and a
  description paragraph

### Requirement: Contact section
The system SHALL render a Contact section with a heading and a contact
form.

#### Scenario: Contact section content
- **GIVEN** the Contact section is rendered
- **WHEN** the user views the section
- **THEN** it SHALL show a centered heading "Contact Us"
- **AND** it SHALL display a contact form with fields for name, email,
  subject, and message
- **AND** it SHALL show a submit button styled with the brand accent color

#### Scenario: Contact form validation
- **GIVEN** the contact form is displayed
- **WHEN** the user submits the form with empty required fields
- **THEN** validation errors SHALL be displayed for each missing field

### Requirement: Footer
The system SHALL render a footer with multiple columns of links, a
newsletter form, social icons, and copyright text.

#### Scenario: Footer content
- **GIVEN** the footer is rendered
- **WHEN** the user scrolls to the bottom of the page
- **THEN** it SHALL show an "About Us" column with descriptive text
- **AND** it SHALL show a "Navigation" column with site links
- **AND** it SHALL show a "Recent News" column with recent article links
- **AND** it SHALL show a "Subscribe Newsletter" form
- **AND** it SHALL show social media icon links

#### Scenario: Footer branding
- **GIVEN** the footer is rendered
- **WHEN** the user views the copyright area
- **THEN** it SHALL link to `https://www.componentdock.com/` branded as
  "Component Dock"

### Requirement: Dark mode
The system SHALL support dark mode toggled via the navbar toggle button.

#### Scenario: Dark mode toggle
- **GIVEN** the page is in light mode
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the page SHALL switch to dark color scheme
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Dark mode persistence
- **GIVEN** the user has enabled dark mode
- **WHEN** the user refreshes the page
- **THEN** dark mode SHALL persist (via localStorage)

## Verification checklist

- [ ] Navbar renders with all 9 nav links + dark mode toggle
- [ ] Hero shows parallax bg image with dark overlay + white heading
- [ ] About Us shows 3 feature cards with icons
- [ ] Team shows 6 member cards in 3×2 grid
- [ ] Pricing shows 3 tier cards with features and CTA buttons
- [ ] FAQ accordion expands/collapses correctly (one at a time)
- [ ] Projects gallery shows 5+ project cards
- [ ] Blog shows 3 cards + "View All Posts" button
- [ ] Services shows 6 cards in 2×3 grid
- [ ] Contact form validates required fields
- [ ] Footer has 4 columns + newsletter form + social icons
- [ ] Footer links to Component Dock
- [ ] Dark mode toggles correctly and persists
- [ ] Mobile responsive at all breakpoints
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos/seed/archway-* placeholders
- [ ] Icons use lucide-react (no Flaticon/Icomoon imports)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Typecheck passes (`npm run typecheck`)
- [ ] Lint passes (`npm run lint`)
- [ ] Build passes (`npm run build`)
