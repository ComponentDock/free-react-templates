# Template: Gantry (Construction)

## Purpose

Gantry is a single-page construction / engineering company template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Engineers" HTML template design (see TEMPLATES.md, line 386
under **Bootstrap (216)** — duplicate rows at line 996 under **Business
(365)**, line 1346 under **Construction (29)** and line 1945 under
**Industrial (15)**, same template, ONE app only; mark ALL FOUR rows `[x]`
after merge), built under a different name ("Gantry" — a bridge-like
overhead crane structure used in construction and heavy engineering,
matching the source's construction-company positioning) with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript (strict). No ColorLib
references in app code — provenance lives in this spec, TEMPLATES.md, and
the PR.

## Design reference (replication findings)

- **Original:** ColorLib "Engineers" — free construction / engineering
  company HTML template (source:
  https://colorlib.com/wp/template/engineers/). Single page: a light
  header-top strip (logo + 3 quick-contact columns), a solid ORANGE
  navbar (white uppercase links), a full-viewport hero image slider (2
  slides, dark overlay, centered white headline with one orange-highlighted
  word), a white "What We Do" services section (4 numbered icon blocks), a
  dark-navy `#09162a` "Why Choose Us" split (overlapping photo + 3 icon
  features), a dark-navy "Get A Quote" form (transparent underline inputs +
  full-width orange submit), a dark-navy "Our Projects" carousel (4 photo
  cards with hover overlay + category/title), a white "What People Says"
  testimonial row (2 circular-photo quotes), a light-grey "News & Updates"
  blog section (3 image cards with meta line), an ORANGE "Subscribe To
  Newsletter" band (white-bordered input + black Subscribe button), and a
  black footer (4 columns: brand / Our Company 6 links / Our Services 3
  links / Contact 5 links) with a bottom copyright bar crediting
  **Component Dock** (replaces the source's Colorlib credit).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/engineers/`. DOM fetched
  (`/tmp/engr/preview.html`, 22,835 bytes, `<title>Engineers &mdash;
Website Template by Colorlib</title>`) + stylesheet `css/style.css`
  (`/tmp/engr/style.css`, 29,335 bytes) + TEMPLATES.md screenshot
  (`engineers-free-template.jpg`, AVIF 96,538 bytes, viewed in browser —
  top 1200×220 crop re-inspected to confirm the header stack).
- **Visual design (screenshot + live DOM):** high-contrast professional
  construction aesthetic — top white strip with black bold logo
  ("ENGINEERS" + small orange geometric mark) and 3 orange-icon contact
  columns; below it a SOLID ORANGE `#ff5e15` navbar with white uppercase
  menu; hero is a full-width engineering-photo slider (blueprints / hard
  hat / calipers) with a light `#222` overlay at 0.3 opacity and a centered
  white headline where ONE word is highlighted in orange (e.g. "We Are
  **Leading** Industry of Engineers"). Body sections alternate white /
  light-grey with dark-navy `#09162a` bands (Why Choose Us, Get A Quote,
  Our Projects); the ONLY saturated accent is orange `#ff5e15`; the footer
  is pure black. Source copy is placeholder/Lorem with typos
  ("Subcribe", "Expert in Builings") — paraphrase freely and fix typos,
  keep the same content kinds.

## Design tokens (from `css/style.css` of the live preview)

- **Brand orange:** `#ff5e15` — `.sticky-wrapper .site-navbar` background
  (the navbar bar), `.section-subtitle` color (1.3rem, weight 300,
  uppercase), `.intro-section h1 strong` highlight, `.testimonial
.client-name` color, `text-primary` icon accents (header-top contacts,
  Why-Choose-Us feature icons), the `bg-primary` newsletter band
  (`.block-4`), hover accents (`.service-1:hover`), active-underline and
  link-hover states.
- **Dark navy:** `#09162a` — `.block-2` (Why Choose Us) background,
  `.block-3` (Our Projects) background, `.quote-form-wrap` background
  (the Get A Quote panel; also carries `bg-black` class in the markup).
- **Black:** `#000` — `.footer` background (padding 4rem 0), `.block-4
.form-subscribe .btn` (Subscribe button) background, `.quote-form
.btn-primary:hover` background, active nav link color.
- **Hero overlay:** `#222` at `opacity: .3` — `.intro-section:before`
  (full-bleed dark wash over the hero photo).
- **Surfaces:** `#fff` body + testimonial section; `#f8f9fa` (`bg-light`)
  — `.header-top` strip and the blog section; `#efefef` — `.service-1`
  card borders (1px, `border-right: none` between cards); `#f4f5f9` —
  hover surfaces.
- **Fonts:** Google **Oswald** (300/400/700) — `h1–h5`, `.site-navbar`,
  `.btn`, `.testimonial .client-name` (uppercase); **Muli** (300/400) —
  body (1.1rem, line-height 1.7). Load both via Google Fonts `<link>`s in
  `index.html` (the source does exactly this).
- **Buttons:** `.btn` — uppercase, 14px, letter-spacing .2rem, Oswald,
  square (radius 0). Quote submit is `btn-primary btn-block btn-lg
rounded-0` (full-width, orange; hover → black). Newsletter subscribe is
  `btn btn-secondary px-4` with `background: #000; border-color: #000;
border-radius: 0`.
- **Navbar (`.site-navbar`, bg `#ff5e15`):** menu links — uppercase,
  16px, letter-spacing .05rem, font-weight 900, padding 20px 20px, WHITE;
  active link turns `#000` with a 2px `:after` underline. The source hides
  the desktop nav below `lg` (`d-none d-lg-block`) and uses a separate
  slide-in mobile menu (`.site-mobile-menu` with a close button) →
  React hamburger toggle.
- **Header-top (`.header-top.bg-light`):** light strip, logo left
  (`col-6 col-lg-3`), 3 quick-contact columns right (`col-lg-3 d-none
d-lg-block`), each `.quick-contact-icons.d-flex`: orange flaticon icon
  (placeholder / call / email) + `.caption-text` (bold main line + small
  grey sub-line).
- **Hero (`.hero-slide.owl-carousel.site-blocks-cover`):** full-viewport
  (`height: 100vh; min-height: 700px`) photo background + `#222` overlay
  (opacity .3); centered col-lg-12 content: h1 (3rem, weight 300, white;
  `<strong>` → weight 700) + optional white sub-paragraph; white square
  prev/next arrow controls (owl nav in the source → React state
  carousel). Two slides in the source, both using `images/hero_1.jpg`.
- **Services (`.services-1-wrap`):** white section (`.site-section`
  padding 2.5em/5em), centered heading block (`.section-subtitle` orange +
  `.section-title` — default white, overridden `text-black` here,
  weight 300 with `<strong>` 700); 4 `.service-1` cards (col-lg-3
  col-md-6, padding 20px 30px, 1px `#efefef` border, `border-right: none`,
  `position: relative`): `.number` (absolute right 10px top 10px, "01"–
  "04") + `.service-1-icon` (flaticon glyph, orange-tinted square badge —
  `:before` rotated 45° diamond behind) + `.service-heading` h3 + p.
- **Why Choose Us (`.block-2`, bg `#09162a`, padding 7rem):** split row —
  left col-lg-6 photo (`about_1.jpg`, `.img-overlap` with
  `margin-top: -150px` so it overlaps the services section above); right
  col-lg-5 ml-auto: orange subtitle "Why Choose Us" + h2 (white, weight
  300, strong 700) "More than 50 year experience in industry" + grey
  paragraph + 3 feature rows (`d-flex align-items-center mb-4`): orange
  flaticon icon (`text-primary`, `display-4`) + h4 (white, `.h5`) + p
  (white).
- **Get A Quote (`.quote-form-wrap`, bg `#09162a`, padding 5rem):**
  subtitle "Get A Quote" + h2 "Request A Quote" (white); form: 2-column
  grid (`col-md-6 form-group`) — Your name*, Phone number, Your email*,
  Subject + full-width Message* textarea (7 rows); `.form-control` —
  transparent bg, white text, `padding: 10px 0`, NO left/right padding,
  `border: none`, `border-bottom: 2px solid rgba(255,255,255,0.5)`,
  `border-radius: 0`; submit "Send Message" (orange btn-block btn-lg,
  radius 0).
- **Our Projects (`.block-3`, bg `#09162a`, padding 7rem, `margin-bottom:
14rem`):** subtitle "Our Projects" + h2 "Explore Our Recent Projects"
  (white); `.projects-carousel-wrap` (`margin-bottom: -200px`) with an
  owl-carousel (3-per-view in the source) of 4 `.project-item` cards:
  photo + `.project-item-contents` (absolute, bottom 20px left/right 20px)
  with `.project-item-category` (e.g. "Factory") + h2
  `.project-item-title` ("Building Refinery"); hover: `rgba(0,0,0,0.7)`
  overlay fade-in + image scale 1.05. Carousel → React (3 visible on
  desktop, stack on mobile; prev/next or a simple horizontal scroll).
- **Testimonial (`.site-section.testimonial-wrap`, white):** centered
  subtitle "Testimonial" + h2 (text-black) "What People Says"; row of 2
  `.testimonial` blocks (col-md-6): 100px circular photo
  (`person_3_sq.jpg` / `person_4_sq.jpg`) + `blockquote p` (20px, weight
  700, black) + `.client-name` (Oswald, uppercase, 1.2rem, orange).
- **Blog (`.site-section.bg-light`):** LEFT-aligned heading block
  (`.col-12 text-left`): subtitle "Blog" + h2 (text-black) "News &
  Updates"; 3 `.blog-entry` cards (col-lg-4): `.img-link` photo
  (overflow hidden, hover scale 1.05) + `.blog-entry-contents`: h3 link
  ("Top Companies That Are Best In Industrial Business") + `.meta`
  ("Posted by Admin In News"). Source repeats the same card 3× — vary
  titles/meta.
- **Newsletter (`.py-5.bg-primary.block-4`, orange `#ff5e15`):** left
  col-lg-6: h3 white "Subscribe To Newsletter" (weight 300, uppercase) + p
  white; right col-lg-6: `.form-subscribe.d-flex` — text input
  (`border: 2px solid #fff`, transparent bg, radius 0, white text) + black
  "Subscribe" submit (`px-4`, radius 0). Fix the source typo "Subcribe".
- **Footer (`.footer`, bg `#000`, padding 4rem 0, 15px text):** row of 4
  columns: (1) col-lg-3 — brand logo (`logo2.png`) + about p + "Learn
  More" link; (2) col-lg-3 — `h3.footer-heading` (16px, white, mb-30)
  "Our Company": 6 links (About / News / Services / Our Team / Careers /
  Projects); (3) col-lg-3 — "Our Services": 3 links (Industrial /
  Construction / Remodeling); (4) col-lg-3 — "Contact": 5 links (Help
  Center / Support Community / Press / FAQ / Our Partners); bottom
  `.copyright` bar: "Copyright © <year> All rights reserved | This
  template is made with ♥ by **Component Dock**" →
  https://www.componentdock.com/ (replaces the source's Colorlib credit;
  NO ColorLib credit).
- **Mobile:** the source uses Bootstrap (grid, collapse mobile menu,
  btn classes), owl-carousel (hero slider + projects carousel), a
  sticky-wrapper for the navbar and AOS animations — implement with React
  state: a hero slider with prev/next arrows (2 slides), a project
  carousel (3-up desktop / stacked mobile), a hamburger mobile nav
  toggle, a sticky navbar (position: sticky), and cheap scroll/AOS-style
  fades only where trivial. Stack the 4-card service row and 4-column
  footer to 1–2 columns below `lg`/`md`.
- **Placeholder images:** `https://picsum.photos/seed/gantry-<n>/<w>/<h>`.
  Photo slots: hero_1 (2 slides — engineering/blueprints subject; screen
  the seed), about_1 (Why Choose Us overlap photo), project-1..4
  (construction subjects), person-1..2 (testimonial portraits, square),
  blog-1..3. Icons from `lucide-react` (MapPin, Phone, Mail, HardHat,
  Compass, DraftingCompass/PenTool, Crane/Construction,
  Clipboard/ClipboardList, Menu, X, ChevronLeft, ChevronRight) + inline
  SVG brand icons only if socials are added (the source footer has none —
  keep it link-list only).

## Requirements

### Requirement: Header — light top strip + orange navbar

The system SHALL render a light header-top strip with the brand on the
left and three contact columns on the right (location, phone, email — each
an orange icon + bold caption + grey sub-caption, desktop only), and below
it a solid orange `#ff5e15` navbar with six white uppercase links (Home,
About Us, Our Projects, Testimonials, Blog, Contact). On mobile a
hamburger SHALL open the same nav links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the header is inspected
- **THEN** it shows the brand, the three contact columns, and the orange
  navbar with the six nav entries (Home first)

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** the nav links appear and can be closed again

### Requirement: Hero slider

The system SHALL render a full-viewport hero slider with an
engineering-photo background under a dark `#222` overlay (opacity .3),
two slides with centered white headlines where one word is highlighted in
orange, and square white prev/next arrow controls.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the headline "We Are Leading Industry of Engineers"
  with "Leading" highlighted in orange

#### Scenario: Slider navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the next arrow is activated
- **THEN** the second slide's headline ("Experts and High Quality Works")
  is shown

### Requirement: What We Do services section

The system SHALL render a white services section with a centered orange
subtitle "What We Do", a black section title, and four service cards,
each showing a number (01–04), an icon, a heading, and a paragraph.

#### Scenario: Service cards

- **GIVEN** the services section is rendered
- **WHEN** the cards are inspected
- **THEN** four cards are shown, each with a number, an icon, a heading
  (Professional Team / Great Ideas / Quality Building / Quality Works),
  and a paragraph

### Requirement: Why Choose Us section

The system SHALL render a dark-navy `#09162a` split section with a photo
on the left (overlapping the section above) and, on the right, the
subtitle "Why Choose Us", the heading "More than 50 year experience in
industry", a paragraph, and three feature rows (orange icon + white
heading + white paragraph).

#### Scenario: Features

- **GIVEN** the Why Choose Us section is rendered
- **WHEN** it is inspected
- **THEN** it shows the photo on the left and three features on the
  right (Expert in Buildings / Modern Design / Leading In Floor Planning)

### Requirement: Get A Quote form

The system SHALL render a dark-navy quote panel with the heading "Request
A Quote" and a form with four input fields (Your name, Phone number, Your
email, Subject), a Message textarea, and a full-width orange "Send
Message" submit button. Inputs SHALL be transparent with a 2px white
bottom border and no rounding.

#### Scenario: Form fields

- **GIVEN** the quote panel is rendered
- **WHEN** it is inspected
- **THEN** it shows the name, phone, email, subject, and message fields
  with a full-width "Send Message" button

### Requirement: Our Projects section

The system SHALL render a dark-navy projects section with the heading
"Explore Our Recent Projects" and a carousel of four project cards, each
showing a photo, a category label, and a title, with a dark overlay on
hover.

#### Scenario: Project cards

- **GIVEN** the projects section is rendered
- **WHEN** the cards are inspected
- **THEN** four cards are shown, each with a category (e.g. "Factory")
  and a title (e.g. "Building Refinery")

### Requirement: Testimonial section

The system SHALL render a white testimonial section with the heading
"What People Says" and two testimonial blocks, each showing a circular
photo, a bold quote, and an orange uppercase client name.

#### Scenario: Testimonials

- **GIVEN** the testimonial section is rendered
- **WHEN** the blocks are inspected
- **THEN** two testimonials are shown, each with a photo, a quote, and a
  client name

### Requirement: News & Updates blog section

The system SHALL render a light-grey blog section with the heading "News
& Updates" and three blog cards, each showing a photo, a post title, and
a meta line ("Posted by … In …").

#### Scenario: Blog cards

- **GIVEN** the blog section is rendered
- **WHEN** the cards are inspected
- **THEN** three cards are shown, each with a photo, a title, and a meta
  line

### Requirement: Newsletter band

The system SHALL render an orange `#ff5e15` newsletter band with the
heading "Subscribe To Newsletter", a supporting paragraph, a text input
with a 2px white border, and a black "Subscribe" button.

#### Scenario: Subscribe form

- **GIVEN** the newsletter band is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, the input, and the black "Subscribe"
  button

### Requirement: Footer

The system SHALL render a black footer with four widget columns (brand +
about + "Learn More" link, Our Company 6 links, Our Services 3 links,
Contact 5 links) and a bottom copyright bar. The credit SHALL read "This
template is made with ♥ by **Component Dock**" linking
https://www.componentdock.com/ (no ColorLib credit).

#### Scenario: Footer widgets

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the brand column, six Our Company links, three Our
  Services links, and five Contact links

#### Scenario: Footer credit

- **GIVEN** the footer bottom bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Gantry app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero slider, what we do, why
  choose us, get a quote, our projects, testimonials, news & updates,
  newsletter and footer in the correct order
- **AND** the document title SHALL be "Gantry — Construction Template"

## Verification checklist

- [ ] `openspec/specs/template-gantry/spec.md` validated
      (`npm run spec:validate`)
- [ ] App folder `apps/gantry`, package
      `@free-react-templates/gantry`, no ColorLib references in app code
      (grep for colorlib/Engineers in apps/gantry)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) —
      `bash scripts/verify-app.sh gantry`
