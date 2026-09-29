# Template: SearchPulse (Search Form Bar)

## Purpose

Recreation of ColorLib **Search Form Bar 17** — a clean navbar with brand logo, navigation links (Home, About, Contact), a search icon toggle, and a slide-down search form overlay. The search panel has a light gray background, a white pill-shaped input with placeholder "Search...", a blue "Search" button, and an "X" close button. Minimalist, focused on the search toggle interaction.

- **Source slug:** `search-form-bar-17`
- **Source:** https://colorlib.com/wp/template/search-form-bar-17/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-17/ — returned 404 at prep time
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-17.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category:** Search Form Bar / Navbar Search Toggle

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable).

| Token                       | Value                                                        |
| --------------------------- | ------------------------------------------------------------ |
| Font family                 | `'Poppins', sans-serif` (weight 400)                         |
| Page background             | `#ffffff` (white)                                             |
| Navbar background           | `#ffffff` (white)                                             |
| Navbar height               | ~`64px`                                                      |
| Navbar border-bottom        | none visible (clean edge)                                    |
| Brand text color            | `#4a8cf7` (medium blue)                                      |
| Brand font-size             | ~`22px`                                                      |
| Brand font-weight           | 700                                                          |
| Nav link color              | `#4a8cf7` (medium blue)                                      |
| Nav link font-size          | ~`14px`                                                      |
| Nav link spacing            | ~`20px` gap between links                                    |
| Search icon color           | `#4a8cf7` (medium blue)                                      |
| Search icon size            | ~`18px`                                                      |
| Search panel background     | `#f5f5f5` (very light gray)                                  |
| Search panel padding        | ~`20px`                                                      |
| Search panel border-bottom  | none visible                                                  |
| Search bar max-width        | ~`600px` (centered in panel)                                 |
| Search bar height           | ~`48px`                                                      |
| Search bar border           | `1px solid #e0e0e0` (light gray)                              |
| Search bar border-radius    | `24px` (pill shape)                                          |
| Search bar background       | `#ffffff` (white)                                            |
| Input placeholder color     | `#999999` (muted gray)                                       |
| Input text color            | `#333333` (dark gray)                                        |
| Search button background    | `#4a8cf7` (medium blue)                                      |
| Search button text          | `#ffffff` (white)                                            |
| Search button border-radius | `24px` (pill shape)                                          |
| Search button padding       | ~`10px 24px`                                                 |
| Search button font-size     | ~`14px`                                                      |
| Close button position       | Top-right of search panel                                    |
| Close button color          | `#999999` (gray)                                             |
| Close button hover color    | `#333333` (dark)                                             |
| Close button size           | ~`20px`                                                      |
| Body text color             | `#666666` (medium gray, for informational text)              |

## Requirements

### Requirement: Navbar renders with brand and navigation links

A white navbar SHALL be rendered at the top of the page with a blue brand text ("Brand") on the left, and navigation links (Home, About, Contact) plus a search icon on the right.

#### Scenario: Navbar renders with brand and links

- **GIVEN** the page loads
- **THEN** a white navbar is displayed at the top of the viewport
- **AND** the brand text "Brand" appears on the left in blue (#4a8cf7)
- **AND** navigation links "Home", "About", "Contact" appear on the right in blue
- **AND** a search icon appears to the right of the navigation links

### Requirement: Search icon toggles the search panel

Clicking the search icon SHALL toggle the visibility of a dropdown search panel below the navbar.

#### Scenario: Search icon shows search panel

- **GIVEN** the page loads
- **AND** the search panel is hidden
- **WHEN** the user clicks the search icon
- **THEN** a search panel appears below the navbar
- **AND** the panel has a light gray (#f5f5f5) background

#### Scenario: Search icon hides search panel

- **GIVEN** the search panel is visible
- **WHEN** the user clicks the search icon again
- **THEN** the search panel disappears

### Requirement: Search panel displays search form

The search panel SHALL contain a centered white pill-shaped search bar with a text input and a blue "Search" button.

#### Scenario: Search bar renders inside panel

- **GIVEN** the search panel is visible
- **THEN** a white pill-shaped search bar is displayed centered in the panel
- **AND** the search bar has rounded corners (border-radius ~24px)
- **AND** the search bar has a light gray border

### Requirement: Search input accepts text

The search bar SHALL contain a text input with "Search..." placeholder text that accepts user input.

#### Scenario: Search input accepts text

- **GIVEN** the search panel is visible
- **WHEN** the user clicks inside the search input
- **THEN** the input receives focus
- **AND** the placeholder text reads "Search..."
- **AND** the user can type a search query

### Requirement: Search button is visible and styled

A blue "Search" button SHALL appear on the right side of the search bar with pill shape, white text, and blue (#4a8cf7) background.

#### Scenario: Search button is visible and styled

- **GIVEN** the search panel is visible
- **THEN** a blue "Search" button appears on the right side of the search bar
- **AND** the button has a pill shape (border-radius ~24px)
- **AND** the button text is white
- **AND** the button background is blue (#4a8cf7)

### Requirement: Search button triggers search action

Clicking the Search button SHALL trigger a search action with the entered query text.

#### Scenario: Search button triggers search action

- **GIVEN** the search panel is visible with text "vacation"
- **WHEN** the user clicks the "Search" button
- **THEN** a search submit action is triggered with the entered query

### Requirement: Enter key triggers search

Pressing the Enter key in the search input SHALL trigger the same search action as clicking the Search button.

#### Scenario: Enter key triggers search

- **GIVEN** the search panel is visible with text "beach"
- **WHEN** the user presses the Enter key in the input
- **THEN** the same search submit action is triggered

### Requirement: Close button dismisses search panel

An "X" close button SHALL appear in the top-right corner of the search panel. Clicking it SHALL dismiss the panel.

#### Scenario: Close button displays in top-right of panel

- **GIVEN** the search panel is visible
- **THEN** an "X" close button appears in the top-right corner of the search panel
- **AND** the button is gray (#999999)

#### Scenario: Close button dismisses panel

- **GIVEN** the search panel is visible
- **WHEN** the user clicks the "X" close button
- **THEN** the search panel disappears

### Requirement: Page displays informational message

Below the navbar (when search panel is closed), the page SHALL display a centered message: "Please click the search icon toggle button top right."

#### Scenario: Informational message renders centered

- **GIVEN** the page loads and the search panel is hidden
- **THEN** a centered text message is displayed on the page
- **AND** the message reads "Please click the search icon toggle button top right."
- **AND** the message is styled in muted gray (#666666)

### Requirement: Responsive layout

The navbar and search panel SHALL be responsive on mobile viewports (<=640px), with the search bar adjusting width and remaining tappable.

#### Scenario: Responsive layout on mobile

- **GIVEN** the page is displayed on a mobile viewport (<=640px)
- **THEN** the navbar links remain accessible
- **AND** the search bar adjusts to fit within screen margins
- **AND** the search button remains visible and tappable
- **AND** the close button remains accessible

### Requirement: Footer links to Component Dock

The footer SHALL display a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer links to Component Dock

- **GIVEN** the page loads
- **THEN** a footer link to https://www.componentdock.com/ is visible
- **AND** the link text contains "Component Dock"
- **AND** the link opens in a new tab

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to ColorLib, preview.colorlib.com, or colorlib.com. Provenance lives only in the spec, TEMPLATES.md, and PR.

#### Scenario: No ColorLib references in app code

- **GIVEN** the app is built
- **THEN** no source file in apps/searchpulse/ contains the string "colorlib" (case-insensitive)
