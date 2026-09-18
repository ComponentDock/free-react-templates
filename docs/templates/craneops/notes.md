# CraneOps — Implementation Notes

**Source:** ColorLib "Construct" (https://colorlib.com/wp/template/construct/)
**Preview:** https://preview.colorlib.com/theme/construct/

## Section order (top to bottom)

1. Header / Navbar (sticky white, brand left, nav center, CTA right)
2. Hero Slider (full-viewport, 2 slides, background images)
3. CTA Overlap Bar (amber, negative margin overlaps slider)
4. Services (3 cards, icon + title + blurb + CTA, "View All Services" below)
5. Recent Works (3-col no-gutter image grid, hover overlays)
6. Company News (light bg, carousel of blog cards)
7. Testimonials (2-col, person photo + blockquote)
8. Footer (4-col: copyright, contact, links, social)

## Component breakdown

```
App.tsx
├── Header.tsx (Navbar + dropdown + CTA)
├── HeroSlider.tsx (2 slides, arrows, dots)
├── CtaOverlap.tsx (amber bar with headline + button)
├── Services.tsx (3 ServiceCard components + View All button)
├── RecentWorks.tsx (3 WorkCard components with hover overlay)
├── CompanyNews.tsx (carousel of NewsCard components)
├── Testimonials.tsx (2 TestimonialCard components)
└── Footer.tsx (4-col grid, social icons, Component Dock link)
```

## Design tokens for @theme

```css
@theme {
  --color-brand: #f4b214;
  --color-brand-hover: #d89b0a;
  --color-body: #868e96;
  --color-heading: #000000;
  --color-section-light: #f8f9fa;
}
```

## Fidelity notes

- **Hero slider:** Original uses owl-carousel with 2 slides. Replace with a simple React carousel (state-based slide index, arrow navigation, dot indicators). Background images via picsum.photos with seed "craneops-1" etc.
- **CTA overlap:** Must use negative margin-top and z-index to overlap the slider bottom. White text on amber bg. Outline-white button on right.
- **Service cards:** White bg, centered content, icon (use lucide-react equivalents: Blueprint→FileCode, Building→Building, Crane→Crane), hover: scale(1.05) + 10px solid amber bottom border + shadow.
- **Works grid:** No gutters (zero gap between images). On hover: dark overlay, title appears centered, plus icon fades in, image scales slightly.
- **News carousel:** Cards with image, uppercase date, title, excerpt, "Read more" + chat bubble with count. Light gray section bg.
- **Testimonials:** 2-col, centered text, person image above name + company, blockquote below.
- **Navbar dropdown:** Services dropdown with 5 items. On mobile, collapsible hamburger.
- **Footer:** 4 equal columns. Copyright left, address+contact second, quick links third, social icons right (Twitter, Facebook, LinkedIn, Instagram as lucide-react icons).

## Placeholder images

- Hero slide 1: `https://picsum.photos/seed/craneops-hero1/1920/900`
- Hero slide 2: `https://picsum.photos/seed/craneops-hero2/1920/900`
- Works thumbnails: `https://picsum.photos/seed/craneops-work1/600/400`, etc.
- News thumbnails: `https://picsum.photos/seed/craneops-news1/600/400`, etc.
- Testimonial portraits: `https://picsum.photos/seed/craneops-person1/200/200`, etc.
