# Loginsphere — Implementation Notes

## Source Mapping
- **ColorLib slug:** login-form-15
- **ColorLib URL:** https://colorlib.com/wp/template/login-form-15/
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/login-form-15/
- **New name:** loginsphere

## Section Order (top → bottom)

1. **Page wrapper** — full viewport, centered flex layout, #f8f9fd background
2. **Card container** — white bg, 5px radius, shadow, max-width ~500px, centered
3. **Image banner** — 200px tall, background-image with cover, top of card
4. **Login form section** — padded (p-4/p-md-5), white bg
   a. Header row — flex: "Sign In" h3 left, social icons right
   b. Social icons — Facebook + Twitter, 40x40px circles, #999 icon color, hover → #01d28e bg + white icon
   c. Username input — floating label animation, border-radius 5px, height 48px
   d. Password input — same as username + eye toggle icon on right
   e. Submit button — full width, #01d28e bg, white text, 5px radius, outline on hover
   f. Remember Me + Forgot Password row — flex, left/right split
5. **Sign Up footer** — "Not a member? Sign Up" centered text

## Component Breakdown

| Component | File | Notes |
|---|---|---|
| LoginCard | LoginCard.tsx | Outer card wrapper with shadow + radius |
| ImageBanner | ImageBanner.tsx | Top decorative image (use picsum.photos) |
| LoginForm | LoginForm.tsx | Form with inputs, button, checkbox, links |
| SocialIcons | SocialIcons.tsx | Facebook + Twitter circular icon buttons |
| FloatingInput | FloatingInput.tsx | Input with animated floating label |
| PasswordToggle | PasswordToggle.tsx | Password field with eye icon toggle |

## Design Fidelity Notes

- **Font:** Lato from Google Fonts (weights 300, 400, 700). Load via `<link>` in index.html.
- **Brand color #01d28e:** Use as Tailwind custom color in @theme. Apply via bg-brand, text-brand, border-brand classes.
- **Floating label:** CSS transition (400ms) — label moves up (-120%), scales to 12px, uppercase, bold, turns #01d28e on focus/valid.
- **Password toggle:** Uses Font Awesome eye icon in original; use lucide-react Eye/EyeOff icons instead.
- **Social icons:** Original uses Font Awesome fa-facebook/fa-twitter. Use lucide-react Facebook/Twitter icons.
- **Card shadow:** `0px 10px 34px -15px rgba(0,0,0,0.24)` — map to Tailwind shadow or custom CSS.
- **Button hover:** Transparent background + teal text (outline reversal pattern).
- **Image:** Use `https://picsum.photos/seed/loginsphere-banner/800/400` for deterministic placeholder.
- **No colorlib references** in any app file — provenance only in spec + TEMPLATES.md.
- **Footer:** "Made with Component Dock" linking https://www.componentdock.com/

## Implementation Order

1. Scaffold app from simplest existing app (copy + rename package)
2. Set up index.css with @theme brand color token
3. Build FloatingInput component (reusable)
4. Build PasswordToggle component
5. Build SocialIcons component
6. Build ImageBanner component
7. Build LoginCard (composes all above)
8. Build App.tsx (single page, centered layout)
9. Write tests (Vitest + Testing Library)
10. Verify: typecheck + lint + 100% coverage + build
