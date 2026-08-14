# Template: Fiduciary (Finance & Consultation)

## Purpose

Fiduciary is a single-page finance-and-consultation corporate website template
in the free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Unioncorp" design (see TEMPLATES.md — listed THREE times, all
three rows are the same source slug: line 632 in the Bootstrap 5 section, line
1395 in the Consulting section, and line 1763 in the Finance section; implement
ONE app and mark ALL THREE rows `[x]` at bookkeeping), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a professional, trust-focused finance/consulting corporate
site: a dark-navy top info bar (phone + location + social squares), a white
navbar ("UNIONCORP. Finance & Consultation" wordmark with the "corp." segment
in blue, uppercase links, "Menu" toggler), a full-viewport hero slider with two
slides (dark-blue overlay over business-team photos, 60px white headline with a
blue-highlighted word, "Get Started" white button, dot pagination), a 2×2 grid
of service cards (one card inverted solid blue) beside an "About" text block
with a "Learn More" blue button, a parallax image section with a pulsing
"Watch Video" play circle, an 8-item services grid (white icon plaques with
blue icons + 24px titles), a case-studies photo gallery with hover overlays and
green corner icons, a blue-overlaid statistics band (4 animated counters),
a leadership team (circular photos, name + uppercase blue position), a
testimonial slider (white cards, center slide inverted blue), a 4-card blog
row, a blue-overlaid "Looking for business opportunity?" CTA banner, and a dark
footer (brand, Services links, Recent Posts, contact block, social icons,
copyright line). Fiduciary recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Unioncorp" — free Bootstrap 5 finance & consultation
  website template (source: https://colorlib.com/wp/template/unioncorp/;
  page title "Unioncorp - Finance & Consultation"; listed THREE times in
  TEMPLATES.md — line 632 [Bootstrap 5], line 1395 [Consulting], line 1763
  [Finance], all `- [ ]`, same slug → one app, mark all three rows `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/unioncorp/ (HTTP
  200, full rendered DOM, 49.9KB HTML + `css/style.min.css` (257KB, Bootstrap
  5 + custom theme) + flaticon.css + tiny-slider.css + animate/aos/glightbox/
  leaflet/datepicker + Poppins 300–700 Google Font + font-awesome 7.0.1,
  extracted 2026-08-14 during prep). The TEMPLATES.md screenshot
  (`unioncorp-colorlib-template.jpg`, AVIF — served as
  `https://colorlib.com/wp/wp-content/uploads/sites/2/unioncorp-colorlib-template.jpg`,
  viewed in the browser) confirms the design: dark-navy topbar (contact info
  left, social icons right), white header with "UNIONCORP FINANCIAL &
  CONSULTATION" logo + nav (Home About Services Work Pricing Blog Contact),
  full-width hero banner with headline/subtext/GET STARTED button over a photo
  of business professionals, and below the fold a row with a white card
  ("Professional Consultants"), a solid blue card ("Comprehensive Services"),
  and an "About Unioncorp" text block ("More than 40M+ Trusted…") — circular
  icon tops peeking from the next stats section at the bottom edge.
