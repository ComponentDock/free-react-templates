# Template: Placeboard (Directory / Travel Listing)

## Purpose

Recreation of the ColorLib "Listed" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** ColorLib Listed — https://colorlib.com/wp/template/listed/
- **Live preview:** https://preview.colorlib.com/theme/listed/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/listed-free-template-1.jpg
- **New name:** `placeboard` (apps/placeboard, package `@free-react-templates/placeboard`)
- **Deploy target:** placeboard.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token                | Value                           | Notes                                     |
| -------------------- | ------------------------------- | ----------------------------------------- |
| Body font            | `"Raleway", sans-serif`         | 400 weight, 16px, line-height 1.8         |
| Heading font         | `"Playfair Display", serif`     | 400/700/900 weights                       |
| Body text color      | `#6c757d`                       |                                           |
| Heading color        | `#000`                          |                                           |
| Page background      | `#fff`                          |                                           |
| Primary button bg    | `#007bff`                       | Bootstrap blue                            |
| Primary button hover | `#3395ff`                       |                                           |
| Button border-radius | `0`                             | Square corners throughout                 |
| Button height        | `55px` (search), default others |                                           |
| Hero overlay         | `rgba(0, 0, 0, 0.5)`            | Dark semi-transparent over parallax image |
| Feature card overlay | `#000` on `.img-bg:before`      | Dark overlay on destination image cards   |
| Section cover bg     | parallax image, cover           | 500px height                              |
| Footer background    | `#f2f2f2`                       | Light gray                                |
| Footer text color    | `#000`                          |                                           |
| Dropdown radius      | `4px`                           |                                           |
| Search input         | border-radius: 0, 55px height   |                                           |

## Section structure (from preview DOM, in order)

1. **Navbar** — transparent background over hero, white text links, "PLACEBOARD" brand uppercase letter-spaced, hamburger on mobile, dropdown for "Destination" (Places / Hotels / Restaurants), links: Home, Destination, Blog, About, Contact
2. **Hero** — full-viewport parallax background image, dark overlay, centered heading "Find your perfect place.", subtext, inline search form (text input + blue "Search" button)
3. **Feature Destinations** — 3 equal-width image cards side by side, each with dark overlay, location pin icon, destination name, "Visit This Place" link. Hover reveals more text.
4. **Top Destinations** — centered heading + subtext, 6-column grid of small destination cards (image + h2 + "Visit This Place"), hover opacity transition
5. **Section Cover (Promo)** — full-width parallax image, 500px tall, centered text "Get 10% off On Your Next Travel", subtext, black "Get Started" button
6. **Featured Destinations Carousel** — split layout: left side has heading "More Featured Destinations", subtext, prev/next arrows; right side has carousel of 3 destination image cards (reuses same img-bg pattern as Feature Destinations)
7. **Footer** — light gray background, 4 columns: About (text + address/phone/email with icons), Links (About, Destination, Contact), Latest Blog (3 entries with dates), Connect (social icons: Facebook, Twitter, Instagram). Bottom copyright line with "Made with Component Dock" link.

## Requirements

### Requirement: Navbar renders with transparent overlay on hero

Users SHALL see a transparent navbar positioned over the hero section with white text links and uppercase brand text.

#### Scenario: Navbar renders with transparent overlay on hero

- **WHEN** the page loads
- **THEN** the navbar is positioned over the hero section
- **AND** the navbar background is transparent
- **AND** all nav links are white text
- **AND** the brand text "PLACEBOARD" is uppercase with letter-spacing
- **AND** a hamburger menu button appears on mobile viewports
- **AND** clicking "Destination" shows a dropdown with Places, Hotels, Restaurants

### Requirement: Hero section displays with search form

Users SHALL see a full-viewport hero section with parallax background, heading, subtext, and an inline search form.

#### Scenario: Hero section displays with search form

- **WHEN** the page loads
- **THEN** a full-viewport hero section is visible
- **AND** a parallax background image is displayed with a dark overlay
- **AND** the heading reads "Find your perfect place."
- **AND** a subtext line appears below the heading
- **AND** an inline search form is shown with a text input and a blue "Search" button
- **AND** the search input has square corners

### Requirement: Feature Destinations shows 3 image cards

Users SHALL see 3 equal-width destination cards with dark overlays, location icons, names, and visit links.

#### Scenario: Feature Destinations shows 3 image cards

- **WHEN** the page loads
- **THEN** 3 equal-width destination cards appear in a row
- **AND** each card has a background image with a dark overlay
- **AND** each card shows a location icon, destination name, and "Visit This Place" text
- **AND** hovering a card reveals more content with a transition

### Requirement: Top Destinations shows 6-column grid

Users SHALL see a "Top Destinations" heading with 6 destination cards in a responsive grid.

#### Scenario: Top Destinations shows 6-column grid

- **WHEN** the page loads
- **THEN** a "Top Destinations" heading and subtext are centered
- **AND** 6 destination cards are displayed in a responsive grid (2-col on mobile, 3-col on tablet, 6-col on desktop)
- **AND** each card shows an image, destination name, and "Visit This Place"
- **AND** hovering a card reduces opacity to 0.7

### Requirement: Promo section cover displays parallax banner

Users SHALL see a full-width parallax promo banner with heading, subtext, and a black CTA button.

#### Scenario: Promo section cover displays parallax banner

- **WHEN** the page scrolls to the section cover
- **THEN** a full-width parallax background image is shown at 500px height
- **AND** the heading reads "Get 10% off On Your Next Travel"
- **AND** a subtext paragraph appears below
- **AND** a black "Get Started" button is centered below the text

### Requirement: Featured Destinations carousel renders

Users SHALL see a split layout with carousel navigation and destination image cards.

#### Scenario: Featured Destinations carousel renders

- **WHEN** the page scrolls to the featured destinations section
- **THEN** a left panel shows "More Featured Destinations" heading, subtext, and prev/next arrow buttons
- **AND** a right panel shows a horizontal carousel of destination image cards
- **AND** each carousel card uses the same dark-overlay image pattern as Feature Destinations
- **AND** prev/next buttons are blue (primary color) with arrow icons

### Requirement: Footer renders with 4 columns

Users SHALL see a light gray footer with 4 columns of content and a Component Dock copyright link.

#### Scenario: Footer renders with 4 columns

- **WHEN** the page scrolls to the footer
- **THEN** the footer has a light gray (#f2f2f2) background
- **AND** column 1 ("About") shows text, address with location icon, phone with telephone icon, email with email icon
- **AND** column 2 ("Links") shows About, Destination, Contact links
- **AND** column 3 ("Latest Blog") shows 3 blog entries with dates and titles
- **AND** column 4 ("Connect") shows Facebook, Twitter, Instagram social icons
- **AND** a copyright line at the bottom includes a link to Component Dock

### Requirement: Responsive behavior

Users SHALL see all sections properly stacked and responsive on mobile viewports.

#### Scenario: Responsive behavior

- **WHEN** the viewport is mobile (<768px)
- **THEN** the navbar collapses to a hamburger menu
- **AND** the hero search form stacks vertically
- **AND** the feature destinations stack to single column
- **AND** the top destinations grid reduces columns
- **AND** the footer columns stack vertically

### Requirement: Accessibility

Users SHALL experience accessible markup with proper ARIA attributes and keyboard navigation.

#### Scenario: Accessibility

- **WHEN** the page loads
- **THEN** all images have descriptive alt text
- **AND** the search input has an associated label (visually hidden)
- **AND** the hamburger button has an aria-label
- **AND** all interactive elements are keyboard-focusable
- **AND** the footer links use semantic list markup
