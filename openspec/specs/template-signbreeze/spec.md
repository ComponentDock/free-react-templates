# Template: Signbreeze (Login Form)
<!-- prep-status: shipped-as=commute -->
> **SHIPPED-UNDER** — the ColorLib `login-form-06` design this prep describes already
> ships as `apps/commute` (<https://commute.free.componentdock.com>).
> Do not scaffold `apps/signbreeze`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-commute/spec.md`.

## Purpose

Recreation of ColorLib **Login Form V06** — a split-screen login template with social media authentication options.

- **ColorLib source:** `https://colorlib.com/wp/template/login-form-06/`
- **Preview URL:** `https://preview.colorlib.com/theme/bootstrap/login-form-06/`
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-06.jpg`
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design tokens

Extracted from `https://preview.colorlib.com/theme/bootstrap/login-form-06/css/style.css` and the preview DOM:

| Token | Value | Notes |
|---|---|---|
| font-family | `"Roboto", sans-serif` | Weights 300 (light), 400 (regular) |
| body-bg | `#ffffff` | White background |
| text-muted | `#b3b3b3` | Paragraph text, form labels |
| link-color | `#888888` | Anchor links, forgot password |
| form-border | `1px solid #efefef` | Form group container borders |
| form-radius | `7px` | Top corners of first group, bottom corners of last group |
| form-control-font | `20px` | Input text size |
| btn-primary | `#007bff` | Bootstrap blue (Log In button) |
| btn-primary-hover | `#0069d9` | Bootstrap primary hover |
| btn-height | `54px` | Button height |
| btn-padding | `0 30px` | Horizontal button padding |
| checkbox-unchecked | `#e6e6e6` | Checkbox indicator background |
| checkbox-checked | `#007bff` | Checkbox checked state |
| checkbox-hover | `#1a88ff` | Checkbox hover on checked |
| checkbox-radius | `4px` | Checkbox indicator border-radius |
| label-font | `12px` | Form field labels |
| forgot-font | `14px` | Forgot password link |
| social-facebook | `#3b5998` | Facebook login button bg |
| social-facebook-hover | `#344e86` | Facebook button hover |
| social-twitter | `#1da1f2` | Twitter/X login button bg |
| social-twitter-hover | `#0d95e8` | Twitter button hover |
| social-google | `#ea4335` | Google login button bg |
| social-google-hover | `#e82e1e` | Google button hover |
| social-text | `#ffffff` | Social button text color |
| transition | `.3s all ease` | Global transition timing |

**Layout:** Full viewport height (`100vh`), split-screen with `.d-lg-flex.half` — left half is the form (`.contents`, `width: 50%`), right half is a background image (`.bg`, `background-size: cover; background-position: center`). On mobile (`<998px`), background image stacks above the form at `500px` height.

**Typography:** Roboto 300 for body/paragraphs, Roboto 400 for headings. Headings use system font stack fallback.

## Requirements

### Feature: Split-screen login layout

#### Scenario: Full viewport split layout

- **GIVEN** the user opens the sign-in page
- **THEN** the viewport is split into two equal halves at lg breakpoint and above
- **AND** the right half displays a full-cover background image
- **AND** the left half contains the login form centered vertically

#### Scenario: Mobile responsive layout

- **GIVEN** the viewport is narrower than 998px
- **THEN** the background image appears above the form at 500px height
- **AND** the form occupies the remaining space below

### Feature: Login form

#### Scenario: Sign-in heading and description

- **GIVEN** the user sees the login form
- **THEN** a "Sign In" heading is displayed
- **AND** a short descriptive paragraph appears below the heading

#### Scenario: Username field

- **GIVEN** the user sees the login form
- **WHEN** the user clicks the username input
- **THEN** the floating label moves above the input
- **AND** the input accepts text entry

#### Scenario: Password field

- **GIVEN** the user sees the login form
- **WHEN** the user clicks the password input
- **THEN** the floating label moves above the input
- **AND** the input masks characters as the user types

#### Scenario: Form group styling

- **GIVEN** the user sees the login form
- **THEN** the username field has top border radius of 7px
- **AND** the password field has bottom border radius of 7px
- **AND** adjacent fields share a 1px #efefef border with no double borders

#### Scenario: Remember me checkbox

- **GIVEN** the user sees the login form
- **WHEN** the user checks "Remember me"
- **THEN** the checkbox indicator turns #007bff
- **AND** a checkmark appears inside the indicator
- **WHEN** the user unchecks it
- **THEN** the indicator returns to #e6e6e6

#### Scenario: Forgot password link

- **GIVEN** the user sees the login form
- **THEN** a "Forgot Password" link is aligned right below the form fields
- **AND** the link color is #888

#### Scenario: Log In button

- **GIVEN** the user sees the login form
- **THEN** the "Log In" button spans full width with height 54px
- **AND** the button background is #007bff
- **AND** the button text is white

### Feature: Social login

#### Scenario: Or divider

- **GIVEN** the user sees the login form
- **THEN** a centered "— or —" divider appears between the main form and social buttons

#### Scenario: Facebook login button

- **GIVEN** the user sees the social login section
- **THEN** a "Login with Facebook" button is displayed
- **AND** its background is #3b5998
- **AND** the text is white

#### Scenario: Twitter/X login button

- **GIVEN** the user sees the social login section
- **THEN** a "Login with Twitter" button is displayed
- **AND** its background is #1da1f2
- **AND** the text is white

#### Scenario: Google login button

- **GIVEN** the user sees the social login section
- **THEN** a "Login with Google" button is displayed
- **AND** its background is #ea4335
- **AND** the text is white

#### Scenario: Social button hover states

- **GIVEN** the user hovers over any social login button
- **THEN** the background darkens (Facebook #344e86, Twitter #0d95e8, Google #e82e1e)
- **AND** the text remains white

### Feature: Accessibility and footer

#### Scenario: Semantic form elements

- **GIVEN** the user inspects the login form
- **THEN** all inputs have associated labels via htmlFor
- **AND** the form uses semantic <form> element
- **AND** the submit button has type="submit"

#### Scenario: Footer attribution

- **GIVEN** the user scrolls to the bottom of the page
- **THEN** a "Made with Component Dock" footer is displayed
- **AND** it links to https://www.componentdock.com/

## Verification checklist

- [ ] Split-screen layout renders at 100vh on desktop (lg+)
- [ ] Background image covers the right half with cover + center
- [ ] Mobile layout stacks image above form below `md` (767.98px — the sheet's
      `.cl-col-md-7` collapses there; NOT 500px)
- [ ] Roboto font loads (300 + 400 weights) via Google Fonts
- [ ] Username and password fields have floating labels with smooth transition
- [ ] Form group borders are #efefef, no double borders between fields
- [ ] First field has top radius 7px, last field has bottom radius 7px
- [ ] Remember me checkbox toggles with #007bff check indicator
- [ ] Forgot Password link is right-aligned, #888 color
- [ ] Log In button is full-width, 54px height, #007bff background
- [ ] "— or —" divider is centered between form and social buttons
- [ ] Facebook button: #3b5998, Twitter: #1da1f2, Google: #ea4335
- [ ] Social buttons show darker hover states
- [ ] All inputs have labels via htmlFor
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in any app source file
- [ ] public/CNAME contains signbreeze.free.componentdock.com
- [ ] homepage in package.json matches Surge deploy target
- [ ] 100% test coverage (lines, functions, branches, statements)
