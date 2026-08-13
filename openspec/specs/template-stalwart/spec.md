# Template: Stalwart (Construction)

## Purpose

Stalwart is a single-page construction-company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Congoro" design (see TEMPLATES.md, lines 564 and 1340 — mark
both `[x]` when done), built under a different name with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript. "Stalwart" is a NEW original
name — the ColorLib source name is never reused in app code.

The original is a construction/architecture firm landing page: a transparent
header over the hero (white logo box left, uppercase white nav links, search
field, dark square "Free Quote" button) that turns SOLID RED on scroll; a
full-height hero photo under a heavy red overlay (rgba(255,26,53,0.82)) with a
giant white "CONSTRUCTION" watermark (stock-text), a large white headline, and
a white uppercase "Discover Work" text link with a short dash line; a red
contact strip overlapping the hero bottom (white "We are here to help you"
box on the left, three icon columns — Call Us / Location / Opening Hour);
a centered section heading with a red "/ " prefix ("/ OUR PROMISE AND
VALUES"); a promise section with a photo block left (dark "50 Years of
Experience" box pinned bottom-right, red "50") beside a right column with two
"Our Promise" heading+paragraph blocks and a square outline-red "Learn More"
button; a light-grey services carousel ("/ Services We Offer") of photo cards
(Architecture / Construction / Renovation) with a red "View Details" box that
fades in on hover and owl arrow buttons; a 3-tile gallery (580px photos,
hover dark gradient + slide-up white caption + arrow link); an about section
in a RED-BORDERED box ("Unique Apartment Formats" + red square "Learn More");
a team carousel (5 member cards: photo with hover social icons, name, role);
and a near-black footer (logo + blurb + 4 social icons, Navigation / Contact
columns, "Subscribe Newsletter" email form with red SUBSCRIBE pill, copyright
bar) plus a red circular back-to-top button. Stalwart recreates that
structure section-for-section with matching layout, colors, typography, and
content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Congoro" — free construction / architecture website
  template (source: https://colorlib.com/wp/template/congoro/; two `- [ ]`
  entries in TEMPLATES.md — lines 564 (Bootstrap 5) and 1340 (Construction)).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/congoro/`
  (HTTP 200, ~29.4KB; `<title>` "Construction") + stylesheet
  `assets/css/style.css` (~72KB, SCSS-compiled, minified) plus bootstrap /
  owl / slicknav / fontawesome / themify / slick / nice-select. The page was
  also rendered in a browser and inspected visually via screenshots
  (computed styles verified: hero overlay, slider-footer, info-man box,
  buttons, footer). The TEMPLATES.md screenshot
  (`congoro-colorlib-template.jpg`, 1200×946) confirms the design — it is an
  older snapshot (nav shows "SERVICES", phone 1-800-569-369) but the same
  aesthetic: heavy red-overlay hero with "CONSTRUCTION" watermark, white
  headline, "— DISCOVER WORK" link, transparent header with black FREE QUOTE
  button, red strip with white "WE ARE HERE TO HELP YOU" box, "/ OUR PROMISE
  AND VALUES" heading, promise photo with torch + dark "50 Years of
  Experience" box, services, gallery, red-bordered about, dark footer.
  Overall aesthetic: bold, industrial, high-contrast — brand red **#FF1A35**
  - near-black **#1E1E1E** + white, Oswald display type + Barlow body,
    square (radius-0) buttons, red overlay hero.
- **Section order (1:1, from the live DOM / accessibility tree):**
  1. `div.header-area.header-transparent` (absolute over hero, z-index 9):
     `.main-header.header-sticky` — `.header-info-left`: `.logo` (WHITE box,
     bg #fff, padding 32px 35px, `logo.png` 146×38) left, `.main-menu`
     (uppercase Barlow 14px/600 white links, margin 0 15px, hover underline
     ::after 3px white, padding 40px 9px): Home, Service, Project, About,
     Blog (`.submenu` dropdown, bg #1E1E1E, width 190px: Blog / Blog
     Details / Elements), Contact; `.header-righ`: `.search-form` (search
     icon + input that expands to 140px on focus) + `.header-right-btn` →
     `a.header-btn` "Free Quote" (bg #1E1E1E, white Oswald uppercase
     16px/600, padding 39px 60px, radius 0; icon `i` #FF5E14). Sticky on
     scroll: `.header-sticky.sticky-bar` → fixed, bg **#FF1A35**, height
     102px, shadow 0 10px 15px rgba(25,25,25,0.1). Mobile: `.mobile_menu`
     slicknav → repo-standard hamburger menu.
  2. `div.slider-area` → `.slider-active` → `.single-slider.slider-bg2.
slider-height.hero-overly` (single slide; bg image `img/hero/hero2.jpg`
     cover; height 900px; overlay ::before **rgba(255,26,53,0.82)**):
     `.hero-caption` (left-aligned): `.stock-text` — two `h2` "Construction"
     (Oswald 160px/600 white uppercase, absolute, top -73px; watermark
     behind), `h1` "Innovation starts with a dream and a plan" (95px/600
     white, lh 1.1, mb 50px), `span` (uppercase 18px/400 white, letter-
     spacing 0.03em, margin-left 33px, ::before 25px×2px white line) wrapping
     `a` "Discover Work" (text link, not a button).
  3. `div.slider-footer.section-bg.d-none.d-sm-block` (bg **#FF1A35**,
     margin-left 14%, **margin-top -150px** — overlaps the hero bottom,
     z-index 2): `.footer-wrapper` flex — (a) `.single-caption` with
     `.heading-cap` (WHITE box, padding 29px 34px 24px 35px): `h2` "We are
     here to help you" (`<br>` split, Oswald 40px/600 uppercase #0A0A0A);
     (b/c/d) `.single-caption` ×3 (width 20.33% each; 3rd hidden <lg, 4th
     hidden <xl) — `.caption` flex: `.icon` (circle icon img, margin-right
     15px) + `.contact-cap`: `h4` (white 20px/600, mb 16px) + `p` (phone +
     email; source repeats placeholder "1-800-506-266 / contact@congoro.com"
     in ALL three — paraphrase to real phone / email / opening hours):
     "Call Us" (phone icon), "Location" (map-pin icon), "Opening Hour"
     (clock icon).
  4. `div.tittle.top-padding` (padding-top 120px): centered
     `.section-tittle.text-center.mb-65` — `h2` with red slash prefix:
     `<span>/ </span>OUR PROMISE AND VALUES` (Oswald 40px/600; `.section-
tittle h2 span` color **#FF1A35**).
  5. `div.visit-tailor-area.fix`: `.tailor-offers` left (width 49%, height
     700px, bg image `img/gallery/visit_bg.jpg` cover — construction photo)
     - `.info-man` (bg **#1E1E1E**, display inline-block, padding 35px 37px,
       absolute bottom 68px right 70px, text-center): `.head-cap` (mb 9px) →
       `h3` "50" (**#FF1A35**, 120px/800, lh 1) + `p` "Years of Experience"
       (white, 18px); `.tailor-details` right (width 36%, padding 20px 20px
       20px 80px): TWO `.details-sinlge` blocks (second mb-30), each `h2`
       "Our Promise" (Oswald heading; lorem copy below → paraphrase into 2
       real value paragraphs each) + `a.btn_01.visit-btn` "Learn More"
       (outline red — 1px solid #FF1A35, red Oswald uppercase 14px/500,
       padding 14px 43px, radius 0; hover solid red + white).
  6. `section.home-blog.section-bg1` (bg **#F2F4F8**): `.section-tittle.
section-tittle2.mb-60` — `h2` "/ Services We Offer" (38px); `.items-
active.owl-carousel` — 8 `.single-blogs.single-blogs2` cards (margin
     0 12px; 3 per view; owl nav arrows: 47px circles, radius 25px, 1px
     solid #C1C1C1, positioned top -81px right): `.blog-img` (mb 25px,
     relative; hover ::before overlay rgba(84,84,84,0.6)) containing photo
     - `a.blog-btn` "View Details" (red #FF1A35 box, white text, padding
       25px 17px, width 123px, absolutely centered top 50%; opacity 0 →
       visible on card hover); `.blogs-cap`: `h5 > a` title (Architecture /
       Construction / Renovation — source mixes these across 8 slides;
       paraphrase to 4 distinct services: Architecture, Construction,
       Renovation, Energy; #0A0A0A, 28px/500, mb 12px) + `p` blurb (lorem →
       paraphrase).
  7. `div.gallery-area` (container-fluid p-0): 3 `.single-gallery` tiles
     (col-xl-4, p-0, mb 30px): `.gallery-img` (height **580px**, cover,
     `gallery1..3.jpg`); `.single-gallery::before` = dark bottom gradient
     (transparent → #0a0a0a, opacity 0 → 1 on hover); `.thumb-content-box`
     (absolute, centered) → `.thumb-content` (absolute, bottom -58px —
     slides up on hover, flex space-between, padding-left 40px): `.capt` —
     `h3` (white 30px/600, mb 25px; source titles: "Energy Station" ×3) +
     `p` blurb + circle arrow link. Source tile titles repeat — paraphrase
     to 3 distinct project names (e.g. Energy Station, Skyline Bridge,
     Metro Tunnel).
  8. `section.about-area.section-padding`: `.container.wrapper-border`
     (**border 2px solid #FF1A35, padding 20px**, flex row): `.about-img`
     left (col-6, photo) + `.about-caption` right (col-5): `.section-tittle.
section-tittle2.mb-25` — `h2` "Unique Apartment Formats" (Oswald
     30px/600) + `p` (pt-20 pb-20, 2 sentences) + `a.btn` "Learn More"
     (SOLID red #FF1A35, Oswald uppercase 14px/400, padding 30px 52px,
     radius 0; hover ::before dark red #cc031b slides in).
  9. `div.team-area.section-padding`: centered `.section-tittle.text-center.
mb-60` — `h2` "/ Services We Offer" (SOURCE BUG: the team section
     repeats the services heading verbatim — replace with "/ Our Team" or
     "/ Expert Builders" in the recreation); `.team-active` carousel — 5
     `.single-team.text-center` (margin 0 12px): `.team-img` (overflow
     hidden, mb 19px, photo, hover scale(1.1)) + `.team-social` (absolute
     bottom 22px center; 3 icon links slide up / fade in on hover) +
     `.team-caption`: `h3 > a` name ("Buster Hyman" ×5 in source — paraphrase
     to 5 distinct names; #33384e, 22px/500, hover #FF1A35) + `p` role
     ("Real Estate Agent" in source — paraphrase to construction roles:
     Architect, Site Manager, Civil Engineer, Interior Designer, Project
     Lead). Owl nav arrows like the services carousel.
  10. `div.footer-area.footer-padding` (bg **#1E1E1E**, pt 99px): `.footer-
wrapper` row — col-3 brand: `.footer-logo` (logo2_footer.png, mb 25px)
      - `.footer-tittle > .footer-pera` paragraph (16px/300, lh 1.8; lorem →
        real blurb) + `ul.footer-social` (4 icon links — white 40px circles,
        18px icons, hover rotateY(180deg); facebook / instagram / twitter /
        youtube — use inline SVG brand icons, lucide-react dropped them);
        offset-xl-1 col-2 "Navigation" (`h4.footer-tittle` Barlow white
        20px/400, mb 29px; links Home, About, Services, Blog, Contact —
        #C1C1C1/300, mb 13px); col-2 "Contact" (address "87/A, Green lane,
        CA 6732", "Real State", "info@josanclick.com", "+10 236 327 3782" —
        paraphrase; render phone/email as plain text or runtime-computed
        hrefs, never `tel:+` literals); col-3 "Subscribe Newsletter"
        (`h4.footer-tittle` + `.footer-form` → `#mc_embed_signup` form: email
        input — width 100%, height 47px, bg rgba(255,255,255,0.1), white
        text, radius 0, placeholder " Enter your email" — + submit button
        "Subscribe" (red pill — `.submit-btn`: bg #FF1A35, radius 35px, Oswald
        16px/500, padding 25px 43px; hover dark #0A0A0A slide; vision-
        verified red)); `.footer-bottom-area` → `.footer-border` (border-top
        1px solid rgba(255,255,255,0.2), pt 23px pb 10px, mt 50px) →
        `.footer-copy-right.text-center` — copyright line (source: "made with
        ♥ by Colorlib" → repo-standard Component Dock credit; text #C1C1C1
        18px/300, `i` and links #FF1A35).
  11. `#back-top` (40px red #FF1A35 circle, fixed right 31px bottom 18px,
      white arrow, shadow) with animated double-arrow wrapper.
- **Design tokens extracted from `assets/css/style.css` (verified with
  computed styles / browser screenshots):**
  - Brand red **#FF1A35** (39 uses) — hero overlay rgba(255,26,53,0.82),
    `.section-tittle h2 span` (the "/ " prefix), `.btn` bg (solid Learn
    More), `.btn_01` border+text (outline Learn More), `.boxed-btn`
    border+text, `.header-sticky.sticky-bar` bg (sticky header), `.slider-
footer` bg, `.info-man .head-cap h3` ("50"), `.blog-btn` bg, `.team-
caption h3 a:hover`, `.footer-copy-right i/a`, `#back-top` bg, hover
    dark-red #cc031b (`btn::before`).
  - Near-black **#1E1E1E** (header-btn "Free Quote" bg, submenu bg, info-man
    box bg, footer bg). Secondary **#2A2A2A** (`btn_1` pill — blog pages).
  - Headings **#0A0A0A** (h1-h6 + `.blogs-cap h5 a`, `.heading-cap h2`).
  - Body **#656565** (p), muted **#C1C1C1** (footer links, copyright, carousel
    arrow borders) / **#999999**, team names **#33384e**, blogs-cap kicker
    **#74706B**, hero + red-strip text white.
  - Section backgrounds: hero = photo + red 0.82 overlay; slider-footer red
    #FF1A35; promise section white; services #F2F4F8; gallery white; about
    white with 2px red border box; team white; footer #1E1E1E.
  - Font: **Oswald** (h1-h6, section tittles, buttons) + **Barlow** (body,
    nav links, footer tittles); Google Fonts import
    `Barlow:wght@300;400;500;600;700;800` + `Oswald:wght@300;400;500;600;700`.
  - Buttons — mostly SQUARE (radius **0**): `.btn` solid red (Oswald
    uppercase 14px/400, padding 30px 52px, hover dark-red slide-in);
    `.btn_01` outline red (uppercase 14px/500, padding 14px 43px, hover
    solid red); `.header-btn` black (Oswald uppercase 16px/600, padding
    39px 60px); `.blog-btn` red (16px, padding 25px 17px, width 123px,
    centered overlay on card photo); `.submit-btn` red PILL (radius 35px,
    padding 25px 43px). Hero "Discover Work" is a TEXT LINK (uppercase 18px
    white, 25px×2px white line before). `.nice-select` radius 25px (not used
    on this page).
  - Headings: hero h1 95px/600 white lh 1.1; stock-text h2 160px/600 white
    uppercase (watermark); section-tittle h2 40px/600 (+ 38px for
    section-tittle2, 30px for about-caption), span prefix red; heading-cap
    h2 40px/600 uppercase; info-man h3 120px/800 red; blogs-cap h5 28px;
    team h3 22px; footer h4 20px/400 Barlow.
  - Layout: hero 900px; slider-footer margin-top -150px (overlap) with white
    heading-cap box; tailor-offers 49% × 700px + info-man box bottom-right;
    tailor-details 36% + padding 20px 20px 20px 80px; gallery tiles 580px
    (3 across); about wrapper-border 2px red + padding 20px; team cards
    margin 0 12px, photo hover scale(1.1) + social slide-up; footer-padding
    pt 99px; `.section-padding` 100px.
  - Header states: transparent over hero → sticky: bg #FF1A35, height 102px,
    shadow. Logo sits in a white box (bg #fff, padding 32px 35px).
  - Misc: carousel arrows 47px circles radius 25px 1px #C1C1C1 (services +
    team); gallery hover gradient transparent → #0a0a0a + caption slides up
    from bottom -58px; blog card hover overlay rgba(84,84,84,0.6) + red View
    Details box fades in; back-to-top 40px red circle bottom-right.
