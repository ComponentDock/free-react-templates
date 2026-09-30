# Template: Joinhub (Signup Form with Social Login)

## Purpose

Recreation of Colorlib "Signup Form 16" — a split-layout signup form with social login buttons (Google, Facebook, Twitter), terms checkbox, and a left-side image panel with purple overlay.

- **Source**: Colorlib Signup Form V16
- **Source slug**: `signup-form-16`
- **Source URL**: https://colorlib.com/wp/template/signup-form-16/
- **Preview URL**: https://preview.colorlib.com/theme/bootstrap/signup-form-16/
- **Screenshot URL**: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-16.jpg
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict) · Vitest + Testing Library

## Design Tokens (from live preview CSS)

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| Page background | `#ffffff` | Body background |
| Left panel overlay | `#6807f9` at `opacity: 0.4` | `.cl-text-wrap:after` purple overlay over background image |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.wrap` card elevation |
| Card border-radius | `5px` | `.wrap` |
| Input border | `1px solid #ced4da` | `.cl-form-control` |
| Input text | `#495057` | Input value text |
| Input background | `#ffffff` | Input field background |
| Button background | `#007bff` | `.cl-btn-primary` |
| Button hover | `#0069d9` | Button hover state |
| Button focus ring | `0 0 0 0.2rem rgba(38,143,255,0.5)` | Button focus state |
| Social icon circle | `transparent` with `1px solid rgba(0,0,0,0.05)` border | `.social-icon` |
| Social icon hover | `#6807f9` background, white icon | `.social-icon:hover` |
| Social icon text | `#000` | Default social icon color |
| "or" divider line | `#e6e6e6` | Horizontal rule behind "or" text |
| Checkbox text | `rgba(0,0,0,0.4)` | Terms checkbox label |
| Checkmark unchecked | `rgba(0,0,0,0.1)` | Unchecked checkbox icon |
| Checkmark checked | `#007bff` | Checked checkbox icon |
| Link color | `#007bff` | "Sign In" link |
| Link hover | `#0056b3` | Link hover |
| Heading text | `#000` | Page heading |
| Left panel text | `#ffffff` at `0.8` opacity | Text over the image panel |

### Typography

| Token | Value |
|-------|-------|
| Font family | `'Roboto', Arial, sans-serif` (Google Fonts) |
| Font weights | 400 (regular) |
| Page heading ("Sign Up #06") | 28px, weight 500, `#000` |
| Card heading ("Signup with this services") | 18px, weight 400, `#000`, centered |
| Left panel heading | 24px, weight 400, white |
| Left panel paragraph | 14px, weight 400, `rgba(255,255,255,0.8)` |
| Form label | 14px, weight 500, `rgba(0,0,0,0.3)` |
| Input text | 16px, weight 400, `#495057` |
| Checkbox text | 14px, weight 400, `rgba(0,0,0,0.4)` |
| Button text | 16px, weight 400, `#fff` |
| "or" text | 14px, weight 400, `#999` |

### Layout & Shapes

| Property | Value |
|----------|-------|
| Section padding | `7em 0` |
| Card border-radius | `5px` |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` |
| Desktop split | Left 40% (image + overlay), Right 60% (form) |
| Mobile layout | Stacks vertically: image on top, form below |
| Image panel padding | 2rem (desktop), 1.5rem (mobile) |
| Form panel padding | 2rem (mobile), 2rem (desktop) |
| Form column layout | Full Name + Username in 2-col row, Email/Password/checkbox full-width |
| Social icon circles | 40px × 40px, border-radius 50% |
| "or" divider | 1px line (#e6e6e6) with centered "or" text on white background |
| Checkbox | Custom styled with FontAwesome icons |
| Button | Full width, `padding: 1rem`, border-radius `0.25rem` (4px) |
| Responsive breakpoint | 992px (stacks vertically) |

## Gherkin Requirements

### Feature: Joinhub — Split-layout signup form with social login

#### Scenario: Desktop split layout renders two panels
  Given the page loads on a viewport wider than 992px
  Then a horizontal split layout is displayed
  And the left panel shows a background image with purple overlay (40% opacity of #6807f9)
  And the left panel displays "Welcome to signup form" heading and descriptive text in white
  And the right panel shows the signup form on white background

#### Scenario: Mobile layout stacks panels vertically
  Given the page loads on a viewport narrower than 992px
  Then the image panel appears on top
  And the form panel appears below

#### Scenario: Social login buttons render
  Given the form panel is visible
  Then three social login buttons are displayed: Google, Facebook, Twitter
  And each button is a 40px circle with a thin border
  And on hover each button gets a purple background (#6807f9) with white icon

#### Scenario: "or" divider
  Given the social buttons are visible
  Then an "or" text divider with horizontal lines appears below the social buttons

#### Scenario: Form fields render correctly
  Given the form is visible
  Then a "Full Name" text input is shown
  And a "Username" text input is shown next to Full Name (2-column row)
  And an "Email Address" text input is shown (full width)
  And a "Password" input is shown (type=password, full width)

#### Scenario: Terms checkbox
  Given the form is visible
  Then a checkbox labeled "I agree all statements in terms of service" is displayed
  And the checkbox is checked by default

#### Scenario: Submit button
  Given the form is visible
  Then a "Create an account" button is shown at full width
  And the button has blue background (#007bff) with white text
  And on hover the button darkens to #0069d9

#### Scenario: Sign-in link
  Given the form is visible
  Then "I'm already a member!" text is displayed below the form
  And "Sign In" is a clickable link styled in #007bff

#### Scenario: Form validation
  Given the user submits the form with empty required fields
  Then the form prevents submission (HTML5 required validation)

#### Scenario: Footer with Component Dock link
  Given the page is fully loaded
  Then a footer is present with a link to "https://www.componentdock.com/" branded as "Component Dock"

## Verification Checklist

- [ ] Roboto font loaded from Google Fonts (400)
- [ ] Centered page heading "Sign Up #06"
- [ ] Split layout: image panel 40% left, form 60% right (desktop)
- [ ] Left panel: background image with purple overlay (#6807f9, 40% opacity)
- [ ] Left panel: "Welcome to signup form" heading + paragraph text in white
- [ ] Card shadow: 0px 10px 34px -15px rgba(0,0,0,0.24)
- [ ] 3 social login buttons (Google, Facebook, Twitter) as 40px circles
- [ ] Social icons turn purple (#6807f9) on hover
- [ ] "or" divider with horizontal line
- [ ] 4 form fields: Full Name, Username (2-col), Email, Password
- [ ] Custom checkbox with FontAwesome icons for terms agreement
- [ ] "Create an account" button: full width, #007bff, 4px radius
- [ ] "I'm already a member! Sign In" link
- [ ] Responsive: stacks at 992px
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines/functions/branches/statements)
- [ ] CNAME: joinhub.free.componentdock.com
- [ ] Homepage: https://joinhub.free.componentdock.com
