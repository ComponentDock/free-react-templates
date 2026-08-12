# Template: Amity (Charity — Bootstrap)

## Purpose

Amity is a single-page charity/non-profit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "The Charity" non-profit website template design (see
TEMPLATES.md, Bootstrap category, line 510 — duplicate rows at line 1281 under
Charity (37) and line 1305 under Church (22), same template, one app only),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript (strict). No ColorLib references in app code —
provenance lives in this spec, TEMPLATES.md, and the PR.

## Design reference (replication findings)

- **Original:** ColorLib "The Charity" — free charity/non-profit HTML template
  (source: https://colorlib.com/wp/template/the-charity/; preview page
  `<title>` is the placeholder "Hello World"). Single page: orange top
  utility bar (email + phone + "Donate Now"), white nav (logo + home / about
  us / causes / gallery / news / contact), full-bleed 3-slide hero slider
  ("Donate / 4 a better world" + Donate Now / Read More), three rounded icon
  boxes (Become a Volunteer / Dance & Music / Online Conference), a photo
  welcome section ("Wellcome to our Charity"), an upcoming-events + featured
  cause split, a 6-cause progress-bar slider ("Our Causes"), a milestones
  counter section (children helped / water wells / volunteers), and a dark
  photo footer (About, Useful Links, Latest News, Contact + subscribe,
  copyright bar).
- **Live preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/thecharity/` — NOTE: the slug has NO
  hyphen on the preview host (TEMPLATES.md records the source page as
  `wp/template/the-charity/`, but `preview.colorlib.com/theme/the-charity/`
  returns 404 — use `thecharity`). Fetched `/tmp/tc-prev2.html` (51,321
  bytes), stylesheet `style.css` (`/tmp/thecharity-style.css`, 43,788 bytes)
  and the TEMPLATES.md screenshot (`thecharity-free-template.jpg`, 1200×946
  AVIF, viewed in the browser). No Wayback Machine captures exist.
- **Visual design (screenshot + live DOM + CSS):** clean, modern
  non-profit aesthetic on a white background with a vibrant orange
  `#ff5a00` brand accent and Montserrat. Screenshot shows: rust-orange
  `#ff4800` top bar (white uppercase "MAIL: contact@ourcharity.com" +
  "PHONE: …" left; dark `#262222` "Donate Now" button right), white header
  with "The Charity" wordmark (heart icon) + uppercase-ish nav with "Home"
  highlighted orange, full-width hero photo of smiling children reaching up
  (dark left gradient) with big white "Donate" + "4 a better world" headline,
  solid orange "Donate Now" + outlined "Read More" pill buttons, orange
  circular slider arrow, "01 02 03" pagination; below, three rounded cards
  ("Become a Volunteer" with orange top + hands/plant icon, "Dance & Music"
  and "Online Conference" with light `#ecf2f5` tops + hands/heart and
  heart/$ icons). Source copy is placeholder/Lorem — paraphrase freely, keep
  the same content kinds (mail/phone, headline + subhead + CTA, card title +
  blurb, event date + title + excerpt, cause title + progress + raised/goal,
  counter label + value, footer link lists).

## Design tokens (from `style.css` of the live preview)

- **Brand orange:** `#ff5a00` — nav hover/current (3px bottom border + text),
  `.section-heading .entry-title::before` underline (64×4px, radius 2px),
  `.event-content-wrap .entry-footer a`, `.cause-content-wrap .entry-footer a`
  ("Donate Now"), `.subscribe-form input[type=submit]` bg,
  `.foot-latest-news .posted-date`, `.btn.orange-border` border. Buttons and
  hover fills use the **orange gradient**
  `linear-gradient(270deg, #ff5a00 0%, #ff3600 100%)` (`.btn.gradient-bg`,
  `.icon-box:hover/.active`, `.hero-slider .swiper-button-*` 70px circular
  arrows).
- **Top bar:** `#ff4800` background, white 12px uppercase text (`.header-bar-email`,
  `.header-bar-text`, padding 20px 0, lowercase values); `.donate-btn a`
  background `#262222`, white, `padding: 20px 40px`, 14px/500.
