# TownHub — Implementation Tasks

## Template Info

- **Name:** TownHub
- **Original:** ColorLib CityListing (directory/listing template)
- **Category:** Directory (33 items, this is #3 unstarted)
- **Package:** @free-react-templates/townhub

## Task Checklist

- [x] Replication: fetch preview DOM, CSS tokens, screenshot
- [x] Spec: openspec/specs/template-townhub/spec.md
- [ ] Scaffold: copy simplest app, rename package
- [ ] Components: Navbar, Hero, PopularLocations, HowItWorks, Categories, Testimonial, Subscribe, Blog, Footer
- [ ] Tests: 100% coverage
- [ ] Verification: scripts/verify-app.sh townhub
- [ ] PR + merge
- [ ] Bookkeeping: TEMPLATES.md [x], homepage, readme:status

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/townhub/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/townhub/public/CNAME` = `townhub.free.componentdock.com`
  and the package `homepage` = `https://townhub.free.componentdock.com`.
