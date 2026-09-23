# Festpoint — Design Notes

## Source

- ColorLib template: Eventalk
- Preview URL: https://preview.colorlib.com/theme/eventalk/
- Screenshot analyzed for layout and visual hierarchy

## Design Tokens

- Primary brand: #34c0e7 (teal/cyan blue) — used for CTA buttons, accent text, icon backgrounds
- Font: Work Sans (Google Fonts, weights 300–900)
- Dark sections: Tailwind gray-900 (navbar, hero, footer)
- Light sections: Tailwind gray-50 (services, speakers)
- Body text: Tailwind gray-500 (#6b7280)
- Headings: Tailwind gray-900 (#111827)

## Layout Decisions

- Hero: full-height with background image from picsum.photos, dark overlay for text contrast
- Services: 4-column responsive grid (1→2→4 columns)
- Counter: 2-column split (image left, stats right on desktop; stacked on mobile)
- Speakers: 4-column grid with circular photos
- Schedule: tab-based day switcher with session cards
- Blog: 3-column card grid with hover effects
- Footer: 3-column widget area + bottom bar with Component Dock branding

## Differences from Original

- Countdown timer is static display (not live JS timer)
- Social icons use inline SVG (brand icons removed from lucide-react)
- All images use picsum.photos placeholders
- Footer links to Component Dock instead of Colorlib attribution
