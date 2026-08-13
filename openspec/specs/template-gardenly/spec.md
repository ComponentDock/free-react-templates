# Template: Gardenly (Gardening Service)

## Purpose

Gardenly is a gardening/landscaping service business landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Gardening" template design (see TEMPLATES.md — appears 3×:
lines 587, 1025, and 2108; all rows point to the same source, one prep covers
all; verified with `grep -c 'wp/template/gardening/'` = 3), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

Source: https://colorlib.com/wp/template/gardening/ (gardening service template)
Preview URL: https://preview.colorlib.com/theme/gardening/

## Design reference (replication findings)

- **Original:** ColorLib "Gardening" — gardening/landscaping service landing
  page (`<title>Gardening | Template</title>`). A green-themed one-pager on a
  white/mint palette with a forest-green accent: a thin contact info top bar;
  a white sticky header with a green "Get Free Quote" pill; a 700px full-width
  hero photo slider (dark-green-tinted overlay, centered white headline,
  white pill CTA, white dot controls); a mint (`#EFF6F0`) categories strip of
  6 white-translucent cards with line icons; a dark-forest-green (`#305534`)
  about section (left: two garden photos + big white heading; right: two
  "Our Mission" blocks); a 3-column services grid with `#C9D6CB` borders and
  green icons; a "Feature Projects" owl-carousel (4 slides, dark-green hover
  overlay with white caption + "View" link); a 3-column visit/quote band
  (left: photo, middle: mint "Our Commitment" testimonial carousel with
  founder, right: white "Get Free Quote" form with pill inputs and a
  full-width green submit); and a footer over a photo background with
  brand/social, Services, Navigation, Contact columns and a dark-green
  copyright line. Barlow + jQuery + owl.carousel + slick + slicknav +
  nice-select + magnific-popup, NOT Tailwind. Brand palette: green `#00880F`
  - forest `#305534` + sage `#66816A` + pale sage `#C9D6CB` + mint `#EFF6F0`
  - white.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/gardening/
  (HTTP 200, ~33 KB HTML fetched; `assets/css/style.css` ~73.5 KB parsed for
  tokens; page also imports animate.min.css, bootstrap.min.css,
  fontawesome-all.min.css, magnific-popup.css, nice-select.css,
  owl.carousel.min.css, slick.css, slicknav.css, themify-icons.css; jQuery +
  owl.carousel + slick + slicknav + nice-select + wow, NOT Tailwind). Font:
  `"Barlow", sans-serif` (15 rules in style.css — the only font family; no
  Google Fonts link in the HTML, so add the Google Fonts `<link>` in
  index.html).
- **Screenshot note:** `gardening-colorlib-template.jpg` (1200×946, browsed
  visually in the browser): thin white top bar; white header with logo, menu,
  and a green "Get Free Quote" pill + search icon; full-width hero photo of a
  lush green lawn with a dirt path, centered white headline "We provide best
  gardening service" + sub-line + white "View Our Services" button + slider
  dots; mint background categories row with 6 line-icon cards (Landscaping,
  Planting, Watering, Fence, Removing, Lawn Mowing); centered promo line
  "Check out our list of service for your garden and get free quote" (green
  link); dark-green about band ("We have been designing gardens since 1990" /
  "Our Mission"). The screenshot's header shows a cart icon and the hero has
  a small white pill badge over the headline that are NOT in the live DOM —
  the live preview DOM + parsed stylesheet are the authoritative reference;
  the screenshot confirms the palette and layout.

### Design tokens (from `assets/css/style.css` + computed styles)

