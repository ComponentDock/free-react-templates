# Picktag — Implementation Tasks

Source design: **Multiselect 11** (`https://colorlib.com/wp/template/multiselect-11/`) → recreation name **picktag**. Shipped at https://picktag.free.componentdock.com.

Scope: Picktag is a single-page multi-select component in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/picktag/src/App.tsx`:

### 1. MultiSelect
- The component SHALL render a multi-select dropdown that allows selecting multiple options from a predefined list.
- Scenario — Initial state:
  - **GIVEN** the Picktag app is rendered with no items selected
  - **THEN** the dropdown input SHALL be visible showing placeholder text
  - **AND** no tag chips SHALL be visible
  - **AND** the input SHALL have a bottom border (`1px solid #e6e6e6`)
- Scenario — Dropdown open:
  - **GIVEN** the dropdown is closed
  - **WHEN** the user clicks the dropdown input area
  - **THEN** a dropdown list SHALL appear below the input
  - **AND** the list SHALL show all available options: Design, HTML5, CSS3,
  - **AND** the list SHALL be searchable (a search input at top of list)
- Scenario — Selection creates tag chips:
  - **GIVEN** the dropdown list is open
  - **WHEN** the user clicks an option (e.g. "Design")
  - **THEN** a purple chip/tag SHALL appear in the input area with text
  - **AND** the chip SHALL have a remove icon ("x") that is semi-transparent
  - **AND** hovering the remove icon SHALL make it fully white
  - **AND** the option in the dropdown list SHALL be marked as selected
- Scenario — Deselection via chip remove:
  - **GIVEN** "Design" is selected and its chip is visible
  - **WHEN** the user clicks the "x" on the Design chip
  - **THEN** the chip SHALL be removed from the input area
  - **AND** the option SHALL be deselected in the dropdown list
  - **AND** the dropdown list SHALL remain open (if it was open)
- Scenario — Multiple selections:
  - **GIVEN** the user selects "Design", "HTML5", and "CSS3"
  - **THEN** three chips SHALL be visible in the input area
  - **AND** the chips SHALL be laid out horizontally with wrapping
  - **AND** each chip SHALL have the purple background, white text, and

### 2. Footer
- The template footer MUST link to https://www.componentdock.com/ and be branded as "Component Dock".
- Scenario — Footer link:
  - **GIVEN** the Picktag app is rendered
  - **THEN** a footer section SHALL be visible at the bottom of the page
  - **AND** the footer SHALL contain a link to
  - **AND** the footer SHALL NOT contain any reference to ColorLib

### Cross-cutting requirements

- **Page layout** — The app SHALL render a single full-viewport section with centered content containing a heading, instructional text, and the multi-select component.
  - Scenario — Page structure: **GIVEN** the Picktag app is rendered; **THEN** the page background SHALL be `#fff` (white); **AND** the font family SHALL be "Roboto", sans-serif; **AND** a centered heading reading "Multi-Select #1" (20px, black); **AND** instructional text reading "Tags separate with comma \",\""; **AND** a multi-select component SHALL be centered below the text in
- **Search / filtering** — The dropdown list SHALL support live search filtering of options.
  - Scenario — Search behavior: **GIVEN** the dropdown list is open; **THEN** a search input SHALL be visible at the top of the list; **WHEN** the user types a query (e.g. "boot"); **THEN** only options containing the query (case-insensitive) SHALL; **AND** already-selected options SHALL remain visible as chips even; **WHEN** the user clears the search input; **THEN** all options SHALL become visible again
- **Chip styling** — Selected items SHALL appear as styled tag/pill chips matching the source's Select2 choice appearance.
  - Scenario — Chip visual design: **GIVEN** an item is selected; **THEN** its chip SHALL have:; Background: `#65587f` (muted purple); Text color: `#fff` (white); Font size: `14px`; Padding: `2px 10px`; Border-radius: small (matching Select2 default, ~3px); A remove button ("x") at the left or right with; **AND** hovering the chip's remove button SHALL change color to `#fff`
- **Option highlighting** — The dropdown list SHALL visually distinguish selected vs unselected options.
  - Scenario — Selected option highlight: **GIVEN** "Design" is selected; **WHEN** the dropdown list is open; **THEN** the "Design" option SHALL have a `#65587f` background with; **AND** unselected options SHALL have a white or light background; **AND** hovering an unselected option SHALL show `#f4f4f4` background
- **Keyboard interaction** — The component SHALL support basic keyboard interaction.
  - Scenario — Keyboard accessibility: **GIVEN** the dropdown input is focused; **WHEN** the user presses Enter or Space; **THEN** the dropdown list SHALL toggle open/closed; **WHEN** the user presses Escape while the list is open; **THEN** the dropdown list SHALL close; **AND** the user SHALL be able to navigate options with arrow keys
- **Responsive behavior** — The layout SHALL be responsive and work on mobile viewports.
  - Scenario — Mobile layout: **GIVEN** the viewport is 375px wide; **THEN** the heading and multi-select SHALL stack vertically and take; **AND** the multi-select SHALL still function correctly (open, search,
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/picktag/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/picktag/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Page renders with white background and Roboto font; [ ] Heading "Multi-Select #1" is centered at 20px; [ ] Instructional text is visible in light gray; [ ] Dropdown opens on click showing all 8 options; [ ] Search input filters options in real time; [ ] Selecting an option creates a purple chip with white text; [ ] Chip has "x" remove button (semi-transparent white); [ ] Clicking "x" removes the chip and deselects the option; [ ] Multiple selections create multiple chips (horizontal wrapping); [ ] Selected options are highlighted in purple in the dropdown; [ ] Unselected options hover at #f4f4f4; [ ] Keyboard: Enter/Space toggles, Escape closes; [ ] Mobile: full-width stacked layout at 375px; [ ] Footer links to componentdock.com, no ColorLib references; [ ] No ColorLib references in any app source files; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/picktag` ships on https://picktag.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/picktag/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/picktag/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/picktag/public/CNAME` = `picktag.free.componentdock.com`
  and the package `homepage` = `https://picktag.free.componentdock.com`.
