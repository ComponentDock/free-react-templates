# Fmbeat — Prep Notes

Source: ColorLib "Eighty8" — https://colorlib.com/wp/template/eighty8/
Preview: https://preview.colorlib.com/theme/eighty8/
Category: DJ / Radio Station

## Implementation Tasks

1. Scaffold app from simplest existing music/DJ app (copy + rename package)
2. Set up theme tokens in `index.css` (brand yellow #ffe400, font Roboto, dark palette)
3. Build `Header.tsx` — dark bar, logo, 6 nav links, social icons, mobile hamburger
4. Build `HeroSlider.tsx` — dark bg image, location strip, owl-carousel-like slider with 3 items
5. Build `PromoSection.tsx` — 3-column grid, background images with overlay, yellow headings
6. Build `PodcastSection.tsx` — dark bg, section title with yellow underline, album art + waveform + CTA
7. Build `ChartsSection.tsx` — section title with yellow underline, background image with logo
8. Build `FooterTop.tsx` — 4-column widget layout (Locations, Top Shows, Blog, Contact)
9. Build `FooterBottom.tsx` — copyright bar with Component Dock link
10. Compose in `App.tsx` — section order: Header → Hero → Promo → Podcast → Charts → FooterTop → FooterBottom
11. Write tests (Vitest + RTL) for each component — 100% coverage
12. Run `scripts/verify-app.sh fmbeat`

## Fidelity Notes

### Section Order
Header → Hero Slider → Promotion → Latest Podcast → Charts → Footer (Top + Bottom)

### Header
- Dark background (#212121), bottom border 1px solid white
- Logo image on left (use text "Fmbeat" styled as brand)
- Nav links: Home, About, Charts, DJs, Blog, Contact — white, 16px, inline
- Social links on right: use lucide-react icons (Twitter, Cloud, Instagram, Facebook, Youtube)
- Mobile: hamburger icon (lucide-react Menu), toggles slide-down menu

### Hero Section
- Full-width dark background image (use picsum.photos/seed/fmbeat-hero/1920/962)
- Height: ~962px (not full viewport)
- Top: location strip — 6 locations in a row (hidden on mobile < 768px)
  - Each: small icon/logo + city name (Berlin, Bucharest, London, Budapest, Tel Aviv, Moscow)
- Owl Carousel-like slider: 3 items auto-advancing
  - Each item: "UP NEXT" label (yellow #ffe400, 24px), large heading on dark semi-transparent bg
  - Transition: fade + slide up (opacity 0→1, top 50px→0)
  - Use CSS animations or a simple React interval-based carousel

### Promotion Section
- 3-column grid (col-md-4)
- Each box: height 370px, background-size cover, dark overlay pseudo-element
- Yellow heading centered in each box: "Our DJ's", "Live Streams", "Events"
- Hover: overlay opacity transition (darken effect)

### Latest Podcast Section
- Dark background (#191919), generous padding
- Section title "Latest Podcast" centered, yellow underline (4px bar, absolute bottom)
- Two columns:
  - Left (col-lg-4): album art image
  - Right (col-lg-8): track name ("Hernan Cataneo - Residence #376"), audio waveform area (styled div), "LISTEN LIVE" button
- Button: yellow bg (#ffe400), dark text (#1b1b1b), 5px radius, bold 18px

### Charts Section
- Section title "Charts" centered with yellow underline
- Background image area (height 550px) with large logo/brand overlay
- Dark bg with background-size cover

### Footer Top
- Dark bg (#212121), padding 100px top / 70px bottom
- 4-column layout (col-lg-3):
  - Locations: list of 6 cities
  - Top Shows: numbered list (1–5) with show names
  - Blog: 2 items with thumbnail + title + "Continue Reading"
  - Contact: address, phone, email, small logo image
- Footer headings: white, 16px, bold
- Footer links: #a9a9a9, hover to white

### Footer Bottom
- Darker bg (#1a1a1a), centered text, padding 34px
- Copyright line: "Made with ❤ by Component Dock" with link to https://www.componentdock.com/

### Design Tokens Summary
- Brand accent: #ffe400 (yellow)
- Dark backgrounds: #212121 (header/footer), #1a1a1a (footer bottom), #191919 (sections), #080808 (hero overlay)
- Text: #fff (headings), #a9a9a9 (links/body), #1b1b1b (button text), #7e7e7e (secondary)
- Font: Roboto (Google Fonts)
- Button: yellow bg, dark text, 5px radius
- Section title underline: 4px yellow bar
- No custom icon fonts — use lucide-react for all icons

### Images (placeholders)
- Hero bg: picsum.photos/seed/fmbeat-hero/1920/962
- Location icons: small lucide-react MapPin icons
- Promo box 1: picsum.photos/seed/fmbeat-promo1/600/370
- Promo box 2: picsum.photos/seed/fmbeat-promo2/600/370
- Promo box 3: picsum.photos/seed/fmbeat-promo3/600/370
- Album art: picsum.photos/seed/fmbeat-album/400/400
- Charts bg: picsum.photos/seed/fmbeat-charts/1920/550
- Blog thumb 1: picsum.photos/seed/fmbeat-blog1/80/80
- Blog thumb 2: picsum.photos/seed/fmbeat-blog2/80/80

### ColorLib ↔ Fmbeat mapping
- Source slug: `eighty8`
- Source name: "Eighty8"
- New name: `fmbeat`
- Brand: "Fmbeat" (replaces "88,8" / "88.8" logo)
- Nav links: keep same (Home, About, Charts, DJs, Blog, Contact)
- Footer copyright: replace Colorlib credit with Component Dock
