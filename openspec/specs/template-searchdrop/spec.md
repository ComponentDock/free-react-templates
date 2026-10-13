# Template: Searchdrop (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 17** (slug: `search-form-bar-17`).
Preview: https://preview.colorlib.com/theme/search-form-bar-17/ (unreachable at time of prep; screenshot analyzed).
ColorLib page: https://colorlib.com/wp/template/search-form-bar-17/
Description: "A free dropdown search form snippet that works without a hitch on mobile and desktop."

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the screenshot (preview DOM unavailable):

| Token | Value | Source |
|---|---|---|
| Brand color (primary) | `#4A90D9` (medium blue) | "Brand" text, "Search" button background |
| Background (page) | `#FFFFFF` (white) | Main content area |
| Background (search bar area) | `#F5F5F5` (light gray) | Search bar strip |
| Text color | `#333333` (dark gray) | Nav links, body text |
| Brand text color | `#4A90D9` (medium blue) | "Brand" logo text |
| Search button background | `#4A90D9` (medium blue) | Rounded "Search" button |
| Search button text | `#FFFFFF` (white) | Button label |
| Search input background | `#FFFFFF` (white) | Input field |
| Search input border | `#E0E0E0` (light gray) | Input field border |
| Font family | System sans-serif (likely Roboto or similar) | Based on screenshot rendering |
| Button border-radius | ~20px (pill shape) | Rounded "Search" button |
| Close button | `#999999` (gray) | X icon top-right of search bar |

## Visual design (from screenshot)

The template is a **dropdown search form bar** — a minimal, single-purpose snippet:

1. **Navbar**: White background, horizontal layout. Left side: "Brand" text in blue. Right side: "Home", "About", "Contact" nav links in dark gray, plus a search icon (magnifying glass).
2. **Search bar strip**: Light gray (#F5F5F5) horizontal bar that appears below the navbar when the search icon is toggled. Contains a white text input with "Search..." placeholder, a blue rounded "Search" button, and an X close icon on the far right.
3. **Body area**: White background with centered placeholder text: "Please click the search icon toggle button top right."
4. **Overall aesthetic**: Clean, minimal, utility-focused. No hero image, no sections beyond the navbar and search bar. The design is essentially a reusable search component demo.

## Requirements

### Feature: Searchdrop — Dropdown Search Form Bar

#### Scenario: Navbar renders with brand and navigation

- **GIVEN** the user loads the page
- **THEN** a horizontal navbar is visible at the top
- **AND** the brand name "Searchdrop" (or similar) is displayed on the left in blue
- **AND** navigation links "Home", "About", "Contact" are displayed on the right
- **AND** a search icon (magnifying glass) is visible in the navbar right area

#### Scenario: Search bar toggles open on search icon click

- **GIVEN** the page has loaded
- **WHEN** the user clicks the search icon in the navbar
- **THEN** a search bar strip appears below the navbar
- **AND** the search bar has a light gray background
- **AND** the search bar contains a text input with placeholder "Search..."
- **AND** the search bar contains a blue rounded "Search" button
- **AND** a close (X) icon is visible on the right side of the search bar

#### Scenario: Search bar closes on close icon click

- **GIVEN** the search bar is open/visible
- **WHEN** the user clicks the close (X) icon
- **THEN** the search bar strip is hidden/collapsed

#### Scenario: Search bar closes on pressing Escape key

- **GIVEN** the search bar is open/visible
- **WHEN** the user presses the Escape key
- **THEN** the search bar strip is hidden/collapsed

#### Scenario: Search bar closes when clicking outside

- **GIVEN** the search bar is open/visible
- **WHEN** the user clicks outside the search bar area
- **THEN** the search bar strip is hidden/collapsed

#### Scenario: Search form submits on button click

- **GIVEN** the search bar is open
- **AND** the user has typed text into the search input
- **WHEN** the user clicks the "Search" button
- **THEN** the search action is triggered (form submit or callback)

#### Scenario: Search form submits on Enter key

- **GIVEN** the search bar is open
- **AND** the user has typed text into the search input
- **WHEN** the user presses Enter in the search input
- **THEN** the search action is triggered

#### Scenario: Mobile responsive layout

- **GIVEN** the viewport width is less than 768px
- **WHEN** the page loads
- **THEN** the navbar stacks or collapses appropriately
- **AND** the search bar adapts to the smaller width
- **AND** the search input and button remain usable on mobile

#### Scenario: Accessibility

- **GIVEN** the page has loaded
- **THEN** the search input has an accessible label or placeholder
- **AND** the search icon button has an aria-label
- **AND** the close button has an aria-label
- **AND** focus is trapped within the search bar when open

## Verification checklist

- [ ] Navbar renders with brand name on the left
- [ ] Navigation links (Home, About, Contact) render on the right
- [ ] Search icon is clickable and toggles the search bar
- [ ] Search bar appears below navbar with gray background
- [ ] Search input has "Search..." placeholder
- [ ] Search button is blue, rounded (pill shape)
- [ ] Close (X) icon closes the search bar
- [ ] Escape key closes the search bar
- [ ] Clicking outside closes the search bar
- [ ] Search form submits on button click
- [ ] Search form submits on Enter key
- [ ] Mobile responsive at <768px
- [ ] Accessible: aria-labels on icon buttons
- [ ] Focus management when search bar opens/closes
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
