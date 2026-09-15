# Template: GivePulse (Non-Profit Charity Website)

## Purpose

GivePulse is a full-page non-profit charity website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Charilife" free template (source:
https://colorlib.com/wp/template/charilife/), built under a DIFFERENT name
(**GivePulse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 / jQuery charity site with Font Awesome
icons, Owl Carousel, Magnific Popup, and a Themify icon set. It features
a dark navbar overlaying a parallax hero, an about section with a video
play button, three feature cards, a "popular causes" fundraiser grid with
progress bars, a parallax call-to-action, an events countdown grid, a
blog section, an Instagram feed strip, and a dark footer. The primary
brand color is coral-red `#ff573d`.

## Naming

The ColorLib source name "Charilife" is FORBIDDEN as the app name.
**GivePulse** is the new, original name — single lowercase word, no
collision with `apps/`, `openspec/specs/`, or `docs/templates/`
(verified: zero hits). Source slug + preview URL are recorded in the
Design reference section below.

## Design reference (replication findings)

- **Original:** ColorLib "Charilife" (page title: "Charilife"). Non-profit
  / charity landing page. Source slug: `charilife`.
- **Live preview — REACHABLE (verified via curl):**
  `https://preview.colorlib.com/theme/charilife/` (HTTP 200, ~41 KB HTML).
  Stylesheets: `css/main.css` (~50 KB), `css/bootstrap.css`,
  `css/owl.carousel.css`, `css/magnific-popup.css`, `css/nice-select.css`,
  `css/font-awesome.min.css`, `css/themify-icons.css`.
- **Live DOM structure (from fetched HTML + main.css):**
  - `nav.navbar.navbar-expand-lg.navbar-light` — transparent overlay on
    hero; sticky on scroll with bg `#15181d`. Links: Home, About, Causes,
    Event, Pages (dropdown: Event Details, Elements, Blog, Blog Details,
    Contact). Uppercase, Lora serif, 13px, white, hover `#ff573d`.
  - `section.home-banner-area` — full-height parallax hero (`max-height:
    900px` on desktop, `480px` on mobile ≤425px). Dark overlay
    `rgba(21,24,29,0.7)`. Content: h4 subtitle "We Are A Non-profit"
    (coral `#ff573d`) + h1 "Organization" (60px white Lora bold) + "More
    charity. More better life." + white CTA button (coral bg on hover).
    Background image: `img/common-banner.jpg` via parallax.
  - `section.about_area.lite_bg` — light bg (`#f9f9ff` or `#fbf9ff`).
    Left: top-text coral "How Could You Help", h2 "We Are A Non-profit
    Organization" (48px), paragraph, coral primary button. Right: video
    thumbnail (`img/about-video.jpg`) with centered play button
    (circular, white border, pulse animation, white triangle). Brand
    carousel below (4 grayscale logos, opacity 0.3, full color on hover).
  - `section.features-area.section-gap-top` — grey bg `#ececec`. Section
    title: "How Could You Help". 3 feature cards (`#ececec` bg, 40px
    padding): icon (Flaticon, coral, white circle bg, 5px radius) + h4
    title + paragraph + "Learn More" underline link. Items: "Give
    Donation", "Give Inspiration", "Become Bolunteer".
  - `section.popular-cause-area.section-gap-top` — grey bg `#ececec`.
    Section title: "Popular Causes". 3 cause cards (white inner body,
    no border-radius, image with zoom on hover, shadow on hover). Each:
    tag (coral uppercase), h4 title, raised/goal text (coral for
    numbers), progress bar, donation row (donate button + raised amount).
  - `section.callto-area.section-gap` — parallax image (`img/ct1.jpg`),
    dark overlay `rgba(5,10,52,0.7)`. Centered content: h1 "Volunteer
    Needed At Your Area" (45px white) + paragraph + coral CTA button.
  - `section.upcoming_event_area.section-gap-top` — white bg. Section
    title: "Upcoming Event". 4 event cards (grey bg `#ececec`, image
    with date badge top-right `rgba(21,24,29,0.8)`, content: h3 title,
    countdown timer with days/hours/minutes/seconds). Hover: image
    scale, date badge turns coral.
  - `section.blog-area.section-gap-top` — grey bg `#ececec`. Section
    title: "Latest From Our Blog". Left column: h2 + paragraph + "Learn
    More" link. Right: 2 blog cards (white body, image with hover
    zoom, tag/meta, h4 title, coral on hover).
  - `section.instagram-area.section-gap-top` — 5-column image strip (no
    text, hover reveals semi-transparent overlay + instagram icon).
  - `footer.footer` — dark bg `#15181d`, 130px padding. 4-column grid:
    "About Us" widget (paragraph), "Latest Posts" (links with coral
    dots), "Instagram" (image thumbnails), "Newsletter" (email input +
    subscribe button). Copyright bar at bottom.

