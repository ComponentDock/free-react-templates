# Template: Finder (Photography Portfolio)

> **SUPERSEDED** — ColorLib "Nissa" shipped as **Lensa** (PR #409,
> https://lensa.free.componentdock.com). Do not implement this spec; it is a
> duplicate prep of the same source slug (prepped while the Lensa claim was in
> flight). Delete on next cleanup.

## Purpose

Finder is a single-page photography-portfolio website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Nissa" design (see TEMPLATES.md — listed THREE times, all
three rows are the same source slug: line 465 in the Bootstrap section,
line 1110 in the Business section, and line 2458 in the Photography
section; implement ONE app and mark ALL THREE rows `[x]` at bookkeeping),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a minimal, editorial, monochrome photography portfolio:
a fixed white left sidebar (~614px) holding a huge uppercase wordmark
"NISSA" (100px, letter-spacing 18px) with a "PHOTOGRAPHY STUDIO" tagline,
an intro headline "My name is Michael Smith." in Playfair Display, a
contact block (address / phone / email with small icons), and an outlined
"SEE MY PORTFOLIO" button; the right side is a full-height photo carousel
(750px slides of nature/cityscape photography) where each slide carries a
small white info card (title + category) at its bottom-left; a white top
bar has a hamburger that slides in a dark off-canvas menu (Home / About Me
/ Blog / Portfolio / Contact / Elements + social icons); a fixed white
copyright bar sits at the bottom-left. Finder recreates that structure
section-for-section with matching layout, colors, typography, and content
types (no ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Nissa" — free Bootstrap photography portfolio
  website template (source: https://colorlib.com/wp/template/nissa/;
  listed THREE times in TEMPLATES.md — line 465 [Bootstrap], line 1110
  [Business], line 2458 [Photography], all `- [ ]`, same slug → one app,
  mark all three rows `[x]`).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/nissa/ (HTTP
  200, full rendered DOM, 45.1KB HTML + `css/style.css` (19.3KB custom) +
  bootstrap.min.css + font-awesome 4.7 + magnific-popup.css +
  owl.carousel.min.css, extracted 2026-08-14 during prep). The TEMPLATES.md
  screenshot (`nissa-free-template.jpg`, AVIF — served as
  `https://colorlib.com/wp/wp-content/uploads/sites/2/nissa-free-template.jpg`,
  converted and viewed in the browser) confirms the design: split editorial
  layout with a white left column (NISSA wordmark, "PHOTOGRAPHY STUDIO"
  tagline, "My name is Michael Smith." serif headline, contact list with
  icons, thin-black-bordered "SEE MY PORTFOLIO" button, copyright line at
  the bottom) and a right column with two photo slides side by side ("Ice
  Cold Love — Nature Photography", "Bold Architecture — Cityscape
  Photography"), social icons top-right, and carousel arrows below.
- **Section order (1:1, LIVE DOM — comments stripped):**
  1. Preloader (`div.loader`) — full-page white preloader shown while the
     page loads.
  2. Off-canvas menu (`div.site-menu-warp`, dark — bg #242424, slides from
     the left): `div.close-menu` ("x" button), `ul.site-menu` with 6 links
     — Home (`a.active`), About Me, Blog, Portfolio, Contact, Elements
     (uppercase, large, white); below, `div.menu-social` with 5 social
     icons (Pinterest, Facebook, Twitter, Dribbble, Behance — white, 18px,
     margin-right 30px; container padding-left 185px, padding-top 50px).
  3. Top header bar (`header.header-section` — absolute top, white bg,
     padding 27px 45px, z-index 999, translateX transition 0.4s):
     `div.nav-switch` (hamburger — `fa fa-bars`, font-size 28px, color
     #4e4e4e, cursor pointer) on the left; `div.header-social` (same 5
     social icons) on the right (hidden ≤575px).
  4. Fixed left sidebar (`div.main-sidebar` — absolute, white, width
     614px, full height, z-index 99): `div.mb-warp` (padding 151px 95px
     100px 145px):
     - `a.site-logo` (margin-bottom 80px): h2 **"Nissa"** (100px,
       line-height 100px, uppercase, weight 400, letter-spacing 18px) + p
       **"Photography Studio"** (12px, uppercase, color #aaaaaa,
       letter-spacing 12px, padding-left 10px).
     - `div.about-info` (margin-bottom 80px): h2 **"My name is Michael
       Smith."** (Playfair Display, weight 900, 48px, line-height 1.1,
       margin-bottom 40px) + p (lorem-ipsum intro paragraph, serif body).
     - `ul.contact-info` (margin-bottom 65px, position relative; a map-pin
       icon via `:after` background-image): li **"1525 Boring Lane, Los
       Angeles, CA"**, li **"+34 56672 9984 22"**, li **a
       "contactme@myemail.com"** (mailto:) — 14px, color #aaaaaa,
       margin-bottom 5px; links #242424.
     - CTA `a.site-btn` **"see my portfolio"** + arrow-right image
       (inline-block, 14px/700 uppercase, min-width 167px, padding
       19px 35px, line-height 1, color #242424, border 2px solid #e1e1e1,
       transparent bg; arrow img margin-left 15px; hover keeps #242424
       color; `.sb-solid` variant = bg #242424 white text; `.sb-dark`
       variant = border-color #242424).
  5. Hero photo carousel (`div.page-section` → `section.hero-section`):
     `div.hero-track` (overflow hidden; Owl Carousel horizontal track,
     padding-bottom 50px) with 3 `div.hs-item.set-bg` slides (height
     750px, float left, margin-right 50px; background images
     `img/hero/1.jpg`, `img/hero/2.jpg`, `img/hero/1.jpg` via
     `data-setbg`):
     - Slide 1: `div.hs-info` (absolute, left/bottom 0, width 221px,
       padding 44px 0 10px 0, white bg, z-index 1): h5 **"Ice Cold
       Love"** + p **"Nature Photography"** (source DOM has the typo
       "Photoagraphy" — use the correct spelling).
     - Slide 2: h5 **"Bold Architecture"** + p **"Cityscape
       Photography"**.
     - Slide 3: h5 **"Ice Cold Love"** + p **"Nature Photography"**
       (repeats slide 1).
     - Below the track, `.hero-track .owl-nav` (padding-top 30px,
       centered): prev/next round buttons — 30px circles, radius 50%, bg
       #242424, white chevron icons, margin 0 5px.
     - `div.hero-scroll` — small scroll indicator below the hero.
  6. Copyright bar (`div.copyright` — position fixed, left/bottom 0, white
     bg, height 80px, width 614px (aligned with sidebar), padding-left
     145px, padding-top 20px, 13px, color rgba(130,130,130,0.29)): text
     "Copyright © <current year> All rights reserved | This template is
     made with ♥ by Colorlib" (Colorlib credited in the reference; keep
     the attribution-line style — see conventions for the Component Dock
     footer link requirement).
