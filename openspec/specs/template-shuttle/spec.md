# Template: Shuttle (Bootstrap Multiselect)

## Purpose

Shuttle is a single-page MULTISELECT DROPDOWN COMPONENT in the free-react-templates
monorepo. It is a React recreation of the ColorLib "Multiselect 01" free template
(source: https://colorlib.com/wp/template/multiselect-01/), built under a DIFFERENT
name (**Shuttle**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 page powered by jQuery + bootstrap-multiselect.js:
a centered section with a heading ("Multiselect #01"), a label ("Select Language:"),
and a native `<select multiple>` rendered as a custom checkbox dropdown with 6
programming language options (PHP, JavaScript, Java, SQL, jQuery, .Net). The plugin
transforms the native select into a styled dropdown with custom checkboxes, an
"active" class for selected items (green checkbox with Font Awesome checkmark),
and a box-shadow popup. It is a member of the 20-template "Bootstrap Multiselect"
family (`multiselect-01` … `multiselect-20`): every sibling is the same
bootstrap-multiselect skeleton with different options and labels.

**WHAT MAKES SHUTTLE DISTINCT (signature behaviors):**

1. **Label + horizontal layout.** The label "Select Language:" is positioned
   inline to the left of the dropdown button (`<strong class="sl">` with
   `width: 150px`, gray text), with the dropdown taking the remaining width
   (`calc(100% - 150px)`). This is a side-by-side label-control pattern, not
   a stacked label-above pattern.
2. **Custom checkbox dropdown.** The dropdown renders checkboxes with custom
   styling: 20px×20px boxes with `2px solid rgba(0,0,0,0.2)` border,
   `border-radius: 4px`, transparent background. Active (selected) checkboxes
   show a green `#52de97` filled background with a white Font Awesome checkmark
   (`\f00c`), no border. Checkbox labels are 16px, font-weight 500.
3. **Brand green `#52de97`.** Used for active checkbox backgrounds and link
   color. The entire palette is minimal: green accent, gray text, black
   headings, white background. No secondary brand color.
4. **Box-shadow dropdown.** The multiselect container has
   `box-shadow: 0px 10px 23px -16px rgba(0,0,0,0.14)` and the button has
   the same shadow, creating a consistent elevated-card feel.
5. **Font Awesome 4.7 for checkmark.** The active checkbox uses
   `font-family: 'fontAwesome'` with content `\f00c`. The recreation uses
   an SVG checkmark or lucide-react icon instead.
6. **Lato font.** Loaded via Google Fonts CDN (weights 300, 400, 700).
   Body: 16px, line-height 1.8, font-weight normal.
7. **6 fixed options.** The select has exactly 6 items: PHP, JavaScript, Java,
   SQL, jQuery, .Net. No search, no grouping, no "select all" — just plain
   multi-select with custom checkboxes.

## Naming

The ColorLib source name "Multiselect 01" is FORBIDDEN as the app name.
**Shuttle** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified 2026-09-06: zero hits for "shuttle" in those
listings). It is a member of the Bootstrap Multiselect family; sibling specs
do not yet exist for multiselect-02 through -20.

Source slug + preview URL recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Multiselect 01" (page title: "Multiselect 01").
  Listed in TEMPLATES.md under **Bootstrap Multiselect (20)** (section header
  line 823; row at line 825 — `wp/template/multiselect-01/`).
- **Live preview — REACHABLE via alternative URL (verified 2026-09-06):**
  the naive `https://preview.colorlib.com/theme/multiselect-01/` returns
  404; the REAL preview is
  **`https://preview.colorlib.com/theme/bootstrap/multiselect-01/`** (HTTP
  200, 3,643 bytes, `<title>Multiselect 01</title>`). Stylesheets:
  `css/style.css` (full Bootstrap 4.3.1 + custom styles, ~222 KB). Scripts:
  `js/jquery.min.js`, `js/popper.js`, `js/bootstrap.min.js`,
  `js/bootstrap-multiselect.js`, `js/main.js`. Fonts: Google Fonts Lato
  (300, 400, 700) + Font Awesome 4.7.0 CDN.
- **Live DOM structure (1:1, verified from the fetched HTML):**
  - `section.ftco-section` (padding 7em 0, bg `#f8f9fd`)
    - `div.container` → `div.row.justify-content-center` →
      `div.col-md-6.text-center.mb-5` → `h2.heading-section` ("Multiselect #01")
    - `div.row.justify-content-center` →
      `div.col-md-8.col-lg-5.d-flex.justify-content-center.align-items-center`
        → `div.d-flex.text-left.align-items-center.w-100`
          - `strong.sl` ("Select Language:", width 150px, gray)
          - `select#multiple-checkboxes[multiple]` with 6 `<option>` elements
  - The bootstrap-multiselect.js plugin transforms the `<select>` at runtime
    into a button-group dropdown with custom checkboxes.
- **Screenshot:** Downloaded from ColorLib CDN (AVIF format, 6,293 bytes).
  Could not render locally (no AVIF decoder in headless env). Based on the
  DOM + CSS analysis: a clean, minimal page with a centered section, gray
  background (`#f8f9fd`), bold heading, and a green-accented multiselect
  dropdown. The overall aesthetic is modern and simple.

## Design tokens (live stylesheet, verified 2026-09-06)

| Token             | Value                                    | Use                                                                        |
| ----------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| Page background   | `#f8f9fd`                                | body background (light gray-blue)                                          |
| Brand green       | `#52de97`                                | Link color, active checkbox bg, `bg-primary` class                         |
| Text color        | `gray`                                   | Body text, label text, button text                                         |
| Heading color     | `#000`                                   | h1–h5 headings                                                             |
| Button bg         | `#fff`                                   | Dropdown trigger button background                                         |
| Button shadow     | `0px 10px 23px -16px rgba(0,0,0,0.14)`  | Button + dropdown container box-shadow                                     |
| Checkbox border   | `2px solid rgba(0,0,0,0.2)`             | Unchecked checkbox border                                                  |
| Checkbox radius   | `4px`                                    | Checkbox and button border-radius                                          |
| Active checkbox   | `#52de97` bg, white checkmark            | Selected item checkbox                                                     |
| Font family       | `"Lato", Arial, sans-serif`             | Body + headings (Google Fonts Lato 300, 400, 700)                          |
| Font size         | `16px`                                   | Body base                                                                  |
| Line height       | `1.8`                                    | Body                                                                       |
| Heading font size | `28px`                                   | `.heading-section`                                                         |
| Label width       | `150px`                                  | `.sl` label (fixed width inline)                                           |
| Dropdown width    | `calc(100% - 150px)`                    | `.btn-group` (remaining space after label)                                 |
| Section padding   | `7em 0`                                  | `.ftco-section` vertical rhythm                                            |
| Icon font         | Font Awesome 4.7.0 (`\f00c` checkmark)  | Active checkbox icon → replace with lucide-react or SVG                    |

## Gherkin requirements

### Feature: Shuttle — Multiselect Dropdown Component

  As a visitor to the Shuttle page,
  I want to see a styled multiselect dropdown with labeled options,
  so that I can understand how a multi-select form component looks and behaves.

  Background:
    Given the page is loaded at the Shuttle root URL
    And the browser supports modern JavaScript (ES2020+)

  Scenario: Page renders the heading
    Then a heading "Multiselect #01" should be visible
    And the heading should use the Lato font family
    And the heading should be centered horizontally

  Scenario: Page renders the label
    Then a label "Select Language:" should be visible
    And the label should be positioned to the left of the dropdown
    And the label should have gray text color

  Scenario: Dropdown trigger button is visible
    Then a dropdown trigger button should be visible
    And the button should display placeholder text or selected count
    And the button should have a white background
    And the button should have a subtle box-shadow

  Scenario: Dropdown opens on click
    When I click the dropdown trigger button
    Then a dropdown menu should appear
    And the dropdown should contain 6 options
    And the options should be: PHP, JavaScript, Java, SQL, jQuery, .Net

  Scenario: Options have custom checkboxes
    When I click the dropdown trigger button
    Then each option should display a custom checkbox
    And unchecked checkboxes should have a 2px gray border
    And unchecked checkboxes should have a 4px border-radius

  Scenario: Selecting an option checks its checkbox
    When I click the dropdown trigger button
    And I click the "PHP" option
    Then the "PHP" checkbox should be checked
    And the checked checkbox should have a green background (#52de97)
    And the checked checkbox should display a checkmark icon

  Scenario: Multiple options can be selected
    When I click the dropdown trigger button
    And I click the "PHP" option
    And I click the "JavaScript" option
    Then both "PHP" and "JavaScript" should be checked
    And the button text should reflect the number of selected items

  Scenario: Deselecting an option unchecks it
    Given I have selected "PHP"
    When I click the dropdown trigger button
    And I click the "PHP" option again
    Then the "PHP" checkbox should be unchecked
    And the unchecked checkbox should have a transparent background

  Scenario: Dropdown closes when clicking outside
    Given the dropdown is open
    When I click outside the dropdown area
    Then the dropdown menu should close

  Scenario: Responsive layout on mobile
    Given the viewport width is 375px
    Then the label and dropdown should stack vertically
    And the dropdown should take full width

  Scenario: Section background color
    Then the page background should be #f8f9fd
    And the section should have vertical padding of approximately 7em

  Scenario: Footer links to Component Dock
    Then a link to "https://www.componentdock.com/" should be present
    And the link text should contain "Component Dock"

## Verification checklist

- [ ] Spec matches the live DOM structure from the preview
- [ ] Design tokens match the live stylesheet values
- [ ] All 6 options are present (PHP, JavaScript, Java, SQL, jQuery, .Net)
- [ ] Label is inline-left with fixed 150px width
- [ ] Dropdown has box-shadow styling
- [ ] Active checkboxes use brand green #52de97
- [ ] Font is Lato (Google Fonts, weights 300/400/700)
- [ ] Background is #f8f9fd
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to Component Dock
- [ ] 100% test coverage on new code
- [ ] Spec passes `npm run spec:validate`