- [ ] Section order matches the source: header-top + orange navbar →
      hero slider → what we do → why choose us → get a quote → our
      projects → testimonial → news & updates → newsletter → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #ff5e15`,
      `--color-navy: #09162a`, `--color-black: #000`,
      `--color-soft: #f8f9fa`, `--color-card-line: #efefef`; hero overlay
      `#222` at opacity .3; Google Fonts `<link>`s in `index.html`:
      Oswald (300/400/700) + Muli (300/400)
- [ ] Header-top: light strip — brand left (black bold wordmark + orange
      mark), 3 contact columns right (orange MapPin/Phone/Mail icons +
      bold caption + grey sub-caption; desktop only)
- [ ] Navbar: solid `#ff5e15` bar, white uppercase Oswald links
      (16px, ls .05rem, weight 900, padding 20px), active link black +
      underline; sticky; mobile hamburger → nav toggle
- [ ] Hero: full-viewport engineering photo + `#222` overlay (.3),
      centered white h1 (3rem/300, `<strong>` word orange), 2 slides with
      prev/next white square arrows
- [ ] What We Do: centered orange subtitle + black title + 4 cards
      (number 01–04 top-right + icon badge + h3 + p), 1px `#efefef`
      borders between cards
- [ ] Why Choose Us: `#09162a` bg, photo left overlapping the services
      section (-150px), right: subtitle + "More than 50 year experience
      in industry" + p + 3 orange-icon features (white h4 + white p)
