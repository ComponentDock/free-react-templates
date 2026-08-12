# Stayhaven (ColorLib Redplanet) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-stayhaven` by an implementer stream.

## Design notes

- **Original:** ColorLib "Redplanet" — free hotel/onepage website template.
  Source: https://colorlib.com/wp/template/redplanet/. New name: **stayhaven**
  (a haven to stay in — fits the "Stay With Us & Relax" hotel theme; single
  lowercase word, no collision with `ls apps/` or existing specs). Redplanet
  appears in TEMPLATES.md at line 487 (Bootstrap section, first unchecked item
  without a prep — the claim) and again as duplicates at lines 1922 (Hotel)
  and 2353 (One Page). No spec existed for redplanet on origin/main; the slug
  is not shipped anywhere (no `[x]` row references it).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/redplanet/`
  (HTTP 200, ~50KB) + stylesheet `css/style.css` (25.9KB) plus
  `bootstrap.min.css`, `owl.carousel.min.css`, `aos.css`, `fancybox.min.css`,
  `bootstrap-datepicker.css`, `jquery.timepicker.css`, ionicons + font-awesome
  icon fonts. Full rendered DOM extracted; structure below is from the DOM +
  CSS tokens. Screenshot `redplanet-free-template.jpg` (AVIF, 1200×946)
  confirms: transparent dark nav with "Red Planet." logo (first word red),
  full-width hero photo (woman relaxing in bed, soft warm light) with centered
  white serif headline "Stay With Us & Relax" and a mouse scroll indicator,
  white floating booking bar overlapping the hero bottom (Check In / Check
  Out / Adults / Children + orange-red "Check Availability" button), then a
  light-grey "Hey there!" section (text left, landscape photo right). Palette:
  white/light-grey sections (#f2f4fb), near-black headings, vivid red #ff0000
  primary (#cc0000 hover), dark footer and dark photo overlays.
- **Structure observed (1:1):**
  1. `nav.navbar.navbar-expand-lg.navbar-dark.pb_navbar.pb_scrolled-light`
     (fixed/transparent over hero → light scrolled variant): brand
     `span.text-danger` "Red" + "Planet"; nav links Home (#section-home),
     About (#section-about), Team (#section-team), Rooms (#section-rooms),
     Menus (#section-menus), Events (#section-events), Contact
     (#section-contact) + `li.cta-btn` "Get Started" (rounded pill span);
     mobile 3-line hamburger → Bootstrap collapse.
  2. `section.site-hero.overlay` (id=section-home, bg images/hero_5.jpg,
     cover, stellar 0.5, 100vh/min-700px, overlay rgba(0,0,0,0.45)):
     centered `h1.heading` white "Stay With Us & Relax" (Playfair bold) +
     `a.mouse.smoothscroll` mouse-icon scroll indicator.
  3. Booking bar (white card over hero bottom): form row with **Check In**
     (`#checkin_date` + calendar icon in `.field-icon-wrap`), **Check Out**
     (`#checkout_date` + calendar icon), **Adults** select (1,2,3,4+),
     **Children** select (1,2,3,4+), `button.btn-primary.btn-block` "Check
     Availabilty" (original typo → implement "Check Availability").
  4. `section.py-5.bg-light` (id=section-about): h2 "Hey there!" + lorem +
     `a.btn-primary.text-uppercase.letter-spacing-1` "Watch the video"
     (vimeo fancybox) + photo images/hero_4.jpg (text left / image right).
  5. `div.container.section` (id=section-team): h2 "Leadership" + 3-col
     carousel: person_1/2/3.jpg, **Will Smith — President**, **Claire
     Williams — Business Manager**, **Jane Johnson — Marketing Director**,
     each with a lorem quote.
  6. `section.section` (id=section-rooms): h2 "Rooms & Suites" + 3 `a.room`
     cards (img_1/2/3.jpg + centered `h2` + uppercase price span): **Single
     Room 90$ / per night**, **Family Room 120$ / per night**, **Presidential
     Room 250$ / per night**.
  7. `section.section.slider-section.bg-light`: h2 "Photos" + fancybox
     slider of 7 photos (slider-1..7.jpg, captions).
  8. `section.section.bg-image.overlay` (id=section-menus, bg images/hero_3.jpg,
     overlay rgba(0,0,0,0.6)): white h2 "Our Restaurant Menu" + white lorem;
     `ul.nav.nav-tabs` **Food** (active) / **Desserts** / **Drinks**
     (uppercase letter-spacing-2); 3 tab-panes, each 2-col grid of 6
     `div.food-menu` items: `span.text-primary.h4` price ($20.00, $35.00,
     ...) + white `h3` title link + `p.text-white.text-opacity-7` lorem.
     Items — mains: Murgh Tikka Masala, Fish Moilee, Safed Gosht, French
     Toast Combo, Vegie Omelet, Chorizo & Egg Omelet; desserts: Banana Split,
     Sticky Toffee Pudding, Pecan, Apple Strudel, Pancakes, Ice Cream Sundae;
     drinks: Spring Water, Coke/Diet Coke/Coke Zero, Orange Fanta, Lemonade/
     Lemon Squash, Sparkling Mineral Water, Lemon Lime & Bitters.
  9. `section.section.testimonial-section`: h2 "People Says" + slider: 2
     quotes with em-dash attributions — Jean Smith, John Doe.
  10. `section.section.blog-post-entry.bg-light`: h2 "Events" + 3 post cards
      (img_1/2/3.jpg, `span.meta-post` "February 26, 2018", h2 title link,
      lorem excerpt): Travel Hacks to Make Your Flight More Comfortable / 5
      Job Types That Aallow [sic] You To Earn As You Travel The World / 30
      Great Ideas On Gifts For Travelers.
  11. `section.section.contact-section`: h2 "Contact Us" + Address (98 West
      21th Street, Suite 721 New York NY 10016) / Phone ((+1) 234 4567 8910) / Email (info@yourdomain.com) with red ionicons.
  12. `section.section.bg-image.overlay` (CTA band, bg images/hero_4.jpg,
      overlay 0.6): h2.white "A Best Place To Stay. Reserve Now!" + `a.btn-
outline-white-primary.py-3.px-5` "Reserve Now" → opens #reservation-form
      modal.
  13. `footer.section.footer-section` (dark): 4 col-md-3 columns — links
      (About Us, Terms & Conditions, Privacy Policy, Rooms) · links (The
      Rooms & Suites, About Us, Contact Us, Restaurant) · contact-info
      (Address/Phone/Email rows, red text-primary icons) · newsletter
      ("Sign up for our newsletter" + underline email input + paper-plane
      button). Bottom row: copyright → repo-standard credit; right social:
      tripadvisor, facebook, twitter, linkedin, vimeo.
  14. Modal `#reservation-form`: h2 "Reservation" + white form (Name, Phone,
      Email, Date Check In, Date Check Out, Adults select, Children select)
      - submit button.
