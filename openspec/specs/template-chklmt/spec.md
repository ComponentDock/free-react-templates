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

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Multiselect 17** — https://colorlib.com/wp/template/multiselect-17/
- **Preview**: slug-only `https://preview.colorlib.com/theme/multiselect-17/` returns **HTTP 404**; the live demo is https://preview.colorlib.com/theme/bootstrap/multiselect-17/ — **HTTP 200** on 2026-10-23, title "Multi Select #7". Its `css/style.css` is byte-identical (sha256 `0a75591aaf36068d...`, 27,397 bytes) to `multiselect-17/css/style.css` in `https://preview.colorlib.com/downloads/free/multiselect-17.zip`.
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/multiselect-17.jpg
- **Measured how**: hex-literal census of the live `css/style.css?v=9e5957cd` (27,397 bytes, archive-identical).

### Colors

| Token          | Value     | Occurrences | Role                                   |
| -------------- | --------- | ----------- | -------------------------------------- |
| Page canvas    | `#efefef` | 1           | Page background behind the widget      |
| Selected state | `#8cba51` | 2           | Selected row text + check-mark glyph   |
| Trigger header | `#dae0e5` | 2           | Header bar of the multi-select trigger |
| Surface        | `#fff`    | 13          | Dropdown panel                         |
| Ink            | `#212529` | 9           | Row labels                             |
| Muted          | `#6c757d` | 5           | Secondary row text                     |
| Hover row      | `#f8f9fa` | 5           | Row hover background                   |
| Grey text      | `#999`    | 1           | Disabled / dim rows                    |

### Typography

| Element | Family   | Evidence                                        |
| ------- | -------- | ----------------------------------------------- |
| All UI  | `Roboto` | 5 `font-family` rules; app loads Roboto 300/400 |

### Shapes & rhythm

| Property     | Reference value                                                              |
| ------------ | ---------------------------------------------------------------------------- |
| Radii        | `0.25rem` (3), `0` (2) — square-ish panel with slightly rounded rows         |
| Layout       | centred widget on light canvas: trigger -> checklist panel -> counter/footer |
| Selected row | green text + green check-mark, no filled background                          |

### Section order (shipped app, 1:1 with the reference)

`MultiSelect -> Footer`

### Delta vs shipped app

- The selected-state green `#8cba51` has **no token** in `apps/chklmt/src/index.css`, and `MultiSelect.tsx` colours the check with `text-primary-500`, which is not defined in `@theme` — the glyph therefore inherits the body colour instead of the reference green.
- `--color-action-btn` is `#f8f9fa`, while the reference trigger header is `#dae0e5`.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#8cba51` | live sheet paints it ×2 — `color` on `.cl-dropdown-menu li.selected > a.selected`; style.css?v=9e5957cd (27,397 B, sha256 0a75591aaf36) · <https://preview.colorlib.com/theme/bootstrap/multiselect-17/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

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

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/chklmt/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/chklmt/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] `openspec/specs/template-chklmt/spec.md` exists with all sections
- [ ] `docs/templates/chklmt/tasks.md` exists
- [ ] Source mapping recorded: ColorLib "Multiselect 17" → "Chklmt"
- [ ] Preview URL: `https://preview.colorlib.com/theme/bootstrap/multiselect-17/`
- [ ] Design tokens documented: Roboto font, #efefef bg, #8cba51 green, Bootstrap 4
- [ ] Selection limit (7 max) is the key behavioral feature
- [ ] All 50 US states present as options
- [x] No `colorlib.com` or `preview.colorlib.com` strings in `apps/` code
- [x] Footer links to `https://www.componentdock.com/`
- [x] `public/CNAME` contains `chklmt.free.componentdock.com`
- [x] `homepage` set to `https://chklmt.free.componentdock.com`
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
