# Galette — Implementation Tasks

Source design: **Checkbox 04** (`https://colorlib.com/wp/template/checkbox-04/`) → recreation name **galette**. Shipped at https://galette.free.componentdock.com.

Scope: Galette is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/galette/src/App.tsx`:

### 1. SelectionSection
- The system SHALL render a subtitle prompting the user to select items.
- Scenario — Subtitle content:
  - **GIVEN** the Galette page is rendered
  - **WHEN** the page loads
  - **THEN** a subtitle "Select your preferences" or similar prompt SHALL be

### 2. Footer
- The system SHALL render a footer containing a link to Component Dock.
- Scenario — Footer link:
  - **GIVEN** the Galette page is rendered
  - **WHEN** the user views the footer
  - **THEN** a link labeled "Component Dock" SHALL be present
  - **AND** the link SHALL point to https://www.componentdock.com/
  - **AND** the link SHALL open in a new tab

### Cross-cutting requirements

- **Page heading** — The system SHALL render a centered page heading "Checkbox #04".
  - Scenario — Heading content: **GIVEN** the Galette page is rendered; **WHEN** the page loads; **THEN** the heading "Checkbox #04" SHALL be displayed as the main heading
- **Custom checkboxes** — The system SHALL render at least 3 custom-styled rectangular checkboxes.
  - Scenario — Checkbox rendering: **GIVEN** the Galette page is rendered; **WHEN** the page loads; **THEN** at least 3 checkbox options SHALL be visible; **AND** each checkbox SHALL have a text label; **AND** each checkbox SHALL be toggleable
  - Scenario — Checkbox interaction: **GIVEN** a checkbox is unchecked; **WHEN** the user clicks the checkbox; **THEN** the checkbox SHALL become checked; **AND** the visual style SHALL change to the checked state (accent color); **WHEN** the user clicks the checkbox again; **THEN** the checkbox SHALL become unchecked
  - Scenario — Default state: **GIVEN** the Galette page is rendered; **WHEN** the page loads; **THEN** all checkboxes SHALL be unchecked by default
- **Dark mode support** — The system SHALL support dark mode via class-based toggling.
  - Scenario — Dark mode rendering: **GIVEN** the html element has the "dark" class; **WHEN** the Galette page is rendered; **THEN** the page SHALL use dark background and light text colors
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/galette/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/galette/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/galette` ships on https://galette.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/galette/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/galette/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/galette/public/CNAME` = `galette.free.componentdock.com`
  and the package `homepage` = `https://galette.free.componentdock.com`.
