# Template: Plumero (eCommerce Pillow Store)

## Purpose

Plumero is a single-page PILLOW/BEDDING eCOMMERCE STORE in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Pillow Mart" free template (source:
https://colorlib.com/wp/template/pillow-mart/), built under a
DIFFERENT name (**Plumero**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 HTML5 responsive online store template for
pillows and bedding products. It features a full-width hero banner with
product imagery, alternating product showcases, a trending items grid,
customer review carousel, feature highlights, and a newsletter subscription
section. The design uses a muted mauve/purple palette (#B08EAD brand,
#4B3049 dark) with Rubik + Poppins fonts.

## Naming

The ColorLib source name "Pillow Mart" is FORBIDDEN as the app name.
**Plumero** is the new, original name — single lowercase word, kebab-case,
no collision with `apps/`, `openspec/specs/`, `docs/templates/`, or any
TEMPLATES.md name (verified: zero hits for `plumero` in TEMPLATES.md,
`ls apps/`, `openspec/specs/`, `docs/templates/`).

- Source slug: `pillow-mart`
- Source URL: https://colorlib.com/wp/template/pillow-mart/
- Preview URL: https://themewagon.github.io/pillowmart/ (ThemeWagon hosted
  demo — the naive `https://preview.colorlib.com/theme/pillow-mart/`
  returns 404)

## Design reference (replication findings)

### Live preview — REACHABLE (verified via ThemeWagon mirror)

The original ColorLib preview URL `https://preview.colorlib.com/theme/pillow-mart/`
returns HTTP 404. The live demo is hosted on ThemeWagon:
**https://themewagon.github.io/pillowmart/** (HTTP 200, full template with
all pages, CSS, JS).

### Design tokens (from fetched CSS `css/style.css`, 8,692 lines)

| Token | Value | Usage |
|-------|-------|-------|
| Brand color (primary) | `#B08EAD` | Buttons, links, client review section bg, hover states |
| Dark purple | `#4B3049` | Nav links, subscribe section bg, text headings |
| Light purple bg | `#F4EDF2` | Trending items section, copyright bar |
| Page text | `#1e1e1e` | Body text (dark) |
| Secondary text | `#556172`, `#666666` | Descriptions, subtitles |
| White | `#fff` | Card backgrounds, button text on dark bg |
| Border | `#edeff2` | Table/form borders |
| Font family (primary) | `"Rubik", sans-serif` | Body text, buttons, nav links |
| Font family (secondary) | `"Poppins", sans-serif` | Alternate headings, form text |
| Button radius | `5px` | All `.btn_1`, `.btn_2`, `.btn_3`, `.btn_4` |
| Button primary | `#B08EAD` bg, `#fff` text, hover inverts | `.btn_1` — Shop Now, Subscribe |
| Button outline | transparent bg, `#B08EAD` text, hover fills | `.btn_3` — Explore Now |
| Button white | `#fff` bg, `#B08EAD` text on hover | `.btn_2` |

### Section structure (from fetched HTML, 448 lines)

1. **Header/Navbar** — Logo image + horizontal nav links (Home, About,
   Product dropdown, Pages dropdown, Blog dropdown, Contact) + search
   icon + cart icon. Sticky/fixed, white background, `#4B3049` nav link
   color.

2. **Banner/Hero** — Full-width section (782px tall), left-aligned text:
   "Best quality pillow" (large h1), subtitle paragraph, "Shop Now"
   primary button. Right side: large hero pillow product image with a
   decorative pattern overlay.

3. **Single Product List** — 3 featured product rows, each with alternating
   layout (product image on left with decorative overlay, text content on
   right). Each shows: "Started from $10" subtitle, product title
   (Printed memory foam brief modern throw pillow case), "Explore Now"
   outline button. White background, generous padding (200px top).

4. **Trending Items** — Light purple background (`#F4EDF2`), centered
   heading "Trending Items", 3-column grid (2 rows, 6 products total).
   Each card: product image, product name, "From $5" price. Cards have
   no visible border/shadow — clean minimal layout.

5. **Client Review** — Mauve background (`#B08EAD`), centered
   owl-carousel slider. Each slide: customer avatar image, testimonial
   quote, reviewer name. White text on mauve bg.

6. **Feature Part** — White background with padding. Left column:
   heading "Credibly innovate granular internal or organic sources
   whereas standards." Right column: descriptive paragraph. Below:
   4 feature icons in a row — Credit Card Support, Online Order,
   Free Delivery, Product with Gift (SVG icons).

