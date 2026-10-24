# Template: Journeybar (Search Form Bar)

## Purpose

Journeybar is a travel search-bar widget template: a photographic hero
headline over a tabbed multi-service search bar that switches between
hotel, car and flight searches and submits the selected criteria.

It is an original React recreation of the ColorLib "Colorlib Search 17"
free template (source: https://colorlib.com/wp/template/colorlib-search-17/),
built under a DIFFERENT name (**Journeybar**), with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

The reference is a single-purpose search widget rather than a full site:
a warm amber hero band, a short headline and one wide white search bar
with service tabs and a submit button. The recreation uses an amber
`700 → 600 → 800` gradient with a `black/20` scrim, Poppins throughout,
and an accessible tabs pattern (`role="tab"` / `role="tabpanel"` with
`aria-selected` and `aria-controls`) so keyboard users can switch
services.

## Design Tokens

| Token          | Value                    | Notes                             |
| -------------- | ------------------------ | --------------------------------- |
| Font family    | `'Poppins', sans-serif`  | Whole page                        |
| Hero gradient  | `amber-700 → amber-600 → amber-800` | Diagonal background    |
| Hero scrim     | `black/20`               | Image/contrast overlay            |
| Hero text      | `#ffffff` on `amber-100` | Heading and subtitle              |
| Page surface   | `gray-100`               | Area below the hero               |
| Bar surface    | `#ffffff`                | Search bar card                   |
| Brand (measured) | `#ff8300` | live sheet paints it ×3 — `background` on `.btn-submit`; style.css?v=716d3d5e (19,845 B, sha256 2d3e995316a5) · <https://colorlib.com/etc/searchf/colorlib-search-17/> |

<!-- role-rule-tokens: colorlib-search-17/typeface -->
**Role rule (measured 2026-10-25):** 1 rule(s) own typeface; strongest `body{font-family:"Lato", "Arial", "Helv}` — the design declares `Lato`; this prep states `Poppins`, which no rule that owns the body typeface declares. The sibling prep `travelgate` states the measured value.
<!-- /role-rule-tokens -->

## Requirements

### Requirement 1: Hero And Headline

The page SHALL render a hero band with the h1 `Find Your Perfect Journey`
and the subtitle "Search hotels, cars, and flights all in one place" over
the amber gradient.

#### Scenario: Visitor loads the page

- **WHEN** the page loads
- **THEN** the h1 and subtitle are visible and centred above the search bar
- **AND** the document title is `JourneyBar — Travel Search Form`

### Requirement 2: Service Tabs

The search bar SHALL expose three tabs — Hotels, Cars, Flights — as
`role="tab"` controls with `aria-selected`, `aria-controls` and matching
`role="tabpanel"` panels labelled by their tabs.

#### Scenario: Visitor switches the search type

- **WHEN** the visitor activates the `Cars` tab
- **THEN** `aria-selected="true"` moves to `Cars`, the Cars panel is
  shown and the Hotels panel is hidden

### Requirement 3: Per-Service Fields

Each tab panel SHALL expose the fields for its service — destination and
dates for hotels, pick-up/return and class for cars, and route, dates and
cabin class for flights (`Economy`, `First Class`, `Business`, `Luxury`
appear across the panels).

#### Scenario: Visitor fills the flight search

- **WHEN** the visitor opens the `Flights` tab
- **THEN** the panel exposes origin, destination, date and cabin-class
  fields with labels bound to their controls

### Requirement 4: Search Affordance

The bar SHALL render a `Search` button in the reference's amber style
below the active panel. The widget is a front-end form demo: activating
`Search` SHALL NOT navigate away or submit to a backend.

#### Scenario: Visitor submits a search

- **WHEN** the visitor fills the active panel and activates `Search`
- **THEN** the page stays put with the entered criteria intact
- **AND** no network request is issued

### Requirement 5: Component Dock Footer

The footer SHALL link `https://www.componentdock.com/`.

#### Scenario: Visitor looks for more templates

- **WHEN** the visitor reaches the footer
- **THEN** a link named for Component Dock points at
  `https://www.componentdock.com/`

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/journeybar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/journeybar/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/journeybar`)
- [ ] Lint passes (`npm run lint`)
- [x] Vitest coverage is 100% for `apps/journeybar`
- [ ] Build succeeds (`npm run build --workspace @free-react-templates/journeybar`)
- [ ] Footer links to Component Dock
- [x] `public/CNAME` is `journeybar.free.componentdock.com` and `homepage` matches
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Hero And Headline — the h1 and subtitle are visible and centred above the search bar
- [x] Service Tabs — aria-selected="true"` moves to `Cars`, the Cars panel is
- [ ] Per-Service Fields — the panel exposes origin, destination, date and cabin-class
- [ ] Search Affordance — the page stays put with the entered criteria intact
