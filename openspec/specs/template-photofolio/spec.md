# Template: Photofolio (Bootstrap — Photography Portfolio)

## Purpose

Photofolio is a single-page photographer-portfolio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Photographer" design (see TEMPLATES.md, Bootstrap section),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimalist, monochrome photography portfolio: a dense
masonry-style wall of 21 photos as the hero (an auto-playing carousel that
shows 1–7 tiles depending on breakpoint, each tile a full-bleed photo with a
near-black hover overlay and the white line "Take a look at my Portfolio"), a
white header with a text logo, a hamburger + search icon (slide-down nav:
Home, About the Artist, Portfolio dropdown, Blog, Elements, Contact), a white
vertical social sidebar pinned to the hero's right edge, a split intro section
("My name is Sam. I'm a photographer" + a paragraph + an underlined text CTA
"Take a look @my portfolio" on the left; three black progress bars — Nature
75%, Passion 100%, Portraits 90% — on the right), a full-screen black search
overlay, and a dark #212121 footer with the copyright line and social icons.
Photofolio recreates that structure section-for-section with matching layout,
colors, typography, and content types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Photographer" — photography portfolio website
  template (source: https://colorlib.com/wp/template/photographer/; listed in
  TEMPLATES.md under Bootstrap).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/photographer/
  (HTTP 200, full rendered DOM, 20KB + `css/style.css` (18.6KB) + Bootstrap 4
  - font-awesome + owl.carousel + slicknav + magnific-popup + masonry +
    mixitup + instafeed + circle-progress, extracted 2026-08-12 during prep;
    page title "Photographer | HTML Template"). Live preview also viewed in the
    browser to confirm the rendered design. The TEMPLATES.md screenshot
    (`photographer-free-template.jpg`, AVIF) was downloaded and matches the live
    render.
