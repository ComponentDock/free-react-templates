# Logintune — Implementation Tasks

Source design: **Wordpress Login Customizer** (`https://colorlib.com/wp/template/wordpress-login-customizer/`) → recreation name **logintune**. Shipped at https://logintune.free.componentdock.com.

Scope: A Login Form template with full-viewport green, username input field, password input field and green login button sections. Recreation of ColorLib **WordPress Login Customizer** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/logintune/src/App.tsx`:

### 1. LoginForm
- The login form SHALL be contained in a white card centered on the page.
- Scenario — Card renders:
  - **WHEN** the page loads
  - **THEN** a white (#ffffff) card is visible, centered horizontally and vertically
  - **AND** the card has a subtle box-shadow (0 2px 10px rgba(0,0,0,0.1))
  - **AND** the card has border-radius of approximately 4px
  - **AND** the card width is approximately 350–400px
- Scenario — Card responsive layout:
  - **WHEN** the viewport is 375px wide
  - **THEN** the card shrinks to fit within the viewport with horizontal padding

### 2. Footer
- The template footer SHALL link to Component Dock.
- Scenario — Footer renders:
  - **WHEN** the page loads
  - **THEN** a minimal footer is visible at the bottom of the page
  - **AND** the footer contains a link to "https://www.componentdock.com/" labeled "Component Dock"

### Cross-cutting requirements

- **Full-viewport green background** — The page SHALL render a solid green (#6ab04c) background covering the full viewport.
  - Scenario — Page background renders: **WHEN** the user navigates to LoginTune; **THEN** the page background is solid green (#6ab04c); **AND** the background covers the full viewport height (min-height 100vh)
- **Username input field** — The form SHALL include a username input field with light gray background.
  - Scenario — Username input renders: **WHEN** the page loads; **THEN** a text input with placeholder "username" is visible; **AND** the input has a light gray (#f0f0f0) background; **AND** the input has rounded corners (border-radius ~4px); **AND** the input is full-width within the card; **AND** the input text is dark gray (#333333)
- **Password input field** — The form SHALL include a password input field that masks typed characters.
  - Scenario — Password input renders: **WHEN** the page loads; **THEN** a password input with placeholder "password" is visible below the username input; **AND** the input has a light gray (#f0f0f0) background; **AND** typed characters are masked; **AND** the input has the same styling as the username input
- **Green login button** — The form SHALL include a full-width green login button.
  - Scenario — Button renders: **WHEN** the page loads; **THEN** a button labeled "LOGIN" is visible below the password input; **AND** the button has a green (#6ab04c) background; **AND** the button text is white, uppercase, and centered; **AND** the button is full-width within the card; **AND** the button has rounded corners matching the input fields
  - Scenario — Button hover effect: **WHEN** the user hovers over the LOGIN button; **THEN** the button background darkens slightly (e.g. #5a9e40)
- **Registration link** — The form SHALL display a "Not registered? Create an account" link below the button.
  - Scenario — Registration link renders: **WHEN** the page loads; **THEN** the text "Not registered?" is visible in muted gray (#999999); **AND** the text "Create an account" appears as a link in green (#6ab04c); **AND** the text is centered below the login button; **AND** clicking the link navigates to a registration page (or does nothing if single-page)
- **No header, no footer, no logo** — The template SHALL be a minimal login form with no header, footer, or logo elements.
  - Scenario — Minimal layout: **WHEN** the page loads; **THEN** there is no visible header bar, navigation, or logo; **AND** there is no visible footer or copyright text; **AND** the page contains only the centered card with form fields and link
- **Accessibility** — The form SHALL be accessible with proper labels and keyboard navigation.
  - Scenario — Keyboard navigation: **WHEN** the user presses Tab to navigate; **THEN** focus moves from username input to password input to login button; **AND** focus is visible on each interactive element
  - Scenario — Screen reader support: **WHEN** a screen reader parses the page; **THEN** the username input has an accessible label ("Username"); **AND** the password input has an accessible label ("Password"); **AND** the login button has an accessible name ("Login")
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/logintune/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/logintune/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/logintune` ships on https://logintune.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/logintune/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/logintune/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logintune/public/CNAME` = `logintune.free.componentdock.com`
  and the package `homepage` = `https://logintune.free.componentdock.com`.
