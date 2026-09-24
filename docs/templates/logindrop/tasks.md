# LoginDrop — Implementation Notes

## Source

- ColorLib template: Login Form V3 (slug: `login-form-v3`)
- Preview: https://preview.colorlib.com/theme/login-form-v3/ (404)
- Source HTML: https://colorlib.com/etc/lf/Login_v3/index.html
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v3.jpg
- Source CSS: `css/main.css` + `css/util.css` (Poppins font, Material Design Iconic Font)

## Section order (top to bottom)

1. **Background layer** — full viewport, background image with white overlay (rgba(255,255,255,0.9))
2. **Login card** — 500px centered, purple-to-magenta gradient (#7579ff → #b224ef), 10px border-radius
3. **Logo badge** — 120×120px white circle, centered, Material Design landscape icon (#333333)
4. **Title** — "Log in", Poppins Medium 30px, white, uppercase, centered
5. **Username input** — transparent bg, white text, underline border (2px rgba(255,255,255,0.24)), focus animation
6. **Password input** — same as username, type="password"
7. **Remember me checkbox** — custom styled, white 16×16 box, Poppins Regular 13px white label
8. **Login button** — full width, 50px height, pill shape (border-radius 25px), gradient bg, #555555 text, hover: text white + overlay fade
9. **Forgot Password link** — centered, Poppins Regular 13px, #e5e5e5, hover white
10. **Footer** — Component Dock attribution

## Fidelity notes

- **Font**: Poppins (Regular, Medium) — load from Google Fonts, not local files
- **Icons**: Replace Material Design Iconic Font icons with `lucide-react` equivalents
  - Logo icon: `zmdi zmdi-landscape` → `Mountain` or `Image` from lucide-react
  - Checkbox icon: `zmdi` checkbox → native HTML checkbox or custom with lucide
- **Background image**: Use `https://picsum.photos/seed/logindrop-bg/1920/1080` as placeholder
- **No card container in original** — inputs and button float on the gradient, but the card (`.wrap-login100`) IS the gradient container
- **Input focus animation**: Underline grows from 0→100% width (0.4s), placeholder icon slides up
- **Button hover**: White ::before overlay fades out (opacity 1→0), text changes from #555555 to white
- **Validation**: Uses `data-validate` attributes with JS validation; implement with React state + conditional error messages
- **Responsive**: At ≤576px, card padding reduces to 55px 15px 37px 15px

## Component structure

```
apps/logindrop/
  src/
    App.tsx              — composes LoginDrop page
    components/
      LoginCard.tsx      — the gradient card container
      LogoBadge.tsx      — circular white logo with icon
      LoginForm.tsx      — form with inputs, checkbox, button, link
      FormInput.tsx      — reusable input with underline focus animation
      RememberMe.tsx     — custom checkbox component
      LoginButton.tsx    — pill button with gradient + hover effect
    index.css            — Tailwind entry + theme tokens
    main.tsx             — entry point
```

## Design token mapping to Tailwind

```css
@theme {
  --color-gradient-start: #7579ff;
  --color-gradient-end: #b224ef;
  --color-card-border: rgba(255, 255, 255, 0.24);
  --color-btn-text: #555555;
  --color-link-rest: #e5e5e5;
}
```

## Tasks

- [ ] Set up app scaffold (copy simplest existing login app, rename package)
- [ ] Create LoginCard with gradient background
- [ ] Create LogoBadge component
- [ ] Create FormInput with underline focus animation
- [ ] Create RememberMe custom checkbox
- [ ] Create LoginButton with gradient and hover effect
- [ ] Compose LoginForm with all subcomponents
- [ ] Add form validation (required fields)
- [ ] Add responsive breakpoint (≤576px)
- [ ] Add footer with Component Dock link
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
