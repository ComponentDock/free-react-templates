---
name: huddle
description: >
  Huddle is a conference/event landing page template — a React 19 + Tailwind CSS 4
  recreation of the ColorLib "Confe" template.
template: conference-event
tags: [conference, event, landing, speakers, countdown]
---

# Huddle — Conference Event Landing Template

## Purpose

Huddle recreates the ColorLib "Confe" conference template under a new name.
It is a single-page conference/event landing site with sticky navbar, hero with
background image overlay, countdown, speakers grid, features, sponsors, event
cards, quick-contact bar, and dark footer with Component Dock branding.

**Source:** Recreation of ColorLib "Confe" (https://colorlib.com/wp/template/confe/)

## Requirements

### Requirement: Page renders all major sections

The page SHALL display navbar, hero, about, image split, speakers, features, sponsors, events, quick contact, and footer sections in that order.

#### Scenario: All sections present

- **WHEN** a user visits the Huddle page
- **THEN** the navbar with logo "huddle." and navigation links is visible
- **AND** the hero section shows heading, date, and CTA button
- **AND** the about section shows countdown timer
- **AND** the speakers section shows 6 speaker cards
- **AND** the features section shows 3 feature items
- **AND** the sponsors section shows 6 sponsor placeholders
- **AND** the events section shows 3 event cards
- **AND** the quick contact bar shows Where/When/Email
- **AND** the footer contains a link to Component Dock

### Requirement: Navbar is sticky and responsive

The navbar SHALL be fixed at the top, white background, with mobile hamburger menu.

#### Scenario: Desktop navigation

- **WHEN** a user views the page on desktop
- **THEN** all navigation links are visible without a hamburger menu

#### Scenario: Mobile navigation

- **WHEN** a user views the page on mobile
- **THEN** a hamburger menu button is shown
- **AND** clicking it reveals the navigation links

### Requirement: Countdown timer displays and updates

The about section SHALL show a countdown to the conference date with days, hours, minutes, seconds that update every second.

#### Scenario: Countdown displays values

- **WHEN** a user views the about section
- **THEN** four countdown blocks are shown (Days, Hours, Minutes, Seconds)
- **AND** each block displays a numeric value

### Requirement: Footer links to Component Dock

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer branding

- **WHEN** a user scrolls to the footer
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link text mentions "Component Dock"
