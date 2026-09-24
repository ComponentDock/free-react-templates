# Template: LoginNova (Login Form V20)

## Purpose

Recreation of ColorLib **Login Form V20** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v20`
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v20/ (404 — using screenshot + source CSS)
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v20/
- **Source HTML:** https://colorlib.com/etc/lf/Login_v20/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v20.jpg
- **New name:** `loginnova` (apps/loginnova, package @free-react-templates/loginnova)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from source CSS + screenshot)

### Colors

| Token               | Hex / Value            | Usage                                              |
| ------------------- | ---------------------- | -------------------------------------------------- |
| Page background     | gradient               | `linear-gradient(left, #6a11cb, #2575fc)` — purple-to-blue full viewport |
| Background purple   | `#6a11cb`              | Gradient start (left side)                         |
| Background blue     | `#2575fc`              | Gradient end (right side)                          |
| Heading text        | `#fefefe`              | "ACCOUNT LOGIN" title (near-white)                 |
| Input background    | `#ffffff`              | Username and password field backgrounds            |
| Input border        | `#e0e0e0`              | Border on input fields                             |
| Input text          | `#555555`              | Typed input text, label default color              |
| Label default       | `#555555`              | Field labels at rest (OpenSans Bold 15px)          |
| Label focused       | `#111111`              | Label color on focus/has-value (shrinks to 13px)   |
| Button background   | `#111111`              | SIGN IN button default (near-black)                |
| Button hover        | transparent → gradient | Button becomes transparent, gradient ::before appears |
| Button gradient     | `linear-gradient(right, #6a11cb, #2575fc)` | Button hover gradient (matches page bg) |
| Button text         | `#ffffff`              | SIGN IN button text                                |
| Link text           | `#cccccc`              | "Forgot password?" link (light gray)               |
| Link hover          | `#ffffff`              | Link hover turns white                             |
| Placeholder         | `#999999`              | Input placeholder text                             |
| Validation border   | `#c80000`              | Alert-validate border for invalid input             |
| Validation icon     | `#c80000`              | Alert-validate icon color                           |

### Fonts

| Token        | Font family          | Usage                                       |
| ------------ | -------------------- | ------------------------------------------- |
| Body         | OpenSans Regular     | Body text, links, paragraphs (14px)         |
| Heading      | OpenSans Regular     | "ACCOUNT LOGIN" title (30px, uppercase)     |
| Label        | OpenSans Bold        | Field labels "Username"/"Password" (15px)   |
| Input text   | OpenSans Bold        | Typed input text (15px)                     |
| Button       | OpenSans Bold        | "SIGN IN" button text (15px, uppercase)     |
| Footer link  | OpenSans Regular     | "Forgot password?" (13px, #cccccc)          |

### Layout & Shapes

- Full viewport height, centered layout with purple-to-blue gradient background
- No visible card/container — inputs and button float on the gradient
- Title "ACCOUNT LOGIN": centered above inputs, white, uppercase, OpenSans Regular 30px
- Input fields: side-by-side (50% each), white background, border 1px solid #e0e0e0, border-bottom: none
  - Left input (Username): border-top-left-radius 12px, no right border
  - Right input (Password): border-top-right-radius 12px
  - Height: 75px default, collapses to 55px on focus/has-value
  - Labels: absolute positioned, slide up + shrink on focus (0.4s transition)
- SIGN IN button: full width, 70px height, border-bottom-left/right-radius 12px, near-black (#111111) background
  - Hover: background becomes transparent, gradient ::before fades in (opacity 0→1, 0.4s)
- "Forgot password?" link: centered below button, OpenSans Regular 13px, #cccccc, white on hover
- Responsive: below 576px, inputs stack vertically (100% width each)

## Requirements

### Requirement: Renders gradient background with centered form

The login page SHALL display a full-viewport purple-to-blue gradient background with a centered login form.

#### Scenario: Gradient background is visible

- **WHEN** the page loads
- **THEN** the full viewport has a linear gradient from purple (#6a11cb) on the left to blue (#2575fc) on the right

#### Scenario: Form is centered

- **WHEN** the page loads
- **THEN** the form container (560px wide) is centered both vertically and horizontally

### Requirement: Renders "ACCOUNT LOGIN" heading

The form SHALL display a white uppercase heading above the input fields.

#### Scenario: Heading is visible

- **WHEN** the login form renders
- **THEN** "ACCOUNT LOGIN" text is displayed centered above the inputs
- **AND** the heading is white (#fefefe), OpenSans Regular 30px, uppercase

### Requirement: Renders side-by-side username and password inputs

The form SHALL include username and password inputs displayed side by side with floating labels.

#### Scenario: Inputs are side by side on desktop

- **WHEN** the viewport is wider than 576px
- **THEN** username and password fields are displayed side by side, each taking 50% width
- **AND** username has border-top-left-radius 12px
- **AND** password has border-top-right-radius 12px

#### Scenario: Labels float on focus

- **WHEN** the user focuses an input field
- **THEN** the label slides upward (top: 28px → 10px)
- **AND** the label font size shrinks from 15px to 13px
- **AND** the label color changes from #555555 to #111111
- **AND** the input height shrinks from 75px to 55px

#### Scenario: Inputs stack on mobile

- **WHEN** the viewport is narrower than 576px
- **THEN** both inputs stack vertically at 100% width
- **AND** both get border-top-right-radius 12px

### Requirement: Renders dark SIGN IN button with gradient hover

The form SHALL include a full-width dark button that reveals a gradient on hover.

#### Scenario: Button is visible

- **WHEN** the login form renders
- **THEN** a "SIGN IN" button is displayed full-width below the inputs
- **AND** the button has near-black (#111111) background
- **AND** the button height is 70px
- **AND** the button has border-bottom-left-radius and border-bottom-right-radius of 12px
- **AND** the text is white, uppercase, OpenSans Bold 15px

#### Scenario: Button hover shows gradient

- **WHEN** the user hovers over the SIGN IN button
- **THEN** the background becomes transparent
- **AND** a purple-to-blue gradient (#6a11cb → #2575fc) fades in (opacity 0→1, 0.4s)

### Requirement: Renders "Forgot password?" link

The form SHALL display a centered "Forgot password?" link below the button.

#### Scenario: Link is visible

- **WHEN** the login form renders
- **THEN** "Forgot password?" text is displayed centered below the button
- **AND** the link color is light gray (#cccccc)

#### Scenario: Link hover turns white

- **WHEN** the user hovers over the "Forgot password?" link
- **THEN** the text color changes to white (#ffffff)

### Requirement: Input validation displays error messages

The form SHALL validate inputs and display error messages for invalid data.

#### Scenario: Empty username submission shows error

- **WHEN** the user submits the form with an empty username field
- **THEN** an error message "Username is required" is displayed

#### Scenario: Empty password shows error

- **WHEN** the user submits the form with an empty password field
- **THEN** an error message "Password is required" is displayed

## Verification checklist

- [ ] Page background is full-viewport purple-to-blue gradient
- [ ] "ACCOUNT LOGIN" heading is white, uppercase, centered, 30px
- [ ] Username and password inputs are side by side on desktop (50% each)
- [ ] Inputs have white background, 1px border, no bottom border
- [ ] Username input has top-left radius 12px, password has top-right radius 12px
- [ ] Floating labels animate on focus (shrink + slide up, 0.4s)
- [ ] SIGN IN button is full-width, 70px tall, near-black, bottom radius 12px
- [ ] Button hover reveals purple-to-blue gradient (0.4s fade)
- [ ] "Forgot password?" link is centered, light gray, white on hover
- [ ] Inputs stack vertically on mobile (< 576px)
- [ ] All typography uses OpenSans font family
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
