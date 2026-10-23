# Tremolo — Implementation Tasks

Source design: **Accordion 02** (`https://colorlib.com/wp/template/accordion-02/`) → recreation name **tremolo**. Shipped at https://tremolo.free.componentdock.com.

Scope: Recreation of ColorLib `accordion-02` (Free Food Menu Accordion), previewed at `https://colorlib.com/wp/template/accordion-02/`.

## Component breakdown

Render order as composed in `apps/tremolo/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Tremolo · Order Online

### 2. Hero
- #### Scenario: Page renders with hero banner - **WHEN** the user loads the Tremolo food menu app - **THEN** it displays a stylish header banner with title "Exquisite Food, Crafted with Passion" - **AND** a descriptive subtitle about the seasonal menu - **AND** a call-to-action button labeled "Explore Menu"
- Scenario — Page renders with hero banner:
  - **WHEN** the user loads the Tremolo food menu app
  - **THEN** it displays a stylish header banner with title "Exquisite Food, Crafted with Passion"
  - **AND** a descriptive subtitle about the seasonal menu
  - **AND** a call-to-action button labeled "Explore Menu"

### 3. MenuAccordion
- #### Scenario: Expand accordion category - **WHEN** the user clicks on an accordion category header (e.g. "Starters") - **THEN** the accordion expands smoothly to reveal individual menu items - **AND** each item shows its title, description, price, and food thumbnail photo
- Scenario — Expand accordion category:
  - **WHEN** the user clicks on an accordion category header (e.g. "Starters")
  - **THEN** the accordion expands smoothly to reveal individual menu items
  - **AND** each item shows its title, description, price, and food thumbnail photo
- Scenario — Collapse accordion category:
  - **WHEN** an accordion category is expanded
  - **AND** the user clicks the header again
  - **THEN** the panel collapses and hides the menu items
- Scenario — Toggle between categories:
  - **WHEN** an accordion category is expanded
  - **AND** the user clicks a different category header
  - **THEN** the first category collapses and the new one expands

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Tremolo

### 5. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: status · alert · Get in Touch · Reservations, inquiries, or just want to say hello — we would love to hear from you. · Address · Phone

### 6. Footer
- #### Scenario: Footer shows Component Dock link - **WHEN** the user scrolls to the bottom of the page - **THEN** the footer displays the Tremolo brand name and social media links - **AND** a visible "More templates at Component Dock" link pointing to `https://www.componentdock.com/`
- Scenario — Footer shows Component Dock link:
  - **WHEN** the user scrolls to the bottom of the page
  - **THEN** the footer displays the Tremolo brand name and social media links
  - **AND** a visible "More templates at Component Dock" link pointing to `https://www.componentdock.com/`

### Cross-cutting requirements

- **Interactive Item Details and Dietary Badges** — #### Scenario: Display menu item details - **WHEN** menu items are visible inside an expanded accordion - **THEN** each item displays its price formatted correctly (e.g. "$14.50") - **AND** dietary badges (Vegetarian, Spicy, Gluten-Free, Chef's Special) where applicable - **AND** a high-resolution food image from Picsum
  - Scenario — Display menu item details: **WHEN** menu items are visible inside an expanded accordion; **THEN** each item displays its price formatted correctly (e.g. "$14.50"); **AND** dietary badges (Vegetarian, Spicy, Gluten-Free, Chef's Special) where applicable; **AND** a high-resolution food image from Picsum
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/tremolo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/tremolo/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/tremolo` ships on https://tremolo.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/tremolo/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/tremolo/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/tremolo/public/CNAME` = `tremolo.free.componentdock.com`
  and the package `homepage` = `https://tremolo.free.componentdock.com`.
