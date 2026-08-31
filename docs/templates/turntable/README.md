# Turntable — Implementation Notes

## Source mapping

- **ColorLib source:** Carousel 08 (`carousel-08`)
- **New name:** Turntable
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/carousel-08/
- **ColorLib page:** https://colorlib.com/wp/template/carousel-08/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/carousel-08.jpg

## Design notes

### Overall structure

This is a single-component page — no navbar, no footer (other than the required
Component Dock footer link). The entire page is one `ftco-section` containing a
centered heading and an Owl Carousel of testimonial cards.

### Section order (1:1 with original)

1. **Section heading** — centered, 28px Poppins, text "Carousel #08" (use
   "Testimonials" or "What Our Clients Say" for the new template)
2. **Testimonials carousel** — full-width within container, 3 slides, each a
   50/50 split card (image left, text right)
3. **Footer** — required Component Dock attribution link (not in original)

### Component breakdown

#### TestimonialCarousel (main component)

- Wraps the heading + carousel container
- Heading: centered h2, 28px, regular weight, black
- Carousel: implement with a React carousel library (e.g. embla-carousel,
  splide, or a custom implementation) — the original uses Owl Carousel which
  is jQuery-based and not suitable for React

#### TestimonialCard (individual slide)

- Two-column layout: image panel (left) + text panel (right)
- **Image panel:**
  - 50% width, 600px height (450px on mobile)
  - Uses `background-image` with `cover` sizing
  - Use `https://picsum.photos/seed/turntable-<n>/600/600` for placeholder
- **Text panel:**
  - 50% width, white background, centered content
  - Box shadow: `0px 10px 40px -30px rgba(0, 0, 0, 0.42)`
  - Quote text: Playfair Display, 39px, weight 700, black, with opening quote
  - Author name: 20px, weight 500, color #dbcc8f (brand gold)
  - Position label: smaller text, gray color
  - Padding: `p-4 py-xl-5 px-xl-5`

#### Pagination dots

- 10px circles, 1px solid black border
- Active dot: background + border both #dbcc8f
- Centered below carousel with 20px margin-top

#### Arrow navigation (optional)

- Position absolute, left/right of carousel
- Subtle black (20% opacity) transitioning to gold on hover
- Vertical center alignment via transform

### Carousel behavior

- Auto-advance with ~5s timeout
- Smooth transition animation
- Dots are clickable for direct navigation
- Arrow navigation on hover (desktop only)
- Touch/swipe support on mobile

### Design tokens (Tailwind theme)

```css
@theme {
  --color-brand: #dbcc8f;
  --color-brand-dark: #c4b57a;
  --color-body: gray;
  --color-heading: #000;
  --color-surface: #fff;
  --color-background: rgba(0, 0, 0, 0.05);
  --font-heading: 'Playfair Display', serif;
}
```

### Responsive behavior

- Desktop: side-by-side 50/50 layout
- Mobile (< 768px): stacked (image on top, text below)
- Image height: 600px → 450px on mobile
- Carousel controls: dots always visible; arrows desktop-only

### Fidelity notes

- Original uses Owl Carousel (jQuery) — replace with React carousel library
- Original has NO navbar or footer — we add only the required Component Dock
  footer link
- Original uses ionicons — replace with lucide-react
- Original heading says "Carousel #08" — rename to something more meaningful
  like "Testimonials" or "What Our Clients Say"
- 3 testimonial cards: keep the 3-slide count, vary the quotes and names
- Box shadow, colors, fonts, and spacing should match exactly
