# Template: Photon (Creative Agency Landing)

## Purpose

Photon is a single-page creative agency landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Atomic" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light, clean creative agency page with blue accents: a
full-width hero ("Design a better website template") with background image
and play-video circle button, a 3-column feature row with icons (Intuitive
Thinking, Orange for Carrots, Infinite Posibilities), a 6-column image
gallery with overlapping card, a 2-column "Good Design is a Good Start"
feature section (text + thumbnails), a light-bg "services" grid (Regular
Update, Infinite Posibilities, Good Security, Orange for Carrots, Intuitive
Thinking), a blue-bg counter bar (Lines of Codes / Number of Projects /
Number of Clients), a 3-column testimonial carousel with quotes, and a
light footer with About blurb + Learn More / Support / About Us link
columns + copyright. Photon recreates that structure section-for-section
with matching layout, colors, typography, and content types (no ColorLib
assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Atomic" — free creative agency website template
  (source: https://colorlib.com/wp/template/atomic/).
- **Screenshot:** `atomic-free-template.jpg`
  (https://colorlib.com/wp/wp-content/uploads/sites/2/atomic-free-template.jpg)
  — shows a blue-accented clean layout with large hero, icon feature row,
  gallery grid, counter bar, testimonials, and light footer.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/atomic/`
  (HTTP 200, 19.2KB) + stylesheet `css/style.css` (132.7KB). The rendered
  DOM is the reference below; the TEMPLATES.md screenshot confirms the visual
  design (light page, blue accent #0389FF, Work Sans font).
- **Section order (1:1):**
  1. Navbar: logo "Atomic" + nav links (Home, About, Services, Gallery, Blog,
     Contact) — dark variant with transparent bg on desktop, blue bg on mobile.
  2. Cover/Hero: full-width background image with heading "Design a better
     website template.", lead text, "Free Download" CTA button, and a play-video
     circle icon on the right half.
  3. Features (3-col): icon cards with Ionicons (lightbulb, nutrition, infinite)
     — "Intuitive Thinking", "Orange for Carrots", "Infinite Possibilities",
     each with short paragraph.
  4. Gallery (6 thumbnails): "Good Design is a Good Start" heading + 6 image
     tiles with hover overlay + post-meta text.
  5. Services (bg-light, 6-item grid): "Regular Update", "Infinite Possibilities",
     "Good Security", "Orange for Carrots", "Intuitive Thinking", "Play Video"
     — each with icon + paragraph.
  6. Counters (bg-primary blue): 3 animated counters — "Lines of Codes",
     "Number of Projects", "Number of Clients" — white text on blue.
  7. Testimonials: 3 quote blocks with long testimonial paragraphs.
  8. Footer (bg-light): About blurb + Learn More / Support / About Us link
     columns + "Download for free" + "Connect With Us" social links + copyright.
- **Design tokens extracted from `css/style.css`:**
  - Brand color: **#0389FF** (blue) — primary buttons, navbar, counters,
    pagination, focus rings.
  - Hover blue: **#36a1ff** / **#0075dc** / **#006ecf**.
  - Body text: **#999999** (muted gray).
  - Headings: **#000** (black).
  - Light bg: **#f8f9fa** (section backgrounds, footer).
  - Footer widget headings: **#cccccc** (uppercase).
  - Icon color: **#d6dadd** (block-icon-1).
  - Font: **"Work Sans"** (300, 400, 700) via Google Fonts, sans-serif.
  - Buttons: border-radius 0, uppercase, 14px, letter-spacing 0.1em, no shadow.
  - Play button: circular (border-radius 50%), 80px, 2px border rgba(0,0,0,0.1),
     grows to 90px on hover.
  - Counter section: blue bg (#0389FF), white text, 50px numbers, uppercase labels
     with 0.5 opacity.
  - Sections: padding 7em 0.
  - Overlap card: negative margin-top -13em, white bg, border-radius 7px,
     shadow 0 10px 20px -8px rgba(0,0,0,0.2).
  - Thumbnail galleries: 500px height, hover overlay with opacity transition.

- **Recreation decisions:** repo-standard Navbar (site name "Photon", Home
  link, dark-mode toggle) + nav items; hero = seeded picsum photo with
  headline + "Free Download" CTA + play-video circle icon; 3-column feature
  row with lucide icons; 6-image gallery grid with hover overlays; services
  grid on light bg with lucide icons; blue counter bar; testimonial carousel;
  footer with link columns + Component Dock attribution; all images
  picsum-seeded (`picsum.photos/seed/photon-N/w/h`); Google Fonts via `<link>`.

Photon lives in `apps/photon` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, Badge, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Photon", a
"Home" link, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Photon page is rendered
- **THEN** the navbar SHALL display "Photon" as the brand/logo text
- **AND** the navbar SHALL contain links for Home, About, Services, Gallery,
  Blog, and Contact
- **AND** the navbar SHALL include a dark-mode toggle button

#### Scenario: Navbar responsive behavior

- **GIVEN** the viewport is mobile (width < 768px)
- **THEN** the navbar SHALL display a hamburger menu toggle
- **AND** the desktop nav links SHALL be hidden

### Requirement: Hero section

The system SHALL render a full-width hero/cover section with a background
image, a heading, lead text, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the Photon page is rendered
- **THEN** the hero SHALL display the heading "Design a better website template."
- **AND** the hero SHALL display a lead paragraph about the template
- **AND** the hero SHALL display a "Free Download" CTA button styled as
  btn-primary (blue, uppercase, no border-radius)

#### Scenario: Hero play button

- **GIVEN** the Photon page is rendered
- **THEN** the hero SHALL display a circular play-video icon/button on the
  right side (80px diameter, circular border)

### Requirement: Feature icons section

The system SHALL render a 3-column feature row with icon cards.

#### Scenario: Feature cards content

- **GIVEN** the Photon page is rendered
- **THEN** the feature section SHALL display 3 icon cards in a row
- **AND** each card SHALL have an icon, a title (h3), and a paragraph
- **AND** the titles SHALL be "Intuitive Thinking", "Orange for Carrots",
  and "Infinite Possibilities"

### Requirement: Image gallery section

The system SHALL render a 6-image gallery grid with hover overlays.

#### Scenario: Gallery layout

- **GIVEN** the Photon page is rendered
- **THEN** the gallery section SHALL display the heading
  "Good Design is a Good Start"
- **AND** the gallery SHALL show 6 image tiles in a responsive grid
- **AND** each tile SHALL have a hover overlay effect

### Requirement: Services grid section

The system SHALL render a services grid on a light background.

#### Scenario: Services content

- **GIVEN** the Photon page is rendered
- **THEN** the services section SHALL have a light (#f8f9fa) background
- **AND** the section SHALL display 6 service items in a grid
- **AND** each item SHALL have an icon, title (h3), and paragraph
- **AND** titles SHALL be "Regular Update", "Infinite Possibilities",
  "Good Security", "Orange for Carrots", "Intuitive Thinking", "Play Video"

### Requirement: Counter statistics bar

The system SHALL render an animated counter bar with a blue background.

#### Scenario: Counter content

- **GIVEN** the Photon page is rendered
- **THEN** the counter section SHALL have a blue (#0389FF) background
- **AND** the counter section SHALL display 3 statistics:
  "Lines of Codes", "Number of Projects", "Number of Clients"
- **AND** the numbers SHALL animate from 0 to their target values
- **AND** the label text SHALL be uppercase with reduced opacity

### Requirement: Testimonials section

The system SHALL render a testimonials section with quoted text.

#### Scenario: Testimonial content

- **GIVEN** the Photon page is rendered
- **THEN** the testimonial section SHALL display at least 2 testimonial blocks
- **AND** each testimonial SHALL include a quoted paragraph

### Requirement: Footer

The system SHALL render a footer with About text and link columns.

#### Scenario: Footer content

- **GIVEN** the Photon page is rendered
- **THEN** the footer SHALL have a light (#f8f9fa) background
- **AND** the footer SHALL display an "About" column with a short paragraph
- **AND** the footer SHALL display "Learn More" links (How it works, Useful
  Tools, Pricing, Sitemap)
- **AND** the footer SHALL display "Support" links (FAQ, Contact Us, Help
  Desk, Knowledgebase)
- **AND** the footer SHALL display "About Us" links (About Us, Careers, Terms
  of Service, Privacy Policy)
- **AND** the footer SHALL include a "Connect With Us" section with social links
- **AND** the footer SHALL include a copyright line with a link to
  Component Dock

### Requirement: Dark mode

The system SHALL support dark mode toggling.

#### Scenario: Dark mode toggle

- **GIVEN** the Photon page is rendered
- **AND** the user clicks the dark-mode toggle
- **THEN** the page SHALL apply a `.dark` class to the root element
- **AND** section backgrounds and text colors SHALL update to dark-theme values

## Verification checklist

- [ ] All 7 sections present in correct order: Navbar → Hero → Features →
  Gallery → Services → Counters → Testimonials → Footer
- [ ] Brand color #0389FF used for primary buttons, navbar accents, counter bg
- [ ] Font "Work Sans" applied via Google Fonts
- [ ] Buttons: border-radius 0, uppercase, 14px, letter-spacing 0.1em
- [ ] Play button: circular 80px, border, hover grow
- [ ] Counter numbers animate from 0
- [ ] Gallery tiles have hover overlay effect
- [ ] Footer links match original structure
- [ ] All images use picsum-seeded placeholders
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
- [ ] 100% test coverage (lines, functions, branches, statements)
