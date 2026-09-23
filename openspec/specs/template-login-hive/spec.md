# Template: LoginHive (Login Form)

## Purpose

Recreation of ColorLib "Login Form 10" (`login-form-10`).
Preview: https://preview.colorlib.com/theme/bootstrap/login-form-10/
Source page: https://colorlib.com/wp/template/login-form-10/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-10-2.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Body background:** #f8fafb (very light blue-gray) — full viewport background
- **Form block background:** #ffffff (white) — right-column login card with subtle shadow
- **Form block shadow:** 0 2px 3px 0 rgba(0, 0, 0, 0.1)
- **Primary / accent color:** #38d39f (teal-green) — used on login button, checkbox accent
- **Primary hover:** #29bb8a (darker teal)
- **Text primary (heading):** #212529 (dark, bold, h3 size)
- **Text secondary (subtext):** #b3b3b3 (light gray, font-weight 300)
- **Input border (bottom only):** #cccccc (light gray)
- **Input label color:** #b3b3b3 (light gray, font-size 12px)
- **Login button:** Bootstrap btn-primary #38d39f, white text, pill shape (border-radius 30px), height 54px
- **Checkbox accent:** #38d39f (teal-green, matches primary)
- **Checkbox unchecked:** #e6e6e6 (light gray)
- **Link color:** #888888 (medium gray, underlined)
- **Forgot Password link:** #888888 (medium gray, font-size 14px)
- **Social Facebook:** #3b5998 (Facebook blue)
- **Social Twitter:** #1da1f2 (Twitter blue)
- **Social Google:** #ea4335 (Google red)
- **Social button shape:** rectangular block buttons (btn-block), not circular
- **Divider text ("— or —"):** #b3b3b3 (light gray)
- **"or sign in with" text:** #b3b3b3 (light gray)
- **Font family:** "Roboto", sans-serif (weights 300, 400)
- **Form block padding:** 30px
- **Input font-size:** 20px
- **Form group border-radius:** 7px (first group top corners, last group bottom corners)

## Visual Design Notes (from preview)