| Token                 | Value                                                                                        | Where                                                                                                                                                   |
| --------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Primary green         | `#00880F`                                                                                    | `.btn`/`.btn_01`/`.header-btn`/`.view2` bg, `.nav-search` color, `.services-ion span` color, `.footer-social a` color, link hover colors, submit button |
| Hover sweep pink      | `#e6115f`                                                                                    | `.btn::before` (scaleX sweep revealed on hover — implement as a hover fill or gradient, token captured)                                                 |
| Forest green          | `#305534`                                                                                    | `.section-bg2` bg (about band), headings (`.services-cap h5 a`, `.cat-cap h5>a`, `.section-tittle3 p`), footer text, hero badge text                    |
| Muted sage            | `#66816A`                                                                                    | body paragraphs (`.services-cap p`, `.section-tittle p`, `.testimonial-caption p`, `.cat-cap p`), form input/textarea border + text                     |
| Pale sage-gray        | `#C9D6CB`                                                                                    | borders: `.header-top` bottom, `.single-services` grid, footer section-tittle2 `p` color                                                                |
| Mint tint             | `#EFF6F0`                                                                                    | `.section-bg` (categories bg), `.slider-area` bg, `.mid-colum` bg                                                                                       |
| White                 | `#fff`                                                                                       | hero h1/p, `.btn_1` bg (hero CTA, `#305534` text), card hover fill, slider dots, project caption text                                                   |
| Near-black plum       | `#301A22`                                                                                    | `.main-menu ul>li a` (nav links)                                                                                                                        |
| Eyebrow light blue    | `#7EA0FF`                                                                                    | `.section-tittle>span` (eyebrow label; not visibly used on this page — keep as optional token)                                                          |
| Form eyebrow coral    | `#FF6162`                                                                                    | `.form-tittle span` (small label above "Get Free Quote")                                                                                                |
| Link hover bright     | `#12C426`                                                                                    | `.section-tittle3 p a:hover`                                                                                                                            |
| Hero overlay          | `rgba(48,85,52,0.2)`                                                                         | `.hero-overly::before` over the hero photo (dark-green tint)                                                                                            |
| Project hover overlay | `rgba(48,85,52,0.7)`                                                                         | `.single-project::before` (revealed on hover over project photos)                                                                                       |
| Card shadow           | `0 20px 30px rgba(35,47,85,0.1)`                                                             | `.single-cat:hover`; services hover `0 15px 25px rgba(0,136,15,0.1)`                                                                                    |
| Body font             | `"Barlow", sans-serif`                                                                       | body, nav, buttons, headings (15 rules)                                                                                                                 |
| Hero h1               | 60px, weight 500, white, line-height 1.2                                                     | `.slider-area .hero-caption h1`                                                                                                                         |
| Hero sub              | 24px, white, weight 400, line-height 1.5                                                     | `.slider-area .hero-caption p`                                                                                                                          |
| Section h2            | 48px, weight 600, line-height 1.4                                                            | `.section-tittle h2`; dark-green variant `.section-tittle2 h2` white 48px/600 line-height 1.2                                                           |
| Testimonial h2        | 38px, weight 600, margin-bottom 36px                                                         | `.testimonial-area .testimonial-caption h2`                                                                                                             |
| Form h2               | 38px, weight 600, line-height 1.4                                                            | `.form-wrapper .form-tittle h2`                                                                                                                         |
| Footer h4             | 20px, weight 700, `#305534`                                                                  | `.footer-tittle h4`                                                                                                                                     |
| Category title        | 22px, weight 500, `#305534`                                                                  | `.cat-cap h5>a` (hover: `#00880F` + underline)                                                                                                          |
| Service title         | 24px, weight 600, `#305534`                                                                  | `.services-cap h5 a` (hover `#00880F`)                                                                                                                  |
| Service blurb         | 20px, `#66816A`                                                                              | `.services-cap p`                                                                                                                                       |
| Green pill button     | bg `#00880F`, white text, radius 35px, padding 22px 32px, font 18px/500                      | `.btn` (hero/CTA); `.btn_01` radius 30px padding 17px 35px; `.header-btn` radius 30px padding 10px 22px; `.view2` full-width radius 0 padding 16px 10px |
| White pill button     | bg `#fff`, text `#305534`, radius 30px, padding 14px 34px, font 18px/500                     | `.btn_1` (hero "View Our Services"; hover: transparent + white border)                                                                                  |
| Category card         | bg `rgba(255,255,255,0.5)`, radius 5px, padding 30px 20px 25px                               | `.single-cat`; hover → white fill + green underlined title + shadow                                                                                     |
| Form inputs           | height 55px, radius 25px, 1px solid `#66816A`, text `#66816A`, capitalize, padding 10px 25px | `.form-wrapper input`; textarea 131px tall, radius 25px, same border                                                                                    |
| Slider dots           | white 7px circles; active = 23px white ring                                                  | `.dot-style .slick-dots` (bottom center over hero)                                                                                                      |
| Header top bar        | white, 1px bottom border `#C9D6CB`, 16px/500 `#305534` text                                  | `.header-top .header-info-left ul li`; social icons `#C9D6CB` → green `#00880F` on hover (rotateY 180)                                                  |
| Nav link              | 18px/500 `#301A22`, hover `#00880F`, dropdown panel white shadow                             | `.main-header .main-menu ul>li a` + `ul.submenu`                                                                                                        |
| Nav search            | 50px circle, bg `rgba(0,136,15,0.1)`, icon `#00880F`                                         | `.nav-search`                                                                                                                                           |
| Visit band columns    | left photo 33.33% × 600px; mid mint `#EFF6F0` 33.33% × 600px; right white 33.33% × 600px     | `.visit-tailor-area` (flex, wrap on mobile)                                                                                                             |