- **Section order (1:1, LIVE DOM — comments stripped):**
  1. Top info bar (`div.top-wrap` — bg `#052f48` dark navy, padding 0):
     left two contact blocks (`div.con`, 14px, `rgba(255,255,255,.6)`):
     **"Call Us: +2 392 3929 210"** (fa-phone icon, `#4f86f9`) and
     **"Location: San Francisco, California, USA"** (fa-map icon); right:
     `p.ftco-social` with four 44px square links (`#4f86f9` bg, white 16px
     icons, margin 0 2px) — fa-x-twitter, fa-facebook, fa-google,
     fa-instagram + a dark-mode toggle button (moon icon, aria-label
     "Toggle dark mode").
  2. Navbar (`nav.navbar.navbar-expand-lg.ftco-navbar-light` — white bg,
     position absolute, top 44px, z-index 3): `a.navbar-brand` —
     **"Union<small>corp.</small>"** (27px, weight 800, uppercase, `#000`,
     the `<small>` segment `#4f86f9`) + `span` **"Finance & Consultation"**;
     `button.navbar-toggler` **"Menu"** (fa-bars icon, uppercase, 16px,
     letter-spacing .1em); `ul.navbar-nav.ms-auto` — 7 links (15px, padding
     1.7rem 25px, `rgba(0,0,0,.8)`; active `#4f86f9`): **Home** (`a.active`),
     About, Services, Work, Pricing, Blog, Contact (hrefs to sub-pages in the
     reference — anchors/placeholders in the one-pager); `div.navbar-mobile-
social` (X, Facebook, Instagram + dark-mode toggle) shown in the
     collapsed mobile menu.
  3. Hero slider (`section.slider-hero` — height 100vh, Tiny Slider): two
     `div.work` slides, each `div.img` (100vh, background image `images/bg_1.
webp` / `bg_2.webp` — business-team photos; `:after` overlay `#052c43`
     opacity .5):
     - Slide 1: h1 **"We're Always Here To Give Financial Help!"** (60px,
       weight 400, white, line-height 1.2; 40px on small screens) + lorem
       paragraph (rgba(255,255,255,.8)) + `a.btn.btn-white.p-4.py-3`
       **"Get Started"** (white bg, 1px white border, `#4f86f9` text; hover
       inverts).
     - Slide 2: h1 **"Build Your Financial Plan With Our Specialists"** —
       the word **"Financial"** wrapped in `<span>` colored `#4f86f9`
       (headline highlight pattern: `<span>` in blue).
     - `div.tns-nav` below: 10px round dots (`#ddd`, active `#4f86f9`),
       centered, bottom 60px.
  4. About + services grid (`section.ftco-section` — padding 8em 0;
     `div.row.g-lg-5`): right column `div.col-lg-6.order-lg-last.heading-
section` (about text block): `span.subheading` **"About Union
     Corporation"** (13px uppercase, weight 600, letter-spacing 1px,
     rgba(0,0,0,.3)) + h2 **"More than 40M+ Trusted Our Financial &
     Consultation Institution"** (38px, weight 500, line-height 1.4) +
     lorem paragraph + `a.btn.btn-primary.py-3.px-4` **"Learn More"**
     (solid `#4f86f9`, white text; hover → transparent bg + blue text).
     Left column `div.col-lg-6` → inner `div.row` with four
     `div.col-md-6.services-wrap` cards (`.services` — padding 40px, radius
     5px, shadow `0 5px 25px -2px rgba(0,0,0,.03)`; `div.icon` 64px circle
     `#e3ecfe` with 40px flaticon in `#4f86f9`; h2 20px weight 500):
     1. **Professional Consultants** (icon flaticon-accountant)
     2. **Comprehensive Services** (class `services active` → bg `#4f86f9`,
        white text/icon — the inverted blue card)
     3. **A Culture that Delivers**
     4. **Industry Experience**
  5. Image section (`section.ftco-section.ftco-image.img` — bg image
     `images/bg_4.webp`, parallax): eyebrow **"About Union Corporation"**,
     h2 **"Quality Makes the Belief for Customers"** (white on image),
     lorem paragraph, "Watch Video" — `div.icon-video` 80px circle
     (`#4f86f9` bg... base rule rgba(255,255,255,.15), hover `#4f86f9`,
     pulse animation 2s infinite) with white play icon.
  6. Services list (`section.ftco-section.bg-light` — bg `#f9faff`):
     centered heading — `span.subheading` **"Services"** + h2 **"Our
     Exclusive Services We Offer For You"**; `div.row.justify-content-center`
     with 8 items (each `div.col-md-3.text-center` → `div.flow-wrap`):
     `div.icon` 130×110 white plaque (radius 4px, shadow
     `0 5px 25px -2px rgba(0,0,0,.05)`, `:after` white notch triangle
     pointing down) holding a 70px flaticon in `#4f86f9`; `div.text`: h2
     (24px, weight 500) + lorem p: **Financial Planning** (flaticon-
     accounting), **Investments Management**, **Business Loan**, **Taxes
     Consulting**, **Insurance Consulting**, **Retirement Planning**,
     **Risk Management**, **Technology Consulting**.
  7. Case studies (`section.ftco-gallery.ftco-no-pb.ftco-section`):
     centered heading — eyebrow **"Case Studies"** + h2 **"We Take Every
     Case Studies Very Seriously"**; gallery row of 4 `div.gallery-wrap`
     items (height 340px, bg photos; hover: `:after` black overlay + white
     text fade-in; `div.icon` 40×40 radius 4px `#3bd381` with white icon,
     absolute top-right, fades in): each labeled **"Business Finance
     Consulting"** (24px white weight 500).
  8. Statistics band (`section.ftco-section-counter.img` — bg image
     `images/bg_3.webp` + `div.overlay` `#4f86f9` opacity .9; padding
     5em 0): eyebrow **"Great Reviews for our services"** + h2 **"Technical
     Statistics"** (white); `div.row` with 4 counters
     (`div.counter-wrap-2`, text-center): `.number` 44px weight 700 white
     letter-spacing 5px + `.caption` 14px weight 700 uppercase
     rgba(255,255,255,.8):
     - **60** — Year of Experienced
     - **9200** — Satisfied Customers
     - **5800** — Project Completed
     - **100** — Get Awards
       (numbers are static in the reference DOM; the count-up is JS — a
       static render is acceptable, or a lightweight count-up hook.)
  9. Leadership team (`section.ftco-section`): centered heading — eyebrow
     **"Meet Our Brilliant Minds"** + h2 **"Our Leadership Team"**; `div.row`
     with 4 `div.col-lg-3` staff cards (`div.staff`): `div.img` 200px circle
     (radius 50%, 10px `#f8f9fa` border, bg photo top-center), `div.text`
     (white, padding 110px 30px 30px, radius 4px, margin-top -100px, shadow
     `0 5px 25px -2px rgba(0,0,0,.01)`): h3 name 20px weight 500 + `span.
position` 14px uppercase weight 500 `#4f86f9` + short lorem bio:
     - **Jason Smith** — President & CEO
     - **Jeffrey Rockenson** — Executive Vice President
     - **Jason Smith** — General Manager
     - **Jason Smith** — Strategic Consultant
       (the reference repeats "Jason Smith" three times — use distinct
       fictional names to keep the same card structure).
  10. Testimonials (`section.ftco-section.testimony-section.bg-light`):
      centered heading — eyebrow **"Testimonial"** + h2 **"Happy
      Customers"**; Tiny Slider of 5 `div.testimony-wrap` cards (white,
      padding 30px, radius 4px, shadow `0 30px 33px -41px rgba(0,0,0,.24)`;
      `div.icon` 40px circle `#4f86f9` with white quote icon, absolute
      top -20px left 30px): lorem quote + **"Roger Scott"** + `span`
      **"Marketing Manager"**; the center slide in each 3-slide view gets
      `#4f86f9` bg + white text (Tiny Slider CSS) — optional fidelity
      detail; dot nav below (30px × 2px `#ddd` bars).
  11. Blog (`section.ftco-section`): centered heading — eyebrow **"Our
      Blog"** + h2 **"Recent From Blog"**; `div.row` with 4
      `div.col-lg-3.blog-entry` cards (white, radius 4px, overflow hidden):
      photo, `div.text` padding 30px: `div.meta` uppercase 12px (icons
      `#4f86f9`): **"Admin Jan. 27, 2030 3 Comments"**; h3.heading 20px
      weight 500 **"Incorporation is A Big Milestone for Your Business"**
      (hover `#4f86f9`); lorem excerpt; `span.btn-custom` 30×30 square
      `#e3ecfe` with blue arrow icon bottom-right (hover `#4f86f9`).
  12. Intro CTA banner (`section.ftco-intro-2.img` — bg image
      `images/bg_3.webp` + overlay `#4f86f9` opacity .8; padding 5em 0):
      `span.subheading` **"Prepare for takeoff"** (13px uppercase white) +
      h1 **"Looking for business opportunity?"** (30px weight 600 white) +
      `a.btn.btn-white.py-md-4.py-3.px-md-5.px-4` **"Get Started"**.
  13. Footer (`footer.ftco-footer` — dark; padding 7em 0 0; `div.overlay`
      black opacity .8 over bg image; text rgba(255,255,255,.9);
      `div.row` of 4 `div.col-md` widgets):
      - Widget 1 (brand): h2 **"Unioncorp. Finance & Consultation"** (logo
        style — white 24px, the "corp."-segment `#4f86f9`; `a.logo` 24px
        white) + lorem paragraph.
      - Widget 2 **"Services"** (h2 18px weight 500 white, margin-bottom
        40px): 9 links (rgba(255,255,255,.8), arrow/ion chevron 14px white)
        — Financial Planning, Investments Management, Business Loan, Taxes
        Consulting, Insurance Consulting, Retirement Planning, Risk
        Management, Technology Consulting, + one more.
      - Widget 3 **"Recent Posts"**: two entries (date **"Jan. 27, 2030"**
        - **"Admin"** + link **"Incorporation is a big milestone for
          business"**; 50×50 thumbnails).
      - Widget 4 **"Have a Questions?"**: address **"203 Fake St. Mountain
        View, San Francisco, California, USA"**, phone **"+2 392 3929
        210"**, email **"info@yourdomain.com"** (icons); `ul.ftco-footer-
social` — 30px square `#4f86f9` radius 4px links with white 17px
        icons (X/Twitter, Facebook, Instagram).
      - Copyright line: **"Copyright © 2025 All rights reserved | This
        template is made with by Colorlib"** → adapt per conventions
        (Component Dock link required; see notes below).
- **Design tokens extracted from `css/style.min.css` (+ Bootstrap 5
  defaults):**
  - Fonts: **Poppins** (300, 400, 500, 600, 700) — body AND headings
    (`body{font-family:Poppins,Arial,sans-serif}`); load via Google Fonts
    `<link>` in index.html.
  - Primary blue **#4f86f9** — brand/`small` wordmark, active nav link,
    `.btn.btn-primary` bg, icon-circle + flaticon color, `.services.active`
    card bg, counter band overlay (opacity .9), intro-CTA overlay (.8),
    staff `.position` color, footer logo segment + social squares, blog
    hover + meta icons, testimony icon circle, slider dot active, topbar
    social squares, icon-video hover.
  - Secondary green **#3bd381** — gallery hover corner icon bg, topbar
    `.btn-custom` accent, `.con .icon` accent.
  - Body bg **#f9faff** (also `.bg-light` sections); body text **#8c8c8c**
    (16px, line-height 1.8, weight 400).
  - Dark navy **#052f48** — topbar bg; **#052c43** — hero slide overlay
    (opacity .5).
  - Icon plaque bg **#e3ecfe** (light blue) — services card 64px circles,
    blog `.btn-custom` squares; staff photo ring **#f8f9fa** (10px border);
    subheading text rgba(0,0,0,.3).
  - Black **#000** — headings, navbar brand text, blog entry headings,
    footer overlay (opacity .8), gallery hover overlay.
  - Buttons: `.btn` base = Bootstrap radius `var(--bs-border-radius)`
    (.375rem ≈ 6px), padding .375rem .75rem (overridden per instance).
    `.btn.btn-primary` — solid #4f86f9 bg, white text, 1px #4f86f9 border;
    hover = transparent bg + blue text. `.btn.btn-white` — white bg, white
    1px border, #4f86f9 text; hover = transparent + white text. Hero /
    intro CTA use the large `.btn-white` variants (py-3/4, px-4/5).
  - Section rhythm: `.ftco-section` padding **8em 0**; `.ftco-section-
counter` and `.ftco-intro-2` 5em 0; `.ftco-footer` 7em 0 0.
  - Headings: `.heading-section h2` 38px weight 500 line-height 1.4;
    `.subheading` 13px uppercase weight 600 letter-spacing 1px
    rgba(0,0,0,.3) (white on image/overlay sections); hero h1 60px
    weight 400 line-height 1.2 (40px small screens), highlight `<span>`
    in #4f86f9.
  - Navbar: white, absolute, top 44px (sits over the hero, below the 44px
    topbar); links 15px, padding 1.7rem 25px, rgba(0,0,0,.8), active
    #4f86f9; brand 27px/800 uppercase black with blue `<small>`.
  - Cards: services `.services` padding 40px radius 5px soft shadow; icon
    circle 64px #e3ecfe, flaticon 40px #4f86f9; `.active` variant full
    #4f86f9 bg. `.flow-wrap` icon 130×110 white radius 4px + downward notch
    triangle, flaticon 70px #4f86f9; title 24px/500. Gallery items 340px
    tall, hover black overlay + white label + 40px #3bd381 icon (radius
    4px) top-right. Counters 44px/700 white letter-spacing 5px + 14px/700
    uppercase captions rgba(255,255,255,.8). Staff photo 200px circle
    with 10px #f8f9fa ring; card text padding 110px 30px 30px, radius 4px,
    margin-top -100px; position line 14px uppercase #4f86f9. Testimony
    cards white radius 4px padding 30px + 40px #4f86f9 quote circle
    top-left (top -20px, left 30px). Blog cards white radius 4px; text
    padding 30px; heading 20px/500; meta 12px uppercase.
  - Footer: dark (black overlay .8), white widget h2 18px/500 (mb 40px),
    links rgba(255,255,255,.8), social 30px squares #4f86f9 radius 4px.
  - Responsive: navbar collapses below lg (toggler "Menu" + fa-bars;
    mobile socials in the collapse); services grid 4-col → 2-col/1-col;
    hero h1 60px → 40px; stats 4-col → 2-col; staff/blog/testimonials
    4-col → 1-col stacking.
