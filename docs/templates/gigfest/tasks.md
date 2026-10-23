# Gigfest — Implementation Tasks

Source design: **Eventcon** (`https://colorlib.com/wp/template/eventcon/`) → recreation name **gigfest**. Shipped at https://gigfest.free.componentdock.com.

Scope: Recreation of ColorLib **Eventcon** (https://colorlib.com/wp/template/eventcon/). Preview: https://preview.colorlib.com/theme/eventcon/ Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript. Dark-themed concert/event landing page with a full-screen hero, performer grid, program schedule, map, sponsor carousel, and footer CTA.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/gigfest/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/gigfest/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: banner · Main navigation · Toggle navigation menu · Mobile navigation

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Concert 2020 · Green Avenue, New York

### 3. Performers
- No dedicated spec block — hold this band to the design notes.
- Anchors: Performer

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Program · It&apos;s time to book your seat · Buy Tickets

### 5. ProgramDetails
- No dedicated spec block — hold this band to the design notes.
- Anchors: Program Details

### 6. MapSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Event venue map

### 7. Sponsors
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sponsor Logos

### 8. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: contentinfo · Green Avenue, New York · Buy Tickets · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/gigfest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/gigfest/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Header: transparent bg, logo, nav with dropdowns, CTA button; [ ] Hero: full-screen bg image, dark overlay, centered date/title/subtitle, decorative shapes; [ ] Performers: black bg, "Performer" heading, 2x2 grid of 4 cards with images; [ ] About: black bg, centered heading, split image+text layout, CTA button; [ ] Program: dark overlay bg, timeline of 4 items with circle indicators; [ ] Map: embedded map placeholder (600px height); [ ] Sponsors: black bg, carousel of brand logos; [ ] Footer: event details, CTA, copyright with Component Dock link; [ ] All sections use Anton headings, Muli body text, #FF4533 brand color; [ ] Buttons use sharp corners (0px border-radius), Anton font; [ ] Dark theme throughout (black backgrounds, light text); [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] Tests at 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/gigfest` ships on https://gigfest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/gigfest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gigfest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gigfest/public/CNAME` = `gigfest.free.componentdock.com`
  and the package `homepage` = `https://gigfest.free.componentdock.com`.
