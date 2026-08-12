# Template: Shred (Fitness / Gym Template)

## Purpose

Shred is a single-page fitness-club / personal-training template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Slim2" design (see TEMPLATES.md — Bootstrap category, line 498; the
same source is DUPLICATED at lines 1167 and 1876 — ALL THREE rows must be
marked `[x]` when done), built under a NEW name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a modern fitness-club landing page: a **dark transparent
navbar** floating over a full-bleed **split hero carousel** (white text half +
photo half, oversized rotated keyword accent) with a coral pill CTA; a **coral
promo band** of three white-icon cards (Free Lesson / 35% Discount / Free
Testing); a light **Fitness Program** section with a coral vertical tab strip
of 8 programs; a white **services** block ("Get a Perfect Body" + 5 icon
services); a light-pink **Training Schedule** with 7 day tabs and trainer
cards; an image-background **counter band** ("We're Functioning for Almost N
Years"); a coral **testimonials** carousel; an **Our Coaches** row of 4
circular-photo trainer cards; a light **blog** grid; a **contact** section
(info list + message form) with a full-width **map**; a **gallery** heading
with a photo strip; and a **black footer** with four columns + social circles.
The brand colors are **coral `#fe9191`** (primary buttons, icons, accents,
program tab strip) and its darker shade **`#fe7878`** (promo band, hover
states), on **white** sections with **black `#000000`** navbar / footer and
**`#f8f9fa`** light bands. Font: **Nunito Sans**. Shred recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Slim2" — `https://colorlib.com/wp/template/slim2/`
  (Fitness / Gym Template). TEMPLATES.md has **THREE copies** of this item
  (lines 498, 1167, 1876 — all `- [ ]`); mark ALL THREE `[x]` when done. None
  is shipped yet and no other spec targets this source (verified: no spec
  folder references `wp/template/slim2/`; the `template-tonic` folder is for
  the DIFFERENT source `wp/template/slim/` — see below).
- **Preview URL:** `https://preview.colorlib.com/theme/slim2/` — **HTTP 200**
  (72.8 KB), fully reachable. Note: the slim2 preview is **byte-for-byte
  equivalent in rendered text and CSS to the sibling "Slim" preview**
  (`/theme/slim/` — text similarity 1.0, `css/style.css` md5 identical,
  same `images/` set); ColorLib ships the same design under both slugs. The
  design tokens and structure below were extracted from this live DOM, its
  `css/style.css` (83 KB: bootstrap 4 + custom ftco rules), live computed
  styles verified in a browser, and the TEMPLATES.md screenshot.
  Font **"Nunito Sans"** (weights 200–900) loaded via an inline cf-fonts
  `@font-face` block in the head — recreate with a Google Fonts `<link>` in
  `index.html`.
- **Screenshot:** `slim2-free-template.jpg` (1200×946, verified via browser
  vision): split hero — left side stark white with the dark headline "Get A
  Perfect Body Figure", small coral "WELCOME TO THE CLUB" eyebrow, body text
  and a salmon pill "Join with us" button; right side a photo of a woman in
  teal leggings walking up outdoor stairs; a huge vertical **"STRENGTH"**
  word and a thin coral rectangle outline as graphic accents; navbar links
  top-right with the active link underlined coral. The bottom of the
  screenshot shows the **coral promo band** with three white-icon cards
  (trophy/medal, clipboard-check, sneaker) — "Free Lesson", "35% Discount",
  "Free Testing" — with white titles and small white text. Modern
  fitness-club aesthetic, coral-on-white with black accents.
- **Section structure (from the live DOM, in order):**
  1. `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark` — **dark
     navbar, `position: absolute; top: 0`, transparent over the hero**
     (computed: `background: rgba(0,0,0,0)`; on scroll it becomes solid
     `#000` — `.ftco-navbar-light.scrolled { background: #000000 }` in
     style.css; mobile ≤991px also solid black, relative). Brand **"Slim"**
     (recreate "Shred") + 8 links: **Home** (active), **Programs**,
     **Services**, **Schedule**, **About**, **Coaches**, **Blog**,
     **Contact** (white links; hover coral `#fe9191`; active link coral).
  2. `section#home-section.hero` — **hero carousel** (owl, 2 real slides +
     clones): each slide is a full-bleed background image
     (`images/bg_1.jpg` / `bg_2.jpg`; the composite photo has a white text
     area on the left and the subject photo on the right) with:
     - `h3` oversized rotated keyword **"STRENGTH"** / **"WORKOUT"** — 100px,
       `transform: matrix(-1,0,0,-1,0,0)` (180°-rotated, vertical in the
       original layout; white over the photo per computed styles, black over
       the white area in the screenshot — place it rotated with a fidelity
       call on color/position).
     - `p` eyebrow **"Welcome to the Club"** / **"Welcome to Club"** (coral,
       uppercase, small).
     - `h1` **"Get A Perfect Body Figure"** / **"Pain is Temporary But Glory
       is Forever"** — computed: **44px, weight 300 (light), color
       `#000`**, Nunito Sans.
     - `p` body copy (the "A small river named Duden..." lorem).
     - `a.btn.btn-primary` **"Join with us"** — coral pill CTA.
  3. `section.ftco-section.ftco-services.ftco-no-pt.ftco-no-pb` — **coral
     promo band**: band background **`#fe7878`**, 3 cards (`.services`,
     background **`#fe9191`**, radius 0) in a row, each with a white line
     icon (flaticon-body, flaticon-diet, flaticon-running), `h3` title
     (white) and a short paragraph, plus a **"Read more →"** link. Titles:
     **Free Lesson**, **35% Discount**, **Free Testing**.
  4. `section#programs-section.ftco-section.ftco-no-pb.ftco-no-pt.ftco-program.bg-light`
     — **Fitness Program** section (bg `#f8f9fa`): centered subheading +
     `h2` **"Fitness Program"** + intro paragraph; the content is a **coral
     vertical tab strip**: `.nav-link-wrap` (bg **`#fe9191`**, margin-top
     20px) holds `nav-pills` tabs, each tab an icon (flaticon-gym, -body,
     -woman, -abs, -running, -meditation, -aerobic) + 20px label
     (`rgba(255,255,255,0.8)`, radius 0, arrow pseudo-element on active):
     **Fitness Program** (active), **Fit & Healthy**, **Muscle Building**,
     **Bikini & Body**, **Cardio Exercise**, **Power Yoga**, **Aerobics
     Program**, **Crossfit Program**. The active pane shows a heading + two
     lorem paragraphs + a **"Learn More"** coral link. Tab click swaps the
     visible pane.
  5. `section#services-section.ftco-section.ftco-services-2` — **"Get a
     Perfect Body"**: `span.subheading` **"Sexy & Healthy"** (uppercase,
     coral) + `h2` **"Get a Perfect Body"** + intro text, then **5 icon
     services** (flaticon-abs, -scale, -check-list, -diet,
     -treadmill-machine-with-timer; icon + `h3` + text): **Make Your Body
     Harmonic**, **Weight Loss Program**, **Group Personal Trainings**,
     **Optimal Diet Selection**, **Individual Training Programs**.
  6. `section#schedule-section.ftco-section.ftco-schedule` — **Training
     Schedule** (section bg **`#ffdddd`** light pink): centered subheading
     **"Schedule"** + `h2` **"Training Schedule"** + intro. Left: **7 day
     tabs** (`nav-pills`, white bg links `padding: 28px 30px`, black 22px
     weight 600, radius 0, day name + 14px `<span>` program): **Monday
     Fitness Program / Tuesday Crossfit Program / Wednesday Aerobic Program /
     Thursday Yoga Classes / Friday Fitness Program / Saturday Yoga Classes /
     Sunday Crossfit Program**. Right (`div.col-md-8.tab-wrap`): **schedule
     cards** (`.coach-wrap` — white card `padding: 40px`, margin-bottom 20px,
     `d-sm-flex`): **120px circular coach photo** (`.coach-img`,
     `background-position: top center`, radius 50%; `trainer-1..4.jpg`),
     `<span class="time">` **"08:00AM - 10:00AM"** (bold coral), `h2` class
     title (**Basic Exercise**, **Yoga Program**, **Body Building**, **Cardio
     Classes**, **Basic Exercies for Begginer** [sic], ...), lorem
     description, and a trainer attribution `h3` quote **"— Anthony Miller,
     Cardio Expert"** / "— Jason Davis, Body Building" / "— Mark Harlem,
     Health Expert" / "— Nikki Valdez, Yoga Expert" / "— Troy Watson, Boxing
     Trainer" / "— Greg Mueller, Dance Expert" / "— Jesh Stone, Muscle
     Expert" (each day pane shows 3 coach cards).
  7. `section#about-section.ftco-counter.img.ftco-section.ftco-no-pt.ftco-no-pb`
     — **counter band** over a background image (`images/divider.jpg`):
     `span.subheading` **"A Few Words About Us"** + `h2` **"We're
     Functioning for Almost <span class=number>0</span> Years"** (animated
     counter — original animates 0 → N with jquery.animateNumber; recreation
     renders the final value, e.g. 40) + two lorem paragraphs + an `about`
     image (`images/about.jpg`).
  8. `section.ftco-section.testimony-section` — **Testimonials**: section bg
     **`#fe9191`** with a dark overlay (`#232931`, opacity 0.7); centered
     subheading **"Read testimonials"** + `h2` **"What Client Says"**;
     testimonial cards (owl carousel, 5 clones of "Jeff Freshman"): quote
     text + name **"Jeff Freshman"** + position **"Artist"** + circular photo.
  9. `section#coaches-section.ftco-section` — **Our Coaches**: subheading +
     `h2` **"Our Coaches"**; **4 coach cards** (`.staff`): **200px circular
     photo** (radius 50%; `trainer_1..3.jpg`/`trainer-1..4.jpg`), `h3` name
     (24px, weight 400) — **Lloyd Wilson**, **Rachel Parker**, **Ian Smith**,
     **Alicia Henderson** — `span.position` (uppercase, coral, letter-spacing
     1px; e.g. "Body Builder", "Fitness Coach") and a `div.ftco-social.text-center`
     row of small social icon circles.
  10. `section#blog-section.ftco-section.bg-light` — **Blog** (bg `#f8f9fa`):
      subheading + `h2` **"Our Blog"**; **3 blog cards** (`image_1..3.jpg`):
      image, `div.meta` (date · "Admin" · chat icon + count), `h3` title.
  11. `section#contact-section.ftco-section.contact-section.ftco-no-pb` —
      **Contact Me**: subheading **"Contact"** + `h2` **"Contact Me"** +
      intro; left column **contact info** (icon + label + value): **Address**
      — 198 West 21th Street, Suite 721 New York NY 10016 · **Contact
      Number** — +1235 2355 98 · **Email Address** — info@yoursite.com ·
      **Website** — yoursite.com; right column **contact form**: inputs
      **Your Name**, **Your Email**, **Subject**, **Message** (textarea, 7
      rows) + submit **"Send Message"** (`btn-primary py-3 px-5` coral pill).
  12. `section.ftco-section.ftco-no-pt.ftco-no-pb` — **map**: full-width
      `div#map.bg-white` (Google Maps embed in the original — recreation
      renders a placeholder map block; fidelity call).
  13. `section.ftco-gallery.ftco-section` — **Gallery**: `h3` subheading
      **"Gallery"** + `h2` **"See the latest photos"**; photo strip of
      `gallery-1..4.jpg` (4+ images).
  14. `footer.ftco-footer.ftco-section` — **footer**, computed background
      **`#000000`** (black), white text, `padding: 6em 0`; 4 columns:
      - **About Shred.** — brand + lorem paragraph + round social icon
        circles (`.ftco-footer-social`).
      - **Links** — Home, About, Services, Cocahes (original typo → fix to
        "Coaches"), Schedule, Contact.
      - **Services** — Gym Fitness, Crossfit, Yoa (original typo → fix to
        "Yoga"), Aerobics.
      - **Have a Questions?** — "203 Fake St. Mountain View, San Francisco,
        California, USA", phone "+2 392 3929 210", email "info@yourdomain.com".
      - Copyright row: "Copyright © <year> All rights reserved | This
        template is made with ❤ by Colorlib" → recreation: "…made with ❤ by
        Component Dock" linking `https://www.componentdock.com/`.
