# Spec: Cartique — E-commerce Fashion Store Template

> Recreation of ColorLib "Persuit" (https://colorlib.com/wp/template/persuit/)
> Preview: https://preview.colorlib.com/theme/persuit/

## Design tokens (extracted from preview CSS)

| Token             | Value                                          | Usage                                                |
| ----------------- | ---------------------------------------------- | ---------------------------------------------------- |
| Brand / accent    | `#d91522` (red)                                | CTA buttons, sale badges, active states, price highlight |
| Dark navy         | `#0b1033` (deep navy)                          | Text headings, dark sections                          |
| Text primary      | `#29263a`                                      | Headings in slider                                   |
| Text body         | `#666666`                                      | Body text, descriptions                              |
| Text muted        | `#999999`                                      | Secondary text, dates                                |
| Surface           | `#ffffff`                                      | Page background                                      |
| Surface alt       | `#f3f3f3`                                      | Footer background, alternate sections                |
| Border / divider  | `#e5e5e5`                                      | Card borders, dividers                               |
| Gold accent       | `#efb504`                                      | Rare decorative accent                               |
| Font — headings   | `"Montserrat"`, sans-serif                     | H1–H6, nav links, slider text                        |
| Font — body       | `"Poppins"`, sans-serif                        | Paragraphs, spans, product text                       |
| Font — display    | `"Playfair Display"`, serif                    | Decorative elements (if used)                        |
| Font — alt        | `"Lato"`, sans-serif                           | Supplementary text                                   |
| Button shape      | `border-radius: 0px` (square corners)          | All CTA buttons (`.checkout_btn`, `.add_btn`)         |
| CTA button bg     | `#d91522` (red)                                | "Shop Now", "read more" buttons                      |
| CTA button text   | `#ffffff` (white)                              | Button labels                                        |
| Sale badge bg     | `#d91522` (red)                                | "Sale" badges on promo cards                         |
| Discount badge bg | `#d91522` (red)                                | "-10%" badges                                        |
| New badge bg      | `#d91522` (red)                                | "New" badges on product cards                        |

## Section order (matching original)

1. **Top Header** — Language/currency selector, search bar (input + icon button), phone number + email links centered with logo, social icons (FB/TW/Pinterest/IG/YT), user icon + cart icon + currency dropdown. Light background.
2. **Navbar** — Logo left, "Shop by Category" dropdown, nav links (Home dropdown with 6 variants, Pages dropdown with 6 items, Shop mega menu with columns). Sticky header. White/light background.
3. **Hero Slider** — Full-width revolution slider (simplified to static/animated hero). Large background image, right-aligned: "2017" decorative text, "Best Summer Collection" headline, "read more" CTA button. Dark overlay on image.
4. **Feature Promos** — 3-column asymmetric layout (5+4+3 grid): 3 promo cards with product images, hover overlay showing "Best Summer Collection" heading + "Shop Now" CTA. "Sale" and "10% off" badges. Use picsum placeholders.
5. **Latest Products** — "Our Latest Product" heading. Carousel of product cards in pairs (8 products total): product image, compare icon, "Add To Cart" button, wishlist icon, product name, price (some with strikethrough original + sale price).
6. **Big Feature Promos** — 2-column: 2 large promo cards side by side, each with image + hover overlay (same "Best Summer Collection" + "Shop Now" pattern). Use picsum placeholders.
7. **Product Categories** — 3-column listing (Men / Women / Accessories): each column has a category heading, 6 subcategory links (Down Jackets, Hoodies, Suits, Jeans, Casual Pants, Sunglass), and a category product image.
8. **Featured Products** — Sidebar (3-col) with "Featured Products" heading + 4 small product items (image + name + price). Main area (9-col) with filter tabs (men's, Woman, Shoes, Bags) + product carousel with badges (Sale/New/-10%).
9. **Blog** — "From The Blog" heading. 3-column cards: blog image, category tag ("fashion"), excerpt text, date.
10. **Footer** — Dark navy/gray background. 5 columns: About widget (logo + description + social icons), Information links, Customer Service links, Extras links, My Account links. Copyright bar at bottom linking Component Dock.

## Scenarios

### Gherkin

```gherkin
Feature: Cartique template renders all sections

  Scenario: Page loads with correct title
    Given the user visits the Cartique page
    Then the document title is "Cartique — Fashion Store"

  Scenario: Top header is visible
    Given the user visits the Cartique page
    Then the top header area is displayed
    And phone and email contact links are visible

  Scenario: Navbar is visible with all links
    Given the user visits the Cartique page
    Then the navigation bar is visible
    And navigation links include Home, Pages, Shop

  Scenario: Hero section shows headline and CTA
    Given the user visits the Cartique page
    Then the hero section displays a headline
    And a "read more" CTA button is visible

  Scenario: Feature promo cards are displayed
    Given the user visits the Cartique page
    Then 3 feature promo cards are visible

  Scenario: Latest products section shows products
    Given the user visits the Cartique page
    Then the "Our Latest Product" heading is visible
    And product cards with prices are displayed

  Scenario: Big feature promo cards are displayed
    Given the user visits the Cartique page
    Then 2 large promo cards are visible

  Scenario: Product categories are listed
    Given the user visits the Cartique page
    Then 3 category columns are visible (Men, Women, Accessories)
    And each category has subcategory links

  Scenario: Featured products section with filters
    Given the user visits the Cartique page
    Then the "Featured Products" heading is visible
    And filter tabs (men's, Woman, Shoes, Bags) are displayed

  Scenario: Blog section shows 3 posts
    Given the user visits the Cartique page
    Then 3 blog post cards are displayed with category tags

  Scenario: Footer has Component Dock link
    Given the user visits the Cartique page
    Then the footer links to https://www.componentdock.com/

  Scenario: Footer shows multiple info columns
    Given the user visits the Cartique page
    Then Information, Customer Service, Extras, and My Account columns are visible

  Scenario: Mobile menu toggle
    Given the user visits the Cartique page
    When the user clicks the mobile menu toggle
    Then the mobile menu becomes visible
    When the user clicks the mobile menu toggle again
    Then the mobile menu is hidden
```

## Verification checklist

- [ ] All 10 sections render in the correct order
- [ ] Brand color `#d91522` is used for CTAs, badges, and accent elements
- [ ] Font families: Montserrat (headings), Poppins (body) applied via Tailwind theme
- [ ] Buttons are square-cornered (no border-radius)
- [ ] Product cards show image, action icons, name, and price
- [ ] Filter tabs in Featured Products are interactive
- [ ] Footer contains Component Dock link (`https://www.componentdock.com/`)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] All placeholder images use `https://picsum.photos/seed/cartique-<n>/<w>/<h>`
- [ ] 100% test coverage on all component files
- [ ] `public/CNAME` contains `cartique.free.componentdock.com`
- [ ] `package.json` homepage is `https://cartique.free.componentdock.com`
