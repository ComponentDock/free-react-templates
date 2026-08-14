# Template: Portrait (Personal Portfolio)

## Purpose

Portrait is a single-page personal portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Personalportfolio"
free template (source: https://colorlib.com/wp/template/personalportfolio/), built
under a DIFFERENT name (**Portrait** — a personal/professional "portrait" of a
freelance designer; per the monorepo naming mandate, never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a LIGHT, elegant designer-portfolio landing page: a white
sticky header, a full-screen split HERO (navy serif headline on a soft
grey-blue background with a cut-out designer photo on the right), an About
section, a 3-card "What Services you will Get from me!" category grid, a
filterable services/portfolio grid, a parallax "available for work" CTA band,
a testimonial carousel, a logo strip, a "Let's Work Together" contact band,
and a very dark navy footer. The signature brand accent is CORAL RED `#ec5b53`
(buttons, icon circles, CTA headings) against deep navy `#002d5b`/`#000a2d`
headings on light `#f9f9ff`-family backgrounds — a confident, editorial
designer aesthetic.

> NAMING NOTE: the ColorLib source name "Personalportfolio" is FORBIDDEN as
> the app name. **Portrait** is the new, original name — single lowercase
> word, no collision with `apps/`, `openspec/specs/`, `docs/templates/` or
> TEMPLATES.md (verified 2026-08-14). Source slug + preview URL are recorded
> below. NOTE: the `personalportfolio` slug appears in TEMPLATES.md THREE
> times (lines 473, 2415, 2542 — Bootstrap / Personal / Portfolio
> categories); the implementer must mark ALL THREE rows `[x]` with the same
> surge URL when shipping.

## Design reference (replication findings)

- **Original:** ColorLib "Personalportfolio". Free personal-portfolio /
  designer-landing template. The `personalportfolio` slug appears exactly
  three times in TEMPLATES.md (lines 473, 2415, 2542 — all `- [ ]`, all
  identical rows under the Bootstrap (216) / Personal (53) / Portfolio (89)
  categories; mark all three when shipping).
- **Live preview DOM — REACHABLE (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/personalportfolio/` (HTTP 200, 44,795
  bytes HTML). Stylesheets: `assets/css/style.css` (56,179B — ALL the design
  tokens below), `assets/css/bootstrap.min.css` (base grid/buttons),
  `assets/css/animate.min.css`, `assets/css/flaticon.css`,
  `assets/css/fontawesome-all.min.css`, `assets/css/magnific-popup.css`,
  `assets/css/nice-select.css`, `assets/css/owl.carousel.min.css`,
  `assets/css/slick.css`, `assets/css/slicknav.css`,
  `assets/css/themify-icons.css` (icon fonts: fontawesome, themify, flaticon
  — recreate icons with `lucide-react`, never copy font files). Scripts:
  `js/jquery`, `js/bootstrap.min.js`, `js/main.js` (sticky header,
  carousels, tab filter). Structure, copy, and tokens below are from the
  live DOM + `style.css`, cross-checked against the rendered screenshot.
- **Visual design (screenshot `personalportfolio-free-template.jpeg`,
  1200×946 — browser-verified 2026-08-14):** white navigation bar on top
  (red geometric folded-paper logo icon + bold "PORTFOLIO" wordmark; links
  Home/About/Services/Portfolio/Page/Contact; red "Get Free Consultant"
  button). HERO occupies most of the viewport on a light grey-blue
  background: LEFT column — small red uppercase eyebrow "GET EVERY SINGLE
  SOLUTIONS.", huge serif headline in dark navy "I'm Designer Haris F.
  Watson.", lorem body copy, and two CTAs ("Learn More" solid coral red,
  "Hire Me" white with grey outline); RIGHT column — a cut-out photo of a
  smiling bearded man in a light-blue shirt holding a tablet, plus subtle
  abstract curved line graphics at the bottom corners. Below the hero the
  page turns stark white with the About heading "Designing With Passion
  While Exploring The World." — generous whitespace, editorial serif
  headings vs clean sans body. Coral red is the only saturated accent;
  everything else is navy/grey/white.
- **Section order (1:1 from live DOM):**
  1. **Preloader** — `#preloader-active` with a spinner circle + logo image.
  2. **Header** — `header-area main-header header-sticky` (white, sticky).
     Logo: red geometric icon + "PORTFOLIO" text. Nav links: Home, About,
     Services, Portfolio, Page (dropdown: Blog, Blog Details, Element,
     Portfolio…), Contact. Right: red `header-btn` "Get Free Consultant"
     (`.btn` padding overridden to `27px 18px`). Mobile: `slicknav` menu.
  3. **Hero slider** — `slider-area slider-active single-slider
slider-height`: background `../img/hero/h1_hero.jpg` (cover, centered,
     `min-height: 1000px`). Left `hero__caption`: eyebrow "GET EVERY SINGLE
     SOLUTIONS." (red, uppercase), `h1` "I'm Designer Haris F. Watson."
     (70px/700, color `#002d5b`, line-height 1.2, capitalize, serif), `<p>`
     lorem (color `#464d65`), `hero__btn`: "Learn More" (solid `#ec5b53`
     btn) + "Hire Me" (white/outline). Right: designer photo (man with
     tablet, cut out) + abstract curved-line SVGs at the bottom corners.
  4. **About** — `about-area section-paddingt30` (padding-top 195px /
     bottom 90px). Left `about-caption`: `h3` "Designing With Passion While
     Exploring The World." (30px/700 `#000a2d`, line-height 1.5, margin-bottom
     35px) + two lorem paragraphs. Below: "Any Type Of Query & Discussion."
     contact line + `send-cv` row with "Learn More" + "Hire Me" buttons.
  5. **Categories** — `categories-area section-padding3` (decorative
     background image `shape1.png`, 71% size, top-left). `section-tittle`
     `h2` "What Services you will Get from me!" (48px/600 `#000a2d`). THREE
     `single-cat` cards (col-lg-4): `cat-icon` circle (100×100px,
     background `#fff4f4`, radius 50px, centered icon glyph in `#ec5b53` at
     50px) + `h5` title + short blurb. Cards: border `1px solid #e1ebf7`,
     radius 6px, padding `61px 22px`, hover → border transparent (+ source
     uses a colored overlay/shadow — verify on live page). Cards: **UI/UX
     Design**, **Digital Marketing**, **Website Design** (identical blurb
     text in the source — paraphrase per-card).
  6. **Services / portfolio grid** — `services-area services-padding` with
     `project-heading` + filter tabs `nav-tabs` centered: **All, Branding,
     Logo, UI/UX, Web Design** (active tab: `border-bottom: 2px solid
#ff5757`, no background). Tab panes contain a grid of
     `single-services` project cards (image + caption). The source renders
     filterable portfolio items per tab; recreate as a static filterable
     grid (lucide icons / picsum placeholders).
  7. **WantToWork CTA band** — `wantToWork-area w-padding2`: background
     `../img/gallery/section_bg02.jpg` (cover). `h2` "Dont worry for contact
     i`m available" (48px/700 `#ec5b53`) + "Contact Me Now" button.
  8. **Testimonials** — `client-comments section-paddingt30`:
     `section-tittle` "Some Possitive Feedback That Encourage Us" + a
     carousel of THREE identical slides: `h2` **"Bradley Erickson"**, role
     "UI/UX Designer", lorem quote ("Consectetur adipisicing elit,
     seddosdoe eiusmod tempor incididunt…"). Recreate as a single testimonial
     card (auto-rotate or manual controls per repo carousel conventions).
  9. **Brand strip** — `brand-area pb-bottom` → `brand-active brand-border
pt-50`: a row of client logo placeholders.
  10. **Contact info** — `contact-info-area w-padding2` (background
      `../img/gallery/section_bg04.jpg`, cover): `contact-caption` `h3` "If
      Not Now, When? Let's Work Together!" (48px/600 `#000a2d`, margin-bottom
      40px) + lorem paragraph + "Send Message" button.
  11. **Footer** — `footer-area` (background `#080827`, very dark navy):
      contact details "hireme@portfolio.com", "221B Baker Street, Post office
      Box 353, Park Road, USA - 215431", copyright line "Copyright © <year>
      All rights reserved". PER REPO CONVENTION: footer MUST also link
      `https://www.componentdock.com/` ("Component Dock") — replaces the
      original's plain copyright/attribution.
- **Icons:** cat-icon circles use flaticon/themify glyph fonts; nav uses
  FontAwesome. Recreate ALL icons with `lucide-react` (e.g. `Palette`,
  `Megaphone`, `Globe`/`Monitor` for the three services; `Menu` for the
  mobile toggle; `ArrowRight` on buttons). NEVER copy the icon font files.
- **Hero/about imagery:** the source ships real photos (`img/hero/h1_hero.jpg`
  as a full hero background; the designer cut-out is part of the hero
  markup). NEVER copy image assets — use
  `https://picsum.photos/seed/portrait-1/900/1000`-style deterministic
  placeholders: `portrait-1` (designer cut-out), `portrait-2..5` (project
  cards), `portrait-6` (brand logos) per `docs/replication.md`. The hero
  background is a photo — either a subtle picsum cover image or a
  light-gradient `#f9f9ff`-family treatment (see tokens) is acceptable;
  prefer the gradient treatment for a lightweight recreation and note the
  deviation in the PR.
- **Responsive (source CSS):** hero `min-height: 1000px` collapses to
  stacked columns; nav links hide below lg and a `slicknav` mobile menu
  appears; category cards stack (col-lg-4 → full width); section padding
  `section-paddingt30` (195/90px) scales down for mobile per repo
  conventions. Sticky header (`header-sticky`) stays at top on scroll.

## Design tokens (verified from live stylesheet `assets/css/style.css`, 2026-08-14)

- **Brand colors:**
  - `#ec5b53` — CORAL RED, the signature brand accent: `.btn` background,
    active/CTA buttons, `cat-icon` glyph color, WantToWork `h2` color.
  - `#f44a40` — secondary red (button hover/focus variants in the sheet).
  - `#002d5b` — dark navy: hero `h1` color (`.hero__caption h1`).
  - `#000a2d` — near-black navy: section-title `h2`/`h3` color
    (`.section-tittle h2`, `.about-area .about-caption h3`,
    `.contact-info-area .contact-caption h3`).
  - `#1f2b7b` — deep indigo-navy (secondary accents).
  - `#080827` — footer background (very dark navy).
  - `#464d65` — hero paragraph text color (`.hero__caption p`).
  - `#f9f9ff`, `#f0e9ff` — light section backgrounds (hero/about family).
  - `#fff4f4` — `cat-icon` circle background (soft red tint).
  - `#e1ebf7` — `single-cat` card border.
  - `#415094` — indigo (generic/genric button text in the sheet).
  - `#4cd3e3` (cyan), `#f4e700` (yellow), `#38a4ff` (blue) — minor
    decorative accents (small elements, radio/check graphics); use sparingly
    or omit.
  - `#ff5757` — active nav-tab underline (`border-bottom: 2px solid
#ff5757`).
- **Fonts:** **Rubik** (body/UI: `font-family:"Rubik",sans-serif` on `.btn`
  and body) + **Rufina** (headings serif: `font-family:"Rufina",serif` on
  `h1`–`h3` families). Load both via Google Fonts `<link>` in `index.html`.
  Hero `h1` 70px/700; section titles 48px/600 (`#000a2d`); about `h3`
  30px/700; WantToWork `h2` 48px/700 `#ec5b53`; buttons 14px/500.
- **Buttons:** `.btn` — background `#ec5b53`, padding `27px 44px`, radius
  `5px`, `font-family: Rubik`, color `#fff`, font-size 14px, weight 500,
  `letter-spacing: 1px`, `text-transform: capitalize`, line-height 0,
  border 0, overflow hidden. Header variant `.header-btn` padding `27px
18px`. Secondary "Hire Me" = white background + grey outline border
  (`.btn-black`/outline family — verify exact border on live page; a
  `1px solid #e1ebf7`-style grey border with `#415094`-ish text matches the
  sheet's genric-btn.outline pattern).
- **Radii:** buttons `5px`; category cards `6px`; cat-icon circles `50px`
  (perfect circles).
- **Shadows:** none in the primary section styles (cards use borders; hover
  states may add a soft shadow — check `single-cat:hover` overlay on the
  live page and replicate the feel with a subtle shadow + transparent
  border).
- **Spacing rhythm:** hero `min-height: 1000px`; `section-paddingt30` =
  `padding-top: 195px; padding-bottom: 90px`; `section-tittle` margin-bottom
  `50px` (`mb-70` variant 70px); about `h3` margin-bottom `35px`; contact
  `h3` margin-bottom `40px`; cat cards padding `61px 22px`; container
  max-width 1140px at desktop (Bootstrap `.container`).
- **Images:** hero bg photo + designer cut-out + project cards + brand logos
  in the source — replace ALL with picsum placeholders (see above) or the
  gradient hero treatment; NEVER copy assets.

## Requirements

### Requirement: Sticky header with nav and CTA

The system SHALL render a white sticky header: logo (geometric mark +
"PORTFOLIO" wordmark), nav links (Home, About, Services, Portfolio, Page,
Contact), and a coral-red "Get Free Consultant" button, collapsing to a
mobile menu below the lg breakpoint.

#### Scenario: Header layout

- **GIVEN** the Portrait page is rendered
- **WHEN** the page loads
- **THEN** a white header SHALL span the top with the "PORTFOLIO" wordmark on
  the left, the six nav links, and a "Get Free Consultant" button on the
  right (solid coral `#ec5b53`, white text, radius 5px)
- **AND** the header SHALL stay fixed/sticky at the top on scroll

#### Scenario: Mobile menu

- **GIVEN** the Portrait page is rendered on a viewport below the lg
  breakpoint
- **WHEN** the user views the header
- **THEN** the nav links SHALL collapse behind a hamburger toggle
  (`aria-expanded` managed, menu slides in) matching the source's
  slicknav behavior

### Requirement: Hero section

The system SHALL render a full-height split hero: left column with red
uppercase eyebrow "GET EVERY SINGLE SOLUTIONS.", a large navy serif headline
"I'm Designer Haris F. Watson.", body copy, and two CTAs ("Learn More" solid
coral, "Hire Me" white with grey outline); right column with a designer
photo placeholder and decorative curved lines.

#### Scenario: Hero content and styling

- **GIVEN** the Portrait page is rendered
- **WHEN** the user views the hero
- **THEN** the headline SHALL read "I'm Designer Haris F. Watson." in the
  serif heading font, ~70px/700, color `#002d5b`, capitalize
- **AND** the eyebrow SHALL read "GET EVERY SINGLE SOLUTIONS." in uppercase
  coral red
- **AND** the body paragraph SHALL be `#464d65` on a light `#f9f9ff`-family
  background
- **AND** a "Learn More" button (coral `#ec5b53`) and a "Hire Me" button
  (white, grey outline) SHALL appear below the copy
- **AND** the right side SHALL show a portrait photo placeholder
  (`picsum.photos/seed/portrait-1/...`) with the source's abstract curved
  line accents

### Requirement: About section

The system SHALL render the About section: h3 heading "Designing With Passion
While Exploring The World." (30px/700 `#000a2d`), two paragraphs of lorem,
the "Any Type Of Query & Discussion." contact line, and a send-CV row of
"Learn More" + "Hire Me" buttons.

#### Scenario: About layout

- **GIVEN** the Portrait page is rendered
- **WHEN** the user scrolls past the hero
- **THEN** the About section SHALL show the 30px/700 navy heading, two
  paragraphs, the "Any Type Of Query & Discussion." line, and the two CTA
  buttons in a send-CV row
- **AND** the section SHALL keep the source's generous top padding
  (~195px, scaled for mobile)

### Requirement: Services category cards

The system SHALL render a "What Services you will Get from me!" section
title (48px/600 `#000a2d`) followed by THREE cards — **UI/UX Design**,
**Digital Marketing**, **Website Design** — each with a 100px coral-icon
circle on a `#fff4f4` background, a title, and a short blurb, bordered
`1px solid #e1ebf7` with 6px radius.

#### Scenario: Three category cards

- **GIVEN** the Portrait page is rendered
- **WHEN** the user views the services category grid
- **THEN** exactly three cards SHALL render with the titles "UI/UX Design",
  "Digital Marketing", and "Website Design"
- **AND** each card SHALL show a circular icon badge (100px, `#fff4f4`
  background, `#ec5b53` lucide icon) above the title and a one-line blurb
- **AND** each card SHALL have a `1px solid #e1ebf7` border, 6px radius,
  and ~`61px 22px` padding
- **AND** hovering a card SHALL drop the border and apply a subtle
  shadow/overlay (per live-page hover state)

### Requirement: Services / portfolio filter grid

The system SHALL render a filterable project grid with centered tabs — All,
Branding, Logo, UI/UX, Web Design — where the active tab shows a 2px coral
`#ff5757` bottom border, and clicking a tab filters the project cards.

#### Scenario: Tab filtering

- **GIVEN** the services grid is rendered with "All" active
- **WHEN** the user clicks the "Branding" tab
- **THEN** only Branding project cards SHALL remain visible
- **AND** the active tab SHALL be marked with the `#ff5757` underline
- **AND** clicking "All" SHALL restore the full grid

#### Scenario: Grid accessibility

- **GIVEN** the services grid is rendered
- **WHEN** the user tabs through the filter buttons
- **THEN** each tab SHALL be a focusable button with `aria-selected`/
  `aria-controls` and the tablist semantics of the source's Bootstrap tabs

### Requirement: WantToWork CTA band

The system SHALL render a full-width CTA band (background image or the
source's cover-photo treatment) with the h2 "Dont worry for contact i`m
available" in coral `#ec5b53` (48px/700) and a "Contact Me Now" button.

#### Scenario: CTA band content

- **GIVEN** the Portrait page is rendered
- **WHEN** the user scrolls to the CTA band
- **THEN** the band SHALL show the coral 48px heading "Dont worry for
  contact i`m available" and a "Contact Me Now" button
- **AND** the band SHALL have a distinct background treatment (picsum
  cover or light gradient) matching the source's section_bg02 photo band

### Requirement: Testimonial carousel

The system SHALL render a "Some Possitive Feedback That Encourage Us"
section title with a testimonial card featuring "Bradley Erickson", role
"UI/UX Designer", and a lorem quote, rotating through the source's three
identical slides.

#### Scenario: Testimonial display

- **GIVEN** the Portrait page is rendered
- **WHEN** the user views the testimonials
- **THEN** the section title "Some Possitive Feedback That Encourage Us"
  SHALL render above a testimonial card with the name "Bradley Erickson",
  the role "UI/UX Designer", and a placeholder quote
- **AND** the card SHALL support navigation (dots/arrows or auto-rotate)
  with `aria-live`-safe semantics for screen readers

### Requirement: Brand strip

The system SHALL render a brand logo strip (row of client logo placeholders)
between the testimonials and the contact section.

#### Scenario: Brand logos

- **GIVEN** the Portrait page is rendered
- **WHEN** the user scrolls past the testimonials
- **THEN** a row of muted logo placeholders SHALL render (picsum seeds or
  lucide glyphs), visually lighter than the surrounding sections

### Requirement: Contact info band

The system SHALL render the "If Not Now, When? Let's Work Together!" contact
band: h3 (48px/600 `#000a2d`), a lorem paragraph, and a "Send Message"
button, on a distinct background (source: section_bg04 photo).

#### Scenario: Contact band content

- **GIVEN** the Portrait page is rendered
- **WHEN** the user scrolls to the contact band
- **THEN** the h3 SHALL read "If Not Now, When? Let's Work Together!" in
  48px/600 `#000a2d`
- **AND** a "Send Message" button SHALL render below the copy
- **AND** the band SHALL carry the source's photo-background treatment
  (picsum cover or light gradient)

### Requirement: Footer

The system SHALL render the dark `#080827` footer with the contact details
(email "hireme@portfolio.com", address "221B Baker Street, Post office Box
353, Park Road, USA - 215431"), a copyright line, and — per repo convention —
a link to `https://www.componentdock.com/` branded "Component Dock".

#### Scenario: Footer content

- **GIVEN** the Portrait page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL have the very dark navy `#080827` background and
  show the email + address contact details and the copyright line
- **AND** the footer SHALL link to `https://www.componentdock.com/` branded
  as "Component Dock" (e.g. "More templates at Component Dock")

### Requirement: Responsive behavior

The system SHALL adapt all sections for mobile viewports: stacked hero
columns, hamburger nav, stacked category cards, and scaled-down section
padding.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Portrait page is rendered on a mobile viewport
- **WHEN** the page is displayed
- **THEN** the hero SHALL stack (text above the portrait photo), the nav
  SHALL collapse into the hamburger menu, and the category cards SHALL
  stack full-width
- **AND** section padding SHALL scale down from the 195px/90px desktop
  rhythm to a mobile-friendly rhythm

### Requirement: Component Dock attribution

Every template in the monorepo MUST carry the Component Dock footer link
(covered by the Footer requirement above — listed separately so the gate
cannot miss it).

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-portrait`
- [ ] `scripts/verify-app.sh portrait` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): sticky white header (logo +
      Home/About/Services/Portfolio/Page/Contact + coral "Get Free
      Consultant") → full-height split hero (eyebrow "GET EVERY SINGLE
      SOLUTIONS." + "I'm Designer Haris F. Watson." 70px/700 `#002d5b` serif + Learn More/Hire Me + portrait placeholder) → About ("Designing With
      Passion While Exploring The World." 30px/700 + "Any Type Of Query &
      Discussion." + CTA row) → Services ("What Services you will Get from
      me!" + 3 icon-circle cards) → filter grid (All/Branding/Logo/UI/UX/Web
      Design tabs, `#ff5757` active underline) → WantToWork band ("Dont
      worry for contact i`m available" coral 48px + Contact Me Now) →
    Testimonials (Bradley Erickson / UI/UX Designer carousel) → brand
    strip → Contact ("If Not Now, When? Let's Work Together!" 48px/600 +
    Send Message) → dark `#080827` footer (contact details + copyright +
      Component Dock link)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#ec5b53` coral,
      `#f44a40` hover red, `#002d5b` hero navy, `#000a2d` titles,
      `#080827` footer, `#464d65` body, `#f9f9ff`/`#f0e9ff` light bgs,
      `#fff4f4` icon circles, `#e1ebf7` card borders, `#ff5757` tab active
- [ ] Fonts: Rubik (body/UI) + Rufina (headings) via Google Fonts `<link>`
      in `index.html`; title "Portrait — Personal Portfolio"
- [ ] Buttons: coral `#ec5b53`, radius 5px, white text, capitalize, Rubik
      14px/500, ~`27px 44px` padding (header variant `27px 18px`); secondary
      buttons white + grey outline
- [ ] NO ColorLib assets: no copied images/fonts/CSS; ALL icons via
      lucide-react; ALL photos via `picsum.photos/seed/portrait-<n>/<w>/<h>`
- [ ] NO `colorlib` / `preview.colorlib.com` strings anywhere in `apps/*`
      (provenance lives only in spec/TEMPLATES.md/PR)
- [ ] Sticky header + mobile hamburger with `aria-expanded`; filter tabs
      with `aria-selected`/`aria-controls`; testimonial carousel accessible
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md rows at lines **473, 2415, 2542** (ALL THREE
      `personalportfolio` duplicates) `[~]` → `[x]` + same surge URL +
      `npm run readme:status` done by implementer at ship time
- [ ] PR description MUST note: source template + preview URL, design
      tokens, the hero-background treatment decision (gradient vs picsum
      cover), placeholder images, and the three duplicate TEMPLATES.md rows
