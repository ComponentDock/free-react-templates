# AzureCrest — Implementation Notes

## Source mapping
- **ColorLib:** The Grand Azure (`the-grand-azure`)
- **Preview:** https://preview.colorlib.com/theme/grandazure/
- **New name:** azurecrest
- **Category:** Hotel / Luxury Resort

## Section order (1:1 with preview)

1. **Navbar** — Sticky, backdrop-blur, logo + nav links + dark toggle + Book Now CTA. Mobile hamburger menu.
2. **Hero** — Full-viewport, oceanfront image, gradient overlay (primary-900/70–80), typewriter headline "Experience Timeless Luxury" with gold accent, booking bar (check-in, check-out, guests, Book button).
3. **Stats** — Gray-50 bg, border-y, 4 counters in grid (Guests 10000+, Rooms 150+, Rating 4.9, Years 25+). Animated counters.
4. **Rooms & Suites** — Centered header with badge, 3-column card grid. Each card: image, price badge, name, description, amenity icons (bed, bath, size), "View Details" link.
5. **Amenities** — 2-column layout (image left with gold corner accents, content right). 6 amenity cards: Pool, Spa, Fitness, Beach, Room Service, Concierge.
6. **Dining** — 2-column layout (image left with gold corner accents, content right). 3 restaurant items: The Azure, Coral Bar, Sunrise Cafe.
7. **Gallery** — 3-column image grid (4/3 aspect ratio), hover overlay with caption.
8. **Testimonials** — Carousel with 5-star ratings, quotes, reviewer info, prev/next arrows + dots.
9. **FAQ** — Accordion with 5 items, toggle with +/- icon.
10. **Bottom CTA** — Gradient (primary-700 to primary-900), decorative blur circles, gold accent line, two buttons.
11. **Footer** — Dark (gray-900), logo + description + social icons, contact info, 3 link columns, bottom bar.

## Fidelity notes

### Design tokens to apply
- `@theme` vars: `--color-primary-*` (deep blue #1e40af scale), `--color-accent-*` (amber/gold #f59e0b scale)
- Body font: Plus Jakarta Sans (Google Fonts)
- Heading font: Playfair Display (Google Fonts)
- Card radius: `rounded-2xl` (1rem)
- Button radius: `rounded-lg` (0.5rem)
- Card shadow: `shadow-lg` → `shadow-xl` on hover
- Hero overlay: `bg-gradient-to-b from-primary-900/70 via-primary-900/50 to-primary-900/80`
- CTA section: `bg-gradient-to-br from-primary-700 to-primary-900` with decorative blur-3xl circles
- Booking bar: `bg-primary-900/60 backdrop-blur-md rounded-2xl`
- Inputs in hero: `border-white/20 bg-white/10 backdrop-blur-sm` (glass effect)
- Accent button: `bg-accent-500 hover:bg-accent-600 shadow-lg shadow-accent-500/25`
- Gold accent line: `bg-accent-400` thin horizontal line above headings
- Badge pills: `rounded-full bg-accent-100 text-accent-700` (light) / `bg-accent-900/50 text-accent-300` (dark)

### Key implementation patterns
- Stats counters use a `data-counter` attribute with animated count-up on scroll (intersection observer)
- Testimonials carousel needs: `data-carousel`, `data-carousel-track`, `data-carousel-slide`, `data-carousel-prev`, `data-carousel-next`, `data-carousel-dots`
- FAQ accordion: `data-faq-toggle` buttons, `data-faq-icon` for rotate, `max-height` transition
- Dark mode: `data-dark-toggle` button, toggles `.dark` class on `<html>`, persists to localStorage
- Sticky header: shrink on scroll, backdrop-blur-lg, scroll progress bar (`#scroll-progress`)
- Mobile CTA: fixed bottom bar with Call + Book Room buttons, only visible on `lg:hidden`
- Scroll animations: `data-animate="fade-in-up"` with `data-delay` for staggered entry
- Preloader: shown on page load, fades out after DOM ready

### Placeholder images
- Hero: `https://picsum.photos/seed/azurecrest-hero/1920/1080`
- Room images: `https://picsum.photos/seed/azurecrest-room-1/800/600` (3 variants)
- Amenities/Dining images: `https://picsum.photos/seed/azurecrest-amenity/800/600`
- Gallery: `https://picsum.photos/seed/azurecrest-gallery-1/800/600` (6 variants)

### Component structure
```
src/
  App.tsx
  components/
    Navbar.tsx
    Hero.tsx
    Stats.tsx
    Rooms.tsx
    Amenities.tsx
    Dining.tsx
    Gallery.tsx
    Testimonials.tsx
    FAQ.tsx
    BottomCTA.tsx
    Footer.tsx
  index.css
  main.tsx
```
