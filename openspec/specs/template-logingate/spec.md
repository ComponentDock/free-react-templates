# Template: LoginGate (Login Form)

## Purpose

Recreation of ColorLib "Login Form 09" (`login-form-09`).
Preview: https://preview.colorlib.com/theme/login-form-09/ (404 as of 2026-09-23 — design tokens extracted from screenshot).
Source page: https://colorlib.com/wp/template/login-form-09/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-09.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.

## Design Tokens

- **Page background:** #f0f0f0 (light gray) — full viewport background behind the card
- **Card background:** #ffffff (white) — centered login card with subtle shadow
- **Card shadow:** subtle box-shadow (~0 4px 20px rgba(0,0,0,0.08))
- **Card border-radius:** ~8px (rounded-lg)
- **Card padding:** generous (~40-50px)
- **Text primary (heading):** #333333 (dark gray, bold, ~24px)
- **Text secondary (subtext):** #999999 (medium gray, ~14px)
- **Input text:** #333333 (dark gray)
- **Input placeholder:** #aaaaaa (light gray)
- **Input border:** #dddddd (light gray, bottom-border only — no full box)
- **Button gradient:** linear-gradient left #56c596 (teal-green) → right #7ed9a7 (lighter mint-green)
- **Button text:** #ffffff (white)
- **Button radius:** ~25px (fully rounded / pill shape)
- **Button height:** ~50px
- **Checkbox accent:** #56c596 (teal-green, matches button gradient start)
- **Forgot Password link:** #999999 (medium gray)
- **Social Facebook:** #3b5998 (Facebook blue)
- **Social Twitter:** #1da1f2 (Twitter blue)
- **Social Google:** #d44638 (Google red)
- **Social button shape:** circular (rounded-full), ~40px diameter
- **Font family:** "Roboto", sans-serif (clean sans-serif, inferred from screenshot)
- **Divider text ("or sign in with"):** #999999

## Visual Design Notes (from screenshot)

- Single centered card layout on a light gray full-viewport background
- Card is vertically and horizontally centered in the viewport
- Heading "Sign In to Colorlib" (will become "Sign In to LoginGate") in large bold dark text
- Subtext paragraph in light gray below heading
- Username and Password inputs with bottom-border-only styling (no background, no full box border)
- "Remember me" checkbox on left with teal accent, "Forgot Password" link on right — same row
- Full-width pill-shaped gradient button (teal-green → lighter mint) with "Log In" white text
- "or sign in with" divider text centered below button
- Three circular social login buttons (Facebook dark-blue, Twitter light-blue, Google red) evenly spaced
- Clean, minimal, professional aesthetic — corporate SaaS login style
- No decorative illustration — the card IS the entire content

## Requirements

### Requirement: Centered card layout

