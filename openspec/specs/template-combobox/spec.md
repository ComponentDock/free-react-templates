# Combobox — Multiselect Dropdown Template

> Recreation of ColorLib Multiselect 03
> (https://colorlib.com/wp/template/multiselect-03/)
> Preview: https://preview.colorlib.com/theme/bootstrap/multiselect-03/

## Purpose

A clean, centered multi-select dropdown component for choosing programming
languages. The original uses Semantic UI's styled multi-select with a Lato
font and a minimalist layout. This recreation uses a custom React combobox
with checkbox-style selection, keyboard navigation, and accessibility.

## Requirements

### Requirement: Page renders with correct layout and content

The page SHALL render a centered layout with a heading, label, multi-select
dropdown, and footer.

#### Scenario: Heading and label are displayed

- **WHEN** the page loads
- **THEN** the heading "Select Language" is visible
- **AND** the label "Choose languages" is visible

#### Scenario: Dropdown shows placeholder when nothing is selected

- **WHEN** the page loads with no selections
- **THEN** the dropdown button shows "Select options"

#### Scenario: Footer renders Component Dock link

- **WHEN** the page loads
- **THEN** the footer contains a link to https://www.componentdock.com/

### Requirement: Dropdown opens and closes correctly

The dropdown SHALL open when the trigger is clicked and close when clicking
outside or pressing Escape.

#### Scenario: Click opens dropdown

- **WHEN** the user clicks the dropdown trigger
- **THEN** the option list becomes visible

#### Scenario: Click outside closes dropdown

- **WHEN** the dropdown is open and the user clicks outside
- **THEN** the option list is hidden

#### Scenario: Escape closes dropdown

- **WHEN** the dropdown is open and the user presses Escape
- **THEN** the option list is hidden

### Requirement: Options can be selected and deselected

The dropdown SHALL allow selecting and deselecting individual options.

#### Scenario: Click selects an option

- **WHEN** the dropdown is open and the user clicks "PHP"
- **THEN** PHP is marked as selected

#### Scenario: Click deselects a selected option

- **WHEN** PHP is selected and the user clicks "PHP" again
- **THEN** PHP is deselected

#### Scenario: Selected count is displayed

- **WHEN** one option is selected
- **THEN** the dropdown shows "1 item selected"

#### Scenario: Plural count is displayed

- **WHEN** two options are selected
- **THEN** the dropdown shows "2 items selected"

### Requirement: Select All and Clear All work correctly

The dropdown SHALL provide Select All and Clear All controls.

#### Scenario: Select All selects all enabled options

- **WHEN** the user clicks "Select All"
- **THEN** all enabled options are selected

#### Scenario: Clear All deselects all options

- **WHEN** all enabled options are selected and the user clicks "Clear All"
- **THEN** all options are deselected

### Requirement: Disabled options cannot be selected

The dropdown SHALL prevent selection of disabled options.

#### Scenario: Click on disabled option is ignored

- **WHEN** the user clicks a disabled option
- **THEN** onChange is not called

#### Scenario: Keyboard Enter on disabled option is ignored

- **WHEN** the user navigates to a disabled option and presses Enter
- **THEN** onChange is not called

### Requirement: Keyboard navigation works correctly

The dropdown SHALL support full keyboard navigation.

#### Scenario: ArrowDown opens dropdown

- **WHEN** the trigger is focused and the user presses ArrowDown
- **THEN** the dropdown opens

#### Scenario: Enter opens dropdown

- **WHEN** the trigger is focused and the user presses Enter
- **THEN** the dropdown opens

#### Scenario: Space opens dropdown

- **WHEN** the trigger is focused and the user presses Space
- **THEN** the dropdown opens

#### Scenario: ArrowUp opens dropdown

- **WHEN** the trigger is focused and the user presses ArrowUp
- **THEN** the dropdown opens

#### Scenario: ArrowDown navigates to next option

- **WHEN** the dropdown is open and the user presses ArrowDown
- **THEN** focus moves to the next option

#### Scenario: ArrowUp navigates to previous option

- **WHEN** the dropdown is open and the user presses ArrowUp
- **THEN** focus moves to the previous option

#### Scenario: Enter selects focused option

- **WHEN** an option is focused and the user presses Enter
- **THEN** the option is toggled

#### Scenario: Space selects focused option

- **WHEN** an option is focused and the user presses Space
- **THEN** the option is toggled

#### Scenario: Non-matching keys are ignored

- **WHEN** the dropdown is open and the user presses a non-matching key
- **THEN** no selection change occurs

### Requirement: Accessibility attributes are present

The dropdown SHALL have correct ARIA attributes for screen readers.

#### Scenario: Trigger has correct ARIA attributes

- **WHEN** the dropdown renders
- **THEN** the trigger button has aria-expanded and aria-haspopup="listbox"

#### Scenario: Option list has correct role

- **WHEN** the dropdown is open
- **THEN** the list has role="listbox" and aria-multiselectable

#### Scenario: Options have correct roles

- **WHEN** the dropdown is open
- **THEN** each option has role="option" and aria-selected

#### Scenario: Disabled options have aria-disabled

- **WHEN** the dropdown is open
- **THEN** disabled options have aria-disabled="true"

## Design tokens

| Token              | Value                | Notes                      |
| ------------------ | -------------------- | -------------------------- |
| Font family        | Lato (300, 400, 700) | Google Fonts               |
| Background         | #f5f5f5 (gray-100)   | Page background            |
| Card background    | #ffffff              | Dropdown and footer        |
| Border color       | #d4d4d4              | Dropdown borders           |
| Text color         | #333333              | Primary text               |
| Muted text         | #888888              | Placeholder, footer        |
| Heading color      | #1a1a1a              | Section heading            |
| Accent / checkmark | #22c55e (green-500)  | Selected state, links      |
| Checkmark bg       | #f0fdf4 (green-50)   | Selected option background |
| Hover bg           | #f0f0f0              | Option hover               |

## Test count

40 tests across 3 test files, 100% coverage on all metrics.
