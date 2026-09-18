# Template: Discoverly (Directory/Listing Template)

## Purpose

Discoverly is a directory/listing landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Listed2"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Listed2" — directory/listing template
  (source: https://colorlib.com/wp/template/listed2/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/listed2/
  (HTTP 200, full rendered DOM + `css/style.css` (25KB) extracted).
  The TEMPLATES.md screenshot (`listed2-free-template.jpg`) is the visual
  reference; the design below is reconstructed from the DOM structure and
  CSS tokens.
- **Section order (1:1):** Navbar → Hero (full-width background image +
  "Sign Up" CTA) → Most Visited Places (3 listing cards with images) →
  Popular Categories (category grid) → Why Us (features/benefits) →
  Testimonials (carousel) → Our Blog (blog post cards) → How To List Your
  Property (step-by-step) → Frequently Asked Questions (FAQ accordion) →
  Call to Action ("Let's get started. Create your account") → Footer
  (Quick Links, Products, Features, Follow Us, Subscribe Newsletter).
- **Design tokens extracted from `css/style.css`:**
  - Primary **violet `#7971ea`** (buttons, accents, hover states); dark
    variant `#645be7`.
  - Accent red `#f23a2e`.
  - Light backgrounds: `#f8f9fa`, `#f4f5f9`, `#e9ecef`.
  - Text colors: `#25262a` (body), `#000` (headings), `#fff` (on primary).
  - Font: **"Quicksand"** (all weights, sans-serif fallback stack).
  - Border-radius: `4px` (cards), `7px` (inputs), `30px` (pill buttons),
    `50%` (circular avatars).
  - Green accent: `#8bc34a`.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/discoverly-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied; footer links to
  ComponentDock.

Discoverly lives in `apps/discoverly` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Discoverly",
anchor links to the page's sections, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Discoverly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Discoverly" and links to
  Home, Listings, Categories, About, Blog, and Contact
- **AND** the navbar SHALL show a dark-mode toggle button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, a headline,
and a "Sign Up" call-to-action button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a description and a "Sign Up" button

### Requirement: Most Visited Places

The system SHALL render a section titled "Most Visited Places" with at least
three listing cards, each with an image, a title, and a short description.

#### Scenario: Listing cards display

- **GIVEN** the page is rendered
- **WHEN** the Most Visited Places section is displayed
- **THEN** it SHALL contain a heading "Most Visited Places"
- **AND** it SHALL show at least three listing cards
- **AND** each card SHALL have an image, a title, and a description

### Requirement: Popular Categories

The system SHALL render a section titled "Popular Categories" with a grid
of category items, each showing an icon, a category name, and a count.

#### Scenario: Category grid

- **GIVEN** the page is rendered
- **WHEN** the Popular Categories section is displayed
- **THEN** it SHALL contain a heading "Popular Categories"
- **AND** it SHALL show at least four category items with icon, name, and
  count

### Requirement: Why Us

The system SHALL render a "Why Us" section with features or benefits of
using the platform.

#### Scenario: Features list

- **GIVEN** the page is rendered
- **WHEN** the Why Us section is displayed
- **THEN** it SHALL contain a heading "Why Us"
- **AND** it SHALL show at least three feature items with icon, title, and
  description

### Requirement: Testimonials

The system SHALL render a testimonials section with at least two testimonial
cards, each with a quote, the person's name, and their role/company.

#### Scenario: Testimonial display

- **GIVEN** the page is rendered
- **WHEN** the Testimonials section is displayed
- **THEN** it SHALL contain a heading "Testimonials"
- **AND** it SHALL show at least two testimonial cards
- **AND** each card SHALL have a quote, a name, and a role

### Requirement: Our Blog

The system SHALL render a blog section titled "Our Blog" with at least
two blog post cards, each with an image, a title, a date, and a short
description.

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the Our Blog section is displayed
- **THEN** it SHALL contain a heading "Our Blog"
- **AND** it SHALL show at least two blog cards with image, title, date,
  and description

### Requirement: How To List Your Property

The system SHALL render a step-by-step section explaining how to list a
property, with numbered steps and descriptions.

#### Scenario: Steps display

- **GIVEN** the page is rendered
- **WHEN** the How To List section is displayed
- **THEN** it SHALL contain a heading "How To List Your Property"
- **AND** it SHALL show at least three numbered steps with titles and
  descriptions

### Requirement: FAQ section

The system SHALL render a "Frequently Asked Question" section with at
least three expandable FAQ items.

#### Scenario: FAQ items

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Question"
- **AND** it SHALL show at least three FAQ items with question and answer
- **AND** clicking a question SHALL toggle the answer visibility

### Requirement: Call to action

The system SHALL render a call-to-action section encouraging users to
create an account.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Let's get started. Create your account"
- **AND** it SHALL show a "Sign Up" button

### Requirement: Footer

The system SHALL render a footer with navigation columns (Quick Links,
Products, Features), a "Follow Us" section with social links, and a
newsletter subscription form.

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a Quick Links column, a Products column, and a
  Features column
- **AND** it SHALL show a Follow Us section with social media icons
- **AND** it SHALL show a newsletter subscription form with an email input
  and a submit button
- **AND** it SHALL include a link to https://www.componentdock.com/

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the user enters an email in the newsletter input and clicks Send
- **THEN** the form SHALL prevent default submission (no backend)
