# FooterBloom — Tasks

> **SHIPPED** — this prep's design shipped as `apps/footerbloom`
> (<https://footerbloom.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

## Spec & Research

- [x] Analyze ColorLib Bootstrap Footer 15 preview and screenshot
- [x] Extract design tokens (colors, fonts, spacing, layout)
- [x] Write spec.md with Purpose + Requirements + Scenarios
- [x] Validate spec with `openspec validate`

## Implementation

- [x] Scaffold app from footerwell template
- [x] Update package.json (name, homepage, lucide-react dep)
- [x] Update index.html (title, Google Fonts)
- [x] Create public/CNAME
- [x] Write index.css with design tokens
- [x] Implement Footer.tsx component
- [x] Write App.tsx (minimal shell with heading + Footer)
- [x] Run `npm install` to register workspace

## Tests

- [x] Write Footer.test.tsx with 30 tests
- [x] Write App.test.tsx with 3 tests
- [x] Achieve 100% coverage
- [x] Run per-app gate: typecheck + lint + test:coverage + build

## PR & Merge

- [ ] Push branch, create PR, merge immediately
- [ ] Bookkeeping: TEMPLATES.md [x] + surge URL + homepage

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/footerbloom/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/footerbloom/public/CNAME` = `footerbloom.free.componentdock.com`
  and the package `homepage` = `https://footerbloom.free.componentdock.com`.
