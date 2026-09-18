# Template: ListNest (Directory & Listing)

## Purpose

ListNest is a single-page directory & listing template — an original React
recreation of the ColorLib free "Listing" template
(preview: https://preview.colorlib.com/theme/listing/ — directory/listing site),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand pink `#ff3a6d` (search button, heading underlines, CTA), hover `#f34e79`
- Dark background `#252a33` (navbar, footer)
- Light background `#f3f4f7` (featured places, add listing sections)
- Body text `#737882`, heading text `#3e434b`, muted text `#909090`
- Green rating `#46cd38`, orange rating `#ffb006`
- Typeface: Roboto (Google Fonts via `<link>`)
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

ListNest lives in `apps/listnest` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky dark navbar with the brand name "ListNest",
dropdown menus (Explore, Listing, Pages), static links (About, Blog), and an
"Add Listing" button. The navbar SHALL support a mobile hamburger toggle.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "ListNest"
- **AND** it SHALL show dropdown triggers for Explore, Listing, and Pages
- **AND** it SHALL show links to About and Blog
- **AND** it SHALL show a "+ Add Listing" link

#### Scenario: Dropdown on hover

- **GIVEN** the navbar is displayed on desktop
- **WHEN** the user hovers over an Explore dropdown trigger
- **THEN** a dropdown menu SHALL appear with Action, Another action, and Something else here

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user clicks the hamburger toggle button
- **THEN** the mobile navigation menu SHALL open
- **AND** it SHALL display the same nav links as the desktop version

### Requirement: Hero section with search

The system SHALL render a full-width hero section with a background image,
heading "Discover great places in New York", subtitle, and a search form
with two inputs and a SEARCH button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the heading "Discover great places in New York"
- **AND** it SHALL show the subtitle about eating, drinking, and shopping
- **AND** it SHALL show "Browse Popular" and "Recently Added" links

#### Scenario: Search form

- **GIVEN** the hero section is displayed
- **WHEN** the user views the search form
- **THEN** it SHALL show a search query input labeled "Search query"
- **AND** it SHALL show a location input labeled "Location"
- **AND** it SHALL show a SEARCH button

### Requirement: Find Places section

The system SHALL render a "Find Places" section with a heading and 5 category
image cards (1 tall + 2x2 grid layout) showing category names and listing counts.

#### Scenario: Category cards

- **GIVEN** the Find Places section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show the heading "What do you need to find?"
- **AND** it SHALL show 5 category cards: Nightlife, Restaurants, Outdoors, Hotels, Shopping
- **AND** each card SHALL display its listing count

### Requirement: Featured Places section

The system SHALL render a "Featured Places" section on a light background with
3 restaurant cards showing image, color-coded rating, name, type, reviews,
price, address, phone, website, open/closed status, and action icons.

#### Scenario: Place cards

- **GIVEN** the Featured Places section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show the heading "Featured Places"
- **AND** it SHALL show 3 place cards: Burger & Lobster, Joe's Shanghai, Tasty Hand-Pulled Noodles
- **AND** each card SHALL show a rating badge, address, phone, and website

#### Scenario: Open/closed status

- **GIVEN** the Featured Places section is displayed
- **WHEN** a place is closed
- **THEN** it SHALL show "CLOSED NOW" in pink text
- **AND** when a place is open it SHALL show "OPEN NOW" in green text

#### Scenario: Action buttons

- **GIVEN** a place card is displayed
- **WHEN** the user views the action icons
- **THEN** it SHALL show a Favorite (heart) button
- **AND** it SHALL show a Bookmark button

### Requirement: Browse Categories section

The system SHALL render a "Browse Categories" section with 8 category cards
showing Lucide icons and category names in a 4-column grid.

#### Scenario: Category grid

- **GIVEN** the Browse Categories section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show the heading "Browse Categories"
- **AND** it SHALL show 8 categories: Automotive, Beauty & Spa, Hotel, Restaurant, Fitness, Health, Shopping, Travel
- **AND** each category SHALL be a link

### Requirement: Add Listing CTA section

The system SHALL render an "Add Listing" call-to-action section with a heading,
description, and a pink ADD LISTING button.

#### Scenario: CTA content

- **GIVEN** the Add Listing section is displayed
- **WHEN** the user views the section
- **THEN** it SHALL show "Reach millions of People" heading
- **AND** it SHALL show a description about adding a business
- **AND** it SHALL show an "ADD LISTING" button linking to #

### Requirement: Footer

The system SHALL render a dark footer with copyright text, a Component Dock link,
and social media icons (Facebook, Twitter, Instagram).

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show copyright text with the current year and "ListNest"
- **AND** it SHALL link to https://www.componentdock.com/ labeled "Component Dock"
- **AND** it SHALL show social media icon links for Facebook, Twitter, and Instagram

### Requirement: App composition

The system SHALL compose all sections in the correct order: Navbar, Hero,
FindPlaces, FeaturedPlaces, BrowseCategories, AddListing, Footer.

#### Scenario: Section order

- **GIVEN** the app is rendered
- **WHEN** the user views the page
- **THEN** all 7 sections SHALL be present in the correct order
- **AND** the document title SHALL be "ListNest — Directory & Listing Template"
