# Template: Maverick (Personal Portfolio / CV)

## Purpose

Maverick is a single-page personal portfolio / CV website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Clark" design (see TEMPLATES.md — line 359, Bootstrap category; the
same source is DUPLICATED at lines 2299, 2386 and 2710 — ALL FOUR rows must be
marked `[x]` when done), built under a NEW name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a dark freelance-web-designer portfolio: a transparent navbar
over a black 2-slide hero carousel (cutout portraits right, "I'm Clark
Thompson" headline with an amber highlighted name, "A Freelance Web Designer"
subline, amber "Hire me" + white-ghost "My works" pill buttons), an About
section (portrait left; "About Me" heading, lorem, personal-info list, "120
Project complete" counter, amber "Download CV" button), a Resume section
(six dark cards in a 2-column grid — three education entries and three job
roles, each with an amber date, white title and uppercase institution), a
Services section (six cards with large amber icons that flip to an amber
background on hover), a Skills section (six amber progress bars), a Projects
masonry grid (six photo tiles with a black hover overlay), a Blog section
(three image + meta + title cards), a photo-backed counter band (Awards /
Complete Projects / Happy Customers / Cups of coffee), an amber "I'm
Available for freelancing" hire-me band, a Contact section (four icon info
boxes + name/email/subject/message form + photo), and a black four-column
footer. The brand accent is **amber `#ffbd39`** on a **black `#000000`**
background, the **Poppins** font family, **pill (40px radius)** buttons, and
a `7em` vertical section rhythm with oversized faint watermark headings.
Maverick recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Clark" — `https://colorlib.com/wp/template/clark/`
  (Bootstrap category item, personal portfolio / CV style). TEMPLATES.md has
  **FOUR copies** of this item (lines 359, 2299, 2386, 2710 — all `- [ ]`);
  mark ALL FOUR `[x]` when done. None is shipped yet and no other spec
  targets this source.
- **Preview URL:** `https://preview.colorlib.com/theme/clark/` — **HTTP 200**
  (39.9 KB), fully reachable; structure + tokens below are from this live
  DOM and its `css/style.css` (72.8 KB). Screenshot used to confirm the
  visual design (see below).
- **Screenshot:** `clark-free-template.jpg` (verified via browser vision of
  the live render): hero is **solid black** with a cutout portrait of a man
  with glasses/beard top-right and a second portrait bottom-left; "HELLO!"
  amber uppercase; headline white with the highlighted word in amber; "HIRE
  ME" solid amber pill + "MY WORKS" white-outline ghost pill; navbar brand
  "CLARK" white with the active link amber-underlined. All interior sections
  stay on black with amber accents (the white/light panels visible in some
  stock screenshots are NOT part of this design).
