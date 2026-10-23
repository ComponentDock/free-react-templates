# Loginnova — Implementation Tasks

Source design: **Login Form V20** (`https://colorlib.com/wp/template/login-form-v20/`) → recreation name **loginnova**. Shipped at https://loginnova.free.componentdock.com.

Scope: A side-by-side login form template with gradient panel, account sign-in card, input validation and forgot-password link. Recreation of ColorLib **Login Form V20** as a React 19 + Vite + Tailwind 4 + TypeScript template.

## Component breakdown

Render order as composed in `apps/loginnova/src/App.tsx`:

### 1. LoginForm
- The form SHALL display a white uppercase heading above the input fields.
- Scenario — Heading is visible:
  - **WHEN** the login form renders
  - **THEN** "ACCOUNT LOGIN" text is displayed centered above the inputs
  - **AND** the heading is white (#fefefe), OpenSans Regular 30px, uppercase

### 2. Footer
- The form SHALL display a centered "Forgot password?" link below the button.
- Scenario — Link is visible:
  - **WHEN** the login form renders
  - **THEN** "Forgot password?" text is displayed centered below the button
  - **AND** the link color is light gray (#cccccc)
- Scenario — Link hover turns white:
  - **WHEN** the user hovers over the "Forgot password?" link
  - **THEN** the text color changes to white (#ffffff)

### Cross-cutting requirements

- **Renders gradient background with centered form** — The login page SHALL display a full-viewport purple-to-blue gradient background with a centered login form.
  - Scenario — Gradient background is visible: **WHEN** the page loads; **THEN** the full viewport has a linear gradient from purple (#6a11cb) on the left to blue (#2575fc) on the right
  - Scenario — Form is centered: **WHEN** the page loads; **THEN** the form container (560px wide) is centered both vertically and horizontally
- **Renders side-by-side username and password inputs** — The form SHALL include username and password inputs displayed side by side with floating labels.
  - Scenario — Inputs are side by side on desktop: **WHEN** the viewport is wider than 576px; **THEN** username and password fields are displayed side by side, each taking 50% width; **AND** username has border-top-left-radius 12px; **AND** password has border-top-right-radius 12px
  - Scenario — Labels float on focus: **WHEN** the user focuses an input field; **THEN** the label slides upward (top: 28px → 10px); **AND** the label font size shrinks from 15px to 13px; **AND** the label color changes from #555555 to #111111; **AND** the input height shrinks from 75px to 55px
  - Scenario — Inputs stack on mobile: **WHEN** the viewport is narrower than 576px; **THEN** both inputs stack vertically at 100% width; **AND** both get border-top-right-radius 12px
- **Renders dark SIGN IN button with gradient hover** — The form SHALL include a full-width dark button that reveals a gradient on hover.
  - Scenario — Button is visible: **WHEN** the login form renders; **THEN** a "SIGN IN" button is displayed full-width below the inputs; **AND** the button has near-black (#111111) background; **AND** the button height is 70px; **AND** the button has border-bottom-left-radius and border-bottom-right-radius of 12px; **AND** the text is white, uppercase, OpenSans Bold 15px
  - Scenario — Button hover shows gradient: **WHEN** the user hovers over the SIGN IN button; **THEN** the background becomes transparent; **AND** a purple-to-blue gradient (#6a11cb → #2575fc) fades in (opacity 0→1, 0.4s)
- **Input validation displays error messages** — The form SHALL validate inputs and display error messages for invalid data.
  - Scenario — Empty username submission shows error: **WHEN** the user submits the form with an empty username field; **THEN** an error message "Username is required" is displayed
  - Scenario — Empty password shows error: **WHEN** the user submits the form with an empty password field; **THEN** an error message "Password is required" is displayed
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/loginnova/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/loginnova/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Page background is full-viewport purple-to-blue gradient; [ ] "ACCOUNT LOGIN" heading is white, uppercase, centered, 30px; [ ] Username and password inputs are side by side on desktop (50% each); [ ] Inputs have white background, 1px border, no bottom border; [ ] Username input has top-left radius 12px, password has top-right radius 12px; [ ] Floating labels animate on focus (shrink + slide up, 0.4s); [ ] SIGN IN button is full-width, 70px tall, near-black, bottom radius 12px; [ ] Button hover reveals purple-to-blue gradient (0.4s fade); [ ] "Forgot password?" link is centered, light gray, white on hover; [ ] Inputs stack vertically on mobile (< 576px); [ ] All typography uses OpenSans font family; [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/loginnova` ships on https://loginnova.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/loginnova/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loginnova/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginnova/public/CNAME` = `loginnova.free.componentdock.com`
  and the package `homepage` = `https://loginnova.free.componentdock.com`.
