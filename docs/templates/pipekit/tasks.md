# Pipekit — Implementation Tasks

Source design: **Pexman** (`https://colorlib.com/wp/template/pexman/`) → recreation name **pipekit**. Shipped at https://pipekit.free.componentdock.com.

Scope: Recreation of ColorLib **Pexman** (`https://colorlib.com/wp/template/pexman/`). Preview: `https://preview.colorlib.com/theme/pexman/` **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict). **Package:** `@free-react-templates/pipekit`

## Component breakdown

Render order as composed in `apps/pipekit/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Primary · Mobile · Pipekit

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous slide · Next slide · Welcome to Pipekit · Discover More

### 3. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Years · About Us · Crafting Digital Experiences Since 2009 · Awards Won · Projects Done · Learn More

### 4. Stats
- No dedicated spec block — hold this band to the design notes.

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Services · What We Do Best · We Build Brands That Last

### 6. Portfolio
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Portfolio · Featured Work

### 7. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial

### 8. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest News · From Our Blog

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Pipekit · Quick Links · Contact Us · New York, NY 10001 · Component Dock

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/pipekit/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/pipekit/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Navbar: dark bg, brand, 5 nav links, hamburger on mobile; [ ] Hero: full-height, 3-slide carousel, dark overlay, headings, CTA buttons; [ ] About: split layout (image + text), heading, 2 paragraphs, CTA; [ ] Counter: dark overlay, 4 stat columns, animated numbers; [ ] Services: white bg, 4 service cards with icons, CTA; [ ] Portfolio: filter tabs, 3-column grid, hover effects; [ ] Testimonials: star rating, testimonial text, client info; [ ] Blog: 3 post cards, background images, date/title/excerpt; [ ] Footer: 3 columns, brand + social, navigation, contact, Component Dock link; [ ] Design tokens: black brand, gold accent, Montserrat font, square buttons; [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md); [ ] Footer links to Component Dock; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/pipekit` ships on https://pipekit.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/pipekit/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/pipekit/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pipekit/public/CNAME` = `pipekit.free.componentdock.com`
  and the package `homepage` = `https://pipekit.free.componentdock.com`.
