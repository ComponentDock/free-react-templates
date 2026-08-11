# Template: Emblem (Digital Agency / Business)

## Purpose

Emblem is a single-page digital agency website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Noxen" free template (source: https://colorlib.com/wp/template/noxen/),
built under a DIFFERENT name (**Emblem** — a mark/symbol of a brand; a fitting
agency word per the monorepo naming mandate — never reuse the ColorLib source
name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a light, red-accented agency site: an absolute transparent
navbar (logo + topbar address/hours + nav + social) over a full-width photo
hero (split: headline + CTA left, laptop photo in a white-dots frame right),
then a three-card features section, a light skills section (signature block +
four progress bars), a photo-backdrop CTA band, a dark counter band (three
animated counters), a news carousel on a light band, a "More Services" grid of
six circular-icon cards on a photo backdrop, a testimonial row (three white
cards), a second photo-backdrop CTA ("Quality Services"), a white blog section
(three post cards), and a black footer (About Us blurb, newsletter form,
navigation columns, copyright bar). Emblem recreates that structure 1:1 with
matching layout, colors, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Noxen" is FORBIDDEN as the app name.
> **Emblem** is the new, original name — single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-08-11). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Noxen". Listed in TEMPLATES.md under **Bootstrap
  (216)** (line 467) — dup rows also at lines 1112 (Business), 2067 (Landing
  Page), 2535 (Portfolio); all four rows are `- [ ]` and no app ships it yet.
  Free digital-agency template (multi-page demo: index, services, projects,
  about, blog, contact — the index page is the recreation target).
- **Live preview DOM — REACHABLE (verified 2026-08-11):**
  `https://preview.colorlib.com/theme/noxen/` returned HTTP 200 (28KB HTML);
  stylesheets `css/style.css` (24KB) + customized `css/bootstrap.min.css`
  (`.btn-primary`/`.text-primary`/progress-bar recolor to `#dc3545`). Screenshot
  (`noxen-free-template.jpg`, 1200×946, browser-verified 2026-08-11) confirms
  the light aesthetic: white topbar/navbar, dark photo hero with white text,
  red pill CTA, pale-blue feature cards (`#edf7ff`).
- **Visual design (screenshot + live DOM):** light theme with a red accent.
  Screenshot shows a two-row header (logo + address/hours top row, white nav
  row with Home/Services/Projects/About/Blog/Contact + social icons), hero with
  dark photo backdrop and white serif-looking display headline "Digital Agency
  with Excellent Services." (rendered in DM Sans), red pill "ABOUT US" button,
  laptop photo (3D geometric shape on blue) framed by a white-dots pattern,
  pale-blue feature cards. Live DOM/CSS confirm: navbar is absolutely
  positioned over the hero (white 2.7rem logo "Noxen." with red dot, black nav
  links, red hover/active), hero left text column + right image column.