- **Section structure (from the live DOM, in order):**
  1. `nav#ftco-navbar.ftco-navbar-light` — absolute/transparent over the
     hero; on scroll (`.scrolled`) becomes `position: fixed` with
     `background: #000000` and a soft shadow. Brand text "CLARK" (white;
     recreate as "Maverick"). Links: **Home, About, Resume, Services,
     Skills, Projects, My Blog, Contact** (16px, white, 20px horizontal
     padding; active + hover get an amber underline via `span:before`
     scaleX animation). Mobile: black navbar + hamburger → slide-in menu.
  2. `section#home-section.hero` — owl carousel, **2 slides**; each slide:
     `h1` (60px, weight 800, white, amber `<span>`) + `h2` (30px, weight 400) + `p` with two buttons + a cutout portrait `img` right
     (`one-third order-md-last`, image `bg_1.png` / `bg_2.png`).
     - Slide 1: subheading "Hello!", h1 "I'm **Clark Thompson**", h2 "A
       Freelance Web Designer", buttons **Hire me** (`.btn-primary` amber)
       - **My works** (`.btn-white.btn-outline-white` ghost).
     - Slide 2: h1 "I'm a **web designer** based in London", h2 "I'm a web
       designer based in London", same buttons. (Recreation: static
       2-slide grid or a lightweight carousel — desktop shows the two
       slides in sequence.)
  3. `section#about-section.ftco-about` — left: portrait image
     (`bg_1.png`) with `.img-about` frame; right: `.heading-section`
     ("About" subheading + "About Me" h2 + lorem), `ul.about-info`
     personal list (labels white weight 600, values light):
     **Name: Clark Thompson · Date of birth: January 01, 1987 · Address:
     San Francisco CA 97987 USA · Zip code: 1000 · Email:
     clarkthomp@gmail.com · Phone: +1-2234-5678-9-0**, a `counter-wrap`
     stat "**120** Project complete" (number amber 600), and an amber
     pill **Download CV** button.
  4. `section#resume-section` — heading-section ("Resume" subheading +
     "Resume" h2 + lorem); 2-column grid of **6** `.resume-wrap` cards
     (bg `rgba(255,255,255,0.1)`, padding 30px, radius 5px): `.date`
     amber (26px, weight 900), `h2` title (26px, white), `.position`
     institution (12px, weight 600, letter-spacing 3px, uppercase, amber)
     - lorem. Education: **Master Degree of Design** (2014–2015, Cambridge
       University), **Bachelor's Degree of C.A** (2014–2015), **Diploma in
       Computer** (2008–2009); Experience: **Art & Creative Director**
       (2014–2015), **Wordpress Developer** (2014–2015), **UI/UX Designer**
       (2008–2009). Centered amber pill **Download CV** button below the
       grid.
  5. `section#services-section` — heading-section watermark "Services" +
     "Services" h2 + lorem; **6** `.services-1` cards in a 3-column grid
     (padding 2em, bg `rgba(255,255,255,0.1)`, radius 5px, soft shadow):
     amber icon (60px) + title h3 (13px, weight 500, letter-spacing 3px,
     uppercase with amber underline). Titles: **Web Design, Phtography
     (sic), Web Developer, App Developing, Branding, Product Strategy**.
     Hover: card bg flips to `#ffbd39`, icon to white, title to black.
  6. `section#skills-section` — heading-section ("My Skills"); **6**
     `.progress-wrap` bars (track height 10px, bg `#1a1a1a`, fill amber):
     **Photoshop 90%, jQuery 85%, HTML5 95%, CSS3 90%, WordPress 70%,
     SEO 80%** (each label 20px weight 500 with the percentage).
  7. `section#projects-section.ftco-project` — heading-section ("Our
     Projects"); masonry grid (col-md-4 / col-md-8 mix) of **6** `.project`
     tiles (height 285px, bg image `project-1..6.jpg`): black `.overlay`
     (opacity 0 → 0.9 on hover) + centered title h3 + category span ("Web
     Design" / "Branding & Illustration Design" demo copy).
  8. `section#blog-section` — heading-section ("Our Blog"); **3**
     `.blog-entry` cards: image `.block-20` (350px, `image_1..3.jpg`),
     `.meta` row (**June 21, 2019 · Admin · 3** chat), h3 title link
     (20px, white, amber on hover) + lorem excerpt.
  9. `section#section-counter.ftco-counter.img` — photo background
     (`bg_1.jpg`) with dark overlay; **4** `.block-18` stat boxes
     (bg `#191919`, radius 5px, padding 30px 20px): animated number
     (30px, weight 700, amber) + label: **Awards, Complete Projects,
     Happy Customers, Cups of coffee** (counts animate 0 → target on
     scroll).
  10. `section.ftco-hireme.img.margin-top` — amber band over a photo
      background (`bg_1.jpg`): h2 "I'm Available for freelancing" (40px,
      weight 900, white with amber span) + lorem + amber pill button
      (in the original the band overlaps the counter section via
      `margin-top: -70px`).
  11. `section#contact-section.contact-section` — heading-section
      ("Contact Me"); row of **4** `.box` info cards (radius 4px,
      text-center): 100px circular icon (bg `rgba(255,255,255,0.1)`) +
      h3 + p — **Address** (198 West 21th Street, Suite 721 New York NY
      10016), **Contact Number** (+ 1235 2355 98), **Email Address**
      (info@yoursite.com), **Website** (yoursite.com); then `.block-9`:
      right = contact form (`.bg-light` panel, inputs 52px radius 5px:
      **Your Name, Your Email, Subject, Message** textarea 7 rows, amber
      pill **Send Message** submit), left = photo (`about.jpg`).
  12. `footer.ftco-footer` (bg `#000000`, padding 7em 0): 4 columns —
      **About** (lorem + social circles `rgba(255,255,255,0.1)` 50px:
      twitter, facebook, instagram); **Links** (Home, About, Services,
      Projects, Contact with arrow icons); **Services** (Web Design, Web
      Development, Business Strategy, Data Analysis, Graphic Design);
      **Have a Questions?** (map-marker: 203 Fake St. Mountain View, San
      Francisco, California, USA · phone: +2 392 3929 210 · envelope:
      info@yourdomain.com). Copyright bar with the credit line ("Copyright
      © <year> All rights reserved | This template is made with ❤ by
      Colorlib" → recreation credit line).
- **Behavior notes:** navbar is transparent over the hero and becomes fixed
  black on scroll; hero, about portrait, counters and hire-me band share the
  `bg_1`/`bg_2` portrait photos; the hero is an owl carousel (recreation:
  static 2-slide layout acceptable); counters animate from 0; the contact
  form has client-side validation + success state (no backend); blog links
  point to a single post page in the original — recreation keeps them as
  in-page anchors. The original is a single page; nav links are in-page
  anchors.

## Design tokens (extracted from `css/style.css`)

- Brand primary: **#ffbd39** (golden amber; 39 uses — `.btn.btn-primary`
  bg, `.slider-text h1 span`, `.resume-wrap .date`, `.progress-bar` fill,
  `.services-1 .icon i` + `:hover` bg, `.ftco-hireme` bg, counter numbers,
  blog heading hover, nav active underline).
- Brand dark: page/hero/footer bg **#000000**; counter boxes **#191919**;
  progress track **#1a1a1a**; card surfaces `rgba(255,255,255,0.1)`.
- Fonts: **"Poppins", Arial, sans-serif** for everything (weights 100–900;
  headings weight 800/900). Recreation: Google Fonts `<link>` in
  `index.html`.
- Buttons (`.btn`): **border-radius: 40px** (pill), padding `py-3 px-4`
  (~16px/24px). `.btn-primary` = amber `#ffbd39` bg + black text; hover
  keeps amber. `.btn-white.btn-outline-white` = transparent bg, white 1px
  border + white text.
- Navbar: transparent over hero; `.scrolled` → `position: fixed`,
  `background: #000000`, shadow `0 0 10px 0 rgba(0,0,0,0.1)`, links 16px
  white, active/hover amber underline; mobile `background: #000000`.
- Hero (`#home-section`): height 750px; `.subheading` 14px weight 600
  uppercase letter-spacing 3px amber; `h1` 60px weight 800 white (amber
  span); `h2` 30px weight 400; `p` `rgba(255,255,255,0.7)`; buttons row.
- Heading section (`.heading-section`): `.subheading` 13px weight 500
  uppercase letter-spacing 3px; `h1.big` watermark 7vw weight 900
  `rgba(255,255,255,0.1)` absolutely behind; `h2` 50px weight 700;
  centered, with a lorem `p` below.
- About: `.about-info li span:first-child` white weight 600 (130px label
  column); `.counter-wrap` number amber weight 600, label 20px white.
- Resume card (`.resume-wrap`): bg `rgba(255,255,255,0.1)`, padding 30px,
  radius 5px, margin-bottom 30px; `.date` 26px weight 900 amber; `h2` 26px;
  `.position` 12px weight 600 letter-spacing 3px uppercase amber.
- Services card (`.services-1`): padding 2em, bg `rgba(255,255,255,0.1)`,
  radius 5px, shadow `0px 20px 69px -27px rgba(0,0,0,0.17)`; icon i 60px
  amber; `h3` 13px weight 500 letter-spacing 3px uppercase with amber
  underline; hover: bg `#ffbd39`, icon white, title black.
- Skills: `.progress` height 10px bg `#1a1a1a`; `.progress-bar` fill
  `#ffbd39`; label h3 20px weight 500.
- Projects (`.project`): height 285px, margin-bottom 30px; `.overlay`
  black, opacity 0 → **0.9** on hover; `.text` centered, opacity 0 → 1 on
  hover; title h3 + category span.
- Counter (`.ftco-counter .block-18`): bg `#191919`, radius 5px, padding
  30px 20px, text-center; number 30px weight 700 amber; section bg = photo
  (`bg_1.jpg`) + dark overlay.
- Hire-me (`.ftco-hireme`): bg `#ffbd39` over photo, `margin-top: -70px`
  overlap; `h2` 40px weight 900 white.
- Contact: `.box` radius 4px; `.icon` 100px circle bg
  `rgba(255,255,255,0.1)`; form `.bg-light` panel (white), `.form-control`
  height 52px radius 5px bg `#fff` color `#000` font-size 18px, focus
  border black.
- Footer: bg `#000000`, padding 7em 0; widget `h2` 22px weight 600 white;
  links `rgba(255,255,255,0.6)`; social circles 50px bg
  `rgba(255,255,255,0.1)` radius 50%.
- Section rhythm: `.ftco-section` = `padding: 7em 0` (≈112px); heading
  rows `pb-5`; blog images 350px.
- Imagery: all photos are placeholders in the recreation —
  `https://picsum.photos/seed/maverick-<n>/<w>/<h>` (deterministic per
  template; portraits: seed maverick-1/-2, projects maverick-3..8, blog
  maverick-9..11, counter/hire-me bg maverick-12, contact maverick-13);
  icons from `lucide-react` (pen-tool, camera, monitor/code, smartphone,
  flask-conical, presentation, award, briefcase, users, coffee, map-pin,
  phone, mail, globe, download, arrow-right, menu, x; brand social icons
  via inline SVG); no ColorLib assets.

## Requirements

### Requirement: Header

The system SHALL render a fixed header with a logo and the full navigation
menu.

#### Scenario: Header renders on desktop

- **GIVEN** the Maverick app is rendered at a desktop viewport
- **WHEN** the page is displayed
- **THEN** a transparent header SHALL render at the top with the logo
  ("Maverick", white text) on the left
- **AND** the menu SHALL list Home, About, Resume, Services, Skills,
  Projects, My Blog and Contact
- **AND** the active link and link hover SHALL use the amber `#ffbd39`
  underline accent
- **AND** the header SHALL turn black and fixed once the page is scrolled

#### Scenario: Mobile menu

- **GIVEN** the Maverick app is rendered at a mobile viewport
- **WHEN** the hamburger toggle is activated
- **THEN** a slide-in menu SHALL open with the same links
- **AND** the toggle SHALL expose `aria-expanded` and the menu SHALL be
  keyboard-operable (close via toggle / Escape)

### Requirement: Hero slider

The system SHALL render a black hero with the intro headline and two CTA
buttons.

#### Scenario: Hero renders

- **GIVEN** the Maverick app is rendered
- **WHEN** the hero section is displayed
- **THEN** a 750px black hero SHALL render with the amber uppercase
  subheading "Hello!"
- **AND** an `h1` SHALL render with white text and an amber highlighted
  span ("I'm **Clark Thompson**" — paraphrase as "I'm <span>Alex
  Maverick</span>" or keep the demo name style)
- **AND** a 30px `h2` SHALL render below ("A Freelance Web Designer")
- **AND** a portrait image SHALL render on the right side (picsum seed
  maverick-1)
- **AND** an amber pill "Hire me" button and a white-outline ghost "My
  works" button SHALL render next to each other

#### Scenario: Second hero slide

- **GIVEN** the hero carousel is displayed
- **WHEN** the second slide is shown (or the static two-slide grid is
  rendered)
- **THEN** an `h1` "I'm a web designer based in London" SHALL render with
  the same subheading and buttons

### Requirement: About section

The system SHALL render a two-column About section with a portrait, personal
details, a stat counter and a download button.

#### Scenario: About renders

- **GIVEN** the Maverick app is rendered
- **WHEN** the About section is displayed
- **THEN** a portrait image SHALL render in the left column
- **AND** the right column SHALL render the subheading "About" and the
  heading "About Me" with a lorem paragraph
- **AND** a personal-info list SHALL render with the labels Name, Date of
  birth, Address, Zip code, Email and Phone (labels white, values light)
- **AND** the counter "120 Project complete" SHALL render with the number
  in amber
- **AND** an amber pill "Download CV" button SHALL render

### Requirement: Resume grid

The system SHALL render a Resume section with six education/experience
cards and a download button.

#### Scenario: Resume cards render

- **GIVEN** the Maverick app is rendered
- **WHEN** the Resume section is displayed
- **THEN** the subheading "Resume" and heading "Resume" with a lorem
  paragraph SHALL render, with a large faint "Resume" watermark behind
- **AND** six cards SHALL render in a two-column grid, each with an amber
  date, a white 26px title, an amber uppercase institution and a lorem
  paragraph
- **AND** the education cards SHALL be Master Degree of Design
  (2014–2015), Bachelor's Degree of C.A (2014–2015) and Diploma in
  Computer (2008–2009)
- **AND** the experience cards SHALL be Art & Creative Director
  (2014–2015), Wordpress Developer (2014–2015) and UI/UX Designer
  (2008–2009)
- **AND** a centered amber pill "Download CV" button SHALL render below
  the grid

### Requirement: Services cards

The system SHALL render a Services section with six icon cards that flip to
an amber background on hover.

#### Scenario: Services render

- **GIVEN** the Maverick app is rendered
- **WHEN** the Services section is displayed
- **THEN** the subheading "Services" and heading "Services" with a lorem
  paragraph SHALL render, with a large faint "Services" watermark behind
- **AND** six cards SHALL render in a three-column grid, each with a large
  amber icon and an uppercase letter-spaced title
- **AND** the cards SHALL be titled Web Design, Phtography, Web Developer,
  App Developing, Branding and Product Strategy
- **AND** hovering a card SHALL turn its background amber `#ffbd39`, its
  icon white and its title black

### Requirement: Skills progress bars

The system SHALL render a Skills section with six amber progress bars.

#### Scenario: Skills render

- **GIVEN** the Maverick app is rendered
- **WHEN** the Skills section is displayed
- **THEN** the subheading "My Skills" and heading "My Skills" SHALL render
- **AND** six progress bars SHALL render with amber `#ffbd39` fills on a
  `#1a1a1a` 10px track
- **AND** the bars SHALL show Photoshop 90%, jQuery 85%, HTML5 95%, CSS3
  90%, WordPress 70% and SEO 80%

### Requirement: Projects grid

The system SHALL render a Projects section with a masonry grid of photo
tiles and a hover overlay.

#### Scenario: Projects render

- **GIVEN** the Maverick app is rendered
- **WHEN** the Projects section is displayed
- **THEN** the subheading "Our Projects" and heading "Our Projects" with a
  lorem paragraph SHALL render
- **AND** six photo tiles SHALL render in the 4/8 masonry layout (one
  4-col tile, one 8-col tile, two stacked in an 8-col, two stacked in a
  4-col)
- **AND** each tile SHALL reveal a black overlay (opacity 0.9) with a
  centered title and category on hover

### Requirement: Blog cards

The system SHALL render a Blog section with three article cards.

#### Scenario: Blog renders

- **GIVEN** the Maverick app is rendered
- **WHEN** the Blog section is displayed
- **THEN** the subheading "Our Blog" and heading "Our Blog" with a lorem
  paragraph SHALL render
- **AND** three cards SHALL render, each with a 350px image, a meta row
  (June 21, 2019 · Admin · 3 comments), a 20px title link (white, amber on
  hover) and a lorem excerpt

### Requirement: Counter band

The system SHALL render a photo-backed stats band with four animated
counters.

#### Scenario: Counters render

- **GIVEN** the Maverick app is rendered
- **WHEN** the counter section is displayed
- **THEN** a photo background with a dark overlay SHALL render
- **AND** four `#191919` stat boxes SHALL render with an amber number and
  a label: Awards, Complete Projects, Happy Customers and Cups of coffee
- **AND** the numbers SHALL animate from 0 to their target when scrolled
  into view

### Requirement: Hire-me band

The system SHALL render an amber full-width freelancing call-to-action.

#### Scenario: Hire-me band renders

- **GIVEN** the Maverick app is rendered
- **WHEN** the hire-me band is displayed
- **THEN** an amber `#ffbd39` band SHALL render with the white 40px
  heading "I'm Available for freelancing" and a lorem paragraph
- **AND** the band SHALL overlap the preceding section's bottom edge
  (~70px) on desktop

### Requirement: Contact section

The system SHALL render a Contact section with four info boxes and a
contact form.

#### Scenario: Contact info boxes render

- **GIVEN** the Maverick app is rendered
- **WHEN** the Contact section is displayed
- **THEN** the subheading "Contact Me" and heading "Contact Me" with a
  lorem paragraph SHALL render
- **AND** four info boxes SHALL render in a row, each with a circular
  icon, a title and a value: Address (198 West 21th Street, Suite 721 New
  York NY 10016), Contact Number (+ 1235 2355 98), Email Address
  (info@yoursite.com) and Website (yoursite.com)

#### Scenario: Contact form validates

- **GIVEN** the contact form is displayed
- **WHEN** the user submits an invalid email or empty fields
- **THEN** per-field errors SHALL show and the form SHALL NOT submit
- **AND** submitting valid data SHALL show a success message without a
  page reload

### Requirement: Footer

The system SHALL render a black four-column footer.

#### Scenario: Footer renders

- **GIVEN** the Maverick app is rendered
- **WHEN** the page is scrolled to the bottom
- **THEN** a black footer SHALL render with four columns: About (lorem +
  three circular social icons: twitter, facebook, instagram), Links
  (Home, About, Services, Projects, Contact), Services (Web Design, Web
  Development, Business Strategy, Data Analysis, Graphic Design) and Have
  a Questions? (address, phone +2 392 3929 210, email
  info@yourdomain.com)
- **AND** a centered copyright bar SHALL render with the recreation credit
  line

### Requirement: Page composition

The system SHALL compose all sections in the original's order in a single
page.

#### Scenario: Full page render

- **GIVEN** the Maverick app is rendered
- **WHEN** the page loads
- **THEN** the sections SHALL appear in order: header → hero → About →
  Resume → Services → Skills → Projects → Blog → counter band → hire-me
  band → Contact → footer
- **AND** the document title SHALL be "Maverick — Freelance Web Designer"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- maverick` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Layout matches the original 1:1: transparent-to-black fixed header,
      black 750px hero with two CTA pills, About split with personal-info
      list + counter + Download CV, 6 resume cards (2-col), 6 services
      cards (3-col), 6 skills bars, 6-project masonry grid, 3 blog cards,
      photo counter band, amber hire-me band, contact info boxes + form,
      black 4-col footer (12 sections in the order above).
- [ ] Design tokens applied: primary `#ffbd39` (buttons, spans, dates,
      bar fills, icons, hover states, hire-me band), page/hero/footer
      `#000000`, cards `rgba(255,255,255,0.1)`, counter `#191919`, track
      `#1a1a1a`, body Poppins, headings weight 800/900, watermark
      `rgba(255,255,255,0.1)` 7vw.
- [ ] Buttons are pill-shaped (40px radius): amber `.btn-primary` (black
      text) + white-outline ghost; section rhythm `7em` (≈112px) with
      centered heading rows.
- [ ] Services hover flips card to amber bg / white icon / black title;
      project tiles show the black 0.9 overlay + text on hover; counters
      animate 0 → target in view.
- [ ] Contact form: name/email/subject/message, validation + success
      state, no page reload.
- [ ] Header transparent → fixed black on scroll; mobile menu
      keyboard-operable; blog/CTA links are in-page anchors.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets); icons
      from lucide-react / inline SVG.
- [ ] PR description records source (ColorLib Clark), preview URL
      (HTTP 200), tokens, and renames; TEMPLATES.md marks ALL FOUR copies
      (lines 359, 2299, 2386, 2710) `[x]` when done.
