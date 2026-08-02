# Susan (Colorlib SuSan) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-susan`.

## Design notes (replication findings)

- **Original:** ColorLib "SuSan" — app landing page template with demo
  showcase (source: https://colorlib.com/wp/template/susan/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/susan/
  (HTTP 200, full rendered DOM + `css/style.css` (6KB) extracted).
- **Visual design (from DOM + CSS tokens):** the preview is a compact
  **demo-showcase page** ("SuSan App Landing Page Template — Android /
  Apple iSO") with a **pink/red** brand (`#f8395d`), Montserrat + Open Sans
  fonts, a "Complete Landing Page and Multipurpose Package" hero with View
  Demos / Buy SuSan buttons, and a demo list (Home onepage: OnePage - 01,
  OnePage - 02; Blog: Blog List - 01/02, Blog Details - 01/02), then a
  ColorLib footer.
- **Structure (1:1, section order):**
  1. Navbar: "SuSan".
  2. Hero: "SuSan App Landing Page Template" + "A Complete Landing Page and
     Multipurpose Package" + **View Demos / Buy SuSan**.
  3. Demo showcase: "Home onepage Demos" (OnePage - 01, OnePage - 02) +
     "SuSan Blog Page Demos" (Blog List - 01/02, Blog Details - 01/02).
  4. Footer: copyright + Colorlib credit.
- **Design tokens extracted from `style.css`:**
  - Primary **pink/red `#f8395d`**; dark `#191919`, `#4f4f4f`; light
    `#f7f7f7`.
  - Fonts: **"Montserrat"** + **"Open Sans"** (Google Fonts `<link>`).
- **Recreation name:** Susan (kept — TEMPLATES.md name; distinct from
  existing names). App folder `apps/susan`, package
  `@free-react-templates/susan`.
- **Recreation approach:** showcase page with phone-mockup cards; lucide
  icons; Montserrat + Open Sans via Google Fonts; pink primary in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-susan/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/susan` (copy the simplest app; rename package to
      `@free-react-templates/susan`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-susan`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
