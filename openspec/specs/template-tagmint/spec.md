# Template: Tagmint (Form Component — Multiselect Tag Picker)

## Purpose

Recreation of ColorLib **Multiselect 13** — a free Bootstrap multiselect
dropdown with live search and tag-style selection. The original is a
single-section form component demo using select2.js. We recreate it as
a standalone React component page.

- **ColorLib source:** https://colorlib.com/wp/template/multiselect-13/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-13/
- **Category:** Form Component / Multiselect with Live Search (Tag Style — Sharp Corners)
- **Stack:** React 19 · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (extracted from preview CSS)

| Token                      | Value                           | Source class / rule                                                    |
| -------------------------- | ------------------------------- | ---------------------------------------------------------------------- |
| Font family                | `"Roboto", sans-serif`          | `body { font-family: "Roboto" ... }`                                   |
| Body background            | `#efefef` (light gray)          | `body { background-color: #efefef }`                                   |
| Paragraph color            | `#b3b3b3` (light gray)          | `p { color: #b3b3b3 }`                                                 |
| Paragraph font-weight      | `300`                           | `p { font-weight: 300 }`                                               |
| Heading font               | Roboto (same as body)           | `h1-h6 { font-family: "Roboto" ... }`                                  |
| Heading size               | `h2 { font-size: 20px }`        | `h2 { font-size: 20px }`                                               |
| Primary / accent           | `#29c7ac` (teal/turquoise)      | `.select2-selection__choice { background: #29c7ac }`                   |
| Tag background             | `#29c7ac`                       | `.select2-selection__choice { background: #29c7ac }`                   |
| Tag text color             | `#fff` (white)                  | `.select2-selection__choice { color: #fff }`                           |
| Tag font-size              | `14px`                          | `.select2-selection__choice { font-size: 14px }`                       |
| Tag padding                | `2px 10px`                      | `.select2-selection__choice { padding: 2px 10px }`                     |
| Tag border                 | none                            | `border: none`                                                         |
| Tag border-radius          | `0` (sharp corners)             | `.select2-selection__choice { border-radius: 0 !important }`           |
| Tag remove icon            | `rgba(255,255,255,0.5)`         | `.select2-selection__choice__remove { color: rgba(255,255,255,0.5) }`  |
| Tag remove hover           | `#fff`                          | `:hover .select2-selection__choice__remove { color: #fff }`            |
| Search highlight bg        | `#29c7ac`                       | `.select2-results__option--highlighted { background-color: #29c7ac }`  |
| Search highlight fg        | `#fff`                          | `.select2-results__option--highlighted { color: #fff }`                |
| Selected option bg         | `#f4f4f4`                       | `.select2-results__option[aria-selected=true] { background: #f4f4f4 }` |
| Selected option hover      | `#ddd`                          | `:hover { background-color: #ddd }`                                    |
| Content padding            | `7rem 0`                        | `.content { padding: 7rem 0 }`                                         |
| Dropdown border-radius     | `0px` (sharp corners)           | `.select2-dropdown { border-radius: 0px }`                             |
| Dropdown shadow            | `0 15px 30px 0 rgba(0,0,0,0.2)` | `.select2-dropdown { box-shadow: ... }`                                |
| Dropdown border            | none                            | `.select2-dropdown { border: none }`                                   |
| Form-control border-radius | `0`                             | `.form-control { border-radius: 0 !important }`                        |

## Section Structure (from preview DOM)

1. **Content wrapper** (`.content`): Full-height centered layout, 7rem vertical padding
2. **Heading row**: "Multi-Select #3" — centered, h2 at 20px
3. **Container row**: Centered column (col-7), text-center
4. **Instruction text**: "Names separate with comma \",\" " — light gray, weight 300
5. **Multiselect component**: select2.js powered multi-select with:
   - Tag pills (teal `#29c7ac` bg, white text, 14px, removable, **sharp corners**)
   - Inline search field for filtering options
   - Dropdown list with highlighted option matching `#29c7ac`
   - Dropdown has **0px border-radius** (sharp corners) and drop shadow
   - Options: names (Joefrey, Robert, Jorge, Mark, Luke, John, James, Ryan, Ronnie)
6. **Footer** with Component Dock link (mandatory per AGENTS.md)

## Gherkin Requirements

### Feature: Multiselect Tag Picker with Live Search (Sharp Corners)

#### Scenario: Page renders with heading and multiselect

- Given the page loads
- When the user views the page
- Then a heading "Multi-Select #3" is visible (centered, 20px)
- And a multi-select input is visible
- And instruction text "Names separate with comma" is visible

#### Scenario: Options appear on click

- Given the multiselect is closed
- When the user clicks the multiselect area
- Then a dropdown list of name options appears (Joefrey, Robert, Jorge, Mark, Luke, John, James, Ryan, Ronnie)

#### Scenario: Selecting an option creates a tag pill

- Given the dropdown is open
- When the user clicks "Robert"
- Then a teal tag pill labeled "Robert" appears in the selected area
- And the tag has sharp corners (0px border-radius)
- And the tag has a remove icon (×)

#### Scenario: Selecting multiple options creates multiple tags

- Given "Robert" is already selected
- When the user also selects "Mark"
- Then two tag pills are visible: "Robert" and "Mark"

#### Scenario: Removing a tag

- Given "Robert" is selected (tag pill visible)
- When the user clicks the × remove icon on the "Robert" tag
- Then the "Robert" tag pill disappears
- And "Robert" is no longer selected

#### Scenario: Live search filters options

- Given the dropdown is open
- When the user types "Jo" in the search input
- Then options matching "Jo" are visible (e.g. Joefrey, Jorge, John)
- And non-matching options are hidden

#### Scenario: Empty search restores all options

- Given the dropdown is filtered to "Jo"
- When the user clears the search input
- Then all options are visible again

#### Scenario: Already-selected option shows different style

- Given "Robert" is already selected
- When the dropdown is open
- Then "Robert" in the list shows a selected state (gray background #f4f4f4)

#### Scenario: Dropdown has sharp corners

- Given the dropdown is open
- Then the dropdown container has 0px border-radius (sharp corners)
- And the dropdown has a subtle drop shadow (0 15px 30px 0 rgba(0,0,0,0.2))

#### Scenario: Tags have sharp corners

- Given options are selected
- Then each tag pill has 0px border-radius (sharp corners)

#### Scenario: Accessibility

- Given the page loads
- When the user navigates with keyboard
- Then the multiselect is focusable
- And tags can be removed via keyboard
- And the search input is focusable

## Verification Checklist

- [ ] Page renders centered layout with heading and multiselect on light gray (#efefef) background
- [ ] Font is Roboto (loaded via Google Fonts or system fallback)
- [ ] Primary/accent color is teal (#29c7ac) — used on tag pills, search highlight
- [ ] Tag pills have #29c7ac background, white text, 14px font, 2px 10px padding, no border
- [ ] Tag pills have 0px border-radius (sharp corners)
- [ ] Tag remove icon is semi-transparent white, becomes fully white on hover
- [ ] Instruction text is light gray (#b3b3b3) at font-weight 300
- [ ] Heading is 20px, centered, Roboto font
- [ ] Content wrapper has 7rem vertical padding
- [ ] Dropdown has 0px border-radius (sharp corners) and drop shadow
- [ ] Dropdown highlights options in #29c7ac teal
- [ ] Selected options in dropdown show #f4f4f4 background
- [ ] Live search filters option list in real-time
- [ ] Tags can be added and removed dynamically
- [ ] Component is keyboard-accessible
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib anywhere in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds without errors