- **Ink/text:** `#262626` — body color (16px, line-height 1.8), nav links
  (14px/600), headings/titles, `.btn` border + color, `.start-counter`
  values, event meta. Greys: `#929191` (paragraphs, `.fund-raised-details`),
  `#595858` (counter labels, `.home-page-limestone .section-heading p`),
  `#7b7b7b` (footer-bar text), `#b7b7b7` (welcome paragraph),
  `#9b9a9a` (input placeholder), `#333` (progress-bar fill).
- **Light backgrounds:** `#ecf2f5` (`.icon-box` bg, radius 24px, padding 40px),
  `#edf3f5` (`.featured-cause .cause-wrap` bg, padding 40px 24px), `#d6dee1`
  (`.barfiller` 5px track, radius 3px), `#e0e0e0`.
- **Photo sections with dark overlays:** `.home-page-welcome` cover photo +
  `rgba(21,21,21,.9)` overlay (white text); `.footer-widgets` cover photo +
  `rgba(22,22,22,.92)` overlay; `.our-causes` cover photo + `rgba(232,237,238,.8)`
  light overlay (dark text); `.hero-content-overlay` `rgba(0,0,0,.5)`.
- **Fonts:** `'Montserrat', sans-serif` (300–700) via Google Fonts
  `@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700')`
  — load via `<link>` in `index.html`.
- **Buttons (`.btn`):** `padding: 18px 40px`, `border: 2px solid #262626`,
  `border-radius: 24px` (pill), 14px/600, line-height 1. Variants:
  `.btn.gradient-bg` (solid orange gradient, transparent border), `.btn.orange-border`
  (orange border; hover → gradient bg + transparent border), `.btn.gray-bg` /
  dark variant on the welcome section (white text — `.help-us .btn` white
  border/white text pattern for the welcome CTAs on the dark photo).
- **Header:** `.top-header-bar` orange bar (email left, then phone with 48px
  left margin, donate-btn right). `.nav-bar` white; `.site-branding`
  padding 20px 0 (logo image — recreate as "Amity" wordmark + heart icon);
  `.site-navigation` desktop (≥992px): links 14px/600 `#262626`, padding
  `49px 0 30px`, margin 0 16px, hover/`.current-menu-item` = 3px bottom
  border + color `#ff5a00`; mobile: off-canvas 320px white drawer sliding
  from left (`left: -320px` → `left: 0` on `.site-navigation.show`), links
  16px 0 padding; `.hamburger-menu` 4-span animated icon (d-lg-none).
