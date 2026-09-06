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

## Gherkin Requirements

### Background

Given the page loads at the root URL
Then the page background is `#f8f9fd`
And the font family is "Lato" (with Arial fallback)

### Section: Main

Scenario: Page heading renders
Given the page is loaded
Then a centered heading "CherryPick" is visible
And the heading font size is approximately 28px
And the heading color is black (#000)

Scenario: Multi-select label renders
Given the page is loaded
Then a label "Select Language:" is visible to the left of the dropdown
And the label text color is gray

Scenario: Dropdown trigger button renders
Given the page is loaded
Then a dropdown trigger button is visible
And the button has a white background
And the button has a border-radius of 4px
And the button has a subtle box-shadow
And the button height is approximately 52px

Scenario: Dropdown opens on click
Given the dropdown trigger is displayed
When the user clicks the dropdown trigger
Then a dropdown panel appears below the trigger
And the dropdown panel has a subtle box-shadow
And the panel displays a list of selectable options

Scenario: Dropdown shows language options
Given the dropdown is open
Then the following options are visible: PHP, JavaScript, Java, SQL, jQuery, .Net
And each option has a checkbox to its left
And each checkbox is 20px × 20px with a 4px border-radius

Scenario: Selecting an option checks its checkbox
Given the dropdown is open
When the user clicks the "PHP" option
Then the PHP checkbox becomes checked
And the checkbox background turns #52de97 (green)
And a white checkmark appears inside the checkbox

Scenario: Multiple options can be selected
Given the dropdown is open
When the user selects "PHP"
And the user selects "JavaScript"
Then both PHP and JavaScript checkboxes are checked
And both checkboxes show the green active state

Scenario: Deselecting an option unchecks it
Given the dropdown is open and "PHP" is selected
When the user clicks the "PHP" option again
Then the PHP checkbox becomes unchecked
And the checkbox background returns to transparent

Scenario: Dropdown closes on outside click
Given the dropdown is open
When the user clicks outside the dropdown area
Then the dropdown panel closes

Scenario: Dropdown closes on second trigger click
Given the dropdown is open
When the user clicks the dropdown trigger again
Then the dropdown panel closes

### Accessibility

Scenario: Dropdown trigger is keyboard accessible
Given the page is loaded
When the user presses Tab to focus the dropdown trigger
Then the trigger receives visible focus indication
And pressing Enter or Space opens the dropdown

Scenario: Options are navigable by keyboard
Given the dropdown is open
When the user presses ArrowDown
Then focus moves to the next option
And pressing ArrowUp moves focus to the previous option

Scenario: Selection works with keyboard
Given the dropdown is open and an option is focused
When the user presses Space or Enter
Then the focused option's checkbox toggles

## Verification Checklist

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
