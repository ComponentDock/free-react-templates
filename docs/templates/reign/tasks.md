# Reign — Implementation Tasks

Source design: **Monarchy** (`https://colorlib.com/wp/template/monarchy/`) → recreation name **reign**. Shipped at https://reign.free.componentdock.com.

Scope: Recreate the ColorLib Monarchy template as a React 19 + Tailwind CSS 4 + TypeScript single-page creative portfolio/agency template. Named "Reign" to evoke the royal/monarchy theme without matching the source name.

## Component breakdown

Render order as composed in `apps/reign/src/App.tsx`:

### 1. Navbar
- The template SHALL display a fixed navigation bar with the "Reign" logo and links to Home, Portfolio, About, Services, Blog, and Contact sections.
- Scenario — Desktop navigation renders all links:
  - **WHEN** the page loads on a desktop viewport
  - **THEN** the navbar shows the Reign logo and six navigation links
- Scenario — Mobile menu toggle:
  - **WHEN** the page loads on a mobile viewport
  - **THEN** a hamburger menu button is visible
  - **AND** clicking it reveals the mobile navigation drawer

### 2. Hero
- The template SHALL display a full-width hero section with a background image overlay, the headline "Do What You Love", a subtitle, and a play button.
- Scenario — Hero renders headline and play button:
  - **WHEN** the page loads
  - **THEN** the hero section shows "Do What You Love" as the main heading
  - **AND** a play button with an accessible "Play video" label is present

### 3. Services
- The template SHALL display a three-column services section with Interface Design, Product Design, and Quality Results cards, each with an icon, title, and description.
- Scenario — Services render three cards:
  - **WHEN** the user scrolls to the services section
  - **THEN** three service cards are visible with icons, titles, and descriptions

### 4. Portfolio
- The template SHALL display a six-item portfolio grid with images and hover overlay effects.
- Scenario — Portfolio shows six items:
  - **WHEN** the user scrolls to the portfolio section
  - **THEN** six portfolio images are displayed in a responsive grid
  - **AND** hovering reveals a "View Project" overlay

### 5. Testimonials
- The template SHALL display a four-column testimonials section with client photos, names, roles, and quote text.
- Scenario — Testimonials render four cards:
  - **WHEN** the user scrolls to the testimonials section
  - **THEN** four testimonial cards are visible with photos, names, roles, and quotes

### 6. Blog
- The template SHALL display a two-column blog section with post cards containing images, dates, titles, and author info.
- Scenario — Blog shows two post cards:
  - **WHEN** the user scrolls to the blog section
  - **THEN** two blog post cards are visible with images, dates, titles, and authors

### 7. ClientLogos
- The template SHALL display a client logos section on a light background with four brand placeholders.
- Scenario — Client logos render:
  - **WHEN** the user scrolls to the client logos section
  - **THEN** four client brand names are visible

### 8. Footer
- The template SHALL display a footer with the Reign logo, description, contact links, navigation columns, social icons, copyright text, and a link to Component Dock.
- Scenario — Footer renders all elements:
  - **WHEN** the user scrolls to the footer
  - **THEN** the Reign logo, contact info, navigation links, social icons, and copyright are visible
  - **AND** a link to https://www.componentdock.com/ labeled "Component Dock" is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/reign/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/reign/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/reign` ships on https://reign.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/reign/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/reign/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/reign/public/CNAME` = `reign.free.componentdock.com`
  and the package `homepage` = `https://reign.free.componentdock.com`.
