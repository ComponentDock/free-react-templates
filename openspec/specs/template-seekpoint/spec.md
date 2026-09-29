# Template: Seekpoint (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 18** — a minimal search page with a white header containing a centered search form (input + blue submit button) and a large gray content area below. An "X" close button appears in the top-right corner.

- **Source slug:** `search-form-bar-18`
- **Source:** https://colorlib.com/wp/template/search-form-bar-18/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-18/ — returned 404 at prep time
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-18.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Search Page

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable).

| Token                       | Value                                               |
| --------------------------- | --------------------------------------------------- |
| Font family                 | `'Poppins', sans-serif` (weight 400)                |
| Page background             | `#f5f5f5` (light gray, main content area)           |
| Header background           | `#ffffff` (white)                                   |
| Header height               | ~`80px`                                             |
| Header bottom border        | `1px solid #e0e0e0` (subtle gray line)              |
| Search bar max-width        | ~`600px`                                            |
| Search bar height           | ~`48px`                                             |
| Search input background     | `#ffffff` (white)                                   |
| Search input border         | `1px solid #d0d0d0` (light gray)                    |
| Search input border-radius  | `4px` (slight rounding)                             |
| Search input padding        | `12px 16px`                                         |
| Search input font-size      | `14px`                                              |
| Search input placeholder    | `#999999` (muted gray)                              |
| Search input text color     | `#333333` (dark gray)                               |
| Search button background    | `#4285f4` (Google blue)                             |
| Search button text          | `#ffffff` (white)                                   |
| Search button border-radius | `4px` (matches input)                               |
| Search button padding       | `12px 24px`                                         |
| Search button font-size     | `14px`                                              |
| Search button font-weight   | `500` (medium)                                      |
| Search button hover         | Slightly darker blue `#3367d6`                      |
| Close button position       | Top-right corner, `~20px` from edges                |
| Close button color          | `#999999` (gray)                                    |
| Close button hover color    | `#333333` (dark)                                    |
| Close button size           | `~24px`                                             |
| Content area padding        | Full-width, fills remaining viewport height          |

## Requirements

### Requirement: Header renders with white background and bottom border

The header SHALL display as a white (#ffffff) bar across the full width of the viewport with a subtle bottom border (#e0e0e0), centered vertically at approximately 80px height.

#### Scenario: Header renders correctly

- **GIVEN** the page loads
- **THEN** a white header bar spans the full viewport width
- **AND** the header has a subtle gray bottom border
- **AND** the search form is centered horizontally within the header

### Requirement: Search form displays input and button

The search form SHALL contain a text input field with "Search..." placeholder text and a blue "Search" submit button, laid out horizontally and centered in the header.

#### Scenario: Search form renders

- **GIVEN** the page loads
- **THEN** a text input with "Search..." placeholder is visible
- **AND** a blue "Search" button is positioned to the right of the input
- **AND** the form is centered horizontally in the header

#### Scenario: Typing in search input

- **GIVEN** the search form is displayed
- **WHEN** the user types into the search input
- **THEN** the input displays the typed text

#### Scenario: Submitting search form

- **GIVEN** the search form is displayed with text in the input
- **WHEN** the user clicks the Search button
- **THEN** the input is cleared

### Requirement: Close button displays in top-right corner

An "X" close button SHALL appear in the top-right corner of the page, colored gray (#999999) with a hover state that darkens to #333333.

#### Scenario: Close button renders in top-right

- **GIVEN** the page loads
- **THEN** an "X" close button appears in the top-right corner
- **AND** the button is gray (#999999) color

#### Scenario: Close button hover effect

- **GIVEN** the close button is visible
- **WHEN** the user hovers over the close button
- **THEN** the button color darkens to #333333

### Requirement: Content area displays gray background

Below the header, a large content area SHALL fill the remaining viewport height with a light gray (#f5f5f5) background.

#### Scenario: Content area renders

- **GIVEN** the page loads
- **THEN** below the header, a large area fills the remaining viewport
- **AND** the area has a light gray (#f5f5f5) background

### Requirement: Footer links to Component Dock

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **GIVEN** the page loads
- **THEN** a footer section is visible
- **AND** the footer contains a link labeled "Component Dock" pointing to https://www.componentdock.com/

### Requirement: Responsive layout

The search form and content area SHALL be responsive and display correctly on mobile, tablet, and desktop viewports.

#### Scenario: Mobile viewport

- **GIVEN** the viewport width is 375px
- **THEN** the search form remains centered and usable
- **AND** the input and button scale appropriately

#### Scenario: Desktop viewport

- **GIVEN** the viewport width is 1280px
- **THEN** the search form is centered with adequate max-width
- **AND** the layout does not overflow
