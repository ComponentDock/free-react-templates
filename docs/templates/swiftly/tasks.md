# Swiftly — Implementation Tasks

Source design: **Easy** (`https://colorlib.com/wp/template/easy/`) → recreation name **swiftly**. Shipped at https://swiftly.free.componentdock.com.

Scope: A Landing Page template with navbar navigation and pricing sections. Recreation of ColorLib "Easy" (https://colorlib.com/wp/template/easy/) as a fintech / SaaS landing page with payment focus, built with React 19, Tailwind CSS 4, and TypeScript.

## Component breakdown

Render order as composed in `apps/swiftly/src/App.tsx`:

### 1. Navbar
- The navbar SHALL display navigation links and a CTA button.
- Scenario — Navigation links present:
  - **WHEN** I visit the Swiftly page
  - **THEN** I see nav links for Home, Features, Pricing, Blog, Contact

### 2. Hero
- No dedicated spec block — hold this band to the design notes.
- Anchors: Email signup · Email address · Get Paid Easily without Hassle · Sign up

### 3. LogoBar
- No dedicated spec block — hold this band to the design notes.
- Anchors: Partner logos

### 4. Features
- No dedicated spec block — hold this band to the design notes.
- Anchors: Awesome Features · Cool Features · Far far away, behind the word mountains, far from the countries Vokalia and Consonantia

### 5. Testimonial
- No dedicated spec block — hold this band to the design notes.
- Anchors: Previous testimonial · Next testimonial · Join Now · Join More Than · Amazing People Who Love Our Product · Product Tour

### 6. FeatureShowcase
- No dedicated spec block — hold this band to the design notes.
- Anchors: Get Started

### 7. Pricing
- The pricing section SHALL support monthly/yearly toggle.
- Scenario — Toggle switches prices:
  - **WHEN** I click the pricing toggle
  - **THEN** the prices update to yearly values
  - **AND** a "Save 25%" badge appears

### 8. Blog
- No dedicated spec block — hold this band to the design notes.
- Anchors: Blog · Blog Posts · Read More

### 9. Footer
- The footer SHALL link to Component Dock.
- Scenario — Footer has Component Dock link:
  - **WHEN** I visit the Swiftly page
  - **THEN** the footer contains a link to componentdock.com

### Cross-cutting requirements

- **Page renders all sections** — The page SHALL display all major sections in order: Navbar, Hero, LogoBar, Features, Testimonials, FeatureShowcase (x2), Pricing, Blog, Footer.
  - Scenario — All sections visible on load: **WHEN** I visit the Swiftly page; **THEN** I see the navbar with logo "Swiftly"; **AND** I see the hero heading "Get Paid Easily without Hassle"; **AND** I see an email signup form; **AND** I see 6 feature cards; **AND** I see a testimonial section; **AND** I see 2 feature showcase sections; **AND** I see 3 pricing cards; **AND** I see 4 blog post cards; **AND** I see the footer with Component Dock link
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/swiftly/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/swiftly/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/swiftly` ships on https://swiftly.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/swiftly/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/swiftly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/swiftly/public/CNAME` = `swiftly.free.componentdock.com`
  and the package `homepage` = `https://swiftly.free.componentdock.com`.
