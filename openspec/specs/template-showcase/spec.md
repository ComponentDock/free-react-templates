# Template: Showcase (Portfolio)

## Purpose

Showcase is a single-page personal-portfolio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Ronaldo" design (see TEMPLATES.md — first `- [ ]` item whose
prep did not exist on main; the slug also appears as duplicates in other
category sections), built under the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a personal-portfolio landing page: a transparent navbar over
the hero (indigo-circle "R" logo + "Ronaldo" brand, right-aligned links Home /
About / Resume / Services / Projects / My Blog / Contact, black links with
indigo underline animation, fixed white blurred bar on scroll), a full-height
hero on a pale lavender background with a left-half indigo overlay at 10%
opacity, centered text ("HEY! I AM" kicker, "Ronaldo Fredrickson" 60px/800
headline, "I'm a" + rotating role word with typing animation and indigo
underline), and a centered scroll-down mouse indicator; an About split
(headshot photo in a rounded 16px frame + "120 Project complete" count-up +
indigo "Download CV" button on the left; "About Me" heading, Duden paragraph,
and a 6-row detail list Name / Date of birth / Address / Zip code / Email /
Phone on the right); a greyscale partner-logo strip; a Resume section with a
4-tab pill nav (Education / Experience / Skills / Awards) — Education tab with
4 resume cards (50px indigo-tinted icon box, indigo date, title, school,
paragraph), Experience with 6 cards, Skills with 3 circular progress meters
(CSS3 90 Advanced, HTML5 95 Expert, JavaScript 85 Advanced) + 6 linear bars
(Photoshop 90, jQuery 85, HTML5 95, CSS3 90, WordPress 70, SEO 80), Awards
with 4 cards; a Services grid of 6 white cards (icon + uppercase title +
blurb: Web Design, Photography, Web Development, App Development, Branding,
Product Strategy) that lift on hover; a Projects grid of 6 image tiles that
reveal an indigo overlay + "Branding & Illustration Design" title and "Web
Design" label on hover; a white counter-card band (Awards 100 / Projects 1200
/ Clients 1200 / Coffees 500, indigo 36px numbers that count up); a Blog
section with 3 white cards (image, meta "March 10, 2032 · Admin · 3", title
"Why Lead Generation is Key for Business Growth", excerpt); a full-width
"Hire me" CTA band on a background photo under an indigo gradient overlay
("I'm Available for freelancing" + indigo "Hire me" button); a Contact
section with 4 icon cards (Address / Phone / Email / Website) and a
contact form (Your Name, Your Email, Subject, Message, "Send Message"
indigo button); and a black footer (About blurb + 4 round social icon
buttons, Links, Services, "Have a Questions?" contact info, copyright bar).
Showcase recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Ronaldo" — free personal portfolio website template
  (source: https://colorlib.com/wp/template/ronaldo/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/ronaldo/`
  (HTTP 200, ~42.5KB) + stylesheet `css/style.css` (~272KB, Bootstrap 5 base
  - custom `ftco-*` theme) plus `flaticon.css` / `icomoon.css` (icons),
    `animate.css`, `aos.css`, and Google Fonts "Poppins" 300–700. The rendered
    DOM is the reference below; the TEMPLATES.md screenshot
    (`ronaldo-free-template.jpg`, 1200×946) confirms the visual design: pale
    lavender/blue hero block with centered dark headline + underlined blue
    rotating word and a typing cursor, indigo "HEY! I AM" kicker, indigo circle
    logo mark, black nav links, white About section with a smiling bearded man
    headshot on a grey backdrop, dark grey body text. Palette: white base,
    indigo #4f46e5 primary (logo circle, kickers, underlines, active nav,
    buttons, counters, progress bars, resume dates, hover overlays), near-black
    #111827 headings, black #000000 nav text and footer.
