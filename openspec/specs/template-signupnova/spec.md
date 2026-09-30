# Template: SignupNova (Form — Signup / Registration)

## Purpose

Recreation of ColorLib **Signup Form 16** as a React 19 + Vite + Tailwind 4 + TypeScript template.
- **ColorLib source:** https://colorlib.com/wp/template/signup-form-16/
- **Preview URL:** https://preview.colorlib.com/theme/signup-form-16/ (Note: preview returned 404 at time of research; design captured from screenshot.)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, Vitest + Testing Library
- **Package:** `@free-react-templates/signupnova`

## Design tokens

| Token | Value | Source |
|-------|-------|--------|
| Brand primary | `#7c3aed` (violet-600) | Button, checkbox, link color, gradient overlay |
| Brand dark | `#4c1d95` (violet-900) | Gradient dark end |
| Background | `#f5f5f5` (light gray) | Page background |
| Card background | `#ffffff` | Form card |
| Left panel bg | Purple gradient overlay on mountain image | Hero/background panel |
| Button radius | `4px` | Rounded corners on CTA |
| Font family | `"Poppins", sans-serif` | Screenshot analysis |
| Text primary | `#333333` | Body text, labels |
| Text muted | `#777777` | Secondary text |
| Input border | `#e0e0e0` | Light gray input borders |
| Input background | `#f8f8f8` | Slightly off-white inputs |

## Layout structure

Single centered card on light gray background. Two-column layout:

1. **Left panel** (~40% width): Purple gradient overlay on mountain image, "Welcome to signup form" heading + description text (white on gradient)
2. **Right panel** (~60% width): White background signup form
   - "Signup with this services" heading
   - Social login icons row (Google, Facebook, Twitter)
   - "or" divider with horizontal lines
   - Form fields: Full Name + Username (side by side), Email Address (full width), Password (full width)
   - Checkbox: "I Agree All Statements In Terms Of Service"
   - CTA button: "Create an account" (solid purple, rounded)
   - Footer text: "I'm already a member! Sign In" (link)

## Gherkin scenarios

### Scenario: Page renders signup card
```gherkin
Given the user visits the SignupNova page
Then a centered card is displayed on a light gray background
And the card has two panels side by side
```

### Scenario: Left panel displays welcome content
```gherkin
Given the user views the left panel
Then a heading "Welcome to signup form" is visible
And a welcome description paragraph is shown below the heading
And the panel has a purple gradient overlay on a background image
And all text in the left panel is white
```

### Scenario: Social login options
```gherkin
Given the user views the right panel
Then "Signup with this services" heading is displayed
And three social login icons are shown (Google, Facebook, Twitter)
And an "or" divider with horizontal lines separates social from form
```

### Scenario: Form fields render correctly
```gherkin
Given the user views the signup form
Then a "Full Name" input field is visible
And a "Username" input field is visible
And "Full Name" and "Username" appear side by side on the same row
And an "Email Address" input field is visible (full width)
And a "Password" input field is visible (full width)
```

### Scenario: Terms of service checkbox
```gherkin
Given the user views the signup form
Then a checkbox labeled "I Agree All Statements In Terms Of Service" is displayed
And the checkbox is styled with the brand purple color when checked
```

### Scenario: Create account button
```gherkin
Given the user views the signup form
Then a "Create an account" button is displayed
And the button has solid purple background and white text
And the button has rounded corners
```

### Scenario: Sign in link
```gherkin
Given the user views the signup form
Then "I'm already a member! Sign In" text is displayed below the button
And "Sign In" is a styled link in the brand purple color
```

### Scenario: Accessibility
```gherkin
Given the user navigates with keyboard only
Then all form inputs are focusable via Tab key
And the checkbox can be toggled with Space key
And the social login buttons have accessible labels
```

## Verification checklist

- [ ] Left panel: purple gradient overlay, mountain background image (placeholder), white heading + description
- [ ] Right panel: "Signup with this services" heading, 3 social icons, "or" divider
- [ ] Form fields: Full Name + Username (side by side), Email, Password
- [ ] Terms checkbox with purple accent
- [ ] "Create an account" button — solid purple, rounded, white text
- [ ] "I'm already a member! Sign In" link below button
- [ ] Poppins font loaded via Google Fonts
- [ ] Responsive: stacks to single column on mobile
- [ ] All form inputs have labels and proper ARIA attributes
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to componentdock.com
