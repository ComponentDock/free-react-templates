# Template: AccessGate (Login Form)

## Purpose

AccessGate is a single-page LOGIN FORM in the free-react-templates monorepo.
It is an original React recreation of the ColorLib "Login Form V6" free
template (source: https://colorlib.com/wp/template/login-form-v6/, preview:
https://preview.colorlib.com/theme/login-form-v6/), built under a DIFFERENT
name (**AccessGate**), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original is a single-page login form with a glassmorphism-style card
centered over a full-screen background image. The card has a semi-transparent
backdrop-blur effect with a rounded border. The form contains two inputs
(email/phone + password), a "Login" button, "Remember me" checkbox, "Forgot
Password?" link, and "Create new account" link. Typography uses Roboto
Condensed. The aesthetic is clean, minimal, and modern with transparent
UI elements over a photographic background.

**WHAT MAKES ACCESSGATE DISTINCT (signature behaviors):**

1. **Glassmorphism card.** The login container uses `backdrop-filter: blur(30px)` with a transparent background and `2px solid rgba(0,0,0,.2)` border, `border-radius: 20px`. This gives the frosted-glass effect over the background image.
2. **Full-screen background image.** The entire viewport is covered by a background image (centered, `no-repeat`, `min-height: 100vh`), with the card centered both horizontally and vertically using flexbox.
3. **Transparent inputs and button.** All form fields (inputs, button) have transparent backgrounds matching the card, with the same `2px solid rgba(0,0,0,.2)` border and `border-radius: 20px` — creating a cohesive frosted-glass look throughout.
4. **Minimal layout.** No section header, no logo, no social login — just a centered card with "Login" heading, two inputs, a button, and utility links (remember me, forgot password, create account). The simplicity is the design.

## Design tokens

- **Background**: Full-screen background image (`https://picsum.photos/seed/accessgate/1920/1080`), centered, no-repeat, `min-height: 100vh`
- **Card**: `background: transparent`, `backdrop-filter: blur(30px)`, `border: 2px solid rgba(0,0,0,.2)`, `border-radius: 20px`, `width: 450px`, `padding: 40px 20px`
- **Typography**: Font family `'Roboto Condensed', sans-serif` (Google Fonts), heading "Login" default size with margin `10px 0`
- **Input fields**: `padding: 1rem`, `width: 100%`, `border: 2px solid rgba(0,0,0,.2)`, `border-radius: 20px`, `font-size: 20px`, `background: transparent`, `color: black`, placeholder color `black`
- **Login button**: `padding: 1rem`, `width: 100%`, `border-radius: 20px`, `border: 2px solid rgba(0,0,0,.2)`, `font-size: 20px`, `font-weight: 600`, `margin-top: 30px`, `background: transparent`, `color: black`, `cursor: pointer`
- **Remember me + Forgot Password row**: `display: flex`, `justify-content: space-evenly`, `margin: 20px 0`, font-size `20px`, color `black`
- **Register link**: `color: black`, `font-size: 22px`, `margin: 20px 0`, `text-decoration: underline`
- **Colors**: All text/borders are `black` (or `rgba(0,0,0,.2)` for borders) — the design relies on contrast from the background image, not on brand accent colors
- **Box model reset**: `* { padding: 0; margin: 0; box-sizing: border-box; text-decoration: none; outline: none; }`

## Gherkin requirements

### Scenario: Full-page background renders
Given the user navigates to AccessGate
Then the page body should display a full-screen background image
And the background should be centered and cover the viewport

### Scenario: Glassmorphism card renders centered
Given the user navigates to AccessGate
Then a frosted-glass card should be centered on the page
And the card should have a semi-transparent backdrop blur effect
And the card should have a rounded border

### Scenario: Login heading is visible
Given the user navigates to AccessGate
Then a heading "Login" should be visible inside the card

### Scenario: Email/phone input renders
Given the user navigates to AccessGate
Then a text input with placeholder "Email address or phone number" should be visible
And the input should accept text input

### Scenario: Password input renders
Given the user navigates to AccessGate
Then a password input with placeholder "Password" should be visible
And the input should mask typed characters

### Scenario: Login button renders and is clickable
Given the user navigates to AccessGate
Then a button labeled "Login" should be visible
And the button should be clickable

### Scenario: Remember me checkbox renders
Given the user navigates to AccessGate
Then a checkbox labeled "Remember me" should be visible
And clicking the checkbox should toggle its checked state

### Scenario: Forgot Password link renders
Given the user navigates to AccessGate
Then a link labeled "Forgot Password?" should be visible
And clicking the link should be non-navigating (href="#")

### Scenario: Create new account link renders
Given the user navigates to AccessGate
Then a link labeled "Create new account" should be visible
And clicking the link should be non-navigating (href="#")

### Scenario: Responsive layout on mobile
Given the user resizes the viewport to 375px width
Then the card should shrink to fit the viewport width
And all inputs and button should remain usable

### Scenario: Accessibility - semantic elements
Given the user navigates to AccessGate
Then the form should use semantic HTML elements
And the inputs should have associated labels or placeholders
And the button should have an accessible name

### Scenario: Footer links to Component Dock
Given the user navigates to AccessGate
Then the footer should contain a link to "https://www.componentdock.com/"
And the link text should reference "Component Dock"

## Verification checklist

- [ ] Background image fills viewport (`min-height: 100vh`)
- [ ] Card is vertically and horizontally centered
- [ ] Card has `backdrop-filter: blur(30px)` for glassmorphism
- [ ] Card border is `2px solid rgba(0,0,0,.2)` with `border-radius: 20px`
- [ ] "Login" heading renders inside the card
- [ ] Email/phone text input renders with correct placeholder
- [ ] Password input renders with correct placeholder and masking
- [ ] Login button renders with transparent style and full width
- [ ] "Remember me" checkbox toggles on click
- [ ] "Forgot Password?" link renders and is accessible
- [ ] "Create new account" link renders and is accessible
- [ ] Footer links to Component Dock
- [ ] Responsive on mobile (375px viewport)
- [ ] Google Fonts (Roboto Condensed) loads via `<link>` in index.html
- [ ] All Tailwind utilities compile (no `@source` path issues)
- [ ] 100% test coverage on changed code
- [ ] No ColorLib references in app code (provenance only in spec)
