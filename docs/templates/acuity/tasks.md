# Acuity — Implementation Tasks & Design Notes

Recreation of ColorLib **Accordion 15** (`https://colorlib.com/wp/template/accordion-15/`).

## Design & Structure Notes

1. **Header / Hero Section**: Clean minimalist header introducing interactive profile widgets and modern accordion components.
2. **Main Accordion / Profile Widget Section**: Series of interactive collapsible accordion cards featuring profile avatars, names, roles, bio details, and performance stats.
3. **Interactive Features**: Smooth collapse/expand state transitions, tab filtering, and action buttons ("Connect", "Message").
4. **Footer**: Clean dark/light footer with copyright and mandatory link to [Component Dock](https://www.componentdock.com/).

## Task Breakdown for Implementer

- [ ] Scaffold app `apps/acuity` (copy from simplest existing app, update package name to `@free-react-templates/acuity`, add `public/CNAME` with `acuity.free.componentdock.com`).
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Implement design tokens in `src/index.css` (`@theme`).
- [ ] Build components: Navbar, Hero, ProfileAccordionList, AccordionCard, Footer.
- [ ] Write unit tests for all components with 100% coverage (`src/test/` or colocated `*.test.tsx`).
- [ ] Verify with `scripts/verify-app.sh acuity`.
- [ ] Build and register in workspace root (`npm install`).
