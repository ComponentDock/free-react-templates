# Template: Passvale (Login Form)

## Purpose

Recreation of ColorLib "Login Form 20" (slug: `login-form-20`).

- Source: https://colorlib.com/wp/template/login-form-20/
- Preview URL: https://preview.colorlib.com/theme/login-form-20/ (HTTP 404 at time of prep — design reconstructed from TEMPLATES.md screenshot)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-20-1.jpg
- Package: `@free-react-templates/passvale`
- Surge target: `passvale.free.componentdock.com`

## Design reference (replication findings)

### Preview DOM

The live preview at `https://preview.colorlib.com/theme/login-form-20/` returned HTTP 404.
The TEMPLATES.md screenshot was viewed and analyzed for visual design tokens and structure.

### Screenshot analysis

The screenshot (1200×972, AVIF format) shows a full-viewport scenic mountain landscape
background with a centered login form floating directly over the image (no card container).

### Section order (1:1)

1. **Full-page background**: scenic mountain landscape image (sunset/dawn lighting,
   warm pinks/oranges on peaks, blue-gray sky), covers entire viewport
2. **Title**: "Login #10" — large white text, centered, near top of page
3. **Subtitle**: "Have an account?" — lighter/semi-transparent white text, centered
4. **Username field**: transparent background, white bottom-border, white placeholder text
5. **Password field**: transparent background, white bottom-border, eye toggle icon
   (show/hide password) on right side
6. **SIGN IN button**: wide (full form width), salmon/peach color, rounded corners,
   uppercase white text
7. **Remember Me**: checkbox (checked) + label, left-aligned
8. **Forgot Password**: link text, right-aligned (same line as Remember Me)
9. **Divider**: "— Or Sign In With —" centered, semi-transparent white
10. **Social buttons**: two side-by-side buttons — "Facebook" and "Twitter",
    white background, dark text, rounded corners
11. **Footer**: minimal copyright / Component Dock link (required by conventions)

### Design tokens

| Token                      | Value                          | Usage                                              |
| -------------------------- | ------------------------------ | -------------------------------------------------- |
| Font family                | System sans-serif (likely Lato/Roboto on original) | Body, headings, form labels            |
| Heading text               | `#FFFFFF` (white)              | Title "Login #10", subtitle                        |
| Body text                  | `#FFFFFF` (white)              | Form labels, social button text                    |
| Placeholder text           | `rgba(255,255,255,0.6)`       | Input placeholder text                             |
| Primary button bg          | `#E8A090` (salmon/peach)       | SIGN IN button background                          |
| Primary button text        | `#FFFFFF` (white)              | SIGN IN button label                               |
| Social button bg           | `#FFFFFF` (white)              | Facebook/Twitter button backgrounds                |
| Social button text         | `#333333` (dark gray)          | Facebook/Twitter button labels                     |
| Input border               | `rgba(255,255,255,0.4)`       | Bottom-border of username/password fields          |
| Input text                 | `#FFFFFF` (white)              | Typed text in fields                               |
| Divider text               | `rgba(255,255,255,0.5)`       | "Or Sign In With" divider                          |
| Remember Me text           | `rgba(255,255,255,0.7)`       | Checkbox label                                     |
| Forgot Password link       | `rgba(255,255,255,0.7)`       | Link text                                          |
| Eye icon                   | `rgba(255,255,255,0.5)`       | Password visibility toggle                         |
| Button border-radius       | `25px` (pill shape)            | SIGN IN button                                     |
| Social button border-radius| `4px` (slight rounding)        | Facebook/Twitter buttons                           |
| Section padding            | `0` (full viewport)            | Page fills entire viewport                         |
| Form max-width             | ~`400px`                       | Login form container                               |
| Background                 | Full-viewport image (mountain sunset) | `background-size: cover; background-position: center` |

## Requirements

### Requirement: Full-viewport scenic background

The page SHALL display a full-viewport background image (scenic mountain landscape)
that covers the entire screen.

#### Scenario: Background fills viewport

- **WHEN** the page loads
- **THEN** a background image fills the entire viewport
- **AND** the image is set to `cover` with `center` positioning
- **AND** the background remains fixed during scrolling (optional parallax)

#### Scenario: Background is responsive

- **WHEN** the viewport resizes
- **THEN** the background image scales proportionally to always fill the viewport

### Requirement: Centered login form

The login form SHALL be centered horizontally and vertically (or near-top-centered)
on the page, floating directly over the background without a visible card container.