- **Behavior notes:** navbar gets a solid black background on scroll
  (`.scrolled` class via JS) and is solid black + relative on mobile ≤991px;
  the hero is an owl carousel (2 slides — the recreation may render the two
  slides statically or as a simple auto-rotating fade; fidelity call);
  counters animate on load (jquery.animateNumber); the Fitness Program tab
  strip and the day tabs switch panes via Bootstrap pills JS (recreate with
  simple React state); all internal links point to `#` (render as
  non-navigating or `href="#"`); the contact form has no backend
  (preventDefault / client-side success message). Section rhythm: standard
  `ftco-section` padding `6em 0` (the services band and map are exceptions
  with `ftco-no-pt/ftco-no-pb`).

## Design tokens (extracted from `css/style.css` + live computed styles)

- Page: `body { font-family: "Nunito Sans", Arial, sans-serif; font-size:
16px; color: #999999; }` (gray body text on white).
- Font: **"Nunito Sans"**, Arial, sans-serif (weights 200–900; hero h1 uses
  weight 300). Recreation: Google Fonts `<link>` in `index.html`.
- Brand coral: **#fe9191** — `btn-primary` bg, `.heading-section h2
span.number` color, `.staff .position` color, service/program icon colors,
  `.nav-link-wrap` bg (program tabs), link hovers, active nav link. Darker
  shade **#fe7878** — `.ftco-services` band bg, `.services-2` card bg, hover
  states.
- Buttons (`.btn`): **border-radius 30px** (pill); `btn-primary`:
  background `#fe9191`, 1px `#fe9191` border, white text, padding `16px 48px`
  (computed), box-shadow `0 24px 36px -11px rgba(0,0,0,0.09)`.
