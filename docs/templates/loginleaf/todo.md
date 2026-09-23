# LoginLeaf — Implementation Notes

Source: ColorLib "Login Form 08" (login-form-08)
Preview: https://preview.colorlib.com/theme/login-form-08/ (404 — design from screenshot)
New name: `loginleaf`

## Structure order (section by section)

1. **App.tsx** — Two-column layout container (flex row, centered, full viewport height)
2. **LoginForm.tsx** (left column) — Form wrapper with heading, subtext, inputs, checkbox, button, social login
3. **Illustration.tsx** (right column) — Decorative flat illustration (SVG or placeholder image)
4. **Footer.tsx** — Minimal footer with Component Dock link

## Section-by-section fidelity notes

### Layout container (App.tsx)
- Full viewport height (`min-h-screen`)
- White background
- Flex row, items-center, justify-center
- Max-width container (~1000px), padding on sides
- Two equal columns (flex-1 each)

### LoginForm.tsx
- Heading: "Sign In to LoginLeaf", dark bold, ~28-32px
- Subtext: "Lorem ipsum dolor sit amet..." style, gray (#999), ~14px
- Username input: no full border, bottom-border only (#ddd), placeholder "Username"
- Password input: same styling, type="password", placeholder "Password"
- Row: checkbox "Remember me" (left) + "Forgot Password" link (right, aligned end)
  - Checkbox accent: mint/teal (#4ecdc4)
  - Forgot Password: blue/gray link
- "Log In" button: full-width, bg #4ecdc4, white text, rounded-md, py-3
- "or sign in with" text: small, gray, centered
- Three social buttons: circular (rounded-full), 40px, icons inside
  - Facebook: #3b5998, Facebook icon
  - Twitter: #1da1f2, Twitter icon
  - Google: #dd4b39, Google icon

### Illustration.tsx
- Flat-style vector illustration
- Contains: laptop, tablet, phone mockups with UI elements
- Decorative teal/mint leaf/plant elements
- Character figure (person)
- Use placeholder image (picsum) or SVG illustration
- Aspect ratio: roughly square or slightly taller

### Footer.tsx
- Simple centered text: "More templates at Component Dock"
- Link to https://www.componentdock.com/

## Design tokens for Tailwind @theme

```css
@theme {
  --color-primary: #4ecdc4;
  --color-primary-dark: #3dbdb5;
  --color-input-border: #dddddd;
  --color-text-secondary: #999999;
  --color-social-facebook: #3b5998;
  --color-social-twitter: #1da1f2;
  --color-social-google: #dd4b39;
}
```

## Dependencies

- No new npm dependencies needed
- Use lucide-react for social icons (Facebook, Twitter, Google)
- Use packages/ui components where applicable (Button, Input)

## Files to create

- `apps/loginleaf/src/App.tsx` — main layout
- `apps/loginleaf/src/components/LoginForm.tsx` — form component
- `apps/loginleaf/src/components/Illustration.tsx` — decorative illustration
- `apps/loginleaf/src/components/Footer.tsx` — footer
- `apps/loginleaf/src/index.css` — Tailwind entry + theme tokens
- `apps/loginleaf/src/test/setup.ts` — test setup
- `apps/loginleaf/package.json` — workspace package
- `apps/loginleaf/vite.config.ts` — Vite config
- `apps/loginleaf/tsconfig.json` — TypeScript config
- `apps/loginleaf/public/CNAME` — Surge CNAME
