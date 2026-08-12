# Template: Vinyasa (Fitness/Yoga Template)

## Purpose

Vinyasa is a single-page yoga/fitness website template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Yogaflex"
website template design (source: https://colorlib.com/wp/template/yogaflex/),
built under a DIFFERENT name (**Vinyasa** — a flowing yoga style, matching the
source's yoga/fitness theme) per the monorepo naming mandate, with the monorepo
stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

TEMPLATES.md has TWO copies of this item (lines 542 and 1891 — duplicate rows
in the Bootstrap and Health Fitness category sections); ONE recreation
(Vinyasa) covers both; the implementer marks BOTH rows `[x]`. NOTE: the other
yoga-family ColorLib templates (Yoga, Yoga Studio, Yogabest, Yogafun, Yogalife,
etc.) are SEPARATE templates with their own slugs — do NOT conflate them
(ColorLib Yoga is already prepped as Lotus).

## Design reference (replication findings)

- **Original:** ColorLib "Yogaflex" — classic Colorlib Bootstrap 4 single-page
  fitness/yoga template with a blue (`#0093df`) brand accent, a photo hero with
  a yoga-pose image, an about section with a 2x2 card grid, featured class
  cards, a weekly schedule table, a testimonial carousel, a CTA band, blog
  cards, and a black footer. Demo brands itself "YogaFlex"; the recreation
  uses the NEW name **Vinyasa**.
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/yogaflex/`
  (HTTP 200, 47,792 bytes HTML). The `<title>` is a stale copy-paste artifact
  (Colorlib's generic "Education" theme header comment; the rendered body is
  100% the Yogaflex template — h1s "YogaFlex to Shape your body", "How
  Yogaflex can change your life", "Our Featured Classes", schedule table,
  footer contact block). Master stylesheet `css/main.css` (~70 KB, fully
  extracted for tokens); libs: bootstrap 4, owl.carousel, magnific-popup,
  nice-select, animate.css, jquery-ui, font-awesome, linearicons.
- **CSS tokens (from main.css):**
  - Brand: `#0093df` (blue) — `.primary-btn` background, `h1 span` in hero,
    footer `.number` phone, testimonial active dot, hover accents. Hover
    state keeps `#0093df` (button bg unchanged; the inner arrow span slides
    right on hover).
  - Secondary blues/cyans: `#38a4ff` (info `genric-btn`), `#4cd3e3`;
    utility button palette `#f4e700` (yellow), `#f44a40` (red), `#a367e7`
    (purple) — used by the elements page, not the home sections.
  - Text: headings `#222222`; body/muted `#777777`; near-black `#1a1a1a`.
  - Light section backgrounds: `#f9f9ff` (schedule-area, testimonial cards),
    `#fafaff`, `#f1f1f1`.
  - Font: body `font-family: "Roboto", sans-serif` (no Google Fonts link in
    the preview HTML — the theme assumed Roboto was available; recreation
    MUST load Roboto via a Google Fonts `<link>` in index.html).
  - Buttons: `.primary-btn` — background `#0093df`, `line-height: 42px`,
    padding `0 30px`, white text, `font-size: 14px`, `font-weight: 500`,
    **no border-radius (square)**, `box-shadow: -10px 10px 20px
rgba(0,0,0,0.1)`; `.primary-btn.white` variant — transparent bg, 1px
    white border, hover → white bg + `#0093df` text.
  - Section rhythm: `.section-gap` padding `120px 0` (80px @992, 60px @768).
    `.section-title-wrap` margin-bottom 80px (40px @992); its `h1` weight 100,
    margin-bottom 15px; its `p` max-width 492px, centered, `#777777`.
  - Header: `#header` fixed top, z-index 997; `.header-top` 40px min-height
    dark strip, border-bottom `rgba(255,255,255,0.2)`, hidden @992;
    `.main-menu` padding 20px 30px; logo `h1` 34px; when scrolled
    (`.header-scrolled`) the mobile nav panel bg is `rgba(4,9,30,0.9)`.
  - Hero: `.banner-area` bg image `banner-bg.jpg` cover; `.banner-content h1`
    60px weight 100 (45px @1200, 36px @992, 32px @480) with `span` in
    `#0093df`; right-side `.banner-img` (the pose photo) hidden @767; button
    font-size 13px.
  - Schedule: `.schedule-area` bg `#f9f9ff`; centered table; `th.head`
    uppercase, weight 700, `#222222` on white; row hover → white bg +
    `box-shadow: 0px 20px 50px rgba(153,153,153,0.2)`; `.name` cell padding
    28px 0; table-wrap `overflow-x: scroll` @768.
  - Testimonials: `.single-testimonial` — text-center, padding 30px, margin
    20px, bg `#f9f9ff`; rounded-circle avatar; dots 10px
    `rgba(127,127,127,0.5)`, active dot `#0093df`; dots hidden @768.
  - CTA band: `.cta-one-area` bg image `cta-bg.jpg` cover, text-center,
    inner `.wrap` margin-bottom 180px (110px @576).
  - Blog: `.single-blog` in a 3-col grid (col-lg-4 col-md-6); thumb image,
    `h4` title wrapped in an `<a>`, excerpt `p`, `.meta-bottom` flex row with
    calendar / heart / bubble counts.
  - Footer: `.footer-area` background **`#000000`**; `h4` white,
    padding-bottom 30px; `.number` (phone) `#0093df` 24px weight 600;
    newsletter button `genric-btn` bg `#0093df`.
- **Screenshot:** `yogaflex-free-template.jpg` (1200×946, viewed in browser) —
  top dark info bar (social icons left, search + phone + blue "Book Now"
  right); white header with "YOGAFLEX" uppercase logo + blue icon and right
  nav (HOME ABOUT TRAINERS BLOG PAGES CONTACT); hero with a woman in lotus
  pose (Padmasana) on a white mat against a soft light studio background,
  headline "YogaFlex to Shape your body" (YOGAFLEX in blue, rest dark) + blue
  "Become a Member" button; below, white section with centered title "How
  Yogaflex can change your life" + gray paragraph. Minimalist, airy,
  professional; flat square blue buttons. Demo copy is placeholder lorem —
  paraphrase into yoga/fitness copy (classes, membership, schedule).
- **Section order (1:1, from live demo DOM):**
  1. `.header-top` — dark info strip: phone "+880 1234 654 953" + "Book Now"
     link (social icons present in the strip; hidden @992).
  2. `.main-menu` nav inside `#header` (fixed) — logo "YogaFlex" (→ Vinyasa,
     uppercase wordmark) + links: Home, About, Trainers, Blog (dropdown: Blog
     Home, Blog Single), Pages (dropdown: Schedule, Courses, Elements),
     Contact.
  3. `section.banner-area.relative` — full-width hero: left text block —
     small uppercase label "YogaFlex" (→ Vinyasa), `h1` "to Shape your body"
     with "Shape" span in brand blue, "Become a Member" button; right side
     `.banner-img` pose photo (hidden on mobile).
  4. `section.about-area.section-gap` — section title "How Yogaflex can
     change your life" (→ "How Vinyasa can change your life") + centered
     paragraph; below, two columns: `.about-right` 2×2 grid of `.single-about`
     cards (**Why Choose Us**, **Our Properties**, **Legal Notice** — the
     source repeats "Legal Notice" for the 4th card; use a distinct 4th
     title, e.g. "Our Programs", for variety) + an image column
     (about-img.png).
  5. `section.feature-area.section-gap` — "Our Featured Classes" title +
     FOUR `.single-feature` cards in a 2-col grid, each: photo with overlay +
     `h4` "Get into shape now" + link "Book an appointment".
  6. `section.schedule-area.section-gap` — "Schedule your Fitness Process"
     title + centered weekly table: columns Course name / Mon / Tue / Wed /
     Thu / Fri; rows: Fitness Aero 02.00 10.00 02.00 02.00 10.00, Senior
     Fitness 02.00 10.00 02.00 02.00 10.00 (source repeats these two classes
     3× each — recreate with a few distinct class rows for the same kind of
     content).
  7. `section.testomial-area.section-gap` — "Client's Feedback" title + owl
     carousel of `.single-testimonial` items: rounded avatar + quote +
     `h4` name + role (`Helena Phillips` CEO at Facebook, `Cordelia Barton`
     — use distinct names/roles) + dot indicators.
  8. `section.cta-one-area.relative.section-gap` — photo CTA band: "Huge
     Transaction in last Week" (→ membership/start-today copy) + paragraph +
     "Become a Member" button.
  9. `section.blog-area.section-gap` — "Our Recent Blogs" title + THREE
     `.single-blog` cards: thumb image, `h4` title link, excerpt, meta row
     (date "13th Dec", hearts "15", comments "02").
  10. `footer.footer-area.section-gap` — black footer: "About Us" blurb,
      "Contact Us" (56/8, rockybeach road, santa monica, Los angeles,
      California - 59620 + two phone numbers), "Newsletter" blurb + email
      form, copyright line — paraphrase to "© 2026 Vinyasa. All rights
      reserved." + mandatory "More templates at Component Dock" link
      (https://www.componentdock.com/).

## Requirements

### Requirement: Top info bar

The system SHALL render a dark top strip above the header with a phone number
and a "Book Now" link.

#### Scenario: Top bar content

- **GIVEN** the page is loaded
- **WHEN** the top bar renders
- **THEN** it SHALL show a phone number
- **AND** a "Book Now" link SHALL be present

### Requirement: Fixed header with brand and navigation

The system SHALL render a fixed header with the brand wordmark "Vinyasa" and
the navigation links Home, About, Trainers, Blog, Pages, and Contact.

#### Scenario: Brand and nav links

- **GIVEN** the page is loaded
- **THEN** the header SHALL show the brand wordmark "Vinyasa" linking to the
  page top
- **AND** the nav SHALL contain the links Home, About, Trainers, Blog, Pages,
  and Contact

#### Scenario: Dropdown menus

- **WHEN** the Blog nav item is activated
- **THEN** dropdown items Blog Home and Blog Single SHALL be revealed

### Requirement: Hero banner

The system SHALL render a full-width hero with a background photo, a small
uppercase brand label, a headline with the brand-colored word, and a "Become a
Member" button.

#### Scenario: Hero content

- **GIVEN** the page is loaded
- **THEN** the hero SHALL show the uppercase label "Vinyasa"
- **AND** a headline reading "to Shape your body" with "Shape" in the brand
  blue
- **AND** a "Become a Member" button SHALL be present

### Requirement: About section

The system SHALL render an about section with a centered title, a paragraph,
and a 2x2 grid of feature cards next to an image.

#### Scenario: About content

- **GIVEN** the about section is visible
- **THEN** the heading "How Vinyasa can change your life" SHALL be shown
- **AND** exactly four `.single-about` cards SHALL render in a 2x2 grid,
  titled Why Choose Us, Our Properties, Legal Notice, and Our Programs
  (the source repeats "Legal Notice" — use a distinct 4th title)
- **AND** each card SHALL have a title and a description

### Requirement: Featured classes

The system SHALL render a "Our Featured Classes" section with exactly four
class cards, each with an image and a "Book an appointment" link.

#### Scenario: Featured classes content

- **GIVEN** the featured classes section is visible
- **THEN** the heading "Our Featured Classes" SHALL be shown
- **AND** exactly four class cards SHALL render in a 2-column grid
- **AND** each card SHALL show an image, the title "Get into shape now", and
  a "Book an appointment" link

### Requirement: Weekly schedule table

The system SHALL render a "Schedule your Fitness Process" section with a
centered weekly table (Course name + Mon–Fri columns) whose rows highlight on
hover.

#### Scenario: Schedule content

- **GIVEN** the schedule section is visible
- **THEN** the heading "Schedule your Fitness Process" SHALL be shown
- **AND** a table SHALL render with a "Course name" column and Mon, Tue, Wed,
  Thu, Fri columns
- **AND** at least two distinct class rows SHALL render (e.g. Fitness Aero,
  Senior Fitness) with time entries per weekday

### Requirement: Testimonial carousel

The system SHALL render a "Client's Feedback" section with a carousel of
testimonial cards, each with a round avatar, a quote, an author name, and a
role.

#### Scenario: Testimonial content

- **GIVEN** the testimonials section is visible
- **THEN** the heading "Client's Feedback" SHALL be shown
- **AND** at least two testimonial cards SHALL render
- **AND** each card SHALL show a round avatar, a quote, a name, and a role

#### Scenario: Carousel advances

- **WHEN** the next testimonial is activated
- **THEN** the visible quote SHALL change to another testimonial

### Requirement: CTA band

The system SHALL render a full-width photo CTA section with a headline, a
paragraph, and a "Become a Member" button.

#### Scenario: CTA content

- **GIVEN** the CTA section is visible
- **THEN** a headline inviting membership SHALL be shown
- **AND** a paragraph SHALL be shown
- **AND** a "Become a Member" button SHALL be present

### Requirement: Blog cards

The system SHALL render an "Our Recent Blogs" section with exactly three blog
cards, each with an image, a title link, an excerpt, and a meta row with date,
likes, and comments.

#### Scenario: Blog content

- **GIVEN** the blog section is visible
- **THEN** the heading "Our Recent Blogs" SHALL be shown
- **AND** exactly three blog cards SHALL render
- **AND** each card SHALL show an image, a title, an excerpt, and a meta row
  with a date, a likes count, and a comments count

### Requirement: Footer

The system SHALL render a black footer with an "About Us" blurb, a "Contact
Us" block with address and phone, a "Newsletter" block with an email input,
a copyright line, and a Component Dock link.

#### Scenario: Footer content

- **GIVEN** the page is scrolled to the bottom
- **THEN** the footer SHALL show an "About Us" paragraph
- **AND** a "Contact Us" block SHALL show an address and phone numbers
- **AND** a "Newsletter" block SHALL show an email input
- **AND** the copyright line "© 2026 Vinyasa. All rights reserved." SHALL be
  shown
- **AND** a link "More templates at Component Dock" pointing to
  https://www.componentdock.com/ SHALL be present

### Requirement: Full page composition

The system SHALL render all sections in the source's 1:1 order.

#### Scenario: Page section order

- **GIVEN** the page is loaded
- **THEN** the sections SHALL render in this order: top bar, header/nav,
  hero banner, about, featured classes, schedule, testimonials, CTA, blog,
  footer

## Verification checklist

- [ ] `npm run spec:validate` passes for this spec.
- [ ] App folder `apps/vinyasa`, package `@free-react-templates/vinyasa`; NO
      reference to ColorLib / "yogaflex" source name in any app file
      (provenance lives only in this spec, TEMPLATES.md, and the PR).
- [ ] Footer links https://www.componentdock.com/ ("More templates at
      Component Dock").
- [ ] `public/CNAME` = `vinyasa.free.componentdock.com`; `"homepage"` =
      https://vinyasa.free.componentdock.com.
- [ ] Brand token `#0093df` in `@theme`; Roboto via Google Fonts `<link>` in
      index.html; square buttons (no radius) with the -10px 10px 20px shadow.
- [ ] All sections in the 1:1 order above; header fixed with header-top strip;
      hero = photo bg + blue-span headline + "Become a Member"; about = 2x2
      card grid + image; featured classes = 4 cards; schedule = Mon–Fri table
      with hover highlight; testimonials = carousel with round avatars; CTA =
      photo band; blog = 3 cards; footer black `#000000`.
- [ ] Placeholder images via `https://picsum.photos/seed/vinyasa-<n>/<w>/<h>`
      (hero bg + pose image, about image, class ×4, avatars, blog ×3, CTA
      band); icons from lucide-react or inline SVG brand icons (never copy
      source assets). Verify hero/CTA seed subjects visually before pinning.
- [ ] 100% coverage (lines/functions/branches/statements) via
      `npm run test:coverage`; typecheck, lint, build all green.
- [ ] Both TEMPLATES.md "Yogaflex" rows (lines 542 and 1891) marked `[x]`
      with surge URL in bookkeeping.
