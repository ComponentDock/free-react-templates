# Serai (ColorLib Rolax) — Tasks & Design Notes

> Recreation of ColorLib "Rolax" — free Bootstrap-based hotel website
> template (https://colorlib.com/wp/template/rolax/) under the NEW name
> **Serai** ("serai" — a caravanserai, an inn for travelers; single
> lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-14), per the monorepo naming mandate
> (never reuse the ColorLib source name). Full spec:
> `openspec/specs/template-serai/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Rolax" — hotel one-pager, Bootstrap based
  (bootstrap.min.css + owl.carousel + slicknav + gijgo + nice-select +
  fontawesome + themify + slick) + custom `assets/css/style.css` (~74 KB).
  Brand name used in the source copy: "Rolax". TEMPLATES.md category:
  **Bootstrap 5 (89)**, first occurrence at line 622 (`- [ ]`, source NOT
  shipped anywhere). DUP-ROW TRAP: the `rolax` slug also appears at line
  1924 (**Hotel (38)**) — both `- [ ]` rows of the SAME template; ONE
  implementation covers both rows (mark all `[x]` with the same surge URL at
  bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/rolax/` — HTTP 200, ~32 KB HTML
  (REACHABLE). Custom CSS in `assets/css/style.css` (~74 KB, carries all
  tokens); plus bootstrap/owl/slicknav/gijgo/themify/fontawesome/nice-select
  helpers. Screenshot `rolax-free-template.jpg` (AVIF → viewed in browser)
  matches the live DOM: mountain hero + brown overlay, centered serif
  headline, white booking bar, peach CTAs, near-black footer.
- **Visual design:** elegant luxury-resort one-pager. Warm palette: dusty
  salmon/peach `#E29C89` accents on stark-white sections with a deep
  near-black `#191514` footer and features-caption panel; hero = full-width
  mountain photo + brown gradient overlay with centered white serif
  headline; white booking bar directly below (Check In / Check Out dates,
  Adult / Children selects, white Search button). Headings in Baskervville
  serif, body in Jost sans, muted taupe `#94817E` text. Peach pill CTAs
  (radius 35px) + peach-outlined square buttons. Rooms carousel on light
  `#F9F8F8`; seasonal-specials split pairs a photo with a near-black caption
  panel; "We Offer to Our Guest" = white grid of image cards; testimonials
  on terracotta `#B86E5A` with white radius-0-0-60px-0 cards; near-black
  footer with newsletter form.
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`header-area header-transparent`, absolute over hero):
     top utility bar (`header-top`, bg `#2e0000`): **Call Us: +10 (89) 675
     5456** · **info@rolax.com** left, social icons (Facebook, Twitter,
     LinkedIn) right; bottom bar (`header-bottom header-sticky`, 85px):
     logo left; nav **Home · Rooms · About · Blog** (dropdown: Blog, Blog
     Details) **· Element · Contact Us**; right peach **Book Now**
     (`header-btn2`, radius 0, padding ~29px 43px). Nav links Jost 18px
     white, white underline sweep hover; submenu bg solid peach. Sticky:
     solid `#191514` + shadow. Recreation: brand "SERAI", single-page or
     dead-end links (Blog dropdown optional).
  2. **Hero slider** (`slider-area hero-bg1 hero-overly`, cover photo
     `h1_hero.jpg`, min-height 735px): centered `hero-caption` h1 **"Rest
     Journey in Single step, in the breathtaking"** (Baskervville white
     ~64px) + paragraph. Overlay: `hero-overly::before` gradient `#b86e5a`
     0% → warm browns → `rgba(25,21,20,0.6)` 100%.
  3. **Booking bar** (`form.search-box` in hero): white strip — **Check In
     Date\*** / **Check Out Date\*** (transparent inputs, white text, white
     bottom border 47px, calendar icon left), **Adult** / **Children**
     selects (white 1px border, radius 0), white **Search** button (bg
     `#fff`, text `#232C26`, full-width, radius 0, 47px).
  4. **About** (`support-company-area section-padding`, white): 3-col —
     left photo (`about.jpg`, xl-5), middle caption (xl-4): section-tittle
     h2 **"Luxury & Comfort Our services and wonders of Prague"** + p
     (Asturias copy) + **Learn More** (`btn_01` peach outline, radius 0,
     12px 44px); right small photo (`about-right-img`, xl-3, hidden < xl).
  5. **Our Rooms carousel** (`location-house`, bg `#F9F8F8`, padding
     110px 30px): section-tittle **"Our Rooms"** + p; `owl-carousel`
     `location-active` of `single-location` cards: photo (`hotel1-3.jpg`) +
     bottom gradient overlay (`::before` → `#292621`) + overlaid
     `location-contents`: h3 room name (Baskervville 32px white), "2 Adult
     1 Children", **Started from $500** (span label + big `$500`); arrows.
     Recreation: static 3-card row fine.
  6. **Seasonal specials** (`services-area2 section-padding`, white +
     `#F9F8F8` ::before band top 65%): centered h2 **"Surrounded by
     galleries, boutiques, restaurants and cafés, our Hotel is a hub of
     energy and style."** + **Find a Room For You** (`tittle-btn` dark 18px
     dotted underline); split row (xl-10): left `features-img` photo
     (`project-img.jpg`, xl-6 p-0), right `features-caption` (xl-6 p-0, bg
     `#191514`, padding 68px 40px, height 520px, centered): h3 **"Take
     advantage of our seasonal specials."** (42px white) + p + **View
     Project** (`btn_01`).
  7. **Video banner** (`video-area section-img-bg2`, cover photo
     `video-bg.jpg`): centered round `video-icon` play link (YouTube
     up68UAfH0d0). Recreation: play button, dead-end or modal.
  8. **We Offer to Our Guest** (`guest-house section-padding`, white):
     centered **"We Offer to Our Guest"**; 3-col grid (col-lg-4) of
     `single-location` image cards (`guest1-3.jpg`) + overlay
     `rgba(25,21,20,0.3)` → 0.6 hover + overlaid serif h3: **Free Drinks ·
     Free Breakfast · Free Dinner**.
  9. **Testimonials** (`section.client-say`, bg `#B86E5A`): `client-active`
     slider of `client-caption` cards (white, padding 60px 20px 30px 60px,
     radius **0 0 60px 0**): h3 **Nice Accommodation · Delicious Food**,
     quote, **- Omeka Lotus**; arrows. Recreation: static row/slider of 2-3
     cards.
  10. **Footer** (`footer-area footer-padding`, bg `#191514`): col 1 — logo
      - about p + socials (Twitter, Facebook, LinkedIn, Pinterest); col 2 —
        **Navigation**: About · Our Rooms · Book A Room · Blog · Privacy &
        Policy · Contact; col 3 — **Contact**: 76/A, Green Lane, Dhanmondi,
        NYC · 10 (87) 738-3940 · contact@carwash.com; col 4 — **Newsletter**:
        p + email input (white 1px border) + peach **Search** submit
        (full-width, radius 0); bottom bar copyright — Colorlib credit →
        **Component Dock link (mandatory)**.
