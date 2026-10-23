# Loginbreeze — Implementation Tasks

Source design: **Login Form V3** (`https://colorlib.com/wp/template/login-form-v3/`) → recreation name **loginbreeze**. Shipped at https://loginbreeze.free.componentdock.com.

Scope: Recreation of ColorLib "Login Form V3" (`login-form-v3`). Preview: https://preview.colorlib.com/theme/login-form-v3/ (unreachable — design tokens extracted from screenshot). Source page: https://colorlib.com/wp/template/login-form-v3/ Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Component breakdown

Render order as composed in `apps/loginbreeze/src/App.tsx`:

### 1. LoginForm
- The login card SHALL display a purple-to-indigo gradient background with rounded corners and centered content.
- Scenario — Gradient card visible:
  - **WHEN** the user loads the LoginBreeze page
  - **THEN** a card with a purple-to-indigo gradient is visible
  - **AND** the card has rounded corners
  - **AND** the card contains the logo, heading, form, and footer link
- Scenario — Logo icon in card:
  - **WHEN** the user loads the LoginBreeze page
  - **THEN** a white circular logo icon is displayed at the top of the card
  - **AND** the logo contains a mountain/document icon

### 2. Footer
- The template SHALL include a footer linking to Component Dock.
- Scenario — Component Dock link:
  - **WHEN** the user loads the LoginBreeze page
  - **THEN** a footer is visible below the card
  - **AND** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text reads "More templates at Component Dock"
  - **AND** the link opens in a new tab

### Cross-cutting requirements

- **Full-viewport background** — The page SHALL display a full-viewport city skyline background image with a dark overlay and the login card centered on top.
  - Scenario — Background image visible: **WHEN** the user loads the LoginBreeze page; **THEN** a full-viewport background image is displayed; **AND** the background has a dark overlay effect; **AND** the login card is centered both horizontally and vertically
  - Scenario — Card centered on viewport: **WHEN** the user loads the LoginBreeze page; **THEN** the card is centered in the viewport; **AND** the card has a purple-to-indigo gradient background
- **Form heading** — The card SHALL display "LOG IN" as a white uppercase heading.
  - Scenario — Heading text: **WHEN** the user loads the LoginBreeze page; **THEN** the heading reads "Log In"; **AND** the heading is in white text, bold, uppercase
- **Form fields** — The form SHALL include Username and Password input fields with underline-style bottom-border-only styling and left icons.
  - Scenario — Username field with icon: **WHEN** the user loads the LoginBreeze page; **THEN** a "Username" input field is visible; **AND** the input has a user icon on the left; **AND** the input has a bottom border only (underline style); **AND** the placeholder text reads "Username"
  - Scenario — Password field with icon: **WHEN** the user loads the LoginBreeze page; **THEN** a "Password" input field is visible; **AND** the input has a lock icon on the left; **AND** the input has a bottom border only (underline style); **AND** the placeholder text reads "Password"; **AND** the input type is password (masked characters)
- **Remember me checkbox** — The form SHALL include a "Remember me" checkbox with an indigo accent color, unchecked by default.
  - Scenario — Remember me checkbox unchecked: **WHEN** the user loads the LoginBreeze page; **THEN** a "Remember me" checkbox is visible; **AND** the checkbox is unchecked by default
  - Scenario — Checkbox toggles: **WHEN** the user clicks the "Remember me" checkbox; **THEN** the checkbox becomes checked; **AND** when clicked again, the checkbox becomes unchecked
- **Login button** — The form SHALL include a full-width white pill-shaped "Login" button.
  - Scenario — Login button visible: **WHEN** the user loads the LoginBreeze page; **THEN** a "Login" button is visible; **AND** the button background is white; **AND** the button text is dark gray; **AND** the button has a pill shape (rounded-full); **AND** the button is full-width
- **Forgot Password link** — The card SHALL display a "Forgot Password?" link below the form in white text.
  - Scenario — Forgot password link: **WHEN** the user loads the LoginBreeze page; **THEN** a "Forgot Password?" link is visible; **AND** the link is centered below the form; **AND** the link has white text
- **Responsive behavior** — The layout SHALL be centered and responsive on all viewport sizes.
  - Scenario — Mobile layout: **WHEN** the user loads the LoginBreeze page on a mobile device; **THEN** the card remains centered; **AND** the card has horizontal padding; **AND** the form remains fully functional
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/loginbreeze/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/loginbreeze/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Full-viewport city skyline background with dark overlay; [ ] Centered gradient card (purple-to-indigo); [ ] White circular logo icon with mountain/document icon; [ ] "Log In" heading in white, uppercase; [ ] Username input with user icon and underline border; [ ] Password input with lock icon and underline border; [ ] "Remember me" checkbox with indigo accent; [ ] White pill-shaped "Login" button, full-width; [ ] "Forgot Password?" link in white; [ ] Responsive centering on all viewports; [ ] Footer links to https://www.componentdock.com/ ("Component Dock"); [ ] No ColorLib references in app code; [ ] Tests at 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/loginbreeze` ships on https://loginbreeze.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/loginbreeze/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loginbreeze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginbreeze/public/CNAME` = `loginbreeze.free.componentdock.com`
  and the package `homepage` = `https://loginbreeze.free.componentdock.com`.
