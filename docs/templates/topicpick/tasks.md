# Topicpick — Implementation Tasks

Source design: **Multiselect 02** (`https://colorlib.com/wp/template/multiselect-02/`) → recreation name **topicpick**. Shipped at https://topicpick.free.componentdock.com.

Scope: Recreation of ColorLib "Multiselect 02" (https://colorlib.com/wp/template/multiselect-02/). A centered page with a heading, a label, and a multiselect dropdown for selecting topics from a list of 11 options. Brand color: #e8647c (pink/rose), font: Lato, white background.

## Component breakdown

Render order as composed in `apps/topicpick/src/App.tsx`:

### 1. TopicDropdown
- Users SHALL see a centered page with a "Topic Selector" heading, a "Select Topics" label, and a dropdown trigger showing "Select options".
- Scenario — Page renders with heading and dropdown:
  - **GIVEN** the user opens the Topicpick template
  - **WHEN** the page loads
  - **THEN** they see a heading "Topic Selector"
  - **AND** they see a label "Select Topics"
  - **AND** they see a dropdown trigger showing "Select options"

### 2. Footer
- The footer SHALL display a "Component Dock" link to https://www.componentdock.com/.
- Scenario — Footer links to Component Dock:
  - **GIVEN** the user scrolls to the footer
  - **WHEN** they look at the footer
  - **THEN** they see a "Component Dock" link to https://www.componentdock.com/

### Cross-cutting requirements

- **Dropdown opens and shows options** — The dropdown SHALL open on click or keyboard activation and display all 11 topic options plus a "Select All" button.
  - Scenario — Dropdown opens and shows options: **GIVEN** the user clicks the dropdown trigger; **WHEN** the dropdown opens; **THEN** options Topic 1 through Topic 11 are visible; **AND** a "Select All" button is visible
- **User can select multiple topics** — The dropdown SHALL support selecting multiple topics. The trigger SHALL display "N items selected" when topics are selected.
  - Scenario — User can select multiple topics: **GIVEN** the dropdown is open; **WHEN** the user clicks "Topic 1"; **THEN** "Topic 1" is selected; **WHEN** the user clicks "Topic 3"; **THEN** both "Topic 1" and "Topic 3" are selected; **AND** the trigger shows "2 items selected"
- **User can deselect topics** — Clicking an already selected topic SHALL deselect it.
  - Scenario — User can deselect topics: **GIVEN** "Topic 1" is selected; **WHEN** the user clicks "Topic 1" again; **THEN** "Topic 1" is deselected
- **Select All selects all enabled options** — The "Select All" button SHALL select all non-disabled topics.
  - Scenario — Select All selects all options: **GIVEN** the dropdown is open; **WHEN** the user clicks "Select All"; **THEN** all 11 topics are selected; **AND** the trigger shows "11 items selected"
- **Clear All clears selections** — The "Clear All" button SHALL clear all selections.
  - Scenario — Clear All clears selections: **GIVEN** multiple topics are selected; **WHEN** the user clicks "Clear All"; **THEN** no topics are selected; **AND** the trigger shows "Select options"
- **Keyboard navigation works** — The dropdown SHALL support keyboard navigation with ArrowDown, ArrowUp, Enter, Space, and Escape keys.
  - Scenario — Keyboard navigation works: **GIVEN** the dropdown is closed; **WHEN** the user presses ArrowDown; **THEN** the dropdown opens; **WHEN** the user presses ArrowDown and Enter; **THEN** the focused topic is selected
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/topicpick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/topicpick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/topicpick` ships on https://topicpick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/topicpick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/topicpick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/topicpick/public/CNAME` = `topicpick.free.componentdock.com`
  and the package `homepage` = `https://topicpick.free.componentdock.com`.
