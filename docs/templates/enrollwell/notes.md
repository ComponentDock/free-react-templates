# Enrollwell — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Colorlib Regform 24" — https://colorlib.com/wp/template/colorlib-regform-24/
- **Preview:** https://preview.colorlib.com/theme/colorlib-regform-24/ (404 — unreachable)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-24.jpg
- **Preview fetched:** No (404 Not Found)
- **CSS tokens extracted:** No — derived from screenshot visual analysis

## Section Order (top → bottom)

1. **Split-Screen Layout** — full viewport, left = photo, right = pink form panel
   - No navbar, no footer (self-contained registration page)

## Fidelity Notes

### Split-Screen Layout
- Full viewport height (100vh), two equal halves
- Left: full-bleed background image (child/person) — use `https://picsum.photos/seed/enrollwell-hero/960/1080`
- Right: solid pink/salmon background (#F0939B), centered content

### Sign Up Heading
- "SIGN UP" in decorative/handwritten font (suggest: `Pacifico` or `Satisfy` from Google Fonts)
- White or slightly darker pink text
- Wavy underline decoration below (can use SVG path or CSS pseudo-element)

### Form
- 3 fields: Username, E-mail, Password
- Each has a label (white text, sans-serif font) + input below
- Inputs: white background, light gray border (#E0E0E0), no border-radius or slight rounding
- Generous padding inside inputs

### CTA Button
- "CREATE MY ACCOUNT" text
- White background, pink text (#F0939B)
- Pill-shaped (border-radius ~25px)
- Full-width or near-full-width within the panel
- Subtle hover state (slight opacity or shadow)

### Social Sign-Up
- "Sign up with social platforms" label (white text, smaller font)
- 4 circular icon buttons in a row: Facebook, Instagram, Twitter, Tumblr
- White outlines, white icon color, transparent/semi-transparent bg
- Use `lucide-react` icons (Facebook, Instagram, Twitter) + custom Tumblr or generic

### Responsive Behavior
- Desktop: side-by-side 50/50 split
- Mobile: stack vertically — image on top, form panel below
- Form panel takes full width on mobile

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `EnrollForm.tsx` | Full page | Split-screen container with form |
| `SignUpHeading.tsx` | Heading | Decorative font, wavy underline |
| `RegistrationForm.tsx` | Form fields | Username, Email, Password inputs + CTA button |
| `SocialSignUp.tsx` | Social icons | 4 circular icon buttons |
| `Footer.tsx` | Footer | Component Dock link only |

## Placeholder Assets

- Hero image: `https://picsum.photos/seed/enrollwell-hero/960/1080`
- No other images needed (pure form page)
- Social icons: `lucide-react` (Facebook, Instagram, Twitter, Tumblr)

## Key Differences from Original

- Preview was unreachable (404) — design based solely on screenshot
- No FontAwesome — use `lucide-react` for social icons
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
- Google Fonts loaded via `<link>` in index.html (Pacifico + Poppins)