7. **Subscribe/Newsletter** — Dark purple background (`#4B3049`),
   centered content: "Get promotions & updates!" heading, description
   text, email input + "Subscribe" button.

8. **Footer** — Two-part footer:
   - **Footer inner**: Logo + navigation links (Home, About, Products,
     Pages, Blog, Contact) + social icons (Facebook, Instagram, Google+,
     LinkedIn). White background.
   - **Copyright bar**: Light purple bg (`#F4EDF2`), copyright text
     with heart icon + Component Dock link (replacing Colorlib),
     Terms & Conditions + FAQ links.

## Gherkin requirements

```gherkin
Feature: Plumero — eCommerce Pillow Store Template

  Background:
    Given the Plumero app is loaded in the browser

  Scenario: Navbar renders with all navigation links
    Then the navbar displays the logo
    And the navbar shows links: Home, About, Products, Pages, Blog, Contact
    And the navbar shows a search icon
    And the navbar shows a cart icon

  Scenario: Hero banner displays with correct content
    Then the hero section shows the heading "Best quality pillow"
    And the hero section shows a descriptive paragraph
    And the hero section shows a "Shop Now" primary button
    And the hero section shows a large product image on the right

  Scenario: Featured products section shows 3 product rows
    Then 3 featured product rows are displayed
    And each row shows "Started from $10" subtitle
    And each row shows a product title
    And each row shows an "Explore Now" outline button
    And each row shows a product image with overlay

  Scenario: Trending items grid shows 6 products
    Then the trending section shows heading "Trending Items"
    And 6 product cards are displayed in a 3-column grid
    And each card shows a product image
    And each card shows a product name
    And each card shows a price starting "From $5"

  Scenario: Client review carousel displays testimonials
    Then the review section shows a carousel of testimonials
    And each testimonial shows a customer avatar
    And each testimonial shows a quote
    And each testimonial shows the reviewer name

  Scenario: Feature highlights show 4 service items
    Then the feature section shows a heading and description
    And 4 feature items are displayed: Credit Card Support, Online Order, Free Delivery, Product with Gift

  Scenario: Newsletter subscription section renders
    Then the subscribe section shows "Get promotions & updates!" heading
    And the subscribe section shows an email input field
    And the subscribe section shows a "Subscribe" primary button

  Scenario: Footer renders with navigation and social links
    Then the footer shows the logo
    And the footer shows navigation links: Home, About, Products, Pages, Blog, Contact
    And the footer shows social media icons: Facebook, Instagram, Google+, LinkedIn

  Scenario: Copyright bar shows attribution
    Then the copyright bar shows copyright text with a heart icon
    And the copyright bar links to Component Dock
    And the copyright bar shows "Terms & Conditions" and "FAQ" links

  Scenario: Responsive layout adapts to mobile
    When the viewport width is less than 768px
    Then the navbar collapses to a hamburger menu
    And the hero banner adjusts height
    And the product grid stacks to single column
    And the trending items grid stacks to single column

  Scenario: Brand colors are applied consistently
    Then the primary brand color is #B08EAD
    And the dark section backgrounds use #4B3049
    And the light section backgrounds use #F4EDF2
    And buttons use 5px border-radius
```

## Verification checklist

- [ ] All 8 sections rendered in correct order (header → hero → products → trending → reviews → features → subscribe → footer)
- [ ] Navbar shows all 6 nav links + search + cart icons
- [ ] Hero heading, subtitle, CTA button, and product image present
- [ ] 3 featured product rows with alternating layout
- [ ] 6 trending items in 3-column responsive grid
- [ ] Review carousel with avatar, quote, and name
- [ ] 4 feature highlight icons with labels
- [ ] Newsletter subscription form with email input + button
- [ ] Footer with logo, nav links, social icons
- [ ] Copyright bar with Component Dock attribution
- [ ] Brand color #B08EAD used for primary buttons and accents
- [ ] Dark purple #4B3049 for subscribe bg and nav text
- [ ] Light purple #F4EDF2 for trending and copyright backgrounds
- [ ] Rubik font family applied as primary
- [ ] 5px border-radius on all buttons
- [ ] Responsive: hamburger menu on mobile, stacked grids
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Images use picsum.photos placeholders (deterministic seeds)
- [ ] Icons from lucide-react (replace font awesome/flaticon)
