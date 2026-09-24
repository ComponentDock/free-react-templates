# Template: LoginCore (Login Form V2)

## Purpose

Recreation of ColorLib **Login Form V2** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v2`
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v2/ (404 — using screenshot + source CSS)
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v2/
- **Source HTML:** https://colorlib.com/etc/lf/Login_v2/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v2.jpg
- **New name:** `logincore` (apps/logincore, package @free-react-templates/logincore)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from source CSS + screenshot)

### Colors

| Token               | Hex / Value            | Usage                                              |
| ------------------- | ---------------------- | -------------------------------------------------- |
| Page background     | `#f2f2f2`              | Full viewport light gray background                |
| Form background     | `#ffffff`              | Login card background                              |
| Card shadow         | `rgba(0,0,0,0.1)`      | `0 5px 10px 0px` card box-shadow                   |
| Brand cyan          | `#21d4fd`              | Gradient start (button, focus underline, link hover) |
| Brand purple        | `#b721ff`              | Gradient end (button, focus underline, link hover)  |
| Heading text        | `#333333`              | "Welcome" heading, "Sign Up" link                   |
| Input text          | `#555555`              | Typed input text color                              |
| Input border        | `#adadad`              | Bottom border on input fields (2px)                 |
| Focus underline     | gradient               | `linear-gradient(left, #21d4fd, #b721ff)` — 2px expanding underline |
| Placeholder         | `#999999`              | Placeholder label text, show-password icon          |
| Body text           | `#666666`              | Paragraphs, links, "Don't have an account?" text    |
| Link hover          | gradient               | `linear-gradient(left, #21d4fd, #b721ff)` — gradient text color |
| Button text         | `#ffffff`              | LOGIN button text                                  |
| Validation border   | `#c80000`              | Alert-validate border for invalid input             |
| Validation icon     | `#c80000`              | Alert-validate icon color                           |

### Fonts