- **Recreation decisions:** name "Stalwart" (fits a construction brand;
  wordmark "Stalwart" in app, package @free-react-templates/stalwart, app
  apps/stalwart). Transparent header over the hero — white logo box + links
  (Home, Service, Project, About, Blog, Contact) + search icon + black square
  "Free Quote" button; sticky state turns the bar RED (#ff1a35). Hero = 900px
  photo under red overlay (rgba(255,26,53,0.82)): giant "STALWART" watermark
  (replaces "Construction"), white h1 "Innovation starts with a dream and a
  plan", "— Discover Work" text link. Red contact strip overlapping hero
  bottom: white box "We are here to help you" + 3 icon columns (Call Us /
  Location / Opening Hour with REAL phone/email/hours — paraphrase the
  repeated placeholders). "/ OUR PROMISE AND VALUES" tittle; promise section:
  picsum photo left + dark #1e1e1e box bottom-right with red "50" + "Years of
  Experience", right column with 2 × "Our Promise" heading + paragraphs +
  outline-red "Learn More". Services on #f2f4f8: "/ Services We Offer" + 4
  cards (Architecture, Construction, Renovation, Energy) with hover red
  "View Details" box + carousel arrows (or a static 3-4 column grid with
  arrows). Gallery: 3 × 580px tiles with hover dark gradient + slide-up
  white caption + arrow link (Energy Station, Skyline Bridge, Metro Tunnel).
  About in a 2px red-border box: "Unique Apartment Formats" + paragraph +
  solid red "Learn More". Team: "/ Our Team" (fix the source's duplicated
  "Services We Offer" heading) + 5 cards (distinct names + construction
  roles, hover zoom + 3 social icons). Footer #1e1e1e: logo + blurb + 4
  social circles, Navigation / Contact columns, Subscribe Newsletter form
  (email input + red "Subscribe" pill), copyright bar with Component Dock
  credit. Red circular back-to-top. All images picsum-seeded
  (`picsum.photos/seed/stalwart-N/w/h`); Google Fonts Oswald + Barlow via
  `<link>`; icons via lucide-react (probe exports: Search, Phone, MapPin,
  Clock, ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, ArrowUp,
  Mail — brand icons like Facebook/Instagram/Twitter/YouTube are NOT in
  lucide-react, use inline SVG if needed); copy paraphrased into real
  construction copy (no lorem).

Stalwart lives in `apps/stalwart` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a transparent header with a logo box, nav links, a
search control, a Free Quote button, and a mobile menu, that turns red when
sticky.

#### Scenario: Transparent header

- **GIVEN** the Stalwart page is rendered at the top of the page
- **WHEN** the header is displayed
- **THEN** it SHALL sit transparently over the hero with a white logo box
  containing the brand "Stalwart"
- **AND** it SHALL show uppercase nav links Home, Service, Project, About,
  Blog, and Contact in white
- **AND** it SHALL show a search icon (expanding input on focus) and a black
  square "Free Quote" button on the right

#### Scenario: Sticky red header

- **GIVEN** the Stalwart page is rendered
- **WHEN** the page is scrolled down
- **THEN** the header SHALL become fixed with a red (#ff1a35) background and
  a subtle shadow

#### Scenario: Mobile menu

- **GIVEN** the header is displayed at a small viewport
- **WHEN** the user activates the hamburger control
- **THEN** a menu with the nav links SHALL open
- **AND** activating the control again SHALL close it

### Requirement: Hero

The system SHALL render a full-height hero photo under a red overlay with a
watermark word, a headline, and a Discover Work text link.

#### Scenario: Hero content

- **GIVEN** the Stalwart page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a 900px-tall cover photo with a red
  (rgba(255,26,53,0.82)) overlay
- **AND** it SHALL show a giant white uppercase watermark word (the brand,
  e.g. "STALWART") behind the caption
- **AND** it SHALL show the white headline "Innovation starts with a dream
  and a plan"
- **AND** it SHALL show an uppercase white "Discover Work" text link with a
  short dash line before it

### Requirement: Contact strip

The system SHALL render a red strip overlapping the hero bottom with a white
help box and three contact-info columns.

#### Scenario: Strip content

- **GIVEN** the Stalwart page is rendered
- **WHEN** the contact strip is displayed
- **THEN** it SHALL sit on a red (#ff1a35) background overlapping the hero's
  bottom edge
- **AND** the left side SHALL show a white box with the uppercase black
  heading "We are here to help you"
- **AND** it SHALL show three columns (Call Us, Location, Opening Hour),
  each with an icon, a white title, and phone/email/hours lines

### Requirement: Promise and values

The system SHALL render a centered section heading with a red slash prefix
and a promise section with a photo block and a text column.

#### Scenario: Section heading

- **GIVEN** the Stalwart page is rendered
- **WHEN** the promise section heading is displayed
- **THEN** it SHALL show the heading "/ OUR PROMISE AND VALUES" in Oswald
  with the "/ " prefix in red (#ff1a35)

#### Scenario: Promise content

- **GIVEN** the Stalwart page is rendered
- **WHEN** the promise section is displayed
- **THEN** the left side SHALL show a cover photo with a dark (#1e1e1e) box
  pinned to its bottom-right corner containing a large red "50" and white
  "Years of Experience"
- **AND** the right side SHALL show two blocks, each with the heading "Our
  Promise" and two paragraphs
- **AND** it SHALL show a square outline-red "Learn More" button

### Requirement: Services

The system SHALL render a services section on a light-grey background with
photo cards and a red View Details hover box.

#### Scenario: Service cards

- **GIVEN** the Stalwart page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL sit on the light-grey (#f2f4f8) background with the
  heading "/ Services We Offer"
- **AND** it SHALL show at least four service cards (e.g. Architecture,
  Construction, Renovation, Energy), each with a photo, a dark title, and a
  blurb
- **AND** hovering a card SHALL darken the photo and reveal a centered red
  "View Details" box
- **AND** the section SHALL provide carousel-style prev/next arrow buttons

### Requirement: Gallery

The system SHALL render a three-tile gallery with hover captions.

#### Scenario: Gallery tiles

- **GIVEN** the Stalwart page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show three full-width tiles of tall (580px) cover photos
- **AND** hovering a tile SHALL fade in a dark bottom gradient and slide up a
  white caption (title + blurb) with an arrow link

### Requirement: About

The system SHALL render an about section inside a red-bordered box with a
heading and a Learn More button.

#### Scenario: About content

- **GIVEN** the Stalwart page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL sit inside a box with a 2px red (#ff1a35) border
- **AND** the left column SHALL show a photo and the right column the heading
  "Unique Apartment Formats" with a paragraph
- **AND** it SHALL show a solid red square "Learn More" button

### Requirement: Team

The system SHALL render a team carousel with member cards.

#### Scenario: Team cards

- **GIVEN** the Stalwart page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show a team heading (e.g. "/ Our Team" — the source
  repeats the services heading; use a distinct team heading in the
  recreation)
- **AND** it SHALL show at least four member cards, each with a photo, a
  name (dark, red on hover), and a role
- **AND** hovering a member SHALL zoom the photo and reveal three social icon
  links
- **AND** the section SHALL provide carousel-style prev/next arrow buttons

### Requirement: Footer

The system SHALL render a near-black footer with brand, link columns, a
newsletter form, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Stalwart page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL sit on the near-black (#1e1e1e) background
- **AND** it SHALL show the brand logo with a blurb paragraph and four social
  icon links (hover flip)
- **AND** it SHALL show a Navigation column (Home, About, Services, Blog,
  Contact) and a Contact column (address, email, phone)
- **AND** it SHALL show a "Subscribe Newsletter" form with an email input and
  a red "Subscribe" pill button
- **AND** it SHALL show a copyright bar with the repo-standard Component
  Dock credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark,
a back-to-top control, and a document title.

#### Scenario: Full page render

- **GIVEN** the Stalwart app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, contact strip, promise
  section, services, gallery, about, team, and footer inside the main
  landmark in the original's order
- **AND** it SHALL show a red circular back-to-top button
- **AND** the document title SHALL be "Stalwart — Construction Company"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- stalwart` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (transparent header → red-overlay
      hero → red contact strip → promise/values → services → gallery →
      red-bordered about → team → near-black footer).
- [ ] Design tokens applied: brand red #FF1A35 (hero overlay, sticky header,
      "/ " prefixes, Learn More buttons, View Details box, "50", footer
      links, back-to-top), near-black #1E1E1E (Free Quote button, info-man
      box, footer), #F2F4F8 services bg, 2px red about border, Oswald +
      Barlow fonts, square (radius-0) buttons, red pill Subscribe.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Congoro), preview URL, tokens,
      and renames.