- **Design tokens:**
  - Font: **Playfair Display** (headings — h1/h2.heading, room titles,
    brand) + **Roboto** (body/UI). Google Fonts via `<link>` in index.html.
  - Primary red **#ff0000**: `.btn-primary` bg, `.text-primary`/`.text-danger`
    (brand first word, menu prices, contact/footer icons); hover **#cc0000**.
  - Light section bg **#f2f4fb** (about, photos, events).
  - Overlays: hero rgba(0,0,0,0.45); bg-image sections (menus, CTA)
    rgba(0,0,0,0.6).
  - Body grey #6c757d/#a6a6a6; menu descriptions white ~70% opacity.
  - Buttons: pill — border-radius **50px**, padding 10px 30px;
    `.btn-primary` solid red white text; `.btn-outline-white-primary` 2px
    white border, transparent bg, white text.
  - Forms: `.form-control` flat (radius 0, no shadow), bold black labels,
    icons inside `.field-icon-wrap`; newsletter input transparent with only
    a bottom border rgba(255,255,255,0.2), white text, italic placeholder.
  - Uppercase letter-spacing: room prices (letter-spacing-1), nav/menu tabs
    (letter-spacing-2), "Watch the video".
  - Hero: 100vh / min-height 700px, centered white bold serif headline,
    mouse scroll indicator.
