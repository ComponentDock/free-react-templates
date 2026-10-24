# Strider — Tasks

> **SHIPPED** — this prep's design shipped as `apps/strider`
> (<https://strider.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Spec

- [x] Write spec (openspec/specs/template-strider/spec.md)

## Scaffold

- [x] Copy app structure from stall
- [x] Rename package to @free-react-templates/strider
- [x] Set homepage and CNAME
- [x] Update index.html title + meta + fonts (Poppins + Roboto)
- [x] Update index.css theme tokens (orange gradient brand)
- [x] npm install to register workspace

## Components (TDD)

- [ ] Navbar
- [ ] Hero
- [ ] Features
- [ ] CategoryGrid
- [ ] Products
- [ ] ExclusiveDeal
- [ ] BrandLogos
- [ ] DealsOfTheWeek
- [ ] Footer

## Integration

- [ ] App.tsx composing all sections
- [ ] per-app gate (verify-app.sh strider)
- [ ] PR + merge
- [ ] Bookkeeping (TEMPLATES.md [x], surge URL, homepage, readme:status)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/strider/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/strider/public/CNAME` = `strider.free.componentdock.com`
  and the package `homepage` = `https://strider.free.componentdock.com`.
