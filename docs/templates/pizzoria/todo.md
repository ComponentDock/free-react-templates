# Pizzoria — Prep Notes

Source: ColorLib "Luigis" (https://colorlib.com/wp/template/luigis/)
Preview: https://preview.colorlib.com/theme/luigis/
New name: pizzoria

## Section Build Order

1. **Header** — Sticky dark header with logo, phone CTA button, hamburger nav
2. **Hero** — Full-width background image, centered text overlay, display font heading
3. **Our Story** — Two-column text section with decorative heading icon
4. **Best Sellers** — Dark background product grid (4-col, 8 items) with ribbons
5. **Our Menu** — Tabbed food menu with filter, 2-col item list
6. **Footer** — Dark footer with logo, contact info, social icons

## Design Notes

### Colors
- Primary brand: #EF002E (vivid red) — buttons, prices, accents
- Dark sections: #191919 — header, best sellers overlay, footer
- Body text: #333 on white #FFFFFF
- Green accent: #1F8330 (SPECIALITY ribbon only)

### Typography
- Display/hero: "Beyond the Mountains" (Google Font) — handwritten script for "Pizza & Pasta"
- Body: "Open Sans" (Google Font) — all other text

### Key Visual Elements
- **Triangle/zigzag dividers**: CSS clip-path or SVG triangles between sections (hero→story, story→bestsellers, bestsellers→menu, menu→footer)
- **Ribbon badges**: "OFFER" (red), "SPECIALITY" (green), "PLUS SIZE" (white) on product cards — absolute positioned triangular ribbons
- **Dark overlay on best sellers**: background image with dark semi-transparent overlay
- **Tab filter bar**: horizontal tab list with red underline on active tab, filters menu items by category
- **Product cards**: circular food image, item name, price (red, right-aligned), outlined "Order Now" button

### Layout
- Bootstrap-style grid (convert to Tailwind grid/cols)
- Hero: full-width, centered vertically
- Story: 2 equal columns (col-md-6)
- Best Sellers: 4 columns (col-lg-3), wraps on smaller screens
- Menu: 2 columns (col-md-6), each item is image-left + text-right
- Footer: centered logo, 3-column info, social icons row

### Placeholder Images
- Hero: `https://picsum.photos/seed/pizzoria-hero/1920/1200`
- Product cards: `https://picsum.photos/seed/pizzoria-seller-<n>/200/200`
- Menu items: `https://picsum.photos/seed/pizzoria-menu-<n>/120/120`
- Story decorative: `https://picsum.photos/seed/pizzoria-story/600/800`

### Implementation Tips
- Use `lucide-react` icons for social media (replace Ionicons)
- Use `cn()` from packages/ui for class composition
- Tab filtering: simple React state with category filter
- Triangle dividers: CSS `clip-path: polygon(...)` on a pseudo-element
- Ribbon: absolute positioned element with CSS triangle shape
