# Chrono (ColorLib "Timezone") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-chrono` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Timezone" — free watch store / eCommerce HTML
  template (source: https://colorlib.com/wp/template/timezone/). Listed in
  TEMPLATES.md under the Bootstrap category (line 514); duplicate rows at
  line 1607 under Ecommerce (56) and line 1734/1735 under Fashion (43) —
  same template, ONE app only.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/timezone/`.
  DOM fetched (`/tmp/timezone-preview.html`, 31,629 bytes) + stylesheet
  `assets/css/style.css` (`/tmp/tz-style.css`, 81,058 bytes) + TEMPLATES.md
  screenshot (`timezone-free-template.jpg`, 1200×946, viewed in the browser).
- **Aesthetic:** clean, minimalist luxury-watch-store look — white header +
  sections over a light-grey `#f0f0f2` hero; vibrant red `#ff2020` accents
  (logo "Zone", nav "NEW" badge, prices, hovers); dark `#4a4a4b` hero CTA;
  big bold Josefin Sans headings; square buttons with a sliding-color hover
  sweep; a full red `#ea0000` band (shop methods) between the feature rows
  and the white footer.
- **Sliders/menus are jQuery plugins in the source** (slick for the hero,
  slicknav for the mobile menu, nice-select for the sort) — implement with
  React state: a 2-slide hero slider with arrows, a hamburger mobile menu
  with the 7 nav entries, a native/React select for sorting.
- **Fonts:** source Google-imports `'Josefin Sans'` (200–700) + `'Roboto'`
  (100–700); Josefin Sans drives headings/nav/buttons/prices, Roboto drives
  body/footer. Both are Google Fonts — load via `<link>` in `index.html`.
  (Playfair Display appears only in sub-page styles — skip it.)
- **Buttons:** `.btn` = square (radius 0), uppercase, Josefin Sans 600, 16px,
  letter-spacing 0.03em, padding 30px 28px, bg `#ff2020`, white text;
  `::before` `#4a4a4b` slides in from the left on hover
  (cubic-bezier(0.5,1.6,0.4,0.7), 0.5s). `.hero-btn` = same shape but bg
  `#4a4a4b` with a `#ff2020` sweep. Implement the sweep with a
  `group-hover:scale-x-100 origin-left transition-transform` overlay span.
- **Copy is placeholder/Lorem with typos** ("aorem ixpsacdolor sit ameasecur
  adipisicing elitsf edasd.") — paraphrase freely, FIX the typos, keep the
  same kinds: nav (Home / Shop / About / Latest [red badge] / Blog / Pages /
  Contact), hero ("Select Your New Perfect Style" + paragraph + "Shop Now"),
  New Arrivals (3 products, e.g. "Thermo Ball Etip Gloves" — the source
  repeats one name; invent 3 plausible watch/accessory names), Popular Items
  (intro paragraph + 6 product names + "View More Products"), Watch of
  Choice (2 × heading + paragraph + "Show Watches"), methods (Free Shipping
  Method / Secure Payment System / Return & Exchange Policy — the DOM
  duplicates the second title but the third icon is `ti-reload`, so a
  returns/refund title fits), footer (blurb + Quick Links: About / Offers &
  Discounts / Get Coupon / Contact Us; New Products: Woman Cloth / Fashion
  Accessories / Man Accessories / Rubber made Toys; Support: Frequently
  Asked Questions / Terms & Conditions / Privacy Policy / Report a Payment
  Issue).
- **DOM oddity:** all product names in the live DOM are the same placeholder
  ("Thermo Ball Etip Gloves") and one shop-method title is duplicated — the
  section _kinds_ are the reference, not the literal demo strings.

## Structure (top → bottom, single page)

1. **Header** (`.header-area .main-header.header-sticky`, white, sticky) —
   logo "Time Zone." → rename to the Chrono brand ("Chrono" with the second
   word/syllable in red, mirroring Time-black/Zone-red); centered nav Home /
   Shop / About / Latest / Blog / Pages / Contact (Josefin Sans 600 16px
   `#141517`, hover `#ff2020`); "Latest" carries a small red badge
   (`.hot::before`, bg `#ff003c`, radius 8px, "HOT" — screenshot shows
   "NEW"); right: search + user + cart icons (hover `#ff2020`). Mobile:
   hamburger → dropdown (slicknav in source).
2. **Hero slider** (`.slider-area .slider-active`, bg `#f0f0f2`, min-height
   980px) — 2 slides via slick; left `.hero__caption`: h1 96px 700
   "Select Your New Perfect Style" + p 17px `#212025` + dark "Shop Now"
   `.btn.hero-btn` (bg `#4a4a4b`, red sweep); right `.hero__img`: large
   watch photo (`.heartbeat` animation in source) with a red vertical stripe
   behind it. Arrows (hover bg `#002d5b`).
3. **New Arrivals** (`.new-product-area.section-padding30`) — `.section-tittle`
   h2 "New Arrivals" (48px 700 `#000`) + 3 `.single-new-pro` cards: image
   (hover scale 1.04), h3 name `#444444` 24px 700, red price span `#ff2020`
   18px.
4. **Gallery mosaic** (`.gallery-area`, container-fluid p-0) — 4
   `.single-gallery` tiles: 2 `.big-img` (690px) + 2 `.small-img` (330px) as
   CSS background images; hover: `rgba(1,10,28,0.3)` overlay + image
   1.06→1.
5. **Popular Items** (`.popular-items.section-padding30`) — centered
   `.section-tittle` "Popular Items" + intro p; sort `.nice-select` (bg
   `#f2f2f2`, radius 30px); 6 `.single-popular-items` (3-col): image with
   hover `.img-cap` bar (bg `#f81f1f`, "Add to cart") + `.favorit-items`
   heart (30px `#333333`) + name + price; `.room-btn.pt-70` "View More
   Products" below.
6. **Video banner** (`.video-area`) — full-width bg photo (cover, 700px),
   centered round `.play-btn` (white circle + play icon; hover red).
7. **Watch of Choice** (`.watch-area.section-padding30`) — 2 rows
   alternating `.choice-watch-img` (photo) / `.watch-details` (`.padding-130`):
   h2 `#000` 56px 700 mb-40, paragraph, red `.btn` "Show Watches".
8. **Shop methods** (`.shop-method-area .method-wrapper`, bg `#ea0000`) — 3
   `.single-method` columns (padding 43px 20px 0 45px): icon 40px white
   (package / unlock / reload → lucide Package, CreditCard, RefreshCw) + h6
   white Roboto 20px 700 + p white.
9. **Footer** (`.footer-area.footer-padding`, white, pt 150 / pb 120) — 4
   columns: brand (logo + blurb `#868c98` 16px lh 1.8) + Quick Links + New
   Products + Support (`h4` `#000` 20px Roboto 500 mb-29); copyright row:
   left "Copyright © <year> All rights reserved | This template is made with
   ♥ by **Component Dock**" (→ https://www.componentdock.com/, replaces the
   source's Colorlib credit), right `.footer-social` (twitter, facebook,
   behance, globe icons).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/chrono`; `npm install` at repo root; CNAME +
      homepage `chrono.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#ff2020`, herobtn `#4a4a4b`,
      navy `#002d5b`, band `#ea0000`, ink `#141517`, muted `#868c98`,
      herobg `#f0f0f2`, paper `#ffffff`; Google Fonts `<link>` (Josefin Sans
      400/600/700 + Roboto 400/500/700)
- [ ] `src/data.ts` — nav links (7), hero slides (2), new arrivals (3),
      gallery tiles (4), popular items (6), watch-of-choice rows (2), method
      columns (3), footer widget links + blurb + socials
- [ ] Components: `Navbar` (desktop + hamburger mobile menu, search/user/
      cart icons, red Latest badge), `Hero` (2-slide slider + arrows + red
      stripe + dark CTA), `NewArrivals` (3 cards), `Gallery` (4-tile mosaic + hover overlay), `PopularItems` (6 cards + hover Add-to-cart bar +
      heart + sort select + View More button), `VideoBanner`, `WatchOfChoice`
      (2 alternating rows), `ShopMethods` (red band, 3 columns), `Footer`
      (4 columns + copyright bar + socials)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (slider navigation, mobile menu toggle, hover states)
- [ ] Subject-screen picsum seeds (hero watch, 3 new arrivals, 4 gallery,
      6 popular, 2 watch-of-choice) — pixel metric + browser verify, pin
      seeds in PR; prefer dark/neutral accessory-style shots
- [ ] `bash scripts/verify-app.sh chrono` green; PR with source, preview
      URL, tokens, deviations (React slider / hamburger / Component Dock
      credit); squash-merge immediately

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop nav
  lists are `display:none` and getByRole excludes them — query desktop-only
  links with `{ hidden: true }`; CSS `uppercase` does NOT change accessible
  names, query raw text ('Home'), not 'HOME'.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- Hero button hover sweep: implement with an absolutely-positioned overlay
  span (`group-hover:scale-x-100`, `origin-left`, transition-transform) —
  no jQuery.
- The red vertical stripe behind the hero watch is a background/block
  element in the source composition — recreate as a positioned div behind
  the image, matching the screenshot.
- Watch/product subject photos are arbitrary on picsum — screen seeds before
  pinning (see seed-screening method in the replication skill); a watch
  itself may be impossible to source, so prefer neutral dark product shots.
- No `tel:` literals anywhere (secret-scan rewrites them) — the source
  footer has no phone, so this is moot unless the implementer adds contact
  copy; if so, plain text only.
- `getByText(/Brand/)` matches every element whose direct text contains it —
  anchor with `/^Brand$/` where the word repeats (footer brand vs
  copyright).
