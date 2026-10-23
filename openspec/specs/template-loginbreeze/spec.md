# Template: LoginBreeze (Login Form)

## Purpose

Recreation of ColorLib "Login Form V3" (`login-form-v3`).
Preview: https://preview.colorlib.com/theme/login-form-v3/ (unreachable — design tokens extracted from screenshot) — **re-probed 2026-10-23: the demo serves** (measured record below).

<!-- unreachable-reprobe:start -->
> **Re-probe 2026-10-23** (`scripts/verify-unreachable-claims.py`): the reference DOES serve at `https://colorlib.com/etc/lf/Login_v3/index.html` — HTTP 200, 2,085 B, title `Login V3`.
>
> Sheet: `https://colorlib.com/etc/lf/Login_v3/css/style.css?v=b2062df8` (13,333 B).
> Faces it actually declares: `Poppins-Medium`, `Segoe UI`, `Roboto`, `Helvetica Neue`.
>
> Recorded by the PREP audit; the app delta (if any) is a separate fidelity follow-up — this block is evidence, not a re-value.
<!-- unreachable-reprobe:end -->
Source page: https://colorlib.com/wp/template/login-form-v3/

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Card gradient start:** #7c3aed (purple) — left/bottom of gradient card
- **Card gradient end:** #6366f1 (indigo) — right/top of gradient card
- **Card border radius:** ~1rem (rounded-2xl)
- **Background:** City skyline photo with dark overlay (opacity 30%), dark gray base (#1f2937)
- **Text primary:** white (all text on card is white)
- **Input underline:** rgba(255,255,255,0.3) — semi-transparent white bottom border
- **Input placeholder:** white with 50% opacity
- **Input icons:** white with 60% opacity (user silhouette, lock)
- **Checkbox accent:** #818cf8 (indigo)
- **Button background:** white
- **Button text:** dark gray (#1f2937)
- **Button shape:** pill (rounded-full), full-width
- **Forgot Password text:** white with 70% opacity
- **Logo container:** white circle (90% opacity) with mountain/document icon, centered at top
- **Font family:** "Poppins", sans-serif
- **Layout:** Single centered card on full-viewport background

## Requirements

### Requirement: Full-viewport background

The page SHALL display a full-viewport city skyline background image with a dark overlay and the login card centered on top.

#### Scenario: Background image visible

- **WHEN** the user loads the LoginBreeze page
- **THEN** a full-viewport background image is displayed
- **AND** the background has a dark overlay effect
- **AND** the login card is centered both horizontally and vertically

#### Scenario: Card centered on viewport

- **WHEN** the user loads the LoginBreeze page
- **THEN** the card is centered in the viewport
- **AND** the card has a purple-to-indigo gradient background

### Requirement: Login card with gradient

The login card SHALL display a purple-to-indigo gradient background with rounded corners and centered content.

#### Scenario: Gradient card visible

- **WHEN** the user loads the LoginBreeze page
- **THEN** a card with a purple-to-indigo gradient is visible
- **AND** the card has rounded corners
- **AND** the card contains the logo, heading, form, and footer link

#### Scenario: Logo icon in card

- **WHEN** the user loads the LoginBreeze page
- **THEN** a white circular logo icon is displayed at the top of the card
- **AND** the logo contains a mountain/document icon

### Requirement: Form heading

The card SHALL display "LOG IN" as a white uppercase heading.

#### Scenario: Heading text

- **WHEN** the user loads the LoginBreeze page
- **THEN** the heading reads "Log In"
- **AND** the heading is in white text, bold, uppercase

### Requirement: Form fields

The form SHALL include Username and Password input fields with underline-style bottom-border-only styling and left icons.

#### Scenario: Username field with icon

- **WHEN** the user loads the LoginBreeze page
- **THEN** a "Username" input field is visible
- **AND** the input has a user icon on the left
- **AND** the input has a bottom border only (underline style)
- **AND** the placeholder text reads "Username"

#### Scenario: Password field with icon

- **WHEN** the user loads the LoginBreeze page
- **THEN** a "Password" input field is visible
- **AND** the input has a lock icon on the left
- **AND** the input has a bottom border only (underline style)
- **AND** the placeholder text reads "Password"
- **AND** the input type is password (masked characters)

### Requirement: Remember me checkbox

The form SHALL include a "Remember me" checkbox with an indigo accent color, unchecked by default.

#### Scenario: Remember me checkbox unchecked

- **WHEN** the user loads the LoginBreeze page
- **THEN** a "Remember me" checkbox is visible
- **AND** the checkbox is unchecked by default

#### Scenario: Checkbox toggles

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox becomes checked
- **AND** when clicked again, the checkbox becomes unchecked

### Requirement: Login button

The form SHALL include a full-width white pill-shaped "Login" button.

#### Scenario: Login button visible

- **WHEN** the user loads the LoginBreeze page
- **THEN** a "Login" button is visible
- **AND** the button background is white
- **AND** the button text is dark gray
- **AND** the button has a pill shape (rounded-full)
- **AND** the button is full-width

### Requirement: Forgot Password link

The card SHALL display a "Forgot Password?" link below the form in white text.

#### Scenario: Forgot password link

- **WHEN** the user loads the LoginBreeze page
- **THEN** a "Forgot Password?" link is visible
- **AND** the link is centered below the form
- **AND** the link has white text

### Requirement: Responsive behavior

The layout SHALL be centered and responsive on all viewport sizes.

#### Scenario: Mobile layout

- **WHEN** the user loads the LoginBreeze page on a mobile device
- **THEN** the card remains centered
- **AND** the card has horizontal padding
- **AND** the form remains fully functional

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the user loads the LoginBreeze page
- **THEN** a footer is visible below the card
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text reads "More templates at Component Dock"
- **AND** the link opens in a new tab

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/loginbreeze/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/loginbreeze/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Full-viewport city skyline background with dark overlay
- [ ] Centered gradient card (purple-to-indigo)
- [ ] White circular logo icon with mountain/document icon
- [x] "Log In" heading in white, uppercase
- [ ] Username input with user icon and underline border
- [ ] Password input with lock icon and underline border
- [x] "Remember me" checkbox with indigo accent
- [x] White pill-shaped "Login" button, full-width
- [x] "Forgot Password?" link in white
- [ ] Responsive centering on all viewports
- [x] Footer links to https://www.componentdock.com/ ("Component Dock")
- [x] No ColorLib references in app code
- [ ] Tests at 100% coverage
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
