# Template: Lacecraft (E-Commerce Shoe Store)

## Purpose

Lacecraft is a single-page e-commerce shoe store template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Solestyle" free template (source:
https://colorlib.com/wp/template/solestyle/), built under a DIFFERENT
name (**Lacecraft**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a full-featured Astro-based shoe store landing page with
a dark hero, category browsing, featured/new-arrival product grids,
benefit icons, customer testimonials, newsletter CTA, and a footer. The
template follows a dark-mode-first aesthetic with an orange primary
accent and clean product cards with hover effects.

**Source slug:** `solestyle`
**Preview URL:** https://preview.colorlib.com/theme/solestyle/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/solestyle-template-1770211411401.jpg

## Design Tokens (extracted from live preview CSS)

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| primary-500 | `#f97316` (orange) | CTA buttons, accent, focus rings |
| primary-600 | `#ea580c` (deeper orange) | CTA button hover, newsletter bg |
| primary-700 | `#c2410c` (dark orange) | Dark hover states |
| gray-50 | `#f9fafb` | Light section bg, benefit strip |
| gray-100 | `#f3f4f6` | Subtle bg, borders |
| gray-800 | `#1f2937` | Dark mode cards, scrollbar |
| gray-900 | `#111827` | Dark mode sections |
| gray-950 | `#030712` | Hero bg, dark section bg |
| white | `#fff` | Light section bg, text on dark |
| green-500 | `#22c55e` | Success/availability indicators |
| red-500 | `#ef4444` | Discount badges, errors |
| yellow-400 | `#facc15` | Star ratings |

### Fonts

- **Display / Headings:** `"Outfit", system-ui, sans-serif` (Google Fonts)
- **Body / Sans:** `"Inter", system-ui, sans-serif` (Google Fonts)
- **Mono:** `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`

### Border Radii

- `rounded-lg` — product cards, buttons
- `rounded-xl` — modal/overlay elements
- `rounded-full` — avatar circles, badges, pills

### Section Backgrounds

- Hero: solid `gray-950` with `min-h-[90vh]`, likely parallax/overlay image
- Categories: solid `white` (dark: `gray-950`)
- Featured: solid `gray-50` (dark: `gray-900`)
- Benefits: `gray-50` with top/bottom border
- New Arrivals: solid `white` (dark: `gray-950`)
- Testimonials: solid `gray-950`
- Newsletter CTA: solid `primary-600` with gradient overlay
- Footer: solid `gray-50` (dark: `gray-900`)

### Button Styles

- Primary: `bg-primary-600 hover:bg-primary-700 text-white rounded-lg`
- Ghost/outline: border-based with hover fill
- Add-to-cart: small icon button, appears on hover for product cards

## Gherkin Requirements

### Section 1: Sticky Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given I visit the Lacecraft homepage
  Then I see the brand name "Lacecraft" in the navbar
  And I see navigation links: Shop, Categories, New Arrivals, Sale, About
  And I see a Wishlist icon and My Account link

Scenario: Navbar becomes translucent on scroll
  Given I am on the Lacecraft homepage
  When I scroll down past the hero
  Then the navbar background becomes translucent white/95 with backdrop-blur
```

### Section 2: Hero

```gherkin
Scenario: Hero displays headline and CTA
  Given I visit the Lacecraft homepage
  Then I see a large hero section with dark background
  And I see the text "Step Into Your Best"
  And I see a subheadline about premium footwear
  And I see a "Shop Now" button in orange primary color
  And I see a "Browse Categories" secondary link

Scenario: Hero displays stats row
  Given I view the hero section
  Then I see 50K+ Happy Customers
  And I see 4.9 Average Rating
  And I see 300+ Styles Available
  And I see Free Shipping Orders over $75
```

### Section 3: Shop by Category

```gherkin
Scenario: Category section shows product categories
  Given I scroll to the categories section
  Then I see "Shop by Category" heading
  And I see a "View All" link
  And I see category cards for Running, Sneakers, Basketball, Sandals
  And each card shows product count and a "Shop Now" link

Scenario: Category cards display product counts
  Given I view the categories section
  Then Running shows "48 products"
  And Sneakers shows "86 products"
  And Basketball shows "32 products"
  And Sandals shows "24 products"
```

### Section 4: Featured Collection

```gherkin
Scenario: Featured section shows product grid
  Given I scroll to the featured collection
  Then I see "Featured Collection" heading
  And I see "Our most popular styles handpicked for you" subtext
  And I see a "View All" link
  And I see product cards with image, name, category, rating, price, sizes

Scenario: Product card shows badge and discount
  Given I view a featured product card
  Then I see a badge like "BESTSELLER" or "NEW"
  And I see a discount percentage if applicable (e.g. "-18%")
  And I see an "Add to Cart" button on hover
```

### Section 5: Benefits Strip

```gherkin
Scenario: Benefits strip shows four value props
  Given I scroll to the benefits strip
  Then I see "Free Shipping" with description
  And I see "60-Day Returns" with description
  And I see "Size Guarantee" with description
  And I see "Secure Checkout" with description
```

### Section 6: New Arrivals

```gherkin
Scenario: New arrivals section displays fresh products
  Given I scroll to the new arrivals section
  Then I see "Just Dropped" heading
  And I see "New Arrivals" subheading
  And I see "Shop New Arrivals" link
  And I see product cards with "NEW" badge
```

### Section 7: Customer Testimonials

```gherkin
Scenario: Testimonials section shows customer reviews
  Given I scroll to the testimonials section
  Then I see "Customer Love" heading
  And I see "What Our Customers Say" subheading
  And I see testimonial cards with quote, author name, and role
  And I see aggregate stats: 15K+ 5-Star Reviews, 98% Would Recommend

Scenario: Testimonials have star ratings
  Given I view a testimonial card
  Then I see a 5-star rating displayed
```

### Section 8: Newsletter CTA

```gherkin
Scenario: Newsletter section invites signup
  Given I scroll to the newsletter section
  Then I see "Ready to Step Up Your Game?" heading
  And I see description about 15% off first order
  And I see an email input field
  And I see a "Get 15% Off" submit button
  And I see "No spam, ever. Unsubscribe anytime." disclaimer

Scenario: Newsletter section shows app download links
  Given I view the newsletter section
  Then I see "Download Our App" heading
  And I see App Store and Google Play download badges
```

### Section 9: Footer

```gherkin
Scenario: Footer displays links and payment methods
  Given I scroll to the footer
  Then I see the Lacecraft brand name
  And I see footer navigation links
  And I see a link to https://www.componentdock.com/ ("Component Dock")
  And I see payment method icons (Visa, Amex, etc.)
  And I see Privacy and Terms links
```

## Verification Checklist

- [ ] All 9 sections present in correct order (Navbar, Hero, Categories, Featured, Benefits, New Arrivals, Testimonials, Newsletter, Footer)
- [ ] Dark mode support on all sections (`dark:` variants)
- [ ] Product cards show hover effect with Add-to-Cart button
- [ ] Responsive: mobile hamburger menu, stacked layout on small screens
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Brand name "Lacecraft" used throughout (not "Solestyle")
- [ ] Images use picsum.photos placeholders with deterministic seeds
- [ ] Fonts loaded via Google Fonts link (Outfit + Inter)
- [ ] Primary orange accent (#ea580c) consistent on CTAs
- [ ] 100% test coverage (lines, functions, branches, statements)
