# Template: OptionPicker (Form Component — Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect V01" — a clean, simplistic multiselect
dropdown list component. This is a Bootstrap-inspired form component snippet
(not a full page template) that provides a searchable, tag-based multiselect
dropdown.

- **Source:** https://colorlib.com/wp/template/multiselect-01/
- **Preview:** https://preview.colorlib.com/theme/multiselect-01/ (unreachable —
  fallback to screenshot + page description)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-01.jpg
  (1200×972, AVIF format on CDN)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `option-picker` (apps/option-picker, @free-react-templates/option-picker)

## Design Tokens

Extracted from ColorLib page CSS variables (wpex theme):

| Token               | Value                | Notes                              |
| ------------------- | -------------------- | ---------------------------------- |
| Brand accent        | `#1a73e8`            | Primary blue — buttons, links, focus |
| Accent hover        | `#1464cc`            | Darker blue for hover states       |
| Body text           | `#26282b`            | Dark charcoal                      |
| Body font size      | `16px`               | Base typography                    |
| Body line height    | `1.8em`              | Comfortable reading rhythm         |
| Font family         | System sans-serif stack | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif` |
| Container width     | `1140px`             | Max content width                  |
| Button background   | `#32373c`            | Dark button default (WordPress)    |
| Section borders     | `#eeeeee`            | Light gray dividers                |
| Hover bg            | `rgba(0,0,0,0.03)`  | Subtle hover highlight             |

### Design notes from screenshot

The original template shows:
- A clean white card/panel containing a multiselect dropdown
- Dropdown opens downward with a list of selectable options
- Checkboxes or toggle indicators next to each option
- Selected items displayed as removable tags/chips above or inside the input
- Minimal border styling, light shadows
- Blue accent color (#1a73e8) for active/selected states
- System sans-serif font throughout
- Simple, functional aesthetic — no decorative elements

## Gherkin Requirements

### Feature: Multiselect Dropdown Component

```gherkin
Feature: OptionPicker multiselect dropdown
  As a user filling out a form
  I want to select multiple options from a dropdown
  So that I can express complex preferences in a single input

  Background:
    Given the OptionPicker component is rendered on the page
    And the component has a list of options

  Scenario: Initial state shows collapsed dropdown
    When the page loads
    Then the dropdown input is visible
    And the dropdown list is not visible
    And the placeholder text is displayed

  Scenario: Opening the dropdown
    When I click on the dropdown input
    Then the dropdown list becomes visible
    And all options are displayed
    And the input gains focus styling (blue border)

  Scenario: Selecting a single option
    Given the dropdown is open
    When I click on an option
    Then the option is marked as selected
    And a tag/chip appears in the input showing the selected option
    And the dropdown remains open for further selections

  Scenario: Selecting multiple options
    Given the dropdown is open
    When I click on option "Red"
    And I click on option "Blue"
    And I click on option "Green"
    Then three tags/chips appear in the input
    And all three options show as selected in the list

  Scenario: Deselecting an option via tag removal
    Given option "Red" is selected
    When I click the remove button on the "Red" tag
    Then the "Red" tag disappears
    And "Red" is no longer marked as selected in the list

  Scenario: Deselecting an option via list click
    Given the dropdown is open
    And option "Red" is selected
    When I click on option "Red" again
    Then the "Red" tag disappears
    And "Red" is no longer marked as selected

  Scenario: Closing dropdown by clicking outside
    Given the dropdown is open
    When I click outside the component
    Then the dropdown list becomes not visible
    And the selected tags remain visible

  Scenario: Closing dropdown via Escape key
    Given the dropdown is open
    When I press the Escape key
    Then the dropdown list becomes not visible

  Scenario: Clearing all selections
    Given options "Red" and "Blue" are selected
    When I click the "Clear all" button
    Then all tags disappear
    And no options are marked as selected
    And the placeholder text is displayed again

  Scenario: Disabled state
    Given the component is disabled
    When I click on the dropdown input
    Then the dropdown list does not open
    And the input appears visually muted (reduced opacity)

  Scenario: Keyboard navigation
    Given the dropdown is open
    When I press the Down Arrow key
    Then focus moves to the next option
    When I press the Up Arrow key
    Then focus moves to the previous option
    When I press Enter on a focused option
    Then the option is toggled (selected/deselected)

  Scenario: Responsive layout
    Given the viewport width is less than 640px
    Then the dropdown takes full width of its container
    And tags wrap to multiple lines if needed

  Scenario: Accessibility
    Then the component has appropriate ARIA attributes
    And the dropdown has role="listbox"
    And options have role="option"
    And selected options have aria-selected="true"
    And the component is keyboard-navigable
```

## Verification Checklist

- [ ] Component renders with placeholder text when no options selected
- [ ] Dropdown opens on click and closes on outside click / Escape
- [ ] Single and multiple option selection works correctly
- [ ] Tags/chips display selected options with remove buttons
- [ ] Deselecting via tag remove and list re-click both work
- [ ] Clear all removes all selections
- [ ] Disabled state prevents interaction and shows muted styling
- [ ] Keyboard navigation (arrows, Enter, Escape) works
- [ ] ARIA attributes are correct (role, aria-selected, aria-label)
- [ ] Responsive: full-width on small screens, tags wrap
- [ ] Brand color #1a73e8 used for focus/active states
- [ ] System sans-serif font stack used
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME file contains option-picker.free.componentdock.com
- [ ] package.json homepage matches deploy URL
