---
name: Vitala
slug: medicare2
source: https://colorlib.com/wp/template/medicare2/
preview: https://preview.colorlib.com/theme/medicare2/
type: medical-landing
---

## Purpose

Vitala is a medical and healthcare landing page template. It recreates the ColorLib "Medicare2" design as a React 19 + Vite + Tailwind CSS 4 + TypeScript application with a blue gradient brand palette, Playfair Display headings, and Roboto body text.

## Requirements

### Requirement: Page loads with all sections

The page SHALL render all required sections in the correct order: TopBar, Navbar, Hero, Features, About, Departments, Counters, Team, Blog + Appointment, and Footer.

#### Scenario: All sections are visible

- **GIVEN** I visit the Vitala page
- **THEN** I should see the top bar with phone and email
- **AND** I should see the navbar with navigation links
- **AND** I should see the hero banner heading
- **AND** I should see 3 feature cards
- **AND** I should see the about section
- **AND** I should see 6 department icons
- **AND** I should see 4 counter stats
- **AND** I should see 4 team members
- **AND** I should see 3 blog posts
- **AND** I should see the appointment form
- **AND** I should see the footer with Component Dock link

### Requirement: Mobile navigation toggle

The navbar SHALL provide a hamburger menu toggle for mobile viewports that shows/hides the mobile navigation.

#### Scenario: Toggle mobile menu

- **GIVEN** I visit the Vitala page on mobile
- **WHEN** I click the hamburger menu button
- **THEN** the mobile navigation should be visible
- **WHEN** I click the close button
- **THEN** the mobile navigation should be hidden

### Requirement: Appointment form interaction

The appointment form SHALL accept patient details and allow form submission.

#### Scenario: Fill and submit appointment form

- **GIVEN** I see the appointment form
- **WHEN** I fill in the patient name field
- **AND** I fill in the email field
- **AND** I submit the form
- **THEN** the form should remain visible

### Requirement: Department icons are displayed

The departments section SHALL display 6 medical department icons with labels.

#### Scenario: Department names visible

- **GIVEN** I see the departments section
- **THEN** I should see Cardiology, Urology, Dental Care, Eye Care, Neurology, and Plastic Surgery

### Requirement: Footer contains Component Dock link

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link present

- **GIVEN** I see the footer
- **WHEN** I look at the copyright area
- **THEN** I should see a link to Component Dock with target="_blank"
