# BuildMark — Implementation Tasks & Design Notes

## Source

- **ColorLib Template:** Topbuilder
- **Preview URL:** https://preview.colorlib.com/theme/topbuilder/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/topbuilder-construction-company-website-template.jpg

## Section Order (from preview HTML)

1. Top Header Bar (dark navy, contact info + social icons)
2. Navbar (white, Bootstrap-style, responsive hamburger)
3. Hero Slider (Camera Slider replacement, full-width, 2 slides)
4. Professional Builder Strip (4-column feature cards)
5. About Us (split: text + image)
6. What We Offer (3-column service cards with images)
7. Our Features (split: image + feature list)
8. Portfolio Gallery (filterable, Isotope replacement)
9. Our Team (4 member cards with hover social icons)
10. Achievements (parallax bg, 4 counter stats)
11. Testimonials (carousel, OwlCarousel replacement)
12. Featured Works (parallax bg, 8-item gallery grid)
13. Latest Blog (3-column blog cards)
14. Partners (logo carousel + booking CTA strip)
15. Footer (4-column dark, copyright bar)

## Design Notes

### Color Palette
- Brand Yellow: `#f6b60b` (primary CTA, accents, icon highlights)
- Brand Alt: `#f8b81d` (alternate yellow for button fills)
- Dark Navy: `#111f29` (top header, dark sections)
- Dark Footer: `#090909`
- Body Text: `#222222` (dark)
- Gray BG: `#f5f5f5`
- Text Secondary: `#555555`
- White: `#ffffff`

### Typography
- Font: Roboto (Google Fonts) — single font family throughout
- Headings: Roboto bold
- Body: Roboto regular

### Button Style
- `.button_all`: Yellow (#f6b60b) fill, dark text (#222222), no border-radius, hover sweep animation (dark bg slides in from left, text turns white)
- CTA strips: Yellow background with white text

### Special Effects (to replicate in React)
- **Hero slider:** Replace Camera Slider with a simple React slider (CSS transitions or a lightweight library). Auto-advance every 5s. Text overlay with fade-in animations.
- **Isotope gallery filter:** Replace with CSS-based filtering or a lightweight React filter library. Categories: All, Architecture, Building, Construction, Design, Painting.
- **OwlCarousel testimonials:** Replace with a simple React carousel (CSS scroll-snap or a lightweight library).
- **Stellar parallax:** Replace with CSS `background-attachment: fixed` or a lightweight parallax library.
- **Counter animation:** Use IntersectionObserver + requestAnimationFrame for counter-up effect on scroll.
- **WOW fade-in animations:** Use IntersectionObserver to trigger CSS animations on scroll.
- **Team hover social icons:** CSS hover reveal on team member cards.

### Placeholder Images
- Hero slider backgrounds: `https://picsum.photos/seed/buildmark-hero-1/1920/1080`, `buildmark-hero-2`
- About section image: `https://picsum.photos/seed/buildmark-about/600/400`
- Service card images: `https://picsum.photos/seed/buildmark-svc-1/400/300`, `buildmark-svc-2`, `buildmark-svc-3`
- Feature image: `https://picsum.photos/seed/buildmark-feature/600/500`
- Gallery images: `https://picsum.photos/seed/buildmark-gal-1/400/300` through `buildmark-gal-6`
- Team photos: `https://picsum.photos/seed/buildmark-team-1/400/500` through `buildmark-team-4`
- Blog images: `https://picsum.photos/seed/buildmark-blog-1/400/300` through `buildmark-blog-3`
- Featured works: `https://picsum.photos/seed/buildmark-feat-1/400/300` through `buildmark-feat-8`
- Achievement parallax: `https://picsum.photos/seed/buildmark-achieve/1920/600`
- Featured works parallax: `https://picsum.photos/seed/buildmark-featured-bg/1920/600`
- Partner logos: `https://picsum.photos/seed/buildmark-partner-1/150/80` through `buildmark-partner-5`

### Component Architecture

```
src/
  App.tsx — Section composition
  components/
    TopHeader.tsx — Dark navy top bar with contact info + social icons
    Navbar.tsx — White responsive navbar with dropdowns
    HeroSlider.tsx — Full-width hero carousel with text overlay
    FeatureStrip.tsx — 4-column "Professional Builder" feature cards
    AboutUs.tsx — Split layout: text left, image right
    WhatWeOffer.tsx — 3-column service cards with images
    Features.tsx — Split layout: image left, feature list right
    Portfolio.tsx — Filterable gallery grid
    Team.tsx — 4-column team member cards
    Achievements.tsx — Parallax counter stats
    Testimonials.tsx — Carousel of testimonial cards
    FeaturedWorks.tsx — Parallax gallery grid
    Blog.tsx — 3-column blog post cards
    Partners.tsx — Logo carousel + CTA strip
    Footer.tsx — 4-column dark footer + copyright
```

### Fidelity Notes
- Match section order exactly as listed above
- Match the dark navy top header + white navbar pattern
- Match the yellow (#f6b60b) accent color throughout
- Match the button hover sweep animation (dark overlay slides from left)
- Match the parallax backgrounds on Achievements, Featured Works, and Portfolio sections
- Match the 4-column layout for Professional Builder, Team, Achievements
- Match the split layout for About Us and Our Features
- Match the 3-column layout for What We Offer, Blog, Portfolio filter tabs
- Match the 2x4 grid for Featured Works gallery
- Footer copyright must link to Component Dock instead of Colorlib

### Common Pitfalls
- Do NOT import Bootstrap CSS — use Tailwind utilities only
- The original uses jQuery plugins (Camera Slider, Isotope, OwlCarousel, Stellar, WOW, Counter-Up) — replace all with React equivalents
- The original uses Font Awesome — replace with Lucide React icons
- The `.button_all` hover sweep uses `:before` pseudo-element — implement with a Tailwind group-hover or a small CSS animation
- Parallax sections use `data-stellar-background-ratio` — use CSS `background-attachment: fixed` instead
- The counter animation triggers on scroll — use IntersectionObserver