- **Section order (1:1 from live DOM):**
  1. **Header** — `.site-navbar.site-navbar-target` (`.js-sticky-header`,
     sticky w/ `shrink` class on scroll): row 1 = logo "Noxen." left
     (`site-logo`, 2.7rem, white, red `.` in `span.text-primary`) + quick
     contact right (`site-quick-contact`, hidden <lg): address
     (icon-map-marker "34 Street Name, City Name Here, United States") +
     hours (icon-clock-o "Sunday - Friday 8:00AM - 4:00PM / Saturday
     CLOSED"). Row 2 (`menu-wrap`) = mobile toggle (icon-menu, <lg) + nav ul
     (Home [active], Services, Projects, About, Blog, Contact) + social
     icons right (`top-social`: Facebook, Twitter, LinkedIn). Nav links
     black, hover/active `#dc3545`; dropdowns have 2px red border-top.
     Mobile: offcanvas `site-mobile-menu` with collapsible sub-menus.
  2. **Hero cover** (`.ftco-blocks-cover-1` > `.site-section-cover.overlay`,
     bg image `hero_1.jpg` + overlay `rgba(0,0,0,0.3)`, parallax
     data-stellar, vertical padding 9rem) — left column (`col-md-5`): H1
     "Digital Agency with Excellent Services." (3rem white, line-height 1),
     lorem paragraph (18px white), `btn btn-primary` "About Us". Right
     column (`col-md-6 ml-auto`): `white-dots` decorative frame (dot pattern,
     top-left offset) around `img_2.jpg` (laptop/3D art, `img-fluid`).
  3. **Features** (`.site-section`) — centered header (`col-md-7`): H5
     `.subtitle` "Features" (13px uppercase `#ccc`) + H2 "A creative digital
     agency with excellence services" (`#364d59`, weight 300). Row of 3
     `.feature-1` cards (`col-md-6 col-lg-4`): icon (`wrap-icon`, 2rem,
     e.g. icon-home) + H3 (18px) + short paragraph (14px `#9aa3a6`), card
     bg `#edf7ff`, padding 30px. Below: centered `btn btn-primary` "View
     All Services".
  4. **Skills** (`.site-section.bg-light`) — two columns: left (`col-md-6`
     inside a `d-flex align-items-center`): H2 "Your digital partner starts
     here." (h5-sized), lorem paragraph, `signature.svg` image (`.sign`),
     "Mr. John Doe" (bold) + "CEO & Co-Founder". Right (`col-md-6 ml-auto`):
     H2 "Our expertise and skills" + 4 `.progress` bars (rounded-0) with
     `.progress-bar` widths 55% Writing, 85% WordPress, 93% Bootstrap, 83%
     jQuery (track `#e9ecef`, fill red `#dc3545`).
  5. **CTA band 1** (`.site-section.section-3`, bg image `hero_2.jpg` +
     overlay `rgba(0,0,0,0.5)`) — centered (`col-7`): lead "Suscipit libero
     voluptate" (white) + H2 white "Get ready to start your exciting
     journey. Our agency".
  6. **Counters** (`.site-section.counter-wrap`, bg `#222`) — 3 columns
     (`col-md-6 col-lg-4`), each `.counter` (d-flex): icon (`wrap-icon`
     3.2rem white, e.g. icon-building-o) + `.text`: `.number` (2rem
     `#ffd692`, animateNumber count-up) + `.caption` (`rgba(255,255,255,0.7)`):
     14k number of firms, 2k in house crews, 3920k line of codes.
  7. **News & Events** (`.site-section.bg-light`) — centered H3
     `.section-heading` "News & Events" (red, 70×2px underline) + intro
     paragraph; `.nonloop-block-13.owl-carousel` of 4 `.news-1` cards (bg
     images `img_1/2/3.jpg`, height 500px): centered `.text` (H3 title
     link white, `.category` span e.g. "Web Development", short paragraph,
     arrow icon link); hover → overlay `rgba(0,0,0,0.7)` fades in.
     Carousel: autoplay, loop, nav + dots, items 1 / 2 @600 / 3 @1000.
  8. **More Services** (`.site-section.section-3`, bg `hero_2.jpg`) —
     centered H2 white "More Services" (`.section-heading.primary-color-icon`)
     - lead; grid of 6 `.service-1` cards (`col-lg-4 col-md-6`): icon in a
       90px circle (4px solid `#dc3545` border, white icon 3rem) + H3 (20px
       white) + paragraph (`rgba(255,255,255,0.5)`). Icons: icon-build,
       icon-clock-o, icon-drafts, icon-face, icon-phonelink, icon-redeem.
  9. **Testimonials** (`.site-section.bg-light`) — centered H2
     `.section-heading` "Our Top Client Says" + intro; 3 `.testimonial-2`
     cards (`col-lg-4`, white bg, padding 30px, shadow
     `0 5px 30px -5px rgba(0,0,0,0.1)`): 50px round avatar
     (`person_1/2/3.jpg`), blockquote (18px), name (Mike Fisher / Jean
     Stanley / Katie Rose).
  10. **Quality Services CTA** (`.site-section.section-3`, bg `hero_1.jpg`)
      — centered H2 white "Quality Services" + lead + `btn btn-primary`
      "Contact Us Now".
  11. **Blog** (`.site-section.bg-white`) — centered H2 `.section-heading`
      "Our Blog" + intro; 3 `.post-entry-1` cards (`col-lg-4 col-md-6`):
      image, `.post-entry-1-contents` (white box, padding 20px): meta line
      ("July 17, 2019" · "by Admin", `#ccc`), H2 title (22px, black, hover
      red), excerpt paragraph.
  12. **Footer** (`.site-footer`, bg `#000`, padding 4em/8em) — row: col
      `col-lg-4` About Us (`footer-heading` + blurb), col `col-lg-4`
      Newsletter (`footer-heading` + form: email input `form-control`
      55px + `btn btn-primary` "Send"), col `col-lg-8 ml-auto` > inner row:
      `col-lg-4 ml-auto` + `col-lg-4` Navigation (two link lists: About Us,
      Testimonials, Terms of Service, Privacy, Contact Us). Bottom bar
      (`border-top` `rgba(255,255,255,0.1)`): copyright "© <year> All
      rights reserved | This template is made with ♥ by Colorlib" (use
      Emblem + repo attribution instead).
