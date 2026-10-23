# Fabricate — Implementation Tasks

Source design: **Industry** (`https://colorlib.com/wp/template/industry/`) → recreation name **fabricate**. Shipped at https://fabricate.free.componentdock.com.

Scope: Recreation of ColorLib **Industry** template. - Source slug: `industry` - Preview URL: https://preview.colorlib.com/theme/industry/ - Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/industry-free-template.jpg - Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript - New name: `fabricate` (apps/fabricate, @free-react-template…

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/fabricate/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/fabricate/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Fabricate

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Don&apos;t look further, here is the key · We&apos;re Industrial Solution · Get Started

### 3. Features
- No dedicated spec block — hold this band to the design notes.

### 4. About
- No dedicated spec block — hold this band to the design notes.
- Anchors: Select service · Brand new approach to industrial solutions · We&apos;ve built a legacy that will transform your operations · We listen to your needs and deliver excellence every time. · Get Started Now · Request a Quote

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Capturing Market Sectors

### 6. Stats
- No dedicated spec block — hold this band to the design notes.

### 7. Projects
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Finished Projects

### 8. Testimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: What Our Clients Say

### 9. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Latest Posts from Our Blog

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Subscribe · Facebook · Twitter · Dribbble

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/fabricate/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/fabricate/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Header top bar: dark bg, social icons, phone, email; [ ] Navigation: logo, all links, Blog dropdown, active state; [ ] Hero: bg image, dark overlay, heading, subtext, pill CTA button (#fab700); [ ] Features: 3 hexagon icon cards with titles and descriptions; [ ] About: split layout, accent subtitle (#fab700), quote form with dark bg panel; [ ] Services: 3 image cards with titles and descriptions; [ ] Stats: 4 animated counters with circular ring decoration, dark overlay; [ ] Projects: asymmetric image gallery grid; [ ] Feedback: video play button + testimonial carousel, dark overlay; [ ] Blog: 3 cards with image, author, date, stats, title, excerpt; [ ] Footer: dark navy (#04091e), About Us + Newsletter + Follow Us columns; [ ] Footer links to https://www.componentdock.com/; [ ] No ColorLib references in app code (only in spec and TEMPLATES.md); [ ] Brand color #fab700 used via Tailwind @theme token; [ ] Font: Poppins loaded via Google Fonts in index.html; [ ] All placeholder images use picsum.photos/seed/fabricate-N/; [ ] Package name: @free-react-templates/fabricate; [ ] CNAME: fabricate.free.componentdock.com; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/fabricate` ships on https://fabricate.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/fabricate/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/fabricate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/fabricate/public/CNAME` = `fabricate.free.componentdock.com`
  and the package `homepage` = `https://fabricate.free.componentdock.com`.
