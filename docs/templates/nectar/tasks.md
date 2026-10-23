# Nectar — Implementation Tasks

Source design: **Bee** (`https://colorlib.com/wp/template/bee/`) → recreation name **nectar**. Shipped at https://nectar.free.componentdock.com.

Scope: A construction company one-page template with a hero slider, request-a-quote form, services grid, project gallery, counter stats. It also includes testimonials carousel, blog cards, and a dark footer. Recreation of ColorLib "Bee".

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/nectar/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/nectar/src/App.tsx`:

### 1. TopBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email info@nectar.com · Call +1 (234) 567 890 · Request a quote

### 2. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: navigation · Main navigation · Nectar Home · Search

### 3. HeroSlider
- No dedicated spec block — hold this band to the design notes.
- Anchors: Request a quote · tablist · Slide navigation

### 4. QuoteAndAbout
- No dedicated spec block — hold this band to the design notes.
- Anchors: Request a quote form · Read more about us · Request A Quote · First Name · Last Name · Service

### 5. Services
- No dedicated spec block — hold this band to the design notes.
- Anchors: Experience Great Services

### 6. CtaBanner
- No dedicated spec block — hold this band to the design notes.
- Anchors: Request a quote · Are You Ready To Start Your Next Project?

### 7. TeamMembers
- No dedicated spec block — hold this band to the design notes.
- Anchors: Meet Our Experts

### 8. ProjectGallery
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Projects

### 9. CounterStats
- No dedicated spec block — hold this band to the design notes.

### 10. ServicesAndTestimonials
- No dedicated spec block — hold this band to the design notes.
- Anchors: tablist · Testimonial navigation · Experience Great Services · Satisfied Customer

### 11. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Recent Blog · Read More

### 12. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Nectar Home · Newsletter subscription · Subscribe

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/nectar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/nectar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 12 sections render in correct order; [ ] Fonts: Poppins for headings/nav/buttons, Nunito Sans for body text; [ ] Brand color `#fda729` used consistently for primary actions and accents; [ ] Dark sections: navbar (`#343a40`), footer (`#3c312e`); [ ] Hero slider: 2 slides with parallax + overlay + text alignment (right); [ ] Quote form: all fields present, yellow header bar; [ ] Services: 3 cards with icons and social links; [ ] Project gallery: 3-column grid with hover overlay effect; [ ] Counter: 4 stats on yellow background, animated numbers; [ ] Testimonials: carousel with avatar, name, role, quote; [ ] Blog: 3 cards with date badge overlays; [ ] Footer: 4 columns, newsletter form, Component Dock link; [ ] Responsive: hamburger nav, stacking grids, mobile-friendly forms; [ ] No ColorLib references in app code (provenance only in spec); [ ] Placeholder images via `picsum.photos/seed/nectar-<n>/...`; [ ] Footer links to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/nectar` ships on https://nectar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/nectar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/nectar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nectar/public/CNAME` = `nectar.free.componentdock.com`
  and the package `homepage` = `https://nectar.free.componentdock.com`.
