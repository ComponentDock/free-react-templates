# Template: Loginauth (Login Form)

## Purpose

Recreation of ColorLib **Login Form V15** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v15`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v15/index.html
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v15/
- **New name:** `loginauth` (apps/loginauth, package @free-react-templates/loginauth)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from live preview CSS)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand primary (green) | `#57b846` | Login button background, focus underline, link hover, checkbox checked |
| Page background | `#ebeeef` | Full-page light grey background |
| Card background | `#fff` | Login form card background |
| Title overlay | `rgba(54,84,99,0.7)` | Semi-transparent dark teal overlay on background image |
| Title text | `#fff` | "Sign In" heading |
| Label text | `#808080` | Input labels (Username, Password) |
| Input text | `#555555` | Typed input text |
| Placeholder text | `#999999` | Input placeholders |
| Body text | `#666666` | Paragraphs, links default |
| Link hover | `#57b846` | Link hover color (green) |
| Helper text | `#999999` | "Forgot Password?" link, checkbox label |
| Button text | `#fff` | Login button text |
| Button hover | `#333333` | Login button hover background |

### Fonts
| Token | Font family | Usage |
|-------|-------------|-------|
| Body | Poppins Regular | Body text, links, inputs, labels |
| Heading | Poppins Bold | "Sign In" title (30px, white) |
| Medium | Poppins Medium | (available weight) |
| SemiBold | Poppins SemiBold | (available weight) |

### Layout & Shapes
- Full viewport height (100vh), flex centered, background `#ebeeef`
- Login card: white (`#fff`), 670px wide, border-radius 10px, overflow hidden
- Title area: full-width background image with dark teal overlay `rgba(54,84,99,0.7)`, padding 70px top / 74px bottom
- Title text: "Sign In", Poppins Bold, 30px, white, centered
- Form area: padded (43px top, 88px right, 93px bottom, 190px left)
- Input fields: transparent background, bottom-border focus animation (green `#57b846`), height 45px
- Input labels: Poppins Regular, 15px, `#808080`, positioned above input
- Focus underline: 1px green (`#57b846`) line that expands from 0 to 100% width on focus
- "Remember me" checkbox: custom styled, checked state green `#57b846`
- "Forgot Password?" link: `#999999` default, hover green `#57b846`
- Login button: full-width, 50px height, background `#57b846`, border-radius 25px (pill), white text, Poppins Regular 16px, hover → `#333333`

## Gherkin requirements

### Background: page layout
Given the user visits the login page
Then the page background is light grey (#ebeeef)
And a centered white login card is visible
And the card has rounded corners (border-radius 10px)

### Scenario: title banner
Given the login card is visible
Then a full-width title banner is displayed at the top of the card
And the banner has a background image with a semi-transparent dark teal overlay
And the title text "Sign In" is displayed in white, Poppins Bold, 30px

### Scenario: username input
Given the login form is visible
When the user views the username field
Then the label "Username" is displayed above the input
And the placeholder text reads "Enter username"
And the input accepts text

### Scenario: password input
Given the login form is visible
When the user views the password field
Then the label "Password" is displayed above the input
And the placeholder text reads "Enter password"
And the input is of type password

### Scenario: input focus animation
Given the login form is visible
When the user focuses on an input field
Then a green underline (#57b846) expands from left to right below the input

### Scenario: remember me checkbox
Given the login form is visible
When the user checks "Remember me"
Then the checkbox is checked
And the checkbox checkmark is green (#57b846)

### Scenario: forgot password link
Given the login form is visible
When the user hovers over "Forgot Password?"
Then the link color changes to green (#57b846)

### Scenario: login button
Given the login form is visible
When the user views the login button
Then the button reads "Login"
And the button background is green (#57b846)
And the button text is white
And the button has rounded pill shape (border-radius 25px)
And the button is full width

### Scenario: login button hover
Given the login button is visible
When the user hovers over the login button
Then the button background changes to dark (#333333)

### Scenario: validation — empty username
Given the login form is visible
When the user submits without entering a username
Then a validation message "Username is required" is displayed

### Scenario: validation — empty password
Given the login form is visible
When the user submits without entering a password
Then a validation message "Password is required" is displayed

## Verification checklist
- [ ] Card is centered on screen with correct background color (#ebeeef)
- [ ] Title banner shows background image with dark overlay
- [ ] "Sign In" heading in correct font/size/color
- [ ] Username input with label and placeholder
- [ ] Password input with label and placeholder
- [ ] Green focus underline animation on input focus
- [ ] "Remember me" checkbox with green checked state
- [ ] "Forgot Password?" link with hover color change
- [ ] Login button with correct green color and pill shape
- [ ] Button hover turns dark
- [ ] Form validates required fields
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Specs/docs only contain source references
