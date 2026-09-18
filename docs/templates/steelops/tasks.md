# SteelOps — Implementation Notes

Source: ColorLib Constructioncompany
Preview: https://preview.colorlib.com/theme/constructioncompany/
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Section order

1. Navbar (transparent, sticky, top info bar)
2. Hero Slider (full-viewport, auto-advancing, 2 slides)
3. Services (3 cards, image + caption + arrow icon)
4. About / Support Company (2-column: text left, image right with overlay)
5. Projects Gallery (tab filter + 3-col grid, multiple tabs)
6. Contact CTA (full-width dark bg, heading + button)
7. Counter (floating orange bar, 3 stats)
8. Team (3 member cards)
9. Testimonials (slider, quote + founder)
10. Latest News (2 dark blue cards)
11. Footer (4 columns, dark bg, copyright bar)

## Design tokens (for index.css @theme)

- brand: #ff5f13 (orange)
- navy-dark: #0e132a (headings)
- navy-deep: #161e46 (secondary text)
- navy-overlay: #191a33 (header bg)
- news-bg: #00235b (news card bg)
- accent-red: #c94500 (date badge)
- accent-blue: #1696e7 (overlay)
- font-body: Barlow
- font-heading: Teko
- btn-radius: 5px (primary), 0px (white variant)

## Fidelity notes

- Hero: massive uppercase heading in orange, stacked lines, with a ghosted watermark text behind section titles (stroke-only, large font).
- Navbar: transparent over hero, semi-transparent dark bg when scrolled (sticky).
- Services cards: image top, light bg caption below, "Read More" arrow icon that turns orange on hover.
- Projects: tab filter bar centered, 3-col grid, cards have image + caption, hover state turns caption dark blue.
- Counter: floating bar overlapping sections, orange bg.
- Team: simple cards with photo, role (Teko, orange), name.
- Testimonials: slider with quote and founder avatar.
- News: dark blue cards with orange date badge.
- Footer: dark bg, 4 columns, newsletter form input.
- All section titles have a ghosted/watermark uppercase text behind them (large stroke-only Teko/Barlow text).
- Hero button has a box-shadow offset that shifts on hover.

## Component mapping

- `Navbar.tsx` — top info bar + transparent nav + sticky behavior
- `HeroSlider.tsx` — Swiper or CSS-based auto-slider with overlay
- `Services.tsx` — 3 service cards in a row
- `About.tsx` — 2-column about section
- `Projects.tsx` — tab filter + grid of project cards
- `ContactCTA.tsx` — full-width dark CTA section
- `Counter.tsx` — floating orange bar with 3 counters
- `Team.tsx` — 3 team member cards
- `Testimonials.tsx` — testimonial slider
- `LatestNews.tsx` — 2 news cards
- `Footer.tsx` — 4-column footer with newsletter

## Placeholder images

Use `https://picsum.photos/seed/steelops-<n>/<w>/<h>` pattern:
- Hero: seed steelops-hero, 1920x900
- Services: seed steelops-service-1/2/3, 400x300
- About: seed steelops-about, 600x500
- Projects: seed steelops-project-1 through 6, 400x300
- Team: seed steelops-team-1/2/3, 300x400
- News: seed steelops-news-1/2, 400x250
