# Template: Signvane (Signup Form)

## Purpose

Recreation of ColorLib **Signup Form 14** — a centered signup form with pill-shaped inputs, golden accent, social login buttons, and "Sign In" link.

- **Source:** [ColorLib Signup Form 14](https://colorlib.com/wp/template/signup-form-14/)
- **Preview:** https://preview.colorlib.com/theme/bootstrap/signup-form-14/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-14.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the ColorLib preview CSS (`css/style.css`):

| Token                   | Value                                  | Source                                        |
| ----------------------- | -------------------------------------- | --------------------------------------------- |
| Brand primary           | `#d5c455` (golden yellow)              | `.cl-btn.cl-btn-primary`, links, social hover |
| Body font               | Roboto (300/400/500/700)               | `@font-face` declarations                     |
| Body background         | `#fafafa` (light gray)                 | `body`                                        |
| Body text color         | `gray` / `#212529`                     | `body`                                        |
| Heading color           | `#000`                                 | `h2, h3`                                      |
| Input background        | `#fff`                                 | `.cl-form-control`                            |
| Input height            | 52px                                   | `.cl-form-control`                            |
| Input border-radius     | 40px (pill)                            | `.cl-form-control`                            |
| Input shadow            | `0px 10px 19px -16px rgba(0,0,0,0.1)`  | `.cl-form-control`                            |
| Input focus shadow      | `0px 10px 19px -16px rgba(0,0,0,0.17)` | `.cl-form-control:focus`                      |
| Input placeholder color | `rgba(0,0,0,0.7)`                      | `::-webkit-input-placeholder`                 |
| Button background       | `#d5c455`                              | `.cl-btn.cl-btn-primary`                      |
| Button border-radius    | 40px (pill)                            | `.cl-btn`                                     |
| Button shadow           | `0px 10px 19px -16px rgba(0,0,0,0.29)` | `.cl-btn.cl-btn-primary`                      |
| Button hover            | transparent bg, `#d5c455` text/border  | `.cl-btn.cl-btn-primary:hover`                |
| Button width            | 50% of container                       | `.submit`                                     |
| Facebook button bg      | `#44629b`                              | `.social-icon.facebook`                       |
| Twitter button bg       | `#1dade9`                              | `.social-icon.twitter`                        |
| Social button size      | 120px × 50px                           | `.social-icon`                                |
| Social button hover     | `#d5c455` background                   | `.social-icon:hover`                          |
| Section padding         | 7em 0                                  | `.ftco-section`                               |
| Container max-width     | 960px (lg)                             | `.cl-container`                               |
| Form card width         | 50% on lg (col-lg-6)                   | `.cl-col-lg-6`                                |

## Visual Structure

```
[Light gray background #fafafa]
  [Centered container, max 960px]
    [Row: centered heading "Sign Up #01"]
    [Row: centered form card, col-lg-6]
      ["Create Your Account" subtitle]
      [Form]
        [First Name] [Last Name]         ← 2-column, pill inputs
        [Email Address]                  ← full width
        [Password] [Confirm Password]    ← 2-column
        [Sign Up button]                 ← golden pill, 50% width, centered
      [Social section]
        ["or Signup with this services below"]
        [Facebook button] [Twitter button]
      ["I'm already a member! Sign In"]
```

## Requirements

### Requirement: Page layout

The template SHALL display a centered signup form on a light gray (#fafafa) background.

#### Scenario: Background renders correctly

- **WHEN** the app loads
- **THEN** the page background is light gray (#fafafa)
- **AND** the content is centered in a max-width container

### Requirement: Heading

The template SHALL display "Sign Up #01" as the main heading.

#### Scenario: Heading displays correctly

- **WHEN** the app renders
- **THEN** an h2 heading reading "Sign Up #01" is visible
- **AND** the heading uses Roboto font, 28px, color #000

### Requirement: Form card

The template SHALL display a white card area containing "Create Your Account" and the signup form.

#### Scenario: Card renders with subtitle

- **WHEN** the form card renders
- **THEN** "Create Your Account" text is displayed as a subtitle
- **AND** the subtitle uses Roboto font, weight 300

### Requirement: Form fields

The form SHALL contain: First Name, Last Name (2-column), Email (full-width), Password, Confirm Password (2-column).

#### Scenario: All fields are present

- **WHEN** the form renders
- **THEN** inputs for "First Name", "Last Name", "Email", "Password", "Confirm Password" are visible
- **AND** First Name and Last Name are side by side (2-column layout)
- **AND** Password and Confirm Password are side by side (2-column layout)
- **AND** Email spans full width

#### Scenario: Input styling matches design

- **WHEN** the form renders
- **THEN** all inputs have pill shape (border-radius 40px)
- **AND** inputs are 52px tall with white background
- **AND** inputs have placeholder text in rgba(0,0,0,0.7)
- **AND** inputs have a subtle bottom shadow

### Requirement: Sign Up button

The form SHALL display a "Sign Up" submit button styled as a golden pill.

#### Scenario: Button renders correctly

- **WHEN** the form renders
- **THEN** a "Sign Up" button is visible
- **AND** the button has golden (#d5c455) background
- **AND** the button is pill-shaped (border-radius 40px)
- **AND** the button spans 50% of the form width and is centered

#### Scenario: Button hover state

- **WHEN** the user hovers over the Sign Up button
- **THEN** the button background becomes transparent
- **AND** the button text and border turn golden (#d5c455)

### Requirement: Social login buttons

The form SHALL display Facebook and Twitter social login buttons below the form.

#### Scenario: Social buttons render

- **WHEN** the social section renders
- **THEN** "or Signup with this services below" text is displayed
- **AND** a Facebook button (blue #44629b) is visible
- **AND** a Twitter button (blue #1dade9) is visible
- **AND** both buttons show their respective brand icons

#### Scenario: Social button hover

- **WHEN** the user hovers over a social button
- **THEN** the button background changes to golden (#d5c455)

### Requirement: Sign In link

The template SHALL display a "I'm already a member! Sign In" link below the social buttons.

#### Scenario: Sign In link renders

- **WHEN** the social section renders
- **THEN** "I'm already a member!" text with a "Sign In" link is visible
- **AND** the link uses the brand color (#d5c455)

### Requirement: Responsive layout

The form SHALL be responsive: on mobile, the two-column fields stack vertically.

#### Scenario: Mobile layout stacks columns

- **WHEN** the viewport is below 768px
- **THEN** form fields stack vertically (single column)

### Requirement: Footer with Component Dock link

The template footer SHALL display the site name and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer shows Component Dock link

- **WHEN** the footer renders
- **THEN** a link labeled "More templates at Component Dock" points to https://www.componentdock.com/

### Requirement: Typography fidelity

The template SHALL use Roboto as the primary font, matching the original ColorLib design.

#### Scenario: Font is loaded correctly

- **WHEN** the app renders
- **THEN** body text uses Roboto (loaded via Google Fonts)

### Requirement: No ColorLib references

The app code SHALL NOT contain any references to ColorLib in source files, comments, or data.

#### Scenario: No ColorLib strings in app

- **WHEN** the app source is inspected
- **THEN** no file under apps/signvane/ contains "colorlib" (case-insensitive)

## Verification checklist

- [ ] Light gray (#fafafa) background
- [ ] "Sign Up #01" heading in Roboto, 28px
- [ ] "Create Your Account" subtitle
- [ ] 5 form fields with pill-shaped inputs
- [ ] 2-column layout for name and password fields
- [ ] Golden (#d5c455) "Sign Up" button, pill shape, 50% width
- [ ] Button hover: transparent bg, golden border/text
- [ ] Facebook (#44629b) and Twitter (#1dade9) social buttons
- [ ] Social button hover turns golden
- [ ] "I'm already a member! Sign In" link
- [ ] Roboto font loaded via Google Fonts
- [ ] Responsive: columns stack on mobile
- [ ] Footer with Component Dock link
- [ ] No ColorLib references in app code
