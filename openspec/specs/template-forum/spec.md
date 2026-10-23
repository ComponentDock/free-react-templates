---
name: forum
description: >
  Forum is a conference/event landing page template — a React 19 + Tailwind CSS 4
  recreation of the ColorLib "Conference" template.
template: conference-event
tags: [conference, event, landing, speakers, pricing, schedule]
---

# Template: Forum (Conference Event Landing)

## Purpose

Forum recreates the ColorLib "Conference" conference template under a new name.
It is a single-page conference/event landing site with sticky navbar, hero with
background image overlay, video/about sections, speakers carousel, schedule table,
pricing cards, brand logos, call-to-action, and dark footer with Component Dock branding.

**Source:** Recreation of ColorLib "Conference" (https://colorlib.com/wp/template/conference/)

## Requirements

### Requirement: Page renders all major sections

The page SHALL display navbar, hero, video about, dark about, video section, speakers, schedule, pricing, brand logos, CTA, and footer sections in that order.

#### Scenario: All sections present

- **WHEN** a user visits the Forum page
- **THEN** the navbar with logo "forum" and navigation links is visible
- **AND** the hero section shows heading "Year End Conference" and date
- **AND** the video about section shows "We Telecast our Coffee Making Live"
- **AND** the dark about section shows "24/7 Support system"
- **AND** the video section shows "Brand new app to blow your mind"
- **AND** the speakers section shows speaker cards
- **AND** the schedule section shows a session table
- **AND** the pricing section shows 4 pricing cards
- **AND** the brand logos section shows 5 logo placeholders
- **AND** the CTA section shows "Huge Transaction in last Week"
- **AND** the footer contains a link to Component Dock

### Requirement: Navbar is sticky and responsive

The navbar SHALL be fixed at the top with transparent-to-dark scroll effect and mobile hamburger menu.

#### Scenario: Desktop navigation

- **WHEN** a user views the page on desktop
- **THEN** all navigation links (Home, Videos, Speakers, Schedule) are visible
- **AND** a "Buy Ticket" button is shown

#### Scenario: Mobile navigation

- **WHEN** a user views the page on mobile
- **THEN** a hamburger menu button is shown
- **AND** clicking it reveals the navigation links

### Requirement: Hero displays conference information

The hero section SHALL show the conference title, date, and location over a dark overlay background.

#### Scenario: Hero content

- **WHEN** a user views the hero section
- **THEN** the heading reads "Year End Conference"
- **AND** the date "05th - 09th February, 2025" is visible
- **AND** the location "56/8, Dhanmondi, Dhaka - 1205" is visible

### Requirement: Speakers section shows speaker cards

The speakers section SHALL display speaker cards with image, name, description, contact info, and social links.

#### Scenario: Speaker cards rendered

- **WHEN** a user views the speakers section
- **THEN** at least 2 speaker cards are rendered
- **AND** each card has a name, description, phone, and email

### Requirement: Schedule table displays sessions

The schedule section SHALL show a table with session, speaker, venue, and time columns.

#### Scenario: Schedule table content

- **WHEN** a user views the schedule section
- **THEN** the table has rows with session details
- **AND** each row has sl, session, speaker, venue, and time

### Requirement: Pricing shows 4 tier cards

The pricing section SHALL display 4 pricing cards (Economy, Business, Premium, Exclusive) with feature lists and buy buttons.

#### Scenario: Pricing cards rendered

- **WHEN** a user views the pricing section
- **THEN** 4 pricing cards are rendered
- **AND** each card has a "Buy Now" button

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer branding

- **WHEN** a user views the footer
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text includes "Component Dock"

### Requirement: No ColorLib references in source

The app source files SHALL NOT contain the string "colorlib" in any form.

#### Scenario: Clean source

- **WHEN** searching all files in apps/forum/
- **THEN** no file contains the string "colorlib"

## Verification checklist

- [ ] `npm run verify:app -- forum` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 9 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page renders all major sections
      - Hero displays conference information
      - Speakers section shows speaker cards
      - Schedule table displays sessions
      - Pricing shows 4 tier cards
      - Footer links to Component Dock
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [x] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [x] Footer links https://www.componentdock.com/ ("Component Dock").