- **Section order (1:1):**
  1. `nav#ftco-navbar.navbar.navbar-expand-md.navbar-dark.ftco_navbar.ftco-navbar-light.site-navbar-target`
     — transparent, position absolute top 0 (z-index 3); `a.navbar-brand`
     "Ronaldo" — the brand icon is a 40×40 indigo circle (`background:
#4f46e5`, radius 50%, `span` white) containing a stylized "R" with the
     wordmark text in black; right `ul.navbar-nav.nav.ms-auto` links **Home,
     About, Resume, Services, Projects, My Blog, Contact** — each
     `a.nav-link` 16px, color #000, padding 0.7rem 20px, with an
     `span:before` 2px indigo underline that scaleX(0)→1 on hover; `.active`
     link stays indigo with underline visible. On scroll (`.scrolled`):
     fixed top, `rgba(255,255,255,0.95)` + backdrop blur 10px + subtle
     shadow, links turn black. Mobile (<768px): hamburger toggler (navbar
     toggler-icon), collapsed links #374151 with hover indigo.
  2. `section.hero-wrap.js-fullheight` — full-height hero (100vh, computed
     577px @1280w), light background (white page bg + `div.overlay`: absolute,
     left half only — 50% width, `background: #4f46e5`, `opacity: .1` → the
     pale lavender wash seen in the screenshot); `div.container > div.row.g-0.slider-text.js-fullheight.justify-content-center.align-items-center`
     with a centered `div.text.text-center` column (col-lg-8): `span.subheading`
     **Hey! I am** (uppercase, 16px, weight 800, #4f46e5, letter-spacing 4px),
     `h1` **Ronaldo Fredrickson** (60px / weight 800 / near-black; 40px on
     ≤576px), `h2` **I'm a** + `span.txt-rotate` rotating word (weight 800;
     the rotating word renders indigo with `text-decoration: underline`;
     rotates through "Web Designer.", "Developer.", "Photographer.",
     "Marketer.", "Blogger" with a typing animation, ~2s period); bottom
     `div.mouse` centered (left/right 0, bottom 80px): `a.mouse-icon`
     50×50px circle, 2px `rgba(255,255,255,0.3)` border, containing a white
     20px arrow (`icon-long-arrow-right` rotated 90°) with a 1.6s
     wheel-up-down animation, `aria-label="Scroll down to About section"`.
  3. `section#about-section.ftco-about.img.ftco-section.ftco-no-pt.ftco-no-pb`
     — two columns: left `div.col-md-6.order-md-last.d-flex` >
     `div.img-about.img.d-flex.align-items-stretch` (rounded 16px, overflow
     hidden, background image `images/about.jpg` — headshot of a smiling
     bearded man in a dark jacket on a grey backdrop) with below it `p.mb-4`:
     `span.number[data-number="120"]` **0** (indigo 72px bold, counts up to 120) + **Project complete**, then `a.btn.btn-primary.py-3.px-3`
     **Download CV**; right `div.col-md-6.ps-md-5.py-5` > `div.about-info`:
     `h2` **About Me** (heading-section style: 42px / 600 / #111827),
     paragraph "A small river named Duden flows by their place and supplies
     it with the necessary regelialia.", `ul.list-unstyled` of 6 rows
     (**Name:** Ronaldo Fredrickson · **Date of birth:** November 28, 2002 ·
     **Address:** San Francisco CA 97987 USA · **Zip code:** 1000 ·
     **Email:** ronaldo@gmail.com · **Phone:** +1-2234-5678-9-0), each
     label + value in #374151.
  4. `section.ftco-section.ftco-partner` — thin strip (padding 4em 0) with a
     row of 5 greyscale partner logo images (`images/partner-1..5.png` /
     .webp) — recreate as a flex row of muted text/logotype placeholders.
  5. `section#resume-section.ftco-section.ftco-no-pb.goto-here` — heading
     **Resume**; `ul.nav.nav-pills` 4 tabs — **Education**, **Experience**,
     **Skills**, **Awards** — pill style, active pill bg #4f46e5 white text;
     tab panels:
     - Education: 4 `div.resume-wrap.d-flex.ftco-animate` cards —
       `div.icon` 50×50px, `background: rgba(79,70,229,0.1)`, radius 8px,
       flaticon glyph; `div.text.ps-3`: `span.date` (indigo, 14px/600),
       `h2` title (20px/600 #111827), `span.position` school, lorem
       paragraph. Entries: **2024-2028** Bachelor of Science in Computer
       Science (Stanford University) · **2028-2030** Master's in
       Human-Computer Interaction (MIT Media Lab) · **2022-2023** UX Design
       Professional Certificate (Google Career Certificates) · **2030-2032**
       Art & Creative Director (Cambridge University). Card: white bg,
       1px #e5e7eb border, radius 12px, padding 1.5rem.
     - Experience: 6 cards (same layout): **2030-2032** Software Developer /
       Web Designer / Web Marketing / Art & Creative Director / Wordpress
       Developer (Cambridge University), **2028-2030** UI/UX Designer
       (Cambridge University; one entry's org is "Side Tech").
     - Skills: 3 `div.progress-wrap` circular meters with
       `div.progress-value` (white %, ring in indigo shades) — **CSS3 90%
       Advanced**, **HTML5 95% Expert**, **JavaScript 85% Advanced** — then 6
       `div.progress-wrap` linear bars with `div.progress-bar.color-1..6`
       (bg #4f46e5): **Photoshop 90%**, **jQuery 85%**, **HTML5 95%**,
       **CSS3 90%**, **WordPress 70%**, **SEO 80%**.
     - Awards: 4 cards: **2030-2032** Top 10 Web Developer · Top 5
       LeaderShip Exellence Winner · Top 4 Web Tester · Art & Creative
       Director (Cambridge University).
  6. `section#services-section.ftco-section` — heading **Services** + 6
     `div.services-1` cards (white, 1px #e5e7eb border, radius 12px, padding
     2em, margin-bottom 40px): `div.icon` flaticon (large icon, ~100px
     wrapper) + `h3` uppercase title (**WEB DESIGN**, **PHOTOGRAPHY**, **WEB
     DEVELOPMENT**, **APP DEVELOPMENT**, **BRANDING**, **PRODUCT STRATEGY**)
     - description paragraph; hover: `translateY(-4px)` + soft shadow
       `0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)`,
       border-color transparent.
  7. `section#projects-section.ftco-section.ftco-project` — heading **Our
     Projects** + 6 `div.project.img.ftco-animate` tiles (100% × 350px,
     background images `images/work-1..6.jpg`): `div.overlay` absolute inset
     0, bg #4f46e5, opacity 0 → 0.9 on hover; centered `div.text` (max-width
     80%, opacity 0 → 1): `h3` **Branding & Illustration Design** (20px) +
     `span` **WEB DESIGN** (uppercase, 12px/600, letter-spacing 2px,
     rgba(255,255,255,0.8)).
  8. `section#section-counter.ftco-section.ftco-no-pt.ftco-no-pb.ftco-counter.img`
     — `div.container-fluid.px-md-5` row of 4 `div.counter-wrap` >
     `div.block-18` white cards (padding 32px 24px, radius 12px, 1px #e5e7eb
     border, centered): `strong.number[data-number]` (36px/600 #4f46e5,
     counts up from 0) + `span` label (13px uppercase, letter-spacing 1px,
     #6b7280) — **Awards 100**, **Projects 1200**, **Clients 1200**,
     **Coffees 500**.
  9. `section#blog-section.ftco-section` — heading **Our Blog** + 3
     `div.blog-entry` cards (white, radius 12px, overflow hidden, 1px
     #e5e7eb border): image (`images/image_1..3.jpg`) + `div.text` (padding
     1.5rem): meta row (date **March 10, 2032** · **Admin** · comment count
     **3**, 16px/600), `h3` title (20px/500) **Why Lead Generation is Key
     for Business Growth** (link), lorem excerpt.
  10. `section.ftco-section.ftco-hireme.img` — full-width CTA band with
      background image `images/bg_1.jpg` + `div.overlay` `linear-gradient
(135deg, rgba(79,70,229,0.85) 0%, rgba(37,27,195,0.9) 100%)`, centered:
      `h2` **I'm Available for freelancing** (40px/900 white) + lorem
      paragraph (rgba(255,255,255,0.9)) + `a.btn.btn-primary.py-3.px-5`
      **Hire me**.
  11. `section#contact-section.ftco-section.contact-section.ftco-no-pb` —
      heading **Contact Me**; `div.row.g-4.contact-info.mb-5` 4 icon cards
      (icon + `h3` + value link): **Address** 198 West 21th Street, Suite
      721 New York NY 10016 · **Phone** +1 235 2355 98 · **Email**
      info@yoursite.com · **Website** yoursite.com; then `div.block-9`
      contact form: inputs **Your Name**, **Your Email**, **Subject**,
      **Message** (textarea) + `button.btn.btn-primary.py-3.px-5`
      **Send Message**.
  12. `footer.ftco-footer.ftco-section` — background #000000, padding 7em 0:
      4 `div.ftco-footer-widget` columns — **About** (Duden blurb +
      `ul.ftco-footer-social` of 4 round 50×50px icon buttons,
      `rgba(255,255,255,0.1)` bg, radius 50%, hover indigo — Twitter,
      Facebook, Instagram, LinkedIn), **Links** (Home, About, Services,
      Projects, Contact), **Services** (Web Design, Web Development,
      Business Strategy, Data Analysis, Graphic Design), **Have a
      Questions?** (address 203 Fake St. Mountain View, San Francisco,
      California, USA; phone +2 392 3929 210; email info@yourdomain.com);
      copyright bar — "Copyright © {year} All rights reserved | This
      template is made with by Colorlib" → repo-standard credit.
- **Design tokens extracted from `css/style.css` (+ preview HTML):**
  - Fonts: **Poppins** (300/400/500/600/700) via Google Fonts `<link>` —
    body + headings; hero h1 60px/800 (40px mobile), section titles 42px/600,
    card titles 20px/600, hero subheading kicker 16px/800 uppercase
    letter-spacing 4px, section subheading 12px/500 uppercase letter-spacing
    2px, counter labels 13px uppercase letter-spacing 1px, footer 16px.
  - Primary indigo: **#4f46e5** — brand logo circle, hero kicker + rotating
    word underline, nav underline animation + active link, `.btn-primary`
    bg/border, resume dates, resume icon box tint, skill/progress bars,
    counter numbers, project hover overlay, hire-me overlay gradient start,
    active pill. Hover → **#433cc3** (btn hover bg), active **#3f38b7**.
  - Dark navy text: **#111827** — heading-section h2, resume h2, `.btn-white`
    text; **#000000** — nav links, brand wordmark, hero h1, footer bg;
    **#374151** — mobile nav links, about detail values, contact-info links.
  - Grays: **#6b7280** (counter labels), **#4b5563**/**#e5e7eb** (card
    borders), **#f3f4f6** light surfaces, **rgba(255,255,255,0.7)** footer
    body text.
  - Buttons `.btn-primary`: solid #4f46e5 bg, white text, 1px #4f46e5
    border; variants `py-3 px-5` (Hire me / Send Message) and `py-3 px-3`
    (Download CV); standard Bootstrap radius (0.375rem).
  - Cards (resume-wrap, services-1, blog-entry, block-18): white, 1px
    #e5e7eb border, **radius 12px**; hover lift `translateY(-4px)` + soft
    shadow (services-1).
  - Icon boxes: resume icon 50×50px `rgba(79,70,229,0.1)` radius 8px;
    footer social buttons 50×50px `rgba(255,255,255,0.1)` radius 50%;
    about image frame radius 16px.
  - Hero: full-height; centered text; left-half #4f46e5 overlay at 0.1
    opacity (the pale lavender wash); scroll mouse 50px circle 2px
    rgba(255,255,255,0.3) border, white 20px arrow, 1.6s bounce.
  - Hire-me band: bg photo + `linear-gradient(135deg, rgba(79,70,229,0.85),
rgba(37,27,195,0.9))` overlay; h2 40px/900 white; p rgba(255,255,255,0.9).
  - Section paddings: 7em 0 (`ftco-section`); partner strip 4em 0; footer
    7em 0; heading bottom margin ~40px.
  - Navbar: transparent absolute over hero; scrolled state fixed white 95%
    - blur(10px); brand 40px indigo circle logo with white letter + black
      wordmark; links 16px #000 with 2px indigo underline scaleX animation.
  - Spacing rhythm: 40px between cards (services margin-bottom 40px), 24px
    resume card margin, 12px footer social gap.
- **Recreation decisions:** navbar = transparent over hero with indigo circle
  "S" logo + "Showcase" wordmark, right links (Home, About, Resume, Services,
  Projects, My Blog, Contact) with indigo underline hover, fixed white blur
  bar on scroll, mobile hamburger menu; hero = full-height pale-lavender band
  (left-half indigo 10% overlay), centered "Hey! I am" kicker, "Showcase"
  headline → keep the original's personal name as a placeholder person name
  (e.g. "Alex Rivera"), rotating role word (typed effect: Web Designer →
  Developer → Photographer → Marketer → Blogger) with indigo underline, and
  a centered scroll mouse; about = photo-left rounded frame (picsum headshot
  seed) + 120 count-up + "Download CV" button, right detail list; partner
  strip = 5 muted logotype placeholders; resume = pill tabs with 4 panels
  (education 4 entries, experience 6, skills 3 circular + 6 linear bars,
  awards 4); services = 6 lifting cards with lucide icons (note: lucide
  lacks brand icons — use inline SVG for footer socials); projects = 6 image
  tiles with indigo hover overlay; counter band = 4 white cards with count-up
  numbers; blog = 3 cards; hire-me = indigo gradient overlay band with
  "Hire me" button; contact = 4 icon cards + validated form (zod +
  react-hook-form patterns); footer = black 4-column with social buttons.
  Placeholder images via `https://picsum.photos/seed/showcase-<n>/<w>/<h>`
  (about/headshot, project tiles, blog thumbs; hire-me band background).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with an indigo
circle logo mark, a brand wordmark, seven navigation links, an active-section
underline, a fixed white blurred bar after scrolling, and a mobile hamburger
menu.

#### Scenario: Navbar content

- **GIVEN** the Showcase page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show an indigo circle logo mark with the "Showcase"
  wordmark on the left
- **AND** it SHALL show the nav links Home, About, Resume, Services,
  Projects, My Blog, and Contact on the right (desktop viewports)
- **AND** each link SHALL be black with a 2px indigo underline that animates
  in on hover

#### Scenario: Section navigation

- **GIVEN** the navbar is displayed
- **WHEN** the user clicks a nav link
- **THEN** the page SHALL scroll to the matching section (About →
  #about-section, Resume → #resume-section, Services → #services-section,
  Projects → #projects-section, Blog → #blog-section, Contact →
  #contact-section; Home → top)
- **AND** the link for the currently-visible section SHALL show the indigo
  underline active state

#### Scenario: Scroll state

- **GIVEN** the page is scrolled past the hero
- **WHEN** the navbar passes the top of the viewport
- **THEN** it SHALL become fixed with a white translucent background
  (rgba(255,255,255,0.95)) and backdrop blur

#### Scenario: Mobile menu

- **GIVEN** the navbar is displayed on a narrow viewport
- **WHEN** the user activates the hamburger control
- **THEN** the nav links SHALL be revealed in a collapsed menu
- **AND** the control SHALL toggle `aria-expanded`
- **AND** activating it again SHALL hide the menu

### Requirement: Hero

The system SHALL render a full-height hero with a pale lavender background
(left-half indigo overlay at 10% opacity), centered intro text with a
rotating typed role word, and a scroll-down mouse indicator.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the uppercase kicker "Hey! I am" in indigo with wide
  letter spacing
- **AND** it SHALL show a large 60px headline with a person name (e.g. "Alex
  Rivera")
- **AND** it SHALL show "I'm a" followed by a rotating role word
  ("Web Designer.", "Developer.", "Photographer.", "Marketer.", "Blogger")
- **AND** the rotating word SHALL be indigo with an underline and cycle with
  a typing animation

#### Scenario: Scroll indicator

- **GIVEN** the hero is displayed
- **WHEN** the user inspects the bottom of the hero
- **THEN** it SHALL show a 50px circle mouse indicator with an animated
  arrow
- **AND** the indicator SHALL link to the About section
- **AND** it SHALL carry an accessible label

### Requirement: About

The system SHALL render an About section with a rounded portrait photo, a
"120 Project complete" count-up stat, a "Download CV" button, and a six-row
personal detail list.

#### Scenario: About content

- **GIVEN** the About section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show a rounded portrait photo frame on the left
- **AND** it SHALL show the "About Me" heading, an intro paragraph, and a
  6-row detail list (Name, Date of birth, Address, Zip code, Email, Phone)
  with labels and values

#### Scenario: Count-up stat

- **GIVEN** the About section is scrolled into view
- **WHEN** the counter becomes visible
- **THEN** the number SHALL count up from 0 to 120
- **AND** the label "Project complete" SHALL be shown next to it
- **AND** an indigo "Download CV" button SHALL render below the counter

### Requirement: Partner strip

The system SHALL render a thin strip of five muted partner logotype
placeholders between the About and Resume sections.

#### Scenario: Partner logos

- **GIVEN** the page is scrolled past the About section
- **WHEN** the partner strip is displayed
- **THEN** it SHALL show five greyscale partner logotype placeholders in a
  single row, wrapping on narrow viewports

### Requirement: Resume tabs

The system SHALL render a Resume section with a heading, four pill tabs
(Education, Experience, Skills, Awards), and distinct panels per tab with
white cards, indigo dates, tinted icon boxes, and progress meters.

#### Scenario: Tab switching

- **GIVEN** the Resume section is visible
- **WHEN** the user clicks a pill tab
- **THEN** the matching panel SHALL become visible
- **AND** the active pill SHALL show the indigo active style
- **AND** the tab SHALL expose the proper tab/tabpanel ARIA roles and
  `aria-selected` state

#### Scenario: Education panel

- **GIVEN** the Education tab is active
- **WHEN** the panel is rendered
- **THEN** it SHALL list 4 entries (date, title, school, blurb) with indigo
  dates and tinted icon boxes in white cards with a 1px border, 12px radius,
  and hover lift

#### Scenario: Experience panel

- **GIVEN** the Experience tab is active
- **WHEN** the panel is rendered
- **THEN** it SHALL list 6 entries with the same card layout as Education

#### Scenario: Skills panel

- **GIVEN** the Skills tab is active
- **WHEN** the panel is rendered
- **THEN** it SHALL show 3 circular progress meters (CSS3 90% Advanced,
  HTML5 95% Expert, JavaScript 85% Advanced)
- **AND** it SHALL show 6 linear progress bars (Photoshop 90, jQuery 85,
  HTML5 95, CSS3 90, WordPress 70, SEO 80)
- **AND** each meter SHALL expose `role="progressbar"` with an
  `aria-valuenow`

#### Scenario: Awards panel

- **GIVEN** the Awards tab is active
- **WHEN** the panel is rendered
- **THEN** it SHALL list 4 award entries in the same card layout

### Requirement: Services

The system SHALL render a Services section with a heading and six white cards
(icon, uppercase title, description) that lift with a soft shadow on hover.

#### Scenario: Service cards

- **GIVEN** the Services section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the "Services" heading and 6 cards: Web Design,
  Photography, Web Development, App Development, Branding, Product Strategy
- **AND** each card SHALL show an icon, an uppercase title, and a
  description

#### Scenario: Card hover

- **GIVEN** a service card is displayed
- **WHEN** the user hovers or focuses it
- **THEN** the card SHALL lift up (translateY -4px) with a soft shadow and a
  cleared border

### Requirement: Projects

The system SHALL render a Projects section with a heading and six image tiles
that reveal an indigo overlay with a title and label on hover or focus.

#### Scenario: Project tiles

- **GIVEN** the Projects section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the "Our Projects" heading and 6 image tiles

#### Scenario: Tile overlay

- **GIVEN** a project tile is displayed
- **WHEN** the user hovers or focuses it
- **THEN** an indigo overlay SHALL fade in over the image
- **AND** the tile SHALL show the title "Branding & Illustration Design" and
  the label "WEB DESIGN" in white
- **AND** the tile SHALL be keyboard-focusable

### Requirement: Counter band

The system SHALL render a band of four white cards with indigo count-up
numbers and uppercase labels.

#### Scenario: Counter cards

- **GIVEN** the counter band is scrolled into view
- **WHEN** it is rendered
- **THEN** it SHALL show 4 white cards with labels Awards, Projects, Clients,
  and Coffees
- **AND** each card SHALL show an indigo number that counts up from 0 to its
  target (100, 1200, 1200, 500)

### Requirement: Blog

The system SHALL render a Blog section with a heading and three white cards,
each with an image, a meta row, a linked title, and an excerpt.

#### Scenario: Blog cards

- **GIVEN** the Blog section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the "Our Blog" heading and 3 white cards
- **AND** each card SHALL show an image, a meta row (date · Admin · 3
  comments), a linked title "Why Lead Generation is Key for Business
  Growth", and an excerpt

### Requirement: Hire-me band

The system SHALL render a full-width CTA band on a background image under an
indigo gradient overlay with a heading, paragraph, and a "Hire me" button.

#### Scenario: Hire-me content

- **GIVEN** the Hire-me band is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "I'm Available for freelancing" and a
  paragraph on an indigo gradient overlay over a background image
- **AND** it SHALL show an indigo "Hire me" button linking to the Contact
  section

### Requirement: Contact

The system SHALL render a Contact section with a heading, four icon info
cards, and a validated contact form (Your Name, Your Email, Subject, Message)
with a "Send Message" button.

#### Scenario: Contact info

- **GIVEN** the Contact section is visible
- **WHEN** it is rendered
- **THEN** it SHALL show the "Contact Me" heading and 4 icon cards: Address,
  Phone, Email, Website with their values

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits it with invalid or empty fields
- **THEN** per-field error messages SHALL appear
- **AND** no submission SHALL occur

#### Scenario: Successful submit

- **GIVEN** the contact form is displayed
- **WHEN** the user fills all fields validly and submits
- **THEN** a success state SHALL replace the form content

### Requirement: Footer

The system SHALL render a black footer with four columns (About with social
buttons, Links, Services, Have a Questions?) and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page bottom is reached
- **WHEN** the footer is displayed
- **THEN** it SHALL show an About column with a blurb and 4 round social icon
  buttons with accessible labels
- **AND** it SHALL show a Links column (Home, About, Services, Projects,
  Contact)
- **AND** it SHALL show a Services column (Web Design, Web Development,
  Business Strategy, Data Analysis, Graphic Design)
- **AND** it SHALL show a "Have a Questions?" column with address, phone, and
  email
- **AND** the copyright bar SHALL show "Copyright © {year} All rights
  reserved" with the repo-standard credit

### Requirement: Composition

The system SHALL render all sections on one page in the original order with
the indigo brand color defined as a theme token.

#### Scenario: Section order

- **GIVEN** the page is rendered
- **WHEN** the full page is inspected
- **THEN** the sections SHALL appear in order: Navbar → Hero → About →
  Partner strip → Resume → Services → Projects → Counter band → Blog →
  Hire-me band → Contact → Footer

#### Scenario: Theme token

- **GIVEN** the app stylesheet is loaded
- **WHEN** the theme is inspected
- **THEN** the brand color #4f46e5 SHALL be defined in `@theme` and used via
  Tailwind classes throughout the sections

## Verification checklist

- [ ] `npm run spec:validate` passes for `openspec/specs/template-showcase`.
- [ ] Tests written first (red), then implementation (green) per
      docs/replication.md TDD flow.
- [ ] `npm run verify:app -- showcase` passes: typecheck + lint + vitest at
      100% coverage (lines/functions/branches/statements) + build.
- [ ] Section order 1:1 with the original (navbar → hero → about → partner →
      resume → services → projects → counters → blog → hire-me → contact →
      footer).
- [ ] Design tokens match: #4f46e5 primary in `@theme`, Poppins font via
      Google Fonts `<link>`, 12px card radii, indigo buttons, black footer,
      pale-lavender hero with left-half indigo overlay.
- [ ] Rotating hero word + count-up counters + scroll-mouse animation work.
- [ ] Navbar scroll state (fixed white blurred) and mobile hamburger work.
- [ ] Contact form validates with zod; success state on valid submit.
- [ ] No ColorLib assets copied: picsum placeholders, lucide-react +
      inline-SVG brand icons, Google Fonts.
- [ ] PR description records: source template (ColorLib Ronaldo), preview
      URL, design tokens used, deviations (renamed person name, picsum
      images, paraphrased copy).
