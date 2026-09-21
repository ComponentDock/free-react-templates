---
name: Strider
description: Fashion e-commerce shop landing page — recreation of ColorLib Karma
source: https://colorlib.com/wp/template/karma/
preview: https://preview.colorlib.com/theme/karma/
---

# Strider — Fashion E-Commerce Shop Template

## Purpose

Recreate the ColorLib Karma fashion/e-commerce shop template as a single-page
React application under the name "Strider". The template features a sticky
navbar, hero banner with product showcase, service features, category grid,
product listing, exclusive deals with countdown, brand logos, deals of the week,
and a multi-column footer with newsletter signup.

## Requirements

### Requirement: Sticky navigation bar

The navbar SHALL display the "Strider" logo and navigation links (Home, Shop,
Blog, Contact). It SHALL be sticky on scroll. A cart icon with badge count and
search icon SHALL be visible.

#### Scenario: Desktop navigation renders all links

- **WHEN** the app loads on desktop
- **THEN** the navbar shows "Strider" logo and links for Home, Shop, Blog, Contact
- **AND** cart and search buttons are visible

#### Scenario: Mobile menu toggles

- **WHEN** the mobile menu toggle is clicked
- **THEN** the mobile menu expands with navigation links
- **AND** clicking a link closes the menu

### Requirement: Hero banner with CTA

The hero SHALL display "Stride Into Style" heading with gradient accent,
supporting description text, and a "Shop Now" button with gradient styling.

#### Scenario: Hero renders heading and CTA

- **WHEN** the page loads
- **THEN** the hero shows the "Stride Into" heading with Style gradient text
- **AND** a description paragraph is visible
- **AND** a "Shop Now" button is present

#### Scenario: Hero image is displayed

- **WHEN** the page loads
- **THEN** a product showcase image is visible in the hero section

### Requirement: Service features row

The features section SHALL display four service items: Free Delivery, Return
Policy, 24/7 Support, and Secure Payment, each with an icon and description.

#### Scenario: All four features render

- **WHEN** the features section is visible
- **THEN** Free Delivery, Return Policy, 24/7 Support, and Secure Payment are shown
- **AND** each has an icon and description text

### Requirement: Category grid

The category section SHALL display five category cards in an asymmetric grid:
Men's Collection, Women's Collection, Sports Wear, Casual Wear, and Accessories.

#### Scenario: All five categories render

- **WHEN** the category grid is visible
- **THEN** all five category titles are displayed
- **AND** each has a category image

### Requirement: Latest products listing

The products section SHALL display "Latest Products" heading and four product
cards with image, title, sale price, original price (strikethrough), and
action buttons (add to bag, wishlist, compare, quick view).

#### Scenario: Products render with prices and actions

- **WHEN** the products section is visible
- **THEN** four product cards are displayed
- **AND** each shows title, sale price, and original price
- **AND** action buttons (bag, heart, compare, eye) are present

### Requirement: Exclusive deal section

The exclusive deal section SHALL display "Fashion Up To 50% Off" heading with
countdown items (Days, Hours, Mins), a "Shop Now" CTA, and a product image.

#### Scenario: Exclusive deal renders with countdown

- **WHEN** the exclusive deal section is visible
- **THEN** the heading and countdown labels are displayed
- **AND** the "Shop Now" button is present

### Requirement: Brand logos row

The brand section SHALL display five brand placeholder names in a row.

#### Scenario: All brand names render

- **WHEN** the brand section is visible
- **THEN** five brand names are displayed

### Requirement: Deals of the week

The deals section SHALL display "Deals of the Week" heading and nine small
product items with image, title, and price.

#### Scenario: Deals render with sidebar image

- **WHEN** the deals section is visible
- **THEN** nine deal items are displayed with name and price
- **AND** a sidebar category image is present

### Requirement: Footer with newsletter and social links

The footer SHALL display four columns: About Us (text), Newsletter (email
input + submit), Instagram Feed (8 placeholder images), and Follow Us (social
icons). The bottom bar SHALL show copyright with a "Component Dock" link to
https://www.componentdock.com/.

#### Scenario: Footer renders all sections

- **WHEN** the footer is visible
- **THEN** About Us, Newsletter, Instagram Feed, and Follow Us columns are present
- **AND** the email input and subscribe button are functional
- **AND** the copyright line contains a "Component Dock" link to componentdock.com
