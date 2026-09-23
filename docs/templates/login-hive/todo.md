# LoginHive — Implementation Notes

Source: ColorLib "Login Form 10" (login-form-10)
Preview: https://preview.colorlib.com/theme/bootstrap/login-form-10/
Source page: https://colorlib.com/wp/template/login-form-10/
New name: `login-hive`

## Structure order (section by section)

1. **App.tsx** — Two-column split layout container (flex row, centered, full viewport height)
2. **SocialLogin.tsx** (left column) — "or sign in with" text + three social buttons
3. **Divider.tsx** (center) — "— or —" text divider
4. **LoginForm.tsx** (right column) — White card with heading, subtext, inputs, checkbox, button
5. **Footer.tsx** — Minimal footer with Component Dock link

## Section-by-section fidelity notes

### Layout container (App.tsx)
- Full viewport height (`min-h-screen`)
- Light blue-gray background (#f8fafb)
- Flex row, items-center, justify-center
- Max-width container (~1000px), padding on sides
- Three columns: left (flex-1, social), center (flex-none, divider), right (flex-1, form)

### SocialLogin.tsx (left column)
- "or sign in with" text: small, light gray (#b3b3b3), centered, mb-4
- Three rectangular block-style social buttons stacked vertically (not circular!)
  - Facebook: bg #3b5998, white icon, full-width
  - Twitter: bg #1da1f2, white icon, full-width
  - Google: bg #ea4335, white icon, full-width
- Each button: full-width (btn-block), color white, margin-bottom 10px
- Hover: darken background (Facebook #344e86, Twitter #0d95e8, Google #e82e1e)
- Transition: 0.3s all ease
- Use lucide-react icons (Facebook, Twitter, Google) or Font Awesome equivalents

### Divider.tsx (center)
- "— or —" text, light gray (#b3b3b3)
- Centered vertically and horizontally
- Only visible on desktop (hidden on mobile)

### LoginForm.tsx (right column)
- White card (#ffffff) with shadow (0 2px 3px 0 rgba(0,0,0,0.1))
- Padding: 30px
- Heading: "Sign In to LoginHive", dark bold (#212529), h3 size
- Subtext: "Lorem ipsum dolor sit amet elit..." gray (#b3b3b3), font-weight 300
- Username input: bottom-border only (#ccc), no background, font-size 20px
  - Floating label: moves up when focused or field has value
  - Label: 12px, #b3b3b3
- Password input: same styling, type="password"
- Row: checkbox "Remember me" (left) + "Forgot Password" link (right, aligned end)
  - Checkbox accent: #38d39f (teal-green) when checked
  - Checkbox unchecked: #e6e6e6
  - Forgot Password: #888, underlined, font-size 14px
- "Log In" button: full-width, bg #38d39f, white text, pill (border-radius 30px), height 54px
  - Hover: bg #29bb8a
  - Focus ring: 0 0 0 0.2rem rgba(53, 185, 141, 0.5)

### Footer.tsx
- Simple centered text: "More templates at Component Dock"
- Link to https://www.componentdock.com/

## Design tokens for Tailwind @theme

```css
@theme {
  --color-primary: #38d39f;
  --color-primary-dark: #29bb8a;
  --color-bg-page: #f8fafb;
  --color-bg-card: #ffffff;
  --color-text-heading: #212529;
  --color-text-secondary: #b3b3b3;
  --color-text-muted: #888888;
  --color-input-border: #cccccc;
  --color-checkbox-unchecked: #e6e6e6;
  --color-social-facebook: #3b5998;
  --color-social-twitter: #1da1f2;
  --color-social-google: #ea4335;
}
```

## Dependencies

- No new npm dependencies needed
- Use lucide-react for social icons (Facebook, Twitter, Google)
- Use packages/ui components where applicable (Button, Input)

## Files to create

- `apps/login-hive/src/App.tsx` — main two-column layout
- `apps/login-hive/src/components/SocialLogin.tsx` — social login buttons
- `apps/login-hive/src/components/Divider.tsx` — "— or —" divider
- `apps/login-hive/src/components/LoginForm.tsx` — form component with card
- `apps/login-hive/src/components/Footer.tsx` — footer
- `apps/login-hive/src/index.css` — Tailwind entry + theme tokens
- `apps/login-hive/src/test/setup.ts` — test setup
- `apps/login-hive/package.json` — workspace package
- `apps/login-hive/vite.config.ts` — Vite config
- `apps/login-hive/tsconfig.json` — TypeScript config
- `apps/login-hive/public/CNAME` — Surge CNAME
