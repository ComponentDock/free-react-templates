# Overlay — Implementation Tasks

Source design: **Modal 01** (`https://colorlib.com/wp/template/modal-01/`) → recreation name **overlay**. Shipped at https://overlay.free.componentdock.com.

Scope: Overlay is a sign-in popup template recreating ColorLib Modal 01. It provides a centered modal dialog with a login form (username, password, remember me, forgot password) triggered by a landing page button. The design uses Poppins font, Bootstrap-inspired blue primary color, and clean white card styling.

## Component breakdown

Render order as composed in `apps/overlay/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Overlay · Home

### 2. Landing
- The template SHALL display a centered landing section with the site name "Overlay" as a heading, a subtitle, and a "Sign In" button that opens the modal dialog.
- Scenario — Landing renders correctly:
  - **WHEN** the app loads
  - **THEN** the landing section shows the "Overlay" heading, a subtitle, and a "Sign In" button
- Scenario — Clicking Sign In opens the modal:
  - **WHEN** the user clicks the "Sign In" button
  - **THEN** a modal dialog appears with `aria-modal="true"` and focus trapped inside

### 3. Footer
- The template footer SHALL display the site name, a tagline, and a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer shows Component Dock link:
  - **WHEN** the footer renders
  - **THEN** a link labeled "More templates at Component Dock" points to https://www.componentdock.com/

### 4. SignInModal
- The modal SHALL contain a person icon, "Sign In" heading, username input, password input, "Login" submit button, "Remember Me" checkbox, "Forgot Password" link, and a footer with "Not a member? Create an account".
- Scenario — Modal displays all form elements:
  - **WHEN** the modal is open
  - **THEN** username input, password input, Login button, Remember Me checkbox, Forgot Password link, and Create an account link are all visible
- Scenario — Form submission is prevented:
  - **WHEN** the user fills in credentials and clicks Login
  - **THEN** the form submission is prevented (no page reload)

### Cross-cutting requirements

- **Modal dismissal** — The modal SHALL be closable via the close button (X icon), pressing Escape, or clicking the backdrop overlay outside the modal content.
  - Scenario — Close button dismisses modal: **WHEN** the user clicks the X close button; **THEN** the modal closes
  - Scenario — Escape key dismisses modal: **WHEN** the user presses Escape; **THEN** the modal closes
  - Scenario — Backdrop click dismisses modal: **WHEN** the user clicks the dark backdrop outside the modal card; **THEN** the modal closes
  - Scenario — Clicking inside modal does not close it: **WHEN** the user clicks inside the modal content (e.g. on an input); **THEN** the modal remains open
- **Dark mode toggle** — The navbar SHALL include a dark mode toggle that adds/removes the `dark` class on the document root.
  - Scenario — Toggle switches dark mode: **WHEN** the user clicks the dark mode toggle; **THEN** the `dark` class is added to `<html>` and the button label changes to "Light mode"
  - Scenario — Toggle reverts dark mode: **WHEN** the user clicks the toggle again; **THEN** the `dark` class is removed and the button label changes back to "Dark mode"
  - Scenario — Cleanup on unmount: **WHEN** the navbar unmounts; **THEN** the `dark` class is removed from the document root
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/overlay/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/overlay/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/overlay` ships on https://overlay.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/overlay/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/overlay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/overlay/public/CNAME` = `overlay.free.componentdock.com`
  and the package `homepage` = `https://overlay.free.componentdock.com`.
