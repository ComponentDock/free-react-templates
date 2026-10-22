# Roastery — Coffee Shop Template

Recreation of ColorLib "Coffee Blend" (https://colorlib.com/wp/template/coffee-blend/)

## Purpose

Roastery is a coffee shop template. It recreates the ColorLib **Coffee Blend** design (https://colorlib.com/wp/template/coffee-blend/, preview: https://preview.colorlib.com/theme/coffeeblend/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template. ⚠️ Prep note: this slug's demo is NOT on the slug-only preview path — the live preview URL above is the authoritative one.

## Overview

A dark-themed coffee shop landing page with animated statistics, a filterable
menu, testimonials, blog cards, and a newsletter footer.

## Design Tokens

- **Brand palette**: Caramel accent `#d4a574`, espresso brown `#3e2723`,
  cream `#f5f0eb`, charcoal `#1a1a1a`
- **Fonts**: Playfair Display (headings), Lato (body)
- **Dark mode**: class-based `.dark` toggle

## Sections

### Navbar

- Sticky header with coffee icon + "Roastery" brand
- Navigation links: Home, About, Menu, Blog, Contact
- "View Menu" CTA button
- Dark mode toggle (☾/☀)
- Mobile hamburger menu with close button

### Hero

- Full-width dark background with picsum.photos placeholder image
- Headline: "Crafted Coffee, Perfectly Blended"
- Subtext about roasting process
- Two CTAs: "Explore Menu" (primary) and "Our Story" (outlined)

### About

- Light section with "Our Story" label
- Heading: "A Passion for Perfect Coffee"
- Three feature cards: Hand-Roasted, Ethically Sourced, Fresh Daily
- Each with icon, title, and description

### Stats

- Dark section with 4 animated counters:
  - 15+ Years of Roasting
  - 50k+ Cups Served Monthly
  - 12 Origin Countries
  - 98% Happy Customers
- Counters animate from 0 to final value on mount

### Menu

- Light section with filterable coffee menu
- Category filters: All, Espresso, Brewed, Specialty
- 6 menu items with image, name, price, description
- Cards with hover zoom effect

### Testimonials

- Dark section with 3 testimonial cards
- Quote icon, customer quote, name, and role
- Glass-morphism card style with border hover effect

### Blog

- Light section with 3 blog post cards
- Image, date, title, excerpt, "Read More" link
- Cards with hover zoom effect

### Footer

- Dark footer with 3 columns: brand info, quick links, newsletter
- Contact info: phone and address
- Newsletter subscription form with validation
- Copyright line with Component Dock link

## Tests

35 tests across 9 test files covering all components.
100% lines/functions/branches/statements coverage.

## Requirements

### Feature: Navbar

- Sticky header with coffee icon + "Roastery" brand
- Navigation links: Home, About, Menu, Blog, Contact
- "View Menu" CTA button
- Dark mode toggle (☾/☀)
- Mobile hamburger menu with close button

#### Scenario: Navbar renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Navbar band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Hero

- Full-width dark background with picsum.photos placeholder image
- Headline: "Crafted Coffee, Perfectly Blended"
- Subtext about roasting process
- Two CTAs: "Explore Menu" (primary) and "Our Story" (outlined)

#### Scenario: Hero renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Hero band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: About

- Light section with "Our Story" label
- Heading: "A Passion for Perfect Coffee"
- Three feature cards: Hand-Roasted, Ethically Sourced, Fresh Daily
- Each with icon, title, and description

#### Scenario: About renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the About band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Stats

- Dark section with 4 animated counters:
  - 15+ Years of Roasting
  - 50k+ Cups Served Monthly
  - 12 Origin Countries
  - 98% Happy Customers
- Counters animate from 0 to final value on mount

#### Scenario: Stats renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Stats band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Menu

- Light section with filterable coffee menu
- Category filters: All, Espresso, Brewed, Specialty
- 6 menu items with image, name, price, description
- Cards with hover zoom effect

#### Scenario: Menu renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Menu band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Testimonials

- Dark section with 3 testimonial cards
- Quote icon, customer quote, name, and role
- Glass-morphism card style with border hover effect

#### Scenario: Testimonials renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Testimonials band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Blog

- Light section with 3 blog post cards
- Image, date, title, excerpt, "Read More" link
- Cards with hover zoom effect

#### Scenario: Blog renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Blog band SHALL be present at its documented position with the structure, copy and tokens named above

### Feature: Footer

- Dark footer with 3 columns: brand info, quick links, newsletter
- Contact info: phone and address
- Newsletter subscription form with validation
- Copyright line with Component Dock link

#### Scenario: Footer renders as documented

- **GIVEN** the recreation is rendered on a desktop viewport
- **THEN** the Footer band SHALL be present at its documented position with the structure, copy and tokens named above

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

## Verification checklist

- [ ] Footer credits Component Dock with a link to https://www.componentdock.com/
