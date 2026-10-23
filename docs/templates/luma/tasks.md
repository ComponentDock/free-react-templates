# Luma — Implementation Tasks

Recreation of ColorLib "Photon" (photography portfolio).

## Tasks

- [x] Write spec (openspec/specs/template-luma/spec.md)
- [x] Scaffold app (apps/luma/) from bokeh template
- [x] Implement Navbar component
- [x] Implement Hero carousel component
- [x] Implement Footer component
- [x] Write App.tsx composing all sections
- [x] Write all tests (100% coverage)
- [x] Run per-app gate (verify-app.sh luma)
- [x] Mark TEMPLATES.md [~] and push claim
- [x] Open PR and merge
- [x] Bookkeeping (mark [x], surge URL, readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/luma/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/luma/public/CNAME` = `luma.free.componentdock.com`
  and the package `homepage` = `https://luma.free.componentdock.com`.
