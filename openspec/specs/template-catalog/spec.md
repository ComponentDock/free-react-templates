# Spec: Catalog — Directory & Listing Template

## Purpose

Recreate ColorLib Directoryads as a React 19 + Vite + Tailwind CSS 4 + TypeScript
template named "Catalog". The original uses Nanum Gothic font, blue (#2f89fc) primary
color, and dark (#333) footer. No ColorLib assets are copied; images use
picsum.photos placeholders, icons use lucide-react, and brand icons use inline SVGs.

**Source:** https://colorlib.com/wp/template/directoryads/
**Preview:** https://preview.colorlib.com/theme/directoryads/

## Design Tokens

| Token       | Value        | Usage                                                                |
| ----------- | ------------ | -------------------------------------------------------------------- |
| primary-500 | #2f89fc      | Navbar bg, search button, trending tags, newsletter bg, hover states |
| ink         | #1a1a1a      | Headings, text                                                       |
| body        | #4d4d4d      | Body text                                                            |
| muted       | #737373      | Secondary text, footer text                                          |
| footer-bg   | #333333      | Footer background                                                    |
| star        | #ffc107      | Rating stars                                                         |
| card-bg     | #e9ecef      | Category count badges                                                |
| font        | Nanum Gothic | All text                                                             |

## Requirements

### Requirement: Page renders all nine sections in order

The application SHALL render Navbar, Hero, FeaturedAds, PopularCategories,
TrendingToday, Testimonials, Blog, Newsletter, and Footer in that order.

#### Scenario: All sections render on initial load

- **GIVEN** a user visits the Catalog page
- **THEN** the document title is "Catalog — Directory & Listing Template"
- **AND** the navbar with "Catalog" logo is visible
- **AND** the hero heading reads "Welcome To Catalog"
- **AND** the featured ads heading reads "Featured Ads"
- **AND** the popular categories heading reads "Popular Categories"
- **AND** the trending today heading reads "Trending Today"
- **AND** the testimonials heading reads "Testimonials"
- **AND** the blog heading reads "Our Blog"
- **AND** the newsletter heading reads "Newsletter"
- **AND** the footer renders with "Component Dock" link to https://www.componentdock.com/

### Requirement: Hero search form is interactive

The hero section SHALL contain a search form with keyword input, location input,
category dropdown, and search button. Submitting the form SHALL prevent default.

#### Scenario: Search form submits without navigation

- **GIVEN** a user is on the Catalog page
- **WHEN** the user types "laptop" in the keyword field
- **AND** selects "Electronics" from the category dropdown
- **AND** clicks the Search button
- **THEN** the form submits without page navigation

#### Scenario: Trending tags render

- **GIVEN** a user is on the Catalog page
- **THEN** trending tags "iPhone", "Cars", "Flowers", "House", and "Furniture" are visible

### Requirement: FeaturedAds displays listing cards

The FeaturedAds section SHALL display four listing cards with image, category,
title, address, star rating, and bookmark button.

#### Scenario: Four listing cards render

- **GIVEN** a user views the featured ads section
- **THEN** four listing cards render with titles "New Black Car", "Own New House",
  "Wooden Chair and Table", and "iPhone X Gray"
- **AND** each card has a bookmark button

### Requirement: PopularCategories displays category grid

The PopularCategories section SHALL display six category cards in a grid, each
with an icon, name, and count.

#### Scenario: Six categories render with counts

- **GIVEN** a user views the popular categories section
- **THEN** six categories render: Cars and Vehicles (1,921), Furniture (2,339),
  Real Estate (4,398), Books and Magazines (3,298), Electronics (2,932), Other (183)

### Requirement: TrendingToday displays listing cards in 2-column grid

The TrendingToday section SHALL display four listing cards in a 2-column grid.

#### Scenario: Trending cards render

- **GIVEN** a user views the trending today section
- **THEN** four listing cards render including "Own New House" and "New Black Car"

### Requirement: Testimonials carousel navigates correctly

The Testimonials section SHALL display a carousel with prev/next buttons and dot
indicators. Navigation SHALL wrap around at boundaries.

#### Scenario: Navigate forward through testimonials

- **GIVEN** a user views the testimonials section
- **WHEN** the user clicks "Next testimonial"
- **THEN** the testimonial author changes from "John Smith" to "Christine Aguilar"

#### Scenario: Navigate backward wraps to last

- **GIVEN** a user is on the first testimonial (John Smith)
- **WHEN** the user clicks "Previous testimonial"
- **THEN** the testimonial wraps to "Robert Spears" (the last testimonial)

#### Scenario: Navigate forward wraps to first

- **GIVEN** a user is on the last testimonial (Robert Spears)
- **WHEN** the user clicks "Next testimonial"
- **THEN** the testimonial wraps to "John Smith" (the first testimonial)

#### Scenario: Dot navigation works

- **GIVEN** a user views the testimonials section
- **WHEN** the user clicks dot indicator "Go to testimonial 3"
- **THEN** the testimonial shows "Robert Spears"

### Requirement: Blog section displays three posts

The Blog section SHALL display three blog post cards with image, title, author,
date, category, and excerpt, plus a "View All Posts" button.

#### Scenario: Three blog posts render

- **GIVEN** a user views the blog section
- **THEN** three posts render with titles "Many People Selling Online",
  "Local Business Growth Tips", and "Top Categories This Month"
- **AND** "View All Posts" button is visible

### Requirement: Newsletter form is interactive

The Newsletter section SHALL contain an email input and subscribe button.
Submitting the form SHALL prevent default.

#### Scenario: Newsletter form submits

- **GIVEN** a user types an email in the newsletter input
- **WHEN** the user clicks Subscribe
- **THEN** the form submits without page navigation

### Requirement: Footer links to Component Dock

The Footer SHALL link to https://www.componentdock.com/ with text "Component Dock"
and display a copyright notice with the current year.

#### Scenario: Footer copyright and attribution

- **GIVEN** a user scrolls to the footer
- **THEN** a "Component Dock" link points to https://www.componentdock.com/
- **AND** the copyright year matches the current year

### Requirement: Navbar mobile menu toggles

The Navbar SHALL have a mobile hamburger menu that opens/closes on toggle click.
Clicking a mobile nav link SHALL close the menu.

#### Scenario: Toggle mobile menu

- **GIVEN** a user clicks the "Toggle menu" button
- **THEN** the mobile menu opens showing all nav links

#### Scenario: Clicking a nav link closes the menu

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes
