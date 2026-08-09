# Modish (ColorLib Divisima) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-modish` by an implementer stream.

## Design notes

- **Original:** ColorLib "Divisima" — free fashion e-commerce website
  template. Source: https://colorlib.com/wp/template/divisima/. New name:
  **modish** (fashion-forward; no collision with apps/ or existing specs).
  Note: Divisima has dup rows in TEMPLATES.md at lines 215 (Beauty), 1569
  (Ecommerce), 1702 (Fashion) — mark all three `[x]` when shipped.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/divisima/`
  (HTTP 200, 25.2KB) + stylesheet `css/style.css` (39.5KB). Full rendered DOM
  extracted; structure below is from the DOM + CSS tokens. Screenshot
  `divisima-free-template.jpg` (1200×946) confirms: white bg, black text +
  black navbar, hot-pink #f51167 accents (circular hero price badge, middle
  feature block, buttons, NEW tag, badge), Josefin Sans, uppercase bold
  headings, pill buttons.
- **Structure observed (1:1):**
  1. `header-section`:
     - `header-top` (white, padding 18px 0 14px): `site-logo` (logo.png
       "Divisima" → text logo "Modish"), `header-search-form` (pill input
       height 44px radius 50px bg #f0f0f0, placeholder "Search on divisima
       ...." → "Search on modish ....", flaticon search button),
       `user-panel`: up-item 1 = profile icon + "Sign In or Create Account";
       up-item 2 = `shopping-card` (bag icon + span badge "0" bg #f51167
       radius 30px) + "Shopping Cart".
     - `main-navbar` (bg **#282828**): `main-menu` links white 16px, padding
       17px 0, margin-right 50px — Home, Women, Men, Jewelry (+ `.new` pink
       pill "New"), Shoes ▾ (Sneakers, Sandals, Formal Shoes, Boots, Flip
       Flops), Pages ▾ (Product Page, Category Page, Cart Page, Checkout
       Page, Contact Page), Blog. Hover → #f51167; sub-menu white 220px
       dropdown (shadow 2px 7px 20px rgba(0,0,0,0.05)).
  2. `hero-section` (padding-bottom 54px): `hero-slider` owl carousel, 2
     `hs-item set-bg` slides (bg.jpg / bg-2.jpg, height 720px, container
     padding-top 170px): `col-xl-6 col-lg-7 text-white` — span "New
     Arrivals" (18px uppercase 600 letter-spacing 3px), h2 "denim jackets"
     (60px uppercase 700), p lorem (18px 300), `a.site-btn.sb-line`
     "DISCOVER" + `a.site-btn.sb-white` "ADD TO CART". Right: `offer-card