- Navbar: transparent absolute over hero (top 0); scrolled/mobile: solid
  `#000000`; links white, hover coral.
- Hero: slide bg photo (composite: white left half + subject photo right);
  `h1` **44px, weight 300, `#000`** (white half); eyebrow "Welcome to the
  Club" coral uppercase small; oversized rotated keyword `h3` 100px (white
  over photo / black over white); CTA = coral pill "Join with us".
- Promo band: band bg `#fe7878`, cards bg `#fe9191`, white icons/titles, gray
  `#999` text, radius 0; "Read more →" link white/coral.
- Program section: bg `#f8f9fa`; `.nav-link-wrap` bg `#fe9191`; tab links
  white `rgba(255,255,255,0.8)` 20px radius 0 with active arrow; pane =
  heading + lorem + coral "Learn More" link.
- Section headings: `span.subheading` uppercase (16px default, coral); `h2`
  40px weight 600 black (28px mobile); `span.number` coral.
- Schedule: section bg `#ffdddd`; day tabs white bg, black 22px weight 600,
  `padding: 28px 30px`, day `<span>` 14px; coach cards white, `padding: 40px`,
  120px circular coach photo (top-center crop), `.time` bold coral, `h2`
  class title, lorem, trainer quote `h3` "— Name, Role".
