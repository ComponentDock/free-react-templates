# Modora — Task Outline & Design Notes

## Source
- **ColorLib template:** Coloshop
- **Preview URL:** https://preview.colorlib.com/theme/coloshop/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coloshop-free-bootstrap-ecommerce-website-template.jpg
- **Design category:** E-Commerce / Fashion Shop

## Design Notes

### Visual Style
- Clean, professional fashion e-commerce layout
- Dark header (#1e1e27) with white text and coral (#FE7C7F) accents
- White body with subtle gray (#f2f2f2) section backgrounds
- Poppins font throughout (Google Fonts)
- Rounded buttons with dark bg + white text, coral hover state

### Layout Pattern
- Full-width header with centered logo + horizontal nav
- Full-width hero slider with centered text overlay
- 3-column banner grid (equal width)
- Product grid (3 columns desktop) with filter tabs
- Split layout for Deal of the Week (image + details side by side)
- Horizontal product carousel for Best Sellers
- 4-column benefits bar
- 3-column blog cards
- Split newsletter (text left, form right)
- Multi-column footer

### Color Palette
- Primary: #FE7C7F (coral/salmon)
- Dark: #1e1e27, #232530, #282828
- Green accent: #51a042 (product badges)
- Red accent: #db5246 (sale badges)
- Light bg: #f2f2f2
- Text: #2b2b34 (primary), #51545f (secondary)

### Key Components to Build
1. TopNav — shipping bar + dropdown menus
2. Header — logo + nav + cart (sticky)
3. HeroSlider — full-width image + CTA
4. CategoryBanners — 3 image cards with overlay text
5. ProductCard — image + name + price + optional badge
6. ProductGrid — filter tabs + product card grid
7. DealOfTheWeek — split layout + countdown timer
8. ProductCarousel — horizontal scrollable product list
9. BenefitsBar — icon + text items
10. BlogCard — image + meta + title + excerpt
11. Newsletter — email form
12. Footer — links + social + copyright

### Countdown Timer
- Show days, hours, minutes, seconds
- Used in Deal of the Week section
- Simple state with useEffect/useState

## Task Order
1. Scaffold app (copy boilerplate, rename package, update vite.config.ts)
2. Add design tokens to index.css (@theme)
3. Build TopNav component
4. Build Header component (sticky)
5. Build HeroSlider component
6. Build CategoryBanners component
7. Build ProductCard + ProductGrid (with filter tabs)
8. Build DealOfTheWeek with countdown timer
9. Build ProductCarousel (Best Sellers)
10. Build BenefitsBar
11. Build BlogCard + LatestBlogs section
12. Build Newsletter section
13. Build Footer
14. Compose App.tsx from all sections
15. Write tests for all components (100% coverage)
16. Build and verify
