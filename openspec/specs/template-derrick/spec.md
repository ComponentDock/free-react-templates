# Template: Derrick (Industrial Engineering Company Template)

## Purpose

Derrick is a single-page industrial/engineering-company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Engineers" website template (see TEMPLATES.md, Bootstrap
section, line 386), built under a different name with the monorepo stack: Vite

- React 19 + Tailwind CSS 4 + TypeScript.

The reference is a bold, high-contrast industrial corporate site: a white top
strip with the logo and three quick-contact columns, a solid **orange
`#ff5e15`** navbar with white uppercase links (sticks to the top on scroll), a
full-screen hero photo slider with white square arrows and bar-shaped dots,
then alternating white and deep-navy sections: a 4-card "What We Do" services
grid (each card with a number badge and an orange triangle notch behind its
icon), a navy "Why Choose Us" split with an overlapping photo, a navy "Get A
Quote" form with underline-only inputs and a square orange submit, a navy
"Explore Our Recent Projects" carousel whose card contents slide up on hover
and overhang into the next section, two testimonial cards with circular
avatars, a light "News & Updates" blog row of three cards, an orange
"Subscribe To Newsletter" band with a black square subscribe button, and a
black footer with four link columns.

Brand colors: primary orange `#ff5e15` (navbar strip, `btn-primary` CTAs,
active states, section subtitles, project categories, hero dots, footer
heading underlines, loader spinner), deep navy `#09162a` (Why Choose Us,
quote form, projects sections), near-black `#000` (footer, newsletter submit
button, hero overlay base `#222` at 0.3 opacity), body text `gray` on white,
headings black `#000`. Body font Muli (300/400); headings/buttons in Oswald
(300/400/700), uppercase with wide letter-spacing.

## Design reference (replication findings)

