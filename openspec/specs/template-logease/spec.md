# Template: Logease (Login Form)

## Purpose

Recreation of ColorLib **Login Form 16** (source slug: `login-form-16`).
Preview URL: `https://preview.colorlib.com/theme/login-form-16/` (unreachable at prep time — 404).
Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-16-2.jpg` (used as primary reference).

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.
Package: `@free-react-templates/logease`.

## Design Tokens

Extracted from the preview screenshot (preview unreachable for live DOM/CSS extraction):

| Token | Value | Notes |
|---|---|---|
| Page background | `#f5f5f5` (light gray) | Full-viewport background |
| Card background (left) | `#ffffff` | White panel for form fields |
| Card background (right) | `#9b6b8a` (mauve/dusty pink) | CTA panel |
| Heading color | `#333333` | "Sign In" heading |
| Label color | `#555555` | "Username", "Password" labels |
| Placeholder color | `#aaaaaa` | Input placeholder text |
| Input border | `#dddddd` | Bottom-border or light border on inputs |
| Button background (CTA) | `#1a1a2e` (dark navy) | "Sign me in now" button |
| Button text | `#ffffff` | White text on CTA button |
| Checkbox checked | `#3b82f6` (blue) | Remember Me checkbox |
| Link text | `#ffffff` | "Forgot Password" link on mauve bg |
| Divider text | `#ffffff` | "— Or Sign In With —" on mauve bg |
| Social icon background | `#ffffff` | Circular white buttons |
| Social icon color | `#9b6b8a` (mauve) | Facebook / Twitter icons inside white circles |
| Font family | `Poppins`, sans-serif | Heading: lighter weight; body: regular |
| Card border-radius | ~4px | Subtle rounded corners on card |
| CTA button border-radius | ~2px | Nearly square, slight rounding |
| Card shadow | `0 4px 20px rgba(0,0,0,0.08)` | Subtle drop shadow on card |
| Card max-width | ~700px | Centered, responsive |

## Layout Structure

Single centered card on a light gray full-viewport background. The card is split into two equal columns:

### Left Column (White — Form Panel)
1. **Heading**: "Sign In" — large, dark, Poppins font
2. **Username field**: label "Username" + text input with placeholder "Username"
3. **Password field**: label "Password" + password input with placeholder "Password" + eye icon (show/hide toggle)

### Right Column (Mauve — CTA Panel)
1. **CTA Button**: "Sign me in now" — full-width dark navy button, white text
2. **Remember Me + Forgot Password**: checkbox (checked by default) + "Remember Me" label + "Forgot Password" link, same row
3. **Social divider**: "— Or Sign In With —" text
4. **Social icons**: Facebook and Twitter circular white icons, centered

## Gherkin Requirements

### Scenario: Page renders the login card centered on viewport
```
Given the user navigates to the Logease login page
Then a centered card should be visible on a light gray background
And the card should have two side-by-side columns
```

### Scenario: Left column displays the sign-in form
```
Given the user sees the left column
Then a "Sign In" heading should be displayed
And a "Username" text input should be visible with placeholder "Username"
And a "Password" input should be visible with placeholder "Password"
And a password visibility toggle (eye icon) should be present next to the password field
```

### Scenario: Password visibility toggle works
```
Given the password field is in hidden mode
When the user clicks the eye icon
Then the password field should switch to text type (visible)
And the eye icon should change to indicate visibility
When the user clicks the eye icon again
Then the password field should switch back to password type (hidden)
```

### Scenario: Right column displays CTA and social options
```
Given the user sees the right column
Then a "Sign me in now" button should be displayed with dark navy background
And a "Remember Me" checkbox should be visible (checked by default)
And a "Forgot Password" link should be visible
And a divider text "— Or Sign In With —" should be displayed
And Facebook and Twitter social icons should be displayed as white circles
```

### Scenario: Form submission
```
Given the user enters a username and password
When the user clicks "Sign me in now"
Then the form should attempt to submit (prevent default)
```

### Scenario: Remember Me checkbox toggle
```
Given the Remember Me checkbox is checked
When the user clicks the checkbox
Then it should become unchecked
When the user clicks it again
Then it should become checked again
```

### Scenario: Social icon buttons are interactive
```
Given the social icons are displayed
Then each social icon should be a clickable button
And each should have an appropriate aria-label (e.g. "Sign in with Facebook")
```

### Scenario: Responsive layout
```
Given the user views the page on a mobile viewport (< 640px)
Then the two columns should stack vertically
And the card should take full width with padding
```

## Verification Checklist

- [ ] Card is centered on viewport with light gray background
- [ ] Left column: "Sign In" heading, Username input, Password input with eye toggle
- [ ] Password toggle correctly switches between text/password type
- [ ] Right column: dark CTA button, Remember Me checkbox, Forgot Password link
- [ ] Social divider text and Facebook/Twitter circular icons
- [ ] All colors match the mauve + dark navy palette
- [ ] Poppins font loaded via Google Fonts
- [ ] Responsive: columns stack on mobile
- [ ] ComponentDock footer link present
- [ ] No ColorLib references in app code
- [ ] Tests: 100% coverage (lines, functions, branches, statements)
- [ ] Typecheck passes, lint passes, build succeeds
