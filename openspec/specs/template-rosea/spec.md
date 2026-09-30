# Template: Rosea (Account Signup Card)

## Purpose

Recreation of ColorLib **Signup Form 17** (`https://colorlib.com/wp/template/signup-form-17/`).

- Preview (live): `https://preview.colorlib.com/theme/bootstrap/signup-form-17/`
  — the un-prefixed `/theme/signup-form-17/` path 404s; the bootstrap path
  serves the real page. DOM + `css/style.css` fetched from there.
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-17.jpg`

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

A single centered dark signup card on a soft pink page: circular avatar,
light "Create Your Account" heading, three pill-shaped transparent inputs
(Full Name, Email Address, Password with show/hide eye toggle), a full-width
mint-green pill "Sign Up" button that inverts on hover, and an "I'm already a
member! Sign In" line. The page title "Sign Up #07" sits above the card.

## Design Tokens (extracted from live preview CSS `css/style.css`)

| Token               | Value                                              | Notes                                  |
| ------------------- | -------------------------------------------------- | -------------------------------------- |
| page-bg             | `#f2d6eb`                                          | Soft pink, full viewport               |
| card-bg             | `#3c3d47`                                          | Dark slate, `border-radius: 10px`      |
| card-shadow         | `0px 10px 34px -15px rgba(0, 0, 0, 0.24)`          | Subtle elevation                       |
| accent              | `#01d28e`                                          | Mint green — button, Sign In link      |
| accent-dark         | `#01b87a`                                          | Footer link hover                      |
| button hover        | transparent bg + `#01d28e` text/border             | Inverts on hover                       |
| input-border        | `1px solid rgba(255, 255, 255, 0.1)`               | Transparent input background           |
| input-border-focus  | `1px solid rgba(255, 255, 255, 0.2)`               | Slightly stronger                      |
| input/button radius | `40px`                                             | Pill shape                             |
| input height        | `52px`                                             | `padding-left/right: 20px`             |
| input text          | `#fff`                                             | Placeholder `rgba(255, 255, 255, 0.3)` |
| labels              | uppercase, 700, `12px`, letter-spacing 1px, `#fff` | Above each input                       |
| card heading        | `22px`, font-weight 300, `#fff`                    | "Create Your Account"                  |
| page title          | `28px`, `#000`, font-weight 400                    | "Sign Up #07" above the card           |
| eye toggle icon     | `rgba(255, 255, 255, 0.5)`, right 15px             | Show/hide password                     |
| member line text    | `gray` (`#808080`)                                 | "I'm already a member!"                |
| font family         | `Lato`, Arial, sans-serif                          | Weights 300, 400, 700 (Google Fonts)   |
| section padding     | `7em` top/bottom                                   | Vertical rhythm                        |
| avatar              | `100px` circle, `margin-bottom: 20px`              | Background-image, cover                |

## Section structure (top to bottom)

1. **Page wrapper** — full viewport, `#f2d6eb` background, vertically + horizontally centered content, section padding 7em.
2. **Page title** — "Sign Up #07", 28px black, centered above the card.
3. **Card container** — `#3c3d47`, radius 10px, shadow, ~450px max width, generous padding (24px mobile / 48px desktop).
4. **Avatar** — 100px circle at card top center (picsum placeholder).
5. **Card heading** — "Create Your Account", 22px, weight 300, white, centered.
6. **Form** — Full Name → Email Address → Password; uppercase white labels above pill inputs.
7. **Password field** — eye toggle button inside the input (show/hide).
8. **Submit** — full-width mint pill button "Sign Up"; hover inverts to transparent.
9. **Sign-in line** — "I'm already a member!" gray + "Sign In" mint link, left-aligned below the button.
10. **Footer** — "More templates at Component Dock" line linking `https://www.componentdock.com/` (mandated branding; the source design has no footer).

## Requirements

### Requirement: Centered card on pink page

The system SHALL render a full-viewport page with a soft pink background
(`#f2d6eb`) and center a dark slate card (`#3c3d47`, radius 10px, ~450px max
width) both horizontally and vertically.

#### Scenario: Page renders centered card

