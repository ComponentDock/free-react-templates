# Template: Velvet (Fashion E-Commerce)

## Purpose

Recreation of ColorLib's **Karl** fashion e-commerce template.
- Source slug: `karl`
- Preview URL: https://preview.colorlib.com/theme/karl/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- A single-page fashion e-commerce homepage with hero slider, product grid, promotional sections, testimonials, and newsletter footer.

## Design Tokens

Extracted from the live preview DOM and `css/core-style.css`:

| Token | Value | Notes |
|-------|-------|-------|
| Brand / primary | `#ff084e` | Hot pink — header bar, nav background, karl-btn bg, scroll-to-top, checkout/cart buttons, form submit |
| Secondary / text | `#3a3a3a` | Dark gray — headings, paragraphs, secondary buttons |
| Link color | `#000000` | Default anchor color |
| Section alt bg | `#f4f6f8` | Light gray used on some sections |
| Divider | `#ddd` | Horizontal rule color |
| White overlay | `rgba(255,255,255,0.9)` | `.background-overlay-white` |
| Dark overlay | `rgba(0,0,0,0.5)` | `.background-overlay` on hero images |
| Font family | `'Open Sans', sans-serif` | Weights 300, 400, 600, 700, 800 |
| Button radius | `2px` | `.karl-btn` and most interactive elements |
| Scroll-to-top radius | `0` | Square |

## Page Sections (DOM order)

1. **Top Header Bar** — pink `#ff084e` background; logo left, cart icon with badge + "Your Bag $20" right, hamburger menu icon.
2. **Main Header / Navigation** — social icons (Pinterest, Facebook, Twitter, LinkedIn) left, centered nav links (Home, Pages dropdown, Dresses, Shoes with "hot" badge, Contact), help line phone right.
3. **Top Discount Bar** — 3-column row: "Free Shipping & Returns / BUY NOW", "20% Discount for all dresses / USE CODE: Colorlib", "20% Discount for students / USE CODE: Colorlib".
4. **Welcome Hero Slider** — Full-width carousel (owl-carousel), 800px height, background images with dark overlay, slide text: subtitle ("* Only today we offer free shipping"), headline ("Fashion Trends" / "Summer Collection" / "Women Fashion"), CTA button "Shop Now" / "Check Collection".
5. **Top Categories** — 2-column split with background images + overlay, left: "On Accessories / Sale 30% / SHOP NOW", right: "Designer bags / SHOP NOW".
6. **New Arrivals Product Grid** — Section heading "New Arrivals", filter tabs (ALL / WOMAN / MAN / ACCESSORIES / SHOES / KIDS), 3-column product grid (6 products), each card: product image, quick-view icon overlay, price, description, "ADD TO CART" link.
7. **Offer / Featured Product** — Full-width 700px height background image, right-aligned content: "White t-shirt [Hot]" headline, "Free shipping until 25 Dec 2017" subtext, crossed-out original price + sale price, "Shop Now" CTA.
8. **Testimonials** — Carousel with large quote marks, testimonial text, author thumbnail + name + location.
9. **Footer** — 4-column layout: logo + copyright, nav links (About/Blog/Faq/Returns/Contact), account links (My Account/Shipping/Our Policies/Affiliates), newsletter subscription form (email input + Subscribe button). Bottom: social icons (Pinterest, Facebook, Twitter, LinkedIn). Footer background `#ff084e`.

## Gherkin Scenarios

### Header

```gherkin
Scenario: Top header bar displays logo and cart
  Given the user visits the homepage
  Then the top header bar shows the brand logo on the left
  And the cart icon with badge and total price is visible on the right
  And the hamburger menu icon is present

Scenario: Navigation shows all primary links
  Given the user visits the homepage
  Then the navigation bar displays Home, Pages, Dresses, Shoes, and Contact links
  And the Shoes link has a "hot" badge
  And the Pages link opens a dropdown with Home, Shop, Product Details, Cart, Checkout
  And social media icons (Pinterest, Facebook, Twitter, LinkedIn) are visible on the left
  And the help line phone number is visible on the right
```

### Discount Bar

