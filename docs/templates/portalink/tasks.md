# Portalink — Implementation Tasks

Source design: **Login Form 15** (`https://colorlib.com/wp/template/login-form-15/`) → recreation name **portalink**. Shipped at https://portalink.free.componentdock.com.

Scope: Portalink provides a centered white login card on a light gray background with a hero image spanning the top of the card. It features social login icons (Facebook, Twitter), username and password fields with a password visibility toggle, a green pill-shaped "Sign In" button, remember-me checkbox, forgot-password link, and sign-up CTA.

## Component breakdown

Render order as composed in `apps/portalink/src/App.tsx`:

### 1. HeroImage
- No dedicated spec block — hold this band to the design notes.
- Anchors: Decorative hero image

### 2. LoginForm
- The template SHALL render a login form with username and password inputs.
- Scenario — Username input accepts text:
  - **WHEN** the user types into the username field
  - **THEN** the field accepts and displays the typed text
- Scenario — Password input is masked by default:
  - **WHEN** the user types into the password field
  - **THEN** the input is masked (type="password")
- Scenario — Password visibility toggle:
  - **WHEN** the user clicks the show password button
  - **THEN** the password field type changes to "text"
  - **AND** the button aria-label changes to "Hide password"
- Scenario — Password visibility toggle reverts:
  - **WHEN** the password is visible and the user clicks the hide password button
  - **THEN** the password field type changes back to "password"
  - **AND** the button aria-label changes to "Show password"

### 3. Footer
- The template SHALL render a footer with a Component Dock link.
- Scenario — Footer link renders:
  - **WHEN** the page loads
  - **THEN** a "More templates at Component Dock" link is visible
  - **AND** it links to https://www.componentdock.com/
  - **AND** it opens in a new tab

### Cross-cutting requirements

- **Centered card layout** — The template SHALL render a centered white card on a light gray background with a hero image at the top.
  - Scenario — Card is centered on page: **WHEN** the page loads; **THEN** the login card is centered horizontally and vertically on the viewport
  - Scenario — Hero image renders at top of card: **WHEN** the page loads; **THEN** a decorative hero image is visible at the top of the card
- **Sign In button** — The template SHALL render a full-width rounded green "Sign In" button.
  - Scenario — Button renders with correct styling: **WHEN** the page loads; **THEN** the Sign In button is visible, full-width, and has a rounded pill shape
  - Scenario — Form submits without error: **WHEN** the user fills in username and password and clicks Sign In; **THEN** the form submits without JavaScript error
- **Remember me and forgot password** — The template SHALL render a "Remember Me" checkbox and a "Forgot Password" link.
  - Scenario — Remember Me checkbox is checked by default: **WHEN** the page loads; **THEN** the Remember Me checkbox is checked
  - Scenario — Remember Me checkbox toggles: **WHEN** the user clicks the Remember Me checkbox; **THEN** the checkbox state toggles
  - Scenario — Forgot Password link present: **WHEN** the page loads; **THEN** a "Forgot Password" link is visible and points to "#forgot"
- **Social login icons** — The template SHALL render Facebook and Twitter icon links in the form header area.
  - Scenario — Social icons render: **WHEN** the page loads; **THEN** a Facebook icon link with aria-label "Login with Facebook" is visible; **AND** a Twitter icon link with aria-label "Login with Twitter" is visible
  - Scenario — Social icons are circular: **WHEN** the page loads; **THEN** the social icon links have a rounded-full border-radius
- **Sign Up CTA** — The template SHALL render a "Not a member? Sign Up" call to action.
  - Scenario — Sign Up link renders: **WHEN** the page loads; **THEN** "Not a member?" text is visible with a "Sign Up" link pointing to "#signup"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/portalink/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/portalink/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/portalink` ships on https://portalink.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/portalink/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/portalink/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/portalink/public/CNAME` = `portalink.free.componentdock.com`
  and the package `homepage` = `https://portalink.free.componentdock.com`.
