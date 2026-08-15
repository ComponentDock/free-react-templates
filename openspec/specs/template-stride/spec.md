# Template: Stride (Fitness / Gym Landing Page)

## Purpose

Stride is a dark-hero fitness & gym landing page template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Stamina" website template design
(source: https://colorlib.com/wp/template/stamina/), built under a DIFFERENT
name (**Stride** — a fitness word meaning a confident step; echoes the
source's "Every Step Counts" parallax line) per the monorepo naming mandate,
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **stride** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`stamina`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

Stride lives in `apps/stride` and uses shared components from `packages/ui`
(`cn` at minimum). Footer MUST link https://www.componentdock.com/
("Component Dock") — no ColorLib strings in app code (provenance lives only
in this spec, TEMPLATES.md, and the PR).

## Design reference (replication findings)

- **Original:** ColorLib "Stamina" — a Bootstrap 4 fitness/gym one-pager in
  the "Bootstrap (216)" category. Stack: Bootstrap 4.3.1 + jQuery +
  owl.carousel 2.3.4 (`css/owl.carousel.min.css` + `owl.theme.default.min.css`)
  - AOS (`css/aos.css`) + Stellar parallax (`data-stellar-background-ratio`)
  - jquery.mb.YTPlayer (hero YouTube background video, `#bgndVideo`,
    video `w-cRWOjlk8c`, `containment: '#home-section'`, autoplay, muted,
    `startAt: 255`, `stopAt: 271`) + fancybox (loaded, unused in the DOM) +
    jQuery UI + bootstrap-datepicker (loaded, unused) + **flaticon** icon font
    (`fonts/flaticon/font/flaticon.css`, icomoon-based) + **Muli** Google Font
    (300/400/700/900). The demo's body copy is Lorem Ipsum throughout.
- **Preview URL analyzed:**
  `https://preview.colorlib.com/theme/stamina/` — HTTP 200, 72,691 bytes,
  `<title>Stamina — Website Template by Colorlib</title>`. Standard path
  works (no `/theme/bootstrap/` prefix needed for this one).
- **Page order (1:1, confirmed from the live DOM — 13 sections):**
  1. **Navbar** `.site-navbar` (inside `.sticky-wrapper`, `position:
absolute`, `width: 100%`, `z-index: 1999`, `container-fluid` with
     `padding-left/right: 7rem`): `.site-logo` "Stamina**.**" (uppercase,
     1.3rem, weight 900, white; the dot `<span>` is brand red `#f23a2e`) +
     nav `.site-menu` links **Home, Classes, Schedule, Trainer, Services,
     Contact** (white, `padding: 5px 20px`; `.active` link red `#f23a2e`;
     active item gets a 2px white underline) + mobile hamburger
     (`.site-menu-toggle`). On scroll (`.sticky-wrapper.is-sticky`) the
     navbar turns WHITE with black logo/links (computed `rgb(255,255,255)`
     bg, logo/link `#000`).
  2. **Hero** `.intro-section` `#home-section`: `100vh` (min 900px) YouTube
     video background + `rgba(0,0,0,.5)` overlay (`.intro-section:after`),
     content centered (`col-lg-12 mx-auto text-center`, AOS fade-up): h1
     **"We Believe Little Things Matter"** (4rem, weight 900, white; 2rem
     below 992px), lead paragraph (white, 1.4rem, max-width 700px), and a
     **"GET STARTED"** button `btn btn-outline-white py-3 px-5` (transparent,
     white 2px border, white text; hover → white bg, black text).
  3. **Hours bar** `.schedule-wrap` (right after the hero, overlapping the
     next section; `background: #f23a2e` red, `padding: 40px`,
     `max-width: 700px`, `z-index: 9`, white text, slanted edge via
     `:before { transform: skew(-12deg) }`; live computed transform also
     translates it up ~70px over the boundary): `d-md-flex
align-items-center` → `.hours` block with `<strong>Hours</strong>` +
     "Opening: 7:30am — Closing: 9:00pm", then `.cta ml-auto` →
     **"CONTACT US"** link (gold `#f89d13` bg, white text, `padding: 10px
20px`, arrow glyph).
  4. **Services carousel** (white section): centered section-heading
     (`col-md-8`): subheading **"Stay Healthy"** (`#ababab`, 1.2rem), h2
     **"Get A Perfect Body"** (`#000`, 2.5rem, weight 900), intro para; then
     `owl-carousel nonloop-block-14 block-14` (nav arrows hidden, dots only:
     10px circles `#ccc`, active `#f23a2e`) of **6 slides** `.slide` →
     `.ftco-feature-1` cards (white, centered, `padding-top: 30px`; flaticon
     glyph 70px in brand red; text block `padding: 30px`; h2 20px bold;
     para `#989898`; hover/active soft shadow `0 0 20px -5px
rgba(0,0,0,.1)`):
     Be Fit (`flaticon-fit`), Join Club (`flaticon-gym-1`), Gym Fitness
     (`flaticon-gym`), Eat Vegie (`flaticon-vegetables`), Fruit Juices
     (`flaticon-fruit-juice`), Body Warmup (`flaticon-stationary-bike`).
  5. **Parallax band** `.bgimg` `bg_2.jpg` (height 500px, cover,
     `rgba(0,0,0,.4)` overlay `:before`, `data-stellar-background-ratio="0.5"`):
     centered `col-md-7`: h2 **"Get The Result You Want"** (3rem, bold,
     white; 2rem mobile), lead (white), **"Get Started"** white UNDERLINED
     link (`.bgimg a { color:#fff; text-decoration: underline }`).
  6. **Classes** `.site-section` `#classes-section` (white): subheading
     **"Fitness Class"**, h2 **"Classes"**, intro; then ONE row of **two
     `col-lg-6` columns, 5 horizontal class cards each** (10 cards total).
     Card `.class-item d-flex align-items-center` (white, `border-radius:
4px`, `box-shadow: 0 5px 20px 0 rgba(0,0,0,.1)`, `overflow: hidden`,
     `margin-bottom: 30px`): `.class-item-thumbnail` (flex `0 0 120px`; img
     max-width 100px, radius 4px) + `.class-item-text`: h2 18px title link
     (`#000`) + meta spans (`#aeaeae`, 16px): "By Justin Daniel",
     "30 minutes". **Hover (VERIFIED in CSS):** the whole card
     `transform: scale(1.2)`, `background: #f23a2e`, title `#fff`, spans
     `#ff7c67` — the scale is a source artifact; replicate the red hover
     treatment but keep the scale subtle/1.0–1.05 (note in PR).
  7. **Parallax band** `.bgimg` `bg_3.jpg`: h2 **"Every Step Counts"** +
     lead + "Get Started".
  8. **Schedule** `.site-section` `#schedule-section` (white): subheading
     **"Fitness Sched"**, h2 **"Schedule"**, intro; day tabs `.nav.days`
     (7 `<li>` each `width: 14.25%`, centered; `<a>` `background: #eee`,
     `padding: 10px`, block; hover/active `background: #f23a2e`, white):
     **S M T W T F S**; 7 `.tab-pane` panes (one per day), each containing
     a `.row` of **two `col-lg-6` columns with 5 class-items per column**
     (same card style as Classes) where the FIRST span is the day/time
     (e.g. "Sunday 7:30am - 9:00am") followed by title + "By Justin
     Daniel" + "30 minutes" (all 10 items of a day share the same time slot
     in the demo — source quirk, keep it).
  9. **Parallax band** `.bgimg` `bg_1.jpg`: h2 **"Your Fitness Partner
     Where Ever You Are"** + lead + "Get Started".
  10. **Trainers** `.site-section` `#trainer-section` (white): subheading
      **"Trainer"**, h2 **"Our Trainers"**, intro; 4 `.person` cards
      (`col-lg-3 col-md-6 text-center`): `img.img-fluid` max-width 100px,
      **`border-radius: 50%`**, `margin-bottom: 30px`; h3 18px bold name;
      `p.position` "Trainer" (`#ccc`, 13px, bold, uppercase); blurb 15px.
      Names: Justin Daniel + Matthew Davidson (×3 — source repeats the same
      name; paraphrase to distinct trainer names).
  11. **Services grid** `.site-section` `#services-section` (white):
      subheading **"Fitness Services"**, h2 **"Services"**, intro; STATIC
      grid of the same 6 `.ftco-feature-1` cards (`col-lg-4 col-md-6` →
      3×2) with the same 6 titles/icons as the carousel.
  12. **Contact** `.site-section.bg-light.contact-wrap` `#contact-section`
      (bg `#f8f9fa` = Bootstrap bg-light, `padding-bottom: 8rem`): subheading
      **"Get In Touch"**, h2 **"Contact Us"**, intro; `<form>` with
      **First name, Last name, Subject, Email** text inputs + a
      **textarea** + submit `btn btn-primary py-3 px-5 btn-block`
      **"Send Message"** (red). After the form sits `.schedule-wrap2`
      (absolute, `right: 0`, `translateY(-50%)`, red `#f23a2e`, `padding:
40px`, `width: 50%` on desktop / 90% mobile, skewed edge): `Hours` +
      "Opening: 7:30am — Closing: 9:00pm" + gold "CONTACT US" CTA.
  13. **Footer** `.footer-section` (**LIGHT — verified live**: transparent
      bg on the white page; `padding: 7em 0` + `padding-top: 12rem !important`
      so it overlaps the contact section; h3 headings are `text-dark`
      `#343a40` — Bootstrap 4's `.text-dark !important` overrides the
      template's own `color: #fff` rule, verified via computed styles and
      cssRules inspection): row of `col-md-4` **"About Stamina"** (h3
      uppercase 0.9rem letter-spacing .1rem weight 900 + blurb), `col-md-3
ml-auto` **"Links"** (Home, Classes, Schedule, Trainer), `col-md-4`
      **"Subscribe"** (blurb + inline form: email input + gold/red
      `btn btn-primary rounded-0` "Subscribe"); bottom `col-md-12`
      copyright: "© All rights reserved | This template is made with by
      Colorlib" (recreate as "© 2026 Stride. All rights reserved." + a
      Component Dock credit line linking https://www.componentdock.com/).
- **Screenshot** (`stamina-free-template.jpg`, 1200×946, viewed in browser):
  dark, moody fitness aesthetic — full-width darkened photo of a dumbbell
  rack as the hero, white "We Believe Little Things Matter" headline and
  GET STARTED button, "STAMINA." logo top-left with nav; at the bottom a
  vibrant red bar with a slanted edge ("Hours / Opening: 7:30am — Closing:
  9:00pm") and a darker-gold CONTACT US button with an arrow. High-contrast
  triad: near-black, white, red/orange.
- **Live page vs static HTML quirk:** the live page renders TWO red hours
  boxes (the hero-adjacent `.schedule-wrap` and the absolute `.schedule-wrap2`
  at the contact section) — both verified in the DOM and both captured
  above; replicate both.
- **Carousel behavior:** the services carousel shows 3 cards per view and
  pages with dots (6 slides). Classes/schedule cards are static (no
  carousel — the "80 class-item" count in the static HTML is the 10 cards
  × substring matches of `class-item-text`/`class-item-thumbnail`; the
  classes section has NO owl-carousel class).

## Design tokens (from `css/style.css`, `css/bootstrap.min.css`)

- **Brand red:** `#f23a2e` — hours bars (`.schedule-wrap`/`.schedule-wrap2`
  bg), nav `.active` link color, logo dot, service icon color, owl dot
  active, day-tab active/hover bg, `.class-item:hover` bg, `btn-primary`
  (hover) bg, `::selection` is black (not red). Put in `@theme` and use via
  Tailwind classes.
- **Brand gold:** `#f89d13` — the "CONTACT US" CTA background inside the red
  hours bars (white text, `padding: 10px 20px`).
- **Hover-soft red:** `#ff7c67` — class-card hover meta spans.
- **Neutrals:** headings `#000`; body text `#989898` (weight 300, 1.1rem,
  line-height 1.7); card meta spans `#aeaeae`; subheadings `#ababab`;
  trainer role `#ccc`; day-tab idle bg `#eee`; card shadow
  `0 5px 20px 0 rgba(0,0,0,.1)`; feature hover shadow
  `0 0 20px -5px rgba(0,0,0,.1)`; hero overlay `rgba(0,0,0,.5)`;
  parallax overlay `rgba(0,0,0,.4)`; contact section bg `#f8f9fa`;
  footer text-dark `#343a40`.
- **Font:** **Muli** via Google Fonts `<link>` in index.html (300, 400, 700, 900) — no font files copied. Headings `font-family: "Muli", ...` color
  `#000`; body Muli weight 300.
- **Type scale:** hero h1 4rem/900 (2rem mobile); section h2 2.5rem/900;
  parallax h2 3rem bold (2rem mobile); card h2 18px; feature h2 20px bold;
  footer h3 0.9rem uppercase letter-spacing .1rem weight 900; subheading
  1.2rem; lead 1.4rem.
- **Buttons:** `.btn` — `text-transform: uppercase`, 12px, weight 900,
  `border-width: 2px`, no focus shadow. Outline-white: transparent/white
  border+text → hover white bg black text. Primary: red. Uppercase labels
  ("GET STARTED", "CONTACT US", "SEND MESSAGE", "SUBSCRIBE").
- **Cards/radius:** class card radius 4px + shadow; thumbnail img radius
  4px; person img `border-radius: 50%`; feature cards white centered with
  30px paddings; day-tab `a` padding 10px block.
- **Layout rhythm:** sections `.site-section` (standard white); section
  heading block `col-md-8` centered (`row justify-content-center
text-center mb-5`); parallax bands 500px; hero 100vh/min 900px; class
  cards `margin-bottom: 30px`; schedule pane rows of 2×5.

## Requirements

### Requirement: Navbar

The system SHALL render a fixed/absolute navbar over the hero with the
brand logo and six section links; white over the hero, inverting to a
white bar with black text after scrolling (sticky state).

#### Scenario: Brand logo

- **GIVEN** the Stride page is rendered
- **WHEN** the navbar is displayed
- **THEN** the logo SHALL read "Stride" in uppercase, weight 900, with the
  final letter's dot styled in brand red `#f23a2e` ("Stride**.**")

#### Scenario: Nav links

- **GIVEN** the Stride page is rendered
- **WHEN** the navbar is displayed
- **THEN** the six links SHALL be Home, Classes, Schedule, Trainer,
  Services, Contact in that order
- **AND** the links SHALL be white (weight 400) while over the hero
- **AND** the active link SHALL be brand red `#f23a2e`

#### Scenario: Sticky state

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar sticks to the top
- **THEN** the navbar background SHALL be white
- **AND** the logo and links SHALL be black

#### Scenario: Mobile menu

- **GIVEN** a viewport < 992px
- **WHEN** the hamburger toggle is tapped
- **THEN** a slide-in mobile menu SHALL reveal the same six links
- **AND** each link SHALL navigate to its section

### Requirement: Hero

The system SHALL render a full-viewport dark hero with a centered headline,
lead, and outline CTA, matching the source's video-overlay look via a dark
image + `rgba(0,0,0,.5)` overlay (no video assets — deviation noted in PR).

#### Scenario: Hero layout

- **GIVEN** the Stride page is rendered
- **WHEN** the hero is displayed
- **THEN** the hero SHALL occupy the full viewport height (min 900px)
- **AND** a dark overlay SHALL sit over the background image
- **AND** the content SHALL be centered horizontally and vertically

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the content is read
- **THEN** an H1 SHALL read "We Believe Little Things Matter" (4rem, weight
  900, white; 2rem below 992px)
- **AND** a lead paragraph SHALL sit below it (white, 1.4rem, max-width
  ~700px)
- **AND** a "GET STARTED" button SHALL sit below the lead (uppercase,
  transparent, white 2px border, white text; hover → white bg, black text)

### Requirement: Hours bar

The system SHALL render a brand-red skewed box overlapping the hero's bottom
edge with opening hours and a gold contact CTA.

#### Scenario: Hours bar content

- **GIVEN** the hero is displayed
- **WHEN** the hours bar is rendered
- **THEN** it SHALL have a red `#f23a2e` background and a slanted edge
- **AND** it SHALL show "Hours" (bold) with "Opening: 7:30am — Closing:
  9:00pm" in white
- **AND** a "CONTACT US" link SHALL sit on the right with a gold `#f89d13`
  background and an arrow glyph

### Requirement: Services carousel

The system SHALL render the "Stay Healthy / Get A Perfect Body" section
with an owl-style dots-only carousel of six white feature cards with brand
red icons.

#### Scenario: Section heading

- **GIVEN** the services carousel section is rendered
- **WHEN** the section heading is displayed
- **THEN** the subheading SHALL read "Stay Healthy" (`#ababab`, 1.2rem)
- **AND** the H2 SHALL read "Get A Perfect Body" (2.5rem, weight 900,
  `#000`)
- **AND** an intro paragraph SHALL sit below

#### Scenario: Feature cards

- **GIVEN** the carousel is rendered
- **WHEN** the cards are displayed
- **THEN** six feature cards SHALL exist in this order: Be Fit, Join Club,
  Gym Fitness, Eat Vegie, Fruit Juices, Body Warmup
- **AND** each card SHALL show a brand-red icon above a bold 20px title and
  a `#989898` blurb
- **AND** each card SHALL be white, centered, with 30px internal padding

#### Scenario: Carousel paging

- **GIVEN** the carousel is rendered
- **WHEN** the user pages through it
- **THEN** ~3 cards SHALL be visible per view
- **AND** dot pagination SHALL indicate the active slide (dots `#ccc`,
  active `#f23a2e`)

### Requirement: Parallax bands

The system SHALL render three 500px-tall image bands with dark overlays,
each with a white headline, lead, and an underlined "Get Started" link.

#### Scenario: Band content

- **GIVEN** the page is rendered
- **WHEN** the three bands are displayed in order
- **THEN** the first SHALL read "Get The Result You Want"
- **AND** the second SHALL read "Every Step Counts"
- **AND** the third SHALL read "Your Fitness Partner Where Ever You Are"
- **AND** each band SHALL show a white bold 3rem headline, a white lead,
  and a white underlined "Get Started" link on a `rgba(0,0,0,.4)` overlay

### Requirement: Classes

The system SHALL render a "Fitness Class / Classes" section with two
columns of five horizontal white class cards (thumbnail + title + meta),
matching the source's hover treatment.

#### Scenario: Class grid

- **GIVEN** the Classes section is rendered
- **WHEN** the cards are displayed
- **THEN** ten class cards SHALL render in two columns of five
- **AND** each card SHALL be a horizontal flex row: rounded thumbnail image
  (~120px) on the left, text on the right
- **AND** each card SHALL contain a bold 18px title link, a "By <trainer
  name>" span, and a "<duration> minutes" span (spans `#aeaeae`)

#### Scenario: Card hover

- **GIVEN** a class card is rendered
- **WHEN** the user hovers it
- **THEN** the card background SHALL turn brand red `#f23a2e`
- **AND** the title SHALL turn white and the meta spans `#ff7c67`
- **AND** the transform SHALL stay subtle (source scales 1.2 — an artifact;
  use ≤1.05, note in PR)

### Requirement: Schedule

The system SHALL render a "Fitness Sched / Schedule" section with seven
day tabs and per-day class lists.

#### Scenario: Day tabs

- **GIVEN** the Schedule section is rendered
- **WHEN** the tabs are displayed
- **THEN** seven day tabs SHALL read S, M, T, W, T, F, S in order
- **AND** idle tabs SHALL have `#eee` backgrounds
- **AND** the active tab SHALL have a red `#f23a2e` background with white
  text

#### Scenario: Day panes

- **GIVEN** a day tab is active
- **WHEN** its pane is displayed
- **THEN** the pane SHALL show ten class cards in two columns of five
- **AND** each card SHALL lead with the day/time span (e.g. "Sunday
  7:30am - 9:00am"), then the class title, trainer, and duration
- **AND** switching tabs SHALL swap the pane without reloading

### Requirement: Trainers

The system SHALL render a "Trainer / Our Trainers" section with four
circular-avatar trainer cards.

#### Scenario: Trainer cards

- **GIVEN** the Trainers section is rendered
- **WHEN** the cards are displayed
- **THEN** four cards SHALL render in a row (stacking on small screens),
  each centered
- **AND** each card SHALL show a circular photo (`border-radius: 50%`,
  ~100px), a bold 18px name, an uppercase 13px "Trainer" role label
  (`#ccc`), and a short blurb
- **AND** the names SHALL be distinct (source repeats "Matthew Davidson"
  three times — paraphrase to different trainer names)

### Requirement: Services grid

The system SHALL render a "Fitness Services / Services" section with a
static 3×2 grid of the same six feature cards.

#### Scenario: Services grid layout

- **GIVEN** the Services section is rendered
- **WHEN** the grid is displayed
- **THEN** the subheading SHALL read "Fitness Services" and the H2
  "Services"
- **AND** the six feature cards (Be Fit, Join Club, Gym Fitness, Eat Vegie,
  Fruit Juices, Body Warmup) SHALL render in a 3-column grid (2 rows)
- **AND** the cards SHALL match the carousel cards' tokens (red icon, bold
  20px title, `#989898` blurb, white bg)

### Requirement: Contact

The system SHALL render a light-grey "Get In Touch / Contact Us" section
with a four-field + message form, a red submit button, and the second
absolute red hours box.

#### Scenario: Contact form

- **GIVEN** the Contact section is rendered
- **WHEN** the form is displayed
- **THEN** the form SHALL contain First name, Last name, Subject, and Email
  text inputs plus a message textarea
- **AND** a full-width "Send Message" submit button SHALL be red `#f23a2e`
  (uppercase, 12px, weight 900)

#### Scenario: Contact hours box

- **GIVEN** the Contact section is rendered
- **WHEN** the page is laid out
- **THEN** a second red hours box SHALL be present with "Hours" / "Opening:
  7:30am — Closing: 9:00pm" and the gold "CONTACT US" CTA
- **AND** it SHALL be positioned absolutely at the section's right edge,
  overlapping the footer boundary

### Requirement: Footer

The system SHALL render a LIGHT footer (verified live — the source's
`color:#fff` heading rule is overridden by Bootstrap's `.text-dark
!important`; computed headings are `#343a40` on a white page) with three
columns and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the Stride page is rendered
- **WHEN** the footer is displayed
- **THEN** column 1 SHALL be "About Stride" (uppercase 0.9rem letterspaced
  heading, weight 900, dark `#343a40`) with a blurb
- **AND** column 2 SHALL be "Links" with Home, Classes, Schedule, Trainer
- **AND** column 3 SHALL be "Subscribe" with a blurb, an email input, and a
  "Subscribe" button

#### Scenario: Footer credit

- **GIVEN** the footer is rendered
- **WHEN** the bottom bar is displayed
- **THEN** a copyright line SHALL read "© 2026 Stride. All rights reserved."
- **AND** a credit line SHALL link to https://www.componentdock.com/
  ("Component Dock") — never ColorLib (provenance only in spec/TEMPLATES/PR)

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-stride`.
- [ ] Section order matches the source 1:1 (navbar → hero → hours bar →
      services carousel → band 1 → classes → band 2 → schedule → band 3 →
      trainers → services grid → contact → footer).
- [ ] Brand tokens in `@theme`: `#f23a2e` (red), `#f89d13` (gold),
      `#ff7c67` (hover meta), neutrals `#989898`/`#aeaeae`/`#ababab`,
      `#f8f9fa` contact bg, overlays `rgba(0,0,0,.5)` / `.4`.
- [ ] Muli Google Font loaded via `<link>` in index.html (no font files).
- [ ] Icons from lucide-react (probe exports with
      `node -e "console.log(typeof require('lucide-react').<Name>)"` before
      use — e.g. Dumbbell, Users, HeartPulse, Salad, CupSoda, Bike for the
      six features; inline SVG for any brand glyphs).
- [ ] Placeholder images via `https://picsum.photos/seed/stride-<n>/<w>/<h>`
      (dark gym-ish seed for the hero — subject-screen the seed per the
      seed-screening method).
- [ ] Both red hours boxes rendered (hero-adjacent + absolute contact one).
- [ ] `npm run verify:app -- stride` passes (typecheck + lint + knip +
      fallow + 100% coverage + build).
- [ ] PR description: source slug `stamina`, preview URL, design tokens,
      deviations (video → static image, scale(1.2) artifact → subtle hover,
      distinct trainer names, light footer verified live, Component Dock
      footer link).
