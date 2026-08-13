# Forkly (ColorLib Pato) — Tasks & Design Notes

> Recreation of ColorLib "Pato" — modern restaurant website template
> (https://colorlib.com/wp/template/pato/ — "Pato — Free Modern
> Restaurant Website Template by Colorlib") under the NEW name **Forkly**
> ("fork" plus the friendly "-ly" family suffix: Wingly, Drivly, Nestly,
> Bookly, Coastly, Restly, Sleeply, Dozely, Soarly, Lodgely, Sneakly,
> Taply, Ascendly, Serverly, Framely, Cargoly, Estately, Wanderly; single
> lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-14), per the monorepo naming
> mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Pato" — page title "Home". TEMPLATES.md
  categories: **Bootstrap 5 (89)** first occurrence at line 616
  (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the `pato` slug
  also appears at line 1126 (Business 365) and line 2689 (Restaurant 41)
  — ALL THREE `- [ ]` rows are the same template; ONE implementation
  covers all rows (mark all `[x]` with the same surge URL at
  bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/pato/` — HTTP 200, ~44 KB HTML
  (REACHABLE, not a 404). Custom CSS in `css/main.css` (~30 KB) +
  `css/util.css` (~21 KB) + bootstrap + fontawesome-7 + flatpickr +
  glightbox + swiper. Screenshot
  `pato-free-modern-restuarant-website-template.jpg` (viewed in browser)
  matches the live DOM for the full page (dark restaurant-interior hero
  with script "Welcome to" + bold uppercase "PATO PLACE" + red-outlined
  LOOK MENU button → transparent nav → white sections → dark footer).
- **Visual design:** modern, elegant restaurant one-pager. Full-screen
  hero slider (upscale restaurant interior, warm amber lighting) with
  dark overlay; transparent header over it (rounded "PATO/RESTAURANT"
  logo box, centered white uppercase links, social icons + hamburger);
  script-font eyebrow "Welcome to" over a huge bold condensed uppercase
  brand headline; red `#ec1d25` accent for hovers, the LOOK MENU button
  text, carousel dots, countdown numbers and the fixed-header top border.
  Light content sections with subtle dotted patterns, parallax "Discover
  Pato Place" band, menu category cards with centered tab buttons, event
  slider with countdown, booking form, testimonial carousel, parallax
  video section, 3 blog cards, signup band, dark `#222222` footer.
- **Section order (1:1, verified from live DOM):**
  1. Header `div.wrap-menu-header.gradient1` (absolute over hero) — logo
     img (rounded PATO RESTAURANT box; swaps on fixed) left; `ul.main_menu`
     centered: Home · Menu · Reservation · Gallery · About · Blog ·
     Contact; right: social icons + hamburger `a.btn-show-sidebar`
     (slide-in sidebar). Fixed header: white bg + `border-top: 5px solid
#ec1d25`, links `#222222` hover `#ec1d25`.
  2. Hero `section.section-slide` — swiper, 3 slides (bg images
     slide1-01.jpg / master-slides-02.jpg / master-slides-01.jpg, cover):
     `span.txt1` "Welcome to" (Courgette 60px white) + `h2.tit1` "Pato
     Place" (Poppins Bold 90px uppercase white ls-10) + `a.btn1` "Look
     Menu" (white bg radius-10, Montserrat 12px `#ec1d25` text, hover red
     bg white text). Arrows + 3 dots (active red).
  3. Welcome `section.section-welcome.bg1-pattern` (light + pattern1,
     p-t-120/p-b-105) — `span.tit2` "Italian Restaurant" (Courgette 30px
     `#d61c22`) + `h3.tit3` "Welcome" (Poppins Bold 50px uppercase `#222`
     ls-6) + lorem (`txt9` Montserrat 15px `#555`) + "Our Story" link
     (`txt4` 12px uppercase `#222`, hover red).
  4. Intro band `div.header-intro.parallax100` (fixed bg image; `span.tit2`
     "Discover" + `h3.tit4` "Pato Place" white 50px uppercase) then
     `section.section-intro` — THREE `div.blo1` cards (col-md-4, p-t-30):
     image `wrap-pic-blo1 bo-rad-10 hov-img-zoom` (intro-01/02/04.jpg) +
     `wrap-text-blo1 p-t-35`: `h4.txt5` title (Poppins Medium 22px
     uppercase `#333`, hover red) + `p.txt9` lorem + `a.txt4` "Learn
     More" + arrow icon. Titles: Romantic Restaurant / Delicious Food /
     Red Wines You Love.
  5. Our Menu `section.section-ourmenu.bg2-pattern` (light + pattern2,
     p-t-115/p-b-120) — `span.tit2` "Discover" + `h3.tit5` "Our Menu"
     (Poppins Bold 50px uppercase `#222` ls-10); SIX `div.item-ourmenu
bo-rad-10 hov-img-zoom pos-relative` image cards (col-12/col-sm-6,
     m-t-30) each with centered overlay `a.btn2` tab (white bg radius-10
     opacity .9, `txt5` 22px uppercase): Lunch · Dinner · Happy Hour ·
     Drink · Starters · Dessert. (Dish lists load via JS from menu.html —
     out of scope; show the six category cards.)
  6. Events `section.section-event` — swiper-event; slides `div.item-slick2`
     (inline bg image bg-event-01.jpg cover): `span.tit2` "Upcomming"
     [typo — use "Upcoming"] + `h3.tit6` "Events" (Poppins Bold 50px white
     uppercase ls-6); `div.blo2` card: `span.time-event.txt6` "08:00 PM"
     - date "Tuesday - 21 November 2018"; `h4.tit7` "Wines during
       specific nights" (Poppins Medium 22px uppercase `#222` ls-3); lorem;
       countdown `flex-sa-m` of four `div.size11`: `span.txt7` numbers
       25/12/59/56 (Montserrat Bold 50px `#ec1d25`) + `span.txt8` labels
       Days/Hours/Minutes/Seconds (Montserrat Bold 12px `#999`); `a.btn3`
       "View Details" (`#111` radius-10, hover red).
  7. Booking `section.section-booking.bg1-pattern` (p-t-100/p-b-110) —
     `span.tit2` "Reservation" + `h3.tit3` "Book table" (50px uppercase
     `#222` ls-6); form: Date (flatpickr, selected day red), Time select
     (9:00–16:00, 30-min steps), People select (1–12), inputs Name/Phone/
     Email (rounded white bg, `txt10` Montserrat 14px `#666`) + `button.btn3`
     "Book Table".
  8. Review `section.section-review` (white, p-t-115) — `span.tit2`
     "Customers Say" + `h3.tit8` "Review" (Poppins Bold 50px uppercase
     `#222` ls-11); testimonial carousel: quote + author "Marie Simmons −
     New York" etc.
  9. Video `section.section-video.parallax100` (fixed bg + overlay
     `rgba(0,0,0,0.5)` on `.content-video`) — `span.tit2` "Discover" +
     `h3.tit6` "Our Video" (white) + circular play button (glightbox
     modal).
  10. Blog `section.section-blog.bg-white` (p-t-115/p-b-123) — `span.tit2`
      "Latest News" + `h3.tit5` "The Blog"; THREE `div.blo1` cards
      (col-md-4, p-t-30): image `wrap-pic-blo1 bo-rad-10 hov-img-zoom
pos-relative` (blog-01/02/03.jpg) + `wrap-text-blo1 p-t-35`: date
      `span.time-blog` (21 Dec 2017 / 15 Dec 2017 / 12 Dec 2017) + `h4.txt5`
      title (Best Places for Wine / Eggs and Cheese / Style the Wedding
      Party, hover red) + excerpt + `a.txt4` "Continue Reading" + arrow.
  11. Signup `div.section-signup.bg1-pattern` (p-t-85/p-b-85) — inline
      form: `span.txt5` "Specials Sign up" + email input (bo-rad-10
      bgwhite, placeholder "Email Adrress" [typo — use "Email Address"],
      envelope icon) + `button.btn3` "Sign-up".
  12. Footer `footer.bg1` (`#222222`) — FOUR columns: Contact Us (8th
      floor, 379 Hudson St, New York, NY 10018 · (+1) 96 716 6879 ·
      contact@site.com), Opening Times (09:30 AM – 11:00 PM Every Day),
      Latest Posts (feed items), Gallery (thumbnails). Bottom bar
      `div.end-footer.bg2` (`#111111`): social icons (facebook, x-twitter,
      instagram, white) + copyright "© 2026 Colorlib. Get The Theme" →
      recreation: "© 2026 Forkly" + mandatory Component Dock link.
- **Design tokens (from `css/main.css` + `css/util.css`, verified
  2026-08-14):**
  - Brand red **`#ec1d25`** — hovers, active dot, countdown numbers,
    flatpickr selected, focus ring `0 0 0px 2px #ec1d25`, fixed-header
    5px top border, LOOK MENU text, btn1/2/3 hover bg.
  - Script red **`#d61c22`** (tit2 eyebrows); variants `#d41b22`,
    `#cf2227`.
  - Dark **`#222222`** (`bg1`, footer, btn3 bg, dark headings) and
    **`#111111`** (`bg2`, end-footer, btn3 bg).
  - Grays: `#333` (txt5 titles), `#555` (txt9 body), `#666` (txt10
    inputs), `#999` (txt8 labels), `#ccc`/`#aaa`/`#808080` muted.
  - Light: white sections; pattern1.png (25px light dots) on
    bg1-pattern (Welcome/Booking/Signup); pattern2.png (400px cream) on
    bg2-pattern (Our Menu).
  - Fonts: **Poppins** (300/400/500/700) headings/body; **Montserrat**
    (400/700) nav/buttons/labels/body; **Courgette** script eyebrows;
    Noto Sans fallback. Google Fonts `<link>`s.
  - Buttons: btn1 white radius-10 → hover red bg white text; btn2 white
    radius-10 opacity .9 (menu overlay); btn3 `#111` radius-10 → hover
    red; ALL radius **10px**.
  - Titles: tit1 Poppins 700 90px white ls-10 (hero brand); tit2 Courgette
    30px `#d61c22` (eyebrows); tit3/tit5/tit8 Poppins 700 50px `#222` ls-
    6/10/11; tit4/tit6 Poppins 700 50px white ls-10/6 (dark sections);
    tit7 Poppins 500 22px `#222` ls-3 (card titles).
  - Section rhythm: p-t-120/p-b-105 (welcome), p-t-115/p-b-120 (menu),
    p-t-100/p-b-110 (booking), p-t-115 (review), p-t-115/p-b-123 (blog),
    p-t-85/p-b-85 (signup); parallax100 = `background-attachment: fixed`.
  - Overlays: video `rgba(0,0,0,0.5)`; `bg1-overlay` `rgba(0,0,0,0.35)`.

## Implementation tasks (for the implementer)

- [ ] `npm run spec:validate` for `template-forkly` before starting
- [ ] Scaffold `apps/forkly` (copy simplest existing app, rename package
      to `@free-react-templates/forkly`); register workspace
      (`npm install --package-lock-only` if needed)
- [ ] `@theme` tokens: `--color-brand: #ec1d25`, `--color-script:
#d61c22`, `--color-ink: #222222`, `--color-ink-deep: #111111`,
      `--color-muted: #666666`, `--color-body: #555555`, `--color-label:
  #999999`, `--color-card-title: #333333`; Poppins + Montserrat +
      Courgette Google Fonts `<link>`s in index.html; document title
      "Forkly — Restaurant"
- [ ] Header component (FORKLY logo box; Home/Menu/Reservation/Gallery/
      About/Blog/Contact centered; social icons + hamburger; transparent
      over hero → fixed white header w/ 5px `#ec1d25` top border + dark
      links on scroll; mobile slide-in menu)
- [ ] Hero slider (3 restaurant-photo slides + dark overlay; "Welcome to"
      Courgette eyebrow + brand headline Poppins Bold 90px uppercase
      white ls-10; LOOK MENU button btn1; arrows + dots, active dot red)
- [ ] Welcome section (light pattern bg; "Italian Restaurant" script +
      "Welcome" 50px heading + lorem + Our Story link)
- [ ] Intro: parallax band ("Discover" script + brand white) + 3 cards
      (Romantic Restaurant / Delicious Food / Red Wines You Love: rounded
      image, 22px uppercase title, lorem, Learn More link)
- [ ] Our Menu ("Discover" + "Our Menu"; SIX rounded image cards with
      centered overlay buttons Lunch/Dinner/Happy Hour/Drink/Starters/
      Dessert, hover zoom)
- [ ] Events ("Upcoming" + "Events"; event card: time/date, title "Wines
      during specific nights", lorem, countdown Days/Hours/Minutes/
      Seconds with `#ec1d25` numbers, View Details btn3)
- [ ] Booking ("Reservation" + "Book table"; Date/Time/People selects +
      Name/Phone/Email inputs + Book Table submit → success message)
- [ ] Review ("Customers Say" + "Review"; testimonial carousel with
      quotes + author names)
- [ ] Video (parallax + `rgba(0,0,0,0.5)` overlay; "Discover" + "Our
      Video"; play button opens modal video with close)
- [ ] Blog ("Latest News" + "The Blog"; 3 cards: date, title, excerpt,
      Continue Reading link)
- [ ] Signup band ("Specials Sign up" + email input w/ envelope icon +
      Sign-up btn3)
- [ ] Footer (#222222: Contact Us / Opening Times / Latest Posts /
      Gallery; end-footer #111111: social icons + © 2026 Forkly +
      mandatory `https://www.componentdock.com/` link)
- [ ] TDD: tests first per requirement, 100% coverage via
      `scripts/verify-app.sh forkly` (typecheck + lint + vitest + build)
- [ ] Visual QA against `https://preview.colorlib.com/theme/pato/`
      (dark hero slider w/ script eyebrow, red accents, parallax bands,
      countdown, light pattern sections, dark footer)
- [ ] PR description: source = ColorLib Pato, preview URL, tokens
      (#ec1d25, #d61c22, #222222, #111111, Poppins + Montserrat +
      Courgette, radius-10 buttons), what differs (Forkly brand, picsum
      placeholders, lucide + inline-SVG social icons, neutral + Component
      Dock footer credit, dead links/forms)
- [ ] Bookkeeping on merge: mark lines ~616 (Bootstrap 5), ~1126
      (Business) AND ~2689 (Restaurant) `[x]` + surge URL +
      `npm run readme:status`

## Pitfalls (from the skill + this prep)

- **Dup rows:** THREE TEMPLATES.md rows for pato — ONE implementation,
  ALL THREE rows to `[x]` with the same surge URL.
- **Name check:** "fork" is not an app; the prep name is "forkly" (fits
  the -ly family). Do NOT rename to "pato" or "fork".
- **Source typos:** "Upcomming" → "Upcoming"; "Email Adrress" → "Email
  Address" (no fidelity value in the typos).
- **Menu section scope:** the source's dish lists load via JS (menu.html);
  the home one-pager shows the six category image cards with their
  overlay tab buttons — do NOT invent a full dish-list layout.
- **Transparent header:** `.wrap-menu-header` is absolutely positioned
  and transparent over the hero; it becomes a FIXED WHITE header with a
  5px `#ec1d25` top border on scroll. Implement the scroll behavior to
  match (nav links `#222222`, hover `#ec1d25`).
- **Three fonts:** Poppins (headings/body) + Montserrat (nav, buttons,
  small-caps labels) + Courgette (script eyebrows) — load all three
  Google Fonts; the script+sans mix IS the design.
- **Carousels:** hero (3 slides, arrows + dots), events (slider), review
  (testimonials) — implement as accessible carousels with controls;
  active dot is red `#ec1d25`.
- **Countdown:** static numbers (25/12/59/56) are fine — the source's is
  a JS countdown to a fixed date; a ticking countdown is optional, static
  values match the screenshot.
- **Video modal:** play button opens a glightbox video — implement as a
  modal with an embed/stock video + close control.
- **Booking form:** date picker (flatpickr selected = red `#ec1d25`);
  time select 9:00–16:00 in 30-min steps; people 1–12; submit shows a
  success message (no backend, no navigation).
- **Social brand icons:** lucide-react REMOVED brand icons
  (Facebook/Instagram/X) — use inline SVG brand icons (simple-icons
  paths) as in other apps.
- **Decorative images:** `<img alt="">` has no `img` role in Testing
  Library — query decorative strips with `container.querySelectorAll`.
- **Duplicate nav on mobile:** desktop + mobile nav duplicate links in
  the DOM — use `getAllByRole` and index the mobile one last.
- **jsdom localStorage:** if dark-mode/scroll persistence is added, copy
  the MemoryStorage polyfill from an existing app's `src/test/setup.ts`.
- **Family palette check (2026-08-14):** red `#ec1d25` + script `#d61c22`
  - dark `#222/#111` + Courgette eyebrows are unique among preps so far —
    keep them exact; do NOT reuse another prep's brand color.