- **Screenshot (`charilife-free-template-1.jpg`):** Non-profit hero with
  dark overlay, "Organization" heading, coral accents, charity cause
  cards with progress bars, event countdown, blog grid, Instagram strip,
  dark footer. Warm coral + dark navy palette, serif headings (Lora),
  clean sans-serif body (Roboto).

## Design tokens

| Token                | Value                               | Notes                                                                        |
| -------------------- | ----------------------------------- | ---------------------------------------------------------------------------- |
| `--color-brand`      | `#ff573d`                           | Primary coral-red: buttons, tags, hovers, accents, selection highlight        |
| `--color-dark`       | `#15181d`                           | Navbar sticky bg, footer bg, dark overlay `rgba(21,24,29,0.7)`, headings     |
| `--color-body-text`  | `#666`                              | Body text (Roboto, 14px, weight 300, line-height 25px)                       |
| `--color-heading`    | `#15181d`                           | h1-h6 color (Lora, weight 700)                                               |
| `--color-bg-light`   | `#f9f9ff`                           | About section light bg, body light tint                                       |
| `--color-bg-grey`    | `#ececec`                           | Features, Popular Causes, Blog, Events, CTA backgrounds                      |
| `--color-bg-white`   | `#fff`                              | Card inner body, form backgrounds                                             |
| `--color-subtitle`   | `#ff573d`                           | h4 subtitle text in hero and section accents                                  |
| `--font-heading`     | 'Lora', serif                       | Google Fonts: h1-h6, navbar, button labels, footer titles                    |
| `--font-body`        | 'Roboto', sans-serif                | Google Fonts 300/400/700: body text, paragraphs, form labels                 |
| `--btn-primary`      | bg `#ff573d`, color `#fff`          | `line-height: 48px`, `padding: 0 35px`, `border-radius: 2px`, Lora 15px     |
|                      | hover: transparent bg, `#15181d`    | border `1px solid #ff573d`; hover inverts                                     |
| `--btn-secondary`    | color `#ff573d`, underline          | `primary-btn2`: Lora 14px, underline `#15181d` on hover becomes `#ff573d`    |
| `--section-gap`      | `130px` top/bottom                  | `padding: 130px 0`; mobile ≤991px: `80px 0`                                 |
| `--section-title`    | h2 42px, centered, mb 80px         | Mobile: 30px. Span/accent word in `#ff573d`                                  |
| `--navbar`           | transparent overlay → sticky dark   | Absolute top, z-index 9; scroll: bg `#15181d`, box-shadow; links uppercase   |
|                      | Lora 13px white, hover `#ff573d`    | padding 32px 20px                                                            |
| `--hero`             | full-height (900px desktop)         | 700px tablet, 480px mobile ≤425px; dark overlay 70% opacity                  |
|                      | h1: 60px white Lora bold            | h4 subtitle: `#ff573d`; CTA: white bg, dark text, hover coral               |
| `--video-play`       | circular, white border 8px          | Pulse animation on outer ring; play triangle via CSS border trick             |
| `--feature-card`     | bg `#ececec`, 40px padding          | Icon: white circle, coral icon, 5px radius; h4; paragraph; underline link    |
| `--cause-card`       | white inner body, no radius         | Image: overflow hidden, zoom on hover; tag: coral; progress bar; donate btn  |
| `--event-card`       | bg `#ececec`, image + date badge    | Date badge: dark bg `rgba(21,24,29,0.8)`, white text, Lora bold; countdown   |
| `--blog-card`        | white body, image zoom on hover     | h4 title, tag meta, separator `#cfcfcf`; hover h4 → coral                    |
| `--instagram-strip`  | 5 equal columns, hover overlay      | Semi-transparent dark bg + centered icon on hover                             |
| `--footer`           | bg `#15181d`, 130px padding         | 4-column; titles Lora 18px white; links `#7b838a`, hover `#ff573d`;          |
|                      |                                     | Copyright bar at bottom; per monorepo rule: link componentdock.com           |

## Requirements

### Requirement: Navbar

The system SHALL render a transparent overlay navbar that becomes
sticky dark on scroll, with Lora serif navigation links.

#### Scenario: Desktop navbar

- **GIVEN** the GivePulse app is rendered on a desktop viewport (≥992px)
- **THEN** the navbar SHALL render as a transparent overlay on top of the
  hero section
