# Velvette (ColorLib Shionhouse) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-velvette`. Recreation name: **Velvette** (NEW name —
> the ColorLib source keeps its name "Shionhouse").

## Source mapping

- **ColorLib item:** "Shionhouse" (TEMPLATES.md line 1600; section "## Fashion (35)" at line 1595).
- **Source URL:** https://colorlib.com/wp/template/shionhouse/
- **Preview URL — REACHABLE (verified 2026-09-19 by direct fetch):**
  **`https://preview.colorlib.com/theme/shionhouse/`**
  (HTTP 200, 33,089 bytes — full fashion e-commerce homepage with 3-slide hero,
  product grids, collection parallax, services, footer).
- **Preview CSS:** `assets/css/style.css` (62,397 bytes) + Bootstrap grid
  (`assets/css/bootstrap.min.css`) + Owl Carousel + SlickNav + FontAwesome
  + Themify icons. Fonts loaded via Google Fonts import in style.css:
  `Cinzel` 400/700/900 + `Poppins` 300–900.

## Reference research (done — do not redo)

### Screenshot (`shionhouse-free-template.jpg`, 1200×972 JPEG)

Browsed visually in the browser 2026-09-19 (matches the live page).
Browser frame: elegant fashion e-commerce layout with a full-height hero
showing a fashion model photo, large serif heading "fashion changing always"
with a green accent subtitle, and purple CTA button. Below the hero: a
4-column grid of fashion category images (Glasses, Watches, Jackets, Clothes)
with hover-overlay "Shop Now" buttons. Then an 8-card product grid showing
clothing items with star ratings and prices. A full-width parallax section
with dark overlay and serif text. Two featured product cards with large images.
A services row with icons. A clean white multi-column footer with logo,
links, contact info, and social icons. Aesthetic: elegant, luxury fashion
vibe with purple brand accent, serif headings (Cinzel), clean white backgrounds
with subtle lilac tints.

### Design tokens (live stylesheet + rendered page, verified 2026-09-19)

| Token          | Value                           | Use                                                                          |
| -------------- | ------------------------------- | ---------------------------------------------------------------------------- |
| Brand purple   | `#9F78FF`                       | Primary accent: buttons, links, badges, preloader ring, hover states        |
| Hover purple   | `#8c6ae4`                       | Button hover pseudo-element background                                       |
| Dark navy      | `#1D2547`                       | Nav link text, social icon borders, section subtitles                        |
| Deep navy      | `#1f2b7b`                       | Heading body color, sub-brand accent (blockquotes, lists, switches)         |
| Heading ink    | `#140C40`                       | h1–h6 base color, section-tittle spans                                       |
| Body text      | `#646D77`                       | Paragraph text, body copy                                                    |
| Light bg       | `#f9f9ff`                       | Page sections, form inputs, sidebar widgets, generic buttons                 |
| Lilac tint     | `#f0e9ff`                       | Border accents, hover states, blog pagination, widget borders                |
| Gray bg alt    | `#f7f7fd` / `#f5f5f5`          | Alternate section backgrounds (`.gray-bg`)                                   |
| Green accent   | `#31ff7a`                       | Hero subtitle span (slider caption)                                          |
| Muted gray     | `#888888` / `#999999`          | Secondary text, sidebar text, date badges                                    |
| Card shadow    | `rgba(0,0,0,0.05)`             | Dropdown submenu shadow                                                      |
| Font headings  | `'Cinzel', serif`               | All h1–h6 + `.boxed-btn` (Google Fonts: Cinzel 400/700/900)                |
| Font body      | `'Poppins', sans-serif`         | Body, nav links, paragraphs (Google Fonts: Poppins 300–900)                 |
| Button `.btn`  | bg `#9F78FF`, radius 4px        | Primary CTA; padding 27px 44px; hover reveals `#8c6ae4` pseudo-element     |
| Cart badge     | bg `#9F78FF`, radius 30px       | Cart count pill in header                                                    |
| Social icons   | border-radius 50%               | Header + footer social icon circles                                          |
| Section overlay| `rgba(29,37,71,0.4)`            | Parallax section dark overlay (`.section-over1::before`)                     |
| Dropdown top   | 3px solid `#9F78FF`             | Submenu top border accent                                                    |
| Body margin    | `0 35px`                        | `.full-wrapper` horizontal margin (15px at ≤1199px, 0 at ≤991px)            |
| Preloader ring | border-top-color `#9F78FF`      | Loading spinner ring color                                                   |

