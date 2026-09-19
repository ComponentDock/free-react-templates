# Riviere — Implementation Tasks & Design Notes

**Source:** ColorLib eStore (https://preview.colorlib.com/theme/estore/)
**New name:** riviere
**Category:** E-Commerce

## Section Order (fidelity to source)

1. **Top Header Bar** — light top bar with flag icon + country selector + phone number (left), account links: My Account, Wish List, Shopping, Cart, Checkout (right). Hidden on mobile.
2. **Main Header** — sticky white header with logo (col-xl-1), horizontal nav: Home, Categories, Latest (dropdown with Product List, Product Details), Blog (dropdown with Blog, Blog Details), Pages (dropdown with Login, Cart, Elements, About, Confirmation, Shopping Cart, Product Checkout), Contact. Search input + heart icon + cart icon + "Sign in" button on right.
3. **Hero Slider** — large background image (`h1_hero.jpg`), split layout: left = person image (hero_man.png) with bounce animation, right = text content ("60% Discount" badge, "Winter Collection" headline with line break, subtext, "Shop Now" pill button). Two slides.
4. **Shop by Category** — section heading "Shop by Category", 4 category cards with image backgrounds and text overlays (Owmen's, Winter Cloth, Man's Cloth + one more).
5. **Latest Products** — "Latest Products" heading, product card grid.
6. **Best Collection of This Month** — featured products section with a man-shaped promotional image on one side and product grid on the other.
7. **Shop Method** — 3-column feature strip with themify icons: Free Shipping, Secure Payment, Returns/Exchange. Each with title + short description.
8. **Gallery** — horizontal row of 5 gallery images (full-width, fluid container).
9. **Footer** — light gray (#f7f7f7) background, 4 columns:
   - Column 1: Logo (footer variant) + description paragraph
   - Column 2: "Quick Links" (About, Offers & Discounts, Get Coupon, Contact Us)
   - Column 3: "New Products" (Woman Cloth, Fashion Accessories, Man Accessories, Rubber Made Toys)
   - Column 4: "Support" (FAQ, Terms & Conditions, Privacy Policy, Report a Payment Issue)
   - Bottom row: copyright left, social icons right (Twitter, Facebook, Behance, Globe)

## Design Tokens

```
Heading color:    #0b1c39   (very dark navy)
Body text:        #506172   (gray)
Secondary text:   #635c5c   (warm gray)
Primary:          #ff003c   (bright red — buttons, accents)
Accent blue:      #2577fd   (secondary accent)
Light blue:       #00b1ff   (tertiary accent)
Footer bg:        #f7f7f7   (light gray)
Heading font:     "Playfair Display", serif
Body font:        "Poppins", sans-serif
Accent font:      "Yellowtail", cursive (decorative text)
Button radius:    25px (pill shape)
Button style:     Uppercase, 3px letter-spacing, Playfair Display
```

## Implementation Notes

- Skip the preloader (React SPA loads fast enough)
- Two-tier header: top bar `hidden lg:block`, main header sticky with `position: sticky` or `sticky top-0`
- Hero slider: CSS-based carousel with background-image, or simple fade between slides
- Category cards: image background with dark overlay + centered text, responsive 4→2→1 column grid
- Product cards: clean card with image, name, price; use existing UI components
- Shop methods: 3-column grid with icon (lucide-react) + heading + description
- Gallery: horizontal flex row of images, full-width, no gaps
- Footer: `bg-[#f7f7f7]`, 4-column grid, social icons
- All placeholder images: `https://picsum.photos/seed/riviere-<n>/<w>/<h>`
- Icons: `lucide-react` (Search, Heart, ShoppingCart, Package, Shield, RefreshCw, Twitter, Facebook, Globe)
- Footer MUST link https://www.componentdock.com/ (Component Dock branding)
