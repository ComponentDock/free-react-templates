# Template: Gust (Weather Dropdown Menu)

## Purpose

Gust is a single-page weather dropdown menu template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Weather
Dropdown" component design (see TEMPLATES.md), built under a different name with
the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The template displays a centered "Weather Forecast" heading with a styled
dropdown button that reveals four weather condition options (Sunny Day, Rainy
Day, Cloudy Day, Thunderstorm), each with a distinct icon and accent color.
The dropdown features a blue (#3e64ff) toggle button with a sun icon, a white
dropdown panel with a top arrow indicator, and left-edge color bars on hover.
The background is light (#fafafa) with gray body text, and the typography uses
Poppins from Google Fonts.

Gust lives in `apps/gust` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Requirements

### Requirement: Page heading

The system SHALL render a centered "Weather Forecast" heading at the top of
the main content area.

#### Scenario: Heading is visible on page load

- **GIVEN** the Gust page is rendered
- **WHEN** the page loads
- **THEN** an `h1` (or appropriate heading level) SHALL display the text
  "Weather Forecast"
- **AND** the heading SHALL be centered horizontally on the page

### Requirement: Weather dropdown button

The system SHALL render a dropdown toggle button centered on the page, styled
with a blue background, white text, rounded corners, and a drop shadow.

#### Scenario: Button content and style

- **GIVEN** the Gust page is rendered
- **WHEN** the dropdown button is displayed
- **THEN** the button SHALL show a sun icon (e.g. lucide-react `Sun`)
  followed by the text "Today's Weather"
- **AND** the button SHALL have a blue background (`#3e64ff`), white text,
  rounded corners, and a shadow
- **AND** the button SHALL be centered horizontally on the page

#### Scenario: Button has accessible attributes

- **GIVEN** the Gust page is rendered
- **WHEN** the dropdown button is displayed
- **THEN** the button SHALL have an `aria-expanded` attribute reflecting
  whether the dropdown is open or closed
- **AND** the button SHALL have an `aria-haspopup` attribute (e.g.
  `aria-haspopup="true"` or `aria-haspopup="menu"`)

### Requirement: Dropdown toggle behavior

The system SHALL toggle the dropdown menu open and closed when the user
activates the button.

#### Scenario: Click opens the dropdown

- **GIVEN** the Gust page is rendered and the dropdown is closed
- **WHEN** the user clicks the "Today's Weather" button
- **THEN** the dropdown menu SHALL become visible below the button

#### Scenario: Click closes the dropdown

- **GIVEN** the Gust page is rendered and the dropdown is open
- **WHEN** the user clicks the "Today's Weather" button
- **THEN** the dropdown menu SHALL be hidden

### Requirement: Click outside closes dropdown

The system SHALL close the dropdown when the user clicks outside the dropdown
button and menu area.

#### Scenario: Outside click dismisses the dropdown

- **GIVEN** the Gust page is rendered and the dropdown is open
- **WHEN** the user clicks on the page background (outside the button and
  dropdown menu)
- **THEN** the dropdown menu SHALL be hidden

### Requirement: Keyboard accessibility

The system SHALL support keyboard interactions for opening, closing, and
navigating the dropdown.

#### Scenario: Escape key closes the dropdown

- **GIVEN** the Gust page is rendered and the dropdown is open
- **WHEN** the user presses the Escape key
- **THEN** the dropdown menu SHALL be hidden

#### Scenario: Enter or Space key toggles the dropdown

- **GIVEN** the Gust page is rendered and the dropdown is closed
- **WHEN** the dropdown button has focus and the user presses Enter or Space
- **THEN** the dropdown menu SHALL become visible

### Requirement: Dropdown menu items

The system SHALL render a dropdown menu containing four weather condition
items, each with an icon and a label.

#### Scenario: Dropdown items are visible when open

- **GIVEN** the Gust page is rendered and the dropdown is open
- **WHEN** the dropdown menu is displayed
- **THEN** four list items SHALL be visible in the menu

#### Scenario: Sunny Day item

- **GIVEN** the dropdown is open
- **WHEN** the user views the first item
- **THEN** it SHALL show a sun icon and the label "Sunny Day"
- **AND** it SHALL have a yellow accent color (`#f9e090`)

#### Scenario: Rainy Day item

- **GIVEN** the dropdown is open
- **WHEN** the user views the second item
- **THEN** it SHALL show a rain icon and the label "Rainy Day"
- **AND** it SHALL have a cyan accent color (`#5edfff`)

#### Scenario: Cloudy Day item

- **GIVEN** the dropdown is open
- **WHEN** the user views the third item
- **THEN** it SHALL show a cloud icon and the label "Cloudy Day"
- **AND** it SHALL have a blue accent color (`#4d80e4`)

#### Scenario: Thunderstorm item

- **GIVEN** the dropdown is open
- **WHEN** the user views the fourth item
- **THEN** it SHALL show a lightning icon and the label "Thunderstorm"
- **AND** it SHALL have a red accent color (`#ff8080`)

#### Scenario: Dropdown item hover indicator

- **GIVEN** the dropdown is open
- **WHEN** the user hovers over any dropdown item
- **THEN** a left-edge color bar matching that item's accent color SHALL
  appear on the item

### Requirement: Dropdown visual style

The system SHALL render the dropdown menu with a white background, a box
shadow, and a small triangular arrow at the top pointing to the button.

#### Scenario: Dropdown panel style

- **GIVEN** the Gust page is rendered and the dropdown is open
- **WHEN** the dropdown menu is displayed
- **THEN** it SHALL have a white background and a box shadow
- **AND** a small triangular arrow (pseudo-element or SVG) SHALL appear at
  the top of the dropdown, pointing toward the toggle button

### Requirement: Footer with Component Dock link

The system SHALL render a footer that links to
`https://www.componentdock.com/` ("Component Dock").

#### Scenario: Footer renders with Component Dock link

- **GIVEN** the Gust page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL contain text referencing "Component Dock"
- **AND** it SHALL include a link to `https://www.componentdock.com/`

#### Scenario: Footer link opens in new tab

- **GIVEN** the Gust page is rendered and the footer is displayed
- **WHEN** the user inspects the Component Dock link
- **THEN** the link SHALL have `target="_blank"` and `rel="noopener noreferrer"`

### Requirement: Page composition and styling

The system SHALL compose all sections in a single page with appropriate
global styling: Poppins font, light background, and gray body text.

#### Scenario: Full page render

- **GIVEN** the Gust app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL display the heading, the dropdown button, and
  the footer in a single-column centered layout
- **AND** the document title SHALL be set appropriately (e.g. "Gust —
  Weather Dropdown Template")

#### Scenario: Global styles

- **GIVEN** the Gust page is rendered
- **WHEN** the page is displayed
- **THEN** the page background SHALL be `#fafafa`
- **AND** body text SHALL be gray
- **AND** the font family SHALL be Poppins (loaded via Google Fonts)
