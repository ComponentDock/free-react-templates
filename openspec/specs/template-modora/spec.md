# Template: Modora (E-Commerce / Fashion Shop)

## Purpose

Recreation of the ColorLib **Coloshop** template
(https://colorlib.com/wp/template/coloshop/) as a React 19 + Vite + Tailwind 4
+ TypeScript template.

- **Preview URL:** https://preview.colorlib.com/theme/coloshop/
- **Source slug:** `coloshop`
- **Category:** E-Commerce / Fashion Shop
- **New name:** `modora`

## Design Tokens (extracted from preview CSS)

| Token             | Value                         | Usage                                  |
| ----------------- | ----------------------------- | -------------------------------------- |
| brand-primary     | `#FE7C7F`                     | Coral/salmon — button hover, accents   |
| brand-green       | `#51a042`                     | Green — "new" product badge            |
| dark-primary      | `#1e1e27`                     | Header bg, primary button bg           |
| dark-secondary    | `#232530`, `#282828`          | Header accents                         |
| light-bg          | `#f2f2f2`                     | Newsletter section bg                  |
| checkout-bg       | `#eceff6`                     | Checkout area                          |
| text-primary      | `#2b2b34`                     | Headings, product names                |
| text-secondary    | `#51545f`                     | Body text, descriptions                |
| text-muted        | `#777777`, `#989898`          | Meta text, prices                      |
| white             | `#FFFFFF`                     | Text on dark backgrounds               |
| font-family       | `Poppins, sans-serif`         | Google Font — all text                 |
| button-radius     | rounded (Bootstrap default)   | Primary buttons                        |
| button-height     | 46px                          | Newsletter submit button               |
| button-text       | uppercase, 14px, 600 weight   | CTA buttons                            |
| bubble-red        | `#db5246`                     | Sale/discount product bubble           |
| bubble-green      | `#51a042`                     | New product bubble                     |

## Section Structure (from preview DOM)

1. **TopNavigation** — free shipping bar + currency/language/account dropdowns
2. **Header** — logo ("modora"), nav links (home, shop, promotion, pages, blog, contact), cart icon
3. **HeroSlider** — full-width background image slider with overlay text + "Shop Now" CTA
4. **CategoryBanners** — 3-column row: women's, accessories, men's (background images with text overlay)
5. **NewArrivals** — section title + product grid (filter tabs: all/women/men/accessories) with product cards (image, name, price, optional bubble badges)
6. **DealOfTheWeek** — split layout: product image left, countdown timer + details right
7. **BestSellers** — section title + product carousel (owl-carousel style, horizontal scroll)
8. **Benefits** — 4 icon+text items: free shipping, money back guarantee, 24/7 support, gift cards
9. **LatestBlogs** — section title + 3 blog cards (image, date, author, title, excerpt)
10. **Newsletter** — split: heading + description left, email input + submit button right
11. **Footer** — nav links, social icons, copyright with Component Dock link

## Gherkin Requirements

### Feature: Modora — Fashion E-Commerce Template

```gherkin
Feature: Modora Template
  As a visitor to Modora
  I want a complete fashion e-commerce homepage
  So that I can browse products, deals, and shop

  # ── Top Navigation ────────────────────────────────

  Scenario: Top navigation bar displays
    Given I am on the Modora homepage
    Then I see a top bar with "free shipping on all u.s orders over $50"
    And I see a currency selector (USD default)
    And I see a language selector (English default)
    And I see a My Account link with Sign In and Register options

  # ── Header ────────────────────────────────────────

  Scenario: Header displays logo and navigation
    Given I am on the Modora homepage
    Then I see the logo "modora" in the header
    And I see navigation links: Home, Shop, Promotion, Pages, Blog, Contact
    And I see a cart icon with item count

  Scenario: Header is sticky on scroll
    Given I scroll down the Modora page
    Then the header remains fixed at the top of the viewport

  # ── Hero Slider ───────────────────────────────────

  Scenario: Hero slider displays with CTA
    Given I am on the Modora homepage
    Then I see a full-width hero slider with a background image
    And I see overlay text with a headline and subtext
    And I see a "Shop Now" call-to-action button

  # ── Category Banners ──────────────────────────────

  Scenario: Three category banners display
    Given I scroll to the category banner section
    Then I see 3 category banners in a row
    And the categories are "Women's", "Accessories", and "Men's"
    And each banner has a background image with text overlay

  # ── New Arrivals ──────────────────────────────────

  Scenario: New arrivals product grid displays
    Given I scroll to the New Arrivals section
    Then I see the section title "New Arrivals"
    And I see filter tabs for All, Women, Men, and Accessories
    And I see product cards in a grid layout
    And each product card shows an image, product name, and price

  Scenario: Product badges display correctly
    Given I view the New Arrivals grid
    Then discounted products show a red bubble with the discount amount
    And new products show a green "new" bubble

  # ── Deal of the Week ──────────────────────────────

  Scenario: Deal of the week section displays
    Given I scroll to the Deal of the Week section
    Then I see the title "Deal Of The Week"
    And I see a product image on the left
    And I see a countdown timer (days, hours, minutes, seconds)
    And I see product details with current and original price

  # ── Best Sellers ──────────────────────────────────

  Scenario: Best sellers carousel displays
    Given I scroll to the Best Sellers section
    Then I see the section title "Best Sellers"
    And I see a horizontal product carousel with multiple product cards

  # ── Benefits ──────────────────────────────────────

  Scenario: Benefits bar displays
    Given I scroll to the benefits section
    Then I see 4 benefit items in a row
    And the benefits are: Free Shipping, Money Back Guarantee, 24/7 Support, Gift Cards
    And each benefit has an icon and descriptive text

  # ── Latest Blogs ──────────────────────────────────

  Scenario: Latest blogs section displays
    Given I scroll to the Latest Blogs section
    Then I see the section title "Latest Blogs"
    And I see 3 blog cards in a row
    And each blog card shows an image, date, author, title, and excerpt

  # ── Newsletter ────────────────────────────────────

  Scenario: Newsletter section displays
    Given I scroll to the newsletter section
    Then I see a "Subscribe" heading and description text
    And I see an email input field
    And I see a "Subscribe" submit button

  # ── Footer ────────────────────────────────────────

  Scenario: Footer displays
    Given I scroll to the footer
    Then I see footer navigation links
    And I see social media icons
    And I see a copyright notice
    And I see a link to "Component Dock" (https://www.componentdock.com/)
```

## Verification Checklist

- [ ] Top navigation bar with shipping notice, currency, language, account dropdowns
- [ ] Header with logo, nav links, cart icon, sticky behavior
- [ ] Hero slider with background image and CTA
- [ ] 3 category banners (women's, accessories, men's)
- [ ] New Arrivals grid with filter tabs and product cards
- [ ] Product badges (red discount, green new)
- [ ] Deal of the Week with countdown timer
- [ ] Best Sellers horizontal carousel
- [ ] Benefits bar (4 items with icons)
- [ ] Latest Blogs (3 cards)
- [ ] Newsletter with email input
- [ ] Footer with nav, social icons, copyright, Component Dock link
- [ ] Design tokens: Poppins font, #FE7C7F coral brand, #1e1e27 dark, #f2f2f2 light bg
- [ ] Responsive layout (mobile-friendly)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All images use picsum.photos placeholder URLs
- [ ] Google Fonts loaded via index.html link tag
- [ ] Icons from lucide-react (replacing Font Awesome)
