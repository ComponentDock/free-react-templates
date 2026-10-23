# Template: Shuttervibe (Photography Portfolio)

## Purpose

Shuttervibe is a photography portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib free "Thumber"
photography portfolio design (see TEMPLATES.md), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original design features a fixed black header bar, a full-screen Swiper
image gallery with thumbnail strip, expandable image info panels, a zoom
button per slide, an off-canvas mobile menu, and a responsive photo grid page
with hover overlays. Shuttervibe follows the same section structure and
matches the design tokens (brand pink #e44985, Quicksand font, black
background, white info panels).

- **Source**: ColorLib "Thumber" — https://colorlib.com/wp/template/thumber/
- **Preview**: https://preview.colorlib.com/theme/thumber/

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Thumber** — https://colorlib.com/wp/template/thumber/
- **Preview**: `https://preview.colorlib.com/theme/thumber/` — HTTP 200 on 2026-10-23, 31,481 bytes, title `Thumber — Photography portfolio`.
- **Stylesheet measured**: `css/style.min.css?v=3.1.0` — 44,624 bytes, sha256 `93f224e63a95…`, plus `kit/icons.css?v=3.1.0` (2,433 B) and the vendor set (`vendor/bootstrap-5.3.8` 232,111 B, swiper 14.3.0, photoswipe 5.4.4, fontawesome 7.3.1 subset).
- **REBUILT demo.** The banner comment reads `Thumber 3.1.0`, sheets carry `?v=3.1.0`, markup loads Bootstrap **5.3.8** and a `/kit/` component layer. The live page is a **dark editorial re-design**, not the classic light Thumber that `apps/shuttervibe` recreates — every mismatch below is **drift**, not a wrong prep.
- **Measured how**: hex-literal census of `style.min.css` + winning rule per selector; Bootstrap-5 chrome (`#0d6efd`, `#6c757d`, `#198754`, `#ffc107`, `#0dcaf0`, `#dc3545`, `#f8f9fa`) is excluded.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand pink | `#e44985` | 17 | `--bs-link-color` · `.site-section-heading:after` (rule under headings) · `.ul-check.primary li:before` · `.site-menu .active > a` / `> li > a:hover` · `.btn.btn-outline-white:hover` |
| Primary button | `#b5225a` | 7 | `.btn.btn-primary` fill · `.prose blockquote` rule · `.field-exercise` left border · `.filter-bar button[aria-pressed=true]` |
| Focus/hover accent | `#f69cc0` | 10 | `:focus-visible` outline · `.form-control:focus` border · `.gallery-thumbs .swiper-slide[aria-current=true]:before` · `.text-link:hover` · `.site-footer a:hover` |
| Charcoal surface | `#303030` | 13 | `.project-meta` · `.project-next` · `.principles` · `.service-row` · `.process-grid li` text/blocks |
| Photo plate | `#181818` | 8 | `.collection-image`, `.essay-image`, `.about-image`, `.service-image`, `.journal-image` placeholder surfaces |
| Gallery surface | `#141414` | — | `.gallery-top` / `.swiper-slide` background, form-control focus fill, `.contact-aside > div` |
| Header bar | `#000` | — | `.header-bar` fixed black navigation column |
| Footer | `#080808` | 1 | `.site-footer` background |
| Body copy | `#b8b8b8` | 12 | `body` color · `.form-control::placeholder` · `.site-footer` · `.collection-caption .eyebrow` |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| UI / body | `Quicksand` (self-hosted woff2, weights 300/400/500/700) · 1rem / 1.7 | `:root --bs-body-font-family`, `@font-face` block |
| Display headings | **`Georgia, "Times New Roman", serif`** · `font-weight: 400` · `clamp(48px, 6.5vw, 98px)` on `.home-intro h2` / `.page-intro h1`; 34–56px on cards (`34`, `36`, `46`, `56`) | `.home-intro h2`, `.wide-collection h2`, `.service-row h2`, `.journal-card h3`, `.commission h2` |
| Buttons | 12px · letter-spacing · `min-height: 48px` | `.btn.btn-primary` |
| Lead paragraph | Georgia 28px `#e8e8e8` | `.article-lead` |

