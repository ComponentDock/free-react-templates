# Cruiser — Skateboarding Personal Site Template

Recreation of ColorLib "Skater" (https://colorlib.com/wp/template/skater/)

## Purpose

A dark-themed skateboarding personal/portfolio site with hero carousel, services grid, performance showcase, team section, pricing tiers, FAQ, testimonials, blog, and contact form.

### Design Tokens

- **Primary brand color:** #ff8b00 (orange)
- **Surface dark:** #222222 (body background)
- **Surface:** #333333 (cards, footer)
- **Muted text:** #939393
- **Fonts:** Rubik (body), Oswald (headings, uppercase)
- **Button style:** outlined with border, rounded, hover fills

## Requirements

### Requirement: Page sections render in correct order

The template SHALL render 13 sections in order: Navbar, Hero, Services, Performance, Mentor, About, Team, Pricing, FAQ, Testimonials, Blog, Contact, Footer.

#### Scenario: All sections render on page load

- **GIVEN** a user loads the page
- **WHEN** they scroll through the entire page
- **THEN** all 13 sections are present and visible

### Requirement: Navbar provides navigation

The navbar SHALL display the brand "Cruiser" and links to Home, Services, About, Testimonials, Blog, and Contact.

#### Scenario: Navigation links scroll to sections

- **GIVEN** the navbar is rendered
- **WHEN** a user clicks a nav link
- **THEN** the page scrolls to the corresponding section

### Requirement: Hero carousel displays slides

The hero section SHALL display at least one slide with a heading, description, and CTA button.

#### Scenario: Hero slide is visible

- **GIVEN** the page loads
- **WHEN** the hero carousel renders
- **THEN** at least one slide with heading text is visible

### Requirement: Services grid shows 6 service cards

The services section SHALL display 6 cards in a 3-column grid, each with an icon, title, and description.

#### Scenario: All service cards render

- **GIVEN** the services section loads
- **WHEN** rendered
- **THEN** 6 service cards are displayed

### Requirement: Pricing section shows 3 tiers

The pricing section SHALL display Basic ($47/year), Premium ($200/year), and Professional ($750/year) tiers with feature lists.

#### Scenario: Pricing tiers display correct prices

- **GIVEN** the pricing section loads
- **WHEN** rendered
- **THEN** all 3 tiers display with their respective prices

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer contains Component Dock link

- **GIVEN** the footer renders
- **WHEN** a user inspects it
- **THEN** a link to componentdock.com is present with text mentioning "Component Dock"

### Requirement: Contact form is interactive

The contact form SHALL have first name, last name, email, and message fields.

#### Scenario: Contact form renders all fields

- **GIVEN** the contact section loads
- **WHEN** rendered
- **THEN** input fields for first name, last name, email, and a message textarea are present
