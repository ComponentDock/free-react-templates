# Template: Optibox (Form — Limited Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect 17" — a free limited multiselect dropdown snippet that marks checked items accordingly and enforces a maximum selection count.

- **Source**: https://colorlib.com/wp/template/multiselect-17/
- **Preview**: https://preview.colorlib.com/theme/multiselect-17/ (404 — unreachable; design derived from screenshot + ColorLib page metadata)
- **Description**: A simple, versatile, and easy-to-work-with free limited multiselect dropdown snippet that marks checked items accordingly. Users can select multiple items from a dropdown list, but the selection is capped at a configurable maximum.
- **Stack**: React 19 + Tailwind CSS 4 + TypeScript (Vite)
- **New name**: `optibox` (apps/optibox, @free-react-templates/optibox)

## Design tokens (extracted from ColorLib page CSS + screenshot)

| Token                   | Value                                 | Notes                                                                                                                 |
| ----------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Font family             | System sans-serif stack               | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif` |
| Brand / accent color    | `#1a73e8`                             | Links, active states, primary actions                                                                                 |
| Hover accent            | `#1464cc`                             | Darker shade on hover                                                                                                 |
| Body text color         | `#26282b`                             | Default paragraph / item text                                                                                         |
| Body font size          | `16px`                                | Base                                                                                                                  |
| Line height             | `1.8`                                 | Body text                                                                                                             |
| Green icon accent       | `#77CC6D`                             | Decorative icons on the ColorLib page (not part of the snippet itself)                                                |
| Page background         | `#ffffff`                             | White, clean                                                                                                          |
| Dropdown border         | `#e6e6e6`                             | Light gray border around the select control                                                                           |
| Dropdown item hover     | `#3e64ff`                             | Blue highlight on hover (from sibling multiselect specs)                                                              |
| Selected item highlight | `#1a73e8`                             | Brand blue for checked/marked items                                                                                   |
| Dropdown shadow         | `0px 3px 19px -15px rgba(0,0,0,0.41)` | Subtle shadow when dropdown is open                                                                                   |
| Border radius           | `4px`                                 | Standard Bootstrap / form control radius                                                                              |
| Max selection limit     | Configurable (default: e.g. 3)        | Core feature of this snippet                                                                                          |

## Visual design notes (from TEMPLATES.md screenshot)

- Single centered section on a white background
- Title area with heading (e.g. "Multiselect 17") centered above the form component
- A custom dropdown/select control with a label above it (e.g. "Select Items" or similar)
- Dropdown trigger shows a placeholder or count of selected items (e.g. "0 Selected")
- When clicked, the dropdown expands revealing a list of items with checkboxes
- Each item has a checkbox that can be toggled
- Checked items are visually marked (blue highlight or checkmark)
- A counter or badge shows how many items are selected out of the maximum
- Once the maximum is reached, further selections are disabled (checkboxes grayed out or unchecked ones blocked)
- A small "x" or remove button on each selected tag/chip to deselect
- Compact layout — the entire component fits in a centered column (roughly col-md-6)
- Clean, minimal aesthetic — no heavy decorations, focus on the form element

## Gherkin requirements

### Scenario: Page renders with title

- Given the user visits the Optibox page
- Then the heading "Multiselect 17" (or equivalent) is visible
- And the heading is centered on the page

### Scenario: Dropdown displays with label

- Given the page has loaded
- Then a label is visible above the dropdown control
- And a dropdown trigger/button is rendered below the label

### Scenario: Dropdown shows default state

- Given the dropdown is in its default (closed) state
- Then the trigger displays a placeholder (e.g. "0 Selected" or "Select items...")
- And the trigger has a light gray border (#e6e6e6)

### Scenario: Dropdown opens on click

- Given the dropdown is closed
- When the user clicks the dropdown trigger
- Then the dropdown menu expands below the trigger
- And a list of selectable items is displayed
- And each item has a checkbox beside its label

### Scenario: Items can be selected

- Given the dropdown is open
- When the user clicks an item's checkbox
- Then the checkbox becomes checked
- And the item is visually highlighted (brand blue #1a73e8)
- And the selected count on the trigger increments

### Scenario: Maximum selection limit enforced

- Given the maximum selection limit is set (e.g. 3)
- And 3 items are already selected
- When the user attempts to select a 4th item
- Then the 4th item's checkbox remains unchecked
- And the checkbox is visually disabled or the click is ignored
- And the selected count remains at 3

### Scenario: Items can be deselected

- Given one or more items are selected
- When the user clicks a selected item's checkbox (or its remove button)
- Then the item is deselected
- And the checkbox becomes unchecked
- And the selected count decrements
- And a previously blocked item becomes selectable again if under the limit

### Scenario: Dropdown closes on outside click

- Given the dropdown is open
- When the user clicks outside the dropdown area
- Then the dropdown menu closes
- And the selected items remain reflected in the trigger display

### Scenario: Selected items shown as tags/chips

- Given items are selected
- When the dropdown is closed
- Then the selected items are displayed as tags or chips in or near the trigger
- And each tag shows the item label and a remove control

### Scenario: Accessibility — keyboard navigation

- Given the dropdown is open
- When the user presses ArrowDown / ArrowUp
- Then focus moves between items in the list
- And pressing Space or Enter toggles the focused item's selection
- And pressing Escape closes the dropdown

### Scenario: Accessibility — ARIA attributes

- Given the component is rendered
- Then the dropdown trigger has `role="combobox"` or equivalent
- And the dropdown list has `role="listbox"` or equivalent
- And each item has `role="option"` with `aria-selected` reflecting selection state
- And the component announces the selected count to screen readers

## Verification checklist

- [ ] Spec reviewed and matches ColorLib Multiselect 17 description
- [ ] New name `optibox` does not collide with existing apps/ or openspec/specs/
- [ ] No reference to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `optibox.free.componentdock.com`
- [ ] `package.json` homepage is `https://optibox.free.componentdock.com`
- [ ] Design tokens match the extracted values
- [ ] All Gherkin scenarios have corresponding test cases
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Component uses `cn()` from packages/ui for class merging
- [ ] No new dependencies added unless absolutely necessary
- [ ] Placeholder images use `https://picsum.photos/seed/optibox-<n>/<w>/<h>`
- [ ] Google / system fonts loaded via `<link>` in index.html
- [ ] Icons from lucide-react
