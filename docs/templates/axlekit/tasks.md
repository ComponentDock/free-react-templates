# AxleKit (ColorLib Automotive) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-axlekit`. Recreation name: **AxleKit** (NEW name —
> the ColorLib source keeps its name "Automotive").

## Source mapping

- **ColorLib item:** "Automotive" (TEMPLATES.md line 899).
- **Source URL:** https://colorlib.com/wp/template/automotive/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/automotive/` (HTTP 200, 37,024 bytes,
  `<title>AutoMotive | Template</title>`).
- **Preview CSS:** `css/style.css` (42,561 bytes — custom styling on top of
  Bootstrap 4) + `css/bootstrap.min.css`, `css/font-awesome.min.css`,
  `css/elegant-icons.css`, `css/nice-select.css`, `css/owl.carousel.min.css`,
  `css/slicknav.min.css`. Scripts: `js/jquery-3.3.1.min.js`,
  `js/bootstrap.min.js`, `js/owl.carousel.min.js`, `js/main.js`.
  Fonts: **Public Sans** (Google Fonts, 400–900).
- **Screenshot:** `automotive-free-template.jpg` — dark industrial hero,
  blue-purple accents, professional automotive garage aesthetic.

## Reference research (done — do not redo)

### Screenshot (automotive-free-template.jpg)

Browsed visually. Professional automotive garage landing page. Dark moody
hero photo with white "Welcome To / Auto-Motive Garage" headline and
blue-purple CTA button. White "What We Do?" services section with four
alternating text/image cards. Split-image "We Have 20 Years Of Experience"
choose-us section. Four product cards with hover overlays. Testimonial
carousel on white. Dark parallax stat counters (560+). Three blog cards.
Multi-column dark footer with contact info. Blue-purple `#5F67FF` is the
consistent accent throughout.

### Design tokens (live stylesheet + rendered page)

| Token         | Value                                  | Use                                                                                      |
| ------------- | -------------------------------------- | ---------------------------------------------------------------------------------------- |
| Brand         | `#5F67FF` (blue-purple)                | `.primary-btn` bg, testimonial icons, counter numbers, active nav underline              |
| Ink           | `#111111`                              | Body text (Public Sans base)                                                             |
| Ink light     | `#727171`                              | Secondary/muted text                                                                     |
| Heading       | `#353535`                              | Section headings, testimonial text, widget headings                                      |
| White         | `#ffffff`                              | Card/section backgrounds, button text                                                    |
| Dark bg       | `#25282C`                              | Footer widget background                                                                 |
| Dark mid      | `#353535`                              | Counter section overlay                                                                  |
| Muted dot     | `#b5b5b5`                              | Testimonial inactive carousel dots                                                       |
| Footer text   | `#8d8d8d`, `#b4b4b4`                  | Footer secondary/label text                                                              |
| Font          | 'Public Sans', sans-serif (400–900)    | Google Fonts `<link>`; body base 14px/1.6                                                |
| Button        | `#5F67FF` bg, `#fff` text, radius 2px | `.primary-btn` — sharp corners, not rounded                                              |
| Section pad   | `.spad` = 60px top/bottom              | Standard section vertical spacing                                                        |
| Product grid  | 4 cols lg, 3 md, 2 sm                  | Responsive product cards                                                                 |
| Card style    | No border-radius (square)              | Product cards are sharp-cornered                                                         |
| Footer bg     | Dark image `set-bg` pattern            | Background image with dark overlay                                                       |

### Section order (from live DOM)

1. **Header** — top contact bar (dark, phone/hours/social) + white nav bar
   (logo, Home active, Services, Shop, Pages dropdown, Blog, search/cart)
2. **Hero** — full-width dark photo bg, "Welcome To / Auto-Motive Garage",
   subtext, `.primary-btn` "Our Services"
3. **Services** — "What We Do?" title, 4 items alternating text+image via
   `order-lg-*`: Engine Overhaul, Power Steering, Oil Change, Upgrades Car
4. **Choose Us** — `container-fluid`, left photo, right text with checklist
   (4 items with `icon_check`) + "About Us" CTA
5. **Products** — "Our Products" title, 4 product cards (High Flow Fuel,
   Revolution Wheels, Tone Interior Kit, Matte Gunmetal) with hover actions
   (heart/eye/exchange), $800.00 price, "+Add To Cart"
6. **Testimonial** — white bg, owl-carousel, 3 quote items with `#5F67FF`
   quotation icons, dot nav
7. **Counter** — "About Our Statistics" on dark image bg, 4 stat items
   (560+ each): All Project, Project Completed, Customers Action, Awards
   Winner; blue-purple numbers, white labels
8. **Latest News** — "Latest News" title, 3 blog cards with background
   images, author/date overlay, title, excerpt, "Continue Reading"
9. **Footer** — dark image bg, 3 top contact items (Booking/Phone/Location),
   4-col body (About + Quick Links + News + Address), copyright bar with
   social icons

### Icon mapping (lucide — replace Font Awesome + Elegant Icons)

