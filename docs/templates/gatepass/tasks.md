# Gatepass — Implementation Tasks

Source design: **Login Form 05** (`https://colorlib.com/wp/template/login-form-05/`) → recreation name **gatepass**. Shipped at https://gatepass.free.componentdock.com.

Scope: A modern, eye-catchy login form template featuring a dark gradient background, split-screen layout with decorative hero image, centered white card with email/password fields, social login buttons (Google, Facebook), remember me checkbox, forgot password link, and create account link.

## Component breakdown

Render order as composed in `apps/gatepass/src/App.tsx`:

### 1. HeroBackground
- No dedicated spec block — hold this band to the design notes.
- Anchors: Decorative hero image

### 2. LoginCard
- Users SHALL see Google and Facebook social login buttons.
- Scenario — Social buttons visible:
  - **GIVEN** the login form is loaded
  - **THEN** I should see a "Sign in with Google" button
  - **AND** I should see a "Sign in with Facebook" button

### 3. Footer
- The footer SHALL contain a link to https://www.componentdock.com/.
- Scenario — Footer link visible:
  - **GIVEN** the login form is loaded
  - **THEN** I should see a "More templates at Component Dock" link
  - **AND** the link should point to https://www.componentdock.com/

### Cross-cutting requirements

- **Renders welcome heading and subtitle** — Users SHALL see "Welcome Back" heading and "Sign in to continue to Gatepass" subtitle when the login form loads.
  - Scenario — Welcome heading visible: **GIVEN** the login form is loaded; **THEN** I should see "Welcome Back"; **AND** I should see "Sign in to continue to Gatepass"
- **Renders email and password fields** — Users SHALL see email and password input fields with labels.
  - Scenario — Form fields visible: **GIVEN** the login form is loaded; **THEN** I should see an email field labeled "Email"; **AND** I should see a password field labeled "Password"
- **Renders forgot password link** — Users SHALL see a "Forgot Password?" link.
  - Scenario — Forgot password visible: **GIVEN** the login form is loaded; **THEN** I should see a "Forgot Password?" link
- **Renders create account link** — Users SHALL see a "Create an account" link.
  - Scenario — Create account visible: **GIVEN** the login form is loaded; **THEN** I should see a "Create an account" link
- **Accepts email input** — Users SHALL be able to type an email address into the email field.
  - Scenario — Email input works: **GIVEN** the login form is loaded; **WHEN** I type "user@example.com" in the email field; **THEN** the email field should contain "user@example.com"
- **Accepts password input** — Users SHALL be able to type a password into the password field.
  - Scenario — Password input works: **GIVEN** the login form is loaded; **WHEN** I type "secret123" in the password field; **THEN** the password field should contain "secret123"
- **Form submits without error** — Users SHALL be able to submit the form without errors.
  - Scenario — Form submission: **GIVEN** the login form is loaded; **WHEN** I fill in valid credentials; **AND** I click the Log In button; **THEN** the form should submit without error
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/gatepass/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/gatepass/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/gatepass` ships on https://gatepass.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/gatepass/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gatepass/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gatepass/public/CNAME` = `gatepass.free.componentdock.com`
  and the package `homepage` = `https://gatepass.free.componentdock.com`.