- **Section order (1:1):**
  1. Header (`.header-section`, padding-top 15px, transparent over the white
     page): `.site-logo` left (`img/logo.png` — dark text wordmark), `.header-controls`
     right — `.nav-switch-btn` (hamburger, 21px) + `.search-btn` (19px),
     transparent buttons with dark glyphs; hidden desktop `.main-menu`
     (`display:none`, float right) with links Home / About the Artist /
     Portfolio (dropdown: Portfolio 1 / Portfolio 2 / Portfolio 3) / Blog /
     Elements / Contact + a mobile search item. The nav opens as a slide-down
     menu (slicknav) with a "MENU" bar; `header-section.hs-bd` variant gets a
     1px #e8e8e8 bottom border when scrolled.
  2. Hero (`.hero-section`): `.hero-slider.owl-carousel` of **21**
     `.hero-item.portfolio-item.set-bg` photo tiles (bg images
     `img/portfolio/1.jpg … 21.jpg`, `background-size: cover; background-position:
top center`; each tile ~278px tall, sized per breakpoint by JS). Carousel:
     loop + autoplay, no nav/dots, `smartSpeed 1000`, responsive items
     1 (≤479) / 2 (480) / 3 (768) / 4 (991) / 5 (1200) / 7 (1400). Hover →
     `.hero-link` overlay (absolute, bg `#060606`, opacity 0→1, 0.3s) with h2
     "Take a look at my Portfolio" (white, line-height 1.5, slides up from
     `top: 50px` → 0, 0.5s). `.hero-social-links` pinned bottom-right (width
     110px, bg #fff, padding 40px 0, z-index 9): 5 vertical social icons
     (Pinterest, Facebook, Twitter, Dribbble, Behance — font-awesome glyphs,
     16px, color #121212, padding 16px 0); mobile: full-width bar, padding
     30px 0, 1px #e8e8e8 bottom border, inline icons.
  3. Intro (`.intro-section`, padding 120px 15px 90px): `.intro-warp`
     (max-width 1780px, centered) split row — left `.intro-text` (col ~6/7):
     h2 "My name is Sam. I'm a photographer" (48px, margin-bottom 25px),
     paragraph (16px, #7d7d7d, line-height 1.8, margin-bottom 45px), `.sp-link`
     "Take a look @my portfolio" (inline-block, 16px, weight 500, color
     #212121, border-bottom 3px solid #212121, padding-right 15px). Right
     `.skill-warp` (padding-left 83px, padding-top 80px): 3
     `.single-progress-item` (margin-bottom 30px, last 0): `.progress-bar-style`
     (block, height 6px, width 100%; `.bar-inner` absolute fill bg #212121,
     width from `data-progress` — 75% / 100% / 90%; `.bar-inner span` = white
     % tag, width 54px, height 40px, positioned right:0 top:22px, bg #212121)
     - label `p` ("Nature" / "Passion" / "Portraits", padding-top 28px).
  4. Footer (`.footer-section`, bg #212121, padding 19px 40px): left
     `.copyright` (11px, weight 500, #fff): "Copyright © All rights reserved |
     This template is made with by Colorlib" (Colorlib credited as a link);
     right `.footer-social-links` (text-align right): 5 social icons (17px,
     #fff, margin-left 40px; first-child 0).
  5. Search overlay (`.search-model`, `display:none`, fixed, full-screen, bg
     #000, z-index 99999): `.search-model-form` input (40px font, border none,
     border-bottom 2px solid #333, background none, color #999) + close glyph
     "+" (`.search-close-switch`), opened by the header `.search-btn`.
- **Design tokens extracted from `css/style.css` + computed styles:**
  - Primary ink **#212121** — headings (h1–h6, weight 500), progress-bar fill
    - % tag bg, `.sp-link` underline, footer bg, `.bar-inner` color.
  - White **#fff** — page bg, hero hover h2, footer text/icons, hero-social
    sidebar bg, % tag text.
  - Hover overlay **#060606** (`.hero-link`), social icon **#121212**
    (`.hero-social-links a`).
  - Body text **#7d7d7d** (p, line-height 1.8); search input text **#999**,
    border **#333**; hairline **#e8e8e8** (scrolled header border, mobile
    social bar border); search overlay bg **#000**; **#323232** (secondary
    dark, minor).
  - Preloader spinner uses #f44336/#673ab7 (loader keyframes only) — NOT part
    of the design palette; skip it.
  - Font: **"Poppins", sans-serif** everywhere (headings weight 500; body
    regular). Type scale: h1 70px, h2 36px (intro h2 overridden to 48px,
    margin-bottom 25px), h3 30px, h4 24px, h5 18px, h6 16px, p 16px/1.8.
    (Preview head has no Google Fonts link — the template relies on Poppins
    being available; the recreation should load Poppins via `<link>` in
    `index.html`.)
  - Links/buttons: no pill/box buttons — transparent icon buttons (hamburger
    `nav-switch-btn` 21px, search 19px) and text CTAs with a **3px solid
    #212121 bottom border** (`.sp-link`, 16px/500, padding-right 15px).
  - Rhythm: intro-section padding 120px 15px 90px; hero-item height ~278px
    (breakpoint-scaled); header padding-top 15px; skill-warp padding-left
    83px / padding-top 80px; progress bar height 6px, % tag 54×40 at
    right:0/top:22px, item margin-bottom 30px; footer padding 19px 40px,
    copyright 11px/500; hero-social sidebar 110px wide, padding 40px 0, icon
    padding 16px 0.
- **Visual design (live preview + screenshot `photographer-free-template.jpg`):**
  minimalist, modern, monochrome, content-focused aesthetic — dense masonry
  wall of ~15–21 photographs (landscapes, macro, B&W portraits, street,
  animals) with no gutters auto-playing at the top; a white page; dark text
  logo top-left with hamburger + search top-right; a big black 48px headline
  ("My name is Sam. I'm a photographer") with grey body copy and an underlined
  CTA; black 6px progress bars with white % tags; a white vertical social
  sidebar on the hero's right edge; a dark charcoal footer with tiny copyright
  text and white social icons. No accent color — the photography supplies all
  the color.
- **Recreation decisions:** all 21 photos → seeded picsum placeholders
  (`picsum.photos/seed/photofolio-<n>/<w>/<h>` — prefer photography-like
  subjects: landscape/macro/portrait; verify seeds render decent photos);
  font-awesome social glyphs → lucide-react (Facebook, Twitter, Instagram? —
  source has Pinterest/Facebook/Twitter/Dribbble/Behance; use closest lucide
  icons with aria-labels); owl.carousel photo wall → CSS grid of tiles with an
  auto-advancing active-window (or a simple grid + hover overlay), no carousel
  dependency needed; slicknav slide-down → a state-toggled dropdown nav; the
  hero hover overlay (bg #060606, white h2 slide-up) → Tailwind group-hover;
  progress bars → divs with width % + the white % tag; search overlay →
  state-toggled fixed full-screen input; original copy paraphrased keeping the
  same content kinds; no assets copied.

Photofolio lives in `apps/photofolio` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Header with logo, controls, and slide-down navigation

The system SHALL render a white/transparent header with a text logo, a
hamburger button and a search button on the right, and a slide-down navigation
menu listing the template's pages.

#### Scenario: Header content

- **GIVEN** the Photofolio page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Photofolio" as a logo on the left
- **AND** it SHALL show a hamburger button and a search button on the right
- **AND** the navigation SHALL list the links Home, About the Artist,
  Portfolio (with sub-links Portfolio 1, Portfolio 2, Portfolio 3), Blog,
  Elements, and Contact

#### Scenario: Slide-down menu

- **GIVEN** the page is rendered
- **WHEN** the user clicks the hamburger button
- **THEN** a slide-down menu SHALL open showing the same nav links
- **AND** clicking the hamburger again SHALL close it

#### Scenario: Search overlay

- **GIVEN** the page is rendered
- **WHEN** the user clicks the search button
- **THEN** a full-screen black search overlay SHALL open with a large text
  input and a close control
- **AND** clicking the close control SHALL hide it

### Requirement: Hero photo wall

The system SHALL render a hero made of 21 full-bleed photo tiles arranged in a
masonry-style wall that auto-advances, each tile revealing a dark overlay with
a white caption on hover.

#### Scenario: Hero wall content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show 21 photo tiles (seeded placeholder photos)
- **AND** the wall SHALL auto-advance (active window of 1–7 tiles depending on
  viewport: 1 ≤480, 2 ≤768, 3 ≤991, 4 ≤1200, 5 ≤1400, 7 >1400)
- **AND** hovering a tile SHALL reveal a near-black (#060606) overlay with the
  white caption "Take a look at my Portfolio" sliding up into view

#### Scenario: Social sidebar

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** a white vertical social sidebar SHALL be pinned to the hero's right
  edge listing five social links (Pinterest, Facebook, Twitter, Dribbble,
  Behance)
- **AND** on narrow viewports the sidebar SHALL become a full-width horizontal
  bar under the hero with a 1px #e8e8e8 top border

### Requirement: Intro section

The system SHALL render a split intro section with the photographer's
headline, a paragraph, an underlined text CTA, and three skill progress bars.

#### Scenario: Intro content

- **GIVEN** the page is rendered
- **WHEN** the intro section is displayed
- **THEN** the left column SHALL show the heading "My name is Sam. I'm a
  photographer" (48px)
- **AND** it SHALL show a body paragraph (grey #7d7d7d)
- **AND** it SHALL show the text CTA "Take a look @my portfolio" with a 3px
  solid #212121 bottom border

#### Scenario: Skill progress bars

- **GIVEN** the intro section is displayed
- **WHEN** the right column renders
- **THEN** it SHALL show three 6px progress bars labelled "Nature" (75%),
  "Passion" (100%), and "Portraits" (90%)
- **AND** each bar SHALL have a #212121 fill and a white percentage tag
  (54×40px, #212121 background) at the right end of the fill

### Requirement: Footer

The system SHALL render a dark footer with the copyright line (linking the
branded Component Dock site) and five social icons.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the copyright text "© 2026 Photofolio. All rights
  reserved." on a #212121 background
- **AND** it SHALL link "Component Dock" to https://www.componentdock.com/
  (branded attribution line replacing external links, per repo convention)
- **AND** it SHALL show five social icons (Pinterest, Facebook, Twitter,
  Dribbble, Behance) on the right (centered on narrow viewports)

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Photofolio app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header, hero photo wall, intro section,
  and footer in order
- **AND** the document title SHALL be "Photofolio — Photography Portfolio
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/photofolio`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/photofolio`)
- [ ] Section order matches the reference 1:1 (header → hero photo wall → intro → footer)
- [ ] Design tokens from the reference used in `@theme` (ink #212121, white #fff, overlay #060606, social icon #121212, body #7d7d7d, hairline #e8e8e8, search #000/#333/#999; Poppins Google Font)
- [ ] Header: text logo left, hamburger + search right, slide-down nav (Home / About the Artist / Portfolio dropdown 1–3 / Blog / Elements / Contact), full-screen black search overlay with large input + close
- [ ] Hero: 21 photo tiles (seeded picsum), masonry wall, auto-advance (1–7 tiles per breakpoint), hover overlay #060606 with white "Take a look at my Portfolio" slide-up caption
- [ ] Social sidebar: white vertical bar (5 icons: Pinterest/Facebook/Twitter/Dribbble/Behance) pinned right edge; full-width horizontal on mobile
- [ ] Intro: "My name is Sam. I'm a photographer" (48px), grey paragraph, underlined CTA "Take a look @my portfolio" (3px #212121 bottom border)
- [ ] Progress bars: 6px track, #212121 fill at 75/100/90% for Nature/Passion/Portraits, white % tag (54×40 #212121) at fill end
- [ ] Footer: #212121 bg, copyright "© 2026 Photofolio. All rights reserved." + Component Dock link (11px, white), 5 social icons right
- [ ] No ColorLib assets copied; photos are seeded placeholders; icons from lucide-react
