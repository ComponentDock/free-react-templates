# Template: Sartorial (E-Commerce / Fashion)

## Purpose

Recreation of ColorLib **Malefashion** template as a single-page React 19 +
Vite + Tailwind CSS 4 + TypeScript app. Malefashion is a men's fashion
e-commerce storefront with product listings, deal countdown, Instagram grid,
and blog teasers.

- **Source:** https://colorlib.com/wp/template/malefashion/
- **Preview:** https://preview.colorlib.com/theme/malefashion/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/malefashion-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **App name:** `sartorial` (package: `@free-react-templates/sartorial`)
- **Deploy:** `sartorial.free.componentdock.com`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`).

| Token | Value | Usage |
|---|---|---|
| Font family | `"Nunito Sans", sans-serif` | Global body + headings |
| Font weights used | 300 (light), 400 (regular), 600 (semi-bold), 700 (bold), 800, 900 | Various headings and buttons |
| Brand accent (red) | `#e53637` | Section title spans, active nav underline, product price hover, banner overlay accents |
| Dark / headings | `#111111` | All headings (h1–h6), header top bar bg, dropdown bg, nav links, product card bg |
| Body text | `#3d3d3d` | Paragraphs, body copy |
| Primary button bg | `#000000` | `.primary-btn` — uppercase, 13px, letter-spacing 4px, padding 14px 30px, sharp corners (no border-radius) |
| Secondary button bg | `#111111` | `.site-btn` — similar style |
| White | `#ffffff` | Page bg, button text, header text on dark bg, footer |
| Light section bg | `#f3f2ee` | Categories / deal-of-the-week section background |
| Grey / muted text | `#999999` | Off-canvas links, secondary text |
| Card hover grey | `#b7b7b7` | Product card hover states |
| Header top bar | `#111111` | Full-width dark bar with white text |
| Dropdown bg | `#111111` | Nav dropdown menus |
| Section spacing | `padding: 100px 0` | `.spad` utility — applied to most sections |
| Button shape | Sharp corners (no border-radius) | Both `.primary-btn` and `.site-btn` |
| Heading sizes | h1: 70px, h2: 36px, h3: 30px, h4: 24px, h5: 18px, h6: 16px | From CSS |
| Section title pattern | `<span>` in red `#e53637` uppercase 14px 700 weight 2px letter-spacing + `<h2>` in `#111111` 700 weight | Section headers throughout |
| Preloader | Black bg, spinner with `#f44336` red border | Loading state |

### Tailwind Theme Mapping

```css
@theme {
  --color-brand: #e53637;
  --color-dark: #111111;
  --color-body: #3d3d3d;
  --color-muted: #999999;
  --color-light-bg: #f3f2ee;
  --color-card-hover: #b7b7b7;
  --font-sans: "Nunito Sans", sans-serif;
}
```

## Section Structure (in page order)

