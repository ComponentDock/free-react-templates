# Halmark — Implementation Notes

## Replication Reference

- **Source:** ColorLib "Halen" — https://colorlib.com/wp/template/halen/
- **Preview:** https://preview.colorlib.com/theme/halen/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/halen-free-template.jpg
- **Preview fetched:** Yes (63,889 bytes HTML, CSS extracted)
- **CSS tokens extracted:** Yes — brand colors, fonts, button styles, backgrounds

## Section Order (top → bottom)

1. **Navbar** — sticky, logo image, nav links, social icons, hamburger on mobile
2. **Hero Slider** — 3-slide carousel with parallax bg + black overlay
3. **Photography Skills** — heading + description + signature image
4. **Wildlife Photography** — split layout (image left, text right)
5. **Gallery** — 6 items in 3-col grid, hover overlays
6. **Testimonials** — carousel with 3 testimonials
7. **Team** — 3 member cards with social icons
8. **Contact** — address info left, map right
9. **Footer** — copyright + social icons

## Fidelity Notes

### Navbar
- Logo: image-based (use text "Halmark" instead)
- Nav links: Home, About, Albums, Blog (dropdown), Pages (dropdown), Contact
- Social icons: Facebook, Twitter, Instagram (right-aligned)
- Sticky on scroll
- Hamburger on mobile (slicknav)

### Hero Slider
- Replace OwlCarousel with React carousel
- 3 slides, each with parallax bg + black overlay
- Heading: "Hi, This is Halmark, a professional Photographer"
- "Explore Work" button: square (0px radius), dark bg (`#444`), white text
- Slider navigation arrows

### Photography Skills
- "World class photography skills" heading + description
- Signature image below (use a decorative SVG or skip)

### Wildlife Photography
- Full-width split layout (50/50)
- Left: wildlife photo (use `picsum.photos/seed/halmark-wildlife/960/600`)
- Right: heading + description + "Explore Work" black button

### Gallery
- "My world class photography" heading + description
- 6 items in 3-column grid (full-width, no gutters)
- Each: image + dark overlay on hover with title + category
- All items: "Baby album" / "Photography / Baby"

### Testimonials
- Carousel with 3 testimonials
- Each: "Our Customers Say" heading + quote + circular author photo + name
- Author: Robert Thomson

### Team
- 3 cards in 3-column grid
- Each: full-width photo + name + "Photographer" title + 3 social icons
- Team: Milani Mou, Jasmine Pinky, (third member)
- Social: Facebook, Twitter, Instagram

### Contact
- Left (5 cols): "Contact Us" heading + address (200/D, Green lane, Kings street, New York) + phone + email + social icons
- Right (7 cols): Map area (use a placeholder map image or static map)
- Replace Google Maps with a static image or omit

### Footer
- Dark background (`#2C2C2C`)
- Copyright with "Component Dock" link
- Social icons: Facebook, Twitter, Instagram
- Footer MUST link `https://www.componentdock.com/`

## Component Breakdown

| Component | Source Section | Notes |
|-----------|---------------|-------|
| `Navbar.tsx` | Header | Logo text, nav links, social, hamburger |
| `Hero.tsx` | Hero Slider | 3-slide carousel, parallax bg |
| `Skills.tsx` | Photography Skills | Heading + description + signature |
| `Wildlife.tsx` | Wildlife Photography | Split layout, image + text |
| `Gallery.tsx` | Gallery | 6 items, hover overlays |
| `Testimonials.tsx` | Testimonials | Carousel with 3 items |
| `Team.tsx` | Team | 3 member cards + social |
| `Contact.tsx` | Contact | Address info + map area |
| `Footer.tsx` | Footer | Copyright + social |

## Placeholder Assets

- Hero slider images: `https://picsum.photos/seed/halmark-hero-<n>/1920/1080`
- Wildlife photo: `https://picsum.photos/seed/halmark-wildlife/960/600`
- Gallery images: `https://picsum.photos/seed/halmark-gallery-<n>/600/400`
- Team photos: `https://picsum.photos/seed/halmark-team-<n>/400/500`
- Testimonial author: `https://picsum.photos/seed/halmark-testimonial/100/100`
- Map placeholder: `https://picsum.photos/seed/halmark-map/800/500`

## Key Differences from Original

- No FontAwesome/themify-icons — use `lucide-react` for all icons
- No OwlCarousel — pure React carousel
- No MagnificPopup — React lightbox/modal
- No slicknav — React hamburger menu
- No Google Maps — static map image or omit
- Footer links to Component Dock instead of Colorlib
- All images are deterministic placeholders via picsum.photos
