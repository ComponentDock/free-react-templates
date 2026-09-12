# Kindle — Design Notes & Tasks

## Source

- **ColorLib template:** Inspire
- **Source URL:** https://colorlib.com/wp/template/inspire/
- **Preview URL:** https://preview.colorlib.com/theme/inspire/
- **Category:** Creative agency

## Structure order (section-by-section fidelity)

| # | Section | CSS class / notes | Fidelity notes |
|---|---------|-------------------|----------------|
| 1 | Navbar | `.site-nav`, `.site-navigation` | "Kindle ." logo, dropdown support (simplified for React), hamburger mobile menu |
| 2 | Hero | `.untree_co--hero` with bg image | Full-width background image, centered text, play button (video placeholder), social sidebar (Instagram, Twitter, Facebook) |
| 3 | Services | `.services-v1.bg-light` | 4-column grid: Inspire, Create, Innovate, Publish; each with icon-wrap + h3 + p; "See All Services" link |
| 4 | Why Awesome | `.untree_co-section` | Left: heading "Why Are We Awesome?" + excerpt with `.highlight` spans; Right: 2x2 grid of `.service-v2` items |
| 5 | Our Concept | `.untree_co-section.untree_co-hero.pt-0` | Split hero with bg image overlay; heading "Our Concept", description with `.highlight` spans, "Get started" primary button |
| 6 | Testimonials | `.untree_co-section.pt-0` + `.untree_co-testimonial` | Owl-carousel of 8 cards; each: person image + quote mark + blockquote + name; use static scroll for React |
| 7 | Feature/About | `.untree_co-section.feature.bg-light` | Two-column: left = heading + text + person attribution; right = image |
| 8 | Footer | `.site-footer` | CTA banner ("Help Us Spread Our Works"), 3 widget columns (Contact, Sources, Links), social icons, copyright with Component Dock link |

## Design tokens (from css/style.css)

| Token | Value | Usage |
|-------|-------|-------|
| Primary color | `#1daff3` | Buttons, links, text-primary, accents |
| Primary hover | `#30b6f4` | Button hover state |
| Text headings | `#000000` | All h1-h4 |
| Text body | `#777` / `#888` / `#999` | Paragraph text |
| Body background | `#ffffff` | Page background |
| Section background | light gray | `.bg-light` on services + feature sections |
| Font family | "Rubik" (Google Fonts) | Body + headings, weights 300/400/700 |
| Button radius | 4px | Primary buttons |
| Button padding | 12px vertical | `.btn` |
| Circle elements | 50% | Icon wraps, play button |
| Social sidebar | Left edge | Fixed-position social icons on hero |

## Implementation tasks

- [ ] 1. Copy simplest existing app as scaffold for `apps/kindle`
- [ ] 2. Create `src/components/Navbar.tsx` — responsive nav with mobile menu
- [ ] 3. Create `src/components/Hero.tsx` — bg image, headline, play button, social sidebar
- [ ] 4. Create `src/components/Services.tsx` — 4-card grid on bg-light
- [ ] 5. Create `src/components/WhyAwesome.tsx` — split text + 2x2 service grid
- [ ] 6. Create `src/components/OurConcept.tsx` — hero-style split with bg image
- [ ] 7. Create `src/components/Testimonials.tsx` — card grid with avatars + quotes
- [ ] 8. Create `src/components/Feature.tsx` — two-column about section
- [ ] 9. Create `src/components/Footer.tsx` — CTA + 3 columns + social + copyright
- [ ] 10. Compose all sections in `src/App.tsx`
- [ ] 11. Set up `src/index.css` with Tailwind theme tokens (primary #1daff3, Rubik font)
- [ ] 12. Write tests for each component (Vitest + Testing Library)
- [ ] 13. Verify 100% test coverage
- [ ] 14. Set up `public/CNAME` (kindle.free.componentdock.com)
- [ ] 15. Set up `vite.config.ts` with injectUiSource()
- [ ] 16. Run `npm install` at repo root to register workspace
- [ ] 17. Commit and push

## Placeholder images

- Hero bg: `https://picsum.photos/seed/kindle-hero/1920/1080`
- Concept bg: `https://picsum.photos/seed/kindle-concept/1920/800`
- Feature image: `https://picsum.photos/seed/kindle-about/600/400`
- Person avatars: `https://picsum.photos/seed/kindle-person-<n>/100/100` (n=1..8)

## Notes

- Testimonials: use CSS scroll-snap or static grid instead of owl-carousel
  (no jQuery dependency). Could use 2x4 or horizontal scroll layout.
- Play button: link to "#" or a placeholder; do not embed actual video.
- Dropdown nav: simplified to single-level in React (no deep nesting).
- Social sidebar: use lucide-react icons (Instagram, Twitter, Facebook)
  positioned absolutely on the hero's left edge.
- Highlight spans: use `<span className="text-primary">` for the blue
  highlight effect (original uses `.highlight` class).
