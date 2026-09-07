# Template: Pickwise (Dark Multiselect Dropdown)

## Purpose

Recreation of the ColorLib **Multiselect 09** template.

- **Source slug:** `multiselect-09`
- **Source URL:** https://colorlib.com/wp/template/multiselect-09/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-09/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-09.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Original stack:** Bootstrap 4.3.1 + Select2 4.0.4 + jQuery
- **Description:** A dark-themed multiselect dropdown widget with golden-yellow accent chips, checkbox selection indicators, and a black dropdown panel. Single focused section — no header, no footer, just the widget centered on screen.

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| `brand` | `#f6c523` | Golden-yellow accent — links, selected chips, checked checkboxes |
| `surface` | `#343434` | Page background (dark gray) |
| `surface-alt` | `#000` | Dropdown panel / selected option background |
| `surface-input` | `rgba(0, 0, 0, 0.8)` | Multiselect input field background |
| `text-primary` | `#fff` | Heading text |
| `text-body` | `gray` | Body / option text |
| `text-muted` | `rgba(255, 255, 255, 0.8)` | Placeholder / search field text |
| `border-subtle` | `rgba(255, 255, 255, 0.18)` | Checkbox border, input focus border |
| `font-family` | `"Lato", Arial, sans-serif` | Load Lato via Google Fonts |
| `font-weight` | `400` (normal) | Body text |
| `heading-weight` | `400` (normal) | Headings |
| `line-height` | `1.8` | Body text |
| `border-radius` | `4px` | Dropdown panel, checkbox indicators |
| `shadow` | `0px 3px 22px -15px rgba(0, 0, 0, 0.63)` | Dropdown / chip container elevation |
| `section-padding` | `7em 0` | Vertical section spacing |

### Tailwind theme mapping

```css
@theme {
  --color-brand: #f6c523;
  --color-surface: #343434;
  --color-surface-alt: #000000;
  --font-family-display: "Lato", Arial, sans-serif;
}
```

## Visual design (from screenshot)

The template shows:
1. A single centered section on a **dark gray (#343434) background**
2. A **white heading** "Multiselect #09" centered at the top
3. A **Select2 multiselect widget** centered below the heading:
   - Dark input field with placeholder text (rgba white, 0.8 opacity)
   - When opened, a **black dropdown panel** with rounded corners (4px) and a box-shadow
   - Each option row has a **custom checkbox indicator** (2px solid rgba white border, 4px radius)
   - When selected, the checkbox turns **golden-yellow (#f6c523)** with a checkmark icon
   - Selected rows have **black background with golden-yellow text**
   - Hovered rows show **rgba white (0.1) background**
4. Selected items appear as **golden-yellow chips/badges** inside the input field with black text
5. Each chip has a small **remove "×" button** (black text)

## Gherkin scenarios

### Scenario: Page renders with centered heading

```gherkin
Given the user visits the Pickwise page
Then a heading "Multiselect #09" is visible
And the heading is centered horizontally
And the heading text is white
```

### Scenario: Multiselect dropdown renders with options

```gherkin
Given the user visits the Pickwise page
Then a multiselect dropdown is visible
And the dropdown contains 13 options: Option1 through Option13
And the dropdown has a dark background
And the dropdown displays placeholder text
```

### Scenario: Opening the dropdown shows the option list

```gherkin
Given the user visits the Pickwise page
When the user clicks the multiselect dropdown
Then a dropdown panel opens below the input
And the dropdown panel has a black background
And the dropdown panel has rounded corners
And the dropdown panel has a box shadow
```

### Scenario: Selecting an option adds a chip

```gherkin
Given the user visits the Pickwise page
When the user clicks the multiselect dropdown
And the user clicks "Option1"
Then "Option1" appears as a golden-yellow chip in the input
And the chip has black text
And the chip has a remove button
```

### Scenario: Deselecting an option removes the chip

```gherkin
Given "Option1" is selected in the multiselect
When the user clicks the remove button on the "Option1" chip
Then the "Option1" chip is removed from the input
And "Option1" is no longer selected
```

### Scenario: Multiple options can be selected

```gherkin
Given the user visits the Pickwise page
When the user selects "Option1" and "Option3"
Then both "Option1" and "Option3" appear as chips
And both chips are golden-yellow
```

### Scenario: Checkbox indicators update on selection

```gherkin
Given the dropdown is open
Then each option shows an empty checkbox indicator
When the user selects "Option2"
Then the checkbox for "Option2" shows a golden-yellow filled state with a checkmark
```

### Scenario: Hover state on dropdown options

```gherkin
Given the dropdown is open
When the user hovers over an unselected option
Then the option row shows a subtle white overlay background
```

### Scenario: Focus state on the multiselect

```gherkin
Given the user visits the Pickwise page
When the user focuses the multiselect input
Then the input shows a subtle border
```

### Scenario: Responsive layout

```gherkin
Given the user visits the Pickwise page on a mobile viewport
Then the heading and dropdown remain centered
And the dropdown width adapts to the container
```

## Verification checklist

- [ ] Page background is `#343434`
- [ ] Heading "Multiselect #09" is white, centered, using Lato font
- [ ] Lato font loaded from Google Fonts
- [ ] Multiselect input has dark background (`rgba(0, 0, 0, 0.8)`)
- [ ] Dropdown panel has black background, 4px border-radius, box-shadow
- [ ] Custom checkbox indicators (2px border, 4px radius) replace native checkboxes
- [ ] Selected checkboxes are golden-yellow (#f6c523) with checkmark
- [ ] Selected option rows have black background with golden-yellow text
- [ ] Selected chips are golden-yellow with black text and remove button
- [ ] Hover state shows subtle white overlay on option rows
- [ ] Focus state shows subtle border on input
- [ ] 13 options (Option1–Option13) available
- [ ] Responsive: works on mobile viewport
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
