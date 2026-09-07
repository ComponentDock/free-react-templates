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

## Requirements

### Requirement: Page renders with correct layout and heading

The template SHALL render a centered page with a gray background, a heading
"Multi-Select #3", and instruction text.

#### Scenario: Page loads with heading and instruction

- **WHEN** the page loads
- **THEN** the heading "Multi-Select #3" is visible
- **AND** the instruction text "Names separate with comma ','" is visible
- **AND** the page background is `#efefef`

### Requirement: Multiselect dropdown shows name options

The multiselect dropdown SHALL display a list of name options when opened.

#### Scenario: Opening the dropdown

- **WHEN** the user clicks the dropdown input
- **THEN** the options list appears
- **AND** options include "Joefrey", "Robert", "Jorge", "Mark", "Luke", "John", "James", "Ryan", "Ronnie"

### Requirement: Selecting an option creates a tag pill

When a user selects an option, a teal green tag pill SHALL appear.

#### Scenario: Selecting an option

- **WHEN** the user clicks "Joefrey" in the open dropdown
- **THEN** a teal green tag pill labeled "Joefrey" appears
- **AND** the option shows as selected

### Requirement: Multiple selections are supported

The dropdown SHALL support selecting multiple options simultaneously.

#### Scenario: Multi-selection

- **WHEN** one option is selected
- **AND** the user clicks another option
- **THEN** both tag pills are visible

### Requirement: Deselecting via tag remove button

A selected option SHALL be deselectable by clicking the remove button on its tag.

#### Scenario: Deselecting an option

- **WHEN** "Joefrey" is selected
- **AND** the user clicks the remove button on the "Joefrey" tag
- **THEN** the "Joefrey" tag is removed
- **AND** "Joefrey" returns to the option list as unselected

### Requirement: Live search filters options

The search input SHALL filter options by matching against option labels.

#### Scenario: Live search filtering

- **WHEN** the dropdown is open
- **AND** the user types "rob" in the search field
- **THEN** only "Robert" is shown in the filtered list
- **WHEN** the user clears the search field
- **THEN** all options are visible again

### Requirement: Keyboard navigation

The dropdown SHALL support keyboard navigation.

#### Scenario: Keyboard navigation

- **WHEN** the dropdown is open
- **AND** the user presses ArrowDown
- **THEN** focus moves to the next option
- **WHEN** the user presses Enter
- **THEN** the focused option is selected

### Requirement: Closing the dropdown

The dropdown SHALL close when the user clicks outside or presses Escape.

#### Scenario: Closing on click outside

- **WHEN** the dropdown is open
- **AND** the user clicks outside the dropdown
- **THEN** the dropdown closes

### Requirement: Footer links to Component Dock

The footer SHALL link to Component Dock.

#### Scenario: Footer renders correctly

- **WHEN** the page loads
- **THEN** the footer shows "Made with Component Dock"
- **AND** the footer links to https://www.componentdock.com/

### Requirement: Accessibility

The dropdown SHALL be accessible with proper ARIA attributes.

#### Scenario: ARIA attributes

- **WHEN** the dropdown is closed
- **THEN** the combobox has `aria-expanded="false"`
- **WHEN** the dropdown is opened
- **THEN** the combobox has `aria-expanded="true"`
- **AND** the listbox has `aria-multiselectable="true"`
- **AND** each option has `aria-selected`
