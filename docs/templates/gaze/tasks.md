# Gaze — Implementation Tasks

Source design: **Thelook** (`https://colorlib.com/wp/template/thelook/`) → recreation name **gaze**. Shipped at https://gaze.free.componentdock.com.

Scope: Recreate the ColorLib "The Look" photography gallery template as a React 19 + Tailwind CSS 4 + TypeScript app named "Gaze". The template features a hero image slider, two-column portfolio gallery, blog section, and contact form footer.

## Component breakdown

Render order as composed in `apps/gaze/src/App.tsx`:

### 1. Navbar
- The template SHALL render a sticky navigation bar with logo and links.
- Scenario — Renders logo and navigation links:
  - **WHEN** the page loads
  - **THEN** the navbar displays the "Gaze" logo
  - **AND** displays 6 navigation links: Home, Gallery, Artists, Shop, News, Contact
  - **AND** each link has the correct href anchor (#home, #gallery, #artists, #shop, #news, #contact)

### 2. Hero
- The template SHALL render a full-width hero section with background image, overlay, heading, subtitle, and call-to-action button.
- Scenario — Renders hero content:
  - **WHEN** the page loads
  - **THEN** the hero displays the heading "Gaze Gallery"
  - **AND** displays the subtitle "Photography Showcase"
  - **AND** displays a "Read More" button linking to the gallery section

### 3. Gallery
- The template SHALL render a two-column gallery section with a photography quote, 6 gallery items, and a "See All Galleries" call-to-action.
- Scenario — Renders gallery items:
  - **WHEN** the page loads
  - **THEN** the gallery displays a quote about photography
  - **AND** displays 6 gallery items (3 left column, 3 right column)
  - **AND** each gallery item has an image, title, artist name, and "View Gallery" button
  - **AND** displays a "See All Galleries" button

### 4. Blog
- The template SHALL render a blog section with the latest posts.
- Scenario — Renders blog posts:
  - **WHEN** the page loads
  - **THEN** the blog section displays the heading "Latest from the Blog"
  - **AND** displays 2 blog posts with thumbnail, category, title, date, excerpt, and "Read More" button

### 5. Footer
- The template SHALL render a dark footer with contact form and Component Dock attribution.
- Scenario — Renders contact form:
  - **WHEN** the page loads
  - **THEN** the footer displays "Get in Touch" heading
  - **AND** displays a contact form with name, email, subject, and message fields
  - **AND** displays a "Send Message" button
- Scenario — Renders Component Dock attribution:
  - **WHEN** the page loads
  - **THEN** the footer displays a link to https://www.componentdock.com/ labeled "Component Dock"
- Scenario — Form submission is prevented:
  - **WHEN** the user submits the contact form
  - **THEN** the default form submission is prevented (no page reload)

### Cross-cutting requirements

- **App Integration** — The template SHALL compose all sections in the correct order and set the document title.
  - Scenario — Sections render in order: **WHEN** the page loads; **THEN** sections render in order: Navbar, Hero, Gallery, Blog, Footer
  - Scenario — Document title is set: **WHEN** the page loads; **THEN** the document title is "Gaze — Photography Gallery Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/gaze/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/gaze/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/gaze` ships on https://gaze.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/gaze/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/gaze/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/gaze/public/CNAME` = `gaze.free.componentdock.com`
  and the package `homepage` = `https://gaze.free.componentdock.com`.
