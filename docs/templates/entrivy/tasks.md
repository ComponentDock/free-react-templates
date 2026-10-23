# Entrivy — Implementation Tasks

Source design: **Login Form 07** (`https://colorlib.com/wp/template/login-form-07/`) → recreation name **entrivy**. Shipped at https://entrivy.free.componentdock.com.

Scope: Recreate the ColorLib Login Form 07 template as a React 19 + Tailwind CSS 4 + TypeScript application. The template features a split-screen login form with a decorative illustration on the left and a styled login form with social login buttons on the right.

## Component breakdown

Render order as composed in `apps/entrivy/src/App.tsx`:

### 1. Illustration
- No dedicated spec block — hold this band to the design notes.
- Anchors: Decorative illustration

### 2. LoginForm
- The template SHALL display a login form with username, password, remember me checkbox, forgot password link, and a submit button.
- Scenario — Form fields:
  - **WHEN** the page loads
  - **THEN** a "Sign In" heading is visible
  - **AND** a username text input is present
  - **AND** a password input is present
  - **AND** a "Remember me" checkbox is present (unchecked by default)
  - **AND** a "Forgot Password" link is present with href="#forgot"
  - **AND** a "Log In" submit button is present
- Scenario — Floating labels:
  - **WHEN** the username field is empty
  - **THEN** the label "Username" is centered vertically in the field
  - **WHEN** the user types in the username field
  - **THEN** the label moves to the top of the field
- Scenario — Form interaction:
  - **WHEN** the user types a username and password and clicks "Log In"
  - **THEN** the form submits without error

### 3. Footer
- The template SHALL display a footer linking to Component Dock.
- Scenario — Footer link:
  - **WHEN** the page loads
  - **THEN** a "More templates at Component Dock" link is present
  - **AND** the link points to https://www.componentdock.com/
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Split-screen layout** — The template SHALL display a two-column layout on desktop (illustration left, form right) and a single-column stacked layout on mobile.
  - Scenario — Desktop layout: **WHEN** the viewport is desktop width (>= 1024px); **THEN** the illustration occupies the left half and the form occupies the right half
  - Scenario — Mobile layout: **WHEN** the viewport is mobile width (< 1024px); **THEN** the illustration is shown above the form in a stacked layout
- **Social login** — The template SHALL display three circular social login buttons for Facebook, Twitter, and Google.
  - Scenario — Social buttons rendered: **WHEN** the page loads; **THEN** a "Login with Facebook" link is present; **AND** a "Login with Twitter" link is present; **AND** a "Login with Google" link is present; **AND** each has the correct aria-label
  - Scenario — Divider text: **WHEN** the page loads; **THEN** the text "— or login with —" is visible between the form and social buttons
- **Design tokens** — The template SHALL use Roboto font and a purple (#6c63ff) accent color matching the original design.
  - Scenario — Font family: **WHEN** the page renders; **THEN** the body uses Roboto font family
  - Scenario — Brand color: **WHEN** the page renders; **THEN** the primary button uses #6c63ff background color
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/entrivy/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/entrivy/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/entrivy` ships on https://entrivy.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/entrivy/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/entrivy/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/entrivy/public/CNAME` = `entrivy.free.componentdock.com`
  and the package `homepage` = `https://entrivy.free.componentdock.com`.
