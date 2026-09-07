# Template: Chklmt (Multi-Select Form — Limited Selection)

## Purpose

Chklmt is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 17"
free template (source: https://colorlib.com/wp/template/multiselect-17/),
built under a DIFFERENT name (**Chklmt**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap Select plugin (`bootstrap-select.min.js` +
jQuery 3.x + Bootstrap 4) rendered on a light-grey page: a centered
`col-md-5` container with a single `<select multiple>` element containing
50 US state options. The page title is "Multi Select #7". The design is
minimal — a centered heading ("Multi-Select #7 (Limit to 7 selection)")
and a functional multi-select checkbox dropdown widget. The plugin replaces
the native `<select>` with a styled dropdown panel featuring a search box,
checkboxes with check marks, and "Select All" / "Deselect All" action buttons.

**WHAT MAKES CHKLMT DISTINCT (signature behaviors):**

1. **Selection limit (7 max).** The `<select>` has `data-max-options="7"`,
   which the Bootstrap Select plugin enforces: once 7 options are checked,
   all remaining unchecked options become disabled until at least one is
   deselected. This is the ONLY behavioral difference from Multiselect 16
   (Selkit).
2. **Minimal single-section layout.** The entire page is a single content
   area with generous vertical padding (`7rem 0`), centered heading, and a
   moderate-width `col-md-5` column containing the multiselect widget. No
   navbar, no hero, no footer content (beyond the Component Dock
   attribution).
3. **Bootstrap Select plugin behavior.** The plugin transforms a
   `<select multiple>` into a button-triggered checkbox dropdown panel:
   - Button shows placeholder text "Nothing selected" (or selected items
     when checked), styled as a Bootstrap form-control with border,
     height, and radius inherited from Bootstrap 4.
   - Dropdown panel appears below with: a search input at the top,
     "Select All" / "Deselect All" action buttons, and a scrollable list
     of checkbox options with check marks on the right side.
   - Each option has a checkbox with the label text and a check-mark icon
     when selected.
   - The button text updates to reflect the selected items (comma-separated
     or count).
4. **Clean, utility-first styling.** Body uses Roboto font, light grey
   `#efefef` background, paragraph text `#b3b3b3`, minimal shadows.
   No gradients, no images, no decorative elements.
5. **Show-tick mode.** The plugin uses `.show-tick` class to display check
   marks next to selected options in the dropdown.

## Naming

The ColorLib source name "Multiselect 17" is FORBIDDEN as the app name.
**Chklmt** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `chklmt` in any). Source slug

- preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 17" (page title: "Multi Select #7").
  Listed in TEMPLATES.md under **Multi-Select (7)** (section header line 835;
  the item at line 841 — `wp/template/multiselect-17/`).
- **Preview URL — REACHABLE (verified by direct fetch):** the naive
  `https://preview.colorlib.com/theme/multiselect-17/` returns 404; the
  REAL preview is the bootstrap path
  `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`
  (HTTP 200, content analyzed).
- **Screenshot URL:** `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-17.jpg`
  (1200×972 JPEG; visual fallback).
- **Design tokens extracted from preview stylesheet (`css/style.css`):**

| Token                   | Value                                                                                                               | Usage                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Font family             | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | Body, headings, all text                |
| Background              | `#efefef` (light grey)                                                                                              | `body` background                       |
| Text color (paragraphs) | `#b3b3b3`                                                                                                           | `p` elements                            |
| Font weight (body)      | `300` (light)                                                                                                       | `p` elements                            |
| Heading font size       | `20px`                                                                                                              | `h2` element                            |
| Check mark color        | `#8cba51` (green)                                                                                                   | `.check-mark`, `.selected > a.selected` |
| Content padding         | `7rem 0`                                                                                                            | `.content` wrapper                      |
| Layout                  | Bootstrap 4 grid: `col-md-5`, centered (`justify-content-center`)                                                   | Container                               |
| Button                  | Bootstrap `.form-control` (border, height, radius from Bootstrap 4)                                                 | Select trigger                          |
| Dropdown                | Bootstrap `.dropdown-menu` with search input, Select All/Deselect All buttons                                       | Plugin-rendered panel                   |
| Assets                  | `fonts/icomoon/`, `css/bootstrap-select.min.css`, `css/bootstrap.min.css`                                           | Bootstrap Select plugin                 |
| JS                      | `jquery-3.3.1.min.js`, `popper.min.js`, `bootstrap.min.js`, `bootstrap-select.min.js`, `main.js`                    | Bootstrap Select plugin                 |

- **Visual design (from TEMPLATES.md screenshot reference):**
  Light grey page with centered content. A "Multi-Select #7 (Limit to 7 selection)"
  heading sits above a single Bootstrap-styled multi-select dropdown widget. The
  dropdown is collapsed by default showing "Nothing selected". When opened, it
  reveals a scrollable checkbox list of US states with green check marks on
  selected items. The design is utilitarian — no decorative elements, no colors
  beyond the green accent.

- **Key difference from Multiselect 16 (Selkit):**
  The `<select>` element includes `data-max-options="7"`, which enforces a
  maximum of 7 concurrent selections. Once 7 items are checked, remaining
  options become disabled. This is the sole behavioral distinction. All other
  structural and visual aspects are identical to Multiselect 16.

## Gherkin Requirements

```gherkin
Feature: Chklmt — Multi-Select Form with Selection Limit
  As a user filling out a multi-select form,
  I want to select multiple options from a dropdown with a visible limit,
  So that I can pick exactly the options I need without exceeding a maximum.

  Background:
    Given the page is loaded with the Chklmt multi-select widget
    And the widget contains 50 US state options
    And the maximum selection limit is 7

  Scenario: Widget renders in collapsed state
    Then the dropdown button shows "Nothing selected"
    And the dropdown panel is not visible
    And the heading reads "Multi-Select #7 (Limit to 7 selection)"

  Scenario: Opening the dropdown reveals options
    When I click the dropdown button
    Then the dropdown panel appears below the button
    And I see a search input at the top of the panel
    And I see "Select All" and "Deselect All" action buttons
    And I see a scrollable list of 50 checkbox options
    And each option shows a checkbox and state name

  Scenario: Selecting an option adds a check mark
    Given the dropdown is open
    When I click the checkbox for "Alabama"
    Then a green check mark appears next to "Alabama"
    And the dropdown button text updates to "Alabama"
    And the option row has the selected style

  Scenario: Selecting multiple options updates the button text
    Given the dropdown is open
    When I select "Alabama"
    And I select "Alaska"
    And I select "Arizona"
    Then the dropdown button text shows "Alabama, Alaska, Arizona"

  Scenario: Enforcing the 7-item selection limit
    Given the dropdown is open
    When I select 7 options
    Then all remaining unselected options become disabled
    And I cannot select an 8th option

  Scenario: Deselecting an option re-enables others
    Given I have selected 7 options
    When I deselect one option
    Then the remaining 6 options stay selected
    And the unselected options become enabled again

  Scenario: Select All selects all options up to the limit
    Given the dropdown is open
    When I click "Select All"
    Then the first 7 options become selected
    And the remaining options stay unselected and disabled

  Scenario: Deselect All clears all selections
    Given I have selected 3 options
    When I click "Deselect All"
    Then no options are selected
    And the dropdown button text shows "Nothing selected"

  Scenario: Search filtering works
    Given the dropdown is open
    When I type "New" in the search input
    Then only states containing "New" are visible in the list
    And hidden states are not clickable

  Scenario: Closing the dropdown
    Given the dropdown is open
    When I click the dropdown button again
    Then the dropdown panel closes
    And the selected options remain checked
```

## Verification checklist

- [ ] `openspec/specs/template-chklmt/spec.md` exists with all sections
- [ ] `docs/templates/chklmt/tasks.md` exists
- [ ] Source mapping recorded: ColorLib "Multiselect 17" → "Chklmt"
- [ ] Preview URL: `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`
- [ ] Design tokens documented: Roboto font, #efefef bg, #8cba51 green, Bootstrap 4
- [ ] Selection limit (7 max) is the key behavioral feature
- [ ] All 50 US states present as options
- [ ] No `colorlib.com` or `preview.colorlib.com` strings in `apps/` code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `chklmt.free.componentdock.com`
- [ ] `homepage` set to `https://chklmt.free.componentdock.com`
