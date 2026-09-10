# Template: ShopLane (E-Commerce)

## Purpose

Recreation of ColorLib **Coloshop** — a Bootstrap 4 e-commerce template with product listings, category banners, deal countdown, and blog section.

- **Source:** https://colorlib.com/wp/template/coloshop/
- **Preview:** https://preview.colorlib.com/theme/coloshop/
- **New name:** `shoplane` (apps/shoplane, @free-react-templates/shoplane)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`styles/main_styles.css`) and DOM.

| Token              | Value                    | Usage                                              |
| ------------------ | ------------------------ | -------------------------------------------------- |
| Brand primary      | `#fe4c50` (coral red)   | Buttons, icon accents, logo accent, hover feedback |
| Brand hover        | `#FE7C7F` (light coral) | Button hover state                                 |
| Heading text       | `#1e1e27` (near-black)  | h2 section titles, logo text                       |
| Body text          | `#51545f` (dark gray)   | Paragraphs, footer links                           |
| Muted text         | `#b5aec4` (lavender)    | Secondary text, product prices                     |
| White              | `#FFFFFF`               | Page background, card backgrounds                  |
| Light background   | `#f2f2f2`               | Newsletter section                                 |
| Benefit background | `#f3f3f3`               | Benefit icons row                                  |
| Font family        | `"Poppins", sans-serif` | All text (weights 400, 500, 600, 700, 900)        |
| Button shape       | `border-radius: 3px`    | Primary buttons (slightly rounded)                 |
| Button height      | `40px`                  | Standard button height                             |
| Sale bubble        | `#51a042` (green)       | "Sale" badge on products                           |
| New bubble         | `#fe4c50` (red)         | "New" badge on products                            |
| Font import        | Google Fonts Poppins    | `@import url(...)` in CSS                         |

## Sections (in order)

