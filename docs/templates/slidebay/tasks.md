# Slidebay — Implementation Tasks

Source design: **Carousel 05** (`https://colorlib.com/wp/template/carousel-05/`) → recreation name **slidebay**. Shipped at https://slidebay.free.componentdock.com.

Scope: Recreation of ColorLib **Carousel 05** (`https://colorlib.com/wp/template/carousel-05/`), a modern slide/carousel interface template featuring high-impact hero carousel slides, interactive navigation controls, feature cards, testimonial slider, call-to-action sections, and fully responsive layout.

## Component breakdown

Render order as composed in `apps/slidebay/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Revolve · Home · Slides · About · Contact

### 2. Carousel
- Users SHALL see a primary hero carousel banner with headline, subtitle, and CTA buttons, and interactive navigation controls.
- Scenario — User views the hero carousel:
  - **Given** the user visits the SlideBay home page
  - **When** the page loads
  - **Then** the primary carousel banner is visible with headline, subtitle, and CTA buttons
  - **And** next/previous arrow controls and pagination dots allow switching slides

### 3. Footer
- Users SHALL see navigation links, copyright, and the mandatory Component Dock link.
- Scenario — User reaches the footer:
  - **Given** the user scrolls to the bottom of the page
  - **When** the footer is rendered
  - **Then** navigation links, copyright, and the mandatory "Component Dock" link (`https://www.componentdock.com/`) are prominently displayed

### Cross-cutting requirements

- **Interactive Feature Showcase** — Users SHALL browse core features in a responsive grid.
  - Scenario — User browses core features: **Given** the user scrolls to the feature section; **When** feature cards are displayed; **Then** each card highlights a distinct capability with icon, title, and description
- **Testimonials / Carousel Display** — Users SHALL interact with the testimonial slider to view quotes and author details.
  - Scenario — User interacts with the testimonial slider: **Given** the user views the testimonials section; **When** clicking pagination or swiping through slides; **Then** testimonial quotes and author details update smoothly
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/slidebay/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/slidebay/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/slidebay` ships on https://slidebay.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/slidebay/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/slidebay/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/slidebay/public/CNAME` = `slidebay.free.componentdock.com`
  and the package `homepage` = `https://slidebay.free.componentdock.com`.
