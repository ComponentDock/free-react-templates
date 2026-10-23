# Sonance — Implementation Tasks

## Template Info

- **Name:** Sonance
- **Original:** ColorLib Megapod (https://colorlib.com/wp/template/megapod/)
- **Preview:** https://preview.colorlib.com/theme/megapod/
- **Type:** Podcast website

## Tasks

- [x] Spec written (openspec/specs/template-sonance/spec.md)
- [ ] Scaffold app (copy driven boilerplate, rename)
- [ ] Implement Navbar component
- [ ] Implement Hero component
- [ ] Implement AudioPlayer component
- [ ] Implement Podcast (Live & Upcoming) component
- [ ] Implement CallToAction component
- [ ] Implement Episodes (Latest) component
- [ ] Implement Footer component
- [ ] Compose App.tsx
- [ ] Write all tests (100% coverage)
- [ ] Run verify-app.sh
- [ ] PR + merge
- [ ] Bookkeeping (TEMPLATES.md [x], readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/sonance/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sonance/public/CNAME` = `sonance.free.componentdock.com`
  and the package `homepage` = `https://sonance.free.componentdock.com`.
