# Gilt (ColorLib Royal) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Gilt** (NEW name
> — the ColorLib source keeps its name "Royal" / "Royal Hotel").
> Implementation ships on `feat/template-gilt` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Royal" (Royal Hotel) — free hotel/resort
  landing template (source: https://colorlib.com/wp/template/royal/).
  TEMPLATES.md rows: **line 491** (R section) AND **line 1926**
  (duplicate row — same URL; the `royal` slug appears exactly TWICE;
  mark BOTH `[x]` + the same surge URL when shipping).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-14):**
  `https://preview.colorlib.com/theme/royal/` (HTTP 200, 32KB HTML,
  `<title>Royal Hotel</title>`). No URL quirk this time. Stylesheets:
  `css/style.css` (61KB — token source), `css/bootstrap.css`,
  `vendors/linericon/style.css` (Linearicons), `css/font-awesome.min.css`
  (stars/calendar/social), owl-carousel + bootstrap-datepicker +
  nice-select CSS. JS: jquery/popper/bootstrap + owl-carousel +
  nice-select + bootstrap-datepicker + stellar (parallax) +
  ajaxchimp/mail-script (newsletter). The ONLY interactive JS bits to
  recreate in React: navbar collapse, Blog dropdown, owl-carousel
  (testimonial), nice-selects (booking), date inputs (just text inputs
  with a calendar icon in the demo — no real datepicker needed),
  newsletter submit (fake, client-side).
- **Screenshot (TEMPLATES.md `royal-free-template.jpg`, 1200×946)**
  viewed 2026-08-14: white header w/ gold crown logo, resort hero
  (pool/palms/ocean, dark overlay, "Relax Your Mind", gold GET
  STARTED), dark booking bar (BOOK YOUR ROOM + date/adult/child +
  gold BOOK NOW), top of white "Hotel Accomodation" section. Crop cuts
  off there; the live page is authoritative for the rest. Consistent.
- **Design system:** GOLD `#f3c300` single accent + near-black navy
  `#04091e` bands + white sections + sky-blue `#52c5fd` accents
  (prices, active nav). Poppins 300–700. SHARP buttons (radius 0),
  uppercase, with a gold **sweep hover** (absolute `:before` slides
  -100% → 0). Full token list in the spec.
- **⚠ Duplicate TEMPLATES.md rows:** the `royal` slug is listed twice
  (491 + 1926). When marking done, update BOTH rows (same surge URL).
- **⚠ Typos to KEEP as authored:** "Hotel Accomodation" (single m),
  nav "Accomodation" + "Elemests", facilities "Sports CLub" +
  "Gymnesium", blog heading lowercase "latest posts from blog", blog
  title "It S Classified How To Utilize Free".
- **⚠ Booking selects contain demo junk options** (Adult: Old/Younger/
  Potato; Child: Child/Baby/Child; Rooms: Room 01/02/03) — replace with
  sensible options (Adult, Child, Room 01–03), keep the custom dropdown
  look (nice-select).
- **⚠ Facilities icon mismatch in source:** Swimming Pool uses a
  shirt glyph, Gymnesium a construction glyph — use sensible lucide
  icons (Waves, Dumbbell, Utensils, Bike, Car, Coffee).
- **⚠ Testimonial carousel:** FOUR identical slides (same avatar/name/
  copy "Fanny Spencer") with 4.5 gold stars; owl dots nav. Recreate as
  a React carousel (state + dots); the 4 identical slides can be a
  single data entry rendered 4× or one slide + dots — recommend 4
  slides for dot fidelity.
- **Hero:** `booking_table` min-height 800px; `banner_content`
  margin-top 106px / margin-bottom 94px; photo at opacity 0.5
  (parallax optional — a static dimmed cover is fine).
- **Component structure suggestion:** `Navbar`, `Hero`
  (banner_content + BookingBar sub-component), `Accomodation`,
  `Facilities`, `About`, `Testimonial`, `Blog`, `Footer` — compose in
  `App.tsx`.
- **Placeholders:** picsum `https://picsum.photos/seed/gilt-<n>/<w>/<h>`
  (hero, 4 rooms, facilities bg, about, avatar, 3 blog, 8 instafeed);
  Poppins via Google Fonts `<link>` in index.html; lucide-react icons.

## Tasks (TDD, spec-first)

1. [ ] Scaffold `apps/gilt` (copy simplest existing app; rename package
       `@free-react-templates/gilt`; `public/CNAME` =
       `gilt.free.componentdock.com`; homepage; `injectUiSource()` in
       vite.config.ts; jsdom MemoryStorage polyfill in test setup if
       needed); `npm install` at root (lockfile registration)
2. [ ] `@theme` tokens in `src/index.css` (gold `#f3c300`/`#f8b100`,
       `#04091e`, `#222222`, `#777777`, `#52c5fd`, `#f9f9ff`,
       `#eeeeee`, `#2b3146`, `#8c8d9e`, Poppins font stack)
3. [ ] Shared button: sharp (radius-0) uppercase + gold sweep hover
       (theme_btn / theme_btn_two / book_now_btn variants) — tests
       first
4. [ ] `Navbar`: logo (lucide Crown + name), 7 links (typos kept),
       active Home `#52c5fd`, Blog dropdown (Blog Details), mobile
       hamburger + `aria-expanded`
5. [ ] `Hero`: 800px dark section, dimmed cover photo, tagline /
       "Relax Your Mind" / paragraph / gold Get Started
6. [ ] `BookingBar` (overlaid on hero bottom): Book Your Room heading
       (2 lines), Arrival/Departure date inputs + lucide Calendar
       icons, Adult/Child/Rooms selects, full-width gold Book Now
7. [ ] `Accomodation`: title (typo kept) + 4 room cards (hover zoom,
       overlaid Book Now, sky-blue prices + "/night")
8. [ ] `Facilities`: dark band + dimmed photo, 6 glassmorphism cards
       (gold lucide icons, typos kept)
9. [ ] `About`: content left + photo right, 3-line title, black
       Request Custom Price button
10. [ ] `Testimonial`: `#f9f9ff` band, carousel (state + dots), 4.5
        gold stars
11. [ ] `Blog`: 3 cards (chips Travel/Life Style w/ sweep hover,
        titles, excerpts, dates), lowercase heading kept
12. [ ] `Footer`: 4 columns, newsletter form (email + gold submit),
        8-image InstaFeed, copyright bar + 4 social icons, Component
        Dock link, NO ColorLib references
13. [ ] `npm run spec:validate` + `scripts/verify-app.sh gilt` green
        (100% coverage)
14. [ ] PR `feat/template-gilt` → merge immediately (squash); PR
        description: source template + preview URL + tokens + quirks
15. [ ] Bookkeeping: mark BOTH Royal rows (491 + 1926) `[x]` + surge
        URL; `npm run readme:status`
