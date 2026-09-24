# Logintide — Implementation Notes

## Source

- **ColorLib template:** Login Form V3
- **Source slug:** `login-form-v3`
- **ColorLib page:** https://colorlib.com/wp/template/login-form-v3/
- **Live preview:** https://colorlib.com/etc/lf/Login_v3/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v3.jpg

## Design overview

Full-viewport centered login page with a purple-to-magenta gradient form card floating over a background image with a semi-transparent white overlay. Clean, modern, single-card aesthetic. The most popular ColorLib login template.

## Section order (top to bottom)

1. **Background container** — full viewport height, flex center, background image (use `https://picsum.photos/seed/logintide-bg/1920/1080`), `rgba(255,255,255,0.9)` white overlay via `::before` pseudo-element
2. **Form card** — 500px wide, border-radius 10px, padding 55px 55px 37px 55px, gradient `linear-gradient(to bottom, #7579ff, #b224ef)`
3. **Logo circle** — 120x120px, white bg, border-radius 50%, centered, contains a landscape/mountain icon (use lucide-react `Mountain` icon, color #333333)
4. **"Log in" title** — Poppins Medium 30px, white, uppercase, centered, margin-bottom ~27px
5. **Username input** — transparent bg, full width, height 45px, white text, bottom border 2px `rgba(255,255,255,0.24)`, left padding for icon, placeholder "Username" in white, lucide-react `User` icon (positioned absolutely, animates on focus)
6. **Password input** — same styling as username, placeholder "Password", lucide-react `Lock` icon
7. **"Remember me" checkbox** — hidden native input, custom white square indicator (16x16, radius 2px), lucide-react `Check` icon when checked (color #555555), label in Poppins Regular 13px white
8. **Login button** — full width, height 50px, border-radius 25px (pill), gradient `linear-gradient(to top, #7579ff, #b224ef)`, Poppins Medium 16px, text #555555 → #fff on hover (white `::before` overlay fades out)
9. **"Forgot Password?" link** — centered, Poppins Regular 13px, #e5e5e5 → #fff on hover
10. **Footer** — "Made with Component Dock" link to https://www.componentdock.com/

## Fidelity notes

- **Gradient:** The card and button use the same two-stop gradient but in opposite directions: card is top-to-bottom (#7579ff → #b224ef), button is bottom-to-top. Use Tailwind arbitrary `bg-gradient-to-b from-[#7579ff] to-[#b224ef]` for card, `bg-gradient-to-t from-[#7579ff] to-[#b224ef]` for button.
- **Input focus animation:** The original uses CSS `::before`/`::after` pseudo-elements with transitions. The `::before` expands the underline from 0 to 100% width; the `::after` is the icon that floats up and shrinks. Replicate with Tailwind `peer-focus:` utilities and transition classes.
- **Button hover:** Uses a `::before` pseudo-element with white background at opacity 1 that transitions to opacity 0 on hover. The text color changes from #555555 to #fff. Use a `group` + `group-hover` pattern.
- **Checkbox:** The original hides the native checkbox and uses `::before` with Material Design Iconic Font. Use a hidden native checkbox + `peer` pattern with lucide-react `Check` icon that appears when checked.
- **Fonts:** Poppins from Google Fonts (Regular 400, Medium 500, SemiBold 600). Load via `<link>` in `index.html`.
- **Background:** Use a placeholder image from picsum.photos with deterministic seed. The white overlay is a `::before` pseudo-element at `rgba(255,255,255,0.9)`.
- **Validation:** The original uses a custom `alert-validate` tooltip that appears on hover over invalid fields. Implement with form state validation and conditional tooltip display.
- **Responsive:** Only one breakpoint: below 576px, card padding reduces to 55px 15px 37px 15px. Card width stays at 500px but may need `max-w-full` on mobile.
- **No split layout** — this is a single centered card design, not a two-panel layout.

## Component structure

```
src/
  App.tsx               — background container with centered card
  components/
    LoginForm.tsx        — the form card (logo, title, inputs, checkbox, button, link)
    FormInput.tsx        — reusable input with icon and focus animation
    Checkbox.tsx         — custom "Remember me" checkbox
    Footer.tsx           — Component Dock attribution link
```

## Implementation tasks

- [ ] Create app scaffold (copy simplest login app, rename to logintide)
- [ ] Set up index.css with theme tokens (gradient-start: #7579ff, gradient-end: #b224ef, etc.)
- [ ] Load Poppins font via Google Fonts link in index.html
- [ ] Implement background container (full viewport, image, white overlay)
- [ ] Implement LoginForm component (card with gradient, logo, title, inputs, checkbox, button, link)
- [ ] Implement FormInput component (reusable with icon + focus animation)
- [ ] Implement Checkbox component (custom styled "Remember me")
- [ ] Wire up App.tsx with centered layout
- [ ] Add form validation with tooltip feedback
- [ ] Add responsive padding adjustment below 576px
- [ ] Add footer with Component Dock link
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck, lint, tests, build
