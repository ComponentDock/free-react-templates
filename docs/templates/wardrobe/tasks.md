# Wardrobe — Implementation Tasks & Design Notes

## Source
- ColorLib: "Little Closet" (https://colorlib.com/wp/template/little-closet/)
- Preview: https://preview.colorlib.com/theme/little-closet/ (404 at research time)
- Fallback: screenshot analysis only (littlecloset-free-template.jpg)

## Section Order (1:1 from reference)
1. Header / Navbar
2. Hero Carousel (full-width, fashion photo bg, product cards)
3. Popular Products (category tabs + product grid)
4. Footer (Component Dock credit)

## Design Notes

### Header
- White background, full-width
- Left: handbag icon + "Wardrobe" brand text (bold, dark)
- Center/Left: hamburger menu (mobile only)
- Center: rounded search bar (pill shape, light gray border, "Search Item" placeholder)
- Right: user icon (green notification badge), cart icon, phone icon + "+1 912-252-7350"
- Clean, minimal — no top info bar

### Hero Carousel
- Full-width section with blurred/soft fashion photo as background
- Semi-transparent overlay for text readability
- White headline "New Arrivals" (large, bold)
- White subheading "Summer Wear" (lighter weight)
- 3-card product carousel centered over the hero
  - Center card: featured (larger/active), shows product image, name, star rating, price, author
  - Side cards: partially visible, product images only
  - Green circular price badge on featured card
- Left/right chevron arrows (gray border, transparent bg)
- Carousel auto-advances or user-controlled

### Popular Products
- White background section
- Centered heading "Popular on Wardrobe" (dark, bold)
- Category tabs: Women | Men | Kids | Home Deco (separated by /)
  - Active tab: teal #26a69a
  - Inactive tabs: gray
  - Click to filter product grid
- 3-column product grid (desktop), responsive
  - Product cards: white bg, subtle shadow, product image
  - Use picsum.photos for placeholder images

### Footer
- Minimal footer
- Component Dock link: https://www.componentdock.com/
- "Made with Component Dock" or similar attribution

## Tasks
- [ ] Scaffold apps/wardrobe from simplest existing app
- [ ] Set up package.json, vite.config.ts, index.html (Poppins font)
- [ ] Create Header component (brand, search, icons, mobile toggle)
- [ ] Create HeroCarousel component (bg image, text overlay, 3-card carousel)
- [ ] Create PopularProducts component (tabs + product grid)
- [ ] Create Footer component (Component Dock credit)
- [ ] Compose in App.tsx, set document title
- [ ] Define design tokens in index.css @theme
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh, fix any issues
- [ ] Update TEMPLATES.md status after merge
