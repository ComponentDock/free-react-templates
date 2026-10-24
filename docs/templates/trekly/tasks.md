# Trekly — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/trekly`
> (<https://trekly.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

- [x] Write spec (openspec/specs/template-trekly/spec.md)
- [x] Write design notes (docs/templates/trekly/)
- [ ] Scaffold app from tavern template
- [ ] Write tests for all components (TDD — red phase)
- [ ] Implement Navbar component
- [ ] Implement Hero component (slider)
- [ ] Implement SearchBar component
- [ ] Implement Services component
- [ ] Implement Stats counter component
- [ ] Implement ParallaxCTA component (reusable)
- [ ] Implement TravelCards component
- [ ] Implement RoomCards component
- [ ] Implement RestaurantCards component
- [ ] Implement BlogEntries component
- [ ] Implement Footer component
- [ ] Implement App.tsx composition
- [ ] Run verify-app.sh
- [ ] Open PR and merge
- [ ] Bookkeeping (TEMPLATES.md [x], homepage, readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/trekly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/trekly/public/CNAME` = `trekly.free.componentdock.com`
  and the package `homepage` = `https://trekly.free.componentdock.com`.
