# Template: Serai (Hotel)

## Purpose

Serai is a single-page hotel website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Rolax"
website template (source: https://colorlib.com/wp/template/rolax/ — "Rolax —
Free Hotel Website Template by ColorLib"), built under a DIFFERENT name
(Serai — "serai", a caravanserai / roadside inn for travelers; single
lowercase word, no collision with `apps/`, `openspec/specs/` or
`docs/templates/` — verified 2026-08-14), per the monorepo naming mandate
(never reuse the ColorLib source name), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The source appears TWICE in TEMPLATES.md (dup-row trap): line 622
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one) and
line 1924 (**Hotel (38)**) — both `- [ ]` rows of the SAME template. ONE
implementation covers both rows (mark all `[x]` with the same surge URL at
bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Rolax" — hotel one-pager. Bootstrap-based
  (bootstrap.min.css + owl.carousel + slicknav + gijgo datepicker +
  nice-select + fontawesome-all + themify-icons + slick + animate +
  magnific-popup) plus a custom `assets/css/style.css` (~74 KB) that carries
  the real design tokens. Brand name used in the source copy: **"Rolax"**
  (the recreation brands itself **Serai** but keeps the same section
  structure, copy kinds and layout).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/rolax/` — HTTP 200, ~32 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets: `assets/css/`
  `style.css` (custom tokens) + `bootstrap.min.css`, `owl.carousel.min.css`,
  `slicknav.css`, `gijgo.css`, `animate.min.css`, `magnific-popup.css`,
  `fontawesome-all.min.css`, `themify-icons.css`, `slick.css`,
  `nice-select.css`. Screenshot `rolax-free-template.jpg` (AVIF, viewed in
  the browser) matches the live DOM: full-width mountain hero with a warm
  gradient overlay, centered serif headline, white booking bar with date +
  guest selects, peach `#E29C89` CTAs, dark-brown footer.
- **Visual design:** elegant, luxury-resort one-pager. Warm palette: dusty
  salmon/peach `#E29C89` accents (buttons, hover states, testimonial
  section, footer form button) on stark-white sections with a deep
  near-black `#191514` footer and features-caption panel. Hero is a
  full-width mountain-photo with a brown gradient overlay (top `#b86e5a`
  fading to dark) and a centered white serif headline; directly below it a
  white booking bar: Check In / Check Out date fields, Adult / Children
  selects, and a white Search button. Headings in the elegant serif
  **Baskervville** (400/500), body in the geometric sans **Jost** (300–800),
  muted taupe `#94817E` body text. CTAs are peach pills (radius 35px) or
  peach-outlined squares (`btn_01`); section headings 42px Baskervville
  with a light-blue `#7EA0FF` eyebrow span. The "Our Rooms" carousel sits on
  a light `#F9F8F8` band; the seasonal-specials split row pairs a photo with
  a near-black caption panel; the "We Offer to Our Guest" grid is white with
  image cards; the testimonial slider sits on a terracotta `#B86E5A`
  section; the footer is near-black with a newsletter form and the source's
  "made with by Colorlib" credit (→ Component Dock link).
- **Section order (1:1, verified from live DOM):**
  1. **Header** (`header.header-area.header-transparent`, absolute over the
     hero): top utility bar (`header-top`, bg `#2e0000` dark maroon) —
     left: **Call Us: +10 (89) 675 5456** · **info@rolax.com**; right:
     social icons (Facebook, Twitter, LinkedIn); bottom bar
     (`header-bottom header-sticky`, transparent, 85px) — logo image left;
     `ul.main-menu` — **Home** (index.html) · **Rooms** (rooms.html) ·
     **About** (about.html) · **Blog** (blog.html, dropdown: Blog · Blog
     Details) · **Element** (elements.html) · **Contact Us**
     (contact.html); right: **Book Now** button (`header-btn2`, peach
     `#E29C89`, radius 0, padding ~29px 43px). Nav links Jost 18px white,
     white underline sweep on hover; submenu bg solid peach. Sticky state:
     solid `#191514` bar with shadow. Recreation: single-page anchor links
     (Home/Rooms/About/Blog/Contact) or dead-end links; brand "SERAI".
  2. **Hero slider** (`div.slider-area.hero-bg1.hero-overly`, full-width bg
     photo `h1_hero.jpg`, min-height 735px; one static slide in the
     preview): centered `hero-caption` — `h1` **"Rest Journey in Single
     step, in the breathtaking"** (Baskervville, white, ~64px), paragraph
     below. Brown gradient overlay via `hero-overly::before` (`#b86e5a` at
     0% fading through warm browns to `rgba(25,22,20,0.6)` at 100%).
  3. **Booking bar** (`form.search-box` inside the hero, below the caption):
     white strip over the hero image — **Check In Date\*** (date input +
     calendar icon, white bottom-border style), **Check Out Date\***
     (same), **Adult** select, **Children** select (white outlined
     selects), and a white **Search** button (bg `#fff`, text `#232C26`,
     full-width, radius 0). Recreation: static form with two date inputs +
     two selects + Search button, dead-end submit.
  4. **About / support** (`div.support-company-area.section-padding`,
     white): 3-column split — left `support-location-img` photo
     (`about.jpg`, col-xl-5), middle `right-caption` (col-xl-4):
     `section-tittle` h2 **"Luxury & Comfort Our services and wonders of
     Prague"** + paragraph ("The concept and service of the best luxury
     hotels in Asturias in our sophisticated Urban Double and Unique Junior
     Suite rooms, …") + **Learn More** link (`btn_01`, peach outline, radius
     0, padding 12px 44px); right `about-right-img` (col-xl-3, hidden below
     xl).
  5. **Our Rooms carousel** (`div.location-house`, bg `#F9F8F8`, padding
     110px 30px): left `section-tittle` h2 **"Our Rooms"** + paragraph; then
     a `container-fluid` with an `owl-carousel` (`.location-active`) of
     `single-location` cards (col-lg-12 each): photo (`hotel1-3.jpg`) with a
     bottom gradient overlay (`.single-location::before` → `#292621` dark)
     and `location-contents` overlaid at the bottom — h3 room name
     (**Luxurious Room · Family Room · Couple Room**, Baskervville 32px
     white), "2 Adult 1 Children", **"Started from $500"** (price span:
     label + big `$500`). Carousel arrows (prev/next). Recreation: a static
     horizontal row of 3 room cards (carousel behaviour optional) with
     hover overlay darkening.
  6. **Seasonal specials** (`div.services-area2.section-padding`, white with
     a `#F9F8F8` ::before band behind the top 65%): centered
     `section-tittle` — `h2` **"Surrounded by galleries, boutiques,
     restaurants and cafés, our Hotel is a hub of energy and style."** +
     **Find a Room For You** link (`tittle-btn`, dark `#191514` 18px with
     dotted underline); below, a split `single-services2` row (col-xl-10
     centered): left `features-img` photo (`project-img.jpg`, col-xl-6 p-0),
     right `features-caption` (col-xl-6 p-0, bg `#191514`, padding 68px
     40px, height 520px, centered): `h3` **"Take advantage of our seasonal
     specials."** (Baskervville 42px white) + paragraph + **View Project**
     link (`btn_01` peach outline).
  7. **Video banner** (`div.video-area.section-img-bg2`, full-width bg photo
     `video-bg.jpg` via data-background, flex centered): `video-icon` — a
     round play button (`popup-video` link, `video-icon.svg`) linking to
     https://www.youtube.com/watch?v=up68UAfH0d0. Recreation: play button
     over a photo, dead-end or modal (no external video required).
  8. **We Offer to Our Guest** (`div.guest-house.section-padding`, white):
     centered `section-tittle` h2 **"We Offer to Our Guest"**; 3-col grid
     (col-lg-4) of `single-location` image cards (`guest1-3.jpg`) with a
     dark overlay (`rgba(25,21,20,0.3)`, darkens to 0.6 on hover) and
     overlaid h3 titles — **Free Drinks · Free Breakfast · Free Dinner**
     (Baskervville white, ~28-32px).
  9. **Testimonials** (`section.client-say`, bg **`#B86E5A`** terracotta):
     `client-active` slider of `client-caption` cards (white bg, padding
     60px 20px 30px 60px, radius **0 0 60px 0**): h3 (**Nice Accommodation
     · Delicious Food**), quote paragraph, `testimonial-founder` — "-
     Omeka Lotus" (founder name). Carousel prev/next arrows. Recreation:
     static row or slider of 2-3 white cards.
  10. **Footer** (`footer.footer-area.footer-padding`, bg `#191514`): col 1
      (col-xl-3) — footer logo (`logo2_footer.png`) + about paragraph
      ("Leather detail contrastic colour contour stunning silhouette working
      peplum. Statement buttons patch.") + `footer-social` icons (Twitter,
      Facebook, LinkedIn, Pinterest); col 2 (offset-xl-1 col-xl-2) —
      **Navigation**: About · Our Rooms · Book A Room · Blog · Privacy &
      Policy · Contact; col 3 (col-xl-3) — **Contact**: 76/A, Green Lane,
      Dhanmondi, NYC · 10 (87) 738-3940 · contact@carwash.com; col 4
      (col-xl-3) — **Newsletter**: paragraph "Subscribe our newsletter to
      get updates." + email input (white-bordered) + peach **Search**
      submit button (bg `#E29C89`, full width, radius 0); bottom bar
      (`.footer-copy-right`): "© <year> All rights reserved | This template
      is made with by Colorlib" — Colorlib credit → **Component Dock link
      (mandatory)** `https://www.componentdock.com/`.

