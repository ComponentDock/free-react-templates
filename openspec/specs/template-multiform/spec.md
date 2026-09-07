# Template: Multiform (Form Element — Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect V15" — a free state multiselect dropdown snippet
using Bootstrap Framework.

- **Source**: https://colorlib.com/wp/template/multiselect-15/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-15/
- **Source slug**: `multiselect-15`
- **New name**: `multiform`
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Requirements

### Requirement: Page renders correctly

The page SHALL display a centered heading "State Selector" and a dropdown trigger button below it.

#### Scenario: Page renders correctly

- **GIVEN** the user navigates to the multiform page
- **THEN** a centered heading "State Selector" is visible
- **AND** a dropdown trigger button is visible below the heading

### Requirement: Dropdown opens on click

The dropdown SHALL open when the trigger button is clicked, showing a search input, select-all toggle, and 50 US states.

#### Scenario: Dropdown opens on click

- **GIVEN** the user sees the dropdown trigger
- **WHEN** the user clicks the trigger button
- **THEN** a dropdown panel appears below the trigger
- **AND** the panel contains a search input
- **AND** the panel contains a "select all" toggle
- **AND** the panel lists 50 US states with checkbox indicators

### Requirement: Single state selection

Clicking a state SHALL toggle its selection state.

#### Scenario: Single state selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Alabama"
- **THEN** "Alabama" gets a light blue (#e1f2fb) background
- **AND** the trigger button text shows "1 selected"

### Requirement: Multiple state selection

Multiple states SHALL be selectable simultaneously.

#### Scenario: Multiple state selection

- **GIVEN** the dropdown is open
- **WHEN** the user selects "California"
- **AND** the user selects "New York"
- **AND** the user selects "Texas"
- **THEN** all three items show light blue (#e1f2fb) background
- **AND** the trigger button text shows "3 selected"

### Requirement: Deselect a state

Clicking a selected state SHALL deselect it.

#### Scenario: Deselect a state

- **GIVEN** the user has selected "California" and "Texas"
- **WHEN** the user clicks "California" again
- **THEN** "California" loses the light blue background
- **AND** the trigger button text shows "1 selected"

### Requirement: Select all states

The select-all toggle SHALL select all visible states.

#### Scenario: Select all states

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "select all" toggle
- **THEN** all 50 states are selected
- **AND** the trigger button text shows "50 selected"

### Requirement: Deselect all states

The deselect-all toggle SHALL deselect all states.

#### Scenario: Deselect all states

- **GIVEN** all states are selected
- **WHEN** the user clicks the "select all" toggle again
- **THEN** no states are selected
- **AND** the trigger button text shows "None selected"

### Requirement: Search filters states

The search input SHALL filter the state list in real time.

#### Scenario: Search filters states

- **GIVEN** the dropdown is open
- **WHEN** the user types "New" in the search input
- **THEN** only states containing "New" are visible (New Hampshire, New Jersey, New Mexico, New York)
- **AND** other states are hidden

#### Scenario: Search with no results

- **GIVEN** the dropdown is open
- **WHEN** the user types "ZZZ" in the search input
- **THEN** no states are visible in the list

### Requirement: Dropdown closes on outside click

Clicking outside the dropdown SHALL close it.

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown panel closes

### Requirement: Keyboard accessibility

The dropdown SHALL support keyboard navigation.

#### Scenario: Keyboard accessibility

- **GIVEN** the dropdown trigger is focused
- **WHEN** the user presses Enter or Space
- **THEN** the dropdown opens
- **AND** the user can close with Escape

### Requirement: Responsive layout

The dropdown SHALL be responsive on mobile viewports.

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device (< 768px)
- **THEN** the heading is centered
- **AND** the dropdown takes full width within its container

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **GIVEN** the page is loaded
- **THEN** the footer contains a link to https://www.componentdock.com/
- **AND** the link opens in a new tab