- **Original:** ColorLib "Engineers" — industrial/engineering company
  template (source: https://colorlib.com/wp/template/engineers/). Listed in
  TEMPLATES.md under Bootstrap (line 386; duplicate lines 996, 1346 and 1945
  — mark every copy). Screenshot: `engineers-free-template.jpg` (1200×946,
  reviewed visually in the browser).
- **Live preview URL:** https://preview.colorlib.com/theme/engineers/ —
  reachable, fetched and analyzed. HTML saved to
  `/tmp/engineers-prep/preview.html` (22.8 KB); stylesheets `css/style.css`
  (29.3 KB) and `css/bootstrap.min.css` (28.7 KB, carries the custom
  `--primary` token — design tokens below). Screenshot and live preview agree
  (white header strip, orange navbar, full-screen engineering-tools photo
  hero, navy feature sections, black footer) — the preview DOM is
  authoritative.
- **Fonts:** body `font-family: "Muli", -apple-system, ...` (Bootstrap
  `--font-family-sans-serif` override in bootstrap.min.css; Google Fonts
  `Muli:300,400`). `style.css` body: `font-size: 1.1rem; font-weight: 300;
line-height: 1.7; color: gray`. Headings `h1`–`h5` / `.h1`–`.h5`:
  `font-family: "Oswald", sans-serif` (Google Fonts `Oswald:300,400,700`).
  Buttons `.btn`: Oswald, `text-transform: uppercase; font-size: 14px;
letter-spacing: .2rem`.
- **Brand colors (from bootstrap.min.css + style.css):**
  - Primary orange `#ff5e15` — Bootstrap `--primary`; `.btn-primary`
    background/border `#ff5e15`, hover `#ee4a00`/`#e14600`, focus ring
    `rgba(255,94,21,0.5)`; `.bg-primary` = `#ff5e15`. Used for: navbar strip
    background (`.sticky-wrapper .site-navbar`), hero slider arrows on hover,
    active hero dots (18×4px bars), project-carousel active dots,
    `section-subtitle` text, service-icon triangle notch, project-item
    category, testimonial client-name, blog meta links, footer-heading
    underline (2px), footer link hover, `.text-primary` icons, loader
    spinner.
  - Deep navy `#09162a` — `.block-2` (Why Choose Us), `.block-3` (Our
    Projects), `.quote-form-wrap` (quote form), all with `padding: 7rem 0`
    (quote wrap `5rem`).
  - Black `#000` — footer background, `.bg-black`, hero overlay (via `#222`
    at opacity .3), newsletter submit button, `::selection`.
  - Light tints: `bg-light` blog section (`#f8f9fa`), service-card borders
    `#efefef`, dropdown hover `#f4f5f9` / text `#25262a`, blog meta `#b0b0b0`,
    service number `#dcdcdc`, search-form bg `#f7f7f7`.
- **Buttons:**
  - `.btn` base: Oswald, uppercase, 14px, letter-spacing .2rem.
  - `.btn.btn-primary` (quote-form "Send Message"): `background: #ff5e15;
border: 1px solid #ff5e15; color: #fff`; markup `btn btn-primary
btn-block btn-lg rounded-0` — SQUARE corners (radius 0); hover →
    `background: #000; border-color: #000` (style.css `.quote-form
.btn-primary:hover`).
  - Newsletter submit: markup `btn btn-secondary px-4` "Subcribe" (source
    typo — fix to "Subscribe"); overridden in `.block-4 .form-subscribe .btn`
    → `background: #000; border-color: #000; border-radius: 0` — square
    black button.
  - Hero slider arrows: 70×70 white squares, black icon (1.7rem), centered
    at left/right edge (top 50%); hover → bg `#ff5e15`, white icon.
  - Projects carousel arrows: 40×40 white squares, black icon (1.5rem).
  - Dots: 18px × 4px bars, `border-radius: 0`, margin 2px 5px; hero dots
    white / active `#ff5e15`; projects dots `rgba(0,0,0,0.2)` / active
    `#ff5e15` (bottom -30px).
- **Section order (1:1 from the preview DOM):**
  1. Header strip `div.header-top.bg-light` — container (padding 40px
     top/bottom) with a row: `col-6 col-lg-3` logo image `images/logo.png`
     (recreate as a text logo: "DERRICK" in bold black Oswald + small orange
     icon mark) · `col-lg-3` (desktop only) quick-contact "San Francisco" /
     "Mountain View, Fake st., CA" with an orange map-pin icon · `col-lg-3`
     "000 209 392 312" / "Toll free" with orange phone icon · `col-lg-3`
     "info@gmail.com" / "Gournadi, 1230 Bariasl" with orange envelope icon ·
     `col-6 d-lg-none` right-aligned black hamburger (`.js-menu-toggle`,
     icon-menu). Quick-contact `.h4` text is 1.2rem black, caption 1rem gray.
  2. Navbar `div.site-navbar.py-2.js-sticky-header` (desktop `d-lg-block`,
     hidden below lg; sits inside the header strip, below the logo row) —
     container with `mr-auto` nav: six UPPERCASE white Oswald links (16px,
     weight 900, letter-spacing .05rem, padding 20px): Home (active) · About
     Us · Our Projects · Testimonials · Blog · Contact. Bar background
     `#ff5e15` (`.sticky-wrapper .site-navbar`); active link black with a 2px
     white underline (bottom, left/right 20px). On scroll the bar sticks to
     the top (jquery.sticky clone): `.is-sticky` adds shadow `4px 0 20px
-5px rgba(0,0,0,0.2)` and shrinks link padding to 10px 20px. The index
     nav has NO dropdowns (the has-children CSS is unused on this page).
  3. Hero `div.hero-slide.owl-carousel.site-blocks-cover` — TWO
     `div.intro-section` slides, each a full-viewport (`100vh`, min-height
     700px) background photo (`images/hero_1.jpg`, inline style; same image
     on both slides in the preview — use two different picsum photos) with a
     `#222` overlay at opacity .3 and a centered `col-lg-12` text block
     (`data-aos="fade-up"`): `h1` 3rem weight 300 white — slide 1 "We Are
     **Leading** Industry of Engineers", slide 2 "Experts and High Quality
     Works" (strong = weight 700, still white). Arrows: white 70×70 squares
     at left/right edges. Dots: 18×4px white bars centered at bottom 30px,
     active `#ff5e15`.
  4. Services `div.site-section.services-1-wrap` — centered header
     (`col-lg-5`): `h3.section-subtitle` "What We Do" (uppercase 1.3rem
     weight 300 orange) + `h2.section-title.text-black` "We Are **Leading
     Industry** of Engineering. We Love What We Do". Below: `row no-gutters`
     with FOUR `col-lg-3 col-md-6` `div.service-1` cards: absolute number
     badge top-right "01"–"04" (Oswald, `#dcdcdc`), `.service-1-icon`
     (flaticon glyph 4rem black — engineer / compass / oil-platform / crane;
     use lucide `HardHat`, `Compass`, `Factory`, `Crane`) with a rotated
     orange triangle notch behind it (`border-right: 40px solid #ff5e15`,
     rotated 45°, offset -20px left), `h3.service-heading` 1.5rem black
     weight 400 ("Professional Team" / "Great Ideas" / "Quality Building" /
     "Quality Works") and a 15px gray paragraph. Cards: `border: 1px solid
#efefef`, `border-right: none` (last card restores the right border),
     padding 20px 30px; they stack 1-up on mobile with a 30px gap.
  5. Why Choose Us `div.block-2` (bg `#09162a`, padding `7rem 0`) — row:
     `col-lg-6` photo `images/about_1.jpg` with `img-overlap` (`margin-top:
-150px` — the photo overlaps the white services section above), and
     `col-lg-5.ml-auto`: `h3.section-subtitle` "Why Choose Us" (orange),
     `h2.section-title` "More than **50 year experience** in industry"
     (white, weight 300, strong 700), a gray-white paragraph, then THREE
     icon rows (`d-flex align-items-center mb-4`): orange 4xl lucide icon
     (oil-platform / compass / planning → `Factory`, `Compass`,
     `PencilRuler`) + `h5` white "Expert in Builings" (fix typo →
     "Buildings") / "Modern Design" / "Leading In Floor Planning" with a
     small white paragraph each.
  6. Quote form `div.quote-form-wrap.wrap` (bg `#09162a`, padding `5rem`) —
     row: `col-lg-5.align-self-end` decorative image `images/img_transparent.png`
     (a transparent PNG; replace with a picsum photo or a simple SVG
     illustration), `col-lg-7.align-self-center`: `h3.section-subtitle`
     "Get A Quote" + `h2.section-title` "Request A **Quote**" (white); then
     `form.quote-form`: 2×2 grid of inputs — "Your name*", "Phone number",
     "Your email*", "Subject" — plus a 7-row textarea "Message*" and
     `input.btn.btn-primary.btn-block.btn-lg.rounded-0` "Send Message"
     (square orange, full width of its half-column; hover → black). Inputs:
     transparent background, `border: none` + `border-bottom: 2px solid
rgba(255,255,255,0.5)`, `border-radius: 0`, white text + white
     placeholders.
  7. Our Projects `div.site-section.block-3` (bg `#09162a`, padding `7rem 0`,
     margin-bottom `14rem`) — header "Our Projects" + "Explore Our **Recent
     Projects**"; then `div.projects-carousel-wrap` (`margin-bottom: -200px`
     — the carousel overhangs into the next section): an owl carousel of
     FOUR `div.project-item` cards, each an image (`works_1.jpg`…`works_4.jpg`)
     with contents hidden below (`transform: translateY(100%)`, opacity 0)
     that slide up on hover, plus a `rgba(0,0,0,0.7)` overlay and image
     `scale(1.2)`: `span.project-item-category` "Factory" (uppercase Oswald
     orange) + `h2.project-item-title` "Building Refinery" (white).
     Carousel arrows 40×40 white squares; dots 18×4px bars at bottom -30px.
  8. Testimonials `div.site-section.testimonial-wrap` — centered header
     "Testimonial" + "What People Says" (`text-black`); row with TWO
     `col-md-6` `div.testimonial` cards: 100px circular avatar
     (`person_3_sq.jpg` / `person_4_sq.jpg`), `blockquote` 20px black weight
     700 lorem quote, `p.client-name` "Matt Keygen" (Oswald uppercase 1.2rem
     orange).
  9. Blog `div.site-section.bg-light` — left-aligned header "Blog" + "News &
     Updates" (`text-black`); row with THREE `col-md-6 col-lg-4`
     `div.blog-entry` cards: `a.img-link` photo (`images/hero_1.jpg` reused;
     hover `scale(1.05)`, overflow hidden) + `div.blog-entry-contents`:
     `h3` 1.5rem black weight 400 link "Top Companies That Are Best In
     Industrial Business" (preview repeats it — paraphrase per card) +
     `div.meta` "Posted by Admin In News" (1rem `#b0b0b0`; "Admin" and
     "News" links orange `#ff5e15`).
  10. Newsletter `div.py-5.bg-primary.block-4` (solid orange `#ff5e15` band)
      — row align-items-center: `col-lg-6`: `h3` white uppercase weight 300
      "Subscribe To Newsletter" + white paragraph; `col-lg-6`:
      `form.form-subscribe.d-flex`: `input.form-control.form-control-lg`
      (transparent bg, `border: 2px solid #fff`, radius 0, white text) +
      `input.btn.btn-secondary.px-4` "Subcribe" (fix typo → "Subscribe";
      black bg, square corners).
  11. Footer `div.footer` (bg `#000`, padding `4rem 0`, font-size 15px,
      white) — container row of four `col-lg-3` columns: brand column
      (logo image `logo2.png` → text logo "DERRICK" white + orange mark, an
      about paragraph, link "Learn More" — white, hover orange underline);
      "Our Company" heading (uppercase 16px, `<span>` with 2px `#ff5e15`
      bottom border): About · News · Services · Our Team · Careers ·
      Projects; "Our Services": Industrial · Construction · Remodeling;
      "Contact": Help Center · Support Community · Press · FAQ · Our
      Partners. Below: a full-width `div.copyright` (text-align center,
      `padding-top: 7rem`): "Copyright © <year> All rights reserved | This
      template is made with Colorlib" → paraphrase as "© 2026 Derrick —
      Industrial engineering template".
  - Page chrome: fullscreen white `#loader` with an orange circular spinner
    (SVG `#ff5e15`) that fades out — optional on the React port (skip or
    implement a brief initial fade). Mobile: 300px white slide-in menu from
    the right with 20px nav links (hamburger in the header strip); the index
    page has a flat link list (no sub-menus).
  - The template ships multiple inner pages (about/works/testimonials/
    blog/contact) — NOT required; recreate the index.html single page only
    (nav links may be `#` anchors).

