## Purpose

Propvale is a free real estate website template that recreates the ColorLib "Real Estate 2" design (https://colorlib.com/wp/template/real-estate-2/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript application. It provides a property listing landing page with search, featured properties, FAQ, testimonials, agent profiles, and a call-to-action section.

## Requirements

### Requirement: Top bar displays contact information

The template SHALL display a top bar with company welcome message, email, phone number, and social media icons.

#### Scenario: Top bar content

- **WHEN** the page loads
- **THEN** the top bar shows "Welcome to Propvale consulting service"
- **AND** an email icon and address are visible
- **AND** a phone icon and number are visible
- **AND** social media icons (LinkedIn, Facebook, Twitter) are visible

### Requirement: Navigation bar with logo and links

The template SHALL display a sticky navigation bar with the "Propvale." logo, navigation links, and an "Add Property" button.

#### Scenario: Navigation content

- **WHEN** the page loads
- **THEN** the navbar shows the "Propvale." logo
- **AND** navigation links (Home, Pages, Property, Blog, Contact) are visible
- **AND** an "Add Property" button is displayed

#### Scenario: Dark mode toggle

- **WHEN** the user clicks the dark mode toggle
- **THEN** the page switches to dark mode

### Requirement: Hero section with property search

The template SHALL display a hero section with a background image, heading "Find Your Best Property", subtitle, and a property search form with Location, Property Type, Price, Bed Room, and Bath Room fields.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero shows "Find Your Best Property" heading
- **AND** a subtitle text is displayed
- **AND** the search form has Location, Property Type, Price, Bed Room, and Bath Room fields

### Requirement: Popular properties grid

The template SHALL display 6 property cards in a 3-column grid, each with an image, tag (For Sale/For Rent), title, location, price, and stats (sqft, beds, baths).

#### Scenario: Property cards

- **WHEN** the page loads
- **THEN** 6 property cards are displayed
- **AND** each card shows an image, title, location, and price
- **AND** each card shows sqft, bed, and bath stats

### Requirement: FAQ accordion section

The template SHALL display a FAQ section with expandable/collapsible accordion items.

#### Scenario: Accordion interaction

- **WHEN** a user clicks an FAQ question
- **THEN** the answer expands
- **AND** clicking another question collapses the previous answer

### Requirement: Statistics counter section

The template SHALL display a counter section with 3 statistics on a dark background: Properties for Sale (200+), Happy Clients (300), and Years Experience (15).

#### Scenario: Counter display

- **WHEN** the page loads
- **THEN** "200+" is shown for Properties
- **AND** "300" is shown for Happy Clients
- **AND** "15" is shown for Years Experience

### Requirement: Testimonials section

The template SHALL display testimonials with quote text, author photo, name, and role, with carousel navigation.

#### Scenario: Testimonial content

- **WHEN** the page loads
- **THEN** testimonial quotes are visible
- **AND** author names and roles are displayed

#### Scenario: Testimonial navigation

- **WHEN** a user clicks the next/previous button
- **THEN** the displayed testimonial changes

### Requirement: Team/agents section

The template SHALL display 4 agent cards with photo, name, role, and social media icons.

#### Scenario: Agent cards

- **WHEN** the page loads
- **THEN** 4 agent cards are shown
- **AND** each card shows a photo, name, and role

### Requirement: Call-to-action section

The template SHALL display a CTA section with an orange gradient background, heading "Add your property for sale", subtitle, and a button.

#### Scenario: CTA content

- **WHEN** the page loads
- **THEN** the CTA shows "Add your property for sale"
- **AND** a button is displayed

### Requirement: Footer with Component Dock link

The template SHALL display a footer with contact information, service links, newsletter form, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows contact information
- **AND** service and quick links are visible
- **AND** a newsletter form is present
- **AND** a link to https://www.componentdock.com/ is displayed as "Component Dock"
