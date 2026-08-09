# Template: Shanti (Yoga & Wellness)

## Purpose

Shanti is a single-page yoga & wellness template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Yogalax"
design (see TEMPLATES.md — line 236, Beauty section; first unchecked item
whose prep did not exist on main), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a soft, airy wellness landing page: a transparent navbar over a
split hero (light mauve gradient left, photo right) with a rotating typewriter
headline and a pill CTA, an image-backed intro section with a 5-item benefit
checklist, a light services row of four 100px circular mauve icons, a 6-card
program grid whose photos tint mauve and reveal white text on hover, a
3-column membership pricing row, a testimonial carousel with circular quote
badges, a dark parallax counter band, a 3-post blog row with overlapping white
date cards, an Instagram-style gallery strip with hover circles, and a
**signature mauve footer** (the footer background is the brand color). Shanti
recreates that structure section-for-section with matching layout, colors,
typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Yogalax" — free Bootstrap 4 yoga / wellness website
  template (source: https://colorlib.com/wp/template/yogalax/). New name:
  **shanti** (Sanskrit for "peace", a common yoga/wellness term; single word,
  no collision with `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/yogalax/`
  (HTTP 200, ~37KB; page title "Yogalax - Free Bootstrap 4 Template by
  Colorlib"). Stylesheets: `css/style.css` (~70KB — Bootstrap 4.1 base +
  custom ftco template styles), plus animate.css, aos.css, owl.carousel.min +
  owl.theme.default, magnific-popup.css, bootstrap-datepicker.css,
  jquery.timepicker.css, flaticon.css, icomoon.css, ionicons.min.css,
  open-iconic-bootstrap.min.css. JS: jquery, bootstrap, owl.carousel,
  magnific-popup, aos, jquery.stellar (parallax), jquery.animateNumber
  (counters), main.js. The CSS declares **"Work Sans"** as the font
  (`--font-family-sans-serif` and `body { font-family: "Work Sans", Arial,
sans-serif }`) — in the recreation load it from Google Fonts `<link>` in
  index.html. The rendered DOM is the reference below; the TEMPLATES.md
  screenshot (`yogalax-free-template.jpg`, 1200×946, viewed in browser)
  confirms the visual design: soft mauve/dusty-rose palette, split hero with
  pale pink gradient fading to white on the left and a lotus-position photo of
  a woman in white on the right, huge thin (weight 200) dark headline with
  typewriter caret, pill-shaped CTA in deeper mauve with white text, uppercase
  spaced nav links, "Why You Should Go To Yoga" intro with a backbend photo;
  the live preview (browser-verified) additionally shows the scrolled navbar
  turning solid white with a soft shadow and the active link staying mauve.
- **Section order (1:1):**
  1. `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light#ftco-navbar`
     — over the hero the bar is **transparent** (`.ftco-navbar-light`:
     `position: absolute; top: 10px; z-index: 3`): left `a.navbar-brand`
     (22px, uppercase, `letter-spacing: 2px`, weight 300, color #000) with a
     `span.flaticon-lotus` brand icon (28px, #d291bc) + "Yogalax"; right
     `ul.navbar-nav.ml-auto` — **Home** (`.active`, color #d291bc + 2px
     underline `:after`), Classes, Schedule, About, Blog, Contact (14px,
     weight 300, #000, `padding: 1.5rem 20px`); toggler (mobile) = text
     "Menu" + `oi oi-menu` icon. `.scrolled` (JS): `position: fixed; top: 0`,
     `background: #fff !important`, `box-shadow: 0 0 10px rgba(0,0,0,0.1)`,
     links #000, active stays #d291bc. Mobile (≤992px): background #000,
     brand + links white (rgba(255,255,255,0.7), hover #fff).
  2. `section.hero-wrap.js-fullheight` — full-viewport hero (`background-
image: url('images/bg_2.jpg')` — lotus-pose woman photo), `div.overlay`
     — the signature **45deg linear-gradient #d291bc → transparent, opacity
     .3, width: 68%** (mauve wash from the left). `div.slider-text` col-md-8:
     `h1.typewrite.mb-3` (80px, `font-weight: 200`, #000; `data-type='[
"Inspiration For Joyful Living.", "Effective Therapy Against Stress.",
"Flexibility is A Second Power."]'` — JS typewriter with blinking
     `border-right` caret), `h2.mb-5` "Do Yoga today for a better tomorrow"
     (weight 200), `p > a.btn.btn-primary.p-3.px-4` **"15 Day Free Trial"**
     (pill, #d291bc, white text).
  3. `section.ftco-section.ftco-intro` — intro band (`background-image:
url(images/intro.jpg)` — full-width yoga backbend photo, `background-
size: cover; background-position: top center`), `row.justify-content-end`
     > `col-md-6`: `div.heading-section` `h2.mb-4` **"Why You Should Go To
     > Yoga"**, one lorem paragraph, then `ul.mt-5.do-list` of 5 items — each
     > `li.ftco-animate > a` with `span.ion-ios-checkmark-circle.mr-3` (22px,
     > #d291bc) + label (24px, weight 300): **Yoga boosts brain power / Yoga
     > helps you to breathe better / Yoga improves your strength / Yoga helps
     > you to focus / Yoga helps give meaning to your day**.
  4. `section.ftco-section.ftco-section-services.bg-light` — light (#f8f9fa)
     services row, NO header, four `div.col-md-3 > div.services`: `div.icon
d-flex.justify-content-center.align-items-center` — **100px circle,
     background #f7ebf3, `border-radius: 50%`**, `span` flaticon at 44px
     #d291bc (flaticon-like, flaticon-lotus, flaticon-meditation,
     flaticon-lotus-1); `div.text.mt-4`: `h3` (20px, weight 500) **Healthy
     Lifestyle / Body & Mind Balance / Meditation Practice / Edeology** +
     lorem paragraph.
  5. `section.ftco-section` — programs grid: centered heading-section
     (subheading `h3.subheading` "Yoga Classes" — 16px uppercase,
     `letter-spacing: 3px`, #b3b3b3; `h2` 60px weight 300 — **"Choose Your
     Level & Focus"**), then `row.no-gutters` of six `div.col-md-6.col-lg-4 >
a.package-program` cards: `a.img` (block, `height: 400px`, cover bg
     program-1..6.jpg, flex-centered) wrapping `div.text.p-5.text-center`
     (white text `rgba(255,255,255,0.8)`, `opacity: 0` → 1 on hover; `h3`
     30px weight 500 white + lorem) — **Group Lessons / Yoga For Beginners /
     Yoga For Pregnant / Yoga For Couples / Bikram Yoga / Yoga Barre**. Hover:
     `:after` full-cover **#d291bc overlay, opacity .5** + text fade-in.
  6. `section.ftco-section.bg-light` — pricing: heading-section (subheading
     "Pricing Tables" + h2 **"Membership Cards"**), `row` of three
     `div.col-md-4 > div.block-7` cards (white bg, `padding: 30px`,
     `box-shadow: 0px 24px 48px -13px rgba(0,0,0,0.05)`, centered): `h2.heading`
     (14px, uppercase, weight 500) **Year Card / Monthly Card / Weekly Card**;
     `span.price > sup` ($, 24px, #d291bc) + `span.number` (449 / 200 / 85);
     `span.excerpt.d-block` "For 1 Year" / "For 1 Month" / "For 1 Week";
     `h3.heading-2.my-4` **"Enjoy All The Features"** (14px uppercase,
     `letter-spacing: 1px`, weight 600); `ul.pricing-text.mb-5` of 4 items
     (#4d4d4d, 15px margins) — Year: Onetime Access To All Club, Group
     Trainer, Book A Group Class, Fitness Orientation; Monthly & Weekly:
     Group Classes, Discuss Fitness Goals, Group Trainer, Fitness Orientation;
     `a.btn.btn-primary.d-block.px-2.py-4` **"Get Started"** (full-width pill,
     uppercase, 600, letter-spacing 1px).
  7. `section.ftco-section.testimony-section` — heading-section (subheading
     "Testimony" + h2 **"Successful Stories"**), `div.carousel-testimony.owl-
carousel` of **5 items**: `div.testimony-wrap.p-4.pb-5` — `div.line.pl-5`
     with quote paragraph (mb-4) + `span.quote d-flex` (40px circle, bg
     #d291bc, white icon-quote-left, absolutely positioned left -20px,
     vertically centered); then `div.d-flex.align-items-center` — `div.user-
img` (110px circle, person_1..5.jpg) + `div.ml-4`: `p.name` (18px,
     weight 500, #000) + `span.position` (13px) "Customer". Carousel chrome:
     inactive `.owl-item` opacity .4, active 1; nav arrows #d291bc (fade in on
     hover); dots 10px circles rgba(0,0,0,0.2), `.active` = #d291bc gradient.
  8. `section.ftco-counter.ftco-bg-dark.img#section-counter` — dark parallax
     counter band (`background-image: url(images/bg_3.jpg)`,
     `data-stellar-background-ratio="0.5"`, `background: #090808` + full-
     width `div.overlay` 45deg mauve gradient opacity .3): four
     `div.col-md-6.col-lg-3 > div.block-18.text-center` — `strong.number`
     (30px, animated count-up via data-number) + `span` label: **5000 Happy
     Customers / 4560 Yoga Workshops / 570 Years of Experience / 900 Lesson
     Conducted**.
  9. `section.ftco-section.bg-light` — blog: heading-section (subheading
     "Blog" + h2 **"Recent Posts"**), three `div.col-md-4.d-flex > a.blog-
entry` cards: `a.block-20` (block, `height: 270px`, cover bg
     image_1..3.jpg) + `div.text.p-4` — **white card overlapping the image
     (`margin-top: -40px`)**; date block `div.d-flex.align-items-center`:
     `div.one > span.day` (58px, weight 300, #d291bc — 31 / 27 / 26) +
     `div.two`: `span.yr` (2018) + `span.mos` (December) in #b3b3b3; `h3.heading`
     (18px, weight 400) **"Young Women Doing Yoga"**; lorem paragraph.
  10. `section.ftco-gallery.ftco-section` — gallery strip: heading-section
      (subheading "Gallery" + h2 **"See the latest photos"**), `row` of four
      `div.col-md-3 > a.gallery.image-popup.img` tiles (`height: 270px`, cover
      bg gallery-1..4.jpg) each with `div.icon mb-4` — **60px circle, bg
      #d291bc, white icon-instagram, `opacity: 0` → 1 on hover** (magnific
      popup lightbox in the original).
  11. `footer.ftco-footer.ftco-section.img` — **signature mauve footer**
      (`background: #d291bc; padding: 4em 0`) with full-width `div.overlay`
      (45deg mauve gradient, opacity .3): `row.mb-5` of three widgets —
      `col-lg-3` `h1.logo` "Yogalax" (30px, weight 300, white);
      `col-lg` `h2.location` "203 Fake St. Mountain View, San Francisco,
      California, USA" (24px, rgba(255,255,255,0.9)); `col-lg-3`
      `ul.ftco-footer-social` — 3 round links (50px circles, bg
      rgba(255,255,255,0.05)): twitter, facebook, instagram icomoon icons.
      Bottom bar (`row > col-md-12.text-center`): copyright year + `i.icon-
heart` + **repo-standard credit** (replace the Colorlib credit line).
  12. `div#ftco-loader.show.fullscreen` — fullscreen white loader with 48px
      circular SVG spinner (`.circular` rotate animation; `circle.path-bg`
      stroke #eeeeee; `circle.path` stroke **#F96D00** in the original —
      leftover orange; recreation should use the brand mauve #d291bc for
      consistency).
- **Design tokens extracted from `css/style.css` (Bootstrap 4.1 base +
  custom):**
  - Brand mauve/dusty rose: **#d291bc** — `--primary`-replacement used
    everywhere: `a` color, `.btn.btn-primary` bg (hover: transparent bg +
    #d291bc border/text), active nav link + underline, nav brand icon span,
    `.services .icon` glyphs, `.do-list li span` checkmarks, blog `.day`
    numbers, `.block-7 .price sup`, `.testimony-wrap .quote` circle, carousel
    active dot, gallery hover icon circle, `#d291bc` 45deg gradient overlays
    (hero 68% width, counter/footer full width, all `opacity: .3`),
    `.package-program:after` hover overlay (opacity .5), and the **entire
    footer background**.
  - Light mauve circle: **#f7ebf3** — `.services .icon` background (100px
    circles).
  - Dark: **#090808** — `.ftco-bg-dark` counter band base. Headings **#000**
    (weight 400, line-height 1.4). Body text **#b3b3b3** (16px, line-height
    1.8); `span` default #bfbfbf; pricing list #4d4d4d; `.block-7` shadow
    rgba(0,0,0,0.05); testimonial text rgba(0,0,0,0.8).
  - Light: **#f8f9fa** — `bg-light` services / pricing / blog sections.
  - Fonts: **"Work Sans"** (body 16px/1.8 weight 400; hero h1 80px weight
    200; heading-section h2 60px weight 300 → 28px on small screens; brand
    22px uppercase letter-spacing 2px weight 300; nav links 14px weight 300).
    Google Fonts `<link>` in index.html.
  - Buttons: **pill** — `.btn-primary { border-radius: 30px }`, 13px base
    font; `.btn.btn-primary`: bg #d291bc, `1px solid #d291bc` border, white
    text, hover → transparent bg + #d291bc text; `.btn-primary` (pricing/
    package context): uppercase, weight 600, `letter-spacing: 1px`; pricing
    buttons full-width (`d-block`, py-4); hero button `p-3 px-4`.
  - Section rhythm: `.ftco-section { padding: 7em 0 }` (6em on small); hero
    full-viewport (`js-fullheight`); `.ftco-intro` cover image; `.block-20`
    - `.gallery` tiles 270px tall; `.package-program .img` 400px; footer
      `padding: 4em 0`; counter `padding: 7em 0`.
  - Micro-detail: 45deg brand gradient overlays (`.overlay`), AOS
    fade-up/fade-left entrance animations (`ftco-animate`), blog white card
    overlapping its image by 40px, typewriter caret, `body { border-top:
2px solid #dee2e6 }`.
- **Recreation decisions:** navbar = transparent over hero (absolute top),
  brand icon (lucide Flower2 or inline lotus SVG) + "Shanti" (22px uppercase
  tracking 2px weight 300) + Home(active)/Classes/Schedule/About/Blog/Contact
  links (14px weight 300); on scroll → fixed white bar with soft shadow,
  active link mauve; mobile → dark #000 bar with white links + accessible
  toggler (aria-expanded). Hero = full-viewport cover photo (picsum) + 45deg
  #d291bc→transparent overlay (68% width, opacity .3), typewriter h1 (80px
  weight 200, rotating phrases as in the original), h2 "Do Yoga today for a
  better tomorrow", pill "15 Day Free Trial" button; intro = cover photo band
  (picsum) with right-aligned heading, paragraph and 5-checkmark do-list
  (lucide CheckCircle2, 22px mauve; 24px weight 300 labels); services =
  bg-light row of 4 cards with 100px #f7ebf3 circles (lucide HeartPulse,
  Flower2, Brain, Sparkles icons at 44px mauve) + h3 + lorem; programs =
  6-col grid (3×2 on lg) of 400px cover photos with mauve hover overlay
  (50%) + white centered title/description fade-in, subheading "Yoga Classes"
  - h2 "Choose Your Level & Focus"; pricing = bg-light 3 white cards with
    soft shadow, uppercase card title, mauve `$` + number, "For 1 Year/Month/
    Week" excerpt, "Enjoy All The Features" mini-heading, 4 features list, and
    full-width pill "Get Started"; testimonial = 5-slide carousel (accessible:
    dots + prev/next, aria-labels) with 110px round avatars, name + "Customer",
    quote text, and a 40px mauve circle quote badge offset left; counter =
    dark (#090808) parallax band with count-up stats (Happy Customers, Yoga
    Workshops, Years of Experience, Lesson Conducted); blog = bg-light 3 cards:
    270px cover photo + overlapping white card (day in 58px mauve weight 300,
    month/year muted, h3 18px, lorem); gallery = 4 square-ish (270px) photo
    tiles with hover 60px mauve Instagram circle (lucide Instagram); footer =
    **mauve #d291bc** with logo, address, 3 social circles (Twitter/Facebook/
    Instagram), bottom bar with repo-standard credit; loader = circular SVG
    spinner with mauve stroke. Images `picsum.photos/seed/shanti-N/w/h`; fonts
    Work Sans via Google Fonts `<link>`; icons via lucide-react (Flower2,
    CheckCircle2, HeartPulse, Brain, Sparkles, Instagram, Twitter, Facebook,
    Quote, Menu).

Shanti lives in `apps/shanti` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Transparent navigation bar

The system SHALL render a transparent navbar over the hero with the site
brand, primary links, and a scroll state that turns it into a fixed white bar.

#### Scenario: Navbar content

- **GIVEN** the Shanti page is rendered
- **WHEN** the navbar is displayed at the top of the page
- **THEN** it SHALL be transparent over the hero
- **AND** it SHALL show the brand "Shanti" with a lotus-style icon on the left
- **AND** it SHALL show the links Home (active), Classes, Schedule, About,
  Blog, and Contact
- **AND** the active link SHALL be in the brand mauve (#d291bc) color

#### Scenario: Scrolled navbar

- **GIVEN** the navbar is displayed
- **WHEN** the user scrolls down the page
- **THEN** the navbar SHALL become a fixed bar with a white background and a
  soft shadow
- **AND** its links SHALL remain readable with the active link in mauve

#### Scenario: Mobile navigation

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the toggler
- **THEN** the navigation links SHALL be revealed/collapsed with the
  appropriate aria-expanded state
- **AND** the collapsed bar SHALL use a dark background with white links

### Requirement: Full-viewport typewriter hero

The system SHALL render a full-height hero with a photographic background,
mauve gradient overlay, rotating typewriter headline, subheading, and a pill
CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL be full-viewport height with a cover background image and
  a 45-degree mauve (#d291bc) gradient overlay on the left side
- **AND** it SHALL show a large thin headline (weight ~200) that types out
  and rotates between the phrases "Inspiration For Joyful Living.",
  "Effective Therapy Against Stress.", and "Flexibility is A Second Power."
- **AND** it SHALL show the subheading "Do Yoga today for a better tomorrow"
- **AND** it SHALL show a pill-shaped "15 Day Free Trial" button in the brand
  mauve color

### Requirement: Intro section with checklist

The system SHALL render an image-backed intro section with a right-aligned
heading, paragraph, and a five-item benefit checklist.

#### Scenario: Intro content

- **GIVEN** the intro section is displayed
- **WHEN** the section renders
- **THEN** it SHALL use a full-width cover background image
- **AND** it SHALL show the heading "Why You Should Go To Yoga"
- **AND** it SHALL show five checklist items with mauve check icons: "Yoga
  boosts brain power", "Yoga helps you to breathe better", "Yoga improves
  your strength", "Yoga helps you to focus", and "Yoga helps give meaning to
  your day"

### Requirement: Services row

The system SHALL render a light-background services row of four cards with
circular mauve icons.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** the four cards render
- **THEN** each card SHALL show a 100px circular icon background (#f7ebf3)
  with a mauve (#d291bc) icon, a heading, and a short description
- **AND** the headings SHALL be Healthy Lifestyle, Body & Mind Balance,
  Meditation Practice, and Edeology

### Requirement: Program grid with hover reveal

The system SHALL render a "Choose Your Level & Focus" grid of six photo cards
that reveal a mauve tint and white text on hover.

#### Scenario: Section header

- **GIVEN** the programs section is displayed
- **WHEN** its heading area renders
- **THEN** it SHALL show the small uppercase subheading "Yoga Classes" and the
  heading "Choose Your Level & Focus"

#### Scenario: Program cards

- **GIVEN** the programs grid is displayed
- **WHEN** the six cards render
- **THEN** each card SHALL be a tall photo (400px) with a title: Group
  Lessons, Yoga For Beginners, Yoga For Pregnant, Yoga For Couples, Bikram
  Yoga, and Yoga Barre

#### Scenario: Hover reveal

- **GIVEN** a program card is displayed
- **WHEN** the user hovers or focuses it
- **THEN** a semi-transparent mauve overlay SHALL cover the photo
- **AND** the white centered title and description SHALL fade in

### Requirement: Membership pricing cards

The system SHALL render a "Membership Cards" section with three white pricing
cards.

#### Scenario: Pricing cards content

- **GIVEN** the pricing section is displayed
- **WHEN** the three cards render
- **THEN** each card SHALL show an uppercase title (Year Card / Monthly Card /
  Weekly Card), a price with a mauve dollar sign (449 / 200 / 85), a "For 1
  Year" / "For 1 Month" / "For 1 Week" excerpt, the label "Enjoy All The
  Features", a four-item feature list, and a full-width pill "Get Started"
  button

#### Scenario: Feature lists

- **GIVEN** a pricing card is displayed
- **WHEN** its feature list renders
- **THEN** the Year Card SHALL list Onetime Access To All Club, Group
  Trainer, Book A Group Class, and Fitness Orientation
- **AND** the Monthly and Weekly cards SHALL list Group Classes, Discuss
  Fitness Goals, Group Trainer, and Fitness Orientation

### Requirement: Testimonial carousel

The system SHALL render a "Successful Stories" carousel of testimonial cards
with circular quote badges and avatars.

#### Scenario: Testimonial content

- **GIVEN** the testimonial section is displayed
- **WHEN** the carousel renders
- **THEN** it SHALL show the small uppercase subheading "Testimony" and the
  heading "Successful Stories"
- **AND** each slide SHALL show a quote with a 40px mauve circular quote
  badge, a circular avatar photo, a name, and a "Customer" label
- **AND** the carousel SHALL advance between slides (auto or via controls)
  with accessible navigation (dots and/or arrows)

### Requirement: Dark counter band

The system SHALL render a dark parallax counter band with four animated
statistics.

#### Scenario: Counter content

- **GIVEN** the counter section is displayed
- **WHEN** the band renders
- **THEN** it SHALL have a near-black (#090808) background with a cover photo
  and a mauve gradient overlay
- **AND** it SHALL show four stats: 5000 Happy Customers, 4560 Yoga
  Workshops, 570 Years of Experience, and 900 Lesson Conducted
- **AND** the numbers SHALL count up when they enter the viewport

### Requirement: Blog posts row

The system SHALL render a "Recent Posts" row of three blog cards with an
overlapping date card.

#### Scenario: Blog card content

- **GIVEN** the blog section is displayed
- **WHEN** the three cards render
- **THEN** each card SHALL show a 270px cover photo with a white text card
  overlapping it
- **AND** the date SHALL show a large mauve day number (58px), the year, and
  the month
- **AND** each card SHALL show the title "Young Women Doing Yoga" and a short
  description

### Requirement: Photo gallery strip

The system SHALL render a "See the latest photos" gallery of four photo tiles
with hover-revealed Instagram icons.

#### Scenario: Gallery tiles

- **GIVEN** the gallery section is displayed
- **WHEN** the four tiles render
- **THEN** each tile SHALL be a cover photo (270px tall)
- **AND** hovering or focusing a tile SHALL reveal a 60px mauve circle with a
  white Instagram icon

### Requirement: Mauve footer

The system SHALL render the signature mauve footer with logo, address, social
links, and the bottom credit bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL have the brand mauve (#d291bc) background with white text
- **AND** it SHALL show the brand name "Shanti" (30px, weight 300)
- **AND** it SHALL show the address line "203 Fake St. Mountain View, San
  Francisco, California, USA"
- **AND** it SHALL show three circular social icon links (Twitter, Facebook,
  Instagram)
- **AND** the bottom bar SHALL carry the repo-standard footer credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Shanti app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose navbar, hero, intro, services, programs,
  pricing, testimonial, counter, blog, gallery, and footer inside the main
  landmark in the original's order
- **AND** the document title SHALL be "Shanti — Yoga & Wellness"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- shanti` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (navbar → hero → intro →
      services → programs → pricing → testimonial → counter → blog → gallery
      → footer).
- [ ] Design tokens applied: brand mauve #d291bc (links, buttons, active nav,
      service icons, checkmarks, blog day, price sup, quote badge, carousel
      dot, gallery hover icon, overlays, footer bg), circle bg #f7ebf3,
      dark #090808 counter, light #f8f9fa section alternation, headings #000,
      body #b3b3b3, Work Sans (headings weight 300/200, body 400), pill
      buttons (radius 30px, 1px mauve border, hover = transparent + mauve
      text).
- [ ] Navbar is transparent over the hero, becomes fixed white on scroll
      (active link mauve), and switches to dark with white links on mobile
      (aria-expanded toggler).
- [ ] Hero is full-viewport with cover photo, 45deg mauve gradient overlay,
      rotating typewriter headline (80px, weight 200), subheading, and pill
      "15 Day Free Trial" button.
- [ ] Intro band uses a cover background image with the "Why You Should Go To
      Yoga" heading and the five mauve-check benefit items.
- [ ] Services row renders four cards with 100px #f7ebf3 circles and mauve
      44px icons.
- [ ] Programs grid renders six 400px photo cards with mauve hover overlay +
      white centered text reveal, under "Yoga Classes / Choose Your Level &
      Focus".
- [ ] Pricing renders three white shadowed cards (Year/Monthly/Weekly) with
      mauve $, feature lists, and full-width pill "Get Started" buttons.
- [ ] Testimonial carousel renders slides with quote badge, avatar, name,
      "Customer" label, and accessible controls.
- [ ] Counter band is dark with a cover photo, mauve overlay, and four
      count-up stats.
- [ ] Blog renders three cards with overlapping white text cards, mauve day
      numbers, and muted month/year.
- [ ] Gallery renders four photo tiles with hover-revealed mauve Instagram
      circles.
- [ ] Footer is mauve #d291bc with brand, address, three social circles, and
      the repo-standard bottom credit.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Yogalax), preview URL, tokens,
      and renames.
