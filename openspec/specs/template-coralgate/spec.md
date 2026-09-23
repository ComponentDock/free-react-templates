# Template: Coralgate (Login Form)

## Purpose

Recreation of ColorLib **Login Form 17** (source slug: `login-form-17`).
Preview URL: `https://preview.colorlib.com/theme/login-form-17/` (unreachable at prep time — 404).
Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-17-2.jpg` (primary reference).

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.
Package: `@free-react-templates/coralgate`.

## Design Tokens

Extracted from the preview screenshot (preview unreachable for live DOM/CSS extraction):

| Token                       | Value                                       | Notes                                    |
| --------------------------- | ------------------------------------------- | ---------------------------------------- |
| Page background             | `#f5f5f5` (light gray)                      | Full-viewport background                 |
| Card background (left)      | `#ffffff`                                   | White panel for form fields              |
| Card background (right)     | `#f06292` → `#e91e63` (coral/pink gradient) | Welcome panel, top-to-bottom gradient    |
| Heading color               | `#333333`                                   | "Sign In" heading                        |
| Label color                 | `#888888`                                   | Uppercase labels: "USERNAME", "PASSWORD" |
| Input background            | `#f0f0f0`                                   | Light gray rounded inputs                |
| Input text/placeholder      | `#aaaaaa`                                   | Placeholder text                         |
| Input border                | `none` (background fills)                   | Rounded pill inputs, no border           |
| Button background (Sign In) | `#f06292` (coral pink)                      | Full-width CTA button                    |
| Button text                 | `#ffffff`                                   | White text on coral button               |
| Button border-radius        | ~25px (pill)                                | Fully rounded CTA button                 |
| Checkbox checked            | `#f06292` (coral pink)                      | Remember Me checkbox                     |
| Checkbox label              | `#f06292` (coral pink)                      | "Remember Me" text color                 |
| "Forgot Password" link      | `#888888` (gray)                            | Right-aligned link                       |
| Right panel heading         | `#ffffff`                                   | "Welcome to login" — white, bold         |
| Right panel subtext         | `#ffffff`                                   | "Don't have an account?" — white         |
| Sign Up button border       | `#ffffff`                                   | White outline/pill button                |
| Sign Up button text         | `#ffffff`                                   | White text                               |
| Sign Up button bg           | `transparent`                               | Outline style                            |
| Social icons (f, twitter)   | `#888888` (gray)                            | Small, next to "Sign In" heading         |
| Font family                 | `Poppins` or similar sans-serif             | Clean, modern                            |
| Card border-radius          | ~4px                                        | Subtle rounding                          |
| Card shadow                 | `0 4px 20px rgba(0,0,0,0.08)`               | Subtle drop shadow                       |
| Card max-width              | ~750px                                      | Centered, responsive                     |

## Layout Structure

Single centered card on a light gray full-viewport background. The card is split into two columns:

### Left Column (White — Form Panel)

1. **Header row**: "Sign In" heading (left) + Facebook/Twitter social icons (right)
2. **Username field**: uppercase label "USERNAME" + rounded pill input with placeholder "Username"
3. **Password field**: uppercase label "PASSWORD" + rounded pill input with placeholder "Password"
4. **Sign In button**: full-width coral pill button, white text
5. **Footer row**: "Remember Me" checkbox (checked, coral) on left + "Forgot Password" link on right

### Right Column (Coral Gradient — Welcome Panel)

1. **Welcome heading**: "Welcome to login" — large, white, bold
2. **Subtext**: "Don't have an account?" — white, regular weight
3. **Sign Up button**: white outline pill button, "Sign Up" text

## Requirements

### Requirement: Page renders the login card centered on viewport

Users SHALL see a centered card with two side-by-side columns on a light gray background.

#### Scenario: Card is centered on viewport

- **WHEN** the user navigates to the Coralgate login page
- **THEN** a centered card should be visible on a light gray background
- **AND** the card should have two side-by-side columns

### Requirement: Left column displays the sign-in form

