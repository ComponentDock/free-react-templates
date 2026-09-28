# Template: Palatable (Food / Recipe Blog)

## Purpose

Recreation of ColorLib's **Delicious** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source slug:** `delicious`
- **Preview URL:** https://preview.colorlib.com/theme/delicious/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Food / Recipe Blog

## Requirements

### Requirement: Top header bar

The template SHALL display a top header bar with breaking news ticker and social media icons.

#### Scenario: Top header displays correctly

- **GIVEN** the user loads the page
- **THEN** a top header bar is visible above the navbar
- **AND** it contains a breaking news ticker on the left
- **AND** social media icons are on the right

### Requirement: Sticky navbar

The template SHALL display a sticky navbar with logo, navigation links, and search icon.

#### Scenario: Navbar displays correctly

- **GIVEN** the user loads the page
- **THEN** a sticky navbar is visible with a logo on the left
- **AND** navigation links include Home, Pages, Mega Menu, Recipes, 4 Vegans, Contact
- **AND** a search icon button is visible on the right

### Requirement: Hero carousel

The template SHALL display a hero carousel with 3 slides that auto-rotate.

#### Scenario: Hero carousel shows slides

- **GIVEN** the user views the hero section
- **THEN** a full-width image carousel is displayed with auto-rotation
- **AND** each slide has a background image with dark overlay
- **AND** each slide shows a heading, descriptive text, and a CTA button
- **AND** carousel navigation dots and arrows allow manual control

### Requirement: Top categories section

The template SHALL display 2 featured category cards in a 2-column layout.

#### Scenario: Top categories section shows featured items

- **GIVEN** the user scrolls to the top categories section
- **THEN** 2 featured category cards are displayed
- **AND** each card has a background image with overlaid text and CTA button

### Requirement: Best recipes grid

The template SHALL display 6 recipe cards in a 3-column responsive grid.

#### Scenario: Best recipes grid displays items

- **GIVEN** the user scrolls to the best recipes section
- **THEN** a heading is shown
- **AND** 6 recipe cards are displayed in a 3-column responsive grid
- **AND** each card shows a recipe image, title, and star rating

### Requirement: CTA banner

The template SHALL display a full-width CTA banner with background image and dark overlay.

#### Scenario: CTA banner section displays

- **GIVEN** the user scrolls to the CTA section
- **THEN** a full-width banner with a background image and dark overlay is shown
- **AND** heading and call-to-action content are centered

### Requirement: Small recipes list

The template SHALL display 9 recipe items in a 2-column layout with thumbnails.

#### Scenario: Small recipes list shows items

- **GIVEN** the user scrolls to the small recipes section
- **THEN** a list of 9 recipe items is displayed in a 2-column layout
- **AND** each item shows a thumbnail, title, and meta info

### Requirement: Quote newsletter ad section

The template SHALL display a 3-column layout with quote, newsletter form, and ad.

#### Scenario: Quote newsletter and ad section displays

- **GIVEN** the user scrolls to the quote-subscribe-ads section
- **THEN** a 3-column layout is shown
- **AND** the left column contains a quote with author and date
- **AND** the middle column contains a newsletter signup form
- **AND** the right column contains a promotional ad image

### Requirement: Instagram gallery

The template SHALL display 6 images in a horizontal row with hover overlay.

#### Scenario: Instagram gallery shows images

- **GIVEN** the user scrolls to the Instagram section
- **THEN** a heading is shown
- **AND** 6 images are displayed in a horizontal row
- **AND** each image has an Instagram icon overlay on hover

### Requirement: Footer

The template SHALL display a footer with social icons, logo, and Component Dock attribution.

#### Scenario: Footer displays correctly

- **GIVEN** the user scrolls to the footer
- **THEN** social media icons are displayed
- **AND** a logo is centered
- **AND** a copyright line with Component Dock link is shown

### Requirement: Responsive behavior

The template SHALL be responsive on mobile viewports.

#### Scenario: Responsive behavior on mobile

- **GIVEN** the user views the page on a mobile viewport
- **THEN** the navbar collapses to a hamburger menu
- **AND** sections stack to single column layout
- **AND** the Instagram gallery wraps to multiple rows
