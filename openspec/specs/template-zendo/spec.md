# Template: Zendo (Bootstrap / Yoga & Meditation Studio)

## Purpose

Zendo is a single-page yoga & meditation studio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Meditative" website template
(source: https://colorlib.com/wp/template/meditative/), built under a
DIFFERENT name (Zendo — a Zen meditation hall; single lowercase word, no
collision with `apps/`, `openspec/specs/` or `docs/templates/` — verified
2026-08-11) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-11): the official preview
> `https://preview.colorlib.com/theme/meditative/` is REACHABLE (HTTP 200,
> ~72.6 KB HTML + `css/style.css` ~77.8 KB, curl verified) and was analyzed
> directly — NO screenshot fallback needed. The TEMPLATES.md screenshot
> (`meditative-free-template.jpg`, 1200×946, viewed in browser) matches the
> live render's hero/class-strip 1:1 (serene yoga photo hero with white
> overlay, centered serif headline, pink accents, 4 circular class
> thumbnails).

## Design reference (replication findings)

- **Original:** ColorLib "Meditative" — a free yoga / meditation studio
  website template based on Bootstrap 4. Category in TEMPLATES.md:
  **Bootstrap** (line 450; the slug also appears at lines 1095 and 1866 —
  dup rows in other category sections, all `- [ ]`, unprepped and
  unshipped; the prep stream leaves all rows alone). The recreation brands
  itself **Zendo** but keeps the same section structure, copy kinds and
  design tokens.
- **Multi-page source:** the original has separate pages (index, about,
  trainer, classes, schedule, blog, contact — nav links
  `index.html`/`about.html`/`trainer.html`/`classes.html`/`schedule.html`/
  `blog.html`/`contact.html`). The recreation is a **single-page** build of
  the index page (consistent with every other template in this monorepo);
  nav links become `#` anchors or dead links.
