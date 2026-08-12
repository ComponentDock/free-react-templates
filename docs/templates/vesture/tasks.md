# Vesture (ColorLib Ashion) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-vesture/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Ashion" — fashion e-commerce storefront
  (source: https://colorlib.com/wp/template/ashion/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/ashion/
  (HTTP 200, full rendered DOM + `css/style.css` (79KB) + Bootstrap 5.3.8 +
  Font Awesome 7.1.0 + `css/elegant-icons.css` + glightbox extracted
  2026-08-12 during prep). Screenshot `ashion-free-template.jpg`
  (1200×946) viewed in browser and matches the live preview: feminine,
  minimalist, airy fashion storefront — white background, pastel category
  tiles (peach / baby blue / pink), black uppercase text + black
  rectangular "SHOP NOW" buttons on the tiles, script logo + script hero
  headlines, red accents, "NEW PRODUCT" grid with filter tabs.
- **Visual design:** white page; categories split (large Women's fashion
  tile left + 2×2 pastel tiles right); script-font headlines on the hero
  slider; product cards with model photos and small tag badges
  (NEW / SALE / OUT OF STOCK); red (#ca1515) accent on prices, labels,
  and pill buttons; dark text on light backgrounds throughout.
- **Structure (1:1, section order):**
  1. Header (white): `.header__logo` script wordmark left; `.header__menu`
     centered nav — Home, Women's, Men's, Shop, **Pages** (dropdown:
     Product Details, Shop Cart, Checkout, Blog Details), Blog, Contact;
     `.header__right__widget` right — login/register links, search icon,
     heart (wishlist), bag (cart) with count badge "2". Mobile: offcanvas
     slide-in menu (same links + widgets).
  2. Categories (`categories`, container-fluid): left tall tile
     `categories__large__item` — h1 "Women's fashion", paragraph, "Shop
     now"; right 2×2 grid — "Men's fashion" 358 items, "Kid's fashion"
     273 items, "Cosmetics" 159 items, "Accessories" 792 items (each:
     photo bg `data-setbg`, h4, p, "Shop now" link).
  3. Product section (`product spad`): centered h4 "New product" + filter
     tabs (All, Women, Men, Kids, Accessories, Cosmetics —
     screenshot-verified; HTML tabs render via JS) + 8 cards (4-col):
     `product__item__pic.set-bg` square photo + hover overlay of 3 round
     icons (eye / heart / bag), optional `.label` tag ("Sale" in HTML;
     screenshot shows NEW / SALE / OUT OF STOCK), then h6 name, 4-star
     rating, price. Names/prices: Buttons tweed blazer $59, Flowy striped
     skirt $49, Cotton T-Shirt $59, Slim striped pocket shirt $59, Fit
     micro corduroy shirt $59, Tropical Kimono $49, Contrasting sunglasses
     $59, Water resistant backpack $49.
  4. Banner slider (`banner.set-bg`, 3 slides, auto-advance): centered
     text per slide — eyebrow ("The Chloe Collection" / "Summer
     Essentials" / "New Arrivals"), h1 **Cookie 80px #111111** ("The
     Project Jacket" / "Linen Breeze Dress" / "Urban Street Style"), CTA
     link ("Shop now" / "Explore" / "Discover").
  5. Trend (`trend spad`): 3 × `col-lg-4` columns "Hot Trend", "Best
     seller", "Feature"; each 3 horizontal `trend__item` (photo left +
     text right: h6 name, stars, price $59). Items: Chain bucket bag,
     Pendant earrings, Cotton T-Shirt / Cotton T-Shirt, Zip-pockets
     pebbled tote briefcase, Round leather bag / Bow wrap skirt, Metallic
     earrings, Flap cross-body bag.
  6. Discount (`discount`): left photo; right `.discount__text` bg
     **#f4f4f4**, 390px, padding 75px 90px 50px, centered — Cookie
     "Discount" + "Sale" accents, h2 "Summer 2030", "Sale 50%" (red),
     4 countdown boxes (22 Days / 18 Hour / 46 Min / 05 Sec), "Shop now"
     pill button.
  7. Services (`services spad`): 4 × `services__item` (icon left + text
     right): Free Shipping "For all order over $99" (truck), Money Back
     Guarantee "If good have Problems" (banknote), Online Support 24/7
     "Dedicated support" (headset), Payment Secure "100% secure payment"
     (headphones/shield).
  8. Instagram strip: 6 tiles `col-lg-2 p-0`, 320px, photo bg + centered
     Instagram icon.
  9. Footer (white, `padding-top: 55px`): `.footer__about` (logo + blurb +
     4 circular social icons bg #e1e1e1), "Quick links" (About, Blogs,
     Contact, FAQ), "Account" (My Account, Orders Tracking, Checkout,
     Wishlist), "Newsletter" (email input + Subscribe); bottom: 6
     `.payment-icon` badges + copyright "Copyright © <year> All rights
     reserved | This template is made with ♥ by ColorLib".
  10. Search overlay: full-screen modal, centered input + close button.

## Design tokens

- Primary **#ca1515** (red) — `.site-btn` bg, product label bg, price/
  link accents, countdown emphasis.
- Text **#111111** (headings/prices) · **#444444** (body) · **#666666**
  (secondary) · **#888888** (meta).
- Light bands **#f4f4f4** (discount text bg) / **#f5f5f5** (misc).
- Fonts: **Montserrat** (sans; nav/headings/body, weights 400–700) +
  **Cookie** (cursive; logo, banner h1 80px, "Discount"/"Sale" accents).
- Buttons `.site-btn`: #ca1515 bg, white, uppercase, 600, 14px, padding
  12px 30px, **radius 50px** (pill). Category-tile "Shop now" = black
  uppercase text links (screenshot).
- Rhythm: `.spad` ~100px vertical padding; `categories__item` 314px;
  `instagram__item` 320px; `discount__text` 390px.

## Implementation tasks (TDD, 100% coverage)

- [ ] Scaffold `apps/vesture` (copy simplest existing app, rename package
      `@free-react-templates/vesture`); `index.html` with Montserrat +
      Cookie Google Fonts links + title "Vesture — Fashion Store Template"
- [ ] Spec validation: `npm run spec:validate` (this spec)
- [ ] `@theme` tokens: `--color-brand: #ca1515`, text/neutral scale
      (#111/#444/#666/#888), light band #f4f4f4; font-sans Montserrat,
      font-script Cookie
- [ ] Header (sticky white): script logo "Vesture", centered nav with
      Pages dropdown, right widgets (login/register, Search, Heart,
      ShoppingBag + badge), offcanvas mobile menu
- [ ] Categories: large tile + 2×2 grid, picsum photo backgrounds,
      item counts, "Shop now" links
- [ ] Product section: "New product" heading, filter tabs, 8 cards with
      picsum photos, tag label, rating stars, prices, hover icon overlay
- [ ] Banner slider: 3 auto-advancing slides, eyebrow + Cookie headline +
      CTA; fade transition
- [ ] Trend: 3 columns × 3 horizontal items (photo left / text right)
- [ ] Discount: split band, #f4f4f4 panel, script accents, "Summer 2030",
      "Sale 50%", ticking countdown (Days/Hour/Min/Sec), Shop now button
- [ ] Services: 4 items with lucide icons
- [ ] Instagram strip: 6 tiles with IG icon overlay
- [ ] Footer: about + social circles, Quick links, Account, Newsletter
      (email + Subscribe), payment badges, ColorLib credit
- [ ] Search overlay modal (open from header search, close control)
- [ ] Tests for every section (RTL), 100% coverage
- [ ] Verify: `scripts/verify-app.sh vesture` (typecheck + lint + knip +
      fallow + coverage + build)
- [ ] PR: `feat: Vesture — Fashion Store landing template (ColorLib
    Ashion)`, merge immediately with `gh pr merge --squash`; record
      Surge URL + homepage in TEMPLATES.md, mark `[~]`→`[x]` on the first
      Ashion row (line 342; Ashion also duplicated at lines 1564/1698)
