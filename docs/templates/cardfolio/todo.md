# Cardfolio — Implementation Notes

**Source:** ColorLib "Noah" (https://colorlib.com/wp/template/noah/)
**Preview:** https://preview.colorlib.com/theme/noah/
**New name:** Cardfolio (apps/cardfolio)

## Structure order (section-by-section)

1. **Header** — sticky top bar, logo "Cardfolio", hamburger toggle
2. **About** — 2-col: image carousel (5/12) + bio/social/CTA (6/12)
3. **Services** — 4 service cards in 2×2 grid + side image
4. **Works** — 4 full-width project entries with background images
5. **Blog** — 3-card horizontal carousel
6. **Testimonials** — 3-blockquote horizontal carousel
7. **Footer** — 3-column (contact, latest blog, newsletter) + copyright

## Fidelity notes

### Header
- Logo text "Cardfolio" replacing "Noah" — use Playfair Display for
  the logo wordmark (two spans, possibly different weights)
- Hamburger toggle: three-line icon, toggles slide-out nav
- Sticky positioning at top

### About
- Left column: Owl Carousel → React carousel with 2-3 placeholder images
  (picsum.photos)
- Right column: Two-state heading carousel ("Cardfolio" / "A Designer"
  ↔ "I'm" / "A Designer") — use a simple interval-based state toggle
- Social icons: replace icomoon with lucide-react (Facebook → share icon
  or similar, Twitter → twitter, Instagram, Dribbble → dribbble)
- "Contact Me!" button: outlined style (transparent bg, #4d4d4d text,
  #d9d9d9 border, #CA82F8 hover fill)

### Services
- 4 service cards: numbered headings (1–4) with bullet lists
- Side image: decorative only, use picsum.photos placeholder
- Responsive: single column on mobile

### Works
- 4 full-width entries: each is a link with background-image cover + dark
  overlay + centered title text
- Below: centered description text + "View details" link
- Hover: overlay appears with project title

### Blog
- 3-card Owl Carousel → React carousel (e.g. embla-carousel or custom
  scroll-snap)
- Each card: image with dark overlay + "Read more" link, below: date,
  title, excerpt
- Responsive: horizontal scroll or single-card view

### Testimonials
- 3-blockquote carousel (same carousel lib as Blog)
- Centered blockquotes with attribution (em-dash + name)
- Responsive: single testimonial view

### Footer
- 3-column on desktop, stacked on mobile
- Column 1: "Let's Talk" heading, intro text, email link, social icons
- Column 2: "Latest Blog" with 3 mini-entry items (thumbnail + date +
  title)
- Column 3: "Newsletter" with intro text, email input, "Subscribe" button
- Copyright line with Component Dock link
- Background: warm pink #FFE9E3

## Design tokens to set in @theme

```css
@theme {
  --color-primary: #CA82F8;
  --color-primary-hover: #d49af9;
  --color-gold: #fdba04;
  --color-pink: #ed687c;
  --color-teal: #1abc9c;
  --color-blue: #049dff;
  --color-warm-bg: #FFE9E3;
  --color-ink: #333333;
  --color-muted: #4d4d4d;
  --color-bg-alt: #fafafa;
  --color-line: #d9d9d9;
  --color-grey: #b7c2c2;
}
```

Fonts: Google Fonts `<link>` for Karla (400, 700) and Playfair Display
(400, 400i) in index.html.

## Key implementation decisions

- **Carousel:** Use embla-carousel (lightweight) or CSS scroll-snap for
  the About, Blog, and Testimonials carousels. The original uses Owl
  Carousel but embla is lighter and React-native.
- **Slide-out nav:** Use a CSS transition + state toggle (isOpen). No
  library needed — just translate-x + overlay backdrop.
- **Scroll animations:** The original uses Waypoints. Use Intersection
  Observer + CSS animation classes or framer-motion for scroll-reveal.
- **No Magnific Popup:** The gallery thumbnails in the slide-out nav use
  Magnific Popup in the original. Skip the popup — just make the
  thumbnails decorative or link to the works section.
- **Images:** All placeholder via `https://picsum.photos/seed/cardfolio-{n}/w/h`
