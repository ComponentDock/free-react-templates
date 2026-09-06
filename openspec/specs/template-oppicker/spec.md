# Template: Oppicker (Bootstrap Multiselect Dropdown)

## Purpose

Recreation of ColorLib "Multiselect 01" — a clean, centered multiselect
dropdown list component.

- **Source**: https://colorlib.com/wp/template/multiselect-01/
- **Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-01/
  (preview reached; fallback to screenshot noted where preview was 404 at
  `/theme/multiselect-01/`; actual URL uses `/theme/bootstrap/multiselect-01/`)
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token                | Value                                  | Notes                                   |
| ------------------- | -------------------------------------- | --------------------------------------- |
| Font family          | "Lato", Arial, sans-serif              | @font-face weights 300, 400, 700       |
| Body background      | #f8f9fd                                | Light blue-gray                         |
| Body text color      | gray                                   | Default text throughout                 |
| Link color           | #52de97                                | Green accent                            |
| Brand / bg-primary   | #52de97                                | Same green — used for active checkboxes |
| Heading color        | #000                                   | Black headings                          |
| Heading font-weight  | 400 (normal)                           | Lato 400                               |
| .heading-section     | font-size 28px, color #000             | Main page heading                       |
| Section padding      | 7em 0                                  | .ftco-section                           |
| Checkbox border      | 2px solid rgba(0,0,0,0.2)              | Unselected state                        |
| Checkbox bg (active) | #52de97                                | Green fill when checked                 |
| Checkbox border-radius | 4px                                   | Matches button radius                   |
| Checkbox size        | 20px × 20px                            | Square checkboxes                       |
| Checkbox checkmark   | White Font Awesome \f00c               | Pseudo-element on active li             |
| Button group height  | 52px                                   | Dropdown trigger button                 |
| Button border-radius | 4px                                    | Rounded corners                         |
| Button background    | #fff                                   | White                                   |
| Button shadow        | 0px 10px 23px -16px rgba(0,0,0,0.14)  | Subtle drop shadow                      |
| Dropdown shadow      | 0px 10px 23px -16px rgba(0,0,0,0.14)  | Same shadow on open panel               |
| Label text (.sl)     | color gray, width 150px                | "Select Language:" label                |
| Dropdown item font   | font-size 16px, font-weight 500        | Each option label                       |
| Select-all option    | font-weight 700, color gray            | Bold header row                         |

## Visual Design (from TEMPLATES.md screenshot)

