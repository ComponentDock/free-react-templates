# Threadcraft — Tasks

> **SHIPPED** — this prep's design shipped as `apps/threadcraft`
> (<https://threadcraft.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Spec

- [x] Spec written: `openspec/specs/template-threadcraft/spec.md`

## Implementation

- [ ] Scaffold app: `apps/threadcraft/` (copy abjure, rename package)
- [ ] Create index.html with Mulish font
- [ ] Create vite.config.ts with injectUiSource()
- [ ] Create vitest.config.ts
- [ ] Create tsconfig.json
- [ ] Create public/CNAME
- [ ] Create src/index.css with theme tokens
- [ ] Create src/main.tsx
- [ ] Components:
  - [ ] TopBar
  - [ ] Navbar
  - [ ] HeroSlider
  - [ ] CategoryTabs
  - [ ] ProductCard
  - [ ] TrendingProducts
  - [ ] DealOfTheWeek
  - [ ] FeaturedProducts
  - [ ] CollectionGallery
  - [ ] BlogSection
  - [ ] FeaturesBar
  - [ ] Footer
- [ ] Create src/App.tsx composing all sections

## Tests

- [ ] App.test.tsx — full integration tests
- [ ] 100% coverage verified

## Bookkeeping

- [ ] TEMPLATES.md [x] + surge URL
- [ ] npm install (lockfile registration)
- [ ] homepage in package.json
- [ ] PR created and merged
- [ ] readme:status run

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/threadcraft/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/threadcraft/public/CNAME` = `threadcraft.free.componentdock.com`
  and the package `homepage` = `https://threadcraft.free.componentdock.com`.