- **Visual design (screenshot `unioncorp-colorlib-template.jpg` + live
  render):** clean corporate finance aesthetic — dark-navy topbar and
  white header over a full-bleed hero photo of business professionals
  (cool desaturated blues); blue (#4f86f9) as the single strong accent
  across buttons, icons, and inverted cards; generous whitespace, Poppins
  typography (bold uppercase wordmark, 38px section headings, small gray
  13px uppercase eyebrows); cards with soft shadows and 4–6px radii;
  alternating white / #f9faff section backgrounds; blue-overlaid photo
  bands for stats and the closing CTA; dark footer.
- **Recreation decisions:** all photos → seeded picsum placeholders
  (`picsum.photos/seed/fiduciary-<n>/<w>/<h>` — hero business/city crops,
  gallery, staff portraits, blog thumbs); flaticon + font-awesome icons →
  lucide-react equivalents (Phone, MapPin, Play, Briefcase, TrendingUp,
  Landmark, FileText, Shield, Calculator, PiggyBank, ChartLine/Activity,
  Cpu/MonitorCog, Quote, ArrowRight, Calendar, User, MessageSquare,
  ChevronRight, plus social icons X/Twitter, Facebook, Instagram, Globe);
  Tiny Slider → a lightweight custom slider hook for hero (2 slides,
  dots, auto-advance optional) and testimonials (5 cards, prev/next or
  dots, cleanup on unmount); counters → static numbers or a simple
  count-up hook (values fixed in the DOM: 60 / 9200 / 5800 / 100); the
  parallax `background-attachment: fixed` image sections → fixed-attachment
  background divs or plain image backgrounds (fixed parallax is flaky on
  mobile — degrade gracefully); dark-mode toggle → optional (the reference
  has a [data-bs-theme=dark] variant — per monorepo conventions dark mode
  is class-based `dark:` utilities; can be omitted from v1); sub-page
  nav links (About/Services/Work/Pricing/Blog/Contact) → anchor
  placeholders in the one-pager; original copy paraphrased keeping the
  same content kinds (contact line, eyebrow + headline + blurb + CTA,
  card title + blurb, counter number + caption, name + position + bio,
  quote + author + role, blog meta + title + excerpt); no assets copied.
- **Skipped/reference notes:** the reference DOM repeats "Jason Smith"
  for three of four leadership cards and repeats the blog entry title
  four times — use distinct fictional names/titles to fill the same
  slots; the counter numbers are static in the DOM (count-up is JS);
  "Great Reviews for our services" is the stats band eyebrow; the hero
  `span` highlight on slide 2 wraps "Financial" in blue; the gallery
  hover overlay + green corner icon and the testimonial center-card blue
  inversion are hover/active-state details worth matching; the copyright
  line credits Colorlib in the reference — per monorepo conventions the
  app's footer must ALSO link Component Dock
  (https://www.componentdock.com/); adapt the "made with ♥" line to
  Component Dock branding.

Fiduciary lives in `apps/fiduciary` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Top info bar

The system SHALL render a dark-navy top bar with contact info on the left
and social icons on the right.

#### Scenario: Topbar content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the top bar is displayed
- **THEN** it SHALL show on a #052f48 background the phone line "Call Us:
  +2 392 3929 210" with a phone icon and the location line "Location: San
  Francisco, California, USA" with a map-pin icon (14px,
  rgba(255,255,255,.6))
- **AND** it SHALL show four 44px square social links (#4f86f9 bg, white
  icons) for X/Twitter, Facebook, Google, and Instagram
- **AND** on narrow viewports the bar SHALL remain usable (text + icons
  wrap/stack)

### Requirement: Navigation bar

The system SHALL render a white navbar with the brand wordmark, seven nav
links, and a mobile toggler.

#### Scenario: Navbar content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand "Fiduciary" with a blue-accented segment
  (e.g. "Fidu<blue>ciary</blue>" or "Fiduciary." + "Finance & Consultation"
  tagline — mirror the reference's black 27px/800 uppercase wordmark with
  the `<small>` segment in #4f86f9)
- **AND** it SHALL list the links Home (active), About, Services, Work,
  Pricing, Blog, Contact (15px, rgba(0,0,0,.8), active in #4f86f9)
- **AND** on mobile it SHALL collapse behind a "Menu" toggler with a bars
  icon

### Requirement: Hero slider

The system SHALL render a full-viewport hero slider with two slides, each
with a headline, intro paragraph, and a "Get Started" white button, plus
dot pagination.

#### Scenario: Hero content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the hero slider is displayed
- **THEN** it SHALL show slide 1 with the headline "We're Always Here To
  Give Financial Help!" and slide 2 with "Build Your Financial Plan With
  Our Specialists" (60px white weight 400, one word highlighted in
  #4f86f9 on slide 2)
- **AND** each slide SHALL show a lorem intro paragraph and a large white
  "Get Started" button (white bg, #4f86f9 text)
- **AND** the slides SHALL sit under a dark-blue overlay (#052c43 at ~50%
  opacity) over the background photo
- **AND** round dot pagination (10px, active #4f86f9) SHALL be visible
  below

#### Scenario: Hero navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user clicks a pagination dot
- **THEN** the slider SHALL switch to the corresponding slide
- **AND** any auto-advance timer SHALL be cleaned up on unmount

### Requirement: About + services grid

The system SHALL render a two-column section: a 2×2 grid of four service
cards (one inverted solid blue) and an about text block with a "Learn
More" button.

#### Scenario: Section content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show four service cards — "Professional Consultants",
  "Comprehensive Services" (solid #4f86f9 bg with white text/icon),
  "A Culture that Delivers", "Industry Experience" — each with a 64px
  #e3ecfe icon circle (blue icon) and a 20px/500 title
- **AND** it SHALL show the about block with the eyebrow "About Union
  Corporation", the headline "More than 40M+ Trusted Our Financial &
  Consultation Institution" (38px weight 500), a paragraph, and a solid
  blue "Learn More" button
- **AND** on desktop the cards SHALL sit left and the text block right
  (the reference uses order-lg-last on the text column)

### Requirement: Image section with video prompt

The system SHALL render a parallax image section with a headline, copy,
and a pulsing "Watch Video" play circle.

#### Scenario: Image section content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the image section is displayed
- **THEN** it SHALL show the eyebrow "About Union Corporation", the
  headline "Quality Makes the Belief for Customers", a lorem paragraph,
  and an 80px circular play button (pulsing, white icon) labeled "Watch
  Video"

### Requirement: Services grid

The system SHALL render eight services, each with a white icon plaque and
a title.

#### Scenario: Services content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show on a #f9faff background the heading "Our
  Exclusive Services We Offer For You"
- **AND** it SHALL list eight services in a 4-column grid: Financial
  Planning, Investments Management, Business Loan, Taxes Consulting,
  Insurance Consulting, Retirement Planning, Risk Management, Technology
  Consulting
- **AND** each service SHALL show a 130×110 white plaque (radius 4px,
  notch below) with a 70px blue icon and a 24px weight-500 title with a
  short blurb

### Requirement: Case studies gallery

The system SHALL render a photo gallery of four case-study items with
hover overlays and a green corner icon.

#### Scenario: Gallery content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "We Take Every Case Studies Very
  Seriously" with the eyebrow "Case Studies"
- **AND** it SHALL show four 340px-tall photo items labeled "Business
  Finance Consulting"
- **AND** on hover each item SHALL darken (black overlay) while the label
  and a 40px #3bd381 icon in the top-right corner fade in

### Requirement: Statistics band

The system SHALL render a blue-overlaid statistics band with four
counters.

#### Scenario: Counter content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the statistics band is displayed
- **THEN** it SHALL show on a photo with a #4f86f9 overlay (~90%) the
  eyebrow "Great Reviews for our services" and the headline "Technical
  Statistics"
- **AND** it SHALL show four counters — 60 "Year of Experienced", 9200
  "Satisfied Customers", 5800 "Project Completed", 100 "Get Awards" —
  each as a 44px/700 white number (letter-spacing 5px) over a 14px
  uppercase caption

### Requirement: Leadership team

The system SHALL render four staff cards with circular photos, names,
positions, and short bios.

#### Scenario: Team content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the leadership section is displayed
- **THEN** it SHALL show the heading "Our Leadership Team" with the
  eyebrow "Meet Our Brilliant Minds"
- **AND** it SHALL show four staff cards, each with a 200px circular
  photo (10px light ring), a 20px/500 name, an uppercase 14px #4f86f9
  position line, and a short bio — e.g. President & CEO, Executive Vice
  President, General Manager, Strategic Consultant (use distinct
  fictional names; the reference repeats "Jason Smith")

### Requirement: Testimonials

The system SHALL render a testimonial slider with quote cards and
author attribution.

#### Scenario: Testimonial content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the testimonial section is displayed
- **THEN** it SHALL show on a #f9faff background the heading "Happy
  Customers" with the eyebrow "Testimonial"
- **AND** it SHALL show at least one quote card with a 40px #4f86f9 quote
  icon, a lorem quote, and the attribution "Roger Scott — Marketing
  Manager"
- **AND** slider controls SHALL let the user move between cards with
  timers cleaned up on unmount

### Requirement: Blog

The system SHALL render four blog cards with meta info, titles, and
excerpts.

#### Scenario: Blog content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the blog section is displayed
- **THEN** it SHALL show the heading "Recent From Blog" with the eyebrow
  "Our Blog"
- **AND** it SHALL show four cards, each with a photo, the meta line
  "Admin Jan. 27, 2030 3 Comments" (12px uppercase), the title
  "Incorporation is A Big Milestone for Your Business" (20px/500, hover
  #4f86f9), an excerpt, and a small #e3ecfe square arrow button (hover
  #4f86f9)

### Requirement: Intro CTA banner

The system SHALL render a blue-overlaid CTA banner with a headline and a
large white "Get Started" button.

#### Scenario: CTA content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the CTA banner is displayed
- **THEN** it SHALL show the eyebrow "Prepare for takeoff", the headline
  "Looking for business opportunity?" (30px weight 600, white), and a
  large white "Get Started" button

### Requirement: Footer

The system SHALL render a dark footer with brand, services links, recent
posts, a contact block, social icons, and a copyright line linking
Component Dock.

#### Scenario: Footer content

- **GIVEN** the Fiduciary page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand + a short about paragraph, a "Services"
  widget (the eight service names as links), a "Recent Posts" widget (two
  dated entries), and a "Have a Questions?" widget with the address "203
  Fake St. Mountain View, San Francisco, California, USA", phone "+2 392
  3929 210", and email "info@yourdomain.com"
- **AND** it SHALL show 30px square #4f86f9 social links (X/Twitter,
  Facebook, Instagram)
- **AND** the copyright line SHALL read "Copyright © <current year> All
  rights reserved" and SHALL include a Component Dock link
  (https://www.componentdock.com/) in place of the reference's Colorlib
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Fiduciary app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar, navbar, hero slider, about
  - services grid, image section, services grid, case studies gallery,
    statistics band, leadership team, testimonials, blog, intro CTA banner,
    and footer in the reference order
- **AND** the document title SHALL be "Fiduciary — Finance & Consultation"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/fiduciary`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/fiduciary`)
- [ ] Section order matches the reference 1:1 (topbar → navbar → hero slider → about + services grid → image section → services grid → case studies gallery → statistics band → leadership team → testimonials → blog → intro CTA → footer)
- [ ] Design tokens from the reference used in `@theme` (primary #4f86f9, secondary #3bd381, light bg #f9faff, topbar navy #052f48, overlay navy #052c43, icon plaque #e3ecfe, body text #8c8c8c; Poppins 300–700 via Google Fonts)
- [ ] Topbar: #052f48 bar, phone + location lines with icons, four 44px #4f86f9 social squares (X/Facebook/Google/Instagram)
- [ ] Navbar: white, brand wordmark with blue segment + "Finance & Consultation", 7 links (Home active in #4f86f9), "Menu" toggler on mobile
- [ ] Hero slider: 100vh, 2 slides (60px white h1, blue-highlighted word on slide 2, lorem p, large white "Get Started" btn), #052c43 overlay, 10px dots (active #4f86f9), timer cleanup
- [ ] About + services: 2×2 cards (Professional Consultants / Comprehensive Services [solid blue] / A Culture that Delivers / Industry Experience) with 64px #e3ecfe icon circles; right-aligned about block (eyebrow "About Union Corporation", 38px headline, "Learn More" blue btn)
- [ ] Image section: parallax bg, "Quality Makes the Belief for Customers", pulsing 80px circular play icon ("Watch Video")
- [ ] Services grid: #f9faff bg, 8 services in 4-col grid, 130×110 white plaques with 70px blue icons, 24px titles
- [ ] Case studies: 4 × 340px photo items "Business Finance Consulting", hover black overlay + white label + 40px #3bd381 corner icon
- [ ] Statistics band: photo + #4f86f9 overlay, 4 counters (60/9200/5800/100) 44px/700 white + uppercase captions
- [ ] Leadership: 4 staff cards, 200px circular photos (10px light ring), name 20px/500, uppercase #4f86f9 position, bio (distinct names)
- [ ] Testimonials: #f9faff bg, "Happy Customers", quote cards with 40px #4f86f9 quote icon, "Roger Scott — Marketing Manager", slider with cleanup
- [ ] Blog: 4 cards (photo, meta "Admin Jan. 27, 2030 3 Comments", 20px title hover-blue, excerpt, #e3ecfe arrow square)
- [ ] Intro CTA: photo + #4f86f9 overlay, "Prepare for takeoff" / "Looking for business opportunity?" / large white "Get Started"
- [ ] Footer: dark, brand + about, Services links, Recent Posts (2), "Have a Questions?" (address/phone/email), 30px #4f86f9 social squares, "Copyright © <year> All rights reserved" + Component Dock link (https://www.componentdock.com/)
- [ ] Responsive: navbar collapses (toggler), services 4-col → 2-col/1-col, hero h1 60px → 40px, stats 4-col → 2-col, staff/blog 4-col → 1-col
- [ ] No copied ColorLib assets; photos via picsum seeded `fiduciary-<n>`; icons via lucide-react; no colorlib.com strings in apps/fiduciary
- [ ] Bookkeeping: mark ALL THREE Unioncorp rows (lines 632, 1395, 1763) `[x]` with the fiduciary surge URL; `npm run readme:status`
