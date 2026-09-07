# Template: TopicDrop (Bootstrap Multiselect — Pink Accent)

## Purpose

Recreation of ColorLib "Multiselect 07"
(https://colorlib.com/wp/template/multiselect-07/).
Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-07/

A clean, centered multi-select dropdown component for choosing topics from a
list. The original uses Semantic UI's styled multi-select with a Lato font
and a minimalist layout on a white background with a pink/rose accent
(#e8647c). This recreation uses a custom React multi-select dropdown with
checkbox-style selection, keyboard navigation, and accessibility, styled with
Tailwind CSS 4 and matching the original's design tokens.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Source mapping

- **ColorLib source:** Multiselect 07
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-07/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-07.jpg
- **New name:** topicdrop (NOT multiselect, NOT any existing name)

## Design Tokens

Extracted from the preview's `css/style.css` and Semantic UI CSS:

- **Font:** Lato (weights 300, 400, 700) — loaded via Google Fonts
- **Page background:** `#fff` (white)
- **Brand / accent color:** `#e8647c` (pink/rose) — used for:
  - `.bg-primary` background
  - Dropdown active border color
  - Dropdown active menu background
  - Label background
  - Link color (`a { color: #e8647c }`)
  - Active dropdown text color
- **Dropdown item border (menu):** `#ef90a2` (lighter pink)
- **Dropdown item hover:** white background, `#e8647c` text
- **Body text color:** `gray`
- **Heading color:** `#000`
- **Border radius:** `4px` (dropdown)
- **Shadow (active dropdown):** `0px 3px 19px -15px rgba(0,0,0,0.41)`
- **Font awesome 4.7** used for checkbox icons in the original (we replace with
  lucide-react check icons)

## Sections (in order)

1. **Heading** — centered `<h2>` with text "Topic Selector" (paraphrased from
   "Multiselect #07"), Lato font, 28px, black text
2. **Label** — "Select Topics" label above the dropdown
3. **Multi-select dropdown** — a styled select component supporting multiple
   selection:
   - Trigger showing placeholder "Select Topics" or selected count
   - Dropdown panel with options list
   - Each option has a checkbox indicator (circle icon in original, we use
     lucide-react CheckSquare / Square)
   - Options: Family, Family Law, Friends, Co-workers, Startup, Work,
     Basketball, Baseball, Investors, US Embassy
4. **Selected count** — shows below the dropdown when items are selected
5. **Footer** — "Made with Component Dock" link (required by conventions)

## Scenarios

### Rendering

- Given the page loads
- Then the heading "Topic Selector" is visible
- And a "Select Topics" label is visible
- And the dropdown trigger is visible showing "Select Topics" placeholder

### Opening the dropdown

- Given the dropdown is closed
- When the user clicks the trigger
- Then the dropdown panel opens
- And the trigger shows aria-expanded=true
- And all 10 options are visible

### Selecting an option

- Given the dropdown is open
- When the user clicks an option (e.g. "Family")
- Then the checkbox for that option is checked
- And the selected count updates to show "1 selected"
- And the dropdown stays open for further selection

### Selecting multiple options

- Given the dropdown is open
- When the user selects "Family" and "Friends"
- Then both checkboxes are checked
- And the selected count shows "2 selected"

### Deselecting an option

- Given "Family" is selected
- When the user clicks "Family" again
- Then the checkbox is unchecked
- And the selected count updates

### Keyboard navigation

- Given the dropdown is open
- When the user presses ArrowDown
- Then focus moves to the next option
- When the user presses Enter
- Then the focused option is toggled (selected/deselected)
- When the user presses Escape
- Then the dropdown closes

### Click outside to close

- Given the dropdown is open
- When the user clicks outside the dropdown
- Then the dropdown closes

### Accessibility

- Given the page loads
- Then the dropdown trigger has aria-expanded attribute
- And each option has role="option"
- And the dropdown has appropriate aria attributes

### Footer

- Given the page loads
- Then the footer shows "Made with Component Dock"
- And the footer links to https://www.componentdock.com/

## Verification Checklist

- [ ] Spec reviewed against preview DOM and CSS tokens
- [ ] Section order matches original: heading → label → dropdown → count → footer
- [ ] Brand color `#e8647c` is used as the accent throughout
- [ ] Font Lato is loaded via Google Fonts
- [ ] All 10 options present: Family, Family Law, Friends, Co-workers, Startup, Work, Basketball, Baseball, Investors, US Embassy
- [ ] Dropdown supports multiple selection
- [ ] Keyboard navigation works (ArrowDown, ArrowUp, Enter, Escape)
- [ ] Click outside closes dropdown
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images: N/A (no images in this template)
