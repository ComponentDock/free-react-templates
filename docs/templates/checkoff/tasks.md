# Checkoff — Implementation Tasks

Source design: **Checkbox 11** (`https://colorlib.com/wp/template/checkbox-11/`) → recreation name **checkoff**. Shipped at https://checkoff.free.componentdock.com.

Scope: Checkoff is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/checkoff/src/App.tsx`:

### 1. CheckboxShowcase
- The template SHALL allow toggling of non-disabled checkboxes via click.
- Scenario — Toggle unchecked to checked:
  - **WHEN** the user clicks the "Second checkbox" label
  - **THEN** the "Second checkbox" becomes checked
- Scenario — Toggle checked to unchecked:
  - **WHEN** the user clicks the "First checkbox" label
  - **THEN** the "First checkbox" becomes unchecked

### 2. Footer
- The template SHALL render a footer containing a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link is present:
  - **WHEN** the page loads
  - **THEN** a link with text "Component Dock" pointing to

### Cross-cutting requirements

- **Renders the main heading and subtitle** — The template SHALL display a centered heading "Checkbox #11" and a subtitle "Bootstrap custom checkbox component demo" at the top of the page.
  - Scenario — Heading is visible: **WHEN** the page loads; **THEN** a heading with text "Checkbox #11" is rendered at level 1
  - Scenario — Subtitle is visible: **WHEN** the page loads; **THEN** the text "Bootstrap custom checkbox component demo" is displayed
- **Renders four checkbox items with correct states** — The template SHALL render four custom checkboxes with distinct labels and initial states matching the original ColorLib design.
  - Scenario — First checkbox is checked by default: **WHEN** the page loads; **THEN** the checkbox labeled "First checkbox" is in the checked state
  - Scenario — Second checkbox is unchecked by default: **WHEN** the page loads; **THEN** the checkbox labeled "Second checkbox" is in the unchecked state
  - Scenario — Third checkbox is disabled and unchecked: **WHEN** the page loads; **THEN** the checkbox labeled "Disabled" is disabled and unchecked
  - Scenario — Fourth checkbox is disabled and checked: **WHEN** the page loads; **THEN** the checkbox labeled "Disabled & checked" is disabled and checked
- **Disabled checkboxes do not toggle** — The template SHALL NOT change the state of disabled checkboxes when clicked.
  - Scenario — Disabled checkbox stays unchecked: **WHEN** the user clicks the "Disabled" label; **THEN** the "Disabled" checkbox remains unchecked
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/checkoff/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/checkoff/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/checkoff` ships on https://checkoff.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/checkoff/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/checkoff/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checkoff/public/CNAME` = `checkoff.free.componentdock.com`
  and the package `homepage` = `https://checkoff.free.componentdock.com`.
