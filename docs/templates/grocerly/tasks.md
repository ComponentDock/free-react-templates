# Grocerly (ColorLib Ogani) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Grocerly** (NEW name —
> the ColorLib source keeps its name "Ogani"). Implementation ships on
> `feat/template-grocerly` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Ogani" — free fresh-grocery / organic food store
  website template (source: https://colorlib.com/wp/template/ogani/).
  TEMPLATES.md rows: line 468 (**Bootstrap (216)** category) + dup rows at
  lines 1114 (Business), 1592 (Ecommerce), 1787 (Food Drinks) — all
  `- [ ]`, not shipped anywhere. Mark all four `[x]` at ship time.
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-12):**
  `https://preview.colorlib.com/theme/ogani/` (HTTP 200, 49KB HTML) +
  `css/style.css` (56KB — token source; other stylesheets are vendors).
  Screenshot (`ogani-free-template.jpeg`, 1200×946) browser-verified
  2026-08-12: white/light-gray layout, leafy-green `#7fad39` accents,
  vegetable photo hero, category strip, featured grid with filter tabs.
- **Structure observed (1:1):** header (top bar bg `#f5f5f5`:
  "hello@colorlib.com" | "Free Shipping for all Order of $99" left;
  language selector English/Spanish + Login + social right; mid row white:
  logo image → text wordmark, nav Home [active]/Shop/Pages▾ [Shop Details,
  Shoping Cart, Check Out, Blog Details]/Blog/Contact, cart heart(1) +
  bag(3) + "item: $150.00"; hamburger for mobile) → hero row (col-lg-3
  green `#7fad39` "All departments" dropdown [Fresh Meat, Vegetables, Fruit
  & Nut Gifts, Fresh Berries, Ocean Foods, Butter & Eggs, Fastfood, Fresh
  Onion, Papayaya & Crisps, Oatmeal, Fresh Bananas]; col-lg-6 search input
  - "All Categories" select + green SEARCH; col-lg-3 phone icon + h5
    "+65 11.188.888" + "support 24/7 time") → hero banner (`.hero__item`
    431px, bg img/hero/banner.jpg, padding-left 75px; span "FRUIT FRESH"
    green + h2 "Vegetable / 100% Organic" `#1c1c1c` bold + p "Free Pickup and
    Delivery Available" `#6f6f6f` + `.primary-btn` "SHOP NOW" uppercase
    letter-spacing 2px) → categories (owl slider, 5 × 270px photo cards:
    Fresh Fruit, Dried Fruit, Vegetables, drink fruits, drink fruits; label
    h5 18px `#1c1c1c` weight 700 centered bottom 20px) → featured (spad;
    section-title "Featured Product" `#1c1c1c` 700 + 4px×80px green underline
    :after bottom -15px; controls tabs All [active]/Oranges/Fresh Meat/
    Vegetables/Fastfood; 8 × featured__item cards col-lg-3: pic 270px +
    hover icon ul [heart/retweet/shopping-cart] slides bottom -50px → 20px
    (0.5s) + text h6 title + h5 $30.00) → banner band (2 × col-lg-6 images
  banner-1/2.jpg) → latest-product (spad; 3 × col-lg-4 h4 columns "Latest
  Products"/"Top Rated Products"/"Review Products", each 2 owl slides × 3
  small rows [pic + h6 + span $30.00]) → from-blog (spad; section-title
    "From The Blog"; 3 × blog__item: pic 270px + chip [calendar icon "May
    4,2019" + comment icon "5"] + h5 title + p excerpt) → footer (spad, bg
    `#F3F6FA`, padding-top 70px; col-lg-3 footer__about [wordmark + Address:
    60-49 Road 11378 New York / Phone: +65 11.188.888 / Email:
    hello@colorlib.com, 16px `#1c1c1c` line-height 36px]; col-lg-4
    offset-lg-1 footer__widget "Useful Links" h6 + TWO ul lists [About Us,
    About Our Shop, Secure Shopping, Delivery infomation, Privacy Policy,
    Our Sitemap | Who We Are, Our Services, Projects, Contact, Innovation,
    Testimonials]; col-lg-4 footer__widget "Join Our Newsletter Now" + p +
    form [input "Enter your mail" + site-btn Subscribe] + social icons;
    footer__copyright border-top 1px `#ebebeb` padding 15px 0 margin-top
    20px: 14px `#1c1c1c` copyright + payment icons right).
- **Design tokens:** brand green **#7fad39** (site-btn/primary-btn bg,
  departments bar bg, search btn, hero "FRUIT FRESH" span, section-title
  underline, hover icon accent); ink **#1c1c1c** (headings/body, 67 uses);
  secondary **#6f6f6f**; top bar **#f5f5f5**; footer **#F3F6FA**; borders
  **#ebebeb**/`#e1e1e1`; sale red `#dd2222` (not on index page — skip);
  fonts **Cairo** 400/700/800 via Google Fonts; `.site-btn` 14px weight 800
  uppercase padding 13px 30px 12px radius 0; `.primary-btn` 14px weight 700
  uppercase letter-spacing 2px padding 10px 28px radius 0; section-title
  margin-bottom 50px; banner height 431px; product pic 270px; footer text
  16px/36px.
