# Quarters — Implementation Tasks

## Token re-read (2026-10-24s) — superseded values below

This task list was written before the live sheet was re-measured. Where it names
design colours or fonts, use `openspec/specs/template-quarters/spec.md`
§Design tokens and `design-notes.md` §Token re-read instead — the summary:

lead **teal `#1f6f8b`** (42 decls) + pill CTA gradient `#f82a7e → #752a90`; typeface **Noto Sans JP**; hero overlay `rgba(0,0,0,0.2)`.

Source design: **Props** (`https://colorlib.com/wp/template/props/`) → recreation name **quarters**. Shipped at https://quarters.free.componentdock.com.

Scope: A real estate landing page with a transparent navbar over a full-viewport hero, property information split panel, apartment browse grid. It also includes featured apartments collage, customer testimonials carousel, news cards, social strip, and a three-column footer. Recreation of ColorLib **Props**.

## Component breakdown

Render order as composed in `apps/quarters/src/App.tsx`:

### 1. Navbar
- Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### 2. Hero
- Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### 3. PropertyInformation
- No dedicated spec block — hold this band to the design notes.
- Anchors: Property information

### 4. BrowseApartments
- No dedicated spec block — hold this band to the design notes.
- Anchors: Browse apartments

### 5. FeaturedApartments
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured apartments

### 6. Testimonials
- Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### 7. News
- Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### 8. SocialStrip
- No dedicated spec block — hold this band to the design notes.
- Anchors: Social links

### 9. Footer
- Quarters SHALL provide a transparent navbar with the brand name "Quarters." and a trailing tan dot, desktop links (Home, About, Apartments with dropdown, News, Contact), and a mobile hamburger that opens a 300px slide-in panel from the right.

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/quarters/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/quarters/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Fonts: Oswald + Nunito Sans loaded via Google Fonts; [ ] Navbar: transparent, white brand with tan dot, desktop links, mobile hamburger; [ ] Hero: full-viewport, dark overlay, heading, address, CTA button; [ ] Property info: split panel overlapping hero; [ ] Browse Apartments: 4 cards with tan/black highlights; [ ] Featured Apartments: collage layout; [ ] Testimonials: carousel with dots and arrows; [ ] News: 3 cards on light background; [ ] Social strip: 6 icons in tan band; [ ] Footer: 3 columns, subscribe form, Component Dock link; [ ] Mobile: hamburger menu, stacked grids; [ ] No ColorLib references in app code; [ ] 100% test coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/quarters` ships on https://quarters.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/quarters/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/quarters/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/quarters/public/CNAME` = `quarters.free.componentdock.com`
  and the package `homepage` = `https://quarters.free.componentdock.com`.
