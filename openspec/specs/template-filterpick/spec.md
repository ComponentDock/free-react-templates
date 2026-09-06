# Template: FilterPick (Bootstrap Multiselect with Checkmarks)

## Purpose

FilterPick is a single-page MULTISELECT DROPDOWN COMPONENT in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 04" free template (source: https://colorlib.com/wp/template/multiselect-04/), built under a DIFFERENT name (**FilterPick**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap multiselect dropdown list component: a clean, modern, responsive multiselect with checkmarks for every user to know exactly what they clicked on. The design features a light gray page background (#f5f7fa), clean white card with subtle shadow, teal accent checkmarks (#0ea5e9) for selected items, and rounded corners throughout.

**WHAT MAKES FILTERPICK DISTINCT (signature behaviors):**

1. Clean card-based dropdown on a light gray page background
2. Teal accent checkmarks (#0ea5e9) for selected items
3. Select All / Clear All functionality
4. Keyboard navigation (ArrowUp/Down, Space, Enter, Escape)
5. Click outside to close

## Source mapping

- **ColorLib source:** Multiselect 04
- **Preview URL:** https://preview.colorlib.com/theme/multiselect-04/ (unreachable — 404)
- **New name:** filterpick
- **Category:** Bootstrap Multiselect with Checkmarks

## Design tokens

Extracted from the screenshot analysis (preview unreachable — fell back to screenshot).

### Colors

| Token                   | Value   | Usage                             |
| ----------------------- | ------- | --------------------------------- |
| filterpick-bg           | #f5f7fa | Page background (light gray)      |
| filterpick-card         | #ffffff | Card/panel background             |
| filterpick-border       | #e0e0e0 | Borders, dividers                 |
| filterpick-text         | #374151 | Primary text                      |
| filterpick-text-muted   | #9ca3af | Muted/secondary text              |
| filterpick-checkmark    | #0ea5e9 | Checkmark accent (teal/sky-500)   |
| filterpick-checkmark-bg | #f0f9ff | Checked item highlight background |
| filterpick-hover        | #f3f4f6 | Hover state background            |

### Typography

- **Font family:** Inter (Google Fonts)
- **Heading weight:** 600 (semibold)
- **Body weight:** 400 (normal)

### Layout

- Card max-width: 24rem (max-w-sm)
- Card border-radius: 0.75rem (rounded-xl)
- Dropdown border-radius: 0.5rem (rounded-lg)
- Card padding: 1.5rem (p-6)
- Item padding: 0.75rem vertical, 1rem horizontal (py-3 px-4)

## Requirements

### Requirement: Multiselect dropdown with checkmark UI

Users SHALL see a multiselect dropdown component that displays a list of options with checkmark checkboxes, allowing multiple selections simultaneously.

#### Scenario: Initial state renders with placeholder

- **WHEN** the page loads
- **THEN** a dropdown trigger button is visible showing "Select options" placeholder text
- **AND** no options are initially selected

#### Scenario: Opening the dropdown

- **WHEN** the user clicks the dropdown trigger
- **THEN** a list of options appears below the trigger
- **AND** each option displays a checkbox indicator and label text
- **AND** the trigger shows aria-expanded="true"

#### Scenario: Selecting an option

- **WHEN** the user clicks an unchecked option in the open dropdown
- **THEN** a teal checkmark appears in the checkbox
- **AND** the option row gets a light background highlight
- **AND** the trigger text updates to show "N items selected"

#### Scenario: Deselecting an option

- **WHEN** the user clicks a checked option
- **THEN** the checkmark is removed
- **AND** the highlight background is removed
- **AND** the count updates accordingly

#### Scenario: Select All functionality

- **WHEN** the user clicks "Select All" in the dropdown header
- **THEN** all enabled options become selected
- **AND** the button text changes to "Clear All"

#### Scenario: Clear All functionality

- **WHEN** the user clicks "Clear All"
- **THEN** all selections are removed
- **AND** the trigger returns to placeholder text

#### Scenario: Disabled option handling

- **WHEN** an option has the disabled attribute
- **THEN** clicking it does not change the selection
- **AND** the option displays with reduced opacity

#### Scenario: Keyboard navigation

- **WHEN** the user focuses the trigger and presses ArrowDown or Enter
- **THEN** the dropdown opens
- **AND** ArrowUp/ArrowDown moves focus between options
- **AND** Space/Enter toggles the focused option
- **AND** Escape closes the dropdown

#### Scenario: Click outside closes dropdown

- **WHEN** the dropdown is open and the user clicks outside
- **THEN** the dropdown closes

### Requirement: Accessible markup

The component SHALL use semantic ARIA attributes: aria-expanded, aria-haspopup="listbox", role="listbox", aria-multiselectable, role="option", aria-selected, aria-disabled.

#### Scenario: ARIA attributes are present

- **WHEN** the dropdown renders
- **THEN** the trigger has aria-haspopup="listbox"
- **AND** the trigger has aria-expanded (true when open, false when closed)
- **AND** the listbox has role="listbox" and aria-multiselectable
- **AND** each option has role="option" and aria-selected

### Requirement: Footer with Component Dock branding

Every template's footer MUST link https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer renders Component Dock link

- **WHEN** the Footer component renders
- **THEN** a link to https://www.componentdock.com/ is visible
- **AND** the link opens in a new tab with rel="noopener noreferrer"
- **AND** the text says "Made with Component Dock"
