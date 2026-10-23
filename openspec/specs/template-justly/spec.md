# Template: Justly (Fitness Trainer Landing)

## Purpose

A Fitness Trainer template with hero, training categories, services, gallery, pricing and about sections. Justly is a single-page fitness trainer landing template — a React recreation of the ColorLib free "Zacson" template (preview: https://preview.colorlib.com/theme/zacson/ — gym trainer personal site), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Reference-measured design tokens are recorded in **Design tokens** below —
re-measured 2026-10-23 from the live preview's own stylesheet, not carried over
from memory (see `docs/replication.md`).

- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Justly lives in `apps/justly` and uses shared components from `packages/ui`
(Button, ButtonLink, cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Zacson** — https://colorlib.com/wp/template/zacson/
- **Preview**: `https://preview.colorlib.com/theme/zacson/` — HTTP 200, **37,905 bytes**, title `Zacson | Personal Trainer and Gym Coaching`; a **3.0.4 rebuild** (`?v=3.0.4` on every asset, Bootstrap 5.3 variable layer inlined in the theme sheet).
- **Stylesheet measured**: `assets/css/style.min.css?v=3.0.4` — **216,977 bytes** (theme + inlined Bootstrap + self-hosted `@font-face` weights); `vendor/fontawesome/7.3.1/css/fontawesome.subset.css?v=3.0.4` — 1,737 B, icons only.
- **Measured how**: hex-literal census per sheet (count = occurrences in that sheet), then the winning rule per selector. Bootstrap's variable layer is inlined here (`#007bff`×17, `#dc3545`×16, `#198754`×16, `#ffc107`×14, `#0dcaf0`×14, `#212529`×18, `#6c757d`×17, `#f8f9fa`×16) but paints nothing after the theme layer — it is **not** a token set.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Action red | `#e00000` | 10 | `.boxed-btn` label + hover fill, `.pricing-area` price block, `.blog_item_date` chip |
| Nav accent (kit var) | `#FF0000` | 2 | `--kit-nav-accent` (active nav/menu accent only) |
| Heading ink | `#2c234d` | 3 | `h1`–`h6` (Oswald 500) |
| Off-white band | `#f9f9ff` | 27 | alternating section band, kit form fields |
| Ink black | `#000` | 31 | `.black-bg` — training-categories band, `.footer-area` |
| Kit primary navy | `#1f2b7b` | 15 | shared UI-kit `.genric-btn.primary`, contact headings |
| On-dark text | `#fff` | 120 | hero H1, `.boxed-btn` label, footer copy |
| Body copy | `#767676` | 17 | paragraphs on light bands |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `Roboto Condensed, sans-serif`, 16 px | theme layer (`--kit-*` block sets `font-family:Roboto Condensed`) |
| Headings | `Oswald, sans-serif`, 500, `#2c234d` | `h1`–`h6` theme rule |
| Hero H1 | 140 px / **700** / uppercase / `#fff`; 70 px then 50 px at breakpoints | `.hero__caption h1` |
| Nav | `Roboto Condensed`, 15 px | `--kit-nav-font-size: 15px` |
| Buttons | `Oswald`, 14 px, `letter-spacing: 3px`, uppercase | `.boxed-btn` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Section rhythm | `.section-padding` **120 px** top/bottom; `.section-padding30` 100 px (65/70 px under 768 px) |
| Hero | `.slider-area` full-bleed cover photo, `.slider-height` **900 px** (800/650/600/400 px across breakpoints); nav transparent over the photo, H1 lower-left |
| Buttons | `.boxed-btn` `padding: 18px 44px`, `1px solid #e00000`, white fill + `#e00000` label, hover flips to `#e00000` fill + white label; `.large-width` 220 px |
| Radius | **3 px** on kit inputs/buttons, **8 px** on cards; section bands square |
| Bands | photo hero → `#000` categories band → white offers → white pricing on `#f9f9ff` cards → white about → white blog → `#000` footer |

## Requirements

### Requirement: Navigation bar

The system SHALL render a dark navbar with the site name "Justly", section links
(Home, About, Courses, Pricing, Gallery, Contact), and a "Contact" CTA button.
A hamburger toggle opens a mobile menu on small screens.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "Justly" linking to `#home`
- **AND** it SHALL show links to Home, About, Courses, Pricing, Gallery, Contact

#### Scenario: Mobile menu

- **GIVEN** the page is rendered on a mobile viewport
- **WHEN** the hamburger icon is clicked
- **THEN** a dropdown menu SHALL appear with the same navigation links

### Requirement: Hero section

The system SHALL render a full-width hero section with a background image,
greeting text ("Hi, I'm Justly"), heading ("Fitness Coach"), and a "My Courses"
outline button.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is visible
- **THEN** it SHALL display "Hi, I'm Justly" as a subtitle
- **AND** "Fitness Coach" as the main heading
- **AND** a "My Courses" outline button linking to #courses

### Requirement: Training categories

The system SHALL display two training category cards in a two-column grid
(Personal Training, Group Training), each with an image, title, description,
and a CTA button.

#### Scenario: Two categories

- **GIVEN** the page is rendered
- **WHEN** the training categories section is visible
- **THEN** it SHALL show exactly two category cards
- **AND** each card SHALL have an image, title, description, and button

### Requirement: Services (What I Offer)

The system SHALL display three service cards in a row (Body Building, Muscle Gain,
Weight Loss), each with an image, title, and short description.

#### Scenario: Three services

- **GIVEN** the page is rendered
- **WHEN** the services section is visible
- **THEN** it SHALL show exactly three service cards
- **AND** each card SHALL have an image, title, and description

### Requirement: Gallery

The system SHALL display a grid of 6 gallery images with hover overlays showing
a title and an icon.

#### Scenario: Gallery grid

- **GIVEN** the page is rendered
- **WHEN** the gallery section is visible
- **THEN** it SHALL show exactly 6 gallery items
- **AND** each item SHALL display an overlay with title on hover

### Requirement: Pricing

The system SHALL display three pricing cards, each with a plan duration, price,
a list of features with checkmarks, and a "Join Now" button.

#### Scenario: Three pricing tiers

- **GIVEN** the page is rendered
- **WHEN** the pricing section is visible
- **THEN** it SHALL show exactly three pricing cards
- **AND** each card SHALL list 5 features with check icons
- **AND** each card SHALL have a "Join Now" button

### Requirement: About section

The system SHALL render a split-layout About section with text on one side
and an image on the other, including a "My Courses" CTA button.

#### Scenario: About content

- **GIVEN** the page is rendered
- **WHEN** the about section is visible
- **THEN** it SHALL show "About Me" heading
- **AND** descriptive text
- **AND** a "My Courses" button

### Requirement: Blog section

The system SHALL display two blog post cards, each with an image, category
tag, and title.

#### Scenario: Two blog posts

- **GIVEN** the page is rendered
- **WHEN** the blog section is visible
- **THEN** it SHALL show exactly two blog post cards
- **AND** each card SHALL have an image, category, and title

### Requirement: Video section

The system SHALL render a full-width video teaser section with a background
image and a play button overlay.

#### Scenario: Video play button

- **GIVEN** the page is rendered
- **WHEN** the video section is visible
- **THEN** it SHALL show a play button icon centered on a background image

### Requirement: Contact info

The system SHALL display three contact info cards in a row (Location, Phone,
Email), each with an icon, title, and details.

#### Scenario: Three contact cards

- **GIVEN** the page is rendered
- **WHEN** the contact info section is visible
- **THEN** it SHALL show exactly three contact cards
- **AND** each card SHALL have an icon, title, and detail text

### Requirement: Footer

The system SHALL render a dark footer with the site logo, navigation links,
social media icons (Twitter, Facebook, Instagram), and a Component Dock
attribution link.

#### Scenario: Footer links

- **GIVEN** the page is rendered
- **WHEN** the footer is visible
- **THEN** it SHALL show navigation links matching the navbar
- **AND** social media icon links
- **AND** a "More templates at Component Dock" link to
  `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/justly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/justly/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — it SHALL show the site name "Justly" linking to `#home
- [ ] Hero section — it SHALL display "Hi, I'm Justly" as a subtitle
- [ ] Training categories — it SHALL show exactly two category cards
- [ ] Services (What I Offer) — it SHALL show exactly three service cards
- [ ] Gallery — it SHALL show exactly 6 gallery items
- [ ] Pricing — it SHALL show exactly three pricing cards
- [x] About section — it SHALL show "About Me" heading
- [ ] Blog section — it SHALL show exactly two blog post cards
- [ ] Video section — it SHALL show a play button icon centered on a background image
- [ ] Contact info — it SHALL show exactly three contact cards
