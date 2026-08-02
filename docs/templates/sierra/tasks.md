# Sierra (Colorlib Sierra) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-sierra`.

## Design notes (replication findings)

- **Original:** ColorLib "Sierra" — startup / business landing template
  (source: https://colorlib.com/wp/template/sierra/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/sierra/
  (HTTP 200, full rendered DOM + `css/style.css` (51KB) extracted).
- **Visual design (from DOM + CSS tokens):** startup landing with a
  **purple** brand (`#9b8aff`) + **blue** accent (`#6ebdfe`), Open Sans +
  Roboto fonts, a "Choose a powerful design" hero, 3 feature cards,
  testimonials, portfolio, and blog.
- **Structure (1:1, section order):**
  1. Navbar: logo "Sierra" + Home, About Us, Services, Portfolio, Blog,
     Contact.
  2. Hero (revolution slider in original): "Choose a powerful design for
     your Start-up" + **Get your freebie template now!** + **Discover**.
  3. Features: "Discover the features — We are young but bold" + 3 cards —
     **Brand Identity, Online Marketing, Social Media** (icon + blurb +
     **Read More**).
  4. Testimonials: "They are the best" + quote + **Chriss Turner — CEO
     Enterprise** (carousel).
  5. Portfolio + Blog sections.
  6. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **purple `#9b8aff`**; **blue `#6ebdfe`**; dark navy `#0b1033`.
  - Muted `#7c8d93`.
  - Fonts: **"Open Sans"** + **"Roboto"** (Google Fonts `<link>`).
  - Purple buttons with white text.
- **Recreation name:** Sierra (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/sierra`, package
  `@free-react-templates/sierra`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/sierra-<n>/<w>/<h>`); lucide-react icons; Open Sans
  - Roboto via Google Fonts; hero slider recreated as static hero; purple
    primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
    chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-sierra/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/sierra` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/sierra`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-sierra`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
