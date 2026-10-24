# Template: SelectCap (Multi-Select Component)
<!-- prep-status: shipped-as=chklmt -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-17` design this prep describes already
> ships as `apps/chklmt` (<https://chklmt.free.componentdock.com>).
> Do not scaffold `apps/selectcap`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-chklmt/spec.md`.

## Purpose

Recreation of ColorLib Multi-Select 17 — a Bootstrap-based multi-select dropdown component with a max-selection limit.

- **Source:** https://colorlib.com/wp/template/multiselect-17/
- **Preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-17/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Source design:** ColorLib "Multiselect 17" — https://colorlib.com/wp/template/multiselect-17/

## Source mapping

| Field         | Value                                                                   |
| ------------- | ----------------------------------------------------------------------- |
| ColorLib slug | `multiselect-17`                                                        |
| Preview URL   | `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`          |
| Screenshot    | `https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-17.jpg` |

## Design tokens (extracted from preview)

### Fonts

- **Primary / body:** `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`
- **Fallback headings also use Roboto**
- Font weights: 300 (light paragraphs), 400 (normal)

### Colors

| Token               | Value             | Usage                                       |
| ------------------- | ----------------- | ------------------------------------------- |
| Body background     | `#efefef`         | Page background                             |
| Body text           | `#26282b`         | Default text color (from ColorLib page CSS) |
| Paragraph text      | `#b3b3b3`         | Light paragraph color, weight 300           |
| Accent green        | `#8cba51`         | Selected item text + check mark icon        |
| Selection highlight | Bootstrap default | Dropdown item hover                         |

### Layout

- Single centered column (`col-md-5`) within a Bootstrap container
- Content vertical padding: `7rem 0`
- Heading font-size: 20px

### Component behavior

- Bootstrap-select plugin (`bootstrap-select.min.js`)
- `<select class="selectpicker form-control" multiple data-max-options="7">`
- Checkbox-style dropdown items (check-mark icon before each option)
- Max 7 selections enforced; item becomes unselectable after limit
- Selected items show green text (`#8cba51`) and green check mark

## Structure (section order)

1. **Page wrapper** — light gray `#efefef` background, centered content
2. **Heading** — "Multi-Select #7 (Limit to 7 selection)" centered, 20px
3. **Select component** — single Bootstrap multi-select dropdown with:
   - Checkbox-style items (check mark icon)
   - 50 US state options (Alabama through Wyoming)
   - Max 7 selection limit
   - Dropdown menu with scrollable list
4. **No footer** (component-only demo page)

## Requirements

### Feature: SelectCap template behaviour

#### Scenario: Page renders with correct heading

- **GIVEN** the user loads the SelectCap page
- **THEN** the heading "Multi-Select #7 (Limit to 7 selection)" is visible
- **AND** the heading is centered on the page

#### Scenario: Dropdown opens and shows all state options

- **GIVEN** the user loads the SelectCap page
- **WHEN** the user clicks the select dropdown
- **THEN** 50 US state options are displayed
- **AND** each option has a checkbox-style indicator

#### Scenario: Single selection works

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Alabama"
- **THEN** "Alabama" becomes selected
- **AND** the checkbox indicator turns green (#8cba51)

#### Scenario: Multi-selection up to limit

- **GIVEN** the dropdown is open
- **WHEN** the user selects 7 different states
- **THEN** all 7 states show as selected with green indicators
- **AND** the selection count is 7

#### Scenario: Max selection limit enforced

- **GIVEN** the user has selected 7 states
- **WHEN** the user tries to select an 8th state
- **THEN** the 8th state cannot be selected
- **AND** only 7 states remain selected

#### Scenario: Deselecting an item

- **GIVEN** the user has selected 3 states
- **WHEN** the user clicks a selected state
- **THEN** that state becomes deselected
- **AND** the selection count decreases by 1

#### Scenario: Responsive layout

- **GIVEN** the user loads the page on a mobile viewport
- **THEN** the select component remains centered
- **AND** the dropdown adjusts to fit the viewport width

## Verification checklist

- [ ] Heading text matches original: "Multi-Select #7 (Limit to 7 selection)"
- [ ] Heading is centered on the page
- [ ] Page background is light gray (#efefef or equivalent)
- [ ] Select component renders with 50 US state options
- [ ] Multiple selection is enabled
- [ ] Max 7 selections enforced
- [ ] Selected items show green text/check (#8cba51)
- [ ] Dropdown items have checkbox-style indicators
- [ ] Content has appropriate vertical padding
- [ ] Responsive on mobile viewports
- [ ] Component Dock footer link present
- [ ] No ColorLib references in app code
