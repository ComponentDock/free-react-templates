# PropBox — Implementation Notes

Source: ColorLib Real Estate 2
Preview: https://preview.colorlib.com/#real-estate-2 (WordPress-only, no standalone HTML)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realestate2-free-template.jpg

## Section order

1. TopBar — dark navy, contact info, social icons
2. Navbar — white bg, "Real Estate." logo, nav links with dropdowns, search, "Add Property" orange CTA
3. Hero — full-width house image, dark overlay, heading "Find Your Best Property", subtitle, search form (5 filter fields + search button)
4. FeaturedProperties — property cards grid, image/price/address/beds/bath
5. About — light gray bg, company info, image
6. Categories — property type cards with icons and counts
7. LatestProperties — property listing cards (similar to Featured)
8. Testimonials — slider/carousel with client photos, names, roles
9. Team — agent cards with photos, names, roles, social links
10. Blog — post cards with images, dates, titles, excerpts
11. Newsletter — dark navy bg, subscribe form
12. Footer — dark navy, company info, nav links, social icons, copyright, Component Dock link

## Design fidelity notes

- Brand color: warm orange (#F77F00) — used on CTA buttons, search button, price slider, accents
- Dark navy: #1B2A4A — top bar, hero overlay, newsletter, footer
- Font: Poppins (Google Fonts) — sans-serif for all text
- Navbar is sticky on scroll
- Hero search form has dropdown selects and a range slider for price
- Property cards show: image, price badge, address, bed/bath/area icons
- Testimonials use a carousel/slider with prev/next navigation
- All sections alternate between white and light gray (#F8F9FA) backgrounds
- Footer must link to https://www.componentdock.com/ (branded "Component Dock")

## Token mapping to Tailwind

```
--brand-orange: #F77F00  → bg-brand, text-brand, border-brand
--navy-dark: #1B2A4A     → bg-navy, text-navy
--white: #FFFFFF          → bg-white
--gray-light: #F8F9FA     → bg-gray-50
--text-body: #333333      → text-gray-700
```

## Placeholder images

Use picsum.photos with deterministic seeds:
- Hero background: `https://picsum.photos/seed/propbox-hero/1920/1080`
- Property images: `https://picsum.photos/seed/propbox-prop-{1-8}/600/400`
- Agent photos: `https://picsum.photos/seed/propbox-agent-{1-4}/300/300`
- Blog images: `https://picsum.photos/seed/propbox-blog-{1-3}/600/400`
