# Spec: Prelude — Coming Soon Page Template

> Recreation of ColorLib "01 Comming Soon" (https://colorlib.com/wp/template/01-comming-soon/)

## Purpose

A split-screen coming soon page template — dark left panel with countdown timer
and email signup, right panel with background image. The preview at
https://preview.colorlib.com/theme/01-comming-soon/ was unavailable; design
based on the ColorLib page description ("split-screen design") and the screenshot.

Design tokens:

- Dark navy background `#1a1a2e` on left panel
- White text for headings, gray `#9ca3af` for body text
- Poppins font (Google Fonts)
- White pill button for email submit
- Picsum.photos seeded placeholder for right panel image
- Assets are NOT copied — placeholder images + Tailwind utilities

Prelude lives in `apps/prelude` and uses shared components from `packages/ui`.

## Requirements

### Requirement: Split-screen hero layout

The template SHALL render a full-viewport-height split-screen layout with a dark
content panel on the left (50% width) and a background image on the right (50% width).

#### Scenario: Hero layout renders split panels

- **WHEN** the page loads
- **THEN** the heading "Coming Soon" is visible
- **AND** a subheading describing the upcoming launch is visible
- **AND** the right panel displays a background image

### Requirement: Countdown timer

The template SHALL display a live countdown timer with days, hours, minutes, and
seconds until a target date.

#### Scenario: Countdown displays four time units

- **WHEN** the page loads
- **THEN** the labels "Days", "Hours", "Minutes", and "Seconds" are visible
- **AND** each unit displays a numeric value

#### Scenario: Countdown updates every second

- **WHEN** one second elapses
- **THEN** the countdown values update

### Requirement: Email signup form

The template SHALL provide an email signup form with an input field and a
"Notify Me" submit button.

#### Scenario: Email form renders

- **WHEN** the page loads
- **THEN** an email input field with placeholder "Enter your email" is visible
- **AND** a "Notify Me" button is visible

#### Scenario: Successful email submission

- **WHEN** the user enters a valid email and clicks "Notify Me"
- **THEN** a success message "Thank you" is displayed
- **AND** the email input is no longer visible

### Requirement: Footer with Component Dock link

The template SHALL display a footer linking to https://www.componentdock.com/.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer displays a link to componentdock.com
- **AND** the link text mentions "Component Dock"
