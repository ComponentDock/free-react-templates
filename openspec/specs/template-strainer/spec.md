# Template: Strainer (Multi-Select Dropdown Component)

## Purpose

Recreation of ColorLib **Multiselect 12** ("Multiselect V12") as a standalone React component.

- **Source slug:** `multiselect-12`
- **ColorLib URL:** https://colorlib.com/wp/template/multiselect-12/
- **Live preview:** https://preview.colorlib.com/theme/bootstrap/multiselect-12/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-12.jpg
- **Description:** A free modern multiselect dropdown snippet featuring live search, tag-style selected items with remove buttons, and a Bootstrap-based layout. Originally built with jQuery + Select2; we recreate it as a pure React component.

## Design tokens (extracted from live preview + CSS)

| Token | Value | Source |
|-------|-------|--------|
| Font family (headings/body) | `Roboto`, sans-serif | `css/style.css` |
| Accent / brand color | `#f67280` (coral pink) | `.select2-selection__choice`, `.select2-results__option--highlighted` |
| Background color | `#efefef` (light gray) | `body` |
| Text color (paragraphs) | `#b3b3b3` (medium gray) | `p` |
| Heading color | inherited (dark/default) | `h1-h6` |
| Selected tag background | `#f67280` | `.select2-selection__choice` |
| Selected tag text | `#fff` | `.select2-selection__choice` |
| Selected tag border | `none` | `.select2-selection__choice` |
| Selected tag font-size | `14px` | `.select2-selection__choice` |
| Selected tag padding | `2px 10px` | `.select2-selection__choice` |
| Remove button color (idle) | `rgba(255,255,255,0.5)` | `.select2-selection__choice__remove` |
| Remove button color (hover) | `#fff` | `.select2-selection__choice__remove:hover` |
| Highlighted option bg | `#f67280` | `.select2-results__option--highlighted` |
| Highlighted option text | `#fff` | `.select2-results__option--highlighted` |
| Selected option bg | `#f4f4f4` | `.select2-results__option[aria-selected=true]` |
| Selected option hover bg | `#ddd` | `.select2-results__option[aria-selected=true]:hover` |
| Dropdown border | `none` | `.select2-dropdown` |
| Dropdown shadow | `0 15px 30px 0 rgba(0,0,0,0.2)` | `.select2-dropdown` |
| Dropdown border-radius | `7px` | `.select2-dropdown` |
| Content padding | `7rem 0` | `.content` |
| Heading font-size | `20px` | `h2` |
| P font-weight | `300` | `p` |
| Transition | `.3s all ease` | `a` |
| Heading font | `Poppins`, sans-serif (loaded but unused in snippet) | font-face declarations |

## Requirements

### Feature: Strainer template behaviour

#### Scenario: Component renders with heading and instructions

- **GIVEN** the page loads
- **THEN** a heading "Multi-Select" is visible
- **AND** a paragraph instructs the user to separate items with a comma
- **AND** a multi-select dropdown is displayed

#### Scenario: Dropdown shows available options

- **GIVEN** the user clicks the dropdown area
- **THEN** a list of options appears (US states: Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah)
- **AND** the dropdown has a shadow (`0 15px 30px`) and rounded corners (`border-radius: 7px`)

#### Scenario: User selects a single option

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "California"
- **THEN** a coral-pink tag labeled "California" appears in the selected area
- **AND** the tag has white text, no visible border, and `font-size: 14px`

#### Scenario: User selects multiple options

- **GIVEN** the user has already selected "California"
- **WHEN** the user selects "Nevada"
- **THEN** both "California" and "Nevada" tags are visible
- **AND** the tags are arranged horizontally

#### Scenario: User removes a selected option

- **GIVEN** the user has selected "California" and "Nevada"
- **WHEN** the user clicks the × on the "California" tag
- **THEN** only "Nevada" remains as a selected tag

#### Scenario: Live search filters options

- **GIVEN** the dropdown is open with 8 options
- **WHEN** the user types "ore" into the search field
- **THEN** only "Oregon" is displayed in the filtered list
- **AND** other options are hidden

#### Scenario: Keyboard accessibility

- **GIVEN** the dropdown is focused
- **WHEN** the user presses arrow keys
- **THEN** focus moves through the available options
- **AND** pressing Enter selects the focused option

#### Scenario: Visual styling matches reference

- **GIVEN** the component renders
- **THEN** the background is `#efefef`
- **AND** the heading uses Roboto font at 20px
- **AND** selected tags are coral pink (`#f67280`) with white text
- **AND** the dropdown has no border and a box shadow

## Verification checklist

- [ ] Component renders with correct heading and subtitle text
- [ ] Dropdown opens/closes on click
- [ ] All 8 US state options are listed
- [ ] Selecting an option creates a coral-pink tag with white text
- [ ] Multiple selections create multiple tags
- [ ] Clicking × on a tag removes it
- [ ] Search field filters options in real-time
- [ ] Keyboard navigation works (Tab, arrows, Enter, Escape)
- [ ] Background is `#efefef`, heading is Roboto 20px
- [ ] Dropdown has `border-radius: 7px` and `box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)`
- [ ] Component is responsive (works at mobile widths)
- [ ] 100% test coverage on component code
- [ ] No references to ColorLib in app code
- [ ] Footer links to Component Dock
