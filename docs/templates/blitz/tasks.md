# Blitz — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/blitz`
> (<https://blitz.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

- [x] Spec written (openspec/specs/template-blitz/spec.md)
- [x] Replication research (preview HTML + CSS tokens)
- [x] App scaffold (apps/blitz/)
- [x] Components: Navbar, Hero, IconBoxes, AboutSection, Services, Features, Cta, TextLine, Newsletter, Footer
- [x] Tests: 100% coverage
- [x] Verification gate
- [ ] PR + merge
- [ ] Bookkeeping (TEMPLATES.md, readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/blitz/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/blitz/public/CNAME` = `blitz.free.componentdock.com`
  and the package `homepage` = `https://blitz.free.componentdock.com`.
