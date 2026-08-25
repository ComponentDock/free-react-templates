# Template Tasks & Research: `lull` (ColorLib Unwind)

## Source Reference

- **Source Template**: Unwind (`https://colorlib.com/wp/template/unwind/`)
- **Live Preview**: `https://preview.colorlib.com/theme/unwind/`
- **Category**: Hospitality / Hotel Booking
- **New Name**: `lull` (`@free-react-templates/lull`, app folder `apps/lull`)

## Design Research & Notes

- **Color Palette**: Gold accent `#c5a880`, dark charcoal `#222222`, light gray `#f8f8f8`, white `#ffffff`.
- **Typography**: Serif for headings (`Old Standard TT`), clean sans-serif for body (`Nunito`).
- **Layout & Section Order**:
  1. Navbar (Logo + 6 links)
  2. Hero (Background image, serif title, CTAs)
  3. Booking Bar Widget (Check-in/out, room selector, guest count, submit)
  4. About Section (Agency intro + booking link)
  5. Services Grid (6 amenities with icons)
  6. Promo Banner (Vacation hotel banner)
  7. Featured Rooms (Suite, Family, Deluxe)
  8. Virtual Tour Section
  9. Restaurant & Bar Menu items
  10. Testimonials / Happy Guests carousel
  11. Recent Blog Grid
  12. Footer (About, services, quick links, contact, Component Dock link)

## Implementation Plan for Implementer Stream

1. Scaffold `apps/lull` using template generator / copy base app structure.
2. Set up `public/CNAME` with `lull.free.componentdock.com`.
3. Configure `package.json` with name `@free-react-templates/lull`.
4. Configure `vite.config.ts` with `injectUiSource()`.
5. Implement components for each section under `src/components/`.
6. Write robust unit tests with Vitest achieving 100% test coverage.
7. Verify with `scripts/verify-app.sh lull`.
