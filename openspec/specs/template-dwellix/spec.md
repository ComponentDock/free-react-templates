# Spec: Dwellix — Real Estate Listing Template

> Recreation of ColorLib "Rehomes" (https://colorlib.com/wp/template/rehomes/)

## Purpose

A real estate property listing template with search functionality, property
cards, category browsing, why-choose-us features, blog posts, and a newsletter
footer. Lime-green accent (`#92c800`) on light background, Poppins font.

## Requirements

### Requirement: Top header with contact info and social links

The template SHALL display a top header bar with email, phone number, and social media icons.

#### Scenario: Top header renders contact info

- **WHEN** the page loads
- **THEN** the email address "info@componentdock.com" is visible
- **AND** the phone number "(12) 345 6789" is visible

#### Scenario: Top header renders social icons

- **WHEN** the page loads
- **THEN** Facebook, Twitter, Instagram, and LinkedIn icons are visible

### Requirement: Navigation bar with logo and menu

The template SHALL display a sticky navigation bar with the DWELLIX logo, navigation links, and a Contact Us button.

#### Scenario: Navbar renders logo and links

- **WHEN** the page loads
- **THEN** the DWELLIX logo is visible
- **AND** navigation links (Home, Pages, Rent, Agents, About, Blog) are visible

#### Scenario: Mobile hamburger menu toggles

- **WHEN** the viewport is mobile and the user clicks the hamburger icon
- **THEN** the mobile menu opens with all navigation links

### Requirement: Property search bar with filters

The template SHALL display a search form with dropdown filters and a search button.

#### Scenario: Search form renders all filters

- **WHEN** the page loads
- **THEN** 6 filter dropdowns (Location, Types, City, Bedrooms, Bathroom, Price Range) are visible
- **AND** a Search button is visible

#### Scenario: Search form does not navigate on submit

- **WHEN** the user clicks the Search button
- **THEN** the form submission is prevented (no page navigation)

### Requirement: Featured property listings

The template SHALL display 6 property cards in a 3-column grid with images, details, and pricing.

#### Scenario: All property cards render

- **WHEN** the page loads
- **THEN** 6 property cards are displayed with titles, locations, and seller info

#### Scenario: Property cards show pricing

- **WHEN** the page loads
- **THEN** each property card shows a price and a "For Rent" or "For Sale" badge

### Requirement: Why Choose Us section

The template SHALL display 3 feature items with icons and descriptions.

#### Scenario: Feature items render

- **WHEN** the page loads
- **THEN** 3 feature items are visible: Find Your Home, Transportation Support, Save Your Money

### Requirement: Property categories section

The template SHALL display 5 category cards in an asymmetric grid with gradient overlays.

#### Scenario: Category cards render

- **WHEN** the page loads
- **THEN** 5 category cards are visible with property counts, names, and starting prices

### Requirement: Call-to-action banner

The template SHALL display a CTA banner with a background image, heading, and app store buttons.

#### Scenario: CTA banner renders

- **WHEN** the page loads
- **THEN** the heading "Download app & join now!" is visible
- **AND** App Store and Google Play buttons are visible

### Requirement: Latest news blog section

The template SHALL display 3 blog post cards with images, titles, and metadata.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 3 blog post cards are visible with titles, authors, dates, and comment counts

### Requirement: Partner logos section

The template SHALL display a row of 5 partner logo placeholders.

#### Scenario: Partner logos render

- **WHEN** the page loads
- **THEN** 5 partner logo images are visible

### Requirement: Footer with brand, contact, cities, newsletter

The template SHALL display a 4-column footer with brand info, contact details, property cities, and a newsletter form. The copyright line MUST link to Component Dock.

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** brand section, contact info, property cities list, and newsletter form are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the copyright line contains a link to https://www.componentdock.com/

#### Scenario: Newsletter form does not navigate on submit

- **WHEN** the user submits the newsletter form
- **THEN** the form submission is prevented (no page navigation)
