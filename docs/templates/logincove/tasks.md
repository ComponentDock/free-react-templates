# Logincove — Implementation Tasks

Source design: **Login Form 14** (`https://colorlib.com/wp/template/login-form-14/`) → recreation name **logincove**. Shipped at https://logincove.free.componentdock.com.

Scope: A split-screen sign-in form template with gold accent, Lato font, Facebook/Twitter social login, and "Not a member? Sign Up" CTA. Recreation of ColorLib Login Form 14 as Logincove.

## Component breakdown

Render order as composed in `apps/logincove/src/App.tsx`:

### 1. Illustration
- No dedicated spec block — hold this band to the design notes.
- Anchors: Decorative illustration

### 2. LoginForm
- The template SHALL render a split-screen layout with a decorative illustration on the left half (hidden on mobile) and a login form on the right half, wrapped in a white card with rounded corners and box shadow.
- Scenario — Desktop layout:
  - **WHEN** the user loads the page on a desktop viewport
  - **THEN** a decorative illustration is visible on the left half and the login form is visible on the right half
- Scenario — Mobile layout:
  - **WHEN** the user loads the page on a mobile viewport
  - **THEN** a decorative illustration is shown above the form and the layout is single-column

### 3. Footer
- The template SHALL include a footer with a link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link:
  - **WHEN** the user loads the page
  - **THEN** a "More templates at Component Dock" link is visible

### Cross-cutting requirements

- **Sign In heading** — The template SHALL display a "Sign In" heading above the form fields.
  - Scenario — Heading is visible: **WHEN** the user loads the page; **THEN** a "Sign In" heading is visible
- **Username and password fields** — The template SHALL render a username text input and a password input, each with an uppercase label and placeholder text.
  - Scenario — Username input: **WHEN** the user loads the page; **THEN** a username input is visible with label "Username" and placeholder "Username"
  - Scenario — Password input: **WHEN** the user loads the page; **THEN** a password input is visible with label "Password" and placeholder "Password"
  - Scenario — Username accepts input: **WHEN** the user types "testuser" in the username field; **THEN** the username field contains "testuser"
  - Scenario — Password accepts input: **WHEN** the user types "secret" in the password field; **THEN** the password field contains "secret"
- **Sign In button** — The template SHALL render a full-width "Sign In" submit button with gold/amber background.
  - Scenario — Button is visible: **WHEN** the user loads the page; **THEN** a "Sign In" button is visible
  - Scenario — Form submits without error: **WHEN** the user fills in username and password and clicks Sign In; **THEN** no error occurs
- **Remember Me and Forgot Password** — The template SHALL render a "Remember Me" checkbox (checked by default) on the left and a "Forgot Password" link on the right.
  - Scenario — Remember Me checkbox: **WHEN** the user loads the page; **THEN** a "Remember Me" checkbox is visible and checked by default
  - Scenario — Checkbox toggles: **WHEN** the user clicks the Remember Me checkbox; **THEN** the checkbox state toggles
  - Scenario — Forgot Password link: **WHEN** the user loads the page; **THEN** a "Forgot Password" link is visible
- **Social login buttons** — The template SHALL render Facebook and Twitter circular social login icons on the right side above the Sign Up CTA.
  - Scenario — Social buttons visible: **WHEN** the user loads the page; **THEN** Facebook and Twitter social login icons are visible
- **Sign Up CTA** — The template SHALL render "Not a member? Sign Up" text at the bottom of the form area.
  - Scenario — Sign Up link: **WHEN** the user loads the page; **THEN** "Not a member?" text and a "Sign Up" link are visible
- **No ColorLib references** — The template SHALL NOT contain any references to ColorLib in app source files, comments, or CSS.
  - Scenario — Clean source: **WHEN** the app source code is inspected; **THEN** no "colorlib" or "colorlib.com" strings appear in any file under apps/logincove/

## Verification

- [x] `apps/logincove` ships on https://logincove.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/logincove/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/logincove/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logincove/public/CNAME` = `logincove.free.componentdock.com`
  and the package `homepage` = `https://logincove.free.componentdock.com`.
