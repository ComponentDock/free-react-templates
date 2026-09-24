# Template: LoginCrest (Login Form)

## Purpose

Recreation of ColorLib **Login Form V19** (slug: `login-form-v19`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/login-form-v19/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v19/ (404 — preview no longer available; design captured from screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v19.jpg
- **New name:** `logincrest` (app folder `apps/logincrest`, package `@free-react-templates/logincrest`)
- **Deploy URL:** https://logincrest.free.componentdock.com
- **Description:** "Neat, simple and minimalist free login form template" — a centered white card on a light ice-blue background with email/password fields, a blue SIGN IN button, and two text links.

## Design tokens

Extracted from screenshot (preview unavailable):

| Token                      | Value                                          | Usage                                                    |
| -------------------------- | ---------------------------------------------- | -------------------------------------------------------- |
| Font family                | Roboto / sans-serif (system-like)              | Body, headings, form labels, inputs                      |
| Page background            | `#e8f6fa` (very light ice blue)                | Full-page background                                     |
| Card background            | `#ffffff` (white)                              | Login card                                               |
| Card shadow                | `0 2px 12px rgba(0,0,0,0.08)` (subtle)        | Card elevation                                           |
| Card border-radius         | `8px`                                          | Card corners                                             |
| Card padding               | `40px 50px`                                    | Inner card spacing                                       |
| Card max-width             | `~400px`                                       | Card horizontal constraint                               |
| Heading color              | `#555555` (medium gray)                        | "Account Login" title                                    |
| Heading font-weight        | `400` (regular, not bold)                      | Title weight                                             |
| Heading font-size          | `28px`                                         | Title size                                               |
| Input border               | `1px solid #dddddd` (light gray)               | All input borders (full box, not bottom-only)            |
| Input border-radius        | `4px`                                          | Input corners                                            |
| Input height               | `~48px`                                        | Input field height                                       |
| Input padding              | `12px 16px`                                    | Inner input spacing                                      |
| Input placeholder color    | `#999999` (medium gray)                        | Placeholder text                                         |
| Input text color           | `#333333` (dark gray)                          | Typed text                                               |
| Button background          | `#5468d4` (medium blue)                        | SIGN IN button                                           |
| Button text color          | `#ffffff` (white)                              | Button label                                             |
| Button text-transform      | `uppercase`                                    | "SIGN IN"                                                |
| Button letter-spacing      | `1px`                                          | Uppercase tracking                                       |
| Button border-radius       | `4px`                                          | Button corners                                           |
| Button font-weight         | `500` (medium)                                 | Button label weight                                      |
| Button padding             | `14px 0`                                       | Button vertical/horizontal                               |
| Link color                 | `#5468d4` (same blue as button)               | "Username / Password?" and "Sign up" links               |
| Link text color (non-link) | `#888888` (gray)                               | "Forgot" and "Create an account?" text                   |
| Gap between inputs         | `0` (inputs are flush, sharing borders)        | Stacked without gap                                      |
| Gap between button & links | `~20px`                                        | Spacing below button                                     |

## Layout structure

Single-section centered page:

1. **Full-page background**: Light ice-blue (`#e8f6fa`) covering the entire viewport.
2. **Centered card** (white, rounded, shadowed):
   - **Heading**: "Account Login" centered, regular weight, gray text.
   - **Email input**: Full-width, light gray border, placeholder "Email".
   - **Password input**: Full-width, light gray border, placeholder "Password", stacked directly below email (flush border).
   - **SIGN IN button**: Full-width blue button, uppercase white text.
   - **Forgot link**: "Forgot Username / Password?" — "Forgot" in gray, link in blue.
   - **Sign up link**: "Create an account? Sign up" — "Create an account?" in gray, link in blue.

### Responsive behavior

- Desktop: Card is horizontally and vertically centered with max-width ~400px.
- Mobile (<480px): Card takes more width, padding reduces, text stays centered.

## Requirements

### Requirement: Full-page ice-blue background

The template SHALL display a light ice-blue background covering the entire viewport.

#### Scenario: Background color

- **WHEN** the page loads
- **THEN** the body background is `#e8f6fa` (light ice blue)

### Requirement: Centered white login card

The template SHALL display a white card centered both vertically and horizontally on the page.

#### Scenario: Card positioning

- **WHEN** the page loads
- **THEN** a white card is centered in the viewport
- **AND** the card has rounded corners (border-radius ~8px)
- **AND** the card has a subtle box shadow
- **AND** the card has a max-width of approximately 400px

#### Scenario: Card is responsive

- **WHEN** the viewport width is less than 480px
- **THEN** the card width expands to fill most of the viewport
- **AND** the card horizontal padding reduces

### Requirement: "Account Login" heading

The card SHALL display an "Account Login" heading in regular weight gray text.

#### Scenario: Heading appearance

- **WHEN** the page loads
- **THEN** the text "Account Login" is visible and centered inside the card
- **AND** the heading color is `#555555` (medium gray)
- **AND** the heading font-weight is regular (400), not bold

### Requirement: Email input field

The card SHALL display an email input field with light gray border.

#### Scenario: Email input renders

- **WHEN** the page loads
- **THEN** an email input field is visible with placeholder "Email"
- **AND** the input has a `1px solid #dddddd` border on all sides
- **AND** the input spans the full width of the card (minus padding)

### Requirement: Password input field

The card SHALL display a password input field stacked directly below the email input.

#### Scenario: Password input renders

- **WHEN** the page loads
- **THEN** a password input field is visible with placeholder "Password"
- **AND** the input is stacked directly below the email input with no gap (flush borders)
- **AND** the input has the same styling as the email input

### Requirement: SIGN IN button

The card SHALL display a full-width blue "SIGN IN" button.

#### Scenario: Button appearance

- **WHEN** the page loads
- **THEN** a button labeled "SIGN IN" (uppercase) is visible below the inputs
- **AND** the button background is `#5468d4` (medium blue)
- **AND** the button text is white and uppercase with letter spacing
- **AND** the button spans the full width of the card (minus padding)
- **AND** the button has rounded corners (~4px)

#### Scenario: Button hover

- **WHEN** the user hovers over the SIGN IN button
- **THEN** the button background darkens slightly (e.g. `#4759c5`)

### Requirement: Forgot password link

The card SHALL display a "Forgot Username / Password?" text with a blue link.

#### Scenario: Forgot link renders

- **WHEN** the page loads
- **THEN** the text "Forgot Username / Password?" is visible centered below the button
- **AND** "Forgot" is in gray text (`#888888`)
- **AND** "Username / Password?" is a blue link (`#5468d4`)

### Requirement: Sign up link

The card SHALL display a "Create an account? Sign up" text with a blue link.

#### Scenario: Sign up link renders

- **WHEN** the page loads
- **THEN** the text "Create an account? Sign up" is visible centered below the forgot link
- **AND** "Create an account?" is in gray text (`#888888`)
- **AND** "Sign up" is a blue link (`#5468d4`)

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** a "More templates at Component Dock" link is visible
- **AND** it links to https://www.componentdock.com/

### Requirement: No ColorLib references in app code

The app source code SHALL NOT contain any references to ColorLib, colorlib.com, or preview.colorlib.com.

#### Scenario: No provenance in code

- **WHEN** any file in `apps/logincrest/src/` is searched
- **THEN** no matches for "colorlib" (case-insensitive) are found

## Verification checklist

- [ ] Centered white card on ice-blue background
- [ ] "Account Login" heading (regular weight, gray)
- [ ] Email input with full border, placeholder "Email"
- [ ] Password input flush below email, placeholder "Password"
- [ ] Full-width blue "SIGN IN" button (uppercase, white text)
- [ ] "Forgot Username / Password?" link (mixed gray/blue)
- [ ] "Create an account? Sign up" link (mixed gray/blue)
- [ ] Responsive: card adapts to mobile viewports
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app source
- [ ] 100% test coverage
- [ ] Build passes
