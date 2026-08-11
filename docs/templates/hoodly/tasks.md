# Hoodly (ColorLib Locals Directory) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hoodly`.

## Source mapping

- **ColorLib item:** "Locals Directory" (TEMPLATES.md — appears 3×: lines
  441, 1080, 1545; all rows point to the same source, one prep covers all;
  verified with `grep -c 'wp/template/locals-directory/'` = 3).
- **Source URL:** https://colorlib.com/wp/template/locals-directory/
- **Preview URL:** https://preview.colorlib.com/theme/localsdirectory/ —
  **HTTP 200, live** (confirmed 2026-08-11, ~26.6 KB HTML, `<title>Local
Directory | Template</title>`). **IMPORTANT: the TEMPLATES.md slug
  `locals-directory` 404s on the preview portal — the real preview slug is
  `localsdirectory` (no hyphen, confirmed via
  `preview.colorlib.com/assets/js/products.js`; entry category "Job Board",
  demo preview `2019/10/localsdirectory-demo-preview.jpg`).** Do not redo
  this lookup.
- **Preview CSS:** https://preview.colorlib.com/theme/localsdirectory/css/style.css
  (~41 KB) — also imports bootstrap.min, font-awesome, flaticon,
  nice-select, owl.carousel, magnific-popup, slicknav. Site is jQuery +
  Bootstrap 4 + owl-carousel + nice-select + magnific-popup + slicknav —
  NOT Tailwind. Section backgrounds via `data-setbg` attrs read by main.js.
- **Meta note:** the preview `<meta description>` says "Yoga Studio
  Template" — a leftover from the unica base template; ignore it.

## Reference research (done — do not redo)

### Screenshot (`localsdirectory-free-template.jpg`, 1200×946)

Matches the live template: dark header bar with the two-line white logo
"LOCALS / DIRECTORY & MORE" (recreate as text brand "HOODLY" + "LOCAL
DIRECTORY" tagline) and a pink "Add Listing" pill; hero over a busy New
York street photo (yellow cabs, ~40% dark overlay) with the huge white
"New York" heading and the translucent white search panel (Search Category

- Your Location dropdowns + pink "Search Now"); below, the "Top trending
  for your city" section with two light-grey listing cards (circular photo,
  yellow FEATURED tag, title, address, pink + grey status pills). The live
  preview DOM + parsed stylesheet are the authoritative reference; the
  screenshot confirms the same design.

### Live DOM (primary reference — section order verified against fetched HTML + parsed CSS)

1. **Preloader** `div#preloder` (loader circle 60px, border-radius 60px —
   optional, can omit).
