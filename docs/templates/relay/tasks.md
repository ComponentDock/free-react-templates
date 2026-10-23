# Relay — Implementation Tasks

Source design: **Modal 08** (`https://colorlib.com/wp/template/modal-08/`) → recreation name **relay**. Shipped at https://relay.free.componentdock.com.

Scope: A single-page React template featuring a centered launch button that opens a confirmation modal for email/newsletter subscriptions. The modal displays a gradient header with a skewed bottom edge, an email envelope icon, a "You've Got Mail!" heading, and the recipient's email address.

## Component breakdown

Render order as composed in `apps/relay/src/App.tsx`:

### 1. LaunchSection
- The template SHALL render a centered hero section with the template name "Relay", a description, and a "Launch Modal" button.
- Scenario — Page loads with launch button:
  - **GIVEN** the page is loaded
  - **THEN** I see a heading "Relay"
  - **AND** I see a button "Launch Modal"
- Scenario — Document title is set:
  - **GIVEN** the page is loaded
  - **THEN** the document title is "Relay — Email Confirmation Modal Template"

### 2. Footer
- The template SHALL include a footer linking to Component Dock.
- Scenario — Footer link:
  - **GIVEN** the page is loaded
  - **THEN** I see a link to "https://www.componentdock.com/"
  - **AND** the link text is "More templates at Component Dock"

### 3. ConfirmationModal
- No dedicated spec block — hold this band to the design notes.
- Anchors: dialog · Email confirmation modal · Close

### Cross-cutting requirements

- **Modal opens on button click** — Clicking the "Launch Modal" button SHALL open a centered confirmation modal dialog.
  - Scenario — Modal opens on button click: **GIVEN** the page is loaded; **WHEN** I click the "Launch Modal" button; **THEN** I see a dialog with the title "You've Got Mail!"; **AND** I see the text "We sent confirmation link to:"; **AND** I see the email address "johndoe@gmail.com"
- **Modal closes on user action** — The modal SHALL close when the user clicks the close button, the backdrop, presses Escape, or clicks "Go to inbox".
  - Scenario — Modal closes on close button click: **GIVEN** the modal is open; **WHEN** I click the close button; **THEN** the modal is not visible
  - Scenario — Modal closes on backdrop click: **GIVEN** the modal is open; **WHEN** I click the backdrop overlay; **THEN** the modal is not visible
  - Scenario — Modal closes on Escape key: **GIVEN** the modal is open; **WHEN** I press the Escape key; **THEN** the modal is not visible
  - Scenario — Modal closes on Go to inbox click: **GIVEN** the modal is open; **WHEN** I click the "Go to inbox" button; **THEN** the modal is not visible
- **Focus management** — The modal SHALL restore focus to the previously focused element when closed.
  - Scenario — Focus restored on close: **GIVEN** the modal is open and a trigger button was focused; **WHEN** the modal closes; **THEN** focus returns to the trigger button
- **Accessibility** — The modal SHALL have proper ARIA attributes.
  - Scenario — ARIA attributes: **GIVEN** the modal is open; **THEN** the dialog has aria-modal="true"; **AND** the dialog has an aria-label "Email confirmation modal"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/relay/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/relay/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; Reuses `packages/ui` where applicable; Uses `lucide-react` `X` icon for close button; Email icon rendered as inline SVG envelope; Skewed header bottom edge approximated with CSS clip-path; No ColorLib references in app source; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/relay` ships on https://relay.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/relay/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/relay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/relay/public/CNAME` = `relay.free.componentdock.com`
  and the package `homepage` = `https://relay.free.componentdock.com`.
