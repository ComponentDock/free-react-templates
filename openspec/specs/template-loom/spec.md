---
name: template-loom
description: Newsletter subscription footer template (recreation of ColorLib Bootstrap Footer 10)
gherkin: true
---

## Purpose

Recreation of ColorLib Bootstrap Footer 10 (https://colorlib.com/wp/template/bootstrap-footer-10/) — a simple, responsive newsletter subscription footer with dark background, email subscribe form, multi-column navigation, and social icons.

## Design tokens

| Token          | Value   | Notes                                     |
| -------------- | ------- | ----------------------------------------- |
| footer-bg      | #1a1a2e | Deep navy / dark blue-purple background   |
| footer-text    | #b0b0c0 | Light gray for body text                  |
| footer-heading | #ffffff | White for headings and brand              |
| footer-link    | #8888a0 | Muted blue-gray for nav links             |
| footer-border  | #2a2a40 | Subtle dark border for separators         |
| cta-teal       | #0ea5e9 | Teal/sky-blue accent for subscribe button |
| cta-teal-hover | #0284c7 | Darker teal on hover                      |
| font-family    | Poppins | Google Fonts, weights 300–700             |

## Requirements

### Requirement: Footer renders with semantic markup

Users SHALL see a `<footer>` element with `role="contentinfo"` and a dark background.

#### Scenario: Footer element exists

- **WHEN** the page loads
- **THEN** a `<footer>` element with `role="contentinfo"` is visible
- **AND** it has a dark background class

### Requirement: Newsletter subscription form

Users SHALL see a newsletter subscription form with email input and submit button.

#### Scenario: Newsletter form renders

- **WHEN** the footer is rendered
- **THEN** a "Stay Updated" heading is visible
- **AND** an email input with label "Email address" is present with `required` attribute and `type="email"`
- **AND** a "Subscribe" button with `type="submit"` is present

#### Scenario: Form submission clears input

- **WHEN** the user types a valid email address into the email input
- **AND** clicks the "Subscribe" button
- **THEN** the email input value is cleared

### Requirement: Navigation columns

Users SHALL see Company and Resources navigation columns with appropriate links.

#### Scenario: Company navigation

- **WHEN** the footer is rendered
- **THEN** a "Company" heading is visible
- **AND** navigation links for About, Services, Portfolio, Pricing, and Contact are present

#### Scenario: Resources navigation

- **WHEN** the footer is rendered
- **THEN** a "Resources" heading is visible
- **AND** navigation links for Blog, Documentation, Support, FAQ, and Terms are present

### Requirement: Social media icons

Users SHALL see social media icon links that open in new tabs.

#### Scenario: Social links render

- **WHEN** the footer is rendered
- **THEN** social links for Instagram, Twitter, Facebook, LinkedIn, and YouTube are present
- **AND** each opens in a new tab with `target="_blank"` and `rel="noreferrer"`
- **AND** each has an `aria-label` matching its platform name

### Requirement: Brand identity

Users SHALL see the brand name and description.

#### Scenario: Brand renders

- **WHEN** the footer is rendered
- **THEN** a brand link "Loom" is visible
- **AND** a brand description text is present

### Requirement: Copyright bar

Users SHALL see a copyright notice with Component Dock attribution.

#### Scenario: Copyright renders

- **WHEN** the footer is rendered
- **THEN** copyright text with the current year and "Loom" is visible
- **AND** a "Component Dock" link points to https://www.componentdock.com/

### Requirement: Responsive layout

Users SHALL see a responsive layout that adapts to screen size.

#### Scenario: Desktop layout

- **WHEN** the footer is rendered on a desktop viewport
- **THEN** a three-column grid is displayed

#### Scenario: Mobile layout

- **WHEN** the footer is rendered on a mobile viewport
- **THEN** columns stack vertically
