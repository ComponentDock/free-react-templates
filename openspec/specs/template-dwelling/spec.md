---
template: dwelling
source: https://colorlib.com/wp/template/aler/
preview: https://preview.colorlib.com/theme/aler/
name: Dwelling
description: Real estate landing page template
category: Real Estate
---

## Purpose

Dwelling is a one-page real estate landing page template, recreating the ColorLib "Aler" design (https://colorlib.com/wp/template/aler/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. It provides a complete property listing experience with search, featured properties, agent profiles, categories, testimonials, and contact form.

## Requirements

### Requirement: Full-page layout with navigation and footer

The template SHALL render a sticky navbar with logo, navigation links, and a CTA button. The footer SHALL link to https://www.componentdock.com/ and include quick links, useful links, and contact info.

#### Scenario: Navbar renders with all links

- **WHEN** the page loads
- **THEN** the navbar displays the logo "Dwelling"
- **AND** navigation links for Home, Properties, Agents, About, Blog, Contact are visible
- **AND** a "Submit Property" CTA button is shown

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Requirement: Hero carousel with property showcase

The hero section SHALL display a full-width carousel with property slides containing name, price, location, and navigation controls.

#### Scenario: Hero displays first property

- **WHEN** the page loads
- **THEN** the first property name, price, and location are visible

#### Scenario: Hero carousel navigation

- **WHEN** the user clicks the next arrow
- **THEN** the slide changes to the next property
- **WHEN** the user clicks the previous arrow
- **THEN** the slide changes to the previous property

### Requirement: Property search functionality

The search bar SHALL provide location input, property type, city, and price range filters with a search button.

#### Scenario: Search form renders all filters

- **WHEN** the page loads
- **THEN** a location input, property type dropdown, city dropdown, price range dropdown, and search button are visible

### Requirement: Property listings display

The latest properties section SHALL show a grid of property cards with images, labels, agent names, addresses, bed/bath counts, and prices.

#### Scenario: Property cards render correctly

- **WHEN** the page loads
- **THEN** 6 property cards are displayed with names, prices, and bed/bath counts

#### Scenario: Property card interaction

- **WHEN** the user views a property card
- **THEN** a heart/save button is visible for each card

### Requirement: Why Choose Us features

The Why Choose Us section SHALL display 4 feature cards on a dark background with icons and descriptions.

#### Scenario: Feature cards render

- **WHEN** the page loads
- **THEN** 4 feature cards are displayed with titles: "Find your future home", "Buy or rent homes", "Experienced agents", "List your own property"

### Requirement: Featured properties

The featured properties section SHALL show 4 featured property cards with images, prices, and details.

#### Scenario: Featured property cards render

- **WHEN** the page loads
- **THEN** 4 featured property cards are displayed with names, prices, and bed/bath counts

### Requirement: Agent profiles

The team section SHALL display 3 agent cards with photos, names, roles, and social media links.

#### Scenario: Agent cards render

- **WHEN** the page loads
- **THEN** 3 agent cards are displayed with names, roles, and social media link buttons

### Requirement: Property categories

The categories section SHALL show 5 property type categories (Apartment, Villa, House, Restaurant, Office) with icons and counts.

#### Scenario: Category cards render

- **WHEN** the page loads
- **THEN** 5 category cards are displayed with names and property counts

### Requirement: Client testimonials

The testimonials section SHALL display 3 testimonial cards with quotes, star ratings, and author info.

#### Scenario: Testimonial cards render

- **WHEN** the page loads
- **THEN** 3 testimonial cards are displayed with author names, roles, and star ratings

### Requirement: Contact form and info

The contact section SHALL provide contact information (Address, Phone, Support) and a message form with Name, Email, Subject, Message fields and a Send button.

#### Scenario: Contact form submission

- **WHEN** the user fills in the contact form and clicks Send
- **THEN** the form prevents default submission without page reload

#### Scenario: Contact info displays

- **WHEN** the page loads
- **THEN** Address, Phone, and Support contact items are visible with details

### Requirement: Mobile responsive navigation

The navbar SHALL include a hamburger menu toggle for mobile viewports.

#### Scenario: Mobile menu toggle

- **WHEN** the viewport is mobile-sized
- **AND** the user clicks the hamburger button
- **THEN** the mobile navigation menu opens
- **WHEN** the user clicks a navigation link
- **THEN** the menu closes