- **Implementation notes:**
  - Original title says "A Onepage Hotel HTML Bootstrap Website Template" —
    document title should be "Stayhaven — Hotel & Travel".
  - The original typo "Check Availabilty" and "Aallow" should be fixed in the
    recreation (note the fixes in the PR).
  - Fancybox/vimeo popups are dead lightbox triggers — make them plain
    links/buttons with aria-labels.
  - Carousels (hero is single static; team, photos, testimonials slide) can
    be static grids/sliders with prev/next or dots; 3 unique team members and
    2 unique quotes are enough (owl repeats them in the original DOM).
  - Reservation modal: implement with a dialog (focus trap, close control,
    Escape) per conventions; the original submit button has no text in the
    DOM — use a red "Reserve Now"/"Submit" button with an aria-label.
  - Booking dates: original uses bootstrap-datepicker/timepicker; implement
    plain text inputs with calendar icons (no datepicker dependency).
  - Brand icons (tripadvisor, facebook, twitter, linkedin, vimeo) are NOT in
    lucide-react — use inline SVG paths (simple-icons).
  - Images: `picsum.photos/seed/stayhaven-N/w/h` (hero ~1600×900, about
    ~800×600, team 3×~400×400, rooms 3×~600×450, photos 7×~800×600, events
    3×~600×450). Verify hero/room seeds resolve to suitable hotel/travel
    subjects (see seed-screening pitfalls in the replication skill).
  - Icons via lucide-react: Calendar, Users, ChevronDown, ChevronLeft,
    ChevronRight, Play, MapPin, Phone, Mail, Send, Menu, X, Heart.

## Tasks

- [ ] Scaffold app (copy simplest existing app; rename package
      `@free-react-templates/stayhaven`; `npm install` at root before
      committing so lockfile registers the workspace).
- [ ] Register `injectUiSource()` in `vite.config.ts` (see
      docs/conventions.md).
- [ ] TDD red: write section tests first (Navbar, Hero, BookingBar, About,
      Team, Rooms, Photos, Menu, Testimonials, Events, Contact, CtaBand,
      ReservationModal, Footer, App composition) mirroring the spec
      scenarios.
- [ ] Theme tokens in `index.css` `@theme`: primary `#ff0000` (+hover
      `#cc0000`), light `#f2f4fb`, ink `#000`, body grey `#6c757d`, dark
      overlay rgba(0,0,0,0.45/0.6), fonts Playfair Display + Roboto.
- [ ] Implement sections in order; keep the original's 1:1 section order.
- [ ] Navbar: transparent dark over hero → light scrolled variant, brand
      "StayHaven" (first word red), anchor links + "Get Started" pill,
      mobile hamburger collapse.
- [ ] Hero: full-viewport photo + dark overlay + centered white Playfair
      headline + mouse scroll indicator.
- [ ] Booking bar: white floating card, Check In/Out date inputs with
      calendar icons, Adults/Children selects (1,2,3,4+), red block
      "Check Availability" button.
- [ ] About: light-grey split, "Hey there!" + copy + red uppercase
      "Watch the video" button + photo.
- [ ] Team: "Leadership" carousel/grid, 3 members (photo, name, role, quote).
- [ ] Rooms: 3 centered cards (photo, name, uppercase price line).
- [ ] Photos: light-grey slider of 7 placeholder photos with captions.
- [ ] Menus: dark bg-image section, white heading, Food/Desserts/Drinks
      tabs, 6 items per panel (red price, white title, dimmed lorem).
- [ ] Testimonials: "People Says" slider, ≥2 quotes with authors.
- [ ] Events: 3 post cards (photo, date, title, excerpt).
- [ ] Contact: centered "Contact Us" + Address/Phone/Email with icons.
- [ ] CTA band: bg-image + overlay, white headline, outline-white
      "Reserve Now" button opening the reservation modal.
- [ ] Reservation modal: dialog with Name, Phone, Email, Check In, Check Out,
      Adults, Children + submit; close control + Escape.
- [ ] Footer: dark, 2 link columns + contact info + newsletter (underline
      email + paper-plane button) + social icons + repo-standard credit.
- [ ] Run `npm run verify:app -- stayhaven` (typecheck → lint → vitest 100% →
      build) until green; fix root causes, never disable gates.
- [ ] Self-review (docs/self-review.md checklists), then PR on
      `feat/template-stayhaven` → merge immediately (`gh pr merge --squash
    --delete-branch`; if main checked out elsewhere, omit --delete-branch
      and `git push origin --delete` the remote).
- [ ] After merge: `[~]`→`[x]` in TEMPLATES.md for Redplanet line 487 (+
      duplicate lines 1922 and 2353 — check whether the checklist convention
      marks all dup rows; check sibling history first), add surge URL,
      `npm run readme:status`, commit `chore:` and push.
