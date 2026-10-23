# Grillmark — Implementation Tasks

Source design: **Steakshop** (`https://colorlib.com/wp/template/steakshop/`) → recreation name **grillmark**. Shipped at https://grillmark.free.componentdock.com.

Scope: Grillmark is a steakhouse restaurant template with a navbar, hero, banner bottom, breakfast, lunch, reservation, chef, food gallery and brands.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/grillmark/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/grillmark/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Grillmark

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Grillmark · Premium cuts, expertly crafted · Explore Menu

### 3. BannerBottom
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video · Premium cuts, expertly crafted · Watch our story of passion and quality · Explore Menu

### 4. Breakfast
- No dedicated spec block — hold this band to the design notes.
- Anchors: Breakfast · Daily Food Courses with Drinks · Opening Hours · Location

### 5. Lunch
- No dedicated spec block — hold this band to the design notes.
- Anchors: Lunch · Daily Food Courses with Drinks · Walter White · Head Chef

### 6. Reservation
- No dedicated spec block — hold this band to the design notes.
- Anchors: alert · Reservation Confirmed! · Make Another Reservation · Reservation · Book Your Table · Name

### 7. Chef
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Chef · Meet the Master Behind the Grill · Walter White · Head Chef & Founder

### 8. FoodGallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Scroll gallery left · Scroll gallery right · Gallery · Our Signature Dishes

### 9. Brands
- No dedicated spec block — hold this band to the design notes.
- Anchors: Partners · In association with

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe · alert · Top Products · Quick Links · Features · Resources

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/grillmark/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/grillmark/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/grillmark` ships on https://grillmark.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/grillmark/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/grillmark/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/grillmark/public/CNAME` = `grillmark.free.componentdock.com`
  and the package `homepage` = `https://grillmark.free.componentdock.com`.
