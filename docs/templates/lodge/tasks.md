# Lodge (ColorLib Hotel) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-lodge` by an implementer stream.

## Design notes

- **Original:** ColorLib "Hotel" — free hotel website template.
  Source: https://colorlib.com/wp/template/hotel/. TEMPLATES.md line 418
  (Bootstrap category; mark `[x]` when done).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/hotel/`
  (HTTP 200, 56.9KB) + stylesheet `css/style.css` (40.8KB, SCSS-compiled).
  Full rendered DOM extracted; structure below is from the DOM + CSS tokens.
  Screenshot `hotel-free-template.jpg` (1200×946) confirms the visual
  design: dark charcoal header (white serif "HOTEL" wordmark, centered white
  nav, location-pin address right); hero = warm luxury lobby photo with
  bokeh + left-aligned white serif headline "We hope you'll enjoy your
  stay."; three rectangular amenity cards below (Pool night shot, wooden
  Sauna interior, plated Restaurant meal) with uppercase labels + thin gold
  arrows; below, a white section with room cards (image left, text right,
  thin gold-bordered CHECK AVAILABILITY button). Upscale-hotel aesthetic:
  Taviraj serif headlines + Open Sans body, gold #AE9548 on charcoal
  #353535 / ink #081624 / off-white #F7F7F7.
- **Structure observed (1:1):**
  1. `header.header-section` (bg #353535, padding 38px 0, absolute over
     hero): `inner-header` — logo left; `main-menu` (li inline-block, mr
     40px): Home, About, Rooms, Facilities ▾ (`.drop-menu` white bg 220px,
     top 70px: Junior Suit, Double Room, Senior Suit, Single Room), News,
     Contact; right `top-info` location-pin + "1525 Boring Lane, Los
     Angeles, CA".
  2. `hero-slider`: `.slider-item` (938px, pt 395px, set-bg photo) h1 "We
     hope you'll enjoy your stay." white serif left; `.slider-nav`: 3
     `.nav-text` amenity cards — img + uppercase label (Pool, Sauna,
     Restaurant) + `lnr-arrow-right` gold arrow.
  3. `room-check` (pb 52px): `.room-item` (mb 40px, shadow 2px 15px 75px 6px
     #ECECEC): `.room-pic-slider` (owl-carousel, 3 pics) + `.room-text` (pt
     35px, pl 35px, pr 45px, pb 37px): `.room-title` h2 "Junior Suite"
     (36px #2d220f, float left) + `.room-price`: span "From" (14px Open
     Sans 300 #2d220f, abs left -40px) + h2 "$252" (36px Open Sans 400
     #081624, float right); `.room-features` (flaticon icons: Smart TV,
     High Wi-fii, AC, Parking, Pool); booking widget: `.room-quantity`
     (mb 34px) Adults / Children / Rooms steppers; `.room-selector`: "Room"
     - `select.suit-select` (Eg. Master suite, Double Room, Single Room,
       Special Room) + `.primary-btn` "CHECK AVAILABILITY" + arrow.
  4. `about-room` (text-center): h2 quote "“Customers may forget what you
     said but they will never forget how you made them feel”." (48px/500
     #242424, lh 56px, mb 26px); `.about-para` two col-lg-6 lorem columns.
  5. `facilities-section spad` (bg #F7F7F7, pt 86px, pb 115px):
     `.section-title` h1 "Facilities" (72px/400 #242424, mb 80px);
     `.facilities-content`: alternating `.facilities-img set-bg` +
     `.facilities-text-warp` > `.facilities-text` (h2 "Wellness Center"
     #242424 mb 17px + lorem + `.primary-btn fac-btn`) ×2.
  6. `testimonial-section spad`: h1 "Guestbook"; `.testimonial-item`:
     `ul.nav[role=tablist]` author tabs (`.author-pic` img) + `.tab-content`
     — 3 `.tab-pane` (first active): `.single-testimonial-item`
     (`span.test-date` "02/02/2019", `.test-rating` 5 fa-star gold, h4
     "Loved It", p text); `.testimonial-author-item` pic + name/role.
  7. `follow-instagram` (bg #f7f7f7, padding 23px 0): h2 "Follow us on
     Instagram @yourhotel" (48px/500) + 4 `room-footer-pic` thumbs.
  8. `footer-section` (bg #353535, pt 43px): `footer-room-pic` strip;
     `footer-logo`; 4 `single-footer-widget` `widget-text`: Location (1525
     Boring Lane, Los Angeles, CA), Reception +1 (603)535-4592, Shuttle
     Service +1 (603)535-4592, Restaurant +1 (603)535-4592; copyright bar
     (Colorlib credit → repo-standard) + Privacy Policy / Photo Requests.
- **Tokens (from css/style.css):** gold #AE9548 (33 uses; button border
  #AE954B) = arrows + accents; ink #081624 (16 uses) = button text, price;
  charcoal #353535 = header + footer bg; #2d220f room title/"From";
  #242424 body/headings; #111111 default headings; #F7F7F7 facilities +
  instagram bg; #ECECEC room-card shadow; fonts Taviraj (serif, 400/500
  headings) + Open Sans (300/400/700 body); `.primary-btn` 14px/700
  uppercase #081624, padding 15px 34px 15px 64px, border 2px #AE954B, gold
  arrow right (#AE9548, 21px); `.section-title h1` 72px/400; quote 48px/500
  lh 56px; `.section-title h2` 48px/500; room title + price 36px; hero
  slider 938px (pt 395px).
- **Recreation decisions:** name "Lodge" (wordmark "Lodge", package
  @free-react-templates/lodge, app apps/lodge). Dark charcoal navbar over
  hero (sticky + shadow on scroll), nav links + Facilities dropdown, address
  widget with map-pin; hero slider (auto-advance + prev/next) with serif
  headline + 3 amenity cards; rooms 2-up cards (carousel, title, From
  $252/night, 5 feature icons via lucide-react); booking widget (steppers +
  select + CHECK AVAILABILITY button); quote + 2-col about; Facilities on
  #F7F7F7 with alternating photo/text + fac-btn; Guestbook tabbed
  testimonials; Instagram strip; footer #353535 (Location / Reception /
  Shuttle Service / Restaurant with tel:+16035354592 links, room-photo
  strip, repo-standard credit "© 2026 Lodge. All rights reserved." +
  "recreation of ColorLib Hotel"). Images picsum-seeded
  (picsum.photos/seed/lodge-N/w/h); Google Fonts Taviraj + Open Sans via
  <link>; lucide-react icons.

## Task outline (implementer)

- [ ] Scaffold `apps/lodge` (copy simplest existing app; package
      `@free-react-templates/lodge`; vite.config injectUiSource()).
- [ ] `src/data.ts` — nav links + dropdown, amenity cards (Pool/Sauna/
      Restaurant), 2 room cards (name, price, features), booking widget
      options, facilities blocks, testimonials (3, with author), instagram
      thumbs, footer columns.
- [ ] `Navbar.tsx` — charcoal #353535, logo "Lodge", dropdown, address
      widget, sticky on scroll, mobile hamburger menu (aria-expanded).
- [ ] `Hero.tsx` — full-width photo slider (auto-advance + prev/next),
      left serif headline, dark overlay, 3 amenity cards with gold arrows.
- [ ] `Rooms.tsx` — 2-up room cards (image carousel, title, "From $252/
      night", 5 feature icons) + booking widget (steppers Adults/Children/
      Rooms, room select, CHECK AVAILABILITY button).
- [ ] `About.tsx` — quote banner (48px serif) + two-column paragraphs.
- [ ] `Facilities.tsx` — #F7F7F7 bg, "Facilities" 72px title, 2 alternating
      photo/text blocks + fac-btn links.
- [ ] `Guestbook.tsx` — tabbed testimonials (author pic tabs, date, 5 gold
      stars, title, text).
- [ ] `InstagramStrip.tsx` — "Follow us on Instagram @yourhotel" + 4 thumbs.
- [ ] `Footer.tsx` — photo strip, logo, 4 columns (tel: links), copyright
      bar with repo-standard credit.
- [ ] `App.tsx` — compose sections 1:1; document title "Lodge — Hotel".
- [ ] Tests (100% coverage, scenario-style per spec); gate:
      `npm run verify:app -- lodge`.
- [ ] Commit `feat: add Lodge (ColorLib Hotel) recreation`; PR with source
      slug, preview URL, tokens, renames; squash-merge immediately.
- [ ] After merge: mark TEMPLATES.md line 418 `[x]` + surge URL + homepage,
      `npm run readme:status`.
