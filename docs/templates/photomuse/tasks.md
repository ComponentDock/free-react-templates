# Photomuse — Implementation Tasks

Source design: **Louie** (`https://colorlib.com/wp/template/louie/`) → recreation name **photomuse**. Shipped at https://photomuse.free.componentdock.com.

Scope: A photographer portfolio template featuring a fixed sidebar navigation, split hero section with author info, Instagram photo grid, and dark footer with contact details.

## Component breakdown

Render order as composed in `apps/photomuse/src/App.tsx`:

### 1. Sidebar
- The template SHALL display a fixed left sidebar with author avatar, name, navigation links, and newsletter signup.
- Scenario — Sidebar renders author identity:
  - **WHEN** the page loads
  - **THEN** the sidebar displays an author avatar image and the name "Louie Smith"
- Scenario — Sidebar navigation links:
  - **WHEN** the page loads
  - **THEN** the sidebar contains links for Home, Collection, About Me, My Services, Blog, and Contact
- Scenario — Newsletter signup form:
  - **WHEN** the page loads
  - **THEN** the sidebar displays a newsletter heading and an email input with a submit button

### 2. Hero
- The template SHALL display a split hero section with a photographer portrait on the left and author info on the right.
- Scenario — Hero author info:
  - **WHEN** the page loads
  - **THEN** the hero shows a greeting "Hello! I'm", the author name, tagline "A Photographer. I Capture Life", a bio paragraph, a cursive signature, and social media links
- Scenario — Hero portrait image:
  - **WHEN** the page loads
  - **THEN** the hero displays a photographer portrait image

### 3. InstagramGrid
- The template SHALL display an Instagram photo grid with a heading and five images.
- Scenario — Instagram grid renders:
  - **WHEN** the page loads
  - **THEN** the section shows "Follow me on Instagram" and five images with hover overlay

### 4. Footer
- The template SHALL display a dark footer with recent photos, archives, and contact information.
- Scenario — Footer content:
  - **WHEN** the page loads
  - **THEN** the footer shows Recent Photos thumbnails, monthly Archives, contact address/phone/email, and a Component Dock attribution link

### Cross-cutting requirements

- **Component Dock branding** — The template footer SHALL link to https://www.componentdock.com/ branded as "Component Dock".
  - Scenario — Footer attribution: **WHEN** the page loads; **THEN** the footer contains a link to https://www.componentdock.com/ with text "Component Dock"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/photomuse/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/photomuse/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/photomuse` ships on https://photomuse.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/photomuse/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/photomuse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/photomuse/public/CNAME` = `photomuse.free.componentdock.com`
  and the package `homepage` = `https://photomuse.free.componentdock.com`.
