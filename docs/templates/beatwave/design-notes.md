# Beatwave — Prep Notes

Source: ColorLib "Dj" — https://colorlib.com/wp/template/dj/
Preview: https://preview.colorlib.com/theme/dj/
Category: Music

## Implementation Tasks

1. Scaffold app from simplest existing music app (copy + rename package)
2. Set up theme tokens in `index.css` (brand gold #e4ae50, fonts Montserrat + Nunito)
3. Build `Navbar.tsx` — transparent absolute nav, brand "Beatwave", 3 links, mobile hamburger
4. Build `Hero.tsx` — full-viewport dark section, gold heading, subtext, outline CTA, decorative image
5. Build `FeaturedEvents.tsx` — 3-column grid, event cards with image, date badge, title, description
6. Build `UpcomingEvents.tsx` — asymmetric image grid (1 large + 2 small), gold heading overlays
7. Build `VideoSection.tsx` — 2-column: video thumbnail with play button + description + CTA
8. Build `Footer.tsx` — 4-column dark footer, about/nav/subscribe/video sections, social icons, copyright
9. Compose in `App.tsx` — section order: Navbar → Hero → FeaturedEvents → UpcomingEvents → VideoSection → Footer
10. Write tests (Vitest + RTL) for each component — 100% coverage
11. Run `scripts/verify-app.sh beatwave`

## Fidelity Notes

### Section Order
Navbar → Hero → Featured Events → Upcoming Events → We Love Music (Video + CTA) → Footer

### Hero
- Full viewport height (100vh, min 770px)
- Dark/black background
- Decorative DJ figure image positioned absolutely on right side
- Gold heading (80px, Montserrat bold)
- White subtext
- Outline-primary "Join Us" button (gold border, transparent bg, 30px radius)

### Navbar
- Absolute positioned, transparent, over hero
- Brand: "Beatwave" in white, bold, H2 size
- Links: white at 60% opacity → full white on hover
- Mobile: hamburger icon toggles slide-in menu

### Featured Events
- Centered heading "Featured Events" with gold bottom border line (pseudo-element)
- 3 equal-width columns (col-lg-4)
- Each card:
  - Image with overflow hidden + hover zoom (scale 1.2 transition)
  - Gold date badge overlaid on image (day + month, circular/pill)
  - White event title on dark
  - Gray description text
  - "Info" link in gold

### Upcoming Events
- Centered heading "Upcoming Events" with gold bottom border
- Asymmetric grid: 1 tall left block + 2 stacked right blocks
- Each block: background-size cover, gold heading text with box-shadow effect
- Hover: slight scale transition on images
- AOS fade-up animations with staggered delays

### We Love Music / Video + CTA
- Two columns: image left, text right
- Image has play button overlay (centered, semi-transparent circle)
- Play button triggers Vimeo popup (use a modal instead)
- Right side: heading, lead subtext, two paragraphs, "Join Us" gold primary button

### Footer
- Dark background (#000 implied from styling), generous padding
- 4 columns on desktop, stacked on mobile
- About Us: heading + paragraph
- Navigations: heading + link list (Home, DJs, News, Top 20)
- Follow Us: heading + social icon row (Facebook, Twitter, Instagram, LinkedIn)
- Subscribe: heading + email input + gold submit button
- Watch Video: heading + image thumbnail + play button popup
- Copyright: "Made with ❤ by Component Dock" with link to https://www.componentdock.com/

### Design Tokens Summary
- Brand gold: #e4ae50
- Dark bg: #000000
- Text: #25262a (body), #737373 (footer), #999999 (links), #fff (headings)
- Fonts: Montserrat (headings), Nunito (body)
- Button radius: 30px (pill)
- Date badge: 50% border-radius (circle)
- No custom icon fonts — use lucide-react for social/play icons

### Images (placeholders)
- Hero DJ image: picsum.photos/seed/beatwave-hero/800/900
- Event card 1: picsum.photos/seed/beatwave-event1/600/400
- Event card 2: picsum.photos/seed/beatwave-event2/600/400
- Event card 3: picsum.photos/seed/beatwave-event3/600/400
- Upcoming large: picsum.photos/seed/beatwave-upcoming1/800/600
- Upcoming small 1: picsum.photos/seed/beatwave-upcoming2/400/300
- Upcoming small 2: picsum.photos/seed/beatwave-upcoming3/400/300
- Video thumbnail: picsum.photos/seed/beatwave-video/600/400
- Footer video thumb: picsum.photos/seed/beatwave-footervid/400/250

### ColorLib ↔ Beatwave mapping
- Source slug: `dj`
- Source name: "Dj"
- New name: `beatwave`
- Brand: "Beatwave" (replaces "Dj.")
- Nav links: "Home", "DJs" → "Artists", "Shows" (or keep as-is)
- Footer copyright: replace Colorlib credit with Component Dock
