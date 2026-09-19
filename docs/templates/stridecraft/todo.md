# Stridecraft — Implementation Notes

Recreation of ColorLib "Solestyle" (https://colorlib.com/wp/template/solestyle/).

## Section order

1. AnnouncementBar
2. Header (sticky, with mobile menu)
3. SearchModal (overlay)
4. Hero (full-height, dark bg, featured product)
5. FeaturesBar (3-column icons)
6. TrendingProducts (6-card grid)
7. Testimonials (3-card grid + trust stats)
8. NewsletterCTA (orange bg, email form, app badges)
9. Footer (newsletter + 4-col links + bottom bar)

## Design notes

### Colors
- Primary orange: `#ea580c` (CTA buttons, badges, links)
- Dark backgrounds: `gray-950` (#030712) for hero/trending/testimonials
- Light backgrounds: `white` / `gray-50` for header/footer
- Announcement bar: gradient `from-primary-600 to-primary-500`

### Typography
- Body: Inter (400, 500, 600, 700)
- Display/headings: Outfit (400-800, via `font-display` class)
- Loaded via Google Fonts / CDN in index.html

### Buttons
- Primary (dark sections): white bg, primary-600 text, rounded-full, shadow-lg
- Primary (light sections): primary-600 bg, white text, rounded-lg
- Ghost/outline: border-white/20 bg-white/10 text-white, rounded-full

### Card styling
- Rounded-2xl (1rem radius)
- Product cards: white bg, shadow-sm, hover:translateY(-4px) with shadow-xl
- Testimonial cards: gray-900 bg, rounded-2xl, p-8

### Layout
- Max-width container: 7xl (80rem)
- Grid: responsive 2/3/4 columns for products; 3 cols for testimonials
- Hero: min-h-[90vh], gradient mesh background with decorative blur circles

## Component files to create

- `src/components/AnnouncementBar.tsx`
- `src/components/Header.tsx`
- `src/components/MobileMenu.tsx`
- `src/components/SearchModal.tsx`
- `src/components/Hero.tsx`
- `src/components/FeaturesBar.tsx`
- `src/components/TrendingProducts.tsx`
- `src/components/Testimonials.tsx`
- `src/components/NewsletterCTA.tsx`
- `src/components/Footer.tsx`

## Fidelity notes

- The original uses Astro-generated HTML with Tailwind utility classes directly.
- No custom CSS beyond Tailwind — all styling is utility-first.
- Dark mode via class on `<html>` with localStorage persistence.
- Product data is hardcoded (6 shoes with names, prices, ratings, colors).
- Toast notifications for cart/wishlist actions (create via JS, no library).
- Search modal uses overlay + Escape key + Cmd+K shortcut.
- Mobile menu toggles via aria-expanded attribute.
- App store badges (Apple/Google Play) as SVG icons with black/30 bg.
