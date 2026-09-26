---
name: Cassini
description: Photography studio template with hero slider, offcanvas menu, and dark theme
source: https://colorlib.com/wp/template/cassi/
preview: https://preview.colorlib.com/theme/cassi/
status: in-progress
---

# Cassini — Photography Studio Template

Recreation of ColorLib "Cassi" (https://colorlib.com/wp/template/cassi/)

## Purpose

Cassini is a photography studio website template featuring a full-screen hero image slider with category tags, an offcanvas hamburger menu, a minimal transparent header, and a dark footer with social links and Component Dock attribution. It recreates the ColorLib "Cassi" design faithfully using React, Tailwind CSS, and TypeScript.

## Requirements

### Requirement: Preloader

The template SHALL display a full-screen dark overlay with a spinner animation on page load that hides after content loads.

#### Scenario: Preloader displays on load

- **WHEN** the page is loading
- **THEN** a full-screen dark overlay with a spinning loader is visible

#### Scenario: Preloader hides after timeout

- **WHEN** the page has finished loading (1.5 seconds)
- **THEN** the preloader overlay disappears

### Requirement: Header

The template SHALL display a minimal header with logo text on the left and a hamburger menu icon on the right.

#### Scenario: Header renders logo and hamburger

- **WHEN** the page loads
- **THEN** the header shows the "Cassini" logo text and a menu icon button

#### Scenario: Hamburger opens offcanvas menu

- **WHEN** the user clicks the hamburger menu icon
- **THEN** the offcanvas menu slides in from the right

### Requirement: Offcanvas menu

The template SHALL display a full-screen offcanvas menu with navigation links, social links, and a copyright notice.

#### Scenario: Menu shows all nav links

- **WHEN** the offcanvas menu is open
- **THEN** navigation links "Home", "Gallery", "Blog", "About", "Contact" are visible

#### Scenario: Menu shows social links

- **WHEN** the offcanvas menu is open
- **THEN** social links "Facebook", "Twitter", "Instagram" are visible

#### Scenario: Menu shows copyright with Component Dock

- **WHEN** the offcanvas menu is open
- **THEN** a copyright notice with a "Component Dock" link to https://www.componentdock.com/ is present

#### Scenario: Menu closes on close button click

- **WHEN** the offcanvas menu is open and the user clicks the close button
- **THEN** the offcanvas menu closes

### Requirement: Hero slider

The template SHALL display a full-width hero section with a background image slider, category tag, heading, description, and CTA button.

#### Scenario: Hero renders initial slide

- **WHEN** the page loads
- **THEN** a full-screen hero section shows a background image with dark overlay, the category tag "Nature", heading "Photo Studio", description text, and a "See More" button

#### Scenario: Slider advances to next slide

- **WHEN** the user clicks the next arrow
- **THEN** the background image changes to the next slide

#### Scenario: Slider goes to previous slide

- **WHEN** the user clicks the previous arrow
- **THEN** the background image changes to the previous slide

#### Scenario: Dot indicators navigate slides

- **WHEN** the user clicks a dot indicator
- **THEN** the slider navigates to the corresponding slide

### Requirement: Footer

The template SHALL display a dark footer with social text links and a copyright notice with Component Dock attribution.

#### Scenario: Footer renders social links

- **WHEN** the footer is in the viewport
- **THEN** social text links "Facebook", "Twitter", "Instagram" are visible

#### Scenario: Footer links to Component Dock

- **WHEN** the footer is in the viewport
- **THEN** a copyright notice with a "Component Dock" link to https://www.componentdock.com/ is present
