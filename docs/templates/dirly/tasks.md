# Dirly — Implementation Tasks

- [x] Write spec (openspec/specs/template-dirly/spec.md)
- [ ] Scaffold app (copy from roster, rename package)
- [ ] Write tests (Navbar, Hero, PopularCategories, Footer, App)
- [ ] Implement components
- [ ] Run per-app gate (scripts/verify-app.sh dirly)
- [ ] PR + merge
- [ ] Bookkeeping (TEMPLATES.md [x], readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dirly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dirly/public/CNAME` = `dirly.free.componentdock.com`
  and the package `homepage` = `https://dirly.free.componentdock.com`.