## Design tokens

- **Brand accent:** `#E29C89` dusty salmon/peach — primary buttons
  (`btn`, `submit-btn`, `header-btn2`, footer form button, `#back-top`),
  nav submenu bg, link hovers, `btn_01` outline + hover fill, room-card h3
  hover. Button hover sweep `#EC583A` (`.btn::before`); submit hover sweep
  `#191514`.
- **Terracotta:** `#B86E5A` — testimonial (`client-say`) section bg; also
  the top color of the hero overlay gradient.
- **Near-black:** `#191514` — footer bg, sticky header bg,
  `features-caption` panel bg, headings color (light sections), submit-btn
  hover sweep.
- **Dark maroon:** `#2e0000` — header-top utility bar bg.
- **Headings:** `#191514` — font **Baskervville** (serif), weight 400/500;
  `section-tittle h2` 42px, room-card h3 32px, features-caption h3 42px.
- **Body text:** `#94817E` muted taupe — font **Jost**, 16px, lh 1.4.
  Muted: `#656565` (section-tittle p, support-caption p 17px lh 1.8) /
  `#999999` / `#888888`.
- **Eyebrow span:** `section-tittle > span` color `#7EA0FF` light blue,
  16px, letter-spacing 0.05em.
- **Section backgrounds:** hero — cover photo `h1_hero.jpg` + brown
  gradient overlay (`#b86e5a` → `rgba(25,21,20,0.6)`); location-house
  `#F9F8F8`; services-area2 `#F9F8F8` ::before band (top 65%) over white;
  features-caption `#191514`; video banner — cover photo; guest-house
  white; client-say `#B86E5A`; footer `#191514`.
