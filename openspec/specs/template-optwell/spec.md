# Template: OptWell (Multiselect 12)

A searchable multiselect dropdown component with live search, tag chips, and US states options.

## Purpose

Optwell is a bootstrap multiselect component page. It recreates the ColorLib **Multiselect 12** design (https://colorlib.com/wp/template/multiselect-12/, preview: https://preview.colorlib.com/theme/bootstrap/multiselect-12/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

## Source

- Template: Multiselect 12 (Bootstrap Select2 multiselect with search)
- Accent: coral/pink `#f67280`
- Background: light gray `#efefef`
- Font: Roboto (Google Font)

## Requirements

### Rendering

#### Scenario: App renders heading and description

- **GIVEN** the app is loaded
- **THEN** I see a heading "OptWell"
- **AND** I see a description containing "States separated by comma"

#### Scenario: App sets document title

- **GIVEN** the app is loaded
- **THEN** the document title contains "OptWell"

#### Scenario: Footer renders Component Dock link

- **GIVEN** the app is loaded
- **THEN** I see a link to "https://www.componentdock.com/" labeled "Component Dock"

### Dropdown behavior

#### Scenario: Dropdown opens on click

- **GIVEN** the app is loaded
- **WHEN** I click the dropdown trigger
- **THEN** the dropdown menu is visible
- **AND** all options are listed

#### Scenario: Dropdown closes on click outside

- **GIVEN** the dropdown is open
- **WHEN** I click outside the dropdown
- **THEN** the dropdown menu is not visible

#### Scenario: Dropdown closes on Escape

- **GIVEN** the dropdown is open
- **WHEN** I press Escape
- **THEN** the dropdown menu is not visible

### Selection

#### Scenario: Select an option

- **GIVEN** the dropdown is open
- **WHEN** I click option "Alaska"
- **THEN** a tag "Alaska" appears in the selected area

#### Scenario: Deselect an option

- **GIVEN** option "Alaska" is selected
- **WHEN** I click option "Alaska"
- **THEN** the tag "Alaska" is removed

#### Scenario: Deselect via tag remove button

- **GIVEN** option "Alaska" is selected
- **WHEN** I click the remove button on the "Alaska" tag
- **THEN** the tag "Alaska" is removed

### Search / Filter

#### Scenario: Search filters options

- **GIVEN** the dropdown is open
- **WHEN** I type "Cal" in the search input
- **THEN** only options matching "Cal" are visible

#### Scenario: Search clears on selection

- **GIVEN** the dropdown is open and I typed "Alas"
- **WHEN** I select option "Alaska"
- **THEN** the search input is cleared
- **AND** all options are visible again

#### Scenario: No results message

- **GIVEN** the dropdown is open
- **WHEN** I type "xyz" in the search input
- **THEN** I see "No results found"

### Select all / Clear all

#### Scenario: Select all

- **GIVEN** the dropdown is open
- **WHEN** I click "Select All"
- **THEN** all options are selected
- **AND** tags appear for all options

#### Scenario: Clear all

- **GIVEN** all options are selected
- **WHEN** I click "Clear All"
- **THEN** no options are selected
- **AND** no tags are visible

### Keyboard navigation

#### Scenario: Open with Enter

- **GIVEN** the dropdown is closed
- **WHEN** I press Enter on the trigger
- **THEN** the dropdown is open

#### Scenario: Navigate with ArrowDown

- **GIVEN** the dropdown is open
- **WHEN** I press ArrowDown
- **THEN** the focus moves to the next option

#### Scenario: Select with Space

- **GIVEN** the dropdown is open and an option is focused
- **WHEN** I press Space
- **THEN** the focused option is toggled

#### Scenario: Close with Escape

- **GIVEN** the dropdown is open
- **WHEN** I press Escape
- **THEN** the dropdown is closed

### Accessibility

#### Scenario: ARIA attributes on trigger

- **GIVEN** the app is loaded
- **THEN** the trigger has aria-expanded="false"
- **WHEN** I click the trigger
- **THEN** the trigger has aria-expanded="true"

#### Scenario: Listbox has aria-multiselectable

- **GIVEN** the dropdown is open
- **THEN** the listbox has aria-multiselectable

#### Scenario: Options have aria-selected

- **GIVEN** the dropdown is open
- **THEN** each option has an aria-selected attribute

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/optwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/optwell/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Dropdown behavior — the dropdown menu is visible
- [x] Selection — a tag "Alaska" appears in the selected area
- [x] Search / Filter — only options matching "Cal" are visible
- [ ] Select all / Clear all — all options are selected
- [ ] Keyboard navigation — the dropdown is open
- [x] Accessibility — the trigger has aria-expanded="false"
