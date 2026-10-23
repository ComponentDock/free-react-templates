# Scholar — Implementation Tasks

Source design: **Onedu** (`https://colorlib.com/wp/template/onedu/`) → recreation name **scholar**. Shipped at https://scholar.free.componentdock.com.

Scope: Scholar is an online courses template. It recreates the ColorLib **Onedu** design (https://colorlib.com/wp/template/onedu/, preview: https://preview.colorlib.com/theme/onedu/) as a Vite + React 19 + Tailwind CSS 4 + TypeScript template.

> The spec carries no section-level requirements (it predates that convention), so THIS brief is the authoritative structure: the order below is the shipped order in `apps/scholar/src/App.tsx`.

## Component breakdown

Render order as composed in `apps/scholar/src/App.tsx`:

### 1. Navbar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search courses · Main navigation · Shopping cart, 3 items

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Search courses · Learn new skills online with top educators · Learn 100% online with world-class universities and industry experts. · Search

### 3. PopularCourses
- No dedicated spec block — hold this band to the design notes.
- Anchors: The world&apos;s largest selection of courses · Choose from over 100,000 online video courses with new additions published every month

### 4. AboutSplit
- No dedicated spec block — hold this band to the design notes.
- Anchors: The world&apos;s largest selection of online courses · Browse Courses

### 5. StudentsViewing
- No dedicated spec block — hold this band to the design notes.
- Anchors: Students are viewing

### 6. Testimonial
- No dedicated spec block — hold this band to the design notes.
- Anchors: Student says about us · Petey Cruiser · Student at Scholar

### 7. Categories
- No dedicated spec block — hold this band to the design notes.
- Anchors: Explore top categories · View Courses

### 8. BecomeInstructor
- No dedicated spec block — hold this band to the design notes.
- Anchors: Become an Instructor · Watch Video

### 9. Footer
- No dedicated spec block — hold this band to the design notes.
- Anchors: Facebook · Twitter · Instagram · Email for newsletter

### 10. BackToTop
- No dedicated spec block — hold this band to the design notes.
- Anchors: Back to top

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/scholar/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/scholar/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/scholar` ships on https://scholar.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/scholar/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/scholar/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/scholar/public/CNAME` = `scholar.free.componentdock.com`
  and the package `homepage` = `https://scholar.free.componentdock.com`.
