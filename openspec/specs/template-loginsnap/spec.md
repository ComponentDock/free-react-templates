# Template: LoginSnap (Login Form)

## Purpose

Recreation of ColorLib "Login Form 14" (slug: `login-form-v14`).

- ColorLib source: `https://colorlib.com/wp/template/login-form-v14/`
- Preview URL: `https://colorlib.com/etc/lf/Login_v14/index.html` (live preview available)
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v14.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from live preview CSS (`main.css`):

| Token                      | Value                            | Usage                                                     |
| -------------------------- | -------------------------------- | --------------------------------------------------------- |
| Font family                | Raleway (Regular, Medium, SemiBold, Bold) | Body, headings, inputs, labels, buttons           |
| Page background            | `#ebebeb` (light gray)           | Full-page background behind form card                     |
| Card background            | `#ffffff` (white)                | Login card / form container                               |
| Card border-radius         | `10px`                           | Rounded corners on card                                   |
| Card width                 | `560px`                          | Fixed-width centered card                                 |
| Heading color              | `#555555` (dark gray)            | "Account Login" title                                     |
| Heading font-family        | Raleway-Medium                   | Title text                                                |
| Heading size               | `30px`                           | Title font size                                           |
| Label color                | `#555555` (dark gray)            | "Username", "Password" labels                             |
| Label font-family          | Raleway-SemiBold                 | Field labels                                              |
| Label size                 | `13px`                           | Label font size                                           |
| Input text color           | `#555555` (dark gray)            | User-typed text                                           |
| Input font-family          | Raleway-Medium                   | Input text                                                |
| Input font-size            | `18px`                           | Input text size                                           |
| Input height               | `55px`                           | Input field height                                        |
| Input border               | `1px solid #e6e6e6`              | Normal state border                                       |
| Input border-radius        | `2px`                            | Slightly rounded input                                    |
| Input focus border         | `1px solid #57b846` (green)      | Focused input border                                      |
| Input placeholder color    | `#999999` (medium gray)          | Placeholder text                                          |
| Button background          | `#333333` (near-black)           | Default button state                                      |
| Button hover background    | `#57b846` (green)                | Button hover state                                        |
| Button text color          | `#ffffff` (white)                | Button label                                              |
| Button font-family         | Raleway-Bold                     | Button text                                               |
| Button font-size           | `16px`                           | Button text size                                          |
| Button height              | `55px`                           | Button height (matches input)                             |
| Button border-radius       | `27px` (pill)                    | Fully rounded pill button                                 |
| Link color                 | `#666666` (medium gray)          | Default link text                                         |
| Link hover color           | `#57b846` (green)                | Link hover state                                          |
| "Forgot Password?" color   | `#555555` (dark gray)            | "Forgot Password?" link                                   |
| Checkbox label color       | `#999999` (medium gray)          | "Remember me" label                                       |
| Checkbox border            | `1px solid #e6e6e6`              | Unchecked checkbox border                                 |
| Checkbox checked color     | `#57b846` (green)                | Checked checkbox indicator                                |
| Validation error color     | `#c80000` (red)                  | Error tooltip text and border                             |
| Password toggle color      | `#999999` (gray), hover `#57b846` | Show/hide password eye icon                             |
| Focus animation            | Scale from 1.3→1.0 over 0.4s    | Input focus border expansion animation                    |

## Layout structure

Single centered card on a light gray full-viewport background:

1. **Full-page container** (`#ebebeb` background, flexbox centered)
2. **Login card** (white, 560px wide, 10px border-radius, centered)
   - "Account Login" heading (uppercase, left-aligned, 30px)
   - Username field (label + input with border)
   - Password field (label + input with border + show/hide toggle eye icon)
   - "Remember me" checkbox + "Forgot Password?" link (side-by-side row)
   - "Login" button (pill-shaped, near-black default → green on hover)

### Responsive behavior

- Desktop: card is 560px wide, centered on gray background
- Mobile (<576px): card padding reduces to 15px

## Requirements

### Requirement: Full-page centered layout

The template SHALL display a full-viewport-height centered login card on a light gray background.

#### Scenario: Card is centered on page

- **WHEN** the page loads
- **THEN** a white card is horizontally and vertically centered on the viewport
- **AND** the page background is `#ebebeb`

#### Scenario: Card has correct dimensions

- **WHEN** the viewport width is >= 576px
- **THEN** the card width is 560px with 10px border-radius

### Requirement: Login form heading

The card SHALL display an "Account Login" heading.

