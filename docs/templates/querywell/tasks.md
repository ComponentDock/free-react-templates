# QueryWell — Implementation Tasks

## Prep status: DONE (stream 3)

## Tasks

- [ ] Create app scaffold: `apps/querywell/` (copy simplest existing app, rename package)
- [ ] Set up `public/CNAME` → `querywell.free.componentdock.com`
- [ ] Set `homepage` in `package.json` → `https://querywell.free.componentdock.com`
- [ ] Configure `vite.config.ts` with `injectUiSource()`
- [ ] Implement `Hero.tsx` — full-bleed background image, centered flex layout
- [ ] Implement `SearchBar.tsx` — dark background input with magnifying glass icon
- [ ] Implement `CategoryLinks.tsx` — row of text links with hover transitions
- [ ] Implement `Footer.tsx` — Component Dock attribution
- [ ] Compose in `App.tsx`
- [ ] Add theme tokens in `index.css` (brand color, fonts)
- [ ] Add Google Fonts link for Poppins in `index.html`
- [ ] Write tests (TDD): Hero, SearchBar, CategoryLinks, Footer, App
- [ ] Run `npm run verify:app querywell` — 100% coverage
- [ ] Run `npm install` at root for lockfile registration
- [ ] Commit and push to feat branch
- [ ] Open PR, merge, deploy
