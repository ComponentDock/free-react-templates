# Peregrine (ColorLib "Traveland") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-peregrine` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Traveland" — free travel / tour booking HTML
  template (source: https://colorlib.com/wp/template/traveland/). Listed
  in TEMPLATES.md under the Bootstrap category (line 518); duplicate rows
  at line 1494 under Creative (55) and line 3004 under Travel (44) —
  same template, ONE app only. Mark ALL THREE rows `[x]` after merge.
- **Preview REACHABLE (HTTP 200):** `https://preview.colorlib.com/theme/traveland/`.
  DOM fetched (`/tmp/prep-traveland/preview.html`, 39,485 bytes, title
  "Traveland - Free Bootstrap 4 Template by Colorlib") + stylesheet
  `css/style.css` (`/tmp/prep-traveland/style.css`, 73,418 bytes) +
  TEMPLATES.md screenshot (`traveland-free-template.jpg`) + live browser
  verification of computed styles.
- **Aesthetic:** modern "ftco" travel-agency look — full-viewport hero
  photo (Santorini-style coastal town / beach / palms) under a
  **purple-blue gradient overlay** (`#6b75ff → #59b7ff`, 45deg, opacity
  .3), huge white bold right-aligned headline "Be a Traveler not a
  Tourist"; ONE saturated accent — gold `#ffb400` (Book Now pill, Search
  button, stars, blog day numbers, Subscribe/Read more buttons, active
  nav link). White / light-grey (`#f8f9fa`) body sections, dark
  `#232931` search panel + testimonial overlay, dark `#222831` footer.
  Services icons are 60px glyphs in the purple-blue gradient.
- **jQuery/Bootstrap plugins in the source** (owl-carousel testimonials,
  Bootstrap collapse mobile nav, bootstrap-datepicker check-in/out,
  counter-up numbers, magnific-popup lightbox, AOS/scrollax parallax) —
  implement with React state: a testimonial carousel with prev/next, a
  hamburger mobile nav, native date inputs, native `<select>`, static
  counters (or a simple count-up on mount).
- **Font:** Google **Poppins** only (body 16px, lh 1.8). Load via
  `<link>` in `index.html`.
- **Buttons:** Book Now = gold `#ffb400` pill, WHITE text, radius 2px,
  padding 12.8px 18px, 1px gold border (desktop only — `d-none
d-lg-block` equivalent). Search = gold, BLACK text, padding 22px 10px,
  no radius. Read more (`btn btn-primary py-3 px-5`) = gold, white
  text, radius 4px; hover inverts to transparent + gold text.
  Subscribe = gold, white text, radius 0 5px 5px 0, matches the 70px
  input height.
- **Copy is placeholder/Lorem with typos** ("Infromation", "Subcribe",
  "Swetzerland", "Gurtnellen, Swetzerland" repeated on all 4 cards) —
  paraphrase freely, FIX the typos, keep the same kinds: nav (Home /
  About / Destination / Hotels & Restaurant / Blog / Contact + Book
  Now), hero ("Be a Traveler not a Tourist" + subline), search
  (Destination / Check-in date / Check-out date / Price Limit +
  "Search"), destinations x4 ($400 / 15 Days Tour / title / 5 stars /
  (120)), services x4 (Activities / Travel Arrangements / Private Guide
  / Location Manager), about (heading + 4 counters: 30 Amazing Deals /
  200 Sold Tours / 2500 New Tours / 40 Happy Customers), hotel x3 ($600
  / 300 per person / "New Orleans Hotel"), things to know (3 numbered
  tips + "Read more"), testimonials x5 (quote + "Roger Scott" + role),
  blog x3 ("Why Lead Generation is Key for Business Growth" + 12
  February 2019), subscribe ("Subcribe to our Newsletter" → fix),
  footer (Infromation 6 / Experience 6 / contact).
- **DOM oddities:** (1) the navbar toggles `.scrolled` — transparent +
  white text at top, fixed WHITE bar + black text on scroll (implement
  with a scroll listener; `position: fixed` with the same height);
  (2) the footer (`ftco-footer-2`) has `margin-top: -6em` so it
  overlaps the subscribe band; (3) the testimonial + subscribe bands use
  the same `bg_1.jpg` photo under a `#232931` overlay (opacity .9);
  (4) blog date block is absolutely positioned over the photo with WHITE
  month/year text and a big gold day number; (5) card price badges are
  white pills floating at the photo/text boundary (`top: -25px; right:
10px`) that turn gold on hover.

## Structure (top → bottom, single page)

1. **Navbar** (`.ftco-navbar-light`, absolute/transparent at top →
   `.scrolled` fixed white) — brand "Peregrine" (text logo, white at
   top / black scrolled); links Home / About / Destination / Hotels &
   Restaurant / Blog / Contact (15px, white at top / black scrolled,
   active = gold); right: gold "Book Now" pill (white text, desktop
   only). Mobile: hamburger toggler → nav toggle.