The original screenshot shows a centered page with:
- A single section with generous vertical padding (7em top/bottom)
- A heading "Multiselect #01" centered at the top
- Below the heading: a "Select Language:" label on the left (gray text, ~150px wide)
- A custom-styled multiselect dropdown on the right side
- The dropdown trigger shows "1 selected" with a chevron indicator
- When opened, the dropdown shows a list of language options (PHP, JavaScript, Java, SQL, jQuery, .Net) with custom-styled checkboxes
- Each option has a green-filled checkbox when selected, with a white checkmark
- The overall aesthetic is clean, minimal, white-background card feel with subtle shadows
- Light blue-gray (#f8f9fd) page background
- Green accent (#52de97) for interactive elements

## Requirements (Gherkin)

### Scenario: Page renders with centered heading

```gherkin
Feature: Multiselect Dropdown Page

  Scenario: Page displays the heading
    Given the user visits the page
    Then a heading "Multiselect #01" is visible
    And the heading is centered on the page
```

### Scenario: Select label is displayed

```gherkin
  Scenario: Select label is visible
    Given the user visits the page
    Then the text "Select Language:" is visible to the left of the dropdown
```

### Scenario: Dropdown trigger shows placeholder

```gherkin
  Scenario: Dropdown shows initial state
    Given the user visits the page
    Then the dropdown trigger button is visible
    And the trigger text shows "None selected" or an empty selection state
```

### Scenario: Opening the dropdown reveals options

```gherkin
  Scenario: User opens the multiselect dropdown
    Given the user visits the page
    When the user clicks the dropdown trigger
    Then a dropdown panel opens below the trigger
    And the options "PHP", "JavaScript", "Java", "SQL", "jQuery", ".Net" are visible
    And a "Select All" option is visible at the top of the list
```

### Scenario: Selecting an option highlights it

```gherkin
  Scenario: User selects a single option
    Given the dropdown is open
    When the user clicks "PHP"
    Then the checkbox next to "PHP" turns green (#52de97) with a white checkmark
    And the trigger text updates to show "1 selected"
```

### Scenario: Selecting multiple options

```gherkin
  Scenario: User selects multiple options
    Given the dropdown is open
    When the user clicks "PHP"
    And the user clicks "JavaScript"
    Then both checkboxes are green with white checkmarks
    And the trigger text shows "2 selected"
```

### Scenario: Select All option

```gherkin
  Scenario: User clicks Select All
    Given the dropdown is open
    When the user clicks "Select All"
    Then all option checkboxes turn green
    And the trigger text shows "6 selected" (or "All selected")
```

### Scenario: Deselecting an option

```gherkin
  Scenario: User deselects a previously selected option
    Given "PHP" is selected
    When the user clicks "PHP" again
    Then the checkbox next to "PHP" returns to transparent border state
    And the trigger text decrements the count
```

### Scenario: Closing the dropdown

```gherkin
  Scenario: Dropdown closes on outside click
    Given the dropdown is open
    When the user clicks outside the dropdown area
    Then the dropdown panel closes
    And the selected options remain shown on the trigger
```

### Scenario: Visual fidelity — colors and shadows

```gherkin
  Scenario: Design tokens match reference
    Given the user visits the page
    Then the page background is light blue-gray (#f8f9fd)
    And the heading text is black (#000)
    And the select label text is gray
    And the active checkbox background is green (#52de97)
    And the dropdown trigger has a subtle box shadow
    And the dropdown panel has a subtle box shadow
    And all border radius values are 4px
```

### Scenario: Accessibility

```gherkin
  Scenario: Keyboard navigation
    Given the user visits the page
    When the user tabs to the dropdown trigger
    Then the trigger receives focus
    When the user presses Enter or Space
    Then the dropdown opens
    When the user uses arrow keys
    Then focus moves between options
    When the user presses Space on an option
    Then the option is toggled
```

## Component Structure

```
src/
  App.tsx                    — Composes the page: section > container > heading + dropdown
  components/
    MultiselectDropdown.tsx  — Custom multiselect with checkboxes, dropdown panel, trigger
  index.css                  — Tailwind entry + Lato font import + theme tokens
  main.tsx                   — Entry point (excluded from coverage)
```

### Section order (matching the original 1:1)

1. **Full-page section** — `.ftco-section` equivalent: padding 7em 0, centered content
2. **Heading** — "Multiselect #01" centered, 28px, black, font-weight 400
3. **Multiselect component** — flex row: label "Select Language:" (150px, gray) + custom multiselect dropdown

The template is a single-section, single-component page. No navbar, no footer
section in the original — just the centered dropdown demo.

## Verification Checklist

- [ ] Lato font loads via Google Fonts link in index.html
- [ ] Page background is #f8f9fd
- [ ] Heading is centered, 28px, black (#000), Lato 400
- [ ] "Select Language:" label is gray, 150px wide, left-aligned
- [ ] Dropdown trigger is 52px tall, white background, 4px radius, subtle shadow
- [ ] Dropdown opens on click, shows 6 language options + Select All
- [ ] Checkboxes are custom-styled: 20x20, 2px border rgba(0,0,0,0.2), 4px radius
- [ ] Active checkboxes fill green (#52de97) with white checkmark
- [ ] Trigger text updates with selection count
- [ ] Dropdown closes on outside click
- [ ] Dropdown closes on Escape key
- [ ] Keyboard navigation works (Tab, Enter, Arrow keys, Space)
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] public/CNAME contains oppicker.free.componentdock.com
- [ ] homepage in package.json is https://oppicker.free.componentdock.com
- [ ] No references to ColorLib in app source files
- [ ] 100% test coverage (lines, functions, branches, statements)
