# Vantix (Colorlib Itkol) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/vantix`
> (<https://vantix.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Prep artifacts prepared on `main` while the Tears PR (#5) awaits review.
> Implementation ships later on `feat/template-vantix`.

## Design notes (replication findings)

- **Original:** ColorLib "Itkol" (marketing title "IT-Solution") — IT
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
  7. About: "Vantix - Partner for Your Business" + blurb + **Request a
     Quote** + stats **2500+ / 350+ / 20+**.
  8. Case studies: "Some of Our Great Stuffs" + "inspire design studio"
     cards x3.
  9. Footer: columns + social + copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **pink `#FF4495`**; navy `#232F55`; dark violet `#140C40`.
  - Light bgs `#f9f9ff`.
  - Fonts: **"Josefin Sans"** + **"Mulish"** (Google Fonts `<link>`).
  - Pink rounded buttons with white text.
- **Recreation name:** Vantix — an original IT-services name, distinct from
  the source design name. App folder `apps/vantix`, package
  `@free-react-templates/vantix`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/vantix-<n>/<w>/<h>`); lucide-react icons; Josefin
  Sans + Mulish via Google Fonts; forms prevent default (no backend); pink
  primary + navy in `@theme`; repo-standard Navbar (dark-mode toggle) +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-vantix/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Create `apps/vantix` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/vantix`).
- [x] TDD: tests first for each section component; run red.
- [x] Implement components (green) at 100% coverage.
- [x] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [x] Push `feat/template-vantix`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/vantix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vantix/public/CNAME` = `vantix.free.componentdock.com`
  and the package `homepage` = `https://vantix.free.componentdock.com`.
