# Checkify — Implementation Tasks

Source design: **Checkbox 12** (`https://colorlib.com/wp/template/checkbox-12/`) → recreation name **checkify**. Shipped at https://checkify.free.componentdock.com.

Scope: Checkify is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/checkify/src/App.tsx`:

### 1. CheckboxShowcase
- Enabled checkboxes SHALL toggle state when clicked.
- Scenario — Clicking an enabled checkbox toggles it:
  - **WHEN** the user clicks the unchecked "Second checkbox"
  - **THEN** it becomes checked
- Scenario — Clicking a checked checkbox unchecks it:
  - **WHEN** the user clicks the checked "First checkbox"
  - **THEN** it becomes unchecked
- Scenario — Disabled checkboxes do not toggle:
  - **WHEN** the user clicks the disabled "Disabled" checkbox
  - **THEN** it remains unchecked

### 2. Footer
- The template SHALL include a footer with a link to https://www.componentdock.com/.
- Scenario — Footer is present:
  - **WHEN** the page loads
  - **THEN** a footer element is rendered at the bottom
- Scenario — Footer contains Component Dock link:
  - **WHEN** the page loads
  - **THEN** a link pointing to "https://www.componentdock.com/" is visible in the footer

### Cross-cutting requirements

- **Renders the main heading and subtitle** — The template SHALL display a centered heading "Checkbox #12" and a subtitle "Bootstrap custom checkbox component demo" at the top of the page.
  - Scenario — Heading is visible: **WHEN** the page loads; **THEN** a heading with text "Checkbox #12" is rendered at level 1
  - Scenario — Subtitle is visible: **WHEN** the page loads; **THEN** the text "Bootstrap custom checkbox component demo" is displayed
- **Renders four checkbox items with correct states** — The template SHALL render four custom checkboxes with distinct labels and initial states matching the original ColorLib design.
  - Scenario — First checkbox is checked by default: **WHEN** the page loads; **THEN** the checkbox labeled "First checkbox" is in the checked state
  - Scenario — Second checkbox is unchecked by default: **WHEN** the page loads; **THEN** the checkbox labeled "Second checkbox" is in the unchecked state
  - Scenario — Third checkbox is disabled and unchecked: **WHEN** the page loads; **THEN** the checkbox labeled "Disabled" is disabled and unchecked
  - Scenario — Fourth checkbox is disabled and checked: **WHEN** the page loads; **THEN** the checkbox labeled "Disabled & checked" is disabled and checked
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/checkify/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/checkify/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/checkify` ships on https://checkify.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/checkify/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/checkify/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checkify/public/CNAME` = `checkify.free.componentdock.com`
  and the package `homepage` = `https://checkify.free.componentdock.com`.