- Counter band: background image (`divider.jpg`) with overlay; white text;
  `h2` with animated coral number span.
- Testimonials: section bg `#fe9191` + overlay `#232931` opacity 0.7; white
  cards, quote text, name + position, circular photo.
- Coaches (`.staff`): photo **200px circle** (radius 50%), `h3` 24px weight
  400, `.position` uppercase coral letter-spacing 1px, social icon circles.
- Blog: bg `#f8f9fa`; image + `div.meta` (date · Admin · comment count) +
  18px black title.
- Contact: info list (icon + label + value), form inputs bordered gray,
  "Send Message" coral pill.
- Map: full-width `#map` white block (Google embed → placeholder).
- Footer: bg `#000000`, white text, `padding: 6em 0`, widget headings white,
  link text `rgba(255,255,255,0.7)`-ish, `rgba(255,255,255,0.1)` borders,
  social circles, copyright row centered.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/shred-<n>/<w>/<h>` (deterministic per
  template): hero slide photos (seeds shred-hero1 / shred-hero2 — must be
  fitness/workout subjects), promo icons (lucide, not photos), program icons
  (lucide), schedule trainer thumbs, about image, testimonial faces, coach
  headshots (portrait), 3 blog images, 4 gallery images. **Picsum seeds are
  arbitrary — verify the seeds render suitable subjects before shipping and
  pin verified seeds (see `docs/templates/shred/tasks.md`).** Icons from
  `lucide-react` (dumbbell, heart-pulse, users, calendar, clock, map-pin,
  phone, mail, globe, chevron-right, menu, message-circle, trophy,
  clipboard-check, footprints, flame, activity, play, send); no ColorLib
  assets. Note: lucide-react removed brand icons (Facebook/Twitter/
  Instagram) — use inline SVG brand paths for the footer/coach social icons.

## Requirements

### Requirement: Navbar

The system SHALL render the transparent dark navbar over the hero with the
brand and eight nav links, turning solid black on scroll.

#### Scenario: Navbar renders over hero

- **GIVEN** the Shred app is rendered at a desktop viewport
- **WHEN** the page is displayed at the top
- **THEN** a transparent navbar SHALL float over the hero with the white
  brand "Shred" on the left
- **AND** the nav SHALL list Home (active), Programs, Services, Schedule,
  About, Coaches, Blog and Contact as white links that turn coral on hover

#### Scenario: Navbar turns solid on scroll

- **GIVEN** the Shred app is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become solid black

#### Scenario: Mobile navbar

- **GIVEN** the Shred app is rendered at a mobile viewport
- **WHEN** the page is displayed
- **THEN** the navbar SHALL render with a solid black background and the
  collapsed menu SHALL expose the same eight nav links

### Requirement: Hero

The system SHALL render the split hero carousel with headline, eyebrow,
keyword accent and a coral CTA.

#### Scenario: Hero renders

- **GIVEN** the Shred app is rendered
- **WHEN** the hero section is displayed
- **THEN** a full-bleed hero SHALL render with a split layout: a white text
  column on the left and a fitness photo on the right
- **AND** the coral uppercase eyebrow "Welcome to the Club" and the 44px
  light-weight black headline "Get A Perfect Body Figure" SHALL render on the
  white side
- **AND** a short paragraph and a coral pill button "Join with us" SHALL
  render below the headline

#### Scenario: Second hero slide

- **GIVEN** the Shred app is rendered
- **WHEN** the hero advances to the second slide
- **THEN** the headline SHALL read "Pain is Temporary But Glory is Forever"
  with the eyebrow "Welcome to Club" and the same paragraph + "Join with us"
  button
- **AND** an oversized rotated keyword accent ("STRENGTH" / "WORKOUT") SHALL
  be present on both slides

### Requirement: Promo band

The system SHALL render the coral promo band with three white-icon cards.

#### Scenario: Promo cards render

- **GIVEN** the Shred app is rendered
- **WHEN** the page is scrolled to the promo band
- **THEN** a coral band SHALL render three cards (Free Lesson, 35% Discount,
  Free Testing), each with a white icon, a white title, a short gray
  paragraph and a "Read more →" link

### Requirement: Fitness Program

The system SHALL render the light program section with a coral tab strip of
eight programs.

#### Scenario: Program tabs render

- **GIVEN** the Shred app is rendered
- **WHEN** the Fitness Program section is displayed on a light-gray
  `#f8f9fa` background
