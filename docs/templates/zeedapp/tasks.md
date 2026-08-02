# Zeedapp (Colorlib Zeedapp) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-zeedapp`.

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
  1. Navbar: "Zeedapp".
  2. Hero: "Zeedapp is a SaaS & App Landing Startups Template" +
     **Purchase Now** + counts (10 total page, 6 home page, 4 blog page).
  3. Demo showcase: 6 home variants + 4 blog layouts (as above).
  4. CTA: "CREATE YOUR OWN WEBSITE TODAY !" + **Purchase Now**.
  5. Footer: copyright + Colorlib credit.
- **Design tokens extracted from `style.css`:**
  - Primary **pink/red `#f26367`**; dark text `#372940`; light `#f9f9f9`,
    `#f3f3f3`.
  - Font: system sans stack.
- **Recreation name:** Zeedapp (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/zeedapp`, package
  `@free-react-templates/zeedapp`.
- **Recreation approach:** showcase page with gradient variant cards;
  lucide-react icons; pink primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-zeedapp/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/zeedapp` (copy the simplest app; rename package to
      `@free-react-templates/zeedapp`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-zeedapp`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
