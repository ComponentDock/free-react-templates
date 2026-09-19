# Template: Shopbox (Ecommerce — Online Store)

## Purpose

Shopbox is a single-page ecommerce store template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Wordpress
Ecommerce Themes" / "Shopkeeper" template design (see TEMPLATES.md, line 1617
under **Education** section — note: the listing is miscategorized; the source
is a pure ecommerce/store template, not education), built under a different
name ("Shopbox" — evoking a clean, compact online shop) with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and the
PR.

## Design reference (replication findings)

- **Original:** ColorLib "Wordpress Ecommerce Themes" (actually the
  "Shopkeeper" design by Get Bowtied) — free WooCommerce-style ecommerce
  HTML template (source: https://colorlib.com/wp/template/wordpress-ecommerce-themes/).
  Screenshot: `https://colorlib.com/wp/wp-content/uploads/sites/2/shopkeeper.jpg`.
  Description from Colorlib: "Shopkeeper is a polished, ultra-customizable
  WooCommerce theme from Get Bowtied, popular with boutique and lifestyle
  brands. It bundles importable demos. Ships light and dark color options
  alongside several product page layouts. Unlimited headers, a portfolio
  and a full blog round it out, fits fashion, accessories, sports, furniture,
  bags or shoes."
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/wordpress-ecommerce-themes/`
  returns HTTP 404. Falling back to TEMPLATES.md screenshot as sole reference.
- **Visual design (screenshot — shopkeeper.jpg):** Clean, professional
  ecommerce aesthetic with a light/white-dominant color palette. Features a
  top announcement/contact bar (dark background), a prominent logo-centered
  navigation bar with horizontal nav links and utility icons (search, cart,
  account), a full-width hero banner with product/lifestyle imagery and an
  overlay headline + CTA button, a featured-categories or featured-products
  grid section (3–4 column product cards with image, title, price, hover
  effects), a promotional/offer banner section (full-width, contrasting
  background), a new-arrivals or trending-products section, a blog/lookbook
  section with 3-column post cards, a newsletter/subscribe section, and a
  multi-column dark footer with links, social icons, and copyright. Overall
  aesthetic: modern, minimal, boutique-lifestyle, lots of whitespace, clean
  sans-serif typography.

## Design tokens (from screenshot analysis — preview unreachable)

| Token              | Value              | Notes                                                      |
| ------------------ | ------------------ | ---------------------------------------------------------- |
| Brand color        | `#1a1a2e`          | Dark navy — used for header bar, buttons, footer background |
| Accent color       | `#e94560`          | Warm coral/red — used for sale badges, hover states, CTAs  |
| Secondary accent   | `#f5f5f5`          | Light gray — section alternating backgrounds               |
| Heading text       | `#1a1a2e`          | Dark navy, matching brand                                  |
| Body text          | `#666666`          | Medium gray for paragraphs                                 |
| Light bg           | `#ffffff`           | Primary content background (white)                         |
| Alt section bg     | `#f8f9fa`           | Off-white for alternating sections                         |
| Footer bg          | `#1a1a2e`           | Dark navy, same as brand                                   |
| Footer text        | `#b0b0b0`          | Muted light gray on dark footer                            |
| Button radius      | `2px`               | Nearly square / sharp corners — minimal radius             |
| Font family        | `'Poppins', sans-serif` | Clean geometric sans-serif (Google Fonts)              |
| Font weights       | 300, 400, 500, 600 | Light through semi-bold                                     |

**Note:** Tokens are estimated from the screenshot since the live preview was
unreachable (404). The implementer should cross-reference the screenshot and
adjust exact hex values if they differ.

## Sections (in order)

1. **TopBar** — thin dark (`#1a1a2e`) announcement/contact bar: phone number
   and email on left; language/currency selector and utility links on right.
   Small text, light gray on dark.
2. **Navbar** — white background, sticky on scroll. Logo (wordmark) on the
   left. Centered horizontal nav: Home, Shop (dropdown), Categories, Blog,
   About, Contact. Right side: search icon, account icon, cart icon with
   badge count. Mobile: hamburger menu, off-canvas cart.
3. **Hero** — full-width hero banner with a lifestyle/product background
   image. Centered overlay text: headline ("Curated Collections" or similar),
   subheadline, and a primary CTA button (dark `#1a1a2e` background, white
   text, sharp corners).
4. **FeaturedCategories** — section heading ("Shop by Category"). 3 or
   4-column grid of category cards: each with a product/lifestyle image,
   category name overlay or caption, and a hover zoom effect.
5. **FeaturedProducts** — section heading ("Featured Products"). 4-column
   grid of product cards: product image, product name, price (with optional
   original/sale strikethrough), star rating, and hover-revealed quick-add
   or wishlist icon. Optional: "Add to Cart" button on hover.
6. **PromoBanner** — full-width promotional banner with a contrasting
   background (could be dark navy or an image). Centered text: headline
   ("Season Sale" or similar), subtext, and a CTA button (outline or filled).
7. **NewArrivals** — section heading ("New Arrivals"). 4-column product grid
   similar to FeaturedProducts but with "NEW" badge overlay on cards.
8. **BlogSection** — section heading ("From the Blog"). 3-column blog post
   cards: featured image, date + category meta, post title (linked), excerpt
   text, "Read More" link.
9. **Newsletter** — centered section on a light `#f8f9fa` background.
   Headline ("Subscribe to Our Newsletter"), subtext, and an email input +
   submit button inline form.
10. **Footer** — dark `#1a1a2e` background. 4-column layout:
    - Col 1: Brand logo + short about paragraph + social icons row
    - Col 2: "Quick Links" — Home, Shop, About, Contact
    - Col 3: "Customer Service" — My Account, Order Tracking, Wishlist, Returns
    - Col 4: "Contact Info" — address, phone, email
    Copyright bar at bottom: "© 2026 Shopbox. All rights reserved."
    **Component Dock link:** "Made with Component Dock" linking to
    `https://www.componentdock.com/`.

## Gherkin scenarios

```gherkin
Feature: Shopbox — Ecommerce Store Template

  Background:
    Given the user opens the Shopbox homepage

  Scenario: TopBar renders contact info
    Then the top bar displays a phone number and email address
    And the top bar has a dark background

  Scenario: Navbar renders navigation links
    Then the navbar displays links: Home, Shop, Categories, Blog, About, Contact
    And the navbar displays a search icon, account icon, and cart icon with badge
    And the navbar is sticky when scrolling

  Scenario: Hero section displays headline and CTA
    Then the hero shows a headline and subheadline
    And the hero shows a call-to-action button
    And the hero has a background image

  Scenario: Featured categories render in a grid
    Then the featured categories section shows 3 or 4 category cards
    And each category card has an image and a category name
    And hovering a category card triggers a visual effect

  Scenario: Featured products render in a grid
    Then the featured products section shows product cards
    And each product card displays an image, name, and price
    And hovering a product card reveals quick-add or wishlist icons

  Scenario: Promo banner displays with CTA
    Then the promo banner shows a headline and call-to-action button
    And the promo banner has a contrasting background

  Scenario: New arrivals render with NEW badges
    Then the new arrivals section shows product cards
    And new arrival cards display a "NEW" badge

  Scenario: Blog section renders post cards
    Then the blog section shows 3 post cards
    And each post card has an image, date, title, excerpt, and read-more link

  Scenario: Newsletter form accepts email subscription
    Then the newsletter section displays an email input and submit button
    When the user types a valid email and clicks submit
    Then the form accepts the input without error

  Scenario: Footer renders columns and Component Dock link
    Then the footer has 4 columns with links
    And the footer contains a link to componentdock.com
    And the copyright line is present

  Scenario: Mobile responsive navigation
    When the viewport width is less than 768px
    Then the navbar shows a hamburger menu icon
    And clicking the hamburger opens a mobile navigation drawer
```

## Verification checklist

- [ ] TopBar renders with contact info on dark background
- [ ] Navbar renders all nav links + utility icons, is sticky
- [ ] Navbar mobile: hamburger toggles drawer, cart opens off-canvas
- [ ] Hero section: background image, headline, subtext, CTA button
- [ ] FeaturedCategories: grid of category cards with hover effect
- [ ] FeaturedProducts: product cards with image, name, price, hover icons
- [ ] PromoBanner: contrasting bg, headline, CTA
- [ ] NewArrivals: product cards with "NEW" badge
- [ ] BlogSection: 3-column post cards with all metadata
- [ ] Newsletter: email input + submit, form validation
- [ ] Footer: 4 columns, social icons, copyright, Component Dock link
- [ ] All images use `picsum.photos/seed/shopbox-<n>/<w>/<h>` placeholders
- [ ] Google Fonts loaded via `<link>` in index.html (Poppins)
- [ ] Icons from lucide-react
- [ ] No ColorLib references in app code
- [ ] 100% test coverage (statements, branches, functions, lines)
- [ ] `npm run verify:app shopbox` passes (typecheck + lint + knip + fallow + tests + build)