The page SHALL display a single login card centered both horizontally and vertically on a light gray (#f0f0f0) full-viewport background.

#### Scenario: Centered card visible

- **WHEN** the user loads the LoginGate page
- **THEN** a white card is displayed centered in the viewport
- **AND** the page background is light gray (#f0f0f0)
- **AND** the card has a white background (#ffffff)
- **AND** the card has a subtle box-shadow
- **AND** the card has rounded corners (~8px)

#### Scenario: Card vertical centering

- **WHEN** the user loads the LoginGate page on any viewport height
- **THEN** the card is vertically centered in the viewport

### Requirement: Form header

The card SHALL display a heading "Sign In to LoginGate" in bold dark text and a subtext paragraph in light gray below it.

#### Scenario: Heading text

- **WHEN** the user loads the LoginGate page
- **THEN** the heading reads "Sign In to LoginGate"
- **AND** the heading is in dark text (#333), bold, large font (~24px)

#### Scenario: Subtext description

- **WHEN** the user loads the LoginGate page
- **THEN** a subtext paragraph appears below the heading
- **AND** the subtext is in light gray (#999)
- **AND** the subtext reads "Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipiscing." (or similar placeholder text)

### Requirement: Form fields

The form SHALL include Username and Password input fields with bottom-border-only styling.

#### Scenario: Username field

- **WHEN** the user loads the LoginGate page
- **THEN** a "Username" input field is visible
- **AND** the input has a bottom border only (#dddddd) — no full box border
- **AND** the placeholder text reads "Username" in light gray (#aaaaaa)

#### Scenario: Password field

- **WHEN** the user loads the LoginGate page
- **THEN** a "Password" input field is visible
- **AND** the input has a bottom border only (#dddddd) — no full box border
- **AND** the placeholder text reads "Password" in light gray (#aaaaaa)
- **AND** the input type is password (masked characters)

### Requirement: Remember me and forgot password

The form SHALL include a "Remember me" checkbox with teal accent and a "Forgot Password" link right-aligned on the same row.

#### Scenario: Remember me checkbox

- **WHEN** the user loads the LoginGate page
- **THEN** a "Remember me" checkbox is visible
- **AND** the checkbox accent color is teal-green (#56c596)

#### Scenario: Forgot password link

- **WHEN** the user loads the LoginGate page
- **THEN** a "Forgot Password" link is visible
- **AND** the link is right-aligned on the same row as the checkbox
- **AND** the link text is in medium gray (#999999)

### Requirement: Login button

The form SHALL include a full-width pill-shaped "Log In" button with a teal-green gradient background, white text, and fully rounded corners.

#### Scenario: Primary login button

- **WHEN** the user loads the LoginGate page
- **THEN** a "Log In" button is visible
- **AND** the button background is a horizontal gradient from #56c596 (left) to #7ed9a7 (right)
- **AND** the button text is white (#ffffff)
- **AND** the button is full-width within the card
- **AND** the button has a pill/fully-rounded shape (border-radius ~25px)
- **AND** the button height is approximately 50px

### Requirement: Social login

The form SHALL display "or sign in with" text and three circular social login buttons (Facebook, Twitter, Google) with correct brand colors.

#### Scenario: Social login divider

- **WHEN** the user loads the LoginGate page
- **THEN** text "or sign in with" appears below the Log In button
- **AND** the text is centered and in medium gray (#999999)

#### Scenario: Social buttons

- **WHEN** the user loads the LoginGate page
- **THEN** three circular social buttons are visible below the divider text
- **AND** the first button is Facebook (blue #3b5998)
- **AND** the second button is Twitter (blue #1da1f2)
- **AND** the third button is Google (red #d44638)
- **AND** each button is circular (rounded-full) approximately 40px diameter
- **AND** each button displays the respective social icon in white

### Requirement: Responsive behavior

The login card SHALL remain centered and functional across all viewport sizes.

#### Scenario: Mobile layout

- **WHEN** the user resizes the viewport to mobile width (≤640px)
- **THEN** the card remains centered horizontally
- **AND** the card adjusts its width to fit the mobile viewport with appropriate padding
- **AND** the form remains fully functional

### Requirement: Footer

The template SHALL include a footer linking to Component Dock.

#### Scenario: Component Dock link

- **WHEN** the user loads the LoginGate page
- **THEN** a footer is visible below the card
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text reads "More templates at Component Dock"
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Centered card layout on light gray (#f0f0f0) background
- [ ] White card with shadow and rounded corners (~8px)
- [ ] Bold dark heading "Sign In to LoginGate"
- [ ] Gray subtext paragraph
- [ ] Username and Password inputs with bottom-border-only styling
- [ ] "Remember me" checkbox with teal accent (#56c596)
- [ ] "Forgot Password" link right-aligned
- [ ] Full-width pill-shaped gradient button (teal-green → lighter mint) with "Log In" white text
- [ ] "or sign in with" divider text centered
- [ ] Three circular social buttons (Facebook #3b5998, Twitter #1da1f2, Google #d44638) with correct brand colors
- [ ] Responsive card sizing on mobile viewports
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] No ColorLib references in app code
- [ ] Tests at 100% coverage
