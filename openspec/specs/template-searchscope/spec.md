# Template: SearchScope (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form Bar 09" — a standalone search form bar
widget. Features a centered title heading, a white-background search input
field with rounded-left corners, and a green/mint "Search" button with
rounded-right corners, all on a light gray background. A minimal,
self-contained micro-component.

- **Source:** https://colorlib.com/wp/template/search-form-bar-09/
- **Preview (archived):** https://preview.colorlib.com/theme/search-form-bar-09/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-09.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable).

| Token               | Value                                        |
| ------------------- | -------------------------------------------- |
| Font family         | `'Montserrat', sans-serif` (weight 400–600) |
| Page background     | `#f5f5f5` (light gray)                       |
| Layout              | Full viewport, flexbox centered, vertical     |
| Title text color    | `#333333` (dark gray)                        |
| Title font size     | `24px` (desktop)                             |
| Title font weight   | `600` (semibold)                             |
| Title margin        | `0 0 30px` (bottom margin to search bar)     |
| Search input bg     | `#ffffff` (white)                            |
| Search input border | `1px solid #e0e0e0`                          |
| Search input radius | `4px 0 0 4px` (rounded left only)            |
| Search input height | `50px`                                       |
| Search input width  | `300px`                                      |
| Search input font   | `14px`, color `#999999` (placeholder gray)   |
| Search input padding| `0 15px`                                     |
| Button background   | `#5cb85c` (green/mint)                       |
| Button hover bg     | `#4cae4c` (darker green)                     |
| Button text color   | `#ffffff` (white)                            |
| Button font size    | `14px`                                       |
| Button font weight  | `600`                                        |
| Button radius       | `0 4px 4px 0` (rounded right only)           |
| Button padding      | `0 25px`                                     |
| Button height       | `50px` (matches input)                       |
| Button transition   | `background-color 0.2s ease`                 |
| Focus ring          | `outline: 2px solid #5cb85c` on input focus  |

## Requirements

### Requirement: Page layout

The page SHALL display a light gray background covering the full viewport with a centered search form assembly.

#### Scenario: Page renders with light background

- **WHEN** the page loads
- **THEN** the page background is `#f5f5f5` (light gray)
- **AND** the viewport is filled

#### Scenario: Search assembly is centered

- **WHEN** the page loads
- **THEN** the search form assembly is centered horizontally and vertically

### Requirement: Title heading

The page SHALL display a centered title heading above the search bar.

#### Scenario: Title renders

- **WHEN** the page loads
- **THEN** a heading "Search" (or similar descriptive title) is visible
- **AND** the heading is centered horizontally
- **AND** the heading text color is dark gray (#333)
- **AND** the heading has bottom margin separating it from the search bar

### Requirement: Search input field

The search form SHALL contain an input field with a white background and rounded-left corners.

#### Scenario: Input renders with placeholder

- **WHEN** the page loads
- **THEN** a text input is visible with placeholder text "Search..."
- **AND** the input has a white background
- **AND** the input has rounded-left corners (radius 4px left only)

#### Scenario: Input focus state

- **WHEN** the user clicks/focuses the search input
- **THEN** the input receives a visible focus ring (outline in brand green)
- **AND** no box-shadow appears

### Requirement: Search button

The search form SHALL contain a "Search" button with a green background and rounded-right corners, positioned immediately to the right of the input.

#### Scenario: Button renders

- **WHEN** the page loads
- **THEN** a button labeled "Search" is visible
- **AND** the button background is green (#5cb85c)
- **AND** the button text is white
- **AND** the button has rounded-right corners (radius 4px right only)

#### Scenario: Button hover

- **WHEN** the user hovers over the Search button
- **THEN** the button background darkens (#4cae4c)
- **AND** the transition is smooth (0.2s ease)

### Requirement: Search bar alignment

The input field and button SHALL be horizontally aligned side-by-side, forming a single unified search bar with matching heights.

#### Scenario: Input and button form unified bar

- **WHEN** the page loads
- **THEN** the input and button are positioned side by side with no gap
- **AND** both have the same height (50px)
- **AND** the combined bar has a total border radius of 4px on the outer corners

### Requirement: Responsive behavior

The search bar SHALL maintain its layout on smaller screens.

#### Scenario: Mobile view

- **WHEN** the viewport width is 480px or less
- **THEN** the search bar remains horizontally centered
- **AND** the input width adapts to fit the viewport (max-width constraint)
- **AND** the button remains flush to the input's right edge

### Requirement: Accessibility

The search form SHALL be accessible via keyboard and screen readers.

#### Scenario: Keyboard navigation

- **WHEN** the user presses Tab
- **THEN** focus moves to the search input
- **AND** pressing Tab again moves focus to the Search button
- **AND** pressing Enter on the button submits the form

#### Scenario: Screen reader labels

- **WHEN** a screen reader announces the input
- **THEN** it is described as a search input (aria-label or associated label)

### Requirement: Component Dock footer

Every template SHALL include a footer linking to Component Dock.

#### Scenario: Footer present

- **WHEN** the page renders
- **THEN** a footer is visible
- **AND** the footer contains a link to `https://www.componentdock.com/`
- **AND** the link text references "Component Dock"

## Verification checklist

- [ ] Page background is light gray (#f5f5f5)
- [ ] Title heading is centered, dark text, semibold
- [ ] Search input: white bg, rounded-left, placeholder "Search..."
- [ ] Search button: green (#5cb85c), rounded-right, white text "Search"
- [ ] Input + button form a unified bar, same height, no gap
- [ ] Button hover darkens to #4cae4c with smooth transition
- [ ] Input focus ring in brand green
- [ ] Responsive: centered on mobile, input width adapts
- [ ] Keyboard: Tab navigates input → button → footer
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