- **Hero (`.hero-slider` Swiper):** max-height 820px; each slide
  `.hero-content-wrap` full-bleed image (object-fit cover) + `rgba(0,0,0,.5)`
  overlay; `.entry-header` h1 102px/600 (48px ≤992px) + h4 46px/600;
  `.entry-content` p 500, line-height 1.8; `.entry-footer` pill buttons;
  `.pagination-wrap` bottom 60px area with swiper-pagination dots +
  70px circular gradient next/prev arrows (right: 80px, left: 80px, white
  arrow path). Three slides, all identical content ("Donate" / "4 a better
  world").
- **Icon boxes (`.home-page-icon-boxes`, padding 96px 0):** 3 `.icon-box`
  (col-lg-4): bg `#ecf2f5`, padding 40px, radius 24px, text-center; hover /
  `.active` → orange gradient + white text; figure icon swaps gray → white
  (recreate with lucide, color-swap on hover); `.entry-title` 24px/600
  `#262626` margin-top 28px. Titles: "Become a Volunteer" (hands holding a
  plant — lucide `Sprout`/`HeartHandshake`), "Dance & Music" (hands holding
  a heart — lucide `HeartHandshake`/`Music`), "Online Conference" (heart
  with a dollar — lucide `HandCoins`/`Heart`+`DollarSign`). First card is
  `.active` (orange) in the source.
- **Welcome (`.home-page-welcome`, padding 96px 0):** cover photo +
  `rgba(21,21,21,.9)` overlay; left col-lg-6 `.welcome-content`: `.entry-title`
  36px/600 white with `::before` orange underline (64×4px, radius 2px) —
  "Wellcome to our Charity"; `.entry-content` 14px, line-height 2,
  `#b7b7b7`; `.entry-footer` white-outline pill buttons ("Read More" /
  "Donate Now" — white border + white text on the dark photo, `.help-us .btn`
  pattern: border-color #fff, color #fff, margin-top 36px); right col-lg-6:
  photo.
- **Events (`.home-page-events`, padding 96px 0):** left col-lg-6
  `.upcoming-events`: `.section-heading` ("Upcoming Events", 36px/600,
  orange underline) + 3 `.event-wrap` (margin-top 40px; figure 144px thumb +
  `.event-content-wrap` `width: calc(100% - 180px)`, margin-top -10px):
  `.posted-date` + `.cats-links` (11px/500 `#262626`, date has 1px `#262626`
  right divider padding-right 14px), `.entry-title a` 18px/600 `#262626`,
  `.entry-content` 14px `#929191`, `.entry-footer a` "Read More" `#ff5a00`.
  Event data: "Fundraiser for Kids" and "Bring water to the childrens"
  (×2), date "Aug 25, 2018", venue "Ball Room New York".
  Right col-lg-6 `.featured-cause`: `.section-heading` "Featured Cause" +
  `.cause-wrap` (bg `#edf3f5`, padding 40px 24px): figure 246px thumb +
  `.cause-content-wrap` `width: calc(100% - 280px)`: title "Fundraiser for
  Kids", excerpt, "Donate Now" link, `.fund-raised` bar (data-percentage 83)
  - `.fund-raised-details` 14px `#929191`: "Raised: $56 880" /
  "Goal: $70 000".
- **Our Causes (`.our-causes`, padding 96px 0):** cover photo +
  `rgba(232,237,238,.8)` light overlay; `.section-heading` "Our Causes" +
  Swiper `.causes-slider` of 6 `.cause-wrap` slides (margin-top 60px):
  figure image + `.figure-overlay` (absolute center overlay with an icon,
  hover reveal), `.cause-content-wrap`: posted-date/cats, `.entry-title a`
  18px/600 `#262626` ("Bring water to the childrens", "Education for all"),
  excerpt 14px, `.fund-raised` bar (data-percentage 83 or 70) +
  "Raised: $56 880" / "Goal: $70 000", "Donate Now" link; gradient circular
  next/prev arrows.
- **Milestones (`.home-page-limestone`, padding 96px 0):** left col-lg-6
  `.section-heading`: "We love to help all the children that have problems
  in the world. After 15 years we have many goals achieved." (36px/600,
  padding-bottom 36px, line-height 1.6) + paragraph 14px `#595858`; right
  col-lg-6 `.milestones`: 3 `.counter-box` (col-sm-4, text-center, margin
  20px 0): `.start-counter` 48px/500 `#262626` + `.counter-k` 24px/500
  ("K" suffix only on the first) + `.entry-title` 14px `#595858`:
  **120K Children helped**, **79 Water wells**, **253 Volunteeres**
  (values from `data-to` attributes; animate on scroll into view).
- **Footer:** `.footer-widgets` (padding 96px 0 90px): cover photo +
  `rgba(22,22,22,.92)` overlay; h2 widget titles 18px white, margin-bottom
  40px; 4 cols (col-md-6 col-lg-3): (1) `.foot-about` — logo + paragraph
  14px `#929191` line-height 2 + social icon links (white, margin-right
  28px — inline SVG brand icons, NOT lucide: Facebook/Instagram/etc. are
  removed from lucide-react); (2) "Useful Links" — Privacy Polticy, Become
  a Volunteer, Donate, Testimonials, Causes, Portfolio, News; (3)
  `.foot-latest-news` "Latest News" — 3 items (title 14px + `.posted-date`
  12px `#ff5a00` "MArch 12, 2018", margin-bottom 36px): "A new cause to
  help", "We love to help people", "The new ideas for helping"; (4)
  `.foot-contact` "Contact" — phone "+45 677 8993000 223", email
  "office@template.com", address "Main Str. no 45-46, b3, 56832, Los
  Angeles, CA" + `.subscribe-form` (margin-top 50px): white email input
  (12px, italic `#9b9a9a` placeholder, `width: calc(100% - 70px)`, padding
  12px 16px) + `#ff5a00` submit button (68px, 12px uppercase, white text).
  `.footer-bar`: padding 30px 0, 12px `#7b7b7b`, bg `#131212`, text-center:
  "Copyright © <year> All rights reserved | This template is made with ♥ by
  **Component Dock**" — "Component Dock" MUST link
  https://www.componentdock.com/ (replacing the source's Colorlib credit).
- **Placeholder images:** `https://picsum.photos/seed/amity-<n>/<w>/<h>`.
  Subject-critical photos (hero children reaching up, welcome children,
  cause thumbs, event thumbs) MUST be screened per the seed-screening
  method (pixel metric + browser verify) — pick seeds that provably render
  children/community/water/education scenes, and pin the verified seeds in
  the PR + this spec.

## Requirements

### Requirement: Header — top bar and navigation

The system SHALL render a two-part header: an orange (`#ff4800`) top utility
bar with white 12px uppercase text (left: "MAIL:" + email
`contact@ourcharity.com` and "PHONE:" + `+24 3772 120 091 / +56452 4567`
with 48px gap; right: a "Donate Now" link, dark `#262222` bg, white,
`padding: 20px 40px`) and a white main bar with the "Amity" wordmark logo
(left, heart icon) and a right-aligned nav: Home / About us / Causes /
Gallery / News / Contact (14px/600 `#262626`; hover and the active page get
a 3px `#ff5a00` bottom border and orange text). On mobile a hamburger SHALL
open a 320px off-canvas drawer from the left with the same links.

#### Scenario: Top utility bar

- **GIVEN** the page is rendered
- **WHEN** the top of the header is inspected
- **THEN** it shows the orange bar with the email, the phone number, and a
  "Donate Now" link

#### Scenario: Navbar content

- **GIVEN** the page is rendered
- **WHEN** the main menu is inspected
- **THEN** it shows the Amity wordmark and the nav links home / about us /
  causes / gallery / news / contact

#### Scenario: Nav active and hover state

- **GIVEN** the main menu is rendered
- **WHEN** a nav link is hovered or is the current page
- **THEN** it gains a 3px orange bottom border and orange text

#### Scenario: Mobile menu

- **GIVEN** a viewport below the desktop breakpoint
- **WHEN** the hamburger is activated
- **THEN** a 320px off-canvas menu with the nav links slides in from the
  left and can be closed

### Requirement: Hero slider

The system SHALL render a full-bleed hero carousel (max-height 820px) with
three slides, each showing a children/community cover photo under a
`rgba(0,0,0,.5)` overlay, the headline "Donate" (white, 102px, weight 600;
48px on ≤992px) with the sub-headline "4 a better world" (46px, weight 600),
a short mission paragraph (weight 500), a solid orange-gradient pill button
"Donate Now" and an orange-outline pill button "Read More" (pill radius
24px, padding 18px 40px). Navigation SHALL include pagination indicators
and two 70px circular orange-gradient arrows (left/right), and the carousel
SHALL cycle automatically.

#### Scenario: Hero content

- **GIVEN** the hero slider is rendered
- **WHEN** a slide is inspected
- **THEN** it shows the "Donate" / "4 a better world" headline, a paragraph,
  and the Donate Now / Read More buttons

#### Scenario: Hero slide navigation

- **GIVEN** the hero slider is rendered
- **WHEN** the next/prev arrows or pagination are used
- **THEN** the visible slide changes (three slides cycle)

### Requirement: Icon boxes

The system SHALL render a row of three rounded cards (bg `#ecf2f5`, radius
24px, padding 40px, text-center): "Become a Volunteer" (active: orange
gradient bg + white text), "Dance & Music", and "Online Conference", each
with an icon figure at the top that swaps to white on hover/active and a
24px/600 `#262626` title (margin-top 28px). Hover SHALL fill the card with
the orange gradient and turn the text white.

#### Scenario: Icon cards render

- **GIVEN** the icon-box section is rendered
- **WHEN** it is inspected
- **THEN** it shows the three cards with titles Become a Volunteer / Dance &
  Music / Online Conference, the first one highlighted in orange

#### Scenario: Icon card hover

- **GIVEN** an icon card is rendered
- **WHEN** it is hovered
- **THEN** its background becomes the orange gradient, the text turns white,
  and the icon swaps to its white variant

### Requirement: Welcome section

The system SHALL render a full-width photo section (cover image + dark
`rgba(21,21,21,.9)` overlay) split in two: left, a white 36px/600 heading
"Wellcome to our Charity" with a 64×4px orange underline, a `#b7b7b7`
paragraph (14px, line-height 2), and white-outline pill buttons "Read More"
and "Donate Now" (white border + white text on the dark photo); right, a
photo.

#### Scenario: Welcome content

- **GIVEN** the welcome section is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading with its orange underline, the paragraph,
  the two white-outline buttons, and the photo on the right

### Requirement: Upcoming events and featured cause

The system SHALL render a two-column section: left, an "Upcoming Events"
heading (orange underline) with three event rows, each a 144px thumbnail plus
content (date "Aug 25, 2018" with a 1px `#262626` divider, category, 18px/600
title, 14px `#929191` excerpt, orange "Read More" link); right, a "Featured
Cause" heading with a `#edf3f5` card (padding 40px 24px) containing a 246px
thumbnail, the cause title, an excerpt, a "Donate Now" link, and a progress
bar (5px track `#d6dee1`, `#333` fill at 83%) with "Raised: $56 880" /
"Goal: $70 000".

#### Scenario: Event rows

- **GIVEN** the upcoming-events column is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading and three events, each with a thumb, date,
  title, excerpt, and a Read More link

#### Scenario: Featured cause card

- **GIVEN** the featured-cause column is rendered
- **WHEN** it is inspected
- **THEN** it shows the heading, the cause card with its progress bar at
  83%, the raised/goal amounts, and a Donate Now link

### Requirement: Our Causes slider

The system SHALL render an "Our Causes" section over a light
`rgba(232,237,238,.8)` overlay with a carousel of six cause cards, each with
a photo (hover reveals a centered overlay icon), a title ("Bring water to
the childrens", "Education for all"), an excerpt, a progress bar (83% or
70%), "Raised: $56 880" / "Goal: $70 000", and a "Donate Now" link, plus
circular orange-gradient next/prev arrows.

#### Scenario: Cause cards render

- **GIVEN** the causes slider is rendered
- **WHEN** it is inspected
- **THEN** it shows the section heading and cause cards with image, title,
  progress bar, raised/goal amounts, and a Donate Now link

#### Scenario: Cause hover overlay

- **GIVEN** a cause card is rendered
- **WHEN** it is hovered
- **THEN** a centered icon overlay is revealed over the photo

#### Scenario: Causes slider navigation

- **GIVEN** the causes slider is rendered
- **WHEN** the next/prev arrows are used
- **THEN** the visible cause cards change

### Requirement: Milestone counters

The system SHALL render a "milestones" section: left, the heading "We love
to help all the children that have problems in the world. After 15 years we
have many goals achieved." (36px/600 with orange underline and a 14px
`#595858` paragraph); right, three centered counters (48px/500 `#262626`,
"K" 24px suffix on the first) with 14px `#595858` labels: 120K Children
helped, 79 Water wells, 253 Volunteeres. The numbers SHALL count up when
scrolled into view.