## Requirements

### Requirement: Header strip with logo and quick contacts

The system SHALL render a light header strip with the logo on the left and
three quick-contact columns on the right (desktop).

#### Scenario: Header content

- **GIVEN** the Derrick app is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the logo "DERRICK" (bold black Oswald text +
  small orange icon mark) on the left
- **AND** on desktop it SHALL show three quick-contact columns with orange
  icons: "San Francisco" / "Mountain View, Fake st., CA" (MapPin), "000 209
  392 312" / "Toll free" (Phone), "info@gmail.com" / "Gournadi, 1230 Bariasl"
  (Mail)
- **AND** the header background SHALL be light (`#f8f9fa`) with generous
  vertical padding (~40px)

#### Scenario: Mobile hamburger

- **GIVEN** a viewport narrower than the desktop breakpoint
- **WHEN** the header renders
- **THEN** the contact columns SHALL be hidden and a black hamburger button
  SHALL appear on the right with `aria-expanded` reflecting the menu state
- **AND** activating it SHALL open a 300px white slide-in menu from the right
  listing Home · About Us · Our Projects · Testimonials · Blog · Contact

### Requirement: Orange navbar with sticky scroll state

The system SHALL render a solid orange navigation bar with six uppercase links
that sticks to the top of the viewport on scroll.

