# Template: Cuppa (Coffee Shop Landing)

## Purpose

Cuppa is a single-page coffee shop landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Coffee" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Coffee" — premium coffee shop template
  (source: https://colorlib.com/wp/template/coffee/).
- **Preview URL:** https://preview.colorlib.com/theme/coffee/ (HTTP 200;
  HTML + main.css analyzed successfully).
- **Screenshot:** `coffee-free-template.jpg` in TEMPLATES.md — dark moody
  aesthetic with a coffee-bean hero image, gold/brown accent color.

- **Section order (1:1 from DOM):**
  1. Header (top bar: hours + phone) → Navbar (logo + links: Home, About,
     Coffee, Review, Blog, Pages dropdown)
  2. Hero/Banner — fullscreen dark background image, left-aligned content:
     eyebrow "Now you can feel the Energy", headline "Start your day with
     a black Coffee", primary CTA "Buy Now"
  3. Video Section — split: left = video thumbnail with play button overlay
     (GLightbox), right = text block ("Live Coffee making process" /
     "We Telecast our Coffee Making Live" + blurb + signature image)
  4. Coffee Menu — 3×3 grid of coffee items (Cappuccino, Americano,
     Espresso, Macchiato, Mocha, Coffee Latte, Piccolo Latte, Ristretto,
     Affogato), each with name + price ($49) + description
  5. Gallery — mixed grid: left 2 images stacked (small), right 1 large +
     2 medium below; GLightbox lightbox gallery
  6. Reviews — 2-column reviewer cards (avatar + name + 3/5 star rating +
     blurb) + counter row (2536 Happy Client / 7562 Total Projects /
     2013 Cups Coffee / 10536 Total Submitted)
  7. Blog — 2-column blog cards (image + tag pills + title + blurb + date)
  8. Footer — 3-column (About Us text, Newsletter signup with email input
     + arrow button, Follow Us social icons) + Colorlib credit line

