# Template: Barrister (Law Firm / Attorney Website Template)

## Purpose

Barrister is a single-page law firm / attorney website landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fective" website template design (see TEMPLATES.md), built
under a different name with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Fective" — elegant law-firm one-pager ("Need a
  legal help? We are effective law agency."): photo hero over dark slate
  overlay, centered promise statement with signature, light About-me split,
  Why-Us icon row (court-themed flaticon icons), gallery slider, numbered
  Why-Choose-Us list, two-column services checklist, and a light 4-widget
  footer (source: https://colorlib.com/wp/template/fective/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/fective/
  (HTTP 200, 20,809-byte HTML fetched; `css/style.css` 55 KB parsed for
  tokens). Bootstrap 5 + tiny-slider + AOS scroll animations + icomoon &
  flaticon icon fonts + jQuery stack; no Tailwind. Brand in the preview:
  "fective" (logo with a gold `.` accent).
- **Screenshot analyzed:** `fective-free-template.jpg` (TEMPLATES.md,
  1200×946, viewed in the browser) — full-width hero photo of classical
  stone columns under a dark blue-grey overlay; uppercase gold
  "WELCOME TO OUR SITE" kicker, large white serif headline, gold-outlined
  "Practice Area" button; below on white: centered promise heading with gold
  vertical rule accents and a script signature image; start of a light
  About section. Matches the live preview 1:1.
- **Section order (1:1):** Navbar (`nav.site-nav`): gold-dot logo
  "barrister." (Playfair Display) left, menu right — Home (active) /
  Attorneys (dropdown: Menu One, Menu Two, Dropdown → Sub Menu One/Two/Three,
  Menu Three) / Our Services / About / Contact Us; mobile burger →
  slide-in panel (`div.site-mobile-menu`) → Hero (`div.hero.overlay`,
  padding 15rem 0, `background-image: images/hero_1.jpg`, overlay
  `rgba(36,47,58,0.9)` via `.hero.overlay:before`): centered (col-lg-7
  mx-auto) uppercase gold `.subheading` "Welcome to our site" (12px, .1rem
  letter-spacing, bold), h1.heading "Need a legal help? We are effective law
  agency." (white, 50px/700, 34px ≤991px), gold-outline button
  `.btn.btn-outline-primary.bg_dark` "Practice Area", gold vertical rule
  `.v-line` (1px × 100px, absolute bottom-left) → Intro (`div.section
.sec-intro`, white): centered (col-lg-7 mx-auto) `.content` — gold
  `.v-line` (1px × 160px, absolute bottom-right), h2.heading "My promise to
  every client is to work tirelessly to obtain a just result." (mb-5), two
  paragraphs, script signature image `images/signature.png` → About me
  (`div.section.sec-about-me.bg-light`): `.box-wrap` row
  justify-content-between — left col-lg-6: gold `.subheading` "About me",
  h2.heading "Jeynne M. Campbell" (two lines via `<br>`), `.box` white with
  a paragraph; right col-lg-5: `.img-wrap` photo `images/about_me.jpg` →
  Why Us heading (`div.section.sec-service-1.pb-0`): gold `.subheading`
  "Why Us" + h3.heading paragraph → Icon row (`div.setion.sec-service-2
.pt-0`): right-aligned intro paragraph (col-lg-4 ml-auto) + 4-column
  `.wrap-icons` (col-6 col-md-4 col-lg-3 text-center): flaticon glyph +
  h3.heading-3 label — Court Mace / Court Building / Crime / Authority
  Badge (heading-3 18px, color #242f3a) → Gallery slider
  (`div.gallery-slider-wrap`): tiny-slider `.gallery-slider` of image
  `.item`s (4 slides, hero_1.jpg repeated in the source — ship distinct
  seeded images), dot nav `.tns-nav` bottom-center → Why Choose Us
  (`div.section.sec-why-us`): row align-items-center — left col-lg-6
  `.img-wrap` photo; right col-lg-5 ms-auto: h2.heading-2 "Why Choose Us"
  (mb-5) + `.box` with three `.custom-media d-flex` rows — gold `.number`
  (01/02/03, flex 0 0 60px, margin-right 20px) + h2 (Effective / 99% Cases
  wins / Expert Lawyers) + paragraph → List Of Services
  (`div.section.sec-about-2`): row — left col-lg-5 z-2 mt-5 `.box`:
  h2.heading "List Of Services" (mb-4) + two paragraphs; right col-lg-7
  z-1 `.img-wrap` photo; then row with col-lg-8 mx-auto `.box-list`:
  two-column (col-lg-6 ×2) `ul.list-unstyled` checklist (14 short items,
  gold `li:before` bullet marks; source repeats filler — paraphrase to
  distinct service-list items) → Footer (`div.footer`, light, padding 70px
  0, font-size 14px, black links): 4 `.widget` columns — (1) "About Us"
  h3.widget-heading + paragraph + `.btn.btn-primary.btn-primary-hover-outline`
  "Learn more"; (2) "Navigation" with two stacked `ul.list-unstyled`
  columns (Overview/About Us/Clients/Find Us/Webinars/Privacy Policy and
  Overview/About Us/Services/Portfolio/Gallery/Contact Us); (3) "Follow us"
  social icon row (facebook, twitter, linkedin, google, play) + "Subscribe"
  `.footer-subscribe` form (text input, height 42px, 2px rgba(0,0,0,0.2)
  border, icon-only submit button 1.5rem); (4) "Recent Posts"
  `ul.footer-blog-entry` — 4 dated entries (date `.d-block` "May 3, 2020" +
  link); `.copyright` centered bar (ColorLib credit replaced by Component
  Dock). Preloader (`#overlayer` + `.loader` spinner-border text-primary)
  after the footer.
- **Design tokens extracted from the preview CSS (`css/style.css`, Bootstrap
  5 overrides):**
  - Brand gold: **#d79100** (42 uses) — `.btn-primary` bg/border, `.text-primary`
    (logo dot), `.subheading` color, `.v-line` color, `.btn-outline-primary`
    color/border, `.list-check`/`li:before` marks; hover **#dda226**, border
    hover **#db9c1a**, active **#dfa733**; focus ring
    `rgba(215,145,0,0.25)` / `rgba(183,123,0,0.5)`.
  - Dark slate: **#242f3a** — hero overlay `rgba(36,47,58,0.9)`, icon-row
    heading-3 color; body text **#212529**; muted **#6c757d**; light grays
    **#f8f9fa** (bg-light), **#e9ecef**; light gold accent **#ebc880**.
  - Fonts: **"Playfair Display"** (h1–h5 + `.logo`, serif — 400/700) and
    **"Raleway"** (body, `--bs-font-sans-serif`). Source embeds via
    cf-fonts `@font-face` → use a Google Fonts `<link>` in `index.html`.
  - Buttons: `.btn` — padding **0.375rem 0.75rem**, border-radius **0.25rem**,
    weight 400, 1px border. `.btn-primary` — bg `#d79100`, color `#000`,
    hover `#dda226`. `.btn-outline-primary` — gold border/text, hover fills
    gold with black text. `.btn-primary-hover-outline` — outline on hover
    (footer "Learn more").
  - Hero: padding **15rem 0**, bg image cover + overlay `rgba(36,47,58,0.9)`;
    `.heading` 50px/700 white (34px ≤991px); `.subheading` 12px uppercase
    bold gold, letter-spacing .1rem; `.v-line` 1px × 100px gold (intro:
    1px × 160px).
  - Sections: `.section` vertical rhythm via Bootstrap spacing; `.sec-about-me`
    bg **#f8f9fa**; `.box` white with padding (about-me/why-us/lists);
    `.wrap-icons .heading-3` 18px `#242f3a`; `.custom-media .number` flex
    0 0 60px, margin-right 20px.
  - Footer: light (white) bg, padding 70px 0, font 14px, links black;
    `.footer-subscribe .form-control` height 42px, border 2px
    rgba(0,0,0,0.2), bg none; `.footer-subscribe .btn` icon-only 1.5rem;
    widget h3 with bottom border/heading style.
- **Recreation decisions:** hero/about/gallery photos → seeded picsum
  (`barrister-hero-1`, `barrister-about-1`, `barrister-gallery-1..4`,
  `barrister-services-1` — screen for architecture/office subjects before
  pinning); signature image → styled cursive script text (italic serif) or
  a seeded placeholder — never copy the PNG; court flaticon icons (Court
  Mace, Court Building, Crime, Authority Badge) → `lucide-react` probes
  (e.g. `Scale`, `Landmark`, `Gavel`, `Award`/`BadgeCheck` — probe every
  export with the typeof check); social icons → lucide-react probes
  (Facebook/Twitter/Linkedin/Globe/Play; fall back to inline SVG); fonts
  Playfair Display (400/700) + Raleway via Google Fonts `<link>`; tokens
  `#d79100` / `#dda226` / `#db9c1a` / `#dfa733` / `#242f3a` / `#212529` /
  `#6c757d` / `#f8f9fa` / `#e9ecef` / `#ebc880` in `@theme`.

Barrister lives in `apps/barrister` and uses shared components from
`packages/ui` (Button, ButtonLink, cn).

## Requirements

### Requirement: Header + navigation

The system SHALL render a navbar with the brand logo on the left and a nav
menu on the right; on mobile the menu SHALL be reachable via a burger toggle.

#### Scenario: Header content

- **GIVEN** the Barrister page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the brand "Barrister" on the left in a serif
  display font (Playfair Display) with the trailing dot in brand gold
  (#d79100)
- **AND** the header SHALL show the nav links Home, Attorneys, Our Services,
  About, and Contact Us
- **AND** the Home link SHALL be marked active

#### Scenario: Attorneys dropdown

- **GIVEN** the header is rendered on a wide viewport
- **WHEN** the user hovers or activates the "Attorneys" link
- **THEN** a dropdown SHALL open with menu items (e.g. Menu One, Menu Two)
  and one nested submenu (Dropdown → Sub Menu One/Two/Three)

#### Scenario: Mobile menu

- **GIVEN** the header is rendered on a narrow viewport
- **WHEN** the user activates the burger toggle
- **THEN** the nav links SHALL be reachable via a collapsible drawer with a
  solid background (aria-expanded toggled, tappable)

### Requirement: Hero

The system SHALL render a full-width hero with a photo background, a dark
slate overlay, an uppercase gold kicker, the main headline, a gold-outline
CTA button, and a gold vertical rule accent.

#### Scenario: Hero content

- **GIVEN** the hero is rendered
- **WHEN** the page loads
- **THEN** the hero SHALL fill the width with a photo background (seeded
  picsum) and a dark slate overlay (rgba(36,47,58,0.9))
- **AND** it SHALL show the uppercase gold kicker "Welcome to our site"
  (12px, bold, letter-spaced)
- **AND** it SHALL show the headline "Need a legal help? We are effective law
  agency." in white serif 50px/700 (34px on mobile), centered
- **AND** it SHALL show a gold-outline button labeled "Practice Area" that
  fills gold with black text on hover
- **AND** it SHALL show a thin gold vertical rule (1px × 100px) at the
  bottom of the hero

### Requirement: Intro (promise) section

The system SHALL render a white intro section with a centered promise
heading, two paragraphs, a signature, and a gold vertical rule accent.

#### Scenario: Intro content

- **GIVEN** the intro section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the centered heading "My promise to every
  client is to work tirelessly to obtain a just result."
- **AND** it SHALL show two supporting paragraphs
- **AND** it SHALL show a signature rendered as cursive script text (the
  source uses a signature image — never copy the asset)
- **AND** it SHALL show a thin gold vertical rule (1px × 160px) at the
  bottom-right of the content

### Requirement: About me section

The system SHALL render a light-gray about section with a text block and a
photo side by side.

#### Scenario: About content

- **GIVEN** the about section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL have a light gray (#f8f9fa) background
- **AND** it SHALL show the gold uppercase kicker "About me" and the heading
  "Jeynne M. Campbell" (two lines) on the left, above a white box with a
  paragraph
- **AND** it SHALL show a photo (seeded picsum) on the right
- **AND** the layout SHALL stack on mobile

### Requirement: Why Us heading + icon row

The system SHALL render a "Why Us" heading block followed by a four-column
row of court-themed icon cards.

#### Scenario: Why Us block

- **GIVEN** the Why Us block is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show the gold uppercase kicker "Why Us" with a
  heading paragraph below it

#### Scenario: Icon cards

- **GIVEN** the icon row is rendered
- **WHEN** the page loads
- **THEN** it SHALL render four icon cards in a row (two per row on mobile)
  with a court-themed lucide icon and a dark slate (#242f3a) 18px label
  each: Court Mace, Court Building, Crime, and Authority Badge
- **AND** a short intro paragraph SHALL sit to the left of the row on
  desktop

### Requirement: Gallery slider

The system SHALL render an image gallery slider with dot navigation.

#### Scenario: Gallery slides

- **GIVEN** the gallery slider is rendered
- **WHEN** the page loads
- **THEN** it SHALL show a slider of four distinct images (seeded picsum;
  the source repeats one photo — never ship the repeated filler)
- **AND** dot navigation SHALL be available at the bottom-center to switch
  slides

### Requirement: Why Choose Us section

The system SHALL render a "Why Choose Us" section with a photo and three
numbered feature rows.

#### Scenario: Numbered features

- **GIVEN** the Why Choose Us section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a photo on the left and the heading "Why
  Choose Us" on the right
- **AND** it SHALL render three numbered rows (01, 02, 03) with a bold title
  and a paragraph each: Effective, 99% Cases wins, Expert Lawyers
- **AND** the numbers SHALL be styled in brand gold

### Requirement: List Of Services section

The system SHALL render a "List Of Services" section with a text box, a
photo, and a two-column checklist.

#### Scenario: Services content

- **GIVEN** the List Of Services section is rendered
- **WHEN** the page loads
- **THEN** the section SHALL show a white box with the heading "List Of
  Services" and two paragraphs on the left, and a photo on the right
- **AND** below it SHALL render a two-column checklist (14 short items in
  the source — paraphrase into distinct practice-area items; never ship the
  repeated filler) with gold bullet marks

### Requirement: Footer

The system SHALL render a light footer with four widget columns and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the page loads
- **THEN** the footer SHALL have a light background and show four columns:
  "About Us" with a paragraph and a gold "Learn more" button; "Navigation"
  with two link lists; "Follow us" with a social icon row and a "Subscribe"
  email form with an icon-only submit button; and "Recent Posts" with four
  dated post links
- **AND** the footer-bottom bar SHALL show a copyright line crediting
  Component Dock (https://www.componentdock.com/), with the brand name
  styled in gold (e.g. "Barrister.")

### Requirement: Page composition

The system SHALL compose all sections in a single page with proper landmarks
and a document title.

#### Scenario: Full page render

- **GIVEN** the Barrister app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Header in the banner landmark, all
  sections (Hero, Intro, About me, Why Us, Gallery, Why Choose Us, List Of
  Services) in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Barrister — Law Firm Template"

## Verification checklist

- [ ] `npm run spec:validate` passes
- [ ] 100% coverage on `apps/barrister` (lines/functions/branches/statements)
- [ ] Per-app gate: `npm run verify:app -- barrister` (typecheck + lint + coverage + build)
- [ ] Full gate green in CI on merge (typecheck → lint → test:coverage → build → knip → fallow)
- [ ] Section order matches the preview 1:1; tokens (#d79100, #dda226, #db9c1a, #dfa733, #242f3a, #212529, #6c757d, #f8f9fa, #e9ecef, #ebc880, Playfair Display/Raleway) used via `@theme`
- [ ] No ColorLib assets copied (picsum seeds `barrister-<n>`, Google Fonts links, lucide icons only)
