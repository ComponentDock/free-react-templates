# Gatherly (ColorLib Meetup) — Tasks & Design Notes

> Recreation of ColorLib "Meetup" — free Bootstrap 4 event/conference
> template (https://colorlib.com/wp/template/meetup/) under the NEW name
> **Gatherly** ("gather" — an event gathering/conference + "-ly", matching
> the family convention Reservly/Roomzy/Roostly/Stayly/Ridely/Triply/
> Innly/Lodgely/Hostly/Guestly/Skyly/Coastly; single lowercase word, no
> collision with `apps/`, `openspec/specs/` or `docs/templates/` —
> verified 2026-08-11), per the monorepo naming mandate (never reuse the
> ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Meetup" — page title "MeetUp - Free Bootstrap 4
  Template by Colorlib". TEMPLATES.md category: **Bootstrap (216)**.
  CAUTION: the Meetup item is DUPLICATED in TEMPLATES.md at 4 positions
  (lines 451, 1096, 1684, 2339) — all `- [ ]`, source NOT shipped anywhere.
  The recreation brands itself **Gatherly**.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/meetup/` (HTTP 200, ~46 KB HTML +
  `css/style.css` ~82 KB; the preview is REACHABLE for this family, unlike
  the classic Booking Forms family). Screenshot `meetup-free-template.jpg`
  (1200×946, viewed in browser) matches the live DOM 1:1.
- **Visual design:** high-energy conference landing. Dark photo hero
  (concert crowd, darkened overlay), big bold white uppercase headline,
  rotated "Welcome" edge text left, bright-YELLOW countdown box
  (`#fbb901`) overlapping the hero's right side ("258 DAYS / 09 HOURS /
  37 MINUTES / 13 SECONDS"), transparent navbar with white logo + links
  and a blue "Buy Ticket" pill. Below: About split (large blue square
  image block left, text right), 4-image photo strip, dark photo "Join
  Our Event" band, DARK-BLUE speakers band (`#0d0cb5`), light schedule
  with day tabs, white pricing row of 4 blue-bordered cards, light blog
  row, contact with info blocks + form, dark grey `#232931` footer.
  Electric blue `#033fff` + yellow `#fbb901` on white/dark neutrals; Lato
  sans-serif.
- **Section order (1:1, verified from live DOM):**
  1. Navbar (`#ftco-navbar`, transparent absolute over hero): brand
     "Gatherly." (source "MeetUp."), links Home/About/Speakers/Schedule/
     Pricing/Blog/Contact (`#section` anchors), "Buy Ticket" CTA button
     (`#033fff` bg, radius 5px), hamburger <992px; scrolled → solid
     `#033fff` background.
  2. Hero (`#home-section`, 100vh): `h3.vr` rotated edge text "Welcome to
     Gatherly." → `#timer` yellow `#fbb901` countdown bar (absolute
     bottom-right, 100% width / 40% ≥1200px, 4 × 25% cells
     Days/Hours/Minutes/Seconds, 30px white text, 1px
     `rgba(255,255,255,0.2)` cell borders, shadow `-16px -16px 38px
-17px rgba(0,0,0,0.19)`) → `.home-slider` owl-carousel with TWO
     slides: right-half image (bg_1.jpg / bg_2.jpg + overlay), left-half
     h1 "Annual Conference 2019" / "Business Conference 2019", h2 date
     "November 26-30, 2019 - 08:00am-12:00pm", buttons "Get Ticket"
     (btn-primary) + "Watch Video" (btn-white).
  3. About (`#about-section`): "Welcome" label + "About Me" heading +
     Duden paragraph + counter box (`bg-primary`, "50 Years Experienced",
     JS counts 0→50 — static value OK in recreation).
  4. Gallery strip (no id): full-bleed `no-gutters` 4-up row, tiles
     `gallery-1..4.jpg` (2×2 tablet, 4-across desktop).
  5. Subscribe band (`.ftco-subscribe.img`): bg photo + dark overlay,
     white centered h2 "Join Our Event" + paragraph + email input
     ("Enter email address") + "Subscribe" button.
  6. Speakers (`#speakers-section`, bg **`#0d0cb5`**): h2 "MeetUp
     Speakers" (→ "Gatherly Speakers") + intro + 4 `.staff` cards
     (col-lg-3): photo, two-line name (John/Wilson, Robert/Wills,
     Mike/Smith, Adrian/Henderson), role (CEO, Founder / Businessman /
     Entrepreneur / Web Developer), `.ftco-social` icons (twitter,
     facebook, google-plus, instagram).
  7. Schedule (`#schedule-section`, bg-light `#f8f9fa`): h2 "Program
     Schedule" + intro + vertical pill tabs Day 01–04 (dates 21–24
     November 2019) + per-day `.speaker-wrap` entries: speaker photo
     (person_1.jpg…), `.time` "08:00AM - 10:00AM", h2 title link
     ("Introduction to Wordpress 5.0"…), description, `h3.speaker-name`
     "— Name" + `.position` role ("Founder of Wordpress"…).
  8. Pricing (`#pricing-section`): h2 "Buy Tickets" + intro + FOUR
     `.pricing-entry` cards (`border: 2px solid #033fff`): Basic
     $29.00/month · Standard $59.00/month · Premium $79.00/month · Gold
     $89.50/month; features (Visit 4 Events / Regular Seat / Free Coffee /
     Lunch Item / Free Entrance — Gold: Visit 10 Events / VIP Seat / Free
     Lunch); "Buy Ticket" button; `.price` weight 900 28px `#033fff` →
     hover `#fbb901`.
  9. Blog (`#blog-section`, bg-light): h2 "Our Blog" + intro + THREE
     `.blog-entry` cards: image (image_1..3.jpg), meta (March 23, 2019 ·
     Admin · chat "3"), h3 title ("Why Lead Generation is Key for
     Business Growth"), excerpt.
  10. Contact (`#contact-section`): h2 "Contact Me" + intro; LEFT info
      blocks (Address "198 West 21th Street, Suite 721 New York NY
      10016", Contact Number "+ 1235 2355 98", Email Address
      "info@yoursite.com", Website "yoursite.com"); RIGHT `.contact-form`
      (bg-light): Your Name / Your Email / Subject / Message textarea
      (rows 7) / "Send Message" submit.
  11. Map (`#map`): full-width map div (bg-white) — recreation: static/
      inert placeholder, NO Google Maps dependency.
  12. Footer (`.ftco-footer`, bg **`#232931`**, padding 7em 0): 4 widgets
      — (1) brand + about paragraph; (2) "Links" (Home/About/Schedule/
      Speakers/Contact + Privacy/Career/About Us/Contact Us/Buy Ticket);
      (3) "Have a Questions?" (203 Fake St. Mountain View, San Francisco,
      California, USA · +2 392 3929 210 · info@yourdomain.com); (4)
      social icons; copyright bar (recreate credit line, no Colorlib
      link).
- **Design tokens (from `css/style.css`, verified 2026-08-11):**
  - Brand blue **`#033fff`**: links; nav active-link 2px underline (scaleX
    0→1 animation); nav CTA "Buy Ticket" bg (radius 5px); scrolled navbar
    bg; pricing card border 2px + `.price` color.
  - Accent yellow **`#fbb901`**: countdown `#timer` bg; pricing hover
    price.
  - Speakers band bg **`#0d0cb5`**; footer bg **`#232931`**; light
    sections `#f8f9fa`.
  - Buttons: "Get Ticket"/"Send Message" Bootstrap-primary `#007bff`
    (source keeps Bootstrap default; `.btn` radius 2px); "Watch Video"
    white; nav CTA pill `#033fff` radius 5px.
  - Font **Lato** 400/600/700/900 (Google Fonts link); `heading-section
h2` 40px weight 600; price weight 900 28px.
  - Countdown JS target (source `js/main.js`): `new Date("21 December
2019 9:56:00 GMT+01:00")` — recreation uses its own fixed future date
    constant.
- **Recreation decisions:** Tailwind grid (NO Bootstrap/owl-carousel);
  navbar transparent over hero → solid `#033fff` on scroll + hamburger;
  carousel = 2 slides in DOM, one active, prev/next or dots (auto-advance
  optional — if implemented, keep the timer fake-timer-safe); countdown
  ticks from a fixed future date constant (cells 0-padded; tests use
  `vi.useFakeTimers()` + `act()`); counter box static 50; map = static
  placeholder; placeholder images `picsum.photos/seed/gatherly-<n>/<w>/<h>`;
  social icons = inline SVG brand icons (lucide-react has no brand
  icons); title "Gatherly — Event Conference Template"; "MeetUp" →
  "Gatherly" everywhere.

## Tasks (implementation order, TDD)

1. Scaffold `apps/gatherly` (copy simplest existing app, rename package to
   `@free-react-templates/gatherly`); `npm install` at root to register the
   workspace in `package-lock.json` (implementer's job — prep stream never
   touches the lockfile); verify `grep -c "free-react-templates/gatherly"
package-lock.json`.
2. `index.html`: title "Gatherly — Event Conference Template", Google Fonts
   `<link>` Lato (400;600;700;900).
3. `src/index.css`: `@theme` tokens — brand `#033fff`, accent `#fbb901`,
   speakers bg `#0d0cb5`, footer bg `#232931`, light section `#f8f9fa`;
   Lato font-family.
4. Tests (red) → `App.tsx` + components:
   - `Navbar.tsx` — brand "Gatherly.", anchors Home/About/Speakers/
     Schedule/Pricing/Blog/Contact, "Buy Ticket" CTA (`#033fff` pill),
     scrolled → solid `#033fff`, mobile hamburger (test with
     `getAllByRole` for duplicated nav links — desktop + mobile).
   - `Hero.tsx` — 100vh; rotated "Welcome to Gatherly." edge text;
     `Countdown.tsx` (fixed future target date, Days/Hours/Minutes/
     Seconds cells, 0-padded, fake-timer tests in `act()`); `Carousel.tsx`
     (2 slides "Annual Conference 2019" / "Business Conference 2019",
     date line, Get Ticket + Watch Video buttons, one active, prev/next
     control; slide images `picsum.photos/seed/gatherly-1/…` and
     `gatherly-2/…`).
   - `About.tsx` — "Welcome" label + "About Me" + paragraph + blue counter
     box "50 Years Experienced".
   - `Gallery.tsx` — 4-up gap-free strip (2×2 tablet, 4-across desktop).
   - `Subscribe.tsx` — bg photo + dark overlay, "Join Our Event", email
     input + "Subscribe" button.
   - `Speakers.tsx` — `#0d0cb5` band, "Gatherly Speakers", 4 cards
     (photo, two-line name, role, 4 social SVGs).
   - `Schedule.tsx` — light bg, Day 01-04 tabs (tab switch state), entries
     (photo, time, title, description, "— Name" + role).
   - `Pricing.tsx` — 4 cards (Basic $29 / Standard $59 / Premium $79 /
     Gold $89.50), 2px `#033fff` border, features, Buy Ticket button,
     hover → price `#fbb901`.
   - `Blog.tsx` — light bg, 3 cards (image, meta, title, excerpt).
   - `Contact.tsx` — "Contact Me", 4 info blocks, form (Name/Email/
     Subject/Message/Send Message; success message swap — assert
     `queryByLabelText` absent per house pattern).
   - `MapBlock.tsx` — static map placeholder.
   - `Footer.tsx` — `#232931`, 4 widgets + copyright bar.
   - Decorative photo strips have NO `img` role in the a11y tree — query
     with `container.querySelectorAll('img')`.
5. `scripts/verify-app.sh gatherly` → green; `npm run spec:validate`.
6. PR description must include: source template (ColorLib Meetup,
   `https://colorlib.com/wp/template/meetup/`), live preview URL analyzed
   (`https://preview.colorlib.com/theme/meetup/`), design tokens
   (`#033fff`, `#fbb901`, `#0d0cb5`, `#232931`, Lato), what differs
   (Gatherly name, picsum placeholders, static map, own countdown date,
   reworded copy).
7. Ship: TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`;
   deploy URL `https://free-react-templates-gatherly.surge.sh/`. NOTE: the
   Meetup row is duplicated 4× in TEMPLATES.md — mark the claimed row
   `[x]`; the other dup rows may also be marked `[x]` with the same surge
   URL (dup-row rule) or left for later passes.
