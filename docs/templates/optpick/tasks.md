# Optpick — Implementation Tasks

Source design: **Multiselect 01** (`https://colorlib.com/wp/template/multiselect-01/`) → recreation name **optpick**. Shipped at https://optpick.free.componentdock.com.

Scope: OptPick is a single-page MULTISELECT DROPDOWN component in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/optpick/src/App.tsx`:

### 1. MultiselectDropdown
- No dedicated spec block — hold this band to the design notes.
- Anchors: listbox

### 2. Footer
- The system SHALL render a footer linking to Component Dock.
- Scenario — Footer link:
  - **GIVEN** the page is rendered
  - **THEN** a footer is visible with a link to https://www.componentdock.com/
  - **AND** the link text is "Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Page layout** — The system SHALL render a full-height page with a light blue-white background (#f8f9fd) containing a centered white card with the multiselect dropdown component.
  - Scenario — Page renders with dropdown: **GIVEN** the user visits the OptPick page; **THEN** a card container is visible on a light blue-white background; **AND** the card contains a dropdown trigger element; **AND** the page title is "OptPick — Multiselect Dropdown Template"
  - Scenario — Heading text: **GIVEN** the page is rendered; **THEN** the card SHALL display the heading "Choose Fruits"
- **Dropdown open and close** — The system SHALL toggle the dropdown option list when the trigger button is clicked or activated via keyboard.
  - Scenario — Dropdown opens on click: **GIVEN** the dropdown is closed; **WHEN** the user clicks the dropdown trigger; **THEN** a list of options appears below the trigger; **AND** the trigger reports `aria-expanded="true"`
  - Scenario — Dropdown closes on second click: **GIVEN** the dropdown is open; **WHEN** the user clicks the dropdown trigger again; **THEN** the option list is hidden; **AND** the trigger reports `aria-expanded="false"`
  - Scenario — Dropdown closes on click outside: **GIVEN** the dropdown is open; **WHEN** the user clicks outside the dropdown; **THEN** the dropdown closes
  - Scenario — Dropdown closes on Escape: **GIVEN** the dropdown is open; **WHEN** the user presses Escape; **THEN** the dropdown closes
- **Option selection** — The system SHALL allow users to select and deselect individual options via checkboxes with green checkmark indicators.
  - Scenario — Single option selection: **GIVEN** the dropdown is open; **WHEN** the user clicks an unchecked option; **THEN** the checkbox becomes checked with a green checkmark; **AND** the option row shows a light green background
  - Scenario — Single option deselection: **GIVEN** the dropdown is open with an option selected; **WHEN** the user clicks the checked option; **THEN** the checkbox becomes unchecked; **AND** the option row background returns to white
  - Scenario — Multiple option selection: **GIVEN** the dropdown is open; **WHEN** the user selects multiple options; **THEN** all selected options show green checkmarks; **AND** the dropdown trigger displays the count of selected items
- **Select All / Clear All** — The system SHALL provide Select All and Clear All controls in the dropdown header.
  - Scenario — Select All: **GIVEN** the dropdown is open with no items selected; **WHEN** the user clicks "Select All"; **THEN** all enabled options become checked; **AND** the trigger shows all items selected
  - Scenario — Clear All: **GIVEN** the dropdown is open with all items selected; **WHEN** the user clicks "Clear All"; **THEN** all options become unchecked; **AND** the trigger shows no items selected
- **Disabled options** — The system SHALL prevent disabled options from being selected and display them with reduced opacity.
  - Scenario — Disabled option: **GIVEN** the dropdown is open with a disabled option; **WHEN** the user clicks the disabled option; **THEN** the option's selection state does not change; **AND** the disabled option has reduced opacity
- **Keyboard navigation** — The system SHALL support full keyboard navigation within the dropdown.
  - Scenario — Arrow keys navigate options: **GIVEN** the dropdown is open; **WHEN** the user presses ArrowDown; **THEN** focus moves to the next option; **WHEN** the user presses ArrowUp; **THEN** focus moves to the previous option
  - Scenario — Space and Enter toggle selection: **GIVEN** the dropdown is open; **WHEN** the user presses Space or Enter on a focused option; **THEN** the option's selection is toggled
  - Scenario — Keyboard opens dropdown: **GIVEN** the dropdown is closed and the trigger is focused; **WHEN** the user presses ArrowDown, ArrowUp, Enter, or Space; **THEN** the dropdown opens with focus on the first option
- **Accessibility** — The system SHALL provide appropriate ARIA attributes for screen readers.
  - Scenario — ARIA attributes: **GIVEN** the page is rendered; **THEN** the trigger SHALL have `aria-haspopup="listbox"`; **AND** the trigger SHALL have `aria-expanded` reflecting open state; **AND** the option list SHALL have `role="listbox"` and `aria-multiselectable`; **AND** each option SHALL have `role="option"` and `aria-selected`
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/optpick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/optpick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/optpick` ships on https://optpick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/optpick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/optpick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/optpick/public/CNAME` = `optpick.free.componentdock.com`
  and the package `homepage` = `https://optpick.free.componentdock.com`.
