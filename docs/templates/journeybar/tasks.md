# Journeybar — Implementation Tasks

Source design: **Colorlib Search 17** (`https://colorlib.com/wp/template/colorlib-search-17/`) → recreation name **journeybar**. Shipped at https://journeybar.free.componentdock.com.

Scope: Journeybar is a travel search-bar widget template: a photographic hero headline over a tabbed multi-service search bar that switches between hotel, car and flight searches and submits the selected criteria.

## Component breakdown

Render order as composed in `apps/journeybar/src/App.tsx`:

### 1. JourneyBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Destination · Check-in date · Check-out date · Number of guests · Pick-up location · Pick-up date

### 2. Footer
- The footer SHALL link `https://www.componentdock.com/`.
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor reaches the footer
  - **THEN** a link named for Component Dock points at

### Cross-cutting requirements

- **Hero And Headline** — The page SHALL render a hero band with the h1 `Find Your Perfect Journey` and the subtitle "Search hotels, cars, and flights all in one place" over the amber gradient.
  - Scenario — Visitor loads the page: **WHEN** the page loads; **THEN** the h1 and subtitle are visible and centred above the search bar; **AND** the document title is `JourneyBar — Travel Search Form`
- **Service Tabs** — The search bar SHALL expose three tabs — Hotels, Cars, Flights — as `role="tab"` controls with `aria-selected`, `aria-controls` and matching `role="tabpanel"` panels labelled by their tabs.
  - Scenario — Visitor switches the search type: **WHEN** the visitor activates the `Cars` tab; **THEN** `aria-selected="true"` moves to `Cars`, the Cars panel is
- **Per-Service Fields** — Each tab panel SHALL expose the fields for its service — destination and dates for hotels, pick-up/return and class for cars, and route, dates and cabin class for flights (`Economy`, `First Class`, `Business`, `Luxury` appear across the panels).
  - Scenario — Visitor fills the flight search: **WHEN** the visitor opens the `Flights` tab; **THEN** the panel exposes origin, destination, date and cabin-class
- **Search Affordance** — The bar SHALL render a `Search` button in the reference's amber style below the active panel. The widget is a front-end form demo: activating `Search` SHALL NOT navigate away or submit to a backend.
  - Scenario — Visitor submits a search: **WHEN** the visitor fills the active panel and activates `Search`; **THEN** the page stays put with the entered criteria intact; **AND** no network request is issued
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/journeybar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/journeybar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/journeybar`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/journeybar`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/journeybar`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `journeybar.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/journeybar` ships on https://journeybar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/journeybar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/journeybar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/journeybar/public/CNAME` = `journeybar.free.componentdock.com`
  and the package `homepage` = `https://journeybar.free.componentdock.com`.
