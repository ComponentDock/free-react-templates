# Kith (ColorLib Karl) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-kith`. Recreation name: **Kith** (NEW name —
> the ColorLib source keeps its name "Karl").

## Source mapping

- **ColorLib item:** "Karl" (TEMPLATES.md line 1069; section in the main
  template list). The `wp/template/karl/` slug appears in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/karl/
- **Preview URL — REACHABLE (verified by direct fetch):**
  **`https://preview.colorlib.com/theme/karl/`** (HTTP 200, ~689 lines HTML).
  Title: "Karl - Fashion Ecommerce Template | Home".
- **Preview CSS:** `css/core-style.css` (main styles) + `style.css`
  (custom overrides, mostly empty) + `css/responsive.css`.
  Scripts: jQuery, Popper, Bootstrap, plugins, active.js.
  Icons: Themify (`ti-*`), Font Awesome (`fa-*`) — replace with lucide-react.
  Fonts: Open Sans (Google Font) — 400/600/700 weights used.

## Reference research (done — do not redo)

### Screenshot analysis

Visual design: Clean, modern fashion ecommerce layout. White header with
logo on left, cart + hamburger on right. Social icons strip below header.
Navigation centered with "hot" badge accent. 3-column discount banner
(light/pink/dark) creates visual rhythm. Large hero carousel with full-bleed
fashion photography and bold white typography (92px uppercase). Category
cards with image backgrounds. Product grid in 3-column layout with hover
quick-view overlay. Full-width offer section with background image. Clean
white testimonials carousel. White footer with newsletter subscription.
Overall aesthetic: elegant, feminine, fashion-forward with hot pink (#ff084e)
as the accent color against white and dark neutrals.

### Design tokens (live stylesheet + rendered page)

| Token | Value | Use |
|-------|-------|-----|
| Brand primary | `#ff084e` | Hot pink/magenta — buttons, badges, discount column, accents |
| Dark accent | `#3a3a3a` | Dark discount column bg, body text, header elements |
| Body text | `#3a3a3a` | Primary text color (base) |
| Secondary text | `#7a7a7a` / `#929191` / `#9f9f9f` | Muted/secondary text |
| Light section bg | `#f4f6f8` | Alternating section backgrounds |
| White | `#fff` | Card backgrounds, footer bg, hero text |
| Font family | `Open Sans`, sans-serif | Google Font — clean geometric sans-serif |
| Button (.karl-btn) | bg `#ff084e`, color `#fff`, border-radius 2px, min-width 170px, padding 12px 30px | Primary CTA |
| Button hover | bg darken (implied) | Hover state |
| Badge (.karl-level) | bg `#ff084e`, color `#fff`, 11px uppercase, bold, padding 3px 10px | "hot" / "Share" badges |
| Section heading | font-size 48px, uppercase, margin-bottom 50px | Section titles |
| Hero heading | font-size 92px, uppercase, color `#fff`, letter-spacing 0 | Hero carousel text |
| Hero subtitle | font-size 14px, color `#fff` | Small text above hero heading |
| Top header | height 150px, white bg, z-index 1000 | Logo + cart bar |
| Main header | flex row: social icons left, nav center, helpline right | Navigation bar |
| Discount strip | 3 equal columns (33.33%), padding 40px 15px | Promotional banners |
| Discount col 1 | default (white/light bg) | Free shipping |
| Discount col 2 | bg `#ff084e` | 20% dresses discount |
| Discount col 3 | bg `#3a3a3a` | Student discount |
| Discount text | 18px white headings, 12px bold white subtexts | All discount content |
| Category cards | 2-column flex, bg images, centered text | Accessory/bag categories |
| Category heading | font-size 92px, uppercase, white | Category card titles |
| Product grid | 3-column (col-12 col-sm-6 col-md-4) | Product cards |
| Product card | image + quick-view overlay + price + name + "ADD TO CART" | Individual product |
| Quick view | Plus icon overlay on hover | Product quick-view trigger |
| Offer section | height 700px, bg image, dark overlay | Featured product offer |
| Offer heading | large, white, with "Hot" badge | Product name |
| Offer pricing | strikethrough regular price + sale price | Price display |
| Testimonials | centered, carousel, quote marks, author info | Customer quotes |
| Footer | white bg, border-top 2px solid `#e5e5e5`, padding 100px 0 50px | Site footer |
| Footer divider | `#ddd`, 1px, margin 30px 0 | Section separator |
| Newsletter input | bg `#f0eded`, border-radius 0, italic, height 50px | Email subscription |
| Newsletter button | bg `#ff084e`, white text | Subscribe CTA |
| Social icons | 26px, padding 0 30px | Footer social links |
| Overlay | rgba(0,0,0,0.5) on hero/offer images | Dark image overlay |

### Icon mapping (lucide — replace Themify + Font Awesome)

| Source glyph | Recreation |
|-------------|------------|
| `ti-bag` (cart) | lucide `ShoppingBag` |
| `ti-menu` (hamburger) | lucide `Menu` |
| `ti-headphone-alt` (helpline) | lucide `Headphones` |
| `ti-close` (side menu close) | lucide `X` |
| `ti-heart` (wishlist) | lucide `Heart` |
| `ti-stats-up` (compare) | lucide `BarChart3` |
| `ti-plus` (quick view) | lucide `Plus` |
| `fa-pinterest` | lucide `Pin` |
| `fa-facebook` | lucide `Facebook` |
| `fa-twitter` | lucide `Twitter` |
| `fa-linkedin` | lucide `Linkedin` |
| `fa-google-plus` | lucide `Google` (or omit) |
| `fa-star` (rating) | lucide `Star` |
| `fa-minus` / `fa-plus` (qty) | lucide `Minus` / `Plus` |
| `fa-heart-o` (footer) | lucide `Heart` |
| `icon-cross` (cart remove) | lucide `X` |

### Picsum placeholder plan

| Image | Picsum URL | Size | Use |
|-------|-----------|------|-----|
| Hero slide 1 | `https://picsum.photos/seed/kith-hero1/1920/800` | 1920×800 | Fashion hero |
| Hero slide 2 | `https://picsum.photos/seed/kith-hero2/1920/800` | 1920×800 | Fashion hero |
| Hero slide 3 | `https://picsum.photos/seed/kith-hero3/1920/800` | 1920×800 | Fashion hero |
| Category 1 | `https://picsum.photos/seed/kith-cat1/960/500` | 960×500 | Accessories |
| Category 2 | `https://picsum.photos/seed/kith-cat2/960/500` | 960×500 | Bags |
| Product 1–6 | `https://picsum.photos/seed/kith-prod1/400/500` through `kith-prod6` | 400×500 | Product images |
| Offer bg | `https://picsum.photos/seed/kith-offer/1920/700` | 1920×700 | Offer section bg |
| Testimonial avatar | `https://picsum.photos/seed/kith-avatar/80/80` | 80×80 | Testimonial author |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/kith` from the simplest existing app
       (`cp -r apps/<simplest> apps/kith`), rename package to
       `@free-react-templates/kith`, add Open Sans 400/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `kith.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): TopHeader (logo, cart icon with count/total,
       hamburger), MainNav (links, "hot" badge, social icons, helpline,
       Pages dropdown), DiscountStrip (3 columns with correct text/colors),
       HeroCarousel (slides, headings, CTAs, dots), CategoryCards (2 cards
       with images and CTAs), ProductGrid (filter tabs, 6 products, filter
       logic, quick-view modal), OfferSection (bg image, pricing, CTA),
       Testimonials (carousel, quotes, author info), Footer (logo, links,
       newsletter form, social icons, Component Dock link), App (landmarks,
       document title).
