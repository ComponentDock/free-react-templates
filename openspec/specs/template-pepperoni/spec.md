# Pepperoni — Pizza Restaurant Landing Template

## Purpose

Recreate the ColorLib "Pizza" template (https://colorlib.com/wp/template/pizza/) as a React 19 + Tailwind CSS 4 + TypeScript single-page restaurant landing template named "Pepperoni". The design is a dark-themed pizza restaurant site with a hero carousel, about section, services, gallery, tabbed menu, pricing, contact form, and footer.

## Requirements

### Requirement: Navigation bar

The template SHALL display a sticky dark (#121618) navigation bar with brand name "Pepperoni" and links to Home, Menu, Services, About, and Contact. The navbar SHALL include a mobile hamburger menu that toggles open/closed on click.

#### Scenario: Desktop navigation

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar shows the brand "Pepperoni" and all navigation links

#### Scenario: Mobile navigation

- **WHEN** the hamburger menu button is clicked on mobile
- **THEN** a mobile navigation panel opens with all links
- **WHEN** a mobile nav link is clicked
- **THEN** the mobile navigation panel closes

### Requirement: Hero section

The template SHALL display a full-width hero section with a background image, heading text "Italian Cuisine", subtitle, and an "Order Now" CTA button linking to the menu section.

#### Scenario: Hero content

- **WHEN** the page loads
- **THEN** the hero heading "Italian Cuisine" is visible
- **AND** an "Order Now" button linking to #menu is present

### Requirement: Contact info bar

The template SHALL display a three-column contact info strip below the hero with phone number, address, and business hours, each with an icon.

#### Scenario: Contact info display

- **WHEN** the page loads
- **THEN** the phone number "000 (123) 456 7890" is visible
- **AND** the address "198 West 21th Street" is visible
- **AND** the hours "Open Monday–Friday" are visible

### Requirement: About section

The template SHALL display a split-layout about section with an image on the left and descriptive text on the right, headed "Welcome to Pepperoni — A Restaurant".

#### Scenario: About content

- **WHEN** the page loads
- **THEN** the about heading containing "Welcome to" is visible
- **AND** descriptive paragraph text is present

### Requirement: Services section

The template SHALL display a dark-background services section with 3 service cards: Healthy Foods, Fastest Delivery, and Original Recipes, each with an icon, heading, and description.

#### Scenario: Services display

- **WHEN** the page loads
- **THEN** three service cards are visible with headings "Healthy Foods", "Fastest Delivery", and "Original Recipes"

### Requirement: Gallery section

The template SHALL display a 4-column image grid gallery with hover overlay effects.

#### Scenario: Gallery images

- **WHEN** the page loads
- **THEN** four gallery images are displayed

### Requirement: Counter section

The template SHALL display a dark-background statistics section with 4 counters: Pizza Branches (100), Number of Awards (85), Happy Customers (10,567), and Staff (50).

#### Scenario: Counter stats

- **WHEN** the page loads
- **THEN** four stat counters are visible with their respective numbers and labels

### Requirement: Tabbed menu section

The template SHALL display a tabbed menu section with tabs for Pizza, Drinks, Burgers, and Pasta. Each tab SHALL show 3 food items with image, name, description, price, and "Add to Cart" button.

#### Scenario: Default tab

- **WHEN** the page loads
- **THEN** the Pizza tab is active and shows pizza menu items

#### Scenario: Tab switching

- **WHEN** the Drinks tab is clicked
- **THEN** the Drinks menu items are displayed

### Requirement: Menu pricing section

The template SHALL display a two-column menu pricing list with item names and prices.

#### Scenario: Pricing display

- **WHEN** the page loads
- **THEN** menu items with prices are visible in two columns

### Requirement: Contact form section

The template SHALL display a contact form with First Name, Last Name, and Message fields plus a Send button, alongside a map placeholder.

#### Scenario: Form fields

- **WHEN** the page loads
- **THEN** the contact form has First Name, Last Name, and Message input fields
- **AND** a Send button is present

### Requirement: Footer

The template SHALL display a dark-background footer with About Us, Recent Blog, Services links, and Newsletter signup. The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer content

- **WHEN** the page loads
- **THEN** the footer shows About Us, Recent Blog, Services, and Newsletter sections
- **AND** a "More templates at Component Dock" link pointing to https://www.componentdock.com/ is present

#### Scenario: Social links

- **WHEN** the page loads
- **THEN** Twitter, Facebook, and Instagram social media links are present in the footer
