# Template: Pressline

## Purpose

Pressline is a publishing company landing page template, recreating the ColorLib "Publishing Company" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript app. It serves book publishers, authors, and literary businesses with sections for categories, new releases, testimonials, pricing, and contact.

## Provenance

- **Original:** ColorLib "Publishing Company"
- **Slug:** publishing-company
- **Preview URL:** https://preview.colorlib.com/theme/publishingcompany/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/publishingcompany-free-template.jpg
- **Note:** Preview reachable at `/theme/publishingcompany/`. Fallback to HTML DOM + CSS extraction for tokens.

## Design Tokens

| Token            | Value                             | Usage                                         |
| ---------------- | --------------------------------- | --------------------------------------------- |
| Brand / accent   | `#95adbe` (steel blue-gray)       | Links, hover states, button bg, nav underline |
| Dark background  | `#1a1a1a`                         | Navbar, hero overlay                          |
| Light background | `#f8f9fa`                         | Counter section, testimonials                 |
| Body font        | Roboto (300/400/500/700)          | Body text                                     |
| Display font     | Lora (400/500/600/700)            | Headings, hero title                          |
| Primary button   | `#95adbe` border + bg, white text | CTAs                                          |
| Text dark        | `#1a1a1a`                         | Headings                                      |
| Text muted       | `#6c757d`                         | Subtext, captions                             |

## Requirements

### Requirement: Page renders all sections in correct order

The template SHALL render the following sections top-to-bottom: TopBar, Navbar, Hero, Categories, Counter, AboutAuthors, BooksNewRelease, Testimonials, Packages, Contact, Blog, Footer.

#### Scenario: All sections are visible on page load

- **WHEN** the app loads
- **THEN** the TopBar is visible with contact info
- **AND** the Navbar shows the Pressline brand
- **AND** the Hero section has a heading and CTA buttons
- **AND** 4 category cards are displayed
- **AND** the counter section shows 4 stats
- **AND** the about section is visible
- **AND** book cards are displayed in the new releases section
- **AND** testimonials are shown
- **AND** pricing packages are visible
- **AND** the contact form is rendered
- **AND** 3 blog post cards are displayed
- **AND** the footer contains the Component Dock link

### Requirement: Navigation links scroll to sections

The Navbar SHALL provide links that scroll to corresponding page sections.

#### Scenario: Clicking a nav link scrolls to the target section

- **WHEN** the user clicks a navigation link (e.g. "About", "Categories")
- **THEN** the page scrolls to the corresponding section

### Requirement: Mobile navbar toggle

The Navbar SHALL show a hamburger menu on mobile that toggles the mobile nav.

#### Scenario: Toggling the mobile menu

- **GIVEN** the viewport is mobile-sized
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens
- **AND** clicking a nav link closes the menu

### Requirement: Contact form clears on submission

The Contact section SHALL have a form that clears all fields on submit.

#### Scenario: Submitting the contact form

- **GIVEN** the user fills in name, email, subject, and message
- **WHEN** they submit the form
- **THEN** all form fields are cleared

### Requirement: Footer links to Component Dock

The Footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link is present

- **WHEN** the user scrolls to the footer
- **THEN** a link to "Component Dock" is visible with href https://www.componentdock.com/
