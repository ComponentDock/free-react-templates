# Template: Ironpulse (Health Fitness — Gym)

## Purpose

Ironpulse is a single-page gym / fitness club template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "TopGym" fitness HTML template design (see TEMPLATES.md, line
515 under **Bootstrap (216)** — duplicate rows at line 1204 under **Business
(365)** and line 1881 under **Health Fitness (72)**, same template, ONE app
only), built under a different name ("Ironpulse" — iron = gym weights, pulse
= heart rate / fitness, matching the source's hard-training-gym positioning)
with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
(strict). No ColorLib references in app code — provenance lives in this
spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "TopGym" — free gym / fitness club HTML template
  (source: https://colorlib.com/wp/template/topgym/). Single page: a
  transparent absolute header over the hero (logo image left, centered nav
  Home / About us / Classes / Instructors / News / Contact, search icon
  right that opens a FULL-SCREEN dark search overlay), a fixed vertical
  social strip on the right edge over the hero (black bar, circular dark
  icons), a 3-slide hero slider (each slide: full-width darkened gym photo,
  centered circular blue play button linking a YouTube promo video, huge
  130px white headline "Be Fit.Top Gym" / "Be Fit.Top Trainer" / "Be
  Fit.Top Body", blue square "Read More" button, white dot pagination
  bottom-center), a white features section (3 columns: photo + 88px blue
  circle icon + uppercase heading + paragraph — "Amazing Setting", "Best
  Trainers", "Diet Plans"), a dark `#212122` services section (eyebrow
  "Features" + heading "Services" in white, 4 icon columns — Pilates, Free
  Lifting, Yoga, Spinning — and a "see all the services" button below), a
  photo-background trainers section (eyebrow "The Best" + heading "Trainers"
  - a dark "See All" button top-right, 3 trainer cards: photo with a blue
    hover block, name + role "Aerobics Instructor"), a white upcoming-events
    section with 3 columns (a bordered schedule box "Upcomming Classes" with
    6 clock-icon class rows and times, a membership card "Membership Cards"
    with a thick blue frame and a giant blue "25% Discount", and a
    photo-background "Personal Trainer" sign-up box with a "Sign up Now"
    button), and a centered photo-background footer (logo, nav links,
    email subscribe form with blue "Sign Up" button, 5 social icons,
    copyright bar crediting ColorLib — replaced with a Component Dock link).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/topgym/`. DOM fetched
  (`/tmp/topgym-preview.html`, 49,595 bytes) + stylesheet `css/style.css`
  (`/tmp/topgym-style.css`, 38,006 bytes) + TEMPLATES.md screenshot
  (`topgym-free-template.jpg`, 1200×946, viewed in the browser).
- **Visual design (screenshot + live DOM + CSS):** dark, high-contrast
  hard-gym aesthetic — black/dark-grey photo sections (hero, trainers,
  footer) with white text over a white body between them; the ONLY accent
  is a vibrant electric blue `#233EDE` used for every CTA, the play button,
  feature icon circles, the trainer hover block, the membership-card frame,
  and the subscribe button. Logo "TOP GYM" is a boxy stencil-style wordmark
  (black square badge). Hero photos show gym activity (treadmill, barbell);
  the features row uses 3 photo columns (pull-up, muscular trainer, gym
  equipment). Source copy is placeholder/Lorem with a typo ("Upcomming
  Classes") — paraphrase freely and fix typos, keep the same content kinds
  (nav links, 3 hero slides, 3 feature cards, 4 service columns, 3 trainer
  cards, 6 class rows, membership discount, sign-up box, footer widgets +
  subscribe form).

## Design tokens (from `css/style.css` of the live preview)

- **Brand blue:** `#233EDE` — `.primary-btn` background, `.play-btn`
  background, `.feature-icon` (88px circle) background, `.section-title
span` eyebrow color, `.trainer-img .img-hover` background, `.membership-card`
  thick border (22/24/21/20px), `.membership-details .discount h1` (72px)
  color, `.subscribe-form button` background, `.copyright i` heart color.
  ~30 uses — THE accent of the whole template.
- **Ink / charcoal:** `#212122` — `.services-section` background (dark
  section), `.trainer-btn` (dark "See All" button) background, membership /
  class-box eyebrow text; `#353535` — feature-card heading (h5) and
  light-section headings; `#111111` — default h1–h5 (headings on light
  surfaces); `#000` — `.top-social-links` strip background.
- **Body / muted text:** `#7b7b7b` — paragraphs (15px, line-height 1.6),
  `.single-service p` (14.5px), `.classes-time li` (14px).
- **Light surfaces:** white `#fff` — features + upcoming-events sections;
  `#EBEDF8` / `#E5E7F3` — light blue-grey accents (`.upcoming-classes`
  border is 2px solid `#E5E7F3`).
- **Search overlay:** `.search-bar-wrap` — full-screen fixed overlay
  (`position: fixed; width/height 100%; z-index 99`), background `#073B4C`,
  hidden (`visibility: hidden; opacity: 0`) until the nav search icon adds
  `.active`.
- **Social strip:** `.top-social` — absolute right edge, z-index 999;
  `.top-social-links` width 121px, background `#000`, vertical stack of
  circular icon links (48px, `border-radius: 50%`, background `#081624`,
  white icons).
- **Font:** single family — `"Roboto", sans-serif` for everything
  (Google-imported in the source; load via `<link>` in `index.html`,
  weights 400/500/700/900). Headings default 600; `.single-slide h1` is
  130px 500; `.section-title h2` is 48px 700 `letter-spacing: 6px`
  uppercase; nav links 13px 500 uppercase; eyebrows (`.section-title span`)
  are 12px 900 uppercase `letter-spacing: 6px`, color `#233EDE` (white in
  the trainers section).
- **Buttons:** `.primary-btn` — SQUARE (no radius), 14px 700, white on
  `#233EDE`, uppercase, `letter-spacing: 1.5px`, `padding: 20px 50px`.
  `.play-btn` — 56px circle (`border-radius: 50%`), `#233EDE`, white play
  icon. `.feature-icon` — 88px circle, `#233EDE`, white icon.
- **Header (`.header-section`):** height 142px, `position: absolute`
  (transparent, overlays the hero), z-index 9; `.main-menu ul li a` —
  white, 13px, 500, uppercase; logo is an image (85×85px link). Search
  icon (`fa fa-search`) sits in the nav list (margin-left 152px) and opens
  the full-screen overlay.
- **Hero (`.hero-slider .single-slide`, 3 slides):** `height: 895px`,
  `padding-top: 343px`, `text-align: center`; background photos via
  `data-setbg` (`img/bg.jpg`, `bg-2.jpg`, `bg-3.jpg`) + `.set-bg` cover;
  `.single-slide h1` — white, 130px, 500, mb 45px; `.play-btn` — blue
  circle above the headline (mb 17px); `.primary-btn` "Read More" below;
  owl-carousel dot pagination bottom-center (6px white circles with a
  26px ring on the active dot); slides animate in on activation
  (play → h1 → button, 0.2–0.6s delays).
- **Features (`.features-section.spad`):** white, pt 95 / pb 90; 3
  `.single-features` columns: `.features-img` photo (min-width 100%) +
  `.feature-text` centered: `.feature-icon` (88px blue circle,
  `margin-top: -34px` — overlaps the photo, mb 40px) + h5 (18px 700
  uppercase `letter-spacing: 1.5px` `#353535`, mb 22px) + p (`#7b7b7b`
  15px, lh 30).
- **Services (`.services-section.spad`, bg `#212122`):** `.section-title`
  (mb 60–84px): span eyebrow "Features" (12px 900 ls 6px `#233EDE`) + h2
  "Services" (white 48px 700 uppercase ls 6px); 4 `.single-service` columns
  (text center): icon image (mb 50px) + h5 (white 18px 700 uppercase ls
  1.5px, mb 22px) + p (`#7b7b7b` 14.5px, lh 30); below, `.service-btn
.primary-btn` "see all the services" (lowercase in source).
- **Trainers (`.trainer-section.set-bg`, bg image, pt 125 / pb 100):**
  `.section-title span` is WHITE here; h2 "Trainers"; `.trainer-btn` —
  absolute right, bg `#212122` (dark variant of `.primary-btn`), text "See
  All"; 3 `.single-trainer` (text center): `.trainer-img` photo (width
  100%) + `.img-hover` — absolute blue `#233EDE` block at the photo's
  left with a white `+` icon link; `.trainer-text` (pt 48): h5 white 18px
  700 uppercase name + `span` role in white 15px 400 `opacity: 0.6`
  ("Aerobics Instructor" for all three: Rachel Smith, Micheal Williams,
  James Brown).
- **Upcoming events (`.upcoming-event-section.spad-2`, white, pt/pb 100):**
  3 columns, each 503px tall:
  - `.upcoming-classes` — `border: 2px solid #E5E7F3`, pl 45 / pt 67 / pb
    45; `.up-title`: span eyebrow "Next" (`#212122` 12px 900 ls 6px,
    opacity .6) + h5 "Upcomming Classes" (source typo — fix to "Upcoming
    Classes"; `#212122` 18px 700 uppercase ls 1.5px); `ul.classes-time`:
    6 rows (icon + name + time right-aligned; `#7b7b7b` 14px, mb 30):
    Gym Fitness 11:00–12:00 · Pilates 12:00–13:00 · Spinning 13:00–14:00 ·
    Yoga 14:00–15:00 · Gym Fitness 15:00–16:00 · Pilates 16:00–17:00.
  - `.membership-card.set-bg` — bg image + thick `#233EDE` frame (border
    top 22 / left 24 / bottom 21 / right 20px); `.membership-details` (pt
    47 / pl 27): up-title "Next" + h5 "Membership Cards" (`#212122`); then
    `.discount h1` — "25%" in `#233EDE` 72px 700 + `span` "Discount"
    (15px 700).
  - `.member-sign-up.set-bg` — bg image, pt 67 / pl 45 / pr 41, text left;
    up-title: span "New" + h5 "Personal Trainer" (white, opacity .6
    eyebrow); p white 15px lh 30 (mb 42); `.member-signup-btn` centered
    with a block `.primary-btn` "Sign up Now".
- **Footer (`.footer-section.set-bg`, bg image, height 641px, pt 109):**
  all content centered (`.footer-content`): `.footer-logo` image (mb 33);
  `.footer-menu` (mb 86) — 6 links (white 13px uppercase, inline, mr 37):
  Home / About us / Classes / Instructors / News / Contact;
  `.subscribe-form` (542px, mb 52) — input transparent with `2px solid
#fff` border, height 73px, italic white placeholder ("your Email",
  opacity .6), blue "Sign Up" button absolutely positioned right (192px,
  bg `#233EDE`); `.social-links` (mb 45) — 5 white circular icons
  (mr 60); `.footer-icon-img` (mb 32); `.copyright` — "Copyright © <year>
  All rights reserved | This template is made with <heart> by
  <credit>", white 13px opacity .5, credit link underlined — the credit
  MUST be **Component Dock** → https://www.componentdock.com/ (replaces
  Colorlib).
- **Mobile:** source uses slicknav (jQuery) for the mobile menu — implement
  a React hamburger toggle showing the nav links (desktop + mobile navs
  render duplicate links in the DOM — query with `getAllByRole` and index
  the mobile one last). Stack features (3 → 1 col), services (4 → 2/1
  cols), trainers (3 → 1 col), the events row (3 → 1 col), and footer
  elements below `lg`/`md`.
- **Placeholder images:** `https://picsum.photos/seed/ironpulse-<n>/<w>/<h>`.
  Subject-critical photos are the hero slides (3), feature photos (3),
  trainer photos (3), membership-card + sign-up + trainer-section +
  footer-section backgrounds — screen candidates per the seed-screening
  method (pixel metric + browser verify) and prefer dark gym/athletic
  shots (weights, running, dark scenes); pin the verified seeds in the PR
  and this spec. Icons from `lucide-react` (Search, Play, Plus, Clock,
  Users, Sparkles, UtensilsCrossed, Dumbbell, Flower2, Bike, Heart, X) +
  inline SVG brand icons for the 5 social links (lucide-react removed
  brand icons).

## Requirements

### Requirement: Header — transparent nav, search overlay

The system SHALL render a transparent absolute header over the hero with
the brand logo on the left, a centered nav (Home / About us / Classes /
Instructors / News / Contact), and a search icon on the right that opens a
full-screen dark search overlay with an input and a Search button. On
mobile a hamburger SHALL open a dropdown with the same nav links.

#### Scenario: Header content

- **GIVEN** the page is rendered
- **WHEN** the top of the page is inspected
- **THEN** it shows the logo, the six nav entries (Home first), and the
  search icon on the right

#### Scenario: Search overlay

- **GIVEN** the header is rendered
- **WHEN** the search icon is activated
- **THEN** a full-screen dark overlay appears with a search input and a
  Search button, and closes again on the close control

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a dropdown with the six nav links appears and can be closed

### Requirement: Hero slider

The system SHALL render a 3-slide hero slider, each slide showing a
full-width background photo, a centered circular blue play button, a large
white headline ("Be Fit.Top Gym" / "Be Fit.Top Trainer" / "Be Fit.Top
Body"), a blue "Read More" button, and white dot pagination at the bottom.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is inspected
- **THEN** it shows the play button, the headline, the "Read More" button,
  and the dot pagination on the first slide

#### Scenario: Slide navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the pagination dots are activated (or the slider auto-advances)
- **THEN** the displayed slide changes to the next headline

### Requirement: Features

The system SHALL render a white features section with three columns, each
showing a photo, an 88px blue circular icon, an uppercase heading, and a
paragraph (Amazing Setting / Best Trainers / Diet Plans).

#### Scenario: Feature cards

- **GIVEN** the features section is rendered
- **WHEN** the columns are inspected
- **THEN** it shows three cards, each with a photo, a blue circular icon,
  a heading, and a paragraph

### Requirement: Services

The system SHALL render a dark `#212122` services section with the eyebrow
"Features" and heading "Services", four icon columns (Pilates / Free
Lifting / Yoga / Spinning), and a "see all the services" button below.

#### Scenario: Service columns

- **GIVEN** the services section is rendered
- **WHEN** it is inspected
- **THEN** it shows the eyebrow and heading, four service columns with
  icons, titles, and paragraphs, and the "see all the services" button

### Requirement: Trainers

The system SHALL render a photo-background trainers section with the
eyebrow "The Best", heading "Trainers", a dark "See All" button at the top
right, and three trainer cards, each with a photo (blue hover block), a
name, and a role.

#### Scenario: Trainer cards

- **GIVEN** the trainers section is rendered
- **WHEN** the cards are inspected
- **THEN** it shows three trainer cards, each with a photo, a name, and a
  role ("Aerobics Instructor")

### Requirement: Upcoming classes

The system SHALL render an "Upcoming Classes" schedule box with six
rows, each showing a class name and a time range (Gym Fitness 11:00–12:00,
Pilates 12:00–13:00, Spinning 13:00–14:00, Yoga 14:00–15:00, Gym Fitness
15:00–16:00, Pilates 16:00–17:00).

#### Scenario: Class schedule rows

- **GIVEN** the upcoming-classes box is rendered
- **WHEN** the rows are inspected
- **THEN** it shows six class rows, each with an icon, a class name, and a
  right-aligned time range

### Requirement: Membership card

The system SHALL render a membership card with a thick blue frame and
background photo showing "Membership Cards" and a large blue "25%
Discount" figure.

#### Scenario: Membership card content

- **GIVEN** the membership card is rendered
- **WHEN** it is inspected
- **THEN** it shows the "Membership Cards" title and the "25% Discount"
  figure in the brand blue

### Requirement: Personal trainer sign-up

The system SHALL render a photo-background "Personal Trainer" box with an
eyebrow "New", a paragraph, and a blue "Sign up Now" button.

#### Scenario: Sign-up box

- **GIVEN** the sign-up box is rendered
- **WHEN** it is inspected
- **THEN** it shows the "New" eyebrow, the "Personal Trainer" title, a
  paragraph, and the "Sign up Now" button

### Requirement: Footer

The system SHALL render a centered photo-background footer with the logo,
the six nav links, an email subscribe form with a blue "Sign Up" button,
five social icons, and a copyright bar reading "Copyright © <year> All
rights reserved | This template is made with ♥ by **Component Dock**"
where "Component Dock" links https://www.componentdock.com/ (no ColorLib
credit).

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the logo, the six nav links, the subscribe form, the
  five social icons, and the copyright bar

#### Scenario: Footer credit

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-ironpulse/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/ironpulse`, package `@free-react-templates/ironpulse`,
      no ColorLib references in app code (grep for colorlib/TopGym in
      apps/ironpulse)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh ironpulse`
- [ ] Section order matches the source: header (+ full-screen search
      overlay + right-edge social strip) → hero slider → features →
      services → trainers → upcoming events (classes / membership card /
      sign-up) → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #233EDE`,
      `--color-dark: #212122`, `--color-ink: #353535`, `--color-muted:
    #7b7b7b`, `--color-line: #E5E7F3`, `--color-search: #073B4C`,
      `--color-strip: #081624`; Google Fonts `<link>` in `index.html`:
      Roboto (400/500/700/900)
- [ ] Header: transparent absolute over hero, logo + 6 nav links + search
      icon; full-screen `#073B4C` search overlay; mobile hamburger →
      dropdown
- [ ] Top-social: vertical black strip fixed on the right edge with
      circular social icons
- [ ] Hero: 3 slides (895px tall, bg photos), blue circular play button,
      130px white headline, blue "Read More" button, dot pagination
- [ ] Features: white, 3 columns (photo + 88px blue circle icon + heading +
      paragraph)
- [ ] Services: `#212122` bg, "Features" / "Services" title block, 4 icon
      columns (Pilates / Free Lifting / Yoga / Spinning), "see all the
      services" button
- [ ] Trainers: bg photo, "The Best" / "Trainers" + dark "See All" button,
      3 cards (photo + blue hover block + name + "Aerobics Instructor")
- [ ] Upcoming classes: bordered box (2px `#E5E7F3`), 6 rows (icon + class + time right-aligned)
- [ ] Membership card: thick `#233EDE` frame + bg photo, "Membership
      Cards", "25% Discount" in blue 72px
- [ ] Personal trainer: bg photo, "New" / "Personal Trainer", paragraph,
      "Sign up Now" button
- [ ] Footer: centered, logo + 6 links + subscribe form (transparent input,
      blue "Sign Up") + 5 social icons + copyright bar with Component Dock
      link
- [ ] Placeholder images via `https://picsum.photos/seed/ironpulse-<n>/<w>/<h>`,
      subject-screened (3 hero slides, 3 features, 3 trainers, membership + sign-up + trainer-section + footer backgrounds); icons from
      `lucide-react` + inline SVG brand icons
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/topgym/`), design tokens, diffs (name,
      placeholder images, React slider instead of owl-carousel, hamburger
      instead of slicknav, React search overlay, Component Dock footer
      credit)
