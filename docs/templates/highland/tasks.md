# Highland — Implementation Tasks

Source design: **Montana** (`https://colorlib.com/wp/template/montana/`) → recreation name **highland**. Shipped at https://highland.free.componentdock.com.

Scope: A Hotel / Resort template with hero slider, about, video, dining, featured rooms and reservation query sections. Recreation of ColorLib **Montana** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/highland/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/highland/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Highland · Book A Room

### 2. HeroSlider
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous slide · Next slide

### 3. AboutSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: About Us · A Luxurious Hotel with Nature · Learn More

### 4. OffersSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Our Offers · Ongoing Offers · Book Now

### 5. VideoSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Play video · Highland Sea View · Relax and Enjoy your Vacation

### 6. DiningSection
- No dedicated spec block — hold this band to the design notes.
- Anchors: Delicious Food · We Serve Fresh and Delicious Food · Learn More

### 7. FeaturedRooms
- No dedicated spec block — hold this band to the design notes.
- Anchors: Featured Rooms · Choose a Better Room · Book Now

### 8. ReservationBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: For Reservation or Query?

### 9. InstagramFeed
- No dedicated spec block — hold this band to the design notes.

### 10. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email for newsletter · Address · New York City, USA · Get Direction · Reservation · Navigation

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/highland/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/highland/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] All 10 sections present in correct order; [ ] Brand color #009DFF used consistently (labels, buttons, accents, hover states); [ ] Raleway font family applied globally; [ ] Navbar is transparent initially, sticky black on scroll; [ ] Hero slider with 4 slides, centered white text; [ ] About section has 2-column layout with overlapping images; [ ] Offers section has 3 cards with images, bullets, and "book now" buttons; [ ] Video section has dark overlay and circular play button; [ ] Dining section has reversed layout (images left, text right); [ ] Featured Rooms has 4 room cards with gradient overlays; [ ] Reservation bar has bordered box with phone pill button; [ ] Instagram feed shows 5 images with hover overlay; [ ] Footer has 4 columns + newsletter + copyright; [ ] Responsive layout works on mobile (375px); [ ] No ColorLib references in app code; [ ] Footer links to https://www.componentdock.com/; [ ] public/CNAME contains highland.free.componentdock.com; [ ] package.json homepage set to https://highland.free.componentdock.com; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/highland` ships on https://highland.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/highland/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/highland/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/highland/public/CNAME` = `highland.free.componentdock.com`
  and the package `homepage` = `https://highland.free.componentdock.com`.