#### Scenario: Navbar content

- **WHEN** the navbar renders on desktop
- **THEN** it SHALL have background `#ff5e15` and list HOME · ABOUT US · OUR
  PROJECTS · TESTIMONIALS · BLOG · CONTACT in white uppercase Oswald (16px,
  weight 900, letter-spacing .05rem)
- **AND** the active (Home) link SHALL be black with a 2px white underline

#### Scenario: Sticky navbar

- **WHEN** the user scrolls past the header strip
- **THEN** the orange navbar SHALL stick to the top of the viewport with a
  subtle shadow (`4px 0 20px -5px rgba(0,0,0,0.2)`) and reduced link padding

### Requirement: Full-screen hero slider

The system SHALL render a full-viewport two-slide photo hero with centered
white headlines, square arrow controls and bar-shaped dots.

#### Scenario: Slide content

- **GIVEN** the hero section is rendered
- **WHEN** a slide is active
- **THEN** it SHALL show a full-viewport background photo (picsum
  placeholder) with a dark `#222` overlay at ~0.3 opacity
- **AND** a centered `h1` in white Oswald 3rem weight 300 reading "We Are
  **Leading** Industry of Engineers" (slide 1, "Leading" bolded) or "Experts
  and High Quality Works" (slide 2)

#### Scenario: Slide controls

- **WHEN** the user activates a white square arrow or a bottom dot
- **THEN** the other slide SHALL become active
- **AND** the dots SHALL be 18×4px white bars with the active one filled
  `#ff5e15`
- **AND** hovering an arrow SHALL fill it `#ff5e15` with a white icon

### Requirement: Services section

