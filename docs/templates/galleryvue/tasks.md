# Galleryvue Tasks

> **SHIPPED** — this prep's design shipped as `apps/galleryvue`
> (<https://galleryvue.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

- [x] Write spec (openspec/specs/template-galleryvue/spec.md)
- [ ] Scaffold app (apps/galleryvue)
- [ ] Write tests (Sidebar, Gallery, Footer)
- [ ] Implement components
- [ ] Run per-app gate (verify-app.sh galleryvue)
- [ ] PR + merge
- [ ] Bookkeeping (TEMPLATES.md [x], README, homepage)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/galleryvue/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/galleryvue/public/CNAME` = `galleryvue.free.componentdock.com`
  and the package `homepage` = `https://galleryvue.free.componentdock.com`.
