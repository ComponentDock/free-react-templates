# Template: Expedition (Travel & Tourism)

> **SUPERSEDED** — this spec duplicates ColorLib "Trips", which already
> shipped as **Trek** (PR #454, https://trek.free.componentdock.com).
> Do NOT implement — delete on next cleanup.

## Purpose

Expedition is a single-page travel/trips landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Trips" template design (source:
https://colorlib.com/wp/template/trips/), built under a DIFFERENT name
("Expedition" — an organized journey, matching the adventure-travel theme) per
the monorepo naming mandate, with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript. The page is a full landing page: white navbar,
full-screen photo hero with a circular video play button, an "Our Story" split
band, a "Your Journey Starts Here" trip-card grid with gold price pills, a
team section, a testimonial carousel, a blog grid, a gold-tinted photo CTA
band, and a GOLD (#efba6c) multi-column footer with Instagram thumbnails,
quick links, and a newsletter form.

## Design reference (replication findings)

- **Original:** ColorLib "Trips". Source slug is `trips` and the demo's theme
  folder is also `trips` (no hyphen, no caveat). TEMPLATES.md has **THREE
  duplicate rows** for Trips: line 520 under **## Bootstrap (216)**, line 1209
  under **## Business (365)**, and line 3012 under **## Travel (44)** — ALL
  THREE must be marked `[x]` with the same surge URL when done.
- **Preview URL:** `https://preview.colorlib.com/theme/trips/` — HTTP 200,
  ~25 KB HTML (verified 2026-08-15). Master stylesheet `css/style.css` (~24
  KB) is relative to the `trips/` path. libs: bootstrap 4 (custom
  `bootstrap.min.css`), owl.carousel (testimonials), jquery.fancybox (video
  lightbox), aos (scroll animations), bootstrap-datepicker (unused on this
  page), icon fonts icomoon + flaticon. Google Font **Work Sans** (the
  template's own rules: body `font-weight: 300`, headings weight 900).
  Cross-checked against the TEMPLATES.md screenshot
  (`trips-free-template.jpg`, 1200×946, browser-viewed) — consistent: white
  navbar with an orange-triangle logo + "TRIPS" wordmark, hikers-on-a-rock
  hero photo under a light dark overlay, white "Let's Enjoy The Wonders of
  Nature" headline left-aligned, circular play button + "Watch the video",
  white "Our Story" split section with a giant "STORY" watermark backdrop and
  an orange "DISCOVER STORY" eyebrow.
- **Visual design (from DOM + CSS tokens + screenshot):** modern, minimal,
  nature-inspired travel landing. White navbar (logo image left, links right,
  active link gold). Full-screen hero photo with `rgba(0,0,0,0.3)` overlay,
  white 900-weight h1, lorem paragraph, 60px circular play button (white
  border, translucent white fill) + "Watch the video". White sections with a
  recurring heading pattern: a giant uppercase watermark word (5rem, 900,
  `#efefef`, positioned behind) + a small gold uppercase eyebrow + a black
  h2. Trip cards: photo with a bottom dark gradient, gold category pill,
  white title, white price. Team cards: photo, name, "Staff" role, blurb,
  circular social icons. Testimonial carousel with gold quote marks. Blog
  cards with date/author meta. CTA band: fixed-attachment photo under a
  `rgba(239,186,108,0.4)` gold overlay, white heading + gold button. Footer
  is SOLID GOLD `#efba6c` with white links, Instagram thumbnails, and a
  newsletter email form.
- **Section order (1:1, from live preview DOM):**
  1. **Navbar** — white bar, logo image (`images/logo.png`, 73px) left, nav
     right: Home (active, gold), About, Trips, Blog, Contact; mobile
     hamburger menu with the same links.
  2. **Hero (ftco-blocks-cover-1 → site-section-cover overlay)** —
     full-screen `hero_1.jpg` photo + `rgba(0,0,0,0.3)` overlay; left-aligned:
     `<h1>` (white, 900, 3rem) "Let's Enjoy The Wonders of Nature", lorem
     paragraph, circular `.play-btn-39282` (60px, 1px white border, bg
     rgba(255,255,255,0.1), white play icon; hover → white bg + black icon)
     - link "Watch the video" (href https://vimeo.com/191947042).
  3. **Our Story** (`site-section py-5`) — two columns. Left: heading block
     — watermark "Story", eyebrow "Discover Story" (`.subtitle-39191`), h2
     "Our Story", two lorem paragraphs. Right: `traveler.jpg` image.
  4. **Journey — "Your Journey Starts Here"** — centered heading block
     (watermark "Journey", h2 "Your Journey Starts Here"); grid of **6**
     `.listing-item` cards (`img_1.jpg`..`img_6.jpg`): photo with bottom
     gradient overlay (transparent → rgba(0,0,0,0.65)), centered content:
     gold category pill (12px, uppercase, letter-spacing .2em, padding 5px
     30px, radius 30px), h2 white 18px title, white price span — prices
     `$200.00` / `$390.00` / `$180.00` / `$600.00` / `$330.00` / `$450.00`;
     titles: Dignissimos debitis, Consectetur adipisicing, Temporibus
     aperiam, Expedita fugiat, Consectetur adipisicing, Consectetur Amet.
  5. **Our Team** — heading block: watermark "Our Team", eyebrow "Amazing
     Staff", h2 "Meet Our Team"; **3** `.person-29191` cards
     (`person_1..3.jpg`): photo, h2 name (John Doe, Jean Doe, Claire
     Dormey), "Staff" role, lorem blurb, 3 circular social icons
     (facebook, twitter, instagram).
  6. **Testimonials** — heading block: watermark "Testimonials", eyebrow
     "Testimony", h2 "Happy Customers"; owl carousel (4 slides, 2 items
     each) of `.testimonial-39191` items: quote paragraph (gold opening
     quote mark) + attribution "— John Doe".
  7. **Our Blog** — heading block: watermark "Blog", eyebrow "Updates", h2
     "Our Blog"; **3** `.post-entry-1` cards (`img_1..3.jpg`): title "Lorem
     ipsum dolor sit amet", meta "July 17, 2019 by Admin", excerpt.
  8. **CTA band** (`site-section bg-image overlay`) — fixed-attachment
     background photo + `rgba(239,186,108,0.4)` gold overlay; centered:
     h2 white bold "Join and Trip With Us", white lorem paragraph, gold
     `.btn-primary` "Get In Touch".
  9. **Footer** (`site-footer`) — SOLID GOLD **#efba6c** background; row of
     three columns: **Instagram** (heading + 6 thumbnails `insta_1..6.jpg`
     in a 2×3 grid), **Quick Links** (About Us, Testimonials, Terms of
     Service, Privacy, Contact Us), **Newsletter** (heading + lorem + form:
     email input `.form-control` (height 55px, white bg, gold focus border)
     - gold submit "Send"). Bottom copyright bar with
       `border-top: 1px solid rgba(255,255,255,0.1)` — source credits
       Colorlib; recreation replaces it with the mandated Component Dock link
       (https://www.componentdock.com/).
- **Design tokens extracted from `css/style.css` + `bootstrap.min.css` + DOM:**
  - Font: **"Work Sans", sans-serif** (Google Fonts; body weight 300,
    line-height 1.7, headings weight 900). Load 300–900 via Google Fonts
    `<link>` in index.html.
  - Brand gold/orange **#efba6c** — navbar active link, `.subtitle-39191`
    eyebrows, category pills, `.btn-primary` bg + border, form-control focus
    border, owl active dot, footer bg (solid), CTA overlay tint.
  - Text: body **#364d59** (weight 300), headings **#000** (weight 900).
  - Section backgrounds: white (story, journey, team, testimonials, blog),
    solid **#efba6c** (footer), hero/CTA photos + overlays
    (hero rgba(0,0,0,0.3); CTA rgba(239,186,108,0.4)).
  - Heading block pattern `.heading-39101`: watermark backdrop word —
    uppercase, weight 900, `font-size: 5rem`, `color: #efefef`,
    `line-height: 1`, `top: -20%`, `z-index: -1` (absolute behind the
    h2); eyebrow `.subtitle-39191`: #efba6c, uppercase, 14px, bold;
    h2: #000, 900.
  - Buttons `.btn`: font-size .8rem, uppercase, letter-spacing .2rem,
    padding 10px 20px, no shadow/outline on focus. `.btn-primary`:
    `#efba6c` bg + border (bootstrap 4 custom build).
  - Trip card `.listing-item`: image scale(1.05) → scale(1) on hover,
    bottom gradient `linear-gradient(to bottom, rgba(255,255,255,0) 0%,
rgba(255,255,255,0.31) 47%, rgba(0,0,0,0.65) 100%)`; content
    absolutely positioned bottom-center (bottom 20px); category pill 12px
    uppercase letter-spacing .2em padding 5px 30px radius 30px; h2 18px
    white; price span white.
  - Play button `.play-btn-39282`: 60×60, border-radius 50%, 1px solid
    #fff, bg rgba(255,255,255,0.1); hover bg #fff + black icon.
  - Form `.form-control`: height 55px, bg #fff, focus border-color #efba6c.
  - Section rhythm `.site-section`: padding 7rem 0 (desktop) / 3rem 0
    (mobile); `.site-section.py-5` variant for the story band.
  - Footer: `.site-footer` padding 4em 0 (8em md), bg #efba6c,
    `.footer-heading` 16px, links white, copyright bar border-top
    rgba(255,255,255,0.1).
- **Recreation decisions:** no copied assets — hero/story/CTA photos, trip
  images, team portraits, blog images, and Instagram thumbnails become
  `https://picsum.photos/seed/expedition-<n>/<w>/<h>` placeholders (seed
  nature/travel-appropriate subjects, verify before pinning); icomoon /
  flaticon icons → lucide-react (Play, Facebook/Twitter/Instagram as inline
  SVG paths — lucide removed brand glyphs; verify every export with the
  typeof probe); Work Sans via Google Fonts; the testimonial carousel can be
  a static grid in the React recreation (keep all 4×2 quotes visible unless
  an implementer chooses a light carousel); fancybox video → a modal or a
  simple link to the vimeo URL; newsletter form validated (email required,
  per-field error, simulated success) per repo error-handling conventions;
  every footer MUST link https://www.componentdock.com/ ("Component Dock") —
  this replaces the source's Colorlib credit line.

Expedition lives in `apps/expedition` and uses shared components from
`packages/ui` (Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Navbar

The system SHALL render a white navbar with the brand logo on the left and
the primary navigation links on the right.

#### Scenario: Navbar with links

- **GIVEN** the Expedition page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the brand/logo on the left
- **AND** the navbar SHALL show the links Home, About, Trips, Blog, Contact
  (desktop; hamburger menu on mobile with the same links)
- **AND** the Home link SHALL be marked active in the brand color (#efba6c)

### Requirement: Hero with video play button

The system SHALL render a full-screen photo hero with a dark overlay, a white
headline, a paragraph, and a circular "Watch the video" play button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the user views the hero
- **THEN** the hero SHALL cover the full viewport with a background photo
  under a light dark overlay (rgba(0,0,0,0.3))
- **AND** the hero SHALL show the white 900-weight heading "Let's Enjoy The
  Wonders of Nature", a short paragraph, and a circular play button with the
  label "Watch the video"

#### Scenario: Video interaction

- **GIVEN** the play button is displayed
- **WHEN** the user activates it
- **THEN** the system SHALL open the promotional video (fancybox lightbox in
  the source, href https://vimeo.com/191947042; recreation may open a modal
  or link to the vimeo URL)

### Requirement: Our Story band

The system SHALL render a split section with a heading block (watermark,
eyebrow, h2, paragraphs) on one side and an image on the other.

#### Scenario: Story content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the story section
- **THEN** the section SHALL show the giant "Story" watermark backdrop
- **AND** the section SHALL show the gold uppercase eyebrow "Discover Story"
- **AND** the section SHALL show the heading "Our Story" with two short
  paragraphs
- **AND** the section SHALL show a traveler image on the opposite side

### Requirement: Journey trip cards

The system SHALL render a grid of six trip cards, each with a photo, a gold
category pill, a title, and a price.

#### Scenario: Trip grid

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the journey section
- **THEN** the section SHALL show the heading "Your Journey Starts Here"
- **AND** the section SHALL show exactly six trip cards, each with a photo,
  a gold pill, a white title, and a white price (e.g. "$200.00")
- **AND** each card SHALL show a price from the source set ($200.00,
  $390.00, $180.00, $600.00, $330.00, $450.00)

### Requirement: Team section

The system SHALL render a team section with a heading block and three staff
cards (photo, name, role, blurb, social icons).

#### Scenario: Team cards

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the team section
- **THEN** the section SHALL show the heading "Meet Our Team" with the
  eyebrow "Amazing Staff"
- **AND** the section SHALL show three cards with names (John Doe, Jean Doe,
  Claire Dormey), the role "Staff", a blurb, and three social icons each

### Requirement: Testimonials

The system SHALL render a testimonials section with a heading block and
review quotes with attributions.

#### Scenario: Reviews content

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the testimonials section
- **THEN** the section SHALL show the heading "Happy Customers" with the
  eyebrow "Testimony"
- **AND** the section SHALL show testimonial quotes, each with the
  attribution "— John Doe" (source carousel has 4 slides × 2 items; a static
  grid of all quotes is acceptable)

### Requirement: Blog grid

The system SHALL render a blog section with a heading block and three article
cards (image, title, date/author meta, excerpt).

#### Scenario: Blog cards

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the blog section
- **THEN** the section SHALL show the heading "Our Blog" with the eyebrow
  "Updates"
- **AND** the section SHALL show three article cards, each with a photo, a
  title, a meta line ("July 17, 2019 by Admin"), and an excerpt

### Requirement: Call-to-action band

The system SHALL render a full-width photo band with a gold-tinted overlay,
a centered white heading, paragraph, and a gold button.

#### Scenario: CTA band

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the CTA band
- **THEN** the band SHALL show a background photo (fixed attachment in the
  source) under a gold overlay (rgba(239,186,108,0.4))
- **AND** the band SHALL show the white heading "Join and Trip With Us", a
  short paragraph, and a gold button "Get In Touch"

### Requirement: Footer

The system SHALL render a gold multi-column footer with Instagram
thumbnails, quick links, a newsletter signup, and a copyright bar linking to
Component Dock.

#### Scenario: Footer columns and newsletter

- **GIVEN** the page is rendered
- **WHEN** the user scrolls to the footer
- **THEN** the footer SHALL have a solid `#efba6c` background with columns
  Instagram (6 thumbnails in a grid), Quick Links (About Us, Testimonials,
  Terms of Service, Privacy, Contact Us), and Newsletter
- **AND** the newsletter column SHALL show a description and an email input
  with a "Send" submit button
- **AND** the newsletter form SHALL validate the email (required, valid
  format) and show a success message on valid submit

#### Scenario: Component Dock link

- **GIVEN** the footer is rendered
- **WHEN** the user views the copyright bar
- **THEN** the bar SHALL contain a link to https://www.componentdock.com/
  ("Component Dock") — the repo mandate for every template's footer

### Requirement: Page composition

The system SHALL compose all sections in the source order in a single page
with a main landmark and a document title.

#### Scenario: Full page render

- **GIVEN** the Expedition app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL show the sections in this order: navbar, hero
  (with play button), story, journey, team, testimonials, blog, CTA, footer
- **AND** the page SHALL expose the content in a main landmark
- **AND** the document title SHALL be "Expedition — Travel & Tourism
  Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh expedition` passes: typecheck + lint + vitest
      with 100% coverage + build
- [ ] Section order matches the preview 1:1 (navbar → hero → story → journey
      → team → testimonials → blog → CTA → footer)
- [ ] Design tokens in `@theme`: brand `#efba6c`, body text `#364d59`,
      headings `#000`, watermark `#efefef`, overlays rgba(0,0,0,0.3) /
      rgba(239,186,108,0.4)
- [ ] Font: Work Sans (300–900) via Google Fonts
- [ ] Hero: full-screen photo, dark overlay, "Let's Enjoy The Wonders of
      Nature", paragraph, circular play button + "Watch the video"
- [ ] Heading block pattern everywhere: 5rem watermark + gold eyebrow +
      black 900 h2
- [ ] Six trip cards with gold pill, white title, white price
- [ ] Three team cards (John Doe, Jean Doe, Claire Dormey) + social icons
- [ ] Testimonial quotes with "— John Doe" attributions
- [ ] Three blog cards with "July 17, 2019 by Admin" meta
- [ ] CTA band with gold overlay (rgba(239,186,108,0.4)), "Join and Trip
      With Us", "Get In Touch"
- [ ] Footer `#efba6c`: Instagram thumbnails + Quick Links + newsletter
      (validated email, success state) + copyright bar linking
      https://www.componentdock.com/
- [ ] Icons: lucide-react only (verify every import with the typeof probe;
      brand/social icons as inline SVG paths — lucide removed brand glyphs)
- [ ] No ColorLib references in any app file (provenance only here,
      TEMPLATES.md, and the PR); no copied assets (picsum placeholders)
- [ ] `TEMPLATES.md` lines 520, 1209 AND 3012 (THREE duplicate rows) marked
      `[x]` with the same surge URL by the implementer — NOT by the prep
      stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
