# Wavecrest — Implementation Tasks

Source design: **Major** (`https://colorlib.com/wp/template/major/`) → recreation name **wavecrest**. Shipped at https://wavecrest.free.componentdock.com.

Scope: A Beach Hotel / Resort template with hero, search / booking box, room features and gallery sections. Recreation of ColorLib's **Major** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/wavecrest/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/wavecrest/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Wavecrest

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Luxury &amp; Comfort · Beach Hotel — More than a stay

### 3. SearchBox
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search · Check in · Check out · Guests

### 4. Intro
- No dedicated spec block — hold this band to the design notes.
- Anchors: Deluxe Room

### 5. RoomFeatures
- No dedicated spec block — hold this band to the design notes.

### 6. Gallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Gallery

### 7. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe · Our Newsletter · Subscribe to receive exclusive offers and updates from Wavecrest. · Email address

### 8. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Wavecrest · Contact Info · Book Now · Ready to experience Wavecrest? Reserve your room today. · Component Dock

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/wavecrest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/wavecrest/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All sections render in correct order (hero → search → intro → features → gallery → newsletter → footer); [ ] Brand colors match: primary #da8661, dark #0b1423, medium #2e3f61; [ ] Fonts: Playfair Display for headings, Roboto for body; [ ] Hero has background image with dark overlay; [ ] Search/booking box with date inputs; [ ] Room features section shows 4 items with icons; [ ] Gallery carousel with 5 images; [ ] Newsletter with subscribe form; [ ] Footer links to componentdock.com; [ ] Pill buttons (50% border-radius); [ ] No ColorLib references in app code; [ ] Placeholder images via picsum.photos/seed/wavecrest-N/W/H; [ ] Google Fonts loaded via <link> in index.html; [ ] Tests pass with 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/wavecrest` ships on https://wavecrest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/wavecrest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/wavecrest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/wavecrest/public/CNAME` = `wavecrest.free.componentdock.com`
  and the package `homepage` = `https://wavecrest.free.componentdock.com`.
