# Template: Momentum (Startup / Landing Page Template)

## Purpose

Momentum is a single-page startup / landing website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Action" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Action" — free Bootstrap 5 startup / landing
  template (source: https://colorlib.com/wp/template/action/). TEMPLATES.md
  has TWO copies of this item (lines 549 and 881 — mark EVERY copy `[x]`
  when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/action/
  (HTTP 200, ~23.5 KB rendered DOM, title "Action — Free Bootstrap 5 Website
  Template by Colorlib"). Stylesheets: `css/style.css` (59.3 KB, extracted)
  - `css/aos.css` (AOS scroll animations) + `css/tiny-slider.css`
    (testimonial slider) + icon font `fonts/icomoon/style.css`
    (icon-facebook, icon-twitter, icon-linkedin, icon-dribbble, icon-heart).
    Fonts loaded via Cloudflare cf-fonts @font-face in the head:
    **'Jost'** (400 / 600 / 700) for everything — recreate with a Google
    Fonts `<link>`. jQuery plugin behavior (tiny-slider testimonials, AOS
    fade-up hero, countdown timer) → React state/effects.
- **Screenshot:** `action-free-template.jpg` (TEMPLATES.md lines 549 / 881;
  AVIF, viewed in the browser at 1200×946) — dark moody landing: hero is a
  full-width photo of dried autumn leaves (brown/grey/beige texture) with a
  white bold headline ("New template" small line + "Boostrap Five" huge —
  the source misspells "Bootstrap"; fix the typo in the recreation) and a
  tiny "A FREE TEMPLATE BY COLORLIB" line; the READ MORE button renders as
  a purple/magenta rounded pill (the CSS makes it a filled gradient pill);
  below the fold a black Event Countdown section with giant white numbers
  (DAYS 427 / HOURS 05 / MINUTES 28 / SECONDS 26) and a matching
  "GET STARTED" pill.
- **Visual design (from DOM + CSS tokens + rendered screenshot):** dark
  landing aesthetic — black sections (`#000` section-2 / section-4 /
  section-6, `#111` half-overlay bottom half, `#222` dark feature cards and
  `.btn-black`), light grey `#efefef` (section-3 / section-contact / social
  circle bg), white text on dark, near-black text on light; the ONLY brand
  accents are the **purple `#743ad5` → pink `#d53a9d` gradient**
  (`linear-gradient(to right, #743ad5 0%, #d53a9d 100%)`) used on pill
  buttons, feature-card hover fills, pricing card bg, and social hover, and
  the purple `#743ad5` alone (feature icons, social hover, testimonial
  active dot, focus rings `rgba(116,58,213,.25)`); Jost sans body (16px)
  with **huge bold headings** — `.heading-2` 90px (hero h1) / `.heading`
  80px (section titles) / counter numbers 90px white / pricing price 50px
  bold, all `line-height: 1`; `.subheading` 11px uppercase with
  `.1rem`–`.2rem` letter-spacing; buttons are **100px-radius pills**
  (`.btn-primary-gradient`: gradient fill + 2px inset black interior that
  fades on hover → solid gradient; `.btn-primary-gradient-white-bg`: white
  interior + black text for light sections; `.btn-bg-darker`: `#111`
  interior for the dark team section), 30px-radius outline pills
  (`.btn-primary-outline.white` on pricing), and `.btn-black` (bg `#222`,
  30px radius) for Subscribe; cards radius 7px. The demo brands itself
  "Action"; recreation uses the NEW name **Momentum**.

- **Structure (1:1, section order):**
  1. Navbar `nav.site-nav` (position absolute, top 0, z-index 9, width 100%,
     padding 20px 0 — transparent OVER the hero) — `div.container` >
     `div.site-navigation`: `a.logo` left (**"Action"** text wordmark, 24px,
     white; recreate as "Momentum"); `ul.js-clone-nav.site-menu.float-end`
     right (white 14px links, `rgba(255,255,255,.7)` → white on hover,
     `.active` white): **Home** (active, `index.html`), **Dropdown**
     (`li.has-children` — caret via icomoon `\e313`; submenu `ul.dropdown`
     white bg, shadow, black links, hover `#743ad5`, `min-width: 180px`):
     **Menu One**, **Menu Two** (nested `li.has-children` → **Sub Menu
     One** / **Sub Menu Two** / **Sub Menu Three**), **Menu Three**;
     **Services** (`services.html`), **About** (`about.html`), **Contact
     Us** (`contact.html`). Mobile: burger `a.burger.light` (white 2px
     lines) toggles a slide-in `div.site-mobile-menu` panel (fixed 300px,
     `site-navbar-target`, close via `.icofont-close`), populated by
     cloning the menu.
  2. Hero `div.hero.v-h-full.overlay` (bg `images/bg_hero.jpg`, cover,
     `background-color: #000` fallback + `:before` overlay
     `rgba(0,0,0,.4)`; `v-h-full` = 100vh / min-height 700px; mobile: auto
     height + `padding-top: 7rem`) — `div.container` >
     `div.row.align-items-center.v-h-full` > `div.col-lg-10.col-xxl-6`:
     `h1.heading-2.text-white.mb-4` **"New template Boostrap Five"** (90px /
     60px / 40px responsive, weight 700, `line-height: 1`, AOS fade-up; fix
     the "Boostrap" typo → e.g. "New Template. Bootstrap Five." or similar
     two-line treatment); `p.subheading.text-white.mb-5` "A free template
     by **Colorlib**" (link) — recreate credit per CC BY 3.0; `p` >
     `a.btn.btn-primary-gradient` **"Read More"**.
  3. Countdown `div.section.section-2.js-countdown` (bg **`#000`**,
     padding 7rem 0) — `div.container`:
     - Heading row: `div.col-lg-10.col-xxl-7.mx-auto.text-center` —
       `span.subheading` "**Don't wait**" (white) + `h2.heading` white
       "**Event Countdown**" (80px white).
     - `div.row.justify-content-between.mb-5.counter-wrap#clockdiv` — FOUR
       `div.col-6.col-sm-6.col-md-6.col-lg-3.text-center` counters:
       `div.counter` — `span.number.d-block` (white, 90px / 40px mobile,
       jQuery countdown target: **Days 39 / Hours 27 / Minutes 51 /
       Seconds 51**) + `span` label (12px, uppercase, `.2rem`
       letter-spacing, `rgba(255,255,255,.3)`): **Days / Hours / Minutes /
       Seconds**. Implement as a real countdown to a fixed future date (or
       static numbers for tests — see gotchas).
     - Hidden `div.row.mb-5.custom-alert` ("We are sorry, Event ended!") —
       shown when the countdown expires.
     - `div.row` > `div.col-lg-7.mx-auto.text-center` >
       `a.btn.btn-primary-gradient` **"Get Started"**.
  4. Services `div.section.section-3` (bg **`#efefef`**, `padding-bottom: 0`)
     — `div.container`:
     - Heading row: `div.col-lg-6.mb-5` — `span.subheading` "**Services**"
       - `h2.heading` "**Our Services**" (80px, near-black).
     - `div.row.features-wrap` (`margin-bottom: 12rem`) — FOUR
       `div.col-md-6.col-lg-4.col-xl-3` feature cards `div.feature`
       (padding 30px, margin-bottom 50px, radius 7px on hover): `div` >
       `div.svg-wrap` (Bootstrap-Icons inline SVG, 40px, color `#743ad5`)
       - `h3` (20px, weight 700) + `p`; on hover `div.feature:before` (a
         `linear-gradient(to right, #743ad5, #d53a9d)` layer, opacity 0 →
         1, `box-shadow: 0 15px 30px rgba(0,0,0,.2)`) fills the card and the
         icon/heading/paragraph turn **white**. Cards: **Photography**
         (bi-camera), **Settings** (bi-gear), **Images** (bi-image),
         **Layered** (bi-layers) — icons → lucide-react equivalents
         (Camera, Settings, Image, Layers).
     - Below (overlapping white box): `div.box-white.pt-5.p-md-5.mx-md-5`
       (bg white, z-index 2, `margin-bottom: -50px`) — `div.row`: left
       `div.col-lg-6.align-self-center` `div.text-wrap` (`margin-right:
200px` desktop): `span.subheading` "**Who we are**" + `h2.heading
.mb-4` "**About us**" + TWO paragraphs (lorem) +
       `p.mt-5` > `a.btn.btn-primary-gradient-white-bg` **"Get Started"**
       (gradient ring + white interior + black text); right
       `div.col-lg-6` `img.img-fluid.img-overlap` (bg
       `images/image_big_2.jpg`, `margin-top: -100px`; mobile `margin-top:
auto`) — seeded placeholder.
  5. Pricing `div.section.section-4.section-pricing` (bg **`#000`**) —
     `div.container`: `div.row.mb-5` > `div.col-12.text-center` —
     `h3.subheading.text-white` "**Prices for everyone**" +
     `h2.heading.text-white` "**Pricing**"; `div.row` >
     `div.col-lg-9.mx-auto` > `div.row.align-items-baseline` — THREE
     `div.col-lg-4` pricing cards `div.pricing.mb-4.mb-md-0` (bg
     **`#743ad5`**, padding 40px, centered, radius 7px): `h3.mb-4` white
     30px (**Starter** / **Basic** `pt-4` / **Premium**), `p.mb-4`
     `rgba(255,255,255,.5)` lorem, `div.line` (1px
     `rgba(255,255,255,.2)`, margin 40px 0), `div.price.mb-4` (white):
     `span.currency` "$" (16px, `top: -20px`) + `span.price` 50px 700
     (**49** / **199** / **975**) + `span.cents` ".99" (16px); `p` >
     `a.btn.btn-primary-outline.white.px-5` **"Buy"** (transparent pill,
     white text, 1px `rgba(255,255,255,.2)` border, 30px radius; hover:
     white bg + `#743ad5` text).
  6. More Features `div.section-5.bg-image.overlay.v-h-full` (bg
     `images/bg_hero_2.jpg`, cover + `rgba(0,0,0,.4)` overlay, 100vh) —
     `div.container` > `div.row.align-items-md-center.v-h-full` >
     `div.col-lg-12`: `h3.subheading.text-white` "**Features**" +
     `h2.heading.text-white` "**More Features**" + `p.text-white.mb-5`
     lorem; `div.row` — THREE `div.col-lg-4` dark feature cards
     `div.feature.dark` (static bg **`#222`** via `:before` opacity 1,
     radius 7px, padding 30px): `h3` (white, weight 400) + `p`
     (`rgba(255,255,255,.5)`): **Creative** / **Design** /
     **Development**; hover: `:before` → purple-pink gradient
     (`#743ad5 → #d53a9d`), paragraph turns white.
  7. Testimonials + Team `div.section.section-6.half-overlay` (bg **`#000`**;
     `:before` fills bottom 50% (30% mobile) with **`#111`**) —
     `div.container`:
     - `div.box-white` (bg white, `margin-top: -200px`, padding 50px;
       `half-overlay` variant `margin-bottom: 0`) —
       `div.row` > `div.col-lg-7.mx-auto.text-center`:
       `h3.subheading` "**Testimonials**" + `h2.heading.mb-5`
       "**People Says...**" + `div.testimonial-wrap` (tiny-slider →
       React slider with 3 dot indicators `#efefef` → `#743ad5` active):
       THREE `div.item-testimonial`: `blockquote.mb-4` (lorem quote) +
       `div.bio-pic` — `img.img-fluid.mb-2` (80px circle) +
       `strong.d-block` name (**Jessica Smith** / **Craig Norton** /
       **Jessica Smith**) + `span.d-block` "**Product Marketer @Google**"
       (all three share the role line).
     - Below (second container, on the `#111` half): `div.row.mb-5` >
       `div.col-lg-7` — `h3.subheading.text-white` "**Team**" +
       `h2.heading.text-white` "**Meet our team**"; `div.row.justify-content-center`
       > `div.col-lg-9` > `div.row.justify-content-between` — TWO
       > `div.col-lg-6.mb-5.mb-lg-0` team cards `div.team`:
       > `img.img-fluid` (mb 50px; `person_1.jpg` / `person_2.jpg`) + `h3`
       > (30px white) name (**Jessica Green** — **CEO, Co-Founder** /
       > **Jon Gold** — **CTO, Co-Founder** via `p.position`
       > `rgba(255,255,255,.3)`) + `p.mb-4` lorem
       > (`rgba(255,255,255,.5)`) + `p` > `a.btn.btn-primary-gradient
.btn-bg-darker` **"Read bio"** (gradient pill, `#111` interior).
  8. Newsletter `div.section.section-contact.m-md-5.px-md-5` (bg
     **`#efefef`**) — `div.container`: `h2` "**Subscribe to Newsletter**"
     - `p` lorem + `form.form-contact` (`div.row` — three
       `div.col-sm-4.col-md-4.col-lg-4`): `div.form-group` `input.form-control`
       (text, placeholder "**Your name**") + `div.form-group`
       `input.form-control` (email, placeholder "**Your email**") +
       `input[type=submit].btn.btn-black.btn-block` value "**Subscribe**"
       (bg `#222`, white, 30px radius, padding 14px 30px; underline-only
       inputs: transparent bg, `border-bottom: 1px solid #ccc`, radius 0).
  9. Footer `div.section.footer` — `div.container.text-center`:
     `div.row` > `div.col-lg-12.mx-auto` — `ul.social.list-unstyled`:
     FOUR `li` > `a` (50×50 circle, bg `#efefef`, black icon; hover bg
     `#743ad5` + white): **icon-facebook / icon-twitter / icon-linkedin /
     icon-dribbble** (lucide-react removed brand glyphs → inline SVG;
     dribbble has no lucide equivalent → inline SVG); `div.row` >
     `div.col-12` — copyright line: "Copyright © <year> All rights
     reserved | This template is made with ♥ by Colorlib" (credit kept per
     CC BY 3.0, recreated as our own text).

- **Design tokens (from css/style.css + computed styles on the live
  preview):**
  - Brand gradient **`#743ad5 → #d53a9d`** (purple → pink, to-right) —
    `.btn-primary-gradient` fill, `.feature:hover` / `.feature.dark:hover`
    `:before` fills, `.section-4 .pricing` card bg, social hover bg,
    `.testimonial-wrap .tns-nav button.tns-nav-active` dot.
  - Brand purple **`#743ad5`** alone — `.svg-wrap` feature icons, dropdown
    link hover, `.btn-primary-outline:hover` text, social hover bg, focus
    ring `rgba(116,58,213,.25)`.
  - Darks — **`#000`** (section-2 / section-4 / section-6 bgs, hero
    fallback), **`#111`** (section-6 bottom half, `.btn-bg-darker`
    interior), **`#222`** (`.feature.dark` bg, `.btn-black` bg),
    `#212529` (Bootstrap body text), `#343a40`.
  - Light greys — **`#efefef`** (section-3 / section-contact bgs, social
    circle bg, testimonial dots), `#ccc` (form underlines), `#e9ecef`.
  - Overlay — hero / section-5: `rgba(0,0,0,.4)`; card text on dark:
    `rgba(255,255,255,.5)`; labels `.3`.
  - Fonts — **'Jost', sans-serif** (400 / 600 / 700): body 16px; `.heading`
    80px / `.heading-2` 90px (hero) bold `line-height: 1` (responsive 60px
    → 40px); counter numbers 90px (40px mobile); pricing price 50px bold;
    team h3 30px; feature h3 20px bold; logo 24px; nav links 14px.
    `.subheading`: 11px, uppercase, letter-spacing `.1rem`, weight 700.
    Google Fonts in the recreation.
  - Buttons — `.btn-primary-gradient` family: pill **radius 100px**,
    uppercase, 12px, letter-spacing `.2rem`, padding `17px 28px`, white
    text, `border: none`; layered: `:before` = gradient, `:after` = 2px
    inset interior (`#000` default / `#fff` white-bg variant / `#111`
    btn-bg-darker) that fades to transparent on hover. `.btn-primary-outline`:
    radius 30px, 1px border, padding `7px 30px`; `.white` variant white
    text + `rgba(255,255,255,.2)` border, hover white bg + `#743ad5` text.
    `.btn-black`: bg `#222`, radius 30px, white, padding `14px 30px`,
    hover transparent + black border.
  - Cards — radius **7px** (feature hover fill, pricing cards); hero
    headings 700 weight, `line-height: 1`.
  - Spacing rhythm — `.section` padding `7rem 0`; `.section-2` padding
    7rem; `.feature` padding 30px / margin-bottom 50px; `.pricing`
    padding 40px; `.box-white` padding `5rem` sides (`p-md-5`); `.section-6`
    `.box-white` `margin-top: -200px`; `v-h-full` = 100vh / min-height
    700px.
  - Icons (source icon fonts / Bootstrap Icons SVG → swap to
    lucide-react + inline SVG): feature icons camera / gear / image /
    layers (lucide Camera, Settings, Image, Layers); socials
    facebook / twitter / linkedin / dribbble (inline SVG — lucide has no
    brand glyphs); heart (copyright line).
  - Mobile: burger (`.light` white lines) → slide-in `site-mobile-menu`
    panel with close; hero stacks (auto height, `padding-top: 7rem`);
    features 1-up → 2-up; box-white image overlap removed (`margin-top:
auto`); counters 2-up (`col-6`); pricing 1-up; section-6 `:before`
    height 30%; team 1-up; newsletter fields stack.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/momentum-<n>/<w>/<h>`; hero 1920×1080-class dark
  leaf-like texture, about 800×600, section-5 1920×1080-class, bio-pics
  160×160, team 600×750-class portraits); hero headline typo "Boostrap"
  fixed (e.g. "New Template" small + "Bootstrap Five" huge — keep the
  two-line bold treatment); countdown → real timer to a fixed future date
  with the hidden "Event ended" alert, but tests assert static labels /
  structure (see gotchas); tiny-slider testimonials → simple 3-slide
  state carousel with 3 dot indicators; AOS fade-up → optional CSS
  transitions (not required for fidelity); dropdown nav (has-children)
  → hover/click dropdowns; jQuery clone-to-mobile-menu → shared menu data
  rendered in both desktop nav and mobile slide-in panel; logo recreated
  as a Jost wordmark "Momentum"; ColorLib credit line kept per CC BY 3.0.

Momentum lives in `apps/momentum` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Transparent navbar with dropdowns and mobile panel

The system SHALL render a transparent navbar over the hero with a wordmark
on the left, six nav entries (one a dropdown with nested submenu) on the
right, and a slide-in mobile menu.

#### Scenario: Desktop navbar

- **GIVEN** the Momentum page is rendered
- **WHEN** the page loads
- **THEN** a transparent navbar positioned over the hero SHALL show the
  wordmark "Momentum" on the left
- **AND** white uppercase-ish 14px links SHALL be shown on the right:
  Home, Dropdown, Services, About, and Contact Us
- **AND** the Home link SHALL be marked active (solid white, others
  `rgba(255,255,255,.7)` until hover)

#### Scenario: Dropdown menu

- **GIVEN** the navbar is rendered
- **WHEN** the user opens the Dropdown entry
- **THEN** a white dropdown panel SHALL show Menu One, Menu Two, and Menu
  Three
- **AND** Menu Two SHALL expand to a nested submenu with Sub Menu One, Sub
  Menu Two, and Sub Menu Three
- **AND** hovering a dropdown link SHALL tint it the brand purple `#743ad5`

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user presses the white burger toggle
- **THEN** a slide-in panel SHALL open containing the same nav links
- **AND** pressing the toggle or the close control SHALL close it

### Requirement: Full-viewport hero with headline and CTA

The system SHALL render a full-viewport hero with a dark background image,
a dark overlay, a two-line white headline, a credit line, and a gradient
pill CTA.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL cover the full viewport (min-height 700px) with
  the background image under a `rgba(0,0,0,.4)` overlay
- **AND** a large white bold headline SHALL read (with the source's
  "Boostrap" typo corrected) e.g. "New Template" / "Bootstrap Five"
- **AND** a small uppercase credit line SHALL credit the template author
- **AND** a "Read More" pill button SHALL show the purple-pink gradient
  fill with white uppercase text

### Requirement: Event countdown section

The system SHALL render a black countdown section with a heading block,
four live countdown units (Days, Hours, Minutes, Seconds), an
event-ended alert, and a Get Started CTA.

#### Scenario: Countdown units

- **GIVEN** the countdown section is displayed
- **WHEN** the page loads
- **THEN** an uppercase "Don't wait" kicker and a huge white "Event
  Countdown" heading SHALL appear centered
- **AND** four columns SHALL show large white numbers with uppercase
  grey labels Days, Hours, Minutes, and Seconds (labels letter-spaced
  `rgba(255,255,255,.3)`)
- **AND** the values SHALL count down in real time toward a fixed future
  date

#### Scenario: Event ended

- **GIVEN** the countdown has reached zero
- **WHEN** the timer ticks
- **THEN** an alert reading "We are sorry, Event ended!" SHALL be shown in
  place of the live values

#### Scenario: Get Started CTA

- **GIVEN** the countdown section is displayed
- **WHEN** the page loads
- **THEN** a centered "Get Started" gradient pill button SHALL appear
  below the counters

### Requirement: Services grid with hover-fill cards

The system SHALL render a light-grey services section with a heading and
four icon cards that fill with the brand gradient on hover, followed by a
white About box overlapping the next section.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the page loads
- **THEN** an uppercase "Services" kicker and huge "Our Services" heading
  SHALL appear
- **AND** four cards SHALL show a purple 40px icon and bold 20px heading:
  Photography, Settings, Images, and Layered, each with a paragraph
- **AND** hovering a card SHALL fill it with the purple-pink gradient and
  turn its icon/heading/paragraph white

#### Scenario: About box

- **GIVEN** the services section is displayed
- **WHEN** the page scrolls to the About box
- **THEN** a white box SHALL overlap the section boundary containing an
  uppercase "Who we are" kicker, an "About us" heading, two paragraphs,
  and a "Get Started" button (gradient ring, white interior, black text)
- **AND** an image SHALL sit to the right, pulled up to overlap the box

### Requirement: Pricing section

The system SHALL render a black pricing section with three purple cards,
each with a name, blurb, divider, price, and an outline Buy button.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is displayed
- **WHEN** the page loads
- **THEN** centered white kicker "Prices for everyone" and heading
  "Pricing" SHALL appear
- **AND** three purple cards SHALL show Starter ($49.99), Basic
  ($199.99), and Premium ($975.99)
- **AND** each card SHALL show a white 30px name, muted blurb, a 1px
  white-translucent divider, a 50px bold white price with small $ and
  .99, and a white-outline pill "Buy" button
- **AND** hovering Buy SHALL invert it (white background, purple text)

### Requirement: More Features dark section

The system SHALL render a full-viewport dark background-image section with
a heading and three dark feature cards that fill with the gradient on
hover.

#### Scenario: Dark feature cards

- **GIVEN** the More Features section is displayed
- **WHEN** the page loads
- **THEN** white kicker "Features" and heading "More Features" SHALL
  appear above a muted paragraph
- **AND** three dark cards SHALL show white 400-weight headings Creative,
  Design, and Development with translucent-white paragraphs
- **AND** hovering a card SHALL fill it with the purple-pink gradient and
  turn its paragraph white

### Requirement: Testimonials slider in white box

The system SHALL render a white box pulled up over the dark section
containing a testimonials slider with three quotes and dot navigation.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials box is displayed
- **WHEN** the page loads
- **THEN** kicker "Testimonials" and heading "People Says..." SHALL appear
  centered
- **AND** a quote with a circular 80px avatar, the author name, and the
  role line "Product Marketer @Google" SHALL be shown for Jessica Smith,
  Craig Norton, and Jessica Smith (three slides)
- **AND** three round dots SHALL navigate the slides, the active dot
  tinted `#743ad5`

### Requirement: Team section

The system SHALL render a team heading and two member cards on the dark
half of the section, each with a photo, name, role, bio, and a Read bio
button.

#### Scenario: Team cards

- **GIVEN** the team section is displayed
- **WHEN** the page loads
- **THEN** white kicker "Team" and heading "Meet our team" SHALL appear
- **AND** two cards SHALL show a large photo, a 30px white name, a muted
  role line, a bio paragraph, and a "Read bio" gradient pill button:
  Jessica Green (CEO, Co-Founder) and Jon Gold (CTO, Co-Founder)

### Requirement: Newsletter form

The system SHALL render a light-grey newsletter section with an email
form (name + email + Subscribe button) that validates input.

#### Scenario: Newsletter fields

- **GIVEN** the newsletter section is displayed
- **WHEN** the page loads
- **THEN** a "Subscribe to Newsletter" heading with a short blurb SHALL
  appear
- **AND** a form SHALL show underline-style inputs for "Your name" and
  "Your email" and a black rounded "Subscribe" button
- **AND** submitting an invalid email SHALL show a validation error and no
  success message

#### Scenario: Newsletter submit

- **GIVEN** the form is filled with a valid name and email
- **WHEN** the user presses Subscribe
- **THEN** the form SHALL indicate the subscription was received without
  navigating away

### Requirement: Footer with social circles and credit

The system SHALL render a centered footer with four circular social
buttons and a copyright line with the author credit.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** four 50px circular social buttons (Facebook, Twitter, LinkedIn,
  Dribbble) SHALL appear, grey with black icons, turning purple with white
  icons on hover
- **AND** the copyright line SHALL include the current year and the
  template design credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Momentum app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero, countdown, services
  (+About box), pricing, More Features, testimonials + team, newsletter,
  and footer in order
- **AND** the document title SHALL be "Momentum — Landing Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/momentum`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/momentum`)
- [ ] Section order matches the reference 1:1 (navbar → hero → countdown → services+About box → pricing → More Features → testimonials+team → newsletter → footer)
- [ ] Design tokens in `@theme` (brand purple #743ad5, brand pink #d53a9d, gradient to-right, black #000, #111, #222, light grey #efefef, Jost 400/600/700)
- [ ] Navbar: absolute transparent over hero, wordmark "Momentum", links Home/Dropdown/Services/About/Contact Us, active Home white, dropdown + nested submenu (purple hover), white burger → mobile slide-in panel
- [ ] Hero: 100vh min-700px, dark overlay rgba(0,0,0,.4), 90px bold white headline (typo fixed), credit line, "Read More" gradient pill (100px radius, uppercase, letter-spacing .2rem)
- [ ] Countdown: black bg, "Don't wait" + "Event Countdown" (80px), 4 live units with 90px white numbers + uppercase grey labels, "Event ended" alert on expiry, "Get Started" pill
- [ ] Services: #efefef bg, 4 feature cards (purple 40px icons: Photography/Settings/Images/Layered), hover → gradient fill + white text; white About box overlapping (Who we are / About us / 2 paragraphs / Get Started white-interior pill + overlapping image)
- [ ] Pricing: black bg, 3 purple cards ($49.99 / $199.99 / $975.99), white 30px names, 1px divider, 50px bold price, white outline "Buy" pill (hover invert)
- [ ] More Features: 100vh bg image + overlay, 3 dark cards (Creative/Design/Development, #222 bg), hover → gradient fill
- [ ] Testimonials: white box pulled up (-200px), 3-slide slider with avatars/names/role "Product Marketer @Google", dot nav (#efefef → #743ad5 active)
- [ ] Team: on #111 bottom half, Jessica Green (CEO, Co-Founder) + Jon Gold (CTO, Co-Founder), 30px white names, muted roles/bios, "Read bio" gradient pills
- [ ] Newsletter: #efefef bg, underline inputs (Your name / Your email) + black rounded Subscribe button, validation on submit
- [ ] Footer: 4 circular social buttons (facebook/twitter/linkedin/dribbble inline SVG; hover purple), copyright + credit line
- [ ] Placeholder images are seeded picsum (no copied assets); icons from lucide-react / inline SVG for brands; Jost via Google Fonts link
- [ ] README Templates status + TEMPLATES.md Action lines (549 AND 881) marked `[x]` after merge
