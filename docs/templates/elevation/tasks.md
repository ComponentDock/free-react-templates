# Elevation (ColorLib Buildarch) — Tasks & Design Notes

> Recreated from the live preview at https://preview.colorlib.com/theme/buildarch/
> (DOM + `css/style.css` extracted on 2026-08-08) plus the TEMPLATES.md
> screenshot. Implementation ships on `feat/template-elevation`.

## Design notes (replication findings)

- **Original:** ColorLib "Buildarch" — architecture template
  (source: https://colorlib.com/wp/template/buildarch/).
- **Visual design:** architecture landing with a **lime** brand (`#a7cb00`)
  - yellow `#f8b600`, Roboto + Heebo fonts, a city-skyline hero behind a
    centered white box with offset white frame ("Precise concept"), a
    black-panel concept section, a Quick Facts counter band
    (596 · 552 · 1009 · 435), and a Recent Projects grid with hover overlays.
- **Structure (1:1, section order from the live DOM):**
  1. Navbar: logo + Home, About Us, Services, Pages, Blog, Contact
     (repo-standard dark-mode toggle added).
  2. Hero: full-bleed skyline image, centered white box, "Precise Concept"
     headline + blurb + lime "Get Started" button.
  3. Concept: left image + right black panel with "Precise concept design
     for stylish living" + "More About Us" button.
  4. Features: 3× "Architecture" items (lime icon + title + blurb) + right
     image.
  5. Fun Facts: "CAREER OVERVIEW" eyebrow + "Quick Facts" heading +
     596 / 552 / 1009 / 435 counters.
  6. Testimonials: photo background, white card, italic quote, "Fanny
     Spencer", 5-star rating.
  7. Recent Projects: "CAREER OVERVIEW" + "Recent Projects" + 4-image
     gallery with hover overlay + expand icon.
  8. Clients Logo: 4 grayscale client names.
  9. Footer: `#000410` background, centered Newsletter (email input + lime
     subscribe button), copyright + social icons (Facebook, X, LinkedIn,
     Instagram).
- **Design tokens extracted from `css/style.css`:**
  - Primary **lime `#a7cb00`** (buttons, feature icons, link hovers).
  - Yellow `#f8b600`; star rating `#ffc000`.
  - Light background `#f9f9ff`; body text `#777777`; headings `#000`;
    footer `#000410`.
  - Buttons: 0 40px padding, 48px line-height, 1px lime border, 5px radius,
    white 14px/600 text; hover = transparent + lime text.
  - Fonts: **"Roboto"** (body + headings) + **"Heebo"** (display) via
    Google Fonts `<link>`.
- **Recreation name:** Elevation (new original name; the ColorLib source name
  "Buildarch" is never reused). App folder `apps/elevation`, package
  `@free-react-templates/elevation`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/elevation-<n>/<w>/<h>`); lucide-react icons +
  inline-SVG brand icons; lime primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-elevation/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/elevation` (copy the section-rich landing app pattern —
      Abode; rename package to `@free-react-templates/elevation`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh elevation` + spec:validate.
- [ ] Push `feat/template-elevation`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
