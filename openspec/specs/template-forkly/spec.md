# Template: Forkly (Restaurant)

## Purpose

Forkly is a single-page restaurant website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Pato"
website template (source: https://colorlib.com/wp/template/pato/ — "Pato —
Free Modern Restaurant Website Template by Colorlib"), built under a
DIFFERENT name (Forkly — "fork" plus the friendly "-ly" suffix matching the
family convention: Wingly, Drivly, Nestly, Bookly, Coastly, Restly, Sleeply,
Dozely, Soarly, Lodgely, Sneakly, Taply, Ascendly, Serverly, Framely,
Cargoly, Estately, Wanderly; single lowercase word, no collision with
`apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-14), per
the monorepo naming mandate (never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The source appears THREE times in TEMPLATES.md (dup-row trap): line 616
(**Bootstrap 5 (89)** category — the FIRST occurrence, the canonical one),
line 1126 (**Business (365)**) and line 2689 (**Restaurant (41)**) — all
`- [ ]` rows of the SAME template. ONE implementation covers all three rows
(mark all `[x]` with the same surge URL at bookkeeping time).

## Design reference (replication findings)

- **Original:** ColorLib "Pato" — modern restaurant template, page title
  "Home". Bootstrap-based (bootstrap.min.css + fontawesome-7 + flatpickr +
  glightbox + swiper sliders + custom `css/main.css` ~30 KB + `css/util.css`
  ~21 KB utility classes). The recreation brands itself **Forkly** but keeps
  the same section structure, copy kinds and layout.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/pato/` — HTTP 200, ~44 KB HTML
  (REACHABLE — the preview is live, not a 404). Stylesheets:
  `css/main.css` (custom tokens), `css/util.css` (fonts + utility
  classes), `fonts/fontawesome-7/css/all.min.css`, `vendor/bootstrap/`,
  `vendor/flatpickr/`, `vendor/glightbox/`, `vendor/swiper/`. Screenshot
  `pato-free-modern-restuarant-website-template.jpg` (viewed in browser)
  matches the live DOM (full-screen dark restaurant-interior hero with
  script "Welcome to" + bold uppercase "PATO PLACE" + red-outlined LOOK
  MENU button → transparent nav with PATO logo box → white sections →
  dark footer).
- **Visual design:** modern, elegant restaurant one-pager. Full-screen
  hero slider (3 photos of a busy upscale restaurant interior with warm
  amber lighting) with a dark overlay; transparent header over it (rounded
  "PATO / RESTAURANT" logo box left, centered white uppercase links right,
  social icons + hamburger); script-font eyebrow "Welcome to" over a huge
  bold condensed uppercase "PATO PLACE" headline; red `#ec1d25` accent used
  for hover states, the LOOK MENU button text, carousel dots, countdown
  numbers and the fixed-header top border. Light content sections with
  subtle dotted patterns (pattern1/pattern2), a parallax "Discover Pato
  Place" band, menu category cards with centered tab buttons
  (Lunch/Dinner/Happy Hour/Drink/Starters/Dessert), an event slider with a
  countdown timer, a booking form (date/time/people/name/phone/email),
  testimonial carousel, parallax video section, 3 blog cards, a signup band
  and a dark `#222222` footer.
- **Section order (1:1, verified from live DOM):**
  1. **Header/nav** (`div.wrap-menu-header.gradient1`, absolute over hero):
     `div.logo` — `a` with `img` logo.png (rounded-rect "PATO RESTAURANT"
     logo; swaps to logo2.png when the header goes fixed); `nav.menu >
ul.main_menu` centered: **Home** (index.html) · **Menu** (menu.html) ·
     **Reservation** (reservation.html) · **Gallery** (gallery.html) ·
     **About** (about.html) · **Blog** (blog.html) · **Contact**
     (contact.html); right: `div.social-sidebar` (Facebook, Twitter,
     Instagram icons) + `a.btn-show-sidebar` hamburger (2 lines) opening a
     slide-in sidebar. Fixed header: white bg + `border-top: 5px solid
#ec1d25`, links `#222222` (hover `#ec1d25`). Recreation: single-page
     anchor links (Home/Menu/Reservation/Gallery/About/Blog/Contact) or
     dead-end links; brand "FORKLY".
  2. **Hero slider** (`section.section-slide`): swiper carousel of 3 slides
     (bg images `images/slide1-01.jpg`, `master-slides-02.jpg`,
     `master-slides-01.jpg` — restaurant interiors, cover): each slide
     centered — `span.caption1-slide1.txt1` **"Welcome to"** (Courgette
     60px white) + `h2.caption2-slide1.tit1` **"Pato Place"** (Poppins Bold
     90px uppercase white, letter-spacing 10px) + `a.btn1` **"Look Menu"**
     (white bg, radius 10px, Montserrat 12px uppercase `#ec1d25` text,
     hover: red bg + white text). Prev/next arrow buttons + 3 dots (active
     dot red). Recreation: 3-slide hero carousel, headline "Forkly Place"
     or "Welcome to Forkly" + brand name.
  3. **Welcome** (`section.section-welcome.bg1-pattern`, light bg + subtle
     dot pattern1, padding 120px 0): centered — `span.tit2` **"Italian
     Restaurant"** (Courgette 30px `#d61c22`) + `h3.tit3` **"Welcome"**
     (Poppins Bold 50px uppercase `#222222`, letter-spacing 6px) + lorem
     paragraph (`txt9`, Montserrat 15px `#555`) + `a` **"Our Story"** link
     (Montserrat 12px uppercase `#222`, hover red).
  4. **Intro band + section** (`div.header-intro.parallax100` — fixed bg
     image band, centered: `span.tit2` "Discover" + `h3.tit4` "Pato Place"
     white 50px uppercase; then `section.section-intro`, white): THREE
     `div.col-md-4` cards (`div.blo1`, padding-top 30px): `div.wrap-pic-blo1
bo-rad-10 hov-img-zoom` image (intro-01/02/04.jpg) + `div.wrap-text-blo1
p-t-35`: `h4.txt5` title ("Romantic Restaurant" / "Delicious Food" /
     "Red Wines You Love" — Poppins Medium 22px uppercase `#333`, hover
     red) + `p.txt9` lorem + `a.txt4` **"Learn More"** (Montserrat 12px
     uppercase `#222` + arrow icon `fa-arrow-right-long`, hover red).
  5. **Our Menu** (`section.section-ourmenu.bg2-pattern`, light bg + cream
     pattern2, padding 115px 0): centered title — `span.tit2` "Discover" +
     `h3.tit5` **"Our Menu"** (Poppins Bold 50px uppercase `#222`,
     letter-spacing 10px); then a `div.row` of SIX `div.item-ourmenu
bo-rad-10 hov-img-zoom pos-relative` image cards (our-menu-16.jpg etc,
     col-12/col-sm-6, margin-top 30px), each with a centered overlay
     `a.btn2` tab button (white bg, radius 10px, opacity .9, Poppins
     Medium 22px uppercase `#333`): **Lunch · Dinner · Happy Hour · Drink ·
     Starters · Dessert**. (The source's actual dish lists load via JS from
     menu.html — the recreation shows the six category cards with their
     buttons; full dish lists are out of scope for the one-pager.)
  6. **Events** (`section.section-event`): swiper slider (`swiper-event`);
     each slide (`div.item-slick2`, inline bg image `images/bg-event-01.jpg`
     cover): centered — `div.title-event`: `span.tit2` **"Upcomming"**
     (source typo — fix to "Upcoming") + `h3.tit6` **"Events"** (Poppins
     Bold 50px white uppercase, letter-spacing 6px); `div.blo2` event card:
     `div.wrap-pic-blo2` left (bg image) + `div.wrap-text-blo2` right
     (padding 45px/40px): `span.time-event.txt6` **"08:00 PM"** (Montserrat
     12px white uppercase) + date "Tuesday - 21 November 2018"; `h4.tit7`
     **"Wines during specific nights"** (Poppins Medium 22px uppercase
     `#222`, letter-spacing 3px); lorem paragraph; countdown row
     (`flex-sa-m` of four `div.size11`): big numbers `span.txt7`
     **25 / 12 / 59 / 56** (Montserrat Bold 50px `#ec1d25`) over labels
     `span.txt8` **Days / Hours / Minutes / Seconds** (Montserrat Bold 12px
     `#999` uppercase); `a.btn3` **"View Details"** (`#111` bg, radius 10px,
     hover red).
  7. **Booking** (`section.section-booking.bg1-pattern`, light, padding
     100px 0): centered title — `span.tit2` "Reservation" + `h3.tit3`
     **"Book table"** (Poppins Bold 50px uppercase `#222`, letter-spacing
     6px); form: **Date** (flatpickr date picker; selected day red
     `#ec1d25`), **Time** select (9:00 → 16:00 in 30-min steps), **People**
     select (1–12 people), then `input` **Name**, **Phone**, **Email**
     (rounded inputs, white bg, Montserrat 14px `#666`) + submit `button.btn3`
     **"Book Table"** (dark `#111` radius-10, hover red).
  8. **Review** (`section.section-review`, white, padding-top 115px):
     centered — `div.title-review`: `span.tit2` **"Customers Say"** +
     `h3.tit8` **"Review"** (Poppins Bold 50px uppercase `#222`,
     letter-spacing 11px); testimonial carousel: quote ("We are lorem
     ipsum...") + author "Marie Simmons − New York" (and more slides).
  9. **Video** (`section.section-video.parallax100`, fixed bg image + dark
     overlay `rgba(0,0,0,0.5)` on `div.content-video`): centered —
     `span.tit2` "Discover" + `h3.tit6` **"Our Video"** (white 50px
     uppercase) + circular play button (opens glightbox video modal).
  10. **Blog** (`section.section-blog.bg-white`, padding 115px/123px):
      centered title — `span.tit2` "Latest News" + `h3.tit5` **"The Blog"**
      (50px uppercase `#222`); THREE `div.col-md-4` cards (`div.blo1`,
      padding-top 30px): `div.wrap-pic-blo1 bo-rad-10 hov-img-zoom
pos-relative` image (blog-01/02/03.jpg) + `div.wrap-text-blo1 p-t-35`:
      date `span.time-blog` ("21 Dec 2017" / "15 Dec 2017" / "12 Dec 2017")
      - `h4.txt5` title ("Best Places for Wine" / "Eggs and Cheese" /
        "Style the Wedding Party", hover red) + lorem excerpt + `a.txt4`
        **"Continue Reading"** (12px uppercase `#222` + arrow, hover red).
  11. **Signup** (`div.section-signup.bg1-pattern`, light, padding 85px 0):
      centered inline form — `span.txt5` **"Specials Sign up"** (Poppins
      Medium 22px uppercase `#333`) + email input (`wrap-input-signup
bo-rad-10 bgwhite`, placeholder "Email Adrress" [source typo — fix to
      "Email Address"], envelope icon left) + `button.btn3` **"Sign-up"**
      (dark `#111` radius-10, hover red).
  12. **Footer** (`footer.bg1`, dark `#222222`): FOUR columns — Contact Us
      (8th floor, 379 Hudson St, New York, NY 10018; (+1) 96 716 6879;
      contact@site.com), Opening Times (09:30 AM – 11:00 PM Every Day),
      Latest Posts (feed-style items), Gallery (thumbnail strip). Bottom bar
      (`div.end-footer.bg2` = `#111111`): social icons (facebook,
      x-twitter, instagram, white) + copyright "@ 2026 Colorlib. Get The
      Theme" → recreation: "© 2026 Forkly" + mandatory Component Dock link.
- **Design tokens (from `css/main.css` + `css/util.css`, verified
  2026-08-14):**
  - Brand red **`#ec1d25`** — hover color for links/titles/social, active
    carousel dot, countdown numbers (`txt7`), flatpickr selected day,
    input focus ring (`0 0 0px 2px #ec1d25`), fixed-header top border
    (5px), LOOK MENU button text, btn1/btn2/btn3 hover bg.
  - Script red **`#d61c22`** — Courgette eyebrows (`tit2`); also `#d41b22`,
    `#cf2227` variants.
  - Dark **`#222222`** (`bg1`) — footer bg, `btn3` bg, dark headings
    (`tit3/tit5/tit8`, `txt4`); near-black **`#111111`** (`bg2`) —
    end-footer bg, `btn3` bg.
  - Grays: `#333333` (card titles `txt5`), `#555555` (body `txt9`),
    `#666666` (inputs/body `txt10`), `#999999` (countdown labels `txt8`),
    `#cccccc`, `#aaaaaa`, `#808080` (muted).
  - Light: white sections; pattern1.png (25px light-gray dot pattern) over
    `bg1-pattern` sections (Welcome, Booking, Signup); pattern2.png (400px
    cream texture) over `bg2-pattern` (Our Menu).
  - Fonts: **Poppins** (300/400/500/700 — headings/titles/body) and
    **Montserrat** (400/700 — nav, small-caps buttons, labels, body) and
    **Courgette** (script eyebrows: "Welcome to", "Italian Restaurant",
    "Discover", "Upcomming", "Reservation", "Customers Say", "Latest
    News") — Google Fonts `<link>`s; Noto Sans fallback.
  - Buttons: `btn1` white bg radius-10 → hover red bg white text (hero
    Look Menu); `btn2` white bg radius-10 opacity .9 (menu category
    overlay); `btn3` `#111` bg radius-10 → hover red bg white text (View
    Details, Book Table, Sign-up); ALL buttons radius **10px** (`bo-rad-10`).
  - Titles: `tit1` Poppins 700 90px white uppercase ls-10 (hero brand);
    `tit2` Courgette 30px `#d61c22` (eyebrows); `tit3/tit5/tit8` Poppins
    700 50px uppercase `#222` ls-6/10/11 (section headings);
    `tit4/tit6` Poppins 700 50px white uppercase ls-10/6 (dark sections);
    `tit7` Poppins 500 22px uppercase `#222` ls-3 (card/event titles).
  - Hero text: `txt1` Courgette 60px white ("Welcome to"); `txt5` Poppins
    500 22px uppercase `#333` ls-3 (menu buttons/card titles); `txt4/txt6`
    Montserrat 12px uppercase (links/labels); `txt7` Montserrat 700 50px
    `#ec1d25` (countdown numbers); `txt8` Montserrat 700 12px `#999`
    (countdown labels); `txt9` Montserrat 400 15px `#555` (body);
    `txt10` Montserrat 400 14px `#666` (inputs).
  - Section rhythm: welcome p-t-120/p-b-105; menu p-t-115/p-b-120;
    booking p-t-100/p-b-110; review p-t-115; blog p-t-115/p-b-123; signup
    p-t-85/p-b-85; parallax100 = `background-attachment: fixed` (Intro
    band + Video sections).
  - Overlays: video content `rgba(0,0,0,0.5)`; `bg1-overlay`
    `rgba(0,0,0,0.35)` (hero).

## Requirements

### Requirement: Header navigation

- **GIVEN** the Forkly page is loaded
- **WHEN** the user views the top of the page
- **THEN** the header SHALL show the Forkly logo/brand left and centered
  nav links: Home · Menu · Reservation · Gallery · About · Blog · Contact,
  with social icons and a hamburger toggler on the right
- **AND** the header SHALL be transparent over the hero with white links
- **AND** when the page scrolls, the header SHALL switch to a fixed white
  header with a 5px `#ec1d25` top border and dark links

#### Scenario: Mobile navigation

- **GIVEN** the Forkly page is rendered on a viewport narrower than the
  desktop breakpoint
- **WHEN** the user taps the hamburger toggler
- **THEN** a slide-in menu SHALL open with the same links and a close
  control

### Requirement: Hero slider

- **GIVEN** the Forkly page is loaded
- **WHEN** the user views the hero
- **THEN** a full-screen slider SHALL show restaurant photos behind a dark
  overlay
- **AND** the script eyebrow SHALL read **"Welcome to"** and the headline
  SHALL read the brand name (e.g. "Forkly Place") in large bold uppercase
  white letters
- **AND** a **Look Menu** button SHALL be present (white bg, red uppercase
  text, radius 10px; hover flips to red bg + white text)

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks the arrow controls or a dot
- **THEN** the visible slide SHALL advance accordingly and the active dot
  SHALL turn red

### Requirement: Welcome section

The system SHALL render a light Welcome section with a script eyebrow,
heading, paragraph and a story link.

#### Scenario: Welcome content

- **GIVEN** the user scrolls to the Welcome section
- **WHEN** the section is displayed
- **THEN** a light section with a subtle pattern SHALL show the script
  eyebrow **"Italian Restaurant"**, the heading **"Welcome"**, a lorem
  paragraph and an **Our Story** link
- **AND** the heading SHALL be Poppins Bold 50px uppercase `#222222` with
  the eyebrow in Courgette `#d61c22`

### Requirement: Intro section

- **GIVEN** the user scrolls past the Welcome section
- **WHEN** the intro band is displayed
- **THEN** a parallax (fixed-background) band SHALL show **"Discover"**
  (script) + the brand name in white uppercase
- **AND** below it THREE cards SHALL appear (image, title, paragraph,
  Learn More link): **Romantic Restaurant** · **Delicious Food** · **Red
  Wines You Love**

#### Scenario: Learn More links

- **GIVEN** the intro cards are displayed
- **WHEN** the user clicks any Learn More link
- **THEN** the click SHALL NOT navigate away (dead-end link)

### Requirement: Our Menu

The system SHALL render an Our Menu section with a script eyebrow, heading
and six rounded image cards with overlay buttons.

#### Scenario: Menu cards

- **GIVEN** the user scrolls to the Our Menu section
- **WHEN** the section is displayed
- **THEN** the script eyebrow **"Discover"** and heading **"Our Menu"**
  SHALL appear above SIX rounded image cards, each with a centered overlay
  button: **Lunch · Dinner · Happy Hour · Drink · Starters · Dessert**
- **AND** the cards SHALL zoom on hover and use 10px border radius

### Requirement: Events

- **GIVEN** the user scrolls to the Events section
- **WHEN** the section is displayed
- **THEN** the script eyebrow **"Upcoming"** and heading **"Events"**
  SHALL appear above an event card with a time ("08:00 PM"), a date, a
  title ("Wines during specific nights"), a lorem paragraph and a
  countdown (Days / Hours / Minutes / Seconds) with red numbers
- **AND** a **View Details** button SHALL be present

#### Scenario: Countdown display

- **GIVEN** the event section is displayed
- **WHEN** the user views the countdown
- **THEN** it SHALL show four groups (Days/Hours/Minutes/Seconds) with
  large `#ec1d25` numbers (e.g. 25 / 12 / 59 / 56) over uppercase gray
  labels

### Requirement: Booking form

- **GIVEN** the user scrolls to the Booking section
- **WHEN** the section is displayed
- **THEN** the script eyebrow **"Reservation"** and heading **"Book
  table"** SHALL appear above a form with Date, Time (9:00–16:00),
  People (1–12), Name, Phone and Email fields and a **Book Table** submit
  button

#### Scenario: Submit

- **GIVEN** the booking form is displayed
- **WHEN** the user fills the required fields and submits
- **THEN** the form SHALL NOT navigate away and SHALL show a success
  confirmation (no backend)

### Requirement: Review section

The system SHALL render a Review section with a script eyebrow, heading and
a testimonial carousel.

#### Scenario: Testimonial carousel

- **GIVEN** the user scrolls to the Review section
- **WHEN** the section is displayed
- **THEN** the script eyebrow **"Customers Say"** and heading **"Review"**
  SHALL appear above a testimonial carousel with quotes and author names
  ("Marie Simmons − New York" and others)

### Requirement: Video section

- **GIVEN** the user scrolls to the Video section
- **WHEN** the section is displayed
- **THEN** a parallax video section with a dark overlay SHALL show the
  script eyebrow **"Discover"**, heading **"Our Video"** and a play button

#### Scenario: Play button opens the video modal

- **GIVEN** the video section is displayed
- **WHEN** the user clicks the play button
- **THEN** a video modal SHALL open (embed/stock video) with a close
  control

### Requirement: Blog section

- **GIVEN** the user scrolls to the Blog section
- **WHEN** the section is displayed
- **THEN** the script eyebrow **"Latest News"** and heading **"The Blog"**
  SHALL appear above THREE post cards, each with an image, a date, a
  title, an excerpt and a **Continue Reading** link

#### Scenario: Continue Reading links

- **GIVEN** the blog cards are displayed
- **WHEN** the user clicks any Continue Reading link
- **THEN** the click SHALL NOT navigate away (dead-end link)

### Requirement: Signup band

The system SHALL render a signup band with a heading, an email input and a
sign-up button.

#### Scenario: Signup form

- **GIVEN** the user scrolls between the Blog section and the footer
- **WHEN** the signup band is displayed
- **THEN** it SHALL show **"Specials Sign up"**, an email input with an
  envelope icon and a **Sign-up** button

### Requirement: Footer

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is displayed
- **THEN** a dark `#222222` footer SHALL show Contact Us, Opening Times,
  Latest Posts and Gallery columns, social icons and a copyright bar
  (end-footer `#111111`)

#### Scenario: Component Dock link

- **GIVEN** the footer is displayed
- **WHEN** the user looks at the copyright bar
- **THEN** it SHALL link to `https://www.componentdock.com/` (branded
  "Component Dock") — mandatory footer link, no ColorLib references

### Requirement: Responsive layout

- **GIVEN** the Forkly page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** the header SHALL collapse into the hamburger menu
- **AND** the intro cards, menu cards, event card, blog cards and footer
  columns SHALL stack to single columns

#### Scenario: Stacked layout

- **GIVEN** the Forkly page is rendered on a small viewport
- **WHEN** the page is displayed
- **THEN** all multi-column layouts SHALL stack to single columns
- **AND** the header SHALL collapse into the hamburger menu

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-forkly`
- [ ] `scripts/verify-app.sh forkly` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order (1:1 with the live DOM): transparent header
      (FORKLY logo · Home/Menu/Reservation/Gallery/About/Blog/Contact ·
      social + hamburger; fixed white header w/ 5px red top border on
      scroll) → hero slider (3 restaurant-photo slides, dark overlay,
      "Welcome to" script + brand headline + LOOK MENU button, arrows +
      red active dot) → Welcome (light pattern section: "Italian
      Restaurant" script + "Welcome" heading + paragraph + Our Story) →
      parallax intro band ("Discover" + brand) + 3 intro cards (Romantic
      Restaurant / Delicious Food / Red Wines You Love) → Our Menu
      ("Discover" + "Our Menu", 6 rounded image cards w/ overlay tab
      buttons Lunch/Dinner/Happy Hour/Drink/Starters/Dessert) → Events
      ("Upcoming" + "Events", event card + countdown 25/12/59/56 red
      numbers + View Details) → Booking ("Reservation" + "Book table",
      date/time/people/name/phone/email + Book Table submit) → Review
      ("Customers Say" + "Review", testimonial carousel) → Video (parallax + dark overlay, "Discover" + "Our Video" + play modal) → Blog
      ("Latest News" + "The Blog", 3 cards w/ date/title/excerpt/
      Continue Reading) → signup band ("Specials Sign up" + email +
      Sign-up) → dark footer (#222222: Contact Us / Opening Times /
      Latest Posts / Gallery + end-footer #111111 w/ social + Component
      Dock copyright)
- [ ] Brand tokens in `@theme`: `#ec1d25` red (hovers, active dot,
      countdown numbers, header top border, button hover bg), `#d61c22`
      script red, `#222222` dark (footer/btn3/headings), `#111111`
      near-black (end-footer), grays `#333/#555/#666/#999` — all via
      Tailwind classes
- [ ] Fonts: Poppins (headings/body) + Montserrat (nav/buttons/labels) +
      Courgette (script eyebrows) via Google Fonts `<link>`s in
      `index.html`
- [ ] Buttons: radius 10px everywhere; btn1 white bg / red uppercase text
      (hero), btn2 white bg opacity .9 (menu overlay), btn3 `#111` bg
      (View Details / Book Table / Sign-up); hover → red bg + white text
- [ ] Parallax sections (intro band, video) use fixed-background
      attachment; video content has `rgba(0,0,0,0.5)` overlay
- [ ] Placeholder images via `picsum.photos/seed/forkly-<n>/<w>/<h>`
      (restaurant-interior-ish seeds for hero slides, intro band + cards,
      menu cards, event bg, blog cards, gallery), icons from lucide-react
      (plus inline SVG brand icons for socials — lucide dropped brand
      icons), no copied assets
- [ ] Brand renamed "Pato"/"Colorlib" → "Forkly" everywhere; footer MUST
      link `https://www.componentdock.com/`; all links/forms dead-end
      without navigation (except the componentdock link + modal video)
- [ ] Fix source typos in the recreation: "Upcomming" → "Upcoming",
      "Email Adrress" → "Email Address"
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md bookkeeping at ship time: mark ALL THREE `- [ ]` rows
      (line 616 Bootstrap 5, line 1126 Business, line 2689 Restaurant)
      `[x]` with the same surge URL + `npm run readme:status`
