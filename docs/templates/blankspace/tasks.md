# Blankspace (ColorLib Whitespace) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the new name **Blankspace**
> (ColorLib source: "whitespace").

## Design notes (replication findings)

- **Original:** ColorLib "Whitespace" — SaaS/agency landing template
  (source: https://colorlib.com/wp/template/whitespace/).
- **Preview URL:** https://preview.colorlib.com/theme/whitespace/ (HTTP 200,
  full rendered DOM + `css/style.css` (2948 lines) extracted).
- **Visual design (from DOM + CSS tokens):** SaaS/agency landing with a
  **light blue `#78d5ef`** brand on white backgrounds, dark brown
  (`#3c312e`) footer, parallax counter section with dark image bg + white
  text, and a split hero layout (1/3 text + 2/3 full-height image).
  Work Sans + Poppins fonts. Clean, professional, Bootstrap 4 grid-based.
- **Structure (1:1, section order):**
  1. Navbar: dark bg, brand "Blankspace", links Home/About/Work/Pricing/Blog/Contact.
  2. Hero: split layout — left "Welcome" + h1 + h2 + CTA; right full-height bg image.
  3. About: split — right image, left "What We Can Do for You" + 4 services.
  4. Services: 4-column grid — Business Strategy, Data Analysis, Graphic Design, Creative.
  5. Counter: parallax bg image, "Interesting Facts", 4 animated counters (2000/300/100/1000).
  6. Projects: asymmetric 6-card grid, hover overlay + arrow button.
  7. Testimony: owl-carousel of 5 testimonials, "My satisfied customer says".
  8. Blog: 3-column blog cards (Case Study), meta + title.
  9. Pricing: 4 cards on `#f8f9fa` bg — Free/$0, Startup/$19, Premium/$49, Pro/$99.
  10. Partners: 5 grayscale logos row.
  11. Footer: dark brown `#3c312e`, 4 columns (brand+social, Useful Links, Quick Links, Contact).
- **Design tokens extracted from `css/style.css`:**
  - Primary **light blue `#78d5ef`** (buttons, accents, outline borders).
  - Hover states: `#56caeb` / `#4ac7ea`.
  - Footer dark brown `#3c312e`.
  - Pricing section bg `#f8f9fa`.
  - Price accent `#fcd307` (dollar sign).
  - Fonts: **"Work Sans"** (body, weights 300–900) + **"Poppins"** (headings).
  - Standard Bootstrap 4 radius `0.25rem` on buttons; no radius on cards.
- **Recreation name:** Blankspace (NEW — the ColorLib source is "whitespace").
  App folder `apps/blankspace`, package `@free-react-templates/blankspace`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/whitespace-<n>/<w>/<h>`); lucide-react icons (replacing
  flaticon/ionicons); Work Sans + Poppins via Google Fonts; forms prevent
  default (no backend); light blue primary `#78d5ef` in `@theme`; repo-standard
  Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-blankspace/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/blankspace` (copy the simplest existing SaaS landing app
      pattern; rename package to `@free-react-templates/blankspace`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh blankspace` + `npm run spec:validate`.
- [ ] Push `feat/template-blankspace`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
