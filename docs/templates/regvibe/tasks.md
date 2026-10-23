# Regvibe — Implementation Tasks

Source design: **Colorlib Regform 33** (`https://colorlib.com/wp/template/colorlib-regform-33/`) → recreation name **regvibe**. Shipped at https://regvibe.free.componentdock.com.

Scope: RegVibe is a free registration form template that recreates the ColorLib "Reg Form V33" design.

## Component breakdown

Render order as composed in `apps/regvibe/src/App.tsx`:

### 1. RegistrationForm
- The card's right panel SHALL display a registration form with username, email, password, and confirm password fields, a register button, and a sign-in link.
- Scenario — All form fields are present:
  - **WHEN** the page loads
  - **THEN** a "Username" input field is visible
  - **AND** an "E-mail" input field is visible
  - **AND** a "Password" input field is visible
  - **AND** a "Confirm Password" input field is visible
- Scenario — Register button is visible:
  - **WHEN** the page loads
  - **THEN** a "Register" button is visible
- Scenario — Sign-in link is present:
  - **WHEN** the page loads
  - **THEN** a "Sign in" link is visible pointing to #signin

### 2. Footer
- The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer shows Component Dock attribution:
  - **WHEN** the page loads
  - **THEN** a "Made with Component Dock" line is visible in the footer
  - **AND** the Component Dock link opens in a new tab

### Cross-cutting requirements

- **Gradient background and centered card** — The page SHALL display a full-page yellow-to-pink gradient background with a centered card (max-width 910px) using flexbox layout.
  - Scenario — Page loads with gradient and card: **WHEN** the page loads; **THEN** a gradient background from yellow (#fee140) to pink (#fa709a) is visible; **AND** a centered card container is displayed
- **Left panel with hero image and overlay text** — The card's left panel SHALL display a hero image with "Sign Up" heading and "Privacy policy & Terms of service" text overlay.
  - Scenario — Left panel renders image and text: **WHEN** the page loads; **THEN** a hero image is displayed on the left panel; **AND** "Sign Up" heading is visible over the image; **AND** "Privacy policy & Terms of service" text is visible below the heading
- **Form field validation** — The email, password, and confirm password fields SHALL be required. The email field SHALL have browser-native email validation.
  - Scenario — Email field has validation attributes: **WHEN** the page loads; **THEN** the email field is required; **AND** the email field has a pattern attribute for validation
  - Scenario — Password fields are required: **WHEN** the page loads; **THEN** the password field is required; **AND** the confirm password field is required
- **Design tokens match original** — The template SHALL use design tokens extracted from the original ColorLib CSS: Open Sans font, gradient colors, form label styling, input border styling, green register button, and pink accent link color.
  - Scenario — Open Sans font is loaded: **WHEN** the page loads; **THEN** the Open Sans font family is applied to the form
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/regvibe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/regvibe/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/regvibe` ships on https://regvibe.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/regvibe/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/regvibe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/regvibe/public/CNAME` = `regvibe.free.componentdock.com`
  and the package `homepage` = `https://regvibe.free.componentdock.com`.
