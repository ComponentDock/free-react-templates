# Checkmark — Implementation Tasks

Source design: **Checkbox 07** (`https://colorlib.com/wp/template/checkbox-07/`) → recreation name **checkmark**. Shipped at https://checkmark.free.componentdock.com.

Scope: Checkmark is a single-page UI-component demo template in the free-react-templates monorepo.

## Component breakdown

Render order as composed in `apps/checkmark/src/App.tsx`:

### 1. CheckboxShowcase
- Two checkboxes SHALL be pre-checked by default: "Email notifications" and "Share activity with friends". All other checkboxes SHALL be unchecked.
- Scenario — Pre-checked checkboxes:
  - **WHEN** the page loads
  - **THEN** "Email notifications" is checked
  - **AND** "Share activity with friends" is checked
- Scenario — Other checkboxes unchecked:
  - **WHEN** the page loads
  - **THEN** "Enable two-factor authentication" is unchecked
  - **AND** "Show online status" is unchecked
  - **AND** "Allow friend requests" is unchecked

### 2. Footer
- The template SHALL display a footer containing the template name "Checkmark" and a link to https://www.componentdock.com/ labeled "Component Dock" that opens in a new tab.
- Scenario — Footer link:
  - **WHEN** the page loads
  - **THEN** a link to "https://www.componentdock.com/" is present with text "Component Dock"
  - **AND** the link has target="_blank"
- Scenario — Footer template name:
  - **WHEN** the page loads
  - **THEN** the text "Checkmark" is visible in the footer area

### Cross-cutting requirements

- **Renders the main heading and subtitle** — The template SHALL display a centered heading "Checkbox #07" and a subtitle "Custom styled checkboxes with color variants" at the top of the page.
  - Scenario — Heading is visible: **WHEN** the page loads; **THEN** a heading with text "Checkbox #07" is rendered at level 1
  - Scenario — Subtitle is visible: **WHEN** the page loads; **THEN** the text "Custom styled checkboxes with color variants" is displayed
- **Renders all checkbox sections and options** — The template SHALL display 3 themed sections (Profile Settings, Notifications, Privacy), each containing exactly 3 custom checkboxes, for a total of 9 checkbox options.
  - Scenario — All sections are rendered: **WHEN** the page loads; **THEN** headings for "Profile Settings", "Notifications", and "Privacy" are visible
  - Scenario — All 9 checkboxes are present: **WHEN** the page loads; **THEN** 9 checkbox inputs are rendered in the DOM
- **Checkboxes toggle on click** — Each checkbox SHALL toggle its checked state when clicked.
  - Scenario — Toggle on click: **WHEN** I click "Enable two-factor authentication"; **THEN** "Enable two-factor authentication" becomes checked
  - Scenario — Untoggle on second click: **WHEN** I click "Enable two-factor authentication" twice; **THEN** "Enable two-factor authentication" becomes unchecked
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/checkmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/checkmark/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/checkmark` ships on https://checkmark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/checkmark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/checkmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/checkmark/public/CNAME` = `checkmark.free.componentdock.com`
  and the package `homepage` = `https://checkmark.free.componentdock.com`.
