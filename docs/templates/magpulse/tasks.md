# MagPulse — Implementation Tasks & Design Notes

## Source
- ColorLib slug: `magnews`
- Preview: https://preview.colorlib.com/theme/magnews/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/magnews-free-template.jpg

## Section order (replication order)

1. TopHeader — dark bar, links + social icons
2. CenterHeader — logo + ad banner
3. NavHeader — sticky category nav with search + hamburger
4. HeroCarousel — full-width featured articles (Owl Carousel → emulate with auto-play)
5. TabbedContent — News/Sport tabs with sub-carousel
6. SecondaryCarousel — another article carousel with custom nav
7. TrendingPosts — sidebar widget, thumbnail list
8. StayConnected — social follow buttons
9. Newsletter — email subscribe form
10. MostRead — sidebar widget, thumbnail list
11. PopularVideo — video embed placeholder
12. PopularPosts — article card grid
13. FeaturedPosts — 2-column article card grid
14. Footer — 3-column top + copyright bottom

## Design notes

- **Color palette**: Red accent (#EF233C), orange secondary (#FE7E00), near-black dark (#07090C), white (#FFF), dark gray (#222), light gray (#DDD)
- **Typography**: Lato for headings/titles, Open Sans for body text — both from Google Fonts
- **Layout**: Bootstrap 12-col → replicate with Tailwind grid (grid-cols-12 or flex). Sidebar + main content on desktop; stacked on mobile.
- **Carousel**: Use a React carousel library (e.g. embla-carousel or swiper) instead of Owl Carousel. Match auto-play interval + navigation arrows.
- **Article cards**: Background image with dark gradient overlay, category badge (colored), article type, title, date/author meta. Square corners (border-radius: 0).
- **Avatars**: Round (50% radius) — used in sidebar widgets and author images.
- **Footer**: 3-column layout on desktop, stacked on mobile. Dark background (#07090C). Component Dock link required.
- **Back to top**: Fixed position button, appears after scrolling past viewport height, smooth scroll to top.
- **Responsive**: Hamburger menu on mobile (<768px), single column layout, carousel becomes swipeable.

## Files to create

- `apps/magpulse/src/App.tsx` — main composition
- `apps/magpulse/src/components/TopHeader.tsx`
- `apps/magpulse/src/components/CenterHeader.tsx`
- `apps/magpulse/src/components/NavHeader.tsx`
- `apps/magpulse/src/components/HeroCarousel.tsx`
- `apps/magpulse/src/components/TabbedContent.tsx`
- `apps/magpulse/src/components/SecondaryCarousel.tsx`
- `apps/magpulse/src/components/TrendingPosts.tsx`
- `apps/magpulse/src/components/StayConnected.tsx`
- `apps/magpulse/src/components/Newsletter.tsx`
- `apps/magpulse/src/components/MostRead.tsx`
- `apps/magpulse/src/components/PopularVideo.tsx`
- `apps/magpulse/src/components/PopularPosts.tsx`
- `apps/magpulse/src/components/FeaturedPosts.tsx`
- `apps/magpulse/src/components/Footer.tsx`
- `apps/magpulse/src/components/BackToTop.tsx`
- `apps/magpulse/src/index.css` — Tailwind + theme tokens
- `apps/magpulse/src/main.tsx` — entry

## Fidelity notes

- Match section order 1:1 (see above)
- Match color tokens exactly — brand accent #EF233C must appear on links, active nav, category badges
- Match typography: Lato headings, Open Sans body
- Match dark header/nav/footer backgrounds (#07090C)
- Match square card/button corners (border-radius: 0)
- Use placeholder images from picsum.photos with deterministic seeds
- Use lucide-react for social icons instead of Font Awesome
- Footer MUST link componentdock.com (replaces any original attribution)
