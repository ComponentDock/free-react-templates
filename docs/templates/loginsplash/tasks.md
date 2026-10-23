# Loginsplash — Implementation Tasks

Source design: **Login Form V11** (`https://colorlib.com/wp/template/login-form-v11/`) → recreation name **loginsplash**. Shipped at https://loginsplash.free.componentdock.com.

Scope: A centered login form on a vibrant blue-to-pink gradient background, with Poppins/Raleway fonts. It also includes email/password inputs with left-aligned icons, remember-me checkbox, pink login button, Facebook/Google social buttons, and "Not a member? Sign up now" CTA. Recreation of ColorLib Login Form V11 as Loginsplash.

## Component breakdown

Render order as composed in `apps/loginsplash/src/App.tsx`:

### 1. LoginForm
- The template SHALL display an uppercase "Login" heading in Raleway-Black font inside the card.
- Scenario — Heading is visible:
  - **WHEN** the user loads the page
  - **THEN** a "Login" heading is visible in uppercase

### 2. Footer
- The template SHALL render a footer linking to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer link:
  - **WHEN** the user loads the page
  - **THEN** a "More templates at Component Dock" link is visible pointing to https://www.componentdock.com/

### Cross-cutting requirements

- **Centered gradient background** — The template SHALL render a full-viewport page with a vertical linear gradient from blue (#0250c5) to pink (#d43f8d), centering a white card.
  - Scenario — Gradient background visible: **WHEN** the user loads the page; **THEN** a blue-to-pink gradient covers the full viewport
  - Scenario — Card is centered: **WHEN** the user loads the page; **THEN** a white card is centered horizontally and vertically
- **Email input with icon** — The template SHALL render an email input with a mail icon on the left, gray background, and placeholder text "Email".
  - Scenario — Email input renders: **WHEN** the user loads the page; **THEN** an email input is visible with placeholder "Email"
  - Scenario — Email accepts input: **WHEN** the user types an email address; **THEN** the input displays the typed text
- **Password input with icon** — The template SHALL render a password input with a lock icon on the left, gray background, and placeholder text "Password".
  - Scenario — Password input renders: **WHEN** the user loads the page; **THEN** a password input is visible with placeholder "Password"
  - Scenario — Password accepts input: **WHEN** the user types a password; **THEN** the input displays masked characters
- **Remember me checkbox** — The template SHALL render a "Remember me" checkbox, unchecked by default.
  - Scenario — Checkbox unchecked by default: **WHEN** the user loads the page; **THEN** the "Remember me" checkbox is unchecked
  - Scenario — Checkbox toggles: **WHEN** the user clicks the checkbox; **THEN** it becomes checked
- **Login button** — The template SHALL render a full-width uppercase "Login" button with pink (#d33f8d) background.
  - Scenario — Button renders: **WHEN** the user loads the page; **THEN** a "Login" button is visible with pink background
  - Scenario — Button hover: **WHEN** the user hovers the Login button; **THEN** the background changes to dark (#333333)
- **Social login buttons** — The template SHALL render Facebook and Google social login buttons side by side, each with an icon and label.
  - Scenario — Facebook button: **WHEN** the user loads the page; **THEN** a "Login with Facebook" link is visible with blue (#3b5998) text
  - Scenario — Google button: **WHEN** the user loads the page; **THEN** a "Login with Google" link is visible with gray (#555555) text
- **Sign up CTA** — The template SHALL display "Not a member? Sign up now" with a link to #signup.
  - Scenario — CTA visible: **WHEN** the user loads the page; **THEN** "Not a member?" text and a "Sign up now" link are visible
- **Form submission** — The template SHALL handle form submission without page reload.
  - Scenario — Submit: **WHEN** the user fills in email and password and clicks Login; **THEN** the form submits without navigation or error
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/loginsplash/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/loginsplash/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/loginsplash` ships on https://loginsplash.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/loginsplash/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loginsplash/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginsplash/public/CNAME` = `loginsplash.free.componentdock.com`
  and the package `homepage` = `https://loginsplash.free.componentdock.com`.
