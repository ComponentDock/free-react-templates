# Template: Stratus (Hosting & Cloud Services)

## Purpose

Stratus is a single-page web-hosting template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Cloud83"
design (see TEMPLATES.md — line 360, Hosting section; first unchecked item
whose prep did not exist on main), built under the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The original is a corporate hosting landing page: a semi-transparent dark
header with a green bottom border, a full-width hero slider with a
photographic background and a "Read More" CTA, a white 3-column feature row
(icon + title + blurb), a dark image-backed services section with six hosting
offerings arranged around a circular graphic, a light "We Generate Trust"
about block with a checklist, a solid slate-blue milestones band with four
counters, a compact "get started" CTA band, and a two-tone dark footer with
four link columns. Stratus recreates that structure section-for-section with
matching layout, colors, typography, and content types (no ColorLib assets
copied).

## Design reference (replication findings)

- **Original:** ColorLib "Cloud83" — free Bootstrap 4 web-hosting website
  template (source: https://colorlib.com/wp/template/cloud83/). New name:
  **stratus** (stratus clouds — a layered cloud formation, fits the hosting
  theme; single word, no collision with `ls apps/` or existing spec folders).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/cloud83/`
  (HTTP 200, ~21KB; page title "Cloud 83 - Hosting Template"). Stylesheets:
  `css/style.css` (~29KB — custom template styles) plus bootstrap.min,
  font-awesome.min, magnific-popup, owl.carousel.min, animate.css. JS: jquery,
  bootstrap, owl.carousel (hero slider), main.js. The CSS declares
  **"Poppins"** (`font-family: 'Poppins', sans-serif`, loaded via cf-fonts
  @font-face 400/500/600/700 — in the recreation load it from Google Fonts
  `<link>` in index.html). Hero/service backgrounds are set via
  `data-setbg` attributes (`img/bg.jpg`, `img/service-bg.jpg`) resolved by
  main.js — the rendered DOM is the reference below.
- **Screenshot:** `cloud83-free-template.jpg` (TEMPLATES.md line 360) —
  confirms the visual design: dark navy hosting hero with a blurred server
  room photo and green-accented slider dots, white feature row with teal-green
  line icons, dark services section with a circular graphic in the middle and
  white text, slate-blue stats band, and a dark footer with green accents.
- **Section order (1:1):**
  1. `header.header-section` — **semi-transparent dark bar** (`background:
rgba(0,0,0,0.63); padding: 54px 0; border-bottom: 2px solid #25ae88`)
     over the hero: left `a.site-logo` (img/logo.png); center nav links
     **Home, About us, Services, News, Contact**; right `.header-btns` —
     "Support 24/7" text + **Login** (`a.site-btn.sb-c2`, #7fabda) +
     **Register** (`a.site-btn.sb-c3`, #25ae88).
  2. `section.hero-section > div.hero-slider.owl-carousel` — full-width hero
     **slider with 2 identical slides**; each `div.hs-item.set-bg`
     (`data-setbg="img/bg.jpg"` — dark server-room photo): `h2` **"The Best
     Hosting"** + two lorem paragraphs + **Read More** (`a.site-btn.sb-c1`,
     #556080). Slider dots bottom-center, `.active` dot **#25ae88**.
  3. `section.feature-section.spad` — white feature row, three `col-md-4
.feature` cards: `img` (feature-icons/1..3.png) + `h4` + lorem: **Worldwide
     Support / Safe & Secure / Cloud Hosting**.
  4. `section.Services-section.spad.set-bg` (`data-setbg="img/service-bg.jpg"`
     — dark image background) — white `div.section-title`: small `p` **"The
     only ones"** + `h2` **"Our Best Services"**; center circular graphic
     (`img/service-circle-pic.png`); six `ul.service-list` items (3 left /
     3 right, white text), each `img` (service-icons/1..6.png) + `h4` + lorem:
     **Free Domains / Shared Hosting / Reseller Hosting / VPS Hosting /
     Dedicated Hosting / Cloud Hosting**.
  5. `section.trust-section` — light about block: `div.section-title` (small
     `p` "The only ones" + `h2` **"We Generate Trust"**), `img/about.png`,
     intro paragraph ("Phasellus vehicula tempus orci vel consequat…") and a
     `ul` of 4 checklist items (**Mauris dignissim**, **Nullam lorem sem,
     viverra a rutrum**, **Etiam lobortis erat vel ullamcorper**, **Sed
     ultrices interdum libero, laoreet**).
  6. `section.milestones-section` — **solid slate-blue band**
     (`background: #556080; padding: 125px 0`), four `div.milestone` stats,
     each `img` (milestone-icons/1..4.png) + `h2` number + `p` label:
     **31k Clients / 98k Domains / 14k Awards / 362 VPS**.
  7. `section.cta` — get-started band: `h2` **"We are here to help you get
     started"** + `h6` lorem subtext + **Start** (`a.site-btn.sb-c3`,
     #25ae88).
  8. `section.footer-top-section` — dark `#1f2430` (`padding: 127px 0 50px`):
     logo + short about paragraph + social links, then four `h5.fw-title`
     link columns: **Our Products** (Web Hosting, Reseller Hosting, VPS
     Hosting, Dedicated Servers, Windows Hosting, Cloud Hosting, Linux
     Servers, WordPress), **Our Solutions**, **Our Products** (3 links),
     **Company**.
  9. `footer.footer-section` — darkest bar `#171b26` (`padding: 19px 0`):
     copyright line + **ColorLib credit link** (replaced with the
     repo-standard credit in the recreation).
- **Design tokens extracted from `css/style.css` (custom template styles):**
  - Brand green: **#25ae88** — the accent color: header `border-bottom: 2px
solid #25ae88`, `.site-btn.sb-c3` (Register / Start) background, active
    hero-slider dot background.
  - Slate blue: **#556080** — primary button `.site-btn` / `.sb-c1` (Read
    More) background AND the **entire milestones-section background**; also
    body-text gray-blue family.
  - Soft blue: **#7fabda** — `.site-btn.sb-c2` (Login) background.
  - Dark text: **#151414** / **#333** headings; secondary text **#7c7c7c**
    (~5 uses); slate text **#51555d** / **#636363**.
  - Dark sections: **#171b26** (footer bottom bar), **#1f2430** (footer top),
    header overlay rgba(0,0,0,0.63); hero/services use dark cover photos.
  - Light section: **#f4f7fa** (light gray-blue band, used twice).
  - Alert red **#f44336** and purple **#673ab7** appear once each (icon
    accents in the original; not part of the core palette).
  - Fonts: **Poppins** — body 16px/400; `.site-btn` 16px/400 white; h2
    headings bold (600/700). Google Fonts `<link>` in index.html.
  - Buttons: **square** — `.site-btn { border-radius: 0px; border: none;
min-width: 110px; padding: 14px 25px; background: #556080; color: #fff }`;
    variants sb-c2 #7fabda, sb-c3 #25ae88; hover keeps white text (no bg
    change); header buttons `padding: 10px 20px; margin-right: 11px`; hero
    button `min-width: 146-147px; margin-top: 65px` (slide-in animation with
    1s ease delay in the original).
  - Section rhythm: `spad` (standard section padding), milestones
    `padding: 125px 0`, footer top `127px 0 50px`, footer bar `19px 0`;
    section-title `margin-bottom: 87px`.
