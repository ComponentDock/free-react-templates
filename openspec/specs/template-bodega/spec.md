# Template: Bodega (E-Commerce / Fashion Store)

## Purpose

Recreation of the ColorLib **Store** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** [ColorLib Store](https://colorlib.com/wp/template/store/)
- **Preview:** https://preview.colorlib.com/theme/store/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/store-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`style.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand color | `#FFC300` (golden yellow) | Shop icons, subscribe section background, accent |
| Secondary accent | `#DD3E3E` (red) | Sale badges, price highlights |
| Orange accent | `#EC610A` | Featured product overlays |
| Green accent | `#4A772F` | Availability/success indicators |
| Teal accent | `#0E9577` | Accent elements |
| Body text | `#595959` | Paragraph text |
| Heading text | `#333333` | Headings |
| Muted text | `#999999` | Secondary/muted copy |
| Background light | `#fafafa` | Testimonial section (`.colorlib-light-grey`) |
| Background white | `#fff` | Hero, shop, blog sections |
| Subscribe background | `#FFC300` | Newsletter CTA bar |
| Font family | `Roboto, Arial, sans-serif` | All text |
| Button radius | `0` (square/sharp) | All buttons — no border-radius |
| Button style | Uppercase, letter-spacing: 2px | CTA buttons |
| Card radius | `4px` | Product cards |
| Avatar radius | `50%` | Testimonial avatars |
| Hero height | `650px` | Full-width slider |

## Section Structure (in order)

1. **Navbar** — Logo "Bodega" left, right-aligned menu: Home, Shop (dropdown: Product Detail, Shipping Cart, Checkout, Order Complete, Wishlist), Blog, About, Contact, Cart icon with count
2. **Hero Slider** — Full-width flexslider, 3 slides with background images + overlay:
   - Slide 1: "Men's Jeans Collection" + Shop Now button
   - Slide 2: "Huge Sale 45% off" + Shop Now button
   - Slide 3: "New Arrival up to 30% off" + Shop Now button
3. **Featured Products** — 2×2 grid of product category cards:
   - "Fashion for men" (large left)
   - "New Arrival Dress" (top right)
   - "Sale 20% off" (top right)
   - "Shoes for men" (bottom full width)
   - Each card: background image + dark overlay + white text heading
4. **Countdown/Sale Banner** — "45 Sale" prominent number + "Just hurry up limited offer!" + countdown-style display
5. **New Arrival Shop** — Product grid (4 columns): heading "New Arrival" with underline, product cards each with image, name, price, add-to-cart button
6. **Testimonials** — Light grey (#fafafa) background, heading "Our Satisfied Customer says", owl-carousel with testimonial cards: avatar (50% radius), name, star rating, quote text
7. **Recent Blog** — 3-column blog cards: blog image, date overlay, title, short excerpt
8. **Newsletter Subscribe** — Golden yellow (#FFC300) background, "Sign Up for a Newsletter" heading with paper-plane icon, email input + subscribe button
9. **Footer** — 5-column layout:
   - Col 1: "About Store" — logo, description, social icons
   - Col 2: "Customer Care" — links (Contact, Returns/Exchange, Gift Voucher, Wishlist, Special)
   - Col 3: "Information" — links (Customer Services, Site maps, About us, Delivery Information, Privacy Policy)
   - Col 4: "News" — recent posts list
   - Col 5: "Contact Information" — address, phone, email
   - Copyright bar at bottom: "© 2024 All rights reserved | Made with Component Dock"

## Gherkin Scenarios

### Navbar
```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user visits the homepage
  Then the navbar shows the "Bodega" logo on the left
  And the navigation links are: Home, Shop, Blog, About, Contact
  And a cart icon with item count is visible

Scenario: Shop dropdown shows sub-pages
  When the user hovers over or clicks "Shop"
  Then a dropdown appears with: Product Detail, Shipping Cart, Checkout, Order Complete, Wishlist
```

### Hero Slider
```gherkin
Scenario: Hero slider displays 3 promotional slides
  Given the user is on the homepage
  Then a full-width hero slider is visible
  And slide 1 shows "Men's Jeans Collection" with a Shop Now button
  And slide 2 shows "Huge Sale 45% off" with a Shop Now button
  And slide 3 shows "New Arrival up to 30% off" with a Shop Now button

Scenario: Slides auto-rotate
  Given the hero slider is displayed
  When 5 seconds pass without user interaction
  Then the slider advances to the next slide
```

### Featured Products
```gherkin
Scenario: Featured products grid shows 4 category cards
  Given the user scrolls to the featured products section
  Then a 2×2 grid of product category cards is visible
  And card 1 shows "Fashion for men"
  And card 2 shows "New Arrival Dress"
  And card 3 shows "Sale 20% off"
  And card 4 shows "Shoes for men"

Scenario: Featured cards have background images with overlay
  Given the featured products section is visible
  Then each card has a background image
  And each card has a dark semi-transparent overlay
  And text on each card is white
```

### Countdown/Sale Banner
```gherkin
Scenario: Sale banner displays countdown
  Given the user scrolls past the featured products
  Then a promotional banner shows "45 Sale" prominently
  And the text "Just hurry up limited offer!" is displayed
```

### Shop / New Arrivals
```gherkin
Scenario: Product grid shows new arrival items
  Given the user scrolls to the shop section
  Then a heading "New Arrival" with a yellow underline is visible
  And a grid of product cards is displayed
  And each product card shows an image, product name, price, and add-to-cart button

Scenario: Add to cart button interaction
  Given a product card is displayed
  When the user clicks the add-to-cart button
  Then the cart count increments by 1
```

### Testimonials
```gherkin
Scenario: Testimonials section displays customer reviews
  Given the user scrolls to the testimonials section
  Then the section has a light grey (#fafafa) background
  And the heading reads "Our Satisfied Customer says"
  And a carousel of testimonial cards is visible
  And each testimonial card shows an avatar, name, star rating, and quote

Scenario: Testimonials carousel navigates
  Given the testimonials carousel is displayed
  When the user clicks the next arrow
  Then the next testimonial card slides into view
```

### Recent Blog
```gherkin
Scenario: Blog section shows 3 recent posts
  Given the user scrolls to the blog section
  Then a heading "Recent Blog" is visible
  And 3 blog post cards are displayed in a row
  And each card shows an image, title, and excerpt
```

### Newsletter Subscribe
```gherkin
Scenario: Newsletter section has yellow background
  Given the user scrolls to the newsletter section
  Then the section background is golden yellow (#FFC300)
  And a heading "Sign Up for a Newsletter" with a paper-plane icon is visible
  And an email input field and subscribe button are present

Scenario: Email subscription form validation
  Given the newsletter section is displayed
  When the user clicks subscribe without entering an email
  Then a validation message appears or the form does not submit
```

### Footer
```gherkin
Scenario: Footer displays 5 columns of information
  Given the user scrolls to the footer
  Then 5 columns are visible: About Store, Customer Care, Information, News, Contact Information
  And the About Store column shows a logo, description, and social icons
  And the copyright bar shows "© 2024 All rights reserved | Made with Component Dock"

Scenario: Footer links are clickable
  Given the footer is displayed
  When the user clicks any footer link
  Then the link navigates to the appropriate section or page
```

## Verification Checklist

- [ ] Navbar renders with logo, all nav links, and cart icon
- [ ] Shop dropdown opens/closes on hover/click
- [ ] Hero slider shows 3 slides with background images, overlay, text, and CTA
- [ ] Hero slider auto-rotates and responds to manual navigation
- [ ] Featured products grid renders 4 cards with images and overlays
- [ ] Countdown/sale banner displays with correct text
- [ ] Product grid renders with image, name, price, and cart button per card
- [ ] Add-to-cart interaction updates cart count
- [ ] Testimonials section has correct background color (#fafafa)
- [ ] Testimonials carousel scrolls between reviews
- [ ] Blog section renders 3 post cards
- [ ] Newsletter section has #FFC300 background
- [ ] Newsletter email form validates input
- [ ] Footer renders 5 columns with correct content
- [ ] Footer copyright links to Component Dock
- [ ] All text uses Roboto font
- [ ] All buttons are square (border-radius: 0) with uppercase text
- [ ] Responsive layout works on mobile (single column)
- [ ] Accessibility: semantic HTML, ARIA labels, keyboard navigation
- [ ] No ColorLib references in app code (provenance in spec only)
