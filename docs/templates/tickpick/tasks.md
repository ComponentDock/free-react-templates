# Tickpick — Implementation Tasks

Source design: **Checkbox 09** (`https://colorlib.com/wp/template/checkbox-09/`) → recreation name **tickpick**. Shipped at https://tickpick.free.componentdock.com.

Scope: Tickpick is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/tickpick/src/App.tsx`:

### 1. DemoSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Checkbox #09

### 2. Footer
- The app SHALL display a footer containing a link to https://www.componentdock.com/.
- Scenario — Footer link is present:
  - **WHEN** I load the Tickpick app
  - **THEN** I see a footer with a link labeled "Component Dock"
  - **AND** the link points to "https://www.componentdock.com/"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Heading display** — The app SHALL render a heading "Checkbox #09" centered on the page.
  - Scenario — Heading is visible: **WHEN** I load the Tickpick app; **THEN** I see a heading with text "Checkbox #09"
- **Checkbox task list** — The app SHALL render three labeled checkboxes in a vertical list, with the first checked by default and the other two unchecked.
  - Scenario — Three checkboxes are rendered: **WHEN** I load the Tickpick app; **THEN** I see 3 checkboxes
  - Scenario — Default checked state: **WHEN** I load the Tickpick app; **THEN** the first checkbox is checked; **AND** the second checkbox is unchecked; **AND** the third checkbox is unchecked
- **Checkbox interactivity** — Users SHALL be able to toggle any checkbox by clicking it.
  - Scenario — Toggling an unchecked checkbox: **WHEN** I click an unchecked checkbox; **THEN** it becomes checked
  - Scenario — Toggling a checked checkbox: **WHEN** I click a checked checkbox; **THEN** it becomes unchecked
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tickpick/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tickpick/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tickpick` ships on https://tickpick.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tickpick/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tickpick/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tickpick/public/CNAME` = `tickpick.free.componentdock.com`
  and the package `homepage` = `https://tickpick.free.componentdock.com`.