The system SHALL render a centered "What We Do" header and a four-card
services grid.

#### Scenario: Section header

- **GIVEN** the services section is rendered
- **WHEN** the header loads
- **THEN** it SHALL show the orange uppercase subtitle "What We Do" and the
  black heading "We Are **Leading Industry** of Engineering. We Love What We
  Do" centered

#### Scenario: Service cards

- **WHEN** the grid loads
- **THEN** it SHALL contain four cards titled "Professional Team", "Great
  Ideas", "Quality Building" and "Quality Works"
- **AND** each card SHALL show a number badge (01–04) in light grey `#dcdcdc`
  at the top right, a black lucide icon with an orange triangle notch behind
  it, and a short grey paragraph
- **AND** the cards SHALL be separated by 1px `#efefef` borders (no right
  border between adjacent cards) and stack vertically on mobile

### Requirement: Why Choose Us dark section

The system SHALL render a deep-navy split section with an overlapping photo
and three icon rows.

#### Scenario: Section content

- **GIVEN** the Why Choose Us section is rendered
- **WHEN** the section loads
- **THEN** it SHALL have background `#09162a` and show the orange subtitle
  "Why Choose Us" and the white heading "More than **50 year experience** in
  industry"
- **AND** the left column SHALL show a photo that overlaps the section above
  by ~150px
- **AND** the right column SHALL list three rows — "Expert in Buildings"
  (typo fixed from source), "Modern Design", "Leading In Floor Planning" —
  each with an orange icon, a white `h5` and a short white paragraph

### Requirement: Get A Quote form

The system SHALL render a navy quote form with underline-only inputs and a
square orange submit button.

#### Scenario: Quote form content

- **GIVEN** the quote section is rendered
- **WHEN** the form loads
- **THEN** it SHALL show the orange subtitle "Get A Quote", the white heading
  "Request A **Quote**", fields "Your name*", "Phone number", "Your email*",
  "Subject" and a 7-row "Message*" textarea
- **AND** each field SHALL be transparent with only a 2px white-ish bottom
  border (`rgba(255,255,255,0.5)`), square corners and white placeholder text
- **AND** the submit button SHALL be full-width square orange `#ff5e15`
  labelled "Send Message", turning black on hover

#### Scenario: Quote form validation

- **WHEN** the user submits with an invalid email or empty required fields
- **THEN** a validation error SHALL be shown and the form SHALL NOT submit
- **AND** submitting a valid form SHALL show a success confirmation

### Requirement: Projects carousel

The system SHALL render a deep-navy projects section with a four-item
carousel whose cards reveal their contents on hover and overhang the next
section.

#### Scenario: Projects content

- **GIVEN** the projects section is rendered
- **WHEN** the section loads
- **THEN** it SHALL have background `#09162a` with the orange subtitle "Our
  Projects" and the white heading "Explore Our **Recent Projects**"
- **AND** it SHALL show a carousel of four photo cards (picsum placeholders)
  with the category "Factory" in uppercase orange and the white title
  "Building Refinery"

#### Scenario: Hover reveal

- **WHEN** the user hovers a project card
- **THEN** a dark `rgba(0,0,0,0.7)` overlay SHALL appear, the photo SHALL
  scale to ~1.2, and the category + title SHALL slide up into view from the
  bottom

#### Scenario: Carousel controls

- **WHEN** the user activates the carousel arrows or dots
- **THEN** the carousel SHALL advance to the next/previous card
- **AND** the dots SHALL be 18×4px bars (`rgba(0,0,0,0.2)`, active
  `#ff5e15`) below the carousel, which overhangs the next section by ~200px

### Requirement: Testimonials and blog sections

The system SHALL render two testimonial cards and a three-card blog row on a
light background.

#### Scenario: Testimonials

- **GIVEN** the testimonials section is rendered
- **WHEN** the section loads
- **THEN** it SHALL show the centered orange subtitle "Testimonial" and the
  black heading "What People Says"
- **AND** two cards, each with a 100px circular avatar, a 20px bold black
  quote, and an orange uppercase client name "Matt Keygen"

#### Scenario: Blog cards

- **WHEN** the blog section loads
- **THEN** it SHALL have a light background (`#f8f9fa`) with the orange
  subtitle "Blog" and the black heading "News & Updates"
- **AND** it SHALL show three cards, each with a photo (hover scale ~1.05), a
  1.5rem black title (paraphrased per card), and meta "Posted by **Admin** In
  **News**" with orange link accents

