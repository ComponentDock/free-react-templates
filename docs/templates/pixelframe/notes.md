# Pixelframe — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Bitmap" — https://colorlib.com/wp/template/bitmap/
- **Preview:** https://preview.colorlib.com/theme/bitmap/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitmap-free-template.jpg
- **Preview fetched:** Yes (20,325 bytes HTML, 61,803 bytes style.css)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Navbar** — white bg, logo image, nav links, search icon, hamburger on mobile
2. **Hero Banner** — full-width parallax with dark overlay, heading + subtitle + CTA button
3. **Gallery** — isotope filter tabs + 6 items in 4-col grid, hover overlays, lightbox
4. **Services** — 6 cards in 3×2 grid, headings + descriptions
5. **Instagram** — "Follow us on instagram" button + 6-image horizontal strip
6. **Footer** — About Me + Newsletter + Follow Me social links

## Fidelity Notes

### Navbar
- Logo: image-based (use text "Pixelframe" instead)
- Nav links: Home, Gallery, Services, About, Elements, Blog (dropdown), Contact
- Search icon on right (magnifier) — implement as toggle or link
- Hamburger toggler on mobile (3 bar icon)
- White background, light navbar style (`.navbar-light`)

### Hero Banner
- Full-width parallax background image
- Dark overlay: `rgba(0,0,0,0.5)`
- Heading: "Pixelframe Photography" (replacing "Bitmap Photography")
- Subtitle text below
- "Explore Gallery" button: dark navy (`#04091e`), square (no border-radius), white text
- Vertically centered with flex

### Gallery
- Isotope-style filter bar: All, Approved, Unapproved, Unviewed
- Use React state for filtering (no isotope.js dependency)
- 6 items in 4-column grid (col-lg-3, col-md-4, col-sm-6)
- Each item: image fills container, dark overlay on hover with title + expand icon
- Lightbox: use a simple React lightbox or modal (no SimpleLightbox dependency)
- Items tagged by category for filter functionality
- Categories: Approved (ap), Unapproved (unp), Unviewed (unv)

### Services
- "Why we are the best" heading + subtitle
- 6 cards in 3-column × 2-row grid
- Each card: linked heading + description paragraph
- No icons — clean text-only cards
- Services: Expert Technicians, Professional Service, Great Support, Technical Skills, Highly Recomended, Positive Reviews

### Instagram
- Full-width section
- "Follow us on instagram" button (centered, dark navy)
- 6 images in a horizontal row (no gaps, edge-to-edge)
- Use `picsum.photos/seed/pixelframe-insta-<n>/...` for placeholders

### Footer
- 3-column layout:
  - Left (5 cols): "About Me" + description + copyright with Component Dock link
  - Center (5 cols): "Newsletter" + email form (input + arrow submit button)
  - Right (2 cols): "Follow Me" + social icons (Facebook, Twitter, Dribbble, Behance)
- Footer MUST link `https://www.componentdock.com/`

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Navbar.tsx` | Header | Logo text, nav links, search, hamburger |
| `Hero.tsx` | Hero Banner | Parallax bg, heading, subtitle, CTA button |
| `Gallery.tsx` | Gallery | Filter tabs + 6 items + lightbox |
| `Services.tsx` | Services | 6 text-only cards in 3-col grid |
| `Instagram.tsx` | Instagram | Button + 6-image strip |
| `Footer.tsx` | Footer | About, Newsletter, Social |

## Placeholder Assets

- Hero background: `https://picsum.photos/seed/pixelframe-hero/1920/1080`
- Gallery images: `https://picsum.photos/seed/pixelframe-gallery-<n>/600/400`
- Instagram images: `https://picsum.photos/seed/pixelframe-insta-<n>/300/300`
- No service icons needed (text-only cards)

## Key Differences from Original

- No FontAwesome — use `lucide-react` for icons (expand, search, social)
- No isotope.js — React state filtering
- No SimpleLightbox — React modal/lightbox
- No OwlCarousel — not used in this template
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
- Logo is text-based instead of image-based
