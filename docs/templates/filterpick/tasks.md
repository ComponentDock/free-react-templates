# Filterpick — Implementation Tasks

Source design: **Multiselect 04** (`https://colorlib.com/wp/template/multiselect-04/`) → recreation name **filterpick**. Shipped at https://filterpick.free.componentdock.com.

Scope: FilterPick is a single-page MULTISELECT DROPDOWN COMPONENT in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/filterpick/src/App.tsx`:

### 1. CheckmarkDropdown
- Users SHALL see a multiselect dropdown component that displays a list of options with checkmark checkboxes, allowing multiple selections simultaneously.
- Scenario — Initial state renders with placeholder:
  - **WHEN** the page loads
  - **THEN** a dropdown trigger button is visible showing "Select options" placeholder text
  - **AND** no options are initially selected
- Scenario — Opening the dropdown:
  - **WHEN** the user clicks the dropdown trigger
  - **THEN** a list of options appears below the trigger
  - **AND** each option displays a checkbox indicator and label text
  - **AND** the trigger shows aria-expanded="true"
- Scenario — Selecting an option:
  - **WHEN** the user clicks an unchecked option in the open dropdown
  - **THEN** a teal checkmark appears in the checkbox
  - **AND** the option row gets a light background highlight
  - **AND** the trigger text updates to show "N items selected"
- Scenario — Deselecting an option:
  - **WHEN** the user clicks a checked option
  - **THEN** the checkmark is removed
  - **AND** the highlight background is removed
  - **AND** the count updates accordingly
- Scenario — Select All functionality:
  - **WHEN** the user clicks "Select All" in the dropdown header
  - **THEN** all enabled options become selected
  - **AND** the button text changes to "Clear All"
- Scenario — Clear All functionality:
  - **WHEN** the user clicks "Clear All"
  - **THEN** all selections are removed
  - **AND** the trigger returns to placeholder text
- Scenario — Disabled option handling:
  - **WHEN** an option has the disabled attribute
  - **THEN** clicking it does not change the selection
  - **AND** the option displays with reduced opacity
- Scenario — Keyboard navigation:
  - **WHEN** the user focuses the trigger and presses ArrowDown or Enter
  - **THEN** the dropdown opens
  - **AND** ArrowUp/ArrowDown moves focus between options
  - **AND** Space/Enter toggles the focused option
  - **AND** Escape closes the dropdown
- Scenario — Click outside closes dropdown:
  - **WHEN** the dropdown is open and the user clicks outside
  - **THEN** the dropdown closes

### 2. Footer
- Every template's footer MUST link https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer renders Component Dock link:
  - **WHEN** the Footer component renders
  - **THEN** a link to https://www.componentdock.com/ is visible
  - **AND** the link opens in a new tab with rel="noopener noreferrer"
  - **AND** the text says "Made with Component Dock"

### Cross-cutting requirements

- **Accessible markup** — The component SHALL use semantic ARIA attributes: aria-expanded, aria-haspopup="listbox", role="listbox", aria-multiselectable, role="option", aria-selected, aria-disabled.
  - Scenario — ARIA attributes are present: **WHEN** the dropdown renders; **THEN** the trigger has aria-haspopup="listbox"; **AND** the trigger has aria-expanded (true when open, false when closed); **AND** the listbox has role="listbox" and aria-multiselectable; **AND** each option has role="option" and aria-selected
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/filterpick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/filterpick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/filterpick` ships on https://filterpick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/filterpick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/filterpick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/filterpick/public/CNAME` = `filterpick.free.componentdock.com`
  and the package `homepage` = `https://filterpick.free.componentdock.com`.