#### Scenario: Counter values

- **GIVEN** the milestones section is rendered
- **WHEN** it is inspected
- **THEN** it shows the three counters with the values 120K / 79 / 253 and
  their labels

#### Scenario: Counter animation

- **GIVEN** the milestones section is rendered
- **WHEN** it scrolls into view
- **THEN** the counters animate from zero to their target values

### Requirement: Footer

The system SHALL render a dark photo footer (cover image + `rgba(22,22,22,.92)`
overlay) with four columns: "About" (wordmark + paragraph + social icon
links), "Useful Links" (Privacy Polticy, Become a Volunteer, Donate,
Testimonials, Causes, Portfolio, News), "Latest News" (three items with
orange `#ff5a00` dates "MArch 12, 2018"), and "Contact" (phone, email,
address, and a subscribe form: white email input + orange 68px submit
button; validation + success state, no backend). The footer bar (bg
`#131212`, 12px `#7b7b7b`) SHALL show "Copyright © <year> All rights
reserved | This template is made with ♥ by Component Dock" where "Component
Dock" links https://www.componentdock.com/ (replacing the source's Colorlib
credit).

#### Scenario: Footer columns

- **GIVEN** the footer is rendered
- **WHEN** it is inspected
- **THEN** it shows the About text, the Useful Links list, three Latest News
  items with orange dates, and the Contact details

