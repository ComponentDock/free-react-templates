# Langpick — Multiselect Language Selector Template

## Purpose

Recreation of ColorLib "Multiselect 03" (https://colorlib.com/wp/template/multiselect-03/). A centered page with a heading, a label, and a multiselect dropdown for selecting programming languages from a list of 10 options. Brand color: #e8647c (pink/rose), font: Lato, white background.

## Requirements

### Requirement: Page renders with heading and dropdown

Users SHALL see a centered page with a "Language Selector" heading, a "Select Language" label, and a dropdown trigger showing "Select options".

#### Scenario: Page renders with heading and dropdown

- **GIVEN** the user opens the Langpick template
- **WHEN** the page loads
- **THEN** they see a heading "Language Selector"
- **AND** they see a label "Select Language"
- **AND** they see a dropdown trigger showing "Select options"

### Requirement: Dropdown opens and shows options

The dropdown SHALL open on click or keyboard activation and display all 10 language options plus a "Select All" button.

#### Scenario: Dropdown opens and shows options

- **GIVEN** the user clicks the dropdown trigger
- **WHEN** the dropdown opens
- **THEN** options PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS are visible
- **AND** a "Select All" button is visible

### Requirement: User can select multiple languages

The dropdown SHALL support selecting multiple languages. The trigger SHALL display "N items selected" when languages are selected.

#### Scenario: User can select multiple languages

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "PHP"
- **THEN** "PHP" is selected
- **WHEN** the user clicks "Python"
- **THEN** both "PHP" and "Python" are selected
- **AND** the trigger shows "2 items selected"

### Requirement: User can deselect languages

Clicking an already selected language SHALL deselect it.

#### Scenario: User can deselect languages

- **GIVEN** "PHP" is selected
- **WHEN** the user clicks "PHP" again
- **THEN** "PHP" is deselected

### Requirement: Select All selects all options

The "Select All" button SHALL select all language options.

#### Scenario: Select All selects all options

- **GIVEN** the dropdown is open
- **WHEN** the user clicks "Select All"
- **THEN** all 10 languages are selected
- **AND** the trigger shows "10 items selected"

### Requirement: Clear All clears selections

The "Clear All" button SHALL clear all selections.

#### Scenario: Clear All clears selections

- **GIVEN** multiple languages are selected
- **WHEN** the user clicks "Clear All"
- **THEN** no languages are selected
- **AND** the trigger shows "Select options"

### Requirement: Footer links to Component Dock

The footer SHALL display a "Component Dock" link to https://www.componentdock.com/.

#### Scenario: Footer links to Component Dock

- **GIVEN** the user scrolls to the footer
- **WHEN** they look at the footer
- **THEN** they see a "Component Dock" link to https://www.componentdock.com/

### Requirement: Keyboard navigation works

The dropdown SHALL support keyboard navigation with ArrowDown, ArrowUp, Enter, Space, and Escape keys.

#### Scenario: Keyboard navigation works

- **GIVEN** the dropdown is closed
- **WHEN** the user presses ArrowDown
- **THEN** the dropdown opens
- **WHEN** the user presses ArrowDown and Enter
- **THEN** the focused language is selected

## Verification checklist

- [ ] `npm run verify:app -- langpick` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] All 8 scenarios above are covered by colocated tests
      (query by role/label; test names mirror the scenario names):
      - Page renders with heading and dropdown
      - Dropdown opens and shows options
      - User can select multiple languages
      - User can deselect languages
      - Select All selects all options
      - Clear All clears selections
      - Footer links to Component Dock
      - Keyboard navigation works
- [ ] Sections render in the order listed in the requirements above,
      with no console errors on load.
- [ ] Responsive check at 375 / 768 / 1280px: no horizontal overflow,
      nav collapses to the mobile toggle, grids reflow.
- [ ] Design tokens from the reference are applied via the Tailwind
      theme (brand color, font, radii) — no hard-coded hex in sections.
- [ ] No ColorLib name, domain or URL in any app file or filename —
      provenance stays in this spec, TEMPLATES.md and the PR.
- [ ] Footer links https://www.componentdock.com/ ("Component Dock").
- [ ] Page renders with heading and dropdown — they see a heading "Language Selector"
- [ ] Dropdown opens and shows options — options PHP, Javascript, Java, jQuery, SQL, Wordpress, Python, .Net, HTML, CSS are visible
- [ ] User can select multiple languages — "PHP" is selected
- [ ] User can deselect languages — "PHP" is deselected
- [ ] Select All selects all options — all 10 languages are selected
- [ ] Clear All clears selections — no languages are selected
- [ ] Keyboard navigation works — the dropdown opens