- **Buttons:** `.btn` — peach pill, radius **35px**, padding 22px 32px,
  Baskervville 18px 500, white text, hover sweep `#EC583A`; `.btn_1` —
  peach bg, padding 16px 41px, 13px, radius 0 (hover: white bg, peach text);
  `.btn_01` — peach outline (1px), peach text, padding 12px 44px, 16px 500,
  radius 0 (hover: peach fill, white text); `.header-btn2` — peach, radius
  0, padding ~29px 43px; `.submit-btn` — full-width peach pill radius 35px,
  hover sweep `#191514`; `.tittle-btn` — dark text 18px, dotted underline;
  hero Search — white bg, `#232C26` text, radius 0, height 47px.
- **Form controls (booking bar):** date inputs — transparent, white text,
  bottom-border white (47px); selects — transparent, white text, 1px white
  border, radius 0 (nice-select base pill radius 25px overridden here).
- **Overlays:** room-card `::before` linear-gradient to `#292621`; guest
  card overlay `rgba(25,21,20,0.3)` → `0.6` on hover; hero overlay
  `#b86e5a` → dark brown.
- **Fonts (Google Fonts `<link>` in `index.html`):**
  `family=Baskervville:ital@0;1&family=Jost:wght@300;400;500;600;700;800`
  — Baskervville for headings/nav buttons, Jost for body/nav.
- **Section padding rhythm:** `.section-padding` 120px top/bottom;
  `.footer-padding` 99px top.

## Requirements

### Requirement: Header navigation

- **GIVEN** the Serai page is loaded
- **WHEN** the user views the top of the page
- **THEN** a transparent header SHALL render over the hero with a dark
  `#2e0000` top utility bar (phone **Call Us: +10 (89) 675 5456** · email
  **info@rolax.com** left; social icons right) and a bottom bar with the
  SERAI brand/logo left, nav links Home · Rooms · About · Blog · Contact,
  and a peach **Book Now** button right
- **AND** when the page scrolls, the header SHALL switch to a solid
  `#191514` sticky bar with a shadow

