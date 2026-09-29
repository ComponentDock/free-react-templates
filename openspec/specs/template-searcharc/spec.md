# Template: SearchArc (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search 3" — a standalone search form widget
with a category dropdown, text input, and green search button arranged in a
horizontal card on a lavender background. The form is centered on a full-viewport
purple/lavender background with a white card container, subtle box-shadow, and
three distinct input segments separated by thin borders.

- **Source:** https://colorlib.com/wp/template/colorlib-search-3/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-3/ — returned 404
- **Downloaded template:** extracted from https://preview.colorlib.com/downloads/free/colorlib-search-3.zip (full HTML+CSS+JS analyzed)
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-3.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS and screenshot visual analysis.

| Token                       | Value                                                                          |
| --------------------------- | ------------------------------------------------------------------------------ |
| Font family                 | `'Poppins', sans-serif` (weight 400)                                          |
| Page background             | Solid color `#a598ee` (lavender/purple), full viewport, `background-size: cover` |
| Layout                      | Full viewport, flexbox centered both axes, `padding: 15px`                     |
| Form max-width              | `790px`                                                                        |
| Form card background        | `#fff` (white)                                                                 |
| Form card box-shadow        | `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`                                        |
| Form card border-radius     | `3px`                                                                          |
| Form card display           | `flex`, `justify-content: space-between`, `align-items: center`                |
| Input field height          | `68px` (desktop), `50px` (tablet ≤992px)                                      |
| Dropdown segment width      | `200px`, with `border-right: 1px solid rgba(0, 0, 0, 0.1)`                   |
| Dropdown inner background   | `transparent` (inside form context)                                            |
| Dropdown arrow color        | `#e5e5e5`                                                                      |
| Dropdown text color         | `#888` (placeholder), `#555` (selected)                                       |
| Text input background       | `transparent`                                                                  |
| Text input text color       | `#555`                                                                         |
| Text input placeholder color| `#888`                                                                         |
| Text input font size        | `16px`                                                                         |
| Text input padding          | `10px 32px`                                                                    |
| Text input border on hover  | `0` (none), `outline: 0`, `box-shadow: none`                                  |
| Search button width         | `74px`                                                                         |
| Search button background    | `#63c76a` (green)                                                             |
| Search button hover bg      | `#50c058` (darker green)                                                      |
| Search button color         | `#fff` (white text/icon)                                                      |
| Search icon SVG size        | `16px` width                                                                   |
| Search button transition    | `all .2s ease-out, color .2s ease-out`                                         |
| Mobile breakpoint (stack)   | `767px` — flex-wrap, segments stack vertically with `border-bottom` separators |
| Mobile form padding         | `20px`                                                                         |
| Mobile input border         | `1px solid rgba(255, 255, 255, 0.3)` on text input                            |

### Screenshot visual notes

The screenshot shows a clean, minimal search bar widget centered on a soft
lavender/purple background. The form is a white horizontal card with three
segments: a "Category" dropdown on the left (showing a chevron arrow), a
text input in the center with placeholder "Enter Keywords?", and a compact
green search button with a white magnifying glass icon on the right. The
card has a subtle drop shadow. The overall aesthetic is modern, flat, and
friendly — the lavender background gives it a playful but professional feel.

## Requirements

### Requirement: Full viewport lavender background

The page SHALL display a full-viewport solid lavender/purple background (`#a598ee`) that covers the entire viewport.

#### Scenario: Background color covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background
- **AND** the background color is `#a598ee` (lavender/purple)
- **AND** the background covers the entire viewport

### Requirement: Centered search form card

The search form SHALL be displayed as a white card centered vertically and horizontally on the page, with a max-width of approximately 790px, subtle box-shadow, and rounded corners.

#### Scenario: Form card is centered on page

- **WHEN** the page loads
- **THEN** a white card form is centered vertically and horizontally
- **AND** the card has a max-width of approximately 790px
- **AND** the card has a box-shadow of `0px 8px 20px 0px rgba(0, 0, 0, 0.15)`
- **AND** the card has a border-radius of approximately 3px

### Requirement: Category dropdown segment

The form SHALL include a category dropdown on the left side, approximately 200px wide, with a right border separator, displaying options like "New Arrivals", "Sale", "Ladies", "Men", "Clothing", "Footwear", "Accessories".

#### Scenario: Dropdown renders with options

