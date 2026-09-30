# Rosea — Design Notes

## Source

- ColorLib: **Signup Form 17**
- URL: https://colorlib.com/wp/template/signup-form-17/
- Preview (live): https://preview.colorlib.com/theme/bootstrap/signup-form-17/
  — the bare `/theme/signup-form-17/` path 404s; the bootstrap path serves the
  real page. DOM and `css/style.css` fetched from there.
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/signup-form-17.jpg
  (viewed — matches the live DOM/CSS)

## Structure order (top to bottom)

1. Page wrapper — soft pink `#f2d6eb`, full viewport, section padding 7em,
   content centered horizontally
2. Page title — "Sign Up #07" (28px, #000, weight 400), centered above card
3. Card — `#3c3d47`, radius 10px, shadow `0 10px 34px -15px rgba(0,0,0,.24)`
4. Avatar — 100px circle, centered, 20px bottom margin
5. Heading — "Create Your Account" (22px, weight 300, #fff)
6. Form — Full Name / Email Address / Password
7. Password field — eye toggle inside the input (right 15px, white/50)
8. Submit — full-width mint pill `#01d28e`, hover inverts to transparent
9. Sign-in line — "I'm already a member!" (gray) + "Sign In" (`#01d28e`)
10. Footer — Component Dock branding line (mandated; absent in the source)

## Fidelity notes (from real CSS, not guessed)

- **Body**: font Lato 16px/1.8, background `#f2d6eb`, color `gray`.
  Google Fonts link: Lato 300;400;700.
- **Inputs**: NOT filled dark — background `transparent` with
  `1px solid rgba(255,255,255,0.1)` border, radius 40px, height 52px,
  text #fff, placeholder `rgba(255,255,255,0.3)`, horizontal padding 20px.
  Focus: border `rgba(255,255,255,0.2)`, no ring/shadow.
- **Labels**: uppercase, 700, 12px, letter-spacing 1px, #fff.
- **Button**: bg `#01d28e !important`, border same, white text, radius 40px,
  font-size 15px; hover → transparent background, `#01d28e` text/border.
- **Card heading**: font-weight 300 (light), 22px, white.
- **Links**: `a { color: #01d28e }` globally inside the card scope.
- **Avatar**: `width/height: 100px; border-radius: 50%; margin: 0 auto 20px`,
  background cover — placeholder `https://picsum.photos/seed/rosea/200/200`.
- **Eye icon**: absolute, right 15px, vertically centered on the input,
  color `rgba(255,255,255,0.5)`; lucide `Eye`/`EyeOff`.

## Differences from the source

- Name: **Rosea** (new; source name never used in app code)
- Footer: added "More templates at Component Dock" line (mandated branding;
  the source design has no footer)
- Avatar: picsum.photos seeded placeholder instead of the source photo
- Password toggle implemented as a real `<button>` with aria-label (source
  uses a decorative span driven by a snippet script)
- Form submit: `preventDefault()` only (no backend), matching sibling signup
  templates in this repo
- Font loaded via Google Fonts `<link>` (no copied font files)
