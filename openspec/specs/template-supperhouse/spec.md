# Template: Supperhouse (Restaurant Landing)

## Purpose

Supperhouse is a single-page restaurant landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Restaurant" design (see TEMPLATES.md), built under the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a restaurant page with red (#f42f2c) accents: a sticky
header with logo and nav, a full-width hero ("Delicious Recipes"),
a "Top Rated Dishes" grid, a video promo band, a 4-column features row,
a "Featured Food Menus" carousel, a "Meet Our Chefs" team with hover
overlays, a 4-column blog grid, a split contact section (map + form),
and a dark footer with newsletter and social icons. Supperhouse recreates
that structure section-for-section with matching layout, colors, typography,
and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Restaurant" — free restaurant website template
  (source: https://colorlib.com/wp/template/restaurant/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/restaurant/`
  (HTTP 200) + stylesheet `css/main.css`. The rendered DOM is the reference
  below; the TEMPLATES.md screenshot confirms the visual design (dark hero,
  red accents, dark footer).
- **Design tokens:**
  - Brand color: `#f42f2c` (red) — CTA buttons, active nav, accents, footer phone numbers
  - Font: Poppins (Google Fonts), weights 300/400/500/600/700
  - Body text: `#777` (light grey)
  - Headings: `#222` (dark charcoal)
  - Primary button: bg `#f42f2c`, white text, border-radius 25px, uppercase
  - Section gap: 120px vertical padding
  - Team area bg: `#f9f9ff` (light blue-grey)
  - Footer bg: `#222` (dark charcoal)
  - Footer social icons: bg `#111`, hover bg `#f42f2c`
  - Blog date badge: black bg, white text
- **Section order (1:1):**
  1. Header/Navbar — logo left, nav right (Home, Dish, Chefs, Blog, Contact), sticky with dark translucent bg on scroll, hamburger mobile menu
  2. Hero/Banner — dark bg image, white text, subtitle "Wide Options of Choice", heading "Delicious Recipes", CTA button
  3. Top Rated Dishes — centered title, 3-column card grid with hover effects
  4. Video/Promo — dark bg image, play button, heading, subtitle
  5. Features — 4-column icon grid (Breakfast, Lunch, Dinner, Buffet)
  6. Featured Food Menus — carousel with slide items
  7. Chefs/Team — light bg, 4 team cards with red hover overlay
  8. Blog — 4-column blog cards with date badges
  9. Contact — split layout: map placeholder + form
  10. Footer — dark bg, 3-column (About Us, Contact Us, Newsletter), bottom bar with Component Dock link

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky navigation bar with the site name
"Supperhouse", navigation links (Home, Dish, Chefs, Blog, Contact),
and a hamburger menu for mobile.

#### Scenario: Navbar content

- **GIVEN** the Supperhouse page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Supperhouse"
- **AND** the navbar SHALL show navigation links for Home, Dish, Chefs, Blog, Contact

#### Scenario: Sticky header on scroll

- **GIVEN** the page is rendered
- **WHEN** the user scrolls past 50px
- **THEN** the header background SHALL become dark and translucent

#### Scenario: Mobile hamburger menu

- **GIVEN** the page is rendered on mobile
- **WHEN** the user clicks the hamburger button
- **THEN** a mobile navigation panel SHALL appear with all nav links

### Requirement: Hero banner

The system SHALL render a full-width hero with a background image,
subtitle, heading, body text, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the subtitle "Wide Options of Choice"
- **AND** it SHALL show the heading "Delicious Recipes"
- **AND** it SHALL show a "Check Our Menu" CTA button

### Requirement: Top Rated Dishes

The system SHALL render a "Our Top Rated Dishes" section with 3 dish
cards in a grid.

#### Scenario: Dishes display

- **GIVEN** the page is rendered
- **WHEN** the dishes section is displayed
- **THEN** it SHALL show 3 dish cards with images, headings, and descriptions

### Requirement: Video section

The system SHALL render a video promo section with a background image,
play button, heading, and subtitle.

#### Scenario: Video section content

- **GIVEN** the page is rendered
- **WHEN** the video section is displayed
- **THEN** it SHALL show a play button
- **AND** it SHALL show a heading about serving hot and delicious foods

### Requirement: Features

The system SHALL render 4 feature cards in a grid with icons.

#### Scenario: Features display

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show 4 features: Refreshing Breakfast, Awesome Lunch, Soothing Dinner, Rich Quality Buffet

### Requirement: Featured Food Menus

The system SHALL render a carousel with slide items showing menu
descriptions and images.

#### Scenario: Menus carousel

- **GIVEN** the page is rendered
- **WHEN** the menus section is displayed
- **THEN** it SHALL show a slide with title, description, and image
- **AND** it SHALL show navigation dots to switch between slides

### Requirement: Chefs / Team

The system SHALL render a team section with 4 chef cards that show
a red overlay on hover.

#### Scenario: Chefs display

- **GIVEN** the page is rendered
- **WHEN** the chefs section is displayed
- **THEN** it SHALL show 4 team member cards with names and roles

### Requirement: Blog

The system SHALL render a blog section with 4 blog post cards.

#### Scenario: Blog display

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show 4 blog cards with dates, titles, excerpts, likes, and comments

### Requirement: Contact

The system SHALL render a split contact section with a map placeholder
and a contact form.

#### Scenario: Contact form

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL show a form with name, email, and message fields
- **AND** it SHALL show a "Send Message" submit button

### Requirement: Footer

The system SHALL render a dark footer with 3 columns, newsletter form,
social icons, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show About Us, Contact Us, and Newsletter columns
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"
- **AND** it SHALL show social media icon links

### Requirement: Accessibility

The system SHALL use semantic HTML, aria-labels on icon-only controls,
and proper heading hierarchy.

#### Scenario: Accessibility basics

- **GIVEN** the page is rendered
- **WHEN** inspecting the DOM
- **THEN** the navbar SHALL have an aria-label "Primary"
- **AND** the hamburger button SHALL have aria-expanded
- **AND** form inputs SHALL have associated labels
