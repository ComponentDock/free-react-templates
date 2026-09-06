# Template: OptPick (Bootstrap Multiselect)

## Purpose

OptPick is a single-page MULTISELECT DROPDOWN component in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 01" free template (source: https://colorlib.com/wp/template/multiselect-01/), built under a DIFFERENT name (**OptPick**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap multiselect dropdown list component: a clean, minimal card-based layout with a custom dropdown that allows users to select multiple options via checkboxes. The design features a very light blue-white background (#f8f9fd), clean white cards, subtle grey borders, and green accent checkmarks for selected items. The component demonstrates a versatile and easily adaptive multiselect dropdown pattern.

**WHAT MAKES OPTPICK DISTINCT (signature behaviors):**

1. **Clean card-based dropdown.** A white card container (#fff) with subtle grey borders on a very light blue-white page background (#f8f9fd). The dropdown reveals a list of options with checkboxes for multi-selection.
2. **Green accent checkmarks.** Selected items show green (#62c65b) checkmarks, providing clear visual feedback for the selection state.
3. **Minimal typography.** The design uses clean sans-serif fonts with subtle grey text (#666-#999) and minimal decoration.
4. **Responsive layout.** The component adapts to different screen sizes while maintaining its clean, card-based aesthetic.

## Source mapping

- **ColorLib source:** Multiselect 01
- **Preview URL:** https://preview.colorlib.com/theme/multiselect-01/ (unreachable — 404)
- **New name:** optpick
- **Category:** Bootstrap Multiselect Dropdown

## Design tokens

Extracted from the screenshot analysis (preview unreachable — fell back to screenshot).

### Colors

| Token                     | Value     | Usage                                          |
| ------------------------- | --------- | ---------------------------------------------- |
| `--color-bg`              | `#f8f9fd` | Page background (very light blue-white)        |
| `--color-card`            | `#fff`    | Card/dropdown background                       |
| `--color-border`          | `#e5e5e5` | Card borders and dropdown separators           |
| `--color-text`            | `#666`    | Default text color                             |
| `--color-text-muted`      | `#999`    | Secondary/muted text                           |
| `--color-checkmark`       | `#62c65b` | Green accent for selected items                |
| `--color-checkmark-bg`    | `#f0fff0` | Light green background for selected items      |
| `--color-hover`           | `#f5f5f5` | Hover state background                         |

### Typography

| Element | Font               | Weight | Usage                      |
| ------- | ------------------ | ------ | -------------------------- |
| Body    | System sans-serif  | 400    | Default text               |
| Labels  | System sans-serif  | 500    | Dropdown option labels     |
| Heading | System sans-serif  | 600    | Component heading/title    |

### Shapes & Spacing

| Token          | Value        | Usage                      |
| -------------- | ------------ | -------------------------- |
| Card radius    | 8px          | Card container corners     |
| Dropdown radius| 4px          | Dropdown list corners      |
| Card shadow    | `0 1px 3px rgba(0,0,0,0.1)` | Subtle card shadow |
| Card padding   | 16px         | Internal card spacing      |
| Option padding | 12px 16px    | Individual option rows     |
| Option gap     | 0px          | No gap between options     |

### Section backgrounds

- Page: solid light blue-white `#f8f9fd`
- Card: solid white `#fff`
- Selected option: light green `#f0fff0`
- Hover state: `#f5f5f5`

## Requirements

### Scenario: Page renders with dropdown

- **Given** the user visits the OptPick page
- **Then** a card container is visible on a light blue-white background
- **And** the card contains a dropdown trigger element

### Scenario: Dropdown opens and closes

- **Given** the dropdown is closed
- **When** the user clicks the dropdown trigger
- **Then** a list of options appears below the trigger
- **When** the user clicks the dropdown trigger again
- **Then** the option list is hidden

### Scenario: Single option selection

- **Given** the dropdown is open
- **When** the user clicks an unchecked option
- **Then** the checkbox becomes checked with a green checkmark
- **And** the option row shows a light green background

### Scenario: Single option deselection

- **Given** the dropdown is open
- **When** the user clicks a checked option
- **Then** the checkbox becomes unchecked
- **And** the option row background returns to white

### Scenario: Multiple option selection

- **Given** the dropdown is open
- **When** the user checks options A, B, and C
- **Then** all three options show green checkmarks
- **And** the dropdown trigger displays the count of selected items

### Scenario: Select all functionality

- **Given** the dropdown is open with a "Select All" option
- **When** the user clicks "Select All"
- **Then** all options become checked
- **And** the dropdown trigger shows all items selected

### Scenario: Clear all functionality

- **Given** the dropdown is open with items selected
- **When** the user clicks "Clear All"
- **Then** all options become unchecked
- **And** the dropdown trigger shows no items selected

### Scenario: Keyboard navigation

- **Given** the dropdown is open
- **When** the user presses ArrowDown
- **Then** focus moves to the next option
- **When** the user presses ArrowUp
- **Then** focus moves to the previous option
- **When** the user presses Space
- **Then** the focused option's selection is toggled
- **When** the user presses Escape
- **Then** the dropdown closes

### Scenario: Click outside closes dropdown

- **Given** the dropdown is open
- **When** the user clicks outside the dropdown
- **Then** the dropdown closes

### Scenario: Disabled option

- **Given** the dropdown is open with a disabled option
- **When** the user clicks the disabled option
- **Then** the option's selection state does not change
- **And** the disabled option has reduced opacity

## Verification checklist

- [ ] Card renders on light blue-white background (#f8f9fd)
- [ ] Dropdown opens/closes on trigger click
- [ ] Checkboxes toggle with green checkmarks
- [ ] Selected items show light green background
- [ ] Multiple items can be selected simultaneously
- [ ] Select All / Clear All functionality works
- [ ] Keyboard navigation (ArrowUp/Down, Space, Escape)
- [ ] Click outside closes dropdown
- [ ] Disabled options cannot be selected
- [ ] Dropdown trigger shows selected count
- [ ] Responsive layout on different screen sizes
- [ ] Footer links to https://www.componentdock.com/
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No references to ColorLib in app code
