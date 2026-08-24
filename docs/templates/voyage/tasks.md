# Tasks: Voyage (Travel & Tourism Landing Template)

- [ ] Workspace setup: create `apps/voyage` copying structure from `apps/nexus`
- [ ] Configure `package.json` with `@free-react-templates/voyage` and workspaces
- [ ] Configure `vite.config.ts` with `injectUiSource()` helper
- [ ] Configure `public/CNAME` with `voyage.free.componentdock.com`
- [ ] Implement `src/index.css` with Tailwind v4 `@theme` tokens (`primary: #fc8621`, fonts)
- [ ] Implement components (TDD + 100% coverage):
  - [ ] `Navbar.tsx` + `Navbar.test.tsx`
  - [ ] `Hero.tsx` + `Hero.test.tsx`
  - [ ] `About.tsx` + `About.test.tsx`
  - [ ] `Destinations.tsx` + `Destinations.test.tsx`
  - [ ] `Testimonials.tsx` + `Testimonials.test.tsx`
  - [ ] `Faq.tsx` + `Faq.test.tsx` (interactive accordion state)
  - [ ] `Blog.tsx` + `Blog.test.tsx`
  - [ ] `Cta.tsx` + `Cta.test.tsx`
  - [ ] `Footer.tsx` + `Footer.test.tsx` (with Component Dock link)
- [ ] Compose sections in `src/App.tsx` + `App.test.tsx`
- [ ] Register root workspace in `package-lock.json` (`npm install`)
- [ ] Verify local gate (`scripts/verify-app.sh voyage`)
