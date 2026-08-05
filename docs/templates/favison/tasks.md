# Favison (Colorlib Favison) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-favison`.

## Design notes (replication findings)

- **Original:** ColorLib "Favison" — SAAS / software landing page
  (source: https://colorlib.com/wp/template/favison/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/favison/
  (HTTP 200, full rendered DOM + `css/style.css` (75KB) extracted).
- **Visual design (from DOM + CSS tokens):** SaaS landing with a
  **pink/rose** brand (`#f84b67`) + **yellow** accent (`#f8b600`), Poppins
  font, dark (`#1d1d1d`) and light (`#f9f9ff`) alternating sections, a
  "Build a better business" hero, 3 service cards, a 6-tile features grid,
  and pricing.
- **Structure (1:1, section order):**
  1. Navbar: logo "Favison SAAS" + Home, Features, Price, Pages, Blog,
     Contact + **Sign Up**.
  2. Hero (`home_banner_area`): h1 "Build a better business & faster" +
     blurb + **Begin Free Trial**.
  3. Services (`service-area`): **Unique Design, Business Solution,
     Customer Support** (icon + blurb + **Read More**).
  4. About (`about-area`): "Form Female From Cattle Evening." + 6 tiles —
     **Cloud Compatibility, On Time Delivery, Easy to Use, Mobile
     Application, Add New Project, Generating Leads**.
  5. Feature band (`feature-area bg_one`): "Set dry signs spirit a kind
     First shall them." + 3 lines.
  6. Pricing (`pricing_area`): "Our Pricing Plan" + **Standard $25/month**
     (2GB Bandwidth, Two Account, 15GB Storage, Sale After Service) +
     purchase button.
  7. Stats (`statics-area`): counter band.
  8. Blog (`latest-blog-area`): post cards.
  9. Brands (`brands-area`): logo strip.
  10. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#f84b67`**; **yellow `#f8b600`** accent.
  - Dark `#1d1d1d`, `#2a2a2a`; light `#f9f9ff`.
  - Font: **"Poppins"** (Google Fonts `<link>`).
  - Rounded pink buttons with white text.
- **Recreation name:** Favison (kept — matches ColorLib name, distinct from
  existing names). App folder `apps/favison`, package
  `@free-react-templates/favison`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/favison-<n>/<w>/<h>`); lucide-react icons; Poppins
  via Google Fonts; pink primary + yellow accent in `@theme`;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-favison/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/favison` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/favison`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-favison`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
