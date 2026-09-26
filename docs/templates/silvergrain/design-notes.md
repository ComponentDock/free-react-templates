# Silvergrain — Prep Notes

**Source:** ColorLib Photography 2
**Preview:** https://preview.colorlib.com/theme/photography-2/ (404 — screenshot-based analysis)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/photography-2-free-template-1.jpg

## Structure Order

1. **Navbar** — white, sticky or static
2. **Hero Carousel** — full-width image slider with overlay text
3. **Footer** — white, single-row with copyright + thumbnails + social icons

## Section-by-Section Fidelity Notes

### 1. Navbar
- Left: "Silvergrain." logo (bold, dark, green dot accent)
- Center: horizontal nav links (Home active in green, Portfolio, Blog, About, Contact)
- Right: email CTA in green (mailto: link)
- Desktop: horizontal links. Mobile: hamburger toggle.
- Green accent: `#2ecc71` or similar teal-green from screenshot

### 2. Hero Carousel
- Full-width, object-fit: cover background image
- Centered large white serif heading text
- White underlined "View Projects" text link below heading
- Left/right circular arrow buttons (semi-transparent dark bg, white chevron)
- Slide counter "1 / 2" at bottom center
- Auto-advance with 5s interval, loops
- Use `picsum.photos/seed/silvergrain-<n>/1920/1080` for placeholder images

### 3. Footer
- White background
- Left: "Copyright ©2018 All rights reserved | Made with ♥ by Component Dock"
  - Links to https://www.componentdock.com/
- Center: "Show Thumbnails" underlined text link
- Right: Social icon row (Facebook, Twitter, Instagram, Behance, Pinterest)
  - Use lucide-react icons where available, SVG for Behance/Pinterest

## Design Tokens Summary

- Brand accent: `#2ecc71` (green/teal)
- Background: `#ffffff`
- Text primary: `#333333`
- Hero text: `#ffffff`
- Nav arrow bg: `rgba(0,0,0,0.35)`
- Heading font: serif/display (Playfair Display or similar from Google Fonts)
- Body font: sans-serif (Poppins or Montserrat from Google Fonts)
- Button style: text-only, underlined, no background/border

## Implementation Notes

- Hero carousel can use a simple state-based approach (currentSlide index)
- No complex dependencies needed — pure React state for carousel
- Responsive: use Tailwind breakpoints (md:, lg:)
- Social icons: lucide-react for Facebook, Twitter, Instagram; custom SVG for Behance, Pinterest
- CNAME: `silvergrain.free.componentdock.com`
