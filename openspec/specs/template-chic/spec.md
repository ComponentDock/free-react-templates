# Template: Chic (Fashion E-Commerce)

## Purpose

Recreation of ColorLib **Malefashion** — a men's fashion e-commerce template with hero slider, promotional banners, product grid, categories, Instagram feed, and blog/latest trends section.

- **ColorLib source:** [Malefashion](https://colorlib.com/wp/template/malefashion/)
- **Preview URL:** https://preview.colorlib.com/theme/malefashion/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/malefashion-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `chic` (apps/chic, @free-react-templates/chic)

## Design Tokens

Extracted from the preview's CSS (style.css):

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand` | `#e53637` | Accent red — hero subtitle, footer heart, sale badges, links |
| `--color-dark` | `#111111` | Header top bar, site-btn bg, footer bg, headings, product labels |
| `--color-black` | `#000000` | Primary CTA button bg |
| `--color-text` | `#333333` | Body text |
| `--color-text-secondary` | `#707070` | Secondary text |
| `--color-text-muted` | `#b7b7b7` | Footer text, copyright |
| `--color-bg` | `#f5f5f5` | Page background |
| `--color-bg-warm` | `#f3f2ee` | Categories section background |
| `--color-white` | `#ffffff` | Cards, inputs, dropdown bg |
| `--font-family` | `"Nunito Sans", sans-serif` | Body + headings |
| `--btn-radius` | `0` | Sharp/square buttons (no border-radius) |
| `--btn-padding` | `14px 30px` | Standard button padding |
| `--btn-font-weight` | `700` | Bold buttons |
| `--btn-text-transform` | `uppercase` | All buttons |
| `--btn-letter-spacing` | `4px` | Primary CTA button |
| `--radius-pill` | `60px` | Rounded elements (some category items) |
| `--radius-circle` | `50%` | Circular elements |

### Visual Design Notes (from screenshot)

- **Overall:** Clean, minimal, masculine fashion e-commerce aesthetic. White/light gray background with dark (#111111) accents. Red (#e53637) used sparingly for emphasis.
- **Header:** Dark (#111111) top bar with white text (shipping info, sign in, FAQs, currency). White nav bar below with centered logo "Male fashion." and nav links. Right side: search, wishlist, cart with price.
- **Hero:** Full-width slider with large product photo (model in brown turtleneck), left-aligned text overlay. Subtitle "SUMMER COLLECTION" in red uppercase with letter-spacing. Large heading "Fall - Winter Collections 2030" in dark. Descriptive paragraph. Black "SHOP NOW →" button with arrow icon. Social media icons at bottom left.
- **Banners:** 3-column grid with product images and overlay text. "Clothing Collections 2030", "Accessories", "Shoes Spring 2030". Underlined "SHOP NOW" links.
- **Products:** 4-column grid of product cards with images, labels (New/Sale), product names, and prices. Tabbed filter: Best Sellers, New Arrivals, Hot Sales.
- **Categories:** Warm gray (#f3f2ee) background. Centered product image (bag) with countdown timer for sale. "Multi-pocket Chest Bag Black" heading, "$29.99" price, Days/Hours/Minutes/Seconds countdown.
- **Instagram:** 6-image grid (3×2) showing fashion photos. "Instagram" heading centered.
- **Latest Blog:** 3-column blog post cards with images, dates, and article titles: "What Curling Irons Are The Best Ones", "Eternity Bands Do Last Forever", "The Health Benefits Of Sunglasses".
- **Footer:** Dark (#111111) background. 4-column layout: About (logo + description), Shopping links, Information links, Newsletter signup. Copyright bar at bottom with heart icon in red.

## Gherkin Requirements

### Header
```gherkin
Feature: Chic Header
  Scenario: Top bar displays shipping info and account links
    Given the user is on the chic homepage
    Then a dark top bar shows "Free shipping, 30-day return or refund guarantee."
    And the top bar has "SIGN IN", "FAQS", and "USD" currency selector links

  Scenario: Main navigation displays correctly
    Given the user is on the chic homepage
    Then the nav bar shows the logo "Chic."
    And navigation links include "Home", "Shop", "Pages", "About Us", "Blog", "Contacts"
    And the nav bar shows search, wishlist, and cart icons with "$0.00"
```

### Hero Section
```gherkin
Feature: Chic Hero
  Scenario: Hero slider shows collection info
    Given the user views the hero section
    Then the subtitle reads "SUMMER COLLECTION" in red uppercase
    And the heading reads "Fall - Winter Collections 2030"
    And a description paragraph is displayed
    And a "SHOP NOW →" black button is visible

  Scenario: Hero has social media links
    Given the user views the hero section
    Then social media icons (Facebook, Twitter, Pinterest, Instagram) are shown below the CTA
```

### Banner Section
```gherkin
Feature: Chic Banners
  Scenario: Three promotional banners are displayed
    Given the user scrolls to the banner section
    Then three banners are shown side by side
    And banner 1 shows "Clothing Collections 2030" with "SHOP NOW" link
    And banner 2 shows "Accessories" with "SHOP NOW" link
    And banner 3 shows "Shoes Spring 2030" with "SHOP NOW" link
```

### Product Section
```gherkin
Feature: Chic Products
  Scenario: Product grid displays with tab filters
    Given the user scrolls to the product section
    Then tab filters show "Best Sellers", "New Arrivals", "Hot Sales"
    And "Best Sellers" is active by default
    And a grid of product cards is displayed

  Scenario: Product card shows details
    Given a product card is rendered
    Then it shows the product image
    And it shows the product name
    And it shows the price
    And it may show a "New" or "Sale" label

  Scenario: Tab switching works
    Given the user clicks "New Arrivals" tab
    Then the product grid updates to show new arrivals
    And "New Arrivals" tab becomes active
```

### Categories Section
```gherkin
Feature: Chic Categories
  Scenario: Featured product with countdown
    Given the user scrolls to the categories section
    Then the section has a warm gray (#f3f2ee) background
    And a featured product image is centered
    And the product name "Multi-pocket Chest Bag Black" is shown
    And the price "$29.99" is displayed
    And a countdown timer shows Days, Hours, Minutes, Seconds
```

### Instagram Section
```gherkin
Feature: Chic Instagram
  Scenario: Instagram image grid
    Given the user scrolls to the Instagram section
    Then the heading "Instagram" is displayed
    And a 3×2 grid of 6 fashion images is shown
    And images are clickable links
```

### Latest Blog Section
```gherkin
Feature: Chic Latest Blog
  Scenario: Blog posts are displayed
    Given the user scrolls to the latest section
    Then the heading "Fashion New Trends" is shown
    And 3 blog post cards are displayed in a row
    And each card shows an image, date, and article title
    And post titles are "What Curling Irons Are The Best Ones", "Eternity Bands Do Last Forever", "The Health Benefits Of Sunglasses"
```

### Footer
```gherkin
Feature: Chic Footer
  Scenario: Footer layout and content
    Given the user scrolls to the footer
    Then the footer has a dark (#111111) background
    And column 1 shows the logo and about text
    And column 2 shows Shopping links: "Clothing Store", "Trending Shoes", "Accessories", "Sale"
    And column 3 shows Information links: "Contact Us", "Payment Methods", "Delivery", "Return & Exchanges"
    And column 4 shows a Newsletter signup with email input and button
    And a copyright bar at the bottom reads "© 2026 All rights reserved" with Component Dock link

  Scenario: Footer newsletter form
    Given the user is in the newsletter section of the footer
    Then an email input field with placeholder text is shown
    And a submit button is positioned to the right of the input
```

## Verification Checklist

- [ ] Header: dark top bar + white nav bar with logo and navigation
- [ ] Hero: slider with subtitle, heading, description, CTA button, social icons
- [ ] Banners: 3-column promotional grid with overlay text
- [ ] Products: tabbed grid (Best Sellers / New Arrivals / Hot Sales) with card components
- [ ] Categories: warm gray background, featured product with countdown timer
- [ ] Instagram: 3×2 image grid with heading
- [ ] Latest Blog: 3-column blog post cards
- [ ] Footer: dark bg, 4-column layout, newsletter form, copyright with Component Dock
- [ ] Design tokens: #e53637 accent, #111111 dark, Nunito Sans font, sharp buttons
- [ ] Responsive: mobile-friendly layout (hero stacks, banners stack, products 2-col)
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
