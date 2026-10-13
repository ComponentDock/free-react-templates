# Template: Entryway (Login Form V3)

## Purpose

Recreation of ColorLib **Login Form V3** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v3`
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v3/ (404 — using screenshot + ColorLib page)
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v3/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v3.jpg
- **New name:** `entryway` (apps/entryway, package @free-react-templates/entryway)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from screenshot)

### Colors

| Token               | Hex / Value                      | Usage                                                        |
| ------------------- | -------------------------------- | ------------------------------------------------------------ |
| Page background     | `#e8e8e8` (light gray)           | Full viewport background, city skyline image behind card     |
| Background image    | grayscale city skyline            | Aerial city photo, faded/desaturated, behind card            |
| Card gradient start | `#7c6aef` (medium purple/blue)   | Top-left of card gradient                                    |
| Card gradient end   | `#c94cf0` (vivid magenta/pink)   | Bottom-right of card gradient                                |
| Heading text        | `#ffffff`                        | "LOG IN" title (white, uppercase, letter-spaced)            |
| Input placeholder   | `#ffffffcc` (white 80%)          | "Username" / "Password" placeholder text                     |
| Input underline     | `#ffffff66` (white 40%)          | Bottom border on input fields                                |
| Input icon          | `#ffffffcc` (white 80%)          | User / lock icons beside inputs                              |
| Checkbox checked    | `#7c6aef`                        | Checked state of "Remember me" checkbox                      |
| Button background   | `#ffffff`                        | Login button (white pill)                                    |
| Button text         | `#333333`                        | Login button text (dark gray)                                |
| Link text           | `#ffffffcc` (white 80%)          | "Forgot Password?" link                                      |
| Card shadow         | `0 15px 35px rgba(0,0,0,0.2)`   | Soft shadow around card                                      |

### Fonts

| Token        | Font family              | Usage                                                  |
| ------------ | ------------------------ | ------------------------------------------------------ |
| Body         | Poppins (or similar sans)| All text — inputs, button, links, title                |
| Heading      | Poppins SemiBold 24px    | "LOG IN" — uppercase, letter-spacing 2px               |
| Input text   | Poppins Regular 14px     | Placeholder and typed input text                       |
| Button       | Poppins SemiBold 14px    | "Login" button text                                    |
| Link         | Poppins Regular 13px     | "Forgot Password?" link                                |

### Layout & Shapes

- Full viewport height, centered card layout
- Page background: light gray (#e8e8e8) with a faded/desaturated city skyline photo behind the card (CSS background-image)
- Card: centered, ~460px wide, ~500px tall, rounded corners (~20px), full gradient background (purple→magenta diagonal), subtle box-shadow
- Logo: white circle (~90px diameter) with a dark mountain/landscape icon inside, centered above heading
- Heading: "LOG IN" — white, uppercase, letter-spaced, centered below logo
- Form fields: two inputs (Username, Password) stacked vertically, each with:
  - Left icon (user/lock) in white
  - White placeholder text
  - Bottom border only (underline style), semi-transparent white
  - No background (transparent, inherits card gradient)
- Remember me: checkbox + white label text, left-aligned
- Login button: white background, rounded/pill shape, dark text, centered, ~140px wide
- Forgot Password: white link text, centered below button
- Card padding: ~50px horizontal, ~40px vertical

## Requirements

### Feature: Entryway Login Form

#### Scenario: Page renders with centered login card

- **GIVEN** the user visits the Entryway page
- **THEN** a centered login card is visible
- **AND** the card has a purple-to-magenta gradient background
- **AND** the page background shows a faded city skyline image

#### Scenario: Logo and heading are displayed

- **GIVEN** the user visits the Entryway page
- **THEN** a circular white logo area is displayed above the heading
- **AND** the heading reads "LOG IN" in white uppercase letters

#### Scenario: Username field accepts input

- **GIVEN** the user visits the Entryway page
- **WHEN** the user clicks the Username input
- **AND** types a username
- **THEN** the username text appears in the field
- **AND** the placeholder text disappears

#### Scenario: Password field masks input

- **GIVEN** the user visits the Entryway page
- **WHEN** the user clicks the Password input
- **AND** types a password
- **THEN** the password text is masked (type="password")

#### Scenario: Remember me checkbox toggles

- **GIVEN** the user visits the Entryway page
- **WHEN** the user clicks the "Remember me" checkbox
- **THEN** the checkbox becomes checked
- **WHEN** the user clicks the "Remember me" checkbox again
- **THEN** the checkbox becomes unchecked

#### Scenario: Login button is clickable

- **GIVEN** the user visits the Entryway page
- **WHEN** the user clicks the "Login" button
- **THEN** a form submission is attempted

#### Scenario: Forgot Password link is present

- **GIVEN** the user visits the Entryway page
- **THEN** a "Forgot Password?" link is visible below the login button

#### Scenario: Footer contains Component Dock link

- **GIVEN** the user visits the Entryway page
- **THEN** the footer contains a link to "https://www.componentdock.com/"

## Verification checklist

- [ ] Card is vertically and horizontally centered on viewport
- [ ] Gradient matches purple (#7c6aef) → magenta (#c94cf0) diagonal
- [ ] Logo circle is white with a dark icon inside
- [ ] "LOG IN" heading is white, uppercase, letter-spaced
- [ ] Username input has user icon + placeholder + underline border
- [ ] Password input has lock icon + placeholder + underline border + type="password"
- [ ] Remember me checkbox is functional and styled
- [ ] Login button is white pill shape with dark text
- [ ] "Forgot Password?" link is white and centered
- [ ] Footer links to Component Dock
- [ ] Background image is a faded/desaturated city skyline
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No references to ColorLib in app code
