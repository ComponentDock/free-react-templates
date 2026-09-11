# Template: Vendue (E-Commerce Fashion)

## Purpose

Recreation of the ColorLib "Dealers" template — a fashion e-commerce template
with product grids, promotional banner sections, a product carousel, and a
multi-column footer with newsletter subscribe.

- **Source:** https://colorlib.com/wp/template/dealers/
- **Preview:** https://preview.colorlib.com/theme/dealers/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `vendue` (French for "auction/sale" — evokes the fashion retail theme)

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#207dff` | Primary buttons, section heading underlines, links, hover states |
| `--color-black` | `#000000` | Secondary buttons (`.btn-black`), headings, nav text |
| `--color-bg-light` | `#f9f9f9` | Cover/banner section backgrounds |
| `--color-bg-card` | `#f4f5f9` | Product tag labels |
| `--color-sale-tag` | `#ffe5ae` | "Sale" badge background |
| `--color-heading` | `#25262a` | Section headings, product titles |
| `--color-body-text` | `#333333` | Body paragraph text |
| `--color-muted` | `#5c626e` | Secondary text |
| `--color-footer-text` | `#8c92a0` | Footer body text |
| `--font-primary` | `Rubik` (Google Fonts, weights 400, 700) | All text |
| `--border-radius-btn` | `0` (square, `rounded-0`) | All buttons |
| `--border-radius-tag` | `50%` | Sale badge (circular) |

## Sections (HTML structure order)

1. **Navbar** — White background, sticky. Logo left ("Vendue"), nav links center (Collection with dropdown [Men/Women/Children], Shop, Catalogs, Contact), icons right (search, heart/wishlist, shopping cart with count badge). Mobile hamburger toggle.
2. **Hero Banner** — Light gray `#f9f9f9` background. Left: product name "Madewell", subtitle "Summer Collection", price with strikethrough, two CTA buttons (outline-primary + primary). Right: transparent product image of a person/model. Full-width cover layout.
3. **Product Grid** — 2 rows × 3 columns (6 cards total). Each card: product image, product name, collection label, price. Some cards have a "Sale" badge (circular, warm yellow). No gap between cards (`no-gutters`). Cards are links.
4. **Banner Cover 1 ("Jacket")** — Light gray background. Left: large model image. Right: hashtag subtitle "#New Summer Collection 2019", title "Jacket", black CTA button "Shop Now".
5. **Collections Carousel** — "COLLECTIONS" heading centered. Owl carousel of product cards (same card style as grid). Horizontal scroll with multiple items visible.
6. **Banner Cover 2 ("New Denim Coat")** — Same layout as Banner Cover 1, different product. Left: model image. Right: subtitle, title "New Denim Coat", black CTA.
7. **Footer** — 4-column layout: (a) About Us text + email subscribe form, (b) Quick Links in 3 sub-columns (Sell online, Features, Shopping cart, Store builder / Mobile commerce, Dropshipping, Website development / Point of sale, Hardware, Software), (c) Contact Info (address, phone, email), (d) Copyright bar with heart icon.

## Gherkin requirements

### Feature: Navbar

```gherkin
Scenario: Navbar renders with logo and navigation links
  Given the page loads
  Then the navbar displays the "Vendue" logo
  And navigation links "Collection", "Shop", "Catalogs", "Contact" are visible

Scenario: Collection dropdown shows sub-items
  Given the navbar is visible
  When the user hovers over "Collection"
  Then a dropdown appears with "Men", "Women", "Children" items

Scenario: Navbar icons are present
  Given the navbar is visible
  Then a search icon is displayed
  And a wishlist/heart icon is displayed
  And a shopping cart icon with count badge is displayed

Scenario: Mobile hamburger toggle
  Given the viewport is mobile
  Then a hamburger menu toggle icon is displayed
```

### Feature: Hero Banner

```gherkin
Scenario: Hero banner displays featured product
  Given the page loads
  Then a hero section with light gray background is visible
  And the heading shows a product name
  And a subtitle describes the collection
  And a price with strikethrough original price is shown
  And two CTA buttons ("Shop Now") are displayed

Scenario: Hero banner has product image
  Given the hero section is visible
  Then a product/model image is displayed on the right side
```

### Feature: Product Grid

```gherkin
Scenario: Product grid displays 6 items in 2 rows
  Given the page loads
  Then 6 product cards are rendered in a 3-column grid

Scenario: Each product card shows essential info
  Given a product card is rendered
  Then it displays a product image
  And a product name
  And a collection label
  And a price (with optional strikethrough for sale items)

Scenario: Sale items show a badge
  Given a product is on sale
  Then a circular "Sale" badge with warm yellow background is shown

Scenario: Product cards are clickable
  Given a product card is rendered
  Then the entire card is wrapped in a link element
```

### Feature: Banner Covers

```gherkin
Scenario: Banner Cover 1 displays Jacket promotion
  Given the page loads
  Then a banner section with "Jacket" heading is visible
  And a hashtag subtitle "#New Summer Collection 2019" is shown
  And a "Shop Now" button with black background is displayed
  And a model image fills the opposite column

Scenario: Banner Cover 2 displays Denim Coat promotion
  Given the page loads
  Then a banner section with "New Denim Coat" heading is visible
  And a hashtag subtitle "#New Summer Collection 2019" is shown
  And a "Shop Now" button with black background is displayed
  And a model image fills the opposite column
```

### Feature: Collections Carousel

```gherkin
Scenario: Carousel section displays "Collections" heading
  Given the page loads
  Then a "COLLECTIONS" heading is visible

Scenario: Carousel shows product cards horizontally
  Given the carousel section is visible
  Then multiple product cards are displayed in a horizontal scrollable carousel
  And product cards use the same style as the product grid
```

### Feature: Footer

```gherkin
Scenario: Footer has About Us and Subscribe
  Given the page loads
  Then the footer displays an "About Us" section with descriptive text
  And an email subscribe form with input field and "Send" button

Scenario: Footer has Quick Links
  Given the footer is visible
  Then "Quick Links" are displayed in 3 columns
  And links include "Sell online", "Features", "Shopping cart", "Store builder", "Mobile commerce", "Dropshipping", "Website development", "Point of sale", "Hardware", "Software"

Scenario: Footer has Contact Info
  Given the footer is visible
  Then a "Contact Info" section displays address, phone, and email

Scenario: Footer copyright with Component Dock link
  Given the footer is visible
  Then a copyright notice is displayed
  And a link to "https://www.componentdock.com/" is present (branded as "Component Dock")
```

## Verification checklist

- [ ] Navbar: logo, nav links, dropdown, icons (search, heart, cart), mobile toggle
- [ ] Hero: background color `#f9f9f9`, product name, subtitle, price with strikethrough, two CTA buttons (outline + solid blue), product image right
- [ ] Product grid: 6 cards in 3-column layout, no gap, image + name + collection + price, sale badge on some items
- [ ] Banner Cover 1: gray bg, model image left, "Jacket" heading + subtitle + black button right
- [ ] Banner Cover 2: gray bg, model image left, "New Denim Coat" heading + subtitle + black button right
- [ ] Collections Carousel: centered heading, horizontal scrolling product cards
- [ ] Footer: 4-col layout, About Us + subscribe form, Quick Links (3 sub-cols), Contact Info, copyright with Component Dock link
- [ ] Design tokens: Rubik font, `#207dff` primary, `#000` black buttons, `#ffe5ae` sale tags, `#f9f9f9` bg, square buttons (`rounded-0`)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Images use `https://picsum.photos/seed/vendue-<n>/<w>/<h>` placeholders
