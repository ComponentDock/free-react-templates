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

1. **Hero / Heading section** — centered page title "Multiselect #08"
2. **Multiselect dropdown** — full-width Chosen.js-style multiselect with:
   - Placeholder text: "Your Favorite Football Teams"
   - 8 optgroups (NFC EAST, NFC NORTH, NFC SOUTH, NFC WEST, AFC EAST, AFC NORTH, AFC SOUTH, AFC WEST)
   - 4 items per group (32 total options)
   - Group headers with light gray background
   - Search input within dropdown
   - Multiple selection support with chip/tag display
   - Selected items shown as chips with remove button

## Fidelity notes

- The original uses Chosen.js (jQuery plugin). In React we build a custom
  multiselect component that mimics the Chosen.js UX: dropdown overlay,
  search/filter, optgroup headers, chip display for selected items.
- The original uses Bootstrap 4 grid. We use Tailwind equivalents.
- Font Awesome 4.7.0 icons are not used in the template content — replace
  with lucide-react if any icons are needed.
- Background: solid white, no textures or gradients.
- The page is a single centered section — no nav, no footer, no other sections.

## Gherkin requirements

### Scenario: Page loads with heading

```gherkin
Given the user visits the OptBundle page
Then they see a heading "OptBundle"
And the heading is centered on the page
And the page has a white background
```

### Scenario: Multiselect dropdown renders with categories

```gherkin
Given the user visits the OptBundle page
Then they see a multiselect dropdown
And the dropdown has a placeholder "Your Favorite Categories"
And the dropdown is empty (no selections)
```

### Scenario: Opening the dropdown shows grouped options

```gherkin
Given the user clicks the multiselect dropdown
Then they see 8 category groups
And each group has a gray background header
And each group contains 4 selectable items
And a search input is visible
```

### Scenario: Selecting an item adds a chip

```gherkin
Given the dropdown is open
When the user selects an item
Then the item appears as a chip/tag below the dropdown
And the chip has a light background and a remove button
And the item is marked as selected in the dropdown
```

### Scenario: Removing a selected item

```gherkin
Given at least one item is selected
When the user clicks the remove button on a chip
Then the chip is removed
And the item is deselected in the dropdown
```

### Scenario: Searching within the dropdown

```gherkin
Given the dropdown is open
When the user types in the search input
Then only matching items are shown
And group headers for empty groups are hidden
```

### Scenario: Selecting multiple items

```gherkin
Given the dropdown is open
When the user selects items from different groups
Then all selected items appear as chips
And the order of chips matches selection order
```

### Scenario: Accessibility

```gherkin
Given the user visits the OptBundle page
Then the multiselect is keyboard navigable
And the dropdown has appropriate ARIA roles
And focus indicators are visible
```

## Verification checklist

- [ ] Heading renders centered with correct text
- [ ] Multiselect dropdown opens/closes on click
- [ ] 8 category groups with correct names
- [ ] 4 items per group (32 total)
- [ ] Search input filters items
- [ ] Selection adds chip/tag
- [ ] Chip removal deselects item
- [ ] Multiple selections supported
- [ ] Keyboard navigation works
- [ ] ARIA attributes present
- [ ] Brand color #a7d129 applied to borders and highlights
- [ ] Lato font family loaded (Google Fonts)
- [ ] White background, gray body text
- [ ] Border radius 4px on dropdown
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