- **JS behaviors (original):** sticky navbar with `shrink` on scroll
  (jquery.sticky); parallax hero/bands (Stellar); news owl-carousel (autoplay,
  nav/dots, responsive 1/2/3); counters count up on view (animateNumber);
  AOS scroll-reveal animations; offcanvas mobile menu with collapsible
  sub-menus; Fancybox lightbox. Recreate: sticky header via scroll listener
  (or `position:sticky` per repo conventions), carousel via React state +
  interval (or a minimal track), counter count-up with IntersectionObserver,
  hover transitions in CSS. All forms are presentational (no backend).

## Design tokens (verified from live stylesheets `css/style.css` + customized `css/bootstrap.min.css`)

- **Brand color:** `#dc3545` (red) — `.btn-primary` bg/border, `.text-primary`
  (logo dot), active nav link + hover, `.section-heading` color + underline,
  service icon circle border (4px), `.progress-bar` fill, form-control focus
  border, post title hover, dropdown border-top. (Bootstrap primary was
  recompiled to this red; do NOT use Bootstrap blue.)
- **Text:** body `#364d59` (dark slate blue), weight 300, line-height 1.7;
  headings same `#364d59` weight 300; hero H1 white; feature card body
  `#9aa3a6` (14px); blog meta `#ccc`; counter caption `rgba(255,255,255,0.7)`;
  service card body `rgba(255,255,255,0.5)`; footer links
  `rgba(255,255,255,0.5)` (hover white).
- **Fonts:** **DM Sans** (body + headings, weights 300/400/700) — loaded via
  Google Fonts `<link>` in `index.html` (original uses cf-fonts @font-face
  preload + font stack `"DM Sans", ...sans-serif`).
- **Buttons (`.btn`):** radius **30px** (pill), `text-transform: uppercase`,
  `letter-spacing: .2rem`, `font-size: .8rem`, padding 10px 20px; primary =
  solid `#dc3545`, white text, no shadow on focus.
- **Section headings (`.section-heading`):** `#dc3545`, 2.5rem (2rem mobile),
  padding-bottom 30px + 2px × 70px underline after (section bg color).
- **Cards / section backgrounds:**
  - feature-1: bg `#edf7ff`, padding 30px, icon 2rem.
  - skills section: `bg-light` `#f8f9fa`; progress track `#e9ecef` (radius
    .25rem, rounded-0 in markup), fill red.
  - CTA bands (section-3): photo bg + overlay `rgba(0,0,0,0.5)`, white text.
  - counter-wrap: bg `#222`; numbers `#ffd692` (2rem), icons white 3.2rem.
  - testimonial-2: white, padding 30px, shadow `0 5px 30px -5px
rgba(0,0,0,0.1)`; avatar 50px round.
  - news-1: bg image, height 500px, hover overlay `rgba(0,0,0,0.7)`.
  - footer: bg `#000`; headings white; links `rgba(255,255,255,0.5)`.
- **Forms:** `.form-control` height 55px, white bg, focus border `#dc3545`.
- **Spacing:** `.site-section` padding 2.5em / 5em (≥768px); hero vertical
  padding 9rem; footer 4em / 8em.

## Requirements

### Requirement: Sticky header with topbar, nav and social icons

The system SHALL render the reference header: logo left, quick-contact info
(address + hours) right, a nav row (Home, Services, Projects, About, Blog,
Contact) with social icons, and a mobile toggle; the header SHALL become
sticky with a shrink effect on scroll.

#### Scenario: Header layout

