# Template: Floresco (Florist / E-commerce)

## Purpose

Recreation of the ColorLib "Florist" template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source slug:** `florist`
- **Source URL:** https://colorlib.com/wp/template/florist/
- **Preview URL:** https://preview.colorlib.com/theme/florist/
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Package:** `@free-react-templates/floresco`
- **Surge target:** `floresco.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) at https://preview.colorlib.com/theme/florist/

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#f45d96` | Buttons, links, accents, price text, section titles |
| Dark text | `#111111` | Headings, nav links, body text on light |
| Body text | `#444444` | Paragraphs, secondary text |
| Muted text | `#888888` | Testimonial author role, footer accents |
| White | `#FFFFFF` | On-brand button text, white button variant bg |
| Section bg light | `#f7f5fa` | Testimonial section background |
| Dropdown bg | `#111111` | Nav dropdown menu background |
| Heading font | `Libre Baskerville`, serif | All headings (h1-h6) |
| Body font | `Quicksand`, sans-serif | Body text, paragraphs, general UI |
| Decorative font | `Hello Santtiny` | Decorative/script accents (not essential; use a similar Google font alternative) |
| Button shape | `border-radius: 50px` (pill) | All primary/CTA buttons |
| Button bg | `#f45d96` | Primary CTA buttons |
| Button text | `#FFFFFF` | White text on primary buttons |
| Button padding | `14px 30px 12px` | Standard CTA button size |
| Button font | 15px, weight 700, uppercase, letter-spacing 2px | All button labels |
| White button | bg `#FFFFFF`, text `#f45d96` | Alternate CTA in call-to-action |
| Border button | transparent bg, 2px solid `#f45d96`, text `#f45d96` | Secondary actions |
| Site button | bg `#111111`, white text, uppercase, letter-spacing 4px | Footer newsletter submit |
| Section padding | 100px top/bottom (`.spad`) | Standard section spacing |
| Footer top border | `1px solid #eaeaea` | Footer option columns top/bottom |

## Section Structure (in page order)

### 1. Header (Navbar)
- Logo (left, image-based)
- Navigation: Home, About, Services, Shop, Pages (dropdown: Cart, Checkout, Wishlist, Portfolio, Shop Details, Blog Details), Blog, Contact
- Right side: search icon, heart icon with count `(05)`, bag icon with count `(01)`, price display `$65.0` in brand pink
- Mobile: hamburger → offcanvas menu with search, cart widget, logo, nav
- Sticky on scroll

### 2. Hero Slider
- Full-width background image slider (2 slides, owl-carousel style)
- Left-aligned content (col-lg-5): subtitle "Fresh Flower & Gift Shop", heading "Making beautiful flowers a part of your life.", CTA button "Shop now" (pill, brand pink)
- Content animates in (staggered fade-up)

### 3. Benefits (4-column)
- 4 equal columns: icon image + heading + short description
- Items: "100% Freshness", "Made by artist", "Own courier", "100% Freshness" (repeated)
- White background, centered icon + text

### 4. Categories (2x2 grid)
- 4 category cards with background images and overlay text
- Categories: "Fresh Flower (25 items)", "Succulent plants (162 items)", "Cactus plants (58 items)", "Furniture tree (25 items)"
- Background images with text overlay at bottom-left

### 5. About Section
- Left (col-lg-4): section title "About us" + "We provide all kinds of fresh flower services"
- Right (col-lg-7 offset-lg-1): paragraph about farmer-florist growing flowers
- Bottom row: left video thumbnail with play button overlay, right text block "Slow Flowers' Floral Insights" + "Dried flowers are having a renaissance" + paragraph + "Contact us" CTA

### 6. New Arrivals (Product Grid)
- Section title "Our flower" / "New Arrivals"
- Filter controls: All, Bouquet, Flower box, Flower shelf, Basket of flower, Gift combos
- Product grid (5 per row, 2 rows): each product has image, optional label (New/Sale/Out Of Stock), hover actions (search, cart, heart), product name, price `$27.50`, "Add to cart" link
- "View all products" link at bottom

### 7. Call to Action
- Full-width background image
- Left-aligned text (col-lg-6): subtitle "Custom flower", heading "Let our flowers make your party more perfect.", two CTAs: "Order Now" (brand pink pill) + "Contact Us" (white pill with pink text)

### 8. Latest Blog Posts
- Section title "Latest posts" / "Florist tricks"
- "View all posts" border button on right
- 3-column blog cards: image + category label + title + excerpt + date "MAY 22, 2020"
- Categories: "Trend news", "Tips & Idea", "DIY & Crafts"

### 9. Testimonials
- Light background `#f7f5fa`
- OwlCarousel slider, 2 slides
- Each: centered quote icon + italic quote text (Libre Baskerville serif, 23px) + author name + role
- Decorative background shapes (CSS pseudo-elements, not essential for React version)

### 10. Instagram Feed
- Full-width row of 5 equal images
- Hover overlay: white bg + Instagram icon + "Follow us @florist"
- 372px height per item

### 11. Footer
- Top row: logo | description text | social icons (Facebook, Twitter, Instagram, LinkedIn)
- Middle: Company links | Account links | Newsletter form (email input + Subscribe button)
- Copyright bar: "All rights reserved | Made with ❤ by Component Dock" (replaced from original Colorlib)

