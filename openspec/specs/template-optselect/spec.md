# Template: OptSelect (Multiselect Dropdown)

Recreation of ColorLib Multiselect 06
(https://colorlib.com/wp/template/multiselect-06/).

## Purpose

Optselect is a multiselect dropdown template with a card container, dropdown trigger, dropdown panel, selected count and footer. It recreates the ColorLib **Multiselect 06** design (https://colorlib.com/wp/template/multiselect-06/, preview: https://preview.colorlib.com/theme/bootstrap/multiselect-06/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Summary

A clean, accessible multiselect dropdown component with checkbox selection,
select-all/clear-all toggle, keyboard navigation, and a count indicator.
Minimalist design with a green accent palette on a light background.

## Design Tokens

- Background: `#f8f9fd` (light gray-blue)
- Card: `#fff`
- Border: `#e5e5e5`
- Text: `#666`
- Text muted: `#999`
- Accent: `#4f8cff` (blue)
- Accent bg: `#eef4ff`
- Hover: `#f5f5f5`
- Font: Inter, system sans-serif

## Sections (in order)

1. **Card container** — centered, rounded, bordered, with shadow
2. **Dropdown trigger** — button showing placeholder or count, chevron icon
3. **Dropdown panel** — appears below trigger when open
   - Select All / Clear All bar at top
   - List of options with checkboxes
4. **Selected count** — shows below the dropdown when items are selected
5. **Footer** — "Made with Component Dock" link

## Requirements

### Feature: Rendering

#### Scenario: Given the page loads

- **Given** the page is rendered
- **When** the page is inspected
- **Then** given the page loads

#### Scenario: Then the heading "Select Options" is visible

- **Given** the page is rendered
- **When** the page is inspected
- **Then** then the heading "Select Options" is visible

#### Scenario: And a dropdown trigger button is visible

- **Given** the page is rendered
- **When** the page is inspected
- **Then** And a dropdown trigger button is visible

#### Scenario: And the trigger shows "Select options" placeholder

- **Given** the page is rendered
- **When** the page is inspected
- **Then** And the trigger shows "Select options" placeholder

### Feature: Opening the dropdown

#### Scenario: Given the dropdown is closed

- **Given** the page is rendered
- **When** the Opening the dropdown is inspected
- **Then** given the dropdown is closed

#### Scenario: When the user clicks the trigger

- **Given** the page is rendered
- **When** the Opening the dropdown is inspected
- **Then** when the user clicks the trigger

#### Scenario: Then the dropdown panel opens

- **Given** the page is rendered
- **When** the Opening the dropdown is inspected
- **Then** then the dropdown panel opens

#### Scenario: And the trigger shows aria-expanded=true

- **Given** the page is rendered
- **When** the Opening the dropdown is inspected
- **Then** And the trigger shows aria-expanded=true

### Feature: Selecting an option

#### Scenario: Given the dropdown is open

- **Given** the page is rendered
- **When** the Selecting an option is inspected
- **Then** given the dropdown is open

#### Scenario: When the user clicks an option

- **Given** the page is rendered
- **When** the Selecting an option is inspected
- **Then** when the user clicks an option

#### Scenario: Then the checkbox is checked

- **Given** the page is rendered
- **When** the Selecting an option is inspected
- **Then** then the checkbox is checked

#### Scenario: And the selected count updates

- **Given** the page is rendered
- **When** the Selecting an option is inspected
- **Then** And the selected count updates

### Feature: Select All

#### Scenario: Given the dropdown is open and no items are selected

- **Given** the page is rendered
- **When** the Select All is inspected
- **Then** given the dropdown is open and no items are selected

#### Scenario: When the user clicks "Select All"

- **Given** the page is rendered
- **When** the Select All is inspected
- **Then** when the user clicks "Select All"

#### Scenario: Then all items are selected

- **Given** the page is rendered
- **When** the Select All is inspected
- **Then** then all items are selected

### Feature: Clear All

#### Scenario: Given all items are selected

- **Given** the page is rendered
- **When** the Clear All is inspected
- **Then** given all items are selected

#### Scenario: When the user clicks "Clear All"

- **Given** the page is rendered
- **When** the Clear All is inspected
- **Then** when the user clicks "Clear All"

#### Scenario: Then all items are deselected

- **Given** the page is rendered
- **When** the Clear All is inspected
- **Then** then all items are deselected

### Feature: Keyboard navigation

#### Scenario: Given the dropdown is open

- **Given** the page is rendered
- **When** the Keyboard navigation is inspected
- **Then** given the dropdown is open

#### Scenario: When the user presses ArrowDown

- **Given** the page is rendered
- **When** the Keyboard navigation is inspected
- **Then** when the user presses ArrowDown

#### Scenario: Then focus moves to the next option

- **Given** the page is rendered
- **When** the Keyboard navigation is inspected
- **Then** then focus moves to the next option

#### Scenario: When the user presses Enter

- **Given** the page is rendered
- **When** the Keyboard navigation is inspected
- **Then** when the user presses Enter

#### Scenario: Then the focused option is toggled

- **Given** the page is rendered
- **When** the Keyboard navigation is inspected
- **Then** then the focused option is toggled

### Feature: Closing

#### Scenario: Given the dropdown is open

- **Given** the page is rendered
- **When** the Closing is inspected
- **Then** given the dropdown is open

#### Scenario: When the user clicks outside

- **Given** the page is rendered
- **When** the Closing is inspected
- **Then** when the user clicks outside

#### Scenario: Then the dropdown closes

- **Given** the page is rendered
- **When** the Closing is inspected
- **Then** then the dropdown closes

#### Scenario: When the user presses Escape

- **Given** the page is rendered
- **When** the Closing is inspected
- **Then** when the user presses Escape

#### Scenario: Then the dropdown closes

- **Given** the page is rendered
- **When** the Closing is inspected
- **Then** then the dropdown closes

### Feature: Footer

#### Scenario: Given the page loads

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** given the page loads

#### Scenario: Then the footer shows "Made with Component Dock"

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** then the footer shows "Made with Component Dock"

#### Scenario: And the footer links to https://www.componentdock.com/

- **Given** the page is rendered
- **When** the Footer is inspected
- **Then** And the footer links to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/optselect/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/optselect/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