text-white` (absolute right 0 top 226px, 162×162 circle bg #f51167,
     rotate 45deg → 0, inner ring border 1px #f96790): span "from", h2 "$29"
     (72px 400), p "SHOP NOW". Below: `slide-num-holder` (white 24px 700
     "1/2", rotated 1px divider).
  3. `features-section` (container-fluid): 3 `col-md-4 p-0 feature` —
     `feature-inner` (flex centered, padding 20px 25px) = `feature-icon`
     (icons/1.png…3.png) + h2 24px uppercase: "Fast Secure Payments" (#f8f8f8
     bg), "Premium Products" (**#f51167** bg, white text), "Free & fast
     Delivery" (#f8f8f8 bg).
  4. `top-letest-product-section` (padding 70px 0 60px): centered h2 "LATEST
     PRODUCTS" (36px, mb 70px); `product-slider` (owl) of 6 `product-item`s:
     `pi-pic` (photo; optional `tag-new` #50e550 / `tag-sale` #f51167 pills,
     top-right, radius 15px, 10px 700 uppercase; `pi-links` bottom-right:
     round white 36×36 add-card + wishlist-btn, radius 60px, shadow 1px 0
     32px rgba(0,0,0,0.2); add-card expands to 148px on hover revealing "ADD
     TO CART") + `pi-text` (h6 price "$35,00" right bold #111; p name 16px
     #111: "Flamboyant Pink Top", "Black and White Stripes Dress", … — keep
     3–4 distinct names).
  5. `product-filter-section` (padding-bottom 60px): h2 "BROWSE TOP SELLING
     PRODUCTS"; `product-filter-menu` 8 pills (12px 700 uppercase bg #ebebeb
     padding 10px 34px radius 31px): TOPS, JUMPSUITS, LINGERIE, JEANS,
     DRESSES, COATS, JUMPERS, LEGGINGS; row of 8 `col-lg-3 col-sm-6`
     product-items (some tagged); `button.site-btn.sb-line.sb-dark` "LOAD
     MORE" centered (text-center pt-5).
  6. `banner-section`: `banner set-bg` (banner-bg.jpg, padding 50px 34px
     47px, mb 70px): `tag-new` "NEW" (#50e550, 24px 700, radius 80px, top
     right), span "New Arrivals" (18px uppercase 600 ls 3px), h2 "STRIPED
     SHIRTS" (48px uppercase 700 #282828), `a.site-btn` "SHOP NOW".
  7. `footer-section` (bg **#282828**, pt 60px): centered `footer-logo`
     (logo-light.png → "Modish" white text logo, pb 60px); 4 col-lg-3
     widgets:
     - About: h2 "About" (18px uppercase white, mb 45px) + p (#8f8f8f) +
       payment cards image → small icon row;
     - Questions links: two `ul` columns — About Us, Track Orders, Returns,
       Jobs, Shipping, Blog / Partners, Bloggers, Support, Terms of Use,
       Press; links #8f8f8f 14px, 5px dotted circle bullets (#ec105a), hover
       white + filled;
     - Questions latest posts: 2 `lp-item` (64×64 thumb + h6 title 14px 700
       uppercase #717171 opacity .25, span "Oct 21, 2018", a.readmore "Read
       More" #f51167): "what shoes to wear", "trends this year";
     - Questions contact: 4 `con-info` — span C. B. T. E. (#f51167) + p:
       "Your Company Ltd", "1481 Creekside Lane Avila Beach, CA 93424,
       P.O. BOX 68", "+53 345 7953 32453", "office@youremail.com".
       Then `social-links-warp` (border-top 2px #3b3535, padding 46px 0): 7
       social links (instagram, google-plus, pinterest, facebook, twitter,
       youtube, tumblr) — icon 30px #d7d7d7 + label 12px 600 uppercase
       #9f9fa0; hover → brand colors (instagram #2F5D84, google-plus #E04B37,
       pinterest #CD212D, facebook #39599F, twitter #5abed6, youtube #D12227,
       tumblr #37475E), label → white. Copyright → repo-standard credit.
- **Design tokens:**
  - Brand pink **#f51167** (site-btn, badge, offer-card, feature center,
    tag-sale, nav hover, readmore, contact letters); ring #f96790.
  - Dark charcoal **#282828** (navbar, footer, banner h2); near-black
    #111111 (headings, product text, sb-white/sb-dark.sb-line text).
  - Green #50e550 (New tags); greys #f0f0f0 / #f8f8f8 / #ebebeb / #8f8f8f /
    #585858 / #717171 / #9f9fa0 / #d7d7d7 / #a4a4a4 / #3b3535 / #413a3a /
    #ec105a.
  - Buttons: pill radius 50px, 14px 600 uppercase, min-width 167px, padding
    18px 47px 14px; variants sb-white / sb-line (inset 1px white ring) /
    sb-dark (#413a3a) / sb-dark.sb-line (inset 1px #111 ring).
  - Filter chips: radius 31px, 12px 700 uppercase, bg #ebebeb, padding 10px
    34px. Product action buttons: 36×36 round white, radius 60px.
  - Font: **Josefin Sans** (Google Fonts via `<link>`).
  - Spacing: hero 720px slides (content pt 170px); section-title mb 70px;
    banner padding 50px 34px 47px; footer widget mb 70px, h2 mb 45px.

## Implementation tasks (for the implementer stream)

- [ ] Scaffold `apps/modish` (copy simplest existing app; package
      `@free-react-templates/modish`), wire into workspace + lockfile.
- [ ] Spec tests (red) per `openspec/specs/template-modish/spec.md`
      requirements: header top bar, navbar, hero, features, latest products,
      top selling, banner, footer, composition.
- [ ] Implement (green) with 100% coverage: - Header: white top bar — "Modish" text logo, pill search input + icon,
      Sign In / Create Account link, Shopping Cart + pink count badge "0";
      dark #282828 navbar (Home, Women, Men, Jewelry + New tag, Shoes,
      Pages, Blog), pink hover, mobile hamburger menu. - Hero: full-width darkened fashion photo (picsum) or 2-slide
      crossfade, "New Arrivals" eyebrow, uppercase headline (e.g. "Denim
      Jackets"), lorem, DISCOVER (outline pill) + ADD TO CART (white pill),
      pink circular offer badge "from $29 SHOP NOW" with ring, slide
      counter. - Features: 3 columns with lucide icons (Lock/Shield, Star, Truck),
      middle column pink. - Latest products: heading + 6 product cards (photo, New/On Sale pills,
      hover round add-to-cart + wishlist buttons, price + name). - Top selling: 8 filter pills + 8-card grid + LOAD MORE button. - Banner: photo band, green NEW tag, "Striped Shirts" headline, SHOP
      NOW pill. - Footer: dark, centered logo, About + payment icons, Questions link
      columns, latest posts (2 items), contact (C./B./T./E.), social strip
      with brand-color hover, copyright bar.
- [ ] Images: `https://picsum.photos/seed/modish-<n>/<w>/<h>` for every
      photo (hero x2, product photos x14, banner x1, latest-post thumbs x2).
- [ ] Font: Josefin Sans via `<link>` in `index.html`.
- [ ] Icons: lucide-react (Search, User, ShoppingBag, Heart, CreditCard,
      Truck, Star, social brand icons per repo convention).
- [ ] Verify: `npm run verify:app -- modish` (typecheck + lint + 100%
      coverage + build); run full `npm run gate` once before PR.
- [ ] PR: `feat: modish — fashion store template (ColorLib Divisima)`, squash
      merge immediately; then mark ALL THREE Divisima rows (Beauty/Ecommerce/
      Fashion) `[x]` + surge URL in TEMPLATES.md + `npm run readme:status`.
