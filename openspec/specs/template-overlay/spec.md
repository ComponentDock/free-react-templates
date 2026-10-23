# Template: Overlay (Bootstrap Modals)

## Purpose

Overlay is a sign-in popup template recreating ColorLib Modal 01. It provides a centered modal dialog with a login form (username, password, remember me, forgot password) triggered by a landing page button. The design uses Poppins font, Bootstrap-inspired blue primary color, and clean white card styling.

## Design reference (replication findings)

- **Source:** ColorLib "Modal V01" — https://colorlib.com/wp/template/modal-01/
- **Source slug:** `modal-01`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/bootstrap/modal-01/ — **HTTP 200**, 4,298 B, fetched 2026-10-23 (page `<title>`: "Modal 01"). The slug-only path `https://preview.colorlib.com/theme/modal-01/` answers **404**; the live demo is the catalog alias above, recorded so the next prep does not repeat the probe.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/bootstrap/modal-01/css/style.css?v=58a74b87`, fetched 2026-10-23): brand `#fb8691`, `#007bff`, `#0062cc`, `#0056b3`; dominant neutrals `#6c757d`, `#212529`, `#495057`; type Poppins, Segoe UI. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/modal-01.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/overlay` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Landing page with modal trigger

The template SHALL display a centered landing section with the site name "Overlay" as a heading, a subtitle, and a "Sign In" button that opens the modal dialog.

#### Scenario: Landing renders correctly

- **WHEN** the app loads
- **THEN** the landing section shows the "Overlay" heading, a subtitle, and a "Sign In" button

#### Scenario: Clicking Sign In opens the modal

- **WHEN** the user clicks the "Sign In" button
- **THEN** a modal dialog appears with `aria-modal="true"` and focus trapped inside

### Requirement: Sign-in modal with form

The modal SHALL contain a person icon, "Sign In" heading, username input, password input, "Login" submit button, "Remember Me" checkbox, "Forgot Password" link, and a footer with "Not a member? Create an account".

#### Scenario: Modal displays all form elements

- **WHEN** the modal is open
- **THEN** username input, password input, Login button, Remember Me checkbox, Forgot Password link, and Create an account link are all visible

#### Scenario: Form submission is prevented

- **WHEN** the user fills in credentials and clicks Login
- **THEN** the form submission is prevented (no page reload)

### Requirement: Modal dismissal

The modal SHALL be closable via the close button (X icon), pressing Escape, or clicking the backdrop overlay outside the modal content.

#### Scenario: Close button dismisses modal

- **WHEN** the user clicks the X close button
- **THEN** the modal closes

#### Scenario: Escape key dismisses modal

- **WHEN** the user presses Escape
- **THEN** the modal closes

#### Scenario: Backdrop click dismisses modal

- **WHEN** the user clicks the dark backdrop outside the modal card
- **THEN** the modal closes

#### Scenario: Clicking inside modal does not close it

- **WHEN** the user clicks inside the modal content (e.g. on an input)
- **THEN** the modal remains open

### Requirement: Footer with Component Dock link

The template footer SHALL display the site name, a tagline, and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a link labeled "More templates at Component Dock" points to https://www.componentdock.com/

### Requirement: Dark mode toggle

The navbar SHALL include a dark mode toggle that adds/removes the `dark` class on the document root.

#### Scenario: Toggle switches dark mode

- **WHEN** the user clicks the dark mode toggle
- **THEN** the `dark` class is added to `<html>` and the button label changes to "Light mode"

#### Scenario: Toggle reverts dark mode

- **WHEN** the user clicks the toggle again
- **THEN** the `dark` class is removed and the button label changes back to "Dark mode"

#### Scenario: Cleanup on unmount

- **WHEN** the navbar unmounts
- **THEN** the `dark` class is removed from the document root

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/overlay/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/overlay/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Landing page with modal trigger — the landing section shows the "Overlay" heading, a subtitle, and a "Sign In" button
- [ ] Sign-in modal with form — username input, password input, Login button, Remember Me checkbox, Forgot Password link, and Create an account link are all visible
- [ ] Modal dismissal — the modal closes
- [x] Dark mode toggle — the `dark` class is added to `<html>` and the button label changes to "Light mode"
