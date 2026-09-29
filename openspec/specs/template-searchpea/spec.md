# Template: SearchPea (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V23" — a pill-shaped search
widget with a green-tinted input area, dark green SEARCH button, and a subtle
hint text below. Features a floating card design with rounded corners and
box shadow, positioned in the upper portion of a full-viewport background.

- **Source:** https://colorlib.com/wp/template/colorlib-search-23/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-23/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-23.jpg
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-23.zip (full HTML+CSS analyzed)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                      | Value                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------- |
| Font family                | `'Poppins', sans-serif` (weight 400, button weight 300)                                                 |
| Page background            | Background image positioned `bottom right`, `background-size: 100%`, `background-repeat: no-repeat`     |
| Layout                     | Full viewport, flex centered, `padding: 15px`                                                           |
| Form max-width             | `790px`                                                                                                 |
| Form padding-top           | `24vh` (pushed down from top)                                                                           |
| **Inner form (pill card)** | `border-radius: 34px`, `box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.15)`, `overflow: hidden`, flex layout |
| Input field height         | `68px` (desktop), `50px` (≤992px)                                                                       |
| **Input area (left side)** | `background: #d9f1e3` (light mint green), `flex-grow: 1`, flex centered                                 |
| Input text color           | `#000` (black)                                                                                          |
| Placeholder color          | `#222` (dark gray)                                                                                      |
| Input font size            | `16px`                                                                                                  |
| **Search icon**            | SVG magnifying glass, `fill: #222`, `36×36px` (desktop), `26×26px` (mobile)                             |
| Icon wrapper min-width     | `80px` (desktop), `40px` (mobile ≤767px)                                                                |
| **Search button (right)**  | `min-width: 216px` (desktop), `100px` (mobile), `background: #00ad5f` (green)                           |
| Button text                | `#fff` (white), `16px` (desktop), `13px` (mobile), `font-weight: 300`, uppercase                        |
| Button hover               | `background: #009451` (darker green)                                                                    |
| Button transition          | `all .2s ease-out, color .2s ease-out`                                                                  |
| **Hint text**              | `font-size: 15px`, `color: #ccc`, `padding-left: 26px`                                                  |
| Hint text content          | "ex. Game, Music, Video, Photography"                                                                   |

## Requirements

### Requirement: Full viewport background

The page SHALL display a full-viewport photographic background image positioned at the bottom-right, scaling to 100% width with no repeat.

#### Scenario: Background image covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background image
- **AND** the background is positioned at the bottom-right
- **AND** the background scales to 100% width
- **AND** the background does not repeat

### Requirement: Centered pill-shaped search card

The page SHALL display a pill-shaped floating search card centered horizontally, positioned approximately 24vh from the top, with a max-width of approximately 790px, rounded corners (~34px radius), and a soft drop shadow.

#### Scenario: Card renders with correct shape and position

- **WHEN** the page loads
- **THEN** a pill-shaped search card is displayed
- **AND** the card is centered horizontally
- **AND** the card is positioned approximately 24vh from the top
- **AND** the card has a max-width of approximately 790px
- **AND** the card has rounded corners (border-radius ~34px)
- **AND** the card has a subtle drop shadow

### Requirement: Search input area

The left portion of the card SHALL have a light mint green (#d9f1e3) background containing a dark magnifying glass icon (36×36px desktop, 26×26px mobile) and a text input with placeholder "What are you looking for?" in dark text with no visible border.

#### Scenario: Input area renders correctly

- **WHEN** the page loads
- **THEN** the left portion of the card has a light mint green background (#d9f1e3)
- **AND** a dark magnifying glass icon is displayed on the left
- **AND** the icon is approximately 36×36px on desktop
- **AND** a text input is visible with placeholder "What are you looking for?"
- **AND** the input text color is dark (#000)
- **AND** the input has no visible border

### Requirement: Search button

A green SEARCH button SHALL be displayed on the right side of the card with white uppercase text, minimum width 216px (desktop) / 100px (mobile), font-weight 300, and a smooth hover transition to dark green (#009451).

#### Scenario: Button renders with correct styling

- **WHEN** the page loads
- **THEN** a green SEARCH button is displayed on the right side of the card
- **AND** the button background is #00ad5f
- **AND** the button text is white and uppercase
- **AND** the button text reads "SEARCH"
- **AND** the button has a minimum width of approximately 216px

#### Scenario: Button hover darkens

- **WHEN** the user hovers over the SEARCH button
- **THEN** the button background darkens to #009451
- **AND** the transition is smooth (~0.2s)

### Requirement: Hint text

A hint text SHALL be displayed below the search card reading "ex. Game, Music, Video, Photography" in light gray (#ccc) with left padding.

#### Scenario: Hint text renders below card

- **WHEN** the page loads
- **THEN** a hint text is displayed below the search card
- **AND** the hint text reads "ex. Game, Music, Video, Photography"
- **AND** the hint text color is light gray (#ccc)
- **AND** the hint text is left-aligned with padding

### Requirement: Responsive behavior

On screens narrower than 993px, the input field height SHALL reduce to approximately 50px. On screens narrower than 768px, the search icon scales down to 26×26px, the icon wrapper minimum width reduces to 40px, the button minimum width reduces to 100px, and the button font size reduces to 13px.

#### Scenario: Tablet layout

- **WHEN** the page is viewed on a screen narrower than 993px
- **THEN** the input field height reduces to approximately 50px

#### Scenario: Mobile layout

- **WHEN** the page is viewed on a screen narrower than 768px
- **THEN** the search icon scales down to approximately 26×26px
- **AND** the icon wrapper minimum width reduces to 40px
- **AND** the SEARCH button minimum width reduces to 100px
- **AND** the button font size reduces to 13px

### Requirement: Accessibility

The search input and SEARCH button SHALL be focusable via keyboard with focus-visible styling, and SHALL have appropriate aria-labels for screen readers.

#### Scenario: Keyboard navigation works

- **WHEN** the page loads
- **THEN** the search input is focusable via keyboard
- **AND** the SEARCH button is focusable via keyboard

#### Scenario: Screen reader labels present

- **WHEN** the page loads
- **THEN** the input has an appropriate aria-label
- **AND** the SEARCH button has an accessible label

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"
