# Gatepost — Implementation Tasks

Source design: **Login Form V16** (`https://colorlib.com/wp/template/login-form-v16/`) → recreation name **gatepost**. Shipped at https://gatepost.free.componentdock.com.

Scope: A Login Form template with full-viewport background, centered login, username input with icon, password input with icon and sign in button sections. Recreation of ColorLib "Login Form V16" (slug: `login-form-v16`).

## Component breakdown

Render order as composed in `apps/gatepost/src/App.tsx`:

### 1. LoginForm
- The login form SHALL be displayed in a centered, semi-transparent card with backdrop blur.
- Scenario — Login card is centered:
  - **WHEN** the page loads
  - **THEN** a centered login card is displayed
  - **AND** the card has a semi-transparent white background
  - **AND** the card has rounded corners and shadow

### 2. Footer
- The page SHALL include a footer linking to Component Dock.
- Scenario — Footer link renders:
  - **WHEN** the page loads
  - **THEN** a "Made with Component Dock" link is visible in the footer
  - **AND** the link points to https://www.componentdock.com/

### Cross-cutting requirements

- **Full-viewport background with dark overlay** — The login page SHALL display a full-viewport background image with a dark semi-transparent overlay.
  - Scenario — Background renders correctly: **WHEN** the user visits the Gatepost login page; **THEN** a full-viewport background image is visible; **AND** a dark overlay covers the background
- **Login form heading and subtitle** — The login card SHALL display a heading and subtitle above the form fields.
  - Scenario — Heading and subtitle render: **WHEN** the login card is displayed; **THEN** a heading "Welcome Back" is visible; **AND** a subtitle "Please enter your credentials" is visible
- **Username input with icon** — The login form SHALL include a username input field with a user icon.
  - Scenario — Username input renders correctly: **WHEN** the login form is displayed; **THEN** a username input with placeholder "Username" is visible; **AND** a User icon is displayed to the left of the input
- **Password input with icon** — The login form SHALL include a password input field with a lock icon.
  - Scenario — Password input renders correctly: **WHEN** the login form is displayed; **THEN** a password input with placeholder "Password" is visible; **AND** a Lock icon is displayed to the left of the input
- **Sign In button** — The login form SHALL include a full-width Sign In button with the primary brand color.
  - Scenario — Sign In button renders: **WHEN** the login form is displayed; **THEN** a "Sign In" button is visible; **AND** the button has a primary color background (#e65c4a); **AND** the button spans the full width of the card
- **Form submission** — The login form SHALL handle form submission when both username and password are provided.
  - Scenario — Successful login: **WHEN** the user enters a username and password; **AND** clicks "Sign In"; **THEN** the form submission is handled; **AND** a success message is displayed
  - Scenario — Empty fields prevent submission: **WHEN** the user clicks "Sign In" without entering credentials; **THEN** the form is not submitted; **AND** no success message is displayed
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/gatepost/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/gatepost/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/gatepost` ships on https://gatepost.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/gatepost/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gatepost/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gatepost/public/CNAME` = `gatepost.free.componentdock.com`
  and the package `homepage` = `https://gatepost.free.componentdock.com`.
