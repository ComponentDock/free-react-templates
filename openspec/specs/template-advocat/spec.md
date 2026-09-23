# Template: Advocat (Law Firm — Slider, Stats, Practice Areas, Testimonials, Blog)

## Purpose

Advocat is a single-page law firm landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Atorni"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a polished attorney firm landing: a full-width hero slider
("Make An Appointment" CTAs), a counter/stats bar ("80 Years Of Experience"),
a practice-areas grid, a parallax appointment form, case-study cards, a
testimonials carousel, a blog section, newsletter CTA, and a four-column
footer. Advocat recreates that structure section-for-section with matching
layout, colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Atorni" — law firm website template
  (source: https://colorlib.com/wp/template/atorni/).
- **Live demo DOM analyzed:** `https://preview.colorlib.com/theme/atorni/`
  (HTTP 200; full rendered DOM extracted). The design below is reconstructed
  from the DOM structure and CSS tokens.
- **Section order (1:1):**
  1. TopBar — phone number + location info on the left, logo "Advocat
     Lawfirm Agency" on the right, dark background (#262626).
  2. Navbar — links: Home, About, Attorneys, Practice Areas, Cases, News,
     Contact; search icon; transparent bg over hero, sticky on scroll.
  3. Hero — full-width slider, 3 slides with dark semi-transparent overlay
     on background images, heading + CTA "Make An Appointment" per slide.
  4. Counter — dark background (#262626), 4 stat items: Qualified Lawyers
     (1500), Successful Cases (2100), Happy Clients (2700), Awards & Honors
     (1010); animated count-up; gold gradient text for numbers.
  5. About — light gray background (#f7f7f7), heading "80 Years Of Experience
     In Legal Solution", description paragraph, video/image placeholder on
     the right side.
  6. Practice Areas — 4 cards in a row: Bank & Financial, Personal Injury,
     Family Law, Criminal Law; each card has a background image, icon,
     title, and short description.
  7. Appointment — parallax background image with dark overlay; left column:
     "Our Performance" heading + 3 service items; right column: form with
     name, email, subject dropdown, message textarea, and submit button.
  8. Case Studies — 4 image cards in a 4-column grid, each with a dark
     overlay and centered text "Business Law".
  9. CTA Banner — dark parallax background, heading "Are You Facing Criminal
     Charges?", body text, "Get in touch" button.
  10. Testimonials — carousel of 5 testimonials, each with a quote icon,
      testimonial text, person image, name, and role.
  11. Blog — 3 blog cards with background image + date overlay, title,
      short description.
  12. Newsletter CTA — dark parallax background, heading "Need Legal
      Adviser?", phone number button, email button.
  13. Footer — 4-column layout: logo + social links, Recent Posts column,
      Explore links column, Contact info column; bottom copyright bar
      with Component Dock link.
- **Design tokens extracted from CSS:**
  - Brand gold: **#c18e3c** — buttons, accents, gradient text for counter
    numbers, hover states.
  - Dark background: **#262626** — topbar, counter section, footer, parallax
    overlays.
  - Light section background: **#f7f7f7** — about section, alternating
    sections.
  - White: **#fff** — body text on dark backgrounds, card backgrounds.
  - Font — body: **"Poppins"**, headings: **"Cormorant Garamond"** (via
    Google Fonts).
  - Buttons: gold background (#c18e3c), white text, uppercase, letter-
    spacing, rounded; hover darkens to ~#a87a2e.
  - Section padding: `80px 0` top/bottom; heading font-size ~36px on
    desktop; sub-headings 14px uppercase letter-spaced.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/advocat-<n>/<w>/<h>`); icons → lucide-react
  (Phone, MapPin, Search, ChevronLeft, ChevronRight, Quote, Scale,
  Briefcase, Users, Shield); brand social icons → inline SVG; Poppins +
  Cormorant Garamond via Google Fonts; repo-standard Navbar (dark-mode
  toggle) + Footer chrome. Hero slider recreated as a lightweight three-
  slide carousel with prev/next controls and dots. Testimonials as a
  carousel with prev/next. Footer credit line links Component Dock.

Advocat lives in `apps/advocat` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: TopBar

The system SHALL render a top bar with contact info on the left and the firm
logo/name on the right.

#### Scenario: TopBar content

- **GIVEN** the Advocat page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show a phone number and location/address on the left side
- **AND** it SHALL show the logo text "Advocat Lawfirm Agency" on the right

#### Scenario: TopBar styling

- **GIVEN** the page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL have a dark background (#262626)
- **AND** the text SHALL be light/white colored

### Requirement: Navbar

The system SHALL render a navigation bar with links to all major sections and
a search icon.

#### Scenario: Navbar links

- **GIVEN** the Advocat page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show links for Home, About, Attorneys, Practice Areas,
  Cases, News, and Contact
- **AND** it SHALL show a search icon button

#### Scenario: Navbar scroll behavior

- **GIVEN** the page is rendered and the user scrolls past the hero
- **WHEN** the navbar reaches the top of the viewport
- **THEN** the navbar SHALL become sticky/fixed at the top
- **AND** it SHALL have a solid dark background

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero slider

The system SHALL render a full-width hero slider with three slides, each with
a headline, subheading, and call-to-action button, plus prev/next controls.

#### Scenario: First slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** the first slide SHALL contain a heading and a CTA button
  "Make An Appointment"
- **AND** the slide SHALL have a dark semi-transparent overlay over the
  background image

#### Scenario: Slide navigation

- **GIVEN** the first slide is displayed
- **WHEN** the user activates the next control
- **THEN** the next slide SHALL be displayed
- **AND** the previous slide SHALL no longer be visible

#### Scenario: Slide dots

- **GIVEN** the hero slider is rendered
- **WHEN** the slider dots are displayed
- **THEN** there SHALL be 3 dots, one per slide
- **AND** the active dot SHALL visually differ from inactive dots

### Requirement: Counter section

The system SHALL render a statistics counter section with 4 stat items on a
dark background with animated count-up numbers.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter section is displayed
- **THEN** it SHALL show "Qualified Lawyers" with value 1500
- **AND** it SHALL show "Successful Cases" with value 2100
- **AND** it SHALL show "Happy Clients" with value 2700
- **AND** it SHALL show "Awards & Honors" with value 1010

#### Scenario: Counter styling

- **GIVEN** the counter section is displayed
- **WHEN** inspecting the section
- **THEN** the background SHALL be dark (#262626)
- **AND** the number text SHALL use a gold gradient style

#### Scenario: Counter animation

- **GIVEN** the counter section scrolls into view
- **WHEN** the section enters the viewport
- **THEN** the numbers SHALL animate from 0 to their target values

### Requirement: About section

The system SHALL render an about section with a heading, description
paragraph, and a media placeholder.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL contain a heading "80 Years Of Experience In Legal
  Solution"
- **AND** it SHALL show a description paragraph about legal expertise
- **AND** it SHALL show a video or image placeholder on the right side

#### Scenario: About styling

- **GIVEN** the about section is displayed
- **WHEN** inspecting the section
- **THEN** the background SHALL be light gray (#f7f7f7)

### Requirement: Practice Areas section

The system SHALL render a practice areas section with a heading and 4 area
cards in a grid layout.

#### Scenario: Practice Areas content

- **GIVEN** the page is rendered
- **WHEN** the practice areas section is displayed
- **THEN** it SHALL contain 4 cards for: Bank & Financial, Personal Injury,
  Family Law, and Criminal Law
- **AND** each card SHALL have a background image, an icon, a title, and a
  short description

#### Scenario: Practice Areas layout

- **GIVEN** the practice areas section is displayed
- **WHEN** inspecting the layout
- **THEN** the 4 cards SHALL be arranged in a single row on desktop
- **AND** they SHALL stack vertically on mobile

### Requirement: Appointment section

The system SHALL render a parallax appointment section with a services
description on the left and a contact form on the right.

#### Scenario: Appointment content

- **GIVEN** the page is rendered
- **WHEN** the appointment section is displayed
- **THEN** the left side SHALL show a "Our Performance" heading and 3
  service items
- **AND** the right side SHALL show a form with name input, email input,
  subject dropdown, message textarea, and a submit button

#### Scenario: Appointment form fields

- **GIVEN** the appointment form is displayed
- **WHEN** the user inspects the form
- **THEN** the name field SHALL be a text input
- **AND** the email field SHALL be an email input
- **AND** the subject field SHALL be a dropdown/select with options
- **AND** the message field SHALL be a textarea

#### Scenario: Appointment parallax

- **GIVEN** the appointment section is displayed
- **WHEN** the user scrolls through the section
- **THEN** the background image SHALL have a parallax scrolling effect
- **AND** a dark overlay SHALL be applied over the background

### Requirement: Case Studies section

The system SHALL render a case studies section with 4 image cards in a
grid layout.

#### Scenario: Case Studies content

- **GIVEN** the page is rendered
- **WHEN** the case studies section is displayed
- **THEN** it SHALL show 4 cards, each with a background image
- **AND** each card SHALL have a dark overlay with centered text "Business
  Law"

#### Scenario: Case Studies layout

- **GIVEN** the case studies section is displayed
- **WHEN** inspecting the layout
- **THEN** the 4 cards SHALL be arranged in a 4-column grid on desktop
- **AND** they SHALL adapt to fewer columns on smaller screens

### Requirement: CTA Banner section

The system SHALL render a call-to-action banner with a parallax background
and a heading with a button.

#### Scenario: CTA Banner content

- **GIVEN** the page is rendered
- **WHEN** the CTA banner section is displayed
- **THEN** it SHALL contain a heading "Are You Facing Criminal Charges?"
- **AND** it SHALL show body text and a "Get in touch" button

#### Scenario: CTA Banner parallax

- **GIVEN** the CTA banner section is displayed
- **WHEN** the user scrolls through the section
- **THEN** the background image SHALL have a parallax scrolling effect
- **AND** a dark overlay SHALL be applied

### Requirement: Testimonials section

The system SHALL render a testimonials carousel with quote text, person
image, name, and role for each testimonial.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show at least 5 testimonials
- **AND** each testimonial SHALL have a quote icon, testimonial text, a
  person image, a name, and a role

#### Scenario: Testimonials navigation

- **GIVEN** the testimonials carousel is rendered
- **WHEN** the user activates the next control
- **THEN** the next testimonial SHALL be displayed
- **AND** the carousel SHALL cycle through all testimonials

### Requirement: Blog section

The system SHALL render a blog section with 3 blog cards showing date,
title, and description.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 3 blog post cards
- **AND** each card SHALL have a background image with a date overlay,
  a title, and a short description

#### Scenario: Blog layout

- **GIVEN** the blog section is displayed
- **WHEN** inspecting the layout
- **THEN** the 3 cards SHALL be arranged in a row on desktop
- **AND** they SHALL stack vertically on mobile

### Requirement: Newsletter CTA section

The system SHALL render a newsletter/call-to-action section with a heading
and contact action buttons.

#### Scenario: Newsletter CTA content

- **GIVEN** the page is rendered
- **WHEN** the newsletter CTA section is displayed
- **THEN** it SHALL contain a heading "Need Legal Adviser?"
- **AND** it SHALL show a phone number button and an email button

#### Scenario: Newsletter CTA parallax

- **GIVEN** the newsletter CTA section is displayed
- **WHEN** the user scrolls through the section
- **THEN** the background image SHALL have a parallax scrolling effect
- **AND** a dark overlay SHALL be applied

### Requirement: Footer

The system SHALL render a four-column footer with logo/social links, recent
posts, explore links, contact info, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a logo with social media links in the first column
- **AND** it SHALL show a "Recent Posts" column in the second column
- **AND** it SHALL show an "Explore" links column in the third column
- **AND** it SHALL show contact information in the fourth column

#### Scenario: Footer copyright

- **GIVEN** the footer is displayed
- **WHEN** the copyright bar is visible
- **THEN** it SHALL show a copyright notice
- **AND** it SHALL link to "https://www.componentdock.com/" (Component Dock)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Advocat app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the TopBar + Navbar in the banner
  landmark, all sections in the main landmark, and the Footer in the
  contentinfo landmark
- **AND** the document title SHALL be "Advocat — Law Firm Template"

#### Scenario: Section ordering

- **GIVEN** the page is rendered
- **WHEN** the user scrolls from top to bottom
- **THEN** the sections SHALL appear in this order: TopBar, Navbar, Hero,
  Counter, About, Practice Areas, Appointment, Case Studies, CTA Banner,
  Testimonials, Blog, Newsletter CTA, Footer
