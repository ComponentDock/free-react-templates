# Zest (Colorlib Zeedapp) — Tasks & Design Notes

> Recreation of ColorLib "Zeedapp" under the new name **Zest** (the original
> prep kept the source name, which predates the mandatory new-name rule;
> the spec was renamed `template-zeedapp` → `template-zest` during
> implementation).

## Design notes (replication findings)

- **Original:** ColorLib "Zeedapp" — SaaS & app landing startups template
  (source: https://colorlib.com/wp/template/zeedapp/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/zeedapp/
  (HTTP 200, full rendered DOM + `css/style.css` (6KB) extracted).
- **Visual design (from DOM + CSS tokens):** the preview is a compact
  **demo-showcase page** ("Zeedapp — SaaS & App Landing Startups
  Template") with a **pink/red** brand (`#f26367`), a "Purchase Now" hero
  with demo counts (10 total page / 6 home page / 4 blog page), a demo list
  (Home One / background Slider, Home Two / Paralax Slider, Home Three /
  Gradiant Paralax, Home Four / Gradiant Color, Home Five / Gradiant Warm
  Canvas, Home Six / background video; blog standard, blog with sidebar,
  blog left sidebar, blog details), a "CREATE YOUR OWN WEBSITE TODAY !"
  CTA, then a ColorLib footer.
- **Structure (1:1, section order):**
  1. Navbar: "Zest".
  2. Hero: "Zest is a SaaS & App Landing Startups Template" +
     **Purchase Now** + counts (10 total page, 6 home page, 4 blog page).
  3. Demo showcase: 6 home variants + 4 blog layouts (as above).
  4. CTA: "CREATE YOUR OWN WEBSITE TODAY !" + **Purchase Now**.
  5. Footer: copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink/red `#f26367`**; dark text `#372940`; light `#f9f9f9`,
    `#f3f3f3`; counter numbers `#444`/`#555`.
  - Buttons: white bg + `#444` text, padding 9px 22px, radius 2px, hover
    inverts.
  - Demo items: soft shadow, title bar 80px uppercase monospace.
  - Font: system sans stack.
- **Recreation name:** Zest (NEW — the ColorLib source name "Zeedapp" is
  never reused). App folder `apps/zest`, package
  `@free-react-templates/zest`, homepage
  `https://free-react-templates-zest.surge.sh`.
- **Recreation approach:** showcase page with gradient variant cards;
  lucide-react icons; pink primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-zest/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Rename prep artifacts to the new name (`template-zeedapp` →
      `template-zest`, `docs/templates/zeedapp` → `docs/templates/zest`).
- [x] Create `apps/zest` (copy the simplest app; rename package to
      `@free-react-templates/zest`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Per-app gate: `scripts/verify-app.sh zest` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [x] Push `feat/template-zest`, open PR (source template, preview URL,
      design tokens, what differs).
- [x] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
