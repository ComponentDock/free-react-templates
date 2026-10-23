# Logdrop — Implementation Tasks

Source design: **Login Form 11** (`https://colorlib.com/wp/template/login-form-11/`) → recreation name **logdrop**. Shipped at https://logdrop.free.componentdock.com.

Scope: Recreation of ColorLib "Login Form 11" (`login-form-11`). Preview: https://preview.colorlib.com/theme/login-form-11/ (404 as of 2026-09-23 — design tokens extracted from screenshot).

## Component breakdown

Render order as composed in `apps/logdrop/src/App.tsx`:

### 1. UserIcon
- The card SHALL display a blue circular user icon at the top, followed by a "Sign In" heading.
- Scenario — User icon:
  - **WHEN** the user loads the LogDrop page
  - **THEN** a blue circle (#4a90d9) with a white user silhouette icon is displayed at the top of the card
  - **AND** the icon is centered horizontally
- Scenario — Sign In heading:
  - **WHEN** the user loads the LogDrop page
  - **THEN** a "Sign In" heading appears below the user icon
  - **AND** the heading is in dark text (#333333), centered

### 2. LoginForm
- The form SHALL include a full-width "Login" button with blue background, white text, and slightly rounded corners.
- Scenario — Primary login button:
  - **WHEN** the user loads the LogDrop page
  - **THEN** a "Login" button is visible
  - **AND** the button background is blue (#4a90d9)
  - **AND** the button text is white
  - **AND** the button is full-width within the card
  - **AND** the button has slightly rounded corners (~4px radius)

### 3. Footer
- The template SHALL include a footer linking to Component Dock.
- Scenario — Component Dock link:
  - **WHEN** the user loads the LogDrop page
  - **THEN** a footer is visible
  - **AND** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text reads "More templates at Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Centered card layout** — The page SHALL display a single centered white card on a light gray background. The card SHALL contain the login form.
  - Scenario — Card centered on page: **WHEN** the user loads the LogDrop page; **THEN** a white card is centered horizontally and vertically on the page; **AND** the page background is light gray (#f0f2f5); **AND** the card has a subtle shadow
  - Scenario — Page title: **WHEN** the user loads the LogDrop page; **THEN** a page title "LogDrop" is visible above the card; **AND** the title is in dark text
- **Form fields** — The form SHALL include Username and Password input fields with full-border rounded styling and placeholder text.
  - Scenario — Username field: **WHEN** the user loads the LogDrop page; **THEN** a "Username" input field is visible; **AND** the input has a full border with rounded corners; **AND** the placeholder text reads "Username" in light gray
  - Scenario — Password field: **WHEN** the user loads the LogDrop page; **THEN** a "Password" input field is visible; **AND** the input has a full border with rounded corners; **AND** the placeholder text reads "Password" in light gray; **AND** the input type is password (masked characters)
- **Remember me and forgot password** — The form SHALL include a "Remember Me" checkbox with blue accent and a "Forgot Password" link on the same row.
  - Scenario — Remember Me checkbox: **WHEN** the user loads the LogDrop page; **THEN** a "Remember Me" checkbox is visible; **AND** the checkbox accent color is blue (#4a90d9); **AND** the checkbox is checked by default
  - Scenario — Forgot Password link: **WHEN** the user loads the LogDrop page; **THEN** a "Forgot Password" link is visible; **AND** the link is blue (#4a90d9); **AND** the link is right-aligned on the same row as the checkbox
- **Responsive behavior** — The card SHALL remain centered and functional on mobile viewports.
  - Scenario — Mobile layout: **WHEN** the user resizes the viewport to mobile width (< 768px — `.cl-d-md-flex` applies from `@media (min-width: 768px)`); **THEN** the card remains centered; **AND** the card width adjusts to fit the viewport with padding; **AND** the form remains fully functional
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/logdrop/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/logdrop/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Centered white card on light gray background; [ ] Blue circular user icon at top of card; [ ] "Sign In" heading in dark text, centered; [ ] Username and Password inputs with full-border rounded styling; [ ] "Remember Me" checkbox with blue accent, checked by default; [ ] "Forgot Password" link in blue, right-aligned; [ ] Full-width blue (#4a90d9) "Login" button with slightly rounded corners; [ ] Responsive card sizing on mobile viewports; [ ] Footer links to https://www.componentdock.com/ ("Component Dock"); [ ] No ColorLib references in app code; [ ] Tests at 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/logdrop` ships on https://logdrop.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/logdrop/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/logdrop/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/logdrop/public/CNAME` = `logdrop.free.componentdock.com`
  and the package `homepage` = `https://logdrop.free.componentdock.com`.
