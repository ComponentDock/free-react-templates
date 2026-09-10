## Purpose

Veloce is a free automotive service landing page template that recreates the
ColorLib Automotive design (https://colorlib.com/wp/template/automotive/) under
a new name. It provides a professional auto garage landing page with hero,
services grid, product cards, testimonials, stats, and a news section.

## Requirements

### Requirement: Full page renders all sections

The template SHALL render all 10 sections in order: Navbar (top bar + main nav),
Hero, Services, ChooseUs, Products, Testimonial, Stats, LatestNews, Footer.

#### Scenario: All sections are present

- **WHEN** I visit the Veloce template
- **THEN** I see the navbar with phone number and navigation links
- **AND** I see a hero section with "Welcome To" heading
- **AND** I see 4 service cards under "What We Do?"
- **AND** I see the choose-us section with a checklist
- **AND** I see 4 product cards under "Our Products"
- **AND** I see a testimonial quote section
- **AND** I see 4 stat counters under "About Our Statistics"
- **AND** I see 3 news cards under "Latest News"
- **AND** I see the footer with Component Dock link

### Requirement: Navigation is interactive

The navbar SHALL display links for Home, Services, Shop, Pages, and Blog, and
SHALL support mobile menu toggle.

#### Scenario: Nav links are clickable

- **WHEN** I visit the Veloce template
- **THEN** all nav links (Home, Services, Shop, Pages, Blog) are clickable
- **AND** the hero CTA button "Our Services" is clickable

#### Scenario: Mobile menu toggles

- **WHEN** I click the mobile menu toggle button
- **THEN** the mobile navigation menu appears

### Requirement: Product cards show hover actions

Each product card SHALL display heart, eye, and exchange icon buttons on hover.

#### Scenario: Product hover actions exist

- **WHEN** I visit the Veloce template
- **THEN** each product card has Wishlist, View, and Compare buttons
- **AND** each product shows a price and Add To Cart button

### Requirement: Testimonial carousel navigates

The testimonial section SHALL allow switching between 3 testimonials via dot buttons.

#### Scenario: Dot navigation changes testimonial

- **WHEN** I click testimonial dot 2
- **THEN** the displayed quote changes to the second testimonial

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock attribution

- **WHEN** I visit the Veloce template footer
- **THEN** I see a link to componentdock.com labeled "Component Dock"
- **AND** the link opens in a new tab
