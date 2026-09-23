# LoginGuard — Implementation Notes

## Source

- **ColorLib:** Login Form 19 (`login-form-19`)
- **Preview:** https://preview.colorlib.com/theme/login-form-19/ (404)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/login-form-19-1.jpg
- **Source page:** https://colorlib.com/wp/template/login-form-19/

## Design Tokens (extracted from screenshot)

| Token | Value | Notes |
|---|---|---|
| Page bg | #F5C7A9 | Warm peach/salmon, full viewport |
| Card bg | #141432 | Dark navy, centered card |
| Card shadow | 0 8px 30px rgba(0,0,0,0.18) | Subtle elevation on peach bg |
| Card radius | ~8px | rounded-lg |
| Primary color | #B598B0 | Mauve/dusty-rose — button background |
| Primary hover | #A68BA1 | Darker mauve for hover |
| Heading text | #ffffff | White, uppercase, bold, centered |
| Subtitle text | #9A9AAE | Muted lavender-gray, centered |
| Input text | #ffffff | White placeholder and typed text |
| Input border | rgba(255,255,255,0.3) | Underline only (bottom border) |
| Input focus | rgba(255,255,255,0.7) | Brighter underline on focus |
| Button text | #ffffff | White on mauve background |
| Button radius | ~6px | Slightly rounded |
| Forgot link | #9A9AAE | Muted, right-aligned |
| Sign up text | #ffffff / #B598B0 | White body + mauve link |
| Font | "Poppins", sans-serif | Google Fonts, clean geometric |
| Avatar | Circular clip, ~80px | Picsum placeholder photo |

## Section Order

1. **Page wrapper** — full-viewport peach (#F5C7A9) background, flex center
2. **Page title** — "Login #09" text above card, dark color, centered
3. **Card** — dark navy (#141432), rounded-lg, shadow, padded ~40px
4. **Avatar** — circular clipped image (80px), centered at top of card
5. **Heading** — "WELCOME" white uppercase bold, centered
6. **Subtitle** — "Sign in by entering the information below" muted, centered
7. **Username input** — person icon + underline border (no box), placeholder "Username"
8. **Password input** — lock icon + underline border, placeholder "Password"
9. **Forgot Password** — right-aligned link in muted color
10. **Submit button** — full-width "Get Started" mauve button, rounded
11. **Sign up prompt** — "Don't have an account?" + "SIGN UP" link, centered
12. **Footer** — Component Dock link

## Implementation Notes

- Use `lucide-react` for person and lock icons (User, Lock)
- Avatar: `<img>` with `rounded-full` + `object-cover` + fixed dimensions; use `picsum.photos/seed/loginguard-1/160/160` for placeholder
- Input fields: use `border-b` (bottom-only) with transparent other borders; Tailwind `focus:border-white/70` transition
- Button: full-width mauve, white text, rounded-md, hover darkens
- Page layout: `min-h-screen` flex items-center justify-center on peach bg
- Card: max-w-sm, mx-auto, dark bg, rounded-xl, shadow-lg, p-10
- Poppins font via `<link>` in index.html from Google Fonts
- No ColorLib references in any app code; provenance in spec only
