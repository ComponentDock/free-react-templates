# Template: ChoiceStack (Form Component — Minimalist Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect V02" — a minimalist Bootstrap 4 multiselect
dropdown snippet. A clean, stripped-down multiselect component focused on
simplicity and easy integration.

- **Source:** https://colorlib.com/wp/template/multiselect-02/
- **Preview:** https://preview.colorlib.com/theme/multiselect-02/ (unreachable —
  fallback to screenshot + page description)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-02.jpg
  (1200×972, AVIF format on CDN)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript (strict)
- **New name:** `choice-stack` (apps/choice-stack, @free-react-templates/choice-stack)

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
| Button background   | `#32373c`            | Dark button default                |
| Section borders     | `#eeeeee`            | Light gray dividers                |
| Hover bg            | `rgba(0,0,0,0.03)`  | Subtle hover highlight             |

### Design notes from description + screenshot context

The original is described as "minimalist" — even cleaner than Multiselect V01:
- Ultra-clean white panel with minimal border treatment
- Simple dropdown arrow indicator
- Options list with subtle hover states
- Selected items displayed inline or as minimal tags
- Bootstrap 4 styling conventions (rounded corners, standard spacing)
- No shadows or decorative elements — pure function
- Blue accent for all interactive states

Compared to V01 (option-picker), this variant emphasizes:
- Fewer visual elements — no card shadow, thinner borders
- More compact spacing
- Bootstrap 4 default border-radius (0.25rem / 4px)
- Possibly no search/filter — just a pure dropdown

## Gherkin Requirements

### Feature: Minimalist Multiselect Dropdown

```gherkin
Feature: ChoiceStack minimalist multiselect
  As a developer embedding a form component
  I want a minimalist multiselect dropdown
  So that I can add multi-selection to forms with zero visual clutter

  Background:
    Given the ChoiceStack component is rendered
    And the component has a list of options

  Scenario: Collapsed state
    When the page loads
    Then a single-line input/trigger is visible
    And the dropdown list is hidden
    And a dropdown arrow indicator is shown

  Scenario: Opening the dropdown
    When I click the dropdown trigger
    Then the options list appears below
    And the trigger shows focus styling (blue border)

  Scenario: Selecting one option
    Given the dropdown is open
    When I click an option
    Then the option gets a checkmark indicator
    And the selected count or label updates in the trigger

  Scenario: Multi-selection
    Given the dropdown is open
    When I select "Option A"
    And I select "Option B"
    Then both options show checkmarks
    And the trigger shows "2 selected" or similar count

  Scenario: Deselecting by re-clicking
    Given option "Option A" is selected
    When I click "Option A" again
    Then the checkmark is removed
    And the selected count decreases

  Scenario: Closing on outside click
    Given the dropdown is open
    When I click outside the component
    Then the dropdown list closes
    And selections are preserved

  Scenario: Escape key closes dropdown
    Given the dropdown is open
    When I press Escape
    Then the dropdown closes

  Scenario: Disabled state
    Given the component is disabled
    When I click the trigger
    Then nothing happens
    And the component appears muted

  Scenario: Responsive width
    Given the viewport is 480px wide
    Then the dropdown spans full container width

  Scenario: Accessibility
    Then the trigger has role="combobox"
    And the list has role="listbox"
    And options have role="option"
    And aria-multiselectable="true" is set on the list
```

## Verification Checklist

- [ ] Component renders collapsed with arrow indicator
- [ ] Dropdown opens/closes on click, outside click, and Escape
- [ ] Single and multi-selection with checkmark indicators
- [ ] Selected count/label updates in trigger
- [ ] Deselect via re-click works
- [ ] Disabled state prevents interaction
- [ ] Responsive: full-width on small screens
- [ ] ARIA: combobox, listbox, option roles, multiselectable
- [ ] Brand color #1a73e8 for focus/active states
- [ ] Bootstrap 4 border-radius (4px)
- [ ] System sans-serif font stack
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] CNAME: choice-stack.free.componentdock.com
- [ ] homepage matches deploy URL
