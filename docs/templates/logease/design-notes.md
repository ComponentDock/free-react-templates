# Logease — Design Notes & Implementation Outline

Source: ColorLib Login Form 16 (`login-form-16`)
Preview: https://preview.colorlib.com/theme/login-form-16/ (404 at prep time)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-16-2.jpg

## Structure Order (sections top to bottom)

1. **Page wrapper** — full viewport, light gray background (#f5f5f5), flex centered
2. **Card container** — max-width ~700px, rounded corners, drop shadow, flex row (two columns)
3. **Left column (form panel)** — white bg, padding, "Sign In" heading, username input, password input with eye toggle
4. **Right column (CTA panel)** — mauve bg (#9b6b8a), full-height, dark CTA button, Remember Me + Forgot Password row, social divider, social icons

## Fidelity Notes

### Colors
- Page bg: very light gray (#f5f5f5) — simple solid fill, no gradient
- Left panel: pure white (#ffffff)
- Right panel: muted mauve/dusty pink (#9b6b8a) — this is the defining color of this template
- CTA button: dark navy (#1a1a2e) — high contrast against mauve
- Social icons: white circles on mauve bg, mauve-colored icons inside

### Typography
- Font: Poppins (Google Fonts) — clean, modern sans-serif
- "Sign In" heading: ~28px, weight 400-500, dark color
- Labels: ~14px, weight 400, medium gray
- Input text: ~14px, placeholder in light gray
- CTA button text: ~16px, weight 500, white
- "— Or Sign In With —": ~13px, white, letter-spacing

### Layout
- Single centered card, no header/footer navigation
- Two equal-width columns inside the card
- On mobile: columns stack vertically (left form on top, right CTA below)
- Card has subtle box-shadow for depth
- Inputs have bottom-border styling (minimal, modern look)

### Interactive Elements
- Eye icon toggle on password field (show/hide)
- Remember Me checkbox (checked by default)
- "Forgot Password" link (white text on mauve)
- Social buttons: circular white bg, Facebook (f) and Twitter (bird) icons
- CTA button: full-width within right column, slight border-radius

## Component Plan

```
src/
  App.tsx          — centers the LoginCard
  components/
    LoginCard.tsx  — the two-column card container
    LoginForm.tsx  — left column: heading, username, password, eye toggle
    LoginCta.tsx   — right column: CTA button, remember me, forgot password, social
    SocialButton.tsx — reusable circular social icon button
  index.css        — Tailwind entry + @theme tokens (mauve, navy, gray)
```

## Implementation TODO

- [ ] Scaffold app from simplest existing login template
- [ ] Set up Tailwind theme tokens (mauve, navy, page gray)
- [ ] Build LoginCard layout (two-column flex, responsive stacking)
- [ ] Build LoginForm: heading, inputs, password toggle
- [ ] Build LoginCta: button, checkbox row, divider, social icons
- [ ] Add Google Fonts (Poppins) link to index.html
- [ ] Add ComponentDock footer link
- [ ] Write tests (Vitest + RTL) — cover all Gherkin scenarios
- [ ] Verify 100% coverage
- [ ] Run verify-app.sh
- [ ] Commit, push, open PR
