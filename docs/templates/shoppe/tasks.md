# Shoppe (ColorLib Minishop) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-shoppe`.

## Design notes (replication findings)

- **Original:** ColorLib "Minishop" — e-commerce / shoe-shop template
  (source: https://colorlib.com/wp/template/minishop/). TEMPLATES.md has
  THREE copies of this item (lines 455, 1101 and 1590 — mark ALL when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/minishop/ (HTTP
  200, full rendered DOM, 61.2 KB; page title "Minishop - Free Bootstrap 4
  Template by Colorlib"). Main stylesheet `css/style.css` (102.9 KB,
  Bootstrap 4 + theme CSS merged); helpers owl.carousel / animate / aos /
  flaticon / icomoon / ionicons / magnific-popup. Font: **Open Sans**
  (300–800) via Cloudflare font-face CSS — use Google Fonts `<link>` instead.
- **Screenshot:** `minishop-free-template.jpg` (1200×946, viewed in browser)
  — black top strip (phone, email, delivery note); white nav (logo, HOME/
  CATALOG/ABOUT/BLOG/CONTACT, cart "0" badge); hero with gold/mustard bg +
  lifestyle model photo in white tracksuit; black "#NEW ARRIVAL" pill; thin
  uppercase headline "SHOES COLLECTION 2019"; gold "Discover Now" CTA; white
  3-column trust strip (bag/headset/card icons). The demo brands itself
  "Minishop"; recreation uses the NEW name **Shoppe**.
- **Visual design (DOM + CSS + screenshot):** clean e-commerce on white,
  champagne-gold brand `#dbcc8f`, mustard CTA `#c2a942`, black accents
  (top bar, nav, buttons, footer), light-gray `#f8f9fa` section bg. Open
  Sans; 12px uppercase letter-spaced subheadings; 750px hero slider; 4×2
  product grid; asymmetric collections mosaic; gold deal band with countdown;
  testimonial carousel; Instagram strip; black 4-col footer.
- **Structure (1:1, section order):**
  1. Top info bar (black, 3 cells): phone `+ 1235 2355 98` · email
     `youremail@email.com` · "3-5 Business days delivery & Free Returns".
  2. Navbar (dark `#343a40`): brand "Shoppe"; Home (active), Catalog
     (dropdown: Shop / Single Product / Cart / Checkout), About, Blog,
     Contact; cart icon + `[0]` badge; mobile "Menu" toggle; + repo-standard
     dark-mode toggle.
  3. Hero `#home-section.hero` → `.home-slider.owl-carousel`, 2 slides
     (750px): gold `#dbcc8f` overlay left 50%; product/lifestyle image right
     (`bg_1.png`/`bg_2.png`); text left — black pill "#New Arrival", h1
     uppercase weight 300 44px ("Shoes Collection 2019" / "New Shoes Winter
     Collection"), paragraph, gold `.btn-custom` "Discover Now"
     (`#c2a942`, padding 10px 20px); owl-nav arrows bottom.
  4. Services (3 cols): Free Shipping (bag) · Support Customer (headset) ·
     Secure Payments (card) — circle icon + h3 + paragraph.
  5. Products `.ftco-section.bg-light`: centered heading "New Shoes
     Arrival" + subtext; 8 `.product` cards (4×2): image, optional `.status`
     badge "50% Off" (2 of 8), category "Lifestyle", 5 outline stars, name,
     price `$120.00` (sale cards: `$120.00` struck-through `#b3b3b3` +
     `$80.00`), `add-to-cart` (black→gold hover) + `buy-now` (white→gold
     hover), both uppercase 13px.
  6. Collections `.ftco-choose` asymmetric grid: left col-lg-4 "Men's
     Collection" (img bg, "Men's Shoes" subheading) | right col-lg-8 top
     "Women's Collection" (img bg, "Women's Shoes") | bottom col-md-6×2:
     "Extra 50% Off" (light bg, "Summer Sale", dark text) + "Best Sellers"
     (img bg, "Shoes"). All tiles: paragraph + `btn-black` "Shop now"
     (hover gold).
  7. Deal `.ftco-deal.bg-primary` (gold): left product image; right —
     white subheading+h2 "Deal of the month", `#timer` 4 cells (days/hours/
     minutes/seconds; 38px bold white; client-side ticking countdown),
     product name (black 800), price `$120.00`→`$80.00` (sale white), 3
     square 100px thumbnails.
  8. Testimonials `.testimony-section`: left col-lg-5 `.services-flow` 4
     rows (Free Shipping, Valuable Gifts, All Day Support, All Day Support —
     original repeats the 4th heading; paraphrase it) | right col-lg-7
     "Our satisfied customer says" + 5-slide carousel: avatar circle + quote
     icon, quote text, name "Garreth Smith", position (Marketing Manager /
     Interface Designer / UI Designer / Web Developer / System Analyst).
  9. Instagram gallery `.ftco-gallery`: heading "Follow Us On Instagram" +
     subtext; 6 tiles (col-lg-2) with bg image + centered Instagram icon.
  10. Footer (black): brand col (name + blurb + 3 gold social circles) ·
      Menu (Shop, About, Journal, Contact Us) · Help (2-col: Shipping
      Information, Returns & Exchange, Terms & Conditions, Privacy Policy |
      FAQs, Contact) · "Have a Questions?" (address, phone, email) ·
      copyright bar → Component Dock link (replace ColorLib attribution).
- **Design tokens extracted from `css/style.css`:**
  - Brand champagne gold **`#dbcc8f`** (deal bg, hero overlay, hovers,
    footer social circles); mustard **`#c2a942`** (hero btn-custom).
  - Ink **`#000000`** (top bar, btn-black, add-to-cart, footer, headings);
    nav dark `#343a40`; white `#fff` (buy-now bg, text on dark/gold);
    light gray `#f8f9fa` (products + light tile bg); muted `#b3b3b3`
    (struck price); body `rgba(0,0,0,.8)`; footer links
    `rgba(255,255,255,.8)`.
  - Font: **Open Sans** body 15px/1.8; h2 40px/600; hero h1 44px/300
    uppercase; subheadings 12px uppercase ls 2px (4px in choose tiles);
    buttons 13px uppercase w300; footer widget h2 13px uppercase ls 3px.
  - Buttons: no radius except hero primary (30px, 1px white/40 border,
    hover white bg/black text); status badge "50% Off".
  - Timer `.time`: 38px/700 white, 25% width.
  - Spacing: `.ftco-section` 7em 0; slider 750px; product text
    `py-3 pb-4 px-3`; deal thumbs 100px squares.

## Implementation tasks

- [ ] Spec-first: `openspec/specs/template-shoppe/spec.md` already on main
      (prep). Open a `feat/template-shoppe` branch.
- [ ] Copy the simplest existing e-commerce/shop app (e.g. `apps/gloss` or
      `apps/moda`), rename package to `@free-react-templates/shoppe`, run
      `npm install` at root so `package-lock.json` registers the workspace
      (grep `free-react-templates/shoppe`).
- [ ] Ensure `vite.config.ts` registers `injectUiSource()` (see
      docs/conventions.md) and app imports Button/ButtonLink/cn from
      `packages/ui` (knip trap — see repo memory notes).
- [ ] TDD: write tests first per spec requirement, then implement: 1. `TopBar` — black bar: phone, email, delivery note. 2. `Navbar` — brand "Shoppe", links (Home active; Catalog dropdown
      Shop/Single Product/Cart/Checkout; About, Blog, Contact), cart
      icon + `[0]`, mobile toggle (use `getAllByRole` for duplicated
      links), repo-standard dark-mode toggle. 3. `HeroSlider` — 2 slides, "#New Arrival" pill, uppercase headline,
      gold "Discover Now", image right, arrows/dots with aria-labels. 4. `Services` — 3 icon cards (Free Shipping / Support Customer /
      Secure Payments). 5. `ProductGrid` — 8 cards × (image, category, 5 stars, name, price;
      2 cards with "50% Off" badge + sale price), Add to cart + Buy now. 6. `Collections` — 4 tiles (Men's, Women's, Extra 50% Off, Best
      Sellers) with "Shop now" buttons; 3 image tiles + 1 light tile. 7. `Deal` — gold band: product image, "Deal of the month", countdown
      timer (fake timers + `act()` — see repo memory note), name,
      price, thumbnails. 8. `Testimonials` — 4 service rows left; carousel right (avatar +
      quote icon, text, name, position). 9. `InstagramGallery` — heading + 6 tiles with Instagram icon. 10. `Footer` — 4 columns + Component Dock link in copyright.
- [ ] Theme tokens in `@theme`: `--color-brand: #dbcc8f`,
      `--color-brand-2: #c2a942`, ink `#000000`, light `#f8f9fa`.
- [ ] Open Sans (300–800) Google Fonts `<link>` in index.html.
- [ ] Placeholders: `picsum.photos/seed/shoppe-<n>/<w>/<h>` (hero 2 images,
      8 products, 4 choose tiles, 1 deal product + 3 thumbs, 5 avatars,
      6 gallery tiles); icons lucide-react; brand social icons inline SVG.
- [ ] Paraphrase demo copy where needed but keep the same kind of content
      (product names distinct — original reuses "Nike Free RN 2019 iD" on
      every card).
- [ ] Verify: `scripts/verify-app.sh shoppe` (typecheck + lint + 100%
      coverage + build). Then push branch, open PR, squash-merge immediately
      (`gh pr merge --squash --delete-branch`).
- [ ] After merge: mark ALL THREE TEMPLATES.md Minishop copies (lines 455,
      1101, 1590) `[x]` with homepage `https://shoppe.free.componentdock.com`,
      run `npm run readme:status`, commit + push. Verify `npx knip` + curl
      the deployed URL.