- **Design approach:** clean light grocery storefront, green accents,
  photo-driven sections, square uppercase green buttons. Paraphrase lorem
  copy but keep the same content kinds (departments, product names/prices,
  blog posts, footer links). Featured tabs filter client-side (original
  uses MixItUp). Category strip + latest columns render as static grids
  (original owl sliders — carousel optional per repo conventions).
- **Placeholders:** seeded picsum — `grocerly-hero` (subject-critical:
  fresh vegetables on wooden surface per screenshot — SCREEN the seed),
  `grocerly-cat-<n>` (n 1..5: oranges, dried fruit, greens, juice),
  `grocerly-featured-<n>` (n 1..8: produce close-ups), `grocerly-banner-<n>`
  (n 1..2: promo produce), `grocerly-latest-<n>` (n 1..3), `grocerly-blog-<n>`
  (n 1..3: cooking/farm scenes).
- **Icons:** lucide-react — `Menu`, `Heart`, `ShoppingBag`, `ShoppingCart`,
  `RefreshCw` (retweet/compare), `Search`, `Phone`, `Mail`, `MapPin`,
  `Calendar`, `MessageSquare` (comments), `ChevronDown`, `Globe` (language),
  `User` (login), `Facebook`, `Twitter`, `Instagram`, `Pinterest` (inline
  SVG brand icons — lucide removed brand icons), `CreditCard` (payment).

## Implementation tasks

1. **Scaffold** — `apps/grocerly` from the simplest existing app; rename
   package to `@free-react-templates/grocerly`; register in root
   `package.json` workspaces + lockfile (implementer handles lockfile, prep
   never touches it).
2. **Theme tokens** — add `#7fad39` / `#1c1c1c` / `#6f6f6f` / `#f5f5f5` /
   `#F3F6FA` / `#ebebeb` to `@theme`; Cairo Google Fonts `<link>` in
   `index.html`.
3. **Components** (per section, TDD — tests first):
   - `Header` — top bar (email + free-shipping | language + Login +
     social), mid row (wordmark, nav with Pages dropdown, cart counts +
     item total), mobile hamburger offcanvas (`aria-expanded`).
   - `HeroRow` — departments dropdown (green bar, 11 links), search bar +
     category select + SEARCH, phone block.
   - `HeroBanner` — photo bg, FRUIT FRESH span, H2, support line, SHOP NOW.
   - `Categories` — 5 photo cards with bottom labels.
   - `FeaturedProducts` — section title + filter tabs + 8 cards, client-
     side tab filtering, hover/focus action icons slide-up.
   - `BannerBand` — 2 side-by-side images.
   - `LatestProducts` — 3 columns × 6 small rows (shared row component).
   - `BlogSection` — 3 post cards (pic, date/comment chip, title, excerpt).
   - `Footer` — About / Useful Links (two lists) / Newsletter form
     (validation) / social / copyright bar.
4. **Compose** `App`/page in reference order.
5. **Verify** — `scripts/verify-app.sh grocerly` (typecheck + lint + vitest
   100% coverage + build), then PR → immediate squash merge per pipeline.
6. **Ship bookkeeping** — mark all four Ogani rows `[~]`→`[x]` (lines 468,
   1114, 1592, 1787) + surge URL + `npm run readme:status`; PR description
   must list source template, preview URL, tokens, placeholder images.
