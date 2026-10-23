# Fotura — Implementation Notes

**Source:** ColorLib "Foto" — https://colorlib.com/wp/template/foto/
**Preview:** https://preview.colorlib.com/theme/foto/
**New name:** fotura

## Section Structure (implementation order)

### 1. Header (Navbar)
- Absolute-positioned, transparent background over hero
- Logo (left) — use picsum or text logo
- Contact email (right side) — `contact@componentdock.com`
- Nav links: Home, Portfolio (dropdown: Portfolio 1, Portfolio 2), Blog (dropdown: Blog Page, Blog Detail)
- Hamburger icon on mobile (≤768px) with slide-in menu
- Use `lucide-react` Menu icon for hamburger, ChevronDown for dropdowns

### 2. Hero Slider (Fullscreen Carousel)
- Full viewport height (100vh), dark background (#000)
- 4 slides, each with:
  - Full-bleed background image (picsum.photos with seed `fotura-slide-N`)
  - Dark overlay (rgba(0,0,0,0.4) or similar)
  - Centered content: headline (white, 60-80px Poppins 600), subtitle, CTA button
- Auto-advance with fade transitions (3-4s interval)
- Ken Burns: subtle CSS scale animation on background (scale 1.0 → 1.1 over 7s)
- Slide indicators (dots) at bottom center
- CTA button: pill shape (border-radius 50px), transparent bg, white text, border

### 3. Footer
- Absolute bottom, 60px height, white text on transparent/dark bg
- Copyright: "© {year} All rights reserved"
- "SHOW THUMBNAILS" text button with underline hover effect
- Social icons row (right): Facebook, Twitter, Instagram, Vimeo, Pinterest
- Use `lucide-react` icons for social links
- MUST link https://www.componentdock.com/ with "Component Dock" branding

## Fidelity Notes

- Original uses Revolution Slider (jQuery plugin) — replace with React carousel
- Original uses Ionicons — replace with lucide-react
- Original uses Bootstrap grid — use Tailwind utilities instead
- Allura script font is decorative only; use for any accent headings if present
- Ken Burns effect: CSS `@keyframes` with `transform: scale()` on bg image
- Dropdown menus: CSS hover-based in original; use React state for accessibility
- Body has generous 50px side margins — replicate with container padding
- Header/footer are absolute-positioned and overlay the slider

## Design Tokens to Set in index.css @theme

```
--color-brand: #37D583
--color-brand-alt: #36D98A
--font-body: 'Poppins', sans-serif
--font-accent: 'Allura', cursive
```

## Placeholder Images

- Slide 1: `https://picsum.photos/seed/fotura-slide-1/1920/1080`
- Slide 2: `https://picsum.photos/seed/fotura-slide-2/1920/1080`
- Slide 3: `https://picsum.photos/seed/fotura-slide-3/1920/1080`
- Slide 4: `https://picsum.photos/seed/fotura-slide-4/1920/1080`
