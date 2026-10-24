# Template: Tagwell (Form Component — Multiselect Tag Picker)
<!-- prep-status: shipped-as=optwell -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-12` design this prep describes already
> ships as `apps/optwell` (<https://optwell.free.componentdock.com>).
> Do not scaffold `apps/tagwell`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-optwell/spec.md`.

## Purpose

Recreation of ColorLib "Multiselect 12" — a free Bootstrap multiselect
dropdown with live search and tag-style selection. The original is a
single-section form component demo using select2.js. We recreate it as
a standalone React component page.

- **ColorLib source:** https://colorlib.com/wp/template/multiselect-12/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-12/
- **Category:** Form Component / Multiselect with Live Search (Tag Style)
- **Stack:** React 19 · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (extracted from preview CSS)

| Token                  | Value                           | Source class / rule                                                    |
| ---------------------- | ------------------------------- | ---------------------------------------------------------------------- |
| Font family            | `"Roboto", sans-serif`          | `body { font-family: "Roboto" ... }`                                   |
| Body background        | `#efefef` (light gray)          | `body { background-color: #efefef }`                                   |
| Paragraph color        | `#b3b3b3` (light gray)          | `p { color: #b3b3b3 }`                                                 |
| Paragraph font-weight  | `300`                           | `p { font-weight: 300 }`                                               |
| Heading font           | Roboto (same as body)           | `h1-h6 { font-family: "Roboto" ... }`                                  |
| Heading size           | `h2 { font-size: 20px }`        | `h2 { font-size: 20px }`                                               |
| Primary / accent       | `#f67280` (coral/salmon pink)   | `.select2-selection__choice { background: #f67280 }`                   |
| Tag background         | `#f67280`                       | `.select2-selection__choice { background: #f67280 }`                   |
| Tag text color         | `#fff` (white)                  | `.select2-selection__choice { color: #fff }`                           |
| Tag font-size          | `14px`                          | `.select2-selection__choice { font-size: 14px }`                       |
| Tag padding            | `2px 10px`                      | `.select2-selection__choice { padding: 2px 10px }`                     |
| Tag border             | none                            | `border: none`                                                         |
| Tag remove icon        | `rgba(255,255,255,0.5)`         | `.select2-selection__choice__remove { color: rgba(255,255,255,0.5) }`  |
| Tag remove hover       | `#fff`                          | `:hover .select2-selection__choice__remove { color: #fff }`            |
| Search highlight bg    | `#f67280`                       | `.select2-results__option--highlighted { background-color: #f67280 }`  |
| Search highlight fg    | `#fff`                          | `.select2-results__option--highlighted { color: #fff }`                |
| Selected option bg     | `#f4f4f4`                       | `.select2-results__option[aria-selected=true] { background: #f4f4f4 }` |
| Selected option hover  | `#ddd`                          | `:hover { background-color: #ddd }`                                    |
| Content padding        | `7rem 0`                        | `.content { padding: 7rem 0 }`                                         |
| Dropdown border-radius | `7px`                           | `.select2-dropdown { border-radius: 7px }`                             |
| Dropdown shadow        | `0 15px 30px 0 rgba(0,0,0,0.2)` | `.select2-dropdown { box-shadow: ... }`                                |
| Dropdown border        | none                            | `.select2-dropdown { border: none }`                                   |

## Section Structure (from preview DOM)

1. **Content wrapper** (`.content`): Full-height centered layout, 7rem vertical padding
2. **Heading row**: "Multi-Select #2" — centered, h2 at 20px
3. **Container row**: Centered column (col-7), text-center
4. **Instruction text**: "State separate with comma \",\" " — light gray, weight 300
5. **Multiselect component**: select2.js powered multi-select with:
   - Tag pills (coral-pink `#f67280` bg, white text, 14px, removable)
   - Inline search field for filtering options
   - Dropdown list with highlighted option matching `#f67280`
   - Dropdown has 7px border-radius and subtle drop shadow
   - Options: US states (Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah)
6. **Footer** with Component Dock link (mandatory per AGENTS.md)

## Requirements

### Feature: Multiselect Tag Picker with Live Search

#### Scenario: Page renders with heading and multiselect

- **GIVEN** the page loads
- **WHEN** the user views the page
- **THEN** a heading "Multi-Select #2" is visible (centered, 20px)
- **AND** a multi-select input is visible
- **AND** instruction text "State separate with comma" is visible

#### Scenario: Options appear on click

- **GIVEN** the multiselect is closed
- **WHEN** the user clicks the multiselect area
- **THEN** a dropdown list of US state options appears (Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah)

#### Scenario: Selecting an option creates a tag pill

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "California"
- **THEN** a coral-pink tag pill labeled "California" appears in the selected area
- **AND** the tag has a remove icon (×)

#### Scenario: Selecting multiple options creates multiple tags

- **GIVEN** "California" is already selected
- **WHEN** the user also selects "Nevada"
- **THEN** two tag pills are visible: "California" and "Nevada"

#### Scenario: Removing a tag

- **GIVEN** "California" is selected (tag pill visible)
- **WHEN** the user clicks the × remove icon on the "California" tag
- **THEN** the "California" tag pill disappears
- **AND** "California" is no longer selected

#### Scenario: Live search filters options

- **GIVEN** the dropdown is open
- **WHEN** the user types "Cal" in the search input
- **THEN** options matching "Cal" are visible (e.g. California)
- **AND** non-matching options are hidden

#### Scenario: Empty search restores all options

- **GIVEN** the dropdown is filtered to "Cal"
- **WHEN** the user clears the search input
- **THEN** all options are visible again

#### Scenario: Already-selected option shows different style

- **GIVEN** "California" is already selected
- **WHEN** the dropdown is open
- **THEN** "California" in the list shows a selected state (gray background #f4f4f4)

#### Scenario: Dropdown has rounded corners and shadow

- **GIVEN** the dropdown is open
- **THEN** the dropdown container has 7px border-radius
- **AND** the dropdown has a subtle drop shadow (0 15px 30px 0 rgba(0,0,0,0.2))

#### Scenario: Accessibility

- **GIVEN** the page loads
- **WHEN** the user navigates with keyboard
- **THEN** the multiselect is focusable
- **AND** tags can be removed via keyboard
- **AND** the search input is focusable

## Verification checklist

- [ ] Page renders centered layout with heading and multiselect on light gray (#efefef) background
- [ ] Font is Roboto (loaded via Google Fonts or system fallback)
- [ ] Primary/accent color is coral-pink (#f67280) — used on tag pills, search highlight
- [ ] Tag pills have #f67280 background, white text, 14px font, 2px 10px padding, no border
- [ ] Tag remove icon is semi-transparent white, becomes fully white on hover
- [ ] Instruction text is light gray (#b3b3b3) at font-weight 300
- [ ] Heading is 20px, centered, Roboto font
- [ ] Content wrapper has 7rem vertical padding
- [ ] Dropdown has 7px border-radius and drop shadow (0 15px 30px 0 rgba(0,0,0,0.2))
- [ ] Dropdown highlights options in #f67280 coral-pink
- [ ] Selected options in dropdown show #f4f4f4 background
- [ ] Live search filters option list in real-time
- [ ] Tags can be added and removed dynamically
- [ ] Component is keyboard-accessible
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib anywhere in app code
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds without errors
