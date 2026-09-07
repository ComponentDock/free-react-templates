# Template: TealPick (Multiselect Dropdown)

## Purpose

Recreation of ColorLib Multiselect 13
(https://colorlib.com/wp/template/multiselect-13/).

Preview URL: https://preview.colorlib.com/theme/bootstrap/multiselect-13/

A modern multiselect dropdown snippet with square corners, teal green accent,
and name-based options. Select2-style UI with live search, tag pills, and
comma-separated display.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from the ColorLib preview CSS (css/style.css):

- Font family: `"Roboto", sans-serif` (weights 300, 400, 500)
- Body background: `#efefef` (light gray)
- Text color: `#b3b3b3` (muted gray, paragraph text)
- Heading color: `#212529` (default Bootstrap dark)
- Accent / brand: `#29c7ac` (teal green)
- Selected option highlight: `#29c7ac` with white text
- Selected option (in list): `#f4f4f4` background
- Tag (choice) background: `#29c7ac` (teal green)
- Tag text color: `#fff` (white)
- Tag remove button color: `rgba(255,255,255,0.5)`
- Border-radius: `0px` (square/sharp corners on all elements)
- Dropdown shadow: `0 15px 30px 0 rgba(0,0,0,0.2)`
- Dropdown border: none (shadow only)
- Form control border-radius: `0 !important`
- Content padding: `7rem 0`

## Sections (in order)

1. **Page wrapper** — full-viewport centered layout, `#efefef` background
2. **Heading** — "Multi-Select #3" centered, `h2` 20px Roboto
3. **Instruction text** — "Names separate with comma ','" centered below heading
4. **Dropdown container** — 7-column centered, contains:
   - Select2-style multiselect input with live search
   - Dropdown panel (borderless, square corners, shadow)
   - Tag pills for selected items (teal green bg, white text, remove button)
   - Option list with highlight on hover (`#29c7ac`)
5. **Footer** — "Made with Component Dock" link

## Scenarios

### Rendering

- Given the page loads
- Then the heading "Multi-Select #3" is visible
- And the instruction text "Names separate with comma ','" is visible
- And a multiselect dropdown input is visible
- And the dropdown shows placeholder text

### Opening the dropdown

- Given the dropdown is closed
- When the user clicks the dropdown input
- Then the options list appears
- And options include "Joefrey", "Robert", "Jorge", "Mark", "Luke", "John", "James", "Ryan", "Ronnie"

### Selecting an option

- Given the dropdown is open
- When the user clicks "Joefrey"
- Then a teal green tag pill labeled "Joefrey" appears
- And the selected count is reflected in the input

### Multi-selection

- Given one option is selected
- When the user clicks another option
- Then both tag pills are visible
- And both items appear as selected

### Deselecting an option

- Given "Joefrey" is selected
- When the user clicks the remove button on the "Joefrey" tag
- Then the "Joefrey" tag is removed
- And "Joefrey" returns to the option list as unselected

### Live search filtering

- Given the dropdown is open
- When the user types "rob" in the search field
- Then only "Robert" is shown in the filtered list
- When the user clears the search field
- Then all options are visible again

### Keyboard navigation

- Given the dropdown is open
- When the user presses ArrowDown
- Then focus moves to the next option
- When the user presses Enter
- Then the focused option is selected

### Closing the dropdown

- Given the dropdown is open
- When the user clicks outside the dropdown
- Then the dropdown closes

### Footer

- Given the page loads
- Then the footer shows "Made with Component Dock"
- And the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] Page renders with #efefef background
- [ ] Heading uses Roboto font, 20px
- [ ] All elements have border-radius: 0 (square corners)
- [ ] Selected tags use #29c7ac teal green background
- [ ] Dropdown shadow: 0 15px 30px rgba(0,0,0,0.2)
- [ ] Options include all 9 names
- [ ] Live search filters options correctly
- [ ] Tags can be removed individually
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Coverage: 100% lines/functions/branches/statements
