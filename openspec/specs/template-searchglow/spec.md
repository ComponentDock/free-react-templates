# Template: SearchGlow (Search Form)

## Purpose

Recreation of ColorLib "Colorlib Search Form V22" — a standalone search bar
widget overlaid on a photographic background image. Features a single input
field with a large magnifying glass icon on the left, transparent background,
white text, and a semi-transparent white bottom border that brightens on focus.

- **Source:** https://colorlib.com/wp/template/colorlib-search-22/
- **Preview (archived):** https://preview.colorlib.com/theme/colorlib-search-22/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-search-form-22.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the downloaded template's CSS.

| Token                       | Value                                                                                   |
| --------------------------- | --------------------------------------------------------------------------------------- |
| Font family                 | `'Montserrat', sans-serif` (weight 500)                                                 |
| Page background             | Full-viewport background image, `background-size: cover`, `background-position: center` |
| Layout                      | Full viewport, flexbox centered, `padding: 15px`                                        |
| Form max-width              | `390px`                                                                                 |
| Input container height      | `80px` (desktop), `50px` (mobile)                                                       |
| Input background            | `transparent`                                                                           |
| Input border                | `border-bottom: 2px solid rgba(255, 255, 255, 0.5)` (semi-transparent white)            |
| Input border on focus/hover | `border-bottom-color: #fff` (solid white)                                               |
| Input text color            | `#fff` (white)                                                                          |
| Input font size             | `18px` (desktop), `16px` (mobile)                                                       |
| Input padding               | `10px 32px 10px 70px` (desktop), `10px 16px 10px 45px` (mobile)                         |
| Placeholder color           | `#fff` (white)                                                                          |
| Search icon button          | Absolute left, `width: 70px`, transparent bg, `height: 100%`                            |
| Search icon SVG             | `fill: #fff`, `50×50px` (desktop), `36×36px` (mobile)                                   |
| Input focus state           | `box-shadow: none`, `outline: 0`, bottom border turns solid white                       |
| Transition                  | `all .2s ease-out, color .2s ease-out`                                                  |

## Requirements

### Requirement: Full viewport background

The page SHALL display a full-viewport photographic background image that covers the entire viewport, centered, with the search form overlaid on top.

#### Scenario: Background image covers viewport

- **WHEN** the page loads
- **THEN** the page has a full-viewport background image
- **AND** the background image covers the entire viewport
- **AND** the background is centered

### Requirement: Centered search form

The search form SHALL be centered vertically and horizontally on the page with a max-width of approximately 390px.

#### Scenario: Form is centered on page

- **WHEN** the page loads
- **THEN** a form is centered vertically and horizontally
- **AND** the form has a max-width of approximately 390px

### Requirement: Search input default state

The search input SHALL display with a transparent background, white text, white placeholder, and a semi-transparent white bottom border at approximately 80px height.

#### Scenario: Input renders with correct styling

- **WHEN** the page loads
- **THEN** a single search input is displayed
- **AND** the input has a transparent background
- **AND** the input text color is white
- **AND** the placeholder text is "What are you looking for?" in white
- **AND** the input has a semi-transparent white bottom border (2px, 50% opacity)
- **AND** the input height is approximately 80px

### Requirement: Search icon

A white magnifying glass icon SHALL be displayed on the left side of the input, approximately 50×50px, absolutely positioned within the input container.

#### Scenario: Icon renders correctly

- **WHEN** the page loads
- **THEN** a white magnifying glass icon is displayed on the left side of the input
- **AND** the icon is approximately 50×50px
- **AND** the icon is absolutely positioned within the input container

### Requirement: Focus and hover states

The input's bottom border SHALL become solid white on focus and hover, with no outline or box-shadow.

#### Scenario: Focus state changes border

- **WHEN** the user clicks on the search input
- **THEN** the bottom border becomes solid white (full opacity)
- **AND** the input shows no outline and no box-shadow

#### Scenario: Hover state changes border

- **WHEN** the user hovers over the search input
- **THEN** the bottom border becomes solid white

### Requirement: Responsive mobile layout

On screens narrower than 768px, the input height SHALL reduce to approximately 50px, the icon scales down to 36×36px, and the font size reduces to 16px.

#### Scenario: Mobile layout adapts

- **WHEN** the page is viewed on a screen narrower than 768px
- **THEN** the input height reduces to approximately 50px
- **AND** the input left padding reduces to accommodate smaller icon
- **AND** the font size reduces to 16px
- **AND** the search icon scales down to approximately 36×36px

### Requirement: Keyboard and screen reader accessibility

The search input SHALL be focusable via keyboard with focus-visible styling, and SHALL have appropriate aria-labels for screen readers.

#### Scenario: Keyboard navigation works

- **WHEN** the page loads
- **THEN** the search input is focusable via keyboard
- **AND** focus-visible styling is applied

#### Scenario: Screen reader labels present

- **WHEN** the page loads
- **THEN** the input has an appropriate aria-label
- **AND** the search icon button has an aria-label

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"
