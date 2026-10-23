# Groupcap — Implementation Tasks

Source design: **Multiselect 18** (`https://colorlib.com/wp/template/multiselect-18/`) → recreation name **groupcap**. Shipped at https://groupcap.free.componentdock.com.

Scope: Groupcap is a single-page multi-select FORM in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Multiselect 18" free template (source: https://colorlib.com/wp/template/multiselect-18/), built under a DIFFERENT name (**Groupcap**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.…

## Component breakdown

Render order as composed in `apps/groupcap/src/App.tsx`:

### 1. GroupcapMultiSelect
- The template SHALL render a centered heading and a single multi-select dropdown widget.
- Scenario — Page renders with grouped multiselect widget:
  - **WHEN** the user navigates to the Groupcap page
  - **THEN** the heading "Multi-Select #8 (Limit selection on groups)" is visible
  - **AND** a multi-select dropdown button is visible showing "Nothing selected"

### 2. Footer
- The page footer SHALL contain a link to Component Dock.
- Scenario — Footer renders Component Dock link:
  - **WHEN** the page renders
  - **THEN** the footer contains a link to "https://www.componentdock.com/" with text "Component Dock"

### Cross-cutting requirements

- **Dropdown opens showing grouped options** — The dropdown SHALL display search input, Select All/Deselect All buttons, and options organized under group headers with per-group limits.
  - Scenario — Dropdown opens showing grouped options: **WHEN** the user clicks the multi-select dropdown button; **THEN** a dropdown panel appears with a search input; **AND** "Select All" and "Deselect All" buttons are visible; **AND** 4 optgroup headers are visible: Group A, Group B, Group C, Group D; **AND** each group header shows its selection limit; **AND** all state options are visible with unchecked checkboxes
- **Selecting options within a group** — Selecting an option SHALL check its checkbox and update the button text.
  - Scenario — Selecting options within a group: **GIVEN** the dropdown is open; **WHEN** the user clicks "Alpha" in Group A; **THEN** the checkbox next to "Alpha" is checked; **AND** the dropdown button text updates to show "Alpha"; **AND** a green check mark appears next to "Alpha"
- **Per-group limit enforcement** — When a group reaches its selection limit, remaining unchecked options in that group SHALL be disabled.
  - Scenario — Group A limit enforcement (max 2): **GIVEN** the dropdown is open; **AND** Group A has 2 items selected (Alpha and Bravo); **WHEN** the user views Group A; **THEN** the remaining unchecked options in Group A are disabled
- **Deselecting restores group capacity** — Deselecting an option in a group SHALL re-enable previously disabled options in that group.
  - Scenario — Deselecting restores group capacity: **GIVEN** Group A has 2 items selected and remaining disabled; **WHEN** the user deselects "Alpha" from Group A; **THEN** "Alpha" is unchecked; **AND** the previously disabled options in Group A become enabled again
- **Independent group limits** — Each group's selection limit SHALL be independent of other groups.
  - Scenario — Independent group limits: **GIVEN** Group A has 2 items selected (at its limit); **AND** Group B has 3 items selected (at its limit); **WHEN** the user views Group C; **THEN** all unchecked options in Group C remain enabled; **AND** the user can select items from Group C
- **Search filters options** — Typing in the search input SHALL filter options across all groups.
  - Scenario — Search filters within groups: **GIVEN** the dropdown is open; **WHEN** the user types "Al" in the search input; **THEN** only options containing "Al" are visible; **AND** the group structure is preserved for visible results
- **Deselect All clears all selections** — Clicking "Deselect All" SHALL clear all selected options across all groups.
  - Scenario — Deselect All clears all groups: **GIVEN** items are selected across multiple groups; **WHEN** the user clicks "Deselect All"; **THEN** all checkboxes are unchecked; **AND** the dropdown button shows "Nothing selected"; **AND** all options in all groups are enabled
- **Select All fills groups to limits** — Clicking "Select All" SHALL fill each group up to its individual selection limit.
  - Scenario — Select All respects group limits: **WHEN** the user clicks "Select All" with no items selected; **THEN** Group A has 2 items selected (at its limit); **AND** Group B has 3 items selected (at its limit); **AND** remaining unchecked options in each group are disabled
- **Button text reflects selections** — The dropdown button SHALL display the names of currently selected items.
  - Scenario — Button text reflects selections: **GIVEN** the dropdown is open; **WHEN** the user selects "Alpha", "Echo"; **THEN** the dropdown button text shows "Alpha, Echo"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/groupcap/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/groupcap/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/groupcap` ships on https://groupcap.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/groupcap/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/groupcap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/groupcap/public/CNAME` = `groupcap.free.componentdock.com`
  and the package `homepage` = `https://groupcap.free.componentdock.com`.
