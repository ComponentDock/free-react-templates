# Template: Caritas (Charity / Non-profit)

## Purpose

Caritas is a single-page charity/non-profit website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Amor" free template (source: https://colorlib.com/wp/template/amor/),
built under a DIFFERENT name (**Caritas** — Latin for "charity / compassionate
love", a fitting non-profit word per the monorepo naming mandate — never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 + Tailwind
CSS 4 + TypeScript.

The original (preview `<title>` is literally "Charity"; the source folder is
`183_Charity_html`) is a purple/magenta-gradient charity landing page: a
full-screen photo hero ("Help The Children in Need") with a video-play block,
a 4-box services row (Donation / Adopt A Child / Become A Volunteer /
Donation), an about split with a "since" badge + animated counters
(50k volunteer / 25k mission / 100k collection), a "Our Causes" section with 3
progress-bar cards, a photo CTA band ("Please raise your hand & Save world"),
an upcoming-events list, a blog row, a "Who Donate us" client-logo carousel,
and a lavender-tinted 4-column footer with working hours, causes links,
gallery grid, and a newsletter form. Caritas recreates that structure 1:1 with
matching layout, colors, typography, and content kinds (no ColorLib assets
copied).

> NAMING NOTE: the ColorLib source name "Amor" is FORBIDDEN as the app name.
> **Caritas** is the new, original name — single lowercase word, no collision
> with `apps/`, `openspec/specs/`, `docs/templates/` or TEMPLATES.md (verified
> 2026-08-09). Source slug + preview URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Amor". Listed in TEMPLATES.md under **Bootstrap
  (216)** (line 331). Free charity / non-profit template (despite the "Amor"
  name — the preview page title is "Charity", HTML folder `183_Charity_html`).
- **Live preview DOM — REACHABLE (verified 2026-08-09):**
  `https://preview.colorlib.com/theme/amor/` returned HTTP 200 (36KB HTML)
  - `css/style.css` (181KB). Structure, copy, and tokens below are from the
    live DOM + stylesheet. Screenshot (`amor-free-template.jpg`, 1200×946,
    browser-verified 2026-08-09) confirms the visual design.
- **Visual design (screenshot + live DOM):** vibrant purple/magenta gradient
  theme. Hero = full-bleed photo of children at a Holi-style celebration
  (pink powder) under a purple gradient overlay, centered white headline "Help
  The Children in Need", white "Start Donation" button; directly below the
  hero text, a video thumbnail with a red play button. Navbar: "Amor" logo +
  white-ish nav links + "learn more" button. Below the hero everything flips
  to a clean white design with purple-gradient accents, lavender (#faf4ff)
  footer.
- **Section order (1:1 from live DOM):**
  1. **Header** — transparent-over-hero navbar: logo image left; nav links
     (Home, about, Causes, Pages ▾ [Event, Elements], blog ▾ [blog, Single
     blog], Contact); purple-bordered "learn more" button far right.
  2. **Hero** (`.banner_part` — photo bg `banner_img.png`, height 950px) —
     centered: H1 "Help The Children in Need" (80px, white, weight 700),
     lorem paragraph, white "Start Donation" button (`.btn_2`); below the
     text block, a `.banner_video` block: video thumbnail
     (`banner_video.png`) with a centered play button (`.extends_video`).
  3. **Services** (`.service_part`) — left: H2 "We are CharityPress Funding
     Network Worldwide."; right: 4 boxes (`.single_service_text`, 2×2 grid):
     **Donation** (donate now), **Adopt A Child** (contact us), **Become A
     Volunteer** (read more), **Donation** (donate now) — each with a purple
     icon, H4 title, lorem paragraph, and a colored text link.
  4. **About** (`.about_us`) — split: left image block (`.about_us_img`,
     `top_service.png` over `about_bg.png`) with a "2000 since" badge; right
     text (`.about_us_text`): H2 "About Believe", Frost & Sullivan lorem
     paragraph, then 3 counters (`.banner_item .single_item`): **50k** Total
     Volunteer / **25k** Successed Mission / **100k** Total Collection;
     centered "learn more" button (`.btn_3`) below.
  5. **Causes** (`.passion_part`) — section title "Our Causes" + 3 cards
     (`.single-home-passion`): photo, purple icon, progress bar at 75%
     (`.skill-bar .skill11`, label "75%"), H5 "Fourth created forth fill
     created subdue be", "read more" button (`.btn_2`).
  6. **CTA band** (`.intro_video_bg` — photo bg `intro_video_bg.png`, height
     480px, purple gradient overlay `#9300ff→#d500ff` at 0.7 opacity) —
     centered H2 "Please raise your hand & Save world" (white, 36px) + "Become
     a Volunteer" button (`.btn_2`).
  7. **Events** (`.event_part`) — section title "Upcoming Event" + 4 rows
     (`.single_event`, bg `#fafafa`, radius 46px top-left/bottom-right): thumb
     image, H5 "Volunteeer Idea 2020", p "Seed the life upon you are creat.".
  8. **Blog** (`.blog_part`) — centered section title "Blog Post" + 3 cards
     (`.single_blog`, radius 50px 0 50px 0): photo, H4 "First cattle which
     earthcan get and see what", meta + read-more.
  9. **Clients** (`.client_part`) — centered section title "Who Donate us" +
     one-liner paragraph + logo carousel (`.client_logo.owl-carousel`): 5
     client logos.
  10. **Footer** (`.footer_part` — bg `#faf4ff`) — 4 columns: (1) footer logo
      - tagline + **Working Hours** (Monday–Friday 8AM–6PM, Saturday–Sunday
        8AM–12PM) + social icons (facebook, twitter, globe, behance); (2) H4
        **Causes** + links (Boat Shippment, Services, Transport Planning,
        Transportation, Truck Delivery Checking); (3) H4 **our Gallery** + 8
        image grid (`.footer_img`); (4) H4 **Newsletter** + blurb + email
        subscribe form. Copyright bar: "Copyright ©2020 All rights reserved |
        This template is made with Colorlib".
- **JS behaviors (original):** animated counters (count-up on scroll), skill
  progress bars (slide-in via `wow`), owl-carousel for client logos, video
  play button (lightbox popup), smooth button hover gradient sweep. Recreate:
  count-up with `IntersectionObserver`/`useEffect` + `requestAnimationFrame`,
  CSS progress bars, simple auto-rotating logo strip (or static row), play
  button as decorative overlay (no video backend needed).

## Design tokens (verified from live stylesheet `css/style.css`)

- **Brand color:** purple **`#8d00ff`** (solid primary: button borders/text).
  Signature gradient **`#7f00ff → #e100ff → #7f00ff`** (`.btn_3`, `.btn_2`
  hover fill). Secondary gradient **`#9300ff → #d500ff`** (intro-video overlay,
  opacity 0.7). Pink accent `#d500ff`/`#e100ff` at gradient ends.
- **Text:** headings `#060606` (Roboto, weight 600–700); body default Roboto;
  section-title H2 `#060606` 36px weight 700; hero H1 white 80px weight 700
  (line-height 85px); default H2 44px weight 600.
- **Fonts:** **Roboto** (300/400/500/700) for body AND headings — loaded via
  Google Fonts `<link>` in `index.html` (original `@import`s
  `Playfair+Display:400,700|Roboto:...` but headings resolve to Roboto via the
  `h1–h6` rule; Playfair is imported but unused — no need to load it).
- **Buttons:**
  - `.btn_2` (light) — white bg, purple `#8d00ff` text, 1px `#8d00ff` border,
    uppercase, weight 700, 16px, padding 13.5px 40px; **asymmetric radius:
    border-bottom-right-radius 20px + border-top-left-radius 20px**; hover →
    gradient fill (background-position right), text turns white, border
    transparent.
  - `.btn_3` (filled) — purple gradient bg (`#7f00ff→#e100ff→#7f00ff`), white
    text, same asymmetric radius; hover flips the corner radii
    (bottom-left/top-right 20px, others 0).
  - Header "learn more" and "donate now"-style text links use the same purple
    family.
- **Cards:** causes card bg `#fafafa`, radius **50px 0 50px 0** (asymmetric);
  card image top corners 20px; event rows bg `#fafafa`, radius 46px top-left +
  bottom-right; blog cards radius 50px 0 50px 0.
- **Section backgrounds:** hero = photo + purple overlay; CTA band = photo +
  purple gradient overlay (0.7); content sections white; passion/cause cards
  `#fafafa`; footer `#faf4ff` (lavender tint).
- **Spacing rhythm:** `.section_padding` 140px 0 (70px mobile); `.passion_part`
  180px 0 117px; `.event_part` 140px 0 80px; footer 130px 0 25px; hero height
  950px (700–750px responsive); `.section_tittle` margin-bottom 70px (50px
  mobile).
- **Section titles:** `.section_tittle` — H2 36px `#060606` weight 700 + small
  gray caption p (16px, weight 300, capitalize).
- **Placeholder images (never copy ColorLib assets):**
  - hero backdrop → `https://picsum.photos/seed/caritas-hero/1920/950`
  - hero video thumb → `https://picsum.photos/seed/caritas-video/800/500`
  - services: no photos (icon boxes) — icons from lucide-react
  - about image → `https://picsum.photos/seed/caritas-about/700/600`
  - cause cards → `https://picsum.photos/seed/caritas-cause-<n>/600/400`
    (n 1..3)
  - events thumbs → `https://picsum.photos/seed/caritas-event-<n>/220/160`
    (n 1..4)
  - blog cards → `https://picsum.photos/seed/caritas-blog-<n>/600/400`
    (n 1..3)
  - footer gallery → `https://picsum.photos/seed/caritas-gallery-<n>/200/200`
    (n 1..8)
  - client logos → 5 text/icon placeholders (styled wordmarks) or seeded
    picsum per implementer judgment
- **Icons:** lucide-react — `HeartHandshake`, `Baby`, `HandHeart`/`Heart`,
  `HandCoins`/`HeartPulse`, `Play`, `Calendar`, `Users`, `Clock`, `Mail`,
  `ArrowRight`, `Facebook`, `Twitter`, `Globe` (+ `Behance` not in lucide —
  substitute `Linkedin` or `Dribbble`), `ChevronDown` for nav dropdowns.

## Requirements

### Requirement: Header with nav and learn-more button

The system SHALL render a navbar: logo left, nav links, and a purple-bordered
"learn more" button on the right, over the hero photo.

#### Scenario: Header layout

- **GIVEN** the Caritas page is rendered
- **WHEN** the header is displayed
- **THEN** the header SHALL be a flex row with the logo on the left and the
  nav + "learn more" button on the right
- **AND** the header SHALL sit over the hero photo (transparent/semi-visible
  per the reference) with readable link colors

#### Scenario: Header content

- **GIVEN** the header is displayed
- **WHEN** the user inspects the nav
- **THEN** the nav SHALL show links: Home, about, Causes, Pages (with a
  dropdown: Event, Elements), blog (with a dropdown: blog, Single blog),
  Contact
- **AND** the "learn more" button SHALL be a 1px `#8d00ff`-bordered button
  with `aria-label` and a working link

#### Scenario: Mobile nav

- **GIVEN** the Caritas page is rendered on a viewport ≤768px
- **WHEN** the header is displayed
- **THEN** the nav links SHALL collapse into a toggleable menu button with
  `aria-expanded` (per repo accessibility conventions)

### Requirement: Photo hero with Start Donation CTA and video block

The system SHALL render a full-screen hero: photo backdrop with a purple
overlay, centered headline + paragraph + white CTA button, and a video-play
block below the hero text.

#### Scenario: Hero content

- **GIVEN** the hero section is displayed
- **WHEN** the page loads
- **THEN** the hero SHALL show a cover photo backdrop (seeded picsum) with a
  purple gradient overlay
- **AND** centered content SHALL include: H1 (e.g. "Help The Children In
  Need" — paraphrase, same kind of content), a short paragraph, and a white
  "Start Donation" button (`.btn_2` style: purple text/border, asymmetric
  radius)
- **AND** a video block SHALL sit below the hero text with a thumbnail and a
  centered play button (decorative overlay or `aria-label`ed link — no video
  backend required)

### Requirement: Services row (4 boxes)

The system SHALL render a services section: a heading on the left and 4
icon boxes (Donation / Adopt A Child / Become A Volunteer / Donation) on the
right in a 2×2 grid.

#### Scenario: Service boxes

- **GIVEN** the services section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the H2 (e.g. "We are CharityPress Funding
  Network Worldwide." — paraphrase) beside a 2×2 grid of 4 boxes
- **AND** each box SHALL have a lucide icon, an H4 title, a short lorem
  paragraph, and a colored text link (donate now / contact us / read more /
  donate now)
- **AND** the grid SHALL collapse to one column on mobile

### Requirement: About split with counters

The system SHALL render an about section: image block with a "since" badge on
one side, text + 3 animated counters on the other, and a centered button below.

#### Scenario: About content

- **GIVEN** the about section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show a photo block with a "2000 since" badge
  beside an H2 (e.g. "About Believe"), a paragraph, and 3 counters: **50k**
  Total Volunteer, **25k** Successed Mission, **100k** Total Collection
- **AND** the counters SHALL count up when scrolled into view (or render the
  final values if no JS animation is implemented)
- **AND** a centered "learn more" button (gradient `.btn_3` style) SHALL sit
  below the split

### Requirement: Our Causes section with progress bars

The system SHALL render a "Our Causes" section with 3 cards, each showing a
photo, an icon, a 75% progress bar, a title, and a read-more button.

#### Scenario: Cause cards

- **GIVEN** the causes section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the title "Our Causes" and 3 cards
- **AND** each card SHALL contain: a photo, a purple lucide icon, a progress
  bar labeled 75%, an H5 title, and a "read more" button (`.btn_2` style)
- **AND** cards SHALL use the `#fafafa` background with the reference's
  asymmetric radius (50px 0 50px 0) and stack on mobile

### Requirement: CTA band with photo background

The system SHALL render a full-width CTA band on a photo backdrop with a
purple overlay, a white heading, and a volunteer button.

#### Scenario: CTA band content

- **GIVEN** the CTA band is displayed
- **WHEN** the user scrolls to it
- **THEN** the band SHALL show a cover photo with a purple gradient overlay
  (`#9300ff→#d500ff`-family, ~0.7 opacity)
- **AND** centered white H2 (e.g. "Please raise your hand & Save world") and a
  "Become a Volunteer" button (white bg / purple text `.btn_2` style) SHALL be
  present

### Requirement: Upcoming Events list

The system SHALL render an "Upcoming Event" section with 4 event rows: thumb,
title, and description.

#### Scenario: Event rows

- **GIVEN** the events section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the title "Upcoming Event" and 4 rows
- **AND** each row SHALL contain a thumbnail image, an H5 title (e.g.
  "Volunteer Idea 2020" — paraphrase), and a one-line description
- **AND** rows SHALL use the `#fafafa` background with 46px asymmetric corner
  radius and stack on mobile

### Requirement: Blog section

The system SHALL render a "Blog Post" section with 3 blog cards: photo, title,
meta, and read-more link.

#### Scenario: Blog cards

- **GIVEN** the blog section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the centered title "Blog Post" and 3 cards
- **AND** each card SHALL contain a photo, an H4 title (paraphrase of "First
  cattle which earthcan get and see what" — same kind of content), a meta
  line, and a read-more link
- **AND** cards SHALL use the reference's asymmetric radius (50px 0 50px 0)
  and stack on mobile

### Requirement: Client logos strip

The system SHALL render a "Who Donate us" section with a heading, a one-liner,
and a row of 5 client logos.

#### Scenario: Client logos

- **GIVEN** the clients section is displayed
- **WHEN** the user scrolls to it
- **THEN** the section SHALL show the centered title "Who Donate us", a short
  paragraph, and 5 logo placeholders in a row
- **AND** the logos SHALL wrap to 2 rows on mobile (or auto-rotate via a
  simple interval if a carousel is implemented)

### Requirement: Footer

The system SHALL render a footer (lavender `#faf4ff` bg) with 4 columns:
brand + working hours + socials; Causes links; gallery grid; newsletter form —
plus a copyright bar.

#### Scenario: Footer content

- **GIVEN** the Caritas page is rendered
- **WHEN** the user scrolls to the bottom
- **THEN** a footer SHALL be present with 4 columns:
  - brand: logo, tagline, **Working Hours** (Monday–Friday 8AM–6PM,
    Saturday–Sunday 8AM–12PM), social icons (Facebook, Twitter, Globe,
    Linkedin/Dribbble substitute for Behance)
  - **Causes** links: Boat Shippment, Services, Transport Planning,
    Transportation, Truck Delivery Checking
  - **our Gallery**: 8 seeded images in a grid
  - **Newsletter**: blurb + email input + subscribe button
- **AND** a copyright bar SHALL sit at the bottom (e.g. "Copyright © 2026 All
  rights reserved")

#### Scenario: Newsletter validation

- **GIVEN** the newsletter form is displayed
- **WHEN** the user submits an empty or invalid email
- **THEN** inline validation SHALL mark the field (presentational — no
  backend call)

### Requirement: Responsive behavior

The system SHALL adapt hero text size, section paddings, and grids for mobile
viewports.

#### Scenario: Mobile layout (≤768px)

- **GIVEN** the Caritas page is rendered on a viewport ≤768px
- **WHEN** the page is displayed
- **THEN** the hero H1 SHALL scale down (e.g. `text-3xl`/`text-4xl`) and
  remain readable over the backdrop
- **AND** section paddings SHALL reduce (~70px per the reference's mobile
  values) and all grids SHALL collapse to one column

## Verification checklist

- [ ] `npm run spec:validate` passes for `template-caritas`
- [ ] `scripts/verify-app.sh caritas` passes (typecheck + lint + vitest 100%
      coverage + build)
- [ ] Sections in order (1:1 with reference): header (logo + nav + learn-more
      button) → hero (photo + purple overlay, H1 + Start Donation + video
      play block) → services (H2 + 4 icon boxes) → about (since badge +
      counters + learn-more btn) → causes (3 progress-bar cards) → CTA band
      (photo + overlay + Become a Volunteer) → events (4 rows) → blog (3
      cards) → clients (logo strip) → footer (4 cols + copyright)
- [ ] Brand tokens in `@theme`, used via Tailwind classes: `#8d00ff` solid
      purple, gradient `#7f00ff→#e100ff→#7f00ff` (and
      `#9300ff→#d500ff` overlay), `#fafafa` cards, `#faf4ff` footer,
      `#060606` headings; asymmetric radii 20px/50px/46px per section
- [ ] Font: Roboto (body + headings) via Google Fonts `<link>` in
      `index.html`, title "Caritas — Charity Template"
- [ ] Photos = seeded picsum (`caritas-hero`, `caritas-video`,
      `caritas-about`, `caritas-cause-<n>`, `caritas-event-<n>`,
      `caritas-blog-<n>`, `caritas-gallery-<n>`); icons from lucide-react —
      no copied assets
- [ ] Newsletter form presentational with inline validation; no backend calls
- [ ] Mobile nav accessible (`aria-expanded` on toggle); counters/progress
      bars animate or render final values
- [ ] Apps MUST import Button/ButtonLink/cn from `packages/ui` (knip gate)
- [ ] TEMPLATES.md `[~]` → `[x]` + surge URL + `npm run readme:status` done
      by implementer at ship time (mark the "Amor" row, line 331 — Bootstrap
      category)
