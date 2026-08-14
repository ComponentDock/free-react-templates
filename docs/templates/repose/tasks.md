# Repose (ColorLib Unwind) — Tasks & Design Notes

> Recreation of ColorLib "Unwind"
> (https://colorlib.com/wp/template/unwind/) under the NEW name
> **Repose** (rest-themed word; single lowercase word, no collision with
> `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md —
> verified 2026-08-14), per the monorepo naming mandate (never reuse the
> ColorLib source name). TEMPLATES.md: primary row in Bootstrap 5 (89) at
> line 634; duplicate row in Hotel (38) at line 1935 (both `- [ ]`).

## Design notes (replication findings)

- **Original:** ColorLib "Unwind" — free HTML5 LUXURY HOTEL / RESORT
  booking template (transparent navbar over a 100vh seaside-terrace hero,
  dark overlapping booking bar, about split w/ feature cards, 6-icon
  services row, photo CTA band, featured rooms, video band, restaurant
  menu, testimonial carousel, dark stats counters, blog grid, gallery
  strip, dark 4-column footer). The recreation brands itself **Repose**.
- **Live preview analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/unwind/` — HTTP 200, ~44.4 KB HTML +
  `css/style.css` ~79.4 KB (curl; Bootstrap 5 + tiny-slider + glightbox +
  aos + datepicker + fontawesome + ionicons + flaticon). The TEMPLATES.md
  screenshot (`unwind-free-template.jpg`, 1200×946, viewed in browser)
  matches the live render: terrace hero, dark booking bar, gold buttons,
  light bands, dark footer.
- **Visual design (screenshot):** luxurious resort/hotel landing. Full-bleed
  hero photo (white wicker loungers, umbrellas, ocean view) under dark
  overlay; centered white serif "Most Relaxing Place" + small caps tagline
  - gold "Take A Tour" / white-outline "Learn More"; dark `#222222`
    booking bar overlapping the hero with Check-In / Check-Out / Rooms /
    Guests + gold "Check Availability"; white + light-grey content bands with
    gold `#c5a880` accents (buttons, subheadings); 3 room cards ($450/night +
    Book Now); full-width cuisine image; dark stats band; 4 blog cards;
    5-image gallery; dark `#1a1a1a` footer. Band rhythm: photo → dark bar →
    white → white → photo CTA → light → photo video → white → light → dark →
    light → white → dark.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** — `nav.navbar.ftco-navbar-light` (transparent absolute,
     top 20px; `.scrolled` → solid dark): brand "Unwind Hotel Booking"
     (serif) + `ul.navbar-nav.ms-auto` Home · About · Rooms · Resto & Bar
     · Blog · Contact (uppercase, white, gold hover) + mobile toggler
     (hamburger + "Menu"). Brand becomes **"Repose Hotel Booking"**.
  2. **Hero** — `section.hero-wrap` (100vh, bg `images/bg_1.jpg`
     fixed-cover + `.overlay`): centered — `span.subheading` "Enjoy Your
     Wonderful Holidays With A Great Luxury Experience!" (white 13px 700
     uppercase ls 1px) · `h1` "Most Relaxing Place" (white 80px 700 serif
     lh 1.2; 40px mobile) · 2 buttons `p-4 py-3` w/ ArrowRight icon:
     gold `btn-primary` "Take A Tour" + white-outline `btn-white
btn-outline-white` "Learn More".
  3. **Booking bar** — `section.ftco-section.ftco-booking` (margin-top
     -80px) > `form.booking-form` (bg `#222222`, shadow `0 5px 25px -2px
rgba(0,0,0,0.06)`): `row g-0` of 5 — Check-In (calendar icon + input
     ph "Check-In Date") · Check-Out (calendar + ph "Check-Out Date") ·
     Rooms (select: Suite / Family Room / Classic Room / Superior Room /
     Luxury Room) · Guests (select: 1–10+ Person) · gold "Check
     Availability" button (uppercase 16px 700). Labels uppercase 12px 700
     white ls 1px; fields separated by `border-left rgba(0,0,0,0.05)`;
     inputs transparent, placeholder `rgba(255,255,255,0.4)`, radius 0.
  4. **About** — `section.ftco-about-section` (white, container-xl):
     left `col-md-6` two stacked `f-services` cards: "Cozy Room" (image
     f-services.jpg + BedDouble icon + p) / "Special Offers" (image
     f-services-2.jpg + Gift icon + p) — `d-md-flex flex-md-column-reverse`
     on the first; right `col-md-6 heading-section`: subheading "About
     Us" (gold uppercase 700 ls 2px) + h2 "Repose A Hotel Booking Agency"
     (64px 400 serif) + p + gold "Book Your Room Now" (py-3 px-4).
  5. **Services** — `section.ftco-section` (white): centered heading
     "Unwind Services" + h2 "Explore Our Hotel Services"; 6 ×
     `a.services` (icon + h2): Free Wifi (Wifi) · Easy Booking
     (CalendarCheck) · Restaurant (UtensilsCrossed) · Swimming Pool
     (Waves) · Beauty & Health (Sparkles) · Help & Support (Headphones).
  6. **Intro CTA** — `section.ftco-intro.img` (bg_1.jpg + overlay,
     container py-5): left subheading "Find Best Hotel For Living" (fix
     source typo "Leaving") + h1 "Find the Best Hotel in Your Next
     Vacation" (white serif); right gold "Book Now" (py-md-4 px-md-5).
  7. **Featured Rooms** — `section.ftco-section.bg-light` (`#f8f8f8`):
     subheading "Our Rooms" + h2 "Featured Rooms"; 3 × `room-wrap`
     (room-1..3.jpg + text p-5 text-center): h3 Suite Room / Family
     Room / Deluxe Room + p + "$450 <small>/ night</small>" + btn-custom
     "Book Now" (uppercase 14px 700 `#222`); hover → bg `#222222`, white
     text, image overlay.
  8. **Video** — `section.img.vid-section` (bg_2.jpg + overlay,
     vid-height centered): subheading "Watch our luxurious hotel" + h3
     "Take A Tour" + circular play button (lucide Play, white, gold hover)
     → state-based lightbox (source uses glightbox to a Vimeo tour).
  9. **Restaurant & Bar** — `section.ftco-section` (white,
     container-fluid): subheading "Resto & Bar" + h2 "Restaurant & Bar";
     left `col-xl-5` cuisine image (resto-bar.jpg) w/ centered cooking
     icon; right `col-xl-7` 2-col grid (`col-md-6`) of 8
     `pricing-entry` rows (thumb menu-1..8.jpg + name + price).
     SOURCE REPEATS "Grilled Beef with potatoes" 6× — paraphrase into 8
     distinct dishes (keep price set $20.00/$29.00/$49.91…).
  10. **Testimonials** — `section.testimony-section.bg-light`: subheading
      "Testimonial" + h2 "Happy Guests"; carousel (tiny-slider) of 5
      items: user-img (person_1..3.jpg) w/ Quote icon overlay + name +
      position + msg. SOURCE REPEATS "Roger Scott / Marketing Manager"
      5× — paraphrase into 5 distinct guests.
  11. **Counters** — `section.ftco-section-counter` (bg `#222222`): 4 ×
      `counter-wrap` (padding 90px 40px, centered): 38,900 Happy Guests ·
      320 Rooms · 1,000 Staff · 587 Destinations (countup on scroll;
      fix "Staffs"→"Staff", "Destination"→"Destinations").
  12. **Blog** — `section.ftco-section.bg-light`: subheading "Our Blog" +
      h2 "Recent Blog"; 4 × `blog-entry` (image_1..4.jpg + meta "Admin ·
      Dec. 23, 2020 · 3 Comments" + h3 + excerpt). SOURCE REPEATS "Best
      Hotel Near Beach in Hawaii" 4× — paraphrase into distinct titles.
  13. **Gallery** — `section.ftco-gallery` (white, container-fluid): 5 ×
      `gallery-wrap` (250px tall, gallery-1..5.jpg), hover overlay + 40px
      Search icon, lightbox on click.
  14. **Footer** — `footer.ftco-footer` (bg `#1a1a1a`, padding 7em top):
      brand col (logo "Repose Hotel Booking" + blurb + social icons
      X/Facebook/Instagram inline SVG) · Services col (8 links in 2
      sub-columns w/ ChevronRight: Free Wifi, Easy Booking, Restaurant,
      Swimming Pool | Beauty & Health, 60" Flatscreen TV, Cold
      Aircondition, Help & Support) · Quick Links (Home · About · Rooms ·
      Resto & Bar) · "Have a Questions?" (MapPin + address, Phone + "+2
      392 3929 210" as PLAIN TEXT, Mail + "info@yourdomain.com"); copyright
      strip `#151515`: "Copyright ©{year} All rights reserved | Made with
      ♥ by Component Dock" (https://www.componentdock.com/).

## Design tokens (from css/style.css)

- Gold `#c5a880` (brand) · Charcoal `#222222` · Footer `#1a1a1a` ·
  Copyright `#151515` · Light `#f8f8f8` · Body-on-dark
  `rgba(255,255,255,0.7)` · Booking placeholder `rgba(255,255,255,0.4)`.
- Fonts: Old Standard TT (headings, 400) + Nunito (body 300/400/700) —
  Google Fonts `<link>` in `index.html`.
- h2 64px (38px mobile) 400 serif lh 1.4; hero h1 80px (40px) 700 white;
  subheadings gold uppercase 700 ls 2px (hero subheading white 13px ls 1px).
- Buttons: radius 0; `.btn` uppercase 12px 700 ls 1px; gold bg `#c5a880`;
  hero buttons bigger + ArrowRight; booking submit 16px 700.
- Booking bar: `#222222`, margin-top -80px, labels 12px 700 white
  uppercase ls 1px, field dividers `rgba(0,0,0,0.05)`.
- Counters `#222222`, padding 90px 40px. Gallery items 250px. Room hover
  `#222222` bg. Navbar scrolled → solid dark + shadow.

## Tasks / todo outline

- [ ] Scaffold `apps/repose` (copy the simplest existing app, rename
      package to `@free-react-templates/repose`; register the workspace —
      `npm install` at root so `package-lock.json` includes it; set
      `public/CNAME` = `repose.free.componentdock.com` and `"homepage"` =
      `https://repose.free.componentdock.com`; `vite.config.ts` keeps
      `injectUiSource()`; jsdom MemoryStorage polyfill in
      `src/test/setup.ts` if needed).
- [ ] `src/index.css` — `@theme` tokens: `--color-brand: #c5a880`,
      `--color-ink: #222222`, `--color-footer: #1a1a1a`,
      `--color-copyright: #151515`, `--color-surface: #f8f8f8`; Google
      Fonts links (Old Standard TT + Nunito) in `index.html`.
- [ ] `Navbar.tsx` — transparent over hero → solid dark on scroll (scroll
      listener w/ cleanup); brand "Repose Hotel Booking"; desktop nav
      (Home · About · Rooms · Resto & Bar · Blog · Contact — anchor
      links); mobile toggle (hamburger, aria-expanded, focus-visible).
- [ ] `Hero.tsx` — 100vh photo bg + dark overlay; subheading, h1 "Most
      Relaxing Place", gold "Take A Tour" + outline "Learn More" w/
      ArrowRight icons.
- [ ] `BookingBar.tsx` — dark `#222222` bar overlapping hero (negative
      margin); Check-In/Check-Out date inputs + Calendar icons, Rooms &
      Guests selects (exact option sets), gold "Check Availability"
      submit → success state; labels uppercase.
- [ ] `About.tsx` — 2-col split: left stacked "Cozy Room" (BedDouble) +
      "Special Offers" (Gift) cards w/ images; right "About Us" +
      "Repose A Hotel Booking Agency" + p + gold "Book Your Room Now".
- [ ] `Services.tsx` — 6 icon services in a row (Wifi, CalendarCheck,
      UtensilsCrossed, Waves, Sparkles, Headphones).
- [ ] `IntroCta.tsx` — photo band + overlay; "Find Best Hotel For
      Living" (typo fixed) + headline + gold "Book Now".
- [ ] `FeaturedRooms.tsx` — light band; 3 room cards (Suite/Family/
      Deluxe) w/ photo, p, "$450 / night", "Book Now"; hover dark flip.
- [ ] `VideoBand.tsx` — photo bg, "Watch our luxurious hotel" + "Take A
      Tour" + circular Play button → state-based lightbox.
- [ ] `RestaurantMenu.tsx` — cuisine image left w/ cooking icon; 8
      pricing entries (2-col grid) w/ distinct dish names + prices.
- [ ] `Testimonials.tsx` — light band carousel (5 distinct guests,
      photo + Quote icon, name, position, quote) — simple index-based
      carousel w/ prev/next or auto-advance; testable.
- [ ] `Counters.tsx` — dark band, 4 animated count-ups (38900/320/1000/
      587; captions Happy Guests/Rooms/Staff/Destinations) on scroll into
      view (IntersectionObserver + requestAnimationFrame, fake-timer
      tests).
- [ ] `BlogGrid.tsx` — light band, 4 cards (image, meta Admin · date ·
      comments, distinct titles, excerpt).
- [ ] `Gallery.tsx` — 5 images in a row (250px), hover overlay + Search
      icon, click → lightbox.
- [ ] `Footer.tsx` — dark `#1a1a1a`: brand col + social inline SVG;
      Services (8 links, 2 sub-cols); Quick Links; "Have a Questions?"
      (MapPin/Phone/Mail rows — phone plain text, NO tel: URI);
      copyright strip `#151515` "Copyright ©{year} All rights reserved |
      Made with ♥ by Component Dock" (https://www.componentdock.com/).
- [ ] `App.tsx` — compose in exact order: Navbar → Hero → BookingBar →
      About → Services → IntroCta → FeaturedRooms → VideoBand →
      RestaurantMenu → Testimonials → Counters → BlogGrid → Gallery →
      Footer.
- [ ] Tests: one `describe` per component mirroring the spec scenarios;
      scroll-state navbar; booking submit → success; carousel navigation;
      count-up with fake timers; lightbox open/close; footer Component
      Dock link + no ColorLib string; 100% coverage.
- [ ] Placeholder images: `https://picsum.photos/seed/repose-<n>/<w>/<h>`.
      Subject-critical seeds (hero terrace, room photos, cuisine image,
      testimonial headshots, gallery) — screen per the seed-screening
      method in the colorlib-template-replication skill.
- [ ] Icons: lucide-react (ArrowRight, Calendar, ChevronDown, BedDouble,
      Gift, Wifi, CalendarCheck, UtensilsCrossed, Waves, Sparkles,
      Headphones, Play, Search, MapPin, Phone, Mail, Menu, Quote); social
      brand icons as inline SVG (probe every icon import with the typeof
      check — brand icons were removed from lucide).
- [ ] `scripts/verify-app.sh repose` green (typecheck + lint + knip +
      fallow + vitest 100% + build).
- [ ] PR: branch `feat/template-repose`, description with source template
      (ColorLib Unwind), preview URL, design tokens, differences
      (renames, picsum placeholders `repose-<n>`, paraphrased copy —
      8 distinct dishes / 5 guests / 4 blog titles — fixed typos
      "Leaving"→"Living", "Destination"→"Destinations"); merge
      immediately (`gh pr merge --squash`), verify deploy + curl bundle.
