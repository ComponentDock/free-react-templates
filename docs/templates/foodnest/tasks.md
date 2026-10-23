# Foodnest — Implementation Tasks

Source design: **Foody** (`https://colorlib.com/wp/template/foody/`) → recreation name **foodnest**. Shipped at https://foodnest.free.componentdock.com.

Scope: A restaurant landing template with hero, restaurant intro, services, special menu, our menu, testimonials and blog sections. Recreation of the ColorLib **Foody** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

## Component breakdown

Render order as composed in `apps/foodnest/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Main navigation · Mobile navigation · Foodnest · Contact Us

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Enjoy Your Food at Foodnest · Get Started

### 3. Services
- No dedicated spec block — hold this band to the design notes.

### 4. Restaurant
- No dedicated spec block — hold this band to the design notes.
- Anchors: The Restaurant

### 5. SpecialMenu
- No dedicated spec block — hold this band to the design notes.
- Anchors: Special Menu

### 6. OurMenu
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Menu

### 7. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: Testimonial

### 8. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Blog · Our Blog · Read More

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email address · Subscribe Newsletter · Subscribe · About Us · Opening Hours · Sunday-Thursday

### Cross-cutting requirements

- **Component Dock attribution** — The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.
  - Scenario — Footer attribution: **GIVEN** any page of the template is rendered; **WHEN** the footer is displayed; **THEN** it SHALL contain an anchor whose `href` is; **AND** the anchor's text SHALL name Component Dock
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/foodnest/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/foodnest/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Dark navbar with brand and nav links renders correctly; [ ] Mobile hamburger menu toggles navigation; [ ] Hero slider shows 2 slides with background images, headings, CTAs; [ ] "Get Started" CTA has white outline style; [ ] Services section: 4 blocks with icons, orange headings, descriptions; [ ] Slanted section separators (CSS clip-path) render; [ ] Restaurant section: heading + paragraph + 3 images; [ ] Special Menu carousel with dish cards (price + name + image); [ ] Our Menu: 2-column layout with alternating text/image; [ ] Testimonials: carousel with blockquotes and author info; [ ] Blog: 2 post cards with image, date, title, excerpt, Read More; [ ] Footer: newsletter form, 3 info columns, social icons; [ ] Orange (#ff7404) used for CTAs, prices, active nav; [ ] Square button corners (border-radius: 0); [ ] Open Sans font throughout; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code; [ ] Tests pass with 100% coverage; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR; [ ] Footer credits Component Dock with a link to https://www.componentdock.com/

## Verification

- [x] `apps/foodnest` ships on https://foodnest.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/foodnest/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/foodnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/foodnest/public/CNAME` = `foodnest.free.componentdock.com`
  and the package `homepage` = `https://foodnest.free.componentdock.com`.
