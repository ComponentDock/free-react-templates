# Template: SearchShift (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V25" — a dark-overlay search
widget with a category dropdown, text input, and a gradient blue-to-red
SEARCH button that shifts colors on hover. Features a semi-transparent dark
background overlay on a full-viewport photo, creating a cinematic look.

- **Source:** https://colorlib.com/wp/template/colorlib-search-25/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-25/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-25.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS (`css/style.css`).

| Token                         | Value                                                                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Font family                   | `'Poppins', sans-serif` (weights 300, 400)                                                                                                      |
| Page background               | Full-viewport background image, `background-size: cover`, `background-position: center`                                                         |
| Layout                        | Full viewport, flex centered, `padding: 15px`                                                                                                   |
| Form max-width                | `790px`                                                                                                                                         |
| **Inner form (dark overlay)** | `background: rgba(0, 0, 0, 0.5)` (50% black), flex layout                                                                                       |
| Input field height            | `68px` (desktop), `50px` (≤992px)                                                                                                               |
| **Category dropdown (left)**  | `width: 200px`, transparent bg, `border: 1px solid rgba(255,255,255,0.3)`                                                                       |
| Dropdown text                 | White (`#fff`), `font-size: 16px`                                                                                                               |
| Dropdown chevron              | `fill: #e5e5e5`, positioned `right: 30px`                                                                                                       |
| **Text input (middle)**       | `flex-grow: 1`, transparent bg, `border: 1px solid rgba(255,255,255,0.3)`, `border-left: 0`, `border-right: 0`                                  |
| Input text color              | `#fff` (white)                                                                                                                                  |
| Placeholder color             | `#e5e5e5` (light gray)                                                                                                                          |
| Input font size               | `16px`                                                                                                                                          |
| **Search button (right)**     | `width: 164px`, gradient background: `linear-gradient(45deg, #2c6dd5 0%, #2c6dd5 28%, #ff4b5a 91%, #ff4b5a 100%)` (blue to red)                 |
| Button text                   | `#fff` (white), `20px`, `font-weight: 300`, "Search" (title case)                                                                               |
| Button hover                  | Pseudo-element with reversed gradient: `linear-gradient(45deg, #ff4b5a 0%, #ff4b5a 28%, #2c6dd5 91%, #2c6dd5 100%)` fades in via `opacity: 0→1` |
| Button transition             | `all .2s ease-out, color .2s ease-out`                                                                                                          |
| Mobile (≤767px)               | Flex-wrap, all fields full-width, `padding: 20px`, margin-bottom between fields                                                                 |

## Requirements

### Requirement: Full viewport background with dark overlay

The page SHALL display a full-viewport background image with a semi-transparent dark overlay (`rgba(0,0,0,0.5)`) covering the entire inner form area.

#### Scenario: Background image covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background image
- **AND** the search form has a dark semi-transparent overlay (`rgba(0,0,0,0.5)`)
- **AND** the form is centered on the page
- **AND** the form has a max-width of approximately 790px

### Requirement: Category dropdown

The left section of the search form SHALL contain a category dropdown with transparent background, white border, and white text, with a fixed width of approximately 200px.

#### Scenario: Default state

- **WHEN** the page loads
- **THEN** the left section contains a category dropdown
- **AND** the dropdown has a transparent background with white border
- **AND** the dropdown shows "Category" as the default option
- **AND** the dropdown text is white
- **AND** the dropdown width is approximately 200px
- **AND** a chevron-down icon is visible

#### Scenario: Open dropdown

- **WHEN** the user clicks on the category dropdown
- **THEN** the dropdown options are displayed
- **AND** the options include "Subject A", "Subject B", "Subject C"

### Requirement: Text input

The middle section of the search form SHALL contain a text input with transparent background, white text, and placeholder "Enter Keywords" in light gray, taking up the remaining horizontal space with no left or right borders.

#### Scenario: Default state

- **WHEN** the page loads
- **THEN** the middle section contains a text input
- **AND** the input has a transparent background
- **AND** the input text color is white
- **AND** the placeholder text is "Enter Keywords" in light gray
- **AND** the input takes up the remaining horizontal space

#### Scenario: Focus state

- **WHEN** the user clicks on the text input
- **THEN** the input receives focus
- **AND** no outline or shadow appears

### Requirement: Search button

The right section of the search form SHALL display a gradient SEARCH button with blue-to-red gradient that reverses on hover via a fading pseudo-element.

#### Scenario: Default state

- **WHEN** the page loads
- **THEN** a gradient SEARCH button is displayed on the right
- **AND** the button has a blue-to-red gradient (left to right)
- **AND** the button text is white and reads "Search"
- **AND** the button width is approximately 164px

#### Scenario: Hover state

- **WHEN** the user hovers over the SEARCH button
- **THEN** the gradient reverses (red-to-blue)
- **AND** the transition is smooth (~0.2s)

#### Scenario: Click

- **WHEN** the user clicks the SEARCH button
- **THEN** the form submits (or triggers search action)

### Requirement: Responsive behavior

The search form SHALL stack vertically on mobile screens (≤767px), with each section taking full width and internal padding of 20px.

#### Scenario: Mobile layout

- **WHEN** the page is viewed on a screen narrower than 768px
- **THEN** the form sections stack vertically
- **AND** each section takes full width
- **AND** the form has internal padding (20px)
- **AND** there is spacing between the stacked sections

#### Scenario: Tablet layout

- **WHEN** the page is viewed on a screen narrower than 993px
- **THEN** the input field height reduces to approximately 50px

### Requirement: Accessibility

All interactive elements in the search form SHALL be keyboard-focusable with appropriate accessible labels for screen readers.

#### Scenario: Keyboard navigation

- **WHEN** the page loads
- **THEN** the category dropdown is focusable via keyboard
- **AND** the text input is focusable via keyboard
- **AND** the SEARCH button is focusable via keyboard
- **AND** focus-visible styling is applied

#### Scenario: Screen reader support

- **WHEN** the page loads
- **THEN** the category dropdown has an accessible label
- **AND** the text input has an appropriate aria-label
- **AND** the SEARCH button has an accessible label

### Requirement: Footer

The template SHALL include a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text includes "Component Dock"
