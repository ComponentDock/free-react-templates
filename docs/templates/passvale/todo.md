# Passvale — Implementation Task Outline

Recreation of ColorLib "Login Form 20" (slug: `login-form-20`).
Preview: https://preview.colorlib.com/theme/login-form-20/ (404 — design from screenshot only)

## Structure order (section-by-section)

1. **FullPageBackground** — full-viewport scenic mountain image (background-size: cover)
2. **LoginForm** (centered overlay) — contains all form elements:
   - Title heading
   - Subtitle text
   - Username input (transparent bg, bottom border)
   - Password input (transparent bg, bottom border, eye toggle)
   - SIGN IN button (pill-shaped, salmon/peach)
   - Remember Me checkbox + Forgot Password link (same row)
   - "Or Sign In With" divider
   - Facebook + Twitter social buttons (white bg)
3. **Footer** — Component Dock link

## Design fidelity notes

- **No card container**: the form floats directly on the background image — no white card, no shadow, no border. Just text + inputs + buttons overlaid on the scenic photo.
- **Transparent inputs**: inputs have no visible background; only a subtle white bottom-border is visible. Text typed is white.
- **Color palette**: white text for all headings/labels, salmon/peach `#E8A090` for the primary button, white for social buttons with dark text.
- **Typography**: clean sans-serif (system stack or Poppins/Lato). Title is large and bold. Subtitle is lighter weight, slightly transparent.
- **Button shapes**: SIGN IN is fully rounded (pill). Social buttons have minimal rounding (~4px).
- **Spacing**: generous vertical spacing between form elements (~16-20px gaps). Form is vertically centered in upper portion of viewport (not dead center, slightly above center).
- **Responsive**: form width shrinks on mobile, social buttons may stack or reduce width. Background stays full-viewport.

## Component structure

```
src/
  App.tsx              — composes FullPageBackground + LoginForm + Footer
  components/
    LoginForm.tsx      — all form fields, button, social buttons
    PasswordToggle.tsx — eye icon toggle for password visibility
    SocialButtons.tsx  — Facebook + Twitter button row
  index.css            — Tailwind entry + @theme with brand colors
  test/setup.ts        — jest-dom import
```

## Key implementation details

- Use a placeholder scenic mountain image: `https://picsum.photos/seed/passvale/1920/1080`
- Password toggle: useState for `showPassword`, toggle input type between "password"/"text"
- Checkbox: default checked via `defaultChecked` prop
- Form is non-functional (no actual auth) — just visual replica
- Footer must include Component Dock link per conventions
