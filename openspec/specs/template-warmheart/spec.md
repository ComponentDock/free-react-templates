# Template: Warmheart (Nonprofit Charity Landing)

## Purpose

Recreation of ColorLib "Kindity" charity template.

- Source slug: `kindity`
- Source URL: https://colorlib.com/wp/template/kindity/
- Preview URL: https://preview.colorlib.com/theme/kindity/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- Category: Nonprofit / Charity / Donation

## Requirements

### Requirement: Navbar with navigation and donate CTA

The template SHALL render a navigation bar with brand name, seven nav links, and a "Donate Now" button.

#### Scenario: Navbar renders brand and links

- **WHEN** the page loads
- **THEN** the brand name "Warmheart" is displayed
- **AND** seven navigation links are rendered (Home, Gallery, About, Events, Pages, Blog, Contact)
- **AND** a "Donate Now" button with href="#donate" is rendered

#### Scenario: Mobile menu toggle works

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile menu opens showing all nav links
- **AND** the button aria-label changes to "Close menu"

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open and a nav link is clicked
- **THEN** the mobile menu closes
- **AND** the hamburger button shows "Open menu" again

### Requirement: Hero section with stats

The template SHALL render a hero section with headline, description, CTA buttons, and three stat boxes.

#### Scenario: Hero renders headline and CTAs

- **WHEN** the page loads
- **THEN** the headline "Help for Victims Affected by Flood" is displayed
- **AND** "Donate Now" and "View Activity" buttons are rendered

#### Scenario: Hero renders stat boxes

- **WHEN** the page loads
- **THEN** three stat boxes are displayed with labels (Total Donation, Total Volunteers, Future Plans) and values ($2.5M, 3,268, $7.5M)

### Requirement: Welcome section with stats

The template SHALL render a welcome section with heading and three stat cards.

#### Scenario: Welcome section renders

- **WHEN** the page loads
- **THEN** "Welcome to Warmheart" heading is displayed
- **AND** three stat cards show values $2.5M, 1,465, 3,965

### Requirement: Major Causes section with cause cards

The template SHALL render three cause cards with progress bars and donate buttons.

#### Scenario: Causes section renders cards

- **WHEN** the page loads
- **THEN** "Our Major Causes" heading is displayed
- **AND** three cause cards are rendered (Education for All, Clean Water Initiative, Medical Aid Relief)
- **AND** each card has a progress bar with correct aria-valuenow

#### Scenario: Causes donate buttons

- **WHEN** the page loads
- **THEN** each cause card has a "Donate Here" button with href="#donate"

### Requirement: Key Features section

The template SHALL render three feature cards with icons and descriptions.

#### Scenario: Features section renders

- **WHEN** the page loads
- **THEN** "Our Key Features" heading is displayed
- **AND** three feature cards are rendered (Sponsorship, Donate Amount, Become a Volunteer)

### Requirement: Upcoming Events section

The template SHALL render three event cards with dates and join buttons.

#### Scenario: Events section renders

- **WHEN** the page loads
- **THEN** "Upcoming Events" heading is displayed
- **AND** three event cards are rendered with dates and "Join Now" buttons

### Requirement: Testimonials section

The template SHALL render three testimonial cards with donor information.

#### Scenario: Testimonials section renders

- **WHEN** the page loads
- **THEN** "Testimonial from our Donors" heading is displayed
- **AND** three testimonial cards are rendered with names and roles

### Requirement: Footer with Component Dock link

The template SHALL render a footer with about section, navigation links, newsletter, and Component Dock branding.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a link to "https://www.componentdock.com/" with text "Component Dock" is rendered with target="_blank"

#### Scenario: Footer renders navigation and newsletter

- **WHEN** the page loads
- **THEN** navigation links (Home, About, Services, Portfolio, Team, Blog, Contact) are rendered
- **AND** a newsletter section with email input is rendered
