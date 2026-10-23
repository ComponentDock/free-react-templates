# Template: Townhub (Directory)

## Purpose

Recreate the ColorLib CityListing directory/listing template as a React 19 + Vite + Tailwind CSS 4 + TypeScript app named "TownHub". The template is a city directory one-pager with a hero search bar, popular locations, how-it-works steps, featured categories, testimonials, newsletter subscribe, blog posts, and a dark footer.

## Design reference (replication findings)

- **Source:** ColorLib "CityListing" — https://colorlib.com/wp/template/citylisting/
- **Source slug:** `citylisting`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/citylisting/ — **HTTP 200**, 34,725 B, fetched 2026-10-23 (page `<title>`: "Directory HTML-5 Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/citylisting/assets/css/style.css`, fetched 2026-10-23): brand `#eb566c`, `#1f2b7b`, `#ff3d1c`, `#ff3368`; dominant neutrals `#f9f9ff`, `#999999`, `#777777`; type Sulphur Point, Sacramento. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/citylisting-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/townhub` had no recorded reference (docs/replication.md requires one).

## Requirements

### Requirement: Page renders all major sections in correct order

The TownHub page SHALL render all 9 sections in order: Navbar, Hero, Popular Locations, How It Works, Categories, Testimonial, Subscribe, Blog, Footer.

#### Scenario: All sections are present

- **GIVEN** the TownHub page is loaded
- **THEN** the navbar should be visible with logo and navigation links
- **AND** the hero section should show the heading "Discover Great Places"
- **AND** the search bar should have a text input, category select, and search button
- **AND** the Popular Locations section should display 3 location cards
- **AND** the How It Works section should show 3 step cards
- **AND** the Featured Categories section should display 4 category cards
- **AND** the Testimonial section should be present
- **AND** the Subscribe section should show an email input
- **AND** the Blog section should show 3 post cards
- **AND** the footer should contain a Component Dock link

### Requirement: Navbar provides navigation and CTA

The navbar SHALL display the Town Hub brand logo, navigation links (Home, About, Categories, Listing, Page, Contact), an "+ Add Listing" CTA button, and a "Sign in or Register" link.

#### Scenario: Navigation links are clickable

- **GIVEN** the navbar is visible
- **THEN** each nav link should be clickable and point to the correct section anchor
- **AND** the "+ Add Listing" button should link to #listing
- **AND** the "Sign in or Register" link should link to #page

### Requirement: Hero search form is interactive

The hero section SHALL display a search form with a text input, category dropdown, and search button.

#### Scenario: User can type in search input

- **GIVEN** the search bar is visible
- **WHEN** the user types in the search input
- **THEN** the input value should update
- **WHEN** the user clicks the Search button
- **THEN** the form should be submittable without navigation

### Requirement: Popular Locations displays 3 cards

The Popular Locations section SHALL display 3 location cards with images and names.

#### Scenario: Location cards show correct content

- **GIVEN** the Popular Locations section is visible
- **THEN** each location card should show an image and location name
- **AND** hovering over a card should show an explore button

### Requirement: Footer contains Component Dock link

The footer SHALL contain a link to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Component Dock credit is present

- **GIVEN** the footer is rendered
- **THEN** it should contain a link to https://www.componentdock.com/
- **AND** the link text should mention "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/townhub/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/townhub/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar provides navigation and CTA — each nav link should be clickable and point to the correct section anchor
- [ ] Hero search form is interactive — the input value should update
- [ ] Popular Locations displays 3 cards — each location card should show an image and location name
