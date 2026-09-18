# Directory — Implementation Notes

Source: ColorLib "Listed" (https://preview.colorlib.com/theme/listed/)
New name: directory
Category: Real Estate / Directory

## Section Order (implement in this order)

1. Navbar
2. Hero
3. FeaturedDestinations (3-col grid)
4. TopDestinationsRow (6-col thumbnails)
5. SectionCover (parallax promo)
6. MoreFeaturedDestinations (3-col grid, reuse FeaturedDestinations component)
7. Footer

## Component Breakdown

- `Navbar.tsx` — Logo "Directory", nav links, search icon button
- `Hero.tsx` — Full-width bg image, dark overlay (rgba(0,0,0,0.5)), centered headline + subtitle + CTA button
- `FeaturedDestinations.tsx` — Heading + subtitle, 3-col grid of `DestinationCard` components
- `DestinationCard.tsx` — Image bg, dark overlay on hover, location icon + place name + "Visit This Place" link
- `TopDestinationsRow.tsx` — 6-col row of small thumbnails with location pin + name
- `SectionCover.tsx` — Full-width parallax bg image, centered promotional text
- `Footer.tsx` — 4-col: About (contact info), Links, Latest Blog, Newsletter; light gray bg #f2f2f2

## Design Fidelity Notes

- **Fonts:** Load Raleway (body) and Playfair Display (headings) via Google Fonts link in index.html
- **Colors:** Use Tailwind @theme to define brand tokens: `--color-brand-black: #000`, `--color-brand-blue: #007bff`, `--color-brand-hover: #3395ff`, `--color-footer-bg: #f2f2f2`
- **Buttons:** Square corners (no border-radius), padding 12px 30px. Primary CTA is black bg, white text. Nav/search button uses Bootstrap blue.
- **Hero:** Use picsum.photos seed for background, overlay via `bg-black/50` absolute div
- **Destination cards:** Image bg with `bg-cover bg-center`, overlay darkens on hover. Use lucide-react `MapPin` icon replacing ionicons.
- **Section Cover:** Parallax effect via `bg-fixed bg-cover` on a picsum.photos image
- **Footer:** Light gray bg, 4-col responsive grid. Contact info uses lucide-react icons (MapPin, Phone, Mail). Include Component Dock link.
- **Text color:** Body text #6c757d, headings #000, hero text #fff
- **Spacing:** Sections use generous padding (py-5 or py-6 equivalent)

## Placeholder Content

- Hero image: `https://picsum.photos/seed/directory-hero/1920/1080`
- Destination cards: `https://picsum.photos/seed/directory-dest-1/600/400` through `-dest-6`
- Section cover: `https://picsum.photos/seed/directory-cover/1920/600`
- Blog thumbnails: `https://picsum.photos/seed/directory-blog-1/100/100` etc.

## Testing Notes

- Each section component gets its own test file
- Test: renders heading text, renders correct number of cards, buttons have correct styles
- Test: responsive layout (mobile hamburger, stacked grids)
- Coverage target: 100% lines/functions/branches/statements