Users SHALL see a "Sign In" heading with social icons, username and password fields, a coral CTA button, and form footer elements.

#### Scenario: Sign In heading and social icons

- **WHEN** the user sees the left column
- **THEN** a "Sign In" heading should be displayed
- **AND** Facebook and Twitter social icons should be visible next to the heading

#### Scenario: Form fields

- **WHEN** the user sees the form
- **THEN** a "USERNAME" label should be displayed in uppercase
- **AND** a text input with placeholder "Username" should be visible
- **AND** a "PASSWORD" label should be displayed in uppercase
- **AND** a password input with placeholder "Password" should be visible

### Requirement: Inputs have pill/rounded style

Form inputs SHALL have fully rounded corners (pill shape) with a light gray background.

#### Scenario: Input styling

- **WHEN** the user sees the form inputs
- **THEN** the username input should have fully rounded corners (pill shape)
- **AND** the password input should have fully rounded corners (pill shape)
- **AND** the inputs should have a light gray background (no visible border)

### Requirement: Sign In button is coral colored

The Sign In button SHALL have a coral/pink background, full width, pill corners, and white text.

#### Scenario: Sign In button appearance

- **WHEN** the user sees the Sign In button
- **THEN** it should have a coral/pink background color
- **AND** it should be full width within the left column
- **AND** it should have rounded (pill) corners
- **AND** it should display "Sign In" in white text

### Requirement: Remember Me checkbox toggle

The Remember Me checkbox SHALL be checked by default and toggle on click.

#### Scenario: Default checked state

- **WHEN** the Remember Me checkbox is displayed
- **THEN** it should be checked by default
- **AND** it should have a coral/pink check color
- **AND** the "Remember Me" label should be coral/pink colored

#### Scenario: Toggle behavior

- **WHEN** the user clicks the checkbox
- **THEN** it should toggle its checked state

### Requirement: Forgot Password link

A "Forgot Password" link SHALL be visible on the right side of the form footer in gray text.

#### Scenario: Link visibility

- **WHEN** the user sees the form footer
- **THEN** a "Forgot Password" link should be visible on the right side
- **AND** it should be styled in gray text

### Requirement: Right column displays welcome content

The right column SHALL display a coral gradient background with a welcome heading, subtext, and a Sign Up outline button.

#### Scenario: Welcome panel content

- **WHEN** the user sees the right column
- **THEN** a coral/pink gradient background should be visible
- **AND** a "Welcome to login" heading should be displayed in white
- **AND** "Don't have an account?" text should be displayed in white
- **AND** a "Sign Up" button should be displayed as a white outline pill button

### Requirement: Social icons are interactive

Social icons SHALL be clickable buttons with appropriate aria-labels.

#### Scenario: Accessibility

- **WHEN** the social icons are displayed
- **THEN** each should be a clickable button
- **AND** each should have an appropriate aria-label

### Requirement: Responsive layout

The layout SHALL stack columns vertically on mobile viewports.

#### Scenario: Mobile stacking

- **WHEN** the user views the page on a mobile viewport (< 640px)
- **THEN** the two columns should stack vertically
- **AND** the card should take full width with padding

### Requirement: Footer links to Component Dock

The footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the user scrolls to the footer
- **THEN** a "Component Dock" link should be visible
- **AND** it should link to https://www.componentdock.com/

## Verification Checklist

- [ ] Card is centered on viewport with light gray background
- [ ] Left column: "Sign In" heading with social icons, form fields, coral CTA button
- [ ] Inputs are pill-shaped with light gray background
- [ ] Sign In button is coral pink, full-width, pill-shaped
- [ ] Remember Me checkbox is coral, checked by default
- [ ] Forgot Password link is gray, right-aligned
- [ ] Right column: coral gradient, "Welcome to login" heading, Sign Up outline button
- [ ] Responsive: columns stack on mobile
- [ ] ComponentDock footer link present
- [ ] No ColorLib references in app code
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Typecheck passes, lint passes, build succeeds
