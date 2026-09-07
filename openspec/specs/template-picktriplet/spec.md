# Template: PickTriplet (Form — Multi-Select Dropdowns)

## Purpose

Recreation of ColorLib "Multiselect V20" — a simple, centered form page with three
multi-select dropdown selectors using the "chosen" jQuery plugin. Each dropdown
displays a different category color (tan, green, blue) and allows users to select
multiple items from a list of 8 categories. The original is a Bootstrap 4 + jQuery
page.

**Source**: https://colorlib.com/wp/template/multiselect-20/
**Preview**: https://preview.colorlib.com/theme/bootstrap/multiselect-20/
**Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-20.jpg
**Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (from reference CSS)

| Token                | Value                                         | Notes                                      |
|----------------------|-----------------------------------------------|--------------------------------------------|
| Font family          | `Roboto` (Google Fonts)                       | Fallback: system sans-serif stack           |
| Body background      | `#efefef`                                     | Light gray full-page background            |
| Body text color      | `#b3b3b3`                                     | Paragraph text, light gray                 |
| Heading color        | Inherited (dark)                              | h2 uses 20px Roboto                        |
| Heading size         | 20px                                          | h2 class                                   |
| Content padding      | `7rem 0` (top/bottom)                         | Main content area                          |
| Dropdown background  | `#fff` (white)                                | Chosen multi-select container              |
| Dropdown border      | `none` (overrides chosen default)             | Clean, no border on multi-select container |
| Dropdown box-shadow  | `0 1px 4px 0 rgba(0,0,0,0.1)`               | Subtle card shadow                         |
| Dropdown border-radius | `4px`                                       | Rounded corners                            |
| Search-choice bg (1) | `#e5e4cc`                                     | Tan/olive tag chips                        |
| Search-choice bg (2) | `#c7f0db`                                     | Soft green tag chips                       |
| Search-choice bg (3) | `#d3f4ff`                                     | Light blue tag chips                       |
| Dropdown drop shadow | `0 15px 30px 0 rgba(0,0,0,0.2)`             | Open dropdown shadow                       |
| Highlighted option   | `#3875d7`                                     | Blue highlight on hover                    |
| Container max-width  | Bootstrap `col-md-5` centered                 | ~41.67% of container width                 |

## Gherkin requirements

### Feature: PickTriplet Multi-Select Form Page

  Scenario: Page loads with heading
    Given the user opens the PickTriplet page
    Then a heading "Multi-Select #10 (Limit to 5)" is visible
    And the heading is centered horizontally

  Scenario: Three multi-select dropdowns are displayed
    Given the user opens the PickTriplet page
    Then 3 multi-select dropdowns are visible
    And each dropdown is centered on the page
    And each dropdown shows the placeholder text "Select Categories"

  Scenario: Dropdown 1 uses tan chip color
    Given the user opens the PickTriplet page
    When the user selects "Design" in the first dropdown
    Then the selected chip has a tan/olive background (#e5e4cc)

  Scenario: Dropdown 2 uses green chip color
    Given the user opens the PickTriplet page
    When the user selects "HTML5" in the second dropdown
    Then the selected chip has a soft green background (#c7f0db)

  Scenario: Dropdown 3 uses blue chip color
    Given the user opens the PickTriplet page
    When the user selects "CSS3" in the third dropdown
    Then the selected chip has a light blue background (#d3f4ff)

  Scenario: Each dropdown contains 8 category options
    Given the user opens the PickTriplet page
    Then the first dropdown contains options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
    And the second dropdown contains the same 8 options
    And the third dropdown contains the same 8 options

  Scenario: Dropdowns allow multiple selections
    Given the user opens the PickTriplet page
    When the user selects "Design" in the first dropdown
    And the user selects "HTML5" in the first dropdown
    Then both "Design" and "HTML5" are shown as selected chips

  Scenario: Dropdowns have no selection limit
    Given the user opens the PickTriplet page
    When the user selects all 8 options in the first dropdown
    Then all 8 chips are displayed

  Scenario: Placeholder text is visible when no items selected
    Given the user opens the PickTriplet page
    And no items are selected in any dropdown
    Then each dropdown displays "Select Categories" as placeholder

  Scenario: Page background is light gray
    Given the user opens the PickTriplet page
    Then the page background color is #efefef

  Scenario: Footer links Component Dock
    Given the user opens the PickTriplet page
    Then a footer contains a link to https://www.componentdock.com/

## Verification checklist

- [ ] Page background matches #efefef
- [ ] Font is Roboto (Google Fonts loaded)
- [ ] Heading is centered, 20px, Roboto
- [ ] 3 multi-select dropdowns displayed in centered columns
- [ ] Each dropdown has 8 category options
- [ ] Dropdown 1 chips are tan (#e5e4cc)
- [ ] Dropdown 2 chips are green (#c7f0db)
- [ ] Dropdown 3 chips are blue (#d3f4ff)
- [ ] Dropdown box-shadow: 0 1px 4px 0 rgba(0,0,0,0.1)
- [ ] Dropdown border-radius: 4px
- [ ] Open dropdown shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- [ ] Multiple selections work per dropdown
- [ ] Placeholder "Select Categories" shows when empty
- [ ] Footer links to componentdock.com
- [ ] No reference to ColorLib in app code
- [ ] 100% test coverage (lines/functions/branches/statements)
