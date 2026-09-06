# Template: OptPick (Bootstrap Multiselect)

## Purpose

OptPick is a single-page MULTISELECT DROPDOWN component in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 01" free template (source: https://colorlib.com/wp/template/multiselect-01/), built under a DIFFERENT name (**OptPick**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap multiselect dropdown list component: a clean, minimal card-based layout with a custom dropdown that allows users to select multiple options via checkboxes. The design features a very light blue-white background (#f8f9fd), clean white cards, subtle grey borders, and green accent checkmarks for selected items.

**WHAT MAKES OPTPICK DISTINCT (signature behaviors):**

1. Clean card-based dropdown on a light blue-white page background
2. Green accent checkmarks (#62c65b) for selected items
3. Select All / Clear All functionality
4. Keyboard navigation (ArrowUp/Down, Space, Escape)
5. Click outside to close

## Source mapping

- **ColorLib source:** Multiselect 01
- **Preview URL:** https://preview.colorlib.com/theme/multiselect-01/ (unreachable — 404)
- **New name:** optpick
- **Category:** Bootstrap Multiselect Dropdown

## Design tokens

Extracted from the screenshot analysis (preview unreachable — fell back to screenshot).

### Colors

| Token                  | Value     | Usage                                     |
| ---------------------- | --------- | ----------------------------------------- |
| `--color-bg`           | `#f8f9fd` | Page background (very light blue-white)   |
| `--color-card`         | `#fff`    | Card/dropdown background                  |
| `--color-border`       | `#e5e5e5` | Card borders and dropdown separators      |
| `--color-text`         | `#666`    | Default text color                        |
| `--color-text-muted`   | `#999`    | Secondary/muted text                      |
| `--color-checkmark`    | `#62c65b` | Green accent for selected items           |
| `--color-checkmark-bg` | `#f0fff0` | Light green background for selected items |
| `--color-hover`        | `#f5f5f5` | Hover state background                    |

### Typography

| Element | Font                 | Weight | Usage                   |
| ------- | -------------------- | ------ | ----------------------- |
| Body    | Inter (Google Fonts) | 400    | Default text            |
| Labels  | Inter                | 500    | Dropdown option labels  |
| Heading | Inter                | 600    | Component heading/title |

### Shapes & Spacing

| Token           | Value                       | Usage                  |
| --------------- | --------------------------- | ---------------------- |
| Card radius     | 8px                         | Card container corners |
| Dropdown radius | 4px                         | Dropdown list corners  |
| Card shadow     | `0 1px 3px rgba(0,0,0,0.1)` | Subtle card shadow     |
| Card padding    | 16px                        | Internal card spacing  |
| Option padding  | 12px 16px                   | Individual option rows |

## Requirements

### Requirement: Page layout

The system SHALL render a full-height page with a light blue-white background (#f8f9fd) containing a centered white card with the multiselect dropdown component.

#### Scenario: Page renders with dropdown

- **GIVEN** the user visits the OptPick page
- **THEN** a card container is visible on a light blue-white background
- **AND** the card contains a dropdown trigger element
- **AND** the page title is "OptPick — Multiselect Dropdown Template"

#### Scenario: Heading text

- **GIVEN** the page is rendered
- **THEN** the card SHALL display the heading "Choose Fruits"

### Requirement: Dropdown open and close

The system SHALL toggle the dropdown option list when the trigger button is clicked or activated via keyboard.

#### Scenario: Dropdown opens on click

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown trigger
- **THEN** a list of options appears below the trigger
- **AND** the trigger reports `aria-expanded="true"`

#### Scenario: Dropdown closes on second click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the dropdown trigger again
- **THEN** the option list is hidden
- **AND** the trigger reports `aria-expanded="false"`

#### Scenario: Dropdown closes on click outside

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown
- **THEN** the dropdown closes

#### Scenario: Dropdown closes on Escape

- **GIVEN** the dropdown is open
- **WHEN** the user presses Escape
- **THEN** the dropdown closes

### Requirement: Option selection

The system SHALL allow users to select and deselect individual options via checkboxes with green checkmark indicators.

#### Scenario: Single option selection

- **GIVEN** the dropdown is open
- **WHEN** the user clicks an unchecked option
- **THEN** the checkbox becomes checked with a green checkmark
- **AND** the option row shows a light green background

#### Scenario: Single option deselection

- **GIVEN** the dropdown is open with an option selected
- **WHEN** the user clicks the checked option
- **THEN** the checkbox becomes unchecked
- **AND** the option row background returns to white

#### Scenario: Multiple option selection

- **GIVEN** the dropdown is open
- **WHEN** the user selects multiple options
- **THEN** all selected options show green checkmarks
- **AND** the dropdown trigger displays the count of selected items

### Requirement: Select All / Clear All

The system SHALL provide Select All and Clear All controls in the dropdown header.

#### Scenario: Select All

- **GIVEN** the dropdown is open with no items selected
- **WHEN** the user clicks "Select All"
- **THEN** all enabled options become checked
- **AND** the trigger shows all items selected

#### Scenario: Clear All

- **GIVEN** the dropdown is open with all items selected
- **WHEN** the user clicks "Clear All"
- **THEN** all options become unchecked
- **AND** the trigger shows no items selected

### Requirement: Disabled options

The system SHALL prevent disabled options from being selected and display them with reduced opacity.

#### Scenario: Disabled option

- **GIVEN** the dropdown is open with a disabled option
- **WHEN** the user clicks the disabled option
- **THEN** the option's selection state does not change
- **AND** the disabled option has reduced opacity

### Requirement: Keyboard navigation

The system SHALL support full keyboard navigation within the dropdown.

#### Scenario: Arrow keys navigate options

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown
- **THEN** focus moves to the next option
- **WHEN** the user presses ArrowUp
- **THEN** focus moves to the previous option

#### Scenario: Space and Enter toggle selection

- **GIVEN** the dropdown is open
- **WHEN** the user presses Space or Enter on a focused option
- **THEN** the option's selection is toggled

#### Scenario: Keyboard opens dropdown

- **GIVEN** the dropdown is closed and the trigger is focused
- **WHEN** the user presses ArrowDown, ArrowUp, Enter, or Space
- **THEN** the dropdown opens with focus on the first option

### Requirement: Accessibility

The system SHALL provide appropriate ARIA attributes for screen readers.

#### Scenario: ARIA attributes

- **GIVEN** the page is rendered
- **THEN** the trigger SHALL have `aria-haspopup="listbox"`
- **AND** the trigger SHALL have `aria-expanded` reflecting open state
- **AND** the option list SHALL have `role="listbox"` and `aria-multiselectable`
- **AND** each option SHALL have `role="option"` and `aria-selected`

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer link

- **GIVEN** the page is rendered
- **THEN** a footer is visible with a link to https://www.componentdock.com/
- **AND** the link text is "Component Dock"
- **AND** the link opens in a new tab