| Source glyph                     | Recreation                  |
| -------------------------------- | --------------------------- |
| `icon_mobile` (phone)            | lucide `Phone`              |
| `icon_clock_alt` (clock)         | lucide `Clock`              |
| `icon_search` (magnifier)        | lucide `Search`             |
| `icon_cart_alt` (cart)           | lucide `ShoppingCart`        |
| `icon_check` (checkmark)         | lucide `Check`              |
| `icon_quotations` (quote mark)   | lucide `Quote`              |
| `social_facebook/twitter/etc`    | lucide `Facebook`/`Twitter` |
| `fa fa-bars` (hamburger)         | lucide `Menu`               |
| `fa fa-heart` (product hover)    | lucide `Heart`              |
| `fa fa-eye` (product hover)      | lucide `Eye`                |
| `fa fa-exchange` (product hover) | lucide `ArrowLeftRight`     |
| `arrow_right`                    | lucide `ArrowRight`         |
| `icon_phone` (footer CTA)        | lucide `Phone`              |

### Picsum placeholder plan

| Section        | Seed pattern                              | Dimensions     | Count |
| -------------- | ----------------------------------------- | -------------- | ----- |
| Hero bg        | `axlekit-hero`                            | 1920×1080      | 1     |
| Service photos | `axlekit-svc-1` through `axlekit-svc-4`   | 600×400        | 4     |
| Choose Us bg   | `axlekit-choose`                          | 960×600        | 1     |
| Product photos | `axlekit-prod-1` through `axlekit-prod-4` | 400×300        | 4     |
| Blog photos    | `axlekit-blog-1` through `axlekit-blog-3` | 600×400        | 3     |
| Counter bg     | `axlekit-counter`                         | 1920×600       | 1     |
| Footer bg      | `axlekit-footer`                          | 1920×600       | 1     |
| Logo placeholder | `axlekit-logo`                          | 200×60         | 1     |
| Footer logo    | `axlekit-footer-logo`                     | 200×60         | 1     |

**Total: 17 picsum images** (no ColorLib assets used).

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/axlekit` from the simplest existing app
       (`cp -r apps/<simplest> apps/axlekit`), rename package to
       `@free-react-templates/axlekit`, add Public Sans 400–900
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `axlekit.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Header (top bar with phone/hours +
       nav with active Home link), Hero (dark bg, heading, subtext,
       CTA button), Services (4 alternating items with correct
       order-lg pattern), ChooseUs (split layout, checklist, CTA),
       Products (4 cards with hover actions, prices), Testimonial
       (carousel with 3 quotes), Counter (4 stat items on dark bg),
       LatestNews (3 blog cards), Footer (3 top items, 4-col body,
       Component Dock link, copyright).
3. [ ] Layout shell: two-tier header (dark top bar + white nav),
       full-width sections with `.spad` padding (60px top/bottom),
       responsive container widths. Set up the `@theme` block with
       brand color `#5F67FF` and dark section colors.
4. [ ] Hero section: full-width dark photo background (picsum seed
       `axlekit-hero`), white text overlay (left-aligned), CTA button
       with `#5F67FF` bg, 2px radius, white text.
5. [ ] Services section: "What We Do?" centered title+subtitle, 4
       service items in a responsive grid. Each item alternates
       between text (lucide icon + bold title + description) and a
       photo. Use CSS grid or flexbox with order properties to
       replicate the alternating `order-lg-*` pattern.
6. [ ] Choose Us section: `container-fluid`, left half background
       image, right half (`col-lg-7 offset-lg-5`) with section title,
       4 checklist items (lucide `Check` + text), and "About Us"
       `.primary-btn`.
7. [ ] Products section: "Our Products" title, 4 product cards in
       responsive grid. Each card: product image, hover overlay with
       heart/eye/exchange icons (lucide), product name, price, and
       "+Add To Cart" link.
8. [ ] Testimonial section: white bg, carousel with 3 quote items
       (lucide `Quote` icon in `#5F67FF` + paragraph text), dot
       navigation.
9. [ ] Counter section: dark image bg, "About Our Statistics" title,
       4 stat items with lucide icons, blue-purple numbers (560+),
       white labels.
10. [ ] Latest News section: 3 blog cards with background images,
       author/date overlay, title, excerpt, "Continue Reading" link.
11. [ ] Footer: dark image bg, 3 top contact items (Booking/Phone/
       Location), 4-column body (About + Quick Links + News +
       Address), copyright bar with social icons. Footer MUST link
       `https://www.componentdock.com/` as "Component Dock".
12. [ ] Run `npm run verify:app -- axlekit` (typecheck → lint → vitest
       100% → build) and fix until green.
13. [ ] Open PR `feat/template-axlekit` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview URL, token list (`#5F67FF` brand,
       Public Sans, dark sections, sharp-corner buttons), and what
       differs (renamed "AxleKit", Public Sans via Google Fonts,
       lucide icons, picsum placeholders, Component Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 899 `[x]` +
       surge URL (`https://axlekit.free.componentdock.com`),
       `npm run readme:status`, push.