- **GIVEN** the user visits the Rosea signup page
- **THEN** a soft pink background SHALL fill the viewport
- **AND** the "Sign Up #07" title SHALL be displayed above the card
- **AND** a dark slate card SHALL be centered on the page

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile viewport (width < 768px)
- **THEN** the card SHALL remain centered with reduced padding
- **AND** all form fields SHALL remain full width

### Requirement: Avatar and card heading

The card SHALL display a 100px circular avatar image at its top center and a
"Create Your Account" heading (22px, font-weight 300, white) below it.

#### Scenario: Avatar and heading display

- **GIVEN** the card is visible
- **THEN** a circular avatar image SHALL be shown at the top center of the card
- **AND** "Create Your Account" SHALL be displayed as a light-weight white heading below it

### Requirement: Signup form fields

The form SHALL render three fields — Full Name, Email Address, and Password —
each with an uppercase bold label above a pill-shaped transparent input
(radius 40px, height 52px, white/10 border) and the placeholders "John Doe",
"johndoe@gmail.com", and "Password".

#### Scenario: Form fields render

- **GIVEN** the signup form is visible
- **THEN** a "FULL NAME" label and input SHALL be displayed
- **AND** an "EMAIL ADDRESS" label and input SHALL be displayed below
- **AND** a "PASSWORD" label and input SHALL be displayed below email
- **AND** all inputs SHALL be pill-shaped with transparent dark backgrounds

#### Scenario: Accessibility

- **GIVEN** the form is rendered
- **THEN** all inputs SHALL have associated labels via htmlFor/id
- **AND** the submit button SHALL have type="submit"

### Requirement: Password visibility toggle

The password field SHALL include an eye toggle button inside the input that
switches the input type between "password" and "text" and updates its
accessible label between "Show password" and "Hide password".

#### Scenario: Password toggle works

- **GIVEN** the password field is visible
- **THEN** an eye icon button SHALL be displayed on the right side of the password input
- **AND** the password input SHALL have type "password"
- **WHEN** the user clicks the eye button
- **THEN** the password input SHALL have type "text"
- **AND** the button's accessible label SHALL change to "Hide password"
- **WHEN** the user clicks the button again
- **THEN** the password input SHALL have type "password"

### Requirement: Sign Up submit behavior

The form SHALL include a full-width mint pill button ("Sign Up") that inverts
to a transparent background with mint text on hover, and submitting the form
SHALL be prevented (no page navigation) with entered values retained.

#### Scenario: Submit prevents navigation

- **GIVEN** the form is visible
- **THEN** a full-width mint pill button "Sign Up" SHALL be displayed
- **WHEN** the user fills the fields and clicks "Sign Up"
- **THEN** the form submission SHALL be prevented (no page navigation)
- **AND** the entered values SHALL remain in the fields

### Requirement: Sign-in link

The card SHALL show "I'm already a member!" in gray below the button with a
clickable mint-green "Sign In" link.

#### Scenario: Sign-in link renders

- **GIVEN** the form is visible
- **THEN** "I'm already a member!" text SHALL be shown below the button
- **AND** "Sign In" SHALL appear as a clickable mint-green link

### Requirement: Footer with Component Dock link

The page SHALL include a footer line linking to `https://www.componentdock.com/`
with link text mentioning "Component Dock" (opens in a new tab).

#### Scenario: Footer renders

- **GIVEN** the page is rendered
- **THEN** a footer line SHALL link to https://www.componentdock.com/
- **AND** the link text SHALL mention "Component Dock"

## Verification checklist

- [ ] Soft pink `#f2d6eb` page background, content vertically centered
- [ ] "Sign Up #07" title above the card
- [ ] Dark slate `#3c3d47` card, radius 10px, ~450px max width, subtle shadow
- [ ] 100px circular avatar at top center of card
- [ ] "Create Your Account" heading, weight 300, white
- [ ] Pill inputs (radius 40px, height 52px, transparent, white/10 border)
- [ ] Uppercase 12px bold labels with letter-spacing
- [ ] Password eye toggle switches input type + aria-label
- [ ] Mint `#01d28e` pill "Sign Up" button, inverts on hover
- [ ] "I'm already a member! Sign In" line with mint link
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] Lato font via Google Fonts `<link>` in index.html
- [ ] Avatar placeholder via `picsum.photos` seed `rosea`
- [ ] Icons from `lucide-react` (Eye/EyeOff)
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
