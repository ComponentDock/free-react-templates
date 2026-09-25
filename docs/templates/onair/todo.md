# Onair — Implementation Notes

Source: ColorLib Eighty8 → https://preview.colorlib.com/theme/eighty8/

## Component Order (section-by-section)

1. `Navbar.tsx` — Dark sticky navbar with logo, nav links, social icons
2. `Hero.tsx` — Full-width slider with background image, city name, "UP NEXT" text, yellow circular nav arrows
3. `PromoCards.tsx` — Three-column grid: Our DJs / Live Streams / Events (icons + heading + description)
4. `Podcast.tsx` — Featured podcast section with heading, title, and yellow "LISTEN LIVE" button
5. `Charts.tsx` — Numbered chart list (1-5) with song name and artist
6. `Footer.tsx` — Two-part footer: 4-column top (Locations, Top Shows, Blog, Contact) + copyright bottom with Component Dock link

## Fidelity Notes

- **Color palette:** Dark theme. Primary BG #191919, hero #080808, cards #212121. Accent yellow #ffe400 throughout (buttons, borders, active states).
- **Typography:** Roboto via Google Fonts. Weight 400 body, 700 headings/buttons. Font sizes: 36px hero heading, 30px/24px section titles, 18px buttons, 14px body.
- **Buttons:** Rounded (5px radius), yellow bg + dark text. Variants: dark (black), light (white), line (yellow border on transparent).
- **Hero slider:** Full-width, ~962px height, circular yellow-bordered nav arrows (56px, border-radius 50%). Overlay text with city name and "UP NEXT" track info.
- **Promo cards:** Equal-width columns with icon (Font Awesome → use lucide-react), heading, brief description.
- **Charts:** Simple numbered list. Tab-style filter buttons with yellow border + bg, transparent on active.
- **Footer:** 4-column grid. Locations list, numbered Top Shows, 2 blog cards, contact details (address, phone, email). Copyright bar at bottom.
- **Social icons in navbar:** Twitter, SoundCloud, Instagram, Google+, Facebook, YouTube (→ lucide-react equivalents or social SVGs).
- **No parallax or video backgrounds** — static dark images via picsum.photos.

## Tasks

- [ ] Set up workspace (copy simplest existing app, rename package)
- [ ] Configure Tailwind theme tokens (brand yellow, dark palette, Roboto font)
- [ ] Build Navbar component with logo, nav links, social icons
- [ ] Build Hero slider component with city/track overlay and nav arrows
- [ ] Build PromoCards three-column section
- [ ] Build Podcast featured section
- [ ] Build Charts numbered list section
- [ ] Build Footer with 4-column grid + copyright
- [ ] Compose all sections in App.tsx
- [ ] Write tests (Vitest + RTL) for all components
- [ ] Ensure 100% coverage
- [ ] Verify responsive behavior
- [ ] Run per-app gate (scripts/verify-app.sh onair)
