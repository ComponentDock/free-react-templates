# Cantilever (Colorlib Maxitechture) — Tasks & Design Notes

> Implemented on `feat/template-cantilever` (renamed from the prep
> artifacts, which shipped under the ColorLib SOURCE name `maxitechture`).

## Design notes (replication findings)

- **Original:** ColorLib "Maxitechture" — architecture template
  (source: https://colorlib.com/wp/template/maxitechture/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/maxitechture/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens + screenshot):** architecture
  landing with a **lime** brand (`#a7cb00`), dark `#222222` text, `#777777`
  body text, `#f9f9ff` light backgrounds, Roboto (body) + Heebo (display)
  fonts, lime rounded buttons, dark hero image, dark footer.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About, Work, Services, Blog, Contact.
  2. Hero: "Precise concept design for stylish living" + **Get Started**.
  3. Welcome (About): "Welcome to Maxitechture" eyebrow + headline +
     "Precise concept design for unique stylish living alone" +
     **More About Us**.
  4. Services: "What we offer to our clients" + Architecture, Interior
     Design, Concept Design cards (View Details).
  5. Projects: "Our Recent Completed Projects" + Nest Protect gallery.
  6. Testimonials: "What Customer Say About Us" + Mark Alviro Wiens
     carousel with star ratings.
  7. Client logos strip.
  8. Blog: "Recent From Our Blog" + post cards (Travel / Life style tags,
     "Low Cost Advertising", 31st January, 2018).
  9. Footer: About Me / Newsletter (lime arrow submit) / Follow Me +
     copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **lime `#a7cb00`** (45 refs); dark `#222222` (42 refs); body
    `#777777` (20 refs); light `#f9f9ff` (16 refs).
  - Fonts: **"Roboto"** (Google Fonts `<link>`) + **"Heebo"** (display).
- **Recreation name:** Cantilever (NEW — differs from ColorLib source).
  App folder `apps/cantilever`, package
  `@free-react-templates/cantilever`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/cantilever-<n>/<w>/<h>`); lucide-react icons;
  Roboto + Heebo via Google Fonts; lime primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, cn).

## Tasks

- [x] Rename prep artifacts `template-maxitechture` → `template-cantilever`
      (spec + docs), rewrite content with the new name and REAL sections.
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/cantilever` (copy the architecture landing pattern —
      Lintel; rename package to `@free-react-templates/cantilever`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `bash scripts/verify-app.sh cantilever` + spec:validate.
- [x] Push `feat/template-cantilever`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [x] After merge: TEMPLATES.md `[~]` → `[x]` (all 3 copies) + Surge URL +
      homepage + `npm run readme:status` (bookkeeping on main).
