# Cartique (ColorLib Persuit) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cartique`. Recreation name: **Cartique** (NEW name —
> the ColorLib source is "Persuit").

## Source mapping

- **ColorLib item:** "Persuit" (TEMPLATES.md line 1129; section "## E-commerce Templates").
- **Source URL:** https://colorlib.com/wp/template/persuit/
- **Preview URL:** https://preview.colorlib.com/theme/persuit/ (REACHABLE — HTML + CSS fetched and analyzed)
- **Template type:** E-commerce / Fashion Store — full shopping template with product carousels, category listings, and promo cards.

## Reference research (done — do not redo)

### Live preview DOM (fetched 2026-09-13)

Preview HTML (60,644 bytes) parsed. Sections in order:

1. `header_top_area` — 3-column top bar: language/currency selectors + search (left), phone + email + logo (center), social icons + user/cart/currency (right)
2. `shop_header_area` — Bootstrap navbar: logo, "Shop by Category" dropdown, Home (6 variants), Pages (6 items), Shop (mega menu with 5 columns)
3. `main_slider_area` — Revolution slider, 2 slides, each with: decorative "2017" text, "Best Summer Collection" headline, "read more" CTA
4. `feature_add_area` — 3 promo cards (5+4+3 grid): image + hover overlay (heading + "Shop Now" CTA) + sale/off badges
5. `our_latest_product` — Owl carousel: 8 product cards in pairs, each with: image, compare/cart/wishlist icons, name, price (some strikethrough)
6. `feature_big_add_area` — 2 large promo cards (6+6 grid): image + hover overlay
7. `product_listing_area` — 3-column category listing: Men / Women / Accessories, each with 6 subcategory links + product image
8. `feature_product_area` — Sidebar (3-col): "Featured Products" heading + 4 items. Main (9-col): filter tabs (men's/Woman/Shoes/Bags) + product carousel with Sale/New/-10% badges
9. `from_blog_area` — 3-column blog cards: image, "fashion" tag, excerpt, date
10. `footer_area` — 5 columns (About, Information, Customer Service, Extras, My Account) + copyright

### CSS tokens (from css/style.css, 139,307 bytes)

| Token               | Value                        | Evidence (class occurrences)                    |
| ------------------- | ---------------------------- | ----------------------------------------------- |
| Brand red           | `#d91522`                    | 46 uses — buttons, badges, hovers, sale markers  |
| Dark navy           | `#0b1033`                    | 25 uses — text, dark backgrounds                 |
| Body text           | `#666666`                    | 81 uses — paragraphs, descriptions               |
| Muted text          | `#999999`                    | 42 uses — secondary text, dates                  |
| Page surface        | `#f3f3f3`                    | Section backgrounds (blog, footer)               |
| White surface       | `#fff`                       | 68 uses — cards, main background                 |
| Border/divider      | `#e5e5e5`                    | 12 uses                                          |
| Heading text        | `#29263a`                    | Slider text (inline style)                       |
| Gold accent         | `#efb504`                    | 3 uses — rare decorative element                 |
| Button shape        | `border-radius: 0`           | `.checkout_btn`, `.add_btn`, `.add_cart_btn`     |
| Primary font        | `"Montserrat"`               | Headings, nav, slider (font-weight: 700)         |
| Body font           | `"Poppins"`                  | Body text, product descriptions                  |
| Display font        | `"Playfair Display"`         | Decorative headings (if present in screenshot)   |
| Alt font            | `"Lato"`                     | Supplementary text                               |

### Screenshot analysis

Persuit screenshot URL: `https://colorlib.com/wp/wp-content/uploads/sites/2/persuit-free-template.jpg`
(Browser not available for visual inspection; relying on DOM + CSS analysis above)

The template is a **full e-commerce storefront** — fashion/clothing category. Dark header bar, white navbar, full-width hero with product imagery, red accent throughout. Clean, modern shopping aesthetic with prominent product cards and promotional banners.

## Component breakdown (section-by-section)

| Component       | Key elements                                                                                     | Fidelity notes                                                  |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| TopHeader       | Language select, currency select, search input, phone/email links, logo, social icons, user/cart | Simplify: remove actual dropdowns; show as static elements       |
| Navbar          | Logo, "Shop by Category" dropdown, nav links with dropdowns                                      | Simplify: single-level nav with Home/Pages/Shop links           |
| Hero            | Background image, "Best Summer Collection" heading, "read more" CTA                              | Replace revolution slider with static hero + CTA                 |
| FeaturePromos   | 3 promo cards (asymmetric grid), hover overlays, Sale/Off badges                                 | Use 3-column grid, hover reveals text + CTA                     |
| LatestProducts  | 8 product cards in carousel, image + icons + name + price                                        | Use 2×4 grid or carousel; picsum images                         |
| BigFeaturePromos | 2 large promo cards side by side                                                                | Simple 2-col grid with hover overlay                            |
| ProductCategories | 3 columns: Men/Women/Accessories, subcategory links, product image                             | Static list, no image needed or use picsum                      |
| FeaturedProducts | Sidebar (4 featured items) + main area (filter tabs + product carousel)                          | Sidebar is decorative; tabs are functional                      |
| Blog            | 3 blog cards: image, category tag, excerpt, date                                                 | Standard 3-col card grid                                        |
| Footer          | 5 columns (About + 4 link columns), copyright with Component Dock link                           | Replace ColorLib attribution with Component Dock                 |

## Implementation notes

- **No revolution slider** — simplify Hero to a static full-width hero with background image + heading + CTA
- **No Owl Carousel** — use CSS grid/flexbox for product listings; optional: horizontal scroll
- **No Bootstrap** — fully Tailwind + React 19, matching layout with grid/flex
- **Placeholder images:** `https://picsum.photos/seed/cartique-hero/1200/500`, `https://picsum.photos/seed/cartique-prod-<n>/300/400`, etc.
- **Icons:** Replace Font Awesome + Elegant Icons with `lucide-react`
- **Google Fonts:** Montserrat (400, 500, 700) + Poppins (400, 500, 600) via `<link>` in index.html
- **Footer:** Replace Colorlib credit with "Made with Component Dock" + link to `https://www.componentdock.com/`
- **Brand color `#d91522`** goes into `@theme` as primary/accent color for Tailwind
- **Dark background sections:** Footer uses `#0b1033` or `#262121` (from CSS `.footer_bg`)
