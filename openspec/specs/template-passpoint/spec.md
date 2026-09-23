# Template: Passpoint (Login Form)

## Purpose

Recreation of ColorLib "Login Form 09" (`login-form-09`).
Preview: https://preview.colorlib.com/theme/login-form-09/ (404 as of 2026-09-23 — design tokens extracted from source CSS at GitHub LoginRadius/awesome-login-pages).
Source page: https://colorlib.com/wp/template/login-form-09/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-09.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Font family:** "Roboto", sans-serif (loaded from Google Fonts, weights 300/400)
- **Background:** #f8fafb (light grayish page background)
- **Text primary:** #333333 (dark gray, heading)
- **Text secondary / labels:** #b3b3b3 (light gray, paragraph, input labels)
- **Text muted:** #888888 (gray, links, caption text)
- **Input border:** #cccccc (bottom-border-only inputs, no full box)
- **Input focus background:** #ffffff (white, on form-group focus)
- **Form group first/last border radius:** 7px top corners (first group), 7px bottom corners (last group)
- **Button primary (Log In):** Bootstrap #007bff (blue), white text, full-width, height 54px, padding-left/right 30px, default Bootstrap border-radius
- **Checkbox accent:** #38d39f (mint green), checked indicator background
- **Checkbox indicator radius:** 4px
- **Checkbox unchecked:** #e6e6e6 (light gray)
- **Social Facebook:** #3b5998 (circular, 50x50px, white icon)
- **Social Twitter:** #1da1f2 (circular, 50x50px, white icon)
- **Social Google:** #ea4335 (circular, 50x50px, white icon)
- **Social hover:** slightly darker shade of each brand color
- **Forgot Password link:** #888888, font-size 14px, underlined
- **"or sign in with" text:** muted gray (#b3b3b3), default Bootstrap text-muted
- **Layout:** Two-column split — form left (~50%), decorative illustration right (~50%)
- **Illustration:** SVG vector art (undraw-style) with devices/file sync concept — use placeholder image via `https://picsum.photos/seed/passpoint-illustration/600/800`
- **Responsive:** columns stack vertically on mobile (<992px)

## Requirements

### Requirement: Two-column split layout

The page SHALL display a two-column layout with the login form on the left and a decorative illustration on the right. The page background SHALL be #f8fafb.

#### Scenario: Two-column layout visible on desktop

- **WHEN** the user loads the Passpoint page
- **THEN** the page displays a two-column layout
- **AND** the left column contains the login form
- **AND** the right column contains a decorative illustration

#### Scenario: Full-viewport light background

- **WHEN** the user loads the Passpoint page
- **THEN** the page background is #f8fafb (light grayish)
- **AND** the form and illustration are vertically centered with generous padding (7rem top/bottom)

### Requirement: Form header

The form SHALL display a heading "Sign In to **Passpoint**" in dark bold text and a subtext paragraph in light gray below it.

#### Scenario: Heading text

- **WHEN** the user loads the Passpoint page
- **THEN** the heading reads "Sign In to Passpoint"
- **AND** the heading is in dark text (#333), bold, large font
- **AND** the word "Passpoint" is in strong/bold weight

#### Scenario: Subtext description

- **WHEN** the user loads the Passpoint page
- **THEN** a subtext paragraph appears below the heading
- **AND** the subtext is in light gray (#b3b3b3)
- **AND** the subtext has margin-bottom of 1rem (mb-4)

### Requirement: Form fields

The form SHALL include Username and Password input fields with bottom-border-only styling and floating labels.

#### Scenario: Username field

- **WHEN** the user loads the Passpoint page
- **THEN** a "Username" input field is visible
- **AND** the input has a bottom border only (1px solid #ccc, no full box border, transparent background)
- **AND** the label text reads "Username" in light gray (#b3b3b3), 12px font-size

#### Scenario: Password field

- **WHEN** the user loads the Passpoint page
- **THEN** a "Password" input field is visible
- **AND** the input has a bottom border only (1px solid #ccc, no full box border, transparent background)
- **AND** the label text reads "Password" in light gray (#b3b3b3), 12px font-size
- **AND** the input type is password (masked characters)

#### Scenario: Form group styling

- **WHEN** the user views the form fields
- **THEN** the first form group has top border-radius of 7px (top-left, top-right)
- **AND** the last form group has bottom border-radius of 7px (bottom-left, bottom-right)
- **AND** when focused, the form-group background becomes white (#fff)

### Requirement: Remember me and forgot password

The form SHALL include a "Remember me" checkbox with mint accent and a "Forgot Password" link right-aligned on the same row.

#### Scenario: Remember me checkbox

- **WHEN** the user loads the Passpoint page
- **THEN** a "Remember me" checkbox is visible
- **AND** the checkbox accent color is mint green (#38d39f) when checked
- **AND** the checkbox indicator has border-radius of 4px
- **AND** the checkbox is checked by default

#### Scenario: Forgot password link

- **WHEN** the user loads the Passpoint page
- **THEN** a "Forgot Password" link is visible
- **AND** the link is right-aligned on the same row as the checkbox
- **AND** the link color is #888888
- **AND** the link font-size is 14px

### Requirement: Login button

The form SHALL include a full-width "Log In" button with blue background, white text, and default Bootstrap border-radius.

#### Scenario: Primary login button

- **WHEN** the user loads the Passpoint page
- **THEN** a "Log In" button is visible
- **AND** the button background is blue (#007bff)
- **AND** the button text is white
- **AND** the button is full-width within the form
- **AND** the button height is 54px
- **AND** the button has horizontal padding of 30px

### Requirement: Social login

The form SHALL display "or sign in with" text and three circular social login buttons (Facebook, Twitter, Google) with correct brand colors.

#### Scenario: Social login text

- **WHEN** the user loads the Passpoint page
- **THEN** text "or sign in with" appears below the Log In button
- **AND** the text is in muted gray

#### Scenario: Social buttons

- **WHEN** the user loads the Passpoint page
- **THEN** three circular social buttons are visible
- **AND** the first button is Facebook (#3b5998)
- **AND** the second button is Twitter (#1da1f2)
- **AND** the third button is Google (#ea4335)
- **AND** each button is circular (rounded-full), 50x50px, with white icon
- **AND** each button has a hover effect (slightly darker shade)

### Requirement: Illustration

The right column SHALL display a decorative illustration using a placeholder image.

#### Scenario: Decorative illustration

- **WHEN** the user loads the Passpoint page
- **THEN** a decorative illustration is displayed in the right column
- **AND** the illustration covers the right half of the viewport with background-size cover

#### Scenario: Illustration hidden on mobile

- **WHEN** the user resizes the viewport to mobile width (<992px)
- **THEN** the illustration is hidden or stacked below the form

### Requirement: Responsive behavior

The two-column layout SHALL stack vertically on mobile viewports.

#### Scenario: Mobile layout

- **WHEN** the user resizes the viewport to mobile width (<992px)
- **THEN** the two-column layout stacks vertically
- **AND** the form remains fully functional
- **AND** the illustration appears below the form

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the user loads the Passpoint page
- **THEN** a footer is visible
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text reads "More templates at Component Dock"
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Two-column layout with form left, illustration right
- [ ] #f8fafb light grayish page background
- [ ] Bold dark heading "Sign In to Passpoint" (#333)
- [ ] Light gray subtext (#b3b3b3)
- [ ] Username and Password inputs with bottom-border-only styling (1px solid #ccc)
- [ ] Floating labels in 12px #b3b3b3
- [ ] Form group first/last border-radius 7px
- [ ] "Remember me" checkbox with mint accent (#38d39f), checked by default
- [ ] "Forgot Password" link right-aligned, #888888, 14px
- [ ] Full-width blue (#007bff) "Log In" button, 54px height, white text
- [ ] "or sign in with" muted text
- [ ] Three circular social buttons (Facebook #3b5998, Twitter #1da1f2, Google #ea4335), 50x50
- [ ] Decorative illustration in right column
- [ ] Responsive stacking on mobile (<992px)
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
