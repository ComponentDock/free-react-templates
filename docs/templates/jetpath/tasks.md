# Jetpath — Implementation Tasks

Source design: **Travelers** (`https://colorlib.com/wp/template/travelers/`) → recreation name **jetpath**. Shipped at https://jetpath.free.componentdock.com.

Scope: Jetpath is a single-page travel and tours template with a search-driven hero, a destination grid, three tour packages, a "why choose us" feature row, testimonials and a newsletter capture.

## Component breakdown

Render order as composed in `apps/jetpath/src/App.tsx`:

### 1. Navbar
- The navbar SHALL expose the brand, section links, a `Search` button, a mobile menu toggle and a `Subscribe` entry point.
- Scenario — Visitor opens the mobile menu:
  - **WHEN** the visitor activates `Open menu`
  - **THEN** the navigation links are revealed and the toggle reads

### 2. Hero
- The hero SHALL headline the agency offer with a search affordance, and a destinations section SHALL present region cards, the reference's first region being `Asia`.
- Scenario — Visitor browses destinations:
  - **WHEN** the visitor scrolls into the destinations section
  - **THEN** each region card shows an image, the region name and a short blurb

### 3. Destinations
- The hero SHALL headline the agency offer with a search affordance, and a destinations section SHALL present region cards, the reference's first region being `Asia`.
- Scenario — Visitor browses destinations:
  - **WHEN** the visitor scrolls into the destinations section
  - **THEN** each region card shows an image, the region name and a short blurb

### 4. Packages
- The packages section SHALL render three priced tour cards showing the price, the trip length (`5 Days / 4 Nights`) and the number of tours available (e.g. `8 tours available`, `12 tours available`).
- Scenario — Visitor compares tours:
  - **WHEN** the visitor reaches the packages section
  - **THEN** cards priced `$1,299`, `$2,199` and `$3,499` are visible
  - **AND** each card shows its duration and availability count

### 5. WhyChooseUs
- The page SHALL render a feature row (including `24/7 Support` and `500+ Destinations`), a testimonial section, and a newsletter form whose `Subscribe` button reports success inline.
- Scenario — Visitor subscribes to the newsletter:
  - **WHEN** the visitor submits a valid email
  - **THEN** an inline success message is shown and the input is cleared

### 6. Testimonials
- The page SHALL render a feature row (including `24/7 Support` and `500+ Destinations`), a testimonial section, and a newsletter form whose `Subscribe` button reports success inline.
- Scenario — Visitor subscribes to the newsletter:
  - **WHEN** the visitor submits a valid email
  - **THEN** an inline success message is shown and the input is cleared

### 7. Newsletter
- The page SHALL render a feature row (including `24/7 Support` and `500+ Destinations`), a testimonial section, and a newsletter form whose `Subscribe` button reports success inline.
- Scenario — Visitor subscribes to the newsletter:
  - **WHEN** the visitor submits a valid email
  - **THEN** an inline success message is shown and the input is cleared

### 8. Footer
- The footer SHALL link `https://www.componentdock.com/` alongside the agency's link columns and social icons.
- Scenario — Visitor looks for more templates:
  - **WHEN** the visitor reaches the footer
  - **THEN** a link to `https://www.componentdock.com/` is present

### Cross-cutting requirements

- **No source-site references in the app** — The application SHALL NOT carry the source design's provenance: no file under `apps/jetpath/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the source template's name — code, comments, CSS, markup, metadata and filenames included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where the source paints its own credit line, the recreation SHALL credit Component Dock (`https://www.componentdock.com/`) instead.
  - Scenario — Clean provenance: **GIVEN** the template is implemented from this spec; **WHEN** every non-test file under `apps/jetpath/` is inspected; **THEN** none SHALL contain the source site's name, domain or a URL pointing at it; **AND** the footer credit SHALL link to `https://www.componentdock.com/`; [ ] Typecheck passes (`npm run typecheck --workspace @free-react-templates/jetpath`); [ ] Lint passes (`npm run lint`); [ ] Vitest coverage is 100% for `apps/jetpath`; [ ] Build succeeds (`npm run build --workspace @free-react-templates/jetpath`); [ ] Footer links to Component Dock; [ ] `public/CNAME` is `jetpath.free.componentdock.com` and `homepage` matches; [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR

## Verification

- [x] `apps/jetpath` ships on https://jetpath.free.componentdock.com
- [x] Typecheck / lint / tests / build pass at the repo gate
- [x] Section order and copy match the design notes
- [x] No source-designer name, source URL or source template name under `apps/jetpath/`
- [x] Footer links Component Dock

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/jetpath/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jetpath/public/CNAME` = `jetpath.free.componentdock.com`
  and the package `homepage` = `https://jetpath.free.componentdock.com`.
