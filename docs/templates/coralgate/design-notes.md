# Coralgate — Design Notes & Implementation Outline

Source: ColorLib Login Form 17 (`login-form-17`)
Preview: https://preview.colorlib.com/theme/login-form-17/ (404 at prep time)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-17-2.jpg

## Structure Order (sections top to bottom)

1. **Page wrapper** — full viewport, light gray background (#f5f5f5), flex centered
2. **Card container** — max-width ~750px, rounded corners (~4px), drop shadow, flex row (two columns)
3. **Left column (form panel)** — white bg, padding, header row ("Sign In" + social icons), username input, password input, Sign In button, Remember Me + Forgot Password row
4. **Right column (welcome panel)** — coral/pink gradient bg, vertically centered content: heading, subtext, Sign Up outline button

## Fidelity Notes

### Colors
- Page bg: light gray (#f5f5f5) — solid fill
- Left panel: pure white (#ffffff)
- Right panel: coral/pink gradient — top lighter (#f06292) to bottom deeper (#e91e63) — this is the defining color
- CTA button: solid coral pink (#f06292), matching the right panel
- Checkbox + "Remember Me" label: coral pink (#f06292)
- Social icons: muted gray (#888888), small size
- Sign Up button: white outline on transparent bg

### Typography
- Font: Poppins or similar clean sans-serif (Google Fonts)
- "Sign In" heading: ~24px, weight 400-500, dark
- Uppercase labels ("USERNAME", "PASSWORD"): ~12px, weight 600, gray, letter-spacing
- Input text: ~14px, placeholder in light gray
- "Sign In" button text: ~16px, weight 500, white
- Right panel heading: ~28px, weight 700, white
- "Don't have an account?": ~14px, white
- "Sign Up" button: ~14px, weight 500, white

### Layout
- Single centered card, no header/footer navigation
- Two columns: left ~55%, right ~45%
- Right panel has vertically centered content
- On mobile: columns stack (form on top, welcome below)
- Inputs: pill-shaped (border-radius ~25px), light gray bg, no visible border
- Sign In button: pill-shaped, full-width within left column
- Sign Up button: pill-shaped, outline style, white border

### Interactive Elements
- Username text input (pill style)
- Password input with no visible toggle (just standard password field)
- Sign In button (coral, pill)
- Remember Me checkbox (coral, checked by default)
- Forgot Password link (gray)
- Social icon buttons (Facebook, Twitter) next to "Sign In" heading
- Sign Up button (white outline, on right panel)

## Component Plan

```
src/
  App.tsx             — centers the LoginCard
  components/
    LoginCard.tsx     — two-column card container
    LoginForm.tsx     — left column: header, inputs, button, remember me
    WelcomePanel.tsx  — right column: gradient bg, heading, sign up button
    SocialIcon.tsx    — reusable small social icon button
  index.css           — Tailwind entry + @theme tokens (coral, gray, white)
```

## Implementation TODO

- [ ] Scaffold app from simplest existing login template
- [ ] Set up Tailwind theme tokens (coral pink, light gray, white)
- [ ] Build LoginCard layout (two-column flex, responsive stacking)
- [ ] Build LoginForm: heading row with social icons, pill inputs, coral CTA button, remember me row
- [ ] Build WelcomePanel: coral gradient bg, heading, subtext, outline Sign Up button
- [ ] Add Google Fonts (Poppins) link to index.html
- [ ] Add ComponentDock footer link
- [ ] Write tests (Vitest + RTL) — cover all Gherkin scenarios
- [ ] Verify 100% coverage
- [ ] Run verify-app.sh
- [ ] Commit, push, open PR
