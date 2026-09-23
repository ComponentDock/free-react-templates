# Archway — Design Notes & Tasks

Source: ColorLib "Klift" — https://preview.colorlib.com/theme/klift/

## Structure order (top → bottom)

1. Navbar (fixed, transparent → dark)
2. Hero Slider (owl-carousel, 3 slides, full-height)
3. Services (bg-light, 3-column cards)
4. About (2-column: text + image)
5. Counter (parallax bg, 4 animated stats)
6. Projects (4-column grid)
7. Testimonials (carousel, 5 items)
8. Team (4-member cards, social icons)
9. Blog (3-card grid)
10. CTA / Contact strip (2-column: text + image)
11. Footer (dark, 4-column widgets)

## Component breakdown

| Component        | File                | Notes                                          |
| ---------------- | ------------------- | ---------------------------------------------- |
| Navbar           | `Navbar.tsx`        | Fixed, transparent→dark scroll, hamburger on mobile |
| HeroSlider       | `HeroSlider.tsx`    | Full-height slides, 2 CTA buttons per slide    |
| ServicesStrip    | `ServicesStrip.tsx` | 3 cards: icon + heading + description          |
| AboutSection     | `AboutSection.tsx`  | 2-column, image right, CTA link                |
| CounterSection   | `CounterSection.tsx`| 4 stats, animated count-up on scroll           |
| ProjectGrid      | `ProjectGrid.tsx`   | 4 cards, hover overlay                         |
| Testimonials     | `Testimonials.tsx`  | Carousel, user img + quote                     |
| TeamGrid         | `TeamGrid.tsx`      | 4 cards, social icon links                     |
| BlogGrid         | `BlogGrid.tsx`      | 3 cards, date/author/comments                  |
| CTAStrip         | `CTAStrip.tsx`      | Heading + contact info + image                 |
| Footer           | `Footer.tsx`        | 4-column dark footer, Component Dock link      |

## Design tokens (from CSS analysis)

- Font: Work Sans (300, 400, 500, 700) via Google Fonts
- Heading accent: Abril Fatface (400) — hero tagline
- Brand: #78d5ef (sky blue)
- Brand hover: #4ac7ea
- Custom link: #ff9a9a (pink), hover #ffe1e1
- Dark section bg: #3c312e (warm brown)
- Footer bg: #141313 (near-black)
- Text: #212529 (primary), #6c757d (secondary)
- Button radius: 0.25rem
- Button style: btn-custom (no bg, pink, 4px bottom border)
- White outlined buttons for hero CTAs

## Fidelity notes

- Hero uses owl-carousel for slider; in React we can use a simple interval-based
  slider or a lightweight carousel (no heavy deps — prefer CSS transitions).
- Counter section uses parallax background image with dark overlay.
  CSS scroll-linked animations or IntersectionObserver for count-up.
- Services cards use Bootstrap-style 3-column layout → Tailwind grid.
- Testimonials carousel: can use CSS scroll-snap or a simple interval slider.
- Project hover overlay: absolute positioned div with opacity transition.
- Team social icons: use lucide-react (Facebook, Twitter, LinkedIn, Instagram).
- Blog cards: image top, metadata + text below, like standard blog cards.
- CTA strip: 2-column, text left, image right, dark overlay bg.
- Footer: 4-column grid, dark bg, multiple widget sections.

## Task outline

- [ ] Create workspace: `apps/archway/` with package.json, vite.config, tsconfig
- [ ] Implement `src/index.css` with Tailwind + theme tokens
- [ ] Build `Navbar.tsx` — fixed, transparent→dark scroll
- [ ] Build `HeroSlider.tsx` — 3 slides, CTA buttons
- [ ] Build `ServicesStrip.tsx` — 3 service cards
- [ ] Build `AboutSection.tsx` — 2-column layout
- [ ] Build `CounterSection.tsx` — 4 animated stats
- [ ] Build `ProjectGrid.tsx` — 4 project cards
- [ ] Build `Testimonials.tsx` — carousel testimonials
- [ ] Build `TeamGrid.tsx` — 4 team members
- [ ] Build `BlogGrid.tsx` — 3 blog cards
- [ ] Build `CTAStrip.tsx` — contact strip
- [ ] Build `Footer.tsx` — 4-column dark footer
- [ ] Compose in `App.tsx`, verify section order
- [ ] Write tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] Commit + push
