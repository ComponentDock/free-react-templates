# Azura (Colorlib Stodeo) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-stodeo);
> renamed to the NEW name **Azura** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Stodeo" — business/corporate template
  (source: https://colorlib.com/wp/template/stodeo/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/stodeo/
  (HTTP 200, full rendered DOM + `css/style.css` extracted).
- **Visual design (from DOM + CSS tokens):** corporate/business landing with
  a **blue** brand (`#3369e7`) on dark blue (`#133ea1`) overlay sections,
  cyan (`#00aaff`) accent highlights, Noto Sans JP font, and a clean
  professional aesthetic.
- **Structure (1:1, section order):**
  1. Navbar: logo "Azura" + Home, Why Azura (dropdown), Our Services, Gallery,
     About, Contact Us + dark-mode toggle.
  2. Hero: "Welcome To Our Site" subheading + main heading + description +
     **Get started** CTA.
  3. Welcome split: image left + dark blue overlay box right with description.
  4. Why Choose Us: counter stats (years, projects, clients) on the left +
     services/content on the right.
  5. Services: "Grow your business" heading + service-2 cards (icon + title +
     description) over dark blue overlay.
  6. Blog Posts: "Our Blogs" / "Recent Blog Posts" + 3 post entries (date +
     title + description + read-more).
  7. Footer: About + Connect socials + Navigation links + Services links +
     copyright + Component Dock link.
- **Design tokens extracted from `css/style.css`:**
  - Primary **blue `#3369e7`** (buttons, logo).
  - Secondary **dark blue `#133ea1`** (welcome box, services overlay).
  - Accent **cyan `#00aaff`** (subheadings, counter numbers).
  - Heading color `#081b46` (dark navy).
  - Font: **"Noto Sans JP"** (Google Fonts, weights 400 + 700).
  - Button border-radius: `0.25rem` (4px).
  - Footer background: `#efefef`, text color `#888`.
  - Counter numbers: 50px, cyan.
- **Recreation name:** Azura (NEW — the ColorLib source is "Stodeo").
  App folder `apps/azura`, package `@free-react-templates/azura`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/azura-<n>/<w>/<h>`); lucide-react icons; Noto Sans JP
  via Google Fonts; forms prevent default (no backend); blue primary
  (`#3369e7`) + dark blue secondary (`#133ea1`) + cyan accent (`#00aaff`)
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome with
  Component Dock link.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-azura/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/azura` (copy the simplest existing app pattern;
      rename package to `@free-react-templates/azura`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh azura` +
      `npm run spec:validate`.
- [ ] Push `feat/template-azura`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
