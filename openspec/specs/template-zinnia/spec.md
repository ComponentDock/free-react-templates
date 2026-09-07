# Template: Zinnia (Multiselect Dropdown)

## Purpose

Recreation of ColorLib Multiselect 12
(https://colorlib.com/wp/template/multiselect-12/).

Preview URL: https://preview.colorlib.com/theme/bootstrap/multiselect-12/

A modern multiselect dropdown snippet built with Select2-style UI.
Users can select multiple items from a list of US states, with live search
filtering, tag-style selection indicators, and comma-separated display.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design Tokens

Extracted from the ColorLib preview CSS (css/style.css):

- Font family: `"Roboto", sans-serif` (weights 300, 400, 500)
- Body background: `#efefef` (light gray)
- Text color: `#b3b3b3` (muted gray, paragraph text)
- Heading color: `#212529` (default Bootstrap dark)
- Accent / brand: `#f67280` (coral pink)
- Selected option highlight: `#f67280` with white text
- Selected option (in list): `#f4f4f4` background
- Tag (choice) background: `#f67280` (coral pink)
- Tag text color: `#fff` (white)
- Tag remove button color: `rgba(255,255,255,0.5)`
- Dropdown border-radius: `7px`
- Dropdown shadow: `0 15px 30px 0 rgba(0,0,0,0.2)`
- Dropdown border: none (shadow only)
- Selected tag border-color: `rgba(246, 114, 128, 0.2)`
- Content padding: `7rem 0`

## Sections (in order)

1. **Page wrapper** — full-viewport centered layout, `#efefef` background
2. **Heading** — "Multi-Select #2" centered, `h2` 20px Roboto
3. **Instruction text** — "State separate with comma ','" centered below heading
4. **Dropdown container** — 7-column centered, contains:
   - Select2-style multiselect input with live search
   - Dropdown panel (borderless, rounded 7px, shadow)
   - Tag pills for selected items (coral pink bg, white text, remove button)
   - Option list with highlight on hover (`#f67280`)
5. **Footer** — "Made with Component Dock" link

## Scenarios

### Rendering

- Given the page loads
- Then the heading "Multi-Select #2" is visible
- And the instruction text "State separate with comma ','" is visible
- And a multiselect dropdown input is visible
- And the dropdown shows placeholder text

### Opening the dropdown

- Given the dropdown is closed
- When the user clicks the dropdown input
- Then the options list appears
- And options include "Alaska", "Hawaii", "California", "Nevada", "Oregon", "Washington", "Alabama", "Utah"

### Selecting an option

- Given the dropdown is open
- When the user clicks "Alaska"
- Then a coral pink tag pill labeled "Alaska" appears
- And the selected count is reflected in the input

### Multi-selection

- Given one option is selected
- When the user clicks another option
- Then both tag pills are visible
- And both items appear as selected

### Deselecting an option

- Given "Alaska" is selected
- When the user clicks the remove button on the "Alaska" tag
- Then the "Alaska" tag is removed
- And "Alaska" returns to the option list as unselected

### Live search filtering

- Given the dropdown is open
- When the user types "cal" in the search field
- Then only "California" is shown in the filtered list
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
- [ ] Dropdown has 7px border-radius
- [ ] Selected tags use #f67280 coral pink background
- [ ] Dropdown shadow: 0 15px 30px rgba(0,0,0,0.2)
- [ ] Options include all 8 US states
- [ ] Live search filters options correctly
- [ ] Tags can be removed individually
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Coverage: 100% lines/functions/branches/statements
