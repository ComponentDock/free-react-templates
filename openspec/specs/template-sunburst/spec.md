# Template: SunBurst (Ecommerce / Fashion Shop)

## Purpose

Recreation of the ColorLib "Karma" template as a single-page React 19 + Vite + Tailwind 4 + TypeScript application.

- **Source:** ColorLib Karma — https://colorlib.com/wp/template/karma/
- **Preview URL:** https://preview.colorlib.com/theme/karma/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/karma-free-template.jpg
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript (strict)
- **Package:** `@free-react-templates/sunburst`
- **Deploy target:** `sunburst.free.componentdock.com`

## Design Tokens (extracted from preview CSS)

| Token | Value | Source |
|-------|-------|--------|
| Brand gradient | `linear-gradient(90deg, #ffba00 0%, #ff6c00 100%)` | `.primary-btn`, CTA buttons, accents |
| Primary yellow | `#ffba00` | Button backgrounds, accents, active states |
| Primary orange | `#ff6c00` | Gradient end, hover states |
| Body text | `#777777` | `body { color }` |
| Headings | `#222222` | `h1-h6 { color }` |
| Background | `#ffffff` | `body { background }` |
| Section gap bg | `#f9f9ff` | `.section_gap`, `.single-input`, secondary bg |
| Light border | `#edf3fd` | Table row borders |
| Font - Headings | `"Poppins", sans-serif` (500, 700) | Google Fonts import |
| Font - Body | `"Roboto", sans-serif` (400) | Google Fonts import |
| Button radius | `50px` (pill) | `.primary-btn { border-radius }` |
| Section padding | `100px 0` desktop / `80px 0` mobile | `.section_gap` |

## Visual Design (from screenshot)

Clean, modern ecommerce storefront with a warm golden-orange accent palette. White background, generous whitespace. The hero banner is full-width with a product image on the right and bold headline + CTA on the left. Feature icons sit in a clean row below. Category cards use image overlays with hover effects. Product cards are minimal with image, name, and price. A bold countdown deal section splits the viewport (text left, product carousel right). Brand logos appear in a simple row. Footer is dark with social links.

## Section Structure (top to bottom)

1. **Navbar** — sticky header with logo, nav links (Home, Shop, Blog, Pages, Contact), cart icon, search toggle
2. **HeroBanner** — fullscreen slider with headline ("Nike New Collection!"), description paragraph, "Add to Bag" CTA with icon, product image on right
3. **FeaturesBar** — 4-column row with icon + title + subtitle (Free Delivery, Return Policy, 24/7 Support, Secure Payment)
4. **CategoryGrid** — asymmetric grid of category cards with image overlays and deal titles (Sneaker for Sports, Product for Couple)
5. **ProductCarousel** — two carousels ("Latest Products" + "Coming Products"), each with 4-column product cards (image, name, price, strikethrough original price)
6. **ExclusiveDeal** — full-width split: left side has countdown timer (Days/Hours/Minutes/Seconds) + "Shop Now" CTA; right side has exclusive product slider
7. **BrandLogos** — row of brand/partner logos
8. **RelatedProducts** — additional product carousel
9. **Footer** — social links row, copyright, "Made with Component Dock" attribution

## Gherkin Requirements

### Scenario: Navbar renders correctly
```gherkin
Given the user loads the page
Then the navbar is visible and sticky
And the logo is displayed on the left
And navigation links "Home", "Shop", "Blog", "Pages", "Contact" are present
And a cart icon and search toggle are visible in the right section
```

### Scenario: Hero banner displays content
```gherkin
Given the user loads the page
Then the hero banner occupies the full viewport height
And a headline "Nike New Collection!" is displayed
And a description paragraph is visible
And an "Add to Bag" call-to-action is present
And a product image is shown on the right side
```

### Scenario: Features bar shows four items
```gherkin
Given the user loads the page
Then the features section displays four feature cards
And each card has an icon, a title, and a subtitle
And the features are "Free Delivery", "Return Policy", "24/7 Support", "Secure Payment"
```

### Scenario: Category grid renders categories
```gherkin
Given the user loads the page
Then the category section displays category cards in an asymmetric grid
And each card has an image with an overlay
And each card shows a deal title (e.g. "Sneaker for Sports")
```

### Scenario: Product carousel displays products
```gherkin
Given the user loads the page
Then a "Latest Products" section is visible
And a "Coming Products" section is visible
And each section has a carousel of product cards
And each product card shows an image, name, current price, and original price (strikethrough)
```

### Scenario: Exclusive deal countdown
```gherkin
Given the user loads the page
Then the exclusive deal section is visible
And a countdown timer shows Days, Hours, Minutes, Seconds
And a "Shop Now" button with brand gradient is present
And an exclusive product carousel is on the right side
```

### Scenario: Brand logos section
```gherkin
Given the user loads the page
Then a row of brand logos is displayed
And the logos are evenly spaced in a horizontal row
```

### Scenario: Footer content
```gherkin
Given the user loads the page
Then the footer is visible
And social media icon links are present
And a copyright notice is displayed
And a "Made with Component Dock" attribution links to https://www.componentdock.com/
```

### Scenario: Responsive layout
```gherkin
Given the user is on a mobile viewport (<= 768px)
Then the navbar collapses into a hamburger menu
And the hero banner stacks vertically
And product carousels scroll horizontally
And the exclusive deal section stacks vertically
```

## Verification Checklist

- [ ] Navbar is sticky with correct nav items and icons
- [ ] Hero banner has correct headline, description, CTA, and image
- [ ] Features bar shows exactly 4 items with icons
- [ ] Category grid uses asymmetric layout matching the original
- [ ] Product carousels render with correct card structure (image, name, price, strikethrough)
- [ ] Exclusive deal section has working countdown timer and product slider
- [ ] Brand logos row renders correctly
- [ ] Footer has social links, copyright, and Component Dock link
- [ ] Brand gradient (#ffba00 → #ff6c00) is applied to primary buttons and CTAs
- [ ] Fonts: Poppins for headings, Roboto for body
- [ ] Section spacing uses 100px gap (80px on mobile)
- [ ] Pill-shaped buttons (border-radius: 50px)
- [ ] Responsive: hamburger nav, stacked layout on mobile
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] 100% test coverage on all components
