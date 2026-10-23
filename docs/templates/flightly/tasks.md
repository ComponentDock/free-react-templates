# Flightly — Implementation Tasks

Source design: **Colorlib Search 20** (`https://colorlib.com/wp/template/colorlib-search-20/`) → recreation name **flightly**. Shipped at https://flightly.free.componentdock.com.

Scope: A full-screen flight search form hero template with a background image, dark overlay, centered heading, and a white card containing a multi-field search form (from, to, dates, passengers) with a branded search button.

## Component breakdown

Render order as composed in `apps/flightly/src/App.tsx`:

### 1. FlightSearchForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: search · Flight search · Passengers · Adults · Children

### 2. Footer
- The template SHALL display a footer with a link to componentdock.com branded as "Component Dock".
- Scenario — Footer renders with link:
  - **WHEN** the page loads
  - **THEN** a footer is visible
  - **AND** the footer contains a link to https://www.componentdock.com/
  - **AND** the link text mentions "Component Dock"

### Cross-cutting requirements

- **Hero section with background image** — The template SHALL display a full-viewport hero section with a background image and a semi-transparent dark overlay.
  - Scenario — Hero renders on page load: **WHEN** the page loads; **THEN** a full-screen hero section is visible; **AND** a background image is displayed covering the full viewport
- **Search heading** — The template SHALL display a prominent heading "Search Flights" in the hero section.
  - Scenario — Heading is visible: **WHEN** the page loads; **THEN** a heading with text "Search Flights" is displayed; **AND** the heading is white and centered
- **Search form card** — The template SHALL provide a white card with rounded corners containing the flight search form.
  - Scenario — Card renders with correct styling: **WHEN** the page loads; **THEN** a white card is visible with border-radius of 10px; **AND** the card is centered on the page
- **Flight search form fields** — The template SHALL provide a search form containing From text input, To text input, Depart date input, Return date input, Passengers dropdown, and a Search button.
  - Scenario — Search form renders all fields: **WHEN** the page loads; **THEN** a text input with placeholder "City, Region or Airport" is present for From; **AND** a text input with placeholder "City, Region or Airport" is present for To; **AND** a Depart date input is present; **AND** a Return date input is present; **AND** a Passengers control is present
  - Scenario — User can type in From input: **WHEN** the user types "New York" in the From input; **THEN** the input value updates to "New York"
  - Scenario — User can type in To input: **WHEN** the user types "London" in the To input; **THEN** the input value updates to "London"
  - Scenario — User can set departure date: **WHEN** the user enters a departure date; **THEN** the date value updates
  - Scenario — User can set return date: **WHEN** the user enters a return date; **THEN** the date value updates
  - Scenario — Passengers controls: **WHEN** the page loads; **THEN** the passengers section shows "1 Adult, 0 Children"; **WHEN** the user clicks the plus button for adults; **THEN** the adult count increases to 2; **WHEN** the user clicks the minus button for adults; **THEN** the adult count decreases back to 1
  - Scenario — Form submission is handled: **WHEN** the user clicks the Search button; **THEN** the form submission is prevented (no page reload)
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/flightly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/flightly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/flightly` ships on https://flightly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/flightly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/flightly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/flightly/public/CNAME` = `flightly.free.componentdock.com`
  and the package `homepage` = `https://flightly.free.componentdock.com`.
