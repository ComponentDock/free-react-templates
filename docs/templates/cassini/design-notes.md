# Cassini — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Cassi" — https://colorlib.com/wp/template/cassi/
- **Preview:** https://preview.colorlib.com/theme/cassi/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cassi-free-template.jpg
- **Preview fetched:** Yes (5,573 bytes HTML, 23,764 bytes style.css)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Preloader** — full-screen dark overlay with spinner
2. **Header** — logo image + hamburger menu icon
3. **Hero Slider** — 3-slide carousel with bg images, category tag, heading, description, CTA
4. **Footer** — social text links + copyright

## Fidelity Notes

### Preloader
- Full-screen dark overlay (`#151515`) with CSS spinner animation
- Hides after page content loads (use `window.onload` or React useEffect)
- Simple spinner: rotating border-circle

### Header
- Minimal: logo image (left) + hamburger icon (right)
- Logo: use text "Cassini" instead of image
- Hamburger: use `lucide-react` Menu icon
- Transparent overlay on hero section
- Fixed/sticky position

### Offcanvas Menu
- Slides in from right side
- Logo + close button at top
- Nav links: Home, Gallery, Blog, About, Contact
- Social links at bottom: Facebook, Twitter, Instagram
- Copyright with Component Dock link
- Dark background

### Hero Slider
- Replace OwlCarousel with React carousel (CSS/JS slider)
- 3 slides, each with different background image
- Each slide content:
  - Category tag: "Nature" (blue accent `#242deb`, small text)
  - Heading: "Photo Studio" (large, white)
  - Description: creative photo studio text (white, muted)
  - "See More" button with arrow icon (white border, nearly square)
- Navigation: prev/next arrows (white border, white text, 1px radius)
- Custom dot indicators (white circles)
- Full-screen height on desktop

### Footer
- Dark background (`#151515`)
- Social text links: Facebook, Twitter, Instagram (centered, white text)
- Copyright with "Component Dock" link (replacing Colorlib attribution)
- Footer MUST link `https://www.componentdock.com/`

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Preloader.tsx` | Preloader | Spinner overlay, hides on load |
| `Header.tsx` | Header | Logo text + hamburger icon |
| `OffcanvasMenu.tsx` | Offcanvas Menu | Slide-in menu with nav + social |
| `Hero.tsx` | Hero Slider | 3-slide carousel, full-screen bg |
| `Footer.tsx` | Footer | Social links + copyright |

## Placeholder Assets

- Hero slider images: `https://picsum.photos/seed/cassini-hero-<n>/1920/1080`
- No other images needed (minimal template)

## Key Differences from Original

- No FontAwesome/elegant-icons — use `lucide-react` for icons
- No OwlCarousel — pure React carousel implementation
- No jQuery — vanilla React
- Logo is text-based instead of image-based
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
- Very minimal template — only hero slider + footer
