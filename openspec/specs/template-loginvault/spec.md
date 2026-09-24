# Template: LoginVault (Login Form)

## Purpose

Recreation of ColorLib **Login Form V5** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/login-form-v5/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v5/ (404 at prep time — unreachable; design tokens extracted from downloaded screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v5.jpg
- **New name:** `loginvault` (app folder `apps/loginvault`, package `@free-react-templates/loginvault`)
- **Deploy URL:** https://loginvault.free.componentdock.com

## Design Tokens (from screenshot analysis)

### Colors

| Token | Value | Usage |
| --- | --- | --- |
| Brand gradient start | `#00d2ff` (cyan) | Bottom-left of page background |
| Brand gradient mid | `#3a7bd5` (blue) | Center of page background |
| Brand gradient end | `#e040fb` (magenta/pink) | Right side of page background |
| Card background | `#ffffff` | Login card |
| Card shadow | `rgba(0,0,0,0.1)` | Subtle drop shadow on card |
| Input background | `#f0f0f0` | Username and password input fields |
| Input border | none | Inputs have no visible border |
| Facebook button | `#3b5998` (navy blue) | Facebook social login button |
| Google button bg | `#ffffff` | Google social login button background |
| Google button border | `#e0e0e0` | Google button border |
| Sign In button | `#333333` (dark charcoal) | Primary submit button |
| Title text | `#333333` | "Sign In With" heading |
| Label text | `#333333` | "Username", "Password" labels |
| Link text | `#999999` | "Forgot?" link |
| Footer text | `#999999` | "Not a member?" text |
| Footer link | `#333333` (underlined) | "Sign up now" link |
| Decorative lines | `rgba(255,255,255,0.15)` | Network constellation overlay |

### Typography

| Element | Font | Weight | Size |
| --- | --- | --- | --- |
| Title "Sign In With" | Poppins | Regular (400) | ~28px |
| Social button text | Poppins | Medium (500) | ~16px |
| Input labels | Poppins | Regular (400) | ~14px |
| Input text | Poppins | Regular (400) | ~14px |
| "Forgot?" link | Poppins | Regular (400) | ~12px |
| Sign In button | Poppins | SemiBold (600) | ~16px |
| Footer text | Poppins | Regular (400) | ~14px |

### Shapes

| Element | Border Radius | Notes |
| --- | --- | ---|
| Card | ~12px | Rounded corners on the white card |
| Input fields | ~4px | Subtle rounding |
| Social buttons | ~4px | Slightly rounded |
| Sign In button | ~4px | Slightly rounded |

### Layout

- Full viewport, gradient background with decorative overlay
- Single centered white card (~400px wide)
- Vertical stack: title → social buttons → separator → inputs → sign in button → footer link

## Requirements

### Requirement: Page background with gradient and decorative overlay

The login page SHALL display a full-viewport gradient background from cyan to blue to magenta with decorative network/constellation line overlays.

#### Scenario: Gradient background

- **WHEN** the page loads
- **THEN** the background covers the full viewport with a linear gradient
- **AND** the gradient transitions from cyan (#00d2ff) on the bottom-left through blue (#3a7bd5) in the center to magenta (#e040fb) on the right
- **AND** the gradient angle is approximately 135 degrees (bottom-left to top-right)

#### Scenario: Decorative network overlay

- **WHEN** the page loads
- **THEN** thin white/transparent lines connecting geometric nodes appear over the gradient
- **AND** the lines create a constellation/network pattern
- **AND** the overlay has low opacity (~15%) so the gradient remains dominant

### Requirement: Centered login card

The page SHALL display a white card centered both vertically and horizontally on the viewport.

#### Scenario: Card positioning

- **WHEN** the page loads
- **THEN** a white card is centered in the viewport
- **AND** the card has a subtle drop shadow
- **AND** the card has rounded corners (~12px)
- **AND** the card width is approximately 400px with generous internal padding

### Requirement: Title

The card SHALL display the heading "Sign In With" at the top.

#### Scenario: Title appearance

- **WHEN** the page loads
- **THEN** the card displays the heading "Sign In With"
- **AND** the text is dark (#333333), Poppins Regular, ~28px
- **AND** the title is centered horizontally within the card

### Requirement: Social login buttons

The form SHALL display Facebook and Google social login buttons side by side below the title.

#### Scenario: Social button layout

- **WHEN** the page loads
- **THEN** two social login buttons are displayed side by side
- **AND** the Facebook button is on the left and the Google button is on the right
- **AND** both buttons are the same height (~44px)

#### Scenario: Facebook button appearance

- **WHEN** the page loads
- **THEN** the Facebook button has a navy blue background (#3b5998)
- **AND** the button text is white
- **AND** the button displays a Facebook icon (use lucide-react icon or SVG)
- **AND** the button has rounded corners (~4px)

#### Scenario: Google button appearance

- **WHEN** the page loads
- **THEN** the Google button has a white background (#ffffff) with a light border (#e0e0e0)
- **AND** the button text is dark (#333333)
- **AND** the button displays a Google icon (use lucide-react icon or SVG)
- **AND** the button has rounded corners (~4px)

#### Scenario: Social button hover

- **WHEN** the user hovers over a social login button
- **THEN** the button shows a subtle opacity or background change
- **AND** the cursor changes to pointer

### Requirement: Input fields

The form SHALL display username and password input fields stacked vertically with labels above them.

#### Scenario: Username input

- **WHEN** the page loads
- **THEN** a "Username" label is displayed above the username input
- **AND** the input has a light gray background (#f0f0f0)
- **AND** the input has no visible border
- **AND** the input has rounded corners (~4px)
- **AND** the input height is approximately 48px
- **AND** the input spans the full card width (minus padding)

#### Scenario: Password input with Forgot link

- **WHEN** the page loads
- **THEN** a "Password" label is displayed above the password input
- **AND** a "Forgot?" link appears next to the "Password" label
- **AND** the "Forgot?" link text is gray (#999999) and underlined
- **AND** the input has the same styling as the username input

#### Scenario: Input focus

- **WHEN** the user focuses an input field
- **THEN** a focus ring or border highlight appears
- **AND** the focus indicator uses the brand color or a neutral highlight

### Requirement: Sign In button

The form SHALL display a full-width "Sign In" button below the inputs.

#### Scenario: Button appearance

- **WHEN** the page loads
- **THEN** a full-width "Sign In" button is displayed below the password input
- **AND** the button background is dark charcoal (#333333)
- **AND** the button text is white, Poppins SemiBold, ~16px
- **AND** the button has rounded corners (~4px)
- **AND** the button height is approximately 48px

#### Scenario: Button hover

- **WHEN** the user hovers over the Sign In button
- **THEN** the button background darkens or lightens slightly
- **AND** the cursor changes to pointer

### Requirement: Sign up link

The card SHALL display a "Not a member? Sign up now" link below the Sign In button.

#### Scenario: Sign up link appearance

- **WHEN** the page loads
- **THEN** a text line "Not a member? Sign up now" is displayed centered below the button
- **AND** "Not a member?" is in gray (#999999)
- **AND** "Sign up now" is underlined and slightly darker

### Requirement: Form validation

The form SHALL validate that both username and password are provided before submission.

#### Scenario: Empty username validation

- **WHEN** the user clicks Sign In without entering a username
- **THEN** a validation message appears near the username input

#### Scenario: Empty password validation

- **WHEN** the user clicks Sign In without entering a password
- **THEN** a validation message appears near the password input

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** the page footer links to https://www.componentdock.com/
- **AND** the footer text reads "Made with Component Dock"

## Verification Checklist

- [ ] Page renders with full-viewport gradient background (cyan → blue → magenta)
- [ ] Decorative network/constellation overlay is visible over gradient
- [ ] White card is centered vertically and horizontally
- [ ] Card has rounded corners and subtle shadow
- [ ] "Sign In With" title displays centered at top of card
- [ ] Facebook and Google social buttons display side by side
- [ ] Facebook button has navy blue background, white text, icon
- [ ] Google button has white background, border, dark text, icon
- [ ] Username input has label, gray background, no border
- [ ] Password input has label, "Forgot?" link, same styling
- [ ] Input focus produces a visible highlight
- [ ] "Sign In" button is full width, dark charcoal, white text
- [ ] "Not a member? Sign up now" link displays below button
- [ ] Footer links to Component Dock
- [ ] Responsive: card scales appropriately on mobile
- [ ] Poppins font loaded via Google Fonts
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` set to `loginvault.free.componentdock.com`
- [ ] `package.json` homepage set to `https://loginvault.free.componentdock.com`
