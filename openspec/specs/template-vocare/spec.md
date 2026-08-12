# Template: Vocare (Job Board Template)

## Purpose

Vocare is a single-page job-board template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Skillhunt"
design (see TEMPLATES.md — line 496; the same source is DUPLICATED at lines
1166 and 2005 — ALL THREE rows must be marked `[x]` when done), built under a
NEW name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a bright, modern job-board landing page: a **transparent
navbar** floating over a **blue→purple gradient hero** with a headline, three
animated stat counters, and a tabbed job/candidate **search form**; a white
**top-category strip** that overlaps the hero's bottom edge; a 16-item
**job-categories list**; a gradient **services** band; a white-on-light
**featured jobs** list (9 job posts with badge, company, location, heart and
Apply Job button); a **testimonial** carousel; a solid-blue **latest
candidates** band; a **blog** grid; an orange-submit **newsletter** band; and
a **white footer** with four link columns + contact widget. The brand colors
are **blue `#206dfb`** (primary buttons, subheadings, active states), the
hero/services **gradient `#207dff → #a16ae8`**, and an **orange accent
`#fdab44`** (numbers, "Want a Job" CTA, active category card, newsletter
submit). Font: **Source Sans Pro**. Vocare recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Skillhunt" —
  `https://colorlib.com/wp/template/skillhunt/` (Job Board Template).
  TEMPLATES.md has **THREE copies** of this item (lines 496, 1166, 2005 — all
  `- [ ]`); mark ALL THREE `[x]` when done. None is shipped yet and no other
  spec targets this source (verified: no spec folder references
  `wp/template/skillhunt/`).
- **Preview URL:** `https://preview.colorlib.com/theme/skillhunt/` — **HTTP
  200** (55.7 KB), fully reachable; structure + tokens below are from this
  live DOM, its `css/style.css` (81.7 KB: bootstrap 4 + custom ftco rules),
  and live computed styles verified in a browser. Font **"Source Sans Pro"**
  (300/400/600/700) loaded via an inline cf-fonts `@font-face` block in the
  head — recreate with a Google Fonts `<link>` in `index.html`. Screenshot
  used to confirm the visual design (see below).
- **Screenshot:** `skillhunt-free-template.jpg` (1200×946, verified via
  browser vision): white navbar links + blue "Post a Job" + orange "Want a
  Job" buttons over a blue→purple gradient hero with a faint blurred photo of
  hands typing on a laptop; white headline "The Eassiest Way to Get Your New
  Job" with three stat counters; a white search bar with two tabs (Find a Job
  = white active, Find a Candidate = orange) and a blue Search button; six
  white category cards overlapping the hero's bottom edge (second card —
  Education & Training — orange/active); "JOB CATEGORIES" subheading below.
  Clean, colorful, corporate-recruitment aesthetic.
