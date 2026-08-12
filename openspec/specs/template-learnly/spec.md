# Template: Learnly (Online Education / Bootstrap 5 Template)

## Purpose

Learnly is a single-page online education / learning website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Academia" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Academia" — online education / learning website
  template (source: https://colorlib.com/wp/template/academia/). TEMPLATES.md
  has TWO copies of this item (lines 548 in the "Bootstrap 5" section and
  1619 in the "Education" section — mark EVERY copy `[x]` when done).
  `academica` (line 1620) is a DIFFERENT template; the NEW name "academia"
  was already taken by the Edumark recreation (`apps/academia` +
  `openspec/specs/template-academia` = ColorLib edumark) — the recreation of
  THIS template uses the new name **Learnly**.
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/academia/
  (HTTP 200, ~68.6 KB rendered DOM, title "Academia - Free Bootstrap 5
  Template by Colorlib"). Stylesheets: `css/style.css` (248 KB, custom +
  embedded Bootstrap 5 utilities), `css/aos.css`, `css/glightbox.min.css`,
  bootstrap-icons CDN (1.13.1). All icons are bootstrap-icons (`bi bi-*`)
  classes; fonts: **Roboto** (body + headings; `font-family: "Roboto",
Arial, sans-serif`). jQuery + Bootstrap 5 JS drive the sticky/transparent
  navbar, AOS scroll reveals, GLightbox, and the custom multi-item carousels
  (courses, testimonials).
- **Live computed styles (verified in a browser on the live preview):**
  brand teal `#1eb2a6` (buttons, links, icons); `.btn-custom` bg `#17867d`
  radius 0; hero `.btn-primary` bg `#1eb2a6` radius **4px**; hero h1 40px
  white weight 600; counter number 40px 700 **white**, caption
  `rgba(255,255,255,.9)`, icon white, over `images/bg_3.webp` with a
  `#111` 30%-opacity overlay; top-bar brand **white** (over the hero photo);
  newsletter `.ftco-intro` bg `#188f85`; footer bg `#eeeeee`; bottom bar
  `#111111`. FOUR pricing plans (Basic 49K / Beginner 79K / Premium 109K /
  Ultimate 149K); NINE course cards; NINE testimonials.
- **Screenshot:** `academia-free-template.jpg` (TEMPLATES.md lines 548/1619)
  — verified in a browser (vision analysis, 1200×946): it shows an OLDER
  design variant — thin teal top strip with contact info + socials, white
  navbar with the "ACADEMIA" logo + subtitle, hero photo of a smiling
  student on a light-blue backdrop with the same headline/buttons, and a
  two-column "Learn Anything" section (photo left, text + 2 feature cards
  right). The LIVE PREVIEW is the authoritative reference (newer design:
  transparent top bar + navbar over a full-viewport hero, three stacked
  benefit rows, 9-course grid, category grid, carousels). Where they
  disagree, follow the live preview; the screenshot confirms the overall
  aesthetic (teal brand, white cards, dark headings).
- **Visual design (from DOM + CSS tokens + live computed styles + rendered
  screenshot):** clean modern education aesthetic — white page, dark
  headings `rgba(0,0,0,.8)`, **brand teal `#1eb2a6`** (links, `.text-primary`,
  `.bg-primary`, `.btn-primary` fills, nav active/hover, course icon circles,
  course prices, ratings, benefit/category icons, section subheadings,
  testimony quote icon + position, pricing numbers, footer logo accent,
  carousel dots active), darker teals `#17867d` (Get Certificate button) and
  `#188f85` (newsletter band), light sections `#f8f9fa` (testimonials +
  blog), footer light grey `#eeeeee` with `#111111` bottom bar, Roboto
  headings with generous sizes (section h2 46px/40px weight 500), 4px-radius
  buttons and cards, soft card shadows. The demo brands itself "Academia";
  recreation uses the NEW name **Learnly**.

- **Structure (1:1, section order):**
  1. Top bar `div.top-wrap` (absolute, transparent, padding 1.2em 0, z-3,
     over the hero) — `div.container` > `div.row`:
     - `div.col-md.col-xl-5`: `a.navbar-brand` — wordmark **"Academia"** +
       `span` "Online Education & Learning" (small, uppercase, 12px, white,
       line-height 1.1; brand color WHITE on the hero photo).
     - `div.col-md`: `div.con.d-flex` — `div.icon` `span.bi.bi-clock` +
       `div.text`: `span` "Monday - Friday" + `strong` "8:00AM-8:00PM".
     - `div.col-md`: `div.con.d-flex` — `div.icon` `span.bi.bi-telephone` +
       `div.text`: `span` "Call Us" + `strong` phone.
     - `ul.top-social` (right) — FOUR 40×40 circular links, bg
       `rgba(255,255,255,.2)`, radius 50%: Facebook, Twitter (bi-twitter-x),
       Instagram, Dribbble.
     - Mobile (<992px): `.con` and `.top-social` are `display: none`.
  2. Navbar `nav.navbar.navbar-expand-lg.ftco-navbar-light` — absolute,
     `top: 95px`, transparent, z-3, `div.container-xl`:
     - `a.btn-custom.order-lg-last` **"Get Certificate"** (dark teal
       `#17867d` fill, radius 0, width 250px, padding 1.5rem, uppercase 13px
       weight 700, letter-spacing 2px, with a skewed `:before` deco sliver
       `skewX(-20deg)` on the left).
     - toggler `button.navbar-toggler` (hamburger `bi.bi-list` + label
       "Menu", aria-expanded, collapse target `#navbarSupportedContent`).
     - `ul.navbar-nav.me-auto` — SEVEN links: **Home** (`.active`),
       **All Courses**, **About**, **Team**, **Pricing**, **Journal**,
       **Contact** (15px, white, weight 500, padding 1.4rem 25px desktop;
       active/hover teal `#1eb2a6`).
     - (The source's navbar-brand link is COMMENTED OUT — the only visible
       brand lives in the top bar.)
  3. Hero `section.hero-wrap` (bg image `images/bg_1.webp`, `height: 100vh`,
     `min-height: 100%`, `background-attachment: fixed`, `z-index: 0`,
     `.overlay` `#111` at **opacity 0**) — `div.slider-text` (height 100vh,
     min-height 750px, color `rgba(255,255,255,.8)`) > `div.container` >
     `div.row.g-0.align-items-center` > `div.col-lg-5`:
     - `span.subheading` "Welcome to Academia" (uppercase 14px, weight 700,
       letter-spacing 2px, `rgba(255,255,255,.7)`).
     - `h1.mb-4` "Best Online Education Expertise" (40px, white, weight 600,
       line-height 1.2).
     - `p.mb-4` "Far far away, behind the word mountains…" (lorem).
     - `a.btn.btn-primary.p-4.py-3` **"Get Started Now!"** (teal fill, white
       text, radius 4px) + `span.bi.bi-arrow-right`; `a.btn.btn-white.p-4.py-3`
       **"View Course"** (white fill, 1px white border, teal text) +
       arrow. (No image element in the hero — the photo is the bg.)
  4. Benefits `section.ftco-section.ftco-no-pt.ftco-no-pb` — heading block
     (`div.heading-section`: `span.subheading` "Learn Anything" — teal,
     uppercase, 16px, weight 700 + `h2` "Benefits About Online Learning
     Expertise" — 46px, weight 500, line-height 1.4, `rgba(0,0,0,.8)`) +
     THREE stacked rows `div.col-lg-12.services-wrap` > `div.services.d-flex`:
     60px teal icon (`bi-laptop` **Online Courses** / `bi-award` **Earn A
     Certificates** / `bi-person-workspace` **Learn with Expert**) + `div.text`:
     h2 title + `p.mb-0` lorem paragraph.
  5. Counters `section.ftco-section-counter.img` (bg image `images/bg_3.webp`,
     `.overlay` `#111` at **opacity .3**) — `div.row.section-counter`:
     FOUR `div.counter-wrap-2.d-flex` (col-sm-6 col-md-6 col-lg-3): icon
     (`bi-mortarboard` / `bi-person-workspace` / `bi-calendar3` / `bi-book`,
     white) + `h2.number` > `span.countup` **3000 / 320 / 1000 / 587**
     (40px, weight 700, WHITE) + `span.caption` white/90 (**Success Stories
     / Trusted Tutors / Schedules / Courses**).
  6. Courses `section.ftco-section.courses-section.ftco-no-pb` — heading
     block (`span.subheading` "Our Courses" + `h2` "Explore Our Popular
     Online Courses") — NINE cards `div.col-md-6.col-lg-4.d-flex` >
     `div.courses` (white, padding 30px 30px 40px, mb-20px) > `div.d-flex`:
     - `div.icon` — 80×80 circle, teal `#1eb2a6` bg, white bootstrap icon
       (`bi-gear`, `bi-pencil-square`, `bi-diagram-3`, `bi-code-square`,
       `bi-palette`, `bi-megaphone`, `bi-music-note-beamed`, …).
     - `div.text` (padding-left 20px): `h2` title; `p.rate` — FIVE
       `bi.bi-star-fill` (teal) + `span` "(5.0)"; `div.author-wrap` —
       "by John Smith"; link "50 lectures (190 hrs)" (lucide Clock +
       text; varies per card: 50/190, 35/120, 45/160, 60/200); price line
       "**$100** All Course / **$15** per month" (`span.course-price` teal);
       `a.btn.btn-primary.btn-outline-primary.d-block.py-3` **"Enroll Now!"**
       (outline teal → fills teal on hover).
     - Courses: Basic Fundamentals for Software Engineering / Enhancing
       Adobe Photoshop CC 2020 Skills / HTML, CSS, and Javascript for Web
       Developers / Introducing to Programming with WordPress / Advanced
       Machine Learning Techniques / Data Science and Analytics Bootcamp /
       UI/UX Design Principles and Best Practices (Sarah Lee, 35 lectures,
       120 hrs) / Digital Marketing Strategy Masterclass (Mike Johnson, 45
       lectures, 160 hrs) / Music Production and Audio Engineering (David
       Chen, 60 lectures, 200 hrs).
  7. Categories `section.ftco-section` — heading block (`span.subheading`
     "Courses" + `h2` "Browse Our Online Courses") — TWELVE links
     `div.col-md-3.col-xl-2` > `a.services-2` (white card, padding 30px 20px,
     radius 4px, shadow `0 5px 25px -2px rgba(0,0,0,.06)`, centered): icon
     (70px teal bootstrap icon) + `div.text`: h3 title (**UI/UX Design
     Courses**, **Art & Design**, **Computer Science**, **History &
     Archeologic**, **Software Engineering**, **Information Software**,
     **Health & Fitness**, **Marketing**, **Graphic Design**, **Music**,
     **Business Administration**, **Web Management**) + count
     "25 Courses" / "10 Courses" / "15 Courses". One card `.active`
     (Art & Design). Hover: teal accent.
  8. Testimonials `section.ftco-section.testimony-section.bg-light` — heading
     block (`span.subheading` "Testimonial" + `h2` "Our Successful Students")
     — `div.multi-item-carousel` (custom carousel, `overflow: hidden`,
     padding-bottom 3em) with `div.carousel-slide` rows of NINE
     `div.testimony-wrap` cards (white, padding 35px 30px 30px, width 98%,
     shadow `0 5px 12px -9px rgba(0,0,0,.17)`): `div.user-img` (80×80 circle,
     bg photo) + `div.icon` (30×30 teal circle bottom-right, `bi.bi-quote`) +
     `div.ps-3.tx`: `p.name` (20px, weight 600, uppercase, `#111`) +
     `span.position` (13px uppercase teal) + `p.mb-4.msg` quote. People:
     Roger Scott (Marketing Manager), Sarah Johnson (Software Engineer),
     Michael Chen (Data Analyst), Emily Davis (UX Designer), James Wilson
     (Product Manager), Lisa Martinez (Business Analyst), Robert Taylor
     (Full Stack Developer), Amanda Foster (Project Manager), Kevin Park
     (Startup Founder). `div.carousel-dots` — bar dots 30×3px `#ddd`
     (teal active).
  9. Blog `section.ftco-section.bg-light.ftco-no-pt` — heading block
     (`span.subheading` "Our Blog" + `h2` "Recent From Blog") — THREE cards
     `div.col-md-6.col-lg-4.d-flex` > `div.blog-entry.justify-content-end`
     (white, radius 4px, shadow `0 10px 25px -13px rgba(0,0,0,.1)`):
     `a.block-20.img` (300px-tall bg image `images/image_1/2/3.webp`,
     aria-label "Read article: Build your Dream Software and Engineering
     Career") + `div.text` (padding 30px): `p.meta` uppercase 13px weight 600
     — `span` `bi.bi-person` **Admin** + `span` `bi.bi-calendar` **Oct. 15,
     2030** + `span` `bi.bi-chat` link **3 Comments**; `h3` heading
     "Build your Dream Software & Engineering Career" (24px, weight 400);
     excerpt paragraph. (All three cards share the same title in the source
     — fine to paraphrase per card.)
  10. Pricing `section.ftco-section.ftco-no-pt` — heading block
      (`span.subheading` "Our Pricing" + `h2` "Pricing & Packages") — FOUR
      cards `div.col-md-6.col-lg-3` > `div.block-7` (white, padding 40px 0,
      shadow `0 24px 48px -13px rgba(0,0,0,.05)`): `div.text-center`:
      `span.excerpt.d-block` plan name (**Basic Plan** / **Beginner Plan** /
      **Premium Plan** / **Ultimate Plan**) + `span.price` > `span.number`
      (50px, weight 600, teal: **$ 49K** / **$ 79K** / **$ 109K** /
      **$ 149K**) + `div.p-4.px-lg-5`: lorem paragraph + `a.btn.btn-primary
.btn-outline-primary.d-block.px-2.py-3` **"Get Started"** (outline
      teal → fills on hover).
  11. Newsletter CTA `section.ftco-intro.py-5.bg-primary` (bg **`#188f85`**,
      white text, z-0) — `div.container` > centered row: `h2` "Newsletter -
      Stay tune and get the latest update" + paragraph + `form.subscribe-form`
      > `div.form-group.d-flex.align-items-center`: `input.form-control`
      > (placeholder "Enter email address") + `button.btn-icon` (44×44,
      > aria-label "Subscribe to newsletter", `span.bi.bi-send`).
  12. Footer `footer.ftco-footer` (bg **`#eeeeee`**, padding 5em 0 0) —
      `div.container-xl` > `div.row` with FOUR columns
      (`col-md-6.col-lg` brand / `col-lg-2` Explore / `col-lg-2` Quick Links
      / `col-md-6.col-lg` posts + contact):
      - Brand col: `a.logo` (30px, `#111`) "Academia" + `span` "Online
        Education & Learning" (teal) + blurb + `ul.ftco-footer-social`
        (Twitter, Facebook, Instagram — teal circular).
      - **Explore**: About Us, Services, Courses, Blog, Contact us.
      - **Quick Links**: Contact Us, Pricing, Terms & Conditions, Privacy,
        Feedbacks.
      - **Recent Posts**: THREE `div.block-21` entries — meta (calendar icon
        "Oct. 15, 2030" + user icon "Admin") + heading "Creativity and
        Inspiration" (16px, links `#4d4d4d`).
      - **Have a Questions?**: address (MapPin icon "203 Fake St. Mountain
        View, San Francisco, California, USA"), phone (bi-telephone link),
        email (bi-envelope link info@yourdomain.com).
      - Bottom bar `div.container-fluid.px-0.py-5.bg-darken` (bg `#111111`,
        white text): "Copyright © 2026 All rights reserved | This template
        is made with ♥ by Colorlib" — recreation replaces the credit line
        with the Component Dock footer requirement.
  13. Page composition: top bar + navbar + main (hero, benefits, counters,
      courses, categories, testimonials, blog, pricing, newsletter) + footer.

- **Design tokens (from css/style.css + live computed styles):**
  - Brand teal **`#1eb2a6`** — `.btn.btn-primary` bg (Get Started Now /
    Enroll Now / Get Started), `.text-primary`, `.bg-primary`, links `a`,
    nav active/hover, `.courses .icon` (80px circle bg), `.course-price`,
    `.star` rating, `.services .icon span` (60px), `.services-2 .icon span`
    (70px), `.heading-section .subheading`, `.testimony-wrap .icon` (30px
    circle) + `.position`, `.block-7 .price .number` (50px), `.btn-white`
    text, footer logo span, active carousel dot, footer socials.
  - Dark teal **`#17867d`** — `.btn-custom` (Get Certificate; radius 0,
    width 250px, padding 1.5rem, uppercase 13px 700, letter-spacing 2px,
    skewed `:before` sliver).
  - Deep teal **`#188f85`** — `.ftco-intro` newsletter band bg.
  - Ink **`#111111`** — bottom bar bg; `.name`/testimonial + blog headings;
    `.ftco-section-counter .overlay` at 30% opacity; `.hero-wrap .overlay`
    at 0 (invisible).
  - Greys — `#eeeeee` (footer bg), `#f8f9fa` (testimonials + blog bgs),
    `#4d4d4d` (footer links), `#ddd` (inactive carousel dots), `#6c757d` /
    `#666` muted text, `rgba(0,0,0,.8)` headings, `rgba(255,255,255,.7-.9)`
    on-image text.
  - Fonts — **'Roboto', Arial, sans-serif** (body 16px + headings; headings
    `line-height 1.5`, `color rgba(0,0,0,.8)`, weight 400 default; section
    h2 46px weight 500 lh 1.4 desktop / 40px mobile; hero h1 40px white
    weight 600 lh 1.2; counter number 40px 700; blog h3 24px; footer logo
    30px). Google Fonts `<link>` in the recreation.
  - Buttons — `.btn.btn-primary`: bg `#1eb2a6`, white text, radius **4px**,
    hover transparent + teal text; `.btn.btn-primary.btn-outline-primary`:
    transparent bg + 1px teal border + teal text, hover fills teal + white
    text; `.btn-white`: white fill + 1px white border + teal text; `.btn-custom`
    radius 0 (see above). Hero buttons padded `p-4 py-3`.
  - Cards — `.services-2`: radius 4px, shadow `0 5px 25px -2px rgba(0,0,0,.06)`;
    `.courses`: white, padding 30px 30px 40px; `.blog-entry`: radius 4px,
    shadow `0 10px 25px -13px rgba(0,0,0,.1)`, image 300px tall, text padding
    30px; `.block-7`: padding 40px 0, shadow `0 24px 48px -13px
rgba(0,0,0,.05)`; `.testimony-wrap`: padding 35px 30px 30px, shadow
    `0 5px 12px -9px rgba(0,0,0,.17)`, avatar 80px circle.
  - Section rhythm — `.ftco-section` padding 8em 0 (6em on smaller
    screens); `.ftco-section-counter` 6em 0; `.ftco-footer` 5em 0 0; bottom
    bar `py-5`; `.top-wrap` padding 1.2em 0; heading blocks centered
    (`row.justify-content-center` + `col-md-7`).
  - Icons — all bootstrap-icons in source → lucide-react equivalents:
    Clock, Phone, ArrowRight, Laptop, Award, Users, GraduationCap,
    CalendarDays, BookOpen, Star, Cog, PenTool, Network, FileCode, Palette,
    Megaphone, Music, Monitor, Search, Activity, Quote, User, MessageCircle,
    Send, MapPin, Mail + brand socials (Facebook, Twitter/X, Instagram,
    Dribbble) as inline SVG (lucide removed brand glyphs).
  - Mobile — top-bar `.con` + socials hidden (<992px); navbar collapses to
    hamburger + "Menu"; hero stacks (text left column full width); course
    cards 1-up; categories 2-up; counters 2-up; pricing 1-up; blog 1-up.
  - Navbar is `position: absolute; top: 95px` (below the top bar) and
    transparent over the hero — there is no scrolled solid-state in the
    single-page layout.

- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/learnly-<n>/<w>/<h>`; hero 1920×1080-class bg, course
  section has no photos, category cards have no photos, blog 800×450-class,
  testimonial avatars 80×80, footer posts 80×80 thumbnails). Hero + counter
  backgrounds are subject-critical — screen picsum seeds with the bright
  sky metric (hero: light-blue classroom/study scene; counters: campus).
  Testimonial avatars are person-critical — use the verified person picsum
  IDs (1027, 64, 823, 996) and reuse across the 9 slides, or paraphrase
  names to match available portraits (note in PR). Icons → lucide-react;
  brand socials → inline SVG. Roboto via Google Fonts `<link>` in
  `index.html`. Logo recreated as a Roboto wordmark "Learnly" (white over
  the hero). Carousels → React state (courses carousel optional — the 9
  cards can render as a static grid; testimonials multi-item carousel with
  dots + prev/next per the source). AOS scroll reveals → optional subtle
  CSS/IntersectionObserver, tests must not depend on animation timing.
  "Enroll Now!" / "Get Started" links are plain anchors (no checkout).

Learnly lives in `apps/learnly` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Top bar with brand, hours, phone, and socials

The system SHALL render a transparent top bar over the hero with the brand
wordmark, opening-hours, phone, and four social links; on narrow viewports
the hours/phone/socials SHALL hide.

#### Scenario: Desktop top bar

- **GIVEN** the Learnly page is rendered
- **WHEN** the page loads
- **THEN** a top bar SHALL show the wordmark "Learnly" with the small
  uppercase tagline "Online Education & Learning" on the left
- **AND** an opening-hours block SHALL show a clock icon with "Monday -
  Friday" and "8:00AM-8:00PM"
- **AND** a call block SHALL show a phone icon with "Call Us" and a phone
  number
- **AND** four circular social links SHALL be shown (Facebook, Twitter,
  Instagram, Dribbble), each with an accessible name

#### Scenario: Narrow viewport top bar

- **GIVEN** the top bar is rendered on a narrow viewport
- **WHEN** the page loads
- **THEN** the hours, call, and social blocks SHALL be hidden
- **AND** the brand wordmark SHALL remain visible

### Requirement: Navbar with Get Certificate button and anchor links

The system SHALL render a transparent navbar below the top bar with a dark
teal "Get Certificate" button on the right and seven navigation links; on
narrow viewports the links SHALL collapse behind a hamburger toggle.

#### Scenario: Desktop navbar

- **GIVEN** the navbar is rendered
- **WHEN** the page loads
- **THEN** a "Get Certificate" button with the brand dark teal `#17867d`
  fill and square corners SHALL be shown on the right
- **AND** seven uppercase links SHALL be shown: Home (active), All Courses,
  About, Team, Pricing, Journal, and Contact
- **AND** the active or hovered link SHALL be accented in the brand teal
  `#1eb2a6`

#### Scenario: Mobile navbar

- **GIVEN** the navbar is rendered on a narrow viewport
- **WHEN** the user presses the "Menu" toggle
- **THEN** the navigation links SHALL expand in a collapsible menu
- **AND** pressing the toggle again SHALL collapse it

### Requirement: Hero with background photo and call-to-actions

The system SHALL render a full-viewport hero section with a background
photo, an eyebrow label, a large white headline, a lorem paragraph, and two
buttons.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** the page loads
- **THEN** the section SHALL fill the viewport height with a background
  image
- **AND** an uppercase eyebrow "Welcome to Learnly" with wide letter-spacing
  SHALL appear
- **AND** the headline "Best Online Education Expertise" SHALL render in
  large white bold text
- **AND** a primary teal button "Get Started Now!" with an arrow icon and a
  white button "View Course" with an arrow icon SHALL be shown below the
  paragraph

### Requirement: Benefits section with three feature rows

The system SHALL render a "Learn Anything" heading block followed by three
full-width feature rows, each with a teal icon, a title, and a paragraph.

#### Scenario: Benefit rows

- **GIVEN** the benefits section is displayed
- **WHEN** the page loads
- **THEN** an uppercase teal subheading "Learn Anything" and a dark heading
  "Benefits About Online Learning Expertise" SHALL appear
- **AND** three rows SHALL show 60px teal icons with the titles "Online
  Courses", "Earn A Certificates", and "Learn with Expert", each followed
  by a paragraph

### Requirement: Counters over a background photo

The system SHALL render a background-photo section with a dark overlay and
four counters, each with a white icon, a large white number, and a white
caption.

#### Scenario: Counter stats

- **GIVEN** the counters section is displayed
- **WHEN** the page loads
- **THEN** four counters SHALL be shown with white icons and white numbers
  reading 3000, 320, 1000, and 587
- **AND** their captions SHALL read "Success Stories", "Trusted Tutors",
  "Schedules", and "Courses"
- **AND** the section SHALL sit on a background image under a semi-transparent
  dark overlay

### Requirement: Popular courses grid

The system SHALL render a "Our Courses" heading block and a three-column
grid of nine course cards, each with an 80px teal circular icon, title,
five-star rating, instructor, lecture count, price, and an "Enroll Now!"
button.

#### Scenario: Course cards

- **GIVEN** the courses grid is displayed
- **WHEN** the page loads
- **THEN** nine white cards SHALL be shown in a 3-column grid (1 column on
  narrow viewports)
- **AND** each card SHALL show a teal circular icon, the course title, five
  filled teal star icons with "(5.0)", an instructor line ("by John Smith"
  etc.), a lecture-count line, a price line ("$100 All Course / $15 per
  month"), and an outline-teal "Enroll Now!" button
- **AND** the cards SHALL include the nine courses listed in the design
  reference, with the last three using instructors Sarah Lee (35 lectures,
  120 hrs), Mike Johnson (45 lectures, 160 hrs), and David Chen (60
  lectures, 200 hrs)

### Requirement: Course category grid

The system SHALL render a "Browse Our Online Courses" heading block and a
grid of twelve category cards, each with a large teal icon, a title, and a
course count.

#### Scenario: Category cards

- **GIVEN** the categories grid is displayed
- **WHEN** the page loads
- **THEN** twelve white cards SHALL be shown in a responsive grid (6-up on
  wide viewports, fewer on narrow)
- **AND** each card SHALL show a 70px teal icon, the category name, and a
  count line ("25 Courses", "10 Courses", or "15 Courses")
- **AND** the categories SHALL read UI/UX Design Courses, Art & Design,
  Computer Science, History & Archeologic, Software Engineering,
  Information Software, Health & Fitness, Marketing, Graphic Design, Music,
  Business Administration, and Web Management

### Requirement: Testimonials carousel

The system SHALL render a light-grey "Our Successful Students" section with
a multi-item carousel of nine testimonial cards, each with a circular
avatar, a quote icon, a name, a role, and a quote.

#### Scenario: Testimonial slides

- **GIVEN** the testimonials section is displayed
- **WHEN** the page loads
- **THEN** a carousel SHALL show white testimonial cards with an 80px
  circular avatar, a small teal quote icon, an uppercase name, a teal
  uppercase role, and a quote
- **AND** the carousel SHALL provide navigation (bar dots, and previous/
  next or slide buttons)
- **AND** the nine testimonials SHALL include Roger Scott (Marketing
  Manager), Sarah Johnson (Software Engineer), and Michael Chen (Data
  Analyst) among others

### Requirement: Blog section

The system SHALL render a light-grey "Recent From Blog" section with three
article cards, each with a 300px-tall background image, a meta line, a
heading, and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the page loads
- **THEN** three white cards SHALL be shown in a 3-column grid
- **AND** each card SHALL show a background image (with an accessible
  "Read article: …" label), an uppercase meta line (Admin · Oct. 15, 2030 ·
  3 Comments), a 24px heading, and an excerpt paragraph

### Requirement: Pricing section

The system SHALL render a "Pricing & Packages" section with four pricing
cards, each showing a plan name, a large teal price, a paragraph, and a
"Get Started" button.

#### Scenario: Pricing cards

- **GIVEN** the pricing section is displayed
- **WHEN** the page loads
- **THEN** four white cards SHALL be shown with the plan names Basic Plan,
  Beginner Plan, Premium Plan, and Ultimate Plan
- **AND** each card SHALL show its price in large teal text ($49K, $79K,
  $109K, $149K) followed by a paragraph and an outline-teal "Get Started"
  button

### Requirement: Newsletter band

The system SHALL render a deep-teal newsletter band with a headline, a
paragraph, an email input, and an icon submit button.

#### Scenario: Newsletter form

- **GIVEN** the newsletter band is displayed
- **WHEN** the page loads
- **THEN** the band SHALL have a deep teal `#188f85` background with white
  text reading "Newsletter - Stay tune and get the latest update"
- **AND** an email text input with placeholder "Enter email address" and an
  icon submit button (accessible name "Subscribe to newsletter") SHALL be
  shown
- **AND** submitting the form SHALL indicate the subscription was received
  without navigating away
- **AND** submitting an empty or invalid email SHALL show a validation
  error and no success message

### Requirement: Footer with four columns and bottom bar

The system SHALL render a light-grey footer with a brand column, Explore
and Quick Links columns, recent posts, a "Have a Questions?" contact
column, and a dark bottom bar with the copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** the footer SHALL show the brand wordmark with the tagline, a
  blurb, and social links (Twitter, Facebook, Instagram)
- **AND** the Explore column SHALL link About Us, Services, Courses, Blog,
  and Contact us
- **AND** the Quick Links column SHALL link Contact Us, Pricing, Terms &
  Conditions, Privacy, and Feedbacks
- **AND** the Recent Posts column SHALL show three posts with a date and
  author meta and the heading "Creativity and Inspiration"
- **AND** the "Have a Questions?" column SHALL show the address, a phone
  link, and an email link
- **AND** the dark bottom bar SHALL show the copyright line with the
  current year and the Component Dock credit link
  (https://www.componentdock.com/)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Learnly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the top bar, navbar, hero, benefits,
  counters, courses, categories, testimonials, blog, pricing, newsletter,
  and footer in order
- **AND** the document title SHALL be "Learnly — Online Education Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/learnly`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/learnly`)
- [ ] Section order matches the reference 1:1 (top bar → navbar → hero → benefits → counters → courses → categories → testimonials → blog → pricing → newsletter → footer)
- [ ] Design tokens in `@theme` (brand teal #1eb2a6, dark teal #17867d, deep teal #188f85, ink #111111, footer #eeeeee, light #f8f9fa, Roboto fonts)
- [ ] Top bar: transparent over hero, white wordmark + tagline, hours + Call Us blocks (hidden <992px), 4 circular socials (Facebook/Twitter/Instagram/Dribbble)
- [ ] Navbar: transparent, top 95px, "Get Certificate" (250px wide, radius 0, #17867d), 7 links (Home active), teal active/hover, mobile "Menu" hamburger collapse
- [ ] Hero: 100vh bg photo (fixed), eyebrow, 40px white h1, paragraph, teal "Get Started Now!" + white "View Course" buttons (radius 4px, arrow icons)
- [ ] Benefits: teal subheading + 46px heading + 3 full-width rows (60px teal icon + title + paragraph)
- [ ] Counters: bg photo + 30% dark overlay, 4 counters (white icon, 40px white bold number, white/90 caption: 3000/320/1000/587)
- [ ] Courses: 9 cards 3-col grid (1-col mobile), 80px teal circular icon, 5 teal stars (5.0), instructor, lectures, teal price, outline "Enroll Now!"
- [ ] Categories: 12 white cards (radius 4px, soft shadow), 70px teal icon, title + count, one active
- [ ] Testimonials: bg-light, multi-item carousel with dots, 9 white cards (80px avatar, 30px teal quote icon, uppercase name, teal role)
- [ ] Blog: bg-light, 3 cards (300px image, meta Admin/Oct. 15, 2030/3 Comments, 24px heading, excerpt)
- [ ] Pricing: 4 cards (Basic 49K / Beginner 79K / Premium 109K / Ultimate 149K), 50px teal price, outline "Get Started"
- [ ] Newsletter: #188f85 band, white h2, email input + send icon button, validation + success state
- [ ] Footer: #eeeeee, brand + socials, Explore/Quick Links/Recent Posts/"Have a Questions?" columns, #111 bottom bar with Component Dock credit
- [ ] No `colorlib` references in any app file; footer links https://www.componentdock.com/