This is a **two-face** system: Quicksand for chrome, **Georgia serif for every display line** — the shipped app uses Quicksand for both.

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Page | dark canvas, fixed `.header-bar` `#000` (250px column; a 70px bar under `lg`), content in `.section-block { margin: 100px 0 }` |
| Buttons | `.btn { border-radius: 30px }`; primary `#b5225a` `min-height: 48px`, `padding: 0 28px`, 12px; `.btn.btn-outline-white` `border: 2px solid #fff` |
| Form fields | `.form-control` `border: none`, `border-bottom: 2px solid gray`, `border-radius: 0`, `background: none`, white text; focus `#141414` fill + `#f69cc0` border |
| Gallery | `.gallery-top` `height: calc(100vh - 170px)` on `#141414`; controls `#161616` `border-radius: 4px`; `.play-single-big` 90×90 circle, `2px solid #fff`; `.custom-pagination a` circles |
| Footer | `.site-footer` `#080808`, top rule, `padding: 56px max(48px, (100% - 1380px)/2) 24px`, 14px copy |

Section order measured in the reference DOM: fixed `.header-bar` → `.home-intro` (Georgia display line "The everyday," + intro copy, 1.3fr/1fr grid) → `.section-block` ("A story beyond the frame." with `.collection-caption` cards "Rooms to breathe" / "A little closer") → `.section-block` ("Look a little longer." with essay cards) → `.commission` ("Something in mind?" + CTA, top rule) → `.site-footer` → end. The app's per-photo info panel / zoom / thumbnail strip map onto `.gallery-top` + `.gallery-thumbs` + `.gallery-playback` controls in this rebuild.

## Requirements

### Requirement: Header bar

The system SHALL render a fixed black header bar at the top with the logo
"Shuttervibe" on the left and a hamburger "Menu" toggle on the right. Desktop
nav links (Home, Photos, About Me, Contact) SHALL be visible on large
screens; the hamburger toggle SHALL be visible on small screens.

#### Scenario: Header renders logo and menu toggle

- **GIVEN** the Shuttervibe page is loaded
- **WHEN** the page renders
- **THEN** a fixed black header bar SHALL be visible at the top
- **AND** the logo "Shuttervibe" SHALL be shown in white, uppercase, bold
- **AND** a hamburger "Menu" toggle SHALL be shown on the right

#### Scenario: Desktop nav links