- **Recreation decisions:** header = semi-transparent dark bar (rgba(0,0,0,
  0.63)) with 2px #25ae88 bottom border, brand (lucide Cloud icon + "Stratus"
  wordmark), links Home/About us/Services/News/Contact, right-side "Support
  24/7" text + Login (soft blue) + Register (green) square buttons; mobile =
  accessible toggler (aria-expanded) collapsing to a dark menu. Hero = one
  full-width slide (the original shows 2 identical slides; keep the dots and
  auto-advance for fidelity, or a single slide with dots for simplicity — the
  implementer may choose, keeping the same visual), dark cover photo (picsum),
  h2 "The Best Hosting" (bold, white), two paragraphs, square slate "Read
  More" button, green active dot. Features = white row of 3 cards (lucide
  Globe/ShieldCheck/Cloud icons, h4 600, lorem). Services = dark cover-photo
  band with white "The only ones / Our Best Services" title, central circular
  graphic (picsum circle image or decorative ring), and 6 white service items
  (3 left / 3 right on desktop, stacked on mobile): lucide icons + h4 +
  lorem. Trust = light band, "We Generate Trust" heading, photo (picsum), one
  paragraph, 4 checkmark items (lucide CheckCircle2, green). Milestones =
  solid #556080 band with 4 stats (icon + big number + label; count-up on
  viewport optional). CTA = heading + subtext + square green "Start" button.
  Footer top = #1f2430 with logo/about/social (lucide Twitter/Facebook/
  Instagram/LinkedIn circles) + 4 link columns (Our Products ×2, Our
  Solutions, Company); footer bar = #171b26 with copyright + repo-standard
  credit. Images `picsum.photos/seed/stratus-N/w/h`; fonts Poppins via Google
  Fonts `<link>`; icons via lucide-react (Cloud, Globe, ShieldCheck, Server,
  CheckCircle2, Twitter, Facebook, Instagram, Linkedin, Menu).

