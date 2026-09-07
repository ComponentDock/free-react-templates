# Template: OptCombo (Form / Multi-Select Snippet)

## Purpose

Recreation of ColorLib **Multiselect V20** (`multiselect-20`).
Preview URL: https://preview.colorlib.com/theme/bootstrap/multiselect-20/
Source page: https://colorlib.com/wp/template/multiselect-20/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
This is a multi-section form snippet — three stacked multi-select category
pickers, each with a distinct chip color variant, and the first picker has
a maximum selection limit of 5.

## Reference sources

- **Live preview DOM** (fetched 2026-09-07): `https://preview.colorlib.com/theme/bootstrap/multiselect-20/`
  - Title: "Multi-Select #10 (Limit to 5)" with `<label>` accessibility
  - Three identical `<select>` elements with `multiple` attribute, each wrapped in a `.color-1`, `.color-2`, or `.color-3` container
  - Options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
  - First dropdown enforces max 5 selections (via Chosen plugin config)
- **Screenshot** (TEMPLATES.md): `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg`
  - Shows the heading "Multi-Select #10 (Limit to 5)" followed by three stacked multi-select dropdowns, each with different tag-chip colors (yellow-green, mint-green, light-blue). Same minimal gray background aesthetic as multiselect-19.

## Design tokens

Identical base tokens to multiselect-19 (shared `style.css`):

| Token | Value | Source |
|---|---|---|
| Font family (body + headings) | `"Roboto", sans-serif` (weights 300, 400) | `style.css` |
| Background (page) | `#efefef` | `style.css body` |
| Text color (paragraphs) | `#b3b3b3` | `style.css p` |
| Heading color | inherited `#26282b` | Colorlib theme |
| h2 size | `20px` | `style.css h2` |
| Content padding | `7rem 0` | `style.css .content` |
| Select container | width 100%, no border, `border-radius: 4px`, padding 7px, `box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)` | `style.css` |
| Tag chip color-1 | `#e5e4cc` (muted yellow-green) | `style.css .color-1` |
| Tag chip color-2 | `#c7f0db` (mint green) | `style.css .color-2` |
| Tag chip color-3 | `#d3f4ff` (light blue) | `style.css .color-3` |
| Tag chip default | `#eeeeee` gradient | `chosen.css` |
| Tag chip padding | 7px top/bottom, 10px left, 26px right | `style.css` |
| Tag chip border-radius | 3px | `chosen.css` |
| Dropdown shadow | `0 15px 30px 0 rgba(0,0,0,0.2)` | `style.css` |
| Dropdown border-radius | 4px | `style.css` |
| Search input height | 32px, font-size 14px | `style.css` |
| Active focus border | `#5897fb` (blue) | `chosen.css` |
| Highlighted option | `#3875d7` (blue) gradient | `chosen.css` |
| Row spacing | `mb-3` (Bootstrap margin-bottom) | HTML `row` class |

## Gherkin requirements

```gherkin
Feature: OptCombo — Multi-select category picker with color variants and limit
  As a developer embedding multiple multi-select filters
  I want stacked pickers with distinct color themes and selection limits
  So that users can filter by category with visual differentiation

  Background:
    Given the OptCombo page is loaded
    And the page background is light gray (#efefef)
    And the Roboto font family is loaded

  Scenario: Page structure
    Then a centered heading "Multi-Select #10 (Limit to 5)" is visible
    And three multi-select dropdown containers are stacked vertically
    And each container has a white background with subtle shadow
    And each container has rounded corners (4px radius)
    And vertical spacing exists between containers (mb-3)

  Scenario: Color variant — dropdown 1 (color-1)
    Given the first dropdown is displayed
    When the user selects items
    Then selected tag chips have background color #e5e4cc (muted yellow-green)

  Scenario: Color variant — dropdown 2 (color-2)
    Given the second dropdown is displayed
    When the user selects items
    Then selected tag chips have background color #c7f0db (mint green)

  Scenario: Color variant — dropdown 3 (color-3)
    Given the third dropdown is displayed
    When the user selects items
    Then selected tag chips have background color #d3f4ff (light blue)

  Scenario: Maximum selection limit on first dropdown
    Given the first dropdown has 8 options
    When the user selects 5 items in the first dropdown
    Then 5 tag chips are visible
    When the user attempts to select a 6th item
    Then the 6th item is NOT added
    And a visual indication of the limit is shown

  Scenario: No limit on second and third dropdowns
    Given the second dropdown has 8 options
    When the user selects all 8 items
    Then 8 tag chips are visible

  Scenario: Dropdown interaction
    When the user clicks any dropdown container
    Then a dropdown list appears below with shadow
    And the list shows all available options
    And a search/filter input is available

  Scenario: Removing items
    Given items are selected in any dropdown
    When the user clicks the close button on a tag chip
    Then that tag chip is removed
    And the item returns to the dropdown list

  Scenario: Keyboard navigation
    Given any dropdown is open
    When the user types in the search input
    Then the list filters to matching options
    And highlighted option follows keyboard arrow keys

  Scenario: Accessibility
    Then the heading uses a <label> element linked to the first select
    And each dropdown is keyboard-navigable
    And tag chips have accessible labels
    And close buttons have aria-labels
```

## Verification checklist

- [ ] Heading renders centered, "Multi-Select #10 (Limit to 5)", linked label
- [ ] Background is #efefef
- [ ] Three dropdowns stacked vertically with mb-3 spacing
- [ ] Each dropdown: white bg, no border, 4px radius, shadow present
- [ ] Color-1 chips: #e5e4cc background
- [ ] Color-2 chips: #c7f0db background
- [ ] Color-3 chips: #d3f4ff background
- [ ] First dropdown enforces max 5 selections
- [ ] Second and third dropdowns have no selection limit
- [ ] Clicking opens dropdown with all 8 options
- [ ] Search input filters options
- [ ] Close button removes tag chips
- [ ] Keyboard navigation works
- [ ] Focus ring visible (#5897fb blue)
- [ ] Responsive: centered layout on all viewports
- [ ] No ColorLib references in app source
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests cover all Gherkin scenarios at 100% coverage
