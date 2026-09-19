# SunBurst — Implementation TODO

## Structure Order (component build sequence)

1. `Navbar.tsx` — sticky header, logo, nav links (Home, Shop, Blog, Pages, Contact), cart icon, search toggle, mobile hamburger
2. `HeroBanner.tsx` — fullscreen section with headline, description, "Add to Bag" CTA, product image placeholder
3. `FeaturesBar.tsx` — 4-column row, icon + title + subtitle per feature card
4. `CategoryGrid.tsx` — asymmetric grid (8+4 / 4+8 layout), image overlay cards with deal titles
5. `ProductCarousel.tsx` — reusable carousel component for Latest + Coming Products, product cards with image/name/price/strikethrough
6. `ExclusiveDeal.tsx` — split layout: countdown timer left, product carousel right, "Shop Now" CTA
7. `BrandLogos.tsx` — horizontal row of brand logo placeholders
8. `Footer.tsx` — social links, copyright, Component Dock attribution

## Section-by-Section Fidelity Notes

### Navbar
- Sticky on scroll (CSS `position: sticky; top: 0`)
- Logo on left, nav items center-right, cart + search icons far right
- Mobile: hamburger toggles dropdown nav
- Search bar slides down below nav when search icon clicked
- Nav items have dropdown submenus (Shop → Shop Category, Product Details, etc.; Blog → Blog, Blog Details; Pages → Login, Tracking, Elements)

### HeroBanner
- Full viewport height (`100vh`-ish), white background
- 5/7 column split: text left, image right
- Headline: large Poppins, dark color, `<br>` between lines
- Description: Roboto, gray, paragraph
- CTA: "Add to Bag" with circle icon (lnr-cross) + uppercase text
- Product image: large, centered in right column (use picsum placeholder)

### FeaturesBar
- `section_gap` padding (100px vertical)
- 4 equal-width columns (lg-3 each)
- Each: circular icon image + bold title (h6) + subtitle (p)
- Icons: delivery truck, return arrow, headset, shield (use lucide-react equivalents)

### CategoryGrid
- Asymmetric 2-column layout within container
- Left side: 2+2 grid (8+4 / 4+8 widths)
- Right side: single tall card (4 cols wide)
- Each card: full-bleed image + dark overlay + centered deal title
- Overlay appears/ intensifies on hover

### ProductCarousel
- Section title centered: "Latest Products" (h1) + description paragraph
- 4-column grid of product cards
- Each card: product image, product name (h6), current price (h6), original price with strikethrough (h6.l-through)
- "Coming Products" section repeats same structure
- Implement as horizontal scroll or simple grid (no owl-carousel dependency)

### ExclusiveDeal
- Full-width section, split 50/50
- Left: dark/branded background, "Exclusive Hot Deal Ends Soon!" heading, countdown with 4 blocks (Days/Hours/Minutes/Seconds), "Shop Now" primary button
- Right: exclusive product slider with product cards (price, name, add-to-bag)
- Countdown: implement with useState + useEffect, no external lib needed

### BrandLogos
- Simple row of brand logo images (use placeholder SVGs or generic brand icons)
- Evenly spaced, grayscale, section_gap padding

### Footer
- Dark background section with social icon links (lucide-react)
- Copyright text centered
- "Made with Component Dock" linking to https://www.componentdock.com/

## Design Token Application

- `--brand-gradient: linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)` in `index.css` @theme
- Use Tailwind classes: `bg-gradient-to-r from-[#ffba00] to-[#ff6c00]` or the CSS variable
- Button radius: `rounded-full` (50px pill)
- Section gaps: `py-24 lg:py-[100px]` (80px mobile, 100px desktop)
- Headings: font-family Poppins via `font-heading` or Tailwind config
- Body: font-family Roboto via `font-body` or default

## Dependencies

- `lucide-react` for icons (ShoppingBag, Search, Truck, RotateCcw, Headphones, ShieldCheck, etc.)
- No carousel library needed — use CSS scroll-snap or simple grid
- Google Fonts: Poppins (500, 700) + Roboto (400) via `<link>` in index.html
