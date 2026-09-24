# Loginbreeze — Implementation Notes

## Source

- **ColorLib template:** Login Form V18
- **Source slug:** `login-form-v18`
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v18/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v18/ (404 — screenshot only)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v18.jpg

## Design overview

Split-screen login page: left panel has a decorative office/desk image (monstera leaves, glasses, laptop on gray background), right panel has a white-background login form. Clean, modern, minimal aesthetic.

## Section order (top to bottom)

1. **Split layout container** — full viewport height, flex row (desktop) / flex col (mobile)
   - Left panel (~55%): background image with subtle gray tone, no overlay text
   - Right panel (~45%): white background, vertically centered content
2. **Form header** — "Login to continue" centered heading, dark text, ~28px, Poppins Medium
3. **Email field** — labeled input, placeholder "johndoe@example.com", hand cursor icon on right
4. **Password field** — labeled input, placeholder "Password", masked characters
5. **Remember row** — checkbox "Remember me" (left) + "Forgot password?" link (right), flex space-between
6. **Login button** — full width, pill-shaped (border-radius 25px), brand blue #5b6abf, white uppercase "LOGIN" text
7. **Social divider** — "or sign up using" text centered
8. **Social icons row** — Facebook (#3b5998) and Twitter (#1da1f2) circular buttons, centered
9. **Footer** — "Made with Component Dock" link to https://www.componentdock.com/

## Fidelity notes

- **Colors:** Brand blue is #5b6abf (indigo-ish), not a standard Bootstrap or Tailwind blue. Use Tailwind arbitrary value or custom theme token.
- **Fonts:** Poppins from Google Fonts, loaded via `<link>` in index.html.
- **Button shape:** Full pill (border-radius 25px), not just rounded-lg.
- **Input styling:** Simple bordered inputs with no background, padding-left for text. The email input has a small hand/click icon — can use lucide-react `MousePointerClick` icon.
- **Responsive:** Below 768px, stack vertically. Left panel image can be hidden or shown as a banner above the form.
- **No background overlay on image** — the left panel shows the raw image with its natural gray tones.
- **Social icons:** Use lucide-react `Facebook` and `Twitter` icons in circular colored backgrounds.

## Component structure

```
src/
  App.tsx               — main split layout
  components/
    ImagePanel.tsx      — left decorative image panel
    LoginForm.tsx       — right side form container
    SocialIcons.tsx     — Facebook/Twitter icon buttons
```

## Implementation tasks

- [ ] Create app scaffold (copy simplest login app, rename to loginbreeze)
- [ ] Set up index.css with theme tokens (brand-blue: #5b6abf, etc.)
- [ ] Implement ImagePanel component (responsive background image)
- [ ] Implement LoginForm component (heading, email, password, remember, forgot, button)
- [ ] Implement SocialIcons component (Facebook + Twitter circles)
- [ ] Wire up App.tsx split layout
- [ ] Add responsive breakpoint (stack below 768px)
- [ ] Add footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck, lint, tests, build
