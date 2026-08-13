# Template: Kinesis (CrossFit / Fitness Gym Template)

## Purpose

Kinesis is a single-page crossfit / fitness-gym website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Dazko" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Dazko" — crossfit workout training center website
  (Bootstrap 5 + tiny-slider + glightbox + AOS; page title reads "Dazko -
  Free Bootstrap 5 Template by Colorlib").
  (source: https://colorlib.com/wp/template/dazko/).
- **Preview URL analyzed:** https://preview.colorlib.com/theme/dazko/
  (HTTP 200, ~97 KB HTML fetched + `css/style.css` ~88 KB parsed; live DOM
  structure extracted from the HTML, screenshot reviewed).
- **Screenshot analyzed:** `dazko-free-template.jpg` (1200×946, AVIF,
  downloaded + viewed in browser): dark full-viewport hero with a fit woman
  lifting a barbell (black sports bra, red shorts) under a dark overlay;
  left-aligned white uppercase italic headline "INCREASE YOUR MUSCLE
  POWER" with grey subtext and a red "BOOK A TOUR NOW" button; dark navbar
  with white links and a red "Book a Member" CTA; below the hero a white
  two-column about section (image left, text right) with a small red
  eyebrow "INFORMATION ABOUT" and headline "DAZKO A CROSSFIT WORKOUT
  TRAINING CENTER". Overall aesthetic: high-contrast energetic crossfit
  brand — red/dark/white with a supporting blue accent in stripes and
  hover states.
- **Section order (1:1, from the DOM of the home page):**
  1. Top strip (`div.top-wrap`, absolute, top 10px, full width, over the
     hero; row pushed right): "Free Call" (12px, "Free Call" label in red
     `#e1193e` 13px 600, phone "+1 234 456 78910" white 13px 600) +
     `ul.ftco-social` of 3 social tiles (Twitter / Facebook / Instagram,
     24px squares, red skewed tab `:after` skew(-25deg), hover → blue
     `#1425af`).
  2. Navbar (`nav.navbar.ftco-navbar-light`): `position: absolute; top:
40px; z-index: 3`, transparent on desktop (mobile: relative, top 0,
     background `#030513`). Brand link "Dazko Crossfit & Fitness"
     (`navbar-brand`, white). `ul.navbar-nav ml-auto`: HOME (active) /
     ABOUT / TRAINERS / CLASSES / SCHEDULES / NEWS / CONTACT — 12px,
     weight 700, uppercase, letter-spacing 2px, white, padding 1rem 18px;
     active `#e1193e` with `span:before` scaleX 0→1 underline. CTA
     `a.btn-custom` "Become A Member" (`#`): 12px 700 uppercase white on
     red `#e1193e`, padding 14px 15px, red skewed tab `:after`
     (skew(-25deg), 40px wide, left -12px).
  3. Hero slider (`section.slider-hero`, height 100vh, tiny-slider):
     THREE slides; each `div.item` has a full-viewport bg image
     (`bg_1.jpg` / `bg_2.jpg` / `bg_3.jpg`, `background-position: top
center`) with `:after` overlay `#030513` opacity .7, and centered
     text: `span` "Crossfit" (12px, uppercase, letter-spacing 1px, weight 500) + `h2` 60px (40px mobile), weight 700, uppercase, ITALIC, white,
     line-height 1.1 + `p` (rgba(255,255,255,.8)) "A small river named
     Duden flows by their place and supplies it with the necessary
     regelialia." + `a.btn.btn-primary` "Take A Tour Now". Slider nav:
     `div.tns-nav` VERTICAL bar dots on the right edge (top 50%, right
     30px): 20px × 2px bars, margin 15px 0 15px auto, white .8; active
     `#e1193e`, 30px wide. Slide headlines: "Shape Your Perfect Body" /
     "Increase Your Muscle Power" / "You Only Fail, When You Stop
     Trying".
  4. About (`section.ftco-section.ftco-about-section.ftco-no-pt
.ftco-no-pb`): `div.heading-section` — eyebrow `span.subheading`
     "Information About Us" (13px, 700, uppercase, `#e1193e`, mb 5px) +
     `h2` 34px (28px mobile), weight 800, uppercase, Open Sans (span
     inside colored red). Paragraph ("Far far away, behind the word
     mountains..."). Image (`images/about.png`). List of THREE items with
     icons: **Men Fitness and Workout** · **Women Fitness and Workout** ·
     **Personal Trainings**.
  5. Counter band (`section.ftco-section.ftco-counter-section`):
     `div.counter-section` background = blue DIAGONAL STRIPE pattern
     (`linear-gradient(105deg, #1425af 25%, #1d2cb5 25%, #1d2cb5 50%,
#1425af 50%, ...)`, background-size 41.41px 154.55px) with a red
     skewed tab `:after` (skew(-15deg), 70px wide, left -25px, hidden on
     mobile). FOUR `div.counter-wrap` (centered, padding 40px 20px):
     icon circle (70px, bg rgba(255,255,255,0.05), icon rgba(255,255,255,
     .3) 40px) + number 50px 600 white (animated count-up) + label 14px
     uppercase weight 500 white: **Years of experienced** · **Fitness
     Trainers** · **Best Equipments** · **Satisfied Clients** (source
     shows "0 +", "0 +", "0 +", "0 k+").
  6. CTA band (same `ftco-section` as free-fitness intro): eyebrow "Join
     Us Now" + h2 "Join Us Our Free Workout Training With Dazko" (+ red
     button).
  7. Free fitness features (three `div.media` cards, each with a colored
     SVG icon `images/svg/001-fitness.svg` / `002-treadmill.svg` /
     `003-vip-card.svg` + h3 + blurb): **Free Fitness Training** · **Tons
     of Cardio & Strength** · **No Commentment Memberships** (source typo
     — recreate as "No Commitment Memberships").
  8. Classes (`section.ftco-section.ftco-no-pt.ftco-no-pb`): eyebrow "Our
     Classes" + h2 "Dazko Workout Classes"; SIX `div.classes-wrap` cards
     (350px tall image, overflow hidden): `span.price` badge $100 —
     absolute top 40px right -100px, hidden (opacity 0), slides in on
     hover: red `#e1193e` bg, 20px weight 800 italic white, padding 7px
     20px, blue `#1425af` skewed tab `:after` (skew(-20deg), 20px wide,
     left -10px); title `h2` 26px weight 900 italic uppercase RED text on
     a `#030513` band (padding 10px 30px, right skewed tab `:after`
     skew(20deg) 40px wide). Hover: title band bg → red, text white.
     Classes: **Body Building** · **Weight Lifting** · **Cardio** ·
     **Martial Arts** · **Yoga** · **Cycling**. Below: `a.btn-custom`
     "View All Classes" (13px 700 uppercase letter-spacing 3px red).
  9. Pricing (`section.ftco-section`): eyebrow "Our Pricing" + h2 "Pricing
     & Packages"; THREE `div.block-7` plan cards (white card, hover shadow
     `0 24px 48px -13px rgba(0,0,0,0.11)`): plan name `p.excerpt` 14px
     uppercase letter-spacing 1px weight 700 `#030513`; price `div.price`
     — `sup` "$" 24px gray + `span.number` 50px weight 600 `#e1193e`;
     `ul.pricing-text` features with red check icons (`span.fa` `#e1193e`,
     li padding 10px 30px): Personal Trainer / Convienient Time /
     Special Class / Group Traning / Free Fitness Traning (source typos —
     recreate as "Convenient Time", "Group Training", "Free Fitness
     Training"); `a.btn.btn-primary` "Get Started". Plans: **Basic $49** ·
     **Beginner $79** · **Premium $109**.
  10. Video band (`section.img.v-section.ftco-section`): overlay =
      blue DIAGONAL STRIPE pattern (123deg, `#1425af`/`#1d2cb5`, height
      500px, background-size 357.71px 550.82px); centered content: `a`
      60px circular play button (border 1px rgba(255,255,255,0.4), white
      play icon 30px, `@keyframes pulse` red expanding ring
      rgba(225,25,62,0.4)); eyebrow "Watch Our Stories" (white variant) +
      h2 "Members Success Stories" (white); `div.vid-img` video thumbnail
      (400px tall, radius 4px, bg image, play circle + text overlay);
      TWO success quotes (`h3`): "From 264 lbs to 154 lbs, A Great
      transformation in my life." · "I'm Sheryl Johnson Proved that 50
      Really Is the New 30".
  11. Schedules (`section.ftco-section.ftco-no-pt`): eyebrow "Schedules" +
      h2 "Fitness Schedules"; `table.table` — `thead.thead-primary` bg
      `#1425af` (th white, 14px, padding 30px, no border); columns: Time +
      Monday..Sunday; FIVE rows: 8am-9am / 10am-11am / 1pm-2am (source
      typo — recreate as "1pm-2pm") / 3pm-5pm / 7pm-9pm; time cell
      `th.scope` red `#e1193e` bg, white text; body cells white 14px,
      padding 30px, `border-bottom: 2px solid #f8f9fd`, odd columns
      (Mon/Wed/Fri/Sun) `#f4f6fc` zebra; class names: Body Building,
      Weight Lifting, Cardio, Yoga, Aerobics, Cycling, Stretching (some
      cells empty).
  12. Trainers (`section.ftco-section.ftco-no-pt.ftco-no-pb.ftco-trainer`):
      eyebrow "Trainer" + h2 "Fitness Trainer"; FOUR `div.trainer-wrap`
      cards (photo + name plate `div.text`: blue `#1425af` bg, padding
      15px 20px, dashed white 1px inner border, blue skewed tab `:before`
      skew(-15deg) 50px wide; hidden (opacity 0) on desktop → reveals on
      hover (translateY(-50%), right-aligned, top 50%); on mobile always
      visible bottom-left, width 70%); name `h3` 20px uppercase +
      role + socials. Names: **Aron Mighty** · **Alicia Brown** · **Anne
      Henderson** · **Bruce Grapler**. (Section sits over a black
      bottom-fade overlay gradient to transparent.)
  13. Testimonials (`section.ftco-section.testimony-section.bg-light`,
      bg `#f0f4f7`): eyebrow "Testimonial" + h2 "Happy People"; carousel
      of quote cards: blockquote ("Far far away, behind the word
      mountains..."), name 22px 700 uppercase italic Roboto Condensed
      `#011f39` + position 13px uppercase ("Marketing Manager"); source
      renders TWO identical slides ("Roger Scott · Marketing Manager") —
      recreate as a small carousel with 2-3 distinct people.
  14. Blog (`section.ftco-section`): eyebrow "Our Blog" + h2 "Recent
      Blog"; FOUR blog cards (image + meta "Dec. 20, 2020 3 Comments" +
      `h3` title "Really Good Workout, Can Feel it Working" + excerpt +
      read-more link; source repeats the same title/copy on all cards —
      recreate 3-4 cards with the same kind of content).
  15. BMI calculator (`section.ftco-section.img.ftco-no-pb`, bg image):
      eyebrow "Get Your Body Max Index" + h2 "What is Your BMI";
      `div.ftco-search` — pill tabs (`ul.nav-pills`, 14px 700 white,
      padding 10px 30px, radius 5px: "Standard" bg `#e1193e` active vs
      "Metric" bg `#1425af` active, hover red) + `div.tab-content` panel
      bg `#0a113f`, padding 50px, shadow `0 10px 33px -27px rgba(0,0,0,
0.4)`; form: labels "Your Height" / "Your Weight" (700 16px white
      uppercase italic Roboto Condensed, mb 10px) + inputs + submit
      button. (Two unit variants = two forms.)
  16. Footer (`footer.ftco-footer`, bg `#030513`, color
      rgba(255,255,255,0.7), padding 7em 0 0):
      - col: brand "Dazko Crossfit & Fitness" + blurb + `ul.ftco-footer-
social` (40px red circles, white 18px icons, hover red text).
      - col "Explore": About Us · Trainers Team · Awesome Classes ·
        Pricing Packages · Latest News (links rgba(255,255,255,.7), hover
        `#e1193e`).
      - col "Our Contacts" (`div.block-23`): address "203 Fake St.
        Mountain View, San Francisco, California, USA" · phone "+2 392
        3929 210" · email "info@yourdomain.com" — red icons `#e1193e`,
        15px.
      - Bottom bar `div.bg-darken` (black): copyright line → Component
        Dock credit (repo rule, NOT ColorLib).
      - Widget `h2`: 20px weight 700 Open Sans white, margin-bottom 40px.
- **Design tokens extracted from the preview CSS (`css/style.css`):**
  - Primary brand **red `#e1193e`** (66 uses): `.btn-primary` bg, nav CTA,
    active nav link + underline, `.subheading` eyebrows, class price
    badges + title text, pricing numbers + check icons, counter red tab,
    schedule time column, footer link hover + contact icons + social
    circles, top-strip "Free Call" label, slider active nav bar.
  - Secondary **blue `#1425af`** (29 uses) + **`#1d2cb5`** (24 uses):
    btn-primary hover bg, diagonal stripe patterns (counter band 105deg,
    v-section 123deg), schedule table thead, trainer name plates,
    social/price/CTA skewed tabs, BMI "Metric" active pill. Deep navy
    panel **`#0a113f`** (BMI tab panel).
  - Dark **`#030513`** (10 uses): footer bg, hero + class-title overlays,
    class title bands, mobile navbar bg. Heading color **`#011f39`**
    (testimony names, default h color).
  - Neutrals: body text gray (Bootstrap gray), 16px / line-height 1.8
    (Open Sans); light sections `#f0f4f7` (`.bg-light` override) +
    `#f4f6fc` (table zebra); white cards; `#f8f9fd` table row borders.
  - Fonts: body **"Open Sans"** (16px, 1.8, gray); headings h1–h6
    **"Roboto Condensed"** (color `#011f39`); `.heading-section` h2 34px
    weight 800 uppercase Open Sans; `.subheading` eyebrow 13px 700
    uppercase `#e1193e`; hero h2 60px 700 italic uppercase; nav links
    12px 700 uppercase letter-spacing 2px; footer widget h2 Open Sans
    20px 700; `.btn-custom` 13px 700 letter-spacing 3px red; schedule
    cells 14px; block-23 15px. (Google Fonts via `<link>` in
    `index.html`.)
  - Buttons `.btn`: padding 9px 12px, **border-radius 0**, 12px weight
    600, uppercase, letter-spacing 1px, shadow `0 24px 36px -11px
rgba(0,0,0,0.09)`; `.btn-primary` red `#e1193e` (white text, `span`
    icon 16px), hover → blue `#1425af`; nav `.btn-custom` red with
    skewed tab; `.btn-custom` text link 13px 700 ls 3px `#e1193e`.
  - Signature shapes: SKEWED TABS everywhere (nav CTA -25deg, top-strip
    socials -25deg, class price badge tab -20deg, class title band +20deg,
    counter red tab -15deg, trainer plate -15deg); diagonal blue stripe
    gradients (counter + video band); 60px circular play button with red
    pulse ring animation (`rgba(225,25,62,0.4)`); slider nav = vertical
    20×2px bars on the right edge (active red, 30px).
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/kinesis-<n>/<w>/<h>`; screen hero/class/trainer
  seeds with the seed-screening method for gym/crowd subjects — verified
  picsum IDs for people/events: 1027, 64, 823, 996, 453); icons →
  lucide-react (Menu, Play, Phone, Mail, MapPin, Check, ArrowRight,
  Quote, Dumbbell, HeartPulse, CreditCard, Clock, Users, CalendarDays,
  etc. — probe every export; brand icons Facebook/Twitter/Instagram are
  NOT in lucide-react → inline SVG simple-icons paths); Roboto Condensed
  - Open Sans via Google Fonts `<link>`; brand red `#e1193e` + blue
    `#1425af` + dark `#030513` in `@theme`; diagonal stripes via
    `bg-[linear-gradient(...)]` arbitrary utilities; no asset/CSS/font-file
    copying. Demo copy paraphrased but same kinds (crossfit classes, pricing
    plans, weekly schedule, trainer roster, testimonials, blog, BMI
    calculator). Source typos fixed: "No Commentment Memberships" → "No
    Commitment Memberships", "Convienient Time" → "Convenient Time", "Group
    Traning" → "Group Training", "Free Fitness Traning" → "Free Fitness
    Training", "1pm-2am" → "1pm-2pm". The BMI calculator can be a
    presentation-only form (no backend); compute BMI client-side on submit
    if desired, otherwise a non-functional form matching the layout.

Kinesis lives in `apps/kinesis` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn) plus the repo-standard
Navbar/Footer chrome (adapted to the transparent-over-hero navbar and the
dark 3-column footer with red accents).

## Requirements

### Requirement: Top strip

The system SHALL render a thin absolute-positioned strip above the hero
with a free-call phone line and social icons.

#### Scenario: Top strip content

- **GIVEN** the Kinesis page is rendered
- **WHEN** the page loads
- **THEN** the top strip SHALL show the text "Free Call" in the brand red
  followed by a phone number
- **AND** the strip SHALL show social icons for Twitter, Facebook, and Instagram

### Requirement: Navbar

The system SHALL render a transparent navbar overlaid on the hero with the
site wordmark, section links, a red CTA button, and a mobile toggle.

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Kinesis" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, TRAINERS, CLASSES, SCHEDULES, NEWS, CONTACT
- **AND** the navbar SHALL show a red "Become A Member" button

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a small viewport
- **WHEN** the user activates the toggle
- **THEN** a mobile menu SHALL open listing the same links and the CTA

### Requirement: Hero slider

The system SHALL render a full-viewport hero slider with three slides, each
with a background image, dark overlay, eyebrow, italic headline, subtext,
and a call-to-action button.

#### Scenario: Hero slides

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show the eyebrow "Crossfit" and headline "Shape Your Perfect Body" on the first slide
- **AND** the slider SHALL contain slides with the headlines "Increase Your Muscle Power" and "You Only Fail, When You Stop Trying"
- **AND** each slide SHALL show a "Take A Tour Now" button

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a slider control
- **THEN** the slider SHALL advance to the next slide and mark the active bar

### Requirement: About section

The system SHALL render an about section with an eyebrow, heading,
paragraph, image, and three icon list items.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the eyebrow "Information About Us" and the heading "Kinesis A Crossfit Workout Training Center"
- **AND** it SHALL show an image beside the text
- **AND** it SHALL list the items "Men Fitness and Workout", "Women Fitness and Workout", and "Personal Trainings"

### Requirement: Counter band

The system SHALL render a blue-striped band with four animated counters.

#### Scenario: Counter content

- **GIVEN** the page is rendered
- **WHEN** the counter band is displayed
- **THEN** it SHALL show four counters labelled "Years of experienced", "Fitness Trainers", "Best Equipments", and "Satisfied Clients"
- **AND** each counter SHALL show a number in white

### Requirement: CTA band

The system SHALL render a call-to-action band with an eyebrow, heading, and
button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL show the eyebrow "Join Us Now" and the heading "Join Us Our Free Workout Training With Kinesis"
- **AND** it SHALL show a red call-to-action button

### Requirement: Free fitness features

The system SHALL render a row of three feature cards, each with an icon, a
title, and a blurb.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the free-fitness section is displayed
- **THEN** it SHALL show three cards titled "Free Fitness Training", "Tons of Cardio & Strength", and "No Commitment Memberships"
- **AND** each card SHALL have an icon and a blurb

### Requirement: Classes section

The system SHALL render a grid of six class cards, each with an image, a
hidden price badge, and a title band, plus a "View All Classes" link.

#### Scenario: Classes content

- **GIVEN** the page is rendered
- **WHEN** the classes section is displayed
- **THEN** it SHALL show the eyebrow "Our Classes" and the heading "Kinesis Workout Classes"
- **AND** it SHALL show six classes titled "Body Building", "Weight Lifting", "Cardio", "Martial Arts", "Yoga", and "Cycling"
- **AND** each card SHALL show a price badge "$100"

#### Scenario: Card hover

- **GIVEN** a class card is displayed
- **WHEN** the user hovers over it
- **THEN** the price badge SHALL slide into view and the title band SHALL invert to red

### Requirement: Pricing section

The system SHALL render three pricing plans, each with a name, price, five
features with check icons, and a "Get Started" button.

#### Scenario: Pricing plans

- **GIVEN** the page is rendered
- **WHEN** the pricing section is displayed
- **THEN** it SHALL show the eyebrow "Our Pricing" and the heading "Pricing & Packages"
- **AND** it SHALL show three plans: "Basic Plan" $49, "Beginner Plan" $79, and "Premium Plan" $109
- **AND** each plan SHALL list the features "Personal Trainer", "Convenient Time", "Special Class", "Group Training", and "Free Fitness Training"

### Requirement: Video band

The system SHALL render a blue-striped video band with a circular play
button, heading, video thumbnail, and success-story quotes.

#### Scenario: Video band content

- **GIVEN** the page is rendered
- **WHEN** the video band is displayed
- **THEN** it SHALL show a circular play button and the heading "Members Success Stories"
- **AND** it SHALL show at least two success quotes about member transformations

### Requirement: Schedules table

The system SHALL render a weekly fitness schedule table with a blue header,
red time column, and zebra-striped cells.

#### Scenario: Schedule rows

- **GIVEN** the page is rendered
- **WHEN** the schedules section is displayed
- **THEN** it SHALL show the eyebrow "Schedules" and the heading "Fitness Schedules"
- **AND** the table SHALL have columns for Time, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday
- **AND** the table SHALL have time rows "8am-9am", "10am-11am", "1pm-2pm", "3pm-5pm", and "7pm-9pm"
- **AND** the table SHALL show class names such as "Body Building", "Weight Lifting", "Cardio", "Yoga", "Aerobics", "Cycling", and "Stretching"

### Requirement: Trainers section

The system SHALL render four trainer cards, each with a photo and a name
plate that reveals on hover.

#### Scenario: Trainer cards

- **GIVEN** the page is rendered
- **WHEN** the trainers section is displayed
- **THEN** it SHALL show the eyebrow "Trainer" and the heading "Fitness Trainer"
- **AND** it SHALL show four trainers named "Aron Mighty", "Alicia Brown", "Anne Henderson", and "Bruce Grapler"

### Requirement: Testimonials section

The system SHALL render a light-background testimonial carousel with
quotes, names, and positions.

#### Scenario: Testimonial content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the eyebrow "Testimonial" and the heading "Happy People"
- **AND** it SHALL show at least one quote with a name and a position

#### Scenario: Carousel navigation

- **GIVEN** the testimonial carousel is displayed
- **WHEN** the user activates a navigation control
- **THEN** the carousel SHALL advance to the next testimonial

### Requirement: Blog section

The system SHALL render a blog section with a heading and cards containing
a date meta, title, excerpt, and read-more link.

#### Scenario: Blog content

- **GIVEN** the page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the eyebrow "Our Blog" and the heading "Recent Blog"
- **AND** it SHALL show at least three cards, each with a date meta, a title, an excerpt, and a read-more link

### Requirement: BMI calculator

The system SHALL render a BMI section with unit tabs (Standard/Metric), a
form with Height and Weight inputs, and a submit control.

#### Scenario: BMI content

- **GIVEN** the page is rendered
- **WHEN** the BMI section is displayed
- **THEN** it SHALL show the eyebrow "Get Your Body Max Index" and the heading "What is Your BMI"
- **AND** it SHALL show "Standard" and "Metric" tabs
- **AND** the active panel SHALL show "Your Height" and "Your Weight" inputs with a submit button

### Requirement: Footer

The system SHALL render a dark footer with brand + social icons, an
Explore links column, a contacts column, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand name with a blurb and circular social icons
- **AND** an "Explore" column with links About Us, Trainers Team, Awesome Classes, Pricing Packages, and Latest News
- **AND** a contacts column with an address, a phone number, and an email
- **AND** the footer SHALL show a copyright bar linking to Component Dock (https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Kinesis app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top strip, navbar, hero slider, about, counters, CTA, features, classes, pricing, video band, schedules, trainers, testimonials, blog, BMI, and footer in order
- **AND** the document title SHALL be "Kinesis — Dazko Template"

## Verification checklist

- [ ] `openspec/specs/template-kinesis/spec.md` present with the REAL
      section list (top strip → navbar → hero slider → about → counters →
      CTA → free fitness → classes → pricing → video band → schedules →
      trainers → testimonials → blog → BMI → footer).
- [ ] Design tokens above (red `#e1193e` + blue `#1425af`/`#1d2cb5`, dark
      `#030513`, `#011f39` headings, `#f0f4f7` light sections, Roboto
      Condensed + Open Sans, square 12px uppercase buttons with skewed
      tabs, diagonal stripe patterns, vertical bar slider nav, 60px play
      circle with pulse) captured in the spec.
- [ ] `docs/templates/kinesis/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh
    kinesis`, PR lists source (ColorLib Dazko), preview URL, tokens,
      and what differs.
