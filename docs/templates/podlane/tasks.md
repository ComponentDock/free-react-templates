# Podlane — Implementation Tasks

Source design: **Mypodcast** (`https://colorlib.com/wp/template/mypodcast/`) → recreation name **podlane**. Shipped at https://podlane.free.componentdock.com.

Scope: A podcast template with hero and bi-weekly sections. Recreation of ColorLib **Mypodcast** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/podlane/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/podlane/src/App.tsx`:

### 1. Header
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Instagram · SoundCloud · Vimeo · YouTube · Toggle menu

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play episode · Season 4 Episode 48 available. · Check out my latest podcast — a massive interview with John Doe · More Info

### 3. Shows
- No dedicated spec block — hold this band to the design notes.
- Anchors: Browse Shows

### 4. BiWeekly
- No dedicated spec block — hold this band to the design notes.
- Anchors: Bi-weekly episodes

### 5. CategoryShows
- No dedicated spec block — hold this band to the design notes.
- Anchors: By Category · Browse Shows

### 6. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Instagram · SoundCloud · Vimeo · YouTube

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/podlane/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/podlane/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Header: fixed, transparent → dark on scroll, logo + nav + submit + social + hamburger; [ ] Hero: full-viewport bg image, tags, heading, subtitle, track info, audio player, "More Info" button; [ ] Shows: 3-column card grid, image + play icon + tag, date + title + likes/comments; [ ] Bi-weekly: parallax bg, heading + text + 3 platform buttons + image with logo; [ ] Category: "By Category" heading, 4-column card grid with image overlays, "Browse Shows" button; [ ] Footer: dark bg, centered logo, tags/latest/instagram columns, social icons, copyright with Component Dock; [ ] Responsive: mobile hamburger menu, stacked cards, adjusted spacing; [ ] Footer links to `https://www.componentdock.com/`; [ ] `public/CNAME` contains `podlane.free.componentdock.com`; [ ] Package name `@free-react-templates/podlane`, homepage `https://podlane.free.componentdock.com`; [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md); [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/podlane` ships on https://podlane.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/podlane/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/podlane/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/podlane/public/CNAME` = `podlane.free.componentdock.com`
  and the package `homepage` = `https://podlane.free.componentdock.com`.
