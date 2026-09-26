# Spec: Smithy

## Purpose

Smithy is a personal portfolio and developer landing page template, recreating the design of ColorLib "Satner" (https://colorlib.com/wp/template/satner/) under a new original name. It showcases a developer's profile with sections for introduction, services, portfolio work, testimonials, and contact.

## Requirements

### Requirement: Page renders all sections in correct order

The Smithy page SHALL display the following sections in order: Navbar, Hero, About, Brands, Services, Portfolio, Testimonials, Newsletter, Footer.

#### Scenario: All sections are visible on page load

- **WHEN** I visit the Smithy page
- **THEN** I see the Navbar at the top
- **AND** I see the Hero section with greeting and CTA buttons
- **AND** I see the About section with image and text
- **AND** I see the Brands section with logos and stats
- **AND** I see the Services section with 4 service cards
- **AND** I see the Portfolio section with filterable grid
- **AND** I see the Testimonials section with client quotes
- **AND** I see the Newsletter section with email form
- **AND** I see the Footer with social links

### Requirement: Navbar provides navigation

The Navbar SHALL display the "Smithy" logo and navigation links for Home, About, Services, Portfolio, and Contact. It SHALL include a mobile hamburger toggle.

#### Scenario: Desktop navigation links are present

- **WHEN** I view the Navbar on desktop
- **THEN** I see links for Home, About, Services, Portfolio, Contact

#### Scenario: Mobile menu toggles

- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation menu opens
- **AND** clicking it again closes the menu

### Requirement: Hero section displays developer profile

The Hero section SHALL display a greeting subtitle, the developer name, role text, and two CTA buttons ("Hire Me" and "Get CV").

#### Scenario: Hero content is visible

- **WHEN** I view the Hero section
- **THEN** I see the "Hello" subtitle
- **AND** I see the name "Alex Smith"
- **AND** I see the role "Senior Web Developer"
- **AND** I see a "Hire Me" button
- **AND** I see a "Get CV" button

### Requirement: Portfolio section supports filtering

The Portfolio SHALL display filter tabs (all, popular, latest, following, upcoming) that filter the portfolio items.

#### Scenario: Filter tabs filter portfolio items

- **WHEN** I click the "popular" filter tab
- **THEN** only portfolio items tagged "popular" are displayed

#### Scenario: All tab shows all items

- **WHEN** I click the "all" filter tab after filtering
- **THEN** all portfolio items are displayed

### Requirement: Newsletter form accepts email input

The Newsletter section SHALL display an email input and a "Get Started" button.

#### Scenario: Email input is functional

- **WHEN** I type an email address in the newsletter input
- **THEN** the input field shows the typed email
- **AND** submitting clears the input

### Requirement: Footer links to Component Dock

The Footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link is present

- **WHEN** I view the Footer
- **THEN** I see a link to componentdock.com
