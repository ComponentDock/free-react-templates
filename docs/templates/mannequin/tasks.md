# Mannequin (ColorLib Coza Store) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-mannequin`. Note: "Coza Store" has THREE rows in
> TEMPLATES.md (duplicate slug) — when implemented, mark ALL rows `[x]`
> with the same live URL (see memory: duplicate rows of one ColorLib
> slug). The WP slug is `coza-store` but the live preview theme slug is
> `cozastore` (no hyphen — `/theme/coza-store/` 404s).

## Design notes (replication findings)

- **Original:** ColorLib "Coza Store" — fashion e-commerce store site
  (source: https://colorlib.com/wp/template/coza-store/). Bootstrap 5 +
  jQuery + Swiper (hero) + ShuffleJS (product filtering) + glightbox.
- **Preview analyzed:** https://preview.colorlib.com/theme/cozastore/
  (HTTP 200, ~57 KB HTML; `css/main.css` ~67 KB + `css/util.css`
  ~173 KB parsed in full). Screenshot `cozastore-free-template.jpg`
  (1200x946, AVIF → PNG) viewed in browser: black topbar, white header
  with COZA STORE logo + centered nav (Shop carries a NEW badge), hero
  photo of a male model in all black on an off-white textured wall with
  left text "Men Collection 2018 / NEW ARRIVALS" + periwinkle SHOP NOW
  pill; 3 category cards below (Women "Spring 2019", Men "Spring
  2018", Accessories "New Trend"). Minimalist high-fashion aesthetic.
- **Visual design:** white-space-heavy editorial fashion store. Brand
  periwinkle `#717fe0` (all primary pills: Shop Now, Add to cart,
  Subscribe; icon/footer-link hover). Ink `#222` (topbar + footer +
  button hover). Headings Playfair Display Bold 60px uppercase (hero),
  Poppins for everything else (body 15px `#666`, labels 28px, section
  heading 50px Bold, product names 14px), Montserrat Bold 15px
  uppercase for footer column headings. Pill buttons radius 23px,
  height 46px.
- **Structure (1:1, section order, home page):**
  1. Topbar (`div.top-bar`, h 40px, bg `#222`): "Free shipping for
     standard order over $100" left; Help & FAQs / My Account / EN /
     USD right.
  2. Sticky header (fixed, top 40px, h 84px, transparent over hero →
     solid + shadow on scroll): logo (image; text wordmark here), nav
     Home (dropdown Homepage 1/2/3) / Shop / Features ("hot" badge) /
     Blog / About / Contact, icons right (26px): search, cart (count
     badge), account. Mobile hamburger.
  3. Hero slider (3 slides, h `calc(100vh - 40px)`, cover photos
     slide-01..03.jpg): left-aligned VC content in 3 animated layers —
     label 28px ("Women Collection 2030" / "Men New-Season" / "Men
     Collection 2030"), h2 Playfair Bold 60px uppercase ("NEW SEASON" /
     "Jackets & Coats" / "New arrivals"), "Shop Now" pill (bg
     `#717fe0`, radius 23px, hover black). Arrows + dots bottom.
  4. Product section (bg0, p-t-23 p-b-140): h2 "New arrivals" (Poppins
     Bold 50px); filter buttons All Products / Women / Men / Bag /
     Shoes / Watches (15px `#888`, underline hover, active state);
     grid of 16 cards (4 cols desktop): image + hover quick-view +
     wishlist hearts + slide-up "Add to cart" pill; name (14px) +
     price; "Load More" pill (bg `#e6e6e6`, text `#222`). Filtering is
     functional (products carry women/men/bag/shoes/watches tags).
  5. Banner (bg0, p-t-80 p-b-50): 3 image cards (col-xl-4): name 28px
     Bold `#333` (Women / Men / Accessories) + info 14px `#555`
     (Spring 2030 / Spring 2030 / New Trend); hover reveals "Shop Now".
  6. Footer (bg `#222`, p-t-75 p-b-32): 4 columns — Categories (Women,
     Men, Shoes, Watches), Help (Track Order, Returns, Shipping,
     FAQs), GET IN TOUCH (address "8th floor, 379 Hudson St, New York,
     NY 10018", phone, socials facebook/instagram/pinterest), Newsletter
     (underline email input + Subscribe pill, hover white bg + brand
     text). Column links 13px `#b2b2b2` hover brand. Bottom bar:
     copyright → Component Dock credit line (NOT ColorLib).
  7. Overlays: cart dropdown (3 items, Total, View Cart + Check Out),
     search modal, product quick-view modal (image, name, price,
     description, Size S/M/L/XL, Add to cart).
- **Tokens:** brand `#717fe0`; ink `#222`; text `#333/#666/#888/#b2b2b2`;
  surfaces white / `#e6e6e6` (Load More) / `#f3f3f3`; fonts Poppins
  (400/500/700) + Playfair Display (700) + Montserrat (700); pill
  radius 23px, button h 46px (min-width 161/179px); topbar h 40px;
  header h 84px; hero h `100vh - 40px`; section paddings p-t-23
  p-b-140 / p-t-80 p-b-50 / p-t-75 p-b-32; footer link rows p-b-10.

## Task outline (for the implementer)

1. Scaffold `apps/mannequin` (copy simplest existing app; package
   `@free-react-templates/mannequin`; CNAME
   `mannequin.free.componentdock.com`; homepage
   `https://mannequin.free.componentdock.com`; run `npm install` at
   root so the lockfile registers the workspace; keep
   `injectUiSource()` in `vite.config.ts`; copy the MemoryStorage
   polyfill from `apps/cura/src/test/setup.ts` if jsdom 30 lacks
   localStorage).
2. `index.html`: title "Mannequin — Fashion Store Template"; Google
   Fonts `<link>` for Poppins (400, 500, 700), Playfair Display (700),
   Montserrat (700).
3. `src/index.css` `@theme`: `--color-brand: #717fe0; --color-ink:
#222; --color-ink-soft: #333; --color-muted: #888; --color-fade:
#b2b2b2; --color-loadmore: #e6e6e6;` body font Poppins 15px `#666`,
   headings Playfair Display (hero) / Poppins (section).
4. Components (TDD, 100% coverage):
   - `Topbar.tsx` — 40px `#222` bar: shipping message + Help & FAQs /
     My Account / USD links.
   - `Header.tsx` — fixed bar: wordmark, links (Home dropdown
     optional), icon buttons (search, cart w/ badge, account), mobile
     hamburger (`aria-expanded`).
   - `HeroSlider.tsx` — 3 slides (label, Playfair headline, Shop Now
     pill), prev/next + dots, autoplay optional.
   - `ProductGrid.tsx` — "New arrivals" heading, 6 filter buttons
     (functional filtering), 16 `ProductCard`s, Load More pill.
   - `ProductCard.tsx` — image (picsum seed), name, price, hover
     slide-up "Add to cart", quick-view + wishlist controls.
   - `Banner.tsx` — 3 image cards (Women / Men / Accessories +
     season labels, hover Shop Now).
   - `Footer.tsx` — 4 dark columns + newsletter form (label, input,
     Subscribe) + copyright bar with Component Dock credit.
   - `CartDrawer.tsx` — dropdown with items, total, View Cart / Check
     Out buttons.
   - `QuickViewModal.tsx` — product detail modal with Size select
     (S/M/L/XL) + Add to cart.
5. Placeholder images `picsum.photos/seed/mannequin-<n>/<w>/<h>` —
   SCREEN the hero + banner seeds first (skill: seed-screening; picsum
   has no fashion models — prefer editorial/lifestyle/abstract seeds
   and note the deviation); icons from lucide-react (Search,
   ShoppingCart, Heart, User, Menu, ChevronLeft, ChevronRight, X, Eye);
   brand social icons as inline SVG (simple-icons paths — lucide-react
   removed brand icons); no colorlib references anywhere in `apps/`.
6. Gate: `bash scripts/verify-app.sh mannequin` (typecheck + lint +
   100% coverage tests + build); commit `feat: Mannequin — Fashion
eCommerce template (ColorLib Coza Store)` on
   `feat/template-mannequin`; PR to main with source slug, preview URL
   (note `cozastore` spelling), tokens, and diffs (paraphrased copy,
   picsum fashion-subject substitution, Component Dock credit); merge
   immediately.
7. Bookkeeping: mark ALL THREE "Coza Store" rows in TEMPLATES.md `[x]`
   with `https://mannequin.free.componentdock.com` + `npm run
readme:status`.
