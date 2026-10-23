# Template: TaskFlow (Personal Portfolio / Creative Agency)

## Purpose

TaskFlow is a single-page personal portfolio and creative agency template.
It is a React recreation of the ColorLib "Work" template
(preview: https://preview.colorlib.com/theme/work/), built under a different
name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Work** — https://colorlib.com/wp/template/work/
- **Preview**: `https://preview.colorlib.com/theme/work/` — HTTP 200, title
  `Work: portfolio of designer Louie Jie`. The demo is a **3.0.0 rebuild**
  (`?v=3.0.0` on every asset, Bootstrap 5 inlined, `.avif` hero images); the
  TEMPLATES.md screenshot is the pre-3.0 release of the same design.
- **Stylesheets measured**: `css/style.min.css?v=3.0.0` — **106,242 B**
  (theme + inlined Bootstrap 5 + one self-hosted Quicksand 400 `@font-face`);
  `vendor/swiper/14.3.0/swiper-bundle.min.css` 14,615 B;
  `vendor/fontawesome/7.3.1/…subset.css` 1,704 B (icons, no colours).
- **Measured how**: hex-literal census per sheet, then the winning rule per
  selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Brand terracotta | `#c04531` | 17 | `a` (base + hover/active/focus), `.btn-primary` fill and **2 px** border, `.btn-primary.btn-outline` label + border, `.pagination li.active` fill, `.colorlib-social li a:hover`, `.KW_progressBar` |
| Brand hover | `#ac3e2c` | — | `--bs-btn-hover-bg` / `--bs-btn-hover-border-color` on `.btn-primary` |
| Ink | `#000` | 7 background / 49 text | dark hero panels, uppercase nav labels |
| Paper | `#fff` | 70 | sidebar, content card, page ground |
| Soft paper | `#fafafa` | 2 | section washes |
| Bootstrap variables | `#0d6efd` 20 / `#6c757d` 18 / `#dc3545` 16 / `#198754` 16 / `#ffc107` 14 | — | framework layer only — **not** a token set |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `Quicksand` (one self-hosted 400 woff2, `fonts/quicksand/quicksand-latin-400-normal.woff2`), `sans-serif` fallback | 15 `font-family` declarations |
| Nav labels | 11–12 px, uppercase, `letter-spacing: 2–3px`, `#000` | sidebar nav |
| Hero card heading | 44 px, weight 400, `#000`, sentence case | `.headline`-style card in the screenshot |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Buttons | `.btn-primary` fill `#c04531` + white label + **`2px solid #c04531`**; `.btn-primary.btn-outline` transparent + `#c04531` label/border, hover fills; radius **4px** |
| Radius | `4px` ×13 (buttons, inputs, cards), `1rem` ×4 (large panels), square hero card corners are 0 |
| Layout (from the screenshot) | **fixed white left sidebar** — black square logotype, uppercase letterspaced nav (Home/Work/About/Services/Blog/Contact), social row, small copyright line — beside a full-bleed photo hero with a white content card overlapping its lower-left corner and a thin outlined "LEARN MORE →" button |
| Bands | sidebar + hero photo → "Welcome & introduce" split (image left, copy right) → services cards → portfolio grid → blog → contact → footer |

TaskFlow lives in `apps/taskflow` and uses shared components from `packages/ui`
(Button, cn).

## Requirements

### Requirement: Sidebar navigation

The system SHALL render a fixed left sidebar with the logo "TaskFlow", navigation
links (Home, Work, About, Services, Blog, Contact), and a footer with copyright
and social media icon links.

#### Scenario: Desktop sidebar display

- **GIVEN** the page is rendered on desktop
- **WHEN** the sidebar is displayed
- **THEN** it SHALL show the logo "TaskFlow" in a black box with white text
- **AND** it SHALL show navigation links: Home, Work, About, Services, Blog, Contact
- **AND** it SHALL show a footer with copyright and Component Dock link

#### Scenario: Mobile sidebar toggle

- **GIVEN** the page is rendered on mobile
- **WHEN** the user taps the hamburger menu button
- **THEN** the sidebar SHALL slide in from the left
- **AND** the toggle button SHALL change to a close icon

### Requirement: Hero slider

The system SHALL render a full-height hero section with slides containing background
images, dark overlays, centered headings, and CTA buttons.

#### Scenario: Hero slide display

- **GIVEN** the page is rendered
- **WHEN** the hero slider is visible
- **THEN** it SHALL display the heading "Strategic Design for Brands"
- **AND** it SHALL show a "Learn More" CTA button

### Requirement: About section with accordion

The system SHALL render an About section with overlapping images, a welcome
heading, descriptive text, and a 3-panel accordion.

#### Scenario: About section content

- **GIVEN** the page is rendered
- **WHEN** the About section is visible
- **THEN** it SHALL show a "Welcome & Introduce" meta heading
- **AND** it SHALL show the name heading "Hola! my name is Louie Jie!"
- **AND** it SHALL render an accordion with 3 panels

#### Scenario: Accordion expand and collapse

- **GIVEN** the About section accordion is visible with the first panel open
- **WHEN** the user clicks "What I do?"
- **THEN** the first panel SHALL collapse
- **AND** the "What I do?" panel SHALL expand

### Requirement: Services section

The system SHALL render a Services section with 6 expertise cards in a 2-column
grid, each with an icon, title, and description.

#### Scenario: Service cards display

- **GIVEN** the page is rendered
- **WHEN** the Services section is visible
- **THEN** it SHALL show the heading "Here are some of my expertise"
- **AND** it SHALL display 6 cards: Branding, Web Design, SEO, Web Development, UI, Help & Support

### Requirement: Portfolio section

The system SHALL render a Work/Portfolio section with 6 project cards in a
2-column grid, each with a background image, overlay, title, tags, and metrics.

#### Scenario: Portfolio grid display

- **GIVEN** the page is rendered
- **WHEN** the Work section is visible
- **THEN** it SHALL show the heading "Recent Work"
- **AND** it SHALL display 6 project cards with background images

### Requirement: Blog section

The system SHALL render a Blog section with 3 post cards in a 3-column layout,
each with an image, date, category, title, excerpt, and "Read More" link.

#### Scenario: Blog cards display

- **GIVEN** the page is rendered
- **WHEN** the Blog section is visible
- **THEN** it SHALL show the heading "Recent Blog"
- **AND** it SHALL display 3 blog cards

### Requirement: CTA section

The system SHALL render a CTA section with a light gray background, heading,
description, and contact button.

#### Scenario: CTA section content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is visible
- **THEN** it SHALL show the heading "Get in Touch!"
- **AND** it SHALL display a "Contact me!" button

### Requirement: Brand styling

The system SHALL apply the correct brand colors, fonts, and button styles
matching the original design.

#### Scenario: Brand color application

- **GIVEN** the page is rendered
- **WHEN** any interactive element is displayed
- **THEN** links and buttons SHALL use the brand color #F75940
- **AND** buttons SHALL have 2px border-radius, uppercase text, 12px font size

### Requirement: Footer branding

The system SHALL include a footer link to Component Dock.

#### Scenario: Footer link

- **GIVEN** the page is rendered
- **WHEN** the sidebar footer is visible
- **THEN** it SHALL contain a link to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/taskflow/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/taskflow/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Hero slider — it SHALL display the heading "Strategic Design for Brands"
- [x] About section with accordion — it SHALL show a "Welcome & Introduce" meta heading
- [x] Services section — it SHALL show the heading "Here are some of my expertise"
- [x] Portfolio section — it SHALL show the heading "Recent Work"
- [x] Blog section — it SHALL show the heading "Recent Blog"
- [x] CTA section — it SHALL show the heading "Get in Touch!"
- [ ] Brand styling — links and buttons SHALL use the brand color #F75940
