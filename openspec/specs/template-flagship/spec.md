# Template: Flagship (Fashion E-Commerce)

## Purpose

Recreation of ColorLib's **Dealers** template — a fashion e-commerce website with a clean white navbar, hero with featured product, product grid, promotional banners, product carousel, and multi-column footer.

- **Source slug:** `dealers`
- **ColorLib page:** https://colorlib.com/wp/template/dealers/
- **Preview URL:** https://preview.colorlib.com/theme/dealers/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/dealers-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and screenshot analysis:

### Colors

| Token              | Value     | Usage                                                                     |
| ------------------ | --------- | ------------------------------------------------------------------------- |
| `--color-primary`  | `#207dff` | Primary blue — links, hover states, section heading underline accent     |
| `--color-black`    | `#000000` | Primary buttons, headings, navbar links, selection highlight              |
| `--color-accent`   | `#ffe5ae` | Sale tag background (warm amber/yellow)                                   |
| `--color-heading`  | `#25262a` | Product titles, section headings                                          |
| `--color-body`     | `#5c626e` | Body copy, secondary text                                                 |
| `--color-muted`    | `#737b8a` | Muted/tertiary text, collection labels                                    |
| `--color-subtle`   | `#8c92a0` | Light muted text                                                          |
| `--color-border`   | `#edf0f5` | Light borders, product grid dividers                                      |
| `--color-bg`       | `#f9f9f9` | Navbar background, body default                                           |
| `--color-light-bg` | `#f4f5f9` | Alternate section backgrounds                                             |
| `--color-white`    | `#ffffff` | Primary background, product cards                                         |
| `--color-footer`   | `#25262a` | Footer background (dark)                                                  |

### Typography

- **Primary font:** `'Rubik', sans-serif` (Google Fonts / Cloudflare Fonts)
- **Icon font:** `icomoon` (search, heart, shopping bag, menu, close icons)
- **Headings:** bold weight (700), dark color `#25262a`
- **Body:** regular weight (400), line-height ~1.6
- **Navbar links:** uppercase, regular weight, black color
- **Product titles:** bold, sentence case
- **Prices:** bold, `#25262a`
- **Collection labels:** small, `#737b8a`
- **Section heading underline:** 2px solid `#207dff` centered below heading

### Buttons / CTAs

- **Primary button:** solid `#207dff` (blue), white text, square corners (`rounded-0`), uppercase, 43px height, padding `12px 30px`
- **Black button:** solid `#000`, white text, square corners, uppercase, padding `12px 30px`
- **Outline button:** transparent with blue border (`btn-outline-primary`), blue text, square corners, uppercase
- **All buttons:** `text-transform: uppercase`, transition `0.3s ease-in-out`
- **Hover:** darker shade, no box-shadow

### Section Backgrounds

- Navbar: white / `#f9f9f9`
- Hero: light gray bg (`#f4f5f9` or transparent with image)
- Product grid: white bg, products separated by `1px solid #eee` borders
- Promo banners: light bg with full-width model images
- Collections carousel: white bg
- Footer: dark (`#25262a`)

## Section Order (from live preview DOM)

1. **Navbar** — White background sticky navbar. Logo "Flagship" (text-based). Navigation links: Collection (with dropdown: Men, Women, Children, nested Sub Menu), Shop, Catalogs, Contact. Right-side icons: search (opens overlay), wishlist (heart), shopping bag with count badge "2". Mobile hamburger menu. Search overlay slides in with close button.
2. **Hero** — Split layout on light background. Left side: "Madewell" heading (h1), "Summer Collection" subtitle, price display ("1,499" bold + "$1,999" strikethrough), two CTA buttons (outline "Shop Now" + solid primary "Shop Now"). Right side: transparent product/person image. AOS fade-in animation.
3. **Product Grid** — 6 product cards in a 3-column, no-gutters grid. Each card: product image (full-width), title (h3), collection label ("Summer Collection"), price (some with original price strikethrough). Some cards have "Sale" badge (amber `#ffe5ae`). Products separated by thin borders.
4. **Promo Banner 1** — Full-width split layout with light background. Left side: model/person image (transparent PNG). Right side: "#New Summer Collection 2019" subtitle, "Jacket" heading (h1), black "Shop Now" button. AOS fade-in.
5. **Collections Carousel** — Centered "Collections" heading (uppercase). Owl carousel of product cards (same card design as product grid), horizontally scrollable.
6. **Promo Banner 2** — Full-width split layout (similar to Banner 1). Left side: model image. Right side: "#New Summer Collection 2019" subtitle, "New Denim Coat" heading, black "Shop Now" button. AOS fade-in.
7. **Footer** — Dark background (`#25262a`). 4-column layout:
   - Column 1: "About Us" paragraph + Subscribe form (email input + "Send" button)
   - Column 2 (wide): "Quick Links" in 3 sub-columns (Sell online, Features, Shopping cart, Store builder / Mobile commerce, Dropshipping, Website development / Point of sale, Hardware, Software)
   - Column 3: "Contact Info" — address, phone number, email
   - Bottom bar: Copyright text with Component Dock link

## Requirements

### Gherkin Scenarios

```gherkin
Feature: Flagship Template — Fashion E-Commerce

  Background:
    Given the user visits the Flagship homepage

  Scenario: Navbar displays correctly
    Then the logo "Flagship" is visible
    And navigation links "Collection", "Shop", "Catalogs", "Contact" are visible
    And a search icon, wishlist icon, and cart icon with badge are displayed
    And clicking the search icon opens a search overlay

  Scenario: Hero section displays featured product
    Then the heading "Madewell" is displayed
    And the subtitle "Summer Collection" is shown
    And the price "$1,499" with strikethrough "$1,999" is visible
    And two "Shop Now" buttons are displayed (outline and solid)

  Scenario: Product grid shows 6 products
    Then 6 product cards are displayed in a 3-column grid
    And each product card shows an image, title, collection name, and price
    And products marked "Sale" display an amber sale badge

  Scenario: Promo banners alternate layout
    Then two promotional banners are displayed
    And each banner shows a model image alongside heading text and a "Shop Now" button

  Scenario: Collections carousel is interactive
    Then a "Collections" heading is displayed
    And a horizontal product carousel is shown below it
    And the carousel is scrollable horizontally

  Scenario: Footer has 4 columns
    Then the footer has an "About Us" section with subscribe form
    And "Quick Links" are organized in 3 sub-columns
    And "Contact Info" shows address, phone, and email
    And the copyright bar links to Component Dock

  Scenario: Mobile responsive
    When the viewport is below 992px
    Then the navbar collapses to a hamburger menu
    And the product grid stacks to 2 columns
    And the hero section stacks vertically
```

## Verification Checklist

- [ ] Navbar: white bg, logo text, nav links with Collection dropdown, search overlay, icons with cart badge
- [ ] Hero: split layout, product name/price/buttons on left, image on right
- [ ] Product grid: 6 cards, 3-col no-gutters, borders between items, sale badges
- [ ] Promo banners: 2 banners with model images + heading + CTA
- [ ] Collections carousel: centered heading, horizontal scroll of product cards
- [ ] Footer: dark bg, 4 columns, subscribe form, quick links, contact info, copyright
- [ ] Design tokens: Rubik font, `#207dff` blue, `#000` black buttons, `#ffe5ae` sale tags, square button corners
- [ ] Responsive: hamburger nav, stacked grid on mobile
- [ ] No ColorLib references in app code — provenance only in spec + TEMPLATES.md
- [ ] Footer links to `https://www.componentdock.com/`
