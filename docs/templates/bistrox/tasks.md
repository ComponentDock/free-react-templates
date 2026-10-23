# Bistrox — Implementation Tasks

Source design: **Tasty** (`https://colorlib.com/wp/template/tasty/`) → recreation name **bistrox**. Shipped at https://bistrox.free.componentdock.com.

Scope: A restaurant landing template with hero slider, reservation form, tabbed menu, specials, testimonials, blog, and instagram grid. Recreation of ColorLib **Tasty**.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/bistrox/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/bistrox/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Toggle menu · Bistrox

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Bistrox Restaurant · Book a table for yourself at a time convenient for you · Tasty & Delicious Food · Book a table

### 3. ReservationForm
- No dedicated spec block — hold this band to the design notes.
- Anchors: Name · Phone · Date · Time · Person

### 4. AboutSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Bistrox · Our chef cooks the most delicious food for you

### 5. MenuSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Menu · Bistrox Menu · Make a Reservation

### 6. SpecialtiesParallax
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Specialties

### 7. SpecialtiesGrid
- No dedicated spec block — hold this band to the design notes.

### 8. TestimonialSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial

### 9. BlogSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Blog & News · Read more

### 10. InstagramGrid
- No dedicated spec block — hold this band to the design notes.

### 11. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Twitter · Facebook · Instagram

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/bistrox/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/bistrox/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Navbar is sticky on scroll, collapses to hamburger on mobile; [ ] Hero displays heading and CTA with bg image overlay; [ ] Reservation form has all fields and is functional; [ ] About section has two-column layout; [ ] Menu section has 3 tabs (Main/Dessert/Drinks) with items; [ ] Parallax section has bg image with overlay; [ ] Specialties grid shows 4 dishes with prices; [ ] Testimonials carousel with star ratings and navigation; [ ] Blog section shows 3 cards; [ ] Instagram grid shows 5 images; [ ] Footer has 4 columns + Component Dock link; [ ] Font loaded: Muli (Google Fonts); [ ] Brand color #F96D00 used consistently; [ ] All images use picsum.photos placeholders; [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] 100% test coverage; [ ] Typecheck + lint pass; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/bistrox` ships on https://bistrox.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/bistrox/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/bistrox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bistrox/public/CNAME` = `bistrox.free.componentdock.com`
  and the package `homepage` = `https://bistrox.free.componentdock.com`.