- **THEN** the heading "Fitness Program" with an intro paragraph SHALL
  render centered
- **AND** a coral vertical tab strip SHALL render eight tabs (Fitness
  Program, Fit & Healthy, Muscle Building, Bikini & Body, Cardio Exercise,
  Power Yoga, Aerobics Program, Crossfit Program), each with an icon and a
  white label

#### Scenario: Program tab switches content

- **GIVEN** the Shred app is rendered
- **WHEN** the user clicks a non-active program tab
- **THEN** the visible pane SHALL switch to the selected program, showing a
  heading, body copy and a coral "Learn More" link

### Requirement: Services

The system SHALL render the "Get a Perfect Body" services block with five
icon services.

#### Scenario: Services render

- **GIVEN** the Shred app is rendered
- **WHEN** the services section is displayed
- **THEN** the coral uppercase subheading "Sexy & Healthy" and the heading
  "Get a Perfect Body" SHALL render with an intro paragraph
- **AND** five services SHALL render (Make Your Body Harmonic, Weight Loss
  Program, Group Personal Trainings, Optimal Diet Selection, Individual
  Training Programs), each with an icon, a title and a short text

### Requirement: Training Schedule

The system SHALL render the schedule section with seven day tabs and trainer
cards.

#### Scenario: Schedule renders