2. **Hero** (`.hero-wrap.js-fullheight`) — full-viewport bg photo
   (tropical coast, cover, top center) + gradient overlay
   `#6b75ff → #59b7ff` (opacity .3); content right-aligned
   (`justify-content-end`), col-md-7: h1 "Be a Traveler not a Tourist"
   (64px 700 white lh 1.2) + p "Travel to the any corner of the world,
   without going around in circles".
3. **Search panel** (`.search-wrap-1`, `p-4`, bg `#232931`, radius 5px,
   shadow `0 75px 94px -66px rgba(0,0,0,0.66)`) — 5 columns: Destination
   (Search icon + input "Search place") · Check-in date (Calendar icon +
   date input "Check In Date") · Check-out date (Calendar + "Check Out
   Date") · Price Limit (ChevronDown + select $5,000 → $2,000,000) ·
   gold "Search" button (black text, 22px 10px). Labels 18px
   `rgba(255,255,255,0.8)`; inputs transparent, text `rgba(255,255,255,0.4)`.
4. **Best Place to Travel** (`.ftco-section`, padding 7em 0) — centered
   `.heading-section` (h2 40px 700 + p lorem); 4 `.project` cards
   (col-md-6 col-lg-3): photo + `.text`: white "$400" price badge
   (absolute top -25px right 10px, 20px 600) + span "15 Days Tour"
   (uppercase 14px ls 2px `rgba(0,0,0,0.2)`) + h3 title (20px 600) +
   5 gold stars + "(120)" (`rgba(0,0,0,0.3)`). Titles in the source are
   all "Gurtnellen, Swetzerland" — use 4 DIFFERENT destinations for
   realism (e.g. Gurtnellen, Switzerland / Mykonos, Greece / Bali,
   Indonesia / Queenstown, NZ) or keep 4 same-style entries; either is
   faithful to the card KIND. Decorative expand icon on hover (optional).
5. **Activities** (`.services-section.bg-light`) — 4 `.media.block-6.services`
   blocks: icon (60px gradient text `#6b75ff→#59b7ff`; lucide
   equivalents: Compass/Plane/Flag/Map) + h3 (18px `rgba(0,0,0,0.8)`):
   Activities / Travel Arrangements / Private Guide / Location Manager +
   p lorem.
6. **About Traveland** (`.ftco-counter.img`) — split row: left col-md-6
   photo (about.jpg); right (pl-md-5 py-5): heading-section "About
   Traveland" + p; 2×2 `.block-18` counter boxes (col-md-6, bg
   `#f8f9fa`, py-5, centered): number 28px 600 black + span label —
   30 Amazing Deals / 200 Sold Tours / 2500 New Tours / 40 Happy
   Customers.
7. **Hotel & Restaurant** (`.ftco-section`) — centered heading + 3
   `.project` cards (col-md-6 col-lg-4): photo + white "$600" badge +
   "300 per person" label + "New Orleans Hotel" + 5 stars + "(120)".
8. **Things to Know** (`.ftco-counter.img`, REVERSED split) — right
   col-md-6 photo (about-1.jpg, `order-md-last`); left (pr-md-5 py-5):
   heading "Things to Know Before Traveling to other Places" + p + 3
   numbered tips (`1.` `2.` `3.` paragraphs) + gold "Read more" button
   (`py-3 px-5`, white text).
9. **Happy Traveler Says** (`.testimony-section`, bg photo + `#232931`
   overlay opacity .9) — centered white heading (40px) + owl-carousel →
   React carousel of 5 `.testimony-wrap` cards (600px tall, traveler
   photo bg + dark overlay, padding 4em; `.text` width 50%): quote p +
   name "Roger Scott" + position (Marketing Manager / Interface
   Designer / UI Designer / ...). Prev/next controls (owl nav arrows)
   or dots.
10. **Recent Stories** (`.ftco-section.bg-light`) — heading + 3
    `.blog-entry` cards (col-md-4): `.block-20` photo
    (background-image) + date block absolute over photo (day "12" 50px
    weight 300 GOLD + "February" + "2019" 13px white) + heading
    "Why Lead Generation is Key for Business Growth" (20px 600 black).
11. **Subscribe** (`.ftco-subscribe`, bg photo + dark overlay) —
    centered h2 "Subscribe to our Newsletter" (fix source typo
    "Subcribe") + form: email input (70px, `rgba(0,0,0,0.05)` bg,
    20px, radius 5px 0 0 5px) + gold "Subscribe" submit (white text,
    radius 0 5px 5px 0).
12. **Footer** (`.ftco-footer.ftco-footer-2`, bg `#222831`,
    `margin-top: -6em`) — 4 columns (col-md): **Peregrine** (brand + p
    - 3 social circle links 50px bg `rgba(255,255,255,0.05)`:
      Twitter / Facebook / Instagram) · **Infromation** (6 links: Online
      Enquiry, General Enquiries, Booking Conditions, Privacy and Policy,
      Refund Policy, Call Us) · **Experience** (6 links: Adventure, Hotel
      and Restaurant, Beach, Nature, Camping, Party) · **Have a
      Questions?** (MapPin + "203 Fake St. Mountain View, San Francisco,
      California, USA" / phone "+2 392 3929 210" / email
      "info@yourdomain.com"); bottom bar centered: "Copyright © All
      rights reserved | This template is made with ♥ by **Component
      Dock**" → https://www.componentdock.com/ (replaces Colorlib, NO
      ColorLib credit).

