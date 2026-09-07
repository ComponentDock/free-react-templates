# Tradebase — Design Notes & Task Outline

> Recreation of ColorLib Bizcon (`bizcon`)
> Preview: https://preview.colorlib.com/theme/bizcon/

## Source structure order

1. Header/Navbar (logo + nav links with dropdowns)
2. Banner/Hero (heading + subtitle + CTA + animated hero images)
3. About (two-column: image + text)
4. Services (3-card grid on gray bg)
5. Testimonials (carousel)
6. Portfolio (card-columns grid)
7. Our Service (two-column about variant)
8. Blog (post cards)
9. Footer (multi-column + copyright)

## Section-by-section fidelity notes

### Header/Navbar
- Transparent navbar over hero banner
- Logo on left, nav links on right
- Dropdown menus for Blog and Page items
- Mobile: hamburger toggle

### Banner/Hero
- Background: `#f0eed4` cream (no image on mobile)
- Heading: large, dark text
- Subtitle: lighter gray text
- CTA button: `.btn_1` — pill shape (border-radius 50px), orange gradient `linear-gradient(131deg, #feb47b, #ff7e5f)`, white text, padding 14px 40px
- Animated floating hero images (use CSS animations, not actual images)

### About
- Two-column layout (image left, text right)
- Standard section padding (140px 0 desktop)
- Image: use `picsum.photos` placeholder

### Services
- Gray background section (`gray_bg`)
- 3-column grid of service cards
- Each: icon + title + short description
- Heading: "We Provide Best Services"

### Testimonials
- Heading: "Customer Are Saying"
- Carousel of testimonial cards
- Each: name, role/title, quote text
- Consider using a simple carousel or static row

### Portfolio
- Card-columns masonry-style grid
- Each card: image + title + short text
- Use `picsum.photos` for card images

### Blog
- Heading: "Update From Blog"
- Blog post cards with image, title, excerpt
- Standard card layout

### Footer
- Dark background (`#2f373d`)
- Multi-column widget layout
- Social links
- Copyright bar at bottom
- MUST include Component Dock link

## Design tokens for Tailwind @theme

```
--color-brand: #ff7e5f;
--color-brand-light: #feb47b;
--color-cream: #f0eed4;
--color-dark: #2f373d;
--color-body: #666666;
--font-heading: "Poppins", sans-serif;
--font-body: "Roboto", sans-serif;
```

## Implementation tasks

- [ ] Create app scaffold (copy simplest existing app, rename)
- [ ] Set up index.html with Google Fonts (Poppins, Roboto)
- [ ] Configure Tailwind @theme with brand tokens
- [ ] Build Navbar component
- [ ] Build Hero/Banner component
- [ ] Build About component
- [ ] Build Services component (3 cards)
- [ ] Build Testimonials component (carousel)
- [ ] Build Portfolio component (card grid)
- [ ] Build Blog component
- [ ] Build Footer component (with Component Dock link)
- [ ] Compose App.tsx from all sections
- [ ] Add responsive breakpoints
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Update TEMPLATES.md status
