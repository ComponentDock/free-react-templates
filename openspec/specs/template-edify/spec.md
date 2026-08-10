# Template: Edify (Education / Online Learning)

## Purpose

Edify is a single-page online-learning / education platform template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Courses" website template design (see TEMPLATES.md, Bootstrap
category, line 366; duplicate row at line 1626), built under a different name
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Courses" — online-learning platform landing page:
  transparent header over a purple-gradient hero with a flat illustration
  (person at a laptop with a play button, floating books), three rounded
  white service cards (60+ UX courses / Expert instructors / Life time
  access), a featured-courses carousel (category, title, rating, price,
  "Find out more"), a split "Learn new skills online with top educators"
  section with an orange circular video-play button, an "Explore top
  subjects" image-card grid with hover overlay, a flipped "Learner outcomes"
  split section, a "Community experts" team carousel, a "Take the next step"
  CTA split, and an indigo multi-column footer (source:
  https://colorlib.com/wp/template/courses/).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/courses/`
  (HTTP 200, ~40KB HTML). DOM + `assets/css/style.css` (65KB, Bootstrap-based
  with custom overrides) extracted and analyzed; tokens below come from that
  stylesheet. Screenshot `courses-free-template.jpg` (1200×946, AVIF) viewed
  in the browser and visually inspected.
- **Visual design (from screenshot + live preview):** modern e-learning
  aesthetic — vibrant purple/violet hero (`#c054ff` → `#5274ff` gradient vibe,
  flat illustration on the right), warm orange `#ff9f67` CTA buttons ("Join
  for Free", "Join now"), indigo `#4255a4` headings/footer, white rounded
  cards. Header (transparent over hero): open-book logo + wordmark left,
  centered links (Home, Courses, About, Blog, Contact), orange "Join Now"
  button + outlined "Log In" button right. Hero: left-aligned white text —
  big bold headline "Online learning platform", subtext "Build skills with
  courses, certificates, and degrees online from world-class universities
  and companies", orange "Join for Free" button; right: flat vector
  illustration (person pointing at a laptop screen with a play button,
  floating books/shapes). Below the hero, three white rounded cards (icon +
  title + blurb: "60+ UX courses" / "Expert instructors" / "Life time
  access" with document/person/clock icons). Then "Our featured courses"
  (centered dark heading) with course cards showing a photo, category
  "User Experience", title, rating stars, price, and a "Find out more"
  button. Typography: **Josefin Sans** headings + **Mulish** body.
- **Section order (1:1) from the DOM:**
  1. Header (`div.header-area.header-transparent` → `div.header-bottom
header-sticky`): logo + wordmark left; nav links Home, Courses, About,
     Blog, Blog, Blog Details, Element, Contact (simplify to Home, Courses,
     About, Blog, Contact); right: "Join" (orange `.btn`) and "Log in"
     (outlined). Sticky on scroll with gradient bg `#c054ff` → `#5274ff`;
     mobile hamburger (slicknav).
  2. Hero (`section.slider-area` → `div.single-slider.slider-height`, min
     height 854px, background image `../img/hero/h1_hero.png` cover): h1
     "Online learning platform" (white, 60px, weight 700), p "Build skills
     with courses, certificates, and degrees online from world-class
     universities and companies" (white, 18px), orange "Join for Free"
     button (`.btn`: bg `#FF9F67`, radius 5px, padding 25px 38px, weight
     600). Illustration right (placeholder art).
  3. Services (`div.services-area`): 3 cards (`div.single-services.mb-30`,
     white bg, radius 20px, shadow `0px 25px 60px rgba(66,85,164,0.06)`,
     padding 29px 24px, flex icon + caption): "60+ UX courses", "Expert
     instructors", "Life time access" — each with an icon
     (`div.features-icon`) and blurb "The automated process all your website
     tasks." (caption p color `#4255A4`, 17px).
  4. Featured courses (`div.courses-area.section-padding40.fix`): centered
     heading "Our featured courses" (`.section-tittle h2` 42px/600, mb-55);
     carousel (`div.courses-actives`, owl-carousel) of 4 course cards
     (`div.properties__card`: radius 10px, shadow
     `0px 6px 6px rgba(2,25,65,0.08)`): image top (radius `10px 10px 0 0`),
     category "User Experience" (`.properties__caption p span` color
     `#C86FFF`), title "Fundamental of UX for Application design", blurb
     (color `#6E7697`), rating row "★★★★★ (4.5) based on 120" (stars color
     `#FF7B2E`), price "$135" (`#4255A4`, 23px, weight 700), "Find out
     more" button (`.border-btn.border-btn2`: 1px `#E2E4FF`, color
     `#4255A4`, full width; hover fill `#FF9F67`).
  5. About 1 (`section.about-area1.fix.pt-10`): split — left
     (`div.left-content1`): 80px rounded gradient icon (`#eae2fe` →
     `#ec7dfe` gradient, radius 50px), heading "Learn new skills online
     with top educators", 3 bullet rows (`div.single-features`: icon +
     caption, caption h3 25px / p 16px color `#4255A4`); right
     (`div.right-content1`): image with centered orange circular play
     button (`div.video-icon a`: bg `#FF9F67`, 60px, radius 50%, ripple
     animation).
  6. Topics (`div.topic-area.section-padding40`): centered heading "Explore
     top subjects"; grid (col-lg-3) of 8 image cards (`div.single-topic`
     radius 12px): white uppercase title centered over the image (e.g.
     "Programing" — use 8 distinct subjects), hover overlay
     `rgba(66,85,164,0.7)`; below: "View More Subjects" full-width border
     button (`.border-btn2`).
  7. Learner outcomes (`section.about-area3.fix`): split flipped — image
     left (`div.right-content3`), right (`div.left-content3`): heading
     "Learner outcomes on courses you will take" + 3 bullet rows
     (`div.single-features`).
  8. Team (`section.team-area.section-padding40.fix`): centered heading
     "Community experts"; carousel (`div.team-active`) of 5 members
     (`div.single-cat`: avatar icon + name "Mr. Urela" / "Mr. Uttom" / "Mr.
     Shakil" / "Mr. Arafat" / "Mr. Saiful" — h5 color `#4255A4` 24px/600 +
     blurb color `#57667e`).
  9. CTA (`section.about-area2.fix.pb-padding`): split — image right,
     left: heading "Take the next step toward your personal and
     professional goals with us." + paragraph + orange "Join now for Free"
     button (`.btn`).
  10. Footer (`div.footer-wrappper.footer-bg`, bg `#4255A4`): brand logo +
      blurb ("The automated process starts as soon as your clothes go into
      the machine.") + social icons; 3 link columns "Our solutions",
      "Support", "Company" (Design & creatives, Telecommunication,
      Restaurant, Programing, Architecture); bottom bar copyright
      (paraphrase the "made with" credit per repo conventions, drop the
      Colorlib attribution).
- **Recreation decisions:** new name **Edify** (verb "to instruct or
  improve" — education-adjacent, short, brandable; no collision with
  `apps/`, `openspec/specs/`, or `docs/templates/`). Hero illustration:
  picsum photo in the hero (or a composed lucide-based graphic) instead of
  copying the flat vector art. Course-card images: picsum
  (`picsum.photos/seed/edify-course-<n>/600/400`). Topic grid: 8 distinct
  subject names (Programing, Design, Marketing, Photography, Music, Data
  Science, Language, Business) with picsum images. Team: avatar initials or
  picsum portraits. Carousels: implement as responsive grids with
  prev/next controls (or static grids — layout must not depend on
  animation). Video play button: decorative link (no real video needed).
  Footer social icons: inline SVGs (lucide-react removed brand icons).
  Dark-mode `.dark` variants per repo conventions.

Edify lives in `apps/edify` and uses shared components from `packages/ui`
(Button, ButtonLink, Card, cn).

## Design tokens (extracted from `assets/css/style.css`)

- Fonts: **"Josefin Sans", sans-serif** for headings (h1–h6; body weight
  400; `.section-tittle h2` 42px/600/1.3; hero h1 60px/700) and **"Mulish",
  sans-serif** for body (16px, line-height 30px). Load via Google Fonts
  `<link>` in `index.html` (Josefin Sans 300–700, Mulish 400–700).
- Brand violet: **`#C86FFF`** — `.boxed-btn` border/text (hover: filled),
  back-to-top button, blog date badge, course category text, submenu hover,
  preloader spinner. Companion shades `#AE59FF` (btn hover sweep),
  `#c054ff` + `#5274ff` (sticky-header gradient).
- Indigo: **`#4255A4`** — heading color (h1–h6), footer background
  (`.footer-bg`), feature-caption paragraph color, course title + price
  color, topic hover overlay `rgba(66,85,164,0.7)`, team name color,
  `.border-btn2` text. Darker variant `#415094`; dark navy `#1F2B7B`
  (strong/del text, contact hover).
- Accent orange: **`#FF9F67`** — `.btn` CTA background ("Join for Free",
  "Join now"), `.video-icon` play button, `.border-btn` border/text. Star
  rating color `#FF7B2E`. Hover sweep `#AE59FF` on `.btn::before`.
- Light lavender surfaces: `#F9F9FF` (light section bg), `#F0E9FF`
  (borders), `#FBF9FF` (widget bg), white cards on light sections.
- Hero: background image (cover, min-height 854px; 700px @992, 650px @768,
  600px @576); white text: h1 60px/700, p 18px; `.hero__caption span`
  green `#31FF7A` 60px (decorative animated headline accent).
- Buttons:
  - `.btn` — bg `#FF9F67`, white text, radius 5px, padding 25px 38px,
    weight 600, hover sweep `#AE59FF`.
  - `.boxed-btn` — white bg, 1px `#C86FFF` border, `#C86FFF` text,
    uppercase, letter-spacing 3px, padding 18px 44px; hover: filled
    `#C86FFF` white text.
  - `.border-btn` — 1px `#FF9F67`, `#FF9F67` text, radius 5px, padding
    17px 42px.
  - `.border-btn2` — full width, 1px `#E2E4FF`, `#4255A4` text; hover:
    fill `#FF9F67` white text.
- Cards/radii: service cards radius 20px, shadow
  `0 25px 60px rgba(66,85,164,0.06)`, padding 29px 24px; course cards
  radius 10px, image top radius `10px 10px 0 0`, shadow
  `0 6px 6px rgba(2,25,65,0.08)`; topic cards radius 12px; about-icon 80px
  radius 50px (gradient `#eae2fe` → `#ec7dfe`); video play button 60px
  radius 50% bg `#FF9F67` with white ripple ring.
- Section rhythm: `.section-padding40` = 100px top/bottom padding;
  `.section-tittle` h2 42px/600 centered (mb-55, 27–31px on mobile);
  footer-padding 100px top / 13px bottom; `pb-padding` 100px bottom.
- Text: body `#10285D` (p), muted `#6E7697` (course blurb),
  `#57667E` (team blurb), `#999999` / `#888888` (meta), headings `#4255A4`.

## Requirements

### Requirement: Header

The system SHALL render a transparent navbar over the hero with a logo,
nav links, and Join / Log in actions, becoming a sticky gradient bar on
scroll.

#### Scenario: Navbar content

- **GIVEN** the Edify page is rendered at the top of the page
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the "Edify" wordmark with an open-book logo on the
  left
- **AND** it SHALL show the links Home, Courses, About, Blog, and Contact
- **AND** it SHALL show an orange "Join Now" button and an outlined "Log
  in" button on the right
- **AND** the Home link SHALL be marked active

#### Scenario: Sticky state

- **GIVEN** the user scrolls past the hero
- **WHEN** the navbar enters its sticky state
- **THEN** it SHALL stick to the top with a purple gradient background
  (`#c054ff` → `#5274ff`) and keep white links and actions visible

#### Scenario: Mobile toggle

- **GIVEN** the page is rendered on a narrow viewport
- **WHEN** the user activates the menu toggle
- **THEN** the collapsed menu SHALL expand showing the nav links and the
  Join / Log in actions
- **AND** the toggle SHALL expose `aria-expanded` and an accessible label

### Requirement: Hero

The system SHALL render a full-width hero with a purple-gradient
illustration background, headline, subtext, and an orange CTA.

#### Scenario: Hero content

- **GIVEN** the hero is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the headline "Online learning platform" in large
  white bold text
- **AND** it SHALL show the subtext "Build skills with courses,
  certificates, and degrees online from world-class universities and
  companies"
- **AND** it SHALL show an orange "Join for Free" button
- **AND** an illustration SHALL appear beside the text on wide viewports
  and stack below it on narrow ones

### Requirement: Services

The system SHALL render three white rounded cards with icon, title, and
blurb.

#### Scenario: Service cards

- **GIVEN** the services section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show three cards titled "60+ UX courses", "Expert
  instructors", and "Life time access"
- **AND** each card SHALL show an icon and a short blurb

### Requirement: Featured courses

The system SHALL render a carousel of course cards with category, title,
rating, price, and a button.

#### Scenario: Course cards

- **GIVEN** the featured-courses section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Our featured courses"
- **AND** it SHALL show at least four course cards, each with an image, a
  category label, a title, a blurb, a star rating with a count, and a price
- **AND** each card SHALL show a "Find out more" button
- **AND** the section SHALL provide controls to move between cards (or a
  responsive grid fallback)

### Requirement: Learn new skills

The system SHALL render a split section with an icon, heading, three bullet
rows, and an image with a video play button.

#### Scenario: Split content

- **GIVEN** the "Learn new skills" section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Learn new skills online with top
  educators"
- **AND** it SHALL show three bullet rows, each with an icon and a caption
- **AND** an image with a circular orange play button SHALL appear beside
  the text on wide viewports and stack below on narrow ones
- **AND** the play button SHALL be an accessible link with a label

### Requirement: Explore top subjects

The system SHALL render a grid of subject image cards with a hover overlay
and a "View More Subjects" button.

#### Scenario: Subject grid

- **GIVEN** the subjects section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Explore top subjects"
- **AND** it SHALL show eight subject cards, each with an image and a
  white uppercase title overlaid
- **WHEN** the user hovers a subject card
- **THEN** the card SHALL show a semi-transparent indigo overlay
- **AND** a "View More Subjects" button SHALL appear below the grid

### Requirement: Learner outcomes

The system SHALL render a flipped split section with an image and three
bullet rows.

#### Scenario: Outcomes content

- **GIVEN** the learner-outcomes section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Learner outcomes on courses you will
  take"
- **AND** it SHALL show three bullet rows, each with an icon and a caption
- **AND** an image SHALL appear on the opposite side from the
  "Learn new skills" section image

### Requirement: Community experts

The system SHALL render a team carousel of expert members.

#### Scenario: Team cards

- **GIVEN** the team section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the centered heading "Community experts"
- **AND** it SHALL show at least five members, each with an avatar, a name,
  and a short blurb

### Requirement: Call to action

The system SHALL render a split CTA section with a heading and an orange
button.

#### Scenario: CTA content

- **GIVEN** the CTA section is displayed
- **WHEN** it is rendered
- **THEN** it SHALL show the heading "Take the next step toward your
  personal and professional goals with us."
- **AND** it SHALL show a short paragraph and an orange "Join now for Free"
  button
- **AND** an image SHALL appear beside the text on wide viewports

### Requirement: Footer

The system SHALL render an indigo multi-column footer with brand blurb,
link columns, social icons, and a copyright bar.

#### Scenario: Footer columns

- **GIVEN** the footer is displayed
- **WHEN** it is rendered
- **THEN** the first column SHALL show the "Edify" wordmark, a short blurb,
  and social icon links
- **AND** the "Our solutions", "Support", and "Company" columns SHALL show
  link lists (Design & creatives, Telecommunication, Restaurant,
  Programing, Architecture)
- **AND** the footer background SHALL be the indigo brand color

#### Scenario: Copyright bar

- **GIVEN** the footer is displayed
- **WHEN** the bottom bar is rendered
- **THEN** it SHALL show a copyright notice with a paraphrased "made with ♥"
  credit (no Colorlib attribution)

## Verification checklist

- [ ] `npm run verify:app edify` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Section order matches the original 1:1 (header → hero → services →
      featured courses → learn new skills → explore top subjects → learner
      outcomes → community experts → CTA → footer)
- [ ] Tokens wired through `@theme`: brand violet `#C86FFF`, indigo
      `#4255A4`, orange `#FF9F67`, gradient `#c054ff`→`#5274ff`, light
      lavenders `#F9F9FF` / `#F0E9FF` / `#FBF9FF`
- [ ] Josefin Sans + Mulish loaded via Google Fonts `<link>` in
      `index.html`
- [ ] Navbar transparent over hero, sticky gradient on scroll; orange "Join
      Now" + outlined "Log in"; mobile toggle with aria-expanded
- [ ] Hero: illustration, white headline/subtext, orange "Join for Free"
      button
- [ ] Services: 3 white rounded cards (radius 20px); courses: 4 cards with
      image/category/title/rating/price/"Find out more"
- [ ] Topics grid: 8 image cards, indigo hover overlay, "View More
      Subjects" button
- [ ] Team carousel: 5 members with avatars; video play button is an
      accessible decorative link
- [ ] Placeholder images use `https://picsum.photos/seed/edify-<n>/<w>/<h>`;
      no assets copied from the original
- [ ] Footer indigo `#4255A4`; social icons are inline SVGs
- [ ] Dark-mode `.dark` variants per repo conventions
- [ ] README status table regenerated after merge (`npm run readme:status`)
