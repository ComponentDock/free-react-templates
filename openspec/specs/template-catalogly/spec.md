# Template: Catalogly (E-commerce Shop)

## Purpose

Recreation of the ColorLib "ListAshop" template as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript application.

- **Source:** https://colorlib.com/wp/template/listashop/
- **Preview:** https://preview.colorlib.com/theme/listashop/
- **New name:** `catalogly` (app: `apps/catalogly`, package: `@free-react-templates/catalogly`)
- **Stack:** Vite, React 19, Tailwind CSS 4, TypeScript
- **Category:** E-commerce / Shop

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Brand color | `#c5322d` | Deep red — buttons, links, accents |
| Font family (headings) | `"Roboto", sans-serif` | weight 500 |
| Font family (body) | `"Roboto", sans-serif` | weight normal (400) |
| Font family (imported) | `"Poppins"` | 200–700, available but Roboto primary |
| Body text color | `#777777` | Medium gray |
| Heading text color | `#222222` | Near-black |
| Banner background | `#e8f0f2` | Light blue-gray |
| Timer section bg | `#e5ecee` | Light blue-gray |
| Footer background | `#e5ecee` | Same as timer section |
| CTA button bg | `#c5322d` | Red, white text, no border-radius (square) |
| CTA button hover | transparent bg, `#c5322d` text | Inverted on hover |
| Banner CTA button | white bg, `border-radius: 5px` | Rounded corners, dark text |
| Border/divider | `#eeeeee` | Light gray borders |
| Top menu bg | `#04091e` | Very dark navy/black |

## Section Structure (from preview DOM)

1. **Top Bar** — dark background (#04091e), email link "support@colorlib.com", "Welcome to Catalogue", social icons (Facebook, Twitter, Dribbble, Behance)
2. **Navbar** — white background, logo left, nav links (Home, Shop dropdown, Blog dropdown, Pages dropdown, Contact), cart icon + search icon right
3. **Home Banner** — full-width, light blue-gray bg (#e8f0f2), left column with heading "Georgia Helmet Collections!" + lorem ipsum + white rounded CTA button, right column with product image
4. **Hot Deals Feature** — two side-by-side image cards "Hot Deals of this Month" with "Shop Now" links
5. **Featured Products** — centered title "Featured Products", owl-carousel of product cards (image + heart/cart icons + product name + price)
6. **Timer / CTA Section** — light blue-gray bg (#e5ecee), centered heading with countdown timer display (days, hours, minutes, seconds)
7. **Latest Products** — carousel of latest products, same card style as featured
8. **Client Logos** — row of client/partner logos
9. **Most Products** — additional product grid/carousel
10. **Footer** — light blue-gray bg (#e5ecee), 4-column layout: About Us, Newsletter (email input + arrow submit), Instagram Feed (8 thumbnail images), Follow Us (social icons). Footer bottom: copyright with heart icon link

## Gherkin Requirements

### Navbar
```gherkin
Scenario: Navbar renders with logo and navigation links
  Given the user loads the Catalogly page
  Then the navbar displays a logo on the left
  And navigation links include "Home", "Shop", "Blog", "Pages", "Contact"
  And a cart icon and search icon appear on the right

Scenario: Shop dropdown shows sub-pages
  Given the user hovers over the "Shop" nav link
  Then a dropdown appears with "Shop Category", "Product Details", "Product Checkout", "Shopping Cart", "Confirmation"

Scenario: Blog dropdown shows sub-pages
  Given the user hovers over the "Blog" nav link
  Then a dropdown appears with "Blog", "Blog Details"
```

### Home Banner
```gherkin
Scenario: Banner displays heading and CTA
  Given the user loads the Catalogly page
  Then a banner section shows a heading "Georgia Helmet Collections!"
  And a descriptive paragraph below the heading
  And a white rounded CTA button "View Collection"
  And a product image occupies the right column
```

### Hot Deals
```gherkin
Scenario: Two hot deal cards render
  Given the user scrolls to the hot deals section
  Then two side-by-side cards display
  And each card shows a product image
  And each card has text "Hot Deals of this Month" and a "Shop Now" link
```

### Featured Products
```gherkin
Scenario: Featured products carousel renders
  Given the user scrolls to the featured products section
  Then a centered heading "Featured Products" appears
  And a subtitle "Who are in extremely love with eco friendly system."
  And a carousel of product cards is visible
  And each product card shows an image, heart icon, cart icon, product name, and price
```

### Timer Section
```gherkin
Scenario: Countdown timer displays time units
  Given the user scrolls to the timer section
  Then a light blue-gray background section appears
  And a countdown shows days, hours, minutes, seconds
  And a CTA button is present
```

### Latest Products
```gherkin
Scenario: Latest products section renders
  Given the user scrolls to the latest products section
  Then a carousel of product cards appears
  And each card follows the same layout as featured products
```

### Client Logos
```gherkin
Scenario: Client logos row renders
  Given the user scrolls to the client logos section
  Then a row of client/partner logo images is displayed
```

### Footer
```gherkin
Scenario: Footer renders four columns
  Given the user scrolls to the footer
  Then four columns appear: About Us, Newsletter, Instagram Feed, Follow Us
  And the Newsletter column has an email input and submit button
  And the Instagram Feed shows 8 thumbnail images
  And the Follow Us column shows social icons (Facebook, Twitter, Dribbble, Behance)
  And a footer bottom bar shows copyright text with a heart icon

Scenario: Newsletter form has email input
  Given the user is in the Newsletter footer column
  Then an email input with placeholder "Email Address" is present
  And a submit button with arrow icon is next to the input
```

## Verification Checklist

- [ ] Navbar renders with logo, nav links, dropdowns, cart/search icons
- [ ] Home banner shows heading, description, white CTA button, product image
- [ ] Hot deals section shows two side-by-side cards
- [ ] Featured products carousel renders with product cards
- [ ] Timer/CTA section has countdown display and button
- [ ] Latest products carousel renders
- [ ] Client logos row renders
- [ ] Footer has 4 columns: About, Newsletter, Instagram, Follow Us
- [ ] Newsletter email input and submit button work
- [ ] Footer bottom has copyright with heart icon
- [ ] Design tokens match: #c5322d brand, Roboto font, #e8f0f2/#e5ecee backgrounds
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tests pass at 100% coverage
