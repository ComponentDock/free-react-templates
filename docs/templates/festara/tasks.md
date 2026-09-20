# Festara — Implementation Tasks & Design Notes

Source: ColorLib Eventz → https://preview.colorlib.com/theme/eventz/
New name: festara

## Section Order (fidelity to source)

1. **Navbar** — sticky white header, logo left, nav links right, "Get Your Ticket" CTA
2. **Hero** — full-width bg image, subtitle + heading, Download button + video play circle, countdown timer
3. **About** — two-column: left (heading, text, Where/When cards, CTA button), right (image)
4. **Speakers** — dark bg image, white heading, 6 speaker cards (3×2 grid)
5. **Event Schedule** — tabbed accordion (Day 1/2/3), session items with time/title/desc/venue
6. **Gallery** — image grid, dark overlay on hover
7. **Pricing** — 3 cards, white default → purple (#31118f) on hover/active
8. **Sponsors** — deep purple (#2e0e8c) bg, heading, logo row
9. **Blog** — 2 post cards with image, title, meta
10. **Footer** — 4 columns: About, Contact, Links, Newsletter + Component Dock attribution

## Component Plan

- `App.tsx` — compose all sections in order
- `components/Navbar.tsx` — sticky header with mobile hamburger
- `components/Hero.tsx` — bg image overlay, countdown timer (useState + useEffect)
- `components/About.tsx` — two-column layout with info cards
- `components/Speakers.tsx` — dark section, 6 speaker cards
- `components/Schedule.tsx` — tabbed content with day switching
- `components/Gallery.tsx` — image grid with hover overlay
- `components/Pricing.tsx` — 3 pricing cards with hover state
- `components/Sponsors.tsx` — logo row on purple bg
- `components/Blog.tsx` — 2 blog post cards
- `components/Footer.tsx` — 4-column footer

## Design Notes

- Brand primary `#331391` for buttons, nav hover, accents
- Gold `#ffdb6f` for countdown timer and video play border
- Hero button: white bg, purple text, rectangular (0px radius)
- All CTA buttons: rectangular, no border-radius, purple bg
- Heading font: Sarabun (Google Fonts)
- Body font: Roboto (Google Fonts)
- Label font: Sen (Google Fonts) — for section subtitle spans
- Sponsors section bg: `#2e0e8c` (deep purple, distinct from brand primary)
- Pricing active card: `#31118f` bg, white text, slight scale transform
- Hero: conference crowd/speaker image as background, white text overlay
- Countdown: gold numbers + labels, positioned bottom-right of hero
- Gallery hover: dark semi-transparent overlay
- Footer: dark background, 4 equal columns

## Placeholder Images

- Hero bg: `https://picsum.photos/seed/festara-hero/1920/900`
- About image: `https://picsum.photos/seed/festara-about/600/400`
- Speaker photos: `https://picsum.photos/seed/festara-speaker-N/300/300` (N=1..6)
- Gallery: `https://picsum.photos/seed/festara-gallery-N/400/400` (N=1..6)
- Blog images: `https://picsum.photos/seed/festara-blog-N/400/250` (N=1..2)

## Implementation Notes

- Countdown timer: use `useState` + `useEffect` with `setInterval`, target a fixed future date
- Tabs in Schedule: controlled component with active tab state
- Mobile menu: hamburger toggle with `useState`, slide-in or dropdown
- Pricing hover: CSS transition on background-color + transform scale
- Gallery hover: CSS transition on overlay opacity
- All sections: semantic HTML (`<section>`, `<nav>`, `<header>`, `<footer>`)
- Footer MUST include "Made with Component Dock" link to https://www.componentdock.com/