2. **Header** `header.header-section` (position absolute, width 100%,
   height 112px, padding 32px 0 31px, bg `#1d1d1d`, z-index 1):
   - `div.logo` (float left, mr 115px) — logo.png → text brand "HOODLY"
     (bold uppercase white) + "LOCAL DIRECTORY" tagline.
   - `nav.main-menu.mobile-menu` (float left): Home (`li.active`), Explore,
     More Cities, News, Contact — `a` 20px #fff 400, line-height 42px;
     hover `#FF5581`.
   - `div.header-right` (float right): `div.user-access` (inline-block,
     mr 25px) — "Register/" + "Login" (20px #fff 400); `a.primary-btn`
     "Add Listing" (bg `#FF5581`, padding 11px 44px 15px, 20px, square).
   - Mobile: slicknav → client-side hamburger (slicknav nav bg `#222`).
3. **Hero** `section.hero-section.set-bg` (height 938px, padding-top 253px;
   bg hero-bg.jpg + dark overlay) > col-lg-12 > `div.hero-text`
   (text-align center): pin img (→ lucide MapPin) + `h1` 96px #fff mb 34px
   "New York" + `form.filter-search` (padding 25px 38px 38px; `::after`
   white bg opacity 0.43, z-index -1):
   - `div.category-search` (inline-block, width calc(41% - 20px)): `h5`
     "Search Category" (18px #fff 900, mb 12px) + `select.ca-search`
     (nice-select: transparent bg, 50px height, white 16px, radius 0,
     padding-left 31px; list bg `#1D1D1D`) — Restaurants, Hotels, Food &
     Drinks, Home Delievery, Commercial Shops.
   - `div.location-search` (same): h5 "Your Location" + select — New York.
   - `button` "Search Now" (absolute right 38px top 57px, bg `#FF5581`,
     16px, padding 13px 65px, border 1px solid `#FF5581`, square).
   - → client-side selects (no nice-select), submit → success state.
4. **Trending** `section.trending-restaurant.spad` (100px 0):
   - `div.section-title` (mb 65px): h2 48px `#242424` 700 "Top trending
     for your city" + p 18px `#787878` "Explore some of the best places
     in the world".
   - 4 × `div.col-lg-6` > `div.trend-item` (bg `#F7F8FB`, padding 18px
     18px 18px 0, mb 30px, relative):
     - `div.trend-pic` (inline-block, relative, ml -15px, mr 20px): img
       185×185 radius 50% (trending-1..4.jpg → picsum seeds); `div.rating`
       (absolute right 0 top 0, 55×55, bg `#FF5581`, white 16px 900,
       line-height 55px, radius 50%) — 4.9 / 4.9 / 4.6 / 5.0.
     - `div.trend-text` (inline-block, float right, pt 20px, pb 15px):
       h4 22px `#242424` 700 (New Place Restaurant / Palace Club / Grand
       Hotel / Opera Concert); span 16px `#FF5581` 700 mb 6px (Main Road,
       No 25/11 / Parker Street, No 234/40); p 16px `#787878` mb 22px.
     - pills: `div.closed` "Closed Now" (inline-block, padding 7px 20px,
       bg `#FF5581`, 14px #fff, mr 10px, mb 5px) + `div.open` "Opens
       Tomorow at 10am" / "Open Until 3am" (same, bg `#CACDD6` base /
       `#FF5581` nightlife+events).
     - `div.tic-text` FEATURED tag (absolute right 0 top 0, 12px 700
       uppercase, padding 5px 15px, #fff): base `#FFC600` yellow,
       `.nightlife` `#009CFF` blue, `.hotels` `#4CCA81` green,
       `.events` `#C55CD8` purple. Variant classes change tag + open-pill
       colors ONLY (card bg stays `#F7F8FB`).
5. **Categories** `section.categories-section.spad` (pt 0, pb 88px,
   margin 0 37px, overflow hidden) > container-fluid:
   - `div.categories-left`: 1 × `div.categories-item.set-bg.large-img`
     (height 745px, mb 26px, padding 22px; bg cat-1.jpg) — "Restaurants".
   - `div.categories-right` > row: 4 × `div.col-md-6` >
     `div.categories-item.set-bg` (height 360px) — Nightlife & Clubs
     (cat-2), Spa & Resorts (cat-3), Hotels (cat-4), Clubs & Pubs (cat-5).
   - Each: `a.img-hover.pop-up` (magnific-popup lightbox; zoom icon hover
     → lucide ZoomIn) wrapping img; `div.categories-text` (max-width
     333px, padding 30px 15px 29px 48px, inline-block, relative, bg
     `#000`, z-index 999): h4 22px #fff 700 + p 16px `#cacdd6` 700 "2373
     Listings" + a 16px `#FF5581` 700 "View All".
   - → lightbox = client-side modal.
6. **Testimonials** `section.testimonial-section` (margin 0 52px) >
   col-lg-10 offset-lg-1 > `div.testimonial-item.owl-carousel` — 3 ×
   `div.single-testimonial-item` (text-center): img avatar (testimonial-1
   .png → picsum portrait seed); p italic 20px `#787878` lh 36px mb 30px;
   h4 "Michael Smith" 22px `#242424` 700; span "CEO Company" 16px
   `#787878`. Below: `div.bg-img` > img (testimonial-bg.png, decorative
   ribbon — optional). → carousel = client-side state (prev/next + dots).
7. **Work** `section.work-section.set-bg` (bg line-bg.jpg, pt 110px,
   pb 85px, margin 0 52px): section-title h2 48px #fff 700 "How it works"
   - p white; 3 × `div.col-lg-4` > `div.single-work-item` (mb 30px):
     `div.number` (76×76, bg `#2C2C2C`, white 24px 700, lh 76px, float
     left) "01."/"02."/"03." + `div.work-text` (pad-left for float): h4
     white 700 mb 18px — "Search the portal" / "Choose the one 4u" /
     "Book it!"; p white 16px lh 28px.
8. **App** `section.app-section.spad` (bg `#F7F8FB`): col-lg-5 img
   (phone.png) + col-lg-6 offset-lg-1 `div.app-text`: section-title h2
   48px `#242424` 700 "Get the App now!" + p; `ul` 3 × li (list-style
   none, bg `#FF5581`, mb 19px, padding 11px 0 14px 30px, white 15px;
   img check-icon.png → lucide Check, mr 19px) — 3 bullets (paraphrase);
   then `a > img` × 2 (apple-store.jpg / google-store.jpg → text badges
   "App Store" / "Google Play" with inline SVG or simple pills — lucide
   has NO brand icons).
9. **Footer** `footer.footer-section.spad` (bg `#1d1d1d`, pt 120px):
   - `form.newslatter-form` (relative, mb 85px): input (100% width,
     height 66px, border 1px `#7E7E7E`, bg `#333333`, white italic 700,
     padding-left 35px) + button "Subscribe to our Newsletter" (absolute
     right 0, width 292px, height 100%, bg `#FF5581`, white 18px 700,
     border 1px `#FF5581`). Submit → success state.
   - 4 × `div.col-lg-3.col-sm-6` > `div.footer-widget` (mb 40px): h4
     white 700 mb 56px + ul li (16px `#8e8e8e` lh 36px):
     - Usefull Links: About us, Testimonials, How it works, Create an
       account, Our Services.
     - Categories: Hotels, Restaurant, Spa & resorts, Concert & Events,
       Bars & Pubs.
     - Usefull Links (SOURCE DUPLICATES widget 1 — either keep the
       duplicate per source or rename to e.g. "Support" with distinct
       links; note the deviation in the PR).
     - From the Blog: 2 × `div.single-blog` (mb 15px, overflow hidden):
       `div.blog-pic` img (f-blog-1/2.jpg → picsum) + `div.blog-text`:
       h6 "10 Best clubs in town" + span "March 27, 2019" (14px
       `#FF5581`).
   - `div.row.footer-bottom` (pt 60px): `div.copyright` 14px `#414141`
     mb 10px — "© 2026 Hoodly — Local Directory · All rights reserved"
     (heart `#FF5581`); `div.footer-menu` text-right: 5 × a (Home,
     Explore, More Cities, News, Contact — 16px #fff, hover `#FF5581`).

## Design tokens (see spec for full table)

- brand-pink `#FF5581` (all CTAs, rating circle, closed pill, View All,
  app bullets, newsletter button, hover accents, heart), ink `#242424`
  (headings/card titles), muted `#787878` (body copy), light `#F7F8FB`
  (card + app section bg), dark `#1d1d1d` (header + footer bg, dropdown
  list), input-dark `#333333` (newsletter input, border `#7E7E7E`),
  number-dark `#2C2C2C` (work squares), open-grey `#CACDD6`, tag colors
  `#FFC600`/`#009CFF`/`#4CCA81`/`#C55CD8`, footer-muted `#8e8e8e`,
  copyright `#414141`, panel white @ 0.43 opacity.
- Font: Lato only (nav 20/400, hero h1 96, section h2 48/700, card h4
  22/700, buttons 16–20, pills 12–14). No Google Fonts link in the
  preview — load Lato via Google Fonts in index.html.
- Radii: buttons/inputs square (radius 0); circles only on trend-pic img
  185px and rating 55px (50%); number squares 76px flat.
- Sections: spad 100px; header 112px; hero 938px/253px top; categories
  pb 88px + margins 0 37px; testimonial/work margins 0 52px; work
  110/85px; footer pt 120px; newsletter mb 85px, input 66px, button
  292px; widget h4 mb 56px; footer-bottom pt 60px.

## Implementation tasks (todo outline)

1. Scaffold: copy simplest existing app → `apps/hoodly`, package
   `@free-react-templates/hoodly`; register workspace (npm install at root
   so package-lock.json registers it).
2. index.html: title "Hoodly — Local Business Directory", Lato Google
   Fonts `<link>`.
3. `@theme`: brand-pink `#FF5581`, ink `#242424`, muted `#787878`, light
   `#F7F8FB`, dark `#1d1d1d`, input-dark `#333333`, number-dark
   `#2C2C2C`, open-grey `#CACDD6`, tag colors, fonts.
4. Data module `src/data.ts`: nav links, search options, 4 trend cards
   (title/address/rating/tag/status), 5 categories, 3 testimonials, 3
   work steps, 3 app bullets, footer widgets + blog posts.
5. Components (tests first, per section):
   - `Header.tsx` — brand + nav + Register/Login + Add Listing + mobile
     hamburger.
   - `Hero.tsx` — city heading + pin icon + search form (2 selects +
     Search Now; submit → success state).
   - `Trending.tsx` — 4 listing cards (circular pics, rating circles,
     pills, FEATURED tags).
   - `Categories.tsx` — 1 large + 4 grid tiles with black text boxes +
     lightbox modal.
   - `Testimonials.tsx` — carousel (3 slides, prev/next + dots).
   - `HowItWorks.tsx` — photo band + 3 numbered steps.
   - `AppSection.tsx` — phone visual + 3 check bullets + store badges.
   - `Footer.tsx` — newsletter form (submit → success) + 4 widgets +
     blog cards + copyright bar + footer menu.
6. `App.tsx` composition in DOM order; `src/main.tsx` unchanged pattern.
7. Tests: 100% coverage; `getAllByRole` for duplicate nav links (desktop +
   mobile); carousel + lightbox + form states tested with user-event.
8. Verify: `npm run verify:app -- @free-react-templates/hoodly` (or
   `scripts/verify-app.sh hoodly`), then push branch, open PR, squash merge
   immediately, confirm deploy workflow + surge URL 200.

## Fidelity notes / gotchas

- **Preview slug differs from TEMPLATES.md slug:** `localsdirectory` (no
  hyphen) is the live preview; `locals-directory` 404s. Implementers
  should curl the no-hyphen URL; the source mapping in TEMPLATES.md keeps
  the hyphenated slug.
- owl-carousel (testimonials) + nice-select (dropdowns) + magnific-popup
  (category lightbox) + slicknav (mobile menu) → all pure client-side
  state; no jQuery dependencies.
- `data-setbg` backgrounds (hero-bg.jpg, line-bg.jpg, cat-1..5.jpg) →
  picsum seeds or CSS gradients; never copy ColorLib images.
- Source typos to fix in recreation: "Home Delievery", "Opens Tomorow",
  "Choose the one 4u" (keep meaning, fix spelling: "Home Delivery",
  "Opens Tomorrow at 10am", "Choose the one for you" — or keep the
  source's informal "4u"; flag in PR), "Usefull Links" (duplicate widget
  — decide: keep dup per source or rename second to "Support").
- The rating is a NUMBER circle (4.9/5.0), not stars — the star colors
  in CSS (`#FFD200`/`#FED204`) are for other pages (arrange-items), not
  this one.
- Search/Add Listing/newsletter buttons are SQUARE — do not add rounded
  corners.
- lucide-react has NO brand icons — App Store/Google Play badges and the
  copyright heart must use inline SVG (simple-icons paths) or plain text
  pills; lucide Heart exists for the footer heart.
- Placeholder images via `https://picsum.photos/seed/hoodly-<n>/<w>/<h>`
  (deterministic per template).
- The categories text box is `#000` with a `#cacdd6` listing-count line —
  keep the black-box contrast; it sits over a photo tile.
- Testimonial section and work band use `margin: 0 52px` (edge insets)
  and the categories section `margin: 0 37px` — match these if the
  container model allows, or note the deviation.
