# Template: Shutterlane (Photography Gallery)

## Purpose

Shutterlane is a single-page photography gallery hero template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Photo Gallery" free template (source:
https://colorlib.com/wp/template/photogallery/), built under a DIFFERENT
name (**Shutterlane**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a multi-page site (Home, Gallery, Single Gallery, Blog,
Contact) with a fixed left sidebar (455px) and a full-viewport hero
slider using Owl Carousel. The recreation focuses on the **home page
hero section**: a full-height slider with two slides, each showing a
full-bleed background image, a white text box overlay (category label +
heading + description + CTA button), a next-slide preview thumbnail,
and bottom navigation arrows. The sidebar (logo, nav, social links,
copyright) frames the content.

**WHAT MAKES SHUTTERLANE DISTINCT (signature behaviors):**

1. **Fixed 455px left sidebar + right hero slider layout.** The page
   uses a two-column split: a white fixed sidebar on the left (logo at
   top, vertical nav links, rotated social links, copyright at bottom)
   and the main content pushed right (`padding-left: 455px`). The hero
   slider fills the full viewport height minus 77px bottom padding.
2. **Two-slide hero with overlay text boxes and next-slide previews.**
   Each slide is a full-height background image (Owl Carousel with hash
   navigation: `#slide-1`, `#slide-2`). A white `.si-text-box` (395px
   wide, positioned left) overlays the image with: 11px uppercase
   category label ("Photography"), 48px heading ("Project No. 1" /
   "Project No. 2"), 16px body copy, and a bordered "Read More" button.
   A 191×191px next-slide preview thumbnail floats right-center with a
   heavy box-shadow and a "Next" button extending from its right edge.
3. **Bottom owl-nav arrows (prev/next).** Navigation arrows are
   111×88px blocks pinned to the bottom-left of the slider (overlapping
   the sidebar edge): prev is dark (`#323232`), next is white (`#fff`).
   A counter label (`#snh-1`) shows the current slide number at the
   bottom-right.
4. **Rotated social links in the sidebar.** Social icons (Behance,
   Dribbble, Twitter, Facebook, Pinterest) are rotated -90deg and
   displayed vertically along the sidebar's left edge, with a "Find us
   on" text label also rotated.
5. **Top-right special controls.** A fixed 111×91px block in the top
   right contains a search icon (dark bg) and a hamburger menu (hidden
   on desktop, shown on tablet/mobile to toggle the sidebar as a slide-in
   overlay).
6. **Full-screen search overlay.** Clicking the search icon opens a
   black full-screen overlay with a large 40px search input and a round
   close button.
7. **Preloader.** A full-screen black overlay with an animated
   red/purple spinning ring (CSS animation) that fades on load.
8. **PT Sans typography.** The entire template uses PT Sans (400/700)
   from Google Fonts — a clean, humanist sans-serif.
9. **Monochromatic dark palette.** The design is almost entirely
   black/white/grey: `#323232` for text and dark elements, `#898d90`
   for muted text, `#000000` for borders and buttons, `#fff` for
   backgrounds and light elements, `#f7f9fb` for section backgrounds.
   No accent colors — the photography images provide all color.

## Naming

The ColorLib source name "Photo Gallery" is FORBIDDEN as the app name
(and "photogallery" itself must not be reused). **Shutterlane** is the
new, original name — single lowercase word, kebab-case, no collision
with `apps/`, `openspec/specs/`, `docs/templates/`, or any TEMPLATES.md
name (verified 2026-09-18: zero hits for `shutterlane` in TEMPLATES.md,
`ls apps/`, `openspec/specs/`, `docs/templates/`). Source slug + preview
URL are recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Photo Gallery" (page title: "Photo Gallery
  HTML Template"). Listed in TEMPLATES.md under the Photography/Gallery
  section (line 1485 — first unchecked item).
- **Live preview — REACHABLE (verified 2026-09-18 by direct fetch):**
  `https://preview.colorlib.com/theme/photogallery/` returns HTTP 200
  (10,413 bytes). Title: "Photo Gallery HTML Template". The preview is
  the HOME PAGE only (the sidebar + hero slider). Stylesheets:
  `css/bootstrap.min.css` (Bootstrap grid — the recreation uses Tailwind
  instead), `css/font-awesome.min.css` (FA icons — replace with
  lucide-react), `css/owl.carousel.min.css` (carousel — replace with
  CSS-based slider), `css/animate.css` (animations), `css/style.css`
  (24,830 bytes — all custom styling). Scripts: jQuery 3.2.1,
  Bootstrap JS, Owl Carousel, NiceScroll, Isotope, ImagesLoaded,
  CircleProgress, main.js. Fonts: **PT Sans** 400/700 via Google Fonts
  `<link>`.
- **Live DOM structure (from the fetched HTML + style.css):**
  - `body` (PT Sans, `#323232` text) → `div#preloder` (fixed fullscreen
    black bg with spinning ring loader) → `div.spacial-controls` (fixed
    top-right 111×91px: search icon on `#323232` bg + hamburger on
    white bg) → `div.main-warp` (padding-left 455px, height 100%)
  - `header.header-section` (fixed left, 455px wide, white bg, z-index
    9999): logo image (padding-left 54px, padding-top 38px), menu icon
    image, `ul.main-menu` (5 items: Home/active, Gallery, Single gallery,
    Blog, Contact — all uppercase 14px bold `#323232`, padding-left
    63px, active has 2px solid `#000` bottom border), `div.social-links`
    (5 FA icons rotated -90deg, `#c6d7d8` color), `div.social-text`
    ("Find us on", rotated -90deg, `#323232` uppercase 14px bold with
    a 101px black line after), `div.copyright` (fixed bottom of sidebar,
    10px `#c6d7d8` uppercase bold).
  - `div.page-section.home-page` (height 100%) →
    `div.hero-slider.owl-carousel` (height 100%) → two `.slider-item`
    divs (height 100%, `d-flex align-items-center`, background image via
    `data-setbg`):
    - Each slide: `.si-text-box` (395px, white bg, padding 90px 50px
      100px 0) containing: `<span>` "Photography" (11px uppercase bold
      `#898d90` letter-spacing 2px), `<h2>` "Project No. N" (48px
      `#323232` weight 400), `<p>` description (16px `#898d90`
      line-height 1.8), `<a.site-btn>` "Read More" (bordered button).
    - `.next-slide-show` (191×191px, absolute, white bg, 4px white
      border, heavy shadow `0 35px 35px rgba(0,0,0,0.64)`) with
      `<a.ns-btn>` "Next" (95×52px, positioned at right edge of
      thumbnail, white bg, right-arrow background image).
  - `.hero-slider .owl-nav` (absolute, left -111px, bottom 0, width
    222px): two buttons 111×88px each — prev is `#323232` bg, next is
    `#fff` bg.
  - `#snh-1` (absolute, right 0, bottom 0, 111×88px, white bg): slide
    counter, 14px bold `#898d90` with `<span>` 30px `#323232`.
  - `div.search-model` (fixed fullscreen, black bg, z-index 99999,
    hidden by default): centered form with 500px input (40px, no border,
    bottom 2px `#333`), round close button (50px, `#333` bg, white text).
  - Per monorepo convention add a minimal attribution footer linking
    https://www.componentdock.com/ ("Component Dock") — the source has
    only a copyright line in the sidebar.

- **Behaviors (all verified 2026-09-18 from CSS + HTML):**
  - **Owl Carousel:** Two slides with hash navigation (`data-hash`).
    Prev/next arrows at bottom-left of slider. Fade transition (default
    Owl Carousel behavior). The recreation replaces Owl with a CSS/React
    slider (CSS transitions or Framer Motion).
  - **Next-slide preview:** Each slide shows a 191×191px thumbnail of
    the NEXT slide (not the current one) positioned right-center with a
    heavy shadow. A "Next" button extends from the thumbnail's right
    edge. Hidden on tablet/mobile (display: none below 991px).
  - **Sidebar navigation:** Desktop: fixed left sidebar always visible.
    Tablet/mobile (< 992px): sidebar slides in from left (opacity/visibility
    transition), triggered by hamburger toggle. Close button (X icon in
    a circle) appears at top-right of the overlay sidebar.
  - **Search overlay:** Clicking the search icon (top-right dark block)
    shows the fullscreen black overlay with a search input. Close via
    the round "x" button.
  - **Preloader:** Spinning ring animation (red `#f44336` / purple
    `#673ab7` alternating border) on black background. Fades after page
    load.
  - **Social links rotation:** Social icons are rotated -90deg and
    displayed vertically. The "Find us on" text is also rotated with a
    decorative line.
  - **Responsive:** Gallery items go from 33% → 50% → 100% width.
    Sidebar collapses to overlay on tablet/mobile. Text boxes center on
    smaller screens. Slider nav arrows reposition below the slider.

- **Screenshot (`photogallery-free-template.jpg`, viewed via HTML/CSS
  analysis):** The screenshot shows the home page with the fixed white
  left sidebar (logo at top, vertical nav menu, social links) and a
  full-height hero section on the right showing a dark photography
  background image with a white text box overlay (category + heading +
  description + button) on the left side and a preview thumbnail on the
  right. Bottom-left has prev/next arrows. Bottom-right has a slide
  counter. Top-right has search + hamburger icons. Aesthetic: clean,
  monochromatic, editorial photography gallery. Dark images provide
  contrast against the white sidebar and text boxes.

## Design tokens

| Token                    | Value                                   | Notes                                                                                    |
| ------------------------ | --------------------------------------- | ---------------------------------------------------------------------------------------- |
| `--color-bg`             | `#ffffff`                               | Page and sidebar background                                                              |
| `--color-text`           | `#323232`                               | Headings, nav links, buttons, dark UI elements                                           |
| `--color-text-muted`     | `#898d90`                               | Paragraphs, category labels, description text                                            |
| `--color-text-light`     | `#c6d7d8`                               | Social links, copyright text                                                             |
| `--color-border`         | `#000000`                               | Button borders, active nav underline, accordion borders                                  |
| `--color-section-bg`     | `#f7f9fb`                               | Gallery, blog, contact, elements section backgrounds (light grey-blue)                   |
| `--color-overlay`        | `#323232`                               | Gallery hover overlay, search switch bg                                                  |
| `--color-black`          | `#000000`                               | Preloader bg, search overlay bg                                                          |
| `--font-body`            | 'PT Sans', sans-serif                   | Google Fonts 400/700; base 14px (sidebar nav), 16px (body paragraphs)                    |
| `--heading-weight`       | 400 (regular)                           | h2/h3 use weight 400 (NOT bold — unusual for headings)                                  |
| `--sidebar-w`            | `455px`                                 | Fixed left sidebar width; content `padding-left: 455px`                                  |
| `--sidebar-z`            | 9999                                    | z-index of fixed sidebar                                                                 |
| `--btn`                  | transparent bg, 2px solid `#000` border | 16px bold, uppercase, letter-spacing 0.08em, min-width 189px, padding 15px 28px 15px 62px, radius 0, right-arrow icon |
| `--btn-light`            | white border + text                     | `.site-btn.sb-light` for use on dark backgrounds                                         |
| `--btn-solid-dark`       | `#323232` bg, white text               | `.site-btn.sb-solid-dark` for filled dark button                                         |
| `--hero-h`               | 100vh (minus 77px bottom padding)       | Full viewport height slider                                                              |
| `--text-box-w`           | `395px`                                 | White overlay box on each slide                                                          |
| `--text-box-padding`     | `90px 50px 100px 0`                     | Right padding 50px, no left padding (text hugs left edge)                               |
| `--slide-preview`        | `191×191px`, 4px white border           | Next-slide thumbnail, heavy shadow `0 35px 35px rgba(0,0,0,0.64)`, absolute positioned  |
| `--slide-preview-btn`    | `95×52px`                               | "Next" button extending from preview thumbnail right edge, white bg                      |
| `--nav-arrow`            | `111×88px`                              | Prev (dark `#323232` bg) + Next (white `#fff` bg) at bottom-left of slider              |
| `--slide-counter`        | `111×88px`, white bg                    | Bottom-right counter: number in 30px `#323232`, label in 14px `#898d90`                 |
| `--search-overlay`       | fullscreen, `#000` bg                   | z-index 99999, centered 500px input (40px font, bottom 2px `#333` border)              |
| `--preloader`            | fullscreen, `#000` bg                   | 40×40px spinning ring, red/purple alternating, z-index 999999                            |
| `--social-links`         | rotated -90deg                          | `#c6d7d8` icons, vertically stacked, transform-origin top left                          |
| `--copyright`            | fixed bottom of sidebar                 | 10px `#c6d7d8` uppercase bold, 455px wide                                               |
| `--category-label`       | 11px uppercase bold `#898d90`           | letter-spacing 2px                                                                       |
| `--heading-lg`           | 48px weight 400 `#323232`              | Hero slide headings, about headings, blog post titles                                    |
| `--body-text`            | 16px `#898d90` line-height 1.8          | Paragraphs throughout                                                                    |

## Requirements

### Requirement: Page layout

The system SHALL render a two-column layout with a fixed white sidebar on
the left and the main content area pushed right.

#### Scenario: Desktop sidebar

- **GIVEN** the Shutterlane app is rendered on a desktop viewport (≥992px)
- **THEN** a fixed white sidebar SHALL render on the left with width 455px
  and z-index 9999
- **AND** the main content area SHALL have `padding-left: 455px` to avoid
  overlapping the sidebar
- **AND** the sidebar SHALL contain: logo at top, navigation menu,
  social links, and copyright at bottom

#### Scenario: Tablet/mobile sidebar overlay

- **GIVEN** the viewport is below 992px
- **THEN** the sidebar SHALL be hidden off-screen (`left: -150%`,
  `opacity: 0`, `visibility: hidden`)
- **AND** a hamburger menu button SHALL appear in the top-right controls
- **WHEN** the user clicks the hamburger
- **THEN** the sidebar SHALL slide in as a full-screen overlay with
  a close button (X in a circle) at the top right
- **AND** clicking the close button SHALL dismiss the sidebar

### Requirement: Sidebar content

The sidebar SHALL contain the logo, navigation links, social links, and
copyright in a vertical layout.

#### Scenario: Navigation links

- **GIVEN** the sidebar is visible
- **THEN** five navigation links SHALL render: Home, Gallery, Single
  gallery, Blog, Contact
- **AND** each link SHALL be 14px uppercase bold `#323232` with
  padding-left 63px
- **AND** the active link (Home) SHALL have a 2px solid `#000` bottom
  border
- **AND** clicking a link SHALL scroll or navigate to the corresponding
  section (Home = hero, others = placeholder sections)

#### Scenario: Social links

- **GIVEN** the sidebar is visible
- **THEN** five social icons (Behance, Dribbble, Twitter, Facebook,
  Pinterest) SHALL render rotated -90deg vertically
- **AND** the icons SHALL be `#c6d7d8` color, displayed as a vertical
  column
- **AND** a "Find us on" text label SHALL appear below the icons,
  also rotated -90deg, with a decorative 101px black line

#### Scenario: Copyright

- **GIVEN** the sidebar is visible
- **THEN** a copyright line SHALL render fixed at the bottom of the
  sidebar: 10px uppercase bold `#c6d7d8`

### Requirement: Hero slider

The main content area SHALL display a full-height hero slider with two
slides, each containing a background image, text overlay, and next-slide
preview.

#### Scenario: Slider rendering

- **GIVEN** the Shutterlane app is rendered on desktop
- **THEN** a full-viewport-height slider SHALL display with two slides
- **AND** each slide SHALL have a full-bleed background image
  (via `picsum.photos` placeholder)
- **AND** the slider SHALL use CSS transitions (or equivalent) for
  slide changes, replacing the original Owl Carousel

#### Scenario: Slide content

- **GIVEN** a slide is active
- **THEN** a white text box (395px wide, positioned left) SHALL overlay
  the background image
- **AND** the text box SHALL contain: an 11px uppercase bold category
  label ("Photography") in `#898d90` with letter-spacing 2px, a 48px
  heading ("Project No. 1" / "Project No. 2") in weight 400 `#323232`,
  a body paragraph in 16px `#898d90` line-height 1.8, and a "Read More"
  bordered button
- **AND** the text box SHALL have white background with padding
  `90px 50px 100px 0`

#### Scenario: Next-slide preview

- **GIVEN** a slide is active (on viewport ≥992px)
- **THEN** a 191×191px thumbnail of the NEXT slide SHALL display
  right-center of the viewport
- **AND** the thumbnail SHALL have a white 4px border and heavy
  box-shadow (`0 35px 35px rgba(0,0,0,0.64)`)
- **AND** a "Next" button (95×52px, white bg, right-arrow icon) SHALL
  extend from the thumbnail's right edge
- **WHEN** the viewport is below 992px
- **THEN** the next-slide preview SHALL be hidden

#### Scenario: Slider navigation arrows

- **GIVEN** the slider is rendered
- **THEN** two navigation arrows SHALL render at the bottom-left of
  the slider (overlapping the sidebar edge): prev (111×88px, `#323232`
  bg) and next (111×88px, `#fff` bg)
- **AND** clicking prev SHALL navigate to the previous slide
- **AND** clicking next SHALL navigate to the next slide

#### Scenario: Slide counter

- **GIVEN** the slider is rendered
- **THEN** a slide counter SHALL display at the bottom-right (111×88px,
  white bg) showing the current slide number (30px `#323232`) and a
  label (14px `#898d90`)

### Requirement: Button styles

The system SHALL render bordered CTA buttons matching the original's
square, uppercase, arrow-suffixed style.

#### Scenario: Default button

- **GIVEN** a "Read More" or CTA button is rendered
- **THEN** it SHALL have: transparent bg, 2px solid `#000` border, 16px
  bold uppercase text, letter-spacing 0.08em, min-width 189px,
  padding 15px 28px 15px 62px (extra right padding for arrow icon),
  radius 0, and a right-arrow icon positioned at right 23px top 22px
- **AND** hover SHALL keep the same color (`#323232`)

#### Scenario: Light button variant

- **GIVEN** a button is used on a dark background
- **THEN** it SHALL use the `.sb-light` variant: white border and white
  text

### Requirement: Search overlay

The system SHALL provide a full-screen search overlay triggered by the
top-right search icon.

#### Scenario: Open and close search

- **GIVEN** the Shutterlane app is rendered
- **THEN** a search icon SHALL be visible in the top-right controls
  (fixed, 111×91px, `#323232` bg)
- **WHEN** the user clicks the search icon
- **THEN** a fullscreen black overlay SHALL appear with a centered
  500px search input (40px font, bottom 2px `#333` border, no other
  border)
- **AND** a round close button (50×50px, `#333` bg, white text) SHALL
  render at top-right of the overlay
- **WHEN** the user clicks the close button or presses Escape
- **THEN** the overlay SHALL dismiss

### Requirement: Preloader

The system SHALL show a preloader animation on initial page load.

#### Scenario: Preloader display

- **GIVEN** the page is loading
- **THEN** a fullscreen black overlay (z-index 999999) SHALL display
  with a spinning ring animation (40px, alternating red `#f44336` and
  purple `#673ab7` borders)
- **WHEN** the page content has loaded
- **THEN** the preloader SHALL fade out and be removed

### Requirement: Responsive behavior

The layout SHALL adapt across desktop, tablet, and mobile viewports.

#### Scenario: Desktop (≥992px)

- **GIVEN** the viewport is ≥992px
- **THEN** the sidebar SHALL be fixed at 455px, the hero SHALL fill
  the viewport, the next-slide preview SHALL be visible, and gallery
  items (if rendered) SHALL be 33% width

#### Scenario: Tablet (768px–991px)

- **GIVEN** the viewport is between 768px and 991px
- **THEN** the sidebar SHALL collapse to a slide-in overlay
- **AND** the hero text box SHALL center-align and widen to 495px
- **AND** the slider nav arrows SHALL be 90×60px
- **AND** gallery items SHALL be 50% width

#### Scenario: Mobile (<768px)

- **GIVEN** the viewport is below 768px
- **THEN** the sidebar SHALL collapse to a slide-in overlay
- **AND** the hero text box SHALL be full-width with centered text
- **AND** the slider nav arrows SHALL be 90×60px
- **AND** gallery items SHALL be 50% width (or 100% below 480px)

### Requirement: Accessibility and semantics

The system SHALL expose accessible semantics (improvements over the
source, which uses images for icons and has no ARIA).

#### Scenario: Semantics

- **GIVEN** the Shutterlane app is rendered
- **THEN** the sidebar SHALL use `<nav>` with an `aria-label`
- **AND** navigation links SHALL use `<a>` elements with visible
  focus-visible rings
- **AND** the search input SHALL have an associated `<label>`
- **AND** the hamburger toggle SHALL have `aria-label="Open menu"` /
  `aria-label="Close menu"` and `aria-expanded`
- **AND** the slider SHALL expose `role="region"` with
  `aria-label="Photo gallery"` and current slide announced via
  `aria-live` or `aria-roledescription`

### Requirement: Footer

The system SHALL include the required attribution footer.

#### Scenario: Component Dock credit

- **GIVEN** the Shutterlane app is rendered
- **THEN** the footer SHALL link to https://www.componentdock.com/
  branded as "Component Dock"

## Verification checklist

- [ ] `npm run verify:app -- shutterlane` green: typecheck → lint → vitest
      (100% coverage) → build (per-app gate).
- [ ] Visual diff vs the live preview at
      https://preview.colorlib.com/theme/photogallery/:
      fixed white 455px left sidebar with logo + nav + social links,
      full-height hero slider with two slides, white text box overlays,
      next-slide preview thumbnails, bottom nav arrows, slide counter.
- [ ] Behavior check: slider navigates between 2 slides, next-slide
      preview shows the OTHER slide's thumbnail, nav arrows work,
      search overlay opens/closes, sidebar collapses to overlay on
      mobile, preloader shows and fades.
- [ ] Responsive check: sidebar overlay on <992px, centered text boxes,
      50%/100% gallery items, hidden preview thumbnails on mobile.
