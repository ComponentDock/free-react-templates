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

## Verification Checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/carouselhub`)
- [ ] Lint passes (`npm run lint`)
- [ ] Vitest coverage is 100% for `apps/carouselhub`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/carouselhub`)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` is `carouselhub.free.componentdock.com` and `homepage` matches
