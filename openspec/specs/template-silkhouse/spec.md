# Template: SilkHouse (Fashion / E-Commerce)

## Purpose

Recreation of ColorLib **Shionhouse** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript fashion e-commerce storefront.

- **Source:** https://colorlib.com/wp/template/shionhouse/
- **Preview:** https://preview.colorlib.com/theme/shionhouse/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/shionhouse-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, packages/ui

## Design Tokens

Extracted from preview CSS (`assets/css/style.css`) and DOM analysis.

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#9F78FF` | Purple — CTAs, cart badge, accents |
| Text dark | `#222` / `#333` | Headings, body |
| Text muted | `#57667e` / `#646D77` | Subtitles, descriptions |
| Background page | `#fff` | White base |
| Background alt | `gray-bg` (light gray) | Categories section |
| Border | `#dee2e6` | Subtle dividers |
| Font heading | `"Cinzel", serif` | Logo, hero text |
| Font body | `"Poppins", sans-serif` | All body text, nav, buttons |
| Button radius | `0px` | Square buttons (border-btn style) |
| Avatar radius | `50%` | Not applicable (fashion layout) |
| Hero overlay | Semi-transparent dark | On slider background images |

### Section Backgrounds

| Section | Background |
|---------|------------|
| Header/Navbar | `#fff` (white) |
| Hero Slider | Full-width background images with dark overlay |
| Categories | 4-column image grid with overlay text |
| New Arrivals | `#fff` (white) |
| Collection Promo | Background image with text overlay |
| Popular Products | `#fff` (white) |
| Features | `gray-bg` (light gray) |
| Footer | Dark background (`#1D2547` / dark navy) |

## Page Structure (section order)

1. **Navbar** — logo "SilkHouse" (Cinzel serif) + nav (Home, Shop, About, Blog, Contact) + social icons (Twitter, Facebook, Pinterest) + search icon + cart badge (purple)
2. **HeroSlider** — 3-slide carousel, each with full-width background image, dark overlay, animated headline "FASHION CHANGING ALWAYS" (Cinzel, white), "Shop Now" CTA (purple), dot navigation
3. **Categories** — 4-column grid of category images with hover overlay text (e.g. sunglasses, watches, hoodies, fashion)
4. **NewArrivals** — "New Arrival" heading, 8 product cards in 4-column grid (image + name + star rating + price)
5. **CollectionPromo** — promotional section with background image, heading about collection
6. **PopularProducts** — "Popular Items" heading, product cards with images, names, prices, "Shop Now" buttons
7. **Features** — 4 delivery/feature items in row (Fast & Free Delivery, etc.) with icons
8. **Footer** — dark navy background, 4 columns (Quick Links, Shop Category, Partners, Get in Touch), social links, copyright bar

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Navbar shows logo and navigation
  Given the page is loaded
  Then the navbar displays "SilkHouse" logo in Cinzel serif
  And navigation links: Home, Shop, About, Blog, Contact
  And social icons (Twitter, Facebook, Pinterest)
  And a search icon and cart badge with count
```

### HeroSlider
```gherkin
Scenario: Hero slider displays fashion imagery
  Given the page is loaded
  Then a full-width image slider shows 3 slides
  And each slide has a background fashion image with dark overlay
  And each slide shows "FASHION CHANGING ALWAYS" in large serif text
  And a purple "Shop Now" button
  And dot navigation to switch slides

Scenario: Slider auto-advances
  Given the page is loaded
  Then the slider advances to the next slide after a few seconds
```

### Categories
```gherkin
Scenario: Categories grid shows 4 items
  Given the page is loaded
  Then 4 category cards display in a row
  And each card has a background image with overlay text
```

### NewArrivals
```gherkin
Scenario: New arrivals grid shows products
  Given the page is loaded
  Then the "New Arrival" section displays product cards
  And each card has an image, product name, star rating, and price
```

### CollectionPromo
```gherkin
Scenario: Collection promo section renders
  Given the page is loaded
  Then a promotional section shows a heading about the collection
  And a background image with text overlay
```

### PopularProducts
```gherkin
Scenario: Popular products section renders
  Given the page is loaded
  Then the "Popular Items" section displays product cards
  And each card has an image, name, price, and "Shop Now" button
```

### Features
```gherkin
Scenario: Features section shows service items
  Given the page is loaded
  Then 4 feature items display in a row
  And each has an icon, title (e.g. "Fast & Free Delivery"), and description
```

### Footer
```gherkin
Scenario: Footer shows four columns on dark background
  Given the page is loaded
  Then the footer has a dark navy background
  And 4 columns: Quick Links, Shop Category, Partners, Get in Touch
  And social media links
  And a copyright bar at the bottom
  And links to https://www.componentdock.com/ as "Component Dock"
```

## Verification Checklist

- [ ] Navbar renders logo, nav links, social icons, search, cart badge
- [ ] HeroSlider renders 3 slides with images, headings, CTAs, dots
- [ ] Categories renders 4 image cards with overlay text
- [ ] NewArrivals renders product grid with ratings and prices
- [ ] CollectionPromo renders promotional section
- [ ] PopularProducts renders product cards with buttons
- [ ] Features renders 4 service items in a row
- [ ] Footer renders 4 columns on dark background + Component Dock link
- [ ] Brand color #9F78FF used for CTAs and accents
- [ ] Cinzel serif for headings/logo, Poppins for body
- [ ] Responsive at all breakpoints
- [ ] No ColorLib references in app code
- [ ] All sections match ColorLib Shionhouse order 1:1
