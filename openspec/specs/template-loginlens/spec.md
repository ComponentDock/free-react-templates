# Template: LoginLens (Login Form)

## Purpose

LoginLens is a single-page LOGIN FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Login Form V7" free
template (source: https://colorlib.com/wp/template/login-form-v7/, preview:
https://preview.colorlib.com/theme/login-form-v7/ [404 — design derived from
live preview at https://colorlib.com/etc/lf/Login_v7/index.html + CSS +
screenshot]), built under a DIFFERENT name (**LoginLens**), with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a single-page login form centered on a full-viewport light
gray background (#e6e6e6). The layout consists of:
1. A centered 320px-wide transparent card
2. "Login" heading in Oswald-Medium
3. Two social login buttons (Facebook #3b5998, Twitter #1da1f2) — pill-shaped
   (border-radius: 25px), full-width, 50px tall
4. "Login with email" separator text (Oswald-Bold, 20px)
5. Email input — pill-shaped (border-radius: 31px), white bg, 62px tall
6. Password input — pill-shaped, with a show/hide eye icon on the right
7. "LOGIN" submit button — pill-shaped (border-radius: 31px), dark bg
   (#333333) via pseudo-element, 62px tall, uppercase
8. "Don't have an account? / SIGN UP NOW" link at bottom

The aesthetic is clean and minimal with heavily rounded (pill) shapes
throughout. Typography uses Oswald (Regular, Medium, Bold). The social
buttons provide visual color accents against the neutral gray background.

**WHAT MAKES LOGINLENS DISTINCT (signature behaviors):**

1. **Pill-shaped everything.** Social buttons (25px radius), inputs (31px radius), and submit button (31px radius) all use extreme border-radius to create a rounded, pill-like aesthetic.
2. **Dual social login.** Facebook (#3b5998) and Twitter (#1da1f2) social buttons stacked vertically with Font Awesome icons, providing the primary color accents.
3. **Show/hide password toggle.** An eye icon inside the password field toggles between masked and visible text, with a transition effect.
4. **Oversized inputs.** 62px tall inputs with 35px horizontal padding — large hit targets for touch.
5. **Minimal structure.** No header, no sidebar, no images — just a centered form with social + email options and a sign-up link.

## Design tokens

- **Background**: `#e6e6e6` (full-viewport light gray, `min-height: 100vh`)
- **Card**: `width: 320px`, `background: transparent`, `border-radius: 0`
- **Typography**: Font family `'Oswald', sans-serif` (Google Fonts — Regular 400, Medium 500, Bold 700). Heading "Login": Oswald-Medium, 30px, color `#43383e`.
- **Social buttons (Facebook)**: `background: #3b5998`, `color: #fff`, `border-radius: 25px`, `height: 50px`, `width: 100%`, font `Oswald-Medium 16px`, icon `fa fa-facebook-official` 20px. Hover: `background: #333333`.
- **Social buttons (Twitter)**: `background: #1da1f2`, `color: #fff`, `border-radius: 25px`, `height: 50px`, `width: 100%`, font `Oswald-Medium 16px`, icon `fa fa-twitter` 20px. Hover: `background: #333333`.
- **Separator text "Login with email"**: `Oswald-Bold`, `20px`, `color: #333333`, centered, `padding: 55px 0 30px`
- **Input fields (email, password)**: `background: #fff`, `border-radius: 31px`, `height: 62px`, `padding: 0 35px`, `font: Oswald-Medium 16px`, `color: #43383e`, placeholder color `#43383e`. No visible border.
- **Password toggle (eye icon)**: `color: #aaaaaa`, `font-size: 15px`, positioned `absolute`, `right: 25px`, `cursor: pointer`. Hover/active: `color: #111111`.
- **Login submit button**: `background: transparent` with `::before` pseudo-element `background: #333333`, `border-radius: 31px`, `height: 62px`, `min-width: 160px`, `font: Oswald-Regular 16px uppercase`, `color: #fff`. Hover pseudo-element: `background: #222222`, expands to `width: calc(100% + 20px)`.
- **"Don't have an account?" text**: `Oswald-Regular 16px`, `color: #999999`, centered, `padding-bottom: 10px`.
- **"SIGN UP NOW" link**: `Oswald-Regular 16px`, `color: #333333`, `text-transform: uppercase`, `border-bottom: 1px solid #929292`. Hover: `border-bottom-color: #111111`, `color: #111111`.
- **Error validation**: `border: 1px solid #c80000`, `border-radius: 14px`, `color: #c80000`, `font-size: 13px`.
- **Box model reset**: `* { margin: 0; padding: 0; box-sizing: border-box; }`

## Gherkin requirements

### Scenario: Full-viewport background renders
Given the user navigates to LoginLens
Then the page body should display a light gray (#e6e6e6) background
And the background should cover the full viewport height

### Scenario: Login heading is visible
Given the user navigates to LoginLens
Then a heading "Login" should be visible
And the heading should be centered on the page

### Scenario: Facebook social login button renders
Given the user navigates to LoginLens
Then a button labeled "Login with Facebook" should be visible
And the button should display a Facebook icon
And the button should have a blue (#3b5998) background
And the button should be pill-shaped (rounded corners)

### Scenario: Twitter social login button renders
Given the user navigates to LoginLens
Then a button labeled "Login with Twitter" should be visible
And the button should display a Twitter icon
And the button should have a light blue (#1da1f2) background
And the button should be pill-shaped (rounded corners)

### Scenario: Social buttons hover to dark
Given the user hovers over a social login button
Then the button background should change to a dark color (#333333)

### Scenario: Email input renders
Given the user navigates to LoginLens
Then an input field with placeholder "Email" should be visible
And the input should accept text input
And the input should be pill-shaped with white background

### Scenario: Password input renders
Given the user navigates to LoginLens
Then a password input with placeholder "Password" should be visible
And the input should mask typed characters

### Scenario: Show/hide password toggle renders
Given the user navigates to LoginLens
Then a show/hide password toggle icon should be visible in the password field
And clicking the toggle should reveal the password text
And clicking the toggle again should hide the password text

### Scenario: Login submit button renders and is clickable
Given the user navigates to LoginLens
Then a button labeled "Login" should be visible
And the button should be pill-shaped
And the button should be clickable

### Scenario: "Login with email" separator renders
Given the user navigates to LoginLens
Then a text "Login with email" should be visible between social buttons and form inputs
And the text should be centered

### Scenario: Sign up link renders
Given the user navigates to LoginLens
Then text "Don't have an account?" should be visible
And a link labeled "Sign up now" should be visible below it
And clicking the link should be non-navigating (href="#")

### Scenario: Responsive layout on mobile
Given the user resizes the viewport to 375px width
Then the form should shrink to fit the viewport width
And all inputs, buttons, and links should remain usable

### Scenario: Accessibility - semantic elements
Given the user navigates to LoginLens
Then the form should use semantic HTML elements
And the inputs should have associated labels or placeholders
And the button should have an accessible name

### Scenario: Footer links to Component Dock
Given the user navigates to LoginLens
Then the footer should contain a link to "https://www.componentdock.com/"
And the link text should reference "Component Dock"

## Verification checklist

- [ ] Oswald font loaded via Google Fonts (Regular, Medium, Bold)
- [ ] Full-viewport gray (#e6e6e6) background
- [ ] "Login" heading centered, Oswald-Medium 30px
- [ ] Facebook social button: #3b5998, pill-shaped, icon + text
- [ ] Twitter social button: #1da1f2, pill-shaped, icon + text
- [ ] Social buttons hover to #333333
- [ ] "Login with email" separator centered
- [ ] Email input: white bg, pill-shaped, 62px tall, placeholder visible
- [ ] Password input: white bg, pill-shaped, 62px tall, masked
- [ ] Show/hide password toggle: eye icon, toggles visibility
- [ ] Login button: pill-shaped, #333333 bg, uppercase, expands on hover
- [ ] "Don't have an account?" + "SIGN UP NOW" link with bottom border
- [ ] Responsive: works at 375px viewport width
- [ ] Semantic HTML (form, inputs, button, labels/placeholders)
- [ ] Footer links to https://www.componentdock.com/ (branded "Component Dock")
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
