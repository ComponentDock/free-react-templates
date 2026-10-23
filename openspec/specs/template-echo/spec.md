# Template: Echo (Personal Portfolio)

## Purpose

Echo is a single-page personal portfolio template — a creative portfolio
for web designers and developers. It is an original React recreation of
the ColorLib free "Beckham" template
(preview: https://preview.colorlib.com/theme/beckham/ — personal/creative portfolio),
built under a different name with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Beckham** — https://colorlib.com/wp/template/beckham/
- **Preview**: `https://preview.colorlib.com/theme/beckham/` — HTTP 200, title
  `Beckham Muff | UI/UX Designer and Front-End Developer`. The demo is a
  **3.0.1 rebuild** (`?v=3.0.1` on every asset, Bootstrap 5 variable layer
  inlined into the theme sheet) — the colour story below is the *current* live
  demo; the pre-3.0 release the screenshot shows is darker/simpler (see the delta
  note in `docs/templates/echo/design-notes.md`).
- **Stylesheets measured**: `css/style.min.css?v=3.0.1` — **170,789 B**
  (theme + inlined Bootstrap 5 + self-hosted Poppins `@font-face`);
  `vendor/swiper/14.3.0/swiper-bundle.min.css` 14,615 B;
  `vendor/photoswipe/5.4.4/photoswipe.css` 7,423 B (both framework-only).
- **Measured how**: hex-literal census per sheet, then the winning rule per
  selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Page ink | `#121212` | 15 | `body` background — the whole page is dark |
| Body copy | `#8c8c8c` | — | `body` colour, 18 px / 1.8 |
| **Design accent blue** | `#2f89fc` | 27 | `a` (base + hover), `.text-primary`, `#colorlib-main-nav li.active span` (label + underline), `.owl-dot.active span`, `.KW_progressBar` fill, `.home-slider .overlay` |
| Bootstrap `primary` mint | `#79efb4` | 21 | **framework variable override only**: `--bs-primary` users — `.form-control:focus` (`border-color:#bcf7da`, ring `#79efb440`), `.form-check-input:checked`, `.form-range` thumb (`::-webkit`/`::-moz`), `.btn-outline-primary` |
| Nav / panel dark | `#121212` | 15 | offcanvas nav, section panels (`#colorlib-main-nav`) |
| White | `#fff` | 70 | headings, `.home-slider` copy, cards |
| Bootstrap greys | `#6c757d` 20 / `#343a40` 18 / `#f8f9fa` 16 | — | framework layer, paints nothing theme-level |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `Poppins, Arial, sans-serif` — weights **300 / 400 / 700** self-hosted (`../fonts/poppins/poppins-latin-{300,400,700}-normal.woff2`) | `body` rule + `@font-face` block |
| Body | 18 px / line-height 1.8, `#8c8c8c` | `body` rule |
| Headings | white, `font-weight: 300` on the hero name | `h1`–`h6` + `.heading` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Buttons | Bootstrap `.btn` family; the theme's own CTA is the text link with `#2f89fc`; radius `4px` on kit controls |
| Radius | `50%` ×10 (dots, avatars), `4px` on inputs/buttons, `var(--bs-border-radius)` elsewhere |
| Bands | dark `#121212` throughout: full-bleed hero photo with `#2f89fc`-tinted overlay → intro band → portfolio grid → counters → blog → contact → dark footer; the offcanvas menu is `#121212` with `#2f89fc` active rules |
| Screenshot check | The TEMPLATES.md screenshot (pre-3.0) is the same dark page with a **blue** link accent — no mint anywhere; mint appears only in form-control states |

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Echo lives in `apps/echo` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Structure (from ColorLib Beckham preview)

1. **Sidebar Navigation** — dark left sidebar with author photo, numbered menu items (01–06)
2. **Top Header** — sticky top bar with author photo + name logo
3. **Hero Slider** — full-height background images with overlay, centered text
4. **About Section** — split layout: author image left, bio + social links + contact right
5. **Services Section** — 3-column grid with icons and service lists
6. **Portfolio Section** — 6 alternating image/text project cards
7. **Counter Section** — 3 achievement counters (Clients, Projects, Coffee)
8. **Footer** — dark footer with social links, contact email, copyright

## Requirements

### Requirement: Sidebar Navigation

The system SHALL render a dark sidebar navigation with the site name,
an author photo, and numbered navigation links (Home, Resume, Services,
Portfolio, Blog, Contact).

#### Scenario: Desktop sidebar

- **GIVEN** the page is rendered on desktop
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the site name "Echo"
- **AND** it SHALL show an author photo
- **AND** it SHALL show numbered links (01 Home, 02 Resume, 03 Services, 04 Portfolio, 05 Blog, 06 Contact)

#### Scenario: Mobile menu toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user presses the hamburger toggle
- **THEN** the mobile menu SHALL become visible

### Requirement: Header

The system SHALL render a sticky top header with the author photo and site name.

#### Scenario: Header content

- **GIVEN** the header renders
- **WHEN** I look at the top bar
- **THEN** I SHALL see the author photo and "Echo" as the site name

### Requirement: Hero Section

The system SHALL render a full-height hero section with a background image,
overlay, and centered text.

#### Scenario: Hero content

- **GIVEN** the hero section renders
- **WHEN** I read the content
- **THEN** I SHALL see a greeting line ("Hello! I'm")
- **AND** I SHALL see the name "Echo" in large heading

### Requirement: About Section

The system SHALL render an about section with a split layout:
author image on the left, bio text on the right.

#### Scenario: About content

- **GIVEN** the about section renders
- **WHEN** I read the content
- **THEN** I SHALL see an "About" heading
- **AND** I SHALL see a bio paragraph
- **AND** I SHALL see social media links
- **AND** I SHALL see contact information (email, phone)

### Requirement: Services Section

The system SHALL render a services section with 3 service cards.

#### Scenario: Service cards

- **GIVEN** the services section renders
- **WHEN** I count the service cards
- **THEN** I SHALL see 3 service items with icons and lists of sub-services

### Requirement: Portfolio Section

The system SHALL render a portfolio section with 6 project items
in an alternating image/text layout.

#### Scenario: Portfolio items

- **GIVEN** the portfolio section renders
- **WHEN** I count the project items
- **THEN** I SHALL see 6 project items with images, category labels, titles, and descriptions

### Requirement: Counter Section

The system SHALL render a counter section with 3 achievement statistics.

#### Scenario: Counter items

- **GIVEN** the counter section renders
- **WHEN** I count the statistics
- **THEN** I SHALL see 3 counter items (Clients, Projects done, Cups of coffee)

### Requirement: Footer

The system SHALL render a dark footer with social links, contact email,
and a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer attribution

- **GIVEN** the footer renders
- **WHEN** I look for the attribution
- **THEN** I SHALL see a link to https://www.componentdock.com/
- **AND** the link text SHALL mention "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/echo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/echo/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Sidebar Navigation — it SHALL show the site name "Echo"
- [x] Header — I SHALL see the author photo and "Echo" as the site name
- [ ] Hero Section — I SHALL see a greeting line ("Hello! I'm")
- [x] About Section — I SHALL see an "About" heading
- [ ] Services Section — I SHALL see 3 service items with icons and lists of sub-services
- [ ] Portfolio Section — I SHALL see 6 project items with images, category labels, titles, and descriptions
- [ ] Counter Section — I SHALL see 3 counter items (Clients, Projects done, Cups of coffee)
