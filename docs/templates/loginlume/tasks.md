# LoginLume — Task Outline

## Tasks

- [x] Write spec (openspec/specs/template-loginlume/spec.md)
- [ ] Scaffold apps/loginlume (package.json, vite.config.ts, vitest.config.ts, index.html, tsconfig)
- [ ] Write tests (LoginForm.test.tsx, ImagePanel.test.tsx, Footer.test.tsx, App.test.tsx)
- [ ] Implement components (LoginForm.tsx, ImagePanel.tsx, Footer.tsx, App.tsx)
- [ ] Add index.css with @theme tokens (Poppins, Montserrat, brand #6675df)
- [ ] Run per-app gate: scripts/verify-app.sh loginlume
- [ ] Push + PR + merge
- [ ] Bookkeeping: TEMPLATES.md [x] + surge URL + homepage + readme:status

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/loginlume/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/loginlume/public/CNAME` = `loginlume.free.componentdock.com`
  and the package `homepage` = `https://loginlume.free.componentdock.com`.
