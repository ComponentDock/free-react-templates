# Template: Loginveil (Login Form)

## Purpose

Recreation of ColorLib "Login Form 16" (slug: `login-form-16`).

- Preview URL: `https://preview.colorlib.com/theme/bootstrap/login-form-16/`
- ColorLib source: `https://colorlib.com/wp/template/login-form-16/`
- Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-16-2.jpg`
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)

## Design tokens

Extracted from live preview CSS (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Font family | Lato (300, 400, 700) | Body, headings, form labels |
| Brand color (primary) | `#b96b9f` (purple-mauve) | `.bg-primary`, link color, focus border, social icon color, placeholder focus text |
| Page background | `#f8f9fd` (light blue-gray) | `body { background }` |
| Card background | `#ffffff` | `.login-wrap` |
| Card shadow | `0px 10px 34px -15px rgba(0,0,0,0.24)` | `.login-wrap` |
| Card border-radius | `5px` | `.login-wrap` |
| Button (submit) background | `#17223b` (dark navy) | `.btn.btn-secondary` |
| Button hover | transparent bg, navy border, navy text | Inverse on hover |
| Input style | Bottom-border only, no side/top borders, 48px height | `.form-control` |
| Input border-bottom | `1px solid rgba(0,0,0,0.1)` | Normal state |
| Input focus | border-color `#b96b9f` | Brand accent |
| Social icons | 40x40 circle, white bg, brand color icon | `.social-icon` |
| Checkbox on primary bg | White text, white checkmark | `.checkbox-primary` |
| Section padding | `7em 0` | `.ftco-section` |

## Layout structure

Single-section page. All content in one `<section class="ftco-section">`:

1. **Title area**: centered heading "Login #06" (replace with our template name).
2. **Login card** (`.login-wrap`, white rounded box with shadow, max col-lg-7):
   - **Left half** (`.half`, white background): "Sign In" heading + username input + password input with eye toggle icon.
   - **Right half** (`.half.bg-primary`, purple-mauve background): submit button "Sign me in now" + "Remember Me" checkbox + "Forgot Password" link + "Or Sign In With" divider + Facebook/Twitter social icon buttons.
   - On mobile (<992px): halves stack vertically (full width each).

## Gherkin scenarios

### Scenario: Page loads with split-screen login card
```
Given the user navigates to Loginveil
Then a centered heading is visible
And a login card with two halves is displayed
```

### Scenario: Left half shows sign-in form
```
Given the user views the left half of the card
Then a "Sign In" heading is visible
And a username input with placeholder "Username" is present
And a password input with placeholder "Password" is present
And an eye toggle icon is beside the password field
```

### Scenario: Password visibility toggle
```
Given the password field is type="password"
When the user clicks the eye toggle icon
Then the password field type changes to "text"
When the user clicks the eye toggle icon again
Then the password field type changes back to "password"
```

### Scenario: Right half shows submit and social options
```
Given the user views the right half of the card
Then a "Sign me in now" submit button is visible with dark navy background
And a "Remember Me" checkbox is checked by default
And a "Forgot Password" link is visible
And a divider text "Or Sign In With" is shown
And Facebook and Twitter social icon buttons are present
```

### Scenario: Form submission
```
Given the user has entered a username and password
When they click "Sign me in now"
Then the form prevents default submission
```

### Scenario: Responsive layout
```
Given the viewport width is less than 992px
Then both halves stack vertically at full width
```

## Verification checklist

- [ ] Lato font loaded (300, 400, 700)
- [ ] Brand color #b96b9f used for bg-primary, links, focus, social icons
- [ ] Page background #f8f9fd
- [ ] Card: white, 5px radius, shadow, centered
- [ ] Split layout: left white, right purple-mauve
- [ ] Inputs: bottom-border only, 48px height
- [ ] Button: #17223b navy, inverse hover
- [ ] Social icons: 40x40 circles
- [ ] Password toggle works (show/hide)
- [ ] Remember Me checkbox checked by default
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME: loginveil.free.componentdock.com
