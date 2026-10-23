# Signwell — Implementation Tasks

Source design: **Login Form 10** (`https://colorlib.com/wp/template/login-form-10/`) → recreation name **signwell**. Shipped at https://signwell.free.componentdock.com.

Scope: Recreation of ColorLib "Login Form 10" (https://colorlib.com/wp/template/login-form-10/). A clean, modern login page with social login buttons on the left and a traditional username/password form on the right, separated by a divider. Preview was unreachable (404); design based on screenshot.

## Component breakdown

Render order as composed in `apps/signwell/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: SignWell · Home

### 2. SocialLogin
- The page SHALL display three social login buttons (Facebook, Twitter, Google) with appropriate brand colors.
- Scenario — Three social buttons:
  - **WHEN** the social login section renders
  - **THEN** buttons for Facebook, Twitter, and Google are present
- Scenario — Social button label:
  - **WHEN** the social login section renders
  - **THEN** the text "or sign in with" is displayed above the buttons

### 3. Divider
- The page SHALL display a divider between the social and form sections.
- Scenario — Divider text:
  - **WHEN** the page renders
  - **THEN** a separator with text "or" is visible between the two sections

### 4. LoginForm
- The login form SHALL include username and password inputs, a remember-me checkbox, a forgot-password link, and a log-in button.
- Scenario — Username input exists:
  - **WHEN** the login form is visible
  - **THEN** a text input with placeholder "Username" is present
- Scenario — Password input exists:
  - **WHEN** the login form is visible
  - **THEN** a password input with placeholder "Password" is present
- Scenario — Remember me checkbox:
  - **WHEN** the login form is visible
  - **THEN** a "Remember me" checkbox is present and unchecked by default
- Scenario — Forgot Password link:
  - **WHEN** the login form is visible
  - **THEN** a link with text "Forgot Password" is present
- Scenario — Log In button:
  - **WHEN** the login form is visible
  - **THEN** a button with text "Log In" is present
- Scenario — Form submission prevented:
  - **GIVEN** the user fills in username and password
  - **WHEN** the user clicks "Log In"
  - **THEN** the page does not reload (default prevented)

### 5. Footer
- The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
- Scenario — Footer Component Dock link:
  - **WHEN** the footer renders
  - **THEN** a link to "https://www.componentdock.com/" with text containing "Component Dock" is present

### Cross-cutting requirements

- **App composition and title** — The app SHALL compose a login page with social login section, divider, and login form card, and set the document title.
  - Scenario — Page renders with all sections: **WHEN** the app loads; **THEN** the page displays a social login section, a divider, and a login form card; **AND** `document.title` is "SignWell — Login Form Template"
  - Scenario — Header and footer present: **WHEN** the app loads; **THEN** a banner (header) and contentinfo (footer) are present
- **Responsive layout** — The layout SHALL stack vertically on narrow viewports.
  - Scenario — Mobile layout: **GIVEN** the viewport width is less than 768px; **WHEN** the page renders; **THEN** the social buttons and login form are stacked vertically
- **Dark mode** — The app SHALL support dark mode via a toggle.
  - Scenario — Dark mode toggle: **WHEN** the user clicks the dark mode toggle; **THEN** the html element gains the "dark" class
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/signwell/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/signwell/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/signwell` ships on https://signwell.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/signwell/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/signwell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/signwell/public/CNAME` = `signwell.free.componentdock.com`
  and the package `homepage` = `https://signwell.free.componentdock.com`.
