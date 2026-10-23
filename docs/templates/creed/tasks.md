# Creed — Implementation Tasks

Source design: **Faith 2** (`https://colorlib.com/wp/template/faith-2/`) → recreation name **creed**. Shipped at https://creed.free.componentdock.com.

Scope: Creed is a church website template with a navbar, hero, about band, activities, donate, blog and footer. It recreates the ColorLib **Faith 2** design (https://colorlib.com/wp/template/faith-2/, preview: https://preview.colorlib.com/theme/faith2/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/creed/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/creed/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Next Big Event: · Church Camp — Dec 25 · Creed · Send Donations

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous slide · Next slide

### 3. Cta
- No dedicated spec block — hold this band to the design notes.
- Anchors: Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt · Visitors Info

### 4. About
- No dedicated spec block — hold this band to the design notes.

### 5. Activities
- No dedicated spec block — hold this band to the design notes.
- Anchors: Church Activities · Upcoming Events · See All Events → · Latest Sermons · See More →

### 6. Donate
- No dedicated spec block — hold this band to the design notes.
- Anchors: Donate to our Charities · Donate

### 7. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · Stay up to date with the latest happenings at our church and community events. · Read More →

### 8. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Creed · Contact Us · Sunday Worship: 10:30 AM · Useful Links

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/creed/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/creed/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/creed` ships on https://creed.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/creed/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/creed/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/creed/public/CNAME` = `creed.free.componentdock.com`
  and the package `homepage` = `https://creed.free.componentdock.com`.
