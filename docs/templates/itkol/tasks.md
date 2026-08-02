# Itkol (Colorlib IT-Solution) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-itkol`.

## Design notes (replication findings)

- **Original:** ColorLib "IT-Solution" (TEMPLATES.md name: Itkol) — IT
  services / tech solutions site (source: https://colorlib.com/wp/template/itkol/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/itkol/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (67KB) extracted).
- **Visual design (from DOM + CSS tokens):** IT-services site with a **pink**
  brand (`#FF4495`) over **navy/violet** (`#232F55`, `#140C40`) dark hero,
  Josefin Sans + Mulish fonts, light (`#f9f9ff`) sections, 3 service cards,
  a features split, industries grid, CTA band, and about with stats.
- **Structure (1:1, section order):**
  1. Navbar: logo "IT-Solution" + Home, Services, About, Case Study, Blog,
     Contact + **Get Free Quote**.
  2. Hero: h1 "We provide best IT solution" + blurb ("Naxly bring the power
     of data science and artificial intelligence to every business").
  3. Services (`categories-area`): "Our Services — IT solutions for startup
     and enterprises" + **Managed IT services, Backup and recovery, Cyber
     security** (icon + blurb).
  4. New Features (`about-area2`): "New Features / You have received
     notification / Grow your business fast." + **Engage Teammates, Level
     Up Productivity** + **Learn More**.
  5. Industries (`services-area2`): "Industries We Serve — IT services
     customized for your industry" + **Industries & Manufacturing,
     Education & Health, Retail & Ecommerce, Travel & Hospitality**.
  6. CTA (`collection`): "Need a Technology support?" + **Get Started Now**.
  7. About: "ITKol - Partner for Your Business" + blurb + **Request a
     Quote** + stats **2500+ / 350+ / 20+**.
  8. Case studies: "Some of Our Great Stuffs" + "inspire design studio"
     cards x3.
  9. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#FF4495`**; navy `#232F55`; dark violet `#140C40`.
  - Light bgs `#f9f9ff`.
  - Fonts: **"Josefin Sans"** + **"Mulish"** (Google Fonts `<link>`).
  - Pink rounded buttons with white text.
- **Recreation name:** Itkol (kept — TEMPLATES.md name; package-safe).
  App folder `apps/itkol`, package `@free-react-templates/itkol`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/itkol-<n>/<w>/<h>`); lucide-react icons; Josefin
  Sans + Mulish via Google Fonts; forms prevent default (no backend); pink
  primary + navy in `@theme`; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-itkol/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/itkol` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/itkol`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-itkol`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
