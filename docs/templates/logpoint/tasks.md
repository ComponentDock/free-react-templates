# Logpoint — Design Notes & Tasks

Source: ColorLib Login Form 17
Preview: https://preview.colorlib.com/theme/login-form-17/
Spec: openspec/specs/template-logpoint/spec.md

## Tasks

- [ ] Create app scaffold (copy simplest app, rename to @free-react-templates/logpoint)
- [ ] Set up index.css with Tailwind theme tokens (brand gradient, fonts)
- [ ] Implement split-screen card layout (flex row desktop, column mobile)
- [ ] Implement left panel: Sign In heading, social icons, form fields, button, checkbox, link
- [ ] Implement right panel: gradient background, welcome text, Sign Up button
- [ ] Add responsive breakpoints (mobile stacks vertically)
- [ ] Write component tests (Vitest + Testing Library)
- [ ] Ensure 100% coverage
- [ ] Add footer with Component Dock link
- [ ] Verify with scripts/verify-app.sh logpoint

## Structure order

```
src/
  main.tsx
  App.tsx
  components/
    LoginForm.tsx      — left panel (heading, social icons, form, button, checkbox/link)
    WelcomePanel.tsx   — right panel (gradient bg, heading, subtext, sign up button)
  index.css
  test/
    setup.ts
```

## Fidelity notes

- **Layout**: Centered card (~800px wide on desktop), split 50/50. Left = white bg form, right = gradient bg.
- **Gradient**: Coral-pink, approximately `linear-gradient(135deg, #ee5a6f, #f0a2a2)`. Used on Sign In button AND right panel.
- **Inputs**: Pill-shaped (border-radius ~24px), light gray border, placeholder text.
- **Labels**: Uppercase, small, dark gray — above each input.
- **Sign In button**: Full-width within form, gradient background, white text, pill shape.
- **Social icons**: Facebook + Twitter, gray, small, in top-right of left panel.
- **Right panel text**: "Welcome to login" is large, white, italic/serif-style. Subtext is smaller white. Sign Up button is outlined white border, pill shape.
- **Checkbox**: Coral/pink accent when checked.
- **Mobile**: Card stacks vertically, right panel below left. Gradient panel retains height proportionally.
- **Fonts**: Poppins for headings, Lato/Roboto for body (based on ColorLib defaults).
- **No assets needed**: Use lucide-react for social icons, placeholder images if needed for background.
