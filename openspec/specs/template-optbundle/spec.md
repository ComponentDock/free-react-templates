# Template: OptBundle (Multiselect with Categories)

## Purpose

Recreation of ColorLib **Multiselect 08** — a clean multiselect dropdown
demonstration page with categorized groupings.

- **Source**: https://colorlib.com/wp/template/multiselect-08/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-08/
- **Category**: Multiselect / Form UI Component
- **Stack**: React 19, Tailwind CSS 4, TypeScript, Vite

## Design tokens (from live preview CSS)

| Token               | Value                       | Notes                                             |
| ------------------- | --------------------------- | ------------------------------------------------- |
| Brand color         | `#a7d129`                   | Lime green — links, dropdown border, highlight bg |
| Background          | `#ffffff`                   | White page background                             |
| Text color          | `gray`                      | Body text default                                 |
| Heading color       | `#000000`                   | Black for h1–h5                                   |
| Font family         | `"Lato", Arial, sans-serif` | Font weights 300, 400, 700                        |
| Body font-size      | `16px`                      | Standard                                          |
| Body line-height    | `1.8`                       | Generous line height                              |
| Border radius       | `4px`                       | On dropdown container and drop                    |
| Dropdown border     | `1px solid #a7d129`         | Green border on multiselect                       |
| Highlighted item bg | `#a7d129`                   | Green bg on selected/hovered item                 |
| Group result bg     | `rgba(0,0,0,0.05)`          | Light gray bg for group headers                   |
| Choice chip bg      | `rgba(0,0,0,0.1)`           | Light bg for selected choice chips                |
| Choice chip border  | `none`                      | No border on chips                                |
| Section padding     | `7em 0`                     | Large vertical padding                            |

## Section structure (order)

1. **Hero / Heading section** — centered page title "OptBundle"
2. **Multiselect dropdown** — full-width Chosen.js-style multiselect with:
   - Placeholder text: "Your Favorite Football Teams"
   - 8 optgroups (NFC EAST, NFC NORTH, NFC SOUTH, NFC WEST, AFC EAST, AFC NORTH, AFC SOUTH, AFC WEST)
   - 4 items per group (32 total options)
   - Group headers with light gray background
   - Search input within dropdown
   - Multiple selection support with chip/tag display
   - Selected items shown as chips with remove button
3. **Footer** — links to Component Dock

## Fidelity notes

- The original uses Chosen.js (jQuery plugin). In React we build a custom
  multiselect component that mimics the Chosen.js UX: dropdown overlay,
  search/filter, optgroup headers, chip display for selected items.
- The original uses Bootstrap 4 grid. We use Tailwind equivalents.
- Font Awesome 4.7.0 icons are not used in the template content — replace
  with lucide-react if any icons are needed.
- Background: solid white, no textures or gradients.
- The page is a single centered section with a footer.

## Requirements

### Requirement: Page renders with centered heading

The page SHALL display a centered heading "OptBundle" on a white background.

#### Scenario: Page loads with heading

- **WHEN** the user visits the OptBundle page
- **THEN** they see a heading "OptBundle"
- **AND** the heading is centered on the page
- **AND** the page has a white background

### Requirement: Multiselect dropdown renders with categories

The multiselect SHALL display a dropdown with placeholder text and support categorized options.

#### Scenario: Multiselect renders with placeholder

- **WHEN** the user visits the OptBundle page
- **THEN** they see a multiselect dropdown
- **AND** the dropdown has a placeholder "Your Favorite Football Teams"
- **AND** the dropdown is empty (no selections)

#### Scenario: Opening the dropdown shows grouped options

- **WHEN** the user clicks the multiselect dropdown
- **THEN** they see 8 category groups
- **AND** each group has a gray background header
- **AND** each group contains 4 selectable items
- **AND** a search input is visible

### Requirement: Selection adds chips

Selecting an item SHALL display it as a removable chip/tag.

#### Scenario: Selecting an item adds a chip

- **WHEN** the dropdown is open
- **AND** the user selects an item
- **THEN** the item appears as a chip/tag in the trigger area
- **AND** the chip has a light background and a remove button
- **AND** the item is marked as selected in the dropdown

#### Scenario: Removing a selected item

- **WHEN** at least one item is selected
- **AND** the user clicks the remove button on a chip
- **THEN** the chip is removed
- **AND** the item is deselected in the dropdown

### Requirement: Search filters options

The dropdown SHALL support searching/filtering within options.

#### Scenario: Searching within the dropdown

- **WHEN** the dropdown is open
- **AND** the user types in the search input
- **THEN** only matching items are shown
- **AND** group headers for empty groups are hidden

#### Scenario: No results found

- **WHEN** the dropdown is open
- **AND** the user types a search term with no matches
- **THEN** a "No results found" message is displayed

### Requirement: Multiple selection support

The multiselect SHALL support selecting multiple items from different groups.

#### Scenario: Selecting items from different groups

- **WHEN** the dropdown is open
- **AND** the user selects items from different groups
- **THEN** all selected items appear as chips
- **AND** the order of chips matches selection order

### Requirement: Keyboard accessibility

The multiselect SHALL be keyboard navigable with appropriate ARIA attributes.

#### Scenario: Keyboard navigation on trigger

- **WHEN** the user presses Enter or Space on the trigger
- **THEN** the dropdown opens or closes

#### Scenario: Keyboard removal of chips

- **WHEN** the user presses Enter or Space on a chip remove button
- **THEN** the chip is removed

#### Scenario: ARIA attributes

- **WHEN** the user visits the OptBundle page
- **THEN** the trigger has `aria-haspopup="listbox"` and `aria-expanded`
- **AND** the dropdown has `role="listbox"`
- **AND** options have `role="option"` with `aria-selected`

### Requirement: Footer links to Component Dock

The page footer SHALL link to https://www.componentdock.com/.

#### Scenario: Footer renders with Component Dock link

- **WHEN** the user visits the OptBundle page
- **THEN** a footer is visible
- **AND** the footer contains a link to "Component Dock" at https://www.componentdock.com/
