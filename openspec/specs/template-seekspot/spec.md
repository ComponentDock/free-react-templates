# Template: SeekSpot (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form Bar 10" — a standalone search form bar
widget. Features a centered title heading and a pill-shaped search input with
a soft pink/lavender background, paired with a circular pink/magenta button
containing an "X" (clear/close) icon. The circular button overlaps the right
edge of the pill container for a distinctive layered aesthetic.

- **Source:** https://colorlib.com/wp/template/search-form-bar-10/
- **Preview (archived):** https://preview.colorlib.com/theme/search-form-bar-10/ — returned 404
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-10.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from the screenshot analysis (preview CSS unavailable).

| Token                  | Value                                          |
| ---------------------- | ---------------------------------------------- |
| Font family            | `'Montserrat', sans-serif` (weight 400–600)   |
| Page background        | `#f5f5f5` (light gray)                         |
| Layout                 | Full viewport, flexbox centered, vertical       |
| Title text color       | `#333333` (dark gray)                          |
| Title font size        | `24px` (desktop)                               |
| Title font weight      | `600` (semibold)                               |
| Title margin           | `0 0 30px` (bottom margin to search bar)       |
| Input pill background  | `#dfb8e0` (soft pink/lavender)                 |
| Input pill radius      | `50px` (fully rounded / pill shape)            |
| Input pill height      | `50px`                                         |
| Input pill width       | `280px`                                        |
| Input pill padding     | `0 55px 0 20px` (left text padding, right for button overlap) |
| Input background       | `transparent` (shows pill color through)       |
| Input text color       | `#666666` (medium gray)                        |
| Input placeholder color| `#999999` (light gray)                         |
| Input font size        | `14px`                                         |
| Button background      | `#c96eb5` (darker pink/magenta)               |
| Button hover bg        | `#b55ea1` (darker shade)                       |
| Button shape           | Circle, `50px × 50px`                          |
| Button position        | Absolute right, overlapping pill edge (~8px right of pill center) |
| Button icon            | White "X" (close/clear), 18px                  |
| Button transition      | `background-color 0.2s ease`                   |
| Button shadow          | `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`       |
| Focus ring             | `outline: 2px solid #c96eb5` on input focus    |

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

### Requirement: Pill-shaped search input

The search form SHALL contain a pill-shaped input container with a soft pink/lavender background.

#### Scenario: Input renders with placeholder

- **WHEN** the page loads
- **THEN** a text input is visible with placeholder text "Search..."
- **AND** the input container has a soft pink/lavender background (#dfb8e0)
- **AND** the container is fully rounded (pill shape, border-radius 50px)

#### Scenario: Input focus state

- **WHEN** the user clicks/focuses the search input
- **THEN** the input receives a visible focus ring (outline in brand pink)
- **AND** no box-shadow appears on the input

### Requirement: Circular clear button

The search form SHALL contain a circular pink/magenta button with a white "X" icon, positioned to overlap the right edge of the pill input.

#### Scenario: Button renders

- **WHEN** the page loads
- **THEN** a circular button is visible
- **AND** the button background is pink/magenta (#c96eb5)
- **AND** the button contains a white "X" icon
- **AND** the button is 50px × 50px (circular)

#### Scenario: Button overlaps pill edge

- **WHEN** the page loads
- **THEN** the circular button is positioned at the right side of the pill
- **AND** the button overlaps the pill's right edge (positioned partially outside the pill)

#### Scenario: Button hover

- **WHEN** the user hovers over the circular button
- **THEN** the button background darkens (#b55ea1)
- **AND** the transition is smooth (0.2s ease)

### Requirement: Search bar alignment

The pill input and circular button SHALL be vertically aligned, with the button centered on the pill's right edge.

#### Scenario: Input and button alignment

- **WHEN** the page loads
- **THEN** the circular button's vertical center aligns with the pill's vertical center
- **AND** the pill has horizontal padding to accommodate the overlapping button

### Requirement: Responsive behavior

The search bar SHALL maintain its layout on smaller screens.

#### Scenario: Mobile view

- **WHEN** the viewport width is 480px or less
- **THEN** the search bar remains horizontally centered
- **AND** the pill width adapts to fit the viewport (max-width constraint)
- **AND** the circular button remains flush to the pill's right edge

### Requirement: Accessibility

The search form SHALL be accessible via keyboard and screen readers.

#### Scenario: Keyboard navigation

- **WHEN** the user presses Tab
- **THEN** focus moves to the search input
- **AND** pressing Tab again moves focus to the circular button
- **AND** pressing Enter or Space on the button triggers the clear action

#### Scenario: Screen reader labels

- **WHEN** a screen reader announces the input
- **THEN** it is described as a search input (aria-label or associated label)
- **AND** the button is described as "Clear search" or similar

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
- [ ] Pill input: pink/lavender bg (#dfb8e0), fully rounded, placeholder "Search..."
- [ ] Circular button: pink/magenta (#c96eb5), white "X" icon, 50×50px
- [ ] Button overlaps pill's right edge
- [ ] Button hover darkens to #b55ea1 with smooth transition
- [ ] Input focus ring in brand pink
- [ ] Responsive: centered on mobile, pill width adapts
- [ ] Keyboard: Tab navigates input → button → footer
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
