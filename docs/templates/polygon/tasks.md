# Polygon — Implementation Tasks

Source design: **Hexa** (`https://colorlib.com/wp/template/hexa/`) → recreation name **polygon**. Shipped at https://polygon.free.componentdock.com.

Scope: An architecture/design agency website template. Recreation of ColorLib "Hexa". **Source:** https://colorlib.com/wp/template/hexa/ **Preview:** https://preview.colorlib.com/theme/hexa/ **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Component breakdown

Render order as composed in `apps/polygon/src/App.tsx`:

### 1. Navbar
- The template SHALL display a dark navbar with brand name, navigation links, and a CTA button.
- Scenario — Navbar shows all nav links:
  - **WHEN** the page loads
  - **THEN** the navbar displays links for Home, About, Projects, Services, Blog, and Contact
- Scenario — Mobile menu toggles:
  - **WHEN** the user clicks the hamburger menu on mobile
  - **THEN** the mobile nav opens with all links visible

### 2. Hero
- The template SHALL display a full-viewport hero slider with heading, subtext, and CTA buttons.
- Scenario — Hero shows heading and CTAs:
  - **WHEN** the page loads
  - **THEN** the hero section shows "Creative Design" heading and Get Started / Download buttons

### 3. Features
- The template SHALL display three feature cards with icons, headings, and descriptions.
- Scenario — Features render all cards:
  - **WHEN** the features section is visible
  - **THEN** three cards are shown: Modern Design, Build With Love, Fast Loading

### 4. About
- The template SHALL display two about sections with numbered headings and alternating layouts.
- Scenario — About sections render correctly:
  - **WHEN** the about section is visible
  - **THEN** sections numbered 01 (Infrastructure) and 02 (Collaborate) are displayed

### 5. Projects
- The template SHALL display a 3-column grid of project images with hover overlays.
- Scenario — Projects render all cards:
  - **WHEN** the projects section is visible
  - **THEN** six project cards are shown in a grid

### 6. Testimonial
- The template SHALL display testimonial cards with avatars, names, and quotes.
- Scenario — Testimonials render:
  - **WHEN** the testimonial section is visible
  - **THEN** testimonial cards with avatars and quotes are displayed

### 7. Footer
- The template SHALL display a dark footer with About, Quick Links, Follow Links, newsletter subscription, and a copyright line linking to Component Dock.
- Scenario — Footer has Component Dock link:
  - **WHEN** the footer is visible
  - **THEN** a link to https://www.componentdock.com/ labeled "Component Dock" is present
- Scenario — Newsletter form accepts email:
  - **WHEN** the user types an email and clicks subscribe
  - **THEN** the form does not navigate away (prevented default)

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/polygon/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/polygon/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/polygon` ships on https://polygon.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/polygon/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/polygon/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/polygon/public/CNAME` = `polygon.free.componentdock.com`
  and the package `homepage` = `https://polygon.free.componentdock.com`.
