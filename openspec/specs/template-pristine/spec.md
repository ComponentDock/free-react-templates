# Template: Pristine (Cleaning Services)

## Purpose

Pristine is a single-page cleaning-services company website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Cleaningservice" design (see TEMPLATES.md, lines 563 and 939 —
mark both `[x]` when done), built under a different name with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript. "Pristine" is a NEW
original name — the ColorLib source name is never reused in app code.

The original is a cleaning-company landing page: a navy top bar (call-for-free
estimate + opening hours + social icons) over a white navbar with a logo, nav
(Home / Services / Project / About / Blog dropdown / Contact) and a blue pill
"Request Free Quote" button; a split hero on a bright-yellow background — photo
left, centered navy headline + subtext + navy pill "Our Services" button
right; a white services section ("Our Services" kicker + "Take a look at the
variety of services we offer" heading) with 3 photo cards (title + blurb +
circle arrow button); a trust band with a photo block (yellow "25 Years of
Experience" box pinned bottom-right) beside a heading "We know how to build
trust & offer the highest quality" with a blue "Learn More" pill; an about
strip on a cream background ("Satisfaction Guarantee" + photo); a centered
testimonial slider ("What Our Client Sayes") with quote, star rating and
author; a 2-tile gallery with hover captions; an "Expert Team Members"
carousel (photo, hover social icons, name + role); a yellow CTA band ("Get
Free Phone Call" + phone input + services select + "Send Request" outline
pill); and a dark-navy footer (logo + blurb, Navigation / Services / Contact
Us columns, copyright bar). Pristine recreates that structure section-for-
section with matching layout, colors, typography, and content types (no
ColorLib assets copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cleaningservice" — free cleaning company website
  template (source: https://colorlib.com/wp/template/cleaningservice/; two
  `- [ ]` entries in TEMPLATES.md — lines 563 and 939).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cleaningservice/`
  (HTTP 200, ~36.2KB; `<title>` "Cleaning Service") + stylesheet
  `assets/css/style.css` (~78.2KB, SCSS-compiled) plus bootstrap / owl /
  slicknav / fontawesome / themify / nice-select. The page was also rendered
  in a browser and inspected visually via screenshots (computed styles
  verified: hero bg, header-top, footer, buttons). The TEMPLATES.md screenshot
  (`cleaningservice-colorlib-template.jpg`, 1200×946, includes browser chrome
  at the very top — the apparent "search bar" is the browser address bar, not
  part of the template) confirms the design: split hero with cleaning photo
  left and solid bright-yellow right half, dark-navy headline + pill "Our
  Services" button, white navbar with blue "Request Free Quote" pill, navy top
  bar with social icons, white services section below. Overall aesthetic:
  bright, friendly, high-contrast — navy `#0E1B50` + vibrant blue `#006CFF` +
  sunny yellow `#FFF323`, Rubik type, pill-shaped buttons everywhere.
- **Section order (1:1, from the live DOM):**
  1. `header.header-area > .main-header`: `.header-top` (hidden <576px; bg
     `#0E1B50`, padding 11px 210px): left `.header-info-left` — `li` "Call
     for Free Estimate! We're the Dust Busters: 700-567-8990" (paraphrase
     the number) and "Opening Hour: Monday – Friday : 8am – 4pm" (white
     14px, separated by 1px rgba(255,255,255,0.2) right borders); right
     `.header-info-right > .header-social` — 3 icon links (facebook,
     instagram, twitter; white 16px, hover rotateY(180deg)). Then
     `.header-bottom.header-sticky` (white, sticky on scroll via
     `.sticky-bar` — `position:fixed`, white bg, shadow
     `0 10px 15px rgba(25,25,25,0.1)`): `.logo` left (`logo.png`), nav
     `.main-menu` (Home, Services, Project, About, Blog with `.submenu`
     dropdown — Blog / Blog Details / Elements, Contact), right
     `.header-right-btn` — `a.header-btn` "Request Free Quote" (solid blue
     `#006CFF` pill, white text, padding 13px 26px, radius 30px). Mobile:
     `.mobile_menu` slicknav hamburger → repo-standard mobile menu.
  2. `div.slider-area > .slider-active > .single-slider` (1 slide):
     `.slider-cap-wrapper` — flex, bg **`#FFF323`** (yellow): `.hero-img`
     left (width 52%, `img/hero/hero_img.jpg` — cleaning photo); `.hero-caption`
     right (width 47%, text-center): `img/icon/hero-icon.svg` (bubble/sparkle
     icon, margin-bottom 29px), `h1` "Best cleaning services helping
     customers worldwide." (50px, weight 500, `#0E1B50`, line-height 1.2,
     `<br>` line breaks), `p` "With over 25 years of experience cleaning
     everything from houses to offices, you can trust us.", `a.btn_02`
     "Our Services" (solid navy `#0E1B50` pill, white text, padding
     17px 34px, radius 30px; hover → transparent + blue border + blue
     text); decorative `.hero-shape` SVG behind (left 37px, top -101px).
  3. `div.services-wrapper > .services-area` (white bg, padding-top 100px,
     margin 0 50px): centered `.section-tittle` — `span` "Our Services"
     (`#006CFF`, block, margin-bottom 22px) + `h2` "Take a look at the
     variety of services we offer" (Rubik 40px, weight 500); then a row of
     3 `div.single-blogs.single-blogs2` cards (col-lg-4 col-md-6): `.blog-img`
     (`services1..3.jpg`, width 100%, hover overlay ::before
     `rgba(84,84,84,0.6)`), `.blogs-cap` text-center — `h5 > a` title
     (Commercial Cleaning / Residential Cleaning / Carpet & Floor Cleaning;
     `#0E1B50`, 22px, weight 500), `p` blurb (lorem → paraphrase), and
     `a.red-btn2 > i.ti-angle-right` — 50px circle, 1px solid `#E8E7D3`
     border, navy icon; hover (and card hover): bg `#006CFF`, white icon.
  4. `div.visit-tailor-area.fix`: `.tailor-offers` left (width 49%, height
     676px, bg image `gallery/offers1.jpg` cover, margin-left 50px; `::before`
     = `#E8E7D3` beige strip, width 20%, left -50px, z-index -1): `.info-man`
     (bg **`#FFF323`**, padding 35px 37px, absolute bottom 0 right 0) —
     `.head-cap > h3` "25" (`#0E1B50`, 120px, weight 500, line-height 1) +
     `p` "Years of Experience"; `.tailor-details` right (width 36%, padding
     20px 20px 20px 80px): `h2` "We know how to build trust & offer the
     highest quality" (40px, weight 500) + 2 lorem paragraphs + `a.btn.mt-15`
     "Learn More" (solid blue `#006CFF` pill, white text — computed).
  5. `section.about-area` (`::before` = `#F3F3EB` cream strip, width 80%,
     height 100%, left 0, z-index -1): row with `.col-xxl-5 .bg-wrapper` →
     `.about-caption` — `.section-tittle.section-tittle2`: `h2` "Satisfaction
     Guarantee" (40px, weight 600, `<br>` split) + `p` blurb; right
     `.col-xxl-6` → `.about-img` (`gallery/about1.jpg`, width 100%).
  6. `div.testimonial-area.section-padding` (white, 100px padding): centered
     `.section-tittle` — `h2` "What Our Client Sayes" (note the original
     typo — paraphrase to "What Our Clients Say"); `.h1-testimonial-active
.dot-style` slider with 3 `.single-testimonial`: `.testimonial-top-cap`
     — `img` quote logo (`gallery/testi-logo.png`) + `p` quote (20px,
     `#232F55`, `text-decoration: underline`, line-height 1.5); `.testimonial-founder`
     — `.rating` `ul` of 5 `fas fa-star` (`#0E1B50`) + `span` "- Robert"
     (14px, `#4C526E`, weight 500); dots below (`.dot-style`).
  7. `div.gallery-area` (container-fluid p-0): row of 2 `.single-gallery`
     tiles (col-xl-6 col-lg-6 col-md-6 p-0, margin-bottom 30px):
     `.gallery-img` (height 580px, bg image `gallery/gallery1..2.jpg`,
     background-size cover); hover: `.thumb-content-box > .thumb-content`
     slides in — `.capt > h3` (white, 30px, weight 600) + `p` blurb + `a`
     circle icon link (bg **`#FFF323`**, arrow icon).
  8. `div.team-area.section-padding`: `.section-tittle` centered — `h2`
     "Expert Team Members"; `.team-active` carousel of `.single-team`
     (margin 0 12px): `.team-img` (overflow hidden, margin-bottom 19px,
     photo `gallery/team1..5.jpg`, hover scale(1.1)) + `.team-social` — `ul`
     of 3 icon links (facebook-f, twitter, globe) sliding up on hover;
     `.team-caption` text-center — `h3 > a` name (Sharon Needles / John
     Withawind / Doug Lee Duckling / Buster Hyman ×2 — paraphrase to 4
     distinct names + roles; 22px, `#33384e`, hover `#006CFF`) + `p` role
     (`#57667e`).
  9. `div.want-wrapper` (bg **`#FFF323`**, padding-top 50px, padding-bottom
     20px) > `.wantToWork-area`: row of 4 — (a) col-xxl-4 `.wants-wrapper`
     (flex, align-items center): `blockquote` with `icon/headphones.svg` +
     `.wantToWork-caption h2` "Get Free Phone Call" (30px, weight 500,
     `#132E43`) + `p` "We could vary snack and coffee breaks, change desk."
     (14px, `#2D0000`); (b) col-xxl-3 `.contact-now` → `.single-form` input
     (white pill, height 50px, radius 30px, border 0, padding 10px 25px,
     text color `#006CFF`, placeholder "Your phone no." `#0E1B50`); (c)
     col-xxl-3 `.single-form` → `.select-option` `select` (nice-select,
     white pill 50px, `#0E1B50` text; open list bg `#FFF323`) with options
     Services / Category 1..3; (d) col-xxl-2 `a.btn_01.wantToWork-btn`
     "Send Request" (outline navy pill — 1px solid `#0E1B50`, navy text,
     padding 13px 27px, radius 30px; hover solid blue + white text).
  10. `footer > .footer-area.footer-padding` (bg **`#0E1B50`**): `.footer-wrapper`
      row — col-xl-4 `.single-footer-caption`: `.footer-logo`
      (`logo/logo2_footer.png`) + `.footer-pera` paragraph (16px, weight
      300, line-height 1.8, light text); offset-xl-1 col-xl-2 "Navigation"
      (`h4.footer-tittle` white 20px weight 400 + links Home, About,
      Services, Projects, Blog, Contact); col-xl-2 "Services" (Residential
      cleaning, Commercial cleaning, Window cleaning, Building cleaning);
      col-xl-3 "Contact Us" (address "65/A, Green Lane, Kings Garden, CA
      2367", "info@cleaningservice.comm" [sic], phone "10 (23) 267 3562" —
      paraphrase); `.footer-bottom-area` → `.footer-border` →
      `.footer-copy-right` text-center — copyright line (original: "made
      with ♥ by Colorlib" → replace with repo-standard Component Dock
      credit; text `#9B9EAC` 15px weight 300, links/heart `#006CFF`).
