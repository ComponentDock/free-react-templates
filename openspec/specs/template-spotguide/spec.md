# Template: Spotguide (Directory/Listing Template)

## Purpose

Spotguide is a city directory/listing landing template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Listing"
website template design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Listing" — city directory/listing template
  (source: https://colorlib.com/wp/template/listing/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/listing/
  (HTTP 200, full rendered DOM + `css/style.css` (21KB) extracted).
  The TEMPLATES.md screenshot (`listing-free-directory-website-template.jpg`)
  is the visual reference; the design below is reconstructed from the DOM
  structure and CSS tokens.
- **Section order (1:1):** Navbar (logo + dropdowns: Destinations, Browse
  Categories, Pages) → Hero (full-width bg, "Discover great places in New
  york", search bar + category pills) → Featured Places (3 place cards with
  images, titles, ratings, prices, addresses + "VIEW ALL" button) → Browse
  Categories (8 category blocks: Automotive, Beauty & Spa, Hotel, Restaurant,
  Shopping, Coffee, Club & Bar + "ADD LISTING" button) → Destinations
  ("Reach millions of People" CTA) → Footer.
- **Design tokens extracted from `css/style.css`:**
  - Primary **rose/pink `#ff3a6d`** (buttons, accents, hover states); dark
    variant `#f34e79`.
  - Secondary green `#46cd38` (badges, accents).
  - Dark backgrounds: `#252a33` (footer/dark sections).
  - Body text: `#737882` (muted), `#3e434b` (headings).
  - Star/rating gold: `#ffb006`.
  - Light background: `#f3f4f7`.
  - Font: **"Roboto"** (sans-serif).
  - Border-radius: `3px` (cards), `50%` (circular icons/avatars).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/spotguide-<n>/<w>/<h>`); icons → lucide-react; forms
  prevent default (no backend); no assets copied; footer links to
  ComponentDock.

Spotguide lives in `apps/spotguide` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Spotguide",
dropdown navigation (Destinations, Browse Categories, Pages), and an
"Add Listing" button.

#### Scenario: Navbar content

- **GIVEN** the Spotguide page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Spotguide"
- **AND** it SHALL show dropdown links for Destinations, Browse Categories,
  and Pages
- **AND** it SHALL show an "Add Listing" button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element

### Requirement: Hero section

The system SHALL render a full-width hero with a background image, a headline
"Discover great places in New York", a subtitle, and a search bar with
category filter pills.

#### Scenario: Hero content

- **GIVEN** the Spotguide page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a level-1 heading
- **AND** it SHALL show a subtitle description
- **AND** it SHALL show a search input with placeholder "What do you need to
  find?"
- **AND** it SHALL show at least five category pills (Nightlife, Restaurants,
  Outdoors, Hotels, Art & Culture)

#### Scenario: Search bar

- **GIVEN** the hero is rendered
- **WHEN** the user types in the search input
- **THEN** the input SHALL accept text (no backend submission)

### Requirement: Featured Places

The system SHALL render a section titled "Featured Places" with at least three
place cards, each with an image, title, rating, price indicator, and address.

#### Scenario: Featured place cards

- **GIVEN** the page is rendered
- **WHEN** the Featured Places section is displayed
- **THEN** it SHALL contain a heading "Featured Places"
- **AND** it SHALL show at least three place cards
- **AND** each card SHALL have an image, a title, a star rating, a price
  indicator, and an address
- **AND** it SHALL show a "VIEW ALL" button

### Requirement: Browse Categories

The system SHALL render a section titled "Browse Categories" with at least
seven category blocks, each showing an icon and a category name.

#### Scenario: Category blocks

- **GIVEN** the page is rendered
- **WHEN** the Browse Categories section is displayed
- **THEN** it SHALL contain a heading "Browse Categories"
- **AND** it SHALL show at least seven category blocks (Automotive, Beauty
  & Spa, Hotel, Restaurant, Shopping, Coffee, Club & Bar)
- **AND** each category block SHALL have an icon and a name
- **AND** it SHALL show an "ADD LISTING" button

### Requirement: Destinations section

The system SHALL render a "Destinations" section with a heading "Reach
millions of People" and a call to action.

#### Scenario: Destinations CTA

- **GIVEN** the page is rendered
- **WHEN** the Destinations section is displayed
- **THEN** it SHALL contain a heading "Reach millions of People"
- **AND** it SHALL show a description and a call-to-action button

### Requirement: Footer

The system SHALL render a footer with navigation links, social media links,
and a newsletter subscription form.

#### Scenario: Footer layout

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show navigation columns with links
- **AND** it SHALL show social media icons
- **AND** it SHALL show a newsletter subscription form with an email input
  and a submit button
- **AND** it SHALL include a link to https://www.componentdock.com/

#### Scenario: Newsletter form

- **GIVEN** the page is rendered
- **WHEN** the user enters an email in the newsletter input and clicks Send
- **THEN** the form SHALL prevent default submission (no backend)
