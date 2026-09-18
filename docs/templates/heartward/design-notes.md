# Heartward — Design Notes

## Source

Recreation of ColorLib [Charilife](https://colorlib.com/wp/template/charilife/).

## Preview URL

https://preview.colorlib.com/theme/charilife/

## Design Tokens (from CSS)

- Brand color: `#ff573d` (coral/orange-red) — used for CTAs, accents, highlights
- Dark background: `#15181d` — navbar, footer, date badges
- Light section background: `#ececec` — alternating sections (features, events, blog)
- Body text: `#666`
- Muted text: `#999999`
- Surface/accent: `#f0e9ff` (purple tint, used sparingly)
- Fonts: Lora (headings), Roboto (body, weight 300)
- Button style: solid coral bg, white text, 2px border-radius, hover → transparent

## Sections (in order)

1. Navbar — transparent → solid on scroll; brand "Heartward"; nav links; Donate CTA
2. Hero — parallax background, dark overlay, headline "Save the children"
3. About — two-column: text + image; partner logos with grayscale hover
4. Features — "How Could You Help"; 3 cards with icons
5. Causes — "Popular Causes"; 3 cards with progress info + donate buttons
6. CTA Banner — full-width background image + "Volunteer Needed" headline
7. Events — "Upcoming Event"; 3 cards with date badges + countdown
8. Blog — "Latest From Our Blog"; featured post + 3 sidebar posts
9. Newsletter — email signup form
10. Footer — about, quick links, newsletter, contact; Component Dock link

## Differences from Source

- No parallax scrolling (CSS-only in original; static bg-cover in React)
- Placeholder images via picsum.photos (no original assets copied)
- Font loaded via Google Fonts (Lora + Roboto)
- Brand icons replaced with inline SVGs (lucide-react for feature icons)
