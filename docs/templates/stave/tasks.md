# Stave (ColorLib Accordion 14) Preparation

## Tasks Outline

1. Scaffold `apps/stave` by copying a clean existing app (e.g., `apps/pleat`).
2. Update package name to `@free-react-templates/stave`, homepage, and `public/CNAME`.
3. Build components: `Navbar.tsx`, `Hero.tsx`, `AccordionSection.tsx`, `Footer.tsx`.
4. Implement TDD tests (`App.test.tsx`, component tests) achieving 100% test coverage.
5. Verify via `scripts/verify-app.sh stave`.
6. Register in root `package-lock.json` (`npm install`).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/stave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/stave/public/CNAME` = `stave.free.componentdock.com`
  and the package `homepage` = `https://stave.free.componentdock.com`.
