# Clutch — Implementation Tasks

Source design: **Hvac** (`https://colorlib.com/wp/template/hvac/`) → recreation name **clutch**. Shipped at https://clutch.free.componentdock.com.

Scope: Clutch is a single-page car-dealership landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hvac" design (see TEMPLATES.md), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Component breakdown

Render order as composed in `apps/clutch/src/App.tsx`:

### 1. Navbar
- The system SHALL render a top navigation bar with the site name "Clutch", a "Home" link, and a dark-mode toggle button.
- Scenario — Navbar content:
  - **GIVEN** the Clutch page is rendered
  - **WHEN** the page loads
  - **THEN** the navbar SHALL show the site name "Clutch" and a "Home" link pointing to the page root
  - **AND** the navbar SHALL show a dark-mode toggle button
- Scenario — Dark mode toggle:
  - **GIVEN** the page is rendered
  - **WHEN** the user presses the dark-mode toggle
  - **THEN** the `.dark` class SHALL be toggled on the document root element
  - **AND** the toggle SHALL reflect the current mode

### 2. Hero
- The system SHALL render a full-width hero with a background image, a featured car heading, a price, and call-to-action buttons.
- Scenario — Hero content:
  - **GIVEN** the page is rendered
  - **WHEN** the hero is displayed
  - **THEN** it SHALL show an overline (e.g. "Find your dream car") and a level-1 headline (e.g. "Porsche Cayenne S")
  - **AND** it SHALL show a monthly price and a "Test Drive" button

### 3. Services
- The system SHALL render a "What We Offers" section with four service cards.
- Scenario — Service cards:
  - **GIVEN** the page is rendered
  - **WHEN** the services section is displayed
  - **THEN** it SHALL show the heading "What We Offers"
  - **AND** it SHALL render four service cards (Rental A Cars, Buying A Cars, Car Maintenance, Support 24/7)

### 4. Feature
- The system SHALL render a "We Are a Trusted Name In Auto" section with two paragraphs, action buttons, and a feature list.
- Scenario — Feature content:
  - **GIVEN** the page is rendered
  - **WHEN** the feature section is displayed
  - **THEN** it SHALL show the heading "We Are a Trusted Name In Auto"
  - **AND** it SHALL render an "About Us" button and a feature list with at least three items (Engine, Turbo, Cooling)

### 5. CarOffers
- The system SHALL render a "Best Vehicle Offers" section with car cards, each showing a model name, a year, and a price.
- Scenario — Offer cards:
  - **GIVEN** the page is rendered
  - **WHEN** the offers section is displayed
  - **THEN** it SHALL show the heading "Best Vehicle Offers"
  - **AND** it SHALL render at least two car cards with model names and prices

### 6. ChooseUs
- The system SHALL render a "Why People Choose Us" section with a checkmark list and a video play button.
- Scenario — Checklist:
  - **GIVEN** the page is rendered
  - **WHEN** the choose-us section is displayed
  - **THEN** it SHALL show the heading "Why People Choose Us"
  - **AND** it SHALL render a list of at least three reasons
  - **AND** it SHALL show a play button for the video block

### 7. Blog
- The system SHALL render a "Latest News Updates" section with three post cards.
- Scenario — Post cards:
  - **GIVEN** the page is rendered
  - **WHEN** the blog section is displayed
  - **THEN** it SHALL show the heading "Latest News Updates"
  - **AND** it SHALL render three post cards with titles and excerpts

### 8. Footer
- The system SHALL render a footer with the site name, a short tagline, contact information, and social links.
- Scenario — Footer content:
  - **GIVEN** the page is rendered
  - **WHEN** the footer is displayed
  - **THEN** it SHALL show the site name "Clutch" and contact information
  - **AND** it SHALL show social links (GitHub, X, LinkedIn)

### Cross-cutting requirements

- **Search form** — The system SHALL render a car search form with year, brand, model, and mileage selects and a search button, switchable between "Car Rental" and "Buy Car" tabs.
  - Scenario — Search fields: **GIVEN** the page is rendered; **WHEN** the search form is displayed; **THEN** the form SHALL contain labeled selects for year and brand; **AND** the form SHALL show a search button; **AND** submitting the form SHALL NOT reload the page (client-side only)
  - Scenario — Tab switch: **GIVEN** the search form is displayed; **WHEN** the user switches to the "Buy Car" tab; **THEN** the form heading SHALL update to "Buy your dream car"
- **Page composition** — The system SHALL compose all sections in a single page with a main landmark and a document title.
  - Scenario — Full page render: **GIVEN** the Clutch app is rendered; **WHEN** the page loads; **THEN** the page SHALL compose the Navbar in the banner landmark, all sections in the main landmark, and the Footer in the contentinfo landmark; **AND** the document title SHALL be "Clutch — Car Dealership Template"
- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/clutch/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/clutch/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] `npm run spec:validate` passes; [ ] `bash scripts/verify-app.sh clutch` passes (typecheck + lint + 100% coverage + build); [ ] Every section above exists in `apps/clutch/src/App.tsx` in the documented order; [ ] Design tokens (#db2d2e red, #353535/#323232 darks, Lato) in `src/index.css` `@theme`; [ ] No ColorLib assets copied — all images picsum-seeded, icons lucide-react; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/clutch` ships on https://clutch.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/clutch/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/clutch/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/clutch/public/CNAME` = `clutch.free.componentdock.com`
  and the package `homepage` = `https://clutch.free.componentdock.com`.
