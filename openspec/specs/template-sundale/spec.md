# Template: Sundial (Real Estate Agency Template)

## Purpose

Sundial is a single-page real estate agency template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "South" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "South" — real estate agency template
  (source: https://colorlib.com/wp/template/south/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/south/
  (HTTP 200, ~52 KB HTML fetched + `style.css` parsed).
- **Section order (1:1):** Header (top bar + navbar) → Hero (background
  image carousel) → Advanced Search Area → Featured Properties (6 cards)
  → Call to Action (parallax) → Testimonials (carousel) → Agent/Editor
  Section (split layout) → Footer (4-column dark bg).

## Design tokens

| Token            | Value                       | Usage                          |
| ---------------- | --------------------------- | ------------------------------ |
| Brand accent     | #947054 (warm brown/tan)    | Buttons, section headings, nav |
| Dark accent      | #000000                     | Button hover, footer overlay   |
| Heading color    | #323232                     | h1-h6                          |
| Body text        | #7d7d7d                     | Paragraphs, descriptions       |
| Light background | #f5f7f9                     | Section alternation            |
| White            | #ffffff                     | Cards, forms, search area      |
| Muted text       | #aaa8a8                     | Secondary labels               |
| Font family      | Open Sans (Google Fonts)    | All text                       |
| Button style     | Rounded, tan bg, white text | Primary CTA                    |
| Button hover     | Black bg (#000000)          | Hover state                    |

## Section breakdown

### 1. Header

- Top bar: email address (contact@sundale.com) + phone number
- Main navbar: logo text "Sundial", nav links (Home, About, Properties,
  Blog, Contact), search icon, mobile hamburger toggle
- Sticky on scroll

### 2. Hero

- Full-width background image with dark overlay
- Carousel-style headlines: "Find Your Dream Home", "Find Your Perfect House",
  "Find Your Ideal Property"
- Background: picsum.photos/seed/sundale-hero/1920/1080

### 3. Advanced Search Area

- White card with form fields in grid layout
- Fields: Keyword text input, All Cities dropdown, All Categories dropdown,
  All Offers dropdown, All Listings dropdown, Bedrooms dropdown,
  Bathrooms dropdown
- Range sliders for space (sq ft) and distance
- "More Filters" expandable link + Search button

### 4. Featured Properties

- Section heading: "Featured Properties" + subtitle
- 6 property cards in 3-column grid
- Each card: property image with "For Sale" tag + price overlay,
  property title, location with MapPin icon + address, description,
  meta bar (bath count + garage count + sq ft)
- Images: picsum.photos/seed/sundale-property-{1-6}/600/400

### 5. Call to Action

- Parallax background image with dark overlay
- Heading: "Are you looking for a place to rent?"
- Subtitle + Search button (tan)
- Background: picsum.photos/seed/sundale-cta/1920/800

### 6. Testimonials

- Section heading: "Client testimonials" + subtitle
- 3 testimonial cards (can show one at a time or all)
- Each: heading, paragraph quote, author avatar + name + role
- Images: picsum.photos/seed/sundale-author-{1-3}/80/80

### 7. Agent Section

- Split layout: image on one side, content on other
- Agent name: "Jeremy Scott", role: "Realtor"
- Bio paragraph, phone number, email address
- Background image: picsum.photos/seed/sundale-agent/800/600

### 8. Footer

- Dark background with gradient overlay
- 4-column grid:
  1. About Us — logo + brand description
  2. Useful Links — list of nav links
  3. Newsletter — email input + subscribe button
  4. Contact — phone, email, address
- Bottom bar: copyright + "Made with ♥ by Component Dock" link
  (https://www.componentdock.com/)

## Requirements

### Gherkin scenarios

Feature: Sundial Real Estate Template

#### Scenario: Header renders with navigation links

- **GIVEN** the page loads
- **THEN** the navbar displays logo "Sundial"
- **AND** navigation links "Home", "About", "Properties", "Blog", "Contact" are visible

#### Scenario: Mobile menu toggles

- **GIVEN** the page loads on mobile viewport
- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** all navigation links are visible

#### Scenario: Hero section displays headline and search form

- **GIVEN** the page loads
- **THEN** the hero section shows "Find Your Dream Home"
- **AND** the search form contains keyword input and dropdowns

#### Scenario: Featured properties shows 6 property cards

- **GIVEN** the page loads
- **THEN** 6 property cards are displayed in a grid
- **AND** each card shows a "For Sale" tag
- **AND** each card shows a price

#### Scenario: Call to action section renders

- **GIVEN** the page loads
- **THEN** the CTA section shows "Are you looking for a place to rent?"
- **AND** a Search button is visible

#### Scenario: Testimonials section renders

- **GIVEN** the page loads
- **THEN** the testimonials section shows "Client testimonials"
- **AND** testimonial cards display author information

#### Scenario: Agent section renders

- **GIVEN** the page loads
- **THEN** "Jeremy Scott" agent name is displayed
- **AND** "Realtor" role is displayed
- **AND** contact information is visible

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the page loads
- **THEN** the footer displays "About Us", "Useful Links", "Newsletter", "Contact"
- **AND** the Component Dock link points to https://www.componentdock.com/
- **AND** the footer shows copyright information

#### Scenario: Footer newsletter form accepts email

- **GIVEN** the page loads
- **WHEN** the user types an email in the newsletter input
- **AND** clicks the subscribe button
- **THEN** the email is entered in the field

#### Scenario: Search form dropdowns are interactive

- **GIVEN** the page loads
- **WHEN** the user selects a city from the dropdown
- **THEN** the dropdown reflects the selected value