1. **Top Nav** — Thin bar with "free shipping on all u.s orders over $50" (left) + currency selector (USD) + language selector (English) + account link (right)
2. **Main Nav / Header** — Logo "colo" + "shop" (accent span), nav links (Home, Shop, Promotion, Pages, Blog, Contact), user icons (search, user, cart with badge count), hamburger for mobile
3. **Category Banners** — 3 equal-width image banners in a row: Women's, Accessories, Men's — each with background image and centered category label link
4. **New Arrivals** — Centered heading "New Arrivals", filter tabs (All, Women's, Accessories, Men's), 4-column product grid with product cards (image, name, price, optional sale/new bubbles)
5. **Deal of the Week** — Split layout: product image (left 6/12), deal content (right 6/12) with heading "Deal Of The Week", countdown timer (days, hours, minutes, seconds), "Shop Now" red button
6. **Best Sellers** — Centered heading "Best Sellers", product carousel/grid with navigation arrows
7. **Benefits Row** — 4 equal columns on #f3f3f3 background with white borders: Free Shipping, Cash on Delivery, 45 Days Return, Opening All Week — each with red icon + uppercase title
8. **Latest Blogs** — Centered heading "Latest Blogs", 3 blog post cards in a row (background image, date badge overlay, title link)
9. **Newsletter** — Light gray (#f2f2f2) background, heading "Newsletter" + subtitle text (left), email input + "Subscribe" button (right)
10. **Footer** — Nav links (Blog, FAQs, Contact us) + social icons (Facebook, Twitter, Instagram, Skype, Pinterest) + copyright text with heart icon

## Gherkin Requirements

### Feature: ShopLane — E-Commerce Template

```gherkin
Feature: ShopLane template rendering

  Background:
    Given the ShopLane app is loaded at the root URL

  # --- Top Navigation ---
  Scenario: Top nav displays shipping banner and selectors
    Then a top navigation bar is visible at the top
    And "free shipping on all u.s orders over $50" text is displayed on the left
    And a currency selector showing "usd" is present on the right
    And a language selector showing "English" is present on the right

  # --- Main Navigation ---
  Scenario: Main nav displays logo and navigation links
    Then the logo "coloshop" is displayed with accent styling on "shop"
    And navigation links "home", "shop", "promotion", "pages", "blog", "contact" are present
    And search, user, and cart icons are displayed
    And the cart icon shows a badge with item count

  Scenario: Main nav shows hamburger on mobile
    When the viewport width is less than 992px
    Then a hamburger menu icon is visible
    And the navigation links are hidden

  # --- Category Banners ---
  Scenario: Three category banners are displayed
    Then three category banner cards are shown in a row
    And each banner has a background image and a category label link
    And the categories are "women's", "accessories", and "men's"

  # --- New Arrivals ---
  Scenario: New arrivals section shows product grid with filters
    Then the heading "New Arrivals" is displayed
    And filter tabs are shown: all, women's, accessories, men's
    And "all" tab is active by default
    And a 4-column product grid is displayed with product cards

  Scenario: Product cards display correctly
    Then each product card shows an image, name, and price
    And some products have a "sale" badge in green
    And some products have a "new" badge in red

  Scenario: Filter tabs change visible products
    When the user clicks the "women's" filter tab
    Then only women's products are shown in the grid
    And the "women's" tab becomes active

  # --- Deal of the Week ---
  Scenario: Deal section displays countdown and product
    Then the heading "Deal Of The Week" is displayed
    And a countdown timer shows days, hours, minutes, and seconds
    And a product image is displayed on the left
    And a "Shop Now" button is visible

  # --- Best Sellers ---
  Scenario: Best sellers section displays product carousel
    Then the heading "Best Sellers" is displayed
    And a product carousel/grid is shown with navigation arrows

  # --- Benefits ---
  Scenario: Benefits row displays four benefit icons
    Then four benefit items are shown in a row
    And the benefits are: Free Shipping, Cash on Delivery, 45 Days Return, Opening All Week
    And each benefit has a red icon and uppercase title
    And the benefits row has a light gray (#f3f3f3) background

  # --- Latest Blogs ---
  Scenario: Blog section displays three blog posts
    Then the heading "Latest Blogs" is displayed
    And three blog post cards are shown in a row
    And each card has a background image, date badge, and title

  # --- Newsletter ---
  Scenario: Newsletter section displays subscription form
    Then the heading "Newsletter" is displayed
    And a subtitle about 20% off first purchase is shown
    And an email input field is present
    And a "subscribe" button is displayed

  Scenario: Newsletter has light gray background
    Then the newsletter section background is light gray (#f2f2f2)

  # --- Footer ---
  Scenario: Footer displays nav links, social icons, and copyright
    Then footer navigation links "Blog", "FAQs", "Contact us" are present
    And social icon links are shown for Facebook, Twitter, Instagram, Skype, and Pinterest
    And copyright text is displayed
    And a "Component Dock" link is present in the footer

  # --- Responsive ---
  Scenario: Mobile viewport collapses navigation
    When the viewport width is less than 992px
    Then the hamburger menu icon is visible
    And the main navigation links are collapsed

  # --- Accessibility ---
  Scenario: Page has accessible landmarks
    Then the page has a navigation landmark for the header
    And the main content area is wrapped in a semantic element
    And the footer has a footer landmark
    And all form inputs have associated labels or placeholders
```

## Verification Checklist

- [ ] All 10 sections render in correct order
- [ ] Coral red (#fe4c50) used for buttons, icons, logo accent
- [ ] Poppins font family applied globally
- [ ] 3px border-radius on buttons (slightly rounded, not pill)
- [ ] Product cards show image, name, price, optional badges
- [ ] Deal countdown timer functions (days, hours, min, sec)
- [ ] Filter tabs switch product grid content
- [ ] Category banners have background images with overlaid labels
- [ ] Newsletter section has #f2f2f2 background
- [ ] Benefits row has #f3f3f3 background with white borders
- [ ] Responsive: hamburger at <992px
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] Spec validated with `npm run spec:validate`