- **GIVEN** the Shred app is rendered
- **WHEN** the Training Schedule section is displayed
- **THEN** the heading "Training Schedule" SHALL render with an intro
  paragraph on a light-pink `#ffdddd` background
- **AND** seven day tabs SHALL render (Monday Fitness Program, Tuesday
  Crossfit Program, Wednesday Aerobic Program, Thursday Yoga Classes, Friday
  Fitness Program, Saturday Yoga Classes, Sunday Crossfit Program)
- **AND** a schedule card SHALL render with a time ("08:00AM - 10:00AM"), a
  class title (e.g. Basic Exercise), a description and a trainer attribution
  with a 120px circular photo (e.g. "— Anthony Miller, Cardio Expert")

#### Scenario: Day tab switches schedule

- **GIVEN** the Shred app is rendered
- **WHEN** the user clicks a non-active day tab
- **THEN** the visible schedule cards SHALL switch to that day's program

### Requirement: Counter band

The system SHALL render the image-background counter band with the years
counter.

#### Scenario: Counter band renders

- **GIVEN** the Shred app is rendered
- **WHEN** the counter section is displayed
- **THEN** a band with a background image SHALL render with the subheading
  "A Few Words About Us" and the heading "We're Functioning for Almost 40
  Years" (number in coral)
- **AND** two paragraphs of about copy SHALL render

### Requirement: Testimonials

The system SHALL render the testimonials section with client quotes.

#### Scenario: Testimonials render

- **GIVEN** the Shred app is rendered
- **WHEN** the Testimonials section is displayed
- **THEN** the subheading "Read testimonials" and the heading "What Client
  Says" SHALL render centered on the coral `#fe9191` section with its dark
  overlay
- **AND** at least one quote card SHALL render with a quote paragraph, a
  circular photo, a name ("Jeff Freshman") and a position ("Artist")

### Requirement: Coaches

The system SHALL render the Our Coaches row with four circular-photo cards.

#### Scenario: Coaches render

