# Template: Groupcap (Multi-Select Form — Per-Group Selection Limits)

## Purpose

Groupcap is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 18"
free template (source: https://colorlib.com/wp/template/multiselect-18/),
built under a DIFFERENT name (**Groupcap**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap Select plugin (`bootstrap-select.min.js` +
jQuery 3.3.1 + Bootstrap 4) rendered on a light-grey page: a centered
`col-md-5` container with a single `<select multiple>` element containing
50 US state options organized into 4 `<optgroup>` groups, each with its
own per-group selection limit via `data-max-options`. The page title is
"Multi Select #8". The design is minimal — a centered heading
("Multi-Select #8 (Limit selection on groups)") and a functional multi-select
checkbox dropdown widget with grouped options and per-group caps.

## Requirements

### Requirement: Page renders with grouped multiselect widget

The template SHALL render a centered heading and a single multi-select dropdown widget.

#### Scenario: Page renders with grouped multiselect widget

- **WHEN** the user navigates to the Groupcap page
- **THEN** the heading "Multi-Select #8 (Limit selection on groups)" is visible
- **AND** a multi-select dropdown button is visible showing "Nothing selected"

### Requirement: Dropdown opens showing grouped options

The dropdown SHALL display search input, Select All/Deselect All buttons, and options organized under group headers with per-group limits.

#### Scenario: Dropdown opens showing grouped options

- **WHEN** the user clicks the multi-select dropdown button
- **THEN** a dropdown panel appears with a search input
- **AND** "Select All" and "Deselect All" buttons are visible
- **AND** 4 optgroup headers are visible: Group A, Group B, Group C, Group D
- **AND** each group header shows its selection limit
- **AND** all state options are visible with unchecked checkboxes

### Requirement: Selecting options within a group

Selecting an option SHALL check its checkbox and update the button text.

#### Scenario: Selecting options within a group

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Alpha" in Group A
- **THEN** the checkbox next to "Alpha" is checked
- **AND** the dropdown button text updates to show "Alpha"
- **AND** a green check mark appears next to "Alpha"

### Requirement: Per-group limit enforcement

When a group reaches its selection limit, remaining unchecked options in that group SHALL be disabled.

#### Scenario: Group A limit enforcement (max 2)

- **GIVEN** the dropdown is open
- **AND** Group A has 2 items selected (Alpha and Bravo)
- **WHEN** the user views Group A
- **THEN** the remaining unchecked options in Group A are disabled

### Requirement: Deselecting restores group capacity

Deselecting an option in a group SHALL re-enable previously disabled options in that group.

#### Scenario: Deselecting restores group capacity

- **GIVEN** Group A has 2 items selected and remaining disabled
- **WHEN** the user deselects "Alpha" from Group A
- **THEN** "Alpha" is unchecked
- **AND** the previously disabled options in Group A become enabled again

### Requirement: Independent group limits

Each group's selection limit SHALL be independent of other groups.

#### Scenario: Independent group limits

- **GIVEN** Group A has 2 items selected (at its limit)
- **AND** Group B has 3 items selected (at its limit)
- **WHEN** the user views Group C
- **THEN** all unchecked options in Group C remain enabled
- **AND** the user can select items from Group C

### Requirement: Search filters options

Typing in the search input SHALL filter options across all groups.

#### Scenario: Search filters within groups

- **GIVEN** the dropdown is open
- **WHEN** the user types "Al" in the search input
- **THEN** only options containing "Al" are visible
- **AND** the group structure is preserved for visible results

### Requirement: Deselect All clears all selections

Clicking "Deselect All" SHALL clear all selected options across all groups.

#### Scenario: Deselect All clears all groups

- **GIVEN** items are selected across multiple groups
- **WHEN** the user clicks "Deselect All"
- **THEN** all checkboxes are unchecked
- **AND** the dropdown button shows "Nothing selected"
- **AND** all options in all groups are enabled

### Requirement: Select All fills groups to limits

Clicking "Select All" SHALL fill each group up to its individual selection limit.

#### Scenario: Select All respects group limits

- **WHEN** the user clicks "Select All" with no items selected
- **THEN** Group A has 2 items selected (at its limit)
- **AND** Group B has 3 items selected (at its limit)
- **AND** remaining unchecked options in each group are disabled

### Requirement: Button text reflects selections

The dropdown button SHALL display the names of currently selected items.

#### Scenario: Button text reflects selections

- **GIVEN** the dropdown is open
- **WHEN** the user selects "Alpha", "Echo"
- **THEN** the dropdown button text shows "Alpha, Echo"

### Requirement: Footer links to Component Dock

The page footer SHALL contain a link to Component Dock.

#### Scenario: Footer renders Component Dock link

- **WHEN** the page renders
- **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"
