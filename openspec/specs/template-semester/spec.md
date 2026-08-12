# Template: Semester (Education / Online Learning)

## Purpose

Semester is a single-page online-learning platform landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Courses" education website template design (see TEMPLATES.md,
Education category, line 1626 — dup row also at line 366 under Bootstrap),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Courses" — education / online-learning platform
  landing page (page title "Courses | Education"; source:
  https://colorlib.com/wp/template/courses/). Structure: transparent header
  over a full-screen gradient hero with vector illustration, a 3-icon
  services strip, a featured-courses carousel (4 cards with rating + price),
  a split "learn new skills" section with checkmark list and video play
  button, an 8-tile subjects grid with hover overlay, a split "learner
  outcomes" section, an instructor team carousel, a CTA split section, and
  an indigo multi-column footer.
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/courses/`
  (HTTP 200, ~40KB HTML). DOM + `assets/css/style.css` (65KB, Bootstrap +
  owl-carousel based) extracted and analyzed; tokens below come from that
  stylesheet. Screenshot `courses-free-template.jpg` (1200×946) viewed in
  the browser.
- **Visual design (from screenshot + live preview):** modern, clean "flat
  design" SaaS-style education aesthetic. Hero is a full-screen gradient —
  soft periwinkle/indigo on the left sweeping to magenta/pink on the right,
  with faint stylized cloud shapes — holding a transparent white header and
  left-aligned white text: big bold headline "Online learning platform",
  subtext "Build skills with courses, certificates, and degrees online from
  world-class universities and companies", and a bright orange "Join for
  Free" pill button (5px radius). The right side of the hero is a flat
  vector illustration of a person beside a giant smartphone showing a video
  player UI, with stacked books. Indigo `#4255A4` is the dominant brand
  color (headings, footer background, topic hover overlay, card-button
  text); accent orange `#FF9F67` for primary buttons, the round video play
  button, and outline-button borders; hover purple `#AE59FF`/`#C86FFF` for
  button sweeps and secondary accents. Footer is solid indigo `#4255A4`.
- **Section order (1:1) from the DOM:**
  1. Header (`header.header-area`): transparent over the hero. Logo image
     (`assets/img/logo/logo.png` — open-book icon + wordmark; recreation:
     text wordmark) left; `nav#navigation` right with links Home (active),
     Courses, About, Blog (dropdown: Blog, Blog Details, Element), Contact —
     link color `#fff`, weight 600, 16px, `padding: 39px 2px`, hover `#fff`
     — plus an orange "Join" button (`a.btn`) and a white-outline "Log in"
     button (`a.btn.btn3`: transparent, 1px `#fff` border, white text).
     Sticky variant background: `linear-gradient(#c054ff → #5274ff)`
     (`.header-sticky.sticky-bar`). Mobile: slicknav-triggered menu.
  2. Hero (`section.slider-area`, `.slider-height` min-height 854px):
     `background-image: url(../img/hero/h1_hero.png)` cover. Content
     left-aligned: `h1` "Online learning platform" (60px, `#fff`, weight
     700), `p` "Build skills with courses, certificates, and degrees online
     from world-class universities and companies" (18px `#fff`), "Join for
     Free" (`a.btn.hero-btn` — orange, padding 30px 29px).
  3. Services (`div.services-area`): 3 icon cards in a row (`col-lg-4`):
     `.features-icon` (icon SVG) + `.features-caption` with `h3` title —
     "60+ UX courses", "Expert instructors", "Life time access" — and a
     short placeholder paragraph each.
  4. Featured courses (`div.courses-area.section-padding40`): centered
     `.section-tittle` `h2` "Our featured courses" (mb-55) + owl carousel
     `courses-actives` of **4** `.properties` course cards:
     `.properties__img.overlay1` image (dark top overlay
     `rgba(0,1,2,0.5)`, radius 10px top), `.properties__caption`: category
     tag `p` "User Experience", `h3` title link "Fundamental of UX for
     Application design", blurb paragraph, `.properties__footer` with star
     rating "(4.5) based on 120" and price `$135`, then a full-width
     "Find out more" button (`.border-btn.border-btn2`: 1px `#E2E4FF`
     border, text `#4255A4`, centered).
  5. Learn new skills (`section.about-area1.fix.pt-10`): split
     `.support-wrapper` (flex, space-between). LEFT `.left-content1`: 80px
     purple-gradient icon circle (`.about-icon`, gradient `#eae2fe →
#a376ff → #ea68ff`, radius 50, shadow `rgba(66,85,164,0.08)`),
     `.section-tittle.section-tittle2` `h2` "Learn new skills online with
     top educators" + paragraph, then **3** `.single-features` rows
     (checkmark icon + caption `p`, 16px, `#4255A4`). RIGHT `.right-content1`:
     `.right-img` image `about.png` with `.video-icon` — 60px `#FF9F67`
     circle play button (white play glyph, faint orange halo ring
     `rgba(241,65,5,0.1)`).
  6. Top subjects (`div.topic-area.section-padding40`): centered `h2`
     "Explore top subjects" + grid of **8** `.single-topic` tiles
     (`col-lg-3 col-md-4 col-sm-6`): `.topic-img` image (radius 12px) with
     centered overlay label `h3` "Programing" (white, uppercase, weight 700,
     20px); hover fills the tile with indigo overlay
     `rgba(66,85,164,0.7)`. Below: "View More Subjects" (`.border-btn`).
  7. Learner outcomes (`section.about-area3.fix`): split
     `.support-wrapper.align-items-center`; LEFT `.right-content3`
     (image `about3.png`), RIGHT `.left-content3`: `h2` "Learner outcomes
     on courses you will take" + **3** `.single-features` checkmark rows.
  8. Community experts (`section.team-area.section-padding40.fix`): centered
     `h2` "Community experts" + `.team-active` carousel of **5**
     `.single-cat` cards (centered): `.cat-icon` photo (`team1-4.png` —
     recreation: picsum portraits) + `.cat-cap` `h5` name link ("Mr.
     Urela", "Mr. Uttom", "Mr. Shakil", "Mr. Arafat", "Mr. saiful") + `p`
     role/placeholder text.
  9. Take the next step (`section.about-area2.fix.pb-padding`): split
     `.support-wrapper.align-items-center`; LEFT `.right-content2` (image
     `about2.png`), RIGHT `.left-content2`: `h2` "Take the next step toward
     your personal and professional goals with us." + paragraph + orange
     "Join now for Free" button (`a.btn`).
  10. Footer (`footer`, `.footer-bg` background `#4255A4`,
      `.footer-padding` 100px/13px): left column — footer logo
      (`logo2_footer.png` → wordmark), blurb "The automated process starts
      as soon as your clothes go into the machine.", social icons
      (Twitter, Facebook, Pinterest); "Our solutions" column — Design &
      creatives, Telecommunication, Restaurant, Programing, Architecture;
      "Support" column — same 5 links; centered copyright bar
      `footer-bottom-area`: "Copyright © <year> All rights reserved |
      This template is made with ♥ by Colorlib" (recreation: drop the
      Colorlib attribution, keep the ♥ phrasing + repo-mandated Component
      Dock link).
- **Recreation decisions:** new name **Semester** (single word evoking the
  academic calendar — fits an online-learning brand; no collision with
  `apps/`, `openspec/specs/`, or `docs/templates/`). Brand renders as a
  text wordmark (original uses a logo image). Hero: CSS gradient
  (indigo `#4255A4` → magenta `#C86FFF`/`#AE59FF`, matching the sticky-bar
  gradient direction) with left-aligned white text + orange CTA; the
  original's right-side vector illustration is replaced by a picsum image
  in a rounded frame (or omitted — text-left layout must be preserved).
  Featured courses: 4 cards in a responsive grid (the original's owl
  carousel is not recreated as a carousel). Subjects: 8 tiles, picsum
  images, white uppercase labels, indigo hover overlay. Team: 5 cards with
  picsum portraits; names paraphrased but same kind of content. Video play
  button is decorative (no lightbox). Social icons are inline SVGs
  (lucide-react removed brand icons). Footer: indigo `#4255A4` background,
  Component Dock link in the copyright bar per repo conventions. Dark-mode
  `.dark` variants per repo conventions.

Semester lives in `apps/semester` and uses shared components from
`packages/ui` (Button, ButtonLink, Card, cn).

## Design tokens (extracted from `assets/css/style.css`)

- Fonts (Google Fonts `@import` in CSS): **Josefin Sans** (300/400/500/600/ 700) for headings — `h1..h6 { font-family: "Josefin Sans"; color:
#4255A4 }`, `.section-tittle h2` 42px weight 600 line-height 1.3
  (margin-bottom 21px, container mb-55); hero `h1` 60px weight 700 white.
  **Mulish** (400/500/600/700) for body — `body { font-family: "Mulish";
font-size: 16px }`, `p { color: #10285d; font-size: 16px; line-height:
30px }`.
- Brand indigo: **`#4255A4`** — headings, `.footer-bg` background,
  `.border-btn.border-btn2` text, topic hover overlay
  `rgba(66,85,164,0.7)`, icon-circle shadow `rgba(66,85,164,0.08)`.
- Body navy: **`#10285d`** — paragraph text.
- Accent orange: **`#FF9F67`** — `.btn` background, `.border-btn`
  border/text, `.video-icon` play button, `.btn.btn3:hover` fill.
- Hover purple: **`#AE59FF`** (`.btn::before` hover sweep fill);
  **`#C86FFF`** (`.boxed-btn`, `#back-top`, `.border-btn i` icon color,
  submenu hover).
- Sticky header gradient: `linear-gradient(#c054ff → #5274ff)`.
- Icon circle gradient: `#eae2fe → #a376ff → #ea68ff → #f4f5fa` (80px,
  radius 50).
- Course-card button: 1px `#E2E4FF` border, text `#4255A4` (full-width,
  centered). Course image top overlay: `rgba(0,1,2,0.5)`, radius 10px top.
- Topic tiles: image radius 12px; label white uppercase weight 700 20px;
  hover overlay `rgba(66,85,164,0.7)`.
- Buttons: `.btn` — bg `#FF9F67`, white text, weight 600, radius 5px,
  padding 25px 38px, capitalize, hover = scaleX sweep to `#AE59FF`;
  `.btn.btn3` — transparent, 1px `#fff` border, white text, padding
  25px 30px; `.border-btn` — 1px `#FF9F67`, text `#FF9F67`, radius 5px,
  padding 17px 42px, weight 500, hover = scaleY sweep fill orange;
  `.hero-btn` padding 30px 29px.
- Hero: min-height 854px, cover background image; `h1` 60px white 700;
  `p` 18px white; content left-aligned.
- Section rhythm: `.section-padding40` = 100px top/bottom; `pb-padding` =
  100px bottom; `.section-tittle` centered text with mb-55; `.section-tittle2`
  left-aligned variant; `.single-features` flex rows (icon top 8px, caption
  padding-left 19px, caption `p` 16px line-height 1.8 `#4255A4`).
- Footer: bg `#4255A4`; `footer-padding` 100px top / 13px bottom.

## Requirements

### Requirement: Header

The system SHALL render a transparent header with a logo wordmark, nav
links, and two CTA buttons.

#### Scenario: Navbar

- **GIVEN** the Semester page is rendered
- **WHEN** the header is displayed
- **THEN** it SHALL show the "Semester" wordmark on the left
- **AND** it SHALL show the links Home, Courses, About, Blog, and Contact,
  with Home marked active
- **AND** it SHALL show an orange "Join" button and a white-outline
  "Log in" button on the right

#### Scenario: Mobile toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the collapsed menu SHALL expand showing the nav links and the
  CTA buttons
- **AND** the toggle SHALL expose `aria-expanded` and an accessible label

### Requirement: Hero

The system SHALL render a full-screen gradient hero with headline, subtext,
and a CTA button.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL sit on the indigo-to-magenta gradient background
- **AND** it SHALL show the headline "Online learning platform" in white
- **AND** it SHALL show the subtext "Build skills with courses,
  certificates, and degrees online from world-class universities and
  companies"
- **AND** it SHALL show an orange "Join for Free" button

### Requirement: Services strip

The system SHALL render three icon cards highlighting platform value props.

#### Scenario: Icon cards

- **GIVEN** the services strip is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show three cards: "60+ UX courses", "Expert
  instructors", and "Life time access"
- **AND** each card SHALL show an icon and a short supporting paragraph

### Requirement: Featured courses

The system SHALL render a section with four course cards including rating
and price.

#### Scenario: Course cards

- **GIVEN** the featured courses section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Our featured courses"
- **AND** it SHALL show four cards, each with an image, a category tag
  (e.g. "User Experience"), a title link (e.g. "Fundamental of UX for
  Application design"), a blurb, a star rating with "(4.5) based on 120",
  a price (e.g. "$135"), and a full-width "Find out more" button

### Requirement: Learn new skills

The system SHALL render a split section with a checkmark feature list and
an image with a play button.

#### Scenario: Split layout

- **GIVEN** the learn-new-skills section is displayed
- **WHEN** it is rendered on a wide viewport
- **THEN** the left column SHALL show a purple icon circle, the heading
  "Learn new skills online with top educators", a paragraph, and three
  checkmark feature rows
- **AND** the right column SHALL show an image with a round orange play
  button overlay
- **AND** on a narrow viewport the columns SHALL stack vertically

### Requirement: Top subjects

The system SHALL render a grid of eight subject tiles with overlay labels
and a button.

#### Scenario: Subject grid

- **GIVEN** the top subjects section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Explore top subjects"
- **AND** it SHALL show eight tiles, each with an image and a centered
  white uppercase label (e.g. "Programing")
- **WHEN** the user hovers a tile
- **THEN** the tile SHALL show the indigo overlay
- **AND** it SHALL show a "View More Subjects" outline button below the
  grid

### Requirement: Learner outcomes

The system SHALL render a split section with a checkmark list of outcomes.

#### Scenario: Outcomes layout

- **GIVEN** the learner outcomes section is displayed
- **WHEN** it is rendered on a wide viewport
- **THEN** it SHALL show an image on one side and the heading "Learner
  outcomes on courses you will take" with three checkmark feature rows on
  the other
- **AND** on a narrow viewport the columns SHALL stack vertically

### Requirement: Community experts

The system SHALL render a grid of instructor cards.

#### Scenario: Instructor cards

- **GIVEN** the community experts section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Community experts"
- **AND** it SHALL show five cards, each with a photo, a name, and a role
  line

### Requirement: Take the next step

The system SHALL render a split CTA section with a heading, paragraph, and
button.

#### Scenario: CTA layout

- **GIVEN** the take-the-next-step section is displayed
- **WHEN** it is rendered on a wide viewport
- **THEN** it SHALL show an image on one side and the heading "Take the
  next step toward your personal and professional goals with us." with a
  paragraph and an orange "Join now for Free" button on the other
- **AND** on a narrow viewport the columns SHALL stack vertically

### Requirement: Footer

The system SHALL render an indigo multi-column footer with social icons,
link columns, and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** the first column is rendered
- **THEN** it SHALL show the "Semester" wordmark, a short blurb, and
  social icon links (Twitter, Facebook, Pinterest)
- **WHEN** the link columns are rendered
- **THEN** it SHALL show an "Our solutions" column and a "Support" column,
  each with the links Design & creatives, Telecommunication, Restaurant,
  Programing, and Architecture

#### Scenario: Copyright bar

- **GIVEN** the footer bottom bar is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show a centered copyright line with a ♥ credit
- **AND** it SHALL link to https://www.componentdock.com/ (Component Dock,
  per repo conventions — no Colorlib attribution anywhere in app code)

## Verification checklist

- [ ] `npm run verify:app semester` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (header → hero → services →
      featured courses → learn new skills → top subjects → learner outcomes
      → community experts → take the next step → footer)
- [ ] Tokens wired through `@theme`: indigo `#4255A4`, body navy `#10285d`,
      orange `#FF9F67`, hover purples `#AE59FF` / `#C86FFF`, card-button
      border `#E2E4FF`, sticky gradient `#c054ff → #5274ff`
- [ ] Josefin Sans + Mulish loaded via Google Fonts `<link>` in
      `index.html`
- [ ] Hero uses the indigo→magenta gradient with left-aligned white
      headline/subtext and orange "Join for Free" CTA
- [ ] Services strip: 3 icon cards (60+ UX courses, Expert instructors,
      Life time access)
- [ ] Featured courses: 4 cards with rating "(4.5) based on 120", price,
      and full-width "Find out more" outline button
- [ ] Split sections (learn new skills / learner outcomes / CTA) alternate
      sides with checkmark rows; video play button is decorative
- [ ] Top subjects: 8 tiles with white uppercase labels + indigo hover
      overlay; "View More Subjects" outline button
- [ ] Team: 5 instructor cards with picsum portraits
- [ ] Footer: indigo `#4255A4` background, wordmark, social inline SVGs,
      Our solutions + Support columns, Component Dock link in the
      copyright bar
- [ ] Placeholder images use `https://picsum.photos/seed/semester-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Mobile navbar toggle with aria-expanded; focus-visible rings; dark
      mode per repo conventions
- [ ] README status table regenerated after merge (`npm run readme:status`);
      both TEMPLATES.md Courses rows (lines 366, 1626) marked `[x]` with the
      same surge URL at bookkeeping time (one recreation covers both)
