## Purpose

Recreate the ColorLib CityListing directory/listing template as a React 19 + Vite + Tailwind CSS 4 + TypeScript app named "TownHub". The template is a city directory one-pager with a hero search bar, popular locations, how-it-works steps, featured categories, testimonials, newsletter subscribe, blog posts, and a dark footer.

## Requirements

### Requirement: Page renders all major sections in correct order

The TownHub page SHALL render all 9 sections in order: Navbar, Hero, Popular Locations, How It Works, Categories, Testimonial, Subscribe, Blog, Footer.

#### Scenario: All sections are present

- **GIVEN** the TownHub page is loaded
- **THEN** the navbar should be visible with logo and navigation links
- **AND** the hero section should show the heading "Discover Great Places"
- **AND** the search bar should have a text input, category select, and search button
- **AND** the Popular Locations section should display 3 location cards
- **AND** the How It Works section should show 3 step cards
- **AND** the Featured Categories section should display 4 category cards
- **AND** the Testimonial section should be present
- **AND** the Subscribe section should show an email input
- **AND** the Blog section should show 3 post cards
- **AND** the footer should contain a Component Dock link

### Requirement: Navbar provides navigation and CTA

The navbar SHALL display the Town Hub brand logo, navigation links (Home, About, Categories, Listing, Page, Contact), an "+ Add Listing" CTA button, and a "Sign in or Register" link.

#### Scenario: Navigation links are clickable

- **GIVEN** the navbar is visible
- **THEN** each nav link should be clickable and point to the correct section anchor
- **AND** the "+ Add Listing" button should link to #listing
- **AND** the "Sign in or Register" link should link to #page

### Requirement: Hero search form is interactive

The hero section SHALL display a search form with a text input, category dropdown, and search button.

#### Scenario: User can type in search input

- **GIVEN** the search bar is visible
- **WHEN** the user types in the search input
- **THEN** the input value should update
- **WHEN** the user clicks the Search button
- **THEN** the form should be submittable without navigation

### Requirement: Popular Locations displays 3 cards

The Popular Locations section SHALL display 3 location cards with images and names.

#### Scenario: Location cards show correct content

- **GIVEN** the Popular Locations section is visible
- **THEN** each location card should show an image and location name
- **AND** hovering over a card should show an explore button

### Requirement: Footer contains Component Dock link

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock credit is present

- **GIVEN** the footer is rendered
- **THEN** it should contain a link to https://www.componentdock.com/
- **AND** the link text should mention "Component Dock"
