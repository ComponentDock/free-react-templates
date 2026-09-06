---
name: FooterBloom
description: Recreation of ColorLib Bootstrap Footer 15 — green footer with 4-column layout, subscribe form, blog posts, product grid, Instagram gallery, and copyright bar
colorlib: https://colorlib.com/wp/template/bootstrap-footer-15/
preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-15/
---

## Purpose

FooterBloom recreates the ColorLib Bootstrap Footer 15 template as a React + Tailwind CSS component. It features a green (#68983b) footer with a 4-column layout containing brand info, blog posts, a product showcase, and an Instagram gallery, along with a subscribe form and copyright bar.

## Requirements

### Requirement: Footer renders with correct background and layout

The footer element SHALL use the semantic `<footer>` tag with `role="contentinfo"` and apply the green background color (#68983b).

#### Scenario: Footer renders correctly

- **WHEN** the Footer component is rendered
- **THEN** a `<footer>` element with `role="contentinfo"` is present
- **AND** it has the `bg-footer-bg` class applied

### Requirement: Top row displays logo and social icons

The footer SHALL display a top row with the brand name "FooterBloom" with subtitle "Free Templates" and social media icon links (Twitter, Facebook, Instagram) separated by a border-bottom.

#### Scenario: Top row renders with logo and social links

- **WHEN** the Footer component is rendered
- **THEN** the brand heading "FooterBloom" is visible in an H2 element
- **AND** the subtitle "Free Templates" is visible
- **AND** social links for Twitter, Facebook, and Instagram are rendered with circular border styling

### Requirement: Four-column grid displays content sections

The footer SHALL display a responsive 4-column grid with: brand contact info + subscribe form, Latest News blog cards, Best Sellers product card, and Instagram image grid.

#### Scenario: Brand column renders contact info and subscribe form

- **WHEN** the Footer component is rendered
- **THEN** the address "203 Fake St. Mountain View" is displayed
- **AND** the phone number "+2 392 3929 210" is displayed as a link
- **AND** the email "info@yourdomain.com" is displayed as a link
- **AND** a subscribe form with email input and submit button is present

#### Scenario: Latest News column renders blog post cards

- **WHEN** the Footer component is rendered
- **THEN** two blog post cards are displayed with title, date, author, and comment count

#### Scenario: Best Sellers column renders product with rating

- **WHEN** the Footer component is rendered
- **THEN** a product card with name "Grilled Beef with potatoes" is displayed
- **AND** 5 star icons are rendered for the product rating

#### Scenario: Instagram column renders image grid

- **WHEN** the Footer component is rendered
- **THEN** a 2x3 grid of 6 Instagram-style image links is displayed

### Requirement: Copyright bar displays at footer bottom

The footer SHALL display a copyright bar with the current year, "All rights reserved" text, and a "Made with ♥ by Component Dock" attribution link.

#### Scenario: Copyright bar renders correctly

- **WHEN** the Footer component is rendered
- **THEN** the copyright text with the current year is displayed
- **AND** a link to "Component Dock" with href "https://www.componentdock.com/" is present
- **AND** the link opens in a new tab with `target="_blank"` and `rel="noreferrer"`

### Requirement: Subscribe form handles submission

The subscribe form SHALL prevent default form submission when the submit button is clicked.

#### Scenario: Form submission is prevented

- **WHEN** the user clicks the Subscribe button
- **THEN** the form's default submission is prevented
