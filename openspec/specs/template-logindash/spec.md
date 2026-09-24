# Template: Logindash (Login Form)

## Purpose

Recreation of ColorLib **Login Form V11** as a React 19 + Vite + Tailwind 4 + TypeScript template.

- **Source slug:** `login-form-v11`
- **Preview URL:** https://colorlib.com/etc/lf/Login_v11/index.html
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v11/
- **New name:** `logindash` (apps/logindash, package @free-react-templates/logindash)
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript strict

## Design tokens (extracted from live preview CSS)

### Colors
| Token | Hex | Usage |
|-------|-----|-------|
| Brand primary (pink) | `#d33f8d` | Login button background, focus glow, checkbox border, link hover, social button hover border |
| Brand gradient start (blue) | `#0250c5` | Background gradient bottom-to-top start |
| Brand gradient end (pink) | `#d43f8d` | Background gradient end |
| Text dark | `#333333` | Title, button hover bg |
| Text body | `#666666` | Body text, links default |
| Text muted | `#999999` | Utility text, placeholder, social section label, checkbox label |
| Text input | `#686868` | Input text color |
| Input background | `#e6e6e6` | Input fields background |
| Facebook blue | `#3b5998` | Facebook button text/icon |
| Google gray | `#555555` | Google button text |
| White | `#fff` | Form card, social button background, button text |
| Input placeholder | `#acacac` | Placeholder text |
| Focus glow | `rgba(211,63,141, 0.6)` | Focus animation color |
| Validation error border | `#c80000` | Error tooltip border |

### Fonts
| Token | Font family | Usage |
|-------|-------------|-------|
| Body | Poppins Regular | Body text, links |
| Title | Raleway Black | "LOGIN" heading (30px, uppercase) |
| Input text | Raleway SemiBold | Input fields (18px) |
| Button text | Raleway Bold | Login button, social buttons (16px, uppercase) |
| Utility text | Raleway Regular | "Or login with", "Not a member?" (16px) |

### Layout & Shapes
- Form card: white, 450px wide, border-radius 3px, centered on gradient background
- Full viewport height (100vh), flex centered
- Background: linear-gradient(bottom, #0250c5, #d43f8d) with decorative image overlay (img-01.png)
- Inputs: 62px height, border-radius 3px, 65px left padding (for icon)
- Login button: full-width, 62px height, border-radius 3px
- Social buttons: side-by-side, 40px height, border-radius 3px, 1px border #e6e6e6
- Focus animation: expanding pink glow shadow on input focus

## Section structure (order from preview)

1. **Background layer** — Full-viewport gradient (blue→pink) with decorative image overlay
2. **Form card** — Centered white card (450px) containing:
   - Title "LOGIN" (uppercase, Raleway Black)
   - Email input with envelope icon (left-aligned, Linearicons)
   - Password input with lock icon (left-aligned, Linearicons)
   - "Remember me" custom checkbox (pink border)
   - "Login" button (full-width, pink, uppercase)
   - "Or login with" divider text
   - Facebook social button (left half, blue icon)
   - Google social button (right half, Google icon)
   - "Not a member? Sign up now" footer link

## Gherkin requirements

### Background
```gherkin
Given the user navigates to the logindash page
Then the page displays a full-viewport gradient background (blue to pink)
And the gradient is overlaid with a decorative image
```

### Form card
```gherkin
Given the page is loaded
Then a white card (450px wide, border-radius 3px) is centered on the page
And the card contains all login form elements
```

### Title
```gherkin
Given the form card is visible
Then the title "LOGIN" is displayed at the top of the form
And the title uses Raleway Black font at 30px, uppercase
And the title text color is #333333
```

### Email input
```gherkin
Given the form is displayed
Then the email input has a left-aligned envelope icon
And the placeholder text is "Email"
And the input background is #e6e6e6
And the input height is 62px with border-radius 3px
When the user focuses the email input
Then a pink glow animation appears around the input
And the icon color changes to #d33f8d
```

### Password input
```gherkin
Given the form is displayed
Then the password input has a left-aligned lock icon
And the placeholder text is "Password"
And the input background is #e6e6e6
And the input height is 62px with border-radius 3px
When the user focuses the password input
Then a pink glow animation appears around the input
And the icon color changes to #d33f8d
```

### Remember me checkbox
```gherkin
Given the form is displayed
Then a "Remember me" checkbox is shown below the password field
And the checkbox has a custom pink border (#d33f8d) when unchecked
When the checkbox is checked
Then the checkmark appears in pink (#d33f8d)
```

### Login button
```gherkin
Given the form is displayed
Then the "LOGIN" button spans the full width of the form card
And the button text is uppercase, Raleway Bold, 16px, white
And the button background is #d33f8d
And the button height is 62px with border-radius 3px
When the user hovers the login button
Then the button background changes to #333333
```

### Social login section
```gherkin
Given the form is displayed
Then "Or login with" text appears below the login button
And a Facebook button appears on the left half (50% width)
And a Google button appears on the right half (50% width)
And both buttons are 40px height with border-radius 3px
And both buttons have a 1px solid #e6e6e6 border
And the Facebook button text/icon color is #3b5998
And the Google button text color is #555555
When the user hovers either social button
Then the border color changes to #d33f8d
```

### Sign up link
```gherkin
Given the form is displayed
Then "Not a member?" text appears at the bottom of the form
And "Sign up now" link is displayed next to it
And the link has a bottom border (#999999)
When the user hovers the "Sign up now" link
Then the border color changes to #d33f8d
```

### Validation
```gherkin
Given the user submits the form with an invalid email
Then a validation tooltip appears near the email input
And the tooltip has a red (#c80000) border
And the tooltip text says "Valid email is required: ex@abc.xyz"

Given the user submits the form without a password
Then a validation tooltip appears near the password input
And the tooltip text says "Password is required"
```

### Responsive behavior
```gherkin
Given the viewport width is less than 480px
Then the form card adjusts width to fit within 15px padding on each side
And all elements remain centered and accessible
```

## Verification checklist

- [ ] Background gradient matches (blue→pink, bottom to top)
- [ ] Decorative image overlay is present (use placeholder)
- [ ] Form card is 450px wide, white, border-radius 3px
- [ ] Title "LOGIN" — Raleway Black, 30px, uppercase, #333333
- [ ] Email input — envelope icon, 62px height, #e6e6e6 background, border-radius 3px
- [ ] Password input — lock icon, 62px height, #e6e6e6 background, border-radius 3px
- [ ] Focus glow animation works on both inputs (pink glow)
- [ ] Icon turns pink (#d33f8d) on focus
- [ ] "Remember me" custom checkbox with pink border
- [ ] Login button — full width, #d33f8d background, white text, hover → #333333
- [ ] Social buttons side-by-side, correct colors, hover border → #d33f8d
- [ ] "Not a member? Sign up now" with hover underline
- [ ] Validation tooltips show on invalid submit
- [ ] Responsive on mobile (<480px)
- [ ] Footer links Component Dock (per AGENTS.md rule 5)
- [ ] No ColorLib references in app code (per conventions.md)
- [ ] Uses picsum.photos for placeholder image
- [ ] Google Fonts loaded for Poppins and Raleway