#### Scenario: Subscribe validation

- **GIVEN** the subscribe form is rendered
- **WHEN** it is submitted with an invalid or empty email
- **THEN** a validation message is shown and no success state appears

#### Scenario: Subscribe success

- **GIVEN** the subscribe form is rendered
- **WHEN** a valid email is submitted
- **THEN** a success confirmation is shown

#### Scenario: Footer copyright

- **GIVEN** the footer bar is rendered
- **WHEN** it is inspected
- **THEN** it shows the copyright line with a link to
  https://www.componentdock.com/ and no ColorLib credit

## Verification checklist

- [ ] `openspec/specs/template-amity/spec.md` validated (`npm run spec:validate`)
- [ ] App folder `apps/amity`, package `@free-react-templates/amity`, no
      ColorLib references in app code (grep for colorlib/The Charity in apps/amity)
- [ ] Footer links https://www.componentdock.com/
- [ ] Tests first, 100% coverage (Vitest + RTL) — `bash scripts/verify-app.sh amity`
- [ ] Section order matches the source: header (top bar + nav) → hero slider
      → icon boxes → welcome → events + featured cause → our causes → milestones
      → footer
- [ ] Tokens in `src/index.css` `@theme`: `--color-brand: #ff5a00`,
      `--color-brand-dark: #ff3600`, `--color-topbar: #ff4800`,
      `--color-ink: #262626`, `--color-body: #929191`,
      `--color-muted: #595858`, `--color-light: #ecf2f5`,
      `--color-panel: #edf3f5`, `--color-dark: #131212`; Montserrat Google
      Fonts `<link>` in `index.html`
