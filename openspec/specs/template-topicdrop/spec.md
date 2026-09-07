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

## Requirements

### Requirement: Page renders heading, label, and dropdown

Users SHALL see a centered "Topic Selector" heading, a "Select Topics" label,
and a dropdown trigger showing placeholder text when the page loads.

#### Scenario: Initial page load

- **WHEN** the page loads
- **THEN** the heading "Topic Selector" is visible
- **AND** a "Select Topics" label is visible
- **AND** the dropdown trigger is visible showing "Select Topics" placeholder

### Requirement: Dropdown opens and shows all options

Users SHALL be able to open the dropdown by clicking the trigger, revealing
all 10 topic options.

#### Scenario: Opening the dropdown

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the trigger
- **THEN** the dropdown panel opens
- **AND** the trigger shows aria-expanded=true
- **AND** all 10 options are visible

### Requirement: Users can select and deselect options

Users SHALL be able to select multiple options and deselect them by clicking
again. The selected count SHALL update accordingly.

#### Scenario: Selecting an option

- **GIVEN** the dropdown is open
- **WHEN** the user clicks an option (e.g. "Family")
- **THEN** the checkbox for that option is checked
- **AND** the selected count updates to show "1 item selected"
- **AND** the dropdown stays open for further selection

#### Scenario: Selecting multiple options

- **GIVEN** the dropdown is open
- **WHEN** the user selects "Family" and "Friends"
- **THEN** both checkboxes are checked
- **AND** the selected count shows "2 items selected"

#### Scenario: Deselecting an option

- **GIVEN** "Family" is selected
- **WHEN** the user clicks "Family" again
- **THEN** the checkbox is unchecked
- **AND** the selected count updates

### Requirement: Keyboard navigation

Users SHALL be able to navigate and select options using keyboard shortcuts.

#### Scenario: Keyboard navigation

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown
- **THEN** focus moves to the next option
- **WHEN** the user presses Enter
- **THEN** the focused option is toggled (selected/deselected)
- **WHEN** the user presses Escape
- **THEN** the dropdown closes

### Requirement: Click outside closes dropdown

Users SHALL be able to close the dropdown by clicking outside of it.

#### Scenario: Click outside to close

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown closes

### Requirement: Accessibility

The dropdown SHALL have appropriate ARIA attributes for screen readers.

#### Scenario: Accessibility attributes

- **GIVEN** the page loads
- **THEN** the dropdown trigger has aria-expanded attribute
- **AND** each option has role="option"
- **AND** the dropdown has appropriate aria attributes

### Requirement: Footer links to Component Dock

The page footer SHALL contain a "Made with Component Dock" link to
https://www.componentdock.com/.

#### Scenario: Footer

- **GIVEN** the page loads
- **THEN** the footer shows "Made with Component Dock"
- **AND** the footer links to https://www.componentdock.com/

## Verification Checklist

- [x] Spec reviewed against preview DOM and CSS tokens
- [x] Section order matches original: heading → label → dropdown → count → footer
- [x] Brand color `#e8647c` is used as the accent throughout
- [x] Font Lato is loaded via Google Fonts
- [x] All 10 options present: Family, Family Law, Friends, Co-workers, Startup, Work, Basketball, Baseball, Investors, US Embassy
- [x] Dropdown supports multiple selection
- [x] Keyboard navigation works (ArrowDown, ArrowUp, Enter, Escape)
- [x] Click outside closes dropdown
- [x] Footer links to Component Dock
- [x] No ColorLib references in app code (provenance only in spec)
- [x] Placeholder images: N/A (no images in this template)
