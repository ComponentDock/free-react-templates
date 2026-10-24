# Template: Logingrove (Login Form)
<!-- prep-status: shipped-as=gatepost -->
> **SHIPPED-UNDER** — the ColorLib `login-form-v16` design this prep describes already
> ships as `apps/gatepost` (<https://gatepost.free.componentdock.com>).
> Do not scaffold `apps/logingrove`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-gatepost/spec.md`.

## Purpose

Recreation of ColorLib **Login Form V16** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v16`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v16/index.html
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v16/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v16.jpg
- **New name:** `logingrove` (apps/logingrove, package @free-react-templates/logingrove)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from live preview CSS)

### Colors

| Token                     | Hex / Value                            | Usage                                                        |
| ------------------------- | -------------------------------------- | ------------------------------------------------------------ |
| Brand gradient start      | `#a445b2` (purple)                    | Button background, focus underline gradient start            |
| Brand primary             | `#d41872` (pink/magenta)              | Button background center, focus underline center, icon color on focus |
| Brand gradient end        | `#fa4299` (light pink)                | Button background end, focus underline gradient end          |
| Button hover background   | `#555555` (dark gray)                 | Button hover pseudo-element                                  |
| Card background           | `#ffffff` (white)                      | Login form card                                              |
| Page background overlay   | `rgba(0, 0, 0, 0.65)` (dark)          | Semi-transparent overlay over background image               |
| Input text color          | `#555555` (dark gray)                 | Input field text                                             |
| Input placeholder color   | `#555555` (dark gray)                 | Placeholder text                                             |
| Input border-bottom       | `#e6e6e6` (light gray)               | Input field bottom border                                    |
| Input focus icon color    | `#d41872` (pink/magenta)             | Icon color on input focus                                    |
| Link color                | `#666666` (medium gray)               | Anchor text                                                  |
| Title color               | `#ffffff` (white)                      | "Account Login" title text                                   |
| Validation error color    | `#c80000` (red)                       | Validation alert text and border                             |

### Typography

| Token            | Font / Value                      | Usage                                  |
| ---------------- | --------------------------------- | -------------------------------------- |
| Font family      | `Ubuntu` (Ubuntu-Regular, Ubuntu-Bold) | All text; self-hosted Google Font   |
| Title            | Ubuntu-Bold, 28px, uppercase, white, centered | "Account Login" heading |
| Button text      | Ubuntu-Bold, 18px, uppercase, white, centered | Login button |
| Input text       | Ubuntu-Regular, 20px, dark gray   | Username/password fields               |
| Body             | Ubuntu-Regular, 14px, `#666666`   | Body/paragraph text                    |

### Shapes & Layout

| Token                | Value        | Notes                                                    |
| -------------------- | ------------ | -------------------------------------------------------- |
| Card width           | 390px        | Centered on screen                                       |
| Card border-radius   | 10px         | Rounded corners                                          |
| Card background      | `#fff`       | Solid white                                              |
| Button border-radius | 21px         | Pill/fully-rounded shape                                 |
| Button min-width     | 160px        | Minimum button width                                     |
| Button height        | 42px         | Fixed height                                             |
| Input height         | 50px         | Fixed height for input fields                            |
| Input padding-left   | 80px (default), 60px (focused) | Space for left icon; shifts on focus   |
| Focus underline      | 1px gradient | Animated width 0 → 100% on focus                         |
| Background           | Full-viewport image | `images/bg-01.jpg` with 65% dark overlay           |

## Requirements

### Feature: Logingrove Login Form

  Background:
- **GIVEN** the user navigates to the logingrove login page
- **THEN** the full-screen background image is displayed with a dark overlay
- **AND** a centered white login card is visible

#### Scenario: Card renders with correct structure

- **GIVEN** the login card is displayed
- **THEN** the card has rounded corners (border-radius 10px)
- **AND** the card width is approximately 390px
- **AND** the card background is white (#ffffff)

#### Scenario: Title is displayed correctly

- **GIVEN** the login card is visible
- **THEN** the heading reads "Account Login"
- **AND** the heading is uppercase
- **AND** the heading text is white (#ffffff)
- **AND** the heading font is Ubuntu Bold 28px

#### Scenario: Username input field

- **GIVEN** the login form is displayed
- **THEN** a username input field is present
- **AND** the input placeholder text reads "User name"
- **AND** the input has a bottom border (#e6e6e6)
- **WHEN** the user clicks the username input
- **THEN** a gradient underline animates from 0% to 100% width
- **AND** the gradient colors transition from purple (#a445b2) to pink (#d41872) to light pink (#fa4299)
- **AND** the input left padding shrinks from 80px to 60px

#### Scenario: Password input field

- **GIVEN** the login form is displayed
- **THEN** a password input field is present
- **AND** the input placeholder text reads "Password"
- **WHEN** the user clicks the password input
- **THEN** a gradient underline animates from 0% to 100% width

#### Scenario: Login button styling

- **GIVEN** the login form is displayed
- **THEN** the login button is displayed
- **AND** the button text reads "Login" in uppercase
- **AND** the button has a pill shape (border-radius 21px)
- **AND** the button background is a gradient from #a445b2 to #d41872 to #fa4299
- **WHEN** the user hovers over the login button
- **THEN** the button background transitions to transparent
- **AND** a dark gray (#555555) background appears underneath

#### Scenario: Input field focus animations

- **GIVEN** the login form is displayed
- **WHEN** the user focuses the username input
- **THEN** the focus underline appears with gradient colors
- **AND** the input text shifts left
- **WHEN** the user focuses the password input
- **THEN** the focus underline appears with gradient colors

#### Scenario: Form submission

- **GIVEN** the login form is displayed
- **WHEN** the user enters a username and password
- **AND** clicks the Login button
- **THEN** the form submits

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile device
- **THEN** the login card remains centered
- **AND** the card width adapts to the viewport

#### Scenario: Footer links to Component Dock

- **GIVEN** the page footer is visible
- **THEN** a link to "https://www.componentdock.com/" is present
- **AND** the link text mentions "Component Dock"

## Verification checklist

- [ ] Card renders centered with 10px border-radius on white background
- [ ] "Account Login" title is white, uppercase, Ubuntu Bold 28px
- [ ] Username input with "User name" placeholder, 80px left padding for icon
- [ ] Password input with "Password" placeholder, 80px left padding for icon
- [ ] Focus underline gradient animation (purple → pink → light pink)
- [ ] Login button pill-shaped (21px radius), gradient background
- [ ] Button hover transitions to transparent with gray pseudo-element
- [ ] Full-viewport background image with 65% dark overlay
- [ ] Responsive: card stays centered and adapts on mobile
- [ ] Footer includes Component Dock link
- [ ] No references to ColorLib in app code
- [ ] Uses Ubuntu font (Google Fonts or self-hosted)
- [ ] Design tokens captured in Tailwind @theme
