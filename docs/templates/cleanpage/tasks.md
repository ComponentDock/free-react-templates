# Cleanpage — Implementation Tasks

Source design: **Whitespace** (`https://colorlib.com/wp/template/whitespace/`) → recreation name **cleanpage**. Shipped at https://cleanpage.free.componentdock.com.

Scope: A Business Consulting template with hero section, about section, services grid, counter stats, projects gallery and case study sections. Recreation of ColorLib's **Whitespace** business consulting template.

## Component breakdown

Render order as composed in `apps/cleanpage/src/App.tsx`:

### 1. Navbar
- The template SHALL render a dark fixed navbar with the brand name "Cleanpage" and navigation links (Home, About, Work, Pricing, Blog, Contact). The navbar SHALL include a mobile hamburger toggle.
- Scenario — Desktop navigation:
  - **WHEN** the page renders on a desktop viewport
  - **THEN** all 6 navigation links are visible alongside the brand
- Scenario — Mobile toggle:
  - **WHEN** the user taps the hamburger button
  - **THEN** a mobile menu opens showing all navigation links
  - **WHEN** the user taps a link
  - **THEN** the mobile menu closes

### 2. Hero
- The template SHALL render a split hero with a text panel on the left and a background image on the right.
- Scenario — Hero content:
  - **WHEN** the hero renders
  - **THEN** it displays "Welcome" subheading, "We Help to Build You the Product" heading, "Business Solution" subheading, and a "Get in touch" CTA button

### 3. About
- The template SHALL render an about section with 4 service items and a heading.
- Scenario — Service listing:
  - **WHEN** the about section renders
  - **THEN** it shows Market Research, Financial Services, Online Marketing, and 24/7 Support

### 4. Services
- The template SHALL render a 4-column grid of service cards.
- Scenario — Service cards:
  - **WHEN** the services section renders
  - **THEN** it displays Business Strategy, Data Analysis, Graphic Design, and Creative cards

### 5. Counter
- The template SHALL render a dark parallax section with 4 statistics.
- Scenario — Counter display:
  - **WHEN** the counter section renders
  - **THEN** it shows Done Works (2000), Happy Customers (300), Coffee (100), and Work Hours (1000)

### 6. Projects
- The template SHALL render a masonry-style grid of 6 project cards.
- Scenario — Project cards:
  - **WHEN** the projects section renders
  - **THEN** it displays 6 project cards with titles and category tags

### 7. Testimonials
- The template SHALL render 3 testimonial cards with quotes, names, and positions.
- Scenario — Testimonial content:
  - **WHEN** the testimonials section renders
  - **THEN** it shows 3 cards with Garreth Smith at different positions

### 8. CaseStudy
- The template SHALL render 3 blog-style case study cards.
- Scenario — Case study cards:
  - **WHEN** the case study section renders
  - **THEN** it displays 3 cards with date, author, and title

### 9. Pricing
- The template SHALL render 4 pricing tier cards.
- Scenario — Pricing tiers:
  - **WHEN** the pricing section renders
  - **THEN** it shows Free ($0), Startup ($19), Premium ($49), and Pro ($99)

### 10. Footer
- The template SHALL render a dark footer with brand, useful links, quick links, contact info, and a link to Component Dock.
- Scenario — Component Dock link:
  - **WHEN** the footer renders
  - **THEN** it contains a link to https://www.componentdock.com/ labeled "Component Dock"

### Cross-cutting requirements

- **App Shell** — The template SHALL compose all sections in the correct order and set the document title.
  - Scenario — Section order: **WHEN** the app renders; **THEN** sections appear in order: Navbar, Hero, About, Services, Counter, Projects, Testimonials, Case Study, Pricing, Footer
  - Scenario — Document title: **WHEN** the app renders; **THEN** the document title is "Cleanpage — Business Consulting Template"
- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/cleanpage/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/cleanpage/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/cleanpage` ships on https://cleanpage.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/cleanpage/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/cleanpage/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/cleanpage/public/CNAME` = `cleanpage.free.componentdock.com`
  and the package `homepage` = `https://cleanpage.free.componentdock.com`.