- [ ] Header: `#ff4800` top bar (email + phone left, dark `#262222` Donate
      Now right), white nav (wordmark + 6 links, hover/current 3px `#ff5a00`
      bottom border, mobile 320px off-canvas drawer)
- [ ] Hero: 3-slide Swiper-style carousel (max-height 820px, `rgba(0,0,0,.5)`
      overlay, "Donate" 102px/48px + "4 a better world", Donate Now
      gradient + Read More outline pills, 70px circular orange arrows +
      pagination)
- [ ] Icon boxes: 3 rounded `#ecf2f5` cards, first active orange, hover
      orange gradient + white icon/text swap
- [ ] Welcome: dark photo overlay, white 36px heading + orange underline,
      `#b7b7b7` paragraph, white-outline pill buttons, right photo
- [ ] Events + featured cause: 3 event rows (144px thumbs, date + divider,
      orange Read More) + `#edf3f5` featured card with 83% bar and
      Raised/Goal amounts
- [ ] Our causes: light-overlay photo section, 6 cause cards (83%/70% bars,
      raised/goal, Donate Now, hover overlay icon), slider arrows
- [ ] Milestones: heading + 3 animated counters 120K / 79 / 253 with labels
- [ ] Footer: dark photo overlay, 4 columns incl. subscribe form (validation + success), `#131212` footer bar with Component Dock link
- [ ] Placeholder images via `https://picsum.photos/seed/amity-<n>/<w>/<h>`,
      subject-screened (children/community/water/education) per the
      seed-screening method; icons from `lucide-react` + inline SVG brand
      icons for footer socials (lucide removed brand icons)
- [ ] PR description: source template, preview URL
      (`preview.colorlib.com/theme/thecharity/` — no-hyphen slug), design
      tokens, diffs (name, placeholder images, slider implementation,
      newsletter no backend + validation)
