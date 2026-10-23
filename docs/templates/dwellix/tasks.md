# Dwellix — Implementation Tasks

Recreation of ColorLib "Rehomes" (https://colorlib.com/wp/template/rehomes/)

## Tasks

- [x] Write spec (openspec/specs/template-dwellix/spec.md)
- [ ] Scaffold app (copy drift base, rename package)
- [ ] Create index.css with design tokens
- [ ] Create TopHeader component + test
- [ ] Create Navbar component + test
- [ ] Create SearchBar component + test
- [ ] Create FeaturedProperties component + test
- [ ] Create WhyChooseUs component + test
- [ ] Create PropertyCategories component + test
- [ ] Create CtaBanner component + test
- [ ] Create LatestNews component + test
- [ ] Create Partners component + test
- [ ] Create Footer component + test
- [ ] Compose App.tsx + test
- [ ] Run verify-app.sh
- [ ] PR + merge
- [ ] Bookkeeping (TEMPLATES.md [x], homepage, CNAME, readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dwellix/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dwellix/public/CNAME` = `dwellix.free.componentdock.com`
  and the package `homepage` = `https://dwellix.free.componentdock.com`.