1. **TopBar** — Dark bar (#111111): "Free shipping, 30-day return or refund guarantee." left; Sign in / FAQs links + USD currency dropdown right
2. **Header** — White bg, 3-column: logo (left), centered nav (Home, Shop, Pages dropdown, Blog, Contacts), right nav options (search, wishlist, cart icon + count, price)
3. **Hero** — Full-width image carousel (2 slides), each with: "Summer Collection" subtitle, "Fall - Winter Collections 2030" h2, paragraph copy, "Shop now" CTA button (black .primary-btn), social icons row
4. **Banner** — 3-column asymmetric grid: large banner "Clothing Collections 2030" (left offset), medium "Accessories" (right), full-width "Shoes Spring 2030" (bottom)
5. **Product** — Filter tabs (Best Sellers / New Arrivals / Hot Sales), 8 product cards in 4-col grid. Each card: image with hover overlay (heart, compare, search icons), optional label ("New" / "Sale"), product name, "+ Add To Cart" link, star rating, price, color swatches
6. **Categories** — Light bg (#f3f2ee), 3-column: text "Clothings Hot / Shoe Collection / Accessories" (left), sale product image with price sticker (center), "Deal Of The Week" countdown timer (right)
7. **Instagram** — 2-column: 6-image grid (left, 2 rows × 3), text block (right) with "Instagram" heading, lorem ipsum, "#Male_Fashion" hashtag
8. **LatestBlog** — Section title "Latest News / Fashion New Trends", 3-column blog cards. Each: image, date with calendar icon, title, "Read More" link
9. **Footer** — Dark bg, 4-column: logo + about text + payment icons (left), Shopping links, Shopping links (Contact/Payment/Delivery/Returns), Newsletter form (email input + submit)
10. **SearchModal** — Overlay search with text input + close button

## Gherkin Requirements

### Feature: Sartorial — Men's Fashion E-Commerce Storefront

  Scenario: TopBar displays shipping info and utility links
    Given the user visits the homepage
    Then a dark top bar shows "Free shipping, 30-day return or refund guarantee."
    And "Sign in" and "FAQs" links are visible on the right
    And a currency selector dropdown shows "Usd" by default

  Scenario: Header navigation with dropdown
    Given the user visits the homepage
    Then the header shows a logo on the left
    And a centered nav with links: Home, Shop, Pages, Blog, Contacts
    When the user hovers over "Pages"
    Then a dropdown appears with: About Us, Shop Details, Shopping Cart, Check Out, Blog Details
    And search, wishlist, and cart icons appear on the right

  Scenario: Hero carousel displays fashion content
    Given the user visits the homepage
    Then a full-width hero carousel is visible
    And each slide shows a subtitle "Summer Collection"
    And each slide shows a heading "Fall - Winter Collections 2030"
    And each slide has a "Shop now" call-to-action button
    And social media icons (Facebook, Twitter, Pinterest, Instagram) are shown below the CTA

  Scenario: Banner section shows three product categories
    Given the user scrolls to the banner section
    Then three banner cards are displayed in an asymmetric grid
    And the banners show: "Clothing Collections 2030", "Accessories", "Shoes Spring 2030"
    And each banner has a "Shop now" link

  Scenario: Product grid with filter tabs
    Given the user scrolls to the product section
    Then filter tabs show: "Best Sellers", "New Arrivals", "Hot Sales"
    And 8 product cards are displayed in a 4-column grid
    And each card shows: product image, name, star rating, price
    And each card has an "+ Add To Cart" link
    And each card has color swatch selectors
    And cards with "New" or "Sale" labels display those badges
    When the user clicks a filter tab
    Then the product grid filters to show only matching products

  Scenario: Categories deal-of-the-week section
    Given the user scrolls to the categories section
    Then a light background (#f3f2ee) section is displayed
    And left column shows "Clothings Hot / Shoe Collection / Accessories"
    And center shows a sale product image with "$29.99" price sticker
    And right column shows "Deal Of The Week" with a countdown timer
    And a "Shop now" button is below the countdown

  Scenario: Instagram photo grid
    Given the user scrolls to the Instagram section
    Then a 6-image grid is displayed in 2 rows of 3
    And a text block shows "Instagram" heading
    And a hashtag "#Male_Fashion" is displayed

  Scenario: Latest blog section
    Given the user scrolls to the blog section
    Then a section title shows "Latest News" / "Fashion New Trends"
    And 3 blog cards are displayed in a 3-column grid
    And each card shows: image, date, title, "Read More" link

  Scenario: Footer with newsletter signup
    Given the user scrolls to the footer
    Then a dark footer shows logo and about text on the left
    And two "Shopping" link columns are shown
    And a newsletter form with email input and submit button is on the right
    And the footer links to Component Dock

  Scenario: Search modal overlay
    Given the user clicks the search icon
    Then a full-screen overlay appears with a text input
    And a "+" close button is visible

## Verification Checklist

- [ ] All sections render in correct page order (TopBar → Header → Hero → Banner → Product → Categories → Instagram → Blog → Footer)
- [ ] Nunito Sans font loaded via Google Fonts / CDN
- [ ] Brand color #e53637 used on section title spans, active nav underlines
- [ ] Primary button uses black (#000000) bg, white text, uppercase, letter-spacing 4px, no border-radius
- [ ] Header top bar is dark (#111111) with white text
- [ ] Product grid has 4 columns, filter tabs work
- [ ] Countdown timer counts down (static placeholder or functional)
- [ ] Instagram section has 6-image grid layout
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Lucide-react icons replace Font Awesome icons
- [ ] Responsive: mobile menu, stacked layouts on small screens
- [ ] TypeScript strict mode, no `any` types
- [ ] All components have test files