- **GIVEN** the Shred app is rendered
- **WHEN** the Coaches section is displayed
- **THEN** the heading "Our Coaches" SHALL render
- **AND** four coach cards SHALL render, each with a 200px circular photo, a
  24px name (Lloyd Wilson, Rachel Parker, Ian Smith, Alicia Henderson), an
  uppercase coral position and a row of social icon circles

### Requirement: Blog

The system SHALL render the blog grid with three post cards.

#### Scenario: Blog renders

- **GIVEN** the Shred app is rendered
- **WHEN** the Blog section is displayed on a light-gray `#f8f9fa`
  background
- **THEN** the heading "Our Blog" SHALL render
- **AND** three blog cards SHALL render, each with an image, a meta row
  (date · "Admin" · comment count) and a post title

### Requirement: Contact

The system SHALL render the contact section with the info list and the
message form.

#### Scenario: Contact renders

- **GIVEN** the Shred app is rendered
- **WHEN** the Contact section is displayed
- **THEN** the heading "Contact Me" SHALL render with an intro paragraph
- **AND** the info list SHALL render Address (198 West 21th Street, Suite
  721 New York NY 10016), Contact Number (+1235 2355 98), Email Address
  (info@yoursite.com) and Website (yoursite.com), each with an icon
- **AND** the form SHALL render inputs "Your Name", "Your Email", "Subject",
  a "Message" textarea and a coral "Send Message" submit button

#### Scenario: Form submit

- **GIVEN** the Shred app is rendered
- **WHEN** the user fills the form and submits it
- **THEN** the page SHALL NOT navigate (no backend) and a client-side
  success message SHALL appear

### Requirement: Gallery

The system SHALL render the gallery heading with a photo strip.

#### Scenario: Gallery renders

- **GIVEN** the Shred app is rendered
- **WHEN** the Gallery section is displayed
- **THEN** the subheading "Gallery" and the heading "See the latest photos"
  SHALL render
- **AND** a strip of four or more photos SHALL render below

### Requirement: Footer

The system SHALL render the black footer with four columns, the contact
widget and the copyright/credit row.

#### Scenario: Footer renders

- **GIVEN** the Shred app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a black footer SHALL render with the brand column ("About Shred."
  - about text + circular social icons), the Links column (Home, About,
    Services, Coaches, Schedule, Contact), the Services column (Gym Fitness,
    Crossfit, Yoga, Aerobics) and the "Have a Questions?" contact widget
    (address, phone, email)
- **AND** a centered copyright row SHALL render: "Copyright © <year> All
  rights reserved" plus a credit line linking to
  `https://www.componentdock.com/` ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Shred app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: navbar → hero → promo band →
  fitness program → services → training schedule → counter band →
  testimonials → coaches → blog → contact → map → gallery → footer
- **AND** the document title SHALL be "Shred — Fitness Club"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- shred` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: transparent navbar (scrolled = solid
      black), split hero carousel with coral CTA, coral promo band (3 cards),
      coral program tab strip (8 tabs + switchable panes) on `#f8f9fa`,
      "Get a Perfect Body" services (5), 7 day tabs + coach schedule cards
      on `#ffdddd`, image-bg counter band, coral testimonials with overlay,
      4 coaches with circular photos, 3 blog cards, contact info + form +
      map, gallery strip, black footer with Component Dock credit.
- [ ] Design tokens applied: coral `#fe9191` (buttons, icons, accents,
      program tab strip), `#fe7878` (promo band), Nunito Sans, pill buttons
      (radius 30px), black `#000` navbar/footer, `#f8f9fa` light bands,
      `#ffdddd` schedule band.
- [ ] No ColorLib references in any app file; footer links
      `https://www.componentdock.com/`.
- [ ] TEMPLATES.md rows 498, 1167 and 1876 all marked `[x]` with the surge
      URL after shipping.
- [ ] Picsum seeds screened for suitable subjects (fitness hero photos,
      coach/testimonial headshots) and pinned in the spec + PR.
