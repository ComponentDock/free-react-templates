# Earworm — Implementation Tasks

Source design: **Poca** (`https://colorlib.com/wp/template/poca/`) → recreation name **earworm**. Shipped at https://earworm.free.componentdock.com.

Scope: A Podcast & Audio template with hero/welcome carousel and featured guests sections. Recreation of ColorLib **Poca** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/earworm/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/earworm/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search · Toggle menu

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe with iTunes · Subscribe with RSS · December 9, 2024 · Episode 203 — The Last Blockbuster · By Admin | Tutorials | 00:02:56 · Your browser does not support the audio element.

### 3. LatestEpisodes
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Episodes · Your browser does not support the audio element. · Like (29) · Share (04) · Download (12) · Load More

### 4. FeaturedGuests
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured Guests

### 5. Newsletter
- No dedicated spec block — hold this band to the design notes.
- Anchors: Sign Up To Newsletter · Subscribe to receive info on our latest news and episodes · Thanks for subscribing! · Subscribe

### 6. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: App Store · Google Play · About Us · Categories · Latest Episodes · Follow Us

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/earworm/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/earworm/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Header: sticky navbar, logo left, nav links centered, search + social icons right, hamburger on mobile; [ ] Hero: full-viewport carousel, 3 slides with bg images + dark overlay, heading + subtitle + 2 CTA buttons + music player area with audio controls + like/share/download; [ ] Latest Episodes: section heading with divider, filter tabs (5 categories), 2-column card grid with thumbnail + metadata + audio player + actions, "Load More" button; [ ] Featured Guests: section heading with divider, guest grid with photo + name + role; [ ] Newsletter: parallax bg with overlay, heading + subtitle + email form + subscribe button; [ ] Footer: 4 columns (About Us, Categories, Latest Episodes, Follow Us), social icons, App Store/Google Play badges, copyright with Component Dock link; [ ] Responsive: mobile hamburger menu, stacked layouts, adjusted spacing; [ ] Footer links to `https://www.componentdock.com/`; [ ] `public/CNAME` contains `earworm.free.componentdock.com`; [ ] Package name `@free-react-templates/earworm`, homepage `https://earworm.free.componentdock.com`; [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md); [ ] Global font: HK Grotesk via Google Fonts; [ ] Brand color: `#f55656` in Tailwind theme; [ ] Dark overlay: `rgba(0,0,0,0.5)` on hero slides and newsletter; [ ] Section padding: 80px top/bottom; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/earworm` ships on https://earworm.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/earworm/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/earworm/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/earworm/public/CNAME` = `earworm.free.componentdock.com`
  and the package `homepage` = `https://earworm.free.componentdock.com`.
