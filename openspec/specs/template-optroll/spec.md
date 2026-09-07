# Template: Optroll (Form Component — Multiselect Checkbox Dropdown)

## Purpose

Recreation of ColorLib **Multiselect 14** — a free Bootstrap multiselect
checkbox dropdown with search and "Select All" feature. The original uses
the ms-dropdown jQuery plugin. We recreate it as a standalone React
component page.

- **ColorLib source:** https://colorlib.com/wp/template/multiselect-14/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-14/
- **Category:** Form Component / Multiselect Checkbox Dropdown
- **Stack:** React 19 · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (extracted from preview CSS)

| Token                        | Value                           | Source class / rule                                            |
| ---------------------------- | ------------------------------- | -------------------------------------------------------------- |
| Font family                  | `"Roboto", sans-serif`          | `body { font-family: "Roboto" ... }`                           |
| Body background              | `#efefef` (light gray)          | `body { background-color: #efefef }`                           |
| Paragraph color              | `#b3b3b3` (light gray)          | `p { color: #b3b3b3 }`                                         |
| Paragraph font-weight        | `300`                           | `p { font-weight: 300 }`                                       |
| Heading font                 | Roboto (same as body)           | `h1-h6 { font-family: "Roboto" ... }`                          |
| Heading size                 | `h2 { font-size: 20px }`        | `h2 { font-size: 20px }`                                       |
| Trigger button bg            | white (default)                 | `.ms-options-wrap > button`                                    |
| Trigger button height        | `40px`                          | `.ms-options-wrap > button { height: 40px }`                   |
| Trigger button padding       | `0 10px`                        | `.ms-options-wrap > button { padding-left/right: 10px }`       |
| Trigger button border-radius | `4px`                           | `.ms-options-wrap > button { border-radius: 4px }`             |
| Trigger button shadow        | `0 1px 1px 0 rgba(0,0,0,0.1)`   | `.ms-options-wrap > button { box-shadow: ... }`                |
| Trigger hover shadow         | `0 2px 10px 0 rgba(0,0,0,0.1)`  | `:hover { box-shadow: ... }`                                   |
| Dropdown bg                  | white (default)                 | `.ms-options`                                                  |
| Dropdown border-radius       | `4px`                           | `.ms-options-wrap > .ms-options { border-radius: 4px }`        |
| Dropdown shadow              | `0 15px 30px 0 rgba(0,0,0,0.1)` | `.ms-options-wrap > .ms-options { box-shadow: ... }`           |
| Dropdown border              | none                            | `.ms-options { border: none !important }`                      |
| Dropdown min-width           | `320px`                         | `.ms-options { min-width: 320px }`                             |
| Search border-bottom         | `1px solid #efefef`             | `.ms-search input { border-bottom: ... }`                      |
| Select All color             | `#aaaaaa`                       | `.ms-selectall { color: #aaaaaa }`                             |
| Select All hover             | `#000`                          | `.ms-selectall:hover { color: #000 }`                          |
| Select All size              | `11px`, uppercase               | `.ms-selectall { font-size: 11px; text-transform: uppercase }` |
| Checkbox label padding       | `5px 0`                         | `.ms-options > ul li label { padding: 5px 0 }`                 |
| Checkbox label border-radius | `4px`                           | `.ms-options > ul li label { border-radius: 4px }`             |
| Content padding              | `7rem 0`                        | `.content { padding: 7rem 0 }`                                 |

## Section Structure (from preview DOM)

1. **Content wrapper** (`.content`): Full-height centered layout, 7rem vertical padding
2. **Heading row**: "Multi-Select #4" — centered, h2 at 20px
3. **Container row**: Centered column (col-md-3, narrower than others)
4. **Multi-select checkbox dropdown** (ms-dropdown plugin):
   - **Trigger button**: Shows selected count/label, 4px border-radius, subtle shadow
   - **Dropdown panel** (hidden by default):
     - Search input (with bottom border)
     - "Select All" link (uppercase, 11px, gray)
     - Checkbox list of all 50 US states (scrollable)
5. **Footer** with Component Dock link (mandatory per AGENTS.md)

## Gherkin Requirements

### Feature: Multiselect Checkbox Dropdown with Search and Select All

#### Scenario: Page renders with heading and dropdown

- Given the page loads
- When the user views the page
- Then a heading "Multi-Select #4" is visible (centered, 20px)
- And a multi-select dropdown trigger button is visible

#### Scenario: Dropdown opens on click

- Given the dropdown is closed
- When the user clicks the trigger button
- Then a dropdown panel appears with search input, "Select All" link, and checkbox list

#### Scenario: Select All checks all options

- Given the dropdown is open
- When the user clicks "Select All"
- Then all 50 US state checkboxes become checked

#### Scenario: Deselect All unchecks all options

- Given all states are checked via Select All
- When the user clicks "Select All" again (now shows "Deselect All")
- Then all checkboxes become unchecked

#### Scenario: Individual checkbox selection

- Given the dropdown is open
- When the user checks "California"
- Then "California" checkbox is checked
- And the trigger button text updates to reflect 1 selected

#### Scenario: Multiple checkbox selection

- Given "California" is checked
- When the user also checks "Texas" and "New York"
- Then three checkboxes are checked
- And the trigger button text updates to reflect 3 selected

#### Scenario: Live search filters states

- Given the dropdown is open
- When the user types "New" in the search input
- Then only states containing "New" are visible (New Hampshire, New Jersey, New Mexico, New York)
- And non-matching states are hidden

#### Scenario: Dropdown closes on outside click

- Given the dropdown is open
- When the user clicks outside the dropdown
- Then the dropdown panel becomes hidden

#### Scenario: Accessibility

- Given the page loads
- When the user navigates with keyboard
- Then the trigger button is focusable
- And checkboxes are keyboard-accessible
- And the search input is focusable

## Verification Checklist

- [ ] Page renders centered layout with heading and dropdown on light gray (#efefef) background
- [ ] Font is Roboto (loaded via Google Fonts or system fallback)
- [ ] Trigger button has 4px border-radius, 40px height, subtle shadow
- [ ] Dropdown has 4px border-radius, box-shadow 0 15px 30px 0 rgba(0,0,0,0.1)
- [ ] Dropdown min-width is 320px
- [ ] Search input has bottom border (#efefef)
- [ ] "Select All" text is uppercase, 11px, gray (#aaaaaa)
- [ ] Checkboxes have 4px border-radius labels
- [ ] Select All / Deselect All toggle works
- [ ] Individual checkbox selection works
- [ ] Trigger button text updates with selection count
- [ ] Live search filters state list in real-time
- [ ] Dropdown opens/closes on trigger click
- [ ] Dropdown closes on outside click
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib anywhere in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds without errors
