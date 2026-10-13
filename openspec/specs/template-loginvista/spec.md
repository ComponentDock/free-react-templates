# Template: LoginVista (Login Form)

## Purpose

Recreation of ColorLib **Login Form V12** — a full-screen, centered login page
with user avatar, name display, and styled form fields on a city-skyline
background with blue gradient overlay.

- **Source slug:** `login-form-v12`
- **Source URL:** https://colorlib.com/wp/template/login-form-v12/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v12/ (returns 404 as of 2026-09-24; screenshot used as primary reference)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from screenshot)

| Token               | Value                                                  |
|---------------------|--------------------------------------------------------|
| Background gradient  | Top-to-bottom: `#1a8ccc` (deep sky blue) → `#00d4aa` (teal/aqua) |
| Background image     | City skyline (semi-transparent behind gradient overlay) |
| Form card / overlay  | Semi-transparent or none — form sits directly on the gradient |
| Avatar               | Circular, white border ring (~3px), stock photo placeholder |
| Avatar size          | ~120px diameter                                        |
| User name text       | White, bold, ~24px, centered below avatar              |
| Input fields         | White background, large pill border-radius (~25px), light gray border (~1px solid #e0e0e0), padding ~14px horizontal, left icon slot |
| Input font           | Sans-serif (Poppins or similar)                        |
| Input placeholder    | Gray (#999–#aaa)                                       |
| Input icons          | Person icon (username), lock icon (password) — gray    |
| Button               | Full-width, dark charcoal (#3c3c3c–#434343), white text, large pill radius (~25px), ~50px height |
| Button hover         | Slightly lighter dark or opacity change                |
| "Forgot" link        | Blue/teal (#0097e6–#00bcd4), ~14px, centered below button |
| "Create new account" | Blue/teal (#0097e6–#00bcd4), with right-arrow icon, centered at bottom |
| Font family          | "Poppins", sans-serif                                  |
| Overall aesthetic    | Clean, modern, centered card-less layout — the form is not inside a card/panel; fields float directly on the gradient background |

## Requirements

### Feature: LoginVista — Full-screen login with avatar

#### Scenario: Page loads with avatar and user name

- **GIVEN** the user navigates to the LoginVista page
- **THEN** a circular avatar image is displayed centered at the top
- **AND** a user name "John Doe" is displayed in white below the avatar

#### Scenario: Username field

- **GIVEN** the user sees the login form
- **THEN** a "Username" input field is present with a person icon on the left
- **AND** the input has a white background with rounded pill corners

#### Scenario: Password field

- **GIVEN** the user sees the login form
- **THEN** a "Password" input field is present with a lock icon on the left
- **AND** the input has a white background with rounded pill corners
- **AND** the input type is "password"

#### Scenario: Login button

- **GIVEN** the user sees the login form
- **THEN** a full-width "Login" button is displayed with dark charcoal background and white text
- **AND** the button has large rounded pill corners matching the input fields

#### Scenario: Forgot password link

- **GIVEN** the user sees the login form
- **THEN** a "Forgot Username / Password?" link is displayed below the login button
- **AND** the link is styled in blue/teal color

#### Scenario: Create new account link

- **GIVEN** the user sees the login form
- **THEN** a "Create new account" link with a right-arrow icon is displayed at the bottom
- **AND** the link is styled in blue/teal color

#### Scenario: Background design

- **GIVEN** the user navigates to the LoginVista page
- **THEN** the background displays a city skyline image with a blue-to-teal gradient overlay
- **AND** the gradient transitions from darker blue at top to lighter teal at bottom

#### Scenario: Form layout

- **GIVEN** the user views the page on a desktop viewport
- **THEN** all form elements are vertically centered on the page
- **AND** the form width is approximately 400px max
- **AND** the form is horizontally centered

#### Scenario: Responsive layout

- **GIVEN** the user views the page on a mobile viewport (375px width)
- **THEN** all form elements remain vertically centered
- **AND** the form fields stretch to fill available horizontal space with padding
- **AND** the font sizes and spacing remain readable

#### Scenario: Accessibility

- **GIVEN** the user navigates to the LoginVista page
- **THEN** the username input has an accessible label
- **AND** the password input has an accessible label
- **AND** the login button is focusable and has visible focus ring
- **AND** the avatar image has alt text

#### Scenario: Component Dock footer link

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a footer link to "https://www.componentdock.com/" is present
- **AND** the link text says "Component Dock"