- **AND** the navigation links SHALL be uppercase, Lora serif, 13px,
  white, with 32px 20px padding
- **AND** the links SHALL be: Home, About, Causes, Event, Blog, Contact
  (simplified — dropdown sub-items omitted per monorepo convention)
- **WHEN** the user scrolls past the hero
- **THEN** the navbar SHALL become sticky with `background: #15181d` and
  a box shadow

#### Scenario: Mobile navbar

- **GIVEN** the viewport is at or below 991px
- **THEN** a hamburger toggle SHALL render
- **WHEN** the user taps the toggle
- **THEN** the nav links SHALL expand in a dropdown below the navbar
- **AND** the navbar background SHALL be `#15181d`

### Requirement: Hero section

The system SHALL render a full-height parallax hero with a dark overlay,
a coral subtitle, a large white heading, a tagline, and a CTA button.

#### Scenario: Desktop hero

- **GIVEN** the GivePulse app is rendered on desktop (≥992px)
- **THEN** the hero SHALL occupy the full viewport height (900px max)
- **AND** a dark overlay (`rgba(21,24,29,0.7)`) SHALL cover the
  background image
- **AND** the content SHALL render right-aligned (col-lg-7, `justify-content-lg-end`)
  with:
  - h4 subtitle: "We Are A Non-profit" in `#ff573d`
  - h1: "Organization" in white, 60px Lora bold
  - Tagline paragraph: "More charity. More better life." in white
  - CTA button: white bg, `#15181d` text, coral border, 2px radius

#### Scenario: Responsive hero

- **GIVEN** the viewport is ≤767px
- **THEN** the hero height SHALL shrink (50% margin-top on content)
- **AND** the h1 SHALL reduce to 40px (35px on ≤425px)
- **AND** content SHALL center-align

### Requirement: About section

The system SHALL render a two-column about section with a video play
button and a brand logo carousel.

#### Scenario: About content

- **GIVEN** the GivePulse app is rendered
- **THEN** the about section SHALL display on a light background
  (`#f9f9ff`)
- **AND** the left column SHALL contain: coral top-text "How Could You
  Help", h2 "We Are A Non-profit Organization" (48px), a paragraph,
  and a coral primary button "Learn More"
- **AND** the right column SHALL contain a video thumbnail with a
  centered circular play button (white border 8px, CSS pulse animation
  on the outer ring)

#### Scenario: Brand carousel

- **GIVEN** the about section is rendered
- **THEN** a row of 4 brand logo placeholders SHALL appear below the
  about text
- **AND** the logos SHALL be grayscale at 30% opacity by default,
  full color at 100% opacity on hover (transition 0.3s)

### Requirement: Features section

The system SHALL render a three-column features section on a grey
background with icon cards.

#### Scenario: Feature cards

- **GIVEN** the GivePulse app is rendered
- **THEN** the features section SHALL have a grey `#ececec` background
  with a centered section title "How Could You Help" (h2, 42px, accent
  word in coral)
- **AND** three feature cards SHALL render in a row, each containing:
  - A white circular icon container (5px radius) with a coral icon
  - An h4 title: "Give Donation", "Give Inspiration", "Become
    Bolunteer" (per source spelling)
  - A descriptive paragraph
  - A "Learn More" secondary link with underline
- **AND** on hover the h4 title SHALL turn coral

### Requirement: Popular Causes section

The system SHALL render a "Popular Causes" fundraiser grid with cause
cards showing progress bars and donate buttons.

#### Scenario: Cause cards

- **GIVEN** the GivePulse app is rendered
- **THEN** a section with grey `#ececec` background and title "Popular
  Causes" SHALL render
- **AND** 3 cause cards SHALL display, each containing:
  - A cover image (zoom on hover, 1.2x scale)
  - White inner body (no border-radius)
  - Coral uppercase tag (e.g. "FOOD", "EDUCATION", "MEDICAL")
  - h4 title
  - Raised/Goal text with coral-highlighted amounts
  - A progress bar
  - A donation row with a coral "Donate" button and raised amount
- **WHEN** a cause card is hovered
- **THEN** a subtle shadow SHALL appear (0px 12px 40px rgba(153,153,153,0.2))

### Requirement: Call-to-Action section

The system SHALL render a full-width parallax CTA with a dark overlay
and a volunteer recruitment message.

#### Scenario: CTA content

- **GIVEN** the GivePulse app is rendered
- **THEN** a parallax section with dark overlay `rgba(5,10,52,0.7)` SHALL
  render
