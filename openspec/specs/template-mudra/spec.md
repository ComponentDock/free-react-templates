# Template: Mudra (Bootstrap / Yoga Studio)

## Purpose

Mudra is a single-page yoga-studio website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Yogalax"
website template (source: https://colorlib.com/wp/template/yogalax/), built
under a DIFFERENT name (Mudra — a symbolic hand gesture in yoga practice,
yoga-branded) per the monorepo naming mandate (never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light, airy yoga landing page: a full-viewport hero (photo
with a soft pink gradient wash on the left, rotating typewriter headline, "15
Day Free Trial" pill CTA), a "Why You Should Go To Yoga" intro split over a
photo with a 5-item benefit checklist, a 4-card services row with circular
flaticon icons, a 6-card "Yoga Classes" program grid whose image cards reveal
white text on a pink wash on hover, a 3-card membership pricing table, a
5-slide testimonial carousel, a dark photo counter band with animated stats
(5000 Happy Customers, 4560 Yoga Workshops, 570 Years of Experience, 900
Lesson Conducted), a 3-card blog row with pink day numbers, a 4-image gallery
with hover instagram badges, and a pink footer with logo, address, and social
icons. Mudra recreates that structure 1:1 with matching layout, colors,
typography, and content types (no ColorLib assets copied).

> NAMING NOTE: the ColorLib source name "Yogalax" / slug `yogalax` is FORBIDDEN
> as the app name. **Mudra** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-09). Source slug + preview URL are recorded
> below. ("Namaste" was rejected as a candidate — it is itself a ColorLib
> template name in TEMPLATES.md.)

## Design reference (replication findings)

- **Original:** ColorLib "Yogalax" — yoga studio / wellness website template.
  Category in TEMPLATES.md: **Beauty (28)**. Three checklist rows are
  `- [ ] **Yogalax**` duplicates — lines **236** (Beauty), **1737** and
  **1893** — all point to https://colorlib.com/wp/template/yogalax/. The
  recreation brands itself **Mudra** but keeps the same section structure and
  copy kinds.
- **Live preview DOM analyzed (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/yogalax/` is LIVE — HTTP 200, 36,934
  bytes, title "Yogalax - Free Bootstrap 4 Template by Colorlib". Structure
  extracted from the rendered DOM + HTML source + `css/style.css` (69,864
  bytes) + Bootstrap 4 vendor CSS. The TEMPLATES.md screenshot
  (`yogalax-free-template.jpg`, 1200×946, browser-verified 2026-08-09)
  confirms the visual design below.
- **Visual design (live render + screenshot — match 1:1):** minimalist,
  serene, modern. Palette: white + light `#f8f9fa` section backgrounds + near-
  black text + **mauve/pink `#d291bc`** as the single brand accent (the most
  frequent color in style.css, 59 occurrences) + light-blue `#78d5ef` primary
  buttons with dark text. Hero = light yoga photograph (woman meditating in
  lotus pose) with a 45° `#d291bc → transparent` gradient overlay on the left
  68% at opacity .3; headline black, ultra-thin (weight 200), 80px; pill CTA.
  Typography is Work Sans throughout with very light weights (200/300) —
  airy, elegant. Cards are white with soft shadows; the footer is solid pink
  `#d291bc` with white text. The aesthetic is calm whitespace, thin type,
  rounded icon circles.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light#ftco-navbar` — transparent, absolute, top 10px, z-index 3): brand `<a.navbar-brand>` `<span.flaticon-lotus>` (pink `#d291bc`, 28px) + "Yogalax" (black, desktop) left; right-aligned links Home (active), Classes, Schedule, About, Blog, Contact — 14px, weight 300, black, padding 20px horizontal; active link `#d291bc`. Toggler = "Menu" text + icon (uppercase, letter-spacing .1em). Scroll (`.scrolled`): navbar becomes fixed, white bg, `0 0 10px 0 rgba(0,0,0,.1)` shadow. Mobile (≤991px): solid black bar (`background:#000`), brand white, links `rgba(255,255,255,.7)` → white on hover.
  2. **Hero** (`section.hero-wrap.js-fullheight`, `background-image: url(images/bg_2.jpg)`, `div.overlay`): overlay = 45° linear-gradient `#d291bc 0% → rgba(255,255,255,0) 100%`, width 68% (100% ≤991px), opacity .3. Content column (`.slider-text`, `col-md-8`, left-aligned, white text color): `<h1.typewrite>` rotating typewriter headline — data-type `["Inspiration For Joyful Living.", "Effective Therapy Against Stress.", "Flexibility is A Second Power."]`, period 4000ms, 80px, weight 200, black, with a blinking caret (`border-right: 1px solid rgba(0,0,0,.1)` on `.wrap`); `<h2.mb-5>` "Do Yoga today for a better tomorrow" (weight 200); `<a.btn.btn-primary.p-3.px-4>` "15 Day Free Trial" — pill (border-radius 30px), border `1px solid rgba(255,255,255,.4)`; hover/focus: bg `#fff`, text `#000`.
  3. **Intro — "Why You Should Go To Yoga"** (`section.ftco-section.ftco-intro`, `background-image: url(images/intro.jpg)` cover, top center; photo fills the section, text sits on the right half): `div.row.justify-content-end > div.col-md-6`: `div.heading-section` h2 "Why You Should Go To Yoga" (60px, weight 300, black), lorem paragraph ("Far far away, behind the word mountains…"), `ul.mt-5.do-list` of 5 benefit links (24px, weight 300, 15px gap) each with an `ion-ios-checkmark-circle` icon (22px, `#d291bc`): "Yoga boosts brain power", "Yoga helps you to breathe better", "Yoga improves your strength", "Yoga helps you to focus", "Yoga helps give meaning to your day".
  4. **Services** (`section.ftco-section.ftco-section-services.bg-light` — `#f8f9fa`): 4 cards (`col-md-3`, `div.services`): circular icon box (100×100px, radius 50%, bg `#f7ebf3`) with flaticon glyph (44px, `#d291bc`) + `div.text.mt-4`: h3 (20px, weight 500) + lorem paragraph. Cards: **Healthy Lifestyle** (flaticon-like), **Body & Mind Balance** (flaticon-lotus), **Meditation Practice** (flaticon-meditation), **Edeology** (flaticon-lotus-; source typo → fix to "Ideology").
  5. **Yoga Classes** (`section.ftco-section` — white): centered heading `div.heading-section.text-center`: `h3.subheading` "Yoga Classes" (16px, `#b3b3b3`, uppercase, letter-spacing 3px, weight 300) + `h2.mb-1` "Choose Your Level & Focus" (60px, weight 300); `div.row.no-gutters` of 6 cards (`col-md-6.col-lg-4`, `div.package-program`, overflow hidden): `<a.img>` 400px-tall cover photo (program-1..6.jpg) with centered `div.text.p-5.text-center` — h3 title (30px, weight 500) + lorem `p`, hidden by default (opacity 0, color `rgba(255,255,255,.8)`); on hover a full-cover `:after` pink wash (`#d291bc`, opacity .5) fades in and the text fades to opacity 1. Titles: **Group Lessons**, **Yoga For Beginners**, **Yoga For Pregnant**, **Yoga For Couples**, **Bikram Yoga**, **Yoga Barre**.
  6. **Pricing** (`section.ftco-section.bg-light`): centered heading `h3.subheading` "Pricing Tables" + `h2` "Membership Cards"; 3 cards (`col-md-4`, `div.block-7` — white, padding 30px, shadow `0px 24px 48px -13px rgba(0,0,0,.05)`, hover deepens to .11): `h2.heading` card name (14px, uppercase, weight 500), `span.price` `$` (sup, 24px, `#d291bc`) + `span.number` (60px, weight 500, `#d291bc`), `span.excerpt.d-block` ("For 1 Year" / "For 1 Month" / "For 1 Week", `#999999`), `h3.heading-2.my-4` "Enjoy All The Features" (14px, uppercase, letter-spacing 1px, weight 600), `ul.pricing-text.mb-5` (4 items), `a.btn.btn-primary.d-block.px-2.py-4` "Get Started" (absolute bottom, width 60%, margin auto; hover/focus: bg `#d291bc`, text `#fff`). Cards: **Year Card** $449 (Onetime Access To All Club, Group Trainer, Book A Group Class, Fitness Orientation), **Monthly Card** $200 (Group Classes, Discuss Fitness Goals, Group Trainer, Fitness Orientation), **Weekly Card** $85 (Group Classes, Discuss Fitness Goals, Group Trainer, Fitness Orientation).
  7. **Testimony** (`section.ftco-section.testimony-section` — white page bg): centered heading `h3.subheading` "Testimony" + `h2.mb-1` "Successful Stories"; `div.carousel-testimony.owl-carousel` of 5 slides (`div.item > div.testimony-wrap.p-4.pb-5` — bg `rgba(255,255,255,.1)`, text `rgba(0,0,0,.8)`): `div.line.pl-5` (left border 1px `#e6e6e6`): quote `p.mb-4.pb-1` (lorem), `span.quote` — 40×40px circle, bg `#d291bc`, white `icon-quote-left`, absolutely positioned at `left:-20px`, `top:50%`; author row (`div.d-flex.align-items-center`): `div.user-img` 110×110px round avatar (person_1..5.jpg) + `div.ml-4`: `p.name` (18px, weight 500, black) + `span.position` (13px, "Customer"). People: **Gabby Smith**, **Floyd Weather**, **James Dee**, **Lance Roger**, **Kenny Bufer** — all "Customer". Owl carousel: 1 slide per view, centered dots, prev/next arrows (`.owl-nav` absolute, top 50%, full width).
  8. **Counter** (`section.ftco-counter.ftco-bg-dark.img#section-counter`, `background-image: url(images/bg_3.jpg)`, `data-stellar-background-ratio="0.5"`): base color `#090808`; `div.overlay` = same 45° `#d291bc → transparent` gradient, opacity **.8**; 4 stats (`col-md-6.col-lg-3`, `div.block-18.text-center`): `strong.number` (50px, weight 500, white, animated count-up from 0) + `span` label (14px, `rgba(255,255,255,.7)`). Values (`data-number`): **5000** Happy Customers · **4560** Yoga Workshops · **570** Years of Experience · **900** Lesson Conducted. (Source renders each number + label only; the CSS `.icon` 80px circles with `#d291bc` border are unused in this markup — skip them.)
  9. **Blog** (`section.ftco-section.bg-light`): centered heading `h3.subheading` "Blog" + `h2.mb-1` "Recent Posts"; 3 cards (`col-md-4`, `div.blog-entry`): `<a.block-20>` cover image (image_1..3.jpg) + `div.text.p-4.float-right.d-block` (white, `margin-top:-40px` overlapping the image): date block (`div.d-flex`): `div.one` `span.day` (58px, weight 300, `#d291bc`) + `div.two` `span.yr` (2018) + `span.mos` (December) stacked (both `#b3b3b3`, display block); `h3.heading.mt-2` link "Young Women Doing Yoga"; lorem paragraph. Dates: **31** / **27** / **25** December 2018.
  10. **Gallery** (`section.ftco-gallery.ftco-section` — padding 0): centered heading `h3.subheading` "Gallery" + `h2.mb-1` "See the latest photos"; 4 tiles (`col-md-3`, `a.gallery.image-popup.img` — 270px tall cover photo, gallery-1..4.jpg, Magnific Popup lightbox): centered `div.icon.mb-4` 60×60px circle bg `#d291bc` with white `icon-instagram` glyph — hidden (opacity 0) until hover/focus (opacity 1, 0.6s transition).
  11. **Footer** (`footer.ftco-footer.ftco-section.img` — bg `#d291bc`, padding 4em 0, 16px): row 1: `div.col-lg-3` `h1.logo` "Mudra" (30px, weight 300, white); `div.col-lg` `h2.location` "203 Fake St. Mountain View, San Francisco, California, USA" (24px, `rgba(255,255,255,.9)`); `div.col-lg-3` `ul.ftco-footer-social` — 3 circular icons (50×50px, radius 50%, bg `rgba(255,255,255,.05)`, glyph 26px white): twitter, facebook, instagram. Row 2 (centered): copyright bar `p` (`rgba(255,255,255,.7)`): "Copyright © `<year>` All rights reserved | This template is made with [heart] by Colorlib" — replace with "© Mudra. All rights reserved." (drop the Colorlib credit line; keep the layout).
- **JS behaviors (original, `js/main.js` + vendor):** jQuery typewriter (`h1.typewrite`, data-period 4000ms, 3 rotating phrases), Bootstrap 4 navbar collapse (mobile toggler "Menu"), `scroll` handler toggling `.scrolled` (white fixed navbar + shadow), jQuery Owl Carousel 2 (`carousel-testimony` testimonials), jQuery counter animation (`data-number` count-up, triggered on scroll via waypoints), stellar.js parallax on the counter background, Magnific Popup (`image-popup` gallery lightbox), AOS scroll animations (`data-aos` on cards/sections). Recreate in React: a small dependency-free typewriter hook, a state-driven testimonial carousel (one slide at a time, dot indicators, prev/next), a count-up hook fired by IntersectionObserver, a scroll listener for the navbar `.scrolled` state, CSS hover overlays (no JS), and optional light fade-up entrance animations.

## Design tokens (from `css/style.css`, verified 2026-08-09)

- **Fonts:** "Work Sans" for EVERYTHING (body: `font-family: "Work Sans", …sans-serif`, 1rem, weight 400, line-height 1.5, color `#212529`; `h1–h4` inherit the family, `color:#000`, `font-weight:400`, line-height 1.4). Light weights carry the design: hero h1 **200** (80px), hero h2 **200**, nav links/heading h2/do-list/blog day **300**, section headings h2 **300** at 60px, card titles **500**, pricing card name **500**, counter number **500**, heading-2 **600**. Recreate with a Google Fonts `<link>` in `index.html`: `https://fonts.googleapis.com/css2?family=Work+Sans:wght@200;300;400;500;600;700&display=swap`.
- **Brand colors:**
  - `#d291bc` — brand mauve/pink (59 uses): logo icon + active nav link, services icon glyphs, services icon circle bg partner `#f7ebf3`, do-list checkmark icons, pricing `$` sup + number, blog day numbers, testimonial quote circle, gallery hover icon circle, counter overlay gradient + (unused) icon border, `package-program` hover wash, `block-7` Get Started hover bg, footer background.
  - `#78d5ef` — `btn-primary` background (hover `#56caeb`); button text `#212529` (dark). Hero CTA is a pill (radius 30px) with `1px solid rgba(255,255,255,.4)` border; hover → `#fff` bg, `#000` text.
  - `#000` — all headings, hero typewriter headline, desktop nav links/brand, testimonial names, `#090808` counter section base.
  - `#fff` — white section text, footer logo/location/icons/copyright (as rgba), counter numbers, card backgrounds (pricing `block-7`, blog text card, navbar `.scrolled` bg).
  - `#f8f9fa` — `bg-light` section backgrounds (services, pricing, blog).
  - `#f7ebf3` — services circular icon background.
  - `#b3b3b3` — `subheading` text, blog year/month; `#999999` — pricing excerpt.
  - `#e6e6e6` — testimonial `line` left border.
  - rgba: hero overlay gradient (opacity .3, width 68%), counter overlay gradient (opacity .8), footer text `rgba(255,255,255,.7/.9)`, mobile nav links `rgba(255,255,255,.7)`, pricing shadow `rgba(0,0,0,.05→.11)`.
- **Radii:** 50% (services icons 100px, quote 40px, gallery icon 60px, footer social 50px, testimonial avatars 110px); hero CTA pill 30px; default buttons 0.25rem; everything else square.
- **Spacing/geometry:** sections `padding: 7em 0` (footer 4em 0, gallery 0); hero full-viewport (`js-fullheight` = 100vh); hero h1 80px/weight 200; section h2 60px/weight 300; package-program cards 400px tall; gallery tiles 270px; blog text card `margin-top:-40px` over its image; do-list items 24px/15px gap; pricing cards padding 30px, Get Started button absolute bottom width 60%; counter number 50px; price number 60px; blog day 58px; footer logo 30px/location 24px.
- **Responsive:** ≤991px — navbar becomes a solid black bar (`background:#000`, relative, brand white, links `rgba(255,255,255,.7)`), hero overlay widens to 100%. Grids: services 4-up lg → stacked (col-md-3); classes 3-up lg → 2-up md → stacked (col-md-6 col-lg-4); pricing 3-up md → stacked; counter 4-up lg → 2-up md → stacked; blog 3-up md → stacked; gallery 4-up md → stacked. Footer columns stack.
- **Placeholder images (never copy ColorLib assets):** hero → `https://picsum.photos/seed/mudra-hero/1920/1080` (source `bg_2.jpg`); intro → `https://picsum.photos/seed/mudra-intro/1600/1000` (`intro.jpg`); program cards → `picsum.photos/seed/mudra-p1/800/1000` … `mudra-p6` (`program-1..6.jpg`); testimonials → `picsum.photos/seed/mudra-t1/200/200` … `mudra-t5` (`person_1..5.jpg`); counter bg → `picsum.photos/seed/mudra-counter/1920/600` (`bg_3.jpg`); blog → `picsum.photos/seed/mudra-b1/800/600` … `mudra-b3` (`image_1..3.jpg`); gallery → `picsum.photos/seed/mudra-g1/800/600` … `mudra-g4` (`gallery-1..4.jpg`).
- **Icon mapping (source → lucide-react, verified 2026-08-09):** flaticon-lotus (logo) → `Flower2` (28px, `#d291bc`) · flaticon-like (Healthy Lifestyle) → `Heart` · flaticon-lotus (Body & Mind Balance) → `Flower2` · flaticon-meditation (Meditation Practice) → `Sparkles` · flaticon-lotus- (Ideology) → `Leaf` (44px glyphs in `#f7ebf3` circles, `#d291bc` color) · ion-ios-checkmark-circle (do-list) → `CircleCheck` (22px, `#d291bc`) · oi-menu (toggler) → `Menu` · icon-quote-left (testimony) → `Quote` (white) · icon-heart (copyright) → `Heart`. **BRAND ICONS WERE REMOVED FROM lucide-react** — `Instagram`/`Facebook`/`Twitter`/`Linkedin` are all `undefined` (verified in this repo's lucide-react); gallery hover badge + footer social icons must be inline SVG brand glyphs (simple-icons paths), 26px white.

## Requirements

### Requirement: Transparent navbar with scrolled state

The system SHALL render a transparent navbar overlaying the hero with the brand, top-level links, a mobile toggle, and a white fixed state on scroll.

#### Scenario: Desktop navbar

- **GIVEN** the Mudra page is rendered on a desktop viewport
- **WHEN** the navbar is displayed at the top of the page
- **THEN** the navbar SHALL be transparent (absolute, top 10px, no background bar) with the brand "Mudra" on the left — a `Flower2` lotus icon in brand pink `#d291bc` (28px) plus black text
- **AND** the links "Home" (active), "Classes", "Schedule", "About", "Blog", "Contact" SHALL be right-aligned, 14px, weight 300, black, with 20px horizontal padding
- **AND** the active link SHALL be brand pink `#d291bc`

#### Scenario: Scrolled navbar

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar transitions to the scrolled state
- **THEN** the navbar SHALL become fixed to the top with a white background and shadow `0 0 10px 0 rgba(0,0,0,.1)`

#### Scenario: Mobile navbar

- **GIVEN** the Mudra page is rendered on a viewport ≤991px
- **WHEN** the navbar is displayed
- **THEN** the navbar SHALL be a solid black bar with the brand in white and a "Menu" toggle (uppercase, letter-spacing .1em)
- **AND** tapping the toggle SHALL expand/collapse the links (`rgba(255,255,255,.7)`, white on hover)

### Requirement: Full-viewport hero with typewriter headline

The system SHALL render a full-viewport hero with a background photo, a pink gradient wash, a rotating typewriter headline, a sub-headline, and a pill CTA.

#### Scenario: Hero layout and content

- **GIVEN** the Mudra page is rendered
- **WHEN** the hero section is displayed
- **THEN** the hero SHALL be 100vh tall with a cover photograph and a left-side 45° gradient overlay (`#d291bc → transparent`, width 68%, opacity .3; 100% width on ≤991px)
- **AND** a typewriter headline SHALL cycle through the phrases "Inspiration For Joyful Living.", "Effective Therapy Against Stress.", "Flexibility is A Second Power." — 80px, weight 200, black, with a blinking caret
- **AND** the sub-headline SHALL read "Do Yoga today for a better tomorrow" (weight 200) below the typewriter
- **AND** a pill-shaped "15 Day Free Trial" button (radius 30px, background `#78d5ef`, dark text `#212529`, border `rgba(255,255,255,.4)`) SHALL sit below; on hover/focus it SHALL become white with black text

#### Scenario: Typewriter rotation

- **GIVEN** the hero is displayed
- **WHEN** the typewriter completes a phrase
- **THEN** it SHALL delete and type the next phrase in the cycle, wrapping after the third (source period 4000ms)

### Requirement: Intro split with benefit checklist

The system SHALL render the "Why You Should Go To Yoga" section: a full-bleed photo with the text on the right half, heading, intro copy, and a 5-item checklist.

#### Scenario: Intro content

- **GIVEN** the Mudra page is rendered
- **WHEN** the intro section is displayed
- **THEN** the section SHALL be a full-bleed cover photo (`mudra-intro`) with the content in a right-aligned half-width column
- **AND** the heading SHALL read "Why You Should Go To Yoga" (60px, weight 300, black)
- **AND** a lorem-style paragraph SHALL follow
- **AND** a checklist SHALL list exactly: "Yoga boosts brain power", "Yoga helps you to breathe better", "Yoga improves your strength", "Yoga helps you to focus", "Yoga helps give meaning to your day" — each 24px, weight 300, with a `CircleCheck` icon in brand pink `#d291bc` (22px)

### Requirement: Services row

The system SHALL render the four services cards with circular icons on a light background.

#### Scenario: Service cards

- **GIVEN** the Mudra page is rendered
- **WHEN** the services section is displayed
- **THEN** the section SHALL have a light `#f8f9fa` background and show four cards in a 4-up row on desktop (stacked on small screens)
- **AND** each card SHALL show a 100×100px circle (background `#f7ebf3`) containing a 44px brand-pink icon, a 20px weight-500 title, and a lorem paragraph
- **AND** the four cards SHALL be titled "Healthy Lifestyle" (Heart), "Body & Mind Balance" (Flower2), "Meditation Practice" (Sparkles), "Ideology" (Leaf — fix the source typo "Edeology")

### Requirement: Yoga Classes grid

The system SHALL render the "Choose Your Level & Focus" program grid: six image cards that reveal pink-washed text on hover.

#### Scenario: Section heading

- **GIVEN** the Mudra page is rendered
- **WHEN** the classes section heading is displayed
- **THEN** the centered heading SHALL show the eyebrow "YOGA CLASSES" (16px, `#b3b3b3`, uppercase, letter-spacing 3px, weight 300) above "Choose Your Level & Focus" (60px, weight 300, black)

#### Scenario: Program cards

- **GIVEN** the classes section is displayed
- **WHEN** the cards render
- **THEN** six cards SHALL be shown in a 3-up row on desktop (2-up on ≤991px, stacked ≤767px), each a 400px-tall cover photo with a centered overlay block
- **AND** each card SHALL be titled "Group Lessons", "Yoga For Beginners", "Yoga For Pregnant", "Yoga For Couples", "Bikram Yoga" or "Yoga Barre" (30px, weight 500, white) with a lorem paragraph, hidden by default (opacity 0)
- **AND** on hover/focus the card SHALL fade in a full-cover pink `#d291bc` wash at opacity .5 and reveal the white text (opacity 1)

### Requirement: Membership pricing

The system SHALL render the "Membership Cards" pricing table: three white cards with a pink price, feature list, and a bottom-aligned CTA.

#### Scenario: Pricing cards

- **GIVEN** the Mudra page is rendered
- **WHEN** the pricing section is displayed
- **THEN** the section SHALL have a light `#f8f9fa` background with the centered eyebrow "PRICING TABLES" above "Membership Cards"
- **AND** three cards SHALL be shown in a 3-up row on desktop (stacked on small screens), each white with padding 30px and a soft shadow `0px 24px 48px -13px rgba(0,0,0,.05)` (deepening to .11 on hover)
- **AND** each card SHALL show an uppercase card name (14px, weight 500), a price of `$` + number (60px, weight 500, brand pink `#d291bc`) with a duration line ("For 1 Year" / "For 1 Month" / "For 1 Week", `#999999`), the line "Enjoy All The Features" (14px, uppercase, letter-spacing 1px, weight 600), a 4-item feature list, and a full-width "Get Started" button pinned to the bottom (width 60%, centered)
- **AND** the cards SHALL be: "Year Card" $449 (Onetime Access To All Club, Group Trainer, Book A Group Class, Fitness Orientation); "Monthly Card" $200 (Group Classes, Discuss Fitness Goals, Group Trainer, Fitness Orientation); "Weekly Card" $85 (Group Classes, Discuss Fitness Goals, Group Trainer, Fitness Orientation)
- **AND** the "Get Started" buttons SHALL be `#78d5ef` with dark text, turning brand pink `#d291bc` with white text on hover/focus

### Requirement: Testimonial carousel

The system SHALL render the "Successful Stories" carousel with five testimonials, one slide at a time, dot indicators, and prev/next controls.

#### Scenario: Carousel behavior and slides

- **GIVEN** the Mudra page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** the centered heading SHALL show the eyebrow "TESTIMONY" above "Successful Stories"
- **AND** five slides SHALL exist, each showing: a lorem quote with a left `#e6e6e6` border line and a 40px brand-pink circle with a white `Quote` icon floating at its left edge, a 110×110px round avatar, the customer name (Gabby Smith, Floyd Weather, James Dee, Lance Roger, Kenny Bufer — 18px, weight 500, black), and the position "Customer" (13px)
- **AND** exactly one slide SHALL be visible at a time with centered dot indicators to switch slides
- **AND** prev/next arrows SHALL navigate the carousel (wrapping)

### Requirement: Stats counter band

The system SHALL render the dark photo counter band with four animated count-up statistics.

#### Scenario: Counter stats

- **GIVEN** the Mudra page is rendered
- **WHEN** the counter section is displayed
- **THEN** the section SHALL show a dark cover photo (`mudra-counter`, base `#090808`) under a 45° brand-pink gradient overlay (opacity .8)
- **AND** four stats SHALL be shown in a 4-up row on desktop (2-up ≤991px, stacked ≤767px), each a white 50px weight-500 number that counts up from 0 when scrolled into view, with a 14px label at `rgba(255,255,255,.7)` beneath
- **AND** the stats SHALL read: 5000 Happy Customers · 4560 Yoga Workshops · 570 Years of Experience · 900 Lesson Conducted

### Requirement: Blog grid

The system SHALL render the "Recent Posts" blog grid with three cards whose white text blocks overlap their cover images.

#### Scenario: Blog cards

- **GIVEN** the Mudra page is rendered
- **WHEN** the blog section is displayed
- **THEN** the section SHALL have a light `#f8f9fa` background with the centered eyebrow "BLOG" above "Recent Posts"
- **AND** three cards SHALL be shown in a 3-up row on desktop (stacked on small screens), each with a cover image and a white text block overlapping the image bottom by 40px
- **AND** each text block SHALL show a date block — day (58px, weight 300, brand pink `#d291bc`), year (2018) and month (December) stacked in gray `#b3b3b3` — the title "Young Women Doing Yoga" (weight 500, black, linked), and a lorem paragraph
- **AND** the three day numbers SHALL be 31, 27 and 25

### Requirement: Gallery grid

The system SHALL render the "See the latest photos" gallery: four image tiles that reveal a pink instagram badge on hover.

#### Scenario: Gallery tiles

- **GIVEN** the Mudra page is rendered
- **WHEN** the gallery section is displayed
- **THEN** the centered heading SHALL show the eyebrow "GALLERY" above "See the latest photos"
- **AND** four tiles SHALL be shown in a 4-up row on desktop (stacked on small screens), each a 270px-tall cover photo (lightbox link)
- **AND** on hover/focus each tile SHALL reveal a centered 60×60px brand-pink circle with a white instagram glyph (opacity 0 → 1, 0.6s transition)

### Requirement: Pink footer

The system SHALL render the brand-pink footer with the logo, studio address, social icons, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Mudra page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL have a brand-pink `#d291bc` background (padding 4em 0) with three columns: the "Mudra" logo (30px, weight 300, white), the address "203 Fake St. Mountain View, San Francisco, California, USA" (24px, `rgba(255,255,255,.9)`), and three 50px circular social buttons (background `rgba(255,255,255,.05)`) with white inline-SVG glyphs for Twitter, Facebook and Instagram
- **AND** the bottom bar SHALL read "© Mudra. All rights reserved." (drop the Colorlib credit line)

### Requirement: Responsive behavior

The system SHALL adapt the layout across breakpoints: collapsing grids, the black mobile navbar, and the widening hero overlay.

#### Scenario: Mobile layout (≤991px)

- **GIVEN** the Mudra page is rendered on a viewport ≤991px
- **WHEN** the page is displayed
- **THEN** the navbar SHALL be a solid black bar with a "Menu" toggle
- **AND** the hero overlay SHALL cover the full width (100%)
- **AND** the classes grid SHALL be 2-up and the services, pricing, counter, blog and gallery grids SHALL collapse appropriately (2-up/1-up), stacking to one column on ≤767px

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-mudra`
- [ ] `scripts/verify-app.sh mudra` passes (typecheck + lint + vitest 100% coverage + build)
- [ ] Sections in order (1:1 with source): transparent navbar (black links, pink active) → full-viewport hero (typewriter h1 + "Do Yoga today for a better tomorrow" + pill "15 Day Free Trial") → Why You Should Go To Yoga intro (photo + right text + 5 checkmarks) → Services (4 circular-icon cards, bg-light) → Yoga Classes (6 hover-reveal image cards) → Pricing Tables (3 membership cards, bg-light) → Testimony (5-slide carousel) → Counter band (4 animated stats) → Blog (3 cards, bg-light) → Gallery (4 tiles) → pink footer (logo + address + social + copyright)
- [ ] Brand colors in `@theme`, used via Tailwind classes: `#d291bc` (brand pink: icons, price, day numbers, quote circle, overlays, footer, hover washes), `#78d5ef`/`#56caeb` (buttons), `#212529` body text, `#f8f9fa` section bgs, `#f7ebf3` icon circles, `#090808` counter base, `#b3b3b3`/`#999999` secondary text, `#e6e6e6` quote line
- [ ] Font: Work Sans 200–700 via Google Fonts `<link>` in `index.html`, title "Mudra — Yoga Studio Template"; hero h1 80px weight 200; section h2 60px weight 300
- [ ] Hero CTA pill (radius 30px) `#78d5ef`/dark text, white-on-hover; hero overlay 45° `#d291bc` gradient at 68% width / opacity .3 (100% mobile)
- [ ] Typewriter hook cycles the 3 source phrases with a caret; counter stats count up on scroll (IntersectionObserver)
- [ ] Testimonial carousel: one slide visible, dots + prev/next, wraps; navbar `.scrolled` white fixed state on scroll; mobile black navbar with "Menu" toggle
- [ ] Placeholder images = seeded picsum (`mudra-hero`, `mudra-intro`, `mudra-p1..6`, `mudra-t1..5`, `mudra-counter`, `mudra-b1..3`, `mudra-g1..4`); icons from lucide-react (`Flower2`, `Heart`, `Sparkles`, `Leaf`, `CircleCheck`, `Menu`, `Quote`) + inline-SVG brand glyphs for Twitter/Facebook/Instagram — no copied assets
- [ ] Source typo fixed: "Edeology" → "Ideology"; copyright line rebranded "© Mudra. All rights reserved." (drop the Colorlib credit line)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done by implementer at ship time (mark ALL three "Yogalax" rows — lines 236, 1737 and 1893 — Beauty category and both other categories)
