# Template: Coralgate (Login Form)

## Purpose

Recreation of ColorLib **Login Form 17** (source slug: `login-form-17`).
Preview URL: `https://preview.colorlib.com/theme/login-form-17/` (unreachable at prep time — 404).
Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-17-2.jpg` (primary reference).

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.
Package: `@free-react-templates/coralgate`.

## Design Tokens

Extracted from the preview screenshot (preview unreachable for live DOM/CSS extraction):

| Token | Value | Notes |
|---|---|---|
| Page background | `#f5f5f5` (light gray) | Full-viewport background |
| Card background (left) | `#ffffff` | White panel for form fields |
| Card background (right) | `#f06292` → `#e91e63` (coral/pink gradient) | Welcome panel, top-to-bottom gradient |
| Heading color | `#333333` | "Sign In" heading |
| Label color | `#888888` | Uppercase labels: "USERNAME", "PASSWORD" |
| Input background | `#f0f0f0` | Light gray rounded inputs |
| Input text/placeholder | `#aaaaaa` | Placeholder text |
| Input border | `none` (background fills) | Rounded pill inputs, no border |
| Button background (Sign In) | `#f06292` (coral pink) | Full-width CTA button |
| Button text | `#ffffff` | White text on coral button |
| Button border-radius | ~25px (pill) | Fully rounded CTA button |
| Checkbox checked | `#f06292` (coral pink) | Remember Me checkbox |
| Checkbox label | `#f06292` (coral pink) | "Remember Me" text color |
| "Forgot Password" link | `#888888` (gray) | Right-aligned link |
| Right panel heading | `#ffffff` | "Welcome to login" — white, bold |
| Right panel subtext | `#ffffff` | "Don't have an account?" — white |
| Sign Up button border | `#ffffff` | White outline/pill button |
| Sign Up button text | `#ffffff` | White text |
| Sign Up button bg | `transparent` | Outline style |
| Social icons (f, twitter) | `#888888` (gray) | Small, next to "Sign In" heading |
| Font family | `Poppins` or similar sans-serif | Clean, modern |
| Card border-radius | ~4px | Subtle rounding |
| Card shadow | `0 4px 20px rgba(0,0,0,0.08)` | Subtle drop shadow |
| Card max-width | ~750px | Centered, responsive |

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

## Gherkin Requirements

### Scenario: Page renders the login card centered on viewport
```
Given the user navigates to the Coralgate login page
Then a centered card should be visible on a light gray background
And the card should have two side-by-side columns
```

### Scenario: Left column displays the sign-in form
```
Given the user sees the left column
Then a "Sign In" heading should be displayed
And Facebook and Twitter social icons should be visible next to the heading
And a "USERNAME" label should be displayed in uppercase
And a text input with placeholder "Username" should be visible
And a "PASSWORD" label should be displayed in uppercase
And a password input with placeholder "Password" should be visible
```

### Scenario: Inputs have pill/rounded style
```
Given the user sees the form inputs
Then the username input should have fully rounded corners (pill shape)
And the password input should have fully rounded corners (pill shape)
And the inputs should have a light gray background (no visible border)
```

### Scenario: Sign In button is coral colored
```
Given the user sees the Sign In button
Then it should have a coral/pink background color
And it should be full width within the left column
And it should have rounded (pill) corners
And it should display "Sign In" in white text
```

### Scenario: Remember Me checkbox toggle
```
Given the Remember Me checkbox is displayed
Then it should be checked by default
And it should have a coral/pink check color
And the "Remember Me" label should be coral/pink colored
When the user clicks the checkbox
Then it should toggle its checked state
```

### Scenario: Forgot Password link
```
Given the user sees the form footer
Then a "Forgot Password" link should be visible on the right side
And it should be styled in gray text
```

### Scenario: Right column displays welcome content
```
Given the user sees the right column
Then a coral/pink gradient background should be visible
And a "Welcome to login" heading should be displayed in white
And "Don't have an account?" text should be displayed in white
And a "Sign Up" button should be displayed as a white outline pill button
```

### Scenario: Social icons are interactive
```
Given the social icons are displayed
Then each should be a clickable button
And each should have an appropriate aria-label
```

### Scenario: Responsive layout
```
Given the user views the page on a mobile viewport (< 640px)
Then the two columns should stack vertically
And the card should take full width with padding
```

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