| Token        | Font family          | Usage                                       |
| ------------ | -------------------- | ------------------------------------------- |
| Body         | Poppins Regular      | Body text, inputs, labels, links (14px)     |
| Heading      | Poppins Bold         | "Welcome" heading (30px)                    |
| Avatar icon  | Material Design Iconic | "A" initial icon below heading (60px)      |
| Button       | Poppins Medium       | LOGIN button text (15px, uppercase)         |
| Footer text  | Poppins Regular      | "Don't have an account?" (13px, #666666)    |
| Footer link  | Poppins Regular      | "Sign Up" link (13px, #333333)              |
| Placeholder  | Poppins Regular      | Floating label text (15px, #999999)         |
| Show-pass    | Material Design Iconic| Eye icon for password toggle                |

### Layout & Shapes

- Full viewport height, centered layout with light gray (#f2f2f2) background
- Login card: white, 390px wide, border-radius 10px, centered vertically and horizontally
- Card padding: 77px top/bottom sides 55px, 33px bottom
- Card shadow: `0 5px 10px 0px rgba(0, 0, 0, 0.1)`
- "Welcome" heading: centered, Poppins Bold 30px, #333333
- Avatar icon: letter "A" in dark square below heading (Material Design Iconic Font, 60px)
- Input fields: full width, height 45px, bottom-border only (2px solid #adadad), transparent background
- Floating label: slides up on focus (transition 0.4s), placeholder becomes label
- Focus state: bottom border animates to gradient underline (linear-gradient(left, #21d4fd, #b721ff))
- Show-password toggle: eye icon at right of password field, gradient on hover
- LOGIN button: full width, height 50px, pill shape (border-radius 25px), gradient background sliding in on hover
- Button hover: gradient background (linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff)) slides from left to fill
- Footer: centered "Don't have an account? Sign Up" below button, padding-top 115px
- Responsive: card padding reduces on mobile (max-width: 576px)

## Requirements

### Requirement: Renders centered login card on gray background

The login page SHALL display a centered white card on a light gray full-viewport background.

#### Scenario: Card is centered on desktop

- **WHEN** the page loads on a viewport wider than 576px
- **THEN** a white card (390px wide, 10px border-radius, subtle shadow) is centered both vertically and horizontally
- **AND** the page background is light gray (#f2f2f2)

#### Scenario: Responsive card on mobile

- **WHEN** the page loads on a viewport narrower than 576px
- **THEN** the card maintains its shape but with reduced horizontal padding (15px)

### Requirement: Renders welcome heading and avatar icon

The card SHALL display a bold "Welcome" heading and an avatar initial icon.

#### Scenario: Heading is visible

- **WHEN** the login card renders
- **THEN** "Welcome" text is displayed centered at the top of the card
- **AND** the heading uses Poppins Bold font at 30px size
- **AND** the heading color is dark gray (#333333)

#### Scenario: Avatar icon is visible below heading

- **WHEN** the login card renders
- **THEN** a decorative initial/icon is displayed centered below the heading
- **AND** the icon is approximately 60px in size

### Requirement: Renders email input with floating label

The form SHALL include an email input field with a floating label animation.

#### Scenario: Empty email field shows placeholder

- **WHEN** the email field is empty and not focused
- **THEN** a "Email" placeholder label is displayed inside the field
- **AND** the label color is gray (#999999)

#### Scenario: Focused email field animates label

- **WHEN** the user focuses the email input
- **THEN** the "Email" label slides upward above the input
- **AND** the bottom border animates from gray (#adadad) to a cyan-to-purple gradient
- **AND** the animation takes 0.4 seconds

#### Scenario: Email field with value shows label above

- **WHEN** the email field contains a value
- **THEN** the "Email" label is positioned above the input text

### Requirement: Renders password input with show/hide toggle

The form SHALL include a password input with a toggle to show/hide the password.

#### Scenario: Password field shows eye icon

- **WHEN** the password field renders
- **THEN** an eye icon is displayed at the right end of the field
- **AND** the icon color is gray (#999999)

#### Scenario: Eye icon toggles password visibility

- **WHEN** the user clicks the eye icon
- **THEN** the password field type toggles between "password" and "text"
- **AND** the icon changes to indicate visible/hidden state

#### Scenario: Eye icon hover shows gradient

- **WHEN** the user hovers over the eye icon
- **THEN** the icon color changes to the brand gradient (cyan-to-purple)

### Requirement: Renders gradient LOGIN button

The form SHALL include a full-width pill-shaped LOGIN button with a gradient hover animation.

#### Scenario: Button is visible with gradient background

- **WHEN** the login form renders
- **THEN** a "LOGIN" button is displayed full-width below the input fields
- **AND** the button has pill shape (border-radius 25px)
- **AND** the button height is 50px
- **AND** the button text is white, uppercase, Poppins Medium 15px

#### Scenario: Button hover shows sliding gradient

- **WHEN** the user hovers over the LOGIN button
- **THEN** a gradient background (cyan #21d4fd to purple #b721ff) slides in from the left
- **AND** the animation takes 0.4 seconds

### Requirement: Renders sign-up footer link

The card SHALL display a "Don't have an account? Sign Up" text below the button.

#### Scenario: Footer text is visible

- **WHEN** the login card renders
- **THEN** "Don't have an account?" text is displayed centered below the button
- **AND** "Sign Up" appears as a clickable link next to it
- **AND** the text color is gray (#666666) and the link color is dark (#333333)

#### Scenario: Sign Up link hover

- **WHEN** the user hovers over the "Sign Up" link
- **THEN** the text color changes to the brand gradient

### Requirement: Input validation displays error messages

The form SHALL validate inputs and display error messages for invalid data.

#### Scenario: Empty email submission shows error

- **WHEN** the user submits the form with an empty email field
- **THEN** an error message is displayed near the email field
- **AND** the error message border is red (#c80000)

#### Scenario: Invalid email shows error

- **WHEN** the user enters an invalid email format
- **THEN** an error message "Valid email is: a@b.c" is displayed

#### Scenario: Empty password shows error

- **WHEN** the user submits the form with an empty password field
- **THEN** an error message "Enter password" is displayed

## Verification checklist

- [ ] Page background is full-viewport light gray (#f2f2f2)
- [ ] White card is centered vertically and horizontally
- [ ] Card has 10px border-radius and subtle box-shadow
- [ ] "Welcome" heading is Poppins Bold 30px, centered, #333333
- [ ] Avatar icon displays below heading
- [ ] Email input has floating label animation (0.4s transition)
- [ ] Focus state shows gradient underline (cyan to purple)
- [ ] Password field has eye toggle icon
- [ ] Eye icon toggles password visibility
- [ ] LOGIN button is full-width, pill-shaped (border-radius 25px)
- [ ] Button hover shows sliding gradient animation
- [ ] "Don't have an account? Sign Up" footer is centered below button
- [ ] All typography uses Poppins font family
- [ ] Responsive: card padding reduces on mobile (< 576px)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
