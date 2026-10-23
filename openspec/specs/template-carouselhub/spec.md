# Template: CarouselHub (Carousel / Gallery)

## Purpose

CarouselHub is a single-page carousel gallery template with a three-slide
hero carousel, collection grids, a horizontal work slider and a newsletter
capture, all in a sky-blue-on-slate palette with dark-mode support.

It is an original React recreation of the ColorLib "Carousel 03" free
template (source: https://colorlib.com/wp/template/carousel-03/), built
under a DIFFERENT name (**CarouselHub**), with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

The reference is a Bootstrap-carousel showcase: a full-width slider with
circular prev/next controls and dot pagination, followed by grid sections
that present the same imagery. Design tokens were taken from the rendered
reference screenshot because the preview path returns 404; the recreation
keeps the sky-blue brand accent, the slate-dark hero and the light
`#f8fafc` section alternation.

## Design Tokens

| Token          | Value     | Notes                                     |
| -------------- | --------- | ----------------------------------------- |
| Font family    | `'Inter', system-ui, sans-serif` | Page typography          |
| Brand          | `#0284c7` | Primary accent (buttons, active dot)      |
| Brand dark     | `#0369a1` | Hover state                               |
| Slate dark     | `#0f172a` | Hero and headings                         |
| Slate light    | `#f8fafc` | Alternating section background            |
| Card surface   | `#ffffff` | Cards on slate-light sections             |
| Radius         | `rounded-md` / `rounded-full` | Buttons and carousel dots   |
| Surface (measured) | `#b063c5` | paints it ×4 — `background` on `.owl-carousel .owl-dots .owl-dot.cl-active`; style.css?v=18e25668 (19,122 B, sha256 05c98090314f) · <https://preview.colorlib.com/theme/bootstrap/carousel-03/> |

## Requirements

### Requirement 1: Navbar

The navbar SHALL expose the brand, the section links, a mobile menu
toggle (`Open menu` / `Close menu`) and a dark-mode toggle whose name
flips between `Switch to dark mode` and `Switch to light mode`.

#### Scenario: Visitor toggles the mobile menu

- **WHEN** the visitor activates the menu toggle on a narrow viewport
- **THEN** the menu opens, the toggle's accessible name becomes
  `Close menu`, and activating it again closes the menu

#### Scenario: Visitor toggles dark mode

- **WHEN** the visitor activates the theme toggle
- **THEN** the `.dark` class flips on `document.documentElement` and the
  toggle's name flips to `Switch to light mode`

### Requirement 2: Hero Carousel

The hero SHALL be a three-slide carousel with circular `Previous slide`
and `Next slide` controls and one dot button per slide named
`Go to slide 1` … `Go to slide 3`.

#### Scenario: Visitor steps through the slides

- **WHEN** the visitor activates `Next slide`
- **THEN** the active slide advances and wraps from the last slide to the
  first
- **AND** activating a `Go to slide N` dot jumps straight to that slide

### Requirement 3: Collection And Work Sections

The page SHALL render a `Featured Collections` grid and an
`Explore Our Work` slider section, each laid out as an h2 heading over a
responsive card grid.

#### Scenario: Visitor scrolls past the carousel

- **WHEN** the visitor scrolls the page
- **THEN** the h2 `Featured Collections` and its card grid are visible
- **AND** the h2 `Explore Our Work` renders its own card row below it

### Requirement 4: Newsletter Capture

The newsletter section SHALL provide an email field and a `Subscribe`
button that intercepts submission and clears the field (front-end demo,
no backend call).

#### Scenario: Visitor subscribes

- **WHEN** the visitor submits an email
- **THEN** the form's default submit is prevented and the input is reset
- **AND** the visitor stays on the page

### Requirement 5: Component Dock Footer

The footer SHALL link `https://www.componentdock.com/` branded as
Component Dock.

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reaches the footer
- **THEN** a `contentinfo` landmark contains a link to
  `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/carouselhub/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/carouselhub/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/carouselhub`)
- [ ] Lint passes (`npm run lint`)
- [x] Vitest coverage is 100% for `apps/carouselhub`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/carouselhub`)
- [ ] Footer links to Component Dock
- [x] `public/CNAME` is `carouselhub.free.componentdock.com` and `homepage` matches
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
