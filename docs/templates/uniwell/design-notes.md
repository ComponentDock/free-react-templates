# Uniwell — Design Notes

## Source

ColorLib "Unicat" — https://colorlib.com/wp/template/unicat/
Preview: https://preview.colorlib.com/theme/unicat/

## Analysis

An e-learning / university landing page template with:

1. Dark navy top bar with contact info + login
2. White navbar with teal-accented logo + nav links + search/cart
3. Full-width hero with students background, serif heading, search bar
4. Welcome section with 4 feature cards
5. Course categories grid (6 items)
6. Popular courses grid (6 cards with ratings/prices)
7. Registration CTA banner
8. Dark navy footer with brand, links, contact, Component Dock

## Tokens Extracted

- Primary #34c3eb — teal/cyan accent (buttons, links, active states)
- Navy #1b1b2f — dark backgrounds (top bar, footer)
- Cloud #f8f9fa — light section alternation
- Snow #ffffff — card/section backgrounds
- Ink #1a1a1a — heading text
- Charcoal #444444 — body text
- Smoke #888888 — muted/secondary text
- Heading font: Merriweather (serif, Google Fonts)
- Body font: Open Sans (sans-serif, Google Fonts)

## Implementation Notes

- Used picsum.photos seeded placeholders instead of original images
- Lucide-react icons for UI elements (Phone, Mail, Search, ShoppingCart, etc.)
- Mobile-first responsive design with hamburger menu
- Search bar with keyword input + two dropdowns + search button
- No ColorLib references in app source code

## Reference tokens (measured 2026-10-23)

Read from `https://preview.colorlib.com/theme/unicat/` (HTTP 200, 35,758 B, title
`Unicat`) and its theme sheet `styles/main_styles.css` (34,637 B, sha256
`ae7a80996e71…`), over Bootstrap 4 (127,343 B) and `responsive.css` (5,618 B).
Not a rebuild.

| Token | Reference | App (`apps/uniwell`) |
| ----- | --------- | -------------------- |
| Brand | `#14bdee` (31: top bar, active nav underline, prices, buttons, hovers) | invented ramp `#34c3eb` / `#1fb0dc` / `#1fb0dc`… |
| Heading ink | `#384158` (14) | `--color-ink: #1a1a1a` |
| Body copy | `#a5a5a5` (1, `body`) | `--color-smoke: #888888` |
| Subtitle | `#76777a` (4) | not tokenised |
| Placeholder | `#b5b8be` (17) | not tokenised |
| Footer | `#1e2434` | `--color-navy: #1b1b2f` |
| Card shadow | `0 1px 10px rgba(29,34,47,0.1)`, radius 6px | `shadow-md` |
| UI face | **Roboto** 14px | `'Open Sans'` ← invented |
| Display face | **Roboto Slab 700** | `'Merriweather'` ← invented (wrong slab) |
| Button | 14px/500 uppercase, `letter-spacing: .1em`, radius 3px | 3px-ish, no tracking |

Two of the three faces/ramp decisions in the app are inventions rather than
measurements: the brand is a single `#14bdee` literal in the reference, and the
display face is Roboto Slab.

Section order measured: header (phone/email/register + search) → slider H1 +
3-field search → "Welcome To Unicat E-Learning" 4 features → popular courses (3)
→ Register Now counter band + form → upcoming events (3) → best tutors (4) →
latest news (5) + newsletter → footer `#1e2434`.
