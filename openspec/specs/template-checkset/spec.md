# Template: Checkset (Multiselect Component)

## Purpose

Recreation of ColorLib "Multiselect 01" — a centered single-page demo of a
multi-select dropdown with checkbox items. The page displays a "Select
Language:" label and a custom multi-select component with checkbox options
(PHP, JavaScript, Java, SQL, jQuery, .Net). Clean white card on a light
blue-gray background with green accent color.

- **Source slug:** `multiselect-01`
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-01/
- **ColorLib page:** https://colorlib.com/wp/template/multiselect-01/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview CSS (`css/style.css` — bundled Bootstrap 4.3.1
+ custom styles) and HTML DOM.

| Token               | Value                                       | Notes                                         |
| ------------------- | ------------------------------------------- | --------------------------------------------- |
| Body font           | `"Lato", Arial, sans-serif`                 | Loaded via Google Fonts, weight 300/400/700    |
| Heading font        | `"Lato", Arial, sans-serif`                 | Same family as body                           |
| Body background     | `#f8f9fd`                                   | Light blue-gray (`.ftco-section` parent)       |
| Page background     | `#fff`                                      | White page behind the section                 |
| Heading text        | `#000`                                      | Black, 28px (`.heading-section`)              |
| Label text          | `gray`                                      | "Select Language:" label, bold, 150px wide     |
| Checkbox text       | `#000`                                      | Black option labels, 16px, font-weight 500    |
| Brand/accent color  | `#52de97`                                   | Green — links, active checkbox bg, bg-primary  |
| Link hover color    | inherited from `#52de97`                     | Same green, transition 0.3s                   |
| Button background   | `#fff`                                      | White dropdown trigger button                  |
| Button shadow       | `0px 10px 23px -16px rgba(0,0,0,0.14)`     | Subtle soft shadow on button and dropdown      |
| Button border-radius| `4px`                                       | Rounded-rect on button and checkboxes          |
| Button height       | `52px`                                      | Fixed height on `.btn-group`                  |
| Checkbox border     | `2px solid rgba(0,0,0,0.2)`                 | Transparent gray border, 20x20px, 4px radius  |
| Active checkbox bg  | `#52de97`                                   | Green fill with white checkmark icon           |
| Active checkbox icon| Font Awesome `\f00c` (check)                | White, line-height 1.2, padding-left 2px       |
| Dropdown shadow     | `0px 10px 23px -16px rgba(0,0,0,0.14)`     | Same soft shadow as button                    |
| Dropdown width      | `calc(100% - 150px)`                        | Spans remaining width after label              |
| Option font-size    | `16px`                                      | Inside `.multiselect-container > li > a > label`|
| Option font-weight  | `500`                                       | Medium weight for option labels                |

## Visual design (from screenshot + CSS)

The template shows a centered layout on a white page with "Multiselect #01"
as a heading (28px, black, Lato font). Below is a single interactive
component row:

1. **Label** — "Select Language:" in bold gray text, fixed 150px width, aligned
   to the left of the dropdown.
2. **Multi-select dropdown** — white background, soft drop shadow, 4px
   border-radius, height 52px. Shows a placeholder or selected items text.
