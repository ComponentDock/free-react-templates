# Scholarkit — Design Notes & Implementation Tasks

Source: ColorLib Eskwela (https://preview.colorlib.com/theme/eskwela/)
Preview URL analyzed: 2026-09-20

## Section order (fidelity to original)

1. UpperMenu — dark bar, hidden mobile, social icons + Apply Now
2. Navbar — logo left, nav links right, Free Trial pill CTA
3. HeroSlider — 4 slides, bg image + overlay, heading + CTA
4. IntroCards — 3 cards: 2 icon+link, 1 promo with colored bg
5. AboutAccordion — heading + text left, 3-panel accordion right
6. Services — 4-column icon cards
7. CounterParallax — dark bg, 4 animated counters
8. OurClasses — heading + 6 course cards (3x2 grid)
9. Testimonials — image bg + overlay, carousel
10. Newsletter — image bg + overlay, email form
11. Footer — 4 columns: about, links, recent posts, contact
12. FooterBottom — copyright + Component Dock link

## Component breakdown

- `UpperMenu.tsx` — fixed top bar, social icon list, Apply Now text
- `Navbar.tsx` — sticky/fixed nav, logo, dropdown for Courses, pill CTA
- `HeroSlider.tsx` — auto-rotating slides with overlay, heading, CTA
- `IntroCards.tsx` — 3 flex cards, last one different style (promo bg)
- `AboutAccordion.tsx` — split layout, accordion with 3 expandable panels
- `Services.tsx` — 4-column grid, icon + h3 + paragraph each
- `CounterSection.tsx` — parallax bg, IntersectionObserver for count-up
- `OurClasses.tsx` — 6 course cards, image + price + title + link
- `Testimonials.tsx` — carousel (can use simple CSS scroll-snap or state)
- `Newsletter.tsx` — bg image + overlay, email form
- `Footer.tsx` — 4-column grid, social icons, quick links, blog cards, contact
- `FooterBottom.tsx` — copyright line with Component Dock link

## Key design token mapping to Tailwind

```
brand-blue: #429FFD
brand-blue-hover: #5bacfd
dark-bar: #1E2022
section-grey: #f2f3f7
body-text: gray
heading-text: #000
pill-radius: 100px
card-radius: 4px
```

## Images

All use picsum.photos with deterministic seeds:
- Hero slides: `https://picsum.photos/seed/scholarkit-hero-1/1920/600` etc.
- Course cards: `https://picsum.photos/seed/scholarkit-class-{n}/400/300`
- Testimonial avatars: `https://picsum.photos/seed/scholarkit-avatar-{n}/80/80`
- Newsletter bg: `https://picsum.photos/seed/scholarkit-newsletter/1920/600`
- Footer blog thumbs: `https://picsum.photos/seed/scholarkit-blog-{n}/80/80`

## Fonts (loaded via index.html link tags)

- Open Sans: weights 400, 600, 700, 800
- Playfair Display: weights 400, 700

## Fidelity notes

- Original uses Bootstrap grid (col-md-*) — translate to Tailwind grid/flex
- Original uses Flexslider jQuery plugin — replace with React auto-rotate
- Original uses Owl Carousel for testimonials — replace with CSS scroll-snap
- Original uses Icomoon icons — replace with lucide-react equivalents
- Accordion uses Bootstrap collapse — implement with React state
- Counter animation uses jQuery counter plugin — implement with
  IntersectionObserver + requestAnimationFrame
- All placeholder images must use picsum.photos (never copy originals)
- "Colorlib" attribution in footer → "Component Dock"
