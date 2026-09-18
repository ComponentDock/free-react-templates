# InnoTide — Implementation Tasks & Design Notes

Recreation of ColorLib **Innova** (https://preview.colorlib.com/theme/innova/)

## Section order (match 1:1)

1. Navbar
2. Hero (full-viewport slider)
3. Services (4-column grid)
4. Portfolio ("Selected Work" 2×2 grid)
5. Testimonials ("Happy Client" carousel)
6. About ("Creative We Grow" split layout)
7. CTA Banner ("Get Started" purple banner)
8. Footer (3 columns + Component Dock)

## Design notes

### Navbar
- Transparent overlay, absolute position over hero
- White text links, uppercase, Roboto Mono, letter-spacing 0.1em
- Brand name in Abril Fatface, uppercase, letter-spacing 0.2em
- On mobile (<992px): dark background (#343a40), hamburger toggle with 3-line icon

### Hero
- Full-viewport height (100vh, min-height 700px)
- Background image with dark overlay (opacity 0.3)
- Heading: Abril Fatface, white, 7rem font-size (3rem on mobile)
- Purple highlight effect behind specific words (box-shadow technique)
- Dot indicators at bottom center

### Services
- White background, standard section padding (7em vertical)
- 4 equal columns (col-lg-3)
- Each: simple-line-icons icon (purple #6f42c1), h3 title, short paragraph
- Icons: paper-plane (Email), screen-desktop (Web), screen-smartphone (Mobile), magnifier (Research)

### Portfolio
- White background, "Selected Work" section-title heading centered
- 2×2 grid, no gutters (images touch)
- Each item: full image with hover overlay revealing project name + category
- Hover effect: dark overlay fades in, text slides up from center

### Testimonials
- Light gray background (bg-light #f8f9fa)
- "Happy Client" heading centered
- Carousel with cards: avatar (60px circle), person name (Abril Fatface), company meta, blockquote
- Cards: max-width 700px, centered

### About
- Split layout (two col-lg-6)
- Left: large image with dotted background decoration (pseudo-element)
- Right: image + "About US" uppercase purple label + "Creative We Grow" section-title + paragraphs + btn-outline-black "Learn More" button

### CTA Banner
- Full-width purple bg-primary (#6f42c1) section
- Centered white text: h3 "Get Started", paragraph, btn-outline-white "Get In Touch!" button

### Footer
- White background, 3 columns
- Col 1 (md-4): "About Us" heading + paragraph
- Col 2 (md-3 ml-auto): "Navigation" heading + link list
- Col 3 (md-3): social media icons (Twitter, Facebook, LinkedIn, Instagram)
- Replace any ColorLib attribution with "Made with Component Dock" link to https://www.componentdock.com/

## Key implementation details

- **Fonts:** Load Roboto Mono (body) + Abril Fatface (headings) via Google Fonts `<link>` in index.html
- **Icons:** Use lucide-react (map simple-line-icons: paper-plane → Send, screen-desktop → Monitor, screen-smartphone → Smartphone, magnifier → Search)
- **Images:** Use picsum.photos with deterministic seeds (e.g. `https://picsum.photos/seed/innotide-hero/1920/1080`)
- **Carousel:** Implement with CSS snap or a lightweight React carousel (embla-carousel or pure CSS)
- **Hover effects:** CSS transitions on portfolio items (opacity + transform)
- **Purple highlight on hero heading:** Use box-shadow technique or background-clip on specific text spans

## Fidelity notes

- Square buttons (border-radius: 0) — do NOT round corners
- Uppercase text on buttons and labels
- Letter-spacing on navbar and brand
- Dotted background decoration on About section (use CSS background pattern, not an image)
- Section padding is generous (7em vertical)
