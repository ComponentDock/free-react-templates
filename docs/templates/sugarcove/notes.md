# Sugarcove — Implementation Notes

## Source

- **ColorLib Template**: Cakes
- **Source URL**: https://colorlib.com/wp/template/cakes/
- **Preview URL**: https://preview.colorlib.com/theme/cakes/
- **Category**: Business Website — Cake Shop / Bakery

## Section Order (top to bottom)

1. **Header** — Sticky nav: logo (left), nav links (center), phone CTA + "Order Online" button (right). Collapses to hamburger on mobile (<992px). White bg + shadow when sticky.
2. **Hero/Slider** — Full-width section with background image. Contains:
   - Decorative "Delicious" text in Lobster font (very low opacity watermark)
   - Headline + descriptive paragraph
   - "Explore Menu" CTA button (gradient orange, pill shape)
   - Animated bouncing shape at bottom-left
3. **Popular Items** — Carousel of 4 product cards:
   - Section subtitle: "Most Popular"
   - Section heading: "Our Exclusive Cales"
   - Cards: pink bg (#FFF5F2), bottom-right rounded corners (60px), product image, name, price, "$20 | Order Now" button
   - Hover: image scales down, button shifts up
4. **About/Support Company** — Split layout (50/50):
   - Left: decorative/illustrative image
   - Right: section subtitle "Fresh & Delicious", heading, description paragraph, "Our Story" CTA button
5. **Our Services** — Centered grid:
   - Section subtitle: "Our Features"
   - Section heading: "Quality is Our First Priority"
   - Grid of service cards with icons, titles, descriptions
6. **Client Say / Testimonials** — Carousel:
   - Section subtitle: "Testimonial"
   - Section heading: "What Customers Say"
   - Slides: customer avatar, name, designation, quote text
   - Auto-plays with smooth transitions
7. **Instagram Area** — Horizontal grid of images:
   - Hover overlay with Instagram icon
   - Owl carousel layout
8. **Footer** — Multi-column:
   - Column 1: Logo + about paragraph
   - Column 2: Quick Links (list)
   - Column 3: "Cakes" category links
   - Column 4: Contact Us (address, phone, email)
   - Bottom: Social icons + copyright line with Component Dock link

## Design Token Notes for Implementation

```css
/* Brand palette */
--brand: #f04506; /* orange-red — buttons, accents, links */
--brand-dark: #d83e06; /* darker orange — button gradient */
--brand-hover: #d9bda3; /* tan — button hover */
--card-bg: #fff5f2; /* warm pink — product cards */
--footer-bg: #fff7f3; /* very light peach — footer */
--text-primary: #000000; /* headings */
--text-body: #5e5e5e; /* nav, body descriptions */
--text-muted: #999999; /* placeholders, secondary */

/* Typography */
font-family: 'DM Sans', sans-serif; /* body text */
font-family: 'Quicksand', sans-serif; /* headings, nav, buttons */
font-family: 'Lobster', cursive; /* hero watermark */

/* Button styling */
border-radius: 30px;
box-shadow: 0px 17px 27px rgba(240, 69, 6, 0.27);
background: linear-gradient(to left, #f04506, #d83e06, #f04506);

/* Card styling */
border-radius: 0 0 60px 0; /* product cards */
```

## Implementation Tasks

### Phase 1: Scaffold

- [ ] Create `apps/sugarcove/` from simplest existing app template
- [ ] Rename package to `@free-react-templates/sugarcove`
- [ ] Update `public/CNAME` to `sugarcove.free.componentdock.com`
- [ ] Update `package.json` homepage
- [ ] Set up `src/index.css` with Tailwind theme tokens (brand color, fonts)
- [ ] Add Google Fonts link in `index.html` (DM Sans, Quicksand, Lobster)

### Phase 2: Components

- [ ] `Navbar.tsx` — sticky header with logo, nav links, phone CTA, "Order Online" button
- [ ] `Hero.tsx` — full-width hero with background image, watermark text, headline, CTA
- [ ] `PopularItems.tsx` — carousel of product cards with images, names, prices, order buttons
- [ ] `AboutSection.tsx` — split layout with image left, text right
- [ ] `Services.tsx` — centered grid of service features with icons
- [ ] `Testimonials.tsx` — carousel of customer testimonials with avatars
- [ ] `InstagramFeed.tsx` — horizontal image grid with hover overlays
- [ ] `Footer.tsx` — multi-column footer with links, contact, social icons, Component Dock link

### Phase 3: Assembly

- [ ] `App.tsx` — compose all sections in order
- [ ] `main.tsx` — entry point

### Phase 4: Testing + Verification

- [ ] Unit tests for each component (100% coverage)
- [ ] `npm run verify:app sugarcove` passes
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com

## Fidelity Notes

- The original uses Owl Carousel for product and testimonial carousels. In React, use a simple CSS-based carousel or a lightweight React carousel library. Avoid adding new dependencies unless necessary — CSS scroll-snap may suffice.
- The original uses Material Design Iconic Font for icons. Replace with `lucide-react`.
- The original uses `animate.css` for bounce and heartbeat animations. Implement with Tailwind animation utilities or simple CSS keyframes.
- Product card images should use `https://picsum.photos/seed/sugarcove-<n>/<w>/<h>` for deterministic placeholders.
- The Instagram area shows 4-6 images in a row. Use picsum placeholders.
- The hero background image should use a picsum placeholder with cake/food seed.
