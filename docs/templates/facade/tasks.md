# Facade (ColorLib Arclabs) — Tasks & Design Notes

> Prep artifacts (originally prepped as `arclabs`, renamed to the mandatory
> new original name `Facade` on implementation — ColorLib source names are
> never reused). Implementation ships on `feat/template-facade`.

## Design notes (replication findings)

- **Original:** ColorLib "Arclabs" — architecture template
  (source: https://colorlib.com/wp/template/arclabs/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/arclabs/
  (HTTP 200, full rendered DOM + `css/main.css` (51KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **tan/bronze** brand (`#cea06c`) + **navy** (`#263a4e`), Roboto Condensed
  - Roboto fonts, a city-skyline hero with navy overlay, 4 feature tiles,
    a filterable recent-work grid, a video call-to-action, and testimonials.
- **Structure (1:1, section order):**
  1. Navbar: logo "Facade" + Home, About, Services, Projects, Blog,
     Contact + dark-mode toggle.
  2. Hero: tagline "Building for Society" + "Future Architechure" +
     **View project** ghost button + social icons (Facebook, X, Instagram).
  3. Feature tiles: **Creative Design, Experienced Style, Product
     Research, Affordable Price** (icon + blurb).
  4. About: "About Us — We are world number one Company" + blurb +
     **Read More**.
  5. Recent Work: "Recent Work — View Our Project" + filters (All,
     Popular, Latest, Following, Upcoming) + **Dell Villa, New York**
     (Architecture, Modern Design), **Eedn Park, Singapore**, **Sky
     Build, Paris**, **Dell Villa, New York**.
  6. Call-to-action: "View Our Project" + video play button + **05:35**.
  7. Testimonials: "Testimonials — Happy Clients" + **Danyel Yarde**,
     **Manel djuice**, **Mark Alviro Wiens** (CEO & Founder).
  8. Brands: 5 brand logo placeholders.
  9. Footer: Top Products / Quick Links / Features / Resources columns +
     Newsletter (email + subscribe) + social + copyright.
- **Design tokens extracted from `main.css`:**
  - Primary **tan `#cea06c`**; navy `#263a4e`.
  - Light bgs `#f9f9ff` / `#f7f7f7`; footer `#0e1424`; hero overlay
    `rgba(5,10,52,0.6)`.
  - Fonts: **"Roboto Condensed"** (headings) + **"Roboto"** (body) via
    Google Fonts `<link>`.
  - `primary-btn`: transparent bg, 1px solid tan border, navy text,
    `12px 35px`, capitalize; hover fills tan with white text. Hero
    button: white ghost (white border/text, tan border on hover).
- **Recreation name:** Facade (new original name; ColorLib source name
  "Arclabs" is never reused). App folder `apps/facade`, package
  `@free-react-templates/facade`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/arclabs-<n>/<w>/<h>`); lucide-react icons + inline
  SVG brand icons; Roboto Condensed + Roboto via Google Fonts; tan primary
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-facade/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Rename prep artifacts from `arclabs` to `facade` (mandatory new-name
      rule).
- [x] Create `apps/facade` (copy the section-rich landing app pattern —
      Beamline; rename package to `@free-react-templates/facade`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh facade`.
- [ ] Push `feat/template-facade`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
