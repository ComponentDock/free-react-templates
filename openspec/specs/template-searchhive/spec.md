# Template: SearchHive (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form Bar 11" — a minimal navbar-style search form
bar. Features a horizontal navigation bar with brand text on the left and a
search input with a magnifying glass toggle button on the right. The search
icon acts as a toggle to show/hide the search field. Clean, minimal design
with a white/light background and blue accent color.

- **Source:** https://colorlib.com/wp/template/search-form-bar-11/
- **Preview (archived):** https://preview.colorlib.com/theme/search-form-bar-11/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-11.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable).

| Token                  | Value                                          |
| ---------------------- | ---------------------------------------------- |
| Font family            | `'Poppins', sans-serif` (weight 400–600)       |
| Page background        | `#ffffff` (white)                              |
| Navbar background      | `#ffffff` (white, no visible border)           |
| Layout                 | Full-width horizontal navbar, flexbox row      |
| Brand text color       | `#2563eb` (blue-600)                           |
| Brand font size        | `20px`                                         |
| Brand font weight      | `600` (semibold)                               |
| Search input width     | `320px` (desktop)                              |
| Search input height    | `40px`                                         |
| Search input bg        | `#ffffff` (white)                              |
| Search input border    | `1px solid #d1d5db` (gray-300)                |
| Search input radius    | `4px` (slightly rounded)                       |
| Search input padding   | `0 40px 0 12px` (right space for icon)         |
| Search input text color| `#374151` (gray-700)                           |
| Search placeholder color| `#9ca3af` (gray-400)                          |
| Search input font size | `14px`                                         |
| Search icon color      | `#2563eb` (blue-600, matches brand)            |
| Search icon size       | `18px`                                         |
| Search icon position   | Absolute right inside input, vertically centered|
| Toggle button bg       | `transparent` (no background)                  |
| Toggle button hover    | `#f3f4f6` (gray-100, subtle hover)             |
| Section padding        | `16px 40px` (navbar vertical/horizontal)       |
| Body note text color   | `#6b7280` (gray-500)                           |
| Body note font size    | `14px`                                         |

## Requirements

### Requirement: Navbar layout

The page SHALL display a full-width horizontal navigation bar at the top with brand text on the left and a search form on the right.

#### Scenario: Navbar renders

- **WHEN** the page loads
- **THEN** a horizontal navbar is visible at the top of the viewport
- **AND** the navbar spans the full width
- **AND** the navbar has a white background

#### Scenario: Brand text visible

- **WHEN** the page loads
- **THEN** "Brand" text is visible on the left side of the navbar
- **AND** the text color is blue (#2563eb)
- **AND** the font weight is semibold

### Requirement: Search input

The navbar SHALL contain a search input field on the right side with placeholder text and a magnifying glass icon.

#### Scenario: Input renders with placeholder

- **WHEN** the page loads
- **THEN** a text input is visible on the right side of the navbar
- **AND** the placeholder text reads "Enter keyword and hit enter..."
- **AND** the input has a light gray border
- **AND** the input has slightly rounded corners (border-radius 4px)

#### Scenario: Search icon visible

- **WHEN** the page loads
- **THEN** a magnifying glass icon is visible inside the input on the right side
- **AND** the icon color is blue (#2563eb)

### Requirement: Toggle search behavior

The search icon SHALL act as a toggle button that shows/hides the search input.

#### Scenario: Toggle reveals input

- **WHEN** the user clicks the search icon toggle button
- **THEN** the search input expands or becomes visible
- **AND** the input receives focus

#### Scenario: Toggle hides input

- **WHEN** the search input is visible and the user clicks outside the input area
- **THEN** the search input collapses or hides

### Requirement: Search submission

The search form SHALL submit when the user presses Enter.

#### Scenario: Enter submits search

- **WHEN** the user types a query and presses Enter
- **THEN** the form submits (onSearch callback is called with the query value)

### Requirement: Responsive behavior

The navbar SHALL adapt to smaller screens.

#### Scenario: Mobile view

- **WHEN** the viewport width is 640px or less
- **THEN** the navbar stacks brand text above the search input
- **AND** the search input width adapts to fit the viewport

### Requirement: Accessibility

The search form SHALL be accessible via keyboard and screen readers.

#### Scenario: Keyboard navigation

- **WHEN** the user presses Tab
- **THEN** focus moves to the search input
- **AND** pressing Enter on the input submits the search

#### Scenario: Screen reader labels

- **WHEN** a screen reader announces the input
- **THEN** it is described as a search input (aria-label or associated label)
- **AND** the toggle button has an accessible label

### Requirement: Component Dock footer

Every template SHALL include a footer linking to Component Dock.

#### Scenario: Footer present

- **WHEN** the page renders
- **THEN** a footer is visible
- **AND** the footer contains a link to `https://www.componentdock.com/`
- **AND** the link text references "Component Dock"

## Verification checklist

- [ ] Navbar spans full width with white background
- [ ] "Brand" text is blue, semibold, on the left
- [ ] Search input has placeholder "Enter keyword and hit enter..."
- [ ] Search input has light gray border, slightly rounded
- [ ] Magnifying glass icon is blue, positioned inside input on right
- [ ] Toggle button shows/hides the search input on click
- [ ] Enter key submits the search
- [ ] Responsive: stacks on mobile, input width adapts
- [ ] Keyboard: Tab navigates input → footer
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
