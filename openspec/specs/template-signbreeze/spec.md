# Template: Signbreeze (Login Form)

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

## Requirements (Gherkin)

### Feature: Split-screen login layout

  Scenario: Full viewport split layout
    Given the user opens the sign-in page
    Then the viewport is split into two equal halves at lg breakpoint and above
    And the right half displays a full-cover background image
    And the left half contains the login form centered vertically

  Scenario: Mobile responsive layout
    Given the viewport is narrower than 998px
    Then the background image appears above the form at 500px height
    And the form occupies the remaining space below

### Feature: Login form

  Scenario: Sign-in heading and description
    Given the user sees the login form
    Then a "Sign In" heading is displayed
    And a short descriptive paragraph appears below the heading

  Scenario: Username field
    Given the user sees the login form
    When the user clicks the username input
    Then the floating label moves above the input
    And the input accepts text entry

  Scenario: Password field
    Given the user sees the login form
    When the user clicks the password input
    Then the floating label moves above the input
    And the input masks characters as the user types

  Scenario: Form group styling
    Given the user sees the login form
    Then the username field has top border radius of 7px
    And the password field has bottom border radius of 7px
    And adjacent fields share a 1px #efefef border with no double borders

  Scenario: Remember me checkbox
    Given the user sees the login form
    When the user checks "Remember me"
    Then the checkbox indicator turns #007bff
    And a checkmark appears inside the indicator
    When the user unchecks it
    Then the indicator returns to #e6e6e6

  Scenario: Forgot password link
    Given the user sees the login form
    Then a "Forgot Password" link is aligned right below the form fields
    And the link color is #888

  Scenario: Log In button
    Given the user sees the login form
    Then the "Log In" button spans full width with height 54px
    And the button background is #007bff
    And the button text is white

### Feature: Social login

  Scenario: Or divider
    Given the user sees the login form
    Then a centered "— or —" divider appears between the main form and social buttons

  Scenario: Facebook login button
    Given the user sees the social login section
    Then a "Login with Facebook" button is displayed
    And its background is #3b5998
    And the text is white

  Scenario: Twitter/X login button
    Given the user sees the social login section
    Then a "Login with Twitter" button is displayed
    And its background is #1da1f2
    And the text is white

  Scenario: Google login button
    Given the user sees the social login section
    Then a "Login with Google" button is displayed
    And its background is #ea4335
    And the text is white

  Scenario: Social button hover states
    Given the user hovers over any social login button
    Then the background darkens (Facebook #344e86, Twitter #0d95e8, Google #e82e1e)
    And the text remains white

### Feature: Accessibility and footer

  Scenario: Semantic form elements
    Given the user inspects the login form
    Then all inputs have associated labels via htmlFor
    And the form uses semantic <form> element
    And the submit button has type="submit"

  Scenario: Footer attribution
    Given the user scrolls to the bottom of the page
    Then a "Made with Component Dock" footer is displayed
    And it links to https://www.componentdock.com/

## Verification checklist

- [ ] Split-screen layout renders at 100vh on desktop (lg+)
- [ ] Background image covers the right half with cover + center
- [ ] Mobile layout stacks image above form at 500px
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
