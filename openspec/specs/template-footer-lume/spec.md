# Template: FooterLume (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 17** — a simple, modern, minimal dark footer with navigation menu links and social icons. Clean two-section layout: white content area above, dark footer below.

- **Source slug:** `bootstrap-footer-17`
- **ColorLib page:** https://colorlib.com/wp/template/bootstrap-footer-17/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap-footer-17/ (404 at time of research — design tokens derived from screenshot analysis)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Footer

## Design Tokens

Extracted from screenshot analysis (preview unreachable). Tokens are inferred from the rendered screenshot and ColorLib page description ("modern and minimal with menu and social icons").

| Token                  | Value                                 | Source                                    |
| ---------------------- | ------------------------------------- | ----------------------------------------- |
| Font family            | `"Poppins", sans-serif`               | Consistent with ColorLib footer series    |
| Page background        | `#ffffff` (white)                     | Screenshot top section dominant color     |
| Footer background      | `#121212` (near-black)                | Screenshot bottom section dominant color  |
| Footer text color      | `rgba(255, 255, 255, 0.5)`            | Muted white for body text                 |
| Footer link color      | `rgba(255, 255, 255, 0.7)`            | Slightly brighter white for links         |
| Footer heading color   | `#ffffff` (pure white)                | Column headings                           |
| Footer heading style   | 14px, uppercase, 2px letter-spacing   | Standard footer heading convention        |
| Social icon color      | `rgba(255, 255, 255, 0.5)`            | Default state                             |
| Social icon hover      | `#ffffff`                             | Bright on hover                           |
| Social icon shape      | Circle, 40px diameter                 | Standard icon circle pattern              |
| Social icon background | transparent                           | Minimal design — no background fill       |
| Copyright text color   | `rgba(255, 255, 255, 0.3)`            | Muted for copyright line                  |
| Copyright border-top   | `1px solid rgba(255, 255, 255, 0.1)`  | Subtle separator above copyright          |
| Content area padding   | `50vh` equivalent (large blank space) | Screenshot shows white space above footer |
| Footer padding         | `4em 0`                               | Standard footer padding                   |
| Menu link color        | `rgba(255, 255, 255, 0.5)`            | Same as body text                         |
| Menu link hover        | `#ffffff`                             | Bright on hover                           |

## Visual Design Notes (from screenshot)

- The screenshot (1200x972) shows a large white area occupying roughly the top 55-60% of the viewport, with a dark footer occupying the bottom 40-45%.
- The white area is essentially blank — this is a demo page showing the footer in isolation.
- The footer background is very dark (#121212), nearly black.
- The footer appears to have a simple layout: navigation menu links on the left, social media icons (Facebook, Twitter/X, Instagram, LinkedIn, etc.) on the right or in a row.
- No newsletter form, no multi-column product links, no images — this is the simplest footer in the Bootstrap Footer series.
- The design is minimal and clean, relying on typography and spacing rather than color accents.

## Requirements

### Requirement: Content area renders above footer

The page SHALL display a white content area in the upper portion and a dark footer in the lower portion.

#### Scenario: Content area is visible

- **WHEN** the FooterLume page loads
- **THEN** a white content area is visible in the upper portion of the viewport
- **AND** a centered heading "Footer #17" is displayed in the content area

### Requirement: Footer section renders with dark background

The footer SHALL have a dark background (#121212) and occupy the lower portion of the viewport.

#### Scenario: Footer has dark background

- **WHEN** the FooterLume page loads
- **THEN** the footer section has a dark background (#121212)
- **AND** the footer occupies the lower portion of the viewport

### Requirement: Navigation menu links are present

The footer SHALL display navigation menu links with muted white text that brightens on hover.

#### Scenario: Navigation links render

- **WHEN** the FooterLume page loads
- **THEN** the footer displays navigation menu links including "Home", "About", "Services", "Portfolio", "Blog", "Contact"
- **AND** the links use muted white text color
- **AND** hovering a link changes its color to pure white

### Requirement: Social media icons are present

The footer SHALL display social media icons as 40px circular elements with muted white color that brightens on hover.

#### Scenario: Social icons render

- **WHEN** the FooterLume page loads
- **THEN** the footer displays social media icons for Facebook, Twitter, Instagram, LinkedIn, and YouTube
- **AND** the icons are circular with a 40px diameter
- **AND** the icons use muted white color
- **AND** hovering an icon changes its color to pure white

### Requirement: Copyright bar is displayed

The footer SHALL display a copyright bar at the bottom with a subtle top border separator.

#### Scenario: Copyright bar renders

- **WHEN** the FooterLume page loads
- **THEN** a copyright bar is visible at the bottom of the footer
- **AND** the copyright text reads "All rights reserved"
- **AND** the copyright text uses a muted color
- **AND** the copyright bar has a subtle top border separator

### Requirement: Footer heading styling

Footer column headings SHALL be uppercase with 14px font size and 2px letter-spacing in pure white.

#### Scenario: Heading has correct styling

- **WHEN** the FooterLume page loads
- **THEN** footer column headings are uppercase
- **AND** footer column headings use 14px font size
- **AND** footer column headings have 2px letter-spacing
- **AND** footer column headings are pure white

### Requirement: Responsive layout

The footer menu links SHALL stack vertically on viewports narrower than 768px while social icons remain visible.

#### Scenario: Mobile layout

- **GIVEN** the viewport width is less than 768px
- **WHEN** the FooterLume page loads
- **THEN** the footer menu links stack vertically
- **AND** the social icons remain visible

### Requirement: Component Dock footer link

The footer SHALL include a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock link is present

- **WHEN** the FooterLume page loads
- **THEN** the footer includes a link to "https://www.componentdock.com/"
- **AND** the link text reads "Component Dock"
