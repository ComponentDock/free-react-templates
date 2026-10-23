# Template: LoginBolt (Login Form)

## Purpose

A Login Form template with form title, input fields, sign in button, forgot password and sign up and form validation sections. Recreation of ColorLib **Login Form V17** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/login-form-v17/
- **Preview URL:** https://colorlib.com/etc/lf/Login_v17/index.html — **HTTP 200, 1,763 bytes** (re-verified 2026-10-23). The form templates were never published under `preview.colorlib.com/theme/<slug>/`: that path 404s, `colorlib.com/etc/login-form-v17/` and `colorlib.com/etc/lf/login-form-v17/` 404 too, and the wp template page's `downloads/free/login-form-v17.zip` link is dead. `/etc/lf/Login_v17/index.html` is the canonical live demo and the only reference with a stylesheet.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v17.jpg
- **New name:** `loginbolt` (app folder `apps/loginbolt`, package `@free-react-templates/loginbolt`)
- **Deploy URL:** https://loginbolt.free.componentdock.com

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Login Form V17** — https://colorlib.com/wp/template/login-form-v17/
- **Preview**: `https://colorlib.com/etc/lf/Login_v17/index.html` — HTTP 200, **1,763 bytes**, title `Login V17`. Not on the `preview.colorlib.com/theme/` host (see Purpose).
- **Stylesheet measured**: `css/style.css?v=93221552` — **11,098 bytes**, one standalone sheet, no Bootstrap (`body` here is a normalised `-apple-system` stack; the theme only styles the form widgets).
- **Measured how**: hex-literal census of the single sheet, then the winning rule per selector. Fonts are declared as `@font-face` families (`Poppins-Regular`, `Montserrat-Bold`) — self-hosted, no Google Fonts link.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Action green | `#00ad5f` | 4 | `.login100-form-btn` fill, `.txt2` (forgot-password link), `.txt3` (sign-up link) |
| Button hover | `#333333` | 2 | `.login100-form-btn:hover` fill |
| Title ink | `#555555` | — | `.login100-form-title` (20 px, uppercase, `letter-spacing: 2px`) |
| Input text | `#666666` | 2 | `.input100` (18 px) |
| Helper text | `#999999` | 9 | `.txt1`, placeholders |
| Field border | `#e6e6e6` | 2 | `.wrap-input100` `1px solid` |
| Validation error | `#c80000` | 3 | `.alert-validate` tooltip + pointer |
| Card surface | `#fff` | — | `.wrap-login100` 1170 px panel |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body / inputs | `Poppins-Regular`, 18 px in fields, 13 px helper | `.input100`, `.txt1` |
| Title | `Poppins-Regular` **20 px**, uppercase, `letter-spacing: 2px` | `.login100-form-title` |
| Button | `Montserrat-Bold` **12 px**, uppercase, `letter-spacing: 1px` | `.login100-form-btn` |
| Sign-up link | `Poppins-Regular` 15 px uppercase | `.txt3` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Layout | `.container-login100` `min-height: 100vh`, centred, `padding: 15px`; `.wrap-login100` **1170 px** white card, `flex-direction: row-reverse` → **form on the right, photo panel on the left** |
| Photo panel | `.login100-more` 50% width, `background-size: cover`, inline `url('images/bg-01.jpg')` on the demo page (not in the sheet) |
| Fields | `.wrap-input100` square (`border: 1px solid #e6e6e6`, no radius), transparent input, `padding: 0 25px`; the two fields sit side-by-side (`rs1` / `rs2`) with `m-b-20` |
| Button | full width, **height 50 px**, `border-radius: 3px`, `padding: 0 20px`, `transition: all .4s` |
| Rhythm | vertical stack inside the form: title (`p-b-34`) → user name → password → button → "Forgot / User name–password?" (`p-t-27 p-b-239`) → "Sign Up" |
| Bands | single-screen: light page → white card, form half white, photo half image — no dark bands |

## Requirements

### Requirement: Split-screen layout

The login page SHALL display a split-screen layout with a form panel on the left and an image panel on the right, centered on a light gray (#f2f2f2) background.

#### Scenario: Desktop layout

- **WHEN** the viewport is wider than 768px
- **THEN** the card shows a form on the left and an image on the right
- **AND** the image has a dark semi-transparent overlay (rgba(0,0,0,0.3))
- **AND** the card is vertically and horizontally centered

#### Scenario: Mobile layout

- **WHEN** the viewport is 768px or narrower
- **THEN** the form and image stack vertically
- **AND** the form occupies full width

### Requirement: Form title

The form SHALL display the title "Account Login" in uppercase with letter spacing (#555555).

#### Scenario: Title appearance

- **WHEN** the page loads
- **THEN** the form displays the title "Account Login"
- **AND** the title is uppercase with letter spacing
- **AND** the title text color is #555555

### Requirement: Input fields

The form SHALL display username and password input fields side by side on desktop and stacked on mobile.

#### Scenario: Desktop input layout

- **WHEN** the viewport is wider than 576px
- **THEN** the username and password inputs are displayed side by side
- **AND** each input occupies 50% of the form width

#### Scenario: Mobile input layout

- **WHEN** the viewport is 576px or narrower
- **THEN** the username and password inputs are stacked vertically

#### Scenario: Input field appearance

- **WHEN** the page loads
- **THEN** each input has a 1px solid #e6e6e6 border
- **AND** the input height is 55px
- **AND** the input font is Poppins Regular 18px
- **AND** the placeholder text color is #999999

#### Scenario: Input focus effect

- **WHEN** the user focuses an input field
- **THEN** a green (#00ad5f) border appears around the input
- **AND** the border animates in with a scale transition over 0.4s

### Requirement: Sign In button

The form SHALL display a full-width "Sign In" button with green background.

#### Scenario: Button appearance

- **WHEN** the page loads
- **THEN** a full-width "Sign In" button is displayed below the inputs
- **AND** the button background is #00ad5f
- **AND** the button text is white, uppercase, Montserrat Bold 12px
- **AND** the button has a 3px border radius
- **AND** the button height is 50px

#### Scenario: Button hover

- **WHEN** the user hovers over the Sign In button
- **THEN** the button background changes to #333333

### Requirement: Forgot password and Sign Up links

The form SHALL display a forgot password row and a Sign Up link.

#### Scenario: Forgot password row

- **WHEN** the page loads
- **THEN** a "Forgot" text is displayed in gray (#999999)
- **AND** a "User name / password?" link follows in green (#00ad5f)

#### Scenario: Sign Up link

- **WHEN** the page loads
- **THEN** a "Sign Up" link is displayed at the bottom of the form
- **AND** the link text is green (#00ad5f), uppercase

### Requirement: Form validation

The form SHALL validate that both username and password are provided before submission.

#### Scenario: Empty username validation

- **WHEN** the user clicks Sign In without entering a username
- **THEN** a validation message "Type user name" appears near the username input

#### Scenario: Empty password validation

- **WHEN** the user clicks Sign In without entering a password
- **THEN** a validation message "Type password" appears near the password input

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** the page footer links to https://www.componentdock.com/
- **AND** the footer text reads "Made with Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/loginbolt/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/loginbolt/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Split-screen layout — the card shows a form on the left and an image on the right
- [x] Form title — the form displays the title "Account Login"
- [ ] Input fields — the username and password inputs are displayed side by side
- [x] Sign In button — a full-width "Sign In" button is displayed below the inputs
- [x] Forgot password and Sign Up links — a "Forgot" text is displayed in gray (#999999)
- [x] Form validation — a validation message "Type user name" appears near the username input