- **Design tokens extracted from `css/style.css` (+ Bootstrap defaults):**
  - Fonts: **Playfair Display, serif** (about-info h2 — weight 900; also
    used for headings) + **Open Sans, sans-serif** (body). Load both via
    Google Fonts `<link>` in index.html. Logo is the serif-family h2 at
    100px uppercase letter-spacing 18px (weight 400 — Playfair Display at
    400 reads as the elegant high-contrast serif).
  - Ink **#242424** (near-black) — `.site-btn` text, `.sb-solid` bg,
    hero arrow buttons bg, off-canvas menu bg, contact link color.
  - White **#fff** — sidebar bg, header bar bg, hero info-card bg,
    copyright bar bg, off-canvas menu text.
  - Border **#e1e1e1** (light gray) — `.site-btn` 2px outline border.
  - Muted **#aaaaaa** — logo tagline, contact-info text (14px).
  - Secondary text **#828282** and **rgba(130,130,130,0.29)** (copyright
    line); **#4e4e4e** (nav-switch hamburger color); darker grays
    **#323232**, **#212121**, **#000** appear on sub-pages/body rules.
  - Accents **#f44336** (red) and **#673ab7** (purple) — only on
    sub-page video-section play buttons (4px colored borders); not on the
    homepage — safe to omit or keep as optional secondary accents.
  - Buttons: `.site-btn` — uppercase, 14px, weight 700, min-width 167px,
    padding 19px 35px, line-height 1, transparent bg, 2px solid #e1e1e1
    border, #242424 text, arrow icon after label (margin-left 15px);
    `.sb-solid` = solid #242424 bg + white text; `.sb-dark` = border
    #242424.
  - Sidebar: fixed white 614px column; mb-warp padding 151px 95px 100px
    145px; logo margin-bottom 80px; about-info margin-bottom 80px; h2
    48px/900 Playfair line-height 1.1 margin-bottom 40px; contact-info
    margin-bottom 65px; list items 14px #aaaaaa.
  - Hero: slides 750px tall; info card 221px wide, absolute bottom-left,
    padding 44px 0 10px 0, white; h5 title + p category (margin-bottom
    5px); carousel arrows 30px circles (#242424 bg, white), padding-top
    30px centered below.
  - Header bar: white, absolute top, padding 27px 45px; hamburger 28px
    #4e4e4e; social icons right; menu slide transition 0.4s.
  - Copyright bar: fixed bottom-left, 80px high, 614px wide (aligns with
    sidebar), padding-left 145px, 13px, rgba(130,130,130,0.29).
  - Responsive: ≤575px — header-social hidden, site-menu-warp full-screen
    (left -100% → 0), menu links 18-25px, sidebar becomes relative
    full-width (mb-warp padding 100px 15px, max-width 420px centered),
    hero slides 600px tall full-width, copyright bar static centered
    (padding 60px 15px 50px); tablet (~768px) — site-content-warp
    padding-left 350px, mb-warp padding 110px 30px 91px 50px, logo 70px,
    about h2 36px, hero track shows slides with 15px info-card padding.
- **Visual design (screenshot `nissa-free-template.jpg` + live render):**
  minimal, editorial, monochrome photography portfolio — split-screen
  (white left column ≈40% / photo right column ≈60%); strictly
  black-on-white UI (the only color comes from the photography: snowy
  mountain/blue water, white modern architecture against blue sky); big
  spaced uppercase serif wordmark + spaced-caps tagline; elegant serif
  intro headline; thin-outlined uppercase CTA with arrow; small icon rows
  for contact and socials; generous whitespace throughout.
- **Recreation decisions:** all hero photos → seeded picsum placeholders
  (`picsum.photos/seed/finder-<n>/<w>/<h>` — pick nature and cityscape
  seeds to mirror "Ice Cold Love" / "Bold Architecture"); the map-pin
  `:after` icon and arrow-right image → lucide-react equivalents
  (MapPin, Phone, Mail, ArrowRight, Menu, X, ChevronLeft, ChevronRight,
  Pinterest, Facebook, Twitter, Dribbble, Behance — all available in
  lucide-react); Owl Carousel → a lightweight custom carousel hook
  (auto-advance + prev/next round #242424 buttons, cleanup on unmount);
  the preloader div → optional (can be a brief fade-in or omitted — it
  adds no content); original copy paraphrased keeping the same content
  kinds (wordmark + tagline, intro headline "My name is …." + intro
  paragraph, contact list, CTA "see my portfolio", slide title + category,
  nav links, copyright line adapted to Component Dock); no assets copied.
- **Skipped/reference notes:** the source DOM renders "Photography
  Studio" as the logo tagline and the hero slide category "Nature
  Photoagraphy" (typo in source — use the correct spelling); the homepage
  is a one-pager — nav sub-pages (About Me / Blog / Portfolio / Contact /
  Elements) exist in the reference but are not part of this single-page
  recreation (nav links can be anchors/placeholders); the copyright bar
  credits Colorlib in the reference — per monorepo conventions the app's
  footer must ALSO link Component Dock
  (https://www.componentdock.com/); keep the reference's "made with ♥"
  line adapted to Component Dock branding.

Finder lives in `apps/finder` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Off-canvas navigation menu

The system SHALL render a dark off-canvas menu that slides in from the
left with nav links, a close button, and social icons.

#### Scenario: Menu content

- **GIVEN** the Finder page is rendered
- **WHEN** the off-canvas menu is opened
- **THEN** the menu SHALL show on a dark #242424 panel with a close "x"
  button
- **AND** it SHALL list the nav links: Home (active), About Me, Blog,
  Portfolio, Contact, Elements
- **AND** it SHALL show five social icons (Pinterest, Facebook, Twitter,
  Dribbble, Behance) in white

#### Scenario: Menu open/close

- **GIVEN** the user clicks the hamburger in the header bar
- **WHEN** the menu slides in
- **THEN** the same nav links and social icons SHALL be visible
- **AND** clicking the close "x" SHALL slide the menu back out (hamburger
  visible again)

### Requirement: Top header bar

The system SHALL render a white top bar with a hamburger toggle on the
left and social icons on the right.

#### Scenario: Header content

- **GIVEN** the Finder page is rendered
- **WHEN** the header bar is displayed
- **THEN** it SHALL show a hamburger button (aria-label "Open menu") on
  the left with a 28px #4e4e4e icon
- **AND** it SHALL show the five social icons on the right
- **AND** on narrow (mobile) viewports the social icons SHALL be hidden
  while the hamburger stays visible

### Requirement: Fixed left sidebar

The system SHALL render a fixed white left sidebar with the brand, an
intro block, a contact list, and a CTA button.

#### Scenario: Sidebar content

- **GIVEN** the Finder page is rendered
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the wordmark "Finder" (large uppercase serif,
  ~100px, letter-spacing ~18px) with the tagline "Photography Studio"
  (12px uppercase, letter-spacing ~12px, #aaaaaa)
- **AND** it SHALL show the intro headline "My name is Michael Smith."
  (Playfair Display, 48px, weight 900) with a short intro paragraph
- **AND** it SHALL show the contact list with icons: "1525 Boring Lane,
  Los Angeles, CA", "+34 56672 9984 22", and the email link
  "contactme@myemail.com" (mailto:)
- **AND** it SHALL show the outlined CTA button "See my portfolio"
  (uppercase, 2px #e1e1e1 border, #242424 text) with an arrow icon

### Requirement: Hero photo carousel

The system SHALL render a full-height photo carousel where each slide
shows a photo with a small white info card (title + category) at the
bottom-left and round prev/next controls below.

#### Scenario: Carousel content

- **GIVEN** the Finder page is rendered
- **WHEN** the hero carousel is displayed
- **THEN** it SHALL show photo slides (750px tall) — the first slide
  titled "Ice Cold Love" (category "Nature Photography"), the second
  "Bold Architecture" (category "Cityscape Photography"), and a third
  slide repeating "Ice Cold Love" / "Nature Photography"
- **AND** each slide SHALL carry a white info card (≈221px wide, at the
  bottom-left) with the h5 title and the category
- **AND** round prev/next buttons (30px, #242424 bg, white chevrons) SHALL
  sit below the track

#### Scenario: Carousel navigation

- **GIVEN** the carousel is displayed
- **WHEN** the user clicks the next arrow
- **THEN** the carousel SHALL advance to the next slide (and wrap around)
- **AND** clicking the prev arrow SHALL move back one slide
- **AND** the carousel SHALL auto-advance while idle with timers cleaned
  up on unmount

### Requirement: Copyright bar

The system SHALL render a fixed white copyright bar at the bottom-left
aligned with the sidebar.

#### Scenario: Copyright content

- **GIVEN** the Finder page is rendered
- **WHEN** the copyright bar is displayed
- **THEN** it SHALL show the line "Copyright © <current year> All rights
  reserved" in 13px rgba(130,130,130,0.29)
- **AND** it SHALL include a Component Dock attribution link
  (https://www.componentdock.com/) in place of the reference's Colorlib
  credit
- **AND** on mobile the bar SHALL become a static centered line at the
  bottom of the page

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main
landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Finder app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header bar, off-canvas menu, fixed
  sidebar, hero carousel, and copyright bar in the reference layout
  (sidebar left, photo carousel right)
- **AND** the document title SHALL be "Finder — Photography Portfolio"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] App typechecks (`npm run typecheck -w @free-react-templates/finder`)
- [ ] Tests at 100% coverage (lines/functions/branches/statements) for the app
- [ ] Build succeeds (`npm run build -w @free-react-templates/finder`)
- [ ] Section order matches the reference 1:1 (header bar → off-canvas menu → fixed sidebar → hero carousel → copyright bar)
- [ ] Design tokens from the reference used in `@theme` (ink #242424, white #fff, border #e1e1e1, muted #aaaaaa, secondary #828282, hamburger #4e4e4e; Playfair Display + Open Sans fonts)
- [ ] Sidebar: white fixed column (≈614px), wordmark "Finder" 100px uppercase letter-spacing 18px + "Photography Studio" tagline, "My name is Michael Smith." Playfair 900 48px intro + paragraph, contact list with MapPin/Phone/Mail icons, outlined "See my portfolio" CTA with arrow
- [ ] Header bar: white, hamburger left (aria-label, 28px #4e4e4e), 5 social icons right (hidden on mobile)
- [ ] Off-canvas menu: #242424 panel, close "x", links Home (active)/About Me/Blog/Portfolio/Contact/Elements, 5 white social icons; opens via hamburger, closes via "x"
- [ ] Hero carousel: 750px slides ("Ice Cold Love"/"Nature Photography", "Bold Architecture"/"Cityscape Photography", repeat), white 221px info cards bottom-left, round #242424 prev/next buttons, auto-advance + wrap
- [ ] Copyright bar: fixed bottom-left white (80px, aligned with sidebar), "Copyright © <year> All rights reserved" in 13px rgba(130,130,130,0.29) + Component Dock link (https://www.componentdock.com/); static centered on mobile
- [ ] Responsive: ≤575px sidebar becomes full-width relative block, menu full-screen, hero slides full-width 600px, copyright static; ~768px content padding-left 350px
- [ ] No copied ColorLib assets; hero photos via picsum seeded `finder-<n>`; icons via lucide-react; no colorlib.com strings in apps/finder
- [ ] Bookkeeping: mark ALL THREE Nissa rows (lines 465, 1110, 2458) `[x]` with the finder surge URL; `npm run readme:status`