#### Scenario: Mobile navigation

- **GIVEN** the Serai page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a mobile menu SHALL open with the same links and a close control

### Requirement: Hero

- **GIVEN** the Serai page is loaded
- **WHEN** the user views the hero
- **THEN** a full-width hero (min-height ~735px) SHALL render a background
  photo with a brown gradient overlay and the centered serif headline
  **"Rest Journey in Single step, in the breathtaking"** in white
- **AND** directly below the headline a white booking bar SHALL render:
  **Check In Date** and **Check Out Date** inputs, **Adult** and
  **Children** selects, and a white **Search** button

#### Scenario: Booking bar

- **GIVEN** the booking bar is displayed
- **WHEN** the user fills the date/guest fields and clicks **Search**
- **THEN** the form SHALL NOT navigate away (dead-end submit) and SHALL
  keep or clear the values deterministically

### Requirement: About section

- **GIVEN** the user scrolls past the hero
- **WHEN** the about section is displayed
- **THEN** a white section SHALL show a 3-column split: photo left,
  centered `section-tittle` h2 **"Luxury & Comfort Our services and wonders
  of Prague"** + paragraph + **Learn More** outline button, small photo
  right (hidden below the xl breakpoint)

#### Scenario: Learn More button

- **GIVEN** the about section is displayed
- **WHEN** the user clicks **Learn More**
- **THEN** the button SHALL be a dead-end link or scroll to a section
  (no external navigation required)

### Requirement: Our Rooms carousel

- **GIVEN** the user scrolls to the rooms section
- **WHEN** the section is displayed
- **THEN** a light `#F9F8F8` section SHALL show the heading **"Our Rooms"**
  with a paragraph and a row/carousel of room cards — each with a photo,
  dark bottom overlay, room name (Luxurious Room / Family Room / Couple
  Room), "2 Adult 1 Children" and **"Started from $500"**
- **AND** the cards SHALL be scrollable/arrowable (a static 3-card row is
  acceptable; carousel behaviour optional)

#### Scenario: Room card overlay

- **GIVEN** a room card is displayed
- **WHEN** the user hovers over it
- **THEN** the dark overlay SHALL darken (matching the source's gradient
  treatment)

### Requirement: Seasonal specials

- **GIVEN** the user scrolls past the rooms carousel
- **WHEN** the specials section is displayed
- **THEN** a centered heading **"Surrounded by galleries, boutiques,
  restaurants and cafés, our Hotel is a hub of energy and style."** SHALL
  render above a **Find a Room For You** link
- **AND** a split row SHALL pair a photo (left) with a near-black
  `#191514` caption panel (right) headed **"Take advantage of our seasonal
  specials."** with a paragraph and a **View Project** outline button

#### Scenario: Find a Room For You

- **GIVEN** the specials section is displayed
- **WHEN** the user clicks **Find a Room For You**
- **THEN** the link SHALL be a dead-end link (no navigation required)

### Requirement: Video banner

- **GIVEN** the user scrolls past the specials
- **WHEN** the video banner is displayed
- **THEN** a full-width photo banner SHALL render with a centered round
  play button

#### Scenario: Play button

- **GIVEN** the video banner is displayed
- **WHEN** the user clicks the play button
- **THEN** a modal/video SHALL open or the button SHALL be a dead-end link
  (no external video required)

### Requirement: We Offer to Our Guest

- **GIVEN** the user scrolls to the guest section
- **WHEN** the section is displayed
- **THEN** a white section SHALL show the centered heading **"We Offer to
  Our Guest"** and a 3-column grid of image cards — **Free Drinks · Free
  Breakfast · Free Dinner** — each with a dark overlay and overlaid serif
  title

#### Scenario: Guest card hover

- **GIVEN** a guest card is displayed
- **WHEN** the user hovers over it
- **THEN** the overlay SHALL darken from `rgba(25,21,20,0.3)` to 0.6

### Requirement: Testimonials

- **GIVEN** the user scrolls past the guest section
- **WHEN** the testimonials section is displayed
- **THEN** a terracotta `#B86E5A` section SHALL show white caption cards
  (radius `0 0 60px 0`) — each with a heading (Nice Accommodation /
  Delicious Food), a quote paragraph, and the founder name **"- Omeka
  Lotus"**

#### Scenario: Testimonial card content

- **GIVEN** a testimonial card is displayed
- **WHEN** the user reads it
- **THEN** it SHALL show a heading, a quote paragraph and the founder name

