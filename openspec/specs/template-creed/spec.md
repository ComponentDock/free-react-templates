# Creed — Church Website Template

> Recreation of ColorLib "Faith 2" (https://colorlib.com/wp/template/faith-2/)

## Overview

A church website template featuring a warm tan brand palette, Poppins font,
and sections for events, sermons, donations, and blog posts.

## Design Tokens

- **Brand color**: #ac8a74 (warm tan/brown)
- **Dark header**: #1b1b1b
- **Font**: Poppins (Google Fonts)
- **Body font-size**: 14px base
- **Section backgrounds**: white, light gray (#eff4f6)

## Sections (in order)

1. **Navbar** — Top bar (dark bg, "Next Big Event" countdown) + main nav
   with logo, menu items (Home, Ministries, Sermons, Blog, Contact),
   and "Send Donations" CTA button (brand color bg)
2. **Hero** — Full-width carousel/slider with event images, date badges,
   headline "Let God guide your path", subtitle, and "Sunday Worship: 10:30 AM"
3. **CTA** — Warm-toned call-to-action with "Visitors Info" button
4. **About** — Scripture quote heading, descriptive text, image
5. **Activities** — Two-column layout: upcoming events list (date, title,
   time, location) + latest sermons (title, author, date)
6. **Donate** — Carousel of donation cause cards with image, title,
   description, and "Donate" button
7. **Blog** — Latest news cards (date, title, excerpt, "Read More" link)
8. **Footer** — 4-column: site info, contact details, useful links,
   "Why Choose Us" text, Component Dock link

## Requirements

### Gherkin Scenarios

```gherkin
Feature: Creed church website template

  Scenario: Page loads with all sections
    Given I visit the Creed template
    Then I should see the navbar with logo and navigation links
    And I should see the hero section with event information
    And I should see the "Visitors Info" CTA section
    And I should see the about section with scripture quote
    And I should see the church activities section
    And I should see the donate section
    And I should see the blog section
    And I should see the footer with contact info

  Scenario: Navigation contains required links
    Given I visit the Creed template
    Then the navbar should contain links for Home, Ministries, Sermons, Blog, Contact
    And there should be a "Send Donations" button

  Scenario: Hero section displays event info
    Given I visit the Creed template
    Then the hero should show a headline about faith
    And it should show a worship time

  Scenario: Footer links to Component Dock
    Given I visit the Creed template
    Then the footer should contain a link to https://www.componentdock.com/
    And the link text should mention "Component Dock"

  Scenario: Document title is set
    Given I visit the Creed template
    Then the document title should contain "Creed"
```
