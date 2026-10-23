# Template: CherryPick (Multiselect Form Component)

## Purpose

Recreation of ColorLib's **Multiselect 01** template — a clean, minimal multi-select dropdown component for choosing multiple items from a list.

- **Source**: https://colorlib.com/wp/template/multiselect-01/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-01/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-01.jpg
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at `https://preview.colorlib.com/theme/bootstrap/multiselect-01/`:

| Token              | Value                                  | Usage                                     |
| ------------------ | -------------------------------------- | ----------------------------------------- |
| Font family        | `"Lato", Arial, sans-serif`            | Body and headings; weights 300, 400, 700  |
| Brand color        | `#52de97`                              | Links, checkbox active state, accent      |
| Background         | `#f8f9fd`                              | Page/section background (light blue-gray) |
| Text color         | `gray` (#808080)                       | Body text, labels                         |
| Heading color      | `#000`                                 | h1–h5, strong text                        |
| Border radius      | `4px`                                  | Buttons, checkboxes, dropdown container   |
| Shadow             | `0px 10px 23px -16px rgba(0,0,0,0.14)` | Dropdown panel, button group              |
| Section padding    | `7em 0`                                | Main section vertical spacing             |
| Heading size       | `28px`                                 | `.heading-section` title                  |
| Button height      | `52px`                                 | Dropdown trigger button                   |
| Button background  | `#fff`                                 | Dropdown trigger                          |
| Checkbox border    | `2px solid rgba(0,0,0,0.2)`            | Default checkbox outline                  |
| Checkbox active bg | `#52de97`                              | Selected checkbox fill                    |
| Checkbox size      | `20px × 20px`                          | Square checkbox with 4px radius           |
| Label weight       | `500`                                  | Checkbox option labels                    |
| Label size         | `16px`                                 | Checkbox option text                      |

## Requirements

### Background

#### Scenario: Background

- **GIVEN** the page loads at the root URL
- **THEN** the page background is `#f8f9fd`
- **AND** the font family is "Lato" (with Arial fallback)

### Section: Main

#### Scenario: Page heading renders

- **GIVEN** the page is loaded
- **THEN** a centered heading "CherryPick" is visible
- **AND** the heading font size is approximately 28px
- **AND** the heading color is black (#000)

#### Scenario: Multi-select label renders

- **GIVEN** the page is loaded
- **THEN** a label "Select Language:" is visible to the left of the dropdown
- **AND** the label text color is gray

#### Scenario: Dropdown trigger button renders

- **GIVEN** the page is loaded
- **THEN** a dropdown trigger button is visible
- **AND** the button has a white background
- **AND** the button has a border-radius of 4px
- **AND** the button has a subtle box-shadow
- **AND** the button height is approximately 52px

#### Scenario: Dropdown opens on click

- **GIVEN** the dropdown trigger is displayed
- **WHEN** the user clicks the dropdown trigger
- **THEN** a dropdown panel appears below the trigger
- **AND** the dropdown panel has a subtle box-shadow
- **AND** the panel displays a list of selectable options

#### Scenario: Dropdown shows language options

- **GIVEN** the dropdown is open
- **THEN** the following options are visible: PHP, JavaScript, Java, SQL, jQuery, .Net
- **AND** each option has a checkbox to its left
- **AND** each checkbox is 20px × 20px with a 4px border-radius

#### Scenario: Selecting an option checks its checkbox

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the "PHP" option
- **THEN** the PHP checkbox becomes checked
- **AND** the checkbox background turns #52de97 (green)
- **AND** a white checkmark appears inside the checkbox

#### Scenario: Multiple options can be selected

- **GIVEN** the dropdown is open
- **WHEN** the user selects "PHP"
- **AND** the user selects "JavaScript"
- **THEN** both PHP and JavaScript checkboxes are checked
- **AND** both checkboxes show the green active state

#### Scenario: Deselecting an option unchecks it

- **GIVEN** the dropdown is open and "PHP" is selected
- **WHEN** the user clicks the "PHP" option again
- **THEN** the PHP checkbox becomes unchecked
- **AND** the checkbox background returns to transparent

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown area
- **THEN** the dropdown panel closes

#### Scenario: Dropdown closes on second trigger click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks the dropdown trigger again
- **THEN** the dropdown panel closes

### Accessibility

#### Scenario: Dropdown trigger is keyboard accessible

- **GIVEN** the page is loaded
- **WHEN** the user presses Tab to focus the dropdown trigger
- **THEN** the trigger receives visible focus indication
- **AND** pressing Enter or Space opens the dropdown

#### Scenario: Options are navigable by keyboard

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown
- **THEN** focus moves to the next option
- **AND** pressing ArrowUp moves focus to the previous option

#### Scenario: Selection works with keyboard

- **GIVEN** the dropdown is open and an option is focused
- **WHEN** the user presses Space or Enter
- **THEN** the focused option's checkbox toggles

## Verification checklist

- [ ] Page renders with correct background (#f8f9fd) and Lato font
- [ ] Centered heading renders at ~28px, black color
- [ ] "Select Language:" label appears left of dropdown
- [ ] Dropdown trigger has white bg, 4px radius, shadow, 52px height
- [ ] Dropdown opens/closes on click
- [ ] Six language options display (PHP, JavaScript, Java, SQL, jQuery, .Net)
- [ ] Checkboxes are 20×20px with 4px radius
- [ ] Selected checkbox turns #52de97 green with white checkmark
- [ ] Multiple selections work simultaneously
- [ ] Deselection reverts checkbox to default state
- [ ] Dropdown closes on outside click
- [ ] Keyboard navigation works (Tab, Arrow keys, Space/Enter)
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
