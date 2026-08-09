# Atelier (ColorLib Ashion) — Tasks & Design Notes

> Recreation of ColorLib "Ashion" (https://colorlib.com/wp/template/ashion/)
> under the NEW original name **Atelier** (prep naming convention: spec/docs
> folders are named by the new name directly).

## Design notes

- **Original:** ColorLib "Ashion" — free fashion e-commerce website template.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/ashion/`
  (HTTP 200, 49.7KB) + stylesheet `css/style.css` (79.3KB). Full rendered
  DOM extracted (curl + browser render); structure below is from the DOM +
  CSS tokens. Screenshot `ashion-free-template.jpg` in TEMPLATES.md confirms
  the visuals (white sections, red accents, pastel category tiles,
  light-grey discount band).
- **Structure observed (1:1):** header (logo + nav HOME/WOMEN'S/MEN'S/SHOP/
  PAGES/BLOG/CONTACT + Login/Register + search + wishlist/cart badges) →
  categories (large "Women's fashion" tile left + 2x2 grid Men's/Kid's/
  Cosmetics/Accessories, all with SHOP NOW links, photo backgrounds) → new
  product (8 cards, 4-col grid: Buttons tweed blazer, Flowy striped skirt
  [OUT OF STOCK], Cotton T-Shirt, Slim striped pocket shirt, Fit micro
  corduroy shirt [SALE], Tropical Kimono [SALE], Contrasting sunglasses
  [SALE], Water resistant backpack) → banner slider (The Project Jacket /
  Linen Breeze Dress / Urban Street Style + EXPLORE + dots) → trend
  (HOT TREND / BEST SELLER / FEATURE tabs, 3 cards each) → discount
  ("Summer 2030" / "SALE 50%" + countdown timer + SHOP NOW) → services
  (Free Shipping, Money Back Guarantee, Online Support 24/7, Payment
  Secure) → instagram photo strip → footer (about + payment icons Visa/
  Mastercard/Google Pay/PayPal/Apple Pay/Stripe + Quick links + Account +
  Newsletter + social + copyright).
- **Design tokens:** brand red **#ca1515** (site-btn, sale badges, service
  icons, focus outline, active/hover accents); near-black **#111111**
  (headings, prices, discount link); body **#666666** 14px/24px; badges NEW
  **#36a300**, SALE **#ca1515**, OUT OF STOCK **#111111**; stars **#e3c01c**;
  strikethrough price **#b1b0b0**; discount panel bg **#f4f4f4** (height
  390px, centered); fonts **Montserrat** (all sans text; headings #111111
  w400, section titles 600 uppercase) + **Cookie** (script — banner h1 80px,
  discount h2 60px red) via Google Fonts; `.site-btn` = red filled, white
  uppercase 600, 12px 30px, **border-radius 50px** (pill); section CTAs are
  uppercase text links (700) with red underline; product photos aspect-ratio
  3/4 with hover action-icon row (opacity 0→1, top 100px→0).
- **Recreation name:** Atelier. App folder `apps/atelier`, package
  `@free-react-templates/atelier`, homepage
  `https://free-react-templates-atelier.surge.sh`.
- **Design approach:** light theme with red accents; categories = large tile
  - 2x2 grid with seeded picsum photos; product cards with seeded photos,
    badge, lucide stars, price + strikethrough old price, hover icons; banner
    = 3-slide carousel (prev/next + dots); trend = 3 tabs switching 3-card
    grids; discount = grey band with client-side countdown timer + SHOP NOW
    link; services with lucide icons; footer newsletter with inline validation
    and success state; all images picsum-seeded
    (`picsum.photos/seed/atelier-N/w/h`); Google Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation: `apps/moda` (fashion e-commerce storefront with
  AnnouncementBar / Categories / FeaturedProducts grid structure) — the
  closest existing app; extend with Banner carousel, Trend tabs, Discount
  countdown, Services, and Instagram strip matching the Ashion DOM. Check
  `apps/catwalk` (fashion landing) as an alternative for Navbar/Footer
  patterns.

## Tasks

- [x] Write `openspec/specs/template-atelier/spec.md` (Gherkin requirements + scenarios + replication findings) — DONE on main (prep).
- [ ] Create `apps/atelier` (copy `apps/moda`; rename package to
      `@free-react-templates/atelier`).
- [ ] TDD: tests first for Navbar, Categories, NewProduct, Banner,
      Trend, Discount, Services, Instagram, Footer, App composition.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh atelier` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list (via
      `npm run readme:status`).
