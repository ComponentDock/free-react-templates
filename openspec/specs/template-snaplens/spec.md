# Template: Snaplens

**Source:** ColorLib "Halo" (https://colorlib.com/wp/template/halo/)
**Preview:** https://preview.colorlib.com/theme/halo/
**New name:** Snaplens (`apps/snaplens`, `@free-react-templates/snaplens`)

## Purpose

Recreate the ColorLib "Halo" photography portfolio template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app. The original is a dark-themed photography portfolio with hero slider, intro section, portfolio grid, milestones counters, services, contact form, and footer. Snaplens faithfully reproduces the section order, layout, typography (Open Sans), and color palette (dark backgrounds, #222121 text, #cc1847 accent) while using placeholder images and inline SVG brand icons.

## Requirements

### Requirement: Navbar with logo, navigation links, search, and mobile toggle

The app SHALL render a transparent header with the logo "SNAPLENS", desktop navigation links (Home, About, Services, Portfolio, Blog, Contact), a search toggle button, and a hamburger menu toggle for mobile viewports.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page loads on a desktop viewport
- **THEN** the navbar displays the logo and all 6 navigation links

#### Scenario: Mobile menu toggles open and closed

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu becomes visible with all navigation links

#### Scenario: Search input toggles

- **WHEN** the user clicks the search icon button
- **THEN** a search input field appears in the navbar

### Requirement: Hero section with title and subtitle

The app SHALL render a full-viewport hero section with a dark background image overlay, the title "Snaplens", and the subtitle "We Create Awesome Photographies and More".

#### Scenario: Hero displays title and subtitle

- **WHEN** the page loads
- **THEN** the hero section shows the heading "Snaplens" and the subtitle text

### Requirement: Intro section with heading, text, CTA, and image

The app SHALL render a two-column intro section with "Amazing Studio" subtitle, "We Are So Creative" heading, descriptive paragraph, "Read More" CTA button, and a studio image.

#### Scenario: Intro section renders all elements

- **WHEN** the page loads
- **THEN** the intro section shows the heading, paragraph, CTA button, and studio image

### Requirement: Portfolio grid with 7 items and hover overlays

The app SHALL render a 7-item portfolio grid with masonry-like layout (varying widths), each item showing a background image with a hover overlay containing title and category.

#### Scenario: Portfolio renders 7 items

- **WHEN** the page loads
- **THEN** the portfolio section displays 7 clickable items with titles and categories

### Requirement: Milestones section with 4 stat counters

The app SHALL render a dark-background milestones section with 4 statistics: 48 Video Games, 7 Awards Won, 23K Pictures Taken, 19 Video Tutorials.

#### Scenario: Milestones shows all stats

- **WHEN** the page loads
- **THEN** the milestones section displays all 4 stat values and labels

### Requirement: Services section with 4 service cards

The app SHALL render a light-background services section with "Amazing Studio" subtitle, "See What We Offer" heading, and 4 service cards (Video Footages, Photo Shootings, Photo Albums, Original Ideas) in a 2-column grid.

#### Scenario: Services displays all 4 services

- **WHEN** the page loads
- **THEN** the services section shows all 4 service titles and descriptions

### Requirement: Contact section with info and form

The app SHALL render a dark-background contact section with "Stay in Touch" heading, contact information (phone, email, address), and a contact form with name, email, subject, message fields, and Send button.

#### Scenario: Contact form renders all fields

- **WHEN** the page loads
- **THEN** the contact section displays the heading, contact info, and form with all 4 input fields plus submit button

#### Scenario: Form submission is prevented

- **WHEN** the user clicks the Send button
- **THEN** the form does not reload the page

### Requirement: Footer with CTA, email, social icons, and Component Dock link

The app SHALL render a dark-background footer with "Let's Work Together!" heading, email address, 4 social icon links, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/ with target="_blank"
