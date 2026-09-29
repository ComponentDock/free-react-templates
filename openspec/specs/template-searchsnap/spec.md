# Template: SearchSnap (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 14** — a full-screen overlay search form with a single centered pill-shaped search bar and an "X" close button in the top-right corner. Minimalist, clean design focused entirely on the search input.

- **Source slug:** `search-form-bar-14`
- **Source:** https://colorlib.com/wp/template/search-form-bar-14/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-14/ — returned 404 at prep time
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-14.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Overlay Search

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable).

| Token                       | Value                                               |
| --------------------------- | --------------------------------------------------- |
| Font family                 | `'Poppins', sans-serif` (weight 400)                |
| Page background             | `#f8f9fa` (very light gray)                         |
| Overlay                     | Full-viewport, centered vertically and horizontally |
| Search bar max-width        | ~`500px`                                            |
| Search bar height           | ~`56px`                                             |
| Search bar border           | `2px solid #d0e3f7` (light blue/periwinkle)         |
| Search bar border-radius    | `28px` (fully rounded pill shape)                   |
| Search bar background       | `#ffffff` (white)                                   |
| Input placeholder color     | `#999999` (muted gray)                              |
| Input text color            | `#333333` (dark gray)                               |
| Search button background    | `#4a8cf7` (medium blue)                             |
| Search button text          | `#ffffff` (white)                                   |
| Search button border-radius | `24px` (pill shape)                                 |
| Search button padding       | ~`10px 24px`                                        |
| Search button font-size     | ~`14px`                                             |
| Close button position       | Top-right corner, ~`20px` from edges                |
| Close button color          | `#999999` (gray)                                    |
| Close button hover color    | `#333333` (dark)                                    |
| Close button size           | ~`24px`                                             |

## Requirements

### Requirement: Full-screen overlay renders with light gray background

The overlay SHALL fill the entire viewport with a light gray (#f8f9fa) background and center content vertically and horizontally.

#### Scenario: Overlay renders full viewport

- **GIVEN** the page loads
- **THEN** the viewport is filled with a light gray background (#f8f9fa)
- **AND** no other content is visible except the search bar and close button

### Requirement: Close button displays in top-right corner

An "X" close button SHALL appear in the top-right corner of the overlay, colored gray (#999999) with a hover state that darkens to #333333.

#### Scenario: Close button displays in top-right

- **GIVEN** the overlay is displayed
- **THEN** an "X" close button appears in the top-right corner
- **AND** the button is gray (#999999) color
- **WHEN** the user hovers over the close button
- **THEN** the color darkens to #333333

### Requirement: Close button dismisses overlay

Clicking the close button SHALL dismiss the overlay and show a "Search closed" message with a reopen option.

#### Scenario: Close button dismisses overlay

- **GIVEN** the overlay is displayed
- **WHEN** the user clicks the "X" close button
- **THEN** the overlay disappears and a "Search closed" message is shown

### Requirement: Pill-shaped search bar renders centered

A pill-shaped search bar SHALL be centered vertically and horizontally with a white background, light blue border (2px solid #d0e3f7), and fully rounded corners.

#### Scenario: Search bar renders centered

- **GIVEN** the overlay is displayed
- **THEN** a pill-shaped search bar is centered vertically and horizontally
- **AND** the search bar has a white background
- **AND** the search bar has a light blue border (2px solid #d0e3f7)
- **AND** the search bar has fully rounded corners (border-radius ~28px)

### Requirement: Search input accepts text

The search bar SHALL contain a text input with "Search..." placeholder text that accepts user input.

#### Scenario: Search input accepts text

- **GIVEN** the search bar is displayed
- **WHEN** the user clicks inside the search bar
- **THEN** a text input receives focus
- **AND** the input has placeholder text "Search..."
- **AND** the user can type a search query

### Requirement: Search button is visible and styled

A blue "Search" button SHALL appear on the right side of the search bar with pill shape, white text, and blue (#4a8cf7) background.

#### Scenario: Search button is visible and styled

- **GIVEN** the search bar is displayed
- **THEN** a blue "Search" button appears on the right side of the bar
- **AND** the button has a pill shape (border-radius ~24px)
- **AND** the button text is white
- **AND** the button background is blue (#4a8cf7)

### Requirement: Search button triggers search action

Clicking the Search button SHALL trigger a search action with the entered query text.

#### Scenario: Search button triggers search action

- **GIVEN** the search bar is displayed with text "vacation"
- **WHEN** the user clicks the "Search" button
- **THEN** a search submit action is triggered with the entered query

### Requirement: Enter key triggers search

Pressing the Enter key in the search input SHALL trigger the same search action as clicking the Search button.

#### Scenario: Enter key triggers search

- **GIVEN** the search bar is displayed with text "beach"
- **WHEN** the user presses the Enter key
- **THEN** the same search submit action is triggered

### Requirement: Responsive layout

The overlay and search bar SHALL be responsive on mobile viewports (<=640px), with the search bar adjusting width and remaining tappable.

#### Scenario: Responsive layout

- **GIVEN** the overlay is displayed on a mobile viewport (<=640px)
- **THEN** the search bar width adjusts to fit within screen margins
- **AND** the search button remains visible and tappable
- **AND** the close button remains accessible

### Requirement: Footer links to Component Dock

The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **GIVEN** the overlay is displayed
- **THEN** a footer link to https://www.componentdock.com/ is visible
- **AND** the link text contains "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to ColorLib, preview.colorlib.com, or colorlib.com. Provenance lives only in the spec, TEMPLATES.md, and PR.

#### Scenario: No ColorLib references in app code

- **GIVEN** the app is built
- **THEN** no source file in apps/searchsnap/ contains the string "colorlib" (case-insensitive)
