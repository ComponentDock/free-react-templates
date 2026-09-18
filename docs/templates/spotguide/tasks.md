# Spotguide — Implementation Tasks

Recreation of ColorLib "Listing" directory/listing template.
Source: https://colorlib.com/wp/template/listing/
Preview: https://preview.colorlib.com/theme/listing/

## Section order (1:1 fidelity)

1. **Navbar** — sticky top bar, "Spotguide" brand, dropdown links (Destinations, Browse Categories, Pages), "Add Listing" button
2. **Hero** — full-width bg image, H1 "Discover great places in New York", subtitle, search bar + category pills (Nightlife, Restaurants, Outdoors, Hotels, Art & Culture)
3. **Featured Places** — heading + 3 place cards (image, title, star rating, price, address) + "VIEW ALL" button
4. **Browse Categories** — heading + 7-8 category blocks (icon, name) + "ADD LISTING" button
5. **Destinations** — "Reach millions of People" heading + CTA
6. **Footer** — nav columns, social links, newsletter form, ComponentDock link

## Design tokens

- Primary: #ff3a6d (rose/pink), dark variant: #f34e79
- Secondary: #46cd38 (green badges/accents)
- Dark bg: #252a33 (footer/dark sections)
- Body text: #737882 (muted), #3e434b (headings)
- Star/rating: #ffb006 (gold)
- Light bg: #f3f4f7
- Font: Roboto (Google Fonts)
- Border-radius: 3px (cards), 50% (circular icons/avatars)

## Fidelity notes

- Match section order exactly as listed above
- Use Roboto font from Google Fonts (link in index.html)
- Rose/pink #ff3a6d as primary — all buttons, links, accents
- Dark navbar with dropdown menus
- Hero has search bar with category filter pills
- Featured Places cards: image top, title, star rating row, price, address
- Browse Categories: grid of circular icon blocks with category names
- Destinations section: dark background with CTA
- Footer: dark background (#252a33), white/light text
- Newsletter form: email input + submit button, prevent default
- Placeholder images via picsum.photos/seed/spotguide-<n>/<w>/<h>
- Icons via lucide-react
- No ColorLib references in app code; provenance only in spec
- Footer links to componentdock.com

## Component plan

- src/components/Navbar.tsx
- src/components/Hero.tsx
- src/components/FeaturedPlaces.tsx
- src/components/BrowseCategories.tsx
- src/components/Destinations.tsx
- src/components/Footer.tsx