```gherkin
Scenario: Three-column discount bar is visible
  Given the user visits the homepage
  Then a three-column promotional bar is displayed below the header
  And the first column shows "Free Shipping & Returns" with "BUY NOW" link
  And the second column shows "20% Discount for all dresses" with promo code
  And the third column shows "20% Discount for students" with promo code
```

### Hero Slider

```gherkin
Scenario: Hero slider displays with background images and CTAs
  Given the user visits the homepage
  Then a full-width hero carousel is displayed at 800px height
  And each slide has a dark overlay on the background image
  And each slide shows a subtitle about free shipping
  And each slide shows a headline (Fashion Trends / Summer Collection / Women Fashion)
  And each slide has a CTA button ("Shop Now" or "Check Collection")

Scenario: Hero slider auto-plays or can be navigated
  Given the hero slider is visible
  Then the slides rotate automatically or can be navigated
```

### Top Categories

```gherkin
Scenario: Two-column category promo section
  Given the user visits the homepage
  Then two side-by-side category cards are displayed
  And the left card shows "On Accessories" with "Sale 30%" and "SHOP NOW"
  And the right card shows "Designer bags" with "SHOP NOW"
  And each card has a background image with overlay
```

### New Arrivals

```gherkin
Scenario: Product grid with filter tabs
  Given the user visits the homepage
  Then the "New Arrivals" section heading is displayed
  And filter tabs are shown: ALL, WOMAN, MAN, ACCESSORIES, SHOES, KIDS
  And clicking a filter tab shows only products in that category
  And the ALL tab is active by default

Scenario: Product cards display correctly
  Given the New Arrivals section is visible
  Then 6 product cards are displayed in a 3-column grid
  And each card shows a product image, price ($39.90), and description
  And each card has an "ADD TO CART" link
  And hovering a card reveals a quick-view icon overlay
```

### Offer / Featured Product

```gherkin
Scenario: Featured product promo section
  Given the user visits the homepage
  Then a full-width promotional section with background image is displayed
  And it shows "White t-shirt" with a "Hot" badge
  And it displays a crossed-out original price ($25.90) and sale price ($15.90)
  And a "Shop Now" CTA button is present
```

### Testimonials

```gherkin
Scenario: Testimonials carousel
  Given the user visits the homepage
  Then a "Testimonials" section heading is displayed
  And testimonials rotate in a carousel
  And each testimonial shows a large quote mark, testimonial text, author thumbnail, name, and location
```

### Footer

```gherkin
Scenario: Footer layout with newsletter and social
  Given the user visits the homepage
  Then the footer displays the brand logo and copyright
  And navigation links (About, Blog, Faq, Returns, Contact) are shown
  And account links (My Account, Shipping, Our Policies, Affiliates) are shown
  And a newsletter subscription form with email input and Subscribe button is present
  And social media icons (Pinterest, Facebook, Twitter, LinkedIn) are displayed at the bottom
  And the footer links to https://www.componentdock.com/ as "Component Dock"
```

### Responsive Behavior

```gherkin
Scenario: Mobile navigation toggle
  Given the user views the page on a mobile viewport
  Then the hamburger menu icon is visible
  And clicking it opens the navigation menu

Scenario: Product grid adapts to viewport
  Given the user views the New Arrivals on mobile
  Then product cards stack in a single column
```

## Verification Checklist

- [ ] Section order matches DOM: Header → Discount Bar → Hero Slider → Categories → New Arrivals → Offer → Testimonials → Footer
- [ ] Brand color `#ff084e` used consistently on header, buttons, footer
- [ ] Font family Open Sans (300–800) applied throughout
- [ ] Hero slider renders with dark overlay on background images
- [ ] Product grid filter tabs work (category filtering)
- [ ] Product cards show image, price, description, add-to-cart
- [ ] Quick-view icon appears on hover over product cards
- [ ] Offer section shows crossed-out original price + sale price
- [ ] Testimonials carousel rotates
- [ ] Footer newsletter form is functional (email input + submit)
- [ ] Footer links to Component Dock
- [ ] Responsive: mobile hamburger nav, stacked product grid
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Google Fonts loaded via link in index.html (Open Sans)