### Requirement: Newsletter band

The system SHALL render an orange newsletter band with a white-bordered input
and a square black subscribe button.

#### Scenario: Newsletter content

- **GIVEN** the newsletter section is rendered
- **WHEN** the section loads
- **THEN** it SHALL have background `#ff5e15` with the white uppercase
  heading "Subscribe To Newsletter" and a short white blurb
- **AND** the email input SHALL be transparent with a 2px white border and
  square corners
- **AND** the submit button SHALL be square black labelled "Subscribe" (typo
  fixed from the source's "Subcribe")

#### Scenario: Newsletter validation

- **WHEN** the user submits an invalid email
- **THEN** a validation error SHALL be shown and the form SHALL NOT submit
- **AND** submitting a valid email SHALL show a success confirmation

### Requirement: Footer

The system SHALL render a black footer with four link columns and a copyright
bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the footer loads
- **THEN** the footer SHALL have background `#000` with four columns: brand
  (text logo "DERRICK", about text, "Learn More" link), "Our Company" (About
  · News · Services · Our Team · Careers · Projects), "Our Services"
  (Industrial · Construction · Remodeling) and "Contact" (Help Center ·
  Support Community · Press · FAQ · Our Partners)
- **AND** each heading SHALL be uppercase white with a 2px `#ff5e15` underline
  under its text
- **AND** a centered copyright line SHALL read "© 2026 Derrick — Industrial
  engineering template" (paraphrase of the ColorLib credit line)

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Derrick app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header + navbar in the banner landmark,
  all sections in the main landmark, and the footer in the contentinfo
  landmark
- **AND** the document title SHALL be "Derrick — Industrial Engineering
  Template"
- **AND** the page SHALL be fully responsive from 320px to 1920px (nav
  collapses to the slide-in menu, grids stack, hero stays full-height)

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] Typecheck, lint, and 100% coverage tests pass for `apps/derrick`
      (`scripts/verify-app.sh derrick` in FAST_MODE; full `npm run gate` in
      CI).
- [ ] Visual fidelity: light header strip (logo + 3 orange-icon contact
      columns + mobile hamburger), solid orange `#ff5e15` navbar with 6 white
      uppercase links (active link black + white underline; sticky + shadow
      on scroll), 2-slide full-screen hero (photo, `#222`/0.3 overlay,
      centered white headline with bold `<strong>`, 70×70 white square
      arrows, 18×4px bar dots), 4-card services grid (number badges,
      orange-triangle icon notches, `#efefef` borders), navy `#09162a` Why
      Choose Us (overlapping photo, 3 icon rows), navy quote form
      (underline-only inputs, square orange "Send Message" → black hover),
      navy projects carousel (hover overlay + slide-up reveal + 1.2 scale,
      ~200px overhang, square arrows + bar dots), 2 testimonial cards (100px
      avatars, orange uppercase names), light blog row (3 cards, orange meta
      links), orange newsletter band (white-bordered input, square black
      "Subscribe"), black footer (4 columns, orange-underlined headings,
      centered copyright) match the Engineers preview 1:1.
- [ ] Design tokens in `@theme`: primary orange `#ff5e15` (+ hover
      `#ee4a00`), deep navy `#09162a`, black `#000` (footer, buttons), hero
      overlay `#222`, light `#f8f9fa` (header strip, blog section), card
      borders `#efefef`, meta `#b0b0b0`, body text gray; Muli + Oswald via
      Google Fonts (`.font-display` utility for Oswald headings/buttons).
- [ ] Buttons: `.btn` style = Oswald uppercase 14px letter-spacing .2rem;
      square corners (`rounded-none`) on quote submit, newsletter submit and
      slider arrows.
- [ ] Placeholder images use `picsum.photos/seed/derrick-<n>/<w>/<h>` (hero
      photos ×2, about photo, quote illustration, project photos ×4, blog
      photos ×3, testimonial avatars); lucide-react icons (MapPin, Phone,
      Mail, HardHat, Compass, Factory, Crane, PencilRuler, Menu, ChevronLeft/
      ChevronRight, Send); no ColorLib assets copied.
- [ ] PR description states source template (ColorLib "Engineers"), preview
      URL (https://preview.colorlib.com/theme/engineers/), design tokens,
      and what differs (name, placeholders, paraphrased blog titles, fixed
      "Subcribe"/"Builings" typos, inner pages not recreated).
