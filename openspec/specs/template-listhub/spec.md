# Spec: Listhub — Directory Listing Template

> Recreation of ColorLib "Listio" (https://colorlib.com/wp/template/listio/)
> Preview: https://preview.colorlib.com/theme/listio/

## Purpose

Listhub is a directory listing template that helps users discover and connect with local businesses. It features a search-driven hero, category browsing, featured listing cards, a how-it-works section, testimonials, newsletter signup, and blog posts.

## Requirements

### Requirement: Page renders all major sections

The template SHALL render a complete directory listing page with navbar, hero, categories, feature block, featured listings, how-it-works, testimonials, newsletter, blog posts, and footer.

#### Scenario: All sections are present on page load

- **WHEN** the user visits the Listhub template
- **THEN** the navbar is visible with search, logo, and navigation links
- **AND** the hero section shows "Find your Destination" heading
- **AND** the categories section shows category cards (Hotel, Restaurant, Cafe, Shopping Mall, Beauty & Spa, Fitness)
- **AND** the feature block shows "Best Café & Bars"
- **AND** the featured listings grid shows 6 listing cards
- **AND** the how-it-works section shows 3 numbered steps
- **AND** the testimonials section shows 3 testimonials
- **AND** the newsletter section has an email input and subscribe button
- **AND** the blog posts section shows 2 blog cards
- **AND** the footer links to componentdock.com

### Requirement: Navbar is interactive

The navbar SHALL provide navigation links, a search input, and a mobile menu toggle.

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the mobile menu toggle button
- **THEN** the mobile navigation menu is displayed
- **AND** the toggle button changes to "Close menu"

#### Scenario: Pages dropdown toggles

- **WHEN** the user clicks the "Pages" dropdown button
- **THEN** the dropdown shows sub-links (Blog, Blog Details, Elements, Contact, Details)
- **AND** when clicked again, the dropdown closes

### Requirement: Hero search form works

The hero section SHALL provide a search form with text input, category dropdown, city dropdown, and submit button.

#### Scenario: Search form accepts input

- **WHEN** the user types in the search input
- **THEN** the input reflects the typed text

#### Scenario: Category and city dropdowns have options

- **WHEN** the user views the search form
- **THEN** the category dropdown has options (Hotel, Restaurant, Cafe, Shopping Mall, Beauty & Spa)
- **AND** the city dropdown has options (New York, Los Angeles, Chicago, Houston, Miami)

### Requirement: Featured listings display correctly

The featured listings section SHALL display 6 listing cards in a 3-column grid.

#### Scenario: Listing cards show all required elements

- **WHEN** the featured listings section renders
- **THEN** there are 6 listing cards
- **AND** each card has an image, title, and description
- **AND** each card has price and status badges (Open Now or Closed)
- **AND** each card has a category label and heart icon

### Requirement: Newsletter accepts email

The newsletter section SHALL accept email input and have a working form.

#### Scenario: Newsletter form accepts email

- **WHEN** the user types an email address in the newsletter input
- **THEN** the email input reflects the typed text
- **AND** the form can be submitted without navigation

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link is present

- **WHEN** the footer renders
- **THEN** there is a link to componentdock.com
- **AND** the link text mentions "Component Dock"
- **AND** the link opens in a new tab

## Design Tokens

| Token         | Value        | Usage                       |
| ------------- | ------------ | --------------------------- |
| brand         | #FF377B      | Primary pink/magenta accent |
| brand-hover   | #e62e6d      | Hover state                 |
| heading-color | #1f2b7b      | Navy blue headings          |
| text-dark     | #222222      | Body text                   |
| text-muted    | #777777      | Secondary text              |
| bg-light      | #f9f9ff      | Light lavender background   |
| bg-subtle     | #f0e9ff      | Very light purple           |
| border-light  | #eaeaea      | Border/divider              |
| font-heading  | Josefin Sans | Section headings            |
| font-body     | Josefin Sans | Body text                   |
| button-radius | 3px          | Subtle rounded buttons      |