- **Live preview DOM analyzed (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/meditative/` (HTTP 200). Section
  order (1:1, in order):
  1. `nav.ftco-navbar-light` — **navbar**: serif brand "Meditative"
     (`navbar-brand`, EB Garamond) with the nav link row BELOW it — HOME ·
     ABOUT · TRAINER · CLASSES · SCHEDULE · BLOG · CONTACT (uppercase,
     small sans, dot-separated). Transparent at the top of the page;
     `.scrolled` state → white background + soft shadow, active link pink.
     Mobile: hamburger toggler + slide-in panel.
  2. `section.home-slider.js-fullheight.owl-carousel` — **full-height hero
     slider** with 2 slides; each `.slider-item` uses a cover background
     image (`images/bg_1.jpg`, `images/bg_2.jpg` — bright yoga-pose studio
     photos) with a white overlay for legibility. Centered text: **H1 serif
     (~80px, line-height 1.2, accent `#ffb5b5`)** — slide 1 "Discover Your
     Inner Sanctuary", slide 2 "Lighting Your Heart & Mind" — plus **H3
     sans sub-heading** ("Everyday We Bring Hope and Smile to the Patient
     We Serve" / "Your Health is Our Top Priority with Comprehensive,
     Affordable medical.") and a **"View our works" button**
     (`btn btn-white btn-outline-white px-4 py-3 mt-3`). Pink slider dots
     (`#ffb5b5`).
  3. `section.ftco-section.bg-light` — **class types strip**: 4 cards, each
     a **circular image** (`images/classes-6.jpg`, `classes-1.jpg`,
     `classes-7.jpg`, `classes-2.jpg`) + serif H3 title (**Power Yoga** ·
     **Community Class** · **Foundation Yoga** · **Prenatal Yoga**) + a
     "Learn more" link with arrow icon.
  4. `section.ftco-section` — **"Experience of Yoga"**: centered H2. Split
     layout: LEFT column = 4 `.services-2` items (icon circle
     `flaticon-meditation` AFTER the text, text right-aligned), CENTER =
     tall image (`images/services.jpg`), RIGHT column = 4 items (icon
     BEFORE the text, text left-aligned). Items: **Balance Body & Mind ·
     Healthy Daily Life · Improves your flexibility · Protects your spine ·
     Betters your bone health · Increases your blood flow · Keep a practice
     journal · Builds muscle strength** — each H3 + short paragraph ("A
     small river named Duden…" Lorem).
  5. `section.ftco-section` — **"Our Classes"**: centered H2. 6 class cards
     in a 3-column grid (`col-md-4`): full-width image top
     (`classes-1.jpg` … `classes-6.jpg`), centered H3 title, centered
     date/time paragraph "Sept. 30, 2019 - 01:00pm - 03:00pm". Titles:
     **Private & Group Lessons · Yoga for Pregnant · Yoga for Beginners ·
     Yoga Barre · Yoga Core · Yoga Restore**.
  6. `section.ftco-section` — **"Class Time Table"**: centered H2. A 7-day
     table (`table table-bordered text-center`): header row pink
     (`tr.bg-primary` → theme override `#ffb5b5`, white text) with
     **Monday–Sunday**; 5 data rows where each cell is either a grey **✕**
     close icon (`ion-ios-close`) or a **class cell**: circular thumbnail
     (`images/classes-1.jpg` … `classes-7.jpg`) + bold link "Yoga training"
     - "7 am-6 am". Below the table a month-navigation row
       (‹ September … November ›).
  7. `section.ftco-section.testimony-section` — **"Successful Stories"**:
     small H3 "Testimony" + centered H2 "Successful Stories". Carousel of 5
     quote cards (`.testimony-wrap p-4 pb-5`): quote paragraph (Lorem) +
     big quote icon (`icon-quote-left`), round avatar (`person_1.jpg` …
     `person_4.jpg`, `person_2.jpg` reused) + **name** (Gabby Smith · Floyd
     Weather · James Dee · Lance Roger · Kenny Bufer) + position
     "Customer".
  8. `section.ftco-counter.img#section-counter` — **stats band**: cover
     background `images/bg_3.jpg` with a dark `.overlay`; 4 white
     count-up stats (numbers animate from 0 to `data-number`):
     **2560 Happy Customers · 60 Yoga Classes · 50 Years of Experience ·
     100 Yoga Conducted**.
  9. `section.ftco-section.bg-light` — **"Recent Posts"**: centered H2; 3
     blog cards (`.blog-entry`): image top (`image_1.jpg` …
     `image_3.jpg`), meta row (July. 14, 2019 · Admin · chat icon "3
     Comments"), H3 title link (source repeats "Is wellness the new
     luxury" on all 3 — titles may be varied), excerpt paragraph,
     "Read more" link.
  10. `section.ftco-gallery.ftco-section` — **"See the latest photos"**:
      centered H2; 8 photo tiles (4 per row, `gallery-1.jpg` …
      `gallery-8.jpg`) with a hover overlay + Instagram icon (lightbox in
      the source — recreate as hover effect only).
  11. `footer.ftco-footer` — **light footer** (white, `border-top: 1px
solid rgba(0,0,0,0.05)`, `padding: 6em 0`), 4 columns: brand
      "Meditative" + blurb (Lorem) + social icons (facebook · instagram ·
      twitter) · **"Popular Links"** (Yoga for Beginners, Yoga for
      Pregnant, Yoga Barre, Yoga Advance) · **"Quick Links"** (Home,
      About, Classes, Schedule, Contact) · **"Have a Questions?"**
      (map-marker "203 Fake St. Mountain View, San Francisco, California,
      USA" · phone "+2 392 3929 210" · envelope "info@yourdomain.com" +
      message input & white "send message" button). Copyright bar:
      "© <year> All rights reserved | This template is made with ♥ by
      Colorlib".
- **Visual design (TEMPLATES.md screenshot `meditative-free-template.jpg`,
  1200×946, viewed in browser + live render 2026-08-11):** serene,
  mindful, spa-like. Full-width bright yoga-pose photograph hero under a
  white overlay with centered elegant serif headline; soft **salmon/dusty
  pink** accent used for the CTA button, slider dots and interactive
  elements; 4 circular class thumbnails below the hero; a schedule table
  with a pink header row; clean white / light-grey alternating sections; a
  dark photo band for the stats; light footer. Typography: elegant serif
  (EB Garamond) for headings/brand, clean sans (Open Sans) for body/UI.
- **Design tokens extracted from the live CSS (`css/style.css`, verified
  2026-08-11):**
  - **Accent pink `#ffb5b5`** — the signature: `.btn.btn-primary` bg +
    border (white text; hover → transparent bg + pink text), `.bg-primary`
    override (schedule table header), nav active/hover links,
    `.navbar-brand span`, slider heading color + slider dots + underline
    divider, generic `a:hover` color.
  - **Dark ink `#2c396b`** — headings/text accents (testimony position,
    `.heading-section` type details).
  - Body text `#212529` (Bootstrap default) · muted `#6c757d`.
  - Section backgrounds: **white** + **`#f8f9fa`** (`bg-light` sections:
    class types strip, recent posts); footer **white** with
    `rgba(0,0,0,0.05)` top border; stats band = photo + dark overlay.
  - Fonts: **'EB Garamond', serif** (display: navbar brand, headings,
    slider H1, class card titles, testimony quote) + **'Open Sans',
    sans-serif** (body/UI, weights 300/400/600/700). Source loads both via
    cf-fonts @font-face blocks → recreation uses Google Fonts `<link>`s.
  - Buttons: `.btn.btn-primary` (solid pink `#ffb5b5`, white text, 1px pink
    border, Bootstrap radius ~4px, padding px-4 py-3; hover → transparent
    bg + pink text) · `.btn.btn-white` (white bg, black text, 1px white
    border, hover border pink) — hero CTA.
  - Layout: **container max-width 1240px** (theme override), section
    padding `7em 0` (`.ftco-section`), hero full-height (`js-fullheight`).
  - Circles: class-type thumbs (`rounded-circle`), schedule-cell thumbs
    (small round), testimonial avatars (round ~60–80px), `.services-2`
    icon circles.
  - Table: `table-bordered` cells, pink header row, ✕ close icons in empty
    cells.
- **KEY DIFFERENCES vs other wellness/health preps — do NOT copy:** Medico,
  Clinica, Curale (medical/clinic) and Prana/Mudra/Sattva/Shanti/Serenity
  (wellness-adjacent, different layouts/palettes) are NOT this design.
  Zendo is the **yoga-studio variant**: pink `#ffb5b5` accent, EB Garamond
  - Open Sans, full-height hero slider with white-overlay photos, circular
    class thumbnails, pink-header schedule table, "Experience of Yoga"
    icon-split section, dark photo stats band, LIGHT footer.
- **Recreation decisions:** Tailwind re-implementation of the Bootstrap-4
  grid (NO Bootstrap dependency). Multi-page source → single-page index
  (nav links = `#` anchors). owl-carousel sliders (hero 2 slides,
  testimonials 5) → lightweight React carousels with dots/arrows (or a
  documented static stack; keep the hero as a 2-slide rotator with pink
  dots for fidelity). Counter count-up animates on scroll into view
  (IntersectionObserver + rAF; tests assert the final values). The footer
  "Have a Questions?" message input is a form: validate + show a success
  message (documented interactive addition — the original is a static
  demo). Icons from lucide-react (meditation icon → `Flower2`/`Sparkles`
  family, ✕ → `X`, quote → `Quote`, chat → `MessageCircle`; brand socials
  facebook/instagram/twitter as lucide or inline SVGs). Placeholder images
  via `https://picsum.photos/seed/zendo-<n>/<w>/<h>` (2 hero, 4 class
  types, 1 services, 6 classes, 7 schedule thumbs, 5 avatars, 3 blog, 8
  gallery, 1 counter bg — source images must NOT be copied). Fonts EB
  Garamond 400/500/600/700 + Open Sans 300/400/600/700 via Google Fonts
  `<link>` in `index.html`. Brand "Meditative" → "Zendo" everywhere;
  document title "Zendo — Yoga & Meditation Studio Template".

Zendo lives in `apps/zendo` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Navbar with brand and dot-separated link row

The system SHALL render a transparent navbar with a serif brand and an
uppercase dot-separated nav-link row below it, switching to a white
scrolled state and a hamburger slide-in panel on mobile.

#### Scenario: Transparent navbar with brand and links

- **GIVEN** the Zendo page is rendered
- **WHEN** the page loads at the top
- **THEN** a navbar SHALL show the serif brand "Zendo"
- **AND** nav links SHALL read Home, About, Trainer, Classes, Schedule,
  Blog, Contact (uppercase small sans, dot-separated)
- **AND** the navbar SHALL be transparent over the hero
- **AND** the active/home link SHALL use the pink accent `#ffb5b5`

#### Scenario: Scrolled and mobile states

- **GIVEN** the Zendo page is rendered
- **WHEN** the page is scrolled down
- **THEN** the navbar SHALL switch to a white background with a soft shadow
- **AND** active links SHALL stay pink
- **WHEN** the viewport is narrower than ~992px
- **THEN** a hamburger toggle SHALL be shown
- **AND** activating it SHALL open a slide-in panel with the same links

### Requirement: Full-height hero slider

The system SHALL render a full-height hero slider with two slides, each a
cover photo with a white overlay, serif headline, sans sub-heading and a
"View our works" button, with pink slider dots.

#### Scenario: Hero slides with headline stack

- **GIVEN** the Zendo page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL fill the viewport height
- **AND** slide 1 SHALL show the H1 "Discover Your Inner Sanctuary" and the
  H3 "Everyday We Bring Hope and Smile to the Patient We Serve"
- **AND** slide 2 SHALL show the H1 "Lighting Your Heart & Mind" and the H3
  "Your Health is Our Top Priority with Comprehensive, Affordable medical."
- **AND** each slide SHALL use a full-bleed cover background image with a
  white overlay
- **AND** each slide SHALL have a "View our works" outline button (white
  background, dark text, white border, pink hover border)

#### Scenario: Slider controls

- **GIVEN** the hero slider is displayed
- **WHEN** the user advances the slider
- **THEN** the slides SHALL rotate (2 slides, with dots in the pink accent
  `#ffb5b5`)
- **AND** only one slide SHALL be visible at a time

### Requirement: Class types strip

The system SHALL render four class-type cards, each with a circular image,
a serif title and a "Learn more" link.

#### Scenario: Class type cards

- **GIVEN** the Zendo page is rendered
- **WHEN** the class types section (light `#f8f9fa` background) is
  displayed
- **THEN** four cards SHALL appear in a row on desktop (2×2 on tablet,
  stacked on mobile)
- **AND** the cards SHALL read "Power Yoga", "Community Class", "Foundation
  Yoga" and "Prenatal Yoga"
- **AND** each card SHALL contain a circular image, an H3 title and a
  "Learn more" link with an arrow

### Requirement: Experience of Yoga split section

The system SHALL render the "Experience of Yoga" section as a split layout:
four icon items left (text right-aligned), a center image, four icon items
right (text left-aligned).

#### Scenario: Icon benefit items

- **GIVEN** the Zendo page is rendered
- **WHEN** the "Experience of Yoga" section is displayed
- **THEN** a centered H2 "Experience of Yoga" SHALL appear
- **AND** eight icon items SHALL appear with titles: Balance Body & Mind,
  Healthy Daily Life, Improves your flexibility, Protects your spine,
  Betters your bone health, Increases your blood flow, Keep a practice
  journal, Builds muscle strength
- **AND** each item SHALL contain an icon circle, an H3 title and a short
  paragraph
- **AND** the left column's items SHALL be text-right-aligned with the icon
  after the text, the right column's items text-left-aligned with the icon
  before the text
- **AND** a tall image SHALL sit in the center column

### Requirement: Our Classes grid

The system SHALL render six class cards in a three-column grid, each with
an image, a centered title and a date/time line.

#### Scenario: Class cards

- **GIVEN** the Zendo page is rendered
- **WHEN** the "Our Classes" section is displayed
- **THEN** a centered H2 "Our Classes" SHALL appear
- **AND** six cards SHALL appear (3 per row on desktop): Private & Group
  Lessons, Yoga for Pregnant, Yoga for Beginners, Yoga Barre, Yoga Core,
  Yoga Restore
- **AND** each card SHALL contain a full-width image on top, a centered H3
  title and a centered date/time paragraph (e.g. "Sept. 30, 2019 -
  01:00pm - 03:00pm")

### Requirement: Class time table

The system SHALL render a 7-day class timetable with a pink header row,
close icons in empty cells, class entries with circular thumbnails in
filled cells, and a month navigation row.

#### Scenario: Timetable grid

- **GIVEN** the Zendo page is rendered
- **WHEN** the "Class Time Table" section is displayed
- **THEN** a centered H2 "Class Time Table" SHALL appear
- **AND** a bordered table SHALL show columns Monday through Sunday with a
  pink (`#ffb5b5`) header row and white day names
- **AND** empty cells SHALL show a close (✕) icon
- **AND** class cells SHALL show a circular thumbnail, a bold "Yoga
  training" link and a "7 am-6 am" time
- **AND** a month navigation row SHALL appear below the table
  (‹ September … November ›)

### Requirement: Successful Stories testimonials

The system SHALL render a testimonial carousel with five quote cards, each
with a quote, a quote icon, a round avatar, a name and a position.

#### Scenario: Testimonial cards

- **GIVEN** the Zendo page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** a small H3 "Testimony" and a centered H2 "Successful Stories"
  SHALL appear
- **AND** five quote cards SHALL appear (one at a time in a carousel with
  controls), each with a quote paragraph, a large quote icon, a round
  avatar image, a name (Gabby Smith, Floyd Weather, James Dee, Lance
  Roger, Kenny Bufer) and the position "Customer"

### Requirement: Stats band with count-up numbers

The system SHALL render a photo-background stats band with a dark overlay
and four statistics that count up when scrolled into view.

#### Scenario: Counter statistics

- **GIVEN** the Zendo page is rendered
- **WHEN** the stats band is displayed
- **THEN** the band SHALL show a cover background photo with a dark overlay
- **AND** four statistics SHALL appear with labels: 2560 Happy Customers,
  60 Yoga Classes, 50 Years of Experience, 100 Yoga Conducted
- **AND** the numbers SHALL animate from 0 to their target when the band
  scrolls into view

### Requirement: Recent posts cards

The system SHALL render three blog cards, each with an image, a meta row, a
title, an excerpt and a "Read more" link.

#### Scenario: Blog cards

- **GIVEN** the Zendo page is rendered
- **WHEN** the "Recent Posts" section (light `#f8f9fa` background) is
  displayed
- **THEN** a centered H2 "Recent Posts" SHALL appear
- **AND** three blog cards SHALL appear, each with an image on top
- **AND** each card SHALL show a meta row (date "July. 14, 2019" · Admin ·
  chat icon "3 Comments"), an H3 title link, an excerpt paragraph and a
  "Read more" link

### Requirement: Photo gallery

The system SHALL render eight photo tiles with a hover overlay and an
Instagram icon.

#### Scenario: Gallery grid

- **GIVEN** the Zendo page is rendered
- **WHEN** the gallery section is displayed
- **THEN** a centered H2 "See the latest photos" SHALL appear
- **AND** eight photo tiles SHALL appear (4 per row on desktop, responsive
  down to 2/1 columns)
- **AND** hovering a tile SHALL reveal a dark overlay with a centered
  Instagram icon

### Requirement: Light footer with contact widget

The system SHALL render a light footer with brand + social icons, Popular
Links, Quick Links and a "Have a Questions?" contact widget with a
validated message form, plus a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Zendo page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a white background with a light top border
- **AND** a brand column SHALL show "Zendo", a blurb and social icon links
  (facebook, instagram, twitter)
- **AND** a "Popular Links" column SHALL list Yoga for Beginners, Yoga for
  Pregnant, Yoga Barre, Yoga Advance
- **AND** a "Quick Links" column SHALL list Home, About, Classes, Schedule,
  Contact
- **AND** a "Have a Questions?" column SHALL show the address "203 Fake St.
  Mountain View, San Francisco, California, USA", phone "+2 392 3929 210"
  and email "info@yourdomain.com"
- **AND** a message input with a white "send message" button SHALL be
  present

#### Scenario: Message form validation and copyright

- **GIVEN** the footer message form is displayed
- **WHEN** the user submits with an empty message
- **THEN** a validation message SHALL appear and nothing SHALL be sent
- **AND** submitting a non-empty message SHALL show a success confirmation
- **AND** a copyright bar SHALL read "© <year> All rights reserved | This
  template is made with ♥ by Zendo"

### Requirement: Responsive stacking

The system SHALL collapse grids to fewer columns and swap the nav for a
hamburger below the source breakpoints.

#### Scenario: Responsive behavior

- **GIVEN** the Zendo page is rendered on a viewport narrower than ~992px
- **WHEN** the page is displayed
- **THEN** the hero SHALL keep full viewport height with scaled text
- **AND** the 4-card class strip, 3-column class grid, 4-column gallery
  and testimonial cards SHALL stack responsively (2 columns at tablet,
  1 column on phones)
- **AND** the timetable SHALL scroll horizontally rather than break the
  layout
- **AND** the navbar SHALL become a hamburger + slide-in panel

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-zendo`
- [ ] `scripts/verify-app.sh zendo` passes (typecheck + lint + vitest
      100% coverage + build)
- [ ] Sections in order: navbar (brand + dot-separated links, transparent →
      white scrolled) → hero slider (2 slides) → class types (4 circular
      cards) → Experience of Yoga (8 icon items + center image) → Our
      Classes (6 cards) → Class Time Table (7-day table) → Successful
      Stories (5 testimonials) → stats band (4 counters) → Recent Posts
      (3 cards) → gallery (8 tiles) → light footer (4 columns + copyright)
- [ ] Accent pink `#ffb5b5` in `@theme` and used for: primary button bg,
      schedule header row, nav active/hover, slider dots + headline,
      link hovers
- [ ] Dark ink `#2c396b` for heading accents; body `#212529`, muted
      `#6c757d`
- [ ] EB Garamond (headings/brand/slider H1) + Open Sans (body, 300/400/
      600/700) via Google Fonts `<link>`s in `index.html`
- [ ] Container max-width 1240px, section padding ~7em 0 (desktop), hero
      full viewport height
- [ ] Hero: 2 rotating slides, white overlay, serif H1, sans H3, "View our
      works" outline button, pink dots
- [ ] Class types: `#f8f9fa` bg, 4 circular-image cards (Power Yoga /
      Community Class / Foundation Yoga / Prenatal Yoga) + "Learn more"
- [ ] Experience of Yoga: centered H2, 4+4 icon items split around a center
      image (left items text-right, right items text-left)
- [ ] Our Classes: 6 cards (Private & Group Lessons, Yoga for Pregnant,
      Yoga for Beginners, Yoga Barre, Yoga Core, Yoga Restore), image +
      centered title + date line
- [ ] Timetable: pink header (Mon–Sun), ✕ empty cells, circular-thumbnail
      class cells ("Yoga training" / "7 am-6 am"), month nav row
- [ ] Testimonials: 5 quotes (names Gabby Smith … Kenny Bufer, position
      "Customer"), quote icon, round avatars, carousel controls
- [ ] Stats band: cover photo + dark overlay, 4 count-up stats (2560 / 60 /
      50 / 100) animating on scroll into view
- [ ] Recent posts: `#f8f9fa` bg, 3 cards (image, meta July. 14, 2019 ·
      Admin · 3 Comments, title, excerpt, "Read more")
- [ ] Gallery: 8 tiles, hover overlay + Instagram icon
- [ ] Footer: white + top border, brand + socials, Popular Links, Quick
      Links, Have a Questions? (address/phone/email + validated message
      form with success state), copyright bar with ♥ by Zendo
- [ ] Mobile: hamburger slide-in nav <992px, grids stack, timetable
      horizontally scrollable
- [ ] Placeholder images via `picsum.photos/seed/zendo-<n>/<w>/<h>`, icons
      from lucide-react, no copied assets
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status`
      done by implementer at ship time (all three dup rows updated)
