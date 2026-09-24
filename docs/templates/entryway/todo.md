# Entryway — Implementation Notes

Recreation of ColorLib **Login Form V3** (`login-form-v3`)
Preview: https://preview.colorlib.com/theme/login-form-v3/ (404)
Screenshot used as reference: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v3.jpg

## Structure order (section-by-section)

1. **Page background** — full viewport, light gray base with a faded city skyline
   image (use picsum.photos placeholder or similar desaturated city photo)
2. **Login card** — centered div, gradient background (purple→magenta diagonal),
   rounded corners, box-shadow
3. **Logo** — white circle with a mountain/landscape icon (use lucide-react
   `Mountain` icon or similar)
4. **Heading** — "LOG IN" white uppercase letter-spaced text
5. **Username field** — left icon (User), white placeholder, underline bottom
   border only
6. **Password field** — left icon (Lock), white placeholder, underline bottom
   border only, type="password"
7. **Remember me** — checkbox + label, white text
8. **Login button** — white pill button, dark text, centered
9. **Forgot Password link** — white text, centered below button
10. **Footer** — "Made with Component Dock" link (per conventions)

## Fidelity notes

- The card gradient is the defining visual feature: purple (#7c6aef) top-left
  to magenta (#c94cf0) bottom-right. Use a CSS linear-gradient at ~135deg.
- Inputs have NO background — they are transparent and show the card gradient
  through. Only the bottom border (underline) is visible.
- The logo circle is pure white with a dark icon. Use lucide-react `Mountain`
  or `Image` icon in dark gray inside a white circle.
- Background image: the original uses a desaturated city skyline photo. Use
  `https://picsum.photos/seed/entryway-skyline/1920/1080` as a placeholder,
  then apply a CSS filter (grayscale + opacity) to match the faded look.
- Card shadow: soft, spread, ~0 15px 35px rgba(0,0,0,0.2)
- Button has no visible border — it's a solid white pill with dark text.
- No logo text — just the icon in the circle.
- "Forgot Password?" is a plain text link, not a button.

## Component plan

- `src/App.tsx` — layout container (centered, background)
- `src/components/LoginCard.tsx` — gradient card with logo, heading, form
- `src/components/Footer.tsx` — Component Dock link
- `src/index.css` — Tailwind entry, @theme tokens for gradient colors

## Design tokens for @theme

```
--color-gradient-start: #7c6aef
--color-gradient-end: #c94cf0
--color-card-text: #ffffff
--color-input-placeholder: rgba(255,255,255,0.8)
--color-input-border: rgba(255,255,255,0.4)
--color-button-bg: #ffffff
--color-button-text: #333333
--color-page-bg: #e8e8e8
```
