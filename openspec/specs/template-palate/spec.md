# Template: Palate (Bootstrap / Restaurant)

## Purpose

Palate is a single-page restaurant website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Appetizer"
website template (source: https://colorlib.com/wp/template/appetizer/), built
under a DIFFERENT name (Palate — a culinary term for the sense of taste,
restaurant-branded) per the monorepo naming mandate (never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a dark, upscale restaurant landing page: a black top info bar
(phone, email, open hours), a transparent navbar with an orange "Book a table"
pill, a 750px hero slider with 3 full-width food/interior photographs (black
overlay 50%, uppercase display-font headlines, "Order Now" + "View Menu"
buttons, white dot indicators), a centered "Appetizer Restaurant" about block
with a floating orange video-play circle, a photo counter band with 4 animated
stats (18 Years of Experienced, 15000 Happy Customers, 100 Menus, 20 Staffs),
a light "Catering Services" row of 3 cards with black circular icon badges, a
6-column "Our Menu" grid (Breakfast, Lunch, Dinner, Desserts, Wine Card,
Drinks — 3 items each with circular photo, title, $29 price, ingredient tags),
a "Make Reservation" split with a booking form + map, a 4-card "Our Master
Chef" row (photos, roles, social icons), a photo "Happy Customer" testimonial
carousel with a white overlay (5 slides, circular avatars), and a dark footer
with brand blurb + social icons, an "Open Hours" list, a newsletter subscribe
form, an Instagram thumbnails widget, and a copyright bar. Palate recreates
that structure 1:1 with matching layout, colors, typography, and content types
(no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Appetizer" / slug `appetizer` is
> FORBIDDEN as the app name. **Palate** is the new, original name — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md (verified 2026-08-09). Source slug +
> preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Appetizer" — restaurant / food website template.
  Category in TEMPLATES.md: **Bootstrap (216)**. FOUR checklist rows are
  `- [ ] **Appetizer**` duplicates — lines **334**, **885**, **1768** and
  **2665** — all point to https://colorlib.com/wp/template/appetizer/. The
  recreation brands itself **Palate** but keeps the same section structure and
  copy kinds.
- **Live preview DOM analyzed (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/appetizer/` is LIVE — HTTP 200, 52,018
  bytes, title "Appetizer - Free Bootstrap 4 Template by Colorlib". Structure
  extracted from the rendered DOM + HTML source + `css/style.css` (76,270
  bytes) + Bootstrap 4 vendor CSS. The TEMPLATES.md screenshot
  (`appetizer-free-template.jpg`, 1200×946, browser-verified 2026-08-09)
  confirms the visual design below.
- **Visual design (live render + screenshot — match 1:1):** dark, modern,
  upscale restaurant aesthetic. Palette: near-black hero photographs with a
  50% black overlay + **orange `#ffa323`** as the single brand accent (30
  occurrences in style.css: links, `btn-primary`, nav CTA pill, active nav
  link, video circle, script subheadings, hover states) + white + body text
  `#666666` + dark `#141313` footer. Typography is the signature: body =
  **Poppins** (17px, line-height 2); hero h1 = **Monoton** (cursive display,
  5vw, uppercase, white); section subheadings = **Miss Fajardose** (cursive
  script, 100px, orange, floating above each h2). Hero = restaurant interior /
  food photographs; menu items = 100px circular food photos; section h2s are
  50px weight 900 with a script word (About / Services / Specialties / Book a
  table / Chef / Testimony) overlapping above. The aesthetic is dark imagery +
  bold display type + a single warm orange accent.
- **Section order (1:1, verified from live DOM):**
  1. **Top info bar** (`div.py-1.bg-black.top`, black strip above the nav):
     three centered columns — phone `+ 1235 2355 98` (icon-phone2 badge), email
     `youremail@email.com` (icon-paper-plane badge), and `Open hours: Monday -
Sunday 8:00AM - 9:00PM` (register-link). Rebrand contact copy as Palate
     placeholder values.
  2. **Navbar** (`nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light#ftco-navbar` — transparent, absolute, top 50px below the info bar, z-index 3): brand "Appetizer" (`a.navbar-brand`, white) left; right-aligned links Home (active), About, Menu, Blog, Contact — 14px, weight 400, white, padding 20px horizontal; active link `#ffa323`; CTA `li.nav-item.cta` → "Book a table" pill (bg `#ffa323`, white, radius 5px). Toggler = "Menu" text + oi-menu icon (uppercase, letter-spacing .1em, `rgba(255,255,255,.5)`). Scroll (`.scrolled`): navbar becomes FIXED, white bg, shadow `0 0 10px 0 rgba(0,0,0,.1)`, `margin-top:-130px` → `0` when `.awake` (slide-down); nav links turn black, active stays `#ffa323`, CTA keeps orange bg/white text.
  3. **Hero slider** (`section.home-slider.owl-carousel.js-fullheight` — 750px tall, `position:relative; z-index:0`): 3 slides (`div.slider-item.js-fullheight`, bg images `bg_1.jpg`, `bg_2.jpg`, `bg_3.jpg`), each with a full-cover black `div.overlay` at **opacity .5**, centered content (`col-md-12 text-center`): `<h1.mb-4.mt-5>` headline in **Monoton** display font (5vw, uppercase, white, letter-spacing 1px, line-height 1.5) + two buttons: `a.btn.btn-primary` "Order Now" (orange bg, white text, padding `p-3 px-xl-4 py-xl-3`, radius 2px) + `a.btn.btn-white.btn-outline-white` "View Menu" (white bg, black text, 1px white border; hover/focus → transparent bg, white border, orange text). Headlines: **"Our Delicious Specialties"**, **"The Best Place to Kick of Your Day"** (source typo "Kick of" — fix to "Kick Off"), **"Creamy Hot and Ready to Serve"**. Carousel dots (`owl-dots`, absolute bottom 40px, centered): 18px circles, `2px solid rgba(255,255,255,.5)` border + 12px inner dot `rgba(255,255,255,.5)`; active = white border + white inner dot.
  4. **Counter** (`section.ftco-section.ftco-counter.img#section-counter`, `background-image: url(images/bg_4.jpg)`, `data-stellar-background-ratio="0.5"` — dark food photo cover, NO overlay in the source): 4 stats (`col-md`, `div.block-18`): `strong.number` (40px, weight 500, black, animated count-up from 0) + `span` label (16px, `rgba(0,0,0,.8)`). Values (`data-number`): **18** Years of Experienced · **15000** Happy Customers · **100** Menus · **20** Staffs. (Source labels are terse — keep the same phrasing.)
  5. **Catering Services** (`section.ftco-section.bg-light` — **`#fafafa`**): centered heading: script "Services" + `<h2.mb-4>` "Catering Services"; 3 cards (`col-md-4`, `div.media.block-6.services.d-block` — centered text): `div.icon` 130px circle, background **black `#000000`** (final override in style.css; earlier declarations were `whitesmoke` / `#ffa323` — the rendered value is black) containing an orange flaticon glyph; `div.media-body.p-2.mt-3`: `h3.heading` + lorem paragraph. Cards: **Birthday Party** (flaticon-cake), **Business Meetings** (flaticon-meeting), **Wedding Party** (flaticon-tray).
  6. **Our Menu** (`section.ftco-section`, `container-fluid px-4`): centered heading: script "Specialties" + `<h2.mb-4>` "Our Menu"; 6 menu columns (`col-md-6.col-lg-4.menu-wrap`), each: `div.heading-menu.text-center` `h3` category name (30px, weight **900**, `margin-bottom:1em`) + 3 items (`div.menus.d-flex`): `div.menu-img.img` **100×100px circle** (cover food photo) + `div.text`: row with `h3` title (24px, weight 500) + `span.price` (20px, weight 600, black, right-aligned) + `p` ingredient tags (`<span>Meat</span>, <span>Potatoes</span>, <span>Rice</span>, <span>Tomatoe</span>` — source uses the same 4 tags on every item; vary lightly per item). Categories: **Breakfast**, **Lunch**, **Dinner**, **Desserts**, **Wine Card**, **Drinks**. Items are the same 3 everywhere in the source ("Grilled Beef with potatoes" / "Grilled Crab with Onion" ×2) at **$29** each — give each of the 18 items a distinct dish name + keep $29 prices.
  7. **Make Reservation** (`section.ftco-section.ftco-no-pt.ftco-no-pb`, `container-fluid px-0`, `row d-flex no-gutters`): left half (`col-md-6.makereservation.p-4.p-md-5`): heading — script "Book a table" + `<h2.mb-4>` "Make Reservation"; `<form>` with a 2-column field grid (`col-md-6`): labeled inputs — **Name** (`placeholder="Your Name"`), **Email** (`Your Email`), **Phone** (`Phone`), **Date** (`#book_date`, `Date`), **Time** (`#book_time`, `Time`), **Person** (select with `Person`/`1`/`2`/`3`/`4+` + `ion-ios-arrow-down` chevron); labels 600 weight black; full-width submit `input.btn.btn-primary.py-3.px-5` "Make a Reservation" (orange). Right half (`col-md-6.d-flex.align-items-stretch`): `<div id="map">` — a Google Map embed; replace with a static placeholder map image or a muted map-like block.
  8. **Our Master Chef** (`section.ftco-section`): centered heading: script "Chef" + `<h2.mb-4>` "Our Master Chef"; 4 cards (`col-md-6.col-lg-3`, `div.staff`): `div.img` cover photo (chef-1..4.jpg, **320px tall**, radius **5px**, `background-position: top center`) + `div.text.pt-4`: `h3` name (18px, weight 600), `span.position.mb-2` role (14px, `rgba(0,0,0,.3)`), lorem `p`, and `ul.ftco-social.d-flex` with 4 circular social links (twitter, facebook, google-plus, instagram — icon circles). Chefs: **John Smooth** — Restaurant Owner (chef-4), **Rebeca Welson** — Head Chef (chef-2), **Kharl Branyt** — Chef (chef-3), **Luke Simon** — Chef (chef-1).
  9. **Testimony** (`section.ftco-section.testimony-section.img`, `background-image: url(images/bg_5.jpg)`): `div.overlay` full-cover **white** at **opacity .8** (z-index -1); centered heading: script "Testimony" + `<h2.mb-4>` "Happy Customer"; `div.carousel-testimony.owl-carousel` of 5 slides (`div.item > div.testimony-wrap.text-center.pb-5`): `div.user-img.mb-4` **130×130px circle** avatar (person_1..5.jpg) with `span.quote` (small circle badge, `icon-quote-left`) overlapping at its bottom-right; `div.text.p-3`: quote `p.mb-4` (lorem), `p.name` (18px, weight 500, black), `span.position` ("Customer", 14px). Customers: **Jason McClean**, **Mark Stevenson**, **Art Leonard**, **Rose Henderson**, **Ian Boner** — all "Customer". Owl carousel: 1 slide per view, centered dots, prev/next arrows.
  10. **Footer** (`footer.ftco-footer.ftco-bg-dark.ftco-section` — bg **`#141313`**, `padding: 6em 0`, 14px): 4 widgets (`col-md-6.col-lg-3`): (a) `h2.ftco-heading-2` "Appetizer" (17px, weight 700, white) + blurb `p` + `ul.ftco-footer-social` 3 circular icons (twitter, facebook, instagram); (b) `h2` "Open Hours" + `ul.open-hours` 7 rows (`li.d-flex` day + hours, text `rgba(255,255,255,.7)`): Monday–Thursday `9:00 - 24:00`, Friday–Sunday `9:00 - 02:00`; (c) `h2` "Newsletter" + blurb + `form.subscribe-form`: full-width input (bg `rgba(255,255,255,.1)`, `1px solid rgba(255,255,255,.4)`, radius 2px, placeholder "Enter email address") + submit input "Subscribe" (orange, `form-control.submit.px-3`); (d) `h2` "Instagram" + 2 rows of 3 square thumbs (`a.thumb-menu.img`, 100px tall, insta-1..6.jpg). Bottom bar: centered copyright — "Copyright © `<year>` All rights reserved | This template is made with [heart] by Colorlib" → replace with "© Palate. All rights reserved." (drop the Colorlib credit line; keep the layout).
- **JS behaviors (original, `js/main.js` + vendor):** jQuery Owl Carousel 2 (home-slider 3-slide auto-rotating hero + `carousel-testimony` testimonials), jQuery counter animation (`data-number` count-up, triggered on scroll via waypoints), stellar.js parallax on the counter background, Bootstrap 4 navbar collapse (mobile toggler "Menu"), `scroll` handler toggling `.scrolled`/`.awake` (fixed white navbar, slide-down on scroll-up), Magnific Popup (`popup-vimeo` about video), AOS scroll animations (`ftco-animate`). Recreate in React: a state-driven hero slider (auto-advance + dots), a testimonial carousel (one slide at a time, dot indicators, prev/next), a count-up hook fired by IntersectionObserver, a scroll listener for the navbar `.scrolled`/`.awake` states, CSS hover states (no JS), and optional light fade-up entrance animations.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Fonts:** THREE families. Body = **"Poppins"** (`font-family: "Poppins", Arial, sans-serif`; 17px, line-height 2, weight 400, color `#666666`). Hero slider h1 = **"Monoton"** (cursive display; `text-transform: uppercase; font-size: 5vw; letter-spacing: 1px; line-height: 1.5; color: #fff; font-weight: normal`). Section script subheadings = **"Miss Fajardose"** (cursive script; 100px, `#ffa323`, absolute top -45px, z-index -1). Recreate with Google Fonts `<link>`s in `index.html`: `https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&family=Monoton&family=Miss+Fajardose&display=swap`.
- **Brand colors:**
  - `#ffa323` — brand orange (30 uses): `a` links, `.btn-primary` background + border, active nav link, nav CTA pill bg, `.btn-white:hover` text, `.icon-video` circle bg, script subheadings, services icon glyphs, `.scrolled` active link.
  - `#000000` — services icon circles (130px), `.price`, counter numbers, staff h3/name, reservation labels, `.btn-white` text, nav links in `.scrolled` state.
  - `#fff` — hero h1 + buttons text, nav links/brand (top state), CTA text, footer headings, `.btn-white` bg.
  - `#666666` — body text; `#141313` — footer background; `#fafafa` — `bg-light` section background (services).
  - rgba: hero overlay `rgba(0,0,0,.5)`, testimony overlay white `.8`, footer text `rgba(255,255,255,.7)`, footer input bg `rgba(255,255,255,.1)` + border `rgba(255,255,255,.4)`, counter label `rgba(0,0,0,.8)`, staff position `rgba(0,0,0,.3)`, navbar toggler `rgba(255,255,255,.5)`, hero dots border/inner `rgba(255,255,255,.5)`, video shadow `rgba(0,0,0,.1)`.
- **Radii:** 50% (menu-img 100px circles, services icon 130px, testimony avatar 130px, icon-video 90px, hero owl-dots 18px); 5px (nav CTA pill, staff photos 320px); 2px (buttons, footer inputs).
- **Spacing/geometry:** sections `padding: 7em 0` (footer `6em 0`, hero 750px); navbar absolute `top: 50px`; hero h1 5vw Monoton; section h2 50px weight 900 (weight 600 !important override); menu category h3 30px weight 900; menu item title 24px weight 500, price 20px weight 600; menu-img 100×100; services icon 130×130; counter number 40px weight 500; chef photo 320px, h3 18px weight 600, position 14px; testimony avatar 130px, name 18px weight 500; footer heading 17px weight 700; thumb-menu 100px tall.
- **Buttons:** `btn-primary` = `#ffa323` bg + `1px solid #ffa323` border, white text, radius 2px (hover: slight darken of the orange). `btn-white` = white bg, black text, `1px solid #fff`; hover/focus → transparent bg, white border, **orange** text. Hero buttons padding `p-3 px-xl-4 py-xl-3`. Form submit "Make a Reservation" `py-3 px-5`.
- **Responsive:** ≤991px — navbar becomes a solid dark bar (Bootstrap `.bg-dark` + `ftco-navbar-light` mobile overrides), toggler "Menu"; grids collapse: services 3-up → stacked, menu 3-up lg → 2-up md → stacked, chef 4-up lg → 2-up → stacked, footer 4-up → stacked. Hero dots bottom 40px (5px ≤767px). Sections stack to one column.
- **Placeholder images (never copy ColorLib assets):** hero slides → pinned picsum photo IDs (verified 2026-08-12: `https://picsum.photos/id/292/1920/1080` culinary mise-en-place still-life, `/id/1080/...` fresh strawberries, `/id/431/...` latte-art coffee on a wooden counter — replacing the originally pinned `palate-hero1..3` seeds, which rendered a night cityscape/bridge, a forest and a bridge; see seed-screening note below); counter bg → `https://picsum.photos/id/425/1920/600` (roasted coffee beans on light wood — the source has NO overlay, so a light photo keeps the black numbers readable; the pinned `palate-counter` seed rendered a dark forest scene); menu items → `picsum.photos/seed/palate-m1/200/200` … `palate-m18` (100px circles, `breakfast-1.jpg` etc.); chefs → `picsum.photos/seed/palate-c1/600/800` … `palate-c4` (`chef-1..4.jpg`); testimony avatars → `picsum.photos/seed/palate-t1/200/200` … `palate-t5` (`person_1..5.jpg`); testimony bg → `picsum.photos/seed/palate-testimonial/1920/800` (`bg_5.jpg`; the 80% white overlay makes the subject irrelevant); instagram thumbs → `picsum.photos/seed/palate-i1/300/300` … `palate-i6` (`insta-1..6.jpg`); map → a muted CSS grid pattern with a pin (no third-party map dependency).
- **Icon mapping (source → lucide-react, verified 2026-08-09):** icon-phone2 (top bar) → `Phone` · icon-paper-plane (top bar) → `Send` · oi-menu (toggler) → `Menu` · flaticon-cake (Birthday Party) → `Cake` · flaticon-meeting (Business Meetings) → `Users` · flaticon-tray (Wedding Party) → `UtensilsCrossed` · ion-ios-play (video) → `Play` · ion-ios-arrow-down (select) → `ChevronDown` · icon-quote-left (testimony) → `Quote` · icon-heart (copyright) → `Heart`. **BRAND ICONS WERE REMOVED FROM lucide-react** — `Instagram`/`Facebook`/`Twitter`/`Linkedin`/`Google` are all `undefined` (verified in this repo's lucide-react); all social icons (footer 3 + chef 4 per card) must be inline SVG brand glyphs (simple-icons paths), white on dark / dark on light.

## Requirements

### Requirement: Top info bar

The system SHALL render a black info strip above the navbar with contact details and opening hours.

#### Scenario: Info bar content

- **GIVEN** the Palate page is rendered
- **WHEN** the top info bar is displayed
- **THEN** it SHALL be a thin black strip with three centered items: a phone number with a `Phone` icon, an email address with a `Send` icon, and the text "Open hours: Monday - Sunday 8:00AM - 9:00PM"

### Requirement: Navbar with CTA and scrolled state

The system SHALL render a transparent navbar over the hero with the brand, top-level links, an orange "Book a table" pill, and a fixed white state on scroll.

#### Scenario: Desktop navbar

- **GIVEN** the Palate page is rendered on a desktop viewport
- **WHEN** the navbar is displayed at the top of the page
- **THEN** the navbar SHALL be transparent (absolute, top 50px, no background bar) with the brand "Palate" in white on the left
- **AND** the links "Home" (active), "About", "Menu", "Blog", "Contact" SHALL be right-aligned, 14px, white, with 20px horizontal padding
- **AND** the active link SHALL be brand orange `#ffa323`
- **AND** a "Book a table" CTA pill (orange `#ffa323` background, white text, radius 5px) SHALL sit at the far right of the link row

#### Scenario: Scrolled navbar

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar transitions to the scrolled state
- **THEN** the navbar SHALL become fixed to the top with a white background and shadow `0 0 10px 0 rgba(0,0,0,.1)`
- **AND** the nav links SHALL turn black with the active link staying orange, while the "Book a table" CTA keeps its orange background and white text

#### Scenario: Mobile navbar

- **GIVEN** the Palate page is rendered on a viewport ≤991px
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL be a solid dark bar with a "Menu" toggle (uppercase, letter-spacing .1em)
- **AND** tapping the toggle SHALL expand/collapse the link list

### Requirement: Hero slider

The system SHALL render a 750px-tall hero slider with three full-width photo slides, a black overlay, display-font headlines, and two call-to-action buttons.

#### Scenario: Hero slides and content

- **GIVEN** the Palate page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL be 750px tall with three cover-photo slides, each under a full-cover black overlay at opacity .5
- **AND** each slide SHALL show a centered headline in the Monoton display font (5vw, uppercase, white, letter-spacing 1px) and two buttons: "Order Now" (orange `#ffa323`, white text) and "View Menu" (white background, black text, 1px white border; on hover → transparent background, white border, orange text)
- **AND** the three headlines SHALL read "Our Delicious Specialties", "The Best Place to Kick Off Your Day" (fix the source typo "Kick of"), and "Creamy Hot and Ready to Serve"
- **AND** white dot indicators (18px circles, `rgba(255,255,255,.5)` borders; active = white) SHALL sit centered at the bottom (40px)

#### Scenario: Slider rotation

- **GIVEN** the hero slider is displayed
- **WHEN** time passes or a dot is clicked
- **THEN** the slider SHALL advance to the next slide automatically, and clicking a dot SHALL jump to that slide (wrapping after the third)

### Requirement: About block with video button

The system SHALL render the centered "Appetizer Restaurant" about block with a script subheading, intro copy, and a floating orange play button.

#### Scenario: About content

- **GIVEN** the Palate page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the script subheading "About" (Miss Fajardose, 100px, orange) floating above the heading "Appetizer Restaurant" (50px, weight 900, centered) with a lorem paragraph beneath
- **AND** a 90px orange circle play button (white `Play` glyph, shadow `0 0 34px -8px rgba(0,0,0,.1)`) SHALL sit centered below the paragraph with `margin-bottom:-45px` so it overlaps the next section's top edge

### Requirement: Stats counter band

The system SHALL render the photo counter band with four animated count-up statistics.

#### Scenario: Counter stats

- **GIVEN** the Palate page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show a cover food photo (no overlay) with four stats in a centered row, each a black 40px weight-500 number that counts up from 0 when scrolled into view, with a 16px `rgba(0,0,0,.8)` label beneath
- **AND** the stats SHALL read: 18 Years of Experienced · 15000 Happy Customers · 100 Menus · 20 Staffs

### Requirement: Catering services row

The system SHALL render the three catering-service cards with black circular icon badges on a light background.

#### Scenario: Service cards

- **GIVEN** the Palate page is rendered
- **WHEN** the catering services section is displayed
- **THEN** the section SHALL have a light `#fafafa` background and show the script subheading "Services" above the heading "Catering Services"
- **AND** three cards SHALL be shown in a 3-up row on desktop (stacked on small screens), each with a centered 130px black circle containing an orange icon, a title, and a lorem paragraph
- **AND** the cards SHALL be "Birthday Party" (Cake), "Business Meetings" (Users), and "Wedding Party" (UtensilsCrossed)

### Requirement: Menu grid

The system SHALL render the "Our Menu" grid: six category columns with three items each, using circular photos, dish titles, prices, and ingredient tags.

#### Scenario: Menu categories and items

- **GIVEN** the Palate page is rendered
- **WHEN** the menu section is displayed
- **THEN** the section SHALL show the script subheading "Specialties" above the heading "Our Menu"
- **AND** six category columns SHALL be shown in a 3-up row on desktop (2-up on ≤991px, stacked on small screens), headed by the category name in 30px weight 900: "Breakfast", "Lunch", "Dinner", "Desserts", "Wine Card", "Drinks"
- **AND** each column SHALL list three items, each with a 100×100px circular cover photo, a 24px weight-500 dish title, a 20px weight-600 `$29` price, and an ingredient tag line
- **AND** the 18 dishes SHALL be distinct food names (the source repeats the same three — vary them; all priced $29)

### Requirement: Reservation form with map

The system SHALL render the "Make Reservation" split: a booking form on the left and a map placeholder on the right.

#### Scenario: Reservation form

- **GIVEN** the Palate page is rendered
- **WHEN** the reservation section is displayed
- **THEN** the section SHALL show the script subheading "Book a table" above the heading "Make Reservation" in the left half
- **AND** a two-column form SHALL present labeled fields: Name, Email, Phone, Date, Time, and a Person select (options Person/1/2/3/4+), with a full-width orange submit button "Make a Reservation"
- **AND** the right half SHALL show a map placeholder (static image or muted map-style block)

#### Scenario: Form submission

- **GIVEN** the reservation form is filled with valid values
- **WHEN** "Make a Reservation" is submitted
- **THEN** the form SHALL show a success state (the source posts to `#`; use a client-side confirmation — e.g. a success message or reset)

### Requirement: Master chef row

The system SHALL render the "Our Master Chef" row: four staff cards with photos, roles, blurbs, and social icons.

#### Scenario: Staff cards

- **GIVEN** the Palate page is rendered
- **WHEN** the chef section is displayed
- **THEN** the section SHALL show the script subheading "Chef" above the heading "Our Master Chef"
- **AND** four cards SHALL be shown in a 4-up row on desktop (2-up on ≤991px, stacked on small screens), each with a 320px-tall cover photo (radius 5px), the staff name (18px, weight 600), the role (14px, `rgba(0,0,0,.3)`), a lorem paragraph, and a row of four circular social icon links
- **AND** the staff SHALL be "John Smooth — Restaurant Owner", "Rebeca Welson — Head Chef", "Kharl Branyt — Chef", and "Luke Simon — Chef"

### Requirement: Testimonial carousel

The system SHALL render the "Happy Customer" testimonial carousel over a photo with a white overlay: five testimonials, one slide at a time, with avatars and quote badges.

#### Scenario: Carousel content and behavior

- **GIVEN** the Palate page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the section SHALL show a cover photo under a full-cover white overlay at opacity .8, with the script subheading "Testimony" above the heading "Happy Customer"
- **AND** five slides SHALL exist, each showing a 130px circular avatar with a small quote badge, a lorem quote, the customer name (18px, weight 500, black), and the position "Customer"
- **AND** the customers SHALL be Jason McClean, Mark Stevenson, Art Leonard, Rose Henderson, and Ian Boner
- **AND** exactly one slide SHALL be visible at a time with centered dot indicators and prev/next controls (wrapping)

### Requirement: Dark footer

The system SHALL render the dark `#141313` footer with four widgets (brand + social, open hours, newsletter, Instagram) and a copyright bar.

#### Scenario: Footer widgets

- **GIVEN** the Palate page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a `#141313` background (padding 6em 0) with four columns: the "Palate" brand heading with a blurb and three circular social icons (Twitter, Facebook, Instagram); an "Open Hours" list (Monday–Thursday 9:00 - 24:00, Friday–Sunday 9:00 - 02:00, text `rgba(255,255,255,.7)`); a "Newsletter" blurb with a full-width email input and an orange "Subscribe" button; and an "Instagram" widget with two rows of three square thumbnails

#### Scenario: Newsletter and copyright

- **GIVEN** the footer is displayed
- **WHEN** the newsletter form is submitted with an email
- **THEN** the form SHALL show a confirmation state
- **AND** the bottom bar SHALL read "© Palate. All rights reserved." (drop the Colorlib credit line)

### Requirement: Responsive behavior

The system SHALL adapt the layout across breakpoints: collapsing grids, the dark mobile navbar, and the moving hero dots.

#### Scenario: Mobile layout (≤991px)

- **GIVEN** the Palate page is rendered on a viewport ≤991px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL be a solid dark bar with a "Menu" toggle
- **AND** the services, menu, chef, and footer grids SHALL collapse (2-up/1-up), stacking to one column on ≤767px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-palate`
- [ ] `scripts/verify-app.sh palate` passes (typecheck + lint + vitest 100% coverage + build)
- [ ] Sections in order (1:1 with source): black top info bar (phone/email/open hours) → transparent navbar (white links, orange active + "Book a table" pill; scrolled = fixed white) → 750px hero slider (3 Monoton headlines + "Order Now"/"View Menu" + dots) → About ("Appetizer Restaurant" + script "About" + orange video circle overlapping next section) → Counter band (18/15000/100/20 on photo) → Catering Services (3 cards, black 130px circles, bg `#fafafa`) → Our Menu (6 categories × 3 items, 100px circular photos, $29) → Make Reservation (form + map placeholder) → Our Master Chef (4 cards) → Happy Customer (5-slide carousel, white overlay) → dark footer (4 widgets + copyright)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#ffa323` (brand orange: links, buttons, CTA pill, active link, video circle, script subheadings), `#000000` (icon circles, prices, counter numbers, labels), `#666666` body, `#141313` footer, `#fafafa` bg-light, `#fff` hero/nav text
- [ ] Fonts via Google Fonts `<link>` in `index.html`: Poppins (body 17px), Monoton (hero h1 5vw uppercase), Miss Fajardose (script subheadings 100px orange); title "Palate — Restaurant Template"
- [ ] Hero slider auto-rotates with white dot indicators; counter stats count up on scroll (IntersectionObserver); testimonial carousel one slide + dots + prev/next; navbar `.scrolled` fixed white state on scroll
- [ ] Placeholder images = picsum (hero/counter pinned to food-subject photo IDs 292/1080/431/425 — verified 2026-08-12; `palate-m1..18`, `palate-c1..4`, `palate-t1..5`, `palate-testimonial`, `palate-i1..6` seeds); icons from lucide-react (`Phone`, `Send`, `Menu`, `Cake`, `Users`, `UtensilsCrossed`, `Play`, `ChevronDown`, `Quote`, `Heart`) + inline-SVG brand glyphs for Twitter/Facebook/Instagram/Google+ — no copied assets
- [ ] Source typo fixed: hero slide 2 "Kick of Your Day" → "Kick Off Your Day"; 18 distinct dish names (source repeats 3); copyright rebranded "© Palate. All rights reserved."
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done by implementer at ship time (mark ALL FOUR "Appetizer" rows — lines 334, 885, 1768 and 2665 — Bootstrap category and the other three category rows)