#### Scenario: Heading renders correctly

- **WHEN** the page loads
- **THEN** the heading text "Account Login" is displayed in uppercase
- **AND** the heading uses Raleway-Medium font at 30px
- **AND** the heading color is `#555555`

### Requirement: Username input field

The form SHALL include a username input field with label.

#### Scenario: Username field renders

- **WHEN** the page loads
- **THEN** a "Username" label (uppercase, Raleway-SemiBold, 13px, `#555555`) is visible
- **AND** a text input field (55px height, `#e6e6e6` border, 2px border-radius) is below the label

#### Scenario: Username field accepts text

- **WHEN** the user clicks the username input
- **THEN** the input gains focus with a green (`#57b846`) border animation
- **AND** the user can type text into the field

### Requirement: Password input field with visibility toggle

The form SHALL include a password input with a show/hide toggle.

#### Scenario: Password field renders

- **WHEN** the page loads
- **THEN** a "Password" label (uppercase, Raleway-SemiBold, 13px, `#555555`) is visible
- **AND** a password input field (55px height, `#e6e6e6` border) is below the label
- **AND** a show/hide eye icon is positioned inside the input on the right side

#### Scenario: Password toggle shows and hides password

- **WHEN** the user types a password
- **THEN** the text is masked (dots/asterisks)
- **AND** clicking the eye icon toggles the input between `type="password"` and `type="text"`

#### Scenario: Password toggle hover changes color

- **WHEN** the user hovers over the eye icon
- **THEN** the icon color changes from `#999999` to `#57b846`

### Requirement: Remember me checkbox and Forgot Password link

The form SHALL include a "Remember me" checkbox and a "Forgot Password?" link in a row.

#### Scenario: Both elements render side-by-side

- **WHEN** the page loads
- **THEN** a "Remember me" checkbox (with label in `#999999`, 13px) is visible on the left
- **AND** a "Forgot Password?" link (in `#555555`, 13px) is visible on the right

#### Scenario: Checkbox is interactive

- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox toggles between checked and unchecked
- **AND** when checked, a green (`#57b846`) checkmark appears

### Requirement: Login submit button

The form SHALL include a pill-shaped "Login" submit button.

#### Scenario: Button renders with correct style

- **WHEN** the page loads
- **THEN** the "Login" button is full-width, 55px height
- **AND** the button has 27px border-radius (pill shape)
- **AND** the default background is `#333333` with white text
- **AND** the text uses Raleway-Bold at 16px

#### Scenario: Button hover state

- **WHEN** the user hovers over the "Login" button
- **THEN** the background transitions to `#57b846` (green) over 0.4s

### Requirement: Form validation

The form SHALL validate required fields and show error messages.

#### Scenario: Empty username shows error

- **WHEN** the user submits the form without entering a username
- **THEN** an error tooltip appears near the username field with text "Username is required"
- **AND** the error text and border are red (`#c80000`)

#### Scenario: Empty password shows error

- **WHEN** the user submits the form without entering a password
- **THEN** an error tooltip appears near the password field with text "Password is required"
- **AND** the error text and border are red (`#c80000`)

### Requirement: Responsive layout

The template SHALL adapt to smaller viewports.

#### Scenario: Mobile layout adjusts padding

- **WHEN** the viewport width is < 576px
- **THEN** the card padding reduces to 15px
- **AND** the card remains centered

## Verification checklist

- [ ] Card is vertically and horizontally centered on `#ebebeb` background
- [ ] Raleway font family is loaded (Regular, Medium, SemiBold, Bold weights)
- [ ] "Account Login" heading renders in uppercase, Raleway-Medium, 30px, `#555555`
- [ ] Username field: label + text input with `#e6e6e6` border, 55px height
- [ ] Password field: label + password input with eye toggle icon
- [ ] Eye icon toggles password visibility and changes color on hover (`#999999` → `#57b846`)
- [ ] "Remember me" checkbox with label, toggles with green checkmark
- [ ] "Forgot Password?" link in `#555555`
- [ ] "Login" button: pill-shaped (27px radius), `#333333` default, `#57b846` hover, 55px height
- [ ] Input focus: green (`#57b846`) border with scale animation (1.3→1.0 over 0.4s)
- [ ] Form validation shows red (`#c80000`) error tooltips for empty required fields
- [ ] Card width is 560px on desktop, padding reduces to 15px on mobile (<576px)
- [ ] Footer links to `https://www.componentdock.com/` branded as "Component Dock"
