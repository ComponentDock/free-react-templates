# Prantokon (Colorlib Prantokon) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-prantokon`.

## Design notes (replication findings)

- **Original:** ColorLib "Prantokon" — apps landing HTML template
  (source: https://colorlib.com/wp/template/prantokon/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/prantokon/
  (HTTP 200, full rendered DOM + `css/preview.css` (4KB) extracted).
- **Visual design (from DOM + CSS tokens):** the ColorLib preview for this
  entry is a **product showcase page** ("Prantokon Preview — Apps Landing
  Html Template") with a dark theme, a big "MAKE YOUR WEBSITE WITH OUR Apps
  Awesome Landing TEMPALTE" headline, a PURCHASE NOW button, a list of the
  template's 3 home-page variants (#1 HOME (IMAGE), #2 HOME (SLIDER), #3
  HOME (VIDEO)) plus #4 BLOG and #5 BLOG-DETAILS layouts, then a ColorLib
  footer.
- **Structure (1:1, section order):**
  1. Navbar: "Prantokon" + "Prantokon Preview" tagline.
  2. Hero: "MAKE YOUR WEBSITE WITH OUR Apps Awesome Landing TEMPALTE" +
     **PURCHASE NOW!**.
  3. Showcase: "3 HOME PAGE | AND OTHER LAYOUT'S" — #1 HOME (IMAGE),
     #2 HOME (SLIDER), #3 HOME (VIDEO), #4 BLOG, #5 BLOG-DETAILS.
  4. Footer: copyright + Colorlib credit.
- **Design tokens extracted from `preview.css`:**
  - Dark showcase theme (near-black bg, white text); **blue `#0F7CDD`**
    accent on buttons.
  - Font: system sans stack.
- **Recreation name:** Prantokon (kept — matches ColorLib name, distinct
  from existing names). App folder `apps/prantokon`, package
  `@free-react-templates/prantokon`.
- **Recreation approach:** dark showcase page with variant cards rendered
  as styled swatches; lucide-react icons; repo-standard Navbar (dark-mode
  toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-prantokon/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/prantokon` (copy the simplest app; rename package to
      `@free-react-templates/prantokon`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-prantokon`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