- **Design tokens (from `style.css`):** brand peach `#E29C89` (btn bg, nav
  submenu, header-btn2, footer form btn, #back-top, hovers), hover
  `#EC583A` (btn ::before) / submit hover `#191514`; terracotta `#B86E5A`
  (client-say bg + hero overlay top); near-black `#191514` (footer, sticky
  header, features-caption bg, headings); `#2e0000` header-top; body
  `#94817E` Jost 16px; muted `#656565`/`#999999`/`#888888`; eyebrow
  `#7EA0FF` 16px ls 0.05em; light band `#F9F8F8`; room overlay `#292621`;
  pills radius 35px (`.btn`/`.submit-btn`) vs radius 0 (`btn_01`, btn_1,
  header-btn2, search/selects); section padding 120px; section-tittle h2
  42px Baskervville.

## Implementation tasks (TDD, in order)

- [ ] Scaffold: copy simplest existing app → `apps/serai`, rename package
      `@free-react-templates/serai`, register workspace
      (`npm install --package-lock-only`), `public/CNAME` =
      `serai.free.componentdock.com`, homepage
      `https://serai.free.componentdock.com`; footer MUST link
      `https://www.componentdock.com/`
- [ ] `@theme` tokens: `--color-peach: #e29c89` (+ hover `#ec583a`),
      `--color-terra: #b86e5a`, `--color-ink: #191514`,
      `--color-maroon: #2e0000`, `--color-mist: #f9f8f8`,
      `--color-taupe: #94817e`, `--color-eyebrow: #7ea0ff`,
      `--color-overlay: #292621`; fonts Baskervville + Jost via Google
      Fonts `<link>` in `index.html`
- [ ] Navbar (transparent absolute over hero; `#2e0000` top bar w/ phone +
      email + socials; SERAI logo + Home/Rooms/About/Blog/Contact + peach
      Book Now; sticky `#191514` on scroll; hamburger → mobile panel)
- [ ] Hero (full-width photo + brown gradient overlay, centered serif h1
      "Rest Journey in Single step, in the breathtaking", white text;
      booking bar below: Check In / Check Out date inputs + Adult/Children
      selects + white Search; dead-end submit)
- [ ] About ("Luxury & Comfort Our services and wonders of Prague" + p +
      Learn More `btn_01`; 3-col split, right photo hidden < xl)
- [ ] Our Rooms (`#F9F8F8` band, "Our Rooms" + 3 photo cards w/ bottom
      gradient + name/2 Adult 1 Children/Started from $500 overlay; hover
      darkening; static row or carousel)
- [ ] Seasonal specials (centered "Surrounded by galleries…" + Find a Room
      For You dotted-underline link; split: photo left + `#191514` panel
      right w/ "Take advantage of our seasonal specials." + p + View
      Project)
- [ ] Video banner (cover photo + centered round play button)
- [ ] We Offer to Our Guest ("We Offer to Our Guest" + 3 image cards:
      Free Drinks / Free Breakfast / Free Dinner; overlay darkens on hover)
- [ ] Testimonials (`#B86E5A` section, white cards radius 0 0 60px 0: h3 +
      quote + "- Omeka Lotus")
- [ ] Footer (near-black: brand+about+socials / Navigation / Contact /
      Newsletter w/ email input + peach Search; bottom bar with Component
      Dock credit)
- [ ] Placeholder images: `picsum.photos/seed/serai-<n>/<w>/<h>` — hotel
      room / mountain / interior subject for hero + about + room cards +
      guest cards + video banner; screen seeds before pinning
      (seed-screening method: brightness/blue metric + browser_vision on
      top candidates)
- [ ] `scripts/verify-app.sh serai` green (typecheck + lint + 100%
      coverage + build); spec:validate; PR with source/preview/tokens
      noted; bookkeeping: both `- [ ]` rows (lines ~622, ~1924) → `[x]` +
      same surge URL + `npm run readme:status`
