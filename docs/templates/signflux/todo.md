# SignFlux — Design Notes & Implementation Outline

## Source

- ColorLib slug: `creative-login-form`
- Source URL: https://colorlib.com/wp/template/creative-login-form/
- Preview: https://preview.colorlib.com/theme/creative-login-form/ (404 at prep time)
- Screenshot analyzed: https://colorlib.com/wp/wp-content/uploads/sites/2/creative-html5-css3-login-form.png

## Design Analysis (from screenshot)

A minimal, single-page login form with no navigation, no footer sections, and no additional content beyond the form itself. The entire viewport is filled with a solid green background (#77CC6D). A white card is centered vertically and horizontally, containing:

1. Username input (light gray background, placeholder text)
2. Password input (light gray background, placeholder text)
3. Full-width green LOGIN button (uppercase white text, sharp corners)
4. "Not registered? Create an account" link in gray/green

The design is intentionally minimal — a clean, modern login page suitable for authentication flows.

## Implementation Tasks

### 1. Create app scaffold
- Copy simplest existing login/auth app (or create from scratch)
- Rename package to `@free-react-templates/signflux`
- Set up `vite.config.ts` with `injectUiSource()` helper
- Create `public/CNAME` with `signflux.free.componentdock.com`

### 2. Build components
- `src/App.tsx` — Main layout (full-viewport green background, centered card)
- `src/components/LoginCard.tsx` — The white card containing the form
- `src/components/LoginForm.tsx` — Username/password inputs + login button + registration link
- `src/index.css` — Tailwind entry + theme tokens (green brand color)

### 3. Tailwind theme tokens
```css
@theme {
  --color-brand-green: #77CC6D;
  --color-brand-green-dark: #6AB860;
  --color-input-bg: #f7f7f7;
  --color-placeholder: #94a3b8;
  --color-body-text: #64748b;
}
```

### 4. Component structure
```
src/
  main.tsx
  App.tsx              — Full viewport, green bg, flex center
  index.css            — Tailwind + theme
  components/
    LoginCard.tsx      — White card with shadow
    LoginForm.tsx      — Form inputs + button + link
  test/
    setup.ts
    App.test.tsx
    LoginCard.test.tsx
    LoginForm.test.tsx
```

### 5. Fidelity notes
- Match the exact green (#77CC6D) as the page background
- Card: white, generous padding (~40px), subtle shadow
- Inputs: full-width, light gray bg (#f7f7f7), no visible border, ~4px radius
- Button: full-width, green bg, white uppercase text, sharp corners (no radius)
- "Not registered? Create an account" — gray text with green link
- No header, no footer (beyond Component Dock attribution in footer)
- Add a minimal footer with Component Dock link per conventions

### 6. Testing
- Test form renders with all expected elements
- Test input fields accept text
- Test form submission behavior
- Test responsive layout
- Test button hover states
- 100% coverage required

### 7. Verification
- Run `scripts/verify-app.sh signflux`
- Ensure no ColorLib references in app code
- Footer links to Component Dock
