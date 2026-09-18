# Template: Pharmvault (Pharmacy / E-commerce)

## Purpose

Recreation of ColorLib **Pharmative** template.
- **Source slug:** `pharmative`
- **ColorLib URL:** https://colorlib.com/wp/template/pharmative/
- **Preview URL:** https://preview.colorlib.com/theme/pharmative/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/pharmative-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design Tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand color | `#75b239` (green) | Primary buttons, active nav, author name, dropdown border, form focus |
| Body background | `#efefef` | Page background |
| Body text | `#8c92a0` | Paragraphs, muted text |
| Dark text | `#25262a` / `#000` | Headings, nav links, logo |
| Navbar bg | `#fff` | White navbar |
| Footer bg | `bg-light` (Bootstrap `#f8f9fa`) | Footer section |
| Font | Nunito (400, 700) | All text |
| Button style | Uppercase, 2px border, px-5 py-3, transparent on hover | Primary CTAs |
| Testimonial author | `#75b239` | Author attribution |
| Testimonial img | 70px width, 40% border-radius | Avatar circles |
| Section pattern | White → gray → dark-overlay-on-image → white | Alternating sections |

## Section Structure (DOM order)

1. **Navbar** — Logo ("Pharm**a**ltive" style: "Pharma" bold + green, rest normal). Nav links: Home, Store, Products (dropdown with Supplements/Vitamins/Diet & Nutrition/Tea & Coffee), About, Contact. Right icons: search, shopping cart with badge.
2. **Hero Carousel** — Two slides with full-width background images and dark overlay. Centered heading + subtext + "Shop Now" green button. Slide 1: "Pharmative Opens 24 Hours". Slide 2: "New Medicine Everyday".
3. **Features** — 3-column row on white background. Each: icon (delivery, medicine, test tubes), title, description paragraph, "Learn more →" link. Columns: Free Delivery, New Medicine Everyday, Medicines Guaranteed.
4. **Products Carousel** — Gray (`bg-light`) section. "Pharmacy **Products**" heading. Owl-carousel of product cards: image, product name, price ($120.00), some with "Sale" badge. Repeating product items.
5. **CTA Banner** — Full-width dark overlay on hero image. Centered text: "Sign up for discount up to 55% OFF" + subtext + "Sign up" outlined-white button.
6. **Testimonials + Why Us** — Two-column split. Left: "Happy **Customers**" heading + testimonial carousel (avatar image, quote, author name in green). Right: "Why **Us**" heading + 3 numbered steps with text.
7. **Footer** — Three-column: About (text block), Navigation (Supplements, Vitamins, Diet & Nutrition, Tea & Coffee), Contact Info (address, phone, email). Copyright line with heart icon.

## Gherkin Requirements

### Feature: Navbar

Scenario: Logo renders with brand styling
  Given the user loads the page
  Then the logo text "Pharmvault" is visible
  And the first part of the logo ("Pharm") is bold and green
  And the rest of the logo text is dark/black

Scenario: Navigation links are present
  Given the user loads the page
  Then the following nav links are visible: Home, Store, Products, About, Contact

Scenario: Products dropdown opens on hover
  Given the user hovers over the "Products" nav link
  Then a dropdown appears with: Supplements, Vitamins, Diet & Nutrition, Tea & Coffee

Scenario: Cart icon shows item count
  Given the user loads the page
  Then a shopping bag icon is visible with a badge showing "2"

Scenario: Search icon is present
  Given the user loads the page
  Then a search icon button is visible in the navbar

### Feature: Hero Carousel

Scenario: First hero slide renders
  Given the page loads
  Then a hero banner with background image is displayed
  And the heading "Pharmvault Opens 24 Hours" is visible
  And a subtext paragraph is visible below the heading
  And a "Shop Now" green button is visible

Scenario: Second hero slide renders
  Given the carousel advances to slide 2
  Then the heading "New Medicine Everyday" is visible
  And a "Shop Now" green button is visible

Scenario: Hero slides have dark overlay
  Given the user views the hero section
  Then each slide has a semi-transparent dark overlay over the background image

### Feature: Features Section

Scenario: Three features render in a row
  Given the user scrolls to the features section
  Then three feature cards are displayed side by side

Scenario: Feature cards show icon, title, description, link
  Given a feature card is rendered
  Then it shows an icon, a title, a description paragraph, and a "Learn more" link with arrow

Scenario: Feature content is correct
  Given the features section renders
  Then the first feature is "Free Delivery"
  And the second feature is "New Medicine Everyday"
  And the third feature is "Medicines Guaranteed"

### Feature: Products Carousel

Scenario: Products section renders on gray background
  Given the user scrolls to the products section
  Then the section has a light gray background
  And the heading "Pharmacy Products" is visible

Scenario: Product cards display correctly
  Given a product card is rendered
  Then it shows a product image, a product name, and a price ($120.00)

Scenario: Sale badge appears on select products
  Given some product cards are marked as on sale
  Then a "Sale" badge is overlaid on those product cards

### Feature: CTA Banner

Scenario: Discount banner renders with dark overlay
  Given the user scrolls to the CTA section
  Then a full-width banner with a background image and dark overlay is visible
  And the heading "Sign up for discount up to 55% OFF" is displayed
  And a "Sign up" outlined-white button is visible

### Feature: Testimonials + Why Us

Scenario: Testimonials section renders
  Given the user scrolls to the testimonials area
  Then the heading "Happy Customers" is visible
  And a testimonial carousel is displayed

Scenario: Testimonial card content
  Given a testimonial card is rendered
  Then it shows an avatar image, a quoted paragraph, and an author name in green

Scenario: Why Us section renders
  Given the user views the right side of the section
  Then the heading "Why Us" is visible
  And three numbered steps (1, 2, 3) with description text are shown

### Feature: Footer

Scenario: Footer renders with three columns
  Given the user scrolls to the footer
  Then three columns are visible: About, Navigation, Contact Info

Scenario: Footer about column
  Given the footer renders
  Then the "About Pharmvault" heading is visible with a description paragraph

Scenario: Footer navigation links
  Given the footer renders
  Then the Navigation column lists: Supplements, Vitamins, Diet & Nutrition, Tea & Coffee

Scenario: Footer contact info
  Given the footer renders
  Then the Contact Info column shows an address, phone number, and email

Scenario: Footer copyright with Component Dock link
  Given the footer renders
  Then a copyright line is visible
  And it contains a link to "https://www.componentdock.com/" branded as "Component Dock"

## Verification Checklist

- [ ] Navbar renders with green bold brand prefix, nav links, cart badge, search icon
- [ ] Hero carousel with 2 slides, dark overlay, background images, Shop Now button
- [ ] Features section: 3 columns, icons, titles, descriptions, Learn more links
- [ ] Products carousel: gray bg, product cards with image/name/price, Sale badges
- [ CTA banner: dark overlay, discount heading, outlined Sign up button
- [ ] Testimonials: avatar, quote, green author name, carousel navigation
- [ ] Why Us: 3 numbered steps with descriptions
- [ ] Footer: About/Navigation/Contact three columns, copyright with Component Dock link
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Nunito font loaded via Google Fonts
- [ ] Brand color #75b239 used throughout via Tailwind theme
