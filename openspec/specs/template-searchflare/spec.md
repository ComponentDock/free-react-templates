# Template: SearchFlare (Search Form Bar)

## Purpose

Recreation of ColorLib "Search Form Bar 03" — a minimal standalone search bar
component with a circular coral/red search icon button on the left and a
pill-shaped text input field. The entire component sits centered on a plain
white background.

- **Source:** https://colorlib.com/wp/template/search-form-bar-03/
- **Preview:** https://preview.colorlib.com/theme/search-form-bar-03/ — returned 404 (unreachable)
- **Fallback reference:** screenshot at https://colorlib.com/wp/wp-content/uploads/sites/2/search-form-bar-03.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from screenshot visual analysis (preview unreachable).

| Token                       | Value                                                |
| --------------------------- | ---------------------------------------------------- |
| Font family                 | System/sans-serif (clean, no decorative font)        |
| Page background             | `#f9f9f9` or white (very light gray/white)           |
| Search bar background       | `#fff` (white) or transparent                        |
| Search bar border           | Subtle — thin light gray border around input area     |
| Search icon button color    | `#e74c3c` / `#f05a47` (coral/red)                   |
| Search icon button shape    | Perfect circle, ~40px diameter                        |
| Search icon color           | `#fff` (white) inside the circle                     |
| Input text color            | `#999` / `#aaa` (gray placeholder)                   |
| Input font size             | ~14–16px                                              |
| Input padding               | Horizontal padding inside the pill                    |
| Border radius               | Rounded pill shape (~20–25px)                         |
| Layout                      | Centered horizontally on page, single row            |
| Max-width                   | ~400px for the search bar                             |

### Screenshot visual notes

The screenshot shows a clean, minimal search form centered in the viewport on a
plain white/light gray background. At the top center is the heading
"Search Form/Bar #03" in a dark sans-serif font. Below it is the search bar:
a horizontal pill-shaped container with a circular coral/red button on the left
containing a white magnifying glass icon, followed by a text input with
placeholder text "Search...". The overall aesthetic is extremely minimal and
clean — no sections, no footer, no complex layout. Just the heading and the
search bar widget.

## Requirements

### Requirement: Centered heading

The page SHALL display a heading "Search Form/Bar #03" centered at the top of the viewport.

#### Scenario: Heading renders

- **WHEN** the page loads
- **THEN** a heading is displayed centered at the top
- **AND** the heading text is "Search Form/Bar #03"
- **AND** the heading uses a dark color (#333 or similar)

### Requirement: Circular search icon button

The search bar SHALL include a circular coral/red button on the left with a white magnifying glass icon.

#### Scenario: Search button renders

- **WHEN** the page loads
- **THEN** a circular button is displayed on the left of the search bar
- **AND** the button background color is coral/red (~#e74c3c or #f05a47)
- **AND** the button is perfectly circular (~40px diameter)
- **AND** the button contains a white magnifying glass icon
- **AND** the button has a subtle shadow

#### Scenario: Search button hover state

- **WHEN** the user hovers over the search button
- **THEN** the button provides visual feedback (slight color change or shadow increase)

### Requirement: Text search input

The search bar SHALL include a text input with "Search..." placeholder text, styled as a rounded pill.

#### Scenario: Input renders with placeholder

- **WHEN** the page loads
- **THEN** a text input is displayed to the right of the search button
- **AND** the input placeholder text is "Search..."
- **AND** the input has a rounded/pill border-radius
- **AND** the input text color is a light gray placeholder style

### Requirement: Search bar layout

The search bar SHALL be displayed as a horizontal container centered on the page, with the circular button on the left and the text input filling the remaining space.

#### Scenario: Horizontal layout

- **WHEN** the page loads
- **THEN** the search bar is centered horizontally on the page
- **AND** the search bar displays in a single horizontal row
- **AND** the circular button is on the left
- **AND** the text input extends to the right of the button
- **AND** the search bar has a max-width of approximately 400px

### Requirement: Responsive behavior

The search bar SHALL remain centered and functional on mobile screens.

#### Scenario: Mobile layout

- **WHEN** the page is viewed on a screen narrower than 480px
- **THEN** the search bar scales down appropriately
- **AND** the search bar remains centered

### Requirement: Keyboard and screen reader accessibility

All interactive elements SHALL be focusable via keyboard with visible focus indicators, and SHALL have appropriate aria-labels.

#### Scenario: Keyboard navigation works

- **WHEN** the page loads
- **THEN** the text input is focusable via keyboard
- **AND** the search button is focusable via keyboard
- **AND** focus-visible styling is applied to each

#### Scenario: Screen reader labels present

- **WHEN** the page loads
- **THEN** the text input has an appropriate aria-label
- **AND** the search button has an aria-label (e.g. "Search")

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a link to https://www.componentdock.com/ labeled "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"

## Verification checklist

- [ ] Heading "Search Form/Bar #03" centered at top
- [ ] Circular coral/red search button with white magnifying glass icon
- [ ] Button is perfectly circular with subtle shadow
- [ ] Text input with "Search..." placeholder
- [ ] Input has rounded/pill border-radius
- [ ] Search bar centered horizontally on page
- [ ] Horizontal layout (button left, input right)
- [ ] Search bar max-width ~400px
- [ ] Responsive on mobile
- [ ] All interactive elements keyboard-focusable
- [ ] Aria-labels on input and button
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
