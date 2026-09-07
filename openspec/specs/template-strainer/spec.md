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

## Gherkin requirements

### Scenario: Component renders with heading and instructions
- **Given** the page loads
- **Then** a heading "Multi-Select" is visible
- **And** a paragraph instructs the user to separate items with a comma
- **And** a multi-select dropdown is displayed

### Scenario: Dropdown shows available options
- **Given** the user clicks the dropdown area
- **Then** a list of options appears (US states: Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah)
- **And** the dropdown has a shadow (`0 15px 30px`) and rounded corners (`border-radius: 7px`)

### Scenario: User selects a single option
- **Given** the dropdown is open
- **When** the user clicks "California"
- **Then** a coral-pink tag labeled "California" appears in the selected area
- **And** the tag has white text, no visible border, and `font-size: 14px`

### Scenario: User selects multiple options
- **Given** the user has already selected "California"
- **When** the user selects "Nevada"
- **Then** both "California" and "Nevada" tags are visible
- **And** the tags are arranged horizontally

### Scenario: User removes a selected option
- **Given** the user has selected "California" and "Nevada"
- **When** the user clicks the × on the "California" tag
- **Then** only "Nevada" remains as a selected tag

### Scenario: Live search filters options
- **Given** the dropdown is open with 8 options
- **When** the user types "ore" into the search field
- **Then** only "Oregon" is displayed in the filtered list
- **And** other options are hidden

### Scenario: Keyboard accessibility
- **Given** the dropdown is focused
- **When** the user presses arrow keys
- **Then** focus moves through the available options
- **And** pressing Enter selects the focused option

### Scenario: Visual styling matches reference
- **Given** the component renders
- **Then** the background is `#efefef`
- **And** the heading uses Roboto font at 20px
- **And** selected tags are coral pink (`#f67280`) with white text
- **And** the dropdown has no border and a box shadow

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
