# Loginpad — Implementation Tasks

Source design: **Login Form V14** (`https://colorlib.com/wp/template/login-form-v14/`) → recreation name **loginpad**. Shipped at https://loginpad.free.componentdock.com.

Scope: A centered card login form template with account login fields and a pill-shaped sign-in button. Recreation of ColorLib **Login Form V14** as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/loginpad/src/App.tsx`:

### 1. LoginForm
- The login form SHALL display an "Account Login" heading, username input, password input with visibility toggle, remember-me checkbox, forgot password link, and login button.
- Scenario — Heading is visible:
  - **WHEN** the page loads
  - **THEN** the heading "Account Login" is displayed
- Scenario — Username input accepts text:
  - **WHEN** the user types in the username field
  - **THEN** the input value updates to reflect the typed text
- Scenario — Password input defaults to hidden:
  - **WHEN** the page loads
  - **THEN** the password input has type "password"
- Scenario — Password visibility toggle:
  - **WHEN** the user clicks the show password button
  - **THEN** the password input type changes to "text"
  - **AND** the button label changes to "Hide password"
- Scenario — Remember me checkbox toggles:
  - **WHEN** the user clicks the remember me checkbox
  - **THEN** the checkbox state toggles
- Scenario — Form submission:
  - **WHEN** the user fills in username and password and clicks Login
  - **THEN** the form submits without error

### 2. Footer
- The footer SHALL link to https://www.componentdock.com/ with the text "More templates at Component Dock" and open in a new tab.
- Scenario — Footer link is present:
  - **WHEN** the page loads
  - **THEN** the footer contains a link to Component Dock
- Scenario — Footer link opens in new tab:
  - **WHEN** the user clicks the footer link
  - **THEN** it opens in a new tab (target="_blank")

### Cross-cutting requirements

- **Pill-shaped login button** — The login button SHALL be full-width with pill shape (border-radius 27px), dark background (#333333), and green hover (#57b846).
  - Scenario — Button styling: **WHEN** the login button renders; **THEN** it has full-width, pill-shaped, and dark background styling
- **Centered card layout** — The form SHALL be rendered inside a centered white card on a light gray background, with responsive padding.
  - Scenario — Card is centered: **WHEN** the page loads; **THEN** the form card is centered on the viewport
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/loginpad/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/loginpad/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/loginpad` ships on https://loginpad.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/loginpad/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loginpad/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginpad/public/CNAME` = `loginpad.free.componentdock.com`
  and the package `homepage` = `https://loginpad.free.componentdock.com`.
