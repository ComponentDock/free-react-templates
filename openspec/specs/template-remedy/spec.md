# Spec: Remedy — Pharmacy & Supplement Store Template

## Purpose

Recreate the ColorLib "Pharmative" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript template named "Remedy". The template is a pharmacy and supplement store landing page with hero carousel, feature banners, product cards, newsletter CTA, testimonials, and footer.

**Source:** https://colorlib.com/wp/template/pharmative/
**Preview:** https://preview.colorlib.com/theme/pharmative/

## Requirements

### Requirement: Navbar with logo, navigation, search, and cart

The template SHALL display a sticky navbar with the "Remedy" logo (green brand color), desktop navigation links (Home, Store, Products with dropdown, About, Contact), search toggle, shopping cart icon, and mobile hamburger menu.

#### Scenario: Navbar renders all elements

- **WHEN** the page loads
- **THEN** the "Remedy" logo is visible
- **AND** navigation links: Home, Store, Products, About, Contact are present
- **AND** a search button and shopping cart icon are present

#### Scenario: Mobile menu toggle

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu appears
- **AND** clicking a link closes the mobile menu

#### Scenario: Search bar toggle

- **WHEN** the user clicks the search button
- **THEN** a search input field appears
- **AND** clicking close hides the search bar

### Requirement: Hero carousel with slides

The template SHALL display a hero carousel with two slides featuring background images, centered headings, descriptions, and "Shop Now" call-to-action buttons.

#### Scenario: Hero displays first slide

- **WHEN** the page loads
- **THEN** the first slide shows "Remedy Opens 24 Hours" heading
- **AND** a "Shop Now" button is visible

#### Scenario: Hero navigation arrows work

- **WHEN** the user clicks the next arrow
- **THEN** the second slide appears with "New Medicine Everyday"
- **WHEN** the user clicks the previous arrow
- **THEN** the first slide reappears

### Requirement: Feature banners section

The template SHALL display three feature banners in a row: Free Delivery, New Medicine Everyday, and Medicines Guaranteed, each with an icon, title, description, and "Learn more" link.

#### Scenario: Feature banners render

- **WHEN** the page loads
- **THEN** three feature banners are visible with titles and descriptions

### Requirement: Products section

The template SHALL display a "Pharmacy Products" heading and a grid of 4 product cards with images, optional sale badges, names, and prices.

#### Scenario: Products render

- **WHEN** the page loads
- **THEN** 4 product cards are displayed with images and prices
- **AND** sale badges appear on applicable products

### Requirement: Newsletter signup CTA

The template SHALL display a full-width green banner with a discount heading, description, and email signup form.

#### Scenario: Newsletter renders

- **WHEN** the page loads
- **THEN** the "Sign up for discount" heading is visible
- **AND** an email input and "Sign up" button are present

### Requirement: Testimonials section

The template SHALL display a "Happy Customers" heading and 3 testimonial cards with quotes and author names.

#### Scenario: Testimonials render

- **WHEN** the page loads
- **THEN** 3 testimonial cards are visible with quotes and author names

### Requirement: Why Us section

The template SHALL display a "Why Us" heading and 3 numbered items with descriptions.

#### Scenario: Why Us renders

- **WHEN** the page loads
- **THEN** 3 numbered items are visible with titles and descriptions

### Requirement: Footer with Component Dock link

The template SHALL display a footer with About Remedy description, Navigation links, Contact info, and a copyright line linking to https://www.componentdock.com/.

#### Scenario: Footer renders with Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to componentdock.com
- **AND** the link has target="_blank"
