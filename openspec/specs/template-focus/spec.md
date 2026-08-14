# Template: Focus (Photography Portfolio)

## Purpose

Focus is a single-page photography / film production portfolio landing
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Snapshot" website template design
(source: https://colorlib.com/wp/template/snapshot/), built under a DIFFERENT
name (Focus — evoking camera focus and a photographer's craft, fitting the
studio's art-first positioning) per the monorepo naming mandate, with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

New name **focus** is a single lowercase kebab-case word, differs from the
ColorLib source slug (`snapshot`), and collides with nothing in `apps/`,
`openspec/specs/`, or `docs/templates/` (checked 2026-08-15).

## Design reference (replication findings)

- **Original:** ColorLib "Snapshot" — dark, cinematic photography /
  videography studio one-page template (Bootstrap 4, dark theme). Demo
  internal brand: "SNAPSHOT Photographer / San Francisco"; the recreation
  brands itself **Focus**.
- **Preview URL analyzed:** `https://preview.colorlib.com/theme/snapshot/`
  (reachable; DOM fetched + visually inspected via browser).
- **Screenshot:** `snapshot-free-template.jpg` in TEMPLATES.md — dark
  cinematic studio page: near-black background, full-bleed hero photo of a
  film crew behind the camera, centered white headline, right-edge dot
  navigation.
- **Stack of the source:** Bootstrap 4 + jQuery + Owl Carousel + AOS +
  Magnific Popup + ionicons/flaticon. Recreation must NOT copy any of this;
  use the monorepo stack + lucide-react icons + picsum placeholders.

### Section order (1:1, confirmed from preview DOM)

1. Hero (`#home`, `.hero-wrap.js-fullheight`) — full-viewport background
   image (bg-1.jpg) with 50% black overlay, centered: brand line "SNAPSHOT
   Photographer / San Francisco" (→ "FOCUS Photographer / San Francisco"),
   H1 "We Make Something Great", blurb, ghost CTA "Contact Us".
2. About (`#about`, `.ftco-about.img`) — left column: two stacked portrait
   images (about-2.jpg, about-3.jpg) with a framed accent; right column:
   eyebrow "About Us", H2 "Focus is A Creative Direction, Photography
   Agency", two paragraphs, animated counter "0 Project complete", pull
   quote "— Lucy Lee".
3. Services (`#services`, `.ftco-section`) — centered heading "Photography
   Services" + blurb; 3 cards (`.media.block-6`): "Movies & Advertising
   Videos", "Clip & Music Videos", "Short Film Productions" — each with a
   flaticon icon, title, blurb.
4. Gallery (`#work`, `.ftco-section`) — centered heading "Selected Projects"
   - blurb; 12 image tiles (model-1..12.jpg) in a 3-column grid
     (`col-md-4`, no gutters), each a lightbox popup link with caption
     "Nature Beautiful Work".
5. Testimony (`#testimonial`, `.ftco-section.testimony-section`) — centered
   heading "Testimony / Our satisfied customer says"; carousel of
   testimonial cards (avatar + quote + name/role), e.g. "Garreth Smith —
   CEO Founder of Commercial Building".
6. Contact (`#contact`, `.contact-section`) — centered heading "Contact Me"
   - blurb; 4 info boxes (Address, Contact Number, Email Address, Website)
     on dark `#202224` panels; contact form (name/email/subject/message) on
     the same panel color.
7. Footer (`.ftco-footer`) — copyright line, social icon circles; footer
   MUST link https://www.componentdock.com/ ("Component Dock") per monorepo
   rule.

### Fixed right-edge dot navigation (signature feature)

`.navbar` is `position: fixed; top: 50%; right: 50px;
transform: translateY(-50%)` — a vertical dot-menu rail on the right edge:

- `.nav-menu li` min-width 200px, text-align right; each item is a `.dot`
  label ("Home", "About", "Services", "Gallery", "Testimony", "Contact").
- `.dot::before` = 5px circle, `1px solid rgba(255,255,255,0.5)`.
- `.dot::after` = 15px ring, `2px solid #9d8f8f`, scaled to 0 until
  active/hover; `.dot.active::before` fills `#9d8f8f`.
- Mobile: right: 20px.

## Design tokens (from preview stylesheet `css/style.css`)

- **Brand color:** `#9d8f8f` (muted taupe/beige) — links, active nav dots,
  subheadings/eyebrows, button accents, hover states.
- **Backgrounds:** page `#191a1c` (near-black charcoal); hero overlay
  `rgba(0,0,0,.5)` over photo; contact info boxes + form `#202224`;
  footer border-top `1px solid rgba(255,255,255,0.05)`.
- **Text:** headings `#fff`; section H2 `#9da1a5` (muted grey);
  body `rgba(255,255,255,0.9)`; footer text `rgba(255,255,255,0.7)`;
  muted `#9da1a5`.
- **Fonts:** `"Noto Sans", Arial, sans-serif` for body + most headings;
  `"Noto Serif", serif` for serif accents (blockquote/testimonial text).
  Load via Google Fonts `<link>` in index.html (no font files copied).
- **Eyebrow/subheading style:** uppercase, letter-spacing 2–4px, 12–14px,
  weight 600, color `#9d8f8f`.
- **Hero H1:** 62px (desktop), weight normal→700, uppercase; subheading
  line 14px uppercase letter-spacing 2px in brand color.
- **Ghost CTA (hero, `.btn-custom`):** `1px solid rgba(255,255,255,0.2)`,
  padding 15px 20px, uppercase 10px, letter-spacing 1px, weight 700,
  color `#9da1a5`; hover → brand color border/fill.
- **Primary CTA (form):** solid brand-color button (`.btn-primary` themed
  `#9d8f8f`), `py-3 px-5` scale padding.
- **Buttons:** square corners (no radius in source) — keep `rounded-none`
  for the ghost CTA; card icons in plain circles.
- **Section rhythm:** `padding: 7em 0` per section; `.container` max-width
  1200px.
- **Counters:** uppercase 10px, letter-spacing 2px; number bold `#fff`.
- **Gallery:** 3-col grid (`col-md-4`), no gutters, lightbox popup on
  click; captions overlaid at bottom of each tile.

## Requirements

### Requirement: Fixed right-edge dot navigation

The page SHALL show a fixed vertical dot-menu on the right edge (right: 50px, vertically centered) with six labelled dots and scroll-spy.

#### Scenario: Dot rail renders

- **GIVEN** the Focus page is loaded
- **WHEN** the page is scrolled
- **THEN** a fixed vertical dot-menu is visible on the right edge (right: 50px, vertically centered)
- **AND** it lists exactly: Home, About, Services, Gallery, Testimony, Contact
- **AND** each item shows its label text right-aligned with a 5px dot marker

#### Scenario: Active dot tracks the section in view

- **GIVEN** the Focus page is loaded
- **WHEN** the About section scrolls into view
- **THEN** the active section's dot is filled in the brand color (#9d8f8f) with a 15px ring

#### Scenario: Dot click scrolls smoothly

- **GIVEN** the Focus page is loaded
- **WHEN** a label is clicked
- **THEN** the page scrolls smoothly to that section (scroll-spy active state follows)

#### Scenario: Mobile rail position

- **GIVEN** a viewport narrower than 768px
- **THEN** the dot rail hugs the right edge (right: 20px)
- **AND** all six labels remain tappable and scroll to their sections

### Requirement: Hero section

The hero SHALL fill the viewport with a full-bleed background photo and a 50% black overlay, centered brand line, headline, blurb and ghost CTA.

#### Scenario: Hero layout

- **GIVEN** the Focus page is loaded
- **THEN** the hero fills the viewport height with a full-bleed background photo and a 50% black overlay
- **AND** the content is centered: eyebrow "FOCUS · Photographer / San Francisco"
- **AND** an H1 reads "We Make Something Great"
- **AND** a short blurb paragraph is shown beneath the H1
- **AND** a ghost-outline CTA button labeled "Contact Us" is present

#### Scenario: CTA scrolls to contact

- **GIVEN** the hero is displayed
- **WHEN** the CTA is clicked
- **THEN** the page scrolls to the contact section

### Requirement: About section

The About section SHALL show a video-thumb image with a play button on the left and, on the right, the heading, copy, an animated project counter and a serif pull-quote.

#### Scenario: About content

- **GIVEN** the About section is in view
- **THEN** a two-column layout shows a video-thumb image with a play button on the left
- **AND** on the right: H2 "Focus is A Creative Direction, Photography Agency" and a paragraph
- **AND** an animated counter displays "0" with the label "Project complete"
- **AND** a pull-quote byline "— Lucy Lee" appears below the text

#### Scenario: Counter animation

- **GIVEN** the About section scrolls into view
- **WHEN** the counter becomes visible
- **THEN** the project counter animates from 0 to its target value (120)

### Requirement: Services section

The Services section SHALL show a centered heading, three production-service cards and three skill progress bars.

#### Scenario: Services grid

- **GIVEN** the Services section is in view
- **THEN** a centered heading "Photography Services" with a blurb is shown
- **AND** exactly 3 service cards are displayed in a row (stacking on mobile)
- **AND** card 1 is "Movies & Advertising Videos" with an icon and blurb
- **AND** card 2 is "Clip & Music Videos" with an icon and blurb
- **AND** card 3 is "Short Film Productions" with an icon and blurb
- **AND** each card shows an icon, a title, and descriptive text

#### Scenario: Skill progress bars

- **GIVEN** the Services section is in view
- **THEN** progress bars show Creation 90%, Development 80% and Production 75%
- **AND** each bar fills to its percentage value in the brand color

### Requirement: Gallery section

The Gallery section SHALL show a centered heading and a no-gutter grid of 12 photo tiles with overlay captions and a lightbox.

#### Scenario: Gallery grid

- **GIVEN** the Gallery section is in view
- **THEN** a centered heading "Selected Projects" with a blurb is shown
- **AND** a 3-column, no-gutter grid of 12 image tiles is displayed (2-col tablet, 1-col mobile)
- **AND** each tile shows an image with an overlay caption "Nature Beautiful Work"

#### Scenario: Lightbox

- **GIVEN** a gallery tile is clicked
- **WHEN** the lightbox opens showing the full-size image
- **THEN** the lightbox can be closed via the X button or an overlay click

### Requirement: Testimonial carousel

The Testimonial section SHALL show a centered subheading "Testimony" and H2 "Our satisfied customer says" with a carousel of client quotes.

#### Scenario: Testimonial carousel

- **GIVEN** the Testimonial section is in view
- **THEN** a centered heading "Testimony" with the subtitle "Our satisfied customer says" is shown
- **AND** a carousel shows one testimonial slide at a time (5 slides)
- **AND** each slide shows an avatar image, a quote, and a name + role attribution
- **AND** prev/next arrows and dot indicators control the carousel

### Requirement: Contact section

The Contact section SHALL show a centered heading, four dark info panels and a validated message form that confirms submission.

#### Scenario: Contact info boxes

- **GIVEN** the Contact section is in view
- **THEN** a centered heading "Contact Me" with a blurb is shown
- **AND** 4 info boxes on dark panels display: Address, Contact Number, Email Address, Website
- **AND** each box has an icon, a label, and the corresponding value

#### Scenario: Contact form

- **GIVEN** the user fills name, email, subject, and message
- **WHEN** the form is submitted
- **THEN** the form validates required fields (native HTML validation)
- **AND** a success state confirms the message was sent (no backend required)

#### Scenario: Footer

- **GIVEN** the page is scrolled to the bottom
- **THEN** a footer shows the copyright line and social icon circles
- **AND** a link labeled "Component Dock" pointing to https://www.componentdock.com/ is present

## Verification checklist

- [ ] Single page, all 7 sections in source order: Hero → About → Services →
      Gallery → Testimony → Contact → Footer
- [ ] Fixed right-edge dot nav with 6 labels, scroll-spy active dot, smooth
      scroll; mobile right: 20px
- [ ] Brand color `#9d8f8f` used for links/eyebrows/active dots; page bg
      `#191a1c`; contact panels `#202224`
- [ ] Fonts: Noto Sans body + Noto Serif serif accents via Google Fonts
- [ ] Hero: full-viewport bg image + 50% black overlay + centered content +
      ghost "Contact Us" CTA
- [ ] About: stacked portrait images left, copy + animated counter + quote right
- [ ] Services: 3 cards (icon + title + blurb), stacked on mobile
- [ ] Gallery: 12 tiles, 3-col no-gutter grid, lightbox popup, captions
- [ ] Testimonials: carousel with ≥2 slides, arrows + dots, avatar/quote/name
- [ ] Contact: 4 info boxes + validated form; footer with Component Dock link
- [ ] No ColorLib assets copied: picsum.photos seeds, lucide-react icons,
      Google Fonts links only
- [ ] Footer links https://www.componentdock.com/ (required, no ColorLib in
      app code)
- [ ] `apps/focus` package `@free-react-templates/focus`; CNAME
      `focus.free.componentdock.com`; homepage set accordingly
- [ ] 100% coverage tests, per-app gate green (`scripts/verify-app.sh focus`)
