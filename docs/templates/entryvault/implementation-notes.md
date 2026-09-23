# EntryVault — Implementation Notes

Source: ColorLib Login Form V11 (slug: `login-form-11`)
Preview: `https://preview.colorlib.com/theme/bootstrap/login-form-11/`

## Section order (top to bottom)

1. **Page heading** — centered h2 "EntryVault", 28px, black, above card
2. **Login card** — centered column (~350px), white bg, 10px radius, subtle shadow
   a. **Icon circle** — 80px blue (#1089ff) circle, white lucide-react `User` icon
   b. **"Sign In" heading** — h3, font-weight 300 (light)
   c. **Username input** — text, placeholder "Username", 52px height, 5px radius, light gray border
   d. **Password input** — password, placeholder "Password", same styling
   e. **Login button** — full-width pill (radius 40px), bg #1089ff, white text, 15px font; hover: transparent bg, blue border+text
   f. **Footer row** — flex, space-between:
      - Left: "Remember Me" custom checkbox (brand blue when checked)
      - Right: "Forgot Password" link (#1089ff)
3. **Component Dock footer** — small footer with link to componentdock.com

## Fidelity notes

- **Font**: Lato (300/400/700) — load via `<link>` in index.html from Google Fonts
- **No split screen**: single centered column, no image panel
- **No social logins**: pure username/password form
- **No background image/gradient**: plain white (#fff) page background
- **Custom checkbox**: hide native, use FontAwesome-style checkmark → replace with styled `<input type="checkbox">` using Tailwind + brand color
- **Input focus**: only border changes to #1089ff, no shadow (unlike Bootstrap default)
- **Button hover**: full outline-swap (transparent bg → blue border/text), no scale or shadow
- **Spacing**: 7em vertical padding on section (ftco-section), card has p-4 p-md-5
- **Icons**: replace FontAwesome user icon with lucide-react `User` component
- **No JavaScript interactions** beyond form submission (no toggles, modals, animations)

## Files to create

- `src/App.tsx` — single page composition
- `src/components/LoginCard.tsx` — the card (icon + heading + form + checkbox row)
- `src/components/Checkbox.tsx` — custom styled checkbox component
- `src/components/Footer.tsx` — Component Dock attribution footer
- `src/index.css` — Tailwind entry + Lato font import + theme tokens (@theme)
- `src/main.tsx` — entry point
- `src/test/LoginCard.test.tsx` — vitest + RTL tests
- `src/test/Checkbox.test.tsx` — vitest + RTL tests
- `src/test/Footer.test.tsx` — vitest + RTL tests
- `src/test/App.test.tsx` — integration test

## Token mapping (CSS → Tailwind @theme)

```
--color-brand: #1089ff;
--color-card: #ffffff;
--font-heading: 'Lato', sans-serif;
```

Use `bg-brand`, `text-brand`, `border-brand` via Tailwind theme extension.
