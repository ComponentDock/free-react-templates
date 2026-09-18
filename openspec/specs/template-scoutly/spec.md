# Template: Scoutly (Directory & Listing)

## Purpose

Scoutly is a single-page directory & listing template — a React recreation of the
ColorLib free "Dorne" template
(preview: https://preview.colorlib.com/theme/dorne/), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Design tokens captured from the original (see docs/replication.md):

- Brand purple `#7643ea` (primary buttons, category cards, badges, hover state)
- Brand dark purple `#341a79` (preloader, sticky header, search form bg)
- Brand teal accent `#30c0a3` (add-more buttons, map pin badges)
- Hover purple `#5d25dd`
- Text heading `#2a2a2a`, body text `#848484`
- Background gray `#f9f9f9`, feature card bg `#f4f6f8`
- Dark overlay `rgba(14, 2, 35, 0.5)` at 50%, `rgba(14, 2, 35, 0.9)` at 90%
- Typeface: Open Sans (Google Fonts, weights 300/400/600/700/800)
- Square buttons (border-radius 0), 52px height, min-width 180px
- Category cards: purple bg, white icon + text, box-shadow on hover
- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Scoutly lives in `apps/scoutly` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a fixed transparent navbar with the site name "Scoutly",
navigation links (Home, Explore dropdown, Listings dropdown, Contact), a search
button, a "Sign in or Register" link, and an "+ Add Listings" purple CTA button.
The navbar becomes dark on scroll.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Scoutly" linking to `#home`
- **AND** it SHALL show links: Home, Explore (dropdown), Listings (dropdown), Contact
- **AND** it SHALL show a search button, "Sign in or Register" link, and "+ Add Listings" button

#### Scenario: Dropdown menus

- **GIVEN** the page is rendered
- **WHEN** the user hovers over "Explore" or "Listings"
- **THEN** a dropdown SHALL appear with links: Home, Explore, Listing, Single Listing, Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the hamburger toggle is pressed
- **THEN** the mobile navigation menu SHALL become visible
- **AND** pressing the toggle again SHALL hide the menu
- **AND** clicking a mobile link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-viewport hero section with a background image,
dark overlay, a headline "Discover places near you", a subheading "This is the
best guide of your city", and a tabbed search form (Places / Events).

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the headline "Discover places near you"
- **AND** it SHALL contain the subheading "This is the best guide of your city"
- **AND** it SHALL show a background image with dark overlay

#### Scenario: Hero search form

- **GIVEN** the hero section is displayed
- **WHEN** the search form is visible
- **THEN** it SHALL show two tabs: "Places" (active by default) and "Events"
- **AND** each tab SHALL contain a form with three dropdown selects (Destination, Category, Price Range) and a purple "Search" button

#### Scenario: Tab switching

- **GIVEN** the hero search form is displayed
- **WHEN** the user clicks the "Events" tab
- **THEN** the Events tab SHALL become active
- **AND** the Places tab SHALL become inactive

#### Scenario: Social sidebar

- **GIVEN** the hero is rendered
- **WHEN** the hero is displayed
- **THEN** a vertical "Follow us on Social Media" label with social icons (LinkedIn, Behance, Dribbble, Twitter, Facebook) SHALL appear at the bottom-left, rotated 90 degrees

### Requirement: Category cards section

The system SHALL render a row of 5 category cards (Hotels, Restaurants,
Shopping, Beauty & Spa, Cinema) with icons, on white background, positioned
overlapping the hero (-50% top offset).

#### Scenario: Category cards

- **GIVEN** the page is rendered
- **WHEN** the category section is displayed
- **THEN** it SHALL show 5 cards in a horizontal row
- **AND** each card SHALL display an icon and a category name
- **AND** the categories SHALL be: Hotels, Restaurants, Shopping, Beauty & Spa, Cinema
- **AND** each card SHALL have a purple background with white text

#### Scenario: Category card hover

- **GIVEN** the category section is displayed
- **WHEN** the user hovers over a category card
- **THEN** the card SHALL display a box-shadow effect

### Requirement: About section

The system SHALL render a centered about section with the heading "Discover your
city with Scoutly" (the name in purple) and a descriptive paragraph.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "Discover your city with Scoutly"
- **AND** "Scoutly" SHALL be styled in the brand purple color
- **AND** a descriptive paragraph SHALL follow

### Requirement: Editor's Pick (Cities) section

The system SHALL render a section with a dark overlay background image, heading
"Cities you must see" / "Editor's pick", and a 2-column grid of city cards
(New York, Barcelona, Paris) with destination counts.

#### Scenario: Editor's pick content

- **GIVEN** the page is rendered
- **WHEN** the editor's pick section is displayed
- **THEN** it SHALL show the heading "Cities you must see" with subtext "Editor's pick"
- **AND** it SHALL display city cards for New York (1643 Destinations), Barcelona (943 Destinations), Paris (243 Destinations)

#### Scenario: City card layout

- **GIVEN** the editor's pick section is displayed
- **WHEN** city cards are rendered
- **THEN** the left column SHALL show one large card (New York)
- **AND** the right column SHALL show two stacked cards (Barcelona, Paris)
- **AND** each card SHALL have image + overlay info badges (city name + destination count)

### Requirement: Featured Destinations section

The system SHALL render a horizontal scrolling carousel of destination cards
(Ibiza, Paris, Lake Como, Greece, Norway) with price badges and favorite
icons, on a light background.

#### Scenario: Featured destination cards

- **GIVEN** the page is rendered
- **WHEN** the featured destinations section is displayed
- **THEN** it SHALL show the heading "Featured destinations" / "Editor's pick"
- **AND** it SHALL display 5 destination cards in a horizontal carousel
- **AND** each card SHALL show an image, a price badge ("FROM $59/night"), a title, a subtitle, and a heart/favorite icon

#### Scenario: Destination card hover

- **GIVEN** the featured destinations section is displayed
- **WHEN** the user hovers over a destination card
- **THEN** the card background SHALL change to brand purple
- **AND** the text and icon colors SHALL change to white

### Requirement: Featured Restaurants section

The system SHALL render a horizontal scrolling carousel of restaurant cards
with rating badges and map icons, on a solid purple background.

#### Scenario: Restaurant cards

- **GIVEN** the page is rendered
- **WHEN** the featured restaurants section is displayed
- **THEN** it SHALL show the heading "Featured Restaurants" / "Editor's pick"
- **AND** it SHALL display 5 restaurant cards in a horizontal carousel
- **AND** each card SHALL show an image, a rating badge (e.g. "8.5"), a map icon, a restaurant name, a location, and a heart/favorite icon

#### Scenario: Restaurant card hover

- **GIVEN** the featured restaurants section is displayed
- **WHEN** the user hovers over a restaurant card
- **THEN** the map icon badge background SHALL change to teal (#30c0a3)

### Requirement: Featured Events section

The system SHALL render a grid of event cards on a dark overlay background
image, each with a thumbnail, date badge, event name, location, description,
and a "+" detail button.

#### Scenario: Event cards

- **GIVEN** the page is rendered
- **WHEN** the featured events section is displayed
- **THEN** it SHALL show the heading "Featured events" / "Editor's pick"
- **AND** it SHALL display 6 event cards in a 2-column grid
- **AND** each card SHALL show a thumbnail, a date badge ("26 Nov"), a map pin icon, an event name, a location (Manhattan), a short description, and a "+" button

#### Scenario: Event card hover

- **GIVEN** the featured events section is displayed
- **WHEN** the user hovers over an event card
- **THEN** the "+" button SHALL be visible and interactive

### Requirement: Client logos section

The system SHALL render a row of 5 partner/client logos in a horizontal strip.

#### Scenario: Client logos

- **GIVEN** the page is rendered
- **WHEN** the clients section is displayed
- **THEN** it SHALL show 5 placeholder client logos in a horizontal row, evenly spaced

### Requirement: Footer

The system SHALL render a footer with copyright text, a "Made with ❤️ by" credit
replaced with a link to Component Dock, and social media icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain copyright text
- **AND** it SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock"
- **AND** it SHALL show social media icons (LinkedIn, Behance, Dribbble, Twitter, Facebook)

### Requirement: Search overlay

The system SHALL render a fixed search overlay that slides down when the search
button is clicked, containing a search input field.

#### Scenario: Search overlay toggle

- **GIVEN** the page is rendered
- **WHEN** the user clicks the search button in the navbar
- **THEN** the search overlay SHALL slide down from the top
- **AND** it SHALL show a search input with placeholder "Search Your Desire Destinations or Events"
- **AND** clicking the close button SHALL hide the overlay

## Verification checklist

- [ ] Navbar renders with correct links, search button, sign-in link, and CTA
- [ ] Navbar becomes dark/semi-transparent on scroll
- [ ] Hero shows background image with overlay, headline, subheading
- [ ] Hero search form has Places/Events tabs with dropdowns and search button
- [ ] Social sidebar is vertical at bottom-left of hero
- [ ] Category cards: 5 cards with icons, purple bg, hover shadow
- [ ] About section: centered heading with purple name + paragraph
- [ ] Editor's Pick: dark overlay bg, 3 city cards (1 large + 2 stacked)
- [ ] Featured Destinations: carousel of 5 cards with price + favorite
- [ ] Featured Restaurants: carousel of 5 cards on purple bg with ratings
- [ ] Featured Events: 2-column grid of 6 event cards with dates
- [ ] Client logos: 5 logos in horizontal row
- [ ] Footer: copyright + Component Dock link + social icons
- [ ] Search overlay: toggles open/close with search input
- [ ] Mobile responsive: hamburger menu, stacked layouts on small screens
- [ ] No ColorLib references in app code (provenance in spec only)
