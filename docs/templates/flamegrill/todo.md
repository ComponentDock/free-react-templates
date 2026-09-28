# FlameGrill — Implementation Tasks & Design Notes

**Source:** ColorLib Burger — https://preview.colorlib.com/theme/burger/
**New name:** flamegrill
**Category:** Restaurant / Food

---

## Section Order (matches original 1:1)

1. **Navbar** — sticky, logo centered, nav links, social icons, phone CTA
2. **Hero Carousel** — 2 slides with dark overlay, "Big Deal" badge, heading, subtitle
3. **Best Burgers (Menu Grid)** — 8 items in 2-col grid, thumbnail + name + desc + price
4. **About** — split layout: stacked images left, text + signature right
5. **Video CTA** — dark bg with burger image, heading, subtitle, play button
6. **Testimonials** — carousel with quote, avatar, name, star rating
7. **Instagram Gallery** — 4-col grid with hover overlay
8. **Footer** — 3-col (2 locations + newsletter), social icons, copyright bar

---

## Design Fidelity Notes

### Navbar
- Sticky positioning. Logo centered (col-2), nav left (col-5), social+phone right (col-5).
- Desktop only; mobile: hamburger menu icon.
- Nav items: Home, Menu, About, Blog (dropdown), Pages (dropdown), Contact.

### Hero Carousel
- Use a carousel library (e.g. Swiper) with auto-play and dot navigation.
- Full-width background images with dark semi-transparent overlay.
- "Big Deal" text inside a decorative shape (SVG or CSS clip-path).
- Display font: Paytone One. Heading: white, centered. Subtitle below heading.

### Menu Grid ("Best Burgers")
- Section label "Burger Menu" (small text, Brand Orange color).
- Heading "Best Ever Burgers" (Montserrat, bold).
- 2-column responsive grid. Each item: circular thumbnail (100px) + name + description + price badge.
- Price uses Brand Orange color, bold.

### About Section
- Two stacked images on left (offset positioning).
- Right side: "About Us" label, "Best Burger in your City" heading (Montserrat).
- Long paragraph body text (Raleway).
- Signature image at bottom (Pacifico font style).

### Video CTA
- Full-width section with background burger image.
- Dark overlay (same as hero).
- "Burger Bachelor" heading (white, Paytone One).
- Subtitle "How we make delicious Burger" (white, Raleway).
- Circular play button with white border, links to YouTube embed (use modal/lightbox, not redirect).

### Testimonials
- Carousel with centered content.
- Quote in italic, author avatar (circular), name, star rating (Brand Gold stars).
- Brand Orange accent for section label.

### Instagram Gallery
- 4-column grid, equal height images.
- Hover overlay with Instagram icon (centered, white).
- Use picsum.photos with food-related seeds.

### Footer
- Dark background image (use dark navy #040E27 as solid fallback).
- 3-column: two location cards (heading + address + phone), newsletter (input + button).
- Social icons row below columns.
- Copyright bar with "Made with ❤ by Component Dock" link.
- Newsletter button: Brand Orange bg, white text, pill shape.

### Color Usage Summary
- Brand Orange (#F0542C): buttons, labels, hover states, price text
- Brand Gold (#F2C64D): outlined buttons, star ratings, accent borders
- Dark Navy (#040E27): header, video section overlay, footer background
- White (#FFFFFF): page background, text on dark sections
- Muted Gray (#6E6E6E): body text, descriptions

---

## Component Outline

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `Navbar.tsx` | Sticky, responsive, social icons |
| HeroCarousel | `HeroCarousel.tsx` | Swiper-based, 2 slides, overlay |
| MenuGrid | `MenuGrid.tsx` | 8 items, 2-col, price badges |
| About | `About.tsx` | Split layout, images + text |
| VideoCTA | `VideoCTA.tsx` | Dark bg, play button modal |
| Testimonials | `Testimonials.tsx` | Carousel, avatars, stars |
| InstagramGallery | `InstagramGallery.tsx` | 4-col grid, hover overlay |
| Footer | `Footer.tsx` | 3-col, newsletter, copyright |
| App | `App.tsx` | Compose all sections |
| index.css | `index.css` | Tailwind + theme tokens |

---

## Placeholder Strategy
- Burger images: `https://picsum.photos/seed/flamegrill-burger-<n>/300/300`
- Banner images: `https://picsum.photos/seed/flamegrill-hero-<n>/1920/800`
- Avatar images: `https://picsum.photos/seed/flamegrill-avatar-<n>/100/100`
- Signature: SVG path or Pacifico-styled text
- Instagram images: `https://picsum.photos/seed/flamegrill-insta-<n>/400/400`
