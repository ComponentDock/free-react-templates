# Spotlight — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/spotlight`
> (<https://spotlight.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Template: Spotlight (ColorLib Listed2)

- Source: https://colorlib.com/wp/template/listed2/
- Preview: https://preview.colorlib.com/theme/listed2/
- New name: Spotlight
- Package: @free-react-templates/spotlight
- App folder: apps/spotlight

> **REFERENCE IDENTITY (2026-10-24)** — preview `theme/listed2/` is correct and
> is the ONLY page this design may be measured against (200, 28,515 B,
> Quicksand, `#7971ea`). The catalogue's `listed2` key says `theme/listed/`,
> which renders the sibling `listed` design (`apps/placeboard`) — a data bug,
> not a shared demo. Hero Search button radius is 30px (pill), not 4px.

## Tasks

- [x] Write spec (openspec/specs/template-spotlight/spec.md)
- [ ] Scaffold app (copy from placeboard, rename, configure)
- [ ] Create index.css with design tokens
- [ ] Create index.html with Google Fonts (Quicksand)
- [ ] Create vite.config.ts with injectUiSource()
- [ ] Create vitest.config.ts
- [ ] Create tsconfig.json
- [ ] Create test setup
- [ ] Implement Navbar component + tests
- [ ] Implement Hero component + tests
- [ ] Implement MostVisitedPlaces component + tests
- [ ] Implement PopularCategories component + tests
- [ ] Implement WhyUs component + tests
- [ ] Implement Testimonials component + tests
- [ ] Implement Blog component + tests
- [ ] Implement FAQ component + tests
- [ ] Implement CTA component + tests
- [ ] Implement Footer component + tests
- [ ] Implement App.tsx + App.test.tsx
- [ ] Run per-app gate (verify-app.sh spotlight)
- [ ] PR + merge + bookkeeping

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/spotlight/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/spotlight/public/CNAME` = `spotlight.free.componentdock.com`
  and the package `homepage` = `https://spotlight.free.componentdock.com`.
