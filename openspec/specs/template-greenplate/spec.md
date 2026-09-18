# Greenplate — Fresh Grocery / Organic Food Template

## Purpose

Recreate the ColorLib Vegefoods design as a React 19 + Tailwind CSS 4 + TypeScript single-page grocery/organic food e-commerce landing page. The original design is a Bootstrap 4 template featuring a hero slider, product grid, deal countdown, testimonials, and newsletter subscription. Greenplate uses the fresh green brand color (#82ae46) with Poppins and Lora fonts.

**Source:** https://colorlib.com/wp/template/vegefoods/
**Preview:** https://preview.colorlib.com/theme/vegefoods/

## Requirements

### Requirement: Top Bar

The template displays a branded top bar with contact information.

#### Scenario: Top bar renders contact info

- **GIVEN** the page loads
- **THEN** the top bar displays a phone number, email address, and delivery information
- **AND** the top bar has a green background (#82ae46) with white text

### Requirement: Navigation Bar

The template includes a dark navigation bar with brand identity and links.

#### Scenario: Navbar displays brand and links

- **GIVEN** the page loads
- **THEN** the navbar shows the brand name "Greenplate"
- **AND** navigation links are present: Home, Shop, About, Blog, Contact
- **AND** a cart icon with item count [0] is displayed

#### Scenario: Shop dropdown toggle

- **GIVEN** the Shop link is clicked
- **THEN** a dropdown menu appears with sub-links

### Requirement: Hero Section

The template features a full-width hero slider with calls to action.

#### Scenario: Hero displays heading and CTA

- **GIVEN** the hero section loads
- **THEN** a heading "We serve Fresh Vegetables & Fruits" is displayed
- **AND** a "View Details" button is visible

#### Scenario: Hero has multiple slides

- **GIVEN** the hero section loads
- **THEN** at least 2 slide items are rendered

### Requirement: Features Section

The template shows a 4-column feature grid.

#### Scenario: Features display service highlights

- **GIVEN** the features section loads
- **THEN** 4 feature cards are displayed
- **AND** each card shows an icon, title, and description

### Requirement: Categories Section

The template displays product categories in an image grid.

#### Scenario: Categories show product types

- **GIVEN** the categories section loads
- **THEN** a "Vegetables" hero card is shown
- **AND** category links for Fruits, Juices, and Dried are shown

### Requirement: Products Section

The template showcases products in a grid layout.

#### Scenario: Products display in grid

- **GIVEN** the products section loads
- **THEN** 8 product cards are displayed

#### Scenario: Product cards show details

- **GIVEN** a product card renders
- **THEN** it shows an image, name, price, and action buttons

#### Scenario: Sale badge on discounted items

- **GIVEN** a product has a discount
- **THEN** a sale badge is shown with original and discounted prices

### Requirement: Deal of the Day

The template includes a promotional deal section with countdown.

#### Scenario: Deal section renders

- **GIVEN** the deal section loads
- **THEN** "Deal of the day" heading is shown
- **AND** countdown timer elements (days, hours, minutes, seconds) are present

### Requirement: Testimonials

The template shows customer testimonials in a carousel.

#### Scenario: Testimonials display

- **GIVEN** the testimonials section loads
- **THEN** "Our satisfied customer says" heading is shown
- **AND** at least 3 testimonial cards are rendered with avatar, quote, name, and role

### Requirement: Partners

The template displays partner logos.

#### Scenario: Partner logos render

- **GIVEN** the partners section loads
- **THEN** 5 partner placeholder images are shown

### Requirement: Newsletter

The template includes a newsletter subscription form.

#### Scenario: Newsletter form renders

- **GIVEN** the newsletter section loads
- **THEN** a "Subscribe to our Newsletter" heading is shown
- **AND** an email input and subscribe button are present

#### Scenario: Newsletter validates email

- **GIVEN** a valid email is submitted
- **THEN** a success confirmation is displayed

#### Scenario: Newsletter rejects invalid email

- **GIVEN** an invalid email is submitted
- **THEN** an error message is displayed

### Requirement: Footer

The template ends with a dark footer containing links and contact information.

#### Scenario: Footer displays brand and links

- **GIVEN** the footer renders
- **THEN** brand name and description are shown
- **AND** "Customer Service" and "Delivery" link columns are shown

#### Scenario: Footer shows contact info

- **GIVEN** the footer renders
- **THEN** contact info (address, phone, email) is shown

#### Scenario: Footer links to Component Dock

- **GIVEN** the footer renders
- **THEN** a "More templates at Component Dock" link to https://www.componentdock.com/ is present

#### Scenario: Footer shows copyright

- **GIVEN** the footer renders
- **THEN** a copyright line with the current year is shown
