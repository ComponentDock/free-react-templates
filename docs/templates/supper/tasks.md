# Supper — Implementation Tasks

Source design: **Meal** (`https://colorlib.com/wp/template/meal/`) → recreation name **supper**. Shipped at https://supper.free.componentdock.com.

Scope: Supper is a restaurant template with a navbar, hero, feature cards, about band, chefs, menu band, reservation, testimonials, contact and footer. It recreates the ColorLib **Meal** design (https://colorlib.com/wp/template/meal/, preview: https://preview.colorlib.com/theme/meal/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/supper/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/supper/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Welcome to Supper · Reserve A Table

### 3. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Learn More · Find your best food

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: The Restaurant · It is a paradisematic country, in which roasted parts of sentences fly into your mouth.

### 5. Chefs
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet The Chefs

### 6. Menu
- No dedicated spec block — hold this band to the design notes.
- Anchors: Menu

### 7. Reservation
- No dedicated spec block — hold this band to the design notes.
- Anchors: Reservation form · Reservation · Book your table with us · Name · Email · Phone

### 8. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous review · Next review · Customer Reviews

### 9. Contact
- No dedicated spec block — hold this band to the design notes.
- Anchors: Contact form · Get In Touch · Name · Email · Phone · Message

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Instagram

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/supper/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/supper/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/supper` ships on https://supper.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/supper/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/supper/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/supper/public/CNAME` = `supper.free.componentdock.com`
  and the package `homepage` = `https://supper.free.componentdock.com`.
