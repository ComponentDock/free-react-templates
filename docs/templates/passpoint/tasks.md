# Passpoint — Implementation Notes

Source: ColorLib Login Form 09 (`login-form-09`)
Preview: https://preview.colorlib.com/theme/login-form-09/ (404 — tokens from source CSS)
New name: **passpoint**
Spec: `openspec/specs/template-passpoint/spec.md`

## Section Structure (top to bottom)

1. **Full-page container** — flex, centered, #f8fafb background, 7rem vertical padding
2. **Two-column row** — form left (col-md-6), illustration right (col-md-6)
3. **Form column:**
   - Heading block: "Sign In to **Passpoint**" + gray subtext
   - Username field (bottom-border-only, floating label)
   - Password field (bottom-border-only, floating label)
   - Remember me checkbox + Forgot Password link (flex row)
   - "Log In" button (full-width, blue #007bff, 54px height)
   - "or sign in with" text
   - Social login row: Facebook, Twitter, Google circular buttons
4. **Illustration column:** placeholder image, background-size cover

## Fidelity Notes

- Input styling: transparent background, no full border, only bottom border (1px solid #ccc). Labels are absolute-positioned, 12px, #b3b3b3. On focus, form-group background turns white (#fff).
- Checkbox: custom styled with mint green (#38d39f) checked indicator, 4px radius on the indicator box. Checked by default.
- Social buttons: exactly 50x50px circles, white icons centered, brand-colored backgrounds. Hover darkens slightly.
- Button: Bootstrap-style primary blue (#007bff), full-width, 54px tall, white text.
- Layout: Bootstrap-like grid, columns stack at <992px. Illustration uses background-size: cover.
- Font: Roboto (Google Fonts), weights 300 (paragraph) and 400 (base).

## Implementation Steps

1. Copy simplest existing login app as base (e.g. loginleaf)
2. Rename package to `@free-react-templates/passpoint`
3. Update `index.html` to load Roboto from Google Fonts
4. Build `App.tsx` with two-column layout
5. Build `components/LoginForm.tsx` — heading, fields, checkbox, button, social
6. Build `components/Illustration.tsx` — placeholder image, background-size cover
7. Build `components/Footer.tsx` — Component Dock link
8. Add `src/index.css` with Tailwind + theme tokens (#f8fafb bg, #b3b3b3 text, #38d39f accent, #007bff primary)
9. Write tests for each component
10. Verify 100% coverage, typecheck, lint, build