- **Design tokens extracted from preview main.css:**
  - Brand gold: `#b68834` (primary buttons, newsletter button, hover states)
  - Text dark: `#222222` (headings, body)
  - Text muted: `#777777` (secondary text)
  - Surface white: `#fff` (cards, menu items)
  - Surface light: `#f9f9ff` (section backgrounds)
  - Accent teal: `#4cd3e3`, blue: `#38a4ff`, yellow: `#f4e700`, red:
    `#f44a40` (used in counter/stats section icons — secondary palette)
  - Star color: `orange` (rating stars)
  - Font: **Poppins** (weights 300–700, Google Fonts)
  - Buttons: `.primary-btn` — `border-radius: 25px`, `padding: 0 30px 0
    60px` (asymmetric), gold background `#b68834`, white text, hover
    inverts to transparent with white border
  - Cards: `.single-menu` — `border-radius: 10px`, white background,
    gold box-shadow `rgba(182,136,52,0.2)`
  - Blog images: `border-radius: 10px`
  - Footer: dark background image (`footer-bg.jpg`), white text, gold
    newsletter button with `border-radius: 0`
  - Counter: large `font-size: 60px`, `font-weight: 100`

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/cuppa-<n>/<w>/<h>`); icons → lucide-react;
  video section → static image placeholder with play overlay (no actual
  video); GLightbox → React lightbox alternative or skip (gallery
  click-to-enlarge); "Pages" dropdown omitted (generic/elements pages
  not needed in single-page recreation). Footer credit → "Component Dock"
  link per conventions.

## Requirements

### Requirement: Header and navigation

The system SHALL render a top info bar with hours and phone, and a
navbar with the site name "Cuppa", section links, and a mobile toggle.

#### Scenario: Header content

- **GIVEN** the Cuppa page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL display business hours (Mon-Fri 8am to 2pm,
  Sat-Sun 11am to 4pm) and a phone number
- **AND** the navbar SHALL show the site name "Cuppa" with a logo
- **AND** the navbar SHALL show links: Home, About, Coffee, Review, Blog
- **AND** the navbar SHALL have a mobile hamburger toggle for small screens

### Requirement: Hero banner section

The system SHALL render a fullscreen hero with a dark background image,
an eyebrow tagline, a headline, and a primary CTA button.

#### Scenario: Hero content

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user views the hero
- **THEN** the hero SHALL show the eyebrow text "Now you can feel the Energy"
- **AND** the hero SHALL show the headline "Start your day with a black Coffee"
- **AND** the hero SHALL show a "Buy Now" primary button (gold, rounded)

### Requirement: Video / about section

The system SHALL render a two-column section with a video thumbnail on
the left and descriptive text on the right.

#### Scenario: Video section content

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user scrolls to the about section
- **THEN** the section SHALL show a video thumbnail with a play button overlay
- **AND** the section SHALL show the heading "We Telecast our Coffee Making Live"
- **AND** the section SHALL show a descriptive blurb paragraph
- **AND** the section SHALL show a signature image

### Requirement: Coffee menu section

The system SHALL render a 3-column grid of coffee menu items, each
with a name, price, and short description.

#### Scenario: Menu items displayed

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user scrolls to the coffee menu
- **THEN** the section heading SHALL read "What kind of Coffee we serve for you"
- **AND** 9 coffee items SHALL be displayed in a responsive grid
- **AND** each item SHALL show a name (e.g. Cappuccino, Americano), a
  price ($49), and a description blurb
- **AND** each item card SHALL have rounded corners and a subtle shadow

### Requirement: Gallery section

The system SHALL render a mixed-size image gallery with lightbox support.

#### Scenario: Gallery layout

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user scrolls to the gallery
- **THEN** the gallery SHALL display 5 images in a mixed grid layout
  (2 small stacked left, 1 large top-right, 2 medium bottom-right)
- **AND** clicking an image SHALL open a lightbox/enlarged view

### Requirement: Reviews section

The system SHALL render customer review cards and a statistics counter row.

#### Scenario: Review cards

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user scrolls to the reviews
- **THEN** 2 review cards SHALL be displayed side by side
- **AND** each card SHALL show a reviewer avatar, name, star rating (out
  of 5), and a review blurb

#### Scenario: Statistics counter

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user views the counter row below reviews
- **THEN** 4 statistics SHALL be displayed: Happy Client, Total Projects,
  Cups Coffee, Total Submitted
- **AND** each statistic SHALL show a large number with a label below

### Requirement: Blog section

The system SHALL render blog post preview cards in a two-column layout.

#### Scenario: Blog cards

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user scrolls to the blog
- **THEN** 2 blog cards SHALL be displayed side by side
- **AND** each card SHALL show a feature image, tag pills (Travel, Life
  Style), a title, a blurb, and a date
- **AND** blog images SHALL have rounded corners

### Requirement: Footer

The system SHALL render a three-column footer with About Us, Newsletter
signup, and social links.

#### Scenario: Footer content

- **GIVEN** the Cuppa page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** the footer SHALL show an "About Us" column with descriptive text
- **AND** the footer SHALL show a "Newsletter" column with an email input
  and a gold submit button
- **AND** the footer SHALL show a "Follow Us" column with social icons
  (Facebook, Twitter, Dribbble, Behance)
- **AND** the footer SHALL link to https://www.componentdock.com/ as
  "Component Dock"

### Requirement: Responsive design

The system SHALL be fully responsive across desktop, tablet, and mobile.

#### Scenario: Mobile layout

- **GIVEN** the Cuppa page is rendered on a mobile viewport (< 768px)
- **WHEN** the user views the page
- **THEN** the navbar SHALL collapse into a hamburger menu
- **AND** multi-column grids SHALL stack into single columns
- **AND** all text SHALL remain readable without horizontal scroll

### Requirement: Dark mode

The system SHALL support dark mode via a toggle mechanism.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user activates dark mode
- **THEN** the `.dark` class SHALL be toggled on `<html>`
- **AND** all sections SHALL adapt their colors for dark backgrounds

## Verification checklist

- [ ] All 7 sections present in correct order (header → hero → video →
  menu → gallery → reviews → blog → footer)
- [ ] Design tokens match: gold `#b68834`, Poppins font, pill buttons,
  10px card radius
- [ ] 9 menu items displayed with correct names and prices
- [ ] Gallery images use picsum placeholders, no ColorLib assets
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] Responsive at 320px, 768px, 1024px, 1440px
- [ ] Dark mode toggle works
- [ ] All components in `apps/cuppa/src/components/`
- [ ] Tests pass with 100% coverage