- **WHEN** the page loads
- **THEN** a category dropdown is displayed on the left side of the form
- **AND** the dropdown shows "Category" as the default/placeholder text
- **AND** the dropdown contains options: New Arrivals, Sale, Ladies, Men, Clothing, Footwear, Accessories
- **AND** the dropdown has a right border separator (`1px solid rgba(0, 0, 0, 0.1)`)
- **AND** the dropdown width is approximately 200px

#### Scenario: Dropdown arrow indicator

- **WHEN** the page loads
- **THEN** the dropdown displays a small downward-pointing chevron/arrow indicator
- **AND** the arrow color is `#e5e5e5`

### Requirement: Text search input

The form SHALL include a text input field in the center that grows to fill remaining space, with placeholder text "Enter Keywords?".

#### Scenario: Input renders with correct placeholder

- **WHEN** the page loads
- **THEN** a text input is displayed in the center of the form
- **AND** the input placeholder text is "Enter Keywords?"
- **AND** the input text color is `#555`
- **AND** the placeholder color is `#888`
- **AND** the input font size is 16px
- **AND** the input has no visible border (transparent background)

#### Scenario: Input fills remaining space

- **WHEN** the page loads
- **THEN** the text input grows to fill the space between the dropdown and the search button
- **AND** the input has a height matching the other segments (68px desktop, 50px tablet)

### Requirement: Green search button

The form SHALL include a green search button on the right side with a white magnifying glass icon, approximately 74px wide.

#### Scenario: Search button renders correctly

- **WHEN** the page loads
- **THEN** a search button is displayed on the right side of the form
- **AND** the button background color is `#63c76a` (green)
- **AND** the button width is approximately 74px
- **AND** the button height matches the form field height (68px)
- **AND** the button displays a white magnifying glass icon (SVG)
- **AND** the icon size is approximately 16px

#### Scenario: Search button hover state

- **WHEN** the user hovers over the search button
- **THEN** the button background changes to `#50c058` (darker green)
- **AND** the transition is smooth (0.2s ease-out)

### Requirement: Responsive tablet layout

On screens between 768px and 992px, the input field height SHALL reduce to approximately 50px.

#### Scenario: Tablet layout adapts height

- **WHEN** the page is viewed on a screen between 768px and 992px wide
- **THEN** the input field height reduces to approximately 50px
- **AND** all three segments maintain their horizontal layout

### Requirement: Responsive mobile layout

On screens narrower than 768px, the form segments SHALL stack vertically with border-bottom separators, the form card gets 20px padding, and the text input gets a subtle white border.

#### Scenario: Mobile layout stacks vertically

- **WHEN** the page is viewed on a screen narrower than 768px
- **THEN** the form segments stack vertically (dropdown on top, input in middle, button on bottom)
- **AND** each segment has a `border-bottom: 1px solid rgba(0, 0, 0, 0.1)` separator
- **AND** the form card has 20px padding
- **AND** the text input gets a `border: 1px solid rgba(255, 255, 255, 0.3)`
- **AND** the dropdown takes full width

### Requirement: Keyboard and screen reader accessibility

All interactive elements SHALL be focusable via keyboard with visible focus indicators, and SHALL have appropriate aria-labels.

#### Scenario: Keyboard navigation works

- **WHEN** the page loads
- **THEN** the dropdown is focusable via keyboard
- **AND** the text input is focusable via keyboard
- **AND** the search button is focusable via keyboard
- **AND** focus-visible styling is applied to each

#### Scenario: Screen reader labels present

- **WHEN** the page loads
- **THEN** the dropdown has an appropriate aria-label
- **AND** the text input has an appropriate aria-label
- **AND** the search button has an aria-label (e.g. "Search")

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"

## Verification checklist

- [ ] Lavender background covers full viewport
- [ ] White card form centered with correct max-width (790px)
- [ ] Box shadow and border-radius match tokens
- [ ] Category dropdown with all 7 options + chevron arrow
- [ ] Text input with "Enter Keywords?" placeholder
- [ ] Green search button with magnifying glass icon
- [ ] Button hover changes to darker green
- [ ] Tablet breakpoint (≤992px) reduces height to 50px
- [ ] Mobile breakpoint (≤767px) stacks segments vertically
- [ ] Mobile gets padding and input border
- [ ] All interactive elements keyboard-focusable
- [ ] Aria-labels on dropdown, input, and button
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
