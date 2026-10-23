# Template: Oathmark (Legal / Notary Services)

## Purpose

A Legal / Notary Services template with hero, practice areas, about and legal solutions sections. Oathmark is a single-page legal/notary services template — a React recreation of the ColorLib free "Notary" template (preview: https://preview.colorlib.com/theme/notary/ — legal/notary landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Reference-measured design tokens are recorded in **Design tokens** below —
re-measured 2026-10-23 from the preview's `style.css` + its compiled
Bootstrap sheet (see `docs/replication.md`). The peach `#fee2b3`, not a green,
is the brand/CTA colour.

- Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons

Oathmark lives in `apps/oathmark` and uses shared components from `packages/ui`
(cn).

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Notary** — https://colorlib.com/wp/template/notary/
- **Preview**: `https://preview.colorlib.com/theme/notary/` — HTTP 200, **31,181 bytes**, title `Notary — Free Website Template by Colorlib`; original build (Bootstrap **4.3.1** with the theme's own compiled `bootstrap.min.css`).
- **Stylesheets measured**: `css/style.css` — **18,248 bytes** (the whole theme layer) and `css/bootstrap.min.css` — **34,158 bytes** (Bootstrap 4.3.1 with the theme's palette compiled in — this is where the button colour lives, not in `style.css`). Icons only: `fonts/icomoon/style.css` (79,820 B), `fonts/flaticon/font/flaticon.css`, `css/aos.css`, `css/fancybox`, `owl` sheets.
- **Measured how**: hex-literal census per sheet, then the winning rule per selector; the button rule was traced into the Bootstrap sheet because `.btn.btn-primary` is only given padding in the theme layer.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Peach brand | `#fee2b3` | 15 | `.site-navbar` band, `.btn-primary` fill, `.site-navbar .site-menu .active`, form-control focus border, dropdown active bg |
| Peach hover | `#fed48d` | 3 | `.btn-primary:hover` fill (border `#fdcf81`, focus ring `rgba(221,198,158,0.5)`) |
| Body / heading ink | `#364d59` | 2 | `body` (300), `h1`–`h6` (Playfair Display 300) |
| Light band | `#f8f9fa` | 5 | dropdown hover rows, mobile accordion hover |
| Hairline | `#ced4da` | 3 | dropdown/menu dividers |
| Form border | `#efefef` | 1 | `.custom-accordion .btn-link` border |
| Green tick | `#71bc42` | 1 | `.ul-check.success li:before` **only** — a list tick, not a brand/CTA colour |
| On-dark text | `#fff` | 20 | hero H1 (via `.text-white`), footer copy |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Body | `"Roboto"`, 1 rem / 300 / `#364d59`, line-height 1.7 | `body` |
| Headings | `'Playfair Display'`, 300, `#364d59` | `h1`–`h6` |
| Hero H1 | 50 px, Playfair Display, **`<strong>` at 900**, rendered **white** — the markup is `<h1 class="text-white">` and Bootstrap's `.text-white !important` beats the theme's `#000` | `.hero .intro h1` + page markup |
| Buttons | Bootstrap `.btn` 1 rem, `padding: 12px 25px`, `border-radius: .25rem` | `.btn.btn-primary` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Nav | `.site-navbar` **absolute at the top**, `background: #fee2b3`, `padding: 3rem 0` on desktop, logo `1.7rem` black, links `rgba(0,0,0,0.7)`; sticky state flips to `#fff` + `box-shadow: 4px 0 20px -5px rgba(0,0,0,0.2)` |
| Hero | `.hero` `100vh`, `min-height: 770px`, cover photo `images/hero_bg_1.jpg`, `.overlay:before` scrim `rgba(0,0,0,0.2)`, 5/7 split with a white appointment card on the right |
| Sections | `.site-section` `padding: 5em 0` (2.5em under 992 px); footer `8em 0` on a cover photo with `rgba(255,255,255,0.1)` top rule |
| Radius | `50%` on social/icon circles, `4px` on accordion `.btn-link`, Bootstrap's `0.25rem` elsewhere — **no pill buttons** in the reference |
| Bands | peach nav → photo hero → white practicing sections with peach icons → photo testimonial band → white accordion/CTA → photo footer |

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky white navbar with the brand name "Oathmark",
navigation links (Home, Practice Areas, Testimonials, About, Contact), a
Practice Areas dropdown with 6 legal practice areas, and a hamburger toggle
for mobile.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the brand name "Oathmark" linking to #home
- **AND** it SHALL show links to Home, Practice Areas, Testimonials, About, Contact

#### Scenario: Practice Areas dropdown

- **GIVEN** the page is rendered on desktop
- **WHEN** the user clicks the Practice Areas button
- **THEN** a dropdown SHALL appear with 6 practice areas: Bankruptcy Law, Business Law, Civil Rights Law, Criminal Law, Immigration Law, Family Law
- **AND** the dropdown SHALL have aria-expanded="true"

#### Scenario: Mobile menu

- **GIVEN** the page is rendered
- **WHEN** the user clicks the hamburger toggle
- **THEN** the mobile menu SHALL become visible
- **AND** clicking a mobile nav link SHALL close the menu

### Requirement: Hero section

The system SHALL render a full-width hero with a dark image overlay, a split
layout with headline and subtitle on the left, and an appointment booking
form on the right.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero section is displayed
- **THEN** it SHALL show the headline "Notary Public & Legal Solutions"
- **AND** it SHALL display a form with Name, Email, and Date inputs
- **AND** it SHALL have a "Book Appointment" submit button

#### Scenario: Form submission

- **GIVEN** the hero form is visible
- **WHEN** the user fills in all fields and clicks "Book Appointment"
- **THEN** a confirmation message SHALL appear
- **AND** the form SHALL be replaced by the confirmation

### Requirement: Practice Areas section

The system SHALL render a light-background section with 6 practice area cards
in a 3-column grid, each with an icon, title, and description.

#### Scenario: Practice areas grid

- **GIVEN** the user scrolls to the Practice Areas section
- **WHEN** the section is visible
- **THEN** 6 practice area cards SHALL be displayed
- **AND** each card SHALL have an icon, title, and description

### Requirement: About section

The system SHALL render a two-column about section with attorney images on
the left and a headline, description, and CTA button on the right.

#### Scenario: About content

- **GIVEN** the user scrolls to the about section
- **WHEN** the section is visible
- **THEN** it SHALL show 2 attorney images
- **AND** it SHALL show a headline about legal solutions
- **AND** it SHALL have a "Book an appointment" button

### Requirement: Testimonials section

The system SHALL render a light-background section with 3 testimonial cards
showing avatar, name, role, and blockquote.

#### Scenario: Testimonials grid

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the section is visible
- **THEN** 3 testimonial cards SHALL be displayed
- **AND** each card SHALL show an avatar, author name, role, and quote

### Requirement: Legal Solutions section

The system SHALL render a three-column section with an image, text with
checklist, and an accordion FAQ.

#### Scenario: Legal solutions content

- **GIVEN** the user scrolls to the legal solutions section
- **WHEN** the section is visible
- **THEN** it SHALL show the heading "We Have Legal Solutions"
- **AND** it SHALL show a 3-item checklist

#### Scenario: Accordion FAQ

- **GIVEN** the accordion FAQ is visible
- **WHEN** the user clicks a FAQ item
- **THEN** that item SHALL expand and show its answer
- **AND** clicking the same item again SHALL collapse it
- **AND** clicking a different item SHALL expand it and collapse the previous one

### Requirement: Footer

The system SHALL render a dark-background footer with About Us text, social
icons, 4 link columns, and a copyright line linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is displayed
- **THEN** it SHALL show "About Us" with social icons
- **AND** it SHALL show 4 link columns: Quick Links, Resources, Support, Company
- **AND** it SHALL link to https://www.componentdock.com/ branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/oathmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/oathmark/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — it SHALL show the brand name "Oathmark" linking to #home
- [x] Hero section — it SHALL show the headline "Notary Public & Legal Solutions"
- [ ] Practice Areas section — 6 practice area cards SHALL be displayed
- [ ] About section — it SHALL show 2 attorney images
- [ ] Testimonials section — 3 testimonial cards SHALL be displayed
- [x] Legal Solutions section — it SHALL show the heading "We Have Legal Solutions"
