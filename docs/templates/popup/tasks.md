# Popup — Implementation Tasks

Source design: **Modal 11** (`https://colorlib.com/wp/template/modal-11/`) → recreation name **popup**. Shipped at https://popup.free.componentdock.com.

Scope: Popup is a single-page MINIMAL TEXT MODAL in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Modal 11" free template (source: https://colorlib.com/wp/template/modal-11/), built under a DIFFERENT name (**Popup**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/popup/src/App.tsx`:

### 1. LaunchSection
- The page SHALL display a centered launch section with a heading ("Popup"), a descriptive subtitle, and a "Show Message" button.
- Scenario — Page loads with launch section:
  - **WHEN** the page loads
  - **THEN** I see a heading with text "Popup"
  - **AND** I see a description paragraph
  - **AND** I see a button with text "Show Message"

### 2. Footer
- The page footer SHALL display the template name, a description, and a link to Component Dock.
- Scenario — Footer shows Component Dock link:
  - **WHEN** the page loads
  - **THEN** I see a link to "https://www.componentdock.com/"
  - **AND** the link opens in a new tab

### 3. TextModal
- Clicking the "Show Message" button SHALL open a modal dialog overlay.
- Scenario — Modal opens on button click:
  - **WHEN** I click the "Show Message" button
  - **THEN** a dialog element appears with role "dialog"
  - **AND** the dialog has aria-modal "true"

### Cross-cutting requirements

- **Modal displays text content** — The modal SHALL display a heading and descriptive text content.
  - Scenario — Modal shows text content: **GIVEN** the modal is open; **THEN** I see a heading inside the modal; **AND** I see a paragraph of descriptive text
- **Modal closes on close button click** — Clicking the close (X) button SHALL dismiss the modal.
  - Scenario — Close button dismisses modal: **GIVEN** the modal is open; **WHEN** I click the close button; **THEN** the dialog disappears
- **Modal closes on backdrop click** — Clicking outside the modal content area SHALL dismiss the modal.
  - Scenario — Backdrop click dismisses modal: **GIVEN** the modal is open; **WHEN** I click outside the modal content; **THEN** the dialog disappears
- **Modal closes on Escape key** — Pressing the Escape key SHALL dismiss the modal.
  - Scenario — Escape key dismisses modal: **GIVEN** the modal is open; **WHEN** I press Escape; **THEN** the dialog disappears
- **Focus trap in modal** — The modal SHALL trap keyboard focus between focusable elements.
  - Scenario — Tab wraps from last to first element: **GIVEN** the modal is open; **WHEN** I press Tab on the last focusable element; **THEN** focus moves to the first focusable element
  - Scenario — Shift+Tab wraps from first to last element: **GIVEN** the modal is open; **WHEN** I press Shift+Tab on the first focusable element; **THEN** focus moves to the last focusable element
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/popup/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/popup/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/popup` ships on https://popup.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/popup/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/popup/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/popup/public/CNAME` = `popup.free.componentdock.com`
  and the package `homepage` = `https://popup.free.componentdock.com`.
