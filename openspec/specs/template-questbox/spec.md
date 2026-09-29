# Template: QuestBox (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 20** — a full-viewport search overlay with a white search bar strip at the top. The search bar contains a text input with "Type keyword and hit enter..." placeholder and an "X" close button in the top-right corner. The overlay background is light/white, with an instructional message below the search bar.

- **Source slug:** `search-form-bar-20`
- **Source:** https://colorlib.com/wp/template/search-form-bar-20/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-20/ — returned 404 at prep time
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-20.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Light Overlay Search

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable).

| Token                       | Value                                               |
| --------------------------- | --------------------------------------------------- |
| Font family                 | `'Poppins', sans-serif` (weight 400)                |
| Page background             | `#ffffff` (white)                                   |
| Overlay background          | `#f5f5f5` (very light gray, near-white)             |
| Overlay                     | Full-viewport, covers entire page                   |
| Search bar strip background | `#ffffff` (white)                                   |
| Search bar strip position   | Top of viewport, full width                         |
| Search bar strip height     | ~`50px`                                            |
| Search bar strip padding    | ~`12px 30px`                                       |
| Search bar max-width        | ~`500px` (left-aligned within strip)               |
| Search bar height           | ~`40px`                                            |
| Search bar border           | `1px solid #e0e0e0` (light gray)                    |
| Search bar border-radius    | `4px` (slightly rounded, not pill)                 |
| Search bar background       | `#ffffff` (white)                                  |
| Input placeholder color     | `#999999` (muted gray)                             |
| Input text color            | `#333333` (dark gray)                              |
| Close button position       | Top-right corner of viewport, ~`20px` from edges   |
| Close button color          | `#999999` (gray)                                   |
| Close button hover color    | `#333333` (dark)                                   |
| Close button size           | ~`20px`                                            |
| Instruction text color      | `#999999` (muted gray)                             |
| Instruction text            | "Please click the search icon Q toggle button top right." |
| Instruction text position   | Centered below search bar strip                    |

## Requirements

### Requirement: Light overlay renders full viewport

The overlay SHALL fill the entire viewport with a light gray (#f5f5f5) background.

#### Scenario: Overlay renders full viewport

- **GIVEN** the page loads
- **THEN** the viewport is filled with a light gray background (#f5f5f5)
- **AND** no other page content is visible behind the overlay

### Requirement: White search bar strip at top

A white horizontal strip SHALL appear at the top of the viewport, spanning full width, containing the search bar and close button.

#### Scenario: Search bar strip renders at top

- **GIVEN** the overlay is displayed
- **THEN** a white horizontal strip appears at the top of the viewport
- **AND** the strip spans the full width of the viewport
- **AND** the strip has a height of approximately 50px

### Requirement: Close button displays in top-right corner

An "X" close button SHALL appear in the top-right corner of the viewport, colored gray (#999999) with a hover state that darkens to #333333.

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

### Requirement: Search bar renders in strip with input

The search bar SHALL contain a text input with "Type keyword and hit enter..." placeholder, styled with slightly rounded corners (border-radius ~4px, not pill shape).

#### Scenario: Search bar renders in strip

- **GIVEN** the overlay is displayed
- **THEN** a search bar appears in the white strip area
- **AND** the search bar has a white background
- **AND** the search bar has a light gray border (1px solid #e0e0e0)
- **AND** the search bar has slightly rounded corners (~4px)

### Requirement: Search input accepts text

The search bar SHALL contain a text input with "Type keyword and hit enter..." placeholder text that accepts user input.

#### Scenario: Search input accepts text

- **GIVEN** the overlay is displayed
- **WHEN** the user clicks inside the search input
- **THEN** the input receives focus
- **AND** the placeholder text reads "Type keyword and hit enter..."
- **AND** the user can type a search query

### Requirement: Enter key triggers search

Pressing the Enter key in the search input SHALL trigger a search action with the entered query text.

#### Scenario: Enter key triggers search

- **GIVEN** the overlay is displayed with text "vacation"
- **WHEN** the user presses the Enter key
- **THEN** a search submit action is triggered with the entered query

### Requirement: Instructional message displays below search bar

An instructional message SHALL display below the search bar strip, centered, in muted gray text.

#### Scenario: Instructional message displays

- **GIVEN** the overlay is displayed
- **THEN** an instructional message is visible below the search bar strip
- **AND** the message reads "Please click the search icon Q toggle button top right."
- **AND** the message text is muted gray (#999999)

### Requirement: Search toggle button in header

A header area SHALL include a search icon toggle button in the top-right corner that opens/closes the search overlay.

#### Scenario: Search icon toggle button visible

- **GIVEN** the page loads
- **THEN** a search icon toggle button is visible in the top-right corner of the header
- **WHEN** the user clicks the search icon
- **THEN** the search overlay opens (if closed) or closes (if open)

### Requirement: Responsive layout

The overlay and search bar SHALL be responsive on mobile viewports (<=640px), with the search bar adjusting width and remaining tappable.

#### Scenario: Responsive layout

- **GIVEN** the overlay is displayed on a mobile viewport (<=640px)
- **THEN** the search bar width adjusts to fit within screen margins
- **AND** the close button remains accessible
- **AND** the instructional message remains visible

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
- **THEN** no source file in apps/questbox/ contains the string "colorlib" (case-insensitive)