- **GIVEN** the Emblem page is rendered
- **WHEN** the header is displayed
- **THEN** row 1 SHALL show the logo "Emblem." (white wordmark + red dot)
  on the left and the quick-contact block (address + opening hours) on the
  right (hidden below `lg` per the reference's `d-none d-lg-flex`)
- **AND** row 2 SHALL show nav links Home (active), Services, Projects,
  About, Blog, Contact and social icons (Facebook, Twitter, LinkedIn) on
  the right

#### Scenario: Sticky behavior

- **GIVEN** the header is displayed
- **WHEN** the user scrolls past the top of the page
- **THEN** the header SHALL remain visible (sticky) and gain a shrink /
  background treatment per the reference's `js-sticky-header` + `shrink`
  behavior

#### Scenario: Mobile nav

- **GIVEN** the Emblem page is rendered on a viewport <992px
- **WHEN** the header is displayed
- **THEN** the nav links SHALL collapse behind a toggle button
  (`aria-expanded`, offcanvas menu per repo accessibility conventions)
  and the quick-contact block SHALL be hidden

### Requirement: Hero cover with split content

The system SHALL render a full-width photo hero with a dark overlay, a left
text column (H1 + paragraph + primary CTA) and a right image column framed
by a decorative dot pattern.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** the user views the top of the page
- **THEN** the hero SHALL show a cover photo backdrop with a dark overlay
  (rgba(0,0,0,0.3)-like) and a large white H1 (e.g. "Digital agency with
  excellent services." — paraphrase, same kind of content)
- **AND** a short white paragraph and a solid red pill "About Us" button
  SHALL follow below the H1
- **AND** a seeded placeholder photo SHALL sit on the right inside a
  white-dots decorative frame (dotted pattern offset top-left)

### Requirement: Features section with three cards

The system SHALL render a "Features" section: subtitle + H2 header, three
pale-blue feature cards (icon + title + blurb), and a centered "View All
Services" primary button.

#### Scenario: Features content

- **GIVEN** the features section is displayed
- **WHEN** the user scrolls to it
- **THEN** an uppercase small subtitle "Features" and an H2 (e.g. "A
  creative digital agency with excellent services") SHALL be centered above
  the cards
- **AND** three cards SHALL follow, each with an icon, an H3 title and a
  short paragraph on a `#edf7ff` background
- **AND** a centered solid red pill "View All Services" button SHALL sit
  below the cards

### Requirement: Skills section with progress bars

The system SHALL render a light section with a signature block (heading,
paragraph, signature image, name + role) on the left and four labeled
progress bars on the right.

#### Scenario: Skills content

- **GIVEN** the skills section is displayed
- **WHEN** the user scrolls to it
- **THEN** the left column SHALL show an H2 (e.g. "Your digital partner
  starts here."), a paragraph, a signature-style image and a name + role
  line ("Mr. John Doe" / "CEO & Co-Founder" — paraphrase)
- **AND** the right column SHALL show an H2 "Our expertise and skills"
  and four progress bars labeled Writing (55%), WordPress (85%), Bootstrap
  (93%), jQuery (83%) with red fills

### Requirement: Photo-backdrop CTA band

The system SHALL render a full-width CTA band on a photo backdrop with a
dark overlay, a lead line and a white H2.

#### Scenario: CTA band content

- **GIVEN** the CTA band is displayed
- **WHEN** the user scrolls to it
- **THEN** the band SHALL show a photo backdrop with a dark overlay
  (rgba(0,0,0,0.5)-like), a small lead line and a large white H2 (e.g.
  "Get ready to start your exciting journey with our agency")

### Requirement: Counter band

The system SHALL render a dark counter band (`#222`) with three counters,
each an icon + animated number + caption.

#### Scenario: Counter content

- **GIVEN** the counter band is displayed
- **WHEN** the user scrolls to it
- **THEN** three counters SHALL show an icon, a large number (14k firms,
  2k in-house crews, 3920k lines of code — paraphrase) in `#ffd692` and a
  caption in translucent white
- **AND** the numbers SHALL count up when scrolled into view
  (IntersectionObserver + state; the original uses animateNumber)

### Requirement: News carousel

The system SHALL render a "News & Events" section on a light background with
an autoplaying carousel of image cards that reveal an overlay caption on
hover.

#### Scenario: News section content

- **GIVEN** the news section is displayed
- **WHEN** the user scrolls to it
- **THEN** a red section heading "News & Events" with underline and an intro
  paragraph SHALL be centered
- **AND** a carousel SHALL show tall image cards (500px per the reference)
  with a centered caption: title link, category label (e.g. "Web
  Development"), short paragraph and an arrow icon
- **AND** the carousel SHALL auto-rotate with prev/next + dots and show
  1 / 2 / 3 items at mobile / tablet / desktop widths (reference owl config)

#### Scenario: News card hover

- **GIVEN** a news card is displayed
- **WHEN** the user hovers or focuses the card
- **THEN** a dark overlay (rgba(0,0,0,0.7)-like) SHALL fade in behind the
  caption and the caption SHALL become fully visible
- **AND** the reveal SHALL be keyboard-accessible (focus-within)

### Requirement: More Services grid

The system SHALL render a "More Services" section on a photo backdrop with
six centered service cards, each with a circular red-bordered icon, a white
title and a translucent-white paragraph.

#### Scenario: Services content

- **GIVEN** the services section is displayed
- **WHEN** the user scrolls to it
- **THEN** a white section heading "More Services" and a lead paragraph
  SHALL be centered on the photo backdrop
- **AND** six cards SHALL follow in a 3-column grid, each with a 90px
  circular icon (4px `#dc3545` border, white icon), H3 title (20px white)
  and short paragraph (rgba(255,255,255,0.5))

### Requirement: Testimonials

The system SHALL render a testimonials section on a light background with
three white cards (round avatar, quote, name).

#### Scenario: Testimonial cards

- **GIVEN** the testimonials section is displayed
- **WHEN** the user scrolls to it
- **THEN** a red section heading "Our Top Client Says" with intro SHALL be
  centered
- **AND** three white cards SHALL follow, each with a 50px round avatar
  image, an 18px quote and a name (e.g. Mike Fisher, Jean Stanley, Katie
  Rose — paraphrase)
- **AND** the cards SHALL cast the reference soft shadow
  (0 5px 30px -5px rgba(0,0,0,0.1))

### Requirement: Second CTA band (Quality Services)

The system SHALL render a second photo-backdrop CTA band with heading, lead
and a "Contact Us Now" primary button.

#### Scenario: Quality Services CTA

- **GIVEN** the second CTA band is displayed
- **WHEN** the user scrolls to it
- **THEN** a white section heading "Quality Services", a lead paragraph and
  a solid red pill "Contact Us Now" button SHALL be centered on the photo
  backdrop

### Requirement: Blog section

The system SHALL render a white blog section with three post cards (image,
meta line, title, excerpt).

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the user scrolls to it
- **THEN** a red section heading "Our Blog" with intro SHALL be centered
- **AND** three cards SHALL follow, each with an image, a meta line
  (date + "by Author", `#ccc`), an H2 title (22px, black, hover red) and an
  excerpt paragraph on a white content box

### Requirement: Footer

The system SHALL render a black footer with an About Us column, a
Newsletter form (email input + Send button), two Navigation link columns,
and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Emblem page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** the footer SHALL show the About Us column (heading + blurb), the
  Newsletter column with an email input and a solid red "Send" button, and
  two Navigation link lists (About Us, Testimonials, Terms of Service,
  Privacy, Contact Us)
- **AND** a copyright bar SHALL sit at the bottom (border-top) with the
  site name + year

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an invalid/empty email
- **THEN** the form SHALL show inline validation and SHALL NOT submit
  (presentational form — no backend calls)

### Requirement: Responsive behavior

The system SHALL adapt the hero, grids, carousel and paddings for mobile
viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Emblem page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the hero H1 SHALL scale down (2rem per reference) and remain
  readable over the backdrop, the hero image SHALL stack below the text
  column, and section paddings SHALL reduce (2.5em per reference)
- **AND** all grids (features, services, testimonials, blog, counters)
  SHALL collapse to one column and the news carousel SHALL show one item

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-emblem`
- [ ] `scripts/verify-app.sh emblem` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): header (logo + topbar
      address/hours + nav + social, sticky/shrink on scroll, mobile toggle)
      → hero cover (photo bg + dark overlay, H1 + paragraph + About Us pill,
      white-dots framed photo right) → Features (subtitle + H2 + 3
      `#edf7ff` cards + View All Services) → Skills (signature block + 4
      progress bars) → CTA band 1 (lead + white H2 on photo bg) → Counters
      (#222 band, 3 animated counters) → News & Events (carousel, 4 image
      cards, hover overlay) → More Services (6 circular-icon cards on photo
      bg) → Testimonials (3 white cards) → Quality Services CTA (Contact Us
      Now) → Blog (3 post cards) → Footer (About Us / Newsletter form /
      Navigation ×2 / copyright)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#dc3545` brand,
      `#364d59` text, `#edf7ff` feature cards, `#222` counter band, `#000`
      footer, `#ffd692` counter numbers, `#f8f9fa` light sections; pill
      buttons radius 30px uppercase letter-spacing .2rem
- [ ] Fonts: DM Sans (300/400/700) via Google Fonts `<link>` in
      `index.html`, title "Emblem — Digital Agency Template"
- [ ] Photos = seeded picsum (`emblem-hero`, `emblem-laptop`,
      `emblem-signature`-style, `emblem-news-<n>`, `emblem-blog-<n>`,
      `emblem-avatar-<n>`, backdrop seeds) — screen seeds for subject
      (laptop/3D art hero image, office/team backdrops) per repo seed
      screening; icons from lucide-react — no copied assets
- [ ] Forms presentational with inline validation; no backend calls
- [ ] Mobile nav accessible (`aria-expanded` on toggle); carousel accessible
      (controls + `aria-live`); hover overlays keyboard-reachable
      (focus-within)
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark ALL FOUR "Noxen" rows: line 467
      Bootstrap, line 1112 Business, line 2067 Landing Page, line 2535
      Portfolio)