- **Section structure (from the live DOM, in order):**
  1. `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark.ftco-navbar-light`
     — **transparent navbar absolutely positioned over the hero** (`top: 20px;
background: transparent`; mobile ≤991px: `background: #000`, relative):
     brand "Skillhunt" (white), nav links **Home** (`.active`), **Browse
     Jobs**, **Canditates** (sic — original typo), **Blog**, **Contact**
     (white, hover `#fdab44`; active link `rgba(255,255,255,0.5)` at top,
     `#206dfb` when scrolled), then two pill CTA buttons: **Post a Job**
     (`#206dfb` solid, radius 5px) and **Want a Job** (`#fdab44` solid).
     Scrolled state (`.scrolled`, via JS on scroll): `position: fixed`,
     `background: #fff`, shadow `0 0 10px 0 rgba(0,0,0,0.1)`, active link
     `#206dfb`.
  2. `div.hero-wrap.img` (background `images/bg_1.jpg`) — **hero**, 800px
     tall (900px ≤991px): full overlay `rgba(0,0,0,.8)` gradient
     `linear-gradient(to right, #207dff 0%, #a16ae8 100%)`; centered column:
     - `p` "Find Job, Employment, and Career Opportunities" (white
       `rgba(255,255,255,0.8)`).
     - `h1` "The Eassiest Way to Get Your New Job" (54px white, 40px mobile,
       line-height 1.2, weight 400; original typo "Eassiest" — fix to
       "Easiest" in the recreation, note in PR).
     - `div.ftco-counter` — 3 stat counters (`block-18`, 3 × `col-md-4`):
       flaticon icon (60px white; worldwide/visitor/resume) + `strong.number`
       (30px, white; `data-number` **46** Countries, **450** Companies,
       **80000** Active Employees — the original animates these on load with
       jquery.animateNumber; recreation can render the final values) + label.
     - `div.ftco-search` — **tabbed search widget** (`nav-pills`):
       - Tabs: **Find a Job** (active: white bg, black text) / **Find a
         Candidate** (inactive: `#fdab44` bg, white text).
       - Form 1 (Find a Job): keyword input (placeholder "eg. Garphic. Web
         Developer" — original typo, fix to "Graphic"; briefcase icon
         `#d9d9d9` at left), category `<select>` (Category / Full Time / Part
         Time / Freelance / Internship / Temporary), location input
         (placeholder "Location", map-marker icon), **Search** submit
         (`#206dfb`, radius 5px). Fields: white bg, border
         `rgba(0,0,0,0.1)`, 14px, padding-left 30px.
       - Form 2 (Find a Candidate): name input (placeholder "eg. Adam Scott",
         user icon), category select, location input, Search.
  3. `section.ftco-section.ftco-no-pt.ftco-no-pb` — **top category strip**
     overlapping the hero: `div.category-wrap` (white, `margin-top: -70px`
     ≥992px, shadow `0 3px 14px -4px rgba(0,0,0,0.1)`), 6 × `col-md-2`
     `div.top-category.text-center` cards: flaticon icon (40px `#206dfb`),
     `h3` (20px, black link), `p` `<span class="number">143</span> Open
position`. Card 2 ("Education & Training") has class `active` →
     background `#fdab44`, white icon/heading/text; hover → background
     `#206dfb`. Categories: Website & Software, Education & Training, Graphic
     & UI/UX Design, Accounting & Finance, Restaurant & Food, Health &
     Hospital.
  4. `section.ftco-section` — **Top Categories**: `div.heading-section
text-center` with `span.subheading` "Job Categories" (12px, `#206dfb`,
     uppercase, letter-spacing 2px, weight 600) + `h2` "Top Categories" (38px,
     weight 500, black; 28px mobile). Below: **4 columns × 4 items** of
     `ul.category.text-center` list rows — `a` 22px `#1a1a1a`,
     `border-bottom: 1px solid #ffefdb`, padding `10px 15px 10px 0`;
     `span.number` badge (16px, bg `#fffaf5`, color `#fdab44`, radius 5px) +
     "Open position" (15px `rgba(0,0,0,0.3)`); `i.ion-ios-arrow-forward`
     arrow at right (`#fdab44`, opacity 0). Hover: `color: #206dfb`,
     `background: #ffefdb`, arrow fades in. Full list (name / count): Web
     Development 354 · Graphic Designer 143 · Multimedia 100 · Advertising 90
     · Education & Training 100 · English 200 · Social Media 300 · Writing
     150 · PHP Programming 400 · Project Management 100 · Finance Management
     222 · Office & Admin 123 · Web Designer 324 · Customer Service 564 ·
     Marketing & Sales 234 · Software Development 425.
  5. `section.ftco-section.services-section` — **services band**, background
     gradient `linear-gradient(to right, #207dff 0%, #a16ae8 100%)`: 4 ×
     `col-md-3` `div.media.block-6.services.d-block` cards: flaticon icon
     (60px white), `h3.heading` (18px, weight 700, white) + `p`
     (`rgba(255,255,255,0.7)`). Titles: Search Millions of Jobs / Easy To
     Manage Jobs / Top Careers / Search Expert Candidates. Copy (lorem):
     "A small river named Duden flows by their place and supplies."
  6. `section.ftco-section.bg-light` — **Featured Jobs** (bg `#f8f9fa`):
     `span.subheading` "Recently Added Jobs" + `h2` "Featured Jobs Posts For
     This Week" (`mb-4`). **9 stacked `div.job-post-item`** cards (white,
     `margin-bottom: 20px`, padding `p-4`, flex row; stack on mobile):
     - Left (`one-third`): `span.subadge` badge (14px, uppercase, weight 500,
       `#206dfb` — Partime / Fulltime / Freelance / Temporary / Internship)
       - `h2` (28px, black link) job title.
     - `div.job-post-item-body`: `icon-layers` + company link, `icon-my_location`
       - "Western City, UK".
     - Right (`one-forth`, 145px): round heart button (40×40 circle,
       `background: #ffefdb`, radius 50%) + **Apply Job** button (`#206dfb`,
       `py-2`).
     - Posts (title / badge / company): Frontend Development / Partime /
       Facebook, Inc. · Full Stack Developer / Fulltime / Google, Inc. ·
       Open Source Interactive Developer / Freelance / New York Times, then
       the same three titles repeat with badges Temporary, Fulltime,
       Freelance, Internship, Temporary (9 cards total; companies repeat
       Facebook, Inc. / Google, Inc. / New York Times).
  7. `section.ftco-section.testimony-section` — **Testimonials**:
     `span.subheading` "Testimonial" + `h2` "Happy Clients" (centered). 5
     `div.testimony-wrap` cards (owl carousel in the original; white, radius
     5px, border `rgba(0,0,0,0.02)`, shadow `0 5px 21px -14px rgba(0,0,0,0.14)`):
     quote `p` "Far far away, behind the word mountains, far from the
     countries Vokalia and Consonantia, there live the blind texts." +
     footer row: 80px circle user photo + `p.name` (20px, weight 500, black;
     "Roger Scott") + `span.position` (16px, `#cccccc`; "Marketing Manager").
  8. `section.ftco-section.ftco-candidates.bg-primary` — **Latest
     Candidates** (bg `#206dfb`): `span.subheading` "Candidates" +
     `h2` "Latest Candidates" (white, `heading-section-white`). 6 `a.team`
     cards (owl carousel in the original): 180px circle photo, `h2` name
     (20px, weight 500, white), `span.position` "Western City, UK" (14px,
     uppercase, weight 600, white). Names: Danica Lewis, Nicole Simon, Cloe
     Meyer, Rachel Clinton, Dave Buff, Dave Buff.
  9. `section.ftco-section.bg-light` — **Blog**: `span.subheading` "Our
     Blog" + `h2` "**Recent** Blog" (the word "Recent" is wrapped in a
     `<span>`). 4 × `col-md-3` `div.blog-entry` cards: `a.block-20` image
     (250px, cover) + `div.text.mt-3`: `div.meta` row (date "August 28,
     2019" · "Admin" · chat icon "3" — `#b3b3b3`) + `h3.heading` (18px,
     black link, hover `#206dfb`) "Even the all-powerful Pointing has no
     control about the blind texts" (same title on all 4 cards).
  10. `section.ftco-section-parallax` — **Newsletter**:
      `div.parallax-img` (bg **solid `#206dfb`**, `padding: 4em 0`): `h2`
      "Subcribe to our Newsletter" (white, weight 400; original typo
      "Subcribe" — fix to "Subscribe"), `p` `rgba(255,255,255,0.9)`,
      `form.subscribe-form`: white text input (placeholder "Enter email
      address", radius `5px 0 0 5px`, border transparent) + **Subscribe**
      submit (bg `#fdab44`, white, radius `0 5px 5px 0`).
  11. `footer.ftco-footer.ftco-bg-dark.ftco-section` — **footer**. NOTE:
      the live page renders **WHITE** (`background: #fff`) — the later
      `.ftco-footer { background: #fff }` rule in style.css overrides
      `.ftco-bg-dark { background: #3c312e }` (verified via computed styles;
      `#3c312e` is dead CSS on this page). Dark text on white. Layout:
      - Row 1, 4 widget columns + contact: **Skillhunt Jobboard** (recreate
        "Vocare Jobboard") — about paragraph + 3 round social icons (40px
        circles, bg `rgba(0,0,0,0.05)`, icon `#206dfb`: twitter, facebook,
        instagram); **Employers** (Browse Candidates, Post a Job, Employer
        Listing, Resume Page, Dashboard, Job Packages); **Candidate**
        (Browse Jobs, Submit Resume, Dashboard, Browse Categories, My
        Bookmarks, Candidate Listing); **Account** (My Account, Sign In,
        Create Account, Checkout); **Have a Questions?** — contact list:
        "203 Fake St. Mountain View, San Francisco, California, USA",
        phone "+2 392 3929 210", email "info@yourdomain.com". Widget
        headings 18px `rgba(0,0,0,0.7)`; links `rgba(0,0,0,0.4)`.
      - Row 2 (centered): copyright `p` "Copyright © <year> All rights
        reserved | This template is made with ❤ by Colorlib" → recreation:
        "…made with ❤ by Component Dock" linking
        `https://www.componentdock.com/`.
- **Behavior notes:** navbar gets `scrolled` class on scroll (white, fixed)
  via JS; counters animate on load; category cards / category rows / job
  posts are links to `#` (no real pages in the recreation — render as
  non-navigating or `href="#"`); testimonial + candidates + featured jobs are
  owl carousels in the original — the recreation may render them as static
  grids/rows (fidelity call for the implementer); hero search forms submit to
  `#` (no backend — the recreation should block submit / show no-op or a
  client-side message). Mobile navbar ≤991px: solid black bg, relative; the
  collapsed menu shows the same links (white `rgba(255,255,255,0.7)`). The
  original has NO hamburger-icon mobile menu (bootstrap collapse with "Menu"
  text + `oi oi-menu` icon). Section rhythm: `padding: 6em 0` per section.
  AOS/`ftco-animate` scroll-in animations on many sections (optional in the
  recreation).

## Design tokens (extracted from `css/style.css` + live computed styles)

- Page: `body { background: #fff; color: #999999; font-size: 16px;
line-height: 1.8; }` — section headings black `#000`; list/body text gray.
- Font: **"Source Sans Pro", Arial, sans-serif** (weights 300/400/600/700).
  Recreation: Google Fonts `<link>` in `index.html`.
- Brand blue: **#206dfb** — primary buttons (`btn-primary`), `bg-primary`
  sections, subheadings (`.heading-section .subheading`), `subadge` badges,
  active nav link when scrolled, icon colors, footer social icons, category
  row hover text, blog heading hover.
- Gradient (hero overlay + services band):
  `linear-gradient(to right, #207dff 0%, #a16ae8 100%)` (hero overlay at
  opacity 0.8 over `images/bg_1.jpg`).
- Orange accent: **#fdab44** — "Want a Job" CTA, inactive search tab,
  active top-category card bg, stat/category number colors, category arrow
  icons, newsletter submit button, nav link hover.
- Peach: **#ffefdb** — category row borders, category row hover bg, heart
  button circle bg. Number badge bg `#fffaf5`.
- Section light bg: **#f8f9fa** (`bg-light`: featured jobs, blog).
- Hero overlay: `rgba(0,0,0,0.8)` (gradient sits on top of it).
- White text variants: `rgba(255,255,255,0.8)` (hero lead), `0.9`
  (white-heading-section text), `0.7` (services copy, mobile nav links).
- Buttons (`.btn`): radius **5px**, `box-shadow: none`; `btn-primary`:
  `#206dfb` bg, white text, 1px `#206dfb` border; hover: transparent bg,
  `#206dfb` text/border.
- Navbar: transparent over hero (`top: 20px`), brand + links white, link
  hover `#fdab44`, active link `rgba(255,255,255,0.5)` (top) / `#206dfb`
  (scrolled); scrolled: fixed, `background: #fff`, shadow
  `0 0 10px 0 rgba(0,0,0,0.1)`; mobile ≤991px: `background: #000`,
  `position: relative`. CTA pills: 1px border + bg `#206dfb` (Post a Job) /
  `#fdab44` (Want a Job), radius 5px, padding `.5rem 20px`.
- Hero: `height: 800px` (900px ≤991px); `h1` 54px white (40px mobile),
  line-height 1.2; counters `strong` 30px white + 60px white icons; search
  tab active = white bg / black text, inactive = `#fdab44` bg / white text;
  search inputs white, border `rgba(0,0,0,0.1)`, 14px, padding-left 30px,
  icons `#d9d9d9`; Search button `#206dfb` radius 5px.
- Top category strip: `category-wrap` white, `margin-top: -70px` (≥992px),
  shadow `0 3px 14px -4px rgba(0,0,0,0.1)`; cards padding 20px, icon 40px
  `#206dfb`, `h3` 20px; `.active`/hover bg `#fdab44` (hover overrides to
  `#206dfb`), white icon/heading.
- Section headings: `subheading` 12px uppercase `#206dfb` letter-spacing 2px
  weight 600; `h2` 38px weight 500 black (28px mobile); white variants on
  blue bands.
- Category rows: 22px `#1a1a1a`, `border-bottom: 1px solid #ffefdb`,
  padding `10px 15px 10px 0`; hover `#206dfb` text on `#ffefdb` bg; number
  badge 16px `#fdab44` on `#fffaf5` radius 5px; arrow `#fdab44` fades in.
- Services band: gradient bg (above), icon 60px white, `h3` 18px 700 white,
  copy `rgba(255,255,255,0.7)`.
- Job post card: white, `margin-bottom: 20px`, padding 24px (`p-4`); `subadge`
  14px uppercase `#206dfb`; `h2` 28px black; company + location small text;
  heart circle 40px bg `#ffefdb`; Apply Job `#206dfb` button.
- Testimonial card: white, radius 5px, shadow `0 5px 21px -14px
rgba(0,0,0,0.14)`; user img 80px circle; name 20px 500 `#000`; position
  16px `#cccccc`.
- Candidates band: `bg-primary #206dfb`; team card img 180px circle; name
  20px 500 white; position 14px uppercase white.
- Blog card: `block-20` image 250px cover; meta small `#b3b3b3`; heading 18px
  black (hover `#206dfb`).
- Newsletter band: solid `#206dfb` bg, `padding: 4em 0`; h2 white weight 400;
  input white radius `5px 0 0 5px`; submit `#fdab44` white radius
  `0 5px 5px 0`.
- Footer: **white** bg, `padding: 6em 0`, text `rgba(0,0,0,0.5)`, widget
  headings 18px `rgba(0,0,0,0.7)`, links `rgba(0,0,0,0.4)`; social circles
  40px bg `rgba(0,0,0,0.05)` icon `#206dfb`; copyright centered.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/vocare-<n>/<w>/<h>` (deterministic per
  template): hero bg (seed vocare-hero), 5 testimonial faces, 6 candidate
  faces, 4 blog images. **Picsum seeds are arbitrary — verify the seeds
  render suitable subjects (professional/laptop hero, portrait headshots,
  office/tech blog photos) before shipping and pin verified seeds (see
  `docs/templates/vocare/tasks.md`).** Icons from `lucide-react`
  (briefcase, map-pin, user, search, layers, heart, calendar, message-circle,
  chevron-right, globe, building-2, file-text, twitter, facebook, instagram,
  menu); no ColorLib assets. Note: lucide-react removed brand icons
  (Facebook/Twitter/Instagram) — use inline SVG brand paths for the footer
  social icons.

## Requirements

### Requirement: Navbar

The system SHALL render the transparent navbar over the hero with links and
two CTA buttons, switching to a fixed white bar on scroll.

#### Scenario: Navbar renders over hero

- **GIVEN** the Vocare app is rendered at a desktop viewport
- **WHEN** the page is displayed at the top
- **THEN** a transparent navbar SHALL float over the hero with the white
  brand "Vocare" on the left
- **AND** the nav SHALL list Home (active), Browse Jobs, Candidates, Blog
  and Contact as white links
- **AND** two pill buttons SHALL render on the right: "Post a Job"
  (`#206dfb`) and "Want a Job" (`#fdab44`), both white text, radius 5px

#### Scenario: Navbar turns solid on scroll

- **GIVEN** the Vocare app is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become fixed with a white background and a soft
  shadow
- **AND** the active link SHALL turn blue `#206dfb`

#### Scenario: Mobile navbar

- **GIVEN** the Vocare app is rendered at a mobile viewport
- **WHEN** the page is displayed
- **THEN** the navbar SHALL render with a solid black background and the
  collapsed menu SHALL expose the same nav links and CTA buttons

### Requirement: Hero

The system SHALL render the gradient hero with headline, stat counters and
the tabbed search widget.

#### Scenario: Hero renders

- **GIVEN** the Vocare app is rendered
- **WHEN** the hero section is displayed
- **THEN** an 800px-tall hero SHALL render with a background image under a
  `#207dff → #a16ae8` gradient overlay
- **AND** the lead line "Find Job, Employment, and Career Opportunities" and
  the headline "The Easiest Way to Get Your New Job" SHALL render in white,
  centered
- **AND** three stat counters SHALL render: 46 Countries, 450 Companies,
  80000 Active Employees (icon + 30px white number + label)

#### Scenario: Search widget with tabs

- **GIVEN** the Vocare app is rendered
- **WHEN** the hero search widget is displayed
- **THEN** two tabs SHALL render — "Find a Job" (active, white background)
  and "Find a Candidate" (`#fdab44` background)
- **AND** the active tab SHALL show a form with a keyword input (placeholder
  "eg. Graphic, Web Developer"), a category select (Category / Full Time /
  Part Time / Freelance / Internship / Temporary), a location input and a
  blue "Search" button
- **AND** switching to "Find a Candidate" SHALL show a form with a name
  input (placeholder "eg. Adam Scott"), a category select, a location input
  and a blue "Search" button

### Requirement: Top category strip

The system SHALL render the six-card category strip overlapping the hero's
bottom edge.

#### Scenario: Category strip renders

- **GIVEN** the Vocare app is rendered at a desktop viewport
- **WHEN** the page is scrolled to the strip
- **THEN** a white card strip SHALL overlap the hero bottom by 70px, holding
  six category cards (Website & Software, Education & Training, Graphic &
  UI/UX Design, Accounting & Finance, Restaurant & Food, Health & Hospital)
  with a blue 40px icon, 20px title and "143 Open position" caption
- **AND** the second card SHALL render active with an orange `#fdab44`
  background and white icon/title

### Requirement: Top Categories list

The system SHALL render the 4×4 job-categories list.

#### Scenario: Category list renders

- **GIVEN** the Vocare app is rendered
- **WHEN** the Top Categories section is displayed
- **THEN** the subheading "Job Categories" (12px uppercase `#206dfb`) and the
  heading "Top Categories" (38px black) SHALL render centered
- **AND** 16 category rows SHALL render in four columns, each row showing
  the category name, an orange count badge (e.g. "354") and "Open position"
- **AND** hovering a row SHALL turn its text blue `#206dfb` on a peach
  `#ffefdb` background and fade in an orange arrow

### Requirement: Services band

The system SHALL render the gradient services band with four feature cards.

#### Scenario: Services render

- **GIVEN** the Vocare app is rendered
- **WHEN** the services section is displayed
- **THEN** a full-width band with the `#207dff → #a16ae8` gradient SHALL
  render four cards (Search Millions of Jobs, Easy To Manage Jobs, Top
  Careers, Search Expert Candidates), each with a 60px white icon, an 18px
  bold white title and a short gray-white paragraph

### Requirement: Featured jobs

The system SHALL render the featured-jobs list of nine job post cards.

#### Scenario: Job posts render

- **GIVEN** the Vocare app is rendered
- **WHEN** the Featured Jobs section is displayed on a light-gray `#f8f9fa`
  background
- **THEN** the subheading "Recently Added Jobs" and heading "Featured Jobs
  Posts For This Week" SHALL render
- **AND** nine white job cards SHALL render, each with an uppercase blue
  badge (Partime / Fulltime / Freelance / Temporary / Internship), a 28px
  black title, a company name and "Western City, UK"
- **AND** each card SHALL show a round heart button and a blue "Apply Job"
  button on the right

### Requirement: Testimonials

The system SHALL render the testimonials section with five client quotes.

#### Scenario: Testimonials render

- **GIVEN** the Vocare app is rendered
- **WHEN** the Testimonials section is displayed
- **THEN** the subheading "Testimonial" and heading "Happy Clients" SHALL
  render centered
- **AND** five white quote cards SHALL render, each with a quote paragraph,
  an 80px circular photo, a 20px black name ("Roger Scott") and a gray
  position ("Marketing Manager")

### Requirement: Latest candidates

The system SHALL render the blue candidates band with six candidate cards.

#### Scenario: Candidates render

- **GIVEN** the Vocare app is rendered
- **WHEN** the Latest Candidates section is displayed
- **THEN** a solid-blue `#206dfb` band SHALL render with the subheading
  "Candidates" and the white heading "Latest Candidates"
- **AND** six candidate cards SHALL render, each with a 180px circular
  photo, a white 20px name and an uppercase white location "Western City,
  UK"

### Requirement: Blog

The system SHALL render the blog grid with four post cards.

#### Scenario: Blog renders

- **GIVEN** the Vocare app is rendered
- **WHEN** the Blog section is displayed on a light-gray `#f8f9fa`
  background
- **THEN** the subheading "Our Blog" and the heading "Recent Blog" SHALL
  render centered
- **AND** four blog cards SHALL render, each with a 250px cover image, a
  meta row (date, "Admin", comment count), and an 18px black post title

### Requirement: Newsletter

The system SHALL render the solid-blue newsletter band with the orange
Subscribe button.

#### Scenario: Newsletter renders

- **GIVEN** the Vocare app is rendered
- **WHEN** the newsletter section is displayed
- **THEN** a solid-blue `#206dfb` band SHALL render with the white heading
  "Subscribe to our Newsletter" and a short white paragraph
- **AND** an email input (placeholder "Enter email address") and an orange
  `#fdab44` "Subscribe" button SHALL render side by side

### Requirement: Footer

The system SHALL render the white footer with four link columns, a contact
widget and the copyright/credit row.

#### Scenario: Footer renders

- **GIVEN** the Vocare app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a white footer SHALL render with the brand column ("Vocare
  Jobboard" + about text + three circular social icons), the Employers,
  Candidate and Account link columns, and a "Have a Questions?" contact
  widget (address, phone, email)
- **AND** a centered copyright row SHALL render: "Copyright © <year> All
  rights reserved" plus a credit line linking to
  `https://www.componentdock.com/` ("Component Dock")

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Vocare app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: navbar → hero (with search
  widget) → top category strip → top categories → services → featured jobs →
  testimonials → latest candidates → blog → newsletter → footer
- **AND** the document title SHALL be "Vocare — Job Board"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- vocare` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: transparent navbar (scrolled = fixed
      white), 800px gradient hero with counters + tabbed search, 6-card
      overlapping category strip (2nd card active orange), 4×4 category
      list, gradient services band (4 cards), 9 featured job posts, 5
      testimonials, 6 candidates on blue, 4 blog cards, blue newsletter
      band, white 4-column footer (11 sections in the order above).
- [ ] Design tokens applied: brand `#206dfb`, gradient `#207dff → #a16ae8`,
      accent `#fdab44`, peach `#ffefdb`, `#fffaf5` badges, `bg-light`
      `#f8f9fa`, white footer with `rgba(0,0,0,…)` text, Source Sans Pro
      font, 5px button radius, section padding `6em 0`.
- [ ] Hero search tabs switch forms (aria roles: tablist/tab/tabpanel,
      `aria-selected`); search forms do not navigate (no backend).
- [ ] All images are picsum-seeded placeholders (no ColorLib assets) and the
      seeds were verified to render suitable subjects; icons from
      lucide-react / inline SVG brand icons (footer social).
- [ ] PR description records source (ColorLib Skillhunt), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks ALL THREE copies
      (lines 496, 1166, 2005) `[x]` when done; footer links
      `https://www.componentdock.com/`.