Stratus lives in `apps/stratus` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Requirements

### Requirement: Semi-transparent header bar

The system SHALL render a semi-transparent dark header over the hero with the
brand, primary links, and action buttons.

#### Scenario: Header content

- **GIVEN** the Stratus page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL have a semi-transparent dark background
  (rgba(0,0,0,0.63))
- **AND** it SHALL have a 2px brand-green (#25ae88) bottom border
- **AND** it SHALL show the brand "Stratus" with a cloud-style icon on the left
- **AND** it SHALL show the links Home, About us, Services, News, and Contact
- **AND** it SHALL show the text "Support 24/7" and two square buttons:
  Login (soft blue #7fabda) and Register (brand green #25ae88)

#### Scenario: Mobile navigation

- **GIVEN** the header is displayed on a narrow viewport
- **WHEN** the user activates the toggler
- **THEN** the navigation links SHALL be revealed/collapsed with the
  appropriate aria-expanded state
- **AND** the collapsed menu SHALL use the dark header styling

### Requirement: Full-width hero slider

The system SHALL render a full-width hero with a photographic background, a
headline, supporting copy, and a "Read More" CTA.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show a full-width dark cover background image
- **AND** it SHALL show the heading "The Best Hosting"
- **AND** it SHALL show two short supporting paragraphs
- **AND** it SHALL show a square "Read More" button in slate blue (#556080)

#### Scenario: Slider dots

- **GIVEN** the hero slider is displayed
- **WHEN** the slides advance (auto or via dots)
- **THEN** a set of slider dots SHALL be visible at the bottom of the hero
- **AND** the active dot SHALL be brand green (#25ae88)

### Requirement: Feature row

The system SHALL render a white row of three feature cards with icon, title,
and description.

#### Scenario: Feature cards

- **GIVEN** the features section is displayed
- **WHEN** the three cards render
- **THEN** each card SHALL show a line icon, a bold heading, and a short
  description
- **AND** the headings SHALL be Worldwide Support, Safe & Secure, and Cloud
  Hosting

### Requirement: Dark services section

The system SHALL render a dark image-backed services section with a white
title and six hosting offerings around a central graphic.

#### Scenario: Section header

- **GIVEN** the services section is displayed
- **WHEN** its heading area renders
- **THEN** it SHALL show the small text "The only ones" and the heading "Our
  Best Services" in white

#### Scenario: Service items

- **GIVEN** the services section is displayed
- **WHEN** the six service items render
- **THEN** each item SHALL show an icon, a heading, and a short description in
  white
- **AND** the headings SHALL be Free Domains, Shared Hosting, Reseller
  Hosting, VPS Hosting, Dedicated Hosting, and Cloud Hosting

#### Scenario: Central graphic

- **GIVEN** the services section is displayed
- **WHEN** the section renders on a desktop viewport
- **THEN** a circular graphic SHALL be displayed in the center of the section
  with three service items on each side

### Requirement: Trust section

The system SHALL render a light about/trust section with a heading, photo,
paragraph, and a four-item checklist.

#### Scenario: Trust content

- **GIVEN** the trust section is displayed
- **WHEN** the section renders
- **THEN** it SHALL show the small text "The only ones" and the heading "We
  Generate Trust"
- **AND** it SHALL show a photo, an intro paragraph, and a four-item checklist
  with brand-green check icons (Mauris dignissim; Nullam lorem sem, viverra a
  rutrum; Etiam lobortis erat vel ullamcorper; Sed ultrices interdum libero,
  laoreet)

### Requirement: Milestones band

The system SHALL render a solid slate-blue (#556080) statistics band with four
counters.

#### Scenario: Milestone stats

- **GIVEN** the milestones section is displayed
- **WHEN** the band renders
- **THEN** it SHALL have the slate-blue (#556080) background
- **AND** it SHALL show four stats, each with an icon, a large number, and a
  label: 31k Clients, 98k Domains, 14k Awards, and 362 VPS

### Requirement: Get-started CTA

The system SHALL render a compact call-to-action band with a heading,
subtext, and a green "Start" button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the heading "We are here to help you get started"
- **AND** it SHALL show a short subtext line
- **AND** it SHALL show a square "Start" button in brand green (#25ae88)

### Requirement: Dark footer

The system SHALL render a two-tone dark footer with brand info, social links,
four link columns, and the bottom credit bar.

#### Scenario: Footer top

- **GIVEN** the page is rendered
- **WHEN** the footer top is displayed
- **THEN** it SHALL have the dark background #1f2430
- **AND** it SHALL show the brand, a short about paragraph, and social icon
  links
- **AND** it SHALL show four link columns with headings Our Products, Our
  Solutions, Our Products, and Company, listing hosting-plan links (Web
  Hosting, Reseller Hosting, VPS Hosting, Dedicated Servers, Windows Hosting,
  Cloud Hosting, Linux Servers, WordPress)

#### Scenario: Footer bar

- **GIVEN** the page is rendered
- **WHEN** the bottom footer bar is displayed
- **THEN** it SHALL have the darkest background #171b26
- **AND** it SHALL carry the copyright line and the repo-standard footer
  credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Stratus app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose header, hero, features, services, trust,
  milestones, CTA, and footer inside the main landmark in the original's order
- **AND** the document title SHALL be "Stratus — Hosting & Cloud Services"

## Verification checklist

- [ ] `npm run spec:validate` passes.
- [ ] `npm run verify:app -- stratus` passes: typecheck → lint → vitest (100%
      coverage) → build.
- [ ] Section order matches the original 1:1 (header → hero → features →
      services → trust → milestones → CTA → footer).
- [ ] Design tokens applied: brand green #25ae88 (header bottom border, sb-c3
      buttons, active slider dot, checklist icons), slate #556080 (sb-c1
      buttons + milestones band), soft blue #7fabda (sb-c2 Login), dark
      #1f2430 footer top / #171b26 footer bar, header rgba(0,0,0,0.63),
      headings #151414/#333, body #7c7c7c, Poppins, square buttons
      (border-radius 0, min-width ~110px, padding 14px 25px).
- [ ] Header is a semi-transparent dark bar with 2px green bottom border,
      brand, five nav links, "Support 24/7", and Login/Register square
      buttons; mobile toggler has aria-expanded.
- [ ] Hero is full-width with a dark cover photo, "The Best Hosting" heading,
      two paragraphs, square slate "Read More" button, and green active
      slider dot.
- [ ] Features row renders three white cards (Worldwide Support / Safe &
      Secure / Cloud Hosting) with icon + heading + description.
- [ ] Services section is a dark cover-photo band with white "The only ones /
      Our Best Services" title, central circular graphic, and six white
      service items (3 left / 3 right on desktop).
- [ ] Trust section renders "We Generate Trust", a photo, paragraph, and four
      green-check list items.
- [ ] Milestones band is solid #556080 with four stats (31k Clients, 98k
      Domains, 14k Awards, 362 VPS).
- [ ] CTA renders "We are here to help you get started" with subtext and a
      square green "Start" button.
- [ ] Footer is two-tone dark (#1f2430 top with brand/social/four link
      columns, #171b26 bar with repo-standard credit).
- [ ] All images are picsum-seeded placeholders (no ColorLib assets).
- [ ] PR description records source template (Cloud83), preview URL, tokens,
      and renames.
