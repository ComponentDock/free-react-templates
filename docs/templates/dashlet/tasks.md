# Dashlet — Implementation Tasks

> **SHIPPED** — this prep's design shipped as `apps/dashlet`
> (<https://dashlet.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

Recreation of ColorLib Sidebar V05 (https://colorlib.com/wp/template/colorlib-sidebar-v05/)

## Design Analysis

From the screenshot and ColorLib metadata:

- Left sidebar navigation with blue circle logo
- Nav links: Home (active with blue left border), Videos, Books, Store
- "FEATURED USERS" section with 8 user avatars + names
- Main content area with 2-column article grid
- Each article: thumbnail, title, date
- Color: blue accent (#1a73e8), white sidebar, gray content background

## Tasks

- [ ] Create app scaffold (copy aurora, rename package)
- [ ] Write spec (openspec/specs/template-dashlet/spec.md)
- [ ] Write tests for Sidebar component
- [ ] Write tests for ArticleGrid component
- [ ] Write tests for App component
- [ ] Implement Sidebar component
- [ ] Implement ArticleGrid component
- [ ] Implement App component
- [ ] Run verify-app.sh
- [ ] Open PR, merge, bookkeeping

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dashlet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dashlet/public/CNAME` = `dashlet.free.componentdock.com`
  and the package `homepage` = `https://dashlet.free.componentdock.com`.