- **Design tokens extracted from `assets/css/style.css` (verified with
  computed styles in the browser):**
  - Brand blue **#006CFF** (46 uses) — `.section-tittle span` kicker,
    `.header-btn` bg, `.btn` (Learn More) bg, `.red-btn2 i` hover bg,
    `.team-caption h3 a:hover`, input text, `.footer-copy-right` links +
    heart, hover states.
  - Dark navy **#0E1B50** (26 uses) — `.header-top` bg, `.footer-area` bg,
    hero `h1`, `.btn_02` bg (hero "Our Services"), `.btn_01` text/border,
    `.blogs-cap h5 a`, `.info-man h3` ("25"), rating stars, select text,
    input placeholder.
  - Bright yellow **#FFF323** (26 uses) — `.slider-cap-wrapper` hero bg,
    `.info-man` box, `.want-wrapper` CTA bg, `.thumb-content` arrow circle,
    select open list bg.
  - Supporting tints: cream **#F3F3EB** (about strip), beige **#E8E7D3**
    (visit-tailor strip + service-circle border), light **#F9F9FF** /
    **#F0E9FF** (shared template palette), footer text **#9B9EAC**, CTA h2
    **#132E43** / p **#2D0000**, testimonial quote **#232F55** (underlined),
    team name **#33384e** / role **#57667e**, author **#4C526E**.
  - Font: **'Rubik', sans-serif** (Google Fonts; whole site incl. inputs).
  - Buttons — all pill-shaped (border-radius **30px**): `.btn_01` outline
    navy (1px solid #0E1B50, navy 16px/500 text, padding 13px 27px; hover
    solid #006CFF + white); `.btn_02` solid navy #0E1B50 white 14px/500,
    padding 17px 34px (hover transparent + blue border + blue text);
    `.header-btn` solid #006CFF white 15px/500, padding 13px 26px;
    `.red-btn2 i` 50px circle, 1px solid #E8E7D3, navy icon (hover solid
    blue + white icon); `.btn` (Learn More) solid #006CFF white.
  - Headings: hero h1 50px/500/#0E1B50/lh 1.2; `.section-tittle h2` &
    `.tailor-details h2` & `.about-caption h2` 40px/500-600; `.blogs-cap
h5 a` 22px/500; `.wantToWork-caption h2` 30px/500/#132E43; `.info-man
.head-cap h3` 120px/500; footer h4 20px/400 white.
  - Section backgrounds: hero yellow #FFF323; services white; visit-tailor
    photo + beige #E8E7D3 strip; about cream #F3F3EB strip (80% width,
    left); testimonials/team white; CTA band yellow #FFF323; footer navy
    #0E1B50. `.section-padding` = 100px top/bottom; `.services-area`
    padding-top 100px / bottom 60px, margin 0 50px.
  - Header states: `.header-top` navy #0E1B50, white 14px text, li
    separators 1px rgba(255,255,255,0.2); `.header-bottom` transparent →
    `.sticky-bar` on scroll: fixed, white bg, shadow 0 10px 15px
    rgba(25,25,25,0.1), padding 15px 0. Social icons hover rotateY(180deg).
  - Misc: service-card hover overlay rgba(84,84,84,0.6); team photo hover
    scale(1.1) + social icons slide up; gallery tiles height 580px with
    hover caption + yellow arrow circle; inputs/select = white pills height
    50px radius 30px border 0.
- **Recreation decisions:** name "Pristine" (fits a cleaning brand; wordmark
  "Pristine" in app, package @free-react-templates/pristine, app
  apps/pristine). Navy top bar (phone + hours + 3 social icons) over a white
  sticky navbar — logo left, links (Home, Services, Project, About, Blog,
  Contact; Blog dropdown optional — keep simple links), blue pill "Request
  Free Quote" right, mobile hamburger menu; hero = split layout on yellow
  #FFF323: picsum photo left (~52%), right caption centered — lucide
  sparkles icon, navy h1 "Best cleaning services helping customers
  worldwide.", subtext, navy pill "Our Services"; services = kicker + 40px
  heading + 3 photo cards (title, blurb, 50px circle arrow button, hover
  dark overlay); trust band = photo block (yellow "25 Years of Experience"
  box bottom-right, beige strip behind) + heading + 2 paragraphs + blue
  "Learn More" pill; about = cream strip + "Satisfaction Guarantee" heading
  - blurb + photo; testimonials = centered slider (quote, 5 navy stars,
    author), 3 slides, dots; gallery = 2 half-width photo tiles (580px) with
    hover caption + yellow arrow circle; team = 4-5 member cards (photo,
    hover social overlay, name + role) in a carousel/row; CTA band yellow —
    headphones icon + "Get Free Phone Call" + phone input + services select +
    outline "Send Request" pill; footer navy — logo + blurb, Navigation /
    Services / Contact Us columns, copyright bar with Component Dock credit.
    All images picsum-seeded (`picsum.photos/seed/pristine-N/w/h`); Google
    Fonts Rubik via `<link>`; icons via lucide-react (probe exports:
    Sparkles, Phone, PhoneCall, Clock, Facebook, Instagram, Twitter, ArrowRight,
    ArrowUpRight, Headphones, Globe, Star, ChevronRight — brand icons like
    Facebook/Twitter are NOT in lucide-react, use inline SVG if needed); copy
    paraphrased into real cleaning copy (no lorem).

Pristine lives in `apps/pristine` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Header

The system SHALL render a navy top bar and a white navigation header with a
logo, links, a Request Free Quote button, and a mobile menu.

#### Scenario: Top bar

- **GIVEN** the Pristine page is rendered
- **WHEN** the header is displayed at a desktop viewport
- **THEN** a navy (#0e1b50) top bar SHALL show a call-for-free-estimate line
  with a phone number and the opening hours on the left
- **AND** it SHALL show three social icon links (facebook, instagram,
  twitter) on the right

#### Scenario: Navbar

- **GIVEN** the Pristine page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the brand "Pristine" (logo + wordmark) on the left
- **AND** it SHALL show nav links Home, Services, Project, About, Blog, and
  Contact
- **AND** it SHALL show a solid blue (#006cff) pill "Request Free Quote"
  button on the right
- **AND** when the page is scrolled the header SHALL become sticky with a
  white background and a subtle shadow

#### Scenario: Mobile menu

- **GIVEN** the header is displayed at a small viewport
- **WHEN** the user activates the hamburger control
- **THEN** a menu with the nav links SHALL open
- **AND** activating the control again SHALL close it

### Requirement: Hero

The system SHALL render a split hero on a bright-yellow background with a
photo, an icon, a headline, subtext, and a CTA button.

#### Scenario: Hero content

- **GIVEN** the Pristine page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-height split layout on a yellow (#fff323)
  background with a photo on the left and the caption on the right
- **AND** the caption SHALL show a sparkles/bubbles icon above the headline
- **AND** it SHALL show the navy headline "Best cleaning services helping
  customers worldwide."
- **AND** it SHALL show a short subtext paragraph about 25 years of
  experience
- **AND** it SHALL show a navy pill "Our Services" button

### Requirement: Services

The system SHALL render a services section with a kicker, a heading, and
three service cards.

#### Scenario: Service cards

- **GIVEN** the Pristine page is rendered
- **WHEN** the services section is displayed
- **THEN** it SHALL show the blue kicker "Our Services" and the heading
  "Take a look at the variety of services we offer"
- **AND** it SHALL show three cards (Commercial Cleaning, Residential
  Cleaning, Carpet & Floor Cleaning), each with a photo, an uppercase title
  in navy, a short blurb, and a circular arrow button (50px, beige border,
  navy arrow)
- **AND** hovering a card SHALL darken its photo and turn the arrow circle
  solid blue with a white arrow

### Requirement: Trust band (experience)

The system SHALL render a trust section with a photo block carrying a yellow
experience box and a heading with a Learn More button.

#### Scenario: Trust content

- **GIVEN** the Pristine page is rendered
- **WHEN** the trust section is displayed
- **THEN** it SHALL show a cover photo block on the left with a yellow
  (#fff323) box pinned to its bottom-right corner showing a large "25" and
  "Years of Experience"
- **AND** the right side SHALL show the heading "We know how to build trust &
  offer the highest quality" with two paragraphs
- **AND** it SHALL show a solid blue pill "Learn More" button

### Requirement: About / satisfaction guarantee

The system SHALL render an about section on a cream background with a heading
and a photo.

#### Scenario: About content

- **GIVEN** the Pristine page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL sit on a cream (#f3f3eb) background strip
- **AND** the left column SHALL show the heading "Satisfaction Guarantee"
  and a paragraph
- **AND** the right column SHALL show a full-width photo

### Requirement: Testimonials

The system SHALL render a centered testimonial slider with quotes, ratings,
and author names.

#### Scenario: Testimonial slides

- **GIVEN** the Pristine page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "What Our Clients Say"
- **AND** it SHALL show a slider with three slides, each with a quote
  paragraph, a five-star rating in navy, and an author name
- **AND** the slides SHALL advance via dot indicators

### Requirement: Gallery

The system SHALL render a two-tile gallery with hover captions.

#### Scenario: Gallery tiles

- **GIVEN** the Pristine page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show two full-width half tiles, each a tall (580px)
  background photo
- **AND** hovering a tile SHALL reveal a caption (white title, blurb) and a
  yellow circular arrow link

### Requirement: Team

The system SHALL render an expert-team section with member cards.

#### Scenario: Team cards

- **GIVEN** the Pristine page is rendered
- **WHEN** the team section is displayed
- **THEN** it SHALL show the heading "Expert Team Members"
- **AND** it SHALL show at least four member cards, each with a photo, a
  name (navy, blue on hover), and a role
- **AND** hovering a member SHALL zoom the photo and reveal three social icon
  links

### Requirement: Call-to-action band

The system SHALL render a yellow CTA band with a call heading, a phone
input, a services select, and a Send Request button.

#### Scenario: CTA content

- **GIVEN** the Pristine page is rendered
- **WHEN** the CTA band is displayed
- **THEN** it SHALL sit on a yellow (#fff323) background
- **AND** it SHALL show a headphones icon with the heading "Get Free Phone
  Call" and a short line
- **AND** it SHALL show a phone-number input (white pill) and a services
  select (white pill with options such as Commercial / Residential / Carpet
  & Floor Cleaning)
- **AND** it SHALL show an outline navy pill "Send Request" button

### Requirement: Footer

The system SHALL render a dark-navy footer with link columns, contact
details, and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Pristine page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand logo with a blurb paragraph
- **AND** it SHALL show a Navigation column (Home, About, Services,
  Projects, Blog, Contact)
- **AND** it SHALL show a Services column (Residential cleaning, Commercial
  cleaning, Window cleaning, Building cleaning)
- **AND** it SHALL show a Contact Us column with an address, an email, and a
  phone number
- **AND** it SHALL show a copyright bar with the repo-standard Component
  Dock credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Pristine app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, services, trust band, about,
  testimonials, gallery, team, CTA band, and footer inside the main landmark
  in the original's order
- **AND** the document title SHALL be "Pristine — Cleaning Services"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- pristine` passes: typecheck → lint → vitest
      (100% coverage) → build.
- [ ] Section order matches the original 1:1 (top bar/navbar → yellow split
      hero → services → trust band/experience → about → testimonials →
      gallery → team → yellow CTA band → navy footer).
- [ ] Design tokens applied: brand blue #006CFF (kicker, header-btn, Learn
      More, circle-button hover, links), navy #0E1B50 (top bar, headings,
      hero h1, hero button, footer), yellow #FFF323 (hero, experience box,
      CTA band, gallery arrow), cream #F3F3EB (about strip), beige #E8E7D3
      (trust strip + circle borders), Rubik font, pill buttons (radius
      30px), navy top bar + white sticky navbar, gallery tiles 580px with
      hover captions.
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Cleaningservice), preview URL,
      tokens, and renames.