### Section structure (from the live DOM, top to bottom)

1. `div.header-area` — header:
   - `div.header-top` (hidden below sm): left info row — `i` + "Call Us:
     +10 (87) 263 3567", `i` + "info@gardening.com", `i` + "Mon - Fri: 9:00
     - 19:00"; right social icon row.
   - `div.header-bottom.header-sticky`: logo image (→ text wordmark
     "Gardenly") + `ul.main-menu`: Home, Services, About, Projects, Blog
     (dropdown: Blog, Blog Details, Elements — collapse into a simple Blog
     dropdown or skip submenu per implementer judgment), Contact; `a.nav-search`
     circular green search icon (decorative/expandable); `a.header-btn`
     green pill "Get Free Quote".
   - Mobile: `div.mobile_menu` (slicknav) — hamburger → slide-down panel.
2. `div.slider-area` (bg `#EFF6F0`) — hero slider:
   - `div.slider-active.dot-style`: 3 × `div.single-slider.slider-height
(700px).hero-overly.slider-bg1` (bg photo `img/hero/h1_hero1.jpg` +
     `rgba(48,85,52,0.2)` overlay):
     - `div.hero-caption.text-center`: `h1` "We provide best gardening
       service" (60px/500 white), `p` "Trust The Grounds Guys professionals
       to take care of your commercial or residential grounds." (24px
       white), `a.btn_1.hero-btn` "View Our Services" (white pill,
       `#305534` text).
   - White dot controls bottom-center; active dot gets a 23px ring.
   - (All 3 slides share the same copy in the source — implement one slide
     or vary the background photo + keep copy; 1 slide is acceptable.)
3. `section.categories-area.section-bg` (mint `#EFF6F0`, padding 60px top)
   — 6 × `div.single-cat.text-center` (`col-xl-2` grid): `div.cat-icon`
   (line-icon SVG → lucide) + `div.cat-cap`: `h5` title + `p` blurb:
   - Landscaping / Planting / Watering / Fence / Removing / Lawn Moving
     (source spells it "Lawn Moving" — use "Lawn Mowing").
   - Card: `rgba(255,255,255,0.5)` bg, radius 5px; hover → white bg, green
     underlined title, shadow. Source repeats one lorem blurb on all 6 —
     paraphrase 6 distinct blurbs.
   - Below the grid: `div.section-tittle.section-tittle3.text-center.pt-35`:
     `p` "Check out our list of service for your garden and **get free
     quote**" (the link in green `#00880F`, anchored to the quote form).
4. `div.about-area.section-bg2` (forest green `#305534`) — about band,
   `row.align-items-end`:
   - Left `col` (`offset-xl-1 col-xl-6`): `div.about-cap-Left` — two garden
     photos (`img/gallery/about1.jpg`, `about2.jpg`, picsum seeds) +
     `div.section-tittle.section-tittle2`: `h2` "We have been designing
     gardens since 1990" (white 48px/600) + `p` (20px `#C9D6CB`).
   - Right `col-xl-4`: `div.right-caption` — 2 × `div.small-tittle.mb-50`:
     `h4` "Our Mission" (white 28px/600) + `p` paragraph. Source repeats
     the identical block twice — paraphrase 2 distinct mission entries.
