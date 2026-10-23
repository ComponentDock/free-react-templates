# Template: Searchgrid (Search Form Bar 12)

## Purpose

Searchgrid is a minimal search form bar template in the free-react-templates monorepo. It is an original React recreation of the ColorLib "Search Form Bar 12" free template (source: https://colorlib.com/wp/template/search-form-bar-12/), built under a DIFFERENT name (**Searchgrid**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The template consists of a single horizontal navigation bar with three elements: brand text on the left, navigation links in the center, and a rounded search input with magnifying glass icon on the far right. The design is clean and minimal — white background, thin gray bottom border, Roboto font family. The page body below the navbar is empty white space.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Search Form Bar 12** — https://colorlib.com/wp/template/search-form-bar-12/
- **Preview**: the slug-only path is a 404; the live demo is the Bootstrap-form
  family path **`https://preview.colorlib.com/theme/bootstrap/search-form-bar-12/`**
  — HTTP 200, title `Search #2` (the served title is the demo label, not the slug).
- **Stylesheet measured**: `css/style.css?v=62bfd2ad` — **11,206 B** (Bootstrap 4
  residue + the form layer; self-hosted Roboto 400/500/700).
- **Measured how**: hex-literal census of that sheet, then the winning rule per
  selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Page / navbar ground | `#fff` | 4 | `body { background-color:#fff }`, `.custom-navbar`, `.cl-form-control` |
| Navbar rule | `#dae0e5` | 1 | `.custom-navbar { border-bottom: 1px solid #dae0e5 }` **plus** `box-shadow: 0 1px 5px rgba(0,0,0,.1)` — the "thin grey line" is border + shadow together |
| Body ink | `#212529` | 1 | `body { color:#212529 }` — inherited by the nav links (they set **no** colour of their own) |
| Field ink | `#495057` | 2 | `.cl-form-control` value text |
| Field border | `#ced4da` | 1 | `.cl-form-control { border: 1px solid #ced4da }` |
| Field focus border | `#000` | — | `.custom-navbar … .cl-form-control:focus { border-color:#000; box-shadow:none }` — the theme overrides Bootstrap's `#80bdff` / `rgba(0,123,255,.25)` ring on *this* control |
| Placeholder | `#ccc` | 4 | `::-webkit-input-placeholder` family |
| Framework blue | `#007bff` | 1 | `a` from the Bootstrap layer only — the sheet carries **no** `#2874f0` |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", …` | `body` rule |
| Nav links | 1 rem, `padding: 25px 0`, `margin-left: 20px` | `.custom-navbar ul li a` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Search field | `.cl-form-control` base `1px solid #ced4da` + `0.25rem` radius, then the nav override: **`border-radius: 30px`**, `padding-left: 35px`, fixed width **120 px** growing to **200 px** on `:focus`/`:active`; the magnifier sits at `left: 15px`, vertically centred |
| Navbar | single white row, `border-bottom: 1px solid #dae0e5`, 1 px shadow; `body { height: 200vh }` so the page below the bar is empty scroll space |
| Icons | Bootstrap-icon glyphs inside the field; no separate icon sheet |

## Requirements

### Requirement: Navbar Layout

The navbar SHALL be displayed as a full-width horizontal bar at the top of the viewport with a white background and a thin gray bottom border.

#### Scenario: Navbar renders on page load

- **WHEN** the page loads
- **THEN** a navigation bar is visible at the top
- **AND** the navbar has a white background
- **AND** the navbar has a 1px light gray bottom border (#e8e8e8)
- **AND** the navbar content is centered with max-width ~1200px

### Requirement: Brand Logo

The navbar SHALL display brand text on the far left in blue (#2874f0), bold and approximately 20px.

#### Scenario: Brand text is visible

- **WHEN** the navbar renders
- **THEN** the brand text "Brand" appears on the far left
- **AND** the brand text is styled in blue (#2874f0)
- **AND** the brand text is bold

### Requirement: Navigation Links

The navbar SHALL display navigation links "Home", "About", "Contact" positioned to the right of the brand, styled in dark gray.

#### Scenario: Nav links are visible

- **WHEN** the navbar renders
- **THEN** navigation links "Home", "About", "Contact" appear
- **AND** the links are positioned to the right of the brand
- **AND** the links are styled in dark gray (#333333)
- **AND** the links are evenly spaced with horizontal padding

### Requirement: Search Input

The navbar SHALL display a search input on the far right with a magnifying glass icon, rounded corners (20px), and placeholder text "Search".

#### Scenario: Search input renders

- **WHEN** the navbar renders
- **THEN** a search input appears on the far right of the navbar
- **AND** the search input has a magnifying glass icon on its left side
- **AND** the search input has placeholder text "Search"
- **AND** the search input has rounded corners (border-radius: 20px)
- **AND** the search input has a light gray border

#### Scenario: Search input accepts text

- **WHEN** the user types in the search input
- **THEN** the input value updates with the typed text

### Requirement: Footer

The template SHALL display a footer with a link to Component Dock.

#### Scenario: Footer renders

- **WHEN** the app loads
- **THEN** a footer is visible at the bottom
- **AND** the footer contains a link to https://www.componentdock.com/
- **AND** the link text contains "Component Dock"

### Requirement: Responsive Behavior

The navbar SHALL collapse navigation links on narrow viewports while keeping brand and search visible.

#### Scenario: Mobile view

- **WHEN** the viewport width is less than 768px
- **THEN** the navigation links are hidden
- **AND** the brand and search bar remain visible

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/searchgrid/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/searchgrid/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar Layout — a navigation bar is visible at the top
- [x] Brand Logo — the brand text "Brand" appears on the far left
- [x] Navigation Links — navigation links "Home", "About", "Contact" appear
- [ ] Search Input — a search input appears on the far right of the navbar
- [ ] Responsive Behavior — the navigation links are hidden