- **AND** centered content SHALL include:
  - h1: "Volunteer Needed At Your Area" (45px white, 30px on mobile)
  - A descriptive paragraph in white
  - A coral primary CTA button

### Requirement: Events section

The system SHALL render an upcoming events grid with countdown timers.

#### Scenario: Event cards

- **GIVEN** the GivePulse app is rendered
- **THEN** a section with title "Upcoming Event" SHALL render on white bg
- **AND** 4 event cards SHALL display (grey `#ececec` background), each
  containing:
  - A cover image with a date badge (top-right, dark bg
    `rgba(21,24,29,0.8)`, white text, Lora bold)
  - An h3 title: "Working Syran Children", "Help And Homeless",
    "Get Volunteeer Idea 2019", "Get Volunteeer Idea 2019"
  - A countdown timer showing days, hours, minutes, seconds (hardcoded
    values — no live countdown needed, static display)
- **WHEN** an event card is hovered
- **THEN** the image SHALL scale 1.2x and the date badge SHALL turn coral

### Requirement: Blog section

The system SHALL render a blog section with a left text column and
right blog cards on a grey background.

#### Scenario: Blog layout

- **GIVEN** the GivePulse app is rendered
- **THEN** a section with grey bg `#ececec` and title "Latest From Our
  Blog" SHALL render
- **AND** a left column SHALL contain an h2, paragraph, and a
  "Learn More" secondary link
- **AND** 2 blog cards SHALL render in the right column, each with:
  - A cover image (zoom on hover)
  - A white body card with coral tag, meta text (separator `#cfcfcf`),
    h4 title (coral on hover)
  - A "Learn More" link at the bottom

### Requirement: Instagram section

The system SHALL render a 5-column Instagram image strip with hover
overlays.

#### Scenario: Instagram strip

- **GIVEN** the GivePulse app is rendered
- **THEN** 5 equal-width image thumbnails SHALL render in a row
- **AND** on hover, a semi-transparent dark overlay SHALL cover each
  image with a centered Instagram icon

### Requirement: Footer

The system SHALL render a dark four-column footer with widgets and a
copyright bar.

#### Scenario: Footer content

- **GIVEN** the GivePulse app is rendered
- **THEN** a dark footer (`#15181d`, 130px padding) SHALL render with
  4 widget columns:
  1. "About Us" — heading + paragraph text
  2. "Latest Posts" — heading + list of links with coral dot icons
  3. "Instagram" — heading + grid of image thumbnails
  4. "Newsletter" — heading + email input + subscribe button
- **AND** a copyright bar SHALL appear at the bottom
- **AND** per monorepo rule, the footer SHALL link to
  https://www.componentdock.com/ branded as "Component Dock"

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics for all interactive elements.

#### Scenario: Semantics

- **GIVEN** the GivePulse app is rendered
- **THEN** all navigation links SHALL be in a `<nav>` with
  `aria-label="Main navigation"`
- **AND** the hero SHALL use `<section>` with `aria-label="Hero"`
- **AND** all buttons SHALL have accessible labels
- **AND** the video play button SHALL expose `aria-label="Play video"`
  and `aria-expanded`
- **AND** images SHALL have meaningful `alt` text
- **AND** visible focus-visible rings SHALL appear on all interactive
  elements
- **AND** the page SHALL have a skip-to-content link

### Requirement: Placeholder images

The system SHALL use deterministic picsum.photos placeholder images
instead of the original asset files.

#### Scenario: Image placeholders

- **GIVEN** the GivePulse app is rendered
- **THEN** all images SHALL use `https://picsum.photos/seed/<name>/<w>/<h>`
  format with deterministic seeds (e.g. `givepulse-hero-1920x900`,
  `givepulse-about-600x400`, etc.)
- **AND** NO original ColorLib assets (images, fonts, CSS) SHALL be used
  or referenced

## Verification checklist

- [ ] `npm run verify:app -- givepulse` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual match: dark navbar → hero with coral subtitle + white heading
      → about with video play → grey features → grey cause cards →
      parallax CTA → events grid → grey blog section → Instagram strip
      → dark 4-column footer.
- [ ] Design tokens: brand coral `#ff573d`, dark `#15181d`, Lora headings,
      Roboto body, 2px button radius, 130px section gaps.
- [ ] Responsive: hero shrinks on mobile, navbar collapses to hamburger,
      columns stack, cards go single-column.
- [ ] Accessibility: skip link, semantic HTML, focus-visible rings,
      aria labels on interactive elements.
- [ ] Footer links to https://www.componentdock.com/.
