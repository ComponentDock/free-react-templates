# Morph — Implementation Tasks

Source design: **Checkbox 15** (`https://colorlib.com/wp/template/checkbox-15/`) → recreation name **morph**. Shipped at https://morph.free.componentdock.com.

Scope: Morph is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/morph/src/App.tsx`:

### 1. DemoSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Checkbox #15 · Animated square-to-tick morphing checkbox

### 2. Footer
- The app SHALL render a footer with a link to Component Dock.
- Scenario — Footer displays app name:
  - **WHEN** I scroll to the footer
  - **THEN** I see the text "Morph"
- Scenario — Footer links to Component Dock:
  - **WHEN** I scroll to the footer
  - **THEN** I see a link to https://www.componentdock.com/
  - **AND** the link text contains "Component Dock"
- Scenario — Footer link opens in new tab:
  - **WHEN** I inspect the Component Dock link in the footer
  - **THEN** the link has target="_blank" and rel="noreferrer"

### Cross-cutting requirements

- **Heading display** — The app SHALL render a heading "Checkbox #15" centered on the page.
  - Scenario — Heading is visible: **WHEN** I load the Morph app; **THEN** I see a heading with text "Checkbox #15"
- **Checkbox task list** — The app SHALL render four labeled checkboxes in a vertical list, with the first checked by default and the others unchecked.
  - Scenario — Four checkboxes are rendered: **WHEN** I load the Morph app; **THEN** I see 4 checkboxes
  - Scenario — Default checked state: **WHEN** I load the Morph app; **THEN** the first checkbox is checked; **AND** the second checkbox is unchecked; **AND** the third checkbox is unchecked; **AND** the fourth checkbox is unchecked
  - Scenario — Disabled checkbox: **WHEN** I load the Morph app; **THEN** the fourth checkbox is disabled
- **Toggle behavior** — The app SHALL toggle a checkbox's checked state when the user clicks its label.
  - Scenario — Clicking an unchecked checkbox checks it: **GIVEN** I see an unchecked checkbox labeled "Build the components"; **WHEN** I click the label "Build the components"; **THEN** the checkbox becomes checked
  - Scenario — Clicking a checked checkbox unchecks it: **GIVEN** I see a checked checkbox labeled "Design the mockups"; **WHEN** I click the label "Design the mockups"; **THEN** the checkbox becomes unchecked
  - Scenario — Clicking a disabled checkbox does nothing: **GIVEN** I see a disabled checkbox labeled "Ship to production"; **WHEN** I click the label "Ship to production"; **THEN** the checkbox remains unchecked
- **Animated morphing checkbox** — The app SHALL render a custom checkbox with a CSS animation that morphs the square shape into a rounded shape with a checkmark tick on toggle.
  - Scenario — Checked checkbox shows tick SVG: **GIVEN** I see a checked checkbox; **WHEN** I inspect the checkbox element; **THEN** a tick SVG with a polyline is rendered inside the checkbox
  - Scenario — Unchecked checkbox has no tick visible: **GIVEN** I see an unchecked checkbox; **WHEN** I inspect the checkbox element; **THEN** the tick SVG has zero opacity
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/morph/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/morph/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/morph` ships on https://morph.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/morph/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/morph/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/morph/public/CNAME` = `morph.free.componentdock.com`
  and the package `homepage` = `https://morph.free.componentdock.com`.