- Two-column split layout on a light blue-gray (#f8fafb) full-viewport background
- Left column (col-md-5): social login buttons stacked vertically with "or sign in with" text above
  - Three rectangular block-style social buttons (Facebook, Twitter, Google) — NOT circular
  - Each button is full-width within its column, with centered icon
- Center column (col-md-2): "— or —" divider text, vertically centered
- Right column (col-md-5): white form card with shadow containing:
  - Heading "Sign In to Colorlib" (will become "Sign In to LoginHive") in bold dark text
  - Subtext paragraph in light gray
  - Username input with bottom-border-only styling (floating label pattern)
  - Password input with same styling
  - "Remember me" checkbox (teal accent) on left + "Forgot Password" link on right
  - Full-width pill-shaped teal-green button with white "Log In" text
- Clean, minimal, professional aesthetic — social-first login experience
- Responsive: collapses to single column on mobile
- No decorative illustration — the split layout IS the entire content

## Requirements

### Requirement: Two-column split layout

The page SHALL display a two-column layout with social login on the left and the login form on the right, separated by a vertical divider.

#### Scenario: Desktop two-column layout

- **WHEN** the user loads the LoginHive page on a desktop viewport (≥992px)
- **THEN** the page displays a two-column layout
- **AND** the left column contains social login buttons
- **AND** the center contains a "— or —" divider text
- **AND** the right column contains the login form
- **AND** the page background is light blue-gray (#f8fafb)

#### Scenario: Mobile single-column layout

- **WHEN** the user loads the LoginHive page on a mobile viewport (≤640px)
- **THEN** the layout collapses to a single column
- **AND** the social login section stacks above the form section
- **AND** the divider text is hidden or displayed horizontally

### Requirement: Social login section

The left column SHALL display "or sign in with" text and three rectangular block-style social login buttons (Facebook, Twitter, Google) with correct brand colors.

#### Scenario: Social login heading

- **WHEN** the user loads the LoginHive page
- **THEN** text "or sign in with" appears at the top of the social login section
- **AND** the text is centered and in light gray (#b3b3b3)

#### Scenario: Social buttons

- **WHEN** the user loads the LoginHive page
- **THEN** three rectangular social buttons are visible below the divider text
- **AND** the first button is Facebook (blue #3b5998)
- **AND** the second button is Twitter (blue #1da1f2)
- **AND** the third button is Google (red #ea4335)
- **AND** each button is full-width block-style (not circular)
- **AND** each button displays the respective social icon in white

#### Scenario: Social button hover

- **WHEN** the user hovers over a social button
- **THEN** the button background darkens slightly
- **AND** the transition is smooth (0.3s ease)

### Requirement: Divider

The layout SHALL display a "— or —" text divider between the social login and form columns.

#### Scenario: Divider visible on desktop

- **WHEN** the user loads the LoginHive page on a desktop viewport
- **THEN** a "— or —" text divider is visible between the two columns
- **AND** the divider text is centered vertically
- **AND** the divider text is in light gray (#b3b3b3)

### Requirement: Form header

The form card SHALL display a heading "Sign In to LoginHive" in bold dark text and a subtext paragraph in light gray below it.

#### Scenario: Heading text

- **WHEN** the user loads the LoginHive page
- **THEN** the heading reads "Sign In to LoginHive"
- **AND** the heading is in dark text (#212529), bold, h3 size

#### Scenario: Subtext description

- **WHEN** the user loads the LoginHive page
- **THEN** a subtext paragraph appears below the heading
- **AND** the subtext is in light gray (#b3b3b3)
- **AND** the subtext reads "Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipiscing." (or similar placeholder text)

### Requirement: Form fields

The form SHALL include Username and Password input fields with bottom-border-only styling and floating labels.

#### Scenario: Username field

- **WHEN** the user loads the LoginHive page
- **THEN** a "Username" input field is visible
- **AND** the input has a bottom border only (#cccccc) — no full box border
- **AND** the input font-size is 20px
- **AND** the input has a floating label that moves up when focused or filled

#### Scenario: Password field

- **WHEN** the user loads the LoginHive page
- **THEN** a "Password" input field is visible
- **AND** the input has a bottom border only (#cccccc) — no full box border
- **AND** the input type is password (masked characters)

### Requirement: Remember me and forgot password

The form SHALL include a "Remember me" checkbox with teal accent and a "Forgot Password" link right-aligned on the same row.

#### Scenario: Remember me checkbox

- **WHEN** the user loads the LoginHive page
- **THEN** a "Remember me" checkbox is visible
- **AND** the checkbox accent color is teal-green (#38d39f) when checked
- **AND** the checkbox unchecked background is #e6e6e6

#### Scenario: Forgot password link

- **WHEN** the user loads the LoginHive page
- **THEN** a "Forgot Password" link is visible
- **AND** the link is right-aligned on the same row as the checkbox
- **AND** the link text is in medium gray (#888888) with underline

### Requirement: Login button

The form SHALL include a full-width pill-shaped "Log In" button with teal-green background, white text, and fully rounded corners.

#### Scenario: Primary login button

- **WHEN** the user loads the LoginHive page
- **THEN** a "Log In" button is visible
- **AND** the button background is #38d39f (teal-green)
- **AND** the button text is white (#ffffff)
- **AND** the button is full-width within the form card
- **AND** the button has a pill/fully-rounded shape (border-radius 30px)
- **AND** the button height is approximately 54px
- **AND** the button text color on hover is white

### Requirement: Form card styling

The form section SHALL be displayed in a white card with a subtle shadow and padding.

#### Scenario: Form card appearance

- **WHEN** the user loads the LoginHive page
- **THEN** the form is contained in a white (#ffffff) card
- **AND** the card has a subtle box-shadow (0 2px 3px 0 rgba(0, 0, 0, 0.1))
- **AND** the card has 30px padding

### Requirement: Responsive behavior

The login layout SHALL remain centered and functional across all viewport sizes.

#### Scenario: Mobile layout

- **WHEN** the user resizes the viewport to mobile width (≤640px)
- **THEN** the two-column layout collapses to a single column
- **AND** social buttons appear above the login form
- **AND** the form remains fully functional

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the user loads the LoginHive page
- **THEN** a footer is visible below the main content
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text reads "More templates at Component Dock"
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Two-column split layout (social left, form right) on desktop
- [ ] Light blue-gray (#f8fafb) full-viewport background
- [ ] "or sign in with" text in light gray above social buttons
- [ ] Three rectangular block-style social buttons (Facebook #3b5998, Twitter #1da1f2, Google #ea4335)
- [ ] "— or —" divider text between columns
- [ ] White form card with subtle shadow (0 2px 3px 0 rgba(0,0,0,0.1))
- [ ] Bold dark heading "Sign In to LoginHive"
- [ ] Gray subtext paragraph (#b3b3b3)
- [ ] Username and Password inputs with bottom-border-only styling
- [ ] Floating labels that move up on focus/fill
- [ ] "Remember me" checkbox with teal accent (#38d39f)
- [ ] "Forgot Password" link right-aligned in gray (#888) with underline
- [ ] Full-width pill-shaped teal-green button (#38d39f) with white text
- [ ] Button pill shape (border-radius 30px), height 54px
- [ ] Social buttons are block-style (full-width rectangular), NOT circular
- [ ] Responsive collapse to single column on mobile
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
