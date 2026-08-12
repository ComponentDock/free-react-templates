# Velvet (ColorLib "Essence") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-velvet` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Essence" — free fashion ecommerce HTML template
  (source: https://colorlib.com/wp/template/essence/). Listed in
  TEMPLATES.md under **Bootstrap (216)** at line 387; duplicate row at
  line 1573 under **Ecommerce (56)** — same template, ONE app only. Mark
  BOTH rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/essence/`. DOM fetched
  (`/tmp/essence-preview.html`, 28,117 bytes, title "Essence - Fashion
  Ecommerce Template") + stylesheet `css/core-style.css`
  (`/tmp/essence-core.css`, 56,707 bytes — the real token source;
  `style.css` is a 610-byte stub) + TEMPLATES.md screenshot
  (`essence-free-template.jpg`, AVIF 65,777 bytes → viewed in browser at
  1200×946).
- **Aesthetic:** minimalist, clean, modern fashion ecommerce. White
  canvas, black text, ONE saturated accent: royal blue `#0315ff`
  (buttons, count badge, hovers) with pink `#dc0345` for hover/sale
  accents. ALL corners sharp (border-radius 0) — no rounded buttons,
  cards, or badges. Header is FIXED (body margin-top 85px) with a
  search input visible in the bar (not icon-only). Hero is mostly white
  with a subtle geometric line/triangle pattern and a model photo;
  category tiles are photos under a white `rgba(255,255,255,0.6)` wash
  with bold uppercase black labels; CTA band is right-aligned on a photo.
- **Fonts:** Google **Poppins** (300/400/500/600/700) = body (14px);
  **Ubuntu** (300/400/500/700) = headings, prices, badges, cart summary.
  Load both via `<link>`s in `index.html`.
- **Buttons (`.essence-btn`):** min-width 170px, height 50px, padding
  0 40px, radius 0, white 12px UPPERCASE, letter-spacing 1.5px, weight
  600, bg `#0315ff`, hover bg `#dc0345`. Full-width in product
  hover-content and cart checkout. NOTE: source markup says "view
  collection" (lowercase) — CSS uppercases it; write uppercase in
  data.ts directly.
- **Copy is placeholder and inconsistent:** hero h6 "asoss" (a made-up
  brand line), product brands "topshop"/"mango", the cart has the SAME
  item 3× ("Mango / Button Through Strap Mini Dress / Size: S / Color:
  Red / $45.00") and the summary subtotal $274.00 doesn't match 3×$45 —
  paraphrase freely, invent 3–4 varied cart items, fix the math, keep
  the kinds (4 dresses, offer + new badges, 3 cart items, summary rows).
- **DOM oddities:** (1) nav has NO top-level "Home" — it is Shop (mega
  menu) / Pages (dropdown) / Blog / Contact; "Home" appears only inside
  the Pages dropdown; (2) the mega menu contains a promo image column
  (`.single-mega img`) — include a decorative promo slot; (3) the
  product grid is an owl-carousel but has no visible arrows in the
  source — a static responsive grid (4 → 2 → 1) is faithful; (4) the
  favourite heart is a font-awesome `.favme` link — use lucide Heart,
  toggle class on click is optional (decorative); (5) brands strip uses
  grayscale logo IMAGES — do not copy them; render text wordmarks or
  inline SVG marks; (6) the hero "background-overlay" wash has no rule
  in core-style.css (it's a theme utility) — screenshot shows it near-
  white, so a very light wash keeps text legible; (7) cart opens via
  `#essenceCartBtn`, closes via `.cart-bg-overlay` + `#rightSideCart`.

## Structure (top → bottom, single page)

1. **Header** (`.header_area`, FIXED; `body { margin-top: 85px }`) —
   left `.classy-navbar`: brand wordmark (screenshot shows bold black
   "ESSENCE" text; render "velvet" — lowercase wordmark or bold caps,
   pick one and keep it); nav links (16px `#787878`, hover `#000000`):
   **Shop** → mega menu (3 `.single-mega` columns: Women's Collection
   [Dresses / Blouses & Shirts / T-shirts / Rompers / Bras & Panties],
   Men's Collection [T-Shirts / Polo / Shirts / Jackets / Trench], Kid's
   Collection [Dresses / Shirts / T-shirts / Jackets / Trench] + promo
   image), **Pages** → dropdown (Home / Shop / Product Details /
   Checkout / Blog / Single Blog / Regular Page / Contact), **Blog**,
   **Contact**. Right `.header-meta` (heights 85px / 40px mobile):
   search form (200px input, white bg, no border, border-left
   `#ebebeb`, placeholder "Type for search" — decorative submit), heart
   icon, user icon, bag icon (90px blocks / 50px mobile, badge span
   Ubuntu 18px `#0315ff` "3") → opens cart drawer.
2. **Cart drawer** (`.right-side-cart-area` + `.cart-bg-overlay`) —
   off-canvas right panel: 3 `.single-cart-item` (thumb + name h6 +
   size/color meta + price) — VARY the items; `.cart-amount-summary`
   (h2 "Summary" + 4 rows: subtotal / delivery "Free" / discount "-15%"
   / total) + `.checkout-btn` full-width essence-btn "check out".
3. **Hero** (`.welcome_area`, 600px / 450px tablet / 350px mobile,
   bg-img + light overlay) — `.hero-content`: h6 brand line (18px
   `#787878`, mb 10 — paraphrase "asoss" → e.g. "Velvet" or a
   collection tag) + h2 "New Collection" (60px `#000`, mb 50, 48px
   tablet / 30px mobile) + blue essence-btn "VIEW COLLECTION".
4. **Category tiles** (`.top_catagory_area.section-padding-80`) — 3 ×
   `.single_catagory_area` (240px / 180px, photo bg + white .6 wash,
   centered): uppercase 30px weight 700 black label (20px / 18px
   responsive), hover `#0315ff`: **Clothing** / **Shoes** /
   **Accessories**.
5. **Global Sale CTA** (`.cta-area .cta-content`, 550px / 400px mobile,
   photo bg + overlay, content right-aligned) — `.cta--text`
   (padding-right 150px / 50px tablet): h6 "-60%" (24px `#dc0345`,
   mb 10) + h2 "Global Sale" (60px `#000`, mb 50) + blue "Buy Now".
6. **Popular Products** (`.new_arrivals_area.section-padding-80`,
   white) — `.section-heading h2` "Popular Products" (30px, weight 600,
   capitalize, mb 50); 4 `.single-product-wrapper` cards (grid 4 → 2 →
   1; source uses owl-carousel without arrows — plain grid is faithful):
   `.product-img` (main img + `.hover-img` swap on hover) + heart
   `.favme` (absolute, `#ccc`) + `.product-badge` (25px tall, 12px
   Ubuntu 700, padding 0 10px; black default, offer → `#dc0345`, new →
   `#0315ff`); `.product-description` (pt 25px): brand span (10px
   uppercase `#787878`, mb 15) + name h6 (link, `#222222`, mb 5) +
   `p.product-price` (14px Ubuntu 700 `#000`; sale: struck `#aaaaaa`
   old + current) + `.hover-content` (absolute top -70px, opacity 0 →
   hover visible): full-width essence-btn "Add to Cart". Products:
   topshop "Knot Front Mini Dress" $80.00 / topshop "Poplin Displaced
   Wrap Dress" $80.00 / mango "PETITE Crepe Wrap Mini Dress" $75.00 →
   $55.00 (-30% offer) / mango "PETITE Belted Jumper Dress" $80.00
   ("New"). Paraphrase brands + names.
7. **Brands** (`.brands-area`, bg `#f5f7f9`, padding 100px 5% / 70px
   mobile, flex space-between, wraps 3-per-row mobile) — 6 brand marks
   (max-width 120px / 90px / 80px): text wordmarks or inline SVG marks.
8. **Footer** (`.footer_area`, bg `#252525`, padding 70px 0 60px) —
   widget 1: `.footer-logo` + `.footer_menu` (flex row: Shop / Blog /
   Contact, white); widget 2: `.footer_widget_menu` 6 links (Order
   Status / Payment Options / Shipping and Delivery / Guides / Privacy
   Policy / Terms of Use); `.footer_heading h6` "Subscribe" +
   `.subscribtion_form` (270px): transparent input, NO border box —
   `border-bottom: 2px solid rgba(255,255,255,0.6)`, white text 12px,
   height 35px, focus border white; 30×35px icon submit; `.footer_
social_area` (white 16px icons, padding 0 10px); bottom copyright
   bar: "Copyright © <year> All rights reserved | This template is made
   with ♥ by **Component Dock**" → https://www.componentdock.com/
   (replaces Colorlib credit, NO ColorLib credit).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/velvet`; `npm install` at repo root; CNAME + homepage `velvet.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#0315ff`, accent
      `#dc0345`, ink `#000000`, heading `#222222`, muted `#787878`,
      faint `#aaaaaa`, heart `#ccc`, soft `#f5f7f9`, line `#ebebeb`,
      footer `#252525`; Google Fonts `<link>`s (Poppins 300–700 +
      Ubuntu 300/400/500/700); body pt 85px for the fixed header
- [ ] `src/data.ts` — nav (Shop mega: 3 collections × 5 links + promo;
      Pages dropdown: 8 links; Blog; Contact), hero (brand line +
      headline + CTA), categories (3), CTA band, products (4 with brand/
      name/price/oldPrice/badge), brands (6 wordmarks), footer (menu 3 /
      widget 6 / newsletter / socials), cart (3 varied items + summary
      rows)
- [ ] Components: `Header` (fixed bar + Shop mega menu + Pages dropdown + hamburger), `CartDrawer` (off-canvas + overlay close + summary +
      checkout), `Hero`, `Categories`, `SaleCta`, `PopularProducts`
      (cards + hover image + badge + hover Add to Cart), `Brands`,
      `Footer` (widgets + underline newsletter + Component Dock credit)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (mega menu open, Pages dropdown, mobile nav toggle, cart
      drawer open/close, newsletter submit — assert input unmounts via
      `queryByLabelText` if the form swaps to a success message)
- [ ] Subject-screen picsum seeds (hero bg wide — fashion/model subject;
      category 1–3 — clothing/shoes/bag; CTA bg wide; product 1–4 main +
      hover; cart thumbs; brands small) — pixel metric + browser verify;
      pin seeds in PR
- [ ] `bash scripts/verify-app.sh velvet` green; PR with source, preview
      URL, tokens, deviations (React mega menu / cart drawer / mobile
      nav / plain grid instead of owl-carousel / text brand marks /
      Component Dock credit); squash-merge immediately
- [ ] After merge: mark BOTH TEMPLATES.md Essence rows `[x]` + surge URL
      (lines 387 and 1573 — Bootstrap 216 / Ecommerce 56);
      `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop
  nav lists are `display:none` and getByRole excludes them — query
  desktop-only links with `{ hidden: true }`; CSS `uppercase` does NOT
  change accessible names — query the RAW text.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- lucide-react REMOVED brand icons (Facebook/Instagram/Linkedin →
  undefined) — verify exports with `node -e "console.log(typeof
require('lucide-react').Instagram)"`; use inline SVG brand paths
  (simple-icons) for the footer socials, lucide for everything else
  (Search, Heart, User, ShoppingBag, Menu, X, ChevronDown, Mail,
  ArrowRight/Send, CreditCard, Package, Truck, RotateCcw, ShieldCheck).
- The header search input is a REAL text input (200px, white, no
  border) with placeholder "Type for search" — not an icon button; the
  submit can be decorative (no search results page exists).
- Mega menu + dropdowns: the source uses classy-nav; implement with
  React state (group-hover on desktop, click-toggle on mobile), keep
  the 3 collection columns + promo image. Mobile: hamburger → nav
  toggle with the same links.
- Product hover: `.hover-content` is absolutely positioned at
  top -70px and fades/slides in on card hover (Tailwind `group` +
  `group-hover:opacity-100`); the hover IMAGE swap needs both imgs in
  the DOM (opacity swap) — decorative `img alt=""` has no `img` role in
  Testing Library (query via `querySelectorAll('img')` if asserted).
- The cart summary math in the source is broken (3×$45 items vs $274.00
  subtotal) — invent consistent numbers.
- No `tel:` literals anywhere (none exist in this template anyway).
- Sharp corners everywhere — do NOT add rounded radii to buttons/cards/
  badges (radius 0 is the token).
- The source's only animation plugin is owl-carousel; a plain CSS grid
  for products is faithful (no arrows/dots exist in the source markup
  for it). Keep hover transitions (500ms) on category tiles and buttons.
- Section headings have NO decorative underline — plain 30px weight 600
  capitalize text, centered, mb 50.