3. [ ] Layout shell: Open Sans via Google Fonts, white body, top header
       (150px, flex, logo left, cart+hamburger right), main header (flex,
       social left, nav center, helpline right).
4. [ ] Top Discount Strip: 3-column flex row, each column 33.33%, 40px
       padding, white text. Col 1 light bg, col 2 `#ff084e`, col 3 `#3a3a3a`.
5. [ ] Hero Carousel: 800px height, bg images with dark overlay
       (rgba(0,0,0,0.5)), centered text (92px heading, 14px subtitle,
       karl-btn CTA). Implement as CSS-only or simple interval-based
       carousel with dot navigation.
6. [ ] Category Cards: 2-column flex, each card bg-image with overlay,
       centered white text (92px heading), "SHOP NOW" CTA button.
7. [ ] Product Grid: Section heading 48px uppercase, filter tab bar
       (active state on "ALL"), 3-column grid of product cards (image,
       quick-view overlay on hover, price, name, "ADD TO CART" button).
       Filter logic: show/hide by category class.
8. [ ] Quick View Modal: Product image, title, star rating, price
       (strikethrough + sale), description, quantity selector, "Add to
       cart" button, wishlist/compare icons, share links.
9. [ ] Offer Section: 700px height, bg image, dark overlay, content
       bottom-right aligned. Heading with "Hot" badge, strikethrough
       pricing, "Shop Now" CTA.
10. [ ] Testimonials: Section heading, centered carousel with quote marks,
        testimonial text, author thumbnail + name + location. Implement
        as simple auto-rotating carousel.
11. [ ] Footer: White bg, border-top, 4-column layout (logo+copyright,
        quick links, account links, newsletter). Newsletter: italic input
        on `#f0eded` bg, `#ff084e` subscribe button. Bottom: divider line,
        social icons. Component Dock credit link.
12. [ ] Run `npm run verify:app -- kith` (typecheck → lint → vitest
        100% → build) and fix until green.
13. [ ] Open PR `feat/template-kith` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#ff084e brand pink,
        Open Sans, 2px button radius, 92px hero headings), and what
        differs (renamed "Kith", lucide icons, picsum placeholders,
        Component Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1069 `[x]` +
        surge URL (`https://kith.free.componentdock.com`), `npm run
        readme:status`, push.
