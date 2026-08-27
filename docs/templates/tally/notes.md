# Tally — Implementation Notes

## Source

- ColorLib "Accounting" → https://preview.colorlib.com/theme/accounting/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/accounting-free-template.jpg

## Design Analysis

- Professional accounting/business consulting template
- Montserrat font family (Google Fonts)
- Orange primary (#F96D00) for CTAs and accents
- Dark navbar and footer sections
- Alternating white/light-gray section backgrounds
- Bootstrap 4 grid structure throughout

## Sections (12 total)

1. TopBar (phone, email, social icons)
2. Navbar (brand, nav links, search, sticky)
3. Hero (3-slide carousel with overlay)
4. About (image + services list)
5. Services (4-column icon cards)
6. StatsCounter (animated number counters)
7. Testimonials (carousel with quotes)
8. FAQ (accordion with images)
9. Blog (3-column cards)
10. Newsletter (dark CTA banner)
11. Pricing (4-tier cards)
12. Footer (4 columns + form + copyright)

## Implementation Strategy

- Single-page app with sections in App.tsx
- Components: Navbar, TopBar, Hero, About, Services, StatsCounter, Testimonials, FAQ, Blog, Newsletter, Pricing, Footer
- Use lucide-react for icons (ChartBar, Calculator, DollarSign, TrendingUp, Quote, ChevronDown, etc.)
- Use picsum.photos for placeholder images
- Counter animation via IntersectionObserver + requestAnimationFrame
- FAQ accordion via React state (no external lib)
- Hero carousel via simple React state with auto-rotate

## Token Map

- `--brand`: #F96D00 (orange)
- `--dark`: #1a1a2e (navbar/footer bg)
- `--light`: #f8f9fa (section alternate bg)
- Font: 'Montserrat', sans-serif
