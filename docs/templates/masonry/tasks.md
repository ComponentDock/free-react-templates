# Masonry (Colorlib Astral) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-astral);
> renamed to the NEW name **Masonry** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Astral" — architecture template
  (source: https://colorlib.com/wp/template/astral/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/astral/
  (HTTP 200, full rendered DOM + `css/style.css` (67KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **yellow** brand (`#f9cc41`), Oswald + Roboto fonts, a "Precise Created
  Only For You" hero with an image carousel, an about section with "1990"
  fact boxes, and square yellow CTA buttons.
- **Structure (1:1, section order):**
  1. Navbar: logo "masonry" + Home, About, Services, Portfolio, Contact +
     dark-mode toggle.
  2. Hero: "Precise Created Only For You" + blurb + **get started** (with
     image carousel on the left).
  3. About: "We Are Creating Since 1990" + fact boxes (1990 · Projects
     done, etc.).
  4. Services: "Our Service Offerings" + cards **Total Architecture,
     Interior Solution, Construction Guideline** + view all services.
  5. Portfolio: "Our Portfolio Museum" + Featured Projects gallery +
     view all projects.
  6. Testimonials: "Falcon Astle" quote slider.
  7. Contact: "Send Us Messages" + view contact info.
  8. Footer: Recent Blog Posts, link columns, social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **yellow `#f9cc41`** (buttons, accents); darker `#f8b600`.
  - Dark text `#222222`; light `#f9f9ff`, `#ffffff`.
  - Accents `#4cd3e3` (cyan), `#38a4ff` (blue).
  - Footer background `#000410` (near-black navy).
  - Fonts: **"Oswald"** (display, Google Fonts `<link>`) + **"Roboto"**
    (body).
  - `.primary-btn`: background `#f9cc41`, height 50px, padding 0 40px,
    border-radius 0 (square), white text.
- **Recreation name:** Masonry (NEW — the ColorLib source is "Astral").
  App folder `apps/masonry`, package `@free-react-templates/masonry`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/astral-<n>/<w>/<h>`); lucide-react icons; Oswald +
  Roboto via Google Fonts; forms prevent default (no backend); yellow
  primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-masonry/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/masonry` (copy the architecture landing app pattern —
      Facade; rename package to `@free-react-templates/masonry`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh masonry` + `npm run spec:validate`.
- [x] Push `feat/template-masonry`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
