# SignCraft — Design Notes & Implementation Todo

## Template Identity
- **Name**: signcraft
- **ColorLib source**: colorlib-regform-33 (Colorlib Reg Form V33)
- **Preview URL**: https://colorlib.com/etc/regform/colorlib-regform-33/
- **Category**: Registration Form

## Section Order (from live preview)

1. **Full-page gradient background** — diagonal 136deg from #fee140 (yellow) to #fa709a (pink), flex centering
2. **Form card container** — 910px width, flex row, white bg, box-shadow
3. **Left panel (image overlay)** — background image with "Sign Up" heading (38px, white) and "Privacy policy & Term of service" subtext (16px, white) with a decorative white line
4. **Right panel (form)** — white card with padding 73px 80px 41px
   - Username field (text input, bottom border style)
   - Email field (email input, pattern validation)
   - Password field (password input)
   - Confirm Password field (password input)
   - Register button (180px wide, #373be3, 4px radius)
   - "Or Sign in" text + link
5. **Footer** — Component Dock attribution link

## Fidelity Notes

### Must Match Exactly
- Gradient direction (136deg) and exact colors
- Input styling: border-bottom only (no full border), 2px solid #e5e5e5
- Focus state: border-bottom turns #2bb33e (green)
- Button: exact #373be3, 4px radius, 180px width, white text, bold
- Button hover: #2a2cb0
- Label styling: uppercase, 13px, weight 600, #666
- Card shadow: 0px 8px 20px rgba(0,0,0,0.15)
- Responsive breakpoints at 991px and 575px

### Can Adapt
- Left panel image: use `https://picsum.photos/seed/signcraft/400/600` (deterministic placeholder)
- "Sign Up" heading text — keep as "Sign Up"
- "Privacy policy & Term of service" — keep as-is
- Form field copy — keep labels as USERNAME, E-MAIL, PASSWORD, CONFIRM PASSWORD
- Button text — keep as "Register"

### Component Structure
```
src/
  App.tsx              — Root with gradient background
  components/
    FormCard.tsx       — The 910px card container (flex row)
    ImagePanel.tsx     — Left side: image + overlay text
    RegistrationForm.tsx — Right side: form with fields + button
  index.css            — Tailwind entry + @theme tokens for brand colors
```

### Tailwind Theme Tokens
```css
@theme {
  --color-brand-yellow: #fee140;
  --color-brand-pink: #fa709a;
  --color-brand-blue: #373be3;
  --color-brand-blue-hover: #2a2cb0;
  --color-brand-green: #2bb33e;
  --color-label: #666666;
  --color-input-border: #e5e5e5;
}
```

## Implementation Tasks

- [ ] Create `apps/signcraft/` from a minimal existing app (copy, rename package)
- [ ] Set up `package.json` with `@free-react-templates/signcraft`
- [ ] Create `vite.config.ts` with `injectUiSource()`
- [ ] Create `index.html` with Open Sans Google Fonts link
- [ ] Create `src/index.css` with Tailwind 4 entry + `@theme` tokens
- [ ] Create `src/App.tsx` with gradient background layout
- [ ] Create `src/components/ImagePanel.tsx` (image + text overlay)
- [ ] Create `src/components/RegistrationForm.tsx` (4 fields + button + sign-in link)
- [ ] Create `src/components/FormCard.tsx` (flex container)
- [ ] Create `public/CNAME` with `signcraft.free.componentdock.com`
- [ ] Write component tests (Vitest + Testing Library)
- [ ] Ensure 100% coverage
- [ ] Run `scripts/verify-app.sh signcraft`
- [ ] Run `npm install` at root to register workspace
- [ ] Commit: `feat: add SignCraft (ColorLib colorlib-regform-33) template`
- [ ] Open PR and merge
- [ ] Deploy to `signcraft.free.componentdock.com`
