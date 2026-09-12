# Template: Quest (Directory & Listing)

## Purpose

Quest is a single-page directory & listing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dorne" website template
(source: https://colorlib.com/wp/template/dorne/ — "Dorne - Directory & Listing Template"),
built under a DIFFERENT name (Quest — evokes searching and finding in a directory).

## Requirements

### Requirement: Page loads with all sections in correct order

The template SHALL render all 10 sections in the correct DOM order: Navbar, Hero, Categories, About, Editor's Pick, Featured Destinations, Featured Restaurants, Featured Events, Clients, Footer.

#### Scenario: All sections are present on page load

- **WHEN** I visit the Quest template
- **THEN** I see a navigation bar with logo and links
- **AND** I see a hero section with headline "Discover places near you"
- **AND** I see 5 category cards
- **AND** I see an about section with heading
- **AND** I see editor's pick city cards
- **AND** I see featured destination cards
- **AND** I see featured restaurant cards
- **AND** I see featured event cards
- **AND** I see client logos
- **AND** I see a footer with Component Dock link

### Requirement: Hero search form has tabs and selects

The hero section SHALL display a tabbed search form with Places and Events tabs, with Places active by default. Each tab shows destination, category, and price range selects plus a Search button.

#### Scenario: Hero tabs and search form

- **WHEN** I visit the Quest template
- **THEN** I see "Places" and "Events" tabs in the hero
- **AND** the "Places" tab is active by default
- **AND** I see destination, category, and price range select dropdowns
- **AND** I see a Search button

#### Scenario: Switching tabs

- **WHEN** I click the "Events" tab
- **THEN** the "Events" tab becomes active
- **AND** the "Places" tab is no longer active

### Requirement: Category cards display correctly

The categories section SHALL show 5 category cards with icons and labels: Hotels, Restaurants, Shopping, Beauty & Spa, Cinema.

#### Scenario: Category cards are rendered

- **WHEN** I visit the Quest template
- **THEN** I see 5 category cards
- **AND** each card has an icon and a text label

### Requirement: Footer links to Component Dock

The footer SHALL display "Made with" text with a heart icon and a link to componentdock.com branded as "Component Dock".

#### Scenario: Footer Component Dock link

- **WHEN** I visit the Quest template
- **THEN** the footer contains a link to componentdock.com
- **AND** the footer shows "Made with" text
- **AND** the link opens in a new tab

### Requirement: Featured sections show correct card counts

Each featured section SHALL display the correct number of cards: Editor's Pick shows 3 cities, Featured Destinations shows 5 destinations, Featured Restaurants shows 5 restaurants, Featured Events shows 6 events.

#### Scenario: Editor's pick shows 3 city cards

- **WHEN** I visit the Quest template
- **THEN** I see 3 city cards in the Editor's Pick section

#### Scenario: Featured destinations shows 5 cards

- **WHEN** I visit the Quest template
- **THEN** I see 5 destination cards with prices

#### Scenario: Featured restaurants shows 5 cards

- **WHEN** I visit the Quest template
- **THEN** I see 5 restaurant cards with ratings

#### Scenario: Featured events shows 6 cards

- **WHEN** I visit the Quest template
- **THEN** I see 6 event cards with dates

### Requirement: Navbar mobile toggle

The navbar SHALL include a mobile toggle button that shows/hides the mobile navigation menu.

#### Scenario: Mobile menu toggle

- **WHEN** I click the mobile toggle button
- **THEN** the mobile navigation menu appears
- **AND** I can see the nav links and sign in / add listings options

### Requirement: Design tokens match ColorLib Dorne

The template SHALL use the following design tokens extracted from the original: Open Sans font, brand color #7643ea, dark base #341a79, square button corners, centered section headings with decorative line.

#### Scenario: Brand colors and font are applied

- **WHEN** I visit the Quest template
- **THEN** the page uses Open Sans font family
- **AND** the brand purple color is visible on buttons and accents

## Files

- `apps/quest/src/App.tsx` — main composition
- `apps/quest/src/components/Navbar.tsx`
- `apps/quest/src/components/Hero.tsx`
- `apps/quest/src/components/Categories.tsx`
- `apps/quest/src/components/About.tsx`
- `apps/quest/src/components/EditorsPick.tsx`
- `apps/quest/src/components/FeaturedDestinations.tsx`
- `apps/quest/src/components/FeaturedRestaurants.tsx`
- `apps/quest/src/components/FeaturedEvents.tsx`
- `apps/quest/src/components/Clients.tsx`
- `apps/quest/src/components/Footer.tsx`
- `apps/quest/src/App.test.tsx` — 100% coverage tests