## Implementation tasks (for the implementer stream)

- [ ] `cp -r` scaffold from the simplest existing app; rename package to
      `@free-react-templates/peregrine`; `npm install` at repo root;
      CNAME + homepage `peregrine.free.componentdock.com`
- [ ] `src/index.css` `@theme` tokens: brand `#ffb400`, panel
      `#232931`, footer `#222831`, ink `rgba(0,0,0,0.8)` / `#000`,
      soft `#f8f9fa`, fade `rgba(0,0,0,0.3)`; gradient
      `#6b75ff → #59b7ff`; Google Fonts `<link>` (Poppins)
- [ ] `src/data.ts` — nav (6 + Book Now), search select options (14
      price tiers), destinations (4), services (4), counters (4), hotel
      cards (3), tips (3), testimonials (5), blog cards (3), footer
      links (Infromation 6 / Experience 6), contact info, socials (3)
- [ ] Components: `Navbar` (scroll-aware transparent→white, Book Now
      pill desktop-only, mobile hamburger), `Hero` (full-viewport photo + gradient overlay + right-aligned headline), `SearchPanel`
      (dark panel, 4 fields + gold Search), `Destinations` (4 cards),
      `Services` (4 blocks, gradient icons), `AboutCounters` (photo +
      heading + 2×2 counters), `Hotels` (3 cards), `ThingsToKnow`
      (photo right + tips + Read more), `Testimonials` (carousel +
      prev/next), `RecentStories` (3 blog cards), `Subscribe` (email +
      gold button), `Footer` (4 widgets + Component Dock credit +
      socials)
- [ ] Tests per section mirroring the spec Gherkin scenarios, 100%
      coverage (scroll state via jsdom scrollY stub if needed, mobile
      nav toggle, carousel next/prev, subscribe form success)
- [ ] Subject-screen picsum seeds (hero bg — prefer a beach/coast/palm
      shot; 4 destination scenes; about photo; 3 hotel-resto; 5
      traveler portraits; 3 blog; bg_1 for testimony + subscribe) —
      pixel metric + browser verify; pin seeds in PR
- [ ] `bash scripts/verify-app.sh peregrine` green; PR with source,
      preview URL, tokens, deviations (React carousel / mobile nav /
      native inputs / Component Dock credit); squash-merge immediately
- [ ] After merge: mark TEMPLATES.md Traveland rows at lines 518, 1494
      AND 3004 `[x]` + surge URL; `npm run readme:status`

## Verification notes / pitfalls

- Desktop + mobile navs render duplicate links in the DOM — use
  `getAllByRole` and index the mobile one last (skill pitfall).
- jsdom applies the injected Tailwind CSS, so `hidden lg:flex` desktop
  nav lists are `display:none` and getByRole excludes them — query
  desktop-only links with `{ hidden: true }`; CSS `uppercase` does NOT
  change accessible names, query raw text ('Home'), not 'HOME'.
- The scroll-aware navbar needs a scroll listener; in jsdom scrollY is
  always 0 — test the toggle by extracting a pure
  `isScrolled(scrollY)` helper or fire a scroll event with a stubbed
  window.scrollY.
- `aria-current={cond}` renders `aria-current="false"` — use
  `aria-current={cond ? 'true' : undefined}`.
- The testimonial carousel is owl-carousel in the source — implement a
  state-indexed carousel with ChevronLeft/ChevronRight controls (or
  dots) and assert the active slide's name changes.
- The blog date block sits ON the photo (white month/year text + gold
  day) — keep it over the image, not below it.
- Counter boxes: source animates numbers with counter-up; static
  numbers are acceptable (or a tiny count-up effect on mount).
- No `tel:` literals anywhere (secret-scan rewrites them) — render the
  footer phone as plain text or compute the href at runtime from a
  spaced display string (`'+2 392 3929 210'`).
- The subscribe form uses a MailChimp endpoint in the source — implement
  as a local form (submit → success message pattern per conventions;
  assert input unmounts on success with `queryByLabelText`).
- Social icons: lucide-react removed brand icons — inline SVG paths for
  Twitter / Facebook / Instagram.
- Service icons: source uses flaticon glyphs with a
  `-webkit-background-clip: text` gradient — recreate with inline SVGs
  or lucide icons styled with the gradient; keep the 60px size.
- The price badge flips white→gold on card hover; stars are always gold.
- Source card titles are duplicated placeholders ("Gurtnellen,
  Swetzerland" x4, "New Orleans Hotel" x3) — use varied names so the
  section looks real, but keep the same card anatomy.
- The "Book Now" pill is hidden on mobile (Bootstrap `d-none d-lg-block`
  equivalent) — render it only at `lg+`.