**Not used in homepage (skip):** secondary utility palette (teal `#4cd3e3`,
pink `#ff3368`, yellow `#f4e700`, red `#f44a40`, blue `#38a4ff`) only appears
in element-demo utility classes; `gijgo.css` datepicker; `progressbar_barfiller.css`;
`magnific-popup.css`; `nice-select.css` custom dropdowns.

### Section structure (from live preview DOM, top to bottom)

1. **Header** (`header > .header-area > .main-header`)
   - Sticky (`.header-sticky`), white background when scrolled
   - Logo image (left), main nav (Home, Shop, About, Blog with submenu, Contact)
   - Right side: social icons (Twitter, Facebook, Pinterest), search icon, cart icon with count badge
   - Mobile: hamburger menu toggle (`.mobile_menu`)

2. **HeroSlider** (`.slider-area > .slider-active.dot-style`)
   - 3 slides (`.single-slider.slider-bg1/2/3`), each 900px min-height
   - Full-viewport background images (hero1.png, hero2.png, hero3.png)
   - Centered content: heading "fashion changing always" (white, 120px Cinzel)
   - Green accent subtitle span (#31ff7a)
   - Purple CTA button `.btn` "Shop Now"
   - Dot navigation (`.dot-style`)
   - Dark overlay (`.hero-overly`)

3. **PopularCategories** (`.popular-items.pt-50`)
   - 4-column grid (`.col-lg-3`)
   - Each card: product category image, label overlay (`.img-cap > span`), "Shop Now" button on hover
   - Categories: Glasses, Watches, Jackets, Clothes
   - Hover: button fades in over image

4. **NewArrivals** (`.new-arrival`)
   - Section heading: "new arrival" (h2, centered, Cinzel)
   - 4-column grid of 8 products (`.col-xl-3`)
   - Each card: product image, favorite icon overlay, product name (h3), 5-star rating, price ($30.00)
   - Fade-in animations (`.wow.fadeInUp`)

5. **CollectionBanner** (`section.collection.section-bg2.section-padding30.section-over1`)
   - Full-width parallax image background (section_bg01.png)
   - Dark overlay via `.section-over1::before` (rgba(29,37,71,0.4))
   - Centered text: "collection houses our first-ever" (white, h2 Cinzel)
   - "About Us" CTA button

6. **FeaturedProducts** (`.popular-product.pt-50`)
   - 2-column layout (`.col-lg-6`)
   - Each card: large product image + text description + "Read More" button
   - Text: "Established fact that by the readable content"

7. **Services** (`.categories-area.section-padding40.gray-bg`)
   - Gray background (#f7f7fd)
   - 4-column grid of service feature cards
   - Each card: SVG icon + title (h5) + description paragraph
   - Features: Fast & Free Delivery (x4 placeholder cards)

8. **Footer** (`footer > .footer-area.footer-padding`)
   - Logo (left column), description paragraph, social icons (Twitter, Facebook, Pinterest)
   - 4 link columns: Quick Links, Shop Category, Partners, Get in Touch
   - Contact: phone, email, address
   - Bottom bar with copyright + Component Dock link

### Icon mapping (lucide — probe ALL with `typeof` before use)

| Source glyph                          | Recreation             |
| ------------------------------------- | ---------------------- |
| `fa-twitter` (FontAwesome)            | lucide `Twitter`       |
| `fa-facebook-f`                       | lucide `Facebook`      |
| `fa-pinterest-p`                      | lucide `Pin`           |
| `ti-search` (Themify)                 | lucide `Search`        |
| `flaticon-heart` (commented out)      | lucide `Heart`         |
| `fas fa-star` (FontAwesome)           | lucide `Star` (filled) |
| `flaticon-card.svg` (cart icon)       | lucide `ShoppingCart`  |

### Picsum placeholder plan

| Original asset         | Replacement                                         |
| ---------------------- | --------------------------------------------------- |
| hero1.png/hero2.png/hero3.png | `https://picsum.photos/seed/velvette-hero-1/1920/900` (×3) |
| popular1–4.png         | `https://picsum.photos/seed/velvette-cat-1/400/500` (×4)  |
| arrival1–8.png         | `https://picsum.photos/seed/velvette-arr-1/300/400` (×8)  |
| section_bg01.png       | `https://picsum.photos/seed/velvette-coll/1920/600`        |
| popular-imtes1–2.png   | `https://picsum.photos/seed/velvette-feat-1/800/500` (×2) |
| Logo (logo.png/2_footer.png) | Text-based logo "Velvette" in Cinzel font            |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/velvette` from the simplest existing app
       (`cp -r apps/<simplest> apps/velvette`), rename package to
       `@free-react-templates/velvette`, add Cinzel 400/700/900 +
       Poppins 300–900 Google Fonts `<link>` in index.html, set
       `public/CNAME` = `velvette.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Header (nav links, dropdown on hover,
       social icons, cart badge, mobile toggle), HeroSlider (3 slides,
       headline, CTA button, auto-advance, dot nav), PopularCategories
       (4 cards, labels, shop buttons, hover reveal), NewArrivals
       (heading, 8 products, ratings, prices, favorites), CollectionBanner
       (parallax, text, CTA), FeaturedProducts (2 cards, images, read more),
       Services (4 cards, icons, gray bg), Footer (columns, social,
       Component Dock link).
3. [ ] Header: sticky white header with logo text "Velvette" in Cinzel,
       nav links in Poppins uppercase, dropdown submenu with purple top
       border, social icon circles, search icon, cart badge pill,
       hamburger mobile menu.
4. [ ] HeroSlider: 3 slides with picsum backgrounds, 900px min-height,
       dark overlay, centered white heading 120px Cinzel, green accent
       subtitle, purple CTA button, dot navigation, auto-advance interval.
5. [ ] PopularCategories: 4-column grid, category images with hover
       overlay (button slides up on hover), label text.
6. [ ] NewArrivals: centered "new arrival" heading, 4-col × 2-row grid
       of 8 product cards with image, favorite icon, name, star rating,
       price. Use lucide Star filled icons.
7. [ ] CollectionBanner: full-width parallax image with dark overlay,
       centered white text, purple CTA button. Use `bg-fixed` or
       `background-attachment: fixed` for parallax effect.
8. [ ] FeaturedProducts: 2-column layout with large product images,
       text descriptions, purple CTA buttons.
9. [ ] Services: 4-column grid on gray (#f7f7fd) background, SVG icons
       from lucide, titles, descriptions.
10. [ ] Footer: logo + description, 4 link columns, social icons,
        bottom border, copyright with Component Dock link.
11. [ ] Run `npm run verify:app -- velvette` (typecheck → lint → vitest
        100% → build) and fix until green.
12. [ ] Open PR `feat/template-velvette` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (brand purple
        `#9F78FF`, Cinzel/Poppins fonts, button radius 4px, parallax
        overlay `rgba(29,37,71,0.4)`), and what differs (renamed
        "Velvette", Cinzel+Poppins via Google Fonts, lucide icons,
        picsum placeholders, text-based logo, Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1600 `[x]` +
        surge URL (`https://velvette.free.componentdock.com`),
        `npm run readme:status`, push.
