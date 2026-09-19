# CartNova — Implementation Tasks

Source: ColorLib Karma
Preview: https://preview.colorlib.com/theme/karma/
New name: cartnova

## Structure Order (1:1 with original)

1. Header (sticky navbar)
2. Banner (hero carousel)
3. Features (4-column service cards)
4. Category (asymmetric image grid)
5. Product Carousel (tabbed)
6. Exclusive Deal (countdown + product)
7. Brand Logos
8. Related Products (carousel)
9. Footer (about, newsletter, Instagram, social)

## Tasks

### Setup
- [ ] Copy simplest existing app as scaffold, rename package to @free-react-templates/cartnova
- [ ] Add Poppins + Roboto to index.html via Google Fonts link
- [ ] Define theme tokens in index.css: --brand-primary #ffba00, --brand-secondary #ff6c00, --text-dark #222222, --text-muted #777777, --bg-light #f9f9ff, --accent-teal #4cd3e3, --accent-blue #38a4ff
- [ ] Set up public/CNAME + homepage in package.json

### Components
- [ ] Navbar.tsx — sticky, logo, nav links (Home, Shop, Blog, Pages, Contact), cart icon, search toggle
- [ ] Banner.tsx — full-width hero carousel, product image left, heading + add-to-bag CTA right
- [ ] Features.tsx — 4-column row: icon + heading + description (Free Delivery, Return Policy, Coupon Code, 24/7 Service)
- [ ] CategoryGrid.tsx — asymmetric grid (2 tall + 2 small) with image overlays
- [ ] ProductCarousel.tsx — tabbed (Latest / Best Seller / Featured), product cards with image, name, price, wishlist icon
- [ ] ExclusiveDeal.tsx — split layout: countdown timer (Days/Hours/Mins/Secs) left, product image right, "Shop Now" CTA
- [ ] BrandLogos.tsx — horizontal row of 5 partner logos
- [ ] RelatedProducts.tsx — carousel of related product cards
- [ ] Footer.tsx — 4 columns (About Us, Newsletter, Instagram feed, Follow Us), footer-bottom with Component Dock link
- [ ] App.tsx — compose all sections in order

### Tests (TDD)
- [ ] Navbar renders all nav links, cart icon, search toggle
- [ ] Banner displays heading, CTA button, product image
- [ ] Features renders 4 cards with correct headings
- [ ] CategoryGrid renders 4 category cards with overlays
- [ ] ProductCarousel renders tabs, switches product list on tab click
- [ ] ExclusiveDeal displays countdown and Shop Now button
- [ ] BrandLogos renders 5 logo images
- [ ] RelatedProducts renders carousel cards
- [ ] Footer has newsletter form, Instagram grid, social icons, Component Dock link
- [ ] 100% coverage on all components

### Design Fidelity Notes
- Primary buttons: gradient bg from #ffba00 to #ff6c00, pill shape (rounded-full), white text
- Text: Poppins 600-700 for headings, Roboto 400 for body
- Section backgrounds alternate: transparent on #f9f9ff (section_gap pattern)
- Category images have dark overlay gradient on hover
- Countdown timer: large numbers with "Days"/"Hours"/"Mins"/"Secs" labels below
- Product cards: image, name, price, small wishlist heart icon
- Newsletter input: rounded, with arrow submit button
- Instagram grid: 8 small thumbnails in flex-wrap layout
- Social icons: simple circle buttons
