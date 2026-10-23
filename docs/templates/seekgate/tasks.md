# Seekgate — Tasks

## Template info

- **Name:** Seekgate
- **Original:** Colorlib Search 9
- **Source:** https://colorlib.com/wp/template/colorlib-search-9/
- **Preview:** 404 (used screenshot)
- **Slug:** seekgate

## Tasks

- [x] Write spec (openspec/specs/template-seekgate/spec.md)
- [x] Create app scaffold (apps/seekgate/)
- [x] Implement SearchCard component
- [x] Implement Footer component
- [x] Write tests (13 tests, 100% coverage)
- [x] Per-app gate (typecheck + lint + tests + build)
- [x] Create PR and merge
- [x] Bookkeeping (TEMPLATES.md, homepage, CNAME)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/seekgate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/seekgate/public/CNAME` = `seekgate.free.componentdock.com`
  and the package `homepage` = `https://seekgate.free.componentdock.com`.
