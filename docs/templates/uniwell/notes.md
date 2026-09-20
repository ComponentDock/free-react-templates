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
