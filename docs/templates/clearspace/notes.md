# Clearspace — Design Notes & Task Outline

Source: ColorLib Whitespace
Preview: https://preview.colorlib.com/theme/whitespace/

## Section Order (top → bottom)

1. **Navbar** — dark bg, white links, yellow active indicator, logo left
2. **Hero** — 50/50 split: left black panel (Welcome label, heading, subtitle, yellow CTA), right full-bleed team photo
3. **About** — 2-col: right photo, left text + 4 service items with circle icons (Market Research, Financial Services, Online Marketing, 24/7 Support)
4. **Services Grid** — 6 cards (col-md-6 col-lg-3), each with circle icon + title + blurb
5. **Counter** — dark bg, 4 animated counters (Done Works, Happy Customers, Coffee, Work Hours)
6. **Projects Gallery** — 6-item grid, hover overlay with title
7. **Testimonials** — carousel with quote, client name, role
8. **Case Study** — 3 cards with image + title + description
9. **Pricing** — 3 tiers (Free, Startup, Premium), light bg, feature list + CTA button
10. **Partners** — logo row (5 logos)
11. **Footer** — 3-col: brand blurb, Usefull Links, Quick Links, Have a Questions? contact

## Fidelity Notes

- Hero split is critical: left panel is pure black (#000) with text, right is full photo
- Yellow accent (#fcd307) appears on: "Welcome" underline, CTA buttons, active nav
- Circle icons for services (icon inside a circle container, ~60px)
- Counter section uses dark bg (#000) — numbers animate on scroll
- Project cards have a semi-transparent overlay on hover with title text
- Testimonials use a carousel/slider pattern
- Pricing cards: Free (gray border), Startup (yellow accent), Premium (white on dark)
- Footer has the yellow "Clearspace" branding
- Poppins is primary heading font, Work Sans is body font

## Component Plan

- `Navbar.tsx` — dark nav with links, mobile hamburger
- `Hero.tsx` — split layout, left text panel + right image
- `About.tsx` — heading + 4 service items with circle icons
- `ServicesGrid.tsx` — 6-card grid
- `Counter.tsx` — 4 animated counters on dark bg
- `Projects.tsx` — 6-item image grid with hover overlay
- `Testimonials.tsx` — carousel with quotes
- `CaseStudy.tsx` — 3 cards
- `Pricing.tsx` — 3-tier pricing cards
- `Partners.tsx` — logo row
- `Footer.tsx` — 3-column footer with componentdock link

## Design Tokens (CSS extraction)

- Brand yellow: #fcd307
- Brand blue: #78d5ef
- Dark: #000000
- Body text: #212529
- Secondary text: #6c757d
- Light bg: #f8f9fa
- White: #ffffff
- Headings: Poppins, Arial, sans-serif
- Body: Work Sans, system stack
- Button radius: 0 (square/sharp corners for primary CTA)
- Card radius: 0.25rem
- Icon circle: 50% radius