3. **Dropdown panel** — when opened, shows a list of checkbox options:
   - PHP, JavaScript, Java, SQL, jQuery, .Net
   - Each option has a 20x20px checkbox (2px solid rgba(0,0,0,0.2) border,
     4px radius) on the left and the label text on the right.
   - Active/selected items get a green (#52de97) checkbox fill with a white
     checkmark icon (Font Awesome).
   - Dropdown panel has the same soft shadow as the button.
4. **Background** — light blue-gray (#f8f9fd) section background.
5. **Overall aesthetic**: Minimal, clean Bootstrap-style multiselect demo.
   No navbar, no footer in the original — just the centered component.

## Gherkin requirements

```gherkin
Feature: Checkset — multi-select dropdown with checkboxes

  Background:
    Given the page loads at the root URL

  Scenario: Page displays heading
    Then the heading "Multiselect #01" is visible
    And the heading is centered on the page

  Scenario: Label is visible
    Then the label "Select Language:" is visible
    And the label is bold and gray

  Scenario: Dropdown shows default state
    Then the multi-select dropdown is visible
    And the dropdown button has a white background
    And the dropdown button has a soft drop shadow
    And the dropdown button has 4px border-radius

  Scenario: Opening the dropdown
    When the user clicks the multi-select dropdown
    Then the dropdown panel opens
    And the panel displays checkbox options: PHP, JavaScript, Java, SQL, jQuery, .Net

  Scenario: Selecting an option
    Given the dropdown panel is open
    When the user clicks "PHP"
    Then the PHP checkbox becomes checked
    And the checkbox shows a green (#52de97) fill with a white checkmark

  Scenario: Deselecting an option
    Given the dropdown panel is open
    And "PHP" is selected
    When the user clicks "PHP"
    Then the PHP checkbox becomes unchecked
    And the checkbox shows a transparent border with no fill

  Scenario: Multiple selections
    Given the dropdown panel is open
    When the user clicks "PHP"
    And the user clicks "JavaScript"
    Then both PHP and JavaScript are selected
    And both checkboxes show green fill

  Scenario: Closing the dropdown
    Given the dropdown panel is open
    When the user clicks outside the dropdown
    Then the dropdown panel closes

  Scenario: Keyboard accessibility
    Given the dropdown panel is open
    When the user presses Escape
    Then the dropdown panel closes

  Scenario: Responsive layout
    Given the page is viewed on a mobile viewport
    Then the label and dropdown stack or adjust gracefully
    And all options remain readable

  Scenario: Visual design match
    Then the background is light blue-gray (#f8f9fd)
    And headings are black (#000) at 28px
    And the label is bold gray text
    And the dropdown has white background with soft shadow
    And selected checkboxes are green (#52de97) with white checkmark
    And the font is Lato (or system sans-serif fallback)
    And the footer links to https://www.componentdock.com/
```

## Component breakdown

1. **PageLayout** — full-page container with light blue-gray (#f8f9fd) background
2. **HeadingSection** — centered "Multiselect #01" heading (28px, black, Lato)
3. **SelectRow** — flex row with label + multi-select dropdown
4. **MultiSelectDropdown** — custom dropdown trigger (white bg, shadow, 4px radius, 52px height)
5. **DropdownPanel** — absolute-positioned panel with checkbox list
6. **CheckboxOption** — individual option: checkbox (20x20, border, radius) + label text
7. **Footer** — "Made with Component Dock" link (mandatory per AGENTS.md)

## Verification checklist

- [ ] Page renders with light blue-gray (#f8f9fd) background
- [ ] Heading "Multiselect #01" is centered, 28px, black, Lato font
- [ ] "Select Language:" label is visible, bold, gray, 150px wide
- [ ] Dropdown trigger has white background, soft shadow, 4px radius, 52px height
- [ ] Clicking the dropdown opens the checkbox panel
- [ ] Panel shows 6 options: PHP, JavaScript, Java, SQL, jQuery, .Net
- [ ] Clicking an option toggles its checkbox (green fill when selected)
- [ ] Multiple options can be selected simultaneously
- [ ] Clicking outside closes the dropdown
- [ ] Escape key closes the dropdown
- [ ] Responsive: layout adapts on mobile viewports
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage

## Replication notes

- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/multiselect-01/`
  (fetched successfully on 2026-09-06). The non-`/bootstrap/` URL returned 404.
- **Screenshot:** ColorLib page at
  `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-01.jpg`
  (AVIF format, analyzed via HTML/CSS DOM instead).
- **jQuery/Bootstrap JS:** Replace with React state (useState for open/close
  and selected items) and Tailwind CSS. No jQuery dependency.
- **Font Awesome icons:** Replace with lucide-react Check icon for the
  checkbox checkmark.
- **Bootstrap multiselect plugin:** Replace with a custom React multi-select
  component using controlled checkbox state.
- **Key simplicity:** This is a minimal single-component template — one
  section, one interactive widget, no navbar/footer in the original. The
  React version adds a footer per AGENTS.md rules.
