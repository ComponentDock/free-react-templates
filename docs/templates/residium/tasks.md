# Residium — Implementation Tasks

## Template: Residium (ColorLib Hus)

- [x] Research: fetch preview DOM + CSS tokens
- [x] Write spec: openspec/specs/template-residium/spec.md
- [x] Scaffold app from manor template
- [x] Implement Navbar component + tests
- [x] Implement HeroSlider component + tests
- [x] Implement About component + tests
- [x] Implement Facilities component + tests
- [x] Implement Certificates component + tests
- [x] Implement Apartments component + tests
- [x] Implement Testimonials component + tests
- [x] Implement CTA component + tests
- [x] Implement LatestNews component + tests
- [x] Implement Footer component + tests
- [x] Verify: typecheck + lint + tests (100% coverage) + build
- [x] PR + merge
- [x] Bookkeeping: TEMPLATES.md [x], homepage, readme:status

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/residium/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/residium/public/CNAME` = `residium.free.componentdock.com`
  and the package `homepage` = `https://residium.free.componentdock.com`.