### Requirement: Footer

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** a near-black `#191514` footer SHALL show 4 columns: brand + about
  text + social icons (Twitter, Facebook, LinkedIn, Pinterest);
  **Navigation** (About · Our Rooms · Book A Room · Blog · Privacy &
  Policy · Contact); **Contact** (address 76/A, Green Lane, Dhanmondi, NYC ·
  phone 10 (87) 738-3940 · email contact@carwash.com); **Newsletter**
  (paragraph + email input + peach **Search** button)
- **AND** the bottom bar SHALL show the copyright line with a link to
  **https://www.componentdock.com/** ("Component Dock") — mandatory footer
  convention; no ColorLib credit

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user reads the bottom bar
- **THEN** a link to **https://www.componentdock.com/** labeled
  "Component Dock" SHALL be present and no ColorLib credit SHALL appear

### Requirement: Responsive layout

- **GIVEN** the Serai page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** the about split SHALL stack (right photo hidden — source hides
  `about-right-img` below xl), the rooms row SHALL wrap/scroll, the guest
  grid SHALL collapse to a single column, and all buttons SHALL remain
  tappable

#### Scenario: Stacked layout

- **GIVEN** the Serai page is rendered on a mobile viewport
- **WHEN** the layout reflows
- **THEN** every multi-column section SHALL stack to a single column with
  tappable buttons and the header SHALL use the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-serai`
- [ ] `scripts/verify-app.sh serai` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent header (dark
      `#2e0000` top bar: phone + email left, socials right; SERAI logo ·
      Home/Rooms/About/Blog/Contact nav + peach Book Now button; solid
      `#191514` sticky on scroll) → hero (full-width photo + brown gradient
      overlay, centered serif "Rest Journey in Single step, in the
      breathtaking" + white booking bar: Check In / Check Out dates, Adult /
      Children selects, white Search) → about ("Luxury & Comfort Our
      services and wonders of Prague" + paragraph + Learn More outline; 3-col
      split) → Our Rooms (`#F9F8F8` band, "Our Rooms" + 3 photo cards w/
      dark overlay: Luxurious/Family/Couple Room, 2 Adult 1 Children,
      Started from $500) → seasonal specials (centered "Surrounded by
      galleries…" + Find a Room For You; photo + near-black panel "Take
      advantage of our seasonal specials." + View Project) → video banner
      (cover photo + round play button) → We Offer to Our Guest (3 image
      cards: Free Drinks / Free Breakfast / Free Dinner) → testimonials
      (`#B86E5A` section, white cards radius 0 0 60px 0, "- Omeka Lotus") →
      footer (brand+about+socials; Navigation / Contact / Newsletter
      columns; copyright bar with Component Dock link)
- [ ] Brand tokens in `@theme`: `#E29C89` peach (buttons, nav submenu,
      footer form button, hovers), `#EC583A` (button hover sweep),
      `#B86E5A` terracotta (testimonials), `#191514` near-black (footer,
      sticky header, features panel, headings), `#2e0000` (header top bar),
      `#F9F8F8` (rooms band), `#94817E` (body), `#7EA0FF` (eyebrow spans),
      `#292621` (room overlay) — all via Tailwind classes
- [ ] Fonts: Baskervville (headings/nav buttons) + Jost (body/nav) via
      Google Fonts `<link>` in `index.html`
- [ ] Buttons: peach pills radius 35px (`.btn`/`.submit-btn`) + peach-outline
      squares radius 0 (`.btn_01` Learn More/View Project, `.btn_1`); hero
      Search white with `#232C26` text; hover sweeps `#EC583A` / `#191514`
- [ ] Placeholder images via `picsum.photos/seed/serai-<n>/<w>/<h>` (hotel /
      room / mountain subject for hero + about + room cards + guest cards +
      video banner — screen seeds before pinning; seed-screening method),
      icons from lucide-react (probe exports first — no brand icons; use
      inline SVG for socials)
- [ ] Brand renamed "Rolax"/"Colorlib" → "Serai" everywhere; footer MUST
      link `https://www.componentdock.com/`; all links/forms dead-end
      without navigation (except the componentdock link)
- [ ] Source email "contact@carwash.com" is a source leftover — keep the
      address/phone/email placeholders as-is or normalize, note in PR
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL TWO `- [ ]` rows
      (line 622 Bootstrap 5, line 1924 Hotel) `[x]` with the same
      surge URL + `npm run readme:status`