## Requirements (Gherkin)

### R1 — Navbar renders correctly
```
Scenario: Desktop navbar displays all navigation links
  Given the page loads on a desktop viewport
  Then the navbar shows links: Home, About, Services, Shop, Pages, Blog, Contact
  And the logo is visible on the left
  And search, heart (05), and bag (01) icons are visible on the right
  And the price "$65.0" is shown in brand pink

Scenario: Pages dropdown opens on hover
  Given the user hovers over "Pages"
  Then a dropdown appears with: Cart, Checkout, Wishlist, Portfolio, Shop Details, Blog Details
  And the dropdown has dark background (#111111) with white text

Scenario: Mobile hamburger opens offcanvas menu
  Given the page loads on a mobile viewport
  When the user taps the hamburger icon
  Then an offcanvas menu slides in from the right
  And it contains the nav links, search, cart widget, and logo
```

### R2 — Hero slider displays
```
Scenario: Hero shows slide content
  Given the hero slider is visible
  Then the subtitle "Fresh Flower & Gift Shop" is displayed
  And the heading "Making beautiful flowers a part of your life." is shown
  And a "Shop now" pill button in brand pink is visible

Scenario: Hero content animates in
  Given the page loads
  Then the hero text elements fade in with staggered timing
```

### R3 — Benefits section
```
Scenario: Benefits shows 4 items
  Given the benefits section is visible
  Then 4 benefit items are displayed in a row
  And each item has an icon, heading, and short description
```

### R4 — Categories grid
```
Scenario: Categories shows 4 cards
  Given the categories section is visible
  Then 4 category cards are displayed in a 2x2 grid
  And each card has a background image and overlay text
  And the categories are: Fresh Flower, Succulent plants, Cactus plants, Furniture tree
```

### R5 — About section
```
Scenario: About section renders with title and content
  Given the about section is visible
  Then the section title "About us" is shown
  And the heading "We provide all kinds of fresh flower services" is displayed
  And a video thumbnail with play button is visible
  And the "Contact us" CTA button is present
```

### R6 — Product grid with filters
```
Scenario: Products display with filter tabs
  Given the new arrivals section is visible
  Then filter tabs are shown: All, Bouquet, Flower box, Flower shelf, Basket of flower, Gift combos
  And "All" tab is active by default
  And product cards show image, name, price, and "Add to cart" link

Scenario: Product cards show labels
  Given products are displayed
  Then some products show "New" label
  And some products show "Sale" label
  And some products show "Out Of Stock" label
```

### R7 — Call to action section
```
Scenario: CTA shows with two buttons
  Given the call-to-action section is visible
  Then the heading "Let our flowers make your party more perfect." is displayed
  And an "Order Now" brand pink pill button is visible
  And a "Contact Us" white pill button with pink text is visible
  And a background image covers the section
```

### R8 — Blog posts section
```
Scenario: Latest posts shows 3 blog cards
  Given the blog section is visible
  Then 3 blog cards are displayed in a row
  And each card has an image, category label, title, excerpt, and date
  And a "View all posts" border button is visible
```

### R9 — Testimonials
```
Scenario: Testimonial slider renders
  Given the testimonial section is visible
  Then a testimonial card is displayed with centered text
  And the testimonial text is italic serif
  And the author name and role are shown below
  And the section has a light background (#f7f5fa)
```

### R10 — Instagram feed
```
Scenario: Instagram images display in a row
  Given the Instagram section is visible
  Then 5 images are displayed in a full-width row
  And hovering shows an overlay with Instagram icon and "Follow us @floresco"
```

### R11 — Footer
```
Scenario: Footer renders all sections
  Given the footer is visible
  Then the logo is displayed
  And a description paragraph is shown
  And social icons (Facebook, Twitter, Instagram, LinkedIn) are visible
  And Company links (About us, Services, Contact us) are listed
  And Account links (My cart, Wishlist, Login/Register) are listed
  And a newsletter form with email input and Subscribe button is present
  And the copyright bar reads "All rights reserved" with a link to componentdock.com

Scenario: Footer newsletter form
  Given the newsletter form is visible
  Then an email input with placeholder "Email" is shown
  And a "Subscribe" button is visible
```

### R12 — Responsive layout
```
Scenario: Mobile layout adjusts columns
  Given the page loads on a mobile viewport
  Then the navbar collapses to a hamburger menu
  And product grid shows fewer columns
  And the footer stacks vertically
```

## Verification Checklist

- [ ] All 11 sections render in correct page order
- [ ] Design tokens match: brand `#f45d96`, headings `Libre Baskerville`, body `Quicksand`
- [ ] Buttons are pill-shaped (`border-radius: 50px`)
- [ ] Product filter tabs switch product display (all/bouquet/flower-box etc.)
- [ ] Testimonials carousel cycles through slides
- [ ] Instagram hover overlay works
- [ ] Newsletter form has email input + submit button
- [ ] Footer links point to componentdock.com (not ColorLib)
- [ ] Mobile responsive: hamburger nav, stacked footer, adjusted grid
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] `npm run test:coverage` passes at 100%
- [ ] `npm run typecheck` passes
- [ ] `npm run lint` passes
- [ ] `npm run build` succeeds
