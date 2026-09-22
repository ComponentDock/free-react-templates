# Spec: Iron

## Purpose

Iron is a free React fitness and gym landing page template. It recreates a gym/fitness design with a hero banner, feature cards, BMI calculator, course listings, schedule table, trainer profiles, pricing plans, partner logos, a CTA section, and a footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Requirements

### Requirement: Page renders all sections in order

The template SHALL display all sections in the following order: Header, Hero, Offer, BmiCalculator, TopCourses, Features, Schedule, Team, Pricing, BrandLogos, Cta, Footer.

#### Scenario: All sections visible on load

- **WHEN** the user visits the Iron template
- **THEN** all 12 sections are rendered in the page
- **AND** the page title is "Iron — Fitness & Gym Landing Template"

### Requirement: Header navigation

The header SHALL be sticky with a top bar (tagline, logo, phone) and horizontal navigation links.

#### Scenario: Desktop navigation links

- **WHEN** the user views the page on desktop
- **THEN** the nav contains links for Home, We Offer, Top Course, Schedule, Trainer, Plan

#### Scenario: Mobile hamburger toggle

- **WHEN** the user clicks the hamburger menu button on mobile
- **THEN** the mobile navigation becomes visible
- **AND** the button aria-expanded attribute toggles to true

### Requirement: BMI Calculator interaction

The BMI calculator SHALL accept height (inches) and weight (lbs) inputs and compute BMI using the formula (weight / (height^2)) * 703.

#### Scenario: Valid inputs produce a result

- **WHEN** the user enters height 70 and weight 170
- **AND** clicks "Calculate Your BMI"
- **THEN** the result displays "Your BMI is 24.4"

#### Scenario: Invalid inputs produce no result

- **WHEN** the user enters height 0 and weight 170
- **AND** clicks "Calculate Your BMI"
- **THEN** no BMI result is displayed

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link present

- **WHEN** the user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ exists
- **AND** the link opens in a new tab

### Requirement: Newsletter form

The footer newsletter form SHALL accept an email and reset on submission.

#### Scenario: Newsletter submit resets email

- **WHEN** the user enters an email and clicks Subscribe
- **THEN** the email input is cleared
