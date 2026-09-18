# Template: Placeboard (Directory / Travel Listing)

## Purpose

Recreation of the ColorLib "Listed" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** ColorLib Listed — https://colorlib.com/wp/template/listed/
- **Live preview:** https://preview.colorlib.com/theme/listed/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/listed-free-template-1.jpg
- **New name:** `placeboard` (apps/placeboard, package `@free-react-templates/placeboard`)
- **Deploy target:** placeboard.free.componentdock.com

## Design tokens (extracted from preview CSS)

| Token               | Value                          | Notes                                      |
| ------------------- | ------------------------------ | ------------------------------------------ |
| Body font           | `"Raleway", sans-serif`       | 400 weight, 16px, line-height 1.8          |
| Heading font        | `"Playfair Display", serif`   | 400/700/900 weights                        |
| Body text color     | `#6c757d`                      |                                            |
| Heading color       | `#000`                         |                                            |
| Page background     | `#fff`                         |                                            |
| Primary button bg   | `#007bff`                      | Bootstrap blue                             |
| Primary button hover| `#3395ff`                      |                                            |
| Button border-radius| `0`                            | Square corners throughout                  |
| Button height       | `55px` (search), default others|                                            |
| Hero overlay        | `rgba(0, 0, 0, 0.5)`          | Dark semi-transparent over parallax image  |
| Feature card overlay| `#000` on `.img-bg:before`     | Dark overlay on destination image cards    |
| Section cover bg    | parallax image, cover          | 500px height                               |
| Footer background   | `#f2f2f2`                      | Light gray                                 |
| Footer text color   | `#000`                         |                                            |
| Dropdown radius     | `4px`                          |                                            |
| Search input        | border-radius: 0, 55px height  |                                            |

## Section structure (from preview DOM, in order)

1. **Navbar** — transparent background over hero, white text links, "PLACEBOARD" brand uppercase letter-spaced, hamburger on mobile, dropdown for "Destination" (Places / Hotels / Restaurants), links: Home, Destination, Blog, About, Contact
2. **Hero** — full-viewport parallax background image, dark overlay, centered heading "Find your perfect place.", subtext, inline search form (text input + blue "Search" button)
3. **Feature Destinations** — 3 equal-width image cards side by side, each with dark overlay, location pin icon, destination name, "Visit This Place" link. Hover reveals more text.
4. **Top Destinations** — centered heading + subtext, 6-column grid of small destination cards (image + h2 + "Visit This Place"), hover opacity transition
5. **Section Cover (Promo)** — full-width parallax image, 500px tall, centered text "Get 10% off On Your Next Travel", subtext, black "Get Started" button
6. **Featured Destinations Carousel** — split layout: left side has heading "More Featured Destinations", subtext, prev/next arrows; right side has Owl Carousel of 3 destination image cards (reuses same img-bg pattern as Feature Destinations)
7. **Footer** — light gray background, 4 columns: About (text + address/phone/email with ionicons), Links (About, Destination, Contact), Latest Blog (3 entries with dates), Connect (social icons: Facebook, Twitter, Instagram). Bottom copyright line with "Made with Component Dock" link.

## Gherkin requirements

### Feature: Placeboard — Travel Directory Template

#### Scenario: Navbar renders with transparent overlay on hero
- Given the page loads
- Then the navbar is positioned absolute over the hero section
- And the navbar background is transparent
- And all nav links are white text
- And the brand text "PLACEBOARD" is uppercase with letter-spacing
- And a hamburger menu button appears on mobile viewports
- And clicking "Destination" shows a dropdown with Places, Hotels, Restaurants

#### Scenario: Hero section displays with search form
- Given the page loads
- Then a full-viewport hero section is visible
- And a parallax background image is displayed with a dark overlay
- And the heading reads "Find your perfect place."
- And a subtext line appears below the heading
- And an inline search form is shown with a text input and a blue "Search" button
- And the search input has square corners and 55px height

#### Scenario: Feature Destinations shows 3 image cards
- Given the page loads
- Then 3 equal-width destination cards appear in a row
- And each card has a background image with a dark overlay
- And each card shows a location icon, destination name, and "Visit This Place" text
- And hovering a card reveals more content with a transition

#### Scenario: Top Destinations shows 6-column grid
- Given the page loads
- Then a "Top Destinations" heading and subtext are centered
- And 6 destination cards are displayed in a responsive grid (2-col on mobile, 3-col on tablet, 6-col on desktop)
- And each card shows an image, destination name, and "Visit This Place"
- And hovering a card reduces opacity to 0.7

#### Scenario: Promo section cover displays parallax banner
- Given the page scrolls to the section cover
- Then a full-width parallax background image is shown at 500px height
- And the heading reads "Get 10% off On Your Next Travel"
- And a subtext paragraph appears below
- And a black "Get Started" button is centered below the text

#### Scenario: Featured Destinations carousel renders
- Given the page scrolls to the featured destinations section
- Then a left panel shows "More Featured Destinations" heading, subtext, and prev/next arrow buttons
- And a right panel shows a horizontal carousel of destination image cards
- And each carousel card uses the same dark-overlay image pattern as Feature Destinations
- And prev/next buttons are blue (primary color) with arrow icons

#### Scenario: Footer renders with 4 columns
- Given the page scrolls to the footer
- Then the footer has a light gray (#f2f2f2) background
- And column 1 ("About") shows text, address with location icon, phone with telephone icon, email with email icon
- And column 2 ("Links") shows About, Destination, Contact links
- And column 3 ("Latest Blog") shows 3 blog entries with dates and titles
- And column 4 ("Connect") shows Facebook, Twitter, Instagram social icons
- And a copyright line at the bottom includes a link to Component Dock

#### Scenario: Responsive behavior
- Given the viewport is mobile (<768px)
- Then the navbar collapses to a hamburger menu
- And the hero search form stacks vertically
- And the feature destinations stack to single column
- And the top destinations grid reduces columns
- And the footer columns stack vertically

#### Scenario: Accessibility
- Given the page loads
- Then all images have descriptive alt text
- And the search input has an associated label (visually hidden)
- And the hamburger button has an aria-label
- And all interactive elements are keyboard-focusable
- And the footer links use semantic list markup

## Verification checklist

- [ ] Navbar: transparent over hero, white links, mobile hamburger, dropdown works
- [ ] Hero: full-viewport, parallax bg, dark overlay, heading + subtext + search form
- [ ] Feature Destinations: 3 image cards, dark overlay, icon + name + link
- [ ] Top Destinations: heading + subtext, 6-column grid, hover opacity
- [ ] Promo Cover: parallax bg, 500px height, heading + subtext + black button
- [ ] Carousel: split layout, prev/next arrows, image cards in carousel
- [ ] Footer: 4 columns, icons, blog entries, social links, Component Dock link
- [ ] Responsive: all sections stack/grid properly on mobile
- [ ] Accessibility: alt text, labels, aria, keyboard navigation
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Package name: @free-react-templates/placeboard
- [ ] CNAME: placeboard.free.componentdock.com
- [ ] Footer links to https://www.componentdock.com/
