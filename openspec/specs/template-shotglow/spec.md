# Spec — Shotglow

> Recreation of ColorLib Shotgear
> (https://colorlib.com/wp/template/shotgear/)

## Purpose

Shotglow is a photography studio portfolio template with a bold, dark-hero aesthetic. It targets freelance photographers and creative studios who need a single-page landing with gallery, services, testimonials, pricing, and blog sections.

## Requirements

### Requirement: Page renders all sections

Users SHALL see the full template with navbar, hero, about, gallery, services, testimonials, pricing, blog, and footer sections when visiting the Shotglow page.

#### Scenario: All sections are present

- **WHEN** a user visits Shotglow
- **THEN** the navbar is visible with logo and navigation links
- **AND** the hero section displays "Creative Studio" heading
- **AND** the about section is present
- **AND** the gallery section is present with filter buttons
- **AND** the services section displays service cards
- **AND** the testimonials section is present
- **AND** the pricing section displays pricing cards
- **AND** the blog section displays blog posts
- **AND** the footer contains a Component Dock link

### Requirement: Gallery category filtering

Users SHALL be able to filter gallery items by category (All, Wedding, Fashion, Portrait, Magazine).

#### Scenario: Filtering by category

- **WHEN** a user clicks the "Fashion" filter button
- **THEN** only gallery items in the Fashion category are visible
- **AND** the "Fashion" button is highlighted as active

#### Scenario: Showing all items

- **WHEN** a user clicks the "All" filter button
- **THEN** all gallery items are visible regardless of category

### Requirement: Mobile navigation toggle

Users SHALL be able to toggle the mobile navigation menu on small viewports.

#### Scenario: Toggle open and close

- **WHEN** a user clicks the hamburger menu button
- **THEN** the navigation menu expands
- **AND** the button aria-expanded attribute is true
- **WHEN** the user clicks the hamburger button again
- **THEN** the navigation menu collapses

### Requirement: Footer contains Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** a user scrolls to the footer
- **THEN** a link to "https://www.componentdock.com/" is visible
- **AND** the link opens in a new tab
- **AND** the link text mentions "Component Dock"

### Requirement: Testimonials carousel

Users SHALL be able to navigate between testimonials using previous/next buttons.

#### Scenario: Next testimonial

- **WHEN** a user clicks the "Next testimonial" button
- **THEN** the next testimonial is displayed

#### Scenario: Previous testimonial

- **WHEN** a user clicks the "Previous testimonial" button
- **THEN** the previous testimonial is displayed
