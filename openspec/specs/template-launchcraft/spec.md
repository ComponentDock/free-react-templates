# Template: Launchcraft (Startup Landing Page)

## Purpose

Launchcraft is a single-page startup landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Startright" free template (source:
https://colorlib.com/wp/template/startright/), built under a
DIFFERENT name (**Launchcraft**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 5 multi-section landing page for a startup/SaaS
product: dark teal hero with illustration, "As seen on" logo strip, split
content sections with orange-accented image wraps, stats counter section,
6-card feature grid, and a multi-column footer with subscribe form.

## Naming

The ColorLib source name "Startright" is FORBIDDEN as the app name.
**Launchcraft** is the new, original name — single lowercase word,
kebab-case, no collision with `apps/`, `openspec/specs/`, `docs/templates/`,
or any TEMPLATES.md name (verified: zero hits for `launchcraft` in
`ls apps/`, `ls openspec/specs/`). Source slug + preview URL are recorded in the design reference
section below.

## Design reference (replication findings)

- **Original:** ColorLib "Startright" (page title: "Startright — Free
  Bootstrap 5 Website Template by Colorlib"). Source slug: `startright`.
  Preview URL: https://preview.colorlib.com/theme/startright/
  (HTTP 200, verified 2026-08-25).
- **Live preview — REACHABLE (verified 2026-08-25):**
  HTML fetched from `https://preview.colorlib.com/theme/startright/`
  (14,080 bytes, 363 lines). Stylesheets: `css/style.css` (Bootstrap 5
  customized — primary `#f2ad5f`, secondary `#10495c`; custom sections
  override Bootstrap vars). Fonts: Poppins 400/700 via Google Fonts
  `<link>` (Cloudflare-hosted woff2). Icon fonts: icomoon + flaticon
  (replace with lucide-react). Scripts: bootstrap.bundle.min.js,
  tiny-slider.js, aos.js (scroll animations), glightbox.min.js,
  counter.js, custom.js.
- **Live DOM structure (section order, from fetched HTML):**
  1. **Navbar** — `nav.site-nav` → `.site-navigation`: logo "Startright."
     left, nav links right (Home, Solutions [dropdown with sub-menus],
     Plans & Pricing, Why Us, Contact Us), burger toggle for mobile.
  2. **Hero** — `.hero` (bg `#10495c`, 100vh, padding-top 12rem):
     `.intro` with h1 "A big business starts small" (white, bold) + "Get
     started" button (`.btn-primary.btn-primary-to-outline`), illustration
     in `.img-wrap` (bg `#f2ad5f`, rounded) with image right-aligned.
  3. **Logos strip** — `.section.logos`: "As seen on" heading + 5 logos
     (New York Times, Forbes, Fox, Business Insider, NBC) in a centered
     flex row. Replace with placeholder logos or text badges.
  4. **Section 1 (split)** — `.section.secion-1` (note: typo in source):
     dark bg `#10495c` via `:after` pseudo-element; left: illustration in
     orange `.img-wrap`; right: content with h2 "A better way to run your
     business" + body text + 3 bullet items (`.ul-check.primary`) + CTA
     button.
  5. **Section 2 (split, bg-light)** — `.section.section-2.bg-light`:
     left: content h2 "Productive with Startright" + body text +
     horizontal testimonial (avatar + blockquote with author "John Doe,
     XYZ Inc."); right: illustration in orange `.img-wrap`.
  6. **Stats counter** — `.section.bg-secondary.section-counter` (bg
     `#10495c`): 3 counters in a row — Reviews 244982, Downloads 2488938,
     Employees 1335. Use animated count-up on scroll (or static).
  7. **Features grid** — `.section` (white bg): h2 "Features" centered +
     6 `.feature-link` cards in 2×3 grid (col-md-6 col-lg-4): icon +
     h3 + paragraph each. Cards have `border-radius: 4px`, hover
     `border-color: #10495c`, icon bg turns `#10495c` with `#f2ad5f` text
     on hover. Icons from icomoon (replace with lucide).
  8. **Footer** — `.site-footer.bg-light`: 4 columns — Help (5 links),
     About (5 links), Support (3 links), Subscribe (email input +
     button). Copyright line with Component Dock link per monorepo rule.
  - **No real submit:** form `action="#"` — mock only.

## Design tokens

| Token               | Value                         | Notes                                                                                              |
| ------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------- |
| `--color-primary`   | `#f2ad5f`                     | Warm orange/gold — hero img-wrap bg, section-1 img-wrap, section-2 img-wrap, feature hover icon bg |
| `--color-secondary` | `#10495c`                     | Dark teal — hero bg, section-counter bg, feature hover border/icon-bg, button-secondary bg         |
| `--color-bg-light`  | `#f8f9fa`                     | Bootstrap `--bs-light` — section-2 bg, footer bg                                                   |
| `--color-white`     | `#fff`                        | Hero text, button-secondary text, counter text                                                     |
| `--color-dark`      | `#000`                        | Feature card text, footer links (muted: `rgba(0,0,0,0.5)`)                                         |
| `--color-body`      | `#212529`                     | Bootstrap body text                                                                                |
| `--font-body`       | 'Poppins', sans-serif         | Google Fonts 400/700; base 16px                                                                    |
| `--radius-card`     | `4px`                         | Feature cards, section-2 contents card                                                             |
| `--radius-img-wrap` | `0` (no explicit radius)      | Orange image wraps — check screenshot; use subtle radius if visible                                |
| `--btn-primary`     | bg `#f2ad5f`, text `#000`     | `.btn-primary.btn-primary-to-outline` — outline variant on hover                                   |
| `--btn-secondary`   | bg `#10495c`, text `#fff`     | Subscribe button in footer                                                                         |
| `--hero-height`     | `100vh`                       | Hero section; `padding-top: 12rem` desktop / `10rem` mobile                                        |
| `--feature-grid`    | 2×3 (`col-md-6 col-lg-4`)     | 6 feature cards with icon + h3 + paragraph                                                         |
| `--footer-columns`  | 4 (2+2+2+6 col-lg)            | Help, About, Support, Subscribe                                                                    |
| `--counter-row`     | 3 items (`col-md-6 col-lg-4`) | Reviews, Downloads, Employees                                                                      |

## Requirements

### Requirement: Page shell and navbar

The system SHALL render the dark teal hero page with a top navigation bar
containing the brand logo and nav links.

#### Scenario: Navbar rendering

- **GIVEN** the Launchcraft app is rendered on a desktop viewport
- **THEN** a navbar SHALL display the logo "Launchcraft." (with trailing
  dot, white text) on the left
- **AND** nav links SHALL render on the right: Home, Solutions (with
  dropdown sub-menu), Plans & Pricing, Why Us, Contact Us
- **AND** on mobile (≤991px) a hamburger menu toggle SHALL replace the
  nav links

### Requirement: Hero section

The hero SHALL be a full-viewport dark teal section with heading,
CTA button, and an illustration in an orange accent wrap.

#### Scenario: Hero layout

- **GIVEN** the app is rendered on desktop
- **THEN** the hero background SHALL be `#10495c` at 100vh height
- **AND** the h1 "A big business starts small" SHALL render white and
  bold with padding-top ~12rem
- **AND** a "Get started" CTA button SHALL render below the heading
  (primary style: `#f2ad5f` bg, `#000` text, outline on hover)
- **AND** an illustration image SHALL render in an orange (`#f2ad5f`)
  `.img-wrap` container aligned to the right half of the hero

#### Scenario: Hero responsive

- **GIVEN** a viewport at or below 991px
- **THEN** the hero height SHALL be auto (not 100vh) with padding-top ~10rem
- **AND** the illustration SHALL stack below the heading content

### Requirement: Logos strip

#### Scenario: "As seen on" logos

- **GIVEN** the app is rendered
- **THEN** a logos section SHALL display "As seen on" centered
- **AND** 5 placeholder logos/badges SHALL render in a centered flex row
  (replacing the source's NYT, Forbes, Fox, Business Insider, NBC images
  with text or generic logo placeholders)

### Requirement: Section 1 — Split content with dark bg

#### Scenario: Split layout

- **GIVEN** the app is rendered
- **THEN** a dark teal (`#10495c`) split section SHALL display:
  left side with an illustration in an orange `.img-wrap`, right side
  with h2 "A better way to run your business" + body text + 3 bullet
  items + "Get started" CTA button
- **AND** the section background SHALL be dark teal (matching hero)
- **AND** heading and text SHALL be white

### Requirement: Section 2 — Testimonial split (bg-light)

#### Scenario: Testimonial layout

- **GIVEN** the app is rendered
- **THEN** a light-gray (`#f8f9fa`) split section SHALL display:
  left side with h2 "Productive with Launchcraft" + body text +
  a horizontal testimonial (avatar image + blockquote with author
  "John Doe, XYZ Inc."), right side with illustration in orange wrap
- **AND** the content card SHALL have white bg with 4px radius

### Requirement: Stats counter section

#### Scenario: Counter display

- **GIVEN** the app is rendered
- **THEN** a dark teal (`#10495c`) stats section SHALL display 3
  counters in a row: Reviews 244982, Downloads 2488938, Employees 1335
- **AND** counter numbers SHALL be large white text with muted labels
- **AND** (optional) numbers SHALL animate counting up on scroll entry

### Requirement: Features grid

#### Scenario: Feature cards

- **GIVEN** the app is rendered
- **THEN** a white-background section SHALL display a centered h2
  "Features" followed by 6 feature cards in a 2×3 grid (3 per row on
  desktop, 2 on tablet, 1 on mobile)
- **AND** each card SHALL contain an icon (lucide-react), an h3 title,
  and a paragraph description
- **AND** cards SHALL have 4px border-radius with a subtle border
- **WHEN** a feature card is hovered
- **THEN** the border color SHALL change to `#10495c` and the icon's
  background SHALL turn `#10495c` with `#f2ad5f` icon color

### Requirement: Footer

#### Scenario: Footer layout

- **GIVEN** the app is rendered
- **THEN** a light-gray (`#f8f9fa`) footer SHALL display 4 columns:
  Help (5 links), About (5 links), Support (3 links), Subscribe
- **AND** the Subscribe column SHALL contain an email input and a
  "Subscribe" button (secondary style: `#10495c` bg, white text)
- **AND** a copyright line SHALL render below with a link to
  https://www.componentdock.com/ branded as "Component Dock"

#### Scenario: Footer responsive

- **GIVEN** a viewport at or below 768px
- **THEN** footer columns SHALL stack vertically

### Requirement: Accessibility and semantics

- **GIVEN** the app is rendered
- **THEN** semantic elements SHALL be used (nav, main, section, footer)
- **AND** all interactive elements SHALL have visible focus-visible rings
- **AND** the hamburger toggle SHALL expose aria-expanded and aria-label

## Verification checklist

- [ ] `npm run verify:app -- launchcraft` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual check: dark teal hero (#10495c) with white heading + orange
      image wrap, logos strip, split sections, stats counters, 6-card
      feature grid with hover effects, light footer with subscribe form.
- [ ] Responsive at 768px: hero stacks, navbar collapses to hamburger,
      grid goes to 1-2 columns, footer stacks.
- [ ] No ColorLib references in `apps/launchcraft/` code (comments included).
- [ ] Footer links to https://www.componentdock.com/ branded "Component Dock".
