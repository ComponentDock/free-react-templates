# Emporio (ColorLib Capitalshop) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-emporio`.

## Design notes (replication findings)

- **Original:** ColorLib "Capitalshop" — free responsive Bootstrap 5 fashion
  e-commerce / online shop website template (source:
  https://colorlib.com/wp/template/capitalshop/). TEMPLATES.md lines 557
  (Bootstrap 5), 1565 (Ecommerce), 1701 (Fashion) — THREE duplicate `- [ ]`
  rows for the same source, none shipped → a REAL unprepped item (not a
  dup-row orphan). Mark ALL THREE `[x]` when the app ships.
- **Demo DOM analyzed:** REACHABLE — `https://preview.colorlib.com/theme/capitalshop/`
  returns HTTP 200 (curl, 2026-08-13, 75.4 KB HTML). Title: "Shop |
  eCommers". This is a FULL-fidelity reference: section order, copy, buttons
  all taken from the live DOM. Token source: `assets/css/style.css`
  (100.9 KB). NOTE: the shared stylesheet bundles rules for OTHER pages of
  the theme (extra colors `#1f2b7b`, `#4cd3e3`, `#f4e700`, `#38a4ff`…) —
  only the tokens listed below are used by the index page.
- **Visual design (browser vision confirmed on the screenshot
  `capitalshop-free-template.jpg`):** minimalist fashion-shop landing page,
  vibrant red `#FF2020` accent over white/black. Dark utility strip (About
  Us/Privacy/FAQ/Careers + search/wishlist/track/socials), white main header
  ("Capital Shop" logo with red shopping-bag icon + centered nav + right
  search/user/cart icons with red badge), black promo bar ("Sale Up To 50%
  Biggest Discounts… Shop Now"), full-width hero photo (male model, denim
  jacket) with red cursive "Fashion Sale" + black "Minimal Menz Style" +
  "SHOP NOW" button + carousel arrows, three square category cards
  (Men's/Women's/Baby Fashion), "Trending This Week" + Men/Women/Baby/Fashion
  filter tabs. Screenshot cuts off at the product grid — the rest (testimonial,
  You May Like, blog, services, footer) comes from the live DOM. Demo brands
  itself "Capitalshop" → recreation: **Emporio**.

## Design tokens (from the live stylesheet)

| Token             | Value                                                                                                                                                                                                                                                                                                                      | Where                                                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Brand red         | `#FF2020`                                                                                                                                                                                                                                                                                                                  | `.btn` (hero "Shop Now") bg, `.subscribe-btn` bg, `.hero-caption span` script, `.price` sale color, "New" badge, hover accents (68 uses) |
| Dark charcoal     | `#292621`                                                                                                                                                                                                                                                                                                                  | hero h1, `.btn_1` bg, product name, category-card gradient `rgba(41,38,33,0) → #292621`, `.btn_1:hover` border+text                      |
| Footer bg         | `#171613` (`.footer-wrapper`)                                                                                                                                                                                                                                                                                              | whole footer; headings white 18px; links `#BBB9B5` 16px; hover `#FF2020`                                                                 |
| Testimonial band  | `#F3EAD8` (`.testimonial-area`, cream)                                                                                                                                                                                                                                                                                     | padding 80px 0                                                                                                                           |
| Blog band         | `#F6F6F6` (`.home-blog`)                                                                                                                                                                                                                                                                                                   | padding 80px 0 29px                                                                                                                      |
| Strikethrough     | `#CEBD9C` (`.price span span`)                                                                                                                                                                                                                                                                                             | original price next to the red sale price                                                                                                |
| Body copy         | `#57667e` / `#797979` (Roboto 16px)                                                                                                                                                                                                                                                                                        | paragraphs, card copy                                                                                                                    |
| Header top border | `#edeff2`                                                                                                                                                                                                                                                                                                                  | 1px bottom border under the utility bar                                                                                                  |
| White surfaces    | `#fff` (`.header-mid`, `.properties-card`, `.header-top`)                                                                                                                                                                                                                                                                  | main header, product cards                                                                                                               |
| Fonts             | Body **"Roboto"**; headings/nav/buttons **"Jost"** (hero h1 55px 500, nav 16px 600, h2 34px 500); hero script **"Clicker Script"** cursive 50px                                                                                                                                                                            | Google Fonts `<link>` in `index.html` (Roboto 300–700 + Jost 300–600 + Clicker Script)                                                   |
| Buttons           | `.btn`: red `#FF2020` pill, white Jost 16px 500, padding 22px 32px, **radius 35px**, lh 1. `.btn_1`: `#292621` bg, white UPPERCASE 14px 500, padding 15px 47px, radius 0; hover → transparent + 1px `#292621` border + dark text. `.subscribe-btn`: red, height 60px, radius 0 (SQUARE), padding 13px 24px, white 16px 500 | hero CTA, Read More, newsletter form                                                                                                     |
| Hero              | cover bg photo, min-height 700px, center/cover; content `text-center`, flex align-items-center; span Clicker Script 50px `#FF2020`; h1 55px Jost 500 `#292621` lh 1.3                                                                                                                                                      | `.slider-bg1/2` (h1_hero1/2.jpg)                                                                                                         |
| Category cards    | `::before` bottom gradient `rgba(41,38,33,0) → #292621` height 40%; caption absolute bottom 40px (white h5 24px 600 + white 16px 300 "Shop Now"); hover scale(1.02)                                                                                                                                                        | `.items-product1`                                                                                                                        |
| Product cards     | white bg, overflow hidden; `.socal_icon` overlay (3 links: cart/heart/zoom) opacity 0 → 1 on hover; name `#292621` 16px 400; `.price` red + strikethrough `#CEBD9C`                                                                                                                                                        | `.properties` (carousel of 12)                                                                                                           |
| Tabs              | Bootstrap `.nav-tabs`: Men (active) / Women / Baby / Fashion; switching swaps `.tab-pane` product panes                                                                                                                                                                                                                    | Trending This Week                                                                                                                       |
| Section rhythm    | `section-padding` 120px 0; `latest-items` pt 95 pb 100; `home-blog` pt 80 pb 29; `testimonial-padding` 80px 0; `footer-padding` 63px 0 60px; subscribe-padding pb 40 mb 60 border-bottom `rgba(255,255,255,0.14)`                                                                                                          | —                                                                                                                                        |

## Structure (1:1 section order)

1. Header — (a) white top bar: About Us / Privacy / FAQ / Careers left, "My
   Wishlist" + "Track Your Order" + 5 social icons (fb/ig/tw/linkedin/yt)
   right; (b) white main bar: "Emporio" wordmark (red shopping-bag icon mark)
   - nav Home / Men / Women / Baby Collection (red "New" badge) / Pages
     (dropdown: Login, Cart, Product Details, Product Checkout) / Blog
     (dropdown: Blog, Blog Element, Blog Details) / Contact + search/user/cart
     icons (cart has red count badge); (c) dark promo strip: "Sale Up To 50%
     Biggest Discounts. Hurry! Limited Period Offer" + "Shop Now" link.
2. Hero slider — 2 slides (cover photos `emporio-hero-1/2`): red Clicker
   Script "Fashion Sale", h1 "Minimal Menz Style" (55px Jost 500 `#292621`),
   lorem paragraph, red pill "Shop Now" (radius 35px, padding 22px 32px);
   carousel arrows, vertically centered content.
3. Category cards — 3 photo cards (`emporio-cat-1..3`): Men's Fashion /
   Women's Fashion / Baby Fashion, dark bottom gradient overlay, white 24px
   title + white "Shop Now" link at bottom, hover scale 1.02.
4. Trending This Week — "Trending This Week" + Men (active)/Women/Baby/
   Fashion tabs; FOUR panes × products carousel of 12 cards
   (`emporio-prod-1..12`): photo + hover cart/heart/zoom icons + name +
   `$98.00` (red) / `$120.00` (strikethrough).
5. Testimonial — `#F3EAD8` band: "Customer Testimonial" + "Everybody is
   different, which is why we offer styles for every body." + avatar
   (`emporio-avatar`) + "Petey Cruiser — Designer" (NEVER "at Colorlib").
6. You May Like — "You May Like" + carousel of 4 product cards
   (`emporio-maylike-1..4`), same card kind.
7. Latest News — `#F6F6F6` band: "Latest News" + 3 blog cards
   (`emporio-blog-1..3`): photo, "Fashion Tips" tag, title, excerpt, dark
   uppercase "Read More" (→ outline on hover).
8. Services strip — 4 centered columns: icon + Fast & Free Delivery /
   Secure Payment / Money Back Guarantee / Online Support + "Free delivery
   on all orders".
9. Footer — `#171613`: subscribe row (white h3 "Subscribe Newsletter" +
   "Subscribe newsletter to get 5% on all products." + email input + red
   SQUARE "Subscribe" button + social icons fb/ig/yt); link columns: logo
   (white "Emporio" wordmark), Shop Men / Shop Women / Baby Collection (each:
   Clothing Fashion, Winter, Summer, Formal, Casual), Quick Links (Track Your
   Order, Support, FAQ, Carrier, About, Contact Us); bottom bar: "Copyright
   © <year> All rights reserved | Made with Component Dock" + mandatory link
   (https://www.componentdock.com/).

## Tasks (implementation order)

1. Scaffold `apps/emporio` (copy the simplest existing app; package
   `@free-react-templates/emporio`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json;
   verify `grep -c "free-react-templates/emporio" package-lock.json`).
3. `index.css` `@theme` tokens: `--color-brand: #FF2020`,
   `--color-charcoal: #292621`, `--color-footer: #171613`,
   `--color-testimonial: #F3EAD8`, `--color-blog: #F6F6F6`,
   `--color-strike: #CEBD9C`, `--color-copy: #57667e`,
   `--color-footer-link: #BBB9B5`, `--font-sans: 'Roboto', sans-serif`,
   `--font-heading: 'Jost', sans-serif`, `--font-script: 'Clicker Script',
cursive`.
4. `index.html`: Google Fonts `<link>` (Roboto 300–700 + Jost 300–600 +
   Clicker Script); document title "Emporio — Fashion Shop Template".
5. Components (in order): `Header` (top bar + wordmark + nav with Pages/Blog
   dropdowns + New badge + icons + promo strip + mobile menu) → `HeroSlider`
   (2 slides, carousel controls, script eyebrow + h1 + pill CTA) →
   `CategoryCards` (3 gradient-overlay cards) → `TrendingProducts` (tabs +
   12-card carousel with hover action icons + prices) → `Testimonial` →
   `MayLike` (4-card carousel) → `LatestNews` (3 blog cards + Read More) →
   `ServicesStrip` (4 features) → `Footer` (subscribe form + link columns +
   copyright); compose in `App.tsx`.
6. Data: nav links + dropdowns, category cards (3 × title), products (12 +
   4: name + price + strike), testimonials (quote + name + role), blog (3 ×
   tag + title + excerpt), services (4 × title + subline), footer widgets.
   Paraphrase the demo's repeated "Cashmere Tank + Bag" into distinct
   product names (same kind, prices stay `$98.00`/`$120.00`).
7. Icons: lucide-react — ShoppingCart, Heart, Search, User, ZoomIn, Mail;
   social brand icons (Facebook, Instagram, Twitter, Linkedin, Youtube) are
   NOT in lucide-react — use inline SVG (simple-icons paths) per the
   replication skill.
8. Placeholders: picsum seeds — `emporio-hero-1/2` (FASHION/model-style
   photos), `emporio-cat-1..3` (men/women/baby clothing),
   `emporio-prod-1..12` + `emporio-maylike-1..4` (product shots),
   `emporio-blog-1..3` (fashion editorial), `emporio-avatar`. SCREEN the
   seeds before merging (hero should look like a fashion banner, products
   like apparel; swap seeds that show faces/text/off-brand scenes; note
   chosen seed numbers in the PR).
9. Buttons: one `Button` variant "red-pill" (`#FF2020`, white text, radius
   35px, padding 22px 32px); "dark-square" variant (`#292621`, uppercase,
   radius 0, hover → 1px `#292621` outline + dark text) for Read More;
   subscribe button = red square (radius 0, height 60px).
10. TDD per section; 100% coverage; verify with `scripts/verify-app.sh
emporio` (or `npm run verify:app`).
11. PR description: source (ColorLib Capitalshop, preview URL), tokens, what
    differs (name, placeholders, paraphrased product names, inline-SVG
    socials), mark ALL THREE TEMPLATES.md dup rows (lines 557, 1565, 1701)
    `[x]` + surge URL + homepage + `npm run readme:status` after deploy.

## Fidelity pitfalls to watch

- The page is LIGHT (white surfaces, `#F6F6F6`/`#F3EAD8` bands) — the red
  `#FF2020` buttons, script, and sale prices are the color anchors; the
  footer is DARK `#171613` (not light grey — the `gray-bg` class name is
  misleading, the CSS sets `background:#171613`).
- Buttons are NOT all pills: hero "Shop Now" is a red PILL (radius 35px),
  but "Read More" `.btn_1` is a dark SQUARE (radius 0, uppercase) and the
  subscribe button is a red SQUARE (radius 0, 60px). Don't round everything.
- The hero eyebrow "Fashion Sale" is CLICKER SCRIPT cursive in red
  `#FF2020` (50px), and the h1 is `#292621` Jost 500 — the script font is
  the distinctive detail, don't drop it.
- Sale price structure: `<span>$98.00 <span>$120.00</span></span>` — red
  sale price + `#CEBD9C` strikethrough original INSIDE the same price span.
- Product cards reveal a 3-icon overlay (cart/heart/zoom) on image hover —
  the icons sit over the photo, not below it.
- The category cards use a bottom gradient `rgba(41,38,33,0) → #292621`
  (height 40%) with the white title/link at bottom 40px — match the overlay,
  don't put text below the image.
- Testimonial author in the demo is "Petey Cruiser … Designer at Colorlib" —
  the Colorlib reference MUST NOT appear in app files (provenance only in
  spec/TEMPLATES.md/PR). Use "Petey Cruiser — Designer".
- The demo repeats the IDENTICAL product ("Cashmere Tank + Bag", $98.00/
  $120.00) in all 12 Trending slots and 4 You-May-Like slots — keep the same
  KIND (apparel name + sale price + strikethrough) but paraphrase into
  distinct product names; keep prices uniform.
- The services strip sub-line is the SAME "Free delivery on all orders" on
  all four features — reproduce as-is.
- Hero slider, product carousels, and testimonial are owl/slick carousels in
  the original — implement with CSS scroll-snap or a small state-driven
  carousel (no new dependency); tests must cover any interactive control.
- The "New" badge next to "Baby Collection" is a tiny red pill (`#FF2020`,
  radius 4px, 9px text) — include it.
- The promo strip in the demo has a typo "Limited Perriod Offer" — fix to
  "Limited Period Offer" in the recreation.
- Footer link columns: Shop Men / Shop Women / Baby Collection each list the
  same five items (Clothing Fashion, Winter, Summer, Formal, Casual); Quick
  Links lists six (Track Your Order, Support, FAQ, Carrier, About, Contact
  Us). Reproduce as-is.
- Original footer credit "made with ♥ by Colorlib" → Component Dock link per
  repo conventions; wordmark is "Emporio", never "Capitalshop".
- picsum seeds are random — SCREEN them before merging (hero should look
  like a fashion banner, category cards like clothing shots, products like
  apparel).
