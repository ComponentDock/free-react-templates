# Spec: Nestwell — Real Estate Agency Template

Recreation of ColorLib Homeland (https://colorlib.com/wp/template/homeland/).

## Purpose

Provide a real estate agency landing page template featuring a hero slider with property details, a property search form, featured properties, about/services sections, customer testimonials, and a full footer with newsletter signup.

## Requirements

### Requirement: Navbar with navigation and CTA

The template SHALL display a fixed dark navbar with the brand name "Nestwell.", navigation links (Home, Properties, Agents, Blog, About, Contact), and a "Get Started" CTA button.

#### Scenario: Desktop navbar renders all links

- **GIVEN** the user views the template on a desktop viewport
- **THEN** the brand "Nestwell." is displayed in the navbar
- **AND** links for Home, Properties, Agents, Blog, About, Contact are visible
- **AND** a "Get Started" button is visible

#### Scenario: Mobile menu toggle

- **GIVEN** the user views the template on a mobile viewport
- **WHEN** the user taps the hamburger menu button
- **THEN** the mobile navigation menu expands showing all links
- **WHEN** the user taps the close button
- **THEN** the mobile menu collapses

### Requirement: Hero section with property showcase

The template SHALL display a full-width hero section with a background property image, dark overlay, headline text, description, and a property details card with specs (area, bedrooms, bathrooms, garage) and a "View Properties" button.

#### Scenario: Hero displays property information

- **GIVEN** the user views the hero section
- **THEN** a property headline is displayed in an h1 heading
- **AND** a property description is shown
- **AND** property details including area, bedrooms, bathrooms, and garage are listed
- **AND** a "View Properties" button is present

### Requirement: Property search form

The template SHALL display a search form with Location (text input), Property Type (select), Property Status (select), Price Limit (select), and a Search button.

#### Scenario: Search form fields are accessible

- **GIVEN** the user views the search form
- **THEN** a Location text input with associated label is present
- **AND** Property Type, Property Status, and Price Limit select dropdowns are present
- **AND** a Search submit button is present

### Requirement: Featured Properties section

The template SHALL display a grid of 5 property cards, each showing an image, sale/rent tag, property name, price, location, and bed/bath information.

#### Scenario: Property cards display correctly

- **GIVEN** the user views the Featured Properties section
- **THEN** 5 property cards are rendered
- **AND** each card shows a price, location, and bed/bath details
- **AND** each card has a Sale or Rent tag

### Requirement: About section with features

The template SHALL display an about section with a background image, heading, description, 4 feature items (Find Your Dream Location, Expert Agents At Your Service, Buy & Rent Premium Homes, Best Value Properties), and a "Learn More" link.

#### Scenario: About section renders features

- **GIVEN** the user views the about section
- **THEN** the heading about discovering properties is displayed
- **AND** 4 feature items with icons are shown
- **AND** a "Learn More" link is present

### Requirement: Services section with property cards

The template SHALL display a services section with two side-by-side image cards (Buying and Renting) with overlay text and "Read more" links.

#### Scenario: Services cards render correctly

- **GIVEN** the user views the services section
- **THEN** "Buying A Property" and "Renting A Property" cards are displayed
- **AND** each card has a "Read more" link

### Requirement: Testimonials section

The template SHALL display a dark-background testimonials section with customer quotes, names, and roles.

#### Scenario: Testimonials render customer feedback

- **GIVEN** the user views the testimonials section
- **THEN** customer names (Sarah Mitchell, James Cooper, Emily Dawson) are displayed
- **AND** each testimonial shows a "Buyer" role
- **AND** quote text is present

### Requirement: Footer with newsletter and Component Dock link

The template SHALL display a dark footer with 5 columns (About, Company, Explore, Get Started, Newsletter), social links, a newsletter email form, and a "Component Dock" branded link.

#### Scenario: Footer contains required elements

- **GIVEN** the user views the footer
- **THEN** a "Component Dock" link points to https://www.componentdock.com/
- **AND** Company, Explore, and Get Started link columns are present
- **AND** a newsletter email input and Subscribe button are present
- **AND** social links (Facebook, Instagram) are present
