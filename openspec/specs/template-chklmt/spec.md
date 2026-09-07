# Template: Chklmt (Multi-Select Form — Limited Selection)

## Purpose

Chklmt is a single-page multi-select FORM in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Multiselect 17"
free template (source: https://colorlib.com/wp/template/multiselect-17/),
built under a DIFFERENT name (**Chklmt**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a Bootstrap Select plugin rendered on a light-grey page: a
centered `col-md-5` container with a single `<select multiple>` element
containing 50 US state options. The design is minimal — a centered heading
and a functional multi-select checkbox dropdown widget with a 7-item
selection limit.

## Requirements

### Requirement: Widget renders in collapsed state

The multi-select widget SHALL render with a trigger button showing "Nothing selected" and the dropdown panel hidden.

#### Scenario: Widget renders in collapsed state

- **GIVEN** the page is loaded with the Chklmt multi-select widget
- **WHEN** the widget renders
- **THEN** the dropdown button shows "Nothing selected"
- **AND** the dropdown panel is not visible
- **AND** the heading reads "Multi-Select #7 (Limit to 7 selection)"

### Requirement: Opening the dropdown reveals options

Clicking the trigger button SHALL open a dropdown panel with a search input, Select All/Deselect All buttons, and a scrollable list of 50 checkbox options.

#### Scenario: Opening the dropdown reveals options

- **GIVEN** the page is loaded
- **WHEN** I click the dropdown button
- **THEN** the dropdown panel appears below the button
- **AND** I see a search input at the top of the panel
- **AND** I see "Select All" and "Deselect All" action buttons
- **AND** I see a scrollable list of 50 checkbox options
- **AND** each option shows a checkbox and state name

### Requirement: Selecting an option adds a check mark

Selecting a checkbox SHALL display a green check mark next to the option and update the button text.

#### Scenario: Selecting an option adds a check mark

- **GIVEN** the dropdown is open
- **WHEN** I click the checkbox for "Alabama"
- **THEN** a green check mark appears next to "Alabama"
- **AND** the dropdown button text updates to "Alabama"
- **AND** the option row has the selected style

### Requirement: Selecting multiple options updates the button text

Selecting multiple options SHALL display all selected items comma-separated in the button.

#### Scenario: Selecting multiple options updates the button text

- **GIVEN** the dropdown is open
- **WHEN** I select "Alabama"
- **AND** I select "Alaska"
- **AND** I select "Arizona"
- **THEN** the dropdown button text shows "Alabama, Alaska, Arizona"

### Requirement: Enforcing the 7-item selection limit

The widget SHALL enforce a maximum of 7 concurrent selections. Once 7 items are checked, all remaining unchecked options SHALL become disabled.

#### Scenario: Enforcing the 7-item selection limit

- **GIVEN** the dropdown is open
- **WHEN** I select 7 options
- **THEN** all remaining unselected options become disabled
- **AND** I cannot select an 8th option

### Requirement: Deselecting an option re-enables others

Deselecting an option when at the limit SHALL re-enable the remaining unselected options.

#### Scenario: Deselecting an option re-enables others

- **GIVEN** I have selected 7 options
- **WHEN** I deselect one option
- **THEN** the remaining 6 options stay selected
- **AND** the unselected options become enabled again

### Requirement: Select All respects the limit

The "Select All" button SHALL select only the first 7 options when a limit is set, not all 50.

#### Scenario: Select All selects all options up to the limit

- **GIVEN** the dropdown is open
- **WHEN** I click "Select All"
- **THEN** the first 7 options become selected
- **AND** the remaining options stay unselected and disabled

### Requirement: Deselect All clears all selections

The "Deselect All" button SHALL clear all selected options and reset the button text.

#### Scenario: Deselect All clears all selections

- **GIVEN** I have selected 3 options
- **WHEN** I click "Deselect All"
- **THEN** no options are selected
- **AND** the dropdown button text shows "Nothing selected"

### Requirement: Search filtering works

Typing in the search input SHALL filter the visible options to those matching the search term.

#### Scenario: Search filtering works

- **GIVEN** the dropdown is open
- **WHEN** I type "New" in the search input
- **THEN** only states containing "New" are visible in the list
- **AND** hidden states are not clickable

### Requirement: Closing the dropdown

Clicking the trigger button again or pressing Escape SHALL close the dropdown panel while preserving selected options.

#### Scenario: Closing the dropdown

- **GIVEN** the dropdown is open
- **WHEN** I click the dropdown button again
- **THEN** the dropdown panel closes
- **AND** the selected options remain checked

## Verification checklist

- [ ] `openspec/specs/template-chklmt/spec.md` exists with all sections
- [ ] `docs/templates/chklmt/tasks.md` exists
- [ ] Source mapping recorded: ColorLib "Multiselect 17" → "Chklmt"
- [ ] Preview URL: `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`
- [ ] Design tokens documented: Roboto font, #efefef bg, #8cba51 green, Bootstrap 4
- [ ] Selection limit (7 max) is the key behavioral feature
- [ ] All 50 US states present as options
- [ ] No `colorlib.com` or `preview.colorlib.com` strings in `apps/` code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `chklmt.free.componentdock.com`
- [ ] `homepage` set to `https://chklmt.free.componentdock.com`