#### Scenario: Form is centered on desktop

- **WHEN** the viewport width is >= 768px
- **THEN** the login form is horizontally centered and positioned in the upper-center area of the viewport

#### Scenario: Form is centered on mobile

- **WHEN** the viewport width is < 768px
- **THEN** the login form is horizontally centered with adequate padding on each side

### Requirement: Title and subtitle

The form SHALL display a large title ("Login #10" or similar heading) and a
subtitle ("Have an account?") above the form fields.

#### Scenario: Title renders

- **WHEN** the page loads
- **THEN** a large white heading text is displayed centered above the form

#### Scenario: Subtitle renders

- **WHEN** the page loads
- **THEN** a lighter/semi-transparent subtitle is displayed centered below the title

### Requirement: Username input field

The form SHALL include a username text input with transparent background and
a white bottom border.

#### Scenario: Username input renders

- **WHEN** the page loads
- **THEN** a text input with placeholder "Username" is visible
- **AND** the input has no background color (transparent)
- **AND** the input has a bottom border only (no top/side borders)

### Requirement: Password input with visibility toggle

The form SHALL include a password input with a transparent background, white
bottom border, and an eye icon to toggle password visibility.

#### Scenario: Password input renders

- **WHEN** the page loads
- **THEN** a password input with placeholder "Password" is visible
- **AND** an eye icon button is positioned to the right of the input

#### Scenario: Password visibility toggle

- **WHEN** the user clicks the eye icon
- **THEN** the password field type changes from "password" to "text"
- **AND** the icon changes to indicate visibility state
- **WHEN** the user clicks the eye icon again
- **THEN** the password field type changes back to "password"

### Requirement: SIGN IN button

The form SHALL include a wide, rounded (pill-shaped) SIGN IN button with a
salmon/peach background color.

#### Scenario: Sign in button renders

- **WHEN** the page loads
- **THEN** a button labeled "SIGN IN" (uppercase) is visible
- **AND** the button spans the full width of the form
- **AND** the button has a salmon/peach background (`#E8A090`)
- **AND** the button has fully rounded corners (pill shape, ~25px radius)

#### Scenario: Sign in button hover state

- **WHEN** the user hovers over the SIGN IN button
- **THEN** the button shows a subtle hover effect (slightly darker shade)

### Requirement: Remember Me and Forgot Password

The form SHALL display a "Remember Me" checkbox (checked by default) on the
left and a "Forgot Password" link on the right, on the same line.

#### Scenario: Remember Me checkbox

- **WHEN** the page loads
- **THEN** a checkbox labeled "Remember Me" is visible and checked by default

#### Scenario: Forgot Password link

- **WHEN** the page loads
- **THEN** a "Forgot Password" link is visible, right-aligned on the same row

### Requirement: Social login divider and buttons

The form SHALL display a "— Or Sign In With —" divider followed by two
social login buttons (Facebook and Twitter) side by side.

#### Scenario: Divider renders

- **WHEN** the page loads
- **THEN** a divider text "— Or Sign In With —" is visible centered below the form fields

#### Scenario: Social buttons render

- **WHEN** the page loads
- **THEN** two buttons labeled "Facebook" and "Twitter" are visible side by side
- **AND** both buttons have a white background with dark text
- **AND** both buttons have slight rounded corners

#### Scenario: Social button hover state

- **WHEN** the user hovers over a social button
- **THEN** the button shows a subtle hover effect

### Requirement: Component Dock footer

Every template footer MUST link https://www.componentdock.com/ (branded as "Component Dock").

#### Scenario: Footer link present

- **WHEN** the page loads
- **THEN** a footer section is visible with a link to componentdock.com

## Verification checklist

- [ ] Full-viewport scenic background image fills the page
- [ ] Login form is centered on page
- [ ] Title and subtitle render above form
- [ ] Username input has transparent bg + white bottom border
- [ ] Password input has transparent bg + white bottom border + eye toggle
- [ ] SIGN IN button is pill-shaped, salmon/peach, full-width
- [ ] Remember Me checkbox (checked by default) + Forgot Password link on same row
- [ ] "Or Sign In With" divider + Facebook/Twitter social buttons
- [ ] Component Dock footer link present
- [ ] Form is responsive on mobile (stacks/pads correctly)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Tests pass with 100% coverage
- [ ] `public/CNAME` contains `passvale.free.componentdock.com`
- [ ] `homepage` in package.json is `https://passvale.free.componentdock.com`
