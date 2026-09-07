# Template: Tagmix (Form Component — Multiselect Tag Picker)

## Purpose

Recreation of ColorLib **Multiselect 11** — a free Bootstrap multiselect
dropdown with live search and tag-style selection. The original is a
single-section form component demo using select2.js. We recreate it as
a standalone React component page.

- **ColorLib source:** https://colorlib.com/wp/template/multiselect-11/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-11/
- **Category:** Form Component / Multiselect with Live Search (Tag Style)
- **Stack:** React 19 · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (extracted from preview CSS)

| Token                 | Value                                     | Source class / rule                                                    |
| --------------------- | ----------------------------------------- | ---------------------------------------------------------------------- |
| Font family           | `"Roboto", sans-serif`                    | `body { font-family: "Roboto" ... }`                                   |
| Body background       | `#fff` (white)                            | `body { background-color: #fff }`                                      |
| Body text color       | `#333` (default browser)                  | (no explicit body color rule; default)                                 |
| Paragraph color       | `#b3b3b3` (light gray)                    | `p { color: #b3b3b3 }`                                                 |
| Paragraph font-weight | `300`                                     | `p { font-weight: 300 }`                                               |
| Heading font          | Roboto (same as body)                     | `h1-h6 { font-family: "Roboto" ... }`                                  |
| Heading size          | `h2 { font-size: 20px }`                  | `h2 { font-size: 20px }`                                               |
| Primary / accent      | `#65587f` (muted purple)                  | `.select2-selection__choice { background: #65587f }`                   |
| Tag background        | `#65587f`                                 | `.select2-selection__choice { background: #65587f }`                   |
| Tag text color        | `#fff` (white)                            | `.select2-selection__choice { color: #fff }`                           |
| Tag font-size         | `14px`                                    | `.select2-selection__choice { font-size: 14px }`                       |
| Tag padding           | `2px 10px`                                | `.select2-selection__choice { padding: 2px 10px }`                     |
| Tag border            | none                                      | `border: none`                                                         |
| Tag remove icon       | `rgba(255,255,255,0.5)`                   | `.select2-selection__choice__remove { color: rgba(255,255,255,0.5) }`  |
| Tag remove hover      | `#fff`                                    | `:hover .select2-selection__choice__remove { color: #fff }`            |
| Search highlight bg   | `#65587f`                                 | `.select2-results__option--highlighted { background-color: #65587f }`  |
| Search highlight fg   | `#fff`                                    | `.select2-results__option--highlighted { color: #fff }`                |
| Selected option bg    | `#f4f4f4`                                 | `.select2-results__option[aria-selected=true] { background: #f4f4f4 }` |
| Selected option hover | `#ddd`                                    | `:hover { background-color: #ddd }`                                    |
| Content padding       | `7rem 0`                                  | `.content { padding: 7rem 0 }`                                         |
| Select2 search field  | `top: 2px; left: 4px; position: relative` | `.select2-search__field`                                               |

## Section Structure (from preview DOM)

1. **Content wrapper** (`.content`): Full-height centered layout, 7rem vertical padding
2. **Heading row**: "Multi-Select #1" — centered, h2 at 20px, black text
3. **Container row**: Centered column (col-7), text-center
4. **Instruction text**: "Tags separate with comma \",\" " — light gray, weight 300
5. **Multiselect component**: select2.js powered multi-select with:
   - Multiple tag pills (purple `#65587f` bg, white text, 14px, removable)
   - Inline search field for filtering options
   - Dropdown list with highlighted option matching `#65587f`
6. **Footer** with Component Dock link (mandatory per AGENTS.md)

## Gherkin Requirements

### Feature: Multiselect Tag Picker with Live Search

#### Scenario: Page renders with heading and multiselect

- Given the page loads
- When the user views the page
- Then a heading "Multi-Select #1" is visible (centered, 20px)
- And a multi-select input is visible
- And instruction text "Tags separate with comma" is visible

#### Scenario: Options appear on click

- Given the multiselect is closed
- When the user clicks the multiselect area
- Then a dropdown list of options appears (Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd)

#### Scenario: Selecting an option creates a tag pill

- Given the dropdown is open
- When the user clicks "Design"
- Then a purple tag pill labeled "Design" appears in the selected area
- And the tag has a remove icon (×)

#### Scenario: Selecting multiple options creates multiple tags

- Given "Design" is already selected
- When the user also selects "HTML5"
- Then two tag pills are visible: "Design" and "HTML5"

#### Scenario: Removing a tag

- Given "Design" is selected (tag pill visible)
- When the user clicks the × remove icon on the "Design" tag
- Then the "Design" tag pill disappears
- And "Design" is no longer selected

#### Scenario: Live search filters options

- Given the dropdown is open
- When the user types "HT" in the search input
- Then options matching "HT" are visible (e.g. HTML5)
- And non-matching options are hidden

#### Scenario: Empty search restores all options

- Given the dropdown is filtered to "HT"
- When the user clears the search input
- Then all options are visible again

#### Scenario: Already-selected option shows different style

- Given "Design" is already selected
- When the dropdown is open
- Then "Design" in the list shows a selected state (gray background #f4f4f4)

#### Scenario: Accessibility

- Given the page loads
- When the user navigates with keyboard
- Then the multiselect is focusable
- And tags can be removed via keyboard
- And the search input is focusable

## Verification Checklist

- [ ] Page renders centered layout with heading and multiselect on white (#fff) background
- [ ] Font is Roboto (loaded via Google Fonts or system fallback)
- [ ] Primary/accent color is muted purple (#65587f) — used on tag pills, search highlight
- [ ] Tag pills have #65587f background, white text, 14px font, 2px 10px padding, no border
- [ ] Tag remove icon is semi-transparent white, becomes fully white on hover
- [ ] Instruction text is light gray (#b3b3b3) at font-weight 300
- [ ] Heading is 20px, centered, Roboto font
- [ ] Content wrapper has 7rem vertical padding
- [ ] Dropdown highlights options in #65587f purple
- [ ] Selected options in dropdown show #f4f4f4 background
- [ ] Live search filters option list in real-time
- [ ] Tags can be added and removed dynamically
- [ ] Component is keyboard-accessible
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib anywhere in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds without errors
