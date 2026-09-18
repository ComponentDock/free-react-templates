# Converge — Design Notes

Recreation of ColorLib "Confpro" — a marketing conference landing template.

## Source

- Preview: https://preview.colorlib.com/theme/confpro/
- Screenshot: ColorLib TEMPLATES.md entry

## Design tokens

- Brand: `#7f66ff` (purple/violet)
- Dark navy: `#0a2642` (header, section overlays)
- Body text: `#68727c`
- Muted: `#a5a5a5`
- Salmon accent: `#ffa07f`
- Orange CTA: `#ff9000`
- Font: Roboto (300–900) via Google Fonts

## Sections

1. Navbar — fixed, dark navy, logo + nav + CTA + mobile menu
2. Hero — full-screen bg image, heading, date/location, CTA, dots
3. Countdown — parallax bg, live 4-unit countdown
4. Intro — centered heading + paragraph + CTA
5. Topics — 6 tabbed content panels with images
6. Schedule — 2-column day layout, session cards
7. Speakers — 3×2 grid with dark overlay cards
8. CTA — orange bg, heading, description, ticket button
9. Footer — 3-column: about/social, newsletter, gallery; Component Dock link

## Implementation notes

- Brand icons (Facebook, Twitter, Dribbble) use inline SVGs (removed from lucide-react)
- Countdown uses `useState(() => Date.now())` lazy init to satisfy purity lint
- Placeholder images via `picsum.photos/seed/<name>/<w>/<h>`