- **GIVEN** the viewport is wide (lg breakpoint and above)
- **WHEN** the page renders
- **THEN** the nav links Home, Photos, About Me, Contact SHALL be visible
- **AND** the active page link SHALL be highlighted in brand pink (#e44985)

### Requirement: Full-screen image gallery

The system SHALL render a Swiper-based gallery filling the viewport below the
header. The main image area SHALL occupy 80% of the remaining height, and a
thumbnail strip SHALL occupy the remaining 20%.

#### Scenario: Gallery displays main images

- **GIVEN** the home page is active
- **WHEN** the gallery renders
- **THEN** a main image SHALL fill 80% of the viewport height below the header
- **AND** navigation arrows SHALL appear on hover

#### Scenario: Thumbnail strip

- **GIVEN** the gallery is rendered
- **WHEN** the thumbnail strip displays
- **THEN** thumbnails SHALL be 80px tall with 0.4 opacity
- **AND** the active thumbnail SHALL have a 4px solid brand pink (#e44985) border
- **AND** hovering a thumbnail SHALL set opacity to 1.0
- **AND** clicking a thumbnail SHALL navigate the main gallery to that slide

### Requirement: Image info panel

Each gallery slide SHALL have a white info panel at the bottom-left that starts
collapsed at 60×60px showing only an arrow icon. Clicking the arrow SHALL
expand the panel to show the image title and description. Clicking again SHALL
collapse it.

#### Scenario: Expand info panel

- **GIVEN** a gallery slide is displayed
- **WHEN** the user clicks the expand arrow button
- **THEN** the info panel SHALL expand to show the image title and description
- **AND** the arrow icon SHALL rotate 180°

#### Scenario: Collapse info panel

- **GIVEN** the info panel is expanded
- **WHEN** the user clicks the collapse arrow button
- **THEN** the info panel SHALL collapse back to 60×60px

### Requirement: Zoom button

Each gallery slide SHALL have a white 60×60px zoom button at the bottom-right
with a gray (#b3b3b3) search icon. Clicking it SHALL open the full-resolution
image in a new tab.

#### Scenario: Zoom button renders

- **GIVEN** a gallery slide is displayed
- **WHEN** the slide renders
- **THEN** a zoom button SHALL be visible at the bottom-right
- **AND** clicking the zoom button SHALL open the image URL in a new tab

### Requirement: Mobile menu

The system SHALL provide an off-canvas mobile menu that slides in from the
right (300px wide, white background) when the hamburger toggle is clicked.

#### Scenario: Open mobile menu

- **GIVEN** the page is rendered on a small screen
- **WHEN** the user clicks the "Menu" toggle
- **THEN** a 300px off-canvas menu SHALL slide in from the right
- **AND** the menu background SHALL be white
- **AND** the menu SHALL contain nav links: Home, Photos, About Me, Contact
- **AND** the active link SHALL be highlighted in brand pink (#e44985)

#### Scenario: Close mobile menu

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks the close button or the backdrop
- **THEN** the mobile menu SHALL slide out to the right

### Requirement: Photo grid page

The system SHALL render a responsive photo grid when navigating to the Photos
page. Each photo SHALL show an image at 300px height (200px on mobile) with a
dark overlay on hover showing a centered search icon and category label.

#### Scenario: Photo grid renders

- **GIVEN** the Photos page is active
- **WHEN** the page renders
- **THEN** a responsive grid of photo items SHALL be displayed
- **AND** each photo SHALL show an image at 300px height
- **AND** hovering a photo SHALL show a dark overlay with centered icon + category

#### Scenario: Responsive photo grid

- **GIVEN** the Photos page is active
- **WHEN** the viewport is below the md breakpoint
- **THEN** photo grid images SHALL reduce to 200px height

### Requirement: Footer

The system SHALL render a footer linking to Component Dock.

#### Scenario: Footer content

- **GIVEN** any page is rendered
- **WHEN** the footer displays
- **THEN** it SHALL show "More templates at Component Dock"
- **AND** the "Component Dock" link SHALL point to https://www.componentdock.com/

### Requirement: Navigation between pages

The system SHALL support navigation between the home (gallery) page and the
photos (grid) page via the nav links.

#### Scenario: Navigate to photos

- **GIVEN** the home page is active
- **WHEN** the user clicks "Photos" in the nav
- **THEN** the photo grid SHALL replace the gallery
- **AND** the document title SHALL remain "Shuttervibe — Photography Portfolio"

#### Scenario: Navigate back to home

- **GIVEN** the photos page is active
- **WHEN** the user clicks "Home" in the nav
- **THEN** the gallery SHALL replace the photo grid

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/shuttervibe/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/shuttervibe/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Header bar — a fixed black header bar SHALL be visible at the top
- [ ] Full-screen image gallery — a main image SHALL fill 80% of the viewport height below the header
- [ ] Image info panel — the info panel SHALL expand to show the image title and description
- [ ] Zoom button — a zoom button SHALL be visible at the bottom-right
- [ ] Mobile menu — a 300px off-canvas menu SHALL slide in from the right
- [ ] Photo grid page — a responsive grid of photo items SHALL be displayed
- [ ] Navigation between pages — the photo grid SHALL replace the gallery
