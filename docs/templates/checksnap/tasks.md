# Checksnap — Implementation Tasks

Source design: **Checkbox 16** (`https://colorlib.com/wp/template/checkbox-16/`) → recreation name **checksnap**. Shipped at https://checksnap.free.componentdock.com.

Scope: Checksnap is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/checksnap/src/App.tsx`:

### 1. CheckboxShowcase
- The template SHALL render four labeled checkboxes: "First checkbox" (checked by default), "Second checkbox" (unchecked), "Disabled" (unchecked and disabled), and "Disabled & checked" (checked and disabled).
- Scenario — Four checkboxes are rendered:
  - **WHEN** the page loads
  - **THEN** 4 checkbox inputs are present
- Scenario — Default checked state:
  - **WHEN** the page loads
  - **THEN** the first checkbox is checked
  - **AND** the second checkbox is unchecked
  - **AND** the third checkbox is unchecked
  - **AND** the fourth checkbox is checked
- Scenario — Disabled checkboxes:
  - **WHEN** the page loads
  - **THEN** the third checkbox is disabled
  - **AND** the fourth checkbox is disabled

### 2. Footer
- The template SHALL display a footer with the template name "Checksnap" and a link to Component Dock (https://www.componentdock.com/).
- Scenario — Footer is visible:
  - **WHEN** the page loads
  - **THEN** a footer element is rendered
- Scenario — Footer contains Component Dock link:
  - **WHEN** I look at the footer
  - **THEN** I see a link with text "Component Dock"
  - **AND** the link points to "https://www.componentdock.com/"
  - **AND** the link opens in a new tab
- Scenario — Footer shows template name:
  - **WHEN** I look at the footer
  - **THEN** I see the text "Checksnap"

### Cross-cutting requirements

- **Renders the main heading and subtitle** — The template SHALL display a centered heading "Checkbox #16" and a subtitle "Hover effect checkbox component demo" at the top of the page.
  - Scenario — Heading is visible: **WHEN** the page loads; **THEN** a heading with text "Checkbox #16" is rendered at level 1
  - Scenario — Subtitle is visible: **WHEN** the page loads; **THEN** the text "Hover effect checkbox component demo" is displayed
- **Toggle behavior** — The template SHALL toggle a checkbox's checked state when the user clicks its label or the checkbox itself.
  - Scenario — Clicking an unchecked checkbox checks it: **GIVEN** I see an unchecked checkbox labeled "Second checkbox"; **WHEN** I click the label "Second checkbox"; **THEN** the checkbox becomes checked
  - Scenario — Clicking a checked checkbox unchecks it: **GIVEN** I see a checked checkbox labeled "First checkbox"; **WHEN** I click the label "First checkbox"; **THEN** the checkbox becomes unchecked
  - Scenario — Disabled checkboxes do not toggle: **GIVEN** I see a disabled checkbox labeled "Disabled"; **WHEN** I click the label "Disabled"; **THEN** the checkbox remains unchecked
- **Hover effect** — The template SHALL apply a visual hover effect to each checkbox container when the user hovers over it.
  - Scenario — Hover effect changes background: **WHEN** I hover over a checkbox container; **THEN** the container background changes to a light green tint
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/checksnap/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/checksnap/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/checksnap` ships on https://checksnap.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/checksnap/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/checksnap/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checksnap/public/CNAME` = `checksnap.free.componentdock.com`
  and the package `homepage` = `https://checksnap.free.componentdock.com`.
