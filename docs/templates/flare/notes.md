# Flare — Implementation Notes

Source: ColorLib Photon (https://preview.colorlib.com/theme/photon/)
New name: Flare
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Section Order

1. Navbar
2. Full-Viewport Image Carousel (Swiper)
3. Footer

## Section-by-Section Fidelity Notes

### 1. Navbar
- Logo text "Flare" left-aligned (not an image)
- 7 nav links: Home, Gallery, Services, Blog, About, Reviews, Contact
- Gallery has a dropdown with 7 categories + nested Sub Menu
- Social icons right side: Facebook, Twitter, Instagram, YouTube (use lucide-react equivalents or simple SVG)
- Transparent background (no white bg unless scrolled)
- Mobile: hamburger menu (use state toggle, no external library)
- Layout: Bootstrap container-fluid → use Tailwind w-full with px padding

### 2. Full-Viewport Image Carousel
- Use Swiper.js (react swiper) for carousel
- 7 slides: Nature, Portrait, People, Architecture, Animals, Sports, Travel
- Each slide: full-cover background image with object-fit cover
- Centered overlay: category name (h2, white) + "More Photos" button
- Button style: uppercase, letter-spacing 0.1em, font-size 11px, border 2px white, bg transparent → hover: bg white, text black
- Swiper pagination dots at bottom center
- Prev/next arrows: dark bg (rgba(0,0,0,0.6)) pill, white icon, positioned absolute left/right
- Carousel height: calc(100vh - navbar height) — use flex-1 or h-[calc(100vh-72px)]
- AOS fade-in animation on initial load (optional — can use CSS animation instead)
- Dark overlay on image hover: rgba(0,0,0,0.4) with transition

### 3. Footer
- Simple single-line: copyright + Component Dock link
- White bg, centered text, small font
- Replace ColorLib attribution with "Made with ❤ by Component Dock" linking to https://www.componentdock.com/

## Key Implementation Decisions

- **No lightgallery** — this template doesn't use it in the single-page view
- **No AOS library** — use CSS animations or framer-motion for fade-in
- **Swiper** — use `swiper` npm package (react components)
- **Font** — load Josefin Sans (400, 700) from Google Fonts in index.html
- **Images** — use picsum.photos/seed/flare-<n>/1920/1080 for deterministic placeholder images
- **Mobile hamburger** — simple React state toggle, no external dependency

## Props / Component Shape

- `Navbar` — no props, manages its own mobile toggle state
- `ImageCarousel` — no props, hardcoded slides array
- `Footer` — no props
- `App` — composes Navbar + ImageCarousel + Footer

## Design Tokens (Tailwind @theme)

```
@theme {
  --color-brand: #20c997;
  --color-brand-hover: #1aa179;
  --font-family-heading: "Josefin Sans", sans-serif;
  --font-family-body: "Josefin Sans", sans-serif;
}
```
