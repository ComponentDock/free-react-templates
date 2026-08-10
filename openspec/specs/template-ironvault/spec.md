# Template: Ironvault (Fitness Trainer Template)

## Purpose

Ironvault is a single-page personal-fitness-trainer website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Fitnesstrainer" website template design
(source: https://colorlib.com/wp/template/fitnesstrainer/), built under a
DIFFERENT name (Ironvault — iron/strength + a vault of training) per the
monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Fitnesstrainer" — personal fitness trainer /
  gym coach one-page website template. TEMPLATES.md has TWO copies of this
  item (lines 398 and 1845 — mark EVERY copy `[x]` when done).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/fitnesstrainer/`
  (HTTP 200, 25.7 KB HTML; page title "PHILL HUE" — the demo persona's name).
  Master stylesheet `css/style.css` (~139 KB, fully extracted for tokens);
  libs: bootstrap, owl.carousel (testimonial carousel), themify-icons +
  flaticon (icons), slick, gijgo, nice-select, magnific-popup (gallery
  lightbox). Cross-checked against the TEMPLATES.md screenshot
  (`fitnesstrainer-free-template.jpg`, 1200×946, viewed in browser) — all
  match. The demo brands itself "PHILL HUE"; the recreation uses the NEW name
  **Ironvault** (brand purple #4438b7 = iron-forged indigo).
- **Visual design (from DOM + CSS tokens + screenshot):** modern minimalist
  light theme — very light grey/off-white page background with a giant faint
  vertical "trainer" watermark word behind the hero text; top header with
  dumbbell-icon logo ("PHILL HUE") left and a hamburger trigger right that
  opens a FULL-SCREEN off-canvas overlay menu (light `#f0f0f0` bg, huge
  uppercase 30px links); split hero: left column "Hey" eyebrow (purple
  `#8782ce`) + massive condensed uppercase "I AM PHILL HUE" headline (Anton,
  `#1f1b1b`) + lorem paragraph + purple-gradient "Hire me" button, right
  column a warm portrait photo of the trainer (blue shirt, whistle, tablet);
  then client-logo strip, about section (photo + "about me" + signature
  image + outline button), 3 feature cards ("Latest instoment"), a skills
  section with 5 progress bars on a light `#f9f9ff` panel + photo, a CTA
  stat card ("08 Years Expesience", giant light-grey number) + "Want to
  start your next workout with me?" + purple button, a masonry gallery
  ("Latest Player Showcase", 7 images with purple overlay + "Lead Trainer /
  Multi Plus Gym, USA" caption on hover), a testimonial carousel ("Daniel E
  Gilcritst" / "Richard Kellerman"), and a slim copyright footer. Demo copy
  is placeholder lorem — paraphrase into trainer/coaching copy.
- **Section order (1:1, from live demo DOM):**
  1. Header (`header.main_menu.home_menu`, absolute top, z-999, padding
     25px 0): container row with `div.main_menu_iner` (flex, space-between):
     `div.logo` (img `logo.png` — dumbbell icon + wordmark) left; right
     `span.menu-trigger` (3 stacked `<span>` bars, 30px wide hamburger) →
     `div.off-canven-menu` (position: fixed, full-screen, `#f0f0f0`, padding
     0 60px, transition 0.5s; `span.close-icon` with `ti-close` ×; centered
     `ul` links — Home, about, skill, portfolio, blog, single blog,
     elements, contact — text-transform uppercase, font-size 30px,
     line-height 1.8, color `#1f1b1b`).
  2. Banner hero (`section.banner_part`): height 1000px, background-image
     `banner_bg_1.png` cover, position left bottom; `:before` white SVG-wave
     divider at the bottom edge (transparent → #fff). Container
     `div.banner_text` (col-lg-6): `h5` "Hey" (color `#8782ce`,
     Poppins 25px), `h1` "I AM PHILL HUE" (font-size 100px desktop / 40px
     mobile, line-height 1.273, color `#1f1b1b`, uppercase, Anton), lorem
     paragraph, `a.btn_1` "Hire me".
  3. Client logos (`section.client_part section_padding`): section title
     "Some Latest Gym With me" + row of 5 client logo images
     (`img/client_logo/Logo_1..5.png`).
  4. About (`section.about_part padding_bottom`): left `img/about_img_1.png`
     (trainer photo), right: `h2` "about me" + two lorem paragraphs +
     `img/Sign.png` (handwritten signature) + `a.btn_1` "more about me".
  5. Features (`section.feature_part section_padding`): section title + 3×
     `div.single_feature_part` (padding 60px 30px 55px) cards — "Latest
     instoment" h3 + lorem text (icon/image on top).
  6. Skills (`section.skil_part padding_bottom`): "Some Latest Gym With me"
     title + `div.progress-table` (background `#f9f9ff`, padding 15px 0 30px,
     width 800px) with 5 progress bars — Free Hand Workout 90%, Gym Trainer
     85%, Hard Workout 70%, Soft Workout 80%, Foot Ball 90% — plus right
     column `img/skil_img_1.png` (trainer photo).
  7. CTA (`section.cta_area section_padding`): left stat card
     `div.our_expesience` (background `#fafafa` + `single_feature_bg.png`
     top, text-align center): `h2` "08" (font-size 100px, color `#cecece`),
     `p` "Years Expesience" (Anton 15px), "Hire me to get the best"; right
     text "Want to start your next workout with me?" + `a.btn_1` "hire me".
  8. Gallery (`section.gallery_part section_padding`): "Latest Player
     Showcase" title + masonry grid (grid-sizer/grid-item width 25%) with 7
     `div.single_gallery_item` — image + `div.gallery_item_text` caption
     ("Lead Trainer" h4 + "Multi Plus Gym, USA" p, white text, hidden →
     slides up to bottom 50px on hover) + `:after` overlay (opacity 0.5,
     scale 1 on hover — purple tint), `popup` links (magnific lightbox).
  9. Testimonials (`section.review_part padding_bottom`): "Testimonial"
     title + owl.carousel — each slide: `img/client/client_1.png` (avatar),
     name "Daniel E Gilcritst" + tag "Richard Kellerman", lorem quote.
  10. Footer (`footer.footer_part`): padding 30px 0, top border 1px solid
      `#eeeeee`; centered copyright "All rights reserved | This template is
      made with ♥ by Colorlib".

- **Design tokens extracted from `css/style.css` + DOM:**
  - Brand color: **#4438b7** (purple/indigo; 46 uses — primary accent).
    Button gradient: `linear-gradient(to right, #5338b7 0%, #4138b7 50%,
#5338b7 100%)` with `background-size: 200% auto` (hover slides the
    gradient: `background-position: right center`).
  - Supporting accents: **#7a73cc** (section-title underline bar),
    **#8782ce** (hero "Hey" eyebrow), **#1f1b1b** (headings / dark text),
    **#cecece** (giant "08" stat number), **#fafafa** (CTA stat card bg),
    **#f9f9ff** (skills progress-table bg), **#f0e9ff** / **#f0f0f0**
    (light purple / off-canvas menu bg), **#eeeeee** (borders).
  - Fonts: **Anton** (display — h1, stat number, "Years Expesience" p) +
    **Poppins 300/400/500/600/700** (body) via Google Fonts
    (`https://fonts.googleapis.com/css?family=Anton|Poppins:300,400,500,600,700&display=swap`).
  - Buttons: `.btn_1` — purple gradient, padding 18px 50px (mobile 10px
    30px), font-size 15px, uppercase, white text; hover = gradient slide.
    `.btn_2` (secondary/outline) — padding 18px 40px, 1px solid #eeeeee,
    uppercase, letter-spacing 1.5px, hover = fill #4438b7. Both square
    (no border-radius).
  - Section titles: `.section_tittle h2` — font-size 36px, color #1f1b1b,
    with `h2:after` 8px-tall `#7a73cc` underline bar below.
  - Section rhythm: `.section_padding` = 130px top/bottom (80px mobile);
    `.padding_bottom` sections sit directly under the previous one.
  - Hero: 1000px tall, cover image, text left-aligned; white SVG wave
    divider at the hero's bottom edge.
- **Recreation decisions:** photos → seeded picsum placeholders
  (`picsum.photos/seed/ironvault-<n>/<w>/<h>`); icons → lucide-react
  (dumbbell logo icon, hamburger/close, social); Anton + Poppins via Google
  Fonts `<link>`; testimonial carousel with no extra dependencies (simple
  prev/next or dots); masonry gallery via CSS columns/grid (no lib);
  off-canvas overlay menu with focus-visible + Escape-to-close + aria
  attributes per repo conventions.

Ironvault lives in `apps/ironvault` and uses shared components from
`packages/ui` (Button, ButtonLink, cn, etc.).

## Requirements

### Requirement: Header with off-canvas menu

The system SHALL render a fixed top header with the site name "Ironvault"
(logomark + wordmark), a hamburger trigger, and a full-screen overlay
navigation menu with anchor links and a close control.

#### Scenario: Header content

- **GIVEN** the Ironvault page is rendered
- **WHEN** the page loads
- **THEN** the header SHALL show the site name "Ironvault" on the left
- **AND** the header SHALL show a hamburger trigger button (aria-label
  "Open menu") on the right

#### Scenario: Open and close the overlay menu

- **GIVEN** the header is rendered
- **WHEN** the user presses the hamburger trigger
- **THEN** a full-screen overlay menu SHALL appear listing links Home,
  About, Skills, Gallery, Testimonials, and Contact
- **WHEN** the user presses the close button or the Escape key
- **THEN** the overlay menu SHALL close

### Requirement: Hero section

The system SHALL render a full-width hero with an eyebrow, a large uppercase
headline, a blurb, and a primary CTA button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the eyebrow text "Hey" in the brand purple
- **AND** it SHALL show the headline "I AM PHILL HUE" (recreated as an
  Ironvault trainer persona headline) in large uppercase display type
- **AND** it SHALL show a short blurb paragraph
- **AND** it SHALL show a "Hire me" primary button using the purple
  gradient

### Requirement: Client logos strip

The system SHALL render a section titled "Some Latest Gym With me" showing a
row of partner/client logos.

#### Scenario: Client logos

- **GIVEN** the page is rendered
- **WHEN** the client section is displayed
- **THEN** it SHALL show the section heading "Some Latest Gym With me"
- **AND** it SHALL show 5 client logo images in a row

### Requirement: About section

The system SHALL render an about section with a photo, a heading, two
paragraphs, a signature element, and a "more about me" button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is displayed
- **THEN** it SHALL show the heading "about me"
- **AND** it SHALL show two paragraphs of trainer bio copy
- **AND** it SHALL show a signature image and a "more about me" button

### Requirement: Features section

The system SHALL render a features section titled "Latest instoment" with
three feature cards.

#### Scenario: Feature cards

- **GIVEN** the page is rendered
- **WHEN** the features section is displayed
- **THEN** it SHALL show the section heading "Latest instoment" three times
  (one per card)
- **AND** each card SHALL show an image/icon and a short blurb

### Requirement: Skills section

The system SHALL render a skills section with the heading "Some Latest Gym
With me", five labeled progress bars, and a photo.

#### Scenario: Skill progress bars

- **GIVEN** the page is rendered
- **WHEN** the skills section is displayed
- **THEN** it SHALL show five progress bars labeled Free Hand Workout,
  Gym Trainer, Hard Workout, Soft Workout, and Foot Ball
- **AND** each bar SHALL show its percentage (90%, 85%, 70%, 80%, 90%)
- **AND** the section SHALL show a trainer photo on the side

### Requirement: CTA section

The system SHALL render a call-to-action section with an experience stat
card and a workout CTA with button.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show a stat card with "08", "Years Expesience", and
  "Hire me to get the best"
- **AND** it SHALL show the text "Want to start your next workout with me?"
- **AND** it SHALL show a "hire me" primary button

### Requirement: Gallery section

The system SHALL render a masonry gallery titled "Latest Player Showcase"
with seven items that reveal a caption overlay on hover.

#### Scenario: Gallery items

- **GIVEN** the page is rendered
- **WHEN** the gallery section is displayed
- **THEN** it SHALL show the heading "Latest Player Showcase"
- **AND** it SHALL show 7 gallery images
- **WHEN** the user hovers a gallery item
- **THEN** a purple overlay SHALL appear with the caption "Lead Trainer"
  and "Multi Plus Gym, USA"

### Requirement: Testimonials section

The system SHALL render a testimonial carousel titled "Testimonial" with
client quotes that can be navigated.

#### Scenario: Testimonial carousel

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Testimonial"
- **AND** it SHALL show one client quote at a time with an avatar, name,
  and quote text
- **AND** the user SHALL be able to navigate between quotes with
  prev/next controls or dots

### Requirement: Footer

The system SHALL render a slim footer with a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a copyright line ("All rights reserved") with the
  template credit

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Ironvault app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the header in the banner landmark, all
  sections in the main landmark, and the footer in the contentinfo landmark
- **AND** the document title SHALL be "Ironvault — Fitness Trainer Template"

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec
- [ ] `scripts/verify-app.sh ironvault` passes: typecheck + lint + vitest with
      100% coverage + build
- [ ] Section order matches the demo 1:1 (header, hero, clients, about,
      features, skills, cta, gallery, testimonials, footer)
- [ ] Design tokens in `@theme`: brand purple `#4438b7` (+ gradient
      #5338b7→#4138b7, #7a73cc, #8782ce, #1f1b1b, #cecece, #fafafa, #f9f9ff,
      #f0f0f0, #eeeeee)
- [ ] Fonts: Anton (display) + Poppins (body) via Google Fonts
- [ ] Buttons: square purple-gradient primary (`btn_1` style), no radius
- [ ] Header: logo left + hamburger right → full-screen off-canvas overlay
      menu (uppercase 30px links, close control, Escape-to-close)
- [ ] Hero: light background with faint watermark word, purple eyebrow,
      100px uppercase display headline, primary CTA
- [ ] Skills: 5 labeled progress bars with percentages
- [ ] Gallery: 7 items, purple overlay + caption on hover
- [ ] Testimonial carousel without extra dependencies
- [ ] Placeholder images seeded (`picsum.photos/seed/ironvault-<n>/<w>/<h>`);
      no copied assets
- [ ] `TEMPLATES.md` updated by the implementer (`[~]` → `[x]` on BOTH lines
      398 and 1845 + surge URL) — NOT by the prep stream
- [ ] README status table regenerated after deploy (`npm run readme:status`)
