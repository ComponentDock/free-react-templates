# Locanda — Implementation Notes

## Source
- ColorLib "Listingo": https://colorlib.com/wp/template/listingo/
- Preview: https://preview.colorlib.com/theme/listingo/
- Design tokens extracted from `css/style.css` on the live preview.

## Section order (fidelity to preview)

1. **Header** (`Navbar.tsx`)
   - Sticky nav, logo left, nav links center, Sign In button right
   - Bootstrap-style fluid container

2. **Hero** (`Hero.tsx`)
   - Full-width background image with dark navy gradient overlay
   - Centered heading "Find Nearby Attraction"
   - Search form: keyword input, location input, category select, Search button
   - Category tab pills: Hotel, Food, Shopping, Bar & Pubs, Places, Discover

3. **PopularCategories** (`PopularCategories.tsx`)
   - Section title "Popular Categories"
   - Grid of category cards (icon + title), responsive 4→2→1 columns

4. **Explore** (`Explore.tsx`)
   - Heading "Explore Europe" + descriptive text
   - Featured listings or content cards

5. **SprayedCTA** (`SprayedCTA.tsx`)
   - Full-width background image with dark overlay
   - Heading "Sprayed Your Business with Us"
   - Subtext + "Add Your Business" button

6. **Testimonials** (`Testimonials.tsx`)
   - Section title "Testimonials" + subtext
   - Carousel of testimonial cards: quote, name, role

7. **Newsletter** (`Newsletter.tsx`)
   - Email input + subscribe button
   - Descriptive text

8. **Footer** (`Footer.tsx`)
   - Multi-column: about, service links, nav links, newsletter
   - Copyright with Component Dock link

## Design tokens (for Tailwind @theme)

```
--color-brand-navy: #001D38;
--color-brand-orange: #f44a40;
--color-brand-cyan: #00ACED;
--color-surface-light: #f9f9ff;
--color-text-dark: #1F1F1F;
--font-primary: "Raleway", sans-serif;
```

## Fidelity notes

- Hero overlay uses `linear-gradient(to bottom, #001d38 0%, rgba(0,29,56,0.6) 100%)`
- Button border-radius is Bootstrap default (~4px), not pill-shaped
- Category cards use icon images → use lucide-react icons as substitutes
- Testimonials use a carousel → consider a simple CSS-based carousel or state toggle
- Placeholder images: `https://picsum.photos/seed/locanda-<n>/<w>/<h>`
- No ColorLib references in app code

## Component dependencies

- `packages/ui`: Button, ButtonLink, cn utility
- lucide-react: icons for categories (MapPin, Utensils, ShoppingBag, Wine, Music, etc.)
