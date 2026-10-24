# Template: Optibox (Form — Limited Multiselect Dropdown)
<!-- prep-status: shipped-as=chklmt -->
> **SHIPPED-UNDER** — the ColorLib `multiselect-17` design this prep describes already
> ships as `apps/chklmt` (<https://chklmt.free.componentdock.com>).
> Do not scaffold `apps/optibox`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-chklmt/spec.md`.

## Purpose

Recreation of ColorLib "Multiselect 17" — a free limited multiselect dropdown snippet that marks checked items accordingly and enforces a maximum selection count.

- **Source**: https://colorlib.com/wp/template/multiselect-17/
- **Preview**: https://preview.colorlib.com/theme/multiselect-17/ (404 — unreachable; design derived from screenshot + ColorLib page metadata)
- **Description**: A simple, versatile, and easy-to-work-with free limited multiselect dropdown snippet that marks checked items accordingly. Users can select multiple items from a dropdown list, but the selection is capped at a configurable maximum.
- **Stack**: React 19 + Tailwind CSS 4 + TypeScript (Vite)
- **New name**: `optibox` (apps/optibox, @free-react-templates/optibox)

## Design tokens (extracted from ColorLib page CSS + screenshot)

| Token                   | Value                                 | Notes                                                                                                                 |
| ----------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Font family             | System sans-serif stack               | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif` |
| Brand / accent color    | `#007bff`                             | Links, active states, primary actions                                                                                 |
| Hover accent            | `#0056b3`                             | Darker shade on hover                                                                                                 |
| Body text color         | `#26282b`                             | Default paragraph / item text                                                                                         |
| Body font size          | `16px`                                | Base                                                                                                                  |
| Line height             | `1.8`                                 | Body text                                                                                                             |
| Green icon accent       | `#77CC6D`                             | Decorative icons on the ColorLib page (not part of the snippet itself)                                                |
| Page background         | `#ffffff`                             | White, clean                                                                                                          |
| Dropdown border         | `#e6e6e6`                             | Light gray border around the select control                                                                           |
| Dropdown item hover     | `#3e64ff`                             | Blue highlight on hover (from sibling multiselect specs)                                                              |
| Selected item highlight | `#007bff`                             | Brand blue for checked/marked items                                                                                   |
| Dropdown shadow         | `0px 3px 19px -15px rgba(0,0,0,0.41)` | Subtle shadow when dropdown is open                                                                                   |
| Border radius           | `4px`                                 | Standard Bootstrap / form control radius                                                                              |
| Max selection limit     | Configurable (default: e.g. 3)        | Core feature of this snippet                                                                                          |

## Visual design notes (from TEMPLATES.md screenshot)

- Single centered section on a white background
- Title area with heading (e.g. "Multiselect 17") centered above the form component
- A custom dropdown/select control with a label above it (e.g. "Select Items" or similar)
- Dropdown trigger shows a placeholder or count of selected items (e.g. "0 Selected")
- When clicked, the dropdown expands revealing a list of items with checkboxes
- Each item has a checkbox that can be toggled
- Checked items are visually marked (blue highlight or checkmark)
- A counter or badge shows how many items are selected out of the maximum
- Once the maximum is reached, further selections are disabled (checkboxes grayed out or unchecked ones blocked)
- A small "x" or remove button on each selected tag/chip to deselect
- Compact layout — the entire component fits in a centered column (roughly col-md-6)
- Clean, minimal aesthetic — no heavy decorations, focus on the form element

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://preview.colorlib.com/theme/bootstrap/multiselect-17/` | HTTP 200 · 3,208 B · title `Multi Select #7` |
| stylesheet | `https://preview.colorlib.com/theme/bootstrap/multiselect-17/css/style.css?v=9e5957cd` | HTTP 200 · 27,397 B · sha256 `0a75591aaf36` |

> ⚠️ the demo's own `<title>` reads `Multi Select #7` though the path is
> `multiselect-17` — the host's titles are not reliable labels; the readings
> above are for the URL as fetched.

**Live palette** (hex × occurrences in that sheet): `#ffffff`×13,
`#212529`×9, `#000000`×6, `#6c757d`×5, `#f8f9fa`×5, `#495057`×3,
`#007bff`×2, `#dae0e5`×2, `#8cba51`×2, `#999999`×1.

**Token deltas** — the sheet, not the screenshot, decides:

- `#1a73e8` → **`#007bff`** — the sheet paints `a{color}` with it
- `#1464cc` → **`#0056b3`** — the sheet paints `a:hover{color}` with it

**Low-chroma values the sheet actually uses** — `#212529`, `#6c757d`,
`#f8f9fa`, `#495057`; any sampled Tailwind grey above is an approximation of
these.

**TOKEN-UNVERIFIED** — screenshot samples with **no** counterpart in the
live sheet; do not build them from the screenshot, take the palette above:
`#77cc6d`.

## Requirements

### Feature: Optibox template behaviour

#### Scenario: Page renders with title

- **GIVEN** the user visits the Optibox page
- **THEN** the heading "Multiselect 17" (or equivalent) is visible
- **AND** the heading is centered on the page

#### Scenario: Dropdown displays with label

- **GIVEN** the page has loaded
- **THEN** a label is visible above the dropdown control
- **AND** a dropdown trigger/button is rendered below the label

#### Scenario: Dropdown shows default state

- **GIVEN** the dropdown is in its default (closed) state
- **THEN** the trigger displays a placeholder (e.g. "0 Selected" or "Select items...")
- **AND** the trigger has a light gray border (#e6e6e6)

#### Scenario: Dropdown opens on click

- **GIVEN** the dropdown is closed
- **WHEN** the user clicks the dropdown trigger
- **THEN** the dropdown menu expands below the trigger
- **AND** a list of selectable items is displayed
- **AND** each item has a checkbox beside its label

#### Scenario: Items can be selected

- **GIVEN** the dropdown is open
- **WHEN** the user clicks an item's checkbox
- **THEN** the checkbox becomes checked
- **AND** the item is visually highlighted (brand blue #007bff)
- **AND** the selected count on the trigger increments

#### Scenario: Maximum selection limit enforced

- **GIVEN** the maximum selection limit is set (e.g. 3)
- **AND** 3 items are already selected
- **WHEN** the user attempts to select a 4th item
- **THEN** the 4th item's checkbox remains unchecked
- **AND** the checkbox is visually disabled or the click is ignored
- **AND** the selected count remains at 3

#### Scenario: Items can be deselected

- **GIVEN** one or more items are selected
- **WHEN** the user clicks a selected item's checkbox (or its remove button)
- **THEN** the item is deselected
- **AND** the checkbox becomes unchecked
- **AND** the selected count decrements
- **AND** a previously blocked item becomes selectable again if under the limit

#### Scenario: Dropdown closes on outside click

- **GIVEN** the dropdown is open
- **WHEN** the user clicks outside the dropdown area
- **THEN** the dropdown menu closes
- **AND** the selected items remain reflected in the trigger display

#### Scenario: Selected items shown as tags/chips

- **GIVEN** items are selected
- **WHEN** the dropdown is closed
- **THEN** the selected items are displayed as tags or chips in or near the trigger
- **AND** each tag shows the item label and a remove control

#### Scenario: Accessibility — keyboard navigation

- **GIVEN** the dropdown is open
- **WHEN** the user presses ArrowDown / ArrowUp
- **THEN** focus moves between items in the list
- **AND** pressing Space or Enter toggles the focused item's selection
- **AND** pressing Escape closes the dropdown

#### Scenario: Accessibility — ARIA attributes

- **GIVEN** the component is rendered
- **THEN** the dropdown trigger has `role="combobox"` or equivalent
- **AND** the dropdown list has `role="listbox"` or equivalent
- **AND** each item has `role="option"` with `aria-selected` reflecting selection state
- **AND** the component announces the selected count to screen readers

## Verification checklist

- [ ] Spec reviewed and matches ColorLib Multiselect 17 description
- [ ] New name `optibox` does not collide with existing apps/ or openspec/specs/
- [ ] No reference to ColorLib in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `optibox.free.componentdock.com`
- [ ] `package.json` homepage is `https://optibox.free.componentdock.com`
- [ ] Design tokens match the extracted values
- [ ] All Gherkin scenarios have corresponding test cases
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Component uses `cn()` from packages/ui for class merging
- [ ] No new dependencies added unless absolutely necessary
- [ ] Placeholder images use `https://picsum.photos/seed/optibox-<n>/<w>/<h>`
- [ ] Google / system fonts loaded via `<link>` in index.html
- [ ] Icons from lucide-react