5. `section.our-services2` (`container-fluid`) — 3 × `div.col-lg-4` >
   `div.single-services` (`p-0`, 1px `#C9D6CB` borders forming a grid;
   padding ~56px 32px): `div.services-ion` (green icon span) + `div.services-cap`:
   `h5` title (24px/600 `#305534`) + `p` blurb (20px `#66816A`). Source
   repeats "We prefer quality first" + lorem on all 3 — paraphrase 3
   distinct gardening services (e.g. "Landscape Design", "Garden
   Maintenance", "Irrigation Systems"). Hover: shadow
   `0 15px 25px rgba(0,136,15,0.1)`.
6. `div.location-house.fix` — Feature Projects:
   - `div.section-tittle.text-center.mb-60`: `h2` "Feature Projects".
   - `div.project-active.owl-carousel`: 4 × `div.single-project` (photo,
     ~550px tall) with `div.project-contents` (centered, hidden →
     revealed on hover): `h3` white 28px/600 title + "View" link. Dark-green
     `rgba(48,85,52,0.7)` overlay on hover. Source repeats "Lawn removing" +
     lorem on all 4 — paraphrase 4 distinct project names (e.g. "Terraced
     Garden", "Japanese Courtyard", "Rooftop Meadow", "Herb Spiral").
7. `div.visit-tailor-area.fix` — 3-column band (flex, wrap):
   - `div.left-colum` — full-bleed photo (`img/gallery/visit_bg.jpg`,
     33.33% × 600px).
   - `div.mid-colum` (mint `#EFF6F0`, 33.33% × 600px, flex-centered) —
     `section.testimonial-area` with `div.h1-testimonial-active` carousel:
     2 × `div.single-testimonial`: `div.testimonial-caption` — `h2` "Our
     Commitment" (38px/600) + quote `p` (20px `#66816A`) + `div.testimonial-founder`
     (avatar `img/testimonial.png` + `div.founder-text`: `span` "Reuben
     Sandwich" (20px/600 `#305534`) + `p` "CEO of Gardening" (14px
     `#66816A`)). Paraphrase quote; vary the second slide's author.
   - `div.right-colum` (white, 33.33% × 600px) — `div.form-wrapper`
     (padding 60px): `div.form-tittle.mb-30`: `span` (coral `#FF6162`
     label) + `h2` "Get Free Quote" (38px/600) + `p` intro. Form:
     `input[name=name]` "Your name", `input[name=email]` "Email",
     `select[name=select]` (service options: Landscaping / Landscaping 1 /
     2 / 3 → paraphrase into real service options), `textarea[name=message]`
     "Message", `button.view2` green full-width "Sent Request". Inputs:
     height 55px, radius 25px, 1px solid `#66816A`. (Client-side only —
     no backend; success state optional.)
   - `div.page-links` — carousel pagination controls.
8. `div.footer-wrappper.section-img-bg2` (bg photo `img/gallery/footer-bg.jpg`)
   — `div.footer-area.footer-padding`, `row.justify-content-between`:
   - `col-xl-3 col-lg-5`: brand col — `div.footer-logo` (wordmark
     "Gardenly"), `div.footer-tittle` `h4`, `div.footer-pera` `p`
     "Get the breathing space now, and we'll extend your term at the other
     end." (18px `#305534`), `div.footer-social` (40px circular green
     bordered icons; hover fill green + white icon).
   - `col` (`offset-xl-2 col-xl-2`): `h4` "Services" + links: Lawn
     removal, Landscaping, Planting, Watering (18px `#305534`, underline on
     hover).
   - `col-xl-2`: `h4` "Navigation" + links: Home, Services, About,
     Projects, Contact.
   - `col-xl-3`: `h4` "Contact us" + contact lines: email
     "consulto98@gmail.com", address "76/A, Green road, NYC", phone
     "(80) 783 367-3904" (paraphrase into a fake address/phone).
   - `div.footer-bottom-area` — `div.footer-border` + `div.footer-copy-right`:
     copyright line (16px `#305534`, green heart/link accents) — ColorLib
     credit → Component Dock per AGENTS.md
     (https://www.componentdock.com/).

## Requirements

### Requirement: Header top bar

The system SHALL render a thin white info bar above the main header with
contact details and social icons.

#### Scenario: Top bar content

- **GIVEN** the Gardenly app is rendered
- **WHEN** the page loads
- **THEN** a thin white bar SHALL render above the header with a bottom
  border in pale sage `#C9D6CB`
- **AND** the left side SHALL show contact info lines: a phone number, an
  email, and opening hours (16px/500 `#305534` text, icons included)
- **AND** the right side SHALL show a small social icon row
- **AND** the bar SHALL be hidden on small viewports (below sm)

### Requirement: Navbar

The system SHALL render a sticky white navbar with a brand wordmark, nav
links, a search icon, and a green "Get Free Quote" pill, plus an accessible
mobile menu.

#### Scenario: Desktop nav

- **GIVEN** the Gardenly app is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand wordmark "Gardenly"
- **AND** SHALL show links Home, Services, About, Projects, Blog, and
  Contact (18px/500, near-black plum `#301A22`, hover green `#00880F`)
- **AND** SHALL render a circular search icon (50px, bg
  `rgba(0,136,15,0.1)`, icon `#00880F`) on the right
- **AND** SHALL render a green pill "Get Free Quote" button (bg `#00880F`,
  radius 30px, white text) on the right

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger toggle is activated
- **THEN** a slide-down navigation panel SHALL open listing the same links
- **AND** the panel SHALL close via the toggle, Escape, or a link click

### Requirement: Hero slider

The system SHALL render a 700px full-width hero with a background photo, a
dark-green tint overlay, centered white headline, sub-line, and a white pill
CTA, with white dot controls.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL be 700px tall with a gardening photo background
  (picsum seed) and a `rgba(48,85,52,0.2)` overlay
- **AND** the headline SHALL read "We provide best gardening service"
  (white, 60px, weight 500)
- **AND** the sub-line SHALL read "Trust The Grounds Guys professionals to
  take care of your commercial or residential grounds." (white, 24px)
- **AND** a white pill button SHALL read "View Our Services" (bg white,
  text `#305534`, radius 30px)
- **AND** white dot indicators SHALL render bottom-center, with the active
  dot shown as a 23px white ring

#### Scenario: Slide rotation

- **GIVEN** the hero slider has multiple slides
- **WHEN** the dots or auto-advance are used
- **THEN** the visible slide SHALL change (a single slide with the same
  copy is an acceptable simplification since the source repeats it)

### Requirement: Categories strip

The system SHALL render six category cards with line icons, titles, and
blurbs on a mint background, plus a centered promo line with a green link.

#### Scenario: Category cards

- **GIVEN** the categories section is rendered
- **WHEN** the page loads
- **THEN** the section background SHALL be the mint tint `#EFF6F0`
- **AND** six cards SHALL render in a responsive grid (6-up on xl), each
  with a line icon (lucide), a title, and a blurb: Landscaping, Planting,
  Watering, Fence, Removing, Lawn Mowing
- **AND** each card SHALL use bg `rgba(255,255,255,0.5)` with radius 5px
- **AND** hovering a card SHALL fill it white, underline its title in green
  `#00880F`, and show the card shadow `0 20px 30px rgba(35,47,85,0.1)`
- **AND** each blurb SHALL be distinct (paraphrased from the source's
  repeated placeholder copy)

#### Scenario: Promo line

- **GIVEN** the categories section is rendered
- **WHEN** the page loads
- **THEN** a centered line SHALL read "Check out our list of service for
  your garden and get free quote"
- **AND** the phrase "get free quote" SHALL be a green `#00880F` underlined
  link (hover `#12C426`) that anchors to the quote form

### Requirement: About band

The system SHALL render a forest-green about section with garden photos, a
large white heading, and two mission blocks.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the section background SHALL be the forest green `#305534`
- **AND** the left column SHALL show two garden photos (picsum seeds) and
  the heading "We have been designing gardens since 1990" (white, 48px,
  weight 600) with a short paragraph (20px `#C9D6CB`)
- **AND** the right column SHALL show two "Our Mission" blocks, each with
  a white 28px heading and a distinct paragraph (paraphrased — the source
  repeats the same block twice)

### Requirement: Services grid

The system SHALL render a 3-column services grid with green icons, titles,
and blurbs, separated by pale-sage borders.

#### Scenario: Service cells

- **GIVEN** the services section is rendered
- **WHEN** the page loads
- **THEN** three cells SHALL render in a 3-column grid with 1px `#C9D6CB`
  borders between them
- **AND** each cell SHALL show a green icon (lucide), a 24px/600 `#305534`
  title, and a 20px `#66816A` blurb
- **AND** the titles SHALL be distinct paraphrased gardening services
  (e.g. "Landscape Design", "Garden Maintenance", "Irrigation Systems")
- **AND** hovering a cell SHALL show the shadow
  `0 15px 25px rgba(0,136,15,0.1)`

### Requirement: Feature Projects

The system SHALL render a "Feature Projects" carousel/grid of four project
cards with dark-green hover overlays, white captions, and View links.

#### Scenario: Project cards

- **GIVEN** the projects section is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Feature Projects"
- **AND** four project cards SHALL render, each with a project photo
  (picsum seed), a distinct white 28px/600 title (e.g. "Terraced Garden",
  "Japanese Courtyard", "Rooftop Meadow", "Herb Spiral"), and a "View" link
- **AND** hovering a card SHALL reveal the `rgba(48,85,52,0.7)` overlay
  with the caption and link (hidden by default)

### Requirement: Commitment testimonial

The system SHALL render a mint column with a "Our Commitment" testimonial
carousel showing a quote and a founder row.

#### Scenario: Commitment content

- **GIVEN** the commitment column is rendered
- **WHEN** the page loads
- **THEN** the column background SHALL be the mint tint `#EFF6F0`
- **AND** the heading SHALL read "Our Commitment" (38px, weight 600)
- **AND** a quote paragraph SHALL render (20px `#66816A`)
- **AND** a founder row SHALL render with an avatar, the name "Reuben
  Sandwich" (20px/600 `#305534`), and the role "CEO of Gardening"
- **AND** prev/next or dot controls SHALL navigate between at least two
  slides (second slide paraphrased)

### Requirement: Quote form

The system SHALL render a white column with a "Get Free Quote" heading and a
client-side form with pill inputs and a full-width green submit button.

#### Scenario: Form fields

- **GIVEN** the quote form is rendered
- **WHEN** the page loads
- **THEN** the heading SHALL read "Get Free Quote" (38px, weight 600) with
  a coral `#FF6162` label span above it
- **AND** the form SHALL contain a name input ("Your name"), an email
  input ("Email"), a service select (paraphrased service options), and a
  message textarea ("Message")
- **AND** inputs SHALL be 55px tall with radius 25px, a 1px `#66816A`
  border, and `#66816A` text
- **AND** a full-width green submit button SHALL read "Sent Request"
  (bg `#00880F`, white 18px/500 text)
- **AND** the form SHALL validate required fields client-side without a
  backend

### Requirement: Footer

The system SHALL render a photo-background footer with brand/social,
Services, Navigation, and Contact columns, plus a copyright bar crediting
Component Dock.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL sit over a background photo (picsum seed) with
  `#305534` text throughout
- **AND** the first column SHALL show the "Gardenly" wordmark, a tagline
  ("Get the breathing space now, and we'll extend your term at the other
  end."), and a row of 40px circular social icons (1px
  `rgba(0,136,15,0.2)` border, green icons; hover: green fill + white icon)
- **AND** the second column SHALL list "Services" links (Lawn removal,
  Landscaping, Planting, Watering) and the third "Navigation" links (Home,
  Services, About, Projects, Contact)
- **AND** the fourth column SHALL show "Contact us" with email, address,
  and phone lines (paraphrased)
- **AND** the bottom bar SHALL show a 16px `#305534` copyright line
  crediting Component Dock (https://www.componentdock.com/) instead of
  ColorLib

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper
landmarks and a document title.

#### Scenario: Full page render

- **GIVEN** the Gardenly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header top bar, navbar, hero slider,
  categories, about band, services grid, Feature Projects, commitment +
  quote band, and footer in order
- **AND** the document title SHALL be "Gardenly — Gardening Service
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/gardenly` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- gardenly` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#00880F, #305534, #66816A, #C9D6CB, #EFF6F0, #301A22, #e6115f, #12C426, #FF6162, #7EA0FF, #fff, rgba(48,85,52,0.2), rgba(48,85,52,0.7)) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `gardenly-<n>`, Google Fonts Barlow link, lucide icons only)
- [ ] Header: thin white top bar (phone/email/hours + social) + sticky navbar (wordmark, 6 links, circular search icon, green "Get Free Quote" pill) + mobile slide-down menu
- [ ] Hero: 700px, photo + rgba(48,85,52,0.2) overlay, white 60px headline, 24px sub-line, white pill "View Our Services" (radius 30px, `#305534` text), white dot controls with 23px active ring
- [ ] Categories: mint `#EFF6F0` bg, 6 cards (rgba(255,255,255,0.5), radius 5px) with lucide icons + distinct blurbs; hover white fill + green underline + shadow; promo line with green "get free quote" anchor link
- [ ] About: forest green `#305534` band, 2 garden photos, white 48px heading, 2 distinct "Our Mission" blocks
- [ ] Services: 3 cells, `#C9D6CB` grid borders, green icons, 24px/600 titles, 20px sage blurbs; hover green-tinted shadow
- [ ] Projects: 4 cards, hidden caption → rgba(48,85,52,0.7) overlay + white 28px title + "View" on hover
- [ ] Commitment: mint `#EFF6F0` column, "Our Commitment" 38px heading, quote + founder row (avatar, name, role), carousel controls
- [ ] Quote form: coral label, 38px heading, 4 fields (55px pill inputs radius 25px, `#66816A` border), full-width green "Sent Request" submit, client-side validation
- [ ] Footer: photo bg, wordmark + tagline + circular social icons, Services/Navigation/Contact columns, `#305534` text, copyright bar crediting Component Dock; no ColorLib references in app code
