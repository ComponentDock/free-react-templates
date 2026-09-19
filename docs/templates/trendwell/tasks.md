# Trendwell — Implementation Tasks & Design Notes

Source: ColorLib Fashe (https://colorlib.com/wp/template/fashe/)
Preview: https://preview.colorlib.com/theme/fashe/
New name: Trendwell (never reuse "Fashe" in app code)

## Section implementation order

1. **Navbar** — Sticky top nav with logo left, links center (Home, Shop dropdown, Blog), cart icon right. Hamburger on mobile. Use `packages/ui` Nav components if available.

2. **Hero Banner** — Full-bleed (80vh), background image with dark overlay (opacity 0.42). Centered content: eyebrow "New season", heading "New season essentials", subtext, "Shop now" CTA button. Placeholder image via picsum.photos.

3. **Marquee Ticker** — Below hero, dark bg (#141414), light text. CSS animation scrolling trust signals: "Free shipping over $100 · 30 day returns · Carbon neutral delivery · Natural fibres only". Duplicate content for seamless loop.

4. **Shop by Category** — Heading "Shop by category". 3-column grid (responsive: 1 col mobile, 3 col desktop). Each card: image + category label overlay. Categories: Clothing, Jewellery, Bags.

5. **New Arrivals** — Eyebrow "Just landed", heading "New arrivals", "View all" link. Product grid (2 col mobile, 4 col desktop). Each card: image, title, price (with strikethrough for sale items), "Sale" badge, "Quick add" overlay on hover.

6. **Brand Statement** — Warm bg (#F4F2EE). Heading "Made to last". Editorial paragraph about natural fibres and considered construction. Simple text section, no complex layout.

7. **Why Shop With Us** — Heading "Why shop with us". 3-column feature grid. Each item: lucide icon + title + description.
   - Truck icon → "Free shipping" / "On all orders over $100, worldwide."
   - RotateCcw icon → "30 day returns" / "Not right? Send it back, no questions."
   - Leaf icon → "Made responsibly" / "Traceable materials and fair factories."

8. **Journal / Blog** — Heading "Journal", "All posts" link. Grid of 2-3 blog cards. Each card: thumbnail image, date, category tag, title, excerpt text. Cards link to placeholder.

9. **Footer** — Dark bg. Brand name "Trendwell", tagline. Navigation columns: Shop (Clothing, Bags, Accessories, Jewellery, Shoes). Social icons (placeholder). **Component Dock link mandatory**.

## Design tokens to set in index.css @theme

```
--color-brand: #C8553D;
--color-brand-light: #E2A087;
--color-surface: #F4F2EE;
--color-dark: #141414;
--color-border: #E4E4E4;
--font-family: 'Assistant', sans-serif;
```

## Fidelity notes

- Match the section order exactly as listed in the DOM analysis
- The marquee is a key distinctive element — ensure smooth infinite scroll
- Product cards need a hover overlay ("Quick add") effect
- The "Sale" badge uses terracotta (#C8553D) background
- Category cards use image overlays with text at bottom
- The brand statement section is full-width with warm off-white bg
- Feature icons use lucide-react equivalents
- Footer has the warm off-white text on dark background
- All placeholder images use picsum.photos with deterministic seeds
- No ColorLib references anywhere in the app code