- [ ] Get A Quote: `#09162a` panel, "Request A Quote" + 2-col form
      (name/phone/email/subject + message textarea), transparent
      underline inputs (2px `rgba(255,255,255,0.5)` bottom border, radius
      0), full-width orange "Send Message" button
- [ ] Our Projects: `#09162a` bg, "Explore Our Recent Projects" +
      carousel of 4 cards (photo + hover `rgba(0,0,0,0.7)` overlay +
      category "Factory" + title "Building Refinery"); 3-up desktop /
      stacked mobile
- [ ] Testimonials: white bg, "What People Says" + 2 blocks (100px
      circular photo + 20px bold quote + orange uppercase client name)
- [ ] News & Updates: `bg-light`, LEFT-aligned heading + 3 cards
      (photo + h3 title + "Posted by Admin In News" meta)
- [ ] Newsletter: `#ff5e15` band, "Subscribe To Newsletter" + p + input
      (2px white border, radius 0) + black "Subscribe" button
- [ ] Footer: `#000` bg, 4 columns (brand + p + Learn More / Our Company
      6 / Our Services 3 / Contact 5) + bottom bar with Component Dock
      credit + no ColorLib credit
- [ ] Placeholder images via
      `https://picsum.photos/seed/gantry-<n>/<w>/<h>` (hero 2 slides,
      about_1, project 1–4, 2 testimonial portraits, blog 1–3); icons
      from `lucide-react`; no `tel:` literals (render the phone as plain
      text)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/engineers/`), design tokens, diffs
      (name, placeholder images, React slider/carousel + mobile nav
      instead of owl-carousel/Bootstrap collapse, Component Dock footer
      credit)
