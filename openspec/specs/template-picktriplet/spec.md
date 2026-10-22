# Template: PickTriplet (Form — Multi-Select Dropdowns)
<!-- prep-status: shipped-as=optflow -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-20` design this prep describes already
> ships as `apps/optflow` (<https://optflow.free.componentdock.com>).
> Do not scaffold `apps/picktriplet`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-optflow/spec.md`.

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

## Requirements

### Feature: PickTriplet Multi-Select Form Page

#### Scenario: Page loads with heading

- **GIVEN** the user opens the PickTriplet page
- **THEN** a heading "Multi-Select #10 (Limit to 5)" is visible
- **AND** the heading is centered horizontally

#### Scenario: Three multi-select dropdowns are displayed

- **GIVEN** the user opens the PickTriplet page
- **THEN** 3 multi-select dropdowns are visible
- **AND** each dropdown is centered on the page
- **AND** each dropdown shows the placeholder text "Select Categories"

#### Scenario: Dropdown 1 uses tan chip color

- **GIVEN** the user opens the PickTriplet page
- **WHEN** the user selects "Design" in the first dropdown
- **THEN** the selected chip has a tan/olive background (#e5e4cc)

#### Scenario: Dropdown 2 uses green chip color

- **GIVEN** the user opens the PickTriplet page
- **WHEN** the user selects "HTML5" in the second dropdown
- **THEN** the selected chip has a soft green background (#c7f0db)

#### Scenario: Dropdown 3 uses blue chip color

- **GIVEN** the user opens the PickTriplet page
- **WHEN** the user selects "CSS3" in the third dropdown
- **THEN** the selected chip has a light blue background (#d3f4ff)

#### Scenario: Each dropdown contains 8 category options

- **GIVEN** the user opens the PickTriplet page
- **THEN** the first dropdown contains options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- **AND** the second dropdown contains the same 8 options
- **AND** the third dropdown contains the same 8 options

#### Scenario: Dropdowns allow multiple selections

- **GIVEN** the user opens the PickTriplet page
- **WHEN** the user selects "Design" in the first dropdown
- **AND** the user selects "HTML5" in the first dropdown
- **THEN** both "Design" and "HTML5" are shown as selected chips

#### Scenario: Dropdowns have no selection limit

- **GIVEN** the user opens the PickTriplet page
- **WHEN** the user selects all 8 options in the first dropdown
- **THEN** all 8 chips are displayed

#### Scenario: Placeholder text is visible when no items selected

- **GIVEN** the user opens the PickTriplet page
- **AND** no items are selected in any dropdown
- **THEN** each dropdown displays "Select Categories" as placeholder

#### Scenario: Page background is light gray

- **GIVEN** the user opens the PickTriplet page
- **THEN** the page background color is #efefef

#### Scenario: Footer links Component Dock

- **GIVEN** the user opens the PickTriplet page
- **THEN** a footer contains a link to https://www.componentdock.com/

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
