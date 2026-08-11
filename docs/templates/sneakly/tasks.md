# Sneakly (ColorLib Minishop) — Tasks & Design Notes

> Recreation of ColorLib "Minishop" — free Bootstrap 4 eCommerce / shoe-store
> template (https://colorlib.com/wp/template/minishop/) under the NEW name
> **Sneakly** (sneaker + the friendly "-ly" family suffix — Wingly, Drivly,
> Nestly, Bookly, Coastly, Restly, Sleeply, Dozely, Soarly, Lodgely; also
> echoes the shoe "sole" sound; single lowercase word, no collision with
> `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-11),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Minishop" — page title "Minishop - Free Bootstrap
  4 Template by Colorlib". TEMPLATES.md category: **Bootstrap (216)**,
  first occurrence at line 455 (`- [ ]`, source NOT shipped anywhere).
  DUP-ROW TRAP: the `minishop` slug also appears at line 1101 (Business 365) and line 1590 (Ecommerce 56) — all `- [ ]` rows of the same
  template; ONE implementation covers all three rows (mark all `[x]` with
  the same surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/minishop/` — HTTP 200, ~61 KB HTML
  (REACHABLE, not a 404). Custom CSS in `css/style.css` (~103 KB) +
  Bootstrap 4 `css/bootstrap.min.css`. Screenshot
  `minishop-free-template.jpg` (1200×946, viewed in browser) matches the
  live DOM for the visible top half (topbar → nav → hero → services).
- **Visual design:** minimal chic shoe store. Thin black top strip
  (phone + 1235 2355 98 · email youremail@email.com · "3-5 BUSINESS DAYS
  DELIVERY & FREE RETURNS"), transparent header with bold "Minishop" logo
  and uppercase menu (HOME CATALOG ABOUT BLOG CONTACT + cart [0]), hero on
  muted CHAMPAGNE-GOLD `#dbcc8f` ground: model in white tracksuit +
  black/white sneakers, "#NEW ARRIVAL", black uppercase "SHOES COLLECTION
  2019", lorem, gold "Discover Now". White services row (bag / headset /
  credit-card icons). Below (from DOM): light `#f8f9fa` product grid,
  choose image cards, GOLD deal band with countdown, testimonials,
  Instagram gallery, black footer. Signature **champagne gold `#dbcc8f`**
  (+ darker `#c2a942` hero button); Open Sans; sharp 0-radius hero button,
  `.25rem` bootstrap buttons, 50% circles everywhere.
- **Section order (1:1, verified from live DOM):**
  1. Topbar `div.py-1.bg-black` — 3 `.topper` items (phone · email ·
     right-aligned shipping promo), 11px uppercase white.
  2. Navbar `nav#ftco-navbar.navbar.navbar-expand-lg.navbar-dark.ftco_navbar
.bg-dark.ftco-navbar-light` — `ftco-navbar-light` custom class wins:
     transparent, absolute, top 20px, z-index 3. Brand "Minishop" black;
     links Home(active)/Catalog(dropdown: Shop, Single Product, Cart,
     Checkout)/About/Blog/Contact, 10px uppercase letter-spacing 2px;
     cart `icon-shopping_cart [0]` right. Dropdown bg #000 radius 0,
     items white 14px, hover `#dbcc8f`. ≤991.98px: solid black, white
     brand/links.
  3. Hero slider `section#home-section.hero` → `.owl-carousel.home-slider`,
     TWO `.slider-item.js-fullheight` slides: right-half photo
     (`images/bg_1.png` / `bg_2.png`), left-half `.one-forth` text:
     subheading ("#New Arrival") + h1 (44px #000 weight 300 uppercase,
     span weight 900) + lorem p + `a.btn-custom` "Discover Now"
     (`#c2a942`, white, padding 10px 20px, NO radius). Owl nav arrows
     bottom center (hidden <992px).
  4. Services `section.ftco-section.ftco-no-pt.ftco-no-pb` → 3
     `col-lg-4.text-center` columns (Free Shipping flaticon-bag · Support
     Customer flaticon-customer-service · Secure Payments
     flaticon-credit-card): 50% circle icon, span 70px black; h3 16px 700;
     lorem.
  5. New Shoes Arrival `section.ftco-section.bg-light` (`#f8f9fa`):
     heading-section (12px uppercase subheading + h2 40px 600 black);
     8 product cards (`col-sm-12.col-md-6.col-lg-3`, white bg, mb 30px):
     `.img-prod` photo (inset shadow) + optional vertical `span.status`
     ribbon (bg `#dbcc8f`, vertical writing-mode, black) + `.text.py-3
pb-4 px-3`: cat "Lifestyle" 12px uppercase rgba(0,0,0,0.3) + 5 star
     outline rating right; h3 14px 700 uppercase "Nike Free RN 2019 iD";
     price $120.00 or sale ($120.00 line-through `#b3b3b3` + $80.00
     black). Hover: gold 230px circle behind photo + `.bottom-area`
     (add-to-cart etc.) slides up from top -65px.
  6. Choose `section.ftco-section.ftco-choose.ftco-no-pb.ftco-no-pt`:
     2×2 tall image cards (columns 700px, cards 350px): Men's Collection ·
     Women's Collection · Extra 50% Off · Best Sellers; subheading 12px
     letter-spacing 4px + h2 28px 700 + `a.btn.btn-black.px-3.py-2` "Shop
     now" (black bg → gold hover); dark column variant `.text.text-white`.
  7. Deal `section.ftco-section.ftco-deal.bg-primary` — `.bg-primary`
     OVERRIDDEN to `#dbcc8f` (gold): left `images/prod-1.png`; right
     heading-section-white ("Deal of the month" subheading + h2, white),
     `#timer` 4 `.time` cells (days/hours/minutes/seconds; 38px 700 white +
     12px 400 uppercase white labels), `.text-deal`: h2 black 800 "Nike
     Free RN 2019 iD" + price 24px 800 ($120.00 black line-through +
     $80.00 white) + 3 × 100px circular thumb-deal images (product-6 /
     product-2 / product-4).
  8. Testimonials `section.ftco-section.testimony-section`:
     heading "Our satisfied customer says"; 5 `.testimony-wrap` items —
     100px circular user-img + white 40px `.quote` badge bottom-right
     (`#dbcc8f` icon), 18px quote, name "Garreth Smith" 600 18px, role
     (Marketing Manager / Interface Designer / UI Designer / Web Developer
     / System Analyst). Dots 10px rgba(0,0,0,0.2), active `#dbcc8f`.
  9. Gallery `section.ftco-gallery`: centered heading "Follow Us On
     Instagram" + lorem; `.container-fluid.px-0 > .row.no-gutters` of 6
     images `col-md-4.col-lg-2` (gallery-1..6.jpg), 270px tall.
  10. Footer `footer.ftco-footer.ftco-section` (bg #000, text
      rgba(255,255,255,0.8), 7em padding, 14px): mouse scroll-up row; 4
      widgets — brand + about + social (twitter/facebook/instagram, 50px
      circles) · Menu (Shop/About/Journal/Contact Us) · Help (Shipping
      Information, Returns & Exchange, Terms & Conditions, Privacy Policy
      - FAQs, Contact) · Have a Questions? (203 Fake St. Mountain View,
        San Francisco, California, USA · +2 392 3929 210 ·
        info@yourdomain.com); widget h2 13px 700 uppercase letter-spacing
        3px white; copyright bar with Colorlib credit (→ neutral in the
        recreation).
- **Design tokens (from `css/style.css`, verified 2026-08-11):**
  - Brand: **`#dbcc8f`** champagne gold (btn-primary bg/border, bg-primary
    section, status ribbon, hover circle, dots, dropdown hover) +
    **`#c2a942`** darker gold (hero btn-custom only). Black `#000000`
    (topbar/footer bg, headings, links, btn-black). `#f8f9fa` products
    section. Greys: rgba(0,0,0,0.3) cat labels, #b3b3b3 strikethrough,
    rgba(0,0,0,0.8) paragraphs, footer rgba(255,255,255,0.8).
  - Font: **Open Sans** (300/400/600/700/800/900 — hero 300/900, prices
    800). Google Fonts `<link>` in index.html.
  - Buttons: base `.btn` 12px radius .25rem padding .375rem .75rem;
    `.btn.btn-primary` gold bg → hover transparent + gold text;
    `.btn.btn-black` black → hover gold; `.btn-custom` `#c2a942` sharp
    (no radius).
  - Radii: 50% circles (service icons, product overlay, testimonial
    photos/badges, social icons, thumbnails), .25rem (btn), 0 (dropdown,
    btn-custom). NO 30px pills on the home page (only inner breadcrumb
    pages).
  - Hero h1 44px weight 300 uppercase with weight-900 span; section h2
    40px 600; product h3 14px 700 uppercase.
  - Responsive: Bootstrap `col-lg-*`/`col-md-*` grid — services stack
    <992px, products 4/2/1, gallery 6/3/2, nav solid black <992px.

## Implementation tasks (for the implementer)

- [ ] `npm run spec:validate` for `template-sneakly` before starting
- [ ] Scaffold `apps/sneakly` (copy simplest existing app, rename package
      to `@free-react-templates/sneakly`); register workspace
      (`npm install --package-lock-only` if needed)
- [ ] `@theme` tokens: `--color-brand: #dbcc8f`, `--color-brand-dark:
    #c2a942`, `--color-ink: #000000`, `--color-mist: #f8f9fa`; Open Sans
      Google Fonts `<link>` in index.html; document title "Sneakly — Shoe
      Store Template"
- [ ] Topbar component (black strip, 3 topper items)
- [ ] Navbar component (transparent absolute, dropdown, cart [0],
      mobile solid-black variant)
- [ ] Hero slider (2 slides, arrows + dots; picsum sneaker seeds)
- [ ] Services row (3 columns, lucide icons in circles)
- [ ] Product grid (8 cards, category + rating + price, sale ribbon +
      strikethrough, hover circle + slide-up actions)
- [ ] Choose section (2×2 image cards, "Shop now" black buttons)
- [ ] Deal band (gold bg, countdown timer as pure function + useEffect
      tick, price pair, 3 thumbnails)
- [ ] Testimonials (5 cards, quote badges, dots)
- [ ] Instagram gallery (6 tiles)
- [ ] Footer (4 columns, social icons as inline SVG brand paths —
      lucide-react has NO brand icons — scroll-up mouse, copyright)
- [ ] TDD: tests first per requirement, 100% coverage via
      `scripts/verify-app.sh sneakly` (typecheck + lint + vitest + build)
- [ ] Visual QA against `https://preview.colorlib.com/theme/minishop/`
      (section order, gold `#dbcc8f`, black topbar/footer, hero layout)
- [ ] PR description: source = ColorLib Minishop, preview URL, tokens
      (#dbcc8f / #c2a942 / Open Sans / 0-radius btn-custom), what differs
      (Sneakly brand, picsum placeholders, neutral footer credit, dead
      dropdown links)
- [ ] Bookkeeping on merge: mark lines ~455 (Bootstrap), ~1101 (Business),
      ~1590 (Ecommerce) `[x]` + surge URL + `npm run readme:status`

## Pitfalls (from the skill + this prep)

- **Dup rows:** 3 TEMPLATES.md rows for minishop — ONE implementation,
  all three rows to `[x]`.
- **`.bg-primary` override:** the source overrides Bootstrap's blue with
  gold `#dbcc8f` for the Deal band — use the brand token, never
  default Tailwind primary.
- **Brand icons:** lucide-react removed Facebook/Instagram/Linkedin/
  Twitter — inline SVG (simple-icons paths) for footer socials.
- **tel: literals:** the footer phone is "+2 392 3929 210" — never write
  a literal `tel:` URI in source; compute at runtime from the spaced
  string (toolchain redaction pitfall, Vellum/Readit).
- **Countdown timer:** keep the tick logic in a pure exported function so
  vitest can cover it without fake timers; test with `act()` if timers
  are used (RTL fake-timer needs act()).
- **Test queries:** desktop + mobile nav duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last.
- **Decorative images:** `<img alt="">` has no `img` role in Testing
  Library — query decorative strips with
  `container.querySelectorAll('img')`.
- **`bg-primary` gold vs Bazaar pink `#ee4266`:** keep `#dbcc8f` exact;
  the two shop preps must stay visually distinct.
