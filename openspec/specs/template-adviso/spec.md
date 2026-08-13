# Template: Adviso (Business Consulting Template)

## Purpose

Adviso is a single-page business consulting template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Consultation" website template design (see TEMPLATES.md),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Consultation" — business consulting company site,
  "Consulting | Template" (Bootstrap 4 + jQuery, source:
  https://colorlib.com/wp/template/consultation/). Appears TWICE in
  TEMPLATES.md (duplicate rows, both unchecked) — one implementation marks
  both rows `[x]` with the same live URL.
- **Preview URL analyzed:** https://preview.colorlib.com/theme/consultation/
  (HTTP 200, ~36 KB HTML fetched; `assets/css/style.css` ~68 KB parsed in
  full; live page rendered and inspected in the browser).
- **Screenshot analyzed:** `consultation-colorlib-template.jpg` (1200x946,
  AVIF) — light header with black uppercase "CONSULATION." wordmark (period
  in mint), grey uppercase nav (HOME / ABOUT / SERVICES / CASE STUDY / BLOG /
  CONTACT), "Let's Talk" link with a mint underline on the right; hero photo
  of a smiling businesswoman in a dark blazer over a warm blurred office
  background with a dark left-side overlay; large white headline "Unlock Your
  Online Growth Potential." with "Online Growth" on the brand mint color;
  transparent "CHECK OUR SERVICES >" button with a thin white border; slider
  dots on the right edge. Below the fold: "Our Mission" block ("The Foremost
  & Premier Source For Everything Business.") with a mint Learn More link and
  a thick green horizontal rule, then a 3-column numbered (01/02/03) feature
  row. NOTE: the screenshot shows a light header, but the LIVE preview (the
  authoritative render) uses a TRANSPARENT header over the hero photo with
  white logo/nav text — verified via computed styles.
- **Live render (authoritative, verified via browser + computed styles):**
  transparent header over the hero image; white "CONSULTATION." logo and
  white uppercase nav (Jost 14px); "Let's Talk" white link with a mint
  underline; hero h1 Oswald 100px white with the highlight word/line in mint
  `#00FFAB`; hero button transparent with `1px solid #fff` border; mission
  strip below the hero on `#F2F2F2` with a 12px `#55A48A` top border and
  `#55A48A` Learn More link.
- **Section order (1:1, from the DOM of the home page):**
  1. Header (`header > .header-area .main-header.header-sticky`, transparent
     over the hero): left logo image (`assets/img/logo/logo.png` — rendered
     as white "CONSULTATION." wordmark); centered `nav.main-menu` with links
     HOME / ABOUT / SERVICES / CASE STUDY / BLOG (dropdown: Blog · Blog
     Details · Element) / CONTACT — white uppercase Jost 14px weight 500,
     underline grow on hover; right `.button-header` "Let's Talk" link
     (`.browse-btn`: white, 2px mint `#00FFAB` underline 11px below, hover →
     mint text + letter-spacing .3px). Sticky bar with
     `box-shadow: 0 10px 15px rgba(25,25,25,0.1)`.
  2. Hero slider (`section.slider-area > .slider-active`, 3 slides
     `.single-slider.slider-height.hero-overly.slider-bg1/2/3`): full-height
     background photos (`img/hero/h1_hero1..3.jpg`) with a dark left overlay;
     left-aligned `.hero-caption`: h1 white Oswald 100px (≤992px: 75px, ≤767:
     65px, ≤575: 35px) weight 600 line-height 1.1 with a block `<span>` in
     mint `#00FFAB` ("Unlock Your Online Growth **Potential**"); p white 20px
     (21px tablet); `a.hero-btn` "CHECK OUR SERVICES" — transparent, 1px
     white border, uppercase 14px weight 500, padding 23px 37px (hover:
     border + text mint `#00FFAB`). Slide dots vertical on the right edge
     (`.dot-style .slick-dots`, right 90px, top 40%).
  3. Mission strip (`div.slider-footer > .footer-wrapper`): bg `#F2F2F2`,
     `border-top: 12px solid #55A48A`, width 60% (70% ≤1199), flex space-
     between, padding 45px 55px. Content: `span` "Our Mission" (small grey
     uppercase), h3 "The Foremost & Premier Source For Everything Business.",
     mission paragraph (placeholder demo copy), `a.browse-btn.browse-btn2`
     "Learn More" in `#55A48A` with `#55A48A` underline.
  4. Services (`section.our-services2.section-padding`, white): 3 columns
     `.single-services` — `.services-icon` number span ("01", "02", "03",
     `#55A48A` 16px weight 500) + `.services-cap` h5 28px weight 500
     `#1E1E1E` title + placeholder paragraph. Titles: "Greet first-time
     visitors with a timely popup", "Annoying popups that show the minute
     you load", "Turn your email list into customers with unique".
  5. About (`section.about-area.fix`): `.about-img` photo + `.about-caption`
     — h2 Oswald 58px weight 500 (40px/30px responsive) on a **mint
     `#00FFAB` background block** (padding 45px 60px, pulled left with
     `left: -300px`), "For local heroes with big hearts and growing
     champions"; placeholder paragraph; white "Learn More" browse-btn
     (mint underline).
  6. Solutions / blog row (`section.home-blog.section-bg1`, bg `#F2F4F8`):
     `.section-tittle.section-tittle2`: `span` "Our Solutions" (grey 14px)
     - h2 Oswald 38px "Our consulting solutions for the streaming era" +
       paragraph; then 4 `.single-blogs` cards (blog-img + blogs-cap): titles
       **Strategic Planning**, **Trades & stocks**, **Audit & Assurance**,
       **Behind the mountains** — each with a placeholder paragraph and a
       "Learn More" browse-btn; hover reveals a mint `#00FFAB` vertical
       `.blog-btn` overlay (padding 25px 17px, `#1E1E1E` text, centered).
  7. Video / split CTA (`section.visit-tailor-area.fix`): left
     `.tailor-offers` (50% width, 850px tall, cover photo
     `img/gallery/video-bg.jpg`) with a centered 100px circular play button
     (`background:#00FFAB`, icon color `#F04506`, pulsing `::after` ring of
     `rgba(0,255,171,0.3)`); right `.tailor-details` (padding 20px 100px
     20px 300px desktop): h2 "We boost our clients' bottom line by
     optimizing" + two placeholder paragraphs + `a.btn_1` "Learn More"
     (bg `#2A2A2A`, white 18px, padding 25px 34px, hover → transparent with
     `#2A2A2A` border/text).
  8. Case study (`section.home-blog.section-bg2`, bg `#DFEBE6`):
     `.section-tittle` "Case study" (span + h2) + "LEARN MORE" browse-btn;
     3 `.single-blogs` cards: **Behind the word mountains**, **Large
     language ocean**, **Behind the word mountains** — image + h5 title +
     placeholder paragraph + "View Case" link.
  9. Stats / Partner (`section.count-down-area.section-padding.border-bottom`):
     `.section-tittle` h2 "Partner for your business" + paragraph
     ("We understand the complexities of modern markets...") + "Learn More"
     browse-btn; then 3 counters (`.single-counter`): **2500+**, **350+**,
     **20+** — number in Oswald 38px weight 700 `#55A48A` with a `+`
     suffix, label paragraph (placeholder).
  10. Footer (`footer.footer-area.footer-padding`, bg `#1E1E1E`): 4 columns
      `.single-footer-caption` — (1) about text "The automated process
      starts as soon as your clothes go into the machine." + social icon
      row (twitter/facebook/linkedin/instagram); (2) "Navigation": Home,
      About, Services, Blog, Contact; (3) "Services": Drone Mapping, Real
      State, Commercial, Construction; (4) "Subscribe Newsletter" form —
      email input (`height 47px`, bg `rgba(255,255,255,0.1)`, no border)
      - "SIGN UP" button (bg `#00FFAB`, text `#1E1E1E`, uppercase,
        padding 17px 22px, full width below the input). Bottom bar
        `footer-bottom-area`: copyright — ColorLib credit REPLACED by the
        Component Dock credit line. "Go to Top" scroll link (right side).
- **Design tokens extracted from the preview CSS (`assets/css/style.css`):**
  - Brand mint **`#00FFAB`** (hero h1 `<span>` highlight, `.browse-btn`
    underline + hover, about-caption h2 background block, `.blog-btn` hover
    overlay, video play button bg, footer "SIGN UP" button bg, submenu link
    hover). Hover ring `rgba(0,255,171,0.3)` on the play button.
  - Secondary green **`#55A48A`** (mission strip border-top 12px, mission
    "Learn More" `.browse-btn2` + underline, services numbers, counter
    numbers, `.count-down` figures).
  - Ink **`#1E1E1E`** (`.btn` bg, footer bg, `.single-services h5`, counter
    labels, blog-btn text, newsletter button text); dark-alt `#2A2A2A`
    (`.btn_1` bg); video play icon `#F04506`; `.btn` hover sweep `#ec583a`.
  - Surfaces: white body; `#F2F4F8` (`.section-bg1` solutions row); `#DFEBE6`
    (`.section-bg2` case-study row); `#F2F2F2` (mission `.footer-wrapper`);
    `#1E1E1E` footer; inputs `rgba(255,255,255,0.1)`.
  - Fonts: headings **"Oswald"** (h1 hero 100px w600, section-tittle h2 58px
    w500 / 38px, about h2 58px, counters 38px w700), body + nav **"Jost"**
    (body 18px `#656565`, nav 14px uppercase w500, section-tittle p 18px).
    Both Google Fonts via `@import`/`<link>` — never copy font files.
  - Buttons: `.btn` bg `#1E1E1E` Oswald 18px padding 22px 32px, square
    (radius 0), hover sweeps `#ec583a` (scaleX reveal via ::before);
    `.hero-btn` transparent 1px white border uppercase 14px w500 padding
    23px 37px, hover border/text mint; `.btn_1` `#2A2A2A` 18px padding
    25px 34px, hover outline; `.browse-btn` white with 2px mint underline
    (11px below), hover mint + letter-spacing .3px; `.browse-btn2` `#55A48A`
    variant.
  - Section rhythm: `.section-padding` 100px top/bottom; `.footer-padding`
    80-99px top; hero caption padding-top 50px; section borders: `border-
bottom` on count-down area.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/adviso-<n>/<w>/<h>`); icons → lucide-react (Menu,
  Play, ChevronRight, ArrowRight, Twitter, Facebook, Linkedin, Instagram,
  ArrowUp / MoveUp); Oswald + Jost via Google Fonts `<link>` in `index.html`;
  brand mint `#00FFAB` + secondary `#55A48A` + ink `#1E1E1E` in `@theme` so
  shared Button/ButtonLink `primary` resolves to mint; no asset/CSS/font-file
  copying. Demo copy paraphrased but same kinds (nav labels; hero headline +
  subtext + CTA; mission title + blurb + link; numbered service cards; about
  heading + blurb; blog card title + blurb + link; split video CTA heading +
  blurb + dark button; case-study cards; partner heading + stats counters;
  footer columns + newsletter form). The 3-slide hero slider and the play
  button are implemented with prev/next + dot navigation and a placeholder
  video link (no real embed). Footer copyright uses the Component Dock
  credit line, not ColorLib.

Adviso lives in `apps/adviso` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn) plus the repo-standard Navbar/Footer chrome
(adapted to the transparent-over-hero navbar with the "Let's Talk" underline
link, and the dark 4-column footer with the newsletter form).

## Requirements

### Requirement: Navbar

The system SHALL render a transparent navbar over the hero with the site
wordmark, section links, a Blog dropdown, and a "Let's Talk" link.

#### Scenario: Navbar content

- **GIVEN** the Adviso page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Adviso" as the brand
- **AND** the navbar SHALL show links HOME, ABOUT, SERVICES, CASE STUDY, BLOG, CONTACT
- **AND** the BLOG link SHALL expand a dropdown with Blog, Blog Details, and Element
- **AND** the navbar SHALL show a "Let's Talk" link with a mint underline

#### Scenario: Mobile menu

- **GIVEN** the navbar is rendered at a mobile viewport
- **WHEN** the user taps the hamburger toggle
- **THEN** the navigation links SHALL expand into a stacked menu

### Requirement: Hero slider

The system SHALL render a full-height image slider with three slides, each
with a dark overlay, a white headline with a mint-highlighted span, subtext,
and a transparent outlined CTA button.

#### Scenario: Hero slide content

- **GIVEN** the page is rendered
- **WHEN** the hero slider is displayed
- **THEN** each slide SHALL show the headline "Unlock Your Online Growth Potential"
- **AND** part of the headline SHALL be rendered in the mint brand color on its own block
- **AND** each slide SHALL show a subtext paragraph and a "CHECK OUR SERVICES" button with a transparent background and a thin white border

#### Scenario: Slider navigation

- **GIVEN** the hero slider is displayed
- **WHEN** the user activates a slider dot
- **THEN** the slider SHALL advance to the corresponding slide

### Requirement: Mission strip

The system SHALL render a light strip below the hero with a green top border
containing a mission label, a headline, a paragraph, and a Learn More link.

#### Scenario: Mission content

- **GIVEN** the page is rendered
- **WHEN** the mission strip is displayed
- **THEN** it SHALL show "Our Mission", the headline "The Foremost & Premier Source For Everything Business.", a paragraph, and a "Learn More" link in the secondary green
- **AND** the strip SHALL have a green top border and a light background

### Requirement: Services

The system SHALL render three numbered service cards (number, title,
paragraph).

#### Scenario: Services content

- **GIVEN** the page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show cards numbered 01, 02, and 03 with the titles "Greet first-time visitors with a timely popup", "Annoying popups that show the minute you load", and "Turn your email list into customers with unique"
- **AND** each card SHALL show its number in the secondary green and a placeholder paragraph

### Requirement: About

The system SHALL render an image and a caption whose heading sits on a mint
background block, with a paragraph and a Learn More link.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show a photo and the heading "For local heroes with big hearts and growing champions" on a mint background block
- **AND** it SHALL show a paragraph and a "Learn More" link

### Requirement: Solutions / blog row

The system SHALL render a light section with a heading block and four blog
cards (image, title, paragraph, Learn More), with a mint hover overlay.

#### Scenario: Solutions content

- **GIVEN** the page is rendered
- **WHEN** the solutions section is displayed
- **THEN** it SHALL show the label "Our Solutions" and the heading "Our consulting solutions for the streaming era"
- **AND** four cards titled "Strategic Planning", "Trades & stocks", "Audit & Assurance", and "Behind the mountains"

#### Scenario: Card hover

- **GIVEN** a solutions card is displayed
- **WHEN** the user hovers over it
- **THEN** the card SHALL reveal a mint overlay button

### Requirement: Video / split CTA

The system SHALL render a split section with a photo side containing a
circular play button and a details side with a heading, paragraphs, and a
dark Learn More button.

#### Scenario: Split CTA content

- **GIVEN** the page is rendered
- **WHEN** the split CTA section is displayed
- **THEN** it SHALL show a large cover image with a mint circular play button
- **AND** the details side SHALL show the heading "We boost our clients' bottom line by optimizing", two paragraphs, and a dark "Learn More" button

### Requirement: Case study

The system SHALL render a green-tinted section with a heading, a Learn More
link, and three case cards (image, title, paragraph, View Case link).

#### Scenario: Case study content

- **GIVEN** the page is rendered
- **WHEN** the case study section is displayed
- **THEN** it SHALL show the heading "Case study" and a "LEARN MORE" link
- **AND** three cards titled "Behind the word mountains", "Large language ocean", and "Behind the word mountains", each with a "View Case" link

### Requirement: Stats / Partner

The system SHALL render a section with a "Partner for your business"
heading, a paragraph, a Learn More link, and three numeric counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats section is displayed
- **THEN** it SHALL show the heading "Partner for your business" and a paragraph
- **AND** three counters showing 2500+, 350+, and 20+ in the secondary green

### Requirement: Footer

The system SHALL render a dark footer with an about column with social
icons, Navigation and Services link columns, a newsletter subscribe form,
and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show an about paragraph and social icons
- **AND** a "Navigation" column (Home, About, Services, Blog, Contact)
- **AND** a "Services" column (Drone Mapping, Real State, Commercial, Construction)
- **AND** a "Subscribe Newsletter" form with an email input and a "SIGN UP" button in mint
- **AND** a copyright bar with the Component Dock credit line

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Adviso app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the navbar, hero slider, mission strip, services, about, solutions, video split CTA, case study, stats, and footer in order
- **AND** the document title SHALL be "Adviso — Consulting Template"

## Verification checklist

- [ ] `openspec/specs/template-adviso/spec.md` present with the REAL
      section list (navbar → hero slider ×3 → mission strip → services ×3 →
      about → solutions ×4 → video split CTA → case study ×3 → stats ×3 →
      footer).
- [ ] Design tokens above (mint `#00FFAB`, secondary `#55A48A`, ink
      `#1E1E1E`, `#F2F4F8`/`#DFEBE6`/`#F2F2F2` surfaces, Oswald headings +
      Jost body, square buttons, 100px section rhythm, transparent header,
      mint-highlight hero span, mission strip with 12px `#55A48A` top
      border) captured in the spec.
- [ ] `docs/templates/adviso/tasks.md` has the task outline + design notes.
- [ ] `npm run spec:validate` passes for this spec.
- [ ] Implementer: TDD at 100% coverage, `bash scripts/verify-app.sh adviso`,
      PR lists source (ColorLib Consultation), preview URL, tokens, and what
      differs. Both TEMPLATES.md "Consultation" rows get `[x]` + the same
      live URL when done.
