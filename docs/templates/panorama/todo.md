# Panorama — Implementation Todo

## Source

- ColorLib Scenic: https://colorlib.com/wp/template/scenic/
- Preview: https://preview.colorlib.com/theme/scenic/

## Design Notes

### Section order (matches original 1:1)

1. Navbar — sticky, logo left, nav center, burger right
2. Hero — full viewport, video background, gray overlay, slanted bottom
3. About Us — two columns, overlapping images, stats counters
4. Services — bg-light, 6 cards in 3-col grid, circular icons
5. Portfolio — filter tabs (All/Web/Design/Brand), image grid with hover overlay
6. Video Feature — two columns, video thumbnail + text
7. Blog Posts — 4 cards in 2-col grid, horizontal layout (image + meta)
8. Footer — dark navy, slanted top, 4-column layout, social icons

### Key fidelity notes

- Hero uses video background (recreate with placeholder video or static image fallback)
- Slanted dividers via skewY(-5deg) — use CSS clip-path or Tailwind transform
- Service icons are circular (50% radius) with blue bg + white icon
- Portfolio uses isotope-style filtering — implement with React state
- Blog cards have a specific horizontal layout: image left, text right
- Stats counters use animateNumber on scroll — use IntersectionObserver + counter animation
- Special CTA links have amber (#ffc107) underline highlight on hover
- Footer has a slanted top edge matching the hero's slanted bottom

### Component breakdown

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx` — video bg, overlay, slanted divider
- `src/components/AboutUs.tsx` — text + overlapping images
- `src/components/Stats.tsx` — animated counters
- `src/components/Services.tsx` — card grid
- `src/components/Portfolio.tsx` — filter tabs + image grid
- `src/components/VideoFeature.tsx` — thumbnail + text
- `src/components/BlogPosts.tsx` — card grid
- `src/components/Footer.tsx` — slanted, dark, 4-col

### Tailwind theme tokens to add

```
@theme {
  --color-brand: #007bff;
  --color-brand-hover: #3395ff;
  --color-footer: #001f42;
  --color-accent: #ffc107;
  --font-sans: "Source Sans Pro", sans-serif;
}
```

## Tasks

- [ ] Scaffold app from simplest existing template
- [ ] Set up Tailwind theme tokens
- [ ] Implement Navbar component
- [ ] Implement Hero component (video bg + overlay + slant)
- [ ] Implement AboutUs component (overlapping images)
- [ ] Implement Stats component (animated counters)
- [ ] Implement Services component (card grid + circular icons)
- [ ] Implement Portfolio component (filter tabs + grid)
- [ ] Implement VideoFeature component
- [ ] Implement BlogPosts component
- [ ] Implement Footer component (slanted top + dark bg)
- [ ] Write tests for all components (100% coverage)
- [ ] Verify responsive behavior
- [ ] Verify footer links to componentdock.com
