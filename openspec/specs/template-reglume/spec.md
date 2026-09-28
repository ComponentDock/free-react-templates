# Template: Reglume (Registration Form)

## Purpose

Recreation of **ColorLib Reg Form V31** (`colorlib-regform-31`) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **ColorLib source:** https://colorlib.com/wp/template/colorlib-regform-31/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-31.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict), Vitest + Testing Library
- **Description:** A simple registration form with a single white card centered on a teal full-page background. The card contains a heading, three icon-adorned input fields (Full Name, Email, Password), and a centered Register button.

## Design Tokens

| Token                | Value                                        | Source                            |
| -------------------- | -------------------------------------------- | --------------------------------- |
| Page background      | `#5eb2b3` (teal)                             | `.page-content` CSS               |
| Card background      | `#ffffff`                                    | `.form-v5-content`                |
| Card width           | `670px`                                      | `.form-v5-content`                |
| Card border-radius   | `8px`                                        | `.form-v5-content`                |
| Card padding         | `30px 45px`                                  | `.form-v5-content`                |
| Heading text         | `Register Account Form`, bold 25px, centered | `.form-detail h2`                 |
| Heading underline    | `#3786bd`, 50px wide, 2px below heading      | `.form-detail h2::after`          |
| Font family          | Roboto (400, 700)                            | Google Fonts                      |
| Input border         | `1px solid #e5e5e5`                          | `.form-detail input`              |
| Input border-radius  | `4px`                                        | `.form-detail input`              |
| Input font-size      | `18px`                                       | `.form-detail input`              |
| Input padding        | `10.5px 15px`                                | `.form-detail input`              |
| Input focus border   | `#b3b3b3`                                    | `.form-detail input:focus`        |
| Placeholder text     | `#999`, 16px                                 | `.form-detail input::placeholder` |
| Register button bg   | `#3786bd`                                    | `.register`                       |
| Register hover       | `#2f73a3`                                    | `.register:hover`                 |
| Register btn text    | `#ffffff`                                    | `.register`                       |
| Register btn width   | `180px`                                      | `.register`                       |
| Register btn radius  | `5px`                                        | `.register`                       |
| Register btn shadow  | `0px 5px 15px rgba(0,0,0,0.2)`               | `.register`                       |
| Register btn padding | `14px`                                       | `.register`                       |
| Responsive break     | `767px` — card gets margin 175px 20px        | `@media`                          |

## Section Structure (order)

1. **Full-page background** — Teal `#5eb2b3` page, flexbox centered
2. **Card container** — White 670px card, 8px radius, padding 30px 45px
3. **Card heading** — "Register Account Form", centered, bold 25px, with blue `#3786bd` underline (50px wide, 2px below)
4. **Form fields** — 3 fields stacked vertically:
   - Full Name (User icon from lucide-react)
   - Your Email (Mail icon from lucide-react)
   - Password (Lock icon from lucide-react, type="password")
5. **Register button** — Blue `#3786bd` background, white text, centered, 180px width, box-shadow
6. **Footer** — Component Dock branded

## Requirements

### Requirement: Full-page teal background

The page SHALL render a full-height teal `#5eb2b3` background with content centered vertically and horizontally.

#### Scenario: Background fills the viewport

- **WHEN** I visit the Reglume page
- **THEN** I see a teal `#5eb2b3` background filling the entire viewport
- **AND** a white card is centered on the page

### Requirement: Card dimensions and styling

The page SHALL display a white card with specific dimensions and styling.

#### Scenario: Card has correct dimensions

- **WHEN** I view the registration card
- **THEN** the card is 670px wide with an 8px border-radius
- **AND** the card has padding of 30px top/bottom and 45px left/right
- **AND** the card has a box shadow

### Requirement: Card heading with underline

The card SHALL display a centered heading with a decorative underline.

#### Scenario: Heading is visible and styled

- **WHEN** I view the card heading
- **THEN** I see "Register Account Form" in bold 25px text
- **AND** the heading is centered horizontally
- **AND** a blue `#3786bd` underline of 50px width appears 2px below the heading

### Requirement: Form fields with icons

The form SHALL contain three input fields with associated icons.

#### Scenario: All three fields are rendered

- **WHEN** I view the registration form
- **THEN** I see a text input labeled "Full Name" with a user icon
- **AND** I see an email input labeled "Your Email" with a mail icon
- **AND** I see a password input labeled "Password" with a lock icon

#### Scenario: Inputs have correct styling

- **WHEN** I view any input field
- **THEN** the input has a `1px solid #e5e5e5` border with 4px border-radius
- **AND** the input font size is 18px
- **AND** placeholder text is gray `#999` at 16px

### Requirement: Form input focus states

The inputs SHALL change border color when focused.

#### Scenario: Input border changes on focus

- **WHEN** I focus an input field
- **THEN** the border color changes to `#b3b3b3`

### Requirement: Register button

The form SHALL contain a Register button with specific styling.

#### Scenario: Register button is visible and styled

- **WHEN** I view the register button
- **THEN** I see a "Register" button with a `#3786bd` background
- **AND** the button text is white
- **AND** the button is 180px wide and centered
- **AND** the button has a 5px border-radius
- **AND** the button has a box-shadow of `0px 5px 15px rgba(0,0,0,0.2)`

#### Scenario: Button hover state

- **WHEN** I hover over the Register button
- **THEN** the background color changes to `#2f73a3`

### Requirement: Responsive layout

The layout SHALL adapt to smaller viewports.

#### Scenario: Mobile card layout

- **WHEN** the viewport width is 767px or less
- **THEN** the card gets a margin of 175px top/bottom and 20px left/right instead of being centered

### Requirement: Footer with Component Dock link

The page SHALL display a footer with a Component Dock branded link.

#### Scenario: Footer is visible with correct link

- **WHEN** I scroll to the footer
- **THEN** I see a "Component Dock" link
- **AND** the link points to https://www.componentdock.com/
- **AND** the link opens in a new tab

## Verification Checklist

- [ ] Teal `#5eb2b3` full-page background
- [ ] White 670px card, 8px radius, 30px 45px padding
- [ ] Heading "Register Account Form" with blue underline
- [ ] 3 input fields with lucide-react icons (User, Mail, Lock)
- [ ] Inputs: `#e5e5e5` border, `#b3b3b3` focus border, 4px radius
- [ ] Register button: blue bg, white text, hover `#2f73a3`, box-shadow
- [ ] Roboto font family (Google Fonts)
- [ ] Responsive: margin change at ≤767px
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
